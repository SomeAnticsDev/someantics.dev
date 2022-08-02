<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Friday! It's Friday — I'm so used to Tuesday streams. Happy Friday. It's good to see y'all here. I'm Ben Myers, and this is Some Antics. It's a weekly show where every week, I bring on a guest from the web development or web design industries to teach me something about building great user experiences for the web in a hands-on way, typically with a focus on accessibility and/or core web technologies. Today, I'm super honored to be joined by the one and only Miško Hevery. Miško, hello! Welcome to the stream!

<i class="timecode">[00:00:32]</i> **Miško:** Hi, how's it going? It's a pleasure to be here. 

<i class="timecode">[00:00:35]</i> **Ben:** It's a pleasure to have you! For folks who don't know who you are, would you like to introduce yourself?

<i class="timecode">[00:00:41]</i> **Miško:** Yeah, so hi, I'm Miško. I work as a CTO at Builder.io. I run the engineering department over there. Builder.io is a site that basically helps engineers and marketing work better together by giving marketing the ability to do visual editing of components, but then the engineers actually retain the full stack behind the scenes. So it's kind of a headless visual CMS system. Maybe sometime we can talk about that. Anyways, one of the things that we care about for our customers is speed, and we wanna make sure that they have the best possible… or rather, their users of those sites have the best possible speed. And so for that, we have two technologies we work on. We work on Qwik and we work on Builder — sorry, Partytown. And so Partytown is a piece of technology that allows you to move your third-party scripts over to web workers. And Qwik is a alternative framework which focuses on resumability — which is kinda what we're gonna talk about here today — that focuses on resumability, and it's all about how to make your application start up as fast as possible.

<i class="timecode">[00:01:50]</i> **Ben:** Okay, so why… in your mind, why is focusing on performance important? Uh, yeah. 

<i class="timecode">[00:01:59]</i> **Miško:** Yeah, so that's a good question. So, there are a lot of…

The thing we noticed is that if you look at the top 50 e-commerce websites, and you look at their performance numbers and of course you can say, like, "Oh, what exactly is the performance?" So, Google works on this thing called Google PageSpeed score, where they collect performance metrics from your website, and then they'll tell you about, you know, how your website performs.

And so — we can actually show that. I'm sharing my screen. We can go to PageSpeed. And then we're gonna type in, for example, our URL. And one of the things you guys will notice is that our website, you know, passes Core Web Vitals. So these are actually data collected from the actual websites. And then on the bottom, over here, it's gonna show our kind of, like, test data from the lab. And you know, Google can score this site. So this is our site at 94. And so, this is all great. Like, this is amazing performance. But if you go to some other site and you know, let's… let's maybe go to walmart.com. Oops, oops. If I could type.

<i class="timecode">[00:03:07]</i> **Ben:** I think that's Walmart with one L?

<i class="timecode">[00:03:10]</i> **Miško:** Is it? Alright, come on, come on. There we go.

<i class="timecode">[00:03:15]</i> **Ben:** There we go.

<i class="timecode">[00:03:16]</i> **Miško:** There. And so you can see that they actually fail, and then you can see the different metrics that Google keeps track of. They're talking about the largest contentful paint and all these things. Anyways, one of them is interaction, et cetera. And you can see that these times are actually pretty slowish. You know, three seconds and so on. And this is even worse if you're on a mobile device. And so, yeah, and then of course you get a score of 46. And if you look at all across the industry, what you're gonna see is that actually, nobody is in the green. Very, very few companies are in the yellow. Like, if you do this for Amazon, you'll see that they're in the yellow. And most other e-commerce companies are in red!

And so all of these companies, right, use technologies like Angular, Qwik — oh, sorry, Angular, React, Vue, and you know, whatever other flavors you happen to have of the system. And I'm gonna argue that all of these frameworks have one thing. They're kind of the same in terms of how they work. Like, you get to choose different DX, right? You get to choose, like, do you like your templates inside of a string or do you like them inside of JSX or so on. But fundamentally, they work the same way and they all have this particular thing that we call hydration. Right? Which is that when you navigate to a page, in order to make the page interactive, the framework has to attach listeners to the UI so that if you click on something, you know, something can happen. And this attaching of the UI is kind of where the problem is, because if you try to attach a UI, you know, attach a listener, you have to figure out, well, where is the piece of code that should run when I click on this thing. And figuring out this thing of where the piece of code lives is the hard part, and this is what we call hydration. And the way that frameworks do that is they download the whole application really twice. Once as HTML, like when you do initial server-side rendering, and then again as JavaScript. And then they execute the JavaScript in order to figure out where the listeners are. And this execution of the JavaScript is what takes a huge amount of time. 

<i class="timecode">[00:05:28]</i> **Ben:** Yeah, and you mean, like, in the case of, like, the React world, for instance, right, like, you could start with, like, the HTML that's all of your prerendered stuff, right? But then React runs. You run your entire React app so that React can build its, like, virtual DOM to be able to control the client side, and it recreates the DOM that you already have, but doing a lot of work to do so. 

<i class="timecode">[00:05:54]</i> **Miško:** Yeah. So let me show you this in kind of a practical term. So here's our homepage for Builder.io. And let me open it up again, but this time in React. So this is the same exact page as the previous page. This one is running Next.js and React. And I'm gonna do the same exact thing. I'm gonna run performance numbers, and then we can compare them and see what exactly is happening.

And so give this a second. Maybe this one is already up. No, they're still both chugging along, okay. Maybe I made a mistake by trying to get both of them to process this thing at the same time. Oh, this one's already up. This one is still not up, okay. I think it got stuck. Let me see if I can refresh it. Yeah, this tab is dead. I killed the browser. Let's try this again.

Here. Go to performance. Refresh. Collect the data. 

<i class="timecode">[00:07:03]</i> **Ben:** There we go. That seems to be going.

<i class="timecode">[00:07:05]</i> **Miško:** Alright. Hopefully this loads. There we go! Now we have it.

Okay, so we have the same exact site, really. One's done as a React, Next.js application and the other one done using Qwik. And so the thing I want to point out is, look at this yellow stuff over here. Right? This yellow stuff here, and also all of this work that's happening in here. This is hydration, right? This is the… where the system is trying to figure out how to hydrate. And not only that, if you look at this, you know, this seems like it's gonna take about a second, so the whole thing takes about a second to kind of process. And… where do I get this? I think it's right here. Here we go. And… why don't I see it here? This should show the amount of JavaScript in here. I'm not sure why it's not showing. That's really interesting. Usually it shows the amount of JavaScript. Anyways, the amount of JavaScript here is about 800 milliseconds, so almost a second of time is just executing JavaScript. And then if you compare this to Qwik, you'll see that, like, all the yellow stuff is kind of gone.

<i class="timecode">[00:08:15]</i> **Ben:** Yeah!

<i class="timecode">[00:08:15]</i> **Miško:** And if you look at the execution time in here, again, you see that it's almost all gone. And if we go look at the amount of JavaScript in this particular case, we have, like, 50 milliseconds' worth of JavaScript in here. I'm not sure why the other one is not showing up here. It's usually around 800.

And so, this is kind of the big difference between the existing frameworks which have hydration, that require you to execute all this code at the very, very beginning, and Qwik, which doesn't have hydration. So what we have instead is something we call resumability. And this is what makes Qwik kind of unique.

