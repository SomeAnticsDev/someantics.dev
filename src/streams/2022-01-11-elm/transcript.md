**Ben:** Hello, hello! Welcome back to Some Antics. Today, I am joined by the one and only Lindsay Wardell. Lindsay, welcome to the stream! 

<i class="timecode">[00:00:09]</i> **Lindsay:** Thank you, I'm excited to be here! 

<i class="timecode">[00:00:10]</i> **Ben:** I'm excited to have you! We, I guess, met through the Lunch Dev Discord, which I'll have to put a link to in the chat already. But yeah! You recently joined. We've had the pleasure of chatting a couple times. I'm super, super excited to have you on. For folks who haven't seen you around, haven't gotten to meet you yet, would you like to introduce yourself? 

<i class="timecode">[00:00:35]</i> **Lindsay:** Sure. My name is Lindsay Wardell. I'm in Portland, Oregon. I am an engineer at NoRedInk, which is a learning platform for middle and high schoolers to learn English and writing skills. By the way, we are hiring. And I also participate on the podcast Views on Vue and do a little bit of blogging and a little bit of talking on Twitter. That's kind of my public face. I'll also throw in I enjoy biking and I enjoy coding. 

<i class="timecode">[00:01:03]</i> **Ben:** And long walks along the beach and stuff like that. Yeah!

<i class="timecode">[00:01:07]</i> But yeah! So, I'm excited to have you on. I'm excited about today's topic, which is Elm. To tell you the truth, Lindsay, I feel a little out of my wheelhouse here. It's been, you know, a while since I've learned a new language properly. Not really counting TypeScript here, because TypeScript is a superset of JavaScript. But it's been a while since I've learned any new languages like this. And so, I guess, before we really dive into what it is we're doing today, can you kind of talk to us about, like, what is Elm and why might someone use Elm over alternatives?

<i class="timecode">[00:01:46]</i> **Lindsay:** Sure! So at its core, Elm is a functional programming language. The tagline on the Elm website is that it's "a delightful language for building reliable web apps." The main issue that we as JavaScript developers get into is that JavaScript is… Sorry, I'm going to put it. It has some flaws, it has some issues, and that's partly to do with why it was originally created. But when you're building a large scale application, something using React or Vue or whatever framework of the day you want to choose, you run into certain issues over and over again, things like "undefined is not a function, "cannot read null of undefined." You're not able to rely on the code that you write, even with all of the testing in place, because something could go wrong. And something is data coming in from an API, say that it could be a user gave some input that you weren't expecting. It's possible to get into impossible situations. Just that much easier in JavaScript.

<i class="timecode">[00:02:52]</i> Where Elm really shines is that it is a language that is designed for building reliable web apps from the start. So what some of the guarantees with Elm is you will almost never see a runtime exception. If your code is able to compile and it is able to run, it will not crash on the client side. You will not have an "undefined is not a function." Elm actually doesn't even have a concept of undefined or null.

<i class="timecode">[00:03:17]</i> **Ben:** Whoa!

<i class="timecode">[00:03:18]</i> **Lindsay:** Some of the other guarantees are that when you're making an HTTP request, for example, something very common in JavaScript apps, that data that comes back has to be parsed from a JSON object, which Elm doesn't even really recognize JSON as a type. It's just when you get an HTTP request, you can say you're expecting JSON and then parse it into the data type that you're expecting within Elm. So if you don't get the JSON back that you're expecting, it will go into an error state and you'll have to handle that error, saying "The server returned something wrong. I'm sorry. I can't do that." Rather than, even if you're using TypeScript, you can say that the — let's say we're using fetch — await fetch(), and then you do a res.json() on it. You can type that in TypeScript and say "I expect this data to be in this type structure" and start acting on it. But there's nothing actually guaranteeing that that data is that type.

<i class="timecode">[00:04:14]</i> **Ben:** Mm!

<i class="timecode">[00:04:14]</i> **Lindsay:** So that's where some of Elm's guarantees come in, that the data you're getting is actually what you expect. And rather than it being a framework or library on top of JavaScript, it's a full language, so there's complete control over the ecosystem. There's complete control over how the language is structured, how the code is written, so that at the end of the day, you have an application that is as reliable as you expect it to be. 

<i class="timecode">[00:04:42]</i> **Ben:** Gotcha, and I think that's really interesting that you call it out in comparison to TypeScript, because my experience with TypeScript — like, first of all, TypeScript has, I think, more escape hatches than the marketing would lead you to believe. But, like, TypeScript also has kind of this constraint that they've started with, which is that they are a superset of JavaScript so ultimately, everything is kind of bolted onto JavaScript syntax, right? It's JavaScript plus the closest way that TypeScript could get to what it is they want it to get to in that syntax. Whereas Elm is a blank slate, right? 

<i class="timecode">[00:05:21]</i> **Lindsay:** Right. So Elm does compile to JavaScript. Its compiler is written in Haskell and turns the Elm code into JavaScript, but it's not reliant on how JavaScript does things or how JavaScript allows for any data to be any type at any time. And you're right, TypeScript has a lot of escape hatches. There's the `any` type, there's the `unknown` type, and there's the fact that the web APIs… sometimes you just can't control what comes out of them.

<i class="timecode">[00:05:49]</i> **Ben:** Mm!

<i class="timecode">[00:05:49]</i> **Lindsay:** Fetch is a good example. JSON.parse() is another example. You just can't anticipate what's going to happen. Whereas with Elm, because it is a compiled language, you're able to do that static analysis of "all of my data is the type that I am expecting and nothing is going to happen that I don't anticipate." Obviously with all of this, business logic can still be wrong. Elm doesn't suddenly make you a 10× developer, whatever that means. But you have some strong guarantees and reassurances as you're writing the code that everything works as expected.

<i class="timecode">[00:06:26]</i> **Ben:** Gotcha. Okay! Yeah, so I'd love to start diving into what we're doing. Is there any, like, more you wanted to say about Elm before we start kind of showing some code and diving in? 

<i class="timecode">[00:06:39]</i> **Lindsay:** No, let's dive into the code! We'll talk about it as we go. 

<i class="timecode">[00:06:42]</i> **Ben:** Awesome. So we are now looking at my screen. I am showing Lindsay's Twitter. Y'all, go follow her on Twitter. Go show her the Some Antics love. She is @lindsaykwardell on Twitter. 

<i class="timecode">[00:06:58]</i> Yeah, so you sent me ahead of time, you've got this template that we're going to be using. Can you kind of talk about this template a bit? 

<i class="timecode">[00:07:06]</i> **Lindsay:** Yeah, so coming from the Vue ecosystem, I am a big fan of the Vite developer tool. And one of the nice things about how Elm is written is there's integrations into all of these different bundlers. So there's one for Webpack, there's one for Rollup. It's actually built into Parcel, so if you're using Parcel for your bundling, you can just import Elm files automatically.

<i class="timecode">[00:07:28]</i> **Ben:** Oh, dang!

<i class="timecode">[00:07:29]</i> **Lindsay:** But I really like Vite, so I put this template together as a baseline. If you wanted to start an Elm application using Vite and get the benefits of the Vite ecosystem, you can just start with this template and start writing Elm code pretty easily.

<i class="timecode">[00:07:44]</i> Some of the nice features of the template itself is the Elm plugin provides hot module reload. So if you're working on an Elm module, it will try to hot reload if it can. Obviously, if it can't, it'll just refresh the page. Also comes with some built-in examples of tests using the elm-test library, and uses the GitHub workflow to enable that whenever you do a commit, so it will run the tests for you, which is kind of fun!

<i class="timecode">[00:08:13]</i> **Ben:** Okay!

<i class="timecode">[00:08:14]</i> **Lindsay:** Yeah. I think that's the basics of it. I love Vite. You should go check out Vite if you're not using it.

<i class="timecode">[00:08:18]</i> **Ben:** We had an episode a while back with Anthony, who's in the chat today. Let me get a link to that in the chat there.

<i class="timecode">[00:08:30]</i> Yeah, so we're going to go ahead and use this. I'll just use this handy green "Use this template" button here, and we're going to find my SomeAnticsDev. Should I call this anything in particular or is, like, "introduction-to-elm" good enough, or…?

<i class="timecode">[00:08:47]</i> **Lindsay:** It should be fine.

<i class="timecode">[00:08:48]</i> **Ben:** Cool.

<i class="timecode">[00:08:49]</i> **Lindsay:** I don't think there's anything specific we need. 

