---
title: Dive Into Bedrock Layout with Travis Waith-Mair
thumbnailTitle: Dive Into Bedrock Layout
hosts:
  - Ben Myers
  - Travis Waith-Mair
demo: https://codepen.io/bendmyers-the-typescripter/pen/eYeKNVY?editors=1100
upload: https://youtu.be/ZISlxQ6CX2A
tags:
  - CSS
---

Recently, [Travis Waith-Mair](https://twitter.com/travisWaithMair) has been converting his [Bedrock Layout](https://bedrock-layout.dev/) React component library into a CSS framework. Join us as Travis shares what he's learned along the way!

---

## More From Travis

- [Follow Travis on Twitter](https://twitter.com/travisWaithMair)
- [Read Travis's blog](https://non-traditional.dev/)
- [Watch Travis's streams on Twitch](https://twitch.tv/BuildingBedrockLayout)
- [Watch Travis's past streams](https://www.youtube.com/channel/UC6K0b007C9sEVyzfWCHyl_A/videos)

## Mentioned Links

- [Join the Lunch Dev Discord server](https://discord.gg/lunchdev)
- [Listen to Travis talk about Bedrock Layout on FSJam Podcast](https://fsjam.org/episodes/episode-54-bedrock-layout-with-travis-waith-mair)
- [Finding Your Online Dev Community](https://non-traditional.dev/finding-your-online-dev-community-42a7b8b5d819)
- [Every Layout on composition](https://every-layout.dev/rudiments/composition/)
- [Jen Simmons's talk on designing layouts with CSS](https://talks.jensimmons.com/Og7SzB)
- [Bedrock Layout's CSS-only version](https://bedrock-layout.dev/?path=/docs/css-only-a-css-only-version--page)
- [AVO methodology](https://chan.dev/posts/avo-a-bem-dialect-using-data-attributes/)
- [Open Props](https://open-props.style/)
- [Some Antics: Build a Component Library with SvelteKit, with Brittney Postma](https://youtu.be/eUslcJLGk9g)
- [Bedrock's center primitive](https://bedrock-layout.dev/?path=/docs/wrapper-components-center--api)
- [Bedrock's inline primitive](https://bedrock-layout.dev/?path=/docs/css-only-inline-css--align)
- [All Contributors](https://allcontributors.org)
- [Some Antics: Making a Page Builder with Next.js, Storybook, and Prismic, with Alex Trost](https://youtu.be/cllxHtdd4-g)
- [Heydon Pickering's Flexbox Holy Albatross talk](https://www.youtube.com/watch?v=RUyNJaoJH_k)
- [Bedrock Layout's GitHub repository](https://github.com/Bedrock-Layouts/Bedrock)

## Transcripts

<i class="timecode">[00:00:05]</i> **Ben:** Howdy, howdy, y'all! Starting a little early today, but we just had a wonderful, wonderful raid from Jason and friends. Thank you all so much for coming through. We're excited to have you! Welcome to Some Antics. If you're not familiar, Some Antics is a weekly stream where I bring on guests from around the web development and web design industries to teach something about building great user experiences for the web, with a focus on accessibility and core web technologies.

<i class="timecode">[00:00:33]</i> Today, I am joined by Travis Waith-Mair! Travis, hello! Welcome to Some Antics! 

<i class="timecode">[00:00:38]</i> **Travis:** I'm so excited to be here. 

<i class="timecode">[00:00:40]</i> **Ben:** I'm so excited to have you on! We have been friends for a while thanks to a Discord server that we're both in. I'll put a link to that in the chat there. Interesting! Does my bot not work? There we go! That works.

<i class="timecode">[00:00:55]</i> **Travis:** It's a little delayed.

<i class="timecode">[00:00:57]</i> **Ben:** Yeah, had to get the right command, apparently.

<i class="timecode">[00:01:00]</i> But yeah! So for folks who haven't seen you around, Travis, would you like to give yourself a bit of an introduction? 

<i class="timecode">[00:01:08]</i> **Travis:** Yeah. Well, I'll tell why I'm infamous. Yeah, no, I'm Travis Waith-Mair. I'm the creator of the Bedrock Layout primitives library, if you go over to bedrock-layout.dev, and it is… There's different ways to think about it. It's the foundational layout primitives. I also kind of sometimes call it the Lodash of layout. It is all about trying to create compositional layout and how to divide up your layout on the web into, like, these composable parts.

<i class="timecode">[00:01:44]</i> And I also blog over at non-tra… non-traditional.dev. You'd think I would know how to say my own URL! And yeah, I just love webdev. Really love the front end of the front end.

<i class="timecode">[00:02:04]</i> **Ben:** Mhmm.

<i class="timecode">[00:02:04]</i> **Travis:** That's kind of fun, that that's a thing now: "the front end of the front end." But anyway, yeah, I just do that. I usually… I tweet, and every Wednesday — I typically try to every Wednesday — I stream live on Twitch as I work on the Bedrock Layout library. This week, I'm actually going to be spending the tomorrow's morning stream, porting over Bedrock to SolidJS for the SolidHack that they're doing.

<i class="timecode">[00:02:36]</i> **Ben:** Good deal! I am putting a link to your stream in the chat. My bot is apparently incredibly wonky today, so I need to figure out what is going on there! 

<i class="timecode">[00:02:48]</i> **Travis:** And Anthony in the chat… like, yeah, I've been on a couple podcasts, but one of them definitely was FSJam.

<i class="timecode">[00:02:54]</i> **Ben:** Mhmm.

<i class="timecode">[00:02:54]</i> **Travis:** So if you wanna check out a previous conversation that I've had on Bedrock, go check that out.

<i class="timecode">[00:02:59]</i> **Ben:** Absolutely! So, yeah, let's, go ahead and start sharing screens so we can start showing off some links. So there we go! Y'all, I've already dropped Travis's, Twitter in the account. Go follow him, go show him the Some Antics love. Additionally, Travis blogs at non-traditional.dev. This is really great stuff. I really actually admire how well you're able to keep up your cadence on how often you blog, because that's just never been something I've been able to do. There's really, really thoughtful things on there. One blogpost of yours that I absolutely love is one about finding technical communities where you bring up the server that we're in. I'm wondering… oh, here it is! I'm a big fan of this one, so I'm gonna recommend folks give this a read.

<i class="timecode">[00:03:46]</i> Yeah, so today we are using Bedrock Layout, which is… you described it as a layout primitives library. So, yeah, can you kind of go into depth into what this is and why people might use it and what your philosophy was when putting this together?

<i class="timecode">[00:04:08]</i> **Travis:** Yeah, 100%. And I'm totally aware that, like, "primitives" is this, like, overused, like, term in the technology. We're always talking about "we're building our primitives" and "my primitives," and so I totally get that I'm, like, totally encroaching on the namespace here, but I think it speaks to what I'm trying to do here. And I… hey, I'm not the first person to ever, like, try to think of layout in this way. What I really try to do is just take everything I've learned and put it in the library.

<i class="timecode">[00:04:41]</i> And I'll give some context of where this all started. My previous position, I was actually, like, the lead of our design system team, and we were tasked to build a new design system from scratch. They used to have this kind of amalgamation of Bootstrap 3 with some other styles, and it had grown to the point where they were kind of using Bootstrap 3 but not really anymore. Anyway, so they were like, "Let's just start over. We're going to build a new one. We're going to do it in React." And for me, like, the one thing about, like, React that's really great, it's got this great compositional model. You compose all— It's all about, like, starting from the smallest and building things up. But then, like, when we do layouts on the web, we tend to, like, do it like how we were taught back in, like, 1999 when CSS was all about "Let's start from the very top, and let's think about, like, all the general styles. We'll work down." They kind of have two different, like, conflicting mental models in a way. 'Cause you start, like, from your most general styles first, and then you work down to your specific. But, like, components, you start specific and then you build up from there and you get to that general.

<i class="timecode">[00:05:52]</i> **Ben:** Interesting!

<i class="timecode">[00:05:53]</i> **Travis:** Anyway. So it was one of these things that made it really, sometimes, hard for me to, like, really get things working right, because every time you'd try to, like, refactor things out, all of a sudden your layout gets borked.

<i class="timecode">[00:06:05]</i> **Ben:** That makes sense. Yeah, okay.

<i class="timecode">[00:06:07]</i> **Travis:** Yeah. And so through that and through different things, like one—I have to say—like, probably my biggest inspiration that I've learned a lot was Heydon Pickering has great content about, like, using compositional layout. Other ones… it would definitely be Jen Simmons as well. Just through learning different things from them, like, really understood the concept like how do we actually take… break our layer down from, like, these one-offs like…

<i class="timecode">[00:06:42]</i> For example, like, if you're gonna build a card, we'd typically, what, like, create, like, a "card" class, right? And then we'd just throw everything to do with that styling into the "card" class, including the layout. But we're solving that same layout problem in more than just our "card" class. Sometimes we're solving those exact same things in different parts of our app.

<i class="timecode">[00:07:05]</i> So I was like, "How do we take that layout and move it into something reusable and composable?" And through those different resources, that's eventually kind of what created that. I created this in our design system at R1.

<i class="timecode">[00:07:24]</i> I then wanted to, like, make it open source. And I went through the bureaucracy there, and they were like, "No, we're not gonna open source our design system." That, you know, just saying the, like, corporate kind of things. They don't understand the benefits of, like, just putting it out there and, you know, not necessarily that other people are gonna be using it, but just writing in the open and the benefits that it gives you. And so trying to… This was, like, just before Christmas break. I was just kinda like… if you've heard of, like, I guess, revenge-driven development?

<i class="timecode">[00:08:01]</i> **Ben:** Oh, gosh!

<i class="timecode">[00:08:02]</i> **Travis:** In a way, I kind of had that mentality, where I'm just like, "Well, if I can't open source this, I'm gonna make an open source library that does all this stuff." And I just totally started, like, taking everything that, like, I was building with… what me and my team were building — I don't want to take all the credit there 'cause we were building together — but that we built, and I brought it over to this library called Bedrock. I decided I wanted to do it properly, so I needed a logo, so I went on Fiverr and said, "Hey, I want a logo. This is what I'm gonna call it," and this is what I got. And the rest is history!

<i class="timecode">[00:08:39]</i> **Ben:** Awesome! And so, Bedrock began as a React component library, but lately you've been going through this journey to turn it into a CSS framework, I understand. 

<i class="timecode">[00:08:50]</i> **Travis:** Yeah! 100%, that's it. And so it's not just built on React. It's also built using styled-components because that was a decision we made at R1, 'cause we knew that all new things that were also going to be using this design system, we'd also adopted styled-components as a technology stack as well. So, A, that was a decision that got ported over, but also if you're gonna double down, I like the kind of opinions that styled-components lets me do when building that in React. 

<i class="timecode">[00:09:26]</i> But that means you have to have a React app with styled-components, and if you can't have both of those things, then you can't use my library! And I started branching out, wanting to use Bedrock in other things. I wanted to play around with Svelte. I wanted to play around in just plain HTML. And it's like, now I can't do all my fun compositional layout kind of things because that's all sitting there in this library that requires not just React, but React and styled-components.

<i class="timecode">[00:09:53]</i> **Ben:** Mm!

<i class="timecode">[00:09:54]</i> **Travis:** So I started like, "Okay, if I'm going to move away, I'm not gonna… I don't wanna keep trying to port everything over to Vue, and I don't want to create—." This is after I'm already going to port this over to Solid. But, like, I don't want to make a new version of this for every single thing that I might be interested in just because I'm curious. And so it was like, if I'm gonna make an alternate kind of parallel version that I need to keep in sync, I got to go back to the basics and go back to CSS. And so ultimately, I created a CSS-only version. You can find it right there on the website if you scroll down. On the left-hand side. Yeah, "CSS Only." This is the kind of, I guess, landing page for the CSS framework version of it.

<i class="timecode">[00:10:46]</i> **Ben:** Good deal!

<i class="timecode">[00:10:47]</i> **Travis:** And my requirements for it were, like, I still want that, like, component-like feel where, like, I'm creating a component, I'm adding props… but, like, it still needs to be, like, pure CSS only and not have any other dependencies other than just bringing in whatever CSS we need. And that's really where the AVO method that Chantastic has really promoted has really made it do exactly that.

<i class="timecode">[00:11:18]</i> **Ben:** For those who are unfamiliar, I've just put the link in the chat, but AVO is Michael Chan's approach to CSS styles that really leverages data attributes, namely having a bunch of, like, key–value pairs in your, like, data attribute markup. It's really, really worth the read. I put the link in the chat. So I'm super excited to see that that has been a strong inspiration for the CSS version.

<i class="timecode">[00:11:48]</i> Okay! So I think, let's dive into starting to use this. You've given me a CodePen, which I appreciated off of the bat because already, like, there's at least five different dad jokes, like, in sight here. And so, yeah! Can you kind of walk us through what we're going to be building today?

<i class="timecode">[00:12:12]</i> **Travis:** Yeah, so I decided I gotta make… let's make a landing page. Let's make the thing that, like, every dev has to build in their life, which is a landing page to something. Doesn't matter if you're building an internal tool. You always have to build some type of landing page to something. And so I decided to create this fictional website called The Dad-a-base, which now I have to go make this website—

<i class="timecode">[00:12:37]</i> **Ben:** Yes!

<i class="timecode">[00:12:38]</i> **Travis:** —because, like, as soon as you name it, you have to create it. So that is probably in the future. 

<i class="timecode">[00:12:42]</i> **Ben:** That is unironically how Some Antics came about. Like, I came up with the name and I'm like, "This is too good. I have to do something with it." And now we're here a year later!

<i class="timecode">[00:12:54]</i> **Travis:** So, maybe we'll open source this and we'll put this out in the community. Maybe, like, everybody over in Some Antics can help me build The Dad-a-base, and we'll build it, like, with Eleventy or something like that. That would be awesome.

<i class="timecode">[00:13:07]</i> But yeah, so it's just, like, some type of, like, bloglike kind of experience where you can have a header, some navigation, and some, like, cards. Just things that you see, like, on every single landing page. And I've styled everything on here, but we haven't laid things out. And so that's where we're just going to jump.

<i class="timecode">[00:13:30]</i> **Ben:** Okay!

<i class="timecode">[00:13:31]</i> **Travis:** I also grabbed… Everything on here is pretty much styled mostly with the Open Props. 

<i class="timecode">[00:13:38]</i> **Ben:** Yes. I just played around with this for the first time two weeks ago on a stream I had with Brittney about Svelte! Let's see if… yes! It does work! Thank goodness. I'm now gonna just, like, bite my nails every time I use the bot because something about it is wonky. But yeah! So for folks who haven't seen this, this is Adam Argyle's CSS tool? Framework, perhaps? It basically gives you a bunch of CSS custom properties with some lovely sensible defaults that you can use to just assemble a look for any given element. 

<i class="timecode">[00:14:23]</i> **Travis:** Yeah, and especially here where, like, I didn't want to think about styles, but I needed something that, like, made sense that I could just build off of. This was perfect.

<i class="timecode">[00:14:34]</i> **Ben:** Absolutely.

<i class="timecode">[00:14:35]</i> **Travis:** Yeah. And so I've used Open Props for other resources for just that. Like, when it's like, I don't wanna think about, like, what styles or what color choices I have available. Let's just get something going. This 100% a great tool for that. 

<i class="timecode">[00:14:53]</i> **Ben:** Cool! So, uh…

<i class="timecode">[00:14:54]</i> Hey, thank you for the follow, mhuggins! Super appreciate having you around!

<i class="timecode">[00:15:00]</i> Yeah, so let's go ahead and, I guess, dive into it. So this has been totally un-laid out, as you mentioned. Everything just kind of exists in a column, regardless of actual hierarchies. So what are we going to do first? 

<i class="timecode">[00:15:18]</i> **Travis:** So, first of all, let's start with the whole experience in general. Like, this looks great on some of these kind of, like, medium-level screens. But if you were to put this… stretch this out onto, like, a 4K screen, like, the website starts looking wonky really quickly having, like, such a huge screen.

<i class="timecode">[00:15:41]</i> Usually the pattern you want to see here is you, you want to like clamp your content eventually, like, right in the middle and let kind of the outside grow. So what we're going to do just to do that… Let's wrap everything, let's put it in a `<div>`.

<i class="timecode">[00:16:00]</i> **Ben:** Alright!

<i class="timecode">[00:16:01]</i> **Travis:** And on that `<div>`… Oh, I'll let you catch up here.

<i class="timecode">[00:16:06]</i> **Ben:** Yep. Sorry, I had to send a quick chat real quick. Okay. So, yep, we've got ourselves a `<div>`.

<i class="timecode">[00:16:14]</i> **Travis:** And then we're going to use the "center" component for this. And so to do that, we just put in "data-bedrock-center."

<i class="timecode">[00:16:25]</i> **Ben:** Okay. data-bedrock, center. And it's worth calling out, you've already imported the styles—

<i class="timecode">[00:16:34]</i> **Travis:** Oh, no, sorry, it's not equals "center." Sorry, "data-bedrock-center." 

<i class="timecode">[00:16:38]</i> **Ben:** Oh, I see! I see. Okay.

<i class="timecode">[00:16:39]</i> **Travis:** Yeah.

<i class="timecode">[00:16:43]</i> So now, this `<div>` is now the equivalent of, like, having a center component. Like, if you were in the React version, you would actually have a `<Center>` component. This is the center. And then if you wanna… Yeah, exactly. So this is the React version. And if you go down below, there's "center.css." 

<i class="timecode">[00:17:04]</i> **Ben:** In here? 

<i class="timecode">[00:17:06]</i> **Travis:** On the left-hand side, under "CSS Only."

<i class="timecode">[00:17:08]</i> **Ben:** Oh, I see.

<i class="timecode">[00:17:09]</i> **Travis:** Just focus on that.

<i class="timecode">[00:17:11]</i> **Ben:** Got it. Okay.

<i class="timecode">[00:17:12]</i> **Travis:** So, what we wanna do is we wanna clamp it and use this "--maxWidth." So this is a custom property that we can do just for the inline style, so. 

<i class="timecode">[00:17:23]</i> **Ben:** Good deal. Where is your…? Here. Okay, so that would be style equals, and then we pass it "--maxWidth." 

<i class="timecode">[00:17:33]</i> **Travis:** And this can be any CSS length, so if you want to just put in one, that's fine, or there's some size properties that Bedrock also comes with.

<i class="timecode">[00:17:43]</i> **Ben:** Oh, okay!

<i class="timecode">[00:17:44]</i> **Travis:** And so you can do "var(--size-large)."

<i class="timecode">[00:17:47]</i> **Ben:** Okay?

<i class="timecode">[00:17:48]</i> **Travis:** And then you'll see, as you grow, it'll hold that off there and then… but it will still, as it shrinks, it will still take up the entire width, but eventually it will stop growing at a certain point in the center right there on the screen. 

<i class="timecode">[00:18:08]</i> **Ben:** Makes sense! Very cool. And then I'm guessing there's… we could do, like, "small," and that's probably… yeah, clamping it to roughly phone size, it seems. Okay! 

<i class="timecode">[00:18:21]</i> **Travis:** And that's good 'cause, like, sometimes you just want some arbitrary sizes that you know will look good, but then other times you want to be, like, very, like, fine-grained, so the max width lets you do whatever works out for the scenario you want it. Or you could use somebody else's. If we want to use Open Props' sizes, you could definitely use Open Props' size as well. Or bring your own, so. 

<i class="timecode">[00:18:45]</i> **Ben:** Okay! Very cool! 

<i class="timecode">[00:18:48]</i> **Travis:** So that's the first thing. Next thing, like… your typical, like, landing page, you always gotta have your big hero, your big, like… the first thing that everyone sees.

<i class="timecode">[00:18:58]</i> **Ben:** Yes.

<i class="timecode">[00:18:59]</i> **Travis:** So we're gonna kind of skip over that figure, that logo up in the front. We're gonna come back to that.

<i class="timecode">[00:19:05]</i> **Ben:** Okay!

<i class="timecode">[00:19:06]</i> **Travis:** But kind of that pattern that you want is you usually want this hero, oftentimes it takes up, like, a variation of, like, the view height — either, like, 100% or maybe 50% — and then you usually want some content, like, centered vertically inside of there.

<i class="timecode">[00:19:25]</i> So to do that, on the `<header>`, let's go ahead and add a "data-bedrock-cover."

<i class="timecode">[00:19:32]</i> **Ben:** Dash cover. Okay. 

<i class="timecode">[00:19:36]</i> **Travis:** Yeah. And just that alone should make it automatically take up the entire view height. In theory, it should.

<i class="timecode">[00:19:50]</i> **Ben:** In theory? Okay!

<i class="timecode">[00:19:52]</i> Does it need a value?

<i class="timecode">[00:19:55]</i> **Travis:** It shouldn't. Just by itself, it should automatically take up 100 view heights by default. I mean, it might need a refresh. It might have…

<i class="timecode">[00:20:04]</i> **Ben:** Yeah, let's save this and refresh and see what it does. Doesn't seem to be doing anything. 

<i class="timecode">[00:20:13]</i> **Travis:** Let me pull up the… final version that I made, just to make sure I'm telling you to put it on the right component. It should be on the `<header>`. "data-bedrock-cover"…

<i class="timecode">[00:20:31]</i> The fun of live TV, right? 

<i class="timecode">[00:20:32]</i> **Ben:** Yeah! Always, always, always. Let's … ope! I promise I can find… There we go. Okay. So… 

<i class="timecode">[00:20:41]</i> **Travis:** That "cover.css." 

<i class="timecode">[00:20:43]</i> **Ben:** Okay. Now let me try to bump up our audio, 'cause we're getting some feedback about that real quick.

<i class="timecode">[00:20:58]</i> Always the trouble of streams. Yeah… okay. I don't know that I'm gonna be able to bump it up any more. I'm sorry about that, y'all.

<i class="timecode">[00:21:08]</i> **Travis:** I'll try to speak louder.

<i class="timecode">[00:21:09]</i> **Ben:** There we go. Okay, so… I'm sorry, please forgive me. Where are going? Cover.

<i class="timecode">[00:21:15]</i> **Travis:** Go to "cover.css."

<i class="timecode">[00:21:17]</i> **Ben:** And then it says "cover-centered." 

<i class="timecode">[00:21:22]</i> **Travis:** Well, there's two parts to it. So there should be "cover," and then "cover-centered." So there's the… up at the very top. Yeah, "data-bedrock-cover."

<i class="timecode">[00:21:33]</i> **Ben:** Okay!

<i class="timecode">[00:21:35]</i> **Travis:** And that's what we have in there, right? 

<i class="timecode">[00:21:38]</i> **Ben:** Yeah! Okay. So… check this…

<i class="timecode">[00:21:44]</i> When in doubt, check the inspector!

<i class="timecode">[00:21:49]</i> So column… min height, default to 100 viewport height. Okay. 

<i class="timecode">[00:22:01]</i> **Travis:** This might be a bug, somehow, that got in there, but it should be in there without the min height. 

<i class="timecode">[00:22:06]</i> **Ben:** Alright, let's…

<i class="timecode">[00:22:07]</i> **Travis:** But let's go ahead and just add that min height.

<i class="timecode">[00:22:09]</i> **Ben:** Yeah, just in case! Okay. 

<i class="timecode">[00:22:12]</i> **Travis:** So, that's a custom property that you would set. The same thing the max width kind of mentality is like.

<i class="timecode">[00:22:23]</i> **Ben:** There we go.

<i class="timecode">[00:22:23]</i> **Travis:** Yeah, so there we go. Now, a lot of cases, a 100% view height is great, but I kinda like the 50 view height, so let's go ahead and change it to that.

<i class="timecode">[00:22:34]</i> **Ben:** Sounds good!

<i class="timecode">[00:22:36]</i> **Travis:** Personally.

<i class="timecode">[00:22:38]</i> And then, we kind of looked at that already, there's the part that… you usually want some content on top, something below, but then you want that content that gets centered vertically. And so let's wrap our `<h1>` and our `<p>` tag. Let's go ahead and put it in a `<div>`. 

<i class="timecode">[00:22:59]</i> **Ben:** You got it! 

<i class="timecode">[00:23:02]</i> **Travis:** And then let's put on there "data-bedrock-cover-centered." You already saw that on the other one.

<i class="timecode">[00:23:13]</i> **Ben:** Okay.

<i class="timecode">[00:23:13]</i> **Travis:** And you're gonna see that centers it.

<i class="timecode">[00:23:15]</i> Now, oftentimes we want things centered horizontally as well. So what makes this great is that we can also add the other data attribute that we've already learned about, which is the "data-bedrock-center."

<i class="timecode">[00:23:33]</i> **Ben:** Okay!

<i class="timecode">[00:23:34]</i> **Travis:** And that will automatically…

<i class="timecode">[00:23:37]</i> So we can do that compositional thing. And I know there's ways to do this, like if you were to go deep into it and, with flexbox, do things in one line. And that's cool but, like, what I really like about the compositional models, like, you're only thinking about one thing at a time, and you can, like, erase those opinions really easily. So if you're like, "No, we really don't want this horizontally centered anymore. Let's erase that." Or, "This section, we want to move some—," and you can just start moving things around and make that decision. And so yeah, sometimes that forces you to maybe be a little bit more verbose—

<i class="timecode">[00:24:13]</i> **Ben:** Mhmm.

<i class="timecode">[00:24:13]</i> **Travis:** —but oftentimes, at least the way I work, verbose usually tends to be easier to maintain than terse.

<i class="timecode">[00:24:20]</i> **Ben:** Yeah, absolutely. Yeah.

<i class="timecode">[00:24:24]</i> willcamino, good to have ya.

<i class="timecode">[00:24:26]</i> Alright. Yeah, so is there any more you wanted to do for this kind of cover section? 

<i class="timecode">[00:24:32]</i> **Travis:** No, not for that. Is there… does anybody have any questions in the chat on that? I just wanna make sure we're not ignoring. 

<i class="timecode">[00:24:38]</i> **Ben:** I haven't seen any yet, but yeah, if y'all have any questions, please feel free to drop it in the chat and we'll get back to that as soon as possible!

<i class="timecode">[00:24:47]</i> **Travis:** Awesome.

<i class="timecode">[00:24:49]</i> So another, like, common layout pattern is the putting one thing next to another, right? It's like the infamous, like, how do we put two things next to each other?

<i class="timecode">[00:25:00]</i> **Ben:** Mhmm.

<i class="timecode">[00:25:00]</i> **Travis:** And part of the reason, like, is because it's never just as simple as putting two things next to each other. Usually you want to put two things next to each other… and then something else, so.

<i class="timecode">[00:25:12]</i> **Ben:** Yeah.

<i class="timecode">[00:25:13]</i> **Travis:** Anthony's like, "I don't have a question, but the project title is amazing." The Dad-a-base!

<i class="timecode">[00:25:18]</i> **Ben:** Mhmm!

<i class="timecode">[00:25:19]</i> **Travis:** I wore an appropriate shirt for today. 

<i class="timecode">[00:25:23]</i> **Ben:** Incredible. I also just love, like, the alt text. "Travis Waith-Mair, a dad."

<i class="timecode">[00:25:31]</i> **Travis:** Well, like, it needs to be appropriate for what's going on!

<i class="timecode">[00:25:35]</i> **Ben:** Mhmm!

<i class="timecode">[00:25:35]</i> **Travis:** I can't just put my picture. I need to make sure it's apparent why MY picture is in the… 

<i class="timecode">[00:25:40]</i> **Ben:** I mean, here's the thing. It is "a parent."

<i class="timecode">[00:25:46]</i> <i class="brackets">[Travis laughs]</i>

<i class="timecode">[00:25:49]</i> **Travis:** Ohhh, man. See, we need to create this.

<i class="timecode">[00:25:53]</i> **Ben:** Mhmm.

<i class="timecode">[00:25:53]</i> **Travis:** This is gonna be made now.

<i class="timecode">[00:25:56]</i> Anyway, so… right now we have this `<aside>` and we have a main content. We wanna put the `<aside>` next to it, 'cause it's kind of like our navigation. And then we want the main content to flow to the right.

<i class="timecode">[00:26:12]</i> **Ben:** Okay, yeah!

<i class="timecode">[00:26:12]</i> **Travis:** So first of all, let's go ahead and wrap the `<aside>` and the `<main>` in its own `<div>`.

<i class="timecode">[00:26:16]</i> **Ben:** Okay! 

<i class="timecode">[00:26:19]</i> Not gonna spend a whole lot of time with the indentation or anything like that. So, `<aside>` and the `<main>`. Yeah, they're in a `<div>`. There we go, okay. 

<i class="timecode">[00:26:31]</i> **Travis:** What we're gonna do is we're gonna use the inline, 'cause what this is gonna allow us to do is… we can put things inline, but then it has a capability where we can say, hey, I want one top part of the content to stretch and fill and the rest to just fill up its… just how much it would normally take up, auto-fill-like.

<i class="timecode">[00:26:58]</i> So if you go… if you want to go look at the docs there, the part we're looking at is, there's two parts. There's the "stretch" and "stretch:index."

<i class="timecode">[00:27:07]</i> **Ben:** Okay.

<i class="timecode">[00:27:07]</i> **Travis:** On the left-hand side there.

<i class="timecode">[00:27:09]</i> **Ben:** I see!

<i class="timecode">[00:27:10]</i> **Travis:** Yeah, "stretch."

<i class="timecode">[00:27:11]</i> **Ben:** Okay.

<i class="timecode">[00:27:12]</i> **Travis:** So there's a couple ways we can do this. And we can even say, "Hey, we want the start to stretch," or "We want the end thing, content, to stretch." Or we can say all — "We just want them all to stretch and just fill up equally."

<i class="timecode">[00:27:28]</i> **Ben:** Okay.

<i class="timecode">[00:27:29]</i> **Travis:** And then there's also, if you just wanna get a little bit more fine-grained, you can stretch up to… if you've go to "stretch:index" on the left-hand side. You can… I need to change the sizes here on the documentation, 'cause now you can't see it anymore that it's stretching 'cause the window size shrinks here.

<i class="timecode">[00:27:53]</i> **Ben:** Mmmm!

<i class="timecode">[00:27:53]</i> **Travis:** So you can't actually take up the full width now. But the…

<i class="timecode">[00:27:59]</i> **Ben:** Does this help?

<i class="timecode">[00:27:59]</i> **Travis:** There's a stretch. I don't know.

<i class="timecode">[00:28:02]</i> **Ben:** Who knows?

<i class="timecode">[00:28:03]</i> **Travis:** It's kind of weird that it's not doing it. But yeah… the other… oh yeah, there we go. You can see like, "Hey, I want the zeroeth item to stretch," or the first, or the second. And so… as of right now, I've only added, like, five or so of these.

<i class="timecode">[00:28:21]</i> **Ben:** Okay!

<i class="timecode">[00:28:21]</i> **Travis:** Yeah, the first five, because that's typically, like, where I'VE run into a problem. But if anyone feels like they need to be able to stretch the tenth item, like, I'm totally open to a PR and extending that out. 

<i class="timecode">[00:28:37]</i> **Ben:** Mhmm. Yeah, 'cause at a certain point, you just run into it's just impossible to stack enough things. Like, what, the Bootstrap grid had, like, 12 or 16 columns, but you're not—

<i class="timecode">[00:28:48]</i> **Travis:** Yeah.

<i class="timecode">[00:28:48]</i> **Ben:** —supposed to, like, put things in all of those columns. There's only so much…

<i class="timecode">[00:28:52]</i> **Travis:** How many people were ever doing column 1? This was the only one column, like, made 12 individual items. Yeah, exactly.

<i class="timecode">[00:29:01]</i> So, yeah. So what we're gonna do is we're gonna use that stretching capability.

<i class="timecode">[00:29:04]</i> **Ben:** Okay.

<i class="timecode">[00:29:04]</i> **Travis:** So if we go "data-bedrock"…

<i class="timecode">[00:29:05]</i> **Ben:** And then "stretch?"

<i class="timecode">[00:29:07]</i> **Travis:** "inline."

<i class="timecode">[00:29:08]</i> **Ben:** Oh, "inline." Yes. Yes, yes. 

<i class="timecode">[00:29:11]</i> **Travis:** And then it's a "stretch" property, so we're going to do equal. And then it's "stretch:"… and let's do "end," 'cause we only have the two items. 

<i class="timecode">[00:29:24]</i> **Ben:** Okay, so this means that, like, the last item in the list—

<i class="timecode">[00:29:28]</i> **Travis:** Yep.

<i class="timecode">[00:29:28]</i> **Ben:** —will expand as much as it needs, or like as much as it can. Okay.

<i class="timecode">[00:29:34]</i> **Travis:** Exactly.

<i class="timecode">[00:29:36]</i> **Ben:** We've got Alex Trost in the chat who says, "Gosh, I love seeing these kinds of solutions to CSS. This is really exciting, Travis." Agreed! Also, Alex, thank you so much for resubscribing. I really appreciate it. 

<i class="timecode">[00:29:47]</i> **Travis:** Yeah, and by the way, like, Alex has been awesome. He made some great feedback to the website. If you go back to the homepage there.

<i class="timecode">[00:29:57]</i> **Ben:** Yes.

<i class="timecode">[00:30:00]</i> **Travis:** I just want to call this out. There's… if you go scroll all the way to the bottom on the landing page, yeah, you'll see Alex, Michael Chan. A few people who've made some significant contributions that GitHub doesn't recognize, or there's just no way to, like, put it in there, I made sure to call them out. Anthony made some major contributions that helped me get, like, the tutorial part working really well.

<i class="timecode">[00:30:26]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:27]</i> **Travis:** httpete there — he's the second person — he used to work over at Klaviyo, and they've adopted Bedrock as part of their design system. And he was a major person over there who did a lot of feedback and helping me understand what they needed to make it more general purpose. And then… the individual in the middle — his name's, like, escaping me all of a sudden. But I met him when I spoke at React India on composing layouts in React, and he basically, like, read through and fixed all the grammar on, like, most of the pages in the docs site. So it's amazing.

<i class="timecode">[00:31:09]</i> Anyway.

<i class="timecode">[00:31:10]</i> **Ben:** Gonna reply to a comment real quick. Yeah.

<i class="timecode">[00:31:15]</i> Anyways, yes, so let's, I guess, dive back into here.

<i class="timecode">[00:31:19]</i> **Travis:** So, right now, this is looking great, but you'll notice, like, you can probably assume I'm using flexbox under the hood, and flexbox by default stretches everything. But I kind of found, like, I don't usually want things to stretch by default, and I'm usually, like, overriding this. But in this case, we do want that left-hand column to stretch all the way down. So to do that, in that same catch where we did "stretch:end," if we do a space, we can throw in "align:stretch." 

<i class="timecode">[00:31:55]</i> **Ben:** Okay…?

<i class="timecode">[00:31:59]</i> **Travis:** Now we can get that.

<i class="timecode">[00:32:00]</i> **Ben:** Aw, that's sharp.

<i class="timecode">[00:32:05]</i> **Travis:** So it really gives a…

<i class="timecode">[00:32:09]</i> What I really like about, like, this AVO method is, like, if I had decided to, like, do the Tailwind style — and this is not a knock on Tailwind — but, like, if we threw everything in the classname, eventually, like, it gets really hard to see. These classnames can start to get lost.

<i class="timecode">[00:32:26]</i> **Ben:** Yeah!

<i class="timecode">[00:32:26]</i> **Travis:** What I really like about using AVO is, like, everything related to the inline for the most part — unless it's something, like, that requires input like the max width or the maximum item, and we're gonna see the gutter prop here, but you need something like… some type of input from the developer using it—

<i class="timecode">[00:32:46]</i> **Ben:** Mhmm.

<i class="timecode">[00:32:46]</i> **Travis:** It is really great, 'cause it kind of forces everything that's related to be together.

<i class="timecode">[00:32:51]</i> **Ben:** Yes!

<i class="timecode">[00:32:52]</i> **Travis:** And then you're like, "Oh, wait a minute. I don't want the stretch:end." You know exactly where to find it. You have to go find that "inline" data attribute and go remove it. 

<i class="timecode">[00:33:02]</i> **Ben:** Yeah. And it's also… like, everything stays tightly coupled without needing to be exceptionally verbose. 'Cause I could imagine — and I'm just gonna put this in, like, comments here — like I can imagine that, like, you would have… if you were to do this with, like, a class-based CSS framework, you could do something like, oh, "bedrock-inline-stretch" AND also the class "bedrock-inline-stretch-end, "bedrock-align-stretch," right? And then, like, what happens if someone applies "stretch-end" without applying all the other classes because they want…? Like, it's just not as tightly coupled, and so things become just really, really verbose in a way that maybe creates, like, less predictable results.

<i class="timecode">[00:33:58]</i> **Travis:** Exactly. And then the other thing, like, when you're… and you'll notice, like, this with Tailwind — once again, I'm not knocking on Tailwind. I think it's really great. But you have to kind of learn what the acronyms mean, because otherwise you're gonna have these classnames that become, lik,e a paragraph if everything was as verbose as you wrote it. So it would have been like "BIS," and you have to kind of learn what "BIS" means.

<i class="timecode">[00:34:20]</i> **Ben:** Yeah!

<i class="timecode">[00:34:21]</i> **Travis:** You know, things like that.

<i class="timecode">[00:34:24]</i> Anyway, so yeah, this is what I really like about this solution, and the AVO method again just really has made that same, like, composable feel, like, just seamlessly work in CSS all by itself. 

<i class="timecode">[00:34:38]</i> **Ben:** Thank you for the resubscription, Michael Chan!

<i class="timecode">[00:34:42]</i> **Travis:** Now, the other thing about this, though, is like, this is looking great on, like, a larger screen, but now, how do we make this more responsive? If we go tighten that up, that starts to look, like, really crappy.

<i class="timecode">[00:34:56]</i> **Ben:** Yes.

<i class="timecode">[00:34:56]</i> **Travis:** So, like, a typical thing we want to do is we want to then, like, move this over to, like, a stacking type of layout.

<i class="timecode">[00:35:01]</i> **Ben:** Mhmm.

<i class="timecode">[00:35:02]</i> **Travis:** So what's really cool about the inline is we can provide that inline style a property called the "--switchAt" property. 

<i class="timecode">[00:35:13]</i> **Ben:** Okay, so is that inside "inline" here? 

<i class="timecode">[00:35:16]</i> **Travis:** So not in there but, like, as a style equals.

<i class="timecode">[00:35:19]</i> **Ben:** Oh, I see.

<i class="timecode">[00:35:19]</i> **Travis:** Yeah, and we're gonna do "--switchAt." 

<i class="timecode">[00:35:22]</i> **Ben:** "switchAt" — and this is all camelcase, right? 

<i class="timecode">[00:35:25]</i> **Travis:** Yeah, correct. And now we can provide some type of value where we're like, "Once we get to a certain width, I want to switch to a stacking layout."

<i class="timecode">[00:35:32]</i> **Ben:** Ooh, okay!

<i class="timecode">[00:35:34]</i> **Travis:** So… I'm trying to remember what I put.

<i class="timecode">[00:35:37]</i> **Ben:** I'll put in something like 500 pixels for now, and we'll see if this works. Oh, does it have…? Oh, wait. There we go. Okay, so I'll put in something bigger than that, but okay! Yeah, let's say switch at, like, 800. We'll see if this does anything.

<i class="timecode">[00:36:01]</i> **Travis:** Let's see if I remember.

<i class="timecode">[00:36:05]</i> **Ben:** It's a little shorter than I would expect! Like, that doesn't look like 800 pixels to me, but okay. 

<i class="timecode">[00:36:12]</i> **Travis:** But it seems like it didn't update to your 800 pixels, like we have a lag or something. I don't know.

<i class="timecode">[00:36:17]</i> **Ben:** Yeah…

<i class="timecode">[00:36:20]</i> **Travis:** Oh, that's right. So besides the space ones, we also have some size values.

<i class="timecode">[00:36:31]</i> **Ben:** Okay!

<i class="timecode">[00:36:32]</i> **Travis:** And so we can do, instead of 800 pixels, let's do "var(--size-medium)."

<i class="timecode">[00:36:46]</i> **Ben:** Alright, and then… we'll see if that is gonna work. Okay, so shrink it down. Something about this seems… not quite working? Let's look at the markup again. Let's see what's going on here. So… could it be that the gutter doesn't exist yet? 

<i class="timecode">[00:37:15]</i> **Travis:** Oh, yeah! That was the other — that's the reason why. Sorry! I'm totally skipping over like… totally ignoring my own notes here.

<i class="timecode">[00:37:22]</i> **Ben:** Hey, you're good!

<i class="timecode">[00:37:24]</i> **Travis:** So yeah, with the inline there, we can also set a gutter here. And in fact, I'm gonna write that down as a note that that breaks if you don't have a gutter, 'cause we need a default value for that gutter. Anyway.

<i class="timecode">[00:37:41]</i> **Ben:** Mm.

<i class="timecode">[00:37:42]</i> **Travis:** See, this is what's great about, like, using it, and it's with use, you can break this and I can see how to fix this on a future stream.

<i class="timecode">[00:37:49]</i> **Ben:** Absolutely!

<i class="timecode">[00:37:51]</i> **Travis:** So let's fix that. "--switchAt breaks."

<i class="timecode">[00:37:58]</i> Okay. So for this gutter, like… typically you don't want things, like, always bumped up against each other. You want some type of gutter in between it.

<i class="timecode">[00:38:11]</i> **Ben:** Okay!

<i class="timecode">[00:38:12]</i> **Travis:** And so let's add on the inline a gather. Not… yeah, as a… right there. And where are my notes? 

<i class="timecode">[00:38:24]</i> **Ben:** So I'll try, like, 2em just to see what happens, see if it — ayyy! Okay, so that works, and then that seems to pop over. Okay, cool. And if I had said that this was, like, 800 pixels again, now that we have a working gutter, does this do the thing? 

<i class="timecode">[00:38:46]</i> Hard to tell, however…

<i class="timecode">[00:38:51]</i> **Travis:** Oh, yeah, for this one, it is supposed to be zero by default. That's why. Let's put the gutter 0. 

<i class="timecode">[00:39:00]</i> **Ben:** Okay!

<i class="timecode">[00:39:01]</i> **Travis:** Oh, yeah, I know why. I just realized why. Like, I'm also using the "@property" and I just totally realized why my demo's like doing this… and it's not working for you, is 'cause I'm also using, like, the properties, but that's not fully supported across the browsers.

<i class="timecode">[00:39:20]</i> **Ben:** Okay?

<i class="timecode">[00:39:20]</i> **Travis:** But Safari is apparently, like, using that.

<i class="timecode">[00:39:22]</i> **Ben:** Ohhhhh!

<i class="timecode">[00:39:22]</i> **Travis:** Like, under the hood, I have this "@property" and I'm defining gutters has a default value of zero pixels. So, if you don't define it, it will have zero pixel.

<i class="timecode">[00:39:32]</i> **Ben:** Mmm, okay.

<i class="timecode">[00:39:33]</i> **Travis:** So, yeah, let's go ahead and add that, then.

<i class="timecode">[00:39:38]</i> Did that, like… did that switch over? That should be, like, switching. 

<i class="timecode">[00:39:44]</i> **Ben:** Uh, it does switch over at a certain point. Does this…? This looks too small to be a medium, though, I would guess. 

<i class="timecode">[00:39:53]</i> **Travis:** Crazy. 

<i class="timecode">[00:39:55]</i> **Ben:** Yeah, let me try… instead of "0," let me explicitly give it a unit, maybe? We'll see. Could just be that this is a discrepancy between the browsers still, but okay? Interesting. 

<i class="timecode">[00:40:12]</i> **Travis:** That's true. If we refresh the page, like it… 'cause yeah, that's way too small to be a medium. What WAS the medium?

<i class="timecode">[00:40:26]</i> **Ben:** Alright. Alright. Oh, you've got me curious now! 

<i class="timecode">[00:40:30]</i> **Travis:** Yeah, I know! 100%.

<i class="timecode">[00:40:32]</i> And if anyone's curious how this is being done, like, there was a great talk by Heydon Pickering, like "Flexbox Albatross." Oh, I totally forgot the full name of the talk. But it was a fun, like, informative, fun talk the way Heydon Pickering does.

<i class="timecode">[00:40:57]</i> So we have the… 

<i class="timecode">[00:40:58]</i> **Ben:** These all look defined…

<i class="timecode">[00:41:02]</i> **Travis:** "size-medium," is that defined? Yeah. 

<i class="timecode">[00:41:11]</i> **Ben:** Yeah, that's defined. Interesting. Hm! What if…? I'm gonna try to pull this up in Safari and see if that changes how things look. 

<i class="timecode">[00:41:27]</i> So let's see…

<i class="timecode">[00:41:37]</i> Alright! Ooh, hello. It's giving me a little Cloudflare warning.

<i class="timecode">[00:41:44]</i> **Travis:** I get that from CodePen sometimes.

<i class="timecode">[00:41:45]</i> **Ben:** I am human! Allegedly! Alright. Uh, tell you what. I don't know that we're gonna necessarily get that part going.

<i class="timecode">[00:41:54]</i> **Travis:** Yeah.

<i class="timecode">[00:41:54]</i> **Ben:** But yeah.

<i class="timecode">[00:41:55]</i> **Travis:** So the idea with that, though, is that this should be able to switch and we can also— 

<i class="timecode">[00:41:58]</i> **Ben:** Oh my god. Uh, sorry, I just wanna shout out Kevin Powell! Kevin, thank you so much for the raid! 

<i class="timecode">[00:42:04]</i> Hello, friends! Today… so first of all, welcome to Some Antics. Some Antics is a weekly Twitch stream where I bring on guests from around web development and web design to teach something about building great user experiences for the web in a hands-on way, with a focus on accessibility and core web technologies. Since you're coming through from Kevin's group, I'm sure that this is the kind of stuff that y'all will be into!

<i class="timecode">[00:42:28]</i> Today, I'm joined by Travis Waith-Mair. Travis has built a wonderful CSS framework and component library called Bedrock Layout, and today we are seeing how this works, how this is built. We're playing around with the CSS framework specifically, just to see how you can lay out a whole page using just some really, really solid CSS primitives.

<i class="timecode">[00:42:51]</i> So, welcome, raiders. We are so, so excited to have you here. Thank you so much, Kevin, for the raid. Hopefully, and you can tell me if this is true, hopefully there was a shower of T-rex emojis? There might've been so many that maybe it was hard to tell because there should have been exactly 101 T-rexes, which is the better version of "101 Dalmatians."

<i class="timecode">[00:43:17]</i> **Travis:** I want to see the Disney streaming, Plus, spinoff.

<i class="timecode">[00:43:22]</i> **Ben:** "101 T-rexes?"

<i class="timecode">[00:43:25]</i> But welcome, Kevin Powell and friends. It's great to have you. We are currently having what seem to be some cross-browser issues based on laying out different elements side by side.

<i class="timecode">[00:43:38]</i> Trost is right. Cruella would've had a tougher time, 100%. Um, if anyone can…

<i class="timecode">[00:43:45]</i> **Travis:** I don't know, Cruella's pretty strong! I think she would have changed all 101.

<i class="timecode">[00:43:49]</i> **Ben:** All 101 T-rexes? You underestimate the power of a T-rex.

<i class="timecode">[00:43:58]</i> **Travis:** So yeah, let's go ahead and let's just go on…

<i class="timecode">[00:44:03]</i> **Ben:** Sure.

<i class="timecode">[00:44:03]</i> **Travis:** …and just chalk this up to me creating this in a single browser over the weekend, as well as not testing other browsers. 

<i class="timecode">[00:44:14]</i> **Ben:** Yeah, and what I'm gonna do is I'm actually gonna put a link to the pen in the chat. If y'all can find what might be happening and find a solution, feel free to propose it here. And if it's something that is an issue with Bedrock Layout itself, Travis welcomes pull requests.

<i class="timecode">[00:44:30]</i> **Travis:** 100%.

<i class="timecode">[00:44:32]</i> **Ben:** So, yeah, let's get some sleuthing eyes on this, I think! But yeah, in the meantime, let's move on. What do you want to do next? 

<i class="timecode">[00:44:40]</i> **Travis:** So let's jump over to the… I said we'd ignore these images.

<i class="timecode">[00:44:45]</i> **Ben:** Yes.

<i class="timecode">[00:44:46]</i> **Travis:** They're all wrapped in a `<figure>`. But let's start off with that first one. What we can do that's now fully supported really well is, let's get some aspect ratio on these images. This first one, the one up at the top, if we wrap that in a "data-bedrock-frame." 

<i class="timecode">[00:45:06]</i> **Ben:** Okay, can I apply that to the `<figure>` itself?

<i class="timecode">[00:45:08]</i> **Travis:** To the `<figure>`, yeah.

<i class="timecode">[00:45:09]</i> **Ben:** Okay.

<i class="timecode">[00:45:10]</i> **Travis:** And it's designed to be actually wrapping the image itself and not necessarily put right on the image. Because… you'll see it went away, 'cause what it does is it takes the image in it and it absolutely positions it inside and tacks it to that frame. So now that frame by itself has no inherent width or height.

<i class="timecode">[00:45:31]</i> **Ben:** Oh, okay!

<i class="timecode">[00:45:31]</i> **Travis:** And so we can go in and add a width and height, and the image's underlying aspect ratio won't change. And it will continue — and it will just crop where it needs to, depending on whatever we set it. Or we can also use ratio at this point and set, like, a 1:1 or whatever. So in this case we want a 1:1 ratio because we want it to be a square.

<i class="timecode">[00:45:54]</i> **Ben:** Okay!

<i class="timecode">[00:45:54]</i> **Travis:** So we would set that with custom… yeah, a style. Thank you. A CSS variable. A CSS custom property. That's the word I was looking for. And so it would just be "ratio." And you provide it, like, "1 / 1."

<i class="timecode">[00:46:14]</i> **Ben:** You got it!

<i class="timecode">[00:46:16]</i> **Travis:** And… yeah, perfect! And the class "logo" already is doing the border radius, so you can see it's cutting off all that whitespace automatically for us.

<i class="timecode">[00:46:28]</i> But now, we have something that's a 1:1 ratio down below with my image. And that's in the `<aside>`. But I don't want that in this case. I want more of a portrait ratio.

<i class="timecode">[00:46:42]</i> **Ben:** Okay!

<i class="timecode">[00:46:42]</i> **Travis:** But, like, the image has this, like, square. So let's go ahead and give it a ratio.

<i class="timecode">[00:46:49]</i> **Ben:** Alright! Do I need to add that frame? 

<i class="timecode">[00:46:52]</i> **Travis:** Oh, yes, yeah!

<i class="timecode">[00:46:53]</i> **Ben:** Okay.

<i class="timecode">[00:46:53]</i> **Travis:** Put the… We still need to have the frame, sorry.

<i class="timecode">[00:46:55]</i> **Ben:** Cool.

<i class="timecode">[00:46:55]</i> **Travis:** Thanks for reading my mind. 

<i class="timecode">[00:46:56]</i> **Ben:** Hey, you're good! I'm just gonna copy and paste the frame and the style from the first one here, and we can change the style here. Okay, so not 1:1, which is a square, but what ratio should we use instead?

<i class="timecode">[00:47:11]</i> **Travis:** So what I really liked is the… Open Props has what's called a portrait ratio, and he has some really great ratios in there. So if we go "var()," and it's "--ratio-portrait." 

<i class="timecode">[00:47:25]</i> **Ben:** Ratio portrait… okay!

<i class="timecode">[00:47:31]</i> Gotcha! 

<i class="timecode">[00:47:31]</i> **Travis:** I've also added some fun, like, borders around border radius that kind of gives it this like… gloopiness?

<i class="timecode">[00:47:39]</i> **Ben:** Yeah! It's a wobbly… almost looks like a guitar pick shape to me. 

<i class="timecode">[00:47:44]</i> **Travis:** But if you want to go over to, like the — what class was that using? I think it's the "avatar?" 

<i class="timecode">[00:47:51]</i> **Ben:** Probably. Ah, here we go. So "border-radius: var(--radius-blob-4)." And I recognize…

<i class="timecode">[00:47:56]</i> **Travis:** Yeah, we want to take that one off and you can, like, just see what it's actually doing.

<i class="timecode">[00:48:02]</i> **Ben:** Okay.

<i class="timecode">[00:48:02]</i> **Travis:** Yeah, like, it was a square before, now it's got that portrait ratio.

<i class="timecode">[00:48:05]</i> **Ben:** Yeahhh.

<i class="timecode">[00:48:06]</i> **Travis:** So despite the fact that the underlying image wasn't in this portrait ratio, we can use object-fit under the hood and do some different things. You can do, like, yeah. 16:9, whatever you want to do. 

<i class="timecode">[00:48:20]</i> **Ben:** This is, I think, a 4:1. Okay. But yes!

<i class="timecode">[00:48:25]</i> **Travis:** I like that. Let's keep that. Just… it's just my eyes staring at you. 

<i class="timecode">[00:48:29]</i> **Ben:** It haunts me in my dreams, Travis! I go to bed at night, and there—

<i class="timecode">[00:48:34]</i> **Travis:** I'm not doing my job if I'm not haunting your dreams!

<i class="timecode">[00:48:37]</i> **Ben:** Yeah, I go to bed and there, in my dreams, are the eyes of Travis Waith-Mair, watching out upon the infinite expanse, like the eyes of T.J. Eckleberg, the optometrist from "The Great Gatsby." It's Travis Waith-Mair going, "You're using Bedrock, yes?" 

<i class="timecode">[00:48:55]</i> **Travis:** Yeah, if you say "Bedrock" three times, I'll appear in a mirror behind you. Or if you say "web layout." I'm just kidding. It's like saying "Beetlejuice."

<i class="timecode">[00:49:05]</i> **Ben:** Yes! Alright, I am going to bring this back to ratio-portrait though. 

<i class="timecode">[00:49:13]</i> **Travis:** Awesome. So that's what the frame is really good for. So it allows you to keep whatever media or content inside — this works with, like, videos or whatever — it will force the aspect ratio to whatever ratio you want or just whatever. You can just set the height and width just like anything else, or let the parent set the height or width. Let it stretch and fill the content. So you have that flexibility to let the layout choose its height or width, or you can set a ratio explicitly.

<i class="timecode">[00:49:45]</i> **Ben:** Mm!

<i class="timecode">[00:49:47]</i> **Travis:** So, now the last thing I kinda want to go over here is, on the right-hand side we have this content. There's the top jokes

<i class="timecode">[00:49:57]</i> **Ben:** Yes. Which, they're top-notch, by the way! Top-notch.

<i class="timecode">[00:50:00]</i> **Travis:** They are. What's your favorite one so far in there?

<i class="timecode">[00:50:03]</i> **Ben:** Oh, man! Nosy pepper's pretty good! 

<i class="timecode">[00:50:07]</i> **Travis:** "He gets jalapeño business?" Yeah.

<i class="timecode">[00:50:11]</i> So, a typical layout with cards is we often wanna do this, like, grid of cards and as it gets smaller, then we want them to, like, collapse and move to other rows and optimize. And there's two really kind of good strategies for that, and it kinda depends on what the… it's just a matter of taste, if lack of better terms, of how you want to do that layout to be, what kind of atmosphere you want on your webpage, if it's fun or if it's more of kind of formal. So we're goinna do kind of more of, like, I kind of feel, is the more formal way, which is we're gonna do a grid.

<i class="timecode">[00:50:51]</i> **Ben:** Okay!

<i class="timecode">[00:50:51]</i> **Travis:** So around each of the `<article>`s…

<i class="timecode">[00:50:57]</i> So if we get to the Top Jokes, let's just start with there.

<i class="timecode">[00:51:01]</i> **Ben:** Yeah, okay.

<i class="timecode">[00:51:02]</i> **Travis:** And then around… right under Top Jokes, I left an empty space there. We can put a `<div>` there.

<i class="timecode">[00:51:07]</i> **Ben:** Cool, yeah. And then come down… here?

<i class="timecode">[00:51:13]</i> **Travis:** Yeah.

<i class="timecode">[00:51:15]</i> **Ben:** Cool.

<i class="timecode">[00:51:16]</i> **Travis:** Now in that `<div>`, we're gonna do "data-bedrock-grid."

<i class="timecode">[00:51:24]</i> And I don't believe you're gonna see anything yet, because what we need to do is we need to set, like, a minimum item width. We need to say, "Hey, what's the minimum width that these cards need to take up?"

<i class="timecode">[00:51:33]</i> **Ben:** Okay. So is this gonna be…?

<i class="timecode">[00:51:35]</i> **Travis:** It's gonna be on style, yeah.

<i class="timecode">[00:51:37]</i> **Ben:** Yeahhh, alright. 

<i class="timecode">[00:51:39]</i> **Travis:** And yeah, it's "--minItemWidth." 

<i class="timecode">[00:51:41]</i> **Ben:** "--minItemWidth." 

<i class="timecode">[00:51:45]</i> **Travis:** We want to make sure that's explicit that it's the items, the children, that we're setting, not the outside min width. So.

<i class="timecode">[00:51:53]</i> And which one did I choose? Let me remember. Let's do a size… 20rem.

<i class="timecode">[00:52:04]</i> **Ben:** Okay.

<i class="timecode">[00:52:04]</i> **Travis:** Let's just say 20rem on this one, actually. Just to show that you can do whatever you want.

<i class="timecode">[00:52:11]</i> **Ben:** Yeah!

<i class="timecode">[00:52:12]</i> **Travis:** And then what we also want is some gutters here, because they're, like, right up against each other. So let's go ahead and add a gutter.

<i class="timecode">[00:52:28]</i> And let's see here. Let's use… there's a space, and let's do…

<i class="timecode">[00:52:34]</i> Let me look at my notes here. "space-xl." So "var(--space-xl)." 

<i class="timecode">[00:52:40]</i> **Ben:** Like that?

<i class="timecode">[00:52:43]</i> Ayyyy, okay! That looks sharp!

<i class="timecode">[00:52:45]</i> **Travis:** So then, yeah, as you get smaller, you can see they go to a stacking layout. And we've kind of clamped it, but if we allowed it to keep growing, it will just keep trying to optimize as many columns as it can as long as it maintains at least that minimum item width.

<i class="timecode">[00:52:59]</i> **Ben:** Mhmm.

<i class="timecode">[00:53:00]</i> **Travis:** And then as you scroll down, though, you'll see, like, that last item only sits at one column. You have this blank space. Which is totally fine! Like, for certain types of layouts, that's what you want, especially, like, I feel like kinda more formal.

<i class="timecode">[00:53:13]</i> **Ben:** Yeah!

<i class="timecode">[00:53:13]</i> **Travis:** But if you want kind of a more fun, loosey-goosey style, what we want to do is use what I like to call the column drop, which is as it drops to a new row, the columns reset to new. Like, there's not a uniform column.

<i class="timecode">[00:53:29]</i> **Ben:** Okay?

<i class="timecode">[00:53:30]</i> **Travis:** And so we can actually just, like, copy what we did above. So just copy that `<div>`, that "data-bedrock-grid."

<i class="timecode">[00:53:37]</i> **Ben:** Okay.

<i class="timecode">[00:53:38]</i> **Travis:** And let's add that above the food jokes.

<i class="timecode">[00:53:44]</i> **Ben:** This needs… that…

<i class="timecode">[00:53:46]</i> **Travis:** Let's put the containing `<div>` right there, yep.

<i class="timecode">[00:53:50]</i> **Ben:** Okay.

<i class="timecode">[00:53:51]</i> **Travis:** And then if we go up and change "grid" to "column-drops."

<i class="timecode">[00:53:59]</i> **Ben:** Like this?

<i class="timecode">[00:53:59]</i> **Travis:** And then change the "minItemWidth" to "basis."

<i class="timecode">[00:54:03]</i> **Ben:** Like… oh, okay. Like that.

<i class="timecode">[00:54:06]</i> **Travis:** No, no, no, sorry. Change the actual word "minItemWidth" to "basis."

<i class="timecode">[00:54:10]</i> **Ben:** Ohhhh, I see. Okay. And so this… what is this doing here? 

<i class="timecode">[00:54:18]</i> **Travis:** It should… oh, "column-drop." In singular, not "drops." Sorry.

<i class="timecode">[00:54:23]</i> **Ben:** You're good!

<i class="timecode">[00:54:27]</i> Ooooh, okay! Okay! 

<i class="timecode">[00:54:29]</i> **Travis:** So now what it's doing is we're like, "Hey, I'm on a new row. As I drop to it, the columns reset." And so now there's only one column from this, 'cause that's the optimal amount. So once again, that is totally up to you.

<i class="timecode">[00:54:46]</i> We've kind of skipped over, like, doing the stack. The stack is probably the most common thing that we think of, but it's the one we always get rid of, so I kind of ignored it, and it's the easiest to understand.

<i class="timecode">[00:54:56]</i> **Ben:** Mhmm.

<i class="timecode">[00:54:56]</i> **Travis:** But you can see, like, now vertically, we just need some vertical space here. And we could just do that with like…

<i class="timecode">[00:55:03]</i> Maybe we'll just hurry and do it real quick.

<i class="timecode">[00:55:04]</i> **Ben:** Yeah!

<i class="timecode">[00:55:04]</i> **Travis:** Over the entire section here in the `<main>`. 

<i class="timecode">[00:55:09]</i> **Ben:** In the `<main>`.

<i class="timecode">[00:55:11]</i> **Travis:** The main component.

<i class="timecode">[00:55:12]</i> **Ben:** Here's the `<main>`. 

<i class="timecode">[00:55:13]</i> **Travis:** Yeah, let's just add "data-bedrock-stack." 

<i class="timecode">[00:55:16]</i> **Ben:** "data-bedrock-stack."

<i class="timecode">[00:55:19]</i> **Travis:** And let's give it a gutter of… what are they? XXL, so "space-xxl." 

<i class="timecode">[00:55:31]</i> **Ben:** "var(--space-xxl)." Okay. So everything presumably…

<i class="timecode">[00:55:37]</i> **Travis:** So between the top jokes—

<i class="timecode">[00:55:39]</i> **Ben:** Oh!

<i class="timecode">[00:55:39]</i> **Travis:** Yeah, now we have a bigger space right there.

<i class="timecode">[00:55:42]</i> **Ben:** Nice!

<i class="timecode">[00:55:44]</i> **Travis:** And then you can imagine doing that internally for each of the sections… can also be a stack of its own.

<i class="timecode">[00:55:51]</i> **Ben:** Mhmm.

<i class="timecode">[00:55:52]</i> **Travis:** And anyway, yeah, so.

<i class="timecode">[00:55:56]</i> **Ben:** Very cool!

<i class="timecode">[00:55:56]</i> **Travis:** That's not everything, but I think this kind of, like, catches a lot of, like, the idea of what Bedrock is designed to be. 

<i class="timecode">[00:56:05]</i> **Ben:** Absolutely. And it makes it very, just, explicit. And, you know, even when I was looking at, like, your styles, you're not applying a whole lot of styles. This isn't a system like Bootstrap where if you wanna tweak anything, like, you're just gonna have to go in and override everything. Like, it's a bunch of just really brief but powerful rules for assembling these layouts, and that's super cool, so major kudos. 

<i class="timecode">[00:56:34]</i> **Travis:** Awesome, thanks! And so far, like, I do get PRs for this, but not as much as I would love to get. So I would love people to just start using this and breaking it to death and saying, "Hey, this is breaking in this situation," and making this even more battle-tested. So 100%, like, please, everybody come out and start using it. Start accepting PRs. I'm probably the nicest, like, open-source maintainer in the world as far as things like that go. 

<i class="timecode">[00:57:07]</i> **Ben:** Let me drop a link to that GitHub in the chat there, because absolutely. Like, go provide feedback. This seems like one of those tools that starts off maybe as one thing, but then as more people start using it, you realize it, like, needs to slightly pivot, like, to be a more robust tool for more people in general. So, yeah, absolutely. Please, please go use this. Let Travis know what you think of it and what you've found and how it can be even better. And even better, like, contribute things. I'm sure… I guess, what is your favorite pull request you've received for this project? 

<i class="timecode">[00:57:50]</i> **Travis:** My favorite pull request was actually someone was like, "Hey, this is a component — the Reel component." I didn't create that. I've seen people use it, but I didn't really think of a good way to use it. Like, I've heard, like, of the concept of the horizontal scroll and, like, I really don't like to make something that is really just, like, a prop version of what already exists. Like, if it's gonna be a layout component, it needs to give you something that you can't get by just writing the CSS by yourself.

<i class="timecode">[00:58:24]</i> **Ben:** Mhmm.

<i class="timecode">[00:58:24]</i> **Travis:** And so, even though I'd seen it, I'd never really felt like it was really that helpful compared. But anyway, to make a long story short, someone said, "Hey, this is a component I use a lot." And we went back and forth a little bit and we got a really good, like, component that I think really, like, gives you some good value, but once again, without adding too much and without being something that I feel like has to be, like, overwritten and you end up regretting bringing it in.

<i class="timecode">[00:58:53]</i> **Ben:** Yes!

<i class="timecode">[00:58:53]</i> **Travis:** So. 

<i class="timecode">[00:58:54]</i> **Ben:** Yeah. Well, very cool! And also, just, what is something that you've learned or has surprised you from your time working on Bedrock? 

<i class="timecode">[00:59:05]</i> **Travis:** The thing that surprised me is like that…

<i class="timecode">[00:59:11]</i> Honestly, like, five years ago when I started this career change — I spent my career in finance, I was a compliance officer, and I made that career change. Like, I was just happy then just to be working in code and enjoying it. But just to see, like, making that like… putting myself out there and not having it be thrown back to my face, just how generally welcoming the community has been. I have not had anybody yet — knock on wood — be, like, toxic in any of these situations or like "This code sucks. This is the stupidest concept in the world." I've 100% had the opposite. Like, "I like what you're doing here. Let me help try to make it better. Here's some things you can do." And I would say that's been probably the coolest thing about this, is that, like, we always fear, like, the negative side, but there's actually much more positive out there, especially in the dev community and the open source community. 

<i class="timecode">[01:00:13]</i> **Ben:** Awesome. Well, Travis, thank you so much for hopping on! I wanna shout out places where folks can find you. So let me pu,t once more, the link to your Twitch, because you've been streaming your progress on building this very library! Is it…? It's "Layout" singular, I believe.

<i class="timecode">[01:00:34]</i> **Travis:** Yeah, BuildingBedrockLayout.

<i class="timecode">[01:00:37]</i> **Ben:** You also… you tweet. That's a good place to find you. Anywhere else I should…? I guess I'll share another link to your blog. And yeah, anything else I should send people to?

<i class="timecode">[01:00:52]</i> **Travis:** And honestly, like, just go to the Lunch.dev Discord server. I haven't felt the need to create my own Discord server 'cause, like, I'm always at Lunch Dev. And chances are, you'll probably get better feedback just jumping into Lunch Dev, if you have a question about Bedrock. If we ever get to the point where there's a big community, maybe we'll move over, but I'm just gonna, like, totally steal Michael Chan's community for a while until then!

<i class="timecode">[01:01:15]</i> **Ben:** Mhmm. Excellent!

<i class="timecode">[01:01:17]</i> Well, thank you again so much. So if you've enjoyed the stream and you'd like more like it, please go follow Some Antics on Twitter. Next week, we might not be streaming on Tuesday, but instead that Friday. On Friday at 2pm Central, we're gonna have Jim Drury on. Jim is going to be coming on to talk about accessibility for responsive design, so how do you balance responsive web design with accessibility, especially insofar as people who need to zoom and magnify the page. So if that's something you're interested in, absolutely follow Some Antics here on Twitch and on Twitter, and that's how you'll keep apprised of all the streams.

<i class="timecode">[01:02:02]</i> Thank you all so much for being here. Thank you, Travis. Stick around, chat. We are going to find someone to raid. See if we can keep these raids going. And yeah! See y'all, around! Bye, y'all!