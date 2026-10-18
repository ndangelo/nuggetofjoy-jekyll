---
title: "3. Let's Talk HTML, Heading, Blocks and inline, Links, Images, White space + indentation"
date: "2023-01-13 13:30:01"
layout: post
permalink: "/lets-talk-html/"
categories: ["dmet-155-introduction-to-web-design", "learn-to-code-now"]
tags: []
wordpress_id: "59609"
---

<!-- wp:paragraph -->
<p>Why talk about HTML first? Well, we need to have&nbsp;<strong>some content which we can style and interact with.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>HTML stands for <strong>HyperText Markup Language</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Remember, the user doesn’t see the actual code that the author writes. The user sees the final version of the website — the browser turns the HTML code into a web page, just like Spotify turns a music data file into an audio of Smashmouth’s All Star.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The first thing we’d do is create a new file and name it something related to the page, then with the HTML extension. For example, about.html is a good file name for the about page on a website. We then open it and start writing our content.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>"Isn’t this scientific document cool?"</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We would start the sentence with a paragraph open tag, then finish it with a paragraph closing tag:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">&lt;p&gt;Isn’t this scientific document cool?&lt;/p&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Notice the slight difference between the two tags. The open tag doesn’t have a slash in it and the closing tag does. When we have a slash in a tag, it means stop doing this tag now.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The name of the tag is a “p” tag — the p standing for paragraph. Tim liked to use shorter names for two reasons — it’s easier to write and back in the 80s the Internet was a lot slower, so the less text the less time the page took to load.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are around 100 types of HTML tags but on a day to day basis, most coders only use around 15 to 20 of them. Paragraph tags&nbsp;(&lt;p&gt;)&nbsp;are among the most common.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Tags can also be reused too. There’s a high probability that there’s more than one tag on your page, so to “mark up” or describe the text, we can just use another&nbsp;&lt;p&gt;&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>Isn’t this scientific document cool?&lt;/p>

&lt;p>I just discovered how to make lead into gold. I thought that wasn’t possible?&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Oh hi, I’m a heading</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Of course, not everything is a paragraph. On any document, you’re likely to have titles and sub-titles. Just like at the top of this section, where there’s a heading saying hi to you.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As with paragraphs, we have to mark up our text with which bits are headings and sub-headings, and as with any document there’s a hierarchy to our headings and titles.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We start with the main headings and work our way down to sub-headings and sub-sub-headings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s take a résumé. The main heading on the page would be your name e.g. Rik Lomas. You’d then have sub-headings such as Education,</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Experience and References. Then within each of those you’d have sub-sub-headings, so in Experience, you might have company names (e.g. SuperHi, Steer etc).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In HTML, there are tags to reflect these headings, sub-headings and sub-sub-headings (down to sub-sub-sub-sub-sub-headings!).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Your main heading would be a&nbsp;&lt;h1&gt;&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;h1&gt;Rik Lomas&lt;/h1&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Your sub-heading would be a&nbsp;&lt;h2&gt;&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;h2&gt;Education&lt;/h2&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Your sub-sub-heading would be a&nbsp;&lt;h3&gt;&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;h3&gt;SuperHi Inc.&lt;/h3&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>There are even&nbsp;&lt;h4&gt;,&nbsp;&lt;h5&gt;&nbsp;and&nbsp;&lt;h6&gt;&nbsp;tags too. Notice that it’s not just in descending number, it’s text of an equal importance. For instance, I might have a tag&nbsp;&lt;h3&gt;&nbsp;above another&nbsp;&lt;h2&gt;. I can continue to use paragraphs above and below my headings too.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;h1>Rik Lomas&lt;/h1>

&lt;h2>Experience&lt;/h2>

&lt;h3>SuperHi Inc&lt;/h3>

