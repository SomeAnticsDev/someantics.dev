<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all. Happy Tuesday. Welcome to Some Antics. Today, I'm joined by Sage! Hello, Sage! Welcome to the stream! 

<i class="timecode">[00:00:09]</i> **Segun:** Hey, Ben. Really excited to be here. Thank you so much for having me. I'm really excited to see what we magically create today. 

<i class="timecode">[00:00:18]</i> **Ben:** Yes, absolutely! So, for anyone who doesn't know, this is Some Antics. This is a weekly stream where I bring on guests from around web development and web design to teach me something about building great user experiences for the web in a hands-on way, with a focus on accessibility and core web technologies.

And today we have Sage. Sage, you're the creator of Chakra UI. But you know, I can't… no introduction I could give could do you justice, so would you like to introduce yourself for anyone who hasn't seen you around yet? 

<i class="timecode">[00:00:49]</i> **Segun:** Yeah, for sure! So, my name is Segun Adebayo. My nickname, or should I say Twitter name, is Sage, so you can call me Sage if you find it hard to pronounce my name, for sure. So, I'm the creator of Chakra UI, I'm a GitHub Star, and also recently the creator of Zag.js, and I currently work at Vercel as a software engineer. 

<i class="timecode">[00:01:13]</i> **Ben:** Awesome! So, you mentioned Zag, and that's kind of what we're gonna be diving into today. First, can you give us at a high level, like, what is Zag?

<i class="timecode">[00:01:25]</i> **Segun:** Yeah, yeah, for sure. I mean, each time I have to explain or talk about, like, what is Zag, I always start from, like, why Zag. I think that, like, that's a much more interesting place to start from. Then I can get into what. And I say, like… so, the journey behind, like, why Zag was created always, like, I mean, predates, like, Chakra UI and, like, all of the work that we've done, I mean, at Chakra UI.

So, earlier when we launched Chakra UI, we are looking for… we're trying to build, like, a system that would help people, that would give people the composable pieces they need to create an accessible website or application, like, really fast. So I think of, like, LEGO bricks that, no matter how you put them, they're always, like, performant. They're always accessible. It's just, like, out of the box. It just looks awesome as well. Right, so that was kind of like the goal we set out to solve.

And now getting into that… I mean, three years after getting into that, we're seeing, like, lots of people come to us like, "Chakra UI is awesome! I mean, first of all, can we get more complex components? Can we get, like, a datepicker? Can we get a carousel? We literally want to get, like, everything possible we can get." And then the next one then goes like, "Can we get Chakra UI in Vue.js, or in Svelte, or in SolidJS?" And then just like, you know, with a popular and growing open source project, it starts to take a toll on your mental health and physical health when you try to solve all these problems in parallel, right?

<i class="timecode">[00:02:49]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:02:50]</i> **Segun:** And I mean, I took a first stab at this by trying to set up a Vue.js team to say "Let's get Chakra UI into Vue. Let's work on Vue stuff and let's get it rolling." First of all, it took maybe, like, eight months to just get, like, the current version of Chakra UI into Vue. And I noticed that, like, the amount of bugs they had to solve, which is either a bug we've already fixed within the React project or a bug we don't know about. And then it's like, we probably have to, like, then start to sync, like check the issues here, check the issues there and, like, compare and sync to see, like, how are we solving issues and accessibility concerns over time, right? So that became a very daunting process. Right, and then in the end, I thought about, like, is there a way we could just, like, model the logic of all these components in a single, like, framework-agnostic way, without having to depend on, like, React and Vue and Solid. Because each of these frameworks come with your own, like, should I say, like, mental overhead, things you have to learn, things you have to know in order to—

<i class="timecode">[00:03:50]</i> **Ben:** Yeah.

<i class="timecode">[00:03:50]</i> **Segun:** —maintain. Not just to build, but in order to actually maintain and improve them over time. It's a certain level of, like, mastery you need to have for these frameworks. And in the end, I see our roles as software engineers not just being, like, a framework expert, but actually being, like, the true software engineer that we should be, which is actually modeling complex systems in a way that is accessible, in a way that's composable, in a way that can be maintained and improved over time. Right, so I see the software engineering role as a system design role, not just like a "Let's just get this UI working"-type role, right? So it's kind of like how the perspective I decided to sort of, like, look at this challenge from.

And then I stumbled on the concept called statecharts, right? And then it occurred to me that this actually might be the missing piece that I'd really love to see within Chakra UI's ecosystem. And like, I mean… I just, like, I took a while to learn about statecharts. I stumbled on XState. I stumbled on David Khourshid, just like you mentioned. Like, I mean, I took a couple of his courses, and that actually helped me actually get started into state machines. Building maybe, like, one or two of the components we have in Chakra UI just, like, just brought the light bulb on in my mind. Like, "Oh, okay. This is actually, like, the way to go," right?

So Zag.js right now is a collection of composable… it's a collection of composable components' logic, basically. So it's just, like, component logic built with state machines. We've already accounted for things like the event handlers and the accessibility requirements for all of these components, and we just say, hey, here are all of the headless components. You style it however you want with CSS, with Chakra UI, with Tailwind — whatever solution you prefer. But then you assure that the logic, the accessibility, works exactly as you'd expect them to. 

<i class="timecode">[00:05:49]</i> **Ben:** That's awesome. And so you mentioned, like, statecharts, state machines… these were the missing piece that enabled you to build this kind of, like, framework-agnostic tool. Can you talk about, like, what they are and how they fit into the picture? Like, why were they the missing piece? 

<i class="timecode">[00:06:08]</i> **Segun:** Yeah! I think, like, the idea or the concept behind statecharts started, like, I mean, it probably be like almost 30 years ago from today.

<i class="brackets">[Segun laughs]</i>

<i class="timecode">[00:06:17]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:06:18]</i> **Segun:** Yeah, it has actually been in existence for quite a while. I think in 1960 or '57 — one of those dates. And like, the key thing here is that, like, these systems have been used in, like, places like the avionic system, people that design electronic systems. They actually use statecharts to model the complexity within the systems. Then it occured to me, though, like, I think the web is also that complex. It's just maybe complex in subtle ways, right?

<i class="timecode">[00:06:44]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:06:44]</i> **Segun:** So that is kind of like what got me into that, because as a developer, when you get into, like, handling, like, onkeydown, onkeyup, onpointerdown, onmouseup, onmousedown, ontransitionstart — like, all of these weird things, I mean, composing, like, all of these different event systems to make sure that you build your components in a way that's accessible, in a way that's performant actually takes a lot of time, right? And it takes a lot of testing. It takes a lot of, like, mental effort to actually get right. And I think the biggest one is, like, it takes a lot, like, to be able to maintain all of these kind of complex components if you build them with vanilla JavaScript, with querying the DOM and listening to the events and then updating some states and, like, syncing all of these states together. It turns out to be a very complex, messy soup of code that you have to deal with over time.

And one of the things I've seen with component libraries over time is they become robust. And with robustness, they become, like, less maintainable. Even the creators of these libraries tend to, like, just, like, try to run away from this library because, like, there's so much, like, if conditions and so many, like, hacks just to make things work correctly to do what you'd want, right?

Not to talk of browser inconsistencies — inconsistencies between Safari and Chrome, inconsistencies between Firefox and Mozilla and Chrome and even Safari as well. So there are so many, like, layers to this complexity that, like, I mean, just using the vanilla approach would definitely work if you ask me, but I think it would be less maintainable and harder to test over time.

<i class="timecode">[00:08:20]</i> **Ben:** Gotcha. Cool!

So with that kind of introduction, I'd love to just kind of start diving in, so I'm gonna start sharing my screen. And first of all, y'all should go follow Sage on Twitter at @thesegunadebayo. And we're gonna be diving into Zag, so we're gonna look at the… I'm gonna put a link in the Twitch chat for Zag as well.

Cool. So ahead of time, kind of in the green room so to speak, we spun up a new CodeSandbox project and we installed two dependencies, which were @zag-js/core and @zag-js/react. Where should we get started? I think we had kind of talked about, like, maybe starting with some state machines first?

<i class="timecode">[00:09:11]</i> **Segun:** Yeah, for sure! I think like — yeah, I have so many ideas here — but like, we can start with, like, let's try to build a component from scratch. I think that would be a lot more interesting to see and to talk about so, like, people actually get to see, like, how Zag works underneath the hood, as, like, Zag is not some special library or some statechart. It's just JavaScript, but we are using… like, the way of thinking about components is using statecharts, right? But how you write the code, you see the difference between, like, both of them, right?

