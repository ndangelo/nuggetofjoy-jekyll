---
title: "CSS Flexbox Poster and Demo"
date: "2023-02-17 13:24:36"
layout: post
permalink: "/css-flexbox/"
categories: ["dmet-155-introduction-to-web-design"]
tags: []
wordpress_id: "58382"
---

<!-- wp:gallery {"linkTo":"none"} -->
<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><!-- wp:image {"id":58383,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="http://nuggetofjoy.com/wp-content/uploads/css-flexbox-poster.png" alt="Flexbox Poster" class="wp-image-58383"/></figure>
<!-- /wp:image --></figure>
<!-- /wp:gallery -->

<!-- wp:image {"width":"798px","height":"318px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg" alt="container" style="width:798px;height:318px"/></figure>
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

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
  display: flex; <em>/* or inline-flex */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that CSS columns have no effect on a flex container.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="flex-direction"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-direction"></a>flex-direction</h4>
<!-- /wp:heading -->

<!-- wp:image {"width":"842px","height":"390px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg" alt="the four possible values of flex-direction being shown: top to bottom, bottom to top, right to left, and left to right" style="width:842px;height:390px"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
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
<h4 class="wp-block-heading" id="flex-wrap"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-wrap"></a>flex-wrap</h4>
<!-- /wp:heading -->

<!-- wp:image {"width":"696px","height":"363px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg" alt="two rows of boxes, the first wrapping down onto the second" style="width:696px;height:363px"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
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

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="flex-flow"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-flow"></a>flex-flow</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is a shorthand for the&nbsp;<code>flex-direction</code>&nbsp;and&nbsp;<code>flex-wrap</code>&nbsp;properties, which together define the flex container’s main and cross axes. The default value is&nbsp;<code>row nowrap</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
  flex-flow: column wrap;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading" id="justify-content"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-justify-content"></a>justify-content</h4>
<!-- /wp:heading -->

<!-- wp:image {"width":"619px","height":"1023px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg" alt="flex items within a flex container demonstrating the different spacing options" style="width:619px;height:1023px"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
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

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="prop-align-items"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-items"></a>align-items</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"670px","height":"902px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg" alt="demonstration of differnet alignment options, like all boxes stuck to the top of a flex parent, the bottom, stretched out, or along a baseline" style="width:670px;height:902px"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This defines the default behavior for how flex items are laid out along the&nbsp;<strong>cross axis</strong>&nbsp;on the current line. Think of it as the&nbsp;<code>justify-content</code>&nbsp;version for the cross-axis (perpendicular to the main-axis).</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
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
<p>The&nbsp;<code>safe</code>&nbsp;and&nbsp;<code>unsafe</code>&nbsp;modifier keywords can be used in conjunction with all the rest of these keywords (although note&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items">browser support</a>), and deal with helping you prevent aligning elements such that the content becomes inaccessible.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="align-content"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-content"></a>align-content</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"653px","height":"882px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg" alt="examples of the align-content property where a group of items cluster at the top or bottom, or stretch out to fill the space, or have spacing." style="width:653px;height:882px"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how&nbsp;<code>justify-content</code>&nbsp;aligns individual items within the main-axis.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Note:</strong>&nbsp;This property only takes effect on multi-line flexible containers, where&nbsp;<code>flex-wrap</code>&nbsp;is set to either&nbsp;<code>wrap</code>&nbsp;or&nbsp;<code>wrap-reverse</code>). A single-line flexible container (i.e. where&nbsp;<code>flex-wrap</code>&nbsp;is set to its default value,&nbsp;<code>no-wrap</code>) will not reflect&nbsp;<code>align-content</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.container {
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

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="h-gap-row-gap-column-gap"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-gap-row-gap-column-gap"></a>gap, row-gap, column-gap</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"444px","height":"553px","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2021/09/gap-1.svg" alt="row gap" style="width:444px;height:553px"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><a href="https://css-tricks.com/almanac/properties/g/gap/">The&nbsp;<code>gap</code>&nbsp;property</a>&nbsp;explicitly controls the space between flex items. It applies that spacing&nbsp;<em>only between items</em>&nbsp;not on the outer edges.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.container {
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

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Properties for the Children<br>(flex items)</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"857px","height":"auto","sizeSlug":"large","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg" alt="Flex Items
" style="width:857px;height:auto"/></figure>
<!-- /wp:image -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="order">order</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"629px","height":"auto","align":"center"} -->
<figure class="wp-block-image aligncenter is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/order.svg" alt="Diagram showing flexbox order. A container with the items being 1 1 1 2 3, -1 1 2 5, and 2 2 99." style="width:629px;height:auto"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>By default, flex items are laid out in the source order. However, the&nbsp;<code>order</code>&nbsp;property controls the order in which they appear in the flex container.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item {
  order: 5; <em>/* default is 0 */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Items with the same&nbsp;<code>order</code>&nbsp;revert to source order.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="flex-grow">flex-grow</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"905px","height":"auto","align":"center"} -->
<figure class="wp-block-image aligncenter is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg" alt="two rows of items, the first has all equally-sized items with equal flex-grow numbers, the second with the center item at twice the width because its value is 2 instead of 1." style="width:905px;height:auto"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If all items have&nbsp;<code>flex-grow</code>&nbsp;set to&nbsp;<code>1</code>, the remaining space in the container will be distributed equally to all children. If one of the children has a value of&nbsp;<code>2</code>, that child would take up twice as much of the space as either one of the others (or it will try, at least).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item {
  flex-grow: 4; <em>/* default 0 */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Negative numbers are invalid.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="flex-shrink"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-shrink"></a>flex-shrink</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This defines the ability for a flex item to shrink if necessary.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item {
  flex-shrink: 3; <em>/* default 1 */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Negative numbers are invalid.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="flex-basis"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex-basis"></a>flex-basis</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The&nbsp;<code>auto</code>&nbsp;keyword means “look at my width or height property” (which was temporarily done by the&nbsp;<code>main-size</code>&nbsp;keyword until deprecated). The&nbsp;<code>content</code>&nbsp;keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren&nbsp;<code>max-content</code>,&nbsp;<code>min-content</code>, and&nbsp;<code>fit-content</code>&nbsp;do.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item {
  flex-basis:  | auto; <em>/* default auto */</em>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If set to&nbsp;<code>0</code>, the extra space around content isn’t factored in. If set to&nbsp;<code>auto</code>, the extra space is distributed based on its&nbsp;<code>flex-grow</code>&nbsp;value.&nbsp;<a href="http://www.w3.org/TR/css3-flexbox/images/rel-vs-abs-flex.svg">See this graphic.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="flex"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flex"></a>flex</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is the shorthand for&nbsp;<code>flex-grow,</code>&nbsp;<code>flex-shrink</code>&nbsp;and&nbsp;<code>flex-basis</code>&nbsp;combined. The second and third parameters (<code>flex-shrink</code>&nbsp;and&nbsp;<code>flex-basis</code>) are optional. The default is&nbsp;<code>0 1 auto</code>, but if you set it with a single number value, like&nbsp;<code>flex: 5;</code>, that changes the&nbsp;<code>flex-basis</code>&nbsp;to 0%, so it’s like setting&nbsp;<code>flex-grow: 5; flex-shrink: 1; flex-basis: 0%;</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item {
  flex: none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>It is recommended that you use this shorthand property</strong>&nbsp;rather than set the individual properties. The shorthand sets the other values intelligently.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background" id="align-self"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-align-self"></a>align-self</h2>
<!-- /wp:heading -->

<!-- wp:image {"width":"824px","height":"auto","align":"center"} -->
<figure class="wp-block-image aligncenter is-resized"><img src="https://css-tricks.com/wp-content/uploads/2018/10/align-self.svg" alt="One item with a align-self value is positioned along the bottom of a flex parent instead of the top where all the rest of the items are." style="width:824px;height:auto"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><br>This allows the default alignment (or the one specified by&nbsp;<code>align-items</code>) to be overridden for individual flex items.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Please see the&nbsp;<code>align-items</code>&nbsp;explanation to understand the available values.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that&nbsp;<code>float</code>,&nbsp;<code>clear</code>&nbsp;and&nbsp;<code>vertical-align</code>&nbsp;have no effect on a flex item.</p>
<!-- /wp:paragraph -->
