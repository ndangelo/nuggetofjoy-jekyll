---
layout: post
title: Smartwatch Messenger App
date: 2026-10-18 17:19:00
custom_css:
  code: ""
author: Nicholas D’Angelo
content_blocks:
  - type: gallery
    images:
      - image: /nuggetofjoy-jekyll/assets/images/uploads/smartwatch-brief-overview.png
        alt: Watch
---

<header class="wrap hero" id="top">
  <div>
    <div class="eyebrow">UX/UI Design Brief</div>
    <h1>Smartwatch<br>Messenger App</h1>
    <p>Design a messaging experience that makes sending and receiving messages simple, fast, and accessible on a small screen.</p><p><br></p>
    <div class="pills"><span class="pill">User Flow</span><span class="pill">UI/UX Style Guide Prototype</span></div>
  </div>
  <div class="hero-art" aria-label="Illustration of a smartwatch displaying a message">
    <div class="watch">
      <div class="watch-top"><span>● Alex</span><span>10:09</span></div>
      <div class="msg"><b>Alex</b>Running a few minutes late. See you soon!</div>
      <div class="bubble">No problem! See you soon.</div>
      <div class="controls"><div class="ctrl">🎙</div><div class="ctrl">☺</div><div class="ctrl primary">➤</div></div>
    </div>
  </div>
</header>
<main class="wrap">
<nav aria-label="Page sections">
  <a href="#overview">Overview</a><a href="#research">Research</a><a href="#flow">User Flow</a><a href="#styleguide">Style Guide</a><a href="#screens">Flat Screens</a><a href="#prototype">Prototype</a><a href="#testing">Testing</a><a href="#deliverables">Deliverables</a>
</nav>

<section id="overview">
  <div class="kicker">The Challenge</div>
  <div class="grid">
    <div class="span-7">
      <h2>Design for quick, focused interactions.</h2>
      <p class="lead">Unlike a smartphone, a smartwatch is often used while someone is moving, exercising, commuting, or doing something else. Design a focused messaging experience that prioritizes essential actions, readable information, and efficient interactions.</p>
    </div>
    <div class="span-5 card soft">
      <h3>Client</h3><p>A fictional technology startup developing a messaging application for wearable devices.</p>
      <h3>Objective</h3><p>Help users read and respond to messages without needing to reach for their phone for every interaction.</p>
    </div>
  </div>
  <div class="grid" style="margin-top:18px">
    <div class="span-4 card"><div class="number">01</div><h3>User Flow</h3><p>Map the messaging journey, decisions, alternate paths, and error recovery in FigJam.</p></div>
    <div class="span-4 card"><div class="number">02</div><h3>UI/UX Style Guide</h3><p>Complete the existing course style-guide template before designing final screens.</p></div>
    <div class="span-4 card"><div class="number">03</div><h3>Prototype &amp; Test</h3><p>Build with Figma Make, test with five participants, revise, and test with five more.</p></div>
  </div>
</section>

<section id="research">
  <div class="kicker">01 / Research &amp; Analysis</div>
  <h2>Understand the user before designing.</h2>
  <p class="lead">Investigate existing smartwatch messaging experiences. Identify common usability problems and validate a meaningful user need before choosing a solution.</p>
  <div class="grid">
    <div class="span-6 card">
      <h3>Research tasks</h3>
      <ul><li>Review Apple Watch or Wear OS messaging patterns.</li><li>Ask users about when and why they message from a watch.</li><li>Identify friction in reading, replying, and navigating.</li><li>Write a problem statement and a “How might we…” question.</li></ul>
    </div>
    <div class="span-6 card soft">
      <h3>Example design question</h3>
      <p>How might we help smartwatch users reply to important messages with fewer steps and less visual attention?</p>
      <p class="muted">Use your own research to establish the actual problem. Do not present example findings as research results.</p>
    </div>
  </div>
  <figure class="figure">
    <img class="brief-img" src="images/smartwatch-brief-overview.png" alt="Visual overview of a smartwatch messenger app design brief, with smartwatch screens, user flow, style guide, prototype, and deliverables">
    <figcaption>Visual reference for the project structure. Create your own final screens and diagrams; do not submit the reference image as your design work.</figcaption>
  </figure>
</section>

