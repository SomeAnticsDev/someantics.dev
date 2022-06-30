<i class="timecode">[00:00:02]</i> **Ben:** Howdy, howdy, y'all. Happy Tuesday. It is great to be here with y'all today. Today I'm joined by Chris. Chris, how's it going? 

<i class="timecode">[00:00:10]</i> **Chris:** It's going great, Ben. Thanks so much for having me here.

<i class="timecode">[00:00:13]</i> **Ben:** I am stoked to have you on. I've been, you know, I've been a subscriber to your dev tips newsletter for ages, right. And it's kind of almost a little surreal having you on to just to kind of talk through stuff today. So I'm super, super, super stoked to have you on. Awesome. So for folks who don't know who you are do you want to give yourself a brief introduction? 

<i class="timecode">[00:00:38]</i> **Chris:** Yeah, absolutely. So, I help people learn vanilla JavaScript. I'm known on the web as "the Vanilla JS Guy." I didn't come up with the term, but I have spent a lot of time evangelizing it and really kind of promoting it on the internet. And my whole thing is that I believe there's a simpler and more resilient way to make things for the web. So I spend a lot of my time creating courses and ebooks. I run online workshops. I semi-infrequently host my own podcast that I'm very bad about updating.

So it was just kind of when I feel like it I'll knock out a dozen of them and then forget about it. And then as you mentioned, I think kind of the biggest thing I do is every weekday, I publish a developer tips newsletter that usually contains a short little bit of something some little kind of nugget or useful snippet that I blast out to about 13,000 developers, each, each.

<i class="timecode">[00:01:44]</i> **Ben:** Good deal. And so today… you, you, we reached out, we were planning ahead of time today. We're going to be building a browser game and we're going to do so without any frameworks, so all vanilla JavaScript. 

<i class="timecode">[00:02:03]</i> **Chris:** Yeah, absolutely.

<i class="timecode">[00:02:04]</i> **Ben:** And so I guess the question I want to ask, and it's a big one, is… why?

<i class="timecode">[00:02:10]</i> **Chris:** Yeah! There's, you know, there's a handful of reasons. So… I I think there's a few… there's a few big pieces here — So, one of the… I think for me, one of the biggest reasons is — or really, the big driver in my whole approach with vanilla JavaScript is that I believe a lot of the decisions we traditionally have made in our industry have been very focused on the developer and what's easiest for them and what's best for them. And I tend to advocate for an approach that centers the people who are using the things we build over ourselves. And now obviously kind of having a developer experience that's efficient and works for you is important. But a lot of the tools and choices that we make end up being really bad for our users. Most of the things that we build as an industry don't need React and could, in many cases, actually be easier to build without, like, a UI library. And in using a UI library, we end up building something that's more fragile, that's slower, that tends to fail people on on slower networks and things like that, and just ultimately results in a worst experience all around.

Ben, just give me one second. I am so sorry. 

<i class="timecode">[00:03:42]</i> **Ben:** Yeah, no worries! Yeah, so I guess I will keep vamping. I've definitely had the experience of, like, building things with React and other tools like it that didn't necessarily need that. Like, I remember early on in my experience, like, I built myself a little portfolio site and the portfolio site was almost entirely… like, could have been totally static, right?

<i class="timecode">[00:04:07]</i> **Chris:** Mm-hmm.

<i class="timecode">[00:04:07]</i> **Ben:** Like, there's… you're not going to have a whole lot of dynamic stuff on a portfolio site. But I built it with React. And afterwards, I just felt like it was this kind of, like, overkill thing of, you know, just how much I was shipping for stuff that I wasn't even benefiting from. I personally tend to take, like… I almost think of it like as a conservationist approach?

<i class="timecode">[00:04:28]</i> **Chris:** Mm-hmm.

<i class="timecode">[00:04:29]</i> **Ben:** Of like, ship what you need, right? Like, only use what you need. Like, if you're going to be using the wealth of, like, you know, dynamic behavior that something like React is going to give you, then sure. Ship it, right? Like, that's kind of what you need and the ergonomics are for that. But if you don't need it, then it's actually a little detrimental.

<i class="timecode">[00:04:49]</i> **Chris:** Yeah, for sure. And you know, like, the other… it's really weird as a person who teaches JavaScript, but a big part of what I focus on is really encouraging people to use as little JavaScript as possible. JavaScript is awesome, and it's also the most fragile and delicate part of the frontend stack. And so the more JavaScript you use, the more kind of wonky and buggy your frontend can get. Which is not to say never use it. It plays a really important role in adding that interactivity to the web. But… I don't know, I like to, I like, advocate using it maybe a little bit more responsibly.

And the other thing that I think sometimes catches people by surprise is, you know, we've been kind of taught as an industry that it's really hard to do things without libraries. And for some things, that is still true. Libraries do fill an important role. But for many things, plain old browser-native JavaScript can actually be easier, both to kind of create in the first place and then to maintain in the long run. One of the things I always hear from my students at the end is that they're surprised at how much you can get done and how efficiently you can do it just using plain old vanilla JavaScript. 

<i class="timecode">[00:06:21]</i> **Ben:** Absoutely. And I think there's something to be said, too, that, like, part of that is because the platform itself has gotten better over the past few years, right? Like, more and more features have been built in that make these kinds of things easier. Like, I think of, like, jQuery, for instance. Right now, jQuery kind of can sometimes get a bit of a bad rap. Like it's kind of, like, in and of itself it sometimes feels like a punchline, right? But, like, jQuery was necessary to push the browser APIs forward. But now we have the browser APIs. jQuery… like, some of the best parts of jQuery got, like, absorbed into the browser platform itself and now we don't really need it. And that is success as far as the library goes. But that can lead to this kind of like, you know, sometimes people are thinking of things like their developer experience prior to the platform getting better too.

<i class="timecode">[00:07:13]</i> **Chris:** Yeah, yeah. And jQuery is one of those things too, where, like, I think people just assume I will hate it because it's not native — and I don't use it on anything I build, because it's a lot of overhead that I don't need today. But like… the modern browser APIs and methods that I love only exist because jQuery showed the way. And I think we will see something similar happen with the libraries of today, with things like React and Vue. I think we are going to see a lot of really cool native stuff come out of those libraries experimenting with what's possible and showing ways that they might be done. And really kind of… you know, it's almost like a competition where the popular stuff kind of floats to the top and the stuff that doesn't work as well just kind of goes away.

So for example, one of the things that libraries do great that vanilla JavaScript kind of sucks at is diffing with strings. So, like, if you have a UI as it exists today and a UI that you'd like the current one to look at, you can either kind of, like, manually go through and just update the stuff you need, or you can completely erase what's there and overwrite it. But you know, libraries have this really smart kind of under-the-hood comparison where they figure out what's different and only change the things that need to get changed. And I would love if there was a way to do that just natively without a library, where I could say, "Hey, here's a string. Make the UI that exists right now look like that string with as few changes as possible." That would be a really nice thing to have natively out of the box. That for me is really, like, the ultimate feature of libraries that I want in the browser. 

<i class="timecode">[00:09:02]</i> **Ben:** Awesome! So yeah, I'm going to start sharing my screen and I think maybe we just start diving into building the game!

<i class="timecode">[00:09:11]</i> **Chris:** Cool!

<i class="timecode">[00:09:11]</i> **Ben:** First of all, before we do that, go follow Chris on Twitter, y'all. Just go follow him. Go 

<i class="timecode">[00:09:18]</i> **Chris:** Only if you like political rants. It's a lot more politics than tech these days, unfortunately. 

