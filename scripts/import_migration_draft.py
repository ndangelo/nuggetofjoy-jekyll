#!/usr/bin/env python3
"""Import the first-pass Nugget of Joy migration draft from a ZIP archive.

The WordPress homepage is deliberately not published as a normal page in this
pass: it occupied / on WordPress and contains its own full-page markup/styles.
It is retained in the source ZIP for a separate homepage migration.
"""
from pathlib import Path
import shutil
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE = ROOT / "migration-input" / "nuggetofjoy-jekyll-migration-draft.zip"
if not ARCHIVE.exists():
    raise SystemExit(
        "Missing migration-input/nuggetofjoy-jekyll-migration-draft.zip. "
        "Upload the downloaded migration draft ZIP there, then run this workflow again."
    )

with tempfile.TemporaryDirectory() as tmp:
    tmpdir = Path(tmp)
    with zipfile.ZipFile(ARCHIVE) as zf:
        zf.extractall(tmpdir)

    candidates = list(tmpdir.glob("*/_posts"))
    if len(candidates) != 1:
        raise SystemExit(f"Expected one extracted _posts folder; found {len(candidates)}")
    package = candidates[0].parent

    copied_posts = 0
    for src in (package / "_posts").glob("*.md"):
        dest = ROOT / "_posts" / src.name
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        copied_posts += 1

    copied_pages = 0
    for src in (package / "_pages").glob("*.md"):
        if src.stem.lower() == "homepage":
            continue
        dest = ROOT / "_pages" / src.name
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        copied_pages += 1

    reports = package / "reports"
    if reports.exists():
        for src in reports.iterdir():
            if src.is_file():
                dest = ROOT / "reports" / src.name
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src, dest)

    (ROOT / "reports" / "import-status.md").write_text(
        "# Migration import status\n\n"
        f"- Imported Markdown posts: {copied_posts}\n"
        f"- Imported non-homepage pages: {copied_pages}\n"
        "- The original WordPress homepage was intentionally held back for a separate migration. "
        "It originally occupied / and includes its own page markup and styles.\n"
        "- The source ZIP remains in migration-input/ and is excluded from the generated site.\n",
        encoding="utf-8",
    )

print(f"Prepared {copied_posts} posts and {copied_pages} pages.")