<section id="flow">
  <div class="kicker">02 / Information Architecture &amp; User Flow</div>
  <h2>Plan the experience in FigJam.</h2>
  <p class="lead">Use the existing course FigJam User Flow Template. Duplicate it and map the primary messaging journey before you design the interface.</p>
  <div class="grid">
    <div class="span-6 card"><h3>Your flow should include</h3><ul><li>Starting point and user goal.</li><li>Screen sequence and user actions.</li><li>Decision points and alternative response methods.</li><li>Error and recovery paths.</li><li>A clear successful outcome.</li></ul></div>
    <div class="span-6 card soft"><h3>Example journey</h3><p>Open message → Read message → Decide whether to reply → Choose input method → Send message → Confirm success.</p><p class="muted">Alternative: cancel and return to conversations. Recovery: explain a failed voice recognition or send action and offer a next step.</p></div>
  </div>
  <figure class="figure">
    <div class="flow" role="img" aria-label="Example user flow from opening messages through reading, choosing a reply method, sending, and confirming">
      <div class="flow-step start">Open Messages</div><div class="arrow">↓</div>
      <div class="flow-step">Select Conversation</div><div class="arrow">↓</div>
      <div class="flow-step">Read Message</div><div class="arrow">↓</div>
      <div class="decision">Reply?</div><div class="arrow">↓</div>
      <div class="branch"><div class="flow-step">Voice Dictation</div><div class="flow-step">Quick Reply</div><div class="flow-step">Emoji</div></div>
      <div class="arrow">↓</div><div class="flow-step">Send Message</div><div class="arrow">↓</div>
      <div class="flow-step end">Confirmation</div>
      <div class="flow-step error">Error → Explain → Try Again</div>
    </div>
    <figcaption>Example flow graphic. Rebuild and adapt this in your course FigJam template, using the visual conventions demonstrated in class.</figcaption>
  </figure>
  <p><strong>Deliverable:</strong> A labeled FigJam user flow and a short explanation of how it addresses your chosen user problem.</p>
</section>

<section id="styleguide">
  <div class="kicker">03 / UI/UX Style Guide</div>
  <h2>Build a consistent visual system.</h2>
  <p class="lead">Use the existing Student UI/UX Style Guide template provided in class. Duplicate and complete that template—do not replace it with a different one.</p>
  <p><strong>Use the actual Student UI/UX Style Guide template created for this course.</strong> Open the template, duplicate it, and complete its existing sections rather than substituting a different format.</p>
  <p><a href="https://www.figma.com/design/pMDnezhhqour9AwJLK3G0Y" target="_blank" rel="noopener">Open the Student UI/UX Style Guide template in Figma →</a></p>
  <div class="grid">
    <div class="span-6">
      <figure class="figure">
        <img src="https://www.figma.com/api/mcp/asset/546230b4-5363-4f26-ab59-d245003903c4.png" alt="Actual Student UI/UX Style Guide template: Visual Research and Moodboard" loading="lazy">
        <figcaption><strong>Visual Research &amp; Moodboard.</strong> Establish the visual direction for your smartwatch messenger.</figcaption>
      </figure>
    </div>
    <div class="span-6">
      <figure class="figure">
        <img src="https://www.figma.com/api/mcp/asset/dc6c23d3-e208-4de1-80b0-81999bb35d97.png" alt="Actual Student UI/UX Style Guide template: Color and Contrast" loading="lazy">
        <figcaption><strong>Color &amp; Contrast.</strong> Define color roles and check legibility on a small screen.</figcaption>
      </figure>
    </div>
    <div class="span-6">
      <figure class="figure">
        <img src="https://www.figma.com/api/mcp/asset/109fd972-a72f-404c-900c-9e0458a899bc.png" alt="Actual Student UI/UX Style Guide template: Typography and Spacing" loading="lazy">
        <figcaption><strong>Typography &amp; Spacing.</strong> Establish a readable type hierarchy and consistent spacing rules.</figcaption>
      </figure>
    </div>
    <div class="span-6">
      <figure class="figure">
        <img src="https://www.figma.com/api/mcp/asset/b2b52fc0-fe1f-42b8-9df3-54546214301f.png" alt="Actual Student UI/UX Style Guide template: Reusable Components" loading="lazy">
        <figcaption><strong>Reusable Components.</strong> Document buttons, message bubbles, reply controls, and interface states.</figcaption>
      </figure>
    </div>
  </div>
  <div class="grid">
    <div class="span-6 card">
      <h3>Color &amp; Contrast</h3><p>Define backgrounds, text, primary actions, and status colors. Make sure the interface remains legible at watch size.</p>
      <div class="palette"><div class="swatch"><div class="dot" style="background:#087aff"></div>Primary</div><div class="swatch"><div class="dot" style="background:#6557e8"></div>Secondary</div><div class="swatch"><div class="dot" style="background:#27c76f"></div>Success</div><div class="swatch"><div class="dot" style="background:#ff9f1a"></div>Warning</div><div class="swatch"><div class="dot" style="background:#ff514b"></div>Error</div><div class="swatch"><div class="dot" style="background:#17191d"></div>Background</div></div>
    </div>
    <div class="span-6 card">
      <h3>Typography &amp; Spacing</h3><p>Set a hierarchy for names, message text, timestamps, labels, and controls. Check type at realistic device scale.</p><div class="type-sample">Aa</div><p><strong>Headline</strong> · Semibold<br><strong>Body</strong> · Regular<br><strong>Caption</strong> · Regular</p>
    </div>
    <div class="span-6 card">
      <h3>Components</h3><p>Define reusable buttons, conversation items, message bubbles, reply controls, and navigation.</p><div class="component">Primary Action</div><div class="component dark">Secondary Action</div><div class="component light">Quick Reply</div>
    </div>
    <div class="span-6 card soft">
      <h3>Accessibility</h3><ul><li>Readable text and sufficient contrast.</li><li>Clear labels and predictable navigation.</li><li>Controls easy to identify and activate.</li><li>Alternatives to tiny-keyboard typing.</li><li>Feedback for success and failure.</li></ul><p class="muted">A grayscale review can help evaluate hierarchy, but does not by itself establish accessibility compliance.</p>
    </div>
  </div>
  <p><strong>Course asset:</strong> Insert actual screenshots from your existing style-guide template for Visual Research &amp; Moodboard, Color &amp; Contrast, Typography &amp; Spacing, and Components. Keep the course template consistent with the one used in class.</p>