So we're gonna… let's try to build a, should I say, like, the `<input type="range">`, right? So that is a slider component—

<i class="timecode">[00:09:55]</i> **Ben:** Okay!

<i class="timecode">[00:09:55]</i> **Segun:** —effectively. Alright, so if we head over to the Mozilla, the MDN docs for this element, let's try to see if we can build a custom one, and then see how far we can use statecharts to model this.

Right, so on this page here, we have, like, `<input type="range">`. There are a couple of things we want to test. So this is, in my… when I work on a component, this is what I call, like, the discovery phase. We are just trying to, like, discover, like, what functionalities does this component have, what accessibility features does it have that I have to quote–unquote "replicate" within my component, right?

So there are two key areas here. So, if you scroll all the way up to the example within here, and we… let's try to test that with the keyboard and with the pointer, right? So if we do keyboard focus on that element there and press, like, the left and right, I mean, arrow keys, that sort of, like, increments, decrements the value. You can press the Home and the End key to take the value to the end, take the value to the start.

<i class="timecode">[00:11:05]</i> **Ben:** I don't have those on my keyboard, but I will take your word for it!

<i class="brackets">[Segun laughs]</i> 

<i class="timecode">[00:11:11]</i> **Segun:** Yeah, yeah, for sure! So, that would literally, like, take the value — if you press the Home key, you take the value to the start, and if you press the End key, you take the value to the end. So that is basically what happens when you do that. Then, I mean, as always, if you maybe, like, clicked at any point within the track itself, you'd also update the value. Right?

So, that is kind of like the… I mean, what we'll try to build here today. That's an example we can build together. Does that work for you? 

<i class="timecode">[00:11:43]</i> **Ben:** Absolutely, let's do it! 

<i class="timecode">[00:11:46]</i> **Segun:** Awesome! Alright, so before we start writing code, the key ideas we want to learn today is the fact that, like, when thinking about, like, statecharts, there are a couple of things that we need to talk about. The first one is the fact that, like, statecharts and modeling components is a top-down approach, which means you need to actually design the system. I'm gonna talk about what "the system" means shortly. And then you write the code for the system, right? It's a little bit counterintuitive from a traditional approach, which is you just start writing the code, pull a couple of useState and stuff, and it's all done. And then you start to add if, else, if, else, useEffect, useState until, like, it is all done, right? So we would like to take, like, a top-down approach of the system.

And let's go through and explain what "the system" means, right? So with these statecharts, the key requirement you need to have is your component has a finite number of states, right? So note one would be "This component I'm trying to model would have a finite number of states." The second one is it would have a finite number of events that this machine can listen to at any point in time. If you've used systems like if you've used, like, Redux or the reducer pattern, you'll probably be used to, like, state and events, but I mean, it still is slightly different in this use case.

So, if you want us to maybe, like, I mean, draw out something together, that'll actually be helpful. So if you maybe can open Excalidraw or tldraw, let's try and sketch something out—

<i class="timecode">[00:13:19]</i> **Ben:** Yeah!

<i class="timecode">[00:13:20]</i> **Segun:** —together. 

<i class="timecode">[00:13:23]</i> **Ben:** I'm wondering if I — oh, okay, cool. Yeah, and do I need — am I able to share this with you, or just are we just doing this kind of on my end? 

<i class="timecode">[00:13:32]</i> **Segun:** Try… you can share this with me. I think it'd be cool. Yeah, it's that, like… just on top of the light/dark mode switch on the left.

<i class="timecode">[00:13:41]</i> **Ben:** Ah.

<i class="timecode">[00:13:42]</i> **Segun:** Top left. Yeah, that one. You can start a session and share that with me. 

<i class="timecode">[00:13:47]</i> **Ben:** I'll call myself "Ben." There we go. And give this in the special Zoom chat. There we go. Alright.

<i class="timecode">[00:13:57]</i> **Segun:** Nice. Nice, cool.

I'll try to do this without actually, like, joining in Excalidraw. If you run into problems, I can get in there as well.

Alright, so let's go ahead and do, like… let's go back to the MDN docs and try to observe this component one more time. Alright, so this component, what I say before interacting with this component, let's assume that this component is in what I call the idle state, which means prior to interacting with the component, it's just rendered on the page. So it's currently idle.

Now, if you press, like, the Tab key to sort of, like, I mean, tab all the way to that component, you see this focus outline show up.

<i class="timecode">[00:14:37]</i> **Ben:** Yeah!

<i class="timecode">[00:14:38]</i> **Segun:** Right? So when this focus outline is on this component or this element, there are a couple of things you can do, right? And those things, you couldn't do prior to it being in focus, right? So you can press the left and the right arrow keys to increment the value, and that is because it is now focused, right? Prior to it being focused, you cannot use the left and right keys to actually increment the value of that slider, right? Because, hey, you're just controlling the page, not the component itself.

<i class="timecode">[00:15:07]</i> **Ben:** Right.

<i class="timecode">[00:15:08]</i> **Segun:** Right? So, that's kinda, like, the point. And if you put your pointer down at, I mean, along the track of that component and sort of, like, scrub all the way to the left or the right, you'll notice that you're in a slightly different state from what we were before, which had, like, this focus outline, right?

<i class="timecode">[00:15:27]</i> **Ben:** Yeah!

<i class="timecode">[00:15:27]</i> **Segun:** So I would assume that this is kind of like what I would call a dragging state, where you're actually, like, dragging or scrubbing the values of this slider.

<i class="timecode">[00:15:35]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:15:36]</i> **Segun:** So now we've been able to identify, like, three different states. This component could be in the idle state, the focused state where it shows the focus outline, and the dragging state where, like, when you use your pointer and you're going like this, then you're dragging the value.

<i class="timecode">[00:15:52]</i> **Ben:** So doing further exploration, it does seem like we could be in multiple states, because I'm focused on this and I'm currently dragging. Right?

<i class="timecode">[00:16:00]</i> **Segun:** Exactly.

<i class="timecode">[00:16:01]</i> **Ben:** Yeah.

<i class="timecode">[00:16:02]</i> **Segun:** Exactly. So, you could also be focused on the dragging, but then while you are also dragging… I mean, can you test to see if you can use the keyboard, the arrow keys at the same time?

<i class="timecode">[00:16:12]</i> **Ben:** Yeah, let me. Okay. Yeah, it's… like, it works up until my mouse twitches. 

<i class="timecode">[00:16:21]</i> **Segun:** Yeah, exactly. So that is what I would call, like, an unknown state that, like, currently exists within the DOM element itself, because it feels like you're incrementing the value, but you're actually not incrementing the value. So that is quote–unquote, like, a "state misalignment" in there.

But let's try to see if we can actually model this correctly, at least on a basic level. We can go as complex as we want.

<i class="timecode">[00:16:44]</i> **Ben:** Okay!

<i class="timecode">[00:16:44]</i> **Segun:** So let's draw three boxes. One for idle. So we just put the text "Idle" in there. 

<i class="timecode">[00:16:54]</i> **Ben:** Is there — ah, yes. 

<i class="timecode">[00:16:57]</i> **Segun:** Yeah, yeah. We can just do, like, "Idle." Then we draw another box for "Focused."

<i class="timecode">[00:17:07]</i> **Ben:** We're not gonna make these especially pretty today, but…

<i class="brackets">[Segun chuckles]</i> 

<i class="timecode">[00:17:12]</i> **Segun:** Yeah, no problem. And then let's make the other one. Let's call it "Dragging" state, right? Cool. Alright, so we can…

Let's space out these boxes so they're not like super apart.

<i class="timecode">[00:17:24]</i> **Ben:** Yeah.

<i class="timecode">[00:17:24]</i> **Segun:** Just basically, like, just, like, space them out, yeah, really far apart from themselves. Nice.

Cool. So, now we need to figure out…

So, this is, like, the first step in modeling any component. You need to figure out the states that this component could be in. And then the next phase is you need to figure out the events that can occur in each of these boxes.

<i class="timecode">[00:17:48]</i> **Ben:** Okay!

<i class="timecode">[00:17:49]</i> **Segun:** So… so, the key to that is that, I mean, statechart makes, like, impossible events impossible. Literally, there's no way you can cause, I mean, like, a bug by sending the wrong event. In the browser, in vanilla JavaScript, you can call onmousemove, onpointermove. These two events can be fired almost at the same time by the browser. With a state machine, if you handle that logic within the statechart, it's just gonna respond to one of them. It's never gonna respond to both of them—

