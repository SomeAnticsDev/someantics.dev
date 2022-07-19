<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Friday! Welcome to Some Antics. I'm Ben Myers, and Some Antics is a weekly stream where I bring guests from around the web development and web design industries. I bring them onto the show to teach me something about building great user experiences for the web in a hands-on way, with a focus on accessibility and core web technologies. Today, we are rejoined on the stream by the one and only Lindsay Wardell. Lindsay, welcome back. 

<i class="timecode">[00:00:29]</i> **Lindsay:** Hey, thanks for having me back!

<i class="timecode">[00:00:31]</i> **Ben:** I'm thrilled to do this. We've been talking about this for months. It's a sequel of sorts because a few months ago — actually back in, like, January — you came on and you taught me Elm! But specifically it was, like, the syntax of Elm. We didn't get into, like, making fully fledged things. I'm gonna put a link to our last stream in here. Y'all should go check that out. But yeah, we didn't get to, like, much more than, like, "we can iterate over a list now" and "we can put some basic HTML on the page." So I'm super excited to have you back and to be diving more thoroughly into Elm today.

And what's new in the Elm world in the six months since? I'm sure, like, six months is a long time. I'm sure so much has happened. 

<i class="timecode">[00:01:22]</i> **Lindsay:** Oh yeah, yeah, yeah. And I mean, if you're familiar with the JavaScript ecosystem where there's this constant churn and new frameworks… Elm is the exact opposite. Nothing really has changed.

<i class="timecode">[00:01:31]</i> **Ben:** Cool.

<i class="timecode">[00:01:31]</i> **Lindsay:** And that's actually one of the selling points of Elm. Things stay the same. The current version of Elm is 0.19 and it came out in 2019. So the version of Elm that you start writing today, you're gonna keep writing it for years to come. Nothing, nothing really is coming in the near future… which is one of the benefits, the stability that that provides.

<i class="timecode">[00:01:55]</i> **Ben:** Absolutely.

Yeah, so, we're… I guess, do you wanna kind of walk us through some of the goals that you've got for today? Like, what can we expect to build today? 

<i class="timecode">[00:02:07]</i> **Lindsay:** Sure. So, like you said, in last week's episode, a few months ago, we went through the basic syntax, learned about how to write a function, how to render some things onto the browser. Today we're gonna build a full todo app. It's not going to write anywhere. We're just keeping it in browser. But we're gonna get something on the page where we can write some todos, we can check them off, we can delete them. Kind of aiming for the functionality of TodoMVC.

<i class="timecode">[00:02:33]</i> **Ben:** Good deal. And so as we're building this, like, obviously the syntax is gonna be, you know, Elm syntax, right? Which is very distinct from JavaScript, as we saw last time. But are there other considerations that we might see…? Like, we might expect to be totally different or look totally different compared to a framework like React or Vue, like if you were to build the same app? Like, I guess, what Elm-isms should we be on the lookout for today?

<i class="timecode">[00:03:02]</i> **Lindsay:** I think the biggest thing you're going to see that's different from writing something in React or Vue, just off the top of my head, is as we're working through this project, we're only going to have a single Elm file, our Main.elm. And we're not going to need to break out into multiple files. Frameworks like Vue specifically — React pushes in that direction, but doesn't require it — but most of the JavaScript frameworks require or encourage having multiple files break up components. And Elm really doesn't do that. You can have a multi-thousand-lined file in Elm, and that's just considered normal. The creator of Elm, Evan Czaplicki, gave a talk, "The Life of a File," where he kind of explains his approach to this and how, when you're writing an Elm application, it just kind of keeps growing and growing and growing until eventually there's a reason to break it apart, as opposed to being required by the language. So that's probably the first thing you're gonna see. 

<i class="timecode">[00:04:01]</i> **Ben:** Yeah, and real quick, so what are some of the reasons you would kind of break out multiple files in this case? 

<i class="timecode">[00:04:08]</i> **Lindsay:** The biggest reason is, I mean, for organizational purposes. If you have a type and you have a handful of functions that utilize that type or require that type, it might make sense just to organize those into a separate file and have it as a separate module that you import into your main Elm application. Other reasons could be you just have some functions that you want private that you do not want exposed, and you don't want future developers to be confused.

<i class="timecode">[00:04:36]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:04:36]</i> **Lindsay:** It kind of still revolves around that type concept. Think of it like private methods on a class. You could put those into a module, not expose them to the main application, and then you have some internal logic that you can maintain without worrying that it's affecting your core application if you do any refactors. 

<i class="timecode">[00:04:56]</i> **Ben:** Gotcha. Okay, and are there other Elm-isms you think we should be on the lookout for today? 

<i class="timecode">[00:05:02]</i> **Lindsay:** Two big ones, beyond just the structure of the application, is we are going to be using custom types. Types look a little different than you might expect if you're coming from a JavaScript ecosystem. Rather than just being, like, a class or a union between string and null or something like that, we're gonna see some actual custom types that we're writing.

The other big piece to watch out for is that we are writing immutable, functional code. So as we're writing our application, it's just a single function that calls.

<i class="timecode">[00:05:32]</i> **Ben:** Mm.

<i class="timecode">[00:05:33]</i> **Lindsay:** And when we're making an update, we aren't mutating anything. Elm is fully immutable. There's no way to mutate state. So it's gonna look a lot more like something like Redux or a global store that you might be familiar with.

<i class="timecode">[00:05:46]</i> **Ben:** Good deal! Alright, I am super excited to be diving into this, so I'm gonna start sharing my screen with the group.

Y'all, today we have Lindsay on. Go follow Lindsay. Lindsay right now has a very satisfying number of followers, which is 1,111, and I want you to make that less satisfying. Go follow Lindsay.

And yeah, so last time, we started off with this Vite Elm template, and in the green room, you let me know that we're gonna start with this one today. So I'll give a link to that in the chat, I'll move my windows around so I'm not constantly just highlighting your camera, it seems.

Okay, cool. Alright. 

<i class="timecode">[00:06:30]</i> **Lindsay:** And as you're setting this up, just to highlight for anyone interested, as of today, I am still using Vite 2.0 — or 2.9, I should say — in the template. The plugin for Elm does not currently work with Vite 3.

<i class="timecode">[00:06:42]</i> **Ben:** Mmm.

<i class="timecode">[00:06:42]</i> **Lindsay:** So there is a PR in place. As soon as that's ready, I'll be upgrading it to Vite 3 as well.

<i class="timecode">[00:06:49]</i> **Ben:** Good deal! And I'm just gonna call this "elm-todo-app." And we'll make it public!

And that's already given us a repo link that I will go ahead and share again. Lots of links to share today. Cool.

<i class="timecode">[00:07:10]</i> **Lindsay:** All of the links. 

<i class="timecode">[00:07:13]</i> **Ben:** Now… quickly get this cloned.

And if I check, you have a package-lock, so I'm gonna use npm instead of anything fancy like Yarn at this point. I don't know why I still use Yarn. I think it's just, like, out of habit, because for the most part, like, npm does any of the things Yarn was good for now, so I think it's just a habit. 

<i class="timecode">[00:07:46]</i> **Lindsay:** Yeah, at some point I switched to Yarn because everyone was using it and it seemed faster. And then when Yarn 2 came out and everything kind of broke, I just switched back and—

<i class="timecode">[00:07:56]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:07:56]</i> **Lindsay:** —I haven't felt a strong need to switch to anything like Yarn — I think Yarn is on 3 now — or pnpm. I just haven't felt the need. 

<i class="timecode">[00:08:05]</i> **Ben:** Gotcha. Yeah, I need to, like, more thoroughly explore these but, like, at this point, my npm and/or Yarn setup is, like, good enough for me that, like, I don't know that I necessarily feel the need to, like, change installer.

Okay, so yeah. We looked at this project last time. I don't think it's changed since, but…

<i class="timecode">[00:08:27]</i> **Lindsay:** Not a whole lot. Actually, just one quick call out. I added a different package called elm-review.

<i class="timecode">[00:08:36]</i> **Ben:** Okay.

<i class="timecode">[00:08:36]</i> **Lindsay:** Which provides — it's linting, basically. It's an equivalent to ESLint.

<i class="timecode">[00:08:41]</i> **Ben:** Mmmm.

<i class="timecode">[00:08:41]</i> **Lindsay:** But it provides a lot of nice benefits. So if you look in that review folder, you would see that. We're not gonna worry about it for this. I just wanted to call it out in case anyone's curious.

<i class="timecode">[00:08:50]</i> **Ben:** Yeah. Okay! Cool, so this is the equivalent to, like, ESLint.

<i class="timecode">[00:08:54]</i> **Lindsay:** Yeah.

<i class="timecode">[00:08:55]</i> **Ben:** Cool. Alright! And now, how do you wanna get started Lindsay?

<i class="timecode">[00:09:01]</i> **Lindsay:** So, before we get started, the first thing that we're gonna do, because we're writing an Elm application and I wanna highlight some of the cool things about building with Elm, is we're going to be writing some custom CSS, just a little. But let's install elm-css to get started.

<i class="timecode">[00:09:18]</i> **Ben:** Okay.

<i class="timecode">[00:09:18]</i> **Lindsay:** So first things first, let's do "npm install," just to make sure we have Elm and everything in place.

<i class="timecode">[00:09:24]</i> **Ben:** We've got it now, yeah.

<i class="timecode">[00:09:25]</i> **Lindsay:** Excellent.

<i class="timecode">[00:09:26]</i> **Ben:** We've got Elm. 

<i class="timecode">[00:09:28]</i> **Lindsay:** Fantastic. So just delete that, then.

Let's go to "package"— let me double check the URL. It's package.elm-lang.org. I'll put that into the chat. This is the repository of all — I can't put it into the chat. I've signed out. 

<i class="timecode">[00:09:45]</i> **Ben:** "Package" singular?

<i class="timecode">[00:09:48]</i> **Lindsay:** Yes.

