---
title: "Intermediate HTML"
date: "2023-04-13 07:23:00"
layout: post
permalink: "/intermediate-html/"
categories: ["projects"]
tags: []
wordpress_id: "62734"
---

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">Beginning of Intermediate HTML</h1>
<!-- /wp:heading -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Span and Div</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML is all about applying&nbsp;<strong>meaning</strong>&nbsp;to content. Whereas most HTML tags apply meaning (<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;makes a paragraph,&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>&nbsp;makes a heading etc.), the&nbsp;<a href="https://www.htmldog.com/references/html/tags/span/"><code>span</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>&nbsp;tags apply no meaning at all. This might sound about as useful as a foam hammer but they are actually used quite extensively in conjunction with CSS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They are used to group together a chunk of HTML and hook some information onto that chunk, most commonly with the attributes&nbsp;<code>class</code>&nbsp;and&nbsp;<code>id</code>&nbsp;to associate the element with a&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/classid/">class or id CSS selector</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The difference between&nbsp;<a href="https://www.htmldog.com/references/html/tags/span/"><code>span</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>&nbsp;is that a&nbsp;<a href="https://www.htmldog.com/references/html/tags/span/"><code>span</code></a>&nbsp;element is&nbsp;<strong>in-line</strong>&nbsp;and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>&nbsp;(division) element is&nbsp;<strong>block-line</strong>&nbsp;(which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;div id="scissors"&gt;
    &lt;p&gt;This is &lt;span class="paper"&gt;crazy&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>, and especially&nbsp;<a href="https://www.htmldog.com/references/html/tags/span/"><code>span</code></a>, shouldn’t actually be used that often. Whenever there is a sensible alternative that should be used instead. For example, if you want to emphasize the word “crazy” and the class “paper” is adding italics for visual emphasis, then, for richer, more meaningful content, the code might look like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;div id="scissors"&gt;
    &lt;p&gt;This is <strong>&lt;em class="paper"&gt;</strong>crazy<strong>&lt;/em&gt;</strong>&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If you haven’t got a clue about classes and ID’s yet, don’t worry, they’re all&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/classid/">explained in the CSS Intermediate Tutorial</a>. All you need to remember is that span and div are “meaningless” tags.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While they are not replacement for the&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>&nbsp;tag, HTML 5 introduces a number of tags used for grouping blocks of code together and adding meaning at the same time. For more information on&nbsp;<a href="https://www.htmldog.com/references/html/tags/article/"><code>article</code></a>,&nbsp;<a href="https://www.htmldog.com/references/html/tags/header/"><code>header</code></a>,&nbsp;<a href="https://www.htmldog.com/references/html/tags/footer/"><code>footer</code></a>, and more, see the&nbsp;<a href="https://www.htmldog.com/guides/html/intermediate/sectioning/">article about sectioning</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">Beginning of Intermediate HTML</h1>
<!-- /wp:heading -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Text: Abbreviations, Quotations, and Code</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The basics of defining text using&nbsp;paragraphs (as well as emphasis and line breaks)&nbsp;and&nbsp;headings&nbsp;was covered in the&nbsp;HTML Beginner Tutorial. And for the same reason we use&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;and&nbsp;<code>h1</code>,&nbsp;<code>h2</code>, etc, there are a number of other tags we should also use to specifically represent other text-types, such as&nbsp;<strong>abbreviations</strong>,&nbsp;<strong>quotations</strong>, and computer&nbsp;<strong>code</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Abbreviations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>abbr</code>&nbsp;is used to markup an abbreviation, a shortened form of a word or phrase.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The expanded phrase that the abbreviation represents can be defined in the value of the&nbsp;<code>title</code>&nbsp;attribute. This is optional but recommended.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;This web site is about <strong>&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;</strong> and <strong>&lt;abbr title="Cascading Style Sheets"&gt;CSS&lt;/abbr&gt;</strong>.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Quotations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/blockquote/"><code>blockquote</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/q/"><code>q</code></a>&nbsp;are used for quotations.&nbsp;<a href="https://www.htmldog.com/references/html/tags/blockquote/"><code>blockquote</code></a>&nbsp;is generally used for standalone often multi-line quotations whereas&nbsp;<a href="https://www.htmldog.com/references/html/tags/q/"><code>q</code></a>&nbsp;is used for shorter, in-line quotations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the source of the quotation can be found on the Web, the&nbsp;<code>cite</code>&nbsp;attribute can be used to point to its origin.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;So I asked Bob about quotations on the Web and he said <strong>&lt;q&gt;I know as much about quotations as I do about pigeon fancying&lt;/q&gt;</strong>. Luckily, I found HTML Dog and it said:&lt;/p&gt;

