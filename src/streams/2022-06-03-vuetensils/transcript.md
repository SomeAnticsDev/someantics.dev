<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all. Happy Friday. Welcome to Some Antics, a weekly show about building great user experiences for the web, with a focus on accessibility and core web technologies. I'm Ben Myers. Today I'm joined by Austin Gil! Austin, welcome!

<i class="timecode">[00:00:19]</i> **Austin:** What's up?

<i class="timecode">[00:00:20]</i> **Ben:** It's great to have you on this. We've kind of like, sort of met several times just over the past few months because you stream, I stream we've both kind of been in each other's chats.

But it's great to actually have you on Some Antics! For those who haven't seen you around yet, would you like introduce yourself? 

<i class="timecode">[00:00:42]</i> **Austin:** Um, sure! My name is Austin. I work at a company called Akamai. It's a really big CDN web security company. It also does edge compute, it's really cool. And I also do a lot of work on my free time with Vue and some accessibility stuff, and I maintain a library called Vuetensils. And I have a really cute dog named Nugget.

I don't know. 

<i class="timecode">[00:01:14]</i> **Ben:** Alright. The Nugget part is of course the most important part, the most important "Nugget" of information, if you will. Um, yeah, so I honestly don't have a whole lot of experience with Vue. So maybe even before we kinda dive into this, maybe... maybe you can help me understand, like what appeals to you about Vue? 

<i class="timecode">[00:01:37]</i> **Austin:** Yeah, yeah! We can kind of look at the landscape of what's going on there. So Vue is going to be a JavaScript framework, very similar to React, follows the same sort of, um... "Virtual DOM approach" of building something out with JavaScript, doing a diff and only re rendering the parts that have changed, right.

Which is really interesting, and there's the big ecosystem around it. There's whole, meta frameworks for, server side rendering stuff, and yeah, it's really cool. I think that the difference, well, one of the big differences between React and Vue are going to be that Vue leans really heavily on a... like, transpile-time transformation.

So if you've done any work with, or if you've heard of Svelte or Astro, these are frameworks that kind of introduce their own syntax for writing things. So in Vue, the common pattern is having a file with a ".vue" extension, and that allows you to write what's called single file components where you define your logic in a script tag, you define your templating in a template tag and you define your styles in a style tag. 

And then Vue's compiler kind of takes that code, transforms it into JavaScript, that then looks a lot more like the same code that would come out of React after the JSX transpilation. Um... so yeah, what do I like about it?

I think that having that transformation and the fact that you can stay away from JSX means that it looks a lot more like platform-level primitives, like HTML and CSS. So yeah, and it has a, it's like, it's sort of like HTML with superpowers, I think.

<i class="timecode">[00:03:34]</i> **Ben:** That's, I think that's a lovely way to think about it.

And so you've built a component library for Vue called Vuetensils. What was the motivation for that? 

<i class="timecode">[00:03:45]</i> **Austin:** Yeah. So this is, this is gonna be interesting because it's going to be something that really is not going to appeal to the majority of developers I'd say. But to the ones that it does, it's, in my opinion, like really, really cool.

So what happened was the sort of backstory here, was I've worked at a few companies and worked on several different projects, many of them being Vue. And what happens when you move from one project to the next is you did something in the previous project that was really, really cool, and you want to re-implement that same thing in the new project. But all of the projects that I've worked on have been, uh... had sort of a, a more bespoke style, so unique appearance and design and...

<i class="timecode">[00:04:29]</i> **Ben:** The brand

<i class="timecode">[00:04:30]</i> **Austin:** ... with that... What's that?

<i class="timecode">[00:04:32]</i> **Ben:** The brand

<i class="timecode">[00:04:33]</i> **Austin:** Yeah, yeah, they have their own brand. And so you can't really take the entire component that you used on one project and reimplement it in the new one without dropping all the styles. So I did this enough times, building some of the most common things like, uh, little side drawer, widgets, or dialog, like the dialog is a really good component.

A really good example is I rebuilt the dialog so many times that eventually it turned into just kind of copying and pasting this one foundational thing, and then putting that into the new project and then just applying the styles that I wanted to apply. And in addition to that... I spent some of my career caring about accessibility and trying to do things the best way would not call myself the best accessibility expert or advocate out there, I make a lot of mistakes still.

But having all of those things kind of taken out of my learnings and taken off of my research and put into a single component that I can then implement wherever, means I don't have to keep that stuff in my head anymore.

<i class="timecode">[00:05:41]</i> **Ben:** Yeah!

<i class="timecode">[00:05:41]</i> **Austin:** So that's sort of the background on how it started. It was just a GitHub repo that eventually... I was like: well, instead of copying from a project to a project, let me just take the foundational pieces and put them into a repo that then I can copy paste from and update. And then I realized that maybe other people would want that, or more importantly, I kind of want an easier way to consume that...

So decided to learn how to publish an NPM package and do all that song and dance. And that's, that's where it came, you know? And then I had to come up with a catchy name for it.

<i class="timecode">[00:06:17]</i> **Ben:** And the utensils was boring. So, I love... I love the philosophy of like: oh, I've done this enough times where it's like, I'm just gonna put this out as a utility. And you mentioned like saving yourself time.

But I think one of the helpful things about component libraries, like these that have, you know, things like accessibility built in from the start is: it reduces the context that the people consuming the library need to know. Like, this is one of the things I love about design systems, right?

The designers and the UX folks. They can encode requirements and expectations and behaviors and consistency into the design system layer. And then that gets implemented in the component library layer in a way that anyone who uses it doesn't have to know every single little tidbit that went into it.

They just have to kind of, so to speak, follow the rules, or just use the component out of the box. And it "just works", for the part.

<i class="timecode">[00:07:21]</i> **Austin:** Yeah, yeah! I mean, I've gone through my different phases of accessibility advocacy where... you know, at some point... <i class="brackets">[laughs]</i> I think there's probably a common pattern, where you don't know anything, and so you're probably doing everything wrong.