<i class="timecode">[00:09:48]</i> **Ben:** Okay. Ohhh, what's this?

<i class="timecode">[00:09:49]</i> **Lindsay:** So, that is the Elm repository for all packages. Everything is hosted on GitHub. You can see all of the code. It's one-to-one. I know npm has that issue where it's not 100% in sync, but Elm does not! So just type in "elm-css."

<i class="timecode">[00:10:08]</i> **Ben:** "elm-css." There we go. 

<i class="timecode">[00:10:10]</i> **Lindsay:** And we're gonna grab that top one from Richard Feldman.

<i class="timecode">[00:10:15]</i> **Ben:** Okay!

<i class="timecode">[00:10:15]</i> **Lindsay:** So if you're looking at an Elm package, this is what the documentation typically looks like. You're gonna see a basic explanation of how it works, and then you can look up — on the right hand side, there's a search and you can search for particular function names, which is pretty cool.

<i class="timecode">[00:10:34]</i> **Ben:** Okay!

<i class="timecode">[00:10:35]</i> **Lindsay:** For what we're gonna do, though, there should be, somewhere on that side…

Where is it? There should be a button you could click, but the button is gone! Why did they remove the button? That's annoying. Okay, so to install an Elm package…

I'm sorry, they changed this website on me the day of. So you need the person who authored it — in this case, rtfeldman — and then slash, and the name of the project. So we're going to run in the terminal "elm install rtfeldman/elm-css."

<i class="timecode">[00:11:09]</i> **Ben:** Okay.

<i class="timecode">[00:11:10]</i> **Lindsay:** There had been a button that just let you click it and it would copy–paste it in your…

<i class="timecode">[00:11:14]</i> **Ben:** "elm install," and then "rtfeldman/elm-css"? 

<i class="timecode">[00:11:20]</i> **Lindsay:** Yep. Just like that. 

<i class="timecode">[00:11:22]</i> **Ben:** Oh, I don't have Elm — oh, GLOBALLY installed.

<i class="timecode">[00:11:26]</i> **Lindsay:** Run it with npx.

<i class="timecode">[00:11:27]</i> **Ben:** Okay.

<i class="timecode">[00:11:27]</i> **Lindsay:** You can do npx as well.

<i class="timecode">[00:11:29]</i> **Ben:** Okay, yeah, let's do that and save ourselves another global install. So "elm install rtfeldman/elm-css." 

<i class="timecode">[00:11:39]</i> **Lindsay:** And it will ask to confirm that those are the changes you want. You just have to press Enter. "Yes" is default. 

<i class="timecode">[00:11:45]</i> **Ben:** Okay!

Hey Ryan, welcome to the stream!

<i class="timecode">[00:11:48]</i> **Lindsay:** Woo!

<i class="timecode">[00:11:48]</i> **Ben:** Good to have you here.

<i class="timecode">[00:11:50]</i> **Lindsay:** Cool. You're done. Congratulations.

<i class="timecode">[00:11:54]</i> **Ben:** Alright! Okay! I'm a little curious. It's very interesting that, like, Elm's decided to go with its own approach for, like, installing packages like this. 

<i class="timecode">[00:12:04]</i> **Lindsay:** So remember, Elm came out in 2012, and that was before a lot of this stuff settled nearly as much as it has today. The other huge benefit — and actually, Elm has gotten more restrictive as time has gone on — but the huge benefit to having the Elm packages be a separate thing is you are guaranteed 100% that there are no side effects that will be accidentally run in the code that you download, because it's not going through npm. You don't have to worry about pre-install or post-install. And because it is pure Elm code that you're installing, no JavaScript, there's no accidental leaking of any data from your application.

<i class="timecode">[00:12:39]</i> **Ben:** Mmmm, okay! Gotcha. Alright!

<i class="timecode">[00:12:43]</i> **Lindsay:** Cool. So, to get started with what we're doing, the template comes with three files. There's the HelloWorld.elm, Main.elm, and Msg.elm. Just like in the previous stream, we're just gonna delete HelloWorld and Msg. Those exist more as demos of how cool hot module reload is. It's not something that's super common in Elm templates. So we don't need them, though, for doing what we're gonna do.

Let's also remove the imports. So on line 4 and line 7, we're importing HelloWorld and importing Msg. Let's just delete those. 

<i class="timecode">[00:13:14]</i> **Ben:** Got it, yeah.

<i class="timecode">[00:13:17]</i> **Lindsay:** And then let's, for now, replace Msg with our own type. So we're gonna write our own type here. So just add a couple lines and type the word "type," and then capital-M "Msg." Equals… and for now, let's just say "NoOp." Capital N, o, capital O, p.

<i class="timecode">[00:13:42]</i> **Ben:** Okay.

<i class="timecode">[00:13:43]</i> **Lindsay:** Just so we're declaring Msg exists and we don't expect it to do anything at the moment.

<i class="timecode">[00:13:48]</i> **Ben:** Gotcha.

<i class="timecode">[00:13:49]</i> **Lindsay:** To clean up the rest of this application, let's delete… in "update," we have… we're doing a case statement. Case is the equivalent of switch. And we're casing on "msg." It could only be, at the time, "Increment" and "Decrement." We don't wanna do anything, so let's just do "case msg of NoOp." 

<i class="timecode">[00:14:07]</i> **Ben:** Okay, and so how's that gonna look? 

<i class="timecode">[00:14:09]</i> **Lindsay:** Just delete all of that code first, and then write "NoOp," and then an arrow. And return "model." Just type the word "model."

<i class="timecode">[00:14:20]</i> **Ben:** Okay.

<i class="timecode">[00:14:21]</i> **Lindsay:** Cool. The other thing is on line 25, we need to delete "helloWorld," because we're no longer… we no longer have a function with that. So we can just delete the entirety of line 25. 

<i class="timecode">[00:14:34]</i> **Ben:** Yeah. Okay.

<i class="timecode">[00:14:38]</i> **Lindsay:** Okay. That should be enough to get us running, so let's start up "Vite" by running "npm run dev."

<i class="timecode">[00:14:51]</i> **Ben:** Alright!

<i class="timecode">[00:14:54]</i> **Lindsay:** It's going to be a very exciting page that just renders the Elm logo.

<i class="timecode">[00:14:58]</i> **Ben:** Alright!

<i class="timecode">[00:15:00]</i> **Lindsay:** Cool. So before we get into the TodoMVC part, let's just get elm-css working. So at the top of our file, lines 4 and 5, we're importing Html and Html.Attributes. Because of how Elm works, we can't just stick custom CSS into those. The way elm-css works is it's generating the stylesheet for you, and it's going to inject it in the right place in your DOM.

<i class="timecode">[00:15:31]</i> **Ben:** Okay.

<i class="timecode">[00:15:32]</i> **Lindsay:** So what we need instead is to import Html.Styled and Html.Styled.Attributes. So you can just actually add ".Styled" on lines 4 and 5. We'll keep the same imports.

<i class="timecode">[00:15:46]</i> **Ben:** Oh, okay. So it's gonna be like this? 

<i class="timecode">[00:15:49]</i> **Lindsay:** No, so on line 4, for example, import Html.Style. Styled. 

<i class="timecode">[00:15:57]</i> **Ben:** Oh, "styled." OH, "styled" with a D.

<i class="timecode">[00:15:59]</i> **Lindsay:** Yeah.

<i class="timecode">[00:16:00]</i> **Ben:** Okay.

<i class="timecode">[00:16:00]</i> **Lindsay:** With a capital S as well. 

<i class="timecode">[00:16:02]</i> **Ben:** Okay. And this is akin to, like, in React, the styled-components. 

<i class="timecode">[00:16:07]</i> **Lindsay:** Yes.

<i class="timecode">[00:16:08]</i> **Ben:** Okay.

<i class="timecode">[00:16:08]</i> **Lindsay:** Very similar. And then same thing with the second line, yeah. ".Styled.Attributes."

Those modules have the same basic exports. So, like, Html, div, img.

<i class="timecode">[00:16:22]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:16:22]</i> **Lindsay:** Et cetera. The big thing they add is CSS as something that you can work with.

So… but if we go back to the browser at this point, just as a quick demo. Because we're not actually returning HTML the way Elm expects it — we're returning styled HTML — our view is returning the wrong thing. 

<i class="timecode">[00:16:42]</i> **Ben:** Mmm.

<i class="timecode">[00:16:43]</i> **Lindsay:** So I just wanted to show this compilation failed, and kind of highlight one of the other big benefits of Elm is this idea of following the compiler and getting help. So, we can see that "sandbox" is getting "Html Msg," but it needs actual HTML as opposed to Html.Styled.Html. So we're gonna convert it in our code now, so that we're actually rendering something.

<i class="timecode">[00:17:07]</i> **Ben:** Makes sense.

<i class="timecode">[00:17:08]</i> **Lindsay:** In the "main" function, on line, 12, we have this record. We're creating a sandbox, and then there's the record that configures it. "init" is the default state, "update" is all of our update logic, and the "view" is the actual HTML that gets rendered.

So in this case, what we need to do for "view" is pass that into a function from Html.Styled called "toUnstyled."

<i class="timecode">[00:17:36]</i> **Ben:** "Html.Styled.to"…

toUnstyled. 

…"Unstyled," and then space. And then probably need this to be evaluated as a single expression, so parentheses? Did I do it?

<i class="timecode">[00:17:54]</i> **Lindsay:** Either way works, actually, in this case. Because there's nothing else that comes after—

<i class="timecode">[00:17:58]</i> **Ben:** Oh, okay.

<i class="timecode">[00:18:00]</i> **Lindsay:** —you don't need the parentheses. But that should just be it and it works. 

<i class="timecode">[00:18:08]</i> **Ben:** Um…

<i class="timecode">[00:18:09]</i> **Lindsay:** Nooo! Of course not. That'd be too easy. Our "1st argument to sandbox is not what I expect."