<i class="timecode">[00:18:21]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:18:21]</i> **Segun:** —at any point in time. And that's because, like, you can either— you can be in one of these states at any point in time. And in any of these states you are in, you can only listen to a finite number of events, right?

<i class="timecode">[00:18:33]</i> **Ben:** Okay!

<i class="timecode">[00:18:33]</i> **Segun:** So even if you send an event twice — so let's say you're designing a payment system that says "Pay Now," and you click that button twice. Because the machine has transitioned from, like, I mean, being idle to actually processing your payment, clicking the button again would do nothing, compared to, like, having to disable the button, because every state node has a finite number of events that it can listen to.

So, let's do the first thing here. So we're gonna draw— let's draw an arrow from the idle state to the focused state. 

<i class="timecode">[00:19:07]</i> **Ben:** Alright! Beautiful. 

<i class="timecode">[00:19:09]</i> **Segun:** Yeah. Then you can… I think you can double-click the arrow to add a text. I hope so. No, you can't. So you can just put a text on top of that.

<i class="timecode">[00:19:19]</i> **Ben:** Yeah.

<i class="timecode">[00:19:21]</i> **Segun:** Called "Tab." Let's call it "Tab Focus" or "Tab Press," whatever is it.

<i class="timecode">[00:19:28]</i> **Ben:** Yeah.

<i class="timecode">[00:19:29]</i> **Segun:** Alright. So, that means that when we tab, when we press the Tab key and we focus on this component, it goes from the idle state to the focused state, right? 

In this focused state, there are a couple of things you can do. You can press the arrow keys. So let's just start modeling the arrow keys. Right, so you just, in that focused state, just type in "Arrow Keys." I mean, I think… or we can put "Arrow Left" and then also, I mean, in a new line, "Arrow Right" as well. 

<i class="timecode">[00:20:02]</i> **Ben:** Yep. There's also "Home" and "End," right? 

<i class="timecode">[00:20:06]</i> **Segun:** Yes, exactly. Alright, so all of these different events, they still keep you in the focused state, which means you still get to see the focus outline, like, at this point. So it's not actually causing any state transition, compared to the Tab Focus event. The Tab Focus event takes you from idle to focused, so that is actually a state transition happening in there—

<i class="timecode">[00:20:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:20:29]</i> **Segun:** —as you can see there. So, if we head over back to the MDN docs again, press the Tab Focus key such that we're in the focused state.

<i class="timecode">[00:20:42]</i> **Ben:** Yes.

<i class="timecode">[00:20:44]</i> **Segun:** And then just click anywhere outside the page. Basically, what you've done is you've blurred. Basically, you tabbed out or you focused out of that element. That takes you back to what I call… back to the idle state where it's like, I mean, no interactions again.

<i class="timecode">[00:21:01]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:21:02]</i> **Segun:** So, if we go back to Excalidraw to model this, we can draw an arrow from focused back to idle by saying that, like, the event here is "Focus Out." Exactly.

So there, we have that event that says "Focus Out." But then… so here, we've been able to sort of, like, model out what happens in these two states. So, we have one more state sort of hanging in there, which is the idle and the dragging — what's happening in the dragging state. Right?

So, how can we get to the dragging state? If we go back to the `<input>` element in MDN docs again, one of the things we see, the only way we get to this dragging state is if we use the pointer to click anywhere and, like, keep holding your mouse, I mean, all the way. But then when you release your mouse, you are back to what I call, like, the focused state, where you can actually put, like, press left and right. But we need to confirm this. So drag along the track, release your — I mean, drag along the track, release your pointer, and press the arrow keys. You see that we are kind of like in the focused state when you finish that interaction.

<i class="timecode">[00:22:20]</i> **Ben:** Yeah!

<i class="timecode">[00:22:21]</i> **Segun:** So, these are actually, like, should I say, like, hidden gems in all these elements, which is why people say, like, "Don't try to make custom elements. Just use the DOM," because, like, there's lots of, like, richness you get from actually using this element. But then, we're doing this for the sake of statecharts so people actually see, like, if you wanted to model this complexity, how can you actually use the statechart to do that as well.

Alright, so let's go back to Excalidraw again and say, like, we can draw an arrow from idle to the dragging state. And I'll call it, like, "Pointer Down." That would be, like, the event which means when we put our pointer or our cursor or mouse down. But I'd like to call it "pointer," just so it's, like, more generic—

<i class="timecode">[00:23:12]</i> **Ben:** Makes sense!

<i class="timecode">[00:23:12]</i> **Segun:** —to the pointer type, right?

So, like, when we go Pointer Down, we're in the dragging state. And when we actually release our pointer, we don't go back to idle. We go to the focused state. So let's draw an arrow from the dragging state to the focused state. 

<i class="timecode">[00:23:31]</i> **Ben:** That is the wrong…

Okay, well, we're just gonna have a wonky arrow for that.

<i class="timecode">[00:23:36]</i> **Segun:** Yeah.

<i class="timecode">[00:23:37]</i> **Ben:** Such is the way!

Yeah, alright. And this is "Pointer Up," I'm guessing? 

<i class="timecode">[00:23:44]</i> **Segun:** Yeah, that is "Pointer Up," exactly.

<i class="timecode">[00:23:46]</i> **Ben:** Yeah.

<i class="timecode">[00:23:55]</i> **Segun:** Nice.

Alright, so this gives us a fair enough idea of, like, I mean, all the different interactions that can happen within this element. So you put your pointer down and you can actually, like, scrub. So in the dragging state, I would just add one more text on there called, like, "Trag Pointer" event.

<i class="timecode">[00:24:17]</i> **Ben:** Yep.

<i class="timecode">[00:24:19]</i> **Segun:** Right, so that is the state we actually, like, get to track the pointer event and, like — I mean the pointermove event, basically. Right, so this is a fair enough idea.

So, I mean, so the key thing here behind statecharts. It feels a little bit daunting to create all these diagrams to understand what's happening, but you get two benefits from doing this. One is you get a high-level understanding of the interactions and events that can actually happen within this component, as opposed to having some React code with useEffect, useState, like, and you actually had to understand the behavior of that system, right? So this is kind of like the overview of, like, let's start with this very simple use case and see how far we can go in terms of, like, modeling.

So one essential — one last piece of statecharts. Again, we talked about two. The first one is a finite number of states. We already mapped that out. The second one is a finite number of events. We already mapped out, like, all of the events in there. And then the third one, I call it, like, data. Basically, like, what piece of data do we need to keep track of as the element transitions between these states, right? So one interesting piece of data is the value it represents, like, while I'm doing all of these interactions.

So what I'll do is, I mean, I'll probably create a circle. Just, like, put it at the center of that—

<i class="timecode">[00:25:41]</i> **Ben:** Yeah.

<i class="timecode">[00:25:42]</i> **Segun:** —of the old piece. And just, like, put in text just for, like, "Value." And I'll also keep track of the step size.

<i class="timecode">[00:25:51]</i> **Ben:** Okay.

<i class="timecode">[00:25:52]</i> **Segun:** Right, so as I'm pressing my arrow left and arrow right keys, by how much do we want to increment or decrement the value? So that's what that represents.

Right, so we can maybe do, like, minimum value, maximum value, and all this stuff, but let's just, like, kind of like stick to value and step size to keep this all simple.

<i class="timecode">[00:26:15]</i> **Ben:** Makes sense!

<i class="timecode">[00:26:17]</i> **Segun:** Alright! So, that's it. So you basically, like, at least have the basic knowledge of, like, how to create a very, very simple statechart. So this is a statechart here that you built. Now, the next thought generally would be, like, "How do I…? What's the code behind this? How do I write some code?" But, like, in the end, I think that this is a much valuable skill to learn, compared to actually, like, just writing all the complex, smart-looking code, because you can hand this over to someone who is just a junior engineer and they can understand almost certainly what's going on, I mean, within the code itself.

<i class="timecode">[00:26:54]</i> **Ben:** And also, something like this, this is something I could hand to, like, a product owner, right? And a product owner might not know, like, ALL of these things, but they're certainly going to be much more able to agree to all of these things than, you know, if I'm handing them a bunch of code.

