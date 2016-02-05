---
layout: post
title: "Regular Expressions"
---

Closing out phase 0 of my Dev Bootcamp learning...what better to do than learn some new shit?!  Let's dive into regular expressions.  Regular expressions are objects that describe a pattern of characters.  So for example, [A-Z] is a pattern of capitalized letters from A-Z.  We can use that pattern to do search-and-replace using a modifier, which is what follows the pattern.  In JavaScript, that looks like this:


{% highlight javascript linenos %}
var pattern = /example/i
{% endhighlight %}


So we're going to search for for "example", and i makes it case-insensitive.  So then, we can do something like this:


{% highlight javascript linenos %}
var my_string = "An apple";
var new_string = my_string.replace(/apple/i, "example");
{% endhighlight %}


This will give us a new string, "An example" because we searched for apple and replaced it with example.  Pretty cool eh?!  You can search for a ton of different patterns using regular expressions.  Here are some additional resources:

<a href ="http://www.w3schools.com/js/js_regexp.asp">W3 Schools: Tons of great documentation</a>

<a href ="http://www.regexr.com/">RegExr: Play around with regular expressions</a>