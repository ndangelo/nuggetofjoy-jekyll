---
title: "3. HTML Boilerplate"
date: "2023-01-09 18:15:13"
layout: post
permalink: "/html-boilerplate/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58442"
---

<!-- wp:paragraph -->
<p>All HTML documents have the same basic structure or boilerplate that needs to be in place before anything useful can be done. In this lesson, we will explore the different parts of this boilerplate and see how it all fits together.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>How to write the basic boilerplate for an HTML document</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to open HTML documents in your browser</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#creating-an-html-file">Creating an HTML File</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To demonstrate an HTML boilerplate, we first need an HTML file to work with.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Create a new folder on your computer and name it&nbsp;<code>html-boilerplate</code>. Within that folder create a new file and name it&nbsp;<code>index.html</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You’re probably already familiar with a lot of different types of files, for example doc, pdf, and image files.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To let the computer know we want to create an HTML file, we need to append the filename with the&nbsp;<code>.html</code>&nbsp;extension as we have done when creating the&nbsp;<code>index.html</code>&nbsp;file.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It is worth noting that we named our HTML file&nbsp;<code>index</code>. We should always name the HTML file that will contain the homepage of our websites&nbsp;<code>index.html</code>. This is because web servers will by default look for an index.html page when users land on our websites - and not having one will cause big problems.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#the-doctype">The DOCTYPE</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Every HTML page starts with a doctype declaration. The doctype’s purpose is to tell the browser what version of HTML it should use to render the document. The latest version of HTML is HTML5, and the doctype for that version is simply&nbsp;<code>&lt;!DOCTYPE html&gt;</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The doctypes for older versions of HTML were a bit more complicated. For example, this is the doctype declaration for HTML4:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>However, we probably won’t ever want to be using an older version of HTML, and so we’ll always use&nbsp;<code>&lt;!DOCTYPE html&gt;</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Open the&nbsp;<code>index.html</code>&nbsp;file created earlier in your text editor and add&nbsp;<code>&lt;!DOCTYPE html&gt;</code>&nbsp;to the very first line.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#html-element">HTML Element</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After we declare the doctype, we need to provide an&nbsp;<code>&lt;html&gt;</code>&nbsp;element. This is what’s known as the root element of the document, meaning that every other element in the document will be a descendant of it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This becomes more important later on when we learn about manipulating HTML with JavaScript. For now, just know that the HTML element should be included on every HTML document.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Back in the&nbsp;<code>index.html</code>&nbsp;file, let’s add the&nbsp;<code>&lt;html&gt;</code>&nbsp;element by typing out its opening and closing tags, like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;/html&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 id="what-is-the-lang-attribute">What is the&nbsp;<code>lang</code>&nbsp;attribute?</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>lang</code>&nbsp;specifies the language of the text content in that element. This attribute is primarily used for improving accessibility of the webpage. It allows assistive technologies, for example screen readers, to adapt according to the language and invoke correct pronunciation.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#head-element">Head Element</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>&lt;head&gt;</code>&nbsp;element is where we put important meta-information&nbsp;<strong>about</strong>&nbsp;our webpages, and stuff required for our webpages to render correctly in the browser. Inside the&nbsp;<code>&lt;head&gt;</code>, we&nbsp;<strong>should not</strong>&nbsp;use any element that displays content on the webpage.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="the-charset-meta-element">The Charset Meta Element</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>We should always have the meta tag for the charset encoding of the webpage in the head element:&nbsp;<code>&lt;meta charset="utf-8"&gt;</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Setting the encoding is very important because it ensures that the webpage will display special symbols and characters from different languages correctly in the browser.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="title-element">Title Element</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Another element we should always include in the head of an HTML document is the title element:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>&lt;title&gt;My First Webpage&lt;/title&gt;</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The title element is used to give webpages a human-readable title which is displayed in our webpage’s browser tab.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we didn’t include a title element, the webpage’s title would default to its file name. In our case that would be&nbsp;<code>index.html</code>, which isn’t very meaningful for users; this would make it very difficult to find our webpage if the user has many browser tabs open.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are many more elements that can go within the head of an HTML document. However, for now it’s only crucial to know about the two elements we have covered here. We will introduce more elements that go into the head throughout the rest of the curriculum.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Back in our&nbsp;<code>index.html</code>&nbsp;file, let’s add a head element with a charset meta element and a title within it. The head element goes within the HTML element and should always be the first element under the opening&nbsp;<code>&lt;html&gt;</code>&nbsp;tag:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;!DOCTYPE html&gt;

