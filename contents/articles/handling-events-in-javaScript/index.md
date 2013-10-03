---
title: Handling Events in JavaScript
author: wrumsby
date: 2010-10-24
template: article.jade
---

This post is adapted from an answer on an internal Q & A site at work. It's not "new" information, but it might be new to some people so I thought that it was worth reposting here. The code examples use YUI 3 because that's what I'm most familiar with, but other JavaScript libraries provide similar features.

## Handling Events in JavaScript

Let's start from "the old way" and progress to "the new way".

If we start with:

    <a href="#" onclick="alert('I like frogs!')">Frogs?</a>

this will, not surprisingly, alert the text "I like frogs", but there's a simple problem here: **the `onclick` handler does not cancel the default behaviour associated with clicking on the link**, meaning that clicking on the link will navigate to the destination anchor. You might not notice this if the link is at or near the top of the page, but you've had to scroll vertically to reach the link then clicking the link will scroll the page back to the top. Preventing this is simple:

    <a href="#" onclick="alert('I like frogs!'); return false">Frogs?</a>

`return false` cancels the default behaviour of the event.

This is all very well for simple cases, **but if you want to perform a number of steps writing all of that in the `onclick` attribute can become unweildy**. Again, there's a relatively simple solution, call a function from your `onclick` handler:

    <script>
        var frogs = function() {
            alert('I like frogs');
            // do some other stuff too
        };
    </script>
    <a href="#" onclick="frogs(); return false">Frogs?</a>

This is also nice because the function can be defined in a external script file, which:

 * can be cached
 * should reduce the size of the HTML sent to the browser

On the other hand **the `onclick` attribute can only reference global objects and functions** (without some trickery, which would make your `onclick` attribute unweildy) **and [global variables are bad](http://c2.com/cgi/wiki?GlobalVariablesAreBad)**.

Luckily we can set the onclick attribute in script, e.g.:

    <a id="link" href="#">Frogs?</a>
    <script>
        window.onload = function() {
            // frogs is not visible outside of this function
            var frogs = function() {
                alert('I like frogs');
                // do some other stuff too
            };

            document.getElementById('link').onclick = function() {
                frogs();
                return false;
            };
        };
    </script>

or:

    <a id="link" href="#">Frogs?</a>
    <script>
        document.getElementById('link').onclick = function() {
            alert('I like frogs');
            // do some other stuff too
            return false;
        };
    </script>

Awesome, but we have another problem: **there can only be a single value for an attribute, which means that setting `onclick` replaces any previous value of `onclick`**. This problem is more obvious when when trying to work with events like the `window` object's `onload` event.

Fortunately the W3C defines the [DOM Events Specification](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/) for attaching event *listeners*, meaning that you can attach multiple listeners for a single event on a given element.

    <a id="link" href="#">Frogs?</a>
    <script>
        document.getElementById('link').addEventListener('click', function(e) {
            alert('I like frogs');
            // do some other stuff too
            e.preventDefault(); // instead of return false
        }, false);
    </script>

**Unfortunately Internet Explorer does not implement the DOM Events Specification and offers a different syntax for adding event listeners**. The scope in which the event handler runs in IE is also different. Quirks Mode has [some more information](http://www.quirksmode.org/js/events_advanced.html) on the differences between browsers.

Fortunately, JavaScript libraries come to the rescue, providing a normalised API that works across browsers *and* a host of other features.

    <script>
        YUI({
            delayUntil: 'domready'
        }).use('node-base', 'event-base', function (Y) {
            'use strict';

            var link = Y.one('#link');

            link.on('click', function (e) {
                alert('I like frogs');
                e.preventDefault();
            });

            link.on('click', function (e) {
                alert('ME TOO!');
                e.preventDefault();
            });
        });
    </script>
    <a id="link" href="#">Frogs?</a>

Things to note:

 * the order of execution of event handlers is not guaranteed meaning that "ME TOO!" might be alerted before "I like frogs"
 * these examples are simply to demonstrate the concepts, you can do much more powerful and interesting things with a good event library; have a look at the [documentation](http://yuilibrary.com/yui/docs/event/), including the examples

YUI 3 provides a really sophisticated event system. This is really important because the only really good definition of [how a web application differs from a web site](http://yuiblog.com/blog/2007/01/17/event-plan/) that I have come across states:

> When it boils down to it, the main differentiator of a web application and a web site is that an app has much more interaction and is process-focused rather than content-driven.

[Custom Events](http://www.dustindiaz.com/custom-events/) mean that you're not limited to DOM Events either.

To me this all sounds quite a bit like [enterprise integration](http://www.enterpriseintegrationpatterns.com/): you have a powerful system for dealing with loosely-coupled components and that can form the basis for [an interesting application framework](http://developer.yahoo.com/yui/theater/video.php?v=zakas-architecture).

Working with events is a fundamental part of writing contemporary web applications. JavaScript libraries provide very capable utilities to deal with events. Take advantage of those utilities and avoid the problems associated with other approaches.