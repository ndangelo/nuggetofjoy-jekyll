---
title: "HTML/CSS Reference for DMET 155/355"
date: "2023-08-28 13:57:47"
layout: post
permalink: "/html-css-reference-for-dmet-155-introduction-to-web/"
categories: ["dmet-155-introduction-to-web-design"]
tags: []
wordpress_id: "62881"
---

<!-- wp:image {"align":"center","id":62743,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image aligncenter size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/file_structure-1-1024x456.jpg" alt="" class="wp-image-62743"/><figcaption class="wp-element-caption"><a href="#html-tag">Basic Directory Structure for a Static Site</a></figcaption></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:code {"backgroundColor":"black","fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-black-background-color has-background has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    This is my first web page
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The first line on the top,&nbsp;<code>&lt;!DOCTYPE html&gt;</code>, is a&nbsp;<strong>document type declaration</strong>&nbsp;that lets the browser know which flavor of HTML you’re using (HTML5, in this case). </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>&lt;html&gt;</code>&nbsp;is the&nbsp;<strong>opening tag</strong>&nbsp;that kicks things off and tells the browser that everything between that and the&nbsp;<code>&lt;/html&gt;</code>&nbsp;<strong>closing tag</strong>&nbsp;is an HTML document. The stuff between&nbsp;<code>&lt;body&gt;</code>&nbsp;and&nbsp;<code>&lt;/body&gt;</code>&nbsp;is the main content of the document that will appear in the browser window.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white","className":"wp-block-heading h1 { border-radius: 5px;}","fontSize":"large"} -->
<h1 class="wp-block-heading has-text-align-center h1 { border-radius: 5px;} has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-large-font-size" id="html-tag">HTML Tag:&nbsp;<strong><dfn><code>html</code></dfn></strong></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p id="html-tag">A web page’s&nbsp;<strong>root</strong>&nbsp;element. The big daddy. The ancestor of all elements. The element <strong>that wraps its arms around all other elements</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;title&gt;The Title of the Page&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- content --&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Elements</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Tags tend not to do much more than mark the beginning and end of an element. Elements are the bits that make up web pages. You would say, for example, that everything that is in between (and includes) the&nbsp;<code>&lt;body&gt;</code>&nbsp;and&nbsp;<code>&lt;/body&gt;</code>&nbsp;tags is the body element. As another example, whereas “<code>&lt;title&gt;</code>” and “<code>&lt;/title&gt;</code>” are&nbsp;<strong>tags</strong>, “<code>&lt;title&gt;Rumple Stiltskin&lt;/title&gt;</code>” is a title&nbsp;<strong>element</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Attributes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Tags can also have&nbsp;<strong>attributes</strong>, which are extra bits of information. Attributes appear inside the opening tag and their values sit inside quotation marks. They look something like&nbsp;<strong><code>&lt;tag attribute="value"&gt;Margarine&lt;/tag&gt;</code>.</strong> We will come across tags with attributes later.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once again, quotation marks aren’t always essential but it is a good-practice convention HTML Dog uses for consistency and clarity. We suggest you do the same.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Elements</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Tags tend not to do much more than mark the beginning and end of an element. Elements are the bits that make up web pages. You would say, for example, that everything that is in between (and includes) the&nbsp;<code>&lt;body&gt;</code>&nbsp;and&nbsp;<code>&lt;/body&gt;</code>&nbsp;tags is the body element. As another example, whereas “<code>&lt;title&gt;</code>” and “<code>&lt;/title&gt;</code>” are&nbsp;<strong>tags</strong>, “<code>&lt;title&gt;Rumple Stiltskin&lt;/title&gt;</code>” is a title&nbsp;<strong>element</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;title&gt;” and “&lt;/title&gt;” are tags, “&lt;title&gt;This is the title of the page&lt;/title&gt;” is a title element.</code></pre>
<!-- /wp:code -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white","fontSize":"x-large"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-x-large-font-size">HTML Tag:&nbsp;<strong><dfn><code>head</code></dfn></strong></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Where&nbsp;<strong>metadata</strong>&nbsp;— information about the document — is placed. It should be the first element inside an&nbsp;<code>html</code>&nbsp;element.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A&nbsp;<code>title</code>&nbsp;element is required within the&nbsp;<code>head</code>&nbsp;element.<strong>&nbsp;<code>meta</code>,&nbsp;<code>style</code>,&nbsp;<code>base</code>,&nbsp;<code>link</code>, and&nbsp;<code>script</code></strong>&nbsp;can also be used.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>head</code>&nbsp;is required and it should be used just once. It should start immediately after the opening&nbsp;<code>html</code>&nbsp;tag and end directly before the opening&nbsp;<code>body</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;title&gt;This is the title of the page&lt;/title&gt;
        &lt;link href="style.css" rel="stylesheet"&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- content --&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Page Titles</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>All HTML pages should have a page&nbsp;<strong>title</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To add a title to your page, change your code so that it looks like this:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We have added two new elements here, that start with the&nbsp;<code>head</code>&nbsp;tag and the&nbsp;<code>title</code>&nbsp;tag (and see how both of these close).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The head element (that which starts with the&nbsp;<code>&lt;head&gt;</code>&nbsp;opening tag and ends with the&nbsp;<code>&lt;/head&gt;</code>&nbsp;closing tag) appears before the body element (starting with&nbsp;<code>&lt;body&gt;</code>&nbsp;and ending with&nbsp;<code>&lt;/body&gt;</code>) and contains information&nbsp;<strong>about</strong>&nbsp;the page. The information in the head element does not appear in the browser window.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My first web page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    This is my first web page
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">HTML Tag:&nbsp;<strong><dfn><code>body</code></dfn></strong></h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The main&nbsp;<strong>content area</strong>&nbsp;of an HTML document.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You must use this element and it should be used just once. It should start immediately after the closing&nbsp;<code>head</code>&nbsp;tag and end directly before the closing&nbsp;<code>html</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;title&gt;Content&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- Content --&gt;
    &lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Paragraphs</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Now that you have the basic structure of an HTML document, you can explore content a bit.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Go back to your text editor and add another line to your page:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My first web page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    This is my first web page
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Look at the document in your browser.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You might have expected your document to appear as you typed it, on two lines, but instead you should see something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code><strong>This is my first web page How exciting.</strong></code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is because web browsers don’t usually notice what line your code is on. It also doesn’t take any notice of spaces (you would get the same result if you typed “This is my first web page".</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want text to appear on different lines or, rather, if you intend there to be two distinct blocks of text (because, remember, HTML is about meaning, not presentation), you need to state that explicitly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Change your two lines of content so that they look like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;p&gt;This is my first web page&lt;/p&gt;
&lt;p&gt;How exciting&lt;/p&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>p</code>&nbsp;tag is used for&nbsp;<strong>paragraphs</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Look at the results of this. The two lines will now appear on two lines because the browser recognizes them as separate paragraphs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Think of the HTML content as a book - with paragraphs where appropriate.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","backgroundColor":"luminous-vivid-amber","className":"remove-bottom-space remove-bottom-padding remove-margin-bottom "} -->
<h2 class="wp-block-heading has-text-align-center remove-bottom-space remove-bottom-padding remove-margin-bottom has-luminous-vivid-amber-background-color has-background"><strong>Assignment</strong></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:list {"backgroundColor":"luminous-vivid-amber","textColor":"black","className":"remove-top-space remove-top-padding remove-margin-top","fontSize":"medium"} -->
<ul class="remove-top-space remove-top-padding remove-margin-top has-black-color has-luminous-vivid-amber-background-color has-text-color has-background has-medium-font-size"><!-- wp:list-item -->
<li>1. Create an HTML page using the above code. Remember to use all the examples in this exercise.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>html</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>head</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>title</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>body</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>h1</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>p</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>h2</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ul</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>ol</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>li</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>a</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>strong</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>2. Create an Index page. We will all make one. I will guide you through it.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></div>
<!-- /wp:group -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Emphasis</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can emphasize text in a paragraph using&nbsp;<strong>em</strong>&nbsp;(emphasis) and&nbsp;<strong>strong</strong>&nbsp;(strong importance).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;p&gt;That &lt;em&gt;is&lt;/em&gt; interesting.&lt;/p&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"textColor":"vivid-cyan-blue"} -->
<h1 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Line breaks</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The line-break tag can also be used to separate lines like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
This is my first web page<strong>&lt;br&gt;</strong>
How exciting
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>There’s no content involved in breaking lines so there is no closing tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It could be tempting to over-use line breaks and&nbsp;<code>br</code>&nbsp;shouldn’t be used if two blocks of text are intended to be separate from one another (because if that’s what you want to do you probably want the<strong>&nbsp;p</strong>&nbsp;tag).</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Lists</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are three types of list;&nbsp;<strong>unordered lists</strong>,&nbsp;<strong>ordered lists</strong>&nbsp;and definition lists. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unordered lists and ordered lists work the same way, except that the former is used for non-sequential lists with list items usually preceded by bullets and the latter is for sequential lists, which are normally represented by incremental numbers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code><strong>ul</strong></code>&nbsp;tag is used to define unordered lists and the&nbsp;<code><strong>o</strong></code><strong><code>l</code></strong>&nbsp;tag is used to define ordered lists. Inside the lists, the&nbsp;<code><strong>li</strong></code>&nbsp;tag is used to define each list item.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;My first web page&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;My first web page&lt;/h1&gt;

    &lt;h2&gt;What this is&lt;/h2&gt;
    &lt;p&gt;A simple page put together using HTML&lt;/p&gt;

    &lt;h2&gt;Why this is&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;To learn HTML&lt;/li&gt;
        &lt;li&gt;Apple&lt;/li&gt;
        &lt;li&gt;This is an example of a sentence in a list&lt;/li&gt;
    &lt;/ul&gt;

&lt;/body&gt;

&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If you look at this in your browser, you will see a bulleted list. Change the&nbsp;<code><strong>ul</strong></code>&nbsp;tags to<strong>&nbsp;<code>ol</code></strong>&nbsp;and you will see that the list will become numbered.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Lists can also be included in lists to form a structured hierarchy of items.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Replace the above list code with the following:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;ul&gt;
    &lt;li&gt;To learn HTML&lt;/li&gt;
    &lt;li&gt;
        To show off
        &lt;ol&gt;
            &lt;li&gt;To my boss&lt;/li&gt;
            &lt;li&gt;To my friends&lt;/li&gt;
            &lt;li&gt;To my cat&lt;/li&gt;
            &lt;li&gt;Hello to all my friends&lt;/li&gt;
        &lt;/ol&gt;
    &lt;/li&gt;
    &lt;li&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A list within a list. And you could put another list within that. And another within that. And so on and so forth.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Links</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So far you’ve been making a stand-alone web page, which is all very well and nice, but what makes the Internet so special is that it all&nbsp;<strong>links</strong>&nbsp;together.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The “H” and “T” in “HTML” stand for “hypertext”, which means a system of linked text.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An&nbsp;<strong>anchor</strong>&nbsp;tag (<code>a</code>) is used to define a link, but you must also add something to the anchor tag — the&nbsp;<span style="background-color: rgba(0, 0, 0, 0.2);"><b>link's de</b></span><strong>stination</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Add this to your document:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;My first web page&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;h1&gt;My first web page&lt;/h1&gt;

    &lt;h2&gt;What this is&lt;/h2&gt;
    &lt;p&gt;A simple page put together using HTML&lt;/p&gt;

    &lt;h2&gt;Why this is&lt;/h2&gt;
    &lt;p&gt;To learn HTML&lt;/p&gt;

    &lt;h2&gt;ESU's Homepage&lt;/h2&gt;
    &lt;p&gt;&lt;a href="http://www.esu.edu"&gt;ESU&lt;/a&gt;&lt;/p&gt;

&lt;/body&gt;

&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The destination of the link is defined in the&nbsp;<code>href</code>&nbsp;attribute of the tag. The link can be absolute, such as<strong> “https://www.ndangelo.com”,</strong> or it can be relative to the current page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So if, for example, you had another file called “flyingmoss.html” in the same directory then the line of code would be<strong>&nbsp;<code>&lt;a href="flyingmoss.html"&gt;The miracle of moss in flight&lt;/a&gt;</code></strong>&nbsp;or something like this.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A link does not have to link to another HTML file, it can link to any file anywhere on the web.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Images</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The web is not just about text, it is a multi-media extravaganza and the most common form of sparkle is the&nbsp;<strong>image</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code><strong>img</strong></code>&nbsp;tag is used to put an image in an HTML document and it looks like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;img src="test-image.gif" width="120" height="90" alt="Test"&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>src</code>&nbsp;attribute tells the browser where to find the image. Like the&nbsp;<code>a</code><strong>&nbsp;</strong>tag, this can be absolute, as the above example demonstrates, but is usually relative. For example, if you create your own image and save it as “alien.jpg” in a directory called “images” then the code would be&nbsp;<code>&lt;img src="images/alien.jpg"...</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>width</code>&nbsp;and&nbsp;<code>height</code>&nbsp;attributes are necessary because if they are excluded, the browser will tend to calculate the size as the image loads, instead of when the page loads, which means that the layout of the document may jump around while the page is loading.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>alt</code>&nbsp;attribute is the&nbsp;<strong>alternative description</strong>. This is an <strong>accessibility consideration</strong>, providing meaningful information for users who cannot see the image (if they are visually impaired).</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Putting It All Together</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The following code incorporates all of the methods that have been explained in the previous pages:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;

&lt;html&gt;

&lt;head&gt;

    &lt;title&gt;My first web page&lt;/title&gt;

    &lt;!-- This is a comment, by the way --&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;h1&gt;My first web page&lt;/h1&gt;

&lt;h2&gt;What this is&lt;/h2&gt;
&lt;p&gt;A simple page put together using HTML. &lt;em&gt;I said a simple page put together using HTML.&lt;/em&gt; A simple page put together using HTML. A simple page put together using HTML. A simple page put together using HTML. A simple page put together using HTML. A simple page put together using HTML. A simple page put together using HTML. A simple page put together using HTML.&lt;/p&gt;

&lt;h2&gt;Why this is&lt;/h2&gt;
&lt;ul&gt;
    &lt;li&gt;To learn HTML&lt;/li&gt;
    &lt;li&gt;
        To illustrate
        &lt;ol&gt;
            &lt;li&gt;To my boss&lt;/li&gt;
            &lt;li&gt;To my friends&lt;/li&gt;
            &lt;li&gt;To my cat&lt;/li&gt;
            &lt;li&gt;I'm not sure what&lt;/li&gt;
        &lt;/ol&gt;
    &lt;/li&gt;
    &lt;li&gt;Some interesting content&lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;Where to find the tutorial&lt;/h2&gt;
&lt;p&gt;&lt;a href="http://www.esu.edu"&gt;&lt;img src="test-image.gif" width="120" height="90" alt="ESU"&gt;&lt;/a&gt;&lt;/p&gt;


&lt;h3&gt;Some random form&lt;/h3&gt;
&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; It looks the part, but won't function.&lt;/p&gt;


&lt;/body&gt;

&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Span and Div</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML is all about applying&nbsp;<strong>meaning</strong>&nbsp;to content. Whereas most HTML tags apply meaning (<code><strong>p</strong></code>&nbsp;makes a paragraph,&nbsp;<code><strong>h1</strong></code>&nbsp;makes a heading etc.), the&nbsp;<code>span</code>&nbsp;and&nbsp;<code>div</code>&nbsp;tags apply no meaning at all. They are used extensively in conjunction with CSS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They are used to group together a chunk of HTML and hook some information onto that chunk, most commonly with the attributes&nbsp;<code>class</code>&nbsp;and&nbsp;<code>id</code>&nbsp;to associate the element with a&nbsp;<strong>class or id CSS selector.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The difference between&nbsp;<code><strong>span</strong></code>&nbsp;and&nbsp;<code><strong>div</strong></code>&nbsp;is that a&nbsp;<code><strong>span</strong></code>&nbsp;element is&nbsp;<strong>in-line</strong>&nbsp;and usually used for small snippets of HTML inside a line (such as inside a paragraph), whereas a&nbsp;<code><strong>div</strong></code>&nbsp;(division) element is&nbsp;<strong>block-line</strong>&nbsp;(which is equivalent to having a line-break before and after it) and used to group larger snippets of code.</p>
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
<p><code><strong>div</strong></code>, and especially&nbsp;<code><strong>span</strong></code>, shouldn’t be used that often. Whenever there is a sensible alternative that should be used instead. For example, if you want to emphasize the word “crazy” and the class “paper” is adding italics for visual emphasis, then, for richer, more meaningful content, the code might look like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;div id="scissors"&gt;
    &lt;p&gt;This is <strong>&lt;em class="paper"&gt;</strong>crazy<strong>&lt;/em&gt;</strong>&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>While they are not replacements for the&nbsp;<code>div</code>&nbsp;tag, HTML 5 introduces several tags used for grouping blocks of code together and adding meaning at the same time. Such as<strong>&nbsp;<code>article</code>,&nbsp;<code>header</code>,&nbsp;<code>footer</code></strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">CSS Cheat Sheet</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":63037,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="http://nuggetofjoy.com/wp-content/uploads/css_cheat_2-1-1024x728.png" alt="CSS Cheat Sheet" class="wp-image-63037"/></figure>
<!-- /wp:image -->

<!-- wp:tadv/classic-paragraph /-->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset="utf-8"&gt;
	&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
	&lt;title&gt;Index Page&lt;/title&gt;

&lt;style type="text/css"&gt;

	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400&amp;display=swap');
	
	.wrapper {
		font-family: 'Montserrat', sans-serif;
		width: 400px;
		height: 800px;
		border: solid 2px red;
		margin: auto;
		text-align: center;
	}

	ul, li {

	text-align: center;
	list-style-type: none;
	padding-right: 20px;

	}



&lt;/style&gt;

&lt;/head&gt;
&lt;body&gt;

	&lt;div class="wrapper"&gt;
		
&lt;h1&gt;Intro to Web Assignments&lt;/h1&gt;

&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;

&lt;ul&gt;

&lt;li&gt;&lt;a href="content.html" target="_blank"&gt;Content&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="start.html" target="_blank"&gt;start&lt;/a&gt;&lt;/li&gt;


&lt;/ul&gt;

&lt;img src="images/nd_logo_blog-2.png"&gt;
	&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="OepEEP" user="christinatruong"]See the Pen <a href="https://codepen.io/christinatruong/pen/OepEEP">
  Layouts and the Box Model</a> by Christina Truong (<a href="https://codepen.io/christinatruong">@christinatruong</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>The following is some code I created on codepen.io. It includes div nesting, which we covered in class. The "pen" also has advanced CSS to make each div stand out.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a rel="noreferrer noopener" href="https://www.htmldog.com/" target="_blank">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="wvGbEmX" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/wvGbEmX">
  albers</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

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
<p><code><strong>blockquote</strong></code>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/q/"><code>q</code></a>&nbsp;are used for quotations.&nbsp;<code><strong>blockquote</strong></code>&nbsp;is generally used for standalone often multi-line quotations whereas&nbsp;<code><strong>q</strong></code>&nbsp;is used for shorter, in-line quotations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If the source of the quotation can be found on the Web, the&nbsp;<code>cite</code>&nbsp;attribute can be used to point to its origin.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;So I asked Bob about quotations on the Web and he said <strong>&lt;q&gt;</strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium<strong>&lt;/q&gt;</strong>. It said:&lt;/p&gt;

<strong>&lt;blockquote cite="https://</strong>ndangelo.com<strong>"&gt;</strong>
    &lt;p&gt;blockquote and q are used for quotations. blockquote is generally used for standalone often multi-line quotations whereas q is used for shorter, in-line quotations.&lt;/p&gt;
<strong>&lt;/blockquote&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Blockquotes work very nicely with the HTML5 elements&nbsp;<code><strong>figure</strong></code>&nbsp;and&nbsp;<code><strong>figcaption</strong></code>, enabling a nice, semantic way to group a quotation with a citation:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;figure&gt;
    &lt;blockquote&gt;[Big old quotation about evolution]&lt;/blockquote&gt;
    &lt;figcaption&gt;Charles Darwin&lt;/figcaption&gt;
&lt;/figure&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Citations</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To make things nice and confusing, as well as a&nbsp;<code><strong>cite</strong></code>&nbsp;attribute, there is also a&nbsp;<code><strong>cite</strong></code>&nbsp;tag. This can be used to define the title of a work, such as a book.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;According to <strong>&lt;cite&gt;My tax bill&lt;/cite&gt;</strong>, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium&lt;/q&gt;.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Code</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code><strong>code</strong></code>&nbsp;is used to represent any form of computer&nbsp;<strong>code</strong>. Further,&nbsp;<code><strong>var</strong></code>&nbsp;can be used for&nbsp;<strong>variables</strong>&nbsp;(which could be a variable in anything, not just in code - it could be a variable in an equation, for example),&nbsp;<code><strong>samp</strong></code>&nbsp;for sample&nbsp;<strong>output</strong>, and&nbsp;<code><strong>kbd</strong></code>&nbsp;(keyboard) for user&nbsp;<strong>input</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;p&gt;If you add the line <strong>&lt;code&gt;&lt;var&gt;provide&lt;/var&gt; = true;&lt;/code&gt;</strong> to the <strong>&lt;code&gt;planet&lt;/code&gt;</strong> subroutine and then type <strong>&lt;kbd&gt;Help&lt;/kbd&gt;</strong> into the console, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <strong>&lt;samp&gt;Help!&lt;/samp&gt;</strong> error sit voluptatem.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Preformatted text</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code><strong>pre</strong></code>&nbsp;is&nbsp;<strong>preformatted</strong>&nbsp;text and is unusual in HTML tags in that it takes notice of every character in it, including the white space (whereas other elements will ignore a consecutive space or a line-break, for example). It is most commonly used for blocks of code, where spacing, such as indentations, can be relevant.</p>
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
<p>As an example,&nbsp;<code><strong>pre</strong></code>&nbsp;and&nbsp;<code><strong>code</strong></code>&nbsp;are used extensively throughout this site. The code blocks, such as the one above, are&nbsp;<code><strong>code</strong></code>&nbsp;elements inside&nbsp;<code><strong>pre</strong></code>&nbsp;elements. In-line references to tags and properties are simply&nbsp;<code><strong>code</strong></code>&nbsp;elements, often inside&nbsp;<code><strong>a</strong></code>&nbsp;elements to link to&nbsp;the reference section.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Meta Tags</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Meta tags don’t do anything to the content presented in the browser window, but search engines use them to catalog information about the web page.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is one&nbsp;<code><strong>meta</strong></code>&nbsp;tag which can be used as many times as you desire inside a&nbsp;<code><strong>head</strong></code>&nbsp;element and they can contain the attributes&nbsp;<strong><code>charset</code>,&nbsp;<code>name</code>,&nbsp;<code>http-equiv</code>, and&nbsp;<code>content</code></strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When the&nbsp;<code>name</code>&nbsp;or&nbsp;<code><strong>http-equiv</strong></code>&nbsp;attribute is used, which is then used in conjunction with them to apply meta data.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Names</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>name</code>&nbsp;attribute can be anything you like. The most commonly used names are&nbsp;<code>author</code>,&nbsp;<code>description</code>, and&nbsp;<code>keywords</code>.&nbsp;<code><strong>author</strong></code>&nbsp;is used to explicitly state one of the HTML page’s authors and&nbsp;<code><strong>description</strong></code>&nbsp;is often used by search engines (such as Google) to display a web page description in its search results.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The reason why&nbsp;<code><strong>meta</strong></code>&nbsp;tags used to be so important was because they were relied on by search engines to build a profile of a web page. The&nbsp;<code><strong>keywords</strong></code>&nbsp;meta data was used extensively, for example. Nowadays, however, most search engines use the actual content of the page itself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">HTTP Equivalents</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code><strong>http-equiv</strong></code>&nbsp;attribute can be used instead of the&nbsp;<code>name</code>&nbsp;attribute and will make an HTTP header, which is information sent to the server where the web page is held. The&nbsp;<strong>attribute</strong>&nbsp;should rarely be used (although see&nbsp;<code>charset</code>&nbsp;note, below) but the value can be:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>content-type</code>, an encoding declaration, defining what character set is being used,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>default-style</code>, the preferred stylesheet from a selection of&nbsp;<code><strong>link</strong></code>&nbsp;or&nbsp;<code><strong>style</strong></code>&nbsp;elements,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>or&nbsp;<code><strong>refresh</strong></code>, which defines how often (in seconds) a page automatically refreshes or if it should automatically redirect to another page. Not great for accessibility.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>The charset attribute can be used as a shorthand method to define an HTML document’s character set, which is always a good thing to do.&nbsp;<code><strong>&lt;meta charset="utf-8"&gt;</strong></code>&nbsp;is the same as<strong>&nbsp;<code>&lt;meta http-equiv="content-type" content="text/html; charset=utf-8"&gt;</code></strong>.</p>
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
<p><strong>Tables</strong>&nbsp;may have seemed complicated. It can be quite difficult to visualize a two-dimensional grid from one-dimensional lines of code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Well, it gets trickier. All thanks to the&nbsp;<code>rowspan</code>&nbsp;and&nbsp;<code>colspan</code>&nbsp;attributes. </p>
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

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="OJrXNXa" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/OJrXNXa">
  Table Example 1</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","backgroundColor":"luminous-vivid-amber","className":"remove-bottom-space remove-bottom-padding remove-margin-bottom "} -->
<h2 class="wp-block-heading has-text-align-center remove-bottom-space remove-bottom-padding remove-margin-bottom has-luminous-vivid-amber-background-color has-background"><strong>Assignment</strong> (Advanced)</h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:list {"ordered":true,"backgroundColor":"luminous-vivid-amber","textColor":"black","className":"remove-top-space remove-top-padding remove-margin-top","fontSize":"medium"} -->
<ol class="remove-top-space remove-top-padding remove-margin-top has-black-color has-luminous-vivid-amber-background-color has-text-color has-background has-medium-font-size"><!-- wp:list-item -->
<li>Create a table with six rows.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Vary the width of the table data for each row (use rowspan, and refer to the embedded codepen example.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Create three table headers (the example uses three.)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use column span to create table data cells.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Note: rowspan is the height of the column. Column span is the width of the cells.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Fill the cells with at least three images. The rest can be filled with text.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use CSS to style the table for easy viewing.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>This can be challenging, take your time.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

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

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

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

    &lt;dt&gt;juice&lt;/dt&gt;
    &lt;dt&gt;beer&lt;/dt&gt;
    &lt;dt&gt;Milk&lt;/dt&gt;
    &lt;dd&gt;A white liquid produced by cows and used for human consumption.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="oNJLxWp" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/oNJLxWp">
  Glossary</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
<strong>&lt;figure&gt;</strong>
    &lt;img src="obelisk.jpg"&gt;
    <strong>&lt;figcaption&gt;</strong>Tixall Obelisk<strong>&lt;/figcaption&gt;</strong>
<strong>&lt;/figure&gt;</strong>
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note that the&nbsp;<code><strong>img</strong></code>&nbsp;element doesn’t need an&nbsp;<code>alt</code>&nbsp;attribute IF the&nbsp;<code><strong>figcaption</strong></code>&nbsp;(that’s “figure caption”, in case you need it spelling out) does that job.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="ZEVOWPe" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/ZEVOWPe">
  figure and caption</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","backgroundColor":"luminous-vivid-amber","className":"remove-bottom-space remove-bottom-padding remove-margin-bottom "} -->
<h2 class="wp-block-heading has-text-align-center remove-bottom-space remove-bottom-padding remove-margin-bottom has-luminous-vivid-amber-background-color has-background"><strong>Assignment</strong> (Intro &amp; Advanced)</h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:list {"ordered":true,"backgroundColor":"luminous-vivid-amber","textColor":"black","className":"remove-top-space remove-top-padding remove-margin-top","fontSize":"medium"} -->
<ol class="remove-top-space remove-top-padding remove-margin-top has-black-color has-luminous-vivid-amber-background-color has-text-color has-background has-medium-font-size"><!-- wp:list-item -->
<li>Included the following in a wrapper.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Include an "aside" to this definition list. You can add it when you have completed the definitions. The aside will be easy to add. </li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Include 10 terms and definitions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use a unique style in CSS. The codepen example is simple CSS. Have fun with this! add rounded corners, drop shadows etc...</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Add Images to each definition. Take a look at the "figure" tag example.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

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
<p><code><strong>dfn</strong></code>&nbsp;is a&nbsp;<strong>definition</strong>&nbsp;term and is used to highlight the first use of a term. Like&nbsp;<code><strong>abbr</strong></code>, the&nbsp;<code><strong>title</strong></code>&nbsp;attribute can be used to describe the term.</p>
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
<p>As with traditional word processor-based editing, the&nbsp;<code>ins</code>&nbsp;element is typically shown&nbsp;<strong>underlined</strong>&nbsp;and the&nbsp;<code>del</code>&nbsp;element is usually displayed with a&nbsp;<strong>strikethrough</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

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
<p>An&nbsp;<code><strong>article</strong></code>&nbsp;element can be used to mark up a&nbsp;<strong>standalone section</strong>&nbsp;of content. This could be used just once, if you think of a blog post as an article, for example, or a number of times, if you imagine replicating a traditional newspaper page with numerous articles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A&nbsp;<code><strong>section</strong></code>&nbsp;element represents a more&nbsp;<strong>general section</strong>&nbsp;and could be used to split up an article, or to represent chapters, for example.</p>
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

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="NWejBQm" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/NWejBQm">
  Sectioning Main</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","backgroundColor":"luminous-vivid-amber","className":"remove-bottom-space remove-bottom-padding remove-margin-bottom "} -->
<h2 class="wp-block-heading has-text-align-center remove-bottom-space remove-bottom-padding remove-margin-bottom has-luminous-vivid-amber-background-color has-background"><strong>Assignment</strong></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:list {"ordered":true,"backgroundColor":"luminous-vivid-amber","textColor":"black","className":"remove-top-space remove-top-padding remove-margin-top","fontSize":"medium"} -->
<ol class="remove-top-space remove-top-padding remove-margin-top has-black-color has-luminous-vivid-amber-background-color has-text-color has-background has-medium-font-size"><!-- wp:list-item -->
<li>Create a layout similar to the example above. The &lt;article&gt; tag maybe use as a wrapper however I would use a separate <strong>.wrapper</strong> style.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Add a new tag called an <strong>&lt;aside&gt;</strong>. This tag us use to create areas on the left and right of sections. The <strong>float: left;</strong> or right in CSS will be criticle here.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You will have to experiment with the width and height of sections in order to complete the layout. Remember you are trying to make "boxes and rectangles" to contain content. Use CSS to add a <strong>background-color</strong> to each section.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Use a new tag <strong>&lt;nav&gt;</strong>. You may wish to add this above the header or you may wish to include it within it. Add a horizontle nav (Hint: <strong>list-stye-type</strong>). Use "<strong>#</strong>" instead of a URL.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Add a google font, and a rollover state to the nav items.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading"><strong>Assignment</strong> Create a layout using the above template. </h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While&nbsp;<strong><code>div</code>s</strong> could be used to make these separations (or even if you didn’t need these separations for styling), this provides a much richer, more meaningful document.</p>
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
<p>While we’re at this structure, if you want to include figures, there happens to be two tags for doing just that:</p>
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
<p>Note that the&nbsp;<code><strong>img</strong></code>&nbsp;element doesn’t need an&nbsp;<code>alt</code>&nbsp;attribute IF the&nbsp;<code><strong>figcaption</strong></code>&nbsp;(that’s “figure caption”, in case you need it spelling out) does that job.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="ZEVOWPe" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/ZEVOWPe">
  figure and caption</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

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
<p>This could also be used for in-page navigation (<code>&lt;a href="#overthere"&gt;...</code>&nbsp;etc.) but it isn’t necessary for every group of links - it is designed for major groupings. A copyright, author, and contact link could sit happily by themselves in a&nbsp;<code><strong>footer</strong></code>&nbsp;element, for example.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to style these new HTML 5 elements (and you probably do, right? It’s much nicer than using&nbsp;<code>&lt;div id="content"&gt;...</code>, etc) you will experience a problem in older browsers, most notably Internet Explorer versions 8 and earlier, that don’t understand these tags.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a rel="noreferrer noopener" href="https://www.htmldog.com/" target="_blank">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Box-Sizing and @Media Screen</h1>
<!-- /wp:heading -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="GeGLbO" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/GeGLbO">
  Adaptive Layout Example: Simplified</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"textAlign":"center","level":3,"backgroundColor":"luminous-vivid-amber"} -->
<h3 class="wp-block-heading has-text-align-center has-luminous-vivid-amber-background-color has-background">Assignment (We will see how far we get in class)</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"backgroundColor":"luminous-vivid-amber"} -->
<p class="has-luminous-vivid-amber-background-color has-background">Take the previous create your own composition using divs, and apply box-sizing and @media_screen. Make sure to include at least six divs that have a background-color. Make sure all divs are nested in a wrapper. The minimum width of your composition should be 400px. The wrapper should expand to contain all your divs. Add at least one image. <br><br>Use an external CSS file.<br><br><strong>Bonus:</strong> use the following CSS to scale your images.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"backgroundColor":"luminous-vivid-amber"} -->
<p class="has-luminous-vivid-amber-background-color has-background">img&nbsp;{<br>&nbsp;&nbsp;width:&nbsp;100%;<br>&nbsp; height:&nbsp;auto;<br>}</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

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
<p><a href="https://www.htmldog.com/references/html/tags/time/"><code>time</code></a>&nbsp;is by far the chocolate ice cream sexiest sweet sugar lovely of these tags and is used to make dates and times super-semantically rich and mmm.</p>
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
<p><strong>Conditional comments</strong>,  which discusses HTML comments that Internet Explorer (up to version 9) interprets differently from other modern browsers, can be formalized as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>"The provided comments serve the purpose of selectively delivering specific portions of HTML content exclusively to Internet Explorer versions up to 9. These comments exploit a characteristic of Internet Explorer, and they are intended to provide a distinct set of instructions to these particular browsers. In contrast, compliant and contemporary web browsers will recognize these comments merely as unobtrusive annotations and proceed without any specific interpretation."</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This web site currently uses conditional comments to make a handful of amendments for IE 8 and below, including a small extra stylesheet, and the HTML5 required for these browsers to take notice of some HTML5 elements. Go ahead - view the source.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They have become a commonly used method of latching extra CSS to a document to plaster over holes in these browsers’ display capabilities. So, for example, you might add something like this inside your <code><strong>head</strong></code> element:</p>
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

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

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
<p>In this example, the CSS class “alternative” styles will be applied to the second column, or the second cell in every row.</p>
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
<p>There are a number of ways&nbsp;<strong>links</strong>&nbsp;— the absolutely fundamentally most important interactive element of websites — can be made more&nbsp;<strong>accessible</strong>&nbsp;to those people with disabilities.</p>
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
&lt;p&gt;I'm really bad at writing link text. &lt;a href="inept.html" <strong>title="Why am I writing link text."</strong>&gt;Click here&lt;/a&gt; to find out more.&lt;/p&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Another tip:&nbsp;<strong>Don’t have links open something in a new window or tab.</strong>&nbsp;It’s precious to think your page is important enough to stay alive while a user visits elsewhere anyway. We all know how to use the back button. We know how to close windows and tabs, too, but if you can’t see that that’s what has happened…</p>
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

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

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

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

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

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

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
<p>This will embed a video, complete with controls, in browsers that support the HTML5<strong>&nbsp;<code>video</code></strong>&nbsp;tag and the video content type.</p>
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

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">CSS</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>CSS</strong>, or&nbsp;<strong>Cascading Styles Sheets</strong>, is a way to style and present HTML. Whereas the HTML is the&nbsp;<em>meaning</em>&nbsp;or&nbsp;<em>content</em>, the style sheet is the&nbsp;<em>presentation</em>&nbsp;of that document.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Styles have a format of ‘<strong>property: value</strong>’ and most properties can be applied to most HTML tags.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Applying CSS</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are three ways to apply CSS to HTML:&nbsp;<strong>Inline</strong>,&nbsp;<strong>internal</strong>, and&nbsp;<strong>external</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue","className":"h2 {font-color: red;}"} -->
<h2 class="wp-block-heading h2 {font-color: red;} has-vivid-cyan-blue-color has-text-color">Inline</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Inline styles are plonked straight into the HTML tags using the&nbsp;<code>style</code>&nbsp;attribute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They look something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;p style="color: red"&gt;text&lt;/p&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will make that specific paragraph red.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But, if you remember, the best-practice approach is that the HTML should be a stand-alone,&nbsp;<strong>presentation free</strong>&nbsp;document, and so in-line styles should be avoided wherever possible.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"textColor":"vivid-cyan-blue","className":"article h2 {font-color: red;}"} -->
<h2 class="wp-block-heading article h2 {font-color: red;} has-vivid-cyan-blue-color has-text-color">External</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>External styles are used for the whole, multiple-page website. There is a&nbsp;<strong>separate CSS file</strong>, which will simply look something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">p {
    color: red;
}