And then you start learning about accessibility and it's like: oh my gosh, all of the sins of my past are coming back to haunt me. And then you kind of have to get over that because... I mean, that's how growth works, right. So then you kind of learn things and then you overdo it...

Or at least I overdid it. So it's like: oh, everything has to have a role now, and every whatever. So every single element needs its own aria-label and you just like probably make it a worse experience for people, and then... so you kind of like, rope it back in and eventually get to the point that it's like:

Okay, I kind of know some tried and true patterns. I know... uh, I know when I start to get that sort of like tingly feeling that this may not be the most accessible thing. So I might not even know the answers, but I kind of know some patterns to recognize, have like red flags and, and I need to look at that, right.

And I don't even know where I was going with this... with this point. <i class="brackets">[laughs]</i> But I guess I'm at the point now... oh yeah, yeah, the journey! So throughout that journey, I've gone through phases where it's like... you know, you see some PRs made and you have to make comments about: oh, this is probably not the best, most accessible way.

And then maybe you get into writing blog posts and you get into like, maybe yelling at people on Twitter... not necessarily yelling at people, but you know, trying to be more vocal, and putting as much energy into accessibility as you can, because advocating for accessibility, in my experience feels a little bit different, because there's... there's sort of a moral side to it as well, right.

It's different than advocating for performance or budget or some of the other things. I'd say equally as important, but there's also kind of this moral issue that I experienced. Like: no, this is critical. If it's not accessible, it's not finished, right.

<i class="timecode">[00:09:38]</i> **Ben:** Mm-hmm

<i class="timecode">[00:09:40]</i> **Austin:** And it.. I would have like personal feelings associated with that, I guess.

So then, you know, maybe start getting a little spicy on Twitter and say like: oh, this is bad because it's not accessible. Um... and in reality, like I've kind of gotten past that to the point where... maybe my soul has just been crushed down to the point that it's such a, it's like a losing battle, 'cause you want, you see the WebAIM hundred or top million websites and check their accessibility score.

And every year it just gets worse and worse. So yeah, it kind of feels like futile at some point, but I've come around. So where I'm at today is kind of, to touch on the point that you made that... to get people on board with accessibility, the easiest thing you can do is: have them not have to think about it at all.

Right? So that's where component libraries come in... If you have a component library, if you take the most popular component library in React world. You have, and let's say you're in control of that, you have so much leverage to improve accessibility across the web if you can't, right. There's a lot of stuff that framework or library authors cannot do.

But if you could fix something in the most far reaching component libraries that everyone else is using, then you can go from just fixing things on your one website that you're in control of to fixing things on a million websites. And again, you're not gonna fix everything, but, uh... 

<i class="timecode">[00:11:20]</i> **Ben:** I think there's also something to be said for component libraries cannot fix everything, right?

Like you were saying, but right. You know, you can't stop people from like "holding it wrong". Right? Like using components, but then warping them into something that like, they were never meant to be. And also component like componentization is really good for localized parts of the app.

Right? Like, for... you've got a form component with like a field, right? And you can get that field, right? But, you know, I think a lot of times, accessibility is about the holistic app experience. And... you can have individual pieces that are all built well, but together they just don't fit together as a cohesive, holistic accessible experience.

So, you still like there, you still need that context. You still need thoughtful design going into things. But component libraries like Vutensils make pieces of it much less of a worry, I think

<i class="timecode">[00:12:24]</i> **Austin:** Yeah, and there's a couple, there's a couple factors to that too. You can, uh, you can do... well, so I think of things like, uh.. Image alt text, right?

Like, there's no way a component library can solve that for you. Um, and I've seen <i class="brackets">[laughs]</i> people make really terrible decisions. Component authors make really terrible decisions around this because the rule is every image has to have an alt tag defined. Now that can have content in it, or if it's just a decorative image, that can be an completely empty alt tag, right?

So what do component authors do? Oh, we'll just set the alt tag to an empty string by default. And that way, if there is an alt tag, then it will have it. And if not, it won't have it. And what ends up the result of that is you get accessibility auditing tools that end up flagging these as positives. Like, they pass, even though in reality, those images are not just decorative. They actually should have alt tags.

<i class="timecode">[00:13:33]</i> **Ben:** Yeah! So it's technically conformant as far as the testers and linters are concerned, but it's not a better experience. it's a worse experience.

<i class="timecode">[00:13:43]</i> **Austin:** Exactly. So effectively making it worse.

And so, yeah, the like as far as what authors can do, component authors can do, is you can fix the things you can automatically by just doing it for the users, right? Or doing it so that the developers that are implementing it, don't actually need to care what's going on.

And then you can do it at a more hands on approach, where libraries like Vue, they have built in prop validation. So if I give you a component and you implement it, I may not know that image… I may not be able to tell you what that image alt tag is. Right? But I can have a prop that validates that image and says: hey, this, this prop has to be provided!

It can be empty, or it can be, you know, something that says whatever. But if you don't provide it, I will throw a warning in the JavaScript console, so that while you're in development mode, you actually see: oh, this like image component needs, uh, some sort of alt tag and even an empty, an empty tag or an empty prop would satisfy that.

So that's like a next level of a little bit more hands on. And then there's yeah, the level that you're talking about, which I would say things like branding, color contrast, those are things that... uh... component authors are not going to be able to solve as far as the colors that are outside of the scope of their project. 

<i class="timecode">[00:15:17]</i> **Ben:** Yes. Alright, so we've talked... it's been 15 minutes. It's amazing how quickly time flies on streams. But we've been talking about, I guess the theory of component libraries here. But I'd love to start diving into this particular one, so let me go ahead and start sharing my screen.

So just before, like minutes before going live, we bootstrapped a quick, just basic Vue app. There's nothing new or custom about this. It's literally just a, a brand new nice Vue app. Um, So where should we get started, Austin? 

<i class="timecode">[00:15:56]</i> **Austin:** Yeah. So, I mean, if we're gonna use Vutensils, then we probably need to install that.

