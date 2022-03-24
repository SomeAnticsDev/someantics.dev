---
title: Debugging Web Performance with Patrick Hulce
thumbnailTitle: Debugging Web Performance
hosts:
  - Ben Myers
  - Patrick Hulce
tags:
  - Web Performance
timeOfDay: 1pm
---

Join us as [Lighthouse](https://developers.google.com/web/tools/lighthouse/) CI creator [Patrick Hulce](https://twitter.com/patrickhulce) introduces us to techniques to improve our site's performance!

---
## More From Patrick

- [Follow Patrick on Twitter](https://twitter.com/patrickhulce)

## Transcript

<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all. Happy Tuesday. It is Some Antics day. Today I am joined by Patrick Hulce. Patrick, welcome to the stream! 

<i class="timecode">[00:00:12]</i> **Patrick:** Thank you. Yeah, thanks for having me. 

<i class="timecode">[00:00:13]</i> **Ben:** I'm thrilled to have you on. We met through a local meetup. We're both in the Dallas area, so we both met through the ReactJS Dallas meetup. And I'm excited to have you on because today, we're going to be talking quite a bit about web performance, which is something that you're pretty familiar with. For folks who haven't seen you around yet, would you like to give yourself a bit of an introduction? 

<i class="timecode">[00:00:39]</i> **Patrick:** Yeah, yeah! So, I've always been a web guy. I love JavaScript, I love frontend, and I know a thing or two about web performance. I spent a number of years on the Chrome DevTools team working mostly on a project called Lighthouse, which is a tool for analyzing performance and best practices. We'll talk a little bit about that today. But I was there kind of from the very beginning of like Lighthouse, and got to see it evolve into what it is today and build a lot of fun stuff along the way like Lighthouse CI and other projects. So web performance has been a big part of the last five years of my life or so, so excited to be talking about it today.

And along the way, I've done a couple of other things and started a company and done some, you know, startup work, and move around a lot. But I always find my way back to web and the frontend in some way.

<i class="timecode">[00:01:29]</i> **Ben:** So you've been in this space of, like, performance-based dev tooling, and one of the things I'm really curious about like, is what are the kind of cardinal sins of web performance, or what are the things that you see people getting wrong most often? 

<i class="timecode">[00:01:48]</i> **Patrick:** Yeah, I would say, you know, bundle size is one of the biggest ones. I would say a lot of teams I start talking to have really no idea how much JavaScript they're shipping down to their users. One of the worst ones for a while was actually nasa.gov, which shipped, I think, 26 megabytes of JavaScript down there on their first load. So, thankfully, they fixed that a couple of years ago and they're doing pretty well now. But that's definitely the most common culprit, and that's what really hammers your performance the most in so many ways, both in a kind of first render, because it takes so long to download, and then interaction latency after, which we'll talk about both of those today, how to improve performance and interaction latency. 

<i class="timecode">[00:02:36]</i> **Ben:** Sounds good.

And we actually have a few people in the chat. I see Anthony here. I see Brent. Howdy, howdy. We see ActiveB1t. Justin Noel, who we both know from the meetup. Justin says, "Hey, Patrick! Haven't seen you or Ben in person in a while." Hopefully we'll be able to do meetups in person again soon.

<i class="timecode">[00:02:52]</i> **Patrick:** That'd be great.

<i class="timecode">[00:02:54]</i> **Ben:** So, I do have another question which is going to be maybe a big meaty one. Why is web performance important? Like, aren't we just shaving milliseconds off or anything like that? 

<i class="timecode">[00:03:08]</i> **Patrick:** Yeah, yeah, absolutely. So, I would say that the biggest reason web performance is important is it is about equity, right? When you're analyzing your own kind of website on your powerful dev machine, that's probably hooked up with Ethernet or very solid Wi-Fi, right? The performance is going to be pretty fast, and any changes you do are probably going to shave off, like you said, just a couple of milliseconds. But it's really when you slow all of that down and you slow down the network to kind of a more typical network that not high-powered developer machines have access to, and that the typical user might be coming through — on, you know, say, a coffee shop Wi-Fi or a slow, you know, mobile network — things start to get really slow really fast if you're not careful and paying attention to your performance.

For example, in the example we were talking about, right? Like, even 26 megabytes, it'll feel a little slow on your desktop, but you can still manage to get through the day, whereas that would be practically impossible for someone on 3G to actually use and get through.

So, I would say it's even more important when you are working on essential tools, especially when it's sort of something that someone needs to get through their day, or be able to pay their bill for their, you know, telecom bill or whatever it is, right? Whatever product you're working on, everyone needs to be able to access it, not just with the highest class machine and fastest network.

And the best part is, it trickles down to everyone who already has a fast machine, right? If it's fast on a very slow device on a slow network, it's going to be blazing fast on high-powered devices. And that increases conversion rates, it increases how much time people spend on your site, it increases engagement, and it increases the bottom line of whatever you're working on, too. So not only is it a good thing to do for all the equity reasons, but it also helps sell it upstairs, so to speak, to get increases in revenue, engagement, all those top-level business metrics that a company cares about. 

<i class="timecode">[00:05:05]</i> **Ben:** Good deal! Good deal.

Yeah. With that, I guess maybe we just dive into it. Let me start sharing my screen. First of all, go follow Patrick on Twitter. I don't think you're, like, an incredibly active tweeter? I could be wrong on that, but go follow Patrick on Twitter.

<i class="timecode">[00:05:26]</i> **Patrick:** Not much to say, but when I do, you should listen.

<i class="timecode">[00:05:30]</i> **Ben:** You what?

<i class="timecode">[00:05:30]</i> **Patrick:** I don't have much to say, but when I DO have something to say… 

<i class="timecode">[00:05:34]</i> **Ben:** Mm-hmm. Go follow Patrick on Twitter. Go give him that Some Antics love. 

And then let's take a look at what we're doing today. Do you want to kind of talk through what we've got here? 

<i class="timecode">[00:05:46]</i> **Patrick:** Yeah. So we're going to walk through two different examples. One for general cold-load performance, which is what a lot of people mean when they talk about web performance, and what a lot of tools like Lighthouse, PageSpeed Insights, WebPageTest… a lot of the tooling is geared toward load performance specifically. So we'll have an example we'll walk through and we'll try and figure out what's wrong with it and improve it together.

And then we'll go through another example that's typically kind of left behind by automated tooling that requires a little more manual investigation, and we'll show you how do you do that deeper dive with manual tooling and do that investigation to improve interaction performance. So that's latency on someone clicking or latency on someone typing into a textbox on your page and why is that slow and how do we improve that. 

<i class="timecode">[00:06:34]</i> **Ben:** Good deal! And where should we get started? 

<i class="timecode">[00:06:38]</i> **Patrick:** Yeah! So we're gonna start with load performance. And what you're looking at here, we've got a super simple Hello World page with a green background and a web font loaded from Google Fonts. And the first step in any sort of performance optimization is measuring, because we don't really know how we can improve if we don't know where we're starting from. And so whenever I encounter any page, right, like even this simple Hello World page, and I just want to get kind of a quick scan of how is this page doing, what is its performance like right now, I turn to Lighthouse, which I worked on for a number of years. And that's going to give you a really high-level summary of how the performance is doing.

So we're going to pop over to Lighthouse in Chrome DevTools. So you've got DevTools open here on the bottom right. And Lighthouse is just another panel inside of DevTools. So you should be able to open the Lighthouse panel, and you're given a couple of different options here. We just wanna make sure we'll check mobile device and we'll make sure the performance category is checked off, and then we'll click "Generate report." 

You can see Ben's got accessibility checked here. Lighthouse does a bunch of other awesome stuff, too. I highly encourage you to check out the accessibility and the progressive web app and general best practices advice as well, but for our demo today, we're going to be focusing on the performance section specifically.

<i class="timecode">[00:07:56]</i> **Ben:** Okay. For today, just have performance checked?

<i class="timecode">[00:08:00]</i> **Patrick:** Yeah, yeah.

<i class="timecode">[00:08:01]</i> **Ben:** Cool.

<i class="timecode">[00:08:01]</i> **Patrick:** For today, we'll just have performance checked. 

So what this is going to do is, Lighthouse is going to apply some mobile emulation to your device. It's going to try and load the page as if it were loading from a mobile phone. And lovely, all live demos. There we go, it's kicking in. Here we go. So it's loading the Hello World page under a throttled mobile device, and we're going to get a little score spitting out how we did.

So, not great! This 51 is out of 100. So, Lighthouse is giving us a score out of 100, how fast is this page on a number of different metrics. And if you scroll down here, we'll see a couple of different headline metrics. There's detailed documentation on what each of all of these mean. We're going to be focusing on First Contentful Paint for our optimization here, yeah. So 4.2 seconds, which is pretty slow for something that only prints "Hello World." It doesn't really do anything else.

<i class="timecode">[00:08:58]</i> **Ben:** Yeah.

<i class="timecode">[00:08:58]</i> **Patrick:** You would expect it to be a little faster, even on a mobile phone. So that's red, because we don't want it to be 4.2 seconds. We want it to be much, much faster.

So if you scroll down a little more. We're not going to dive in deep into Lighthouse today. We're actually going to be trying to… yeah,if you go ahead and scroll to the opportunities. That'd be great, yeah. So, diving a little more into how to do this ourselves, but there's lots of good stuff here. Lighthouse has automatically detected some good optimizations we could take to improve the page. And if you scroll down a little bit. Oh, it looks like this is actually coming from a Chrome extension you have installed rather than the page itself, but… 

<i class="timecode">[00:09:43]</i> **Ben:** Axe DevTools, of course.

<i class="timecode">[00:09:45]</i> **Patrick:** Yeah. But that's okay. We can still do some optimizations and still be able to get a good baseline.

So there's lots of good stuff in this report — I encourage you to check it out on your own time — but we'll actually be trying to figure out how we can drive it from a 51 up a little bit without Lighthouse, just doing it on our own through the DevTools themselves.

<i class="timecode">[00:10:06]</i> **Ben:** Good deal!

<i class="timecode">[00:10:07]</i> **Patrick:** Cool. So we got our baseline: 4.2 seconds, a score of 51. Let's go ahead and take a look at how we would debug and deep dive. So we'll switch away from the Lighthouse panel and we'll switch to the Performance panel in DevTools. So if you expand the arrow, there's probably another called "Performance." Awesome.

And so, whenever we're doing any sort of debugging of performance, we really want to throttle the page. So that's what Lighthouse was doing, right? We're slowing down the page artificially, because like I said before, dev machines are really powerful, right? Things are going to happen really quickly. It's going to be really hard to figure out what's happening when if everything's only taking a couple of milliseconds. So by artificially slowing everything down when you're doing performance measurement, you're able to take a good, hard look at what's actually causing the problem, and what's waiting on what, and what's the bottleneck, which is really going to help you do your optimizations and debugging.

So, in the Performance panel, we can do our throttling directly from here, too. So if you click the gear. That's the second gear in the row. Yeah, that one. 

<i class="timecode">[00:11:13]</i> **Ben:** Okay.

<i class="timecode">[00:11:13]</i> **Patrick:** We get this extra panel where we can change some throttling settings. So we're going to slap on some network throttling. We'll change that to 3G Fast, or Fast 3G. And then we'll apply some CPU throttling of 4× just to give a little bit of slowdown. And this is actually what Lighthouse is doing under the hood. It's, it's targeting these same conditions. And then we'll want to load the page and observe it.

So, the way that the Performance panel works is you start recording, you do some action to the page, and then you get to look at the measurement and stop recording. So, Ben just click Record, clicked Refresh. And then now we can click Stop Recording now that the page is all done. 

Yep. It's going to stop recording. It's collecting what's called a "trace," which is just kind of a recording of everything that the browser was doing along the way. And a crash course in what this panel is doing, 'cause there's a lot of information and color—

<i class="timecode">[00:12:10]</i> **Ben:** Yeah.

<i class="timecode">[00:12:10]</i> **Patrick:** —being thrown at you here.

Ben, go ahead and close the console at the bottom, so the "What's New" panel. Just go ahead and tap that away so you have a little more space. Yeah. 

So there's a couple of main things. At the top here, right below our network, we can see kind of this track of time, right? So you can see kind of milliseconds on the top, where it's like, you know, 757, 1757, 2757. That's just time going across the x-axis. And what Ben's mousing over, these are the screenshots of what the page looked like along the way.

Now, if you go down, you'll see a "Network" label, and we can expand that section. So on the left where it says "Network," pop that open. This is the network waterfall. So this is saying all the different requests that were happening along the page load and when they were started and when they finished, right? So that very first one, that's the actual document itself. That's the HTML. And you can see, once we got finished with the HTML, we already started loading this JavaScript file which was referenced in the head of that HTML document. And then once we got that, you can see it kicked off a style.css in that purple. And then after we did the style.css, you can see there's another… oh, that's a Chrome extension. Scroll down. There should be one more. Yeah. Should be some Google Fonts, right? Where Google Fonts was loading Roboto CSS after that.

And then at the bottom, below all our network stuff, we can see that timing. So you see the little "DCL" in blue, "FP" in green, "FCP" in green, "LCP" in green. All those are the timing information about important moments. So First Paint is the first time that the browser painted. First Contentful Paint is the first time any content appeared. And all your key metrics show up in this little bucket. So we can see after all those requests downloaded, then we finally got a paint. So because we slowed everything down, we can see that everything had to wait for those before we could paint, yeah. 

<i class="timecode">[00:14:09]</i> **Ben:** Okay, and just to, I guess, be clear on what's going on, so this is where, like, basically the HTML arrives, more or less, and it's been, like, parsed. This is the first time — like, if we imagine our tab starting as a blank white screen, this is the first time ANYTHING shows up on there.

<i class="timecode">[00:14:29]</i> **Patrick:** Right.

<i class="timecode">[00:14:30]</i> **Ben:** Then this is where our, like, text would appear, is the First Contentful Paint. Then Largest Contentful Paint… is this the biggest change?

<i class="timecode">[00:14:42]</i> **Patrick:** Yeah, so Largest Contentful Paint is the largest element in the viewport. So in our case, it's just "Hello World" because there's only one element, so they're the exact same thing between First Contentful and the Largest Contentful. But if, for example, you had a large article and a big hero image at the top, your texts might appear much earlier than your hero image, and so the First Contentful Paint would be the first time any text showed up, and the Largest Contentful Paint would be when did that hero image finally finish.

<i class="timecode">[00:15:12]</i> **Ben:** Gotcha. Very cool. There's SO much information going on here, but it's all super cool stuff, and I can start to see how, like, you can pick apart some of these things.

Interesting. What is going on down here? What is all of this? 

<i class="timecode">[00:15:30]</i> **Patrick:** Yeah, so this is where you actually spend most of your time when you're debugging JavaScript. So this is what we call a "flamegraph" for the main thread of the page. So if you, yeah, scroll down a little bit in this window so you can get a bigger picture. Perfect.

So this is showing you what was executing at every millisecond in JavaScript. And kind of the taller stacks that you see correspond to a deeper JavaScript stack, right? So the very top is, you know, just "Task," and then you can see "Parse HTML" below it, and then you can see "Evaluate Script," right? So that means at the very top, we had some browser work that's just called "Task" that started with parsing the HTML of the document, which then had to evaluate a couple of different scripts along the way. Inside that "Evaluate Script," we maybe had to compile it and then run some function, which is actually next to it. "Anonymous." Yeah, if you go— yeah.

<i class="timecode">[00:16:27]</i> **Ben:** Okay.

<i class="timecode">[00:16:28]</i> **Patrick:** So "anonymous," that's the root anonymous function. Within that, right, you had different function calls and you can trace down the blocks for different function call names. This looks like minified stuff so we get, like, you know, a, i, o function names. But if you're doing this in dev mode, right? You would get kind of the full function name of what you're looking at.

<i class="timecode">[00:16:48]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:16:48]</i> **Patrick:** I'm guessing this is all from the Chrome extension.

<i class="timecode">[00:16:52]</i> **Ben:** Oh, very much so could be.

<i class="timecode">[00:16:57]</i> **Patrick:** Right. But if we scroll over to after our loader finished, so that should be… yeah, yeah, directly down from there. Exactly. This should be from our loader.js. That's the code of the page itself. So if you go down below that anonymous function. Oh, up one. Up one level.

<i class="timecode">[00:17:21]</i> **Ben:** Okay.

<i class="timecode">[00:17:22]</i> **Patrick:** Yeah.

<i class="timecode">[00:17:22]</i> **Ben:** "stall"?

<i class="timecode">[00:17:23]</i> **Patrick:** Yeah, "stall." Yeah, exactly. So the function "stall" is something that we implemented that is kind of simulating some startup work, right, for our page. And you can see it took around 250 milliseconds for this to complete.

But this is going to be super helpful for our interaction latency in the next page we're going to take a look at. For now, we'll largely focus on the network piece, because that's where most of our slowness came from.

But if you take a look at the style.css, there's almost a perfect gap between when loader.js finished, which is that kind of right little tail, and the style.css started. It is exactly that task, which tells us, hey, it was probably waiting on this task to finish before we could start fetching that stylesheet, and that's what we're going to take a deep dive to look at how to improve. 

<i class="timecode">[00:18:17]</i> **Ben:** Makes sense! Man, that's really cool!

<i class="timecode">[00:18:23]</i> **Patrick:** Awesome.

So yeah, let's dive in and actually see what what's going to happen. So we'll pop back over to our loader.js in Glitch. 

<i class="timecode">[00:18:36]</i> **Ben:** Loader… there we go. 

<i class="timecode">[00:18:40]</i> **Patrick:** Right, so pretty simple. We're stalling for 250 milliseconds. And this is just simulating you've got some stuff going on in your JavaScript, right, that's a fixed start, right? You wouldn't intentionally sit there for—

<i class="timecode">[00:18:52]</i> **Ben:** Yeah!

<i class="timecode">[00:18:52]</i> **Patrick:** —250 milliseconds before doing anything.

<i class="timecode">[00:18:54]</i> **Ben:** This is a stand-in for, like, rendering a whole React application or something like that.

<i class="timecode">[00:19:00]</i> **Patrick:** Exactly, exactly. And then after we do that, we are using document.write() to add a style.css stylesheet into the page, which might seem a little contrived but tends to happen sometimes with tag managers in different pieces of JavaScript or A/B testers, right, that conditionally add stylesheets to the page. 

The big problem with document.write() and doing things like that is it means the browser doesn't know that style.css exists until we've executed a bunch of JavaScript.

<i class="timecode">[00:19:31]</i> **Ben:** Mmmm.

<i class="timecode">[00:19:32]</i> **Patrick:** Where we could have been fetching in parallel, right? So if you can still see in the DevTools down there, we have what's called a waterfall, right? Which, first we had to do everything serially, right? We did HTML, and then we couldn't start downloading the JavaScript until the HTML was done. And then we did the JavaScript. Then we couldn't start downloading the stylesheet until the JavaScript was done, right? We were just chaining this waterfall that takes a really long time, especially on a slow network, to resolve all of those. And what we want to do is try and move all of that up to the front so that we're downloading everything in parallel and it can just execute it when it's all ready. 

<i class="timecode">[00:20:06]</i> **Ben:** Makes sense!

<i class="timecode">[00:20:07]</i> **Patrick:** So that's what we're going to do here with this stylesheet. Basically, we want to remove this document.write() and add that `<link>` directly to our root document.

<i class="timecode">[00:20:19]</i> **Ben:** Okay.

Okay, Glitch autosaves! Thank you for letting me know, Glitch! Love that.

I just kind of pop that in here? 

<i class="timecode">[00:20:28]</i> **Patrick:** Yeah, we're just gonna pop that into our `<head>`. Perfect. 

Great. So now we can go ahead and if you click that little refresh button to the right of the record. Yeah, that one. It's actually going to do both things at once. It's going to start recording, it's going to reload our page, and then once it's done, it'll stop recording automatically—

<i class="timecode">[00:20:44]</i> **Ben:** Nice, okay.

<i class="timecode">[00:20:45]</i> **Patrick:** —so you can take a look at the load performance.

<i class="timecode">[00:20:47]</i> **Ben:** It's very nice.

<i class="timecode">[00:20:51]</i> **Patrick:** Awesome. So now we can see style.css is loading at the same time as loader, instead of serially. So we've reduced our paint time considerably. We started around 4.2, and let's take a look at where we are now. You might have to make it a little bigger to see those timings.

<i class="timecode">[00:21:08]</i> **Ben:** Yeah. Okay. 

<i class="timecode">[00:21:14]</i> **Patrick:** Yeah, so it looks like now we're at, like, 3.5 or so. So, shaved off a solid 700 milliseconds to get done.

Scroll down inside the network. There should be a few more things happening after style with those Google Fonts that we want to fix, too. But I think you might have them cached, which is why it's…

<i class="timecode">[00:21:37]</i> **Ben:** Mmm!

<i class="timecode">[00:21:37]</i> **Patrick:** …very small.

<i class="timecode">[00:21:38]</i> **Ben:** Is there a good way to reload without the cache?

<i class="timecode">[00:21:42]</i> **Patrick:** Yeah, actually, great question. So if you pop over to the Network tab, you can check the "Disabled cache" button, or checkbox. It's a little bit… it's in the top row.

<i class="timecode">[00:21:54]</i> **Ben:** Ah, yes.

<i class="timecode">[00:21:54]</i> **Patrick:** Yep, right there.

<i class="timecode">[00:21:55]</i> **Ben:** And then I can go… okay, cool, cool, cool.

<i class="timecode">[00:21:59]</i> **Patrick:** So we might actually get a little worse than 4.2 if we were doing the original with the cache on. But we'll take a look at it and then see. 

Alright, there we go. Yeah, so now you can see that Google Font loading as soon as style.css comes in. And then below that, we probably have…

Oh, it actually got shoved up, perhaps. Yeah! Yeah, that one. So we've got two more waterfalls, still four layers deep, to load that Google Font. So, we're going to take a look at why our Google Fonts are waiting on that stylesheet by popping open that style.css to try and eliminate this extra hop, too.

<i class="timecode">[00:22:50]</i> **Ben:** Okay. So, I see that we kick it off immediately with an @import and, thinking about this, the stylesheet here did not load immediately, right? Because it had to be linked in with a `<link>` tag. So we have to wait for the browser to download and parse the CSS stylesheet before it even knows that it's going to need the Google Fonts.

<i class="timecode">[00:23:14]</i> **Patrick:** Yeah, exactly. 

<i class="timecode">[00:23:15]</i> **Ben:** Gotcha!

<i class="timecode">[00:23:19]</i> **Patrick:** So, any ideas what we can do to fix this?

<i class="timecode">[00:23:22]</i> **Ben:** We could bring this one in with a `<link>` tag as well?

<i class="timecode">[00:23:26]</i> **Patrick:** Boom, you got it. It's exactly what we're gonna do.

<i class="timecode">[00:23:29]</i> **Ben:** Alright!

Remove these – oop. Not that though. I want that. Then… habit. Okay, is it…? What is the…?

It'I think Google Fonts works as a stylesheet, right? So I should just be able to do exactly like this.

<i class="timecode">[00:23:54]</i> **Patrick:** Yeah.

<i class="timecode">[00:23:55]</i> **Ben:** Make sure I've got all the syntax right. That looks right to me.

Okay. Give it another whirl, I guess!

<i class="timecode">[00:24:21]</i> **Patrick:** Awesome. So yeah, now that Google Fonts stylesheet is loading in parallel with our other two things and we've flattened most of our waterfall to shave off almost that entire extra second and a half that we were getting. 

<i class="timecode">[00:24:35]</i> **Ben:** Okay, so as we're flattening this waterfall… like, it makes sense that having a chain of things that are all happening, like, serially where one dependency calls in another dependency which calls in another dependency… it makes sense to me why that would be a problem, but is it a problem to have too many things going on at once? Like… could we in theory keep stacking these things or is there a point where that gets to be a problem in and of itself? 

<i class="timecode">[00:25:02]</i> **Patrick:** Yeah, so you definitely wanna watch out for everything you're bringing in. For all things that we're flattening here, you also want to be asking yourself, "Do we even need this?" Right? Like, there's definitely a point at which you don't want to have too much going on at once.

For approaching performance optimization in general, I usually like to come at it with two different angles. The first one is how do we optimize what's here without really affecting any of the behavior, and then the second phase is what can we actually eliminate entirely to really reduce that. With this part of load for this toy example, we're just sort of assuming all of these are necessary.

<i class="timecode">[00:25:41]</i> **Ben:** Mhmm.

<i class="timecode">[00:25:41]</i> **Patrick:** But this last step at the end is going to say… right now, the Google Font is loading with a font display property that allows paint to happen before. But if we go into that declaration, so back over to that `<link>` CSS, and we add a query param. Oh, sorry, in the index.html, just in the link tag.

<i class="timecode">[00:26:10]</i> **Ben:** Oh, okay, yeah.

<i class="timecode">[00:26:11]</i> **Patrick:** Yeah. So in the href here, if we add…

So, right now we have, you know, query "family=Roboto." We're going to add "&display=block," and we're going to see what happens.

<i class="timecode">[00:26:28]</i> **Ben:** Okay. And yeah, let me actually, I guess, do a refresh here. We'll do the full flamegraph and everything, but I just wanted to see what would happen. So nothing showed up, and then everything did. And if I rerun this…

Is there something different here that I should be looking for?

<i class="timecode">[00:27:14]</i> **Patrick:** Oh, so this trips me up all the time. The timeline at the top with all the milliseconds that you see.

<i class="timecode">[00:27:23]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:27:24]</i> **Patrick:** And if you scroll, if you go a little bit more vertically, there are these little gray handlebars. Yeah, so move your mouse a little up.