a {
    color: blue;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>If this file is saved as “style.css” in a folder called "css" in the same directory as your HTML page then it can be linked to in the HTML like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;CSS Example&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
...</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Apply!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To get the most from this guide, it would be a good idea to try out the code as we go along, so start a fresh new file with your text-editor and save the blank document as “style.css” in the same directory as your HTML file.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Selectors, Properties, and Values</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Whereas HTML has&nbsp;<strong>tags</strong>, CSS has&nbsp;<strong>selectors</strong>. Selectors are the names given to styles in internal and external style sheets. We will be concentrating on&nbsp;<strong>HTML selectors</strong>, which are simply the names of HTML tags and are used to change the style of a specific type of element.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For each selector there are “<strong>properties</strong>” inside&nbsp;<strong>curly brackets</strong>, which take the form of words such as&nbsp;<code>color</code>,&nbsp;<code>font-weight</code>&nbsp;or&nbsp;<code>background-color</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A&nbsp;<strong>value</strong>&nbsp;is given to the property following a&nbsp;<strong>colon</strong>&nbsp;(NOT an “equals” sign).&nbsp;<strong>Semi-colons</strong>&nbsp;are used to separate the properties.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">body {
    font-size: 14px;
    color: navy;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will apply the given values to the&nbsp;<code>font-size</code>&nbsp;and&nbsp;<code><strong>color</strong></code>&nbsp;properties to the&nbsp;<code>body</code>&nbsp;selector.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So basically, when this is applied to an HTML document, text between the body tags (which is the content of the whole window) will be 14 pixels in size and navy in color.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Lengths and Percentages</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are many property-specific units for values used in CSS, but there are some general units that are used by several properties, and it is worth familiarizing yourself with these before continuing.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>px</code>&nbsp;(such as&nbsp;<code>font-size: 12px</code>) is the unit for pixels.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>em</code>&nbsp;(such as&nbsp;<code>font-size: 2em</code>) is the unit for the calculated size of a font. So “2em”, for example, is two times the current font size.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>pt</code>&nbsp;(such as&nbsp;<code>font-size: 12pt</code>) is the unit for points, for measurements typically in printed media.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>%</code>&nbsp;(such as&nbsp;<code>width: 80%</code>) is the unit for… wait for it… percentages.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Other units include&nbsp;<code>pc</code>&nbsp;(picas),&nbsp;<code>cm</code>&nbsp;(centimeters),&nbsp;<code>mm</code>&nbsp;(millimeters) and&nbsp;<code>in</code>&nbsp;(inches).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You do not need to state a unit when a value is zero. For example, if you wanted to specify no border, it would be&nbsp;<code>border: 0</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>“px” in this case, doesn’t necessarily mean pixels - the little squares that make up a computer’s display - all of the time. Modern browsers allow users to zoom in and out of a page so that, even if you specify, or&nbsp;<code>height: 200px</code>, for example, although these will be the genuine specified size on a non-zoomed browser, they will still increase and decrease in size with the user’s preference.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Colors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>CSS brings&nbsp;<strong>16,777,216</strong>&nbsp;colors to your disposal. They can take the form of a&nbsp;<strong>name</strong>, an&nbsp;<strong><abbr>RGB</abbr></strong>&nbsp;(red/green/blue) value or a&nbsp;<strong>hex</strong>&nbsp;code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The following values, to specify full-on as red-as-red-can-be, all produce the same result:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>red</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>rgb(255,0,0)</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>rgb(100%,0%,0%)</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>#ff0000</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>#f00</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Predefined color names include&nbsp;<code>aqua</code>,&nbsp;<code>black</code>,&nbsp;<code>blue</code>,&nbsp;<code>fuchsia</code>,&nbsp;<code>gray</code>,&nbsp;<code>green</code>,&nbsp;<code>lime</code>,&nbsp;<code>maroon</code>,&nbsp;<code>navy</code>,&nbsp;<code>olive</code>,&nbsp;<code>purple</code>,&nbsp;<code>red</code>,&nbsp;<code>silver</code>,&nbsp;<code>teal</code>,&nbsp;<code>white</code>, and&nbsp;<code>yellow</code>.&nbsp;<code>transparent</code>&nbsp;is also a valid value.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>With the possible exception of&nbsp;<code>black</code>&nbsp;and&nbsp;<code>white</code>, color names have limited use in modern, well-designed web sites because they are so specific and limiting.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The three values in the RGB value are from 0 to 255, 0 being the lowest level (no red, for example), 255 being the highest level (full red, for example). These values can also be a percentage.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Hexadecimal</strong> is a&nbsp;<strong>base-16</strong>&nbsp;number system. We are generally used to the&nbsp;<strong>decimal</strong>&nbsp;number system (<strong>base-10</strong>, from 0 to 9), but hexadecimal has 16 digits, from 0 to f.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The hex number is prefixed with a hash character (<strong>#</strong>) and can be three or six digits long. The three-digit version is a compressed version of the six-digit (<code>#ff0000</code>&nbsp;becomes&nbsp;<code>#f00</code>,&nbsp;<code>#cc9966</code>&nbsp;becomes&nbsp;<code>#c96</code>, etc.). The three-digit version is easier to decipher (the first digit, like the first value in RGB, is red, the second green and the third blue) but the six-digit version gives you more control over the exact color.</p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"textColor":"vivid-cyan-blue","className":"h2 { font-color: #b14bd6;}"} -->
<h2 class="wp-block-heading h2 { font-color: #b14bd6;} has-vivid-cyan-blue-color has-text-color">color and background-color</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Colors can be applied by using&nbsp;<code>color</code>&nbsp;and&nbsp;<code>background-color</code>&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A blue background and yellow text could look like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">h1 {
    color: yellow;
    background-color: blue;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>These colors might be a little too harsh, so you could change the code of your CSS file for slightly different shades:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">body {
    font-size: 14px;
    color: navy;
}

