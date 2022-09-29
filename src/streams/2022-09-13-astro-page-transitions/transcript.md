<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all. Happy Tuesday. I had to check. I had to check whether it was Tuesday, just 'cause I've been doing Tuesday and Friday streams and there was a part of my brain that just, like, blanked right as I was about to say the weekday. But happy Tuesday! It's great to be here and it's great to be joined by Maxi. Maxi, hello. Welcome to the stream! 

<i class="timecode">[00:00:21]</i> **Maxi:** Thank you, thank you. Thank you for having me. 

<i class="timecode">[00:00:23]</i> **Ben:** I'm thrilled to have you, 'cause you've put out recently absolutely one of the coolest demos I've ever seen. Like, I saw it and knew I had to, like, bring you on to show off how you did it. But before we get into that, would you like to introduce yourself for anyone who hasn't seen you around yet?

<i class="timecode">[00:00:41]</i> **Maxi:** Yeah, absolutely! Yeah, my name is Maxi. I am a mostly frontend developer. I work at Help Scout, which is… we're building a customer support platform that is super easy to use and works just, just amazingly well.

And yeah, I've been recently involved, well, playing around with Astro. I am of the generation that kind of learned to code with PHP and… just, basically just raw HTML and CSS and PHP. And yeah, I guess that's why I found Astro so appealing to me that I decided to play with it. And most recently, been playing with these new transition APIs, which are really cool, so I'm excited to chat about those. 

<i class="timecode">[00:01:29]</i> **Ben:** Yeah, absolutely! I'm wondering if… 'cause we've done a couple streams lately over on Some Antics about Astro. Recently it was with Mayank! Let me put a link to that in the chat. But this, you mentioned the page transitions API, and this is, like… this is brand new stuff, and I was wondering if you could kind of talk about, like, what that is and what it's for and why we have it. 

<i class="timecode">[00:01:51]</i> **Maxi:** Yeah! So this came out… I think in May, they released an updated demo during Google I/O of this API that is called the shared element transition API. I'm gonna share a link to the blogpost. And it basically gives you a platform API that's native to the browser to do this sort of transition in between two states of the app, right? So you might be on page one and you wanna transition to page two with not just, like, having page one disappear and the next one appear, but you might want to do some sort of animation like a fade in, fade out animation, something like that. And traditionally, you were able to do this with SPAs, with a lot of JavaScript, and CSS maybe in some cases, these kind of animations. But now you're able to do them without any sort of framework, any sort of library. You can just call these platform APIs and have the transitions made for you, so, yeah. 

<i class="timecode">[00:02:51]</i> **Ben:** Yeah, so let's talk about that, right? 'Cause, like, you've mentioned we have been able to do this with, you know, a bunch of JavaScript, but…

<i class="timecode">[00:02:58]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:02:58]</i> **Ben:** …what makes it different now that this is, you know, a web platform API? Like, why does that matter?

<i class="timecode">[00:03:05]</i> **Maxi:** So, for SPAs it means that we can do this with a lot of JavaScript, like I mentioned before. We could do this, for example, if you're doing it with React, you can do… you can use react-transition-group, I think it's called, or, yeah, something like that. The library that lets you do these transitions with CSS. But now we can do this with less JavaScript and with the browser handling all the heavy lifting for you. You don't have to kind of block the main thread with all this work that JavaScript is doing because the browser is gonna do all that work for you. And for MPAs…

So, really quickly, the difference between MPA and SPA. So, MPA is a traditional website that performs the routing on the server. So when you navigate from page one to page two, you go to the server. You destroy the page completely, the previous page, and you render the new one. Doing this sort of transition animations on MPAs is currently impossible. You can't do that. But this API will allow that. Not at the moment, though. The API only supports SPAs at the moment. But an upcoming version — and there's already some… there are some discussions on GitHub of how the API will look like — they will support these transitions for MPAs. So that would be very exciting.

<i class="timecode">[00:04:28]</i> **Ben:** Yeah, Justin was… Justin in the chat hadn't heard what we were referring to, MPAs, which is a multi-page app, which is just, yeah, you've got a bunch of documents on a server or you've hit a server and it generates a document for you each time.

<i class="timecode">[00:04:44]</i> **Maxi:** Yes.

<i class="timecode">[00:04:45]</i> **Ben:** Yeah. And so… the APIs as they exist, you said that they're really built for single-page applications at the moment.

<i class="timecode">[00:04:57]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:04:58]</i> **Ben:** But you've been doing some work to get them to work for multi-page applications!

<i class="timecode">[00:05:03]</i> **Maxi:** Right! So, I'm… we're gonna be doing a demo now with Astro, similar to a demo that I did a few weeks ago. And Astro is… it's just a fantastic framework, for starters. But it's an MPA framework. It doesn't really, out of the box, support SPAs.

So, what we're gonna be doing first, to be able to use this animation or this transition API with Astro, we're gonna be kind of transforming the Astro MPA into a sort of false SPA, as I call it, because we're gonna give it a clientside router. And after doing that, we'll be able to do the animations. 

<i class="timecode">[00:05:43]</i> **Ben:** Gotcha. Yeah! I think what I'm gonna do real quick is I wanna… because I wanna start diving into actually, like, writing the code, but first I'm gonna share my screen. And just to call out, y'all, go follow Maxi on Twitter. Find cool demos like this.

But I wanna show you kind of, like , the demo that you put out there, and that way we can kind of talk it through — like, see, like, visually, some of the things that we might expect to see today, so—

<i class="timecode">[00:06:14]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:06:15]</i> **Ben:** Here's the demo that you've put out. And so that was an actual page navigation, right? Like, you just went from page to page. This is an Astro site, but you went from page to page, but it was, it was smooth, it was immersive, it was fluid, it was continuous. 

<i class="timecode">[00:06:34]</i> **Maxi:** Right, exactly. Yeah, yeah, that's the kind of interaction that we're trying to build, where there's a seamless transition between one page and the next, even though both of these pages are separate pages. They're rendered on the server somewhere but we are transitioning between them on the client. Yeah. 

<i class="timecode">[00:06:53]</i> **Ben:** Alright. Cool! So I wanna, dive into doing this. What say you? Shall we get into some code?

<i class="timecode">[00:07:01]</i> **Maxi:** Yeah! 

<i class="timecode">[00:07:02]</i> **Ben:** Alright!

<i class="timecode">[00:07:02]</i> **Maxi:** Let's do it, yeah.

<i class="timecode">[00:07:04]</i> **Ben:** Step one, I previously cloned a repo that Maxi sent me. I just wanted to drop a link in there so y'all know where we're starting from. And then, this is an experimental API, right? So it's not enabled by default? 

<i class="timecode">[00:07:20]</i> **Maxi:** Correct, yes. So, the first thing we need to do — we can do it now — is go to the…

I'm gonna share it in the Twitch. Ooh — no, I shared the wrong thing. Go to this. So we need—

The requirement is Chrome 104 or later. I think you're on 105, so you should be good. And this is an experimental API, so you need to enable it, because it's disabled by default. So yeah, it's called that. You have to go to that URL and change that to enabled. 

<i class="timecode">[00:07:52]</i> **Ben:** Oh, I have to relaunch Chrome, but you're on Chrome. Hang on just a sec.

<i class="timecode">[00:07:57]</i> **Maxi:** Oh.

<i class="timecode">[00:07:58]</i> **Ben:** We may… I may end up dropping this call real quick.

<i class="timecode">[00:08:06]</i> **Maxi:** No worries.

<i class="timecode">[00:08:11]</i> **Ben:** Hello, hello. Yeah, the perils of having to restart things mid-stream, huh? Let me… yeah. Alright. I maybe should have done this ahead of time. Are y'all still there? Can y'all still see in here? Hopefully, hopefully things are still fine. Alright. Yeah, David, you're absolutely right. It's not live unless you have to restart something! Okay! Let me join this call. Oh, man. Wait, wait, wait, wait a sec. Oh! Oh, oh, I see! Okay. I'm using a new service called Ping.

<i class="timecode">[00:09:02]</i> **Maxi:** Hello, hello.

<i class="timecode">[00:09:03]</i> **Ben:** There we go. Can you—

Wow, okay. I had to, like, restart everything, get access to the call. I can. Wow, okay. Wild. Ping is cool, wow! Alright! Yeah, for what it's worth, just so y'all see, if you're doing any sort of streaming, Ping — ping.gg — is rad! This is what I'm using to bring Maxi into my streaming software 

<i class="timecode">[00:09:26]</i> **Maxi:** I never dropped the… I never dropped the stream. 

<i class="timecode">[00:09:30]</i> **Ben:** Gotcha. Okay!

<i class="timecode">[00:09:31]</i> **Maxi:** Yeah.

<i class="timecode">[00:09:32]</i> **Ben:** Interesting. Alright, yeah, we should be good to go now. We should be good.

<i class="timecode">[00:09:37]</i> **Maxi:** Perfect.

<i class="timecode">[00:09:38]</i> **Ben:** So… 

<i class="timecode">[00:09:38]</i> **Maxi:** Oh, I can't see your screen anymore on…

<i class="timecode">[00:09:41]</i> **Ben:** Oh, let me fix that real quick.

<i class="timecode">[00:09:43]</i> **Maxi:** …on Ping.

<i class="timecode">[00:09:46]</i> **Ben:** Did I share the right screen? I don't know that I shared the right screen. I did not share the right screen. Let me stop that. Let me… there we go! It's not live unless it's broken! There we go! Alright! Cool.

<i class="timecode">[00:10:06]</i> **Maxi:** Nice. So yeah, so you told me you pulled this repo already…

<i class="timecode">[00:10:10]</i> **Ben:** Yeah.

<i class="timecode">[00:10:10]</i> **Maxi:** …for your local machine. And… I believe there is a branch. Are you on the "main" branch of the repo?

<i class="timecode">[00:10:18]</i> **Ben:** I'm on the "starter" branch.

<i class="timecode">[00:10:20]</i> **Maxi:** "starter," perfect.

I'm hearing an echo on my call. I don't know if that's… 

<i class="timecode">[00:10:27]</i> **Ben:** Oh, man. Are y'all hearing the echo as well? Let's see. Would you be echoing? No echo for the chat, okay.

<i class="timecode">[00:10:40]</i> **Maxi:** Okay.

<i class="timecode">[00:10:40]</i> **Ben:** Interesting.

<i class="timecode">[00:10:42]</i> **Maxi:** Cool.

<i class="timecode">[00:10:43]</i> **Ben:** Yeah, I wonder if my mic is just extra sensitive on here and you're picking up the fact that I'm playing you out of my speakers. Hopefully– hopefully it's bearable? 

<i class="timecode">[00:10:52]</i> **Maxi:** Yeah, no worries, no worries.

<i class="timecode">[00:10:54]</i> **Ben:** Okay, cool.

<i class="timecode">[00:10:55]</i> **Maxi:** Alright, so you have the repo pulled. So, this an Astro project. It has a couple of pages in it, so we're not starting from scratch really. But yeah, we're gonna start implementing something. So if you wanna run this repo with… on the CLI using npm run… npm run dev, I believe it is. There you go.

<i class="timecode">[00:11:23]</i> **Ben:** Yep. Alright! 

<i class="timecode">[00:11:27]</i> **Maxi:** Those should hopefully open the page we're gonna be working on, which is… it's a sort of e-commerce website, more or less, for guitars. We're gonna see how it looks like.

<i class="timecode">[00:11:47]</i> **Ben:** There is something about my machine whenever I run Astro. Like, it is purely in my thing, like, for whatever reason. If I'm running Astro while streaming, Astro just absolutely hangs. So—

<i class="timecode">[00:11:58]</i> **Maxi:** There you go.

<i class="timecode">[00:12:00]</i> **Ben:** No knock on the wonderful folks of Astro. This is purely my setup, and purely just when I'm streaming. But okay, yeah.