<i class="timecode">[00:27:35]</i> **Ben:** Up.

<i class="timecode">[00:27:36]</i> **Patrick:** Up, up. Yep, yep, right there. And then – no, no. Yeah. And then left.

<i class="timecode">[00:27:40]</i> **Ben:** Left.

<i class="timecode">[00:27:41]</i> **Patrick:** Left, left, left, left, left.

<i class="timecode">[00:27:44]</i> **Ben:** Oh, here!

<i class="timecode">[00:27:44]</i> **Patrick:** Stop, yeah. That little gray handlebar controls what you are seeing, the scale. And so very frequently what happens is that the bar that you see doesn't line up with something because it's automatically changed the scale here. So if you drag that all the way to the right. Now what we're looking at aligns perfectly with the timeline at the top.

<i class="timecode">[00:28:05]</i> **Ben:** Mmmm!

<i class="timecode">[00:28:05]</i> **Patrick:** So, this has kind of tripped me up quite frequently. But now you'll see we couldn't paint any of the text until that font finished loading, right? So it was blank, and then it appeared after the font. Right? So if you're ever looking at something and very confused about, like, why your performance isn't measuring up, always check those gray handlebars at the top because sometimes they misalign and give you an impression something's happening when it's not.

But yeah, so that's the problem that we're facing right now when font display is block. And this is one of those maybe we can do better, right? Maybe we can change the behavior of this page—

