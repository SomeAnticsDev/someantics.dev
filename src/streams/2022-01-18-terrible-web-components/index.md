---
title: "Let's Build Terrible Web Components with Alex Riviere"
thumbnailTitle: "Let's Build Terrible Web Components"
hosts:
  - Ben Myers
  - Alex Riviere
upload: https://youtu.be/fahl81_XgNk
sourceCode: https://codepen.io/BenDMyers/pen/qBPwyma
tags:
  - Web Components
---

Join Ben and [Alex Riviere](https://twitter.com/fimion) as we commit egregious sins with web components.

Alex is a developer who specializes in Vue and has a penchant for building terrible web components reminiscent of the GeoCities days. He organizes the [Atlanta Vue.js meetup](https://www.meetup.com/Atlanta-Vue-js-Meetup/), and can be found on the [Enjoy the Vue](https://enjoythevue.io/) podcast.
---

## More From Alex

- [Follow Alex on Twitter](https://twitter.com/fimion)
- [Watch Alex's streams](https://twitch.tv/Fimion)
- [Enjoy the Vue](https://enjoythevue.io/)

## Transcript

**Ben:** Howdy, howdy, y'all! It's Tuesday. It's time for another Some Antics. Today I am joined by Alex Riviere. Alex, how's it going? 

<i class="timecode">[00:00:08]</i> **Alex:** It's going great!!! 

<i class="timecode">[00:00:10]</i> **Ben:** I'm super, super stoked for that enthusiasm. I'm super stoked to have you on. I was recently on your stream. I showed you around Eleventy. We did horrible things there. And now you're here and we get to bring the horrible, terrible things into our space. So super, super glad to have you here.

<i class="timecode">[00:00:31]</i> Alex Trost, thank you so much for resubscribing. Alex says, "Some Antics is a pun and I was the first to figure it out."

<i class="timecode">[00:00:39]</i> <i class="brackets">[Alex laughs]</i>

<i class="timecode">[00:00:41]</i> Yeah, you… totally, TOTALLY were. There's a great clip of Trost realizing it live on his stream, like a great clip of that. Alex, go ahead and put that link in the chat and allow folks to, enjoy.

<i class="timecode">[00:00:58]</i> KohanaSushi is saying, "Alex, I really love your unicorn horn and ears." There's something very, very magical about this horn, which is you… any one of you can run the !unihorn command and change Alex's horn! 

<i class="timecode">[00:01:14]</i> **Alex:** We have a few different settings on there, so it'll just sort of rotate through them. It's got… it's all CSS animations up in m'horn, so there we go. 

<i class="timecode">[00:01:24]</i> **Ben:** So y'all mess with his horn. I spy a raid from Jason Lengstorf. How's it going, boop crew? I really enjoyed what I was able to watch for today's stream. So, if you haven't been watching Learn With Jason, today they were writing music with code. It was incredible. It was just fantastic. So… yeah!

<i class="timecode">[00:01:50]</i> So anyways, Alex, super happy to have you on. Would you like to introduce yourself for folks who haven't seen you around yet?

<i class="timecode">[00:01:59]</i> **Alex:** Yeah, sure! Hi, I'm Alex, not to be confused with other Alex, and I am over on twitch.tv/Fimion. You can find me on Twitter at @fimion. I'm on GitHub at Fimion. I do a lot of things. I am a cohost of the Enjoy the Vue podcast. I run the Atlanta Vue.js Meetup. I help co-organize the PyATL meetup. So I've sort of got my fingers in a lot of different things, and yeah! Check me out. You can also find my blog at alex.party. So it's always a party over at alex.party. Uh… yeah! 

<i class="timecode">[00:02:42]</i> **Ben:** I'm gonna put that alex.party link in the chat.

<i class="timecode">[00:02:45]</i> So one of the reasons, actually, that I wanted to have you on is because you've been streaming this project that you've been working on, which is a GeoCities-inspired web components library.

<i class="timecode">[00:02:59]</i> **Alex:** Yep.

<i class="timecode">[00:03:00]</i> **Ben:** Could you talk about that for a bit? 

<i class="timecode">[00:03:02]</i> **Alex:** So, my whole aesthetic is that I am very bad at… Can you have a link to buy the stuff? Maybe. I will try and see if I can find a link for it.

<i class="timecode">[00:03:16]</i> But I tend to make really bad design choices because… I'm not good at design, so I just lean into it. And I remember, growing up, I remember GeoCities and the joy that it brought that you could just, like, throw something up and it would just work. But there was also, like, this weird feeling of, like, having to wait for it to all download, right? So, like, I've started making a series of web components where it's really designed to, you know, help you relive that experience. The images load slowly, and there's tacky backgrounds and, like, there's fonts and there's all sorts of stuff, right? It's pretty… it's pretty fun stuff. But what it's really good for is that it's actually… it's all web components and so we can kind of sprinkle it in and we can also make it accessible so that everybody can enjoy the terribleness that is happening on the page. So, like, if we have a background element — 'cause used to be in HTML, like, old HTML, HTML 3, you would be able to, like, specify a `background` attribute, and so I've made something where you can just be like `background` and it'll make it have this background. And we've added in, like, some tags to give it some alt text so that you know, like, if you're on a screenreader, you're like, "This thing has a really bad background" and you're able to, like, get that information. So yeah!

<i class="timecode">[00:04:55]</i> **Ben:** Yeah! So when I was getting into web development, like, you know, I took a class that touched on it a bit in college and such. One of the things I was always taught was there's this very firm separation between content and presentation. I think many web developers will have heard that before, right? Like, you've got your content, but then you can put, like, any coat of paint you want on it. And kind of the ultimate representation of that — and maybe I'll just start sharing my screen here so that we can see this — was the CSS Zen Garden project, which takes the same markup and applies different coats of paint to it and such. The modern, like, spiritual successor of that is Stephanie Eckles's Style Stage, which I love.

<i class="timecode">[00:05:48]</i> But the reason I bring this up is I don't think content and presentation are that separate. I think semantics is important, but sometimes… the fact that you are presenting something in a, like, intentionally terrible way reminiscent of the GeoCities era, that itself is part of the content.

<i class="timecode">[00:06:08]</i> **Alex:** Yeah.

<i class="timecode">[00:06:08]</i> **Ben:** Like, it's not separable from the rest of the experience. And so how do you bring that to, for instance, folks that are using assistive technology such as screenreaders, and how do you do it in a way that is… like, it hearkens back to some of our worst practices without forcing people to endure things like animations that perhaps would be harmful to them, right?

<i class="timecode">[00:06:32]</i> **Alex:** Yeah.

<i class="timecode">[00:06:33]</i> **Ben:** How do you hearken back to the days of old without reproducing those ills? So I've found your geo-elements project just absolutely a fun thought experiment in that regard.

<i class="timecode">[00:06:44]</i> **Alex:** Yeah! Well, and also just sort of, like, taking these old elements that are deprecated in the HTML spec and updating them, right? So, there used to be a `<font>` element, so why don't we make a new `<font>` element, but when you put in a `<font>`… if it doesn't exist on the system, just go ahead and install the… just go ahead and make a link to the Google Font for it, right?

<i class="timecode">[00:07:05]</i> **Ben:** Yeah!

<i class="timecode">[00:07:05]</i> **Alex:** Like, so you want to use a Google Font? Great, just put in the name of the Google Font. It'll work, right? Like, boom, done. So yeah! That is… I enjoy it. It's fun. It's a fun way to be, like, "Okay, cool. How do we take this thing that existed and make it BETTER? Let's, ADD something to it!"

<i class="timecode">[00:07:22]</i> **Ben:** Yeah.

<i class="timecode">[00:07:22]</i> **Alex:** And sort of… yeah. 

<i class="timecode">[00:07:24]</i> **Ben:** Is geo-elements anywhere I could link to or show off? 

<i class="timecode">[00:07:28]</i> **Alex:** Ummm… not really. It's still all… like, there's GitHub for it, I think. Give me a second, let me find that link. 

<i class="timecode">[00:07:36]</i> **Ben:** In the meantime, yeah, so we're having Alex on. Go follow Alex on Twitter. And… yeah!

<i class="timecode">[00:07:47]</i> So, web components. In general.

<i class="timecode">[00:07:50]</i> **Alex:** Web components.

<i class="timecode">[00:07:51]</i> **Ben:** Yeah! So you're building geo-elements with web components.

<i class="timecode">[00:07:56]</i> **Alex:** Yes.

<i class="timecode">[00:07:57]</i> **Ben:** What are they, and how do they differ from other approaches to building the web?

<i class="timecode">[00:08:04]</i> **Alex:** So, web components… well, technically, they're not web components.. They're not called "web components." If you're actually looking for the thing and you search "web components," you're going to get a bunch of… people call it "web components" much in the same way as we call it "CSS variables."

<i class="timecode">[00:08:19]</i> **Ben:** Mmm.

<i class="timecode">[00:08:20]</i> **Alex:** That's not what they're called. It's not their technical name. The technical name is "custom elements." And this is very important because if you start trying to type in, like, `window.webComponent`, it doesn't work. So when we talk about web components, we're talking about custom elements. And some of this is that, like, with the sort of componentization of frameworks, where you have, like, Vue and React and all of this stuff, there was a big push to be like, "Hey, can we get something kind of like this native?" Right? And so custom elements kind of came from there. There have been other proposals before where you had, like, HTML imports. I never got to work with those so I can't speak about them very much. And you had, like, some other things were, like, sort of halfway baked.

<i class="timecode">[00:09:08]</i> And custom elements aren't perfect, right? Like, the API, as you'll see as we're doing stuff, it's very verbose. You have to do a lot of work. And so people have sort of built frameworks around custom elements to make it easier to do them. We're not going to be using any of those today. 

<i class="timecode">[00:09:23]</i> But so with the custom element, the idea is that you can encapsulate all of the stuff that you want to do in a component. And none of the styles bleed in and all of the styles that you do inside of it don't bleed out. So it's really just sort of like "It's this, and then don't touch anything else. Just do the thing in here." Now, that isn't… totally true. There is some stuff that bleeds in. There is some stuff that bleeds out. So we're going to have some fun and play with that today. 

<i class="timecode">[00:09:59]</i> **Ben:** And so what is it we're doing with custom elements today?

<i class="timecode">[00:10:03]</i> **Alex:** So, what we're doing with custom elements today. There was an article over on CSS Tricks the other day called "useRainbow()." And I worked on this a little bit — yes, this is the elusive shadow DOM that we are going to be discussing today. So this article about `useRainbow` is… Rafat… and I'm still sure I'm pronouncing his name wrong, Rafał, Rafat? I don't know. He made this little React hook that allows him to basically have, like, this scrollable thing that his background of his site changes as you scroll down the page. It's over on potato.horse. And he made this beautiful writeup about it, where it's talking about different ways of, you know, having color. So, like, you have RGB color, but then you also have HSL. And so for this, we're going to be using HSL color, which is hue, saturation, and lightness. Lightness? Something like that. But, so you change the degree of the hue and it changes the color, so you can have one number change and the whole color changes. And so as you scroll down this page, it will change the background color.

<i class="timecode">[00:11:25]</i> **Ben:** Yeah. I'm going to do that. Real quick, just fair motion warning. I don't know if it's really motion, but there is a very large chunk of yellow that is going to start turning other colors, and if that's dizzying for you, first of all, unfortunately, this might not be the stream for you in general, because I think we're going to be reproducing some of this, but also just heads up that is happening now. So as I scroll through, it's turning green.

<i class="timecode">[00:11:49]</i> **Alex:** Yep.

<i class="timecode">[00:11:50]</i> **Ben:** It's blue now. Purple, pink. Yeah, so as I'm scrolling through — I'm trying to do this fairly slowly — it's changing color in real time.

<i class="timecode">[00:12:02]</i> **Alex:** Yep. And so I like things like this. And he wrote it as a React hook and sort of put up the code for it and talks about how it's all done. So it's this code here. This is the magic that makes it happen. It's a scroll listener, and then he does some math to do this. So we will be using this code in our web component. This will be sort of the key to our code. Now, the thing that will be different here is that the way he does it, he's applying a background color to the body itself. And so we're going to change this because this is a web component! This is a custom element, and we want this color to be a little bit more flexible. We want to be able to use it for other purposes.

<i class="timecode">[00:12:51]</i> So we're going to create a custom element called `<use-rainbow>`. All custom elements have to have two words at minimum. They have to have a hyphen in them. And so we're going to call it `<use-rainbow>`. And ultimately what it'll do is that inside of `<use-rainbow>`, you will be able to use a CSS custom property, CSS variable, called `--use-rainbow`, and it will be the color that you are currently on. But that means that because we're giving the color, you can apply it to border. You can apply it to the background. You can apply it to the text. You can apply it to whatever you want to! So this will give us a nice sort of, like, way of, like, managing this and saying, "Okay, cool. Put this element in. It'll now allow you to use this color wherever you want to." 

<i class="timecode">[00:13:39]</i> **Ben:** Mmm, okay! 

<i class="timecode">[00:13:40]</i> And that hyphen requirement that you mentioned, that's basically to distinguish custom elements from, like, actual native elements and basically also allow the spec to grow with more native elements without worrying about has anyone implemented, like, a custom element with the same name.

<i class="timecode">[00:13:59]</i> **Alex:** Yeah.

<i class="timecode">[00:14:00]</i> **Ben:** By saying all custom elements have a hyphen, you…

<i class="timecode">[00:14:03]</i> **Alex:** Yep.

<i class="timecode">[00:14:04]</i> **Ben:** …yeah, you protect that, like, core namespace there.

<i class="timecode">[00:14:08]</i> **Alex:** Yeah, exactly. It is, you want to make sure that we don't… have a conflict in the future. So they were thinking ahead about that when they were like, "We really don't want to give up a bunch of people doing weird things making an accordion thing and then, like, suddenly now we can't have an `<accordion>` or whatever," so. 

<i class="timecode">[00:14:27]</i> **Ben:** Yeah. Cool. Alright, so let's go ahead and dive in. We have a brand new CodePen, absolutely nothing in here. So how are we going to get started, Alex?

<i class="timecode">[00:14:38]</i> **Alex:** So first, let's start with… we'll make this real simple first. We're just going to do, we're going to type in "use-rainbow" and then hit Tab, and it should just auto-complete, give us a nice little, like, `<use-rainbow>` tag. Great, cool. And then we'll make… let's make, like, five `<div>`s with, like… if you do, yeah, `div`, and then… Actually, erase — undo that. We'll do… and then inside of it, so we'll do immediate child selector, right? And then we'll do… `h2`… with parentheses. And that's going to be… we'll make it be… actually, no, wait. Back that up. I'm trying to remember Emmet off of the top of my head. We're going to do curly bracket. And that's going to be… I think we can do "Heading," space, dollar? 

<i class="timecode">[00:15:43]</i> **Ben:** Like thiiis? 

<i class="timecode">[00:15:46]</i> **Alex:** Yeah. Yeah! Like that. And then we're going to do a plus sign after. So outside of the curly bracket, we'll do a plus sign.

<i class="timecode">[00:15:54]</i> **Ben:** Okay.

<i class="timecode">[00:15:56]</i> **Alex:** And then we will do parentheses, `p`, child selector.

<i class="timecode">[00:16:10]</i> **Ben:** Like, direct child?

<i class="timecode">[00:16:12]</i> **Alex:** Yeah, direct child. And then new parentheses — new open parenthesis — and then we'll do `lorem*5`.

<i class="timecode">[00:16:22]</i> **Ben:** Okay.

<i class="timecode">[00:16:23]</i> **Alex:** And then going outside of that, we'll do that times three, I think.

<i class="timecode">[00:16:30]</i> **Ben:** Alright. All of this.

<i class="timecode">[00:16:32]</i> **Alex:** Yeah. So we're just… and I think if you hit Tab, it should just give us a whole bunch of stuff.

<i class="timecode">[00:16:38]</i> **Ben:** Oh my goodness, okay!

<i class="timecode">[00:16:40]</i> **Alex:** Okay, cool! Great! We have a bunch of content now! Yaaay, look at that.

<i class="timecode">[00:16:43]</i> **Ben:** Okay!

<i class="timecode">[00:16:43]</i> **Alex:** We have brilliant tons of content. This is amazing. Alright, so we have auto-generated a bunch of content. This is just sort of whatever. We don't… it's not really useful or anything like that. So… now that we have all this content, that gives us stuff to scroll—

<i class="timecode">[00:17:00]</i> **Ben:** Yeahhh.

<i class="timecode">[00:17:00]</i> **Alex:** —and things to play with styling-wise. So now, over in CSS land, let's just go ahead and say that `<div>`s are going to have a margin of, like… what do you like? 32? What's your favorite number? 

<i class="timecode">[00:17:18]</i> **Ben:** Uh… we'll do 32! 32px?

<i class="timecode">[00:17:20]</i> **Alex:** 32px, great. Cool, works great. We'll do that. We'll do… yeah, there we go, and then we'll have `<h2>`s will be like… I don't know. What do you think? We're not going to get into fonts. We're not going to pick the fancy fonts today, I don't think. 

<i class="timecode">[00:17:38]</i> **Ben:** No, no fonts today? I'm just gonna do a sans serif then. 

<i class="timecode">[00:17:41]</i> **Alex:** Okay, cool. I mean, we can always make it Comic Sans. I'm not against making it Comic Sans.

<i class="timecode">[00:17:48]</i> **Ben:** You know what? We've got you here. We can't not. 

<i class="timecode">[00:17:51]</i> **Alex:** I think it's "Comic Sans MS," because that's actually…

<i class="timecode">[00:17:55]</i> **Ben:** There we go.

<i class="timecode">[00:17:56]</i> **Alex:** Yeah, there we go! Alright, cool. And then everything else… I think we're good with everything else. We have content now. We've sort of spaced it out a little bit.

<i class="timecode">[00:18:08]</i> **Ben:** Okay.

<i class="timecode">[00:18:09]</i> **Alex:** So, now we're going to sort of jump into JavaScript world. This is where things get fun. 

<i class="timecode">[00:18:15]</i> **Ben:** So am I good to collapse these? 

<i class="timecode">[00:18:18]</i> **Alex:** Yeah, you should be able to just take the JavaScript tab and just, like, slide it all the way up and it'll collapse the other ones automatically. Cool. Alright, so we're going to live in JavaScript land. So let's make a helper function really fast first.

<i class="timecode">[00:18:29]</i> **Ben:** Alright.

<i class="timecode">[00:18:29]</i> **Alex:** We're going to make `const` or `function` — whatever you want to call it — `ce` for "create element."

<i class="timecode">[00:18:36]</i> **Ben:** Okay.

<i class="timecode">[00:18:37]</i> **Alex:** And you're just gonna, like, take your args from it, so `...args`, and then you're gonna return a call to `document.createElement` and spread your args into that. This is a helper function for working with web components because in web component land, this is how you have to do things. You have to create elements and then add other elements to those elements, so we're going to be doing a lot of that. Maybe not so much of that. We'll see. We'll see. We'll see how it goes.

<i class="timecode">[00:19:11]</i> Alright, cool. So, we have our helper function. Let's now make a new class. So, Ben, have you worked with classes much in JavaScript? 

<i class="timecode">[00:19:24]</i> **Ben:** A little. Especially, you know, in React I've had to do some classes prior to hooks taking over. 

<i class="timecode">[00:19:33]</i> **Alex:** Cool. Alright, so we're going to make a class. This is how you sort of define… and yeah, you can kind of spread that out. We're gonna be looking at code for a little bit, so the preview is not quite as important here. We're going to make a new class. We'll call it `UseRainbow` to keep it consistent. You can name the class whatever you want to. You could name it, like, `CustomElementUseRainbow`. You know, whatever. The name of the class itself is not so important, but for, you know, readability for other people who come along and see your code later, it's probably better to call it `UseRainbow`. And then you're going to extend `HTMLElement`. So, you've got `HTMLElement`. Great. And then we should be able to curly bracket, and then we're going to have a constructor.

<i class="timecode">[00:20:27]</i> **Ben:** And for folks who… I guess, are we just scaffolding this out and then we'll kind of talk to it?

<i class="timecode">[00:20:32]</i> **Alex:** Yeah, yeah, yeah.

<i class="timecode">[00:20:33]</i> **Ben:** Cool. 

<i class="timecode">[00:20:33]</i> **Alex:** We're going to scaffold this out, sort of get, like, the bare minimum that we need—

<i class="timecode">[00:20:36]</i> **Ben:** Cool.

<i class="timecode">[00:20:36]</i> **Alex:** —to be able to make this work. And so in `constructor`, you always call `super` first thing. And then once we call `super`, we will go and we will actually instantiate this custom element.

<i class="timecode">[00:20:49]</i> So the fun thing about custom elements is that with React, with Vue, with jQuery, right? You always have this event where, like, alright, we are waiting for the page to finish loading so that we can start doing things, right? Or like with React, it's like, you have to create your application and mount it to a element. And, like, in Vue, you know, it's like same thing. You're creating an app, mounting it to an element. So you're always waiting for that event to happen. So, like, everything has to load and then do a thing. With custom elements, you tell the browser, like, "Hey, I'm making a custom element. It's called this." And then the browser figures it out, right? So we're not going to have to wait for, like, "on document load." We're not going to have to, like, try to, like, create an application and pick the thing that we want to mount it to. No.

<i class="timecode">[00:21:43]</i> So outside of the class, down at the bottom of your JavaScript file here. This is how we actually instantiate the custom element. This is how we make it so that the browser knows that it exists, is there is a thing called the `CustomElementRegistry` on the window, and it is actually found at `window.customElement`. Triple-checking if that is correct because every time that I have to do this, it is… yeah, `customElements`.

<i class="timecode">[00:22:15]</i> **Ben:** Plural?

<i class="timecode">[00:22:15]</i> **Alex:** With an S.

<i class="timecode">[00:22:16]</i> **Ben:** Okay.

<i class="timecode">[00:22:16]</i> **Alex:** Plural, because it is the registry. It is the full registry. All of them live on here. It has methods like `has`, right? So you can, like, check to see if one exists already. You can remove them if they exist. Whatever.

<i class="timecode">[00:22:29]</i> **Ben:** Mhmm.

<i class="timecode">[00:22:30]</i> **Alex:** And we're going to use `.define()`. So this is how you define one so that the browser knows that it exists, and we're going to call it. The first parameter is the name of the tag that we're going to use. So in this case, it's going to be 'use-rainbow'. And then the next argument that you have to include is the class that we've just made, so `UseRainbow`.

<i class="timecode">[00:22:53]</i> Now there is a third one where you can say, "Hey, this is extending this type of element," so for instance, you could say, like, if you were wanting to extend the `<img>` element, we could do that. We don't need that. That is an optional parameter.

<i class="timecode">[00:23:06]</i> **Ben:** Okay.

<i class="timecode">[00:23:06]</i> **Alex:** And yeah! So, there we go! Tadaaa! We now have a custom element that is registered and, yaaay, it's working! Nothing happened because it's doing exactly what it's supposed to. So, this is where we get into, now, to do the thing that we want in order to make styles not necessarily escape, we need to create… the shadow DOM!!! Dun-dun-dun…

<i class="timecode">[00:23:34]</i> **Ben:** Spooky. I should have brought you in for, like, the Halloween stream. That would have been good.

<i class="timecode">[00:23:38]</i> **Alex:** That would have been good. We would have done spooky, spooky stuff with the shadow DOM. So, to start using shadow DOM inside of a custom element, we have to tell the custom element that we want to use shadow DOM.

<i class="timecode">[00:23:55]</i> **Ben:** Okay.

<i class="timecode">[00:23:57]</i> **Alex:** So the way that we do that is that you're going to go into your constructor after your `super()` statement — so yeah, line 7 — and you're gonna — nope, still need the colon.

<i class="timecode">[00:24:09]</i> **Ben:** Yep.

<i class="timecode">[00:24:09]</i> **Alex:** And you're going to call `this.attachShadow()`. OooOOooOOoooh. And we're going to pass it an object. That object is going to have `mode: 'open'`. 

<i class="timecode">[00:24:26]</i> **Ben:** Okay, and 'open' is going to be lowercase?

<i class="timecode">[00:24:28]</i> **Alex:** Yep.

<i class="timecode">[00:24:29]</i> **Ben:** Cool.

<i class="timecode">[00:24:29]</i> **Alex:** Perfect. And what that does is that sort of gives us some ways to inspect things inside the shadow DOM as we're doing things, and you can be either closed or open. Closed makes it, like, super hard for people to do things. Open makes it a little bit easier. I don't know the exact differences. I just always make mine open.

<i class="timecode">[00:24:49]</i> **Ben:** Okay.

<i class="timecode">[00:24:50]</i> **Alex:** Makes things easier.

<i class="timecode">[00:24:51]</i> **Ben:** Is there a reason that folks might use closed, like a performance thing or anything like that? 

<i class="timecode">[00:24:58]</i> **Alex:** If you really don't want people, like, digging around inside of there and being able to mess with stuff, you could use closed.

<i class="timecode">[00:25:05]</i> **Ben:** Okay.

<i class="timecode">[00:25:06]</i> **Alex:** I think… I would have to look up more. It's one of those things where I know that, like, you can do either one and the general consensus is just make it open. It's a lot easier to deal with.

<i class="timecode">[00:25:22]</i> **Ben:** For sure.

<i class="timecode">[00:25:24]</i> **Alex:** So now that we've instantiated the shadow DOM — we've attached shadow — there is now a property available to us called `this.shadowRoot`.

<i class="timecode">[00:25:34]</i> **Ben:** Okay.

<i class="timecode">[00:25:34]</i> **Alex:** And as you'll see on our preview, everything has completely disappeared.

<i class="timecode">[00:25:39]</i> **Ben:** Yeah!

<i class="timecode">[00:25:40]</i> **Alex:** Which… this is the beauty and terror of the shadow DOM is that it goes, "Oh, okay, cool. You don't want anything in here, so you control everything." So we now control everything, which is unfortunate because now we control everything. So we need to tell it, "Hey, when you put content inside of this element, we need to display that." So we need to… so, the way that we do this is that we're going to create a new element, and it's called a `<slot>`!

<i class="timecode">[00:26:11]</i> **Ben:** Okay.

<i class="timecode">[00:26:12]</i> **Alex:** So let's make a function call. We're gonna define a new property on our class of `UseRainbow`, so inside the constructor, you're just going to do `this.slot`.

<i class="timecode">[00:26:29]</i> **Ben:** Okay.

<i class="timecode">[00:26:31]</i> **Alex:** Equals ce()… and then, quote, 'slot'.

<i class="timecode">[00:26:38]</i> **Ben:** Got it, okay.

<i class="timecode">[00:26:40]</i> **Alex:** So we now have a `<slot>` element, and now we need to add it to our shadow root so we're going to do `this.shadowRoot` — nope — `.append()`.

<i class="timecode">[00:26:52]</i> **Ben:** `.append()`… oh, yeah, okay!

<i class="timecode">[00:26:53]</i> **Alex:** 'Cause we're dealing with the DOM here. It's shadow DOM, right, so we have to treat it like DOM. And then we're going to append `this.slot`.

<i class="timecode">[00:27:00]</i> **Ben:** Okay.

<i class="timecode">[00:27:00]</i> **Alex:** And now, it should… oh, no.

<i class="timecode">[00:27:07]</i> **Ben:** Hmm. 

<i class="timecode">[00:27:10]</i> **Alex:** Uh…

<i class="timecode">[00:27:16]</i> I don't know why it's not working. Ben, this is awful. Okay. Am I doing it wrong? Shouldn't be. 

<i class="timecode">[00:27:27]</i> **Ben:** `return document.createElement(...args)`…

<i class="timecode">[00:27:31]</i> **Alex:** Mhmm.

<i class="timecode">[00:27:31]</i> **Ben:** Travis in the chat — first of all, Travis, thank you for resubscribing. Five months. Super, super, super kind of you. Yeah, Travis goes, "Favorite words on livestreams: Oh, no." 

<i class="timecode">[00:27:43]</i> **Alex:** Right? Yeah… 

<i class="timecode">[00:27:44]</i> So let's console log what is going on with `this.slot`, 'cause I feel like I have made a boo-boo somewhere.

<i class="timecode">[00:27:55]</i> **Ben:** Yeah…

<i class="timecode">[00:27:55]</i> console.log(), and I'm gonna call this {slot: this.slot}. Alright then… let's peek… at the console. There… I mean, it's just Inspect, right?

<i class="timecode">[00:28:14]</i> **Alex:** Yeah.

<i class="timecode">[00:28:14]</i> **Ben:** Like normal. Yeah. For some reason, Chrome is chugging on. You know how streams get.

<i class="timecode">[00:28:22]</i> **Alex:** Choo-choo. 

<i class="timecode">[00:28:25]</i> **Ben:** Okay, so there's… We do have an object. Ope. Let me go back to Elements! Thank you. Okay. Oh. Okay? That is just a string.

<i class="timecode">[00:28:37]</i> **Alex:** Interesting.

<i class="timecode">[00:28:41]</i> **Ben:** And here…

<i class="timecode">[00:28:48]</i> We're actually doing it to… Is there a chance that this could be CodePen protecting us here? 

<i class="timecode">[00:28:54]</i> **Alex:** Shouldn't be.

<i class="timecode">[00:28:58]</i> Let's try… let's try… doo-doo-doo… let's try `appendChild()`! I like that suggestion, Building— Who said that? Lindsay. Lindsay, thank you, yes. Let's try `appendChild()`. I think we're going to get the same result, though. Oh, no, wait! Oh— ooh— uh!

<i class="timecode">[00:29:16]</i> **Ben:** It flashed for a bit. We're getting an error. "Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'."

<i class="timecode">[00:29:23]</i> **Alex:** Okay.

<i class="timecode">[00:29:23]</i> **Ben:** What…? Okay.

<i class="timecode">[00:29:25]</i> **Alex:** We have… we have… we have angered… we've angered the… alright!

<i class="timecode">[00:29:33]</i> **Ben:** Is there a chance…? What if…? Does it have to be `this.slot`? Could I do, like…

<i class="timecode">[00:29:40]</i> **Alex:** Let's try… yeah, let's do `let slot`. We're going to need it to be bound to something on the object at some point because…

<i class="timecode">[00:29:50]</i> **Ben:** Oh. Oh! Okay! I wonder if `slot` is, like, a protected keyword or something like that.

<i class="timecode">[00:29:56]</i> **Alex:** It might be.

<i class="timecode">[00:29:57]</i> **Ben:** Like, a protected property name. Okay.

<i class="timecode">[00:30:00]</i> **Alex:** Yeah, I feel like that could be it.

<i class="timecode">[00:30:04]</i> **Ben:** Alright!

<i class="timecode">[00:30:04]</i> **Alex:** Yes. So, `this.attachShadow()` does return something so, like, if you're wanting to work locally with it, you could get the shadow root from `attachShadow()`, but it also attaches it at `this.shadowRoot`, so you always have that available to you. I haven't figured— Once again, this is where we get into the "I haven't fully figured out all of the nuance of this and whether or not it's going to be a thing."

<i class="timecode">[00:30:32]</i> **Ben:** By the way, like, I am seeing that `slot` here is getting logged out as an empty string and not… 

<i class="timecode">[00:30:39]</i> **Alex:** So clearly, we should not call it `this.slot`.

<i class="timecode">[00:30:45]</i> **Ben:** Oh.

<i class="timecode">[00:30:45]</i> **Alex:** We should call it `this.slotElement` and I bet that that'll let us… 

<i class="timecode">[00:30:52]</i> **Ben:** Got it, okay, yeah. We should also console log the thing that we're actually console logging. 

<i class="timecode">[00:30:58]</i> **Alex:** Yeah.

<i class="timecode">[00:30:59]</i> **Ben:** Okay.

<i class="timecode">[00:30:59]</i> **Alex:** Oops.

<i class="timecode">[00:31:00]</i> **Ben:** Yeah.

<i class="timecode">[00:31:00]</i> **Alex:** I bet `slot` is, like, one of those things where, like, it automatically casts to string or something. 

<i class="timecode">[00:31:06]</i> **Ben:** Yeah. Okay! Let's see… let's see about this. `slotElement`. And then reuse this on the next few lines.

<i class="timecode">[00:31:17]</i> **Alex:** Love it.

<i class="timecode">[00:31:18]</i> **Ben:** And here. Let's see if that… does what we hope!

<i class="timecode">[00:31:23]</i> **Alex:** Boom.

<i class="timecode">[00:31:24]</i> **Ben:** Okay. So this is what we've learned today, is that `this.slot` is a protected keyword of a custom element class. 

<i class="timecode">[00:31:32]</i> **Alex:** Yup. So what's good about this, what's great about this is that we have now created sort of like a way of, like, encapsulating some stuff, and any styles that we make inside of this element will stay inside of this element, which means that we also get some extra CSS selectors that we don't typically have!

<i class="timecode">[00:32:04]</i> **Ben:** Okay!

<i class="timecode">[00:32:06]</i> **Alex:** And the one that we're going to be using today more specifically is :host. And so we're still going to do this all in JavaScript land. We're going to make another element, and it is gonna be… we'll do `this.styleElement`. 

<i class="timecode">[00:32:23]</i> **Ben:** Okay. That's in here.

<i class="timecode">[00:32:27]</i> **Alex:** Yep.

<i class="timecode">[00:32:27]</i> **Ben:** Equals create element. And this is a `<style>` tag, I'm guessing?

<i class="timecode">[00:32:30]</i> **Alex:** Yep, and it is a `<style>` tag! Exactly. And so we're going to use that and we're going to say, okay… we're going to set the text content of our style element. And for the time being, we're just gonna… we're gonna set it to an arbitrary value so that we can kind of make sure that it's doing the thing that it's supposed to.

<i class="timecode">[00:32:55]</i> So we're gonna use — no, no, not star. We're gonna do :host.

<i class="timecode">[00:33:02]</i> **Ben:** :host.

<i class="timecode">[00:33:04]</i> **Alex:** Yeah. 

<i class="timecode">[00:33:05]</i> **Ben:** Ooh. My emoji keyboard is catching that.

<i class="timecode">[00:33:09]</i> <i class="brackets">[Alex laughs]</i>

<i class="timecode">[00:33:09]</i> That's great! Thanks! Come on, Rocket! We're shutting down Rocket. Amazing.

<i class="timecode">[00:33:17]</i> **Alex:** Perfect timing on that.

<i class="timecode">[00:33:18]</i> **Ben:** Yeah. And I'm gonna go ahead and actually use… tildes for… Yeah, not tildes, backticks.

<i class="timecode">[00:33:27]</i> **Alex:** Yeah, backticks, yeah. 

<i class="timecode">[00:33:28]</i> **Ben:** Okay. So :host. 

<i class="timecode">[00:33:30]</i> **Alex:** Cool. So that's our selector. So this selects the host element, so this would be the element that is `<use-rainbow>`. So it's selecting that element and we're going to apply styles to that specifically. 

<i class="timecode">[00:33:47]</i> **Ben:** Got it. And so this is the custom element equivalent of using :root, right?

<i class="timecode">[00:33:53]</i> **Alex:** Yes.

<i class="timecode">[00:33:54]</i> **Ben:** Okay! Got it.

<i class="timecode">[00:33:56]</i> **Alex:** Yeah, we're selecting sort of the root element of… the shadow DOM! And so that allows us to apply things and it'll apply it to everything.

<i class="timecode">[00:34:07]</i> **Ben:** Okay!

<i class="timecode">[00:34:07]</i> **Alex:** So let's go ahead and we'll say color equals red for now, and then we can `appendChild()` to the shadow root our `<style>` element. 

<i class="timecode">[00:34:23]</i> **Ben:** Turns out it is, in fact, important to actually add things to the page.

<i class="timecode">[00:34:28]</i> Yes. `.append(this.styleElement)`. And next time it loads… things are red! 

<i class="timecode">[00:34:39]</i> **Alex:** Yayyy, look at that!

<i class="timecode">[00:34:40]</i> Alright, so let's inspect the DOM really fast.. Let's bring up our dev tools and inspect the DOM, because I want to sort of show off what's happening here 'cause there's some weird stuff happening. So if we look, we see that we have `<body>`, and then we have `<use-rainbow>`, right? Which is sort of the thing that we were building. And then inside of that, we have, like, a bunch of `<div>`s that we made, and then we have the shadow root.

<i class="timecode">[00:35:07]</i> So if we look in our shadow root, you can see inside of the shadow root, we have a `<slot>` and a `<style>`. So the `<style>` is going to apply to everything inside of there, but it also, in theory, won't bleed out. Now, the reason why the color is bleeding out is because colors inherit from parents, I believe, by default.

<i class="timecode">[00:35:32]</i> **Ben:** Mhmm.

<i class="timecode">[00:35:34]</i> **Alex:** I think that's the way that works. So that is the CSS cascade happening in full effect. So we're going to leverage this cascade by defining some CSS variables, which will then be available to us inside of that `<slot>`.

<i class="timecode">[00:35:55]</i> **Ben:** Okay!

<i class="timecode">[00:35:59]</i> **Alex:** So let's make a new method on our class, because this is something that's gonna get updated repeatedly. And we're going to make a method, we'll call it `updateStyle`.

<i class="timecode">[00:36:19]</i> And it's going to… just update `this.styleElement.textContent`. And yeah, we'll just copy that in for now. And so when we want to update style, we're going to do it in here.

<i class="timecode">[00:36:41]</i> **Ben:** Okay.

<i class="timecode">[00:36:41]</i> **Alex:** And the reason for that is, is that we're going to be making a window listener to listen for scroll events, and so every time that the scroll event happens, we're gonna update a number and then we're going to say "update the style, so use that number," right?

<i class="timecode">[00:36:55]</i> **Ben:** Alright, yep.

<i class="timecode">[00:36:56]</i> **Alex:** So now, since we're in this `updateStyle` thing, let's make four CSS properties. 'Kay? We're gonna have a `--use-rainbow-hue`. 

<i class="timecode">[00:37:15]</i> **Ben:** Look at me, seeing where you were going with this! 

<i class="timecode">[00:37:19]</i> **Alex:** Yuuup!

<i class="timecode">[00:37:21]</i> **Ben:** Alright?

<i class="timecode">[00:37:21]</i> **Alex:** And we'll set it to zero degrees. We'll just start there. 

<i class="timecode">[00:37:25]</i> **Ben:** I need this. I need to say "deg," right?

<i class="timecode">[00:37:27]</i> **Alex:** I think for here, you can set it to a number? It defaults to degrees. So we'll see how that works.

<i class="timecode">[00:37:36]</i> **Ben:** Okay.

<i class="timecode">[00:37:36]</i> **Alex:** And then we're gonna do saturation, we're going to do light, and then we're going to have `--use-rainbow` which will combine all three of those.

<i class="timecode">[00:37:44]</i> **Ben:** Okay.

<i class="timecode">[00:37:45]</i> **Alex:** And this will give us sort of a way to allow people to kind of use whichever value that they want.

<i class="timecode">[00:37:58]</i> **Ben:** So, if you're unfamiliar with HSL, Alex described it earlier, but it's got three values to it. It's hue, saturation, and lightness. The idea is, you know, RGB — red, green, blue — not very human-intuitive, right? Like, it's GREAT for working with LEDs, great for working with pixels, but NOT all that great to reason about. And so HSL converts things into hue, which is roughly where on the color line a particular color falls; there's saturation, which is like how vibrant is this color; and then lightness is how close is it to white or black. And so this tends to be a more intuitive, like, natural way for us to think about color. So, also easier to operate on for things like this, where we're actively going through the color spectrum. 

<i class="timecode">[00:38:58]</i> **Alex:** Yep.

<i class="timecode">[00:39:02]</i> **Ben:** I think I've done this right. 

<i class="timecode">[00:39:05]</i> **Alex:** I think so, yeah. So now we should be able to, like, inspect the heading and it should have available to it, if we look in the inspector…

<i class="timecode">[00:39:18]</i> **Ben:** Um…

<i class="timecode">[00:39:19]</i> **Alex:** Oh, no. Maybe not. Maybe I'm… 

<i class="timecode">[00:39:22]</i> **Ben:** Oh, I think it might be in the `<slot>`. We need to open up the shadow root, open up the `<slot>`, reveal the `<div>`. 

<i class="timecode">[00:39:30]</i> **Alex:** Oh, it's not showing up. Oh, 'cause we haven't called `updateStyle`.

<i class="timecode">[00:39:35]</i> **Ben:** Oh, okay. Yeah, yeah, yeah.

<i class="timecode">[00:39:36]</i> **Alex:** Yeah, yeah, yeah. So, instead of setting the `styleElement.textContent` there in the constructor, let's create the `<style>` element and then immediately call `updateStyle`.

<i class="timecode">[00:39:48]</i> **Ben:** Okay. Um… yeah. So we'll create this. We'll call `this.updateStyle()`.

<i class="timecode">[00:39:58]</i> **Alex:** Yep.

<i class="timecode">[00:39:59]</i> **Ben:** Yes.

<i class="timecode">[00:39:59]</i> **Alex:** And then it will append itself to the thing. Cool! Alright.

<i class="timecode">[00:40:03]</i> **Ben:** Now we inspect.

<i class="timecode">[00:40:04]</i> **Alex:** Great. Now we inspect, and we should have those variables available to us.

<i class="timecode">[00:40:08]</i> **Ben:** Yes.

<i class="timecode">[00:40:09]</i> **Alex:** So if we look at that heading, we'd see from host, we have the hue, the saturation, and the lightness available. Great! So… now that we have those available to us, we can use them sort of anywhere in there that we want to, so we can get rid of that `color: red;`. We'll just, we'll get rid of that for now. And let's go up to our first heading. 

<i class="timecode">[00:40:33]</i> **Ben:** In… the HTML?

<i class="timecode">[00:40:35]</i> **Alex:** In the HTML, so we're gonna go back into HTML land really quick. We're going to go up to that heading, and we're just gonna do an inline style right there. We're just gonna do `style="color: var(--use-rainbow);"`.

<i class="timecode">[00:40:51]</i> **Ben:** And this should make it red.

<i class="timecode">[00:40:52]</i> **Alex:** And this should make it… it'll probably be black at the moment—

<i class="timecode">[00:40:56]</i> **Ben:** Oh.

<i class="timecode">[00:40:56]</i> **Alex:** —'cause I think we've got everything set to zero. 

<i class="timecode">[00:40:58]</i> **Ben:** Yeah, lightness is zero. Yeah, okay, that tracks. 

<i class="timecode">[00:41:01]</i> **Alex:** Cool. So, the next thing that we're going to do. We're going to make some attributes for `<use-rainbow>`.

<i class="timecode">[00:41:12]</i> **Ben:** Okay.

<i class="timecode">[00:41:13]</i> **Alex:** So the key to making attributes is that we need to update when the attributes update, and we need to, um…

<i class="timecode">[00:41:29]</i> Yeah. So that's the main thing. We need to update when the attributes update.

<i class="timecode">[00:41:33]</i> **Ben:** Yeah!

<i class="timecode">[00:41:34]</i> **Alex:** So, we're going to create some new properties as well. We're going to create three new properties. We're going to create `this.hueOffset`.

<i class="timecode">[00:41:47]</i> **Ben:** Are we doing this in the constructor?

<i class="timecode">[00:41:49]</i> **Alex:** In the constructor, yeah.

<i class="timecode">[00:41:50]</i> **Ben:** Okay.

<i class="timecode">[00:41:50]</i> **Alex:** You always create new properties in the constructor, for anybody who's wondering, because otherwise JavaScript gets very angry at you. It doesn't. Actually, it's very flexible, but, like, it's poor form.

<i class="timecode">[00:42:08]</i> **Ben:** Okay.

<i class="timecode">[00:42:08]</i> **Alex:** So we'll make `hueOffset`. We'll make `saturation` and `lightness`.

<i class="timecode">[00:42:16]</i> **Ben:** `this.saturation`… 

<i class="timecode">[00:42:17]</i> **Alex:** Yep.

<i class="timecode">[00:42:17]</i> **Ben:** And `this.lightness`. 

<i class="timecode">[00:42:20]</i> **Alex:** And so `hueOffset` will start at 0. And `saturation` will start at 50…? Yes, 50. And `lightness` will be 100.

<i class="timecode">[00:42:41]</i> Great. And now we're going to go into `updateStyle`. And where we have those numbers there, we're going to, yeah, we're going to use exactly…

<i class="timecode">[00:42:55]</i> **Ben:** I'm picking up what you're putting down!

<i class="timecode">[00:42:56]</i> **Alex:** Awesome, I love it.

<i class="timecode">[00:43:00]</i> **Ben:** `this.saturation`.

<i class="timecode">[00:43:03]</i> **Alex:** Mhmm.

<i class="timecode">[00:43:03]</i> **Ben:** And… `this.lightness`! 

<i class="timecode">[00:43:08]</i> **Alex:** Yeah! Alright, making good time. Alright, so now… nope. Oh, I think actually they need to have… so for the rainbow-saturation and rainbow-lightness, you need to put a percent sign after that, after you insert that variable, because I think that they accept percentages.

<i class="timecode">[00:43:27]</i> **Ben:** Okay. And then… 

<i class="timecode">[00:43:30]</i> **Alex:** Maybe not.

<i class="timecode">[00:43:34]</i> **Ben:** Let's see… and then this was… does this need the "deg?" 

<i class="timecode">[00:43:39]</i> **Alex:** It may need to be degrees, yeah. 

<i class="timecode">[00:43:43]</i> **Ben:** Let's inspect. Let's see what's going on here. 

<i class="timecode">[00:43:45]</i> **Alex:** Yeah, let's see what's going on! I don't know.

<i class="timecode">[00:43:48]</i> **Ben:** Undefined. Oh. Okay…? 

<i class="timecode">[00:43:52]</i> **Alex:** Oh! 'Cause we… So we need to define those earlier than when we call `updateStyle`.

<i class="timecode">[00:43:58]</i> **Ben:** Oh, you know what? That helps. That helps. Turns out. 

<i class="timecode">[00:44:03]</i> **Alex:** Yeah, you have to define things before you use them.

<i class="timecode">[00:44:05]</i> <i class="brackets">[Alex laughs]</i>

<i class="timecode">[00:44:06]</i> **Ben:** Gonna stick this up here. That's delightful.

<i class="timecode">[00:44:10]</i> **Alex:** Yep.

<i class="timecode">[00:44:10]</i> **Ben:** Amazing. And I think, because lightness is 1, it's all showing up as white, but alright!!! Alright! We've already made our first terrible color decision. 

<i class="timecode">[00:44:21]</i> **Alex:** Yus! Alright. Yeah, this is where I forget how HSL works. Does the lightness have to be 50 and the saturation has to be 100?

<i class="timecode">[00:44:31]</i> **Ben:** I think that's how it has to be, yeah.

<i class="timecode">[00:44:33]</i> **Alex:** Okay, so let's flip those around because I want it to be the correct default, but I couldn't remember what the correct default is.

<i class="timecode">[00:44:39]</i> **Ben:** There we go.

<i class="timecode">[00:44:41]</i> **Alex:** Heyyy, there we go! So now we're back at our red text again.

<i class="timecode">[00:44:47]</i> So now, we have this variable that we can use. So we need to actually hook these three values up to attributes. So there's a couple of things that we need to do. First, we need to make a static getter for the class.

<i class="timecode">[00:45:02]</i> **Ben:** Okay.

<i class="timecode">[00:45:03]</i> **Alex:** So you're gonna type in `static get`, and it is — hold on, I have a note over here. `static get observedAttributes`. 

<i class="timecode">[00:45:14]</i> **Ben:** And this is a magic name.

<i class="timecode">[00:45:17]</i> **Alex:** This is a magic name that is specifically for custom elements, and you are going to return an array of strings for attribute names.

<i class="timecode">[00:45:28]</i> **Ben:** Okay!

<i class="timecode">[00:45:29]</i> **Alex:** So it's going to be… we're going to do… we'll do… we'll just do "hue", "saturation", and "lightness", right?

<i class="timecode">[00:45:39]</i> **Ben:** Oh, okay.

<i class="timecode">[00:45:40]</i> **Alex:** Make it easy.

<i class="timecode">[00:45:41]</i> **Ben:** So… alright, alright.

<i class="timecode">[00:45:46]</i> **Alex:** "Maaaagic." Alright. So now that we've defined it, now that we've defined that we have attributes that we want to update when they get updated, we're going to… Give me a second. I have to remember where it goes. This is where we — doo-doo-doo-doo-doo — Ah! There is another magic method that we use.

<i class="timecode">[00:46:09]</i> **Ben:** Okay.

<i class="timecode">[00:46:10]</i> **Alex:** This is, once again, magic to custom elements. It is called `attributeChangedCallback`. So that is the name of the method. It's not a static. It is an actual method. And it takes in three values. It takes in `name`, which is the name of the attribute that has changed.

<i class="timecode">[00:46:31]</i> **Ben:** Okay!

<i class="timecode">[00:46:31]</i> **Alex:** It takes in the old value. And it takes in the new value. 

<i class="timecode">[00:46:37]</i> **Ben:** `previousValue`, `newValue`.

<i class="timecode">[00:46:40]</i> **Alex:** And then, what we can do is… we will…

<i class="timecode">[00:46:55]</i> Sorry, I'm doing math in my head. We'll go ahead and we will say, alright, let's… based on the name, if the name is "hue", then this.hueOffset equals newValue. 

<i class="timecode">[00:47:16]</i> **Ben:** Okay, `this.hueOffset = newValue`. 

<i class="timecode">[00:47:21]</i> **Alex:** Yep. And then… yeah. Basically. 

<i class="timecode">[00:47:27]</i> **Ben:** Else if name is "saturation"…

<i class="timecode">[00:47:31]</i> **Alex:** Yep.

<i class="timecode">[00:47:33]</i> **Ben:** And I know that there's, like, more succinct ways we could express this with, like, switch statements and stuff like that, but this is fine in my book.

<i class="timecode">[00:47:42]</i> And then in here, else, if name is "lightness", this.lightness equals newValue. 

<i class="timecode">[00:47:59]</i> **Alex:** Perfect. 

<i class="timecode">[00:48:00]</i> **Ben:** So, we're saying, "Hey, we want you to watch for hue, saturation, and lightness." And by "attributes," we're referring to, like, these are going to be HTML attributes that, like, we put on our `<use-rainbow>` element up top, right?

<i class="timecode">[00:48:15]</i> **Alex:** Yeah! So, we can go ahead and we can test this. Let's make a `hue` attribute on our `<use-rainbow>`.

<i class="timecode">[00:48:21]</i> **Ben:** Okay.

<i class="timecode">[00:48:21]</i> **Alex:** And we will set it to 90, right? We'll offset our angle by 90 degrees. And so now…

<i class="timecode">[00:48:32]</i> **Ben:** I think we need to add that somewhere, right?

<i class="timecode">[00:48:34]</i> **Alex:** Oh.

<i class="timecode">[00:48:34]</i> **Ben:** Like, add it to our offset here? 

<i class="timecode">[00:48:37]</i> **Alex:** You're right. And then we need to, at the end of our changed attribute function, outside of all the if statements, we need to call `this.updateStyle()`. 

<i class="timecode">[00:48:47]</i> **Ben:** `this.updateStyle()`, okay. So, where's the best place to add the… Oh! It's just already there. Okay!

<i class="timecode">[00:48:56]</i> **Alex:** There you go!

<i class="timecode">[00:48:57]</i> **Ben:** And I can go to, like, 240, and that's going to be, like, a blue, I think. Or maybe that brings us back into like… yeah, it is blue!

<i class="timecode">[00:49:05]</i> **Alex:** So there we go. So now, we have this adjustable rainbow, `--use-rainbow` variable—

<i class="timecode">[00:49:11]</i> **Ben:** Yeah.

<i class="timecode">[00:49:12]</i> **Alex:** —that's a color, and we have sort of all of the pieces of this that we need.

<i class="timecode">[00:49:16]</i> **Ben:** Yeah.

<i class="timecode">[00:49:16]</i> **Alex:** So the last thing that we need to do is we're gonna have a…

<i class="timecode">[00:49:25]</i> We need… There's two more magic methods that we're going to deal with. 

<i class="timecode">[00:49:28]</i> **Ben:** Okay.

<i class="timecode">[00:49:28]</i> **Alex:** One is gonna be called `connectedCallback`.

<i class="timecode">[00:49:32]</i> **Ben:** Okay.

<i class="timecode">[00:49:33]</i> **Alex:** And this is equivalent to, like, `mounted` in Vue or, like… what is it? `componentDidMount` or whatever in React. Like, whatever it is where basically it's saying, "Okay, cool. It is now on the page. What do you need to do?"

<i class="timecode">[00:49:50]</i> **Ben:** Got it, okay.

<i class="timecode">[00:49:52]</i> **Alex:** And so with this one, this is where we're going to put our magic… uh… 

<i class="timecode">[00:50:00]</i> **Ben:** This is where we're putting our scroll listener, I'm guessing?

<i class="timecode">[00:50:04]</i> **Alex:** There we go, thank you. That's the word I was looking for! 

<i class="timecode">[00:50:07]</i> **Ben:** So, just to make sure that I've got this whole flow just kind of all set up, we… first of all, we've told our component here, "Hey, you could receive… like, your HTML element as it exists in the page could receive a `hue` attribute, a `saturation` attribute, and a `lightness` attribute. Anytime any of those changes, we want you to rerun this logic." This is very akin to rerendering a component when the props change in React. And we're saying, "Hey, based on specifically which attribute it was that changed, we want you to update a particular value." And then we update our styles. Our styles are always listening for those three properties as they exist on the class. We're updating the style. We're updating this variable. And now what we're doing is we're saying, hey, we're going to add an event listener to the page that listens for scroll so that we can change the attributes — these attributes up here specifically — and therefore trigger this whole rerender process in a way, without needing anything like a virtual DOM or anything like that.

<i class="timecode">[00:51:22]</i> **Alex:** So, what we're actually going to do is that inside of our scroll listener, we're going to… So, we're going to make a new property. It's gonna be called `scrollPosition`.

<i class="timecode">[00:51:35]</i> **Ben:** Okay.

<i class="timecode">[00:51:36]</i> **Alex:** And we'll start it at zero. 

<i class="timecode">[00:51:39]</i> **Ben:** I'm just gonna stick that up here.

<i class="timecode">[00:51:40]</i> **Alex:** Yep.

<i class="timecode">[00:51:41]</i> **Ben:** `this.scrollPosition = 0`. Okay. 

<i class="timecode">[00:51:44]</i> **Alex:** And then we'll go back into our `updateStyle` and we'll do `this.hueOffset + this.scrollPosition`. And in the original code for our window listener, it's basing it off of the… like, it adds it to the `<body>` and it does a little bit of stuff. We're just gonna update one value and then call `updateStyle()`, and `updateStyle` is going to update our `<style>` block.

<i class="timecode">[00:52:15]</i> **Ben:** Mmmm, okay.

<i class="timecode">[00:52:15]</i> **Alex:** And so let's go into `connectedCallback`. Let's go back over to our "useRainbow()" article, and we're just gonna borrow the code from "useRainbow()" because it's there! And I don't feel like trying to remember how it all works.

<i class="timecode">[00:52:35]</i> **Ben:** Okay.

<i class="timecode">[00:52:36]</i> **Alex:** So, yeah, everything's sort of inside of there. We're going to refactor it a little bit, because we're gonna need to, like, make the callback… like, the scroll handler is gonna be a method, and then we're going to need to, like, do it in a couple of different ways. So yeah, everything inside of `cb`, we're gonna take that out.

<i class="timecode">[00:52:57]</i> **Ben:** Oh, everything in here we're taking out.

<i class="timecode">[00:52:59]</i> **Alex:** Yep, we're just going to take all that and we can get rid of that.

<i class="timecode">[00:53:03]</i> **Ben:** I think we just removed everything we just put in.

<i class="timecode">[00:53:06]</i> **Alex:** Yeah, we leave the event listener for now, 'cause… and then, yeah. So let's make a new method. We'll make a new method and it's going to be called `scrollHandler`, right?

<i class="timecode">[00:53:17]</i> **Ben:** Okay.

<i class="timecode">[00:53:18]</i> **Alex:** 'Cause that's ultimately what we need. We need a scroll handler. So we'll make scroll handler, and it's going to be… we're going to take the contents of `cb`…

<i class="timecode">[00:53:27]</i> **Ben:** Aahhh.

<i class="timecode">[00:53:27]</i> **Alex:** …and put it in `scrollHandler`.

<i class="timecode">[00:53:29]</i> **Ben:** Okay. That's all… this stuff.

<i class="timecode">[00:53:34]</i> **Alex:** Yeah. And then we're gonna just put it in there.

<i class="timecode">[00:53:38]</i> **Ben:** Okay!

<i class="timecode">[00:53:39]</i> **Alex:** Badabing.

<i class="timecode">[00:53:41]</i> And then the last part is, is that… we're going to set `from` to zero.

<i class="timecode">[00:53:52]</i> **Ben:** Where is…? Okay.

<i class="timecode">[00:53:53]</i> **Alex:** So `const from`… He has it starting at 51. We're going to set it to zero. And then this is the magic equation that does all of this stuff.

<i class="timecode">[00:54:03]</i> **Ben:** Okay.

<i class="timecode">[00:54:03]</i> **Alex:** Ultimately, like, it makes it go from 0 to 360 and then once it goes to 361, it goes back to 0.

<i class="timecode">[00:54:10]</i> **Ben:** Mhmm.

<i class="timecode">[00:54:10]</i> **Alex:** And then instead of setting `document.body.styles.backgroundColor`, we're going to set `this.scrollOffset` to `h`.

<i class="timecode">[00:54:25]</i> **Ben:** Alright.

<i class="timecode">[00:54:27]</i> **Alex:** And then we're gonna get rid of that `const cb` callback. We're gonna get rid of that. And we're going to pass in `this.scrollHandler` into our—

<i class="timecode">[00:54:42]</i> **Ben:** Aahhh.

<i class="timecode">[00:54:44]</i> **Alex:** —addEventListener, and we're going to also add a `.bind(this)`, and the reason for that is, is that event listeners sometimes get the window rebound as `this`, so we're specifically saying "don't." 

<i class="timecode">[00:54:58]</i> **Ben:** Yeah! And I recently learned — this was actually, like, one of my first pull requests of the new job — about passive: true. Have you seen this before?

<i class="timecode">[00:55:11]</i> **Alex:** Yes, I have! It makes it not update… like, you can't, like, block or something. 

<i class="timecode">[00:55:19]</i> **Ben:** Yeah! It's… like, event listeners tend to, like, block the main JavaScript thread here, and basically what this says is this signals, hey, because our click handler — or I guess in this case, scroll handler — because our event handler isn't preventing default, it is totally safe to offload this into, like, a side thread, like a sidecar thread. And therefore, your listener isn't going to, like, block the main thread or anything like that. It'll all happen in the background, which is really nice. So if you don't do event.preventDefault(), then for event listeners such as scroll events, it's really important that you apply passive: true. Cool!

<i class="timecode">[00:56:07]</i> **Alex:** Yeah, it's perfect for that.

<i class="timecode">[00:56:09]</i> Alright, so the last thing that we're gonna do is that we're going to… Oh, actually, inside of `scrollHandler`, once we set `this.scrollOffset`, we're going to call `this.updateStyle()`. Because that's the key to all of this. We need to update the style.

<i class="timecode">[00:56:28]</i> And then the other thing that we're going to do, because I'm obnoxious and I insist on this stuff — we're almost done — is we're going to do `disconnectedCallback` as a method. This is another magic method.

<i class="timecode">[00:56:42]</i> **Ben:** Okay.

<i class="timecode">[00:56:42]</i> **Alex:** This is our cleanup phase. This is where we're going to tell it "stop listening," and it will get rid of the scroll handler. So we can do `window.removeEventListener()`, I think.

<i class="timecode">[00:57:03]</i> **Ben:** Alright, and that's going to be "scroll" and… 

<i class="timecode">[00:57:06]</i> **Alex:** "scroll".

<i class="timecode">[00:57:07]</i> **Ben:** …this.scrollHandler.

<i class="timecode">[00:57:09]</i> **Alex:** Yup.

<i class="timecode">[00:57:10]</i> **Ben:** `.bind(this)`? 

<i class="timecode">[00:57:13]</i> **Alex:** Sure. I don't know that we need to bind `this` on this one, but yes, it's…

<i class="timecode">[00:57:18]</i> **Ben:** Yeah, I think we can remove that.

<i class="timecode">[00:57:20]</i> **Alex:** Think so, 'cause it's just a reference to the function to make sure that it's pulling out the right one. I believe that that is the correct call, `removeEventListener()`. Yes, okay, cool. Okay, cool, so that's just our little cleanup, right? You always want to make sure that you clean up after yourself when you're doing stuff.

<i class="timecode">[00:57:35]</i> So now, we can go back into our CSS.

<i class="timecode">[00:57:39]</i> **Ben:** Yes.

<i class="timecode">[00:57:40]</i> **Alex:** And let's set on paragraphs — so `p` — we're going to set a border of 3 pixels. Solid. No, ridged. We'll do ridged. I like ridged.

<i class="timecode">[00:57:57]</i> **Ben:** Ooooh, okay?

<i class="timecode">[00:57:58]</i> **Alex:** Oh, it looks so much better with a ridge. And then `var(--use-rainbow)`.

<i class="timecode">[00:58:05]</i> **Ben:** Alright. I'm here for it.

<i class="timecode">[00:58:10]</i> Let it think a bit. Maybe decide to refresh, perhaps. 

<i class="timecode">[00:58:14]</i> **Alex:** Maybe? You can also click Save up at the top, and then it'll…

<i class="timecode">[00:58:23]</i> **Ben:** Yeah. What's going on? 

<i class="timecode">[00:58:25]</i> **Alex:** I don't know! Is ridged not right? Did I do that? We might have to do solid. 

<i class="timecode">[00:58:31]</i> **Ben:** Let's try solid just to see.

<i class="timecode">[00:58:33]</i> **Alex:** Or did we break something else? We may have broken something else. Are there any helpful—

<i class="timecode">[00:58:38]</i> **Ben:** Oh, there it is!

<i class="timecode">[00:58:39]</i> **Alex:** Ayyyy, look at that! So now as we scroll down, in theory, if we've done this right…

<i class="timecode">[00:58:43]</i> **Ben:** Ooh, no.

<i class="timecode">[00:58:44]</i> **Alex:** No. Hmm. 

<i class="timecode">[00:58:46]</i> **Ben:** So we… let's see… 

<i class="timecode">[00:58:52]</i> **Alex:** Oh, I bet I know what it is.

<i class="timecode">[00:58:53]</i> **Ben:** What's up?

<i class="timecode">[00:58:56]</i> **Alex:** Attributes come in as strings. So we need to make sure that we cast… we need to turn all of those in… when we set our attributes, we need to turn them all into numbers. 

<i class="timecode">[00:59:06]</i> **Ben:** Up here at the top? 

<i class="timecode">[00:59:12]</i> **Alex:** No, in the update attributes callback, the `attributeChangedCallback`. So instead of setting `hueOffset` to `newValue`, we want to do, like, `parseInt`.

<i class="timecode">[00:59:25]</i> **Ben:** Oh! Oh, okay. It's the other way around. 

<i class="timecode">[00:59:27]</i> **Alex:** Yeah, yeah, yeah. 'Cause it's coming in as a string, we need to turn it into a number. 

<i class="timecode">[00:59:33]</i> **Ben:** Okay. We're gonna get there. I believe in us. 

<i class="timecode">[00:59:37]</i> **Alex:** Yep.

<i class="timecode">[00:59:37]</i> **Ben:** I'm just gonna… copy this.

<i class="timecode">[00:59:42]</i> **Alex:** This is not ideal — don't do this in production — but I think it'll work for the moment. 

<i class="timecode">[00:59:47]</i> **Ben:** Alright. Uh, ooh. Oh, oh, okay. Alright, alright, alright. Aaaaand… I'm still seeing blue. 

<i class="timecode">[00:59:55]</i> **Alex:** Ugh! Should have tested this beforehand.

<i class="timecode">[00:59:58]</i> So let's inspect it, see what's going on, because I feel like… there's probably either a console error or something.

<i class="timecode">[01:00:05]</i> **Ben:** 240… 100… 50.

<i class="timecode">[01:00:11]</i> **Alex:** Okay…

<i class="timecode">[01:00:12]</i> **Ben:** And if I… You know what? I probably should not pull that, like, off screen. Ooh, hello. My Mac has decided to be incredibly laggy during the stream. But, okay. So if I put these two windows side by side, it's debugging time! 

<i class="timecode">[01:00:33]</i> **Alex:** It's debugging time.

<i class="timecode">[01:00:35]</i> **Ben:** Alright.

<i class="timecode">[01:00:36]</i> **Alex:** Debugging CSS. 

<i class="timecode">[01:00:38]</i> **Ben:** So if I scroll this, we would expect some things to change here. Namely, we would expect the — Oh, I'm getting lots… I've got 25 errors. What's going on here?

<i class="timecode">[01:00:47]</i> **Alex:** What's going on?

<i class="timecode">[01:00:48]</i> **Ben:** Some of these could be historical, but probably…

<i class="timecode">[01:00:56]</i> Alright, what's the very latest errors? "cb is not defined." Is that still accurate? I wonder. 

<i class="timecode">[01:01:03]</i> Oh. Missing a parenthesis after an argument list. That'll probably be it, huh?

<i class="timecode">[01:01:13]</i> **Alex:** Maybe. So let's pop it back open. Let's look at our, uh…

<i class="timecode">[01:01:24]</i> Let's try refreshing.

<i class="timecode">[01:01:26]</i> **Ben:** Yeah. Save. Refresh. Let's see if this does it. 

<i class="timecode">[01:01:32]</i> **Alex:** And if not, this should work and sorry to everybody that it isn't. This is… this is how things go with me.

<i class="timecode">[01:01:44]</i> **Ben:** This seems good. I don't think there's anything here. Let's see. Square braces here. Not very interesting. I wonder if I miscopied something into our scroll handler. 

<i class="timecode">[01:01:59]</i> **Alex:** I don't think so…

<i class="timecode">[01:02:07]</i> Scroll… passive… disconnected… 

<i class="timecode">[01:02:10]</i> **Ben:** I'm going to share this real quick and… okay, copy. There we go. Yeah, and if we could get some folks with some eyes on this pen, see if they can figure out the issue for us, let us know. But we're gonna try to make this work. I think we can make this— 

<i class="timecode">[01:02:33]</i> **Alex:** Everybody put some eyes on this. I feel like we're very close to making this happen. Maybe it's not `connectedCallback`. Maybe that's not the one that I want. What did you call it? You call it `connectedCallback`? Connected… 

<i class="timecode">[01:02:46]</i> **Ben:** Yeah. Oh, is it `connectingCallback`? 

<i class="timecode">[01:02:48]</i> **Alex:** No, it's connected. That is correct. 

<i class="timecode">[01:02:54]</i> **Ben:** It wouldn't be semicolons, 'cause those are largely optional in JavaScript land.

<i class="timecode">[01:03:03]</i> Alright, let's see… What I'm gonna do is…

<i class="timecode">[01:03:15]</i> `console.log()`. We're going to say `hueOffset` and `scrollPosition`. Inspect. 

<i class="timecode">[01:03:37]</i> **Alex:** It's gonna be something silly, right? Like, it's gonna be something really… 

<i class="timecode">[01:03:41]</i> **Ben:** Yeah. Okay, it is… Yeah, I don't think we're setting our scroll position ever. That's what it is. 

<i class="timecode">[01:03:49]</i> **Alex:** Did we not, in the…? 

<i class="timecode">[01:03:50]</i> **Ben:** Oh, it's—

<i class="timecode">[01:03:51]</i> **Alex:** Oh!

<i class="timecode">[01:03:52]</i> **Ben:** Oh, this is `scrollOffset`, isn't it? We want `scrollPosition`. That's it!

<i class="timecode">[01:03:57]</i> **Alex:** That's why.

<i class="timecode">[01:03:57]</i> **Ben:** We found it!

<i class="timecode">[01:03:58]</i> **Alex:** Yeah! I was like, we've written something wrong somewhere.

<i class="timecode">[01:04:03]</i> **Ben:** Okay.

<i class="timecode">[01:04:03]</i> **Alex:** It's all good.

<i class="timecode">[01:04:04]</i> **Ben:** Oh, that's satisfying!

<i class="timecode">[01:04:06]</i> **Alex:** There we go! We have made our thing.

<i class="timecode">[01:04:11]</i> Now, to make this accessible, last thing is that we would do… I would actually say for the border color, we want to set a transform — no, a transition — on the border color in our `p`, because if you scroll really quickly, it's gonna flash.

<i class="timecode">[01:04:29]</i> **Ben:** Yeah!

<i class="timecode">[01:04:29]</i> **Alex:** And so we want to put, like, a one-second transition on it so it'll transition really slowly, and then that'll make it nice and smooth, but also it's not gonna, like, flash and, like, really wig somebody out.

<i class="timecode">[01:04:42]</i> **Ben:** Is this it? `transition: 1s border`? 

<i class="timecode">[01:04:44]</i> **Alex:** `transition: 1s border`. Yeah, I think that'll work. That'll be fine. You may have to put an ease in there, but.

<i class="timecode">[01:04:49]</i> So now as you scroll, it'll, like, slowly transition between colors. 

<i class="timecode">[01:04:55]</i> **Ben:** Yeah! That is cool, though! That is very cool. I wish my computer were not so choppy right now because I would love to be able to show just very smoothly how it's going.

<i class="timecode">[01:05:08]</i> But this has been good, and I think there's other things you could maybe do, like you could have… like, I might put the use-rainbow stuff inside of, like, Prefers Reduced Motion, I think would be a good policy. You don't even attempt to consume this unless… 

<i class="timecode">[01:05:25]</i> **Alex:** Yeah. Yeah, I would actually… I would put, like, the changing one in Prefers Reduced Motion, and then I would define a default one that's based on the offset and the attributes, so that way, you can say, "Okay, here's the fallback if you don't want it, and then here's the regular." And that way you can have that. 

<i class="timecode">[01:05:48]</i> You could also have multiple `<style>` tags, so that you could have, like, the moving `<style>` tag and then, like, the non-moving `<style>` tag—

<i class="timecode">[01:05:55]</i> **Ben:** Yeah.

<i class="timecode">[01:05:55]</i> **Alex:** —and sort of work with it that way as well.

<i class="timecode">[01:05:59]</i> **Ben:** Absolutely!

<i class="timecode">[01:06:01]</i> Alright. Well, it is getting late in our hour. We're a little over, so I wanna make sure that you've got a chance to just kind of shout out some of the things that you're doing, what's going on in Alex's world. Y'all, we've had Alex going on — er, we've had Alex on today. Alex, what are you up to? What should I send links to?

<i class="timecode">[01:06:23]</i> **Alex:** Yeah! Just… you can follow me on Twitter. Apparently I'm at 666 followers. Yes! And you can also follow me on Twitter. I'm over at Fimion. I have a podcast. If you're interested about JavaScript and Vue and Vue-adjacent things, you can listen to enjoythevue.io. And if you're in the Atlanta area, when we start meeting again in person, you should come find us at the Atlanta Vue.js Meetup and the PyATL meetup, which I don't have links to because they're on Meetup. If you're in Atlanta or if you're passing through Atlanta and we're having an event, I would love to see you.

<i class="timecode">[01:07:03]</i> **Ben:** Alright! I should have shared this view so much earlier.

<i class="timecode">[01:07:09]</i> <i class="brackets">[Alex laughs]</i>

<i class="timecode">[01:07:11]</i> So much earlier.

<i class="timecode">[01:07:11]</i> **Alex:** This is my blog. 

<i class="timecode">[01:07:14]</i> **Ben:** So good. So good. Alex, thank you so much for being here today. Y'all, thank you for being here and being in the chat and for debugging with us. Super appreciate it. I stream every Tuesday at 2pm Central.

<i class="timecode">[01:07:33]</i> Lindsay does want to know what the font is on your blog.

<i class="timecode">[01:07:37]</i> **Alex:** I choose a different fun every tim. It's, like, Playground or something, I think.

<i class="timecode">[01:07:44]</i> Mhmm.

<i class="timecode">[01:07:46]</i> **Ben:** And I'm still figuring out specifics for next week's stream. We may need to move some things around depending on some work stuff that's going on. But if you need… if you want updates, if you want to keep in touch with what Some Antics is doing, follow Some Antics on Twitter at @SomeAnticsDev.

<i class="timecode">[01:08:06]</i> Y'all, it's been so good being here. Stick around, we are going to find someone to raid! And thank you very much, y'all! Bye!