<i class="timecode">[00:09:24]</i> **Ben:** It's good stuff nonetheless. Still follow Chris. An even more hearty endorsement, go follow Chris.

But yeah, you sent ahead of time a link to a kind of landing page with a bunch of resources and assets and stuff like that too, so I've put that in the chat as well. And yeah! I guess, do you want to kind of take it from here as to, like, what it is we're going to be making today? 

<i class="timecode">[00:09:51]</i> **Chris:** Yeah, absolutely. So I'm a giant Pixar nerd and I also like old school games, so we are going to be building a, like, Monsters, Inc. Minesweeper-esque kind of, kind of game where we've got a bunch of doors. You click them to open them. And we are looking for all of our monster friends. What we don't want to find is the sock. The sock is bad. Human socks are dangerous. You don't want those. So if you get all the monsters, you win. Otherwise you lose. So unfortunately, Ben, you found the sock. You need to get decontaminated.

So we're going to be building this. It includes some, some free icons from The Noun Project. Links to all the wonderful creators of those down in the HTML there. And yeah! We'll go from there!

<i class="timecode">[00:10:54]</i> **Ben:** Alright! Super, super excited!

So I've already actually cloned everything, but you can find all the, like, gists and resources on this landing page. I've just already gone ahead and cloned things. Yeah, so we're building a game like this. And I guess actually what I want to see is what we've got to start, might be a good place to, so…

If I turn on BrowserSync.

<i class="timecode">[00:11:25]</i> **Chris:** Cool.

<i class="timecode">[00:11:25]</i> **Ben:** And let's see. localhost:3000 it is. 

<i class="timecode">[00:11:28]</i> **Chris:** Awesome. Now, some of this stuff we're gonna… we won't need until later. But I just wanted to make sure we had it all there so we could just kinda keep rolling as we needed it. 

<i class="timecode">[00:11:39]</i> **Ben:** My… my computer has been acting up, like, triggering, like, multiple clicks and stuff like that, and so it just opened up the wrong browser. There we go.

<i class="timecode">[00:11:49]</i> **Chris:** No worries.

<i class="timecode">[00:11:50]</i> **Ben:** Okay, so here's what we've got. Absolutely nothing so far, it looks like.

<i class="timecode">[00:11:56]</i> **Chris:** Yeah. The way nature intended, Ben. This is an index.html file in its purest form. No, I'm kidding. So… 

<i class="timecode">[00:12:07]</i> **Ben:** Less on it than a React app does. 

<i class="timecode">[00:12:10]</i> **Chris:** The guts of this are gonna happen in index.html. The repo includes 11 monsters and a door which we will get to in a little bit… as well as a sock.svg image. We've got some additional HTML files that we'll use later when we start tracking, like, wins and losses and things like that, but we don't need those right now. And so here's kind of the…

Well, actually, if we scroll up for a sec, I included just a little bit of, like, super light CSS to keep the body from going full width. And then I built in a really lightweight, like, grid just so that we don't have to think about that, because the focus of this project is on the JavaScript stuff. So this will allow us to do a nice little three-column layout without having to give it much thought. And then I added some code for, like, scaling images so that we don't have monsters kind of bleeding over margins and things like that.

<i class="timecode">[00:13:14]</i> **Ben:** Cool.

<i class="timecode">[00:13:15]</i> **Chris:** Yep. And then as you might expect with an app, we're going to inject most of our stuff into the `<div>` with an ID of "app" on it, because I'm lazy and I don't creatively name things.

So inside our starter here, we have an array of monsters. One of them is actually the sock. But so these are just the names of the SVG files that we have in our code here. So you've got monster 1 through 11, and then sock. And the ".svg" is excluded. Just, you know, for pure kind of laziness.

And so, the the first thing that I like to have students do when we go through this is… so, we've got a bunch of stuff. We want to inject this into the UI. And the big thing here is we don't want to inject them in the same order every time because… well, that would get boring. You'd always know where the monsters are, the sock would always be last, and it wouldn't really be much of a game. So, the trick here is you kind of want to, like, shuffle the array around before you loop through it and do something with it.

And many programming languages have a shuffle() method baked into them. Like, PHP has a thing that you can use to just randomize an array. JavaScript has so many amazing things. Shuffling an array is not a native feature. And there are a bunch of different ways to do this. But Ben, if you wouldn't mind heading over to VanillaJSToolkit.com for a second. I have a utility function that I use for this that we're going to copy and paste into this project. And so this is just a repository of — so, if you click on utilities, that's where I keep all of my little kind of helper functions. And so this is literally just a place where I dump anything I've ever used on a project that I found useful and I don't want to forget about later. So if we have you scroll down to — they're alphabetical, so shuffle.js. This is a… little function that uses the…

Oh god, I actually forget the name of it now. Hold on. Ah, there's an actual, like, name for this algorithm, and I forget which one it's called. So it is the Fisher–Yates or Knuth shuffle algorithm. There are a bunch of different ways to do this, but this one tends to produce the most random results in your shuffle. Some of the other kind of simpler methods using Math and round() will result in certain kind of numbers or certain items in an array ending up first more often than others, whereas this tends to be a bit more random.

<i class="timecode">[00:16:13]</i> **Ben:** Okay!

<i class="timecode">[00:16:14]</i> **Chris:** So what we're going to do is we're just going to copy and paste this into our project.

So one thing about this method that I just want to mention for anybody who tries to use it on a project: it shuffles arrays in place. So it's not going to return — it returns an array, but the original array is modified. It is not going to create, like, a unique array and leave the original one untouched. For purposes of this project, that really doesn't matter much. You know, it's kind of the equivalent of, like, rolling a dice and then picking it back up the way it landed versus always starting it on one. Or like with one face up. And for our project, that doesn't really matter. But if you need to leave the original array untouched, you're going to want to create a copy of it first before you kind of pass it into this function which you can do using the Array from() method, or by destructuring an array and then tossing it into a new array, or using arrays. There are a bunch of different ways to copy arrays. But for our purposes, that doesn't really matter.

So, we've got this. The next thing we're going to do, we're going to shuffle and then pass in monsters. So if you, you know, just kind of pass that in! And one kind of interesting thing to do, Ben, might be if we just console log monsters right now, you know, we'll be able to see, you know, kind of what happened with the array there. So if we jump over to the browser and kind of open up the console, you know, we'll be able to see, they will be in a very kind of random order now.

<i class="timecode">[00:18:03]</i> **Ben:** Array(12). Monster 3, 2, 5, 4…

<i class="timecode">[00:18:07]</i> **Chris:** Yeah.

<i class="timecode">[00:18:07]</i> **Ben:** Sock.

<i class="timecode">[00:18:08]</i> **Chris:** So you can see there…

So they're just all kind of in a weird sort of way, which is great. That's exactly what we wanted.

So the first thing we're doing when we load the page, we're mixing them up. And now we want to actually inject them into the UI. So this is a two-part process. 

The first thing we are going to do is we're going to actually get that "app" element and save it to an array — or save it to a variable, rather — so that we can do something with it. So you could use getElementById. I'm a big fan of just using querySelector for everything. So you can name this variable whatever you want, Ben. I'm lazy. I tend to just call it "app," but you can, you know, you can call it whatever. And then we'll use — yeah document.querySelector(). And so if you're— for anybody who's unfamiliar with the querySelector method, this accepts any CSS selector as an argument. It can be simple, like just an ID. It can be complex, like a class nested in an ID nested in some attribute selector. So anything that's valid CSS is valid to pass into querySelector. And it will find the first matching element and return it.

