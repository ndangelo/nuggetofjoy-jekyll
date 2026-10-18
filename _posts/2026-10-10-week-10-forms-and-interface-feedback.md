---
title: "Week 10 — Forms and Interface Feedback"
date: "2026-10-10 09:04:23"
layout: post
permalink: "/week-10-forms-and-interface-feedback/"
categories: ["projects"]
tags: []
wordpress_id: "67930"
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
<p><strong>Course:</strong>&nbsp;Introduction to Web Design<br><strong>Week:</strong>&nbsp;10</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>By the end of this lesson, you should be able to:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Identify the parts of a usable form.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Explain how labels, validation, and error messages support task completion.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Design feedback that helps users understand the result of an action.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key concepts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A form asks people to provide information or make a choice. A usable form makes the task clear, labels controls, explains required fields, and helps people recover from mistakes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Error messages should identify the problem and suggest a correction. Success messages should confirm what happened. Do not rely on color alone to communicate errors, and do not use placeholder text as the only label because it disappears as the person types.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This example is a local prototype. It demonstrates validation and feedback but does not send data to a server.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Interactive demonstration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Demo file:</strong>&nbsp;<code>08-form-usability-lab.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Submit the Form Usability Lab while empty. Try an invalid email address, then complete the form. Observe where errors appear and what the success message communicates.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="600" pen_title="08-form-usability-lab" version="2" default_tab="html,result" slug_hash="NPpXeXx" user="ndangelo"]See the Pen <a href="https://codepen.io/editor/ndangelo/pen/01a12151-c097-73e1-98be-62fe3e7f8abc">
08-form-usability-lab</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Sketch a contact or inquiry form for your website. Include visible labels, required-field guidance, useful examples, and a plan for error and success messages.</p>
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
<p>Forms, labels, input types, required fields, and interface feedback</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Project files and folder structure</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create&nbsp;<code>week-10/index.html</code>&nbsp;and&nbsp;<code>week-10/css/styles.css</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Syntax to practice</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>&lt;form&gt;</code>,&nbsp;<code>&lt;label for&gt;</code>, matching input&nbsp;<code>id</code>, suitable&nbsp;<code>type</code>,&nbsp;<code>required</code>,&nbsp;<code>&lt;select&gt;</code>,&nbsp;<code>&lt;textarea&gt;</code>, submit button.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Build it</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Build a contact/inquiry form with name, email, inquiry type, message, and submit button. Give every control a visible label, mark required fields, and test browser validation. Do not claim data is sent unless a backend is connected.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Code along: Build a labeled form with basic browser validation.</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Open in Sublime Text:</strong>&nbsp;<code>week-10/index.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Type the example below, save the file, and read the comments and selectors carefully. Use this as a starting point, then modify it for your own project.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;form&gt;
  &lt;label for="name"&gt;Your name&lt;/label&gt;
  &lt;input id="name" name="name" type="text" required&gt;
  &lt;label for="email"&gt;Email address&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required&gt;
  &lt;label for="message"&gt;Message&lt;/label&gt;
  &lt;textarea id="message" name="message" rows="5"&gt;&lt;/textarea&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Complete HTML and CSS example</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>These are matching files. Create the folders shown below, save each code sample using the exact filename, and keep the stylesheet link consistent with your folder structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>HTML file:</strong>&nbsp;<code>week-10/index.html</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;Contact Form Prototype&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main class="form-panel"&gt;
    &lt;h1&gt;Contact us&lt;/h1&gt;
    &lt;form&gt;
      &lt;label for="name"&gt;Your name&lt;/label&gt;&lt;input id="name" name="name" type="text" required&gt;
      &lt;label for="email"&gt;Email address&lt;/label&gt;&lt;input id="email" name="email" type="email" required&gt;
      &lt;label for="topic"&gt;Project topic&lt;/label&gt;&lt;select id="topic" name="topic"&gt;&lt;option value=""&gt;Choose one&lt;/option&gt;&lt;option&gt;Web design&lt;/option&gt;&lt;option&gt;Visual identity&lt;/option&gt;&lt;/select&gt;
      &lt;label for="message"&gt;Message&lt;/label&gt;&lt;textarea id="message" name="message" rows="5"&gt;&lt;/textarea&gt;
      &lt;button type="submit"&gt;Review form&lt;/button&gt;
    &lt;/form&gt;
    &lt;p class="note"&gt;Prototype only: this form does not send data.&lt;/p&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>CSS file:</strong>&nbsp;<code>week-10/css/styles.css</code></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">body { margin: 0; padding: 24px; font-family: Arial, sans-serif; background: #f1f5f9; color: #172033; }
.form-panel { max-width: 620px; margin: auto; padding: 24px; background: white; border-radius: 10px; }
label { display: block; margin: 16px 0 6px; font-weight: bold; }
input, select, textarea { box-sizing: border-box; width: 100%; padding: 10px; font: inherit; border: 1px solid #94a3b8; border-radius: 5px; }
button { margin-top: 18px; padding: 12px 16px; border: 0; border-radius: 5px; background: #1d4ed8; color: white; font: inherit; }
input:focus-visible, select:focus-visible, textarea:focus-visible, button:focus-visible { outline: 3px solid #60a5fa; outline-offset: 2px; }
.note { color: #526071; font-size: .9rem; }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Important:</strong>&nbsp;The HTML links to&nbsp;<code>css/styles.css</code>. Keep that path correct relative to the HTML file.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading">Modify it</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Add a select menu and test empty submission and an invalid email. This prototype does not send data without a backend or form service.</p>
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
<li><code>week-10/index.html</code> — at least five controls, visible labels, required fields, submit button.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-10/css/styles.css</code> — readable layout and visible keyboard focus.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-10/form-test-notes.txt</code> — results for empty required fields, malformed email, and valid-looking input.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>week-10/README.txt</code> — state whether this is a front-end prototype or sends submissions.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Submission checklist</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>All controls have matching labels/IDs; validation works; focus visible; form limitations accurately described.</li>
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
<p>If your midterm site includes a form, make sure its behavior and feedback are clear. Do not collect real personal data in a classroom prototype.</p>
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
<li>Mozilla Contributors. (n.d.). *Your first form*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>World Wide Web Consortium. (n.d.). *Forms tutorial*. Web Accessibility Initiative.&nbsp;<a href="https://www.w3.org/WAI/tutorials/forms/" target="_blank" rel="noopener">https://www.w3.org/WAI/tutorials/forms/</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Mozilla Contributors. (n.d.). *HTML elements reference: Forms*. MDN Web Docs.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