And so, to best explain resumability, I like to talk about this analogy. And this analogy is, like, when first I discovered VMware — you know, the virtual machines — my mind was blown. And specifically, it was blown because of this specific kind of use case and that is that, you know, in my host machine, I would boot up, let's say Linux inside of a virtual machine. And then once I booted up Linux, I would open up a… let's say a word processor, and I would start typing a letter. And at some point, I would save the virtual machine, right, for later. It would save it to a file. The thing is, that file, I can send to my friend. And my friend can open the file and just continue where I left off, right? Specifically, when they open the file, they skip the bootup process, the opening of the application, the typing of the letter. They're just immediately placed to where I left off, and they get to continue. Right? And so that's kind of the difference between hydration, which you can think of it as a bootup process for a framework, and resumability, which is this idea of, like, just continue running where you left off. 

<i class="timecode">[00:10:03]</i> **Ben:** Gotcha. Okay. And so…

<i class="timecode">[00:10:05]</i> **Miško:** Mm-hmm?

<i class="timecode">[00:10:06]</i> **Ben:** So, what does… what does that look like in the context of a website then? Like, how—

<i class="timecode">[00:10:12]</i> **Miško:** Okay.

<i class="timecode">[00:10:12]</i> **Ben:** Yeah. 

<i class="timecode">[00:10:14]</i> **Miško:** So, this is, I'm kind of explaining the kind of the motivation behind it, right? And I'm showing you what a website with resumability looks like, and basically I'm showing you that it's very little JavaScript. But it may be time to do some examples to kind of give it more appropriate feel to it.

So, we have a simple example here called the counter. And you can click "Hello," and if you click "Hello," it should print "Hello World" inside the console right here, right? So every time I click, the "Hello World" shows up here. And I can also click this button and increment the count over here, right? So, simple, simple component.

<i class="timecode">[00:10:52]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:10:52]</i> **Miško:** Nothing really exciting. But what is different about it is what actually happens in the browser. So normally, if you had something like this, the way this would work is that the server would prerender the HTML, you would send it to the client, and the client would have to boot up. What that means is that the client would have to download the application again, and it would have to execute the application. And as part of the execution of the application, the framework would figure out where the listeners are and then it would be able to attach those listeners to the buttons. And then once all of that stuff—

<i class="timecode">[00:11:28]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:11:29]</i> **Miško:** —has finished, you would be good. You would be ready to interact with the page. Now, the difference is that, you know, for a simple Hello World like this thing over here is… like, it doesn't matter. But as the page becomes ridiculously complicated, like imagine you have something like amazon.com you go to—

Really? Wow, Amazon. That's impressive. Let's see. 

<i class="timecode">[00:11:53]</i> **Ben:** Did you manage to 404 from the Amazon homepage?

<i class="timecode">[00:11:56]</i> **Miško:** Yes, I did!

<i class="brackets">[Miško laughs]</i>

I did.

<i class="timecode">[00:11:58]</i> **Ben:** Ooh. I think we've accomplished something here today!

<i class="brackets">[Miško laughs]</i>

<i class="timecode">[00:12:03]</i> **Miško:** So, I randomly chose a product, right? And if you look at this particular page, this page is HUGE. Like, there is tons and tons of stuff here. And so it's not really feasible to assume that we could actually do a hydration for the whole page. And actually, Amazon is one of the fastest e-commerce websites, that's actually there in the yellow. And the thing you're gonna notice is they don't actually use any framework, specifically for this reason that none of these frameworks are fast enough to deal with the hydration.

<i class="timecode">[00:12:31]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:12:31]</i> **Miško:** And Amazon understands that, you know, every single millisecond is lower conversion rates and less profit for them.

So, let's go back to how Qwik does this thing. So, let's go to the Network tab first, and let's just go and say I'm only interested in JavaScript. And let's refresh the page. And the only two pieces of JavaScript that are gonna come up are this client, and these are actually Vite. This is not actually the framework. We're running in a dev mode, and so in dev mode, we use Vite for hot module reloading. So actually, Vite wouldn't be in production. So I'm gonna filter Vite out. And I'm gonna do the filter. And actually, what you're gonna see is that there's no JavaScript on the page.

And then when I go and interact with the page, I download just the necessary JavaScript to…

<i class="timecode">[00:13:20]</i> **Ben:** Ooooh.

<i class="timecode">[00:13:21]</i> **Miško:** …process the interaction.

<i class="timecode">[00:13:22]</i> **Ben:** Okay.

<i class="timecode">[00:13:24]</i> **Miško:** And if I click on the other button, then again, I'm gonna download just the necessary JavaScript for the interaction, and nothing more.

Okay. And so, what we mean by "resumable" is that the app can resume from where the server left off, right? It's just like the VM example I gave at the beginning where you run the application on a server. You get it to a proper point where you like. You save it to a file. In the case of a browser, the file is HTML.

<i class="timecode">[00:13:54]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:13:55]</i> **Miško:** And then you send the HTML to many, many people, right? The same HTML can be cached in a CDN and sent to, you know, millions of customers. And then the HTML has all the sufficient information in there so that you can just continue where you left off.

<i class="timecode">[00:14:12]</i> **Ben:** Gotcha. And this is also nice because you're only getting exactly what you need and when you need it, so, you know, if the user's on the page and they're not doing a whole lot with it — they're just kind of looking around, you know, just kind of browsing — like, they don't need all that interaction, and so it just never even arrives at their door. 

<i class="timecode">[00:14:31]</i> **Miško:** That's right.

<i class="timecode">[00:14:32]</i> **Ben:** That's awesome.

<i class="timecode">[00:14:33]</i> **Miško:** So, one question to kinda look at is like, well, what does it look like in terms of programming model, right? And if you know React, you will look at Qwik and you will say, like, "Well, this is just like React." Like, there's almost no difference in what we do. And that's intentional. This is not a coincidence. We intentionally kind of modeled it after the most popular way of doing things. But what's different is what actually happens under the hood, right?

So, the way I look at it is that existing frameworks, basically they compete with each other on the developer experience. And I'm gonna argue that all of the developer experiences are pretty good, and the end result that you're gonna get is approximately the same. Yeah? Maybe one is gonna be slightly faster than the other, but like… on average, it will be approximately the same. 

<i class="timecode">[00:15:23]</i> **Ben:** I've heard it said that, like, one of the reasons that, like, React is as prevalent as it is, is because, like, it introduced — like, it quote–unquote "finally" introduced a templating language that developers can fall in love with. 

<i class="timecode">[00:15:37]</i> **Miško:** Possible. So, we're using JSX, right, as a template language of React. But again, like, the point here is that it's not about the developer experience, right? Like,if you're gonna make another— yet another framework, you better have something a lot more than just a better developer experience. And so we think we have a great developer experience but, like, the magic of it is not the DevEx, right? The magic of it was actually what happens under the hood and the way we actually deliver code to the browser, and this is something that I think nobody else besides resumable frameworks can do. And currently, the only resumable frameworks I'm kind of aware of is, Google has an internal project called Wiz, which runs the Google Search and Google Photos. That, I would consider resumable. And we all agree that Google Search and Google Photos are fast.

<i class="timecode">[00:16:25]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:16:27]</i> **Miško:** And apparently, eBay is working on Marko, but that's not released yet. Marko version 6 has, apparently, resumability coming to it. And of course, Qwik is the only other framework that I know of that has resumability.

Okay, so let's look under the hood. Like, how does this actually work, right?

<i class="timecode">[00:16:44]</i> **Ben:** Yeah.

<i class="timecode">[00:16:45]</i> **Miško:** So, here's our counter. And we create a store, and this is where we keep our count. And the store, you know, shows the current count. And we have two buttons: one that increments the count and a second one that increments the "Hello World," right?