And now that you've done that, Ben, we can actually, you know, kind of loop through and create some markup here. So, there are a bunch of ways to do this as well, but with vanilla JavaScript, the easiest way to do this is with the innerHTML method — or property, rather — which is a it property that will get the HTML of an element as a string or set the HTML as a string, depending on kind of how you use it. So if we say "app.inner HTML =," we are going to overwrite any existing HTML in that element as a string.

Now, we could just use simple strings and string concatenation, but for something like this, I really like to use template literals. Are you familiar with those, Ben?

<i class="timecode">[00:20:14]</i> **Ben:** Yes!

<i class="timecode">[00:20:15]</i> **Chris:** Awesome. So for people who aren't, they work just like regular strings except you use backticks instead of single or double quotes to create them, and then anytime you have a a variable that you'd like to reference, or you kind of want to pause the string and access some raw JavaScript, you can use… they're called an expression. But so what Ben just did here, where, you know, he kind of wrapped it in the dollar sign and curly brackets. So this is going to display "There are 12 monsters" as a string. And you know, he's grabbing the monsters array, getting the length property, and that's going to be kind of injected literally. So instead of having to open a string, close it, use plus on either end… like, this is just a much more simple, ergonomic, a bit like how JSX works kind of way of authoring.

Awesome. So what we're going to do… let's wrap all of our markup in a `<div>` with the "row" class on it, I think is what was in here. Let me pull up my own code, 'cause I forgot what the CSS looked like here. Yeah, so let's give that a class of "row" and this is going to kind of create our grid structure. And then we can add our stuff inside it.

And now what we want to do is we want to loop through each monster and create an image for it, and that image will use the corresponding SVG as its source. I have role="img" on those SVGs already so that they'll render properly in all browsers.

So, there are a bunch of different ways to do this. My preferred way, just because I find it really kind of, like, simple and easy. I like to use the array map() method, which creates a new array from an existing array, and you can modify it in some way. And so in our case, we are going to create an HTML string for each item in our array. So if you pass in a callback function here, Ben. So function, open and closing parentheses, and then we need the curly brackets too. So, the callback function accepts up to three arguments. None of them are required. But the first one is the item itself, so we could say "monster" for this one. You can name them anything you want, but let's say this is the individual monster. The second argument, which we actually are going to need later, so we might as well throw it in now, is the index of the current item. And again, you can call it anything. I'm lazy. I usually just call it index. And then if you wanted the third argument, it is the array itself. So let's say you created an array, but it wasn't already assigned to a variable. You could name it something, and then you would have a variable you could reference to reference the original array if you needed to for some reason. We don't for this project, but you could. And so then inside the function, whatever you return gets assigned to the current index in the new array that's getting spit back out.

And so what we're going to do here is we're going to return, and then we're again, going to use template literals because they're awesome and they make our life super easy. And we're going to return a `<div>` with the "grid" class on it because that's what we… or that's what I — shouldn't say "we," because I set up the template — that's what I kind of created as the class for the individual items in this grid. And then, if you would be so kind as to create an `<img>` element. We will use the the monster as the source. And I'll get back to some accessibility concerns around this in a minute. But so we will do "monster," and then after that, we'll just need to drop a ".svg." And if I didn't steer you — oh, no, there's one more thing, actually. I'm so sorry. I forgot.

<i class="timecode">[00:24:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:24:29]</i> **Chris:** So, at the end of our map(), we now have an array. We want to combine it into a string. So after the closing parentheses for our map(), we want to use the join() method, the array join() method, which takes all of the items in an array and combines them into a string. And you can pass in something called a delimiter. If you don't, it'll use a comma. We don't want a comma, so we'll pass in an empty string like that. And that'll take our new array, combine it into a single string, and then the innerHTML property, we'll inject it into the UI.

So now if we jump over to the browser, we should, if I didn't steer you wrong — boom, there we go. We have just kind of a grid of monsters.

Now, one problem with what we've got here is that if you were to use a screenreader to navigate this site, none of these would… they would just announce as their source. So, you know, it would be "monster1.svg," "monster8.svg."

<i class="timecode">[00:25:27]</i> **Ben:** Would you like me to demo that?

<i class="timecode">[00:25:29]</i> **Chris:** You can, if you'd like. Yeah, that might be useful for folks.

<i class="timecode">[00:25:31]</i> **Ben:** Let's do it. So, for anyone who's never played around with a screenreader, screenreaders announce the contents of your application to…

<i class="timecode">[00:25:40]</i> **Voiceover:** VoiceOver on Chrome.

<i class="timecode">[00:25:42]</i> **Ben:** …usually folks who are blind or vision-impaired. And macOS has a built-in one called VoiceOver, so that's what I'm using. And yeah, so I'm gonna now go just to the different monsters and we… like you said, I would expect this to, based on the way we've implemented this so far, we're going to hear that the thing that gets announced is the filename for each of these. 

<i class="timecode">[00:26:08]</i> **Voiceover:** To get missing image descriptions, open the context menu.

<i class="timecode">[00:26:11]</i> **Ben:** That's different.

<i class="timecode">[00:26:11]</i> **Voiceover:** Unlabeled, /monster1.svg, unlabeled image. /monster5.svg, unlabeled image.

<i class="timecode">[00:26:22]</i> **Chris:** Yeah… so as you can see, this is a pretty poor experience for someone who uses a screenreader device. So we will… we will fix that.

So, I've had students in the past do things, like, use the index to just label it as, like, "Monster 1," "Monster 2." That's, like, slightly better, but still not great. What you really want to do with your alt text, your descriptions of these things is provide as much rich description as, like, a sighted user looking at the monster might get. So to save you the time of having to do that, Ben, if you open up monsters.js in the source code, I have a replacement monsters array that includes that detail, so that…

<i class="timecode">[00:27:13]</i> **Voiceover:** VoiceOver off.

<i class="timecode">[00:27:14]</i> **Chris:** …you don't have to manually create a description for every monster. 

<i class="timecode">[00:27:17]</i> **Ben:** Yes, let me…

<i class="timecode">[00:27:21]</i> **Chris:** We only have so much time on the stream. I don't wanna… 

<i class="timecode">[00:27:24]</i> **Ben:** Yep! Yeah, so monsters.js, okay. Ah, okay.

<i class="timecode">[00:27:28]</i> **Chris:** Cool. So we can copy-paste this in and replace the existing one. And you can see what I've done here is, for the kind of the actual filename, I've assigned that to… well, for each item, I've replaced it. Instead of a string, it's now an object. The "name" property is that original reference to the file, and the "alt" property is the description. 

<i class="timecode">[00:27:52]</i> **Ben:** My computer's been acting up as of late. Here we go. Keyboard shortcuts it is! Thank goodness for accessibility tooling, actually.

<i class="timecode">[00:28:02]</i> **Chris:** There we go. Great.

<i class="timecode">[00:28:03]</i> **Ben:** But yeah! I love these. I was looking at these ahead of time. Like… so, everything here is very Pixar-inspired, you know? Like, very cartoony. And one of the things that that comes with, you know, is an emotional tone that's conveyed, right? And so if you're sighted, you get in this kind of cutesy tone, and that's very fun! But when you turn that into, like, "Monster 1," "Monster 2," et cetera, like, that becomes very clinical. Like, that tone is not conveyed. Like, you're aware that it's a monster, but what you're not aware of is, you know, kind of the cute tone. What are these monsters that I'm seeing? Are they, you know, terrifying? Should I be scared? And so, yeah! 

