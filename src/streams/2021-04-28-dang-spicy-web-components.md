---
title: "Let's Make Dang Spicy Web Components with Andy Bell!"
thumbnailTitle: "Let's Make Dang Spicy Web Components!"
timeOfDay: "1:30pm"
upload: https://youtu.be/lRXxuagPwY8
sourceCode: https://github.com/SomeAnticsDev/dang-spicy-web-components
hosts:
  - Ben Myers
  - Andy Bell
---

Join us on Some Antics as Andy Bell shows us how we can use web components and custom elements to reuse markup, styles, and logic — all without the need for frameworks like React or Vue!

[Andy Bell](https://twitter.com/piccalilli_) is a freelance designer, developer and educator who runs [Piccalilli](https://piccalil.li), a site full of dang spicy web development tutorials.

## More From Andy

- [Follow Andy on Twitter](https://twitter.com/piccalilli_)
- [Piccalilli](https://piccalil.li)
- [CUBE CSS](https://cube.fyi/)
- [Every Layout](https://every-layout.dev)

## Mentioned Links

- [Léonie Watson on Web Components and the Accessibility Object Model | 24a11y](https://www.24a11y.com/2019/web-components-and-the-aom/)
- [Léonie Watson's web components talk for JSConf.Asia](https://www.youtube.com/watch?v=ZMZMMuXRFcE)
- [Lit](https://lit.dev/)
- [Stencil](https://stenciljs.com/docs/introduction)
- [Web Components Club](https://webcomponents.club/)
- [Custom Elements Everywhere](https://custom-elements-everywhere.com/)

## Transcript

**Ben:** <i class="timecode">[00:00:00]</i> Howdy, howdy, y'all! Welcome back to Some Antics. For the first time ever, on a Wednesday, which is quite unique! Today I'm joined by Andy Bell. Andy, how's it going? 

**Andy:** <i class="timecode">[00:00:11]</i> Hi! Yeah, good, thanks! You? 

**Ben:** <i class="timecode">[00:00:14]</i> It's good to have you! So, before we kind of dive into what we're doing today, would you like to introduce yourself for anyone here who might not know who you are?

**Andy:** <i class="timecode">[00:00:24]</i> Yeah! So, I'm Andy, and I'm a freelance designer and developer, and I run a little website called Piccalilli where I write stuff about the web and stuff. There you go. And that's about it, really! I'm Northern. And that's probably the characteristics of me. 

**Ben:** <i class="timecode">[00:00:45]</i> I love that, right? You tweet, you do Piccalilli, you're Northern. 

**Andy:** <i class="timecode">[00:00:52]</i> <i class="brackets">[chuckles]</i>

**Ben:** <i class="timecode">[00:00:52]</i> Yeah!

**Andy:** <i class="timecode">[00:00:53]</i> I don't even like piccalilli. I don't even like the food, which is the ultimate… 

**Ben:** <i class="timecode">[00:00:57]</i> So, do you know — Like, it took me so many years to realize that you're doing a bell pepper gag. 

**Andy:** <i class="timecode">[00:01:05]</i> A little bit, yeah. There's a little bit in there. So, the other reason it's called Piccalilli, it's not actually like… You know, people always have, like, some sob story why the business is called what it is. Mine's literally, like, I saw the domain once and I was like, "I like that. I'll buy it." And I just hoarded it for years, this domain, and I always wanted to find something to do with it. And then when it came to… Piccalilli started as a newsletter. When I came to do that, I thought, "Yeah, I'll just use that Piccalilli domain," because it was pretty good. And then I am… To say I leaned into it would be an understatement. Leaned right into it. But, well, the good thing is I know how to spell "piccalilli" now, so there's a nice bonus to these things.

**Ben:** <i class="timecode">[00:01:45]</i> "Piccalilli" is, like the — I'm sure you've heard this many times before — but just it's the most frustrating combination of double letters and single letters you could possibly imagine. 

**Andy:** <i class="timecode">[00:01:55]</i> One step down from "Mississippi."

**Ben:** <i class="timecode">[00:01:57]</i> There we go!

**Andy:** <i class="timecode">[00:01:58]</i> Yeah, it's a tough one. But you know, get there in the end. After about 5,000 times of writing it, you learn how to spell it.

**Ben:** <i class="timecode">[00:02:08]</i> Mmhmm.

**Andy:** <i class="timecode">[00:02:08]</i> It's like "necessary." But yeah, one of them words.  

**Ben:** <i class="timecode">[00:02:13]</i> Mmhmm.

Stephanie says that another attribute of you is that you enjoy utility CSS frameworks. Famously, Andy, a fan of utility CSS. 

**Andy:** <i class="timecode">[00:02:24]</i> Really big, really into them. And heavy-duty JavaScript frameworks are also my cup of tea.

Oh yeah, CUBE CSS! I mean, to be fair, I do use a lot of utilities in this! But maybe not quite so much as some. I won't mention any names, because if you say it out loud, then a lot of guys turn up, so you have to be careful. Say "Tailwind" three times in a mirror, then you know what'll happen. 

**Ben:** <i class="timecode">[00:02:54]</i> But have you considered using Tailwind? 

**Andy:** <i class="timecode">[00:02:57]</i> I have! I actually have. And this is, I think this is something that's quite misunderstood about me, is I don't actually have a problem with it. I've used it for quite a few projects in the past. The thing I don't like, and the thing that always turns me off things, is… Enthusiastic evangelism is a big turn-off for me. That's the way I describe it. And the marketing copy on there is pretty a controversial, to say the least. And so I don't really dig it for that reason, I learned. But yeah, for what it does, it's pretty cool, you know!

**Ben:** <i class="timecode">[00:03:31]</i> For sure!

**Andy:** <i class="timecode">[00:03:32]</i> It's pretty handy.

**Ben:** <i class="timecode">[00:03:35]</i> Alright!

**Andy:** <i class="timecode">[00:03:35]</i> Yeah.

**Ben:** <i class="timecode">[00:03:36]</i> So today, though, we're not really here to discuss CSS. We're discussing web components! 

**Andy:** <i class="timecode">[00:03:42]</i> Yeah!

**Ben:** <i class="timecode">[00:03:42]</i> And this was something where I was excited to bring you on because I know next to nothing about web components. Right? I've heard of them. I feel like I have the general idea of what they are. But I haven't really had the chance to play around with them. So I'm going to learn a lot. I've got so many questions. And perhaps the, like, more obvious first question is: what are web components? 

**Andy:** <i class="timecode">[00:04:05]</i> Oh. So I think a good way of thinking about a web component is it's a spicy iframe. It's a contained block of code. And so everything that's inside it, JavaScript-wise, it starts from within the web component itself, so everything that you do inside of it is almost protected in a sense.

**Ben:** <i class="timecode">[00:04:34]</i> Mmhmm.

**Andy:** <i class="timecode">[00:04:34]</i> So it's a bit like in a Vue component, but you get it for free in the browser essentially. And yeah, they're just really cool, and they're really quick, and I use them a lot to do lots of little things on the web. I wouldn't tend to use them for big stuff, really. But yeah, the sort of thing we'll look at today. 

**Ben:** <i class="timecode">[00:04:58]</i> So what *are* the sort of things that you would use them for? 

**Andy:** <i class="timecode">[00:05:02]</i> So, contained… 'Cause if you go on, like, one of the articles on Piccalilli, I'll show, I'll highlight  in this a little web component. So, those little FYI callouts — that's a web component! And why I do that with web components is because they use custom elements, so that's a custom HTML element. So that means I can just pop them in the Markdown files. 

**Ben:** <i class="timecode">[00:05:30]</i> Ohh.

**Andy:** <i class="timecode">[00:05:30]</i> Some people might use, like, MDX, I think you call it, which is, like, you can put, like, components in Markdown. But my problem with these sorts of things is always "What happens in five years' time when MDX falls out of favor?" I'm going to have this, like, legacy of content that's using this formatted rubbish that I'm going to migrate, and I can't stand migrating content. Whereas web components are just HTML, so that's going to be around forever, so they're good on that front.

**Ben:** <i class="timecode">[00:06:01]</i> Mmhmm.

**Andy:** <i class="timecode">[00:06:02]</i> And then if you keep going down. These little CodePen embeds, they're web components as well.

**Ben:** <i class="timecode">[00:06:05]</i> Oooh, okay!

**Andy:** <i class="timecode">[00:06:08]</i> So, and the reason that I like using these is I edit them properly, and then I can just put them in the articles. But the ultimate thing for me is progressive enhancement. So if the web component — I say "if" — *when* the JavaScript fails, because JavaScript does fail, often, whatever you put inside of the component, wich we'll do today, just displays, and that's it. And they'll know no difference, the people that'll see the site, but— 

**Ben:** <i class="timecode">[00:06:36]</i> Okay.

**Andy:** <i class="timecode">[00:06:37]</i> And then when they do work, you get the full experience. I do that with CodePen. So that CodePen's just a nice, contained, little embed, 'cause it's a web component. So they're just handy for that sort of thing, really. And there you go. So you see it's `<code-pen>`.

**Ben:** <i class="timecode">[00:06:53]</i> Okay. Where's the…?

**Andy:** <i class="timecode">[00:06:54]</i> Go up a few lines.

**Ben:** <i class="timecode">[00:06:58]</i> Ah!

**Andy:** <i class="timecode">[00:06:58]</i> Keep going, keep going. There you go. Yeah. So you've got `<code-pen>`, and then it's an id prop, and then a title. Then I can consume them within the web component itself and use it to render the iframe that's in there. Or the CodePen embed, yeah. So, it's just handy! Handy for this sort of business.

**Ben:** <i class="timecode">[00:07:19]</i> Yeah! Okay, so you mentioned something really quickly that I wanted to kind of dive in. So I hear people talk about web components and then I hear people talk about custom elements. Are those the same thing? 

**Andy:** <i class="timecode">[00:07:35]</i> No. I don't really know the scientific difference. I'm not a very smart person, Ben. But the… Basically a custom element is a HTML element, right, you've invented. And then the web component's the JavaScript aspect of that, where it's like, we've got our component-driven JS business on the go. So they are often mixed up with each other, and I tend to mix them. Because as it stands, the only way to utilize custom elements is in a web component context, you know. There was a proposal to do HTML imports which would use custom elements, but that got snuffed out by Firefox a long time ago, which is something I haven't forgiven them for because I think that would have prevented quite a lot of stuff we see today out in the wild. But yeah, they're just, they work hand in hand with each other, just like most things on the web platform do. 

**Ben:** <i class="timecode">[00:08:32]</i> Mmhmm. Gotcha. So, are there other web components on the page? I could probably… maybe…

**Andy:** <i class="timecode">[00:08:44]</i> Well, the codeblocks, kind of, but they're just, like, little light JS functions rather than… I think it used to be web components once upon a time. But, yeah, there's a couple dotted around here and there on the site. I turn to it — And anytime I add any sort of, like, interactivity that has to have a default experience, then more often than not, I'll reach for a web component to do it.

**Ben:** <i class="timecode">[00:09:12]</i> Interesting. Okay. So, how would I actually get started with web components, then? We've spun up a bit of a codebase that's totally, 100% empty.

Oh! Actually we have a question in the chat real quick. Let's get that one first. This is from codelex, who's asking "Are CSS modules related with web components?"

**Andy:** <i class="timecode">[00:09:34]</i> CSS modules… As in the…? I don't think so. Is CSS modules the JS interface for CSS, innit? No, I think that they're just part of the JS world. But I don't know. I'm not the person to really ask about that. It could be, but not my knowledge. You can put CSS inside of your component, though, but I guess we'll deal with that as well, so.

But yeah, generally to… Let me fire up… We can code together that way. Open the Explorer. Oh, I'm not in Live Share. 

**Ben:** <i class="timecode">[00:10:13]</i> Are you… Let's find out. No, you're not. I can reinvite you. 

**Andy:** <i class="timecode">[00:10:22]</i> Right, okay.

**Ben:** <i class="timecode">[00:10:23]</i> Hang on.

**Andy:** <i class="timecode">[00:10:24]</i> Yeah. Let's stop the collaboration session. I think I was in my own collaboration session on my own.

**Ben:** <i class="timecode">[00:10:31]</i> <i class="brackets">[chuckles]</i> Alright. We'll see. And in the meantime, I'm just gonna spin up some HTML5 boilerplate.

**Andy:** <i class="timecode">[00:10:38]</i> Yeah, yeah.

**Ben:** <i class="timecode">[00:10:39]</i> Any other files we're going to need? 

**Andy:** <i class="timecode">[00:10:41]</i> Yeah, load a JavaScript file in there, and then some CSS as well. Why not, right? Let's see if I can join this one.

**Ben:** <i class="timecode">[00:10:52]</i> See if I can remember this stuff off the top of my head.

**Andy:** <i class="timecode">[00:11:02]</i> Join the Live Share.

Have I joined in on that?

**Ben:** <i class="timecode">[00:11:12]</i> There you go, you're in!

**Andy:** <i class="timecode">[00:11:13]</i> It's a little slow. Oh yeah, cool. Alright, yeah. Sweet. Okay, so what I'll do is while you're doing that, I'm just going to add some stuff myself as well.

**Ben:** <i class="timecode">[00:11:22]</i> Sounds good! 

**Andy:** <i class="timecode">[00:11:25]</i> So what we'll do is we'll recreate that `<fyi-unit>`. Let me add…

**Ben:** <i class="timecode">[00:11:32]</i> Yeah. So we're rebuilding this block right here with web components.

**Andy:** <i class="timecode">[00:11:41]</i> Yeah, essentially, yeah. And I'm going to just pop some HTML in there. "Hello, everyone." And then that's it. That's just the HTML on the go. And then what I'll do is, I'm just gonna pull that `<script>` in as well. It's `script.js`. 

**Ben:** <i class="timecode">[00:12:09]</i> I should probably remove it from the `<head>`, then. That would make sense.

**Andy:** <i class="timecode">[00:12:12]</i> Ah, yeah. Sorry, my bad.

**Ben:** <i class="timecode">[00:12:14]</i> No, you're good!

**Andy:** <i class="timecode">[00:12:16]</i> So I'n not used to auto-closing brackets. Right, so, am I able to see this in a browser as well? 

**Ben:** <i class="timecode">[00:12:29]</i> Yeah. So I've just spun up, if you go to your localhost:3000, it should take you to the live page. And I'm going to put these things side-by-side for us. 

**Andy:** <i class="timecode">[00:12:43]</i> That is magic, innit? 

**Ben:** <i class="timecode">[00:12:45]</i> BrowserSync: so good, 

**Andy:** <i class="timecode">[00:12:48]</i> But yeah, BrowserSync over the Atlantic Ocean.

Right, so that's cool. So, if you're showing the browser on the stream in  the moment, what you can see here is the magic of HTML in action. So HTML and CSS are both declarative languages, and the great thing that they do is, if they don't understand something, they'll either just disregard it and carry on, or, in the case our HTML is doing now, is it'll say, "Right, well, I'm going to carry on drilling through this document outline, and I'm going to find content to put in the tree." So it doesn't know what an `<fyi-unit>` is, because I haven't told it yet. But what it's done is it's said, "Right, I don't know what that is. It's just, it's an element. So I'm just going to assign it the basics of an element to it. And then I'm just going to carry on finding what's in there."

So this is progressive enhancement in action. There's no JS available yet, so it's just going to run into the paragraph as it is. Happy days! And this is, like, the thing I really like about web components, is that you'd just get that progressiveness out of the box for free. And then we can just start building on it.

So I'm just gonna open up this `script.js` file. And then what I'm going to do is I'm going to start fleshing out, like, what goes in a component. So this is the custom element, right? So the `<fyi-unit>`. What we need to do is we need to sort of tell the browser what the `<fyi-unit>` is and what it's based on.

So what we do is — I'm back in the script again — is we say `class FYIUnit extends HTMLElement`. And the `HTMLElement` is an interface that we get with JavaScript that is basically referencing, like, a core HTML element. So every HTML element extends off this base element. And then you add various bits like buttons, you get all the interactive stuff with them. So you could, in theory, you could extend a `ButtonElement` if you wanted.

**Ben:** <i class="timecode">[00:15:12]</i> Oh, okay!

**Andy:** <i class="timecode">[00:15:13]</i> But I like to just extend that `HTMLElement` itself. And then what we get with that is we get access to all the stuff you get with the `HTMLElement`, which we'll get into. What I'll do, because I'll forget to do it, I'm going to export it first. This is just a preference of mine. So let's do that. For some reason I always want to use this as, like, an import, so we'll get that class exported out to them.

And then what we do is you need to define the custom element. So first thing you do is you just do a bit of feature detection first. So you say if `'customElements'` in the `window` object. And if that's true, then we can say `customElements.define()`. And then we define what we added in the HTML, so we say `define('fyi-unit')`. And then after that, we add the `FYIUnit` class, which I've just created, there.

Yeah, I think you have to use it — I don't know if this is still a case. It certainly was the case. Once upon a time, I used to have to use a class interface to do this. I don't think you can just pass a pure function there now. But I do find the classes quite useful in this context.

**Ben:** <i class="timecode">[00:16:34]</i> Gotcha. So what we're doing, if I'm breaking this out is we're defining a class that's, like, this is just going to represent this chunk of markups, styles, and logic.

**Andy:** <i class="timecode">[00:16:43]</i> Yep.

**Ben:** <i class="timecode">[00:16:44]</i> That's what our `FYIUnit` class is. And then we're saying if the browser supports custom elements, then go ahead and define a new kind of custom element, which is this web component class that we built.

**Andy:** <i class="timecode">[00:16:55]</i> You got it. That's it. That's all we've done so far.

**Ben:** <i class="timecode">[00:16:59]</i> Cool.

**Andy:** <i class="timecode">[00:16:59]</i> And then, really, this is going to do nothing still. So if I, like, refresh the browser, it's not working, but it doesn't matter because it's still rendering that content that we added. So that's all good as far as I'm concerned.

So, what you do in a class, you know, is you construct the class. And please don't ask a computer science question because I don't know the answer. All I know is you've got a constructor like that. And then what you do inside your constructor is you can do all sorts in here, so, like, we'll do that for fun for this. You could assign stuff that's, like, stuff that you can access. So what I like to do is say, like, okay, like, `this.state`. I'll add some state in there. And what I'll set in this state is I'll set `title` is 'FYI.' You know, no surprises there. But what you need to do, before you do any of that, is you need to say `super()`!

**Ben:** <i class="timecode">[00:17:59]</i> Mm!

**Andy:** <i class="timecode">[00:18:00]</i> And what that does is… *You're* constructing your class at the moment, so you're telling the element how to construct itself. What you also need to do, because you've extended another class, is you need to tell that to also construct itself. And then you get access to all the stuff that that class provides, which is the stuff that we need in order for this to work in the first place.

So that's all good. So again, if you refresh the browser, still nothing happening, nothing too exciting, and that's good. That's what we want because we haven't finished doing what we need to do. But now, we can actually get something going. So what I'll do is, I'll just make a method in here.

**Ben:** <i class="timecode">[00:18:39]</i> Okay.

**Andy:** <i class="timecode">[00:18:39]</i> And I was going to call it `render()`. And this isn't, like, a lifecycle method we'll get onto in a sec, but this is me just creating a function.

**Ben:** <i class="timecode">[00:18:51]</i> Okay, so we'll later have to specify "call `render()` specifically." It's not like React where it's, like, a magic name. 

**Andy:** <i class="timecode">[00:19:00]</i> Yeah, and that's why I call it that, because it's consistent with, like, other implementations and these sorts of things. But this is something I would like to see in web components, is like a global, like, `render()` method that does a similar job to like these other frameworks, because I think it's very useful.

And just to point it all out, we're going to say `this` a lot in this component as well, and in the context of `this`, it's always going to be FYIUnit is `this` at any point. If we need to dig deeper, then I tend to, say, do something like this. I'd probably say something like `const self = this`. And then it's always protected. It always means `FYIUnit` as well. But we don't need to do that today.

So there you go. So the `render()` is going to do exactly what you think it's going to do. And what I was saying here, is I was going to say `this` — because `this` is the custom element now, the context of the `FYIUnit` class is in the context of this custom element we defined. And I'm going to set `this.innerHTML`, which is just like you do with any vanilla JS in the DOM. Get some backticks in there! And then what I'll do is I've just gonna do a `<div>`, and cause we're working in JS, and we don't do semantics in JS, do we?

**Ben:** <i class="timecode">[00:20:22]</i> Andy, you can't! 

**Andy:** <i class="timecode">[00:20:25]</i> <i class="brackets">[chuckles]</i> Put a little header in here. And then inside the header, what I'm going to do is I'm going to do the little dollar brace, and so then I can put my little variable in there, and then you say `this.title.` And then that's it.

And then what I'll do is I'll leverage one of the lifecycle methods that you get with web components. You've done React, and if you did React in the sort of pre-function-based React days, you used to get these lifecycle methods in there as well. It's like different phases of a component's life, provide, like, hooks that you can grab onto. And you get the same with a web component as well. And when the web component is being connected and it's on the page, this function's called, which is the `connectedCallback()`. And that is essentially like a ready function or a mounted function. Then what I can do there is I'm gonna say `this.render()`. And then hopefully, when the browser refreshes, we get nothing.

**Ben:** <i class="timecode">[00:21:40]</i> An error. Okay. Let's… Wait. Console… No, nothing's happening. No errors, nothing.

**Andy:** <i class="timecode">[00:21:51]</i> Our `<div>`'s there and our `<h2>`'s there. Alright, cool. So, ah, it's because I'm silly. It's because I meant `.state.title`.

**Ben:** <i class="timecode">[00:21:57]</i> Oh, okay! I got ya.

**Andy:** <i class="timecode">[00:22:00]</i> Yay, there we go. So there you go. So now it's got "FYI," but it's deleted all the content, which is not ideal. So how do I get ahold of that content? So, what we can do is, back in my little `render()` method, what I'll do is I'm going to grab the innerHTML first. I'm gonna say `originalContent =  this.innerHTML`. So you got `this.state.title`, and then what I'll do is I'll render underneath the title, I'll say `originalContent` like so. And then when it reloads, there's the content that I passed in.

**Ben:** <i class="timecode">[00:22:45]</i> Excellent.

**Andy:** <i class="timecode">[00:22:45]</i> So if you inspect that… Let me stop and then we'll see. 

**Ben:** <i class="timecode">[00:22:55]</i> Yeah, so I'm inspecting it. I can see that there's an `<fyi-unit>`, and it has my markup — or, it has your markup inside of it. So it has that `<div>`. It has the `<h2>`. So it's populated. 

**Andy:** <i class="timecode">[00:23:04]</i> Perfect. Ship it.

**Ben:** <i class="timecode">[00:23:05]</i> Yeah!

**Andy:** <i class="timecode">[00:23:05]</i> There you go. So that was the basics right there. So you've got that encapsulated code, and you can reach out and grab what was put inside it, and then you can also, you know, add bits there yourself. Now this is, like, this is how I would use a web component like 99% of the time. I'm using them as like an enhancement of, like, existing stuff.

And then what you can, like, also do as well is you can define properties on the page. So if I go into the HTML again, in the `<fyi-unit>`, what I can do is I can say, okay, well, I'm going to pass a property, and I'm going to pass the property of `message`. In the message, I'm going to say "React is cool" in there, like that. And then what I can do then is, back in the JS, is I can do what is called a get function.

**Ben:** <i class="timecode">[00:24:04]</i> Okay.

**Andy:** <i class="timecode">[00:24:04]</i> And that does exactly what it says on the tin. It gets a value. And what it means is you can access it like a normal variable, like that `originalContent` on there. So what you write to do that first, is you write the word `get`. And then I'm gonna say `get message()`, because that was the property that I wanted to get, but that you could call this, you could name that whatever you like. Then you write it like a function. And then what you do here is you need to return something for the get, so I'm gonna say `return`, then I'm gonna say `this.getAttribute()`. Which is just like a normal DOM element, 'cause that's what we're dealing with.

**Ben:** <i class="timecode">[00:24:45]</i> Okay!

**Andy:** <i class="timecode">[00:24:46]</i> Okay, so `this.getAttribute('message')`. But then what I also like to do is, using the OR operator, I'll just set an empty string. And then what we can do is use that here. So I can say `<h2>` and then I'll say `this.message` like that. And that should hopefully work! "React is cool." And then you can even observe that as well. "Web component…" I'm just going to google it myself. I can't remember how you do it. `observedAttributes()`, that's it.

**Ben:** <i class="timecode">[00:25:21]</i> Oh, okay, gotcha.

**Andy:** <i class="timecode">[00:25:24]</i> It's just how I work. And then I don't remember anything. I just know what to google. Alright, okay, and then, so then what I can do is define… So you can set as many properties on here as you like. You know, I could set up a hundred different properties. But one smart thing that web components do is that they don't just watch every property and react to changes like some other options would do, which that can result, unless you specifically handle reactivity — like in React you can use, like, the `useEffect` hook to do that sort of thing — unless you specifically do that, what you can unintentionally do is cause a lot of rerenders with the reactivity of them. So a lot of data's changing. a lot of props are changing, every single time it's completely rerendering itself. So you can end up with some really badly performing frontend without even trying, you know. So this is a cool function, cool thing about web components I find.

So I'll what I'll do in here is define a new property in the JavaScript. And I'll say `static get`. I'm not really sure what `static` means to be honest in this context. But I'm gonna say `observedAttributes()` like that. And then what you're going to say there is you can return <i class="brackets">['message']</i> like that and then, in theory…

**Ben:** <i class="timecode">[00:27:05]</i> Ohh…

**Andy:** <i class="timecode">[00:27:05]</i> …you'd be able to react to that state. Callback… just gonna get the lifecycle methods, Web components… lifecycle events… attribute changed. There we go. So then if I go back into the JS, and then I can… Just like the `connectedCallback()`, there's another one, `attributeChangedCallback()`. And then what this one gives you is, you get a name of the attribute that was changed, so I'll say that…

**Ben:** <i class="timecode">[00:27:43]</i> Okay. 

**Andy:** <i class="timecode">[00:27:44]</i> …and the old value and then the new… we'll do `oldVal` then `newVal`, like that. Now what we'll do is we'll just, we'll do a console log of all of them. Cool. And now fire up in the old console. And we should see nothing happen. Well, first you get that. You get that initial run when the components mounted. And then if you go into the element and then change the content of the `message` property in there, so like "React is not cool." Eleventy is pretty cool, innit?

**Ben:** <i class="timecode">[00:28:30]</i> Eleventy's pretty great. Okay! Wow!

**Andy:** <i class="timecode">[00:28:32]</i> There you go! So you get that reactive state. So then what I can do is I can react to that change, and then I can say — back in the JS again — I can say `this.render()`. 

**Ben:** <i class="timecode">[00:28:43]</i> Oh, okay, yeah! 

**Andy:** <i class="timecode">[00:28:45]</i> Which will then rerender the component. So then…

**Ben:** <i class="timecode">[00:28:49]</i> Hm, two "FYI - React is cools?"

**Andy:** <i class="timecode">[00:28:54]</i> Two of them, yeah. Ah, yeah, because my `render()` method's pretty rubbish. So I can improve this now. So what I can do is I can say, right. Outside of the… I'm going to take this `originalContent` out of the `render()` method. Now what I'll do is add that into the `connectedCallback()` instead.

**Ben:** <i class="timecode">[00:29:13]</i> Okay.

**Andy:** <i class="timecode">[00:29:13]</i> And then I'll add it to my state object. I'll say `this.state.originalContent`. And let's set a default value for that. And then if I change my `render()` method to use `this.state.originalContent`, it should behave itself a little bit better.

**Ben:** <i class="timecode">[00:29:39]</i> Hmm.

**Andy:** <i class="timecode">[00:29:40]</i> I've got two of those rendering at the moment. What is going on? 

**Ben:** <i class="timecode">[00:29:49]</i> It's also not putting any of the, like, actual content in here. 

**Andy:** <i class="timecode">[00:29:58]</i> Hm. Curious. What have I done wrong here? If I sort of cheat a little, bit of debugging. Ah, tell you what. I already know what it is. So what I'll do is I'll say if not `oldVal`, return. And that's what the problem was there. And there we go.

**Ben:** <i class="timecode">[00:30:29]</i> Got it.

**Andy:** <i class="timecode">[00:30:29]</i> The default for `oldVal` will be null. 

**Ben:** <i class="timecode">[00:30:32]</i> It is a bit odd that `attributeChangedCallback()` would be called, like, on, like, the mounting process, when specifically it hasn't changed yet, but okay. Gotcha.

**Andy:** <i class="timecode">[00:30:41]</i> And there's some other lifecycle methods that we could probably run with. I think there's one called, like, `adoptedCallback()` or something like that. Really different methods. There's probably a smarter way to use them. I mean, the other option is that, because `attributeChangeCallback()` is running on mount anyway, you could just not run the `connectedCallback()` methods as well. So there's options. There's definitely the non-clumsy Andy way of doing things, which is how I do things. There's probably some smarter ways of doing things.

But yeah, that sort of gives you the basics, really. You've got some reactivity in there. You've got props. You've got original content coming through.

**Ben:** <i class="timecode">[00:31:27]</i> Okay.

**Andy:** <i class="timecode">[00:31:29]</i> Which is pretty, pretty rad. And then we can sort of extend on that as well. So what I'll do is I'm just going to open into the `style.css`, and I'm just going to add some basics in here first. Tell you what, I'm actually going to put the reset in this HTML file as well. There we go. Oh. Why does it keep deleting it? Oh, there it is. Cool. 

**Ben:** <i class="timecode">[00:32:00]</i> So you're just pulling in some external resets. 

**Andy:** <i class="timecode">[00:32:03]</i> Yeah, that's that — the article's on the Piccalilli site — the modern reset that I put together. It's got some basics on there and it's just gonna allow me to do some stuff. So if I just open this stylesheet again, and I'm going to set `padding` to `2em` across the board. Little trick, tip of the day, if you want to put everything in the middle, say `display: grid` and then, to use auto-placement, `place-items: center`, and that will stick everything in the center of the canvas, the viewport. And then let's do `font-family: 'Comic Sans MS', cursive`. The ultimate… 

**Ben:** <i class="timecode">[00:32:52]</i> Amazing.

**Andy:** <i class="timecode">[00:32:52]</i> Oh, look at that!

**Ben:** <i class="timecode">[00:32:53]</i> I can go install Lobster, if that would help. 

**Andy:** <i class="timecode">[00:32:56]</i> I would prefer that, yeah. I was going to use Lobster, but I thought, "Man, maybe" — I don't know, I definitely have Lobster, of course. But, like, it's not to everyone's tastes, that particular font, but I know Comic Sans is.

**Ben:** <i class="timecode">[00:33:10]</i> Mm, mhmm.

**Andy:** <i class="timecode">[00:33:11]</i> Well, I might just increase font size, make it easier for everyone to see as well. So I'll just do that font size. Why not, right?

**Ben:** <i class="timecode">[00:33:17]</i> Yeah.

**Andy:** <i class="timecode">[00:33:19]</i> Cool. So, that's all pulling in… as you'd expect CSS to do, right? And then maybe, you know, we could add a couple of custom props there as well. So set, like, a primary color. We'll do it American.

**Ben:** <i class="timecode">[00:33:40]</i> I'm touched.

**Andy:** <i class="timecode">[00:33:43]</i> You know, if anything, I'm accommodating. `#ff00ff`. You know, hot pink. And then maybe we say `--color-dark` is `#252525`. And then we can pop them on here as well. So `background: var(--color-primary)`, and then `color`, `--color-dark`. Then if I save that, everyone's brain is going to burn at the same time.

So, now that we all have that "React is cool" ingrained in our retinas for the rest of our lives, we can start to see the impact of the shadow DOM and how that works. So at the start of this stream, I said that web components are spicy iframes, which they sort of are. But the shadow DOM's a habanero iframe, if anything.

I'm just going to remind myself of how to open the shadow DOM. It's like opening a portal to hell. Cool, so, what I'll do is… One thing I do with web components is… Do you know in the constructor, I was setting a bit of state? What I also like to do sometimes is say `this.root` and then what — Oh, we're back in the CSS. `this.root` equals…

**Ben:** <i class="timecode">[00:35:18]</i> There we go.

**Andy:** <i class="timecode">[00:35:18]</i> Ah, let's go in the scripts. There you go. 

**Ben:** <i class="timecode">[00:35:20]</i> Into scripts, got it.

**Andy:** <i class="timecode">[00:35:22]</i> Yeah. So this really calls this, which is exactly the same as what we've already got, right? And then if I go into the `render()` method, and instead of doing `this.innerHTML`, I'll say `this.root.innerHTML` is what it is. And then that will… There'll be no changes to what we've just done. That'll work exactly the same. But what you can do is you can attach a shadow DOM. So if I just go back into line 5 and then I'll do `this.root = this.attachShadow()`, it is, yeah.

**Ben:** <i class="timecode">[00:36:06]</i> Okay.

**Andy:** <i class="timecode">[00:36:07]</i> Ope, double `this`. And then you do mode equals 'open'. I can't remember the difference between the open and closed modes though, to be honest. That doesn't mean much, yeah. And then if I were to go back in the browser now, it should, yeah, look exactly the same too, which is fine. 

**Ben:** <i class="timecode">[00:36:34]</i> But I see, in the Elements tab, I see a `#shadow-root`?

**Andy:** <i class="timecode">[00:36:38]</i> Yes, that's right. So, if I were to go into… If you've got the inspector open, it's doing — yeah. So, shadow root is now the document root of…

So I looked up to see my own face in the screen and that hot pink. 

**Ben:** <i class="timecode">[00:36:53]</i> Yeah, no, that's true. I'm the same way as well. Vibrant. 

**Andy:** <i class="timecode">[00:36:57]</i> In the light, everyone does, yeah. 

**Ben:** <i class="timecode">[00:36:59]</i> We're bringing back, you know, like… The '80s are *so* the '80s. Like, we're in the '90s. Got to do those neon colors. 

**Andy:** <i class="timecode">[00:37:07]</i> Yes. So that's, so you see there as well, there's two interesting things there. So, the first thing, that the shadow root is… So, like in the normal browser context, you've got `document`, right? The shadow root is pretty much the same as `document` in this context, and everything has now changed. And this also means that if you were to, like, define a custom property with that `:root` pseudo-class, that is now referencing the shadow root of your component and not the document or the HTML root. So what that means is that you can privately set custom properties.

**Ben:** <i class="timecode">[00:37:43]</i> Does that let us just generally scope our styles down? Like is that…? 

**Andy:** <i class="timecode">[00:37:48]</i> You could do, yeah. And anything, so any styles that you want inside of this shadow root now are also scoped as well. So, I'm just going to go back into the JS. And then what I'm going to do is… Let's see. I'm going to go into the `render()` method. What I'm going to do, alongside my `<div>`, line 36, I'm going to add a `<style>` block in here, right?

**Ben:** <i class="timecode">[00:38:17]</i> Mhmm.

**Andy:** <i class="timecode">[00:38:17]</i> And then I'm going to say `p` in front of… I'll do `h2`. `h2` is going to be `font-family: 'Times'`. No, actually, let's just do my actual favorite font, Georgia.

**Ben:** <i class="timecode">[00:38:42]</i> Okay.

**Andy:** <i class="timecode">[00:38:42]</i> And then on the inside of the component, you've got "FYI - React is cool." I'm also going back into the HTML file and just after the `<fyi-unit>`, I'll do another `<h2>`. And I will say inside of that, I'll say "11ty is cool too." You'll notice that that is still in Comic Sans. So… 

**Ben:** <i class="timecode">[00:39:09]</i> Yeah!

**Andy:** <i class="timecode">[00:39:10]</i> Inside of the shadow DOM you can style in safety as it were. The flip side to that is that everything that's rendered inside of this root is gonna not access certain elements of the root either. So there's good and bad with this sort of thing, unfortunately.

**Ben:** <i class="timecode">[00:39:35]</i> Okay. So just to make sure I'm building my mental model, I can define things on the, like, overall webpage's root, like custom variables, and my custom elements can consume those. However, at the same time, I can define things in my custom element, in my web component that are scoped specifically to that.

**Andy:** <i class="timecode">[00:39:59]</i> Mhmm.

**Ben:** <i class="timecode">[00:39:59]</i> Wow! Okay, that's really cool. I like that. 

**Andy:** <i class="timecode">[00:40:03]</i> Yeah, so it is pretty cool. And we can also do some more useful things with the shadow DOM. So, like the way I've done the rendering — so I'll go back in the scripts file — the way I've done the rendering here is more akin to not using the shadow DOM. What I can do in here instead is I can use what's called a `<slot>` element instead. Now I'm just going to get rid of that. And then, when we rerender again, we get that slotted content, that "Hello, everyone."

And then if you go into the element inspector in the browser, what we've got here is you see you've got the `<slot>`, and then it's got the little… Ah, Zoom's trying to… There you go. Essentially, what it's done is create a symlink. So the content isn't inside of the component. The content is essentially referenced. It's like a pointer, like with JavaScript when you create a variable, you create a pointer to the value. That's essentially what we do with the shadow DOM. So it passed that HTML with what is called light DOM. And that still has access to the CSS outside of the component. But hopefully now, if I go back into the web component and remove that `h2` style, hopefully the `<h2>`… Oh, no, it's still accessing the styles from outside. So back in there as well. So, the beauty of slotted content is that it can access all of the things from outside and still get outside influence as well.

**Ben:** <i class="timecode">[00:42:04]</i> Okay.

**Andy:** <i class="timecode">[00:42:04]</i> So if you componentize it, you can place it wherever you want in your component, but then you get the benefit of being able to control it from the outside the component still as well. And then when JS messes up or something, we get reverted back to that initial state where it's just the… it's essentially an HTML element. I guess that's all the basics covered, really! 

**Ben:** <i class="timecode">[00:42:31]</i> Alright. Yeah, so we've had a few people kind of ask in the chat. Can you just, like, broadly define the shadow DOM for us? Like\, we kind of played with that a bit. Like, what really is it, though, and what is it for perhaps? 

**Andy:** <i class="timecode">[00:42:47]</i> So… I'll be honest, I'm not a fan of the shadow DOM at all. I think it's got some benefits. It's got that protective… The shadow DOM's a sort of response to people wanting, like, strict componentization and no outside influence coming into the component, which is cool. But what I don't like is that not all CSS can be pulled in. You find yourself defining things twice, three times a lot. And the way I do CSS is, like, CUBE CSS stuff, and that uses, like, a lot of references to tokens and stuff, so I don't want to be pulling in the same CSS file every time I pull a component. This is why, like, at the start I said I don't really use the shadow DOM, because I don't really find it very useful for the context that I work in. But essentially what you get with the shadow DOM is, like, a fresh new context. So you've got the outer HTML which is doing everything, but then the shadow DOM itself is a contained version of the root itself, if that makes sense.

**Ben:** <i class="timecode">[00:44:02]</i> Okay.

**Andy:** <i class="timecode">[00:44:03]</i> Like a protective wall, essentially. 

**Ben:** <i class="timecode">[00:44:08]</i> Yeah. Joe is asking whether you know of any semantic or accessibility gotchas to be aware of. My intuition is, like, at the end of the day, it's still using markup, right, and that, like, we still have access to that so the accessibility tree wouldn't — at least my instinct is that the accessibility tree wouldn't be impacted, but I could be totally wrong there.

**Andy:** <i class="timecode">[00:44:30]</i> Yeah, pretty much, as you said. So, like, when you've got like that context, you got the light DOM, that content is still as accessible as it was. You know, you've got landmarks in there. Léonie Watson did a really good talk on web components a few years ago. We both did a conference together in Moscow and she was one of the speakers there, and it was really interesting, all about this and how the web components work with assistive technology and stuff. There you go, "Web Components and the AOM" there. Really good. As always with Léonie, just a ridiculous amount of detail, and friendly. But that's the video by the looks of things.

**Ben:** <i class="timecode">[00:45:18]</i> Yeah.

**Andy:** <i class="timecode">[00:45:20]</i> Yeah, it's a fascinating talk. Yeah. 

**Ben:** <i class="timecode">[00:45:24]</i> I will have to check these out for sure. Léonie does some great work.

**Andy:** <i class="timecode">[00:45:29]</i> Léonie talks and she's got JAWS talking to her ear at the same time as well. So, can you imagine trying to do a talk and you've got your speaker notes being spoken at while your trying to talk.

**Ben:** <i class="timecode">[00:45:40]</i> Oh, man.

**Andy:** <i class="timecode">[00:45:40]</i> I don't know how she does it. It's just impossible. I don't know how to read the speaker notes while I'm on stage, never mind someone talking to me, but yeah.

So that's about it, really. The thing with web components is, like, they're simple and in the core sort of, you know, are you using them in native JS, like vanilla JS? Like, this is as simple as it gets. There's loads of, like, layers above this, and I think this is the way that web components probably should be used in production, is a layer above. So you get stuff like lit-html. Another one's called Stencil. There's all these little things that will create a web component for you as the end product. So the end product is what you've got there, you've got that web component. What they give you, they make things so much easier for altering them.

**Ben:** <i class="timecode">[00:46:30]</i> lit-html is Lit.dev, I think, now. 

**Andy:** <i class="timecode">[00:46:33]</i> Oh, yeah. Yeah, they've made it, like, a real thing which is, like, part of Google now, isn't it? Yeah.

**Ben:** <i class="timecode">[00:46:41]</i> "Stencil web components." Sorry, just getting… 

**Andy:** <i class="timecode">[00:46:44]</i> Yeah, Stencil.js, yeah. That's it. So these all give you… So if you do, like, try and find a code sample of one of them, they give you… 

**Ben:** <i class="timecode">[00:46:53]</i> "My First Component." There we go. 

**Andy:** <i class="timecode">[00:46:58]</i> There we go, yeah. So you got all these sort of cool things. So you got here, like, `Component` and `Prop` and then the `h` in the first, which I imagine, yeah, it gives you some JSX capability or some HTML capability, some stuff, which is great. And I think this is how things should be done, because what you end up with, like, you look at it and you probably think, "Oh, wow, this is going to be so much client-side JS," but a lot of these tools are like preprocessors, essentially. They're like Sass to CSS. 

**Ben:** <i class="timecode">[00:47:30]</i> Mm.

**Andy:** <i class="timecode">[00:47:30]</i> Like, you get that bit of extra seasoning, but it doesn't end in the final product. The final product is just good old CSS. And it's the same with these, is that you just get good old JS at the end of it. And they're cool. A bit like Svelte, as well. That's kind of what Svelte is, isn't it? So, yeah, this is, I think… The way I do components, like that vanilla JS, is fine for me on my own on Piccalilli's super safe context. But in a more reactive project, I'd definitely be reaching for this sort of thing. Or as close to a web component as you get is Vue, as well. Like, Vue is really very close to a web component, so, yeah. But in terms of, like, a simple progressive enhancement, they're fantastic, and they're very cool. 

**Ben:** <i class="timecode">[00:48:22]</i> Excellent. Yeah, Anthony's asking — just kind of 'cause you've mentioned quite a few of these kinds of, like, frameworks and tools around web components — he's asking, like, as people trying to get into web proponents, he would be curious your take on these specific libraries and frameworks and which ones we should be looking at in particular. Like, are there any that you have your eye on? 

**Andy:** <i class="timecode">[00:48:46]</i> Oh, I think I'd always reach for lit-html. Or Lit, as it's called, like you said, isn't it, now? 

I got into web components. I made a site — I don't even know if it's still live. I'll have to check. It's, like, webcomponents.club. I don't know if I actually… But when I started learning them… It might be one word, yeah. Oh, there you go, yeah. 2018. I watched this talk by Monica down there at Google I/O. Absolutely blown away by it, like, just the stuff that they were doing. And they were using Lit back then. Like, that's the Lit library. And so I thought, "Right, I'm going to really learn how to build web components and then that'll work." And so I started writing this little blog about it. So every time I learned something new, I'd write a bit of a post. There's, like, ten posts on here. So if you really want to get into them, it might be useful to start on this little blog and run through it, because that's essentially the same learning process that I had.

And yeah, I guess Lit's now evolved from this, three years ago, to what it is now, like a fully fledged tool. So I'd definitely put a lot of trust in that one. I think it's got a lot of work and a lot of smart people down there as well. 

**Ben:** <i class="timecode">[00:50:17]</i> Gotcha. So, my experience, like, with reactivity is specifically with React, right? So I'm trying to find, like, where kind of the boundaries are between these for me. Where, like, web components make a lot of sense for projects like a blog, because blogs are not likely to be highly dynamic, right? But it seems like, from what I can tell, something like this might be painful if you had a very dynamic, like, full application. You wouldn't be likely doing this with web components. You'd likely be using a framework like React. 

**Andy:** <i class="timecode">[00:50:55]</i> Yeah, yeah. Absolutely. There's definitely, like, there's a line to be drawn. One thing to remember is that a web component is just a component, right? So if you're going to be writing, like, complicated application logic, you're going to have to have a layer above it, even if that's just vanilla JS at the top. But there's going to have to be a layer on top. 

Now, the one thing I see — now, I do a lot of design system stuff — is that, regardless even if there's a JavaScript framework being used, that web components are used to render the actual components themselves. So I see this in a Vue context quite a lot.

**Ben:** <i class="timecode">[00:51:42]</i> Okay.

**Andy:** <i class="timecode">[00:51:43]</i> It doesn't really work in React because React reinvented events for some unknown reason. But web components being sort of the small piece of the puzzle, then the framework doing all the stuff that frameworks are good for, which is, like, hardcore logic and passing data around and state management and all these things. But what you get at the end is just a little component that gets rendered. So you've got, like, the observable props and stuff like that. So you render the component like that, and then you can react to those prop changes. 

**Ben:** <i class="timecode">[00:52:21]</i> Mhmm.

**Andy:** <i class="timecode">[00:52:21]</i> Oh yeah, custom-elements-everywhere.com, yeah. So React is still 70%, which is… if you consider the amount of resources that get pumped into React, pretty poor, innit? Especially you've got, I've never even heard of Riot.js, but there it is, rocking 100% support in there. What's the percentage of Vue, just out of interest? 

**Ben:** <i class="timecode">[00:52:44]</i> Sure. 100. 

**Andy:** <i class="timecode">[00:52:44]</i> 100%. Yeah. So, you know, Svelte, again. So you've got those options. I think if you're going to want to use web components as a sort of end, then Svelte or Vue.

So, like, well, a tip I can give just for any sort of, like, JS-driven development is, like, try and treat your components as just components that do nothing but render results. So a component is almost, like, just a function that returns something back, and the something that it returns back is a bit of HTML. If you write your components like that and really lean into, like, props being passed into them, you can put that component wherever you want and, and integrate it into whatever you want as well. So if you're doing a design system and you use web components as the end point, you could plug that same web component in Vue projects, Svelte projects, vanilla JS projects, wherever, and they'll work the same way as they did everywhere else. And you've got the scoped styles, and there's also, you could even put, like, scoped styles in there if you wanted. Shadow DOM. Happy days. And that tends to be how I would use them in production in that sort of project.

If I was to take a client project on tomorrow and the requirement was lots of reactivity, realistically, I'd probably pick React, because I know I can write all that out, no problem. But if I really wanted to lean into, like, say it's part of a design system, straight away I'd be like, "Right, I need web components," so I'd use Vue or something like that as my application layer. 

**Ben:** <i class="timecode">[00:54:27]</i> Gotcha. So web components let us have reusable elements. You know, the reusable markup. The reusable and also scoped but also influenceable CSS. And we didn't really explore any, like, dynamic logic beyond just kind of hopping in the inspector and changing the attributes, but there was logic there for, like, reactivity. Stuff like that.

**Andy:** <i class="timecode">[00:54:51]</i> Of course, yeah.

**Ben:** <i class="timecode">[00:54:52]</i> Bundle it all up in a component much the same way, like, I as a React developer would expect, but just in a more progressively enhanced way that doesn't require us to ship a whole library for rerendering components and stuff like that. And we have to explicitly opt in to reactivity. 

**Andy:** <i class="timecode">[00:55:12]</i> Yeah.

**Ben:** <i class="timecode">[00:55:13]</i> That's really cool.

**Andy:** <i class="timecode">[00:55:16]</i> Yeah. There's a lot of work to be done on web components. Like, they're not perfect by any stretch. But sort of, always bet on the platform, is some sage advice that I can give anyone really. Like, I've been around the block for a while now in the web. And, like, this goes back to when I said I chose to use a web component inside of Markdown rather than MDX, because the second I saw MDX, I thought, "Oh, that's got a shelf life on it, it has" And it's not a portable context.

So I recently, this year, I replatformed the old Piccalilli site from Eleventy to Next.js. And all of the web components for Piccalilli, I just copied and pasted into the new project and it worked straightaway away. So I don't render any client-side JS on this project. I use Next as a sort of backend almost. But, yeah, that's the beauty of web components. If I'd've done the other way around, I'd've had to rewrite loads of different stuff. And if I had MDX in my Markdown files, I'd've had to then go through and change all of the content. And it saved weeks of time, 'cause there's a lot of content in here. And yeah, just all worked, you know. Put my Markdown files in. Job done.

**Ben:** <i class="timecode">[00:56:43]</i> You're talking about this. This is exactly the journey I made when I migrated my blog. Because I took your Eleventy course, and then I'm like, "You know what? Like, my blog is on Gatsby. It will no longer be on Gatsby." But I had bought in to both, like, Gatsby, MDX stuff. And then I just realized, like, my blog isn't going to be on React forever, and if I ever want to migrate away, like, now's the time to do it while it's still small and scoped down and not that many posts, because otherwise I'm never going to be able to leave React. Whereas, yeah, focusing on, like, Eleventy and the Markdown — or, like, the markup as well, right? — like, focusing on that has given me a lot more confidence in case I ever need to make the same migration you've just made. 

**Andy:** <i class="timecode">[00:57:31]</i> You definitely did the right thing. I've seen the limits of, like, Gatsby in the real world. A couple of years ago, I did a client project, as I got hired in when an agency brought me in to help them with this project, and their client was insistent on using Gatsby. And this site had five and a half thousand pages or something like that, and it took 45 minutes to build, you know. 45 minutes! And like, there was discussions in the project and it was like, "Look, it's not too late to, like, use Eleventy or something like that." But then they went no, because they essentially had a team of React developers, so they wanted to use a tool that they all want and they can build quickly. You know, I can appreciate that. So the solution was their ops people had to then write a middleware to do the Gatsby build for them that would, like, cut down the time — which I think Gatsby have now done themselves with their Cloud service — essentially built what they've done with, like, partial rebuilds and all that sort of business that you think, "Come on. Where are we?" You know, "What is going on with the JS world?"

Like, you know, these products are built. You can put them into real context and they're creaky as hell.

**Ben:** <i class="timecode">[00:58:50]</i> Yeah.

**Andy:** <i class="timecode">[00:58:50]</i> We say that, and this Next site is slow. You know, it takes, like, 8 minutes for the whole site to build now. Whereas I think in the Eleventy site, before I moved, it took 8 seconds to build the entire site from scratch, you know? And it was huge at the time as well. Can't beat it. Zach's a good lad for doing that. 

**Ben:** <i class="timecode">[00:59:13]</i> I've got one more question from the chat, which is, "In today's example, we defined our component in a script.js file. Do you typically write these as 'one component, one file'  (imported as an ESM module)?" I'm guessing that's as opposed to, like, defining multiple web components in a single file.

**Andy:** <i class="timecode">[00:59:32]</i> Exactly. If you inspect on this Piccalilli page, I'll show you.

**Ben:** <i class="timecode">[00:59:36]</i> Yeah!

**Andy:** <i class="timecode">[00:59:36]</i> I don't even bother bundling them either. I pull them in as just little files. So if you go down to the bottom of the page… 

**Ben:** <i class="timecode">[00:59:43]</i> Bottom of the…

**Andy:** <i class="timecode">[00:59:44]</i> You see there, yeah, you can see all the components being pulled in. So you've got the `<fyi-unit>`, the `<code-pen>`, the `<code-block>`, you know, `<ad-loader>`. All these little mini components, and they all just get pulled in as modules. Job done. And that's how I tend to tend to roll with things. Oh, I need to take of that service worker 'cause I'm not using it anymore. But yeah, so that's essentially what I tend to do now. I might bundle things up in some contexts, but for this context, like, these things are tiny, these little components. 

**Ben:** <i class="timecode">[01:00:21]</i> I was thinking that. Like, if I take a look at this, and I am just going to straight up dive into your code here, right, like, I can't imagine that this is going to be a massive file that we're going to… Look at that. Shows up on one screen. 

**Andy:** <i class="timecode">[01:00:37]</i> Oh, look at that. You see that comment there. You can see exactly where, in the `connectedCallback()`, I've got a 10-millisecond timeout and this "React is bollocks" comment, because there's some business going on where there were some render delays, where I had to sort of just, even though I defer it — so if you add the `defer` attribute to a script, then it's essentially like back in the old jQuery days, it's like the document.ready equivalent, it waits 'til all the markup's done and then it will run that — but even there's some unknown stuff that was going on in the React world that resulted in me doing that bodge. There's probably a reason for that that could actually account for, but at the time I just couldn't be bothered, really.

And then yeah, there you go. And then essentially what I'm doing in this component is I'm looking outside of the component for a property in the window, and I'm setting `CODEPEN_LOADED` as a flag in there. And then if it's not loaded, I'm pulling their embed code, their embed JS, and then loading it up and then rendering the embed, and then everyone's a winner.

**Ben:** <i class="timecode">[01:01:52]</i> That's super cool. What a great use. I might have to poke around these web components a bit more that you've got. Andy, we are out of time. I have to get back to work. But Andy, thank you so much for coming on.

**Andy:** <i class="timecode">[01:02:09]</i> No worries!

**Ben:** <i class="timecode">[01:02:10]</i> Yeah, this has been great. I've learned so much. I'm gonna definitely be playing around with this more. We've got some love for this in the chat as well.

**Andy:** <i class="timecode">[01:02:18]</i> Cool.

**Ben:** <i class="timecode">[01:02:19]</i> And chat, come back next week. We'll be back to our Tuesday, 12pm Central schedule next week. I think I'm going to play around with doing interactive Twitch chat games using web technologies, so I think that sounds like a lot of fun.And stick around today because we are going to go raid friend of the show Stephanie Eckles, who's doing a live podcast stream.

**Andy:** <i class="timecode">[01:02:39]</i> Cool. Nice to have Steph.

**Ben:** <i class="timecode">[01:02:40]</i> Yeah. So thank you all for joining. Have a wonderful rest of your Wednesday, and I will see you next week. Bye.

**Andy:** <i class="timecode">[01:02:48]</i> Toodles!