Yeah, just to follow up, we did instantiate this with the "npm init vue@latest" command, which I'll throw in the chat right now. And that, yeah, so this would ask you a bunch of questions, if you want TypeScript or Vue Router or the state management library that, you know, Vue supports. And if not, whatever you answer those questions, it'll output this sort of template that we've got. And so what you're gonna do here is, yeah, just "npm install vutensils", V-U-E-T-E-N-S-I-L-S.

<i class="timecode">[00:16:47]</i> **Ben:** Alright!

<i class="timecode">[00:16:49]</i> **Austin:** And hopefully this will work. <i class="brackets">[laughs]</i>

<i class="timecode">[00:16:56]</i> **Ben:** For viewers at home, installing NPM, like, node modules on a stream is always a grab bag, because I've found that just sometimes it'll cause my Internet to plummet and everything gets like choppy. So every time I'm installing something, I'm always just like a little hesitant, like do I have to though?

<i class="timecode">[00:17:17]</i> **Austin:** Yeah, yeah. 

<i class="timecode">[00:17:19]</i> **Ben:** Yeah. Looks like we're good. So we've got Vuetensils.

<i class="timecode">[00:17:21]</i> **Austin:** So, yep. So we're good to go. So if we go back to the code, we can see probably in the main.js file is where you're.. That's like where the app is going to sort of bootstrap from. Um... so yeah, you've got createApp from Vue and then you've got your main Vue component.

And so what we are going to want to do here... well, actually, no, let's start with app.vue. 'Cause you can do, yeah, you can do one of two things. And are you familiar with React?

<i class="timecode">[00:17:56]</i> **Ben:** Yes, yes.

<i class="timecode">[00:17:58]</i> **Austin:** Okay. So React has kind of a different approach where you can import components anywhere in your project, and that's where you would use them. Vue has a little bit extra, uh... a little bit of syntactic sugar or like... things that are just kind of nice in my opinion.

So one thing you can do is install a plugin and that plugin could define some global components for you so that when you use a component, you don't have to actually import it throughout your application. You can just have it available globally and then use it in your templates. But we'll just, we'll do them locally.

So... here we are with your basic Vue single file component. You have that script up top, which is where you would define your logic. And then you've got that template section in the middle. That's going to be where you output your template and use different components or reactive logic or things like that. And then below is where you have your styles for the app. And did you happen to run "npm run dev"?

<i class="timecode">[00:19:11]</i> **Ben:** I have not yet.

<i class="timecode">[00:19:13]</i> **Austin:** Okay. Yeah. 'Cause we may… we may wanna, like, dual screen this or side by side so we can see as we make changes. 

<i class="timecode">[00:19:27]</i> **Ben:** What is the port? What is…? 3000.

<i class="timecode">[00:19:29]</i> **Austin:** Uh, 3000. Yeah. So Vue uses... Vue under the hood uses Vite these days for the bundler side of things.

And there you go, you did it.

<i class="timecode">[00:19:43]</i> **Ben:** Woo! Alright.

Yeah. So... uh, yeah, we've got some components. We've got a nice little landing page here. Excellent. 

<i class="timecode">[00:19:56]</i> **Austin:** Okay, so why don't we look at building that sort of dialog that we had discussed before?

<i class="timecode">[00:20:03]</i> **Ben:** Yes.

<i class="timecode">[00:20:04]</i> **Austin:** Um, yes. 'Cause that, I think that is just a very good component to work with when you're talking about accessibility, 'cause there's a lot that goes into it.

There's very little that goes into it if you were to just try and do it from scratch, but if you try and do it accessibly, there's like a lot, um... so up in the script section where we see those imports, um, we should also import a component from Vuetensils, so import and then curly brace... and then I think...

I think V dialog is what we want. Capital V, capital D dialog (VDialog) . Right. And then from Vuetensils.

<i class="timecode">[00:20:53]</i> **Ben:** Right.

<i class="timecode">[00:20:55]</i> **Austin:** And if we're lucky this should work. So we should have that dialog component. You should be able to just place it anywhere in between those template tags.

<i class="timecode">[00:21:06]</i> **Ben:** All right. So let's give us a...uh, is this gonna be self closing, or...

<i class="timecode">[00:21:10]</i> **Austin:** It, I think you want content inside of it actually.

Now I have to look up 'cause I don't remember exactly everything about it. <i class="brackets">[laughs]</i> Uh...

Yeah, let's see. Okay, cool. Um... do do do do do... let's do this inside of there. So we need to... there's a couple of different ways that Vue can work. I guess with this one, we can, I think we can just put the show attribute on it and that should just put it on the page. So.. or the show prop. Yeah. And you can just leave it at that.

I think you have... oh, that's just some IntelliSense, yeah. So that should be popping it onto the page now.. somewhere on there hasn't yet. 

<i class="timecode">[00:22:10]</i> **Ben:** Um, it's usually pretty good about the refresh one. 

<i class="timecode">[00:22:15]</i> **Austin:** Yeah, they are. Give me one second. Yeah, let me look at the source code. 

<i class="timecode">[00:22:23]</i> **Ben:** Meanwhile, I'm gonna shout out people in the chat.

I see we've had lots of good folks hanging out. Welcome Aiden, good to see you! Alan's here. Uh, Anthony's here, Anthony's making good use of the chat bot. Morgan. So many good folks. Ed. Welcome, welcome y'all good to, good to have you here on, on Friday, which is not really a usual stream time.

It's good to see. And, uh... Bubbz, Chris. Good to see ya! Alright. 

<i class="timecode">[00:22:53]</i> **Austin:** Okay. So it should actually be showing 

<i class="timecode">[00:22:57]</i> **Ben:** Showing okay. Yeah.

Little bit of lag now, but alright.

<i class="timecode">[00:23:13]</i> **Austin:** Okay. Is it still not on the page?

<i class="timecode">[00:23:17]</i> **Ben:** Oh, oh, it's down here. Yes, that's very long. Okay!