<i class="timecode">[00:18:21]</i> **Ben:** "1st argument to 'unstyled' is not what I expect."

<i class="timecode">[00:18:24]</i> **Lindsay:** That's right, we're not passing in our model anymore! Okay, so let's go back to our code. I made a small mistake, my apologies. I'm going to teach you a different syntax that we can use here. 

<i class="timecode">[00:18:37]</i> **Ben:** Okay!

<i class="timecode">[00:18:38]</i> **Lindsay:** So delete the word "view," just in our function call, yeah. And move your cursor to the beginning of where we said "Html.Styled.toUnstyled." Type the word "view." And then do two right angle brackets.

So what we're doing here is called composition, and basically, "view" is expecting an argument of integer, in this case — our model. It gets passed to "view," and then the result of that is getting passed to toUnstyled.

<i class="timecode">[00:19:17]</i> **Ben:** Okay?

<i class="timecode">[00:19:18]</i> **Lindsay:** So now if we go back to the browser after we save, everything should be fine.

<i class="timecode">[00:19:23]</i> **Ben:** Gotcha.

<i class="timecode">[00:19:24]</i> **Lindsay:** There we go! So now, we are using styled CSS. Our Elm-styled CSS. Whatever the right way to say that is.

Cool! So let's get to work on our todo app itself. The first thing that we're going to want to do is actually have some global state, a model that we can work with. So let's create a type alias, just at the top of our file somewhere. Yeah, right there. And we're just gonna say "type alias Model," with a capital M.

<i class="timecode">[00:19:58]</i> **Ben:** Okay.

<i class="timecode">[00:20:00]</i> **Lindsay:** Equals, and for now let's just do an empty record just to demonstrate.

So, type alias is kind of like what you would expect a type or an interface to be in TypeScript. It isn't literally the thing. Like, you can't do a type check and confirm that it's Model as opposed to something else that looks or resembles this shape. But for our purposes, this is exactly what we need.

<i class="timecode">[00:20:25]</i> **Ben:** Okay.

<i class="timecode">[00:20:26]</i> **Lindsay:** So now, let's just weave in the model instead of the integer that we've been using as our state so far. So in the "main" function… we're also using type signatures here. So just to get an idea, we're gonna have to update a little bit of type signatures. So in "main," on line 10, we have a program that has those two parentheses, which is unit in Elm, and then an integer and a message. We already have our message type, but integer is the, is our state, so let's change "Int" to "Model."

<i class="timecode">[00:20:59]</i> **Ben:** Okay.

<i class="timecode">[00:21:01]</i> **Lindsay:** And at this point, if we were to look at the Elm compiler, it will complain very loudly at us because we're setting, in the "init" function, a zero instead of an empty record.

<i class="timecode">[00:21:11]</i> **Ben:** Ohhh, okay. Gotcha, gotcha. Oh, and the reason it was a number is because originally this page was a counter, and so the only state you needed was an integer that could be incremented or decremented. Okay.

<i class="timecode">[00:21:22]</i> **Lindsay:** Exactly.

<i class="timecode">[00:21:23]</i> **Ben:** Got it.

<i class="timecode">[00:21:24]</i> **Lindsay:** So now, we're just weaving in the new types. So let's do init equals just two curly brackets. And then in "update," we have "Msg, number, number." So let's replace "number" in those spots with "Model."

<i class="timecode">[00:21:43]</i> **Ben:** Alright. This is making sense. So we're saying we're taking… we're receiving a message, which would be, like, in Redux land this is an action, or an action type, rather.

Yes.

And then the current state, and it returns a new state, right?

<i class="timecode">[00:22:01]</i> **Lindsay:** Yes, that's exactly it.

And then in our "view" function, we have one more "Int" that we need to update to "Model."

<i class="timecode">[00:22:09]</i> **Ben:** Okay.

<i class="timecode">[00:22:09]</i> **Lindsay:** On line 21. Cool. So at this point, everything should be fine. Yes. 

<i class="timecode">[00:22:18]</i> **Ben:** Excellent.

<i class="timecode">[00:22:20]</i> **Lindsay:** So, I think the first thing we need to do is… let's add an input so we can create the new todo that we're going to create. We'll have the container for it to go to after.

<i class="timecode">[00:22:32]</i> **Ben:** Okay!

<i class="timecode">[00:22:34]</i> **Lindsay:** So in our type alias Model…

Model is all of our state. So that's another thing to keep in mind if you're coming from a JavaScript ecosystem, especially something like Vue. React, I feel like this is a little more common where you have a Redux store at the helm, as it were.

<i class="timecode">[00:22:51]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:22:52]</i> **Lindsay:** But all of our state is at this highest global level, and then we just pass it down as needed into certain functions.

So we're gonna be working in here. And let's just add… I don't know. For a record, we could say "newTodo," which would be a string. 

<i class="timecode">[00:23:10]</i> **Ben:** Okay, "newTodo." And this is equals… then, oh, it's double quotes.

<i class="timecode">[00:23:17]</i> **Lindsay:** Actually, 'cause this is just the type signature, it would be a colon instead of equals.

<i class="timecode">[00:23:21]</i> **Ben:** Oh, I gotcha.

<i class="timecode">[00:23:22]</i> **Lindsay:** We're declaring its type.

<i class="timecode">[00:23:24]</i> **Ben:** Oh, right. Okay, I see.

<i class="timecode">[00:23:26]</i> **Lindsay:** And you're gonna wanna do an uppercase "String" on that. Lowercase "string" is a generic type and it's something that could fit in there.

<i class="timecode">[00:23:37]</i> **Ben:** Mmm.

<i class="timecode">[00:23:39]</i> **Lindsay:** Cool, let's just do that for now. Call that a day.

So in our "init" function, we now need to update and set "newTodo." Otherwise, the Elm compiler will complain at us.

<i class="timecode">[00:23:49]</i> **Ben:** Alright.

<i class="timecode">[00:23:49]</i> **Lindsay:** And that's one of the huge benefits of the Elm compiler. As you make changes in your application, if you're not sure where to go next, it will help you. 

<i class="timecode">[00:23:57]</i> **Ben:** Yeah.

<i class="timecode">[00:23:57]</i> **Lindsay:** So right now the "sandbox" call produces program with an empty— with the record that has nothing, but it expects model. Looks like "newTodo" is missing.

<i class="timecode">[00:24:07]</i> **Ben:** Yes. Yeah, no, absolutely. It's, like… the debugging process is just a step-by-step guide of working through all the errors. 

<i class="timecode">[00:24:16]</i> **Lindsay:** Yeah.

<i class="timecode">[00:24:17]</i> **Ben:** Yeah. Okay.

<i class="timecode">[00:24:19]</i> **Lindsay:** The Elm community has the nice saying of "if it compiles it works." 

<i class="timecode">[00:24:24]</i> **Ben:** That's… I do like that. Okay.

And I will say "Greet the chat."

<i class="timecode">[00:24:32]</i> **Lindsay:** Cool. So that's gonna be our default todo.

Let's just write the `<input>` now. 'Cause right now, we're not rendering anything, right?

<i class="timecode">[00:24:42]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:24:42]</i> **Lindsay:** So let's just add the `<input>`, and because this is Some Antics, I figure we should wrap it inside of a `<form>` so that we can use accessibility to submit our new todo.

<i class="timecode">[00:24:51]</i> **Ben:** I appreciate you.

<i class="brackets">[Lindsay chuckles]</i>

<i class="timecode">[00:24:55]</i> **Lindsay:** So inside that `<div>`, let's just add a `<form>` element.

<i class="timecode">[00:24:59]</i> **Ben:** Okay. So this right here…

<i class="timecode">[00:24:59]</i> **Lindsay:** You can delete the image if you want.

<i class="timecode">[00:25:01]</i> **Ben:** We know this has to be — oh, we can delete the image. Okay, that might make things easier. 

<i class="timecode">[00:25:05]</i> **Lindsay:** Yeah, let's just delete the image, 

<i class="timecode">[00:25:07]</i> **Ben:** "form"…

This needs to be probably imported from up here. We're also gonna need "input." 

<i class="timecode">[00:25:13]</i> **Lindsay:** You are right. 

<i class="timecode">[00:25:14]</i> **Ben:** Alright. Okay. 

<i class="timecode">[00:25:17]</i> **Lindsay:** Okay, so the structure of all HTML in Elm is first, you have the function itself, which is typically the name of the element. And then it takes two lists. The first list is all of its attributes. The second list is all of its children. So in the case of the `<div>`, we have an empty list because it has nothing. And then we have the second list, which is going to contain our `<form>`.

<i class="timecode">[00:25:41]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:25:41]</i> **Lindsay:** So, to just render a `<form>`, if we wanted to look at the DOM and see the `<form>`, just complete that… let me see…

<i class="timecode">[00:25:51]</i> **Ben:** Did that do it?

<i class="timecode">[00:25:53]</i> **Lindsay:** I think something got deleted that wasn't necessarily…

"form" needs to have the closed— or, the open bracket there. 

<i class="timecode">[00:26:03]</i> **Ben:** Like this? What are we…? 

<i class="timecode">[00:26:05]</i> **Lindsay:** Yeah… and then there's the extra close bracket after. That just needs to be moved to the end, 'cause that'll be the div's closed bracket.

<i class="timecode">[00:26:14]</i> **Ben:** Oh, okay. Oh, I gotcha, yeah. Boom.

<i class="timecode">[00:26:18]</i> **Lindsay:** Yeah.

<i class="timecode">[00:26:18]</i> **Ben:** Look at that, the Elm extension helping us out with that. I did not do that indendation.

<i class="timecode">[00:26:24]</i> **Lindsay:** Yay!

<i class="timecode">[00:26:24]</i> **Ben:** It was an issue we had last time, was that my VS Code settings were very not prepared for this. Okay.