So, let's look at this from the simplest possible thing. Let me refresh this again. No JavaScript is downloaded. And then we click on "Hello." How does the system know what to download, right?

So, let's look at the button. And one of the things we're gonna notice is that this button has an "on:click" URL. And again, this is in dev mode, so this URL is ridiculously long so that it's readable. In production, this would be a short URL. And this URL basically says, what do you download — what piece of code to download — and then what symbol out of that piece of code do you have to pull out and execute, right? And so when we click on this button, it prints out "Hello World," as you can see over here. And if we go to the Network tab, we can see that the only thing we downloaded is the piece of code necessary to get the job done. Right?

So, let's go back to the source code and what you see, what happened is we pulled out just this function and nothing else. 

<i class="timecode">[00:17:57]</i> **Ben:** Right.

<i class="timecode">[00:17:58]</i> **Miško:** Right? Because that's the only thing that you actually needed!

<i class="timecode">[00:18:00]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:18:01]</i> **Miško:** You don't need… you don't need the component. You don't need the JSX or any of these other pieces, so why send it to the client? 

<i class="timecode">[00:18:12]</i> **Ben:** Right, yeah. The markup's already all there. Yeah, legitimately all you need is the script.

<i class="timecode">[00:18:17]</i> **Miško:** And that's exactly what we do. Right? And so the other way to think about it is like, if you look at the amount of JavaScript that's been downloaded and executed, it should be pretty much always pretty close to 100%, right? You shouldn't be downloading things that you don't actually need right now.

<i class="timecode">[00:18:32]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:18:34]</i> **Miško:** Okay. So, we kind of showed you that one of the things is we serialize the behavior of the application, right? So the click listeners got serialized into the HTML. Now, in order to make this work, we have this polyfill called Qwikloader. So, Qwikloader… yeah, again, it's in the dev mode, so it's not minimized. This piece of code is approximately one kilobyte in size.

<i class="timecode">[00:18:57]</i> **Ben:** That's tiny!

<i class="timecode">[00:18:58]</i> **Miško:** It doesn't matter…

It's super tiny! It doesn't matter how big your application gets. This Qwikloader is always about a kilobyte. And it executes in, like… under ten milliseconds.

<i class="timecode">[00:19:10]</i> **Ben:** Awesome.

<i class="timecode">[00:19:11]</i> **Miško:** You know, even on mobile. So it's super, super cheap. It is so tiny that we don't actually put it in a separate file. We actually inline it directly into the HTML so that the browser doesn't have to make another request.

<i class="timecode">[00:19:24]</i> **Ben:** That's awesome. 

Yeah, and so as… like, when that button led to you firing the request for specifically the JavaScript you need, did you memoize the results of that? Like, is it going to make a bunch of spurious, like, refetches, if you keep clicking that button? Or is it just now I've got the JavaScript I need and, like, I don't need to change anything?

<i class="timecode">[00:19:44]</i> **Miško:** Yeah, so actually… yeah, let's get to a real site. In production —this is a real site. What actually happens… let's see, Network tab. Okay. So if I refresh this page… clear cache… and I think we have to do All…

What happens in production is that all of these JavaScripts get prefetched eagerly. And then when I actually go and interact with the button, what you see is that all of the code is from prefetch cache.

<i class="timecode">[00:20:15]</i> **Ben:** Oh, okay!

<i class="timecode">[00:20:17]</i> **Miško:** And so in production, we actually figure all these things out and make sure that you're just ready to go without a bunch of, you know, extra work. So, it's instantaneous. Okay, so let's kind of — go ahead? More questions?

Otherwise, I'm gonna, like, dive deeper into kind of the magic of it. So this, what's happening here is that every time you see a dollar sign, this tells the optimizer that "I want to lazy load that piece of code."

<i class="timecode">[00:20:51]</i> **Ben:** Okay.

<i class="timecode">[00:20:51]</i> **Miško:** Right? And so every time you see a dollar sign, this is really lazy loaded. So this is lazy loaded, this is lazy loaded, and this is lazy loaded. So this is a way for breaking up the source code into pieces. Now, the dollar sign is part of the API, so it's always not like you can forget to put it, right? Because if you don't put it in, you know, the TypeScript is gonna yell at you, say, like, "This is not a valid piece of code," right?

<i class="timecode">[00:21:14]</i> **Ben:** Yeah.

<i class="timecode">[00:21:15]</i> **Miško:** So this is all – and also over here, you know, if you can see, like… "oh, no, you have to place it in there."

And so this thing was easy because when we grabbed this piece of code, what we essentially did is something like export FOO equals this, right?

<i class="timecode">[00:21:32]</i> **Ben:** Yeah.

<i class="timecode">[00:21:33]</i> **Miško:** And "export const."

So, there's this piece of code called the Optimizer that can rearrange the source code, and so it can basically do this piece of code here. Now, what is…

This is simple because this piece of code is kind of self-contained. But let me see what happens when we try to do the same exact thing here. Notice TypeScript now complains about a store, right?

<i class="timecode">[00:22:02]</i> **Ben:** Right.

<i class="timecode">[00:22:03]</i> **Miško:** Because "store" is part of the closure, and so lazy loading this button is not as simple as you think.

<i class="timecode">[00:22:12]</i> **Ben:** Makes sense.

<i class="timecode">[00:22:13]</i> **Miško:** Okay. And so what actually happens… when we click on this button here. Let's go to the Network tab. We first have to lazy load the store.count. But because store needs to be restored, we have a piece of code that gets injected into the system called useLexicalScope. And this piece of code is what recovers the state of the system. This is what resumes the state of the system. Right?

<i class="timecode">[00:22:41]</i> **Ben:** Okay.

<i class="timecode">[00:22:43]</i> **Miško:** And so this is what allows us to do "store.count++." Because if you think about it, lazy loading JavaScript gives you a function that has amnesia, right? It no longer remembers any state. And so our job is to kind of recover the state so that the function can continue execution where it left off at the server.

<i class="timecode">[00:23:02]</i> **Ben:** Right. Okay! Yeah, yeah!

<i class="timecode">[00:23:05]</i> **Miško:** And then once we download this piece of code, we of course have to download the framework itself. And then we have to download… once this piece of code executes, once we modify the count, we have to go and download the JSX associated with the counter, right? So this is our `<Counter>` component JSX.

<i class="timecode">[00:23:25]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:23:26]</i> **Miško:** And then we can rerender the page. And so again, this is an example of where, like, where we are trying to download only the code that is strictly necessary for this application and nothing else.

<i class="timecode">[00:23:41]</i> **Ben:** Got it.

<i class="timecode">[00:23:41]</i> **Miško:** Make sense?

<i class="timecode">[00:23:42]</i> **Ben:** Yeah! And so how is useLexicalScope working behind the hood? Like, is that…?

<i class="timecode">[00:23:48]</i> **Miško:** Okay!

<i class="timecode">[00:23:48]</i> **Ben:** Yeah.

<i class="timecode">[00:23:49]</i> **Miško:** Good question, yeah. So, let's go to… when we…

One of the things the system does, is not only does it serialize the location of listeners like you can see here, but it also serializes the state of the system. So in here, it serializes that the count is 10.

<i class="timecode">[00:24:06]</i> **Ben:** Okay!

<i class="timecode">[00:24:08]</i> **Miško:** Right? So when I click this button, this `<script>` tag gets consumed. Watch — so if I click, the `<script>` tag is gone.