<i class="timecode">[00:23:23]</i> **Austin:** Yeah, that's right. So, the other thing that I forgot to do was it does have some CSS that we need to install. So, um... and it should be at... so we need to probably in the, either the main.js or app.vue, I guess here's fine.

In the script section you can just import, um... so in the scripts, not in the...

<i class="timecode">[00:23:48]</i> **Ben:** Oh, I see.

<i class="timecode">[00:23:49]</i> **Austin:** Not the styles. Yeah. I mean, I guess probably the styles would work, but in the script should be fine so we can import, and then just single quote or double quotes vuetensils/styles.css, I think.

<i class="timecode">[00:24:08]</i> **Ben:** Okay.

<i class="timecode">[00:24:12]</i> **Austin:** I haven't done this from scratch in such a long time.

<i class="timecode">[00:24:17]</i> **Ben:** Um, oh, there's... "Failed to import Vuetensils styles". Is it styles, plural or singular?

<i class="timecode">[00:24:30]</i> **Austin:** Okay, gimme one minute. <i class="brackets">[laughs]</i> Uh, you know what? It may be in the dist folder actually...

<i class="timecode">[00:24:39]</i> **Ben:** So vuetensils/dist?

<i class="timecode">[00:24:40]</i> **Austin:** So vutensils/dist that's probably it. Yeah. vuetensils/dist/style singular .css.

<i class="timecode">[00:24:48]</i> **Ben:** Ah, okay... Oh, okay. Yeah. It's burried in the middle. It's there. Yeah. You can really see it, but it's it's there. 

<i class="timecode">[00:24:59]</i> **Austin:** Okay. So this gets to kind of the main point of the component or the library.

Yeah. Is that the thing that sort of sets it apart is actually what I call "naked components". So they are almost completely unstyled. So in the case of the dialog, because every single dialog that I've ever come across, wants it to be positioned above everything else and centered onto the page.

That's the way that it works or that's like the minimum styles that we have. However, if you wanted to bring your own brand, or provide, you know, your custom brands that we sort of talked about before, you can do that, through either the template that you have in there. So your h2 with the content, maybe you have some styles that you wanna put there.

You can use tailwind template inside of that as well. And there's also, like... an API for adding styles onto individual parts or adding classes onto individual parts of that component. So the traditional way of styling, something like this would be either with CSS selectors. So if we maybe like inspect that element, maybe we can put the, the code off to the side for a moment.

<i class="timecode">[00:26:24]</i> **Ben:** Um... I am curious to see how you've marked it up.

<i class="timecode">[00:26:29]</i> **Austin:** Yeah! Yeah... a bit nervous for you to see that

<i class="timecode">[00:26:36]</i> **Ben:** Popup with…

Goodness. How would it…? Yeah. Anyways, so it's a div. It's got tabindex="-1", which is fancy speak for, we wanna be able to focus JavaScript, but not be able to tab to it with the keyboard. It's got role="dialog" and then aria-modal="true". And what I recognize these to mean is this says like, Hey, assistive technology, this is a dialog you should announce as such.

There is a dialog element, however, support for that is not always great. And so role="dialog" is I think a totally respectable way of going about this until browsers handle dialogs a little more robustly, and aria-modal="true" is an indication to assistive technology. I believe that it shouldn't be able to get to any of the background. Yes. That, right?

<i class="timecode">[00:27:39]</i> **Austin:** Yes. So part of, um... part of the accessibility concerns around creating dialogs is when they open, they should sort of receive focus and then any of the content inside of that should be the only elements that can be tab to with the keyboard navigation. So such that. If you have links next to your content or put a button in there or form inputs, when you use the Tab key to navigate, it should go to all of those.

And once it reaches the last one in the list, if you press tab again it will sort of restart at the beginning. So... yeah, the idea here is that this component kind of does all of that thinking for you. And then all you really have to worry about is making it look how you want. Now there's a lot of other libraries out there that do the same sort of functionality for you and they already bring their styles, right?

So they look a certain way. If you want the Material Design look, you can use Vuetify if you want. Bootstrappy look there's BootstrapVue. There's also several that are based on Tailwind and stuff. And if you want those styles, you use those, because those libraries actually also do a really good job around the accessibility, but I like to build things from scratch.

Maybe not so much from scratch that I have to reimplement the accessibility stuff over and over. So that's where this comes in. Um... and yeah, there's a bunch of things that the dialog component here can do as well. It can do things like prevent scrolling so... or disable scrolling behind it. I think if you press the escape key, it will close.

The disabled scrolling is not on by default. You can enable that. Um... but... right now, well, right now I think what we have is, it's going to be permanently showing because the way that you, the thing that you've told it to do is to just be showing all the time. Right. And that's what the showing prop does.

That's probably not how we would normally do it or that's... you know, you probably don't want that dialog showing all the time. So there are a number of ways to... actually interact with Vue in a more reactive sense. So let's say we wanted to show the dialog if someone clicks a button

<i class="timecode">[00:30:12]</i> **Ben:** Yeah.

<i class="timecode">[00:30:12]</i> **Austin:** Right. Or show the dialog if there was an error on a network request and have it time out or whatever. So there's kind of two more common approaches. The reason why I couldn't remember what the prop name is because you probably never want it to just constantly be showing. So there's two ways to sort of interface with the dialog. There's this approach that Vue uses around reactivity where I guess we can start... we can start with that, right?

<i class="timecode">[00:30:43]</i> **Ben:** Yeah.

<i class="timecode">[00:30:44]</i> **Austin:** Um... let's go up into the script section, and I think because it's using, uh... it's using like the new syntax with the script sort of setup thing there. I think what we want to do is import something from Vue. So we're gonna import and then curly brace. And I'm gonna say reactive...

<i class="timecode">[00:31:10]</i> **Ben:** That capital R?

<i class="timecode">[00:31:12]</i> **Austin:** Uh, no lowercase,

