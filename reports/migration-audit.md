# Migration audit — first pass

Date: 2026-10-18

## Content package

The first conversion package contains:
- 339 published WordPress posts converted to Markdown files with original HTML bodies retained.
- 5 published WordPress pages converted to Markdown files.
- Draft and private posts excluded from the public content package.
- A content manifest with source URLs, destination files, categories, tags, and body sizes.

This package is a conversion draft only; its content files have not yet been committed into this repository.

## Media inventory

The package's `reports/media-urls.txt` lists 4,142 unique URLs detected in published post/page bodies. Host counts from that inventory:

- `nuggetofjoy.com`: 2,424 URLs, largely legacy `/wp-content/uploads/` references.
- `img.uxcel.com`: 583 URLs.
- `cms-assets.tutsplus.com`: 428 URLs.
- `image-control-storage.s3.amazonaws.com`: 7 direct URLs.
- Other hosts: the remainder, spread across external resource and media providers.

The direct S3 host is real in the existing site material, but only seven unique URLs in the current body inventory point directly to that hostname. Most image references still use the original site hostname. Do not rewrite those legacy URLs to S3 by guessing object paths.

The WordPress XML export contains media metadata and URLs, not the binary media files. Some links may still work through the existing WordPress/media-offload setup, but availability could not be verified from this environment. Before launch, sample-check representative images and downloads in a browser, then build a report of broken links and correctable URLs.

## URL and homepage issues to resolve

- Preserve each post's explicit original permalink from the conversion manifest where it exists.
- The WordPress page titled `HOMEPAGE` originally occupied `/`, but the conversion draft assigned it `/homepage/`. The new Jekyll `index.md` is currently a separate placeholder listing page. Reconcile these deliberately; do not publish two competing homepage designs.
- The converted homepage contains its own substantial inline CSS and site markup. It should not simply be wrapped inside the generic page layout without review, or the result may duplicate the header, navigation, and footer.
- Confirm nested WordPress pages and category archive URLs. A preserved permalink on an individual post does not automatically recreate WordPress category/archive pages.

## Current technical setup

- Jekyll's `content_pages` collection is explicitly mapped to the `_pages/` directory so it matches the CMS collection folder.
- Decap CMS is configured for GitHub, but authentication has not been configured. Do not place a personal access token or other secret in this public repository.
- Keep the live WordPress domain and existing static archive unchanged until the rebuilt site passes content, visual, link, and CMS-publishing checks.