<i class="timecode">[00:28:43]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:28:44]</i> **Patrick:** —and make it so this font is, say, optional! If it's available, we'll use it. But if not, we don't want to hold up the loading of the page. And so that's what we'll do back in that declaration where we said "display=block." We're going to change that to "optional" and see what happens.

<i class="timecode">[00:28:59]</i> **Ben:** "display=optional," like this?

<i class="timecode">[00:29:02]</i> **Patrick:** That's right. 

<i class="timecode">[00:29:03]</i> **Ben:** Okay.

I'll… go here.

Okay, and so this is just going to say, like, "If you can get the font assets, go ahead and use them, but up until you get that, like, just feel free to default to whatever font it would be otherwise"? 

<i class="timecode">[00:29:28]</i> **Patrick:** Right, yeah. So when you declare a font family, you can say kind of a series of fonts that you want. You can say "Use this specific font, and if you can't use that, use this other font. If you can't use that, use anything without serifs, right, in your font, sans-serif."

<i class="timecode">[00:29:46]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:29:47]</i> **Patrick:** And so when you declare what fonts you want text to use. And you can see now it's actually seamless. We never had that moment where we didn't paint anything or where it was blank. And if you drag the gray handlebars again, we can see that as soon as that stylesheet was finished, we actually were able to paint the text, rather than when…