<strong>&lt;blockquote cite="https://</strong>ndangelo.com<strong>"&gt;</strong>
    &lt;p&gt;blockquote and q are used for quotations. blockquote is generally used for standalone often multi-line quotations whereas q is used for shorter, in-line quotations.&lt;/p&gt;
<strong>&lt;/blockquote&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Blockquotes work very nicely with the HTML5 elements&nbsp;<a href="https://www.htmldog.com/references/html/tags/figure/"><code>figure</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/figcaption/"><code>figcaption</code></a>, enabling a nice, semantic way to group a quotation with a citation:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;figure&gt;
    &lt;blockquote&gt;[Big old quotation about evolution]&lt;/blockquote&gt;
    &lt;figcaption&gt;Charles Darwin&lt;/figcaption&gt;
&lt;/figure&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>But let’s not get carried away with that here - see the&nbsp;<a href="https://www.htmldog.com/guides/html/intermediate/sectioning/">article about Sectioning</a>&nbsp;for more.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Citations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Just to make things nice and confusing, as well as a&nbsp;<code>cite</code>&nbsp;attribute, there is also a&nbsp;<a href="https://www.htmldog.com/references/html/tags/cite/"><code>cite</code></a>&nbsp;tag. This can be used to define the title of a work, such as a book.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;According to <strong>&lt;cite&gt;the Bible&lt;/cite&gt;</strong>, after six days God said &lt;q&gt;screw this for a lark, I'm having a nap&lt;/q&gt;.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Code</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/code/"><code>code</code></a>&nbsp;is used to represent any form of computer&nbsp;<strong>code</strong>. Further,&nbsp;<a href="https://www.htmldog.com/references/html/tags/var/"><code>var</code></a>&nbsp;can be used for&nbsp;<strong>variables</strong>&nbsp;(which could be a variable in anything, not just in code - it could be a variable in an equation, for example),&nbsp;<a href="https://www.htmldog.com/references/html/tags/samp/"><code>samp</code></a>&nbsp;for sample&nbsp;<strong>output</strong>, and&nbsp;<a href="https://www.htmldog.com/references/html/tags/kbd/"><code>kbd</code></a>&nbsp;(keyboard) for user&nbsp;<strong>input</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;If you add the line <strong>&lt;code&gt;&lt;var&gt;givevaderachuckle&lt;/var&gt; = true;&lt;/code&gt;</strong> to the <strong>&lt;code&gt;destroy_planet&lt;/code&gt;</strong> subroutine and then type <strong>&lt;kbd&gt;ilovejabba&lt;/kbd&gt;</strong> into the console, the big bad green Death Star laser will etch <strong>&lt;samp&gt;Slug Lover!&lt;/samp&gt;</strong> on the planet's surface.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Preformatted text</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/pre/"><code>pre</code></a>&nbsp;is&nbsp;<strong>preformatted</strong>&nbsp;text and is unusual in HTML tags that it takes notice of every character in it, including the white space (whereas other elements will ignore a consecutive space or a line-break, for example). It is most commonly used for blocks of code, where spacing, such as indentations, can be relevant.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
<strong>&lt;pre&gt;</strong>&lt;code&gt;
&amp;lt;div id="intro"&amp;gt;
    &amp;lt;h1&amp;gt;Some heading&amp;lt;/h1&amp;gt;
    &amp;lt;p&amp;gt;Some paragraph paragraph thing thing thingy.&amp;lt;/p&amp;gt;