<i class="timecode">[00:08:51]</i> **Ben:** Alright. And let's go ahead and make that public. And do I need to include all branches, or nah?

<i class="timecode">[00:08:58]</i> **Lindsay:** Nah.

<i class="timecode">[00:08:59]</i> **Ben:** Cool. Alright. In that case, here's already a link to our repo that we'll be playing with, so after all of this is done, you'll be able to find the source code in here! Very cool. And let me go ahead and clone this down. 

<i class="timecode">[00:09:19]</i> **Lindsay:** Sounds good. While you're doing that, I'll make one more comment. The template also includes a package from npm called `elm-tooling`. Because Elm is its own language, typically you would have to install Elm itself onto your machine. `elm-tooling` does that for you, so it will bring the Elm language itself and a couple of different tools—

<i class="timecode">[00:09:43]</i> **Ben:** Ohh! Okay.

<i class="timecode">[00:09:43]</i> **Lindsay:** —so that everything is in place for your repository, which is really nice. 

<i class="timecode">[00:09:47]</i> **Ben:** Interesting! Because, like, if you're writing Python code, you have to install the, like, Python binary and everything like that. This is just, it's part of the repo configuration, is it will pull…?

<i class="timecode">[00:09:58]</i> **Lindsay:** Yep.

<i class="timecode">[00:09:58]</i> **Ben:** Wow, interesting! Okay. Very, very neat!

<i class="timecode">[00:10:04]</i> So I've got the code, and so should I…? I'm just gonna peek at the `package.json`. That seems like a good place to start. Ooh! Actually, I probably should not have dismissed that, but okay! 

<i class="timecode">[00:10:18]</i> **Lindsay:** That's okay, we can get back to it. 

<i class="timecode">[00:10:20]</i> **Ben:** And so I see you've got `"postinstall"`. You've got `"dev"`, `"prebuild"`, `"build"`, `"serve"`, and `"test"`. Okay, so I'm just gonna install my dependencies? 

<i class="timecode">[00:10:30]</i> **Lindsay:** Yup.

<i class="timecode">[00:10:36]</i> And we'll see here, because it's in the post-install, once everything is in place, `elm-tooling` will do its thing and it'll bring `elm`, `elm-format`. `elm-json`, and `elm-test-rs`. `elm` itself is the Elm language. `elm-format` is… think of it as Prettier.

<i class="timecode">[00:10:52]</i> **Ben:** Okay.

<i class="timecode">[00:10:53]</i> **Lindsay:** Unlike in JavaScript where you can kind of debate what styling and formatting is best, whether you should use semicolons or not or something like that, Elm has an official style guide.

<i class="timecode">[00:11:02]</i> **Ben:** Mm!

<i class="timecode">[00:11:03]</i> **Lindsay:** And `elm-format` just enforces it, which is nice.

<i class="timecode">[00:11:06]</i> **Ben:** Very cool.

<i class="timecode">[00:11:06]</i> **Lindsay:** `elm-json`, we don't need to worry about. It's for updating dependencies and installing dependencies. And `elm-test-rs` is the Elm test runner written in Rust.

<i class="timecode">[00:11:15]</i> **Ben:** Got it. Okay! Very neat! 

<i class="timecode">[00:11:20]</i> **Lindsay:** So, yeah. That is it as far as installing. We should just be able to run `npm run dev` and get our dev server up and running.

<i class="timecode">[00:11:28]</i> **Ben:** Let's do it!

<i class="timecode">[00:11:37]</i> And… localhost:3000. I have to go manually open this in my browser of choice because otherwise it will pop up off screen. Something is hogging my memory resources. It couldn't be any piece of the whole streaming setup. Couldn't be any of that.

<i class="timecode">[00:11:55]</i> **Lindsay:** No, no.

<i class="timecode">[00:11:59]</i> **Ben:** There we go! Okay!

<i class="timecode">[00:12:00]</i> **Lindsay:** And there you go!

<i class="timecode">[00:12:00]</i> **Ben:** Nice! By the way, lovely work on the logo.

<i class="timecode">[00:12:04]</i> **Lindsay:** Elm has a great logo. One of the nice things is the community will take that logo and convert it into different shapes—

<i class="timecode">[00:12:11]</i> **Ben:** Okay…?

<i class="timecode">[00:12:11]</i> **Lindsay:** —for different things. So, like, there's an Elm Weekly newsletter that has turned it into the shape of a heart!

<i class="timecode">[00:12:17]</i> **Ben:** Nice!

<i class="timecode">[00:12:18]</i> **Lindsay:** Fun things like that. 

<i class="timecode">[00:12:20]</i> **Ben:** You've just gone in and basically used the Vite color schemes. I love it. Let's see, does this work? 

<i class="timecode">[00:12:27]</i> **Lindsay:** So this is all being rendered by Elm. So the count is just incrementing, and it shows you how we can edit the `Main.elm` file to auto-refresh. Before you move on, if you see in the bottom right corner, there's a counter that's been ticking up. Click on that.

<i class="timecode">[00:12:43]</i> **Ben:** Okay! Whoa, what's this?

<i class="timecode">[00:12:46]</i> **Lindsay:** Just like with something like Redux or VueX, Elm allows for time-traveling debugging.

<i class="timecode">[00:12:52]</i> **Ben:** Okay, okay!

<i class="timecode">[00:12:53]</i> **Lindsay:** So we can go backward and forward in time and see what the state of our application is in and what caused it to change. So in this case, we're sending a message of "Increment" to our app, which is then incrementing the model by one number at a time.

<i class="timecode">[00:13:09]</i> **Ben:** Wow. That's just all built into Elm, you said?

<i class="timecode">[00:13:12]</i> **Lindsay:** It is built into the template.

<i class="timecode">[00:13:15]</i> **Ben:** Oh, okay.

<i class="timecode">[00:13:16]</i> **Lindsay:** The Vite plugin for Elm brings this in as long as we're in development mode.

<i class="timecode">[00:13:20]</i> **Ben:** Okay.

<i class="timecode">[00:13:21]</i> **Lindsay:** But it's available across different development models, so if you're using Webpack. I think if you're using Parcel, it's there, too. There's lots of ways to get this. But it's one of the really nice features if you're trying to figure out what's going on, what state is my application in, things like that.

<i class="timecode">[00:13:37]</i> **Ben:** Oof. Someone's asking about our sound. We were trying to debug the sound ahead of time. Let us know if that's an improvement at all. We've been having sound issues a bit. Sorry, I don't know if this helps. If that's made it worse, let me know. But yeah, I don't know that we're going to get much better in real time.

<i class="timecode">[00:14:03]</i> Someone has mentioned, hey, we should click the logo on the Elmlang site. Whoa!

<i class="timecode">[00:14:09]</i> **Lindsay:** Oh, yeah, yeah, yeah. It rearranges.

<i class="timecode">[00:14:10]</i> **Ben:** Nice, it's very cute.

<i class="timecode">[00:14:13]</i> szinka, please let us know if that helped at all. Yeah, okay. Cool. 

<i class="timecode">[00:14:23]</i> **Lindsay:** I'll just keep talking to validate that.

<i class="timecode">[00:14:26]</i> **Ben:** Yeah, that would be a good call.

<i class="timecode">[00:14:27]</i> **Lindsay:** So yeah, so this is a basic template. Let's go to the code. Let's leave the server running so we can see things happen live, but let's stick in the code for a little bit. In the template itself, if you open up `src/`, you'll see three different files. We've got a `HelloWorld`, a `Main.elm`, and a `Message.elm`. We're actually going to delete the `HelloWorld` and `Message` once we get started here.

<i class="timecode">[00:14:52]</i> **Ben:** Okay!

<i class="timecode">[00:14:52]</i> **Lindsay:** I just wanted to look at them real quick as examples. So here is the `HelloWorld` module. 

<i class="timecode">[00:15:01]</i> **Ben:** I probably should have installed that Elm plugin.

<i class="timecode">[00:15:03]</i> **Lindsay:** Oh, yeah, we need the extension!

<i class="timecode">[00:15:04]</i> **Ben:** Yeah! Let's do that.

<i class="timecode">[00:15:05]</i> **Lindsay:** If you type in "Elm," it's the second extension, not the first one. 

<i class="timecode">[00:15:12]</i> **Ben:** This one that looks like it's got the, like, little wrench? 

<i class="timecode">[00:15:16]</i> **Lindsay:** Yes.

