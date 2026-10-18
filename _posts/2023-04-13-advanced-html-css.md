---
title: "Advanced HTML/CSS"
date: "2023-04-13 07:25:57"
layout: post
permalink: "/advanced-html-css/"
categories: ["projects"]
tags: []
wordpress_id: "62736"
---

<!-- wp:tadv/classic-paragraph -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">Beginning of Advanced HTML</h1>
<!-- /wp:tadv/classic-paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Text: Time, Mark, and "Presentational"</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML5 adds and amends a handful of tags relating to&nbsp;<strong>text</strong>. Many of the minor amendments, such as differing attributes in existing tags, have already been covered, but this page looks at two new tags —&nbsp;<a href="https://www.htmldog.com/references/html/tags/time/"><code>time</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/mark/"><code>mark</code></a>&nbsp;— as well as the re-definition of presentational tags.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Time</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/time/"><code>time</code></a> is used to make dates and times super-semantically rich.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The text sandwiched in the middle of the opening and closing tag can be any format of date of time - the whole precise lot, or just one part, such as a day. It is made more helpful, however, by the&nbsp;<code>datetime</code>&nbsp;attribute, the value of which should be a machine-readable date and/or time.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;Written by Doctor Who on <strong>&lt;time datetime="2052-11-21"&gt;Thursday 21st November 2052&lt;/time&gt;</strong>.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Valid&nbsp;<code>datetime</code>&nbsp;values can take the format of a year-month-day date (as above), of as a “fuzzy” date, such as “2052-11”, of a time, such as “09:30” (always using a 24-hour clock) or a combination, such as “2052-11-21 09:30”. This can also accommodate time zones and durations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the textual content of the&nbsp;<a href="https://www.htmldog.com/references/html/tags/time/"><code>time</code></a>&nbsp;element is already machine readable, you don’t need the&nbsp;<code>datetime</code>&nbsp;attribute but it is required if it isn’t.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Mark</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Text can be highlighted, as if with a marker pen, using&nbsp;<a href="https://www.htmldog.com/references/html/tags/mark/"><code>mark</code></a>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;blockquote&gt;
    &lt;p&gt;He wants to play with his <strong>&lt;mark&gt;Legos&lt;/mark&gt;</strong>&lt;/p&gt;
&lt;/blockquote&gt;