<i class="timecode">[00:24:16]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:24:17]</i> **Miško:** So, the Qwikloader loaded the piece of the code, loaded this code right here. This code called useLexicalScope, which consumed the `<script>` tag. 

<i class="timecode">[00:24:28]</i> **Ben:** And now the store is in the JavaScript's local memory, and so it doesn't—

<i class="timecode">[00:24:34]</i> **Miško:** That's right.

<i class="timecode">[00:24:34]</i> **Ben:** —need it in the `<script>` tag anymore. Okay. 

<i class="timecode">[00:24:36]</i> **Miško:** That's right. And then the store is actually a Proxy. And so when you modify the count, the Proxy…

Let's see, where do we go? Here.

The Proxy is right here, the count. And so it says, "Oh, if you modify the count, then you need to go and invalidate component 0." Component 0 is right here.

<i class="timecode">[00:24:59]</i> **Ben:** Oh, that's so good!

<i class="timecode">[00:25:01]</i> **Miško:** So now the system knows that only this particular component is invalidated. Now, but the beauty here is, as a developer, right? You don't have to think about any of this stuff.

<i class="timecode">[00:25:11]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:25:13]</i> **Miško:** It just… this is the way the system works.

So, let me show you something more interesting. Let's say we create a component.

Let's see if I know how to use this. Okay, this is way too much stuff generated. Okay, let's do it the simple way. "export const." Let's call it "Display."

<i class="timecode">[00:25:30]</i> **Ben:** Sure.

<i class="timecode">[00:25:31]</i> **Miško:** "component." And so in here, we do that. Yep. Let's say, just say render, let's say, `<span>`s. `<span>`s… props.store…

Okay. So here, we're gonna get props, right? Props.

<i class="timecode">[00:25:53]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:25:54]</i> **Miško:** Which is going to take a store, which will have a count, which is a number. So in here, instead of doing the count like this — oh, right, we should say "Count." Instead of doing count like this, we are gonna say `<Display>` and "store." Right?

<i class="timecode">[00:26:22]</i> **Ben:** Okay.

<i class="timecode">[00:26:22]</i> **Miško:** So we have just pulled away a separate component out.

<i class="timecode">[00:26:26]</i> **Ben:** Yeah, so I'm trying— I'm trying to guess what's going to happen here, 'cause one of two things could happen, which is that you've, like, prerendered the `<span>`, and so the `<Display>` component is not sent over the wire immediately until you update the count, or that just becomes part of the… like, that `<Display>` component is immediately sent.

<i class="timecode">[00:26:49]</i> **Miško:** Yeah, well, so let's find out!

<i class="timecode">[00:26:50]</i> **Ben:** Yeah! So curious what you've done here. 

<i class="timecode">[00:26:54]</i> **Miško:** When you click "Hello," right? Obviously in a network case, the "Hello" only downloads the console log, right? So nothing else gets sent. Just the "Hello." And that kind of makes sense.

<i class="timecode">[00:27:04]</i> **Ben:** Yeah.

<i class="timecode">[00:27:05]</i> **Miško:** When I click the other button, which increments… well, I needed to send the "count++."

<i class="timecode">[00:27:12]</i> **Ben:** Yeah.

<i class="timecode">[00:27:13]</i> **Miško:** Right? That's a… that has to go. Actually, the framework has to come as well. Notice the framework didn't show up in the first case. It only showed up in the second case, because in the first case, it's just console.log(), and you don't need the framework for that.

<i class="timecode">[00:27:24]</i> **Ben:** Right.

<i class="timecode">[00:27:24]</i> **Miško:** So we didn't even send the framework the first time through. And notice what we downloaded. We downloaded the `<Display>`. We only download the piece of code that updates the `<Display>`. What we don't download is the `<Counter>`. Because `<Counter>` has no moving parts here, right? Like, there's nothing here that would cause the counter to rerender. 

<i class="timecode">[00:27:44]</i> **Ben:** Okay! So… what if you have a fancier situation that has, like, conditional rendering and that kind of stuff, right? Like, how far do you take it before, like, eventually `<Counter>` does have to get downloaded?

<i class="timecode">[00:27:59]</i> **Miško:** Yeah, so for the `<Counter>` to get downloaded, the `<Counter>` has to create a subscription, and the way the `<Counter>` creates a subscription is by…

So, let's actually make this even more interesting. So… let's make this "+1." Let's make this, I don't know, "+B" or something.

And so here, let's say we do "countB," and let's say we start with 123. And here we just say… "store.countB." That's right. So, now we have our count 10 and count B.

So, if I click "Hello," the only thing that should download is the hello itself, right?

<i class="timecode">[00:28:43]</i> **Ben:** Right.

<i class="timecode">[00:28:44]</i> **Miško:** No framework, nothing else. If I click "+1," then I should download the piece of code that increments the count 1. And then I need to run… rerender the component, and nothing else.

<i class="timecode">[00:28:55]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:28:57]</i> **Miško:** And if I click… let me refresh this page. If I click "+B" — why is it not going? Because… oh, sorry. It needs to be "countB."

Why is it not updating? What am I doing wrong? Button, countB…

What? Oh, sorry. Vite is confused. It needs to be restarted.

<i class="timecode">[00:29:28]</i> **Ben:** Mm.

<i class="timecode">[00:29:31]</i> **Miško:** There we go. Okay.

So now, if I click on "B," the countB has to get downloaded, the framework has to be downloaded, and in this case, the component has to be downloaded. Right? Because that's the `<Counter>` component. But what didn't download is the `<Display>` component, right? `<Display>` component doesn't download here. In order for me to get the `<Display>` component, I would've to do "+1," and then it downloads the behavior of the other handler and then it downloads the `<Display>` component. 

<i class="timecode">[00:30:05]</i> **Ben:** Yep.

<i class="timecode">[00:30:05]</i> **Miško:** So, in each case… in each case, the system does the exact bare minimum necessary to get the job done and nothing else.

<i class="timecode">[00:30:15]</i> **Ben:** That's… that's so cool! That's awesome! I love that! That's really neat. 

<i class="timecode">[00:30:20]</i> **Miško:** Yeah. So again, like, this is a demo, right? This is a small, little thing.

<i class="timecode">[00:30:23]</i> **Ben:** Yeah.

<i class="timecode">[00:30:24]</i> **Miško:** But think about it, like, in a larger sense, like an Amazon website. Like, this actually adds up.

<i class="timecode">[00:30:29]</i> **Ben:** Yeah.

<i class="timecode">[00:30:30]</i> **Miško:** Like, if you come to a complicated website where the only piece of code that you really need is… well, actually you don't need any code to get started. Like, it's all just there and ready to go. And then only as you interact with the page, you only download the pieces of code that are necessary. So for example, let's say you get on the Amazon website and you hit, like, "Add to shopping cart," right?

<i class="timecode">[00:30:48]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:30:48]</i> **Miško:** The only code that you really need is the listener for "Add to shopping cart," whatever that listener is. And then you're probably gonna go and modify some state that causes the shopping cart to invalidate, and so you're probably gonna have to download the shopping cart as well. What you don't need to download is the product card, because you didn't change the way the product looks. You don't need to download any menu systems, any comments, feedback forms, or anything like that, right?

<i class="timecode">[00:31:12]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:31:13]</i> **Miško:** None of those things really need to be downloaded because that's not what you did as an interaction.

<i class="timecode">[00:31:18]</i> **Ben:** Gotcha.

