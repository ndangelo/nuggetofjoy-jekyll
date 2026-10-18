---
title: "11. Introduction To Flexbox"
date: "2023-01-09 17:47:30"
layout: post
permalink: "/introduction-to-flexbox/"
categories: ["dmet-155-introduction-to-web-design", "odin-project", "projects"]
tags: []
wordpress_id: "58398"
---

<!-- wp:paragraph -->
<p><a href="https://www.theodinproject.com/paths/foundations/courses/foundations"></a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox#introduction">Introduction</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As you’ll learn, there are&nbsp;<em>many</em>&nbsp;ways to move elements around on a web page. New methods have been developed over the years and older things have fallen out of style. Flexbox is a&nbsp;<a href="https://medium.com/@BennyOgidan/history-of-css-grid-and-css-flexbox-658ae6cfe6d2" target="_blank" rel="noreferrer noopener">relatively new</a>&nbsp;way of manipulating elements in CSS, and its debut was&nbsp;<em>revolutionary</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Many resources put it near the end of their curriculum because it is somewhat new as a technology. But at this point, it has become the default way of positioning elements for many developers. Flexbox will be one of the most used tools in your toolbox, so why not learn it first?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>You will learn how to position elements using flexbox.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You will learn about flex containers and flex items.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You will learn how to create useful components and layouts that go beyond just stacking and centering items.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox#before-we-get-started">Before We Get Started</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flexbox layouts can get a little complicated. In a previous lesson, you learned how to inspect and debug things using your browser’s developer tools. Those tools will be&nbsp;<em>crucial</em>&nbsp;for you in the following lessons. If something isn’t behaving the way you expect, inspecting it in the developer tools should be your first step&nbsp;<em>every time</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox#lets-flex">Let’s Flex!</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on some simple rules that you can define. To get started, let’s look at a simple demonstration. For all the exercises here, take your time to inspect the code and really understand what’s going on. In fact, playing with the code yourself will make it much easier to retain this information.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="QWgNxrp" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/QWgNxrp">
first flex example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>We’ll get into exactly what’s going on here soon enough. But for now, let’s uncomment the two flex related CSS declarations in the above Codepen by removing the&nbsp;<code>/*</code>&nbsp;and&nbsp;<code>*/</code>&nbsp;tags surrounding them, then check out the result.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Comments prevent the browser from interpreting lines as code, and are wrapped between specific tags. CSS uses&nbsp;<code>/*</code>as an opening comment tag and&nbsp;<code>*/</code>&nbsp;as a closing comment tag, while HTML and JavaScript have their own syntax. Commented out lines of code can be ‘re-enabled’ simply by removing the comment tags surrounding the code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>All 3 divs should now be arranged horizontally. If you resize the results frame with the “1x”, “.5x” and “.25x” buttons you’ll also see that the divs will ‘flex’. They will fill the available area and will each have equal width.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you add another div to the HTML, inside of&nbsp;<code>.flex-container</code>, it will show up alongside the others, and everything will flex to fit within the available area.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If it’s hard to see what’s going on in the small embedded CodePen, feel free to click the “Edit on CodePen” or “Fork on CodePen” button. This will bring the example into a full-sized environment. Some of the later examples might especially benefit from doing this.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a more interactive explanation and example, try the following Scrim (let us know what you think of these):</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>https://scrimba.com/learn/flexbox/your-first-flexbox-layout-flexbox-tutorial-canLGCw?embed=odin,mini-header,no-big-play,no-next-up</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="flex-containers-and-flex-items">Flex Containers and Flex Items</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As you’ve seen, flexbox is not just a single CSS property but a whole toolbox of properties that you can use to put things where you need them. Some of these properties belong on the&nbsp;<em>flex container</em>, while some go on the&nbsp;<em>flex items</em>. This is a simple yet important concept.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A flex container is any element that has&nbsp;<code>display: flex</code>&nbsp;on it. A flex item is any element that lives directly inside of a flex container.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/03.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/03-4-4.png" alt="container-vs-child"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Somewhat confusingly, any element can be both a flex container&nbsp;<em>and</em>&nbsp;a flex item. Said another way, you can also put&nbsp;<code>display: flex</code>&nbsp;on a flex item and then use flexbox to arrange&nbsp;<em>its</em>&nbsp;children.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/04.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/04-3-3.png" alt="nesting flex containers"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Creating and nesting multiple flex containers and items is the primary way we will be building up complex layouts. The following image was achieved using&nbsp;<em>only</em>&nbsp;flexbox to arrange, size, and place the various elements. Flexbox is a&nbsp;<em>very</em>&nbsp;powerful tool.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","linkDestination":"custom"} -->
<figure class="wp-block-image aligncenter"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/05.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/05-1-1.png" alt="complex example"/></a></figure>
<!-- /wp:image -->

<!-- wp:tadv/classic-paragraph /-->

<!-- wp:embed {"url":"https://nuggetofjoy.com/css-flexbox/","type":"wp-embed","providerNameSlug":"communication-art-design-amp-instruction"} -->
<figure class="wp-block-embed is-type-wp-embed is-provider-communication-art-design-amp-instruction wp-block-embed-communication-art-design-amp-instruction"><div class="wp-block-embed__wrapper">
https://nuggetofjoy.com/css-flexbox/
</div></figure>
<!-- /wp:embed -->
