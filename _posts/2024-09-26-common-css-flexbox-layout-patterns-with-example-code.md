---
title: "Common CSS Flexbox Layout Patterns with Example Code"
date: "2024-09-26 09:53:55"
layout: post
permalink: "/common-css-flexbox-layout-patterns-with-example-code/"
categories: ["projects"]
tags: []
wordpress_id: "66597"
---

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">Source: <a href="https://tobiasahlin.com/blog/common-flexbox-patterns">https://tobiasahlin.com/blog/common-flexbox-patterns</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In theory, using flexbox (Flexible Box Module) to build complex layouts is pretty straightforward. Still, they have often found themselves adding `display: flex` to an element and spending an eternity trying to figure out how to make anything behave as expected. If you're anything like them, here's a list of 10 example flexbox layouts with CSS that you can copy and paste to get started with your layouts. They will walk through these basic layout patterns (click to jump to an example).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66606,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-172-1024x375.png" alt="Flex Layout" class="wp-image-66606"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Every example assumes that your HTML contains an element with a class of&nbsp;<code>container</code>&nbsp;, which then contains several children that all have a class of&nbsp;<code>item</code>&nbsp;(the number of children varies per example):</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;div class="container"&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  ...
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="stretch-all-fixed-spacing">Stretch all fixed spacing</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66607,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-173-1024x270.png" alt="Stretch all, fixed spacing" class="wp-image-66607"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="ZEgbmOg" pen_title="Stretch all fixed spacing: Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/ZEgbmOg">
Stretch all fixed spacing: Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>The most basic flexbox pattern is getting a few boxes to stretch and fill the full width of their parent element. All you need to do is to set&nbsp;<code>display: flex</code>&nbsp;on the container, and a&nbsp;<code>flex-grow</code>&nbsp;value above&nbsp;<code>0</code>&nbsp;on the children:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
}

.item {
  flex-grow: 1;
  height: 100px;
}

.item + .item {
  margin-left: 2%;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>We use a&nbsp;<code>+</code>&nbsp;selector to only add gaps between pairs of items (essentially just skipping the left margin for the first item in the list).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Increasing&nbsp;<code>flex-grow</code>&nbsp;will increase&nbsp;<em>the amount of space</em>&nbsp;that an element is allowed to stretch to compared to any other element. If we set&nbsp;<code>flex-grow</code>to&nbsp;<code>2</code>&nbsp;on the middle element here, we would basically divide up the available space into 6 chunks (1 chunk for each item plus 1 extra for the middle item, 1+1+2+1+1). The middle item gets two chunks (<code>flex-grow: 2</code>) worth of space, and all other elements get one chunk (<code>flex-grow: 1</code>).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66609,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-175-1024x242.png" alt="flex grow" class="wp-image-66609"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="stretch-middle-fixed-spacing">Stretch middle, fixed spacing</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66611,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-177-1024x262.png" alt="Stretch middle, fixed spacing" class="wp-image-66611"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="jOgWLON" pen_title="Stretch all fixed spacing: Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/jOgWLON">
  Stretch all fixed spacing: Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>A common app and web pattern is to create a top bar where we want to stretch only the middle element, but keep the right most and left most elements fixed. If we just want one element to stretch, we can set a fixed width (e.g.&nbsp;<code>100px</code>) on an element that should stay static, and&nbsp;<code>flex-grow: 1</code>&nbsp;on the element that should stretch:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
}

.item {
  height: 100px;
  width: 100px; <em>/* A fixed width as the default */</em>
}

.item-center { 
  flex-grow: 1; <em>/* Set the middle element to grow and stretch */</em>
}