<i class="timecode">[00:31:17]</i> **Ben:** Uh... oh!

Or reactive from vue.

<i class="timecode">[00:31:26]</i> **Austin:** Yep. And then we're going to create a variable. Let's... we can call it like state if we want.

<i class="timecode">[00:31:33]</i> **Ben:** Okay. Does it matter const, let? It probably doesn't matter. 

<i class="timecode">[00:31:37]</i> **Austin:** Um... it does not matter.

<i class="timecode">[00:31:39]</i> **Ben:** Okay, and probably invoke...

<i class="timecode">[00:31:45]</i> **Austin:** Invoke reactive, yep. And you're gonna pass it one, uh... one parameter, which is an object... and inside of the object, you can define whatever property you want.

So we can call it like dialog or... 

<i class="timecode">[00:32:07]</i> **Ben:** Start with that as like, false. 

<i class="timecode">[00:32:10]</i> **Austin:** Yep. Cool. So then what we can do is we can actually bind the showing attribute to that show dialog with... and assign it to that state.showDialog. Okay. So the way that we bind it in Vue is at the beginning of the property... you can either use a directive which is "v-bind:showing", or the shorthand is just ":showing".

<i class="timecode">[00:32:46]</i> **Ben:** Alright.

<i class="timecode">[00:32:47]</i> **Austin:** And then you do an equal sign. So this treats it, like whatever you wanted to assign it to. Thing that's nice about Vue, in my opinion, is that it follows the sort of HTML syntax where you, you just use double quotes. And then you would assign that to show, uh... state.showing. Okay. Yeah.

<i class="timecode">[00:33:12]</i> **Ben:** Got it.

<i class="timecode">[00:33:13]</i> **Austin:** And that binding syntax there makes whatever is in those double quotes, uh... like, valid JavaScript, same as the curly braces and React

<i class="timecode">[00:33:24]</i> **Ben:** Makes sense.

<i class="timecode">[00:33:26]</i> **Austin:** Okay, cool! So now our dialog should not be showing on the page, which I don't think it is. And we can, maybe we can add a button somewhere on the page, anywhere you want. That would then like toggle that state..

<i class="timecode">[00:33:42]</i> **Ben:** Oh, so have this be like... the dialog. Okay.

<i class="timecode">[00:33:50]</i> **Austin:** Yeah. And maybe we can also put the state of the dialog next... like on the button as well, like show the dialog and then we can put whatever the current value is. So it'll, it'll either be true or false, right? So to do that inside of, well... I guess, right after dialog, exclamation part, exclamation point, you can do double curly brace and that's how you would execute JavaScript inside of a template.

Okay.

<i class="timecode">[00:34:20]</i> **Ben:** So double curly brace, and then you can just drop in state.showDialog

I promise I can type.

<i class="timecode">[00:34:27]</i> **Austin:** <i class="brackets">[laughs]</i>

<i class="timecode">[00:34:30]</i> **Ben:** Cool. So if I save this, we'll see, there should be a button. It's here at the bottom.

<i class="timecode">[00:34:34]</i> **Austin:** It should be button somewhere... yeah, under the welcome stuff. There you go. 

<i class="timecode">[00:34:38]</i> **Ben:** You know what I'm gonna do is... actually no, I think what I think I wanna have a lot of contact. I see the scrolling essentially. Okay, so got, uh... tons of stuff up here though. Um... got our little button.

<i class="timecode">[00:34:54]</i> **Austin:** So it should be, like, saying false right? "showDialog: false", okay. If you click that... do we... oh, we don't have a click handler. <i class="brackets">[laughs]</i> So yeah, on the click handler, on the button you want to do, uh... the "@" symbol... and then click.

<i class="timecode">[00:35:17]</i> **Ben:** Okay.

<i class="timecode">[00:35:17]</i> **Austin:** Yep. So on click equals and then double quotes. This is another thing that Vue does...

Well Vue can work in the same way as React where you pass in a function, or you can actually do just straight value manipulation here. So Vue does a little bit of magic behind the scene. Yep. So you can do state.showDialog equals... um, yep.

<i class="timecode">[00:35:48]</i> **Ben:** Okay. Yeah. And I think this is actually how, like the, like on click, like in just native HTML works as well as you can just pass a valid like JavaScripts and I'll just execute that, um... this. So from what I know of Vue and reactivity, and I also see I've got a read quick.

Oh, it's um... okay. But, uh... yeah, so from what I understand, so this is gonna toggle our reactive showDialog state up here. And then that's going to update this showing binding here so then our dialog will appear. And if we were to click the button again, after the fact, we'd hide dialog.

<i class="timecode">[00:36:35]</i> **Austin:** That's right, that's right.

<i class="timecode">[00:36:38]</i> **Ben:** Let's see, so...

<i class="timecode">[00:36:40]</i> **Austin:** Let's try...

<i class="timecode">[00:36:41]</i> **Ben:** There we go!

<i class="timecode">[00:36:42]</i> **Austin:** In theory, it looks like it's there. Awesome, rad! Okay, so there's one other thing that we can actually do to take this a little bit of a step further, and this is still all kind of more what Vue does rather than what Vuetensils does.

And that is, that Vue provides another sort of custom directive where you can, well... in order for the dialog to update the state to trigger and update to the state from within the dialog's logic, right? You pass a prop down, so that when showing is set to true, the dialog is always going to be showing, but then what happens if you... you know, when the dialog mounts is, it adds an event listener onto the page that's set onto the window that says: Hey, if the escape key is pressed, I want to close.

Now, that child component, the VDialog, doesn't have a method to directly modify state.showDialog, right?

<i class="timecode">[00:37:46]</i> **Ben:** Mmm, okay!

<i class="timecode">[00:37:46]</i> **Austin:** So the way, yeah. So the way that you would normally handle that is the same way that we're actually doing with the button, is you have some sort of event listener. In this case, you would have a custom event called... I don't know, update.

