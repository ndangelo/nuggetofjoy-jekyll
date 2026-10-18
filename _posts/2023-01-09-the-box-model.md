---
title: "9. The Box Model"
date: "2023-01-09 18:29:22"
layout: post
permalink: "/the-box-model/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58472"
---

<!-- wp:paragraph -->
<p>Now that you understand the basic syntax of HTML and CSS, we’re going to get serious. The most important skills you need to master with CSS are&nbsp;<em>positioning</em>&nbsp;and&nbsp;<em>layout</em>. Changing fonts and colors is a crucial skill, but being able to put things exactly where you want them on a webpage is even more crucial. After all, how many webpages can you find where absolutely every element is just stacked one on top of another?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Learning to position elements on a webpage is not that difficult once you understand just a few key concepts. Unfortunately, many learners race through learning HTML and CSS to get to JavaScript and end up missing these fundamental concepts. This leads to frustration, pain, (<a href="https://giphy.com/gifs/css-13FrpeVH09Zrb2" target="_blank" rel="noreferrer noopener">and funny gifs</a>) because all the JavaScript skills in the world are meaningless if you can’t stick your elements on the page where you need them to be. So with that in mind, let’s get started.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>You’ll learn all about&nbsp;<em>the box model</em>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You’ll learn how to make sure elements are just the right size with&nbsp;<code>margin</code>,&nbsp;<code>padding</code>, and&nbsp;<code>borders</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#the-box-model">The Box Model</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The first important concept that you need to understand to be successful in CSS is the box model. It isn’t complicated, but skipping over it now will cause you much frustration down the line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another. You can get a rough idea of how this works by sticking a border on every item on the page like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">* {
  border: 2px solid red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/boxes.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/boxes-3-3.png" alt="boxes"/></a></figure>
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
<ul><!-- wp:list-item -->
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

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-the-box-model#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li><a href="https://www.youtube.com/watch?v=rIO5326FgPE" target="_blank" rel="noreferrer noopener">This video</a>&nbsp;is a straightforward overview of the box model, padding and margin. Go ahead and watch this now; it informs everything else.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Because the box model concept is so incredibly fundamental, check out&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" rel="noreferrer noopener">this lesson from MDN</a>. It covers the same material as the video above, but it goes a little further in-depth. Pay close attention to the examples and take the time to experiment with their in-browser editor!</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://css-tricks.com/almanac/properties/m/margin/" target="_blank" rel="noreferrer noopener">This CSS Tricks page</a>&nbsp;has some further information about the&nbsp;<code>margin</code>&nbsp;property that you’ll find useful. Specifically, the sections about&nbsp;<code>auto</code>&nbsp;and margin collapsing contain things you’ll want to know.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->
