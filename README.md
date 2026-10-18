# Nugget of Joy — Jekyll rebuild

This repository is the development version of Nugget of Joy. The existing WordPress site, the static archive repository, and the live domain remain untouched while this rebuild is developed.

## Structure

- `_posts/` — 339 imported published WordPress posts in Markdown with original HTML bodies retained
- `_pages/` — CMS-managed pages, configured as the `content_pages` collection
- `_layouts/` — shared page and post templates
- `assets/css/style.css` — current staging stylesheet; the existing WordPress theme CSS still needs a careful migration/adaptation pass
- `assets/images/uploads/` — destination for new media uploaded through the CMS
- `admin/` — Decap CMS interface and configuration
- `.github/workflows/pages.yml` — automated Jekyll build and GitHub Pages deployment
- `migration-input/` — retained source ZIP, excluded from the generated site

## Migration status

- Imported 339 published posts and four non-homepage pages. See `reports/import-status.md`.
- Jekyll now builds successfully in GitHub Actions. The GitHub Pages deployment still depends on Pages being enabled for this repository.
- The original WordPress homepage is intentionally held for a separate migration because it contains its own layout, navigation, and CSS. The current `index.md` remains a temporary placeholder and must not be treated as the final homepage.
- The existing WordPress site and live domain have not been changed.

## Important migration decisions

- Preserve original post permalinks wherever possible and audit them against the WordPress export.
- Keep remote media URLs in place when they are known to be public. Do not bulk-copy media into Git without evidence that it is needed.
- Audit legacy `/wp-content/uploads/` links separately from direct S3 URLs; they are not interchangeable without confirming actual object paths.
- Exclude private and draft posts from the public site unless explicitly requested.
- Adapt the existing custom CSS and markup instead of redesigning the site from scratch.
- Configure Decap CMS authentication securely. Do not put personal access tokens or other secrets in this public repository.

## Next validation steps

1. Enable GitHub Pages in **Settings → Pages → Build and deployment → GitHub Actions** if GitHub does not allow the workflow to enable it automatically.
2. Migrate the original homepage deliberately, avoiding duplicate headers, navigation, or footers.
3. Compare sample posts and pages against their original URLs and verify categories, tags, and media.
4. Restore/adapt the existing theme CSS and test desktop and mobile layouts.
5. Configure and test Decap CMS authentication before enabling publishing.
6. Review the staging site before connecting any live domain or changing WordPress.

No live domain is connected to this repository.
