#!/usr/bin/env python3
"""Build a media migration bundle from staging content; never edits live WordPress."""
import csv, hashlib, html, json, mimetypes, re
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError

OUT = Path("media-migration-output")
MAX_BYTES = 25 * 1024 * 1024
URL_RE = re.compile(r'''(?P<q>["'])(?P<url>https?://[^"'\\s<>]+)(?P=q)''', re.I)
SRCSET_RE = re.compile(r'''(?P<url>https?://[^\\s,)"']+)\\s+(?:\\d+(?:\\.\\d+)?x|\\d+w)''', re.I)
MD_IMAGE_RE = re.compile(r'''!\\[[^\\]]*\\]\\((https?://[^)\\s]+)(?:\\s+["'][^"']*["'])?\\)''', re.I)
ATTR_RE = re.compile(r'''\\b(?:src|href|data-src|data-lazy-src|poster)\\s*=\\s*["'](?P<url>https?://[^"']+)["']''', re.I)

def content_files():
    out = []
    for folder in ("_posts", "_pages"):
        p = Path(folder)
        if p.exists():
            out.extend(x for x in p.rglob("*") if x.is_file() and x.suffix.lower() in {".md", ".markdown", ".html"})
    return out

def collect(body):
    found = set()
    for pat in (URL_RE, SRCSET_RE, MD_IMAGE_RE, ATTR_RE):
        for m in pat.finditer(body):
            u = m.groupdict().get("url")
            if u:
                found.add(html.unescape(u).rstrip(".,;"))
    return {u for u in found if re.search(r"\\.(?:jpe?g|png|gif|webp|avif|svg|bmp|tiff?)(?:$|[?#])", u, re.I)
            or any(k in urlparse(u).path.lower() for k in ("/wp-content/uploads/", "/blog-images/"))}

def fetch(url):
    req = Request(url, headers={"User-Agent": "NuggetOfJoy-MediaMigration/1.0", "Accept": "image/*,*/*;q=0.5"})
    try:
        with urlopen(req, timeout=20) as r:
            ctype = r.headers.get("Content-Type", "").split(";")[0].lower()
            length = r.headers.get("Content-Length")
            if length and int(length) > MAX_BYTES:
                return url, None, "skipped_too_large", ctype, int(length)
            data = r.read(MAX_BYTES + 1)
            if len(data) > MAX_BYTES:
                return url, None, "skipped_too_large", ctype, len(data)
            if not ctype.startswith("image/") and ctype != "application/octet-stream":
                return url, None, "not_image:" + (ctype or "unknown"), ctype, len(data)
            return url, data, "ok", ctype, len(data)
    except HTTPError as e:
        return url, None, "http_" + str(e.code), "", 0
    except Exception as e:
        return url, None, "error:" + type(e).__name__ + ":" + str(e)[:100], "", 0

def main():
    out = OUT
    files = content_files()
    bodies = {str(p): p.read_text(encoding="utf-8", errors="replace") for p in files}
    sources = {}
    for path, body in bodies.items():
        for url in collect(body):
            sources.setdefault(url, []).append(path)
    urls = sorted(sources)
    (out / "assets/images/migrated").mkdir(parents=True, exist_ok=True)
    results = {}
    with ThreadPoolExecutor(max_workers=12) as pool:
        futures = {pool.submit(fetch, u): u for u in urls}
        for i, fut in enumerate(as_completed(futures), 1):
            url, data, status, ctype, size = fut.result()
            row = {"url": url, "status": status, "content_type": ctype, "bytes": size, "referenced_by": len(sources[url])}
            if data is not None:
                digest = hashlib.sha256(url.encode()).hexdigest()[:20]
                ext = Path(urlparse(url).path).suffix.lower()
                if ext not in {".jpg",".jpeg",".png",".gif",".webp",".avif",".svg",".bmp",".tif",".tiff"}:
                    ext = mimetypes.guess_extension(ctype) or ".img"
                rel = "assets/images/migrated/" + digest + ext
                dest = out / rel
                dest.parent.mkdir(parents=True, exist_ok=True)
                dest.write_bytes(data)
                row["local_path"] = rel
                row["sha256"] = hashlib.sha256(data).hexdigest()
            results[url] = row
            if i % 100 == 0 or i == len(urls):
                print(f"Processed {i}/{len(urls)}")
    changed = 0
    for relpath, original in bodies.items():
        body = original
        for url, row in results.items():
            if row.get("local_path"):
                body = body.replace(url, "/" + row["local_path"])
        if body != original:
            target = out / "content" / relpath
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(body, encoding="utf-8")
            changed += 1
    with (out / "media-report.csv").open("w", newline="", encoding="utf-8") as f:
        fields = ["url","status","content_type","bytes","referenced_by","local_path","sha256"]
        w = csv.DictWriter(f, fieldnames=fields); w.writeheader()
        for u in urls: w.writerow({k: results[u].get(k, "") for k in fields})
    ok = [r for r in results.values() if r["status"] == "ok"]
    failed = [r for r in results.values() if r["status"] != "ok"]
    total = sum(r.get("bytes", 0) for r in ok)
    summary = ["# Nugget of Joy media migration audit", "",
      "- Staging repository content only; live WordPress was not modified.",
      f"- Content files scanned: {len(files)}", f"- Unique media URLs: {len(urls)}",
      f"- Successfully downloaded: {len(ok)}", f"- Failed or skipped: {len(failed)}",
      f"- Download size: {total/(1024*1024):.1f} MiB", f"- Content files with rewritten copies: {changed}", "",
      "Downloaded files are under assets/images/migrated/. Rewritten copies are under content/.",
      "Original repository files are not changed. Review media-report.csv before applying the migration.", "", "## Failed or skipped URLs", ""]
    summary.extend(["- " + r["status"] + " — " + r["url"] for r in failed[:500]])
    (out / "summary.md").write_text("\\n".join(summary) + "\\n", encoding="utf-8")
    (out / "summary.json").write_text(json.dumps({"content_files_scanned":len(files),"unique_urls":len(urls),"downloaded":len(ok),"failed_or_skipped":len(failed),"downloaded_bytes":total,"rewritten_content_files":changed},indent=2),encoding="utf-8")
    print(f"Done: {len(ok)} downloaded; {len(failed)} failed/skipped; {total/(1024*1024):.1f} MiB.")
if __name__ == "__main__": main()