<i class="timecode">[00:31:19]</i> **Miško:** And so, the goal we're looking for here is — actually, let's see if I can go to console… no, I think Elements — is that you really just wanna download the code that you're actually using. How do I get… what is it called? Code coverage! There used to be a code coverage here. Why is it not showing up here? Where is it? Did they move it? Ah, I thought there used to be a code coverage thing. Maybe it's under a different place. Okay, I need to find it. It looks like they moved the code coverage.

So, yeah. So, you don't wanna, basically, download the piece of code that you don't need, and if Google were to have a code coverage here, what you will see is — oh, here it is. Here, I found the coverage. Here we go. And so we only refresh this page. And the only want to see JavaScript. And so, yeah, so this is Vite, right? Like, you ignore this piece of code here. And this is the CSS. Why is it showing the CSS? Oh, 'cause the Vite loads the CSS. So, these first three things are Vite, right? That wouldn't be in production. And then if I click "Hello," then it executed a piece of code, and notice it's zero unused bytes, right? So everything that I downloaded, I actually needed.

<i class="timecode">[00:32:34]</i> **Ben:** Yeah, okay!

<i class="timecode">[00:32:36]</i> **Miško:** If I do "+1," again, download a whole bunch of code. All of the code that I downloaded down executed. "+B," again, all of it downloaded and executed, right? So I am never in a situation where I download code that I don't actually need. And some of this stuff, as you can see, like the higher stuff, you know, there are a few pieces here that didn't execute, but they're pretty low. If you did this for an existing system, you actually would find, like, most of the code doesn't download and it doesn't execute, because most of the code are listeners, right? So if you have a lot of complicated listeners on your page, you have to download the listeners and register them, but you're not actually executing them until the user actually clicks. And so you spent time downloading and attaching an execution of a whole bunch of things that you don't actually need eagerly, right? And so this is where this idea of resumability comes from, that we just wanna resume where the server left off. Like, we are literally doing the trick that the virtual machine is doing, where we serialize the state of the system into JSX and into HTML in such a way that on the client—

<i class="timecode">[00:33:41]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:33:42]</i> **Miško:** —we can just continue where we left off.

<i class="timecode">[00:33:45]</i> **Ben:** Gotcha. So I can see one case where you would end up with perhaps some unused bytes, which would be, like, I mean, you've mentioned listeners, but, like, I'm thinking of if you're using any library code and the library potentially—

<i class="timecode">[00:34:01]</i> **Miško:** Yeah.

<i class="timecode">[00:34:01]</i> **Ben:** —has not, like, tree-shaken itself or anything like that. 

<i class="timecode">[00:34:04]</i> **Miško:** Yeah, yeah, I mean, there are many situations where you will have unused code but, like, you can see how this particular approach, like, tries hard to minimize—

<i class="timecode">[00:34:11]</i> **Ben:** Oh, yeah.

<i class="timecode">[00:34:11]</i> **Miško:** —the amount of code.

<i class="timecode">[00:34:12]</i> **Ben:** Absolutely.

<i class="timecode">[00:34:14]</i> **Miško:** Okay. Any more questions about the counter? Otherwise, I'll show you a different demo.

<i class="timecode">[00:34:19]</i> **Ben:** I think I'm good on this demo. Let's, yeah, take a look at another! 

<i class="timecode">[00:34:22]</i> **Miško:** Okay. So, this is my favorite one, which is a clock. And so what it is is it just shows two clocks below the fold that you can see there, updating every second. Right? And what I love about it is that if you look at the Network tab…

Let's get rid of this. If you look at the Network tab, no JavaScript, because you don't need any. And then when the clocks scroll into position, we download the JavaScript and execute it. Right?

<i class="timecode">[00:34:52]</i> **Ben:** Okay.

<i class="timecode">[00:34:52]</i> **Miško:** Let me show these to you from a different point of view. If you are inside of the HTML… these are the hands — hour, minute, and second hand — and notice that they're not updating. They're just stuck at 10, 20, and 30°.

<i class="timecode">[00:35:08]</i> **Ben:** Okay, yeah.

<i class="timecode">[00:35:08]</i> **Miško:** And then when I scroll the first one into position, notice how it flashed and it started updating itself every second. But the second one is still sleeping.

<i class="timecode">[00:35:18]</i> **Ben:** Okay, yeah!

<i class="timecode">[00:35:19]</i> **Miško:** And when the second one comes to position, it also wakes up and does its magic. 

<i class="timecode">[00:35:25]</i> **Ben:** Gotcha! And I know that, like… so, I've seen similarish things in the progressive hydration model, right? Like, and that's different from hydration, but, like, the ability to treat, like, scroll-into-view as a moment to start loading in the code that you need.

<i class="timecode">[00:35:44]</i> **Miško:** Yeah, so there's two differences. First of all, we are resuming rather than hydration, so that's a big difference. But the other big difference is, like, what did the developer have to do in order to get that behavior, right? And the answer is, well, they will probably have to do a lot of stuff. As a matter of fact, if you try to get the behavior with existing frameworks, you'll see that, like, that is actually a really, really hard thing to do. And what I want to show you is what does the code look like in Qwik, and convince you that actually, the developer had to do nothing special in the Qwik world. So, in the Qwik world, you have your… we have our root component called `<ClockApp>`, and the whole purpose of this component is to just render the line items so that we have below the fold…

<i class="timecode">[00:36:28]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:36:28]</i> **Miško:** …the clocks are below the fold, right? So this component is static. It will never rerender. So this component never gets sent to the client.

<i class="timecode">[00:36:37]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:36:38]</i> **Miško:** Then we have our clock twice. Right? And so let's look at how you define a clock. You say, "I need some styles." Oh, that's, by the way, interesting, right? When you lazy load a component and the component has styles, we don't want to download the styles because the component was already rendered at the server.

<i class="timecode">[00:36:55]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:36:56]</i> **Miško:** And because the server rendered it, it already included the styles. And so whether or not the styles have to be loaded really depends on, like, is this the first time that you're putting the component up or is it a… you know, was it already on the page because the server prerendered it, right?

<i class="timecode">[00:37:11]</i> **Ben:** Yeah.

<i class="timecode">[00:37:11]</i> **Miško:** And so notice, again, the dollar sign that basically says, you know, this may or may not download depending on the situation. 

You create your store, which is your angles for the analog clock. And then, you know, you have your basic JSX that renders the clock in here. The magical bit is right here. So, if you are familiar with React, you would have something called useEffect. So, Qwik is a little different. Because we have the server and the client side, we actually have the word "client" in there.

<i class="timecode">[00:37:44]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:37:44]</i> **Miško:** So here, you're saying "useClientEffect," and notice, again, there's a dollar sign in here. And a dollar sign says that this is lazy loaded over here, right?

<i class="timecode">[00:37:53]</i> **Ben:** Yeah.

<i class="timecode">[00:37:53]</i> **Miško:** Now, every framework has to be like, "Great, so I have a client effect. At which point do I execute the client effect?"

<i class="timecode">[00:37:59]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:38:01]</i> **Miško:** And the answer to that is, like… well, in most frameworks, the answer is easy. You do it on hydration. But Qwik doesn't have hydration, so, like, at which point do I actually execute this?

<i class="timecode">[00:38:12]</i> **Ben:** Right.

<i class="timecode">[00:38:13]</i> **Miško:** And so you could say, like, "Well, maybe when DOMContentReady is fired?" That's one way of looking at it, right? And the other way of looking at it is, like, well, just do it when the component is visible. Because if it's not visible, then why are you doing this, presumably?

