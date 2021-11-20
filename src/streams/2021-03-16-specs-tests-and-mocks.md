---
title: Specs, Tests, and Mocks with Randy Brown
thumbnailTitle: Specs, Tests, and Mocks
timeOfDay: 12pm
upload: https://www.youtube.com/watch?v=h1f8tUbpbbA
sourceCode: https://www.github.com/SomeAnticsDev/specs-tests-and-mocks
hosts:
  - Ben Myers
  - Randy Brown
---

How can backend tooling such as API specs and mock data improve our frontend developer ergonomics? Join Ben and Randy as we explore the world of specs, tests, and mocks together.

[Randy Brown](https://twitter.com/thatrandybrown) is a software architect and a LEGO enthusiast. In his free time, he's building a [cramped chess game](https://twitter.com/kingsidegame).

## Mentioned Links

* [Stripe API quickstart](https://stripe.com/docs/development/quickstart#test-api-request)
* ["Stop mocking fetch" by Kent C. Dodds](https://kentcdodds.com/blog/stop-mocking-fetch)
* [Mock Service Worker](https://mswjs.io/)
* [`openapi-backend`](https://www.npmjs.com/package/openapi-backend)
* [Stripe's OpenAPI spec](https://github.com/stripe/openapi/blob/master/openapi/spec3.json)

## Transcript

**Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. I'm Ben Myers, and today I'm joined by Randy. Randy, hello! 

**Randy:** Hi! How's it going?

**Ben:** It's going great. I'm super excited for this. I know we're going to be getting into some backend tooling and how those can improve frontend developer experience, but I'm also just really excited to chat with you.

You're one of my favorite people in the developer space, and I feel like every time I chat with you, I learn loads. Would you real quickly like to tell the chat a bit about yourself? 

**Randy:** Yeah. So, um, maybe, I mean, I don't know. I'm Randy Brown. I'm thatrandybrown on Twitter, which you have open right now. Once upon a time, I worked with Ben. More recently, I'm a frontend architect, so I mostly just, I don't know, I don't even know how to describe my job these days. Full-time, you know, scalable architectural decisions for frontend, mostly in terms of [00:01:00] developer ergonomics. And I'm happy to be here today and explore some of the things that I've learned. That's me. 

**Ben:** Awesome. Yeah, I feel like this is a consistent thing I've heard, is the further you get in your career, the harder it is to define what you do, 'cause it's a lot of that like glue work, right? You're not an individual contributor, but your job is to multiply the effects of the individual contributor. 

**Randy:** Right. Exactly. Like, I guess, at the highest level, I like to say that I just, I solve problems, but maybe I create more than I solve sometimes. But, you know, yeah, it's good stuff. 

**Ben:** So just before we went live, you gave me the best teaser of all time, which is "I want to tell a dinosaur joke when we start."

**Randy:** Yeah, of course, of course! Okay, so it's kind of not a joke, it's maybe a story. It's a true story, true-ish story, but it has a pretty good punchline. So my brother shared with me [00:02:00] yesterday that somebody on Reddit had proposed that we replace the presidents on our dollars with dinosaurs because they, you know, ruled the planet for 450 million years and that's an idea worth commemorating. But he said that he knew that they weren't serious because they didn't include stegosaurs, and, in fact, had put the pterosaur on the dollar bill, which, Ben, as you know, the pterosaur is not even actually a dinosaur. 

**Ben:** Of course. 

**Randy:** So I proposed that the hadrosaur should go on the dollar bill because, you know, the hadrosaur has bills. Dollar, dollar bills. 

**Ben:** Atrocious. And I'm here for it. 

**Randy:** Good old dinosaur jokes.

**Ben:** Alright. Yeah, so let's go ahead and get started. Can you give a little preview about what we're going to do today? Kind of the journey you want us to take? 

**Randy:** Yeah. So, I have not been a software [00:03:00] engineer very long, and in that time, I've experimented with a lot of different ways to deal with service calls and especially with when you're internal to the development environment.

And I got to say, Ben, maybe as a level-setting place, I make a core assumption here and that's that — this is just, you know, for me — but what local development means to me is that I can, like, write code on an airplane. And so that's one assumption is that, like, I want local development to be local. And the other one is that I only want to have to run the thing that I'm working on. Mostly because, like, I don't need or want a huge machine. 

And so what I'm going to walk through today is kind of the different ways that I've solved that problem and how maybe what I'm doing today and how I think it hits on a couple of different things that we do as frontend developers.

So, do [00:04:00] you mind if we dive in, or any questions? 

**Ben:** Let's do it! So beforehand, we've already created a React project, we spun up Create React App, and we have made absolutely no changes to this. So the codebase should look pretty familiar to anyone who's ever used a Create React App project. And we're starting off in `App.js` right now. 

**Randy:** Yeah. And just to continue to add to that, one of the things that we're going to do, Ben, kind of a popular thing is you'll have one of those buttons that says "Buy me a coffee," and it directs you through the Stripe process to buy the person whose site that's on a coffee. And so we're going to build one of those buttons, kind of using the Stripe sort of quickstart as a guide. 

And so, I just want to start by, you know, we're gonna delete a whole bunch of this, but we're just gonna start maybe by turning this into a button. And of course that means we don't need any of this stuff.

**Ben:** Mmhmm. 

[00:05:00] **Randy:** Alright. And so now that's a button and do we have this running somewhere? 

**Ben:** Let me kick that off right now. 

**Randy:** Awesome. Oh, look at you. Yeah. And we can add a second one here. We're just going to add a second one. And we'll do a, are you running Yarn or npm? 

**Ben:** Uh, either works. I think I just kicked that off with npm. No strong opinions there. Do you need a second terminal?

**Randy:**  I do! I, like, keep noticing… Alright, there we go. 

**Ben:** Let's do this. And make that read/write. There you go. Peek behind the curtain for anyone curious. 

**Randy:** So we're just going to do a `yarn test` in this one, and we should have, of course that's gonna, you know, do its thing. And so now we should have one that's running it… and there we go. Okay, cool. 

So we have a button, but it's not actually doing anything. And so we're going to add a little `onClick` here. [00:06:00] And we'll just, what is it? `sendPaymentIntent`… 

Okay, so at this point, I'm just gonna create a little placeholder here, and then we need to go look at some documentation.

**Ben:** Alright. And these are the Stripe docs, right? 

**Randy:** Stripe docs, correct. So, this is the development quickstart. It's got a bunch of docs here, and I guess, Ben, I feel obligated to say that of course if I were, you know, not doing this for this demo, I would probably just use the Stripe React boilerplate. And so converting cURLs to fetch is not my hobby, but that is what we'll do just for fun. But yeah, that is a thing as well. 

So basically what I want to do is make a test API request [00:07:00] to see if I can interact with Stripe, and I'm even going to just use their API key. I don't know what any of the rest of that says, but mostly it's like stuff like create an account and stuff, and I don't do that today. So we're just going to make this test API call in our code, which means we have to start with our good friend fetch,  

And… that URL, is there a chance you could paste that in for me? 

**Ben:** You mean this one? 

**Randy:** No, there's a cURL one. 

**Ben:** Ah, I gotcha. Yes. 

**Randy:** Prettier's fighting with me a little bit. No, it's a POST request. Yeah, that one. Okay. So we're going to make a payment intent. We have a method, headers. And one thing that's interesting about this is that they don't use, like, JSON, they're using a form, so we've got to set our [00:08:00] Content-Type to that. And I might do this wrong, Ben, so we'll see if it works.

I think that's right. And then, what else do we need? Oh, we need all the stuff that it says. Now here's something that's fun, kind of like an old school, like the internet before the internet, is that forms submit as search params. Like that's why, if you get the default form and you click submit and you don't have the preventDefault(), it shows all the stuff in the URL. 

**Ben:** Yeah, query parameters! 

**Randy:** Yeah. So we can actually pass all of that stuff that was on there. Well, that's an expensive coffee. Let's just do $10. And then "usd"… Yeah, so we're going to just set this up as… [00:09:00] Sorry, I'm looking down at the cURL command here. 

**Ben:** Yeah, I'm going to go scroll over there real quick just so we can see, like, here's all the different arguments. So, we're passing  an amount, the currency type, an array of payment methods. So it looks like, at least in the example given here, the only method specified is a card. And then the receipt email. So these are all the fields that Randy is populating right here.  Those are coming to us from the Stripe docs. 

**Randy:** Yeah. So we're just gonna, we're using exactly what they have as their example. But I've left one off, Ben, and I'll want to call that out now, and that's our authentication. Oh, it failed. Let's go figure out what failed. 

**Ben:** It's… You need a comma there.

[00:10:00] **Randy:** Oh! Thanks! So I've left off the authorization header. And we'll we'll come back to that one, if that's alright. 

**Ben:** Yep. 

**Randy:** So  we can finish this, and then of course we need to do something with it, so we're also going to go ahead and… We need the actual one first. I swear I write React occasionally. 

Alright. So we're just going to create a little state here…

Oh. Thanks. There we go. And so then, at the bottom of our fetch, we'll just do a `then()`. But we need something else first, [00:11:00] because that's not gonna work. Well, it'll work. What our response is going to come back as a… I always forget that this is a thing. Alright. That work? So hopefully this will build for us, and then do you want to open that up in a browser and just give us a quick test of it? 

**Ben:** Alright. So we're at the React app. I'm going to click "Learn React," and it seems like nothing happened. I'm gonna check my console though.

**Randy:** Yeah. Let's just see if that service— 

**Ben:** We're getting a `401`. That's probably an auth error, right? 

**Randy:** Right, exactly. That's predictable, right, because we left off the auth and stuff. So we can add that in in a moment. Well, let's do that now, I guess. I didn't want to, but it's okay. We want this to fail. And then let's get Jenny's… What was her code? [00:12:00] And we have to do some wonky stuff here. Yeah, let's just drop in her code there. I got to go get it.

Let's see here. Does that look right? I think I missed a little bit there. Alright. And then we also have to put a call in here because there should be a password there.

Oh, comma again. And those commas are getting me. Comma, comma, comma. No, just kidding. Okay, so the test passed and our build succeeded. 

**Ben:** That's exciting. So let me try this again. I'll give us a hard [00:13:00] refresh. I'll click our button. I'm also getting a `401` again. 

**Randy:** Okay, well, that's okay. I'm not sure why, to be honest with you. And that's part of the fun of all of this, is that I guess in a regular development world, we would just bang our heads up against this until we figured out what was actually going on, and I've done that before, but we're not going to do that, Ben. We're going to move on and we'll come back to this later.

But we do want to do one thing just real quick, and that's, I want to get rid of this "Edit" code here, and I'm just going to change this code up a little bit. We're going to put this guy in here and we're going to go "paymentIntent…" so that we can make this show something if there's a paymentIntent. And since it's coffee, I just want it to show, like, the coffee emoji. So we'll just put a couple of coffees. Yay, coffee [00:14:00] cups! 

Alright. So now here's something that's interesting. Let's go back and just retry this. 

**Ben:** Let me hard refresh. 

**Randy:** Okay, yeah, because of the… 

**Ben:** Okay. So, even before I click it, I'm getting coffees. 

**Randy:** Yeah. So we have something going on there. Oh, I passed an object there.

**Ben:** Aaaahhh. That'll do it. 

**Randy:** I gotta save. So we don't get the coffees. But now here's what I wanted us to see: even if this fails, it shows the coffee. And this is kind of like… The reason I wanted to talk about this is because it sort of tells something about my developer journey is that when I first started developing and doing all of this, like, we only wrote for the happy path. So I need some, like, check here in my code to make sure that I'm only getting that if our response is OK. So I'm over in the [00:15:00] editor right now, Ben, and I'm just gonna add a little bit of code here. 

**Ben:** I'm gonna nuke the big spinning atom. 

**Randy:** Oh, that's great. Yeah. That's, yeah, we don't need that.

Okay. So we have the .then(), and then we'll just do a catch, and we'll just drop console.error there. So all I've done here now is, if the response isn't OK, let's just reject it, and that way we're not setting the paymentIntent no matter what happens. 

**Ben:** Alright. Cool. 

**Randy:** So if we jump over to our thing, the atom is gone. If I click "Learn React"… and there we go. It failed. Okay. And that's okay! We can talk about that a little more in a second, because, you know, to be honest with you, Ben, how I used to work through this is I would go into setPaymentIntent, and I would see those CORS errors and `401` errors and stuff, and I would just do something like this. And I'd go "`if`…" What is [00:16:00] it? "`process.`" That's not "`if`;" that's "is." "`if (process.env.NODE_ENV)`"… I know it's terrible, but that's what I used to do. It's not actually terrible. I'll talk about that in a second. 

Alright, so then if that was the case, I would say, well, I just want to set the paymentIntent with something anyways to make sure my code works. And so the question is what to set it with. And what we're going to do here is we're going to create a new file, fixture.json. And we're going to jump back over to the docs, and we can just paste in the code from the Stripe quickstart. It actually tells us exactly what it's going to return. So we can just copy and paste that whole thing in. We know what it's going to return.

Alright, and so then I jump over into my App, and I'm going to put `fixture` [00:17:00] here, and see if it'll let me auto-import it. Nope. Okay. That's fine.

Alright. And let's see if that works. Hey, hey, and my test is passing. That's great. And of course it's still, yeah, it's still failing, but, um… Oh, that's because we don't return. Let's just fix that. In dev, we're just gonna return. We're gonna get out of here. That way, we don't have to deal with those ugly service calls. 

**Ben:** Cool. Yeah, no errors. 'Cause it's just not making the fetch. 

**Randy:** Yeah, no errors! Hey, we're good! No errors is a sign that everything is going great, right? 

**Ben:** _[sarcastically]_ Yeah! 

**Randy:** So let's write a test. 

**Ben:** Alright. 


**Randy:** What was that? 

**Ben:** Oh, yeah. Squelching errors. Yep. Totally a sign of a good app for sure. 

**Randy:** Yeah, That's what I've always [00:18:00] learned, or always been told  that an app that doesn't have any errors is, that's what you need. That's what you need it to do. 

Alright. So, we're just going to modify this test. And so we're going to render the App and we're going to start with an `expect`. Oh, wait, we got to render the App. And then we're just going to expect that the screen doesn't have… How many coffee cups did I put? 

**Ben:** Five, I believe.

**Randy:** Alright. Uh… There it is. 

So we're just going to say "expect it to not be in the document," and then we're going to find that button and we're going to do fire or… So, we're [00:19:00] going to click our… Do you have…? Well, we have Testing Library. 

**Ben:** Yeah! 

**Randy:** Do we have userEvent, or do I need to use fireEvent? 

**Ben:** Great question. I think we might just, no matter what, have to… There we go. Why doesn't it like expect here? "Unable to find an element with the…" Oh, it's just, like, running the test, isn't it? 

**Randy:** Yeah, it's checking it in real time. Alright. And so now we're going to fire that, and then the next thing I'm gonna do is, we're going to expect await, and that was coffee cups again. I'll come back to [00:20:00] that. And then we just wanted to… It's not prompting me, so I'm probably in the wrong space somewhere. We've got to drop this as an async and we're going to get rid of this bit because it's not there anymore. And we just need our five coffee cups. 

**Ben:** Yeah. 

**Randy:** Alright. 

**Ben:** This probably needs to be "query…?" We got a comment from Michael in the chat saying that as well, because it's not in the document. Yeah. Here we go. That's probably also queryByText. 

**Randy:** Well, no, we need it to be findByText because it needs to be uh, awaited. 

**Ben:** Okay. 

**Randy:** So, it's okay that it's failing. That's what we expect it to be. Right? Like that's what it's complaining about. It's unable to find it. [00:21:00] Now, there's a reason that it's unable to find it, though. And that's that the only time that this is actually going to get in there is when our development environment is set to… Remember that we've got this one little catch. Right, so now we've got a little bit of a problem that how do I even test this? That becomes the question. 

And so what we've kind of done in the past… There's this really great article by Kent C. Dodds called "Stop mocking fetch," and that's what we're going to start by doing. And so we're going to borrow some of his code from how we used to do this. 

**Ben:** Yeah, it's this one right here, big old screeching owl. Yep. So just the first code snippet here that we want to start using? 

**Randy:** Yeah. [00:22:00] We're going  to borrow that bit of code from the very top where, you know, we're going to do exactly what he kind of says not to do here.

**Ben:** Okay, okay. 

**Randy:** And we're going to mock fetch. Give me just one second, if that's okay, Ben, I need to…
So here's what we're going to do. We're going to start by setting up a beforeAll. Nothing super serious here. And we're going to set up a Jest… Whoa. 

**Ben:** That was fun. 

**Randy:** I don't know if that's like my IntelliSense kind of acts funny sometimes. 

And "fetch." So we're going to just spy on our fetch. Is it gonna like Jest, or do I need to…? Should like it. Okay. Anyways. [00:23:00] We'll figure it out. 

And then what we're going to do is right here before our thing, we're going to go `window.fetch.mockResolvedValueOnce()`, and then we're going to pass in… Now, remember that we've got two things that we have to pass in here because we're checking them. The first is "ok", and we're going to pass that as true. 

**Ben:** Okay. 

**Randy:** And then we're going to pass "json" is async, and we've got to get our fixture. Because we want it to return a Promise, right? Which we'll see we'll maybe break some things here in a second. Now that fixture is not defined, so I'm just going to go over here and grab this import and drop it back in.

**Ben:** Oh, cool. Okay. So our test is working. 

**Randy:** Yep. Our test is [00:24:00] now working. 

**Ben:** So the test is now, I guess, overriding the default behavior of fetch to instead say, "Hey, actually, when you do this fetch, I want you to return this, like, hardcoded development fixture JSON that we've created." And that's what's going to make the whole test pass, 'cause it's not really doing the fetch. 

**Randy:** Yeah. And now the great thing is that we have, you know, we have this fixture that's kind of saved off, so we're seeing it in both places, we can declaratively map it… This isn't terrible, but I still don't love it. Not only for the reasons that Kent C. Dodds mentions in that really great article, but also because if we jump back over to `App.js`, I want to talk about this little pattern that we've established here. And this is what I sort of affectionately call the "Volkswagen pattern," and that's where… 

**Ben:** Oh, no. 

**Randy:** Yeah, it knows when it's in development or in test and it begins to behave differently [00:25:00] when it's under test or in development. And there are places where this is sort of unavoidable, but… Well, I don't know that that's true.

I will say that this is something that, for me, I have learned to try to avoid and sort of treat as a last-ditch scenario, or last-ditch effort. So I've just gotten where I really don't love baking this into code, especially code that's going to be under tests because I want the code that's under tests to behave the same place in all environments. Right? So what I really want to do is kind of start to get away from this, and we're going to follow the Kent C. Dodds pattern here a bit.

And the next part for us, I guess, Ben, is that in order to get away from this, we want to leverage this really great library called Mock Service Worker. And so we need to install that. [00:26:00] I think both of our terminals are currently occupied, so we maybe need another one. 

**Ben:** I gotcha. 

**Randy:** Yeah, we can look the docs while that's installing. I don't know how long it will take. 

**Ben:** There you go. We got a third terminal up. Yeah, I'm gonna drop the Mock Service Worker link in the chat. We also have, in the chat we have Matt Sutkowski, who is one of the core contributors for Mock Service Worker. 

**Randy:** Well, I mean, just a major shoutout. This library, I mean, I think has changed my life and my perspective on how to do things, is an understatement. Because really, like, and we'll get into this I might be getting a little ahead of myself, but, like, Mock Service Worker does so much more than fix our test problems, because if you've ever stood up a mock server ever, then Mock Service Worker also resolves that problem. [00:27:00] And so I'm a real big fan. 

In any case, while we're installing it, it's a pretty simple library. We're going to end up using both the browser and The server implementation. One for tests, one for the browser. But the idea here is that instead of mocking fetch, we can let our app function as normal and we can stand up an intercept layer sort of behind it in the service worker layer that will intercept those calls and allow us to interact with them.

**Ben:** So the philosophy difference here is we're still making the fetch. We're not, like, circumventing the fetch. We're instead saying, like, hey, there's this new layer that intercepts the fetch and returns a thing. 

**Randy:** Right. Right. And we'll just return our same fixture, but it allows us not to do all of this, like, wonky code-writing that we're doing that is, like you said, that either is circumventing the fetch or saying, you know, "In some instances I want to circumvent the fetch, and in some…" — now our app will always fetch [00:28:00] and that's key. I think that's a super value add to what we have here. 

And so that's still installing.  I don't know what's not saved though. 

**Ben:** Oh, there we go! Looks like it just finished. 

**Randy:** Alright, awesome. Okay. So, here we are. We're going to start in our tests, maybe. And we're gonna start by implementing it in, in test.

Alright, so, first we're going to need to import some things.

**Ben:** Alright. Um, yeah. So according to the… 

**Randy:** Yeah, where is that? 

**Ben:** So now we go to "Define mocks.". It looks like it's going to ask us to make a `mocks` directory, make a `handlers.js`. Are we doing any of this yet? 

**Randy:** No, we don't need to do that. [00:29:00] Give me just one second. 

**Ben:** Oh, hello! Matt's saying `yarn msw init public`, and then… 

**Randy:** Yeah, we definitely need to do that. So let's… It's `yarn`, and then is it `--save msw public`, and then I think it's saved like this. And what that save does is just writes into the end of our package.json.

Let's see if Matt can confirm that that command is right.  

**Ben:** Yeah… We'll - well, we'll see. "No save needed. It does that via CLI." 

**Randy:** Say again? 

**Ben:** So, he he put several messages in the chat. He just said `yarn msw init public`, `setupWorker`, and then you spread the handlers. And then he says it does that via CLI, no save needed. [00:30:00] I've never actually had the chance to work with Mock Service Worker. I've been friends with Matt for several months now and I still haven't used Mock Service Worker, unfortunately. 

**Randy:** Yeah, it's such a great, great library. I mean, I think it's just the bee's knees. 

So just real quick, what that command does is it creates this mock service worker that is now in our code right here for us to look at.  

**Ben:** So this is what actually handles that proxy intermediary handler? 

**Randy:** Yeah, in the browser, not —well, I don't know, it'd be interesting to, I don't believe it's also handling things for, for the server side.

**Ben:** Okay. "It monkey-patches in Node." Okay!

[00:31:00] Alright. So we've installed Mock Service Worker. What's the next step here?

**Randy:** We're going to use it to fix our tests here as well. Do we have that documentation? We're just going to copy and paste some stuff from… We're going to do a REST API.

**Ben:** Okay. Nope. That is… Things jumped. Okay. So we import `rest` from msw. `rest` is a named import. 

**Randy:** Yeah. And it's important to know that that's because MSW will also work with… What's it called? 

**Ben:** GraphQL, right? 

**Randy:** GraphQL, yeah. There we go. And we also need import… Sorry. Oh, we're going to define our handler here. 

So [00:32:00] we're going to create a file, just like it says, for `handlers.js`. 

**Ben:** I feel like I'm just going to leave the sidebar open so we can see how the directory structure changes over time. 

**Randy:** Yeah, thanks. And then we need to get `rest` in here.
Okay. There we go. 

And our first handler is `rest.post`, and then that's where our URL is going to go. And this syntax is really great because it looks a lot like good ol' Express. 

**Ben:** Yeah, that's 100% like the fetch API or, yeah, it's the request, response, context. Yeah, okay. 

**Randy:** Yeah. That's one of the [00:33:00] things that I also really like about it, is if you're already familiar with like, the, Express mapping, then this is awesome, because if we were to do something… 

Okay, so we've now got this and we know we're trying to return basically this guy, this fixture. So we're going to go over here, and then we're gonna go `res.`… Uh, we need to get that. Let me jump back over to that wiki, 'cause I'm gonna do this wrong. I don't remember if it's `res.send()`. 

**Ben:** It's `res.`…. Wait, this isn't in handlers, is it? 

**Randy:** Yeah, this is in the handlers. 

**Ben:** 'Cause it looks like we can do `rest.post()`, and then here's the endpoint and then there's a null here. Oh, but that's the handler. Okay. 

**Randy:** Yeah. So this is where we're a little… 

**Ben:** Seems like `rest` is just a function that we can just straight up return things. Okay. 'Cause, like, there's an option. [00:34:00] Oh, you know what? I'm going to take this opportunity now to go ahead and probably just copy and paste from the code that Matt's been helping us write. Thank you, Matt. Or I guess we have it here. Okay. 

**Randy:** Yeah, so I got it. I remember now. Alright, so… That work? Okay. Oh, and it's complaining 'cause it wants me to name this list. 

**Ben:** Okay. So if I'm understanding this correctly, we're creating a mock that'll intercept calls to the Stripe API's payment intents endpoint, and we're saying, "No, no, don't actually fetch that. Instead return a 200 with our fixture, that JSON that we made." 

**Randy:** Yeah. That's exactly what's happening. 
So we can [00:35:00] save this. And then we want to, in our test… We don't need that one, we need the other one. 

**Ben:** Okay. 

**Randy:** Import something from Node. Uh, `setupServer`.

Okay! So now that we've got that, we also need our handlers and we're going to go `import handlers from './handlers'`. Okay, awesome. And now, we just call `const server = setupServer(...handlers);`.

**Ben:** Makes sense. 

**Randy:** And then, we're going to get rid of this. And we're going to say `server.listen()`. And then, just as a [00:36:00] good practice, we're going to do `afterAll()` —  Nope, come back. We're going to do `server.close()`. Okay, so now we can get rid of this nonsense, too. Hopefully. And we're going to be able to fire an event. Uh, do we still have a mock somewhere? What's this complaining about? 

**Ben:** Do we need to do the mock at the `App.js` level, too, instead of this state here? If I go to `App.js`, we're still, like, intercepting, like, if it's development set payment intent to fixture. 

**Randy:** Oh, we can, we can fix that in a second.

**Ben:** Oh, it's passing now! Cool. 

**Randy:** Remember that the test is not actually dependent on that develop hook. That's why we had to mock fetch. 

**Ben:** Oh, that makes sense. 

**Randy:** Fetch is still being invoked. So, this fixes our test. And we don't need the [00:37:00] fixture anymore, because we're importing it in our handlers. And that's pretty great, too.

Okay. So we have this and now we can go in and do that same thing. But we have to make one small change, Ben, and that's that we've got to jump into here, and we're basically going to go and copy this code and go to our index.js and paste it, but we're going to get rid of all of this. 

So we're going to import MSW.

**Ben:** We're going to need to import handlers from… 

**Randy:** Yep. Alright. So then, all we're doing here is just a lazy import of MSW so that it isn't loaded if we don't need it. And then we're going to set up worker with the same handlers that we already have. Awesome. [00:38:00] And start it. And now we can go to our `App.js` and that's gone so we can save, and we should be able to see the same behavior now. But one of the things we want to do is when we refresh, let's check our console. Oh, it's failing to compile, what's broken? 

**Ben:** All of Babel. 

**Randy:** All of—? 

**Ben:** Or, I mean, it's saying that the Babel loader's not found. 

**Randy:** Yeah, we probably need to kill Babel and restart it. 

**Ben:** Oh, like, kill the dev server. Got it.

**Randy:** Yeah. Which one is that? Is that 2? Yeah, you got it. 

**Ben:** We got it! 

**Randy:** Yeah. I'm guessing, I'm just guessing here, but because it didn't have MSW…

**Ben:** Aahhh, okay. 

**Randy:** And we've now installed it.

**Ben:** Okay. So just a small little "Learn React" button. I click it, we get some coffees. And in fact, if I open up the Network tab, we can see that, [00:39:00] like, we are getting the response and this is the JSON that we have in the fixtures. 

**Randy:** Yeah, and if you look at that, it'll actually say, like, if you close that little window, it'll actually say "from service worker" over on the right.

**Ben:** Oh, oh, like, I scroll to the right of this— 

**Randy:** Look at size. 

**Ben:** Oh, yeah, okay! Wow! Very cool! 

**Randy:** And then, if you check your console, you'll notice that MSW shows that it did the intercept as well. And then there's the intercept. And so this is outstanding. This is sort of, like, I feel like when we get here, we've done a lot in terms of like improving the quality of what we're doing. Especially because now we have everything consolidated, our tests and our code are running really reliably, um, and our code runs sort of declaratively. It runs the same way in every environment. 

However, I think that there's one small problem with this structure, Ben, and this is [00:40:00] what I've kind of discovered, is that this works great in a codebase where I'm calling one, two, maybe three services.

**Ben:** Aahhh. 

**Randy:** When I start to have many, many services, I start to have tons and tons of fixtures, lots and lots of handlers. It gets to be pretty cumbersome to keep up with. And then some service developer isn't talking to me and he goes and updates the endpoint and everything breaks. And then I've got to go and re-update that fixture, and it's just a bunch of stuff to have to deal with. I don't love it. 

So I've actually recently kind of taken this just a little further and that's that… Let's jump into handlers real quick. Right now we're creating a fixture for everything, which as you saw, is just some copied and pasted JSON. And so what I started to ask was "Is there a way that I just don't have to do that, that I don't have to create fixtures?" And I've done some backend development and I know that, you know, many ecosystems have something called [00:41:00] OpenAPI, where backend developers are basically writing these declarative YAML files or JSON files that allow us to spec out what a service should look like. And I was, like, "Well, there's gotta be a way to leverage that." And it turns out that there is. 

So, there's a library called `openapi-backend`, and that's the next piece that we're going to leverage to get things rolling. So I'm going to go ahead and install that while we talk about what `openapi-backend` does and how we're going to use it.

I will tell you that my mouse is a little jumpy on the console. Or not my mouse, my keyboard. 

So [00:42:00] while Yarn is installing `openapi-backend`, what `openapi-backend` does is it consumes a OpenAPI spec, version 3 or above, and it converts that spec into endpoints that you can hit and get the responses back. 

**Ben:** Okay. So, basically it's providing a contract for APIs to follow and then, on the assumption that the API is following that contract, it's able to basically provide dummy data. 

**Randy:** Right! And I'll tell you that there's a lot of things that can be done on the service side, like contract testing, that allow us to ensure that the services comply with their spec, and there's a lot that can be done with that, and this is a way that, so if you're doing the designed-in-code version, that you can begin to interact with services that don't even exist yet. 

**Ben:** Okay. 

**Randy:** And as it changes, because I'm [00:43:00] reading it in, as it changes, I get the updates. 

**Ben:** Gotcha. 

**Randy:** So if a new attribute is added, it gets added to the spec and then it gets added to my code and also to my response body. And there's one, one more thing here that, or go ahead. Sorry. 

**Ben:** I was just going to say, like, I can already see the value of this. Like I know in my work, our approach to this has been, like we maintain a mock server, right? And so anytime the *real* API exposes new information, we have to, like, go through and update the mock server, and THEN we can update the local project to consume the response. Like, it just feels like there's several steps of indirection there. 

**Randy:** Right. And I'll tell you that that's been my experience. And not only several steps of indirection, but it means that there's like this lag time. And I want us to be building, you know, smarter, faster, right? So I'm like, "How do I cut that lag [00:44:00] time?" And if I can hook into the exact same development cycles that the backend engineers are, then I can get the spec at the same time that they're being consumed by the APIs and build against them even before the API is built, so then I can release at the same time. So that's one value. 

And I hope we get time for it — I keep checking the time — but I just want to put this out here right now, because I think that `openapi-backend` does one other thing that is so important to call out, because it's literally not something in our development cycles that we've been able to do up to this point, and that's request checking.

**Ben:** Okay? 

**Randy:** That I can validate that my request actually conforms to the API. So you'll remember that way back at the beginning, our API calls were actually failing and I said, "I don't know why, and I'm not going to deal with it right now." That's because I know that if we get to OpenAPI, I can just hit OpenAPI with my request. It will actually tell me this is exactly what's wrong with your request. 

**Ben:** Oh, interesting! 

**Randy:** So before we get there, I want to just call out that there's an extreme dependency here, and that's [00:45:00] that your APIs are being developed with OpenAPI. There's a lot of ways to resolve that issue if that's not the case. The best is to talk to your backend engineers and start to talk about, like, the value that that brings, a lot of larger companies are leveraging it. But there's also the Swagger Inspector, which is a tool to basically listen to a service and get an OpenAPI spec for it. That's really cool. 

We're lucky because Stripe publishes their OpenAPI, which may or may not have been the reason that we're working with them today. So you can see here, this is the Stripe's OpenAPI specs, and it is a HUGE file. Like, really huge. So huge that Google won't load it. It's over a hundred thousand lines long. So what I've done, Ben, just to kind of speed us along here is I've copied out just the one endpoint that we need, which is a nice, humble 3,000 lines. 

**Ben:** [laughs] 

**Randy:** So I'm just going to add that here as spec.json. And [00:46:00] I'll tell you that I chose the JSON version of this, but there is absolutely nothing that says you have to use the JSON version. You can use both YAML or JSON. 

**Ben:** Okay. 

**Randy:** So, now that we've got that, we can go ahead and try to hook this up in the last few minutes. Let's jump back over. I want us to really start with, let me see here, where do we want to start? Do we want to start with our tests or…? 

You know what? I'm wrong? Let's start with our handlers. Let's just jump straight into our handlers and see what this looks like. So we've already got, let me jump over to your screen, so we've already got this rest MSW, and now all we need to do is… Well, not all we need to do, but at least one thing that we need to do is `import OpenAPIBackend from`… [00:47:00] Yeah, that one. And then we're also going to import our spec that we just saved. Now, again, that spec could be anywhere. We just are doing it here because we downsized it. And just in full disclosure for everyone on the call, part of that downsizing was stripping out some other you know, reference schemas that we're not gonna get the value out of them, and so I wanted something a little easier to parse. 

And now we're going to define a new OpenAPI. All caps. Yeah, that. We have to pass in a config object, which includes our definition and our handlers. Now handlers are, you know, they're the same thing as this. So we'll see what that looks like in just a second. Now let's jump over to our spec. 

**Ben:** Over to the spec. Okay. Cool. 

**Randy:** 'Cause I want to talk a little bit [00:48:00] about how this is read by `openapi-backend`. And if you've done component testing on the backend, this will be super familiar to you. I'm going to shrink some stuff down, Ben. 

**Ben:** Okay. 

**Randy:** 'Cause that's a bunch of stuff. We don't need API errors. We just need this. paymentIntent. Oh, that's a schema. We don't even need the scheme. We can get rid of the schema. We don't want that. 

**Ben:** You don't need security schemes, I'm guessing. I'm just collapsing a whole bunch, 'cause I don't think your collapses actually get reflected on my end. Okay. 

**Randy:** Oh, gotcha. So what we're looking for is this right here and that's the operation ID, and this is basically in the schema, every call against an in-point has an operation ID. And so what we need is this operation ID, because that's what our handler is going to be referenced against. 

**Ben:** Okay. 

**Randy:** So we're going to create, like, a key and our value is going to be the way that we'll manage that request.

Alright. [00:49:00] And then in this case, we're just going to do const, status and mock. Now this is, we're just pulling this off, now instead of having what we did here, we're just pulling that off. That's basically what's happening there.
So here, we're saying "mock the response for the operation," and this is the operation ID to get. 

**Ben:** Okay. 

**Randy:** Alright. That's all that's happening there. And then we're just going to return it. And that code should look pretty familiar. Cool! So this is basically the same code that lives here. 

So we're going to get rid of just a little bit here. First we're going to drop an async here, just to make sure we get a promise back. 

**Ben:** Okay. 

[00:50:00] **Randy:** And then we're going to get rid of all of this code, 'cause we don't need it anymore. And we're going to go `return api.handleRequest(req, res, ctx)`. So now instead of leveraging our fixture, we're just going to defer that request to here. 

**Ben:** Okay. And this, this still only, uh, happens for the Stripe endpoint, the payment intents endpoint. 

**Randy:** Correct. Now there's some hackage that we can do here to resolve that. In fact, I'm doing a little bit of that. This is one quick hack that I've noticed that you have to do based on the way that the API handles what it expects and then it just expects that, that path variable is that. And so we're just going to pull `pathname`. Now, the spec identifies these things, so we can strip this down. We can also pass in a base URL up here. Oh, we forgot a line. We have to start it and generate these. [00:51:00] But there's a lot of different ways to manage that URL specifically. And if we get some time, which I don't think we will, but we'll be able to do that. 

So now we… Oh, and we can drop our fixture. And that's the most important thing that I think changes here, is that I no longer need to create a fixture for every endpoint.

So now, does our test still pass, Ben? That's the real question. 

**Ben:** Great question. If I go to the tests… I'm getting a network request field… Oh, unable to find an element with the five coffees. Let me restart the tests, 'cause it could just be that that's falling succumb to the whole new installs. 

**Randy:** And I may have a typo here. 

**Ben:** `handleRequest`— 

**Randy:** Yeah, this [00:52:00] should be `PostPaymentIntents`. I just caught that because we're not `GET`-ing… 

**Ben:** Oh, I see. I gotcha. 

**Randy:** We copied the wrong one.
So it's unable to find the coffee, it's saying. 

**Ben:** Yeah. 

**Randy:** Let's see what we might— 

**Ben:** Oh, oh, oh, here's what that means. There we go. One `e` missing. 

**Randy:** Oh, did I typo?

**Ben:** Yeah, I think so. There we go. It's passing. We did it! 

**Randy:** Yeah, there's a passing test. Okay. Well, let's open it up in the browser and make sure that Mock Service Worker is still working over there, too.

**Ben:** Sounds good. Let me give this a hard refresh. Yep, Matt's advocating for more TypeScript. Another time, perhaps. 

**Randy:** Yeah, I'll just say, Matt, that there's a great TypeScript lean in here and that's that you can also generate your response types in your interfaces, so that as [00:53:00] you're then working with the responses, you can run off of those types. Yeah, that would be a next step. 

But so now we can see that we're returning that object. And what's interesting here is it's, notice it's not the object in our fixture. It's the sort of examples. The cool thing about this is that it will read all of your examples from your OpenAPI, Ben, so if you don't  like the dataset that's coming back here, it's as simple as setting up another example within the OpenAPI spec. 

**Ben:** Okay! 

**Randy:** And that also gives us the opportunity to declaratively handle failure states. 

**Ben:** Tell me more. 

**Randy:** Because you can set up examples of a request that would return a `500`, a `404`.

**Ben:** Oh, okay. 

**Randy:** And then that's a part of now, without having to mock it all out or spec it all out. It can just come in declaratively. 

**Ben:** Really like that. Yeah. That's that's awesome. 

[00:54:00] **Randy:** So with only five minutes left, I think this is a good stopping point. And just to kind of talk through, again, like the main thing that I kind of like about this structure is that, one, I'm not having to maintain a whole bunch of fixtures or anything like that. I'm able to work off the exact same document that my API engineers are, and I am not having to, like, Volkswagen my code so it's running differently in different environments. 

And yeah! Cool. So that's all I had today. 

**Ben:** Thank you so much for coming on. 

We have a couple of comments from Matt in the chat that I've been meaning to circle back to. For one thing, he's saying that in other Mock Service Worker news, Mock Service Worker is very close to supporting Storybook static builds. So that's really exciting. Additionally, notable tips for Mock Service Worker: with Jest, they recommend running with --run-in-band. It's a good idea to defer app mounting when appropriate, see the [00:55:00] docs. I'm definitely going to have to read the docs for that one. But if you can't use `openapi-backend`, then you can record the real traffic and use that. 

**Randy:** One other quick call out there is that after, you know, we didn't do it, but in your tests for Mock Service Worker, you usually want to reset your handlers after each test. 

**Ben:** Okay. 

**Randy:** So we just add, you know, an afterEach here, and that's also well-documented in that article by Kent. 

I keep waiting on my IntelliSense to come on.

**Ben:** I wonder if that's on me. IntelliSense gets wonky with streaming 'cause, like, it's a big pop-up that just, like, flashes on screen for a bit. So I have settings that are to delay the IntelliSense. I bet you're inheriting my settings and that's what's going on. 

**Randy:** It's all good. It's [00:56:00] totally fine, and we've got it now. So yeah, just afterEach, you want to reset your handlers. Good callout. 

**Ben:** Yeah! Well, Randy, thank you so much for coming on. I absolutely see the developer ergonomics here. Just the, the whole transition from, like, us specifying our own potentially hardcoded mock data to us leveraging the contract that our API developers are using so whenever the API developers make a change, we automatically inherit that change in our tests, in our mocks, I think that's really cool. It really helps with that communication. So, thank you so much for showing this off. Do you have anything you want to point people to if they want to learn more? Anything like that?

**Randy:** I mean, I know we've talked about that "Stop mocking fetch" article. That's [00:57:00] really been a cornerstone piece in the ecosystem for moving in this direction. The Mock Service Worker docs are great and they come with types, which is also fantastic. And then `openapi-backend` has some fantastic docs. I'd also recommend taking a look at those, because there's so much more under the hood on `openapi-backend` that we didn't really get a chance to unpack in how to overwrite some non-implemented methods and stuff like that, and of course doing request checking, which is a lot of fun.

**Ben:** Yes! Alright, well, thank you so much for coming on. And chat, thank y'all for joining  me today. You should join us next week. We have Anthony and Dom from the Redwood core team hopping on. We've had Anthony on before to talk about Redwood's documentation, but this time we're going to be unraveling the secrets to accessible routing in a single-page application with Redwood. I'm super excited for that. [00:58:00] You all should have seen the Discord conversation I had with Anthony and Dom as we were kind of talking through through the plan. I am super stoked for it, and I hope you all will join me. Same time next week, Tuesday 12pm Central. Again, thank you all so much for joining and I will catch all y'all next week. Bye!