---
title: "Week 4 — CSS Fundamentals: Style the Structure"
date: "2026-10-09 12:12:03"
layout: post
permalink: "/week-4-css-fundamentals-style-the-structure/"
categories: ["projects"]
tags: []
wordpress_id: "67911"
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
<p><strong>Course:</strong>&nbsp;Introduction to Web Design<br><strong>Week:</strong>&nbsp;4</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>By the end of this lesson, you should be able to:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Explain the relationship between HTML and CSS.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Modify common CSS properties including color, padding, border radius, and text alignment.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Predict how a CSS change will affect a component.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key concepts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>CSS stands for Cascading Style Sheets. It controls how HTML elements appear: colors, spacing, typography, borders, layout, and responsive behavior.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A CSS rule typically includes a selector and declarations. The selector identifies what to style; each declaration pairs a property with a value. For example,&nbsp;<code>padding: 24px;</code>&nbsp;creates space inside an element, while&nbsp;<code>border-radius: 12px;</code>&nbsp;rounds its corners.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Good CSS is intentional and consistent. Designers often build reusable rules that establish a visual system.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Interactive demonstration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Demo file:</strong>&nbsp;<code>04-css-rule-playground.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Change the preview’s background, text color, padding, corner radius, alignment, and font weight. Read the generated CSS after each change.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="600" pen_title="04-css-rule-playground" version="2" default_tab="html,result" slug_hash="vExpveb" user="ndangelo"]See the Pen <a href="https://codepen.io/editor/ndangelo/pen/01a1214c-f9f0-702a-8cc7-2d60fc656253">
04-css-rule-playground</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Create three visual variations of the same card component. Change no more than three properties in each version. Compare which version best supports the intended message and explain why.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Connection to your website project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Save your preferred CSS decisions for the midterm site's visual direction.</p>
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
<p>External CSS, selectors, declarations, properties, values, and debugging</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create&nbsp;<code>week-04/index.html</code>&nbsp;and&nbsp;<code>week-04/css/styles.css</code>; link the stylesheet with a relative path.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>CSS rule syntax&nbsp;<code>selector { property: value; }</code>; element and class selectors; braces, colons, semicolons;&nbsp;<code>&lt;link rel="stylesheet" href="css/styles.css"&gt;</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Style the Week 3 profile page with background and text colors, base font, content width, spacing, and a distinct heading. Intentionally remove one semicolon, observe the effect, and fix it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Connect HTML to an external stylesheet and practice selectors.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong>&nbsp;<code>week-04/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  color: #222222;
  background: #f4f4f4;
}
h1 { color: #2457a7; }
.intro { font-size: 1.2rem; line-height: 1.6; }
.card { padding: 20px; background: white; border: 1px solid #ccc; }</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>HTML file:</strong>&nbsp;<code>week-04/index.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;CSS Fundamentals&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;
    &lt;h1&gt;CSS Fundamentals&lt;/h1&gt;
    &lt;p class="intro"&gt;HTML gives content structure; CSS controls presentation.&lt;/p&gt;
    &lt;section class="card"&gt;&lt;h2&gt;Practice&lt;/h2&gt;&lt;p&gt;Change the selector and observe the result.&lt;/p&gt;&lt;/section&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>CSS file:</strong>&nbsp;<code>week-04/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; color: #222; background: #f4f4f4; }
h1 { color: #2457a7; }
.intro { font-size: 1.2rem; line-height: 1.6; }
.card { padding: 20px; background: white; border: 1px solid #ccc; border-radius: 8px; }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Important:</strong>&nbsp;The HTML links to&nbsp;<code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Add class="intro" to a paragraph and class="card" to a section. Change the heading color.</p>
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
<li><code>week-04/index.html</code> — profile page linked to external CSS.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-04/css/styles.css</code> — at least six declarations across four or more rules.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-04/README.txt</code> — explain element, selector, property, and value.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Stylesheet loads; six or more declarations; four or more rules; README defines all four terms.</li>
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

<!-- wp:paragraph -->
<p><br>These references support the key concepts and practices covered in this lesson. They are provided for verification and further study.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *CSS styling basics*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *CSS selectors*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *Getting started with CSS*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