<i class="timecode">[00:27:10]</i> **Segun:** Exactly. Exactly. And I think they can definitely also contribute to that conversation to say, like, "I think we are missing something here," or "I think maybe we should also have, like, an extra arrow from here to here." At least they can speak the language of boxes and arrows—

<i class="timecode">[00:27:24]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:27:25]</i> **Segun:** —more than they can speak the language of code, so that is definitely something that we… an extra advantage we get from this process. 

<i class="timecode">[00:27:34]</i> **Ben:** Absolutely. 

<i class="timecode">[00:27:35]</i> **Segun:** Cool.

Alright, so now that we've modeled this out, I would say, like, we're kind of done with, like, MDN, but we're gonna keep it open. Let's head over to CodeSandbox to basically, like, write some code.

<i class="timecode">[00:27:50]</i> **Ben:** Good deal!

<i class="timecode">[00:27:51]</i> **Segun:** Right, so from Zag — yeah, from Zag.js, you need to import this createMachine. So you import createMachine, a named import of createMachine from @zag-js/core. 

<i class="timecode">[00:28:07]</i> **Ben:** Okay.

<i class="timecode">[00:28:09]</i> **Segun:** Right, so this function basically is what's used to model the diagram we just created. Right? So that is… so, we're going through the process now to sort of, like, figure out, like, what we wanna do here.

So let's create a constant in the next line called "slider." slider equals, and we call the createMachine function.

<i class="timecode">[00:28:32]</i> **Ben:** Alright.

<i class="timecode">[00:28:34]</i> **Segun:** Alright, so the createMachine() accepts an object in their argument, and this object contains a couple of things, but we're gonna work through that.

One of the things that we looked at is, a state machine has a finite number of states. And we already mapped out a number of states already. So there's one of the keys called "states" this is going to expect in there. And this is an object of, like, each state, right? So create an object. Let's create the first one for idle.

<i class="timecode">[00:29:06]</i> **Ben:** Okay.

<i class="timecode">[00:29:06]</i> **Segun:** So put "idle." Just put an empty object in there. You can use small letters as well, it's fine. Generally, I tend to use, like, all caps for events.

<i class="timecode">[00:29:17]</i> **Ben:** Oh, okay.

<i class="timecode">[00:29:17]</i> **Segun:** Not states.

<i class="timecode">[00:29:18]</i> **Ben:** Yeah!

<i class="timecode">[00:29:19]</i> **Segun:** Yeah.

<i class="timecode">[00:29:19]</i> **Ben:** I like it.

<i class="timecode">[00:29:20]</i> **Segun:** We can kind of like stick to that, yeah.

"idle." And then we create the other ones as well — focused and dragging.

<i class="timecode">[00:29:33]</i> **Ben:** So we've got states object with three states. Each of those states is, like, a property in that object, and so we've got idle, focused, dragging. And currently they're all set to empty objects, 'cause there's not any configuration that's happened for each of those yet. 

<i class="timecode">[00:29:47]</i> **Segun:** Yes, exactly. So before we go ahead to add, like, any of the configurations, above the states property in that object, let's add, like, an "initial." Just type "initial." So you use this to kind of like mark the initial state this component would be in. Right, so you can automatically see that you can actually simulate the component to start from the dragging state or to start from the focused state automatically, but let's just start from the idle state. 

<i class="timecode">[00:30:16]</i> **Ben:** Okay. So for the "initial" property, am I just doing, like, a string with my state name? 

<i class="timecode">[00:30:21]</i> **Segun:** Yeah, you do, like, a string, exactly.

<i class="timecode">[00:30:22]</i> **Ben:** Okay.

<i class="timecode">[00:30:23]</i> **Segun:** Exactly. So you see, like, so that's it. So now, we have a finite number of states and we've marked out the initial state, basically.

<i class="timecode">[00:30:31]</i> **Ben:** Okay.

<i class="timecode">[00:30:31]</i> **Segun:** Right? So, the next thing we want to do is — at least, just for the sake of this demo — we talked about data. We're gonna look at the data and now look at the events. So the data is called "context" within, like, the state machine terminology, so we're gonna add an extra property called "context." And this property will be an object that holds the value.

<i class="timecode">[00:30:52]</i> **Ben:** Okay.

<i class="timecode">[00:30:53]</i> **Segun:** So we can start out the value at 0.

<i class="timecode">[00:30:56]</i> **Ben:** And these are just… these are… we can name these whatever we want, right?

<i class="timecode">[00:31:01]</i> **Segun:** Anything.

<i class="timecode">[00:31:01]</i> **Ben:** This is just things we know we need for our system. Okay.

<i class="timecode">[00:31:06]</i> **Segun:** Exactly, exactly. And then we have the step, right? So the step could be 1 for now. 

<i class="timecode">[00:31:11]</i> **Ben:** Yeah. Okay.

<i class="timecode">[00:31:13]</i> **Segun:** Exactly. Alright, so this is the second piece. And then the third piece, which we're gonna get into now, is the events, right? So how do we model the events in there? 

So let's take a look at the diagram again and start from the idle state. So if you switch back to Excalidraw, we see that in the idle state, there are two events going out of the idle state. There's a Tab Focus event and the Pointer Down event. Right? I think that we should pay attention to this a lot because, like, you can see that, like, every piece of state has like, I mean, a finite number of arrows going out from it. So that means that if you send, like, any other event that is not like, I mean, that's not listed as part of these arrows, the machine is just not gonna respond to that. So that is exactly what I mean when I say a finite number of events and transitions.

<i class="timecode">[00:32:04]</i> **Ben:** Okay!

<i class="timecode">[00:32:05]</i> **Segun:** Right? So let's go back to — so we see that we have already Tab Focus—

<i class="brackets">[alarm starts]

—and then we have the Pointer Down.

[alarm pauses]</i>

<i class="timecode">[00:32:13]</i> **Ben:** Okay. Yeah. So in…

<i class="brackets">[alarm resumes]</i>

<i class="timecode">[00:32:17]</i> **Segun:** Just give me one second on this kinda, like, this sound from here. 

<i class="timecode">[00:32:20]</i> **Ben:** Yeah. I'm trying to—

<i class="brackets">[alarm stops]</i>

Is that…? Hm. Would that be on my end, or is that on your end?

Hey, Brent! Welcome to the stream!

Oh, okay, gotcha. On Segun's end. Gotcha. Yeah, no worries.

And also just wanna give a shoutout in this moment to folks in the chat. We've got Brent in here. I see we've got Florian as well.

Yeah! So what we're doing, for anyone who's just kinda joining us at this moment, we are building a state machine that represents the logic for, like, a range slider input. And so to do that, we've imported a createMachine utility from @zag-js/core. We've given it three things so far, so an initial state, which is the name "idle." We've given it a "context" object that has just some data we need to keep track of. And then we've got a "states" object with… our three states are properties of that. So that's what we're up to so far.

<i class="timecode">[00:33:27]</i> **Segun:** Nice.

<i class="timecode">[00:33:28]</i> **Ben:** Yeah! Welcome back!

<i class="timecode">[00:33:30]</i> **Segun:** Alright! Cool, yeah, let's get to it.

So right now, we start from the idle state. So to model events in the idle state, there's a nested object called "on." Let's say you add on, like, a property called "on."

<i class="timecode">[00:33:43]</i> **Ben:** Okay.

<i class="timecode">[00:33:43]</i> **Segun:** Basically, "on" is an object, right? Just like the browser event system, like onkeydown, onpointerdown. It's just that it starts with "on." Right. And inside this object, then you put events, right? So, let's put the first one. I usually like to use all caps for events just to make it, like, very obvious.

<i class="timecode">[00:34:01]</i> **Ben:** Okay.

<i class="timecode">[00:34:01]</i> **Segun:** So let's say "FOCUS" or "TAB_FOCUS" here.

<i class="timecode">[00:34:05]</i> **Ben:** Yeah.

<i class="timecode">[00:34:05]</i> **Segun:** I think that's consistent with that. Alright, so this will take an object. We'll figure out, like, what to do within this object in there. 

<i class="timecode">[00:34:16]</i> **Ben:** Yep. Alright.

<i class="timecode">[00:34:22]</i> **Segun:** Alright. So in the same way, in a similar fashion, let's just put in all the different events, like using the same pattern. We just go in. The other event is, I think, Pointer Down. Right, so we just, like, put Pointer Down as well.

