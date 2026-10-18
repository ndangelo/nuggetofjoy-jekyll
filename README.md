# Nugget of Joy — Jekyll rebuild

This repository is the development version of Nugget of Joy. The existing WordPress site, the static archive repository, and the live domain remain untouched while this rebuild is developed.

## Structure

- `_posts/` — blog posts in Markdown with Jekyll front matter
- `_pages/` — CMS-managed pages (configured as the `content_pages` collection)
- `_layouts/` — shared page and post templates
- `assets/css/style.css` — styling adapted from the current site direction
- `assets/images/uploads/` — new media uploaded through the CMS
- `admin/` — Decap CMS interface and configuration
- `.github/workflows/pages.yml` — automated GitHub Pages build and deployment

## Migration status

The WordPress export has been converted into a draft package, but the converted posts have **not yet been imported into this repository**. See `reports/migration-audit.md` for the first content and media audit.

Important migration decisions:
- Preserve original post/page URLs wherever possible; verify the root homepage separately.
- Keep remote media URLs in place when they are known to be public. Do not bulk-copy media into Git without evidence that it is needed.
- Audit legacy `/wp-content/uploads/` links separately from direct S3 URLs; they are not interchangeable without confirming the actual object paths.
- Exclude private and draft posts from the public site unless explicitly requested.
- Keep the existing WordPress site untouched until the new site has been built and checked.

## Development checklist

1. Upload the migration draft ZIP into `migration-input/`, then run **Actions → Import WordPress migration draft → Run workflow**. The workflow imports published posts and non-homepage pages; the homepage is held for separate review. Then validate content, categories, tags, original URLs, and homepage behavior.
2. Audit image, PDF, and other downloadable media links.
3. Match the existing site's custom CSS and responsive layout rather than redesigning it.
4. Configure Decap CMS authentication securely. The interface exists, but publishing should not be enabled until backend authentication is configured.
5. Enable GitHub Pages using **Settings → Pages → Build and deployment → GitHub Actions** and test the preview deployment.

No live domain is connected to this repository.