Let's go ahead and inspect the markup. Obviously there's nothing inside of our `<form>` right now, but we should expect to see a `<form>` in…

Oh, here it is! It's right here.

<i class="timecode">[00:26:46]</i> **Lindsay:** Yeah. The elm-css style wrapper is just the wrapper to contain all of our CSS as we write it.

<i class="timecode">[00:26:52]</i> **Ben:** Okay.

<i class="timecode">[00:26:53]</i> **Lindsay:** So, cool, we have a `<form>`. Hooray! 

<i class="timecode">[00:26:55]</i> **Ben:** Let's add an input. So, it won't be in here, because these are attributes.

<i class="timecode">[00:27:00]</i> **Lindsay:** Right.

<i class="timecode">[00:27:00]</i> **Ben:** But it will be in here. 

<i class="timecode">[00:27:03]</i> **Lindsay:** Yes.

<i class="timecode">[00:27:04]</i> **Ben:** Gonna let the editor just help me out here. Okay, so this is gonna be "input." This needs its own empty list of attributes for now, empty list of children.

Oh, it's— interesting. The editor has given up on me. Okay, let me try, just for now… 

<i class="timecode">[00:27:26]</i> **Lindsay:** It's probably that lone bracket at the start of the line, yeah.

<i class="timecode">[00:27:33]</i> **Ben:** Did this do it? Did I do it? Okay! Here we go. Where's…?

<i class="timecode">[00:27:37]</i> **Lindsay:** Hey, we've got an `<input>`! 

<i class="timecode">[00:27:41]</i> **Ben:** Here we go, it's there. 

<i class="timecode">[00:27:43]</i> **Lindsay:** Sweet.

<i class="timecode">[00:27:44]</i> **Ben:** Happy little `<input>`.

<i class="timecode">[00:27:46]</i> **Lindsay:** So let's render some value into it.

<i class="timecode">[00:27:48]</i> **Ben:** Yeah! Okay, so that's gonna be an attribute, right?

<i class="timecode">[00:27:52]</i> **Lindsay:** It is an attribute. 

<i class="timecode">[00:27:53]</i> **Ben:** Is it… can I do this? And then would it be "model.newTodo?"

<i class="timecode">[00:28:02]</i> **Lindsay:** Almost.

<i class="timecode">[00:28:03]</i> **Ben:** Almost.

<i class="timecode">[00:28:03]</i> **Lindsay:** So, "value" is itself a function. So "value" just takes a string and returns an attribute, so you don't need the equals.

<i class="timecode">[00:28:12]</i> **Ben:** Ohhh… okay?

<i class="timecode">[00:28:13]</i> **Lindsay:** It takes a little getting used to, as in I forget that, too.

You cannot find a" value." Oh, we still need to import it probably. 

<i class="timecode">[00:28:22]</i> **Ben:** Okay. So that's… we're importing it from…

<i class="timecode">[00:28:26]</i> **Lindsay:** One thing we can do here, just to make life easy — it's going to be in Attributes, yeah. One thing we can do here to make life easier is, instead of all of this stuff that we're writing inside of the parentheses, we can just expose everything in a module by doing "..".

<i class="timecode">[00:28:40]</i> **Ben:** Yeah.

<i class="timecode">[00:28:41]</i> **Lindsay:** So, instead of exposing everything, we can just expose, in parentheses, "..". 

<i class="timecode">[00:28:46]</i> **Ben:** Gotcha. Okay, yeah, that'll definitely make things easier. Alright.

<i class="timecode">[00:28:50]</i> **Lindsay:** Yeah. And then we don't have to think about it nearly as much.

<i class="timecode">[00:28:53]</i> **Ben:** Yeah, okay. Cool. "Name of 'form' is ambiguous." 

<i class="timecode">[00:29:00]</i> **Lindsay:** Oh, that's right. Because Html and Attributes have "form."

<i class="timecode">[00:29:05]</i> **Ben:** Yes.

<i class="timecode">[00:29:05]</i> **Lindsay:** So in this case, for rendering our HTML, we do need to say "Html.Styled.form." That's one of the few gotchas, yeah.

<i class="timecode">[00:29:15]</i> **Ben:** Yeah. "Styled.form." Okay. Yes.

And that is because the Html, like, there's gonna be a function for the `<form>` element, and then also, any `<input>` and submit button and `<select>` and stuff like that can accept a "form" attribute that can associate that input with a `<form>` that's not necessarily its, like, ancestor element, which is— 

<i class="timecode">[00:29:40]</i> **Lindsay:** Exactly. 

<i class="timecode">[00:29:40]</i> **Ben:** —pretty cool, but does convolute this a bit. 

<i class="timecode">[00:29:44]</i> **Lindsay:** Yeah. Cool.

<i class="timecode">[00:29:46]</i> **Ben:** Okay.

<i class="timecode">[00:29:46]</i> **Lindsay:** So if we go back to the browser, now we will see "Greet the chat." 

<i class="timecode">[00:29:49]</i> **Ben:** And I could have done — and you maybe shouldn't — but I could do, like, "placeholder" and yeah, now it's a placeholder text.

<i class="timecode">[00:30:01]</i> **Lindsay:** Yep! Cool.

<i class="timecode">[00:30:03]</i> **Ben:** Alright. I'm seeing how this stuff is starting to fit together now. 

<i class="timecode">[00:30:06]</i> **Lindsay:** Yeah! So, just for the sake of finishing our little form here, let's add the submit button.

<i class="timecode">[00:30:13]</i> **Ben:** Yes, okay.

<i class="timecode">[00:30:15]</i> **Lindsay:** Before we start adding any events. 

<i class="timecode">[00:30:17]</i> **Ben:** Yes. And so that's gonna be… oh, okay. So it's gonna be a new… in here, this is gonna be—

<i class="timecode">[00:30:24]</i> **Lindsay:** I think you want it inside of the same list as the input.

<i class="timecode">[00:30:29]</i> **Ben:** Yes. Okay.

<i class="timecode">[00:30:31]</i> **Lindsay:** 'Cause then it'll be in the form. 

<i class="timecode">[00:30:34]</i> **Ben:** Yes. This is gonna be… I think it goes down there. And… "button."

<i class="timecode">[00:30:46]</i> **Lindsay:** Yep.

<i class="timecode">[00:30:46]</i> **Ben:** And then this needs a child of… I wanna say it's text. 

<i class="timecode">[00:30:50]</i> **Lindsay:** You are correct. 

<i class="timecode">[00:30:51]</i> **Ben:** Yeah, Ryan says, "When you're first getting started with learning, using the (..) to import everything is a great idea. As you get more comfortable with Elm, you'll see that problem less and less because you'll start using things like 'Html.form' or 'Attribute.value.'"

<i class="timecode">[00:31:06]</i> **Lindsay:** Yep.

<i class="timecode">[00:31:08]</i> **Ben:** Yeah, okay. And then this… this is some text that'll just say "Submit."

And this uses some magic from the last stream, which is that I happen to know that Html exports "text," which is a way to get a text fragment.

<i class="timecode">[00:31:21]</i> **Lindsay:** Exactly.

<i class="timecode">[00:31:22]</i> **Ben:** And now we've imported that, 'cause we've imported everything from Html.

<i class="timecode">[00:31:26]</i> **Lindsay:** Yep!

<i class="timecode">[00:31:27]</i> **Ben:** Oh, too many arguments. Okay, what have I done? 

<i class="timecode">[00:31:31]</i> **Lindsay:** You are missing a comma after the input.

<i class="timecode">[00:31:34]</i> **Ben:** Like here?

<i class="timecode">[00:31:37]</i> **Lindsay:** Yes, although the Elm compiler will move that to the start of the next line.

<i class="timecode">[00:31:42]</i> **Ben:** Really? Okay, so—

<i class="timecode">[00:31:43]</i> **Lindsay:** Oh, well, it didn't.

<i class="timecode">[00:31:44]</i> **Ben:** But it would look like this, is what you're saying?

<i class="timecode">[00:31:47]</i> **Lindsay:** It would look like that, yeah. It's common practice in Elm to put commas at the beginning.

<i class="timecode">[00:31:53]</i> **Ben:** Mmm.

<i class="timecode">[00:31:54]</i> **Lindsay:** The reasoning for that is if you add a new line—

<i class="timecode">[00:31:57]</i> **Ben:** Mmm!

<i class="timecode">[00:31:57]</i> **Lindsay:** Because Elm does not allow trailing commas for no reason, if you add it, if you add a new line, it will just show a Git difference on the one line, as opposed to adding the comma and then the new line. 

<i class="timecode">[00:32:09]</i> **Ben:** Gotcha. Yeah, okay, that makes sense. 

<i class="timecode">[00:32:12]</i> **Lindsay:** To Ryan, I think we installed elm-format beforehand. It's just being grumpy right now. 

<i class="timecode">[00:32:21]</i> **Ben:** Yeah. Yeah, we spent some time working on this setup in the green room.

Okay, so yeah, we now have… like, we successfully have an `<input>`. We have submit. If we click it, like, it is doing submission. Okay, so… I want to do… "type." Then I would like to spell "submit" correctly.

<i class="timecode">[00:32:48]</i> **Lindsay:** On the `<input>`? 

<i class="timecode">[00:32:50]</i> **Ben:** No, you're right. I want that on the `<button>`. Thank you. Good call, good call. I promise I know how HTML works! I built my brand on that. 

<i class="timecode">[00:33:00]</i> **Lindsay:** I mean, you're having to write HTML in a weird syntax. It's understandable.

<i class="timecode">[00:33:05]</i> **Ben:** Yes.

<i class="timecode">[00:33:06]</i> **Lindsay:** So, the first thing you're gonna wanna do for adding that type is add it to the first array, because that's where our attributes live.

<i class="timecode">[00:33:13]</i> **Ben:** I was like, "Ah, I'm so clever. I know how to use attributes now." And then I still put in the wrong place.