Alright, and then in… yeah, I think we can definitely just take a quick sweep at, like, the other ones. But before we go into the other states, let's just, like, get into what happens inside these objects and then we can do the other two states.

So let's start with the Tab Focus. So if you go back to the diagram again in Excalidraw, it kind of is more like… like, if you look at the Tab Focus arrow, it goes from idle to focused. So that is more like a "go to focused state," basically. Alright, that does have, like, the synonym of, like, I'm explaining what happens in there. So let's go back to the code and see how do you represent this "go to focused state." Right, so you put a "target" property on there.

<i class="timecode">[00:35:25]</i> **Ben:** Okay.

<i class="timecode">[00:35:27]</i> **Segun:** And the target basically points to the state as a string, so the string representation of the states you're going into. Alright, so we saw in the diagram that it goes to the focused state. Exactly. Alright, and then let's do that, let's do the same for the Pointer Down. 

<i class="timecode">[00:35:42]</i> **Ben:** Alright, and so this is… we know that that's gonna go to dragging. Alright.

<i class="timecode">[00:35:50]</i> **Segun:** Nice. Cool. Alright, so now that we at least understand the basic structure of this, let's sort of, like, put together the other events pretty quickly.

<i class="timecode">[00:36:00]</i> **Ben:** Alright, so "focused" is an object with a nested property called "on." "on," we know we have really only one event, which is Pointer—

Oh, sorry, we're on focused.

<i class="timecode">[00:36:14]</i> **Segun:** Focused, yes.

<i class="timecode">[00:36:15]</i> **Ben:** Yeah. So it's… the only event coming out of focused is Focus Out, so…

<i class="timecode">[00:36:21]</i> **Segun:** Yeah. I think that we should — I think we should maybe, like, think about it some more as well, because even if you have the focus outline on the element, you can still do the Pointer Down event, which means, like, even though it's focused, you can still use the pointer again to actually, like, drag and change the value. So, let's do the focus. I'm just saying we should— we definitely need to add one more arrow to that—

<i class="timecode">[00:36:43]</i> **Ben:** Okay!

<i class="timecode">[00:36:44]</i> **Segun:** —to that state. Exactly.

<i class="timecode">[00:36:45]</i> **Ben:** Yeah, so focused—

<i class="timecode">[00:36:46]</i> **Segun:** We should— we should, yeah. 

<i class="timecode">[00:36:49]</i> **Ben:** Focused needs an arrow — Where…? Oh, there's the arrow. — So, gross, but we're saying we need to go from focused to dragging?

<i class="timecode">[00:36:58]</i> **Segun:** Yes.

<i class="timecode">[00:36:59]</i> **Ben:** Okay. And for this, is this also going to be called Pointer Down? Like, is it the…?

<i class="timecode">[00:37:06]</i> **Segun:** Yeah, yeah, exactly. Same… same event. Yep.

<i class="timecode">[00:37:09]</i> **Ben:** Got it.

Alright. This is gross and becoming unreadable, but…

<i class="brackets">[Segun chuckles]</i>

…you get the point. Cool.

<i class="timecode">[00:37:21]</i> **Segun:** Yeah, I think I will definitely figure out how to, like, bend the arrows or something, but it's okay for now.

Alright, so let's model this out. Focus Out goes back to idle, and then Pointer Down goes back to dragging.

<i class="timecode">[00:37:37]</i> **Ben:** Yep. Alright.

<i class="timecode">[00:37:39]</i> **Segun:** And then we have a bunch of, like, keyboard events. For now, let's just do the arrow left and the arrow right. 

<i class="timecode">[00:37:45]</i> **Ben:** Okay. And… gotcha. These are still in our "on," because even though they're not really transitions, they're still events that we care about. 

<i class="timecode">[00:37:54]</i> **Segun:** Yeah, they're still events we care about, exactly.

<i class="timecode">[00:37:56]</i> **Ben:** Okay.

<i class="timecode">[00:37:57]</i> **Segun:** So, but you want to skip this one for now. Yeah, just put "ARROW_LEFT," "ARROW_RIGHT" in there.

So, the interesting thing about these events is they don't cause a state transition, so they just, like… they just do stuff. They don't really cause the component to transition from, like, any state in general. And most of the time — I mean, in this use case, what they do is they, like, increment the value. So they're actions that are actually, like, carried out in general.

So, let's try to see if we can model that here. So within the ARROW_LEFT and ARROW_RIGHT keys, you can pass in something called "actions."

<i class="timecode">[00:38:32]</i> **Ben:** Okay, and… 

<i class="timecode">[00:38:33]</i> **Segun:** Right, so "actions" is a property in there. So let's just put a string representation. Let's just call this "decrementValue." Just put a string there called "decrementValue."

<i class="timecode">[00:38:45]</i> **Ben:** Okay.

<i class="timecode">[00:38:46]</i> **Segun:** Yep, and then arrow right would increment the value.

<i class="timecode">[00:38:51]</i> **Ben:** Okay. That is "incrementValue." Okay. 

<i class="timecode">[00:38:58]</i> **Segun:** Exactly. So, we're gonna… so, for the dragging state, we can basically just add the events for that as well.

<i class="timecode">[00:39:10]</i> **Ben:** Okay. We add another "actions" into our dragging and this time…

<i class="timecode">[00:39:14]</i> **Segun:** And then we have the "on" key.

<i class="timecode">[00:39:15]</i> **Ben:** Oh, right.

<i class="timecode">[00:39:16]</i> **Segun:** You know, it's a state of its own, so it starts with the "on" key.

<i class="timecode">[00:39:19]</i> **Ben:** Yep. "on."

<i class="timecode">[00:39:21]</i> **Segun:** "on," yeah. Then we sort of, like, put all, like… I think it's "POINTER_UP" or something like that. 

<i class="timecode">[00:39:28]</i> **Ben:** Okay. I see what we're doing, yeah. Starting all the way from the… POINTER_UP.

<i class="timecode">[00:39:32]</i> **Segun:** Yeah.

<i class="timecode">[00:39:33]</i> **Ben:** And that's gonna take us to focused.

<i class="timecode">[00:39:35]</i> **Segun:** Focused — yeah, exactly.

<i class="timecode">[00:39:38]</i> **Ben:** Okay.

<i class="timecode">[00:39:41]</i> **Segun:** Then what other events did we see there? I think that is the only one. 

<i class="timecode">[00:39:48]</i> **Ben:** Yeah. So we're gonna need—

<i class="timecode">[00:39:50]</i> **Segun:** That is the only one out of dragging. 

<i class="timecode">[00:39:52]</i> **Ben:** Yeah.

<i class="timecode">[00:39:52]</i> **Segun:** So we're gonna talk about that, like, Track Pointer. What exactly does that do? So's that sort of like… I call this, like, a subscription or an activity, because it's a long-running activity, compared to a single action like incrementValue or decrementValue, right?

<i class="timecode">[00:40:11]</i> **Ben:** Mm.

<i class="timecode">[00:40:12]</i> **Segun:** So, I mean, the actions are, like, once… like, they just execute once. Just, like, fire and forget.

<i class="timecode">[00:40:17]</i> **Ben:** Okay.

<i class="timecode">[00:40:17]</i> **Segun:** Which means, like, you increment the value once and that's it. But then the, the, the one for the dragging state is called Track Pointer or Track Pointer Move, largely because, like, they actually, like, run for a long time. They add an event listener to the document. They remove an event listener from the document, right? So that is what I call, like, something that you subscribe to or an activity, basically.

Right, so there's a key in every state. Aside from the "on" key, the other property you can pass in is called "activities."

<i class="timecode">[00:40:48]</i> **Ben:** Okay.

<i class="timecode">[00:40:48]</i> **Segun:** Alright, so you can just, like… outside the "on" key, you can pass in "activities." So let's just put a string called "trackPointerMove." Right. So that just puts an activity. What activity would you like to do within this?

<i class="timecode">[00:41:05]</i> **Ben:** Okay!

<i class="timecode">[00:41:08]</i> **Segun:** Alright. So, I mean, I think, like, for the sake of time, what we would do is let us try to get the arrow left and arrow right functionality working, right? So, I'm gonna come in here into the — hold on one second — into the CodeSandbox, down here, if you scroll all the way down.

<i class="timecode">[00:41:33]</i> **Ben:** Yep.

<i class="timecode">[00:41:34]</i> **Segun:** Alright, so there is a second, like, argument that goes in there, which is an object. Alright, so in here, within this object, what we pass in there is, like, the implementations of all of these different strings.