.item + .item { 
  margin-left: 2%; 
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Even if the middle element here has a defined&nbsp;<code>width</code>&nbsp;of&nbsp;<code>100px</code>,&nbsp;<code>flex-grow</code>&nbsp;will make it stretch to take up all the available space.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="alternating-grid">Alternating grid</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66613,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-179-1024x549.png" alt="Alternating grid" class="wp-image-66613"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>This layout pattern is used on the following site <a href="https://tobiasahlin.com/blog/">https://tobiasahlin.com/blog/</a> The goal is to create a grid with some variation: after every row of two equally sized items there’s one item that takes up an entire row:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To accomplish this we need to:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Set&nbsp;<code>flex-wrap: wrap</code>&nbsp;on the container (or all&nbsp;<code>items</code>&nbsp;would be rendered on a single row)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Set&nbsp;<code>justify-content: space-between</code>&nbsp;on the container, to only create space between the elements (and not between the edge of the parent element and items)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Set every item’s&nbsp;<code>width</code>&nbsp;to&nbsp;<code>49%</code>&nbsp;(or something similar that is equal to or less than&nbsp;<code>50%</code>)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Set every third item’s&nbsp;<code>width</code>&nbsp;to&nbsp;<code>100%</code>&nbsp;so that it fills that entire row. We can target every third item in the list with the&nbsp;<code>nth-child()</code>&nbsp;selector.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 48%;
  height: 100px;
  margin-bottom: 2%;
}

.item:nth-child(3n) {
  width: 100%;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If you want the first row to be full-width and the two following items to share a row, note that you can’t write&nbsp;<code>.item:nth-child(1n) { width: 100% }</code>—that would target all items. You have to target the first item by selecting every third element, and then stepping back two items:&nbsp;<code>.item:nth-child(3n-2) { width: 100% }</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="dyxGwBw" pen_title="Stretch middle, fixed spacing: Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/dyxGwBw">
  Stretch middle, fixed spacing: Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="3x3-grid">3x3 grid</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66646,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-207-1024x545.png" alt="3x3" class="wp-image-66646"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="jOgWdEy" pen_title="Alternating grid: Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/jOgWdEy">
  Alternating grid: Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>We can create a 3x3 grid by setting&nbsp;<code>flex-grow</code>&nbsp;to&nbsp;<code>0</code>&nbsp;and&nbsp;<code>flex-basis</code>&nbsp;to the preferred width for all children (here done using the&nbsp;<code>flex</code>&nbsp;short-hand:&nbsp;<code>flex: 0 32%</code>). The margins between the items are the leftovers from every row, i.e. (100%-32x3)/2=2%. I’ve matched the margin (<code>margin-bottom: 2%</code>) to achieve even spacing between all elements:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  flex: 0 32%;
  height: 100px;
  margin-bottom: 2%; <em>/* (100-32*3)/2 */</em>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can change the&nbsp;<code>flex-basis</code>&nbsp;to increase or decrease the number of items on each row.&nbsp;<code>flex: 0 24%</code>&nbsp;would put 4 items on every row,&nbsp;<code>flex: 0 19%</code>&nbsp;would put 5 items on every row, and so on so forth.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="3x3-grid-constrained-proportions-11">3x3 grid, constrained proportions (1:1)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66649,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-209-998x1024.png" alt="3x3 grid, constrained proportions (1:1)" class="wp-image-66649"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="PoMZVPw" pen_title="3x3 Grid: Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/PoMZVPw">
  3x3 Grid: Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Using a somewhat hacky CSS trick, we can create a grid full of items with constrained proportions. If we use padding-bottom when setting width on an element, the width is set relative to that item’s parent’s width. We can use that effect to create a square by setting an item’s padding-bottom and width to the same value (and effectively setting the height of that element through padding).</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 32%;
  padding-bottom: 32%; <em>/* Same as width, sets height */</em>
  margin-bottom: 2%; <em>/* (100-32*3)/2 */</em>
  position: relative;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Since we’ve created an element that is effectively made up of only padding, and there’s no place left for content, we need to set&nbsp;<code>position: relative</code>&nbsp;on the&nbsp;<code>.item</code>&nbsp;in this example and add a child element with&nbsp;<code>position: absolute</code>, and use that element to “reset” the canvas and add content.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="3x3-grid-constrained-proportions-169">3x3 grid, constrained proportions (16:9)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66652,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-211-1024x675.png" alt="3x3 grid, constrained proportions (16:9)" class="wp-image-66652"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="jOgWdEy" pen_title="3x3 Grid: Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/jOgWdEy">
  3x3 Grid: Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>To change the proportions of the items all you need to do is change the proportions of the&nbsp;<code>width</code>&nbsp;and&nbsp;<code>padding-bottom</code>&nbsp;on the&nbsp;<code>.item</code>. Changing the&nbsp;<code>width</code>&nbsp;would affect the number of items on each row, so as to not affect the grid structure we can for example change&nbsp;<code>padding-bottom</code>&nbsp;to&nbsp;<code>18%</code>&nbsp;to create 16:9 (equivalent to 32:18) rectangles.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 32%;
  padding-bottom: 18%; <em>/* 32:18, i.e. 16:9 */</em>
  margin-bottom: 2%; <em>/* (100-32*3)/2 */</em>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="graph-vertical-bars">Graph: vertical bars</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66655,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-213-1024x495.png" alt="Graph: vertical bars" class="wp-image-66655"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>If you want to use Flexbox to create a simple graph visualization, all you need to do is to set&nbsp;<code>align-items</code>&nbsp;of the container to&nbsp;<code>flex-end</code>&nbsp;and define a&nbsp;<code>height</code>&nbsp;for each bar.&nbsp;<code>flex-end</code>&nbsp;will ensure that the bars are anchored to the bottom of the graph.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  height: 300px;
  justify-content: space-between;
  align-items: flex-end;
}