<i class="timecode">[00:28:48]</i> **Chris:** Yeah, one of the big things with accessibility that took me far too long to learn is that it shouldn't just be, like, a watered-down, bare-bones, functional experience. People who are disabled in some way or using assistive technology in some way should get the same kind of rich experience that a nondisabled person does. They just happen to be consuming it in a slightly different way, or navigating through it in a slightly different way.

And so the one change we will — well, there's two changes we'll need to make. The first, instead of just referencing the monster in our HTML string, we'll need to reference the monster name property. And then we're also going to want to add an alt property to each image referencing monster.alt.

<i class="timecode">[00:29:50]</i> **Ben:** And there we go. And if I, you know, inspect the markup, the…

Also fun to see the shuffling logic work as well. That's adorable.

<i class="timecode">[00:30:01]</i> **Chris:** Yeah, a different order every time, right? 

<i class="timecode">[00:30:03]</i> **Ben:** Yup. So our markup now has, you know, it still has the source, but now it has this alt as well. "A purple monster with a single, sad-looking eye and tentacles for arms."

<i class="timecode">[00:30:15]</i> **Chris:** Poor little guy.

<i class="timecode">[00:30:18]</i> **Ben:** And if I turn on VoiceOver again…

<i class="timecode">[00:30:25]</i> **Voiceover:** Entering Monsters, web content. Monsters, selected. A purple monster with a single, sad-looking eye and tentacles for arms, image. A blue insect-like monster with bug eyes, three body sections, and a pair of wings, image. A furry gray monster who long arms and a happy face, image. VoiceOver off. 

<i class="timecode">[00:30:43]</i> **Ben:** Yeah! That works pretty well!

<i class="timecode">[00:30:45]</i> **Chris:** Fantastic.

So now we're just kind of, like, shuffling and dropping monsters onto the UI. There isn't really much of a game. So to turn this into a game, Ben, what we're going to want to do is replace all of these with a door by default that can be clicked to reveal the monster behind it. So we're still gonna need to shuffle, and you know, we're still gonna kind of want to have that same rich description, but that's going to have to happen after the monster is revealed.

So there was one other SVG file in the source code, door.svg, that we didn't use up to this point. Now would be a great time to do that.

So, let's see here. Let's jump in. And what we are going to do right now — we're actually going to undo our work, and that always feels really bad and weird. But so we're still looping through, we're still creating the map(). Ooh, I like the way you're doing it. If I were you, no, so I would copy-paste that just so that we don't have to rewrite it all over again.

<i class="timecode">[00:32:04]</i> **Ben:** Yeahhh.

<i class="timecode">[00:32:04]</i> **Chris:** But comment it out so that it's there to kind of, you know… like, as a reference. So we're going to do something a little bit different, but that's what it looked like in phase one. So for each image, we're actually going to, instead of monster.name, we are going to reference door.svg. So we're just going to — it's all doors, all the way down. And we don't need… yeah, we actually don't need kind of the expression on this one. We just do door.svg. And for the alt, we can say "Door," and then it would be nice if they were numbered so you know which door you're on. And so for that, we'll use the expression, but let's go index plus one. So instead of doing the weird start-with-zero thing that JavaScript developers love, we'll, you know, we'll start with one. So now these will get announced as "Door 1," "Door 2," "Door 3," and so on.

And if we were to jump over to the browser, we'll see we just have kind of an array of… or just a, like, grid of doors now.

<i class="timecode">[00:33:10]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:33:11]</i> **Chris:** So the next thing we want to do here is we want to detect when someone clicks one of these doors and reveal the monster behind it. Now there's two… or, there's a few pieces to this. One way that I commonly see developers go wrong is they will… they'll listen for clicks on the image and kind of go from there. And that will functionally work if you're a mouse user. But if you're not a mouse user, if you're someone who navigates with a keyboard, you will neither know that those elements are clickable nor have a way to actually get to them without some additional hacking, which we don't want to do. We want to make this nice and easy for folks.

So what we can do instead is we can wrap each of these images in a `<button>` element. Links technically also work, but a link conveys to assistive technology that when you click, this is going to take you somewhere. And in our case, they're not taking you anywhere. It's just an interactive element. Therefore a button is really the appropriate HTML element here. You're saying when you click this, something is going to happen. You're probably going to stay on this page. So we'll wrap those in a `<button>`. 

And one other thing that I like to do…

So, when someone clicks this, we're going to need to know which monster it points to. So one of the things I like to do — and we also need a way to kind of detect, you know, did they click on monster button or something? Like, maybe it's a page that has some other buttons on it somewhere. So I like to add some sort of, like, hook that conveys that information and we can also kind of filter against. So on our button, Ben, would you mind adding a "data-monster" attribute?

<i class="timecode">[00:35:01]</i> **Ben:** Ooooh, love me some data attributes.

<i class="timecode">[00:35:04]</i> **Chris:** And we're going to use the index as the value there. That way we can map the current thing they're looking at to the monster that it goes with. So we'll kind of have, like, this ID. In the past, I've had students use the actual monster name, but someone who's really savvy could use developer tools to cheat. So this was my… one of my students actually came up with this approach. It kind of obfuscates the data a little bit, which is nice.

Awesome. So, if you save this and reload the page, you'll notice that now we have a bunch of really ugly buttons, and that kind of looks like garbage. And we don't want that. So one cool thing we can do is we can actually use that data-monster attribute as a CSS hook to remove the kind of the default styling of the buttons. You can feel free to do that or not. Like, for our demo purposes, we can just kind of keep moving if you want. It's a relatively simple thing to do, though, and I do love to show people the power of data attribute selectors.

<i class="timecode">[00:36:04]</i> **Ben:** Yeah, let's do it real quick!

<i class="timecode">[00:36:06]</i> **Chris:** Cool, awesome. So Ben, you probably already know this, but you would wrap them in square brackets, and then we would put "data-monster." And so in CSS, this is saying, you know, "find all the elements that have this attribute or property on them." And in our case, let's remove the border, remove the padding, and remove the background color. So, you know, "border: none" or "border: 0," "padding: 0," and "background-color: transparent" or "none". I forget what you have to do for this. I think it might be transparent. I always… I'm really bad at this one. 

<i class="timecode">[00:36:42]</i> **Ben:** "transparent" might be a good one in this case, actually, for high contrast mode.

<i class="timecode">[00:36:47]</i> **Chris:** Oh, okay!

<i class="timecode">[00:36:47]</i> **Ben:** Because anytime you see… I don't know if this is something you're familiar with, Chris, but anytime you see "transparent" in CSS, a user who is using high contrast mode their browser will disregard that, which is actually a good thing—

<i class="timecode">[00:37:01]</i> **Chris:** Oh, nice!

<i class="timecode">[00:37:01]</i> **Ben:** —in many cases because basically it will show, like, a different color there instead, so that way, you know, if someone turned on high contrast mode, they would still get the indication that this is, like… it is a button. 

<i class="timecode">[00:37:14]</i> **Chris:** Oh, sweet! Alright. No, I didn't know that. That's awesome. So I just learned something new today. Thank you, Ben. 

<i class="timecode">[00:37:19]</i> **Ben:** Alright! I'll do, like, "border: 3px solid transparent" as well. Or something like — oh, god. I can't spell today. There we go. So yeah, that is a fun little tidbit for you, is "transparent" will be disregarded, which is actually sometimes a good thing, in high contrast mode.

<i class="timecode">[00:37:37]</i> **Chris:** Oh, awesome. Alright, sweet.