<i class="timecode">[00:41:49]</i> **Ben:** Okay!

<i class="timecode">[00:41:51]</i> **Segun:** Right, so you see, we set activities, we set actions. So like, this is where you actually get to specify, like, what do they do effectively, right? So let's kind of like dive in here in this implementation. So let's go into the object and add two properties called… one is called "actions." 

<i class="timecode">[00:42:11]</i> **Ben:** Alright. "actions."

<i class="timecode">[00:42:13]</i> **Segun:** "actions" is an object. 

<i class="timecode">[00:42:16]</i> **Ben:** Alright.

<i class="timecode">[00:42:17]</i> **Segun:** And then we'll put in, like, decrementValue — a function called decrementValue and an incrementValue function. These will serve as the implementations for this, for the strings above.

And then the other one is "activities," just like you'd guess. So the other key you can put in there is "activities."

<i class="timecode">[00:42:42]</i> **Ben:** Alright, yep. 

<i class="timecode">[00:42:44]</i> **Segun:** Yep. And that also takes the trackPointerMove.

Cool. Nice. So let's get into… for the sake of time, let's get into, like, what the implementations here would do, right? So, I'm gonna just type it in here. So every action basically provides you the context, which is that data that you put up there when we started writing this. So, that data that included the value and the step? That is actually what is included within this decrementValue. So, I mean, all of these implementations get the context. And if you scroll all the way up, you see that the context is actually an object. If you can scroll up now, let's just take a look at that context one more time. The context includes the value and the step size, right?

So let's just start with this basic implementation. And what we do here, when you see decrementValue, basically what this means is you grab the context of value, and you're basically decreasing the value.

<i class="timecode">[00:43:56]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:43:58]</i> **Segun:** And that is as far as, like, implementation goes. And then the incrementValue is basically, like, incrementing the value. And that is as far as, like, incrementValue goes. It may seem like… I mean, this is, like…

This looks, like, so simple, but, like, literally this is the core idea or core concept behind the state machine itself.

<i class="timecode">[00:44:20]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:44:23]</i> **Segun:** Alright. I mean, so let's kind of like test out… let's test out the keyboard interactions. I mean, let's just at least build out this component and just, like, put some interactions around this. Alright, so to make this, like, super fast, we need to build out a UI. So right now, we've spent so much time on the logic. It's time to kind of, like, do, like, a little bit of UI design work here, right? So let's kind of like just, like, get rid of all this.

<i class="timecode">[00:44:52]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:44:52]</i> **Segun:** I'm gonna just leave, like, a `<div>` here. Let's call this… we give this an ID of the… let's just call it like the slider root.

<i class="timecode">[00:45:05]</i> **Ben:** Okay!

<i class="timecode">[00:45:05]</i> **Segun:** And then we basically just have, like, one… another `<div>` in here with ID is the slider thumb.

Right. I'm not sure if you need, like, the track itself, but let's just add one more part here. I'll call this the slider range or the actual indicator for the slider value.

<i class="timecode">[00:45:32]</i> **Ben:** Okay!

<i class="timecode">[00:45:33]</i> **Segun:** Alright, so let's just try and style these so that there's something actually, like, on the screen, instead of just looking, like, super weird. I'll head over to, like, the CSS, the styles.css file. And then I'm just gonna add a couple of styles in here.

So let's do the slider root. I think maybe instead of calling it the slider root, let's just call it the slider, since it's the container for all of that. So we do, like, the slider, style that by ID. Let's just set, like, a width for this pretty quickly. So, since this is not exactly, like, a CSS stream, we're just gonna, like, go through—

<i class="timecode">[00:46:16]</i> **Ben:** Right.

<i class="timecode">[00:46:17]</i> **Segun:** —all of, like, the different things in here. We can set a background of "lightgray." Figure out, like, the contrast later on. And then we can set, like, a border-radius in here. Let's just say, like, 4 pixels so it looks rounded.

<i class="timecode">[00:46:37]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:46:38]</i> **Segun:** And then we'll come over here to the slider range, right? So let's try and style the slider range. Alright, so this would be, like, a background of… let's just say "blue" for now. Alright, and this would also have the same height as the parent. The only difference is we're gonna have to control the width of this element. So just for demo purposes, I'll put the width is 40% so we can actually see that it looks like some sort of, like, range that is ready to roll in there. I'll just add the "overflow: hidden" so it clips out, like, the edges and the border-radius shines through in there.

So, let's switch over to the slider thumb. So how do we style this slider thumb? Alright, so I'll add in, like, a width property. So let's just say this is 24 pixels. And then let's say this is 24 pixels as well. Add in a background-color, same as blue. And then figure out why this `<div>` is not showing up on screen. So we've got this slider, and now I've got this slider thumb.

<i class="timecode">[00:48:03]</i> **Ben:** Is it showing up after the overflow? Is that what's happening? 

<i class="timecode">[00:48:09]</i> **Segun:** Oh, yeah, yeah, yeah, true. That may be it.

<i class="timecode">[00:48:11]</i> **Ben:** Yeah, there it is.

<i class="timecode">[00:48:11]</i> **Segun:** So let's gonna move the border-radius over to the range. That's a good point. And then the border-radius, we can just set this to 999 to make it, like, perfectly rounded in there.

So now we need to figure out how do we position this slider in there somehow. So the first thing I'll do is I'll just use, like, set "position: relative" on the slider itself and then set "position: absolute" on the slider there.

<i class="timecode">[00:48:47]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:48:49]</i> **Segun:** Or maybe I could… I could definitely also think about, like, just leveraging, like, the flexbox model as I'll absolutely position that. But then we have "position: absolute" in there. We can set, like, the top. Let's see… let's set the top to, like, 50%. And then we check, like, again. And then I think, like… what was that technique again to sort of, like, center stuff? We do translate. Let's do translate here. Y, and give it 50%.

<i class="timecode">[00:49:23]</i> **Ben:** I don't think it needs the quotes, right? 

<i class="timecode">[00:49:30]</i> **Segun:** Oh, yeah. I'm so used to CSS-in-JS.

<i class="timecode">[00:49:34]</i> **Ben:** Ah, I gotcha, I gotcha.

<i class="timecode">[00:49:34]</i> **Segun:** Yeah. Awesome.

Right, so now what all we need to do is basically, like, change this, like, left value. So if we do left of, like, 20% it basically, like, goes like that.

<i class="timecode">[00:49:48]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:49:49]</i> **Segun:** So now we have set up, like, the basic, like, bare bones of, like, this styling structure.

<i class="timecode">[00:49:55]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:49:56]</i> **Segun:** So the next thing I'm gonna do here is I'll create, like, this CSS variable at the top to actually, like, I mean, control this offset.

<i class="timecode">[00:50:06]</i> **Ben:** Okay.

<i class="timecode">[00:50:06]</i> **Segun:** I'll just call it "--offset" for now. I'll make that value 40%. And then I use that variable to control the width here. So I just call that var and grab the offset. Then I use the same variable to control the left positioning of this thumb, right? So I created that var and make that also the offset.

Right, so now we get, like, the slider component in there, but you notice that, like, it's, like, super, like, far away. It should be, like, I mean, at the center there. So we can definitely, like, adjust the left position based off of the width value itself. So, I'm launching the calc() there to sort of like subtract out, like, just that width right there so we have that, like, looking kind of close. So how I got the 12 pixels is, the width and height is 24 pixels so, like, just use that half of that to, like, offset that to the center.

So that gives us, like, the… that leaves us with, like, a single CSS variable that we use to sort of, like, control the position of this. And you can see that this is already getting us pretty close to the value. So if I say it's 20%, we can see this slider goes to 20% automatically.

<i class="timecode">[00:51:23]</i> **Ben:** Yep.

<i class="timecode">[00:51:23]</i> **Segun:** So in the end, all we need to do is grab this CSS variable in JavaScript and update the value and we'll show that the component works correctly.

Alright, so now let's get into, like, the accessibility semantics in here for the sake of time. Right, so in the slider here, it kind of depends on what we want to refer to as the slider itself, because these are, like, different parts. The slider, the slider range in here, the slider thumb. By default, the browser uses the container as the slider. Alright. But then, I mean, in the ARIA specification, they also recommend that you could use the thumb itself as the indication of value—

<i class="timecode">[00:52:07]</i> **Ben:** Okay.

