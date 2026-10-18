---
title: "12. Flexbox: Growing And Shrinking"
date: "2023-01-09 17:45:51"
layout: post
permalink: "/flexbox-growing-and-shrinking/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58385"
---

<!-- wp:heading {"level":1} -->
<h1>Growing And Shrinking</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.theodinproject.com/paths/foundations/courses/foundations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s look a little closer at what actually happened when you put&nbsp;<code>flex: 1</code>&nbsp;on those flex items in the last lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>You’ll learn the 3 properties that are defined by the&nbsp;<code>flex</code>&nbsp;shorthand, and how to use them individually.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#the-flex-shorthand">The Flex Shorthand</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>flex</code>&nbsp;declaration is actually a shorthand for 3 properties that you can set on a flex item. These properties affect how flex items size themselves within their container. You’ve seen some shorthand properties before, but we haven’t officially defined them yet.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>Shorthand properties are CSS properties that let you set the values of multiple other CSS properties simultaneously. Using a shorthand property, you can write more concise (and often more readable) stylesheets, saving time and energy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Source:&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties" target="_blank" rel="noreferrer noopener">Shorthand properties on MDN</a></p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>In this case,&nbsp;<code>flex</code>&nbsp;is actually a shorthand for&nbsp;<code>flex-grow</code>,&nbsp;<code>flex-shrink</code>&nbsp;and&nbsp;<code>flex-basis</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/0cc6b26bb0c4b94524369d327c97a8fb11e83b6b/foundations/html_css/flexbox/imgs/10.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/10-7-1.png" alt="flex shorthand"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>In the above screenshot,&nbsp;<code>flex: 1</code>&nbsp;equates to:&nbsp;<code>flex-grow: 1</code>,&nbsp;<code>flex-shrink: 1</code>,&nbsp;<code>flex-basis: 0</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Very often you see the flex shorthand defined with only&nbsp;<em>one</em>&nbsp;value. In that case, that value is applied to&nbsp;<code>flex-grow</code>. So when we put&nbsp;<code>flex: 1</code>&nbsp;on our divs, we were actually specifying a shorthand of&nbsp;<code>flex: 1 1 0</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For an interactive explanation and demo of the flex shorthand, check out this Scrim:https://scrimba.com/learn/flexbox/the-flex-property-flexbox-tutorial-cGNKJTv?embed=odin,mini-header,no-big-play,no-next-up</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="flex-grow">Flex-Grow</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>flex-grow</code>&nbsp;expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied&nbsp;<code>flex: 1</code>&nbsp;to every div inside our container, we were telling every div to grow the same amount. The result of this is that every div ends up the exact same size. If we instead add&nbsp;<code>flex: 2</code>&nbsp;to just one of the divs, then that div would grow to 2x the size of the others.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the following example the <code>flex</code> shorthand has values for <code>flex-shrink</code> and <code>flex-basis</code> specified with their default values.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="YzQqvgK" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/YzQqvgK">
flex-grow example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":4} -->
<h4 id="flex-shrink">Flex-Shrink</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>flex-shrink</code>&nbsp;is similar to&nbsp;<code>flex-grow</code>, but sets the “shrink factor” of a flex item.&nbsp;<code>flex-shrink</code>&nbsp;only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs from above had a width declaration like:&nbsp;<code>width: 100px</code>, and&nbsp;<code>.flex-container</code>&nbsp;was smaller than&nbsp;<code>300px</code>, our divs would have to shrink to fit.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The default shrink factor is&nbsp;<code>flex-shrink: 1</code>, which means all items will shrink evenly. If you do&nbsp;<em>not</em>&nbsp;want an item to shrink then you can specify&nbsp;<code>flex-shrink: 0;</code>. You can also specify higher numbers to make certain items shrink at a higher rate than normal.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here’s an example. Note that we’ve also changed the <code>flex-basis</code> for reasons that will be explained shortly. If you shrink your browser window you’ll notice that <code>.two</code> never gets smaller than the given width of 250px, even though the <code>flex-grow</code> rule would otherwise specify that each element should be equally sized.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="JjJXZVz" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/JjJXZVz">
flex-shrink example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>An important implication to notice here is that when you specify&nbsp;<code>flex-grow</code>&nbsp;or&nbsp;<code>flex-shrink</code>, flex items do not necessarily respect your given values for&nbsp;<code>width</code>. In the above example, all 3 divs are given a width of 250px, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit. This is not a bug, but it could be confusing behavior if you aren’t expecting it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="flex-basis">Flex-Basis</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>flex-basis</code>&nbsp;simply sets the initial size of a flex item, so any sort of&nbsp;<code>flex-grow</code>ing or&nbsp;<code>flex-shrink</code>ing starts from that baseline size. The shorthand value defaults to&nbsp;<code>flex-basis: 0%</code>. The reason we had to change it to&nbsp;<code>auto</code>&nbsp;in the&nbsp;<code>flex-shrink</code>&nbsp;example is that with the basis set to&nbsp;<code>0</code>, those items would ignore the item’s width, and everything would shrink evenly. Using&nbsp;<code>auto</code>&nbsp;as a flex-basis tells the item to check for a width declaration (<code>width: 250px</code>).</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:heading {"level":4} -->
<h4 id="important-note-about-flex-basis">Important Note About Flex-Basis:</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There is a difference between the default value of&nbsp;<code>flex-basis</code>&nbsp;and the way the&nbsp;<code>flex</code>&nbsp;shorthand defines it if no&nbsp;<code>flex-basis</code>&nbsp;is given. The actual default value for&nbsp;<code>flex-basis</code>&nbsp;is&nbsp;<code>auto</code>, but when you specify&nbsp;<code>flex: 1</code>&nbsp;on an element, it interprets that as&nbsp;<code>flex: 1 1 0</code>. If you want to&nbsp;<em>only</em>&nbsp;adjust an item’s&nbsp;<code>flex-grow</code>&nbsp;you can simply do so directly, without the shorthand. Or you can be more verbose and use the full 3 value shorthand&nbsp;<code>flex: 1 1 auto</code>, which is also equivalent to using&nbsp;<code>flex: auto</code>.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:heading {"level":4} -->
<h4 id="what-is-flex-auto">What is flex: auto?</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you noticed, we mentioned a new flex shorthand&nbsp;<code>flex: auto</code>&nbsp;in the previous note. However we didn’t fully introduce it.&nbsp;<code>flex: auto</code>&nbsp;is one of the shorthands of flex. When&nbsp;<code>auto</code>&nbsp;is defined as a flex keyword it is equivalent to the values of&nbsp;<code>flex-grow: 1</code>,&nbsp;<code>flex-shrink: 1</code>&nbsp;and&nbsp;<code>flex-basis: auto</code>&nbsp;or to&nbsp;<code>flex: 1 1 auto</code>&nbsp;using the flex shorthand. Note that&nbsp;<code>flex: auto</code>&nbsp;is not the default value when using the flex shorthand despite the name being “auto” which may be slightly confusing at first. You will encounter and learn more about&nbsp;<code>flex: auto</code>&nbsp;and its potential use-cases when reading through the assignment section.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:heading {"level":4} -->
<h4 id="in-practice">In Practice…</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In practice you will likely not be using complex values for&nbsp;<code>flex-grow</code>,&nbsp;<code>flex-shrink</code>&nbsp;or&nbsp;<code>flex-basis</code>. Generally, you’re most likely to use declarations like&nbsp;<code>flex: 1;</code>&nbsp;to make divs grow evenly and&nbsp;<code>flex-shrink: 0</code>&nbsp;to keep certain divs from shrinking.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It&nbsp;<em>is</em>&nbsp;possible to get fancy, and set up layouts where some columns relate to each other in a specific ratio, so it’s useful to know that you can use other values, but those are relatively rare.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Read&nbsp;<a href="https://www.w3.org/TR/css-flexbox-1/#flex-common" target="_blank" rel="noreferrer noopener">W3C’s flex section</a>&nbsp;to understand the basic values of common flex shorthand values</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank" rel="noreferrer noopener">MDN Doc</a>&nbsp;summarizes the entire flex shorthand values as well as introduces some new syntax that hasn’t been covered in the previous article.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This&nbsp;<a href="https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/" target="_blank" rel="noreferrer noopener">CSS Tricks</a>&nbsp;article explains the individual flex-grow, flex-shrink and flex-basis properties in detail</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Watch this interactive Scrim for an alternative explanation and demo of using flex-grow, flex-shrink and flex-basis in a real world scenario:</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a href="https://scrimba.com/learn/flexbox/flex-grow-shrink-basis-flexbox-tutorial-ck6L7fv?embed=odin,mini-header,no-big-play,no-next-up">https://scrimba.com/learn/flexbox/flex-grow-shrink-basis-flexbox-tutorial-ck6L7fv?embed=odin,mini-header,no-big-play,no-next-up</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#the-flex-shorthand">What are the 3 values defined in the shorthand&nbsp;<code>flex</code>&nbsp;property (e.g.&nbsp;<code>flex: 1 1 auto</code>)?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#what-is-flex-auto">What are the 3 defined values for the flex shorthand&nbsp;<code>flex:auto</code>?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#additional-resources">Additional Resources</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.youtube.com/watch?v=u044iM9xsWU&amp;t=1s&amp;pp=ugMICgJhchABGAE%3D" target="_blank" rel="noreferrer noopener">Check out this video</a>&nbsp;explaining how flexbox works and why.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
