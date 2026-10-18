---
title: "10. Block And Inline"
date: "2023-01-09 17:52:56"
layout: post
permalink: "/block-and-inline/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58406"
---

<!-- wp:paragraph -->
<p>The MDN box model article linked in the previous lesson mentions that different display types have subtly different box models. It also mentions that you can change how a box is calculated by changing the&nbsp;<code>display</code>&nbsp;property. We will explore the different display values you can use further in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>You’ll learn about “Normal flow”.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You’ll learn the difference between&nbsp;<code>block</code>&nbsp;and&nbsp;<code>inline</code>&nbsp;elements.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You’ll learn which elements default to&nbsp;<code>block</code>&nbsp;and which elements default to&nbsp;<code>inline</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You’ll learn what divs and spans are.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#block-vs-inline">Block vs Inline</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Most of the elements that you have learned about so far are block elements. In other words, their default style is&nbsp;<code>display: block</code>.&nbsp;By default, block elements will appear on the page stacked atop each other, each new element starting on a new line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Inline elements, however, do not start on a new line. They appear in line with whatever elements they are placed beside. A clear example of an inline element is a link, or&nbsp;<code>&lt;a&gt;</code>&nbsp;tag. If you stick one of these in the middle of a paragraph of text, it will behave like a part of the paragraph. (<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer noopener">Like this…</a>) The link’s text will sit alongside other words in that paragraph. Additionally, padding and margin behave differently on inline elements. In general, you do not want to try to put extra padding or margin on inline elements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Inline-block elements behave like inline elements, but with block-style padding and margin. Inline-block is a useful tool to know about, but in practice, you’ll probably end up reaching for flexbox more often if you’re trying to line up a bunch of boxes. Flexbox will be covered in-depth in the next lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#divs-and-spans">Divs and Spans</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We can’t talk about block and inline elements without discussing divs and spans. All the other HTML elements we have encountered so far give meaning to their content. For example, paragraph elements tell the browser to display the text it contains as a paragraph. Strong elements tell the browser which texts within are important and so on. Yet, divs and spans give no particular meaning to their content. They are just generic boxes that can contain anything.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Having elements like this available to us is a lot more useful than it may first appear. We will often need elements that serve no other purpose than to be “hook” elements. We can give an id or class to target them for styling with CSS. Another use case we will face regularly is grouping related elements under one parent element to correctly position them on the page. Divs and spans provide us with the ability to do this.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Div is a block-level element by default. It is commonly used as a container element to group other elements. Divs allow us to&nbsp;<em>divide</em>&nbsp;the page into different blocks and apply styling to those blocks.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="KKXXbwR" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/KKXXbwR">
block-inline-lesson-div-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Span is an inline-level element by default. It can be used to group text content and inline HTML elements for styling and should only be used when no other semantic HTML element is appropriate.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="abLLPor" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/abLLPor">
block-inline-lesson-span-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>The concept of “Normal flow” is implied in the box-model resources, but isn’t laid out very specifically. Read&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow" target="_blank" rel="noreferrer noopener">“Normal Flow” from MDN</a>&nbsp;to make sure you understand how elements lay themselves out by default.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>W3 schools’&nbsp;<a href="https://www.w3schools.com/html/html_blocks.asp" target="_blank" rel="noreferrer noopener">“HTML Block and Inline Elements”</a>&nbsp;has a description and a list of all the default block and inline elements.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The Digital Ocean tutorial&nbsp;<a href="https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block" target="_blank" rel="noreferrer noopener">“Inline vs Inline-block Display in CSS”</a>&nbsp;has a couple of great examples that clarify the difference between&nbsp;<code>inline</code>&nbsp;and&nbsp;<code>inline-block</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Go to our&nbsp;<a href="https://github.com/TheOdinProject/css-exercises" target="_blank" rel="noreferrer noopener">CSS exercises repository</a>&nbsp;and do “01-margin-and-padding-1” and “02-margin-and-padding-2” in the&nbsp;<code>margin-and-padding</code>&nbsp;directory.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->