<i class="timecode">[00:52:08]</i> **Segun:** —for the slider. So it kind of depends, but I mean, what I'll do is, I'll stick to using the container in this use case. So what I'll do is I'll set the role of this element to "slider." Again, these are, like, accessibility semantics in here. And then I will set values like the aria-valuemin, which is the minimum value. And then we have the aria-valuemax, which is the maximum value. For now, let's just use 100 in there.

<i class="timecode">[00:52:40]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:52:41]</i> **Segun:** And then there's an extra property for accessibility called aria-valuenow, which actually maps to, like, the current value, I mean, of the slider itself. 

<i class="timecode">[00:52:55]</i> **Ben:** Okay. We can get this directly from our machine, right? 

<i class="timecode">[00:52:59]</i> **Segun:** Yeah, exactly. So we're gonna figure out, like, how do we, like, get this directly from our machine? So for now, let's just put in 40.

<i class="timecode">[00:53:04]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:53:05]</i> **Segun:** And then we'll figure out, like, how the machine plays that role in there.

To make this component focusable, we need to— we're gonna add, like, a tabindex of 0, assuming it's not disabled, of course. If it's disabled, then we can change— dynamically change this value of this property there.

Another property we can use is aria-valuetext, which represents, like, the textual value of that slider. So even though the 40 is just a number, you need to see something like "The quantity you've now selected is 40." So that actually gives you more, like, human-readable context to our value.

<i class="timecode">[00:53:41]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:53:41]</i> **Segun:** For now, we can skip that. We'll come back to that. Let's just really move on from here.

So, how do we use this machine logic that we built in this component? So if you test now, you see that you can actually, like, focus on the element itself—

Yeah.

—with the keyboard, which is amazing. Now we need to figure out, like, how do we like increment or decrement the value using the arrow keys, 'cause nothing is happening right now. So let's connect that to the machine, right?

So to connect that to the machine, there there's a hook called useMachine. So, you can import this hook at the top. Let's import the hook from @zag-js/react. Again, the main essence of this is, like, you write your logic in a framework-agnostic way, and then you integrate your logic into a framework. So we have @zag-js/react, we have @zag-js/vue, we have @zag-js/solidjs, depending on the framework that you use.

<i class="timecode">[00:54:40]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:54:41]</i> **Segun:** Right? So now that we have the useMachine, I'm gonna put, like, all of that slider logic that we just built inside that. So now, it's kind of primed and ready for React — React's system of reactivity, basically.

Alright, so let's look at this. If you go all the way here, what this gives us is two things. I call you the "state" and "send," but I will call it "dispatch" just to help people get more familiar with this, right? So, "state" basically represents the current state of the machine, and the current state includes the value — like, is it in idle state, dragging state… — and also the context, which is, like, the data that we looked at, the value and the step size and stuff like that.

<i class="timecode">[00:55:24]</i> **Ben:** Okay.

<i class="timecode">[00:55:24]</i> **Segun:** So, that is what it is. "dispatch" is basically the function you use to send events to the machine. We looked at all the possible events that you could send to the machine: FOCUS_OUT, POINTER_DOWN, ARROW_LEFT, ARROW_RIGHT. Those are possible events.

<i class="timecode">[00:55:38]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:55:38]</i> **Segun:** Now with these two properties, you can now, like, connect that to your UI. Like, I mean, just, like, hook into the browser event system and use that to send events to the machine itself. Alright. So down here we'll do, like, "onFocus." Yeah, what we wanna do here on focus basically is we just wanna dispatch the TAB_FOCUS event. We talked about that earlier. So basically when you focus on this element, you just dispatch that TAB_FOCUS event in there. And then the browser event system has, like, an onblur, basically, which means, like, when this component loses focus — let's say when you click outside or you press the Tab key outside. I think the name of that event is called FOCUS_OUT.

<i class="timecode">[00:56:29]</i> **Ben:** That seems riiight. Yes, it's FOCUS_OUT. 

<i class="timecode">[00:56:34]</i> **Segun:** Alright, so we put, like, FOCUS_OUT there. So now we've handled, basically, the different events. So now, we see that at this point, all we are doing is basically dispatching events to the machine. We're not handling any complex logic within our UI in general.

<i class="timecode">[00:56:51]</i> **Ben:** What I'm actually gonna do, just to show this off, is I'm gonna stick a `<pre>` tag at the bottom, and I'm gonna do JSON.stringify(). And we'll pass it the state we got from useMachine and then null, 2. And this way, we can actually see in our CodeSandbox, the current value of the state object. And so—

<i class="timecode">[00:57:17]</i> **Segun:** Exactly.

<i class="timecode">[00:57:18]</i> **Ben:** Now, if I focus on this, you can see that, like, we had an event which was TAB_FOCUS, and… 

<i class="timecode">[00:57:25]</i> **Segun:** You can just refresh. You can just refresh the page again. Yeah, this gives you that. Exactly.

So you see that you get that event, TAB_FOCUS and FOCUS_OUT, basically being called when you press the Tab key. And then you can see that there's, like, the value and the previous value. So that tells you, like, the state this was actually in before—

<i class="timecode">[00:57:45]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:57:45]</i> **Segun:** And the state it is now. And then you can see things like the next events that can actually happen at the current state.

<i class="timecode">[00:57:53]</i> **Ben:** Oh, okay! So these are all the current, like, valid events that could happen that won't be ignored.

<i class="timecode">[00:57:59]</i> **Segun:** Exactly. That won't be ignored, exactly. So that means if you send any other event aside from this, it's just gonna be ignored basically—

<i class="timecode">[00:58:05]</i> **Ben:** Yeah.

<i class="timecode">[00:58:06]</i> **Segun:** —within the machine.

So now let's go and, like, handle, like, the keyboard events in here. So I'll invoke the, like, keydown. I'm grabbing the event and I'll just, like, check on, like, the event.key.

<i class="timecode">[00:58:20]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:58:21]</i> **Segun:** The event.key property. So let's just say, like, if the event.key is "ArrowLeft," what we do here basically is to dispatch the ARROW_LEFT event—

<i class="timecode">[00:58:38]</i> **Ben:** Okay.

<i class="timecode">[00:58:39]</i> **Segun:** —to the machine. Alright. And then, I mean, again, we can switch on on the "ArrowRight" and then just say, like, dispatch the ARROW_RIGHT event.

Now, all we've done is basically hook into the browser system — event system — and sort of, like, use that to send events to the machine itself. And now let's see, like, what happens when you do the interactions. 

<i class="timecode">[00:59:07]</i> **Ben:** Yeah. I'm looking at the value in the context and it is, you know, it's going up and down. 

<i class="timecode">[00:59:15]</i> **Segun:** Exactly. So now we see that the context value is actually, like, now changing. Now we see that, like, all of the logic and all of the things are actually happening within the machine, and all you just need to do is just glue that to your UI and it just works, right? So now let's just, like, see how we can make this work correctly, the way it's designed.

<i class="timecode">[00:59:35]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:59:35]</i> **Segun:** Or currently set up. So, the first thing I'll do is to, if you scroll all the way up here. Just scroll up in little bit. You'll see me there. I'll grab the state.context.value, because I know that this actually gives me the value itself. So I mean, I grab the value from here. Now let's try to convert that value to a percentage. So what I'll do here is basically divide that value by 100. Again, I'm gonna assume that the max is 100, so it's kinda okay. I'm gonna divide the value by the max to give us that, like, percentage in there.

Alright, so what we're then gonna do is, remember that in our CSS, we actually added this, like — if you switch over back to the CSS, you see we add this, I mean, the offset variable. So now, we need to control this offset variable—

<i class="timecode">[01:00:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:00:29]</i> **Segun:** —directly from the machine itself. So if you come back here, we're gonna just like do… offset is basically the percent. I'm just gonna add a percent sign to that, basically. So that gives me the offset. And now, to control this within the machine, I'll add, like, a style property, and then just do, like, the offset variable. And then assign that value to the offset.

<i class="timecode">[01:01:00]</i> **Ben:** Okay.

<i class="timecode">[01:01:01]</i> **Segun:** From here, I will probably just add in padding to the entire app, just so we have that, like, little bit of space in there.

<i class="timecode">[01:01:11]</i> **Ben:** I think… so, the value's already an integer, so what the percent stuff has done is basically made it like when we have the value 23, it's setting it to 0.23% overall. I think…

<i class="timecode">[01:01:26]</i> **Segun:** Oh, yeah, yeah, yeah.

