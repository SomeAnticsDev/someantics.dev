---
title: Let's Build a Style Stage Theme with Stephanie Eckles!
upload: https://www.youtube.com/watch?v=w173MUXyBrc
sourceCode: https://codepen.io/5t3ph/pen/xxVpYjo
hosts:
  - Ben Myers
  - Stephanie Eckles
---

Modern CSS affords us some really cool, handy solutions to evergreen problems of web design, as well as nearly limitless potential and flexibility. Nowhere is this made more clear than in Stephanie Eckles's [Style Stage](https://stylestage.dev). Join Ben and Stephanie as start a Style Stage theme and go on a tour through some of the best that modern CSS has to offer.

[Stephanie Eckles](https://twitter.com/5t3ph) is a frontend engineer at Microsoft, and one of the best CSS educators out there. You may know her from her projects such as [Modern CSS Solutions](https://moderncss.dev), her Egghead courses, or the many CSS, accessibility, and Eleventy resources that she puts into the world.

## More From Stephanie

* [Follow Stephanie on Twitter](https://twitter.com/5t3ph)
* [See what Stephanie is up to!](https://5t3ph.dev)
* [Accessible Cross-Browser CSS Form Styling on Egghead](http://5t3ph.dev/a11y-forms)
* [SmolCSS](https://smolcss.dev)
* [Modern CSS Solutions](https://moderncss.dev)

## Transcript

*[Note: Due to technical difficulties, part of the introduction was cut off]*

**Stephanie:** —software engineer now. Always been frontend-focused. Been doing web development for, professionally, over 13 years. And I have a few, personal projects that have been keeping me busy during pandemic times and has opened my network to a lot more folks like Ben, and, yeah, just, I'm always up for talking to anything CSS, accessibility, general frontend, so. 

**Ben:** Well, it's great to have you! I'd like to kind of show off a couple of the things that you've been doing, kind of talk through those. For one thing, you just released a new Egghead course. 

**Stephanie:** Yeah. Yep. I just had my first full-length Egghead course.  I'd had som one-off lessons. I've been with them as an instructor for almost a year. So, my *[00:01:00]* course is about accessible cross-browser form field styling. So, learning how to make those styles cross-browser, but also about half the course is actually the semantics of how to set up the most common field types — inputs, radios, checkboxes, selects — and then ending with form layout, including fieldsets and things. 

**Ben:** I love the focus on semantics there, because I think so often the focus is on how can we make this pretty, but we don't really focus so much on the robustness that has to power that, and that seems like a big recurring theme in your work.

**Stephanie:** Yeah, it is. *[laughs]* You're definitely right, and that comes from a interesting kind of pathway to where I am now. I started, I spent eight years as a developer in marketing and the first part of *[00:02:00]* that, we didn't care too much about accessibility because it was not talked about as much. It just wasn't part of the industry standard, unfortunately. So we've obviously done a lot of improvement in just even these recent years. And then, you know, being able to look at how we often offload forms to different tools. So I think it's really important to understand what's really happening there, even if it just means you can better evaluate when you seek out a solution. 

So, the course is just vanilla HTML, CSS. We talk about what to be aware of for styling for validation rules, but we don't bring in any JavaScript to do that. So it's intended to be portable, like you could turn them into React components, Vue components, PHP, whatever you need to do. 

**Ben:** Awesome. Yeah, I'm looking forward to that course. I think that's definitely one I'm going to be taking in some of my free time. 

*[00:03:00]* Another thing that you've been working on as of late is SmolCSS. Would you like to pull that up and, and kind of show us what that's about? 

**Stephanie:** Yeah! So this is my newest baby. And this has been, let's see, it'll only be three weeks this Thursday, I believe. And this format has really been attractive to folks. So for context… well, I think it's good context… I also have ModernCSS.dev, which is full-length, very in-depth written tutorials, and I'd been sharing tips on Twitter. A huge focus for me is that they're actually practical tips. They're not just fancy tricks. You know, sometimes you can use them for tricks, but usually they're intended to be practical, like stuff I'm actually using. And so, *[00:04:00]* SmolCSS, I was like, I'd like to formalize, like sometimes you do need a little more context than a tweet can provide, but I wanted something more consumable than maybe digging through a tutorial when you are just seeking a little bit quicker answer. So that's what SmolCSS is! So some of them are, I mean, everything is so the small theme, right. And it's very scoped down to just the thing we're trying to address. At this point there are 14 different demos.

And they all are the base HTML, of course. Big emphasis on semantics as much as possible. Most of them are, you know, set up to be generic, and since the element doesn't always matter so far in what we've created. But of course, you know, making sure we have alt text, and then I also mention throughout, if there's anything to know about, of course, support, *[00:05:00]* like this one's using aspect-ratio and :is, which we might get into using today a little bit.

And so it's exposing you to modern CSS properties, but also to maybe the semantic side and definitely emphasizing anything to be aware of for accessibility as you do some of these things. Yeah. 

**Ben:** That's super cool. And I've definitely really enjoyed seeing these tips get passed around Twitter. Just every time a new one comes out, it feels like it makes the rounds of people I follow going, "This is super cool stuff. This is great." 

Yeah! And then I mean, you've done so much, you've put out so much great stuff, but the one that we're going to be focusing on today is Style Stage. I would love if you could give a brief introduction to what that is as well. 

**Stephanie:** Definitely. So, as I mentioned, I've been around awhile on the web, *[00:06:00]* and so one of the resources that I was very fascinated by when I was getting started was CSS Zen Garden. As you can see, it still exists. And this was the idea, if you're not familiar, is that everyone who contributed had the same HTML file, and then they created their own CSS file. So you can see all these. Like, here's one by Dan Mall. And submissions for this stopped in, I'm gonna double check what I said here, 2013, So consequently, CSS and the web at large has grown up a lot since then.

And I love CodePen and similar environments for being like, "Here's a small, you know, focus thing. Pretty cool." but I enjoyed CSS Zen Garden because it allowed you to think of the page holistically, or your system styles holistically. And *[00:07:00]* I think that beyond personal portfolios, not everyone gets a chance to always do the whole project, right? 

And I'm also a big proponent of, an advocate just for generally playing with things. That's how I learn. Everything that I put out there is from playing with it. You know, we can read the docs, you can read the specs if that's your thing. But I think there's no substitute for play if you don't have, like, a professional capacity to practice some of these things.

So yeah. So, Style Stage has the same premise. The HTML that constructs this homepage, everyone continues to use it throughout the styles that are available. So you can see there's quite a lot of background info you can see here. And then also the emphasis on modern CSS, so a few properties listed there. If you're not quite sure what we mean by that, so things like flex and grid, and then getting even really modern min, max, clamp, *[00:08:00]* variable fonts. So really whatever you can bring in and has reasonable support, you know, you can use, of course. 

So the contribution flow is that you actually submit them via GitHub and pull request, and the site is built with Eleventy. And so your stylesheet comes in, you must provide a permanent external link to it, and then we kind of just bring that in. So there's a few ways to get started. You can do the Sass template if that's your preference, which is mine. That's how the base one's built here. Or you can download just the vanilla CSS and HTML, or you can fork the CodePens. There are lots of options to get you started or to help you kind of dig deeper. And then I actually have a nightly process that runs to change these featured styles, try to give all the current one some, you know, attention. There are 54 styles. 

**Ben:** Whoa! 

*[00:09:00]* **Stephanie:** Yeah! *[laughs]* This launched last July and we had quite an influx those first couple months. It's definitely slowed down, but some really, really excellent work here. And it's important to me to say that it's not a beauty contest. You will not be judged on what it looks like. The only thing is there are guidelines, but those have to do with being cognizant of accessibility things. And so mostly that means contrast. The theme includes a skip link, so making sure you actually make that visible at the right time or at some point If you use animations, using a prefers-reduced-motion media query to turn those off. 

So if you've met all of those things, I'll review your PR. It gets its own preview branch so we can both look at it and make sure things come through. And *[00:10:00]* then, as long as the guidelines are met, we'll add it to the gallery here. So, yep. 

It's been cool to have, like, a lot of different skillsets contribute, and it's been fun to help people kind of maybe learn to notice some of those things I just mentioned, 'cause some of those things are new like the prefers-reduced-motion media query. We can talk about that more later if folks here have not used that before. So I definitely encourage you to go look out here. 

And so the other key part of this is that any of the stylesheets that are made available are actually licensed under Creative Commons, so you shouldn't pick up and use it as your own design but you can certainly use parts of it. You can be inspired by it. You can grab, for example, if you're like, "Whoa, how's this pattern created?", you know, dig in! That's the other beauty of this.

Other inspiration *[00:11:00]* for this is that some of these modern ways that we build websites and the way that they add classes to things makes it very hard to scope down and find styles if you do have that, like, "Oh, how'd they do that?" moment. So Style Stage makes that a lot easier because it is just HTML, just a normal linked stylesheet.

**Ben:** That's awesome. Yeah. And I I think it's so cooljust how different all the themes look. Like, yeah, they all have the same content. They all have generally the same structure. They all look radically different in a way. 

**Stephanie:** Yep! And as you can see from the one I pulled up, again, they're all working with the exact same HTML and just getting creative about especially grid. Grid is really open for this type of a thing. I mean, just, you know, wild what you *[00:12:00]* can do. The one accessibility thing I've been a teeny tiny bit lenient on, just because I'm not allowing you to alter the HTML, is occasionally we get the visual focus order a little bit off from the DOM order. Things haven't been too, you know, unfollowable, I guess. 

We can quickly get back to all styles. So as you get into one, you know, you still have all the links available, they'll all continue to work to get you back around to the directory thing. 

**Ben:** I think one of my favorites has to be Jet Set, which was the one that basically,  it's the theme that you would get if you turned, like, an energy drink into a website.

**Stephanie:** Yeah. Or, like, it reminds me , I think it's, I dunno, I don't do video games, but I think it might be based on a video game or that's what reminds me of, is like an old school, like, you know, you walk into a video arcade and it's like that intro *[00:13:00]* screen. I can play it. A warning to anyone watching, it does flash. So I will just play it for just a second. I'll tell you when it's off screen, but that's going to load right now. So, yeah, it's got this, it is pretty amazing. The movement, the change in color of the background gradient. So yeah, I also love this. I'm pointing to my screen. You can't see that, but this stacking menu that happens is also very cool. Very excellent use of modern CSS properties and a really good spotlight of what can you do with just styles when you're just given some HTML to work with. So, okay. I will back out of that one, so it's no longer flashing on screen, but yeah! 

**Ben:** Well, I have to say, the chat is suitably inspired. Shepherd is asking whether it's redundant to say how stylish the styles are. Adrianne says they're so aesthetically pleasing. NastyDirector says it's really *[00:14:00]* inspiring to see just how different all of the styles are. Yeah the chat loves this. They're thrilled. 

So we're going to build a theme of our own for the stream. So how do we get started with that, Stephanie? 

**Stephanie:** Yeah. So what I've done today is I have popped our HTML into a CodePen just for a little more easy to talk to and make changes to. I have it bumped up here. Let me know if I need to change to a dark theme or anything for anyone. I'm happy to do that.

And so I just will start by kind of exploring what is the HTML structure. So once again, you're not allowed to change it. That includes you're not allowed to add classes. So, you will get very familiar with CSS selectors. I have been asked several times, do I think this is representative of real world and yes, unfortunately I do, because *[00:15:00]* I've been there myself. Yes, even in today's world, because you have a good chance of encountering legacy things that, for whatever reason, you cannot change the underlying structure, or maybe you're hooking into third-party tools and there is not a clean way to change the underlying structure. So yeah, either way. Getting familiar with CSS selectors never hurts, even if you're using a framework or a library as well. 

So here's what we got going on. And of course, zero styles right now. I stripped all that away. So again, I mentioned the skip link. That's the thing I flag almost the most frequently on contributions is forgetting to make that visible. And that's easy to do 'cause you hide it initially, you get going on your styles and forget to jump back up to it. Especially if you're not used to that concept, which I can mention real quickly. So a skip link, the intent of it is that *[00:16:00]* someone using assistive technology, especially if they're maybe more familiar with the site, they can skip past navigation, past header content, all that blob of stuff that just is repeated on every page and just is annoying to navigate through if you're having to do it nonvisually, and get straight to your actual content. So, on Style Stage, you could argue it's not totally needed, but again, part of the aspect is to be an educational tool, so it's important to me to go ahead and include them. So what's happening is that it links to our `<main>` element. So it's a normal anchor link at the end of the day. And importantly, we have this tabindex 1. So in other words, we want it to be focusable, but we don't want it in the normal tab order. So that's what's going on there. And obviously my brain was on React when I did this, that doesn't need to be capital. I need to make that edit. I've just noticed that. 

Alright. So what now? I *[00:17:00]* said you couldn't add classes. I have added a scant amount of classes just to enable styling hooks when it might be a little more difficult to do with selectors. And I've also added some kind of superfluous divs. Again, just to give you a tiny bit of extra help with the styling hooks. And back to the "Is this realistic?" question, trying to make it a little more realistic to what you might do if you were trying to group elements and add backgrounds and what have you. So there are a few elements that get this class of .container for example. If you never use it, that's totally fine. And then also on a few links they also have a convention, "link-". So, if our GitHub link that, as you can see, this SVG is totally overtaking the page right now. And it also *[00:18:00]* repeats at the bottom of the page.

But otherwise we just have our kind of nice semantic markup. We've got our `<header>`, a `<nav>`, `<main>`. It ended up with TWO `<aside>`s, one that contains your profile information, which this will dynamically update with the data you provide with your contribution, so  that's taken care of. That will be personal to you on your stylesheet page. And then it's important to keep in mind as well that these featured styles will change daily, so you can't count on them to be a certain character count. So for example, these happened to match the current, well, the ones from yesterday, because that's when I pulled the HTML. So whenever, if you choose to use the functionality of grabbing the HTML here, you'll get the actual current styles.

So yeah, so you *[00:19:00]* have a couple of `<aside>`s, so just kind of important to note that there's two of them. The reason for some IDs—you can of course use them for styling—they're there because of our nav using anchor links since it's a single page site, is the main reason you'll see IDs. Yeah. And so other than that standard markup things.

Are there any questions that have popped up on any of that? 

**Ben:** Not so far. If you have questions, feel free to get them in and get them in early. Just y'all know how bad Twitch lag can be, and we want to be able to get to them. We do have a comment from NastyDirector, who says that legacy code makes them write some of their most, quote, "creative" selectors.

Yeah, I think that really and truly, like, getting good at selectors is one of the key things to really getting good at *[00:20:00]* CSS. 

**Stephanie:** Yeah, it's going to help you no matter what. Quick plug, my most recent articles out here are actually going through advanced CSS selectors. So if you haven't looked in a while, you probably are missing some of the newer ones, first of all, or especially the newer-supported cross-browser ones. We're going to talk about one of my favorites for sure, here in a little bit. Okay. So that's out there. 

Okay, so this CodePen, I've given Ben the link, this is a modified version from the one that is available on the main site. I made a skeleton version that gives you kind of core structural styles just to help visualize a little more.

So I've stripped all those out. But, speaking of fancy selectors, what I left in here is this one that I *[00:21:00]* created a while ago that… it's going to… we'll see what it does. I'm gonna let it do it, a little easier to explain. Okay. So what it's done is it's found every element that has a class or an ID, and it's actually pulled out the name of those values and appended it as either a `::before` or an `::after`. So your classes are appended. 

**Ben:** We are exactly one tidbit and my mind is already blown. I did not know you could just, like, pull out the classname like that. 

**Stephanie:** Yeah! So that's coming from, so this is all vanilla CSS. This is not, it, I know it says Sass up here, , and we are using Sass, but this attribute is just CSS happening. So we're concatenating in a period to help us denote that it's class. Let's get down to a, so here's a ID, so we've made it a different color. So *[00:22:00]* just made this as kind of a debugging tool to help identify different things as we're starting to work through. So for example, we can quickly see, like, what elements have a .container. 

Okay, so that star is getting a little obnoxious. So I am sure most contributors, probably the first thing they do is, let's address this SVG. We have it twice, but it's the same one, so we'll just generically attach styles to the SVG. There's, of course, a lot of ways we can do this. And I do have this set up not to auto-run, since it's a long scrolling page. I didn't want it to jump a lot. So it's hidden behind our before and after so that at least it's a more manageable size now. So you know, we, since we only have half an hour left we're not going to get too much into design, so we're going to focus more on *[00:23:00]* structure and maybe some things to think about around that! 

**Ben:** Anthony's already saying one day he'll properly learn grid. So definitely if we can spend some time with your grid tips, I think that would be super helpful. 

**Stephanie:** Yeah, definitely. So let's do a couple things. Let's also get a reset started in here. I'm going to comment this back out for now. It is a lot of noise, but it can be helpful. So, my original thing that I typically do is reset our box-sizing. And I know there's different thoughts on if this should happen on the universal selector or, you know, inherit from HTML. Totally up to you. Again, keep in mind, this is a single-page site, so it's while awesome to use it as a learning opportunity for stuff you can pick up and *[00:24:00]* move project to project, I think it's important to keep in mind this is one page in terms of, again, learning about performance of choosing your selectors and thinking about the page as a single-page, whole experience. So we're going to do just this for simplicity today. 

And the other thing is in CodePen, it defaults Normalize as a reset, so I've actually turned that off. Keep that in mind, if you choose to bring it into CodePen that if you don't turn that off, that's also a dependency that you'll have to end up adding to your stylesheet. So important to note there. Okay. So since I've turned that off, we will remove the margin that is a default on body. Let me run, 'cause I didn't actually get rid of the, there we *[00:25:00]* go. Okay. We'll set up a `line-height`. Again, all this is personal preference. You literally have a blank canvas to do this project, so we'll keep it simple for now.

Keep forgetting I have to hit Run. Cool! It's beautiful! It's readable! 

**Ben:** Mmhmm! 

**Stephanie:** Right? This is, like, what the platform gives us for free. It's already responsive. You know, we've got semantic HTML so that we can tell, like, the sections. I just had to say that because it's important. *[laughs]* Cool. Alright. So we might add a few more things into our reset, but that'll get us started here.

Okay, so that .container that we saw throughout. Let's look again how that's constructed. *[00:26:00]* So it's always inside of our `<main>` element, and the reason I did that was to make sure if you wanted to add, like, a full-width background, you weren't trying to, like, hack around it by only having the .container class or only having the base element available to you. So in other words, we can use our container truly as a container, and use that to start setting up, like, a `max-width`, or… we'll just start there. I'm fond of using ch units. That's going to map to the width of the "0" character in whatever font it's inheriting from, so keep that in mind. If you nest it down deeper, it will pick up its nearest ancestor's width.

**Ben:** So you're making it 80 characters wide because otherwise, or I guess 80 zeros wide, because otherwise, the text just gets too wide and it's *[00:27:00]* difficult to, like, scan left to right. 

**Stephanie:** Exactly. Yep. So to help with legibility. And we're using it as a max width, so that way, it will still respond down.

And then a personal preference for margin is to use view height units for our vertical margins. View heights usually makes me happy, responsively. And then auto. Okay. So let's do that. And then that'll help us see where we have those different containers structured and what's left outside of them.

**Ben:** So this is 8% of the view height on the top, 8% on the bottom, and then it centers left to right because that's what the auto does. 

**Stephanie:** Correct. So you can see here as I'm changing the height, you can see that height between containers also updating. So it makes it nice and responsive. Because *[00:28:00]* typically, on a mobile device, it would be nice probably to have a little bit tighter space between elements. That just a nice little trick that I've started using. We might come back to one other thing. But I'm cognizant of our time remaining here. 

So we can see that the elements remaining outside… Well, actually we can turn this back on real quick.

Okay. So we've got our containers. We can see the remaining elements that are outside that now didn't get any kind of debugging assistance, 'cause there's neither class or ID on it. So we can see that things have worked as we expected. We can see where we have the additional IDs a little more cleanly now that it's not all smushed together. 

So, if anyone… Let's deal with our `<nav>`, and we can *[00:29:00]* use that to talk about grid a little bit. 

**Ben:** Okay. 

**Stephanie:** Okay. So again, since we just checked and we don't have a class or an ID, that leaves us with just the element itself as our selector. So inside, we just have a standard unordered list with links — list items and links. We might want to, you know, if you don't want to add a background here, we might just add it into our .container class so at least we've kind of aligned it with the rest of our content. 

And then we can either use flex or grid. There's a lot of considerations for that, mostly depending on how you want it to respond. Do you want it to respond sort of intrinsically, being the idea that you don't need media queries, that it just kind of does *[00:30:00]* it? Or do you want it to be kind of more rigidly applied, in which case you might want to set it up in a way that does require media queries to adjust? And with this one, it's a little tricky, I think, because there's quite a few items and they have considerable length. So we'll do this real quick. So let me rearrange so we can see the screen and what we're working on a little better. 

So if we use grid, the quick way… If we initially apply grid, it's going to not look any different. We can inspect to see why that is.

Okay. So by default… Oh, actually, we actually need to nest this for it to work a little better for us. So there you go. *[laughs] Also a matter of [00:31:00]* getting the right selector in there. So we actually are applying grid to the `<ul>` now. Okay. So now each `<li>` is a grid item. You can actually stick — I'm in Chrome, I believe Firefox has the same capability where you can kind of stick this display that pops up. 

So we can see that each list item is a grid element, and by default, those are in row orientation. And so a quick method to flip the orientation, if that's your main goal, is to change `grid-auto-flow` to `column`.

Updating that. So you can see now, they quickly got lined up in a row. However, unlike flex, we do not, for grid, have any way to direct it, *[00:32:00]* just by a single property, direct it to wrap, which is why, for now, flex is often the choice. We can do it with grid. Some of you may be ahead of me in thought or in chat. You can do it with grid-template-columns instead, and be a little more explicit and allow some wrapping behavior. And so the way to do that is `grid-template-columns`. We use the `repeat` function to say, "Do this every time you encounter an item." we use the `auto-fit` keyword. And I always have trouble verbalizing what that does. *[laughs]* But it's going to say, instead of repeat for like three items, it's going to say repeat every time you encounter a new item within the grid. So it lets you be less explicit but still apply those repeated attributes, I guess. 

*[00:33:00]* So, then within this, we nest a minmax function. So I'm throwing a lot of new functions potentially at you. And I have a lot of material on this specific technique, by the way, if you're not quite catching it now. It's actually the very first one on SmolCSS. I've written a lot of tutorials about it. I even have videos about it because it's like magic. It's, like, THE thing that made ME excited to use grid and, like, the biggest immediate benefit that I got from using grid more often in my layouts. So minmax lets us set two values. The first one is the minimum, essentially, allowed value. So again, so I'm in my `<nav>`, so I probably want this to be sort of small. We might have to adjust this. And then a max, often the value that gets put here, to make it truly responsive is `1fr`, where "fr" *[00:34:00]* is a unique unit. I believe it actually stands for "fraction." But if everything is set to `1fr`, then they will all equitably share the space that's available.

Okay. So let's see what it's actually doing, and we can address anything else. Okay! So a couple of things happened here. One, it's automatically created a new line and that's because the available width here, 'cause I have my code editor over here and I actually have the inspector creeping in too, has narrowed it below the threshold where each item could have taken up 15ch. So, in other words, without a media query, you know, that's one piece of grid magic that lets you automatically rearrange your layout. A big difference from flexbox is that, again, *[00:35:00]* those are going to stay a rigid width. So you can see that here, actually. So if you want your `<nav>` to continue to be variable-width based on the elements, then flexbox is still what you're going to want to use. But if this is the behavior you're after — maybe we'll just knock down our min so that they can all fit on the widest viewport, there we go — then, you know, yeah, you might be totally happy with that. Of course, we haven't removed list styles, but once we do that, we'd probably want to add in a grid gap.

I also tend to, personal preference, base everything around rems. If you're not familiar with the "rem" unit or haven't considered why you see it in use a *[00:36:00]* lot lately, it maps 1rem is equal to the base font width for the document. And versus pixels, it's going to adjust if the user has system settings changed to a different font size. 

**Ben:** So, if a user, for instance, with a vision impairment has, like, large text settings, then this will adjust based on, you know, okay, oh, okay. Gotcha. 

**Stephanie:** Yeah! So whereas, currently — I did get a chance to test on a PC recently — pixels will not, at least not as cleanly.

Okay, so I'm just double checking what we had here. I obviously missed something. Oh wait. Okay. I'm like, wait a minute. 

*[00:37:00]* **Ben:** Yeah! 

**Stephanie:** I tried to pluralize that. That's not going to work. Okay. So now my elements are being spaced by a combination of the min that we have in place and also, in between, we're now relying on grid gap versus margin or padding.

So, what I would love, but is currently not in… will not work, is if this minmax could be based on, we have a few other really interesting sizing properties or sizing values available to us. So, for example, `max-content` as well as `min-content`. So `max-content`'s going to stretch as far as the content, and `min-content` is going to shrink the element down to the smallest width, so whatever the longest word is. If it's a paragraph, it's going to shoot that one to that width. And if this worked that way, which it doesn't, *[00:38:00]* and it's not going to — I had that confirmed by somebody on CSS Working Group — then we could get the nice variable-width functionality, and it would be, like, all my dreams come true. I really want that to work, but it doesn't. 

So again, this was a good demo to just quickly walk through some of why grid is awesome, but probably I would recommend still sticking with flex.

**Ben:**  Do you mind if I ask you a couple of questions about grid from the chat? 

**Stephanie:** Yep! 

**Ben:** I have to scroll up. We've got again, we've got some people who are loving watching this thought process. Okay. So the first grid question: "Is subgrid a thing yet that I should worry about at all, where is that still a future stage?" 

**Stephanie:** As far as I know, it is not quite there yet. I don't know if it's off of Can I Use. I know it's actively being worked on. We could also go out to… Yeah, so just *[00:39:00]* Firefox. 

**Ben:** Alright.

**Stephanie:** Looks like it's not even in technical preview yet. But… I don't think I can navigate to it quite quickly enough, but you can actually go see what the CSS Working Group has in draft and is working on if you're interested in those kinds of things. It may not be kind of easily available from browser makers.

**Ben:** We've got another question that's from Codelex. Codelex was wondering whether you would recommend using CSS classes for every HTML element, or is it much better to use like tag selectors such as `<nav>`, `<ul>`… I guess in general, what is your selector strategy where you have control over that?

**Stephanie:** Yeah, excellent question. And it hugely depends on context of the project and also whether I'm the only developer. Like a personal project versus in a team environment. And so as a personal project *[00:40:00]* developer where I am the full owner of the architecture, I'm a big fan of applying styles globally until it doesn't make sense. So, you know, I'm only going to have one `<nav>`, so do I need a class? Not really. You know, things like that. Or setting up my basic, you know, again, if we look back here, if you remove the content, this is, and the `<aside>`s, like, this is the setup I always start with anyway for anything that's going to significantly have content. So in that respect, you know, you'll have a `<header>`, a `<nav>`, a `<main>`, and a `<footer>`. The `<footer>`'s the one that can sometimes get me in trouble, but we can resolve that — because sometimes I'll have a `<blockquote>` or an `<article>` where I also bring in a `<footer>`, since that's allowed — *[00:41:00]* but we can resolve that by using the direct child. That's not quite the right name direct. Anyway. 

**Ben:** But this says any `<footer>` that's directly a child of `<body>`, and not, like, a grandchild. 

**Stephanie:** Exactly. So yeah, if we did just this, then it wouldn't select the ones that were inside of our `<article>`s or anything else. So not too bad of a fix for clarity. You know, definitely, if it brings you clarity in your styles, if it helps you with organization, then absolutely add classes. In a team  environment, or even as I begin to add more componentized styles, I am a fan of kind of a modified version of BEM once I get down to it. 

So as you can see for Style Stage, because I knew it was, you know, I was giving it out there generically to the world, they're not BEM style. They're very functional or maybe *[00:42:00]* kind of categorized style. So it's the `.profile`. This one's an ID, so I didn't add a class. And I did add a `.page-footer` mostly to help you with organization in your styles. But overall, you know, tried not to insert too many opinions just for this particular project because of the idea being it's contributors with many, many different opinions. So trying to provide kind of just enough. And as you can see from the styles, seems like it's been okay for most folks. 

Cool. I know we're not going to have too much more time. Were there any other questions that we can look at? 

**Ben:** I think that's it for now. Again, some people saying that this is, like, a game changer for them. They're really appreciating how the clarity that you're presenting your thought process here.

*[00:43:00]* So what other tricks do you have? How else might you use modern CSS to breathe life into this? 

**Stephanie:** Yeah, absolutely. Okay. So I said I would get to one of my favorite selectors. Let's do that. Okay, this is brand, brand new, like ONLY the latest versions across Safari, Chrome, Firefox, Edge would be included as well. Okay. So if you haven't yet heard of it, there's a new selector in town, called the ":is" selector, and this is like the most magical thing. It's going to literally change every stylesheet you write in the future, because instead of writing h1, h2, h3, blah, blah, blah, basically, and then supplying styles that way, we can completely condense this down *[00:44:00]* and put them inside of :is. So it's saying, "Match any of these selectors within this group." Hence the "is." One important thing to know — so, for example, in this case, let's see what I want to do. So I kind of already added spacing with my .container class, so I don't really have any… Again, article situation, a blog situation, you might do something like this and use it to quickly add a margin-top or something like that. I actually think I have that in my newest demo here in our document sizing. I'm actually going to just copy this over real quick and then talk about it. 

And so, by itself, :is — I might say this incorrectly because it's brand new — if I *[00:45:00]* remember correctly :is has fairly low specificity. But what we can do — So, for example, if, then, after this, I had, like, an article and I scoped it, the article would definitely take precedence even if it was prior to the :is. So, low specificity, not going to override the cascade just by itself. Which can be really good, especially if you're thinking of setting it as a global scale, but then you have a component, you know, it's going to still be easy for you to override it.

The exception is once we start adding compound selectors. So this one just got a little more complex. So what's happening here is, now that I've added an additional qualifier to say that it's not the first child, so not the first h2 or h3 that maybe leads off an `<article>` or an `<aside>`, then *[00:46:00]* that's the only time I want to apply this margin-top. Now, because I have extra… Kind of using all the super correct terms. I need to learn them so I can teach it better! It's just so new! You know, I I've scoped it down more. Then it's going to have, it now has a higher specificity. So it would override, in the previous example, if we had an "article h2" down here, it would override it for specifically ones that are not first child. Hopefully that makes sense. Definitely something to look up later. Learn more about :is. 

But even just with these two styles, let's run this. It's probably not going to see a HUGE difference, but we'll see what happened. So mostly what's happening here is on h1, 2, and 3, I have adjusted the line-height to 1.2. Usually, when things start wrapping, *[00:47:00]* if this was 1.5, you know, it just feels like too much at a larger font size. So that's what that's about, is just reducing that a little bit. Whereas 1.5 is I think actually the WCAG Success Criterion for general legibility of body text. 

And then if we had this scenario, which I don't think we do… Maybe this one, if it's not the first child. Yep. So here we go. You can see that being attached to this h3 because it is not the first child. So there we go. So basically the point of this role is adding a little extra spacing to those nested sectioning headers. 

**Ben:** So the the selector that you've got here, this":is(h2, h3):not(:first-child)", this is, if I'm understanding this correctly, equivalent to "h2:not(:first-child), *[00:48:00]* h3:not(:first-child)". 

**Stephanie:** Yep. 

**Ben:** Which is, like, okay, saves us a bit of characters. But it's especially killer if you have to do, like, that "I want either an h2 or an h3, like, in the middle of an already like verbose selector," I would imagine is where the extra power for this lies.

**Stephanie:** Yes. And the other really interesting feature about this is if you write selectors like this, if one of them is not understood by the browser, the whole rule gets thrown out. 

**Ben:** Mm! 

**Stephanie:** Which can bite you. This is, you know, this is not going to apply in this situation, but if you have rules that, you know, require, like, a WebKit, like, some sort of prefix, and if you combine that with the nonprefixed version, it's going to throw the whole entire rule out for browsers that doesn't apply to. *[00:49:00]* :is doesn't work that way! :is will still apply to the matching elements, which is also very cool. If you're wondering when that situation might actually happen, check out how to style a `<progress>` element. That is one area that one would hit you, 'cause there still is a proprietary selector. At least, last I checked, which was about a month ago. Things seem to be changing super rapidly now, which is also very exciting, especially as we look to use these modern properties. 

I'll say one other thing before we leave this particular rule, is that this is also a really nice progressive enhancement for something like headline styles, right? If this fails, it's just going to be 1.5. Nobody's… That's fine. If this fails, it's just going to be tighter to this element. And again, that's fine. *[00:50:00]* Like, it's safe to use. If you got more complicated with this and it was, like, your layout was depending on it, then, yes, you would need to set up some fallback styles. 

On that note, in terms of contributing to Style Stage, I will do some light checking. I won't completely dig through your stylesheet, but, you know, there's some things that I might notice. I will check it across browser. The latest versions, I won't look at it in older Internet Explorer or something. And I will check it on a real mobile device. By the way, always check on a real mobile device if you have that available to you. You will find things that you don't expect that are not going to show up in — that's obviously not going to work very well — in just trying to spoof it with the inspector. Partially because touch is going to work different than *[00:51:00]* scrolling, right? And if you have different viewport things in place… I've also been hit with overflow that does not show up when I use just inspector, you know, but it does show up on a real device, or occasionally support will be green here but something still breaks. So, always test on a real device if you have it available to you. 

**Ben:** Jared in the chat is saying another fun one is :where, the :where pseudo-selector. "If you need even less specificity, :where is like :is, but always has zero specificity." Huh! 

**Stephanie:** Nice. Yeah, I haven't had a chance to play with that, just because :is has made more sense to my context, and as I mentioned earlier, I'm very conscious of only sharing things that, like, I've had the chance to use and so I can attempt to, you know, share them in kind of good *[00:52:00]* faith that it's okay, basically. 

**Ben:** Alright! Yeah, I know we're getting close to time. I think there's still probably opportunities if there's other things you want to share. And I think we might be able to get to a few last minute questions. If you've got any, please stick them in the chat. Now is the time for that. Is there anything else you wanted to show off for this page? Like, anything else that's really got you excited right now? 

**Stephanie:** Great question. Let's see. I guess, you know, another selector that can come in handy for this project is attribute selectors. So for example, we have a few different kinds of links: ones that are quote-unquote "unique," not just the native link element — our star and GitHub — and *[00:53:00] then the ones that show up down here in this list, I have a class on them. So if we wanted to create a rule just for kind of in-text links, we could say "p a", we can do "li a". But what we really want is to attach to links that don't have a class, so we can do that. We can say link :not([class]*). So this is an element selector. You can use it for any element, including like custom data attributes, if you have scenarios where you're using that. 

I'm going to use — So, one other property I'm super pumped about is text-… Oh, and I'm going to forget which one it is and it's not going to show up. It's super new. Is it text-decoration-offset or text-underline-offset? Can't remember. I think I have it over here *[00:54:00]* though.

**Ben:** When you're creating resources like these, are you in part creating them so that you can come back to them? Because, like, I've found that's one of the biggest incentives for me to, like, blog and that kind of stuff, is, like, I want this snippet out there live, so I can Google it. 

**Stephanie:** Yes. *[laughs]* I constantly go back to these things. I think I joked about this on Twitter recently. I was like, yeah, and so I don't have to Google and/or go diving in my repos to find the thing. 

**Ben:** That's the biggest, like, motivation for search engine optimization is I want to find myself. 

**Stephanie:** Love it.

**Ben:** "What did you know, past Ben??" 

**Stephanie:** Okay, so, here's the correct property. Okay. I'm going to save and then we'll look at what it did. Watch these links. It's going to jump a little bit. *[00:55:00]* You see how it bumped down the completely native underline, our text-decoration: underline. It's now giving it a little more space. Just gives that little boost of, to me, readability — legibility, I should say. And there's a couple other properties that can go hand in hand. We did it quite a bit on this one, so it's actually clearing the descenders, so, like, the tail on the "y", if you're not sure what a descender is. Anyway. 

But it did not apply to our links that have class. So, you know, the inverse of that would be an `<a>` that has a class. So maybe you want to give these, like, a button style or something, you know. So definitely don't discredit attribute selectors. You can do some very sophisticatedly clean work in a hurry using them.

**Ben:** Right. Looks like *[00:56:00]* we did get two questions in the chat. First of all, NastyDirector. "Are there any upcoming CSS features that you're particularly excited about that you'd recommend having a look at?" So, I guess things that aren't out yet but are coming down the pipes. 

**Stephanie:** Yeah. Top of the list, container queries. That is in… What is the correct term? That is… Heh, look, I'm searching my own resource. Okay. "Being prototyped." That's the word I'm looking for. And I need to keep checking on this. I think this is still the current status. So Miriam Suzanne, she is on the CSS Working Group, and this is the actual proposal for container queries. So in other words, being able to define in a media query-like way but based on a container versus the viewport to resize things. So, the key is *[00:57:00]* the container versus the viewport. You know, and that in mind, you know, what we showed with this grid, like, that gets us close and that for me has actually solved a lot of scenarios that I have wanted to container query-like behavior. Another one that I have over here is doing the same thing with flexbox. The difference in behavior for these techniques versus a container query is that this, you're kind of relying on a preset algorithm to do it for you, whereas container queries is going to allow you to essentially set breakpoints on the container and adjust that behavior. So definitely more granular control is what that's going to offer you.

**Ben:** Alright! And then Anthony asks, "If you could be any CSS property, which one would you be?" 

*[00:58:00]* **Stephanie:** Goodness! That's a new one! Oh man, I might have to think on that one and tweet about it later.  Hmm, any CSS property… 

**Ben:** Well, on that segue though, on you tweeting, if you want to get Stephanie's answer, which I'm going to be eagerly awaiting, you should go follow Stephanie all the places. I have put a whole bunch of links in the chat.

Stephanie! This has been fantastic. I've learned so much. Do you ever just, like, watch like a master at their craft and you're just like, "This is incredible"? Like, I've learned a lot. I know the chat has learned a lot. Thank you so much. 

**Stephanie:** Well, thank you so much for having me. I will save this. Obviously we didn't get very designy with it, but I will save it just for reference and I will send that link as well! 

**Ben:** Awesome! Well, thank you. 

Y'all! Chat! If you enjoyed this next week, I'm going to be trying my hand, it's just going to be me. I'm *[00:59:00]* going to see if maybe I can get, like, a camera for my cat as well, so it'll be me and my cat. But we'll be progressively enhancing our way to a rating widget. So, like, selecting, like, 4-star, 5-star rating, that kind of stuff. Trying to go just as barebones HTML, CSS, fun with selectors, as far as I can possibly get without having to bring in JavaScript into that. So that'll play on some of the like modern CSS stuff that we talked about here. So I'm super looking forward to that. Thank you all for joining us today, and have a good one. I'll see you in a week. 

Oh, NightBingo, the name of the cat is Tuna. So we will have the Tuna cam, Tuna-permitting of course. Yeah. So have a good one and I'll catch you all in a week. Bye! 

**Stephanie:** Thanks.