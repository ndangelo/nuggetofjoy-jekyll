---
title: "8. Inspecting HTML And CSS"
date: "2023-01-09 17:57:50"
layout: post
permalink: "/inspecting-html-and-css/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58408"
---

<!-- wp:paragraph -->
<p>Being able to inspect and debug your HTML and CSS is critical to frontend development. This lesson will take us through the Chrome Dev Tools, which allow you to see detailed information about your elements and CSS rules, as well as assist you in finding and fixing problems in your code.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>You will know how to access the element inspector.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You will know how to select and inspect specific elements.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>You will know how to test out HTML and CSS in the inspector.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#the-inspector">The Inspector</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To open up the inspector, you can right-click on any element of a webpage and click “Inspect Element” or press F12. For example, if you navigate to&nbsp;<a href="https://theodinproject.com/" target="_blank" rel="noreferrer noopener">our homepage</a>&nbsp;and open the inspector, you might see something that looks a little bit like the image below. (Note that if you are already logged in to TOP you will not see the page shown below. If you want to stay logged in, use Incognito mode or your browser’s equivalent to separately view the page.)</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/594984d7c9f9e744577f19ea475b3864e8cc7c91/html_css/v2/foundations/inspecting-html-and-css/imgs/00.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/00-9-1.png" alt="Chrome Inspector"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Don’t get overwhelmed with all the tools you’re now seeing! For this lesson, we want to focus on the Elements and Styles panes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#inspecting-elements">Inspecting Elements</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In the Elements pane, you can see the entire HTML structure of your page. You can click on any of the elements in this pane to select that specific element. Alternatively, you can click the blue-highlighted icon shown below on the left, and hover over any element on the page.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/594984d7c9f9e744577f19ea475b3864e8cc7c91/html_css/v2/foundations/inspecting-html-and-css/imgs/01.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/01-2-1.png" alt="Inspector Icon"/></a></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>When an element is selected, the Styles tab will show all the currently applied styles, as well as any styles that are being overwritten (indicated by a strikethrough of the text).&nbsp;For example, if you use the inspector to click on the “Your Career in Web Development Starts Here” header on the TOP homepage, on the right-hand side you’ll see all the styles that are currently affecting the element, as seen below:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/594984d7c9f9e744577f19ea475b3864e8cc7c91/html_css/v2/foundations/inspecting-html-and-css/imgs/02.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/02-2-1.png" alt="Styles Pane"/></a></figure>
<!-- /wp:image -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/f8fd38fc62578d8e8368f5303126215a492847f0/foundations/html_css/inspecting-html-and-css/imgs/03.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/03-4-2.png" alt="Overwritten style"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#testing-styles-in-the-inspector">Testing Styles in the Inspector</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The Styles pane also allows you to edit styles directly in the browser. You can click inside of any individual selector to add a new rule or click on an existing attribute or value to alter it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In the below image, we have altered the value of&nbsp;<code>margin-bottom</code>&nbsp;in the&nbsp;<code>.hero__main-heading</code>&nbsp;class, and the webpage responds with the changes in real-time. This won’t affect the source code in your text editor, but it is extremely useful for quickly testing out various attributes and values without needing to reload the page over and over again.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/f8fd38fc62578d8e8368f5303126215a492847f0/foundations/html_css/inspecting-html-and-css/imgs/04.png" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/04-3-1.png" alt="Changed styles"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Go through the following sections of the&nbsp;<a href="https://developers.google.com/web/tools/chrome-devtools" target="_blank" rel="noreferrer noopener">official Chrome DevTools docs</a>:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://developer.chrome.com/docs/devtools/overview/" target="_blank" rel="noreferrer noopener">Overview</a>: don’t navigate to any other pages linked here; just get familiar with&nbsp;<em>what</em>&nbsp;tools are available in the DevTools, rather than how to use all of them right now.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.chrome.com/docs/devtools/open/" target="_blank" rel="noreferrer noopener">Open Chrome DevTools</a>: similar to what we went over above, but with some nice extras.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.chrome.com/docs/devtools/css" target="_blank" rel="noreferrer noopener">View and change CSS</a>: be sure to follow along with any interactive instructions!</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.chrome.com/docs/devtools/dom/" target="_blank" rel="noreferrer noopener">Get Started With Viewing And Changing The DOM</a>: skip through any part that uses the JavaScript console.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#inspecting-elements">How do you select a specific element on your page with your browser’s developer tools?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#strikethrough">What does a strikethrough in a CSS element mean in your browser’s developer tools?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#testing-styles-in-the-inspector">How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css#additional-resources">Additional Resources</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/" target="_blank" rel="noreferrer noopener">This article about how we can utilize css overview in the developer tools</a>&nbsp;to check the colors, font styles, media-queries, etc. used on a particular webpage.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