So let's take a look at what we've got here. And so you've built… it's a bit of a music-themed site, right? 

<i class="timecode">[00:12:17]</i> **Maxi:** Right. Yeah. Full disclosure, I cannot take any credit for the UI of this website because I… there's a link to a blogpost where the original UI was built, so.

<i class="timecode">[00:12:31]</i> **Ben:** Okay.

<i class="timecode">[00:12:32]</i> **Maxi:** Which I probably share on the screen. But yeah. This is the page we're gonna be looking at. A bunch of guitars. The UI looks really, really nice, but like I said, I can't take any credit for it. <i class="brackets">[laughs] And there's two pages, actually. There's this homepage. And when you click on one of those… one of those guitars, it'll take you to the next page, which should not be…

Yeah, we need to implement it. So we're gonna do that first, very quickly. So we might go to… dive into the code. And first of all, let's see the, yeah, that pages structure. As you can see, we have an index.astro. That's the index page, of course, where we are showing the list of products. And then we have, inside a products folder, we have another Astro component, which is… takes an ID, [id]</i>.astro, which… the route for this would be products/ and some ID, right? For example, 123.

And as you can see, both of these components, the index and the ID, they look almost exactly the same. And that's because what we're doing — and this is sort of a convention that we're using for when we transform this page into an SPA — is that we have kind of the content of the page be part of a different, a separate component, which in this case, I'm just calling a fragment. So the actual contents of the pages are in those fragments, those fragment components that are also on the pages directory.

<i class="timecode">[00:14:12]</i> **Ben:** Okay. And so we wanna be implementing the product details fragment? 

<i class="timecode">[00:14:17]</i> **Maxi:** Exactly, yeah. So if you go there, you'll see that it's mostly just a raw HTML page with some…

<i class="timecode">[00:14:25]</i> **Ben:** Yeah.

<i class="timecode">[00:14:25]</i> **Maxi:** …some stuff. Yeah. So we can delete all of this. We can remove all of it. And we're gonna be doing—

So this is another thing I didn't mention. This is using Astro SSR. So by default, Astro behaves… does static site generation. So it would create, like, HTML files during build time when you create an Astro page. But now we're gonna be doing SSR, which means that we're running this on a server, so the pages will be created on the fly whenever you request one of these pages.

<i class="timecode">[00:14:59]</i> **Ben:** Okay.

<i class="timecode">[00:15:00]</i> **Maxi:** And that's important because we're gonna be fetching the data from an API. You could do this with SSG as well, if you don't wanna do SSR. But since we're building a website that could potentially have, you know, thousands and thousands of products, then SSG could become, like, a bottleneck in those cases. So we're doing SSR.

And the first thing we're gonna do, we're gonna create one of those code fences for Astro, which lets you execute the JavaScript that will… that will execute at build time or in the server. And here — let me actually pull up my cheatsheet. We're gonna be making our request here to the API.

<i class="timecode">[00:15:45]</i> **Ben:** Okay.

<i class="timecode">[00:15:46]</i> **Maxi:** So, first of all, we need to grab the ID. So as you can see — as you saw — this file is called "<i class="brackets">[id]</i>.astro," and that ID is actually a parameter that we can get. So here we can say "const," and then open bracket like we're destructuring an object. And grab the `id` from the Astro.params object. So that will give us the ID. When we navigate to products/123, that `id` variable will be 123, right?

<i class="timecode">[00:16:16]</i> **Ben:** Cool.

<i class="timecode">[00:16:16]</i> **Maxi:** And then we're gonna make a fetch request. So we're gonna say "const response = fetch()." And I forgot I should have sent you the URL of this before, but there you go. That's the URL of the API that we're gonna be using. This is also, like, a very simple API.

<i class="timecode">[00:16:37]</i> **Ben:** Gotcha.

<i class="timecode">[00:16:37]</i> **Maxi:** And we're gonna pass the… we're gonna pass to the API, to the endpoint, we're gonna append the product ID at the end.

<i class="timecode">[00:16:51]</i> **Ben:** Like that?

<i class="timecode">[00:16:52]</i> **Maxi:** Yep, perfect.

<i class="timecode">[00:16:53]</i> **Ben:** Cool.

<i class="timecode">[00:16:53]</i> **Maxi:** And I think we need to await the fetch, right? We need to await that fetch call. In Astro, we can do top-level await, so we don't need to wrap this in an async function. So in the next line, we can do… we can say const data equals to, await the response.json() of this call, right?

So we have the data now, and now, since we're now gonna be building all the HTML for the details page, we can just render an Astro component that we already created. So below the code fence, below line 5, you can render the component, which is an Astro component called `<ProductDetails>`.

<i class="timecode">[00:17:39]</i> **Ben:** `<ProductDetails>`, okay.

<i class="timecode">[00:17:41]</i> **Maxi:** Yeah. You might get autocomplete like auto-importing. Maybe not. If you don't, you can import it from the components folder, which is, I think, three levels… three levels down.

<i class="timecode">[00:17:54]</i> **Ben:** Got it. Um… yeah. And is it a named export? 

<i class="timecode">[00:18:01]</i> **Maxi:** It's a default expert. I think, I believe all Astro components, when you're importing an Astro component, it's always a default export.

<i class="timecode">[00:18:08]</i> **Ben:** Ah, 

<i class="timecode">[00:18:08]</i> **Maxi:** gotcha.

Uh, yeah, I think it's three levels back, and then components. ProductDetails.astro.

<i class="timecode">[00:18:20]</i> **Ben:** Gotcha, okay.

<i class="timecode">[00:18:26]</i> **Maxi:** Yeah. And to `<ProductDetails>`, we need to pass the data. So, `<ProductDetails>` receives a "product" prop, which we can just pass that data object that we have because the type is exactly as the data returned by the API.

<i class="timecode">[00:18:41]</i> **Ben:** Gotcha.

<i class="timecode">[00:18:43]</i> **Maxi:** Yeah. So this should work now. If we navigate back to the browser, you should see that now we get a product page for every time we click on a guitar. See if that's true.

<i class="timecode">[00:18:56]</i> **Ben:** Alright! It's… there we go! Okay!

<i class="timecode">[00:19:00]</i> **Maxi:** There we go!

<i class="timecode">[00:19:01]</i> **Ben:** Gotcha! I do kinda wanna look at that `<ProductDetails>` component just to see, like — it was doing a lot of things there. Like, basically the whole page contents were in there.

<i class="timecode">[00:19:12]</i> **Maxi:** Yes.

<i class="timecode">[00:19:12]</i> **Ben:** But I just kinda wanna see more clearly what's going on, so… 

<i class="timecode">[00:19:18]</i> **Maxi:** It's just HTML. As you can see, this is just HTML. We are kind of pasting the data that we're passing in as a prop.

<i class="timecode">[00:19:25]</i> **Ben:** Yeah!

<i class="timecode">[00:19:25]</i> **Maxi:** But it's just HTML. There's a little bit of a loading screen, but yeah. It's nothing more than that.

<i class="timecode">[00:19:30]</i> **Ben:** Nice.

<i class="timecode">[00:19:30]</i> **Maxi:** Which is one of the really nice things about Astro: it's just HTML.

<i class="timecode">[00:19:36]</i> **Ben:** Yeah! Yeah, it's, like, there's nothing, like, nothing unusual about any of this, except for, you know, the JSX-esque brackets there. 

<i class="timecode">[00:19:46]</i> **Maxi:** Right, exactly, yeah.

<i class="timecode">[00:19:48]</i> **Ben:** Cool.

<i class="timecode">[00:19:49]</i> **Maxi:** So yeah! Okay, so now we have this, which is a traditional MPA, as we were talking about before. If you navigate back, that will render — that will request the homescreen again, which is another, like, another page request, right?

So the first step, before we do the transitions, we have to transform this into, like, a sort of SPA. And we're gonna do that with the Navigation API. And again, this… we only have to do this step now, what we're gonna do, because the API doesn't support MPAs at the moment.

<i class="timecode">[00:20:23]</i> **Ben:** But it's going to.

<i class="timecode">[00:20:25]</i> **Maxi:** It's going to. It's going to in the near future, hopefully. But for the meantime, we have to do something like what we're gonna do now, which we're gonna use the Navigation API. The Navigation API is another sort of experimental API. It's much more stable than the Transition API, but it still is not implemented across all browsers. And you can think of the Navigation API as kinda like the evolution of the History API.

<i class="timecode">[00:20:52]</i> **Ben:** Okay.

<i class="timecode">[00:20:52]</i> **Maxi:** If you look at clientside routers like React Router or any router for any framework that works on the client, they use a History API to kind of intercept the navigations to different pages, and instead of having the browser go to the next page, they say, "Okay, I'm gonna handle the rendering of this new component on the client."

But it's a bit clunky. It has some things that are not…

It predates SPAs, so it wasn't built with the needs of the SPAs in mind. So the Navigation API kind of changes that, so that's why I will not be using that API.

<i class="timecode">[00:21:31]</i> **Ben:** Gotcha.

<i class="timecode">[00:21:32]</i> **Maxi:** Alright. So, if you go to… there should be a file called spa-navigation.js in the scripts. There should be a "scripts" — yes, there you go. And it should be empty. We're importing a couple of… or, a few utility methods that we might or might not use. But for now we're gonna… we're gonna be working on that. Yeah, we can — I guess we can talk about this once we start using them.

<i class="timecode">[00:21:59]</i> **Ben:** Yeah!

<i class="timecode">[00:21:59]</i> **Maxi:** We're doing a bit of boilerplatey stuff that we need to do if we're kind of building this for, like, a real application. But for now, we're gonna start by doing this intercept of the navigation request, which we do by hooking into the navigate — or, sorry, the navigation object. So this there's a global object called navigation, which we can call. So we're gonna do navigation.addEventListener(). And we;re gonna listen for the 'navigate' event.

<i class="timecode">[00:22:30]</i> **Ben:** Okay.

<i class="timecode">[00:22:32]</i> **Maxi:** And I'm gonna pass a callback as a second parameter here, which can be an arrow function. And this callback receives an object called… we're gonna call it navigateEvent, which contains information about the navigation we're about to do.

<i class="timecode">[00:22:48]</i> **Ben:** Gotcha!

<i class="timecode">[00:22:49]</i> **Maxi:** So, yeah, so this is a global event and this is kind of the main difference between this API and the History API, is that with the History API, we don't really have a way to intercept all navigations. You have to manually say, "Okay, you know, when someone clicks on a link or a button or submits a form, then do this." With this, we are intercepting all types of events, which is, you know, it's handy.

<i class="timecode">[00:23:17]</i> **Ben:** Gotcha!

<i class="timecode">[00:23:18]</i> **Maxi:** Yeah. So… and with this — let me actually pull this up here. Alright, so… I said before we wanna know which page we're navigating to. And what we're gonna do is we're gonna grab the HTML fragment that corresponds to that page that we're navigating to, and we're gonna paste it in the DOM without having to navigate to the new page.

<i class="timecode">[00:23:43]</i> **Ben:** Okay! Gotcha, alright. So yeah, we're… I mean, the file's called "spa-navigation," but like, yeah, so you're basically prefetching all of the assets, and then instead of, like, doing a hard page load, you're just saying "Actually the DOM looks like what the new page would look like." 

<i class="timecode">[00:24:02]</i> **Maxi:** Uh, yeah! We're basically saying, "Okay, I'm about to navigate to the product details page. Now, instead of loading the entire page, I want to fetch the piece of HTML for the body of the new page and I want to replace the body with this new content," right?

<i class="timecode">[00:24:19]</i> **Ben:** Interesting. Okay.

<i class="timecode">[00:24:20]</i> **Maxi:** I don't wanna request the entire page again. I don't wanna do a full page navigation. I just wanna change this bit in the DOM with the new contents of the data that we can get, right? 