&amp;lt;/div&amp;gt;
&lt;/code&gt;<strong>&lt;/pre&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>As an example,&nbsp;<a href="https://www.htmldog.com/references/html/tags/pre/"><code>pre</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/code/"><code>code</code></a>&nbsp;are used extensively throughout this site. The code blocks, such as the one above, are&nbsp;<a href="https://www.htmldog.com/references/html/tags/code/"><code>code</code></a>&nbsp;elements inside&nbsp;<a href="https://www.htmldog.com/references/html/tags/pre/"><code>pre</code></a>&nbsp;elements. In-line references to tags and properties are simply&nbsp;<a href="https://www.htmldog.com/references/html/tags/code/"><code>code</code></a>&nbsp;elements, often inside&nbsp;<a href="https://www.htmldog.com/references/html/tags/a/"><code>a</code></a>&nbsp;elements to link to&nbsp;<a href="https://www.htmldog.com/references/">the reference section</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Meta Tags</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Once upon a time, many eons ago, when the Internet was just a small number of cardboard boxes attached to each other with string,&nbsp;<strong>meta tags</strong>&nbsp;were the town criers of the Internet… erm… town.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Meta tags don’t do anything to the content presented in the browser window, but search engines use them to catalog information about the web page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is one&nbsp;<a href="https://www.htmldog.com/references/html/tags/meta/"><code>meta</code></a>&nbsp;tag which can be used as many times as you desire inside a&nbsp;<code>head</code>&nbsp;element and they can contain the attributes&nbsp;<code>charset</code>,&nbsp;<code>name</code>,&nbsp;<code>http-equiv</code>, and&nbsp;<code>content</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When the&nbsp;<code>name</code>&nbsp;or&nbsp;<code>http-equiv</code>&nbsp;attribute is used, which is then used in conjunction with them to apply meta data.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Names</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>name</code>&nbsp;attribute can be anything you like. The most commonly used names are&nbsp;<code>author</code>,&nbsp;<code>description</code>, and&nbsp;<code>keywords</code>.&nbsp;<code>author</code>&nbsp;is used to explicitly state one of the HTML page’s authors and&nbsp;<code>description</code>&nbsp;is often used by search engines (such as Google) to display a web page description in its search results.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The reason why&nbsp;<a href="https://www.htmldog.com/references/html/tags/meta/"><code>meta</code></a>&nbsp;tags used to be so important was because they were relied on by search engines to build a profile of a web page. The&nbsp;<code>keywords</code>&nbsp;meta data was used (and abused) extensively, for example. Nowadays, however, most search engines use the actual content of the page itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">HTTP Equivalents</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>http-equiv</code>&nbsp;attribute can be used instead of the&nbsp;<code>name</code>&nbsp;attribute and will make an HTTP header, which is information sent to the server where the web page is held. The&nbsp;<strong>attribute</strong>&nbsp;should rarely be used (although see&nbsp;<code>charset</code>&nbsp;note, below) but the value can be:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>content-type</code>, an encoding declaration, defining what character set is being used,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>default-style</code>, the preferred stylesheet from a selection of&nbsp;<a href="https://www.htmldog.com/references/html/tags/link/"><code>link</code></a>&nbsp;or&nbsp;<a href="https://www.htmldog.com/references/html/tags/style/"><code>style</code></a>&nbsp;elements,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>or&nbsp;<code>refresh</code>, which defines how often (in seconds) a page automatically refreshes or if it should automatically redirect to another page. Not great for accessibility.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The charset attribute can be used as a shorthand method to define an HTML document’s character set, which is always a good thing to do.&nbsp;<code>&lt;meta charset="utf-8"&gt;</code>&nbsp;is the same as&nbsp;<code>&lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;head&gt;
    &lt;title&gt;Air conditioners? YEAH conditioners!&lt;/title&gt;
