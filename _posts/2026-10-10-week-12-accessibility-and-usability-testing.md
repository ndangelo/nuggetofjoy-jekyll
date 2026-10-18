---
title: "Week 12 — Accessibility and Usability Testing"
date: "2026-10-10 09:13:42"
layout: post
permalink: "/week-12-accessibility-and-usability-testing/"
categories: ["projects"]
tags: []
wordpress_id: "67935"
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
<p><strong>Course:</strong>&nbsp;Introduction to Web Design<br><strong>Week:</strong>&nbsp;12</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>By the end of this lesson, you should be able to:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Recognize common accessibility issues involving contrast, headings, labels, and focus.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Explain why automated checks cannot replace human testing.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Conduct a basic keyboard and peer usability review.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key concepts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Accessibility helps people with different abilities use digital content. Basic practices include adequate text contrast, logical heading structure, meaningful labels, visible keyboard focus, useful alternative text, and controls that can be operated without a mouse.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Usability testing asks whether people can complete tasks and understand the interface. Observe where they hesitate, misunderstand a label, or take an unexpected path. Treat those moments as evidence about the design—not as failures by the participant.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An automated checklist can reveal some issues, but it cannot certify a website as accessible. Combine automated tools, keyboard testing, and human feedback.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Interactive demonstration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Demo file:</strong>&nbsp;<code>09-accessibility-checker.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Change each setting in the Accessibility First Lab. Observe the simulated issue, then try tabbing through the interface. Discuss what the demo can and cannot prove.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="600" pen_title="09-accessibility-checker" version="2" default_tab="html,result" slug_hash="KwWZbZN" user="ndangelo"]See the Pen <a href="https://codepen.io/editor/ndangelo/pen/01a12152-4be3-7404-a207-1246a7773ad8">
09-accessibility-checker</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Run a peer test of your project. Ask a classmate to complete two tasks without coaching. Check keyboard access, visible focus, heading order, labels, and text contrast. Record at least two improvements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Connection to your website project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use testing evidence to revise your midterm site and strengthen the accessibility plan for the final website.</p>
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
<p>Accessibility, keyboard testing, semantic fixes, alt text, contrast, validation</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create&nbsp;<code>week-12/index.html</code>,&nbsp;<code>week-12/css/styles.css</code>, and&nbsp;<code>week-12/accessibility-audit.txt</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Semantic landmarks, descriptive links, alt attributes, label associations, heading order,&nbsp;<code>:focus</code>&nbsp;/&nbsp;<code>:focus-visible</code>, contrast.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Audit an earlier page using only the keyboard. Check heading order, image alternatives, link text, labels, focus visibility, and contrast. Make at least three code corrections and retest.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Make keyboard focus visible on links and form controls.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong>&nbsp;<code>week-12/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 3px;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>HTML file:</strong>&nbsp;<code>week-12/index.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Keyboard Accessibility Check&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;&lt;h1&gt;Keyboard test&lt;/h1&gt;&lt;p&gt;Use Tab to move between these controls.&lt;/p&gt;&lt;a href="#details"&gt;Read details&lt;/a&gt;&lt;button type="button"&gt;Example button&lt;/button&gt;&lt;section id="details"&gt;&lt;h2&gt;Details&lt;/h2&gt;&lt;p&gt;Focus indicators help identify the active control.&lt;/p&gt;&lt;/section&gt;&lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>CSS file:</strong>&nbsp;<code>week-12/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; line-height: 1.7; color: #172033; }
main { max-width: 720px; margin: auto; }
a, button { margin-right: 12px; }
button { padding: 10px 14px; border: 0; border-radius: 5px; background: #1d4ed8; color: white; }
a:focus-visible, button:focus-visible { outline: 3px solid #f59e0b; outline-offset: 4px; }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Important:</strong>&nbsp;The HTML links to&nbsp;<code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use Tab and Shift+Tab to navigate. Add a visible focus style wherever an interactive element lacks one.</p>
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
<li><code>week-12/index.html</code> and <code>week-12/css/styles.css</code> — revised accessible page.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-12/accessibility-audit.txt</code> — at least five checks marked pass/fail with evidence.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-12/before-after.png</code> — evidence of at least one improvement.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-12/README.txt</code> — three fixes and user benefit of each.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Five checks documented; three fixes made; keyboard focus visible; appropriate text alternatives included.</li>
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
<li>Mozilla Contributors. (n.d.). *Accessibility on the web*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>World Wide Web Consortium. (n.d.). *Web accessibility tutorials*. Web Accessibility Initiative.&nbsp;<a href="https://www.w3.org/WAI/tutorials/" target="_blank" rel="noopener">https://www.w3.org/WAI/tutorials/</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>World Wide Web Consortium. (n.d.). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C.&nbsp;<a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener">https://www.w3.org/TR/WCAG22/</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
