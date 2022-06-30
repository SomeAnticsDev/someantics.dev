---
title: Making the Web Spicier with Open UI, with Dave Rupert
thumbnailTitle: Making the Web Spicier with Open UI
hosts:
  - Ben Myers
  - Dave Rupert
tags:
  - Web Platform
upload: https://youtu.be/36yzal04dRo
---

In 2020, W3C launched the [Open UI Community Group](https://open-ui.org), a collective of UX-minded people chartered to research UI component patterns throughout web and native experiences and to improve the flexibility and customizability of native controls. Join us as [Dave Rupert](https://twitter.com/davatron5000) shows us how the sausage gets made in Open UI!

---

## More From Dave

- [Follow Dave on Twitter](https://twitter.com/davatron5000)
- [Dave's blog](https://daverupert.com)
- [Listen to Dave on the ShopTalk show](https://shoptalkshow.com)

## Mentioned Links

- [Luro](https://luroapp.com)
- [Greg Whitworth's research on standardizing form controls](https://www.gwhitworth.com/posts/2019/form-controls-components/)
- [The Web We Want](https://webwewant.fyi)
- [Open UI](https://open-ui.org)
- [Open UI's Component Name Matrix](https://open-ui.org/research/component-matrix)
- [Adrian Roselli's alternatives to "pop-up"](https://adrianroselli.com/2021/07/stop-using-pop-up.html)
- [CSS Tricks on `<selectmenu>`](https://css-tricks.com/the-selectmenu-element/)
- [Open UI's `<selectmenu>` demos](https://microsoftedge.github.io/Demos/selectmenu/)
- [Tab Atkins on cascading attribute sheets](https://www.xanthir.com/blog/b4K_0)
- [Get Some Antics merch!](https://someantics.dev/merch)

## Transcript

<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. It is a wonderful Tuesday. I'm so happy to be here with you, and I'm so happy to be here with Dave Rupert! Dave, how's it going?

<i class="timecode">[00:00:13]</i> **Dave:** Hey, how's it going? Thanks for having me. It's great to be here! 

<i class="timecode">[00:00:17]</i> **Ben:** It's great to have you! I initially went to Twitter. I would love to just actually have your face up bigger first though. I went to the wrong scene because I'm a professional streamer.

<i class="timecode">[00:00:26]</i> **Dave:** You ARE a professional. We've been in the green room here for a couple, few minutes and you have a full-blown setup. I'm so impressed.

<i class="timecode">[00:00:36]</i> **Ben:** Thank you!

<i class="timecode">[00:00:37]</i> **Dave:** I would be in panic mode the whole time, so you're doing a great job. 

<i class="timecode">[00:00:41]</i> **Ben:** The thing I've found about streaming is it's such an incremental thing. Like, I've been at this for a year and only recently have I been like, "Oh, actually I should probably polish the onboarding experience for guests."

<i class="timecode">[00:00:53]</i> **Dave:** Well, you know, you don't figure that out until a few episodes in. That's what I say with podcasting is, like, you need to do ten. You need to do ten bad ones.

<i class="timecode">[00:01:02]</i> **Ben:** Yes!

<i class="timecode">[00:01:02]</i> **Dave:** And then, you know, you get an idea what to fix and usually it's your audio. And then once you spend a few hundred dollars on a microphone, then you fix the next thing.

<i class="timecode">[00:01:13]</i> **Ben:** Yes!

<i class="timecode">[00:01:13]</i> **Dave:** So I think you gotta get ten in before you know what you're doing. 

<i class="timecode">[00:01:17]</i> **Ben:** My first stream — and I just put a link to that in the chat — my guest was Anthony Campolo, who is wonderful. Incredibly great person. And I cropped in his face way too much!

<i class="timecode">[00:01:29]</i> **Dave:** So it was, like, zoomed?

<i class="timecode">[00:01:31]</i> **Ben:** To the point where he was missing a forehead!

<i class="timecode">[00:01:33]</i> **Dave:** Okay, yeah.

<i class="timecode">[00:01:34]</i> **Ben:** It's absolutely criminal, the cropping I did to that man!

<i class="timecode">[00:01:39]</i> **Dave:** Ehhh…

<i class="timecode">[00:01:39]</i> **Ben:** And he still came on three more times after that. But yeah, your first few bits of content creation are just going to be absolute, like, garbage polish-wise, and then you find your footing! 

<i class="timecode">[00:01:54]</i> **Dave:** And it's nice that people in chat or whoever are, like, patient with it, and I think both of us can probably say thank you to anyone who was there in the early days, 'cause it's tough!

<i class="timecode">[00:02:07]</i> **Ben:** Yeah!

<i class="timecode">[00:02:07]</i> **Dave:** It was rough!

<i class="timecode">[00:02:08]</i> **Ben:** Totally! Hey, so you've alluded to this fact that you have a podcast. For anyone who is in the chat and somehow has missed your existence, would you care to give yourself a bit of an introduction?

<i class="timecode">[00:02:20]</i> **Dave:** Yeah! Hi, I'm Dave Rupert. I am a web developer based in Austin, Texas. I work for a company called Paravel. We're a threeish-person shop, and we all are in Austin, and we do client services for large companies — Microsoft, Papa Johns, Wired, RetailMeNot, things like that. But over the last, actually, like six months or so, I've kind of been shifting. My role has kind of shifted. I'm still a developer, but I'm, like, building out a product. We're building a product called Luro, and that's at luroapp.com and it's basically like a… I don't know, like, a meta dashboard sort of thing. But it's basically, like, if you've ever had that problem at work where you're like, "Hey, why are the buttons purple on the website?" and everyone kind of stares at each other and goes, "I don't know. I guess we'll have to email Sally, who has to email Tim, who has to email Jessica, who has to email Carla to figure out that answer," we're trying to solve that problem or assist in solving that problem. So, that's Luro App, and we're excited to be building it but it's not quite ready for everyone yet. We're just kind of doing, like, alpha customers right now. So, excited to be doing that. But that's what I do.

And then with my other time — not much time — I do ShopTalk show with Chris Coyier from CSS Tricks. You might know him. And we have been doing this for the last ten years, so 505 episodes now. And so, going strong! It's fun. And we just recently started doing, like, YouTubes and stuff like that, so kind of fun to break into video content and all that. 

<i class="timecode">[00:04:11]</i> **Ben:** Good deal! Well, welcome to the show. It is incredibly exciting to have you. And today we're going to be talking about Open UI. So I guess the first obvious question is what on earth is Open UI? 

<i class="timecode">[00:04:24]</i> **Dave:** Good question! So Open UI, the way I like to describe it is, like, it's a collection of browser people, CSS spec authors, accessibility experts, design system practitioners, and then, like, normal podcast pundits like me. And we all kind of get together, meet weeklyish, and try to… sort of like… it's a lot of research, where we kind of, like, look at the kind of grand scheme of design systems in general and UI patterns and everything, and we're trying to distill that information down into something that makes sense, and then something that can possibly inform future elements, you know, future standards, improve existing standards, stuff like that. So we're kind of trying to distill the sort of all of UI, the art of UI, down into some specs. So that's sort of the goal of the whole thing. 

<i class="timecode">[00:05:33]</i> **Ben:** That sounds like no easy feat!

<i class="timecode">[00:05:36]</i> **Dave:** <i class="brackets">[sarcastically]</i> Ah, it should take a couple of weeks. 

<i class="timecode">[00:05:39]</i> **Ben:** Yeah! You know, I've seen a button before. I'm pretty sure I could, you know, I could. Make it work. 

<i class="timecode">[00:05:45]</i> **Dave:** Yeah. I mean, yeah, it's just a button, so why not? It should be that easy, right? 

<i class="timecode">[00:05:50]</i> **Ben:** Of course!

<i class="timecode">[00:05:51]</i> **Dave:** But yeah, you know, the history of it's kind of cool. I think it was Greg Whitworth, who was over at Edge at the time, was kind of like… you know, Edge was figuring out what they were doin, kind of even pre-Chromium days. Yeah, here's a great post from Greg. And so, Edge had sent out surveys like, "What are developers struggling with? What are they, like, customizing over and over? What do they keep doing poorly, or whatever? And what repeated-effort burdens can we solve?"

And, you know, on this… yeah, this chart right here, you know, the top ten form controls recreated by web developers. And the number one thing people recreate is a `<select>`. Like, 10% of websites recreate `<select>`, and… that's, like, you don't want to do that, right? Like, there's a lot of accessibility. A lot of, I guess, extensibility. Like, working on iOS, you get that little rotor. You know, the slot machine UI and stuff like that.

<i class="timecode">[00:07:06]</i> **Ben:** Mhmm.

<i class="timecode">[00:07:06]</i> **Dave:** There's a lot of things built into `<select>` that you don't really want to go rolling your own, building your own thing. So, I think it's really cool that they kind of looked at all this stuff and sort of, like, identified these problems. And so I think… from there, Greg and other people at Edge — Melanie Richards — and Una Kravets from Chrome. I'm trying to think of who else. And also at the same time, there's this webwewant.fyi thing from Aaron Gustafson and Stephanie Stimac. It's sort of like a place to air your web gripes! webwewant.org? Yeah, okay

<i class="timecode">[00:07:52]</i> **Ben:** Is this it?

<i class="timecode">[00:07:53]</i> **Dave:** Or no, webwewant.fyi. Try that.

<i class="timecode">[00:07:56]</i> **Ben:** Okay, yeah.

<i class="timecode">[00:07:57]</i> **Dave:** Maybe that's it. It could have changed. I remember a green site. That's the only reason…

<i class="timecode">[00:08:03]</i> **Ben:** That's it. That's the one.

<i class="timecode">[00:08:05]</i> **Dave:** That's the one, that's the one! But it's basically just like a "I want this," and you just send it in, and the browsers get it. So, pretty cool thing. But so, they're consolidating all this information, like pulling it all in, and they really saw a need for new UI controls. But… as it turns out, new UI controls are really hard to make. You don't just walk into a W3C meeting and just say, "I invented"… I don't know. "I invented new… tabs! I invented tabs and we're shipping it today!" You know, you don't just walk in with that. You need a lot of research behind that. You need to kind of get developers' sentiment. What are people doing with it? What are people not doing with it? What's in scope? What's out of scope? And so I think Open UI, the goal there is sort of to kind of distill that information, sort of like what I'm saying, to POSSIBLY bring out new elements.

And, yeah! Here's a great example, the open-ui.org there. So, this website is a great website! But this is kind of where all the research dumps into. And you can kind of go through all this stuff, you know, if you go down… we're kind of, like, breaking apart, like, looking at it across all these different design systems. Like, "How are THEY approaching a datepicker? What does it look like? What does it do?" And some of this is already in Chrome. Like, some of these learnings have already kind of matured in the new, like, Chrome standard controls. But this is just sort of, like, an example. We look at all the parts and then we kind of figure out what makes this up, what's good, what's bad, what's in scope, what's out of scope.

And so if you go back, actually, there's a really good… up at that top, the Component Name Matrix. This is the perfect screen. This is the best screen in the whole website. This is basically going through every single design system — or like, I guess it's, like, 18 different design systems — and figuring out what things are called. Right? Like, and if you sort by… Click the "Sort By" button. Yeah, yeah. And that'll change it to popularity, basically—

<i class="timecode">[00:10:34]</i> **Ben:** Okay!

<i class="timecode">[00:10:35]</i> **Dave:** —or a frequency, match count. These are the most commonly used components across all design systems. So, like, 89% of these design systems have a button component. And if you're ready for my spicy take… do you want my first spicy take?

<i class="timecode">[00:10:49]</i> **Ben:** Oh, I'm so ready! So ready, yes!

<i class="timecode">[00:10:52]</i> **Dave:** I don't think buttons should be in a design system! Or, actually, I just don't think they should be components. I think they should just be CSS classes and a HTML element. That's my hot take.

<i class="timecode">[00:11:03]</i> **Ben:** Okay!

<i class="timecode">[00:11:03]</i> **Dave:** I don't think they need that whole component. That's fine. That's my hot tech. You can fight me on Twitter.

But you go down, and so there's, like, checkbox, tooltip. Tabs is, like, the fourth most common control.

<i class="timecode">[00:11:20]</i> **Ben:** Yeah! Lots of people reinventing, or I guess inventing for the first time, tabs over and over again. 

<i class="timecode">[00:11:25]</i> **Dave:** Yes, and the spoiler is we are doing it poorly every time. I was probably developing, like, ten years before I realized, like, "Oh, I did it very wrong!" And so I think, like, we find out about accessibility kind of way too late in the game…

<i class="timecode">[00:11:45]</i> **Ben:** Mhmm.

<i class="timecode">[00:11:45]</i> **Dave:** …too often. And yeah, you know, you think, like, "Oh, I'm just going to spin up some tabs. Show, hide, boom. Bada bing, bada boom, I'm done." It is not that easy. There's, like, a lot of aria-selected, aria… — wait, what is it? — aria-labelledby and stuff like that to kind of make it all gel together. And you have to manage all that! And there's some states and inverse states like aria-selected and stuff like that. It's not that easy, and so, you know, we end up in a situation where, like on, what is it, WebAIM's "Million" study where, like, 97% of websites are inaccessible. Just… that's where we end up, 'cause we're always rolling our own tabs. We're rolling our own custom select boxes. We're rolling our own dropdowns, our own popovers, or pop-ups, or dropdowns.

And so that's one thing that's kind of not reflected in this chart, is some things are the same thing and they just have different names, like "Alert" and "Toast" for example. Like, you might call an alert a "toast," or you might call it an "alert bar," or a… I don't know, a "notification" or "notice machine" or something. So there's, like, a lot of variance here. It hasn't really… we haven't, like, done the great merging of this table. It would be… I'd be curious to see what it looks like if you, like, just merged it all down. Like jumbotron! There's another good example, jumbotron! 

<i class="timecode">[00:13:24]</i> **Ben:** Where's the jumbotron? Got to see that one. There we go! Yes! 

<i class="timecode">[00:13:28]</i> **Dave:** Popularized by Bootstrap and picked up by, I guess, Auth0.

<i class="timecode">[00:13:32]</i> **Ben:** Good for you, Auth0!

<i class="timecode">[00:13:37]</i> **Dave:** So, another spicy take: jumbotrons and hero units should also not be in your design system. Hoohhhh! They should be really custom and bespoke this way. 

<i class="timecode">[00:13:50]</i> **Ben:** Yeah, I do feel like that maybe some of the trickiness here is, like, whether the design system is intended for internal use or general purpose use. It looks like all the design systems you've got up here are general purpose use but, you know, if you're building a design system for one product or one company, then, like, maybe it does make sense to put a hero in here.

<i class="timecode">[00:14:13]</i> **Dave:** Yeah, potentially. Potentially. I just, you know… some of them are kind of specific, like Lion and Lightning are kind of, like, I guess, customer. Spectrum is Adobe. But I dunno, it's all just interesting food for thought. Like, there's a lot of elements. But I think the idea here… like, jumbotron's another great example. I don't think we're going to get a jumbotron in HTML.

<i class="timecode">[00:14:38]</i> **Ben:** Mhmm.

<i class="timecode">[00:14:39]</i> **Dave:** I'm sorry. Sorry, Bootstrap.

<i class="timecode">[00:14:41]</i> **Ben:** 'Cause we arguably already have one, right? Like, that would be a good use case for the `<header>` element, most cases. 

<i class="timecode">[00:14:48]</i> **Dave:** Perfect, yeah! Like, header of your page could just be that. You don't want to add too many elements. That's more just an assembly of HTML sort of. There's maybe nothing unique about it. So if we were to research jumbotron, the likely conclusion might be "We don't need to graduate this to HTML." And it's important to distinguish here, like, Open UI is a Community Group. We can't actually propose HTML. That's not our job.

<i class="timecode">[00:15:25]</i> **Ben:** Okay!

<i class="timecode">[00:15:25]</i> **Dave:** That is by… and there's a lot of reasons but, like, one is, like, copyright.

<i class="timecode">[00:15:31]</i> **Ben:** Ohhh, okay.

<i class="timecode">[00:15:32]</i> **Dave:** But like… so that is all done by the, like, W3C, the HTML Working Group. New CSS. You know maybe something graduates, and it doesn't actually become an element. It just becomes a CSS property. You know, that's going to be through the CSS Working Group. Or maybe it's another ARIA role or something. We, like, figured out, oh, we need an ARIA role "badge" or something. I don't know. I'm just making stuff up.

<i class="timecode">[00:16:00]</i> **Ben:** Sure.

<i class="timecode">[00:16:01]</i> **Dave:** That would be a… just, we'd have to go to the ARIA Working Group. And then any HTML that got proposed would have to be vetted by ARIA and CSS and whoever.

So, that's kind of the situation. Like, I very much see Open UI as just kind of a big research arm of the W3C, if you will. Just that we are like, I don't know, just ready to really geek out over, like, what makes tabs or what makes a carousel or what makes an alert, you know? What do we need to do? What would an HTML version of this really look like? And so we can then propose stuff and upstream stuff. And because people who work on browsers are also involved in this, and CSS spec authors, and accessibility experts, ARIA Working Group people… we can kind of get, like, an early sentiment of how possible this would be.

<i class="timecode">[00:17:02]</i> **Ben:** Yeah! Okay! Well, cool!

So, Open UI has been hard at work for a while. We were talking ahead of time and it sounds like Open UI was chartered around 2019, 2020.

<i class="timecode">[00:17:16]</i> **Dave:** Mhmm!

<i class="timecode">[00:17:17]</i> **Ben:** And it seems like we're really starting to see some things, like, land in browsers now, or at least in canary versions of browsers. So what kinds of things are we going to be working with and seeing today from Open UI?

<i class="timecode">[00:17:31]</i> **Dave:** Yeah! So there is… Do you want to start with the big one or do you want…? Let's start on the one I'm working on. Is that fine? Is that…?

<i class="timecode">[00:17:40]</i> **Ben:** Yeah, I'm good with it! Let's do it!

<i class="timecode">[00:17:42]</i> **Dave:** Okay. So, one of the big things that I'm sort of semi-serious about is — I guess serious enough to volunteer my time — but is… HTML needs a tabs element.

<i class="timecode">[00:17:58]</i> **Ben:** Yes.

<i class="timecode">[00:17:58]</i> **Dave:** Right? I find this completely, 100% non-controversial! Everyone's doing it bad. And so we need some sort of interface that allows us to do it. You know, you have really great framework-specific solutions like Vue Tabs or, you know, I think… Austin Gil is here. He does Vuetensils. Is that right, Austin? But like, and then you have like, you know, some React tabs and stuff like that. But I think HTML itself really needs its own tabs solution. I think that would be very… critical to its success. I mean, every major operating system has a tabs. So why not, you know? 

<i class="timecode">[00:18:46]</i> **Ben:** I've put a link to a stream I had with Chance Strickland, who was on the Reach UI team.

<i class="timecode">[00:18:52]</i> **Dave:** Mhmm!

<i class="timecode">[00:18:53]</i> **Ben:** We kind of walked through building a tab and it's like, there's a lot you have to wire together in a way that's like… it's easier to do as a one-off and much harder to do as any sort of reusable component. 

<i class="timecode">[00:19:06]</i> **Dave:** Right. Right! Like, it's hard to think of all the situations somebody might want to use tabs. And then what we've kind of discovered, as we've started researching it and looking into it — and this is a group of people I'm affiliated with, the Tabvengers, which is like Brian Kardell, Miriam "Mia" Suzanne, Jonathan Neal, Hidde de Vries, me. And then some other people: Scott O'Hara, Léonie Watson, Pascal Schilp. A lot of other people are kind of in this. We call ourselves the Tabvengers. Hey, Brian's in the chat!

But we are basically, like, trying to figure out how this would work. And so we came up with this proposal called "spicy sections," right? Notice it's not called "tabs." That's kind of an important thing, because if we were like "We did tabs!," you know, everyone would be very… like, people would show up with a bunch of opinions. So it's spicy sections! Because I think what we realized when we started researching tabs was… tabs are kind of just a visual metaphor, right? Like, of file folders. I mean, I have, like, whatever. I have literal, like, tax documents.

<i class="timecode">[00:20:28]</i> **Ben:** You brought props!

<i class="timecode">[00:20:29]</i> **Dave:** I brought props! I have a file folder, a tab right here.

They're a visual metaphor. An "affordance" is kind of what Brian Kardell called it, and I think we all gravitate around. They're a visual affordance.

But in addition to visual affordances, then you have aural, like, audio affordances. So how it announces is different than how it presents, or completely decoupled, you might say. You know, the way it announces and the way it looks is totally different. Although they are, like, aligned, but it's just a different paradigm maybe. 

<i class="timecode">[00:21:09]</i> **Ben:** Yeah! Like, I'm even thinking about, like, what would I expect the screenreader experience for something like tabs or spicy sections to be? 'Cause usually, like, you have a row of tabs, or I guess it could be arranged as a column.

<i class="timecode">[00:21:22]</i> **Dave:** Mhmm.

<i class="timecode">[00:21:24]</i> **Ben:** And then you have, after that, you have the content. But I guess in assistive technology, I would be more likely to expect them to be like more colocated or something like that. Like, you'd have the tab name followed by the content that the tab describes. And maybe that's not necessarily the case, but the fact that I'm not even entirely certain indicates to me that there's a wide open space of just questions to answer about this experience.

<i class="timecode">[00:21:50]</i> **Dave:** Totally, yeah. And you kind of, like, group these into, like, different tab — like, there's ARIA roles for each of these, just in terms of like how they announce. role="tablist"… I'm going to mess this up really. 'Cause "tablist" is the whole… the list of all the tabs. I'm failing. Okay. But, and the role="tab" is the actual, like, tab button that you're clicking. And then "tabpanel" is the panel of content that shows when you click a tab.

As you dig into the problem, you realize… semantically, an accordion that shows one thing at a time is, like, almost indistinguishable, both in keyboard operation — those would be another kind of affordance that comes along with the visual affordance or the aural affordance. But a single, like, paneled accordion, an exclusive collapsed accordion is basically the same experience to a screenreader. It's just showing one panel of content. You've presented a list of options and you're showing one panel at a time as you click in it. Okay, so you dig into the problem more. But that's not how we do accordions, right? Like, we tend to kind of have the exclusive and nonexclusive variants as well.

But one problem we also realized is sometimes when you're, like, doing a responsive website and you have tabs, a common pattern — and this is like, Brad Frost talked about this in, like, 2011 or something, like right after Ethan's book came out.

<i class="timecode">[00:23:36]</i> **Ben:** Mhmm.

<i class="timecode">[00:23:37]</i> **Dave:** Like, you flip it to an accordion. Yeah, you go from… it's an accordion on mobile, and then it flips into tabs when you have more spaces available. That's, like, a pretty common UI pattern, 'cause tabs would introduce accessibility problems with, like, horizontal panning and scrolling if we just let it overflow.

So, as we dug into this, we realized, like, these are not… like, "tabs" is probably the wrong word. These are kind of just, like, sections of content that we are manipulating. And the sort of key thing there is we then looked at, like, the different markup patterns for a, like, tab control, and sometimes you have, you know, the tab group on the outside — or tabs element, or whatever you wanna… component —and then you have tab tab, tab — Tab 1, Tab 2, Tab 3 and then Panel 1, Panel 2, Panel 3.

<i class="timecode">[00:24:32]</i> **Ben:** Mhmm.

<i class="timecode">[00:24:33]</i> **Dave:** That's okay. But if the JavaScript failed or whatever, or an old browser came to this, if it was, like, in HTML or it doesn't have web components or whatever, and the screenreader read it, it would just hear "Tab 1, Tab 2, Tab 3, Panel 1, Panel 2, Panel 3." And like, it doesn't make sense. Like, there's no semantic sort of, like, meaning there.

So we kind of built this off the idea that we could do, like, "heading, content, heading, content." Sort of that pattern. And so it would read as, like, "h2, Ingredients, a list of ingredients," you know. "h2, Instructions, a list of instructions." So it'd be like "Tab 1, Panel 1, Tab 2, Panel 2." That's if the thing failed.

But one cool thing about our sort of solution here is, like, the sections of content? These are just visual affordance. An accordion's a visual affordance. A tabs is a visual affordance. You may not even want either of those! You may just want, like, an accordion on mobile and a regular column of content on desktop. We offer that! You can just go to a regular column of content, just like regular DOM, and that's pretty cool! So we're just changing the affordance, but you preserve the "good" markup, quote-unquote, like the structural, semantic markup in there.

And then we've kind of, like, been waffling. Like, this is inside baseball a bit but, like, we've been, like, thinking about, like, you know, maybe you don't want… an `<h>` tag and, you know, content next to each other. Maybe it's not always "heading, content." Maybe it's something like… I can't really think of a situation, but, like, maybe like a sidebar dropdown or something like that.

<i class="timecode">[00:26:18]</i> **Ben:** Sure!

<i class="timecode">[00:26:18]</i> **Dave:** Maybe you want something different. So we came up with, like, this `<spicy-h>` element that kind of goes along with this, and it's just sort of just a generic heading sort of.

<i class="timecode">[00:26:26]</i> **Ben:** Where is…? Is there anything in here?

<i class="timecode">[00:26:28]</i> **Dave:** I think it's toward… it should be…

It's pretty new, so it might not be in the documentation. It's not in the documentation yet. 

<i class="timecode">[00:26:34]</i> **Ben:** "Add support for spicy-h."

<i class="timecode">[00:26:36]</i> **Dave:** Yes!

<i class="timecode">[00:26:37]</i> **Ben:** Tag yourself. I'm `<spicy-h>`! 

<i class="timecode">[00:26:39]</i> **Dave:** Yeah, I know! And there you go! So we have `<spicy-h>` now. But that's not, like, a proposal for, like, a… it's kind of just for testing purposes, just to see, like, what…

That's not — we're not proposing an `<h>` element, although I am big into the `<h>` element. So, yeah. So I think we need an `<h>` element, a generic `<h>` element.

<i class="timecode">[00:26:59]</i> **Ben:** Okay!

<i class="timecode">[00:27:00]</i> **Dave:** But, spicy take 3? Is that spicy take 3? 

<i class="timecode">[00:27:05]</i> **Ben:** It could be!

<i class="timecode">[00:27:06]</i> **Dave:** Alright!

<i class="timecode">[00:27:06]</i> **Ben:** I feel like, if I had known that there were going to be, you know, a plethora of spicy takes and not, like, at most, like, a single spicy take, I would've added, like, a spicy take counter for the overlays. 

<i class="timecode">[00:27:16]</i> **Dave:** "Bing!" Yeah. Well, next time…

<i class="timecode">[00:27:18]</i> **Ben:** Next time!

<i class="timecode">[00:27:19]</i> **Dave:** …we'll have to do it.

So, anyway, and so if you go out to that demonstration link right at the top of the screen there.

<i class="timecode">[00:27:28]</i> **Ben:** Yes.

<i class="timecode">[00:27:28]</i> **Dave:** Yeah, that should work. Put it in CodePen's, like, little side panel view. That might be the easiest way.

<i class="timecode">[00:27:38]</i> **Ben:** Yeah! Something like this? 

<i class="timecode">[00:27:41]</i> **Dave:** Yeah! Now, so you see it in tabs, and now give it a squeeze. Just give it a gentle squeeze.

<i class="timecode">[00:27:46]</i> **Ben:** Ooh, hello! Ooh!

<i class="timecode">[00:27:48]</i> **Dave:** So there's, like, the regular column of content — just your, I don't know, blogposts — and there's the collapse! And so there's column, there's collapsed. And then these should all work, and they have, like, keyboard bindings and everything that you need, so.

So that's kind of cool! And so that's sort of where we're at with this. And really, like, I think, our goal — and I'm hopefully not overspeaking for the team — but, like, our goal is ultimately to have something in HTML that works. I think this is big enough, critical enough infrastructure that it needs to be something in HTML. But it does — whatever ends up in HTML needs to kind of be flexible like this.

<i class="timecode">[00:28:26]</i> **Ben:** Yeah!

<i class="timecode">[00:28:28]</i> **Dave:** And so I think it needs to kind of have some of this feature set. 

<i class="timecode">[00:28:35]</i> **Ben:** Yeah, because, like, if you get something that's, like, not extremely flexible and you have a `<tabs>` element that is close enough but just not quite for any one person's, like, purposes, they're just gonna reinvent tabs again.

<i class="timecode">[00:28:50]</i> **Dave:** Mhmm.

<i class="timecode">[00:28:50]</i> **Ben:** And that kind of defeats a lot of the purpose of having this in there to start with. 

<i class="timecode">[00:28:55]</i> **Dave:** Yeah, totally. And there's even, like, kind of subtly things that kind of… these are, like, background issues but, like, you know, when you do, like, a Cmd-F and find on page, you know, what happens? I don't think it's going to show in ours, but if we had like a native thing, you know, you could in theory pop open that box. You know what I mean? So there's kind of this, like, interesting thing we could do if it was a native element that would be more accessible, more inclusive than the current roll-your-own-JavaScript thing that we have, so.

<i class="timecode">[00:29:34]</i> **Ben:** Mhmm.

<i class="timecode">[00:29:36]</i> **Dave:** But yeah, so that's spicy sections. If you want to use it, it's tabvengers/spicy-sections. We would love to get feedback. So if people are using it, styling it, breaking it, loving it, hating it, let us know. We, like, really are in the feedback stage, we should say.

<i class="timecode">[00:29:57]</i> **Ben:** So, this repo has a web component that people can start, like, using today, is what you're saying. 

<i class="timecode">[00:30:03]</i> **Dave:** Yep! You can use it today. And there's a bunch of tests that have kind of showed up. Like, I think there's probably some, like, few little bits we need to do, like housekeeping things. But yeah, there's a whole bunch of stuff. So yeah! 

<i class="timecode">[00:30:19]</i> **Ben:** Nice! Very cool! Okay, and then Brian's clarifying, I think about the Ctrl-F support, that that is currently already there for focusable things like anchor links. Or, at least, just anchor links.

<i class="timecode">[00:30:36]</i> **Dave:** Oh, okay. Well, there you go!

<i class="timecode">[00:30:38]</i> **Ben:** Very cool, okay.

<i class="timecode">[00:30:40]</i> **Dave:** Thanks, Briaaan. Appreciate you. 

<i class="timecode">[00:30:43]</i> **Ben:** roblevintennis says, "When Dave says 'native,' is that a component that extends HTMLElement?" Like 

<i class="timecode">[00:30:51]</i> **Dave:** No. Well, right now it does that. So right now, it is a web component that extends HTMLElement, and so it's, I guess, native-ish. That's part of the web platform. But I mean, like, no hyphen! I mean, like, a `<tabs>` element.

And it's probably not — you know, "spicy sections" is not gonna be the final name. Sadly. My other proposal, "mighty morphin' element," is not gonna be the final name. We're kind of in this, like… these sort of are the three horses in the race right now: `<panelset>`, `<sectionlist>`, and `<sl>`, which would be like "section list" but sort of in the `<dl>`/`<ol>` vibe. So you can vote for those. It looks like `<panelset>` is decidedly winning.

<i class="timecode">[00:31:41]</i> **Ben:** Interesting!

<i class="timecode">[00:31:42]</i> **Dave:** But just as a idea of, like, these are panels of content. 

<i class="timecode">[00:31:45]</i> **Ben:** Mhmm.

<i class="timecode">[00:31:46]</i> **Dave:** And so these aren't final, but these are kind of like, if we are going to graduate this into a more official Open UI thing, we thought it probably needs a more official name, so. But who knows what it's going to end up with in the browser? HTML Working Group may just say, like, "No, it has to be called `<daverupert>`." And I would say, "Well, gosh! Surely there's a more semantic name!" But they say, "No, it has to be called `<rupert>`! It has to be called that." And I would just have to agree, you know, so.

<i class="timecode">[00:32:15]</i> **Ben:** Yeah. Yeah, I mean, I'm looking forward to the eventual `<rupert>` element. I will talk about this on the show, my blog. I'll blog about `<rupert>`.

<i class="timecode">[00:32:24]</i> **Dave:** Yeah, I just… the web platform needs it. And you know, it's either that or… I don't know. My life goal is… TWO life goals are get an HTML element named after me. Probably not gonna happen. Second life goal, get a breakfast plate named after me. I think that's even a step up. 

<i class="timecode">[00:32:43]</i> **Ben:** That one seems practical. You just have to infiltrate your local diner and just become very good friends. The first one, your first life goal, I might have to ask you to pick a different life goal. Um, 

<i class="timecode">[00:32:55]</i> **Dave:** Alright, alright. 

<i class="timecode">[00:32:56]</i> **Ben:** Or… you could always change your last name to be, like, "DL," and then there IS an element with your last name!

<i class="timecode">[00:33:05]</i> **Dave:** That's a good… that's a good point. See, I thought you were crushing my dreams on the show, but you saved it. You saved it.

<i class="timecode">[00:33:11]</i> **Ben:** No, I'm just providing more pragmatic alternatives to reach your goal!

<i class="timecode">[00:33:16]</i> **Dave:** Pragmatic. That's good. Perfect. 

<i class="timecode">[00:33:20]</i> **Ben:** Alright. Yeah! So that is very cool. I am curious, actually, on the scale of kind of the research that Open UI operates at, like, what are the kind of the timescales we've been looking at? Like, how long have spicy sections been kind of in the works by the team, and how much longer do you think that it'll take before this gets proposed to the relevant working groups? 

<i class="timecode">[00:33:45]</i> **Dave:** That's a good question! So we've started probably end of 2020, I think, is what I want to say, and then through 2021, just kind of worked on it. And… I don't know. You know, the thing is interactive elements… don't come out that often. We got `<button>` at the beginning, and the last two that are kind of semi-interactive are, you know, like, `<dialog>` and `<details>`.

<i class="timecode">[00:34:21]</i> **Ben:** Mhmm.

<i class="timecode">[00:34:21]</i> **Dave:** Which I think were possibly 2011 creations? And then we're just finally getting `<dialog>` and it's still a little broke, but we're fixing it. So, you know, I think interactive elements don't come along in that time. And even, you know, elements take a long time to percolate through the HTML system.

<i class="timecode">[00:34:45]</i> **Ben:** Yeah.

<i class="timecode">[00:34:46]</i> **Dave:** But I think this way of doing it through Open UI and vetting things with web components, I think it's a much better path than we've ever had before, if that makes sense. We are able to see what it looks like. We're able to get developer feedback. We're able to kind of propose big solutions, small solutions, get a group of experts. It doesn't have to…

Hopefully we head off a lot of discussion, like big problems like "This is completely inaccessible." Like, hopefully we head that off earlier in the process than later in the process, which is unfortunately what happened with, like, `<dialog>` and stuff like that.

<i class="timecode">[00:35:28]</i> **Ben:** Mmm! Gotcha. Yeah! Is there more you wanted to add about spicy sessions? 

<i class="timecode">[00:35:36]</i> **Dave:** No, I think that's it. I mean, again, just if anyone wants to use it, we'd love the feedback, so try to… 

<i class="timecode">[00:35:42]</i> **Ben:** Where's the best place to leave that? Would that be the issues, or is there a better place? 

<i class="timecode">[00:35:45]</i> **Dave:** Yep, yep. Issues right there works just great for us.

<i class="timecode">[00:35:50]</i> **Ben:** Good. Alright!

<i class="timecode">[00:35:51]</i> **Dave:** And yeah! 

<i class="timecode">[00:35:52]</i> **Ben:** Go ahead, Dave! 

<i class="timecode">[00:35:54]</i> **Dave:** Well, okay. We've got some more stuff. Open UI, not done releasing bangers yet. So, there's two kind of big ones left, and they're sort of connected in some way, but they are `<popup>` and `<selectmenu>`.

<i class="timecode">[00:36:15]</i> **Ben:** Okay!

<i class="timecode">[00:36:16]</i> **Dave:** So, let's go… Is there a popup…? Yeah, "Enabling Popups." That's the one.

<i class="timecode">[00:36:23]</i> **Ben:** Okay. You gave me so many links to start out with—

<i class="timecode">[00:36:26]</i> **Dave:** Sorry.

<i class="timecode">[00:36:26]</i> **Ben:** —and they're all goldmines! It's just, you know, having to find the right goldmine. 

<i class="timecode">[00:36:31]</i> **Dave:** Yeah. Well, and you know, there's a lot of links, a lot of content to dig through, and so it helps to have a sherpa, a guide through it all.

So this was an Edge explainer — Microsoft Edge. I think Melanie Richards was one of the initial authors on it. `<popup>` was this idea of this element that exists on the top layer and is anchorable to another element. Does that make sense?

<i class="timecode">[00:37:05]</i> **Ben:** What do you mean by "anchorable" in this case?

<i class="timecode">[00:37:08]</i> **Dave:** Like, in the Popper.js sense. So you can say, like, "go to the middle bottom" or "go to the bottom right" or "10 pixels offset" or something like that, so.

<i class="timecode">[00:37:21]</i> **Ben:** Mhmm.

<i class="timecode">[00:37:21]</i> **Dave:** This was the initial explainer.

<i class="timecode">[00:37:24]</i> **Ben:** Gotcha.

<i class="timecode">[00:37:24]</i> **Dave:** And you can kind of read through some of the use cases to get a popup kind of going. And again, it sits on the top layer. It doesn't sit on the, like… it can't be z-indexed over, you know? And that's kind of an important thing, especially with, like, popups. And, you know, you sort of start seeing the problems right away as from an accessibility kind of perspective. You know, "popup" is a big word.

<i class="timecode">[00:37:51]</i> **Ben:** Yeah!

<i class="timecode">[00:37:51]</i> **Dave:** Adrian Roselli has a great post on this. "Popup" can mean dropdown, it can mean popover, it can mean a context menu, it can be…

Yeah, "Stop Using 'Pop-up.'" Just, this is just a good post on, like, here's what "dropdown" and "popup," here's what they mean. This is just such a… I don't know, it's a hard word to describe. But when you go to, like, accessibility semantics, you kind of mean like, is it a popup? That's an actual accessibility term. Is it a tooltip? Is it a listbox? Is it a combobox? Is it…? You know, there's different sort of verbiage in HTML — or in ARIA, I guess — that sort of you mean something else when you mean "popup."

<i class="timecode">[00:38:47]</i> **Ben:** Mhmm.

<i class="timecode">[00:38:47]</i> **Dave:** Context menus, stuff like that. And that wasn't, like, a "alert," or "toast" was another good one. Like, that's a totally different sort of thing from a "what does a popup sort of mean." But Mason Freed, and I think maybe Rob Flack is also involved, and then Una is also involved on the, like, anchoring side of things, the CSS sort of things. Because that's probably going to be its own whole thing. Like, how do you anchor an element to another element just, like, by some kind of keyword thing? So a lot of JavaScript goes into doing that and we could maybe solve it in the browser. That would be nice.

But this is evolving, and I think the final idea is maybe this is not an element. So some Open UI things graduate to web components, some graduate to elements, and some don't. And so what we're maybe thinking now, the current thinking is kind of like this might just be a displayPopup(). And maybe we have a listbox element that displays popup. Or it could change! You know, you could just have a "listbox { display: block; }" or something like that on a phone or something.

So, it's interesting to think about. And this is, like, way above my pay grade, but it's all very interesting problems when you're trying to propose, like, a top-level, top-layer element. Like, how does it behave? How does it announce? What are the…? How does it interact? All that stuff. 

But in the same vein, and kind of building off of this, if you go back to that, like, Greg Whitworth post, you know? One of the things…

Where was it? 

<i class="timecode">[00:40:36]</i> **Ben:** Not that one. Where did I put that one? Here! Here it is.

<i class="timecode">[00:40:41]</i> **Dave:** "Initial thoughts," yeah! So one of the things people are doing is building select boxes over and over and over.

<i class="timecode">[00:40:46]</i> **Ben:** Yeah!

<i class="timecode">[00:40:46]</i> **Dave:** And I think the reason they're doing that is so that they can style it.

<i class="timecode">[00:40:49]</i> **Ben:** Yeah, that makes sense!

<i class="timecode">[00:40:52]</i> **Dave:** One would think. I mean, you don't just, like, "I'm just gonna give myself a hard time!" But you do it for a reason, and that's usually to style it. So, some people — this is, like, Dan Clark and Patrick Brosset over on the Edge team, and I think Mason and Robert are helping out — they have a `<selectmenu>` element…

<i class="timecode">[00:41:16]</i> **Ben:** Okay!

<i class="timecode">[00:41:17]</i> **Dave:** …in the works, and it's in your Chrome Canary or Edge Canary right now. So if you go…! Yeah, here you go! So if you go to Chrome Canary, and then you go to the about://flags. And I think you have a tab. Or yeah, you can just pull that up. 

<i class="timecode">[00:41:33]</i> **Ben:** Yeah. I'll just pull it up again. I think we've already… yeah. 

<i class="timecode">[00:41:38]</i> **Dave:** Yeah, and then you go to, like, "Experimental Web Platform features" and you enable that. I like to do that in my Chrome Canary version, just 'cause, like, that's where all the latest and greatest in browser-crashing stuff sits. So you can just… I wouldn't do canary for my day-to-day browser, but that's something that you could, I don't know, play around with.

So… and then there's a… I think I sent a link over for the `<selectmenu>`. Patrick Brosset recently did a demo on the `<selectmenu>` and kind of like all the…

Oh yeah, here you go. There's a great, yeah! He just wrote an article. "Say hello to selectmenu."

<i class="timecode">[00:42:21]</i> **Ben:** Yes!

<i class="timecode">[00:42:22]</i> **Dave:** So, they've been working on this, and basically they have a prototype in the browser of a completely stylable `<selectmenu>`. And this is it! It's kind of wild. Like, if you look at this first one… like, just click this guy's face. WHOA!

<i class="timecode">[00:42:43]</i> **Ben:** I love that!

<i class="timecode">[00:42:44]</i> **Dave:** That does not look like a regular `<select>`! It looks a little bit different, right?

<i class="timecode">[00:42:49]</i> **Ben:** Mhmm.

<i class="timecode">[00:42:50]</i> **Dave:** But if you, like, right-click it and inspect it, you can kinda…

This is kind of where it gets a little weird, possibly. But, so there's `<selectmenu>`, right?

<i class="timecode">[00:43:04]</i> **Ben:** Mhmm.

<i class="timecode">[00:43:04]</i> **Dave:** And class "bubble." And then it has a slot, which is kind of a web component idea, but it's brought over here to, like, show what the button looks like, right? And then there's `<popup>`, right? So this is where we're kind of, like, mixing our metaphors here. But, like, `<popup>` probably won't be `<popup>` in the final thing. But you can just chuck HTML in your `<selectmenu>`. And then, you start to see, like…

And then if you keep opening it, it might show you some `<option>`s, and I think each one of those…

<i class="timecode">[00:43:39]</i> **Ben:** Oh!

<i class="timecode">[00:43:39]</i> **Dave:** …smileys is an `<option>` value! So, those are each `<option>` elements inside a select. So… it's pretty cool. I think there's currently some issues open about accessibility, so I want to get that out in the open. But this is just kind of a very interesting solution! We're using the old-fashioned `<option value>` that we are all used to, and then you wrap it in a `<select>` and you get a pretty familiar… or, you wrap it in `<selectmenu>`, sorry, and you get a pretty familiar, I don't know, programming interface.

<i class="timecode">[00:44:25]</i> **Ben:** Yeah!

<i class="timecode">[00:44:26]</i> **Dave:** The old HTML you're used to, but a little more customized. 

<i class="timecode">[00:44:29]</i> **Ben:** It's not hard to imagine, like, writing some scripts to, like, add more options in here and stuff like that. This is… yeah. Like, it's just as flexible as any other DOM element, which is nice.

<i class="timecode">[00:44:40]</i> **Dave:** Yeah!

<i class="timecode">[00:44:40]</i> **Ben:** I dig!

<i class="timecode">[00:44:42]</i> **Dave:** And like, you can go down through all these demos here. Like, this second one was… yeah, you have to scroll, or else it'll stick to the ceiling. But, like, a select menu that opens up in the middle, you know. You know, like, that's kind of actually hard to do. And then even just the way the selected option presents. You know, this one has a search thing in there. You can just, like, find a… yeah!

<i class="timecode">[00:45:14]</i> **Ben:** Ooh. Ooh!

<i class="timecode">[00:45:15]</i> **Dave:** Like, that's a pretty handy thing. You know, these aren't, like, all built-in native. I think that we're extending this idea. But, like, multiple selects because you control the way the button presents. That's pretty cool. This account switcher's probably, like, my favorite. Like, the most basic. There you go! That's what people want in their UI, you know?

<i class="timecode">[00:45:38]</i> **Ben:** Mhmm!

<i class="timecode">[00:45:40]</i> **Dave:** GitHub issue filter's another classic, like, where you have, like, a row of options and then, like, a row of emoji below it.

<i class="timecode">[00:45:47]</i> **Ben:** Yeah!

<i class="timecode">[00:45:48]</i> **Dave:** And then that Dribbble's filter is probably the best one, just like the most basic one, because you can add in, like, colors—

<i class="timecode">[00:46:00]</i> **Ben:** Okay!

<i class="timecode">[00:46:00]</i> **Dave:** —style things, add images.

<i class="timecode">[00:46:03]</i> **Ben:** Ooh, ooh!

<i class="timecode">[00:46:03]</i> **Dave:** Hello! Inside your selects. And they're pretty great.

Right now, I think it all works with, like, keyboard stuff. I think there's a few bit of, like, issues with, like, selecting the right thing. But, like, if you, like, typed or something like that. I don't know if it, like, actually hits the right, like… if you typed, like, "Brave," would it go to Brave right now? I don't think it would. So like, stuff like that, like, that the native `<select>` or the original `<select>` does.

But yeah, `<selectmenu>`! It's kind of a new frontier for, like…

If you look at the HTML, it should just be, like, `<selectmenu>` and things.

<i class="timecode">[00:46:47]</i> **Ben:** I totally expect to see, like, `<img>` tags in here. Or sum'n. 

<i class="timecode">[00:46:52]</i> **Dave:** No, options. And you don't even need that `<popup>` thing. I think he's just shoving that into the element. So you can just do it with like… move those. Yeah. You can just move those up and stuff like that.

So it's very cool. I'm very, like, stoked on this future. It's in canary. It's experimental, I should say. Like, it's not coming out anytime soon.

<i class="timecode">[00:47:17]</i> **Ben:** Mhmm.

<i class="timecode">[00:47:18]</i> **Dave:** But it's here. We can play with it, we can give feedback on it, we can evaluate it, and then we can see if it's something that should go forward. And I think both Microsoft and Chrome are very eager to get these problems solved for us, so. 

<i class="timecode">[00:47:40]</i> **Ben:** Very cool. Yeah, that is super exciting!

Jonathan in the chat says, "I like it. I wonder if some of those attributes (like the 'behavior') would be better expressed in CSS. They might need to be different in different conditions."

<i class="timecode">[00:47:56]</i> **Dave:** Yeah! Yeah, and that's kind of a good question. And one we've been thinking about. "And one we've been thinking about!" It very much is like, how do you communicate behavior. And there's an old post by Tab Atkins about attribute stylesheets, which has an unfortunate acronym. Wait. "Cascading attributes sheets," maybe. "Attribute stylesheets." That's much better than "attribute stylesheets." Yeah, that's it! Tab Atkins, wonderful person.

In the same way you do CSS, there's also this idea of, like, maybe you could just program attributes in a CSS-like language. And to… was it Jonathan's point? Like, maybe we could program behavior here. Or maybe it's in CSS. But this would be very interesting to think about. Like, an interesting feature.

<i class="timecode">[00:49:15]</i> **Ben:** Yeah!

<i class="timecode">[00:49:15]</i> **Dave:** Even just, like, getting your ARIA attributes out of the DOM and into here, it would be beautiful!

<i class="timecode">[00:49:21]</i> **Ben:** I've been thinking of this ever since I had an issue that I was working on at work where when you have, like, for instance, a codeblock that is its own independently scrollable region, it's usually helpful to add, like, a tabindex.

<i class="timecode">[00:49:38]</i> **Dave:** Yep!

<i class="timecode">[00:49:38]</i> **Ben:** Because since it's scrollable, it needs to be keyboard-navigable, and so you add a tabindex. But you don't want to just add a tabindex to all codeblocks, because then you're just going to get a whole bunch of noise in your keyboard navigation. But it's like… it would ideally be best if you could add the tabindex when the codeblock is going to overflow. Right?

<i class="timecode">[00:50:02]</i> **Dave:** Mhmm!

<i class="timecode">[00:50:02]</i> **Ben:** And that's the kind of thing that, like, feels like it would be much nicer to do in kind of CSS's declarative way, even maybe with CSS's, like, media queries and whatnot. 

<i class="timecode">[00:50:13]</i> **Dave:** Totally. 'Cause, and back to kind of the, like, affordance thing, like, you may want a different presentation. You know, like, you may say, like, "Okay, we're going to cap the height on desktop, but on mobile, we're just going to let it scroll infinitely because scroll inside, like, the glassy scroll of a mobile device is kind of bad." So, like, we would kind of want, on a media query, we want to trigger this tabindex, right?

<i class="timecode">[00:50:40]</i> **Ben:** Mhmm.

<i class="timecode">[00:50:40]</i> **Dave:** So there's so many kind of… I don't know, like, it just makes sense, I guess, is what I want to say?

<i class="timecode">[00:50:51]</i> **Ben:** Mhmm!

<i class="timecode">[00:50:52]</i> **Dave:** Like, let me just have this. 'Cause I'm dealing with a problem on my site. I wrote some blogpost titles in a different language and guess what? It's very bad on a screenreader. And I use, like, Edge's Read Aloud feature all the time.

<i class="timecode">[00:51:08]</i> **Ben:** Mhmm.

<i class="timecode">[00:51:09]</i> **Dave:** So I'm hearing it very badly because it's like, "capital Greek T, capital Greek A."

<i class="timecode">[00:51:14]</i> **Ben:** Ahhhhh, yes.

<i class="timecode">[00:51:15]</i> **Dave:** And so I just was like, "Shoot, this is not good." And my problem now is I have to go roll out a whole bunch of infrastructure to add language attributes to titles or something, when it would be cooler — hear me out — if I just had, I don't know, an attributes tag, and I could just, like, hotfix those attributes, you know.

<i class="timecode">[00:51:41]</i> **Ben:** Yes!

<i class="timecode">[00:51:41]</i> **Dave:** Rather than, like, adding infrastructure to my application or my blog, my Jekyll blog, just to support a title in a different language, you know?

So yeah, it's all something to think about, but so, like… I don't know. I'm bullish on, like, we need something like this but, like, maybe we could get some behaviors in here or something or…

<i class="timecode">[00:52:06]</i> **Ben:** Mhmm.

<i class="timecode">[00:52:06]</i> **Dave:** …something like this, or something, you know? But I don't know, but it's interesting. And so, like, you know, a lot of Open UI is talking about stuff, arguing about what should happen with focus states and then, moving on, trying to get to a conclusion, a resolution.

<i class="timecode">[00:52:29]</i> **Ben:** You've been in my accessibility office hours then, 'cause that's exactly what that is! 

<i class="timecode">[00:52:33]</i> **Dave:** Oh, I think it's 90% arguing about focus. 'Cause one thing that's coming up in Open UI is there's, like, an idea of, like, autofocus. Obviously, we have autofocus. But when you open an accordion or a tab or a popup or a dialog, right? You want to focus — autofocus — the first focusable, or, like, heading or input or whatever — the first focusable thing, relevant focusable thing, because `<h1>`s aren't always focusable or whatever.

<i class="timecode">[00:53:12]</i> **Ben:** Mhmm.

<i class="timecode">[00:53:13]</i> **Dave:** How do you do that, you know? So maybe we have, like, a "delegates focus" thing. I think that's actually a web component thing, so we can't use that. But like, how do we, like, programmatically or declaratively set focus on something? And then there's also this other idea of, like, light dismiss? So, like, hitting Escape to, like, close something or clicking out of it to close something. You know, what gets light dismiss behavior and what doesn't? We spent hours discussing that, and I'm afraid I still don't know the answer. But that is something you have to think about when talking about elements.

But what's cool is this stuff IS being talked about and people ARE working on this, and it's a pretty open group. There's a meeting every, like, Thursday or so if an agenda makes.

This guy Andrico hopped in and said "I want to help. I started working on toast, like an alert pattern of some kind." And you know, that one's a little tricky. It's a lot to think through. Because, like, not every alert's an actual ARIA role equals "alert," you know?

<i class="timecode">[00:54:23]</i> **Ben:** Mhmm!

<i class="timecode">[00:54:24]</i> **Dave:** So, like, oh man, what do we do, you know? How do we get out of this jam? 

<i class="timecode">[00:54:29]</i> **Ben:** Yeah! Like, toasts are complicated also 'cause, like, a lot of design systems have, like, interactive buttons and stuff like that. And if you're just relying on role="alert," then people aren't going to be able to get to that button. So, yeah.

<i class="timecode">[00:54:43]</i> **Dave:** Right, right. And so, like, if you just announced, like, "Hey, everything's broken," like, how…? Do you Shift-Tab and try to get to it? You know, what do you do to, like, go click the, like, "Click this link to find out what's broken" link or whatever, you know? Or close it, you know, from my screen view?

<i class="timecode">[00:55:02]</i> **Ben:** Mhmm.

<i class="timecode">[00:55:03]</i> **Dave:** That stuff's hard!

<i class="timecode">[00:55:04]</i> **Ben:** Yeah!

<i class="timecode">[00:55:04]</i> **Dave:** That stuff's really hard to figure out. And, you know, it's tough too, because we all have different modalities or whatever, and so, like, it's easy for me, the sighted person, to just be like, "Oh, I'll just click that button and say goodbye," but it's not always that easy for everybody. Whatever we put in the web has to be good.

<i class="timecode">[00:55:26]</i> **Ben:** Absolutely.

<i class="timecode">[00:55:27]</i> **Dave:** So we gotta figure that out.

<i class="timecode">[00:55:30]</i> **Ben:** So, one last question, I guess I want to ask is how could someone get involved in Open UI? What's the best way to get involved in this process? 

<i class="timecode">[00:55:40]</i> **Dave:** So, there is a Discord, and there should be a link at the top of the Open UI site. Discord, I think, is down right now, so…

<i class="timecode">[00:55:47]</i> **Ben:** Yeah!

<i class="timecode">[00:55:47]</i> **Dave:** Good luck! But there's a Discord there. And so, pretty friendly. Just stop in and say hi, introduce yourself, what you do. Then there's a meeting every week. Usually they post, like, an agenda beforehand, but it's Thursdays at… We're both in Texas, right?

<i class="timecode">[00:56:04]</i> **Ben:** Mhmm.

<i class="timecode">[00:56:04]</i> **Dave:** So 1:30 Texas time. So, then we all… You can hop on there and talk about focus! But also, you know, like, if you're… I think one thing we're trying to figure out right now is trying to figure out ways that people can drop in. I think of it like a half pipe, like you're waiting for your turn to drop in on something, you know. Like, "Okay, now I'm going to go."

<i class="timecode">[00:56:29]</i> **Ben:** Mhmm.

<i class="timecode">[00:56:30]</i> **Dave:** So I think we're trying to figure out ways to make it where, like, you could see active projects, what needs to be worked on, where there's interest. But you know, if you get in and you say "I'm really passionate about breadcrumbs," guess what? You get the breadcrumbs issue!

So, you know, I think people have kind of… some of this HAS research, so you may… I hate it when people are like, "You gotta read the whole manual before you can participate," but it may be worth it if you're like, "I want to work on something." Kind of read the existing stuff and try to figure out where it is. But I think most of this stuff that's in here has not been fully… like, we haven't fully, fully diagnosed everything about it. So, I think it's worth getting in and, you know, if you know how to make a web component, that helps, too. We can make prototypes of potential elements and that's a big deal. So yeah!

<i class="timecode">[00:57:29]</i> **Ben:** Good deal!

Dave, thank you so much for your time! It has been delightful having you, delightful learning about some of these things that are coming and the research that's being done. So thank you so much for coming on!

Y'all, if you're not already following Dave… first of all, how? Second of all, dare you? Go follow Dave on Twitter. He's at dave-a-tron or dav-a-tron. How do you pronounce that, actually? 

<i class="timecode">[00:57:54]</i> **Dave:** Dave-a-tron, yeah.

<i class="timecode">[00:57:55]</i> **Ben:** Dave-a-tron!

<i class="timecode">[00:57:56]</i> **Dave:** And there it's D-A-V-A. There's a D-A-V-E-tron5000 as well. He's a very talented Rubyist, but he does not like it when we get mixed up, so. 

<i class="timecode">[00:58:07]</i> **Ben:** Okay! And go listen to ShopTalk as well!

<i class="timecode">[00:58:12]</i> **Dave:** Yeah!

<i class="timecode">[00:58:13]</i> **Ben:** That's some good listenin's. Y'all have YouTubes as well. Go check those out.

And y'all, it's been delightful having you. Join us next week for… I'm bringing Amit Sheen on. Amit is a CSS wizard. He does all sorts of wild stuff with, like, 3D CSS animations. He's going to be talking about what almost feels kind of like the flip side of this in a way, but it's JavaScript problems with CSS solutions, so how to start, like, approaching problem solving from a CSS perspective rather than a JavaScript perspective.

I guess one other thing I wanted to promote — I have merch.

<i class="timecode">[00:58:52]</i> **Dave:** Ayyyy!

<i class="timecode">[00:58:52]</i> **Ben:** Go get some. I'll put a link to that in the chat as well. There's an offer code for the next few days. Go get merch. They're good shirts. HTML-themed, logo-themed, stuff like that. Good stuff.

But y'all, it's been delightful having y'all here. Thank you to everyone who showed up, especially those who showed up from Open UI. Y'all's chat was fantastic, and like, I was reading through that while listening to Dave. I'm like, "No, like, the Open UI folks have it. I'll tune out Dave for a bit."

<i class="timecode">[00:59:21]</i> **Dave:** They're a LOT smarter, so I occupy the role of podcast pundit in the Open UI space! 

<i class="timecode">[00:59:30]</i> **Ben:** Yeah, if you're interested in more shows, weekly shows about accessibility and core web technologies, while you're following Dave, you should also follow Some Antics here on Twitch at SomeAnticsDev and on Twitter at @SomeAnticsDev. And stick around. We're going to find someone to raid. Have a good one, y'all! Bye!