**So That You Could Have an Event Listener on the Dialog That Says:** Hey, when the update function is called, let's go ahead and do the same thing that the button is doing and set state.showDialog to false. Now, before you get too far along: Vue actually makes that whole process of prop coming in and event coming out and updating the, uh... whatever the target state element is.

**It Makes That Syntax a lot... Easier by Just Saying:** instead of setting showing to state.showDialog, you can actually replace ":showing" with "v-model".

<i class="timecode">[00:38:43]</i> **Ben:** Okay!

<i class="timecode">[00:38:43]</i> **Austin:** So v-model... and this is sort of a Vue-specific thing that makes the reactivity a little bit more, uh... I don't know, smoother?

Not smoother, but simpler to implement, so you have less to write. So with v-model in place, now there's a connection between the state.showDialog and what the component wants to do as far as which prop it's receiving, and what event it's emitting in order to update that prop.

<i class="timecode">[00:39:19]</i> **Ben:** Okay. 

I am noticing, though, that as I toggle the button, the button still toggles, but it's not actually showing anything in dialog.

<i class="timecode">[00:39:31]</i> **Austin:** Uh-oh!

<i class="timecode">[00:39:34]</i> **Ben:** Weird. Want me to bring... go back?

Um... no, that should have worked. Give me one second... dialog...

<i class="timecode">[00:39:55]</i> **Austin:** ... showing... do do do...

<i class="timecode">[00:40:00]</i> **Ben:** Meantime, chat, how's it going? What are y'all working on Friday?

<i class="timecode">[00:40:04]</i> **Austin:** <i class="brackets">[laughs]</i>

<i class="timecode">[00:40:04]</i> **Ben:** You know gotta... play that performer host part, you know? Um... yeah. What are y'all up to? What have... what kinds of things have y'all been learning? I've actually... so, fleet side, I've been learning some performance stuff for work. Specifically we're... we've got a mandate to start tracking our, like... creating a dashboard for our core web vitals metrics, like page loads and whatnot.

So it's super cool to see what browsers are actually providing like out of the box now, to be able to like surface that information. So that's what I've been learning lately. Um... what have you... what's something y'all have been learning?

And wait for the delay as...

<i class="timecode">[00:40:56]</i> **Austin:** <i class="brackets">[laughs]</i>

Yeah. It's always so long.

<i class="timecode">[00:40:58]</i> **Ben:** Alan's been learning Lisp, apparently. Alan, my condolences.

<i class="timecode">[00:41:13]</i> **Austin:** Okay. Well, I'm not sure why that didn't work, but I have been pushing up a lot of changes recently because Vue... we're kind of doing things in the Vue... the newest Vue syntax, um... and this library was written in Vue 2. Now, in theory, it should support both Vue 2 and Vue 3, but this may be something that I actually have to look at.

<i class="timecode">[00:41:39]</i> **Ben:** Okay.

<i class="timecode">[00:41:40]</i> **Austin:** But moving on from there, just pretend that that button would've clicked it and, and made it work, right? There's still... in my experience having like, then dogfooding my own projects. There's still ways that we can make this work better. And, well, there's a number of problems with this approach.

One is, maybe... maybe you've seen it, but from an accessibility perspective, that button could work better, right? That button could have... could notify to assistive technology that it controls opening a dialog or closing a dialog, right?

<i class="timecode">[00:42:23]</i> **Ben:** Yeah.

<i class="timecode">[00:42:25]</i> **Austin:** So that introduces a challenge for library authors like myself, because I don't know how you're going to implement the button on your end, right?

<i class="timecode">[00:42:38]</i> **Ben:** Right.

<i class="timecode">[00:42:38]</i> **Austin:** And I could improve that with documentation, or I don't know, issues and pointing you to certain places, but my goal with this project is to actually make it as easy as possible. So sort of the blessed solution is to... use what is called in Vue as slots, where you can provide inside of the sort of content section of the component, you can provide these custom templates that would then be used in different parts of the template that the component implements, if that makes sense.

So it takes sort of the control out of what your hands and back into mine as the component author. 

<i class="timecode">[00:43:21]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:43:22]</i> **Austin:** Okay, so hopefully that makes sense, but we're gonna, we're gonna move on to that. And... so inside of that dialog, you have... you currently have this like content section, right? So what we wanna do is provide a new template.

Or a separate part of the template that's going to be responsible for the toggle button. So we're going to use a tag called template.

And then inside of that, we'll put the button or a button.

<i class="timecode">[00:44:00]</i> **Ben:** Oh yeah. Should I just copy this stuff in?

<i class="timecode">[00:44:04]</i> **Austin:** You may, yeah, you can... if you want.

<i class="timecode">[00:44:07]</i> **Ben:** Yeah.

<i class="timecode">[00:44:12]</i> **Austin:** Okay, and the catch here is we're going to actually remove the click event handler from this button. 

<i class="timecode">[00:44:19]</i> **Ben:** Okay.

I'll comment out this button. Okay. I'll just remove it. 

Okay, cool, so click event handler removed... 

<i class="timecode">[00:44:34]</i> **Austin:** Yeah. So now we're setting up something, again, in Vue that's called slots. So, uh... the default slot content is that one that you is actually what you have in there already, every component, you can think of it in React as like children is whatever it sits in between the component tags is the, like, default slot or the React equivalent of children.

<i class="timecode">[00:44:56]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:44:57]</i> **Austin:** But in React, you also have these concepts of, like render props, where you can pass in something that would render a component, and then that would be used in a different part of the template. With Vue you can still do that, but there's kind of a more, in my opinion, idiomatic approach, where you have slots and name slots.

So again, the default slot is the equivalent of children. Name slots are the equivalent of like a render prop. So our template here, in order... the only thing that's missing is we have to give it the name for the section that it's... related to. So we want this to be on the... toggle slot and the sort of shorthand syntax for that is the hash symbol... and then the name of the slot, so in our case toggle.

<i class="timecode">[00:45:52]</i> **Ben:** Okay.