h1 {
    color: #ffc;
    background-color: #009;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Save the CSS file and refresh your browser. You will see the colors of the first heading (the&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>&nbsp;element) have changed to yellow and blue.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can apply the&nbsp;<code>color</code>&nbsp;and&nbsp;<code>background-color</code>&nbsp;properties to most HTML elements, including&nbsp;<a href="https://www.htmldog.com/references/html/tags/body/"><code>body</code></a>, which will change the colors of the page and everything in it.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Text (Intro &amp; Advanced)</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can alter the size and shape of the text on a web page with a range of properties.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">font-family</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is the font itself, such as Times New Roman, Arial, or Verdana.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The user’s browser has to be able to find the font you specify, which, in most cases, means it needs to be on&nbsp;<strong>their</strong>&nbsp;computer so there is little point in using obscure fonts that are only sitting on&nbsp;<strong>your</strong>&nbsp;computer. There are a select few “<strong>safe</strong>” fonts (the most commonly used are Arial, Verdana and Times New Roman), but you can specify more than one font, separated by&nbsp;<strong>commas</strong>. The purpose of this is that if the user does not have the first font you specify, the browser will go through the list until it finds one it does have. This is useful because different computers sometimes have different fonts installed. So&nbsp;<code>font-family: arial, helvetica, serif</code>, will look for the Arial font first and, if the browser can’t find it, it will search for Helvetica, and then a common serif font.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Note: if the name of a font is more than one word, it should be put in quotation marks, such as&nbsp;<code>font-family: "Times New Roman"</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue","className":"h2 { color: "} -->
<h2 class="wp-block-heading h2 { color: has-vivid-cyan-blue-color has-text-color">font-size</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code><strong>font-size</strong></code>&nbsp;sets the size of the font. Be careful with this — text such as headings should not just be an HTML paragraph (<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>) in a large font - you should still use headings (<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h1</code></a>,&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h2</code></a>&nbsp;etc.) even though, in practice, you could make a paragraph's font-size larger than a heading (not recommended).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">font-weight</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code><strong>font-weight</strong></code>&nbsp;states whether the text is bold or not. Most commonly, this is used as&nbsp;<code>font-weight: bold</code>&nbsp;or&nbsp;<code>font-weight: normal</code>&nbsp;but other values are&nbsp;<code>bolder</code>,&nbsp;<code>lighter</code>,&nbsp;<code>100</code>,&nbsp;<code>200</code>,&nbsp;<code>300</code>,&nbsp;<code>400</code>&nbsp;(same as&nbsp;<code>normal</code>),&nbsp;<code>500</code>,&nbsp;<code>600</code>,&nbsp;<code>700</code>&nbsp;(same as&nbsp;<code>bold</code>),&nbsp;<code>800</code>&nbsp;or&nbsp;<code>900</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/weightStyle-1-19.gif" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="gOZgXqy" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/gOZgXqy">
  Headings</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">font-style</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>font-style</code>&nbsp;states whether the text is italic or not. It can be&nbsp;<code>font-style: italic</code>&nbsp;or&nbsp;<code>font-style: normal</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">text-decoration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/text-decoration/"><code>text-decoration</code></a>&nbsp;states whether the text has got a line running under, over, or through it.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>text-decoration: underline</code>, does what you would expect.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>text-decoration: overline</code>&nbsp;places a line above the text.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>text-decoration: line-through</code>&nbsp;puts a line through the text (“strike-through”).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>This property is usually used to decorate links and you can specify no underline with&nbsp;<code>text-decoration: none</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">text-transform</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/text-transform/"><code>text-transform</code></a>&nbsp;will change the case of the text.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>text-transform: capitalize</code>&nbsp;turns the first letter of every word into uppercase.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>text-transform: uppercase</code>&nbsp;turns everything into uppercase.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>text-transform: lowercase</code>&nbsp;turns everything into lowercase.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>text-transform: none</code>&nbsp;I’ll leave for you to work out.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So, a few of these things used together might look like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">body {
    font-family: arial, helvetica, sans-serif;
    font-size: 14px;
}

h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

a {
    text-decoration: none;
}

strong {
    font-style: italic;
    text-transform: uppercase;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Text spacing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Before we move on from this introduction to styling text, a quick look at how to space out the text on a page.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/spacingOutText-17.gif" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>letter-spacing</code>&nbsp;and&nbsp;<code>word-spacing</code>&nbsp;properties are for spacing between letters or words. The value can be a length or&nbsp;<code>normal</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>line-height</code>&nbsp;property sets the height of the lines in an element, such as a paragraph, without adjusting the font size. It can be a number (which specifies a multiple of the font size, so “2” will be two times the font size, for example), a length, a percentage, or&nbsp;<code>normal</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>text-align</code>&nbsp;property will align the text inside an element to left, right, center, or justify.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>text-indent</code>&nbsp;property will indent the first line of a paragraph, for example, to a given length or percentage. This style is traditionally used in print, but rarely in digital media such as the web.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">p {
    letter-spacing: 0.5em;
    word-spacing: 2em;
    line-height: 1.5;
    text-align: center;
}</code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="qBLRVeK" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/qBLRVeK">
  Text-align, text-indent, word and letter spacing</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="mdaRpdg" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/mdaRpdg">
  Vertical Align</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="mdaRpeY" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/mdaRpeY">
  Text Shadow</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="vYvgpGM" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/vYvgpGM">
  Drop Caps</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="vYvgpKM" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/vYvgpKM">
  Drop caps 2 (Image)</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="XWopVNZ" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/XWopVNZ">
  Pull Quotes One</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="NWedXdr" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/NWedXdr">
  Another Pull Quote</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Margins and Padding</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>margin</code>&nbsp;and&nbsp;<code>padding</code>&nbsp;are the two most commonly used properties for spacing-out elements. A margin is the space&nbsp;<strong>outside</strong>&nbsp;something, whereas padding is the space&nbsp;<strong>inside</strong>&nbsp;something.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Change the CSS code for&nbsp;<code>h2</code>&nbsp;to the following:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">h2 {
    font-size: 1.5em;
    <strong>background-color: #ccc;</strong>
    <strong>margin: 20px;</strong>
    <strong>padding: 40px;</strong>
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This leaves a 20-pixel width space around the secondary header and the header itself is fat from the 40-pixel width padding.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The four sides of an element can also be set individually.&nbsp;<code>margin-top</code>,&nbsp;<code>margin-right</code>,&nbsp;<code>margin-bottom</code>,&nbsp;<code>margin-left</code>,&nbsp;<code>padding-top</code>,&nbsp;<code>padding-right</code>,&nbsp;<code>padding-bottom</code>&nbsp;and&nbsp;<code>padding-left</code>&nbsp;are the self-explanatory properties you can use.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-text-align-center has-vivid-cyan-blue-color has-text-color">The Box Model</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Margins, padding and borders are all part of what’s known as&nbsp;<strong>the Box Model</strong>. The Box Model works like this: in the middle you have the content area (let’s say an image), surrounding that you have the padding, surrounding that you have the border and surrounding that you have the margin. It can be visually represented like this:</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<p><div id="boxmodel" style="color: #a06700; margin: 20px 0; overflow: auto; padding: 10px 20px 20px 20px; background-color: #e90;">
    Margin box
    <div style="padding: 10px 20px 20px 20px; margin: 10px 20px 20px 20px; background-color: #f4bb55;">
        Border box
        <div style="padding: 10px 20px 20px 20px; margin: 10px 20px 20px 20px; background-color: #f9ddaa;">
            Padding box
            <div style="padding: 20px; margin: 10px 20px 20px 20px; background-color: #fff;">
                Element box
            </div>
        </div>
    </div>
</div></p>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>You don’t have to use all of these, but it can be helpful to remember that the box model can be applied to every element on the page, and that’s a powerful thing!</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="LYMxeBv" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/LYMxeBv">
  Overflow</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Borders</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Borders</strong>&nbsp;can be applied to most HTML elements within the body.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To make a border around an element, all you need is&nbsp;<code>border-style</code>. The values can be&nbsp;<code>solid</code>,&nbsp;<code>dotted</code>,&nbsp;<code>dashed</code>,&nbsp;<code>double</code>,&nbsp;<code>groove</code>,&nbsp;<code>ridge</code>,&nbsp;<code>inset</code>&nbsp;and&nbsp;<code>outset</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/border-style-15.png" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><code>border-width</code>&nbsp;sets the&nbsp;<strong>width</strong>&nbsp;of the border, most commonly using pixels as a value. There are also properties for&nbsp;<code>border-top-width</code>,&nbsp;<code>border-right-width</code>,&nbsp;<code>border-bottom-width</code>&nbsp;and&nbsp;<code>border-left-width</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Finally,&nbsp;<code>border-color</code>&nbsp;sets the&nbsp;<strong>color</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">h2 {
    border-style: dashed;
    border-width: 3px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-color: red;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will make a red dashed border around all HTML secondary headers (the&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h2</code></a>&nbsp;element) that is 3 pixels wide on the top and bottom and 10 pixels wide on the left and right (these having over-ridden the 3 pixel wide width of the entire border).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"textColor":"vivid-cyan-blue"} -->
<h1 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Putting It All Together</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The code below covers all of the CSS methods in this section. If you save this as your CSS file and look at the HTML file then you should now understand what each CSS property does and how to apply them. </p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">body {
    font-family: arial, helvetica, sans-serif;
    font-size: 14px;
    color: black;
    background-color: #ffc;
    margin: 20px;
    padding: 0;
}

/* This is a comment, by the way */

p {
    line-height: 21px;
}

h1 {
    color: #ffc;
    background-color: #900;
    font-size: 2em;
    margin: 0;
    margin-bottom: 7px;
    padding: 4px;
    font-style: italic;
    text-align: center;
    letter-spacing: 0.5em;
    border-bottom-style: solid;
    border-bottom-width: 0.5em;
    border-bottom-color: #c00;
}

h2 {
    color: white;
    background-color: #090;
    font-size: 1.5em;
    margin: 0;
    padding: 2px;
    padding-left: 14px;
}

h3 {
    color: #999;
    font-size: 1.25em;
}

img {
    border-style: dashed;
    border-width: 2px;
    border-color: #ccc;
}

a {
    text-decoration: none;
}

strong {
    font-style: italic;
    text-transform: uppercase;
}

li {
    color: #900;
    font-style: italic;
}


/* Table Style are not covered in this class */

/*table {
    background-color: #ccc;
}*/</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Border-Borders</h1>
<!-- /wp:heading -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="rNojpdv" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/rNojpdv">
  Border-Borders</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Span and Div</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML is all about applying&nbsp;<strong>meaning</strong>&nbsp;to content. Whereas most HTML tags apply meaning (<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;makes a paragraph,&nbsp;<code>h1</code>&nbsp;makes a heading etc.), the&nbsp;<strong><code>span</code>&nbsp;and&nbsp;<code>div</code>&nbsp;tags apply no meaning at all</strong>. This might sound about as useful as a foam hammer but they are actually used quite extensively in conjunction with CSS.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They are used to group together a chunk of HTML and hook some information onto that chunk, most commonly with the attributes&nbsp;<code>class</code>&nbsp;and&nbsp;<code>id</code>&nbsp;to associate the element with a&nbsp;class or id CSS selector.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The difference between&nbsp;<code>span</code>&nbsp;and&nbsp;<code>div</code>&nbsp;is that a&nbsp;<code>span</code>&nbsp;element is&nbsp;<strong>in-line</strong>&nbsp;and usually used for a small chunk of HTML inside a line (such as inside a paragraph), whereas a&nbsp;div&nbsp;(division) element is&nbsp;block-line&nbsp;(which is the equivalent to having a line-break before and after it) and used to group larger chunks of code.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">&lt;div id="scissors"&gt;
    &lt;p&gt;This is &lt;span class="paper"&gt;crazy&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"textColor":"vivid-cyan-blue"} -->
