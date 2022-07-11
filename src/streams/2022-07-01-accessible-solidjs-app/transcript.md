<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Friday! Welcome to Some Antics! I'm Ben, and Some Antics is a weekly show about building great user experiences for the web, with a focus on accessibility and/or core web technologies. Today, I'm joined by Dan Jutan. Dan, hello! Welcome to the stream!

<i class="timecode">[00:00:18]</i> **Dan:** Hey, hey! I'm glad to be here. 

<i class="timecode">[00:00:20]</i> **Ben:** Glad to have you on. So, you know, folks might not have seen you around. They might not have had the chance to meet you yet, which is a shame. But for folks who haven't, would you like to introduce yourself? 

<i class="timecode">[00:00:31]</i> **Dan:** Yeah, my name's Dan. I usually introduce myself as, like, one of three things. Either I'm a frontend developer, a technical writer, or a product manager. <i class="brackets">[chuckles]</i> So when you say, like, building UX, you know, building good user experiences for the web, that's pretty much what I care about and I like to do it from those different angles. So I'm talking about Solid because I'm on the Solid core team. And I focus on documentation, where I get to really flex those technical… technical writing… you know, that sort of side of me.

<i class="timecode">[00:01:08]</i> **Ben:** Absolutely! And so I know you wear many hats, but you've mentioned today we're doing Solid. I always like to start with, you know, kind of the big question. Actually, first of all, I'm gonna start with the real big question, which comes to us from Anthony in the chat, which is, "Do people ever call you 'Dan the Man?'"

<i class="timecode">[00:01:25]</i> **Dan:** Yeah, my entire life. I mean, the beauty of my last name is that it took about five seconds in middle school for people to figure out that it can rhyme with my first name, so I got all sorts of chants. It was actually really good for my middle school popularity. 

<i class="timecode">[00:01:40]</i> **Ben:** incredible.

Okay! So the real, real big question I had — and I always like to start with, like, the vague question to kind of get the conversation rolling and kind of set the stage. What IS SolidJS? 

<i class="timecode">[00:01:55]</i> **Dan:** Yeah. Depending on who asks the question, I give a different answer. I think if you're sort of, like, technically-minded, I'll be like, "SolidJS is a library and a Babel plugin," but that's not very exciting to a lot of people. What it really is is it is a library that helps you build interactive web apps. So if you've used React or Svelte or Vue, this sort of does the same idea, which is you import it in your JavaScript app and you sort of run your app through it. It gives you these tools that you need to make components, make things interactive, update state, talk to the server. So it gives you everything you need to build a web app. And it's sort of a special kind of these frameworks, because the way it does things is a little bit different, and hopefully we'll get to see that!

<i class="timecode">[00:02:55]</i> **Ben:** Yeah, so can you — we'll see kind of the things that make it different — but can you kind of talk about, like, what makes it different from…? Or when might you use SolidJS versus when might you use other tools? Like, what might be some of those tradeoffs? 

<i class="timecode">[00:03:12]</i> **Dan:** Yeah. So, this gets to one of our biggest benefits, which is sort of two sides of the same coin: performance and bundle size. Solid is incredibly performant, and what that usually means is you're talking about how long it takes to update things, what happens when there's, like, a ton of interactivity on the page, will there be any lag, that kind of thing. And then bundle size is, like, when you ship your app, how much of your app is Solid and how much of your app is the other stuff you write. So when we talk about tradeoffs from a engineering perspective, those two things, Solid sort of wins out against the other frameworks.

But in terms of what I really care about personally is the sort of conceptual model that you use when working with Solid. And this is where Solid becomes unique, because unlike the other frameworks, Solid doesn't really have components as, like, a living, breathing thing. You write your app using these function components, very similar to how you write a React component, but after you finish writing and it runs in the browser, those components sort of fade away, and the only thing that matters is the data and the elements that use the data. And so, things that you have to do in React, like remember that your function is going to rerun over and over again—

<i class="timecode">[00:04:36]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:04:36]</i> **Dan:** —this whole idea that I imagine everyone here has heard, but if you haven't, I'm happy to elaborate on it. The idea of the virtual DOM is incredibly prevalent as you're learning, you know, frontend. There is no virtual DOM here, and that is something that sort of makes Solid rather unique. 

<i class="timecode">[00:04:54]</i> **Ben:** Interesting! Okay, cool! Yeah, I think, like… where I've sometimes seen—

So, Solid was, from what I understand, at first created by Ryan Carniato, and when I've seen him kind of talk about this, like, with folks who haven't really played around with Solid on Twitter, like, a lot of them… it sometimes comes down to comparing things to like the use of React.memo, like "Where is the memoization?" and stuff like that, right? Like, 'cause React introduces a lot of things that try to shield itself from footguns — developers, like, establishing footguns. But then Solid takes a different approach where, like, those footguns don't even really exist in the first place, it seems like.

<i class="timecode">[00:05:41]</i> **Dan:** Yeah! In React, you sort of use memos to say like, "Wait, you don't have to diff this. You don't have to check this, you know, every time." But in Solid, it does that by default because it uses the system — and this is a benefit I haven't mentioned yet, but it's called reactivity. And the idea behind reactivity is you tie a piece of data to something that needs that data.

<i class="timecode">[00:06:07]</i> **Ben:** Okay.

<i class="timecode">[00:06:07]</i> **Dan:** And if the data never changes, the thing that uses the data will never reupdate. It will never rerun. And when you change the piece of data, everything that uses that piece of data will rerun. It's sort of very different than React, where any time you change state in your component, the entire component just reruns, no matter what.

<i class="timecode">[00:06:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:06:29]</i> **Dan:** Even if nothing actually uses that state, the entire React component will rerun, and that's why you have to use memos. Memos sort of, like, opt out of that for that computation.

So, yeah. On Twitter, there's a lot of these comparisons where it's like, "Look at this really complicated React component and how easy it would be if you did it in Solid," and to me, that comes down to this model of reactivity. And I like to say this is a "better conceptual model," which is a pretentious way of saying it's easy to remember how it works. Sure. 

<i class="timecode">[00:07:02]</i> **Ben:** Alright! So at this point, we've kind of talked about the philosophy behind Solid. I'd love to get to, like, actually playing with it. So I'm gonna start sharing my screen.

Eka wants to know, "It's kinda like Svelte then?" 

<i class="timecode">[00:07:18]</i> **Dan:** So, it has some things that are like Svelte and some things that aren't. So in Svelte, all of the reactivity gets compiled down. So what that means is that, like, your component after compilation looks a lot different than when you wrote it, so the compiler does, like, a ton of work for you. In Solid, the reactivity is shipped in a library. So we're gonna see in this example —actually, if you go right now to the playground, I can just use that as part of an example.

<i class="timecode">[00:07:50]</i> **Ben:** Yeah!

<i class="timecode">[00:07:50]</i> **Dan:** We have this thing called "createSignal." This thing is not compiled down. createSignal is shipped with Solid to the end user.

And so there are similarities. Svelte also doesn't have a virtual DOM. It just manipulates the DOM directly. Solid, you know, manipulates the DOM directly. Those things are similar. But they're quite different in many other ways. So, I mentioned the idea of a component. Svelte uses a component-based model. So in Svelte, if you look at the compiled output, it'll, like, have… you know, your component will, will have an "update" and a "create" method. I probably shouldn't go this deep into Svelte, but let's just say yes, Svelte and Solid are similar in some ways, but very different in others. Uh, sorry. 

<i class="timecode">[00:08:41]</i> **Ben:** No, you're good! And I'm, in the meantime, putting a link to a previous stream I've done on Svelte with our own Brittney Postma, who is in the chat today. 

<i class="timecode">[00:08:49]</i> **Dan:** Oh! I'm so glad you're here, Brittney! 

<i class="timecode">[00:08:53]</i> **Ben:** Yeah, so looking at this, like… this looks a lot like a React component to me. Like, I know it's not.

<i class="timecode">[00:08:58]</i> **Dan:** Yeah.

<i class="timecode">[00:08:58]</i> **Ben:** I know it's not, but like… this seems fairly comparable. It seems like you've got some JSX goodness here. And then you mentioned, like, you called out the createSignal, and this really seems to be, like, the Solid equivalent of, like, useState in React. 