Yeah, so it's a little hard to see because we were actually on the page before.

<i class="timecode">[00:30:21]</i> **Ben:** Mm.

<i class="timecode">[00:30:21]</i> **Patrick:** So one other helpful tip I have is, in that other page, navigate in the address bar about:blank.

Right. Now we'll go back to our DevTools, hit record. Oh, well, no, we'll want to do the full record, 'cause we're not refreshing about:blank.

<i class="timecode">[00:30:44]</i> **Ben:** Oh, right, okay. Got it.

<i class="timecode">[00:30:45]</i> **Patrick:** We'll hit record and then we'll paste our other URL. And then we'll see what it looks like.

Beautiful. Now you can stop.

Then we drag our handlebars out, just to make sure we're aligned on everything.

I think that was the left one. There are two next to each other. Drag the left one all the way. And then drag the right one all the way. 

<i class="timecode">[00:31:32]</i> **Ben:** Gotcha. Like this. 

<i class="timecode">[00:31:35]</i> **Patrick:** You actually want to drag the left one, like, all the way to the front, just so that… like, if it's not the full thing, it won't be.

But now you can see we painted before the font finished downloading, right? So that's the exact moment that we painted. And if you trace that down, you can see the font was still downloading. That green one.

<i class="timecode">[00:31:54]</i> **Ben:** Yeah! The font downloaded about here, but even back here, we still have text. 

<i class="timecode">[00:32:01]</i> **Patrick:** Exactly.

<i class="timecode">[00:32:02]</i> **Ben:** Very neat.

Okay!

<i class="timecode">[00:32:06]</i> **Patrick:** So, most of this is working around the finickiness of DevTools and getting to know how to actually visualize some of this stuff. 

<i class="timecode">[00:32:13]</i> **Ben:** Totally, totally. 

<i class="timecode">[00:32:16]</i> **Patrick:** Awesome.

Cool. So as a final step, we've made a bunch of optimizations. Let's actually run Lighthouse on it again and see how we're doing.

<i class="timecode">[00:32:26]</i> **Ben:** Yeah!

<i class="timecode">[00:32:26]</i> **Patrick:** So, pop back over to Lighthouse.

<i class="timecode">[00:32:29]</i> **Ben:** And then… is there a good way to rerun?

<i class="timecode">[00:32:33]</i> **Patrick:** The plus button at the top left will start a new one.

<i class="timecode">[00:32:37]</i> **Ben:** Got it.

<i class="timecode">[00:32:38]</i> **Patrick:** Yup. Perfect.

So we had 51 and 4.2 before, and let's see how we're doing. 