So yeah, so now these will just look like… doors instead of, you know, buttons, even though they are functionally buttons. And the nice thing here now is, like… so Ben, if you were to, like, tab on your keyboard a few times, you're going to move through this page instead of, you know, having to interact with a mouse. This also, out of the box, provides focus styling, so you get default visual indication that this is not just interactive, but here's the one you're currently on, which is really nice. And buttons also give you a bunch of other interactivity out of the box. So by default, if you click on this or press the space bar while it's in focus or press the enter key while it's in focus, it will… all of those will fire a click event that we can hook into in our JavaScript. So you get a bunch of stuff. This is one of the reasons why I really love, like, good accessibility and vanilla JavaScript, is you get so much for free out of the box that you can hook into without having to, like, hack a bunch of stuff.

So yeah, let's go ahead and show those monsters, Ben. So if we jump back over to index, we are going to listen for some click events. And you could theoretically attach one to every single button on the page, but when you have multiple elements and you want to do the same thing for each one, I find an easier approach and a more performant approach, is to use something called event delegation. So with event delegation, you listen for an event on a parent element, and when one of its child elements has that event happen on it, it bubbles up through each of its parent elements until it hits the one you're listening for. And then you can actually, you know, detect what was the element that caused this to happen and filter out the ones that don't apply.

So that's a little heady. Let's actually look at an example here. So could you attach a… you know, actually probably the best place to attach this would be on the app element. So let's go app.addEventListener(), and we're going to listen for click events. So as the name implies, the addEventListener method listens for events. The first argument you pass in is the type of event to listen for. And then the second argument is a callback function that you want to run whenever that event happens. And so some browsers automatically make the event a global thing, but just to be safe, we should pass it in as an argument 'cause we are going to need it.

And so now inside here, the the first thing we want to do is figure out which thing actually caused the… or, no, more specifically, we want to figure out if the thing that triggered the event was one of our monsters. Like, cause you could click anywhere on the page right now and it would fire ,or anywhere inside the app, and it would fire this event. So we want to we want to make sure that the event — I'm sorry, the data-monster button or the image inside it were the things that were clicked or kind of toggled that caused this to happen. So normally we could just say you know, if event target — the event target being the thing that actually fired the event — matches, you know, or has attribute, or… there's a bunch of different ways that we could check this. But so, matches() is a really cool one, actually, so let's do that just for now, Ben. So if event.target.matches(), and then again, you pass in a CSS selector, so in our case, we could do, you know, square brackets, data-monster. And so this is going to say, you know, if the thing that fired the click event was the data-monster button, you continue. 

This is problematic with images nested inside your buttons, though, because if someone clicks on the monster, this won't fire, because the thing that actually fired the event was the image, not the button that it's inside of, and that gets a little wonky sometimes. So we need to approach this a slightly different way. So if you go outside of your if statement for a second, Ben. Let's create a new variable called "monster" or "monsterId." You would call it "id," whatever. It doesn't matter. Whatever you wanna call it. But so we are going to say event.target, and then we're going to use the closest() method. And the way this method works is it will check the element itself and any of its parent elements and return the first one that matches whatever CSS selector you pass in. So in this case, we we're again going to pass in data-monster. But we're saying, you know, "If the event target itself has this attribute, perfect. That's our monster. If it was the image inside it, get that parent button. That's what we really want."

<i class="timecode">[00:42:59]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:42:59]</i> **Chris:** And then I like to do kind of reverse checks. So instead of using an if statement with square brackets, I like to say "If the thing doesn't exist, return." It's called the the early return pattern, and it helps prevent, like, overly nesting inside things. So in our case, we can say "if no monster, return." And so we're just gonna bail if the thing that was clicked was not the monster. 

<i class="timecode">[00:43:28]</i> **Ben:** Yeah, because otherwise you end up with, like, you know, like, this pyramid of, like, nested ifs. Ifs within ifs within ifs. 

<i class="timecode">[00:43:36]</i> **Chris:** Yeah. And so this is functionally the same. It just, in my opinion, provides a slightly more readable code, just cause you don't have to keep panning your eye over to the right or left, depending on where you live. 

<i class="timecode">[00:43:51]</i> **Ben:** I'm going to interrupt real quick. We've already got some love for closest() in the chat. JohnDunnDev says, "I've never seen the closest() method of the event target before. That's neat!" And then Stephanie Eckles goes, closest() was one of the reasons outside of CSS features that she was pumped to drop IE 11. So I guess it's actually a newish API? 

<i class="timecode">[00:44:11]</i> **Chris:** Yeah, I had to… For a long time, I was a big advocate of polyfills for a lot of these methods just because, like, IE11 was that last browser that just hadn't implemented some things.

<i class="timecode">[00:44:22]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:44:23]</i> **Chris:** So… cool! Glad to see the love!

Awesome. So now that we have kind of that monster ID, we want to actually get the monster from our monsters array and create an image from it that we will replace our door with. So we're going to kind of reveal the monster behind the door.

So — yeah, I actually like that. Let's rename it "monsterId." I think that's a bit more logical. So… we can…

You know, let's actually add an additional check to our monsterId. So after "if no monsterId," can we do "&&"? No, hold on. &&… if no monsterId… I guess we should do "||." Sorry, not "&&." So, straight up, we're going to do an OR check. So the… god, why can't I talk today? The straight up-and-downy ones. There we go. Cool. So if there's no monsterId or if monsters<i class="brackets">[monsterId]</i> doesn't exist… so if there's no… you know, if there's no item in our array with that index, we're going to bail. So theoretically, you could end up with some weird UI where, like, you're trying to reference some item that doesn't exist. I can't imagine why that would happen, but just in case.

And one thing I just want to point out here: JavaScript uses something called short circuiting. So if monsterId doesn't exist, that second check for monsters<i class="brackets">[monsterId]</i> will never run, which is very nice and very performant. Some languages don't do that, and it's really annoying. It means you have to, like, have a bunch of lines, whereas JS lets you just kind of run it in one swoop. 

So knowing that we have a monster to show, let's go ahead and actually kind of show it. So the first thing we're going to do — actually, there's a bunch of different ways to do this. But we want to do it in a way that allows us to actually kind of announce that there's a new monster in the UI. We want to be sensitive of screenreaders. So you could just wipe out the button with the innerHTML property, but we don't want to do that here. So what we're going to do instead is, can you create a…? You can call it "image" or "monster" or whatever you want, but we're going to create a new variable. And we are going to use the document.createElement() method to create a new DOM element. 

<i class="timecode">[00:47:03]</i> **Ben:** I just noticed this is going to be the button, so I need to actually adjust this as well. So this is, I think…

<i class="timecode">[00:47:13]</i> **Chris:** Oh, yup!

<i class="timecode">[00:47:14]</i> **Ben:** Yeah.

<i class="timecode">[00:47:14]</i> **Chris:** Man, good catch! Yup. No, so we want to…

You're right, it is the button. We should probably call it "button" and then we should use the getAttribute method to get the value from.

<i class="timecode">[00:47:29]</i> **Ben:** Yeah, I'm going to break this out into variable checks.

<i class="timecode">[00:47:32]</i> **Chris:** I wrote myself very loose notes for this one, and that's my bad. Sorry.

<i class="timecode">[00:47:38]</i> **Ben:** Nah, you're good. 

Yeah, monsterId is… we're going to do a few early returns, I think.

<i class="timecode">[00:47:47]</i> **Chris:** Okay!

<i class="timecode">[00:47:47]</i> **Ben:** This could be made more cleanly, I think, but…

