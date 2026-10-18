---
title: "7. CSS Foundations"
date: "2023-01-09 18:00:00"
layout: post
permalink: "/css-foundations/"
categories: ["dmet-155-introduction-to-web-design", "odin-project"]
tags: []
wordpress_id: "58426"
---

<!-- wp:paragraph -->
<p>In the previous lesson, you learned how to write the HTML that determines how a web page is structured. The next step is to make that structure look good with some&nbsp;<em>style</em>, which is exactly what CSS is for. In this lesson, we’re going to focus on what we believe are some foundational CSS concepts, things that everyone should know from the beginning — whether they are just starting out or simply need a refresher.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#lesson-overview">Lesson Overview</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains a general overview of topics that you will learn in this lesson.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>Add styles to HTML with CSS.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Understand how to use the class and ID attributes.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Add styles to specific elements using the correct selectors.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Understand what the cascade does.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#basic-syntax">Basic Syntax</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>At the most basic level, CSS is made up of various rules. These rules are made up of a selector (more on this in a bit) and a semi-colon separated list of declarations, with each of those declarations being made up of a property:value pair.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://cdn.statically.io/gh/TheOdinProject/curriculum/05ce472eabf8e04eeb2cc9139e66db884074fd7d/foundations/html_css/css-foundations/imgs/00.jpg" target="_blank" rel="noreferrer noopener"><img src="http://nuggetofjoy.com/wp-content/uploads/00-5.jpg" alt="Basic CSS syntax"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading {"level":4} -->
<h4 id="note">Note</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A&nbsp;<code>&lt;div&gt;</code>&nbsp;is one of the basic HTML elements. It is simply an empty container. In general, it is best to use other tags such as&nbsp;<code>&lt;h1&gt;</code>&nbsp;or&nbsp;<code>&lt;p&gt;</code>&nbsp;for content in your projects, but as we learn more about CSS you’ll find that there are many cases where the thing you need is just a container for other elements. Many of our exercises use plain&nbsp;<code>&lt;div&gt;</code>s for simplicity. Later lessons will go into much more depth about when it is appropriate to use the various HTML elements.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#selectors">Selectors</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Selectors simply refer to the HTML elements to which CSS rules apply; they’re what is actually being “selected” for each rule. The following subsections don’t cover every selector available, but they’re by far the most common and the ones you should get comfortable using first.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="universal-selector">Universal Selector</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The universal selector will select elements of any type, hence the name “universal”, and the syntax for it is a simple asterisk. In the example below, every element would have the&nbsp;<code>color: purple;</code>&nbsp;style applied to it.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code class="">* {
  color: purple;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":4} -->
<h4 id="type-selectors">Type Selectors</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A type selector (or element selector) will select all elements of the given element type, and the syntax is just the name of the element:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"style":{"color":{"text":"#f5f5f5"}},"lineNumbers":true} -->
<pre class="wp-block-code has-text-color" style="color:#f5f5f5"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;div&gt;Hello, World!&lt;/div&gt;
&lt;div&gt;Hello again!&lt;/div&gt;
&lt;p&gt;Hi...&lt;/p&gt;
&lt;div&gt;Okay, bye.&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* styles.css */