<i class="timecode">[00:24:30]</i> **Ben:** Again, the reason we have to do this is because currently, Page Transitions API doesn't support single-page — or, sorry, multi-page applications. It only supports single-page.

<i class="timecode">[00:24:39]</i> **Maxi:** Exactly.

<i class="timecode">[00:24:39]</i> **Ben:** So we have to basically create our own single-page app.

<i class="timecode">[00:24:42]</i> **Maxi:** Exactly, yeah, yeah.

<i class="timecode">[00:24:43]</i> **Ben:** Cool.

<i class="timecode">[00:24:44]</i> **Maxi:** So this is essentially a clientside route. So we're building our router on the client, which is what SPAs actually do.

So, alright, now we have this, we have to first get the URL of the page we're navigating to. Like, the destination URL.

<i class="timecode">[00:25:00]</i> **Ben:** Okay.

<i class="timecode">[00:25:00]</i> **Maxi:** And we can get that. We're gonna define a constant called toUrl. And we're gonna get it, we're gonna say this is a new URL, so we're gonna use the URL object. And we're gonna pass in the navigateEvent.destination.url.

<i class="timecode">[00:25:20]</i> **Ben:** Okay. Destination…

<i class="timecode">[00:25:22]</i> **Maxi:** So that's an URL object. Yes, ".url." That's a URL object with the page we're navigating to.

<i class="timecode">[00:25:30]</i> **Ben:** Cool.

<i class="timecode">[00:25:31]</i> **Maxi:** And we're gonna also grab the path from this — so, like, everything after the domain name — by saying… we're gonna define another… another constant called toPath. We're gonna say that this is equals to the toUrl.pathname.

<i class="timecode">[00:25:49]</i> **Ben:** Cool.

<i class="timecode">[00:25:50]</i> **Maxi:** Right. So in this case, when we navigate to the page that is, you know, localhost, /products/1, toPath will be "/products/1," right? 

<i class="timecode">[00:26:02]</i> **Ben:** Makes sense, makes sense.

<i class="timecode">[00:26:04]</i> **Maxi:** Yeah. And now what we're gonna do is we're gonna define a handler, and this is just an asynchronous function. 

<i class="timecode">[00:26:15]</i> **Ben:** Okay, do we wanna do that in this callback or outside?

<i class="timecode">[00:26:18]</i> **Maxi:** Yes. Yes, inside. Like, right next to the toPath, we're gonna say "const handler."

<i class="timecode">[00:26:23]</i> **Ben:** Okay!

<i class="timecode">[00:26:23]</i> **Maxi:** And we're gonna assign it to an asynchronous function because we want this to return a Promise. And inside of this function, we're gonna make a fetch request. And in this, we're gonna do a "const response = await fetch()."

<i class="timecode">[00:26:43]</i> **Ben:** Alright!

<i class="timecode">[00:26:44]</i> **Maxi:** And the URL that we're fetching is gonna be "/fragments." And then right next to it is gonna be the path, the toPath that we already defined. Yeah. And I don't think we need that second slash, because the path already starts with a slash, so…

<i class="timecode">[00:27:03]</i> **Ben:** Oh, okay. Oh, I see, got it.

<i class="timecode">[00:27:04]</i> **Maxi:** Yeah.

<i class="timecode">[00:27:05]</i> **Ben:** Okay, this one right here. Cool, okay.

<i class="timecode">[00:27:07]</i> **Maxi:** Yeah. So this will make up a request, and as you can see in the… if you show the directory…

Ohhh, okay!

If you show the pages, right. We have this fragments folder, and as you can see, the fragment… the files inside the fragments, they resemble, they have the same structure as the files in the pages directory. And this is just a convention that we're using. We don't have to follow this path, but I thought it would make it easier.

<i class="timecode">[00:27:37]</i> **Ben:** Ohhh, okay. Gotcha. Gotcha, so we're — like, yeah, this is just the HTML that makes up the specific, like, page contents for this specific product.

<i class="timecode">[00:27:48]</i> **Maxi:** Exactly.

<i class="timecode">[00:27:49]</i> **Ben:** It gets nestled inside of this larger products page, which is what we actually saw when we did the navigation. Okay, got it. 

<i class="timecode">[00:27:56]</i> **Maxi:** Exactly, yeah. You can think of the fragment as just the body, the main content of the page.

<i class="timecode">[00:28:02]</i> **Ben:** Got it.

<i class="timecode">[00:28:03]</i> **Maxi:** And the actual page is the page with everything else: the header, the `<head>` tag on the HTML, and all of that, right? 

<i class="timecode">[00:28:10]</i> **Ben:** It is worth calling out in this case, then, like, the fact that we can do this, like, fragments thing, this is specifically because you've set up this project to do that in that way.

<i class="timecode">[00:28:19]</i> **Maxi:** Exactly, exactly. And this is a convention because we can request the fragment for any path just knowing the pathname. We don't have to do things this way. We can define fragments in a different folder and just have, like, a map, maybe, a map of paths to fragments. We can do that, definitely. But in this case, it will make it easier if the pathname of the fragment just matches the pathname of the page. 

<i class="timecode">[00:28:47]</i> **Ben:** And just to, like, I guess, really, really hammer this home, I can go here, like, into my browser, and I can say "/fragments/products/5," and we're gonna get…

<i class="timecode">[00:28:58]</i> **Maxi:** Exactly.

<i class="timecode">[00:28:58]</i> **Ben:** Yeah! Yeah, yeah, yeah.

<i class="timecode">[00:29:00]</i> **Maxi:** We're gonna get just the HTML.

<i class="timecode">[00:29:01]</i> **Ben:** Yeah, it doesn't have the CSS that was applied at the page level, but yeah, okay, gotcha.

<i class="timecode">[00:29:06]</i> **Maxi:** Exactly.

<i class="timecode">[00:29:07]</i> **Ben:** Alright, alright.

<i class="timecode">[00:29:09]</i> **Maxi:** It's just the HTML. No CSS, no `<head>` tag, no header, as you can see.

And since it's just HTML, we can grab it as a piece of text. So, now we can do… we can define, on the next line, we can say that we wanna get the response.text().

<i class="timecode">[00:29:27]</i> **Ben:** Okay. I'll just call that, I guess, "html," perhaps. 

<i class="timecode">[00:29:31]</i> **Maxi:** Yeah, exactly.

<i class="timecode">[00:29:33]</i> **Ben:** Okay.

<i class="timecode">[00:29:34]</i> **Maxi:** ".text," and then you have to await this as well. 

<i class="timecode">[00:29:38]</i> **Ben:** Okay, and that's a method. Okay.

<i class="timecode">[00:29:40]</i> **Maxi:** Exactly, yeah.

<i class="timecode">[00:29:42]</i> **Ben:** Gotcha. 

<i class="timecode">[00:29:43]</i> **Maxi:** Mm-hmm.

Alright. So now we have the HTML for the new page and what we need to do is we're gonna update the contents of the page. Now, there is a function already that we are importing that's called updateTheDOMSomehow. We can see how that looks like, but it's very simple. Like, we're not doing anything super fancy here. We're just grabbing an element.

<i class="timecode">[00:30:05]</i> **Ben:** Okay! <i class="brackets">[giggles]</i> Gotcha.

<i class="timecode">[00:30:06]</i> **Maxi:** And we're just setting the innerHTML.

<i class="timecode">[00:30:09]</i> **Ben:** Okay, alright.

<i class="timecode">[00:30:11]</i> **Maxi:** And this will work really well for us. It has a couple of gotchas. One is that using innerHTML doesn't support streaming of HTML. So if we had… I don't think Astro supports kinda SSR streaming. But if it did, if we were building an app with a backend that supports streaming, innerHTML won't work that well for that. So for that, there are some… there's another method we can use instead of this. But the main drawback of this approach is that when you call… when you set the innerHTML of a `<div>`, it won't execute scripts automatically. So if the page has JavaScript, if the page that we're loading has any JavaScript, we will have to kind of recreate those `<script>` tags using the DOM for them to execute. But we don't have any JavaScript to worry about in this case, so we don't…

This works really well for us.

<i class="timecode">[00:31:06]</i> **Ben:** I am thinking that at one point, when I cleared out the product page, I think I…? Or was it here…? I think I might have cleared out a content `<div>`. Do I need to add that back in somewhere?

<i class="timecode">[00:31:22]</i> **Maxi:** Ah, no. No, no, no.

<i class="timecode">[00:31:23]</i> **Ben:** Okay, cool.

<i class="timecode">[00:31:24]</i> **Maxi:** No, this content `<div>` is in the layout.

<i class="timecode">[00:31:27]</i> **Ben:** Okay.

<i class="timecode">[00:31:28]</i> **Maxi:** We can take a look at this inside of layouts, Layout.astro. And it's just a `<div>`.

<i class="timecode">[00:31:34]</i> **Ben:** Okay, yeah.

<i class="timecode">[00:31:36]</i> **Maxi:** So yeah, so you can call that updateTheDOMSomehow function.

<i class="timecode">[00:31:43]</i> **Ben:** Gotcha - yeah, there it is. Okay, cool, cool, cool. Yep, alright. Yeah, we'll update the DOM somehow. Alright. And that's a beautiful name by the way. I wish I could… I wish I could bring a name like this into production.

<i class="brackets">[Maxi laughs]</i>

<i class="timecode">[00:32:03]</i> **Maxi:** It is a good name actually, right? It doesn't say anything about how you're updating the DOM, you know? So it's a good… it's a good abstraction, I think.

<i class="timecode">[00:32:10]</i> **Ben:** Yeah!

<i class="brackets">[Maxi chuckles]</i>

<i class="timecode">[00:32:14]</i> **Maxi:** Yeah, and that's all we need to do. Now if — oh, sorry, one more thing. So we just created this handler function, but we're not doing anything with it yet, so.

<i class="timecode">[00:32:21]</i> **Ben:** Right, okay.

<i class="timecode">[00:32:22]</i> **Maxi:** Right after the handler function, we need to call navigateEvent… dot… we're gonna call the transition — a method called transitionWhile. And inside of this, we're gonna pass… we're gonna call the handler function.

<i class="timecode">[00:32:38]</i> **Ben:** You said transitionY?

<i class="timecode">[00:32:40]</i> **Maxi:** Sorry, "while."

<i class="timecode">[00:32:42]</i> **Ben:** "while," okay.

<i class="timecode">[00:32:45]</i> **Maxi:** Yeah. 

<i class="timecode">[00:32:46]</i> **Ben:** And handler. 

<i class="timecode">[00:32:48]</i> **Maxi:** Yes, and we're gonna call the handler, actually, because this method accepts a Promise—

<i class="timecode">[00:32:54]</i> **Ben:** Oh!

<i class="timecode">[00:32:54]</i> **Maxi:** —which is what we're returning with the handler.

<i class="timecode">[00:32:58]</i> **Ben:** I see now, okay. 

<i class="timecode">[00:33:01]</i> **Maxi:** Yeah. So now, if we save this and go back to our page or website.

<i class="timecode">[00:33:09]</i> **Ben:** Yeah. Let me bring it back to the homepage.

<i class="timecode">[00:33:11]</i> **Maxi:** Yes.

<i class="timecode">[00:33:13]</i> **Ben:** And so if I click Space Fantasy here, it did subst— I mean, it looks the same, 'cause we haven't added any fancy transitions, right?

<i class="timecode">[00:33:22]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:33:23]</i> **Ben:** But that sort of… yeah. 

<i class="timecode">[00:33:27]</i> **Maxi:** Let me… let me get my video to catch up. I think it's seeing an old…

Hmm. I'm still looking at the details. Oh, are you on the details page now?

<i class="timecode">[00:33:38]</i> **Ben:** Yeah, I'm on the details page.

<i class="timecode">[00:33:40]</i> **Maxi:** Okay. Can you… okay, can you go back to the homepage and then click again on the product? 

<i class="timecode">[00:33:44]</i> **Ben:** Yeah. So, yep. I'll click on Mighty Eighties here. 