<i class="timecode">[00:09:15]</i> **Dan:** Yeah! One of the differences you might — maybe the only difference right now on the screen is that "count," when we use it inside the button, is actually a function.

<i class="timecode">[00:09:26]</i> **Ben:** Yeah! Yeah, what gives? 

<i class="timecode">[00:09:29]</i> **Dan:** So, the reason why it's a function is so that it can, when you use it, it can tell the Solid reactivity system to register a new observer, a new dependency, whatever you wanna call it.

<i class="timecode">[00:09:44]</i> **Ben:** Mm!

<i class="timecode">[00:09:45]</i> **Dan:** So it's kind of like in React, the system is constantly rerunning and rerunning and, like, making sure everything is coordinated. In Solid, we run this Counter component once and we set up all the things that need to be set up. So when we call `count` with this function, Solid goes, "Oh, we better update this button text whenever the count changes."

<i class="timecode">[00:10:08]</i> **Ben:** Got it.

<i class="timecode">[00:10:08]</i> **Dan:** It sort of sets up a relationship. 

<i class="timecode">[00:10:10]</i> **Ben:** "Oh, here's a place that needs the count." Yeah, okay. That makes sense. And I imagine that that actually kind of helps with… oh, okay. Actually. Here. I wanna immediately try to break this, if that's alright.

<i class="timecode">[00:10:27]</i> **Dan:** Let's break it! Let's do it!

<i class="timecode">[00:10:28]</i> **Ben:** What if I do "const message =," and then I put "count." "Coint," apparently. "count" in here.

<i class="timecode">[00:10:37]</i> **Dan:** Uh-huh.

<i class="timecode">[00:10:38]</i> **Ben:** And then… you know, "clicks." Like that, right?

<i class="timecode">[00:10:42]</i> **Dan:** Yeah.

<i class="timecode">[00:10:42]</i> **Ben:** And then I put `message` down here. 

<i class="timecode">[00:10:47]</i> **Dan:** Do you wanna predict what will happen? 

<i class="timecode">[00:10:49]</i> **Ben:** Okay. So… the thing is, I feel like Solid is going to be smart enough to update "message." The message would update. But I don't know that that means that the button itself is going to update. That's my theory.

<i class="timecode">[00:11:04]</i> **Dan:** So, what ac— Okay, so let's run it. Let's see what actually happens. 

<i class="timecode">[00:11:07]</i> **Ben:** Nothing happens. Or at least in terms of the user experience, this button seems broken. 

<i class="timecode">[00:11:12]</i> **Dan:** Yeah. Actually, maybe the first thing I'll do is suggest the way to fix it and then I'll explain why. 

<i class="timecode">[00:11:17]</i> **Ben:** Okay!

<i class="timecode">[00:11:18]</i> **Dan:** So, instead of making "message" a variable, make it a function. A function that takes no arguments.

<i class="timecode">[00:11:25]</i> **Ben:** Okay.

<i class="timecode">[00:11:25]</i> **Dan:** So it'd be, like, "const message =," you know, brackets… function, brackets goes to that. Yeah. 

<i class="timecode">[00:11:33]</i> **Ben:** Okay?

<i class="timecode">[00:11:34]</i> **Dan:** Now try. 

<i class="timecode">[00:11:36]</i> **Ben:** Wait, do I need to invoke it here? 

<i class="timecode">[00:11:38]</i> **Dan:** You don't, but…

<i class="timecode">[00:11:40]</i> **Ben:** Wait.

<i class="timecode">[00:11:40]</i> **Dan:** Try it without, actually.

<i class="timecode">[00:11:41]</i> **Ben:** Okay.

Dan, this is sorcery! I'd like to end the stream here(!)

<i class="timecode">[00:11:48]</i> **Dan:** And actually, invoke it in the template, though, because that's the proper way to do it.

<i class="timecode">[00:11:54]</i> **Ben:** Okay.

<i class="timecode">[00:11:54]</i> **Dan:** I was just gonna show you that Solid sort of predicts some things for you. But invoking it in the template is definitely the correct way of doing it.

<i class="timecode">[00:12:01]</i> **Ben:** Got it, okay.

<i class="timecode">[00:12:02]</i> **Dan:** So… yeah. What you instinctually wanted to do with "message" was you were like, "Ooh, I wanna create derived state. I wanna create state that uses some state but, like, does something else to it." And in Solid, if you want something to be able to rerun, it has to be a function. 

<i class="timecode">[00:12:24]</i> **Ben:** Okay! Interesting. Interesting. So that… alright, alright. That seems like a good primitive. Thinking behind the scenes, it's probably… I would guess it's invoking the function and then it's noticing that the function invokes our "count" signal, and then it's going, "Okay, this function's pretty important because it needs 'count.' Like, if 'count' changes, this function needs to also be recalled," I guess?

<i class="timecode">[00:12:55]</i> **Dan:** Yeah, it runs — you know, behind the scenes, it converts your little curly brace into something called an effect. Effects are very similar to what React has, but in Solid, effects automatically track dependencies. So what that means is that the effect will run your code, and if your code anywhere inside of it — even in this case when it's a level deep, it could be ten levels deep — if it invokes a signal, that signal is registered as a dependency to the effect and will rerun the entire effect.

<i class="timecode">[00:13:29]</i> **Ben:** Interesting.

<i class="timecode">[00:13:30]</i> **Dan:** So, we haven't really done an effect here, but if you import createEffect… you can now — maybe after `message`, like on line 9 — do "createEffect()." And then, createEffect takes a function, so just pass in an anonymous function and say "console.log(message)." And you'll have to, like, invoke message(), yeah.

<i class="timecode">[00:14:01]</i> **Ben:** Yeah. Down here…

<i class="timecode">[00:14:05]</i> **Dan:** So, the reason I made you do this is because the effect—

Oh, I think we're hearing some echo. Let me know if we're okay. 

<i class="timecode">[00:14:14]</i> **Ben:** I'm fine, I think…

<i class="timecode">[00:14:16]</i> **Dan:** Okay, cool. Chat, if you ever sort of, like, hear me twice, let me know.

Yeah, so the reason why I wanted you to do this is to make a point that the effect happening on line 9 through 11 is also happening behind the scenes on line 14 to 16.

<i class="timecode">[00:14:34]</i> **Ben:** Okay.

<i class="timecode">[00:14:35]</i> **Dan:** So, what happens with the effect on line 9 is Solid runs the effect. As soon as it hits that message(), behind the scenes, the message()… sorry. It hits message(). It runs the code inside message(). It hits count(). "Ah." The count getter gets run, and that registers a dependency to the effect. 

<i class="timecode">[00:14:59]</i> **Ben:** Gotcha. Very neat! Okay. Okay. 

<i class="timecode">[00:15:05]</i> **Dan:** Yeah. If you are really curious as to what Solid sort of does to compile your JSX into these things, you can hit the "Output" tag in the playground on the top right. 

<i class="timecode">[00:15:23]</i> **Ben:** Gotcha, gotcha. Okay, so yeah, this is all the compiled output in this.

<i class="timecode">[00:15:28]</i> **Dan:** Yeah, and I'm really happy to show this because someone mentioned Svelte. Notice how similar the input is to the output. I mean…

<i class="timecode">[00:15:36]</i> **Ben:** Yeah!

<i class="timecode">[00:15:36]</i> **Dan:** Line 7 in the output is exactly like line 5 in the input. Same with line 9, line 11, and the effect.

<i class="timecode">[00:15:46]</i> **Ben:** Gotcha. Sorry, I'm reading Anthony's message. Anthony, can you clarify if it's when my volume spikes or when Dan's volume spikes?

Sorry. Okay, anyways. So yeah, like, this is remarkably like the code that I wrote, which makes me feel like, you know, like I have some control over what's going out. Like, it's not totally, totally magic. Okay. 

<i class="timecode">[00:16:11]</i> **Dan:** Yeah, it's kind of a big difference between Svelte and Solid, which is, like, actually the only work that compiler does in Solid is JSX stuff. So, like, the JSX that we wrote gets compiled to a string. So if you look on line 4 in the output, it has our button in there.

<i class="timecode">[00:16:31]</i> **Ben:** Yeah!