<i class="brackets">[Lindsay chuckles]</i>

<i class="timecode">[00:33:19]</i> **Lindsay:** The second thing to keep in mind is "type" is a reserved keyword in Elm. 

<i class="timecode">[00:33:25]</i> **Ben:** Okay. So is it gonna be "Html.Styled." — what is the full name? — "Attributes.type"? 

<i class="timecode">[00:33:32]</i> **Lindsay:** So, we do have it imported. The trick that Elm does to get around it, in the community, is just to have an underscore after the name.

<i class="timecode">[00:33:39]</i> **Ben:** Oh, okay.

<i class="timecode">[00:33:41]</i> **Lindsay:** So, you'll see this again on "main" if we ever render a `<main>` HTML element.

<i class="timecode">[00:33:48]</i> **Ben:** Gotcha.

<i class="timecode">[00:33:48]</i> **Lindsay:** Because "main" is also the main function of the application.

<i class="timecode">[00:33:52]</i> **Ben:** Okay, I see!

<i class="timecode">[00:33:53]</i> **Lindsay:** So it's not really a reserved word, but it basically is.

<i class="timecode">[00:33:56]</i> **Ben:** Right. It's conventionally reserved.

<i class="timecode">[00:33:59]</i> **Lindsay:** Yeah.

<i class="timecode">[00:34:00]</i> **Ben:** Okay. Yeah, so now if I inspect the markup over here… we will see…

Yeah, we got type="submit" there. Awesome.

<i class="timecode">[00:34:11]</i> **Lindsay:** Sweet. Cool.

<i class="timecode">[00:34:13]</i> **Ben:** Nice!

<i class="timecode">[00:34:14]</i> **Lindsay:** So, let's do two next steps. The first thing we need to do is — oh, actually, no. We're still not allowing input into our elements.

<i class="timecode">[00:34:25]</i> **Ben:** Yeah!

<i class="timecode">[00:34:25]</i> **Lindsay:** So let's do some binding here. And to do that, we need to add a new message type. So let's go back up to our "type Msg."

And let's just delete NoOp, because we do wanna do things. We don't need that anymore. We could call it something like "UpdateNewTodo" or something along those lines. 

<i class="timecode">[00:34:47]</i> **Ben:** "UpdateNewTodo," like this?

<i class="timecode">[00:34:49]</i> **Lindsay:** Sure! And then after that, do a space and "String" with a capital S.

<i class="timecode">[00:34:56]</i> **Ben:** Oh, I see.

<i class="timecode">[00:34:58]</i> **Lindsay:** And so what that says is this variant of type Msg is "UpdateNewTodo," and it has a string as part of its data.

<i class="timecode">[00:35:09]</i> **Ben:** Okay.

<i class="timecode">[00:35:09]</i> **Lindsay:** So in our "update" function, which we now need to change, on line 18, change that to be "UpdateNewTodo." And then before the arrow, just do a space and say "text" or "newTodo" or "newInput" or something.

<i class="timecode">[00:35:26]</i> **Ben:** Yeah. I'll call it "todo."

<i class="timecode">[00:35:29]</i> **Lindsay:** Cool. And just hover over that for one second. I'm curious if you've got — no, we do not have that. Okay, just checking. So that is going to be a string that we can then inject into our model.

So now we're going to do a model update, which is exciting. So in JavaScript, for example, if you wanted to update a value, you would potentially just do "model.newTodo = todo." We don't have that option because A, we're returning a value because we're a pure functional language, and B, everything is immutable. So what we need to do is an update to this record. So to do that, we wrap the model in curly brackets.

<i class="timecode">[00:36:05]</i> **Ben:** Alright!

<i class="timecode">[00:36:07]</i> **Lindsay:** And then to the right of it, do a pipe.

And now we are updating— we're saying we're returning "model" and we're updating these other things in the record.

<i class="timecode">[00:36:21]</i> **Ben:** Okay.

<i class="timecode">[00:36:22]</i> **Lindsay:** So in this case, say "newTodo = todo."

<i class="timecode">[00:36:28]</i> **Ben:** Got it.

<i class="timecode">[00:36:29]</i> **Lindsay:** And that's it!

<i class="timecode">[00:36:32]</i> **Ben:** Okay?

<i class="timecode">[00:36:33]</i> **Lindsay:** So that should be behaving right now.

<i class="timecode">[00:36:35]</i> **Ben:** I'll say "howdy."

<i class="timecode">[00:36:39]</i> **Lindsay:** We should now be able to…

<i class="timecode">[00:36:40]</i> **Ben:** We haven't actually wired this up.

<i class="timecode">[00:36:42]</i> **Lindsay:** Oh, we didn't wire it up. My bad. Let's go wire it up. So in "input," on line 25, we now need to add the event. And Event is going to be its own module that we're importing, so actually, first, before we can write anything here, back to the top. Import Html.Styled.Events.

<i class="timecode">[00:37:04]</i> **Ben:** Okay. And should we just expose everything again, or…?

<i class="timecode">[00:37:07]</i> **Lindsay:** Yeah, we can do that for now.

<i class="timecode">[00:37:08]</i> **Ben:** And it's "Events?"

<i class="timecode">[00:37:11]</i> **Lindsay:** Yes.

<i class="timecode">[00:37:12]</i> **Ben:** Okay.

<i class="timecode">[00:37:14]</i> **Lindsay:** There we go. So now we can start adding events like onClick, onSubmit.

<i class="timecode">[00:37:18]</i> **Ben:** Mm!

<i class="timecode">[00:37:19]</i> **Lindsay:** Whatever we want. For now, we're gonna do "onInput."

<i class="timecode">[00:37:23]</i> **Ben:** "oninput."

<i class="timecode">[00:37:26]</i> **Lindsay:** With a capital I.

<i class="timecode">[00:37:27]</i> **Ben:** Okay.

<i class="timecode">[00:37:28]</i> **Lindsay:** Sorry. Little more like JSX than straight HTML. And then we don't need an equals because "onInput" is also a function.

<i class="timecode">[00:37:38]</i> **Ben:** Right, okay.

<i class="timecode">[00:37:39]</i> **Lindsay:** And all you need to do is pass it the message name, in this case "UpdateNewTodo." 

<i class="timecode">[00:37:46]</i> **Ben:** As a string? 

<i class="timecode">[00:37:48]</i> **Lindsay:** Nope, just like that.

<i class="timecode">[00:37:49]</i> **Ben:** Okay.

<i class="timecode">[00:37:50]</i> **Lindsay:** So, what this does… this gets kind of complicated, and I'm not quite certain the right way to describe it, and I apologize.

<i class="timecode">[00:37:57]</i> **Ben:** No worries!

<i class="timecode">[00:37:58]</i> **Lindsay:** In this case, think of "UpdateNewToDo" as a function that takes a string and returns a message.

<i class="timecode">[00:38:04]</i> **Ben:** Oh - okay!

<i class="timecode">[00:38:06]</i> **Lindsay:** And then "onInput" takes a function that takes a string and returns a message and returns an attribute.

<i class="timecode">[00:38:13]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:38:14]</i> **Lindsay:** Gets a little convoluted when it's brand new to you, but that's how it's doing things under the hood.

So if we now go back, we can see that our update is actually doing things. And we can prove that because the little number is ticking in the corner.

<i class="timecode">[00:38:33]</i> **Ben:** Oh, right! Okay, yeah! So it starts off zero. We saw this last time. This is a lot like the Redux DevTools but just, like, built-in. You could pop this open, you can see the history of everything. But it starts out at zero 'cause our model hasn't updated at all. And then as I change this to be "Howdy," it ticks up. We can open this back up again. You can see, like, it went from nothing to H to H-O to H-O-W and so forth all the way up to "Howdy."

<i class="timecode">[00:39:03]</i> **Lindsay:** Yep.

<i class="timecode">[00:39:06]</i> **Ben:** Very cool. So we are updating our, our state successfully. Our model, rather. 

<i class="timecode">[00:39:11]</i> **Lindsay:** We're successfully updating our states. Now let's add the todo itself.

<i class="timecode">[00:39:14]</i> **Ben:** Yes. And so would it make sense to do this as, like, an unordered list?

<i class="timecode">[00:39:22]</i> **Lindsay:** For rendering them?

<i class="timecode">[00:39:23]</i> **Ben:** Yes.

<i class="timecode">[00:39:24]</i> **Lindsay:** Sure. That makes sense to me.

<i class="timecode">[00:39:26]</i> **Ben:** Okay!

Um… yeah, I'm trying to figure out. So what's the — alright. Let me do this. This needs to be like this, and then…

Okay, is it just gonna be "Ul?" Wait, it would be "ul" like that.

<i class="timecode">[00:39:47]</i> **Lindsay:** Yeah.

<i class="timecode">[00:39:50]</i> **Ben:** We don't need to worry about "Html.Styled," because I highly doubt "ul" is gonna collide with anything there. 

<i class="timecode">[00:39:55]</i> **Lindsay:** I don't think "ul" collides.

<i class="timecode">[00:39:56]</i> **Ben:** We got this. And then… I think I'm gonna…

Yeah, so it would be here. It would line up like that. And then I know we would be able to iterate over. We saw mapping last time. We'd be able to iterate over a list, but we aren't currently storing any list. 

<i class="timecode">[00:40:19]</i> **Lindsay:** Correct. So let's create our list. Don't forget the comma after the second—

<i class="timecode">[00:40:27]</i> **Ben:** Yes.

<i class="timecode">[00:40:27]</i> **Lindsay:** —set of brackets.

Cool. So let's create a new type for our todo, and we can just call it "type alias Todo."

<i class="timecode">[00:40:36]</i> **Ben:** Okay.

<i class="timecode">[00:40:40]</i> **Lindsay:** And Todo is going to have a task, which is a string.

And whether it's completed, so just a boolean flag of "isCompleted" or "completed" or something. In this case, Elm uses just "Bool." It doesn't spell out the full "Boolean."

