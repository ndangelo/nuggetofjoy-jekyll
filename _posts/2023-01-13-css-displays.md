---
title: "9. CSS Displays @Media"
date: "2023-01-13 18:58:08"
layout: post
permalink: "/css-displays/"
categories: ["dmet-155-introduction-to-web-design", "learn-to-code-now", "projects"]
tags: []
wordpress_id: "59656"
---

<!-- wp:paragraph -->
<p>Earlier in this guide, we talked about different tags having different types — some tags were “blocks” that push other tags down the page, others were “inline” that follow along the usual style of text.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some examples of “block” tags are&nbsp;&lt;header&gt;,&nbsp;&lt;h1&gt;,&nbsp;&lt;p&gt;&nbsp;and&nbsp;&lt;div&gt;. When we place them next to each other, they go down the page (ignoring any floats we might do).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Some examples of “inline” tags are&nbsp;&lt;a&gt;,&nbsp;&lt;img&gt;,&nbsp;&lt;b&gt;&nbsp;and&nbsp;&lt;span&gt;. When we place these inline tags next to each other, they go across the page and on to the next line if they can’t fit, just like words in a sentence would.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sometimes we may want to change the type of tag in CSS depending on its context. A good example of this is when we have links in a navigation. On a desktop layout, we may want the links next to each other, but on a mobile, it may make more sense to have them go down the page instead.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s take an example piece of HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;nav>

&lt;a href="about.html">About&lt;/a>

&lt;a href="blog.html">Blog&lt;/a>

&lt;a href="contact.html">Contact&lt;/a>

&lt;/nav></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>On a desktop layout, it would make sense for this to go across the page and we can let our users read from left to right.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However, on a mobile device, we might not have enough room to display them from left to right. We can switch how these links look from their default “inline” display to looking like a “block” tag. To do this we will use a CSS rule called&nbsp;display&nbsp;to change how the tag acts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First of all we’ll set a media query for mobile only at around 600px browser width, then select the links in the nav, and change how they act:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">@media (max-width: 600px) { nav a {

display: block;

}

}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>Making buttons with inline-block</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>CSS was invented in the mid 1990s by scientists and little did they think that it would become quite as used as it has. The downside of having scientists make tools used for design is they didn’t really think about how designers would use the tools in 20 years’ time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Perhaps the most annoying thing about inline tags like&nbsp;&lt;a&gt;&nbsp;and&nbsp;&lt;span&gt;&nbsp;is that they don’t listen to a few of the more important CSS rules, mainly width and height.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you try and give them a width and height, they’ll just ignore you. Ugh. What’s with that? The reason is inline tags were always meant to act like text, and technically, they should fit to the content inside them and not be sized.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Several years later, the new committee that updates CSS called the W3C (or the World Wide Web Consortium) decided that if they suddenly gave inline tags the power to control width and height, they may break a lot of older websites. So instead they came up with a half-way house: the “inline-block”. A rule that lets tags go across the page, just like inline tags, but can be given widths and heights.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So where would be good places to use this? For me, this would be for buttons.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s take an example of some HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;nav>

&lt;a href="about.html">About&lt;/a>

&lt;a href="login.html">Log in&lt;/a>

&lt;a href="signup.html">Sign up&lt;/a>

&lt;/nav></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Let’s say I want to highlight the sign up link. At the moment, all the links would look the same, so the first thing I’d want to do is add a class to the sign up link. We’ll call the class “button”, but you could call it anything you like (e.g. “signup”, “attention”, etc):</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;nav>

&lt;a href="about.html">About&lt;/a>

&lt;a href="login.html">Log in&lt;/a>

&lt;a href="signup.html" class="button">Sign up&lt;/a>

&lt;/nav></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Now in our CSS we can make this look more like a button. We can give it a width, some padding, make the text centered, rounded corners and more!</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">nav a {

text-decoration: none; color: black;

}

nav a.button {

display: inline-block; width: 100px; background-color: red; color: white;

text-align: center;

padding: 10px 20px 10px 20px; border-radius: 5px;

}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Just by adding in the <strong>“inline-block</strong>” we have a lot more control over how it looks.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Hiding tags completely</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Alongside the option to change the display type of tags between “inline”, “inline-block” and “block”, we also have the option of completely hiding the tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A first question may be, why not just delete the content from the HTML? Yes, you could if you’re not going to need it anymore, but what if you want to be selective? What if you want to see something on a desktop screen but not a mobile?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s say we want to remove any&nbsp;&lt;section&gt;&nbsp;tag with the class of “timeline” on a mobile screen. Roughly we want to say, at around 600px or less on the browser width, hide this completely.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We don’t want to make its opacity zero as the area will still be taken up by a see-through box. We want to pretend it wasn’t there at all, as if it wasn’t in the HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">@media (max-width: 1800px) { section.timeline {

display: none;

}

}

/*We could do the opposite too, which would be to hide on a desktop but show on the mobile browser:*/

section.timeline { display: none;

}

@media (max-width: 600px) { section.timeline {

display: block;

}

}</code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="RwBZzry" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/RwBZzry">
Untitled</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>This way we start with the default (totally hidden), then show it when we’re on a mobile version of the site.</p>
<!-- /wp:paragraph -->
