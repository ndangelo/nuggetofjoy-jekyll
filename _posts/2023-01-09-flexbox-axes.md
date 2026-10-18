---
title: "13. Flexbox: Axes"
date: "2023-01-09 18:19:52"
layout: post
permalink: "/flexbox-axes/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58456"
---

<!-- wp:paragraph -->
<p>Let’s see how the orientation of items within a flex container can be controlled using the&nbsp;<code>flex-direction</code>&nbsp;property.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-axes#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>You’ll learn about the 2 “axes” of a flex container.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You’ll learn how to change those axes to arrange your content in columns instead of rows.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The most confusing thing about flexbox is that it can work either horizontally or vertically, and the way some rules work changes a bit depending on which direction you are working with.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The default direction for a flex container is horizontal, or&nbsp;<code>row</code>,&nbsp;but you can change the direction to vertical, or&nbsp;<code>column</code>. The direction can be specified in CSS like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">.flex-container {
  flex-direction: column;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-axes#axes">Axes</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>No matter which direction you’re using, you need to think of your flex-containers as having 2 axes: the main axis and the cross axis. It is the direction of these axes that changes when the&nbsp;<code>flex-direction</code>&nbsp;is changed. In&nbsp;<em>most</em>&nbsp;circumstances,&nbsp;<code>flex-direction: row</code>&nbsp;puts the main axis horizontal (left-to-right), and&nbsp;<code>column</code>&nbsp;puts the main axis vertical (top-to-bottom).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In other words, in our very first example, we put <code>display: flex</code> on a div and it arranged its children horizontally. This is a demonstration of <code>flex-direction: row</code>, the default setting. The following example is very similar. If you uncomment the line that says <code>flex-direction: column</code>, those divs will stack vertically.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="BaZKPdw" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/BaZKPdw">
flex-direction example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>One thing to note is that in this example,&nbsp;<code>flex-direction: column</code>&nbsp;would not work as expected if we used the shorthand&nbsp;<code>flex: 1</code>. Try it out now (i.e. go change the flex value on the&nbsp;<code>flex: 1 1 auto;</code>&nbsp;line). Can you figure out why it does not work if&nbsp;<code>flex: 1</code>&nbsp;is used? The divs collapse, even though they&nbsp;<em>clearly</em>&nbsp;have a&nbsp;<code>height</code>&nbsp;defined there.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The reason for this is that the&nbsp;flex shorthand expands&nbsp;<code>flex-basis</code>&nbsp;to&nbsp;<code>0</code>, which means that all&nbsp;<code>flex-grow</code>ing and&nbsp;<code>flex-shrink</code>ing would begin their calculations from&nbsp;<code>0</code>.&nbsp;Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don’t actually need to have any height at all.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The example above fixed this by specifying&nbsp;<code>flex: 1 1 auto</code>, telling the flex items to default to their given&nbsp;<code>height</code>. We could also have fixed it by putting a height on the parent&nbsp;<code>.flex-container</code>, or by using&nbsp;<code>flex-grow: 1</code>&nbsp;instead of the shorthand.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Another detail to notice: when we changed the&nbsp;flex-direction to&nbsp;<code>column</code>,&nbsp;<code>flex-basis</code>&nbsp;refers to&nbsp;<code>height</code>&nbsp;instead of&nbsp;<code>width</code>.&nbsp;Given the context this may be obvious, but it’s something to be aware of.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We’ve strayed from the point slightly… We were talking about flex-direction and axes. To bring it back home, the default behavior is&nbsp;<code>flex-direction: row</code>&nbsp;which arranges things horizontally. The reason this often works well without changing other details in the CSS is because block-level elements default to the full width of their parent. Changing things to vertical using&nbsp;<code>flex-direction: column</code>&nbsp;adds complexity because block-level elements default to the height of their content, and in this case there&nbsp;<em>is</em>&nbsp;no content.</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>There are situations where the behavior of flex-direction could change if you are using a language that is written top-to-bottom or right-to-left, but you should save worrying about that until you are ready to start making a website in Arabic or Hebrew.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>For an interactive demo of how axes work with flexbox, check out this Scrim:https://scrimba.com/learn/flexbox/main-axis-and-cross-axis-flexbox-tutorial-cz94MT8?embed=odin,mini-header,no-big-play,no-next-up</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-axes#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-axes#flex-vertical">How do you make flex items arrange themselves vertically instead of horizontally?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-axes#column-flex-basis">In a&nbsp;<code>column</code>&nbsp;flex-container, what does&nbsp;<code>flex-basis</code>&nbsp;refer to?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-axes#row-flex-basis">In a&nbsp;<code>row</code>&nbsp;flex-container, what does&nbsp;<code>flex-basis</code>&nbsp;refer to?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-axes#flex-axes">Why do the previous two questions have different answers?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-axes#additional-resources">Additional Resources</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://flexbox.malven.co/" target="_blank" rel="noreferrer noopener">This flexbox visual cheatsheet</a>&nbsp;has some useful references to flex and its properties.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