<strong>    &lt;meta charset="utf-8"&gt;</strong>
<strong>    &lt;meta http-equiv="refresh" content="3"&gt;</strong>&lt;!--not recommended for sane people--&gt;
<strong>    &lt;meta name="description" content="This is my really, really, REALLY exciting web page about air conditioners"&gt;</strong>
    ...
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Tables: rowspan and colspan</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Tables</strong>&nbsp;may have seemed complicated enough&nbsp;<a href="https://www.htmldog.com/guides/html/beginner/tables/">in the HTML Beginner Tutorial</a>. It can be quite difficult to visualize a two-dimensional grid from one-dimensional lines of code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Well, it gets trickier. All thanks to the&nbsp;<code>rowspan</code>&nbsp;and&nbsp;<code>colspan</code>&nbsp;attributes. Those bastards.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The following code is similar to that in&nbsp;<a href="https://www.htmldog.com/guides/html/beginner/tables/">the Tables page of the HTML Beginner Tutorial</a>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;table&gt;
    &lt;tr&gt;
        <strong>&lt;th&gt;</strong>Column 1 heading<strong>&lt;/th&gt;</strong>
        <strong>&lt;th&gt;</strong>Column 2 heading<strong>&lt;/th&gt;</strong>
        <strong>&lt;th&gt;</strong>Column 3 heading<strong>&lt;/th&gt;</strong>
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Row 2, cell 1&lt;/td&gt;
        &lt;td <strong>colspan="2"</strong>&gt;Row 2, cell 2, also spanning Row 2, cell 3&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td <strong>rowspan="2"</strong>&gt;Row 3, cell 1, also spanning Row 4, cell 1&lt;/td&gt;
        &lt;td&gt;Row 3, cell 2&lt;/td&gt;
        &lt;td&gt;Row 3, cell 3&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Row 4, cell 2&lt;/td&gt;
        &lt;td&gt;Row 4, cell 3&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The first difference is that the&nbsp;<a href="https://www.htmldog.com/references/html/tags/td/"><code>td</code></a>&nbsp;tags of the first row have been replaced with&nbsp;<a href="https://www.htmldog.com/references/html/tags/th/"><code>th</code></a>&nbsp;tags. Whereas a&nbsp;<a href="https://www.htmldog.com/references/html/tags/td/"><code>td</code></a>&nbsp;is a standard&nbsp;<strong>data</strong>&nbsp;cell,&nbsp;<a href="https://www.htmldog.com/references/html/tags/th/"><code>th</code></a>&nbsp;is a&nbsp;<strong>header</strong>&nbsp;cell. As with&nbsp;<a href="https://www.htmldog.com/references/html/tags/td/"><code>td</code></a>&nbsp;elements, these must be enclosed inside&nbsp;<a href="https://www.htmldog.com/references/html/tags/tr/"><code>tr</code></a>&nbsp;elements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Spanning columns and rows</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>colspan</code>&nbsp;and&nbsp;<code>rowspan</code>&nbsp;attributes have also been used in some of the&nbsp;<a href="https://www.htmldog.com/references/html/tags/td/"><code>td</code></a>&nbsp;tags. If you look at this code in a browser, you will see that on the second row there are now two cells instead of three, the second cell spanning the second and third column. The&nbsp;<code>colspan</code>&nbsp;attribute, which means “column span” will span the cell over the number of cells that is specified. This means, in this example, that there is no need for a third&nbsp;<a href="https://www.htmldog.com/references/html/tags/td/"><code>td</code></a>&nbsp;element — two cells are&nbsp;<strong>merged</strong>&nbsp;into one.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>rowspan</code>&nbsp;attribute is similar to&nbsp;<code>colspan</code>, except, obviously, it will span across rows rather than columns. Again, the cells that it spans should be removed. In this example, because it spans over the fourth row, there are only two cells in that row.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As with the simpler 3x4, 12-cell table, the numbers on these tables with merged cells should also add up. Although there are only 10 cells in this example, there are 2 spans.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Description Lists</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Description lists</strong>&nbsp;are quite often forgotten. This is maybe because they are much more specific than ordered and unordered lists and therefore less useful, generally, but where there is a list of terms and descriptions (such as a glossary), a description list is your go-to-element.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/dl/"><code>dl</code></a>&nbsp;gets the ball rolling, similar to the&nbsp;<a href="https://www.htmldog.com/references/html/tags/ul/"><code>ul</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/ol/"><code>ol</code></a>&nbsp;elements, establishing the list. Rather than containing&nbsp;<a href="https://www.htmldog.com/references/html/tags/li/"><code>li</code></a>&nbsp;elements, though, description lists have&nbsp;<a href="https://www.htmldog.com/references/html/tags/dt/"><code>dt</code></a>&nbsp;elements, which are the&nbsp;<strong>terms</strong>, followed by&nbsp;<a href="https://www.htmldog.com/references/html/tags/dd/"><code>dd</code></a>&nbsp;elements, which are the&nbsp;<strong>descriptions</strong>&nbsp;associated to the&nbsp;<a href="https://www.htmldog.com/references/html/tags/dt/"><code>dt</code></a>&nbsp;elements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There doesn’t have to be one&nbsp;<a href="https://www.htmldog.com/references/html/tags/dt/"><code>dt</code></a>&nbsp;followed by one&nbsp;<a href="https://www.htmldog.com/references/html/tags/dd/"><code>dd</code></a>, there can be any number of either. For example, if there are a number of words that have the same meaning, there might be a number of&nbsp;<a href="https://www.htmldog.com/references/html/tags/dt/"><code>dt</code></a>’s followed by one&nbsp;<a href="https://www.htmldog.com/references/html/tags/dd/"><code>dd</code></a>. If you have one word that means various different things, there might be one&nbsp;<a href="https://www.htmldog.com/references/html/tags/dt/"><code>dt</code></a>&nbsp;followed by several&nbsp;<a href="https://www.htmldog.com/references/html/tags/dd/"><code>dd</code></a>’s.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;h1&gt;Some random glossary thing&lt;/h1&gt;