<i class="timecode">[00:33:49]</i> **Maxi:** Yep. Yeah, but this is… now this is, like, an SPA type of navigation. We didn't…

<i class="timecode">[00:33:54]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:33:55]</i> **Maxi:** We didn't change the page. So, if you wanna… if you wanna make this clear, or more clear that there's a difference between what we had before and now, you can go to the Layout.astro page.

<i class="timecode">[00:34:09]</i> **Ben:** Alright.

<i class="timecode">[00:34:11]</i> **Maxi:** Or component. And when we are rendering the `<Header>`… you can pass to the `<Header>` there, on line 33, you can pass a prop that is called "withAnimation" and another called "withCounter." We're gonna add both to…

<i class="timecode">[00:34:31]</i> **Ben:** Okay?

<i class="timecode">[00:34:34]</i> **Maxi:** Yeah, we can say just "withAnimation" that with the default, I think, is true.

<i class="timecode">[00:34:40]</i> **Ben:** Okay.

<i class="timecode">[00:34:41]</i> **Maxi:** And also "withCounter."

<i class="timecode">[00:34:44]</i> **Ben:** "withCounter," okay.

<i class="timecode">[00:34:45]</i> **Maxi:** Mm-hmm. And these are just visual… I guess, visual helpers to help us see the difference between the traditional MPA navigation and this SPA navigation that we're building.

<i class="timecode">[00:34:55]</i> **Ben:** Gotcha. So that would be, if I go to Diamond Crafter here…

I didn't see anything different this time.

<i class="timecode">[00:35:05]</i> **Maxi:** Um…

<i class="timecode">[00:35:07]</i> **Ben:** Oh, it could just be that Astro's taking a while to rebuild, too. 

<i class="timecode">[00:35:10]</i> **Maxi:** Oh, maybe.

<i class="timecode">[00:35:12]</i> **Ben:** Yeah.

<i class="timecode">[00:35:12]</i> **Maxi:** So you should see, the header should have, like, a little animation. 

<i class="timecode">[00:35:19]</i> **Ben:** Try refreshing. Oh, okay, we've — yeah, okay. So we've got an animation. We've got a counter. This counter should not be interrupted. The animation shouldn't be interrupted.

<i class="timecode">[00:35:28]</i> **Maxi:** Exactly.

<i class="timecode">[00:35:29]</i> **Ben:** And I'll just go here. Yeah, counter's still going. Animation's still going.

<i class="timecode">[00:35:36]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:35:37]</i> **Ben:** Nice, okay! Oh, that's a good illustration of that! Well done. 

<i class="timecode">[00:35:41]</i> **Maxi:** Yeah. Well, yeah, I guess it helps visualize, because right now we didn't do anything super fancy, so it's hard to see the difference between what we did before and now.

<i class="timecode">[00:35:50]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:35:51]</i> **Maxi:** But yeah! So, alright. Now that we have this, we can start using the transitions.

<i class="timecode">[00:35:56]</i> **Ben:** Yeah!

<i class="timecode">[00:35:57]</i> **Maxi:** And it's very… it's very simple once we have this. We can go back to the, to the spa-navigation file we were working on.

<i class="timecode">[00:36:07]</i> **Ben:** Alright. Ooh… editor has decided to think about things. Okay. Cool, cool, cool. Yep! 

<i class="timecode">[00:36:17]</i> **Maxi:** And here in the… we can go back to the… where we're updating the DOM. We can comment that out. The call to updateDOMSomehow, comment that out. So we're not gonna be updating the DOM right away. We're gonna do it as part of a transition.

<i class="timecode">[00:36:35]</i> **Ben:** Okay.

<i class="timecode">[00:36:35]</i> **Maxi:** So, what we're gonna do here is we're gonna call… we're gonna create a new transition object. So we're gonna say "const transition = document.createDocumentTransition()."

<i class="timecode">[00:36:54]</i> **Ben:** Okay…? And this… this right here, this is part of the experimental APIs, right? You wouldn't have—

<i class="timecode">[00:37:00]</i> **Maxi:** Exactly.

<i class="timecode">[00:37:00]</i> **Ben:** —or, we wouldn't have this if we hadn't turned on…

Okay, cool. 

<i class="timecode">[00:37:04]</i> **Maxi:** Exactly, yes, yes. This is only available because we have enabled that feature flag.

And now with this transition object, it has a start() method that we can call, so we can do transition.start().

<i class="timecode">[00:37:17]</i> **Ben:** Okay.

<i class="timecode">[00:37:18]</i> **Maxi:** And we can pass a callback to the transition. 

<i class="timecode">[00:37:24]</i> **Ben:** Alright. So, and any ol' new callback?

<i class="timecode">[00:37:28]</i> **Maxi:** Any… yeah, any callback. Doesn't have to be async. And here we can… now we can update the DOM.

<i class="timecode">[00:37:36]</i> **Ben:** Gotcha.

<i class="timecode">[00:37:37]</i> **Maxi:** So the call to update the DOM, we can do it inside of this callback.

<i class="timecode">[00:37:42]</i> **Ben:** Alright!

<i class="timecode">[00:37:43]</i> **Maxi:** So if we see how it looks now, we will see that it should transition between the two pages with a sort of, fade in, fade out kind of animation.

<i class="timecode">[00:37:56]</i> **Ben:** Yeah! My frame rate is borked, but yes. It's so subtle, but, like… hopefully, chat, you can see this just fine. Let me know. Hopefully the frame rate lines up there, but it's just a subtle kind of jump. 

<i class="timecode">[00:38:12]</i> **Maxi:** We can… yeah! And we can, actually, since this can be targeted with CSS, we can now slow down the transitions so there is more visibility.

Okay!

So, if you go to… I think there's a file called transitions.css. Should be a file over there. Mm-hmm. 

<i class="timecode">[00:38:30]</i> **Ben:** transitions.css.

<i class="timecode">[00:38:34]</i> **Maxi:** Yes. 

<i class="timecode">[00:38:34]</i> **Ben:** Alright.

<i class="timecode">[00:38:36]</i> **Maxi:** Yeah. Yeah, it's an empty file. And now here we can target the elements that make up the transition. So basically the way it works is, when we called transition.start(), that grabbed a screenshot of the page before updating the DOM.

<i class="timecode">[00:38:52]</i> **Ben:** Okay.

<i class="timecode">[00:38:53]</i> **Maxi:** And then when the callback that we passed finished executing, it grabbed another screenshot, this time containing, like, the new, updated DOM. And then the transition happened. It's just a CSS animation happening between the incoming and outgoing screenshots.

Okay.

So in this case, one is fading in, one is fading out. And the way we target those screenshots is using a pseudo-element CSS value I guess, or target.

Okay.

So we can do colon-colon, and it's called "page-transition."

<i class="timecode">[00:39:31]</i> **Ben:** "page-transition," okay. 

<i class="timecode">[00:39:34]</i> **Maxi:** "-outgoing-image."

<i class="timecode">[00:39:39]</i> **Ben:** Alright.

<i class="timecode">[00:39:40]</i> **Maxi:** And here, we can pass in parentheses, after "image," we can pass the name of the element, because we can transition multiple elements. In this case, we're transitioning the entire page and that entire page has an ID called "root," so we can pass "root" here. And sorry, it's not an ID. It's a tag, so we don't have to prepend with…

<i class="timecode">[00:40:05]</i> **Ben:** Okay, so like that. 

<i class="timecode">[00:40:08]</i> **Maxi:** Right. That's right, yeah. And we can also target the incoming image. So if we… you can add, like, a second line there to target the incoming image.

<i class="timecode">[00:40:19]</i> **Ben:** Okay.

<i class="timecode">[00:40:21]</i> **Maxi:** And to both, we can say that the animation duration, we want to be, like, 5 seconds, for example.

<i class="timecode">[00:40:26]</i> **Ben:** Gotcha. Should we keep these two separate, you think? Or are we just gonna basically do the same thing? 

<i class="timecode">[00:40:32]</i> **Maxi:** We can combine them. Yeah, we can combine them.

<i class="timecode">[00:40:34]</i> **Ben:** Gotcha. You said 5 seconds animation duration. There we go. 

<i class="timecode">[00:40:41]</i> **Maxi:** Exactly.

<i class="timecode">[00:40:42]</i> **Ben:** Yeah.

<i class="timecode">[00:40:43]</i> **Maxi:** And we can combine the rules, too. We don't have to duplicate the CSS.

<i class="timecode">[00:40:48]</i> **Ben:** Alright, cool. 

<i class="timecode">[00:40:48]</i> **Maxi:** Yeah, exactly.

<i class="timecode">[00:40:49]</i> **Ben:** Happy with that. Alright! 

<i class="timecode">[00:40:52]</i> **Maxi:** Uh, yeah. So now, if you refresh the page, you should see that it takes five seconds to the transition, which should be hopefully more visible. There we go.

<i class="timecode">[00:41:02]</i> **Ben:** Okay!

<i class="timecode">[00:41:02]</i> **Maxi:** This is slow! 

<i class="timecode">[00:41:03]</i> **Ben:** It's nice and graceful! I love that. 

<i class="timecode">[00:41:05]</i> **Maxi:** Yeah. <i class="brackets">[chuckles]</i> Yeah!

Yeah, so we have… this is the default behavior, right? We didn't define anything about fading in or fading out, right?

<i class="timecode">[00:41:16]</i> **Ben:** Right.

<i class="timecode">[00:41:16]</i> **Maxi:** We just used the defaults. But we can, of course, change those. So I believe I sent you some animations…

<i class="timecode">[00:41:28]</i> **Ben:** Yeah…

<i class="timecode">[00:41:28]</i> **Maxi:** …via chat for you. 

<i class="timecode">[00:41:29]</i> **Ben:** Oh, you're gonna have to resend that to me because I restarted the browser! 

<i class="timecode">[00:41:34]</i> **Maxi:** Absolutely. Let me see.

<i class="timecode">[00:41:36]</i> **Ben:** Cool, cool, cool.

<i class="timecode">[00:41:36]</i> **Maxi:** So these are just CSS… regular CSS animations. So, I just sent it. 

<i class="timecode">[00:41:46]</i> **Ben:** And am I putting this…? I'm not putting this inside the… I'm just putting it here at the, like…

<i class="timecode">[00:41:51]</i> **Maxi:** Yeah, you can put it anywhere outside of this… this file. I don't think you could do it before or after, I think.

<i class="timecode">[00:42:03]</i> **Ben:** I thought my editor was gonna reformat that for me, but…

<i class="brackets">[Maxi chuckles]</i>

I'm listening. You go ahead. I'm just gonna make this a little more readable. 

<i class="timecode">[00:42:14]</i> **Maxi:** Alright, so now we're gonna… now we're gonna have to split the two, because we're gonna have a different animation for the incoming and outgoing images.

<i class="timecode">[00:42:23]</i> **Ben:** Okay.

<i class="timecode">[00:42:23]</i> **Maxi:** So, we're gonna have to split the rule at the top. 

<i class="timecode">[00:42:28]</i> **Ben:** Right, yeah, let me go ahead and do that. Alright. And I'll have the top one be our outgoing.

<i class="timecode">[00:42:37]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:42:37]</i> **Ben:** And this bottom one be our incoming. Alright. 

<i class="timecode">[00:42:40]</i> **Maxi:** Yeah. So now, in the outgoing, we're gonna use the fade-out and slide-down animations. We're gonna do both of those. As you can see, we have four animations here: fade-in, fade-out, slide-up, and slide-down.

<i class="timecode">[00:42:57]</i> **Ben:** Okay.

<i class="timecode">[00:42:58]</i> **Maxi:** So, on the top one, we're gonna, we're gonna do "animation," and I can send you the whole screen so we don't have to type it down.

<i class="timecode">[00:43:08]</i> **Ben:** Oh, if you'd like, yeah!

