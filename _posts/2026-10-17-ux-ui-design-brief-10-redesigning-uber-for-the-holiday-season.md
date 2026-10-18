---
title: "UX/UI DESIGN BRIEF #10 - Redesigning Uber for the Holiday Season"
date: "2026-10-17 12:54:08"
layout: post
permalink: "/ux-ui-design-brief-10-redesigning-uber-for-the-holiday-season/"
categories: ["projects"]
tags: []
wordpress_id: "68044"
---

<!-- wp:group {"className":"uber-ux-guide","layout":{"type":"constrained"}} -->
<div class="wp-block-group uber-ux-guide"><!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading">Redesigning Uber for the Holiday Season</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A visual guide to planning your user flow, building a UI/UX style guide, designing key screens in Figma Design, and using Figma Make to help complete an interactive prototype.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"width":"219px","height":"auto","sizeSlug":"large","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-large is-resized"><img src="https://uxdesignmastery.com/wp-content/uploads/2024/07/Uber_logo.jpg" alt="Uber logo" style="width:219px;height:auto"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The holiday season can make getting around more challenging. People need to coordinate rides, navigate busy locations, and make decisions quickly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Your challenge is to redesign a focused part of the Uber app to make a holiday ride experience easier to understand and use.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<style>

.uber-ux-guide{max-width:960px;margin:0 auto;color:#202124;line-height:1.7;font-size:17px;font-family:inherit}
.uber-ux-guide h1,.uber-ux-guide h2,.uber-ux-guide h3{line-height:1.2;letter-spacing:-.02em}
.uber-ux-guide h1{font-size:clamp(2.3rem,5vw,4.4rem);margin:.2em 0 .35em}
.uber-ux-guide h2{font-size:clamp(1.8rem,3.5vw,2.6rem);margin:1.8em 0 .6em}
.uber-ux-guide h3{font-size:1.25rem;margin:1.3em 0 .4em}
.uber-ux-guide p{margin:.65em 0 1em}
.uber-ux-guide figure{margin:1.5em 0}
.uber-ux-guide img{display:block;width:100%;height:auto;border-radius:10px;object-fit:contain}
.uber-ux-guide .uber-hero-image img{display:block;width:300px;max-width:100%;height:auto;margin:0 auto}
.uber-ux-guide .uber-reference-image{margin:1.6em 0}
.uber-ux-guide .uber-ui-icon img{width:48px;height:auto;border-radius:0}
.uber-ux-guide .uber-reference-image img{max-height:none}
.uber-ux-guide .uber-styleguide-overview{max-width:100%;padding:0}
.uber-ux-guide .uber-styleguide-overview img{border:1px solid #e2e5e8}
.uber-ux-guide .uber-make-steps{grid-template-columns:repeat(3,minmax(0,1fr))}
.uber-ux-guide figcaption{font-size:.88rem;line-height:1.45;color:#62676d;margin-top:.6em}
.uber-ux-guide .eyebrow{font-size:.8rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
.uber-ux-guide .lead{font-size:1.25rem;max-width:760px}
.uber-ux-guide section{margin:3em 0}
.uber-ux-guide .uber-deliverables,.uber-ux-guide .uber-principle-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:1.5em 0}
.uber-ux-guide .uber-deliverable,.uber-ux-guide .uber-principle-grid>div{border:1px solid #e2e5e8;border-radius:12px;padding:20px;background:#f8f9fa}
.uber-ux-guide .uber-deliverable span{display:inline-block;font-weight:800;font-size:.85rem;color:#666;margin-bottom:.5em}
.uber-ux-guide .uber-deliverable h3,.uber-ux-guide .uber-principle-grid h3{margin:.15em 0 .5em}
.uber-ux-guide .uber-callout{padding:20px 24px;border-left:4px solid #111;background:#f5f6f7;border-radius:0 10px 10px 0}
.uber-ux-guide .uber-template-link{display:inline-block;font-weight:700;padding:12px 16px;border:1px solid #202124;border-radius:7px;text-decoration:none}
.uber-ux-guide .uber-two-column{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:start}
.uber-ux-guide .uber-two-column figure{margin:0}
.uber-ux-guide .uber-principle-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.uber-ux-guide .uber-checklist{padding:24px;border:1px solid #e2e5e8;border-radius:14px}
.uber-ux-guide .uber-checklist li{margin:.45em 0}
.uber-ux-guide .uber-closing{font-size:1.15rem;margin-top:1.5em}
@media(max-width:650px){.uber-ux-guide .uber-deliverables,.uber-ux-guide .uber-principle-grid,.uber-ux-guide .uber-two-column,.uber-ux-guide .uber-make-steps{grid-template-columns:1fr}.uber-ux-guide{font-size:16px}.uber-ux-guide section{margin:2.3em 0}}

/* Purpose-built user-flow and finished flat-screen examples */
/* User-flow example styled to echo the AMDE 477 FigJam template */
.uber-ux-guide .uber-example-heading{display:flex;flex-direction:column;gap:5px;margin-bottom:20px}
.uber-ux-guide .uber-example-heading>span{font-size:.72rem;letter-spacing:.13em;font-weight:800;color:#6c5ce7}
.uber-ux-guide .uber-example-heading>strong{font-size:1.35rem;line-height:1.25}
.uber-ux-guide .uber-example-heading>small{color:#62676d}
.uber-ux-guide .uber-flow-example,.uber-ux-guide .uber-flat-examples{padding:24px;border:1px solid #e2e5e8;border-radius:14px;background:#fbfbfc}
.uber-ux-guide .uber-flow-title{display:flex;flex-direction:column;gap:4px;margin-bottom:22px}
.uber-ux-guide .uber-flow-title>span{font-size:.72rem;letter-spacing:.12em;font-weight:800;color:#6c5ce7}
.uber-ux-guide .uber-flow-title>strong{font-size:1.8rem;line-height:1.15;letter-spacing:-.03em}
.uber-ux-guide .uber-flow-title>small{color:#62676d}
.uber-ux-guide .uber-flow-guide-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:0 0 22px}
.uber-ux-guide .uber-flow-guide-cards>div{border:1px solid #e2e5e8;border-radius:9px;background:#fff;padding:14px;display:flex;flex-direction:column;gap:7px}
.uber-ux-guide .uber-flow-guide-cards b{font-size:.68rem;letter-spacing:.04em;color:#6c5ce7;line-height:1.35}
.uber-ux-guide .uber-flow-guide-cards span{font-size:.82rem;line-height:1.4;color:#454950}
.uber-ux-guide .uber-flow-legend{display:flex;flex-wrap:wrap;gap:9px 16px;padding:13px 0 18px;border-bottom:1px solid #e2e5e8;margin-bottom:18px}
.uber-ux-guide .uber-flow-legend span{display:flex;align-items:center;gap:7px;font-size:.75rem;color:#555b63}
.uber-ux-guide .uber-flow-legend i{display:inline-block;width:13px;height:13px;border:1px solid #bfc4cc;background:#fff;border-radius:3px}
.uber-ux-guide .uber-flow-legend .legend-start{border-radius:7px;background:#f4f1ff;border-color:#6c5ce7}
.uber-ux-guide .uber-flow-legend .legend-action{background:#eef5ff;border-color:#8eadd7}
.uber-ux-guide .uber-flow-legend .legend-decision{transform:rotate(45deg);border-radius:0;background:#fff7e8;border-color:#d6aa5e;width:11px;height:11px}
.uber-ux-guide .uber-flow-legend .legend-error{background:#f0f1f3;border-color:#9aa0a6}
.uber-ux-guide .uber-flow-diagram{max-width:760px;margin:0 auto;display:flex;flex-direction:column;align-items:stretch;gap:0}
.uber-ux-guide .uber-flow-step{padding:15px 18px;border:1px solid #d9dce3;border-radius:9px;background:#fff;display:flex;flex-direction:column;gap:4px;max-width:440px;width:100%;margin:0 auto}
.uber-ux-guide .uber-flow-step>b{font-size:.67rem;letter-spacing:.09em;color:#6c5ce7}
.uber-ux-guide .uber-flow-step>strong{font-size:1rem;line-height:1.3;color:#202124}
.uber-ux-guide .uber-flow-step>small{font-size:.8rem;line-height:1.4;color:#62676d}
.uber-ux-guide .uber-flow-step.flow-start{background:#f4f1ff;border-color:#6c5ce7;border-radius:18px}
.uber-ux-guide .uber-flow-step.flow-decision{max-width:280px;text-align:center;background:#fff7e8;border-color:#d6aa5e;border-radius:8px}
.uber-ux-guide .uber-flow-step.flow-action{background:#eef5ff;border-color:#8eadd7}
.uber-ux-guide .uber-flow-step.flow-error{background:#f0f1f3;border-color:#9aa0a6;max-width:380px}
.uber-ux-guide .uber-flow-step.flow-end{background:#effaf3;border-color:#a8d7b8;border-radius:18px;text-align:center}
.uber-ux-guide .uber-flow-step.flow-end>b{color:#237447}
.uber-ux-guide .uber-flow-connector{text-align:center;height:34px;display:flex;align-items:center;justify-content:center;color:#6c5ce7;font-size:1.35rem;font-weight:800}
.uber-ux-guide .uber-flow-branches{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:660px;width:100%;margin:0 auto 12px}
.uber-ux-guide .uber-flow-branch{border-left:3px solid #6c5ce7;padding:12px 14px;background:#f4f1ff;border-radius:0 8px 8px 0;display:flex;flex-direction:column;gap:6px;font-size:.84rem;line-height:1.4}
.uber-ux-guide .uber-flow-branch b{font-size:.68rem;letter-spacing:.07em;color:#6c5ce7}
.uber-ux-guide .uber-flow-branch span{color:#4e5258}
.uber-ux-guide .uber-flow-branch.flow-no{border-left-color:#9aa0a6;background:#f0f1f3}
.uber-ux-guide .uber-flow-branch.flow-no b{color:#62676d}
.uber-ux-guide .uber-screen-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;align-items:start}
.uber-ux-guide .uber-screen-card{min-width:0}
.uber-ux-guide .uber-phone{background:#fff;border:1px solid #d8dbe0;border-radius:20px;padding:12px 10px 13px;box-shadow:0 3px 12px #1018280d;color:#202124;min-height:405px;display:flex;flex-direction:column;gap:11px;font-family:Arial,sans-serif}
.uber-ux-guide .uber-phone-status{display:flex;justify-content:space-between;font-size:9px;font-weight:700;padding:0 2px}
.uber-ux-guide .uber-screen-top{display:flex;flex-direction:column;gap:4px}
.uber-ux-guide .uber-screen-top b{font-size:15px;line-height:1.25}
.uber-ux-guide .uber-screen-top span{font-size:10px;color:#646a73;line-height:1.35}
.uber-ux-guide .uber-search{font-size:10px;background:#f1f2f4;border-radius:8px;padding:10px;color:#565b63}
.uber-ux-guide .uber-map{height:116px;border-radius:9px;background-color:#eef1eb;background-image:linear-gradient(28deg,transparent 45%,#fff 46%,#fff 49%,transparent 50%),linear-gradient(112deg,transparent 39%,#fff 40%,#fff 44%,transparent 45%),linear-gradient(0deg,transparent 62%,#d8e4d3 63%,#d8e4d3 75%,transparent 76%);position:relative;overflow:hidden}
.uber-ux-guide .uber-map-road{position:absolute;display:block;height:7px;width:140%;background:#fff;border:1px solid #dfe3dc;left:-20%;top:45%;transform:rotate(-22deg)}
.uber-ux-guide .road-two{top:60%;transform:rotate(37deg)}
.uber-ux-guide .uber-map-pin{position:absolute;left:48%;top:35%;width:17px;height:17px;border-radius:50%;background:#6c5ce7;color:#fff;font-size:9px;display:grid;place-items:center;border:3px solid #fff}
.uber-ux-guide .uber-map-label{position:absolute;left:8px;bottom:7px;font-size:8px;font-weight:700;background:#fff;padding:5px 6px;border-radius:4px}
.uber-ux-guide .uber-screen-button{margin-top:auto;background:#111;color:#fff;text-align:center;border-radius:8px;padding:11px 5px;font-size:10px;font-weight:700}
.uber-ux-guide .uber-phone-nav{display:flex;justify-content:space-around;border-top:1px solid #eceef0;padding-top:8px;font-size:13px;text-align:center}
.uber-ux-guide .uber-phone-nav span{display:flex;flex-direction:column;align-items:center;gap:2px}
.uber-ux-guide .uber-phone-nav small{font-size:7px;color:#656b73}
.uber-ux-guide .uber-info-card,.uber-ux-guide .uber-driver-card{padding:10px;border:1px solid #e3e5e8;border-radius:8px;display:flex;flex-direction:column;gap:4px}
.uber-ux-guide .uber-info-card b,.uber-ux-guide .uber-driver-card b{font-size:10px}
.uber-ux-guide .uber-info-card span,.uber-ux-guide .uber-driver-card small{font-size:9px;line-height:1.35;color:#5d636b}
.uber-ux-guide .uber-info-card small{font-size:8px;color:#6c727a}
.uber-ux-guide .uber-screen-link{text-align:center;font-size:9px;font-weight:700}
.uber-ux-guide .uber-ride-option{display:grid;grid-template-columns:20px 1fr auto;align-items:center;gap:5px;padding:9px 5px;border:1px solid #e3e5e8;border-radius:8px}
.uber-ux-guide .uber-ride-option.uber-selected{border:1.5px solid #6c5ce7;background:#f7f5ff}
.uber-ux-guide .uber-car{font-size:15px}
.uber-ux-guide .uber-ride-option span:nth-child(2){display:flex;flex-direction:column;gap:3px}
.uber-ux-guide .uber-ride-option b,.uber-ux-guide .uber-ride-option strong{font-size:9px}
.uber-ux-guide .uber-ride-option small{font-size:7px;line-height:1.25;color:#656b73}
.uber-ux-guide .uber-confirm-icon{width:42px;height:42px;border-radius:50%;background:#e6f7ed;color:#217548;font-size:24px;display:grid;place-items:center;margin:10px auto 2px}
.uber-ux-guide .uber-center{text-align:center}
.uber-ux-guide .uber-driver-card{display:grid;grid-template-columns:30px 1fr;align-items:center;gap:6px}
.uber-ux-guide .uber-driver-card>span{display:flex;flex-direction:column;gap:4px}
.uber-ux-guide .uber-driver-card> b{grid-column:2}
.uber-ux-guide .uber-avatar{width:28px;height:28px;border-radius:50%;background:#e9e5ff;color:#5142a9;display:grid;place-items:center;font-size:9px;font-weight:700}
.uber-ux-guide .uber-screen-card>p{font-size:.82rem;line-height:1.45;color:#5b6068}
.uber-ux-guide .uber-screen-card>p strong{color:#202124}
@media(max-width:760px){.uber-ux-guide .uber-screen-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.uber-ux-guide .uber-flow-guide-cards{grid-template-columns:1fr}.uber-ux-guide .uber-flow-branches{grid-template-columns:1fr}.uber-ux-guide .uber-phone{min-height:390px}}
@media(max-width:420px){.uber-ux-guide .uber-screen-grid{grid-template-columns:1fr 1fr;gap:8px}.uber-ux-guide .uber-phone{padding:9px 7px;min-height:375px}.uber-ux-guide .uber-flat-examples,.uber-ux-guide .uber-flow-example{padding:14px}}

/* Figma Make tutorial embed */
.uber-ux-guide .uber-video-resource{margin:1.5em 0;padding:22px;border:1px solid #e2e5e8;border-radius:12px;background:#f8f9fa}
.uber-ux-guide .uber-video-resource h3{margin-top:0}
.uber-ux-guide .uber-video-embed{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:9px;background:#111}
.uber-ux-guide .uber-video-embed iframe{position:absolute;inset:0;width:100%;height:100%;border:0}


/* Refined visual direction for the holiday ride screens */
.uber-ux-guide .uber-flat-examples{background:linear-gradient(145deg,#f7f8f6 0%,#fff 62%,#f3f5f2 100%);border-color:#dfe4df;box-shadow:0 12px 35px rgba(24,39,32,.06)}
.uber-ux-guide .uber-example-heading>span{color:#167a55}
.uber-ux-guide .uber-example-heading>strong{letter-spacing:-.035em}
.uber-ux-guide .uber-phone{position:relative;overflow:hidden;background:#fff;border:1px solid #d8ded9;border-radius:23px;padding:13px 11px 14px;box-shadow:0 10px 25px rgba(17,34,25,.11);gap:11px;min-height:435px}
.uber-ux-guide .uber-phone:before{content:"";position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,#0d6b4a 0%,#20a36f 58%,#d9a441 100%)}
.uber-ux-guide .uber-phone-status{padding-top:3px;color:#242a27}
.uber-ux-guide .uber-screen-top b{font-size:17px;letter-spacing:-.035em;color:#151a17}
.uber-ux-guide .uber-screen-top span{font-size:10px;color:#6a736d}
.uber-ux-guide .uber-seasonal-kicker{font-size:8px!important;letter-spacing:.14em;font-weight:800;color:#167a55!important}
.uber-ux-guide .uber-search{display:flex;align-items:center;gap:7px;background:#f6f8f6;border:1px solid #e0e7e1;border-radius:11px;padding:11px;color:#59635d;box-shadow:0 2px 5px rgba(20,40,28,.03)}
.uber-ux-guide .uber-search-dot{width:8px;height:8px;border:2px solid #147b54;border-radius:50%;display:inline-block;flex:none}
.uber-ux-guide .uber-search-arrow{margin-left:auto;font-size:14px;color:#167a55}
.uber-ux-guide .uber-map{height:132px;border:1px solid #dce5da;border-radius:13px;background-color:#e7eee4;background-image:linear-gradient(27deg,transparent 42%,#fff 43%,#fff 47%,transparent 48%),linear-gradient(115deg,transparent 34%,#fff 35%,#fff 39%,transparent 40%),linear-gradient(0deg,transparent 62%,#d2e2cf 63%,#d2e2cf 76%,transparent 77%),linear-gradient(90deg,transparent 20%,#dce8d7 21%,#dce8d7 28%,transparent 29%,transparent 74%,#dce8d7 75%,#dce8d7 82%,transparent 83%)}
.uber-ux-guide .uber-map:before{content:"";position:absolute;left:10%;top:18%;width:23%;height:19%;border-radius:3px;background:#d6e4d0;box-shadow:50px 50px 0 #d7e3d1,110px 7px 0 #d6e4d0,160px 48px 0 #d6e4d0}
.uber-ux-guide .uber-map-road{height:8px;background:#fff;border:1px solid #d5ded3;box-shadow:0 0 0 1px rgba(255,255,255,.4)}
.uber-ux-guide .uber-map-pin{left:49%;top:31%;width:20px;height:20px;background:#0d6b4a;border:3px solid #fff;box-shadow:0 2px 7px #183d2b44;font-size:0}
.uber-ux-guide .uber-map-pin:after{content:"";position:absolute;left:5px;top:5px;width:4px;height:4px;border-radius:50%;background:#fff}
.uber-ux-guide .uber-map-label{left:8px;bottom:8px;border-radius:7px;padding:6px 8px;box-shadow:0 2px 8px #183d2b12;font-size:8px}
.uber-ux-guide .uber-map-pickup{height:110px}
.uber-ux-guide .uber-screen-button{background:#101512;border-radius:10px;padding:12px 6px;font-size:10px;letter-spacing:.005em;box-shadow:0 3px 0 #dce4dd}
.uber-ux-guide .uber-phone-nav{margin-top:1px;color:#167a55;border-top-color:#e7ece8}
.uber-ux-guide .uber-phone-nav small{color:#6b746e}
.uber-ux-guide .uber-info-card,.uber-ux-guide .uber-driver-card{padding:11px;border:1px solid #e1e8e2;border-radius:11px;background:#fbfcfb;gap:5px}
.uber-ux-guide .uber-info-card b,.uber-ux-guide .uber-driver-card b{font-size:10px;color:#202923}
.uber-ux-guide .uber-info-card span{font-size:11px;font-weight:700;color:#222a24}
.uber-ux-guide .uber-info-card small{font-size:8px;color:#657169}
.uber-ux-guide .uber-pickup-tag{align-self:flex-start;background:#eaf6ef;color:#167a55;border:1px solid #d2eadb;border-radius:99px;padding:5px 8px;font-size:8px;font-weight:800;letter-spacing:.01em}
.uber-ux-guide .uber-screen-link{color:#167a55;padding:2px 0}
.uber-ux-guide .uber-ride-option{grid-template-columns:25px minmax(0,1fr) auto;gap:7px;padding:11px 7px;border:1px solid #e1e7e2;border-radius:11px;background:#fff}
.uber-ux-guide .uber-ride-option.uber-selected{border:1.5px solid #138357;background:#f0f8f3;box-shadow:0 0 0 2px #13835712}
.uber-ux-guide .uber-car{display:grid;place-items:center;width:24px;height:24px;border-radius:7px;background:#edf3ee;color:#167a55;font-size:13px}
.uber-ux-guide .uber-ride-option b,.uber-ux-guide .uber-ride-option strong{font-size:10px;color:#1b241e}
.uber-ux-guide .uber-ride-option small{font-size:7.5px;color:#68736b}
.uber-ux-guide .uber-confirm-icon{width:48px;height:48px;background:#e7f7ed;color:#138052;border:1px solid #c7ead4;box-shadow:0 4px 12px #13805214;font-size:25px}
.uber-ux-guide .uber-confirm-kicker{text-align:center;font-size:8px;letter-spacing:.14em;font-weight:800;color:#167a55;margin-top:-5px}
.uber-ux-guide .uber-driver-card{grid-template-columns:34px minmax(0,1fr);background:#f8faf8}
.uber-ux-guide .uber-avatar{width:32px;height:32px;background:#dcefe3;color:#126d49;border:1px solid #c5e2d0}
.uber-ux-guide .uber-screen-card>p{margin-top:12px}
.uber-ux-guide .uber-screen-card>p strong{display:inline-block;margin-bottom:2px}
@media(max-width:760px){.uber-ux-guide .uber-phone{min-height:420px}}


/* Gutenberg native-block enhancements for the Uber assignment */
.uber-ux-guide.wp-block-group{max-width:960px;margin-inline:auto}
.uber-ux-guide .wp-block-heading{line-height:1.2;letter-spacing:-.02em}
.uber-ux-guide .wp-block-image{margin:1.5em 0}
.uber-ux-guide .wp-block-list{margin-bottom:1em}
.uber-ux-guide .uber-hero-image img{width:300px!important;max-width:100%!important}

</style>

<div class="uber-deliverables">
<div class="uber-deliverable"><span>01</span><h3>User Flow</h3><p>Map the steps a person takes to accomplish a specific task.</p></div>
<div class="uber-deliverable"><span>02</span><h3>UI/UX Style Guide</h3><p>Establish the visual rules for your interface.</p></div>
<div class="uber-deliverable"><span>03</span><h3>Interactive Prototype</h3><p>Build a clickable Figma prototype that demonstrates the redesigned experience.</p></div>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>These deliverables work together. Your user flow establishes the experience, your style guide establishes its visual language, and your flat screen designs give Figma Make a clear visual reference. You will use both <strong>Figma Design and Figma Make</strong>—not Figma Make alone—to build the final prototype.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">01 — Start With the User Flow</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Before designing screens, determine what the user needs to accomplish. Choose a specific holiday-related transportation problem. Identify the starting point, the decisions a user must make, and the successful outcome.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="uber-callout">
<h3>Your user flow should show</h3>
<ul>
<li>The starting point and the user's goal.</li>
<li>The sequence of actions and screens.</li>
<li>Decisions and alternative paths.</li>
<li>Relevant error, cancellation, or recovery paths.</li>
<li>The successful completion of the task.</li>
</ul>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Remember:</strong> A user flow maps the logic of the experience. It is not a collection of finished app screens.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> Submit a clearly labeled user flow created in Figma or FigJam, accompanied by a brief explanation of your design decisions.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="uber-reference-image uber-flow-example">
<div class="uber-flow-title">
<span>AMDE 477 | UI/UX DESIGN</span>
<strong>USER FLOW</strong>
<small>Plan the journey before you design the screens.</small>
</div>
<div class="uber-flow-guide-cards">
<div><b>01  START WITH THE GOAL</b><span>Who is the user? What are they trying to accomplish?</span></div>
<div><b>02  MAP THE HAPPY PATH</b><span>Show the simplest successful journey, then add branches.</span></div>
<div><b>03  ADD DECISIONS + ERRORS</b><span>Show where the experience can change, fail, or recover.</span></div>
</div>
<div class="uber-flow-legend">
<span><i class="legend-start"></i> Start / End</span>
<span><i class="legend-screen"></i> Screen</span>
<span><i class="legend-action"></i> User action</span>
<span><i class="legend-decision"></i> Decision</span>
<span><i class="legend-error"></i> Error / recovery</span>
</div>
<div class="uber-flow-diagram">
<div class="uber-flow-step flow-start"><b>START</b><strong>Open Uber</strong><small>User needs a ride to a holiday event</small></div>
<div class="uber-flow-connector"><span>→</span></div>
<div class="uber-flow-step"><b>SCREEN</b><strong>Enter destination</strong><small>Search for the event venue</small></div>
<div class="uber-flow-connector"><span>→</span></div>
<div class="uber-flow-step"><b>SCREEN</b><strong>Set pickup point</strong><small>Choose a clear, accessible meeting spot</small></div>
<div class="uber-flow-connector"><span>→</span></div>
<div class="uber-flow-step flow-decision"><b>DECISION</b><strong>Is pickup clear?</strong><small>Can the driver find the user?</small></div>
<div class="uber-flow-branches">
<div class="uber-flow-branch flow-yes"><b>YES</b><span>Review ride options and arrival time</span></div>
<div class="uber-flow-branch flow-no"><b>NO · ALTERNATE PATH</b><span>Select a nearby landmark, then review pickup again</span></div>
</div>
<div class="uber-flow-step flow-error"><b>ERROR / RECOVERY</b><strong>Pickup needs adjustment</strong><small>Update the location and return to pickup review</small></div>
<div class="uber-flow-connector"><span>↓</span></div>
<div class="uber-flow-step flow-action"><b>USER ACTION</b><strong>Confirm ride</strong><small>Review fare, pickup details, and arrival estimate</small></div>
<div class="uber-flow-connector"><span>↓</span></div>
<div class="uber-flow-step flow-end"><b>END</b><strong>Ride confirmed</strong><small>User knows where to wait and what happens next</small></div>
</div>
<figcaption>This example follows the structure of the AMDE 477 FigJam User Flow Template: a clear title, numbered planning prompts, a flow legend, labeled screens/actions, and decision, alternate, and recovery paths. Use the same visual language when you duplicate the template and adapt the flow to your own holiday transportation problem.</figcaption>
</figure>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><a href="https://nuggetofjoy.com/the-project-process-in-figma-figjam/">Review: The Project Process in Figma/FigJam</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">02 — Build Your UI/UX Style Guide</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A style guide helps you make consistent design decisions before you build the final screens. It prevents you from choosing colors, type sizes, and button styles independently on every screen.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a class="uber-template-link" href="https://www.figma.com/design/pMDnezhhqour9AwJLK3G0Y">Open the Figma UI/UX Style Guide Template →</a></p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div style="font-family:inherit;max-width:920px;margin:24px auto;padding:clamp(16px,3vw,30px);border:1px solid #dedede;border-radius:18px;background:#f7f7f5;color:#171717;box-sizing:border-box;overflow:hidden"><div style="font-size:11px;letter-spacing:.13em;font-weight:700;color:#686868;margin-bottom:8px">AMDE 477 · UI/UX DESIGN</div><h3 style="font-size:24px;line-height:1.15;margin:0 0 8px;font-weight:750">Visual Research & Moodboard</h3><p style="margin:0 0 20px;color:#555;font-size:14px">Use visual references to establish the direction for your interface.</p><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:18px"><div style="min-height:112px;background:linear-gradient(145deg,#172b27,#3d6658 55%,#d8b98c);border-radius:10px;padding:12px;color:white;display:flex;align-items:end;font-size:12px;font-weight:700">01 · ATMOSPHERE</div><div style="min-height:112px;background:linear-gradient(145deg,#f4eee3,#c7d4cb 48%,#263d35);border-radius:10px;padding:12px;color:#172b27;display:flex;align-items:end;font-size:12px;font-weight:700">02 · COLOR + LIGHT</div><div style="min-height:112px;background:linear-gradient(145deg,#1c1c1c,#555 45%,#e8e5df);border-radius:10px;padding:12px;color:white;display:flex;align-items:end;font-size:12px;font-weight:700">03 · MATERIAL</div></div><div style="padding:14px;border-radius:10px;background:white;border:1px solid #e2e2df;font-size:13px;line-height:1.5"><strong>Visual direction</strong><p style="margin:6px 0 0">Choose references that communicate a consistent mood. Add your own images and short notes in the Figma template.</p></div><p style="font-size:11px;color:#777;margin:18px 0 0">Illustrative example — customize the visual system for your own redesign.</p></div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Start with visual research</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Collect three visual references that help establish your design direction. These might include mobile interfaces, typography, color palettes, maps, transportation apps, or other relevant visual material. Add a short note explaining what you want to learn from each reference.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div style="font-family:inherit;max-width:920px;margin:24px auto;padding:clamp(16px,3vw,30px);border:1px solid #dedede;border-radius:18px;background:#f7f7f5;color:#171717;box-sizing:border-box;overflow:hidden"><div style="font-size:11px;letter-spacing:.13em;font-weight:700;color:#686868;margin-bottom:8px">AMDE 477 · UI/UX DESIGN</div><h3 style="font-size:24px;line-height:1.15;margin:0 0 8px;font-weight:750">Visual Research & Moodboard</h3><p style="margin:0 0 20px;color:#555;font-size:14px">Use visual references to establish the direction for your interface.</p><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:18px"><div style="min-height:112px;background:linear-gradient(145deg,#172b27,#3d6658 55%,#d8b98c);border-radius:10px;padding:12px;color:white;display:flex;align-items:end;font-size:12px;font-weight:700">01 · ATMOSPHERE</div><div style="min-height:112px;background:linear-gradient(145deg,#f4eee3,#c7d4cb 48%,#263d35);border-radius:10px;padding:12px;color:#172b27;display:flex;align-items:end;font-size:12px;font-weight:700">02 · COLOR + LIGHT</div><div style="min-height:112px;background:linear-gradient(145deg,#1c1c1c,#555 45%,#e8e5df);border-radius:10px;padding:12px;color:white;display:flex;align-items:end;font-size:12px;font-weight:700">03 · MATERIAL</div></div><div style="padding:14px;border-radius:10px;background:white;border:1px solid #e2e2df;font-size:13px;line-height:1.5"><strong>Visual direction</strong><p style="margin:6px 0 0">Choose references that communicate a consistent mood. Add your own images and short notes in the Figma template.</p></div><p style="font-size:11px;color:#777;margin:18px 0 0">Illustrative example — customize the visual system for your own redesign.</p></div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Foundations</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Define the product's purpose, intended user, primary task, and visual direction. Your decisions should support the user flow you created.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Color and contrast</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Establish a small, purposeful color system. Identify the role of each color, including primary actions, backgrounds, text, and error states. Check that text and interface elements remain readable. Color should communicate meaning clearly rather than serve only as decoration.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div style="font-family:inherit;max-width:920px;margin:24px auto;padding:clamp(16px,3vw,30px);border:1px solid #dedede;border-radius:18px;background:#f7f7f5;color:#171717;box-sizing:border-box;overflow:hidden"><div style="font-size:11px;letter-spacing:.13em;font-weight:700;color:#686868;margin-bottom:8px">AMDE 477 · UI/UX DESIGN</div><h3 style="font-size:24px;line-height:1.15;margin:0 0 8px;font-weight:750">Color & Contrast</h3><p style="margin:0 0 20px;color:#555;font-size:14px">Define color roles, then check readability and important controls.</p><div style="display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin:16px 0"><div style="height:94px;border-radius:9px;background:#101010"></div><div style="height:94px;border-radius:9px;background:#3f6d5a"></div><div style="height:94px;border-radius:9px;background:#e9cda5"></div><div style="height:94px;border-radius:9px;background:#f3f1eb;border:1px solid #ddd"></div><div style="height:94px;border-radius:9px;background:#b83d32"></div></div><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px"><div style="background:white;border:1px solid #ddd;border-radius:10px;padding:13px"><span style="font-size:11px;color:#666">PRIMARY ACTION</span><div style="margin-top:8px;background:#101010;color:white;padding:11px;border-radius:7px;text-align:center;font-weight:700">Confirm ride</div></div><div style="background:white;border:1px solid #ddd;border-radius:10px;padding:13px"><span style="font-size:11px;color:#666">ERROR STATE</span><div style="margin-top:8px;background:#b83d32;color:white;padding:11px;border-radius:7px;text-align:center;font-weight:700">Check pickup</div></div></div><p style="font-size:11px;color:#777;margin:18px 0 0">Illustrative example — customize the visual system for your own redesign.</p></div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Typography and spacing</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Create a consistent type hierarchy for headings, body text, and captions. Establish spacing values for padding inside elements and gaps between elements.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For example, you might use 16 px inside a card and 24 px between cards. The important thing is to apply your choices consistently.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div style="font-family:inherit;max-width:920px;margin:24px auto;padding:clamp(16px,3vw,30px);border:1px solid #dedede;border-radius:18px;background:#f7f7f5;color:#171717;box-sizing:border-box;overflow:hidden"><div style="font-size:11px;letter-spacing:.13em;font-weight:700;color:#686868;margin-bottom:8px">AMDE 477 · UI/UX DESIGN</div><h3 style="font-size:24px;line-height:1.15;margin:0 0 8px;font-weight:750">Typography & Spacing</h3><p style="margin:0 0 20px;color:#555;font-size:14px">Create a consistent type hierarchy and spacing scale.</p><div style="background:white;border:1px solid #ddd;border-radius:10px;padding:18px;margin-bottom:12px"><div style="font-size:11px;letter-spacing:.1em;color:#777;font-weight:700">TYPE HIERARCHY</div><div style="font-size:30px;font-weight:750;line-height:1.15;margin:12px 0 5px">Page heading</div><div style="font-size:20px;font-weight:650;margin-bottom:6px">Section heading</div><div style="font-size:15px;line-height:1.5">Body text should be comfortable to read and concise enough to scan on a phone.</div><div style="font-size:12px;color:#666;margin-top:8px">Caption · Supporting information</div></div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span style="background:white;border:1px solid #ddd;border-radius:6px;padding:8px 12px;font-size:12px">8 px</span><span style="background:white;border:1px solid #ddd;border-radius:6px;padding:8px 12px;font-size:12px">16 px</span><span style="background:white;border:1px solid #ddd;border-radius:6px;padding:8px 12px;font-size:12px">24 px</span><span style="font-size:12px;color:#666">Example spacing scale</span></div><p style="font-size:11px;color:#777;margin:18px 0 0">Illustrative example — customize the visual system for your own redesign.</p></div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Components</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Define reusable interface elements, such as buttons, input fields, cards, and navigation. Components should look and behave consistently throughout the app.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div style="font-family:inherit;max-width:920px;margin:24px auto;padding:clamp(16px,3vw,30px);border:1px solid #dedede;border-radius:18px;background:#f7f7f5;color:#171717;box-sizing:border-box;overflow:hidden"><div style="font-size:11px;letter-spacing:.13em;font-weight:700;color:#686868;margin-bottom:8px">AMDE 477 · UI/UX DESIGN</div><h3 style="font-size:24px;line-height:1.15;margin:0 0 8px;font-weight:750">Reusable UI Components</h3><p style="margin:0 0 20px;color:#555;font-size:14px">Document buttons, form fields, and interface states.</p><div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px"><div style="background:white;border:1px solid #ddd;border-radius:10px;padding:15px"><div style="font-size:11px;color:#777;font-weight:700;margin-bottom:10px">BUTTONS</div><div style="background:#101010;color:white;border-radius:7px;padding:10px;text-align:center;font-weight:700;margin-bottom:8px">Primary action</div><div style="border:1px solid #aaa;border-radius:7px;padding:9px;text-align:center">Secondary action</div></div><div style="background:white;border:1px solid #ddd;border-radius:10px;padding:15px"><div style="font-size:11px;color:#777;font-weight:700;margin-bottom:10px">FORM FIELD</div><div style="font-size:12px;margin-bottom:5px">Destination</div><div style="border:1px solid #aaa;border-radius:7px;padding:10px;color:#555">Enter location</div><div style="font-size:11px;color:#666;margin-top:8px">Label, state, and feedback</div></div></div><p style="font-size:11px;color:#777;margin:18px 0 0">Illustrative example — customize the visual system for your own redesign.</p></div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Interaction states and accessibility</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Consider what happens when a user interacts with an element. Depending on the component, relevant states may include default, hover, focus, pressed, disabled, error, or success.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Check contrast, text readability, visible focus indicators, clear labels, and whether meaning depends on color alone.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> Complete the relevant sections of the Figma style guide and keep it available while designing your prototype.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">03 — Design Key Screens in Figma Design First</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Do this before opening Figma Make.</strong> Figma Make works best when you provide a clear visual direction and concrete screen designs. First, use Figma Design to create a small set of key flat designs (static screens) that show what the product should look like. These are the visual references that will help guide the prototype Make builds.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You do not need to design every possible screen in advance. Start with the most important screens in your user flow—for example, the starting screen, the main task screen, a decision or details screen, and a confirmation or result screen.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="uber-callout">
<h3>Your key flat designs should establish</h3>
<ul>
<li>The main layout and content hierarchy on each screen.</li>
<li>Navigation, buttons, forms, cards, and other important interface elements.</li>
<li>The colors, type styles, spacing, and components from your UI/UX Style Guide.</li>
<li>Realistic interface copy and the information users need to complete the task.</li>
<li>A consistent visual system across all of the screens.</li>
</ul>
</div>
<!-- /wp:html -->

<!-- wp:html -->
<figure class="uber-flat-examples">
<div class="uber-example-heading"><span>FLAT DESIGN EXAMPLES</span><strong>Finished static screens in Figma Design</strong><small>These are visual references—not wireframes or clickable prototypes.</small></div>
<div class="uber-screen-grid">
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-screen-top"><span class="uber-seasonal-kicker">HOLIDAY TRAVEL</span><b>Good evening</b><span>Where to?</span></div><div class="uber-search"><span class="uber-search-dot"></span> Search destination <span class="uber-search-arrow">↗</span></div><div class="uber-map"><span class="uber-map-road road-one"></span><span class="uber-map-road road-two"></span><span class="uber-map-pin">●</span><span class="uber-map-label">Holiday Market</span></div><div class="uber-screen-button">Choose destination</div><div class="uber-phone-nav"><span>⌂<small>Home</small></span><span>▤<small>Activity</small></span><span>◉<small>Account</small></span></div></div><p><strong>Screen 1: Destination</strong><br/>Clear entry point and a visible primary action.</p></div>
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-screen-top"><b>Confirm pickup</b><span>Make your pickup easy to find</span></div><div class="uber-map uber-map-pickup"><span class="uber-map-road road-one"></span><span class="uber-map-road road-two"></span><span class="uber-map-pin">●</span><span class="uber-map-label">Main Street entrance</span></div><div class="uber-pickup-tag">✦   Easy-to-find pickup</div><div class="uber-info-card"><b>Pickup location</b><span>120 Main Street</span><small>By the illuminated entrance</small></div><div class="uber-screen-button">Confirm pickup</div><div class="uber-screen-link">Edit location</div></div><p><strong>Screen 2: Pickup details</strong><br/>Specific location cues reduce confusion in a crowd.</p></div>
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-screen-top"><span class="uber-seasonal-kicker">YOUR RIDE</span><b>Choose your ride</b><span>Pickup in about 4 min · Arrive by 7:20 PM</span></div><div class="uber-ride-option uber-selected"><span class="uber-car">▰</span><span><b>UberX</b><small>4 seats · Everyday ride</small></span><strong>$18.40</strong></div><div class="uber-ride-option"><span class="uber-car">▰</span><span><b>Comfort</b><small>4 seats · Extra comfort</small></span><strong>$24.10</strong></div><div class="uber-ride-option"><span class="uber-car">▰</span><span><b>XL</b><small>6 seats · More room</small></span><strong>$31.20</strong></div><div class="uber-screen-button">Confirm UberX</div></div><p><strong>Screen 3: Ride options</strong><br/>Compare choices, arrival times, and prices.</p></div>
<div class="uber-screen-card"><div class="uber-phone"><div class="uber-phone-status"><span>9:41</span><span>● ● ●</span></div><div class="uber-confirm-icon">✓</div><div class="uber-confirm-kicker">YOU’RE ALL SET</div><div class="uber-screen-top uber-center"><b>Your ride is confirmed</b><span>Your driver is on the way</span></div><div class="uber-driver-card"><div class="uber-avatar">JD</div><span><b>Jordan D.</b><small>White Toyota Camry · 4XYZ218</small><small>Arriving in 4 minutes</small></span><b>4.98 ★</b></div><div class="uber-info-card"><b>Pickup</b><span>120 Main Street</span><small>Wait by the illuminated entrance</small></div><div class="uber-screen-button">View ride details</div><div class="uber-screen-link">Share trip status</div></div><p><strong>Screen 4: Confirmation</strong><br/>Reassure the user and make next steps clear.</p></div>
</div>
<figcaption>Example direction for a consistent set of finished, flat app screens. Treat these as inspiration for layout and hierarchy; create your own designs and adapt them to the visual system in your UI/UX Style Guide.</figcaption>
</figure>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> Create your key flat screen designs in Figma Design. Keep the frames organized and clearly named so you can refer to them while working in Figma Make.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">04 — Use Figma Make to Complete the Prototype</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After you have designed your key screens, use Figma Make to help turn the designs and your written instructions into a working prototype. Treat Make as a collaborator, not as a substitute for your design decisions. Provide your goal, describe the user flow, refer to your flat designs, and explain which interactions should work.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="uber-deliverables uber-make-steps">
<div class="uber-deliverable"><span>01</span><h3>Prepare</h3><p>Finish the user flow, style guide, and key flat designs in Figma Design.</p></div>
<div class="uber-deliverable"><span>02</span><h3>Prompt</h3><p>Describe the purpose, users, screens, visual rules, and expected interactions in Figma Make.</p></div>
<div class="uber-deliverable"><span>03</span><h3>Refine</h3><p>Compare Make’s result with your designs. Correct visual inconsistencies and test the main journey.</p></div>
</div>
<!-- /wp:html -->

<!-- wp:html -->
<div class="uber-callout"><strong>Workflow:</strong> User flow → UI/UX Style Guide → finished flat screens in Figma Design → interactive prototype in Figma Make.</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Important:</strong> Do not begin with a vague prompt and expect Figma Make to invent the entire design system. Your key screens and style guide should give it a clear visual target.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">05 — Connect and Test the Interactive Prototype</h2>
<!-- /wp:heading -->

<!-- wp:html -->
<div class="uber-video-resource">
<h3>Watch: Intro to Figma Make</h3>
<p>This official Figma tutorial demonstrates how to turn an existing Figma design into an interactive prototype. It covers prompting, navigating the editor, refining results, and sharing your work.</p>
<div class="uber-video-embed">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/9Y2Yz-ir3JM" title="Intro to Figma Make — official Figma tutorial"></iframe>
</div>
<p><a href="https://www.youtube.com/watch?v=9Y2Yz-ir3JM" rel="noopener noreferrer" target="_blank">Watch directly on YouTube →</a></p>
<p><strong>As you watch:</strong> Notice how the prompt describes the intended product and how the design is refined after the first result. Complete your key flat screen designs and style guide in Figma Design first, then use them to guide Figma Make. Do not rely on a single vague prompt to determine the entire visual design.</p>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>Use your user flow and style guide to build the redesigned experience. Your prototype should demonstrate the complete journey needed to accomplish your chosen task, with enough screens to make the experience understandable from beginning to end.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="uber-two-column">
<div>
<h3>Your prototype should include</h3>
<ul>
<li>Screens that follow your user flow.</li>
<li>Consistent colors, typography, spacing, and components.</li>
<li>Clickable buttons and navigation where appropriate.</li>
<li>Clear feedback when the user takes an action.</li>
<li>Relevant confirmation, error, or recovery states.</li>
<li>Realistic interface text and content.</li>
</ul>
</div>
<figure>
<img alt="Usability testing illustration" loading="lazy" src="https://uxdesignmastery.com/wp-content/uploads/2023/05/testing-1024x415.png"/>
<figcaption>Test your prototype with people, observe where they hesitate, and improve the design.</figcaption>
</figure>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>Your prototype does not need to reproduce every feature of Uber. Focus on making your chosen user journey work well. Check that the key screens from Figma Design are reflected in the Make prototype and that the main interactions are clear and usable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> Submit your Figma Design file containing the user flow, UI/UX Style Guide, and key flat screen designs, plus a shareable link to your Figma Make interactive prototype. Make sure the prototype starts at the correct screen and that its main interactions work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Student examples:</strong> Review the examples provided in D2L, including the prototype created with Figma Make.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Design Principles to Remember</h2>
<!-- /wp:heading -->

<!-- wp:html -->
<div class="uber-principle-grid">
<div><h3>Reduce cognitive load</h3><p>Keep each screen focused on the information and actions the user needs at that moment.</p></div>
<div><h3>Make actions clear</h3><p>Users should understand what a button does before they select it.</p></div>
<div><h3>Provide feedback</h3><p>Confirm important actions and help users understand what is happening.</p></div>
<div><h3>Be consistent</h3><p>Reuse established patterns instead of making users learn a new interaction on every screen.</p></div>
<div><h3>Design for accessibility</h3><p>Readable text, sufficient contrast, clear labels, and predictable interactions benefit everyone.</p></div>
</div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>For additional guidance, review <a href="https://nuggetofjoy.com/ux-laws/">UX Laws</a> and <a href="https://nuggetofjoy.com/the-project-process-in-figma-figjam/">The Project Process in Figma/FigJam</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Before You Submit</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>My user flow communicates a clear task and successful outcome.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>My style guide documents the visual system used in my design.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>I created the key flat designs in Figma Design before using Figma Make.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>My Figma Make prototype follows the user flow and references my flat designs.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>My interface uses consistent components and spacing.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>My primary interactions work.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>My screens provide clear feedback and readable content.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>My Figma file and prototype link are accessible to the instructor.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>The goal is not simply to make an attractive interface. It is to design an experience that helps someone accomplish a real task clearly, efficiently, and confidently.</strong></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