Oh!

<i class="timecode">[00:32:53]</i> **Ben:** Huh!

<i class="timecode">[00:32:54]</i> **Patrick:** Hold on. Scroll down a little bit? 

<i class="timecode">[00:32:59]</i> **Ben:** Did we mess something up? I feel like we've messed something up. 

<i class="timecode">[00:33:04]</i> **Patrick:** Oh, turn off the throttling. Turn off the throttling. 

<i class="timecode">[00:33:07]</i> **Ben:** Oh! Over here in the Network… 

<i class="timecode">[00:33:09]</i> **Patrick:** Yeah, in the Performance tab.

<i class="timecode">[00:33:11]</i> **Ben:** The Performance tab, got it.

<i class="timecode">[00:33:12]</i> **Patrick:** So the simulated throttling… yeah, basically now we're doubling it because Lighthouse simulates throttling it. 

<i class="timecode">[00:33:17]</i> **Ben:** Ohhh, okay. So it was doing, like, a 16× CPU throttle. 

<i class="timecode">[00:33:23]</i> **Patrick:** Yeah! Let's try it one more time. Oh, actually one thing else you want to do is you want to make sure that we're not including the window. So right now… okay, that's a little better.

Alright, so what's left here, right? We improved 7 and we shaved off a second of our First Contentful Paint. But the first time, we had the Google Fonts cached and we have this extension that's also causing a lot of startup problems.

<i class="timecode">[00:33:52]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:33:53]</i> **Patrick:** So, those two… if we had this completely clean profile, we should expect that number to be green at this point, and it would have started in a happier place. But we do see the full second improvement and then multiple points, even with all that extra stuff going on. So, we'll call it a day, but if you end up with a 58, I would encourage you to keep going and figure out what's up with the page and keep…

<i class="timecode">[00:34:17]</i> **Ben:** Yeah, I think I'm gonna, real quick, check my extensions I've got just so that we can see that — ooh. Yeah. Just so we could see something that looks a little cleaner. What is the best way to…? Oh, "Manage Extensions." Probably just… disable this.

<i class="timecode">[00:34:41]</i> **Patrick:** Yeah, you can temporarily turn it off, yeah. Yeah, Axe is probably the biggest one. LastPass also adds quite a bit. 

<i class="timecode">[00:34:49]</i> **Ben:** Alright. I don't think those are going to cause any impact. Okay. Let's try this again sans…

<i class="timecode">[00:34:56]</i> **Patrick:** We'll try it one more time.

<i class="timecode">[00:35:00]</i> **Ben:** Sans all of the staff changing in my setup there.

76! Far better.

<i class="timecode">[00:35:10]</i> **Patrick:** 76. Okay. Much better.

<i class="timecode">[00:35:13]</i> **Ben:** First Contentful Paint is two seconds.

<i class="timecode">[00:35:14]</i> **Patrick:** Still a lot of total blocking. Oh, right, right. 'Cause we have our stalls that were still there. So yeah, with our stall in our application, that radically improved the time here. And you can see from the waterfall that we've flattened that four-deep into just one layer of roundtrip requests.

<i class="timecode">[00:35:30]</i> **Ben:** Mm-hmm. Cool!

Is there more you wanted to show off, Patrick?

<i class="timecode">[00:35:38]</i> **Patrick:** Not for load performance. I think we can move on to interaction. 

<i class="timecode">[00:35:43]</i> **Ben:** Sounds good! Let's do some interaction.

By the way, chat, if you've got any questions, feel free to let us know. Patrick, I forgot to give you a link to the chat.

ActiveB1t says, "I personally disable Axe in incognito mode and then run my performance tests in incognito." Seems like a good way to do it to get something reasonably clean. 

<i class="timecode">[00:36:04]</i> **Patrick:** Yeah. In fact, the Lighthouse error message will typically tell you to run that. I'm not sure why you weren't getting it, actually. I'll have to file that bug with the current Lighthouse folks. But normally when you run with an extension, it gives you a big fat warning that says, "Hey, extensions were interfering with your page load. Consider running in incognito," or something like that. 

<i class="timecode">[00:36:25]</i> **Ben:** Good deal! Yeah. Shall we move on to some interaction performance? 

<i class="timecode">[00:36:32]</i> **Patrick:** Yeah, yeah, let's do it. So we're going to pop open the interaction.html. And then over on your page with your preview, just append "/interaction.html" to that. We'll take a look at the page itself.

So, here we're walking through everyone's favorite rendering benchmark from 2016, a giant list of items. It seems like for a while, every framework was trying to compete on how we can render large, large lists of items efficiently. So this is what we're gonna take a look at.

We'll be focusing on a couple of things. The content of the list isn't super critical. We can think of it as just a long list of commits to a hypothetical Latin codebase from some Lighthouse contributors and other folks around web perf.

And there are a couple of things that are kind of slow that we need to take a look at. So the first is typing a message. So if you put your cursor into the textbox and just, you know, mash on the keyboard, try and type something.

<i class="timecode">[00:37:36]</i> **Ben:** Ooooh.

<i class="timecode">[00:37:37]</i> **Patrick:** You'll see that it's kind of jerky and very slow. It's hard to come across in the, you know, the stream, but I'll let Ben attest to how that feels.

<i class="timecode">[00:37:48]</i> **Ben:** There were definitely a few moments where I noticed, like, a just a few milliseconds hiccup there. It was not as clean as I expected. Actually, I wonder if…

I have a thing here that lets me…

You can see that these things are not totally in sync as I type.

Look at that. KeyCastr for demos. So good.

But yeah, those two things, my typing and the textbox, were not necessarily in sync. The textbox definitely froze for just a little bit every once in a while. 

<i class="timecode">[00:38:22]</i> **Patrick:** Awesome. So that's one problem. And if we actually throw some throttling on it, we can probably make it even more apparent, right? Whenever we're on a high-powered dev box, right? We can go to the Performance panel and throw some throttling, just to get what it would feel like if we were on something a little slower. So if we throw…

Yeah, you can throw network throttling on there, too. Well, actually it won't matter. 

<i class="timecode">[00:38:43]</i> **Ben:** Do I need to refresh the page since I've changed that, or should it update automatically? 

<i class="timecode">[00:38:47]</i> **Patrick:** Nope, you don't need to. It should just update automatically.

So now if you try and type in there…

<i class="timecode">[00:38:53]</i> **Ben:** Did I type in the right place? Okay. Wow!

<i class="timecode">[00:38:57]</i> **Patrick:** It's just that slow.

<i class="timecode">[00:38:59]</i> **Ben:** Wow! Oof! Oh, that is rough. Is it going to think about it? It's thinking about it. 

<i class="timecode">[00:39:08]</i> **Patrick:** There we go. So, much more painfully obvious, right, that there's something, some performance problem going on here that we need to take a look at. So that's one thing that we're going to take a look at.

The next is, go ahead and click that "Add One More" button. Leave all that text in there.

<i class="timecode">[00:39:26]</i> **Ben:** I already have. Okay!

<i class="timecode">[00:39:28]</i> **Patrick:** Oh, okay. There you go!

<i class="timecode">[00:39:29]</i> **Ben:** Yeah!

<i class="timecode">[00:39:30]</i> **Patrick:** Really slow, painful update to be able to add another item to this list.

<i class="timecode">[00:39:35]</i> **Ben:** Yeah, let me try… I'm just going to put it in "howdy," and then I will… okay, so I'm clicking "Add One More" right now.

Oh, the suspense. There we go.

<i class="timecode">[00:39:50]</i> **Patrick:** There we go. <i class="brackets">[chuckles]</i> Very slow.

So those are the two pieces we're going to take a look at. And just like before, right? The main thing we want to do, we don't know how it can get better until we… measure! So we'll start with measuring. Based on what we did last time, Ben, where do you think we would start with trying to measure how slowly things are?

