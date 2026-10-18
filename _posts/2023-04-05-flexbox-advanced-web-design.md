---
title: "Flexbox: Advanced Web Design"
date: "2023-04-05 11:33:22"
layout: post
permalink: "/flexbox-advanced-web-design/"
categories: ["projects"]
tags: []
wordpress_id: "62567"
---

<!-- wp:heading {"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Basics and terminology</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><a href="https://www.dropbox.com/s/8b0erizn0rmociw/css-flexbox-poster.png?dl=1">Download Flexbox Poster Here!</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as “flex container”) whereas the others are meant to be set on the children (said “flex items”).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If “regular” layout is based on both block and inline flow directions, the flex layout is based on “flex-flow directions”. Please have a look at this figure from the specification, explaining the main idea behind the flex layout.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":62599,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-45-1024x463.png" alt="" class="wp-image-62599"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Items will be laid out following either the&nbsp;<code>main axis</code>&nbsp;(from&nbsp;<code>main-start</code>&nbsp;to&nbsp;<code>main-end</code>) or the cross axis (from&nbsp;<code>cross-start</code>&nbsp;to&nbsp;<code>cross-end</code>).</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>main axis</strong>&nbsp;– The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the&nbsp;<code>flex-direction</code>&nbsp;property (see below).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>main-start | main-end</strong>&nbsp;– The flex items are placed within the container starting from main-start and going to main-end.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>main size</strong>&nbsp;– A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>cross axis</strong>&nbsp;– The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>cross-start | cross-end</strong>&nbsp;– Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>cross size</strong>&nbsp;– The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-tricks"></a><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-tricks"></a><a rel="noreferrer noopener" href="https://jetpack.com/upgrade/search/?utm_source=poweredby" target="_blank"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Flexbox properties</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":62598,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-44-1024x439.png" alt="Flexbox properties" class="wp-image-62598"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="properties-for-the-parent-flex-container"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-properties-for-the-parentflex-container"></a>Properties for the Parent<br>(flex container)</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="display"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-display"></a>display</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  display: flex; <em>/* or inline-flex */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that CSS columns have no effect on a flex container.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="flex-direction"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-direction"></a>flex-direction</h4>
<!-- /wp:heading -->

<!-- wp:image {"id":62597,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-43-1024x484.png" alt="" class="wp-image-62597"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
  flex-direction: row | row-reverse | column | column-reverse;
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>row</code>&nbsp;(default): left to right in&nbsp;<code>ltr</code>; right to left in&nbsp;<code>rtl</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>row-reverse</code>: right to left in&nbsp;<code>ltr</code>; left to right in&nbsp;<code>rtl</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>column</code>: same as&nbsp;<code>row</code>&nbsp;but top to bottom</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>column-reverse</code>: same as&nbsp;<code>row-reverse</code>&nbsp;but bottom to top</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="flex-wrap">flex-wrap</h4>
<!-- /wp:heading -->

<!-- wp:image {"id":62596,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-42-1024x473.png" alt="" class="wp-image-62596"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>nowrap</code>&nbsp;(default): all flex items will be on one line</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>wrap</code>: flex items will wrap onto multiple lines, from top to bottom.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>wrap-reverse</code>: flex items will wrap onto multiple lines from bottom to top.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>There are some&nbsp;<a href="https://css-tricks.com/almanac/properties/f/flex-wrap/">visual demos of&nbsp;<code>flex-wrap</code>&nbsp;here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color" id="flex-flow"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-flow"></a>flex-flow</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is a shorthand for the&nbsp;<code>flex-direction</code>&nbsp;and&nbsp;<code>flex-wrap</code>&nbsp;properties, which together define the flex container’s main and cross axes. The default value is&nbsp;<code>row nowrap</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  flex-flow: column wrap;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color" id="justify-content"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content"></a>justify-content</h3>
<!-- /wp:heading -->

<!-- wp:image {"id":62595,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-41-677x1024.png" alt="Flex-flow" class="wp-image-62595"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>flex-start</code>&nbsp;(default): items are packed toward the start of the flex-direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>flex-end</code>: items are packed toward the end of the flex-direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>start</code>: items are packed toward the start of the&nbsp;<code>writing-mode</code>&nbsp;direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>end</code>: items are packed toward the end of the&nbsp;<code>writing-mode</code>&nbsp;direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>left</code>: items are packed toward left edge of the container, unless that doesn’t make sense with the&nbsp;<code>flex-direction</code>, then it behaves like&nbsp;<code>start</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>right</code>: items are packed toward right edge of the container, unless that doesn’t make sense with the&nbsp;<code>flex-direction</code>, then it behaves like&nbsp;<code>end</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>center</code>: items are centered along the line</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>space-between</code>: items are evenly distributed in the line; first item is on the start line, last item on the end line</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>space-around</code>: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>space-evenly</code>: items are distributed so that the spacing between any two items (and the space to the edges) is equal.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Note that that browser support for these values is nuanced. For example,&nbsp;<code>space-between</code>&nbsp;never got support from some versions of Edge, and start/end/left/right aren’t in Chrome yet. MDN&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content">has detailed charts</a>. The safest values are&nbsp;<code>flex-start</code>,&nbsp;<code>flex-end</code>, and&nbsp;<code>center</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are also two additional keywords you can pair with these values:&nbsp;<code>safe</code>&nbsp;and&nbsp;<code>unsafe</code>. Using&nbsp;<code>safe</code>&nbsp;ensures that however you do this type of positioning, you can’t push an element such that it renders off-screen (e.g. off the top) in such a way the content can’t be scrolled too (called “data loss”).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="prop-align-items">align-items</h4>
<!-- /wp:heading -->

<!-- wp:image {"id":62600,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-46-852x1024.png" alt="" class="wp-image-62600"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This defines the default behavior for how flex items are laid out along the&nbsp;<strong>cross axis</strong>&nbsp;on the current line. Think of it as the&nbsp;<code>justify-content</code>&nbsp;version for the cross-axis (perpendicular to the main-axis).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>stretch</code>&nbsp;(default): stretch to fill the container (still respect min-width/max-width)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>flex-start</code>&nbsp;/&nbsp;<code>start</code>&nbsp;/&nbsp;<code>self-start</code>: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the&nbsp;<code>flex-direction</code>&nbsp;rules or the&nbsp;<code>writing-mode</code>&nbsp;rules.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>flex-end</code>&nbsp;/&nbsp;<code>end</code>&nbsp;/&nbsp;<code>self-end</code>: items are placed at the end of the cross axis. The difference again is subtle and is about respecting&nbsp;<code>flex-direction</code>&nbsp;rules vs.&nbsp;<code>writing-mode</code>&nbsp;rules.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>center</code>: items are centered in the cross-axis</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>baseline</code>: items are aligned such as their baselines align</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>safe</code>&nbsp;and&nbsp;<code>unsafe</code>&nbsp;modifier keywords can be used in conjunction with all the rest of these keywords (although note&nbsp;browser support), and deal with helping you prevent aligning elements such that the content becomes inaccessible.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="align-content"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-content"></a>align-content</h4>
<!-- /wp:heading -->

<!-- wp:image {"id":62601,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-47-830x1024.png" alt="" class="wp-image-62601"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how&nbsp;<code>justify-content</code>&nbsp;aligns individual items within the main-axis.</p>
<!-- /wp:paragraph -->

<!-- wp:pullquote -->
<figure class="wp-block-pullquote"><blockquote><p><strong>Note:</strong>&nbsp;This property only takes effect on multi-line flexible containers, where&nbsp;<code>flex-wrap</code>&nbsp;is set to either&nbsp;<code>wrap</code>&nbsp;or&nbsp;<code>wrap-reverse</code>). A single-line flexible container (i.e. where&nbsp;<code>flex-wrap</code>&nbsp;is set to its default value,&nbsp;<code>no-wrap</code>) will not reflect&nbsp;<code>align-content</code>.</p></blockquote></figure>
<!-- /wp:pullquote -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><code>normal</code>&nbsp;(default): items are packed in their default position as if no&nbsp;value was set.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>flex-start</code>&nbsp;/&nbsp;<code>start</code>: items packed to the start of the container. The (more supported)&nbsp;<code>flex-start</code>&nbsp;honors the&nbsp;<code>flex-direction</code>&nbsp;while&nbsp;<code>start</code>&nbsp;honors the&nbsp;<code>writing-mode</code>&nbsp;direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>flex-end</code>&nbsp;/&nbsp;<code>end</code>: items packed to the end of the container. The (more support)&nbsp;<code>flex-end</code>&nbsp;honors the&nbsp;<code>flex-direction</code>&nbsp;while end honors the&nbsp;<code>writing-mode</code>&nbsp;direction.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>center</code>: items centered in the container</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>space-between</code>: items evenly distributed; the first line is at the start of the container while the last one is at the end</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>space-around</code>: items evenly distributed with equal space around each line</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>space-evenly</code>: items are evenly distributed with equal space around them</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>stretch</code>: lines stretch to take up the remaining space</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>safe</code>&nbsp;and&nbsp;<code>unsafe</code>&nbsp;modifier keywords can be used in conjunction with all the rest of these keywords (although note&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">browser support</a>), and deal with helping you prevent aligning elements such that the content becomes inaccessible.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="h-gap-row-gap-column-gap"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-gap-row-gap-column-gap"></a>gap, row-gap, column-gap</h4>
<!-- /wp:heading -->

<!-- wp:image {"id":62602,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/image-48-922x1024.png" alt="" class="wp-image-62602"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://css-tricks.com/almanac/properties/g/gap/">The&nbsp;<code>gap</code>&nbsp;property</a>&nbsp;explicitly controls the space between flex items. It applies that spacing&nbsp;<em>only between items</em>&nbsp;not on the outer edges.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; <em>/* row-gap column gap */</em>
  row-gap: 10px;
  column-gap: 20px;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The behavior could be thought of as a&nbsp;<em>minimum</em>&nbsp;gutter, as if the gutter is bigger somehow (because of something like&nbsp;<code>justify-content: space-between;</code>) then the gap will only take effect if that space would end up smaller.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is not exclusively for flexbox,&nbsp;<code>gap</code>&nbsp;works in grid and multi-column layout as well.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Prefixing Flexbox</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flexbox requires some vendor prefixing to support the most browsers possible. It doesn’t just include prepending properties with the vendor prefix, but there are actually entirely different property and value names. This is because the Flexbox spec has changed over time, creating an&nbsp;<a href="https://css-tricks.com/old-flexbox-and-new-flexbox/">“old”, “tweener”, and “new”</a>&nbsp;versions.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Perhaps the best way to handle this is to write in the new (and final) syntax and run your CSS through&nbsp;<a href="https://css-tricks.com/autoprefixer/">Autoprefixer</a>, which handles the fallbacks very well.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Alternatively, here’s a Sass&nbsp;<code>@mixin</code>&nbsp;to help with some of the prefixing, which also gives you an idea of what kind of things need to be done:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">@mixin flexbox() {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

@mixin flex($values) {
  -webkit-box-flex: $values;
  -moz-box-flex:  $values;
  -webkit-flex:  $values;
  -ms-flex:  $values;
  flex:  $values;
}

@mixin order($val) {
  -webkit-box-ordinal-group: $val;  
  -moz-box-ordinal-group: $val;     
  -ms-flex-order: $val;     
  -webkit-order: $val;  
  order: $val;
}

.wrapper {
  @include flexbox();
}

.item {
  @include flex(1 200px);
  @include order(2);
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-examples"></a>Examples</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let’s start with a very very simple example, solving an almost daily problem: perfect centering. It couldn’t be any simpler if you use flexbox.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.parent {
  display: flex;
  height: 300px; <em>/* Or whatever */</em>
}

.child {
  width: 100px;  <em>/* Or whatever */</em>
  height: 100px; <em>/* Or whatever */</em>
  margin: auto;  <em>/* Magic! */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This relies on the fact a margin set to&nbsp;<code>auto</code>&nbsp;in a flex container absorb extra space. So setting a margin of&nbsp;<code>auto</code>&nbsp;will make the item perfectly centered in both axes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now let’s use some more properties. Consider a list of 6 items, all with fixed dimensions, but can be auto-sized. We want them to be evenly distributed on the horizontal axis so that when we resize the browser, everything scales nicely, and without media queries.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.flex-container {
  <em>/* We first create a flex layout context */</em>
  display: flex;

  <em>/* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */</em>
  flex-flow: row wrap;

  <em>/* Then we define how is distributed the remaining space */</em>
  justify-content: space-around;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Done. Everything else is just some styling concern. Below is a pen featuring this example. Be sure to go to CodePen and try resizing your windows to see what happens.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="EKEYob" user="css-tricks"]See the Pen <a href="https://codepen.io/team/css-tricks/pen/EKEYob">
Demo Flexbox 1</a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Let’s try something else. Imagine we have a right-aligned navigation element on the very top of our website, but we want it to be centered on medium-sized screens and single-columned on small devices. Easy enough.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers"><em>/* Large */</em>
.navigation {
  display: flex;
  flex-flow: row wrap;
  <em>/* This aligns items to the end line on main-axis */</em>
  justify-content: flex-end;
}

<em>/* Medium screens */</em>
@media all and (max-width: 800px) {
  .navigation {
    <em>/* When on medium sized screens, we center it by evenly distributing empty space around items */</em>
    justify-content: space-around;
  }
}

<em>/* Small screens */</em>
@media all and (max-width: 500px) {
  .navigation {
    <em>/* On small screens, we are no longer using row direction but column */</em>
    flex-direction: column;
  }
}</code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="YqaKYR" user="css-tricks"]See the Pen <a href="https://codepen.io/team/css-tricks/pen/YqaKYR">
Demo Flexbox 2</a> by CSS-Tricks (<a href="https://codepen.io/team/css-tricks">@css-tricks</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Let’s try something even better by playing with flex items flexibility! What about a mobile-first 3-columns layout with full-width header and footer. And independent from source order.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">.wrapper {
  display: flex;
  flex-flow: row wrap;
}

<em>/* We tell all items to be 100% width, via flex-basis */</em>
.wrapper &gt; * {
  flex: 1 100%;
}

<em>/* We rely on source order for mobile-first approach
 * in this case:
 * 1. header
 * 2. article
 * 3. aside 1
 * 4. aside 2
 * 5. footer
 */</em>

<em>/* Medium screens */</em>
@media all and (min-width: 600px) {
  <em>/* We tell both sidebars to share a row */</em>
  .aside { flex: 1 auto; }
}

<em>/* Large screens */</em>
@media all and (min-width: 800px) {
  <em>/* We invert order of first sidebar and main
   * And tell the main element to take twice as much width as the other two sidebars 
   */</em>
  .main { flex: 3 0px; }
  .aside-1 { order: 1; }
  .main    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a rel="noreferrer noopener" href="https://jetpack.com/upgrade/search/?utm_source=poweredby" target="_blank"></a></p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="vWEMWw" user="chriscoyier"]See the Pen <a href="https://codepen.io/chriscoyier/pen/vWEMWw">
Demo Flexbox 3</a> by Chris Coyier  (<a href="https://codepen.io/chriscoyier">@chriscoyier</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="NWLWMeR" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/NWLWMeR">
  FlexBox Basics</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="Vwoezmd" pen_title="Justify Content" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/Vwoezmd">
  Justify Content</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->