<i class="timecode">[00:15:16]</i> **Ben:** Okay.

<i class="timecode">[00:15:17]</i> **Lindsay:** So that is made as part of elm-tooling.

<i class="timecode">[00:15:20]</i> **Ben:** Mmmm.

<i class="timecode">[00:15:21]</i> **Lindsay:** And that will integrate all of the lovely things that we need, including some code highlighting. 

<i class="timecode">[00:15:28]</i> **Ben:** Okay! It's installed.

<i class="timecode">[00:15:32]</i> **Lindsay:** Woo!

<i class="timecode">[00:15:33]</i> **Ben:** And something here is thinking hard about what it wants to do for us. Let me shut down Discord, see if that helps at all. Alright. Wow! Something's chuggin'! Shut down Opera as well, I guess? See if that helps.

<i class="timecode">[00:16:01]</i> TechnoTone, thank you so much for the follow. Appreciate having you.

<i class="timecode">[00:16:04]</i> Huh, this is… Okay, I'm sure that this will pop in eventually at some opportune time.

<i class="timecode">[00:16:16]</i> **Lindsay:** Yes.

<i class="timecode">[00:16:17]</i> **Ben:** But in the meantime, can we… like, what is going on here? 

<i class="timecode">[00:16:22]</i> **Lindsay:** So like with many other languages — hey, the code formatting! Like with many other languages, you have at the top, first you're declaring what this file is. We're saying `module HelloWorld exposing (helloWorld)`. So if you're thinking like an object or a class, `helloWorld` is our public method, is what that is saying there. And the name of this file is `HelloWorld`, so it's `module HelloWorld`.

<i class="timecode">[00:16:49]</i> We then have a number of imports, which we will come back to later, but just like with JavaScript or Python or something, if you want to import from another file, this is the syntax you would use for that.

<i class="timecode">[00:16:59]</i> And then `helloWorld` itself, the function… we'll get a little more into this, but basically what it's doing here is taking in our model, which is just a number, and then returning some HTML. So with Elm, everything is a function, and that's something to important to keep in mind. So as we're generating HTML, we're calling a function — in this case, `div` — that takes two arguments. One is a list of attributes and the other is a list of more HTML. 

<i class="timecode">[00:17:30]</i> **Ben:** Okay, so we're not providing any attributes at the moment. 

<i class="timecode">[00:17:33]</i> **Lindsay:** Correct. But because of Elm's strong type system, we always need to provide the argument, even if it's going to be empty.

<i class="timecode">[00:17:41]</i> **Ben:** Okay.

<i class="timecode">[00:17:42]</i> **Lindsay:** And then we provide the list of HTML. So in this case, it's that h1 and then a couple of paragraphs and a button that increments.

<i class="timecode">[00:17:49]</i> **Ben:** Okay!

<i class="timecode">[00:17:51]</i> **Lindsay:** So just some straightforward stuff. We'll be writing something similar to this in just a bit. For now, though, let's jump over to our `Main.elm` file. 

<i class="timecode">[00:18:02]</i> **Ben:** Yeah, just a second. I think I might actually be able to help with some of the audio stuff. Do let me know if that helped at all. Yeah. Properties, let's see… Alright, yeah. Sorry about that. Anyways, go where?

<i class="timecode">[00:18:27]</i> **Lindsay:** Sorry, I was just going to poke my microphone, too .Let me know if that helps. 

<i class="timecode">[00:18:32]</i> **Ben:** I think whatever audio stuff is going on is on my end, unfortunately, and that makes it a little difficult to debug. Because again, I hear you just fine. It's however audio is being passed around on the Mac.

<i class="timecode">[00:18:46]</i> **Lindsay:** Gotcha.

<i class="timecode">[00:18:47]</i> **Ben:** Yeah.

<i class="timecode">[00:18:47]</i> **Lindsay:** Okay. So at this point, we're going to go to `Main.elm`, and `Main.elm` at the moment is pretty straightforward. We have a `main` function, we have an `update` function, and a `view` function. We're actually going to delete everything here and just start from scratch. So go ahead and just delete it all.

<i class="timecode">[00:19:03]</i> The first thing we need to do, like we looked at in the `HelloWorld` file, is we need to declare this module. So we're going to say, just like it says `module HelloWorld exposing (helloWorld)`, we're going to say in this case `module Main`, because that's the name of the file. 

<i class="timecode">[00:19:18]</i> **Ben:** Is that capital?

<i class="timecode">[00:19:18]</i> **Lindsay:** Capital M.

<i class="timecode">[00:19:19]</i> **Ben:** Okay. 

<i class="timecode">[00:19:21]</i> **Lindsay:** `exposing`… and then we're doing parentheses, and just say `main`, and we'll declare that function in just a moment.

<i class="timecode">[00:19:30]</i> **Ben:** Okay. So this, I would say is — Ooh, comments are apparently double hyphens. Interesting.

<i class="timecode">[00:19:37]</i> **Lindsay:** Yes.

<i class="timecode">[00:19:38]</i> **Ben:** So this is equivalent to probably, like, `module.exports = main;` where `main` is some function, or, like, `export default main;`, right?

<i class="timecode">[00:19:52]</i> **Lindsay:** It's more like the first one.

<i class="timecode">[00:19:54]</i> **Ben:** Okay.

<i class="timecode">[00:19:56]</i> **Lindsay:** So you can also think of it as either `module.exports` or `export function main`, and then you declare it or something like that.

<i class="timecode">[00:20:04]</i> **Ben:** Yeah. Okay!

<i class="timecode">[00:20:06]</i> **Lindsay:** So the next thing we need to do, because as we're writing a web application, we need to generate some HTML. So at this point we need to `import Html`.

<i class="timecode">[00:20:16]</i> **Ben:** Is that lowercase like this?

<i class="timecode">[00:20:19]</i> **Lindsay:** With a capital H in this case. So, all Elm modules start with a capital letter.

<i class="timecode">[00:20:25]</i> **Ben:** Okay.

<i class="timecode">[00:20:25]</i> **Lindsay:** And that's all we're gonna do right now. And now, let's declare our `main` function. So go down a couple more lines. Just type `main =`. And then `Html.text`, using a capital H. And just say "Hello World" after that. Space, quotes, "Hello World." Sorry. 

<i class="timecode">[00:20:49]</i> **Ben:** Mm. So it seems like Elm has done away with the notion of just parentheses where you would expect parentheses. 

<i class="timecode">[00:21:00]</i> **Lindsay:** Yes. So there are still parentheses when you need some sort of order of operations, and we'll get to a point where that matters, but in general you don't need to do that for arguments for a function.

<i class="timecode">[00:21:14]</i> So in this case, before we go back to the browser, what we're doing here is declaring a `Main` module, which exposes the function called `main`. We are importing the `Html` module so that we can do stuff with HTML. And then we are saying that `main` function is equal to `Html.text`, which itself is a function which takes a string, and then we provide the string "Hello World." So if we go back to the browser now, we will see that what we have done here is render "Hello World" to the screen! 

<i class="timecode">[00:21:47]</i> **Ben:** Nice! And this is just a… like, if I were to inspect this, I'm sure it's a text fragment, is what's going on there. That's what `Html.text` is, I'm guessing.

<i class="timecode">[00:21:56]</i> **Lindsay:** I believe so, yes. 

<i class="timecode">[00:21:58]</i> **Ben:** Looks like there's a… well, this is probably the root, I'm guessing, or part of it.

<i class="timecode">[00:22:03]</i> **Lindsay:** Right, yes.

<i class="timecode">[00:22:04]</i> **Ben:** But this is what we've created. 

<i class="timecode">[00:22:06]</i> **Lindsay:** Cool. Great. So, hooray! We've written an element! Congratulations. So now we're going to play around a little bit more. Let's go back to the code. 

<i class="timecode">[00:22:20]</i> **Ben:** My swipe was incorrect. I did not swipe correctly. And for that, I was punished. Alright.

<i class="timecode">[00:22:30]</i> **Lindsay:** So, first thing we're going to do is explore functions a little more and play around with how we can do things with strings. So like I said, that Html.text, that is a function. And in this case, the argument to it is a string, which we're providing as "Hello World." And it returns actual HTML for the Elm… words… for the Elm virtual DOM to render out to the browser. Similar to React and Vue, Elm does use a virtual DOM for how it works. It's very similar to how React handles things. So if the state changes, it then does a rerender of the app.

<i class="timecode">[00:23:12]</i> **Ben:** Okay.

