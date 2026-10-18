---
title: "The CSS Box Model: Block And Inline/Divs and Spans"
date: "2023-01-14 00:31:49"
layout: post
permalink: "/the-box-model-block-and-inline-divs-and-spans/"
categories: ["dmet-155-introduction-to-web-design", "learn-to-code-now", "odin-project"]
tags: []
wordpress_id: "59674"
---

<!-- wp:paragraph -->
<p>The MDN box model article linked in the previous lesson mentions that different display types have subtly different box models. It also mentions that you can change how a box is calculated by changing the&nbsp;<code>display</code>&nbsp;property. We will explore the different display values you can use further in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
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
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#block-vs-inline">Block vs Inline</a></h3>
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
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-block-and-inline#divs-and-spans">Divs and Spans</a></h3>
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

<!-- wp:paragraph -->
<p>Now that you understand the basic syntax of HTML and CSS, we’re going to get serious. The most important skills you need to master with CSS are&nbsp;<em>positioning</em>&nbsp;and&nbsp;<em>layout</em>. Changing fonts and colors is a crucial skill, but being able to put things exactly where you want them on a webpage is even more crucial. After all, how many webpages can you find where absolutely every element is just stacked one on top of another?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Learning to position elements on a webpage is not that difficult once you understand just a few key concepts. Unfortunately, many learners race through learning HTML and CSS to get to JavaScript and end up missing these fundamental concepts. This leads to frustration, pain, (<a href="https://giphy.com/gifs/css-13FrpeVH09Zrb2" target="_blank" rel="noreferrer noopener">and funny gifs</a>) because all the JavaScript skills in the world are meaningless if you can’t stick your elements on the page where you need them to be. So with that in mind, let’s get started.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>You’ll learn all about&nbsp;<em>the box model</em>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You’ll learn how to make sure elements are just the right size with&nbsp;<code>margin</code>,&nbsp;<code>padding</code>, and&nbsp;<code>borders</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#the-box-model">The Box Model</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The box model is the first important concept you need to understand to succeed in CSS. It isn’t complicated, but skipping over it now will cause you much frustration down the line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another. You can get a rough idea of how this works by sticking a border on every item on the page like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">* {
  border: 2px solid red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom","align":"center"} -->
<figure class="wp-block-image aligncenter"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/boxes.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/boxes-3-3.png" alt="boxes"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>You can use the browser’s inspector to add the CSS above to this web page if you want. Boxes in boxes!</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/odin-lined.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/odin-lined-1-3.png" alt="lines"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>OK, so there might be some circles in the above image… but when it comes to layout, they fit together like rectangular boxes and not circles. In the end, laying out a webpage and positioning all its elements is deciding how you are going to nest and stack these boxes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The only real complication here is that there are many ways to manipulate the size of these boxes, and the space between them, using&nbsp;<code>padding</code>,&nbsp;<code>margin</code>, and&nbsp;<code>border</code>. The assigned articles go into more depth on this concept, but to sum it up briefly:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>padding</code>&nbsp;increases the space between the edge of a box and the content inside of it.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>margin</code>&nbsp;increases the space between a box and any others that sit next to it.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>border</code>&nbsp;adds space (even if it’s only a pixel or two) between the margin and the padding.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Be sure to study the diagrams carefully.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/box-model.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/box-model-1-3.png" alt="the box model"/></a></figure>
<!-- /wp:image -->