&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;Abbreviation for HyperText Markup Language - a language used to make web pages.&lt;/dd&gt;

    &lt;dt&gt;Dog&lt;/dt&gt;
    &lt;dd&gt;Any carnivorous animal belonging to the family Canidae.&lt;/dd&gt;
    &lt;dd&gt;The domesticated sub-species of the family Canidae, Canis lupus familiaris.&lt;/dd&gt;

    &lt;dt&gt;Moo juice&lt;/dt&gt;
    &lt;dt&gt;Cat beer&lt;/dt&gt;
    &lt;dt&gt;Milk&lt;/dt&gt;
    &lt;dd&gt;A white liquid produced by cows and used for human consumption.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Text: Addresses, Definitions, Bi-directional, and Editorial</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>OK, so we should all be know by now that there are lots of tags for text. We’ve done&nbsp;paragraphs, we’ve done&nbsp;headings, we’ve even done&nbsp;abbreviations, quotations, and code. And there are several other, more obscure tags that can be used. Obscure because you won’t find them plastered around the Web, not because they are unhelpful. If you find you have text that fits these elements’ descriptions, you will have a nicer, richer, more meaningful HTML page if you use them.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Addresses</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>address</code>&nbsp;should be used specifically for the&nbsp;<strong>contact details</strong>&nbsp;relating either to the entire web page (and so only used once) or to an&nbsp;<code>article</code>&nbsp;element (see&nbsp;Sectioning). It’s isn’t, as it might at first appear, for marking up any old address willy-nilly.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;h3&gt;Author contact details&lt;/h3&gt;
<strong>&lt;address&gt;</strong>
&lt;ul&gt;
    &lt;li&gt;0123-456-7890&lt;/li&gt;
    &lt;li&gt;author_dude@noplaceinteresting.com&lt;/li&gt;
    &lt;li&gt;http://www.noplaceinteresting.com/contactme/&lt;/li&gt;
