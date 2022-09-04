<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! First of all, Jason, thank you so much for the raid! That means a lot! Howdy! If you don't know who I am, I'm Ben Myers. This is Some Antics. This is a weekly stream where every week I bring on guests from around web development and web design to teach me something about building great user experiences for the web in a hands-on way, with a focus on accessibility and/or core web technologies.

Josh, do you think I need any more caffeine today?

<i class="timecode">[00:00:26]</i> **Josh:** Maybe a couple more espressos.

<i class="timecode">[00:00:27]</i> **Ben:** A couple more espressos. I think we can make that happen. Yeah! And so today, I have Josh Goldberg on. Josh, hello! Welcome to the stream!

<i class="timecode">[00:00:37]</i> **Josh:** Hey, thanks for having me. I, too, am excited! 

<i class="timecode">[00:00:40]</i> **Ben:** I am thrilled to have you on. We're gonna, you know, be talking about TypeScript today, which is something that, you know, to kind of put my cards out on the table, like, I have some experience with TypeScript, but no, like formal training in it. It's just things I've had to pick up as time has gone on. But Josh, you are immensely qualified to teach me TypeScript! Can you tell me why? 

<i class="timecode">[00:01:04]</i> **Josh:** Sure! Well, thanks for that introduction. Hey, everyone, I'm Josh. I do a lot with TypeScript in the open source community. I sometimes contribute — excuse me — contribute to the TypeScript language itself. I added that "ts-expect-error" directive comment, which made me very happy. I'm also one of the maintainers on TypeScript ESLint, which is the standard tooling that lets you run ESLint on TypeScript. And most recently, I wrote a book! "Learning TypeScript" through O'Reilly. It is, I think, my favorite, perhaps one of the best, if not the best ways to learn TypeScript if you know JavaScript but don't know anything about TypeScript or type systems or compiled languages otherwise. So that's me! And I'm a full time open source developer. You can find me, JoshuaKGoldberg on basically any platform — GitHub, Twitter, et cetera. 

<i class="timecode">[00:01:49]</i> **Ben:** Absolutely. Let me… let me put a link to your Twitter in there. I've also shouted out your Twitch channel because you're a fellow streamer. We were talking shop ahead of time in the green room.

But yeah! So, there was a comment leading into the stream in the chat that I found really interesting because I could relate. That comment was from friend of the show Anthony Campolo, who said, "Putting my bias out right away: I've been a TypeScript skeptic, but I recently started learning a stack that I think makes TypeScript sing." I think a lot of people can maybe relate to having been a TypeScript — excuse me — TypeScript skeptic, and kind of now I think there's this, like, awakening where, like, more and more people are coming to the TypeScript world, finding out that it works for them. Can you kind of talk about, like, why someone might be motivated to use TypeScript and what kind of projects it might make sense in?

<i class="timecode">[00:02:49]</i> **Josh:** Sure, that's a great launch point. I'll preface this by saying yes, no tool is perfect, and TypeScript is always getting better — better language features, better editor support, better framework and community support. So yeah, maybe five years ago, it wasn't as powerful or as fun or great as a thing as it is now. But TypeScript really shines when you have, I think, more than three files. That's kind of the threshold I've been advertising lately, where as soon as you have files that import each other or things that have to be shared across files, TypeScript gives you much more powerful tooling than just vanilla, plain JavaScript, where you can understand your code and be sure that when you make a change, you know all the places that are impacted by that change.

So I'd say, especially if you're working on a team or on a larger project like an interactive website or Node app that does multiple things. If it's not something very small, then TypeScript is definitely a nice tool to have during development and as a way to document your code for other people.

<i class="timecode">[00:03:47]</i> **Ben:** Absolutely. Okay, wow. So… man, what is…? So, I'm trying to figure out the next best question to ask! So, in my experience, one of the things that's been getting me more excited about TypeScript — because, you know, I'll mention that, like, I started off as a skeptic, right? I thought it was, like, overkill. I thought it made my code look ugly, you know? I'm sure you you've heard that sentiment before, right? Like, that's not an unfamiliar sentiment. But one of the things that, I guess, kind of convinced me, hey, maybe this thing is alright, is seeing more dev tooling leverage it. And as a result, like, for instance, VS Code is able to leverage those types and help me out with IntelliSense and that kind of stuff. So, yeah, I guess, how… what are some of the ways that TypeScript can empower developers and dev teams? 

<i class="timecode">[00:04:47]</i> **Josh:** Great question. To start, just the raw act of writing out your types in code. So, TypeScript lets you write type annotations, which are little indications of what something like a parameter for a function or a variable is meant to be. And you can describe object types. You can say… let's say I have settings for my Node app, and settings can take in output directory name and then maybe an array of some other things. TypeScript lets you describe those in your code, which acts as a wonderful piece of documentation when you have to, say, add new people to a project or come back to your code after six months of not using it. So that's part one, that you can describe your stuff and it's a standard way to describe these things, unlike, say, JSDoc, which is comments in code that isn't really verified by compilers.

TypeScript also powers VS Code, like you said, and a lot of other editors' language features or dev tool refactors, things like "Rename variable" or "Go to definition" or "Find all references." These are all much more powerful and reliable when you're using TypeScript, because there's this backing type system understanding of your code. So if you wanna, say, rename a function, then TypeScript powers VS Code's ability to find all the places that that function is used in a file or imported in another file, and then rename it safely for you.

Last thing I would say is that TypeScript is really good at catching bugs! I have never seen a conversion of a project from JavaScript to TypeScript where renaming a file to ".ts" or ".tsx" and then adding in the correct type annotations didn't find at least one real user-facing production bug. Not even getting the developers a better understanding and then them coming to the bug. Just directly, TypeScript saying, "Hey, you have a bug there." Which makes me very happy as a developer when I don't have to find that through bug reports and prod usage. So yeah, those, I think, are the three main advantages of TypeScript that I would personally advocate for. 

<i class="timecode">[00:06:39]</i> **Ben:** Makes sense!

Okay! So, I kind of wanna go ahead and get started. So let me go ahead and start sharing my screen, and I have… we did no setup ahead of time because we were enjoying talking about streaming shop. So, how should we get started today, Josh? 

<i class="timecode">[00:06:57]</i> **Josh:** Well, how about I share my screen on the TypeScript playground, which I think is a great reference resource for people to get into TypeScript, and then we take it from there. Is that possible?

<i class="timecode">[00:07:07]</i> **Ben:** Oh, are we sharing your screen today?

<i class="timecode">[00:07:08]</i> **Josh:** We can also actually share yours, if you'd prefer, but…

<i class="timecode">[00:07:10]</i> **Ben:** Yeah, let's—

<i class="timecode">[00:07:11]</i> **Josh:** …a little easier. 

<i class="timecode">[00:07:12]</i> **Ben:** Let's do mine, if you don't mind. And I'll open up the… there we go. Do-do-do. 

<i class="timecode">[00:07:25]</i> **Josh:** By the way, as Ben is getting this set up, I wanna give a shout out to Ben as a Twitch person. I had the pleasure and opportunity to see the OBS layout before, and it is absurdly well crafted. There are these beautiful little widgets and streamer utilities that Ben's written behind the scenes, and it's really cool. So, shout out SomeAnticsDev. This is a very well prepared stream. 

<i class="timecode">[00:07:49]</i> **Ben:** Thank you, thank you. Yeah, we've got Anthony in the chat, and Anthony's been saying that, like, I need to just, like, start, like, offering consulting services for streams, stream setups. I don't know! If that's anything anyone would be interested in, just reach out!

Alright, so I'm on the playground. Let me see, is there a good way to just embiggen this or shall…? I'll just… here we go. I bet… okay, yeah. Okay, so I'm on the playground. 

<i class="timecode">[00:08:20]</i> **Josh:** Cool. Yeah. This playground, I'll post — oh, you already posted in the chat. Yep, typesscriptlang.org/play is a great way to get started with TypeScript if you've never used it before and don't wanna set anything up or install any packages locally. On the left, for two-thirds of the screen, you have source code, your TypeScript file. And on the right, you can view a few different outputs from that file. Right now, by default, it's viewing the JS output. And we can see that, ignoring the fact that a couple of blank lines are omitted, it's basically the same. Like, the same variable, it's still const, it's still console logged. And this brings up a really good first point about TypeScript, that it is not a drastically different language from JavaScript. It's not like C# or other JavaScript flavors like ReScript or Reason. It's a superset of JavaScript, which means it is JavaScript plus some other stuff that you might find useful, but you don't have to use. So, yeah! That's the first thing of JavaScript and TypeScript.

And just to show off a feature of the playground, in the top left, where it says "v4.7.4," there's a "Run" button. And if you click that "Run" button and then click "Logs" on the right. Oh, I guess it shows automatically. This playground, just as a utility, can compile your TypeScript code to the equivalent JavaScript and then run it in the browser. So, yay, TypeScript Playground!

<i class="timecode">[00:09:40]</i> **Ben:** Alright, so we've written some TypeScript code. I think I'm done here. Like, we can go ahead and sign off. Like, we're good, right, Josh?

<i class="timecode">[00:09:46]</i> **Josh:** Sure, yeah(!)

No, I wanna show some of the very surprisingly deep and useful examples in the playground. If you go to the Examples dropdown and then click, let's say, the Literals one, it shows you a whole bunch of cool little TypeScript uses that you can try out. There we go.

So, the first thing I wanna show off is on line 16. This brings up the concept of the type system. TypeScript needs to understand your code. So you have a bunch of JavaScript and/or TypeScript code that's written, but TypeScript needs to add in its understanding of all the APIs and global variables and packages available to it. Like, let's say that you want to use the window.location API in a native DOM browser project. TypeScript has the concept of declarations or definitions where you can describe in the type system how something looks, and then TypeScript will understand, will read those in and understand it for your TypeScript code.

I've actually not seen these show red squigglies before. I do hate to introduce two things at a time, but this brings up a second topic, that TypeScript is super configurable, and one of the configuration options is "noImplicitAny." So if you click the TS Config dropdown a little above where your mouse is, and then scroll down to where it says "Type Checking." And a little further…

<i class="timecode">[00:11:24]</i> **Ben:** Oh, here it is. Okay.

<i class="timecode">[00:11:25]</i> **Josh:** There we go.

<i class="timecode">[00:11:25]</i> **Ben:** "noImplicitAny?"

<i class="timecode">[00:11:26]</i> **Josh:** Yeah, uncheck the first two, "strict" and "noImplicitAny."

<i class="timecode">[00:11:31]</i> **Ben:** Alright!

<i class="timecode">[00:11:32]</i> **Josh:** That should get it to stop complaining. Cool!

So TypeScript by default doesn't force you to type anything. If you don't wanna type stuff, if you don't wanna use all the TypeScript fanciness, then that's okay. But it can also opt into a strict mode called "noImplicitAny" where it forces you to add types for things that it can't immediately figure out.

<i class="timecode">[00:11:54]</i> **Ben:** Okay!

<i class="timecode">[00:11:55]</i> **Josh:** Ooh, I love this question in the chat. TSConfigs and the biggest pain points. Like, personally, I would recommend start with strict mode if you're just learning TypeScript. Just "strict: true." That enables all the nice little enforcements that TypeScript gives you. If you're finding difficulty, you can always turn off individual flags. Like, we turned off noImplicitAny. We could have left on the rest of them. We do have others like strictNullChecks on. So, that's my recommendation, "strict: true" and then see where you go from there.

But yeah, there are quite a lot of flags here, and the TypeScript Handbook, which is also on typescriptlang.org, has a full description of all the configuration shenanigans you can use. There's a TSConfig reference that I'll post in the chat. Yeah! So also, this brings up a really good point, that the TypeScript website has a really good set of tutorials for learning TypeScript. So if you wanna, say, learn as someone who knows JavaScript but nothing else or someone who knows C# but nothing else, then they have tailored guides that they kind of walk you through the major features with.

Yeah~ Cool. Anyway, the reason why I wanted to bring you through this playground is because I wanna show off a really cool TypeScript feature that other… a lot of other languages, most other traditional programming languages don't have, which is the difference between a primitive and a literal. A primitive is something like "string" or "number." It's a basic built-in type. A literal is a literal example of those.

<i class="timecode">[00:13:36]</i> **Ben:** Okay, so it's the difference between number and 5, or string and "Hello World"? 

<i class="timecode">[00:13:43]</i> **Josh:** Exactly, yes.

<i class="timecode">[00:13:44]</i> **Ben:** Okay.

<i class="timecode">[00:13:44]</i> **Josh:** And in fact, that exact difference, the difference between string and "Hello World," is shown on lines 16 and 21, where the first function allows any string. It says that its "arg" parameter is using a type annotation able to be any string at all. Yeah, there we go. Which means that both the helloWorld variable, which is type "Hello World," and this mutable let variable, which is a string, can be passed to it. But then the next function only allows strings that are explicitly, specifically Hello Worlds to be passed in. So although the const variable, which is "Hello World," is allowed, because the hiWorld's let variable is allowed to be any string — that's just how TypeScript infers let variables — it's not allowed because you might have set it to a different string before calling the function.

<i class="timecode">[00:14:32]</i> **Ben:** Okay. Uh… do I just need to rerun…? I'm trying to make the red squiggle go away, but…

<i class="timecode">[00:14:39]</i> **Josh:** Ah. So, if you wanna make the red squiggle go away, you can change the variable from let to const.

<i class="timecode">[00:14:45]</i> **Ben:** Ah, okay.

<i class="timecode">[00:14:46]</i> **Josh:** This brings up a…

<i class="timecode">[00:14:48]</i> **Ben:** Got it, okay.

<i class="timecode">[00:14:50]</i> **Josh:** Yeah, you might have set it to some other string at all in the world.

<i class="timecode">[00:14:54]</i> **Ben:** Okay. I'll put this back, but makes sense! Makes sense so far. Okay. Cool! 

<i class="timecode">[00:15:01]</i> **Josh:** So, that's a really powerful thing because TypeScript allows you to be even more specific in your code than just "it's any string, it's any number." You can say that something is, say, a union type, meaning it could be any of these, like on line 28, where it has to be the numbers 1 through 5. It can't be 0, -1, 2.3, whatever. 

<i class="timecode">[00:15:21]</i> **Ben:** Okay! So, how detailed could you get? Like, could I say, like, any string that starts with "Hello," for instance? 

<i class="timecode">[00:15:30]</i> **Josh:** You can, yeah! That's actually a relatively recent feature called template literal types, where you can… it's not quite regular expression level of power, but you can say it's…

I don't know if there's…

I'll type it in the chat. Hello, dollar sign — template literal syntax — string. That is a valid type in TypeScript that I just posted in the chat. And it's any string that begins with, like you said, "Hello" and then has any string after that. 