</section>

<section id="screens">
  <div class="kicker">04 / Flat Screens in Figma Design</div>
  <h2>Design every screen in the user journey.</h2>
  <p class="lead">Use your user flow and style guide to create a coherent screen board. Name your frames clearly and ensure each screen supports the task mapped in FigJam.</p>
  <div class="screen-board">
    <div class="screen-card"><div class="mini-watch"><div class="mini-head"><b>Messages</b><span>10:09</span></div><div class="mini-row"><b>Alex · Now</b>Running late...</div><div class="mini-row"><b>Jordan · 5m</b>See you there!</div><div class="mini-row"><b>Taylor · 12m</b>👍</div></div><strong>1. Conversation List</strong></div>
    <div class="screen-card"><div class="mini-watch"><div class="mini-head"><span>‹ Alex</span><span>10:09</span></div><div class="msg"><b>Alex</b>Running a few minutes late. See you soon!</div><div class="mini-blue">No problem! See you soon.</div><div class="controls"><div class="ctrl">🎙</div><div class="ctrl">☺</div><div class="ctrl primary">➤</div></div></div><strong>2. Message View</strong></div>
    <div class="screen-card"><div class="mini-watch"><div class="mini-head"><b>Reply</b><span>10:09</span></div><div class="mini-btn">🎙 Dictate</div><div class="mini-btn">☷ Quick Reply</div><div class="mini-btn">☺ Emoji</div><div class="mini-btn">× Cancel</div></div><strong>3. Reply Options</strong></div>
    <div class="screen-card"><div class="mini-watch" style="justify-content:center;align-items:center"><div style="font-size:32px;color:#087aff">◉</div><b>Listening…</b><p style="font-size:9px;text-align:center">Tap to stop</p><div class="mini-btn" style="width:100%">Cancel</div></div><strong>4. Voice Dictation</strong></div>
    <div class="screen-card"><div class="mini-watch" style="justify-content:center;align-items:center"><div class="mini-check">✓</div><b>Message Sent</b><div class="mini-btn" style="width:100%">Done</div></div><strong>5. Confirmation</strong></div>
    <div class="screen-card"><div class="mini-watch" style="justify-content:center;align-items:center"><div style="font-size:32px;color:#ff514b">!</div><b>Couldn't Send</b><p style="font-size:9px;text-align:center">Check connection and try again.</p><div class="mini-btn" style="width:100%">Try Again</div></div><strong>6. Error / Recovery</strong></div>
  </div>
  <p><strong>Deliverable:</strong> Flat screen designs in Figma Design that follow the user flow and apply the existing style guide.</p>
</section>