.item { width: 14%; }
.item-1 { height: 40%; }
.item-2 { height: 50%; }
.item-3 { height: 60%; }
.item-4 { height: 20%; }
.item-5 { height: 30%; }
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="graph-horizontal-bars">Graph: horizontal bars</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66666,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-215-1024x496.png" alt="Graph: horizontal bars" class="wp-image-66666"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Using the same technique as for vertical bars, one can add on the with a value of to create a set of horizontal bars. can have a value of (default) or , where runs horizontally (→) and runs vertically (↓). One can also reverse the direction of both by using (←) and (↑), respectively.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  height: 300px;
  justify-content: space-between;
  flex-direction: column;
}

.item { height: 14%; }
.item-1 { width: 40%; }
.item-2 { width: 50%; }
.item-3 { width: 60%; }
.item-4 { width: 20%; }
.item-5 { width: 30%; }
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="vertical-stack-centered">Vertical stack (centered)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66668,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-217-1024x469.png" alt="Vertical stack (centered)" class="wp-image-66668"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="rNXxPrq" pen_title="3x3 grid, constrained proportions (16:9): Flexbox" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/rNXxPrq">
  3x3 grid, constrained proportions (16:9): Flexbox</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>To create a vertical stack and make the items run from top to bottom all we need to do is to change the&nbsp;<code>flex-direction</code>&nbsp;from the default value of&nbsp;<code>row</code>&nbsp;to&nbsp;<code>column</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  height: 40px;
  margin-bottom: 10px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="masonry-or-mosaic">Masonry (or mosaic)</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":66670,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-219-1024x833.png" alt="Masonry (or mosaic)" class="wp-image-66670"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>You’ve probably seen masonry (or mosaic) layouts all over the internet, but it’s likely that they were all powered by&nbsp;<a href="https://masonry.desandro.com/">Masonry</a>&nbsp;or a similar JavaScript library. Flexbox might seem like a great candidate to create this layout with CSS only finally, and it’s certainly possible, but it’s surprisingly hacky.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One of the main challenges of creating a masonry layout with flexbox is that to make an item affect the positioning of an item above and below it we need to change the&nbsp;<code>flex-direction</code>&nbsp;of the container to&nbsp;<code>column</code>, which makes items run from top to bottom. This creates a layout that looks great, and similar to the masonry effect, but it could be confusing for users; it creates an unexpected ordering of elements. If you read from left to right the elements would seem to be shuffled and appear in a seemingly random order, for example 1, 3, 6, 2, 4, 7, 8, etc.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Luckily, we can use the&nbsp;<code>order</code>&nbsp;property to change in which order elements are rendered. We can combine that property with some clever use of the&nbsp;<code>nth-child()</code>&nbsp;selector to order items dynamically depending on their original order. If we want to create a masonry layout with three columns we can divide all the items into three “groups”, like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class=""><em>/* Re-order items into rows */</em>
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }

<em>/* Force new columns */</em>
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>I’ve written&nbsp;<a href="https://tobiasahlin.com/blog/masonry-with-css/">another post that explains in detail how this works and why</a>. This will set the&nbsp;<code>order</code>&nbsp;to&nbsp;<code>1</code>&nbsp;for the 1st element, 4th element, 7th element, etc. Elements with the same&nbsp;<code>order</code>&nbsp;value will be ordered on ascending order according to the source code order, or which value was&nbsp;<em>set</em>&nbsp;first, so in this example we’re producing three sets ordered like so:&nbsp;<code>1, 4, 7, 10</code>&nbsp;(3n+1) with&nbsp;<code>order: 1</code>,&nbsp;<code>2, 5, 8</code>&nbsp;(3n+2) with&nbsp;<code>order: 2</code>, and&nbsp;<code>3, 6, 9</code>&nbsp;(3n) with&nbsp;<code>order: 3</code>. These three groups represent our three columns. Put together the order becomes&nbsp;<code>1, 4, 7, 10, 2, 5, 8, 3, 6, 9</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we make sure to render each of those groups as one column (no more, no less), it’ll create the illusion that the items have returned to their original order when you read from left to right. If we visually parse the grid as rows, the first row will contain the first element from every group (<code>1, 2, 3</code>), the second row will contain the second element from every group (<code>4, 5, 6</code>), and so on so forth. We then insert elements between the columns that take up 100% of the parent’s height,&nbsp;<a href="https://tobiasahlin.com/blog/flexbox-break-to-new-row/">which force the columns to line break</a>&nbsp;and not accidentally merge with adjacent columns. Here’s the full CSS snippet:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  height: 580px;
}

.item {
  width: 32%;
  margin-bottom: 2%; <em>/* (100-32*3)/2 */</em>
}

<em>/* Re-order items into rows */</em>
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }

<em>/* Force new columns */</em>
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Visually this achieves something that is very close to the masonry effect. How is the tab order affected? Luckily, not at all.&nbsp;<code>order</code>&nbsp;only changes the visual representation of objects, not the tab order, so tabbing through the grid will work as intended.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to make a masonry layout with more than three columns (or want a better understanding of how this works) I recommend reading&nbsp;<a href="https://tobiasahlin.com/blog/masonry-with-css/">the dedicated post on how to create masonry layouts with CSS</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">CSS masonry with flexbox, :nth-child(), and order</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">Source: <a href="https://tobiasahlin.com/blog/masonry-with-css/">https://tobiasahlin.com/blog/masonry-with-css/</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On the surface it seems fairly easy to create a masonry layout with&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">flexbox</a>; all you need to do is set&nbsp;<code>flex-flow</code>&nbsp;to&nbsp;<code>column wrap</code>&nbsp;and voilà, you have a masonry layout. Sort of. The problem with this approach is that it produces a grid with a seemingly shuffled and obscure order. Items will be (unbeknownst to the user) rendered from top to bottom and someone parsing the grid from left to right will read the boxes in a somewhat arbitrary order, for example 1, 3, 6, 2, 4, 7, 8, 5, and so on so forth.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Flexbox has no easy way of rendering items with a&nbsp;<code>column</code>&nbsp;layout while using a&nbsp;<code>row</code>&nbsp;order, but we can build a masonry layout with CSS only—no JavaScript needed—by using&nbsp;<code>:nth-child()</code>&nbsp;and the&nbsp;<code>order</code>&nbsp;property. In a gist, here’s the trick to create a&nbsp;<code>row</code>&nbsp;order while using&nbsp;<code>flex-direction: column</code>, given that you’re rendering three columns:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><em>/* Render items as columns */</em>
.container {
  display: flex;
  flex-flow: column wrap;
}

