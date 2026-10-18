---
title: "4. Working With Text"
date: "2023-01-09 18:12:44"
layout: post
permalink: "/working-with-text/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58440"
---

<!-- wp:paragraph -->
<p>Most content on the web is text-based, so you will find yourself needing to work with HTML text elements quite a bit.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this lesson, we will learn about the text-based elements you are likely to use the most.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>How to create paragraphs</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to create headings</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to create bold text</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to create italicized text</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The relationships between nested elements</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to create HTML comments</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#paragraphs">Paragraphs</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What would you expect the following text to output on an HTML page?</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;body&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>It looks like two paragraphs of text, and so you might expect it to display in that way. However that is not the case, as you can see in the output below:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="xxrKqeV" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/xxrKqeV">
no-paragraphs-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>When the browser encounters new lines like this in your HTML, it will compress them down into one single space. The result of this compression is that all of the text is clumped together into one long line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we want to create paragraphs in HTML,&nbsp;we need to use the paragraph element, which will add a newline after each of our paragraphs. A paragraph element is defined by wrapping text content with a&nbsp;<code>&lt;p&gt;</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Changing our example from before to use paragraph elements fixes the issue:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="mdwbmdp" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/mdwbmdp">
pargraph-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#headings">Headings</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Headings are different from other HTML text elements: they are displayed larger and bolder than other text to signify that they are headings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are 6 different levels of headings starting from&nbsp;<code>&lt;h1&gt;</code>&nbsp;to&nbsp;<code>&lt;h6&gt;</code>. The number within a heading tag represents that heading’s level. The largest and most important heading is h1, while h6 is the tiniest heading at the lowest level.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Headings are defined much like paragraphs. For example, to create an h1 heading, we wrap our heading text in a&nbsp;<code>&lt;h1&gt;</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="LYLPLbg" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/LYLPLbg">
html-headings-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Using the correct level of heading is important as levels provide a hierarchy to the content. An h1 heading should always be used for the heading of the overall page, and the lower level headings should be used as the headings for content in smaller sections of the page.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#strong-element">Strong Element</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>&lt;strong&gt;</code>&nbsp;element makes text bold. It also semantically marks text as important; this affects tools, like screen readers, that users with visual impairments will rely on to use your website. The tone of voice on some screen readers will change to communicate the importance of the text within a strong element. To define a strong element we wrap text content in a&nbsp;<code>&lt;strong&gt;</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can use strong on its own:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="qBjWXrB" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/qBjWXrB">
html-single-strong-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>But you will probably find yourself using the strong element much more in combination with other text elements, like this:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="wvewqJr" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/wvewqJr">
html-strong-with-paragraph-exmample</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Sometimes you will want to make text bold without giving it an important meaning. You’ll learn how to do that in the CSS lessons later in the curriculum.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#em-element">Em Element</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The em element makes text italic. It also semantically places emphasis on the text, which again may affect things like screen readers. To define an emphasized element we wrap text content in a&nbsp;<code>&lt;em&gt;</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To use em on its own:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="wvewqpp" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/wvewqpp">
html-single-em-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Again, like the strong element, you will find yourself mostly using the em element with other text elements:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="VwWZzyj" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/VwWZzyj">
html-em-with-paragraph-example</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#nesting-and-indentation">Nesting and Indentation</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You may have noticed that in all the examples in this lesson we indent any elements that are within other elements. This is known as nesting elements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When we nest elements within other elements, we create a parent and child relationship between them. The nested elements are the children and the element they are nested within is the parent.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the following example, the body element is the parent and the paragraph is the child:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="oNwjEvO" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/oNwjEvO">
html-nesting-parent-child</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>Just as in human relationships, HTML parent elements can have many children.&nbsp;Elements at the same level of nesting are considered to be siblings.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, the two paragraphs in the following code are siblings, since they are both children of the body tag and are at the same level of nesting as each other:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="ZEybrYx" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/ZEybrYx">
html-nesting-siblings</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>We use indentation to make the level of nesting clear and readable for ourselves and other developers who will work with our HTML in the future. It is recommended to indent any child elements by two spaces.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The parent, child, and sibling relationships between elements will become much more important later when we start styling our HTML with CSS and adding behavior with JavaScript. For now, however, it is just important to know the distinction between how elements are related and the terminology used to describe their relationships.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#html-comments">HTML Comments</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>HTML comments are not visible to the browser; they allow us to&nbsp;<em>comment</em>&nbsp;on our code so that other developers or our future selves can read them and get some context about something that might not be clear in the code.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Writing an HTML comment is simple: We just enclose the comment with&nbsp;<code>&lt;!--</code>&nbsp;and&nbsp;<code>--&gt;</code>&nbsp;tags. </p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Watch Kevin Powell’s&nbsp;<a href="https://www.youtube.com/watch?v=yqcd-XkxZNM&amp;list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&amp;index=3" target="_blank" rel="noreferrer noopener">HTML Paragraph and Headings Video</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Watch Kevin Powell’s&nbsp;<a href="https://www.youtube.com/watch?v=gW6cBZLUk6M&amp;list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&amp;index=4" target="_blank" rel="noreferrer noopener">HTML Bold and Italic Text Video</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>To get some practice working with text in HTML, create a plain blog article page which uses different headings, uses paragraphs, and has some text in the paragraphs bolded and italicized. You can use&nbsp;<a href="https://loremipsum.io/" target="_blank" rel="noreferrer noopener">Lorem Ipsum</a>&nbsp;to generate dummy text, in place of real text as you build your sites.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#create-paragraph-element">How do you create a paragraph in HTML?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#headings">How do you create a heading in HTML?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#different-heading-levels">How many different levels of headings are there and what is the difference between them?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#strong-element">What element should you use to make text bold and important?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#em-element">What element should you use to make text italicized to add emphasis to it?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#nested-relationship">What relationship does an element have with any nested elements within it?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#elements-same-level">What relationship do two elements have if they are at the same level of nesting?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-working-with-text#html-comments">How do you create HTML comments?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