<i class="timecode">[00:23:13]</i> **Lindsay:** And similar to React, where React has `useMemo` or something like that, Elm has ways to handle preventing stuff from rerendering if we don't need it to. We're not going to worry about that right now. We're not building anything that complex. 

<i class="timecode">[00:23:27]</i> So the next thing we're going to do is, let's just create a new function to handle our greet needs. So let's call it `greet`, and you can just say `greet =`. And if you just say "Hello World." Let's just start there. So if you replace "Hello World" in our `main` function with `greet`, we will see what that does.

<i class="timecode">[00:23:51]</i> **Ben:** Like this?

<i class="timecode">[00:23:52]</i> **Lindsay:** Just like that.

<i class="timecode">[00:23:53]</i> **Ben:** Okay?

<i class="timecode">[00:23:55]</i> **Lindsay:** We can go back to the browser. It's not going to look any different. It still says "Hello World." What we are doing is, `greet` is a function, so rather than thinking of everything as, like, variables…

<i class="timecode">[00:24:07]</i> There you go.

<i class="timecode">[00:24:08]</i> **Ben:** Okay!

<i class="timecode">[00:24:10]</i> **Lindsay:** Instead of thinking of things as variables, it's important to think of things as functions. So `greet` is a function that returns a string, and that's all it does. `main` is a function that returns some HTML, and that's all it does.

<i class="timecode">[00:24:22]</i> Well, you can add arguments to these functions though, so let's do that with `greet`. Instead of… Thinking in JavaScript terms, what we would normally do is write some parentheses and then name some variables inside of the parentheses, right? In Elm, we don't need to do that. So instead of parentheses and then arguments, you just put the names of the arguments after the function name, before the equals. So if we wanted to say `greet` and then have a variable of `name`, you just say, `greet name =` 

<i class="timecode">[00:24:56]</i> **Ben:** `greet name =` like this, you said?

<i class="timecode">[00:25:00]</i> **Lindsay:** Just like that.

<i class="timecode">[00:25:01]</i> **Ben:** Okay.

<i class="timecode">[00:25:02]</i> **Lindsay:** And then instead of "Hello Chat," we need to say "Hello {name}," so we need to do some concatenation here. It's similar to JavaScript in that you can concatenate strings as one would hope. Unlike JavaScript though, you do need two plus signs. But before you add it, I want to show off one of the cool features of Elm. Can you go to the terminal? No, have the `+ name` there. That was good.

<i class="timecode">[00:25:28]</i> **Ben:** Okay, okay!

<i class="timecode">[00:25:30]</i> **Lindsay:** I just want to show off one of the features of Elm, which is the compiler being super friendly.

<i class="timecode">[00:25:34]</i> **Ben:** Boom! Okay, it didn't go to the terminal but to the browser. That's even better. 

<i class="timecode">[00:25:38]</i> **Lindsay:** That works too. That's the plugin for Vite helping us out.

<i class="timecode">[00:25:42]</i> **Ben:** Mm!

<i class="timecode">[00:25:43]</i> **Lindsay:** So it's providing us with some context here. "The 1st argument to `text` is not what I expect. This `greet` value is something, but `text` needs the 1st argument to be a String." And then the second one is where we just changed something, so `greet name = "Hello " + name`. "The (+) operator only works with integers and float values. Hint: Switch to the (++) operator to append strings!"

<i class="timecode">[00:26:06]</i> **Ben:** Niiiice!

<i class="timecode">[00:26:07]</i> **Lindsay:** So this is one of the really nice features of the Elm compiler is it's trying its best to be super helpful and friendly. It's not just going to return "Invalid syntax" and throw you some errors that you have to go look up on Stack Overflow or something. It's going to do its best to explain what's going on. So we can see the two errors that we were having there. One is we're not concatenating with the concatenate string method. The other is — now we can see it even clearer — "This `greet` value is a: String to String." So what it's saying there is with the type system, it's expecting a string and it returns a string, but `text` needs the first argument to be just a string. So what we need to do is provide an argument to `greet` just like we declared in its declaration. So we can say `Html.text greet`, and then we can say "Chat" or our name or "Bob."

<i class="timecode">[00:27:03]</i> **Ben:** No. So that's not the syntax.

<i class="timecode">[00:27:07]</i> **Lindsay:** No, that is it actually, but because `Html.text` expects only one argument.

<i class="timecode">[00:27:11]</i> **Ben:** Ohhh!

<i class="timecode">[00:27:12]</i> **Lindsay:** We need to wrap `greet "Chat"` in parentheses. 

<i class="timecode">[00:27:15]</i> **Ben:** Okay, treating it as, like, a singular expression that can be resolved.

<i class="timecode">[00:27:20]</i> **Lindsay:** Right.

<i class="timecode">[00:27:20]</i> **Ben:** Heyyyyyy! We're back. We're back. I can go in and I can change this to say, like, "Hello Lindsay," and that works. Also, that is reloading very quickly. Like, it's loading much faster than I can actually switch between windows. 

<i class="timecode">[00:27:36]</i> **Lindsay:** Yep. Yeah, it's pretty fast. And part of that is also that Vite is just amazing to work with. But yeah, the Elm compiler is pretty quick, all things considered.

<i class="timecode">[00:27:50]</i> So let's dive back into the code. I want to show off one more thing while we're talking about strings, and that is a cool concept in functional programming of partial application. So let's update our `greet` function to take two arguments of `firstName` and `lastName`. 

<i class="timecode">[00:28:10]</i> **Ben:** Is it like this? Like, just space-separated?

<i class="timecode">[00:28:13]</i> **Lindsay:** Just like that.

<i class="timecode">[00:28:14]</i> **Ben:** Okay.

<i class="timecode">[00:28:14]</i> **Lindsay:** Yup. And then let's update to do concatenation on both of those.

<i class="timecode">[00:28:22]</i> **Ben:** It's not automatically going to add spaces, right? 

<i class="timecode">[00:28:25]</i> **Lindsay:** It is not.

<i class="timecode">[00:28:25]</i> **Ben:** Okay.

<i class="timecode">[00:28:26]</i> **Lindsay:** So you'll have to do that manually. Cool.

<i class="timecode">[00:28:31]</i> So at this point, our `greet` function is incorrect in our `main` function, but let's not worry about that right now. Let's create another function underneath. And we can call this one, I don't know, `greetLindsay`. And have it take a `lastName` and have it equal `greet "Lindsay"`.

<i class="timecode">[00:29:01]</i> **Ben:** Okay…?

<i class="timecode">[00:29:03]</i> **Lindsay:** So what we have done now — don't switch to anything — but what we have done now is, `greet` the function takes two arguments, `firstName` and `lastName`, and by saying, `greet "Lindsay"`, we have created a function (which is called `greetLindsay`) that only takes ONE argument and then finishes the function call.

<i class="timecode">[00:29:25]</i> **Ben:** Mm.

<i class="timecode">[00:29:26]</i> **Lindsay:** So if we do something like in the `main` function, change that to `greetLindsay` instead of `greet`, and then put my last name "Wardell."

<i class="timecode">[00:29:40]</i> **Ben:** In the JavaScript space, I believe…

<i class="timecode">[00:29:43]</i> **Lindsay:** There is one piece I'm forgetting, I think. We do need to use that last name. So `greet "Lindsay" lastName`. 

<i class="timecode">[00:29:51]</i> **Ben:** Oh, yeah, yeah, okay, yep. 

<i class="timecode">[00:29:53]</i> **Lindsay:** Sorry, that was my bad. Not concatenating, just passing it in as an argument.

<i class="timecode">[00:30:01]</i> **Ben:** Ah, right, okay.

<i class="timecode">[00:30:02]</i> **Lindsay:** No, no, no, sorry. We don't need it. Ahh, I'm forgetting things. My apologies to everyone watching. We don't need `lastName` here because we're doing the partial application, so we can delete `lastName` altogether from the second `greet "Lindsay"`.

<i class="timecode">[00:30:16]</i> **Ben:** Okay, so like this.

<i class="timecode">[00:30:18]</i> **Lindsay:** Just like that, just like that.

<i class="timecode">[00:30:20]</i> **Ben:** Mm!

<i class="timecode">[00:30:20]</i> **Lindsay:** And if we go back to our browser, we should say "Hello Lindsay Wardell."

<i class="timecode">[00:30:25]</i> **Ben:** Okay. Oh! Oh, nice, okay. Very cool. 