&lt;p&gt;The person being quoted is clearly American because, for some odd reason, they pluralise "Lego".&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Yes, this is a form of emphasis, literally speaking, but it won’t always be considered emphasis in the original meaning (for example, the person being quoted above isn’t emphasizing “Legos”, the commenter is), hence its inclusion.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Conditional Comments</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Older versions of Internet Explorer are frequently either inept or naughty. Or both. But they are still popular so we don’t want to ignore them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Conditional comments</strong>, which are nothing more than simple HTML comments that IE (up to version 9) happens to take a peep at, are used to throw a chunk of HTML at these browsers and only these browsers. Other well behaved, top-of-the-class browsers will simply see them as unremarkable comments and move along.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This web site currently uses conditional comments to make a handful of amendments for IE 8 and below, including a small extra stylesheet, and the HTML5 Shiv required for these browsers to take notice of some HTML5 elements. Go ahead - view the source.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They have become a commonly used method of latching extra CSS to a document to plaster over holes in these browsers’ display capabilities. So, for example, you might add something like this inside your&nbsp;<a href="https://www.htmldog.com/references/html/tags/head/"><code>head</code></a>&nbsp;element:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;link href="everything.css" rel="stylesheet"&gt;
<strong>&lt;!--[if IE]&gt;&lt;link href="stupidie.css" rel="stylesheet"&gt;&lt;![endif]--&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Everything between&nbsp;<code>&lt;!--[if IE]&gt;</code>&nbsp;and&nbsp;<code>&lt;![endif]--&gt;</code>&nbsp;will be picked up by Internet Explorer. So this will bolt on a CSS file as normal, and then, only if the browser is Internet Explorer (in practice, this will be Internet Explorer version 9 and below), it will also apply an extra CSS file patch.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also target specific versions of Internet Explorer:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>&lt;!--[if IE 6&gt;</code>…</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&lt;!--[if IE 7&gt;</code>…</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&lt;!--[if IE 8&gt;</code>…</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>&lt;!--[if IE 9&gt;</code>…</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You can also target all versions that are greater or less than a certain number:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>eg.&nbsp;<code>&lt;!--[if IE gt 6]&gt;</code>… for IE versions&nbsp;<strong>greater than</strong>&nbsp;6</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>eg.&nbsp;<code>&lt;!--[if IE gte 8]&gt;</code>… for IE versions&nbsp;<strong>greater than or equal to</strong>&nbsp;than 8</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>eg.&nbsp;<code>&lt;!--[if IE lt 7]&gt;</code>… for IE versions&nbsp;<strong>less than</strong>&nbsp;7</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>eg.&nbsp;<code>&lt;!--[if IE lte 7]&gt;</code>… for IE versions&nbsp;<strong>less than or equal to</strong>&nbsp;7</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>There are actually more options than this which are largely totally unnecessary. Take a look at&nbsp;<a href="http://msdn.microsoft.com/en-gb/library/ms537512(v=vs.85).aspx">Microsoft’s own take on it</a>&nbsp;if you really feel compelled to find out more.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Conditional comments really are horrible. Necessary, often, at the moment, but horrible. Like all hacks, it is best to avoid them wherever possible. They’re not really there for whacking completely different stylesheets in different browsers, for example. It’s more for small fallbacks so that you can use the scrumptious likes of CSS 3 without compromise. And don’t assume you have to accommodate every stone-age version of IE, either - try and figure out what is sensible for you to support. Are your web site visitors likely to be using IE6? Probably not.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Tables: Columns, Headers, and Footers</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So you think you know how to make a table. Sure, you know the&nbsp;<a href="https://www.htmldog.com/references/html/tags/table/"><code>table</code></a>,&nbsp;<a href="https://www.htmldog.com/references/html/tags/tr/"><code>tr</code></a>,&nbsp;<a href="https://www.htmldog.com/references/html/tags/td/"><code>td</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/th/"><code>th</code></a>&nbsp;tags, you’ve even got the&nbsp;<code>rowspan</code>&nbsp;and&nbsp;<code>colspan</code>&nbsp;attributes in your pocket. You can make a really cute little plywood coffee table, but don’t you want to know how to make one of those polished solid wood, glass top dining tables that can take the weight of an oversized elephant?</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">The Columns Strike Back</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Table rows tend to make table columns look rather stupid. They do all the work, as the table is built row by row, leaving the columns feeling quite rejected.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Luckily for those eager columns though, the&nbsp;<a href="https://www.htmldog.com/references/html/tags/colgroup/"><code>colgroup</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/col/"><code>col</code></a>&nbsp;tags have come to their rescue.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These tags allow you to define the table columns and style them as desired, which is particularly useful if you want certain columns aligned or colored differently, as, without this, you would need to target individual cells.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;table&gt;
    <strong>&lt;colgroup&gt;</strong>
        <strong>&lt;col&gt;</strong>
        <strong>&lt;col class="alternative"&gt;</strong>
        <strong>&lt;col&gt;</strong>
    <strong>&lt;/colgroup&gt;</strong>
    &lt;tr&gt;
        &lt;td&gt;This&lt;/td&gt;
        &lt;td&gt;That&lt;/td&gt;
        &lt;td&gt;The other&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Ladybird&lt;/td&gt;
        &lt;td&gt;Locust&lt;/td&gt;
        &lt;td&gt;Lunch&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this example the styles of the CSS class “alternative” will be applied to the second column, or the second cell in every row.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also use the&nbsp;<code>span</code>&nbsp;attribute in a similar way to&nbsp;<code>rowspan</code>&nbsp;and&nbsp;<code>colspan</code>. Using it with the&nbsp;<a href="https://www.htmldog.com/references/html/tags/colgroup/"><code>colgroup</code></a>&nbsp;tag will define the number of rows that the column group will belong to, for example&nbsp;<code>&lt;colgroup span="2"&gt;&lt;/colgroup&gt;</code>&nbsp;would group the first two columns. Using&nbsp;<code>span</code>&nbsp;in the&nbsp;<a href="https://www.htmldog.com/references/html/tags/col/"><code>col</code></a>&nbsp;tag is usually more useful, and could, for example, be applied to the above example like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;table&gt;
    &lt;colgroup&gt;
        &lt;col&gt;
        &lt;col <strong>span="2"</strong> class="alternative"&gt;
    &lt;/colgroup&gt;
&lt;!-- and so on --&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This would apply “alternative” to the last two columns.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When&nbsp;<code>span</code>&nbsp;is used in&nbsp;<a href="https://www.htmldog.com/references/html/tags/colgroup/"><code>colgroup</code></a>, you shouldn’t then use&nbsp;<a href="https://www.htmldog.com/references/html/tags/col/"><code>col</code></a>&nbsp;tags.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Caption interlude</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A brief and easy accessibility consideration is to apply a&nbsp;<strong>caption</strong>&nbsp;to the table. The&nbsp;<a href="https://www.htmldog.com/references/html/tags/caption/"><code>caption</code></a>&nbsp;element defines the caption and should be used straight after the opening&nbsp;<a href="https://www.htmldog.com/references/html/tags/table/"><code>table</code></a>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;table&gt;
    <strong>&lt;caption&gt;Locust mating habits&lt;/caption&gt;</strong>
&lt;!-- etc. --&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A caption will appear above the table by default, although using the CSS&nbsp;<code>caption-side: bottom</code>&nbsp;will, well, do what you would expect.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The mightier&nbsp;<a href="https://www.htmldog.com/references/html/tags/figcaption/"><code>figcaption</code></a>&nbsp;would be preferable to&nbsp;<a href="https://www.htmldog.com/references/html/tags/caption/"><code>caption</code></a>&nbsp;if you are marking up a table as the sole content of a&nbsp;<a href="https://www.htmldog.com/references/html/tags/figure/"><code>figure</code></a>&nbsp;element. See the&nbsp;<a href="https://www.htmldog.com/guides/html/intermediate/sectioning/">Sectioning</a>&nbsp;page for more.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Headers and Footers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/thead/"><code>thead</code></a>,&nbsp;<a href="https://www.htmldog.com/references/html/tags/tfoot/"><code>tfoot</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/tbody/"><code>tbody</code></a>&nbsp;allow you to separate the table into&nbsp;<strong>header</strong>,&nbsp;<strong>footer</strong>&nbsp;and&nbsp;<strong>body</strong>, which can be handy when dealing with larger tables.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Whereas&nbsp;<a href="https://www.htmldog.com/references/html/tags/thead/"><code>thead</code></a>&nbsp;needs to come first,&nbsp;<a href="https://www.htmldog.com/references/html/tags/tfoot/"><code>tfoot</code></a>&nbsp;can, in fact come before a&nbsp;<a href="https://www.htmldog.com/references/html/tags/tbody/"><code>tbody</code></a>&nbsp;(and you can have more than one&nbsp;<a href="https://www.htmldog.com/references/html/tags/tbody/"><code>tbody</code></a>, if it takes your fancy) although browsers will render the&nbsp;<a href="https://www.htmldog.com/references/html/tags/tfoot/"><code>tfoot</code></a>&nbsp;element at the bottom of the table.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;table&gt;
    <strong>&lt;thead&gt;</strong>
        &lt;tr&gt;
            &lt;td&gt;Header 1&lt;/td&gt;
            &lt;td&gt;Header 2&lt;/td&gt;
            &lt;td&gt;Header 3&lt;/td&gt;
        &lt;/tr&gt;
    <strong>&lt;/thead&gt;</strong>
    <strong>&lt;tfoot&gt;</strong>
        &lt;tr&gt;
            &lt;td&gt;Footer 1&lt;/td&gt;
            &lt;td&gt;Footer 2&lt;/td&gt;
            &lt;td&gt;Footer 3&lt;/td&gt;
        &lt;/tr&gt;
    <strong>&lt;/tfoot&gt;</strong>
    <strong>&lt;tbody&gt;</strong>
        &lt;tr&gt;
            &lt;td&gt;Cell 1&lt;/td&gt;
            &lt;td&gt;Cell 2&lt;/td&gt;
            &lt;td&gt;Cell 3&lt;/td&gt;
        &lt;/tr&gt;
        &lt;!-- etc. --&gt;
    <strong>&lt;/tbody&gt;</strong>
&lt;/table&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Accessible Links</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are a number of ways&nbsp;<strong>links</strong>&nbsp;— the absolutely fundamentally most important interactive element of web sites — can be made more&nbsp;<strong>accessible</strong>&nbsp;to those people with disabilities.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Tabbing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Users who do not or cannot use pointing devices can&nbsp;<strong>tab</strong>&nbsp;through links and, as such, links should be in a logical tabbing order. The&nbsp;<code>tabindex</code>&nbsp;attribute allows you to define this order although if the HTML is linear, as it should be, a logical tabbing order should automatically fall into place.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;ul&gt;
    &lt;li&gt;&lt;a href="here.html" <strong>tabindex="1"</strong>&gt;Here&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="there.html" <strong>tabindex="3"</strong>&gt;There&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="limbo.html" <strong>tabindex="2"</strong>&gt;Limbo&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this example (which is used purely as a demonstration - it would be quite dumb, practically speaking), tabbing would jump from “Here” to “Limbo” to “There”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The good bit of link-accessibility advice is to&nbsp;<strong>write good link text</strong>. Have the words the&nbsp;<a href="https://www.htmldog.com/references/html/tags/a/"><code>a</code></a>&nbsp;tags wrap around explain where the link will take the user. If someone is using a screen reader, having the links read out to them as they tab between them, the user will then know what they’re letting themselves in for if they select a link. “Click here” or random words aren’t especially helpful…</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Link titles</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you have a link that isn’t self-descriptive or the link destination could benefit from being explained in more detail, you can add information to a link using the&nbsp;<code>title</code>&nbsp;attribute.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;I'm really bad at writing link text. &lt;a href="inept.html" <strong>title="Why I'm rubbish at writing link text: An explanation and an apology."</strong>&gt;Click here&lt;/a&gt; to find out more.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Another tip:&nbsp;<strong>Don’t have links open something in a new window or tab.</strong>&nbsp;It’s precious to think your page is important enough to stay alive while a user visits elsewhere anyway. We all know how to use the back button. We know how to close windows and tabs, too, but if you can’t see that that’s what has happened…</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you insist on doing this, at least mention it in a link title.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Accesskeys</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Access keys</strong>&nbsp;allow easier navigation by assigning a&nbsp;<strong>keyboard shortcut</strong>&nbsp;to a link (which will usually gain focus when the user presses “Alt” or “Ctrl” + the access key).</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
&lt;a href="somepage.html" <strong>accesskey="s"</strong>&gt;Some page&lt;/a&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For users who do not use pointing devices, this can be a quick way to navigate. The trouble is that there the user may not know what they are unless they are explicitly stated although some assistive software will tell the user what these are.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Skipping HTML</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To aid tabbing, you can supply links that allow users to jump over chunks of your web page. You might want to allow someone to jump over a plethora of navigation links, for example, so they can just read a page’s main content rather than cycle through all of the links:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;header&gt;
    &lt;h1&gt;The Heading&lt;/h1&gt;
    &lt;a href="#content"&gt;Skip to content&lt;/a&gt;
&lt;/header&gt; 

&lt;nav&gt;
    &lt;!--loads of navigation stuff --&gt;
&lt;/nav&gt;

&lt;section id="content"&gt;
    &lt;!--lovely content --&gt;
&lt;/section&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You probably won’t want this link to be displayed visually - it’s a peculiar link to see for abled-bodied users and screen reader users won’t need to see it (it will be read out). So you can use CSS to render it invisible but it could also be beneficial to those with motor disabilities so you might also want to consider making it visible when it has focus from being tabbed to using the&nbsp;<code>:focus</code>&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/pseudoclasses/">CSS pseudo class</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Accessible Forms</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Forms aren’t the easiest of things to use for people with disabilities. Navigating around a page with written content is one thing, hopping between form fields and inputting information is another. Because of this, it is a good idea to add a number of elements to the form.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Labels</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Each form field should have its own explicit&nbsp;<strong>label</strong>. The&nbsp;<a href="https://www.htmldog.com/references/html/tags/label/"><code>label</code></a>&nbsp;tag sorts this out, with a&nbsp;<code>for</code>&nbsp;attribute that associates it to a&nbsp;<a href="https://www.htmldog.com/references/html/tags/form/"><code>form</code></a>&nbsp;element:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;form&gt;
    <strong>&lt;label for="yourName"&gt;Your Name&lt;/label&gt;</strong>
    &lt;input name="yourName" id="yourName"&gt;
    &lt;!-- etc. --&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Labels have the added bonus of visual browsers rendering the labels themselves&nbsp;<strong>clickable</strong>, putting the focus on the associated form field.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Both&nbsp;<code>name</code>&nbsp;and&nbsp;<code>id</code>&nbsp;attributs are typically required; the&nbsp;<code>name</code>&nbsp;for the form to handle that field and the&nbsp;<code>id</code>&nbsp;for the&nbsp;<a href="https://www.htmldog.com/references/html/tags/label/"><code>label</code></a>&nbsp;to associate it to.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Field sets and legends</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can group fields, for example name (first, last, middle, title etc.) or address (line 1, line 2, county, country, postal code, country etc.) using the&nbsp;<a href="https://www.htmldog.com/references/html/tags/fieldset/"><code>fieldset</code></a>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Within the field set, you can set a&nbsp;<strong>caption</strong>&nbsp;with the&nbsp;<a href="https://www.htmldog.com/references/html/tags/legend/"><code>legend</code></a>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;form action="somescript.php" &gt;
    <strong>&lt;fieldset&gt;</strong>
        <strong>&lt;legend&gt;Name&lt;/legend&gt;</strong>
        &lt;p&gt;First name &lt;input name="firstName"&gt;&lt;/p&gt;
        &lt;p&gt;Last name &lt;input name="lastName"&gt;&lt;/p&gt;
    <strong>&lt;/fieldset&gt;</strong>
    <strong>&lt;fieldset&gt;</strong>
        <strong>&lt;legend&gt;Address&lt;/legend&gt;</strong>
        &lt;p&gt;Address &lt;textarea name="address"&gt;&lt;/textarea&gt;&lt;/p&gt;
        &lt;p&gt;Postal code &lt;input name="postcode"&gt;&lt;/p&gt;
    <strong>&lt;/fieldset&gt;</strong>
    &lt;!-- etc. --&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Most browsers tend to represent field sets with a border surrounding them and the legend caption breaking the left of the top border by default. You can, of course, change this with CSS if you wish.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Option groups</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://www.htmldog.com/references/html/tags/optgroup/"><code>optgroup</code></a>&nbsp;element groups options in a select box. It requires a&nbsp;<code>label</code>&nbsp;attribute, the value of which is displayed as a non-selectable pseudo-heading preceding that group in the drop-down list of visual browsers.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;select name="country"&gt;
    <strong>&lt;optgroup label="Africa"&gt;</strong>
        &lt;option value="gam"&gt;Gambia&lt;/option&gt;
        &lt;option value="mad"&gt;Madagascar&lt;/option&gt;
        &lt;option value="nam"&gt;Namibia&lt;/option&gt;
    <strong>&lt;/optgroup&gt;</strong>
    <strong>&lt;optgroup label="Europe"&gt;</strong>
        &lt;option value="fra"&gt;France&lt;/option&gt;
        &lt;option value="rus"&gt;Russia&lt;/option&gt;
        &lt;option value="uk"&gt;UK&lt;/option&gt;
    <strong>&lt;/optgroup&gt;</strong>
    <strong>&lt;optgroup label="North America"&gt;</strong>
        &lt;option value="can"&gt;Canada&lt;/option&gt;
        &lt;option value="mex"&gt;Mexico&lt;/option&gt;
        &lt;option value="usa"&gt;USA&lt;/option&gt;
    <strong>&lt;/optgroup&gt;</strong>
&lt;/select&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Navigating fields</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Like links, form fields (and field sets) need to be navigated to without the use of a pointing device, such as a mouse. The same methods used in links to make this task easier can be used on form elements —&nbsp;<strong>tab stops</strong>&nbsp;and&nbsp;<strong>access keys</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>accesskey</code>&nbsp;and&nbsp;<code>tabindex</code>&nbsp;attributes can be added to the individual form tags such as&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;and also to&nbsp;<a href="https://www.htmldog.com/references/html/tags/legend/"><code>legend</code></a>&nbsp;tags.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input name="firstName" accesskey="f" tabindex="1"&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">HTML5 Forms Pt. 1: Input Types</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML5 greatly advances form controls, with numerous additional&nbsp;<code>input types</code>, several&nbsp;<code>new attributes</code>, and a handful of&nbsp;<code>extra elements</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Getting this warning in early, in case you quite understandably decide that it would be a waste of time reading the rest of this page, a vast majority of this new gubbins will not yet work fully on all major browsers. Unsurprisingly, Internet Explorer is the main dunce, with next to none of this working in anything lower than IE 10 and even that version fails to support some&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;types. All is not fruitless, though — see the note about usage suggestions at the end of&nbsp;<a href="https://www.htmldog.com/guides/html/advanced/html5forms2/">HTML5 Forms Pt. 2</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Additional input types</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Basic form fields created using the&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;element include text, password, checkbox, radio, and submit,&nbsp;<a href="https://www.htmldog.com/guides/html/beginner/forms/">which have already been covered in the HTML Beginner section</a>. These types have been extended in HTML5 to accommodate more specific fields:</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Search</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Used for a&nbsp;<strong>search query text box</strong>, this performs exactly as a standard text input should.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input type="search" name="search"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The main intention of the inclusion of this input type in the HTML5 specification is one of&nbsp;<strong>style</strong>. As well as making your HTML clearer, you can also target this element with a CSS&nbsp;<a href="https://www.htmldog.com/guides/css/advanced/attributeselectors/">attribute selector</a>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
input[type=search] { background: url(magnifyingglass.png) right no-repeat) }
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Telephone, URL, and email addresses</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Other “special” text input types include&nbsp;<code>tel</code>, for telephone numbers,&nbsp;<code>url</code>, for web addresses, and&nbsp;<code>email</code>, for email addresses.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">
&lt;input type="tel" name="telephone_number"&gt;
&lt;input type="url" name="web_address"&gt;
&lt;input type="email" name="email_address"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can use the&nbsp;<code>:valid</code>&nbsp;and&nbsp;<code>:invalid</code>&nbsp;CSS3 pseudo classes to style these fields depending on whether their content is considered valid.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
input[type=email]:valid { background: green }
input[type=email]:invalid { background: red }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This example will paint an email field’s background green if the entered text is recognized as an email address (such as “sausage@htmldog.com”) or red if it isn’t (if the user were to type “sausages?”, for example).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Numbers and ranges</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A simple text box that also allows a user to directly type in a&nbsp;<strong>number</strong>, or cycle through numbers (usually using an up and down arrow to the side of the field), can be achieved with&nbsp;<code>type="number"</code>. A further&nbsp;<code>step</code>&nbsp;attribute can be added to specify how much is added or subtracted from the number with each increment.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you also want the number to have a minimum or maximum value, you can further use the&nbsp;<code>min</code>&nbsp;and&nbsp;<code>max</code>&nbsp;attributes.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input type="number" name="quantity" step="2" min="20" max="30"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Once again,&nbsp;<em>if</em>&nbsp;this is supported, the user will be able either to type directly into the field or, if using the arrows, cycle between 20 and 30, two units at a time.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can use the&nbsp;<code>:valid</code>&nbsp;and&nbsp;<code>:invalid</code>&nbsp;pseudo classes in relation to this, too. If the user were to type “12”, for example, that would be invalid, because it isn’t between 20 and 30. If they typed “23” that would also be invalid because it isn’t a multiple of 2.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An alternative to the digits-in-a-text-box approach can be achieved using&nbsp;<code>type="range"</code>. By default, this should be displayed as a horizontal bar with a slider in the middle of it. The user can then adjust the slider left and right, the far left resulting in a value of “0” and the far right a value of “100”. This range can be adjusted using the&nbsp;<code>min</code>&nbsp;and&nbsp;<code>max</code>&nbsp;attributes.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input type="range" name="temperature" min="15" max="25" step="0.5" value="18.5"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Dates and times</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are several input types for&nbsp;<strong>dates and times</strong>:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>type="datetime"</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>type="date"</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>type="month"</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>type="week"</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>type="time"</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>type="datetime-local"</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If supported (they aren’t, widely, and they are also inconsistent between browsers), these will prompt the user to enter a date or time in a specific format, either by directly typing it in, cycling through one week/day/hour/minute/etc. at a time, or by selecting from a dropdown calendar.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>step</code>,&nbsp;<code>min</code>, and&nbsp;<code>max</code>&nbsp;attributes can be used with dates and times, too, as can the CSS pseudo classes to style according to validity.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Color</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Finally,&nbsp;<code>type="color"</code>&nbsp;is designed to allow a user to select a&nbsp;<strong>color</strong>, sending a six-digit hex code as its value.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input name="color" type="color" value="#ff8800"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">HTML5 Forms Pt. 2: Attributes and Data Lists</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Continuing from&nbsp;<a href="https://www.htmldog.com/guides/html/advanced/html5forms1/">HTML5 Forms Pt. 1</a>, in addition to the multitude of fresh new input types, there are also additional form-specific&nbsp;<strong>attributes</strong>&nbsp;at your disposal as well as&nbsp;<strong>data lists</strong>, a sort of text/select hybrid.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">More attributes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As well as those attributes mentioned, both here and in earlier guides, there is a handful of additional attributes:</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Placeholder text</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>placeholder</code>&nbsp;attribute can be used with text&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;fields (and their text-like cousins, such as&nbsp;<code>type="email"</code>&nbsp;and&nbsp;<code>type="number"</code>) as well as&nbsp;<a href="https://www.htmldog.com/references/html/tags/textarea/"><code>textarea</code></a>&nbsp;elements. It is intended as a&nbsp;<strong>hint</strong>, rather than a&nbsp;<strong>label</strong>, for which a&nbsp;<a href="https://www.htmldog.com/references/html/tags/label/"><code>label</code></a>&nbsp;element should still be used.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;label for="email_address"&gt;Email address&lt;/label&gt;
&lt;input type="email" <em>placeholder="you@somewhere.com"</em> name="email_address" id="email_address"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Autofocus</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You might want&nbsp;<strong>focus</strong>&nbsp;to land on a form field when a page loads. If you think of a search engine, for example, when you land on its home page you don’t normally need to click on the search box to start typing - you can do so straight away because it already has focus. The&nbsp;<code>autofocus</code>&nbsp;attribute is a quick way to achieve this effect.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input name="query" autofocus&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Data lists</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A data list takes the form of a list of&nbsp;<strong>suggestions</strong>&nbsp;that accompanies a text field:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;input name="country" list="country_name"&gt;
&lt;datalist id="country_name"&gt;
    &lt;option value="Afghanistan"&gt;
    &lt;option value="Albania"&gt;
    &lt;option value="Algeria"&gt;
    &lt;option value="Andorra"&gt;
    &lt;option value="Armenia"&gt;
    &lt;option value="Australia"&gt;
    &lt;option value="Austria"&gt;
    &lt;option value="Azerbaijan"&gt;
    &lt;!-- etc. --&gt;
&lt;/datalist&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The value of the&nbsp;<code>list</code>&nbsp;attribute in the&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;element (which could be any of the text-like input types) binds it to a&nbsp;<a href="https://www.htmldog.com/references/html/tags/datalist/"><code>datalist</code></a>&nbsp;element with the corresponding ID (“country_name”, in this example). As a user types in the text field, if what they type matches the start of anything in the data list, those matches will be shown underneath the text field as suggestions. So, here, if “A” is typed, the 8 countries beginning with “a” are displayed. If “L” is typed after “A”, the list of suggestions will reduce to just “Albania” and “Algeria”, and so on. The data sent when the form is submitted will be whatever is in the text field - it could be something selected from the list or it could be something completely different, inputted by the user.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The good news is that many of the features outlined in these two HTML 5 Forms pages degrade gracefully. Those browsers that don’t support data lists still maintain the text box; unrecognised&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;types revert to text inputs, so you can use the likes of&nbsp;<code>search</code>,&nbsp;<code>tel</code>, and&nbsp;<code>url</code>&nbsp;as long as you aren’t relying on their special features; placeholder text simply won’t appear so as long as it isn’t essential, go for it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Embedded Content: Video, Audio, and Canvas</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML5 introduces a swathe of new tags to accommodate the increasingly interactive and multimedia nature of the Web. While there have been numerous ways to embed&nbsp;<strong>video</strong>,&nbsp;<strong>audio</strong>, and dynamic&nbsp;<strong>imagery</strong>&nbsp;in the past, the new web standard attempts to make this easier, more consistent, and more reliable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The simplest embedded (foreign) content is an image, applied to a web page with the&nbsp;<a href="https://www.htmldog.com/references/html/tags/img/"><code>img</code></a>&nbsp;element. In the olden days,&nbsp;<a href="https://www.htmldog.com/references/html/tags/object/"><code>object</code></a>, along with various plugins and proprietary devil dust, was used to bash and smash video and audio into submission. Although not without its (compatibility) problems, there is now a much better method for using various types of media in web pages.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Video</h2>
<!-- /wp:heading -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">
&lt;video src="kitties.mp4" controls&gt;&lt;/video&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Bam. There you go. Just like that. Simple.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This will embed a video, complete with controls, in browsers that support the HTML5&nbsp;<a href="https://www.htmldog.com/references/html/tags/video/"><code>video</code></a>&nbsp;tag and the video content type.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While HTML5 is pushing for a standard framework to play media, the media itself is not standardised across browsers. In practice, this means that it is unlikely all visitors will be able to experience your video (or audio) file. Some support&nbsp;<strong>WebM</strong>&nbsp;video, for example, while others support&nbsp;<strong>MPEG</strong>. Don’t lose too much sleep over this, though — see “Alternative content”, below.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>controls</code>&nbsp;attribute is optional but if you don’t want it - if you really want to take control away from the user - you can just slap in an&nbsp;<code>autoplay</code>&nbsp;attribute:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;video src="kitties.mp4" autoplay&gt;&lt;/video&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will play the video on page load, won’t display any controls, and will most likely annoy the hell out of your visitors. Of course you could, if you were kind, put in both the&nbsp;<code>controls</code>&nbsp;and&nbsp;<code>autoplay</code>&nbsp;attributes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Other basic attributes at your disposal include&nbsp;<code>width</code>,&nbsp;<code>height</code>,&nbsp;<code>loop</code>, and&nbsp;<code>muted</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;video src="kitties.mp4" width="300" height="200" loop muted autoplay controls&gt;&lt;/video&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If you insist on using&nbsp;<code>autoplay</code>, bringing&nbsp;<code>muted</code>&nbsp;(and&nbsp;<code>controls</code>) to the party as well is a nice gesture and is a convention that many sites employ. If you have a video in an&nbsp;<a href="https://www.htmldog.com/references/html/tags/aside/"><code>aside</code></a>, for example, it can begin playing but the user can then opt to follow it by de-muting the video via the controls, if they choose, decreasing the likelihood of irritation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Poster</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can specify a&nbsp;<strong>placeholder image</strong>, which will be displayed before the video is played, with the&nbsp;<code>poster</code>&nbsp;attribute.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
&lt;video src="kitties.mp4" poster="fluffy.jpg" controls&gt;&lt;/video&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The specified image will stretch or shrink to fit the dimensions of the video, regardless of the original size of the image.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Fall-back content</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So, yes, there is an opening and closing tag. Whatever could go in between them? Why, fall-back content: content that is displayed if the browser doesn’t understand the&nbsp;<a href="https://www.htmldog.com/references/html/tags/video/"><code>video</code></a>&nbsp;element. That could be a few words, a chunk of HTML, or a “really funny” and “highly original” Lolcats image.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;video src="kitties.mp4" controls&gt;
    &lt;img src="hahahaha.jpg" alt="Hilarious cat and caption saying 'soz'."&gt;
&lt;/video&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3,"textColor":"vivid-cyan-blue"} -->
<h3 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Alternative content</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As already noted, it’s not only compatibility with the tag we need to worry about, but also compatibility with the source video itself. Luckily, more than one video source file can be offered up with the&nbsp;<a href="https://www.htmldog.com/references/html/tags/source/"><code>source</code></a>&nbsp;element along with indications of the requirements of the file in the value of the&nbsp;<code>type</code>&nbsp;attribute. The browser will then take the first one it’s happy with.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;video controls&gt;
    &lt;source src="kitties.mp4" type="video/mp4; codecs='avc1, mp4a'"&gt;
    &lt;source src="kitties.webm" type="video/webm; codecs='vp8.0, vorbis'"&gt;
    &lt;p&gt;Browser no likey HTML 5.&lt;/p&gt;
&lt;/video&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here, a browser should figure out if it can handle the “video/mp4” MIME type and if it has the stated codec to decipher it. If it doesn’t, it should move on to the next and try again with the details set out in the second&nbsp;<a href="https://www.htmldog.com/references/html/tags/source/"><code>source</code></a>&nbsp;element.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Audio</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Applying audio is just like applying video. Using the&nbsp;<a href="https://www.htmldog.com/references/html/tags/audio/"><code>audio</code></a>&nbsp;tag, the structure is the same as using&nbsp;<a href="https://www.htmldog.com/references/html/tags/video/"><code>video</code></a>&nbsp;and the attributes&nbsp;<code>src</code>,&nbsp;<code>controls</code>,&nbsp;<code>autoplay</code>&nbsp;and&nbsp;<code>loop</code>&nbsp;can all be used in the same way.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;audio src="meow_mix.mp3" controls&gt;
    Your stupid browser doesn't support HTML 5 audio.
&lt;/audio&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Alternative content can also be defined in exactly the same way as with the&nbsp;<a href="https://www.htmldog.com/references/html/tags/video/"><code>video</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/source/"><code>source</code></a>&nbsp;tags.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Much greater control can be exercised over video and audio using JavaScript, with the ability to manipulate aspects of playback and user controls in more detail.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Canvas</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A major addition to HTML5 is the&nbsp;<a href="https://www.htmldog.com/references/html/tags/canvas/"><code>canvas</code></a>&nbsp;element. It is designed to provide a canvas onto which JavaScript can be used to paint all manner of dynamic images such as graphs, animated sprites, or daft cat pictures.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;canvas id="wittykitty" width="800" height="450"&gt;
    &lt;!-- Fall-back content here, just like with video and audio --&gt;
&lt;/canvas&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">End of Intermediate Tutorial</h1>
<!-- /wp:heading -->

<!-- wp:tadv/classic-paragraph /-->

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">Start of Advanced CSS</h1>
<!-- /wp:heading -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Rounded Corners</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Rounded corners</strong>&nbsp;used to be the stuff of constricting solid background images or, for flexible boxes, numerous background images, one per-corner, slapped on multiple nested&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>&nbsp;elements. Argh, ugly. Well, not any longer. Now, with simple CSS, you can lavish your designs with more curves than Marilyn Monroe.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Border radius?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Yeah. Border radius. Fear not, though — you don’t have to have borders. The&nbsp;<a href="https://www.htmldog.com/references/css/properties/border-radius/"><code>border-radius</code></a>&nbsp;property can be used to add a corner to each corner of a box.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#marilyn {
    background: #fff;
    width: 100px;
    height: 100px;
    <strong>border-radius: 20px;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And there you have it. Rounded corners, see? Well, you will if you’ve got a sensible browser (see note below).</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","width":140,"height":140} -->
<figure class="wp-block-image aligncenter is-resized"><img src="http://nuggetofjoy.com/wp-content/uploads/border-radius-1.png" alt="" width="140" height="140"/><figcaption class="wp-element-caption">Corners are cut around the corresponding quarters of a circle (or ellipse) with the specified radius.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Of course, if you&nbsp;<em>do</em>&nbsp;want a border…</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
#ok_a_border_then {
    border: 5px solid #8b2;
    width: 100px;
    height: 100px;
    <strong>border-radius: 5px;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Woop.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Multiple values</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/border-top-left-radius/"><code>border-top-left-radius</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/border-top-right-radius/"><code>border-top-right-radius</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/border-bottom-right-radius/"><code>border-bottom-right-radius</code></a>, and&nbsp;<a href="https://www.htmldog.com/references/css/properties/border-bottom-left-radius/"><code>border-bottom-left-radius</code></a>&nbsp;can also be used to target specific corners.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ever so slightly less horribly wordy, you can also define all corner radii (what a great word) individually with a space-separated list of values, working clockwise from top-left, just like other&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/shorthand/">shorthand properties</a>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#monroe {
    background: #fff;
    width: 100px;
    height: 100px;
    <strong>border-radius: 6px 12px 18px 24px;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="http://nuggetofjoy.com/wp-content/uploads/border-radius_multiple.png" alt=""/><figcaption class="wp-element-caption">Multiple-value border-radius.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>By using two values instead of four you target top-left and bottom-right with the first length (or percentage) and top-right + bottom-left with the second. Three values? Top-left, then top-right + bottom-left, then bottom-right. </p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Ellipses</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Are circles a bit too square for you? You can specify different horizontal and vertical radiiii by splitting values with a “/”.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#nanoo {
        background: #fff;
        width: 100px;
        height: 150px;
        <strong>border-radius: 50px/100px;</strong>
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="http://nuggetofjoy.com/wp-content/uploads/border-radius_nanoo.png" alt=""/><figcaption class="wp-element-caption">Nanoo.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Shadows</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can make parts of your page “pop” by applying&nbsp;shadows&nbsp;to boxes and&nbsp;<strong>text</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Box Shadows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/box-shadow/"><code>box-shadow</code></a>&nbsp;is the standard CSS property to get you going and it can have a value comprising several parts:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
box-shadow: 5px 5px 3px 1px #999
</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>The first value is the&nbsp;<strong>horizontal offset</strong>&nbsp;— how far the shadow is nudged to the right (or left if it’s negative)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The second value is the&nbsp;<strong>vertical offset</strong>&nbsp;— how far the shadow is nudged downwards (or upwards if it’s negative)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The third value is the&nbsp;<strong>blur radius</strong>&nbsp;— the higher the value the less sharp the shadow. (“0” being absolutely sharp). This is optional — omitting it is equivalent of setting “0”.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The fourth value is the&nbsp;<strong>spread distance</strong>&nbsp;— the higher the value, the larger the shadow (“0” being the inherited size of the box). This is also optional — omitting it is equivalent of setting “0”.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The fifth value is a&nbsp;<strong>color</strong>. That’s optional, too.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Inner shadows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can also apply shadows to the inside of a box by adding “inset” to the list:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
box-shadow: inset 0 0 7px 5px #ddd;
</code></pre>
<!-- /wp:code -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="http://nuggetofjoy.com/wp-content/uploads/boxshadow-1-2.png" alt=""/><figcaption class="wp-element-caption">A basic drop-shadow and an inner-shadow.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Text Shadows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/box-shadow/"><code>box-shadow</code></a>, as its name implies, only has eyes for boxes. Fickle beast. But you can also apply shadows to the outline of text with&nbsp;<code>text-shadow</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
text-shadow: -2px 2px 2px #999;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Similarly to box-shadow:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>The first value is the&nbsp;<strong>horizontal offset</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The second value is the&nbsp;<strong>vertical offset</strong></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The third value is the&nbsp;<strong>blur radius</strong>&nbsp;(optional)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The fourth value is the&nbsp;<strong>color</strong>&nbsp;(optional, although omitting this will make the shadow the same color as the text itself)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Note that there is no spread distance or inset option for text-shadow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>text-shadow</code>&nbsp;has taken a little bit longer for browsers to figure out. Internet Explorer 9 and below won’t understand it so we suggest only using it in non-critical situations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Universal, Child, and Adjacent Selectors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In earlier tutorials, we have covered&nbsp;<a href="https://www.htmldog.com/guides/css/beginner/selectors/">HTML selectors</a>,&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/classid/">Class and ID selectors</a>, and how to&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/grouping/">combine selectors</a>&nbsp;to target specific element boxes. Using three itty-bitty characters, you can further pinpoint an element, reducing the need to bloat your HTML with class and ID attributes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Universal selectors</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Using an&nbsp;<strong>asterisk</strong>&nbsp;(“ * ”), you can target&nbsp;<strong>everything</strong>. You can use it by itself to set global styles for a page, or as a descendant of a selector to set styles of everything within something.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The following, for example, will set the margin and padding on everything in a page to zero and everything within an element with the ID “contact” to be displayed as a block:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
<strong>*</strong> {
    margin: 0;
    padding: 0;
}

<strong>#contact *</strong> {
    display: block;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Using a standalone universal selector is commonly used to “reset” many of a browser’s default styles. Setting a margin to zero, for example, will kill all spacing around paragraphs, headings and blockquotes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Child selectors</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A&nbsp;<strong>greater-than</strong>&nbsp;symbol (“&gt;”) can be used to specify something that is a child of something else, that is, something&nbsp;<strong>immediately nested</strong>&nbsp;within something.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, with this HTML…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;ul id="genus_examples"&gt;
    &lt;li&gt;Cats
        &lt;ul&gt;
            &lt;li&gt;Panthera&lt;/li&gt;
            &lt;li&gt;Felis&lt;/li&gt;
            &lt;li&gt;Neofelis&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Apes
        &lt;ul&gt;
            &lt;li&gt;Pongo&lt;/li&gt;
            &lt;li&gt;Pan&lt;/li&gt;
            &lt;li&gt;Homo&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…and the following CSS…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>#genus_examples &gt; li</strong> { border: 1px solid red }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…a red border would be drawn around “Cats” and “Apes” only, rather than around every single list item (which would be the case with&nbsp;<code>#genus_examples li { border: 1px solid red }</code>). This is because the likes of “Panthera” and “Felis” are&nbsp;<strong>grandchildren</strong>&nbsp;of “genus_examples”, not&nbsp;<strong>children</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Adjacent selectors</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A plus sign (“+”) is used to target an adjacent sibling of an element, essentially, something&nbsp;<strong>immediately following</strong>&nbsp;something.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With the following HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
&lt;h1&gt;Clouded leopards&lt;/h1&gt;
&lt;p&gt;Clouded leopards are cats that belong to the genus Neofelis.&lt;/p&gt;
&lt;p&gt;There are two extant species: Neofelis nebulosa and Neofelis diardi.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…and CSS…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>h1 + p</strong> { font-weight: bold }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Only the first paragraph, that follows the heading, will be bolded.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A further, CSS 3, “general sibling” selector uses a&nbsp;<strong>tilde</strong>&nbsp;(“~”) and will match an element following another regardless of its immediacy. So, in the above example,&nbsp;<code>h1 ~ p { font-weight: bold }</code>&nbsp;will style all paragraphs after the top-level heading but if there were any&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>s preceding the&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>, these would not be affected.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Advanced Colors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We already know that&nbsp;<a href="https://www.htmldog.com/guides/css/beginner/colors/">colors can be defined by name, RGB, or hex values</a>, but CSS 3 also allows you to paint away with&nbsp;<strong>HSL</strong>&nbsp;— hue, saturation, and lightness — as well as stipulating&nbsp;<strong>transparency</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are no super special properties at play here —&nbsp;<strong>HSL</strong>&nbsp;and&nbsp;<strong>RGBa</strong>&nbsp;(the “a” standing for “alpha”, as in “alpha transparency”) can be applied to any property that has a color value, such as&nbsp;<a href="https://www.htmldog.com/references/css/properties/color/"><code>color</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-color/"><code>background-color</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/border-color/"><code>border-color</code></a>&nbsp;or&nbsp;<a href="https://www.htmldog.com/references/css/properties/box-shadow/"><code>box-shadow</code></a>, to name a mere handful.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Alpha transparency</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>RGBa opens up an exciting new dimension to web design, allowing you to set the transparency of a box or text. If you wanted a smidgen of a snazzy background image to peep through a heading, for example, you might use something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
h1 {
    padding: 50px;
    background-image: url(snazzy.jpg);
    <strong>color: rgba(0,0,0,0.8);</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A standard value of&nbsp;<code>rgb(0,0,0)</code>&nbsp;would set the heading to pure black but that fourth value, in&nbsp;<code>rgba</code>, sets the level of transparency, “1” being completely opaque, “0” being completely transparent. So&nbsp;<code>rgba(0,0,0,0.8)</code>&nbsp;is saying red=“0”, green=“0”, blue=“0”, alpha=“0.8”, which, all together, makes it 80% black.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This doesn’t only apply to text, of course, you could apply a transparent background color to an entire box, a transparent box shadow… anywhere where you can use&nbsp;<code>rgb</code>, you can used&nbsp;<code>rgba</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Hue, saturation, and lightness</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Color names aside, web colors have always been red-green-blue biased, be that through hex codes or explicit RBG (or RGBa). Although mildly less straightforward (especially if your brain is trained to break down colors into red, green and blue), HSL can actually be more intuitive because it gives you direct control over the aspects of a color’s shade rather than its logical ingredients.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is used in a similar way to&nbsp;<code>rgb</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
#smut { color: <strong>hsl(36, 100%, 50%)</strong> }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Rather than each sub-value being a part of the color spectrum, however, they are:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><strong>Hue</strong>&nbsp;(“36” in the above example): Any angle, from 0 to 360, taken from a typical color wheel, where “0” (and “360”) is red, “120” is green and “240” is blue.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Saturation</strong>&nbsp;(“100%” in the example): How saturated you want the color to be, from 0% (none, so a level of grey depending on the lightness) to 100% (the whole whack, please).</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Lightness</strong>&nbsp;(“50%” in the example): From 0% (black) to 100% (white), 50% being “normal”.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So the example used here will produce an orange (36°) that is rich (100% saturation) and vibrant (50% lightness). It is the equivalent of&nbsp;<code>#ff9900</code>,&nbsp;<code>#f90</code>, and&nbsp;<code>rgb(255, 153, 0)</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">HSLa</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Hey, man, this funky fresh transparency and HSL can be combined?! You’d better believe it. Here’s&nbsp;<strong>HSLa</strong>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#rabbit { background: <strong>hsla(0, 75%, 75%, 0.5)</strong> }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can figure out what that does, right?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>hsl</code>&nbsp;and&nbsp;<code>hsla</code>&nbsp;are supported by most modern browsers, including IE versions 9 and above.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">At-Rules: @import, @media, and @font-face</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At-rules encapsulate a bunch of CSS rules and apply them to something specific. They can be used to&nbsp;<strong>import</strong>&nbsp;other CSS files, apply CSS to a particular&nbsp;<strong>media</strong>, or embeduncommon&nbsp;<strong>fonts</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Each at-rule starts with an apetail, or an “at sign”, if you want to be boring about it (“@”).</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Importing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let’s start with the simple&nbsp;<code>@import</code>&nbsp;rule. This is used to bolt another stylesheet onto your existing one.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@import url(morestyles.css);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This can be used if a site requires long, complex stylesheets that might be easier to manage if they are broken down into smaller files.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>@import rules&nbsp;<em>must</em>&nbsp;be placed at the top of a stylesheet, before any other rules.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/advertise/"><strong>Advertise Here!</strong>On a long-established, well-read, well-respected web development resource.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Targeting media types</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>@media</code>&nbsp;can be used to apply styles to a specific media, such as print.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
<strong>@media print</strong> {
    body {
        font-size: 10pt;
        font-family: times, serif;
    }

    #navigation {
        display: none;
    }
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Values that follow “<code>@media</code>” can include&nbsp;<code>screen</code>,&nbsp;<code>print</code>,&nbsp;<code>projection</code>,&nbsp;<code>handheld</code>, and&nbsp;<a href="https://www.htmldog.com/references/css/properties/all/"><code>all</code></a>, or a comma-separated list of more than one, such as:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>@media screen, projection</strong> {
    /* ... */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>It doesn’t stop there, oh no. CSS 3 allows you to target not only specific media but also variables relating to that media, such as screen size (particularly helpful in targeting phones). Have a gander at the&nbsp;<a href="https://www.htmldog.com/guides/css/advanced/mediaqueries/">Media Queries</a>&nbsp;page for more.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Embedding fonts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>@font-face</code>&nbsp;has been around for a long time but was nigh-on useless for much of its life. CSS 3 has polished it up and it is now widely used as a technique for embedding fonts in a web page so that a typeface can be used even if it isn’t sitting on the user’s computer. So you no longer need to rely on “web safe” fonts such as Arial or Verdana. Exciting times.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Jumping in at the deep end…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@font-face {
    font-family: "font of all knowledge";
    src: url(fontofallknowledge.woff);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>What this does is create a font named “font of all knowledge” using the&nbsp;<a href="https://www.htmldog.com/references/css/properties/font-family/"><code>font-family</code></a>&nbsp;<strong>descriptor</strong>&nbsp;and links the font file “fontofallknowledge.woff” to that name using the&nbsp;<code>src</code>&nbsp;descriptor. “font of all knowledge” can then be used in a standard font rule, such as:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
p { font-family: "font of all knowledge", arial, sans-serif; }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The font will be downloaded (in this case from the same directory as the CSS file) and applied to paragraphs. If the browser is too decrepit to deal with sparkly new font-faces, it will simply revert to the next, standard, font in the list. Magic!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also look for a number of fonts to apply to the rule with a comma-separated list. Checking to see if a font is already present on a user’s computer, removing the need to download it, can also be accomplished by replacing “url” in the&nbsp;<code>src</code>&nbsp;value with “local”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And because a font file might contain a whole host of weights or styles, you might also want to specify which one you’re interested in. So the&nbsp;<code>@font-face</code>&nbsp;rule could end up looking something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@font-face {
    font-family: "font of all knowledge";
    src: local("font of all knowledge"), local(fontofallknowledge), url(fontofallknowledge.woff);
    font-weight: 400;
    font-style: normal;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Legally speaking, you can’t just throw any old font you feel like up on the Interweb because there are copyright and usage terms to consider, not to mention compatibility and optimization issues.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are free web fonts out there that you can find, download, upload, and use, though. Hell, you could even create one yourself if you’re mad-scientist clever. There are also web font providers, such as Adobe’s&nbsp;<a href="https://typekit.com/">Typekit</a>, that have a large selection of fonts to choose from at a price.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="http://www.google.com/fonts/">Google Web Fonts</a>&nbsp;has a more limited selection but it’s free to use and makes things super, super (super, super, super) easy. All you need to do is link to one of their external CSS files, which is nothing more than a&nbsp;<code>@font-face</code>&nbsp;rule, and whammo — you’ve got a darling new font to play with.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Attribute Selectors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What? More selectors? Damn straight. Because someone somewhere really wants you to keep your HTML as tidy as possible. So before you add a class attribute to a tag see if you can simply target it by an attribute that might already be there.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Attribute selectors allow you to style an element’s box based on the presence of an HTML attribute or of an attribute’s value.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">With the attribute…</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Appending an attribute name enclosed in square brackets, to style something that simply contains a certain&nbsp;<strong>attribute</strong>, you can do something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>abbr[title]</strong> { border-bottom: 1px dotted #ccc }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This basically says “shove a dotted line underneath all abbreviations with a&nbsp;<code>title</code>&nbsp;attribute”.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">With the attribute and its value…</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can further specify that you want to style something with a specific&nbsp;<strong>attribute value</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>input[type=text]</strong> { width: 200px; }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This example will apply a width of 200 pixels only to&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;elements that are specified as being text boxes (<code>&lt;input type="text"&gt;</code>).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This approach can certainly be useful in forms where&nbsp;<a href="https://www.htmldog.com/references/html/tags/input/"><code>input</code></a>&nbsp;elements can take on many guises using the&nbsp;<code>type</code>&nbsp;attribute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also target more than one attribute at a time in a way similar to the following:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>input[type=text][disabled]</strong> { border: 1px solid #ccc }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will only apply a gray border to text inputs that are disabled.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSS 3 further allows you to match an attribute without being exact:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>[attribute^=something]</code>&nbsp;will match a the value of an attribute that&nbsp;<strong>begins</strong>&nbsp;with something.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>[attribute$=something]</code>&nbsp;will match a the value of an attribute that&nbsp;<strong>ends</strong>&nbsp;with something.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>[attribute*=something]</code>&nbsp;will match a the value of an attribute that&nbsp;<strong>contains</strong>&nbsp;something, be it in the beginning, middle, or end.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So, as an example, you could style external links (eg. “http://www.htmldog.com”) differently to internal links (eg. “overhere.html”) in the following way:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
a[href^=http] {
    padding-right: 10px;
    background: url(arrow.png) right no-repeat;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">CSS Transitions</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Transitions</strong>&nbsp;allow you to easily&nbsp;<strong>animate</strong>&nbsp;parts of your design without the need for the likes of JavaScript. How dangerous.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>At the most simplistic level, think of a traditional&nbsp;<code>:hover</code>&nbsp;state, where you might change the appearance of a link when a cursor fondles it:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
a:link {
    color: hsl(36,50%,50%);
}
a:hover {
    color: hsl(36,100%,50%);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This creates a binary animation; a link switches from a subdued orange to a rich orange when it is hovered over.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://www.htmldog.com/references/css/properties/transition/"><code>transition</code></a>&nbsp;property, however, is much more powerful, allowing smooth animation (rather than a jump from one state to another). It is a&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/shorthand/">shorthand property</a>&nbsp;that combines the following properties (which can be used individually if you so choose):</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.htmldog.com/references/css/properties/transition-property/"><code>transition-property</code></a>: which property (or properties) will transition.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.htmldog.com/references/css/properties/transition-duration/"><code>transition-duration</code></a>: how long the transition takes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.htmldog.com/references/css/properties/transition-timing-function/"><code>transition-timing-function</code></a>: if the transition takes place at a constant speed or if it accelerates and decelerates.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.htmldog.com/references/css/properties/transition-delay/"><code>transition-delay</code></a>: how long to wait until the transition takes place.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Returning to the shorthand property, if a transition is applied like so…</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
a:link {
    <strong>transition: all .5s linear 0;</strong>
    color: hsl(36,50%,50%);
}
a:hover {
    color: hsl(36,100%,50%);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…when the link is hovered over, the color will gradually change rather than suddenly switch. The&nbsp;<a href="https://www.htmldog.com/references/css/properties/transition/"><code>transition</code></a>&nbsp;property here is saying it wants all properties transitioned over half a second in a linear fashion with no delay.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a transition to take place, only&nbsp;<a href="https://www.htmldog.com/references/css/properties/transition-duration/"><code>transition-duration</code></a>&nbsp;is required, the rest defaulting to&nbsp;<code>transition-property: all; transition-timing-function: ease; transition-delay: 0;</code>. So you could, for example, simply declare&nbsp;<code>transition: .5s</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Targeting specific properties</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While “all” can be used in transition-property (or transition), you can tell a browser only to transition certain properties, by simply plonking in the property name you want to change. So the previous example could actually include&nbsp;<code>transition: color .5s ease 0</code>, given only the color changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to target more than one property (without using “all”), you can offer up a comma-separated list with&nbsp;<a href="https://www.htmldog.com/references/css/properties/transition-property/"><code>transition-property</code></a>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
a:link {
    transition: .5s;
    <strong>transition-property: color, font-size;</strong>
...
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or you can offer up a slew of rules for transitioning each property like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
a:link {
    <strong>transition: color .5s, font-size 2s;</strong>
...
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Easing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>OK, so&nbsp;<a href="https://www.htmldog.com/references/css/properties/transition-timing-function/"><code>transition-timing-function</code></a>&nbsp;(catchy!) is the least obvious fella. It effectively states how the browser should deal with the intermediate states of the transition.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It follows a cubic Bézier curve. Yeah. Obviously, we know all about them from infant school, but, to get down to it,&nbsp;<strong>at the most basic level</strong>&nbsp;you can use&nbsp;<code>ease</code>&nbsp;or&nbsp;<code>linear</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>ease</code>&nbsp;produces a gradual&nbsp;<strong>acceleration</strong>&nbsp;at the start of the transition and a gradual&nbsp;<strong>deceleration</strong>&nbsp;at the end.&nbsp;<code>linear</code>&nbsp;maintains a constant speed throughout. Other values include&nbsp;<code>ease-in</code>&nbsp;and&nbsp;<code>ease-out</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSS transitions won’t work in Internet Explorer versions 9 and below. Booo. But that won’t matter in cases (which will be most cases) where transitions aren’t essential for a design to work well. It’s just a little something to keep in mind.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">CSS Backgrounds: Multiples, Size, and Origin</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As well as plastering a&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/backgroundimages/">single or tiling background image</a>&nbsp;across parts of your page, you can also apply&nbsp;<strong>multiple backgrounds</strong>, adjust the&nbsp;<strong>size of background images</strong>, and define the&nbsp;<strong>origin of a background</strong>&nbsp;based on levels of the box model.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Multiple backgrounds</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is the boogie web designers have been crying out for since Bing Crosbie was topping the charts.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/multipleBackgrounds-1-1.png" alt=""/><figcaption class="wp-element-caption">A repeating background image, a single-instance background image, and combining them together in the same box.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>CSS3 allows you to apply multiple background images to a single box by simply putting image locations in a comma-separated list:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background-image: url(this.jpg), url(that.gif), url(theother.png);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>More usefully, you can also define all of the other delightful background aspects. If you wanted to style a chunky button-like link with separate background, bullet, and arrow, for example, you could use something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: url(bg.png), url(bullet.png) 0 50% no-repeat, url(arrow.png) right no-repeat;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Easy, right? It’s just the same as using&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-image/"><code>background-image</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-position/"><code>background-position</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-repeat/"><code>background-repeat</code></a>,&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-attachment/"><code>background-attachment</code></a>, and&nbsp;<a href="https://www.htmldog.com/references/css/properties/background/"><code>background</code></a>, except you can specify more than one background with the aid of that helpful little comma.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/advertise/"><strong>Advertise Here!</strong>On a long-established, well-read, well-respected web development resource.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Background size</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-size/"><code>background-size</code></a>&nbsp;property allows you to stretch or compress a background image.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/background-size-1.jpg" alt=""/><figcaption class="wp-element-caption"><code>background-size: contain</code>&nbsp;and&nbsp;<code>background-size: cover</code></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The values can be:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>auto</code>, which maintains the background image’s&nbsp;<strong>original size and width/height ratio</strong>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>lengths</strong>, a width and a height, such as&nbsp;<code>100px 50px</code>&nbsp;(100px wide, 50px high). Specifying a single length, such as&nbsp;<code>100px</code>&nbsp;will result the equivalent of&nbsp;<code>100px auto</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>percentages</strong>, a width and a height, such as&nbsp;<code>50% 25%</code>&nbsp;(50% of the width of the background area, 25% of the height of the background area). Specifying a single percentage, such as&nbsp;<code>50%</code>&nbsp;will result the equivalent of&nbsp;<code>50% auto</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>A&nbsp;<strong>combination</strong>&nbsp;of lengths, percentages, and&nbsp;<code>auto</code>, such as&nbsp;<code>80px auto</code>&nbsp;(80px wide, automatic height to maintain the image’s original ratio)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>contain</code>, which maintains the background image’s&nbsp;<strong>original ratio</strong>&nbsp;and makes it&nbsp;<strong>as large as possible</strong>&nbsp;whilst&nbsp;<strong>fitting entirely within the box’s background area</strong>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>cover</code>, which maintains the background image’s&nbsp;<strong>original ratio</strong>&nbsp;and makes it&nbsp;<strong>large enough to fill the entire background area</strong>, which may result in cropping of either the height or width.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Background Origin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/background-origin/"><code>background-origin</code></a>&nbsp;is the remarkably dull kid of the bunch. Not unintelligent, just dull. The kid that the other kids point and laugh at. The property defines where the background area of a box actually starts. If you think of the box model, when you set a background it should, by default, start from the upper-left corner of the padding box. So if you had…</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
#burrito {
    width: 400px;
    height: 200px;
    border: 10px solid rgba(0,255,0,.5);
    padding: 20px;
    background: url(chilli.png) 0 0 no-repeat;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…the background image should appear in the top left corner, in the padding box, immediately after the inner edges of a green border. You can change this behavior, however, with&nbsp;<a href="https://www.htmldog.com/references/css/properties/background-origin/"><code>background-origin</code></a>. Its self-descriptive values can be&nbsp;<code>padding-box</code>&nbsp;(default, as described above),&nbsp;<code>border-box</code>, and&nbsp;<code>content-box</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So adding&nbsp;<code>background-origin: border-box</code>&nbsp;to the previous example will cause the origin of the background image to be tucked up inside the border.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Transformations</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A woeful mega-budget Michael Bay movie about CSS?! Nay, the powerful manipulation of the shape, size, and position of a box and its contents using the&nbsp;<a href="https://www.htmldog.com/references/css/properties/transform/"><code>transform</code></a>&nbsp;property.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By default, CSS boxes, those visual representations of HTML elements, are so square. Rectangular, at least; level, with four straight sides and four boring right angles. But with the use of&nbsp;<a href="https://www.htmldog.com/references/css/properties/transform/"><code>transform</code></a>&nbsp;you can stretch and mold those boxes into all manner of shapes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This page will only mention the&nbsp;<a href="https://www.htmldog.com/references/css/properties/transform/"><code>transform</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/css/properties/transform-origin/"><code>transform-origin</code></a>&nbsp;properties but, in practice, you will probably want to duplicate these with&nbsp;<code>-webkit-transform</code>&nbsp;and&nbsp;<code>-webkit-transform-origin</code>&nbsp;to achieve the same results in the likes of Safari and Chrome as well as&nbsp;<code>-ms-transform</code>&nbsp;and&nbsp;<code>-ms-transform-origin</code>&nbsp;for Internet Explorer 9, which is the earliest version of IE that will support transforms.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Manipulating a box over two dimensions, transform can be used to&nbsp;<strong>rotate</strong>,&nbsp;<strong>skew</strong>,&nbsp;<strong>scale</strong>&nbsp;and&nbsp;<strong>translate</strong>&nbsp;a box and its contents.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/transform-1.png" alt=""/><figcaption class="wp-element-caption">The four basic 2D transform functions — rotate, skew, scale, and translate.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Rotating</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The following would result in a square orange box with all of its contents — text, images, whatever — obediently standing to attention:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
.note {
    width: 300px;
    height: 300px;
    background: hsl(36,100%,50%);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>But you can spin those soldiers around by adding a further declaration:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
transform: rotate(-10deg);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will turn the box and, importantly, everything in it, ten degrees anti-clockwise.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Skewing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Skewing allows you to tip the horizontal and vertical so the following…</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
transform: skew(20deg,10deg);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…will tip over the x-axis by 20 degrees on the y-axis by 10 degrees.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also specify one angle, such as&nbsp;<code>skew(20deg)</code>, which is the equivalent of&nbsp;<code>skew(20deg,0)</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Scaling</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Obviously, you can change&nbsp;<a href="https://www.htmldog.com/references/css/properties/width/"><code>width</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/css/properties/height/"><code>height</code></a>&nbsp;properties on a box, but that won’t affect the size of anything inside it. Scaling, however, will multiply not only the width and height, but the size of everything contained in the box as well:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
transform: scale(2);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will multiply the size by two. You can use any positive number, including a value less than “1”, such as “0.5”, if you want to use a shrink ray.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also scale the horizontal and vertical dimensions separately:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
transform: scale(1,2);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will leave the horizontal as is (because it’s a scale of 1) and multiply the vertical by two.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Translating</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can shift a box horizontally and vertically using&nbsp;<code>transform: translate</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
transform: translate(100px,200px);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Similar to&nbsp;<code>position: relative; left: 100px; top: 200px;</code>, this will move a box 100 pixels to the right and 200 pixels down.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As well as the values mentioned, if you want to target an individual axis, you can also use&nbsp;<code>skewX</code>,&nbsp;<code>skewY</code>,&nbsp;<code>scaleX</code>,&nbsp;<code>scaleY</code>,&nbsp;<code>translateX</code>, and&nbsp;<code>translateY</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Combining transformations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Want to rotate and scale at the same time? You crazy kid. You can do this by simply separating values with spaces, such as:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
transform: rotate(-10deg) scale(2);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The order of the values is important - the latter will be executed before the former. In the previous example, the box will be scaled and&nbsp;<em>then</em>&nbsp;rotated. It is, therefore, different to&nbsp;<code>transform: scale(2) rotate(-10deg);</code>, which will be rotated and then scaled.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Alternatively, you could use the matrix function.&nbsp;<code>matrix</code>&nbsp;does the whole lot - rotating, skewing, scaling, and translating. It takes six values:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
transform: matrix(2,-0.35,0.35,2,0,0);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>These values aren’t entirely straightforward and involve maths (or just one math if you’re of the American persuasion) that, if you really want to tackle (there are benefits not only in brevity but also in precision), it may be worth giving&nbsp;<a href="http://www.w3.org/TR/css3-transforms/#mathematical-description">the specs</a>&nbsp;a gander.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Origin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There’s one important aspect missing. If you are transforming a box, there is a further parameter involved: the&nbsp;<strong>origin</strong>&nbsp;of the transformation. If you are rotating, for example, it will, by default, turn on the point that is the center of the box; if you had a piece of card, stuck a pin right through the middle of it, and then stuck that to your forehead (don’t do this), the card would spin from the middle. You can change where in the card the pin is stuck with&nbsp;<a href="https://www.htmldog.com/references/css/properties/transform-origin/"><code>transform-origin</code></a>, however:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
transform-origin: 0 0;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This example will tell the box to transform (rotate, in the previous example) from the top left, the first “0” being horizontal, the second being vertical. These values could be different, of course — like all other x-y, and you can use the usual&nbsp;<code>center</code>,&nbsp;<code>top</code>,&nbsp;<code>right</code>,&nbsp;<code>bottom</code>,&nbsp;<code>left</code>, length and percentage values, including negatives.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/transform-origin-1.png" alt=""/><figcaption class="wp-element-caption">The same clockwise-rotated box with different transform origins.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>And all of that’s just with two measly dimensions.&nbsp;<a href="https://www.htmldog.com/references/css/properties/transform/"><code>transform</code></a>&nbsp;is a leviathan with even greater power that can also be used for three-dimensional magic. On the most basic level, you can use&nbsp;<code>rotateX</code>&nbsp;and&nbsp;<code>rotateY</code>, which will rotate “towards” or “away” from you on the x- and y-axis, and there are the likes of&nbsp;<code>translate3d</code>,&nbsp;<code>scale3d</code>, and the intimidating&nbsp;<code>matrix3d</code>, all of which have even greater browser difficulties than their 2D counterparts.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Gradients</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Images showing a smooth dissolve from one color to another are plastered all over the web. However, CSS 3 allows you to place them in your designs without having to create an actual image file.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is no special property for this; you simply use the&nbsp;<code><strong>background</strong></code>&nbsp;or&nbsp;<code><strong>background-</strong>image</code>&nbsp;property and define your gradient in its value. You can create both&nbsp;<strong>linear</strong>&nbsp;and&nbsp;<strong>radial</strong>&nbsp;gradients this way.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Linear gradients</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For an even spread of two colors, fading from one at the top to another at the bottom, a declaration can simply be something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: linear-gradient(yellow, red);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/linearGradient-1.png" alt=""/><figcaption class="wp-element-caption">A simple yellow-to-red linear gradient background.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>To manipulate the angle of the fading, you slot in “to” and the destination you want the transition to head to. You can head to one side:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: linear-gradient(to right, orange, red);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or one corner:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: linear-gradient(to bottom right, orange, red);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or any angle that tickles your fancy:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: linear-gradient(20deg, orange, red);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that the “to” is excluded with angles because there isn’t an explicit destination.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And why stop at two colors? Specify as many as you dare:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: linear-gradient(hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%));
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/linearGradient2-1.png" alt=""/><figcaption class="wp-element-caption">A colorful gradient extravaganza.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>To get gradients to work on as many browsers as possible, you will probably also want to use&nbsp;<code>-webkit-linear-gradient</code>&nbsp;to cover Safari and older versions of Chrome.&nbsp;<strong>The values of these must also exclude the “to” part</strong>, if used.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>CSS gradients won’t play at all with IE 9 and below, but you can still make them, and any other incapable browser, use the traditional method of a good old fashioned image by specifying that first, as a fallback (proceeding declarations will just be ignored).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, all-in, your gradients might look something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
body {
    background: #666 url(fade.png) 0 0 repeat-y;
    background: -webkit-linear-gradient(right, #000, #666); 
    background: linear-gradient(to right, #000, #666);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Radial gradients</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Radial gradients, with one color starting from a central point and fading to another color, use a similar syntax:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: radial-gradient(yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/radialGradient-1.png" alt=""/><figcaption class="wp-element-caption">A simple yellow-to-green radial gradient background.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>You can also specify the shape of the fade. By default it is an ellipse, spreading to fill the background box, but you can force it to be circular, regardless of the shape of the box:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: radial-gradient(circle, yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/radialGradient2-1.png" alt=""/><figcaption class="wp-element-caption">A circular radial gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Using “closest-side”, “closest-corner”, “farthest-side” and “farthest-corner” you can also specify if the gradient is contained by the sides or corners of the box nearest to or furthest away from the origin:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: radial-gradient(circle closest-side, yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And if you wanted to place the origin of the gradient somewhere specific, you can also use “at”:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: radial-gradient(at top left, yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/radialGradient3-1.png" alt=""/><figcaption class="wp-element-caption">A radial gradient emanating from the top-left corner of a box.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>More compatibility notes: additional&nbsp;<code>-webkit-radial-gradient</code>&nbsp;usage is wise. The order of the parameters needs to be changed here, and, like “to”, “at” is excluded. So:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: radial-gradient(circle closest-side at 100px 200px , black, white);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Would be accompanied by:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: -webkit-radial-gradient(100px 200px, circle closest-side, black, white);
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Color stops</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you don’t want a uniform blend across your gradient, you can specify exactly where in the gradient each color kicks in, straight after each color, starting at “0” and ending at “100%” (although lengths can also be used).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, just to make it clear before tinkering:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>linear-gradient(black 0, white 100%)</code>&nbsp;is the equivalent of&nbsp;<code>linear-gradient(black, white)</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>radial-gradient(#06c 0, #fc0 50%, #039 100%)</code>&nbsp;is the same as&nbsp;<code>radial-gradient(#06c, #fc0, #039)</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>linear-gradient(red 0%, green 33.3%, blue 66.7%, black 100%)</code>&nbsp;will have the same result as&nbsp;<code>linear-gradient(red, green, blue, black)</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>That’s because, when the positions are stated in these examples, they evenly space out the colors, which is the default when no color stops are explicitly defined.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, to get on with that tinkering, you can pull and stretch away with those stops:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: linear-gradient(135deg, hsl(36,100%,50%) 10%, hsl(72,100%,50%) 60%, white 90%);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/linearGradient3-1.png" alt=""/><figcaption class="wp-element-caption">Color stops in a linear gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Repeating gradients</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A single gradient will fill a box with the previous methods but you can use “repeating-linear-gradient” and “repeating-linear-gradient” to build on the color stops and, well, repeat the gradient.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For basic bars of black-and-white bars, for example:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: repeating-linear-gradient(white, black 15px, white 30px);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/repeatingGradient-1.png" alt=""/><figcaption class="wp-element-caption">A repeating linear gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Or something a bit more solid:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
background: repeating-radial-gradient(black, black 15px, white 15px, white 30px);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/repeatingGradient2-1.png" alt=""/><figcaption class="wp-element-caption">A repeating radial gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:tadv/classic-paragraph /-->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Media Queries</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>@media</code>&nbsp;at-rules, used to target styles at specific media, such as&nbsp;<strong>screen</strong>&nbsp;or&nbsp;<strong>print</strong>,&nbsp;<a href="https://www.htmldog.com/guides/css/advanced/atrules/">have already been covered</a>. But this can be pushed to an even greater level of sophistication, enabling you to specify&nbsp;<strong>different design choices depending on screen size</strong>. A page can then be optimized and laid out completely differently for&nbsp;<strong>mobile phones</strong>,&nbsp;<strong>tablets</strong>, and varying browser&nbsp;<strong>window sizes</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To recap, if we want to apply some CSS solely to screen-based&nbsp;<strong>media</strong>, for example, one option would be to slot something like the following in at the bottom of a stylesheet:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
@media screen {

    body { font: 12px arial, sans-serif }
    #nav { display: block }

}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Browser-size specific CSS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To extend the previous example, not only can screen-based media be targeted, screen-based media&nbsp;<strong>of a certain size</strong>&nbsp;can be targeted as well:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
<strong>@media screen and (max-width: 1000px)</strong> {

    #content { width: 100% }

}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This is telling a browser to apply a block of CSS when its&nbsp;<strong>viewport</strong>&nbsp;is 1000 pixels wide or less. You could use this to do something as simple as making a content area or navigation narrower or you could completely re-arrange a page layout (like stacking page sections on top of one another instead of displaying them in columns).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can apply more than one&nbsp;<code>@media</code>&nbsp;rule, so you could have a number of different designs that are browser size dependent:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media screen and (max-width: 1000px) {

    #content { width: 100% }

}

@media screen and (max-width: 800px) {

    #nav { float: none }

}

@media screen and (max-width: 600px) {

    #content aside {
        float: none;
        display: block;
    }

}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that if, for example, a layout area was 600 pixels wide or less, all three of these would be applied (because it would be less than or equal to 1000px, 800px, and 600px).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As well as using a general&nbsp;<code>max-width</code>&nbsp;on the main content area (the&nbsp;<a href="https://www.htmldog.com/references/html/tags/article/"><code>article</code></a>&nbsp;elements), this site also has a number of size-dependent CSS rules. If you’re able to do so, try resizing your browser to see the changes take effect.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You could also use “min-width” in place of “max-width” if you want to do things the other way around and apply CSS to sizes equal to or&nbsp;<strong>over</strong>&nbsp;a certain length.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Orientation-specific CSS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you have a hankering for applying CSS depending on the orientation of the browser, fill your boots with something like the following:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
<strong>@media screen and (orientation: landscape)</strong> {

    #nav { float: left }

}

<strong>@media screen and (orientation: portrait)</strong> {

    #nav { float: none }

}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This could be especially useful with mobile devices…</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Device-specific CSS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We’re not talking different CSS for each and every brand and model of laptop, phone, and donkey - that would be sinful - but we can, with a relatively clear conscience (as long as we’re sensible), specify the likes of the device’s screen dimensions and its pixel ratio.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A “handheld” media type does exist and it could be used as&nbsp;<code>@media handheld</code>… but it isn’t widely supported and the distinction of what is “handheld” has become blurred due to the proliferation of all manner of devices with all manner of screen sizes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Width and height</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>device-width</code>,&nbsp;<code>device-height</code>,&nbsp;<code>min-device-width</code>,&nbsp;<code>max-device-width</code>,&nbsp;<code>min-device-height</code>&nbsp;and&nbsp;<code>max-device-height</code>&nbsp;can be used to target the computed resolution of a device:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media screen and (min-device-height: 768px) and (max-device-width: 1024px) {

    /* You can apply numerous conditions separated by "and" */

}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Pixel ratio</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>It’s important to keep in mind that a&nbsp;<strong>CSS pixel</strong>&nbsp;need not be the same as a&nbsp;<strong>physical pixel</strong>. While a screen may physically be 720 pixels wide, a browser may actually apply CSS assuming that it is 480 pixels wide, for example. This is so that a standard designed web page will more likely fit on the screen. In this example, there is a&nbsp;<strong>pixel ratio</strong>&nbsp;of 1.5:1: There are 1½ physical pixels to every CSS pixel. A bog-standard desktop monitor will have a pixel ratio of 1:1: One CSS pixel to every physical pixel.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to apply styles only to these devices, you can use something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
@media (device-pixel-ratio: 2) {

    body { background: url(twiceasbig.png) }

}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This would apply to the likes of the iPhone (4 and above), with a pixel ratio of 2:1. You can also use&nbsp;<code>min-device-pixel-ratio</code>&nbsp;and&nbsp;<code>max-device-pixel-ratio</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Talking of iPhones, you know the deal: also use&nbsp;<code>-webkit-device-pixel-ratio</code>, etc, etc…</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You might also want to fiddle with a device’s viewport to get it to play how you want. Leaping back over to HTML, the following&nbsp;<a href="https://www.htmldog.com/references/html/tags/meta/"><code>meta</code></a>&nbsp;element will force a device to render a page at the width of the viewport (rather than attempting to show a wider-width design and zooming out, which it will do by default if the page can be wider than the viewport’s width) and also prevent the user from zooming in and out:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
&lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The benefit of this is that you can control exactly what is applied to what physical screen size. And although it’s painful to remove user controls, if the design is delightfully swell and made just for that diddy little screen, there shouldn’t be a need to zoom.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The HTML Dog web site takes this approach: instead of a small device attempting to render a bigger, fatter web page by shrinking it down, the CSS turns it into a single-column design made specifically for such a device.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Others</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can also apply styles depending on a device’s resolution:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media screen and (resolution: 326dpi) { /* */ }

@media screen and (min-resolution: 96dpi) { /* */ }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or on its aspect ratio:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media screen and (device-aspect-ratio: 16/9) { /* */ }</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