<i class="timecode">[00:16:32]</i> **Dan:** And so once that's created, we can do all these, like, very optimized things to it, like the reason why it's up there is because cloning a node is, like, quicker than creating it on some deep JavaScript optimization level. And then, yeah, if you look at the return stuff on line 16, what this does is it clones the element. Then it sets an event listener. That's line 19 which, what line 19 says is "When the element gets clicked, call the increment() function." And then on line 21, this is where the the reactive stuff happens, so we're saying…

So insert() is, like, part of the runtime of Solid. It's part of what Solid ships to the browser. And insert() says, "Okay, create an effect, and whenever message changes, reinsert it, basically. Rerun this DOM code."

<i class="timecode">[00:17:35]</i> **Ben:** Ohh, okay!

<i class="timecode">[00:17:37]</i> **Dan:** So, this is just super — like, if you ever check out a Svelte output, it's gonna be, like, first of all, way bigger than what you wrote, but also, like, way different than what you wrote. And that's a nice mental model thing about Solid is that, like, you can learn what's going on if you want to relatively easily. 

<i class="timecode">[00:17:56]</i> **Ben:** Makes sense! Cool!

So while we're here in the playground, are there more aspects of Solid that you'd like me to see? 

<i class="timecode">[00:18:05]</i> **Dan:** Yeah, one thing I wanna do… instead of returning the button directly, can you pull that out into a constant and then return the constant?

<i class="timecode">[00:18:12]</i> **Ben:** Yeah. "const button =," and then there we go.

<i class="timecode">[00:18:20]</i> **Dan:** Yeah.

<i class="timecode">[00:18:21]</i> **Ben:** I could reformat it, but not gonna for now. 

<i class="timecode">[00:18:24]</i> **Dan:** Yeah, let's just make sure this works first before I ask you to do other stuff. Okay. Then what I want to do is, before returning, I wanna just console.log(button).

<i class="timecode">[00:18:35]</i> **Ben:** Okay. Yeah, sure.

<i class="timecode">[00:18:42]</i> **Dan:** Alright. First, I wanna notice two things. One is, it only gets logged once.

<i class="timecode">[00:18:49]</i> **Ben:** Yeah!

<i class="timecode">[00:18:50]</i> **Dan:** That's… when we're talking about comparing to other frameworks, in React, this would actually get logged every single time we did anything!

<i class="timecode">[00:18:56]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:18:57]</i> **Dan:** But in Solid, our functions are just setup functions! This function Counter() only gets run when we actually use one. And it only gets run at that time. But the other thing I wanna point out is in the console, it's a real button!

<i class="timecode">[00:19:14]</i> **Ben:** Yes!

<i class="timecode">[00:19:14]</i> **Dan:** Like, it's actually a DOM button! 

<i class="timecode">[00:19:17]</i> **Ben:** Yeah, absolutely. It's not like, no, like, React function component business or anything like that. Like, this is a DOM element. 

<i class="timecode">[00:19:24]</i> **Dan:** Yeah. So, I love this. Like, you wanna talk about, like, why I spend so much of my time, you know, doing Solid-related stuff. Like, I don't get paid to do this. It's because I genuinely think this is an easier way to, like, use a library, to have a web app framework, because I don't want to have this mystery when I write my app of, like, "oh, there's some virtual DOM that's doing all the work." Like, I don't like that! I wanna understand. Like, personally, I wanna understand what is actually going on. And having it compiled directly to a DOM element that I could have created by myself — like, I could have done document.createElement('button') — so, having it basically be the same thing makes it really easy for me to reason about.

<i class="timecode">[00:20:16]</i> **Ben:** Absolutely. Yeah, and Ferit in the chat says that that's a really great thing for debugging, right? Like, 'cause you're not having to deal with that middle layer of what is the virtual DOM representation and, you know, is it any different from the output. Like, it's a `<button>`. I can do, you know, plain old JavaScript to that `<button>`, right? If I wanted. Yeah.

<i class="timecode">[00:20:42]</i> **Dan:** You know, the other benefit to this is, if you're using something like D3 or GreenSock — you know, old-school JavaScript libraries that work with the DOM directly — it's much easier to use Solid than React. 

<i class="timecode">[00:20:57]</i> **Ben:** Mm-hmm. Yeah, this is, this is a big problem with React, which is that, like, it's so built around this model of, like, the rerender. And what the rerender means, like, there's so much extra recomputation that happens, but also, like, the underlying DOM elements are torn down and then, like, recreated and so you get, like, new DOM elements. And this is really, really bad for — you mentioned, like, GreenSock — like, animation. It's such a, like, performance problem, but it's also just such a, like, development ergonomics problem, because you can't just, you know, change props to animate a thing. You're gonna get, like, wild amounts of recalculation. Yeah.

<i class="timecode">[00:21:40]</i> **Dan:** Yeah.

<i class="timecode">[00:21:41]</i> **Ben:** Yeah, it's just not built for that. 

<i class="timecode">[00:21:43]</i> **Dan:** The third reason why I asked you to pull out the button is composing things like this… like, in this case, it's just a constant, but it could actually be a function. Like, you could make, like, basically factory functions that produce elements, and those are equivalent to components in Solid. And this composability, this ability to, like, work however you like with your template is something that separates Solid, which is a JSX framework, from something like Vue or Svelte, which have their own special rules for the template. So with Solid, you really get this flexibility.

And you even get flexibility that you don't get in React! Have you ever tried to declare a component inside a component in React? 

<i class="timecode">[00:22:29]</i> **Ben:** Oh, yeah! Yeah… 

<i class="timecode">[00:22:32]</i> **Dan:** It's a mess! Yeah, it's gross.

So, Solid has this… even though they both use JSX, Solid has additional flexibility on top of React because the functions are sort of normal functions and they work in a predictable manner.

<i class="timecode">[00:22:46]</i> **Ben:** Interesting! Yeah, okay! Very neat, yeah. Alright!

Dave's like, "Or an effect inside an effect." Yeah, that would be forbidden. You know, a useEffect inside of a useEffect in… 

<i class="timecode">[00:23:03]</i> **Dan:** Yeah.

<i class="timecode">[00:23:04]</i> **Ben:** Yeah.

<i class="timecode">[00:23:04]</i> **Dan:** We can totally do effect inside effect. I don't recommend it — it's sort of, like, mind-bending. But the fact that you can just sort of shows that it's super flexible.

<i class="timecode">[00:23:13]</i> **Ben:** You know, you're casually strolling into the non-Euclidean parts of web development(!)

<i class="brackets">[Dan chuckles]</i>

<i class="timecode">[00:23:20]</i> **Dan:** Yeah, I mean, you do have to be careful in Solid not to create infinite loops. Like, if your effect has a dependency and then modifies the dependency, it could rerun forever. That doesn't usually happen, but if you do something silly, you can create an infinite loop.

<i class="timecode">[00:23:38]</i> **Ben:** Mm-hmm.

Alright! Cool! Is there more you want to do in the playground to just kind of talk through the core principles? 

<i class="timecode">[00:23:45]</i> **Dan:** There's one more primitive I want to…

So, these things are called primitives, the signal and the effect. There's one more primitive that I use in my demo, but it might make sense to just show the demo first, you know, so you can see it in context.

<i class="timecode">[00:24:06]</i> **Ben:** Yes! So you sent ahead of time, and I've gone ahead and forked this, so I'm gonna share a link to the repo in the chat so others can play around with this. You sent ahead of time a project and also that this project is deliberately an accessibility issue.

<i class="timecode">[00:24:23]</i> **Dan:** Yeah.

<i class="timecode">[00:24:23]</i> **Ben:** But we've just gone ahead and cloned it. Like, just installed our dependencies, and run it for the first time just to make sure it all works, so.

I know, Austin, I do need to fix that. It's a shame, 'cause it works with showmy.chat, but I'm not actually dogfooding showmy.chat. Here, let me... 

<i class="timecode">[00:24:46]</i> **Dan:** Oh, someone mentioned synthetic events. It's not really synthetic events in Solid. They're real DOM events, but they're done in a special way. I guess maybe that's what you mean by synthetic events, so I'll shut up on this topic. 