<i class="timecode">[00:30:28]</i> **Lindsay:** I was messing up. My bad.

<i class="timecode">[00:30:30]</i> **Ben:** In an immediate breach of naming here, if I had replaced this with… yeah. Okay, cool. So I believe in JavaScript spaces, first of all, it's not nearly as easy to do partial application, but I believe this is what in JavaScript spaces we might call currying. Wow.

<i class="timecode">[00:30:50]</i> **Lindsay:** Yes.

<i class="timecode">[00:30:50]</i> **Ben:** That is hard to say. Curr-y-ing. There we go. Currying.

<i class="timecode">[00:30:53]</i> **Lindsay:** Yeah, same basic idea. 

<i class="timecode">[00:30:55]</i> **Ben:** Just, I think this is far cleaner of a way to do it. 

<i class="timecode">[00:31:00]</i> **Lindsay:** Yeah. And so you can stack this. If you have, like, a complex function that you want to pass down to lower in your function tree, then you can prepare it by passing in most of its arguments but not the last one, and then pass it down—

<i class="timecode">[00:31:16]</i> **Ben:** Mmm.

<i class="timecode">[00:31:17]</i> **Lindsay:** —rather than having to provide everything upfront or pass an event all the way to the top that's then called at the top level of your application. So it can make some function calls a lot simpler when you're working in submodules, for example.

<i class="timecode">[00:31:30]</i> **Ben:** Gotcha. And this is nice, too, cause like, yeah, it allows you, like, a way to provide, I think, a smoother API where for instance, you could have a lot going on, maybe a lot of possible configurations getting passed around, but then there's, like, the version of the API that's, like, the sensible defaults that you would need in most cases. So you could partially apply most of those defaults, and then the one configuration that's mandatory is, you know, the function that you actually end up using. You still have all of those other functions with all the other configurations, but there's also just the smoother API. I'm thinking of, basically, this as a replacement to everything that Redux is doing with like… Redux has its `connect` API, but that's actually, like, a smooth layer over `connectAdvanced` which has, like, so many more arguments. Like, this is a way to do that, basically. 

<i class="timecode">[00:32:25]</i> **Lindsay:** Yeah. And actually, if you dig into the history of Redux, I believe Redux was inspired by Elm.

<i class="timecode">[00:32:32]</i> **Ben:** Oh, dang! Oh, dang.

<i class="timecode">[00:32:34]</i> **Lindsay:** So there is some lineage there between Redux and Elm. And the other Flux libraries, honestly. Kind of interesting.

<i class="timecode">[00:32:46]</i> So let's move on to our next piece. I want to talk a little bit about how we would do things to strings. So for example, in JavaScript, if you are wanting to call… I can't think of a good example off the top of my head. If you're wanting to — So, let's do numbers instead actually.

<i class="timecode">[00:33:10]</i> So first off, numbers in Elm, if you're wanting to do basic addition, subtraction, and stuff, that works exactly as you would expect. So if you want to do 1 + 1, it will return 2. 1 - 1 would return 0. Things like that. The main difference in Elm to JavaScript is that Elm has two different number types. There is an integer and there is a float. So if you are doing division, for example, then you have to think about, "Am I using integers or am I using floats? What do I need to convert from an integer to a float or vice versa?"

<i class="timecode">[00:33:40]</i> **Ben:** Mhmm.

<i class="timecode">[00:33:42]</i> **Lindsay:** Something to keep in mind. We're not going to be actually doing that kind of math. I just wanted to explain it real quick.

<i class="timecode">[00:33:48]</i> **Ben:** Okay.

<i class="timecode">[00:33:48]</i> **Lindsay:** Let's handle some numbers here, for example, with our `greet` function. Or we could… yeah. Yeah, let's use the `greet` function. So let's change it back to just `greet name` and simplify things. We don't need the whole thing.

<i class="timecode">[00:34:06]</i> And, yeah. Perfect. But let's add a second argument of… I don't know, let's do `favoriteNumber`.

<i class="timecode">[00:34:19]</i> So at this point, let's do `++`, or concatenation, and then some parentheses and go to a new line. So we're going to do an if statement and we're going to just show off a little bit with numbers. So… yeah. So if `favoriteNumber` is equal to 17, which is my favorite number. 

<i class="timecode">[00:34:51]</i> **Ben:** Okay, is that double equals? Is that what's going on?

<i class="timecode">[00:34:53]</i> **Lindsay:** Double equals, yeah.

<i class="timecode">[00:34:54]</i> **Ben:** Okay, okay. 

<i class="timecode">[00:34:56]</i> **Lindsay:** So at this point, rather than where JavaScript would break into curly brackets, we just say `then`. So if this then do something. And we can say in quotes… because we're returning a string here, because we're concatenating… say something like "That's my favorite number, too." You know, whatever's comfortable.

<i class="timecode">[00:35:25]</i> **Ben:** Okay?

<i class="timecode">[00:35:25]</i> **Lindsay:** Cool.

<i class="timecode">[00:35:27]</i> **Ben:** So just like this? 

<i class="timecode">[00:35:29]</i> **Lindsay:** Just like that. And let's go look at the browser real quick. 

<i class="timecode">[00:35:33]</i> **Ben:** And it's gonna… yeah, 'cause we haven't actually passed a number. 

<i class="timecode">[00:35:38]</i> **Lindsay:** Oh, it's also complaining about the tab.

<i class="timecode">[00:35:40]</i> **Ben:** Ohh.

<i class="timecode">[00:35:40]</i> **Lindsay:** So, this is another piece about the Elm formatting. Is it expects four spaces. And actually, because you have the Elm tooling installed, if you do save, it might do an auto-format.

<i class="timecode">[00:35:55]</i> **Ben:** I think I actually disabled that in my VS Code.

<i class="timecode">[00:35:59]</i> **Lindsay:** Oh, okay, then let's not worry about it right now.

<i class="timecode">[00:36:00]</i> **Ben:** Okay. Just a thing to keep in mind. 

<i class="timecode">[00:36:03]</i> **Lindsay:** Yes. So let's jump back. Cool.

<i class="timecode">[00:36:09]</i> "I was expecting to see an `else` branch after this. I know what to do when the condition is True, but what happens when it is False? Add an else branch to handle that scenario!" So this is one of those guarantees about a reliable web app. If Elm sees that you're doing an if statement, the other side of that if statement has to return something too, and it has to be the same type. So in this case, because if the favorite number is 17, then we're returning a string, we also have to return a string with the else branch. So let's go back and just add something like `else "That's a cool number"` or something like that.

<i class="timecode">[00:36:45]</i> **Ben:** Can I do that on a new line like this?

<i class="timecode">[00:36:47]</i> **Lindsay:** You can do that on a new line, yeah.

<i class="timecode">[00:36:58]</i> **Ben:** Oh, god. That's a habit I would have to break.

<i class="timecode">[00:37:03]</i> **Lindsay:** Oh, yeah.

<i class="timecode">[00:37:05]</i> **Ben:** Unfinished parentheses…?

<i class="timecode">[00:37:08]</i> **Lindsay:** It might just be that the paren is not at the same tab. 

<i class="timecode">[00:37:14]</i> No, the new one. Push that in by four spaces. 

<i class="timecode">[00:37:20]</i> **Ben:** Oh… OH! Oh, that's… Okay, that was not how I was expecting… God, okay. And finally…

<i class="timecode">[00:37:32]</i> **Lindsay:** And now our `greet` function is not getting what it expects anymore, so pass in whatever number you'd like. 

<i class="timecode">[00:37:38]</i> **Ben:** `greet 14`. "Hello, Wardell. That's a pretty cool number, friend." And if I go back and say with 17, that's Elm's favorite number, too.

<i class="timecode">[00:37:51]</i> **Lindsay:** Woo!

<i class="timecode">[00:37:54]</i> **Ben:** Alright!

<i class="timecode">[00:37:54]</i> **Lindsay:** So yeah, so that's how an if statement works and that's how you can do basic things with numbers. It's fairly similar to JavaScript — plus, minus, multiplication, subtraction, comparisons. I can't think of an example where things are weird between the two, except that integers and floats are a thing as opposed to just JavaScript numbers.

<i class="timecode">[00:38:16]</i> **Ben:** Mhmm. 

<i class="timecode">[00:38:19]</i> **Lindsay:** So let's do one more fun thing here and let's look at lists. So in our `HelloWorld` file… we don't need to go there, but we saw that `div`, for example, the `div` function, took two arguments of lists. So let's do that here. 