<i class="timecode">[00:43:10]</i> **Maxi:** Yeah. Because, you know, it has the cubic Bézier curve… kind of parameters that…

<i class="timecode">[00:43:21]</i> **Ben:** Gotcha.

<i class="timecode">[00:43:21]</i> **Maxi:** There you go.

<i class="timecode">[00:43:22]</i> **Ben:** Okay.

<i class="timecode">[00:43:22]</i> **Maxi:** And I'll send you the one for the… send you the one for the incoming as well. 

<i class="timecode">[00:43:29]</i> **Ben:** Okie-doke. And… there we go. Alright, cool! And so this cubic-bezier, this is… so, it's doing two things. It's fading in and it's sliding down, so…

<i class="timecode">[00:43:52]</i> **Maxi:** Mm-hmm. 

<i class="timecode">[00:43:53]</i> **Ben:** I'm excited to see what that's like.

<i class="timecode">[00:43:54]</i> **Maxi:** So the outgoing image is gonna fade out and slide down, and the incoming image is gonna fade in and slide up, right, in this case.

<i class="timecode">[00:44:05]</i> **Ben:** Gotcha. Back to the homepage…

<i class="timecode">[00:44:10]</i> **Maxi:** Yeah. If you click on the cross icon on the top right, it should take you back to the homepage. That's a regular HTML link. 

<i class="timecode">[00:44:18]</i> **Ben:** Okay. Good to know.

Alright, so I'm gonna click this. The browser's — okay, yeah, the browser's not entirely happy with me, but yeah, I see what… 

<i class="timecode">[00:44:31]</i> **Maxi:** Yeah, this might not be the best type of animation to… maybe to demo this, but yeah, we changed the default behavior, which was the fade in, fade out thing.

<i class="timecode">[00:44:41]</i> **Ben:** Yeah.

<i class="timecode">[00:44:41]</i> **Maxi:** It's moving around a little bit.

Oh, yeah, we can comment it out. We're gonna go back to this animation later. We're gonna use it for something else. We're gonna reuse it.

<i class="timecode">[00:44:51]</i> **Ben:** Okay!

<i class="timecode">[00:44:52]</i> **Maxi:** But yeah, for now, you can comment that out. At least those, yeah.

<i class="timecode">[00:45:03]</i> **Ben:** That… that… 

<i class="timecode">[00:45:07]</i> **Maxi:** Alright. So, so far what we did was we're transitioning between the two pages and we're transitioning them as a whole, right? We're not targeting different elements. We're just transitioning the entire thing.

<i class="timecode">[00:45:20]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:45:21]</i> **Maxi:** But the API provides a way to transition multiple elements separately with different animations and different transitions. So what we can do here is, in this page, we can have that guitar image on the homepage to kind expand into the full image on the next page. 

<i class="timecode">[00:45:38]</i> **Ben:** Okay! This is, when we were showing the Twitter video you'd posted, you were doing that with movie posters, like having that just kind of move around as, like, the idea of, like, having something consistent that, like, persists between, you know, quote–unquote "pages."

<i class="timecode">[00:45:55]</i> **Maxi:** Exactly, yes.

<i class="timecode">[00:45:56]</i> **Ben:** Cool, okay.

<i class="timecode">[00:45:56]</i> **Maxi:** Yes, that's a great way to show, yeah, to show that where this element on page one exists on page two, right? It gives you context.

<i class="timecode">[00:46:05]</i> **Ben:** Yeah.

<i class="timecode">[00:46:06]</i> **Maxi:** So… so, yeah! So, we can do that. And to do that, we need to do… we need to apply what's called a transition tag to an element on the page. In this case, it's gonna be the movie poster. I believe those, on the details page, they have a class called "product." If you go to… yes. The image, you have a class called "product-image," right?

<i class="timecode">[00:46:32]</i> **Ben:** Okay.

<i class="timecode">[00:46:32]</i> **Maxi:** Yeah. So we're gonna define that class in the CSS file. 

<i class="timecode">[00:46:38]</i> **Ben:** Gotcha. Alright. So let me put it in.

<i class="timecode">[00:46:42]</i> **Maxi:** Yeah.

<i class="timecode">[00:46:43]</i> **Ben:** Just here?

<i class="timecode">[00:46:44]</i> **Maxi:** Yeah.

<i class="timecode">[00:46:44]</i> **Ben:** And it's just .product — ooh — .product-image. 

<i class="timecode">[00:46:49]</i> **Maxi:** And we're gonna set two attributes. One is called "page-transition-tag."

<i class="timecode">[00:46:59]</i> **Ben:** Okay.

<i class="timecode">[00:47:00]</i> **Maxi:** And here, we can pass any value we want. We're gonna pass "product-image" as well, so that it matches the classname. 

<i class="timecode">[00:47:07]</i> **Ben:** Okay, "productimage," like this?

<i class="timecode">[00:47:10]</i> **Maxi:** Mm-hmm. We can say product dash image.

<i class="timecode">[00:47:13]</i> **Ben:** Okay!

<i class="timecode">[00:47:13]</i> **Maxi:** I don't think it matters too much, but just in case.

<i class="timecode">[00:47:16]</i> **Ben:** Sure.

<i class="timecode">[00:47:16]</i> **Maxi:** And then the second property is gonna be one that is required. It's called "contain."

"contain" or "contains"?

"contain: paint." And the value's gonna be "paint."

<i class="timecode">[00:47:28]</i> **Ben:** "paint."

<i class="timecode">[00:47:28]</i> **Maxi:** This one is to… yeah, this one, we're saying that kind of that no elements are overlapping the contents of this image, right? And this is kind of like a requirement for doing these transitions that… I don't know exactly if they need the "contain: paint" property or just they need, like, a new stacking context similar to when we have, like, a "position: relative" or "position: absolute," right?

<i class="timecode">[00:47:52]</i> **Ben:** Okay.

<i class="timecode">[00:47:53]</i> **Maxi:** But the first tag there is the one that is defining the transition tag. And now we can…

Basically, what the browser is gonna do is that when an element has a transition tag, it will take a separate screenshot of that element.

<i class="timecode">[00:48:07]</i> **Ben:** Oh, okay!

<i class="timecode">[00:48:08]</i> **Maxi:** So we can transition between… we can animate that element separately from the rest of the page, right?

<i class="timecode">[00:48:15]</i> **Ben:** Gotcha, so I could do… I'm expecting to be able to do something like copy these down here and instead of saying "root" in here…

<i class="timecode">[00:48:22]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:48:23]</i> **Ben:** …I'm expecting to say "product-image." 

<i class="timecode">[00:48:27]</i> **Maxi:** Exactly, yes.

<i class="timecode">[00:48:28]</i> **Ben:** Okay.

<i class="timecode">[00:48:28]</i> **Maxi:** You can do that, yeah. You can definitely do that. You can control the animation and the duration, all of that, of these elements.

<i class="timecode">[00:48:36]</i> **Ben:** Gotcha.

<i class="timecode">[00:48:38]</i> **Maxi:** Now, the only thing now is that that product-image only exists on the details page, right? Because on the index page…

<i class="timecode">[00:48:46]</i> **Ben:** Okay.

<i class="timecode">[00:48:46]</i> **Maxi:** …we can't really… we can't really give the tag, the product-image tag, to every image on that document, because the browser then wants to know which image to use to transition…

<i class="timecode">[00:49:01]</i> **Ben:** Yeah!

<i class="timecode">[00:49:01]</i> **Maxi:** …to the next page, right? So, we have to do… we're gonna have to do this with JavaScript. And we can do this in the spa-navigation file that we have.

<i class="timecode">[00:49:13]</i> **Ben:** Okay! And what, are we just… you know, when you…? May I take a guess?

<i class="timecode">[00:49:20]</i> **Maxi:** Yes.

<i class="timecode">[00:49:21]</i> **Ben:** My guess is that on this navigation event, like, probably as part of our… somewhere in this event, we would query for the specific image in the, like, link that was clicked.

<i class="timecode">[00:49:35]</i> **Maxi:** Yes.

<i class="timecode">[00:49:36]</i> **Ben:** And we'll add, like, a class or some unique selector to it, and then we can use that as our transition tag. 

<i class="timecode">[00:49:44]</i> **Maxi:** Exactly, yeah. That's exactly what's gonna happen. And we have to do this before we transition, before we update the DOM, so…

<i class="timecode">[00:49:52]</i> **Ben:** Okay.

<i class="timecode">[00:49:52]</i> **Maxi:** And we can do this before starting the transition? Yeah, we have to do this before starting the transition, actually.

<i class="timecode">[00:50:01]</i> **Ben:** Alright, cool.

<i class="timecode">[00:50:02]</i> **Maxi:** Yeah.

<i class="timecode">[00:50:03]</i> **Ben:** So let me…

<i class="timecode">[00:50:03]</i> **Maxi:** So, before you call transition.start(), yes.

<i class="timecode">[00:50:07]</i> **Ben:** Yeah.

<i class="timecode">[00:50:07]</i> **Maxi:** And there is actually a helper function that… over there, is called getLink.

<i class="timecode">[00:50:13]</i> **Ben:** Okay.

<i class="timecode">[00:50:14]</i> **Maxi:** And that should give you — if you pass the path, the toPath here. 

<i class="timecode">[00:50:20]</i> **Ben:** Okay.

<i class="timecode">[00:50:22]</i> **Maxi:** That should give you the anchor tag element or the link element for the link we're navigating to.

<i class="timecode">[00:50:31]</i> **Ben:** Alright. 

<i class="timecode">[00:50:34]</i> **Maxi:** And now, here, we can say… we can query the… within the clicked link, we can query the product image. Yeah. 

<i class="timecode">[00:50:46]</i> **Ben:** Yep. And I can just do "img," right? You don't have multiple images in there? 

<i class="timecode">[00:50:52]</i> **Maxi:** I believe so, yeah! I think this should work. I didn't check, but yeah, we can do that.

<i class="timecode">[00:50:56]</i> **Ben:** I can confirm it real quick.

<i class="timecode">[00:50:59]</i> **Maxi:** You can go to Card.astro. That's it. That's the component that has the UI. 

<i class="timecode">[00:51:04]</i> **Ben:** Okay, gotcha. Card.astro. Yeah, it's the only image, but you know what? I'll go ahead and use the class that's been set here for that.

<i class="timecode">[00:51:15]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:51:21]</i> **Ben:** There we go. And my guess is we would do "image.classList.add()," and then do you have a name you like to use for this? 

<i class="timecode">[00:51:34]</i> **Maxi:** Well, we can add the same classname we already defined that it's product-image, right?

<i class="timecode">[00:51:38]</i> **Ben:** Oh, okay, yeah!

<i class="timecode">[00:51:40]</i> **Maxi:** Because the idea is to… we just wanna give it the transition tag, and that .product-image class is doing that, deciding the transition.

<i class="timecode">[00:51:47]</i> **Ben:** Gotcha, makes sense.

<i class="timecode">[00:51:50]</i> **Maxi:** Yeah. So the only bit of cleanup that we need to do is, when we start atransition but before the updated DOM, we want to actually remove the classname.

<i class="timecode">[00:52:04]</i> **Ben:** Okay. So here, it's gonna be "image.classList.remove('product-image')." 

<i class="timecode">[00:52:16]</i> **Maxi:** Exactly, yeah.

<i class="timecode">[00:52:17]</i> **Ben:** Okay.

<i class="timecode">[00:52:19]</i> **Maxi:** And I think that should be it! I think that should now transition between the two images, if you go to…

<i class="timecode">[00:52:26]</i> **Ben:** Alright. Do we need to… do we wanna…? What do we wanna have in our CSS for this?

<i class="timecode">[00:52:33]</i> **Maxi:** We don't need to have anything. We can just… yeah, we can just use the default animations, because the API will also automatically transition the position and the size of the elements.

<i class="timecode">[00:52:48]</i> **Ben:** Ohh! Okay! That's cool! That is so cool!