<i class="timecode">[00:40:10]</i> **Ben:** So, I would… let's see. I would need to record this. Because we're not doing loading, we're doing interaction, I would need to do record, and I would come in here and I would just select this stuff. I would type in a bit here a few times maybe? I don't know if you would probably recommend getting a more stable message in there or something like that, that we could test over and over again. I click in there. Seems to be done. Stop recording.

<i class="timecode">[00:40:54]</i> **Patrick:** Awesome. So, a lot of CPU work going on, right? Whenever we see some solid orange like that, that means there's a lot of JavaScript being executed basically the entire time. And if we go down to that flamegraph from before — and you can actually collapse the network, we're mostly done with that from the first page. Yeah. So, you can zoom in by… if you hold Command on your keyboard and you use the mouse wheel, you should be able to kind of scroll in, zoom in a little bit. So we can see each one of these is an individual keypress that you did.

<i class="timecode">[00:41:31]</i> **Ben:** Oooh.

<i class="timecode">[00:41:32]</i> **Patrick:** And each one was taking 350 milliseconds, roughly, or 300 milliseconds, 400 milliseconds for every single time you press the key, which is why it felt so awful, right? You mash on the keyboard. Suddenly you're waiting, you know, 15 seconds for all of that to finish.

<i class="timecode">[00:41:47]</i> **Ben:** That's rough!

<i class="timecode">[00:41:49]</i> **Patrick:** That's definitely one thing we need to fix. So that's kind of our baseline, like 400 milliseconds for a keypress. And if you scroll to the end, we'll probably see where you clicked that button. Scroll a bit more. Yeah, over there.

Yeah. Yeah, so that… yeah. Right before that. Yes. So that handler, if you zoom in at the top of that one, so Command scrolling. Yeah, so this was our click. 1.4 seconds to actually get a response from that click. And this is what we're going to try and optimize. We got, like, a 400-millisecond keypress and then, like, a 1.4-seconds click that we're going to try and start with optimizing.

<i class="timecode">[00:42:30]</i> **Ben:** Okay! Seems like a low bar to clear, I think. 

<i class="timecode">[00:42:37]</i> **Patrick:** <i class="brackets">[chuckles]</i> Exactly. And we're going to try and get that down to feel much more like what it felt like without any throttling.

<i class="timecode">[00:42:44]</i> **Ben:** Alright.

<i class="timecode">[00:42:45]</i> **Patrick:** So, we got a couple of things. Just to give you a tour of what's going on here. We got standard React, ReactDOM, and we're using Babel so we can just use some JSX in the browser without worrying about anything so it looks kind of familiar. And most of our logic is happening in that script.jsx, if you want to open up that script.jsx.

And we have kind of this Row that's representing each individual row. It has a couple of table cells with an image and some table data. Despite all its flaws, we do at least have some alt text. Always, always have some alt text in there, folks, when you have your image. And we have a bunch of these rows organized in a grid, right? So we have a table and a bunch of rows in our table, and for each of them, each of the rows of data, we're returning a row element.

And then if the root of our components, right, we have sort of our header with our "Commits from around the world," the message textbox input, and then the button to generate a row and add it to our data.

So, if you want to pop over back to the DevTools. And let's go take a look at one of those keypress events that were really slow. Just scroll on over and zoom in to one of those. 

<i class="timecode">[00:44:09]</i> **Ben:** Okay. Command, scroll. Take a look at one of these. Okay. 

<i class="timecode">[00:44:13]</i> **Patrick:** Yeah. Then scroll down a little bit.

Oh, okay. Sorry. I jumped ahead a little bit. Let's go to the click first, 'cause I'm going to do a little crash course in how React works before we dive in here. 

Yeah. So, yeah. Perfect. So, if you look just below, kind of follow the stack trace down until you hit renderRootSync and commitRoot.

<i class="timecode">[00:44:46]</i> **Ben:** renderRootSync.

<i class="timecode">[00:44:47]</i> **Patrick:** Right there. So that's taking about 360. That's about the same as what we had before in our keypress, right? It was around 380, 360, 400 milliseconds, was what we were seeing there. And then there's this second phase, right to the right of it called commitRoot.

So a crash course in what React does. So React is a virtual DOM-based framework. A lot of frameworks that are virtual DOM-based views are also virtual DOM-based. And what virtual DOM means is we're basically keeping a representation of what that DOM should look like each individual element on the page in JavaScript memory, right? That's your React component tree. So in our example, we had the app, then we had the grid, then we had rows, right? That's our React component tree. And this has all the components that are in JavaScript. And whenever you're updating those, the JS memory version, that's the renderRoot, right? That's the render step. That's going through the logic and figuring out, "Okay, I need a thousand rows, and each of these rows should have these virtual items."

This second bit called commitRoot, that's the next phase where React says, "Okay, I have this JavaScript version. How do I turn the DOM into that JavaScript representation of what I'm looking at?" Right?

And so in the click example, we've got a lot of work happening in both. We got, like, 400 milliseconds on renderRoot, and then we've got, like, one full second in commitRoot.

So these two phases are different types of work that you have to investigate slightly differently. So our app is having trouble with both of them, but we're going to focus on this renderRoot bit first. And that's what the keystroke is actually suffering from there. There wasn't this huge commit problem on each individual keypress. So we're gonna focus on that first.

Okay. Crash course aside. Did that make sense, Ben?

<i class="timecode">[00:46:35]</i> **Ben:** Yeah!

<i class="timecode">[00:46:35]</i> **Patrick:** Any questions on this? 

<i class="timecode">[00:46:37]</i> **Ben:** I think I'm good with that. Chat, again, if you've got any questions, if you need any clarification, feel free to ask your questions and I will relay them to Patrick. But I think we're probably good.

So you said first we want to untangle the knots for renderRoot? 

<i class="timecode">[00:46:57]</i> **Patrick:** Exactly, exactly.

So, I noticed when you were popping your extensions, it looks like you had the React DevTools. Do you have that already installed? 

<i class="timecode">[00:47:05]</i> **Ben:** Yes, I do.

<i class="timecode">[00:47:06]</i> **Patrick:** Awesome.

<i class="timecode">[00:47:06]</i> **Ben:** Let me bring that one back, huh?

<i class="timecode">[00:47:08]</i> **Patrick:** Yeah. Yeah, and let's bonus do a little deep dive of what React thinks of this, too.

<i class="timecode">[00:47:17]</i> **Ben:** Okay, so now that, like, all my extensions are disabled, it just hid the thing. 

<i class="timecode">[00:47:22]</i> **Patrick:** Yeah, you can go to, yeah.

<i class="timecode">[00:47:24]</i> **Ben:** There we 

<i class="timecode">[00:47:24]</i> **Patrick:** are!

<i class="timecode">[00:47:25]</i> **Ben:** Yeah, there we go. Bring this one back in.

<i class="timecode">[00:47:27]</i> **Patrick:** Yeah, just enable that one back on.

So what this does, if you go to your DevTools… you'll have to close and reopen your DevTools.

So they give you this "Components" and "Profiler." We're going to focus on the profiler piece for our performance optimization, but the components is super, super exciting too. So we're going to redo that same little piece of interaction, Ben. Same idea. We're going to start profiling, we're going to type, like, "asdf" into the textbox, and then we'll click the button.

<i class="timecode">[00:48:11]</i> **Ben:** Come back here and stop. 

<i class="timecode">[00:48:13]</i> **Patrick:** Yep. So we can see…

Oh, go to our Performance tab. I think our throttling disappeared. 

<i class="timecode">[00:48:20]</i> **Ben:** Oh, yeah. Okay, 4× throttling.

<i class="timecode">[00:48:22]</i> **Patrick:** Sorry.

<i class="timecode">[00:48:23]</i> **Ben:** No, you're good, you're good. Good to see kind of those workflows and caveats there.