<i class="timecode">[00:38:40]</i> **Ben:** Yeah. Okay. 

<i class="timecode">[00:38:43]</i> **Lindsay:** So we're going to do the same thing and…

<i class="timecode">[00:38:46]</i> **Ben:** Up here?

<i class="timecode">[00:38:46]</i> **Lindsay:** …instead of returning `Html.text` as the thing, we're going to do `Html.div`. And the first argument is the list of attributes, which we're not doing anything with. And then the second list would be our actual content.

<i class="timecode">[00:39:06]</i> **Ben:** Okay?

<i class="timecode">[00:39:08]</i> **Lindsay:** So let's just do the same thing that we were doing. Yeah. We do need to return text still. So `Html.text`.

<i class="timecode">[00:39:15]</i> **Ben:** Okay, and that's just like this.

<i class="timecode">[00:39:18]</i> **Lindsay:** Just like that.

<i class="timecode">[00:39:19]</i> **Ben:** And then put in here, let's say `greet`, we'll say "Lindsay," then 12.

<i class="timecode">[00:39:27]</i> **Lindsay:** Great. "Cannot find the end of this list." Oh, I think it's the last bracket is not indented the same. 

<i class="timecode">[00:39:36]</i> **Ben:** That is… a choice. 

<i class="timecode">[00:39:40]</i> **Lindsay:** It is a choice. And this is where elm-format comes in to help. 

<i class="timecode">[00:39:49]</i> **Ben:** Yeah. I need to turn that on, I think. Command-Shift-P, and then "Format on save." No? Okay.

<i class="timecode">[00:40:05]</i> **Lindsay:** You might be able to just right-click on the file and do format, too. Yeah, in there. 

<i class="timecode">[00:40:11]</i> **Ben:** I think it might be having issues 'cause we installed this live instead of, like…

<i class="timecode">[00:40:16]</i> **Lindsay:** Ohhh.

<i class="timecode">[00:40:16]</i> **Ben:** …restarting the editor, but okay! It's fine. I will live with it, but I'm sure the experiences for default VS Code when you've got this all installed and it's settled, I'm sure that's — oh, Command-COMMA.

<i class="timecode">[00:40:30]</i> **Lindsay:** Aha.

<i class="timecode">[00:40:30]</i> **Ben:** Yeah, there we go. Format on save. Thank you, OneMoreLayer. You are a hero.

<i class="timecode">[00:40:38]</i> **Lindsay:** Thank you!

<i class="timecode">[00:40:39]</i> **Ben:** Yeah, let's put that to the test.

<i class="timecode">[00:40:46]</i> **Lindsay:** Yes.

<i class="timecode">[00:40:48]</i> **Ben:** No. Okay, interesting.

<i class="timecode">[00:40:50]</i> **Lindsay:** Oh, no!

<i class="timecode">[00:40:51]</i> **Ben:** Let me just restart Code and meanwhile, you can talk as to what the next piece of the stream is.

<i class="timecode">[00:40:58]</i> **Lindsay:** Sure. So the next thing we're going to do is we're going to make a list of records. So I want to get through the main types of Elm compared to JavaScript stuff. So we've looked at lists, we've looked at strings, we've looked at numbers. We've looked a little bit at booleans, in that we did an if statement. But let's explore what…

<i class="timecode">[00:41:27]</i> **Ben:** Yeah, I think that's fine.

<i class="timecode">[00:41:29]</i> **Lindsay:** That's fine. That's fine. But the last thing we need to look at to match what we know with JavaScript is a record. And a record is just like a JavaScript object—

<i class="timecode">[00:41:43]</i> **Ben:** Okay.

<i class="timecode">[00:41:43]</i> **Lindsay:** —except… this is something to keep in mind for everything we've been doing. All values are immutable in Elm, so there is no mutable state.

<i class="timecode">[00:41:53]</i> **Ben:** Okay.

<i class="timecode">[00:41:54]</i> **Lindsay:** So if we're going to create a record, we're not going to be changing it anytime.

<i class="timecode">[00:41:57]</i> **Ben:** Mm.

<i class="timecode">[00:41:57]</i> **Lindsay:** So we can update it and get a new record, but we can't update the existing one.

<i class="timecode">[00:42:02]</i> **Ben:** Gotcha.

<i class="timecode">[00:42:04]</i> **Lindsay:** So let's create a new function called `people`, and `people` is going to return a list of people! So just `people =`, and then square brackets. And within those square brackets, we are going to put two people. So let's just put you and me, Ben.

<i class="timecode">[00:42:29]</i> **Ben:** Okay.

<i class="timecode">[00:42:29]</i> **Lindsay:** So first we'll do curly brackets. And we'll say `name` for the person's name. `name =` in this case, instead of a colon. `name = "Lindsay"`. In quotes. And comma. And then let's just say `number = 17`.

<i class="timecode">[00:42:55]</i> **Ben:** And then am I doing this right?

<i class="timecode">[00:42:57]</i> **Lindsay:** Yep, you're doing that right.

<i class="timecode">[00:42:58]</i> **Ben:** Like, this feels fairly, fairly JSON with equals instead of colons, but okay. `favoriteNumber`… or I guess it's just going to be `number` in this case. 

<i class="timecode">[00:43:09]</i> **Lindsay:** Yeah, I was just simplifying. 

<i class="timecode">[00:43:11]</i> **Ben:** I'll make that 14 because why not? 

<i class="timecode">[00:43:14]</i> **Lindsay:** Why not? Okay, so what we're going to do at this point is render this list of people out instead of just the `Html.text`. We're going to use this list of people and use a `map` function to turn it into what we want.

<i class="timecode">[00:43:31]</i> **Ben:** Okay!

<i class="timecode">[00:43:32]</i> **Lindsay:** This is going to feel very familiar if you've used React or used the `map` function in JavaScript before. The main difference is, unlike in JavaScript, because Elm is not object-oriented, it doesn't have inheritance. It doesn't have prototypes or anything. We can't just call `people.map` or something like that. We need to call a list function, `List.map`.

<i class="timecode">[00:43:55]</i> **Ben:** Okay.

<i class="timecode">[00:43:56]</i> **Lindsay:** So in our `main` function, delete the second array altogether, or the second list. And in parentheses, call `List` — capital L — `.map`. And do another set of parentheses. And in this case, we're going to do — making sure I'm saying it right — a backslash. So this is how we do a lambda function in Elm. So just say `\person`. 

<i class="timecode">[00:44:33]</i> **Ben:** Did I choose the right slash? I can never remember which slash is back.

<i class="timecode">[00:44:36]</i> **Lindsay:** You did.

<i class="timecode">[00:44:37]</i> **Ben:** Okay. 

<i class="timecode">[00:44:37]</i> **Lindsay:** I don't know if I said the right one, but that's the one I meant.

<i class="timecode">[00:44:40]</i> **Ben:** Okay!

<i class="timecode">[00:44:40]</i> **Lindsay:** So we're on the same page.

<i class="timecode">[00:44:42]</i> **Ben:** Cool.

<i class="timecode">[00:44:42]</i> **Lindsay:** Then we're going to do a small arrow. So JavaScript uses equals and bracket. We're going to do that, yep. Space. And then we can call our `Html.text`, just like we've been doing. And then… one more set of parentheses, and then we'll call `greet person.name person.number`. And then the last thing we need inside the yellow brackets — the yellow parentheses — is our list of people.

<i class="timecode">[00:45:22]</i> **Ben:** Okay.

<i class="timecode">[00:45:26]</i> **Lindsay:** So what are we doing here? We have a function, `people`, which is returning a list with two items, Lindsay and Ben. And then we are using `List.map` to map over that and return a list of HTML. We're taking `person` as an argument and then passing its name and number in as arguments to `greet`. So on the screen now, we should see two hellos. 

<i class="timecode">[00:45:51]</i> **Ben:** It's gross, it's not formatted, but it works!

<i class="timecode">[00:45:55]</i> <i class="brackets">[Lindsay laughs]</i>

<i class="timecode">[00:45:58]</i> Alright! 

<i class="timecode">[00:45:58]</i> **Lindsay:** And the goal here was more to see how functions on lists work. There's a whole bunch of these kinds of functions. So if we wanted to convert a number to a string, for example, we could call `String.fromInt` or `String.fromFloat`.

<i class="timecode">[00:46:15]</i> **Ben:** Mmm.

