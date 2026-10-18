---
title: "Redesigning the Spotify App"
date: "2026-10-17 13:28:13"
layout: post
permalink: "/redesigning-the-spotify-app/"
categories: ["projects"]
tags: []
wordpress_id: "68050"
---

<!-- wp:group {"className":"spotify-ux-guide","layout":{"type":"constrained"}} -->
<div class="wp-block-group spotify-ux-guide"><!-- wp:html -->
<style>
.spotify-ux-guide{max-width:960px;margin-inline:auto}.spotify-ux-guide .wp-block-heading{line-height:1.2;letter-spacing:-.02em}.spotify-ux-guide .wp-block-image{margin:1.5em 0}.spotify-ux-guide .wp-block-list{margin-bottom:1em}.spotify-ux-guide .spotify-hero{padding:clamp(22px,4vw,42px);background:#121212;color:#fff;border-radius:16px;margin:20px 0 30px}.spotify-ux-guide .spotify-hero .eyebrow{font-size:.8em;letter-spacing:.14em;font-weight:700;color:#1ed760}.spotify-ux-guide .spotify-hero h2{color:#fff;font-size:clamp(2rem,5vw,3.3rem);line-height:1.05;margin:.3em 0}.spotify-ux-guide .spotify-hero p{color:#e6e6e6}.spotify-ux-guide .spotify-pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}.spotify-ux-guide .spotify-pills span{border:1px solid #555;border-radius:999px;padding:7px 12px;font-size:.9em}.spotify-ux-guide .spotify-callout{border-left:5px solid #1ed760;background:#f2f8f3;padding:18px 22px;margin:22px 0;border-radius:0 10px 10px 0}.spotify-ux-guide .spotify-deliverables{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:22px 0}.spotify-ux-guide .spotify-deliverable{border:1px solid #d9d9d9;border-radius:12px;padding:18px;background:#fff}.spotify-ux-guide .spotify-deliverable span{font-size:.8em;font-weight:700;letter-spacing:.1em;color:#087d3c}.spotify-ux-guide .spotify-deliverable h3{margin:8px 0;font-size:1.15em}.spotify-ux-guide .spotify-deliverable p{margin-bottom:0}.spotify-ux-guide .spotify-reference{margin:24px 0;padding:16px;border:1px solid #dedede;border-radius:12px;background:#fafafa}.spotify-ux-guide .spotify-reference img{display:block;width:100%;height:auto;border-radius:6px}.spotify-ux-guide .spotify-reference figcaption{font-size:.92em;margin-top:10px}.spotify-ux-guide .spotify-video{margin:20px 0;padding:18px;border:1px solid #d9d9d9;border-radius:12px}.spotify-ux-guide .spotify-video iframe{width:100%;aspect-ratio:16/9;height:auto;border:0;border-radius:8px}.spotify-ux-guide .spotify-phone-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:22px 0}.spotify-ux-guide .spotify-phone{background:#171717;color:#fff;border-radius:20px;padding:15px;border:4px solid #303030;min-height:265px}.spotify-ux-guide .spotify-phone .mock-eyebrow{font-size:.72em;color:#1ed760;letter-spacing:.08em}.spotify-ux-guide .spotify-phone h4{color:#fff;font-size:1.05em;margin:8px 0}.spotify-ux-guide .spotify-cover{height:92px;border-radius:8px;background:linear-gradient(135deg,#1ed760,#185b3a);display:flex;align-items:center;justify-content:center;color:#09210f;font-weight:800;font-size:1.3em;margin:10px 0}.spotify-ux-guide .spotify-mock-button{display:block;background:#1ed760;color:#101010!important;text-align:center;border-radius:999px;padding:8px 10px;margin-top:12px;font-weight:700;text-decoration:none}.spotify-ux-guide .spotify-screen-note{font-size:.83em;color:#bdbdbd}.spotify-ux-guide .spotify-checklist{list-style:none;padding-left:0}.spotify-ux-guide .spotify-checklist li{padding:9px 0;border-bottom:1px solid #e4e4e4}.spotify-ux-guide .spotify-checklist li:before{content:'□';font-size:1.2em;margin-right:10px}.spotify-ux-guide .spotify-template-shot{max-width:100%;margin:22px 0}.spotify-ux-guide .spotify-template-shot img{width:100%;height:auto;display:block}.spotify-ux-guide .spotify-template-link{font-weight:700}.spotify-ux-guide .spotify-flow{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:18px 0}.spotify-ux-guide .spotify-flow span{border:1px solid #aaa;border-radius:9px;padding:10px 12px;background:#fff}.spotify-ux-guide .spotify-flow b{color:#087d3c}.spotify-ux-guide .spotify-flow .decision{background:#fff4d7;border-color:#d9a441}.spotify-ux-guide .spotify-flow .end{background:#e7f8eb;border-color:#168447}
.spotify-ux-guide .spotify-flow-example{padding:24px;border:1px solid #e2e5e8;border-radius:14px;background:#fbfbfc;margin:24px 0}
.spotify-ux-guide .spotify-flow-title{display:flex;flex-direction:column;gap:4px;margin-bottom:22px}
.spotify-ux-guide .spotify-flow-title>span{font-size:.72rem;letter-spacing:.12em;font-weight:800;color:#6c5ce7}
.spotify-ux-guide .spotify-flow-title>strong{font-size:1.8rem;line-height:1.15;letter-spacing:-.03em;color:#202124}
.spotify-ux-guide .spotify-flow-title>small{color:#62676d}
.spotify-ux-guide .spotify-flow-guide-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:0 0 22px}
.spotify-ux-guide .spotify-flow-guide-cards>div{border:1px solid #e2e5e8;border-radius:9px;background:#fff;padding:14px;display:flex;flex-direction:column;gap:7px}
.spotify-ux-guide .spotify-flow-guide-cards b{font-size:.68rem;letter-spacing:.04em;color:#6c5ce7;line-height:1.35}
.spotify-ux-guide .spotify-flow-guide-cards span{font-size:.82rem;line-height:1.4;color:#454950}
.spotify-ux-guide .spotify-flow-legend{display:flex;flex-wrap:wrap;gap:9px 16px;padding:13px 0 18px;border-bottom:1px solid #e2e5e8;margin-bottom:18px}
.spotify-ux-guide .spotify-flow-legend span{display:flex;align-items:center;gap:7px;font-size:.75rem;color:#555b63}
.spotify-ux-guide .spotify-flow-legend i{display:inline-block;width:13px;height:13px;border:1px solid #bfc4cc;background:#fff;border-radius:3px}
.spotify-ux-guide .spotify-flow-legend .legend-start{border-radius:7px;background:#f4f1ff;border-color:#6c5ce7}
.spotify-ux-guide .spotify-flow-legend .legend-action{background:#eef5ff;border-color:#8eadd7}
.spotify-ux-guide .spotify-flow-legend .legend-decision{transform:rotate(45deg);border-radius:0;background:#fff7e8;border-color:#d6aa5e;width:11px;height:11px}
.spotify-ux-guide .spotify-flow-legend .legend-error{background:#f0f1f3;border-color:#9aa0a6}
.spotify-ux-guide .spotify-flow-diagram{max-width:760px;margin:0 auto;display:flex;flex-direction:column;align-items:stretch;gap:0}
.spotify-ux-guide .spotify-flow-step{box-sizing:border-box;padding:15px 18px;border:1px solid #d9dce3;border-radius:9px;background:#fff;display:flex;flex-direction:column;gap:4px;max-width:440px;width:100%;margin:0 auto}
.spotify-ux-guide .spotify-flow-step>b{font-size:.67rem;letter-spacing:.09em;color:#6c5ce7}
.spotify-ux-guide .spotify-flow-step>strong{font-size:1rem;line-height:1.3;color:#202124}
.spotify-ux-guide .spotify-flow-step>small{font-size:.8rem;line-height:1.4;color:#62676d}
.spotify-ux-guide .spotify-flow-step.flow-start{background:#f4f1ff;border-color:#6c5ce7;border-radius:18px}
.spotify-ux-guide .spotify-flow-step.flow-decision{max-width:280px;text-align:center;background:#fff7e8;border-color:#d6aa5e;border-radius:8px}
.spotify-ux-guide .spotify-flow-step.flow-action{background:#eef5ff;border-color:#8eadd7}
.spotify-ux-guide .spotify-flow-step.flow-error{background:#f0f1f3;border-color:#9aa0a6;max-width:380px}
.spotify-ux-guide .spotify-flow-step.flow-end{background:#effaf3;border-color:#a8d7b8;border-radius:18px;text-align:center}
.spotify-ux-guide .spotify-flow-step.flow-end>b{color:#237447}
.spotify-ux-guide .spotify-flow-connector{text-align:center;height:34px;display:flex;align-items:center;justify-content:center;color:#6c5ce7;font-size:1.35rem;font-weight:800}
.spotify-ux-guide .spotify-flow-branches{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:660px;width:100%;margin:0 auto 12px}
.spotify-ux-guide .spotify-flow-branch{box-sizing:border-box;border-left:3px solid #6c5ce7;padding:12px 14px;background:#f4f1ff;border-radius:0 8px 8px 0;display:flex;flex-direction:column;gap:6px;font-size:.84rem;line-height:1.4}
.spotify-ux-guide .spotify-flow-branch b{font-size:.68rem;letter-spacing:.07em;color:#6c5ce7}
.spotify-ux-guide .spotify-flow-branch span{color:#4e5258}
.spotify-ux-guide .spotify-flow-branch.flow-no{border-left-color:#9aa0a6;background:#f0f1f3}
.spotify-ux-guide .spotify-flow-branch.flow-no b{color:#62676d}
.spotify-ux-guide .spotify-flow-example figcaption{font-size:.85rem;line-height:1.5;color:#62676d;margin-top:18px}
@media(max-width:760px){.spotify-ux-guide .spotify-flow-guide-cards{grid-template-columns:1fr}.spotify-ux-guide .spotify-flow-branches{grid-template-columns:1fr}.spotify-ux-guide .spotify-flow-example{padding:14px}}
@media(max-width:600px){.spotify-ux-guide .spotify-hero{padding:22px}.spotify-ux-guide .spotify-deliverable{padding:14px}}
</style>
<!-- /wp:html -->

<!-- wp:html -->
<header class="spotify-hero">
<p class="eyebrow">UX/UI DESIGN BRIEF #8</p>
<h2>Redesigning the Spotify App</h2>
<p>A step-by-step project guide: research a real user problem, map the user flow, use the existing UI/UX Style Guide template, design your screens, and build and test an interactive prototype.</p>
<div class="spotify-pills"><span>User Flow</span><span>UI/UX Style Guide</span><span>Figma Design</span><span>Figma Make</span><span>User Testing</span></div>
</header>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Your challenge is to redesign a focused part of Spotify's mobile music experience. Make the experience easier to navigate, more personal, and more useful for a specific audience. Do not try to redesign every feature. Identify one meaningful user problem and build a connected experience that addresses it.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="spotify-deliverables">
<div class="spotify-deliverable"><span>01</span><h3>User Flow</h3><p>Map the journey and key decisions in FigJam.</p></div>
<div class="spotify-deliverable"><span>02</span><h3>UI/UX Style Guide</h3><p>Duplicate and complete the existing class template.</p></div>
<div class="spotify-deliverable"><span>03</span><h3>Flat Screens</h3><p>Design the required screens in Figma Design.</p></div>
<div class="spotify-deliverable"><span>04</span><h3>Interactive Prototype</h3><p>Connect the journey and refine it with Figma Make.</p></div>
<div class="spotify-deliverable"><span>05</span><h3>User Testing</h3><p>Test, revise, and test again with users.</p></div>
</div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Client Brief: Spotify</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Objective</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Improve the mobile music-streaming experience by helping users onboard, discover music, create playlists, and quickly access favorite songs. Your redesign should address a specific pain point supported by your research and testing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Target audiences</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Marcus Lee, 35 — Musician:</strong> wants to share music, collaborate with other artists, and get feedback on his work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Sophia Patel, 23 — Music Enthusiast:</strong> wants to discover artists, create playlists for different moods, and find live music and concerts.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Sandra Jenkins, 28 — Fitness Enthusiast:</strong> wants to find motivating workout music, create exercise playlists, and quickly access music that fits her routine.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="spotify-callout"><strong>Choose one primary audience.</strong> You may consider the other personas, but make your design decisions for one main user and one clearly defined task.</div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Requirements to consider</h3>
<!-- /wp:heading -->

<!-- wp:list {"className":"wp-block-list"} -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Clear, easy-to-use navigation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Personalized music recommendations.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Creating and saving playlists.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Offline listening as a consideration in the experience.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Sharing music or playlists with others.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Discovering concerts or ticket information.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You do not have to add every feature. Use user research to choose the most important problem and keep your prototype focused.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">01 — Research the Existing Experience</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Before redesigning Spotify, examine how the current app works. Ask at least a few people about how they discover music, find saved songs, manage playlists, or listen while exercising. Observe the current app and note moments of confusion, extra steps, or unmet needs.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"className":"wp-block-list"} -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Identify one recurring user problem.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Record what users currently do and where they struggle.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Look at competing services such as YouTube Music, Apple Music, and Pandora for useful interface ideas.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Write a short problem statement and a “How might we…” question.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:html -->
<div class="spotify-callout"><strong>Example problem statement:</strong> “Listeners who save a lot of music have trouble quickly finding the right playlist for a specific activity.” This is only an example. Use your own observations to define your actual problem.</div>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">02 — Create Your User Flow in FigJam</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Before designing screens, choose one task for your Spotify user. Map the starting point, the actions and decisions along the way, and what success looks like. Your flow should describe the logic of the experience—not just show a row of finished app screens.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="spotify-callout"><strong>Your user flow should show</strong><ul><li>The starting point and the user's goal.</li><li>The sequence of actions and screens.</li><li>Decisions and alternative paths.</li><li>Relevant error, empty, or recovery paths.</li><li>The successful completion of the task.</li></ul></div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Use the course template.</strong> Open the AMDE 477 FigJam User Flow Template, duplicate it, and adapt the structure to your chosen Spotify task. Keep the flow focused and make the labels easy to follow.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.figma.com/board/RxFOOQjxuIWRUxCCZHkhuA/AMDE-477-%E2%80%94-User-Flow-Template?node-id=0-1&amp;t=S7mQF2MHYW1SInVQ-1"><strong>Open the AMDE 477 FigJam User Flow Template →</strong></a></p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="spotify-flow-example">
<div class="spotify-flow-title"><span>AMDE 477 | UI/UX DESIGN</span><strong>USER FLOW</strong><small>Plan the journey before you design the screens.</small></div>
<div class="spotify-flow-guide-cards">
<div><b>01&nbsp; START WITH THE GOAL</b><span>Who is the user, and what are they trying to accomplish in Spotify?</span></div>
<div><b>02&nbsp; MAP THE HAPPY PATH</b><span>Show the simplest successful journey, then add branches.</span></div>
<div><b>03&nbsp; ADD DECISIONS + ERRORS</b><span>Show where the experience can change, fail, or recover.</span></div>
</div>
<div class="spotify-flow-legend">
<span><i class="legend-start"></i> Start / End</span><span><i class="legend-screen"></i> Screen</span><span><i class="legend-action"></i> User action</span><span><i class="legend-decision"></i> Decision</span><span><i class="legend-error"></i> Error / recovery</span>
</div>
<div class="spotify-flow-diagram">
<div class="spotify-flow-step flow-start"><b>START</b><strong>Open Spotify</strong><small>User wants to find music for a specific activity</small></div>
<div class="spotify-flow-connector">↓</div>
<div class="spotify-flow-step"><b>SCREEN</b><strong>Choose a starting point</strong><small>Search, saved music, or personalized recommendations</small></div>
<div class="spotify-flow-connector">↓</div>
<div class="spotify-flow-step"><b>SCREEN / ACTION</b><strong>Find a song or playlist</strong><small>Enter a search, browse results, or select a recommendation</small></div>
<div class="spotify-flow-connector">↓</div>
<div class="spotify-flow-step flow-decision"><b>DECISION</b><strong>Did the user find the right music?</strong><small>Does the result match their goal?</small></div>
<div class="spotify-flow-branches">
<div class="spotify-flow-branch"><b>YES · CONTINUE</b><span>Open the song or playlist and review the selection</span></div>
<div class="spotify-flow-branch flow-no"><b>NO · ALTERNATE PATH</b><span>Refine the search, browse another category, or try a different recommendation</span></div>
</div>
<div class="spotify-flow-step flow-error"><b>EMPTY / RECOVERY</b><strong>No useful result found</strong><small>Offer a clear way to edit the search or return to recommendations</small></div>
<div class="spotify-flow-connector">↓</div>
<div class="spotify-flow-step flow-action"><b>USER ACTION</b><strong>Play or save the selection</strong><small>Make the next action clear and easy to complete</small></div>
<div class="spotify-flow-connector">↓</div>
<div class="spotify-flow-step flow-end"><b>END</b><strong>Music ready to enjoy</strong><small>User reaches the intended listening goal</small></div>
</div>
<figcaption>Example only. This uses the same visual structure as the Uber assignment: planning prompts, a flow legend, labeled steps, a decision, an alternate path, a recovery state, and a clear outcome. Adapt the journey to your own research and chosen Spotify user task.</figcaption>
</figure>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> A clearly labeled FigJam user flow and a brief explanation of the user problem and why you organized the journey this way.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Review: <a href="https://nuggetofjoy.com/the-project-process-in-figma-figjam/">The Project Process in Figma/FigJam: User Flow, Low-Fidelity and High-Fidelity Prototyping</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">03 — Complete the Existing UI/UX Style Guide Template</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Use the existing Student UI/UX Style Guide template created for this course.</strong> Open the template, duplicate it, and adapt its sections to your Spotify redesign. Do not create a different style-guide format.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a class="spotify-template-link" href="https://www.figma.com/design/pMDnezhhqour9AwJLK3G0Y">Open the Student UI/UX Style Guide template in Figma →</a></p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/546230b4-5363-4f26-ab59-d245003903c4.png" alt="Actual Student UI/UX Style Guide template in Figma: visual research and moodboard section" loading="lazy"><figcaption><strong>Actual course template — Visual Research &amp; Moodboard.</strong> Use the existing template and adapt the research and visual direction to your Spotify redesign.</figcaption></figure>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Color and contrast</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Define your color palette and explain the role of each color. You may draw inspiration from Spotify's identity, but make purposeful choices that support readability and your own design direction.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/dc6c23d3-e208-4de1-80b0-81999bb35d97.png" alt="Actual Student UI/UX Style Guide template section for color palette and contrast" loading="lazy"><figcaption><strong>Actual course template — Color &amp; Contrast.</strong> Complete this section of the template and check that text, controls, and states remain distinguishable.</figcaption></figure>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Typography and spacing</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Establish a consistent hierarchy for headings, body text, labels, and supporting text. Choose spacing values and apply them consistently across your screens.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/109fd972-a72f-404c-900c-9e0458a899bc.png" alt="Actual Student UI/UX Style Guide template section for typography hierarchy and spacing" loading="lazy"><figcaption><strong>Actual course template — Typography &amp; Spacing.</strong> Use this existing section to document your type scale and spacing rules.</figcaption></figure>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Reusable components and states</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Document recurring elements such as buttons, search fields, playlist cards, navigation, and playback controls. Show relevant states such as default, selected, disabled, or error where appropriate. Include accessibility considerations such as contrast, legible text, clear labels, and visible focus.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/b2b52fc0-fe1f-42b8-9df3-54546214301f.png" alt="Actual Student UI/UX Style Guide template section showing reusable interface components" loading="lazy"><figcaption><strong>Actual course template — Components.</strong> Define the interface elements that will repeat throughout your prototype.</figcaption></figure>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> A completed copy of the existing UI/UX Style Guide template adapted to your Spotify project. Keep it open as a reference while designing screens.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/c53b8af3-9dd9-49b8-b29c-af6053d039aa.png" alt="Actual Figma UI/UX Style Guide template showing Foundations: project purpose, intended user, primary task, and visual direction" loading="lazy"><figcaption><strong>Actual course template — Foundations.</strong> Define the product, user, primary task, and visual direction before designing screens.</figcaption></figure>
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/e95b4662-5403-4563-a3dd-3ad472b300f7.png" alt="Actual Figma UI/UX Style Guide template showing interaction states: default, hover, focus, pressed, disabled, and error" loading="lazy"><figcaption><strong>Actual course template — States.</strong> Show how interactive elements change across default, hover, focus, pressed, disabled, and error states.</figcaption></figure>
<figure class="spotify-reference spotify-template-shot"><img src="https://www.figma.com/api/mcp/asset/6efc91f7-9a9f-4de0-80c3-20521f419f83.png" alt="Actual Figma UI/UX Style Guide template accessibility checklist" loading="lazy"><figcaption><strong>Actual course template — Accessibility.</strong> Check contrast, visible focus, clear labels, readable type, and distinct feedback states.</figcaption></figure>

<!-- wp:heading -->
<h2 class="wp-block-heading">04 — Design the Flat Screens in Figma Design</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Use your user flow and style guide to design the key screens in Figma Design first. Keep the screens organized and name each frame clearly. You should be able to see the visual design before you ask Figma Make to help create the interactive experience.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Your screen set should include the screens needed for your chosen flow. The brief identifies these core screen types:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"className":"wp-block-list"} -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Onboarding:</strong> welcome and preference setup for a new user, if relevant to your flow.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Home:</strong> personalized recommendations and quick access to useful content.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Search:</strong> search for songs, artists, albums, or playlists.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Playlist:</strong> view, create, save, or edit a playlist.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Player:</strong> current track, playback controls, and relevant actions such as saving or sharing.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Settings or preferences:</strong> music interests and personalization controls, if needed for your flow.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>You do not have to design every possible screen if it does not support your chosen task. Include enough connected screens to demonstrate the full journey and any important decision or recovery states.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":68070,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://nuggetofjoy.com/wp-content/uploads/image-1-3.png" alt="Spotify Example App Screens" class="wp-image-68070"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p><strong>Deliverable:</strong> A clearly named set of flat screen designs in Figma Design that follows your user flow and applies the rules from your style guide.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">05 — Use Figma Make to Build the Interactive Prototype</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Once your user flow, style guide, and flat screens are ready, use Figma Make to help turn the planned experience into a working prototype. Give it a clear description of the user, goal, screen sequence, visual rules, and expected interactions. Your design decisions should guide the tool—not the other way around.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="spotify-deliverables">
<div class="spotify-deliverable"><span>01 / PREPARE</span><h3>Finish the design</h3><p>Complete the FigJam user flow, course style-guide template, and flat screens in Figma Design.</p></div>
<div class="spotify-deliverable"><span>02 / PROMPT</span><h3>Describe the experience</h3><p>Explain the user goal, key screens, visual system, navigation, and interactions.</p></div>
<div class="spotify-deliverable"><span>03 / REFINE</span><h3>Review and correct</h3><p>Compare the result with your flat screens and style guide. Fix inconsistent visuals and broken interactions.</p></div>
</div>
<div class="spotify-callout"><strong>Workflow:</strong> Research → FigJam user flow → existing UI/UX Style Guide template → flat screens in Figma Design → Figma Make prototype → testing and iteration.</div>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Prototype refresher video</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Review this official Figma tutorial on using Figma Make to develop and refine an interactive experience. Use it as a refresher after you have designed your key screens and completed the style guide.</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<div class="spotify-video" id="spotify-prototype"><h4>Intro to Figma Make</h4><iframe src="https://www.youtube-nocookie.com/embed/9Y2Yz-ir3JM" title="Intro to Figma Make — official Figma tutorial" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p>If the video does not appear, <a href="https://www.youtube.com/watch?v=9Y2Yz-ir3JM">watch the tutorial directly on YouTube</a>.</p></div>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>Your prototype should have a clear starting point, working navigation for the main journey, meaningful responses to user actions, and relevant success, empty, or error states. Preview it from beginning to end before testing.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">06 — Test, Revise, and Test Again</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Test your early wireframes or prototype with five people. Give each person a realistic task without explaining every step. Observe where they hesitate, make mistakes, or misunderstand a control. Ask what they would improve and request an overall rating using the same scale for everyone.</p>
<!-- /wp:paragraph -->

<!-- wp:list {"className":"wp-block-list"} -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>Round 1: Test with five people and record observations, comments, and ratings.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Identify the most important usability issues; prioritize changes that prevent task completion or cause confusion.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Revise your flow, screens, and prototype based on the evidence.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Round 2: Test the revised design with five people. Use the same tasks and rating scale so you can compare results.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Report what changed and whether the second round improved the experience. If it did not, explain what you would revise next.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:html -->
<figure class="spotify-reference"><img src="https://uxdesignmastery.com/wp-content/uploads/2023/05/testing-1024x415.png" alt="Illustration associated with usability testing" loading="lazy"><figcaption>Test with real people, observe their behavior, and make evidence-based improvements.</figcaption></figure>
<!-- /wp:html -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">What to report</h3>
<!-- /wp:heading -->

<!-- wp:list {"className":"wp-block-list"} -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>The task each participant attempted.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Patterns you observed across participants.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>The most important changes you made after the first round.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Ratings before and after iteration, using the same scale.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>What you learned and what you would improve next.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final Deliverables Checklist</h2>
<!-- /wp:heading -->

<!-- wp:html -->
<ul class="spotify-checklist"><li>Research notes and a clearly defined user problem.</li><li>FigJam user flow with decisions and recovery paths.</li><li>Completed copy of the existing Student UI/UX Style Guide template.</li><li>Organized flat screens designed in Figma Design.</li><li>Interactive prototype created with Figma Make, with a working main journey.</li><li>Short explanation of design decisions and key interactions.</li><li>First usability test with five people and documented findings.</li><li>Revised design and second test with five people.</li><li>Brief summary of iterations and testing results.</li><li>Shareable links to your FigJam, Figma Design, and prototype, with appropriate viewing permissions.</li></ul>
<!-- /wp:html -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Remember the Process</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Strong UI/UX work is more than attractive screens. Research helps you choose the right problem, the user flow organizes the journey, the style guide keeps the interface consistent, the prototype demonstrates behavior, and testing shows what needs to improve.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