<i class="timecode">[00:38:26]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:38:27]</i> **Miško:** Right? And that's actually the default behavior of useClientEffect, is that. Because there's no hydration, useClientEffect needs some event to tie itself to, and the only obvious choices are either do it eagerly on DOMContentReady, or do it lazily on visibility.

<i class="timecode">[00:38:48]</i> **Ben:** Yeah!

<i class="timecode">[00:38:49]</i> **Miško:** And because Qwik really tries hard to be as lazy as possible, our default is actually visibility. You can override it by giving an extra argument to this function. But the default behavior is this in here.

And so, if you look at it — let me refresh this again. If you look at this thing, what you're going to see is that there is a special event here called "on:qvisible," right? Just like we had "on:click," there's an "on:qvisible." And actually, I can edit this and I can actually modify this and say "on:click." And when I do that, when the component scrolls into view, it doesn't wake up. Because I've changed the rules for it, right?

<i class="timecode">[00:39:29]</i> **Ben:** Right.

<i class="timecode">[00:39:29]</i> **Miško:** But now if I click on it, it wakes up and starts doing its work. So "visible" is actually just a custom event that we fire in order to get the system going. Right?

And so if you then look at the Network tab, well, what did we download? Well, the first thing we had to download was this useClientEffect which, you know, set up a function that knows how to read the current time. And then we set up an interval, and every second, we go and update the function, right?

<i class="timecode">[00:39:58]</i> **Ben:** Yeah.

<i class="timecode">[00:39:58]</i> **Miško:** Now, when it updates the function, it goes and modifies store and minute. Let's scroll to the top again. And I go here. I look at the state. You scroll to the very bottom. You can see that hour, minute, and seconds are all subscriptions, meaning that if you modify those things, you need to go and invalidate component 1 and component 0, 'cause there's two copies of them, right? 

<i class="timecode">[00:40:22]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:40:22]</i> **Miško:** And that's your component 0 and component 1, right? So that's how the system knows to do that. So when this scrolls to position, executing this piece of code modifies the second, minute, and hour, which then tells the system, "You need to go download the `<Clock>` and then rerun the JSX associated with it."

<i class="timecode">[00:40:42]</i> **Ben:** Gotcha!

<i class="timecode">[00:40:43]</i> **Miško:** But again, like, `<ClockApp>` didn't get downloaded, right? Like, there's actually two components in this demo. This one never downloads. No matter what you do!

<i class="timecode">[00:40:52]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:40:53]</i> **Miško:** You can't get this thing to download. 

<i class="timecode">[00:40:55]</i> **Ben:** That's great. That is awesome.

I'm keeping an eye on the time. Do you have other Qwik demos you wanted to show off to kind of illustrate the Qwik flow?

<i class="timecode">[00:41:08]</i> **Miško:** Yeah!

<i class="timecode">[00:41:08]</i> **Ben:** Did you wanna do anything with Partytown? Just kind of seeing where you wanna go next. 

<i class="timecode">[00:41:12]</i> **Miško:** Yeah, we have a lot of… yeah, we have lots of things. Partytown… we can talk about Partytown a little bit. So… what is the end goal here, right? The end goal for us is to have websites that have a very quick startup performance. What I mean by quick startup performance is, like, imagine you're on Twitter and somebody sends you a link to a shoe and they're like, "Look at this awesome shoe." And you click on the link and you're like, "Oh, yeah, I wanna buy this," and you want to hit the "Add to shopping cart" button, right?

<i class="timecode">[00:41:40]</i> **Ben:** Yeah.

<i class="timecode">[00:41:40]</i> **Miško:** And if you click that button and immediately you don't see a response, you know, after a few seconds, you're like, "You know what? I don't really need the shoe. I'm gonna leave."

<i class="timecode">[00:41:47]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:41:48]</i> **Miško:** Right, and this is where, basically, speed matters. And so you want to make sure that that button is available for interactivity as soon as possible, right? So if I navigate to this counter and I click "+1," there should be no delay before I can click that button. And this is what we're going after, right?

And where does the delay come from? Well, the delay comes from downloading huge amounts of JavaScript and executing that amount of JavaScript. And so the question becomes, "Okay, well, like, where is the sources of these JavaScripts?" And there are two sources of JavaScript. One is the application I have written, right? The first-party code. And to minimize the amount of JavaScript you download for the first-party code, we have Qwik.

<i class="timecode">[00:42:30]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:42:31]</i> **Miško:** And we kind of talked about Qwik. Well, what about third-party code? Well, it turns out that if you have a blank piece of page with no JavaScript on it and you just add Google Analytics by itself, It puts you on a precipice where you will probably no longer be able to get a 100 out of 100 on your performance score over here.

<i class="timecode">[00:42:51]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:42:52]</i> **Miško:** So, if your page does nothing, but just, like, down— you know, sets up Google Analytics, HubSpot, Amplitude, and all the other third-party scripts that you have, that alone will kick you out of a 100 out of 100, will kick you out of the green zone.

<i class="timecode">[00:43:08]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:43:08]</i> **Miško:** Right? And the reason for that is because all of these scripts are hundreds of kilobytes of JavaScript that has to be downloaded and executed. And so what Partytown does is it says, "You know what? This is actually a third-party code," and it executes it on a separate thread, which is the, in the language of JavaScript, right, that's web workers. So, what we've figured out how to do is how to take your third-party code like Google Analytics, Facebook Pixel, HubSpot, Amplitude, and so on and move it to a web worker where it still executes, but it doesn't execute on the main thread, and therefore the main thread is free for the user interactions.

So, if you… let's see. Let's go to this. If you look at here, and how do I…? Okay, here. So you can see that we have a main thread and a lot of stuff is happening here, but we also have worker threads, right? These are the Partytown code that's actually running. So a lot of the code is now running in a worker thread and it's not running on the main thread, right? Because the main thread is the thing that does the UI and handles user responses. And so by moving into the worker thread, we can basically say, "Oh, modern CPUs have multiple cores, and so some other core can deal with that piece of code, and we just dedicate the main core for the user interactions." And that's how we offload JavaScript, right? And so with Partytown, you can add lots of third-party scripts to your system and they will still… it will not negatively impact your interactivity on the main thread, and that's exactly what you're going after, right?

<i class="timecode">[00:44:48]</i> **Ben:** Absolutely.

<i class="timecode">[00:44:52]</i> **Miško:** So, that's the idea behind Partytown. Let's see.

And yeah, so, this is basically the thing, right? Like, without Partytown, your main thread has to do your third-party code and your code together, and there's a congestion that generates over here and the page takes forever to start up. With Partytown, your main thread is dedicated to your application and your worker thread is dedicated to your third-party code. And of course, there's lots of blue dots here, but when you use Qwik, the number of blue dots actually decreases significantly, right? Because you have so much less code to ship to the client.

<i class="timecode">[00:45:30]</i> **Ben:** Absolutely. Okay! So, how…? I don't know if you have any demos at the ready for this, but, like, how could I, like, get started with, like, Partytown for…?

<i class="timecode">[00:45:42]</i> **Miško:** Yeah, so for Partytown, I mean, these are instructions on how to get started. We have integrations with standard things, or you could just do a manual setup.

It is actually pretty straightforward. Let's see if I have an example. You add a, basically, Partytown script to your `<head>`. And then every time you have a piece of script that you don't want to run on the main thread, you just add the type "text/partytown" to it, and that script now runs on a separate thread.

<i class="timecode">[00:46:13]</i> **Ben:** Okay! I… you know, I thought it was going to be so much trickier than that. Okay! 

<i class="timecode">[00:46:20]</i> **Miško:** No, it's pretty, pretty straightforward. 