<i class="timecode">[00:25:02]</i> **Ben:** Alright. Yeah, so here's the project. We've got:...: very anchored down to the bottom of the screen, which is interesting.

<i class="brackets">[Dan laughs]</i>

Let me just embiggen this for, you know, our friends. 

<i class="timecode">[00:25:14]</i> **Dan:** There we go, there we go. 

<i class="timecode">[00:25:16]</i> **Ben:** There we go. So yeah, you've got this project where you can expand, collapse. You've got some tags. Clicking on that deletes the tag. You can insert a new tag. And then you can also add more notes down here. And then you have to hit this button. We can't hit Enter...

<i class="brackets">[Dan laughs]</i>

...as we found ahead of time. 

<i class="timecode">[00:25:43]</i> **Dan:** You can edit by hitting the pencil. 

<i class="timecode">[00:25:48]</i> **Ben:** Ooh, hello. Okay. Got it. Alright!

So yeah, this is the project that you sent ahead of time. And now I guess we can go ahead and dive into that code.

<i class="timecode">[00:26:01]</i> **Dan:** Yeah, I guess the first thing we should do is explore the Solid features and then we can explore the accessibility issues.

<i class="timecode">[00:26:08]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:26:09]</i> **Dan:** So, yeah, let's go into src, and we're gonna see a bunch of components. So if you go into App.jsx, that's sort of our starting point. Um, yeah! Actually, let's start from the bottom where the template is.

Yeah, so one thing I wanna point out here is I'm not using "className" to define my classes. I'm just using the "class" attribute. So if you're coming from React, you might be used to having to type "className." In Solid, we don't have that restriction. It's much closer to the DOM because it is the DOM.

Other stuff here will look familiar, but I imagine some stuff in this template will look a little strange. So, one thing that might look strange, if you scroll up a bit, is the `<For>` component. 

<i class="timecode">[00:27:00]</i> **Ben:** Yeah! 

<i class="timecode">[00:27:01]</i> **Dan:** Let's talk about that!

<i class="timecode">[00:27:02]</i> **Ben:** My guess is that this is to iterate over a list, right?

<i class="timecode">[00:27:07]</i> **Dan:** Mm-hmm.

<i class="timecode">[00:27:08]</i> **Ben:** And so this is, I guess, a way around, doing, you know, notes.map(). 

<i class="timecode">[00:27:14]</i> **Dan:** Yeah. The problem with notes.map() in Solid is because Solid does this reactive situation… like, actually, maybe you can comment — like, I wanna, like, get it on the screen for everyone, like to see what notes.map() would look like.

<i class="timecode">[00:27:32]</i> **Ben:** Okay!

<i class="timecode">[00:27:33]</i> **Dan:** So you can sort of insert it above line 64 or after, just to show. So yeah, if you do curly braces and do notes.map(), in Solid… like, so, in this case we're using something that isn't a signal, but in Solid, let's say you're using a signal, so it would be "notes()"-with-parentheses dot map, because you're using that getter. And then what would happen is every time the signal changes, the entire map would rerender! So anytime the list changed for any way, the entire thing would have to—

<i class="timecode">[00:28:09]</i> **Ben:** Oh!

<i class="timecode">[00:28:10]</i> **Dan:** —rerender from scratch.

<i class="timecode">[00:28:11]</i> **Ben:** Okay!

<i class="timecode">[00:28:11]</i> **Dan:** So that's why we can't — we don't want to use .map() in Solid, even though we could. 

<i class="timecode">[00:28:16]</i> **Ben:** Gotcha. But this, I'm guessing the `<For>` component that you've got here would modify in place, like, just the one that updated?

<i class="timecode">[00:28:25]</i> **Dan:** Yeah! Actually, what I wanna point out is… so, inside `<For>`, we have this function that we pass to it, and the function goes through everything inside of the list and it, you know, it sort of calls… you know, it calls your function for each one. The first thing that's that's passed is the element that you're on, and the second thing that's passed is the index. But the index is a signal! Why? Because if the element switches places, the signal will change! 

<i class="timecode">[00:29:01]</i> **Ben:** Oh! Okay! Got it, yeah! Alright, so you can easily, like, reorder lists and that kind of stuff—

<i class="timecode">[00:29:09]</i> **Dan:** Mm-hmm.

<i class="timecode">[00:29:09]</i> **Ben:** And you… yeah, okay! 

<i class="timecode">[00:29:12]</i> **Dan:** The best part, by the way, if you're coming from another framework like Vue or React, you never have to worry about the "key" problem again. Do you know what I'm talking about? 

<i class="timecode">[00:29:22]</i> **Ben:** Like, the keys issue, yeah. The reason keys are so messy, right, is, like, if you, like, rearrange a list or whatever, then yeah. React, like… 

<i class="timecode">[00:29:36]</i> **Dan:** So, for me, the problem with these frameworks is I would always forget to add a key and it would yell at me.

<i class="timecode">[00:29:41]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:29:41]</i> **Dan:** And then I would have to think to myself, "What's the best key to use for my loop?" In Solid, it's just… we don't really have that problem because when you use a `<For>` component, it uses referential equality. So it will just look at the list and, like, compare them based on reference. And if something gets moved around in the list, it will be like, "Oh, that thing was at index 2. Now it's index 7. Let's update the index!" 

<i class="timecode">[00:30:06]</i> **Ben:** Dang! So much nicer! So much nicer. Yeah, 'cause… so, at my last role, one of the things I did kind of, like, on the side — 'cause I was primarily a web developer, a React developer — but one of the things I did on the side at my last job was I onboarded new employees throughout the company in webdev. And like, "key" is one of those React idiosyncrasies that, like, once you understand why it's necessary, like, it makes sense, but it's just, like, an absolute footgun that exists in the React system that you just have to kind of live with.

<i class="timecode">[00:30:42]</i> **Dan:** Yeah. I would say I was writing Vue apps for over a year before I understood why I needed to add a key.

<i class="brackets">[Dan chuckles]</i>

<i class="timecode">[00:30:51]</i> **Ben:** Okay, cool!

<i class="timecode">[00:30:53]</i> **Dan:** So, yeah, you can sort of see the structure of this is, like, we're looping through the notes, and for each one, we're calling a component called `<NoteBubble>`. And you can open `<NoteBubble>` in a separate file if you want.

<i class="timecode">[00:31:09]</i> **Ben:** Yeah. Boom.

<i class="timecode">[00:31:12]</i> **Dan:** So, `<NoteBubble>` has this signal at the top, which is whether or not it's expanded. You'll see that I named the getter for the signal. I called it "getExpanded" and "setExpanded." And I really like that when you're first starting out in Solid to remind yourself that it's not like React and you actually have to call the getter.

<i class="timecode">[00:31:36]</i> **Ben:** Okay. Yeah! Yeah, yeah, yeah. Alright!

Then you're returning a list item. This list item has several elements. Okay! What is this `<Show>` deal? This is conditional rendering, I'm guessing? 

<i class="timecode">[00:31:56]</i> **Dan:** Yep! So, it takes a signal and then inside of it, you get… you know, you put the thing to happen when the signal is true. And you can also supply a fallback if you want, so you can do this sort of "else." So after "when," if you write "fallback," you can pass it an element, and that will show when the condition is not true!

This is why… yeah, another reason why pulling that button out like we did in the playground is something I do all the time in Solid, because once I split up all of my UI elements into different chunks, I can, like, more easily move things around and do the fallback and stuff like that.

So… there's a lot of Twitch comments here.

<i class="timecode">[00:32:45]</i> **Ben:** Yeah!

<i class="timecode">[00:32:47]</i> **Dan:** Vite is highly recommended for Solid. I would say… it's not true that it only works on Vite, but the template… the template that we provide uses Vite. And our metaframework, which is coming soon called SolidStart, which helps you do server-side rendering… that is based on Vite.

<i class="timecode">[00:33:12]</i> **Ben:** Gotcha. 

<i class="timecode">[00:33:15]</i> **Dan:** So, one other thing I wanna point out is the class list. So if you see line 30, we're using this…

<i class="timecode">[00:33:23]</i> **Ben:** Okay.

<i class="timecode">[00:33:23]</i> **Dan:** Yeah.