<i class="timecode">[00:15:59]</i> **Ben:** onlyHelloStart, I'll call that. And then it's arg, and then \`Hello${string}\` like this?

<i class="timecode">[00:16:10]</i> **Josh:** Yep!

<i class="timecode">[00:16:11]</i> **Ben:** Okay. And then I could do allowsOnlyHello(helloWorld), and this, we would expect to pass. allowsOnly… oh, this should be start. But… yeah. Alright. I could say "Hello Chat," and this should pass.

<i class="timecode">[00:16:31]</i> **Josh:** Yep!

<i class="timecode">[00:16:31]</i> **Ben:** But if I do… with our hiWorld, that's gonna fail. 

<i class="timecode">[00:16:39]</i> **Josh:** I think hiWorld now actually…

Oh, interesting! Why does that, uh—

<i class="timecode">[00:16:45]</i> **Ben:** Interesting. 

<i class="timecode">[00:16:45]</i> **Josh:** —that pass there? That shouldn't be happening. 

<i class="timecode">[00:16:48]</i> **Ben:** Yeah, it's also entirely possible that, like, the playground isn't quite set up for that or something, too. Interesting. 

<i class="timecode">[00:16:55]</i> **Josh:** Yeah. Now I'm furiously typing away on my end, just trying to figure out what's going on.

Huh, errors on my computer. Could you do me a favor? On line 28, where you're just typing… type in a string literal that should fail rather than a variable name? 

<i class="timecode">[00:17:13]</i> **Ben:** Oh, yeah, okay, yeah. So… ooh, hello, there we go. Yeah, alright. That'll do it. Okay. It has to specifically be a template string you pass in or, I guess, a variable as well.

<i class="timecode">[00:17:28]</i> **Josh:** Yeah. Not sure why it was passing, but yeah, let's say yes.

<i class="timecode">[00:17:33]</i> **Ben:** Okay, yeah! Weird. Okay, fun. Fun stuff, but seems sensible enough! 

<i class="timecode">[00:17:40]</i> **Josh:** Yeah. Cool! So, that's… those are… that's a lot of info about TypeScript, and I'm wary of just spewing stuff at you. Were there any particular questions or areas you wanted to delve into? 

<i class="timecode">[00:17:51]</i> **Ben:** Ooh, that's a good question.

Chat, if you've got questions, let us know as well.

This is… so, TypeScript feels like one of those things that, like, is big enough that, like, I don't quite know, like, the linearish path to take through this, so admittedly, I'm kind of struggling with coming up with a good flow for this.

<i class="timecode">[00:18:20]</i> **Josh:** Sure! Well, if no one in the chat also has any questions, I would suggest moving on to object shapes because that's the next major point with TypeScript.

<i class="timecode">[00:18:28]</i> **Ben:** Yeah!

<i class="timecode">[00:18:29]</i> **Josh:** Perhaps the biggest, one of the biggest points of it is that TypeScript is something called "structurally typed."

I'm gonna see if there's a… there we go. Under Examples, there's an example for structural typing under Language. By the way, you can see there are a whole bunch of examples here. We're only touching the surface, the major points, but there are a lot of cool little edge cases here.

So, when you describe an interface — and I'm gonna delve into my personal background, which is, like, C++, C#. When you describe an interface in high-level languages like C# and Java, you have to explicitly say that a class implements that interface, and whenever something is meant to be an instance of the interface, it has to be an instance of a class, et cetera, et cetera. In JavaScript, we don't like doing that. We just pass object literals around everywhere — YOLO. We have a good time. So in something like TypeScript, interface doesn't mean you have to explicitly say a variable is an instance of the interface or whatever. It's just a general idea. Anything that happens to have these attributes can be used in something that I ask for where it's supposed to be this.

So for the first interface — line 12, Ball — anything that has a diameter number is allowed to be a Ball. So you can see that Ball and Sphere interfaces structurally — aha — they are the exact same, so if you have one thing that's a Ball and one thing that's a Sphere, you can reassign them to each other. That's totally allowed.

<i class="timecode">[00:19:59]</i> **Ben:** Yeah, no red squiggles here. Okay. 

<i class="timecode">[00:20:02]</i> **Josh:** Cool. And that actually has some really interesting implications. For example, if you have an interface Tube where you have both a diameter and length, "ball = tube," where "tube" is a Tube variable, is totally allowed because the tube happens to have a diameter number! So that's totally fine.

<i class="timecode">[00:20:20]</i> **Ben:** Okay, but you can't go the other way around because… yeah, you can't assign a ball to a tube because ball is missing the length. 

<i class="timecode">[00:20:32]</i> **Josh:** Exactly, yeah. Cool! So that means that any object that happens to have these things is allowed. So on line 50, when we say "let createBall" as a function that takes in a number and returns an object with that as a diameter, although that happens to create an object that happens to be usable as a Ball, it doesn't need to explicitly say that. You don't have to add an explicit type annotation saying it returns a Ball or a Sphere or anything.

So, that's the gist of structural typing, and this is how TypeScript's type system works, where you do as little work as possible, you just describe what things are supposed to look like, and as long as your code happens to work that way, as long as you pass an object that happens to have the right attributes in, TypeScript will allow it. Minimum work.

<i class="timecode">[00:21:20]</i> **Ben:** Okay. Yeah, it's if the shoe happens to fit, it fits. 

<i class="timecode">[00:21:25]</i> **Josh:** Yeah.

<i class="timecode">[00:21:25]</i> **Ben:** Okay.

<i class="timecode">[00:21:26]</i> **Josh:** One last piece of vocab before I stop talking quite so much for a little bit, is that people often call JavaScript duck-typed. If it looks like a duck and quacks like a duck, it's probably a duck. I see structural typing as kind of the type system equivalent of duck typing. If it has this structure and works like that structure, it is that structure. That's okay. I'll allow it. 

<i class="timecode">[00:21:48]</i> **Ben:** Okay, yeah. Interesting, interesting. Yeah, 'cause… so, back in my Computer Science degree, the classes that I started with put me in, like, Java. And in Java, like, you have to… like, everything is an instance of a class. And so even if two classes look very similar, like they have very similar shapes, one thing is definitively Ball and another thing is definitively Sphere, and you have to do some serious gymnastics to trade them back and forth. 

<i class="timecode">[00:22:24]</i> **Josh:** Yeah. Yeah. I remember my first year — I also was a CS major — we had a discussion in the class where I was completely unprepared for this, and I had no idea what I was talking about, whether multiple inheritance, being able to have a class that extends multiple classes, was a good or bad idea. And it, first of all, it cracks me up that these days, especially in JavaScript, but also in general, people are in many areas moving away from object-oriented programming. Like, that's not how we write, say, a React app typically. But also, it's just so irrelevant and unnecessary now, where this structural typing system means that you don't have to explicitly be a Ball or a Sphere. You can be both just implicitly, accidentally. It works.

<i class="timecode">[00:23:06]</i> **Ben:** Yeah. You're accidentally Ball-shaped.

<i class="timecode">[00:23:09]</i> **Josh:** Yeah!

<i class="timecode">[00:23:09]</i> **Ben:** Which is how I describe my cat.

<i class="brackets">[Josh chuckles]</i>

<i class="timecode">[00:23:14]</i> **Josh:** Excellent. 

<i class="timecode">[00:23:16]</i> **Ben:** Alright. Okay! Interesting.

We're getting some serious plus-ones for talking about the TSConfig sometime. Maybe we need to, like, specifically single out a section of this stream to talk about TSConfig. 

<i class="timecode">[00:23:34]</i> **Josh:** Sure.

<i class="timecode">[00:23:35]</i> **Ben:** Okay.

<i class="timecode">[00:23:35]</i> **Josh:** I do wish the playground had a few more TSConfig examples, 'cause they're really good for just getting started. But yeah, I'm curious. Like, what is it about TSConfigs that people are finding hard or confusing or not as documented?

<i class="timecode">[00:23:50]</i> **Ben:** Yeah. I mean, and it seems to be, like, specifically, I guess, around, like, the JSON in particular or something. Yeah. Y'all, seriously, if you've got, like, questions, or there's things about, like, the config that you find in particular…

Okay. Yeah, here we go. We're getting some specifics in here. Anthony says, "I start a TypeScript project" and it's like the TSConfig is like — or I guess he starts a TypeScript project and it's, like, broken by default. He needs to start modifying TSConfig to make it work. He doesn't really know how to do that. Jim backs him up with, like, "It's scarily documented, like the docs are there but they're not entirely clear."

Yeah, maybe could we, like… do you know a good way to get, like, a tsconfig.json, like, default file that we could, like, specifically spelunk through? 

<i class="timecode">[00:24:42]</i> **Josh:** Yeah, actually, if you're able to showcase, like, a terminal and/or VS code.

<i class="timecode">[00:24:47]</i> **Ben:** Yes.

<i class="timecode">[00:24:47]</i> **Josh:** If you have TypeScript installed, either globally or in a project, and then you run "tsc --init," that'll get us a really good starting point recommended by the TS team.

<i class="timecode">[00:24:59]</i> **Ben:** Okay. Yeah. Can I do a brand new project? Is that okay? 

<i class="timecode">[00:25:03]</i> **Josh:** Works for me.

<i class="timecode">[00:25:04]</i> **Ben:** Alright. Let's try… typescript-fun. I'll "npm init," give us the defaults here. And then… do I have? No, I don't. Okay, so what do I need to do to, like, globally install this? Or can I "npx" it? 

<i class="timecode">[00:25:25]</i> **Josh:** You should be able to "npx tsc --init." I think I got that working yesterday. Or, did try it yesterday and worked. I did nothing.

<i class="timecode">[00:25:36]</i> **Ben:** Makes sense.

Ahahahahaha. Oh, thank GOD, whoever implemented this. Okay.

<i class="brackets">[Josh chuckles]</i>

"npm install." Let's do… let's do global, even though, you know, whether…

<i class="timecode">[00:25:49]</i> **Josh:** You don't have to, by the way. You can install it as a dev dependency in your project—

<i class="timecode">[00:25:53]</i> **Ben:** Okay.

<i class="timecode">[00:25:53]</i> **Josh:** —and, like, "npm run" it. But yeah, I personally have it installed globally and also use Yarn for all my things, so this is not an area that I've gotten a lot of experience in. 

<i class="timecode">[00:26:05]</i> **Ben:** Okay.

Alright, yeah. Now let's go ahead and pop open our editor. We'll take a look at this. Yeah, okay. So, in…

<i class="timecode">[00:26:13]</i> **Josh:** I do wanna note, by the way, sorry, before you move away, that line there in the terminal, those are the most important compiler options to look at first, in that order. We can look at them in the file. I wanted to call out for people, if you use "tsc init" on your own computer, then there's just a whole lot of stuff there. Those are the options that that it's calling out that I'd recommend trying to understand first. 

<i class="timecode">[00:26:34]</i> **Ben:** Alright, yeah! So I'll kind of side-by-side these a bit.

Alright, yeah, so, in general, the feedback on the TSConfig seems to be that it's, like, a big, inscrutable wall of comments and people don't really know kind of where to start.

So, Josh you've got a project. I mean, I know you have multiple, like, open source projects and that kind of stuff. Where do you begin when you need to kind of tailor this to your needs? Or how should we kind of understand this tsconfig.json? 

<i class="timecode">[00:27:05]</i> **Josh:** Hm. That's a good question. I do empathize with people of the chat. Like, it is a lot to go through and it took me a while, 'cause as they said, you do have to kind of know JavaScript and ECMAScript stuff a bit to configure these. But they are… there's good reason there.

What I normally do is I will go through the currently uncommented things first and I will try to figure out what my project needs, and most of the time the defaults are fine.

This "target" here, this is… this is what ECMAScript JavaScript version you think your code is gonna run on. Like, honestly, this could probably be "es2019" or "es2020." Like, most browsers support at least ES2020's JavaScript features. But TypeScript will know which built-in JavaScript APIs are available to you based off of this target thing.

<i class="timecode">[00:27:55]</i> **Ben:** Okay, so if there's, you know, newer features like optional chaining and nullish coalescing, it can tell you either, A, you're not building for that target. You might be deploying this code to some browsers that won't support it. Things could break or some clients that don't support it. Things could break or it'll specifically allow it, 'cause it knows that you're targeting a newer version.

<i class="timecode">[00:28:18]</i> **Josh:** So yes, in theory, but actually, I'm sorry to nitpick, but—

<i class="timecode">[00:28:22]</i> **Ben:** Please do!

<i class="timecode">[00:28:22]</i> **Josh:** —optional chaining is…

There is a difference between an environment API availability set and syntax availability. So environment APIs would be like String.startsWith() or String.trim(), which was added in some ECMAScript version. These are, like, runtime APIs, functions, globals you can call. Syntax, however — things like optional chaining, using arrow functions instead of function declarations — those things, TypeScript will compile for you in its transpiler and/or assume that if you're using something like Babel, it'll just work. So you can always use optional chaining in TypeScript, even if your target is, like, ES5. 

<i class="timecode">[00:29:02]</i> **Ben:** Interesting! Okay, yeah! Awesome! That is absolutely not a distinction I would've made, so that's super cool. Thank you. 

<i class="timecode">[00:29:09]</i> **Josh:** Awesome. So, yeah, that's "target": the global APIs like String.trim() that you can use. "module" is a whole other thing. By the way, I wanna shout out in the chat, "It needs a 'latest' target." There IS a latest target! "esnext" I think is available. It should give you autocomplete as you start typing into it.

<i class="timecode">[00:29:30]</i> **Ben:** Okay, yeah. Oh, yeah, okay. Does caps matter? It seems to be thinking… 

<i class="timecode">[00:29:34]</i> **Josh:** It doesn't matter. I personally like lowercase, and it autocompletes to uppercase, which has always irritated me, but…

<i class="timecode">[00:29:42]</i> **Ben:** Sure.

<i class="timecode">[00:29:43]</i> **Josh:** Doesn't matter. Thank you for going lower. I appreciate the support. 

<i class="timecode">[00:29:47]</i> **Ben:** Streamers have to have each other's backs, honestly. You know, we ride together, we die together. Anyways, Some Antics: get your HTML right. 

<i class="timecode">[00:30:00]</i> **Josh:** There it is.

Yeah, I'll also note for "module," I personally don't have a full understanding of the ECMAScript's module implications. I have yet to correctly set up a TypeScript or JavaScript package that outputs ES modules. I will learn this eventually. "No one does," indeed. But generally, TypeScript is able to do two major things in its command line "tsc" — TypeScript Compiler — that people use it for. It type checks your code and it also creates output files — JavaScript and .d.ts declaration files. So when you specify your "module," that's specifying what your output JavaScript file is supposed to look like, whether your output file will use "module.exports =" or "module.exports.whatever =," or if we use, say, AMD, which is like the old browser format, or modern modules. So if you were to create an index.ts file that, like, exports something, and then you were to compile with the current settings, "module": "commonjs," the output index.js file would have module.exports usage instead of ESM usage. 

<i class="timecode">[00:31:08]</i> **Ben:** I'm actually gonna put this to the test then. Okay, so "module." — oh, actually, yeah, we want… we want "export default foo," and this is gonna be a function that returns "Howdy," and instantly it's gonna yell at me. Why is it…? 

<i class="timecode">[00:31:26]</i> **Josh:** You actually can't "export default" yet. That specification has not been ratified in JavaScript. You can "export default" declarations like classes or functions, but you can't "export default" a variable.

<i class="timecode">[00:31:37]</i> **Ben:** Oh, right!

<i class="timecode">[00:31:37]</i> **Josh:** This is JavaScript's fault, not TypeScript, though. I will maintain that. 

<i class="timecode">[00:31:41]</i> **Ben:** Alright, yeah, "export default," and I'll just give this a… I'll make it a function keyword while we're at it, you know. We could do that. That's allowed. You know. Alright! So return "Howdy."

<i class="timecode">[00:31:56]</i> **Josh:** Yay!

<i class="timecode">[00:31:57]</i> **Ben:** And then if I go into my terminal here, and then how do I compile this? 

<i class="timecode">[00:32:03]</i> **Josh:** "tsc" — TypeScript Compiler. 

<i class="timecode">[00:32:07]</i> **Ben:** Just going to… 

There we go. So now I have this index.js. If I pop this open— yeah, so it's using, like, the "exports.default." Right, so it's using that particular syntax there. Okay.

<i class="timecode">[00:32:23]</i> **Josh:** Cool! Yeah!

<i class="timecode">[00:32:26]</i> **Ben:** Alright.

<i class="timecode">[00:32:26]</i> **Josh:** If you were to go to your TSConfig and change the "module" to, say… I forget how they've refer to it. I think it's, "NodeNext" is the newest one? Or… yeah, something like that. And then if you were to run "tsc" again. It would give you an index.js that uses "export default," I wanna say. Also, fun fact.

Oh, no! Is this…?

<i class="timecode">[00:32:52]</i> **Ben:** Interesting.

<i class="timecode">[00:32:53]</i> **Josh:** Is this not updated? What is the compiler option I'm looking for? 

<i class="timecode">[00:32:58]</i> **Ben:** Let's find out! Ctrl-Space, I think, will do— oh, there is just straight up an AMD option. Let's try that.

<i class="timecode">[00:33:04]</i> **Josh:** Yeah. Oh, yeah, AMD, for those who haven't directly used it. By the way, you can run "tsc" in watch mode so you don't have to manually rerun it. "tsc," it's "-w" or "--watch." I actually helped improve the output colors at one point in time, I wanna say, and then also made it clear whenever it reruns so your terminal doesn't get huge. 

<i class="timecode">[00:33:24]</i> **Ben:** Gotcha.

Oh yeah. So this is using "define" syntax. Okay. Yeah. It's still kind of changing things up. Actually. I wonder… I wonder if it's picking up this index.js that's already been created. It wouldn't, right?

<i class="timecode">[00:33:42]</i> **Josh:** I don't think it would. By default, TypeScript doesn't look at your JavaScript files—

<i class="timecode">[00:33:47]</i> **Ben:** Okay.

<i class="timecode">[00:33:47]</i> **Josh:** —I believe. You can actually ask it to go look at your JavaScript files, but that's a whole other thing. And the system I was looking for is "esnext."

<i class="timecode">[00:33:56]</i> **Ben:** "esnext."

<i class="timecode">[00:33:57]</i> **Josh:** My apologies. 

<i class="timecode">[00:33:58]</i> **Ben:** Let's go ahead and do that. So "esnext." Yeah, there we go. "export default." Hey, we did it.

<i class="timecode">[00:34:04]</i> **Josh:** Woo!

<i class="timecode">[00:34:04]</i> **Ben:** We did it!

<i class="timecode">[00:34:05]</i> **Josh:** Thank heavens.

<i class="timecode">[00:34:06]</i> **Ben:** We made our JavaScript look exactly like our TypeScript that looks exactly like JavaScript. 

<i class="timecode">[00:34:14]</i> **Josh:** Yeah! 

<i class="timecode">[00:34:15]</i> **Ben:** Cool. Okay! Let's see. There's other things like ES module interop… consistent casing in filenames… strict…

<i class="timecode">[00:34:28]</i> **Josh:** Yes.

<i class="timecode">[00:34:30]</i> **Ben:** "skipLibCheck…" 

<i class="timecode">[00:34:31]</i> **Josh:** Yes. So, skipLibCheck, by the way, is nice. TypeScript by default will type check your node_modules, your any .d.ts file, so definitions explaining what some JavaScript looks like in the type system. This tells it to stop doing that, that I'm sure my node_modules are fine — don't tell me if there are type errors in it. And in larger projects, where you have, like, a bajillion different versions of a bajillion different modules, like, that actually can be really annoying. And it just saves time. So that's a nice little default.

<i class="timecode">[00:35:01]</i> **Ben:** Okay.

<i class="timecode">[00:35:01]</i> **Josh:** That's probably not something that's giving people a lot of issues, but I have found that sometimes, especially if you accidentally get multiple versions of React in your node_modules, or at least the types for React, then it can be a real pain in the butt. 

<i class="timecode">[00:35:14]</i> **Ben:** Gotcha. Alright. Um…

So, okay. Where…

So, when you're working on, like, kind of bigger projects, right, are there specific properties in here that you'll find yourself actually, like, uncommenting and messing with? Um… yeah. 

<i class="timecode">[00:35:35]</i> **Josh:** Yeah. "lib" is a big one that I think a lot of people end up having issues with. It's just after "target." "lib" indicates what built-in APIs are available. By default, it's whatever's available with your target and the browser. Let's say that you have "target": "esnext," meaning I want to be able to use APIs — or syntax rather, syntax and APIs. However…

By the way, I'm really enjoying this chat. But let's redirect. Looking forward to self-driving cars. 

But let's say that you… let's say that you're running… you don't wanna assume that you're running an environment that has new global APIs. You can set "lib" to be something different than your target. Let's say ES2018, if you have, like, older browser support. Most people will not care about this. Most people… they just polyfill a lot of stuff or they work with, like, Webpack and use auto-polyfills or whatever. But it's one of the, surprisingly, the most common cases for, I have a new TypeScript project and my TSConfig needs to be configured and I don't understand how or why.

I will also note for this, that you can ask it to include random other things like the DOM types, which it does not include by default, if you set your own "lib." So, like, right now, the way you have it configured without the DOM types, it would not have window.location—

<i class="timecode">[00:37:05]</i> **Ben:** Oh!

<i class="timecode">[00:37:05]</i> **Josh:** —or window at all inside.

<i class="timecode">[00:37:05]</i> **Ben:** Okay. So, this is where, like, you know, if I'm looking at this going, like, I know I'm specifically building for, like, this is clientside code, right? This is gonna get shipped as part of a webpage. This is gonna do DOM manipulation-type stuff, right? I could say, "Hey, yeah, I know I'm building for the browser environment. Give me those sweet, sweet DOM types.

<i class="timecode">[00:37:26]</i> **Josh:** Yeah, definitely.

<i class="timecode">[00:37:28]</i> **Ben:** Okay.

<i class="timecode">[00:37:29]</i> **Josh:** Cool! So that's the big… the last big one. I would love to know if anyone in the chat has had issues with things other than "target," "lib," and "module," 'cause those are the big three. Everything else is kind of… I've seen a lot less pain over. Like, most of these things, you can ignore and they're just for, like, little edge cases that people need types to be able to support.

<i class="timecode">[00:37:52]</i> **Ben:** Sure.

<i class="timecode">[00:37:53]</i> **Josh:** Which actually is, I think, a really interesting point about web development, that, yes, there are a bajillion edge cases and we haven't figured out ESM and everything, but most people work on pretty standardized stuff. Like, a new Next project is configured for you and there's very little you have to do.

It's kind of nice. 

<i class="timecode">[00:38:09]</i> **Ben:** Yeah, absolutely. That interplay, like… you know, there's always that interesting challenge of, like, convention versus configuration. Like, when should your tooling decide "this is the way" versus when should your tooling, like, cede that control over to you? And yeah, your point rings very true about, like, fundamentally, a lot of projects are going to be very similar. They're gonna have very similar needs, right? And you KNOW when your project kind of needs to color outside the lines, you know? But for the most part, most projects don't need an extremely custom setup. 

<i class="timecode">[00:38:51]</i> **Josh:** Yeah. Yeah! Do you want me to go through the chat things in order? 'Cause…

<i class="timecode">[00:38:58]</i> **Ben:** Sure.

<i class="timecode">[00:39:01]</i> **Josh:** So, there are two kind of categories of how people tend to use "tsc." One is where they do emit something — like they emit a JavaScript file, a .d.ts file, et cetera, sourcemaps — and the other category is where they don't, whether they use something else like Webpack or Vite or whatever to bundle their stuff, or just run it directly through ts-node or some such.

So if you do need to output files, by default, the output directory is the same as your source code. You saw index.js was just next to index.ts. And if you had moved it to, like, a src file or something, they'd be in the same folder.

<i class="timecode">[00:39:33]</i> **Ben:** Mm.

<i class="timecode">[00:39:33]</i> **Josh:** But you can configure that. You can set a different "outDir" compiler option to output, to say, like, "dist" or "lib" or something. That's pretty common. And then you can also specify whether you create sourcemaps and declaration files. "sourceMap" and "declaration" are two other compiler options. I wouldn't be surprised if they're next to each other in this file. 

<i class="timecode">[00:39:57]</i> **Ben:** Yeah — oh, here we go. Yeah, "sourceMap." 

<i class="timecode">[00:39:58]</i> **Josh:** Oh, there we go.

<i class="timecode">[00:39:59]</i> **Ben:** Okay.

<i class="timecode">[00:40:00]</i> **Josh:** Yep, under the "emit" section. 

<i class="timecode">[00:40:03]</i> **Ben:** So then… "outFile."

<i class="timecode">[00:40:06]</i> **Josh:** "outDir"… actually, "outFile" will make it all compile into one big file, which is very rarely what people want. It's mostly a legacy option at this point.

<i class="timecode">[00:40:14]</i> **Ben:** Okay. Yeah, and if I inspect…

Oh, you know what? I'll put this… I'll give this a name. I'll call that, like, "dist" or something like that. I don't know if there's a convention for "outDir" name, but okay. 

<i class="timecode">[00:40:28]</i> **Josh:** It's typically just whatever JavaScript does, yeah. So now we see there's also that sourceMappingURL. Very exciting.

<i class="timecode">[00:40:36]</i> **Ben:** Very cool! Okay! 

<i class="timecode">[00:40:41]</i> **Josh:** Cool. Yep. And then there are a whole bunch of other things here, like you can remove comments. I don't know why you ever would. You can, like, emit declaration files only, to not output JS files. And then you can enable "noEmit," which is what I typically use in my web projects, because I'm running with, like, Docusaurus or Next or something, where "noEmit" says "don't emit anything at all."

<i class="timecode">[00:41:05]</i> **Ben:** Yeah, like "Purely just use this as a dev tooling. Don't actually, like, change things on me." Yeah, okay.

<i class="timecode">[00:41:11]</i> **Josh:** Yeah. Cool.

<i class="timecode">[00:41:12]</i> **Ben:** Okay, gotcha. Yeah, there was a, a comment in the chat from Anthony earlier that was like, this TSConfig seems like it could be, you know, something where, like, you could have one person write just a really good, like, epic breakdown of every property and when you might use it.

But it's really hard to just, like, go top down and be like, "Here's when I use this. Here's when I use this." Especially in, like, a stream format, but okay. 

<i class="timecode">[00:41:39]</i> **Josh:** Yeah.

<i class="timecode">[00:41:40]</i> **Ben:** Cool.

<i class="timecode">[00:41:40]</i> **Josh:** I will say, though, that the TypeScript docs are much better than they used to be, and they are open source. I think it's still a Gatsby project. But if you have any issues with the handbook, typescriptlang.org/tsconfig has an explanation for every single one of these, and it also groups them on the top by where they go, like modules or whatnot. So if you are finding dissatisfaction, you could submit a pull request, or if you are confused and need help, feel free to ping me on Twitter or some such, and I'm happy to send a pull request to improve the docs myself. So yeah, this is meant to be explanations, not just an API reference. I think the idea of an API reference versus an explanation is super interesting because, like, for a configuration file, they kind of blend and blur together. But yeah, that — I'm responding to ajcwebdev in chat. Yeah. I don't know that there's one unified dev perspective, so maybe, like, a walkthrough for, like, someone working with, say, Next or Remix versus ts-node versus et cetera. Yeah, I think that would be useful, yeah. 

<i class="timecode">[00:42:51]</i> **Ben:** Okay! Yeah. Yeah, yeah, yeah. Yeah, and maybe, maybe even a guide like that that's actually, like, straight up a little more opinionated, right? Like, "here's the options that I specifically use and why and when." Yeah, okay. Cool.

<i class="timecode">[00:43:08]</i> **Josh:** Yeah.

<i class="timecode">[00:43:08]</i> **Ben:** Yeah, alright. If you don't mind, I'd love to kind of bring this back, like, now that we've kind of talked about, like, how you might configure your compiler with the config. Like, I'd kind of love to, like, bring this back into, like, if there's more aspects of, like, maybe the syntax you'd like to talk about.

<i class="timecode">[00:43:23]</i> **Josh:** Sure, yeah!

<i class="timecode">[00:43:24]</i> **Ben:** Yeah.

<i class="timecode">[00:43:24]</i> **Josh:** Let me think. We have so many cool things we could look at. Maybe… I'm gonna avoid the, like, really fancy stuff, the conditional types, 'cause I don't think that's a good way to introduce those. 

I wish there was a good example for strict null checking.

Maybe…

Sorry, I'm taking a little while here.

<i class="timecode">[00:43:56]</i> **Ben:** You're good!

<i class="timecode">[00:43:57]</i> **Josh:** Uh…

Could you start a new — just, like, select all and delete in the editor? Let's start from scratch. 

<i class="timecode">[00:44:08]</i> **Ben:** Okay!

<i class="timecode">[00:44:09]</i> **Josh:** And could you make a variable whose value is… let's say either some string or undefined based off of Math.random()? Say "Math.random() ?," like a ternary. 

<i class="timecode">[00:44:24]</i> **Ben:** If Math.random() is less than 0.5, in which case, yeah, we'll say "Howdy" or we'll say undefined. Like that? 

<i class="timecode">[00:44:38]</i> **Josh:** Exactly, thanks. Yeah, so you use the exact opposite inline or, like, where to put the things style from me, which I find really funny. They're equally valid, I think.

<i class="brackets">[Ben chuckles]</i>

<i class="timecode">[00:44:46]</i> **Ben:** Oh, like where to put, like, the colons and whatnot? 

<i class="timecode">[00:44:49]</i> **Josh:** Yeah. That's okay. I'm not– I'm not giving you grief. I just am amused. 

<i class="timecode">[00:44:53]</i> **Ben:** Yeah, it's always funny to see how people like to write code. Yeah. Yep.

<i class="timecode">[00:44:57]</i> **Josh:** And under your TSConfig, could you just make sure that "strictNullChecks" has a check under it? Under Type Checking. 

<i class="timecode">[00:45:04]</i> **Ben:** "strictNullChecks," okay. Yeah, so "strictNullChecks" is checked. 

<i class="timecode">[00:45:09]</i> **Josh:** Awesome. Cool. So, have you heard — or I'm curious if anyone, the chat has heard — of the billion-dollar mistake in the—

<i class="timecode">[00:45:16]</i> **Ben:** I haven't!

<i class="timecode">[00:45:17]</i> **Josh:** —computer science industry?

<i class="timecode">[00:45:18]</i> **Ben:** I'd love to hear more.

<i class="timecode">[00:45:20]</i> **Josh:** Oh, boy. So the billion-dollar mistake refers to a phrase from someone, I believe his name is Tony Hoare, who invented the null pointer concept in, I wanna say C or maybe even earlier. Yeah, people are in the chat. Yeah, it's null! But the interesting thing is the concept of null, something that's allowed to be blank — in JavaScript, it's either null or undefined because we hate ourselves as a community — that itself is considered necessary in a lot of programming languages. What is the 9,001th element of an array that's size 4? Like, is it null or do you throw an error?

Mm-hmm.

The problem with null is that in a lot of typed languages, you are allowed to assign a value that has a null — that, sorry, that is null — into something that's expecting a value of another type. Like, let's say that you have a function that takes in a string. In a lot of older languages like C++, Java, C# with the default settings, you can provide null to that function and the compiler would totally let you do it. I appreciate where you're going with this, 'cause that's exactly what I was gonna suggest.

<i class="timecode">[00:46:31]</i> **Ben:** Okay!

<i class="timecode">[00:46:31]</i> **Josh:** So, yeah, with strict null checks enabled, which is a feature in TypeScript and a lot of other newer languages, null and undefined are no longer considered assignable to types like string or array of numbers or Ball or other interfaces earlier. So, like, if you were to try to call doThingsWithStrings() with undefined, let's say, or null — either of those — it would not be allowed. It would tell you, hey, it's supposed to take in a string.

<i class="timecode">[00:47:01]</i> **Ben:** Uh…

<i class="timecode">[00:47:03]</i> **Josh:** Oh, no. 

<i class="timecode">[00:47:04]</i> **Ben:** Yeah, let me actually try return…

Oh, there we go, okay. 

<i class="timecode">[00:47:08]</i> **Josh:** Oh, thank heavens.

<i class="timecode">[00:47:09]</i> **Ben:** Yeah.

<i class="timecode">[00:47:09]</i> **Josh:** I was about to be so annoyed.

<i class="timecode">[00:47:11]</i> **Ben:** Okay. It just needed some time to catch up. 

<i class="timecode">[00:47:14]</i> **Josh:** Yeah. We're going so fast. It's so exciting.

Yeah, so this is something that older languages don't have, and it's super useful in TypeScript. I think Swift and Rust and co. also have it. C# lets you opt in now. If you're coming from these modern languages or haven't worked in type systems before, this is like, "Well, of course! Like, why would you allow null or undefined to be there?" But that's just how a lot of older languages like C worked. So this is a nice feature of TypeScript that I'm proud to say is something you should always enable in your projects unless you physically cannot for too many issues.

Cool. 

<i class="timecode">[00:47:50]</i> **Ben:** Gotcha. And so if I put in `surprise`, this is gonna throw an issue because there's a possibility that `surprise` could be undefined.

<i class="timecode">[00:47:58]</i> **Josh:** Yes.

<i class="timecode">[00:48:01]</i> **Ben:** Nice.

<i class="timecode">[00:48:01]</i> **Josh:** If — and this brings up a really cool concept in TypeScript. If you were to wrap that doThingWithStrings() call inside an if statement that checks if `surprise` is truthy, or if it's, say, not null or undefined, it would be allowed…

<i class="timecode">[00:48:16]</i> **Ben:** If surprise. Oh, thank goodness. It has the… the playground has the VS Code commands. That's great. 

<i class="timecode">[00:48:24]</i> **Josh:** Do you know why it has the VS Code commands, by the way? Have you ever played with Monaco before?

<i class="timecode">[00:48:30]</i> **Ben:** Monaco is just, like, super powered by VS Code, right? And it's, like, the same engine more or less, right?

<i class="timecode">[00:48:37]</i> **Josh:** Yeah. Yeah, the TypeScript Playground uses Monaco. So I always thought was really cute, that VS Code can be, like, sort of embedded in places. At least, its text editor can.

<i class="timecode">[00:48:44]</i> **Ben:** Mm-hmm. 

Yeah, but here it's like… okay, so here it's not throwing an issue because we know that, like, you know, `surprise` has to exist, it has to be truthy. Therefore, it can't be — if we ever get in here, you know, if we ever get inside this function, we know `surprise` has to be truthy, which means it can't be undefined. Therefore it must be "Howdy," right? And I bet… I bet TypeScript is smart enough that if I hover over this… yeah!

<i class="timecode">[00:49:12]</i> **Josh:** There it is!

<i class="timecode">[00:49:13]</i> **Ben:** It specifically knows that it's "Howdy."

<i class="timecode">[00:49:16]</i> **Josh:** Yeah. Exactly. You hit the nail in the head. You started the stream saying you're not, like, super… I forget the phrasing. 

<i class="timecode">[00:49:22]</i> **Ben:** I do have a few things up my sleeves. I have seen a few things—

<i class="timecode">[00:49:26]</i> **Josh:** Yeah!

<i class="timecode">[00:49:26]</i> **Ben:** —once or twice. 

<i class="timecode">[00:49:27]</i> **Josh:** You know the good stuff. The important things.

Yeah, so that's the concept of type narrowing! I'm sorry, I have a speech thing. It's hard for me to say. But it's the opposite of widening. It's… TypeScript can see from your code that certain areas can only be reached if some better, more specific, more narrow type is what your value is. Cool. 

Yeah, this isn't Ben's first TS rodeo. You've ridden the TypeScript bull before!

<i class="timecode">[00:49:58]</i> **Ben:** Yeah, so, to answer Nicky's question, like, it is specifically… the type recognizes that it's specifically "Howdy." It's not some generic string. 

<i class="timecode">[00:50:08]</i> **Josh:** Yes. Because you used a const, so TypeScript knows it's only ever gonna be either "Howdy" or undefined. But yeah, if you were to change it to let, TypeScript would say, "Hey, I see it's allowed to be changed, so I'm just gonna assume it's the type string or undefined."

<i class="timecode">[00:50:20]</i> **Ben:** It's gonna catch up. But yes, I agree with you. I think the editor's just catching up. 

<i class="timecode">[00:50:29]</i> **Josh:** Running OBS and VS Code is a little hard for your computer. 

<i class="timecode">[00:50:32]</i> **Ben:** Oh, yeah, actually, if I hover over this, it does say it's a string, right? So we got in here, we figure hey, you know, it might have changed since then, but clearly the intent is that this could be some string. Okay.

Interesting, interesting, interesting.

Is there… do you have another thing you'd like to show off that you think, like, newcomers to TypeScript should know? 

<i class="timecode">[00:51:00]</i> **Josh:** Ooh. Um… hmm.

Let me think about that.

Oh, I just noticed, there is an example for this. It's the Type Widening and Narrowing example. 

Um, yeah. There is an example on discriminated types— or, discriminate types, which is really cool.

<i class="timecode">[00:51:24]</i> **Ben:** Okay!

<i class="timecode">[00:51:25]</i> **Josh:** I think that's, like, the last big TS feature. Yeah, under Meta-Types.

So, let's look at this TimingEvent type. And by the way, there is… we're probably gonna have to cover this, 'cause eventually someone will always ask or wants to know what is the difference between type and interface. Type lets you declare unions, so things that can be one or another — interface doesn't. So that's why we're using type here. When we say, on line 10, "TimingEvent," we are declaring that anywhere in code, whenever we say "TimingEvent," we mean something that can be either the first object shape with "name" or "userStarted," or the second object shape with "name" and "duration." So that is a way to write a union type — an either/or type — with object shapes. It can be either of those two things. Does that kind of make sense, sound reasonable so far? 

<i class="timecode">[00:52:14]</i> **Ben:** Yeah! And so this is also implying, you know, that like, if there was, you know, a name "start," you probably wouldn't expect there to be a duration. It's not, like, forbidding the duration, but, like, it's saying that if you just had name "start" and a duration, right, like, this is incomplete because it doesn't match this shape and it doesn't totally match this shape either. 

<i class="timecode">[00:52:38]</i> **Josh:** Exactly, yeah. If you were to go inside the handleEvent() function just a few lines down and type in, before the switch statement, "event.," and then let the editor catch up, it would tell you that there's only one thing that's known to be a property. It's name, which is either "start" or "closed." So we need to, if we wanna access a property, we need to narrow it. We need to switch on event.name, let's say. So event.name is "start," then we know userStarted is an available property.

<i class="timecode">[00:53:09]</i> **Ben:** Right, okay. So we could do, like, you know, in here I could say name — like, and so up here, we didn't know what the name was, and so the only thing that we could guarantee is that it has a name. But then down here, because we know, like, to get inside this case in the first place, like, the name has to be "start." Then we know that we… like, there's going to be a userStarted as well.

<i class="timecode">[00:53:34]</i> **Josh:** Exactly, yeah.

<i class="timecode">[00:53:34]</i> **Ben:** That is so cool.

<i class="timecode">[00:53:37]</i> **Josh:** Yeah! This is one of the not as greatly named features, it's discriminate types or discriminated unions. It's not an HR nightmare. It is a really useful feature. I have personally used this all the time a lot in my projects, especially when dealing with, like, network requests or statuses of generic operations, whereas something might be like status zero results and it's some value or status one with an error. That type of thing.

<i class="timecode">[00:54:02]</i> **Ben:** Interest— yeah, yeah. Okay, this makes sense in the context of, like, server responses. Yeah, 'cause, like, your status code, the shape of a 404 response object is gonna look different from the shape of a 200 successful, "here's the data you need for your app."

<i class="timecode">[00:54:18]</i> **Josh:** Yeah, for sure.

<i class="timecode">[00:54:20]</i> **Ben:** Okay.

<i class="timecode">[00:54:20]</i> **Josh:** In fact, we can actually see that lower down in this exact example where they—

<i class="timecode">[00:54:24]</i> **Ben:** Oh, hello.

<i class="timecode">[00:54:24]</i> **Josh:** —they have a slightly more complex one, which has version 0 of some theoretical API—

<i class="timecode">[00:54:31]</i> **Ben:** Mm!

<i class="timecode">[00:54:31]</i> **Josh:** —or there's version 1, which has message and status, or there's just an error. 

<i class="timecode">[00:54:36]</i> **Ben:** Type checking for versioned code! Oh, that's good. That's good. Okay. 

<i class="timecode">[00:54:40]</i> **Josh:** Yeah. And this calls back to some of the earlier questions asked. When would you use TypeScript? Well, let's say that you have an API that has, like, 20 different versions and you wanna have safety with which one you're using. Well, this is a really good pattern for helping you understand which version and make sure that your code is referencing the right properties for the right versions. 

<i class="timecode">[00:55:01]</i> **Ben:** That's awesome. That's so cool.

We are — wow. It's amazing how quickly time flies? Isn't it? It really is. Like, streams always seem to last much shorter than they should. But chat, I would love to make sure that if you have any other questions, that we have some time to get to them, so if there's anything else you wanna know, any maybe, like, more specific TypeScript questions, or even if you just want Josh's opinion, like, feel free to, like, you know, let us know right now.

"Keep going." I mean, you have time. Uh, I could keep going, going. Uh, I could keep going. Let's keep going. But yeah, chat, if you have questions, if you wanna see anything in particular or just get a vibe check from Josh, let us know.

"When types in ECMA?" Um, yeah. Yeah. Okay. So this is, this is one of the things that's interesting seeing, like, TypeScript become more and more of the ecosystem or, like, get more heavily involved and become more firmly ingrained is, like, there was recently a proposal to allow native JavaScript to have room for type annotations. Those type annotations wouldn't be used in JavaScript. They'd be effectively comments. But basically, it would allow the syntax to become standardized. 

<i class="timecode">[00:56:19]</i> **Josh:** Yeah. By the way, I love the way that this was asked. "When types in ECMA?" It makes me feel like this is gonna be a, like, chest-beating question of the JavaScript community. Yeah, I am very excited about that. It's gonna take years, though. Like, new features, especially ones that have so many complications and edge cases like, say, types, or type annotations specifically, they take a while, because JavaScript is used in a billion bajillion places — a Brazilian places — and all that. So, the…

Don't get your hopes up that it'll happen anytime soon, but yeah. For those who aren't super big on Python or Ruby, it really, I think, closely mirrors some of the discussions that have been happening in those communities, because basically every untyped language — Python, Ruby JavaScript — now has some popular superset with types, and now that languages, both Python and Ruby, have started adding in the concept of type annotations. So I'm really excited for this in part because it means that I won't have to use compilers or transpilers to turn my TS files into JS. I can just run, in this imaginary future, I can run Node on my .js files and I can also just run TypeScript on my .js files and then it'll just work.

<i class="timecode">[00:57:33]</i> **Ben:** Mm.

<i class="timecode">[00:57:33]</i> **Josh:** That would be, wow, so much less complication. 

<i class="timecode">[00:57:37]</i> **Ben:** Yes!

We have a fantastic question in the chat that comes from Cynthia, who wants to know what a .d.ts file is. 

<i class="timecode">[00:57:44]</i> **Josh:** Great question! And actually, I think there were two main TypeScript things we didn't get into that we could, if we have time.

<i class="timecode">[00:57:50]</i> **Ben:** I'm good!

<i class="timecode">[00:57:50]</i> **Josh:** If we both keep going.

<i class="timecode">[00:57:51]</i> **Ben:** Let's go for it, yeah!

<i class="timecode">[00:57:53]</i> **Josh:** Cool! Could you go to the website aka.ms/types? And then look up slash…

By the way, Orta designed this site, but I did a bunch of early implementation. I'm very proud of it. Um, yeah! So this is a search engine for type declarations. A lot of packages are written in JavaScript, and basically every npm package ships JavaScript. But TypeScript needs to know what those packages look like. Let's say, if you import groupBy from the Lodash package, what is this groupBy thing? Does it even exist? If it's a function, what parameters, what return type, et cetera? So TypeScript allows you to write .d.ts files or declaration files, which describe just the type system part of a file. And this website is a really nice search engine for looking up whether a package ships with its own .d.ts files, or if there's a package that you have to install separately for them.

If you don't mind, could you look up, let's say Lodash on here? 

<i class="timecode">[00:58:56]</i> **Ben:** Let's do it, yeah, okay. 

<i class="timecode">[00:58:58]</i> **Josh:** Cool! So Lodash does not have its own type annotations, its own… sorry, .d.ts files, its own type definitions. So the community has created type definitions for Lodash, which you can install in this @types/lodash package, which TypeScript will automatically see and pick up and use to inform its understanding of what the Lodash module looks like.

<i class="timecode">[00:59:19]</i> **Ben:** Okay. But as opposed to… do you know a good library that would have its own type, like, .d.ts files in there? 

<i class="timecode">[00:59:27]</i> **Josh:** Yeah! I can see, on the screen, Vue! There was, like, a random search by default on here. So Vue ships with its own .d.ts files. So actually, in the playground, when you type in code and it has the source on the left, output on the right, one of the outputs you can see is .d.ts. It's the equivalent declaration file for your code.

<i class="timecode">[00:59:47]</i> **Ben:** Okay.

<i class="timecode">[00:59:48]</i> **Josh:** So, there you go! That's… it's like the TypeScript minus JavaScript. It's just the type system stuff, none of the runtime stuff. 

<i class="timecode">[00:59:56]</i> **Ben:** Gotcha. And we specifically kind of export this into its own file to be used almost as like, I guess, metadata around our libraries and our code to be used and consumed by engines such as TypeScript and VS Code that, like, can understand it, but without impacting basically the rest of the project or, like, bloating the source files that get pulled in. 

<i class="timecode">[01:00:18]</i> **Josh:** Exactly, yeah. It's really useful. You can actually write .d.ts files in your projects. If you have, let's say, like, a global variable in some project that gets injected in a script by the server, you could, like, declare a global variable of some type. That's allowed.

<i class="timecode">[01:00:36]</i> **Ben:** Okay.

<i class="timecode">[01:00:38]</i> **Josh:** Cool!

<i class="timecode">[01:00:38]</i> **Ben:** Neat.

<i class="timecode">[01:00:38]</i> **Josh:** And then one last URL for these files. I forget if it's one of the most or the most active project on GitHub, is github.com/definitelytyped/definitelytyped.

<i class="timecode">[01:00:51]</i> **Ben:** Okay…?

<i class="timecode">[01:00:53]</i> **Josh:** It is Definitely Typed. And this is this huge warehouse of all the type definitions that have been authored by the community. It's under the types folder. And it's honestly one of the most — I think the most impressive GitHub repo I've ever seen. They have bots automating all sorts of things. If you have created your own .d.ts file, it'll automate people pinging — or, it will automate the pinging of you for review when someone sends a pull request. They have all these templates that you can use for different types of projects. Really cool stuff. 

<i class="timecode">[01:01:29]</i> **Ben:** Okay!

<i class="timecode">[01:01:29]</i> **Josh:** But yeah, 50,000 closed PRs. 

<i class="timecode">[01:01:32]</i> **Ben:** That's… that's incredible. Wow, what a project and honestly, just, yeah, what a helpful utility. 'Cause yeah, you mentioned that this is, like, providing… kind of reverse engineering types for libraries that don't have them and for which probably, in many cases, the maintainers of those libraries either are no longer maintaining or just simply don't have the time to be, like, implementing their own types, or haven't prioritized that.

<i class="timecode">[01:02:02]</i> **Josh:** Yeah, for sure.

<i class="timecode">[01:02:04]</i> **Ben:** Okay.

<i class="timecode">[01:02:06]</i> **Josh:** I'm responding to the chat. mhuggins7278, "hard time getting that declare global working trying to extend the Express Request type from Definitely Typed." Yeah, it can be tricky sometimes if, like, one package exports types but in your code, you need to add something to the types. Like, maybe that's a pattern espoused by the library. I don't remember off the top of my head the right patterns, plural, that you might need to use for that, but if you wanna ping us on Twitter, I'd be happy to search for them async and then get back to you. Because that is definitely doable. 

<i class="timecode">[01:02:34]</i> **Ben:** Good.

Yeah, Travis — BuildingBedrockLayout — says that he thinks that Definitely Typed was why TS won. Yeah, 'cause:..: If you can just crowdsource types, and including types for, like, libraries that don't have them, like, you ensure that more folks can opt into benefits of the ecosystem, which is great. 

<i class="timecode">[01:02:54]</i> **Josh:** Yeah! Plus one. 

<i class="timecode">[01:02:57]</i> **Ben:** Michael Chan — lunchdev — says, "npm package pages also have a badge for projects with types of DefinitelyTyped." Okay. Yeah, so there's, like, more… more and more ways to, like, just expose who has this stuff.

Ooh! Okay, can you tackle Alex's question here? 

<i class="timecode">[01:03:15]</i> **Josh:** Yeah! Spoiler: that's how I do it!

Alex says, "I've been using TypeScript just for static checking and then Babel for transpiling. Am I missing something by using it just like that?" No, you're not missing anything. That's a totally wonderful and fine way to do it. I mentioned much earlier in the stream that TypeScript's command line, tsc, the TypeScript compiler, offers a couple things. It offers type checking your code and it offers compiling your code into JS, .d.ts, cetera. That's one reasonable way of doing it, but that's — that's also one of the reasons why type was so popular early on, that it's a really nice, convenient utility. People actually use TypeScript like Babel, like, "oh, I just wanna compile that code down so that Internet Explorer 10 can run it years ago."

But yeah! There is a very good TypeScript preset and set of plugin things for Babel. I forget the exact terminology. So yeah, it's totally reasonable. If you use, I think it's @babel/preset-typescript, that would allow you to use TypeScript integrated with your…

Here, I'll post the link in the chat.

<i class="timecode">[01:04:19]</i> **Ben:** Oh, yeah, please do.

<i class="timecode">[01:04:21]</i> **Josh:** It allows you to use it integrated with whatever other stuff you're using in Babel, which you might then be using within, like, Webpack or whatever. I personally typically use @babel/preset-typescript to run Jest, which is currently still my test runner of choice, pending my investigating Vitest and all those other things now that they're more stable. So yeah, I think that's a totally reasonable way of doing it, and especially if you're integrating with a tool that has good Babel support such as Jest, this is just a really good way to do it.

<i class="timecode">[01:04:50]</i> **Ben:** Awesome!

<i class="timecode">[01:04:50]</i> **Josh:** But yeah, Babel has really good support for, like, TypeScript enums and everything. Years ago, there was… it was much worse, but now it's nice.

<i class="timecode">[01:04:59]</i> **Ben:** Alright!

And then… okay. Travis wants to know, "What is the long-term plan for private fields in TypeScript versus private fields in JavaScript?"

<i class="timecode">[01:05:10]</i> **Josh:** Well, I'm not on the TypeScript team, so I can't speak for them.

<i class="timecode">[01:05:13]</i> **Ben:** Totally fair.

<i class="timecode">[01:05:13]</i> **Josh:** However, I will say, Microsoft hates deprecating things and the TypeScript team even more so hates deprecating things. Do we have anyone who works with Microsoft? Perhaps on Docs? Ben, you wanna…(!) 

<i class="timecode">[01:05:25]</i> **Ben:** Yeah. Yeah, no, Docs reign forever.

<i class="timecode">[01:05:29]</i> **Josh:** Yeah.

<i class="timecode">[01:05:29]</i> **Ben:** Yeah, no, we… you can't delete anything, because someone could need it. Someone could be working on old tooling and stuff like that. Yeah. In fact, this is, like, yeah, this has historically been a thing. Like, the reason, in many cases, Windows is the way it is, is because, like, historically, Microsoft has ALWAYS tried to support 100% backwards compatibility, even in cases where clearly the original behavior was quote–unquote "wrong." You know, there's a chance that some program somewhere relied on it. In fact, there was one particular bug in, like, one of the earlier versions of Windows that Sim City depended on. And then a new version of Windows came out and was, like, all set to fix the bug. And then Sim City was like, "Hey, Windows, what do WE do?" And Windows was like, "You know? You're right! We did break backwards compatibility!" And so they had to, like, figure out a way to basically make a specific implementation, like, a specific fix for Sim City. If that tells you anything about Microsoft and backwards compatibility and deprecation. 

<i class="timecode">[01:06:47]</i> **Josh:** Yeah. That cracks me up. "If Sim City."

<i class="timecode">[01:06:50]</i> **Ben:** Yeah, exactly!

<i class="timecode">[01:06:52]</i> **Josh:** So yeah, to more directly answer what are private fields in TypeScript or private fields in JavaScript: TypeScript does support class-based programming — classes, OOP, all that. TypeScript doesn't have an opinion on what architecture patterns you use so long as they're type-safe. So in TypeScript, before JavaScript had its own private fields, the hashtag syntax, this-dot-pound-whatever, or this-dot-hashtag-whatever. TypeScript allowed you to declare properties and classes, the types of them. Like, if you had a class Foo you could say, like, "myAge: number" on Foo, and that was a TypeScript-only syntax description. TypeScript also allowed you to add the keyword "public," "private," or "protected" in front of those properties. And this is just in the type system. Purely type system, not runtime. And the private would say that only this class is allowed to use it. Protected would say this class and classes that extend from it.

Ah, Joel! I like his blog. 

<i class="timecode">[01:07:48]</i> **Ben:** Oh— yeah, no, sorry, I'm just googling things right now. Don't worry. Keep going, keep going. 

<i class="timecode">[01:07:54]</i> **Josh:** Sure.

<i class="timecode">[01:07:54]</i> **Ben:** They can't even see my screen. 

<i class="timecode">[01:07:55]</i> **Josh:** Oh, got it.

Yeah, so TypeScript had this type system way to describe privacy for class properties, class methods, static things as well. And then JavaScript added runtime type safety — or, sorry, runtime privacy, like with the hashtag, private fields. So, they're… both are supported in TypeScript now, and both will be supported in TypeScript forever and ever. There is legitimate use that you might wanna describe a class where the members are actually available at runtime for, like, instance dot lookups, but in the type system you want to tell people, hey, you're not supposed to use this. So, long-term plan is no plan! It's fine as is, it's gonna remain as is. 

<i class="timecode">[01:08:39]</i> **Ben:** Gotcha.

<i class="timecode">[01:08:40]</i> **Josh:** Cool. 

<i class="timecode">[01:08:43]</i> **Ben:** Alright! Yeah, if there's no other questions — I mean, if you've got things, feel free to drop them in pretty quickly — but… yeah, if there are no other questions, maybe we can go ahead and start spinning things down. Josh, it's been lovely to have you on, and I'd love it if you could spend a bit of time talking about TypeScript ESLint, which is — yeah! — one of your big projects that you've got going on. 

<i class="timecode">[01:09:09]</i> **Josh:** Absolutely! Thank you for giving me the time at the end. It's been a lot of fun.

The compiler, TypeScript compiler, will check for things that are directly not type-safe. If you declare something's supposed to be a string and then give it a number, TypeScript will yell at you. But that is different from what ESLint covers. ESLint checks styling and logical errors. It can check if, say, your company has a naming convention and you violate the naming convention, or if you do something really confusing in code that's probably broken, or, like, make a variable and then not use it. TypeScript ESLint is necessary because ESLint only works on vanilla, plain JavaScript. It doesn't understand TypeScript syntax. And even if, years from now, we get that ECMAScript proposal through TC39 to get types in, ESLint itself won't be able to assume any particular type checker.

So TypeScript ESLint is the tooling that you use alongside or on top of ESLint to allow it to support TypeScript. I did not create it, but I am now one of the maintainers of it. It's really great. I highly recommend any enterprise or any software project — be it enterprise, open source, whatever, but especially if you're on a company that has customers — should use TypeScript and TypeScript ESLint. We have some rules that can provide some kind of shockingly useful bugfixes, or bug-finding rather. My favorite ones are around floating Promises. We will detect if you create a Promise and then don't await it so the Promise, if it fails, won't get logged anywhere or handled. It's really cool stuff. And just in general, ESLint is really important and good for the JavaScript ecosystem. So, highly recommend if you gotta type your project.

We recently overhauled the docs. Actually, we use Docusaurus, which is a wonderful static site/docs site generator that just released its 2.0. We have a pull request to upgrade. We're very excited.

<i class="timecode">[01:11:00]</i> **Ben:** Yes!

<i class="timecode">[01:11:01]</i> **Josh:** So, yeah! I wanna give one shoutout. If you don't mind clicking Get Started?

<i class="timecode">[01:11:08]</i> **Ben:** Let's do it!

<i class="timecode">[01:11:08]</i> **Josh:** And then go, on the left, to the Configurations section. We are overhauling these soon so that you have a little less, fewer lines of code, but yeah! We have some really good recommended presets that enable a lot of really good rules, so you don't have to look through our list of over a hundred ESLint rules and memorize which ones you like. I personally recommend start with the strict set and then disable anything that makes you unhappy. 

<i class="timecode">[01:11:32]</i> **Ben:** Okay! Cool, cool, cool!

<i class="timecode">[01:11:34]</i> **Josh:** Yeah!

<i class="timecode">[01:11:35]</i> **Ben:** Alright, and then one other thing, just to make sure that we're promoting you to the fullest extent. You wrote a book! Where can I find that book?

<i class="timecode">[01:11:45]</i> **Josh:** Yes, I did write a book! Thank you for promoting me! LearningTypeScript.com! There are two ways…

So, to start, I am a full-time open source developer. I spend all my professional hours that aren't spent on consulting so I can actually support myself and eat working on open source projects. This book is part of my bid to spend more time. So, it's, I think, the best way to learn TypeScript if you just know JavaScript. That's, of course, with the caveat that different learning strategies and modalities work for everyone else. This is mine, I personally like books. I think the book is really good. It talks about all the things we talked about on the stream today, including best practices like Golden Rule of Generics, which is, like, a really big thing. All sorts of stuff. It's great.

Thank you for getting the book, tomjaprice. I really appreciate it. If you do get the book, please rate it five stars. You would be shocked how useful that is. Like, that's actually really beneficial for books to be rated five stars — in part because, like, people actually care and in part because it helps my SEO.

You can also help me on github.com/sponsors/JoshuaKGoldberg. That is my GitHub Sponsors thing. Right now, I earn in total from sponsors about half of the federal minimum wage in the United States per month, so I'm not yet able to support myself as an open source developer. But with your help, I will be able to make more progress on projects like TypeScript ESLint. So, please do help.

<i class="timecode">[01:13:11]</i> **Ben:** Alright!

<i class="timecode">[01:13:12]</i> **Josh:** I really appreciate it. 

<i class="timecode">[01:13:13]</i> **Ben:** Alright. And I'm just putting in a few other links for places for people to find you. You tweet at @JoshuaKGoldberg. You stream on Twitch at JoshuaKGoldberg. I've been on there. It's a fun time!

<i class="timecode">[01:13:29]</i> **Josh:** Yeah!

<i class="timecode">[01:13:29]</i> **Ben:** You're a fun host! So yeah, y'all go follow Josh, all the places. And Josh, thank you so much for your time and for working us through TypeScript and answering the audience's questions. Y'all, if you have questions about Josh — questions about Josh, but questions about TypeScript! TypeScript and Josh, they're one and the same. We all get them mixed up. You know, one of them wears glasses and it rhymes with… TypeScript.

<i class="brackets">[Josh chuckles softly]</i>

But yeah, y'all go follow Josh. Ask him your questions question. He… I'm sure I can volunteer you for this. I'm sure you'd be happy to answer people's questions about this kind of stuff. Get his book! Yeah, absolutely.

Stick around, chat. We are going to find another streamer to raid. Also, while you're following people on Twitter, go follow Some Antics on Twitter at @SomeAnticsDev. That way you can keep apprised of all the good streams coming up. I think — I have to check the schedule, but I think next week I'm bringing on Florian Beijers. Florian Beijers is a… I mean he does lots of things, but he is, among other things, an accessibly consultant, as well as he streams himself. He's a gamer without sight, as in he can't see and he loves to play video games, and so he'll stream himself, doing video games without vision. And so we're gonna be, I think, talking about, like, just simply day-in, day-out screenreader experiences, I believe is what next week's stream is.

So, yeah! It's been great having y'all. Hit the Follow button if you want more streams about the web like this one. And again, Josh, thank you so much for your time. 

<i class="timecode">[01:15:09]</i> **Josh:** Thanks for having me! Sidenote, thank you, Ben, for helping us on the TypeScript ESLint website. We did an audit, but we're trying to find the archival footage from the VOD on Twitch. And also, Florian is awesome. I've actually worked with them before.

<i class="timecode">[01:15:23]</i> **Ben:** Really?

<i class="timecode">[01:15:23]</i> **Josh:** They did some — yeah! They gave us a whole bunch of really useful feedback at Codecademy on the accessibility of our site. 

<i class="timecode">[01:15:28]</i> **Ben:** Oh, that's awesome!

<i class="timecode">[01:15:28]</i> **Josh:** Really, like, absurdly, critically useful stuff. So, plus one! I will be tuning in. 

<i class="timecode">[01:15:34]</i> **Ben:** Alright! Awesome! And thank you so much to everyone who's followed during the stream. Ricard0_Gil, BrunchRunner, homeless207, thank you so much for your follows. And yeah, we'll see you next week. Bye, y'all!<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! First of all, Jason, thank you so much for the raid! That means a lot! Howdy! If you don't know who I am, I'm Ben Myers. This is Some Antics. This is a weekly stream where every week I bring on guests from around web development and web design to teach me something about building great user experiences for the web in a hands-on way, with a focus on accessibility and/or core web technologies.

Josh, do you think I need any more caffeine today?

<i class="timecode">[00:00:26]</i> **Josh:** Maybe a couple more espressos.

<i class="timecode">[00:00:27]</i> **Ben:** A couple more espressos. I think we can make that happen. Yeah! And so today, I have Josh Goldberg on. Josh, hello! Welcome to the stream!

<i class="timecode">[00:00:37]</i> **Josh:** Hey, thanks for having me. I, too, am excited! 

<i class="timecode">[00:00:40]</i> **Ben:** I am thrilled to have you on. We're gonna, you know, be talking about TypeScript today, which is something that, you know, to kind of put my cards out on the table, like, I have some experience with TypeScript, but no, like formal training in it. It's just things I've had to pick up as time has gone on. But Josh, you are immensely qualified to teach me TypeScript! Can you tell me why? 

<i class="timecode">[00:01:04]</i> **Josh:** Sure! Well, thanks for that introduction. Hey, everyone, I'm Josh. I do a lot with TypeScript in the open source community. I sometimes contribute — excuse me — contribute to the TypeScript language itself. I added that "ts-expect-error" directive comment, which made me very happy. I'm also one of the maintainers on TypeScript ESLint, which is the standard tooling that lets you run ESLint on TypeScript. And most recently, I wrote a book! "Learning TypeScript" through O'Reilly. It is, I think, my favorite, perhaps one of the best, if not the best ways to learn TypeScript if you know JavaScript but don't know anything about TypeScript or type systems or compiled languages otherwise. So that's me! And I'm a full time open source developer. You can find me, JoshuaKGoldberg on basically any platform — GitHub, Twitter, et cetera. 

<i class="timecode">[00:01:49]</i> **Ben:** Absolutely. Let me… let me put a link to your Twitter in there. I've also shouted out your Twitch channel because you're a fellow streamer. We were talking shop ahead of time in the green room.

But yeah! So, there was a comment leading into the stream in the chat that I found really interesting because I could relate. That comment was from friend of the show Anthony Campolo, who said, "Putting my bias out right away: I've been a TypeScript skeptic, but I recently started learning a stack that I think makes TypeScript sing." I think a lot of people can maybe relate to having been a TypeScript — excuse me — TypeScript skeptic, and kind of now I think there's this, like, awakening where, like, more and more people are coming to the TypeScript world, finding out that it works for them. Can you kind of talk about, like, why someone might be motivated to use TypeScript and what kind of projects it might make sense in?

<i class="timecode">[00:02:49]</i> **Josh:** Sure, that's a great launch point. I'll preface this by saying yes, no tool is perfect, and TypeScript is always getting better — better language features, better editor support, better framework and community support. So yeah, maybe five years ago, it wasn't as powerful or as fun or great as a thing as it is now. But TypeScript really shines when you have, I think, more than three files. That's kind of the threshold I've been advertising lately, where as soon as you have files that import each other or things that have to be shared across files, TypeScript gives you much more powerful tooling than just vanilla, plain JavaScript, where you can understand your code and be sure that when you make a change, you know all the places that are impacted by that change.

So I'd say, especially if you're working on a team or on a larger project like an interactive website or Node app that does multiple things. If it's not something very small, then TypeScript is definitely a nice tool to have during development and as a way to document your code for other people.

<i class="timecode">[00:03:47]</i> **Ben:** Absolutely. Okay, wow. So… man, what is…? So, I'm trying to figure out the next best question to ask! So, in my experience, one of the things that's been getting me more excited about TypeScript — because, you know, I'll mention that, like, I started off as a skeptic, right? I thought it was, like, overkill. I thought it made my code look ugly, you know? I'm sure you you've heard that sentiment before, right? Like, that's not an unfamiliar sentiment. But one of the things that, I guess, kind of convinced me, hey, maybe this thing is alright, is seeing more dev tooling leverage it. And as a result, like, for instance, VS Code is able to leverage those types and help me out with IntelliSense and that kind of stuff. So, yeah, I guess, how… what are some of the ways that TypeScript can empower developers and dev teams? 

<i class="timecode">[00:04:47]</i> **Josh:** Great question. To start, just the raw act of writing out your types in code. So, TypeScript lets you write type annotations, which are little indications of what something like a parameter for a function or a variable is meant to be. And you can describe object types. You can say… let's say I have settings for my Node app, and settings can take in output directory name and then maybe an array of some other things. TypeScript lets you describe those in your code, which acts as a wonderful piece of documentation when you have to, say, add new people to a project or come back to your code after six months of not using it. So that's part one, that you can describe your stuff and it's a standard way to describe these things, unlike, say, JSDoc, which is comments in code that isn't really verified by compilers.

TypeScript also powers VS Code, like you said, and a lot of other editors' language features or dev tool refactors, things like "Rename variable" or "Go to definition" or "Find all references." These are all much more powerful and reliable when you're using TypeScript, because there's this backing type system understanding of your code. So if you wanna, say, rename a function, then TypeScript powers VS Code's ability to find all the places that that function is used in a file or imported in another file, and then rename it safely for you.

Last thing I would say is that TypeScript is really good at catching bugs! I have never seen a conversion of a project from JavaScript to TypeScript where renaming a file to ".ts" or ".tsx" and then adding in the correct type annotations didn't find at least one real user-facing production bug. Not even getting the developers a better understanding and then them coming to the bug. Just directly, TypeScript saying, "Hey, you have a bug there." Which makes me very happy as a developer when I don't have to find that through bug reports and prod usage. So yeah, those, I think, are the three main advantages of TypeScript that I would personally advocate for. 

<i class="timecode">[00:06:39]</i> **Ben:** Makes sense!

Okay! So, I kind of wanna go ahead and get started. So let me go ahead and start sharing my screen, and I have… we did no setup ahead of time because we were enjoying talking about streaming shop. So, how should we get started today, Josh? 

<i class="timecode">[00:06:57]</i> **Josh:** Well, how about I share my screen on the TypeScript playground, which I think is a great reference resource for people to get into TypeScript, and then we take it from there. Is that possible?

<i class="timecode">[00:07:07]</i> **Ben:** Oh, are we sharing your screen today?

<i class="timecode">[00:07:08]</i> **Josh:** We can also actually share yours, if you'd prefer, but…

<i class="timecode">[00:07:10]</i> **Ben:** Yeah, let's—

<i class="timecode">[00:07:11]</i> **Josh:** …a little easier. 

<i class="timecode">[00:07:12]</i> **Ben:** Let's do mine, if you don't mind. And I'll open up the… there we go. Do-do-do. 

<i class="timecode">[00:07:25]</i> **Josh:** By the way, as Ben is getting this set up, I wanna give a shout out to Ben as a Twitch person. I had the pleasure and opportunity to see the OBS layout before, and it is absurdly well crafted. There are these beautiful little widgets and streamer utilities that Ben's written behind the scenes, and it's really cool. So, shout out SomeAnticsDev. This is a very well prepared stream. 

<i class="timecode">[00:07:49]</i> **Ben:** Thank you, thank you. Yeah, we've got Anthony in the chat, and Anthony's been saying that, like, I need to just, like, start, like, offering consulting services for streams, stream setups. I don't know! If that's anything anyone would be interested in, just reach out!

Alright, so I'm on the playground. Let me see, is there a good way to just embiggen this or shall…? I'll just… here we go. I bet… okay, yeah. Okay, so I'm on the playground. 

<i class="timecode">[00:08:20]</i> **Josh:** Cool. Yeah. This playground, I'll post — oh, you already posted in the chat. Yep, typesscriptlang.org/play is a great way to get started with TypeScript if you've never used it before and don't wanna set anything up or install any packages locally. On the left, for two-thirds of the screen, you have source code, your TypeScript file. And on the right, you can view a few different outputs from that file. Right now, by default, it's viewing the JS output. And we can see that, ignoring the fact that a couple of blank lines are omitted, it's basically the same. Like, the same variable, it's still const, it's still console logged. And this brings up a really good first point about TypeScript, that it is not a drastically different language from JavaScript. It's not like C# or other JavaScript flavors like ReScript or Reason. It's a superset of JavaScript, which means it is JavaScript plus some other stuff that you might find useful, but you don't have to use. So, yeah! That's the first thing of JavaScript and TypeScript.

And just to show off a feature of the playground, in the top left, where it says "v4.7.4," there's a "Run" button. And if you click that "Run" button and then click "Logs" on the right. Oh, I guess it shows automatically. This playground, just as a utility, can compile your TypeScript code to the equivalent JavaScript and then run it in the browser. So, yay, TypeScript Playground!

<i class="timecode">[00:09:40]</i> **Ben:** Alright, so we've written some TypeScript code. I think I'm done here. Like, we can go ahead and sign off. Like, we're good, right, Josh?

<i class="timecode">[00:09:46]</i> **Josh:** Sure, yeah(!)

No, I wanna show some of the very surprisingly deep and useful examples in the playground. If you go to the Examples dropdown and then click, let's say, the Literals one, it shows you a whole bunch of cool little TypeScript uses that you can try out. There we go.

So, the first thing I wanna show off is on line 16. This brings up the concept of the type system. TypeScript needs to understand your code. So you have a bunch of JavaScript and/or TypeScript code that's written, but TypeScript needs to add in its understanding of all the APIs and global variables and packages available to it. Like, let's say that you want to use the window.location API in a native DOM browser project. TypeScript has the concept of declarations or definitions where you can describe in the type system how something looks, and then TypeScript will understand, will read those in and understand it for your TypeScript code.

I've actually not seen these show red squigglies before. I do hate to introduce two things at a time, but this brings up a second topic, that TypeScript is super configurable, and one of the configuration options is "noImplicitAny." So if you click the TS Config dropdown a little above where your mouse is, and then scroll down to where it says "Type Checking." And a little further…

<i class="timecode">[00:11:24]</i> **Ben:** Oh, here it is. Okay.

<i class="timecode">[00:11:25]</i> **Josh:** There we go.

<i class="timecode">[00:11:25]</i> **Ben:** "noImplicitAny?"

<i class="timecode">[00:11:26]</i> **Josh:** Yeah, uncheck the first two, "strict" and "noImplicitAny."

<i class="timecode">[00:11:31]</i> **Ben:** Alright!

<i class="timecode">[00:11:32]</i> **Josh:** That should get it to stop complaining. Cool!

So TypeScript by default doesn't force you to type anything. If you don't wanna type stuff, if you don't wanna use all the TypeScript fanciness, then that's okay. But it can also opt into a strict mode called "noImplicitAny" where it forces you to add types for things that it can't immediately figure out.

<i class="timecode">[00:11:54]</i> **Ben:** Okay!

<i class="timecode">[00:11:55]</i> **Josh:** Ooh, I love this question in the chat. TSConfigs and the biggest pain points. Like, personally, I would recommend start with strict mode if you're just learning TypeScript. Just "strict: true." That enables all the nice little enforcements that TypeScript gives you. If you're finding difficulty, you can always turn off individual flags. Like, we turned off noImplicitAny. We could have left on the rest of them. We do have others like strictNullChecks on. So, that's my recommendation, "strict: true" and then see where you go from there.

But yeah, there are quite a lot of flags here, and the TypeScript Handbook, which is also on typescriptlang.org, has a full description of all the configuration shenanigans you can use. There's a TSConfig reference that I'll post in the chat. Yeah! So also, this brings up a really good point, that the TypeScript website has a really good set of tutorials for learning TypeScript. So if you wanna, say, learn as someone who knows JavaScript but nothing else or someone who knows C# but nothing else, then they have tailored guides that they kind of walk you through the major features with.

Yeah~ Cool. Anyway, the reason why I wanted to bring you through this playground is because I wanna show off a really cool TypeScript feature that other… a lot of other languages, most other traditional programming languages don't have, which is the difference between a primitive and a literal. A primitive is something like "string" or "number." It's a basic built-in type. A literal is a literal example of those.

<i class="timecode">[00:13:36]</i> **Ben:** Okay, so it's the difference between number and 5, or string and "Hello World"? 

<i class="timecode">[00:13:43]</i> **Josh:** Exactly, yes.

<i class="timecode">[00:13:44]</i> **Ben:** Okay.

<i class="timecode">[00:13:44]</i> **Josh:** And in fact, that exact difference, the difference between string and "Hello World," is shown on lines 16 and 21, where the first function allows any string. It says that its "arg" parameter is using a type annotation able to be any string at all. Yeah, there we go. Which means that both the helloWorld variable, which is type "Hello World," and this mutable let variable, which is a string, can be passed to it. But then the next function only allows strings that are explicitly, specifically Hello Worlds to be passed in. So although the const variable, which is "Hello World," is allowed, because the hiWorld's let variable is allowed to be any string — that's just how TypeScript infers let variables — it's not allowed because you might have set it to a different string before calling the function.

<i class="timecode">[00:14:32]</i> **Ben:** Okay. Uh… do I just need to rerun…? I'm trying to make the red squiggle go away, but…

<i class="timecode">[00:14:39]</i> **Josh:** Ah. So, if you wanna make the red squiggle go away, you can change the variable from let to const.

<i class="timecode">[00:14:45]</i> **Ben:** Ah, okay.

<i class="timecode">[00:14:46]</i> **Josh:** This brings up a…

<i class="timecode">[00:14:48]</i> **Ben:** Got it, okay.

<i class="timecode">[00:14:50]</i> **Josh:** Yeah, you might have set it to some other string at all in the world.

<i class="timecode">[00:14:54]</i> **Ben:** Okay. I'll put this back, but makes sense! Makes sense so far. Okay. Cool! 

<i class="timecode">[00:15:01]</i> **Josh:** So, that's a really powerful thing because TypeScript allows you to be even more specific in your code than just "it's any string, it's any number." You can say that something is, say, a union type, meaning it could be any of these, like on line 28, where it has to be the numbers 1 through 5. It can't be 0, -1, 2.3, whatever. 

<i class="timecode">[00:15:21]</i> **Ben:** Okay! So, how detailed could you get? Like, could I say, like, any string that starts with "Hello," for instance? 

<i class="timecode">[00:15:30]</i> **Josh:** You can, yeah! That's actually a relatively recent feature called template literal types, where you can… it's not quite regular expression level of power, but you can say it's…

I don't know if there's…

I'll type it in the chat. Hello, dollar sign — template literal syntax — string. That is a valid type in TypeScript that I just posted in the chat. And it's any string that begins with, like you said, "Hello" and then has any string after that. 

<i class="timecode">[00:15:59]</i> **Ben:** onlyHelloStart, I'll call that. And then it's arg, and then `Hello${string}` like this?

<i class="timecode">[00:16:10]</i> **Josh:** Yep!

<i class="timecode">[00:16:11]</i> **Ben:** Okay. And then I could do allowsOnlyHello(helloWorld), and this, we would expect to pass. allowsOnly… oh, this should be start. But… yeah. Alright. I could say "Hello Chat," and this should pass.

<i class="timecode">[00:16:31]</i> **Josh:** Yep!

<i class="timecode">[00:16:31]</i> **Ben:** But if I do… with our hiWorld, that's gonna fail. 

<i class="timecode">[00:16:39]</i> **Josh:** I think hiWorld now actually…

Oh, interesting! Why does that, uh—

<i class="timecode">[00:16:45]</i> **Ben:** Interesting. 

<i class="timecode">[00:16:45]</i> **Josh:** —that pass there? That shouldn't be happening. 

<i class="timecode">[00:16:48]</i> **Ben:** Yeah, it's also entirely possible that, like, the playground isn't quite set up for that or something, too. Interesting. 

<i class="timecode">[00:16:55]</i> **Josh:** Yeah. Now I'm furiously typing away on my end, just trying to figure out what's going on.

Huh, errors on my computer. Could you do me a favor? On line 28, where you're just typing… type in a string literal that should fail rather than a variable name? 

<i class="timecode">[00:17:13]</i> **Ben:** Oh, yeah, okay, yeah. So… ooh, hello, there we go. Yeah, alright. That'll do it. Okay. It has to specifically be a template string you pass in or, I guess, a variable as well.

<i class="timecode">[00:17:28]</i> **Josh:** Yeah. Not sure why it was passing, but yeah, let's say yes.

<i class="timecode">[00:17:33]</i> **Ben:** Okay, yeah! Weird. Okay, fun. Fun stuff, but seems sensible enough! 

<i class="timecode">[00:17:40]</i> **Josh:** Yeah. Cool! So, that's… those are… that's a lot of info about TypeScript, and I'm wary of just spewing stuff at you. Were there any particular questions or areas you wanted to delve into? 

<i class="timecode">[00:17:51]</i> **Ben:** Ooh, that's a good question.

Chat, if you've got questions, let us know as well.

This is… so, TypeScript feels like one of those things that, like, is big enough that, like, I don't quite know, like, the linearish path to take through this, so admittedly, I'm kind of struggling with coming up with a good flow for this.

<i class="timecode">[00:18:20]</i> **Josh:** Sure! Well, if no one in the chat also has any questions, I would suggest moving on to object shapes because that's the next major point with TypeScript.

<i class="timecode">[00:18:28]</i> **Ben:** Yeah!

<i class="timecode">[00:18:29]</i> **Josh:** Perhaps the biggest, one of the biggest points of it is that TypeScript is something called "structurally typed."

I'm gonna see if there's a… there we go. Under Examples, there's an example for structural typing under Language. By the way, you can see there are a whole bunch of examples here. We're only touching the surface, the major points, but there are a lot of cool little edge cases here.

So, when you describe an interface — and I'm gonna delve into my personal background, which is, like, C++, C#. When you describe an interface in high-level languages like C# and Java, you have to explicitly say that a class implements that interface, and whenever something is meant to be an instance of the interface, it has to be an instance of a class, et cetera, et cetera. In JavaScript, we don't like doing that. We just pass object literals around everywhere — YOLO. We have a good time. So in something like TypeScript, interface doesn't mean you have to explicitly say a variable is an instance of the interface or whatever. It's just a general idea. Anything that happens to have these attributes can be used in something that I ask for where it's supposed to be this.

So for the first interface — line 12, Ball — anything that has a diameter number is allowed to be a Ball. So you can see that Ball and Sphere interfaces structurally — aha — they are the exact same, so if you have one thing that's a Ball and one thing that's a Sphere, you can reassign them to each other. That's totally allowed.

<i class="timecode">[00:19:59]</i> **Ben:** Yeah, no red squiggles here. Okay. 

<i class="timecode">[00:20:02]</i> **Josh:** Cool. And that actually has some really interesting implications. For example, if you have an interface Tube where you have both a diameter and length, "ball = tube," where "tube" is a Tube variable, is totally allowed because the tube happens to have a diameter number! So that's totally fine.

<i class="timecode">[00:20:20]</i> **Ben:** Okay, but you can't go the other way around because… yeah, you can't assign a ball to a tube because ball is missing the length. 

<i class="timecode">[00:20:32]</i> **Josh:** Exactly, yeah. Cool! So that means that any object that happens to have these things is allowed. So on line 50, when we say "let createBall" as a function that takes in a number and returns an object with that as a diameter, although that happens to create an object that happens to be usable as a Ball, it doesn't need to explicitly say that. You don't have to add an explicit type annotation saying it returns a Ball or a Sphere or anything.

So, that's the gist of structural typing, and this is how TypeScript's type system works, where you do as little work as possible, you just describe what things are supposed to look like, and as long as your code happens to work that way, as long as you pass an object that happens to have the right attributes in, TypeScript will allow it. Minimum work.

<i class="timecode">[00:21:20]</i> **Ben:** Okay. Yeah, it's if the shoe happens to fit, it fits. 

<i class="timecode">[00:21:25]</i> **Josh:** Yeah.

<i class="timecode">[00:21:25]</i> **Ben:** Okay.

<i class="timecode">[00:21:26]</i> **Josh:** One last piece of vocab before I stop talking quite so much for a little bit, is that people often call JavaScript duck-typed. If it looks like a duck and quacks like a duck, it's probably a duck. I see structural typing as kind of the type system equivalent of duck typing. If it has this structure and works like that structure, it is that structure. That's okay. I'll allow it. 

<i class="timecode">[00:21:48]</i> **Ben:** Okay, yeah. Interesting, interesting. Yeah, 'cause… so, back in my Computer Science degree, the classes that I started with put me in, like, Java. And in Java, like, you have to… like, everything is an instance of a class. And so even if two classes look very similar, like they have very similar shapes, one thing is definitively Ball and another thing is definitively Sphere, and you have to do some serious gymnastics to trade them back and forth. 

<i class="timecode">[00:22:24]</i> **Josh:** Yeah. Yeah. I remember my first year — I also was a CS major — we had a discussion in the class where I was completely unprepared for this, and I had no idea what I was talking about, whether multiple inheritance, being able to have a class that extends multiple classes, was a good or bad idea. And it, first of all, it cracks me up that these days, especially in JavaScript, but also in general, people are in many areas moving away from object-oriented programming. Like, that's not how we write, say, a React app typically. But also, it's just so irrelevant and unnecessary now, where this structural typing system means that you don't have to explicitly be a Ball or a Sphere. You can be both just implicitly, accidentally. It works.

<i class="timecode">[00:23:06]</i> **Ben:** Yeah. You're accidentally Ball-shaped.

<i class="timecode">[00:23:09]</i> **Josh:** Yeah!

<i class="timecode">[00:23:09]</i> **Ben:** Which is how I describe my cat.

<i class="brackets">[Josh chuckles]</i>

<i class="timecode">[00:23:14]</i> **Josh:** Excellent. 

<i class="timecode">[00:23:16]</i> **Ben:** Alright. Okay! Interesting.

We're getting some serious plus-ones for talking about the TSConfig sometime. Maybe we need to, like, specifically single out a section of this stream to talk about TSConfig. 

<i class="timecode">[00:23:34]</i> **Josh:** Sure.

<i class="timecode">[00:23:35]</i> **Ben:** Okay.

<i class="timecode">[00:23:35]</i> **Josh:** I do wish the playground had a few more TSConfig examples, 'cause they're really good for just getting started. But yeah, I'm curious. Like, what is it about TSConfigs that people are finding hard or confusing or not as documented?

<i class="timecode">[00:23:50]</i> **Ben:** Yeah. I mean, and it seems to be, like, specifically, I guess, around, like, the JSON in particular or something. Yeah. Y'all, seriously, if you've got, like, questions, or there's things about, like, the config that you find in particular…

Okay. Yeah, here we go. We're getting some specifics in here. Anthony says, "I start a TypeScript project" and it's like the TSConfig is like — or I guess he starts a TypeScript project and it's, like, broken by default. He needs to start modifying TSConfig to make it work. He doesn't really know how to do that. Jim backs him up with, like, "It's scarily documented, like the docs are there but they're not entirely clear."

Yeah, maybe could we, like… do you know a good way to get, like, a tsconfig.json, like, default file that we could, like, specifically spelunk through? 

<i class="timecode">[00:24:42]</i> **Josh:** Yeah, actually, if you're able to showcase, like, a terminal and/or VS code.

<i class="timecode">[00:24:47]</i> **Ben:** Yes.

<i class="timecode">[00:24:47]</i> **Josh:** If you have TypeScript installed, either globally or in a project, and then you run "tsc --init," that'll get us a really good starting point recommended by the TS team.

<i class="timecode">[00:24:59]</i> **Ben:** Okay. Yeah. Can I do a brand new project? Is that okay? 

<i class="timecode">[00:25:03]</i> **Josh:** Works for me.

<i class="timecode">[00:25:04]</i> **Ben:** Alright. Let's try… typescript-fun. I'll "npm init," give us the defaults here. And then… do I have? No, I don't. Okay, so what do I need to do to, like, globally install this? Or can I "npx" it? 

<i class="timecode">[00:25:25]</i> **Josh:** You should be able to "npx tsc --init." I think I got that working yesterday. Or, did try it yesterday and worked. I did nothing.

<i class="timecode">[00:25:36]</i> **Ben:** Makes sense.

Ahahahahaha. Oh, thank GOD, whoever implemented this. Okay.

<i class="brackets">[Josh chuckles]</i>

"npm install." Let's do… let's do global, even though, you know, whether…

<i class="timecode">[00:25:49]</i> **Josh:** You don't have to, by the way. You can install it as a dev dependency in your project—

<i class="timecode">[00:25:53]</i> **Ben:** Okay.

<i class="timecode">[00:25:53]</i> **Josh:** —and, like, "npm run" it. But yeah, I personally have it installed globally and also use Yarn for all my things, so this is not an area that I've gotten a lot of experience in. 

<i class="timecode">[00:26:05]</i> **Ben:** Okay.

Alright, yeah. Now let's go ahead and pop open our editor. We'll take a look at this. Yeah, okay. So, in…

<i class="timecode">[00:26:13]</i> **Josh:** I do wanna note, by the way, sorry, before you move away, that line there in the terminal, those are the most important compiler options to look at first, in that order. We can look at them in the file. I wanted to call out for people, if you use "tsc init" on your own computer, then there's just a whole lot of stuff there. Those are the options that that it's calling out that I'd recommend trying to understand first. 

<i class="timecode">[00:26:34]</i> **Ben:** Alright, yeah! So I'll kind of side-by-side these a bit.

Alright, yeah, so, in general, the feedback on the TSConfig seems to be that it's, like, a big, inscrutable wall of comments and people don't really know kind of where to start.

So, Josh you've got a project. I mean, I know you have multiple, like, open source projects and that kind of stuff. Where do you begin when you need to kind of tailor this to your needs? Or how should we kind of understand this tsconfig.json? 

<i class="timecode">[00:27:05]</i> **Josh:** Hm. That's a good question. I do empathize with people of the chat. Like, it is a lot to go through and it took me a while, 'cause as they said, you do have to kind of know JavaScript and ECMAScript stuff a bit to configure these. But they are… there's good reason there.

What I normally do is I will go through the currently uncommented things first and I will try to figure out what my project needs, and most of the time the defaults are fine.

This "target" here, this is… this is what ECMAScript JavaScript version you think your code is gonna run on. Like, honestly, this could probably be "es2019" or "es2020." Like, most browsers support at least ES2020's JavaScript features. But TypeScript will know which built-in JavaScript APIs are available to you based off of this target thing.

<i class="timecode">[00:27:55]</i> **Ben:** Okay, so if there's, you know, newer features like optional chaining and nullish coalescing, it can tell you either, A, you're not building for that target. You might be deploying this code to some browsers that won't support it. Things could break or some clients that don't support it. Things could break or it'll specifically allow it, 'cause it knows that you're targeting a newer version.

<i class="timecode">[00:28:18]</i> **Josh:** So yes, in theory, but actually, I'm sorry to nitpick, but—

<i class="timecode">[00:28:22]</i> **Ben:** Please do!

<i class="timecode">[00:28:22]</i> **Josh:** —optional chaining is…

There is a difference between an environment API availability set and syntax availability. So environment APIs would be like String.startsWith() or String.trim(), which was added in some ECMAScript version. These are, like, runtime APIs, functions, globals you can call. Syntax, however — things like optional chaining, using arrow functions instead of function declarations — those things, TypeScript will compile for you in its transpiler and/or assume that if you're using something like Babel, it'll just work. So you can always use optional chaining in TypeScript, even if your target is, like, ES5. 

<i class="timecode">[00:29:02]</i> **Ben:** Interesting! Okay, yeah! Awesome! That is absolutely not a distinction I would've made, so that's super cool. Thank you. 

<i class="timecode">[00:29:09]</i> **Josh:** Awesome. So, yeah, that's "target": the global APIs like String.trim() that you can use. "module" is a whole other thing. By the way, I wanna shout out in the chat, "It needs a 'latest' target." There IS a latest target! "esnext" I think is available. It should give you autocomplete as you start typing into it.

<i class="timecode">[00:29:30]</i> **Ben:** Okay, yeah. Oh, yeah, okay. Does caps matter? It seems to be thinking… 

<i class="timecode">[00:29:34]</i> **Josh:** It doesn't matter. I personally like lowercase, and it autocompletes to uppercase, which has always irritated me, but…

<i class="timecode">[00:29:42]</i> **Ben:** Sure.

<i class="timecode">[00:29:43]</i> **Josh:** Doesn't matter. Thank you for going lower. I appreciate the support. 

<i class="timecode">[00:29:47]</i> **Ben:** Streamers have to have each other's backs, honestly. You know, we ride together, we die together. Anyways, Some Antics: get your HTML right. 

<i class="timecode">[00:30:00]</i> **Josh:** There it is.

Yeah, I'll also note for "module," I personally don't have a full understanding of the ECMAScript's module implications. I have yet to correctly set up a TypeScript or JavaScript package that outputs ES modules. I will learn this eventually. "No one does," indeed. But generally, TypeScript is able to do two major things in its command line "tsc" — TypeScript Compiler — that people use it for. It type checks your code and it also creates output files — JavaScript and .d.ts declaration files. So when you specify your "module," that's specifying what your output JavaScript file is supposed to look like, whether your output file will use "module.exports =" or "module.exports.whatever =," or if we use, say, AMD, which is like the old browser format, or modern modules. So if you were to create an index.ts file that, like, exports something, and then you were to compile with the current settings, "module": "commonjs," the output index.js file would have module.exports usage instead of ESM usage. 

<i class="timecode">[00:31:08]</i> **Ben:** I'm actually gonna put this to the test then. Okay, so "module." — oh, actually, yeah, we want… we want "export default foo," and this is gonna be a function that returns "Howdy," and instantly it's gonna yell at me. Why is it…? 

<i class="timecode">[00:31:26]</i> **Josh:** You actually can't "export default" yet. That specification has not been ratified in JavaScript. You can "export default" declarations like classes or functions, but you can't "export default" a variable.

<i class="timecode">[00:31:37]</i> **Ben:** Oh, right!

<i class="timecode">[00:31:37]</i> **Josh:** This is JavaScript's fault, not TypeScript, though. I will maintain that. 

<i class="timecode">[00:31:41]</i> **Ben:** Alright, yeah, "export default," and I'll just give this a… I'll make it a function keyword while we're at it, you know. We could do that. That's allowed. You know. Alright! So return "Howdy."

<i class="timecode">[00:31:56]</i> **Josh:** Yay!

<i class="timecode">[00:31:57]</i> **Ben:** And then if I go into my terminal here, and then how do I compile this? 

<i class="timecode">[00:32:03]</i> **Josh:** "tsc" — TypeScript Compiler. 

<i class="timecode">[00:32:07]</i> **Ben:** Just going to… 

There we go. So now I have this index.js. If I pop this open— yeah, so it's using, like, the "exports.default." Right, so it's using that particular syntax there. Okay.

<i class="timecode">[00:32:23]</i> **Josh:** Cool! Yeah!

<i class="timecode">[00:32:26]</i> **Ben:** Alright.

<i class="timecode">[00:32:26]</i> **Josh:** If you were to go to your TSConfig and change the "module" to, say… I forget how they've refer to it. I think it's, "NodeNext" is the newest one? Or… yeah, something like that. And then if you were to run "tsc" again. It would give you an index.js that uses "export default," I wanna say. Also, fun fact.

Oh, no! Is this…?

<i class="timecode">[00:32:52]</i> **Ben:** Interesting.

<i class="timecode">[00:32:53]</i> **Josh:** Is this not updated? What is the compiler option I'm looking for? 

<i class="timecode">[00:32:58]</i> **Ben:** Let's find out! Ctrl-Space, I think, will do— oh, there is just straight up an AMD option. Let's try that.

<i class="timecode">[00:33:04]</i> **Josh:** Yeah. Oh, yeah, AMD, for those who haven't directly used it. By the way, you can run "tsc" in watch mode so you don't have to manually rerun it. "tsc," it's "-w" or "--watch." I actually helped improve the output colors at one point in time, I wanna say, and then also made it clear whenever it reruns so your terminal doesn't get huge. 

<i class="timecode">[00:33:24]</i> **Ben:** Gotcha.

Oh yeah. So this is using "define" syntax. Okay. Yeah. It's still kind of changing things up. Actually. I wonder… I wonder if it's picking up this index.js that's already been created. It wouldn't, right?

<i class="timecode">[00:33:42]</i> **Josh:** I don't think it would. By default, TypeScript doesn't look at your JavaScript files—

<i class="timecode">[00:33:47]</i> **Ben:** Okay.

<i class="timecode">[00:33:47]</i> **Josh:** —I believe. You can actually ask it to go look at your JavaScript files, but that's a whole other thing. And the system I was looking for is "esnext."

<i class="timecode">[00:33:56]</i> **Ben:** "esnext."

<i class="timecode">[00:33:57]</i> **Josh:** My apologies. 

<i class="timecode">[00:33:58]</i> **Ben:** Let's go ahead and do that. So "esnext." Yeah, there we go. "export default." Hey, we did it.

<i class="timecode">[00:34:04]</i> **Josh:** Woo!

<i class="timecode">[00:34:04]</i> **Ben:** We did it!

<i class="timecode">[00:34:05]</i> **Josh:** Thank heavens.

<i class="timecode">[00:34:06]</i> **Ben:** We made our JavaScript look exactly like our TypeScript that looks exactly like JavaScript. 

<i class="timecode">[00:34:14]</i> **Josh:** Yeah! 

<i class="timecode">[00:34:15]</i> **Ben:** Cool. Okay! Let's see. There's other things like ES module interop… consistent casing in filenames… strict…

<i class="timecode">[00:34:28]</i> **Josh:** Yes.

<i class="timecode">[00:34:30]</i> **Ben:** "skipLibCheck…" 

<i class="timecode">[00:34:31]</i> **Josh:** Yes. So, skipLibCheck, by the way, is nice. TypeScript by default will type check your node_modules, your any .d.ts file, so definitions explaining what some JavaScript looks like in the type system. This tells it to stop doing that, that I'm sure my node_modules are fine — don't tell me if there are type errors in it. And in larger projects, where you have, like, a bajillion different versions of a bajillion different modules, like, that actually can be really annoying. And it just saves time. So that's a nice little default.

<i class="timecode">[00:35:01]</i> **Ben:** Okay.

<i class="timecode">[00:35:01]</i> **Josh:** That's probably not something that's giving people a lot of issues, but I have found that sometimes, especially if you accidentally get multiple versions of React in your node_modules, or at least the types for React, then it can be a real pain in the butt. 

<i class="timecode">[00:35:14]</i> **Ben:** Gotcha. Alright. Um…

So, okay. Where…

So, when you're working on, like, kind of bigger projects, right, are there specific properties in here that you'll find yourself actually, like, uncommenting and messing with? Um… yeah. 

<i class="timecode">[00:35:35]</i> **Josh:** Yeah. "lib" is a big one that I think a lot of people end up having issues with. It's just after "target." "lib" indicates what built-in APIs are available. By default, it's whatever's available with your target and the browser. Let's say that you have "target": "esnext," meaning I want to be able to use APIs — or syntax rather, syntax and APIs. However…

By the way, I'm really enjoying this chat. But let's redirect. Looking forward to self-driving cars. 

But let's say that you… let's say that you're running… you don't wanna assume that you're running an environment that has new global APIs. You can set "lib" to be something different than your target. Let's say ES2018, if you have, like, older browser support. Most people will not care about this. Most people… they just polyfill a lot of stuff or they work with, like, Webpack and use auto-polyfills or whatever. But it's one of the, surprisingly, the most common cases for, I have a new TypeScript project and my TSConfig needs to be configured and I don't understand how or why.

I will also note for this, that you can ask it to include random other things like the DOM types, which it does not include by default, if you set your own "lib." So, like, right now, the way you have it configured without the DOM types, it would not have window.location—

<i class="timecode">[00:37:05]</i> **Ben:** Oh!

<i class="timecode">[00:37:05]</i> **Josh:** —or window at all inside.

<i class="timecode">[00:37:05]</i> **Ben:** Okay. So, this is where, like, you know, if I'm looking at this going, like, I know I'm specifically building for, like, this is clientside code, right? This is gonna get shipped as part of a webpage. This is gonna do DOM manipulation-type stuff, right? I could say, "Hey, yeah, I know I'm building for the browser environment. Give me those sweet, sweet DOM types.

<i class="timecode">[00:37:26]</i> **Josh:** Yeah, definitely.

<i class="timecode">[00:37:28]</i> **Ben:** Okay.

<i class="timecode">[00:37:29]</i> **Josh:** Cool! So that's the big… the last big one. I would love to know if anyone in the chat has had issues with things other than "target," "lib," and "module," 'cause those are the big three. Everything else is kind of… I've seen a lot less pain over. Like, most of these things, you can ignore and they're just for, like, little edge cases that people need types to be able to support.

<i class="timecode">[00:37:52]</i> **Ben:** Sure.

<i class="timecode">[00:37:53]</i> **Josh:** Which actually is, I think, a really interesting point about web development, that, yes, there are a bajillion edge cases and we haven't figured out ESM and everything, but most people work on pretty standardized stuff. Like, a new Next project is configured for you and there's very little you have to do.

It's kind of nice. 

<i class="timecode">[00:38:09]</i> **Ben:** Yeah, absolutely. That interplay, like… you know, there's always that interesting challenge of, like, convention versus configuration. Like, when should your tooling decide "this is the way" versus when should your tooling, like, cede that control over to you? And yeah, your point rings very true about, like, fundamentally, a lot of projects are going to be very similar. They're gonna have very similar needs, right? And you KNOW when your project kind of needs to color outside the lines, you know? But for the most part, most projects don't need an extremely custom setup. 

<i class="timecode">[00:38:51]</i> **Josh:** Yeah. Yeah! Do you want me to go through the chat things in order? 'Cause…

<i class="timecode">[00:38:58]</i> **Ben:** Sure.

<i class="timecode">[00:39:01]</i> **Josh:** So, there are two kind of categories of how people tend to use "tsc." One is where they do emit something — like they emit a JavaScript file, a .d.ts file, et cetera, sourcemaps — and the other category is where they don't, whether they use something else like Webpack or Vite or whatever to bundle their stuff, or just run it directly through ts-node or some such.

So if you do need to output files, by default, the output directory is the same as your source code. You saw index.js was just next to index.ts. And if you had moved it to, like, a src file or something, they'd be in the same folder.

<i class="timecode">[00:39:33]</i> **Ben:** Mm.

<i class="timecode">[00:39:33]</i> **Josh:** But you can configure that. You can set a different "outDir" compiler option to output, to say, like, "dist" or "lib" or something. That's pretty common. And then you can also specify whether you create sourcemaps and declaration files. "sourceMap" and "declaration" are two other compiler options. I wouldn't be surprised if they're next to each other in this file. 

<i class="timecode">[00:39:57]</i> **Ben:** Yeah — oh, here we go. Yeah, "sourceMap." 

<i class="timecode">[00:39:58]</i> **Josh:** Oh, there we go.

<i class="timecode">[00:39:59]</i> **Ben:** Okay.

<i class="timecode">[00:40:00]</i> **Josh:** Yep, under the "emit" section. 

<i class="timecode">[00:40:03]</i> **Ben:** So then… "outFile."

<i class="timecode">[00:40:06]</i> **Josh:** "outDir"… actually, "outFile" will make it all compile into one big file, which is very rarely what people want. It's mostly a legacy option at this point.

<i class="timecode">[00:40:14]</i> **Ben:** Okay. Yeah, and if I inspect…

Oh, you know what? I'll put this… I'll give this a name. I'll call that, like, "dist" or something like that. I don't know if there's a convention for "outDir" name, but okay. 

<i class="timecode">[00:40:28]</i> **Josh:** It's typically just whatever JavaScript does, yeah. So now we see there's also that sourceMappingURL. Very exciting.

<i class="timecode">[00:40:36]</i> **Ben:** Very cool! Okay! 

<i class="timecode">[00:40:41]</i> **Josh:** Cool. Yep. And then there are a whole bunch of other things here, like you can remove comments. I don't know why you ever would. You can, like, emit declaration files only, to not output JS files. And then you can enable "noEmit," which is what I typically use in my web projects, because I'm running with, like, Docusaurus or Next or something, where "noEmit" says "don't emit anything at all."

<i class="timecode">[00:41:05]</i> **Ben:** Yeah, like "Purely just use this as a dev tooling. Don't actually, like, change things on me." Yeah, okay.

<i class="timecode">[00:41:11]</i> **Josh:** Yeah. Cool.

<i class="timecode">[00:41:12]</i> **Ben:** Okay, gotcha. Yeah, there was a, a comment in the chat from Anthony earlier that was like, this TSConfig seems like it could be, you know, something where, like, you could have one person write just a really good, like, epic breakdown of every property and when you might use it.

But it's really hard to just, like, go top down and be like, "Here's when I use this. Here's when I use this." Especially in, like, a stream format, but okay. 

<i class="timecode">[00:41:39]</i> **Josh:** Yeah.

<i class="timecode">[00:41:40]</i> **Ben:** Cool.

<i class="timecode">[00:41:40]</i> **Josh:** I will say, though, that the TypeScript docs are much better than they used to be, and they are open source. I think it's still a Gatsby project. But if you have any issues with the handbook, typescriptlang.org/tsconfig has an explanation for every single one of these, and it also groups them on the top by where they go, like modules or whatnot. So if you are finding dissatisfaction, you could submit a pull request, or if you are confused and need help, feel free to ping me on Twitter or some such, and I'm happy to send a pull request to improve the docs myself. So yeah, this is meant to be explanations, not just an API reference. I think the idea of an API reference versus an explanation is super interesting because, like, for a configuration file, they kind of blend and blur together. But yeah, that — I'm responding to ajcwebdev in chat. Yeah. I don't know that there's one unified dev perspective, so maybe, like, a walkthrough for, like, someone working with, say, Next or Remix versus ts-node versus et cetera. Yeah, I think that would be useful, yeah. 

<i class="timecode">[00:42:51]</i> **Ben:** Okay! Yeah. Yeah, yeah, yeah. Yeah, and maybe, maybe even a guide like that that's actually, like, straight up a little more opinionated, right? Like, "here's the options that I specifically use and why and when." Yeah, okay. Cool.

<i class="timecode">[00:43:08]</i> **Josh:** Yeah.

<i class="timecode">[00:43:08]</i> **Ben:** Yeah, alright. If you don't mind, I'd love to kind of bring this back, like, now that we've kind of talked about, like, how you might configure your compiler with the config. Like, I'd kind of love to, like, bring this back into, like, if there's more aspects of, like, maybe the syntax you'd like to talk about.

<i class="timecode">[00:43:23]</i> **Josh:** Sure, yeah!

<i class="timecode">[00:43:24]</i> **Ben:** Yeah.

<i class="timecode">[00:43:24]</i> **Josh:** Let me think. We have so many cool things we could look at. Maybe… I'm gonna avoid the, like, really fancy stuff, the conditional types, 'cause I don't think that's a good way to introduce those. 

I wish there was a good example for strict null checking.

Maybe…

Sorry, I'm taking a little while here.

<i class="timecode">[00:43:56]</i> **Ben:** You're good!

<i class="timecode">[00:43:57]</i> **Josh:** Uh…

Could you start a new — just, like, select all and delete in the editor? Let's start from scratch. 

<i class="timecode">[00:44:08]</i> **Ben:** Okay!

<i class="timecode">[00:44:09]</i> **Josh:** And could you make a variable whose value is… let's say either some string or undefined based off of Math.random()? Say "Math.random() ?," like a ternary. 

<i class="timecode">[00:44:24]</i> **Ben:** If Math.random() is less than 0.5, in which case, yeah, we'll say "Howdy" or we'll say undefined. Like that? 

<i class="timecode">[00:44:38]</i> **Josh:** Exactly, thanks. Yeah, so you use the exact opposite inline or, like, where to put the things style from me, which I find really funny. They're equally valid, I think.

<i class="brackets">[Ben chuckles]</i>

<i class="timecode">[00:44:46]</i> **Ben:** Oh, like where to put, like, the colons and whatnot? 

<i class="timecode">[00:44:49]</i> **Josh:** Yeah. That's okay. I'm not– I'm not giving you grief. I just am amused. 

<i class="timecode">[00:44:53]</i> **Ben:** Yeah, it's always funny to see how people like to write code. Yeah. Yep.

<i class="timecode">[00:44:57]</i> **Josh:** And under your TSConfig, could you just make sure that "strictNullChecks" has a check under it? Under Type Checking. 

<i class="timecode">[00:45:04]</i> **Ben:** "strictNullChecks," okay. Yeah, so "strictNullChecks" is checked. 

<i class="timecode">[00:45:09]</i> **Josh:** Awesome. Cool. So, have you heard — or I'm curious if anyone, the chat has heard — of the billion-dollar mistake in the—

<i class="timecode">[00:45:16]</i> **Ben:** I haven't!

<i class="timecode">[00:45:17]</i> **Josh:** —computer science industry?

<i class="timecode">[00:45:18]</i> **Ben:** I'd love to hear more.

<i class="timecode">[00:45:20]</i> **Josh:** Oh, boy. So the billion-dollar mistake refers to a phrase from someone, I believe his name is Tony Hoare, who invented the null pointer concept in, I wanna say C or maybe even earlier. Yeah, people are in the chat. Yeah, it's null! But the interesting thing is the concept of null, something that's allowed to be blank — in JavaScript, it's either null or undefined because we hate ourselves as a community — that itself is considered necessary in a lot of programming languages. What is the 9,001th element of an array that's size 4? Like, is it null or do you throw an error?

Mm-hmm.

The problem with null is that in a lot of typed languages, you are allowed to assign a value that has a null — that, sorry, that is null — into something that's expecting a value of another type. Like, let's say that you have a function that takes in a string. In a lot of older languages like C++, Java, C# with the default settings, you can provide null to that function and the compiler would totally let you do it. I appreciate where you're going with this, 'cause that's exactly what I was gonna suggest.

<i class="timecode">[00:46:31]</i> **Ben:** Okay!

<i class="timecode">[00:46:31]</i> **Josh:** So, yeah, with strict null checks enabled, which is a feature in TypeScript and a lot of other newer languages, null and undefined are no longer considered assignable to types like string or array of numbers or Ball or other interfaces earlier. So, like, if you were to try to call doThingsWithStrings() with undefined, let's say, or null — either of those — it would not be allowed. It would tell you, hey, it's supposed to take in a string.

<i class="timecode">[00:47:01]</i> **Ben:** Uh…

<i class="timecode">[00:47:03]</i> **Josh:** Oh, no. 

<i class="timecode">[00:47:04]</i> **Ben:** Yeah, let me actually try return…

Oh, there we go, okay. 

<i class="timecode">[00:47:08]</i> **Josh:** Oh, thank heavens.

<i class="timecode">[00:47:09]</i> **Ben:** Yeah.

<i class="timecode">[00:47:09]</i> **Josh:** I was about to be so annoyed.

<i class="timecode">[00:47:11]</i> **Ben:** Okay. It just needed some time to catch up. 

<i class="timecode">[00:47:14]</i> **Josh:** Yeah. We're going so fast. It's so exciting.

Yeah, so this is something that older languages don't have, and it's super useful in TypeScript. I think Swift and Rust and co. also have it. C# lets you opt in now. If you're coming from these modern languages or haven't worked in type systems before, this is like, "Well, of course! Like, why would you allow null or undefined to be there?" But that's just how a lot of older languages like C worked. So this is a nice feature of TypeScript that I'm proud to say is something you should always enable in your projects unless you physically cannot for too many issues.

Cool. 

<i class="timecode">[00:47:50]</i> **Ben:** Gotcha. And so if I put in `surprise`, this is gonna throw an issue because there's a possibility that `surprise` could be undefined.

<i class="timecode">[00:47:58]</i> **Josh:** Yes.

<i class="timecode">[00:48:01]</i> **Ben:** Nice.

<i class="timecode">[00:48:01]</i> **Josh:** If — and this brings up a really cool concept in TypeScript. If you were to wrap that doThingWithStrings() call inside an if statement that checks if `surprise` is truthy, or if it's, say, not null or undefined, it would be allowed…

<i class="timecode">[00:48:16]</i> **Ben:** If surprise. Oh, thank goodness. It has the… the playground has the VS Code commands. That's great. 

<i class="timecode">[00:48:24]</i> **Josh:** Do you know why it has the VS Code commands, by the way? Have you ever played with Monaco before?

<i class="timecode">[00:48:30]</i> **Ben:** Monaco is just, like, super powered by VS Code, right? And it's, like, the same engine more or less, right?

<i class="timecode">[00:48:37]</i> **Josh:** Yeah. Yeah, the TypeScript Playground uses Monaco. So I always thought was really cute, that VS Code can be, like, sort of embedded in places. At least, its text editor can.

<i class="timecode">[00:48:44]</i> **Ben:** Mm-hmm. 

Yeah, but here it's like… okay, so here it's not throwing an issue because we know that, like, you know, `surprise` has to exist, it has to be truthy. Therefore, it can't be — if we ever get in here, you know, if we ever get inside this function, we know `surprise` has to be truthy, which means it can't be undefined. Therefore it must be "Howdy," right? And I bet… I bet TypeScript is smart enough that if I hover over this… yeah!

<i class="timecode">[00:49:12]</i> **Josh:** There it is!

<i class="timecode">[00:49:13]</i> **Ben:** It specifically knows that it's "Howdy."

<i class="timecode">[00:49:16]</i> **Josh:** Yeah. Exactly. You hit the nail in the head. You started the stream saying you're not, like, super… I forget the phrasing. 

<i class="timecode">[00:49:22]</i> **Ben:** I do have a few things up my sleeves. I have seen a few things—

<i class="timecode">[00:49:26]</i> **Josh:** Yeah!

<i class="timecode">[00:49:26]</i> **Ben:** —once or twice. 

<i class="timecode">[00:49:27]</i> **Josh:** You know the good stuff. The important things.

Yeah, so that's the concept of type narrowing! I'm sorry, I have a speech thing. It's hard for me to say. But it's the opposite of widening. It's… TypeScript can see from your code that certain areas can only be reached if some better, more specific, more narrow type is what your value is. Cool. 

Yeah, this isn't Ben's first TS rodeo. You've ridden the TypeScript bull before!

<i class="timecode">[00:49:58]</i> **Ben:** Yeah, so, to answer Nicky's question, like, it is specifically… the type recognizes that it's specifically "Howdy." It's not some generic string. 

<i class="timecode">[00:50:08]</i> **Josh:** Yes. Because you used a const, so TypeScript knows it's only ever gonna be either "Howdy" or undefined. But yeah, if you were to change it to let, TypeScript would say, "Hey, I see it's allowed to be changed, so I'm just gonna assume it's the type string or undefined."

<i class="timecode">[00:50:20]</i> **Ben:** It's gonna catch up. But yes, I agree with you. I think the editor's just catching up. 

<i class="timecode">[00:50:29]</i> **Josh:** Running OBS and VS Code is a little hard for your computer. 

<i class="timecode">[00:50:32]</i> **Ben:** Oh, yeah, actually, if I hover over this, it does say it's a string, right? So we got in here, we figure hey, you know, it might have changed since then, but clearly the intent is that this could be some string. Okay.

Interesting, interesting, interesting.

Is there… do you have another thing you'd like to show off that you think, like, newcomers to TypeScript should know? 

<i class="timecode">[00:51:00]</i> **Josh:** Ooh. Um… hmm.

Let me think about that.

Oh, I just noticed, there is an example for this. It's the Type Widening and Narrowing example. 

Um, yeah. There is an example on discriminated types— or, discriminate types, which is really cool.

<i class="timecode">[00:51:24]</i> **Ben:** Okay!

<i class="timecode">[00:51:25]</i> **Josh:** I think that's, like, the last big TS feature. Yeah, under Meta-Types.

So, let's look at this TimingEvent type. And by the way, there is… we're probably gonna have to cover this, 'cause eventually someone will always ask or wants to know what is the difference between type and interface. Type lets you declare unions, so things that can be one or another — interface doesn't. So that's why we're using type here. When we say, on line 10, "TimingEvent," we are declaring that anywhere in code, whenever we say "TimingEvent," we mean something that can be either the first object shape with "name" or "userStarted," or the second object shape with "name" and "duration." So that is a way to write a union type — an either/or type — with object shapes. It can be either of those two things. Does that kind of make sense, sound reasonable so far? 

<i class="timecode">[00:52:14]</i> **Ben:** Yeah! And so this is also implying, you know, that like, if there was, you know, a name "start," you probably wouldn't expect there to be a duration. It's not, like, forbidding the duration, but, like, it's saying that if you just had name "start" and a duration, right, like, this is incomplete because it doesn't match this shape and it doesn't totally match this shape either. 

<i class="timecode">[00:52:38]</i> **Josh:** Exactly, yeah. If you were to go inside the handleEvent() function just a few lines down and type in, before the switch statement, "event.," and then let the editor catch up, it would tell you that there's only one thing that's known to be a property. It's name, which is either "start" or "closed." So we need to, if we wanna access a property, we need to narrow it. We need to switch on event.name, let's say. So event.name is "start," then we know userStarted is an available property.

<i class="timecode">[00:53:09]</i> **Ben:** Right, okay. So we could do, like, you know, in here I could say name — like, and so up here, we didn't know what the name was, and so the only thing that we could guarantee is that it has a name. But then down here, because we know, like, to get inside this case in the first place, like, the name has to be "start." Then we know that we… like, there's going to be a userStarted as well.

<i class="timecode">[00:53:34]</i> **Josh:** Exactly, yeah.

<i class="timecode">[00:53:34]</i> **Ben:** That is so cool.

<i class="timecode">[00:53:37]</i> **Josh:** Yeah! This is one of the not as greatly named features, it's discriminate types or discriminated unions. It's not an HR nightmare. It is a really useful feature. I have personally used this all the time a lot in my projects, especially when dealing with, like, network requests or statuses of generic operations, whereas something might be like status zero results and it's some value or status one with an error. That type of thing.

<i class="timecode">[00:54:02]</i> **Ben:** Interest— yeah, yeah. Okay, this makes sense in the context of, like, server responses. Yeah, 'cause, like, your status code, the shape of a 404 response object is gonna look different from the shape of a 200 successful, "here's the data you need for your app."

<i class="timecode">[00:54:18]</i> **Josh:** Yeah, for sure.

<i class="timecode">[00:54:20]</i> **Ben:** Okay.

<i class="timecode">[00:54:20]</i> **Josh:** In fact, we can actually see that lower down in this exact example where they—

<i class="timecode">[00:54:24]</i> **Ben:** Oh, hello.

<i class="timecode">[00:54:24]</i> **Josh:** —they have a slightly more complex one, which has version 0 of some theoretical API—

<i class="timecode">[00:54:31]</i> **Ben:** Mm!

<i class="timecode">[00:54:31]</i> **Josh:** —or there's version 1, which has message and status, or there's just an error. 

<i class="timecode">[00:54:36]</i> **Ben:** Type checking for versioned code! Oh, that's good. That's good. Okay. 

<i class="timecode">[00:54:40]</i> **Josh:** Yeah. And this calls back to some of the earlier questions asked. When would you use TypeScript? Well, let's say that you have an API that has, like, 20 different versions and you wanna have safety with which one you're using. Well, this is a really good pattern for helping you understand which version and make sure that your code is referencing the right properties for the right versions. 

<i class="timecode">[00:55:01]</i> **Ben:** That's awesome. That's so cool.

We are — wow. It's amazing how quickly time flies? Isn't it? It really is. Like, streams always seem to last much shorter than they should. But chat, I would love to make sure that if you have any other questions, that we have some time to get to them, so if there's anything else you wanna know, any maybe, like, more specific TypeScript questions, or even if you just want Josh's opinion, like, feel free to, like, you know, let us know right now.

"Keep going." I mean, you have time. Uh, I could keep going, going. Uh, I could keep going. Let's keep going. But yeah, chat, if you have questions, if you wanna see anything in particular or just get a vibe check from Josh, let us know.

"When types in ECMA?" Um, yeah. Yeah. Okay. So this is, this is one of the things that's interesting seeing, like, TypeScript become more and more of the ecosystem or, like, get more heavily involved and become more firmly ingrained is, like, there was recently a proposal to allow native JavaScript to have room for type annotations. Those type annotations wouldn't be used in JavaScript. They'd be effectively comments. But basically, it would allow the syntax to become standardized. 

<i class="timecode">[00:56:19]</i> **Josh:** Yeah. By the way, I love the way that this was asked. "When types in ECMA?" It makes me feel like this is gonna be a, like, chest-beating question of the JavaScript community. Yeah, I am very excited about that. It's gonna take years, though. Like, new features, especially ones that have so many complications and edge cases like, say, types, or type annotations specifically, they take a while, because JavaScript is used in a billion bajillion places — a Brazilian places — and all that. So, the…

Don't get your hopes up that it'll happen anytime soon, but yeah. For those who aren't super big on Python or Ruby, it really, I think, closely mirrors some of the discussions that have been happening in those communities, because basically every untyped language — Python, Ruby JavaScript — now has some popular superset with types, and now that languages, both Python and Ruby, have started adding in the concept of type annotations. So I'm really excited for this in part because it means that I won't have to use compilers or transpilers to turn my TS files into JS. I can just run, in this imaginary future, I can run Node on my .js files and I can also just run TypeScript on my .js files and then it'll just work.

<i class="timecode">[00:57:33]</i> **Ben:** Mm.

<i class="timecode">[00:57:33]</i> **Josh:** That would be, wow, so much less complication. 

<i class="timecode">[00:57:37]</i> **Ben:** Yes!

We have a fantastic question in the chat that comes from Cynthia, who wants to know what a .d.ts file is. 

<i class="timecode">[00:57:44]</i> **Josh:** Great question! And actually, I think there were two main TypeScript things we didn't get into that we could, if we have time.

<i class="timecode">[00:57:50]</i> **Ben:** I'm good!

<i class="timecode">[00:57:50]</i> **Josh:** If we both keep going.

<i class="timecode">[00:57:51]</i> **Ben:** Let's go for it, yeah!

<i class="timecode">[00:57:53]</i> **Josh:** Cool! Could you go to the website aka.ms/types? And then look up slash…

By the way, Orta designed this site, but I did a bunch of early implementation. I'm very proud of it. Um, yeah! So this is a search engine for type declarations. A lot of packages are written in JavaScript, and basically every npm package ships JavaScript. But TypeScript needs to know what those packages look like. Let's say, if you import groupBy from the Lodash package, what is this groupBy thing? Does it even exist? If it's a function, what parameters, what return type, et cetera? So TypeScript allows you to write .d.ts files or declaration files, which describe just the type system part of a file. And this website is a really nice search engine for looking up whether a package ships with its own .d.ts files, or if there's a package that you have to install separately for them.

If you don't mind, could you look up, let's say Lodash on here? 

<i class="timecode">[00:58:56]</i> **Ben:** Let's do it, yeah, okay. 

<i class="timecode">[00:58:58]</i> **Josh:** Cool! So Lodash does not have its own type annotations, its own… sorry, .d.ts files, its own type definitions. So the community has created type definitions for Lodash, which you can install in this @types/lodash package, which TypeScript will automatically see and pick up and use to inform its understanding of what the Lodash module looks like.

<i class="timecode">[00:59:19]</i> **Ben:** Okay. But as opposed to… do you know a good library that would have its own type, like, .d.ts files in there? 

<i class="timecode">[00:59:27]</i> **Josh:** Yeah! I can see, on the screen, Vue! There was, like, a random search by default on here. So Vue ships with its own .d.ts files. So actually, in the playground, when you type in code and it has the source on the left, output on the right, one of the outputs you can see is .d.ts. It's the equivalent declaration file for your code.

<i class="timecode">[00:59:47]</i> **Ben:** Okay.

<i class="timecode">[00:59:48]</i> **Josh:** So, there you go! That's… it's like the TypeScript minus JavaScript. It's just the type system stuff, none of the runtime stuff. 

<i class="timecode">[00:59:56]</i> **Ben:** Gotcha. And we specifically kind of export this into its own file to be used almost as like, I guess, metadata around our libraries and our code to be used and consumed by engines such as TypeScript and VS Code that, like, can understand it, but without impacting basically the rest of the project or, like, bloating the source files that get pulled in. 

<i class="timecode">[01:00:18]</i> **Josh:** Exactly, yeah. It's really useful. You can actually write .d.ts files in your projects. If you have, let's say, like, a global variable in some project that gets injected in a script by the server, you could, like, declare a global variable of some type. That's allowed.

<i class="timecode">[01:00:36]</i> **Ben:** Okay.

<i class="timecode">[01:00:38]</i> **Josh:** Cool!

<i class="timecode">[01:00:38]</i> **Ben:** Neat.

<i class="timecode">[01:00:38]</i> **Josh:** And then one last URL for these files. I forget if it's one of the most or the most active project on GitHub, is github.com/definitelytyped/definitelytyped.

<i class="timecode">[01:00:51]</i> **Ben:** Okay…?

<i class="timecode">[01:00:53]</i> **Josh:** It is Definitely Typed. And this is this huge warehouse of all the type definitions that have been authored by the community. It's under the types folder. And it's honestly one of the most — I think the most impressive GitHub repo I've ever seen. They have bots automating all sorts of things. If you have created your own .d.ts file, it'll automate people pinging — or, it will automate the pinging of you for review when someone sends a pull request. They have all these templates that you can use for different types of projects. Really cool stuff. 

<i class="timecode">[01:01:29]</i> **Ben:** Okay!

<i class="timecode">[01:01:29]</i> **Josh:** But yeah, 50,000 closed PRs. 

<i class="timecode">[01:01:32]</i> **Ben:** That's… that's incredible. Wow, what a project and honestly, just, yeah, what a helpful utility. 'Cause yeah, you mentioned that this is, like, providing… kind of reverse engineering types for libraries that don't have them and for which probably, in many cases, the maintainers of those libraries either are no longer maintaining or just simply don't have the time to be, like, implementing their own types, or haven't prioritized that.

<i class="timecode">[01:02:02]</i> **Josh:** Yeah, for sure.

<i class="timecode">[01:02:04]</i> **Ben:** Okay.

<i class="timecode">[01:02:06]</i> **Josh:** I'm responding to the chat. mhuggins7278, "hard time getting that declare global working trying to extend the Express Request type from Definitely Typed." Yeah, it can be tricky sometimes if, like, one package exports types but in your code, you need to add something to the types. Like, maybe that's a pattern espoused by the library. I don't remember off the top of my head the right patterns, plural, that you might need to use for that, but if you wanna ping us on Twitter, I'd be happy to search for them async and then get back to you. Because that is definitely doable. 

<i class="timecode">[01:02:34]</i> **Ben:** Good.

Yeah, Travis — BuildingBedrockLayout — says that he thinks that Definitely Typed was why TS won. Yeah, 'cause:..: If you can just crowdsource types, and including types for, like, libraries that don't have them, like, you ensure that more folks can opt into benefits of the ecosystem, which is great. 

<i class="timecode">[01:02:54]</i> **Josh:** Yeah! Plus one. 

<i class="timecode">[01:02:57]</i> **Ben:** Michael Chan — lunchdev — says, "npm package pages also have a badge for projects with types of DefinitelyTyped." Okay. Yeah, so there's, like, more… more and more ways to, like, just expose who has this stuff.

Ooh! Okay, can you tackle Alex's question here? 

<i class="timecode">[01:03:15]</i> **Josh:** Yeah! Spoiler: that's how I do it!

Alex says, "I've been using TypeScript just for static checking and then Babel for transpiling. Am I missing something by using it just like that?" No, you're not missing anything. That's a totally wonderful and fine way to do it. I mentioned much earlier in the stream that TypeScript's command line, tsc, the TypeScript compiler, offers a couple things. It offers type checking your code and it offers compiling your code into JS, .d.ts, cetera. That's one reasonable way of doing it, but that's — that's also one of the reasons why type was so popular early on, that it's a really nice, convenient utility. People actually use TypeScript like Babel, like, "oh, I just wanna compile that code down so that Internet Explorer 10 can run it years ago."

But yeah! There is a very good TypeScript preset and set of plugin things for Babel. I forget the exact terminology. So yeah, it's totally reasonable. If you use, I think it's @babel/preset-typescript, that would allow you to use TypeScript integrated with your…

Here, I'll post the link in the chat.

<i class="timecode">[01:04:19]</i> **Ben:** Oh, yeah, please do.

<i class="timecode">[01:04:21]</i> **Josh:** It allows you to use it integrated with whatever other stuff you're using in Babel, which you might then be using within, like, Webpack or whatever. I personally typically use @babel/preset-typescript to run Jest, which is currently still my test runner of choice, pending my investigating Vitest and all those other things now that they're more stable. So yeah, I think that's a totally reasonable way of doing it, and especially if you're integrating with a tool that has good Babel support such as Jest, this is just a really good way to do it.

<i class="timecode">[01:04:50]</i> **Ben:** Awesome!

<i class="timecode">[01:04:50]</i> **Josh:** But yeah, Babel has really good support for, like, TypeScript enums and everything. Years ago, there was… it was much worse, but now it's nice.

<i class="timecode">[01:04:59]</i> **Ben:** Alright!

And then… okay. Travis wants to know, "What is the long-term plan for private fields in TypeScript versus private fields in JavaScript?"

<i class="timecode">[01:05:10]</i> **Josh:** Well, I'm not on the TypeScript team, so I can't speak for them.

<i class="timecode">[01:05:13]</i> **Ben:** Totally fair.

<i class="timecode">[01:05:13]</i> **Josh:** However, I will say, Microsoft hates deprecating things and the TypeScript team even more so hates deprecating things. Do we have anyone who works with Microsoft? Perhaps on Docs? Ben, you wanna…(!) 

<i class="timecode">[01:05:25]</i> **Ben:** Yeah. Yeah, no, Docs reign forever.

<i class="timecode">[01:05:29]</i> **Josh:** Yeah.

<i class="timecode">[01:05:29]</i> **Ben:** Yeah, no, we… you can't delete anything, because someone could need it. Someone could be working on old tooling and stuff like that. Yeah. In fact, this is, like, yeah, this has historically been a thing. Like, the reason, in many cases, Windows is the way it is, is because, like, historically, Microsoft has ALWAYS tried to support 100% backwards compatibility, even in cases where clearly the original behavior was quote–unquote "wrong." You know, there's a chance that some program somewhere relied on it. In fact, there was one particular bug in, like, one of the earlier versions of Windows that Sim City depended on. And then a new version of Windows came out and was, like, all set to fix the bug. And then Sim City was like, "Hey, Windows, what do WE do?" And Windows was like, "You know? You're right! We did break backwards compatibility!" And so they had to, like, figure out a way to basically make a specific implementation, like, a specific fix for Sim City. If that tells you anything about Microsoft and backwards compatibility and deprecation. 

<i class="timecode">[01:06:47]</i> **Josh:** Yeah. That cracks me up. "If Sim City."

<i class="timecode">[01:06:50]</i> **Ben:** Yeah, exactly!

<i class="timecode">[01:06:52]</i> **Josh:** So yeah, to more directly answer what are private fields in TypeScript or private fields in JavaScript: TypeScript does support class-based programming — classes, OOP, all that. TypeScript doesn't have an opinion on what architecture patterns you use so long as they're type-safe. So in TypeScript, before JavaScript had its own private fields, the hashtag syntax, this-dot-pound-whatever, or this-dot-hashtag-whatever. TypeScript allowed you to declare properties and classes, the types of them. Like, if you had a class Foo you could say, like, "myAge: number" on Foo, and that was a TypeScript-only syntax description. TypeScript also allowed you to add the keyword "public," "private," or "protected" in front of those properties. And this is just in the type system. Purely type system, not runtime. And the private would say that only this class is allowed to use it. Protected would say this class and classes that extend from it.

Ah, Joel! I like his blog. 

<i class="timecode">[01:07:48]</i> **Ben:** Oh— yeah, no, sorry, I'm just googling things right now. Don't worry. Keep going, keep going. 

<i class="timecode">[01:07:54]</i> **Josh:** Sure.

<i class="timecode">[01:07:54]</i> **Ben:** They can't even see my screen. 

<i class="timecode">[01:07:55]</i> **Josh:** Oh, got it.

Yeah, so TypeScript had this type system way to describe privacy for class properties, class methods, static things as well. And then JavaScript added runtime type safety — or, sorry, runtime privacy, like with the hashtag, private fields. So, they're… both are supported in TypeScript now, and both will be supported in TypeScript forever and ever. There is legitimate use that you might wanna describe a class where the members are actually available at runtime for, like, instance dot lookups, but in the type system you want to tell people, hey, you're not supposed to use this. So, long-term plan is no plan! It's fine as is, it's gonna remain as is. 

<i class="timecode">[01:08:39]</i> **Ben:** Gotcha.

<i class="timecode">[01:08:40]</i> **Josh:** Cool. 

<i class="timecode">[01:08:43]</i> **Ben:** Alright! Yeah, if there's no other questions — I mean, if you've got things, feel free to drop them in pretty quickly — but… yeah, if there are no other questions, maybe we can go ahead and start spinning things down. Josh, it's been lovely to have you on, and I'd love it if you could spend a bit of time talking about TypeScript ESLint, which is — yeah! — one of your big projects that you've got going on. 

<i class="timecode">[01:09:09]</i> **Josh:** Absolutely! Thank you for giving me the time at the end. It's been a lot of fun.

The compiler, TypeScript compiler, will check for things that are directly not type-safe. If you declare something's supposed to be a string and then give it a number, TypeScript will yell at you. But that is different from what ESLint covers. ESLint checks styling and logical errors. It can check if, say, your company has a naming convention and you violate the naming convention, or if you do something really confusing in code that's probably broken, or, like, make a variable and then not use it. TypeScript ESLint is necessary because ESLint only works on vanilla, plain JavaScript. It doesn't understand TypeScript syntax. And even if, years from now, we get that ECMAScript proposal through TC39 to get types in, ESLint itself won't be able to assume any particular type checker.

So TypeScript ESLint is the tooling that you use alongside or on top of ESLint to allow it to support TypeScript. I did not create it, but I am now one of the maintainers of it. It's really great. I highly recommend any enterprise or any software project — be it enterprise, open source, whatever, but especially if you're on a company that has customers — should use TypeScript and TypeScript ESLint. We have some rules that can provide some kind of shockingly useful bugfixes, or bug-finding rather. My favorite ones are around floating Promises. We will detect if you create a Promise and then don't await it so the Promise, if it fails, won't get logged anywhere or handled. It's really cool stuff. And just in general, ESLint is really important and good for the JavaScript ecosystem. So, highly recommend if you gotta type your project.

We recently overhauled the docs. Actually, we use Docusaurus, which is a wonderful static site/docs site generator that just released its 2.0. We have a pull request to upgrade. We're very excited.

<i class="timecode">[01:11:00]</i> **Ben:** Yes!

<i class="timecode">[01:11:01]</i> **Josh:** So, yeah! I wanna give one shoutout. If you don't mind clicking Get Started?

<i class="timecode">[01:11:08]</i> **Ben:** Let's do it!

<i class="timecode">[01:11:08]</i> **Josh:** And then go, on the left, to the Configurations section. We are overhauling these soon so that you have a little less, fewer lines of code, but yeah! We have some really good recommended presets that enable a lot of really good rules, so you don't have to look through our list of over a hundred ESLint rules and memorize which ones you like. I personally recommend start with the strict set and then disable anything that makes you unhappy. 

<i class="timecode">[01:11:32]</i> **Ben:** Okay! Cool, cool, cool!

<i class="timecode">[01:11:34]</i> **Josh:** Yeah!

<i class="timecode">[01:11:35]</i> **Ben:** Alright, and then one other thing, just to make sure that we're promoting you to the fullest extent. You wrote a book! Where can I find that book?

<i class="timecode">[01:11:45]</i> **Josh:** Yes, I did write a book! Thank you for promoting me! LearningTypeScript.com! There are two ways…

So, to start, I am a full-time open source developer. I spend all my professional hours that aren't spent on consulting so I can actually support myself and eat working on open source projects. This book is part of my bid to spend more time. So, it's, I think, the best way to learn TypeScript if you just know JavaScript. That's, of course, with the caveat that different learning strategies and modalities work for everyone else. This is mine, I personally like books. I think the book is really good. It talks about all the things we talked about on the stream today, including best practices like Golden Rule of Generics, which is, like, a really big thing. All sorts of stuff. It's great.

Thank you for getting the book, tomjaprice. I really appreciate it. If you do get the book, please rate it five stars. You would be shocked how useful that is. Like, that's actually really beneficial for books to be rated five stars — in part because, like, people actually care and in part because it helps my SEO.

You can also help me on github.com/sponsors/JoshuaKGoldberg. That is my GitHub Sponsors thing. Right now, I earn in total from sponsors about half of the federal minimum wage in the United States per month, so I'm not yet able to support myself as an open source developer. But with your help, I will be able to make more progress on projects like TypeScript ESLint. So, please do help.

<i class="timecode">[01:13:11]</i> **Ben:** Alright!

<i class="timecode">[01:13:12]</i> **Josh:** I really appreciate it. 

<i class="timecode">[01:13:13]</i> **Ben:** Alright. And I'm just putting in a few other links for places for people to find you. You tweet at @JoshuaKGoldberg. You stream on Twitch at JoshuaKGoldberg. I've been on there. It's a fun time!

<i class="timecode">[01:13:29]</i> **Josh:** Yeah!

<i class="timecode">[01:13:29]</i> **Ben:** You're a fun host! So yeah, y'all go follow Josh, all the places. And Josh, thank you so much for your time and for working us through TypeScript and answering the audience's questions. Y'all, if you have questions about Josh — questions about Josh, but questions about TypeScript! TypeScript and Josh, they're one and the same. We all get them mixed up. You know, one of them wears glasses and it rhymes with… TypeScript.

<i class="brackets">[Josh chuckles softly]</i>

But yeah, y'all go follow Josh. Ask him your questions question. He… I'm sure I can volunteer you for this. I'm sure you'd be happy to answer people's questions about this kind of stuff. Get his book! Yeah, absolutely.

Stick around, chat. We are going to find another streamer to raid. Also, while you're following people on Twitter, go follow Some Antics on Twitter at @SomeAnticsDev. That way you can keep apprised of all the good streams coming up. I think — I have to check the schedule, but I think next week I'm bringing on Florian Beijers. Florian Beijers is a… I mean he does lots of things, but he is, among other things, an accessibly consultant, as well as he streams himself. He's a gamer without sight, as in he can't see and he loves to play video games, and so he'll stream himself, doing video games without vision. And so we're gonna be, I think, talking about, like, just simply day-in, day-out screenreader experiences, I believe is what next week's stream is.

So, yeah! It's been great having y'all. Hit the Follow button if you want more streams about the web like this one. And again, Josh, thank you so much for your time. 

<i class="timecode">[01:15:09]</i> **Josh:** Thanks for having me! Sidenote, thank you, Ben, for helping us on the TypeScript ESLint website. We did an audit, but we're trying to find the archival footage from the VOD on Twitch. And also, Florian is awesome. I've actually worked with them before.

<i class="timecode">[01:15:23]</i> **Ben:** Really?

<i class="timecode">[01:15:23]</i> **Josh:** They did some — yeah! They gave us a whole bunch of really useful feedback at Codecademy on the accessibility of our site. 

<i class="timecode">[01:15:28]</i> **Ben:** Oh, that's awesome!

<i class="timecode">[01:15:28]</i> **Josh:** Really, like, absurdly, critically useful stuff. So, plus one! I will be tuning in. 

<i class="timecode">[01:15:34]</i> **Ben:** Alright! Awesome! And thank you so much to everyone who's followed during the stream. Ricard0_Gil, BrunchRunner, homeless207, thank you so much for your follows. And yeah, we'll see you next week. Bye, y'all!