<i class="timecode">[00:46:23]</i> **Ben:** And would that work if you had done "`<script src=...>`," if you were pulling in, like, that third-party script from a CDN?

<i class="timecode">[00:46:30]</i> **Miško:** Yes, yes, all that works. So, what the type="text/partytown" does is, basically, the browser looks at it and says, like, "I don't recognize this type. I'm not gonna do anything with it," and it leaves it as is. And then Partytown goes afterwards and be like, "Okay, okay. I know how to find this script, and I see what the URL is, and I'm gonna then load it in a web worker, and I'm gonna set up a web worker for you, and all this other stuff." So Partytown kind of does this all automatically behind the scenes for you, so you don't have to think about it.

<i class="timecode">[00:46:55]</i> **Ben:** Okay! Wow, that is far less setup than I thought it was gonna be. I was like, "Ah, we gotta plan, like, the next 20 minutes for the other tool in the name of the stream!"

<i class="brackets">[Miško laughs]</i>

And no.

<i class="timecode">[00:47:06]</i> **Miško:** No!

<i class="timecode">[00:47:07]</i> **Ben:** That's incredible! 

<i class="timecode">[00:47:08]</i> **Miško:** Partytown is pretty much a no-brainer. Like, there is… if you can get it working — and there are constraints, because, you know, we have to emulate, basically, the DOM in the web worker, and the emulation is kind of where the tricky part comes in, and so, you know, there might still be kind of bugs and surprises in there. But once it works, like, it's a no-brainer because it, like, offloads so much work. People told us that by integrating Partytown, they improved, like, 60 — or sorry, 40 or 60 points —

<i class="timecode">[00:47:40]</i> **Ben:** Yeah!

<i class="timecode">[00:47:40]</i> **Miško:** —in Google PageSpeed score just by doing this and nothing else.

<i class="timecode">[00:47:43]</i> **Ben:** So recently I went through a journey of fixing the performance metric on my own blog.

<i class="timecode">[00:47:50]</i> **Miško:** Mm-hmm?

<i class="timecode">[00:47:52]</i> **Ben:** Because, like, I was sending over, you know, static HTML, not sending over a framework, and somehow I was ending up with a 40 for my performance score on Lighthouse.

<i class="timecode">[00:48:03]</i> **Miško:** Yep, yep.

<i class="timecode">[00:48:03]</i> **Ben:** Which it seemed like just shouldn't have been possible, and like, one of— like, by far, one of the biggest offenders was I had a single YouTube embed on my homepage.

<i class="timecode">[00:48:12]</i> **Miško:** Yep.

<i class="timecode">[00:48:13]</i> **Ben:** Like—

<i class="timecode">[00:48:13]</i> **Miško:** Yes.

<i class="timecode">[00:48:13]</i> **Ben:** Like, truly third-party scripts are the death of web performance. 

<i class="timecode">[00:48:19]</i> **Miško:** Yes, they are! So, actually, let me show you. So we have Twitter. Where is Twitter? It's not Twitter? I thought there was Twitter in here. Oh, yeah, here's the Twitter stuff, right?

<i class="timecode">[00:48:32]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:48:32]</i> **Miško:** These Twitter things are also third-party and they are extremely expensive. Like, they keep the CPU going like crazy, and so it negatively impacts your performance. And so we actually do an interesting trick. If you navigate to a page. And let's inspect it, and then let's zoom out. Notice that half of the page is missing below the fold. We don't actually even send you the stuff below the fold. And it's only when you start scrolling then we download it, and then Twitter downloads and executes, right? So, if you look at the Network tab… and I just want JavaScript. Here we go. 

<i class="timecode">[00:49:12]</i> **Ben:** I do have to wonder about the accessibility ramifications of that, though. If there's, like, headings and stuff that screenreader users are expecting to navigate by? 

<i class="timecode">[00:49:23]</i> **Miško:** That's an excellent question. I don't — I'm not an expert on this particular case, so I don't know. But it is… the point here is not that we…

We basically give you tools, right?

<i class="timecode">[00:49:34]</i> **Ben:** Mm-hmm, yeah.

<i class="timecode">[00:49:34]</i> **Miško:** Existing frameworks can't really do this trick, because of hydration. They really need to rebuild the whole thing. Because Qwik is kind of DOM-centric, it can easily do this particular trick.

<i class="timecode">[00:49:45]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:49:46]</i> **Miško:** And, you know, on scroll, we kind of download, and then you see all this huge amount of JavaScript, which is all from Twitter, go and execute.

Now, the way we actually do that is — I think it's worth kind of talking about it for a second — is, we have this concept of a container. And there's a top-level container, which actually comes from an edge function. And inside of it is actually this container in here. Let's see where it is. Oh, here it is. In this container, and you can see that this actually is a different version of Qwik. So this one comes from Cloudflare, version 33. This one comes from Builder.io. It's actually a newer version. And so there's two different Qwik applications running on the single page. You don't really notice. And then in here, there is our lazy-loaded section token. And then when I start scrolling into the section, we insert yet another container. So we actually have three separate Qwik applications running on the page that just kind of got assembled for the user without the user even realizing. And so that's an interesting way to keep the performance of the page, you know, high.

And then we can do all these tricks without really much of an impact in the way the developer writes the code, and this is really the magical bit, right? The magical bit is not that Qwik has, you know, even better developer experience, even though we think we have a very good one. The magical bit is what Qwik can do at runtime.

<i class="timecode">[00:51:24]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:51:24]</i> **Miško:** Right? Basically, no matter — our claim is that, like, no matter how complicated your website gets, the startup performance is gonna stay constant.

<i class="timecode">[00:51:36]</i> **Ben:** That's awesome.

<i class="timecode">[00:51:36]</i> **Miško:** Right? Because—

<i class="timecode">[00:51:37]</i> **Ben:** That's so good.

<i class="timecode">[00:51:39]</i> **Miško:** Because startup performance has to do with, like, which piece of interaction do I have to download in order to process the user event, right? And because users can't click on the whole page at once, or interact with the whole page at once — they can only interact with one thing at a time —

<i class="timecode">[00:51:52]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:51:53]</i> **Miško:** —we can stream just the right amount of JavaScript for the UI as needed. 

<i class="timecode">[00:51:59]</i> **Ben:** That's awesome.

Okay, so the next thing I'm wondering then is, what does deployment look like for a Qwik app? Like, could I deploy it to Netlify, Vercel?

<i class="timecode">[00:52:09]</i> **Miško:** Yes.

<i class="timecode">[00:52:09]</i> **Ben:** Or, like, are there specific deploy targets? Or what do I need to know to deploy a Qwik site? 

<i class="timecode">[00:52:15]</i> **Miško:** Uh… do I have a demo? I'm just thinking off the top of my head. I don't know where the examples are. I'll stop on this site, but I think if you go to Qwik City…

Oh, sorry, it only shows the demo of the Express. So we have these middleware pieces. One is, for example, this is just shows how to hook it up to Express. It's pretty straightforward. Something very, very similar would be available for Netlify, Cloudflare, Vercel, and all of the common ones. It's just not documented here, but we have about six common ones that are currently out there, and every single one is about this much code. And so, one of the things we make sure is that…

So, let's step back for a second. If you look at the existing frameworks, and you can say like, "What is the responsibility of a framework?" And if you ask that question of existing frameworks, the answer is, well, the responsibility of the existing framework is to render on the client. Right? And then you say, well, "But we need server-side rendering." And so, to a large degree, the server-side rendering is kind of an afterthought. Like, the frameworks can do it, but it's an afterthought because of this hydration thing, right?

