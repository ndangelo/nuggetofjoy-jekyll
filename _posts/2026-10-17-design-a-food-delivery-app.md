---
title: "Design a Food Delivery App"
date: "2026-10-17 13:16:33"
layout: post
permalink: "/design-a-food-delivery-app/"
categories: ["projects"]
tags: []
wordpress_id: "68048"
---

<!-- wp:html -->
<style>
.food-app-assignment{color:inherit;font-family:inherit;line-height:1.65;max-width:100%;}
.food-app-assignment *{box-sizing:border-box;}
.food-app-assignment .food-hero{background:linear-gradient(135deg,#fff3d8,#fce6dc);border-radius:18px;padding:clamp(22px,4vw,42px);margin:24px 0 30px;display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:center;}
.food-app-assignment .eyebrow{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#a74c28;margin:0 0 8px;}
.food-app-assignment h2,.food-app-assignment h3{line-height:1.25;margin-top:1.4em;}
.food-app-assignment .food-hero h2{font-size:clamp(1.8rem,4vw,3rem);margin:0 0 12px;}
.food-app-assignment .food-hero p{margin:0 0 12px;}
.food-app-assignment .hero-art{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;transform:rotate(2deg);}
.food-app-assignment .food-tile{background:#fff;border-radius:14px;padding:14px;text-align:center;box-shadow:0 8px 22px #67351b12;}
.food-app-assignment .food-emoji{font-size:clamp(2rem,5vw,3.8rem);display:block;line-height:1.3;}
.food-app-assignment .food-tile strong{font-size:.85rem;display:block;}
.food-app-assignment .quick-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0;}
.food-app-assignment .fact{border:1px solid #e4e4e4;border-radius:12px;padding:16px;}
.food-app-assignment .fact strong{display:block;font-size:1.05rem;}
.food-app-assignment .persona-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:18px 0 26px;}
.food-app-assignment .persona{border:1px solid #dedede;border-radius:14px;padding:18px;background:#fff;}
.food-app-assignment .persona .avatar{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#fbe5d8;font-size:1.6rem;margin-bottom:10px;}
.food-app-assignment .persona h3{font-size:1.05rem;margin:0 0 4px;}
.food-app-assignment .persona .role{font-size:.85rem;color:#555;margin:0 0 12px;}
.food-app-assignment .persona p{font-size:.95rem;margin:0;}
.food-app-assignment .deliverables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0;}
.food-app-assignment .deliverable{border:1px solid #e1e1e1;border-radius:12px;padding:16px;}
.food-app-assignment .deliverable .num{font-size:.8rem;font-weight:700;color:#a74c28;letter-spacing:.08em;}
.food-app-assignment .deliverable h3{font-size:1.05rem;margin:5px 0 6px;}
.food-app-assignment .deliverable p{font-size:.94rem;margin:0;}
.food-app-assignment .screen-preview{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:22px 0;}
.food-app-assignment .phone{border:5px solid #202020;border-radius:24px;background:#fff;padding:10px;min-width:0;box-shadow:0 6px 18px #00000012;}
.food-app-assignment .phone-top{height:8px;width:40%;background:#222;border-radius:8px;margin:0 auto 12px;}
.food-app-assignment .mock-heading{font-size:.8rem;font-weight:700;margin-bottom:7px;}
.food-app-assignment .mock-search{font-size:.6rem;color:#777;background:#f2f2f2;padding:7px;border-radius:7px;margin-bottom:8px;}
.food-app-assignment .mock-food{height:58px;border-radius:8px;background:linear-gradient(135deg,#ffd7a1,#ef8e5b);display:grid;place-items:center;font-size:1.8rem;margin-bottom:8px;}
.food-app-assignment .mock-line{height:6px;background:#e9e9e9;border-radius:5px;margin:6px 0;}
.food-app-assignment .mock-line.short{width:58%;}
.food-app-assignment .mock-button{font-size:.58rem;color:#fff;background:#d95332;text-align:center;padding:7px;border-radius:7px;margin-top:9px;}
.food-app-assignment .note{border-left:4px solid #d95332;background:#fff5ed;padding:14px 18px;margin:22px 0;}
.food-app-assignment .food-checklist{padding-left:1.3em;}
.food-app-assignment .food-checklist li{margin:.45em 0;}
.food-app-assignment .reference-links a{overflow-wrap:anywhere;}

.food-app-assignment .flow-visual{display:flex;flex-wrap:wrap;align-items:stretch;gap:10px;margin:20px 0;padding:18px;background:#f7f8fa;border:1px solid #e0e3e8;border-radius:14px;}
.food-app-assignment .flow-step{flex:1 1 115px;min-width:100px;background:#fff;border:1px solid #d7dce2;border-radius:10px;padding:13px 10px;text-align:center;font-size:.9rem;}
.food-app-assignment .flow-step strong{display:block;margin-bottom:4px;color:#a74c28;}
.food-app-assignment .flow-arrow{align-self:center;font-size:1.3rem;font-weight:700;color:#a74c28;}
.food-app-assignment .styleguide-template-shot{margin:22px 0 30px;}
.food-app-assignment .styleguide-template-shot img{max-width:100%;height:auto;border:1px solid #ddd;border-radius:8px;}
.food-app-assignment .styleguide-template-shot figcaption{font-size:.95em;margin-top:8px;}
.food-app-assignment .styleguide-visual{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:20px 0;}
.food-app-assignment .styleguide-card{border:1px solid #e0e0e0;border-radius:14px;padding:18px;background:#fff;min-width:0;}
.food-app-assignment .styleguide-card h3{margin:0 0 10px;font-size:1.05rem;}
.food-app-assignment .swatches{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0;}
.food-app-assignment .swatch{width:42px;height:42px;border-radius:8px;border:1px solid #00000018;}
.food-app-assignment .type-sample{padding:10px 0;border-bottom:1px solid #eee;}
.food-app-assignment .type-sample:last-child{border-bottom:0;}
.food-app-assignment .component-sample{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px;}
.food-app-assignment .sample-button{display:inline-block;border-radius:8px;background:#d95332;color:#fff;padding:9px 13px;font-size:.85rem;font-weight:700;}
.food-app-assignment .sample-input{border:1px solid #b9bec5;border-radius:8px;padding:9px 11px;color:#666;font-size:.85rem;}
.food-app-assignment .sample-chip{border-radius:99px;background:#fff1e8;color:#8c3b21;padding:6px 10px;font-size:.78rem;font-weight:700;}
@media(max-width:700px){.food-app-assignment .styleguide-visual{grid-template-columns:1fr}.food-app-assignment .flow-arrow{display:none}}
@media(max-width:700px){.food-app-assignment .food-hero{grid-template-columns:1fr}.food-app-assignment .quick-facts,.food-app-assignment .persona-grid{grid-template-columns:1fr}.food-app-assignment .deliverables{grid-template-columns:1fr 1fr}.food-app-assignment .screen-preview{grid-template-columns:repeat(2,minmax(0,1fr));}}
@media(max-width:420px){.food-app-assignment .deliverables{grid-template-columns:1fr}.food-app-assignment .phone{border-width:3px;padding:7px}}
</style>
<div class="food-app-assignment">
<section class="food-hero">
 <div><p class="eyebrow">UX/UI Design · Project 06</p><h2>Design a Food Delivery App</h2><p>Create a clear, appealing mobile experience that helps people find meals, customize an order, pay securely, and track delivery.</p><p><strong>Your goal:</strong> make ordering feel easy, reliable, and welcoming for people with different needs and budgets.</p></div>
 <div class="hero-art" aria-label="Food app visual examples"><div class="food-tile"><span class="food-emoji">🍜</span><strong>Explore meals</strong></div><div class="food-tile"><span class="food-emoji">🥗</span><strong>Find healthy options</strong></div><div class="food-tile"><span class="food-emoji">🍔</span><strong>Customize an order</strong></div><div class="food-tile"><span class="food-emoji">🛵</span><strong>Track delivery</strong></div></div>
</section>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Client:</strong> Choose your own fictional restaurant, food-delivery service, or app brand. Use AI only when it directly supports the assignment requirements. Do not add unrelated features or extra screens.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">1. Project objectives</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Design a food-delivery app that allows users to browse restaurants, choose meals, customize their orders, pay securely, and have food delivered to their doorstep. The experience should be user-friendly, visually appealing, accessible, and efficient.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="food-app-assignment"><div class="quick-facts"><div class="fact"><strong>Find</strong><span>Discover restaurants and food that fit the user’s needs.</span></div><div class="fact"><strong>Order</strong><span>Customize meals and complete checkout without confusion.</span></div><div class="fact"><strong>Follow</strong><span>Understand order status and estimated delivery time.</span></div></div><div class="note"><strong>Design reminder:</strong> Do not design screens just to make the app look impressive. Every screen should help users complete a task.</div></div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">2. Target audience</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use the sample personas below to guide your design decisions. They represent different user priorities; your app should make it easy for each person to find appropriate options.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="food-app-assignment"><div class="persona-grid">
 <article class="persona"><div class="avatar">💼</div><h3>Marcus Lee, 32</h3><p class="role">Busy professional</p><p>Needs quick, dependable delivery and convenient ordering. He values healthy meals but also needs affordable options.</p></article>
 <article class="persona"><div class="avatar">🥦</div><h3>Sophia Patel, 37</h3><p class="role">Health-conscious eater</p><p>Looks for nutritious food and clear information about dietary restrictions. Quality matters, but price still matters too.</p></article>
 <article class="persona"><div class="avatar">👨‍👩‍👧</div><h3>Sandra Jenkins, 35</h3><p class="role">Budget-conscious parent</p><p>Needs quick family meals, healthy choices, and delivery that fits a limited budget after a long workday.</p></article>
</div></div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">3. App requirements</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><li>Let users browse restaurants available in their area.</li><li>Allow users to customize orders, add special instructions, and identify dietary needs.</li><li>Show order status and estimated delivery time.</li><li>Provide a clear, secure, easy-to-use payment experience.</li><li>Allow users to review and rate restaurants and delivery drivers.</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">4. Choose a platform</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Design for <strong>iOS or Android</strong>. Follow the conventions and interface guidelines for the platform you select. Be consistent with navigation, touch targets, typography, and spacing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">5. Reference apps</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Study these services to understand how food-delivery apps organize information and guide users. Do not copy their screens. Identify useful patterns, then develop your own visual direction and brand.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list reference-links"><li><a href="https://www.ubereats.com/" target="_blank" rel="noreferrer noopener">Uber Eats</a></li><li><a href="https://www.doordash.com/" target="_blank" rel="noreferrer noopener">DoorDash</a></li><li><a href="https://www.grubhub.com/" target="_blank" rel="noreferrer noopener">Grubhub</a></li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">6. Required deliverable: User flow in FigJam</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Before designing your screens, map the user journey in FigJam.</strong> Your user flow should show the main decisions and actions a person takes to find food and place an order. Use arrows to connect steps, and include a decision point when the user might change direction.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="food-app-assignment"><div class="flow-visual" role="img" aria-label="Example food delivery user flow from opening the app through delivery tracking"><div class="flow-step"><strong>01 · Start</strong>Open app / sign in</div><div class="flow-arrow">→</div><div class="flow-step"><strong>02 · Discover</strong>Search or browse restaurants</div><div class="flow-arrow">→</div><div class="flow-step"><strong>03 · Choose</strong>Select restaurant and meal</div><div class="flow-arrow">→</div><div class="flow-step"><strong>04 · Customize</strong>Options, quantity, instructions</div><div class="flow-arrow">→</div><div class="flow-step"><strong>05 · Review</strong>Check cart, fees, and total</div><div class="flow-arrow">→</div><div class="flow-step"><strong>06 · Checkout</strong>Address and payment</div><div class="flow-arrow">→</div><div class="flow-step"><strong>07 · Complete</strong>Confirmation and tracking</div></div><div class="note"><strong>Include at least one decision:</strong> What happens if a meal is unavailable, the user changes the cart, or payment fails? Show how the user can recover instead of getting stuck.</div></div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Submit:</strong> a FigJam user-flow diagram that is readable, logically connected, and consistent with the seven screens you will design. Start from the provided course user-flow template if one has been supplied in D2L.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">7. Required deliverable: UI/UX style guide in Figma Design</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Create your style guide before building the seven screens.</strong> It establishes the visual rules for your app so the interface feels like one coherent product. Make decisions deliberately; do not choose colors and type styles independently on every screen.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="food-app-assignment">
  <p><strong>Use the actual course UI/UX Style Guide template shown below.</strong> Do not use a different template or copy the illustrative examples from this assignment. Open the template, duplicate it, and adapt its existing sections to your food app.</p>
  <p><a href="https://www.figma.com/design/pMDnezhhqour9AwJLK3G0Y">Open the Student UI/UX Style Guide template in Figma →</a></p>
  <figure class="styleguide-template-shot">
    <img src="https://www.figma.com/api/mcp/asset/546230b4-5363-4f26-ab59-d245003903c4.png" alt="Actual Student UI/UX Style Guide template in Figma: visual research and moodboard section" loading="lazy" style="display:block;width:100%;height:auto;">
    <figcaption><strong>1. Visual research and moodboard.</strong> Use the actual template to establish the visual direction for your food app.</figcaption>
  </figure>
  <figure class="styleguide-template-shot">
    <img src="https://www.figma.com/api/mcp/asset/dc6c23d3-e208-4de1-80b0-81999bb35d97.png" alt="Actual Student UI/UX Style Guide template: color palette and contrast section" loading="lazy" style="display:block;width:100%;height:auto;">
    <figcaption><strong>2. Color and contrast.</strong> Define your color roles and check that text and controls remain readable.</figcaption>
  </figure>
  <figure class="styleguide-template-shot">
    <img src="https://www.figma.com/api/mcp/asset/109fd972-a72f-404c-900c-9e0458a899bc.png" alt="Actual Student UI/UX Style Guide template: typography and spacing section" loading="lazy" style="display:block;width:100%;height:auto;">
    <figcaption><strong>3. Typography and spacing.</strong> Establish a clear type hierarchy and consistent spacing rules.</figcaption>
  </figure>
  <figure class="styleguide-template-shot">
    <img src="https://www.figma.com/api/mcp/asset/b2b52fc0-fe1f-42b8-9df3-54546214301f.png" alt="Actual Student UI/UX Style Guide template: reusable components section" loading="lazy" style="display:block;width:100%;height:auto;">
    <figcaption><strong>4. Reusable components.</strong> Document the buttons, fields, cards, navigation, and component states used across your screens.</figcaption>
  </figure>
  <p><strong>Accessibility check:</strong> use readable text sizes, strong text/background contrast, clear labels, visible focus states where relevant, and touch targets large enough to tap comfortably.</p>
  <p><em>Image note for publishing:</em> these are the original Figma template screenshot assets referenced in the earlier course post. Because Figma asset links can be temporary, download these screenshots and upload them to the WordPress Media Library, then replace the image URLs with the permanent Media Library URLs before publishing.</p>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Submit:</strong> a Figma Design style-guide page showing your color palette, typography, buttons, form fields, icons, spacing rules, and reusable components. The seven app screens should use these same styles.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">8. Required screens</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Your final design must include the seven screens below. The mini mockups are visual references to help you understand the purpose of each screen—not layouts to copy exactly.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="food-app-assignment"><div class="screen-preview" aria-label="Food app screen mockup examples">
 <div class="phone"><div class="phone-top"></div><div class="mock-heading">Welcome to QuickBite</div><div class="mock-food">🥡</div><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-button">Get started</div></div>
 <div class="phone"><div class="phone-top"></div><div class="mock-heading">Find your next meal</div><div class="mock-search">⌕ Search dishes</div><div class="mock-food">🍕</div><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-food">🥗</div></div>
 <div class="phone"><div class="phone-top"></div><div class="mock-heading">Build your order</div><div class="mock-food">🍜</div><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-button">Add to order</div></div>
 <div class="phone"><div class="phone-top"></div><div class="mock-heading">Order on the way</div><div class="mock-food">🛵</div><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-button">Track order</div></div>
</div><div class="deliverables">
 <div class="deliverable"><span class="num">SCREEN 01</span><h3>Onboarding</h3><p>Introduce the app and communicate its value. Include a clear next step such as creating an account or exploring the app.</p></div>
 <div class="deliverable"><span class="num">SCREEN 02</span><h3>Home</h3><p>Help users search, explore food categories, and discover popular restaurants or meals.</p></div>
 <div class="deliverable"><span class="num">SCREEN 03</span><h3>Restaurant details</h3><p>Show the restaurant, menu, food imagery, ratings, and information users need before choosing.</p></div>
 <div class="deliverable"><span class="num">SCREEN 04</span><h3>Ordering</h3><p>Allow users to select items, adjust options, note dietary needs, and review their order.</p></div>
 <div class="deliverable"><span class="num">SCREEN 05</span><h3>Payment</h3><p>Summarize the order and total, present payment options, and make the final action clear.</p></div>
 <div class="deliverable"><span class="num">SCREEN 06</span><h3>Order tracking</h3><p>Show progress, estimated delivery time, and useful status updates.</p></div>
 <div class="deliverable"><span class="num">SCREEN 07</span><h3>Profile</h3><p>Let users manage their name, address, payment methods, past orders, and favorite restaurants.</p></div>
 <div class="deliverable"><span class="num">DESIGN QUALITY</span><h3>Consistent system</h3><p>Use a consistent type scale, color palette, buttons, spacing, and navigation across all screens.</p></div>
</div></div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">9. Prototype refresher: Make your screens clickable</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Need a quick reminder of how to connect your screens in Figma Design? Watch this short official Figma tutorial, then try the same steps with your food app. You do not need complicated animations—focus on making the main ordering journey work.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="food-app-assignment"><div style="position:relative;width:100%;padding-top:56.25%;overflow:hidden;border-radius:14px;background:#111;margin:18px 0;"><iframe src="https://www.youtube-nocookie.com/embed/eKVPXk2BnB8" title="Figma Learn: Prototyping fundamentals" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p><strong>As you follow along:</strong></p><ol><li>Open the <strong>Prototype</strong> tab in Figma Design.</li><li>Connect a button or other interactive element to the screen it should open.</li><li>Set the first screen as the starting point and preview the flow.</li><li>Click through the main food-ordering journey and fix any dead ends.</li></ol><p><a href="https://help.figma.com/hc/en-us/articles/31010011820311-FD4B-Prototyping-fundamentals" target="_blank" rel="noopener noreferrer">Open Figma’s Prototyping Fundamentals lesson</a> if you need the written steps.</p><div class="note"><strong>Remember:</strong> finish your user flow and UI/UX style guide, then design all seven screens in Figma Design before building the interactive prototype. Your prototype should connect the screens into a usable journey—not just show isolated screens.</div></div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">10. Suggested workflow</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><li><strong>Define the user.</strong> Choose which persona your design will prioritize and identify their main needs.</li><li><strong>Map the user flow in FigJam.</strong> Diagram the path from opening the app to placing and tracking an order, including decision and recovery paths.</li><li><strong>Create the UI/UX style guide in Figma Design.</strong> Establish colors, typography, buttons, form fields, spacing, icons, and reusable components.</li><li><strong>Design the seven screens.</strong> Start with clear layouts and meaningful hierarchy before adding decorative details.</li><li><strong>Check the full journey.</strong> Make sure users can move from discovering food to successful checkout and order tracking.</li><li><strong>Test and refine.</strong> Ask someone to complete a simple task using your prototype. Note where they hesitate and improve those areas.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">11. Final submission checklist</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list food-checklist"><li>A completed FigJam user-flow diagram is included.</li><li>A completed Figma Design UI/UX style guide is included.</li><li>All seven required screens are included.</li><li>The chosen platform (iOS or Android) is clear.</li><li>The user flow is understandable and matches the screens.</li><li>Typography, color, buttons, spacing, and navigation are consistent.</li><li>Text is readable and controls are easy to identify.</li><li>Dietary needs, order customization, payment, and delivery status are addressed.</li><li>The prototype links the screens into a coherent user journey.</li><li>Design choices support the target user rather than adding unnecessary features.</li></ul>
<!-- /wp:list -->

<!-- wp:html -->
</div>
<!-- /wp:html -->