<i class="timecode">[00:45:54]</i> **Austin:** Okay. Now that's going to put it in the right place. And there's still one other thing that we need to do is remember how I said that... me as a library author, I should be responsible for all of the markup and all of the event bindings.

<i class="timecode">[00:46:09]</i> **Ben:** Yeah.

<i class="timecode">[00:46:10]</i> **Austin:** There's still, yeah, I still need to be able to connect that to you, right? Now I guess I could assume that you're going to put a button there, but you could have put a div or you could have put any sort of other content and that's like, that's, that's where the contract between developer and library author can be very difficult. So what I prefer is to be a little bit more explicit here and ask you to take it one step further and just so use the equal sign on that... on that slot.

And we're gonna turn this from a standard slot into what's called a scoped slot, where I'm going to be able to provide you the things you need to implement. So we're going to destructure here so we can take... we're gonna, destructure an object. So inside of those double quotes, we can put the object brackets or the curly brackets.

And part of the object that we are going to be... or the properties that we're gonna be destructuring are "bind"... they're called "bind" and "on". So... yep, you're on it... Okay, so those are the only two things that this, uh... scoped slot needs to provide to the template so that you, as an implementer can get all of the juicy goodness that the, the button should have in order to trigger this dialog, but also keep the sort of accessible features together.

So these two... these two properties are called "bind" and "on", because the Vue syntax for binding attributes is v-bind. So you can assign v-bind on the button.

<i class="timecode">[00:47:59]</i> **Ben:** Okay. So V bind and that's...

<i class="timecode">[00:48:01]</i> **Austin:** ... v-bind equals double quotes, and you can just assign that to bind, yep.

<i class="timecode">[00:48:06]</i> **Ben:** Okay, alright.

<i class="timecode">[00:48:08]</i> **Austin:** And then another one for v-on.

<i class="timecode">[00:48:13]</i> **Ben:** And this is gonna be on, okay.

<i class="timecode">[00:48:16]</i> **Austin:** That's gonna be on.

<i class="timecode">[00:48:17]</i> **Ben:** And so, okay. Can you walk me through, 'cause I'm an absolute newcomer to Vue. Can you walk me through real quick what these two are doing, and how they're different?

<i class="timecode">[00:48:25]</i> **Austin:** Yes, yes, good question. So v-bind is actually the same thing that we did above, or before with the, uh... showing the dialog. It's basically a way to... pass... sort of some JavaScript logic onto the template.

So what bind is, what I'm providing you on this bind... property is another object and this is an object that corresponds to the HTML attributes that you would want on a button. So the aria controls, uh... I don't know, I don't know exactly what else is on there, but it's a way for me to provide it to you without you having to really think about it, right?

And I try to do that as... in, as an approachable way as possible, so that it works the best for everyone. I can give you the things that you need, the user ends up getting the things that they need, if they're using assistive technology, and it's only a little bit of work that we need to do as a team. <i class="brackets">[laughs]</i>

<i class="timecode">[00:49:30]</i> **Ben:** Okay, so you're right. Yeah, I did not have to specify type equals button. I didn't have to specify role equals button. Maybe a bit of feedback I'd provide is: it's usually not considered good form to... if you, and I don't know if you have access in your library to know whether the slot element, like the slot host is a button or some other element, but you usually wouldn't combine the button element with button, because it's redundant and redundancy actually could sometimes problem, but...

Bit of feedback there. "aria-haspopup" is a way to indicate like: Hey, if you click this, it will open a... a pop-up. "aria-expanded" and if I click this, value's changed, so "aria-haspopup" is true, "aria-expanded" is true. Very cool, so... yeah, lots of stuff just kind of baked in there. Super nice.

<i class="timecode">[00:50:27]</i> **Austin:** Yeah, so that's, that's kind of the idea. And, you know, again, we just looked at one component in detail, but the the long and short of it is that it kind of... the goal is to try and make all of that stuff as... unimpressive to the developer as possible. You know, like you really didn't have to understand anything about role and the popups and the aria attributes, and it kind of handles the functionality and the markup for you.

But then you like, Ben, you've got some... you got some style, you got your own flavor, you might wanna throw up, you know, your... your red and yellow and purple colors.

<i class="timecode">[00:51:12]</i> **Ben:** Yeah.

<i class="timecode">[00:51:13]</i> **Austin:** Without... you know, and... the thing that I think kind of bothered me about other component libraries was I would end up in a place where I either have to wrestle with overly specific...

Uh... CSS classes that would make my styles hard, like difficult to maintain. Or I would have to, I don't know, I couldn't use things like maybe if I wanted to use Tailwind there's there's ways to add tailwind classes to the different sections of the components. And obviously with this syntax, if you are providing the button or you're providing the dialog content, it's easy for you to just throw in your classes there.

Or like you're doing now, all of these components do have their own or all of the sort of elements in the markup do have their own classes with the intention that you can color them yourselves. Uh... so it should make, uh, a lot of different approaches for styling easy. There you go! And I think at this point, if you hit the Escape key, is that going to... is that gonna disappear?

<i class="timecode">[00:52:20]</i> **Ben:** I actually clicked on the dialog.

<i class="timecode">[00:52:21]</i> **Austin:** Yeah, you can do one or the other.

<i class="timecode">[00:52:23]</i> **Ben:** Okay.

<i class="timecode">[00:52:25]</i> **Austin:** Yeah... yeah, 'cause I think... I think you have the ".vts-dialog" and then there's also like the dialog content. Those would be different...

<i class="timecode">[00:52:33]</i> **Ben:** Oh, yeah!

<i class="timecode">[00:52:34]</i> **Austin:** ... different elements. So if you click on... if you click on the background, you kind of want the... I mean the, the most common, uh... the most common interaction that I've seen is if you click on the background of the dialog

<i class="timecode">[00:52:48]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:52:48]</i> **Austin:** It dismisses.

And there's actually, there's a whole bunch of other things that this does. I mean, you know, we didn't even look at all of the other types of components. There's alerts, buttons, dates, file inputs, forms, the actual form inputs, or probably some of my favorites.