<i class="timecode">[00:47:51]</i> **Chris:** No, I'd rather— I'd rather see it more verbose and readable than, like, brief and confusing. 

<i class="timecode">[00:47:58]</i> **Ben:** Expressive code — like, I know people will go on and on about, like, things like "Don't Repeat Yourself" and "Write Everything Twice" and stuff like that. The single dogma I subscribe to when it comes to code is just expressive code wins always. 

<i class="timecode">[00:48:16]</i> **Chris:** Yup. Readable over clever.

Let's see here.

<i class="timecode">[00:48:24]</i> **Ben:** Alrighty, there we go. 

<i class="timecode">[00:48:26]</i> **Chris:** Boom. Now, then.

<i class="timecode">[00:48:28]</i> **Ben:** Now we go, I'm sorry. So I interrupted. You were…

<i class="timecode">[00:48:30]</i> **Chris:** No, no, you're good, you're good. 

Up top though, on line 167, that should say "if no monsterButton," and that's my bad, because I steered you wrong early on. Sorry, Ben. 

<i class="timecode">[00:48:43]</i> **Ben:** No, you're good, you're good, you're good. I'm just glad we caught that before having to circumvent the bug.

<i class="timecode">[00:48:48]</i> **Chris:** Alright. Cool. So let's create a new variable. Again, we can call this, you know, "image" or "monster," but we're gonna use the document.createElement() method to create an `<img>` element.

Boom. And so the document.createElement() method creates an element. You can pass in anything you want, including an element that doesn't actually exist. So if you want to create a `<chicken>` element or an underscore element, it will do that. It's really bizarre how it works, but it does. So… we now have…

It's going to return the element itself, and we have this DOM element that's not in the UI yet. It just kind of exists as a… like, a headless element. And you can use any of the element properties that you would otherwise use to set some stuff on it. So for our purposes, we want to give it a "src" and "alt" attribute, just like we were doing in our previous code.

So newMonster. You know, src equals monsters<i class="brackets">[monster ID]</i>.name, .svg. You know, if you want to make your life easier, you can… well, there's two ways to do this. You could either use string concatenation or template literals. I think in this case, it doesn't really matter either way.

<i class="timecode">[00:50:10]</i> **Ben:** Mm.

<i class="timecode">[00:50:10]</i> **Chris:** It's the same… same kinda…

And just for… you know, for people watching at home, I will sometimes in a situation like this cache monsters<i class="brackets">[monsterId]</i> to a variable just to not have to keep typing it over and over again, because I am an incredibly lazy coder and I let my minifier kind of performance-optimize that for me.

But — ooh, you're doing it. I love it. There we go. 

<i class="timecode">[00:50:45]</i> **Ben:** Right.

And you know, we could even take this a step further and cut out the middleman. 

<i class="timecode">[00:50:55]</i> **Chris:** Oooh, yep! So Ben is using object destructuring. So he is defining multiple properties, or multiple variables at once and the browser will rip the corresponding property from the object out and assign it to, you know, the variable named after whatever is wrapped up in the kind of the curly brackets there. So super, super handy.

Great. Let's see. There was one other… I'm just looking at my cheat notes here. Okay. So we're almost there. The last thing… the second to last thing, I guess, we want to do is… so we want to replace the button itself with our new image, because once we show the monster, we don't want to hide it again. We don't need that interactivity anymore. So we actually want to get rid of the button and drop the, you know, monster in its place. So we will go "monsterButton," and then we're going to use the replaceWith() method.

<i class="timecode">[00:52:07]</i> **Ben:** I've never done this!

<i class="timecode">[00:52:09]</i> **Chris:** It is super awesome, and now we just pass newMonster in. And so it'll take the thing you're calling it on and replace it with the thing you're passing in.

<i class="timecode">[00:52:17]</i> **Ben:** Where has this been all my life?!

<i class="timecode">[00:52:19]</i> **Chris:** Right? It's amazing. It's super, super useful. We have a couple of accessibility tweaks to make, but this is going to be functionally where we want to be. So if we jump over to the browser, we will see this in action. We can actually click some doors and reveal some monsters.

<i class="timecode">[00:52:37]</i> **Ben:** Ooh. Ooh. Okay, okay. 

<i class="timecode">[00:52:39]</i> **Chris:** Now, there's two downsides with this approach so far, two things — incomplete aspects, I'll say. The first is if you were navigating with a keyboard, this removes your current focus place and that's bad. The second thing that it does is it does not actually announce the new monster for screenreaders. And so we're going to fix both of those in one swoop right now.

So if we jump back into our index.html file, we're going to add one more property to…

There's a few different ways to handle this. Like, you can handle this with ARIA live regions if you want. But I think the one I like best because it tackles both of these problems at once is, let's give… we're going to use the setAttribute() property — or method, rather — on newMonster. And we're going to add a tabindex of -1. And what this does is it makes the monster — so by default, images are not focusable. This is going to make them focusable, but not put them in the browser focus order. So if you're just tabbing through, you'll skip right past it. But if you want to, you can make it come into focus with JavaScript.

<i class="timecode">[00:53:55]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:53:55]</i> **Chris:** And now after we do the replaceWith() method, we will say newMonster, and then we'll use the focus() method to shift focus to that monster. And what this will do is it will both keep you kind of focused in the same spot you were, and when focus shifts to a new element, screenreaders are going to announce something about that. And because this is an image with alt text on it, it will read that alt text out loud, letting screenreader users know what they've actually kind of seen behind the door. So Ben, you lost right out the gate. That's really sad.

<i class="timecode">[00:54:32]</i> **Ben:** Yeah, no, I'm great at this game. But I wanna see this with the screenreader, so I'm going to turn on VoiceOver again.

<i class="timecode">[00:54:49]</i> **Voiceover:** Heading level 1, Monsters. Door number one, button, group. Door number one, image. Door number two, button, group. Door number two, image. Door number three, button, group.

<i class="timecode">[00:54:58]</i> **Ben:** VoiceOver's just really delayed, I think.

<i class="timecode">[00:54:59]</i> **Voiceover:** Door number three. Door number four, button, group.

<i class="timecode">[00:55:01]</i> **Ben:** Oh, it's just announced… that's what it is. Okay, it was just going through.

<i class="timecode">[00:55:05]</i> **Chris:** Got it.

<i class="timecode">[00:55:08]</i> **Ben:** Okay. I do think it's working. I just think VoiceOver's being weird. Again, something with my computer's… 

<i class="timecode">[00:55:14]</i> **Chris:** I'm so sorry. I actually, yeah, I tested this before our call too, to make sure I wasn't wrong, but I also— one of the other weird things about screenreaders is—

<i class="timecode">[00:55:21]</i> **Voiceover:** VoiceOver off.

<i class="timecode">[00:55:22]</i> **Chris:** —how you have them configured for verbosity or not, they will or will not announce certain things.

So one other thing we can do, if this isn't working, just to show it off.

<i class="timecode">[00:55:34]</i> **Ben:** I'm just going to give it one more shot.

<i class="timecode">[00:55:36]</i> **Voiceover:** Monsters. Door number one, button, group. Door number one, image. Door number two, button, group.

<i class="timecode">[00:55:41]</i> **Ben:** Okay.

<i class="timecode">[00:55:42]</i> **Voiceover:** A blue monster with—

<i class="timecode">[00:55:43]</i> **Ben:** There we go.

<i class="timecode">[00:55:44]</i> **Voiceover:** —lopsided eyes on stalks and long, sharp teeth, image. 