<h1 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Class and ID Selectors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For this&nbsp;we look solely at&nbsp;HTML selectors&nbsp;— those that represent an HTML&nbsp;<strong>tag</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also define your own selectors in the form of&nbsp;<strong>class</strong>&nbsp;and&nbsp;<strong>ID</strong>&nbsp;selectors.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The benefit of this is that you can have the same HTML element, but present it differently depending on its class or ID.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the CSS, a class selector is a name preceded by a&nbsp;<strong>full stop</strong>&nbsp;(“.”) and an ID selector is a name preceded by a&nbsp;<strong>hash character</strong>&nbsp;(“#”).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So the CSS might look something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><strong>#top</strong> {
    background-color: #ccc;
    padding: 20px
}

<strong>.intro</strong> {
    color: red;
    font-weight: bold;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The HTML refers to the CSS by using the attributes&nbsp;<code>id</code>&nbsp;and&nbsp;<code>class</code>. It could look something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
&lt;div <strong>id="top"</strong>&gt;

&lt;h1&gt;Chocolate curry&lt;/h1&gt;

&lt;p <strong>class="intro"</strong>&gt;This is my recipe for making curry purely with chocolate&lt;/p&gt;

&lt;p <strong>class="intro"</strong>&gt;Mmm mm mmmmm&lt;/p&gt;

&lt;/div&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also apply a selector to a specific HTML element by simply stating the HTML selector first, so&nbsp;<code>p.jam { /* whatever */ }</code>&nbsp;will only be applied to&nbsp;<strong>paragraph</strong>&nbsp;elements that have the class “jam”.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"textColor":"vivid-cyan-blue"} -->
<h1 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Grouping and Nesting</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Two ways that you can simplify your code — both HTML and CSS — and make it easier to manage.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Grouping</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can give the same properties to a number of selectors without having to repeat them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, if you have something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
h2 {
    color: red;
}