<i class="timecode">[00:41:05]</i> **Ben:** Okay!

<i class="timecode">[00:41:07]</i> **Lindsay:** Cool, so we've got our alias of "Todo." Now let's add that to our model. So on the line above, just throw a comma after the string, and we can say "todos" is a list of Todo. 

<i class="timecode">[00:41:20]</i> **Ben:** Okay, and how do I mark that up? 

<i class="timecode">[00:41:23]</i> **Lindsay:** Just write the word "List," and then space, and "Todo."

<i class="timecode">[00:41:28]</i> **Ben:** Okay.

<i class="timecode">[00:41:28]</i> **Lindsay:** Just like that.

So we've now declared that model has a "newTodo" of String and "todos," which is a list of Todo. We then need to update there, yep. 

<i class="timecode">[00:41:38]</i> **Ben:** That's just gonna be an empty array. 

<i class="timecode">[00:41:41]</i> **Lindsay:** Sure.

<i class="timecode">[00:41:43]</i> **Ben:** Alright.

<i class="timecode">[00:41:45]</i> **Lindsay:** Cool, so now let's add a message so that we can actually submit and save that to our list of todos. 

<i class="timecode">[00:41:53]</i> **Ben:** Okay. This is gonna be down here, we'll add a new message, right? Do I need to do a comma first? 

<i class="timecode">[00:42:01]</i> **Lindsay:** We don't in this case because we're doing a case statement and it works on indentation.

<i class="timecode">[00:42:06]</i> **Ben:** Okay.

<i class="timecode">[00:42:06]</i> **Lindsay:** But we do need to add a different variant to our Msg on line 8, 

<i class="timecode">[00:42:12]</i> **Ben:** "type Msg = Submit"? 

<i class="timecode">[00:42:15]</i> **Lindsay:** Actually in this case, it's gonna be a little more like TypeScript, so instead of going to a separate "type Msg," we're just gonna do a pipe and have our next name.

<i class="timecode">[00:42:26]</i> **Ben:** Okay! Alright! I'm figuring this out!

<i class="timecode">[00:42:29]</i> **Lindsay:** We don't need any arguments here because it's on the model.

<i class="timecode">[00:42:33]</i> **Ben:** Right, okay. Got it!

<i class="timecode">[00:42:35]</i> **Lindsay:** 'Cause we can just take what we've got.

<i class="timecode">[00:42:37]</i> **Ben:** Then this is gonna be "SubmitTodo," and it doesn't need any arguments. So we'll just do a skinny arrow there, small arrow. And then it'll be "model," and then it'll be… what did we call it? We called it "todos." Equals, and now I want to concatenate the todo onto the end, right? 

<i class="timecode">[00:43:05]</i> **Lindsay:** Yeah. So in this case, what we'll do is just add two lists together, basically.

<i class="timecode">[00:43:13]</i> **Ben:** Okay. So it'll be like todos plus empty — well, not empty array, but then we'll put our record in here. 

<i class="timecode">[00:43:22]</i> **Lindsay:** Yeah. And there are other ways — as you're doing this, this is the way we're gonna do it — but there are other ways to do this like List.concat, but this is sufficient. 

<i class="timecode">[00:43:37]</i> **Ben:** It'll be "model.newTodo."

<i class="timecode">[00:43:40]</i> **Lindsay:** Yep.

<i class="timecode">[00:43:40]</i> **Ben:** And "completed: false." 

<i class="timecode">[00:43:44]</i> **Lindsay:** Cool.

<i class="timecode">[00:43:47]</i> **Ben:** Okay.

<i class="timecode">[00:43:47]</i> **Lindsay:** The last piece is you said "todos = todo." So, we need to say "model.todos" on the right hand side of the equals.

<i class="timecode">[00:43:59]</i> **Ben:** Gotcha, yes.

<i class="timecode">[00:44:01]</i> **Lindsay:** Cool. And then we can choose, if we want to reset newTodo to an empty string as well. 

<i class="timecode">[00:44:07]</i> **Ben:** Oh yeah, let's go ahead and do that. So that's comma, and then newTodo equals empty string.

<i class="timecode">[00:44:19]</i> **Lindsay:** Perfect.

<i class="timecode">[00:44:20]</i> **Ben:** And does it evaluate in the order it's provided here? 

<i class="timecode">[00:44:25]</i> **Lindsay:** I'm not sure what you mean, actually. 

<i class="timecode">[00:44:30]</i> **Ben:** Well, 'cause we're using newTodo. Oh, but it's all immutable so it'll return a new thing, so it doesn't matter. We can use model.newTodo safely. Cool, yeah.

<i class="timecode">[00:44:39]</i> **Lindsay:** Exactly. 

<i class="timecode">[00:44:40]</i> **Ben:** Immutability for the win.

<i class="timecode">[00:44:42]</i> **Lindsay:** One last change, because Elm has different symbols for math addition versus concatenation. We need two plusses.

<i class="timecode">[00:44:51]</i> **Ben:** Right. Okay. 

<i class="timecode">[00:44:54]</i> **Lindsay:** And that's it!

<i class="timecode">[00:44:55]</i> **Ben:** Awesome! And then, so here… this, we would—

Oh wait, actually, it's a `<form>`.

<i class="timecode">[00:45:04]</i> **Lindsay:** You can just do it on the `<form>`.

<i class="timecode">[00:45:05]</i> **Ben:** Yeah, and so it would be "onsubmit."

<i class="timecode">[00:45:09]</i> **Lindsay:** Yep.

<i class="timecode">[00:45:11]</i> **Ben:** Equals. 

<i class="timecode">[00:45:13]</i> **Lindsay:** No equals. It's a function.

<i class="timecode">[00:45:15]</i> **Ben:** Yes, okay.

<i class="timecode">[00:45:17]</i> **Lindsay:** I have — again, I have to correct myself a lot, too, even today. And the other difference is submit, capital S.

<i class="timecode">[00:45:25]</i> **Ben:** Yes.

<i class="timecode">[00:45:29]</i> **Lindsay:** And that's it! You should now be able to submit a todo. 

<i class="timecode">[00:45:34]</i> **Ben:** Ooh.

<i class="timecode">[00:45:34]</i> **Lindsay:** Oh, no! It doesn't like this.

<i class="timecode">[00:45:36]</i> **Ben:** What happened here? Okay, let's figure this out. "I just saw a field name, so I was expecting to see an equals sign next." Where… where is it…? Okay.

<i class="timecode">[00:45:47]</i> **Lindsay:** Oh, we should probably wrap our concatenation in parentheses, just to be safe. 

<i class="timecode">[00:45:54]</i> **Ben:** Okay. Yeah, so then take this…

One more. Ope. There we go. Parentheses-ify that.

<i class="timecode">[00:46:08]</i> **Lindsay:** Yeah!

<i class="timecode">[00:46:09]</i> **Ben:** And… that doesn't seem to have done it.

<i class="timecode">[00:46:22]</i> **Lindsay:** What's missing? Ohhh! You did a colon in our newTodo, "completed: false." 

<i class="timecode">[00:46:32]</i> **Ben:** Okay, wait— 

<i class="timecode">[00:46:33]</i> **Lindsay:** Line 21, in the new record that you're creating for the new task. 

<i class="timecode">[00:46:39]</i> **Ben:** Oh! Oh, I see. Yes.

<i class="timecode">[00:46:41]</i> **Lindsay:** Yeah.

<i class="timecode">[00:46:41]</i> **Ben:** I was so used to the JSON approach there, okay. "Cannot find a 'false' var—" oh, wait. Wait, wait. 

<i class="timecode">[00:46:50]</i> **Lindsay:** That's on me. 

<i class="timecode">[00:46:51]</i> **Ben:** Capital F, I'm guessing?

<i class="timecode">[00:46:52]</i> **Lindsay:** Capital F.

<i class="timecode">[00:46:54]</i> **Ben:** Gotcha. Then… yeah. 

Cool. Now we aren't actually rendering these yet, but we'll take a look at, like… in the little devtools as well. So we'll say "Howdy." "Welcome to Some Antics." We're already seeing that the clearing works. If I come here now… yeah, we can see that our last state has this list of our todos. 

<i class="timecode">[00:47:28]</i> **Lindsay:** Beautiful.

<i class="timecode">[00:47:29]</i> **Ben:** Okay!

<i class="timecode">[00:47:31]</i> **Lindsay:** Okay, let's put them on a screen.

<i class="timecode">[00:47:33]</i> **Ben:** Let's do it, yes!

That's gonna be in here, and… List.map. It's gonna take model.todos, right? 

<i class="timecode">[00:47:49]</i> **Lindsay:** Yes. 

<i class="timecode">[00:47:51]</i> **Ben:** And then can you help me with the rest? 

<i class="timecode">[00:47:54]</i> **Lindsay:** I can. So model.todos is the last argument, actually. In the middle is going to be our lambda. 

<i class="timecode">[00:48:00]</i> **Ben:** Gotcha. And this, I remember needing to be, like, a backslash?

<i class="timecode">[00:48:04]</i> **Lindsay:** Yes. And then "todo" with a small arrow. And now we can write our `<li>`. 

<i class="timecode">[00:48:13]</i> **Ben:** Right. And that can just be "li" now — again, because we've imported everything from Html.

<i class="timecode">[00:48:19]</i> **Lindsay:** Yep!

<i class="timecode">[00:48:21]</i> **Ben:** And that's gonna be… it's not gonna have any attributes, but it will have a child, and that child is going to be Html.text set to todo.task.

<i class="timecode">[00:48:34]</i> **Lindsay:** Yeah. We don't need "Html." there because we just imported everything.

<i class="timecode">[00:48:40]</i> **Ben:** That's right.

<i class="timecode">[00:48:43]</i> **Lindsay:** Cool. One other change is — as the compiler is telling us, actually — we are sticking… we are giving "ul" a list of a list.