<!-- wp:embed {"url":"https://youtu.be/rIO5326FgPE","type":"video","providerNameSlug":"youtube","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/rIO5326FgPE
</div></figure>
<!-- /wp:embed -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://www.youtube.com/watch?v=rIO5326FgPE" target="_blank" rel="noreferrer noopener">This video</a>&nbsp;is a straightforward overview of the box model, padding and margin. Go ahead and watch this now; it informs everything else.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Because the box model concept is so incredibly fundamental, check out&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" rel="noreferrer noopener">this lesson from MDN</a>. It covers the same material as the video above, but it goes a little further in-depth. Pay close attention to the examples and take the time to experiment with their in-browser editor!</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://css-tricks.com/almanac/properties/m/margin/" target="_blank" rel="noreferrer noopener">This CSS Tricks page</a>&nbsp;has some further information about the&nbsp;<code>margin</code>&nbsp;property that you’ll find useful. Specifically, the sections about&nbsp;<code>auto</code>&nbsp;and margin collapsing contain things you’ll want to know.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">The box model</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Everything in CSS has a box around it, and understanding these boxes is key to being able to create more complex layouts with CSS, or to align items with other items. In this lesson, we will take a look at the CSS&nbsp;<em>Box Model</em>. You'll get an understanding of how it works and the terminology that relates to it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="block_and_inline_boxes"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#block_and_inline_boxes">Block and inline boxes</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In CSS we have several types of boxes that generally fit into the categories of&nbsp;<strong>block boxes</strong>&nbsp;and&nbsp;<strong>inline boxes</strong>. The type refers to how the box behaves in terms of page flow and in relation to other boxes on the page. Boxes have an&nbsp;<strong>inner display type</strong>&nbsp;and an&nbsp;<strong>outer display type</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In general, you can set various values for the display type using the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"><code>display</code></a>&nbsp;property, which can have various values.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="outer_display_type"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#outer_display_type">Outer display type</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If a box has an outer display type of&nbsp;<code>block</code>, then:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The box will break onto a new line.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"><code>width</code></a>&nbsp;and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"><code>height</code></a>&nbsp;properties are respected.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Padding, margin and border will cause other elements to be pushed away from the box.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"><code>width</code></a>&nbsp;is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Some HTML elements, such as&nbsp;<code>&lt;h1&gt;</code>&nbsp;and&nbsp;<code>&lt;p&gt;</code>, use&nbsp;<code>block</code>&nbsp;as their outer display type by default.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If a box has an outer display type of&nbsp;<code>inline</code>, then:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The box will not break onto a new line.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"><code>width</code></a>&nbsp;and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"><code>height</code></a>&nbsp;properties will not apply.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Some HTML elements, such as&nbsp;<code>&lt;a&gt;</code>,&nbsp;<code>&lt;span&gt;</code>,&nbsp;<code>&lt;em&gt;</code>&nbsp;and&nbsp;<code>&lt;strong&gt;</code>&nbsp;use&nbsp;<code>inline</code>&nbsp;as their outer display type by default.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="inner_display_type"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#inner_display_type">Inner display type</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Boxes also have an&nbsp;<em>inner</em>&nbsp;display type, which dictates how elements inside that box are laid out.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are also laid out in&nbsp;<strong><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow">normal flow</a></strong>&nbsp;and behave as block or inline boxes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can change the inner display type for example by setting&nbsp;<code>display: flex;</code>. The element will still use the outer display type&nbsp;<code>block</code>&nbsp;but this changes the inner display type to&nbsp;<code>flex</code>. Any direct children of this box will become flex items and behave according to the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">Flexbox</a>&nbsp;specification.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When you move on to learn about CSS Layout in more detail, you will encounter&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"><code>flex</code></a>, and various other inner values that your boxes can have, for example&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"><code>grid</code></a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Note:</strong>&nbsp;To read more about the values of display, and how boxes work in block and inline layout, take a look at the MDN guide&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow">Block and Inline Layout</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="examples_of_different_display_types"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#examples_of_different_display_types">Examples of different display types</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The example below has three different HTML elements, all of which have an outer display type of&nbsp;<code>block</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>A paragraph with a border added in CSS. The browser renders this as a block box. The paragraph starts on a new line and extends the entire available width.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A list, which is laid out using&nbsp;<code>display: flex</code>. This establishes flex layout for the children of the container, which are flex items. The list itself is a block box and — like the paragraph — expands to the full container width and breaks onto a new line.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A block-level paragraph, inside which are two&nbsp;<code>&lt;span&gt;</code>&nbsp;elements. These elements would normally be&nbsp;<code>inline</code>, however, one of the elements has a class of "block" which gets set to&nbsp;<code>display: block</code>.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:embed {"url":"https://mdn.github.io/css-examples/learn/box-model/block.html"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://mdn.github.io/css-examples/learn/box-model/block.html
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>In the next example, we can see how&nbsp;<code>inline</code>&nbsp;elements behave.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The&nbsp;<code>&lt;span&gt;</code>&nbsp;elements in the first paragraph are inline by default and so do not force line breaks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The&nbsp;<code>&lt;ul&gt;</code>&nbsp;element that is set to&nbsp;<code>display: inline-flex</code>&nbsp;creates an inline box containing some flex items.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The two paragraphs are both set to&nbsp;<code>display: inline</code>. The inline flex container and paragraphs all run together on one line rather than breaking onto new lines (as they would do if they were displaying as block-level elements).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>To toggle between the display modes, you can change&nbsp;<code>display: inline</code>&nbsp;to&nbsp;<code>display: block</code>&nbsp;or&nbsp;<code>display: inline-flex</code>&nbsp;to&nbsp;<code>display: flex</code>.</strong>https://mdn.github.io/css-examples/learn/box-model/inline.html</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The key thing to remember for now is: Changing the value of the&nbsp;<code>display</code>&nbsp;property can change whether the outer display type of a box is block or inline. This changes the way it displays alongside other elements in the layout.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="what_is_the_css_box_model"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#what_is_the_css_box_model">What is the CSS box model?</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The CSS box model as a whole applies to block boxes and defines how the different parts of a box — margin, border, padding, and content — work together to create a box that you can see on a page. Inline boxes use just&nbsp;<em>some</em>&nbsp;of the behavior defined in the box model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To add complexity, there is a standard and an alternate box model. By default, browsers use the standard box model.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="parts_of_a_box"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box">Parts of a box</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Making up a block box in CSS we have the:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Content box</strong>: The area where your content is displayed; size it using properties like&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size"><code>inline-size</code></a>&nbsp;and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/block-size"><code>block-size</code></a>&nbsp;or&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width"><code>width</code></a>&nbsp;and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"><code>height</code></a>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Padding box</strong>: The padding sits around the content as white space; size it using&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"><code>padding</code></a>&nbsp;and related properties.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Border box</strong>: The border box wraps the content and any padding; size it using&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border"><code>border</code></a>&nbsp;and related properties.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Margin box</strong>: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin"><code>margin</code></a>&nbsp;and related properties.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The below diagram shows these layers:</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/box-model-1-4.png" alt="Diagram of the box model"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="the_standard_css_box_model"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_standard_css_box_model">The standard CSS box model</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In the standard box model, if you give a box an&nbsp;<code>inline-size</code>&nbsp;and a&nbsp;<code>block-size</code>&nbsp;(or&nbsp;<code>width</code>&nbsp;and a&nbsp;<code>height</code>) attributes, this defines the inline-size and block-size (width and height in horizontal languages) of the&nbsp;<em>content box</em>. Any padding and border is then added to those dimensions to get the total size taken up by the box (see image below).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we assume that a box has the following CSS:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The&nbsp;<em>actual</em>&nbsp;space taken up by the box will be 410px wide (350 + 25 + 25 + 5 + 5) and 210px high (150 + 25 + 25 + 5 + 5).</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/standard-box-model.png" alt="Showing the size of the box when the standard box model is being used."/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>Note:</strong>&nbsp;The margin is not counted towards the actual size of the box — sure, it affects the total space that the box will take up on the page, but only the space outside the box. The box's area stops at the border — it does not extend into the margin.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="the_alternative_css_box_model"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model">The alternative CSS box model</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In the alternative box model, any width is the width of the visible box on the page. The content area width is that width minus the width for the padding and border (see image below). No need to add up the border and padding to get the real size of the box.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To turn on the alternative model for an element, set&nbsp;<code>box-sizing: border-box</code>&nbsp;on it:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.box {
  box-sizing: border-box;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If we assume the box has the same CSS as above:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.box {
  width: 350px;
  inline-size: 350px;
  height: 150px;
  block-size: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Now, the&nbsp;<em>actual</em>&nbsp;space taken up by the box will be 350px in the inline direction and 150px in the block direction.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/alternate-box-model.png" alt="Showing the size of the box when the alternate box model is being used."/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>To use the alternative box model for all of your elements (which is a common choice among developers), set the&nbsp;<code>box-sizing</code>&nbsp;property on the&nbsp;<code>&lt;html&gt;</code>&nbsp;element and set all other elements to inherit that value:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="playing_with_box_models"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#playing_with_box_models">Playing with box models</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In the example below, you can see two boxes. Both have a class of&nbsp;<code>.box</code>, which gives them the same&nbsp;<code>width</code>,&nbsp;<code>height</code>,&nbsp;<code>margin</code>,&nbsp;<code>border</code>, and&nbsp;<code>padding</code>. The only difference is that the second box has been set to use the alternative box model.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Can you change the size of the second box (by adding CSS to the&nbsp;<code>.alternate</code>&nbsp;class) to make it match the first box in width and height?</strong>https://mdn.github.io/css-examples/learn/box-model/box-models.html</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Note:</strong>&nbsp;You can find a solution for this task&nbsp;<a href="https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model" target="_blank" rel="noreferrer noopener">here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="use_browser_devtools_to_view_the_box_model"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#use_browser_devtools_to_view_the_box_model">Use browser DevTools to view the box model</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Your&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">browser developer tools</a>&nbsp;can make understanding the box model far easier. If you inspect an element in Firefox's DevTools, you can see the size of the element plus its margin, padding, and border. Inspecting an element in this way is a great way to find out if your box is really the size you think it is!</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/box-model-devtools.png" alt="Inspecting the box model of an element using Firefox DevTools"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="margins_padding_and_borders"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders">Margins, padding, and borders</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You've already seen the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin"><code>margin</code></a>,&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"><code>padding</code></a>, and&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border"><code>border</code></a>&nbsp;properties at work in the example above. The properties used in that example are&nbsp;<strong>shorthands</strong>&nbsp;and allow us to set all four sides of the box at once. These shorthands also have equivalent longhand properties, which allow control over the different sides of the box individually.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let's explore these properties in more detail.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="margin"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margin">Margin</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The margin is an invisible space around your box. It pushes other elements away from the box. Margins can have positive or negative values. Setting a negative margin on one side of your box can cause it to overlap other things on the page. Whether you are using the standard or alternative box model, the margin is always added after the size of the visible box has been calculated.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can control all margins of an element at once using the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin"><code>margin</code></a>&nbsp;property, or each side individually using the equivalent longhand properties:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top"><code>margin-top</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right"><code>margin-right</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom"><code>margin-bottom</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left"><code>margin-left</code></a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>In the example below, try changing the margin values to see how the box is pushed around due to the margin creating or removing space (if it is a negative margin) between this element and the containing element.</strong>https://mdn.github.io/css-examples/learn/box-model/margin.html</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="margin_collapsing">Margin collapsing</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Depending on whether two elements whose margins touch have positive or negative margins, the results will be different:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Two negative margins will collapse and the smallest (furthest from zero) value will be used.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If one margin is negative, its value will be&nbsp;<em>subtracted</em>&nbsp;from the total.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>In the example below, we have two paragraphs. The top paragraph has a&nbsp;<code>margin-bottom</code>&nbsp;of 50 pixels, the other has a&nbsp;<code>margin-top</code>&nbsp;of 30 pixels. The margins have collapsed together so the actual margin between the boxes is 50 pixels and not the total of the two margins.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>You can test this by setting the&nbsp;<code>margin-top</code>&nbsp;of paragraph two to 0. The visible margin between the two paragraphs will not change — it retains the 50 pixels set in the&nbsp;<code>margin-bottom</code>&nbsp;of paragraph one. If you set it to -10px, you'll see that the overall margin becomes 40px — it subtracts from the 50px.</strong>https://mdn.github.io/css-examples/learn/box-model/margin-collapse.html</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A number of rules dictate when margins do and do not collapse. For further information see the detailed page on&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">mastering margin collapsing</a>. The main thing to remember is that margin collapsing is a thing that happens if you are creating space with margins and don't get the space you expect.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="borders"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#borders">Borders</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The border is drawn between the margin and the padding of a box. If you are using the standard box model, the size of the border is added to the&nbsp;<code>width</code>&nbsp;and&nbsp;<code>height</code>&nbsp;of the content box. If you are using the alternative box model then the size of the border makes the content box smaller as it takes up some of that available&nbsp;<code>width</code>&nbsp;and&nbsp;<code>height</code>&nbsp;of the element box.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For styling borders, there are a large number of properties — there are four borders, and each border has a style, width, and color that we might want to manipulate.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can set the width, style, or color of all four borders at once using the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border"><code>border</code></a>&nbsp;property.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To set the properties of each side individually, use:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-top"><code>border-top</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-right"><code>border-right</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom"><code>border-bottom</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-left"><code>border-left</code></a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>To set the width, style, or color of all sides, use:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-width"><code>border-width</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style"><code>border-style</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color"><code>border-color</code></a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>To set the width, style, or color of a single side, use one of the more granular longhand properties:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width"><code>border-top-width</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style"><code>border-top-style</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color"><code>border-top-color</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width"><code>border-right-width</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style"><code>border-right-style</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color"><code>border-right-color</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width"><code>border-bottom-width</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style"><code>border-bottom-style</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color"><code>border-bottom-color</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width"><code>border-left-width</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style"><code>border-left-style</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color"><code>border-left-color</code></a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>In the example below, we have used various shorthands and longhands to create borders. Play around with the different properties to check that you understand how they work. The MDN pages for the border properties give you information about the different available border styles.https://mdn.github.io/css-examples/learn/box-model/border.html</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading" id="padding"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#padding">Padding</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The padding sits between the border and the content area and is used to push the content away from the border. Unlike margins, you cannot have a negative padding. Any background applied to your element will display behind the padding.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding"><code>padding</code></a>&nbsp;property controls the padding on all sides of an element. To control each side individually, use these longhand properties:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top"><code>padding-top</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right"><code>padding-right</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom"><code>padding-bottom</code></a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left"><code>padding-left</code></a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>In the example below, you can change the values for padding on the class&nbsp;<code>.box</code>&nbsp;to see that this changes where the text begins in relation to the box. You can also change the padding on the class&nbsp;<code>.container</code>&nbsp;to create space between the container and the box. You can change the padding on any element to create space between its border and whatever is inside the element.https://mdn.github.io/css-examples/learn/box-model/padding.html</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="the_box_model_and_inline_boxes"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_box_model_and_inline_boxes">The box model and inline boxes</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>All of the above fully applies to block boxes. Some of the properties can apply to inline boxes too, such as those created by a&nbsp;<code>&lt;span&gt;</code>&nbsp;element.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the example below, we have a&nbsp;<code>&lt;span&gt;</code>&nbsp;inside a paragraph. We have applied a&nbsp;<code>width</code>,&nbsp;<code>height</code>,&nbsp;<code>margin</code>,&nbsp;<code>border</code>, and&nbsp;<code>padding</code>&nbsp;to it. You can see that the width and height are ignored. The vertical margin, padding, and border are respected but don't change the relationship of other content to our inline box. The padding and border overlap other words in the paragraph. The horizontal padding, margins, and borders move other content away from the box.https://mdn.github.io/css-examples/learn/box-model/inline-box-model.html</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="using_display_inline-block"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#using_display_inline-block">Using display: inline-block</a></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>display: inline-block</code>&nbsp;is a special value of&nbsp;<code>display</code>, which provides a middle ground between&nbsp;<code>inline</code>&nbsp;and&nbsp;<code>block</code>. Use it if you do not want an item to break onto a new line, but do want it to respect&nbsp;<code>width</code>&nbsp;and&nbsp;<code>height</code>&nbsp;and avoid the overlapping seen above.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An element with&nbsp;<code>display: inline-block</code>&nbsp;does a subset of the block things we already know about:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The&nbsp;<code>width</code>&nbsp;and&nbsp;<code>height</code>&nbsp;properties are respected.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>padding</code>,&nbsp;<code>margin</code>, and&nbsp;<code>border</code>&nbsp;will cause other elements to be pushed away from the box.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>It does not, however, break onto a new line, and will only become larger than its content if you explicitly add&nbsp;<code>width</code>&nbsp;and&nbsp;<code>height</code>&nbsp;properties.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>In this next example, we have added&nbsp;<code>display: inline-block</code>&nbsp;to our&nbsp;<code>&lt;span&gt;</code>&nbsp;element. Try changing this to&nbsp;<code>display: block</code>&nbsp;or removing the line completely to see the difference in display models.</strong>https://mdn.github.io/css-examples/learn/box-model/inline-block.html</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Where this can be useful is when you want to give a link a larger hit area by adding&nbsp;<code>padding</code>.&nbsp;<code>&lt;a&gt;</code>&nbsp;is an inline element like&nbsp;<code>&lt;span&gt;</code>; you can use&nbsp;<code>display: inline-block</code>&nbsp;to allow padding to be set on it, making it easier for a user to click the link.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You see this fairly frequently in navigation bars. The navigation below is displayed in a row using flexbox and we have added padding to the&nbsp;<code>&lt;a&gt;</code>&nbsp;element as we want to be able to change the&nbsp;<code>background-color</code>&nbsp;when the&nbsp;<code>&lt;a&gt;</code>&nbsp;is hovered. The padding appears to overlap the border on the&nbsp;<code>&lt;ul&gt;</code>&nbsp;element. This is because the&nbsp;<code>&lt;a&gt;</code>&nbsp;is an inline element.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Add&nbsp;<code>display: inline-block</code>&nbsp;to the rule with the&nbsp;<code>.links-list a</code>&nbsp;selector, and you will see how it fixes this issue by causing the padding to be respected by other elements.</strong>https://mdn.github.io/css-examples/learn/box-model/inline-block-nav.html</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#additional-resources">Additional Resources</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://www.w3schools.com/css/css_boxmodel.asp" target="_blank" rel="noreferrer noopener">This W3Schools tutorial on CSS Box Model</a>&nbsp;provides an interactive playground to test your box model skills with exercises.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
