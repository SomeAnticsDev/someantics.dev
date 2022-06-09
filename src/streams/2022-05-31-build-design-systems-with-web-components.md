---
title: Build Design Systems with Web Components, with m4dz
thumbnailTitle: Build Design Systems with Web Components
hosts:
  - Ben Myers
  - m4dz
tags:
  - Design Systems
  - Web Components
upload: https://youtu.be/xfnp2bA0OSE
sourceCode: https://studio.backlight.dev/invite?code=uSEjUuvxpXlSe9D3buxl
---

Design systems are a powerful tool to ensure consistent functionality and branding across our experience, and the web platform is only getting better at letting us express our design systems in a reusable way. Join us on Some Antics as [m4dz](https://twitter.com/m4d_z) shows us how to build a design system of our own using web components!

---

## More From m4dz

- [Follow m4dz on Twitter](https://twitter.com/m4d_z)
- [Watch Coding Design Systems on Twitch](https://twitch.tv/m4dz_devrel)

## Mentioned Links

- [Backlight](https://backlight.dev)
- ["All the Ways to Make a Web Component" by ‹div›RIOTS](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/)
- [Some Antics: Build Your Own Design System with Mike Aparicio](/build-your-own-design-system/)

## Transcript

<i class="timecode">[00:00:02]</i> **Ben:** Howdy, howdy, y'all! Happy Tuesday. Happy Some Antics duh-day. Happy Some Antics day. I can words, I promise! Today, I am joined by m4dz. m4dz is a… I mean, actually, would you like to introduce yourself? I could try, but it's better if you do. I think! 

<i class="timecode">[00:00:20]</i> **m4dz:** Yeah, for sure! Thanks for having me. So yeah, I'm m4dz. I'm a Principal Developer Advocate at ‹div›RIOTS. We're a small company, small startup dedicated to frontend tooling, and more specifically, design systems. So, I'm really happy and really excited to be here to talk about the design system, what it is and who could use it to improve the quality of the frontends of our different web apps and different kinds of applications. So, yeah. Thank you very much! 

<i class="timecode">[00:00:56]</i> **Ben:** I'm super, super excited to have you on. You actually had me on YOUR show a couple of months ago when we talked a lot about accessibility in design systems. I'm going to put a quick shoutout, actually, in the chat for your streams. Go check it out. What kind of stuff do you like to talk about on your streams?

<i class="timecode">[00:01:15]</i> **m4dz:** So, under the stream we are trying — so we have a regular stream once a week. We are trying to cover the different technical aspects of design systems. So, because — we're going to probably talk about this, but the design system is more than just a small subset of different components that you could use in your frontend. It is, but it's also a lot more things. So, because we don't have a lot of resources available online about how to build a design system or to work with a design system as developer, we started the stream. To be perfectly honest… so, ‹div›RIOTS are making a tool named Backlight, and Backlight is a design system editor, and it is composed by different kinds of starter kits based on different kinds of technologies like React or Vue or Svelte or whatever you want. But buildings those starter kits is a lot of effort. So last year in December, we were just brainstorming with our CEO and we said, "Okay, you know what? Maybe we could work at least one hour a week on the starter kits to try to build new ones or try new technologies and improve the existing ones." And so we did. And if we do so, why not doing it live? It could be interesting for people just to understand the process and how we could work and we could, yeah, you know, craft different kinds of components and so on. So we did three episodes and in the end of December we said, "Okay, you know what? Maybe we could invite some guests to have some kind of advices and sites coming from experts in different domains." So we contacted a few people to ask if they want to join, to build starter kits and build a design system with us. And surprisingly, they all answered positively, so we had a lot of guests since the beginning of the year and for the last six months. Yeah, it was really a blast. So, it's a cooler way to try and see people try and fail and then success in building design systems.

<i class="timecode">[00:03:44]</i> **Ben:** Absolutely.

So you mentioned that a design system is not simply a component library. As we kind of get into this topic of building design systems with web components, can we maybe start with, what does a design system mean to you? 

<i class="timecode">[00:04:00]</i> **m4dz:** Yeah, that's a great question! So, what is a design system? I guess that the idea came at first from the designer side to find a way to architecture the production design in a way that they could reuse some kind of components and that could easily express the brand and the feeling of the brand and so on.

This is something that is not recent. I mean, one of most known is the NASA design system that was built in, I don't know, the 70's, something like that, which is a big book containing every part of the brand and how to use it to communicate when you are speaking in the name of NASA.

So, it's an interesting topic and the fact that right now we are reusing it in our digital era to build interfaces, this is just the logical way, you know, of evolution. So, designers started to work on things named design kits, which are finally just a set of different components that they could reuse when they build and craft interfaces and so on.

So after that, you have to give this work to the developers' team to just implement the different kind of components and so on. So there is a second problem, which is how to pass properly, in a single source of truth, the different kinds of values that are holding the brand — the colors, the typography, the spacing, and so on. So, a few people invented the concept of design tokens which could be seen from the developers' side as a set of different variables where you can store different kinds of values and data like different colors or font definitions and so on, and then you could reuse those tokens in an abstract way in the different kinds of components of your library.

And when you are working on this library of different kinds of components, then you are building the basic blocks, the foundation of your interfaces. And after that, when you are working on your final product, then you will be able to use a button, an input field, a header, a footer, a navbar, and so on, which are all into the design system. Which is interesting because if you're using the design system as a central point where everyone could contribute, like designers and developers but also product people or QA people or UX writers, then everyone is now able to concentrate their work on the same product and the same effort, each of them using their very own tools — designers with their design softwares and developers with their design system editors or something like that. Same thing for the UX writers and so on.

And you could easily shift the complexity into the design system, which means that rather than trying handling — I don't know, let's say we have a video player in our application. If you have to the render responsive part of your application, so we have to display the video player in large mode version or in a small version depending on your screen resolution, but you will also have to handle complexity due to the battery. Do we have enough battery to display a 4K video or do we need to fall back to a degraded mode so we could just keep the battery safe? Or depending on the GPU available or the capacity of hardware decoding or not, or the bandwidth. Are we on a mobile phone with a 3G connection, or Wi-Fi, or I dunno? If we are handling all of this complexity in the final application, it's a lot of bugs. Because we can't handle everything. I mean, just having responsive interfaces is incredibly hard right now, so adding to this batteries and notifications and GPUs and so on, it's way too much, and it's gonna lead to a lot of bugs. It's mandatory to have that. By shifting left the complexity into the design system means that I have a video player that is a small component in my design system, and this video player is responsible by itself to handle its size depending on the container size, or do we have to load the video in a 4K version or in smaller versions and so on. By doing so, when in your final application you are just using video player components, you don't have to worry about anything because everything is… all the problems of the issues are inbuilt into the design systems and in the components itself, rather than in the final application. To me, it's the most powerful feature of design systems, the ability to just work on really fine, well-executed components and then distribute them after that.

<i class="timecode">[00:09:44]</i> **Ben:** I love that. That was amazingly well explained. Chat, let's give some kudos to m4dz's explanation there. That was incredible.

And so you mentioned, like, as part of this process, right? The developers are going to be implementing parts of this in whatever tooling they're using. Today, we're using web components. Can you kind of explain why web components might be a good fit for design systems? 

<i class="timecode">[00:10:11]</i> **m4dz:** Yeah! For sure. That's a nice question. You may want to use any kind of framework that fits better for you because it's just the one that you prefer or you are the most used to, or I don't know. But because this particular framework is good for your final app, then you have to use it to develop your set of components into your design system. You can, definitely, but having something more agnostic that could be used across different kinds of projects is probably more interesting in terms of reusing the content and not reimplementing the same components again and again and again in different kinds of flavors, in different kinds of frameworks.

It's interesting because right now, a hot topic in the design system world right now is multi-brand design systems, which means that I'm a company but I'm working on different kinds of products, and depending on those products, I'm using the same design system but in different flavors like, I don't know, a red version or a green version and then a blue version. This is a simple example, but you get the point. And multi-brand means that you will probably use the same set of foundation components for both your web apps or your desktop application wrapped in an Electron container or a mobile app or a progressive web app, or I don't know. There is a lot of kind of use cases. So, if you have to reinvent or reimplement at a set of components again and again, it's a lot of time wasted and it's also a risk to introduce a lot of new bugs and so on.

And so web components to me is probably one of the best bets, just because it's a standard. It's natively supported by any modern browser, so you don't have to worry about any kind of compatibility or anything like this. There is a lot of different kinds of polyfills to implement different features if you are targeting old versions of different browsers like Internet Explorer in some versions. And you don't have to stick on the raw syntax of the standard. If you prefer to use an advanced framework to develop, to build your web components, you can do it and it won't necessarily increase the final cost because you could use different types of frameworks that compile your web components in the raw JavaScript in the end. So, yeah. It's a nice balance between reusability and simplicity of work when working on just small sets of elements.

<i class="timecode">[00:13:30]</i> **Ben:** Good deal!

I think with that in mind, let's go ahead and get started! I'm gonna go now, start showing my screen. There we go! So y'all, go follow m4dz on Twitter. Go do that. I've already shouted out your stream. Go follow that stream as well. And for this, we are using Backlight, which you mentioned is the product you're working on.

Uh… yeah! So how should we go ahead and get started today? What do you wanna do? 

<i class="timecode">[00:14:06]</i> **m4dz:** We're going to go with a blank starter kit. So the idea is, as I said earlier, that we have a lot of different kinds of starter kits, so if you prefer to use React or Vue or Svelte, et cetera, you could pick one. But I'm currently working on starter kits based on web components, but there is a lot of different kind of web components, different flavors, so it's not that easy. But we started one in the stream, in the last episode two hours ago with the Stencil team, so we're going to have a starter kit based on Stencil in a few weeks, I guess, so.

But yeah, the idea here is just to start with a blank one so it's going to be, I don't know, easy to, you know, implement some raw components, raw tokens and see what works.

So, yeah, so you've got access to Backlight, which is a web dev editor. It's based on Monaco, the editor — the engine — in VS Code, so you will have, give or take, the same features. The idea of using Backlight is that you can definitely use your regular editor, regular VS Code here to work on your components library for sure, but the idea of Backlight is to give you some kind of framework that you could work with so it will be a bit more easy. We're not enforcing any kind of technology. We are just a bit opinionated in the way you're architecturing your project. So, it's like a monorepo where each package will be a component, like a button or a token or so on, and each package will contain a src folder, stories, tests, documentations, and external resources like design resources and so on. So by doing so, you will have access to an interface that will be probably easier to work on different kinds of components and develop different components.

So, what do you want to do first? Do you want to craft a simple component like a button? 

<i class="timecode">[00:16:53]</i> **Ben:** Yeah! I feel like buttons are kind of the classic example for design systems.

<i class="timecode">[00:16:59]</i> **m4dz:** Oh, for sure!

<i class="timecode">[00:17:00]</i> **Ben:** They've got, like, interesting states and whatnot. So yeah, let's do a button component. 

<i class="timecode">[00:17:05]</i> **m4dz:** Yeah. Yeah. Is there — that is a nice question — is there a component that you prefer in the design system? This is a question that we had internally a few weeks ago.

<i class="timecode">[00:17:20]</i> **Ben:** Interesting.

<i class="timecode">[00:17:21]</i> **m4dz:** And there's different kinds of answers. The button is a regular example, you know, where it's always "Ah, yes, I have a button with colors and so on." But to me, it's not my favorite one. Do you have a favorite one? 

<i class="timecode">[00:17:34]</i> **Ben:** So I think the merit of a button is that it's simple enough that folks understand, it's ubiquitous enough that everyone's going to relate to it, and yet it's complex enough because it's got states and, you know, you could disable the button or you could have an icon button and stuff like that, so you can demonstrate variation. Like, it's as simple as you need or it's as complex as you need, and it's common enough that, like, everyone relates to it.

<i class="timecode">[00:17:59]</i> **m4dz:** Hm.

<i class="timecode">[00:18:00]</i> **Ben:** So that's, I think, why buttons work well for design system demos. 

<i class="timecode">[00:18:05]</i> **m4dz:** Yeah. Yeah, definitely. I had a conversation with Thomas Allmer, who is the main maintainer of the Lion design system from ING.

<i class="timecode">[00:18:15]</i> **Ben:** Mm.

<i class="timecode">[00:18:16]</i> **m4dz:** And he told me that at ING, they reimplemented the button four times because of accessibility!

<i class="timecode">[00:18:24]</i> **Ben:** Mm!

<i class="timecode">[00:18:24]</i> **m4dz:** And making an accessible button is incredibly hard, and they restarted from scratch, yeah, four times…

<i class="timecode">[00:18:32]</i> **Ben:** Daaang.

<i class="timecode">[00:18:32]</i> **m4dz:** …before having a button that is finally the foundation of many things, you know? It's the foundation of a token, it's the foundation…

So yeah, it's a complex one!

<i class="timecode">[00:18:45]</i> **Ben:** For sure.

<i class="timecode">[00:18:46]</i> **m4dz:** So, okay, let's start with the button!

<i class="timecode">[00:18:49]</i> **Ben:** Yeah!

<i class="timecode">[00:18:49]</i> **m4dz:** So, in your interface, in front of the… in the left panel, you've got access to a list of your different packages with different kinds of sections. So right now you just have an empty package containing the README, and we could improve it after that, but we will craft a new component. So in front of the Components section, you will have a plus. Yeah, if you click on it, you can create a new package, like let's say a button package.

<i class="timecode">[00:19:20]</i> **Ben:** Alright?

<i class="timecode">[00:19:23]</i> **m4dz:** Perfect. Now, in this package, which is totally empty right now, if you go to the src folder, we're gonna add a new file. So, we're going to add a new source file like, let's say, I dunno, let's name it index.js, which is the regular name.

And now we are ready to implement our button. So, we've got a lot of different frameworks and different solutions available to implement the web component. I suggest that we go with a plain one, a regular web component, so it won't add too much complexity by adding different kinds of libraries and so on.

<i class="timecode">[00:20:24]</i> **Ben:** For folks in the chat who are maybe less familiar with web components, there was a promise of, like, "oh, web components will be simple enough that you won't need a framework for them…" And then you've totally needed a framework for them.

<i class="brackets">[m4dz chuckles]</i>

There've been a few kind of big ones throughout the years. I think one of the giants is, like, Lit by Google is a big one.

<i class="timecode">[00:20:48]</i> **m4dz:** Yeah.

<i class="timecode">[00:20:48]</i> **Ben:** But they're all supposed to, like, smooth over the web component API to make it easier to use. We're just going to do web components without any framework, it sounds like. But that's the context there. So we could pick a framework! We're just not gonna. 

<i class="timecode">[00:21:06]</i> **m4dz:** A thing that is interesting with web components is that you don't have to use the same framework for all the elements of your library. If you want to implement a button using Lit because it's easier for a button, but with Stencil for a dropdown because it's better with Stencil and easier with Stencil, you could definitely do so. Depending on the framework, you will add some extra bytes of JavaScript, so be careful of that. But for some like Lit or Stencil that compile to raw JavaScript in the end, it's totally free and it will make the process — the development process — maybe easier at some point, because, you know, just choose the right one depending on your context. So, yeah.

So if we want to start with a regular one, I suggest that we copy–paste an example coming from the "All the Ways" blogpost. So we have a blogpost at ‹div›RIOTS named "All the Ways to Make a Web Component." This is a blogpost that I try to update regularly, at least twice a year. And it's comparing right now 61 different variants of web components. So I reimplemented the same counter component, which is a really basic one, and we compare the bundle size, the loading time, performances, and so on. So it's also a good way to compare different ways to implement the same element regarding the framework that you prefer to use. So, yeah. Maybe we could just copy–paste the basics. Like, we could create — exactly — a template, and we're going to create a class to expose our web component, and we can comment it. So, yeah. Maybe we could remove all the content in the styles, because we're going to style it after that.

<i class="timecode">[00:23:26]</i> **Ben:** Yep!

<i class="timecode">[00:23:31]</i> **m4dz:** Yeah, great. And maybe we could keep just this as a button. It will be enough. Okay. Perfect. And maybe we could add some kind of placeholder in it like, I don't know, some text in it there. And just a simple "Hello World" this was, so yeah, we're going to keep the button.

<i class="timecode">[00:24:03]</i> **Ben:** Alright.

<i class="timecode">[00:24:05]</i> **m4dz:** Perfect. Then we have to create a specific class extending the HTMLElement class to create our button. So it's going to be a class named something like "MyButton," which extends the HTMLElement.

<i class="timecode">[00:24:23]</i> **Ben:** Okay?

<i class="timecode">[00:24:27]</i> **m4dz:** We can keep the constructor. We will just remove the reference to the count, because we don't need the counter. But we will attach the shadow to the component. So the idea, for folks that are not really comfortable with web components, is that web components in your browser will work like a subtree of your DOM, which means that there will be a dedicated root element inside your web components, which means that your component is totally isolated with the rest of your page. So the styles coming from the external application won't be applied unless specific rules are involved on the different parts of the web components and so on. So it's really working on small sandboxes and just, you know, building some islands in your final application.

Um… yeah! So, we will keep the connectedCallback(). We just keep the appendChild(), where we just duplicate the content of the template and clone it directly into the web component shadow DOM. And we could keep the update() method, because it's going to contain everything that will be run to update the content of the button. So, we could remove the this.count reference and yeah, and these methods too, because we won't need them anymore.

Um… okay. And after that, we have to declare, at the page level, the use of the button. So it's customElements.define('my-button'), which is using the MyButton class.

<i class="timecode">[00:26:25]</i> **Ben:** Good deal! And so we've— what this does is, basically, this enables us… we can now use the `<my-button>` tag as though it were an HTML element, but it's going to hook it up, basically, as has been defined in this class. And this is all browser-native. Like, you could run this in any modern browser and your browser will now understand the concept of a `<my-button>` tag.

<i class="timecode">[00:26:58]</i> **m4dz:** Correct. That's exactly that.

An interesting thing with that, we are using a `<template>` node created directly, programmatically, into our file. But we could definitely embed a `<template>` element inside our page if it's rendered on the backend using, I don't know, PHP or Node.js or Java or whatever you want. And if the `<template>` tag is available inside the page, then you can just add the logic into the JS file and refer it to this `<template>` element in the page and use it into your web component without worrying of implementing your raw content by hand.

So, that's the basic one. And we could definitely use it. So to do so, the best way is to create a story in the Storybook format to display this component and to see it in action. So you could go to the stories section of your package and you could create a file named index.stories.js.

<i class="timecode">[00:28:14]</i> **Ben:** Okay!

<i class="timecode">[00:28:15]</i> **m4dz:** Perfect. Then in this one, we're going to import the component. So it's a regular import, and the path will be… so you have to use a string, yeah. It could be MyButton from src/index.js, I think. Something like that?

<i class="timecode">[00:28:44]</i> **Ben:** Do I need a…? Like this, okay. So it's… okay. 

<i class="timecode">[00:28:48]</i> **m4dz:** Yeah, exact. You need the double dot, because you're in a stories folder, so just…

<i class="timecode">[00:28:54]</i> **Ben:** Got it.

<i class="timecode">[00:28:55]</i> **m4dz:** Yeah, exactly. And that's it. And to display it, we just create a simple story file, which is just a function. So we're gonna write something like "export const," and the name of your story. So it could be "myButton," for example.

<i class="timecode">[00:29:22]</i> **Ben:** Okay?

<i class="timecode">[00:29:23]</i> **m4dz:** And we're going to plug a fat arrow function. So it's going to be just equal, parentheses, yeah. Fat arrow. And we will just export a simple string, and the string's just going to contain our tag, so it would be a string containing HTML.

<i class="timecode">[00:29:48]</i> **Ben:** Yeah, so you're talking something like this. 

<i class="timecode">[00:29:53]</i> **m4dz:** "`<my-button>`," exactly. 

<i class="timecode">[00:29:55]</i> **Ben:** Okay. I don't know if our button is self-closing, but okay. So something like that. 

<i class="timecode">[00:30:02]</i> **m4dz:** Exact. So if you save this one, you're going to have on the rendering panel of the right-side stories view… 

<i class="timecode">[00:30:13]</i> **Ben:** I don't think we exported it. Ah.

<i class="timecode">[00:30:17]</i> **m4dz:** "The requested module did not provide an export 'default.'" Um… yeah? 

<i class="timecode">[00:30:22]</i> **Ben:** I need to export default MyButton from src/index.

<i class="timecode">[00:30:26]</i> **m4dz:** Ah, yeah! Yeah, you're right. 

<i class="timecode">[00:30:29]</i> **Ben:** "Cannot set" — oh. Oh, yeah, I didn't completely remove all of this. Okay. 

<i class="timecode">[00:30:35]</i> **m4dz:** Yeah, but we're gonna work on it, we're gonna work on it.

<i class="timecode">[00:30:39]</i> **Ben:** Yeah!

<i class="timecode">[00:30:40]</i> **m4dz:** Let's say that we want to update the content of the button, so let's say that we are using… I don't know, let's say a property to get the text. Or just a slot. We could definitely use a slot. So… let me find…

So if we want to create a slot, we're gonna just…

Let me remind. I can't remind. Using… yeah.

We could do in our templates, in the button, we could use just the `<slot>` tag and it should be working. 

<i class="timecode">[00:31:43]</i> **Ben:** Okay. So, I need… I'm just…

Do I remove the text in here, or…?

<i class="timecode">[00:31:48]</i> **m4dz:** Yeah, we could remove — yeah, we could remove the text. It's a self-closing tag, so we have to add a final — yeah, that's it. Perfect. And… and so we could remove the content in the update() function, which definitely is not useful anymore. 

<i class="timecode">[00:32:15]</i> **Ben:** I'm sorry, remove…? 

<i class="timecode">[00:32:17]</i> **m4dz:** Yeah, we can remove the content in the added function. We don't need finally, this one if you are using a slot.

<i class="timecode">[00:32:24]</i> **Ben:** Gotcha.

<i class="timecode">[00:32:25]</i> **m4dz:** It will be perfect.

<i class="timecode">[00:32:27]</i> **Ben:** Yep!

<i class="timecode">[00:32:28]</i> **m4dz:** So let's save it and let's see if it updates properly. 

<i class="timecode">[00:32:34]</i> **Ben:** Yeah, so we need to put some text in it.

<i class="timecode">[00:32:36]</i> **m4dz:** We need, yeah, we need content in the text. 

<i class="timecode">[00:32:41]</i> **Ben:** So I go here and put our text here, there we go! Cool. So we have a button—

<i class="timecode">[00:32:50]</i> **m4dz:** Awesome!

<i class="timecode">[00:32:50]</i> **Ben:** —that's not actually doing anything, but we have a button. 

<i class="timecode">[00:32:55]</i> **m4dz:** Exact. So now, we could add some kind of logic and some kind of styles logic dedicated to this one. So, I suggest that we use custom properties to style the different parts of our components.

<i class="timecode">[00:33:18]</i> **Ben:** Okay!

<i class="timecode">[00:33:19]</i> **m4dz:** So in the style section, we could add some basic rules like, you know, just focusing the button and adding some rules like background-color and the color so we could see the different variants. So let's say… yeah. Let's do something like that just to test.

<i class="timecode">[00:33:48]</i> **Ben:** There we go!

<i class="timecode">[00:33:50]</i> **m4dz:** Perfect. So, right now, the logic is just totally sandboxed inside the web component, but we prefer to use tokens coming from the styles, from the design.

<i class="timecode">[00:34:06]</i> **Ben:** Mm-hmm!

<i class="timecode">[00:34:06]</i> **m4dz:** So we can declare different kinds of tokens in the form of CSS custom properties. So I suggest that we create a package in the tokens section.

<i class="timecode">[00:34:20]</i> **Ben:** Alright.

<i class="timecode">[00:34:21]</i> **m4dz:** And we're going to create a colors package containing the colors tokens.

<i class="timecode">[00:34:31]</i> **Ben:** Okay.

<i class="timecode">[00:34:32]</i> **m4dz:** Alright, so let's create a file like colors.css, for example.

<i class="timecode">[00:34:39]</i> **Ben:** Alright.

<i class="timecode">[00:34:42]</i> **m4dz:** Alright, and we're going to declare our custom properties. My favorite choice is to use that :where selector—

<i class="timecode">[00:34:51]</i> **Ben:** Ooh!

<i class="timecode">[00:34:52]</i> **m4dz:** —targeting :where(html)…

<i class="timecode">[00:34:55]</i> **Ben:** Okay?

<i class="timecode">[00:34:56]</i> **m4dz:** …to declare the default tokens, because by doing so, this rule has a specificity of zero, because the :where pseudo-selector has no specificity. So you are declaring the custom properties with no specificity at all, so you don't have to worry of overriding something somewhere in your application. You are just defining the default values. 

<i class="timecode">[00:35:20]</i> **Ben:** We've all… I think we all remember the Bootstrap era where it's like, if you needed… like, you can pull in a CSS library like Bootstrap and everything would look gorgeous, you know, out of the box. And then the moment you wanted to customize anything, you had to forge a path using !important, !important, !important all over the place. And so to have, you know, our base layer like this instantly start with a specificity of zero means that, from the get go, you can just start overriding things without having to employ hacks like that. 

<i class="timecode">[00:35:56]</i> **m4dz:** Yeah. Yeah, that's exactly that.

So… let's declare a few colors! Let's say something like, I don't know, --color-primary, something like that, if we want.

<i class="timecode">[00:36:11]</i> **Ben:** Okay! And you know what? I've got a color I like. It's a shade of purple.

<i class="timecode">[00:36:20]</i> **m4dz:** Perfect. And let's declare also, let's say, a light one containing a white version so we could easily switch after that. 

<i class="timecode">[00:36:33]</i> **Ben:** Okay, so like --color-light and have that be, like, white? Is that what you're thinking? 

<i class="timecode">[00:36:39]</i> **m4dz:** Yeah! Yeah, something like this. This is really great.

It's… yeah, we can take some time to talk about the notion of cascading design tokens. You could definitely declare your design tokens with, like, a primary color, a secondary color, a white/light color, and so on. But often, you are not exactly using those ones, because they're probably not semantic enough. So, my recommendation is that you will probably have some kind of tokens coming from the design files containing values like a "red 500" or a "blue 900" or something like this.

<i class="timecode">[00:37:29]</i> **Ben:** Yeah!

<i class="timecode">[00:37:30]</i> **m4dz:** You can take those values like that, taking those colors and map them to CSS custom properties like --colors-red-500. It's perfectly fine. And then after that, we will start a cascade where we are mapping values in a semantic manner, like saying, "Okay, the --color-primary in my application will be mapped to --colors-green-500."

And after that you could… yeah, yeah, tell me. 

<i class="timecode">[00:37:58]</i> **Ben:** Yeah, do you want to set this file up like that just to kind of show what that would look like? 

<i class="timecode">[00:38:04]</i> **m4dz:** Yeah, for sure, for sure! Good idea. 

<i class="timecode">[00:38:05]</i> **Ben:** Yeah, can you walk me through that? 

<i class="timecode">[00:38:09]</i> **m4dz:** Yeah, yeah. So let's change the --color-primary to --color-purple and the --color-light to --color-white, for example.

Okay, great. And we're going to declare two new custom properties: a --color-primary — let's say, yeah, let's say ---color-primary — which is mapped to --color-purple, so just the colon, var(--color-purple).

<i class="timecode">[00:38:47]</i> **Ben:** Okay. It would help if I spelled "purple" correctly! There we go.

<i class="timecode">[00:38:53]</i> **m4dz:** Great. And let's say a --color-light — let's say that — which is mapped to --color-white.

<i class="timecode">[00:39:00]</i> **Ben:** Alright.

<i class="timecode">[00:39:02]</i> **m4dz:** Now we have a bit more meaning inside it. But we could also declare a bit more, so probably in another level in our CSS file, write with a selector ":root." So we're now adding some kind of specificity inside the application. So at the root level, so at the application level of my…

I'm going to map different values like a --color-surface — let's say --color-surface, that's a good one — which will be mapped to --color-primary.

So now, I know that any kind of component that needs to have some kind of surface color like the background of a button will use --color-surface, and I don't care on the values that it is mapped to. This is just a responsibility of the cascade, which will be probably handled by the designers or other people in the team. I don't know. And we could do the same thing with the --color-text, which would be mapped to --color-light. It's also a nice way to be ready to override things in dark mode or light mode—

<i class="timecode">[00:40:26]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:40:27]</i> **m4dz:** —because you could override those values specifically, like a --color-dark-surface, --color-light-surface, and so on.

<i class="timecode">[00:40:34]</i> **Ben:** Absolutely. Alright!

<i class="timecode">[00:40:38]</i> **m4dz:** So, nice! Let's use them directly in our button! So in the button, we could replace the background color with the --color-surface by you, and the color text value.

<i class="timecode">[00:41:00]</i> **Ben:** And…

<i class="timecode">[00:41:02]</i> **m4dz:** But if we save, we don't have access to those values because we need to import the color-containing tokens.

<i class="timecode">[00:41:09]</i> **Ben:** Mm!

<i class="timecode">[00:41:09]</i> **m4dz:** So, in your final use case, you will probably import them in your application. But now, we are working with stories, so we could use a specific file in Backlight to load external components in every story in the app. So, on the left panel at the bottom, you've got access to the root files of your project. And if you click on it… 

At the bottom of the panel, totally. It's a bit hidden. At the bottom. Named "Root files." 

<i class="timecode">[00:41:49]</i> **Ben:** Oh, okay. Yeah. Okay, root files.

<i class="timecode">[00:41:52]</i> **m4dz:** No, no, no, you've got one. You've got one really at the bottom of the panel in front of the B logo at the bottom left.

<i class="timecode">[00:42:02]</i> **Ben:** Oh, oh, I see! Okay, got it. Very bottom. Okay, got it!

<i class="timecode">[00:42:07]</i> **m4dz:** <i class="brackets">[chuckles]</i> If you click on the plus you could add a file named…

Let me read my… I always do the same things. Named stories.preview.js. 

<i class="timecode">[00:42:21]</i> **Ben:** stories.previews.js? 

<i class="timecode">[00:42:24]</i> **m4dz:** "preview" without the S. story.preview.js. 

<i class="timecode">[00:42:28]</i> **Ben:** Is there a good way to rename…?

<i class="timecode">[00:42:30]</i> **m4dz:** Yeah, you should have a three-dots button, but I don't see them. Okay, you know what? Let's recreate it and not worry about this one.

<i class="timecode">[00:42:45]</i> **Ben:** Yeah. stories.preview— 

<i class="timecode">[00:42:46]</i> **m4dz:** Preview, yeah. .js. 

<i class="timecode">[00:42:47]</i> **Ben:** There we go. Oh, it even autofills stuff. Cool. 

<i class="timecode">[00:42:51]</i> **m4dz:** Yeah! And there's some… a few elements that are prefilled. The idea is that this JS file is executed for every story's file everywhere in your project.

<i class="timecode">[00:43:02]</i> **Ben:** Mm-hmm?

<i class="timecode">[00:43:02]</i> **m4dz:** So we will import the tokens in this one. So we will just do an import… anywhere you want.

<i class="timecode">[00:43:14]</i> **Ben:** Import…

<i class="timecode">[00:43:15]</i> **m4dz:** And with the path to the colors package, so it's going to be something like a string containing "colors/src…" 

<i class="timecode">[00:43:28]</i> **Ben:** Oh, src…

<i class="timecode">[00:43:30]</i> **m4dz:** No, no, colors/src. 

<i class="timecode">[00:43:33]</i> **Ben:** Oh, colors/src, 

<i class="timecode">[00:43:34]</i> **m4dz:** okay.

Yeah, colors/src/ — I can't recall the name of the file. colors.css, we used? Something like this. 

<i class="timecode">[00:43:43]</i> **Ben:** Is this like…?

<i class="timecode">[00:43:46]</i> **m4dz:** Yeah, perfect. Yeah. And it was a single dot because they are root files so they are outside of the other packages.

<i class="timecode">[00:43:55]</i> **Ben:** Okay.

<i class="timecode">[00:43:55]</i> **m4dz:** Perfect. So now if we go back to the button, I hope that everything… 

<i class="timecode">[00:44:03]</i> **Ben:** Hey, there we go! Okay. 

<i class="timecode">[00:44:07]</i> **m4dz:** Nice!

<i class="timecode">[00:44:08]</i> **Ben:** Absolutely!

<i class="timecode">[00:44:10]</i> **m4dz:** So, it's interesting because in your story, in the `<my-button>` element, because we used CSS custom properties, we could add a style attribute in the button tag in the story, the `<my-button>` tag directly.

<i class="timecode">[00:44:26]</i> **Ben:** Okay. 

Go "style=," and we could say — just absolutely cause some chaos here — "font-family: cursive." 

<i class="timecode">[00:44:39]</i> **m4dz:** For example. 

<i class="timecode">[00:44:42]</i> **Ben:** Doesn't seem to have gone. 

<i class="timecode">[00:44:44]</i> **m4dz:** Okay. So it's a nice example because we set styles properties on the web component itself. But because of the shadow root, the rules can't be applied inside it. It's outside of the scope.

So we've got two things to fix this that are really interesting. The first thing is we want to change the color for this button specifically. And because we used a CSS custom property, we could declare a new — in the "style" attribute, we could declared a custom property, which would be --color-surface, with a new value.

<i class="timecode">[00:45:26]</i> **Ben:** Yes. And that looks like this. --color-surface, and I'm just gonna put in "tomato." Okay?

<i class="timecode">[00:45:38]</i> **m4dz:** Great. And now it works, because the custom properties could cascade through the web component. So we prepared the way to be able to map and change different kinds of values because we are using tokens, and then we are overriding the tokens at the root level of the element.

The second way is to fix this stuff with the "font-family: cursive" rule. If we go back to our src file for the button, we could add, on the button itself, an attributes named "part."

<i class="timecode">[00:46:20]</i> **Ben:** Attribute, okay. "part." 

<i class="timecode">[00:46:22]</i> **m4dz:** Yeah. Exactly. And with an ID. Which one you prefer. It could be "button," it could be, I don't know, "container," "surface." Let's say "button."

<i class="timecode">[00:46:35]</i> **Ben:** Yeah. Okay.

<i class="timecode">[00:46:38]</i> **m4dz:** Okay, perfect. So if we go back to our story, we could add a `<style>` tag before `<my-button>` to declare specific styles. We could also do it somewhere else, but for the sake of the demo, it could be nice. So let's do a `<style>`, and we're going to style "my-button::part."

And yeah. And the ID, so "button."

<i class="timecode">[00:47:21]</i> **Ben:** Okay.

<i class="timecode">[00:47:22]</i> **m4dz:** Okay. And now, in this rule we could apply the "font-family: cursive" directive.

<i class="timecode">[00:47:34]</i> **Ben:** Gotcha.

<i class="timecode">[00:47:34]</i> **m4dz:** Cross your fingers, it should work.

<i class="timecode">[00:47:36]</i> **Ben:** Nice!

<i class="timecode">[00:47:37]</i> **m4dz:** So by doing so we are explicitly telling the browser that inside this web component, we've got a part of the web component that we are exposing outside to CSS, so we could style different parts of the element outside of it. So it's a great way to… you'll be able to tweak different kinds of elements. I don't recommend to do it everywhere, otherwise your codebase would be a big pasta at some point. But yeah, for very specific parts, it's really, really useful in the context of a design system. 

<i class="timecode">[00:48:18]</i> **Ben:** Mm-hmm.

So, a big part of design systems, from what I understand, is the ability to reflect variants, right? Like, you could have a button, but then you can also have, like, a disabled button, or you could have, like, a ghost button look. Is there a good way to handle that with this workflow so far? 

<i class="timecode">[00:48:38]</i> **m4dz:** Yeah, definitely! We could definitely use properties on your button. So if we just add a property in my button — let's say a "disabled" property — so we will be ready to handle the disabled part. 

<i class="timecode">[00:48:58]</i> **Ben:** Okay? So… what would that look like? What would I need to do? So do I put… I'd put "disabled" here on my…? 

<i class="timecode">[00:49:07]</i> **m4dz:** Exact. And then, if you go back to your src file, we're gonna be ready to handle the properties in your custom element. So to do this…

Let me remind how to do so. It will be in the button itself.

Oh. Yeah, let me think. Which is the best way? What's the best way to do so? Maybe… maybe, maybe, maybe…

Okay, no, you know what? Let's say we're gonna just… we're going to just style… just apply different styles right now. And we're going to see it with properties probably later. So in the styles, we could target this very specific attribute by using the ":host()" and the attribute in the styles directly. So…

<i class="timecode">[00:50:24]</i> **Ben:** Okay. You said ":host?" 

<i class="timecode">[00:50:26]</i> **m4dz:** Should be that. Let's say host, exactly. And it's a host, parentheses. And between the parentheses, you add some kind of CSS selectors like the "<i class="brackets">[disabled]</i>" to map the attributes. Or to target the attributes. Yeah, that's it. 

<i class="timecode">[00:50:47]</i> **Ben:** Okay!

<i class="timecode">[00:50:48]</i> **m4dz:** And now, we could apply the rules inside it like, I dunno, opacity… or something like that to explicitly display.

<i class="timecode">[00:50:57]</i> **Ben:** Yeah, and the opacity here would be, you know, probably another token that we would be using, but yeah.

<i class="timecode">[00:51:04]</i> **m4dz:** Exact.

<i class="timecode">[00:51:07]</i> **Ben:** Okay!

<i class="timecode">[00:51:09]</i> **m4dz:** Okay, perfect. 

<i class="timecode">[00:51:11]</i> **Ben:** Yeah, and I also want to shout out Falxxy in the chat, who has been letting me know that apparently we really should have a closing tag for this `<slot>`. So, I'm still very new to web components, so I definitely appreciate that pointer. Thank you so much.

<i class="timecode">[00:51:27]</i> **m4dz:** Yeah, thanks.

<i class="timecode">[00:51:29]</i> **Ben:** Alright! Is there something else you'd like to show off about this workflow, or anywhere you want to take this next? We've got a few minutes remaining. 

<i class="timecode">[00:51:38]</i> **m4dz:** Um… let's see… let's see if we could implement something like using external properties, you know? To get access to the disabled attribute. The fact is, right now we are styling our components based on these attributes, but we could also add some logics in it.

<i class="timecode">[00:52:08]</i> **Ben:** Yeah.

<i class="timecode">[00:52:09]</i> **m4dz:** So, in the constructor, we could do something like… let me think. To be perfectly fine, we'll add something like… let's say "this." Okay, let's say "this.disabled" in the constructor. So we're going to set an internal property inside the component, which will be mapped to the attribute by itself. So we could do this.getAttribute(). That should be something like this. Or maybe we have to target the shadow DOM. I can't recall exactly. getAttribute('disabled'), and we could, you know, map this to a boolean value. So if the attribute is here, then this.disabled is true. Otherwise, it's false.

<i class="timecode">[00:53:15]</i> **Ben:** Mm.

<i class="timecode">[00:53:16]</i> **m4dz:** So…

<i class="timecode">[00:53:17]</i> **Ben:** Yeah. This… I'm sure there's also some robustness that you would need because if someone puts disabled="false", you would expect that to resolve to false, I think, but just for the sake of simplicity here. But yeah, okay, cool. 

<i class="timecode">[00:53:36]</i> **m4dz:** So, perfect. And let's use the update() method to add some kind of logic on it. So, like, we could… what could we do? We could… let's say… remove the content of the button? Just for the sake of the demo, you know.

<i class="timecode">[00:53:59]</i> **Ben:** Okay!

<i class="timecode">[00:53:59]</i> **m4dz:** It could be something like if this.disabled then…

What should we do? Probably… let's say this.shadowRoot…

getElementByTag().

<i class="timecode">[00:54:26]</i> **Ben:** Does it have a getElementByTag()?

<i class="timecode">[00:54:33]</i> **m4dz:** Or getElementById(), and we're going to put an ID on the button.

<i class="timecode">[00:54:38]</i> **Ben:** Okay.

<i class="timecode">[00:54:39]</i> **m4dz:** Or we can do a querySelector(). It's going to work. Yeah.

<i class="timecode">[00:54:47]</i> **Ben:** querySelector()…

<i class="timecode">[00:54:49]</i> **m4dz:** Button. Exact.

<i class="timecode">[00:54:52]</i> **Ben:** Okay!

<i class="timecode">[00:54:53]</i> **m4dz:** And let's modify the inner contents. I'd say inner content is disabled.

<i class="timecode">[00:55:03]</i> **Ben:** Okay.

<i class="timecode">[00:55:04]</i> **m4dz:** Inner content, inner text, yeah.

<i class="timecode">[00:55:11]</i> **Ben:** Alright! And again, in a real world context, probably what we would actually be doing is setting the underlying button to have, like…

<i class="timecode">[00:55:19]</i> **m4dz:** Yeah.

<i class="timecode">[00:55:19]</i> **Ben:** …its own semantic "disabled" attribute. That way, like, for accessibility reasons, like, the button's actually disabled. But… okay. 

<i class="timecode">[00:55:30]</i> **m4dz:** Yeah, the fact is that you could use this as a gate to enable or disable some kind of event handlers or something like this. If the button's disabled, then you can't click on it, and so on and so on. So there is a lot of things that we could do.

So is it working or not? It's not…? Why not? Can't recall…

<i class="timecode">[00:55:59]</i> **Ben:** Interesting. this.disabled…

Hm.

<i class="brackets">[m4dz hums]</i>

<i class="timecode">[00:56:11]</i> **m4dz:** Like… tch-tch-tch-tch-tch…

It should be working, it should be working. Let me think.

Hmm, hmm. 

<i class="timecode">[00:56:34]</i> **Ben:** If it helps, I don't think this.disabled is getting set. So…

<i class="timecode">[00:56:43]</i> **m4dz:** Okay, that's interesting. So why… why is it not? Maybe we could put…

Maybe we could put the this.disabled.getAttribute() in the connectedCallback thing? 

<i class="timecode">[00:57:10]</i> **Ben:** Oh, I'll put a…

<i class="timecode">[00:57:11]</i> **m4dz:** Rather than in the constructor? I'm not sure of this one, to be perfectly honest, but yeah, let's try. 

<i class="timecode">[00:57:21]</i> **Ben:** Ah! Yeah. Yeah, it looks like we're getting some vouching for that in the chat. Ooh. Still showing up as…

Hm. And is getAttribute() on the right thing, or should it be…? 

<i class="timecode">[00:57:38]</i> **m4dz:** Yeah, the getAttribute() is available on the "this" element. The "this" element is your web component, so it should be working.

<i class="timecode">[00:57:53]</i> **Ben:** Okay. I also know we're coming up on time and you've got a hard stop, so we may not be able to solve it. 

<i class="timecode">[00:58:02]</i> **m4dz:** Yeah. We're going to try to fix it, and we're gonna publish the answer after that, but yeah.

"Is the value of a boolean attribute truthy?" Um…

That's a good question.

<i class="timecode">[00:58:20]</i> **Ben:** Yeah. Let's… find out. Oh! Yeah, yeah, yeah. Let's see. If I go here and I set this to be disabled="disabled"—

<i class="timecode">[00:58:32]</i> **m4dz:** Wow, yeah.

<i class="timecode">[00:58:32]</i> **Ben:** —and save that… Ah, that does it! Ayyy! Coming out on a win!

<i class="timecode">[00:58:36]</i> **m4dz:** Perfect!

<i class="timecode">[00:58:36]</i> **Ben:** Good call, Falxxy. Super appreciate having you. 

<i class="timecode">[00:58:39]</i> **m4dz:** Thanks a lot. Thanks a lot for this one. 

<i class="timecode">[00:58:42]</i> **Ben:** What a save at the end!

Alright! Well, hey! So I know that we don't have a whole lot of time left, so I wanted to give you a chance to just kinda shout yourself out again. What are you working on? Where would you like me to send people? Anything you want to promote? 

<i class="timecode">[00:59:04]</i> **m4dz:** Oh, yeah, for sure. So, we just scratched the surface, but we are also working on a lot of things at ‹div›RIOTS. Not only Backlight, but also tools dedicated to improve the way we are exchanging information using design tokens, coming from Figma files or coming from stories and so on. So, yeah. That's a good way, more specifically, just to give you an overview, but if you map your values coming from your Figma files to tools like specifically which is exporting those tokens in a Style Dictionary version, then you could in Backlight, dynamically build your CSS custom properties so we could be ready to reuse the values directly coming automatically from your CI, from the Figma file. So it's a lot of things. We're working on a lot of tools and it's a nice ecosystem. So yeah, have a look at it. And thanks a lot for having me today! It was really great!

<i class="timecode">[01:00:17]</i> **Ben:** Absolutely! Y'all, go follow m4dz on Twitter. Go follow him on Twitch as well. I've put a link to both of those in the chat. If you're interested in learning more about design systems and especially design systems using Backlight, you should definitely go check out m4dz's streams.

Y'all, it's a busy June, so I'm not gonna overload you with all the things going on. But this Friday at 1pm Central, I'm going to have Austin Gil on. We're going to be building accessible Vue apps using the Vuetensils component library, which is super exciting. And then next Tuesday at 2pm Central, Josh Goldberg will be on. He has literally written the book on TypeScript, and so we're going to be diving into TypeScript with Josh. So it's a good month for streams. I'm super, super excited. Y'all, go follow Some Antics here on Twitch as well as on Twitter. That way you can keep apprised of all the streams coming up.

And stick around, chat! We're going to find someone to raid. But in the meantime, thank you all so much for being here, and m4dz, thank you so much for spending time with us today!

<i class="timecode">[01:01:26]</i> **m4dz:** It was a blast. Thank you, thank you very much. 

<i class="timecode">[01:01:29]</i> **Ben:** Have a good one, y'all!

<i class="timecode">[01:01:37]</i> **m4dz:** Bye!