<i class="timecode">[00:52:55]</i> **Maxi:** So if you go back, yeah, we have to do something else to transition back because…

<i class="timecode">[00:53:02]</i> **Ben:** Oh!

<i class="timecode">[00:53:02]</i> **Maxi:** …on this page, the transition… the link doesn't exist, right? We're calling the link—

<i class="timecode">[00:53:08]</i> **Ben:** Yeah.

<i class="timecode">[00:53:09]</i> **Maxi:** —but it doesn't exist on the page. So you might need to refresh the page here, because we…

<i class="timecode">[00:53:15]</i> **Ben:** Okay.

<i class="timecode">[00:53:16]</i> **Maxi:** Yeah.

<i class="timecode">[00:53:17]</i> **Ben:** Cool.

<i class="timecode">[00:53:17]</i> **Maxi:** But you should see, yeah. It should now expand. Yeah, you can try it with anything. Yeah. So… yeah. And then we can… yeah, we can, I guess, handle the back piece where—

<i class="timecode">[00:53:36]</i> **Ben:** Yeah!

<i class="timecode">[00:53:36]</i> **Maxi:** —we're navigating back. To do this… so, we have to do this with JavaScript because now we need to do kind of the opposite.

<i class="timecode">[00:53:44]</i> **Ben:** Okay.

<i class="timecode">[00:53:46]</i> **Maxi:** We need to find… we need to find the link after we've updated the DOM, right?

<i class="timecode">[00:53:54]</i> **Ben:** Okay.

<i class="timecode">[00:53:56]</i> **Maxi:** So, let me think. We can do this in a couple different ways. I think… probably the easiest way would be to…

So, there's a utility function there that I am… should be…

<i class="timecode">[00:54:13]</i> **Ben:** Okay.

<i class="timecode">[00:54:14]</i> **Maxi:** getNavigationType.

Yeah, getNavigationType… that basically returns a string that's either "home-to-product" or "product-to-home," based on the path that you're gonna pass, right? So it's saying if we're navigating from the homepage to the product page, it will return "home-to-product."

<i class="timecode">[00:54:32]</i> **Ben:** Gotcha.

<i class="timecode">[00:54:32]</i> **Maxi:** So we can call this function. We can call this function that I believe accepts, both paths, the fromPath and the toPath. Oh, we don't have the fromPath, sorry. We need to define the fromPath first.

<i class="timecode">[00:54:43]</i> **Ben:** Gotcha. That's just…

<i class="timecode">[00:54:45]</i> **Maxi:** And that is just gonna be location.pathname.

<i class="timecode">[00:54:48]</i> **Ben:** "fromPath = location.pathname."

<i class="timecode">[00:54:53]</i> **Maxi:** Yes.

<i class="timecode">[00:54:54]</i> **Ben:** There we go. And then where do we wanna call our getNavigationType? Like, where's the best place in here to…? 

<i class="timecode">[00:55:00]</i> **Maxi:** We can add it just below that line, below line 13, I think we can just call it—

<i class="timecode">[00:55:06]</i> **Ben:** Okay.

<i class="timecode">[00:55:08]</i> **Maxi:** —there. Yeah, we just defined a navigationType object and… sorry, variable. We pass those. Exactly. 

<i class="timecode">[00:55:16]</i> **Ben:** Yep, okay.

<i class="timecode">[00:55:19]</i> **Maxi:** Yeah.

<i class="timecode">[00:55:21]</i> **Ben:** And then we could do "if navigationType is 'home-to-product'…"

<i class="timecode">[00:55:31]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:55:32]</i> **Ben:** Then we wanna do our handler and our transitionWhile, right? Like, we just wanna move both of these up?

<i class="timecode">[00:55:38]</i> **Maxi:** Uh, yeah. Yeah, I think we can move both. Yeah. 

<i class="timecode">[00:55:41]</i> **Ben:** Is there a way you'd prefer to do it? 

<i class="timecode">[00:55:43]</i> **Maxi:** No, that's…

No, that will work. I think we only need to move the handler. Let me think.

<i class="timecode">[00:55:49]</i> **Ben:** Okay.

<i class="timecode">[00:55:50]</i> **Maxi:** Yeah. Oh, but yeah, but then we need to define the handler outside of the "if." So that's fine. It doesn't.

<i class="timecode">[00:55:55]</i> **Ben:** Yeah, we'll have it in… yeah, in there. Okay.

<i class="timecode">[00:55:58]</i> **Maxi:** Yeah.

<i class="timecode">[00:55:58]</i> **Ben:** Otherwise, if the navigationType is going the other way, which would be…

<i class="timecode">[00:56:03]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:56:04]</i> **Ben:** "product-to-home…" 

<i class="timecode">[00:56:05]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:56:07]</i> **Ben:** Then we're gonna need a different handler.

<i class="timecode">[00:56:14]</i> **Maxi:** Yes, and it will be largely the same as the other handler. We can just copy that and make the…

<i class="timecode">[00:56:20]</i> **Ben:** Alright.

<i class="timecode">[00:56:20]</i> **Maxi:** …make the adjustments, I guess.

<i class="timecode">[00:56:22]</i> **Ben:** Yeah.

<i class="timecode">[00:56:24]</i> **Maxi:** So, the fetch call, everything is just the same because we are requesting the fragment from the path. But now…

Let me see. Now we have to get the…

When we get the link, we're gonna do it inside of that transition. 

<i class="timecode">[00:56:46]</i> **Ben:** Oh, okay. So we'll move this down, alright. 

<i class="timecode">[00:56:49]</i> **Maxi:** Mm-hmm.

And it's inside of the transition and after updating the DOM, right? Because the link exists on the page only after we updated the DOM with the new index page, right?

<i class="timecode">[00:57:03]</i> **Ben:** Alright.

<i class="timecode">[00:57:05]</i> **Maxi:** So we get the link, we get the image, and we add the classname here.

<i class="timecode">[00:57:10]</i> **Ben:** Gotcha. So… like that.

<i class="timecode">[00:57:13]</i> **Maxi:** Mm-hmm, exactly.

And then the removal of the classname. We also need to remove the classname. And we can do this in the… we can do it after the start() method finishes, we can chain a .then().

<i class="timecode">[00:57:28]</i> **Ben:** Oh, okay. Yeah.

<i class="timecode">[00:57:30]</i> **Maxi:** So that will be after the transition happens, now remove the classname. And we need to do this because if you go back to the homepage, right? If we don't remove that classname from that… from that element, then the next time you click a different element, then two elements will have the classname, right? And the browser will not know which one it should use to do the transition.

<i class="timecode">[00:57:55]</i> **Ben:** Gotcha, okay. Alright!

<i class="timecode">[00:58:00]</i> **Maxi:** So now it will navigate also, when you navigate back.

<i class="timecode">[00:58:08]</i> **Ben:** Let me refresh. 

<i class="timecode">[00:58:10]</i> **Maxi:** Oh, yeah, sure. 

<i class="timecode">[00:58:11]</i> **Ben:** Alright, so… there, we're able to go to this page.

<i class="timecode">[00:58:17]</i> **Maxi:** Mm-hmm.

<i class="timecode">[00:58:17]</i> **Ben:** Then if I click our X… it does take us back.

<i class="timecode">[00:58:22]</i> **Maxi:** Uh-oh.

<i class="timecode">[00:58:22]</i> **Ben:** I think I was expecting a bit of a smoother transition? 

<i class="timecode">[00:58:26]</i> **Maxi:** It should be smooth. Maybe we're not…

Mm, let's see. What could be…?

<i class="timecode">[00:58:32]</i> **Ben:** Yeah, it just kind of jumps back.

<i class="timecode">[00:58:35]</i> **Maxi:** Yeah, it could be because it's not finding…

Oh, I think—

Go back to the… yes, because I think…

Hmm. Oh, when we are fetching the link, when you were calling the getLink() function, I think we need to pass the fromPath here, because we are fetching the link that has the URL of the page we are currently at. Remember that in this scenario, we are on the product page, and we're navigating back to the homepage.

<i class="timecode">[00:59:09]</i> **Ben:** Oh, okay! Okay. Right. And so having done that, we think that this is gonna fix our transition. 

<i class="timecode">[00:59:19]</i> **Maxi:** I believe so. Yeah, I think so. 

<i class="timecode">[00:59:23]</i> **Ben:** Oh, and then Mayank thinks that the image might not exist in "then." Oh! No, there we go. Nice! 

<i class="timecode">[00:59:31]</i> **Maxi:** Now we get back, yes.

<i class="timecode">[00:59:35]</i> **Ben:** Alright!

<i class="timecode">[00:59:35]</i> **Maxi:** "'image' doesn't exist in 'then.'" I don't…

Oh– yeah, that's right.

<i class="timecode">[00:59:42]</i> **Ben:** Oh, yeah.

<i class="timecode">[00:59:42]</i> **Maxi:** So "image"… we need to define "image" outside of the transition. So…

<i class="timecode">[00:59:47]</i> **Ben:** Okay.

<i class="timecode">[00:59:47]</i> **Maxi:** Yeah, we just define it as a let…

<i class="timecode">[00:59:49]</i> **Ben:** Oh, yeah.

<i class="timecode">[00:59:50]</i> **Maxi:** …binding, I guess. And then we… yeah, that's a good call.

<i class="timecode">[00:59:58]</i> **Ben:** Alright. 

<i class="timecode">[01:00:00]</i> **Maxi:** Yeah.

<i class="timecode">[01:00:02]</i> **Ben:** Give it another refresh. That seems to be necessary.

Nice. Then I'll let that finish, 'cause why not? And… this just kind of zapped back there, but it's very cool! That is so cool.

<i class="timecode">[01:00:22]</i> **Maxi:** Yeah!

<i class="timecode">[01:00:23]</i> **Ben:** Alright! 

<i class="timecode">[01:00:23]</i> **Maxi:** So, yeah, so we're not handling things like latency in this example, but we could definitely— like, for example, if the request takes too long, right? We'll run into a case where we click on the link, the URL updated to the new page… but I'm still looking at the old page because the new page fragment is still fetching, right?

So we can fix this in a couple ways. One is using prefetching. That kind of solves the issue, but we can't prefetch every product detail page. We have to choose, you know, the most popular one or something like that.

<i class="timecode">[01:01:02]</i> **Ben:** Sure. Makes sense.

<i class="timecode">[01:01:03]</i> **Maxi:** Yeah. Or we could use some templating as well. If we wanna update… we could update to a template instantly and then let it finish, and once it finishes, it will load. Once the actual data is loaded, we replace the template with the actual data. 

<i class="timecode">[01:01:24]</i> **Ben:** Okay! Yeah, that makes sense.

<i class="timecode">[01:01:26]</i> **Maxi:** Yeah. 

<i class="timecode">[01:01:26]</i> **Ben:** Okay.

<i class="timecode">[01:01:27]</i> **Maxi:** So we can try to do something like that. Let me see if I have…

<i class="timecode">[01:01:30]</i> **Ben:** Sure!

<i class="timecode">[01:01:31]</i> **Maxi:** Yeah. 

<i class="timecode">[01:01:33]</i> **Ben:** Let's go for it. Do you…? Yeah, you're checking your notes for that?

<i class="timecode">[01:01:37]</i> **Maxi:** I'm checking my notes. Let me see. I don't really have very good notes, so let me see if I can make sense of what I have. But yeah, basically we wanna do—

Oh, and we can try this. If you wanna remove the animation delay so that it's… or make it, you know, not so big. Maybe, like, a second or something.

<i class="timecode">[01:01:57]</i> **Ben:** Yeah. Just a second all around?

<i class="timecode">[01:02:00]</i> **Maxi:** Yeah, just a second should be… should be good. And then what we can do is we can delay the request from the API. So if you go back to that <i class="brackets">[id]</i>.astro fragment, there you go. You can pass a query param to the URL of the API called "delay." You can pass it, like, three seconds or something.