Oop. Actually, let me just completely reload this. Profiler. Oof. Okay, I will need to reopen this. Oh, goodness. And then go to the Performance tab, add our throttling, go to the Profiler tab, start profiling. Okay. 

And add one more. It's going to think about it. It really is! Okay. And then…

<i class="timecode">[00:49:14]</i> **Patrick:** There we go.

<i class="timecode">[00:49:16]</i> **Ben:** We can… 

<i class="timecode">[00:49:17]</i> **Patrick:** Yep.

<i class="timecode">[00:49:17]</i> **Ben:** Hm!

<i class="timecode">[00:49:18]</i> **Patrick:** Oh shoot. If you go ahead and… it looks like… go ahead and refresh the page. Yeah, just, we'll need some fresh data. There we go.

<i class="timecode">[00:49:29]</i> **Ben:** Oh, okay. Got it. 

<i class="timecode">[00:49:32]</i> **Patrick:** Yeah, my… yeah, okay. Perfect.

<i class="timecode">[00:49:39]</i> **Ben:** Alright.

<i class="timecode">[00:49:39]</i> **Patrick:** Okay.

<i class="timecode">[00:49:40]</i> **Ben:** We good with this? Does this work?

<i class="timecode">[00:49:42]</i> **Patrick:** Yeah, good here. This works.

So, what's going on here, right? It looks like this is even worse than our 300 milliseconds before. But React Profiler is giving you all the insight into that render component — or, sorry, not the render component, but the render portion of our delay, right? We had both problems with render and commit. Commit is internal to React, right? That's taking whatever you gave it in terms of the in-memory elements and then forcing that structure into the actual DOM. And what the profiler is giving you is all of your userland component slowness, right?

So this is… right here, the render portion of what's taking so long to render. And you can see rerendering the App… when we rerender App, we rerender the entire Grid even though, in the case of those keystrokes, we're not touching Grid yet, right? We're not doing anything with the Grid until we click that button. And so for each of the keypress latency, we really don't want to have to rerender all of Grid…

<i class="timecode">[00:50:44]</i> **Ben:** Mmmm.

<i class="timecode">[00:50:45]</i> **Patrick:** …every time you press the keystroke. But that's what's happening, right? In the profiler, we can see that, you know, only 9 milliseconds of that 700 milliseconds was actually spent in the App itself, and all the rest of that, you know, 690 came from our Grid.

One other thing for the profiler just to, while we're here… you can see "1 / 6" and then a couple of different bars and some arrows. This is React telling you about all the different renders that happened in the app. So we typed "asdf" and then clicked the button twice, so there's six entries. There's one for each keypress and then one for each of the button clicks.

<i class="timecode">[00:51:22]</i> **Ben:** Mm!

<i class="timecode">[00:51:22]</i> **Patrick:** Right? So you can cycle through all of these different ones and see, for each individual interaction, how long did each of it take. 

<i class="timecode">[00:51:31]</i> **Ben:** Gotcha. Okay! 

<i class="timecode">[00:51:34]</i> **Patrick:** Awesome.

So, for this next piece, right? We're just gonna try and optimize that keypress and make sure that Grid doesn't rerender when all of our app rerenders. And so for this case, right? What happens when you press the key is that onChange fires and changes the state, right? And that's what retriggers App to render, causing Grid to rerender.

And this is a common enough problem. React actually has a perfect solution for this exact situation where we want Grid to not rerender if its data didn't change, right? None of our props to Grid are changing when we change the message, so there's no need for it to rerender. And it's called React.memo. And so we're gonna run our Grid component through React.memo and use the memoized version. 

<i class="timecode">[00:52:23]</i> **Ben:** Okay!

<i class="timecode">[00:52:24]</i> **Patrick:** That's it.

<i class="timecode">[00:52:25]</i> **Ben:** So how would you recommend I do this?

<i class="timecode">[00:52:28]</i> **Patrick:** So my favorite pattern, I add an underscore at the end of that Grid components, so it would be called "Grid_." And then just below it, I would say, "const Grid = React.memo(Grid_)." There you go, exactly.

<i class="timecode">[00:52:50]</i> **Ben:** Okay!

<i class="timecode">[00:52:50]</i> **Patrick:** Perfect. And now we can just retry! Let's see what happens.

Don't worry about React being defined. It is defined. It's just Glitch doesn't…

<i class="timecode">[00:52:59]</i> **Ben:** Oh, I see.

<i class="timecode">[00:53:00]</i> **Patrick:** So now we're going to try it again. We're just going to refresh our page and this time we're going to do this recording in the profiler with just pressing the key once. So just click record and type a character in your message.

<i class="timecode">[00:53:25]</i> **Ben:** Oh, did I…?

<i class="timecode">[00:53:25]</i> **Patrick:** Much faster already.

<i class="timecode">[00:53:27]</i> **Ben:** Yeah!

<i class="timecode">[00:53:27]</i> **Patrick:** No, no, that's perfect, that's perfect.

<i class="timecode">[00:53:28]</i> **Ben:** Cool.

<i class="timecode">[00:53:29]</i> **Patrick:** Yep, awesome. We went from, like, 700 milliseconds down to 15 milliseconds. And if you click on that "Grid_ (Memo)," you can see, did not render.

<i class="timecode">[00:53:40]</i> **Ben:** Cool!

<i class="timecode">[00:53:40]</i> **Patrick:** Right. So, we avoided rendering all of Grid, and now we're all set for our keypresses.

<i class="timecode">[00:53:48]</i> **Ben:** Good deal! Yeah, that's awesome. Already a huge lift and I'm sure that that means that… just kind of experientially, because I always feel like these things should tie back to actual, like, lived user experience. If turn on KeyCastr again and I just type in here, like, I'm not noticing any latency. It's fairly responsive.

<i class="timecode">[00:54:14]</i> **Patrick:** And this is with throttling on. Yeah.

<i class="timecode">[00:54:18]</i> **Ben:** You what?

<i class="timecode">[00:54:18]</i> **Patrick:** Absolutely.

<i class="timecode">[00:54:19]</i> **Ben:** Oh, yeah.

<i class="timecode">[00:54:19]</i> **Patrick:** This is with throttling on. Not even without the throttling. So we've reduced that 700 milliseconds down to about 9 or 10.

<i class="timecode">[00:54:28]</i> **Ben:** So good!

<i class="timecode">[00:54:30]</i> **Patrick:** Cool.

But we still have another problem. We've introduced a performance cliff where Grid's performance hasn't gotten any better. We've just avoided dealing with its problems when we're touching other parts of the code, right?

<i class="timecode">[00:54:42]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:54:42]</i> **Patrick:** So if you click on "Add One More," it still takes that full 1.4 seconds, or whatever it was that it took before. Right? So if we try that. It's gonna take awhile. But then we come back here, we can see it still took that 600 milliseconds, right? To do that render of Grid. So, that's what we'll focus on with some of our last little bit of time here.

<i class="timecode">[00:55:09]</i> **Ben:** Sounds good!

<i class="timecode">[00:55:09]</i> **Patrick:** If we pop back over to script.jsx?

First problem here… right, so let's take a look at the implementation of Grid.

<i class="timecode">[00:55:25]</i> **Ben:** So I see we've got our typical table scaffold, excellent. And then we've got our table body. We're iterating over our rows and for each row in our data, we're returning a Row component. 

<i class="timecode">[00:55:38]</i> **Patrick:** Right. Anything jump out at you, Ben, that maybe could be improved about this little loop here? 

<i class="timecode">[00:55:44]</i> **Ben:** It seems to me like every time our rows data updates, we recreate all the rows, even though the only change that the user would experience is that there's a new row. Like, it seems like we could cut down the rendering from all rows to just the one new row. 

<i class="timecode">[00:56:04]</i> **Patrick:** Exactly, yeah. And that's exactly what the "key" prop is doing, that you've probably seen lots of warnings about in the dev console when you forget to add a key and, you know, it will generate all kinds of mishaps and weird behavior if you forget to add or add improperly, which in this case we've done improperly, right? We're using the index in the rows array for our key, but—