<i class="timecode">[00:55:46]</i> **Chris:** So that's the correct behavior I would, you know, want to see there.

Cool. Alright. Sweet. Problem solved.

<i class="timecode">[00:55:55]</i> **Voiceover:** VoiceOver off.

<i class="timecode">[00:55:57]</i> **Chris:** Cool! 

<i class="timecode">[00:55:58]</i> **Ben:** So, just to demonstrate the thing about, like, the tabindex, like, our focus was on the blue alien up here, but if I come back to it, it's just… tabbing is going to skip right over it. You can't tab to it because we chose -1 for our tabindex, which says JavaScript can focus on it. You can actually get focus with mouse clicks as well. But tabbing isn't going to land on this element. 

<i class="timecode">[00:56:25]</i> **Chris:** Yeah. Which is fine for our purposes. It's actually desired because we're not… the monster's revealed, so we're not kind of bouncing around to doors now. 

Awesome. So we now have, like, a technically functional game. How much more time do we have, Ben? 'Cause it'd be really nice to kind of have, like, a "track if you won or lost" feature, but it is totally optional. 

<i class="timecode">[00:56:48]</i> **Ben:** So… we typically end in about three minutes. However, I'm fine to run a little longer if you'd like to wrap this up—

<i class="timecode">[00:56:56]</i> **Chris:** Sure!

<i class="timecode">[00:56:56]</i> **Ben:** —and have a complete experience. I'm good to keep going. 

<i class="timecode">[00:56:58]</i> **Chris:** Yeah. We'll make this really, really quick. So, there are two different ways that you could handle kind of… showing wins and losses. So one of them is the single-page app experience, which is very, very, kind of popular now, where you would wipe out app with some new content when someone wins or loses, give them some interactive element that they could use to kind of play again, and then when they click it, wipe it back out and show the game board. I actually hate that because it's both more complicated — it involves more moving parts and more things to go wrong — and it also creates a bunch of accessibility issues that you need to then patch with JavaScript. So, when you do—

If you just replace the content, a screenreader user will not know that there's new content on the screen unless you announce that somehow, which you could do by either shifting focus to the `<h1>` element or adding an ARIA live region, but you need to make sure that's not there when you render the board or every single door will get read aloud in order, which is something my students often run into when they're trying to work through this.

And so I think a much more elegant approach is to actually use a multi-page app where you have dedicated "you won" and "you lost" pages, and you just redirect people to that page and then back again. The browser will automatically announce a new page and the title of that page when users get sent there. Or screenreaders will, rather. I'm sorry. And so in my experience, it's just… it's one of those, like, "the least moving parts is best" kind of things.

<i class="timecode">[00:58:42]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:58:44]</i> **Chris:** So let's very quickly track wins. So Ben, if you could, outside of the click listener, create a new variable called "found." And we will give it a default value of 0. This one is going to change, so we might want to use "let" for this one. So we're going to use this to just track the number of monsters that have been found. So now inside our click event listener, if we jump back up there, after we've checked that monsterId actually exists… 

<i class="timecode">[00:59:22]</i> **Ben:** Sorry, I was just organizing. 

<i class="timecode">[00:59:23]</i> **Chris:** Oh yeah, no, for sure. That's a good logical order.

Yeah, so we, you know, we check, we hit return. So after the return, we're going to go "found++." And this is going to increase our, like, the number of monsters found by one. So the first time you click a monster, it's gonna up it to 1. You found one monster. Second time, 2, and so on.

Now, before we actually render the new monster into the UI, we want to check if the "found" variable has a value that is equal to the length of our array… minus one. Actually, you know what? For simplicity… yeah, no, minus one. So because we're starting with… no, actually that's not the reason. I'm sorry, my bad. I'm messing this up because I'm an idiot. So our array has 12 items in it, but one of those is the sock. So they only need to find 11 monsters. So we're just checking, you know, "Have you found 11 monsters? Awesome."

So now if so, we are going to redirect them to one of the other two HTML files that I included in this project. So if they've found 11 monsters, they've won. So we can use window.location.href. Or just location.href, if you prefer. And so this is a read–write property. So it will tell you the current href if you read it, or you can set it to redirect users. And so we are going to redirect them to won.html. Like W-O-N. 

<i class="timecode">[01:01:13]</i> **Ben:** And I think… does that need a preceding slash? 

<i class="timecode">[01:01:16]</i> **Chris:** It shouldn't. Especially, you know, in your scenario where you're running a web server. It should just kind of, like, point them over there.

And so if you open up that file for a sec, Ben, I just want to show you kind of how that's set up. So the file's, like, super, super simple. And you could definitely snazz it up a little bit more.

But so I didn't include any CSS cause I'm lazy, but it's got a "You won" message, a "You found all the monsters. Congrats!" And then there is an…

I mean, I linked to a stylesheet and I really shouldn't have. I should've just inlined that. But so there is a link that points back to the index.html file that you can use to play again.

I included this "btn" or button class that I use to make the link look a little bit more buttonlike, since this is a game. And I know that is a kind of a hot-button issue, where some people say never do that, and some people say it's fine. I'm in camp "it's fine," but I'm just some random dude on the internet, so ignore me or not.

But what I love about this approach is it requires no JavaScript. So you win. You get shown a page. The screenreader will automatically announce you won, and then you can go through and read the content. And if you click that button or tab to that button and hit Enter or space bar to that link, it'll take you back to the index page, and you'll automatically get a new board shuffled. You don't have to, like, run some additional function to wipe the board and run it again. It's just really, really simple by breaking this up into multiple pages.

And I included a little, like, fun, like, Monsters Inc party GIF with some monsters dancing and some confetti just to make it a little bit more fun. I did use an empty alt on this because it is a purely decorative image and I didn't necessarily need it read aloud. I personally felt that it would—

You know, I guess there's two schools of thought. You could add a description of what's happening in the GIF <i class="brackets">[jif], or GIF [gif]</i> if you pronounce it wrong. I'm I'm just throwing fireballs at the end of this one, Ben.

<i class="timecode">[01:03:24]</i> **Ben:** Yeah, no, you're going to get, like, this stream shut down at the very end. 

<i class="timecode">[01:03:29]</i> **Chris:** Right? But yeah, so as a decorative image — I consider it a decorative image. I could see a strong argument for it being something that you'd want alt text for, so it could go either way on this one. So that's tracking wins.

<i class="timecode">[01:03:43]</i> **Ben:** Yes. And I've seen this GIF. Personally — personally — I would probably include an alt text. I think there's… I totally see the subjectiveness here, but I think one of the things I've come to learn lately, like you've mentioned as well, is, like, a lot of accessibility, a lot of providing the complete experience is providing the emotion and the tone.

<i class="timecode">[01:04:03]</i> **Chris:** Yeah.

<i class="timecode">[01:04:03]</i> **Ben:** And so something like, you know, "Characters from Monsters Inc partying" or something like that — I forget what the exact GIF is — but like something that would convey the tone as well as the literal depiction. 

<i class="timecode">[01:04:16]</i> **Chris:** Yeah, as I was talking through this one, I kind of had this lightbulb moment that I'd gotten it wrong. So I agree with you on that one.

<i class="timecode">[01:04:24]</i> **Ben:** We've actually got a question in the chat.

<i class="timecode">[01:04:26]</i> **Chris:** Sure!

<i class="timecode">[01:04:26]</i> **Ben:** lifeiscontent asks, "Why not set role="presentation"?" Is this something you'd like to tackle, or would you like me to tackle it?