&lt;/ul&gt;
<strong>&lt;/address&gt;</strong></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Definition terms</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/dfn/"><code>dfn</code></a>&nbsp;is a&nbsp;<strong>definition</strong>&nbsp;term and is used to highlight the first use of a term. Like&nbsp;<a href="https://www.htmldog.com/references/html/tags/abbr/"><code>abbr</code></a>, the&nbsp;<code>title</code>&nbsp;attribute can be used to describe the term.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;Bob's <strong>&lt;dfn title="Dog"&gt;canine&lt;/dfn&gt;</strong> mother and <strong>&lt;dfn title="Horse"&gt;equine&lt;/dfn&gt;</strong> father sat him down and carefully explained that he was an <strong>&lt;dfn title="A mutation that combines two or more sets of chromosomes from different species"&gt;allopolyploid&lt;/dfn&gt;</strong> organism.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Bi-directional text</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/bdo/"><code>bdo</code></a>&nbsp;can be used to reverse the&nbsp;<strong>direction</strong>&nbsp;of the text, and can be used to display languages that read right to left. The value of the required attribute&nbsp;<code>dir</code>&nbsp;can be&nbsp;<code>ltr</code>&nbsp;(left to right) or&nbsp;<code>rtl</code>&nbsp;(right to left).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;bdo dir="rtl"&gt;god lmth&lt;/bdo&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Editorial</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/ins/"><code>ins</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/del/"><code>del</code></a>&nbsp;are used to display editorial&nbsp;<strong>insertions</strong>&nbsp;and&nbsp;<strong>deletions</strong>&nbsp;respectively. Strictly speaking, they aren’t limited to text and can be used over whole swathes of content but, typically, they are used in moderation just like “Track Changes” feature in word processors tend to be.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They can have the attributes&nbsp;<code>datetime</code>&nbsp;to indicate when the edit was made and&nbsp;<code>cite</code>, to point to a description as to why the edit has been made.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;I have decided to <strong>&lt;del datetime="2013-01-26"&gt;decrease&lt;/del&gt;</strong> <strong>&lt;ins cite="http://www.icecreamforall.com/changeofpolicy/"&gt;increase&lt;/ins&gt;</strong> the amount of free ice cream that the State will provide for its citizens.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>As with traditional word processor-based editing, the&nbsp;<a href="https://www.htmldog.com/references/html/tags/ins/"><code>ins</code></a>&nbsp;element is typically shown&nbsp;<strong>underlined</strong>&nbsp;and the&nbsp;<a href="https://www.htmldog.com/references/html/tags/del/"><code>del</code></a>&nbsp;element is usually displayed with a&nbsp;<strong>strikethrough</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>And there’s yet more… HTML 5 brings with it even more text-related elements. See the&nbsp;<a href="https://www.htmldog.com/guides/html/advanced/text">final article on text in the HTML Advanced Guide</a>, complete with a look at the reclassification of the dreaded “presentational” elements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Sectioning</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While&nbsp;<a href="https://www.htmldog.com/guides/html/beginner/headings/">headings</a>&nbsp;do a grand, perfectly valid, job in defining the&nbsp;<strong>start</strong>&nbsp;of a new section or sub-section in a document, there are a number of elements that can be exploited to establish a cleaner, clearer semantic structure.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Whereas div elements can be used to contain sections, used primarily as scaffolding on which to hang CSS, they don’t hold a great deal of&nbsp;<strong>meaning</strong>. Sectioning involves a handful of tags that can be used to define specific parts of a page, such as&nbsp;<strong>articles</strong>,&nbsp;<strong>headers</strong>,&nbsp;<strong>footers</strong>, and&nbsp;<strong>navigation</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Articles and Sections</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An&nbsp;<a href="https://www.htmldog.com/references/html/tags/article/"><code>article</code></a>&nbsp;element can be used to mark up a&nbsp;<strong>standalone section</strong>&nbsp;of content. This could be used just once, if you think of a blog post as an article, for example, or a number of times, if you imagine replicating a traditional newspaper page with numerous articles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A&nbsp;<a href="https://www.htmldog.com/references/html/tags/section/"><code>section</code></a>&nbsp;element represents a more&nbsp;<strong>general section</strong>&nbsp;and could be used to split up an article, or to represent chapters, for example.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
<strong>&lt;article&gt;</strong>
    <strong>&lt;section id="intro"&gt;</strong>
        &lt;p&gt;[An introduction]&lt;/p&gt;
    <strong>&lt;/section&gt;</strong>
    <strong>&lt;section id="main_content"&gt;</strong>
        &lt;p&gt;[Content]&lt;/p&gt;
    <strong>&lt;/section&gt;</strong>
    <strong>&lt;section id="related"&gt;</strong>
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="that.html"&gt;That related article&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="this.html"&gt;This related article&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    <strong>&lt;/section&gt;</strong>
<strong>&lt;/article&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>While&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>s could be used to make these separations (or even if you didn’t need these separations for styling), this provides a much richer, more meaningful document.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The HTML5 specifications suggest that you can use&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>&nbsp;elements at the start of each section, which would become a sub-heading of anything preceding that section (so, in the example above, if you had an&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>&nbsp;immediately following the opening&nbsp;<a href="https://www.htmldog.com/references/html/tags/article/"><code>article</code></a>&nbsp;tag, an&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>&nbsp;immediately after an opening&nbsp;<a href="https://www.htmldog.com/references/html/tags/section/"><code>section</code></a>&nbsp;tag would be a&nbsp;<strong>sub-heading</strong>&nbsp;of that initial&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>). This screws backwards compatibility, however, and any user agents (including screen readers) that don’t understand this won’t apply properly structured heading levels. We suggest sticking to the headings levels you would use if you didn’t use sections (so&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>, followed by&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h2</code></a>, etc, regardless of the sectioning). This doesn’t break anything or detract from the meaning or semantics.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Headers and Footers</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/html/tags/header/"><code>header</code></a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/footer/"><code>footer</code></a>&nbsp;provide further specialized, self-descriptive, sections:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">
&lt;body&gt;
&lt;article&gt;
    <strong>&lt;header&gt;</strong>
        &lt;h1&gt;Alternatively&amp;hellip;&lt;/h1&gt;
        &lt;p&gt;[An introduction]&lt;/p&gt;
    <strong>&lt;/header&gt;</strong>
    &lt;section id="main_content"&gt;
        &lt;p&gt;[Content]&lt;/p&gt;
    &lt;/section&gt;
    <strong>&lt;footer&gt;</strong>
        &lt;p&gt;[End notes]&lt;/p&gt;
    <strong>&lt;/footer&gt;</strong>