&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
  &lt;/head&gt;
&lt;/html&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#body-element">Body Element</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The final element needed to complete the HTML boilerplate is the&nbsp;<code>&lt;body&gt;</code>&nbsp;element. This is where all the content that will be displayed to users will go - the text, images, lists, links, and so on.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To complete the boilerplate, add a body element to the&nbsp;<code>index.html</code>&nbsp;file. The body element also goes within the HTML element and is always below the head element, like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
  &lt;/head&gt;

  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#viewing-html-files-in-the-browser">Viewing HTML Files in the Browser</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The HTML boilerplate in the&nbsp;<code>index.html</code>&nbsp;file is complete at this point, but how do you view it in the browser? There are a couple of different options:</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><!-- wp:paragraph -->
<p>A note: In order to avoid branching our lesson’s instructions to accommodate for all of the differences between browsers, we are going to be using Google Chrome as our primary browser for the remainder of this course. All references to the browser will pertain specifically to Google Chrome. We&nbsp;<strong>strongly</strong>&nbsp;suggest that you use Google Chrome for all of your testing going forward.</p>
<!-- /wp:paragraph --></blockquote>
<!-- /wp:quote -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>You can drag and drop an HTML file from your text editor into the address bar of your browser.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You can find the HTML file in your file system and then double click it. This will open up the file in the default browser your system uses.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You can use the terminal to open the file in your browser.<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><code>Ubuntu</code>&nbsp;- Navigate to the directory containing the file and type&nbsp;<code>google-chrome index.html</code></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><code>macOS</code>&nbsp;- Navigate to the directory containing the file and type&nbsp;<code>open ./index.html</code></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list --></li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Using one of the methods above, open up the index.html file we have been working on. You’ll notice the screen is blank. This is because we don’t have anything in our body to display.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Back in the&nbsp;<code>index.html</code>&nbsp;file, let’s add a heading (more on these later) to the body, and save the file:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Webpage&lt;/title&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Now, if you refresh the page in the browser, you should see the changes take effect, and the heading “Hello World!” will be displayed.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#vscode-shortcut">VSCode Shortcut</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>VSCode has a built-in shortcut you can use for generating all the boilerplate in one go. Please note that this shortcut only works while editing a file with the ‘.html’ extension or a text file with the HTML language already selected. To trigger the shortcut, delete everything in the&nbsp;<code>index.html</code>&nbsp;file and just enter&nbsp;<code>!</code>&nbsp;on the first line. This will bring up a couple of options. Press the enter key to choose the first one, and voila, you should have all the boilerplate populated for you.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But it’s still good to know how to write the boilerplate yourself in case you find yourself using a text editor like notepad (heaven forbid) which doesn’t have this shortcut. Try not to use the shortcut in your first few HTML projects, so you can build some muscle memory for writing the boilerplate code.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Watch and follow along to Kevin Powell’s brilliant&nbsp;<a href="https://youtu.be/V8UAEoOvqFg?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&amp;t=93" target="_blank" rel="noreferrer noopener">Building Your First Web Page video</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Build some muscle memory by deleting the contents of the&nbsp;<code>index.html</code>&nbsp;file and trying to write out all the boilerplate again from memory. Don’t worry if you have to peek at the lesson content the first few times if you get stuck. Just keep going until you can do it a couple of times from memory.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Run your boilerplate through the W3&nbsp;<a href="https://validator.w3.org/" target="_blank" rel="noreferrer noopener">HTML validator</a>&nbsp;or alternatively this&nbsp;<a href="https://www.freeformatter.com/html-validator.html" target="_blank" rel="noreferrer noopener">HTML validator</a>. Validators ensure your markup is correct and are an excellent learning tool, as they provide feedback on syntax errors you may be making often and aren’t aware of, such as missing closing tags and extra spaces in your HTML.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#the-doctype">What is the purpose of the doctype declaration?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#html-element">What is the HTML element?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#head-element">What is the purpose of the head element?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-html-boilerplate#body-element">What is the purpose of the body element?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:tadv/classic-paragraph /-->