<i class="timecode">[00:33:24]</i> **Ben:** So, 'cause in the React ecosystem, there's, like, a "classnames" utility that you can, like, assemble, like, an object with, like, a bunch of conditions to, like, get a whole list of classes without having to, like, conditionally build up, like, a template string or whatever.

<i class="timecode">[00:33:40]</i> **Dan:** Yeah.

<i class="timecode">[00:33:40]</i> **Ben:** And it seems like this is just, like, built in?

<i class="timecode">[00:33:43]</i> **Dan:** Built in!

<i class="timecode">[00:33:44]</i> **Ben:** Wow! I love that. Love that, that's so good. 

<i class="timecode">[00:33:49]</i> **Dan:** There's something else that's built into Solid that features heavily in this demo. If you go back to App.jsx, at the top, you'll see where I start declaring my state. So the first— on line 8…

Oh wait, I'm not actually using that. You can delete that line.

<i class="timecode">[00:34:12]</i> **Ben:** The tags?

<i class="timecode">[00:34:12]</i> **Dan:** That was gonna be… that, yeah, that was gonna be, like, a repository of all the possible tags, but I instead decided to use a string, so nevermind.

On line… on the new line 8, there is a createStore(). And store is, like, our built-in complex state management system. So in React, when you want to do any sort of, like, nested state, complex state, you usually reach for something like Flux or Redux, which gives you these actions and gives you all these things. But in Solid, we have a built-in thing called the store, which basically takes in any kind of object you want. It could be an array, it can be an object. It can be a super complex nested object. And behind the scenes, it makes everything inside that complex object a reactive signal. 

<i class="timecode">[00:35:12]</i> **Ben:** Iiiinteresting. So, like, every…

Wait, so how far deep does it go? Like, if I were to just change the body, would that update? 

<i class="timecode">[00:35:25]</i> **Dan:** So yeah, in this example, we have an array of objects and each object has a body. So if all you did — and I'll explain how to set it, how to set something in the store in a bit. But if all you did was you changed the body, only that dependency. So, like, it wouldn't change— it wouldn't rerender any of the other DOM nodes that rendered for the other elements. Just the one you changed gets updated.

<i class="timecode">[00:35:54]</i> **Ben:** Okay!

<i class="timecode">[00:35:55]</i> **Dan:** So, it sort of goes infinitely deep.

<i class="timecode">[00:35:59]</i> **Ben:** Gotcha!

<i class="timecode">[00:35:59]</i> **Dan:** It's the same thing— it's the same thing for the tags, by the way! If you edit "dummy" to, like, "dummy 2," it won't rerender anything else except for the thing that renders "dummy." So it goes pretty deep.

<i class="timecode">[00:36:14]</i> **Ben:** Iiiinteresting. That's… that's very cool. 

<i class="timecode">[00:36:18]</i> **Dan:** But what's really special about this, aside from, like, the nice performance thing of not rerendering other stuff, is the helper that it provides. So like I said, we're dealing with nested objects here. And so if you imagine if setNotes() was a normal setter, you would have to basically, like — let's say you wanted to change that tag. You would have to, like, return a new object that had all the old stuff the same but just changed the one tag, and that would take a couple lines of code.

<i class="timecode">[00:36:50]</i> **Ben:** Yeah.

<i class="timecode">[00:36:51]</i> **Dan:** Instead — let me just make sure I remember where I'm doing this, 'cause there's a few examples of this.

<i class="timecode">[00:36:57]</i> **Ben:** Okay.

<i class="timecode">[00:36:59]</i> **Dan:** So first of all, that kind of setter, the basic kind, is featured on line 24. So on line 24, when we submit a new note, we call the setter, and at the top, we pass in a new note. So we're saying the body is whatever's in the input and the tags, and then we're using the spread syntax. So this kind of setter would be the same with, like, useState() in React.

<i class="timecode">[00:37:25]</i> **Ben:** Yes, yeah.

<i class="timecode">[00:37:26]</i> **Dan:** But check out line 37. 

<i class="timecode">[00:37:29]</i> **Ben:** Line 37 is setNotes(). The first thing we pass is the note index. The second thing is we've got this "tags" string here. And then you're giving it "newTags." I'm guessing that this "newTags" is an array of—

<i class="timecode">[00:37:45]</i> **Dan:** Yeah.

<i class="timecode">[00:37:45]</i> **Ben:** —just the spread with the old tags, I'm guessing. Or rather, just the full array of tags, that should be.

<i class="timecode">[00:37:52]</i> **Dan:** The full array of tags.

<i class="timecode">[00:37:53]</i> **Ben:** Yeah.

<i class="timecode">[00:37:53]</i> **Dan:** So, this is very different. This is a path syntax. We're basically… at each argument, we're narrowing in on our goal. 

<i class="timecode">[00:38:04]</i> **Ben:** You know, what this reminds me of is, this is a lot like Lodash .get().

<i class="timecode">[00:38:09]</i> **Dan:** Mmm!

<i class="timecode">[00:38:10]</i> **Ben:** I'm guessing Lodash has a Lodash .set() that probably is operating the same way. But like, that kind of path-based… like, every argument is drilling down one layer further—

<i class="timecode">[00:38:20]</i> **Dan:** Yeah.

<i class="timecode">[00:38:21]</i> **Ben:** —in the path.

<i class="timecode">[00:38:22]</i> **Dan:** So this is not something that ships with React or Vue. This is something that Solid ships with, because we know that, like, it's very, very common to deal with nested objects.

<i class="timecode">[00:38:35]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:38:36]</i> **Dan:** And we want to two things. One, we wanna make sure that everything is performant when you do nested stuff. We wanna make sure that when you're, you know, down in the object changing one thing, it doesn't interfere with all the other stuff.

<i class="timecode">[00:38:49]</i> **Ben:** Yeah.

<i class="timecode">[00:38:49]</i> **Dan:** But we also just wanna make it easier to deal with, and that's why we have these setters. And there's lots of really cool things you can do with the setter. Instead of passing a note index for the first parameter, you could pass a function.

<i class="timecode">[00:39:03]</i> **Ben:** Okay?

<i class="timecode">[00:39:05]</i> **Dan:** And for anything in the array where that function is true, it will run the setter. 

<i class="timecode">[00:39:13]</i> **Ben:** Oh, that's good. Oh, I like that. Okay. 

<i class="timecode">[00:39:15]</i> **Dan:** So we're not using that here, but it lets you do those kinds of nice conveniences. 

<i class="timecode">[00:39:21]</i> **Ben:** Dan, you are winning me over, I hope you know. Yeah, 'cause I'm thinking back to, like, you know, I mentioned my last role. And when I was doing the webdev part of that role, like, the centerpiece of our page was a big table, right? And this was a React app, and you can imagine, like, anytime we needed to update that table — like, we're trying to update just one entry, one row, or whatever, or even just the contents of, like, one cell, right? We turned on, like, the React profiler at one point and just the whole table lit up with rerendering.

<i class="timecode">[00:39:56]</i> **Dan:** Yeah! Yeah.

<i class="timecode">[00:39:58]</i> **Ben:** And we WERE able to find ways to target just the piece of data that we cared about. But, like, this is first-class. That's beautiful. 

<i class="timecode">[00:40:09]</i> **Dan:** There's another thing similar to this. Have you ever taught Context in React to beginners? 

<i class="timecode">[00:40:15]</i> **Ben:** Oh, goodness. I've tried! 

<i class="timecode">[00:40:19]</i> **Dan:** It's tricky because it's complicated enough to explain what Context is, but then you have to explain to them that you shouldn't use it for performance reasons, because anytime you change anything in the Context, it will rerender everything else in the Context. And so in Solid, you don't have that problem because if you pass a store as the value of the context, well, the store makes sure that anything inside of it is its own unique value. 

<i class="timecode">[00:40:51]</i> **Ben:** Iiiinteresting. Interesting, okay! 

<i class="timecode">[00:40:57]</i> **Dan:** David says, "Wait until you see createResource." So this is my teammate on the Solid core team, and createResource is another one of those utilities that doesn't come with any other framework but comes with Solid because we know how common it is to fetch something from a database.

<i class="timecode">[00:41:13]</i> **Ben:** Yes!

