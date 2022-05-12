---
title: "Weird ARIA: Breaking Down Complex Interactions with Sarah Higley"
thumbnailTitle: "Weird ARIA: Breaking Down Complex Interactions"
hosts:
  - Stephanie Eckles
  - Sarah Higley
tags:
  - Web Accessibility
upload: https://youtu.be/-JQ5FFl-2Rk
---

ARIA is a set of HTML attributes designed for exposing complex interactions accessibly via assistive technologies. But when interactions get complex, ARIA can get *weird*. Join [Sarah Higley](https://twitter.com/codingchaos) and guest host [Stephanie Eckles](https://twitter.com/5t3ph) as they break down complex web interactions and their ARIA support!

---

## More From Sarah

- [Follow Sarah on Twitter](https://twitter.com/codingchaos)
- [Sarah's blog](https://sarahmhigley.com)

## Mentioned Links

- [Some Antics: Build Sites for High Contrast Mode with Eric Bailey](https://someantics.dev/high-contrast-mode/)
- [ARIA spec](https://w3c.github.io/aria/)
- [ARIA Authoring Practices](https://w3c.github.io/aria-practices/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [Inclusive Components](https://inclusive-components.design)
- [The A11Y Project](https://www.a11yproject.com)
- [24 Accessibility](https://www.24a11y.com/)
- [Adrian Roselli on Twitter](https://twitter.com/aardrian)
- [Scott O'Hara on Twitter](https://twitter.com/scottohara)
- [Eric Bailey on Twitter](https://twitter.com/ericwbailey)
- [Crystal Preston-Watson on Twitter](https://twitter.com/ScopicEngineer)
- [Disability Visibility book](https://disabilityvisibilityproject.com/book/)
- [Shell Little on Twitter](https://twitter.com/ShellELittle)
- [Alice Wong's Disability Visibility Project on Twitter](https://twitter.com/DisVisibility)

## Transcript

<i class="timecode">[00:00:07]</i> **Stephanie:** And I didn't get your webcam to come through. We might've… we might've accidentally shut off Sarah's webcam! Sorry.

<i class="timecode">[00:00:13]</i> **Sarah:** Oh, whoops. Do you want me to do that through Zoom, too?

<i class="timecode">[00:00:16]</i> **Stephanie:** Yes, so that first link that we had in chat.

<i class="timecode">[00:00:18]</i> **Sarah:** Okay.

<i class="timecode">[00:00:19]</i> **Stephanie:** We were maneuvering things around last minute to make sure the voiceover came through. 

<i class="timecode">[00:00:24]</i> **Sarah:** Yeah! I do have the first link from chat going, but I was wondering if, when we switched screenshare over to Zoom, if that also switched that over?

<i class="timecode">[00:00:35]</i> **Stephanie:** Oh, for your audio as well. That may have been what happened. Alright, let's go ahead and go. 

<i class="timecode">[00:00:41]</i> **Sarah:** We'll just pursue? 

<i class="timecode">[00:00:45]</i> **Stephanie:** Technology is complicated.

Thanks everyone for joining today! I am obviously guest hosting Ben's stream. I'm clearly not Ben. <i class="brackets">[laughs]</i>

We are momentarily going to be… we already can hear Sarah coming in, but we'll have Sarah Higley joining. And…

<i class="timecode">[00:01:03]</i> **Sarah:** Theoretically!

<i class="timecode">[00:01:05]</i> **Stephanie:** We're just seeing if we can get the webcam to cooperate with coming through. Sarah's going to be sharing from her screen today so that we can hear the screenreader talking through, and so that's why we are having a little difficulty sharing audio versus screenshare. So I think we might not…

I don't know, Sarah, if you want to just show your screen. I'll just switch us to our other view here. Oh!

<i class="timecode">[00:01:28]</i> **Sarah:** Sure.

<i class="timecode">[00:01:28]</i> **Stephanie:** Well, it works in that view! There you are!

<i class="timecode">[00:01:30]</i> **Sarah:** Oh, that's good! Cool!

<i class="timecode">[00:01:32]</i> **Stephanie:** Good enough! <i class="brackets">[laughs]</i> 

<i class="timecode">[00:01:34]</i> **Sarah:** You know, you just have to constantly show a screen!

<i class="timecode">[00:01:38]</i> **Stephanie:** Yep, yep.

<i class="timecode">[00:01:38]</i> **Sarah:** As one does… definitely. 

<i class="timecode">[00:01:40]</i> **Stephanie:** I'm going to hide yours for just a second here and our guests — nevermind. I'm showing mine regardless. So, alright, we'll get it figured out.

Here we are. Here we go. Restart. <i class="brackets">[laughs]</i> This is a real-time do-over. Well, welcome everybody. Thanks for coming in today. I'm Stephanie Eckles. @5t3ph everywhere on the internet. I'm very honored to be guest hosting for Ben, who I see in the chat. Love that you got to witness the chaos. But I have with me codingchaos! So I don't know, maybe… maybe it just was meant to be! I don't know. 

<i class="timecode">[00:02:17]</i> **Sarah:** Yep, I introduce technical difficulties everywhere I go. 

<i class="timecode">[00:02:21]</i> **Stephanie:** Yes! But Sarah Higley is with me. I've just put their Twitter in the chat, and we are coworkers the long way around. We're both at Microsoft, but in completely different teams. So Sarah, would you like to do a much better introduction on yourself?

<i class="timecode">[00:02:41]</i> **Sarah:** Oh, I thought that was a good introduction! Yeah! I work at Microsoft. I do accessibility. I work on a component library. And yeah! I also am on the ARIA Working Group and work on component accessibility there, too! And generally, yeah, I do a lot of accessibility stuff! 

<i class="timecode">[00:03:06]</i> **Stephanie:** Yes. I became familiar with your work prior to myself joining Microsoft. Sarah has a really excellent article — at least in terms of my work, that's been most relevant to me — about tooltips and not using them. I whip that out all the time. <i class="brackets">[laughs] Excellent resource. And that's kind of a nice segue into the topic that we're going to be discussing today, which is those complicated patterns.

And I am going to just do a little switch over here to your shared screen. Let me… maybe turn off the participants. Anyway, we'll roll with it. [laughs]</i> If someone wants to tell me in chat how to turn off the video here, we'll do that.

But Sarah, what if you brought for us today? 

<i class="timecode">[00:03:56]</i> **Sarah:** Yeah! I have… I thought it would be fun to talk about a bunch of kind of, like, usability studies I've done on more complex patterns and kind of the idea of what you do when you start trying to create things that there aren't really blueprints for.

On the screen, I have an editable grid, for example. So like, you might find descriptions of "grid" role in the ARIA spec, but not really… like, not really guidance for a lot of the kind of like nitty-gritty pattern choices you have to make, and also not really great guidance for, like, interactions, advanced interactions, things like that. So I've been doing kind of usability studies through Microsoft on patterns for a while, and I have a bunch of, I don't know, like, interesting results.

It's funny you mentioned tooltips, 'cause I actually did one on tooltips… a while ago. Like, a couple on tooltips, actually! I didn't plan to talk about those. I do have some.

<i class="timecode">[00:05:11]</i> **Stephanie:** Nice.

<i class="timecode">[00:05:12]</i> **Sarah:** Yeah. I even forget what I did. It was… oh, it was the toolbar. Yeah. Oh, I don't like that. Yeah. 

<i class="timecode">[00:05:20]</i> **Stephanie:** Classic tooltip scenario. 

<i class="timecode">[00:05:22]</i> **Sarah:** Yes. But yeah! If you want, we can dive straight into that!

<i class="timecode">[00:05:30]</i> **Stephanie:** Yes, absolutely! Yeah, so I think that folks coming to the stream, they're going to be all skill levels. All, you know, various levels of familiarity with accessibility. Ben's stream is usually about accessibility. But yeah, definitely ARIA for everyone is probably the least understood, so yeah! 

<i class="timecode">[00:05:53]</i> **Sarah:** Yeah! Maybe, like, kind of start off kind of, like, a overview of like, what ARIA is and, like, how you look up kind of general stuff about how to use ARIA, what's it for, what's available? 

<i class="timecode">[00:06:10]</i> **Stephanie:** Absolutely, sounds great. 

<i class="timecode">[00:06:12]</i> **Sarah:** Cool! So ARIA stands for "Accessible Rich Internet Applications." So it's kind of there for… a little, like, add-on seasoning to HTML for when you're creating things that HTML wasn't really meant for. So like, if you're building application tabs like these browser tabs along the top of the browser or, like, editable grids and spreadsheets or comboboxes or stuff like that where there isn't really something in HTML, or HTML isn't giving you the semantics you need. ARIA is kind of, like, there to sprinkle some semantics over the top so you can get an accessible experience in addition to, you know, the visual experience we make with CSS and the programmatic one you make with JavaScript.

So ARIA only does semantics. It doesn't do interaction. So if you do something like `<div role="button">`, it doesn't give you any of the interaction of a button. Like, it doesn't give you Enter and Space. Like, Enter and Space don't trigger click events. None of that happens. It just, like, gives you semantics, like button semantics.

By which I mean, like, if you were to do something like… let's… I don't know, slight digression. If you're gonna do something like directly inspect the accessibility API for a control. Oh no! Let's not update. Will it still work? Okay, good. This is theoretically a link. I don't know. It looks like a link. Come on. We'll see if my computer can handle sharing my screen and running Accessibility Insights at the same time. Yes, there we go. So I know this is really small. It's really hard to zoom in on this application, unfortunately. But there's a tree. So this is not DOM. This is not the browser's accessibility tree. This is literally, like, the accessibility API for Windows. So you can see it goes beyond the browser. Like, you actually have my desktop and then the browser and then blah, blah, blah. But yes, this is the actual accessibility API. This is what, if you run, like… Narrator's a screenreader. It's what Narrator would interact with. And so this AriaRole is "link," and the ControlType is essentially a programmatic thing that means link. And so if you put role="link" on text, those two things will be there. Like, AriaRole and ControlType will both be "link." But it, like, it won't have all this other stuff like InvokePattern and things like that. Actually, well, I'm not — yeah. It won't have browser-added stuff like Enter and Space to click and things like that. 

<i class="timecode">[00:09:22]</i> **Stephanie:** Gotcha.

<i class="timecode">[00:09:24]</i> **Sarah:** So that's what I mean by semantics, I guess. ARIA only does semantics, no interaction.

<i class="timecode">[00:09:29]</i> **Stephanie:** Yeah. You made me think of one area that I recently… considered or, you know, better realized the impact of semantics, where I don't think — correct me if I'm wrong — but what ARIA also doesn't correct for is, like, Windows High Contrast Mode. So, for those that aren't familiar, Ben streamed two weeks ago, I think, with Eric Bailey talking about that mode, if you haven't heard of that. But in that mode, you get a super reduced palette. And so in the links and buttons example, you have in some themes — not all themes — but one color for links and one for buttons. And so ARIA is not going to compensate and correct for that if you haven't used the correct underlying element, and all the JavaScript in the world… <i class="brackets">[laughs]</i> won't necessarily change that, so. 

<i class="timecode">[00:10:19]</i> **Sarah:** Yes. Yeah, ARIA kind of by design, yeah, does literally nothing but semantics. And the idea there is that, like, it's supposed to be kind of a low-level tool to build completely custom UI, so there's no magic involved. Like, it's very strictly, like, semantics-only. If you're building something with it, you need to build all of the things, you need to put all of the things together, and ARIA is just the semantics part. And as you mentioned, you also have to do high contrast styles. When relevant, you also have to do, like, the actual interaction with JavaScript. All of that.

I have mixed feelings. Like, I personally think that maybe high contrast mode should take ARIA into account, just because like… I get that it's not supposed to be magic, but so few people think about high contrast mode, and it seems like the happy path, like, the thing that would get better accessibility across the board would kind of just be to take it into account when applying high contrast mode, but… eh!

<i class="timecode">[00:11:29]</i> **Stephanie:** Yeah, super interesting. I didn't mean to, like, take us on a tangent, but now I'm just a little bit curious. You don't have to open it, but, you know, you're a great example on things where you're augmenting that, so it's necessary, but it may not be fully conveying purpose in that mode. Maybe it does! I don't know.

<i class="timecode">[00:11:45]</i> **Sarah:** Yeah!

<i class="timecode">[00:11:46]</i> **Stephanie:** But yeah. I'll let you keep going with the original topic. 

<i class="timecode">[00:11:50]</i> **Sarah:** Yeah! No, high contrast mode is interesting. And, like, undergoing a lot of change! It's switched to more, like, generic forced colors mode — or, well, a forced colors media query, rather than the previous, like, Windows High Contrast Mode media query — and more, like, cross-platform work on it, so maybe we'll see it being used outside of Windows. Who knows? Right now it's not, but yeah. 

But yes, anyway! ARIA. If you ever like… I opened up the ARIA spec. It has… like, the ARIA spec is useful if you… primarily useful if you kind of know what you want and you want to look up specifics regarding it. Like, if you don't know what you want to build, or you don't know what semantics to use for what you want to build, this is not very useful. Like, you're not going to go here and, like, browse the list of roles and be like, "Oh yes, I think, I dunno, role="listbox" is what I want because I'm making a list that's a box." That's a little simplified, but like, honestly, if you want to read, like, listbox role, it's not… I mean…

If you're coming at this not knowing much about, like, the specifics of how to use the "listbox" role, in my opinion, this is not super helpful. Which isn't necessarily a bad thing. Like, this spec is not really geared towards guiding people in necessarily how to build things from a high level. It's kind of geared towards telling browser implementers what they need to do, and also, like, just providing definitions for things. So it's very useful if you want to be like, "Can I use aria-readonly on a listbox," and the answer is yes, or "Can I use…"

What's something that isn't here? "Can I use aria-selected directly on a listbox?" And the answer is no, I really hope. Yeah, it's not there. Good. That would be on the options inside the listbox.

So if you want to know, like, is this specific attribute allowed on this role or does this role exist, it's great. Or if you want to know, like, what are the available… like, "How do I use aria-controls? What is the actual string I pass in?" Then it'll tell you, like, you should pass in a list of ID references. Yes. That works. But yeah, so it's this nice, like, kind of very definition-based place to look.

If you're looking for more guidance on how to build something, the ARIA practices guide can be helpful. A lot of people mistake this for a spec. It is not. This is just examples of how to use it. So if you're like, "How do I build a combobox? What do I need?," then this is much more geared towards what you would want because it actually has kind of like descriptions of, like, what it is, how to use it. It has examples that you can go to and inspect. Things like that.

And the important thing to… like, ARIA Practices can be, I don't know, good and bad? It's good in that it's much more readable than the ARIA spec in that it has, like, valid usage of ARIA that you can look at. Whereas if you're looking at, I don't know, some random component library, their ARIA might not be valid. Usually isn't. So valid uses of ARIA, more reader-friendly.

But I would say it's also, like… I dunno, like, often the, like, simplest use of something. So for a combobox, if you want to do something weird, like, say you want… this is one I've come across recently. Say you want an input inside the pop-up. Maybe the answer is you shouldn't do that, but like, if you actually want to build that, ARIA Practices isn't going to help you. Or if you want, like, a select-all option or something like that, it's not going to help you. Or for, like, the grid, say you want to build an actual spreadsheet, whereas the APG grid is, I dunno, simpler. Then you might not actually want to follow all of the recommendations here, and that's fine. Like, APG is a set of examples, not an actual spec. 

<i class="timecode">[00:16:40]</i> **Stephanie:** Okay. Yeah, that's good to know. And I think that, I mean, when you had that open, the W3C version of the spec is actually pretty new, which is kind of interesting, but the practices have been around quite a while because they influence directly how screenreaders and other tools approach your interface. I don't know, if you want to talk about, like, that part of ARIA at all?

<i class="timecode">[00:17:10]</i> **Sarah:** So, this version is the latest version of the ARIA spec. The ARIA spec itself does predate ARIA Practices. Like, the earliest version is… oh, god. I looked it up once. I don't want to quote something now because I'm going to be really wrong. A decade or so? I forget. It's gotta be more than that. I dunno.

<i class="timecode">[00:17:40]</i> **Stephanie:** Gotcha.

<i class="timecode">[00:17:41]</i> **Sarah:** Someone should look it up for me. 

<i class="timecode">[00:17:44]</i> **Stephanie:** I think I was… hold on, I think I was getting confused. I misspoke. What I just meant to say was it's newer to… like, it was recently added to the… maybe it's now tied to the HTML standard? Or, I dunno, something about it was a little bit more recent. But yes, the, like, extended spec, the existence of it, yes, it's been much longer. 

<i class="timecode">[00:18:07]</i> **Sarah:** Yeah. I linked to, like, the Editor's… the Working Draft. Like, this is… essentially this link, the w3c.github.io/aria, that's… essentially, what's in the, like, latest main branch in GitHub is what you'll see here, versus if you want, like, the actual, like, W3C rec, it's a couple versions behind or the latest published version will look a little different. There's also Open UI? Maybe that's it? Like, Open UI is new. Or there's also, like, a new version of ARIA Practices that's in the works. 

<i class="timecode">[00:18:53]</i> **Stephanie:** Cool.

<i class="timecode">[00:18:55]</i> **Sarah:** I forget what the URL is. But Matt King's working on that, and it looks really nice.

<i class="timecode">[00:19:04]</i> **Stephanie:** Cool.

<i class="timecode">[00:19:04]</i> **Sarah:** It's a, like, big layout change. It's going to live in the, like, WAI — the Web Accessibility Initiative — site, rather than where it currently is, and be much more, like, learning-focused and hopefully easier to read and navigate through and a little friendlier than the current, very text-heavy kinda thing.

<i class="timecode">[00:19:30]</i> **Stephanie:** Awesome! Definitely something to keep an eye out for. 'Cause I have visited the Authoring Practices a lot for sure. And like you said, it may not be the most complete resource, but even just to be able to look beyond your current knowledge of what you… or, like, validate your initial assumptions of what should be going on. Like, for that combobox, you may not realize that if you're doing that yourself, you have to handle arrow keys or whatever.

<i class="timecode">[00:19:58]</i> **Sarah:** Yeah!

<i class="timecode">[00:19:59]</i> **Stephanie:** Things like that. So, at least helping be more aware of the expectations is nice for that resource. 

<i class="timecode">[00:20:07]</i> **Sarah:** Yeah. Although when you said combobox, that also reminded me. Like, another example of where ARIA Practices might not be exactly what you want is, when I did usability studies on comboboxes, I learned that if you tab away from an open combobox, people expect what you were on to be selected, which isn't… maybe it is now, but that's not actually listed as…

No, it is that! Is it? Yes, it is! Aha! I don't think that was there before, never mind. Or I'm remembering wrong. But what is it, Alt + Up Arrow? No, that's there too, now. Ahh. Either this change or I'm misremembering it entirely. I was going to say like, there's some extra stuff that you want to happen that isn't necessarily listed here, but I think it's listed here now.

<i class="timecode">[00:20:59]</i> **Stephanie:** Awesome!

<i class="timecode">[00:21:02]</i> **Sarah:** Awesome.

Well, yeah! Eh, I don't know. 

In general, like… in general, the principle is there where, like, if you have a reason to believe that some specific, like… presentation or interaction is different than what's in APG, and, like, you can articulate an actual user-focused reason for it, then do it, because APG is not authoritative. It's just an example.

<i class="timecode">[00:21:32]</i> **Stephanie:** Sure, okay. Yeah, cool. Good to know.

<i class="timecode">[00:21:35]</i> **Sarah:** Also, APG just by virtue — like, in its current incarnation — just by virtue of what it is, it always demonstrates ARIA because the, like, purpose is to demonstrate ARIA. So if you go to, like, "Button," it's going to be a `<div>` button using ARIA. That doesn't mean you should actually, like, code a `<div>` button. It's just there to demonstrate specifically how to use ARIA.

<i class="timecode">[00:22:00]</i> **Stephanie:** Good tip.

<i class="timecode">[00:22:02]</i> **Sarah:** Yes. I've literally had people, like, say "We should be using `<div>`." Like, "Should we be using `<div>`s? Because the APG uses `<div>`s for buttons." And the answer's always no. Or, like, spin button is a great example. Like, a spin button is an input with a type of "number." But for ARIA, there's, like, a `<div>` with a role of "spinbutton."

Sorry, I don't know why my internet is going really slowly.

<i class="timecode">[00:22:23]</i> **Stephanie:** I don't think you've mentioned the first rule of ARIA, actually, now that you say that.

<i class="timecode">[00:22:26]</i> **Sarah:** Yes! The first rule of ARIA is don't use ARIA. 

<i class="timecode">[00:22:32]</i> **Stephanie:** There it is, right up there. It even says so. 

<i class="timecode">[00:22:36]</i> **Sarah:** Yeah, it says, "Read Me First." I don't think having a section titled "Read Me First" actually works. But you know! It was an effort. Yeah! It says "don't use ARIA" and then proceeds to only use ARIA.

Yeah! So ARIA. It's fun. Blogposts are often, like…

Oh, I didn't even talk about the AAM specs. Maybe that's not… I don't know. We can go back to them later. Maybe. They're more useful if you're trying to debug accessibility APIs.

"ARIA in HTML" is kind of… it deserves more love, though. It describes what you can use on native HTML elements. So, like… let me see. Stuff like "don't use role="spinbutton" on a heading." Things like that. So it'll list, like, allowed roles per element.

<i class="timecode">[00:23:45]</i> **Stephanie:** Mm-hmm.

<i class="timecode">[00:23:47]</i> **Sarah:** Requirements…

Somewhere in here. There we go! 

<i class="timecode">[00:23:56]</i> **Stephanie:** Oh yeah, I remember seeing this. It's a really great resource. 

<i class="timecode">[00:24:01]</i> **Sarah:** Yes. 

So, yes. "ARIA in HTML" spec: also useful. And blogposts are useful. Like, I don't know, 24 Accessibility has a bunch of good articles. The A11Y Project has a bunch of good resources. Heydon's Inclusive Components has great pattern advice. And those are usually much easier to read and I would say, like, just as useful as APG if you get, like, a good author or an author that you trust. 

<i class="timecode">[00:24:33]</i> **Stephanie:** Yeah. I can't help but ask, who are you— I mean, I get a lot of my, you know, latest news or information on Twitter. Is there anybody, like, folks you would recommend following for that insight?

<i class="timecode">[00:24:50]</i> **Sarah:** Yeah! Yeah. You mentioned Eric Bailey. I think definitely him. Shell Little does a bunch of design, inclusive design stuff. For ARIA, Adrian Roselli and Scott O'Hara I think are both really good people to follow. Crystal Preston-Watson — @ScopicEngineer on Twitter — also a good person to follow. Now I'm going to look at my Twitter.

<i class="timecode">[00:25:22]</i> **Stephanie:** Just go follow everyone you're following. How about that? That probably works too. 

<i class="timecode">[00:25:27]</i> **Sarah:** Yeah. Um, yeah! A lot of the people I follow now are more, like, disability rights sort of stuff.

<i class="timecode">[00:25:39]</i> **Stephanie:** Oh, cool.

<i class="timecode">[00:25:40]</i> **Sarah:** Which I also recommend Alice Wong! You should read… do I have it on this bookshelf? Yes! Disability Visibility!

<i class="timecode">[00:25:50]</i> **Stephanie:** Okay!

<i class="timecode">[00:25:51]</i> **Sarah:** Highly recommend. Also follow her on Twitter.

<i class="timecode">[00:25:57]</i> **Stephanie:** Awesome. We're working on dropping links in for all those things in the chat. Cool. Is that the Disability Visibility Project, or is that unrelated? 

<i class="timecode">[00:26:08]</i> **Sarah:** It's related! They're both… so, the book is a collection of essays edited by Alice Wong. I think… I don't know if all of these are in the Disability Visibility Project, but it's the same idea. This is just, like, in book form and edited and all of that. But also, recommend the Disability Visibility Project online. 

<i class="timecode">[00:26:31]</i> **Stephanie:** Awesome. Thank you for those recommendations. We've dropped quite a few in chat. Thanks, Ben, for helping grab the Twitter handles too.

Cool! Well, we are halfway through, so I just want to make sure we get to the demos and this stuff in the studies you mentioned as well.

<i class="timecode">[00:26:47]</i> **Sarah:** Yes! Thanks. Yeah! So I mentioned, like, spreadsheets and grids earlier. Let's just go straight to this. So, I've done, like, a number of, like, research studies and a lot of testing around grid interaction and grid semantics. Even for something that looks…

So, let me go over kind of like…

This is kind of the end result right here. So I'll go over what it does, or the relevant parts of what it does, I guess. So, the reason I created this was I've talked with a couple of teams that do actually need to do, like, heavy grid editing, or heavy data editing in a grid, which is slightly different than having a grid that is primarily to, like, perform, like, a couple actions on an item that are not editing, or, like, a selection-focused grid. Although, this also has selection. So I was trying to figure out, like, what's a good pattern if you actually need to, like, go through and edit efficiently. And I was looking at some things like Excel, Google Docs, things like that, and also at, like, primarily screenreader behavior, because… I dunno, screenreaders are the hardest to make grids work for.

So what it does right now is, I can use arrow keys to move through all of the cells when using, like, Up, Down. I can do Home and End to go to the first and last. Page Up, Page Down to jump, like, up and down by a chunk. Otherwise, arrow keys go through every single cell. And if I hit Enter on any cell, I immediately go into edit mode. And in edit mode, I can tab through every editable cell, essentially. This is me hitting Tab. And I can Escape or Enter to get out of that. And if I arrow over to the checkboxes, I can hit Space or Enter to check and uncheck, and there's a select-all up there. And some of the other interesting things are, in the checkbox…

Let me… zoom in here a bunch. Ahh, too much. Okay.

In the checkbox, the focus is going onto the grid cell, but it does have a nested, like, literal checkbox input inside of it. And the checkbox itself is labeled by the first column, and the column header for the checkbox has a labelledby of "select row," but the input itself has a label of "select all rows." Just some interesting ARIA usage or, like, convoluted ARIA usage there, where if I pull it up again for the select-all checkbox, what it's doing is, there's a… like, the column header has aria-labelledby pointing to this "select row," which overrides its name from content, which would have included the "select all rows" text in the checkbox. So that means, like, ideally, when this is supported, the checkboxes in this column have a column header of "select row" and not a column header of "select all rows," which would be weird if you're on a checkbox for a specific row and it told you "select all rows." So, yes. That's a great example of using ARIA to make up for problems with HTML.

<i class="timecode">[00:30:40]</i> **Stephanie:** Yeah, absolutely, and a good example of… sometimes we get focused on just the checkbox and we don't think of that wider view of what's the whole interaction when it all comes together. So, yeah. 

<i class="timecode">[00:30:55]</i> **Sarah:** Yeah! So, I'm gonna, I think, start up NVDA and we're going to hope the sound goes through, and go through this really quick and just look at how it works with a screenreader.

<i class="brackets">[NVDA chimes]</i>

<i class="timecode">[00:31:11]</i> **NVDA:** Loading NVDA — please wait. Grid spreadsheet example and five more pages. Microsoft Edge canary. Books, heading level 2.

<i class="timecode">[00:31:16]</i> **Sarah:** Okay. Do you hear it?

<i class="timecode">[00:31:18]</i> **Stephanie:** I hear it, so hopefully it should be passing through the chat. I think I saw it on my…

<i class="timecode">[00:31:21]</i> **Sarah:** Cool.

<i class="timecode">[00:31:22]</i> **Stephanie:** …meter that's going through, so. 

<i class="timecode">[00:31:24]</i> **Sarah:** Nice.

<i class="timecode">[00:31:25]</i> **NVDA:** Books, table with 24 rows and 6 columns. Row 1, column 1. Selected, select row. 

<i class="timecode">[00:31:28]</i> **Sarah:** Awesome. So, I just hit T, which is the shortcut to jump to the table. And I'm going to first use Control and Alt and arrow keys. This is NVDA — I forget if I said that already. I'm going to use Control and Alt and arrow keys to move, like, cell by cell, either horizontally or vertically through the table. Really quick. I'm going to go to… I don't know, let's go to the Lost Continent cell in the Title column. 

<i class="timecode">[00:31:54]</i> **NVDA:** Column 2, Title.

Row 2, World War Z, button.

Row 3, When a Crocod—

Row 4, Tibet—

Row 5, Conversations—

Row 6, I'm a Stranger Here—

Row 7, The Lost Continent, button, edit.

<i class="timecode">[00:32:02]</i> **Sarah:** Um, yeah! So I just used Control-Alt-Left Arrow and then Down Arrow to get down there. And I know the speech is set a little fast. I should have slowed that down before this! But what it said when it got, there was row — I forget the number — seven or whatever, The Lost Continent edit button. And the reason it said "edit button" is because there is in fact also an edit button—

<i class="timecode">[00:32:28]</i> **NVDA:** Spreadsheet, edit, edit.

<i class="timecode">[00:32:30]</i> **Sarah:** —there, which is an actual… like, in the DOM, there's an actual button. It never gets keyboard focus, but it's there. And if I… I just used my mouse, so this might be messed up, but if I use instead of Control-Arrow Keys, if I just use the item-by-item navigation, I should be able to get to the edit button.

<i class="timecode">[00:32:49]</i> **NVDA:** Button, edit.

<i class="timecode">[00:32:49]</i> **Sarah:** There we go. And if I want to… this is all in virtual cursor, so I am not using, like, any of the programmed interactions with the table yet. I'm just using NVDA's interactions. So if I use Space on that button… 

<i class="timecode">[00:33:03]</i> **NVDA:** Edit, selected, The Lost Continent. Grid spreadsheet example, document. Main landmark.

<i class="timecode">[00:33:09]</i> **Sarah:** Yeah!

<i class="timecode">[00:33:09]</i> **NVDA:** Books, table. The Lost Continent, Save, Cancel. Row 7, Title, Column 2. Edit, selected, The Lost Continent.

<i class="timecode">[00:33:11]</i> **Sarah:** So I can, without entering application mode, just using NVDA shortcuts, I can start editing the spreadsheet. And if I get out of this…

<i class="timecode">[00:33:27]</i> **NVDA:** The Lost Continent.

<i class="timecode">[00:33:28]</i> **Sarah:** If you… so, when I went into the form field, NVDA did in fact go into forms mode, so now I'm in forms mode. If I want to, I can now use the arrow keys and use the grid kind of… the programmed grid interaction, and I can also use NVDA with that.

<i class="timecode">[00:33:44]</i> **NVDA:** Bill Bryson, row 7, Author, column 3. Harper Perennial, row 7, Publisher, column 4. Penguin Books, row 8, Publisher, column 4. Edit, selected, Penguin Books.

<i class="timecode">[00:33:50]</i> **Sarah:** And that was me using unmodified arrow keys, just using, like, the grid programmed-in arrow keys.

<i class="timecode">[00:33:56]</i> **NVDA:** Selected, P-U-B-L-I-S-H-E-R.

<i class="timecode">[00:34:00]</i> **Sarah:** And I can…

<i class="timecode">[00:34:01]</i> **NVDA:** Fun Publisher.

<i class="timecode">[00:34:01]</i> **Sarah:** I used Enter to submit, and I can do that as well. So both of those work with NVDA — yay! Oh, and when I'm—

<i class="timecode">[00:34:09]</i> **NVDA:** Edit, selected, Fun Publisher.

<i class="timecode">[00:34:11]</i> **Sarah:** —doing this, if I wanted to, without using shortcuts like Enter or Escape, if I were to go back into scan mode—

<i class="timecode">[00:34:18]</i> **NVDA:** Button, graphic, Save. Button, graphic, Cancel.

<i class="timecode">[00:34:20]</i> **Sarah:** —I can activate the cancel and save buttons directly.

<i class="timecode">[00:34:26]</i> **NVDA:** Button— Fun Publisher.

<i class="timecode">[00:34:28]</i> **Sarah:** So yeah! That's — ooh! One other thing that I'm just going to… like, I don't think you're going to notice anything out of the ordinary, which is what should happen, but I'm just going to go over to the checkbox.

<i class="timecode">[00:34:40]</i> **NVDA:** Sam Miller, row 8, Author, column—

Delhi: Adventures in a Megacity.

Delhi: Adventures in a Megacity, unselected, row 8, select row, column 1.

Favorite Folktales From Around the World, unselected, row 9, select row, column 1. Space, selected.

<i class="timecode">[00:34:48]</i> **Sarah:** So I was in forms mode. I arrowed over to the checkbox cell and I hit Space, and then it announced the selected/not-selected state, and without anything messing up, and that is relevant because of what happened before I coded it like this. So I'm going to turn off NVDA really quick.

<i class="timecode">[00:35:10]</i> **NVDA:** Exit Books table, space. Press—

<i class="brackets">[NVDA chimes]</i>

<i class="timecode">[00:35:12]</i> **Sarah:** Uh, yeah! So hopefully that shows it, like, pretty much working how people on the call would expect. Like, I think, like, something like this seems clearly okay when you present it on its own, but this is the result of, like, two separate user studies and, like, months of talking to people and trying to figure out things that worked. So just for fun, I'm going to go through a bunch of the older patterns that I tried, I think, unless anyone has questions. 

<i class="timecode">[00:35:50]</i> **Stephanie:** I didn't see questions, but I do just want to mention for folks that maybe came later after the start of the stream, that when YOU say user testing, Sarah comes to us from Microsoft, so these are very legitimate user testing being done, and lots of rounds of testing and things that have gone into this. So, I just wanna make sure folks in chat realize the quality of results that you're presenting today. So, but yeah, that's really good. It's been a great example so far, thank you. 

<i class="timecode">[00:36:23]</i> **Sarah:** I mean, I hope it's legitimate!

<i class="brackets">[Both laugh]</i>

We went through… there was a third-party firm — Applause — that did the user testing itself, which is good because, like, I'm not a user researcher!

<i class="timecode">[00:36:34]</i> **Stephanie:** Nice.

<i class="timecode">[00:36:34]</i> **Sarah:** So they provided the user researchers and I provided the grids.

<i class="timecode">[00:36:38]</i> **Stephanie:** Okay, cool!

<i class="timecode">[00:36:39]</i> **Sarah:** Um, yeah! I actually — here, let me see. 

<i class="timecode">[00:36:42]</i> **Stephanie:** There is a question about any big surprises, but I think we're going to kind of see that 'cause you're gonna walk through some of the process, so.

<i class="timecode">[00:36:49]</i> **Sarah:** Yeah! I think so. There were definitely things that surprised me along the way, for sure.

There's kind of a list of the people who participated. We were mostly focusing on screenreader users because of what we were trying to figure out with the grid, but also a few people who had mobility disabilities and mobility-related assistive tech also participated, like ergonomic keywords, switch devices, Dragon NaturallySpeaking. People who were not using any AT but had a mobility impairment and just gave feedback based on using their computer, like the ease of use based on that. Some people who used low-vision related software like ZoomText and Magnifier. Yeah! And two? One? One person who used braille. And a bunch of, like, JAWS, Voiceover, NVDA, Narrator as screenreaders.

But yeah! So the things… the things I tested on the way there. I'm going to focus on, I think, the editing and the selecting because those are… I don't know. Otherwise, there's too much stuff.

So the first thing I tried was basically, like, I didn't put buttons there at all just to start with. It seems obvious now, but at the time I didn't think of it. So it was just, like, straight up, you know, your focus is on the grid cell, and you just have to know that you have to Enter/Escape to get there. And for selection…

I had another editing thing, but the difference is mostly semantic and I also didn't have buttons there. I tried role="application" — because I've seen people do that — on one of them. Spoiler, no one liked role="application", and don't use role="application." That one was more or less expected, but just this study did confirm, in fact, that role="application" is bad.

So in this first study, I had two variants on how selection worked. One of them had focus on the entire row, and Enter or Space on the row would set aria-selected on the row itself. And the leftmost column is pretty much for visuals. Well, I mean, it is a cell that has aria-selected on it, but… yeah. And you can't access the individual cells directly with the arrow keys. They're not directly actionable. It's just, like, focus goes on the rows; aria-selected on the rows.

And the other one I did was more like the final result with one big difference, which is that focus is on the checkbox. So I'm going to turn on NVDA and show you what that's like.

<i class="brackets">[NVDA chimes]</i>

<i class="timecode">[00:39:59]</i> **NVDA:** Loading NVDA — please wait. Grid Usability Studies. House Listings, heading level 2.

<i class="timecode">[00:40:11]</i> **Sarah:** Okay.

<i class="timecode">[00:40:12]</i> **NVDA:** House Listings, table, 51 rows and 7 columns. Row 1, column 1, select row. 

<i class="timecode">[00:40:12]</i> **Sarah:** Yeah. So I'm gonna—

<i class="timecode">[00:40:12]</i> **NVDA:** Column 2, Name, filter, filter. Row 2, 12 Oak Streat. 

<i class="timecode">[00:40:14]</i> **Sarah:** I'm gonna just… I'm on the first, on the Oak Street, the second cell in the first data row after the headers, and I'm going to hit Enter to go into forms mode. Theoretically.

<i class="brackets">[NVDA clicks]

Did that. Okay. If you heard that chink, that's mode-switching. So I can manually switch modes using the NVDA modifier key and the space bar, which in my case is Caps-Space Bar.

[NVDA beeps]

So that means virtual cursor or scan mode, and…

[NVDA clicks]</i>

That means forms mode. The difference is in virtual cursor, NVDA is handling all of the interaction, and in forms mode, all the keyboard events are sent through to the DOM. So now that I'm in forms mode, if I use arrow keys… 

<i class="timecode">[00:41:00]</i> **NVDA:** Grid Usability Studies, document. Main landmark. House Listings, table. 2,800, row 2, Square Feet, column 4. 360,000, row 2, Price, column 3. 480,000, row 3, Price, column 3. 

<i class="timecode">[00:41:09]</i> **Sarah:** So this is actually moving focus, because I'm using arrow keys and what's happening is the code… like, the code I wrote for the grid is actually handling the arrow keys and they're being sent through. But if I change the mode…

<i class="brackets">[NVDA beeps]</i>

And I hit just the down arrow.

<i class="timecode">[00:41:24]</i> **NVDA:** Row 3, Square Feet, column 4, label, 1,800.

<i class="timecode">[00:41:26]</i> **Sarah:** What happened is NVDA moved focus — moved not focus, but moved its cursor to the next element or the next accessibility node. Um… that's not technically correct. It moved focus to the next thing that it deigned worthy of item focus, which was the next cell in this case, without moving actual keyboard focus because it is not sending any event through to the DOM. It's fully handling everything, all keyboard input. And that's relevant because a lot of people prefer to use virtual cursor mode because screenreaders are, you know, advanced, like, very, like, user-tuned software that have a lot of shortcuts for people, and if they turn off virtual cursor mode, if they go into forms mode, they fully rely on the specific page they're on to provide the necessary interaction. And for something like a grid, that's often not the case! So it's, a lot of the time, a lot better, like, a lot just… safer, a lot more predictable to use what's built-in with the screenreader, so it's really important to support that. Also important to support application mode. Anyway, slight digression.

<i class="brackets">[NVDA clicks]</i>

<i class="timecode">[00:42:39]</i> **NVDA:** 1,800, row 3, Square Feet, column 4. 

<i class="timecode">[00:42:40]</i> **Sarah:** So I just switched back to forms mode. Focus is now on the field that… I dunno, it was on before. Now I'm going to arrow over to the checkbox. 

<i class="timecode">[00:42:50]</i> **NVDA:** 480,000. The Berkley Building, row 3, Name, column 2. The Berkley Building, row 3, select row, column 1. The Berkley Building, checkbox, not checked. 

<i class="timecode">[00:42:55]</i> **Sarah:** Oh, cool. Okay, no, this didn't work because… I'm sorry. I manually switched into forms mode, which means that it'll stay in forms mode, so it stayed in forms mode for the checkbox. I'm gonna… I'm gonna tab away.

<i class="timecode">[00:43:07]</i> **NVDA:** Choose houses, button.

<i class="brackets">[NVDA beeps]</i>

Choose houses, button.

<i class="timecode">[00:43:09]</i> **Sarah:** And now I'm going to tab back.

<i class="timecode">[00:43:11]</i> **NVDA:** House Listings, table with 51—

Out of checkbox, Name, filter, column 2, clickable.

<i class="timecode">[00:43:14]</i> **Sarah:** Oh, god. Sorry, I have to set this so that it actually works.

<i class="brackets">[NVDA beeps]

Okay. The problem with manually mode-switching before is NVDA's respecting the mode I chose. Now let me try tabbing back and hopefully it should auto-switch.

[NVDA clicks]</i>

<i class="timecode">[00:43:28]</i> **NVDA:** House Listings, table. The Berkley Building, row 3, Name, column 2.

<i class="timecode">[00:43:29]</i> **Sarah:** There we go. Okay. So yes, if you manually switch, the screenreader should respect the mode you picked. But also, a lot of people, especially people who are less tech-savvy, will rely on auto-switching, which means that NVDA and JAWS and Narrator are picking the mode they think they should be in based on the semantic role of what it is they're focused on. So, right now I'm focused on a grid cell, which NVDA thinks it should be in forms mode for. Now, finally, I'm gonna arrow to the checkbox.

<i class="brackets">[NVDA beeps]</i>

<i class="timecode">[00:44:02]</i> **NVDA:** Row 3, select row, select all rows, column 1. The Berkley Building, checkbox, not checked. 

<i class="timecode">[00:44:04]</i> **Sarah:** So, if you noticed, there was that little ping of it switching back into virtual cursor, or scan mode. So now, if I try to arrow back or arrow down, it's not going… like, the grid isn't going to be handling arrow keys anymore.

<i class="timecode">[00:44:21]</i> **NVDA:** Name filter, column 2, clickable, The Berkley Building.

<i class="timecode">[00:44:22]</i> **Sarah:** So suddenly, like, that focus movement isn't working because I landed on the checkbox. So that will… like, because I set focus on the checkbox input itself, that happens every time you try to arrow over to a checkbox to change it without fail, unless you, like, manually switch modes a lot.

<i class="brackets">[NVDA clicks]</i>

<i class="timecode">[00:44:46]</i> **NVDA:** The Berkley Building, row 3, Name, column 2.

<i class="timecode">[00:44:51]</i> **Sarah:** So that was a surprise for me, I guess. Or… like, some of the people I talked about this with while I was developing it are, like, very tech-savvy, very advanced, like, pro screenreader users, and they were, like, manually switching modes a lot, so this didn't come up, but in the usability study, it definitely did. And the other thing that happened was the column header for this was "select all rows," which people commented on, and it's also why I changed… I did that, like, aria-label, aria-labelledby thing for the other one.

Um, yeah! I don't know!

<i class="timecode">[00:45:40]</i> **Stephanie:** I mean, that was a lot of learnings. And I think one thing, too, you said that this was one of your earlier ones that you sent out.

<i class="timecode">[00:45:48]</i> **Sarah:** Yeah.

<i class="timecode">[00:45:49]</i> **Stephanie:** And so, you know, it's fascinating because there's so much going on here, and so even to have someone who works in it every day, you know, still, you know… it just reemphasizes it's always good to validate your assumptions and real users are the best way to go about that, so cool. 

<i class="timecode">[00:46:06]</i> **Sarah:** Yes. Yeah! And I do want to emphasize, like, yeah, I work on this a lot but, like, any new pattern is not going to be perfect or necessarily even good the first time. Like, even before I made these, I did do a lot of screenreader testing myself. And at the time, I was working on a team with a coworker who is blind and uses JAWS, and I was going over these with him as well. And so it's like, they weren't coming out of nowhere. But yeah, there were definitely still a lot of things wrong.

Am I still running NVDA? No. Okay.

I do have… I do have some quotes, some actual, like, feedback I gathered from the usability study itself. Some of those were like… like I mentioned, needing to switch screenreader modes. That was definitely a, like…

So, even before going in this, as I mentioned, like, I was aware that the checkbox was pulling the screenreader into a different mode, but I thought it wouldn't be that much of an issue because I thought, like, the focus SHOULD go on the checkbox because the checkbox is the one that's, like, obviously a selection widget and all of that, and I thought that would outweigh the mode thing. It did not.

<i class="brackets">[Sarah laughs]</i>

So, like, one of the things I got feedback on was needing… like, forcing people to manually switch screenreader modes so they could continue using the grid or even needing to switch modes at all to use it away from the mode that they wanted to be in was annoying. It, like, built up annoyance over time. So it was like, it wasn't a blocking thing, but it was like a death-by-a-thousand-cuts thing. So that was… yes.

The details matter. Like, this was just everywhere. I mentioned the select-all checkbox header versus… like, the select-all checkbox wording being the column header for the checkboxes. Like, that was one example. But just, like, I had a button on one of the studies that was, like, "Add" and "Subtract" instead of "Increase" and "Decrease." And apparently the word "Add" maybe, like, sounds too close to too many other things and was hard to, like, parse, and so "Increase" and "Decrease" would have been better choices.

Lots of little details like that where, like, running a usability study as a developer, I'm thinking, like, "Need to pay attention to semantics. Need to make sure, like, all of the keyboard interactions are correct." And I should've paid more attention to, like, think about the wording I'm typing into my column headers and button labels. And think about providing feedback. Like, when I had a "Choose houses" button, that gave a confirmation that people REALLY liked! Like, I did that in, you know, half an hour before I sent the prototype off, 'cause I was like, "I should do something," and that turned out to be one of the, like, things people liked the most. So yes, one of the things I took away is details really matter.

Validation and confirmation was really important. And yes, bugs with virtual cursor navigation will make people abandon the task. I had… what was it? I think it was VoiceOver that was having trouble with the grids, and I think it was the participant who used VoiceOver on macOS who just, like, stopped because when on the built-in screenreader, table navigation doesn't work, like, just throw the whole thing out.

And from a mobility perspective, double scrollbars. Like, I got a couple things of feedback — oops, not that! I got a couple of things of feedback where, like, scrolling to search for information and the fact that the listings weren't alphabetized were a big burden for people who have mobility impairments. So information structure — this is not going to be news to anyone who's a designer — but for anyone who's a developer who works on designing components, information architecture is really important. Sometimes even more important than ARIA. Often more important than ARIA.

I do have some actual quotes. I don't know. If you see any questions, or if you have any questions, just stop me because… I have too much information. 

<i class="timecode">[00:50:54]</i> **Stephanie:** No, you're doing good. I will just mention we're kind of down to the last ten minutes or so. I don't know if you had another demo. Or just making sure that you share what you wanted to share for sure, so. 

<i class="timecode">[00:51:05]</i> **Sarah:** Yeah! I mean, I can go through the quotes quickly. There is a live region demo. We'll see. If there's time.

But yeah. On a grid with no actual separate edit buttons, there was the feedback that someone couldn't tell that they could actually edit certain cells. And the braille… like, the person using the braille device was having issues actually, like, clicking or getting into the cell to edit the price based on the fact that there were no separate buttons. There were a couple of other quotes, but that's part of the reason I did, in fact, like, add the additional buttons in the second usability study. Somebody thought that they weren't able to select other rows because of — this was the one where I was moving focus on the rows themselves — because they weren't exposing the change in selection properly. So even when you're using the same, like, ARIA attribute like aria-selected, the element that it's on really matters. And someone was happy with it, which made me happy! Like, even the first grid attempt was not totally horrible. So if you do… like, if you do at least fall back to having, like, proper underlying semantics, like, it will at least not be blocking. 

Yeah, the second study… I'll just show you really quick. I won't demo it. The second study did have the edit button. This one didn't have selection, but it did have, like, the edit and confirm/cancel buttons and, like, had a few more, like, bells and whistles in regards to where I put focus when I was arrowing so it didn't pop out of the right mode when you arrow to something. Like, I didn't put focus on the buttons in this case, 'cause that would've popped it out of the right mode, so I kept focused on the cells. Things like that.

So some of the feedback for that were screenreader users liked it a lot better! Some of the people who had mobility impairments… this was where I got the feedback about, like, the alphabetical order and, like, improving scrolling essentially.

Yeah! I do also… let's see. I did have a study on live regions. 

I don't know. This is probably a lot to dive into with five minutes left. The TL;DR is, like… if you don't use a screenreader, like, test with a lot of people or as many people as you can when you're choosing things like creating live regions or choosing verbosity. Not even just live regions. Like, choosing… if you're adding extra verbosity, like adding extra screenreader-only text, it's really important to check with people.

Essentially what I did here was I added… I had three different prototypes. I added live regions for the number of results as you typed. I had live regions for the loading and loaded, which is why it's loading constantly. That's just the timeout. That's on purpose. I had live regions for the amount of characters left and for this changing water level. And for one of them, I had no live regions, essentially — or, I had live regions, I think, for loading unloaded but otherwise none. For the second, I had this ability to set preferences. And for the last, I just had super high verbosity. Like, the water level announced every… I forget, like, 30 seconds or a minute. The filtering… like, the number of filter results announced. And the number of characters left had a… I think it was a couple of seconds timeout or a second timeout after you stopped typing, and an alert when you hit a hundred. And people liked the middle.

But, like, in something like this, what specifically people liked is probably less important than just the process to figure it out, I think. Because, like, I didn't know what people were going to like going into this. I thought people would like the no-live-region one better. But people did actually like a certain amount of feedback, just not too much feedback. So… yeah, usability studies are great! I didn't mean to make this whole thing a whole, like, "everyone should do usability studies!" But I think it kind of… 

<i class="timecode">[00:56:14]</i> **Stephanie:** If you can!

<i class="timecode">[00:56:16]</i> **Sarah:** Yes, yeah. Yes.

<i class="timecode">[00:56:21]</i> **Stephanie:** No, that's all super fascinating.

I was curious — we have just a couple of minutes — but on the one that you found worked best, I was wondering if you could really quickly do an inspect on the editable cells.

<i class="timecode">[00:56:35]</i> **Sarah:** Ooh, yes. 

<i class="timecode">[00:56:37]</i> **Stephanie:** I just wanted to see how that ARIA came together. I know when you had the screenreader on, the accessible name included saying "Edit," since that button's sitting there. 

<i class="timecode">[00:56:46]</i> **Sarah:** Yes. That was kind of on purpose.

<i class="timecode">[00:56:49]</i> **Stephanie:** Mm-hmm?

<i class="timecode">[00:56:51]</i> **Sarah:** Yeah, because then when you arrow to this cell, the fact that you hear "edit button" tells you that there's an edit button inside of it. So yes, it has role="gridcell." It's labeled by… oh, actually, did I try to make it labeled by only the content? Maybe I tried to make it labeled by only the content and the screenreader is just not respecting it. Hm. I actually think I shouldn't have done that. I think I should have kept the button in the accessible name.

But yeah! The grid cell itself is pretty straightforward. Has the text, has the button. If you take it into edit mode, then it has the input. It has both buttons.

<i class="timecode">[00:57:39]</i> **Stephanie:** Okay.

<i class="timecode">[00:57:39]</i> **Sarah:** And the input is actually not named! Like, that's actually… this is a great case of sometimes conventional wisdom might not be best, because, like… because you're in the table, because of what you did to get here, you already have the column header that's associated with a cell. If you did a row header, then you'd have the row header associated with a cell. And naming the input would actually just be a lot of extra verbosity. And you did get here. Like, you got to the input by trying to edit a specific cell. So in this case, I did, in fact, decide to make an input without an accessible name.

<i class="timecode">[00:58:20]</i> **Stephanie:** Okay, that's a good callout.

<i class="timecode">[00:58:21]</i> **Sarah:** Against all advice, but I think it's actually the best! 

<i class="timecode">[00:58:26]</i> **Stephanie:** And I noticed that you're actually completely replacing the table cell content too. I don't know if that…

<i class="timecode">[00:58:32]</i> **Sarah:** Yes.

<i class="timecode">[00:58:32]</i> **Stephanie:** …makes a discernible difference versus, like, swapping visibility if had already been there. 

<i class="timecode">[00:58:40]</i> **Sarah:** Not really.

<i class="timecode">[00:58:40]</i> **Stephanie:** Okay.

<i class="timecode">[00:58:41]</i> **Sarah:** I send focus into the cell, like, programmatically — or, into the input — when you switch. From an accessibility standpoint, there wouldn't really be a difference between swapping it out and changing, like, display: none to display: block or visibility: hidden.

<i class="timecode">[00:58:58]</i> **Stephanie:** You just need to move the focus?

<i class="timecode">[00:59:00]</i> **Sarah:** Yeah. 

<i class="timecode">[00:59:02]</i> **Stephanie:** Cool. Well, that's been a really excellent demo. Is there anything, you know, any last thoughts you want to say, anything you're planning on? You know, any events coming up or other things you want to promote? 

<i class="timecode">[00:59:16]</i> **Sarah:** I guess one thing is something I'm working on in the ARIA spec is something called secondary actions, which is for things like grid cells that have, like, an edit button like this, or tree items, or tabs that have a close button, to allow you to kind of, like… I mean for grid cells, you can nest a button and that's fine, but it won't tell you the button's there unless you have it in the accessible name. And for tabs and stuff, you can't nest a button inside of a tab item because you aren't allowed to nest interactive items inside of things like tab buttons, listbox options, or combobox options. Things like that. Menu items. So I'm working on a change that will let you do that and also semantically expose the fact that there are nested actions. So if that were to take place, what I would do is put aria-actions="buttonId" here and this would have… "buttonId," and if it gained support, then screenreaders, when they landed on something with — Oh, did aria-actions go away? Oh, there we go! — that had an attribute like aria-actions would announce the fact that there were actions and would take care of removing this from the accessible name itself. So if you're interested, that issue is open on the ARIA spec. We're gonna make a PR soon.

<i class="timecode">[01:00:48]</i> **Stephanie:** Nice.

<i class="timecode">[01:00:49]</i> **Sarah:** Comment if you feel strongly! 

<i class="timecode">[01:00:52]</i> **Stephanie:** Yes. Ben — you know, the original host to this. They've been hanging out in the chat and they said if that gets support, they'd love to do a follow-up episode.

Yeah, and just, real quick, I want to make sure to call out, Sarah was demonstrating an upcoming change. You cannot invent your own ARIA, as a general rule! 

<i class="timecode">[01:01:12]</i> **Sarah:** Yes, please! Yeah, no, I'm doing this, like, through in the spec, and going to be working with screenreaders and browsers — already working with browsers — on making that happen. It's not… yeah. <i class="brackets">[laughs]</i> You can't just invent your own ARIA! Unless you spend a lot of time doing it. 

<i class="timecode">[01:01:35]</i> **Stephanie:** Yes. Which, very cool that you're involved with that whole process, so awesome!

Well, thank you so much for joining today! Folks, if you haven't yet connected with Sarah, please do! @codingchaos on Twitter! You know, I enjoyed her presentation at axe-con. You know, there's usually somewhere we can find your presenting. Or, you know, I definitely encourage folks to look up your past presentations as well. Your axe-con one was related to this topic, so if folks want to know even more about what they saw here today, I would highly recommend that.

And yeah, any last things? 

<i class="timecode">[01:02:16]</i> **Sarah:** Thanks so much for having me. This was a lot of fun. I hope it wasn't too scattered or all over the place! 

<i class="timecode">[01:02:22]</i> **Stephanie:** No, it was awesome. And we will see you around the Twitterverse and other places. And thanks everyone in chat for joining. Yes. Ben has put your main site into the chat. And we hope to maybe see you back to talk about that spec!

<i class="timecode">[01:02:39]</i> **Sarah:** Yeah! If it actually gets in!

<i class="timecode">[01:02:43]</i> **Stephanie:** Have a great one. .