.thisOtherClass {
    color: red;
}

.yetAnotherClass {
    color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can separate selectors with&nbsp;<strong>commas</strong>&nbsp;in one line and apply the same properties to them all so, making the above:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
<strong>h2, .thisOtherClass, .yetAnotherClass</strong> {
    color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"textColor":"vivid-cyan-blue"} -->
<h1 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Nesting</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If the CSS is structured well, there shouldn’t be a need to use many class or ID selectors. This is because you can specify properties to selectors&nbsp;<em>within</em>&nbsp;other selectors.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
#top {
    background-color: #ccc;
    padding: 1em
}

<strong>#top h1</strong> {
    color: #ff0;
}

<strong>#top p</strong> {
    color: red;
    font-weight: bold;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This removes the need for classes or IDs on the&nbsp;<code>p</code>&nbsp;and&nbsp;<a href="https://www.htmldog.com/references/html/tags/h1h2h3h4h5h6/"><code>h</code></a><code>1</code>&nbsp;tags if it is applied to HTML that looks something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">
&lt;div id="top"&gt;
    &lt;h1&gt;Chocolate curry&lt;/h1&gt;
    &lt;p&gt;This is my recipe for making curry purely with chocolate&lt;/p&gt;
    &lt;p&gt;Mmm mm mmmmm&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This is because, by separating selectors with spaces, we are saying “<code>h1</code>&nbsp;inside ID&nbsp;<code>top</code>&nbsp;is colour&nbsp;<code>#ff0</code>” and “<code>p</code>&nbsp;inside ID&nbsp;<code>top</code>&nbsp;is&nbsp;<code>red</code>&nbsp;and&nbsp;<code>bold</code>”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This can get quite complicated (because it can go for more than two levels, such as this inside this inside this inside this etc.) and may take a bit of practice.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"textColor":"vivid-cyan-blue"} -->
<h1 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Pseudo Classes</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Pseudo classes</strong>&nbsp;are bolted on to selectors to specify a state or relation to the selector. They take the form of&nbsp;<strong>selector:pseudo_class { property: value; }</strong>, simply with a colon in between the selector and the pseudo class.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Links</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>link</code>, targeting&nbsp;<strong>unvisited links</strong>, and&nbsp;<code>visited</code>, targeting, you guessed it,&nbsp;<strong>visited links</strong>, are the most basic pseudo classes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The following will apply colors to all links in a page depending on whether the user has visited that page before or not:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
a<strong>:link</strong> {
    color: blue;
}