<i class="timecode">[00:41:13]</i> **Dan:** We could actually try that out if you want. I don't wanna run out of time for the accessibility stuff—

<i class="timecode">[00:41:17]</i> **Ben:** Let's do it!

<i class="timecode">[00:41:18]</i> **Dan:** —but yeah, if you, like, import… after createSignal, just do "createResource."

<i class="timecode">[00:41:25]</i> **Ben:** Okay. 

Yeah.

You got a lot of "create" functions in there. Okay, "createResource." 

<i class="timecode">[00:41:34]</i> **Dan:** Yeah, and the reason why we use "create" is because we are creating a new thing. It's not like in React where we're tapping into some deep React, you know, deep component hook. It's like we are creating a new sort of element that lives in the system.

<i class="timecode">[00:41:47]</i> **Ben:** Mm.

<i class="timecode">[00:41:48]</i> **Dan:** So yeah, check out that hover-over! So, it shows you how to use it. So you pass to the createResource, on the right hand side, a source, a fetcher, and some options. And the way that works — by the way, the source and the options are both optional. The simplest way to use it is just pass it a fetcher. But what happens is, let's say you pass a source. Anytime the source signal changes, it will call your fetcher again with the source as the argument. So you can set up a pattern where, like, you want… like, let's say you want to fetch information for a given user from the server.

<i class="timecode">[00:42:33]</i> **Ben:** Yeah?

<i class="timecode">[00:42:34]</i> **Dan:** And you have a textbox that's like, "Type the name of the user here." What you can do is set up a resource so that anytime you enter a new user, it will fetch your server with that user's name and get the data. And then createResource returns a signal. I realize that me just explaining it probably doesn't help as much, so let's just, like, call it.

<i class="timecode">[00:42:57]</i> **Ben:** Let's write some code! Let's write some code. Where should I put this?

<i class="timecode">[00:42:59]</i> **Dan:** So first we need an async function that calls fetch().

<i class="timecode">[00:43:02]</i> **Ben:** Is that going to be inside of App?

<i class="timecode">[00:43:06]</i> **Dan:** Yeah, I would— you can put it outside or inside. I would put it outside, just because there's no reason it should be inside the component, but it doesn't matter.

So yeah, you can call this, like, "fetchServer" or something.

<i class="timecode">[00:43:22]</i> **Ben:** Yeah.

<i class="timecode">[00:43:23]</i> **Dan:** And let me just pull up my example, just so I make sure we're not gonna make any mistakes. I always forget how to call fetch(). Do you remember how to call fetch()? 

<i class="timecode">[00:43:33]</i> **Ben:** I mean, it's… so, "const." Let's see. I'll say, like, "response = await fetch()."

<i class="timecode">[00:43:45]</i> **Dan:** Yeah.

<i class="timecode">[00:43:45]</i> **Ben:** Do I need to import fetch? 

<i class="timecode">[00:43:47]</i> **Dan:** No, it comes with the browser, yeah. 

<i class="timecode">[00:43:50]</i> **Ben:** Okay. We need an endpoint. We had kind of pulled up JSONPlaceholder as an option.

<i class="timecode">[00:43:57]</i> **Dan:** Yeah.

<i class="timecode">[00:43:57]</i> **Ben:** So let's go ahead and just do that. 

<i class="timecode">[00:44:02]</i> **Dan:** Yeah, sweet. And then I think you wanna call .json() after that. You might need to wrap — oh, yeah. response.json(), yeah, return— 

<i class="timecode">[00:44:14]</i> **Ben:** And then "const data" is like, yeah, "await response.data."

<i class="timecode">[00:44:22]</i> **Dan:** Yeah.

<i class="timecode">[00:44:23]</i> **Ben:** Sorry, "response."

<i class="timecode">[00:44:24]</i> **Dan:** . json(), and it's like a function.

<i class="timecode">[00:44:28]</i> **Ben:** Yep.

<i class="timecode">[00:44:29]</i> **Dan:** And then we can return that.

<i class="timecode">[00:44:34]</i> **Ben:** Yeah.

<i class="timecode">[00:44:35]</i> **Dan:** So now we can go ahead and do… yeah, somewhere at the beginning here. It doesn't really matter. You can even have it the first thing in the component, just so we can remember where it is. But yeah, "const." It's the same pattern with the array destructuring, but this time let's just do the getter. So call it, like, "data." 

<i class="timecode">[00:44:58]</i> **Ben:** Yeah. Yeah, like getDataFrom—

<i class="timecode">[00:45:02]</i> **Dan:** This is actually… this is actually a tricky thing about createResource, is it doesn't really return a getter. It returns sort of a reactive object similar to a store. So let's… we can gloss over that for now, but, like, just change "getData" to "data," and then don't supply another argument. Just destructure once. And then do createResource(), and pass just the name of the function, our fetcher function.

<i class="timecode">[00:45:33]</i> **Ben:** Okay.

<i class="timecode">[00:45:34]</i> **Dan:** And then we can use that data in our template down below. 

<i class="timecode">[00:45:40]</i> **Ben:** Yeah. And so what I will actually do is… I've got autoformatter on, but…

Yeah, let's do "JSON.stringify(data, null, 2)." And this should just print out the response in full.

And — Ooh. Oh, wait, okay. It would help if I went to the correct tab, it turns out.

Is there…?

<i class="timecode">[00:46:15]</i> **Dan:** Well, you do — sorry, you do have to call the parentheses on it.

<i class="timecode">[00:46:18]</i> **Ben:** Oh, right.

<i class="timecode">[00:46:19]</i> **Dan:** It's just, it's not a normal getter. Like, it has other properties on it, which is why I don't like to call it a getter. Um, yeah.

So I'll give you an example of what I mean by saying it's not, like, a normal getter. Like… is there a way for you to slow your internet down on Chrome? 

<i class="timecode">[00:46:39]</i> **Ben:** Uh, yeah! Yeah, yeah, yeah. I can emulate the speeds. I'll just go ahead and do that.

<i class="timecode">[00:46:46]</i> **Dan:** So, what I want to do before we actually run it is… yeah, so let's throttle it and then let's go to the code and call…

I guess right before. It doesn't really matter for this example. Do another curly brace and do "data().loading."

<i class="timecode">[00:47:08]</i> **Ben:** Wait. Oh, like, just—

<i class="timecode">[00:47:10]</i> **Dan:** Yeah, just anywhere. Like, we're not— it's just for a demo, so we don't need to put it inside of a conditional or anything. Okay. 

<i class="timecode">[00:47:16]</i> **Ben:** "data.loading," okay. 

<i class="timecode">[00:47:18]</i> **Dan:** Yeah, and this is a boolean. And so this is kind of what I mean by it's a very special… it's a very special signal here. So if you go back.

You should be able to throttle it so that before it shows up, it says "loading," and then it should say "false."

<i class="timecode">[00:47:36]</i> **Ben:** I think… let me try. Oh, I need to zoom out with here. Okay. Oh, wow.

There is something very wrong with the responsive—

Oh, actually, do true and false need to be stringified? 'Cause they do in…

<i class="timecode">[00:48:02]</i> **Dan:** Oh, you're right. Just… yeah, just add a… you know, do a template string or something. 

<i class="timecode">[00:48:08]</i> **Ben:** I think that works.

<i class="brackets">[Dan chuckles]</i>

<i class="timecode">[00:48:12]</i> **Dan:** My bad.

<i class="timecode">[00:48:13]</i> **Ben:** No, you're good. Let me try just…

<i class="timecode">[00:48:16]</i> **Dan:** Yeah, I usually put it in a `<Show>`.

<i class="timecode">[00:48:18]</i> **Ben:** So it says "true." and then…

<i class="timecode">[00:48:21]</i> **Dan:** Yeah. 

<i class="timecode">[00:48:23]</i> **Ben:** It breaks. What have we done?

<i class="timecode">[00:48:25]</i> **Dan:** Okay, it shouldn't break, but you get the idea of what data().loading does. We don't have to dwell on it. Like, in a real example, I would use a `<Show>` component so that we would have a fallback when it's loading. But the idea behind createResource is just to make it super easy to work with asynchronous functions that take time to execute.

<i class="timecode">[00:48:43]</i> **Ben:** Gotcha. Yeah. 