<i class="timecode">[00:48:54]</i> **Ben:** Mm!

<i class="timecode">[00:48:54]</i> **Lindsay:** For its children. We can actually delete those second brackets and just have the "List.map."

<i class="timecode">[00:49:00]</i> **Ben:** Got it.

<i class="timecode">[00:49:01]</i> **Lindsay:** In parentheses.

<i class="timecode">[00:49:02]</i> **Ben:** Okay.

<i class="timecode">[00:49:04]</i> **Lindsay:** Otherwise it'll look like we're passing too many arguments. 

<i class="timecode">[00:49:08]</i> **Ben:** Yeah, and then clean up this.

<i class="timecode">[00:49:10]</i> **Lindsay:** Yeah.

<i class="timecode">[00:49:10]</i> **Ben:** And then… Elm convention would put the comma here.

<i class="timecode">[00:49:15]</i> **Lindsay:** Yes.

<i class="timecode">[00:49:20]</i> **Ben:** Cool. Hey, there it is! We even have our bullets all the way over here. 

<i class="timecode">[00:49:27]</i> **Lindsay:** Hooray!

Now — just, I see that we're approaching the hour mark, so let's just throw in some elm-css real quick, before we keep going.

<i class="timecode">[00:49:35]</i> **Ben:** Yeah!

<i class="timecode">[00:49:36]</i> **Lindsay:** Since we spent that time putting it in. So in our `<div>`, let's just… let's just make it smaller so we're not extending across the entire screen. 

<i class="timecode">[00:49:47]</i> **Ben:** Yeah. Okay, so we could set, like, the max-width to 40 characters or something like that would be good. 

<i class="timecode">[00:49:52]</i> **Lindsay:** Something like that, yeah.

<i class="timecode">[00:49:53]</i> **Ben:** Okay.

<i class="timecode">[00:49:53]</i> **Lindsay:** So the first thing we need to do is there is an attribute we're adding called "css."

<i class="timecode">[00:49:58]</i> **Ben:** Okay.

<i class="timecode">[00:49:58]</i> **Lindsay:** So just type in "css" and brackets.

<i class="timecode">[00:50:02]</i> **Ben:** Square brackets?

<i class="timecode">[00:50:03]</i> **Lindsay:** Square brackets, yep. And let's just validate that that compiled, because… we're doing something—

<i class="timecode">[00:50:11]</i> **Ben:** Looks like we're good!

<i class="timecode">[00:50:12]</i> **Lindsay:** Cool, just making sure.

Okay, so now what we need to do is import — at the top of our file — "import Css."

<i class="timecode">[00:50:20]</i> **Ben:** Just… okay, "import Css," like that? 

<i class="timecode">[00:50:23]</i> **Lindsay:** Just like that, yep. And in this case, I don't like to expose everything in Css. I really like having Css-dot-whatever my attributes are. Oh, no, no, not even exposing anything. I just… what you can do is just—

<i class="timecode">[00:50:37]</i> **Ben:** Oh!

<i class="timecode">[00:50:37]</i> **Lindsay:** —like you were doing with Html.text. I just like doing Css.maxWidth, Css whatever. 

<i class="timecode">[00:50:42]</i> **Ben:** And this is all gonna be camelcase, right?

<i class="timecode">[00:50:45]</i> **Lindsay:** Yes.

<i class="timecode">[00:50:45]</i> **Ben:** A la doing this in JSX. Okay.

<i class="timecode">[00:50:47]</i> **Lindsay:** Yep.

<i class="timecode">[00:50:47]</i> **Ben:** And this will be… no, wait, it's a function. 

<i class="timecode">[00:50:51]</i> **Lindsay:** It's a function, and it's going to not be a string that it takes. elm-css is nice because it actually enforces typesafe CSS as well. 

<i class="timecode">[00:51:01]</i> **Ben:** Oh, okay. Yeah, so I couldn't just go in and say, like, "Oh, it's a color" or anything like that. Okay.

<i class="timecode">[00:51:06]</i> **Lindsay:** Exactly. So in this case, delete that. Put in some parentheses, 'cause we're gonna need to wrap it anyway. And then do "Css.ch." I think it's just "ch." We'll find out! And then 40.

<i class="timecode">[00:51:24]</i> **Ben:** Alright.

<i class="timecode">[00:51:24]</i> **Lindsay:** And if that worked properly, we should be compiling.

<i class="timecode">[00:51:28]</i> **Ben:** Heyyy!

<i class="timecode">[00:51:29]</i> **Lindsay:** There you go. So now you have typesafe CSS saying that the max-width is 40 characters, which I think is pretty cool! 

<i class="timecode">[00:51:35]</i> **Ben:** Yeah! I mean, it's wild to even think about, like, CSS in the sense of, like, "Oh, I've just written typesafe code," you know?

<i class="timecode">[00:51:41]</i> **Lindsay:** Yeah!

<i class="timecode">[00:51:42]</i> **Ben:** Like, we don't usually talk about type safety in CSS. Even though, like, the CSS engine under the hood has all of that type safety, like, it's never brought to the forefront of, like, the dev tooling. 

<i class="timecode">[00:51:54]</i> **Lindsay:** Right. And so, for example, where we did characters, Css.ch, you could replace that with pixel or percent or—

<i class="timecode">[00:52:04]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:52:04]</i> **Lindsay:** —rem, or whatever unit you prefer.

<i class="timecode">[00:52:07]</i> **Ben:** Yeah.

<i class="timecode">[00:52:07]</i> **Lindsay:** And internally, elm-css is validating the type of that so you're not passing something invalid. It also has a nice helper when you wanna reduce something to zero. It's just "Css.zero," the word. 

<i class="timecode">[00:52:19]</i> **Ben:** Okay! Yeah, so I could have done… I'll revert this, like, immediately—

<i class="timecode">[00:52:23]</i> **Lindsay:** Yeah.

<i class="timecode">[00:52:23]</i> **Ben:** But "Css.zero" like that?

<i class="timecode">[00:52:26]</i> **Lindsay:** Uh, "Css.maxWidth Css.zero."

<i class="timecode">[00:52:28]</i> **Ben:** Oh, right, yes, okay.

<i class="timecode">[00:52:31]</i> **Lindsay:** But yes.

<i class="timecode">[00:52:32]</i> **Ben:** Like that. 

<i class="timecode">[00:52:34]</i> **Lindsay:** Yep.

<i class="timecode">[00:52:34]</i> **Ben:** Cool!

<i class="timecode">[00:52:34]</i> **Lindsay:** And that would just smush the whole thing. 

<i class="timecode">[00:52:36]</i> **Ben:** Right, which I don't think it's gonna work, 'cause— oh, well, yeah, okay. It just, like, basically took the minimum width it could take.

<i class="timecode">[00:52:43]</i> **Lindsay:** Yeah.

<i class="timecode">[00:52:43]</i> **Ben:** But yeah. Okay.

Do you think we could speedrun removing list items that have been completed, or no? It's totally fine if no. 

<i class="timecode">[00:52:57]</i> **Lindsay:** Uh, I think we can. Give me one second just to validate a thing… because I wanna make sure how we're going to be removing things.

I know this is such exciting streaming right now as I look up documentation.

<i class="timecode">[00:53:24]</i> **Ben:** Always.

<i class="timecode">[00:53:25]</i> **Lindsay:** Okay, so let's add a quick ID onto our task. That's gonna be the easiest way. And then we can do a filter.

<i class="timecode">[00:53:30]</i> **Ben:** Okay, yeah. So, every… yeah, so up here we need to add a… ope. Yeah, this is correct. So add ID. This is going to be of type String.

<i class="timecode">[00:53:47]</i> **Lindsay:** Could be type String, could be type Int. Whatever you'd like. 

<i class="timecode">[00:53:52]</i> **Ben:** Cool, cool.

Mike, thank you so much for the raid! Good to have y'all here, peruvianidol crew. We're wrapping up soon enough, but we've been working on a little todo application with Elm, and right now we're gonna see if we can quickly remove some items.

So, okay. How do I…? Okay, what now? 

<i class="timecode">[00:54:13]</i> **Lindsay:** Okay, so in our "SubmitTodo," on the new record you're creating for the todo, we just need to add the ID. Unfortunately, this is all on one line. It's on line 22. 

<i class="timecode">[00:54:25]</i> **Ben:** Line — oh, right, yes. 

<i class="timecode">[00:54:26]</i> **Lindsay:** So, in the yellow-bracketed task — yeah, in there — we just need to add the ID. In this case, let's just create the ID based off of the length of the list. That'll be the fastest. 

<i class="timecode">[00:54:38]</i> **Ben:** Oh yeah. Okay, so this'll be model.todos. And then is there a ".length"? 

<i class="timecode">[00:54:46]</i> **Lindsay:** Unfortunately not, because we are not object-oriented. We need to call List.length on model.todos. 

<i class="timecode">[00:54:51]</i> **Ben:** Okay, got it. "List.length model.todos."

Man, I should have spent more time breaking this out into lines, but okay. Alright.

<i class="timecode">[00:55:01]</i> **Lindsay:** Gets the job done.

Cool, so now we have an ID. Now for removing a todo, we need to add a new message which is "RemoveTodo." 

<i class="timecode">[00:55:10]</i> **Ben:** Okay, yeah. So we'll do that. We'll bring it down to a new line. We'll do "RemoveTodo."

<i class="timecode">[00:55:16]</i> **Lindsay:** Yep. And after the fact, we will need to add it to our union up top.

<i class="timecode">[00:55:23]</i> **Ben:** Yes. Okay. And I think the fastest way… let's set "completed" to be true, I guess, is how I want to do this, I think. 

<i class="timecode">[00:55:35]</i> **Lindsay:** Alright. I mean, we could do a full on delete button and just filter it out, too. 

<i class="timecode">[00:55:40]</i> **Ben:** Yeah, let's do that, then. Yeah, let's do that. So what's the quickest way to, like, splice the completed item out of the todo?