a<strong>:visited</strong> {
    color: purple;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Dynamic Pseudo Classes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Also commonly used for links, the dynamic pseudo classes can apply styles when something happens to something.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="http://nuggetofjoy.com/wp-content/uploads/rollovers_border-7.png" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>active</code>&nbsp;is for when something activated by the user, such as when a link is clicked on.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>hover</code>&nbsp;is for a when something is passed over by an input from the user, such as when a cursor moves over a link.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>focus</code>&nbsp;is for when something gains focus, that is when it is selected by, or is ready for, keyboard input.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><code>focus</code>&nbsp;is most often used on&nbsp;<strong>form elements</strong>&nbsp;but can be used for&nbsp;<strong>links</strong>. Although most users will navigate around and between pages using a pointing device such as a mouse those who choose note to, or are unable to do so, such as those with motor disabilities, may navigate using a keyboard or similar device. Links can be jumped between using a tab key and they will gain focus one at a time.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
a<strong>:active</strong> {
    color: red;
}

a<strong>:hover</strong> {
    text-decoration: none;
    color: blue;
    background-color: yellow;
}

input<strong>:focus</strong>, textarea<strong>:focus</strong> {
    background: #eee;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">First Children</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Finally (for this article, at least), there is the&nbsp;<code>first-child</code>&nbsp;pseudo class. This will target something only if it is the very first descendant of an element. So, in the following HTML…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;body&gt;
    &lt;p&gt;I’m the body’s first paragraph child. I rule. Obey me.&lt;/p&gt;
    &lt;p&gt;I resent you.&lt;/p&gt;
...
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…if you only want to style the&nbsp;<em>first</em>&nbsp;paragraph, you could use the following CSS:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p<strong>:first-child</strong> {
    font-weight: bold;
    font-size: 40px;
}</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Shorthand Properties</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Some CSS properties allow a string of values, replacing the need for a number of properties. These are represented by values separated by&nbsp;<strong>spaces</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Margins and Padding</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>margin</code>&nbsp;allows you to amalgamate<strong>&nbsp;<code>margin-top</code>,&nbsp;<code>margin-right</code>,&nbsp;<code>margin-bottom</code>, and&nbsp;<code>margin-left</code></strong>&nbsp;in the form of&nbsp;<strong>property: top right bottom left;</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p {
    margin-top: 1px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 20px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Can be summed up as:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p {
    <strong>margin: 1px 5px 10px 20px;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/references/css/properties/padding/"><code>padding</code></a>&nbsp;can be used in exactly the same way.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By stating just two values (such as&nbsp;<code>padding: 1em 10em;</code>), the first value will be the&nbsp;<strong>top and bottom</strong>&nbsp;and the second value will be the&nbsp;<strong>right and left</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Borders</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>border-width</code>&nbsp;can be used in the same way as&nbsp;<code>margin</code>&nbsp;and&nbsp;<code>padding</code>, too. You can also combine&nbsp;<code>border-width</code>,&nbsp;<code>border-color</code>, and&nbsp;<code>border-style</code>&nbsp;with the&nbsp;<code>border</code>&nbsp;property. So:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium"} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css">
p {
    border-width: 1px;
    border-color: red;
    border-style: solid;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Can be simplified to be:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p {
    <strong>border: 1px red solid;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The width/color/style combination can also be applied to&nbsp;<code>border-top</code>,&nbsp;<code>border-right</code>&nbsp;etc.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Fonts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Font-related properties can also be gathered together with the&nbsp;<code>font</code>&nbsp;property:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p {
    <strong>font: italic bold 12px/2 courier;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This combines&nbsp;<code>font-style</code>,&nbsp;<code>font-weight</code>,&nbsp;<code>font-size</code>,&nbsp;<code>line-height</code>, and&nbsp;<code>font-family</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, to put it all together, try this code:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p {
    font: 14px/1.5 "Times New Roman", times, serif;
    padding: 30px 10px;
    border: 1px black solid;
    border-width: 1px 5px 5px 1px;
    border-color: red green blue yellow;
    margin: 10px 50px;
}</code></pre>
<!-- /wp:code -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Background Images</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Used in a very different way to the&nbsp;<code>img</code>&nbsp;HTML element, CSS background images are a powerful way to add detailed presentation to a page.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
body {
<strong>    background: white url(http://www.ndangelo.com/images/bg.gif) no-repeat top right;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This amalgamates these properties:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>background-color</code>, which we have&nbsp;come across before.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>background-image</code>, which is the location of the image itself.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>background-repeat</code>, which is how the image repeats itself. Its value can be:<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>repeat</code>, the equivalent of a “tile” effect across the whole background,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>repeat-y</code>, repeating on the y-axis, above and below,</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>repeat-x</code>&nbsp;(repeating on the x-axis, side-by-side), or</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>no-repeat</code>&nbsp;(which shows just one instance of the image).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>background-position</code>, which can be&nbsp;<code>top</code>,&nbsp;<code>center</code>,&nbsp;<code>bottom</code>,&nbsp;<code>left</code>,&nbsp;<code>right</code>, a length, or a percentage, or any sensible combination, such as&nbsp;<code>top right</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/background-position-4.png" alt=""/><figcaption class="wp-element-caption">A top-right positioned, non-repeating background.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="ZEVLvea" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/ZEVLvea">
  Images: background-image</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="bGOgaRe" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/bGOgaRe">
  Background Position 1</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="abPpEya" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/abPpEya">
  Background Image Size</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Specificity</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you have two (or more) conflicting CSS rules that point to the same element, there are some basic rules that a browser follows to determine which one is most&nbsp;<strong>specific</strong>&nbsp;and therefore wins out.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It may not seem like something that important, and in most cases you won’t come across any conflicts at all, but the larger and more complex your CSS files become, or the more CSS files you start to juggle with, the greater likelihood there is of conflicts arising.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">More Specific = Greater Precedence</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If the selectors are the same then the&nbsp;<strong>last</strong>&nbsp;one will always take precedence. For example, if you had:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
p { color: red }
p { color: blue }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The text in the box of&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;elements would be colored blue because that rule came last.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However, you won’t usually have identical selectors with conflicting declarations on purpose (because there’s not much point). Conflicts quite legitimately come up, though, when you have&nbsp;<a href="https://www.htmldog.com/guides/css/intermediate/grouping/"><strong>nested</strong>&nbsp;selectors</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
div p { color: red }
p { color: blue }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this example it might seem that a&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;within a&nbsp;<a href="https://www.htmldog.com/references/html/tags/div/"><code>div</code></a>&nbsp;would be colored blue, seeing as a rule to color&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;boxes blue comes last, but they would actually be colored red due to the&nbsp;<strong>specificity</strong>&nbsp;of the first selector. Basically,&nbsp;<strong>the more specific a selector, the more preference it will be given</strong>&nbsp;when it comes to conflicting styles.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Calculating Specificity</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The actual specificity of a group of nested selectors takes some calculating. You can give every&nbsp;<strong>ID selector</strong>&nbsp;(“#whatever”) a value of&nbsp;<strong>100</strong>, every&nbsp;<strong>class selector</strong>&nbsp;(“.whatever”) a value of&nbsp;<strong>10</strong>&nbsp;and every&nbsp;<strong>HTML selector</strong>&nbsp;(“whatever”) a value of&nbsp;<strong>1</strong>. When you add them all up, hey presto, you have a specificity value.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;has a specificity of&nbsp;<strong>1</strong>&nbsp;(1 HTML selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>div p</code>&nbsp;has a specificity of&nbsp;<strong>2</strong>&nbsp;(2 HTML selectors, 1+1)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>.tree</code>&nbsp;has a specificity of&nbsp;<strong>10</strong>&nbsp;(1 class selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>div p.tree</code>&nbsp;has a specificity of&nbsp;<strong>12</strong>&nbsp;(2 HTML selectors + a class selector, 1+1+10)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>#baobab</code>&nbsp;has a specificity of&nbsp;<strong>100</strong>&nbsp;(1 id selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>body #content .alternative p</code>&nbsp;has a specificity of&nbsp;<strong>112</strong>&nbsp;(HTML selector + id selector + class selector + HTML selector, 1+100+10+1)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So if all of these examples were used,&nbsp;<code>div p.tree</code>&nbsp;(with a specificity of 12) would win out over&nbsp;<code>div p</code>&nbsp;(with a specificity of 2) and&nbsp;<code>body #content .alternative p</code>&nbsp;would win out over all of them,&nbsp;<strong>regardless of the order</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Display</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A key trick to manipulating HTML elements is understanding that there’s nothing special about how most of them work. Most pages could be made up from just a few tags that can be styled any which way you choose. The browser’s default visual representation of most HTML elements consist of varying font styles, margins, padding and, essentially,&nbsp;<strong>display types</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The most fundamental types of display are&nbsp;<strong>inline</strong>,&nbsp;<strong>block</strong>&nbsp;and&nbsp;<strong>none</strong>&nbsp;and they can be manipulated with the&nbsp;<code>display</code>&nbsp;property and the shockingly surprising values&nbsp;<code>inline</code>,&nbsp;<code>block</code>&nbsp;and&nbsp;<code>none</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Inline</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>inline</code>&nbsp;does just what it says — boxes that are displayed inline follow the flow of a line. Anchor (links) and emphasis are examples of elements that are displayed inline by default.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/displayInline-4.png" alt=""/><figcaption class="wp-element-caption">Inline boxes.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The following code, for example, will cause all list items in a list to appear next to each other in one continuous line rather than each one having its own line:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">
li { <strong>display: inline</strong> }
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Block</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>block</code>&nbsp;makes a box standalone, fitting the entire width of its containing box, with an effective line break before and after it. Block boxes allow greater height, margins, and padding manipulation than inline boxes. Heading and paragraph elements are examples of elements displayed this way by default in browsers.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/displayBlock-4.png" alt=""/><figcaption class="wp-element-caption">Block boxes.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The next example will make all links in “nav” large clickable blocks:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#navigation a {
    <strong>display: block;</strong>
    padding: 20px 10px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><code>display: inline-block</code>&nbsp;will keep a box inline but lend the greater formatting flexibility of block boxes, allowing margin to the right and left of the box, for example.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">None</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>none</code>, doesn’t display a box at all, which may sound pretty useless but can be used to good effect with dynamic effects, such as switching extended information on and off at the click of a link, or in alternative stylesheets.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The following code, for example, could be used in a print stylesheet to basically “turn off” the display of elements such as navigation that would be useless in that situation:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#navigation, #related_links { <strong>display: none</strong> }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><code>display: none</code>&nbsp;and&nbsp;<code>visibility: hidden</code>&nbsp;vary in that&nbsp;<code>display: none</code>&nbsp;takes the element’s box completely out of play, whereas&nbsp;<code>visibility: hidden</code>&nbsp;keeps the box and its flow in place without visually representing its contents. For example, if the second paragraph of 3 were set to&nbsp;<code>display: none</code>, the first paragraph would run straight into the third whereas if it were set to&nbsp;<code>visibility: hidden</code>, there would be a gap where the paragraph should be.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="qBLRpMw" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/qBLRpMw">
  Block and Inline Block</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="RwEKxdW" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/RwEKxdW">
  Block and inline boxes 3</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Page Layout</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Layout with CSS is easy. You take a part of your page and put it wherever you choose. You can place these elements&nbsp;<strong>absolutely</strong>&nbsp;or&nbsp;<strong>relative</strong>&nbsp;to another element.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Positioning</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>position</code>&nbsp;property is used to define whether a box is absolute, relative, static or fixed:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>static</code>&nbsp;is the default value and renders a box in the normal order of things, as they appear in the HTML.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>relative</code>&nbsp;is much like&nbsp;<code>static</code>&nbsp;but the box can be offset from its original position with the properties&nbsp;<code>top</code>,&nbsp;<code>right</code>,&nbsp;<code>bottom</code>&nbsp;and&nbsp;<code>left</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>absolute</code>&nbsp;pulls a box out of the normal flow of the HTML and delivers it to a world all of its own. In this crazy little world, the absolute box can be placed anywhere on the page using&nbsp;<code>top</code>,&nbsp;<code>right</code>,&nbsp;<code>bottom</code>&nbsp;and&nbsp;<code>left</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>fixed</code>&nbsp;behaves like&nbsp;<code>absoluteBut it will position a box in reference to the browser window instead of</code> the web page, so fixed boxes should stay exactly where they are on the screen even when the page is scrolled.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>When we talk of absolutely positioned boxes being placed anywhere on the page, they’re still relatively positioned from the edges. And to add another backtrack, the page doesn’t actually have to be the container — a box will be “absolutely” positioned in relation to any non-static positioned containing box. Just ignore that for now, though…</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Layout using absolute positioning</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can create a traditional two-column layout with absolute positioning if you have something like the following HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;div id="navigation"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="this.html"&gt;This&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="that.html"&gt;That&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="theOther.html"&gt;The Other&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;

&lt;div id="content"&gt;
    &lt;h1&gt;Ra ra banjo banjo&lt;/h1&gt;
    &lt;p&gt;Welcome to the Ra ra banjo banjo page. Ra ra banjo banjo. Ra ra banjo banjo. Ra ra banjo banjo.&lt;/p&gt;
    &lt;p&gt;(Ra ra banjo banjo)&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And if you apply the following CSS:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#navigation {
    <strong>position: absolute;</strong>
    <strong>top: 0;</strong>
    <strong>left: 0;</strong>
    width: 200px;
}

#content {
    margin-left: 200px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You will see that this will set the navigation bar to the left and set the width to 200 pixels. Because the navigation is absolutely positioned, it has nothing to do with the flow of the rest of the page so all that is needed is to set the left margin of the content area to be equal to the width of the navigation bar.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
}

#navigation2 {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
}

#content {
    margin: 0 200px; /* setting top and bottom margin to 0 and right and left margin to 200px */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The only downside to absolutely positioned boxes is that because they live in a world of their own, there is no way of accurately determining where they end. If you were to use the examples above and all of your pages had small navigation bars and large content areas, you would be okay, but, especially when using relative values for widths and sizes, you often have to abandon any hope of placing anything, such as a footer, below these boxes. If you wanted to do such a thing, one way would be to&nbsp;<strong>float</strong>&nbsp;your chunks, rather than absolutely positioning them.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Floating</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Floating a box will shift it to the right or left of a line, with surrounding content flowing around it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Floating is normally used to shift around smaller chunks within a page, such as pushing a navigation link to the right of a container, but it can also be used with bigger chunks, such as navigation columns.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Using&nbsp;<code>float</code>, you can&nbsp;<code>float: </code><strong><code>left</code>&nbsp;or&nbsp;<code>float: right</code>.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Working with the same HTML, you could apply the following CSS:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#navigation {
    <strong>float: left;</strong>
    width: 200px;
}

#navigation2 {
    <strong>float: right;</strong>
    width: 200px;
}

#content {
    margin: 0 200px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Then, if you do not want the next box to wrap around the floating objects, you can apply the&nbsp;<code>clear</code>&nbsp;property:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>clear: left</code>&nbsp;will clear left floated boxes</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>clear: right</code>&nbsp;will clear right floated boxes</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>clear: both</code>&nbsp;will clear both left and right floated boxes.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So if, for example, you wanted a footer in your page, you could add a chunk of HTML…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
&lt;div id="footer"&gt;
    &lt;p&gt;Footer! Hoorah!&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…and then add the following CSS:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
#footer {
    <strong>clear: both;</strong>
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And there you have it. A footer that will appear underneath all columns, regardless of the length of any of them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This has been a general introduction to positioning and floating, with emphasis on the larger “chunks” of a page, but remember, these methods can be applied to any box within those boxes, too.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Specificity</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you have two (or more) conflicting CSS rules that point to the same element, there are some basic rules that a browser follows to determine which one is most&nbsp;<strong>specific</strong>&nbsp;and therefore wins out.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It may not seem like something that important, and in most cases you won’t come across any conflicts at all, but the larger and more complex your CSS files become, or the more CSS files you start to juggle with, the greater likelihood there is of conflicts arising.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">More Specific = Greater Precedence</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If the selectors are the same, the last one will always precede. For example, if you had:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p { color: red }
p { color: blue }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The text in the box of&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;elements would be colored blue because that rule came last.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>However, you won’t usually have identical selectors with conflicting declarations on purpose (because there’s not much point). Conflicts quite legitimately come up, though, when you have&nbsp;<strong>nested</strong>&nbsp;selectors.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
div p { color: red }
p { color: blue }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this example it might seem that a&nbsp;<code>p</code>&nbsp;within a&nbsp;<code>div</code>&nbsp;would be colored blue, seeing as a rule to color&nbsp;<a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;boxes blue comes last, but they would actually be colored red due to the&nbsp;<strong>specificity</strong>&nbsp;of the first selector. Basically,&nbsp;<strong>the more specific a selector, the more preference it will be given</strong>&nbsp;when it comes to conflicting styles.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Calculating Specificity</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The actual specificity of a group of nested selectors takes some calculating. You can give every&nbsp;<strong>ID selector</strong>&nbsp;(“#whatever”) a value of&nbsp;<strong>100</strong>, every&nbsp;<strong>class selector</strong>&nbsp;(“.whatever”) a value of&nbsp;<strong>10</strong>&nbsp;and every&nbsp;<strong>HTML selector</strong>&nbsp;(“whatever”) a value of&nbsp;<strong>1</strong>. When you add them all up, hey presto, you have a specificity value.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.htmldog.com/references/html/tags/p/"><code>p</code></a>&nbsp;has a specificity of&nbsp;<strong>1</strong>&nbsp;(1 HTML selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>div p</code>&nbsp;has a specificity of&nbsp;<strong>2</strong>&nbsp;(2 HTML selectors, 1+1)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>.tree</code>&nbsp;has a specificity of&nbsp;<strong>10</strong>&nbsp;(1 class selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>div p.tree</code>&nbsp;has a specificity of&nbsp;<strong>12</strong>&nbsp;(2 HTML selectors + a class selector, 1+1+10)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>#baobab</code>&nbsp;has a specificity of&nbsp;<strong>100</strong>&nbsp;(1 id selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>body #content .alternative p</code>&nbsp;has a specificity of&nbsp;<strong>112</strong>&nbsp;(HTML selector + id selector + class selector + HTML selector, 1+100+10+1)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So if all of these examples were used,&nbsp;<code>div p.tree</code>&nbsp;(with a specificity of 12) would win out over&nbsp;<code>div p</code>&nbsp;(with a specificity of 2) and&nbsp;<code>body #content .alternative p</code>&nbsp;would win out over all of them,&nbsp;<strong>regardless of the order</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Media Queries</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Media queries</strong>&nbsp;are used to target CSS at specific&nbsp;<strong>media types</strong>&nbsp;and&nbsp;<strong>media features</strong>. Styles can be applied to print or to screens of a certain size, for example.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Applying media queries</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Media queries can be added to a&nbsp;<code>link</code>&nbsp;HTML element:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="markup" class="language-markup line-numbers">
&lt;link rel="stylesheet" href="this.css" media="<strong>print</strong>"&gt;
&lt;!-- applies an external print-only stylesheet --&gt;

&lt;link rel="stylesheet" href="that.css" media="<strong>screen and (max-width: 800px)</strong>"&gt;
&lt;!-- applies an external stylesheet to screens up to 800 pixels wide --&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Media queries can also be embedded in stylesheets using an&nbsp;<code>@media</code>&nbsp;rule:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media <strong>print</strong> {
    body {
        font-family: "Times New Roman", Times, serif;
    }
    /* etc. */
}
/* applies styles to print only */

@media <strong>screen and (max-width: 800px)</strong> {
    body {
        padding: 0;
    }
    /* etc. */
}
/* applies styles to screens up to 800 pixels wide */
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><code>@import</code>&nbsp;can also be used (<code>@import url(this.css) print</code>, for example).</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Media types</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>screen</code>&nbsp;and&nbsp;<code>print</code>&nbsp;are the most common media types.&nbsp;<code>all</code>&nbsp;can also be used and is the default state of a media query. Others, with patchy support, are&nbsp;<code>braille</code>,&nbsp;<code>embossed</code>,&nbsp;<code>handheld</code>,&nbsp;<code>projection</code>,&nbsp;<code>speech</code>,&nbsp;<code>tty</code>, and&nbsp;<code>tv</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Media features</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<figure class="wp-block-table"><table><tbody><tr><th>Feature</th><th>Description</th><th>Possible values</th></tr><tr><td><code>width</code><code>min-width</code><code>max-width</code></td><td>Display area width.</td><td>[length], eg.&nbsp;<code>800px</code></td></tr><tr><td><code>height</code><code>min-height</code><code>max-height</code></td><td>Display area height.</td><td>[length], eg.&nbsp;<code>20em</code></td></tr><tr><td><code>device-width</code><code>min-device-width</code><code>max-device-width</code></td><td>Screen width.</td><td>[length], eg.&nbsp;<code>2in</code></td></tr><tr><td><code>device-height</code><code>min-device-height</code><code>max-device-height</code></td><td>Screen height.</td><td>[length], eg.&nbsp;<code>10cm</code></td></tr><tr><td><code>orientation</code></td><td>Portrait (when height is greater than or equal to width) or landscape (when width is greater than height).</td><td><code>portrait</code><code>landscape</code></td></tr><tr><td><code>aspect-ratio</code><code>min-aspect-ratio</code><code>max-aspect-ratio</code></td><td>The ratio of the value of&nbsp;<code>width</code>&nbsp;to the value of&nbsp;<code>height</code>.</td><td>[ratio], eg.&nbsp;<code>2/1</code></td></tr><tr><td><code>device-aspect-ratio</code><code>min-device-aspect-ratio</code><code>max-device-aspect-ratio</code></td><td>The ratio of the value of&nbsp;<code>device-width</code>&nbsp;to the value of&nbsp;<code>device-height</code>.</td><td>[ratio], eg.&nbsp;<code>16/9</code></td></tr><tr><td><code>color</code><code>min-color</code><code>max-color</code></td><td>The number of bits per color component of a screen.</td><td>[integer]<br><code>0</code>&nbsp;indicates a device is not color.<br><code>color</code>&nbsp;without a value is the equivalent of&nbsp;<code>min-color: 1</code>&nbsp;(device is color).</td></tr><tr><td><code>color-index</code><code>min-color-index</code><code>max-color-index</code></td><td>The number of entries in a device’s color lookup table.</td><td>[integer]<br><code>0</code>&nbsp;indicates a device does not use a color lookup table.<br><code>color-index</code>&nbsp;without a value is the equivalent of&nbsp;<code>min-color-index: 1</code>&nbsp;(device uses a color lookup table).</td></tr><tr><td><code>monochrome</code><code>min-monochrome</code><code>max-monochrome</code></td><td>The number of bits per pixel on a grayscale device.</td><td>[integer]<br><code>0</code>&nbsp;indicates a device is not grayscale.<br><code>monochrome</code>&nbsp;without a value is the equivalent of&nbsp;<code>min-monochrome: 1</code>&nbsp;(device is grayscale).</td></tr><tr><td><code>resolution</code><code>min-resolution</code><code>max-resolution</code></td><td>A device’s pixel density.</td><td>[resolution], eg.&nbsp;<code>300dpi</code></td></tr><tr><td><code>scan</code></td><td>Used with&nbsp;<code>tv</code>&nbsp;media type. The scanning process of a device.</td><td><code>progressive</code><code>interlace</code></td></tr><tr><td><code>grid</code></td><td>If a device is grid (such as a teletype-like terminal) or bitmap.</td><td>[integer]<br><code>0</code>&nbsp;indicates a device is not grid.<br><code>grid</code>&nbsp;without a value is the equivalent of&nbsp;<code>grid: 1</code>&nbsp;(device is grid).</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>Media features and their values should be contained inside parentheses, such as&nbsp;<code>(min-device-aspect-ratio: 16/9)</code>&nbsp;or&nbsp;<code>(color)</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Combining media queries</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Logical OR: comma-separated list</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A comma-separated list will apply styles to multiple media queries.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media screen, projection {
    /* CSS applied if device is screen OR projection */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Logical AND:&nbsp;<code>and</code></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>and</code>&nbsp;keyword will combine media queries.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media print and (min-resolution: 150dpi) {
    /* CSS applied if device is print AND resolution is at least 150dpi */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Logical NOT:&nbsp;<code>not</code></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>not</code>&nbsp;keyword will exclude media queries.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
@media not screen {
    /* CSS applied if device is NOT screen */
}</code></pre>
<!-- /wp:code -->

<!-- wp:spacer {"height":"57px"} -->
<div style="height:57px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Pseudo Elements</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Pseudo elements</strong>&nbsp;suck on to selectors much like&nbsp;pseudo classes, taking the form of&nbsp;<code>selector:pseudoelement { property: value; }</code>. There are four of the suckers.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">First Letters and First Lines</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>first-letter</code>&nbsp;pseudo element applies to the first letter inside a box and&nbsp;<code>first-line</code>&nbsp;to the top-most displayed line in a box.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/firstLetterFirstLine.png" alt=""/><figcaption class="wp-element-caption">Targeting the first letter and first line of a paragraph with pseudo elements.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>As an example, you could create drop caps and a bold first-line for paragraphs with something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p {
    font-size: 12px;
}

<strong>p:first-letter</strong> {
    font-size: 24px;
    float: left;
}

<strong>p:first-line</strong> {
    font-weight: bold;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The CSS 3 specs suggest pseudo elements should include two colons, so&nbsp;<code>p::first-line</code>&nbsp;as opposed to&nbsp;<code>p:first-line</code>. This is to differentiate them with pseudo classes. Aiming for backwards-compatibility (whereby older web pages will still work in new browsers), browsers will still behave if they come across the single colon approach and this remains the best approach in most circumstances due to some older browsers not recognizing the double colon.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Before and After Content</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>before</code>&nbsp;and&nbsp;<code>after</code>&nbsp;pseudo elements are used in conjunction with the&nbsp;<code>content</code>&nbsp;property to place content either side of a box without touching the HTML.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>What?! Content in my&nbsp;<strong>CSS</strong>?! But I thought&nbsp;<strong>HTML</strong>&nbsp;was for content!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Well, it is. So use sparingly. Look at it like this: You are borrowing content to use solely as presentation, such as using “!” because it looks pretty. Not because you actually want to exclaim anything.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The value of the&nbsp;<code>content</code>&nbsp;property can be&nbsp;<code>open-quote</code>,&nbsp;<code>close-quote</code>, any&nbsp;<strong>string</strong>&nbsp;enclosed in quotation marks, or any&nbsp;<strong>image</strong>, using&nbsp;<code>url(imagename)</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
blockquote:before {
    content: open-quote;
}

blockquote:after {
    content: close-quote;
}

li:before {
    content: "POW! ";
}

p:before {
    content: url(images/jam.jpg);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>content</code>&nbsp;property effectively creates another box to play with so you can also add styles to the “presentational content”:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
li:before {
    content: "POW! ";
    background: red;
    color: #fc0;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">End of Intermediate CSS Tutorial</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"textAlign":"center","level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Code Snippets</h1>
<!-- /wp:heading -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"&gt;&lt;/script&gt;

&lt;script&gt;
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^//, "") ==
        this.pathname.replace(/^//, "") &amp;&amp;
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate({
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });
&lt;/script&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Inertia Anchor Link Code:</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","level":1,"textColor":"pale-pink"} -->
<h1 class="wp-block-heading has-text-align-center has-pale-pink-color has-text-color">End of Intermediate Tutorial</h1>
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
<figure class="wp-block-image aligncenter is-resized"><img src="http://nuggetofjoy.com/wp-content/uploads/border-radius-1.png" alt="" style="width:140px;height:140px" width="140" height="140"/><figcaption class="wp-element-caption">Corners are cut around the corresponding quarters of a circle (or ellipse) with the specified radius.</figcaption></figure>
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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
<p>We already know that&nbsp;colors can be defined by name, RGB, or hex values, but CSS 3 also allows you to paint away with&nbsp;<strong>HSL</strong>&nbsp;— hue, saturation, and lightness — as well as stipulating&nbsp;<strong>transparency</strong>.</p>
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
<p>It doesn’t stop there, oh no. CSS 3 allows you to target not only specific media but also variables relating to that media, such as screen size (particularly helpful in targeting phones). </p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Embedding fonts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>@font-face</code>&nbsp;has been around for a long time but was nigh-on useless for much of its life. CSS 3 has polished it up and it is now widely used as a technique for embedding fonts in a web page so that a typeface can be used even if it isn’t sitting on the user’s computer. So you no longer need to rely on “web safe” fonts such as Arial or Verdana. Exciting times.</p>
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
<p>What this does is create a font named “font of all knowledge” using the&nbsp;<code><strong>font-family</strong></code>&nbsp;<strong>descriptor</strong>&nbsp;and links the font file “fontofallknowledge.woff” to that name using the&nbsp;<code>src</code>&nbsp;descriptor. “font of all knowledge” can then be used in a standard font rule, such as:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
p { font-family: "font of all knowledge", arial, sans-serif; }
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The font will be downloaded (in this case from the same directory as the CSS file) and applied to paragraphs. If the browser is too decrepit to deal with sparkly new font-faces, it will simply revert to the next, standard, font in the list.</p>
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
<p>There are free web fonts out there that you can find, download, upload, and use, though. Hell, you could even create one yourself if you’re mad-scientist clever. There are also web font providers, such as Adobe’s&nbsp;Typekit, that have a large selection of fonts to choose from at a price.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="http://www.google.com/fonts/">Google Web Fonts</a>&nbsp;has a more limited selection but it’s free to use and makes things super, super (super, super, super) easy. All you need to do is link to one of their external CSS files, which is nothing more than a&nbsp;<code>@font-face</code>&nbsp;rule, and whammo — you’ve got a darling new font to play with.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Attribute Selectors</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What? More selectors? Because someone somewhere really wants you to keep your HTML as tidy as possible. So before you add a class attribute to a tag see if you can  target it by an attribute that might already be there.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Attribute selectors allow you to style an element’s box based on the presence of an HTML attribute or of an attribute’s value.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">With the attribute…</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Appending an attribute name enclosed in square brackets, to style something that contains a certain&nbsp;<strong>attribute</strong>, you can do something like this:</p>
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
<p>This example will apply a width of 200 pixels only to<strong>&nbsp;<code>input</code></strong>&nbsp;elements that are specified as being text boxes (<code>&lt;input type="text"&gt;</code>).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This approach can certainly be useful in forms where&nbsp;<code><strong>input</strong></code>&nbsp;elements can take on many guises using the&nbsp;<code>type</code>&nbsp;attribute.</p>
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

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">CSS Transitions</h1>
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
<p>The&nbsp;<code>transition</code>&nbsp;property, however, is much more powerful, allowing smooth animation (rather than a jump from one state to another). It is a&nbsp;shorthand property&nbsp;that combines the following properties (which can be used individually if you so choose):</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>transition-property</code>: which property (or properties) will transition.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>transition-duration</code>: how long the transition takes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>transition-timing-function</code>: if the transition takes place at a constant speed or if it accelerates and decelerates.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>transition-delay</code>: how long to wait until the transition takes place.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Returning to the shorthand property, if a transition is applied like so…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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
<p>…when the link is hovered over, the color will gradually change rather than suddenly switch. The&nbsp;<code><strong>transition</strong></code>&nbsp;property here is saying it wants all properties transitioned over half a second in a linear fashion with no delay.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For a transition to take place, only&nbsp;<code><strong>transition-duration</strong></code>&nbsp;is required, the rest defaulting to&nbsp;<code>transition-property: all; transition-timing-function: ease; transition-delay: 0;</code>. So you could, for example, simply declare&nbsp;<code>transition: .5s</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Targeting specific properties</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While “all” can be used in transition-property (or transition), you can tell a browser only to transition certain properties, by simply plonking in the property name you want to change. So the previous example could actually include&nbsp;<code>transition: color .5s ease 0</code>, given only the color changes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to target more than one property (without using “all”), you can offer up a comma-separated list with&nbsp;<strong><code>transition-proper</code></strong><code><strong>ty</strong></code>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
a:link {
    transition: .5s;
    <strong>transition-property: color, font-size;</strong>
...
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or you can offer up a slew of rules for transitioning each property like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
a:link {
    <strong>transition: color .5s, font-size 2s;</strong>
...
</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Easing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>OK, so&nbsp;<code><strong>transition-timing-function</strong></code>. is the least obvious fella. It effectively states how the browser should deal with the intermediate states of the transition.</p>
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

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">CSS Backgrounds: Multiples, Size, and Origin</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As well as plastering a&nbsp;<strong>single or tiling background</strong> image&nbsp;across parts of your page, you can also apply&nbsp;<strong>multiple backgrounds</strong>, adjust the&nbsp;<strong>size of background images</strong>, and define the&nbsp;<strong>origin of a background</strong>&nbsp;based on levels of the box model.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Multiple backgrounds</h2>
<!-- /wp:heading -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/multipleBackgrounds-1-1.png" alt=""/><figcaption class="wp-element-caption">A repeating background image, a single-instance background image, and combining them together in the same box.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>CSS3 allows you to apply multiple background images to a single box by simply putting image locations in a comma-separated list:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background-image: url(this.jpg), url(that.gif), url(theother.png);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>More usefully, you can also define all of the other delightful background aspects. If you wanted to style a chunky button-like link with separate background, bullet, and arrow, for example, you could use something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: url(bg.png), url(bullet.png) 0 50% no-repeat, url(arrow.png) right no-repeat;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Easy, right? It’s just the same as using<strong>&nbsp;<code>background-image</code>,&nbsp;<code>background-position</code>,&nbsp;<code>background-repeat</code>,&nbsp;<code>background-attachment</code>,</strong> and&nbsp;<code><strong>background</strong></code>, except you can specify more than one background with the aid of that helpful little comma.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Background size</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code><strong>background-size</strong></code>&nbsp;property allows you to stretch or compress a background image.</p>
<!-- /wp:paragraph -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/background-size-1.jpg" alt=""/><figcaption class="wp-element-caption"><code>background-size: contain</code>&nbsp;and&nbsp;<code>background-size: cover</code></figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The values can be:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code><strong>auto</strong></code>, which maintains the background image’s&nbsp;<strong>original size and width/height ratio</strong>.</li>
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
<li><code><strong>cover</strong></code>, which maintains the background image’s&nbsp;original ratio&nbsp;and makes it&nbsp;large enough to fill the entire background area, which may result in either the height or width cropping.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Background Origin</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong><code>background-origin</code>&nbsp;</strong>is the remarkably dull kid of the bunch. Not unintelligent, just dull. The kid that the other kids point and laugh at. The property defines where the background area of a box actually starts. If you think of the box model, when you set a background it should, by default, start from the upper-left corner of the padding box. So if you had…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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
<p>…the background image should appear in the top left corner, in the padding box, immediately after the inner edges of a green border. You can change this behavior, however, with&nbsp;<strong><code>background-origin</code>.</strong> Its self-descriptive values can be&nbsp;<code><strong>padding-box</strong></code>&nbsp;(default, as described above),&nbsp;<code>border-box</code>, and&nbsp;<code>content-box</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So adding&nbsp;<code><strong>background-origin: border-box</strong></code>&nbsp;to the previous example will cause the origin of the background image to be tucked up inside the border.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Transformations</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>By default, CSS boxes, those visual representations of HTML elements, are so square. Rectangular, at least; level, with four straight sides and four boring right angles. But with the use of&nbsp;<code><strong>transform</strong></code>&nbsp;you can stretch and mold those boxes into all manner of shapes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This page will only mention the&nbsp;<code><strong>transform</strong></code>&nbsp;and&nbsp;<code>transform-origin</code>&nbsp;properties but, in practice, you will probably want to duplicate these with&nbsp;<code><strong>-webkit-transform</strong></code>&nbsp;and&nbsp;<code>-webkit-transform-origin</code>&nbsp;to achieve the same results in the likes of Safari and Chrome as well as&nbsp;<strong><code>-ms-transform</code>&nbsp;and&nbsp;<code>-ms-transform-origin</code></strong>&nbsp;for Internet Explorer 9, which is the earliest version of IE that will support transforms.</p>
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
transform: skew(20deg,10deg);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…will tip over the x-axis by 20 degrees on the y-axis by 10 degrees.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also specify one angle, such as&nbsp;<code><strong>skew(20deg)</strong></code>, which is the equivalent of&nbsp;<code><strong>skew(20deg,0)</strong></code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Scaling</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Obviously, you can change&nbsp;<code><strong>width</strong></code>&nbsp;and&nbsp;<code><strong>height</strong></code>&nbsp;properties on a box, but that won’t affect the size of anything inside it. Scaling, however, will multiply not only the width and height, but the size of everything contained in the box as well:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
transform: scale(2);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will multiply the size by two. You can use any positive number, including a value less than “1”, such as “0.5”, if you want to use a shrink ray.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also scale the horizontal and vertical dimensions separately:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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
<p>There’s one important aspect missing. If you are transforming a box, a further parameter is involved: the transformation's origin. If you are rotating, for example, it will, by default, turn on the point that is the center of the box; if you had a piece of card, stuck a pin right through the middle of it, and then stuck that to your forehead (don’t do this), the card would spin from the middle. You can change where in the card the pin is stuck with&nbsp;<code><strong>transform-origin</strong></code>, however:</p>
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
<p>And all of that’s just with two dimensions.&nbsp;<code><strong>transform</strong></code>&nbsp;is a leviathan with even greater power that can also be used for three-dimensional magic. On the most basic level, you can use&nbsp;<code>rotateX</code>&nbsp;and&nbsp;<code>rotateY</code>, which will rotate “towards” or “away” from you on the x- and y-axis, and there are the likes of&nbsp;<code>translate3d</code>,&nbsp;<code>scale3d</code>, and the intimidating&nbsp;<code>matrix3d</code>, all of which have even greater browser difficulties than their 2D counterparts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Gradients</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Images showing a smooth dissolve from one color to another are plastered all over the web. However, CSS 3 allows you to place them in your designs without creating an actual image file.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is no special property for this; you use the&nbsp;<code><strong>background</strong></code>&nbsp;or&nbsp;<code><strong>background-</strong>image</code>&nbsp;property and define your gradient in its value. You can create both&nbsp;<strong>linear</strong>&nbsp;and&nbsp;<strong>radial</strong>&nbsp;gradients this way.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textColor":"vivid-cyan-blue"} -->
<h2 class="wp-block-heading has-vivid-cyan-blue-color has-text-color">Linear gradients</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For an even spread of two colors, fading from one at the top to another at the bottom, a declaration can be something like:</p>
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

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
background: linear-gradient(to right, orange, red);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or one corner:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
background: linear-gradient(to bottom right, orange, red);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Or any angle that tickles your fancy:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
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

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="vYvgpeo" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/vYvgpeo">
  Linear Gradient</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: radial-gradient(circle, yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/radialGradient2-1.png" alt=""/><figcaption class="wp-element-caption">A circular radial gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Using “closest-side”, “closest-corner”, “farthest-side” and “farthest-corner” you can also specify if the gradient is contained by the sides or corners of the box nearest to or furthest away from the origin:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
background: radial-gradient(circle closest-side, yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And if you wanted to place the origin of the gradient somewhere specific, you can also use “at”:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
background: radial-gradient(at top left, yellow, green);
</code></pre>
<!-- /wp:code -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="xxmgpPy" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/xxmgpPy">
  Radial Gradient</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

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
<p>A single gradient will fill a box with the previous methods but you can use “repeating-linear-gradient” and “repeating-linear-gradient” to build on the color stops and, repeat the gradient.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For basic bars of black-and-white bars, for example:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: repeating-linear-gradient(white, black 15px, white 30px);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/repeatingGradient-1.png" alt=""/><figcaption class="wp-element-caption">A repeating linear gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Or something a bit more solid:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
background: repeating-radial-gradient(black, black 15px, white 15px, white 30px);
</code></pre>
<!-- /wp:code -->

<!-- wp:image -->
<figure class="wp-block-image"><img src="http://nuggetofjoy.com/wp-content/uploads/repeatingGradient2-1.png" alt=""/><figcaption class="wp-element-caption">A repeating radial gradient.</figcaption></figure>
<!-- /wp:image -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="LYrjyKY" user="ndangelo"]See the Pen <a href="https://codepen.io/ndangelo/pen/LYrjyKY">
  Sky gradients Example</a> by Nicholas D'Angelo (<a href="https://codepen.io/ndangelo">@ndangelo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"level":1,"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background">Media Queries</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>@media</code>&nbsp;at-rules, used to target styles at specific media, such as&nbsp;<strong>screen</strong>&nbsp;or&nbsp;<strong>print</strong>,&nbsp;<a href="https://www.htmldog.com/guides/css/advanced/atrules/">have already been covered</a>. But this can be pushed to an even greater level of sophistication, enabling you to specify&nbsp;<strong>different design choices depending on screen size</strong>. A page can then be optimized and laid out completely differently for&nbsp;<strong>mobile phones</strong>,&nbsp;<strong>tablets</strong>, and varying browser&nbsp;<strong>window sizes</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To recap, if we want to apply some CSS solely to screen-based&nbsp;<strong>media</strong>, for example, one option would be to slot something like the following in at the bottom of a stylesheet:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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
<p>As well as using a general&nbsp;<code>max-width</code>&nbsp;on the main content area (the&nbsp;<a href="https://www.htmldog.com/references/html/tags/article/"><code>article</code></a>&nbsp;elements), this site also has a number of size-dependent CSS rules. </p>
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

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">
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
<p>It’s important to keep in mind that a&nbsp;<strong>CSS pixel</strong>&nbsp;need not be the same as a&nbsp;<strong>physical pixel</strong>. While a screen may physically be 720 pixels wide, a browser may actually apply CSS assuming that it is 480 pixels wide, for example. This is so that a standard designed web page will more likely fit on the screen. In this example, there is a&nbsp;<strong>pixel ratio</strong>&nbsp;of 1.5:1: There are 1½ physical pixels to every CSS pixel. A standard desktop monitor will have a pixel ratio of 1:1: One CSS pixel to every physical pixel.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you want to apply styles only to these devices, you can use something like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"fontSize":"medium","lineNumbers":true} -->
<pre class="wp-block-code has-medium-font-size"><code lang="css" class="language-css line-numbers">
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

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">From: <a href="https://www.htmldog.com/" target="_blank" rel="noreferrer noopener">https://www.htmldog.com/</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[/read]
<!-- /wp:shortcode -->

<!-- wp:shortcode /-->

<!-- wp:shortcode /-->

<!-- wp:shortcode /-->

<!-- wp:shortcode /-->

<!-- wp:shortcode /-->

<!-- wp:shortcode /-->