<i class="timecode">[00:48:49]</i> **Dan:** And then… yeah.

<i class="timecode">[00:48:51]</i> **Ben:** I do want to know how the styles of this page have gotten very wonky.

<i class="timecode">[00:48:58]</i> **Dan:** I dunno, some Tailwind interactions with the `<pre>` tag.

<i class="timecode">[00:49:06]</i> **Ben:** Totally.

<i class="timecode">[00:49:06]</i> **Dan:** But yeah, we could even go deeper into createResource if you wanted to. Like, the example that we were fetching? This endpoint had a "1" at the end.

<i class="timecode">[00:49:15]</i> **Ben:** Yeah!

<i class="timecode">[00:49:16]</i> **Dan:** What if you wanted the "1" to be dynamic? So you could actually do that, so you could like add that as a parameter.

<i class="timecode">[00:49:23]</i> **Ben:** Like that, but we'd have to make it a template string. 

<i class="timecode">[00:49:29]</i> **Dan:** Yeah.

<i class="timecode">[00:49:30]</i> **Ben:** Okay?

<i class="timecode">[00:49:33]</i> **Dan:** And then you could… when you do that createResource call, like…

<i class="timecode">[00:49:40]</i> **Ben:** Yes.

<i class="timecode">[00:49:41]</i> **Dan:** You can now pass a first argument, which represents that ID. You'd have to make a signal first, or it could be a prop, but basically, like, you can now have a signal. Yeah, you can call this, like, "id, setId." Yeah, exactly. And yeah. And now, pass getResourceId as the first parameter. 

<i class="timecode">[00:50:11]</i> **Ben:** And I just leave it as a function, right? I don't invoke. 

<i class="timecode">[00:50:14]</i> **Dan:** Yeah, you don't call it. You should be good. And you can sort of imagine what would happen if we had a full app set up where every time we set the resource ID, it would fetch the server again. And during that time, you'd go back to the loading state.

<i class="timecode">[00:50:30]</i> **Ben:** Okay! And so what happens if, you know, let's say I have an increment and a decrement, or a next and previous button, right? So it could go… like, ID could go 1, 2, 3, but then it could go 2, 1. Is it gonna refetch 2 and 1, or is it gonna pull it from a cache?

<i class="timecode">[00:50:48]</i> **Dan:** Yeah, by default there's no caching. But there are lots of caching systems in the ecosystem. 

<i class="timecode">[00:50:56]</i> **Ben:** Sure. Okay. Cool.

Yeah, so we had kind of talked about, like, we were gonna talk a bit about accessibility in SolidJS, and specifically a lot of the accessibility-type stuff is gonna be very similar to just any form of web accessibility, right?

Like, you've got your buttons here. Like, these are icon buttons, right? So if a screenreader navigates to them, like, they may say "pencil" if the underlying operating system has, like, a name for this. You'd probably wanna do, like, aria-label. Oh. aria-label equals, like, "Edit." And more specifically, you'd probably want this to be populated with some other, like, unique name, too. So it'd be like…

<i class="timecode">[00:51:47]</i> **Dan:** "Edit this thing?"

<i class="timecode">[00:51:48]</i> **Ben:** Yeah, edit, like, props.body or something like that. But overall, like, this stuff is gonna be fairly aligned with, like, other webdev information.

I've actually written a blogpost about ARIA labels that I'm gonna put in the chat because it's good stuff.

<i class="timecode">[00:52:06]</i> **Dan:** Yeah, I didn't know how much time we would have, like, but I didn't — yeah. Doing accessibility in Solid is basically the same as doing it in React. I just thought it would be really fun to take this terrible, terrible app which has no accessibility and like… 

<i class="timecode">[00:52:20]</i> **Ben:** Yeah. Well, but part of what I wanted to ask — so first of all, something I'm actually not clear about is would you classify Solid as a single-page application framework?

<i class="timecode">[00:52:33]</i> **Dan:** Yeah.

<i class="timecode">[00:52:34]</i> **Ben:** Okay, so in that case, how does Solid handle routing? 

<i class="timecode">[00:52:39]</i> **Dan:** Yeah, we have a router called Solid App Router, which is a separate package from Solid. And… yeah, you can sort of pull it up on GitHub. I was the one who wrote the README, so…

<i class="timecode">[00:52:51]</i> **Ben:** Yeah, no worries.

<i class="timecode">[00:52:56]</i> **Dan:** Oh yeah, so Solid Aria is basically a port of React Aria and it's—

<i class="timecode">[00:53:01]</i> **Ben:** Oh, okay!

<i class="timecode">[00:53:02]</i> **Dan:** It's heavily under development. Sorry, that makes it sound like it's not done yet. It is basically done— like, so much of it is done. But what I mean by that is the community is really dedicated to working on Solid Aria, and we actually are building on top of it. The creator of Hope UI is — which is one of the most popular component frameworks in the ecosystem — is gonna be building on top of Solid Aria, so you'll get these ARIA defaults.

<i class="timecode">[00:53:32]</i> **Ben:** Okay. Yeah, so React Aria, that's the project by Adobe, and specifically Devon Govett I think is the lead over there. I've been meeting to reach out to him, see if he would come on. But yeah, it's a component library where all of the components are based around, like, just very, very…

<i class="timecode">[00:53:51]</i> **Dan:** Yeah.

<i class="timecode">[00:53:53]</i> **Ben:** ...rigorous, tested accessibility opinions.

<i class="timecode">[00:53:57]</i> **Dan:** Yeah!

<i class="timecode">[00:53:57]</i> **Ben:** And so — oh! Oh, awesome. That's good context, David. He says that Devon is on the Solid Discord following the Solid Aria work.

<i class="timecode">[00:54:09]</i> **Dan:** Yeah, and… yeah, for Solid App Router, this is our… you know, our routing solution, and this same router is used in SolidStart. So yes, Solid itself is an SPA framework, and you use this router to do SPA routing. But when SolidStart, you know, is sort of ready for production or you wanna try it out, you just bring over your same knowledge of that frontend router, and now it actually creates pages on the server. 

<i class="timecode">[00:54:39]</i> **Ben:** Gotcha. Okay! Yeah, the reason I ask — and I think, actually, Anthony Campolo, or Anthony Janthony Canthony Web Dev… he's previously been on, and one of the things I always ask when it comes to…

Getting the right…

One of the things I always ask when it comes to, like, clientside single-page app frameworks and tooling is, like, what does the router look like, because single-page applications have historically been abysmal for assistive technology.

<i class="timecode">[00:55:21]</i> **Dan:** Mmm.

<i class="timecode">[00:55:22]</i> **Ben:** Screenreaders in particular, for instance, will usually treat, like, a hard page load, like you've just gotten a literal new document from the server, as, like, an excuse to, like, you know, kind of announce you're on a new page and tell you what the page title is and stuff like that. And single-page applications don't have that because they're doing this, like, substitution game of "we're taking the elements on the page you're on and replacing them with different elements."

<i class="timecode">[00:55:51]</i> **Dan:** Yes.

<i class="timecode">[00:55:51]</i> **Ben:** The screenreader is never told, "Hey, you're on a new page." And so especially, like, this can pose problems when you have elements that are the same across pages. So for instance, if you have, like, a navbar along the top and you click a nav link, that nav bar is the same across both pages, right?

<i class="timecode">[00:56:11]</i> **Dan:** Mm-hmm.

<i class="timecode">[00:56:12]</i> **Ben:** And so if the user is, like, focused on a nav link that's the same across both pages and they go from, like, one page to the next, then their focus could stay on that nav link and they won't actually be told of any changes. And so routing is absolutely the big, like, accessibility project of clientside application frameworks. Like, there have been tons… like, there's been tons of work. Like, Marcy Sutton is kind of the go-to here.

"Foldable Labs routing." Let me… yeah. Yeah, she wrote an excellent writeup of some user testing for Gatsby when she was on the Gatsby team. But like overall, I still feel like accessible clientside routing is, like, an unsolved problem, but…

<i class="timecode">[00:57:09]</i> **Dan:** Yeah.

<i class="timecode">[00:57:09]</i> **Ben:** Yeah, so I guess… I don't know if this is something you'd personally be acquainted with but, like, do you know, like, has the router been considering these kinds of things? Like, have y'all been looking into, like, accessible routing techniques? 

