---
title: "Flex-Template: Demo Video and Assignment"
date: "2023-11-08 12:42:48"
layout: post
permalink: "/flex-template-demo-video-and-assignment/"
categories: ["projects"]
tags: []
wordpress_id: "64007"
---

<!-- wp:html -->
<iframe width="800" height="500" src="https://www.youtube.com/embed/v2WpYzBe5zc?si=Y2O-8x0idDbBx4F9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- /wp:html -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Smooth Scroll Script</h2>
<!-- /wp:heading -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"&gt;&lt;/script&gt;

&lt;script&gt;
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &amp;&amp;
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

<!-- wp:heading {"backgroundColor":"luminous-vivid-amber"} -->
<h2 class="wp-block-heading has-luminous-vivid-amber-background-color has-background">Fixed Top Navbar</h2>
<!-- /wp:heading -->

<!-- wp:html -->
<iframe width="800" height="500" src="https://www.youtube.com/embed/4rocQPjZPjc?si=KCNYpda8hid6vOxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- /wp:html -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/*Default Fixed Top Navbar Code*/

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  margin: auto;
  height: auto;
  background: #257ca1;
  border-radius-left: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 25px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  justify-content: space-between;
}


/*Default Tablet Fixed Top Navbar Code*/

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 80%;
    background: #257ca1;
    max-width: 750px;
    height: auto;
    margin-left: 10%;
    margin-right: 50%;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    display: block;
  }


/*Default Phone Fixed Top Navbar Code*/

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #257ca1;
    width: 400px;

    height: auto;
    overflow: auto;
    margin: auto;
    /* margin-left: 10%;
    margin-right: 50%;*/
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    display: block;
  }</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background">Background Video (HTML)</h2>
<!-- /wp:heading -->

<!-- wp:html -->
<iframe width="800" height="500" src="https://www.youtube.com/embed/S1IvivmqMmE?si=K6-0nHAFcYz9O2Ah" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>If you wish to include a Background Video to your project, insert the following code below the stylesheet link in your pages header tags.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;video src="video/australia_opera.mp4" loop muted autoplay poster="#" type="video/mp4"&gt;&lt;/video&gt;</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Background Video (CSS)</h2>
<!-- /wp:heading -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"backgroundColor":"pale-pink"} -->
<h2 class="wp-block-heading has-pale-pink-background-color has-background">Flex Trick</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Having trouble removing flex commands in @media? Use the folling command and start from scratch!</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.column {
 all: initial;


}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"backgroundColor":"luminous-vivid-amber"} -->
<h2 class="wp-block-heading has-luminous-vivid-amber-background-color has-background">Utilizing the template and demo you worked on in class, perform the following:</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Remove all background colors, border radius, etc.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Make all links visible (use #999 or #ccc) if you want to use greys until you pick a color scheme.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Decide what your website will be. Portfolio? Business, etc..</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">You most likely will need a logo. It can be created in CSS or a graphic program.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Decide what separate pages you will need (6 minimum). How many (class="cols") will you need on each page? What type? What will they contain? Images, text, video, audio?</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Will you need code and functionality not demonstrated in the template? We can make it happen!</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Use a separate folder for this project. It will live in your home (root) directory.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue","fontSize":"medium"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background has-medium-font-size">Part II</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">Your website should consist of six pages. The topic of the site is your choice (with my approval.)</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><strong>The following are the requirements for your project.</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list {"fontSize":"medium"} -->
<ul class="has-medium-font-size"><!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Six web pages</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Top fixed navigation (if you wish. view the video on this page for more information on fixed navigation). The nav items need to be linked to the appropriate page.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Social media Icons (They don't need to link to your social media accounts (if any)</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">A logo. (It can be straightforward. Your initials or name in a nice, clean font would suffice. Although, you can create something in the Adobe Creative Suite.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Create a color scheme that will go well with your site. Many sites can help you. One is <a href="https://coolors.co/">https://coolors.co/</a>, <a href="http://colorlovers.com">colorlovers.com</a>, <a href="https://color.adobe.com/create/color-wheel">https://color.adobe.com/create/color-wheel</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Each page needs a specific topic (The pages should correspond to your topnav)</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Include interesting photography. (People like big pictures)</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Your site should be dynamic and viewable on multiple devices. We already established this functionality with our template. </li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Please keep it simple and clean. Whitespace can make a viewer feel comfortable.&nbsp;</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">You may wish to put all your content in a wrapper. That will help you constrain and organize your layout.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Use at least one media type on a page (audio, video, animated gif, Soundcloud or YouTube?)</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">The amount of content per page should be appropriate to the classification of the page. A simple "about" page should include pictures, text, and perhaps some links to external sites.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Links should have a rollover state - including the navigation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">One or more image rollover states (we did this in CSS).</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">One link (or more) should direct a viewer to another site page. (Internal Links)</li>
<!-- /wp:list-item -->

<!-- wp:list-item {"fontSize":"medium"} -->
<li class="has-medium-font-size">Div nesting (You will need to do this anyway to build your site.)</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><strong>Optional:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">Do not feel constrained. You can do amazing things with this project!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">Perhaps use gradients somewhere? Maybe a background? Anything that will complement the design of your site.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size">Video background. If you decide to do this, be subtle and use a simple video that doesn't detract from your&nbsp;</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><strong>NOTE: You will have time to work on this site. Do not rush. (It should be completed in class ) - mostly. I will need to approve your site before you upload it.</strong></p>
<!-- /wp:paragraph -->
