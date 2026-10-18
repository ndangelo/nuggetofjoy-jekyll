---
title: "How to Create a Video Background with CSS [Step-by-Step]"
date: "2024-10-09 17:06:52"
layout: post
permalink: "/how-to-create-a-video-background-with-css-step-by-step/"
categories: ["projects"]
tags: []
wordpress_id: "66735"
---

<!-- wp:paragraph -->
<p><strong>To use a video background,</strong> we have to use the <strong>HTML 5&nbsp;<code>&lt;video&gt;</code>&nbsp;element with position&nbsp;<code>absolute</code>&nbsp;inside a container wrapper.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Videos are increasingly common on websites nowadays and a great way to create a modern website. With just a bit of CSS you can add a video background to your site in minutes. However, note that this technique works only for&nbsp;<code>&lt;video&gt;</code>&nbsp;elements. This means the video will have to be hosted somewhere. You can also&nbsp;<a href="https://alvarotrigo.com/blog/how-to-create-a-youtube-video-background-with-css/">use CSS to create a Youtube video background</a>, but that’s not what this tutorial is about.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="finding-a-background-video">Finding a background video</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you don’t have a video yet, the easiest way to find one for your site is to use video stock galleries like&nbsp;<a href="https://pixabay.com/videos/" target="_blank" rel="noreferrer noopener">Pixabay</a>&nbsp;or&nbsp;<a href="https://www.pexels.com/videos/" target="_blank" rel="noreferrer noopener">Pexel</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-27/pixabay-video-stock-free.jpeg" alt="Pixabay Free Video Stock"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Once you find the one you want to use, you’ll have to download it and upload it to your server (or CDN services like&nbsp;<a href="https://cloudinary.com/" target="_blank" rel="noreferrer noopener">Cloudinary</a>).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Once uploaded we have the URL of the video and we can use it in our&nbsp;<code>&lt;video&gt;</code>&nbsp;element.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="adding-the-html-for-the-video">Adding the HTML for the video</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For the video<span style="box-sizing: border-box; margin: 0px; padding: 0px;">, we’ll use the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank" rel="noopener">HTML 5 video element</a>. It expects at least a video source file and can be configured to pass</span> multiple HTML attributes.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For our example, we’ll be using this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><code>&lt;video <em>playsinline</em> <em>autoplay</em> <em>muted</em> <em>loop</em> <em>poster</em>="cake.jpg"&gt;
    &lt;source <em>src</em>="my-video-url.webm" <em>type</em>="video/webm"&gt;
    Your browser does not support the video tag.
&lt;/video&gt;
</code><small>Code language: HTML, XML (xml)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>We’ll talk <span style="box-sizing: border-box; margin: 0px; padding: 0px;">more about the&nbsp;<a href="https://alvarotrigo.com/blog/background-video-css/#configuring-the-video" target="_blank" rel="noopener">background video configuration</a>&nbsp;and&nbsp;</span><a href="https://alvarotrigo.com/blog/background-video-css/#video-formats-and-browser-compatibility">formats</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="placing-the-video-in-the-background-with-css">Placing the video in the background with CSS</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Usually, in CSS we set the background image by using the&nbsp;<code>background</code>&nbsp;property or the&nbsp;<code>background-image</code>&nbsp;one.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><code>background: url(imgs/my-background-image.png);
background-size: cover;
</code><small>Code language: CSS (css)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>However, the&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background" target="_blank" rel="noreferrer noopener">background property</a>&nbsp;only works for images and colors. Not with videos.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now we have a standard video element, so, how do we convert it into a background? We’ll be using a little trick here. Using the CSS&nbsp;<code>position: absolute</code>&nbsp;we will simulate a background element.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><code>video {
  position: absolute;
  top: 0;
  left: 0;
}
</code><small>Code language: CSS (css)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This will place our video outside the document's normal flow and relative to the element we choose within its parents.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, time to add our video container! We’ll be using a&nbsp;<code>div</code>&nbsp;element as the container for our video. We called it&nbsp;<code>video-wrapper</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><code>&lt;div <em>class</em>="video-wrapper"&gt;
  &lt;video <em>playsinline</em> <em>autoplay</em> <em>muted</em> <em>loop</em> <em>poster</em>="cake.jpg"&gt;
    &lt;source <em>src</em>="my-css-video-background.webm" <em>type</em>="video/webm"&gt;
    Your browser does not support the video tag.
  &lt;/video&gt;