<i class="timecode">[00:57:23]</i> **Dan:** So, I don't think our router right now, you know, uses this kind of enhancement. I wonder if there's something in the ecosystem that does. I didn't even think about this before. I didn't realize that… I figured that if, you know, if the headers changed, that would be sort of enough, but that's not true. Like, you know…

Yeah, no, we should definitely be working on this. We could either add it to the router itself, or if it's so complicated that, like, every app has what it would need to have different considerations, then we can do a guide. Like, we can do it on the documentation side, like a guide to setting that accessible routing.

<i class="timecode">[00:58:09]</i> **Ben:** So… what I've been seeing from a lot of the frameworks is it is kind of complicated enough that a lot of sites will have their custom logic, but… people who are building apps with these frameworks are not the people who have enough context as to, like, how to fully build an accessible router. You know, maybe there's a few, like, accessibility specialists here and there, that might know. But like, as a whole, like, the framework needs to provide an out-of-the-box solution, like, that's gonna work in the vast majority of cases because the developers don't know, right?

<i class="timecode">[00:58:48]</i> **Dan:** Yeah.

<i class="timecode">[00:58:48]</i> **Ben:** The developers don't have this context.

<i class="timecode">[00:58:50]</i> **Dan:** Yeah.

<i class="timecode">[00:58:50]</i> **Ben:** Are you familiar with the metaphor of the pit of success?

<i class="timecode">[00:58:54]</i> **Dan:** No.

<i class="timecode">[00:58:54]</i> **Ben:** Okay, so basically it's… there's a great article and I'll — actually, Anthony, if you're there, can you find a link to the pit of success article on the Coding Horror blog? But basically, it's this idea that it should be really, really easy to do the right thing even by accident.

<i class="timecode">[00:59:17]</i> **Dan:** Yeah, it's so funny because for accessibility, I often thought to myself the defaults aren't enough, like if you make your app accessible by accident, you're gonna be missing something out, because I was analogizing it to my experience in UX where yes, you have heuristics, you have design heuristics to follow, but you still have to do user testing, otherwise you're gonna be missing out. 

<i class="timecode">[00:59:43]</i> **Ben:** Yeah! And so this is a thing of, like, you know… and I recognize you do important work with documentation and Solid's documentation is getting better and better, right? This is not a fault of documentation. But I think we both know that if you leave things to documentation—

<i class="timecode">[01:00:03]</i> **Dan:** Oh, it just won't get it done, yeah. We should definitely add sensible defaults to the router. 

<i class="timecode">[01:00:09]</i> **Ben:** Yes. So, yeah, basically, Marcy kind of goes through, talks through kind of the different user tests that she and her team did with, like, different ways, like "Oh, we could move the focus" or "we could have an ARIA live region" and stuff like that. And she kind of talks through various approaches and the kind of constraints that they operated with. Anthony and I have been posting links to a previous stream I did with the Redwood team—

<i class="timecode">[01:00:35]</i> **Dan:** Mm-hmm.

<i class="timecode">[01:00:35]</i> **Ben:** —where Redwood incorporated the router. 

<i class="timecode">[01:00:38]</i> **Dan:** They also do clientside routing.

<i class="timecode">[01:00:41]</i> **Ben:** Yes.

<i class="timecode">[01:00:41]</i> **Dan:** Right? Yeah. So Astro doesn't have this problem because it does server-side routing.

<i class="timecode">[01:00:45]</i> **Ben:** Right, yeah. And this is actually one of the reasons that I've been leaning in hard on tools like Eleventy, right? Like, things that build static assets. Because I don't believe clientside routing is there yet. Like, we can approximate it. We've got some tests that, like, give us reasonable confidence, but it's just a complicated problem that I feel like leaning on what browsers are good at, which is pulling up new documents—

<i class="timecode">[01:01:10]</i> **Dan:** Yeah.

<i class="timecode">[01:01:10]</i> **Ben:** —is worthwhile.

<i class="timecode">[01:01:11]</i> **Dan:** It's a good opportunity for me to plug, you can use Solid with Astro. So, Astro is a server-side rendering framework that lets you use whatever you want on the client side, so if you wanna sort of, like, not do clientside routing but still get the interactivity of Solid, you can pair those two tools. And I'm on the core team of both, so there you have it. 

<i class="timecode">[01:01:33]</i> **Ben:** Yeah, and I don't think we have time necessarily to explore it now but, like, Solid Aria is an interesting project, right? Like, anything that has, like, just strong opinions on accessible patterns is something that interests me a lot, so.

<i class="timecode">[01:01:51]</i> **Dan:** Yeah, sweet. 

<i class="timecode">[01:01:54]</i> **Ben:** Yeah.

<i class="timecode">[01:01:54]</i> **Dan:** We'd love to get you involved in as little or as much as you want on these things. Like, I think for Solid App Router, I can go ahead and read these… you know, read the links you sent. And then one of our core team members is, like, very focused on the router, and so having him sort of, like… we can have a discussion about how, yeah, how to have these sensible defaults.

<i class="timecode">[01:02:20]</i> **Ben:** Yeah. Yeah, it's hard, right? It's not an easy thing, I think, and it does mean — and I think Anthony can attest to this experience on the Redwood team. Like, it does mean having some opinions on, like, "Okay, what is the sensible default gonna be? What are the sensible heuristics we can make? Like, when all else fails, what can we guarantee with the site?" So, yeah, just… that is something that, like, I see as a concern for, like, any clientside single-page application framework, is routing, right, and has the team considered that. Because if the, like, team hasn't considered that, the framework hasn't considered that at a primitive level… you bet, like, the ecosystem is not handling that consistently reliably throughout, you know?

<i class="timecode">[01:03:07]</i> **Dan:** Yeah, definitely.

<i class="timecode">[01:03:10]</i> **Ben:** Yeah, David, absolutely. And I'm happy to provide feedback as well, and if y'all — you or anyone else on the Solid team — as y'all are working on this, if you wanna come back on and kinda show me what you've been working on, I'd love to talk more about this, because sadly we're a little over. I've been enjoying learning about Solid. Thank you so much for your time, Dan.

<i class="timecode">[01:03:31]</i> **Dan:** Likewise.

<i class="timecode">[01:03:32]</i> **Ben:** Yeah. So, in the meantime, y'all, go follow Dan on the places. Follow him at @jutanium on Twitter. Follow him on Twitch. Let me get the little shoutout command! Is there anything else you'd like to promote while we're here? 

<i class="timecode">[01:03:51]</i> **Dan:** The new Solid docs project. If you go to… what's the GitHub link? GitHub, slash whatever, slash SolidJS, slash.

<i class="timecode">[01:04:00]</i> **Ben:** Yeah.

<i class="timecode">[01:04:01]</i> **Dan:** solid-docs-next 

<i class="timecode">[01:04:05]</i> **Ben:** solidjs-community? Oh, no, just sol— Okay. Solid docs. 

<i class="timecode">[01:04:09]</i> **Dan:** It's solid-docs. Yeah, there it is.

<i class="timecode">[01:04:12]</i> **Ben:** Okay.

<i class="timecode">[01:04:12]</i> **Dan:** This is my baby. Like, I want people to… if you're interested in teaching, learning, writing, even accessibility! Like, we need accessibility help, too. If you're interested in any of these things, like, please check out this project and ping me if you're interested in being a part of it.

<i class="timecode">[01:04:31]</i> **Ben:** Alright! Also while you're, you know, following people on the interwebs, you should go follow Some Antics on Twitter at @SomeAnticsDev. You should follow Some Antics here on Twitch. There should be a purple button in your vicinity that you can click to follow if you haven't already.

Next Tuesday at 2pm Central, I think? It might be earlier. I'll have to, like, check and confirm. But next Tuesday, we're bringing on Segun Adebayo, who is the creator of Chakra UI and a recent project called Zag, which is a component library that's actually framework-agnostic for building accessible components powered by state machines, and so we're gonna be talking about that. I'm super excited to be learning more from him. So yeah, that's what we've got coming up.

Stick around, chat. We are going to find someone to raid. And thank y'all for being here. Have a great Friday!