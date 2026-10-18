---
title: "Create a Tablet or Desktop Version VI"
date: "2024-08-22 14:29:49"
layout: post
permalink: "/create-a-tablet-or-desktop-version/"
categories: ["projects"]
tags: []
wordpress_id: "66345"
---

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|cyan-bluish-gray"}}}},"textColor":"cyan-bluish-gray","fontSize":"small"} -->
<p class="has-cyan-bluish-gray-color has-text-color has-link-color has-small-font-size">Figma 101: Create a Tablet or Desktop Version. (n.d.). Retrieved from https://designlab.com/figma-101-course/create-a-tablet-or-desktop-version</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Unleash your creativity to adapt your design to tablet or desktop size!</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Learning objectives:</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Learn about Constraints</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Research some tablet or desktop design patterns</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Practice adapting the mobile app design for a larger screen size</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Consolidate your app design and prototyping skills</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Today’s tutorial</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Today, we’re setting you free! It’s time to get creative and make your designs for a tablet or desktop version of the app by adapting your existing layouts for a different screen size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Just before you get started, though, let’s cover one more awesome feature in Figma: constraints. This is particularly useful when transposing a design from one device or screen size to another.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Constraints define how any object will behave if the frame it contains is resized. Each Layer in Figma actually has Constraints set by default—select any object in the canvas, and you’ll be able to see these settings in the Properties panel under the Design tab:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="https://cdn.prod.website-files.com/65130e79c72ae8812db3412e/6580ac5c6ab4733f9f44c13a_F101_D6_01.jpeg" alt="The constraints panel"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The first dropdown (which here says “Left”) tells Figma how to manage the object’s horizontal position, while the second dropdown (which by default says “Top”) sets its vertical position.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="https://cdn.prod.website-files.com/65130e79c72ae8812db3412e/6580ac5b6ab4733f9f44c0e4_F101_D6_02.jpeg" alt="The Figma menu"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>The advantage of Constraints is that we can use them to resize our designs intelligently, which saves us the work of scaling and positioning elements manually. As an example, follow these steps to make the nav bar resizable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Click and drag to select all the elements in the nav bar. Group those elements with ⌘G (Mac) or CtrlG (PC). Then, convert the new Group to a Frame using the dropdown menu near the top of the Properties panel. In Figma, Frames can be nested—meaning that one Frame can contain another Frame. Rename this new Frame “Nav Bar”.<br><br><video preload="none" muted="" width="100%" height="auto" poster="https://storage.designlab.com/email-courses/figma-101/2023/F101_D6_03_poster.jpg" loop="" controls=""></video></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>2. Next, let’s set the constraints for how the Nav Bar Frame will relate to its container, the Profile Frame. With the Nav Bar Frame selected, change the Constraints settings to “Left &amp; Right” and “Bottom,” respectively. This means that Figma will preserve the Nav Bar’s position relative to both left and right edges and keep it tethered to the bottom edge of the Frame.</p>
<!-- /wp:paragraph -->

<!-- wp:video -->
<figure class="wp-block-video"><video controls src="https://storage.designlab.com/email-courses/figma-101/2023/F101_D6_04.mp4"></video></figure>
<!-- /wp:video -->

<!-- wp:paragraph -->
<p>3. Finally, we need to set how the objects within the Nav Bar relate to their container. Double-click the Nav Bar Frame, select each object in turn, and set their Constraints to the following:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Background rectangle: Left &amp; Right, Bottom</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Camera icon: Center, Bottom</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Back arrow: Left, Bottom</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Hamburger button: Right, Bottom</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:video -->
<figure class="wp-block-video"><video controls src="https://storage.designlab.com/email-courses/figma-101/2023/F101_D6_05.mp4"></video></figure>
<!-- /wp:video -->

<!-- wp:paragraph -->
<p>4. Try grabbing a corner of the Profile Frame and resizing it to see what happens. Presto! A nav bar that resizes and scales correctly and stays pinned to the bottom of the Frame.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can apply this method to other screen elements as you develop your tablet or desktop app version. To get you started with today’s challenge, first decide on how many screens you'd like to recreate at a larger scale. Don’t feel obligated to do all four, but give at least two a try. Here are some specifications for the Frames and Layout Grids for your chosen device:</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Tablet (landscape):</h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Hit F to select the Frame tool</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click the “Tablet” drill-down menu in the Inspector</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Select “iPad Pro 11”</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Once the Frame has been created, switch the orientation to Landscape at the top of the Properties panel, next to the drop-down we used earlier to switch a Group into a Frame</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the Properties panel, add a Layout Grid like we’ve done before. Set it to columns with a Count of 12, the Margin at 16, and the Gutter at 32.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="https://cdn.prod.website-files.com/65130e79c72ae8812db3412e/6580ac5b6ab4733f9f44c0e1_F101_D6_06.jpeg" alt="Frame orientation"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>‍</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Desktop:</h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li>Hit F to select the Frame tool</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click the “Desktop” drill-down menu in the Inspector</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Click “Desktop (1440 * 1024)”</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the Properties panel, add a Layout Grid like we’ve done before. Please set it to Columns and then change the Type to Center, the Width to 74, and the Gutter to 32.      </li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>In the Properties panel, add a Layout Grid like we’ve done before. Please set it to columns with a Count of 12, the Margin at 16, and the Gutter at 32.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:image {"align":"center"} -->
<figure class="wp-block-image aligncenter"><img src="https://cdn.prod.website-files.com/65130e79c72ae8812db3412e/6580ac5b6ab4733f9f44c0de_F101_D6_07.jpeg" alt="The Figma menu"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Tip: When translating your work from mobile to tablet or desktop, it's helpful to have the original mobile screen design next to the new Frame you’re working on. You can copy elements across or use them as a point of reference.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here’s a checklist to keep in mind as you work on this:<strong></strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>As a user, what might you want to be consistent between the app's mobile and tablet/desktop versions? (Perhaps color or certain layout patterns, like those on the Photo Post screen?)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Equally, what might you want to be different? (How might navigation and menus be different on tablet or desktop?)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Take a look at other websites or apps to get a sense of how the relative scale, sizing, and spacing of elements might need to be different on a larger device.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Check out the site UI Patterns for some inspiration on how you might want to lay out elements in a different format: <a href="http://ui-patterns.com/" target="_blank" rel="noreferrer noopener">ui-patterns.com</a>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|cyan-bluish-gray"}}}},"textColor":"cyan-bluish-gray","fontSize":"small"} -->
<p class="has-cyan-bluish-gray-color has-text-color has-link-color has-small-font-size">Figma 101: Create a Tablet or Desktop Version. (n.d.). Retrieved from https://designlab.com/figma-101-course/create-a-tablet-or-desktop-version</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