&lt;/div&gt;
</code><small>Code language: HTML, XML (xml)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And here’s where the magic happens:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><code>.video-wrapper {
  /* Telling our absolute positioned video to 
  be relative to this element */
  position: relative;

  width: 400px;
  height: 200px;

  /* Will not allow the video to overflow the 
  container */
  overflow: hidden;

  /* Centering the container's content vertically 
  and horizontally */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</code><small>Code language: CSS (css)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>I added comments on the CSS code so you can see what each of the properties is for.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="making-the-background-video-cover-the-whole-container">Making the background video cover the whole container</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>It’s common for backgrounds to cover the whole container. We usually do this with CSS by using the style&nbsp;<code>background-size: cover</code>&nbsp;directly on the background image. But because in this case, our video is not actually a CSS background, we’ll be using another little trick by using&nbsp;<code>object-fit: cover</code>&nbsp;together with&nbsp;<code>height: 100%</code>&nbsp;and&nbsp;<code>width: 100%</code>&nbsp;on our&nbsp;<code>video</code>&nbsp;element.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers"><code>video {
  /** Simulationg background-size: cover */
  object-fit: cover;
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
}
</code><small>Code language: CSS (css)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>To illustrate this better, here’s an example of a video background not covering the whole container:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="gOxWyYw" pen_title="Video background CSS - not background cover" user="alvarotrigo"]See the Pen <a href="https://codepen.io/alvarotrigo/pen/gOxWyYw">
  Video background CSS - not background cover</a> by Álvaro (<a href="https://codepen.io/alvarotrigo">@alvarotrigo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>And here’s the same video background covering the whole container:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="QWMvPya" pen_title="Video background CSS - not background cover" user="alvarotrigo"]See the Pen <a href="https://codepen.io/alvarotrigo/pen/QWMvPya">
  Video background CSS - not background cover</a> by Álvaro (<a href="https://codepen.io/alvarotrigo">@alvarotrigo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="adding-elements-on-top-of-the-video-background">Adding elements on top of the video background</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Right now there’s nothing special we have to do in order to add content on top of our video. And that’s because we added the property&nbsp;<code>position: relative</code>&nbsp;to the video container when setting the video as a background (which is absolute positioned).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Anything that you add after the video element will be positioned on top of it.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><code>&lt;div <em>class</em>="video-wrapper"&gt;
  &lt;video <em>playsinline</em> <em>autoplay</em> <em>muted</em> <em>loop</em> <em>poster</em>="cake.jpg"&gt;
    &lt;source <em>src</em>="my-css-video-background.webm" <em>type</em>="video/webm"&gt;
    Your browser does not support the video tag.
  &lt;/video&gt;

  &lt;!-- This will be positioned on top of our video background --&gt;
  &lt;div <em>class</em>="header"&gt;
    &lt;h1&gt;Blueberry Cheesecake&lt;/h1&gt;
    &lt;button&gt;Recipe here&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code><small>Code language: HTML, XML (xml)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here’s the final result:</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[codepen_embed height="300" default_tab="html,result" slug_hash="GRvmzMX" pen_title="Video background CSS" user="alvarotrigo"]See the Pen <a href="https://codepen.io/alvarotrigo/pen/GRvmzMX">
  Video background CSS</a> by Álvaro (<a href="https://codepen.io/alvarotrigo">@alvarotrigo</a>)
  on <a href="https://codepen.io">CodePen</a>.[/codepen_embed]
<!-- /wp:shortcode -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="configuring-the-video">Configuring the video</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you noticed, in our HTML code we’ve added quite a few things on the&nbsp;<code>video</code>&nbsp;element. The most important ones are&nbsp;<code>loop</code>,&nbsp;<code>muted</code>&nbsp;and&nbsp;<code>autoplay</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><code>&lt;video <em>playsinline</em> <em>autoplay</em> <em>muted</em> <em>loop</em> <em>poster</em>="cake.jpg"&gt;
    &lt;source <em>src</em>="my-css-video-background.webm" <em>type</em>="video/webm"&gt;
    Your browser does not support the video tag.
&lt;/video&gt;
</code><small>Code language: HTML, XML (xml)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Videos won’t be able to autoplay unless we mute them first. And if you are using a video background using the&nbsp;<code>loop</code>&nbsp;option is quite common too, so the video will play endlessly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>poster</code>&nbsp;is the image we want to show while the video still loading and can’t yet autoplay.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="video-formats-and-browser-compatibility">Video formats and browser compatibility</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank" rel="noreferrer noopener">HTML 5 video element</a>&nbsp;allows the use of multiple source files. This means we can provide our video in different formats for browser compatibility.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><code>&lt;video <em>playsinline</em> <em>autoplay</em> <em>muted</em> <em>loop</em> <em>poster</em>="my-static-image.jpg"&gt;
    &lt;source <em>src</em>="my-video-url.webm" <em>type</em>="video/webm"&gt;
    &lt;source <em>src</em>="my-video-url.mp4" <em>type</em>="video/mp4"&gt;
    Your browser does not support the video tag.
&lt;/video&gt;
</code><small>Code language: HTML, XML (xml)</small></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this example, we first try to load the&nbsp;<code>webm</code>&nbsp;video, and if the browser can’t play it, it will fall back to the&nbsp;<code>mp4</code>&nbsp;version of it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Not all browsers can play all kinds of video formats, see&nbsp;<a href="https://caniuse.com/?search=video%20format" target="_blank" rel="noreferrer noopener">the compatibility table for each video format</a>.<a href="https://caniuse.com/?search=video%20format" target="_blank" rel="noreferrer noopener"></a></p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom","align":"center"} -->
<figure class="wp-block-image aligncenter"><a href="https://caniuse.com/?search=video%20format" target="_blank" rel="noreferrer noopener"><img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-27/video-formats-compatiblity.jpeg" alt="AVI Format Browser Compatibility"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>mp4</code>&nbsp;most modern browsers widely accept format, but using alternatives like&nbsp;<code>webm</code>&nbsp;can come in handy to save bandwidth too. So, adding both can be a good combination.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you wonder how to convert from one format to another, you can use any of the online converters. Just Google “mp4 to webm” or “webm to mp4” and you’ll find plenty of converters online.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading" id="conclusion">Conclusion</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There’s no excuse to use videos nowadays. Videos in websites are a very powerful design tool that can provide your website a modern look. They are easy to implement, ligther that GIF animations and high quality.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As you could see, you only need a few lines of CSS to set any video as a background. And, if you want to go one step further, you can go full-screen by using components like&nbsp;<a href="https://alvarotrigo.com/fullPage/">fullPage.js</a>. Check out the&nbsp;<a href="https://alvarotrigo.com/fullPage/examples/videoBackground.html">video example here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://alvarotrigo.com/fullPage/"></a></p>
<!-- /wp:paragraph -->
