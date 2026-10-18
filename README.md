# Nugget of Joy — Jekyll rebuild

This repository is the development version of Nugget of Joy. The existing WordPress site and `nuggetofjoystatic` repository remain untouched while this rebuild is developed.

## Structure

- `_posts/` — blog posts in Markdown with Jekyll front matter
- `_layouts/` — shared page and post templates
- `assets/css/style.css` — site styling
- `assets/images/uploads/` — media uploaded through the CMS
- `admin/` — Decap CMS interface and configuration
- `.github/workflows/pages.yml` — automated GitHub Pages build and deployment

## Next steps

1. Import the WordPress XML export and migrate posts, pages, categories, tags, images, and existing URLs.
2. Tune the design to match the current Nugget of Joy site.
3. Configure Decap CMS authentication securely. The CMS interface is present, but publishing should not be enabled until its backend authentication is configured.
4. Enable GitHub Pages using **Settings → Pages → Build and deployment → GitHub Actions**.

No live domain is connected to this repository.
