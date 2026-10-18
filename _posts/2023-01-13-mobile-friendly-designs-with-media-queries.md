---
title: "8. Mobile-friendly designs with media queries"
date: "2023-01-13 18:57:37"
layout: post
permalink: "/mobile-friendly-designs-with-media-queries/"
categories: ["dmet-155-introduction-to-web-design", "learn-to-code-now", "projects"]
tags: []
wordpress_id: "59654"
---

<!-- wp:paragraph -->
<p>In one of my classes a student was talking to me about how the company she worked for had recently spent thousands of dollars converting its website into a mobile-friendly version.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>I was pretty surprised when I saw a simple desktop site turned into a basic mobile equivalent.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>“Thousands of dollars?”, I thought, “that can’t be right!”. After delving into the code, I found just 14 lines had been added. It worked out at roughly $500 per line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A few hours later, after being taught how to make sites mobile-friendly, the student came back to me with an angry thank-you. Happily she now understood how to make sites work on all different screens.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Less pleasingly she knew her company been ripped off by so-called professionals.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Mobile-friendly — or “responsive” — designs in the web are surprising- ly straightforward to add to your sites. You don’t need to make another version of the site, all you’re focusing on is the look and feel of the site and how it changes from one browser size to another.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As you’re changing the look and feel, all you need to do is add more code into your style sheets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What we’ll add to our CSS is a new concept called “media queries”. Essentially, we’ll be turning on or off particular CSS styles depending on the size of the browser itself.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Very early in this guide, we talked about the idea that we can put HTML tags inside other tags — Pimp my Ride style. We can do something similar in CSS. We can say “if the browser is smaller than 600px then do these styles ... if not, ignore”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s show an example where we have the whole site having a font size of 18px. On a smaller browser, the font size might look too big, so we want to reduce it to 14px if the browser is smaller than 600px wide:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 18px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>@media (max-width: 600px) { body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 14px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Notice how we have an @ (or ampersand) with the word “media” straight after it. This is telling CSS to do a browser check. In our rounded brackets, our check is to ask: “Is the browser 600px or less?”. If it is, then add the styles. We can put multiple styles within a media query too:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 18px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 32px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>@media (max-width: 600px) { body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 14px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>h1 {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 21px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also have multiple media queries in the same style sheet. Let’s say we want to have a mid point below 900px and above 600px where the font size should be 16px:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 18px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>@media (max-width: 900px) { body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 16px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>@media (max-width: 600px) { body {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>font-size: 14px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The order of the media queries matters, as the second one overwrites the first. If they were the other way around, the font size would 16px if the browser was less than 900px and less than 600px too.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Media queries for layouts</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Media queries are heavily used to turn multi-column layouts into single-column layouts in responsive design. Let’s take a two-column desktop layout in HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;div class="main"&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here is the main content</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/div&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;div class="side"&gt; Here is a sidebar</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/div&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;/section&gt;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In your desktop version of your CSS, you’d have something like:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>section {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>overflow: hidden; width: 920px;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>margin: 0 auto 0 auto;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.main { width: 600px; float: left;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.side {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>width: 300px; float: right;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Media queries with floated layout changes</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>960px or larger</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>959px or smaller</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ﬂ<strong>oat: left;&nbsp;</strong>ﬂ<strong>oat: right;&nbsp;</strong>ﬂ<strong>oat: none;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As we want to start breaking the layout at around 960px (920px with a bit of room either side), we can add media queries for browser widths less than 960px.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>How do we break that layout? Firstly, we want to get rid of the width on the&nbsp;&lt;section&gt;&nbsp;tag, otherwise it’s bigger than the width of the browser.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next, we want to stop the two&nbsp;&lt;div&gt;&nbsp;tags from wrapping anything and get rid of the widths so they span the whole width. To get rid of the floating, we can turn it off with “none”. To let the width revert back to normal, we can just say “auto”:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>@media (max-width: 960px) { section {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>width: auto;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.main { float: none; width: auto;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>div.side {</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>float: none; width: auto;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>186 Learn to Code Now</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Turning off floats and reverting the widths to automatic size is a very common technique in responsive design. In fact, these lines of code were similar to the thousands of dollars worth of code I mentioned at the start of the chapter.</p>
<!-- /wp:paragraph -->