&lt;p>I was the founder and coder for SuperHi...&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>So very quickly, we’ve covered six more tags, taking our total to seven. Remember, we said that most professional coders only use 15 to 20 tags, so we’re 30 to 40 percent through all the tags you might ever need to make websites.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>index.html</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We talked earlier about naming our HTML files after the page they represent. An “about” page would be named “about.html”, a “contact” page would be named “contact.html” or “contact-us.html” (remember you can’t use spaces in file names).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There is a special name however for the first page you expect your user to visit. We’d call it the home page, but its file name is “index.html”.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Blocks and inline</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>All the tags we’ve talked about so far are kind of bigger boxes of content. Visually they’d go across the whole page and the next tag would go below them. Your header is at the top, then a paragraph below, then another paragraph below that.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>These tags are called block tags because they fill the width of the page and make the next tag go beneath them.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Most tags are block tags, but there are other tags where you don’t want to fill up the whole width of the page. For example, you might just want to highlight one or two words in a paragraph.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are a few tags that can work within a line of text, these are called inline tags.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An example is a bold tag, the &lt;b&gt; tag. You might only want to highlight one or two words in the paragraph.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>At my last job, conversions improved by &lt;b>over 50%&lt;/b> in just 4 months.&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>To paraphrase Xzibit in Pimp My Ride: I heard you liked tags so I put tags inside your tags. We’ll be putting more tags inside other tags later.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Other inline tags include for italics&nbsp;(&lt;i&gt;)&nbsp;and to underline something&nbsp;(&lt;u&gt;). In this paragraph, we’re having “over 50%” as italic and “just 4” as underline. That’s a&nbsp;&lt;p&gt;&nbsp;tag with two different tags inside.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Block tags and inline tags</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>BLOCK INLINE</h3>
<!-- /wp:heading -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>At my last job, conversions improved by &lt;i>over 50%&lt;/i> in &lt;u>just 4&lt;/u> months.&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>One thing to note is that an inline tag could go to multiple lines of text</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>— for instance in the previous example, the word “over” could be the last word of the first line and the “50%” could be the first word of the second line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A good rule of thumb is that block tags go down the page and inline tags go across the page.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Links</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>One important tag that made the web successful was the ability to link one page to another, so users could click between the pages of not only one author’s website but to other author’s sites. The original idea came from scholarly referencing and footnotes, but it massively helped the discoverability of other people’s websites.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A link tag in HTML is called the&nbsp;&lt;a&gt;&nbsp;tag — the “a” stands for anchor because it might link to another site, another page or another section within the page so it doesn’t always go away from the same place.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Just like the bold, italic and underline tags, a link tag is an inline tag, as you could just link one word in a paragraph to somewhere else.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The link is a little more complex than the other tags we’ve covered. We need to introduce a new part of HTML called attributes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Attributes</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let’s give an example of a link tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;a&gt;Go to Facebook&lt;/a&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This is some text that says “Go to Facebook” and is surrounded by the</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>&lt;a> link tags at the start and end. But if a user clicks the link, where should they go to? Should they go to the Facebook.com homepage? Should they go to the Wikipedia entry on Facebook? Should they go to the Google Finance page for Facebook’s stock price? It depends.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We need to give this some more information.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We don’t want to write out the URL for where the link is going to in the text, otherwise our user will see an ugly URL when they just want the words “Go to Facebook”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To add this extra information, we need to add in an HTML attribute — an extra bit of information for this tag. To do this, we are going to add a special HTML attribute to the link called the “href” attribute (short for hypertext reference).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><a href="http://www.facebook.com/" target="_blank" rel="noreferrer noopener">&lt;a href="</a>http://www.facebook.com"&gt;Go to Facebook&lt;/a&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The way we add attributes is to add them to opening tags in HTML. We add a space after the name of the tag (e.g. “a”, “h1”), then the name of attribute (e.g. “href”) with an equals symbol, then something in quotation marks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are more attributes that we’ll talk about later, but for now we’ll only be using the “href” attribute on link tags.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Different types of links</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The link above goes to a different website completely. These links are called “absolute” links — basically something that isn’t on your own site.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can write the href attribute as a “relative” link if you’re linking to another page on your own website.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;a href="about.html"&gt;About page&lt;/a&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Notice you don’t need the full URL, just the name of the file on your site.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Other links — email me...</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You don’t have to link to other HTML pages on a link. You can do other actions such as pop open a new email compose box.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><a href="mailto:rik@superhi.com" target="_blank" rel="noreferrer noopener">&lt;a href="</a>mailto:rik@superhi.com"&gt;Email me!&lt;/a&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Notice this href attribute starts with “mailto:” then the email address of where you want to send it.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Joining everything together</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>So we’ve covered paragraphs, titles, sub-titles, inline tags and links. We can combine them all together to get something like this.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;h1>Rik Lomas&lt;/h1>

