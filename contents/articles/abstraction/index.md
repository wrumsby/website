---
title: Abstraction
author: wrumsby
date: 2008-02-11
template: article.jade
---

(I originally wrote this post on an internal blog in 2004 and since then several people have suggested that it is one of the best posts I have written. I'm republishing it here for a wider audience.)

## Abstraction

> abstract: [Having only intrinsic form with little or no attempt at pictorial representation or narrative content](http://www.merriam-webster.com/cgi-bin/dictionary?book=Dictionary&va=abstract)

> intrinsic: [Belonging to the *essential* nature or constitution of a thing](http://www.m-w.com/cgi-bin/dictionary?va=intrinsic)

> abstraction: [Abstraction uses a strategy of *simplification of detail*, wherein formerly concrete details are left ambiguous, vague, or undefined](http://en.wikipedia.org/wiki/Abstraction)

In the 20th Century a growing number of Western painters began to paint in a more abstract style. Although casual observers of art tend to generally prefer more representational painting, Western painters had mastered representation over the past 300 years, the development of technologies like photography made representation less interesting (and necessary) and artists developed a new appreciation for "primitive artworks" (e.g. Maori, Aboriginal and African art).

Artists became less interested in painting objects "accurately" (in reality many "realistic" paintings added or removed elements for the sake of form and aesthetics) and more interested in painting in a more philosophical sense - the idea of painting.

In [The treachery of images](http://en.wikipedia.org/wiki/The_Treachery_of_Images) Magritte includes the phrase "Ceci n'est pas une pipe" ("This is not a pipe") in his painting - and it's not, it's a painting of a pipe.

Some artists became more interested in things like the contrast of light, planes of colour, structural elements, capturing a mood or feeling.

In [Untitled, 1963](http://www.mccahon.co.nz/ShowDetails.asp?iMainID=2598&iImageIndex=0) Colin McCahon seems to capture the somberness and loneliness of the New Zealand landscape, despite (or perhaps because of) his relatively clumsy brushwork. Interestingly, the simplicity of the painting isn't so far detached from "reality", compare it to this photo of Mt Eden.

American artist [Richard Diebenkorn](http://en.wikipedia.org/wiki/Richard_Diebenkorn) also provides another insight into abstract painting. Compare [Cityscape I](http://collections.sfmoma.org/Obj1000$16227) from 1963 with [Ocean Park 54](http://collections.sfmoma.org/Obj4418$16227) from 1972. Initially both paintings look completely different, but both are landscapes and both have striking structural similarities (colour planes, polygons and lines). In the earlier painting blocks of colour, which dominate the latter, are obvious. If you step back and think about these ideas the two works suddenly seem remarkably similar.

Diebenkorn is more interested in the structure of a scene than creating a picture perfect recreation of it. He's interested in how blocks of colour relate to each other. If you spent your entire career looking at landscapes and thinking about how to paint them it's an aguably natural evolution.

### An Abstraction You Might Be A Bit More Familiar With

While abstract painting is often misunderstood, there is an abstraction that most people are familiar with that is very well understood.

<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=Mount+Eden,+Auckland,+New+Zealand&amp;ie=UTF8&amp;ll=-36.874059,174.766302&amp;spn=0.014385,0.040169&amp;z=14&amp;om=0&amp;output=embed&amp;s=AARTsJoLUQAA-mOhFue3H8BpLDmdx8JCxQ"></iframe><br><small><a href="http://maps.google.com/maps?f=q&amp;hl=en&amp;geocode=&amp;q=Mount+Eden,+Auckland,+New+Zealand&amp;ie=UTF8&amp;ll=-36.874059,174.766302&amp;spn=0.014385,0.040169&amp;z=14&amp;om=0&amp;source=embed" style="color:#0000FF;text-align:left">View Larger Map</a></small>

Maps are probably the most successful abstraction there is. They are successful because they show only what is necessary for someone wanting to know how to get from one place to another.

Is it easier to work out your route from [the map](http://maps.google.com/maps?f=q&hl=en&geocode=&q=Mount+Eden,+Auckland,+New+Zealand&ie=UTF8&ll=-36.872205,174.766259&spn=0.014385,0.040169&z=15&om=0) or from [this photo](http://flickr.com/photos/kingkoru/511818375/)? What about a map compared with an aerial photo?

Information design guru, Yale professor and authour of books including Envisioning Information, Edward Tufte advocates removing unnecessary elements in order to introduce new, useful ones. Maps are designed for a specific purpose, anything on a map that does not aid in that purpose is what Tufte would call "chart junk" - it's unnecessary and likely a hinderance to communication.

It's as much what is not in the map as what is in the map that makes it so successful and usable.

    Ideally, the design should disappear in favor of the information.

How Does This Relate to Software Development?

Understanding abstract concepts is a fundamental part of software development. The following bit of JavaScript requires an understanding of abstract concepts:

var n = 1;
var m = 2;

var s = n + m;

If you can figure out that s has the value of 3 then you're thinking abstractly. Let's push this a little further:

function add(a, b) {
    return a + b;
}

var s = add(1, 2);

Thanks to a little bit of abstract thinking we have a function that can be called from any other part of our code with which we can add any two numbers. Before our code could only add 1 to 2. What's more powerful and interesting?

In object-oriented languages like Java we want to work with abstractions of real-world objects. Abstractions represent the key things we are interested in about these objects.

A key part of abstracting something is simplifying it - so when we need to represent a concept like a person in software we simplify it down to only the properties and behaviours that we're interested in.

Don't be fooled into thinking that simple things are bad or not powerful. Simple things are easier to use and ease of use is good.

Finding the right abstraction is a key part of software development. From a certain point of view two objects that seem quite different may share some interesting characteristics, if you can express these characteristics in an appropriate way (e.g. as an interface) you give yourself the opportunity to reuse existing code (and tests!) and to do more interesting things with your software with little or no extra effort.

If you fail to recognise the similarities you run the risk of of wasting a lot of time.

Conclusion

Abstraction is often seen as difficult to understand, but really it's about simplifying something so that it only describes the specific things we are interested in. The difficulty arises if you don?t know what they are.

Take the time to reconsider the potential similarities between unlike things. 