<i class="timecode">[01:02:23]</i> **Ben:** Okay, is that just gonna be "3"?

<i class="timecode">[01:02:24]</i> **Maxi:** Oh, sorry, it's "3000."

<i class="timecode">[01:02:26]</i> **Ben:** "3000," okay.

<i class="timecode">[01:02:27]</i> **Maxi:** Yes. So now, you should see what we were talking about, where you're on the homepage, you click on a product, but that product takes three seconds to load, but you're still looking at the homepage, right? You don't have any visual cues.

<i class="timecode">[01:02:43]</i> **Ben:** Ah. Oh, yeah.

<i class="timecode">[01:02:43]</i> **Maxi:** You don't have any cues that something is happening.

One thing that I didn't mention: if you go back… if you go back and do this again, you'll see that the favicon in the browser kind of starts spinning when you…

<i class="timecode">[01:02:57]</i> **Ben:** Yeah.

<i class="timecode">[01:02:58]</i> **Maxi:** …when you are loading the new page, right? And that's because we get this for free from the Navigation API. This is something that you don't get when you're using the History API. You have to kind of build this yourself. But with the Navigation API, we get… it's basically mimicking a native browser navigation, and you get all of the benefits that come with that. You get all the, you know, all the accessibility features that come with that because you are announcing, you know, to the user—

<i class="timecode">[01:03:25]</i> **Ben:** Oh, bless.

<i class="timecode">[01:03:25]</i> **Maxi:** —that the page is actually loading.

<i class="timecode">[01:03:27]</i> **Ben:** Oh, bless. Oh my god. Finally! Finally! Routers that make sense! 

<i class="timecode">[01:03:35]</i> **Maxi:** Yes. Yes. And it has a bunch of other features, like it handles scrolling automatically. It handles focus state. So it's a really good API.

<i class="timecode">[01:03:44]</i> **Ben:** Okay.

<i class="timecode">[01:03:46]</i> **Maxi:** So… so, yeah! We have a slow network request now.

<i class="timecode">[01:03:51]</i> **Ben:** Yeah.

<i class="timecode">[01:03:52]</i> **Maxi:** And we can do what we talked about, where we're gonna, instead of waiting for the data to finish and then update the DOM, we're gonna update the DOM right away with a template and then once the data comes in, we're gonna replace the template with the actual data.

<i class="timecode">[01:04:07]</i> **Ben:** Okay.

<i class="timecode">[01:04:08]</i> **Maxi:** So, first thing we need to do is we need to go to…

Let's go to the index.astro fragment.

<i class="timecode">[01:04:17]</i> **Ben:** Got it! And… there we go, okay. index.astro fragment.

<i class="timecode">[01:04:26]</i> **Maxi:** Mm-hmm.

Let me… there we go. So here we are mapping this—

We didn't see this file before, but we're just making a fetch call to some API endpoint, we're mapping through the products, and we are just rendering the `<Card>` components, right?

So what we can do here is, below the `<Card>` component, in the next line, we can actually render the `<ProductDetails>`…

I forgot how it's called. `<ProductDetails>` component that is the one that we are using for the product details fragment, so it's the same Astro component.

<i class="timecode">[01:05:05]</i> **Ben:** Okay!

<i class="timecode">[01:05:05]</i> **Maxi:** And you get the auto-import, which is really nice.

<i class="timecode">[01:05:10]</i> **Ben:** Yep.

<i class="timecode">[01:05:13]</i> **Maxi:** And here, we're gonna pass the product. We're gonna pass the product object, just like that product we already have defined there, so we just say "product={product}."

<i class="timecode">[01:05:27]</i> **Ben:** Alright, gotcha.

<i class="timecode">[01:05:28]</i> **Maxi:** Yeah. And I forgot. So we're gonna wrap this details, the product details, in a `<template>` element. So we're gonna create a `<template>` with an ID. We can give it whatever ID we want, as long as it has kind of the ID of the product. 

<i class="timecode">[01:05:46]</i> **Ben:** Okay, wait. So ID of the product, you said? So like…

<i class="timecode">[01:05:51]</i> **Maxi:** Yeah, so it can be, like, "product-id," for example.

<i class="timecode">[01:05:55]</i> **Ben:** Okay, gotcha. I see.

<i class="timecode">[01:06:01]</i> **Maxi:** Yeah, exactly. So now we have this `<template>`, and here we have one `<template>` for each card on the page. In theory, if we wanna…

If we were doing a real website, I guess for performance reasons, we'd only have one `<template>`, and then we'd replace the contents of that `<template>` with the product that was clicked. But in this case, this is much easier, so we're gonna just do that.

<i class="timecode">[01:06:28]</i> **Ben:** Okay.

<i class="timecode">[01:06:29]</i> **Maxi:** So now if you go back to the spa-navigation page. I'm sorry, file. When we are doing the home-to-product navigation, when we are updating the DOM, instead of updating the DOM here with the HTML, we're gonna… we're gonna get the template data from the DOM. It should already be a template here. So we're gonna say document.getElementById(), and the ID of our `<template>`. 

<i class="timecode">[01:07:04]</i> **Ben:** Okay. document.getElementById(). It should be…

<i class="timecode">[01:07:13]</i> **Maxi:** Product, dash.

Oh, and we don't have the ID here. We only have…

There is a getPathId utility that should be included already. There you go.

<i class="timecode">[01:07:24]</i> **Ben:** Gotcha.

<i class="timecode">[01:07:25]</i> **Maxi:** You can pass the toPath to that function and that will just give you the ID from the path. 

<i class="timecode">[01:07:33]</i> **Ben:** Alright, and this gonna be toPath.

<i class="timecode">[01:07:36]</i> **Maxi:** Mm-hmm.

<i class="timecode">[01:07:36]</i> **Ben:** Alright. And use that new ID here.

<i class="timecode">[01:07:42]</i> **Maxi:** Mm-hmm. 

<i class="timecode">[01:07:43]</i> **Ben:** And then…

<i class="timecode">[01:07:44]</i> **Maxi:** And now, instead of… yes, exactly. That would be template.innerHTML. So we're gonna grab the contents of the `<template>` and we're gonna update the DOM with that. Right.

<i class="timecode">[01:07:52]</i> **Ben:** Gotcha, okay.

<i class="timecode">[01:07:54]</i> **Maxi:** So now, we can do in the…

We're still making the fetch, so this is still not gonna work very well, because we're making the fetch call before. So we're gonna move the fetch call to after… after we do the transition. So…

<i class="timecode">[01:08:10]</i> **Ben:** Oh, okay, gotcha.

<i class="timecode">[01:08:11]</i> **Maxi:** We can chain the .then() function to the start() method, yeah. 

Alright.

And we're gonna move all the fetching code to this function. We're gonna do it after the transition. 

<i class="timecode">[01:08:29]</i> **Ben:** Gotcha. And is that just…? Oh, it would be the "const response" and the "html" and…

<i class="timecode">[01:08:38]</i> **Maxi:** Yes. And we need another call to update the DOM, this time with the real stuff. 

<i class="timecode">[01:08:45]</i> **Ben:** Okay. I see. Got it, okay. Gotcha. It needs to be async to use that await. And then updateTheDOMSomehow(). There it is. It took a while for the tooltip to come up. And it'll just be "html," right? So, we're doing, like, two substitutions where it's like, we've already got access to the `<template>` information, right? We've already, like, rendered that on the page. So we can go ahead and start using that, and that's our first substitution. And then the second substitution is the, like, real new page content. 

<i class="timecode">[01:09:25]</i> **Maxi:** Exactly, yeah.

<i class="timecode">[01:09:26]</i> **Ben:** Okay.

<i class="timecode">[01:09:26]</i> **Maxi:** Yeah. So now, no matter how slow the request is for a new page, we're still gonna transition instantly, but this time with a `<template>`. And then once the data loads, it's gonna replace that with it. 

<i class="timecode">[01:09:41]</i> **Ben:** Cool!!! Okay! That's so cool! 

<i class="timecode">[01:09:46]</i> **Maxi:** Yeah! And another kind of nice thing is that we didn't have to create this `<template>` separately. We used the same exact Astro component that we are using for this view to create our `<template>`, so that's another cool benefit, I guess. 

<i class="timecode">[01:10:01]</i> **Ben:** Yeah! That is so nifty. Wow, okay!

<i class="timecode">[01:10:08]</i> **Maxi:** Yeah.

<i class="timecode">[01:10:11]</i> **Ben:** Alright, is there anything more you wanted to show off or work through while you've got the floor?

<i class="timecode">[01:10:18]</i> **Maxi:** Let's see. We can cover…

Well, we could animate. Hm. There's some things we could—

Like, I have, on the final, if you look at the final version of the animation, it also kinda expands that block of… that kind of gray `<div>` that you have there.

We could do that as well with kind of the same… yeah, we can, I guess, yeah, add some niceties to this animation to make it more complete. So, alright, so we're gonna animate that box as well, and we're gonna animate the actual contents of the page. So, the text on the detail page, we're gonna make it show up.

So we need to… again, we need to capture those as separate screenshots, so we're gonna create a couple of new classnames. 

<i class="timecode">[01:11:07]</i> **Ben:** Okay. And are these…? Are these already in the markup? 

<i class="timecode">[01:11:16]</i> **Maxi:** They are. Yes, they are in the markup, so we don't need to change them.

<i class="timecode">[01:11:22]</i> **Ben:** Okay.

<i class="timecode">[01:11:23]</i> **Maxi:** So we're gonna call them "product-bg" for the background and "product-info."

<i class="timecode">[01:11:32]</i> **Ben:** Okay, like, here we're we're changing the classes in the markup? 

<i class="timecode">[01:11:36]</i> **Maxi:** No, no, we don't need to… no, we don't need to change the the template. We can just define the classnames here.

<i class="timecode">[01:11:41]</i> **Ben:** Okay.

<i class="timecode">[01:11:42]</i> **Maxi:** And these are… these exist on the details page. They don't exist on the…

<i class="timecode">[01:11:48]</i> **Ben:** Oh, okay.

<i class="timecode">[01:11:50]</i> **Maxi:** …on the index page, I guess.

<i class="timecode">[01:11:51]</i> **Ben:** Alright, so then it's…

<i class="timecode">[01:11:52]</i> **Maxi:** Oh, it's just, it's just a dash. "product-bg."

<i class="timecode">[01:11:54]</i> **Ben:** Cool!

<i class="timecode">[01:11:55]</i> **Maxi:** There you go. 

<i class="timecode">[01:11:56]</i> **Ben:** We're good!

<i class="timecode">[01:11:58]</i> **Maxi:** And we can copy what we have above, the transition tag and the "contain: paint."

<i class="timecode">[01:12:05]</i> **Ben:** Alright. This needs a new name, right?

<i class="timecode">[01:12:08]</i> **Maxi:** Exactly. We can just say "product-bg." And then we're gonna define another classname called "product-info." Again, just a copy of those.

<i class="timecode">[01:12:20]</i> **Ben:** Alright!

<i class="timecode">[01:12:23]</i> **Maxi:** Yeah, and if you look at the `<ProductDetails>` component, the Astro file, that should already have those classnames applied. 

<i class="timecode">[01:12:30]</i> **Ben:** Yeah, okay!

<i class="timecode">[01:12:32]</i> **Maxi:** "product-info," "product-image." Perfect. So for the info part, we're actually gonna reuse those animations that we commented out here.

<i class="timecode">[01:12:44]</i> **Ben:** Okay.

<i class="timecode">[01:12:45]</i> **Maxi:** Yeah, those commented lines. We're gonna reuse them, but this time we're gonna apply them to the product-info tag. So we can just copy those. Yeah. 

<i class="timecode">[01:12:57]</i> **Ben:** Yep. That. product-info…

Nuke the durations here, and…

<i class="timecode">[01:13:08]</i> **Maxi:** Yeah.

