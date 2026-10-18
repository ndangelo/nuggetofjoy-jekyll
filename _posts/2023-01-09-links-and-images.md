---
title: "6. Links And Images"
date: "2023-01-09 18:02:43"
layout: post
permalink: "/links-and-images/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58436"
---

<!-- wp:paragraph -->
<p>Links are one of the key features of HTML. They allow us to link to other HTML pages on the web. In fact, this is why it’s called the web.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In this lesson, we will learn how to create links and add some visual flair to our websites by embedding images.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>How to create links to pages on other websites on the internet</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to create links to other pages on your own websites</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The difference between absolute and relative links</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>How to display an image on webpage using HTML</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#preparation">Preparation</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To get some practice using links and images throughout this lesson we need an HTML project to work with.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Create a new directory named&nbsp;<code>odin-links-and-images</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Within that directory, create a new file named&nbsp;<code>index.html</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Fill in the usual HTML boilerplate.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Finally, add the following h1 to the body:</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;h1&gt;Homepage&lt;/h1&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#anchor-elements">Anchor Elements</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To create a link in HTML, we use the anchor element. An anchor element is defined by wrapping the text or another HTML element we want to be a link with an&nbsp;<code>&lt;a&gt;</code>&nbsp;tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Add the following to the body of the index.html page we created and open it in the browser:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;a&gt;click me&lt;/a&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You may have noticed that clicking this link doesn’t do anything. This is because an anchor tag on its own won’t know where we want to link to. We have to tell it a destination to go to. We do this by using an HTML attribute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag. An attribute is usually made up of two parts: a name, and a value; however, not all attributes require a value.&nbsp;In our case, we need to add a href (hyperlink reference) attribute to the opening anchor tag. The value of the href attribute is the destination we want our link to go to.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Add the following href attribute to the anchor element we created previously and try clicking it again, don’t forget to refresh the browser so the new changes can be applied.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;a href="https://www.theodinproject.com/about"&gt;click me&lt;/a&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>By default, any text wrapped with an anchor tag without a&nbsp;<code>href</code>&nbsp;attribute will look like plain text. If the&nbsp;<code>href</code>&nbsp;attribute is present, the browser will give the text a blue color and underline it to signify it is a link.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s worth noting you can use anchor tags to link to any kind of resource on the internet, not just other HTML documents. You can link to videos, pdf files, images, and so on, but for the most part, you will be linking to other HTML documents.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#absolute-and-relative-links">Absolute and Relative Links</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Generally, there are two kinds of links we will create:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Links to pages on other websites on the internet</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Links to pages located on our own websites</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 id="absolute-links">Absolute Links</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Links to pages on other websites on the internet are called absolute links. A typical absolute link will be made up of the following parts:&nbsp;<code>protocol://domain/path</code>. An absolute link will always contain the protocol and domain of the destination.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We’ve already seen an absolute link in action. The link we created to The Odin Project’s About page earlier was an absolute link as it contains the protocol and domain.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.theodinproject.com/about">https://www.theodinproject.com/about</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="relative-links">Relative Links</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Links to other pages within our own website are called relative links. Relative links do not include the domain name, since it is another page on the same site, it assumes the domain name will be the same as the page we created the link on.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Relative links only include the file path to the other page,&nbsp;<em>relative</em>&nbsp;to the page you are creating the link on. This is quite abstract, let’s see this in action using an example.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Within the&nbsp;<code>odin-links-and-images</code>&nbsp;directory, create another HTML file named&nbsp;<code>about.html</code>&nbsp;and paste the following code into it:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Odin Links and Images&lt;/title&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;About Page&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Back in the index page, add the following anchor element to create a link to the about page:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;body&gt;
  &lt;h1&gt;Homepage&lt;/h1&gt;
	&lt;a href="https://www.theodinproject.com/about"&gt;click me&lt;/a&gt;

	&lt;a href="about.html"&gt;About&lt;/a&gt;
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Open the index file in a browser and click on the about link to make sure it is all wired together correctly. Clicking the link should go to the about page we just created.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This works because the index and about page are in the same directory. That means we can simply use its name (<code>about.html</code>) as the link’s href value.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But we will usually want to organize our website directories a little better. Normally we would only have the index.html at the root directory and all other HTML files in their own directory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Create a directory named&nbsp;<code>pages</code>&nbsp;within the&nbsp;<code>odin-links-and-images</code>&nbsp;directory and move the&nbsp;<code>about.html</code>&nbsp;file into this new directory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Refresh the index page in the browser and then click on the about link. It will now be broken. This is because the location of the about page file has changed.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To fix this, we just need to update the about link href value to include the&nbsp;<code>pages/</code>&nbsp;directory since that is the new location of the about file&nbsp;<em>relative</em>&nbsp;to the index file.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;body&gt;
  &lt;h1&gt;Homepage&lt;/h1&gt;
  &lt;a href="pages/about.html"&gt;About&lt;/a&gt;
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Refresh the index page in the browser and try clicking the about link again, it should now be back in working order.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In many cases, this will work just fine; however, you can still run into unexpected issues with this approach. Prepending&nbsp;<code>./</code>&nbsp;before the link will in most cases prevent such issues. By adding&nbsp;<code>./</code>&nbsp;you are specifying to your code that it should start looking for the file/directory&nbsp;<em>relative</em>&nbsp;to the&nbsp;<code>current</code>&nbsp;directory.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;body&gt;
  &lt;h1&gt;Homepage&lt;/h1&gt;
  &lt;a href="./pages/about.html"&gt;About&lt;/a&gt;
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 id="a-metaphor">A Metaphor</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Absolute and relative links are a tricky concept to build a good mental model of, a metaphor may help:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Think of your domain name (<code>town.com</code>) as a town, the directory in which your website is located (<code>/museum</code>) as a museum, and each page on your website as a room in the museum (<code>/museum/movie_room.html</code>&nbsp;and&nbsp;<code>/museum/shops/coffee_shop.html</code>). Relative links like&nbsp;<code>./shops/coffee_shop.html</code>&nbsp;are directions from the current room (the museum movie room&nbsp;<code>/museum/movie_room.html</code>) to another room (the museum shop). Absolute links, on the other hand, are full directions including the protocol (<code>https</code>), domain name (<code>town.com</code>) and the path from that domain name (<code>/museum/shops/coffee_shop.html</code>):&nbsp;<code>https://town.com/museum/shops/coffee_shop.html</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#images">Images</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Websites would be fairly boring if they could only display text. Luckily HTML provides a wide variety of elements for displaying all sorts of different media. The most widely used of these is the image element.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To display an image in HTML we use the&nbsp;<code>&lt;img&gt;</code>&nbsp;element. Unlike the other elements we have encountered, the&nbsp;<code>&lt;img&gt;</code>&nbsp;element is self-closing. Empty, self-closing HTML elements do not need a closing tag.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Instead of wrapping content with an opening and closing tag, it embeds an image into the page using a src attribute which tells the browser where the image file is located. The src attribute works much like the href attribute for anchor tags. It can embed an image using both absolute and relative paths.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, using an absolute path we can display an image located on The Odin Project site:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="gORbExZ" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/gORbExZ">
absolute-path-image</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>To use images that we have on our own websites, we can use a relative path.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Create a new directory named&nbsp;<code>images</code>&nbsp;within the&nbsp;<code>odin-links-and-images</code>&nbsp;project.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Next, download&nbsp;<a href="https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&amp;w=640" target="_blank" rel="noreferrer noopener">this image</a>&nbsp;and move it into the images directory we just created.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Rename the image to&nbsp;<code>dog.jpg</code>.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Finally add the image to the&nbsp;<code>index.html</code>&nbsp;file:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;body&gt;
  &lt;h1&gt;Homepage&lt;/h1&gt;
	&lt;a href="https://www.theodinproject.com/about"&gt;click me&lt;/a&gt;

	&lt;a href="pages/about.html"&gt;About&lt;/a&gt;

	&lt;img src="images/dog.jpg"&gt;
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Save the&nbsp;<code>index.html</code>&nbsp;file and open it in a browser to view Charles in all his glory.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#parent-directories">Parent Directories</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What if we want to use the dog image in the about page? We would first have to go up one level out of the pages directory into its parent directory so we could then access the images directory.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To go to the parent directory we need to use two dots in the relative filepath like this:&nbsp;<code>../</code>. Let’s see this in action, within the body of the&nbsp;<code>about.html</code>&nbsp;file, add the following image below the heading we added earlier:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">&lt;img src="../images/dog.jpg"&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>To break this down:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>First, we are going to the parent directory of the pages directory which is&nbsp;<code>odin-links-and-images</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Then, from the parent directory, we can go into the&nbsp;<code>images</code>&nbsp;directory.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Finally, we can access the&nbsp;<code>dog.jpg</code>&nbsp;file.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Using the metaphor we used earlier, using&nbsp;<code>../</code>&nbsp;in a filepath is kind of like stepping out from the room you are currently in to the main hallway so you can go to another room.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#alt-attribute">Alt attribute</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Besides the src attribute, every image element should also have an alt (alternative text) attribute.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The alt attribute is used to describe an image. It will be used in place of the image if it cannot be loaded. It is also used with screen readers to describe what the image is to visually impaired users.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is how the The Odin Project logo example we used earlier looks with an alt attribute included:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="ExXjoEp" user="TheOdinProjectExamples"]See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/ExXjoEp">
image-alt-attribute</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>As a bit of practice, add an alt attribute to the dog image we added to the&nbsp;<code>odin-links-and-images</code>&nbsp;project.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li><a href="https://www.youtube.com/watch?v=tsEQgGjSmkM&amp;list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&amp;index=5" target="_blank" rel="noreferrer noopener">Watch Kevin Powell’s HTML Links Video</a>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.youtube.com/watch?v=0xoztJCHpbQ&amp;list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&amp;index=6" target="_blank" rel="noreferrer noopener">Watch Kevin Powell’s HTML Images Video</a>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.youtube.com/watch?v=ta3Oxx7Yqbo&amp;list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&amp;index=7" target="_blank" rel="noreferrer noopener">Watch Kevin Powell’s File Structure Video</a>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.internetingishard.com/html-and-css/links-and-images/#image-formats" target="_blank" rel="noreferrer noopener">Read about the four main image formats that can be used on the web</a>.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#anchor-elements">What element is used to create a link?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#attribute">What is an attribute?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#where-to-go">What attribute tells links where to go to?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#absolute-and-relative-links">What is the difference between an absolute and relative link?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#images">Which element is used to display an image?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#two-attributes">What two attributes do images always need to have?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-links-and-images#parent-filepath">How do you access a parent directory in a filepath?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.internetingishard.com/html-and-css/links-and-images/#image-formats">What are the four main image formats that you can use for images on the web?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