<i class="timecode">[00:46:15]</i> **Lindsay:** You can do the same thing the other direction, `String.toInt` or `String.toFloat`. There's `List.map`, there's `List.sortBy`, there's `List.reverse`. So that's some of the fun stuff that we can do with this. And if we wanted to format this better, we could replace the `Html.text` with actually returning a `<div>` that returned text to get them on different layers.

<i class="timecode">[00:46:38]</i> **Ben:** Are any HTML elements valid? Like, can I do a paragraph tag? 

<i class="timecode">[00:46:44]</i> **Lindsay:** You can! It does still need to hold text.

<i class="timecode">[00:46:47]</i> **Ben:** Oh.

<i class="timecode">[00:46:48]</i> **Lindsay:** So if you're going to return a string to the browser, it needs to have `Html.text`. 

<i class="timecode">[00:46:54]</i> **Ben:** Okay, so how would I wrap this in a `<div>` then? Or a paragraph. It would be like this, and then…

<i class="timecode">[00:47:00]</i> **Lindsay:** `Html.p`.

<i class="timecode">[00:47:00]</i> **Ben:** And then another set of parentheses?

<i class="timecode">[00:47:07]</i> **Lindsay:** So at first you would need the first set of square brackets for the list of attributes.

<i class="timecode">[00:47:13]</i> **Ben:** Aah.

<i class="timecode">[00:47:14]</i> **Lindsay:** And then you would need a second list or, yeah, a second set of square brackets for the content instead of parentheses. 

<i class="timecode">[00:47:22]</i> **Ben:** Interesting. And then I feel like I've gotten the nesting wrong here, but… 

<i class="timecode">[00:47:28]</i> **Lindsay:** I think it is, yeah. Put a parenthesis outside the square, yeah.

<i class="timecode">[00:47:33]</i> **Ben:** There we go.

<i class="timecode">[00:47:34]</i> **Lindsay:** That should work. 

<i class="timecode">[00:47:36]</i> **Ben:** Hey! Pretty sharp. 

<i class="timecode">[00:47:39]</i> **Lindsay:** Nice. So one last thing I want to play with, just to show one of the cool features of Elm — since I'm watching the clock and I see we're close to time — is we can… Let me back up. Have you heard of the pipeline operator, Ben? 

<i class="timecode">[00:48:01]</i> **Ben:** Yes. So this is… My summary of it is basically you pass a value to a function and then you pass the return value of that into another function and so forth and you can keep chaining it, as opposed to, like, wrapping things in function calls in function calls in function calls. Is that… Are we talking about the same thing? 

<i class="timecode">[00:48:23]</i> **Lindsay:** Yeah, that's exactly it. So let's do something a little similar but in Elm. So Elm does have a pipeline operator.

<i class="timecode">[00:48:32]</i> **Ben:** Okay.

<i class="timecode">[00:48:32]</i> **Lindsay:** And one of the really cool use cases for it is when you have a list of things or you have an object or something and you want to pass it through a pipeline of changes.

<i class="timecode">[00:48:42]</i> **Ben:** Okay.

<i class="timecode">[00:48:43]</i> **Lindsay:** So we're going to see how that works and we're going to try… uh, words. So what we're going to do is take our list of people. We're going to sort them by the favorite number.

<i class="timecode">[00:48:56]</i> **Ben:** Okay.

<i class="timecode">[00:48:58]</i> **Lindsay:** And then we're going to display the person on the screen as HTML. So let's change our function just a little bit. Could you break it out to a new line 

<i class="timecode">[00:49:08]</i> **Ben:** Yeah. And actually, do you want me to comment this so we can hold onto it and maybe start anew?

<i class="timecode">[00:49:12]</i> **Lindsay:** Yeah, yeah, let's do that.

<i class="timecode">[00:49:14]</i> **Ben:** Yeah, let's do that. Okay, so `main`, and then I assume we're starting with our `Html.div` here, and passing…

<i class="timecode">[00:49:21]</i> **Lindsay:** `main =`, but 

<i class="timecode">[00:49:21]</i> **Ben:** yes.

<i class="timecode">[00:49:22]</i> `main =`, yes. Pass it empty attributes. 

<i class="timecode">[00:49:28]</i> **Lindsay:** Let's just go to the second line now, just to make this a little smaller. Four spaces. And an open paren. And then we're going to do `people`, which is our people array. And then under that… go to the next line. Sorry. The… words. The end paren is going to be at the very end of everything. Perfect.

<i class="timecode">[00:49:58]</i> So go to the next line. Four more spaces to get indented. And then we're going to do the pipe and a right angle bracket. Just like that. So that's going to make… it's going to make a triangle shape, is the goal. 

<i class="timecode">[00:50:15]</i> **Ben:** Yeah, and this is, I believe, the exact same operator, like, down to the characters, that is coming to JavaScript, I believe—

<i class="timecode">[00:50:23]</i> **Lindsay:** It is.

<i class="timecode">[00:50:23]</i> **Ben:** —if you've followed the TC39 proposals. 

<i class="timecode">[00:50:26]</i> **Lindsay:** Yeah. The main difference we're going to see between the TC39 proposal and this one is that the special character you need to inject the returned value doesn't exist, so whatever our last argument is is going to be where the return value ends up as an argument to the next function.

<i class="timecode">[00:50:49]</i> **Ben:** Interesting. Yeah, 'cause JavaScript has, like, this concept of, like, the question mark, which is like, you apply whatever the return value from the previous step of the chain was, and it's like a question mark, I think is what they're considering. Or maybe it's like a caret? Might be the caret now.

<i class="timecode">[00:51:05]</i> **Lindsay:** Yeah, I've seen a couple different proposals. 

<i class="timecode">[00:51:07]</i> **Ben:** But it lets you basically say, like, you could choose where in the argument list you wanted to apply it.

<i class="timecode">[00:51:15]</i> **Lindsay:** Right.

<i class="timecode">[00:51:16]</i> **Ben:** Like that. But you're saying that Elm doesn't have anything like that. It's equivalent to always passing it in here at the very end, no matter what.

<i class="timecode">[00:51:26]</i> **Lindsay:** Yes. 

<i class="timecode">[00:51:27]</i> **Ben:** Cool. 

<i class="timecode">[00:51:28]</i> **Lindsay:** Yeah. And this works really well for piping a value that is going to either be changing its shape as you go, or just something that you want the same shape and you want to apply a bunch of functions to.

<i class="timecode">[00:51:39]</i> **Ben:** Yeah.

<i class="timecode">[00:51:39]</i> **Lindsay:** So if you're familiar with the array functions in JavaScript — you might do a `list.sort().reverse().map().`… you know, something like that, and you're just calling it one after the other. It's the same idea as what we're doing here.

<i class="timecode">[00:51:54]</i> **Ben:** Yeah.

<i class="timecode">[00:51:55]</i> **Lindsay:** So in this case, we're first going to call `List.sortBy`. 

<i class="timecode">[00:52:01]</i> **Ben:** Camelcase? 

<i class="timecode">[00:52:03]</i> **Lindsay:** Just like that. You got it. And then we're going to have another lambda function. So parentheses, backslash, person. And all we're doing here is we're providing the key to the `List.sortBy` that we want to sort the list by.

<i class="timecode">[00:52:19]</i> **Ben:** Okay.

<i class="timecode">[00:52:20]</i> **Lindsay:** So let's do the arrow, and then let's just sort by `number`. 

<i class="timecode">[00:52:23]</i> **Ben:** So it's `person.number`. 

<i class="timecode">[00:52:26]</i> **Lindsay:** Yup. And next line. And do another triangle. 

<i class="timecode">[00:52:34]</i> **Ben:** Getting my spaces all right.

<i class="timecode">[00:52:37]</i> **Lindsay:** Yeah.

<i class="timecode">[00:52:39]</i> **Ben:** I… maybe I need to go in and unset this, but I was very insistent that VS Code, like, "no, you will always insert tabs," and it's crushing me now that, like, this is not a tab language.

<i class="timecode">[00:52:50]</i> **Lindsay:** I think you can change that down at the bottom right with the tab size, right? If you click on that you can change it per file.

<i class="timecode">[00:52:59]</i> **Ben:** Ohhh. Oh, okay.

<i class="timecode">[00:53:01]</i> **Lindsay:** Yeah. Convert to spaces. And now it's going to be "Spaces: 4" for now.

<i class="timecode">[00:53:06]</i> **Ben:** Okay.