<i class="timecode">[01:13:09]</i> **Ben:** …restore the animations. Alright. 

<i class="timecode">[01:13:12]</i> **Maxi:** Mm-hmm. And actually, for the incoming image one, we're gonna add also an animation delay. We're gonna set animation-delay… let's say one second, because we have these other transitions that take one second, too. So we're gonna add this to animate after the others.

<i class="timecode">[01:13:32]</i> **Ben:** Okay.

<i class="timecode">[01:13:33]</i> **Maxi:** Alright. So, now for the product-info, we don't need to do anything special because product-info only exists on the details page.

<i class="timecode">[01:13:44]</i> **Ben:** Okay.

<i class="timecode">[01:13:44]</i> **Maxi:** But product-bg, actually, that… we have the same kind of problem that we had with the image, in that we need to add the tag kind of with JavaScript. So we don't need to define any new CSS for the…

<i class="timecode">[01:14:00]</i> **Ben:** Do we not need, like, incoming and outgoing images for product-bg? 

<i class="timecode">[01:14:06]</i> **Maxi:** Yeah, if we wanna define a specific animation duration, we can. If not…

<i class="timecode">[01:14:12]</i> **Ben:** Ah, right, yeah, there's defaults. Okay. 

<i class="timecode">[01:14:15]</i> **Maxi:** Mm-hmm.

<i class="timecode">[01:14:15]</i> **Ben:** We can just comment that out.

<i class="timecode">[01:14:17]</i> **Maxi:** Yeah. We actually don't need any of those, yeah, unless we wanted to slow down the animation duration, so…

We should be okay.

<i class="timecode">[01:14:27]</i> **Ben:** Yeah, so I'll just use the defaults for those. Okay, so we need the detail. Okay, so where are we…? 

<i class="timecode">[01:14:35]</i> **Maxi:** Yeah, we need to do the same… kind of the same treatment that we did for the image, but this time for the background, that product-bg object. So here, we need to, again, query for the product background.

<i class="timecode">[01:14:50]</i> **Ben:** Are we doing that…? Sorry, are we doing this in home-to-product? We are, right? 

<i class="timecode">[01:14:56]</i> **Maxi:** Yeah, we need to do it in both places, because this is the same kind of scenario that we have for the image, right?

<i class="timecode">[01:15:02]</i> **Ben:** Got it.

<i class="timecode">[01:15:02]</i> **Maxi:** So, here we can say, yeah, background can be clickedLink.querySelector(), and I think it's "product--bg," maybe? 

<i class="timecode">[01:15:16]</i> **Ben:** "--bg?" I thought it was just "-bg." 

<i class="timecode">[01:15:20]</i> **Maxi:** We're getting… so we're getting the classname that we have defined in the `<Card>` component. Oh, sorry, it's "__bg."

<i class="timecode">[01:15:32]</i> **Ben:** Details under— right, right?

<i class="timecode">[01:15:34]</i> **Maxi:** No, we're looking at the Card.astro component. 

<i class="timecode">[01:15:39]</i> **Ben:** Oh, okay. Gotcha.

<i class="timecode">[01:15:40]</i> **Maxi:** Yes.

<i class="timecode">[01:15:40]</i> **Ben:** I see, okay. 

<i class="timecode">[01:15:41]</i> **Maxi:** Yeah.

<i class="timecode">[01:15:42]</i> **Ben:** Gotcha.

<i class="timecode">[01:15:42]</i> **Maxi:** We're targeting… we're targeting the element in the card before transitioning into the details page.

<i class="timecode">[01:15:48]</i> **Ben:** Gotcha, okay.

<i class="timecode">[01:15:50]</i> **Maxi:** So that's underscore-underscore, yeah.

<i class="timecode">[01:15:53]</i> **Ben:** Okay.

<i class="timecode">[01:15:56]</i> **Maxi:** And now we need to give it the classname product-bg.

Could have used different, less confusing classnames here. 

<i class="timecode">[01:16:07]</i> **Ben:** Yeah, I feel like if this were, you know, if I were going to town on, like, setting this up on like my own site, I would…

<i class="timecode">[01:16:14]</i> **Maxi:** Yes.

<i class="timecode">[01:16:14]</i> **Ben:** I personally would probably use a convention of, like, "home-product-background" or something like that, you know, with a… 

<i class="timecode">[01:16:22]</i> **Maxi:** Yes, absolutely. So in this case… so to make…

So product__bg is kind of the presentational class. It gives it the styles.

<i class="timecode">[01:16:31]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:16:31]</i> **Maxi:** And product-bg is the class that we just defined to give the transition tag. So yeah, sorry. Sorry, it's a bit…

<i class="timecode">[01:16:39]</i> **Ben:** No, you're good. 

<i class="timecode">[01:16:42]</i> **Maxi:** We need to do the same thing to remove it after… yeah. Right after the… 

<i class="timecode">[01:16:52]</i> **Ben:** Yes. Where do we typically…? 

<i class="timecode">[01:16:55]</i> **Maxi:** Line 20…

Below line 24, we have an image.

<i class="timecode">[01:16:59]</i> **Ben:** Oh, yep.

<i class="timecode">[01:17:00]</i> **Maxi:** Yeah.

<i class="timecode">[01:17:00]</i> **Ben:** Thank you.

<i class="timecode">[01:17:01]</i> **Maxi:** And we do the same thing for bg. 

<i class="timecode">[01:17:04]</i> **Ben:** Remove class "product-bg." 

<i class="timecode">[01:17:06]</i> **Maxi:** Exactly. And we need the same thing on the other side of the "if." Could just copy what we have. 

<i class="timecode">[01:17:14]</i> **Ben:** Yeah. Fotcha. That's gonna be…

<i class="timecode">[01:17:19]</i> **Maxi:** Yeah.

<i class="timecode">[01:17:20]</i> **Ben:** …this, but bring it down here. Then down here, we need to remove that class again, so it'd be classList.remove().

<i class="timecode">[01:17:31]</i> **Maxi:** Mm-hmm.

<i class="timecode">[01:17:33]</i> **Ben:** "product-bg." Cool! 

<i class="timecode">[01:17:35]</i> **Maxi:** And we need to do the same thing, moving the definition of bg outside of the start() method. 

<i class="timecode">[01:17:42]</i> **Ben:** Yes, we do. bg… 

<i class="timecode">[01:17:47]</i> **Maxi:** There you go.

Alright, so now, hopefully, after all of these changes, it should be a nicer sort of transition between the two pages.

<i class="timecode">[01:17:59]</i> **Ben:** Right, yeah.

Yeah it was quick, but the gray box is… yeah, the gray box is, like, popping out and now…

<i class="timecode">[01:18:11]</i> **Maxi:** Mm-hmm.

<i class="timecode">[01:18:12]</i> **Ben:** …it'll kind of collapsed inwards.

<i class="timecode">[01:18:15]</i> **Maxi:** Yeah.

<i class="timecode">[01:18:15]</i> **Ben:** That's so cool. So cool. 

<i class="timecode">[01:18:18]</i> **Maxi:** Yeah, yeah. It's, yeah, it's a lot of fun to play with the animations. 

<i class="timecode">[01:18:23]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:18:24]</i> **Maxi:** I'm not an animations or CSS expert, as you probably guessed by my classnames. But yeah, it's a lot of fun to play with that. 

<i class="timecode">[01:18:34]</i> **Ben:** Absolutely. Yeah, that is so fun, and I'm super thrilled to be seeing more and more of this stuff pop up in the, like, browser. 'Cause we were talking in the green room ahead of time, but, like, having seamless transitions like this… this is one of the things that, like, native mobile experiences have, like, quote, "always had" on the browser, you know? Like, oh, you could slide between pages and stuff like that. Like, it looks nice and seamless. And the "download a document, download another document, download another document" model of the web and browsers just hasn't cooperated with that. And to do this, you've had to… like, you've had to have a whole single-page application, which, you know, as we've seen, introduces its own, like, routing issues and whatnot. And so to see more and more of the stuff land in the browser, land in the way that, like… I imagine most browsers are gonna have an option where you could turn off transitions. Like as a user, you could turn off transitions, like "prefers reduced transition" or something.

<i class="timecode">[01:19:38]</i> **Maxi:** Mm-hmm.

<i class="timecode">[01:19:39]</i> **Ben:** Giving people more control, rather than JavaScripting it away.

<i class="timecode">[01:19:44]</i> **Maxi:** Yes. So actually I've seen a tweet recently that the upcoming version of this API will have the transitions disabled by default if the user has prefers reduced motion.

<i class="timecode">[01:19:59]</i> **Ben:** Okay.

<i class="timecode">[01:19:59]</i> **Maxi:** This isn't the case right now, so the transitions are not disabled by default, but they will be, and you can manually opt in to say, "Okay, I actually want to have some transitions, but I'm gonna handle them separately, right? I'm gonna listen for the media query and do, like, slower transitions or something like that." So that's still the option, yeah. 

<i class="timecode">[01:20:21]</i> **Ben:** Absolutely.

Alright, cool. Is there any more you wanna show off, or are we good here, Maxi? 

<i class="timecode">[01:20:28]</i> **Maxi:** Yeah, no, we're good. There is a lot more to see. I'm gonna share the docs, a link to the docs that have some really cool demos as well about all of the things you can do with these transitions with all the kind of the power of CSS, so.

<i class="timecode">[01:20:42]</i> **Ben:** Yeah!

<i class="timecode">[01:20:43]</i> **Maxi:** So, yeah. 

<i class="timecode">[01:20:44]</i> **Ben:** Yeah. And while you're sharing links, would you mind also sharing a link to your blogpost about what we just did today? 

<i class="timecode">[01:20:52]</i> **Maxi:** Yes! Let me find that. The blogpost, yeah, explains a lot of the things we've been talking about. It has some nice, I guess, illustrations that make it easier to see what's going on behind the hood when, you know, you take a screenshot, you take another screenshot, those sort of things, so… yeah! 

<i class="timecode">[01:21:15]</i> **Ben:** Y'all, go follow Maxi on Twitter. He's got some cool, cool demos. It was super cool to just see this pop up. Additionally, Maxi and I like to both hang out in the Lunch Dev Discord. Let me just drop a link to that in the chat. So come join us on Discord if you wanna see more cool stuff going on as well. See a wonderful, inclusive, inviting, community of practice for web developers. Come join us there. I think you'll love it.

And y'all, if you're into streams like this where you see some cool, cool aspects of building great user experiences for the web, you should catch up on more Some Antics episodes! So, you should hit the purple follow button. That way you get notified whenever we go live. But also you should know about some of the streams coming up. This Friday, we're gonna be… I'm gonna be getting a first look at the new Enhance.dev metaframework, I suppose, for web components. It brings server-rendering ergonomics, file-based routing, the stuff you love from Next.js and Remix. It brings that into the world of web components. I'm super excited for that. Next week, Todd Libby is coming back to demonstrate some of the learnings he's had from his research with the W3C on deceptive patterns and the Framework for Accessible Specification of Technologies, I think is what FAST stands for. The following Tuesday, GrahamTheDev is coming on. We're talking about convincing the business to invest in accessibility. Lots of really cool stuff. So if you wanna see this schedule and just keep apprised, you're gonna wanna go over to someantics.dev, or you're gonna wanna follow Some Antics on Twitter.

Stick around, chat. We are going to find someone to raid. But in the meantime, thank you all so, so much for being here today. And Maxi, thank you so much for your time and for putting together this awesome demo. Like, it's stuff like this that make me just so phenomenally excited for the future of the web and what we're gonna be able to do in these robust ways. So thank you so much for coming on, Maxi. 

<i class="timecode">[01:23:18]</i> **Maxi:** Yeah, thank you for having me. This was fun. 

<i class="timecode">[01:23:20]</i> **Ben:** Absolutely. And yeah, with that, I will see y'all on Friday. Bye, y'all.