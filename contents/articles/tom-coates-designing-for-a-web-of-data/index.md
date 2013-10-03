---
title: Tom Coates - Designing For A Web Of Data
author: wrumsby
date: 2008-09-21
template: article.jade
---

<img src="http://farm3.static.flickr.com/2034/2270560164_6e5c506d70.jpg" alt="You can never have too much sweet, sweet data">

[Photo](http://flickr.com/photos/wasabicube/2270560164/) by [wasabicube](http://flickr.com/photos/wasabicube/)

## Tom Coates: Designing For A Web Of Data

At Webstock 2006 [Flickr](http://www.flickr.com/) was the darling of the conference. It seemed to be mentioned by almost every speaker so I was curious to see which site(s) would be fêted in 2008. Flickr still got more mentions than any other site ([Twitter](http://www.twitter.com/) came in at number 2 by my reckoning), but this time round there was more of a focus on the Flickr platform and not simply on Flickr's design innovations (AJAX, tagging, vowel reduction, etc.).

[Tom Coates](http://www.plasticbag.org/) covered this most effectively in what I personally saw as the best/most important/key presentation of Webstock 2008. For me the theme of the whole conference shifted from the 06's focus on web design & usability to the idea of the web as a platform and Coates addressed this topic directly.

What follows is more or less a rough transcription of the presentation.

### Introduction

Flickr, Twitter, Google, [Upcoming](http://upcoming.yahoo.com/), Facebook, [delicious](http://www.delicious.com/), [last.fm](http://www.last.fm/), [Dopplr](http://www.dopplr.com/) and Amazon are all special sites and services. They are more than just web sites. They've managed to break out of the frame of the browser and manifest themselves onto desktops, devices and other sites. They provide a platform on which other things can be built by anyone and as a result those sites have benefited - they've generated more revenue, more ethusiasm and had a bigger impact than they would have had if they did not provide those platform services.

### Five Things

 1. Your Web Site Is Not Your Product
 1. You Must Play Well With Others
 1. You Can Never Have Too Much Data
 1. Hierarchies Can't Take Weight
 1. Collaboration Is Important

### What Is The Web Of Data?

The web of "pages" is changing to the web of "data". Web pages are now simply one way of accessing the data.

In this context "data" means "stuff that a computer can access" (e.g. blog posts, pictures, videos, book reviews? [resources](http://en.wikipedia.org/wiki/Representational_State_Transfer#REST.27s_central_principle:_resources)).

So what we have is

> A web of data sources [and] services for exploring and manipulating data and ways people can plug them together.

### Your Web Site Is Not Your Product

Your territory is anywhere your network touches. For example people can interact with Twitter using the [web site](http://www.twitter.com/), [IM clients](http://www.tweet-r.com/), [SMS](http://getsatisfaction.com/twitter/topics/twitters_sms_phone_numbers), anything that can broadcast information to Twitter. 90% of the traffic to Twitter is via their API (i.e. only 10% via the web site). This means that the Twitter web site is not the product - the product is a way for people to keep in touch via short messages and the site is merely one instantiation of that.

Similarly there are other ways to interact with Flickr: [eStarling](http://www.estarling.com/), [Moo cards](http://www.moo.com/), widgets, web site badges, desktop clients, mashups, etc.

In the case of [last.fm](http://www.last.fm/) many users interact with last.fm through a desktop player app, and not through the web site at all. OS X users can also play [customised radio streams in iTunes](http://www.macosxhints.com/article.php?story=20060507110841475&lsrc=osxh) and not have to spend any time looking at the last.fm web site.

This is all stuff you can do today! As the network touches more "things" computing becomes ubiquitous and while you could say that many of the applications today are niche, toy, "play" apps there are other possibilities for a wide range of applications.

When the web of data bleeds into the real world:

 * Physical objects respond to and visualise data from a network (e.g. [Nabaztag](http://www.nabaztag.com/en/index.html); [Ambient Orb](http://www.ambientdevices.com/cat/orb/orborder.html))
 * Interactions with physical objects allows people to change data stored on the network
 * Physical objects act as a sensor that writes to the web of data (e.g. [Wattson](http://www.diykyoto.com/))

### You Must Play Well With Others

If a web site is just one manifestation of your data you need to design for recombination because there are opportunities when your data can be mashed up with other datasources:

 * You can drive people to your site (e.g. Amazon)
 * People might pay for your data
 * You put yourself (your data) in an ecosystem that contains similar data
 * It makes your service more attractive to users
 * It reduces amount of central development (Flickr couldn't build everything that people wanted from the product so they let others build on top of Flickr)

Other examples: [Oakland Crimespotting](http://oakland.crimespotting.org/) combines two datasets which can be understood in the context of each other (crime by geography, geography by crime); [Fire Eagle](http://fireeagle.yahoo.net/) (provides a geolocation service that other services can use to provide [another layer of data](http://fireeagle.yahoo.net/gallery) on top of an existing service).

### You Can Never Have Too Much Data

<img src="http://farm3.static.flickr.com/2319/2269767889_e3a8fda916.jpg" alt="2,264,930,075">

[Photo](http://flickr.com/photos/wasabicube/2269767889/) by [wasabicube](http://flickr.com/photos/wasabicube/)

**2,264,930,075**. That's the number of photos on Flickr as of February 2008. That's 1 photo for every 3 people on the planet and that number increased by more than 900,00 in the 12 hours before Coates' talk.

How do you make that scale of data communicable, explorable, navagable to users? By finding more data!

 * Capture meta data during the production of the object (e.g. data about when a photo was taken; the mode used; etc)
 * Analyse the object
 * Crowd-source the creation of meta data (e.g. tagging)
 * Perform behavioral analysis (e.g. Google - [PageRank](http://en.wikipedia.org/wiki/PageRank) is based on how other pages link to a site)

For [this photo of Piccadilly Circus](http://flickr.com/photos/plasticbag/1131536704/), there are a number of related data axes:

 * [Photos by Tom Coates](http://flickr.com/photos/plasticbag/)
 * Photos by Tom Coates [taken on 15 August 2007](http://flickr.com/photos/plasticbag/archives/date-taken/2007/08/15/)
 * Photos by Tom Coates [uploaded on 16 August 2007](http://flickr.com/photos/plasticbag/archives/date-posted/2007/08/16/)
 * [People who call this photo a favourite](http://flickr.com/photos/plasticbag/1131536704/favorites/)
 * Etc. (by [set](http://flickr.com/photos/plasticbag/sets/72157601285631006/), [tag](http://flickr.com/photos/plasticbag/tags/piccadillycircus/), [location](http://flickr.com/places/United+Kingdom/England/London), [camera info](http://flickr.com/cameras/canon/eos_digital_rebel_xti/), [license](http://compfight.com/))

It's even possible to explore photos by apeture if you know what you're doing. The only reason this feature isn't more obvious is that the Flickr team haven't worked out a good user interaction to do this via the web site.

### Hierarchies Can't Take Weight

Information Architecture circa 1999 was about organising your data into hierarchies (taxonomies). IA circa 2005 was about organising your data into folksonomies (e.g. tagging).

You can have both! Amazon.com provides multiple ways to explore data, using both traditional taxonomies and folksonomies.

Hierarchies don't scale. [Peter Morville](http://semanticstudios.com/about/) who presented earlier also made this point and it's not something that is unique to the web. "Weblike" navigation is a much better way of exploring large data sets - "top navigation is just the jumping off point".

### Collaboration Is Important

Coates works at Yahoo! Brickhouse which is set up to run like [a startup inside a large organisation](http://www.businessweek.com/technology/content/feb2007/tc20070209_179924.htm). The teams at Brickhouse are small, inter-disciplinary teams (e.g. [BravoNation](http://bravo.yahoo.com/teaser/), Fire Eagle).

A key idea here is that idea generation is not the responsibility of one role (e.g. programmers, graphic designers), but is shared across roles. Coates strongly believes this is the best (only?) way to create new products.

### Conclusion

Not a lot to disagree with in what was covered. It's interesting to me how web-based applications have evolved and have to deal with tremendous scale and complexity. Back in 1999 I can remember a friend bemoaning the fact he was working on web sites and not "real" applications. As we grow a richer appreciation of how we can develop applications on the web the kinds of solutions being developed are far more interesting than the client/server applications of the 90s.

If Google Maps was the catalyst for CEOs/CIOs demanding AJAX-based solutions it stands to reason that once they understand the concept that you can create a web-based platform their view of what's possible will broaden in a similar way (then again maybe there was an element of "oh this graphic/web designery stuff is easy, we could do that too!"; it seems likely that if "normal companies" were to develop platforms that they'd turn to Google, Amazon, etc. to provide [some of the] infrastucture).

And finally, while I agree that "weblike navigation" works better for large datasets, it's not a big deal if you don't stumble across [a particular photo of your favourite MC](http://flickr.com/photos/tropeone/2686123075/) when using Flickr, but I can't help thinking that for certain classes of applications there is a large set of information that users have to see. Hierarchies obviously don't work in those situations, but I'm not sure folksonomies completely solve that problem either.

Lots of stuff to think about. Since it took me 7 months to write this post I can now add that Coates' is returning for [Webstock 09](http://www.webstock.org.nz/09/speakers/coates.php)!