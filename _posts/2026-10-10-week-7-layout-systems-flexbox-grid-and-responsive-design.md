---
title: "Week 7 — Layout Systems: Flexbox, Grid, and Responsive Design"
date: "2026-10-10 08:51:35"
layout: post
permalink: "/week-7-layout-systems-flexbox-grid-and-responsive-design/"
categories: ["projects"]
tags: []
wordpress_id: "67924"
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
<p><strong>Course:</strong>&nbsp;Introduction to Web Design<br><strong>Week:</strong>&nbsp;7</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>By the end of this lesson, you should be able to:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Distinguish common uses of Flexbox and CSS Grid.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Control columns, gaps, and item spans in a grid.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Explain how a layout should adapt to different viewport sizes.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key concepts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flexbox is useful for arranging items along one primary axis, such as navigation links or a group of buttons. CSS Grid is designed for layouts that need coordinated rows and columns.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Responsive design means a layout adapts to its available space. This may involve changing column counts, adjusting spacing, resizing typography, or changing navigation. A responsive layout should preserve the content’s purpose and usability—not merely shrink a desktop design.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Choose the layout pattern based on content, hierarchy, and the behavior people need.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Interactive demonstration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Demo file:</strong>&nbsp;<code>06-css-grid-playground.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Experiment with the CSS Grid Playground and Flexbox Playground. Change columns, gaps, item spans, direction, alignment, and wrapping. Resize your browser to test the layout.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" pen_title="06-css-grid-playground" version="2" default_tab="html,result" slug_hash="dPvJwZQ" user="ndangelo"]See the Pen <a href="https://codepen.io/editor/ndangelo/pen/01a1214e-d499-7e75-b610-52d32f415512">
06-css-grid-playground</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Build a responsive card grid with at least six items. At wide widths, use multiple columns; at narrow widths, make content easy to read without horizontal scrolling. Use Flexbox for one component and Grid for another.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Connection to your website project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Apply responsive layout principles to the midterm site and test it at mobile and desktop widths.</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"sublime-lab-card","style":{"css":".sublime-lab-card h2 {\nfont-color: f7aa00;\n}"},"layout":{"type":"constrained"}} -->
<div class="wp-block-group sublime-lab-card has-custom-css"><!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|luminous-vivid-amber"}}}},"textColor":"luminous-vivid-amber"} -->
<h2 class="wp-block-heading has-luminous-vivid-amber-color has-text-color has-link-color">Sublime Text coding lab</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Complete this coding task in Sublime Text, save the files using the names below, and open the HTML page in a browser to test it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Today's coding focus</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flexbox, CSS Grid, responsive breakpoints, and mobile-first testing</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create&nbsp;<code>week-07/index.html</code>&nbsp;and&nbsp;<code>week-07/css/styles.css</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>display: flex</code>,&nbsp;<code>gap</code>,&nbsp;<code>justify-content</code>,&nbsp;<code>align-items</code>,&nbsp;<code>display: grid</code>,&nbsp;<code>grid-template-columns</code>,&nbsp;<code>minmax()</code>, and&nbsp;<code>@media</code>&nbsp;queries.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Build at least three cards using Grid or Flexbox. Add a breakpoint that changes the layout from multiple columns to one column. Test at approximately 375px, 768px, and 1280px.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Build a three-card grid and stack it on narrow screens.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong>&nbsp;<code>week-07/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
.card { padding: 24px; background: white; border: 1px solid #cbd5e1; }
@media (max-width: 600px) {
  .card-grid { grid-template-columns: 1fr; }
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>HTML file:</strong>&nbsp;<code>week-07/index.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Responsive Card Layout&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main class="card-grid"&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Design&lt;/h2&gt;&lt;p&gt;Explore visual ideas and layouts.&lt;/p&gt;&lt;/article&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Develop&lt;/h2&gt;&lt;p&gt;Build pages with HTML and CSS.&lt;/p&gt;&lt;/article&gt;
    &lt;article class="card"&gt;&lt;h2&gt;Test&lt;/h2&gt;&lt;p&gt;Check designs on different screens.&lt;/p&gt;&lt;/article&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>CSS file:</strong>&nbsp;<code>week-07/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; background: #f1f5f9; color: #172033; }
.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.card { padding: 24px; background: white; border: 1px solid #cbd5e1; border-radius: 8px; }
@media (max-width: 600px) {
  .card-grid { grid-template-columns: 1fr; }
}
@media (min-width: 601px) and (max-width: 900px) {
  .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Important:</strong>&nbsp;The HTML links to&nbsp;<code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Change to two columns, then change the breakpoint from 600px to 800px. Test at 375px, 768px, and 1280px.</p>
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
<li><code>week-07/index.html</code> and <code>week-07/css/styles.css</code> — responsive page with at least three cards and a media query.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-07/responsive-tests.pdf</code> or <code>.png</code> — screenshots at approximately 375px, 768px, and 1280px.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-07/README.txt</code> — layout technique, breakpoint, and one issue corrected.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Three cards; no horizontal overflow at three widths; Flexbox or Grid and at least one media query.</li>
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
<li>Mozilla Contributors. (n.d.). *Flexbox*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *CSS grid layout*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *Responsive web design*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