&lt;/article&gt;
<strong>&lt;footer&gt;</strong>
    &lt;p&gt;[Copyright bumf]&lt;/p&gt;
<strong>&lt;/footer&gt;</strong>
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://www.htmldog.com/references/html/tags/footer/"><code>footer</code></a>&nbsp;is the footer of the section in which it is contained. So, in the above example, the first&nbsp;<a href="https://www.htmldog.com/references/html/tags/footer/"><code>footer</code></a>&nbsp;is the footer of the article and the second&nbsp;<a href="https://www.htmldog.com/references/html/tags/footer/"><code>footer</code></a>&nbsp;is the footer of the page.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Asides</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An&nbsp;<a href="https://www.htmldog.com/references/html/tags/aside/"><code>aside</code></a>&nbsp;can be used to represent content that is&nbsp;<strong>related</strong>&nbsp;the content surrounding it. Think of pull-quotes or snippets of related information in an article:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;section id="main_content"&gt;
    &lt;h1&gt;Tixall&lt;/h1&gt;
    &lt;p&gt;[All about Tixall]&lt;/p&gt;
    <strong>&lt;aside&gt;</strong>
        &lt;h2&gt;Tixall Obelisk&lt;/h2&gt;
        &lt;p&gt;[A short note about Tixall Obelisk]&lt;/p&gt;
    <strong>&lt;/aside&gt;</strong>
    &lt;p&gt;[Maybe a bit more about Tixall]&lt;/p&gt;
&lt;/section&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>While we’re at this structure-love, if you want to include figures, there happens to be two tags for doing just that:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
<strong>&lt;figure&gt;</strong>
    &lt;img src="obelisk.jpg"&gt;
    <strong>&lt;figcaption&gt;</strong>Tixall Obelisk<strong>&lt;/figcaption&gt;</strong>
<strong>&lt;/figure&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that the&nbsp;<a href="https://www.htmldog.com/references/html/tags/img/"><code>img</code></a>&nbsp;element doesn’t need an&nbsp;<code>alt</code>&nbsp;attribute IF the&nbsp;<a href="https://www.htmldog.com/references/html/tags/figcaption/"><code>figcaption</code></a>&nbsp;(that’s “figure caption”, in case you need it spelling out) does that job.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Navigation</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Finally, there’s&nbsp;<a href="https://www.htmldog.com/references/html/tags/nav/"><code>nav</code></a>, used to mark up a group of&nbsp;<strong>navigation links</strong>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">
<strong>&lt;nav id="main_nav"&gt;</strong>
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="/tutorials/"&gt;Tutorials&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/techniques/"&gt;Techniques&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/examples/"&gt;Examples&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/references/"&gt;References&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
<strong>&lt;/nav&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This could also be used for in-page navigation (<code>&lt;a href="#overthere"&gt;...</code>&nbsp;etc.) but it isn’t necessary for every group of links - it is designed for major groupings. A copyright, author, and contact link could sit happily by themselves in a&nbsp;<a href="https://www.htmldog.com/references/html/tags/footer/"><code>footer</code></a>&nbsp;element, for example.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to style these new HTML 5 elements (and you probably do, right? It’s much nicer than using&nbsp;<code>&lt;div id="content"&gt;...</code>, etc) you will experience a problem in older browsers, most notably Internet Explorer versions 8 and earlier, that don’t understand these tags.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://code.google.com/p/html5shiv/">HTML5Shiv</a>&nbsp;can come to your rescue, however; a small piece of JavaScript, slotted in to your&nbsp;<a href="https://www.htmldog.com/references/html/tags/head/"><code>head</code></a>&nbsp;element, that teaches the remedial browsers and holds their hands so that you can use new HTML 5 tags and style them up to your heart’s content with CSS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s your call if you want to use a JavaScript fudge or stick with the safe old (and, again, perfectly valid) but semantically poorer headings and divs approach. This site, along with many others, chooses the former. Because HTML 5’s loveliness just about outweighs a hack’s ugliness.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">End of Intermediate HTML</h1>
<!-- /wp:heading -->
