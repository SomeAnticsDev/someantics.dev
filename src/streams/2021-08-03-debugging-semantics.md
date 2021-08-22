---
title: Debugging Semantic HTML Elements for Accessibility, with Ashlee Boyer
thumbnailTitle: Debugging Semantic HTML Elements for Accessibility
hosts:
  - Ben Myers
  - Ashlee Boyer
upload: https://youtu.be/-vAo0-puheM
---

The HTML we write can have a profound impact on the accessibility of our websites. But how do we verify that our markup is right? Join us on Some Antics as [Ashlee Boyer](https://twitter.com/ashleemboyer) helps us debug semantic HTML markup for accessibility!

## More From Ashlee

- [Follow Ashlee on Twitter](https://twitter.com/AshleeMBoyer)
- [Follow Ashlee on Twitch](https://twitch.tv/AshleeMBoyer)
- [Stay Semantic](https://staysemantic.com)

## Mentioned Links

- [Sara Soueidan on optimizing content for reader modes and RSS](https://www.sarasoueidan.com/blog/tips-for-reader-modes/)
- [List of HTML tags on W3Schools](https://www.w3schools.com/TAGS/default.ASP)
- [The `<button>` element on W3Schools](https://www.w3schools.com/TAGS/tag_button.asp)
- [Ashlee's ARIA cross-stitch](ttps://twitter.com/AshleeMBoyer/status/1325834993751437314)
- [Inclusively Hidden, by Scott O'Hara](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)
- [Hiding Content Responsibly, by Kitty Giraudel](https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/)
- [ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.2/)
- [The A11Y Project's resources](https://www.a11yproject.com/resources/)
- [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/)
- [a11ysupport.io](https://a11ysupport.io)

## Transcript

<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. It is another lovely Tuesday, and it's great to be back here with you all. I am joined today by the one and only Ashlee Boyer. Ashlee, how's it going? 

<i class="timecode">[00:00:12]</i> **Ashlee:** It's going well! I'm excited to be here.

<i class="timecode">[00:00:15]</i> **Ben:** I'm excited to have you on. I've been following you for — There is no good way to say "I've been following you for a while now," is there? No, but, like, you consistently put out some fantastic accessibility blogposts, and you've been — a while back, you did some streaming of your own. I'm super excited to have you on. Actually, kind of before we dive into what it is we're doing today, would you like to introduce yourself for anyone who might not have seen you around?

<i class="timecode">[00:00:45]</i> **Ashlee:** Yeah! So, I'm Ashlee. I'm from Indianapolis, Indiana. That's in my little Twitter bio there. I'm a frontend developer and I just started, got into my fourth year of working full time. So I have a software engineering degree from a small school in Terre Haute, Indiana, and probably no one has heard of that because they have never heard of it, except when people are like, "Oh, I've driven through there when I've driven through Indiana." And I'm like, "Of course you have." That's fine. It's fine. I'm not offended. And then, yeah, so I actually originally was going to be a chemical engineer, and then I wasn't really good at it so I tried out software and I love it. And, like, I never anticipated getting into web development—

<i class="timecode">[00:01:32]</i> **Ben:** Mhmm.

<i class="timecode">[00:01:32]</i> **Ashlee:** Because in college they teach you stuff like, at least where I went, a lot of Java stuff. But I'm really glad that I just kind of, like, fell into web development and then kinda sorta fell into web accessibility. Like, I just happened to have a cool teammate that taught me about, like, screenreaders and stuff. And then I was just like, immediately, I love it. I love learning about it and I love talking about it. So. 

<i class="timecode">[00:01:58]</i> **Ben:** Alright. Well, yeah, I didn't realize you were studying to be a chemical engineer at first. That's really cool. I came in to college undecided, and when I eventually landed on — It took me, like, a whole year to land on computer science for my degree. And when I announced that that was what I was doing, basically everyone in my communities were like, "Yeah, Ben, we know." 

<i class="timecode">[00:02:24]</i> **Ashlee:** I love that! I didn't even know that programming was a thing until I got to college, really. Like, I mean, it makes sense. I didn't think that, like, computers were just magic. I just didn't know how to code.

<i class="timecode">[00:02:36]</i> **Ben:** Yeah!

<i class="timecode">[00:02:36]</i> **Ashlee:** Until I was 19. 

<i class="timecode">[00:02:39]</i> **Ben:** Gotcha! Gotcha.

Well, right now we are not looking at any screens, but I think I'm gonna go ahead and just start showing screens, just so that, first of all, we can show off Ashlee's Twitter. Go follow Ashlee on Twitter if you aren't already. Consistently great accessibility advice.

<i class="timecode">[00:02:56]</i> **Ashlee:** Thank you!

<i class="timecode">[00:02:57]</i> **Ben:** Ashlee, you also blog. Here's your blog. Go subscribe to that. And you've probably got an RSS feed! 

<i class="timecode">[00:03:04]</i> **Ashlee:** I do! Very recent, actually! Like, a month and a half or two ago—

<i class="timecode">[00:03:12]</i> **Ben:** You know what?

<i class="timecode">[00:03:13]</i> **Ashlee:** Thanks to, uh… it is kind of right there, but it's very recent. Thanks to Sara Soueidan. I think that's how you say her name. 

<i class="timecode">[00:03:23]</i> **Ben:** Yeah! Yes, so she put together — and actually, let me find that, too. "RSS…" She put together a thing that was like, "Here's some advice for how do you make a website that actually, like, works well in an RSS reader." Where…? Here we go. I'll put that in the chat as well. I dunno, like, RSS is one of those things where I'm always like, I feel like I *should* do this, and I do have it on my blog, but I never really know how many people are actually reading content with RSS.

<i class="timecode">[00:04:05]</i> **Ashlee:** Mhmm.

<i class="timecode">[00:04:06]</i> **Ben:** But maybe I need to actually explore consuming RSS content more, you know. Maybe that would be good. 

<i class="timecode">[00:04:12]</i> **Ashlee:** Yeah! I think you would find yourself surprised at how many people use them, because I definitely was!

<i class="timecode">[00:04:19]</i> **Ben:** Okay!

<i class="timecode">[00:04:20]</i> **Ashlee:** I was like, "RSS? It's not… Like, people still use it?" Because I thought people didn't, and then they do! 

<i class="timecode">[00:04:26]</i> **Ben:** Yeah, no, I'd always heard the sentiment that, like, RSS died when Google Reader died. Like, what is that, like a decade ago now? But I don't know! RSS is making a resurgence.

Okay, so I've got one last tab up: StaySemantic.com. Uh, what is this? 

<i class="timecode">[00:04:48]</i> **Ashlee:** It is going to be a collection of demos of different kinds of elements and, like, do's and don'ts essentially that… They probably won't be framed that way. They're going to be more like "Here's what happens if you add this attribute. Here is why that's not helpful, and here's why something else is more helpful." It gives you more context of, like, how an element is semantically presented.

So, "Stay Semantic." I can't remember which tweet it was, but I added a hashtag that said "stay semantic, folks" or something. And it was supposed to be, like, a cutesy little sign-off. And then… I think it may have been Anna Cook that said, like, "Oh, it sounds like a book title." I was like, "Oh, okay, I think I have, like, a catchphrase now." So then I bought a domain, as we developers do.

<i class="timecode">[00:05:46]</i> **Ben:** Yeah!

<i class="timecode">[00:05:46]</i> **Ashlee:** Just kind of was like, "Ah, yeah, it's like $8, $12, whatever. I'll just buy it." That is how this was born, like, from some funny tweets.

<i class="timecode">[00:05:57]</i> **Ben:** Mhmm.

<i class="timecode">[00:05:57]</i> **Ashlee:** And that's the plan, because I think that's what a lot of people are interested in. Or at least what I get asked about a lot. Like, "what happens if I change this attribute?" And that's kind of what we're going to get into today. But I wanted to have stuff available that people could actually play around with. 

<i class="timecode">[00:06:16]</i> **Ben:** Yeah.

First of all, I can totally relate to being a domain name-driven developer. I came up with the name "Some Antics"

<i class="brackets">[Ashlee laughs]</i>

and I got SomeAntics.dev, and then I was like, "Wait, I actually need to do something with this now." And that's how the Twitch stream came about, was like, I needed a good project to come with a great domain name. 

<i class="timecode">[00:06:37]</i> **Ashlee:** Right! Right. That was kind of, like, more how this was. I was like, "I don't know exactly what I want to have here." But I've developed it since then.

<i class="timecode">[00:06:44]</i> **Ben:** Yes.

<i class="timecode">[00:06:45]</i> **Ashlee:** And I've been working on it and polishing and… well, I'm actually not in the polish phase. More like polishing the idea!

<i class="timecode">[00:06:51]</i> **Ben:** There we go.

<i class="timecode">[00:06:52]</i> **Ashlee:** Not necessarily the pages! <i class="brackets">[laughs]</i> 

<i class="timecode">[00:06:56]</i> **Ben:** Alright, so I'm going to ask a question, and I think this is going to be a broad one, but I'm very curious to get your insights here. Why do we care about semantics? And how, I guess, do… like, what is the process of semantics? Like, what does that mean to you? First of all, maybe I'll start with a different question. What does semantic markup mean to you? 

<i class="timecode">[00:07:22]</i> **Ashlee:** Semantic markup to me is like having the skeleton of a page. Like, I don't even think about styles a whole lot, at least CSS-specific. I do think about layout, for sure, 'cause it's definitely important when it comes to, like, the ordering of your headings and how you nest them and all of that, and you know, a typical website where you have the navbar at the top or something like that, which is super common. So, like, basic patterns of layouts that you think about.

But when I think of semantic markup, I'm only thinking about the HTML. And using elements as they were intended to be used is a really big one. And then where there are gaps and you don't have a specific element for everything, because when you start building widgets or components, whatever you call them, you are putting things together to make a composite thing. That's where the name "component" comes from. And sometimes there are gaps there where the semantics aren't there, and at that point, after you've tested it — you don't want to reach for ARIA stuff first — the ARIA is what you can add to your elements that you're making into a component, and that adds semantics so that it behaves the way you want it to behave.

And I'm often mostly thinking about this from a screenreader perspective because, you know, visually you can see something even if underlying it's not exactly what you might expect it to be. You can see things that you can have a different experience with, with a screenreader. So that's mostly the perspective I'm thinking about.

<i class="timecode">[00:09:07]</i> **Ben:** Okay!

<i class="timecode">[00:09:07]</i> **Ashlee:** And I often sit and think, "If I have my eyes closed, what do I want this to say, to make sure to give this an accurate representation of what's actually on the page? And what happens, or what is happening when I perform actions on this page?" That's often how I try to think about it.

<i class="timecode">[00:09:27]</i> **Ben:** Okay. So, yeah, you're coming up with the experience even, like, divorced from the visual appearance of this, but rather you're describing, like, the functionality or how I want this to be announced to assistive technologies. Very cool.

Yeah, so… there are something like a hundred different HTML tags, I want to say, right? And they all… it seems like they all have their own, like, particular use cases, right? And sometimes, those can feel very hyperspecific. So I would love to explore your process for determining which semantics to use in which different cases. So let's go ahead and dive into that. You have given me a CodePen that we're going to be working off of. And yeah, I guess, where's the best place to start with this?

<i class="timecode">[00:10:24]</i> **Ashlee:** Okay, so we can start with how I chose what demos that I wanted to put in here. And I forgot to mention in the context of this, actually, I think the tweet that I had that had the hashtag #StaySemantic, I think it was probably, like, a hot take about buttons and links back when the whole discussion that happened about TikTok's documentation on using a button versus a link. And, like, there was so much conversation on it and, you know, there was some tense stuff there, obviously, 'cause it's Twitter.

<i class="timecode">[00:10:55]</i> **Ben:** Mhmm.

<i class="timecode">[00:10:55]</i> **Ashlee:** But there were a lot of good conversations that happened, I think, and where people got to consider things that they had not considered before.

<i class="timecode">[00:11:03]</i> **Ben:** Mhmm.

<i class="timecode">[00:11:04]</i> **Ashlee:** And so I definitely wanted to start with buttons and links, like anchor elements, for sure, because those are things that people ask about so much. It's such a common topic. Like, do I use a button here? Do I use a link here? And that's definitely where I wanted to start.

But beyond that, what I did was I went to W3C — *W3Schools*. <i class="brackets">[chuckles]</i> "W3C." W3Schools, and they have a list there of all the HTML elements, and that was one place that I looked. And I also looked at MDN, which I think is also linked somewhere. It just depends on what I really want to look at. They both have different sets of information. This one is, like, I think this one's more condensed or something. I don't really remember. But I just kind of looked through this and I did learn or was, like, reminded of some elements that I don't commonly use, and that just, you know, sparks the ideas of it.

And I picked for the third set of demos that I want to do, 'cause I wanna do more than three—

<i class="timecode">[00:12:11]</i> **Ben:** Okay.

<i class="timecode">[00:12:11]</i> **Ashlee:** —but the third, currently, that I picked out is going to be the `<details>`/`<summary>` elements, 'cause I think those are probably so interesting in all the ways that you can use them—

<i class="timecode">[00:12:20]</i> **Ben:** Mhmm.

<i class="timecode">[00:12:21]</i> **Ashlee:** —and how they sound semantically, and things that you can add to those elements to make them sound semantically different. So that's where I really started, with, like, "HTML is the foundation here, so let's just take it back, all the way back to the foundations, and read about this."

So that's where I started. And then from there, you can click on the different tags they have and it will take you to the individual pages.

<i class="timecode">[00:12:48]</i> **Ben:** Okay.

<i class="timecode">[00:12:48]</i> **Ashlee:** So if we go back to W3Schools.

<i class="timecode">[00:12:52]</i> **Ben:** Yes.

<i class="timecode">[00:12:53]</i> **Ashlee:** And then click on the `<button>` tag. I think it's in alphabetical order. Yeah. 

<i class="timecode">[00:13:00]</i> **Ben:** There we go. I love the simple explanation of "defines a clickable button."

<i class="timecode">[00:13:07]</i> **Ashlee:** I love that stuff. It's like going to Google and looking for the definition of something, and then it uses, like, the adjective that relates—

<i class="timecode">[00:13:16]</i> **Ben:** Oh! Yes!

<i class="timecode">[00:13:16]</i> **Ashlee:** —in the definition or, like, vice versa. I'm like, "Okay. I don't know what that word means either." 

<i class="timecode">[00:13:22]</i> **Ben:** "Accessibility is the property of being accessible." Like, "Okay, thank you."

<i class="brackets">[Ashlee laughs]

"Like, I know…? I know. I figured as much."

[Ashlee laughs]</i>

<i class="timecode">[00:13:32]</i> **Ashlee:** Yeah, exactly!

So, this is, like, all about documentation reading, and I love reading documentation! And I like writing documentation, too, 'cause I'm a weirdo, but I love it. And so what I started doing here was reading about the different attributes, and this is how I picked the different sets of demos that I want to do.

In the page… I need to actually move my captions over so I can see your tabs better. Oh, here we go. Nice. <i class="brackets">[chuckles]</i>

So if you go to the CodePen tab.

<i class="timecode">[00:14:08]</i> **Ben:** Yep. There we go. 

<i class="timecode">[00:14:11]</i> **Ashlee:** Yes. So, pages. Yeah. And then demos, buttons.

So this is a Next.js app, and for anyone who doesn't know how this works, I think Gatsby apps also work like this. You have a `pages` directory, and however you nest things underneath there is going to be the routing of your app. So if you have pages and then index.js or .jsx, that's going to be the homepage. And if you have a folder like `demos` and an index.js page, there's going to be a page called `demos`. So we can show that really quick in the sidebar here.

<i class="timecode">[00:14:46]</i> **Ben:** Oh yeah, we can look at in the sidebar. Yep. 

<i class="timecode">[00:14:49]</i> **Ashlee:** So yeah, since we don't have to use the screenreader yet. But if we go to `demos`. 

<i class="timecode">[00:14:55]</i> **Ben:** There we go.

<i class="timecode">[00:14:55]</i> **Ashlee:** The code for that page will be there, and then it links to button demos. And we have a bunch there. So this is what it looks like currently. And this is a work in progress project, remember, everyone. I will NOT be taking feedback currently.

<i class="brackets">[both laugh]</i>

If you want to give feedback. It's totally fine. But this is a work in progress, like, massively work in progress, so. There's lots of research that is going into this, and I'm looking up resources that people can reference and it takes a lot of time and work, but it's fun.

<i class="timecode">[00:15:27]</i> **Ben:** Mhmm.

<i class="timecode">[00:15:28]</i> **Ashlee:** And I love it. I love this stuff. I wish I could get, like, paid to do this all the time, and I would just love it so much. But that's not really how the world works, so. <i class="brackets">[chuckles]</i> 

Yeah, so all of the attributes that you see in that page we were just looking at, that is how I picked some of these things. And it's not just about the attributes that we're looking at. There's also a lot of concepts that go with these attributes. So `autofocus` and `disabled` are both really good examples of, like, "Yes, you have the ability to do these things, but should you?" And also, a lot of the stuff that I want this website to be good for is to help guide people in making those decisions, because yes, there are cases where you can use a disabled button using the `disabled` property. There are cases where you can use the `autofocus` property. Maybe not for a button, but for an input sometimes.

<i class="timecode">[00:16:21]</i> **Ben:** Yes.

<i class="timecode">[00:16:23]</i> **Ashlee:** And there's so many considerations that come with that, and that's really what I want this to be for.

So, `autofocus` is a really fun one that I was enjoying exploring with here.

<i class="timecode">[00:16:34]</i> **Ben:** Wikipedia uses `autofocus` to take you into the search bar. Which, you do, like, skip past the different, like, language links, but let's be honest. The vast majority of people who are landing on the Wikipedia homepage are just immediately, like, hoping to, like, search for an article. Right? So this is one of those times where, like—

<i class="timecode">[00:16:54]</i> **Ashlee:** Exactly.

<i class="timecode">[00:16:54]</i> **Ben:** —yes, you do skip content, but you get to what 99% of users actually want more immediately.

<i class="timecode">[00:17:02]</i> **Ashlee:** Exactly! So you touched on a lot of those things. Like, what are you skipping? Is it worth skipping? Is there vital information here that's being skipped? If there is, then just don't skip it—

<i class="timecode">[00:17:16]</i> **Ben:** Mhmm.

<i class="timecode">[00:17:16]</i> **Ashlee:** —because the work that you have to do, like, if you have something have autofocus and you also want to describe something above, like, there's so much extra code that goes into that. And is it worth it really? There's more testing you have to do. And anything you do that's outside of the norm has more testing. You know, it has higher risk of being buggy and broken.

<i class="timecode">[00:17:36]</i> **Ben:** Mhmm.

<i class="timecode">[00:17:37]</i> **Ashlee:** And that's why you try to stick to the basics and then build on top of it. And that's why there's a rule of ARIA and it is "No ARIA is better than bad ARIA." That is in the documentation, and I love it. I even made a cross stitch of it.

<i class="timecode">[00:17:53]</i> **Ben:** Really? Oh, man.

<i class="timecode">[00:17:54]</i> **Ashlee:** I don't have it nearby. 

<i class="timecode">[00:17:55]</i> **Ben:** Is it on Twitter? Can I find it with Twitter? Oh, I disabled the search thing on Twitter. Never mind. I installed an extension that's like, "Please just hide the right-hand sidebar when I'm streaming," just because, I don't know, that always feels distracting.

<i class="timecode">[00:18:09]</i> **Ashlee:** I can totally find it.

<i class="timecode">[00:18:11]</i> **Ben:** Yes. If you find that and stick it in the chat, that would be excellent. 

<i class="timecode">[00:18:15]</i> **Ashlee:** I can probably find it pretty quick. 

<i class="timecode">[00:18:17]</i> **Ben:** Yeah. And it's funny that you're mentioning "should you disable a button," because that's actually the subject of next week's stream is, I've got Sandrina Pereira coming on. We're going to be exploring, like, whether disabling buttons in the first place is, like, a good user experience or what can be done to make that a better user experience. So if you're curious about that one particular micro-interaction, that's what next week is about. 

<i class="timecode">[00:18:42]</i> **Ashlee:** Oh, I hope I'm not still selling this! Oh my goodness, I am. Okay, please don't buy one of these, because I'm not making them right now, but there's still a link and it says three are available. But don't buy it, please! 

<i class="timecode">[00:18:56]</i> **Ben:** That's incredible. But, oh, that's such a lovely cross stitch. I love that. 

<i class="timecode">[00:19:02]</i> **Ashlee:** It needs ironed, but it's fine. I think I ironed it afterward, it was just like a plain little plastic cross stitch thing, and it had two leaves on it, and it was nice and simple. I don't have it nearby, though. I don't even remember where I've put it! I feel like I hid it from myself, but now it's really hidden. 

<i class="timecode">[00:19:20]</i> **Ben:** Oh, man!

I feel like that would be, like, really great for, like, your background. Like, hung up on your wall, like, right behind you, so that, like, you've always got, like, some accessibility reminders, like, just behind you. Bring it out passive-aggressively on Zoom calls with your coworkers, you know. It only conveniently appears whenever you've, like, got some coworkers with, some accessibility de— I don't know. That feels like a bad energy, perhaps.

<i class="brackets">[Ashlee laughs]</i>

<i class="timecode">[00:19:50]</i> **Ashlee:** I do definitely need to work on my streaming background.

<i class="timecode">[00:19:54]</i> **Ben:** There we go.

<i class="timecode">[00:19:54]</i> **Ashlee:** Like, it's very plain. My walls are a little dirty because it was, like, furniture and stuff. 

<i class="timecode">[00:20:00]</i> **Ben:** Ahh.

<i class="timecode">[00:20:02]</i> **Ashlee:** It's totally fine. I'll work on it eventually. 

<i class="timecode">[00:20:05]</i> **Ben:** Yeah. So, we've got a few demos.

Abdelrahman, thank you so much for the follow. I really appreciate that.

Yeah, let's go ahead, and I guess we've got a few demos. Which ones would you like to pop into first? 

<i class="timecode">[00:20:22]</i> **Ashlee:** Um, let's see. So the basic button one, that would be like super good intro for people. There's not a ton here. Oh, and each of these files has the text on the page. So if you click the basic button link in that tab. Each one of these are set up to have, like… I don't really want them to be that long in the text because I don't want people to be afraid.

<i class="timecode">[00:20:45]</i> **Ben:** Mm!

<i class="timecode">[00:20:45]</i> **Ashlee:** So I'm working with the layout of it, you know, that way people can have sections of, like, "Here are related resources" and people come back for that.

<i class="timecode">[00:20:53]</i> **Ben:** Yeah.

<i class="timecode">[00:20:53]</i> **Ashlee:** That way, they don't have to parse all of it.

But that is the basic layout that we have going here, is like, the top has descriptions and whatnot. And, like, some of them are mini blogposts, like the `autofocus` one and the `disabled` one. Those are definitely a little longer. And then at the bottom is the actual elements that we can interact with. So this one, see, it's kinda long.

<i class="timecode">[00:21:18]</i> **Ben:** Yeah. You weren't kidding! That's great! 

<i class="timecode">[00:21:22]</i> **Ashlee:** I had a lot of fun with it. This is why it's taking so long. Because I'm enjoying it a lot, doing a lot of reading and sharing. 

<i class="timecode">[00:21:30]</i> **Ben:** That's incredible. Michael Chan is in the chat saying he loves this site. I agree. I'm super excited for this to launch.

<i class="timecode">[00:21:36]</i> **Ashlee:** Thank you!

<i class="timecode">[00:21:37]</i> **Ben:** Yeah, so start with the basic button? 

<i class="timecode">[00:21:40]</i> **Ashlee:** Yeah, the basic one is just there so, you know, anyone who's brand new to using a screenreader or whatnot, they will get to hear what a button sounds like. And all it's going to say is "Click me, button." It's very simple. What screenreader are you using today? I guess we didn't super go over that.

<i class="timecode">[00:22:01]</i> **Ben:** So I'm on a Mac, so I'll be using VoiceOver. Let's see.

<i class="timecode">[00:22:06]</i> **Ashlee:** Okay.

<i class="timecode">[00:22:06]</i> **Ben:** It's in `demos`, and that'll get me the rest of the way.

<i class="timecode">[00:22:09]</i> **Ashlee:** Yes.

<i class="timecode">[00:22:10]</i> **Ben:** Got this pulled off into another tab.

<i class="timecode">[00:22:12]</i> **Ashlee:** Yes.

<i class="timecode">[00:22:13]</i> **Ben:** Just for folks in the audience, if you're ever using CodePen or CodeSandbox, accessibility testing gets really weird with those because of the way both of those platforms use frames to host your site. And so we've, Ashlee and I have just both found that it's just so much easier to do these demos when you pull this stuff out to another window.

<i class="timecode">[00:22:33]</i> **Ashlee:** Right.

<i class="timecode">[00:22:33]</i> **Ben:** So we will be bouncing back and forth between this window and CodePen. Uh, CodeSandbox? CodeSandbox. 

<i class="timecode">[00:22:42]</i> **Ashlee:** CodeSandbox. I always say "CodePen," because that's just where I started!

<i class="timecode">[00:22:46]</i> **Ben:** Yes!

Here we go! So, yeah, do you want me to just, I guess, roll over this button with VoiceOver? 

<i class="timecode">[00:22:55]</i> **Ashlee:** Yeah. If you just wanna, like, tab over to it or whatever controls you typically use.

<i class="timecode">[00:22:59]</i> **Ben:** Cool!

<i class="timecode">[00:22:59]</i> **Ashlee:** Everyone does it differently, I think. 

<i class="timecode">[00:23:01]</i> **Ben:** So I'm on a Mac, so I'm turning on VoiceOver. And the way I'm going to do this is I'm going to hold Command and press my Touch ID button three times. That's one of the ways you can turn it on. There's, like, five different ways you can activate VoiceOver.

<i class="timecode">[00:23:20]</i> **VoiceOver:** Voiceover on Chrome. HTTP— Entering web content. Visited link, Demos, list, 2 items. Visited link, Buttons. Click me, button, main. You are currently on a button. To click this button, press Control-Option-Space. 

<i class="timecode">[00:23:35]</i> **Ben:** Alright!

<i class="timecode">[00:23:36]</i> **Ashlee:** That's interesting. It said "button, main." Is it because it's in a `<main>` element? 

<i class="timecode">[00:23:40]</i> **Ben:** Yeah! Yeah.

<i class="timecode">[00:23:42]</i> **Ashlee:** Interesting.

<i class="timecode">[00:23:43]</i> **Ben:** 'Cause, and it would have basically like this… You know what? Let me nuke VoiceOver.

<i class="timecode">[00:23:50]</i> **VoiceOver:** VoiceOver off.

<i class="timecode">[00:23:51]</i> **Ben:** Yeah. If we inspect the markup on this. Yeah, so we were in the `<nav>` when we were up here on these—

<i class="timecode">[00:24:02]</i> **Ashlee:** Ohhh, yeah!

<i class="timecode">[00:24:02]</i> **Ben:** And then the button is the first thing that we focus on after hopping into the `<main>`.

<i class="timecode">[00:24:07]</i> **Ashlee:** Yes.

<i class="timecode">[00:24:07]</i> **Ben:** So it's like, "Hey, just so you know, there's a `<main>`. You're in a `<main>` now."

<i class="timecode">[00:24:11]</i> **Ashlee:** Okay!

<i class="timecode">[00:24:12]</i> **Ben:** Had we gone to the `<h1>` first, then it would have said, like, "h1" or "heading level 1, A Basic Button, main." 

<i class="timecode">[00:24:22]</i> **Ashlee:** Yeah, okay. I forgot about that. Nice! See, I love this so much.

<i class="timecode">[00:24:26]</i> **Ben:** Mhmm!

<i class="timecode">[00:24:26]</i> **Ashlee:** This is so much fun. I need to hang out with more accessibility people in my free time.

<i class="timecode">[00:24:30]</i> **Ben:** <i class="brackets">[Ben laughs]</i>

We just, we need to get, like, we just need to have a big accessibility advocate party. That's what we need to have. 

<i class="timecode">[00:24:39]</i> **Ashlee:** That'd be awesome. I would love that.

<i class="timecode">[00:24:41]</i> **Ben:** I can just imagine the Jackbox, like playing Quiplash. Just imagine the answers. It's like, how many answers can we just put "Overlays" for?

<i class="brackets">[Ashlee laughs]</i>

<i class="timecode">[00:24:56]</i> **Ashlee:** Oh my gosh, that's so great! I haven't played that game in forever. I love that. Accessibility party!

<i class="timecode">[00:25:01]</i> **Ben:** Yup. Alright. 

Yeah, so that was a pretty quick demo of a button. We didn't actually do a whole lot with this button.

Oh, Travis is asking, "So does it say 'main' the first time and not after? For instance, if you go to the h1 and then the button, will it say 'main' for both?"

It should just say "main" once.

<i class="timecode">[00:25:22]</i> **Ashlee:** Yeah. 

<i class="timecode">[00:25:22]</i> **VoiceOver:** VoiceOver on Chrome. Entering web content. Click me, button, main.

<i class="timecode">[00:25:27]</i> **Ben:** Let me start it—

<i class="timecode">[00:25:28]</i> **VoiceOver:** You are current— visited link, Demos. Visited link, Buttons. Chrome— End of list. End of navigation. Main. You are currently on a main. Heading level 1, A Basic Button. This is a plain button element with no properties added to it. Nothing happens when it is activated. When focused, your screenreader will say, "Click me, button." Click me, button. You are currently on a— 

<i class="timecode">[00:25:48]</i> **Ben:** Yeah.

<i class="timecode">[00:25:49]</i> **VoiceOver:** VoiceOver off.

<i class="timecode">[00:25:51]</i> **Ben:** So the, like, that VoiceOver experience, like it just tacking "main" on into the end, that's an indication that you've entered the `<main>`. 

<i class="timecode">[00:26:01]</i> **Ashlee:** You'd probably get an exit also. Like, maybe not for that specific element, but I do know it happens on some elements. 

<i class="timecode">[00:26:08]</i> **Ben:** Yes. "End of main" or something like that. Yeah. Very cool. 

<i class="timecode">[00:26:15]</i> **Ashlee:** Yes, I think it happens for `<section>`s. 

<i class="timecode">[00:26:17]</i> **Ben:** That would make sense. I think lists as well do that. 

<i class="timecode">[00:26:20]</i> **Ashlee:** Yes. Yes. See, this is fun, 'cause, like, it's impossible to memorize all of this stuff. I just want to point it out.

<i class="timecode">[00:26:29]</i> **Ben:** Mhmm.

<i class="timecode">[00:26:29]</i> **Ashlee:** Like… it's just like code. Like, we don't memorize every single function that we need. You know, sometimes we've got to google it and search it and just be reminded of how something behaves and then we're like, "Oh, yeah! That's how it works." And accessibility isn't really that different. It's another facet of development. It's extremely important. And you learn how to learn things and you can apply those skills to accessibility as well as just as you learn code stuff. 

<i class="timecode">[00:26:55]</i> **Ben:** Yes, absolutely. I think that's such a great point, because accessibility can be one of those things that, especially looking in, can feel very overwhelming and, I don't know, sometimes it's just really good to know, like, yes, you can go to Google or you can just kind of go back to the basics and be like, just test this, run your screenreader over this and figure out what it's actually doing—

<i class="timecode">[00:27:20]</i> **Ashlee:** Mhmm!

<i class="timecode">[00:27:21]</i> **Ben:** —and figure out then, like, hey, how can I improve it from there. You don't have to know everything. You just have to know where you find things. 

<i class="timecode">[00:27:29]</i> **Ashlee:** Right! And that's kind of the process of these demos, too. Like, when I build something as a frontend developer, if I'm building a component, I start very bare-bones, very basic. I need to know "How does this, like, work out of the box? How does it sound out of the box?"

And my dog is chewing a bone! You guys can probably hear it! Geez! How rude!

<i class="brackets">[both laugh]</i>

So I start very bare-bones and, like, I slowly add to stuff. And that's how I learn things. Like, I'll add something and then I need to know "Is it working differently? How exactly is it doing it?" So I have a very, very iterative approach. I'm a very systematic person anyways so, like, that's part of just how my brain needs to do things to process what I'm doing.

<i class="timecode">[00:28:17]</i> **Ben:** Mhmm.

<i class="timecode">[00:28:18]</i> **Ashlee:** But it's really helpful, I have found, when learning something new. Like, add one thing. What changed? If I add something different, how does it change in a different way than the other thing that I added? Why does it do that? And you just got to do googling from there. Like, there's so much googling that you have to do when you learn something, and it's okay to not know something also. Like, it's okay to say "I don't know, but I'll learn." Like, that's the important part is the effort that you put into learning it and being transparent about that. 

<i class="timecode">[00:28:49]</i> **Ben:** Mhmm. And then I think the other half of that is, like, acknowledging that, like, you're not going to come at a perfect solution. You're… that's just… there's no such thing as a perfect solution all the time, and so being willing to perform, like, user testing where possible, right, to figure out what are the gaps that people are encountering and when is the theoretically correct answer actually hindering the user experience as well.

<i class="timecode">[00:29:17]</i> **Ashlee:** Right! And another, like, philosophical thing that we've got here that this gets into is that disabled people often have conflicting access needs.

<i class="timecode">[00:29:28]</i> **Ben:** Yes.

<i class="timecode">[00:29:29]</i> **Ashlee:** You know? And so that's where personalization is really important. So when it comes to things like captions, we need them because we both can't really hear! So we need captions! But that can be really distracting to other people who are just looking at that and they can't focus on what's going on. So the personalization there is enabling people to turn those on and off on their own and empowering people to do what they need to be able to do. 

<i class="timecode">[00:29:59]</i> **Ben:** Mhmm. Another example of those kind of conflicting accessibility needs is actually color contrast, right? Because if you are low-vision or if you're colorblind, like, having high contrast is usually beneficial. But if contrast is too high, this could be overstimulating to, for instance, autistic people. So, yeah, that personalization aspect is huge.

So, alright! What's the next thing we're doing, Ashlee? 

<i class="timecode">[00:30:30]</i> **Ashlee:** So if you go back a page… They're in alphabetical order in the folder so, like, that's not really, like, the logical order that I'm taking. And I actually did make these a little bit… I do not want to talk about autofocus first. I'll have to move that.

Let's talk about disabling buttons, because that is such a fascinating topic that I did not know a lot about until I started doing more research. So disabled buttons: when you use the `disabled` property on a button, it removes it from the… I'm losing the words. The, um…

<i class="timecode">[00:31:09]</i> **Ben:** Focus order?

<i class="timecode">[00:31:11]</i> **Ashlee:** Yeah. The tab order. I don't think "order" is the word I'm looking for.

<i class="timecode">[00:31:14]</i> **Ben:** Sure.

<i class="timecode">[00:31:14]</i> **Ashlee:** But it removes it from the list of things that are tabbable in a document, basically. And so, if you have a form and the button, like, to save it or submit it is disabled because the form isn't valid, you can't really get to that knowledge, like, just by tabbing through the form.

<i class="timecode">[00:31:39]</i> **Ben:** Mhmm.

<i class="timecode">[00:31:39]</i> **Ashlee:** And so if someone can't see that it's disabled or that the button text is different because it's not reachable by keyboard, then there's context that's being missed out on. So that's where it's a little bit more work. It's not a ton of work. It's very valuable work. You use something like `aria-disabled` instead, and you'd change the styles of the button. And what I learned a lot about this is, like, when you show error messages, and that instead of disabling a button, let the button be clicked. Show the error messages. Put that in, like, in a live region so that it's presented whenever the form is submitted, and just making sure that all of the words that you have there make sense and they're very informative so that people know exactly what's happening, as if you had your eyes closed and, like, someone was just saying it to you, which feels kind of ironic to say as a deaf person!

<i class="timecode">[00:32:39]</i> **Ben:** Mhmm!

<i class="timecode">[00:32:40]</i> **Ashlee:** Because if I close my eyes, I cannot understand anything at all unless I have headphones on. So that's why I have headphones on.

But that is a much better and usable practice for people, especially people who use assistive technologies to navigate pages or to, like, listen to a screenreader to have it presented to them. And that's the approach that I was using with that. So if you hit the Save — I don't know why it doesn't go away. The message. It should be in an `aria-live` `<span>`. 

<i class="timecode">[00:33:16]</i> **Ben:** Let's do this over here on our other tabs. So it's "disabled," is what it's called.

By the way, I wanted to shout out Alan. Alan, thank you so much for subscribing. Just so y'all know, subscribing, that sub money is going towards me funding closed captions for these streams so that I can get the uploads out faster. So just so you know, like, if you subscribe, that's the cause that it's going to, is ensuring that I can sustainably and quickly turn around the recordings with captions and keep them accessible for all. So thank you all for subscribing.

Alright, let me turn on VoiceOver, and then we'll go ahead and do this button.

<i class="timecode">[00:34:06]</i> **VoiceOver:** Voiceover on Chrome. HTTPS. 

<i class="timecode">[00:34:09]</i> **Ben:** And I'm just gonna skip down closer to the end.

<i class="timecode">[00:34:12]</i> **VoiceOver:** —is can, unselected. You are currently on a text—

<i class="timecode">[00:34:16]</i> **Ben:** Okay, so first of all, we're going to see that, like, I cannot tab to — Let me move this over a bit. I can't tab to the "Click me" button. So that's the first thing that we're going to see. The second thing we're going to see is what happens when I click the "Save Changes" button.

<i class="timecode">[00:34:34]</i> **VoiceOver:** Link, live regions. Save Changes, dimmed button. Chrome has new window. You are currently on a— 

<i class="timecode">[00:34:40]</i> **Ben:** Okay, so it's saying that this is a dimmed button. Why is it saying it's dimmed? 

<i class="timecode">[00:34:46]</i> **Ashlee:** I'm pretty sure that comes from the `aria-disabled` property because… I can't remember exactly what it was, but different screenreaders present it differently.

<i class="timecode">[00:34:58]</i> **Ben:** Mhmm.

<i class="timecode">[00:34:59]</i> **Ashlee:** So VoiceOver says "dimmed" and I think a different screenreader — I don't remember which one exactly, 'cause it's probably on Windows and I don't have Windows so I haven't done a lot of practice with it, but it uses a different word. Which is a good thing to bring up that all screenreaders work differently and some screenreaders cost money. A lot of money, depending on where you're from. Like what country you're from, even. 

<i class="timecode">[00:35:22]</i> **Ben:** We're not pointing fingers, *JAWS.* 

<i class="timecode">[00:35:26]</i> **Ashlee:** Nope, not pointing fingers! And they can be complex to use, just because there's so many things that you can do because customizing things is very difficult for everyone that needs to use something like a screenreader. So these are just important contextual modes that I'm bringing up here. 

<i class="timecode">[00:35:43]</i> **Ben:** Mhmm.

Alright, so I'm going to now go ahead and, you know, press this button. And I think I actually have to try this again because I've been playing with moving around this box. Let me try that. 

<i class="timecode">[00:35:56]</i> **VoiceOver:** Link, live— Save Changes, dimmed button.

Cannot save. Input is not valid. 

<i class="timecode">[00:36:04]</i> **Ben:** Okay, so we pressed it and immediately after, it said, "Cannot save. Input is not valid." And you said that was because we were using an ARIA live region. 

<i class="timecode">[00:36:13]</i> **Ashlee:** Yes. Those are so neat. So if we look at the code…

<i class="timecode">[00:36:18]</i> **Ben:** Yes.

<i class="timecode">[00:36:18]</i> **Ashlee:** I think what I'm doing is a bit redundant there. 'Cause I've since learned more about `aria-live`, but what I have there is a message. That message is what's getting rendered inside of the `<span>` that has `aria-live` set on it. And that `<span>` is only getting rendered if there is a message. And I don't think that is necessary, as far as I understand how ARIA live regions work. If the text changes, it is presented, is my understanding.

<i class="timecode">[00:36:47]</i> **Ben:** Sorry, I've been looking for a moment to shut off VoiceOver, just cause it always interrupts. So let me do that real quick.

<i class="timecode">[00:36:54]</i> **VoiceOver:** VoiceOver off.

<i class="timecode">[00:36:55]</i> **Ben:** There we go.

<i class="brackets">[Ashlee laughs]</i>

Streaming while demoing VoiceOver is always an adventure.

<i class="timecode">[00:37:00]</i> **Ashlee:** It so is! 

<i class="timecode">[00:37:02]</i> **Ben:** Yeah, especially when there's, like, a guest where it's like, oh, I really want to let the guest talk because that's the important part. But also like, I can't move windows until I shut down VoiceOver.

<i class="timecode">[00:37:11]</i> **Ashlee:** Okay, I'll try to remember that!

<i class="timecode">[00:37:13]</i> **Ben:** I was on <i>Learn With Jason</i> a couple of months ago, and that was this constant thing of like, I remembered it so it was like every time VoiceOver happened, like, I remembered to shut up, and then Jason's like, "Oh no, sorry, don't let me interrupt!" And it's like, "No, no, I just, I know that this is just a part of streaming accessibility."

<i class="brackets">[Ashlee laughs]</i>

Okay, it's a live… Ah!

<i class="timecode">[00:37:34]</i> **Ashlee:** Oh, it's at the top.

<i class="timecode">[00:37:35]</i> **Ben:** Okay.

<i class="timecode">[00:37:35]</i> **Ashlee:** Yes.

<i class="timecode">[00:37:36]</i> **Ben:** So, yes, you've got this… First of all, here's our `aria-disabled`, so that's what gave us that "dimmed" announcement, as opposed to this button that has the, like, just native `disabled` attribute. So we can see why those differences were there.

And now you're conditionally rendering this ARIA live region. I think one of the things that I've seen is, this works in VoiceOver, where you're conditionally rendering this node, but I think, as per the specs, ARIA live regions are supposed to be, like, present on the DOM before you add any messaging to them. So conditional rendering happens to work with VoiceOver because of the way the VoiceOver is implemented and the accessibility tree on Mac is implemented. But I think ideally you're supposed to have this on the page, like, all the time and you would populate it later, if that makes sense. 

<i class="timecode">[00:38:32]</i> **Ashlee:** Right. And if the text changes, so like, if you didn't, like, clear the text and then set the text…

<i class="timecode">[00:38:38]</i> **Ben:** Yes.

<i class="timecode">[00:38:38]</i> **Ashlee:** I don't think you have to do that. I think you can just change it and it just works.

<i class="timecode">[00:38:42]</i> **Ben:** Mhmm.

<i class="timecode">[00:38:43]</i> **Ashlee:** I mean, we could try it if we want to.

<i class="timecode">[00:38:45]</i> **Ben:** Okay!

<i class="timecode">[00:38:45]</i> **Ashlee:** What happens if I were to type in here?

<i class="timecode">[00:38:49]</i> **Ben:** Actually, yeah, 'cause you've got… yeah. Let me… yeah.

<i class="timecode">[00:38:55]</i> **Ashlee:** Oh, am I there?

<i class="timecode">[00:38:56]</i> **Ben:** I think so. I think — oh.

<i class="timecode">[00:39:01]</i> **Ashlee:** Aha.

<i class="timecode">[00:39:01]</i> **Ben:** Aha!

<i class="timecode">[00:39:02]</i> **Ashlee:** So, what we can do here, let's first take out the conditional rendering. So I'm just going to copy that and paste it, and when I hit save, it has Prettier and it auto-formats, which is like… I can't live without Prettier. This classname "screenreader-only," I'm pretty sure that doesn't actually do anything right now. And that is from a blogpost. Oh my goodness, who is it? 

<i class="timecode">[00:39:27]</i> **Ben:** So there's, like, so many different articles floating out there, but the one I typically use is Scott O'Hara's "Inclusively Hidden."

<i class="timecode">[00:39:33]</i> **Ashlee:** Yes, and I think he links to the one I'm thinking of. 

<i class="timecode">[00:39:38]</i> **Ben:** I think Kitty Giraudel has one as well, and yeah, like, everyone has their own version of, like, a blogpost that shares this. I don't see a link here. But I'll stick this link, 'cause this is what I tend to use, in the chat.

<i class="timecode">[00:39:55]</i> **Ashlee:** Okay. Great.

<i class="timecode">[00:39:58]</i> **Ben:** There we go. But yeah, this is… Ashlee, do you wanna kind of explain why we need a class like this? 

<i class="timecode">[00:40:08]</i> **Ashlee:** Wait, what? Can you repeat that? 

<i class="timecode">[00:40:10]</i> **Ben:** Could you explain why we need a class like `.sr-only` or `.visually-hidden` or some sort of utility like this? 

<i class="timecode">[00:40:17]</i> **Ashlee:** Um, yeah! So an ARIA live region, like, it depends on what you're using it for. So in this kind of example that we've been talking about with a form where, when you submit the form, you show error messages, that is beneficial for both people who can visually see the page and people who are using assistive technology to consume the page. So we don't really need that here.

<i class="timecode">[00:40:40]</i> **Ben:** Mhmm.

<i class="timecode">[00:40:41]</i> **Ashlee:** I think… This is just, like, a work in progress, like, bit of code and I just didn't want delete it. So with something like this, we don't necessarily need it. And I can't think of a specific example of an ARIA live region, unless you're, like, stating that something happened on the page and you don't really need to show that text. But that is what that's for. When something visually happens, you need to, like, convey that to someone who's using a screenreader or assistive technology, but you don't need to display that text at all. But the only way you can, like, put it in the markup so that it's read is, like, you put it in there and you have to hide it. There are a lot of considerations that you have to make for hiding, like, with browser compatibility—

<i class="timecode">[00:41:30]</i> **Ben:** Mhmm.

<i class="timecode">[00:41:32]</i> **Ashlee:** —and not even just individual browsers, but, like, versions of browsers, and all of the different assistive technologies that are out there on different OSes. So, like, this is why so many people have written about it, is because there's a whole bunch of ways to do it and, like, we need it super documented. And I hope I remember who wrote that. I can think of their webpage and I know what it looks like. 

<i class="timecode">[00:41:55]</i> **Ben:** Is it Kitty Giraudel? I think — hang on. Is it called "Inclusively Hidden?" "Hiding Content Responsibly." Is that it?

<i class="timecode">[00:42:05]</i> **Ashlee:** Yeah!!! Okay, so this isn't the specific one that shows the screenreader-only class, but I think this links to it. Yeah! Yeah, yeah, yeah. Okay, this is a great place.

<i class="timecode">[00:42:15]</i> **Ben:** Okay!

<i class="timecode">[00:42:15]</i> **Ashlee:** So if you want to link this, this is exactly what I was thinking of actually. And it's a beautiful site.

<i class="timecode">[00:42:21]</i> **Ben:** Yeah.

<i class="timecode">[00:42:21]</i> **Ashlee:** Very clean and classy. <i class="brackets">[laughs]</i>

So that's where I got this from. And I think I have this in separate notes in a different app that I had actually started this project in, so.

<i class="timecode">[00:42:36]</i> **Ben:** Mhmm.

<i class="timecode">[00:42:37]</i> **Ashlee:** This will definitely be shared with the end product. 

<i class="timecode">[00:42:42]</i> **Ben:** Yeah. 

<i class="timecode">[00:42:44]</i> **Ashlee:** So we're not going to do it here.

<i class="timecode">[00:42:48]</i> **Ben:** Okay.

<i class="timecode">[00:42:48]</i> **Ashlee:** So I don't think we need to copy and paste it or anything. All it would be doing is hiding it so you don't see it. But I think it's valuable for this demonstration purposes to be a pop-up, so I'm going to delete that.

<i class="timecode">[00:43:02]</i> **Ben:** Yeah.

<i class="timecode">[00:43:03]</i> **Ashlee:** Just so we don't confuse anyone.

<i class="timecode">[00:43:04]</i> **Ben:** So broadly speaking, if you need to have content that is available to screenreaders and other assistive technologies, but you don't want that to be visually shown, you don't want to use something like `display: none` or `visibility: hidden` because browsers take that as a cue of like, "Oh, *no one's* supposed to get this, so I'm not even going to expose it to assistive technology." So that's why you need a class like this. This is basically a CSS hack that makes the content, like, really small, or at least the window through which you could see the content, like, impossibly small. So it's not *technically* hidden. It's basically effectively hidden. And this is the, like, go-to trick for having content that is accessible via assistive technologies, but it's still visually completely hidden. 

<i class="timecode">[00:43:55]</i> **Ashlee:** Yes. Thank you for elaborating on that.

<i class="timecode">[00:43:57]</i> **Ben:** No problem!

<i class="timecode">[00:43:59]</i> **Ashlee:** So what we were doing here, we're gonna check and see what happens if we changed the message, right? Without clearing it?

<i class="timecode">[00:44:05]</i> **Ben:** Yes.

<i class="timecode">[00:44:06]</i> **Ashlee:** Okay, so that's what I will do. So the first thing that we have is it waits two seconds to put this message in here. And this is not ideal code here, alright? We're just doing it. I don't like timeouts. Timeouts are usually gross. They're usually a code smell unless they are very intentionally used. Usually you have to, like, have a delay on something…

<i class="timecode">[00:44:27]</i> **Ben:** Mhmm.

<i class="timecode">[00:44:28]</i> **Ashlee:** …like in a test and I don't like timeouts that much. So we're going to add another timeout inside of a timeout, because… this is sarcasm. This is what we need to do. <i class="brackets">[chuckles]</i> But I would not do this in production code probably.

<i class="timecode">[00:44:42]</i> **Ben:** Okay.

<i class="timecode">[00:44:45]</i> **Ashlee:** I really don't know what to make it say. "We're testing aria-live stuff!" Oh, wait, I need to add a timeout on there.

What we should see is the behavior that we saw before, so "Cannot save. Input is not valid." And then two seconds later, we should be read "We're testing `aria-live` stuff!" That's what we're hoping for.

<i class="timecode">[00:45:12]</i> **Ben:** Alright!

<i class="timecode">[00:45:13]</i> **Ashlee:** We're trying to prove some hypothesis. A hypothesis. 

<i class="timecode">[00:45:17]</i> **Ben:** There we go. And I think you probably saved… Yeah, it looks like you've saved. So this should work now. Turning on VoiceOver again.

<i class="timecode">[00:45:30]</i> **VoiceOver:** VoiceOver on Chrome. Entering web content. Link, live regions, main. Save Changes, dimmed button. You are currently on a button. This item is dimmed. Cannot save. Input is not valid. We're testing `aria-live` stuff! 

<i class="timecode">[00:45:43]</i> **Ben:** Nice!

<i class="timecode">[00:45:44]</i> **Ashlee:** It works! I love it! Also, the screenreader sounded so excited. 

<i class="timecode">[00:45:47]</i> **Ben:** "We're testing `aria-live` stuff! Woo! Go `aria-live`!" 

<i class="timecode">[00:45:52]</i> **Ashlee:** <i class="brackets">[laughs] I love it.

Also, y'all are being hilarious in the chat. TheID… TheIdAlan? TheIDOfAlan? I don't know. …said, "Timeouts all the way down!" And then BuildingBedrockLayout said, "I heard you like timeouts. So I timed out my timeout." [laughs]</i> This is great. I love it when the chat messes with me. I've streamed before also, so, like, you guys aren't going to offend me unless you actually say something super offensive. So I can take it. I can take it from the chat. 

<i class="timecode">[00:46:25]</i> **Ben:** I am not going to encourage that! 

<i class="timecode">[00:46:29]</i> **Ashlee:** Right, so I'm — okay.

<i class="timecode">[00:46:30]</i> **Ben:** There we go. 

<i class="timecode">[00:46:32]</i> **Ashlee:** VoiceOver off.

<i class="timecode">[00:46:34]</i> **Ben:** No,I guess have at it? Question mark? Okay. 

<i class="timecode">[00:46:39]</i> **Ashlee:** Don't be mean. We got positive vibe here.

<i class="timecode">[00:46:43]</i> **Ben:** Positive vibes!

Alright. Yeah, so, yeah, that was, I think this was a really nice demo of just showing, like, the difference between these two buttons, and also getting to play around with `aria-live`.

I actually wonder now how it might be feasible… I'm sure somewhere down the road, you're going to have a set of demos that are specifically just, like, "Here's all the things to know about, like, `aria-live` or live regions in general."

We've got, Brent is calling out your cross stitch for being dorky. 

<i class="timecode">[00:47:17]</i> **Ashlee:** Yay! That's so cool! I'm basically, like, a grandma in, like, a 26-year-old body. So I like The Golden Girls. I like cross-stitching. I like knitting. Like, my body feels like it's falling apart all the time and it doesn't cooperate with me. So like, it's the grandma. Like, it's fine. I love dorky stuff. 

<i class="timecode">[00:47:39]</i> **Ben:** Disability experience time. Do you find that when you have one disability, you really have three disabilities? 

<i class="timecode">[00:47:46]</i> **Ashlee:** Oh, hell yeah. 

<i class="timecode">[00:47:46]</i> **Ben:** Yeah, this is a thing that I think, like, nondisabled people don't necessarily, like, understand about disability is, like, it's never just one thing. It's always three things. Like, you always have, like, a laundry list.

<i class="timecode">[00:47:57]</i> **Ashlee:** It's really not! Like, I'm deaf, so my ears don't really work. But there are, like, things that go with that, like I have tinnitus all the time and it actually kind of hurts sometimes. And, like, sometimes they'll give me a migraine. And also, like, disabilities are just so freaking annoying and bodies are annoying. So I need hearing aids to hear stuff, but I put them in and shit's too loud. So then I have a migraine. And it's like, "What? This doesn't add up. Like I'm giving you what you need. Why won't you cooperate?" 

<i class="timecode">[00:48:29]</i> **Ben:** Mhmm! Yeah, forget, like, disabled people in general having conflicting needs. Like, disabled *person* has conflicting needs.

<i class="timecode">[00:48:41]</i> **Ashlee:** So true! Oh, God. Weary all the time. Like, there's so many things. My migraines, I have so many of those triggers and they just conflict with everything. 

<i class="timecode">[00:48:51]</i> **Ben:** AngryMooseOnTheLoose says, "I came into 'bodies are annoying,'" which is one heck of a time to come in! Congratulations, AngryMoose! We are actually going through a few HTML demos just to really understand, like, what is a systematic approach for understanding, like, how do we test differences in semantic markup and, like, kind of incrementally add the experience that we want.

<i class="timecode">[00:49:19]</i> **Ashlee:** Yes!

<i class="timecode">[00:49:19]</i> **Ben:** So speaking of, what's kind of the next thing you wanted to take a look at, Ashlee? 

<i class="timecode">[00:49:25]</i> **Ashlee:** Yeah, so we've taken a look at some demos and there are all kinds of stuff. And we could literally talk about it forever. Like, I love talking about accessibility. Love it. But we only have a few more minutes, really.

Is there a dog behind me?

<i class="timecode">[00:49:42]</i> **Ben:** There is a dog!

<i class="timecode">[00:49:43]</i> **Ashlee:** Get off, tail!

<i class="timecode">[00:49:44]</i> **Ben:** Welcome, dog!

<i class="timecode">[00:49:44]</i> **Ashlee:** That's Trooper.

<i class="timecode">[00:49:45]</i> **Ben:** Hi, Trooper.

<i class="timecode">[00:49:45]</i> **Ashlee:** That's so funny. 

<i class="timecode">[00:49:48]</i> **Ben:** My cat Tuna is over there just, like, conked out on the bed. Like, hard at work, of course.

<i class="timecode">[00:49:53]</i> **Ashlee:** Yes. They're both doing that now. They're laying down. I have two dogs, by the way. 

So we don't have a ton of time to, like, dig into more demos.

<i class="timecode">[00:50:01]</i> **Ben:** Mhmm.

<i class="timecode">[00:50:02]</i> **Ashlee:** But I want to talk more about my process, like, what I would do next. So today we had all this stuff and, like, from a frontend development perspective, I want to build a new component. Where do I go to look this up? My favorite, probably one of my favorite websites or pages is the W3C or the WAI-ARIA Authoring Practices.

<i class="timecode">[00:50:24]</i> **Ben:** Yes!

<i class="timecode">[00:50:24]</i> **Ashlee:** I love it. They have such good examples there.

So in the sidebar, they call these things widgets and not components and, you know, whatever you call it is fine. And they have design patterns. So it gets into some abstract stuff and generalized stuff, and it gets into like, what is a dialog and, you know, what are the different kinds of dialogs. You know, some interrupt a user's flow and some don't, and you have to know exactly what you want with that. And it talks about, in some of these examples and whatnot, like, why you would choose one or not, and the other.

So, depending on the kind of person you are, I wouldn't recommend, like, just diving in and reading this. Like, you're not going to remember a ton of it probably until you need it. Knowing the layout of this document is very good. That way you can come back to it later and easily get to what you need.

But typically, what I like to do if I'm building a new component, is I will go here and I will see, is there something similar to what I want to do? So if I'm building some kind of menu, like ,I'm going to be building a menu at work soon, I think. I don't really know. But menus are one that I think about a lot. So there are different kinds of menus that show up here.

But when you click on them, the way this document is laid out, is they have examples and they get into lists of, like, keyboard navigation, and they have these tables that just lay out everything, like, exactly what you need, what elements they're using, what should happen. You know, if a button is focused and you hit a certain key, what's supposed to happen? And they get into all of the attributes and states and properties that you need. And what's nice about this is they have the code rendered on the page also, so you can interact with it and use it as, like, "This is what it needs to do. What I'm building needs to sound like this." And it's really helpful in that case. Like, it's a great reference in my experience.

What's important to note here is that there are a whole bunch of ways to make something accessible. Not only because, you know, conflicting access needs and whatnot, but just because there are a lot of approaches that you can take to end up at the same result in a lot of cases. Not in every single case. But just like we can all say things differently to each other, because that's how language works, it's the same way with the screenreader, which is why it's important to actually test with people and say, "Is this useful to you as a screenreader user?" That's super important. User testing is so important.

So this is a resource that I love using. It is also important to note, like, in an aside, they do have a button widget, which tells you how to build a button out of a `<div>`. And do not do this for all of your buttons. Use a `<button>` element! But what that can be helpful for is applying the knowledge that you need for making something clickable…

<i class="timecode">[00:53:33]</i> **Ben:** Mhmm.

<i class="timecode">[00:53:35]</i> **Ashlee:** …to work like a button. So, like, if you have, like, a card or something like that on a blogpost, and when you click on the card, it will take you to the actual blogpost, instead of having to click a very specific link, you know, like, you can increase your touch target size, which is good for accessibility in a lot of cases. It will tell you… It teaches you the concepts of doing something like that. Like, don't build a button from scratch. Like, there's so much you can get for free out of the box. It's so much easier. But! There are attributes that you apply to an element to make it clickable and to convey that to users, and that's what you can learn from these examples. 

<i class="timecode">[00:54:18]</i> **Ben:** Alright! Are there other resources you like to go to, or are the ARIA Authoring Practices kind of the main, like, first place you look at? 

<i class="timecode">[00:54:30]</i> **Ashlee:** Since I know, like, of other documents, this is often where I go, since I've, like, seen other ones, because as you can see from the view we're looking at now, there are links to the different things. So, like, `aria-pressed` is one. `aria-haspopup`. So this links to a lot of further documentation if you want to read more deeply about the different roles, states, and properties that are in ARIA.

But I also really like a general resource, which is The A11Y Project.

<i class="timecode">[00:54:58]</i> **Ben:** Yes.

<i class="timecode">[00:54:58]</i> **Ashlee:** And I'm pretty sure that's a11yproject.com. Yeah, I love this site. 

<i class="timecode">[00:55:05]</i> **Ben:** Tatiana did such a great job with the design. 

<i class="timecode">[00:55:09]</i> **Ashlee:** Yes. The design is fantastic and I love that it just dispels the myth that accessibility means ugly. Like, it doesn't whatsoever. You can create beautiful designs that are accessible. And it's so good and I love it.

But this site is really great for finding further resources. They do have articles on here that are very helpful, but there is a Resources page and it gets into different… What word am I thinking of? Mediums. So that's really accessible because I don't listen to podcasts a lot personally, because I have to be in the right setting and I have to have headphones and I don't often find myself in a setting where I can listen to podcasts. So I don't typically look at that, but other people really like podcasts. So I think there's podcasts listed here and books and blogs, and this is, like, talks. Yeah. So I think at the top left, there is a, like, a table of contents type thing.

<i class="timecode">[00:56:19]</i> **Ben:** Oh, yeah! Looks like it. 

<i class="timecode">[00:56:21]</i> **Ashlee:** Yeah, so it also breaks things up into different sections. Like there's tools and all kinds of stuff. This is like really good stuff that's been collected for awhile.

<i class="timecode">[00:56:31]</i> **Ben:** Mhmm.

<i class="timecode">[00:56:32]</i> **Ashlee:** The person who curated this, their name is completely… Eric Bailey.

<i class="timecode">[00:56:38]</i> **Ben:** Yes.

<i class="timecode">[00:56:40]</i> **Ashlee:** Eric Bailey is the main person that runs this, and it's been going for awhile. I don't know how many years. It's been multiple years. 'Cause I knew about it when I started reading about accessibility and whatnot. So it's a fantastic collection of resources that you can go to to learn even more.

And then of course the… So I want to know how other people say this. I say, like, "wuh-kag" in my head.

<i class="timecode">[00:57:09]</i> **Ben:** Mhmm.

<i class="timecode">[00:57:10]</i> **Ashlee:** Okay. So the guidelines, the WCAG, Web Content Accessibility Guidelines, like, that's a really good place to… I think it can be very intimidating to see that.

<i class="timecode">[00:57:20]</i> **Ben:** Yeah.

<i class="timecode">[00:57:21]</i> **Ashlee:** But the number… I am skipping a number on my head. Is it 12 or 13 total guidelines? 

<i class="timecode">[00:57:29]</i> **Ben:** I feel like there's 14 now maybe, with 2.1 or 2.2 or something like that? Something like that.

<i class="timecode">[00:57:36]</i> **Ashlee:** Right, okay. So there's roughly a dozen total guidelines. And when you think about it from that perspective, that's not a ton. There are just a lot of things underneath each one that you have to learn about. But overall, that's what you need to understand. It's like, obviously if you get an accessibility job, you need to know specifics. Like, whatever they tell you, you need to know.

<i class="timecode">[00:57:58]</i> **Ben:** Mm.

<i class="timecode">[00:57:58]</i> **Ashlee:** But to get started, learn what the guidelines are. Learn what the, I think, the four principles are, which are POUR: Perceivable, Operable, Understandable, and Robust. Did I get it? 

<i class="timecode">[00:58:13]</i> **Ben:** You got it! Got it in one!

<i class="timecode">[00:58:15]</i> **Ashlee:** I got it! Heck yeah!

So like you, you start at the top of… or the bottom, I guess, the foundation. And then you go from there. So that's where a systematic approach comes up.

And that's what I hope the main takeaway is here, you know, that you feel a little more empowered and less intimidated by accessibility. Like, you have some starting places and you're like, "Okay, yeah, I can just open a CodePen and try out some attributes. Like, that's pretty easy. That's not any different than the rest of my code!" So that's what I hope a major takeaway is here.

<i class="timecode">[00:58:54]</i> **Ben:** Mhmm.

<i class="timecode">[00:58:55]</i> **Ashlee:** Like, experimenting can be easy. It can be fun. It's okay if you don't know everything. Like, it's all positive vibes here.

<i class="brackets">[Ashlee laughs]</i>

<i class="timecode">[00:59:06]</i> **Ben:** Absolutely. Well, thank you so much for coming on. I've really appreciated having you on. And chat, thank you all so much for being here as well.

If talking about these kinds of interactions, especially from an accessibility framework is interesting to you, then you're really going to love next week's stream. I've got Sandrina Pereira coming on. We're going to be exploring specifically how to inclusively disable a button, so really focusing on that micro-interaction that we've already alluded to several times today. So you'll want to be there for that. That's next Tuesday at 12pm Central. Same place, same time.

And, yeah, with that, I think… Actually, you know what? I'm gonna do one more shoutout for your Twitter…

<i class="timecode">[00:59:53]</i> **Ashlee:** Thanks!

<i class="timecode">[00:59:54]</i> **Ben:** …@AshleeMBoyer. And while I'm here, I might as well promote the Some Antics Twitter account as well. Go follow that for updates on all the different streams that are going on.

And yeah, stick around. I'm going to try to find someone to raid. If you've got anyone you want to see you raided, let me know in the chat. 

But y'all, this has been great. Thank you so much for coming, and thank you once more, Ashlee, for joining the stream. 

<i class="timecode">[01:00:19]</i> **Ashlee:** Thanks for having me.

<i class="timecode">[01:00:20]</i> **Ben:** Bye, y'all!