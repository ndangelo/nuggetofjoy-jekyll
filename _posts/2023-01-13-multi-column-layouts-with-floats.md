---
title: "7. multi-column layouts with floats: Wrapping elements using floats, Overflow,Transparency with opacity and rgba colors, Drop shadows"
date: "2023-01-13 18:56:29"
layout: post
permalink: "/multi-column-layouts-with-floats/"
categories: ["dmet-155-introduction-to-web-design", "learn-to-code-now", "projects"]
tags: []
wordpress_id: "59652"
---

<!-- wp:paragraph -->
<p>Wrapping elements&nbsp;<strong>using floats</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s imagine our HTML is the following...</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;p&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="president.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Today, the president was very happy...</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/p&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here we have a&nbsp;&lt;p&gt;&nbsp;tag which is a “block” tag so it fills across the page and any new tags after the&nbsp;&lt;p&gt;&nbsp;tag will go underneath. Inside our&nbsp;&lt;p&gt;&nbsp;tag, we have an image and some content. The content is just inline content as it’s regular old text. The&nbsp;&lt;img&gt;&nbsp;tag is also an inline tag, so by default the image sits as if it was part of text, its bottom sitting at the text’s baseline.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>How do we make the text content wrap around the image’s right hand side? We make the&nbsp;&lt;img&gt;&nbsp;tag float to the left:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>img {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What if we wanted the text to wrap on the left and the image to go to the right?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>img {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: right;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unfortunately, there’s no center floating at the moment, so you can’t wrap text on both sides of an image — we only get the choice of left or right.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Making layouts with floats</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can use the idea of moving tags to the left or the right to build up our content. Let’s take a header where we want to move our&nbsp;&lt;h1&gt;&nbsp;tag to the left corner and our&nbsp;&lt;nav&gt;&nbsp;tag to the right corner:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;header&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;h1&gt;Furneaux’s Flower Shop&lt;/h1&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;nav&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;a href="about.html"&gt;About&lt;/a&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;a href="blog.html"&gt;Blog&lt;/a&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;a href="contact.html"&gt;Contact&lt;/a&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/nav&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/header&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>First of all, in our style sheet, we can use floats to move the&nbsp;&lt;h1&gt;&nbsp;tag to the left:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This will make all the other content in the header wrap around the&nbsp;&lt;h1&gt;&nbsp;tag on the right hand side. We can then use floats to move the&nbsp;&lt;nav&gt;&nbsp;tag to the right hand side:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>nav {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: right;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Great! This will move the&nbsp;&lt;h1&gt;&nbsp;to the left and the&nbsp;&lt;nav&gt;&nbsp;to the right. However, you might notice — especially if you had a background on your&nbsp;&lt;header&gt;&nbsp;tag — that some of the layout could be messed up.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Fixing layouts with clearfix</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Whenever you’re floating any tags, it’s a good idea to remember what you’re actually doing — you’re taking the tag out of its usual position to make other content and tags wrap around it. As you’re doing this, the tag that surrounds the floated tag — we’ll call this the “parent” tag</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>— doesn’t realize that you’ve floated the tag. Cascading style sheets can</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>only go deeper into tags so any higher-level tags are unaware of what you’re doing inside them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When we float all of the content inside a tag (like in the&nbsp;&lt;header&gt;&nbsp;in the previous example), it doesn’t realize that there’s any content inside it as you’re floating every tag inside it. The tag gets confused and collapses down as if there’s no content inside it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You might see this happen when your background disappears or your floated content starts to escape the edges of your tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Why does this happen? Well, the truth is that floats were never designed to make layouts, but us coders found a “hack” — a way that just happened to work even if it wasn’t meant to fix the problem.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Remember CSS was made by scientists in the mid 1990s when web sites looked a lot simpler, and they didn’t think web pages would need any complex layouts. So when we use floats to make layouts, we’re “hacking” the system and have to deal with its limitations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To get around this, we use another fix called a “clearfix”. There are a lot of different fixes and no single agreed version. The simplest way is to add one rule to your outer tag:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: hidden;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>nav {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: right;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We’ll talk about what about overflow is in a later section, but for now, we’ll add it in and leave it unexplained!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Three column layouts</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To add more columns to your layout, for instance if you have a blog with two sidebars and one main area for blog posts, we can structure our HTML in this way:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Floating content without and with clearfix</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ﬂ<strong>oat: left;&nbsp;</strong>ﬂ<strong>oat: right;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>over<strong>ﬂ</strong>ow: hidden;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ﬂ<strong>oat: left;&nbsp;</strong>ﬂ<strong>oat: right;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;div class="sidebar"&gt; Post by Rik Lomas</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/div&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;div class="content"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here’s a really long blog post about...</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/div&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;div class="comments"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I love this post! It’s...</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/div&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here we have one outer&nbsp;&lt;section&gt;&nbsp;tag that acts as the “parent” to the three&nbsp;&lt;div&gt;&nbsp;divider tags. We’ve given each&nbsp;&lt;div&gt;&nbsp;tag a different class so we can style them up differently.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To style them up, I’m going to give the sidebar around 20 percent of the width, the main content 50 percent, then give the remainder (30 percent) to the comments.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Remember as we’re floating all the tags inside the&nbsp;&lt;section&gt;&nbsp;tag, we need to add our “clearfix”:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>section {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: hidden;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.sidebar { float: left; width: 20%;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.content { float: left; width: 50%;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.comments { float: right; width: 30%;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Notice that we’re floating two tags to the left and one to the right and all the numbers add up to 100 percent. The height of the section tag will be based on whatever the highest content is in the sidebar, content or comments&nbsp;&lt;div&gt;&nbsp;tags.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A grid layout with floats</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>over<strong>ﬂ</strong>ow: hidden;&nbsp;<strong>ﬂ</strong>oat: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Making a grid with floats</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s say we want to make a grid of 3 by 2 using floats. There are a few ways to do this. The first is if we have content that is equal heights — let’s say we have images that are all 300 by 300 pixels. We would set up the HTML like so:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_1.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_2.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_3.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_4.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_5.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_6.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can make the first image float left. That will then wrap the second image on the right hand side of the first image. If we float the second image to the left, the third image will wrap on the right hand side. If we float the third image, there’s no more room for the fourth image to fit into so it’ll go on to the next line down. In our CSS we can add:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>section {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: hidden; width: 900px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>img {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: left; width: 300px; height: 300px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sometimes we don’t know how tall the items in our grid might be. If we use the previous HTML and CSS, we might get our grid looking a little messed up. To fix our HTML and CSS to make a grid with unknown heights, we can add:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_1.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_2.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_3.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_4.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_5.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;img src="photo_6.jpg"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Then our CSS will be:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>section {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: hidden; width: 900px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>img {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: left; width: 300px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You may have noticed that the style sheet is pretty much the same as before. Nothing’s changed. All we’ve done is change the HTML which is the structure of the web page. Sometimes the fixes we need aren’t in CSS, they can be in just the HTML, or even both HTML and CSS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Clearing floats</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sometimes we might not want a particular tag to wrap around another floated tag, but go underneath. To add this is we can use the CSS rule “clear”. We can use the options to avoid (or “clear”) floated left tags, floated right tags or both.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To clear floated left tags only:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>clear: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To clear floated right tags only:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>clear: right;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To clear both left and right floated tags:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>clear: both;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Clearing tags in this way can be a really useful way of building up your web designs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The different kinds of overflow</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSS IS</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AWESOME</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>default</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSS IS</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AWESOM</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>hidden</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSS IS</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>AWESOM</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>auto +</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>scroll</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Overflow</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We talked earlier about a new rule called overflow that we didn’t explain. In this chapter we’ll talk a little more about what overflow actually is and what it does.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s say we have a&nbsp;&lt;div&gt;&nbsp;tag that’s 300 by 300 pixels. Most of the time we’d expect our content to fix inside the tag, but what if we have more content than can do that?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Think of a drinking glass. Most of the time, liquid would fit inside it comfortably, but if we have too much, what happens? It overflows.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Luckily in CSS, we can control what happens. By default, just like with a liquid, the content will overspill and escape the container, but we can change how that works.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we want to cut off any extra content so it’s clipped, we can give the</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;div&gt;&nbsp;tag an overflow of “hidden”:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: hidden;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we decide that within our tag, we want a little scroll bar so a user can see the rest of the clipped content, we can add:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: scroll;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>On some web browsers, this will give the&nbsp;&lt;div&gt;&nbsp;tag a permanent scroll bar, even if the content isn’t bigger than the tag. To make it automat- ically have a scroll bar if the content is bigger and no scroll bar if it’s smaller, we can add the overflow automatically:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: auto;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The overflow hack we used in the last chapter for fixing floats works because we’re forcing the parent to stretch around all of the content, floated or not, by using a hidden overflow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Transparency with opacity and rgba colors</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In some web designs we might want to make parts of our page slightly transparent. There are two ways to do this. The first is using a CSS rule called opacity. By default, every tag is full opacity (“1”). We can hide tags by making them have no opacity (“0”), or we can pick somewhere in between.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s say we want to make an&nbsp;&lt;h1&gt;&nbsp;tag 30 percent opaque (or mostly see-through), we can add:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>opacity: 0.3;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can even make it so we can have it fade back into full opacity on hover:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>opacity: 0.3;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>transition: opacity 0.5s;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1:hover {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>opacity: 1;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this example we’ve even added a transition so we can fade it over half a second.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;opacity&nbsp;CSS rule will make the whole tag transparent, including the background and the content inside it. However, sometimes we might just want the background to be see-through, or the text to be slightly transparent.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To do this we need to talk about&nbsp;rgba&nbsp;colors.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>rgba colors</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Usually in our colors we use hex values, as discussed previously. We start with a hash, then six numbers or letters.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>background-color: #ff0099;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Forgetting the hash tag, the first two letters denote red, the next two denote green and the last two denote blue, but there’s no way to add a transparency effect in here.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However we can use a different style of color called&nbsp;rgba, which stands for red, green, blue and alpha.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This works slightly differently to hex values. Instead of writing in computer counting, we can add human/Arabic numbers from 0 to 255 (or “ff” in computer speak) to determine each separate color. We can then add a value from 0 to 1 for how much opacity the color should have.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can convert the color above and make it half see-through:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>background-color: rgba(255, 0, 153, 0.5);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s not something I can easily convert just by looking at the hex value, I generally use an online tool, Photoshop or Sketch to work out what the hex value’s colors are.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Remember this will just change the background’s opacity, not the content. We can use a hover state to transition between two rgba colors in the same way:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>background-color: rgba(255, 0, 153, 0.5); transition: background-color 0.5s;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header:hover {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>background-color: rgba(255, 0, 153, 1);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Drop shadows</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For both text and tags, we can add drop shadows to apply some subtle (or not so subtle) effects to our designs. There are two types of drop shadows we can use, one for the text and one for the tag itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Text drop shadows</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The CSS rule for text shadows takes four values, the “x” direction, the “y” direction, the “blur”, then the color of the shadow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The “x” direction is across the page. If you want to move the shadow to the right of the tag, you can use a positive number of pixels (e.g. 5px). To keep the same, just use “0”. If you want to move the shadow to the left, you can use negative pixels (e.g. -5px). Same thing for the “y” direction, 5px would be further down the page, -5px would be back up the page, 0 would be no difference up or down.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The blur is also a pixel value referring to how far the drop shadow should be blurred over. If it’s&nbsp;0, there’s no blur to the shadow and it looks sharp. The bigger the blur value, the more area the shadow spreads over and the lighter it will be.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The last is a color value. This can be a hex or rgba value. In fact, rgba colors are great for drop shadows as they can give them a transparency that hex values can’t.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s say we want to give our&nbsp;&lt;h1&gt;&nbsp;tag a 50 percent transparent black text shadow that is slightly blurred, straight down and to the right. We would add:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>text-shadow: 0 5px 2px rgba(0, 0, 0, 0.5);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We’re not putting any left value to make it go straight down. Then we’re putting the value 5px downwards with a 2px blur, then giving it a rgba color.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Outer drop shadow</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The other drop shadow effect is the “box-shadow” — instead of just being on the text, it’s on the overall tag itself. It has pretty much the same values, “x”, “y”, blur and color, just this time it’s a different rule, the “box-shadow” rule:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>box-shadow: 0 5px 2px rgba(0, 0, 0, 0.5);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As before, we’re having a shadow that goes straight down by 5px with a 2px blur and a 50 percent transparent black color.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Glow effect</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can use&nbsp;box-shadow&nbsp;to give a tag a glow effect too. All we’d need to do is not move the shadow down or to the left, then give it a large blur. In this example, we’ll blur by 15px with a 40 percent transparent white color:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Inner shadows</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Most shadows go around the edge of the tag itself, but we can add one more value to make the box shadow go from the outer edge to the inner edge. All we do is add the word “inner” to the start of our box-shadow rule.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>header {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>box-shadow: inner 0 0 15px rgba(255, 255, 255, 0.4);</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->
