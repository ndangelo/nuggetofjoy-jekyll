---
title: "JavaScript Beginner Tutorial"
date: "2024-03-04 14:14:27"
layout: post
permalink: "/javascript-beginner-tutorial/"
categories: ["projects"]
tags: []
wordpress_id: "65201"
---

<!-- wp:paragraph -->
<p>As with the&nbsp;<a href="https://www.htmldog.com/guides/html/beginner/">HTML Beginner Tutorial</a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/guides/css/beginner/">CSS Beginner Tutorial</a>, the&nbsp;<strong>JavaScript Beginner Tutorial</strong>&nbsp;assumes that you know zip all about JavaScript. The purpose of this guide is to teach the bare essentials — just enough to get started. The&nbsp;<a href="https://www.htmldog.com/guides/javascript/intermediate/">JavaScript Intermediate Tutorial</a>&nbsp;and&nbsp;<a href="https://www.htmldog.com/guides/javascript/advanced/">JavaScript Advanced Tutorial</a>&nbsp;go into more depth.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This tutorial is an introduction to programming in general, through the medium of JavaScript. We’ll get into interacting with web pages in the&nbsp;<a href="https://www.htmldog.com/guides/javascript/intermediate/">Intermediate section</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As thrilling as it is to jump in at the deep end, these waters contain rabid sharks AND angry piranhas. That’s right; salt water fish AND fresh water fish all in one swimming pool.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>For your safety, <strong>you should be as comfortable as a cushion with HTML and CSS before proceeding</strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:nextpage -->
<!--nextpage-->
<!-- /wp:nextpage -->

<!-- wp:heading {"level":1,"backgroundColor":"pale-pink"} -->
<h1 class="wp-block-heading has-pale-pink-background-color has-background">Making Stuff Happen</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>There’s a few ways to try out JavaScript, and when learning it’s best to try them out to see what works for you. But first, how does JavaScript relate to HTML and CSS?</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">HTML, CSS and JavaScript</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mostly, JavaScript runs in your web browser alongside HTML and CSS, and can be added to any web page using a&nbsp;<a href="https://www.htmldog.com/references/html/tags/script/"><code>script</code></a>&nbsp;tag. The&nbsp;<a href="https://www.htmldog.com/references/html/tags/script/"><code>script</code></a>&nbsp;element can either contain JavaScript directly (<strong>internal</strong>) or link to an external resource via a&nbsp;<code>src</code>&nbsp;attribute (<strong>external</strong>).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A browser then runs JavaScript line-by-line, starting at the top of the file or&nbsp;<a href="https://www.htmldog.com/references/html/tags/script/"><code>script</code></a>&nbsp;element and finishing at the bottom (unless you tell it to go elsewhere).</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Internal</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can just put the JavaScript inside a&nbsp;<a href="https://www.htmldog.com/references/html/tags/script/"><code>script</code></a>&nbsp;element:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="markup" class="language-markup">
&lt;script&gt;
    alert("Hello, world.");