<i class="timecode">[01:04:33]</i> **Chris:** I'd actually love if you pronounced. I just was reading the "pronounced GIF" thing. I would love if you handled this one because I have a very rough understanding of this one and I suspect you would do a much better job as well. 

<i class="timecode">[01:04:47]</i> **Ben:** role="presentation" is one of the, like, biggest misnomers, I think, of web dev, which is it doesn't mark something as presentational. It's not marking something as decorative. Instead, basically what it's doing is it's nullifying any semantics that exist on this thing. So the effect would not be that this image is hidden from screenreaders. Instead, the image would forget to be an image as far as screenreaders are concerned. So users wouldn't be told that this is an image. They might just be told whatever text is, like, inside the alt. If that. And so role="presentation" is absolutely, like, the number one misnomer type thing. You can do things like aria-hidden, for instance, equals "true." That would also work. But for images in particular, with image semantics, setting alt equals the empty string and aria-hidden="true" have the same effect on the accessibility tree, the representation of the page that's built for assistive technology. But I like using semantic-native ways of doing things like alt="" in this case for images. I prefer that over using ARIA because that's going to provide the most, like, interoperable experience across. 

<i class="timecode">[01:06:09]</i> **Chris:** I can't believe you said "interoperable" without, like, stumbling, because I goof on that word, like, every time. 

<i class="timecode">[01:06:15]</i> **Ben:** It's such a hard one! I'll tell you the one that took me ages to get, and this has absolutely nothing to do with web development, but it's word the "brewery," as in a place that brews beer. That was one that took me ages to not sound like a lawnmower that was failing to start, like "brur-rur-rur."

<i class="timecode">[01:06:34]</i> **Chris:** Yeah, that's a tough one too!

<i class="timecode">[01:06:36]</i> **Ben:** lifeiscontent asks, "Similarly to role="none"?" There is no role="none". That's… as far as I understand, that is not part of the spec. So, yeah. 

<i class="timecode">[01:06:47]</i> **Chris:** There's one last thing we haven't done with this project that we can do in about two seconds, and that is to track if someone loses. So if someone finds the sock, we probably want to show them that too.

<i class="timecode">[01:07:01]</i> **Ben:** Yes.

<i class="timecode">[01:07:01]</i> **Chris:** So if we just jump back over to index for a sec. .html. So before we even increase the "found++" bit we should check if… so the monsters…

You know, we have it saved, like, later, and I wonder if we should pull it up a little bit earlier. Basically we want to check the monster name and see if it equals "sock." So, you know, if it does, then we want to do that window.location.href trick again, but we want to send them to lost.html, which works exactly the same way. It's got an image, this time of, you know, the monster getting shaved and dusted and all that, with a "you lost" message and a link back to the index.html page to play again.

So now, we should have a functional game. We should test this out. This should actually work. Knowing your luck, Ben, you'll probably lose and I'm very sorry, but… 

<i class="timecode">[01:08:13]</i> **Ben:** Oh? Oh? Oh??

<i class="timecode">[01:08:16]</i> **Chris:** Oh, god! Oh, man!

<i class="timecode">[01:08:19]</i> **Ben:** Oh, no! 

<i class="timecode">[01:08:20]</i> **Chris:** Awwww! Boom. Wait, what? No, hold on. We did this wrong. 

<i class="timecode">[01:08:22]</i> **Ben:** No, there's something wrong. There's something wrong with our logic.

<i class="timecode">[01:08:25]</i> **Chris:** We didn't return. We gotta return after the redirect.

<i class="timecode">[01:08:31]</i> **Ben:** Oh, really?

<i class="timecode">[01:08:33]</i> **Chris:** Let's see. So if sock… yeah. It looked like there was a bit of a lag in the logic and so the other redirect was, like, firing too quick. We never want it to happen. Aw, that was so… 

<i class="timecode">[01:08:47]</i> **Ben:** So close! Almost had that! Okay. 

<i class="timecode">[01:08:50]</i> **Chris:** Right? The highs and the lows. 

<i class="timecode">[01:08:53]</i> **Ben:** That seems like, yep, sock.

<i class="timecode">[01:08:56]</i> **Chris:** Boom, there we go.

<i class="timecode">[01:08:57]</i> **Ben:** But we've got a nice little "Play again" button. 

<i class="timecode">[01:09:00]</i> **Chris:** Boom.

<i class="timecode">[01:09:01]</i> **Ben:** Yeah, boom.

<i class="timecode">[01:09:02]</i> **Chris:** So now we have a functional game. It's relatively simple. It's accessible. It will drive you nuts because it's, like, purely just luck. There's no, like, skill involved. Like, at least Minesweeper has some skill. This is 100% luck. But when you get it, it feels really good.

<i class="timecode">[01:09:23]</i> **Ben:** No! Not again! 

<i class="timecode">[01:09:26]</i> **Chris:** Noooo! So close!

But yeah! So that's the game.

One thing I didn't do that I will do is drop the, like, completed source code onto the GitHub repo that's linked to at gomakethings.com/some-antics/. There's that starting template there. I'll also include kind of the finished version so folks can play with that if they want. But yeah, I've got a bunch of kind of resources here. You know, some of the methods we've talked about, a bunch of other things that you may find useful, so. Yeah, that's it! That's the project! 

<i class="timecode">[01:10:03]</i> **Ben:** Thank you SO much for your time, Chris. Chris, is there anything you'd like to promote, anything you've got going on or you'd like to send people to?

<i class="timecode">[01:10:11]</i> **Chris:** Yeah, yeah, I just think the biggest thing… you know, if you kind of found this interesting and you want to dig more into stuff like this, every Monday through Friday I send out a really short, like, "read it while you drink your morning coffee or tea" newsletter. And you can sign up for that over at gomakethings.com or gomakethings.com/some-antics/. So that'd probably be the best way to find me, yell at me, tell me I pronounced "GIF" wrong, tell me I should be using spaces instead of tabs, all that sort of good stuff. 

<i class="timecode">[01:10:44]</i> **Ben:** Alright. And already we're getting other feedback, too. Like… Lumelomser? — Please let me know if I've mispronounced that. I probably have — says, "You should add type="button" to the buttons, because when the monsters grid is part of a form, every button will be interpreted as a submit button of the form, which is the default type of buttons."

<i class="timecode">[01:11:05]</i> **Chris:** I would agree with you if these were in a form, but where they are not, type="button" is redundant. That would just be kind of their native type. So if I were wrapping this in a form, I would, but in this particular case, I don't see a need to do that. 

<i class="timecode">[01:11:27]</i> **Ben:** Alright, yeah, totally.

Y'all, this has been great. Please go follow Chris on Twitter. Go subscribe to his newsletter. It's full of good stuff and you will learn a lot of great things.

While you're following people on Twitter, go follow Some Antics on Twitter. That's how you'll keep up to date with all the upcoming streams. Next Tuesday, I have whitep4nth3r — Salma Alam-Naylor — coming on. We're going to be — actually, also kind of in the same vibe of lightweight sites, we're going to be talking about picking the right tool for the job on the Jamstack. So if you're a fan of Jamstack, if you're a fan of web dev, if you're a fan of whitep4nth3r, you're going to want to be there. Same time, same place, right here.

Y'all, stick around. We'll find someone to raid. And Chris, thank you again so much for your time. 

<i class="timecode">[01:12:16]</i> **Chris:** Thanks for having me! This was a lot of fun, Ben. I appreciate it.

<i class="timecode">[01:12:22]</i> **Ben:** Absolutely. Bye, y'all!