<i class="timecode">[00:53:07]</i> **Lindsay:** So let's just do `List.reverse` now. And that just takes in a list and reverses it, so there's no additional arguments there, 

<i class="timecode">[00:53:15]</i> **Ben:** right.

<i class="timecode">[00:53:15]</i> Because it's already received… like, this is an array, this returns an array, and then that array gets passed here, so we don't need to say… Yeah, okay. 

<i class="timecode">[00:53:26]</i> **Lindsay:** Exactly. So we'll do one more here, and now we're going to do our `List.map` where we return some HTML. So you can just copy it from the commented out one, too, 'cause it's the same. 

<i class="timecode">[00:53:40]</i> **Ben:** Okay. That was this up here? There we go.

<i class="timecode">[00:53:46]</i> **Lindsay:** Two more symbols, but yes.

<i class="timecode">[00:53:50]</i> **Ben:** Yes.

<i class="timecode">[00:53:50]</i> **Lindsay:** Yep. 

<i class="timecode">[00:53:50]</i> **Ben:** Cool.

<i class="timecode">[00:53:53]</i> **Lindsay:** Perfect. So now what we're doing is we're sorting by the number, we're reversing that, and then we're mapping over it—

<i class="timecode">[00:53:59]</i> **Ben:** Okay!

<i class="timecode">[00:53:59]</i> **Lindsay:** —and turning it into HTML. So if we go to our screen, we should see it in some order. Which in this case is no different, but if we remove the `List.reverse`…

<i class="timecode">[00:54:07]</i> **Ben:** Ahhh.

<i class="timecode">[00:54:08]</i> **Lindsay:** …we'll be putting Ben first instead of Lindsay.

<i class="timecode">[00:54:12]</i> **Ben:** Nice! Yeah, okay. 

<i class="timecode">[00:54:14]</i> **Lindsay:** Cool.

<i class="timecode">[00:54:16]</i> **Ben:** By the way—

<i class="timecode">[00:54:16]</i> **Lindsay:** I see that we are close to time.

<i class="timecode">[00:54:19]</i> **Ben:** Yeah.

<i class="timecode">[00:54:19]</i> **Lindsay:** So that's probably as far as we're going to get at the moment, but this, I hope, gave a taste of some of the syntax and some of…

<i class="timecode">[00:54:26]</i> **Ben:** Yeah!

<i class="timecode">[00:54:26]</i> **Lindsay:** …how Elm works to help you as a developer.

<i class="timecode">[00:54:30]</i> **Ben:** Yeah!

<i class="timecode">[00:54:30]</i> **Lindsay:** And then as you build out the application, it continues to help you as you go. So as things scale, Elm is able to keep in mind, "Oh, you have a value over here that's this type. It needs to be that type over here." As you make changes to your API like we were doing with `greet`, it will warn you these are all the places that you need to fix it. So it becomes a lot more straightforward to do a large refactor than if you were just working in something like TypeScript where it'll tell you in that specific file, but it might not tell you in all of the files and things might still compile depending on how you set your configuration, and especially in JavaScript where you don't get any of that benefit. 

<i class="timecode">[00:55:10]</i> **Ben:** Absolutely. Yeah, so like you said, this was just a taste of Elm, right? Where would you recommend folks go if they were interested in learning more about Elm and really picking this up to use it, like, in more fully-featured applications and such? 

<i class="timecode">[00:55:30]</i> **Lindsay:** So there are three different resources I would point you at. The first… Let me make sure I have the links up. The first is the Elm website, right there on the side under "A delightful language for reliable web apps," there is a guide, and that will walk you through the basics of Elm and how to do things. So as we were going here, we were kind of walking through the same basic concept, but so you'd be able to pick it up from the start and learn more about Elm as you go. You can learn about the Elm architecture, which is how full applications that take user input are handled. Learn more about types and error handling and how to do more complex things like HTTP requests. So this is a very good resource to start with.

<i class="timecode">[00:56:13]</i> The second one I would mention is called Beginning Elm, which is at elmprogramming.com 

<i class="timecode">[00:56:19]</i> **Ben:** elmprogramming… That's no hyphens or anything like that? 

<i class="timecode">[00:56:23]</i> **Lindsay:** No, no hyphens.

<i class="timecode">[00:56:25]</i> **Ben:** Okay.

<i class="timecode">[00:56:25]</i> **Lindsay:** Just elmprogramming.com. So this bills itself as "a gentle introduction to the Elm programming language." This is very similar in concept to the Elm guide, but goes a bit more in-depth.

<i class="timecode">[00:56:35]</i> **Ben:** Okay!

<i class="timecode">[00:56:35]</i> **Lindsay:** So they help you with building a simple web application and walk you through some of the key features with an actual example. So that is a great resource.

<i class="timecode">[00:56:45]</i> If you want to take it, another resource that I would recommend — this is on manning.com — it is the book "Elm in Action" by Richard Feldman. 

<i class="timecode">[00:56:55]</i> **Ben:** Okay. "Elm in Action." I'm just gonna… "Richard Feldman." I'm just goinna google it and see what comes up. Here we go. 

<i class="timecode">[00:57:05]</i> **Lindsay:** There it is! 

<i class="timecode">[00:57:05]</i> **Ben:** Nice. 

<i class="timecode">[00:57:08]</i> **Lindsay:** Yeah. Richard also works at NoRedInk and this is an excellent book for getting started. Unlike the other ones, other guides, that are focused on getting across key concepts, this has you working on a single application from start to finish.

<i class="timecode">[00:57:24]</i> **Ben:** Okay!

<i class="timecode">[00:57:24]</i> **Lindsay:** And it hands you requirements in piece-by-piece steps so that you're able to start implementing them in Elm and learn as you go. So definitely recommend this book. I have a copy myself that I enjoy looking at. 

<i class="timecode">[00:57:39]</i> **Ben:** Yeah! I think Alex has just recommended elmprogramming.com again. Yeah. Okay, cool! So these… this is fantastic.

<i class="timecode">[00:57:48]</i> And then, yeah, so you've been working on some tools for the Elm ecosystem as well. Like, we use today your Vite template. But you've got some other things you've been working on, right?

<i class="timecode">[00:58:02]</i> **Lindsay:** Yeah! So the Vite template is first, and that was specifically because I needed a way to write Elm apps in Vite. I really like the Vite ecosystem and I wanted that integration as closely as possible. So that was the first one. The second thing that I would mention is called Elm Vue Bridge.

<i class="timecode">[00:58:20]</i> **Ben:** Okay?

<i class="timecode">[00:58:21]</i> **Lindsay:** And what that is… Yeah, you should be able to get to it that way. So Elm Vue Bridge is a tool… if you are somebody who writes in Vue and you want to try out Elm, it is a way for you to render Elm modules inside of your Vue application. So if you want to, for example, just try out Elm, some of the things that we were doing, and render it inside of Vue, this provides you a wrapper function so that you can take your Elm code, turn it into a Vue component, and inject it into your Vue template—

<i class="timecode">[00:58:57]</i> **Ben:** Nice!

<i class="timecode">[00:58:57]</i> **Lindsay:** —just like you normally would. It also provides some nice utility if you want to integrate a Vue and an Elm app together using the Vue API a little bit closer. So for example, you'd be able to pass in props and listen to events being emitted from the wrapped Elm module as if it was a normal Vue component.

<i class="timecode">[00:59:17]</i> **Ben:** Very cool.

<i class="timecode">[00:59:18]</i> **Lindsay:** So that would be my second suggestion if you're wanting to look at some of the things that I've been working on. 

<i class="timecode">[00:59:23]</i> **Ben:** Awesome!

<i class="timecode">[00:59:24]</i> Well, Lindsay, thank you so much for your time. Thank you so much for showing us Elm. Y'all, go show Lindsay some love. Go follow her on Twitter. This has been great.

<i class="timecode">[00:59:36]</i> Next week, we're going to have Alex Riviere on. You might have seen him around the internet as Fimion. We are going to be making some terrible web components and I mean terrible. His whole thing is building stuff that hearkens back to the GeoCities aesthetic, and so it is going to be absolute nonsense. If you like nonsense, you'll want to be there next week, 2pm Centra next Tuesday.

<i class="timecode">[01:00:01]</i> And y'all, stick around. We're going to go raid… sounds like Aydrian's on, so we're going to go raid him! And y'all, thank you so much for being here! Bye, y'all!

<i class="timecode">[01:00:27]</i> **Lindsay:** See ya!