&lt;/script&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">External</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>An external JavaScript resource is a&nbsp;<strong>text file</strong>&nbsp;with a&nbsp;<strong>.js</strong>&nbsp;extension,&nbsp;<a href="https://www.htmldog.com/guides/css/beginner/applyingcss/">just like an external CSS resource with a&nbsp;<strong>.css</strong>&nbsp;extension</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>To add a JavaScript file to your page, you just need to use a script tag with a src attribute pointing to the file. So, if your file was called script.js and sat in the same directory as your HTML file, your&nbsp;<a href="https://www.htmldog.com/references/html/tags/script/"><code>script</code></a>&nbsp;element would look like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="markup" class="language-markup">
&lt;script src="script.js"&gt;&lt;/script&gt;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You might also come across another way on your view-source travels: inline. This involves event attributes inside HTML tags that look something like <code>&lt;a href="somewhere.html" onclick="alert('Noooooo!');">Click me&lt;/a></code>. Just move along and pretend you haven’t witnessed this aberration. We, really, really want to separate our technologies so it’s preferable to avoid this approach.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Console</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The last way is great for getting instant feedback, and it’s recommended if you want to try a line out quickly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In a modern browser you’ll find some developer tools - often you can right click on a page, then click “inspect element” to bring them up. Find the console and type JavaScript, hit enter and have it run immediately.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Search the net if you can’t find your dev tools or console - they’re changing in browsers all the time.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Let’s go!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The best way to get started is the internal method. You can modify the contents of the <a href="https://www.htmldog.com/references/html/tags/script/"><code>script</code></a> element and refresh the page just like you’re used to - quick and easy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now it’s time to learn some JavaScript. Good luck!</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"pale-pink"} -->
<h1 class="wp-block-heading has-pale-pink-background-color has-background">Variables and Data</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Storing data so we can use it later is one of the most important things when writing code. Fortunately, JavaScript can do this! If it couldn’t, it’d be pretty darn useless.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So let’s ask the user (that’s you) for their surname (check your driving license, or ask a friend).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By the way, this assumes you’ve jumped into a browser and are typing into your console.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var surname = prompt('Greetings friend, may I enquire as to your surname?');
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>A little box will pop-up, asking (very courteously if I may say) for your surname. Type your surname in and hit ‘OK’.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The surname you entered is now saved, and it can be referred to as <var>surname</var>. You can return what you entered by typing <var>surname</var> into the console. You should see your surname appearing back to you underneath! Exciting!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You’ve created a&nbsp;<em>variable</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Variables</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Think, if you will, of a variable as a shelf with a name so it’s easy to get back to. You’ve named a shelf&nbsp;<var>surname</var>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can name a variable anything you like, but it’s best to name it in a way that tells what you’ve stored there. For example,&nbsp;<var>surname</var>&nbsp;is better than&nbsp;<var>mything</var>&nbsp;or&nbsp;<var>s</var>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When you type a variable name into the console, you are asking the browser, which looks after the shelves, to find the shelf and give what’s on it to you. This is also known as the variable’s value. The value can be almost anything - in a surname, you’ve stored some letters, known as a string. You can also store numbers and a myriad of other kinds of data.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>So, a variable has a&nbsp;<em>name</em>&nbsp;and a&nbsp;<em>value</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>They are how we store data, and you’ll be using them often.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There are two parts to creating a variable: declaration and initialization. Once created, you can <em>assign</em> (or set) its value.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Declaration</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Declaration is&nbsp;<em>declaring</em>&nbsp;a variable to&nbsp;<em>exist</em>. To return to the shelf metaphor, it’s like picking an empty shelf in a massive warehouse and putting a name on it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>As above, to declare a variable, use the&nbsp;<code>var</code>&nbsp;keyword followed by the variable name, like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var surname;
var age;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Notice those semicolons (“;”)? Almost every line in JavaScript ends in a semicolon - you’ll use them often.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Initialization</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><em>Initialization</em>&nbsp;is giving a variable its&nbsp;<em>value</em>&nbsp;for the&nbsp;<em>first time</em>. The value can change later, but it is only initialized once.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You initialize a variable using the equals sign (=). You can read it as “the&nbsp;<em>value</em>&nbsp;of the variable on the left should be the data on the right”:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var name = "Tom";
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>“Tom” is a <em>string</em> - a collection of letters. Single or double quote marks surround a string.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var age = 20;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>20 is just a number - and numbers don’t go in quotes.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"backgroundColor":"luminous-vivid-amber"} -->
<h1 class="wp-block-heading has-luminous-vivid-amber-background-color has-background">Assignment</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"backgroundColor":"luminous-vivid-amber"} -->
<p class="has-luminous-vivid-amber-background-color has-background">As mentioned, you can set a variable’s value as many times as you like. It’s called&nbsp;<em>assignment</em>&nbsp;and it looks very similar to initialization. You again use the equals sign, but there’s no need for the&nbsp;<code>var</code>&nbsp;keyword because we’ve already declared the variable.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"backgroundColor":"luminous-vivid-amber"} -->
<p class="has-luminous-vivid-amber-background-color has-background">It’s like this, you:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
name = "Andy";
age = 43;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><em>Only</em>&nbsp;do this if you’ve declared the variable using the&nbsp;<code>var</code>&nbsp;keyword!</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"pale-pink","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-pale-pink-background-color has-text-color has-background has-link-color">Doing Math</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Variables can be used to store strings and numbers (amongst other things), but here the focus is on numbers.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">How much fruit?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>In your console, let’s create two variables. One will be the number of apples we have, the second will be the number of pears.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var apples = 5, pears = 10;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>That creates two variables… but there’s only one&nbsp;<code>var</code>&nbsp;keyword? Yup, it’s a shorthand for declaring and initializing multiple variables at the same time. By using the&nbsp;<code>var</code>&nbsp;keyword once and separating the new variables with commas you can save yourself some work.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Now, use these two variables to figure out how many pieces of fruit there are in total.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var piecesOfFruit = apples + pears;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>So that’s new.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You’re asking the browser to work out the sum on the right before assigning the result to&nbsp;<var>piecesOfFruit</var>&nbsp;- and you’re not adding the variable names, you’re adding the&nbsp;<em>values of the variables</em>. The browser knows that, when it sees a variable like this, you want to do something with the value. So it goes and gets each variable’s value before doing the sum.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The sum is called&nbsp;<var>piecesOfFruit</var>, not&nbsp;<var>pieces of fruit</var>. This is because variable names cannot contain spaces! There’s a set of rules somewhere about what you can and can’t use, but for now just use letters with no spaces.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You may have also noticed that the uppercase “O” on “Of” and “F” on “Fruit”. This is a convention, called&nbsp;<em>camel casing</em>&nbsp;(cos of the humps), that makes the variable name easier to read. You can call a variable anything you want, but&nbsp;<var>pIeCEsOFfRuiT</var>&nbsp;is pretty hard to read, no?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here’s a tip for you: code is read many, many more times that it is written. So it’s really, really important to make sure your code is easy to read. Really important.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Splitting the fruit</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Let’s say you want to split your fruit between 3 people. How much fruit does each person get?</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var piecesForEachPerson = piecesOfFruit / 3;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Thank goodness we have this JavaScript thing, otherwise you’d need a calculator for that one…</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You’re using a forward slash (“ / ”) to indicate division: divide the thing on the left by the thing on the right.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"vivid-cyan-blue","textColor":"white"} -->
<h2 class="wp-block-heading has-white-color has-vivid-cyan-blue-background-color has-text-color has-background has-link-color">Precedence &amp; operators</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For doing sums you can use various symbols: add (“ + ”), subtract (“ - ”), divide (“ / ”) and multiply (“ * ”).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Mathematical symbols are called&nbsp;<em>operators</em>; that is, they&nbsp;<em>operate</em>&nbsp;on some data. We’ll meet even more operators later on, but you should know that, like on a calculator, the symbols are worked out in a particular order, called&nbsp;<em>operator precedence</em>. Things in parentheses - that’s these: “ ( ” and “ ) ” - are done first, then multiplication and division, then addition and subtraction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here’s an example, stepping through how the browser runs it:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
(10 + 2) / 2 + 4 * 2
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The part in brackets is worked out first. So this becomes…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
12 / 2 + 4 * 2
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>…which works out to…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
6 + 4 * 2
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Then things are done in operator precedence order. If multiple sums are of the same precedence then they are evaluated left to right.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The multiplication is higher precedence so is done first, which works out to…</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
6 + 8
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This is used to work out the final value:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
14
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Whew!</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"pale-pink","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-pale-pink-background-color has-text-color has-background has-link-color">Logic</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A really important part of programming is being able to compare values in order to make decisions in code. When a comparison is made the outcome is either true or false; a special kind a of data called a&nbsp;<em>boolean</em>. This is&nbsp;<em>logic</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Like when doing math, there’s a set of operators that work on booleans. They are used to compare two values, on the left and right of the operator, to produce a boolean value.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The following comparisons are made in the console. The result we get from each line (shown underneath) will be&nbsp;<code>true</code>&nbsp;or&nbsp;<code>false</code>; these are booleans.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Equality</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To find out when two values are equal, use the&nbsp;<em>triple equals</em>&nbsp;operator (“===”).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
15.234 === 15.234
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>true</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>We can also determine if two values are not equal using the&nbsp;<em>triple not equal</em>&nbsp;operator (“!==”).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
15.234 !== 18.4545
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>true</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s important to know that strings containing a number and an actual number are&nbsp;<em>not equal</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
'10' === 10
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>false</samp></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Greater than and less than</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For example, comparing two numbers is useful to determine which of two is larger or smaller. This first example is a comparison of 10 and 5 to see if 10 is larger, using the <em>greater than</em> operator (“>”).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
10 &gt; 5
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>true</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Next we use the&nbsp;<em>less than</em>&nbsp;operator (“&lt;”) to determine if the left value is smaller.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
20.4 &lt; 20.2
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>false</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>That example gives back (or&nbsp;<em>returns</em>) false, because 20.4 is not a smaller number than 20.2.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Combined comparisons</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Combining a comparison of equality and size can be done with the&nbsp;<em>greater than or equal to</em>&nbsp;and&nbsp;<em>less than or equal to</em>&nbsp;operators (“&gt;=” and “&lt;=” respectively).</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
10 &gt;= 10
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>true</samp></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
10 &lt;= 5
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>false</samp></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"pale-pink","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-pale-pink-background-color has-text-color has-background has-link-color">Conditional</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Logic is used to make decisions in code; choosing to run one piece of code or another depending on the comparisons made. This requires use of something called a <em>conditional</em>. There are a few different conditionals that you might want to use, but we’ll focus the one used most commonly: <code>if</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">If</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>It’s very simple: if some logic (the&nbsp;<em>condition</em>) is true, run a&nbsp;<em>block</em>&nbsp;of code. You can also supply more code to be run if the condition is not true, and supply additional conditions and blocks of code to optionally be run. These forms are called&nbsp;<em>if-else</em>, as you’ll see below.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The most simple&nbsp;<code>if</code>&nbsp;statement looks something like this:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
if (10 &gt; 5) {
    // Run the code in here
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The code between the braces - “{” and “}” - is called a&nbsp;<em>block</em>, and this one is linked to the&nbsp;<code>if</code>&nbsp;statement. It’s only run if the&nbsp;<em>conditional</em>&nbsp;(between the parentheses) is&nbsp;<em>true</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>10 is indeed greater than 5, so the code in the block would run.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Oh, and the line starting “//”? The double slashes indicate comment, which means that everything after the slashes until the end of the line is ignored by the browser.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">If-else</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The if-else form of an&nbsp;<code>if</code>&nbsp;statement is used to run an alternative piece of code if the conditional is not true. The code in the&nbsp;<code>if</code>&nbsp;block below will be ignored, for example - only the code in the&nbsp;<code>else</code>&nbsp;block will be run.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
if (43 &lt; 2) {
    // Run the code in here
} else {
    // Run a different bit of code
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"pale-pink","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-pale-pink-background-color has-text-color has-background has-link-color">Looping</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><em>Loops</em>&nbsp;are a way of repeating the same block of code over and over. They’re incredibly useful, and are used, for example, to carry out an action on every item in an array (<a href="https://www.htmldog.com/guides/javascript/beginner/arrays/">we will come to arrays later</a>) or in searching.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Two of the most common loops are&nbsp;<em>while</em>&nbsp;loops and&nbsp;<em>for</em>&nbsp;loops. They combine a conditional and a block, running the block over and over until the logic of the conditional is no longer true, or until you force them to stop.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">While</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A&nbsp;<code>while</code>&nbsp;loop repeats a block of code&nbsp;<em>while</em>&nbsp;a&nbsp;<em>condition is true</em>. Like an&nbsp;<code>if</code>&nbsp;statement, the condition is found in parentheses.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var i = 1;
while (i &lt; 10) {
    alert(i);
    i = i + 1;
}
// i is now 10
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>After looping has finished the code carries on running from just after the closing brace (“}”) of the loop’s block.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"backgroundColor":"pale-cyan-blue"} -->
<h2 class="wp-block-heading has-pale-cyan-blue-background-color has-background">For</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A&nbsp;<code>for</code>&nbsp;loop is similar to an&nbsp;<code>if</code>&nbsp;statement, but it combines three semicolon-separated pieces information between the parentheses:&nbsp;<em>initialization</em>,&nbsp;<em>condition</em>&nbsp;and a final&nbsp;<em>expression</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The&nbsp;<em>initialization</em>&nbsp;part is for creating a variable to let you track how far through the loop you are - like&nbsp;<var>i</var>&nbsp;in the&nbsp;<code>while</code>&nbsp;example; the&nbsp;<em>condition</em>&nbsp;is where the looping&nbsp;<em>logic</em>&nbsp;goes - the same as the&nbsp;<em>condition</em>&nbsp;in the while example; and the final&nbsp;<em>expression</em>&nbsp;is run at the&nbsp;<em>end of every loop</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
for (var i = 1; i &lt; 10; i++) {
    alert(i);
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This gives us alert boxes containing the numbers 1 to 10 in order.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>By the way,&nbsp;<code>i++</code>&nbsp;is equivalent to&nbsp;<code>i = i + 1</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"pale-pink","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-pale-pink-background-color has-text-color has-background has-link-color">Functions</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Functions are reusable blocks of code that carry out a specific task. To&nbsp;<em>execute</em>&nbsp;the code in a function you&nbsp;<em>call</em>&nbsp;it. A function can be passed&nbsp;<em>arguments</em>&nbsp;to use, and a function may&nbsp;<em>return</em>&nbsp;a value to whatever called it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can save functions as the value of a variable, and you call a function using this variable and a pair of parentheses. This is also called&nbsp;<em>invoking</em>&nbsp;the function.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
doSomething();
findAnInterestingThing();
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>To create a function, use the <code>function</code> keyword. You then list the arguments in parentheses and then supply a block that contains the function’s code. Here’s a function that adds two numbers:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var add = function (a, b) {
    return a + b;
};
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/linkto/"><strong>Link To Us!</strong>If you've found HTML Dog useful, please consider linking to us.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><em>a</em>&nbsp;and&nbsp;<em>b</em>&nbsp;are the function’s parameters, and the value it returns is signified by the&nbsp;<code>return</code>&nbsp;keyword. The&nbsp;<code>return</code>&nbsp;keyword also stops execution of the code in the function; nothing after it will be run.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var result = add(1, 2); // result is now 3
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This calls add with the arguments <em>1</em> and <em>2</em>, which, inside add, will be saved in the variables <var>a</var> and <var>b</var>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1,"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}}},"backgroundColor":"pale-pink","textColor":"white"} -->
<h1 class="wp-block-heading has-white-color has-pale-pink-background-color has-text-color has-background has-link-color">Objects</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>JavaScript objects are like a real life objects; they have properties and abilities. A JavaScript object is, in that sense, a collection of named&nbsp;<em>properties</em>&nbsp;and&nbsp;<em>methods</em>&nbsp;- a function. An object can be stored in a variable, and the properties and methods accessed using the&nbsp;<em>dot syntax</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A human, for example, has a name and an age, and could talk, move or learn JavaScript. Name and age are&nbsp;<em>properties</em>&nbsp;of the human, and are essentially pieces of data. Talking, moving and learning are more like functions - there’s some complex behavior involved. When a JavaScript object has such an ability, it is called a&nbsp;<em>method</em>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Variables can hold objects, and creating an object is done using a special syntax signified by braces:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var jedi = {
    name: "Yoda",
    age: 899,
    talk: function () { alert("another... Sky... walk..."); }
};
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>The Jedi’s&nbsp;<var>name</var>&nbsp;and&nbsp;<var>age</var>&nbsp;are properties - they are essentially variables within the object and can store anything a variable can.&nbsp;<var>talk</var>&nbsp;is a property that holds a function - a method.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can get data back out of an object using the&nbsp;<em>dot syntax</em>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
jedi.name;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>Yoda</samp></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
jedi.age;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>899</samp></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
jedi.talk();
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>//produces an alert box</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><a href="https://www.htmldog.com/examples/"><strong>New Examples Section!</strong>See all of this code stuff in action, and play around with it.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can also reassign properties of an object:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
jedi.name = "Mace Windu";
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>And add new ones on the fly:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
jedi.lightsaber = "purple";
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Properties can be any kind of data including objects and arrays. Adding an object as a property of another object creates a&nbsp;<em>nested object</em>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var person = {
    age: 122
};

person.name = {
    first: "Jeanne",
    last: "Calment"
};
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>Creating an empty object and adding properties and methods to it is possible too:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var dog = {};

dog.bark = function () { alert("Woof!"); };</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":1,"backgroundColor":"pale-cyan-blue"} -->
<h1 class="wp-block-heading has-pale-cyan-blue-background-color has-background">Arrays</h1>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>Arrays</strong>&nbsp;are lists of any kind of data, including other arrays. Each item in the array has an&nbsp;<strong>index</strong>&nbsp;— a number — which can be used to retrieve an&nbsp;<strong>element</strong>&nbsp;from the array.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>The indices start at 0; that is, the first element in the array has the index&nbsp;<em>0</em>, and subsequent elements have incrementally increasing indices, so the last element in the array has an index one less than the length of the array.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In JavaScript, you create an array using the&nbsp;<em>array-literal syntax</em>:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var emptyArray = [];

var shoppingList = ['Milk', 'Bread', 'Beans'];
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>You retrieve a specific element from an array using&nbsp;<em>square bracket</em>&nbsp;syntax:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
shoppingList[0];
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>Milk</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It’s also possible to set the value at a particular index, again using the square bracket syntax:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
shoppingList[1] = 'Cookies';
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>// shoppingList is now ['Milk', 'Cookies', 'Beans']</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can find the number of elements in the array using its&nbsp;<code>length</code>&nbsp;property:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
shoppingList.length;
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>3</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>You can use&nbsp;<code>push</code>&nbsp;and&nbsp;<code>pop</code>&nbsp;methods to add and remove elements from the end of the array:</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
shoppingList.push('A new car');
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>// shoppingList is now ['Milk', 'Bread', 'Beans', 'A new car']</samp></p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
shoppingList.pop();
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><samp>// shoppingList is back to ['Milk', 'Bread', 'Beans']</samp></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Here’s an example that creates, pushes, pops and iterates over an array, passing each name to a function called&nbsp;<var>helloFrom</var>.&nbsp;<var>helloFrom</var>&nbsp;returns a string with a greeting: “Hello from ” and then the person’s name. After the pushing and popping, the final list of people is: “Tom”, “Yoda”, “Ron” and “Bob”.</p>
<!-- /wp:paragraph -->

<!-- wp:code {"lineNumbers":true} -->
<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">
var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i=0; i &lt; people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2 class="wp-block-heading"></h2>
<!-- /wp:heading -->