<i class="timecode">[00:56:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:56:29]</i> **Patrick:** —when you add a new row, the index for every single row that used to be right is off by one. Right?

<i class="timecode">[00:56:37]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:56:37]</i> **Patrick:** So for example, the first element in the array became the second element in the array when we added something to the front. And so this is what we need to try and address. And thankfully, I know that there's a property on this row called data.hash. Or sorry, data dot… I don't want to give you the wrong thing. Give me one second to double check. data.hash. Yes, yes. 

<i class="timecode">[00:57:01]</i> **Ben:** Okay. And this is a unique identifier that corresponds to the actual data rather than its place in the array.

<i class="timecode">[00:57:09]</i> **Patrick:** Exactly, exactly. So with just that change, let's rerun our profiler and see what happens.

<i class="timecode">[00:57:14]</i> **Ben:** You got it!

<i class="timecode">[00:57:15]</i> **Patrick:** Sorry, sorry, not the profiler. We want to rerun the Performance panel measurement. 

<i class="timecode">[00:57:21]</i> **Ben:** Yes, so… I do need to refresh that.

<i class="timecode">[00:57:24]</i> **Patrick:** Yes.

<i class="timecode">[00:57:25]</i> **Ben:** Then… Performance. We're on 4× slowdown. I can go ahead and type here "asdf." Add one more. That still seemed slow to me?

<i class="timecode">[00:57:41]</i> **Patrick:** Yeah, so let's take a look at the flamegraph and see what's going on.

<i class="timecode">[00:57:45]</i> **Ben:** Okay, so here's the click, and then…

Is this where it's…?

<i class="timecode">[00:57:51]</i> **Patrick:** Yeah, so if you remember last time, this click handler took about 1.4 seconds. We've reduced it to, like, 800. But if you look at, down at the bottom of your current screen, where it says "renderRootSync."

That's all the render portion. But remember, before we had, like, a full second of commit after the render.

<i class="timecode">[00:58:11]</i> **Ben:** Mmmm!

<i class="timecode">[00:58:11]</i> **Patrick:** And if you go to the right of this. Fixing our key — oh, no, sorry. Yeah, just at that level. Yep. Oh, no, nope. That little unnamed…

<i class="timecode">[00:58:19]</i> **Ben:** Oh! Oh, I see, yeah. Okay!

<i class="timecode">[00:58:20]</i> **Patrick:** That's our commit. That's our commit. So we reduced that from a full second down to just 80 milliseconds to update the DOM with all of our changes.

<i class="timecode">[00:58:28]</i> **Ben:** Okay.

<i class="timecode">[00:58:29]</i> **Patrick:** So, huge improvement of our commit that's fixing all of this React work that it has to do, even though we still have some render work in the process. 

<i class="timecode">[00:58:44]</i> **Ben:** Gotcha. Alright. And so how would we fix the render work? Is there anything we could do there to lighten that up? 

<i class="timecode">[00:58:53]</i> **Patrick:** Yeah, so we can take the exact same approach we took for Grid. What key is doing is it's a signal to React to reuse that component for all the data so that we don't have to manipulate the DOM. But we're still going through the work of, in the Row component, actually doing the render. So the key does not save you from a render. It just saves you from having to update the DOM work. And so we can take the exact same approach we took with Grid with each individual row. When we add one row, we don't need to go back and rerender every single row. We can just render the one new row. So we're going to memoize. Row = React.memo(Row). 

<i class="timecode">[00:59:35]</i> **Ben:** It would help if I actually spelled everything correctly in there. Okay. So we're using Row now. So this… it's going to latch onto the fact that it has the same key and that the data is not changing, so it's not going to rerender that particular instance of the row. The only row instance that renders is the brand new row that didn't exist before. 

<i class="timecode">[01:00:00]</i> **Patrick:** Exactly. 

<i class="timecode">[01:00:02]</i> **Ben:** Cool.

<i class="timecode">[01:00:05]</i> **Patrick:** So, now refresh. And you can check this one in the profiler again. 

<i class="timecode">[01:00:11]</i> **Ben:** And then the profiler.

And I'm just gonna start us off with typing "asdf" in here and then…

<i class="timecode">[01:00:22]</i> **Patrick:** Perfect.

<i class="timecode">[01:00:24]</i> **Ben:** Record. Add one more — oh, that was much quicker. 

<i class="timecode">[01:00:27]</i> **Patrick:** Much faster. Boom. Went from 1.4 seconds down to just 50. And if you click this little gray, barely visible icons below the grid. If you mouse over one of those you'll see "Row, did not render," right? So for each of the rows, we still had to iterate and check if they should render, but none of them actually had to go through the process of rerendering. And we took that 1.4 seconds down to just 60 milliseconds.

<i class="timecode">[01:00:51]</i> **Ben:** Nice. I am going to, I think, just real quickly see that in our Performance tab as well.

<i class="timecode">[01:01:01]</i> **Patrick:** Yeah, absolutely.

<i class="timecode">[01:01:01]</i> **Ben:** I just I'd like to just see what the difference is there. It sure is thinking about coming up. There it is. Okay.

Yeah, and so now… there's the renderRoot and that's… we're under 40 milliseconds, which I believe is still an improvement over what we've been seeing. And our commitRoot is 30, so it's still very, very quick.

And we've been raided by TrostCodes. How's it going, Frontend Horse crew? I think we're actually near the end, so we might have to pass you on to some other folks.

But Patrick, did you have any other thoughts? Anything you wanted to share?

<i class="timecode">[01:01:54]</i> **Patrick:** No, I think this captures a good intro preview of how to you use the Performance panel to debug both interaction and load performance. Hopefully you got some idea of what the different areas they're trying to represent and tell you. There's obviously way more. It took, you know, me probably several years to, you know, be super comfortable and learn everything that the Performance kind of has to do, and I still discover everything that I don't know every single day about what all the power that's here and what it can tell you. So, hopefully this demystified the very entry level and gets you comfortable exploring around. 

<i class="timecode">[01:02:32]</i> **Ben:** Absolutely.

I wanted to call out a comment from Justin, our mutual friend, who says, "I always shied away from the performance flamegraphs, because I didn't really know how to use them." So, yeah, there have been a few people say that you've really illuminated that.

So, you mentioned that this is kind of a beginner look at how to understand the different kind of tooling that we have, the flamegraphs, just the different measurements for performance. If someone wanted to take this knowledge further and learn more about this, where are some good places to send them? Where might they go to learn? 

<i class="timecode">[01:03:06]</i> **Patrick:** Yeah, so web.dev is a great starting point. It has a lot of kind of code tutorials and articles walking you through different aspects. Some that if your eyes glazed over with even… I would say this is probably even a little more advanced than beginner, probably a more intermediate look, but if you want an easier starting point. And there's also some codelabs and tons of great information and resources on web.dev, so I would start there for anything you're trying to figure out in the web ecosystem.

<i class="timecode">[01:03:34]</i> **Ben:** Alright.

Awesome! I think, then, we can wrap up. Trost and Mike, thank you so much for the subs. I do appreciate it.

Yeah, so let's go ahead and wrap up. Today, we have had Patrick on. Patrick is available on Twitter at @patrickhulce. Patrick, thank you so much for your time. Thank you so much for showing this off. This has been fantastic.

Y'all, we will definitely be live next week, but I still need to figure out who I'm going to have on. We had to change some plans around, but no worries. We will be live at our usual 2pm Central Time next Tuesday.

Also stick around today. Just stick around for a few minutes and I'm going to find someone for us all to raid. Patrick, again, thank you so much for your time and, y'all, we will see you later! Bye! 

<i class="timecode">[01:04:29]</i> **Patrick:** Thanks for having me.