<i class="timecode">[00:53:24]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:53:25]</i> **Miško:** And if you come to Qwik and you say, "What is the responsibility of Qwik?," it's not gonna say, "Oh, client-side rendering." Qwik will say, actually, the responsibility of Qwik is the whole thing end-to-end, which includes client-side rendering, but also bundling. Like, Qwik cares about how to break up your code into pieces so that we can lazy load everything. It cares about serialization. It cares about restoring the state — resumability. It cares about prefetching of the code, and it cares about execution. It cares about SEO. And all of the pieces Qwik cares about, like, this is the core thing. What makes Qwik different is that instead of caring only about client-side rendering, Qwik says, "No, I wanna care about the whole thing, end-to-end." And the whole thing needs to get solved as a single unit in order for the system to behave properly, because if we only have one thing at a time, you know, you can't make such a good solution as when the system cares about the whole thing.

<i class="timecode">[00:54:31]</i> **Ben:** Yeah.

<i class="timecode">[00:54:31]</i> **Miško:** An example for this is this thing we have called Optimizer, right? Optimizer is… let's go back to our example. Here is Network, right? So if you look at the piece of code here, the user wrote "store.count++," but the Optimizer pulled it out into a separate file and then realized, "Yeah, but store actually got captured in the lexical scope, and so I have to restore it." And so the Optimizer injected extra piece of code. But in order for this extra piece of code to work, the runtime has to understand and expect that extra piece of code, right?

And if you have existing frameworks, existing frameworks basically say "Bundling is not my problem." That's fine… but then the bundler can't do any of these magical things, right? The bundler can't be like, "Oh, let me inject extra pieces of code here because, like, that's gonna break the semantic meaning for the framework itself."

<i class="timecode">[00:55:27]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:55:28]</i> **Miško:** So you have to have a cooperation between the runtime and the bundling system in order for this thing to work.

Another example is, for example, when I navigate to our homepage. Where is it? Here. One of the things you're gonna see is that we generate the prefetching scripts. So we look at the system, we look at the generated app, and then we say, "What possible ways can the user interact with this page?" And based on that, we then say, "Ah, this is the likely pieces of code that the user might need," and so we prefetch it so that when the user finally interacts with it, there is no delay. Right?

But in order for the framework to be able to do that, the runtime framework needs to be able to understand two things. First of all, it needs to understand where all the listeners are. And that's something that all frameworks inherently must understand, so that that's not the hard part. But then the framework also has to understand what is the structure of the bundles that got created as part of the build process. And that's something that existing frameworks just simply do not understand, right? And so we actually, when the bundling system happens, we produce something called the manifest, and this manifest is then handed over to the Qwik runtime so that the Qwik runtime can actually reason about the system and say, "Ah, you have a button here, and this button is actually stored inside of this chunk. And because it's a button that the user may interact with, I have to make sure to prefetch that piece of code." But in order for me to know how to prefetch the piece of code, I actually have to know what the bundle names are, right?

<i class="timecode">[00:57:00]</i> **Ben:** Mmm.

<i class="timecode">[00:57:00]</i> **Miško:** And so, it's a very different approach because you actually need to understand things that existing frameworks just simply… it's not part of the domain of understanding. 

<i class="timecode">[00:57:10]</i> **Ben:** Gotcha. Very neat. Very, very neat. Man, I need to find… I need to find an excuse to build something with Qwik. This is… this is very exciting to see.

<i class="timecode">[00:57:20]</i> **Miško:** We think so, too!

<i class="timecode">[00:57:24]</i> **Ben:** So… what are you excited about for the future of Qwik? Like, what kinds of things are you working on? What do you think people should expect to see going forward? 

<i class="timecode">[00:57:37]</i> **Miško:** Yeah. So, we have… so, Qwik is, like, a framework like React, Angular, Vue, and so on, right? On top of that, we have Qwik City. Qwik City is like Next.js or Nuxt or SvelteKit, so it's a metaframework.

And currently, we're working on something called Qwik SDK, and that actually is what glues the UI to our actual product. So if I go to the Qwik homepage, as you can see over here, one thing that I didn't show is that I can go and go to Qwik right here. And this is actually what Builder does, is it allows people to go and edit their pages. So this is your "Framework," and if you, for example, go here and say, "You know what? We don't need a exclamation point" — so, like, a marketing person can create A/B testing and so on and so forth. They can publish the update. And it takes about a minute to update, but in about a minute, you'll see that the exclamation point will disappear.

And so, we think that with this, we can not only have the fastest possible e-commerce websites, but we also have a situation where both the marketing people can worry about the content part of it and they can change it and update it, and then the developers can worry about the behavior and kind of the complicated pieces of like shopping carts, et cetera. And then the two pieces come together in a seamless integration.

<i class="timecode">[00:59:06]</i> **Ben:** That's very neat, very neat. Okay! Cool!

<i class="timecode">[00:59:11]</i> **Miško:** Let's see if the page updated already. Still there.

<i class="brackets">[Miško chuckles]</i>

<i class="timecode">[00:59:15]</i> **Ben:** Still there. By the way, I don't think I've ever had a guest be like, "I'm gonna update my product's website live on stream for you, Ben!"

<i class="brackets">[Miško chuckles]</i>

We're changing marketing copy.

<i class="timecode">[00:59:29]</i> **Miško:** There we go.

<i class="timecode">[00:59:29]</i> **Ben:** There it is! It's gone! You heard it here first. There's no more exclamation point. We are less excited about reimagining frameworks for the edge.

<i class="timecode">[00:59:37]</i> **Miško:** Oh!! In that case, I am gonna put that right back in!

<i class="brackets">[Miško laughs]</i>

<i class="timecode">[00:59:43]</i> **Ben:** So good.

And yeah, we've got a comment from W1ngMatt who says that we changed things on a Friday, no less. We could have caused an outage(!)

You know, deploying on Friday — what a risky thing, Miško(!) 

<i class="timecode">[00:59:55]</i> **Miško:** Yeah, but so that's kind of what Builder makes super easy, right? And so, we have this no-code solution, and with it, we actually have this amazing framework that can do things that I think other frameworks cannot.

And so, I think my parting words is that, really, I hope that I kind of made it clear how Qwik is different, right?

<i class="timecode">[01:00:14]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:00:14]</i> **Miško:** I know that we're in a world where, like, there's gazillions of frameworks to choose from, but I'm gonna go on a limb here and I'm gonna say that Qwik is actually fundamentally different. It really rethinks the way we build software. And because of that, I feel like in the future, you'll see all the new frameworks, I think, will be resumable. I don't think we will continue having the hydration paradigm because the hydration is the thing that keeps our websites slow. 

<i class="timecode">[01:00:42]</i> **Ben:** Thank you so much for your time, Miško. This has been great. I super appreciate having had you on. I'm so, so thankful for your time. Chat, stick around. We are going to find someone to raid. 

But in the meantime, you should know that next Tuesday, I've got Josh Goldberg on. Josh has literally written the book on learning TypeScript, so if you're interested in learning TypeScript, that's what we're doing next week, next Tuesday at 2pm Central Time.

Miško, thank you again. I'm gonna drop a link to your Twitter! Y'all… y'all, go follow Miško. But yeah, this has been great, and I guess, yeah, we can call it here! See y'all around!

<i class="timecode">[01:01:27]</i> **Miško:** Sounds good!

<i class="timecode">[01:01:29]</i> **Ben:** See y'all! Bye!