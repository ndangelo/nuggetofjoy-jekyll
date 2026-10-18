---
title: "Week 9 — Navigation and Information Architecture"
date: "2026-10-10 09:02:52"
layout: post
permalink: "/week-9-navigation-and-information-architecture/"
categories: ["projects"]
tags: []
wordpress_id: "67928"
---

<!-- wp:heading -->
<h2 class="wp-block-heading">90-minute class plan</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>0–10 min — Opening and visual warm-up:</strong>&nbsp;Introduce the learning goals, review the previous class, and discuss a relevant website example.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>10–25 min — Mini-lesson:</strong>&nbsp;Explain the key concepts and show examples. Keep the presentation focused on what students will apply.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>25–45 min — Instructor demonstration:</strong>&nbsp;Walk through the interactive CodePen or a live example. Pause for predictions and questions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>45–70 min — Guided and independent practice:</strong>&nbsp;Students complete the lesson exercise, first following a short demonstration and then making their own decisions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>70–83 min — Apply and critique:</strong>&nbsp;Students connect the skill to their website project, compare results with a partner, and make one improvement.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>83–90 min — Share-out and exit ticket:</strong>&nbsp;Review key takeaways and ask students to identify one thing they learned and one next step.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Course:</strong>&nbsp;Introduction to Web Design<br><strong>Week:</strong>&nbsp;9</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>By the end of this lesson, you should be able to:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Compare horizontal, compact, and sidebar navigation patterns.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use labels that help visitors predict where links will lead.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Design clear current-page, focus, and menu states.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key concepts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Information architecture organizes content so people can find what they need. Navigation exposes part of that structure through labels, links, menus, and pathways.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Navigation labels should be clear and familiar to the intended audience. A current-page state helps visitors understand where they are. Interactive menus should communicate whether they are open or closed and should be usable with a keyboard.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Choose a navigation pattern based on the number of sections, context of use, and available screen space. A trend is not a substitute for a usability reason.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Interactive demonstration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Demo file:</strong>&nbsp;<code>07-navigation-patterns.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Switch between horizontal navigation, a compact menu, and sidebar navigation. Change the current page and observe the active state. Test the compact menu’s open and closed behavior.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="600" pen_title="07-navigation-patterns" version="2" default_tab="html,result" slug_hash="GgWyPOb" user="ndangelo"]See the Pen <a href="https://codepen.io/editor/ndangelo/pen/01a12150-d5fc-73b2-971c-643398ef7f5c">
07-navigation-patterns</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Create a small sitemap for your project and test navigation labels with a classmate. Ask them where they would click to find specific information; revise labels that cause confusion.</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"sublime-lab-card","layout":{"type":"constrained"}} -->
<div class="wp-block-group sublime-lab-card"><!-- wp:heading -->
<h2 class="wp-block-heading">Sublime Text coding lab</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Complete this coding task in Sublime Text, save the files using the names below, and open the HTML page in a browser to test it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Today's coding focus</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Multi-page architecture, navigation consistency, relative links</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create&nbsp;<code>week-09/multi-page-site/</code>&nbsp;with&nbsp;<code>index.html</code>,&nbsp;<code>about.html</code>,&nbsp;<code>work.html</code>,&nbsp;<code>css/styles.css</code>, and optional&nbsp;<code>assets/</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Relative paths (<code>href="about.html"</code>), shared navigation, semantic&nbsp;<code>nav</code>, unique page titles.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Expand the homepage into a three-page mini-site: Home, About, and Work/Services. Add consistent navigation to all pages, make every link work, and identify the current page accessibly.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Reuse navigation across three separate HTML pages.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong>&nbsp;<code>index.html, about.html, work.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;header&gt;
  &lt;a href="index.html"&gt;Portfolio Name&lt;/a&gt;
  &lt;nav aria-label="Main navigation"&gt;
    &lt;a href="index.html"&gt;Home&lt;/a&gt;
    &lt;a href="about.html"&gt;About&lt;/a&gt;
    &lt;a href="work.html"&gt;Work&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;&lt;h1&gt;Page-specific heading&lt;/h1&gt;&lt;p&gt;Content for this page.&lt;/p&gt;&lt;/main&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>HTML file:</strong>&nbsp;<code>index.html, about.html, work.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- Save a copy of this page structure in index.html, about.html, and work.html.
     Give each page its own title and main heading. --&gt;
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Portfolio Name | Home&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header class="site-header"&gt;&lt;a href="index.html"&gt;Portfolio Name&lt;/a&gt;
    &lt;nav aria-label="Main navigation"&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;&lt;h1&gt;Home&lt;/h1&gt;&lt;p&gt;Introduce your portfolio here.&lt;/p&gt;&lt;/main&gt;
  &lt;footer&gt;&lt;p&gt;Contact: hello@example.com&lt;/p&gt;&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>CSS file:</strong>&nbsp;<code>css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">body { margin: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #20242c; }
.site-header { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 20px; background: #20242c; }
.site-header a { color: white; }
nav { display: flex; flex-wrap: wrap; gap: 14px; }
main { max-width: 760px; min-height: 55vh; margin: auto; padding: 24px; }
footer { padding: 20px; background: #f1f5f9; }
@media (max-width: 600px) { .site-header { align-items: flex-start; flex-direction: column; } }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Important:</strong>&nbsp;The HTML links to&nbsp;<code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create all three files, give each a unique title and heading, and click every navigation link.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Save and test</h4>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Save the file in the exact folder shown above.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Open the HTML file in a browser, or refresh it after saving if it is already open.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Check that linked CSS, images, and navigation work. If something fails, inspect filenames, capitalization, nesting, and relative paths.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Assignment and required deliverables</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Submit every item below. Use the specified filenames and folder structure. A screenshot does not replace a required source file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Required files</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>multi-page-site/index.html</code>, <code>about.html</code>, and <code>work.html</code> — three complete linked pages.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>multi-page-site/css/styles.css</code> — one shared stylesheet.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>multi-page-site/site-map.pdf</code> or <code>.png</code> — page hierarchy and navigation diagram.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>multi-page-site/README.txt</code> — target audience and page hierarchy.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>All pages link consistently; titles differ; no broken relative links; site map matches the site.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Keep all HTML, CSS, image, text, and PDF files inside the named weekly or project folder.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Open the HTML file in a browser before submitting and confirm linked CSS and images load.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Connection to your website project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use your sitemap to refine navigation for the midterm site and plan the structure of your final site.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Before you leave (3-minute exit check)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Write down one thing you changed, one thing you learned from the result, and one question you still have.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">References</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Figma. (n.d.). *What is information architecture?* Figma Resource Library.&nbsp;<a href="https://www.figma.com/resource-library/what-is-information-architecture/" target="_blank" rel="noopener">https://www.figma.com/resource-library/what-is-information-architecture/</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>World Wide Web Consortium. (n.d.). *Page structure tutorial*. Web Accessibility Initiative.&nbsp;<a href="https://www.w3.org/WAI/tutorials/page-structure/" target="_blank" rel="noopener">https://www.w3.org/WAI/tutorials/page-structure/</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *Creating links*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