&lt;h2>Experience&lt;/h2>

&lt;h3>SuperHi Inc&lt;/h3>

&lt;p>I worked at &lt;a href="https://www.superhi.com"> SuperHi&lt;/a> from 2014-2017.&lt;/p>

&lt;p>When I was there, I helped increase profits by

&lt;b>30%&lt;/b> over the course of those years&lt;/p>

&lt;p>You can &lt;a href="about.html">contact me here&lt;/a>.&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>Images</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>How to use the &lt;img&gt; tag</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Most tags have an open and a close tag. Images just have one open tag and no close tag.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;img src="cat.jpg"&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>No close tag there and a brand new attribute called “src”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can use multiple images together and put them inside other tags too.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>

&lt;img src="cat.jpg">

&lt;img src="dog.jpg">

&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>To put in two images inside a paragraph, one with a cat image and another with a dog image.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Note these “src” attributes are using “relative” sources, just like in the link tags being able to use “about.html”. You can also use “absolute” sources too.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><a rel="noreferrer noopener" href="http://i.imgur.com/5J5vJm8.jpg" target="_blank">&lt;img src="</a>https://www.esu.edu"></code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>Image file types</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are only a few types of image file that we can use on the web. Certain image types are good for certain jobs. The file types are:</p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<figure class="wp-block-table"><table><tbody><tr><td>.jpg</td><td>JPG files are great for photographs and detailed color imagery.</td></tr><tr><td><br>.gif</td><td>Are they called “giffs” or “jiffs”? Who knows... but GIF files are good for animated images.</td></tr><tr><td><br>.png</td><td>PNG files are good for flatter color images and if you have any transparency in your image.</td></tr><tr><td><br>.svg</td><td>SVG stands for scalable vector graphics which means they don’t pixelate when really large. Great for icons and logos.</td></tr></tbody></table></figure>
<!-- /wp:table -->

<!-- wp:heading {"level":3} -->
<h3>White space + indentation</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We mentioned earlier that HTML is all about content and CSS is all about style. Because of this, HTML doesn’t really care about how your code looks, it will ignore any white space you put in your code and make it look “normal”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For instance, this code...</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>Hi there, Rik!&lt;/p>

...would look exactly the same as...

&lt;p> Hi there, Rik!&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>HTML ignores all the spacing and treats it as if it’s one sentence. If we want to control how the website looks, we need to use CSS.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Indentation</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As HTML doesn’t care about gaps, it means we can make our code cleaner to read so that when we come back to it in a few months, or if we’re working with another coder, it can make more sense.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For instance, this is hard to read:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/p&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>So to make it easier, I would write it like:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>

&lt;a href="about.html">About&lt;/a>

&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Notice that not only have I put the&nbsp;&lt;a&gt;&nbsp;tag with some space above and below, but I’ve also indented the code so it goes into the page a little. I do this by pressing the tab key to push it further in.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is just my personal preference. There’s no right and wrong way to do HTML — both ways would look the same to a user.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Indentation is a powerful tool when you start getting more complex code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>One more example to make it more apparent. We could have code like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>&lt;a href=”about.html”>About&lt;/a> 

&lt;a href=”blog.html”> Blog&lt;/a> 

&lt;a href=”contact.html”>Contact&lt;/a>&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Simply one paragraph with three one-word links. We can clean it up like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;p>

&lt;a href="about.html">About&lt;/a>

&lt;a href="blog.html">Blog&lt;/a>

&lt;a href="contact.html">Contact&lt;/a>

&lt;/p></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>All I’ve done is separate the links onto different lines, then indent (or tab) the contents of the paragraph. Nice, clean and looks the same.</p>
<!-- /wp:paragraph -->
