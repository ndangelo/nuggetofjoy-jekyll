---
title: "10. Positioning"
date: "2023-01-13 19:01:04"
layout: post
permalink: "/positioning/"
categories: ["dmet-155-introduction-to-web-design", "learn-to-code-now"]
tags: []
wordpress_id: "59658"
---

<!-- wp:paragraph -->
<p>When making more complex layouts, sometimes we&nbsp;<strong>might have to use styles that don’t fit into the usual floated layout pattern.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As designers, we want to be able to do more with our designs! We’re going to talk about three different ways to change our design.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some of this gets a bit complex and weird so don’t worry if you don’t understand it straight away.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Relative positioning</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sometimes we may want to move a tag based on where it currently is. Let’s say we want to adjust a&nbsp;&lt;header&gt;&nbsp;tag by moving it relative to its normal position, to be down 10 pixels and further right by 20 pixels.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can use some new CSS rules to achieve this. They are the position rule, the top rule and the left rule. We’re positioning the tag relative to where it would usually be, then moving it from the top by 10 pixels, then moving it from the left by 20 pixels:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

position: relative; top: 10px;

left: 20px;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>We can also move it in the opposite direction by using two other rules called “bottom” and “right”:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

position: relative; bottom: 10px; right: 20px;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Moving the tag will leave a “shadow” — basically a gap where the tag would have usually sat — so even if we move it a large distance, there will still be a gap where it was originally.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we don’t want a shadow, we can use the next type of positioning, called absolute positioning.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Absolute positioning</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Absolute positioning means that we are positioning the tag not based on its normal place but relative to two things: the first is based on whether it’s inside a relatively positioned tag. For example, if we have some HTML that looks like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;header&gt;

&lt;h1&gt;Hi there&lt;/h1&gt;

&lt;/header&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If we have any relative positioning on the&nbsp;&lt;header&gt;&nbsp;tag, any absolute positioning on the&nbsp;&lt;h1&gt;&nbsp;will be based on the internal coordinates of the</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;header&gt;&nbsp;tag:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

position: relative; top: 0;

left: 0;

}

h1 {

position: absolute; top: 20px;

right: 20px

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Even if we add no movement to the header here, our&nbsp;&lt;h1&gt;&nbsp;will be moved without a shadow of where it once was to the top right corner of the&nbsp;&lt;header&gt;&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The second rule of absolute positioning is the absolutely position tag isn’t inside any relative tag, it will be positioned to the whole page itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If our CSS was simply:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">h1 {

position: absolute; top: 20px;

right: 20px;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The&nbsp;&lt;h1&gt;&nbsp;would say bye-bye to the&nbsp;&lt;header&gt;&nbsp;tag and attach itself to the whole page to the top right corner, even if the header was nowhere near the top right corner of the page. Crazy, right?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So two rules for absolute positioning, if you want the “co-ordinates” of the tag (the left, right, top or bottom) based on another tag, put that tag as a relatively positioned tag. If you want the “co-ordinates” to be based</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>on the whole page, make sure that tag doesn’t have any parent tags which are relatively positioned. Phew. It’s a tough one.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One thing you might notice with absolute position is that the tag sticks to the page itself when you scroll. But what if you want the tag to be fixed to the browser rather than the page?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Fixed positioning (or how to make things sticky)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You may have seen a lot of the next CSS rule on the Internet. The idea of having tags that follow you down the page. Facebook and Twitter both have “sticky” headers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We talked a little about how to fix things to the browser back in CSS backgrounds, when we used “background-attachment: fixed” to fix the background to the browser itself rather than the tag. We can use the similar idea of “fixed” in the tag’s position too:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

position: fixed; top: 0;

left: 0;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will attach the tag to the page in the top left corner and keep it there, even if scrolling up and down the page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Fixed vs absolute positions on browser scroll</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>position:&nbsp;ﬁxed;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>position: absolute;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One thing you might noticed is that when you take the tag out of the usual context of the page, it might lose its width. That’s because it has no clue about what size it should be. If you want to fill up the whole width of the browser, you can add in:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

position: fixed; top: 0;

left: 0;

width: 100%;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will stretch the header across the whole of the page. We could also start to add heights, background colors and more to this header to fill it out.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Combining positions and floats</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One thing you might be tempted to do is start building your layouts using positions rather than floats, because it looks easier — it’s similar to design programs like Photoshop and Sketch where you set an “x” and “y” position and away you go. But resist the temptation. Floats are a more powerful tool, especially when it comes to responsive design. The more positioning you use, the more tangles you’ll end up in, when it comes to fixing your layout for mobile.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can however combine positions and floats in great ways. Let’s say we want a sticky header where our title is on the left and navigation is on the right. Our HTML would look something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;header&gt;

&lt;h1&gt;Boyce&lt;/h1&gt;

&lt;nav&gt;

&lt;a href="portfolio.html"&gt;Portfolio&lt;/a&gt;

&lt;a href="about.html"&gt;About&lt;/a&gt;

&lt;a href="contact.html"&gt;Contact&lt;/a&gt;

&lt;/nav&gt;

&lt;/header&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>So first we want to fix our header to the top of the page. Next we want to move our title to the left, then we want to move our navigation to the right. Remember, because we’re floating everything inside the header, we need to fix the layout with a hidden overflow:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

position: fixed; top: 0;

left: 0; overflow: hidden;

}

h1 {

float: left;

}

nav {

float: right;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>It might be very tempting to make the floats into absolute positions, but don’t do this as it makes it harder when we move to responsive later!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Overlapping positions</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sometimes you might have tags that overlap due to using position rules in lots of ways. The default order is based on whatever tag is further down in the HTML but sometimes you want to switch them out.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As we said earlier in the guide, going across the page is called the “x” direction and going down the page is called the “y” direction. There’s one more direction, the “z” direction, which is to do with how close a tag is to the user.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By default, every tag is at the base level, zero, and then sorted by the order of the HTML. We can change that by increasing the “z-index” of the tag. The higher the “z-index”, the “closer” to the user the tag will seem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To change the&nbsp;z-index, just increase or decrease the number:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">header {

z-index: 1;

}

nav {

z-index: 2;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This would make the nav be always above the header. Both would be always above any tag without a&nbsp;z-index&nbsp;as the default is&nbsp;0.</p>
<!-- /wp:paragraph -->