<i class="timecode">[00:55:48]</i> **Lindsay:** Okay, so we're gonna do "todos =." 

<i class="timecode">[00:55:51]</i> **Ben:** "todos =," and then it's gonna be parentheses, right?

<i class="timecode">[00:55:54]</i> **Lindsay:** Yes.

<i class="timecode">[00:55:55]</i> **Ben:** And it's gonna be model.todos. 

<i class="timecode">[00:55:57]</i> **Lindsay:** Actually we want do a List.filter first.

<i class="timecode">[00:56:00]</i> **Ben:** "List.filter," okay. 

<i class="timecode">[00:56:03]</i> **Lindsay:** And then we're gonna do some cool syntax here. This is some fun Elm code.

<i class="timecode">[00:56:09]</i> **Ben:** Okay!

<i class="timecode">[00:56:10]</i> **Lindsay:** 'Cause I was prepared for this part, at least.

<i class="timecode">[00:56:12]</i> **Ben:** Nice.

<i class="timecode">[00:56:12]</i> **Lindsay:** As soon as I find it again to make sure I'm writing it right! Okay, so instead of having a lambda where we actually get the todo, just type the word… or type, in the parenthesis, ".id." And then remember how we did the right angle brackets twice earlier? We're gonna do the same thing. And then you can… in parentheses inside that, we're gonna do not equals, which is a "/=" instead of a "!=." 

<i class="timecode">[00:56:45]</i> **Ben:** Okay, like this. Okay. 

<i class="timecode">[00:56:47]</i> **Lindsay:** Yes. Outside of parentheses.

<i class="timecode">[00:56:52]</i> **Ben:** Okay…?

<i class="timecode">[00:56:54]</i> **Lindsay:** And then we're gonna need a todo ID, so let's just say "id" for now. We're gonna need to add that as an argument to "RemoveTodo."

<i class="timecode">[00:57:01]</i> **Ben:** Got it.

<i class="timecode">[00:57:02]</i> **Lindsay:** That's it. So, yes, after that, just add an "id."

<i class="timecode">[00:57:06]</i> **Ben:** Okay.

<i class="timecode">[00:57:06]</i> **Lindsay:** And then in our "type Msg" on line 9…

<i class="timecode">[00:57:11]</i> **Ben:** Yes. Now do "RemoveTodo," and this is gonna take a number, right? An integer.

<i class="timecode">[00:57:20]</i> **Lindsay:** Yep. 

<i class="timecode">[00:57:22]</i> **Ben:** Okay?

<i class="timecode">[00:57:22]</i> **Lindsay:** And now we just need our button that triggers that in the UI. 

<i class="timecode">[00:57:27]</i> **Ben:** Right, okay. And so I'd like to probably add that for each item. Tell you what, let's… we are…

I think… I think we can handle this in time, so, okay.

<i class="timecode">[00:57:44]</i> **Lindsay:** I think we're good.

<i class="timecode">[00:57:46]</i> **Ben:** I'm gonna add a comma here, and do I need to parentheses-ify this?

<i class="timecode">[00:57:51]</i> **Lindsay:** Nope, that's fine.

<i class="timecode">[00:57:52]</i> **Ben:** No? Okay. We'll say "button," and then…

That's gonna need…

<i class="timecode">[00:58:01]</i> **Lindsay:** In the first one, we're going to add "onClick."

<i class="timecode">[00:58:06]</i> **Ben:** Yes. "onClick." That's gonna be "RemoveTodo." 

<i class="timecode">[00:58:12]</i> **Lindsay:** Yep. And here we will need parentheses around "RemoveTodo" and the ID.

<i class="timecode">[00:58:18]</i> **Ben:** Okay. Got it. And that's gonna be todo… 

<i class="timecode">[00:58:23]</i> **Lindsay:** "todo.id."

<i class="timecode">[00:58:24]</i> **Ben:** Okay.

<i class="timecode">[00:58:26]</i> **Lindsay:** And then just some text. Yeah, "Delete." Just do "text."

<i class="timecode">[00:58:30]</i> **Ben:** Yeah.

<i class="timecode">[00:58:31]</i> **Lindsay:** Whatever is nice. "Yeet." 

<i class="timecode">[00:58:35]</i> **Ben:** It's important we make HTML and building web applications approachable to the younger generation.

<i class="timecode">[00:58:43]</i> **Lindsay:** That's fair, that's fair.

<i class="timecode">[00:58:44]</i> **Ben:** Okay, so we've got our "Yeet" buttons. And we just yote everything.

<i class="timecode">[00:58:48]</i> **Lindsay:** Oh, no!

<i class="brackets">[both laugh]</i>

Oh, they didn't have IDs. Maybe that's the problem. Because we did hot module refresh.

<i class="timecode">[00:58:57]</i> **Ben:** Oh, right, okay! Yeah.

<i class="timecode">[00:58:59]</i> **Lindsay:** So let's try that again real quick.

<i class="timecode">[00:59:00]</i> **Ben:** Yeah.

<i class="timecode">[00:59:01]</i> **Lindsay:** That was exciting.

<i class="timecode">[00:59:03]</i> **Ben:** Okay. "Greet, delete, yeet." Okay. Yeah, it is working!

<i class="timecode">[00:59:13]</i> **Lindsay:** There we go! 

<i class="timecode">[00:59:17]</i> **Ben:** Alright! Very cool, very cool. Is there anything more — I know we're really at the end of time, but is there any more you wanted to show or talk about, about, like, kind of this process of, like, building Elm applications? 

<i class="timecode">[00:59:30]</i> **Lindsay:** I think this has highlighted the flow of building an Elm application pretty well. You start with the idea. You know what the next step is that you wanna build. You make the change, and then you follow the compiler to make sure that you're able to do the thing you wanna do.

<i class="timecode">[00:59:41]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:59:42]</i> **Lindsay:** And in general, except when hot module reload gets in the way, when it compiles, it works!

<i class="timecode">[00:59:47]</i> **Ben:** Nice! That's super exciting.

<i class="timecode">[00:59:49]</i> **Lindsay:** So, maybe I'll come back for a part three where we finish up this TodoMVC and have all the functionality.

<i class="timecode">[00:59:56]</i> **Ben:** I am here for that. I think that's gonna be great. I would love to do that. So, yeah!

In the meantime, you know, if anyone out there can't wait for the next… you know, the next stream, for the part three on this, what are some good resources to send people to? 

<i class="timecode">[01:00:17]</i> **Lindsay:** Some good resources… so, the biggest one that I would point out is there is a book that you can pick up from Manning called "Elm in Action" by Richard Feldman. That is an excellent resource on just picking up Elm, learning it step by step. Richard walks you through building an application from start to finish, including single-page application functionality, which we did not get to.

<i class="timecode">[01:00:41]</i> **Ben:** Okay.

<i class="timecode">[01:00:41]</i> **Lindsay:** So that's a great resource. The other one I would point at for now is the podcast Elm Radio. 

<i class="timecode">[01:00:47]</i> **Ben:** Okay.

<i class="timecode">[01:00:49]</i> **Lindsay:** Let me double check that… yeah, just elm-radio.com. And that is by Dillon and Jeroen. They're both very prolific Elm developers. Dillon has worked on elm-graphql, and is working on elm-pages which is very similar to what Remix is doing right now. elm-pages 3 is gonna have the same kind of server-side GET and POST functionality but all written in Elm, which is exciting. 

<i class="timecode">[01:01:15]</i> **Ben:** Okay.

<i class="timecode">[01:01:15]</i> **Lindsay:** And Jeroen is the developer of elm-review!

<i class="timecode">[01:01:19]</i> **Ben:** Nice! Awesome.

<i class="timecode">[01:01:21]</i> **Lindsay:** So those are both excellent resources to go to.

<i class="timecode">[01:01:24]</i> **Ben:** Thank you so much.

<i class="timecode">[01:01:24]</i> **Lindsay:** There's always the Elm Slack as well.

<i class="timecode">[01:01:27]</i> **Ben:** Yeah!

<i class="timecode">[01:01:28]</i> **Lindsay:** On the Elm site, you can find the invite there. 

<i class="timecode">[01:01:31]</i> **Ben:** Yeah, it looks like… yep. Yeah, alright!

<i class="timecode">[01:01:35]</i> **Lindsay:** Cool.

<i class="timecode">[01:01:35]</i> **Ben:** I will put this in here.

Ryan, thank you so much for being here and for your feedback in the chat. Maybe we gotta get Ryan on at some point, too. I know Ryan does Elm stuff as well.I think he… Ryan, you stream, don't you? You're a streamer? Let me shout you out. Look at that, "Game Development in Elm Land."

And then, Lindsay, I know it's been a while since you streamed, but we were talking ahead of time that, like, you know, you were looking to start streaming soon, and so I will shout out your Twitch as well so that people can kind of preliminarily follow you for when your next streams come up.

<i class="timecode">[01:02:13]</i> **Lindsay:** Woo!

<i class="timecode">[01:02:14]</i> **Ben:** Then, yeah! Y'all, go follow Lindsay on Twitter as well. Let her know how much you loved this stream. And yeah! Thank you all so much for being here. Our next stream should be next Tuesday, 2pm Central. I'm still figuring out specifics on that. But you can always keep apprised of stream updates at our Twitter, which I've linked in the chat. And go ahead and follow here. There should be a big purple follow button if you haven't followed already. And that way, you can keep apprised of all the cool streams about web development, things such as this and accessibility and core web technologies.

Stick around, chat. We are going to find someone to raid. In the meantime, thank you so much for being here, all of y'all, and thank you again for returning to the stream, Lindsay. It's been super great having you, and I'm excited for part three. 

<i class="timecode">[01:03:04]</i> **Lindsay:** I'm excited as well. Looking forward to it.

<i class="timecode">[01:03:10]</i> **Ben:** Bye, y'all!