<i class="timecode">[00:53:08]</i> **Ben:** Okay.

<i class="timecode">[00:53:09]</i> **Austin:** And there are things for, there are things called renderless components. So there's a component for doing asynchronous programming or using promises essentially. And one of the things that, for example, if you're building your own component here that you would have to do, if you're handling a promise is create the promise and then handle, handle some sort of state for if the promise is pending and then... handle, some sort of state for when the promise resolves and then handle some sort of state for if the promise has an error and the component, you know, the sort of async component that I have, still requires that you create a promise, cuz otherwise it has nothing to work with.

But then sort of in this same syntax that we have here with these different template sections, it has one for the resolved section one for the pending state, one for the error state. So you can kind of do things more in a "declarative" manner instead of having to track all of that logic yourself.

<i class="timecode">[00:54:13]</i> **Ben:** So I know we're, we're kind of coming up on time, but is there more you wanted to like show off and actually see and kind of work through real quick? Like, did you wanna demo any of those things? I know timing is, is kind of weird. We spent a lot of time on the dialog itself, but is there more, you just want folks to see as they're watching in?

<i class="timecode">[00:54:31]</i> **Austin:** Um... I mean, I guess if we go to the documentation, yeah, that would be cool.

<i class="timecode">[00:54:35]</i> **Ben:** Yeah, let's do that. And the documentation for this is: "vuetensils.austingil.com". 

<i class="timecode">[00:54:41]</i> **Austin:** Yes, it is, I'll post that in the chat.... there you go! Anyone that wants to see...

Yeah. So you can hit that get started link and that will take you to... take you off of the landing page... And yeah, so over there on the left, it has all of those components built in. 

<i class="timecode">[00:55:04]</i> **Ben:** So many, we just did not get to...

<i class="timecode">[00:55:05]</i> **Austin:** There are many. <i class="brackets">[laughs]</i> Yeah, we were not gonna get through most of it. But I think that dialog is a great one to look at because it just kind of captures a lot of that functionality and the fact that it's like, you know, you got this ugly unstyled button on the page, and then this ugly unstyled dialog... what's going on, you know, it's a pretty different approach.

<i class="timecode">[00:55:29]</i> **Ben:** Yeah. And there's so much flexibility there for you. Like, you don't even dictate what the contents of the dialog have to be, right? Like I've seen component libraries that are so opinionated that like: oh, you have to pass it like an array of button components or whatever, or yeah, like... and the component library knows best for those regards.

So it's gonna like position everything. And you can't like... you don't get the flexibility you want like this... you're purely handling, the like... fundamental interactions and giving the tool to make it our own.

<i class="timecode">[00:56:06]</i> **Austin:** Yeah... Yeah, so a couple of, uh... a couple of the sort of decisions I made on this one were: I want to avoid what's called compound components as much as possible.

So if you've seen those components that let's say it's like a library's gonna provide a card component. And then... so you implement the card and then inside of the card, you have the card header and then the card body, and then the card actions. Like I don't, I've never liked that approach, because one: I want my component library to be, uh... like sort of easily adoptable and also easy to get rid of.

So if you don't end up liking it, I want that migration story off of it to be pleasant as well. So most of the... a lot of the elements are based or named after basic HTML elements. So like the form, the image, the input, and they are intended to work as sort of like drop in replacements for those elements.

So the input component is another one of my favorites, if you wanna check that out. And that one does a, does a number of things. So it, it implements an input, but it also implements the label and it sort of wraps everything in a div, which changes the story a little bit, but I think it makes things generally easier and again, enforces best practices as far as having an id enforcing that there's a label, doing... you know, handling error validation for you. So... yeah, I don't know. It's a little bit more than we probably have any more time to get into here, but...

<i class="timecode">[00:57:51]</i> **Ben:** Awesome! Well, Austin, thank you so much for your time! Um... I... yeah, let's go ahead and I guess start spinning this down.

What... are you working on anything? Is there anything you'd like to shout out? Any places you'd like me to say? 

<i class="timecode">[00:58:09]</i> **Austin:** Um... yeah. I also am on Twitch @heyAustinGil and Twitter. So come by and hang out, let's build some fun stuff together. I mean, this is what I'm working on, I'm giving a talk at VueConf next week, which is gonna be a lot of fun.

Uh... and... yeah, let me give a shout out to the Rose City Rollers. It's my local roller derby team. If you have never been to a roller derby match, it's amazing. Highly recommend it! This one is a 50... 501C3 non-profit that empowers women and people that identify as women to get involved with their local roller derby, and it's so much fun. So that's what I would say.

<i class="timecode">[00:58:54]</i> **Ben:** That's awesome! Alright, well, chat, thank you so much for being here. Go follow Austin, all the places. Go reach out to him and tell him hello, tell him Some Antics sent you. While you're following people on Twitter, follow Some Antics here on Twitch, follow Some Antics on Twitter.

That way you can keep apprised of all the streams that are coming up and... Good Lord, are there a lot of streams coming up? I, uh... booked a lot of people thanks to a, um... interestingly timed tweet that I sent out. But you should know that next Tuesday we're having Josh Goldberg on. Josh has literally written the book on TypeScript.

And so we're gonna be diving into TypeScript together, I'm super excited for that. The week after Anthony, if you're still around, you can confirm, but the week after we're going to be deploying to the decentralized web using the InterPlanetary File System or IPFS with Anthony Campolo. Tons of interesting stuff going on.

So be sure to give a follow here and on Twitter as well to keep apprised of all the cool stuff. Stick around, chat. We're gonna find someone to raid, and thank y'all for being here and Austin: thank you so much!

<i class="timecode">[01:00:06]</i> **Austin:** Oh, Ben, it was my pleasure! You are the best. I really, really admire you and appreciate you having me on, so thank you.

<i class="timecode">[01:00:14]</i> **Austin:** Bye, y'all! See you!