<em>/* Re-order items into rows */</em>
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }

<em>/* Force new columns */</em>
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will create a masonry layout with items rendered as columns but ordered as rows (the gray vertical lines represent the pseudo elements that&nbsp;<a href="https://tobiasahlin.com/blog/flexbox-break-to-new-row/">force line breaks</a>:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66673,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-221-1024x831.png" alt="masonry layout" class="wp-image-66673"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Let’s break down the implementation (or&nbsp;<a href="https://tobiasahlin.com/blog/masonry-with-css/#the-solution">jump to the solution</a>, or&nbsp;<a href="https://codepen.io/collection/XPjvPP/">see the codepen collection</a>).</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="pick-your-poison-a-shuffled-order-or-weird-gaps">Pick your poison: a shuffled order, or weird gaps</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flexbox is not built for masonry—if you set a fixed height on a flex container (so that items can wrap when they overflow) and&nbsp;<code>flex-flow</code>&nbsp;to&nbsp;<code>column wrap</code>, you’ll achieve something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66676,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-223-1024x772.png" alt="shuffled order" class="wp-image-66676"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Items are rendered in columns from top to bottom, producing an arbitrary order when read from left to right. This is the expected outcome and desirable in many scenarios, but not when we’re trying to create a masonry layout, and it becomes increasingly disorienting as a page grows taller.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we instead change the&nbsp;<code>flex-direction</code>&nbsp;to&nbsp;<code>row</code>&nbsp;and have elements of varying heights we’ll achieve the correct order but with weird and unexpected gaps all over our grid:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66679,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-225-1024x903.png" alt="flex-direction to row" class="wp-image-66679"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>So it seems impossible to get the best of both worlds: items rendered as columns but ordered as rows. You might decide to use&nbsp;<code>flex-direction: column</code>&nbsp;<span style="box-sizing: border-box; margin: 0px; padding: 0px;">You can move around the elements in your HTML to achieve the right&nbsp;<em>visual</em>&nbsp;order, but this can be cumbersome and unnecessarily complex</span> and can<span style="box-sizing: border-box; margin: 0px; padding: 0px;">&nbsp;</span>mess up the tab order of the elements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="re-ordering-elements-with-order-and-nth-child">Re-ordering elements with&nbsp;<code>order</code>&nbsp;and&nbsp;<code>nth-child()</code></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>order</code>&nbsp;property affects the order of items contained in a CSS flexbox or grid, and we can use it to re-order items for our soon-to-be masonry layout. The&nbsp;<code>order</code>&nbsp;property is pretty straight-forward to use: if you have two elements and one has&nbsp;<code>order: 1</code>&nbsp;and the other one has&nbsp;<code>order: 2</code>&nbsp;the element with&nbsp;<code>order: 1</code>&nbsp;will be rendered before the other element, independent of their HTML source code order.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The CSS masonry solution depends on a detail of the&nbsp;<code>order</code>&nbsp;specification: what happens if two or more elements have the same&nbsp;<code>order</code>&nbsp;value? Which comes first? Flexbox falls back on the source code order: the element that appears first in the source code will be rendered before other elements with the same order value. This fact gives us the possibility to easily re-group items in our grid so that we can change the ordering from columns to rows, while still rendering those rows as columns, using&nbsp;<code>nth-child()</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Look at the table below. To achieve a sensible order using&nbsp;<code>flex-direction: row</code>&nbsp;we’d just have to render elements in the default order:&nbsp;<code>1, 2, 3, 4, 5, 6</code>&nbsp;, etc.</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>&nbsp;</th><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr></thead><tbody><tr><td>Row 1</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Row 2</td><td>4</td><td>5</td><td>6</td></tr><tr><td>Row 3</td><td>7</td><td>8</td><td>9</td></tr><tr><td>Row 4</td><td>10</td><td>11</td><td>12</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>If we want to achieve the&nbsp;<em>same</em>&nbsp;order while using&nbsp;<code>flex-direction: column</code>&nbsp;we need to change the order of the elements to match the order of each column in the table (rather than each row):</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table class="has-fixed-layout"><thead><tr><th>&nbsp;</th><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr></thead><tbody><tr><td>Row 1</td><td><strong>1</strong></td><td>2</td><td>3</td></tr><tr><td>Row 2</td><td><strong>4</strong></td><td>5</td><td>6</td></tr><tr><td>Row 3</td><td><strong>7</strong></td><td>8</td><td>9</td></tr><tr><td>Row 4</td><td><strong>10</strong></td><td>11</td><td>12</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>I.e. the first elements in our flexbox layout have to be&nbsp;<code>1, 4, 7, 10</code>. These items will fill up the first column, followed by&nbsp;<code>2, 5, 8, 11</code>&nbsp;for the 2nd column and&nbsp;<code>3, 6, 9, 12</code>&nbsp;for the 3rd and last column. This is where the&nbsp;<code>nth-child()</code>&nbsp;selector comes in. We can use it to select every third element (3n), starting with the first element (3n+1), and set all those elements to have the same&nbsp;<code>order</code>&nbsp;value:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item:nth-child(3n+1) { order: 1; }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This selector sets&nbsp;<code>order: 1</code>&nbsp;for element&nbsp;<code>1, 4, 7, 10</code>&nbsp;in our container, i.e. the entire first column. In other words we’re using a combination of&nbsp;<code>nth-child()</code>&nbsp;and&nbsp;<code>order</code>&nbsp;to re-order items depending on their original order. To create the 2nd and 3rd column we change the offset:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here we’re producing three sets:&nbsp;<code>1, 4, 7, 10</code>&nbsp;(3n+1) with&nbsp;<code>order: 1</code>,&nbsp;<code>2, 5, 8, 11</code>&nbsp;(3n+2) with&nbsp;<code>order: 2</code>, and&nbsp;<code>3, 6, 9, 12</code>&nbsp;(3n) with&nbsp;<code>order: 3</code>. All together the order becomes&nbsp;<code>1, 4, 7, 10, 2, 5, 8, 11, 3, 6, 9, 12</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we render each of those groups as one column (and no more), it’ll create the illusion that the items have returned to their original order when you read from left to right. If we visually parse the grid as rows, the first row will contain the first element from every group (1, 2, 3), the second row will contain the second element from every group (4, 5, 6), and so on so forth. This technique allows us to create a masonry layout with items rendered as columns but ordered as rows.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66682,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-227-1024x832.png" alt="Re-ordering elements with order and nth-child()" class="wp-image-66682"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>How is the tab order affected by shuffling around elements like this? Luckily, not at all.&nbsp;<code>order</code>&nbsp;Tabbing through the grid will work as intended, as the change only affects the visual representation of objects, not the tab order.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="preventing-columns-from-merging">Preventing columns from merging</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you have many items in a masonry layout this technique will fairly certainly break down at some point. We’re counting on that every “group” we’ve created will be rendered as exactly one column, but in reality, items can have different heights, and columns can easily start to merge. The first column could be longer than the other two, for example, which could make the third column start at the end of the second column:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66684,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-229-1024x829.png" alt="Preventing columns from merging" class="wp-image-66684"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The highlighted box here (3) has to be rendered at the start of the third column or the ordering algorithm will break, but if there’s space for another element at the end of the 2nd column it will naturally be rendered there.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can fix this wrapping issue by forcing columns to restart at certain points. There’s no easy way of saying “this element should line break” with flexbox, but&nbsp;<a href="https://tobiasahlin.com/blog/flexbox-break-to-new-row/">we can achieve this effect by adding invisible elements that take up 100% of the container’s height</a>. As they require 100% of the parent’s height to be rendered they won’t fit in a column together with any other element, so they’ll essentially force line breaks by creating collapsed columns.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We have to insert these line break elements into our grid and array of elements, so what we’re looking for is to create this sequence of elements:&nbsp;<code>1, 4, 7, 10, &lt;break&gt;, 2, 5, 8, 11, &lt;break&gt;, 3, 6, 9, 12</code>. We can use pseudo-elements on the container to add these, and we can set the&nbsp;<code>order</code>&nbsp;to&nbsp;<code>2</code>&nbsp;on both of them. Adding a pseudo-element with&nbsp;<code>:before</code>&nbsp;will make it the first child of the container and adding a pseudo-element with&nbsp;<code>:after</code>&nbsp;will make it the last child of the container, so if we set&nbsp;<code>order: 2</code>&nbsp;on both of them they will become the first and the last element of the&nbsp;<code>order: 2</code>&nbsp;“group” (as they appear before and after the other elements):&nbsp;<code>:before, 2, 5, 8, 11, :after</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><em>/* Force new columns */</em>
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>I’ve highlighted the pseudo-elements below to show their effect. Notice that despite that box 3 would fit in the 2nd column it’s rendered as the first element in the last column:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66687,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-231-1024x837.png" alt="last column" class="wp-image-66687"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="the-solution">The solution</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As a final step, you need to make sure that your flex container has a set height that makes it taller than your tallest column (so that all columns will fit). Put together, this will produce a CSS masonry layout with three columns (<a href="https://codepen.io/tobiasahlin/pen/JVmLRa">also available as a codepen</a>):</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="JVmLRa" pen_title="CSS flexbox masonry, 3 columns" user="tobiasahlin"]See the Pen <a href="https://codepen.io/tobiasahlin/pen/JVmLRa">
  CSS flexbox masonry, 3 columns</a> by Tobias Ahlin (<a href="https://codepen.io/tobiasahlin">@tobiasahlin</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  <em>/* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */</em>
  height: 600px; 
}

.item {
  width: 32%;
  margin-bottom: 2%; <em>/* Optional */</em>
}

<em>/* Re-order items into 3 rows */</em>
.item:nth-child(3n+1) { order: 1; }
.item:nth-child(3n+2) { order: 2; }
.item:nth-child(3n)   { order: 3; }

<em>/* Force new columns */</em>
.container::before,
.container::after {
  content: "";
  flex-basis: 100%;
  width: 0;
  order: 2;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Your HTML should look like this, with one&nbsp;<code>&lt;div /&gt;</code>&nbsp;for every item in your grid:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;div class="container"&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  ...
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="working-with-more-than-three-columns">Working with more than three columns</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To create a masonry layout with more than three columns<span style="box-sizing: border-box; margin: 0px; padding: 0px;">, we need to adapt our sorting algorithm, update the width of the items, and insert line break elements manually (instead of using pseudo-elements). For quick access to the final result, I’ve compiled&nbsp;<a href="https://codepen.io/collection/XPjvPP/" target="_blank" rel="noopener">a list of code pens showcasing flexbox masonry with 3, 4, 5,</a></span><a href="https://codepen.io/collection/XPjvPP/"> and 6 columns</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since we’re limited to creating just two pseudo-elements with&nbsp;<code>:before</code>&nbsp;and&nbsp;<code>:after</code>&nbsp;we need to manually add break elements into our container (you need one less break element than the number of columns in your layout). You can append them to the end of your container, they’ll be sorted into their respective columns:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;div class="container"&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  &lt;div class="item"&gt;&lt;/div&gt;
  ...
  &lt;span class="item break"&gt;&lt;/span&gt;
  &lt;span class="item break"&gt;&lt;/span&gt;
  &lt;span class="item break"&gt;&lt;/span&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>We’re inserting column breaks as&nbsp;<code>span</code>s in order to sort them independently from the content items. We need a way to “restart” the counting once we reach the break elements, or an uneven number of content items could make the first break element start after the 3rd column, for example. The&nbsp;<code>:nth-of-type</code>&nbsp;selector targets elements of different types independently, so we can decouple the order of the content items and the column breaks like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item:nth-of-type(4n+1) { order: 1; }
.item:nth-of-type(4n+2) { order: 2; }
.item:nth-of-type(4n+3) { order: 3; }
.item:nth-of-type(4n)   { order: 4; }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The break elements, like previously, take up the full height of the container:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><em>/* Force new columns */</em>
.break {
  flex-basis: 100%;
  width: 0;
  margin: 0;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will create a masonry layout with four columns (<a href="https://codepen.io/tobiasahlin/pen/OGBvqW">view codepen</a>):</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":66690,"sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-233-1024x764.png" alt="masonry layout" class="wp-image-66690"/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="OGBvqW" pen_title="CSS flexbox masonry, 4 columns" user="tobiasahlin"]See the Pen <a href="https://codepen.io/tobiasahlin/pen/OGBvqW">
  CSS flexbox masonry, 4 columns</a> by Tobias Ahlin (<a href="https://codepen.io/tobiasahlin">@tobiasahlin</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Here’s the full solution for a CSS masonry layout with four columns:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  <em>/* Your container needs a fixed height, and it 
   * needs to be taller than your tallest column. */</em>
  height: 600px; 
}

.item {
  width:24%;
  margin-bottom: 2%; <em>/* Optional */</em>
}

<em>/* Re-order items into 4 rows */</em>
.item:nth-of-type(4n+1) { order: 1; }
.item:nth-of-type(4n+2) { order: 2; }
.item:nth-of-type(4n+3) { order: 3; }
.item:nth-of-type(4n)   { order: 4; }

<em>/* Force new columns */</em>
.break {
  flex-basis: 100%;
  width: 0;
  margin: 0;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This CSS-only way of creating a masonry (or mosaic) layout is surely not as robust, flexible, and foolproof as a JavaScript implementation (like&nbsp;<a href="https://masonry.desandro.com/">Masonry</a>) but if you don’t want to rely on a third-party library just to create a masonry layout I hope that these layouts tricks can come in handy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For help with more common CSS flexbox patterns,&nbsp;<a href="https://tobiasahlin.com/blog/common-flexbox-patterns/">I’ve compiled a list of flexbox examples that you can copy and paste into your projects</a>&nbsp;and&nbsp;<a href="https://tobiasahlin.com/blog/flexbox-break-to-new-row/">written in-depth about the line-breaking flexbox item technique</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="further-reading">Further reading</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><a href="https://twitter.com/gilbitron">Gilbert Pellegrom</a>&nbsp;has created&nbsp;<a href="https://flexmasonry.now.sh/">FlexMasonry</a>, a lightweight JavaScript masonry library inspired by the technique outlined in this article</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>October, 2020: the CSS Working Group has now published a&nbsp;<a href="https://drafts.csswg.org/css-grid-3/">draft specification for masonry layouts</a>, as part of CSS grid</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>CSS masonry&nbsp;<a href="https://css-houdini.rocks/masonry/">can also be implemented</a>&nbsp;with&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/Houdini">Houdini</a>&nbsp;(requires flag)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