<section id="prototype">
  <div class="kicker">05 / Interactive Prototype</div>
  <h2>Bring the experience to life with Figma Make.</h2>
  <p class="lead">After completing the user flow, style guide, and flat screens, use Figma Make to build an interactive prototype that demonstrates the primary messaging task.</p>
  <div class="grid">
    <div class="span-4 card"><div class="number">01</div><h3>Prepare</h3><p>Finish your FigJam user flow, style guide, and Figma Design screens.</p></div>
    <div class="span-4 card"><div class="number">02</div><h3>Prompt</h3><p>Describe the user, task, screen sequence, visual system, and expected interactions.</p></div>
    <div class="span-4 card"><div class="number">03</div><h3>Refine</h3><p>Fix inconsistent visuals, confusing navigation, and broken interactions. Preview the full journey.</p></div>
  </div>
  <div class="prototype" style="margin-top:22px"><div><strong>Figma Make Prototype</strong><span>Build a working demonstration of the messaging journey.</span></div><a href="https://www.figma.com/make/" target="_blank" rel="noopener">Open Figma Make ↗</a></div>
  <p class="muted">Replace this link or add your own prototype link when your project is ready. The prototype should include working navigation, meaningful responses to actions, and success and recovery states.</p>
</section>

<section id="testing">
  <div class="kicker">06 / Usability Testing</div>
  <h2>Test, revise, and test again.</h2>
  <p class="lead">Run two rounds of usability testing with five participants per round. Give each person a realistic task, observe their actions, and record what you learn.</p>
  <div class="grid">
    <div class="span-6 card"><div class="number">Round 1</div><h3>Test the initial prototype</h3><ul><li>Ask participants to read and reply to a message.</li><li>Observe hesitation, errors, and confusion.</li><li>Record comments and a consistent usability rating.</li></ul></div>
    <div class="span-6 card"><div class="number">Round 2</div><h3>Test the revised prototype</h3><ul><li>Prioritize and address the first round's issues.</li><li>Test with five participants in a second group.</li><li>Compare results and identify remaining problems.</li></ul></div>
  </div>
  <div class="card soft" style="margin-top:18px"><h3>Report your findings</h3><p>Document the tasks, observations, problems, changes made, ratings, and whether the revised design improved the experience. Report only testing you actually conducted; do not invent results.</p></div>
</section>

<section id="deliverables">
  <div class="kicker">Final Submission</div>
  <h2>Deliverables checklist</h2>
  <p class="lead">Organize your work so another person can understand the research, follow the design process, and test the prototype.</p>
  <div class="grid">
    <div class="span-6 card"><h3>Research &amp; Planning</h3><ul class="checklist"><li>Research notes and user problem</li><li>Primary user persona</li><li>FigJam user flow with decisions and recovery</li><li>Completed existing UI/UX Style Guide template</li><li>Design rationale</li></ul></div>
    <div class="span-6 card"><h3>Design &amp; Validation</h3><ul class="checklist"><li>Flat screens in Figma Design</li><li>Interactive Figma Make prototype</li><li>First test with five participants</li><li>Revised screens and prototype</li><li>Second test with five participants</li><li>Summary of findings and iterations</li><li>Google Doc with ChatGPT prompts and useful results</li><li>Shareable project links with correct permissions</li></ul></div>
  </div>
</section>

<section id="success">
  <div class="kicker">Evaluation Criteria</div>
  <h2>What makes a successful project?</h2>
  <div class="grid">
    <div class="span-4 card"><h3>Usability</h3><p>Users can complete the messaging task efficiently and understand what to do next.</p></div>
    <div class="span-4 card"><h3>Visual Design</h3><p>Color, typography, spacing, and components create a cohesive interface.</p></div>
    <div class="span-4 card"><h3>Interaction &amp; Accessibility</h3><p>The prototype responds appropriately and the design addresses real access needs.</p></div>
  </div>
  <div class="figure" style="padding:28px"><h3>Remember the process</h3><p class="lead">Research → User Flow → UI/UX Style Guide → Flat Screens → Interactive Prototype → User Testing → Iteration.</p><p><strong>Design for the smartwatch—not a miniature smartphone.</strong> Your goal is a focused, accessible messaging experience that helps people communicate with as little friction as possible.</p></div>
</section>
<footer><div class="wrap"><a href="#top">Back to top ↑</a><p>Smartwatch Messenger App · UX/UI Design Brief. Replace template placeholders with actual course assets and verified tutorial links before publishing.</p></div></footer>
</main>