div {
  color: white;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here, all three&nbsp;<code>&lt;div&gt;</code>&nbsp;elements would be selected, while the&nbsp;<code>&lt;p&gt;</code>&nbsp;element wouldn’t be.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="class-selectors">Class Selectors</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element. Here’s how you add a class to an HTML tag and select it in CSS:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="markup" class="language-markup">&lt;!-- index.html --&gt;

&lt;div class="alert-text"&gt;
  Please agree to our terms of service.
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* styles.css */

.alert-text {
  color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Note the syntax for class selectors: a period immediately followed by the case-sensitive value of the class attribute. Classes aren’t required to be unique, so you can use the same class on as many elements as you want.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as&nbsp;<code>class="alert-text severe-alert"</code>. Since whitespace is used to separate class names like this, you should never use spaces for multi-worded names and should use a hyphen instead.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="id-selectors">ID Selectors</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>ID selectors are similar to class selectors. They select an element with the given ID, which is another attribute you place on an HTML element:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;div id="title"&gt;My Awesome 90's Page&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* styles.css */

#title {
  background-color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Instead of a period, we use a hashtag immediately followed by the case-sensitive value of the ID attribute. A common pitfall is people overusing the ID attribute when they don’t necessarily need to, and when classes will suffice. While there are cases where using an ID makes sense or is needed, such as taking advantage of specificity or having links redirect to a section on the current page, you should use IDs&nbsp;<strong>sparingly</strong>&nbsp;(if at all).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The major difference between classes and IDs is that an element can only have&nbsp;<strong>one</strong>&nbsp;ID. An ID cannot be repeated on a single page, and the ID attribute should not contain any whitespace at all.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="grouping-selector">Grouping Selector</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>What if we have two groups of elements that share some of their style declarations?</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Both our&nbsp;<code>.read</code>&nbsp;and&nbsp;<code>.unread</code>&nbsp;selectors share the&nbsp;<code>color: white;</code>&nbsp;and&nbsp;<code>background-color: black;</code>&nbsp;declarations, but otherwise have several of their own unique declarations. To cut down on the repetition, we can group these two selectors together as a comma-separated list:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Both of the examples above (with and without grouping) will have the same result, but the second example reduces the repetition of declarations and makes it easier to edit either the&nbsp;<code>color</code>&nbsp;or&nbsp;<code>background-color</code>&nbsp;for both classes at once.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="chaining-selectors">Chaining Selectors</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Another way to use selectors is to chain them as a list without any separation. Let’s say we had the following HTML:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;div&gt;
  &lt;div class="subsection header"&gt;Latest Posts&lt;/div&gt;
  &lt;p class="subsection preview"&gt;This is where a preview for a post might go.&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>We have two elements with the&nbsp;<code>subsection</code>&nbsp;class that have some sort of unique styles, but what if we only want to apply a separate rule to the element that also has&nbsp;<code>header</code>&nbsp;as a second class? Well, we could chain both the class selectors together in our CSS like so:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.subsection.header {
  color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>What&nbsp;<code>.subsection.header</code>&nbsp;does is it selects any element that has both the&nbsp;<code>subsection</code>&nbsp;<em>and</em>&nbsp;<code>header</code>&nbsp;classes. Notice how there isn’t any space between the&nbsp;<code>.subsection</code>&nbsp;and&nbsp;<code>.header</code>&nbsp;class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one&nbsp;<a href="https://www.theodinproject.com/lessons/foundations-css-foundations#type-selectors">type selector</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This can also be used to chain a class and an ID, as shown below:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;div&gt;
  &lt;div class="subsection header"&gt;Latest Posts&lt;/div&gt;
  &lt;p class="subsection" id="preview"&gt;This is where a preview for a post might go.&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You can take the two elements above and combine them with the following:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In general, you can’t chain more than one type selector since an element can’t be two different types at once. For example, chaining two type selectors like&nbsp;<code>div</code>&nbsp;and&nbsp;<code>p</code>&nbsp;would give us the selector&nbsp;<code>divp</code>, which wouldn’t work since the selector would try to find a literal&nbsp;<code>&lt;divp&gt;</code>&nbsp;element, which doesn’t exist.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="descendant-combinator">Descendant Combinator</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors. There are four types of combinators in total, but for right now we’re going to only show you the&nbsp;<strong>descendant combinator</strong>, which is represented in CSS by a single space between selectors.&nbsp;A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc) that matches the previous selector.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So something like&nbsp;<code>.ancestor .child</code>&nbsp;would select an element with the class&nbsp;<code>child</code>&nbsp;if it has an ancestor with the class&nbsp;<code>ancestor</code>. Another way to think of it is&nbsp;<code>child</code>&nbsp;will only be selected if it is nested inside of&nbsp;<code>ancestor</code>, no matter how deep. Take a quick look at the example below and see if you can tell which elements would be selected based on the CSS rule provided:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;div class="ancestor"&gt; &lt;!-- A --&gt;
  &lt;div class="contents"&gt; &lt;!-- B --&gt;
    &lt;div class="contents"&gt; &lt;!-- C --&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="contents"&gt;&lt;/div&gt; &lt;!-- D --&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="css" class="language-css">/* styles.css */

.ancestor .contents {
  /* some declarations */
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In the above example, the first two elements with the&nbsp;<code>contents</code>&nbsp;class (B and C) would be selected, but that last element (D) won’t be. Was your guess correct?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There’s really no limit to how many combinators you can add to a rule, so&nbsp;<code>.one .two .three .four</code>&nbsp;would be totally valid. This would just select an element that has a class of&nbsp;<code>four</code>&nbsp;if it has an ancestor with a class of&nbsp;<code>three</code>, and if that ancestor has its own ancestor with a class of&nbsp;<code>two</code>, and so on. You generally want to avoid trying to select elements that need this level of nesting, though, as it can get pretty confusing and long, and it can cause issues when it comes to specificity.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#properties-to-get-started-with">Properties to Get Started With</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There are some CSS properties that you’re going to be using all the time, or at the very least more often than not. We’re going to introduce you to several of these properties, though this is by no means a complete list. Learning the following properties will simply be enough to help get you started.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="color-and-background-color">Color and Background-Color</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The&nbsp;<code>color</code>&nbsp;property sets an element’s text color, while&nbsp;<code>background-color</code>&nbsp;sets, well, the background color of an element. I guess we’re done here?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Almost. Both of these properties can accept one of several kinds of values. A common one is a keyword, such as an actual color name like&nbsp;<code>red</code>&nbsp;or the&nbsp;<code>transparent</code>&nbsp;keyword. They also accept HEX, RGB, and HSL values, which you may be familiar with if you’ve ever used a photoshop program or a site where you could customize your profile colors.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">p {
  /* hex example: */
  color: #1100ff;
  /* rgb example: */
  color: rgb(100, 0, 127);
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Take a quick look at&nbsp;<a href="https://www.w3schools.com/cssref/css_colors_legal.asp" target="_blank" rel="noreferrer noopener">CSS Legal Color Values</a>&nbsp;to see how you can adjust the opacity of these colors by adding an alpha value.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="typography-basics-and-text-align">Typography Basics and Text-Align</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><code>font-family</code>&nbsp;can be a single value or a comma-separated list of values that determine what font an element uses. Each font will fall into one of two categories, either a “font family name” like&nbsp;<code>"Times New Roman"</code>&nbsp;(we use quotes due to the whitespace between words) or a “generic family name” like&nbsp;<code>sans-serif</code>&nbsp;(generic family names never use quotes).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If a browser cannot find or does not support the first font in a list, it will use the next one, then the next one and so on until it finds a supported and valid font. This is why it’s best practice to include a list of values for this property, starting with the font you want to be used most and ending with a generic font family as a fallback, e.g.&nbsp;<code>font-family: "Times New Roman", sans-serif;</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>font-size</code>&nbsp;will, as the property name suggests, set the size of the font. When giving a value to this property, the value should not contain any whitespace, e.g.&nbsp;<code>font-size: 22px</code>&nbsp;has no space between “22” and “px”.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>font-weight</code>&nbsp;affects the boldness of text, assuming the font supports the specified weight. This value can be a keyword, e.g.&nbsp;<code>font-weight: bold</code>, or a number between 1 and 1000, e.g.&nbsp;<code>font-weight: 700</code>&nbsp;(the equivalent of&nbsp;<code>bold</code>). Usually, the numeric values will be in increments of 100 up to 900, though this will depend on the font.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>text-align</code>&nbsp;will align text horizontally within an element, and you can use the common keywords you may have come across in word processors as the value for this property, e.g.&nbsp;<code>text-align: center</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="image-height-and-width">Image Height and Width</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Images aren’t the only elements that we can adjust the height and width on, but we want to focus on them specifically in this case.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By default, an&nbsp;<code>&lt;img&gt;</code>&nbsp;element’s&nbsp;<code>height</code>&nbsp;and&nbsp;<code>width</code>&nbsp;values will be the same as the actual image file’s height and width. If you wanted to adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the&nbsp;<code>height</code>&nbsp;property and adjust the&nbsp;<code>width</code>&nbsp;value:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">img {
  height: auto;
  width: 500px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For example, if an image’s original size was 500px height and 1000px width, using the above CSS would result in a height of 250px.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s best to include both of these properties for&nbsp;<code>&lt;img&gt;</code>&nbsp;elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a&nbsp;<code>height</code>&nbsp;and&nbsp;<code>width</code>&nbsp;prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#the-cascade-of-css">The Cascade of CSS</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sometimes we may have rules that conflict with one another, and we end up with some unexpected results. “But I wanted&nbsp;<em>these</em>&nbsp;paragraphs to be blue, why are they red like these other paragraphs?!” As frustrating as this can be, it’s important to understand that CSS doesn’t just&nbsp;<em>do</em>&nbsp;things against our wishes. CSS only does what we tell it to do. One exception to this is the default styles that are provided by a browser. These default styles vary from browser to browser, and they are why some elements create a large “gap” between themselves and other elements, or why buttons look the way they do, despite us not writing any CSS rules to style them that way.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So if you end up with some unexpected behavior like this it’s either because of these default styles or due to not understanding how a property works or not understanding this little thing called the cascade.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The cascade is what determines which rules actually get applied to our HTML. There are different factors that the cascade uses to determine this, three of which we’ll go over to hopefully help you avoid (as many of) those frustrating “I hate CSS” moments.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="specificity">Specificity</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A CSS declaration that is more specific will take precedence over less specific ones. Inline styles, which we will go over more in the Adding CSS to HTML section towards the end of the lesson, have the highest specificity compared to selectors, while each type of selector has its own specificity level that contributes to how specific a declaration is. Other selectors contribute to specificity, but we’re focusing only on the ones mentioned in this lesson:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>ID selectors (most specific selector)</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Class selectors</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Type selectors</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it, sort of like a tie-breaker. An ID selector will always beat any number of class selectors,&nbsp;a class selector will always beat any number of type selectors, and a type selector will always beat any number of anything less specific than it. When no declaration has a selector with a higher specificity, a larger amount of a single selector will beat a smaller amount of that same selector.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Let’s take a look at a few quick examples to visualize how specificity works. Consider the following HTML and CSS code:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;div class="main"&gt;
  &lt;div class="list subsection"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the&nbsp;<code>color: red;</code>&nbsp;declaration would take precedence.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, let’s change things a little bit:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;div class="main"&gt;
  &lt;div class="list" id="subsection"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class. In this case, the&nbsp;<code>color: blue;</code>&nbsp;declaration would take precedence.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
#subsection .main .list {
  color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this final example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>While the&nbsp;<code>color: red</code>&nbsp;declaration would take precedence, the&nbsp;<code>background-color: yellow</code>&nbsp;declaration would still be applied since there’s no conflicting declaration for it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Note: When comparing selectors, you may come across special symbols for the universal selector (<code>*</code>) as well as combinators (<code>+</code>,&nbsp;<code>~</code>,&nbsp;<code>&gt;</code>, and an empty space). These symbols do not add any specificity in and of themselves.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a chaining selector (no space) and rule 2 uses a descendant combinator (the empty space). But both rules have two classes and the combinator symbol itself does not add to the specificity.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class &gt; .second-class {
  font-size: 24px;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This example shows the same thing. Even though rule 2 is using a child combinator (<code>&gt;</code>), this does not change the specificity value. Both rules still have two classes so they have the same specificity values.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* rule 1 */
* {
  color: black;
}

/* rule 2 */
h1 {
  color: orange;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>In this example, rule 2 would have higher specificity and the&nbsp;<code>orange</code>&nbsp;value would take precedence for this element. Rule 2 uses a type selector, which has the lowest specificity value. But rule 1 uses the universal selector (<code>*</code>) which has no specificity value.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="inheritance">Inheritance</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (<code>color</code>,&nbsp;<code>font-size</code>,&nbsp;<code>font-family</code>, etc.) are usually inherited, while most other properties aren’t.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The exception to this is when directly targeting an element, as this always beats inheritance:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;div id="parent"&gt;
  &lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Despite the&nbsp;<code>parent</code>&nbsp;element having a higher specificity with an ID, the&nbsp;<code>child</code>&nbsp;element would have the&nbsp;<code>color: blue</code>&nbsp;style applied since that declaration directly targets it, while&nbsp;<code>color: red</code>&nbsp;from the parent is only inherited.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="rule-order">Rule Order</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Really simply, actually. Whichever rule was the&nbsp;<em>last</em>&nbsp;defined is the winner.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>For an element that has both the&nbsp;<code>alert</code>&nbsp;and&nbsp;<code>warning</code>&nbsp;classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the&nbsp;<code>.warning</code>&nbsp;rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#adding-css-to-html">Adding CSS to HTML</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Okay, we went over quite a bit so far. The only thing left for now is to go over&nbsp;<em>how</em>&nbsp;to add all this CSS to our HTML. There are three methods to do so.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="external-css">External CSS</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>External CSS is the most common method you will come across, and it involves creating a separate file for the CSS and linking it inside of an HTML’s opening and closing&nbsp;<code>&lt;head&gt;</code>&nbsp;tags with a self-closing&nbsp;<code>&lt;link&gt;</code>&nbsp;element:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;!-- index.html --&gt;

&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="css" class="language-css line-numbers">/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>First, we add a self-closing&nbsp;<code>&lt;link&gt;</code>&nbsp;element inside of the opening and closing&nbsp;<code>&lt;head&gt;</code>&nbsp;tags of the HTML file. The&nbsp;<code>href</code>&nbsp;attribute is the location of the CSS file, either an absolute URL or, what you’ll be utilizing, a URL relative to the location of the HTML file. In our example above, we are assuming both files are located in the same directory. The&nbsp;<code>rel</code>&nbsp;attribute is required, and it specifies the relationship between the HTML file and the linked file.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Then inside of the newly created&nbsp;<code>styles.css</code>&nbsp;file, we have the selector (the&nbsp;<code>div</code>&nbsp;and&nbsp;<code>p</code>), followed by a pair of opening and closing curly braces, which create a “declaration block”. Finally, we place any declarations inside of the declaration block.&nbsp;<code>color: white;</code>&nbsp;is one declaration, with&nbsp;<code>color</code>&nbsp;being the property and&nbsp;<code>white</code>&nbsp;being the value, and&nbsp;<code>background-color: black;</code>&nbsp;is another declaration.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A note on file names:&nbsp;<code>styles.css</code>&nbsp;is just what we went with as the file name here. You can name the file whatever you want as long as the file type is&nbsp;<code>.css</code>, though “style” or “styles” is most commonly used.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A couple of the pros to this method are:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>It keeps our HTML and CSS separated, which results in the HTML file being smaller and making things look cleaner.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>We only need to edit the CSS in&nbsp;<em>one</em>&nbsp;place, which is especially handy for websites with many pages that all share similar styles.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading {"level":4} -->
<h4 id="internal-css">Internal CSS</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing&nbsp;<code>&lt;style&gt;</code>&nbsp;tags, which are then placed inside of the opening and closing&nbsp;<code>&lt;head&gt;</code>&nbsp;tags of your HTML file. Since the styles are being placed directly inside of the&nbsp;<code>&lt;head&gt;</code>&nbsp;tags, we no longer need a&nbsp;<code>&lt;link&gt;</code>&nbsp;element that the external method requires.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Besides these differences, the syntax is exactly the same as the external method (selector, curly braces, declarations):</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;head&gt;
  &lt;style&gt;
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;...&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This method can be useful for adding unique styles to a&nbsp;<em>single page</em>&nbsp;of a website, but it doesn’t keep things separate like the external method, and depending on how many rules and declarations there are it can cause the HTML file to get pretty big.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4 id="inline-css">Inline CSS</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Inline CSS makes it possible to add styles directly to HTML elements, though this method isn’t as recommended:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers">&lt;body&gt;
  &lt;div style="color: white; background-color: black;"&gt;...&lt;/div&gt;
&lt;/body&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The first thing to note is that we don’t actually use any selectors here, since the styles are being added directly to the opening&nbsp;<code>&lt;div&gt;</code>&nbsp;tag itself. Next, we have the&nbsp;<code>style=</code>&nbsp;attribute, with its value within the pair of quotation marks being the declarations.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you need to add a&nbsp;<em>unique</em>&nbsp;style for a&nbsp;<em>single</em>&nbsp;element, this method can work just fine. Generally, though, this isn’t exactly a recommended way for adding CSS to HTML for a few reasons:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>It can quickly become pretty messy once you start adding a&nbsp;<em>lot</em>&nbsp;of declarations to a single element, causing your HTML file to become unnecessarily bloated.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Any inline CSS will override the other two methods, which can cause unexpected results. (While we won’t dive into it here, this can actually be taken advantage of).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#assignment">Assignment</a></h3>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol><!-- wp:list-item -->
<li>Go to our&nbsp;<a href="https://github.com/TheOdinProject/css-exercises" target="_blank" rel="noreferrer noopener">CSS exercises repository</a>, read the README, and only do the exercises in the&nbsp;<code>foundations</code>&nbsp;directory in the order they’re listed, starting with&nbsp;<code>01-css-methods</code>&nbsp;and ending with&nbsp;<code>06-cascade-fix</code>.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Remember the Recipe page you created as practice from the previous lesson? Well, it’s rather&nbsp;<em>plain</em>&nbsp;looking, isn’t it? Let’s fix that by adding some CSS to it!</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li>How you actually style it is completely open, but you should use the external CSS method (for this practice and moving forward). You should also try to use several of the properties mentioned in the section above (color, background color, typography properties, etc). Take some time to play around with the various properties to get a feel for what they do. For now, don’t worry at all about making it look&nbsp;<em>good</em>. This is just to practice and get used to writing CSS, not to make something to show off on your resume, so feel free to go a little crazy for now.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>We haven’t covered how to use a custom font for the&nbsp;<code>font-family</code>&nbsp;property yet, so for now take a look at&nbsp;<a href="https://www.w3schools.com/Css/css_font.asp" target="_blank" rel="noreferrer noopener">CSS Fonts</a>&nbsp;for a list of generic font families to use, and&nbsp;<a href="https://www.w3schools.com/cssref/css_websafe_fonts.asp" target="_blank" rel="noreferrer noopener">CSS Web Safe Fonts</a>&nbsp;for a list of fonts that are web safe. Web safe means that these are fonts that are installed on basically every computer or device (but be sure to still include a generic font family as a fallback).</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#knowledge-check">Knowledge Check</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#external-css">What are the main differences between external, internal, and inline CSS?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#class-selectors">What is the syntax for class and ID selectors?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#grouping-selector">How would you apply a single rule to two different selectors?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#chaining-selectors">Given an element that has an id of&nbsp;<code>title</code>&nbsp;and a class of&nbsp;<code>primary</code>, how would you use both attributes for a single rule?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#descendant-combinator-description">What does the descendant combinator do?</a></li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#high-specificity-class-type">Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?</a></li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3><a href="https://www.theodinproject.com/lessons/foundations-css-foundations#additional-resources">Additional Resources</a></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This section contains helpful links to related content. It isn’t required, so consider it supplemental.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><!-- wp:list-item -->
<li><a href="https://wattenberger.com/blog/css-cascade" target="_blank" rel="noreferrer noopener">The CSS Cascade</a>&nbsp;is a great, interactive read that goes a little more in detail about other factors that affect what CSS rules actually end up being applied.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service" target="_blank" rel="noreferrer noopener">Changing the Font Family</a>&nbsp;describes a few different approaches to using custom fonts.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://www.w3schools.com/css/css_specificity.asp" target="_blank" rel="noreferrer noopener">CSS Specificity</a>&nbsp;from W3Schools goes over how you can calculate the specificity of rules. This page mentions some selectors that we will go over in a later lesson, so don’t worry about what they are or how to use them right now.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference" target="_blank" rel="noreferrer noopener">Mozilla CSS Properties Reference</a>&nbsp;can be used to learn if a particular CSS property is inherited or not; simply look for the&nbsp;<strong>Inherited</strong>&nbsp;field inside the&nbsp;<strong>Formal Definition</strong>&nbsp;section.&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition" target="_blank" rel="noreferrer noopener">Here’s an example</a>&nbsp;for the CSS&nbsp;<code>color</code>&nbsp;property.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" target="_blank" rel="noreferrer noopener">Mozilla CSS values and units</a>&nbsp;can be used to learn the various types of values possible in absolute or relative terms.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