<i class="timecode">[01:01:27]</i> **Ben:** I think just we need to do… let's… I'm just gonna…

<i class="timecode">[01:01:30]</i> **Segun:** Yeah, yeah, for sure.

<i class="timecode">[01:01:31]</i> **Ben:** Yeah.

<i class="timecode">[01:01:32]</i> **Segun:** Oh, yeah, yeah, yeah. That's awesome.

<i class="timecode">[01:01:34]</i> **Ben:** Yeah. 

<i class="timecode">[01:01:35]</i> **Segun:** Awesome.

<i class="timecode">[01:01:35]</i> **Ben:** I'll just do that real quick.

<i class="timecode">[01:01:36]</i> **Segun:** Yeah, let's do that.

<i class="timecode">[01:01:38]</i> **Ben:** And that way… that way we'll be able to, like, more properly see.

Refreshing. Ooh, it's transpiling!

Okay, yeah. So now… yeah. Now it actually kind of moves at a scale we could expect. 

<i class="timecode">[01:01:58]</i> **Segun:** Exactly. So now, let's try to sort of, like, factor in the step size here, because how we've done so far in our machine is just to increment that value by 1.

<i class="timecode">[01:02:10]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:02:10]</i> **Segun:** So I think the better thing to do is to change that expression to, like, "context.value = context.value + context.size." Exactly. So we need to sort of put… the context.stepSize. Yeah, so you have, like, context.value.stepSize. It should be context.stepSize. 

<i class="timecode">[01:02:31]</i> **Ben:** Oh, it's a real — oh, oh. I gotcha, yes. 

<i class="timecode">[01:02:33]</i> **Segun:** Yeah, yeah. 'Cause that's an object of those two properties. Exactly.

<i class="timecode">[01:02:37]</i> **Ben:** Okay, yes.

<i class="timecode">[01:02:38]</i> **Segun:** Alright, so now let's set up the context. Let's set this up to increment by 10 instead of 1 so it feels a bit more interesting. And now we can sort of, like, focus and we can, like, increment the value by 10. If you just, like, refresh the page on CodeSandbox. 

<i class="timecode">[01:03:00]</i> **Ben:** Yeah, it's hopping up 10 at a time. Awesome. 

<i class="timecode">[01:03:03]</i> **Segun:** Exactly. So this kind of, like, gives us, like, the general feel of actually, like, building, like, interactive components, right? For the sake of time, we could definitely go into, like, the pointer events and set up the dragging state. But I mean, I could maybe, like, just touch on that briefly if you're interested.

But the main idea here as you've seen is that, like, the entire "slider" variable on line 5 is completely framework-agnostic, and the only time it actually interacts with your framework is in line 65, where you call the useMachine hook.

<i class="timecode">[01:03:36]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:03:36]</i> **Segun:** And then every other thing in that it is left to you. The UI is left to you, and you just, like, handle whatever use cases you have within your UI. 

<i class="timecode">[01:03:45]</i> **Ben:** Absolutely. And this means that, like, our logic, like… we could put this slider machine — I'm guessing we could put this just in a shared library that, like, you know, my team has access to—

<i class="timecode">[01:03:57]</i> **Segun:** Exactly.

<i class="timecode">[01:03:58]</i> **Ben:** —and we could use this in our React apps, in our Vue apps, in web components and stuff like that, just so long as there's that bridge.

<i class="timecode">[01:04:06]</i> **Segun:** Exactly. And that is literally what Zag.js is. Zag.js is that collection of, like, logic that you can actually bring into your application and style automatically. 

<i class="timecode">[01:04:18]</i> **Ben:** Gotcha. Very cool! That is awesome. And I'm just gonna go now to the Zag homepage and take a look. 'Cause, you know, the dream here, right, is that, you know, I, Ben Myers, don't need to know all of the slider states to have a slider machine, right? Like, 'cause you're doing that. You're you're handling that.

So like, I'm on the Zag homepage. I'll go put in a link to the introduction in the Twitch chat there. But like, on the left hand side, I can see a nav with a bunch of, like… I'm guessing these are just basically the machines more or less. 

<i class="timecode">[01:04:53]</i> **Segun:** Yeah, those are the machines. Exactly.

<i class="timecode">[01:04:55]</i> **Ben:** So I could go to "Slider" or "Range Slider," yeah. And we can see, like, this is implementing what we've just done.

<i class="timecode">[01:05:03]</i> **Segun:** Exactly.

<i class="timecode">[01:05:04]</i> **Ben:** Just only a lot more. 

<i class="timecode">[01:05:07]</i> **Segun:** Exactly. This is literally all there is. And we just basically put that within a package called @zag-js/slider. You can install that and use that automatically.

I think what we do, I mean, other than what we've just seen today is all of the event handlers that we had to attach to the components, we do that automatically as well from the properties.

<i class="timecode">[01:05:27]</i> **Ben:** Mm!

<i class="timecode">[01:05:27]</i> **Segun:** So you don't have to think about like, "Do I attach it to onkeydown or onkeyup?" What we do basically is to share — give you access to an object, and then we just tell you to spread that object onto your element. And when you spread that object, we attach the correct attributes, the correct event handlers automatically so you don't have to think about them. So your main goal now is just build the UI, and just that's it. 

<i class="timecode">[01:05:55]</i> **Ben:** That's awesome.

This has been really cool. Unfortunately, we're a little over time, so I wanna start wrapping up. But before we do, I just wanted to ask, is there something… like, what are you working on that, like, you're really excited about? Or, like,what do you think folks using Zag should get excited about?

<i class="timecode">[01:06:17]</i> **Segun:** Yeah, I think that, like, one of the things that, like, people using Zag should be excited about is the fact that, like, one, it works across all frameworks. Like, majorly. Like, anywhere JavaScript can work, it can work in there. So right now we have support, as you can see, for Vue and SolidJS automatically, like, out of the box. So, like, we're basically using the same set of machines and actually, like, I mean, giving you code snippets of how you can share this across frameworks.

And one of the things we are also doing is to help you visualize what is going on behind the scenes. So if you scroll all the way up, there's a little, tiny button on the website called "Visualize Logic." If you click on that button, you basically get sent to, like, a website that sort of, like, shows you, like, the logic that we have behind this slider component.

<i class="timecode">[01:07:03]</i> **Ben:** Oh! Okay!

<i class="timecode">[01:07:04]</i> **Segun:** Right? So this is, like, no, we're not trying to hide some sort of implementation from you. Basically, you see, like, the logic that's going on. And you can see that some of these are pretty similar to what we built. You can see the ARROW_LEFT, the ARROW_RIGHT. You can see POINTER_MOVE and POINTER_UP in there as well. So you can see there's some sort of similarities between what you've just built and the actual production code itself. 

<i class="timecode">[01:07:26]</i> **Ben:** That's awesome. Oh, I really love that, and I'm willing to bet this is built with, like, web tech that's probably a little more screenreader-friendly than our humble little Excalidraw canvas drawing. 

<i class="brackets">[Segun chuckles softly]</i>

I bet. That's awesome. 

Hey, great work with this. This is super cool, and I'm looking forward to seeing more from this as time goes on. 'Cause we were kind of talking beforehand, right? And like, one of the core things about Zag is that, like, you don't really need to use Zag directly. Like, it's entirely possible that component libraries — like, especially Chakra UI but, like, any component library really — can pull in Zag. And so you might be using Zag without even really knowing it, right? Like, this could blend into anything.

<i class="timecode">[01:08:20]</i> **Segun:** Exactly.

<i class="timecode">[01:08:20]</i> **Ben:** It can become a part of anything. All will subsume Zag.

<i class="brackets">[Segun chuckles]</i>

That's awesome.

Alright! Well, hey, thank you so much for your time. I'm gonna send people to your Twitter. Go follow Segun and just give him that Some Antics love, 'cause he's done a fantastic job here, I think we can all agree.

Stick around, chat. We are going to raid. Also, while you're following people on Twitter, go follow Some Antics on Twitter. That way you'll keep apprised of all the streams going on. Next week, we've got Anthony Campolo returning to the stream. He's gonna be showing how to deploy to the decentralized web using the InterPlanetary File System. I have no clue what a whole lot of that means, and so I'm super, super excited to be learning more.

And yeah. Y'all, stick around. We will find someone to raid. But thank you all for being here, and have a great rest of your Tuesday. Bye, y'all!