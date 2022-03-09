---
title: Accessibility in Responsive Design with Jim Drury
thumbnailTitle: Accessibility in Responsive Design
hosts:
  - Ben Myers
  - Jim Drury
upload: https://youtu.be/4lVmfyLAVwU
tags:
  - Web Accessibility
  - CSS
  - Responsive Web Design
---

The ways we implement responsive web design can have a major impact on accessibility for anyone who needs to zoom the page or scale up their font size. Join us as [Jim Drury](https://twitch.tv/GeometricJim) shows us some practical tips to ensure that our responsive web design is accessible for all!

---

## More From Jim

- [Follow Jim on Twitch](https://twitch.tv/GeometricJim)
- [`@geometricpanda/components`](https://github.com/geometricpanda/components)

## Mentioned Links

- [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
- [MDN docs on CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [MDN docs on line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [MDN docs on the viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
- [How I Experience Web Today](https://how-i-experience-web-today.com/)
- [KeyCastr](https://github.com/keycastr/keycastr)

## Transcript

<i class="timecode">[00:00:03]</i> **Ben:** Howdy, howdy, y'all! It is Friday, which I guess means it's Some Antics day. Some Antics is every day you want it to be. I'm super excited to be here, super excited to have y'all here. Travis, thank you so much for resubscribing. I really appreciate it. Yeah! So first of all, full disclaimer, I've been changing my video and audio setup a bit. If anything seems weird or broken, please, please let me know, but also we may not be able to change a whole lot midflight. But yeah! Super, super excited to be live, and to be live with Jim Drury! Jim, how's it going? 

<i class="timecode">[00:00:41]</i> **Jim:** Yeah, amazing, thanks! How's it going with you? 

<i class="timecode">[00:00:44]</i> **Ben:** It's going really well. I'm super stoked that it's Friday in general, you know? Like, just nice to be at the end of the week. But yeah!

<i class="timecode">[00:00:50]</i> **Jim:** Absolutely the best day.

<i class="timecode">[00:00:53]</i> **Ben:** Absolutely. I'm thrilled to have you on. For folks who haven't had the chance to see you around yet, would you care to give yourself an introduction? 

<i class="timecode">[00:01:03]</i> **Jim:** Oh, thanks, yeah! Hi. So, yeah, I'm Jim Drury. I'm a JavaScript guy! Right? This is what I love. I specialize in Angular, React, and CSS. I've been working in industry for, really, longer than I care to remember these days, mainly for, you know, terrible institutions like banks or fantastic ones like media companies and telcos. So that's really my background. Yeah, hi! I'm glad to be here! 

<i class="timecode">[00:01:27]</i> **Ben:** Yeah, so we actually, we met fairly recently.

<i class="timecode">[00:01:31]</i> Is the chat broken? Hang on. I'm trying to figure out actually if my chat overlay is weird. Odd! Anyways!

<i class="timecode">[00:01:40]</i> Yeah, so we met fairly recently. You've started streaming, and we met through whitep4nth3r and The Claw. You've been streaming some accessibility stuff. Would you like to kind of talk through your streaming experience?

<i class="timecode">[00:01:57]</i> **Jim:** Yeah, so I haven't been streaming for that long. And I saw whitep4nth3r, a good friend of mine, and she's been streaming for quite some time now. And isn't she just the best? She really is.

<i class="timecode">[00:02:06]</i> **Ben:** Mhmm.

<i class="timecode">[00:02:07]</i> **Jim:** And I thought, "You know what? I'm inspired by that. I want to start sharing some of this love." And you know, I've been really fortunate career-wise to have worked with some of the best accessibility experts we've got here in the UK. And I thought, "You know, I've learnt so much. I want to give that back. Now I want to share some of that love." So I started streaming out on Twitch, and it's going really well! It's still the early days, but I'm super excited. The Claw have been so amazing, so welcoming—

<i class="timecode">[00:02:28]</i> **Ben:** Mhmm.

<i class="timecode">[00:02:29]</i> **Jim:** —and I'm just really looking forward to getting a bit more love out there, really for accessibility. Can't talk enough about it. 

<i class="timecode">[00:02:35]</i> **Ben:** What I love about your streams is it feels very much so in line with the philosophy I've had about… sorry, in line with this philosophy I've had about, like, accessibility education, which is that like, there just is not enough, like, hands-on demonstrations of accessibility, and I've just been super blown away by just how effortlessly you can explain a lot of accessibility concepts and demonstrate them and make them super approachable. Like, that's the kind of approachability I strive for!

<i class="timecode">[00:03:08]</i> **Jim:** Thank you, thank you.

<i class="timecode">[00:03:08]</i> **Ben:** So, I'm so, so glad to have more people in kind of this accessibility Twitch space. And so, y'all, if you're into accessibility streams, definitely go follow Jim. I've put a link to his stream in the chat. His username is GeometricJim.

<i class="timecode">[00:03:27]</i> So today we're going to be talking about accessibility and specifically, the intersection with accessibility and responsive web design, which at first blush, I don't know that these two things necessarily immediately seem like they fit together, but they totally do! And I was wondering if he could kind of talk through that and talk through maybe what some of the big-rock type deals witih responsive design and accessibility that we might look forward to are. 

<i class="timecode">[00:03:59]</i> **Jim:** Yeah! Obviously, yeah, at first, a lot of people don't see that there is a connection between the two. But obviously, we've spoken about this quite a few times, and one of the first and possibly the most important thing I find about accessibility in responsive design is making sure that regardless of what size screen you're using, regardless of what size font the users have set their screens to, or their devices to use, that all the content should be accessible to them. It shouldn't be hidden off screen. They should be able to… And the experiences, like, they don't degrade! It should be functional!

<i class="timecode">[00:04:29]</i> I think, if we actually look at the WCAG criteria for reflow, which is… this is what we're talking about really, it even says, "Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions." And that's quite a big thing. Ah, thank you, excellent. So, one of the things that a lot of people assume is that it means that as devices or screen sizes change, that we can't have scrolling. We absolutely can, but what WCAG asks us for is to ensure that scrolling only happens in a single direction. So as we can see here, "…without requiring scrolling in two dimensions" in the area at the top. It's quite a lot of beautiful information in here. One of the things that I think is really important is that WCAG does specify that the site should still work when you zoom or you scale content to 400%, which is so hard to do, but it's achievable! And at the end of the day, you get great results. 

<i class="timecode">[00:05:23]</i> **Ben:** Absolutely! And so who is this benefitting? Like, when we talk about, like, this as an accessibility requirement, like, why is something like this a requirement?

<i class="timecode">[00:05:34]</i> **Jim:** Why? Mainly because people! People have varying sized screens, right? We've got everything from our little black mirrors in our pockets all the way to massive desktop screens. But that's not all there is. You know, people who are partially sighted, people who have various forms of colorblindness still need to be able to interact with this content. And they change their devices in ways that we don't necessarily think about as developers unless we've learned to think about it. So, obviously, we've spoken about how Chrome has different settings for, you know, zooming, and also separate settings for font size. In Android devices, it will… whatever the device's font size is set to, the browser will respect. Safari's got slightly different settings on iOS. But people do zoom in on their devices and change the underlying font size. And I think that's one of the things that I really want to talk about today, about how we can make some very, very small changes to the applications that we build that might not change it for the majority of users who aren't zooming, who aren't changing their text sizes. But for the people who need that functionality, that a lot of sites have become inaccessible for, we can make these tweaks — They're these tiny tweaks! They're not huge, massive changes — and give them a fantastic experience.

<i class="timecode">[00:06:46]</i> **Ben:** Absolutely. Okay! And… yeah, I think maybe we can go ahead and start diving into this. So I am sharing my screen. I started sharing it once we started talking about WCAG reflow. But yeah, I think maybe we go ahead and show off the project that we're going to be working in and kind of talk through that a bit.

<i class="timecode">[00:07:08]</i> **Jim:** Yeah, absolutely. We have to. So this is just an example of something you might see on a streaming service. So it's nothing that I'm putting out there. This is just something that I've thrown together to really illustrate this problem. And so, one of the problems we see is when people are starting to use rems, which are a great unit. We love rems, don't we? We absolutely adore them. But people don't necessarily understand always when it's appropriate to use them, when it's appropriate to use pixel values or whatnot, and also what we can do with media queries to make things a little bit easier for our accessible customers!

<i class="timecode">[00:07:46]</i> So as we see here, we've just got a really simple collection of tiles. And if I could trouble you just to resize the screen, we can look at this across a few different breakpoints. It's a fairly simple layout. It's just using a bit of grid to… yeah, to show a single column on…

<i class="timecode">[00:08:03]</i> So if we select from the dropdown at the top, shall we jump onto a screen size? So where it says "Dimensions: iPad Mini," shall we go to…

<i class="timecode">[00:08:09]</i> **Ben:** Yes.

<i class="timecode">[00:08:10]</i> **Jim:** …a mobile device? That would work.

<i class="timecode">[00:08:13]</i> **Ben:** Alright. Yeah, so I'm looking at 1024, 768, which — full disclaimer — like, are the dimensions you gave me ahead of time, but let me actually go into the responsive mode and we can kind of… play with this a bit. So we've got some nice, you know, kind of rearranging, dropping down the number of columns that we've got until eventually you get to, like small, like, phone size, and everything's just a column, which is delightful. 

<i class="timecode">[00:08:44]</i> **Jim:** Well, I mean, this in itself technically would satisfy our reflow criteria, right? 

<i class="timecode">[00:08:49]</i> **Ben:** Okay?

<i class="timecode">[00:08:50]</i> **Jim:** Because the content… you know, we're not scrolling in two dimensions. We are scrolling in one. But what it doesn't take into account is some of the issues we see when people start changing the text sizes. So, I'd like to really show that problem if we can and how we can… what we can do to make things a little bit easier. The breakpoints I've chosen for this are some standard breakpoints, really, around 768 pixels, 1024. There's another one which escapes me right now. But these are really, really good values, all divisible by 8 and 16, which we'll start talking about fairly soon, I guess!

<i class="timecode">[00:09:25]</i> And so if we see this, we've got these four tiles that you can see on the screen. It's a fairly common layout, and to be honest, immediately nothing jumps out here to say that there's something wrong. Now, in this, everything in this repository has been set to use rems, or pixels for the breakpoints as we, you know, tend to sort of default to these days. And so we'll show some of the problems with that, and let's go a step further and see how we can make that better!

<i class="timecode">[00:09:51]</i> So if I could trouble you to open up Chrome's accessibility… what's it called? It's the… we'll have a look in there. The "Appearance" tab, isn't it?

<i class="timecode">[00:10:01]</i> **Ben:** Yeah!

<i class="timecode">[00:10:02]</i> **Jim:** And in here we've got the font size dropdown. Now, the font size dropdown is what a lot of customers use to swap… to just change the default font size. So what this will do, it will change the root em value, which initially, behind that value, it has a pixel value, right?

<i class="timecode">[00:10:20]</i> **Ben:** Mhmm.

<i class="timecode">[00:10:20]</i> **Jim:** So by default, a lot of us will know that 1 rem is equal to 16 pixels. That's what medium is. And if we went smaller, that would drop to 12 pixels or, very small, to 9. As we go in the other direction… yep.

<i class="timecode">[00:10:35]</i> **Ben:** There we go. Small. Then we go… let's say very large.

<i class="timecode">[00:10:38]</i> **Jim:** Yep, the other direction. Very large, this sets our rem value to be 24. And this one really highlights the problem where now, the text's grown and it's become really hard to read. There's a cognitive overhead to trying to figure out even what "Sunday" says here, or "Feeling." Right? So that's part of the cognitive overload. And what we find here is it's actually really difficult to use like this, and we can make some very small changes to make this a lot easier.

<i class="timecode">[00:11:06]</i> There's a few other things I want to talk about as well, while we're going through this, which is, I've also used rem values in my paddings and border radiuses, which these are generally more sort of stylistic elements which people use and treat as part of their brand, including our favorite, you know, mobile phone manufacturer who've even got a patent on their border radius. So you wouldn't necessarily expect things like that to change. So I was hoping we can dive into the code, make a few tweaks and see if we can just make this a little bit easier.

<i class="timecode">[00:11:34]</i> **Ben:** Makes sense!

<i class="timecode">[00:11:37]</i> **Jim:** So, one of the things I think we should probably start off with is by looking at our media queries. And it's a philosophy and — I'm going to say it's my opinion here, so feel free, anyone, feel free to disagree. I love that. But I believe that as the font size grows, if we consider shifting our media queries so that we start showing the rest of our screens according to what anyone else would have when they got less space available. Okay? And the way we can do that is by converting our media queries from pixels to ems. So when the device changes the font size, the barrier to entry…

<i class="timecode">[00:12:20]</i> **Ben:** Ohhhh!

<i class="timecode">[00:12:20]</i> **Jim:** …for the screen size changes. Yeah.

<i class="timecode">[00:12:23]</i> **Ben:** Makes sense!

<i class="timecode">[00:12:24]</i> **Jim:** So, if you could jump into the style.css, that's the one I've used for setting custom properties and also, a bit further down, you'll see… if you scroll a bit further down… you'll find some media queries. Here we go. So we've got our first media query, which is 480 pixels. Now we want to calculate that one… If we want this to respond according to font size, we can't use rems here because media queries sit above the root when it comes to the calculation. So, we can use ems, however.

<i class="timecode">[00:12:53]</i> So if we start by looking at, on line 54 there, we can see there's a media query at 480 pixels. If we just want to take 480 and divide it by what most browsers class as standard, 16 pixels, which gives us an em value of 30. So on line 54, if we change that to be 30 ems, that now means that if you're at a medium text size, 16 pixels, it's still the same value. It's still 480 pixels required to trigger it. However, if we now consider that people might be using the very large — 24 pixels — base size, let's see, got us some calculations. 24 times 16 would bring us up to… nope, that one didn't work. Can't remember them. It would bring up a high number anyway. It would make the barrier to entry higher. It looks like my maths is terrible on the fly. Okay. Let's take that 768, then. Let's calculate an em value from the 768.

<i class="timecode">[00:13:50]</i> **Ben:** Okay.

<i class="timecode">[00:13:51]</i> **Jim:** Which would be 48 ems. 

<i class="timecode">[00:13:53]</i> **Ben:** 48 ems. And that's because 768 divided by… what did you say it was, 16?

<i class="timecode">[00:13:58]</i> **Jim:** 16, yeah, yeah!

<i class="timecode">[00:14:00]</i> **Ben:** Okay, so 48. That's the math that we're doing.

<i class="timecode">[00:14:02]</i> **Jim:** That's the math that we're doing.

<i class="timecode">[00:14:04]</i> **Ben:** Okay.

<i class="timecode">[00:14:05]</i> **Jim:** Trying to go the other way can be a little bit tricky sometimes.

<i class="timecode">[00:14:07]</i> **Ben:** And then 1024 is going to be…

<i class="timecode">[00:14:11]</i> **Jim:** I think that one's, off the top of my head, 64?

<i class="timecode">[00:14:14]</i> **Ben:** Sounds right. Hey, nice!

<i class="timecode">[00:14:16]</i> **Jim:** Nice, yes!

<i class="timecode">[00:14:17]</i> **Ben:** It's like you've prepped for this!

<i class="timecode">[00:14:19]</i> **Jim:** It's like I can do high school maths sometimes! On a good day. 

<i class="timecode">[00:14:24]</i> **Ben:** Okay, so here, when your browser is at the quote-unquote, like, standard… like, medium, right? What most browsers would consider medium font size, which is 16 pixels, everything still calculates to the same point, right? 30 ems is…

<i class="timecode">[00:14:42]</i> **Jim:** Absolutely.

<i class="timecode">[00:14:43]</i> **Ben:** …30 times 16 and so forth. So medium font size users aren't going to see any difference, but if you have different font sizes, now everything is relative to that.

<i class="timecode">[00:14:56]</i> **Jim:** Yeah.

<i class="timecode">[00:14:56]</i> **Ben:** Very cool!

<i class="timecode">[00:14:57]</i> **Jim:** Exactly. So the idea is now that yeah, as we increase the font size… so, to give that desktop or tablet experience at these different breakpoints, people would literally need to have a bigger device. Which it might seem a little counterintuitive, but you actually think that your smaller devices, you are building your experiences to display content when it's, you know, got less space available. So we can see instantly now, this change here. The way it's gone from having four columns to two. And if you want to have a little playaround in those settings and swap to large, for example.

<i class="timecode">[00:15:33]</i> **Ben:** Yeah!

<i class="timecode">[00:15:33]</i> **Jim:** I haven't put any, like, crazy high in there, like, breakpoints. 

<i class="timecode">[00:15:36]</i> **Ben:** Tell you what I'm going to do for this.

<i class="timecode">[00:15:39]</i> **Jim:** Yeah?

<i class="timecode">[00:15:39]</i> **Ben:** Actually going to bring these side-by-side, and we're gonan hope that Chrome updates everything globally.

<i class="timecode">[00:15:48]</i> Okay, so if we make this very small… good, everything updates. And if I bring this into responsive where I can, like, click and drag, we'll see that we can get pretty, pretty far down here…

<i class="timecode">[00:16:03]</i> **Jim:** Yeah.

<i class="timecode">[00:16:03]</i> **Ben:** …before we collapse. And then if I bring this very large… like, it's still… there's some room to improve.

<i class="timecode">[00:16:13]</i> **Jim:** Yeah.

<i class="timecode">[00:16:13]</i> **Ben:** Ironically, some room to grow. 

<i class="timecode">[00:16:16]</i> **Jim:** There is. One of the great things, actually — I'm really glad you showed that one. So, one of the things that WCAG does say in its requirements is at 320 pixels sized screen, that's really the smallest that we have to worry about.

<i class="timecode">[00:16:28]</i> **Ben:** Okay!

<i class="timecode">[00:16:29]</i> **Jim:** Any devices smaller than that, we do expect that there's going to be a few issues. 

<i class="timecode">[00:16:33]</i> **Ben:** Right, so 320 is… I suppose I could just type it up here. Okay, 320.

<i class="timecode">[00:16:41]</i> **Jim:** I don't think I quite got that heading quite right. I think the heading's throwing it off. I did, I forgot to put the text break on that. Apologies for that one.

<i class="timecode">[00:16:53]</i> But yeah. Should we jump back to the iPad Mini view in landscape?

<i class="timecode">[00:16:58]</i> **Ben:** Yes.

<i class="timecode">[00:16:58]</i> **Jim:** Because that one's really good for showing, as we change that font size barrier, the different breakpoints that are kicking in. 

<i class="timecode">[00:17:05]</i> **Ben:** Yes. So here, I'm on very large and… 

<i class="timecode">[00:17:09]</i> **Jim:** Something doesn't quite seem right. Can we give it a quick reload? It feels like something else has happened there.

<i class="timecode">[00:17:15]</i> **Ben:** Ah, okay, yeah.

<i class="timecode">[00:17:17]</i> **Jim:** Yeah, yeah. I'd love to see that in the emulator view if you haven't yet. 

<i class="timecode">[00:17:20]</i> **Ben:** Oh, hello? Why did it pop me…? It zoomed in just a little. That's… that is odd.

<i class="timecode">[00:17:26]</i> **Jim:** That is odd.

<i class="timecode">[00:17:27]</i> **Ben:** I'll try refreshing it, but I think… I don't… yeah. I think it might just be the DevTools being weird.

<i class="timecode">[00:17:38]</i> **Jim:** Possibly.

<i class="timecode">[00:17:40]</i> **Ben:** Oh, it might've been the Browsersync!

<i class="timecode">[00:17:41]</i> **Jim:** Oh, it's Browsersync!

<i class="timecode">[00:17:41]</i> **Ben:** It's the Browsersync pop-up.

<i class="timecode">[00:17:43]</i> **Jim:** Yeah!

<i class="timecode">[00:17:43]</i> **Ben:** Okay, got it. Noted.

<i class="timecode">[00:17:45]</i> **Jim:** Okay.

<i class="timecode">[00:17:45]</i> <i class="brackets">[Jim chuckles]</i>

<i class="timecode">[00:17:46]</i> **Ben:** Alright, I think we're just going to live with that, if that's alright with you, Jim. 

<i class="timecode">[00:17:50]</i> **Jim:** Yeah. Yeah, I think we can make our way through.

<i class="timecode">[00:17:52]</i> Okay, so now we've got the font size set to very large, we can see the 1024×768, this is actually triggering our smallest… sorry, the one before the smallest breakpoint, or the top one after, which is like our sort of wide mobile breakpoint.

<i class="timecode">[00:18:07]</i> If we changed the font size now to be just large. So that will start computing everything against 20 pixels. We can see now that the one called the tablet, the 768 breakpoint, is at play here. And then as we go back to medium, we'll see that the 1024×768 breakpoint is at play in our four columns.

<i class="timecode">[00:18:29]</i> **Ben:** Very cool, okay! And yeah, we didn't change the size of the window at all, but everything's now responsive relative to the font size, which is incredibly cool. 

<i class="timecode">[00:18:39]</i> **Jim:** Incredibly simple. It's incredibly easy to do. It's simply "take your pixel value, divide it by 16, boom." Straight away, your application can start responding to our accessible customers in a far more natural way. Just gives them more space.

<i class="timecode">[00:18:53]</i> **Ben:** Yeah!

<i class="timecode">[00:18:53]</i> **Jim:** It doesn't cause as much text to break, and I hate text breaking. I obviously have to work with a lot of very, very long words, as we have a company over in Germany. And unfortunately, sometimes you can't get away with it, but some times you can just by making these small changes, 

<i class="timecode">[00:19:08]</i> **Ben:** So, I want to ask about the flipside. Are there still media queries that you think should be kept in pixels rather than font size? 

<i class="timecode">[00:19:19]</i> **Jim:** I can't think of many. I mean… I'm trying to think of which ones we'd want that to be, and the only thing that's sort of jumping out to me is print. But even that one, I think, you know, anyone who's increasing the size of their font would probably want the larger print as well.

<i class="timecode">[00:19:34]</i> **Ben:** Mm! I could see that. Okay!

<i class="timecode">[00:19:37]</i> **Jim:** Yeah. Can you think of any?

<i class="timecode">[00:19:41]</i> **Ben:** I can't, honestly! Like, it feels to me like it would be if you're trying to build graphics rather than anything with text but, like, that seems out there as a use case. Okay. 

<i class="timecode">[00:19:54]</i> **Jim:** Yeah, I think maybe video games, canvas-based games when they're fullscreen.

<i class="timecode">[00:19:58]</i> **Ben:** Sure.

<i class="timecode">[00:19:58]</i> **Jim:** I think that's possibly one of the use cases. Yeah, I wonder. Do you know what? I'm going to have a play with that one. I think that sounds like a Twitch stream in its own right! 

<i class="timecode">[00:20:07]</i> **Ben:** Yeah, I think that's gotta be a Twitch stream! I'm here for that.

<i class="timecode">[00:20:11]</i> Nino, welcome! Glad to have ya.

<i class="timecode">[00:20:13]</i> We actually have a question from the chat, and we're kind of approaching this topic, but I don't know if you wanted to get to this later. But crutchcorn wants to know, "Are there rules around padding, using or not using rem for your values? When should you use it or not?" So I think this is specifically around padding. 

<i class="timecode">[00:20:31]</i> **Jim:** Crutch. I am so glad you've asked this. So glad! And actually, one of the great things we can do — we can also turn off that responsive view and stop that content scrolling off screen now, 'cause we can talk about that! So again, it's sort of this knee-jerk reaction for us. Oh, I think we need to do that in DevTools. We just click the little emulator icon. So, unfortunately, it's got to be in the pop-up, hasn't it?

<i class="timecode">[00:20:56]</i> **Ben:** I'll nuke the pop-up. You go ahead. 

<i class="timecode">[00:20:59]</i> **Jim:** Yeah. Cool. Okay.

<i class="timecode">[00:21:00]</i> So, our knee-jerk reaction, because for the last few years we've been saying, "You know what? Let's convert everything to ems, now to rems, to use these relative values," everyone's sort of gone straight for it everywhere. I think… I can show it here. This demo has actually been built with this in mind, where so all paddings, the border radiuses are all set. And so I think border radiuses are probably going to be the one that's most obvious visually for people to see.

<i class="timecode">[00:21:26]</i> So, actually, can we just jump back in the browser just for a moment so we can sort of show what's going on? It's the same for the paddings, by the way. As we increase the font size here, you'll notice the border radiuses change. 

<i class="timecode">[00:21:40]</i> **Ben:** We're going to get different… different squircles here. 

<i class="timecode">[00:21:43]</i> **Jim:** Different squircles. Yeah.

<i class="timecode">[00:21:45]</i> **Ben:** I think it's subtle. I think I'm going to compare between very small and very large.

<i class="timecode">[00:21:50]</i> **Jim:** Ooh, that's great, yeah.

<i class="timecode">[00:21:51]</i> **Ben:** Yeah, this seems like a flatter, like, squarer angle, I think. Whereas when I go very large, like, that's very round a corner.

<i class="timecode">[00:22:02]</i> **Jim:** Very obvious, isn't it? And I don't know about you, but every time I've worked for a company, they've had their brand border radius.

<i class="timecode">[00:22:08]</i> **Ben:** Mm.

<i class="timecode">[00:22:09]</i> **Jim:** It's like, "Yes, it's that." And so instantly, that's one of those ones that stands out to me. I think, yeah, it shouldn't be a rem. Maybe that is a pixel value. So if we want to jump into the code, in the style.css file, towards the top, I think…

<i class="timecode">[00:22:25]</i> I say "I think." I'm looking at the code here. At line 7, if we want to just change that. So we want to convert a rem value to a pixel now. So we're going the other way to what we went before, so we're just going to multiply that by 16. So, we can see our first one there is going to be 8 pixels. And the next one, that's at 16 pixels. 

<i class="timecode">[00:22:44]</i> **Ben:** That is not the comment syntax! There we go. So this was… I'm just going to mark this down. And then this is 16 pixels, which I'm going to demonstrate with the very creative math of 1 times 16.

<i class="timecode">[00:23:03]</i> But okay. So yeah, now we have new pixel-based measures for our border radii. And if I go back in here, and I'm just going to refresh this just in case. I think Browsersync could have handled it, but yeah. So we've got this nice roundness to it. If I go very small, that seems like the same roundness to me. It's hard to judge.

<i class="timecode">[00:23:32]</i> **Jim:** Yeah.

<i class="timecode">[00:23:32]</i> **Ben:** I'm not… like, I'm not really coming out here with a protractor or anything, but it seems like the same squircletude.

<i class="timecode">[00:23:39]</i> **Jim:** Yeah, absolutely, it is. It's certainly not the one we had before.

<i class="timecode">[00:23:42]</i> **Ben:** Absolutely.

<i class="timecode">[00:23:43]</i> **Jim:** So I'm going to take that one as it's working.

<i class="timecode">[00:23:45]</i> **Ben:** Mhmm.

<i class="timecode">[00:23:46]</i> **Jim:** Cool. And we can do the same for our padding value. So if you jump back into that file, we'll see I've got four custom properties set with some spacing values. A little bit further down, there we go. Keep looking down, just because my camera's in the way of that part of the screen.

<i class="timecode">[00:23:58]</i> **Ben:** Mhmm.

<i class="timecode">[00:23:58]</i> **Jim:** I'm just going to move the screenshare over. I'm just going to update these ones. Again, it's exactly the same maths. It's 12, 16, 24, and 32 pixels. 

<i class="timecode">[00:24:09]</i> **Ben:** 12, 16. This is 18, right? 18 pixels? 

<i class="timecode">[00:24:14]</i> **Jim:** Uh, 24. 

<i class="timecode">[00:24:16]</i> **Ben:** Yes, math.

<i class="timecode">[00:24:18]</i> **Jim:** It's Friday. We don't need maths, right?

<i class="timecode">[00:24:21]</i> **Ben:** Don't need it!

<i class="timecode">[00:24:24]</i> <i class="brackets">[Jim chuckles]</i>

<i class="timecode">[00:24:25]</i> Nino is appreciating my use of the word "squircletude." Squircletude: for all your squircle needs.

<i class="timecode">[00:24:33]</i> **Jim:** Do you know what I'm still waiting to figure out how to do? How to, using CSS, draw a true squircle.

<i class="timecode">[00:24:39]</i> **Ben:** Interesting!

<i class="timecode">[00:24:39]</i> **Jim:** It's so hard!

<i class="timecode">[00:24:40]</i> **Ben:** Mhmm!

<i class="timecode">[00:24:41]</i> **Jim:** Because a true squircle has the rounded corners and then a different rounding for the sides. And I've done it in app native, but in CSS, it just doesn't seem easy. 

<i class="timecode">[00:24:52]</i> **Ben:** Mhmm. Sounds like you might need a paint worklet for true squircles. I'm

<i class="timecode">[00:24:58]</i> **Jim:** Yeah! I feel like I've gotta look for that. It's gotta be…

<i class="timecode">[00:25:00]</i> **Ben:** Ooh! Sorry, I was having some weird, like, artifacts on the page, but everything seems good now. So if we look at, like, how much space there is between the edge here and the E, if I go very large, we're expecting to see something that is roughly the same amount of space. Again, it's really hard to tell — I'm not out here with a ruler — but that SEEMED about right.

<i class="timecode">[00:25:22]</i> **Jim:** It seems about the same, doesn't it? Yeah. But zoom, obviously, zoom's going to be a little bit different. So, zoom actually is a zoom.

<i class="timecode">[00:25:30]</i> **Ben:** Oh, okay.

<i class="timecode">[00:25:32]</i> **Jim:** Yeah. So it's slightly different to font size, unfortunately, which makes things just that little bit more difficult. But yeah, so now we can see that. So again, I think the paddings and spacings are much more obvious, though I find them more brand-related than all the layout you're trying to create than they necessarily are to the fonts. And of course we get that lovely irony as well that if we have paddings, especially paddings based in rems, that as we're trying to increase the font size, we're also usually then making the content available for that text smaller.

<i class="timecode">[00:26:07]</i> **Ben:** Yeah! Okay, yes. Yeah, 'cause everything's pushed further in. 

<i class="timecode">[00:26:12]</i> **Jim:** Yeah. Absolutely, and it's incredibly painful. But yeah. Now here… again, these are just simple changes, right?

<i class="timecode">[00:26:18]</i> **Ben:** Mhmm!

<i class="timecode">[00:26:18]</i> **Jim:** Just a few small tweaks that we're making to really just enhance this pretty simple experience!

<i class="timecode">[00:26:26]</i> **Ben:** Absolutely. Like, this is like easy stuff! This isn't… you're not rearchitecting your whole approach to styles or anything like that. You're just saying, "Hey, if we convert certain things to pixels and certain other things to ems based on… yeah, I mean, just based on that, like, times 16 or divided by 16 measure." Like, yeah, totally. Totally easy.

<i class="timecode">[00:26:51]</i> **Jim:** Yeah, okay. So, I guess we should probably actually look at the fonts. Now, we're not going to be changing the fonts here, thankfully, but I do want to spend a little bit of time just talking about rems here for font sizes, because there's so much out there where people have thought about what font size to use, and we've got so many different units available to us, right?

<i class="timecode">[00:27:10]</i> **Ben:** Mhmm.

<i class="timecode">[00:27:11]</i> **Jim:** I've literally seen companies and places using viewport width for font sizes—

<i class="timecode">[00:27:19]</i> **Ben:** Mmm…

<i class="timecode">[00:27:19]</i> **Jim:** —which was… that one was a bit of a… it blew my mind! I was like, "What are you doing?" And what it turned out this company were doing, they've got their, you know, their tablet devices, and they were like, "Right. On this tablet, we want the fonts to be this size. And as people use these other-sized tablets, we want the font to just scale with it." And I find that one utterly bizarre!

<i class="timecode">[00:27:40]</i> **Ben:** Mhmm.

<i class="timecode">[00:27:42]</i> **Jim:** Yeah. A lot of the times, as well, we've probably seen people doing — and we've probably done it ourselves — using unitless values. And have you ever looked at unitless values and what MDN says about how they're computed? 

<i class="timecode">[00:27:57]</i> **Ben:** Not a whole lot, honestly!

<i class="timecode">[00:27:59]</i> **Jim:** Do you know what? Let's see if we can find it. MDN, see if there's unitless values. I'll see if I can find it here as well.

<i class="timecode">[00:28:07]</i> **Ben:** "CSS values and units," probably? 

<i class="timecode">[00:28:12]</i> **Jim:** Yeah, let's have a look in there! Scroll down, and… 

<i class="timecode">[00:28:17]</i> **Ben:** And then search for "unitless," and see if that comes up. "Numbers," okay. 

<i class="timecode">[00:28:23]</i> **Jim:** Okay, it looks like they've updated the docs to possibly remove the unitless part of this. But when you find the specifications, what unitless actually means — the docs are so contrived, it's virtually impossible to understand actually what unitless means.

<i class="timecode">[00:28:38]</i> **Ben:** Mmm.

<i class="timecode">[00:28:39]</i> **Jim:** So, a lot of the times, again, I've seen CSS where we've got a font size set to, I don't know, let's say 32 pixels, just for a random number.

<i class="timecode">[00:28:48]</i> **Ben:** Sure.

<i class="timecode">[00:28:48]</i> **Jim:** And then 1.5 for line height.

<i class="timecode">[00:28:51]</i> **Ben:** Mhmm!

<i class="timecode">[00:28:52]</i> **Jim:** That being relative to the font size, but not quite in the same way that an em would be. It's very quite curious how that one works. Let me see if we can find this article. I'll ping you the link, because I think it'd be good to find that definition.

<i class="timecode">[00:29:08]</i> **Ben:** Yeah! Should I pull up line height? Would that help, the MDN docs on line height? 

<i class="timecode">[00:29:15]</i> **Jim:** Yeah, yes! That one might have it now. Oh, there we go! So, "use this number multiplied by the element's font size." Okay, they made that a little bit easier. Before, it absolutely made no sense. So it looks like it's sort of behaving like an em, but I've found that it hasn't always done that.

<i class="timecode">[00:29:34]</i> Yeah, so… I'm just trying to find the… do you know what? Don't worry about that one so much.

<i class="timecode">[00:29:40]</i> **Ben:** No worries.

<i class="timecode">[00:29:40]</i> **Jim:** But anyway, let's look at how we can be a bit more sort of calculated with that. And I tend to use rems now for my font sizes universally. So, obviously, we know we've got ems as well. Ems, apparently like the unitless was saying, are relative to the font size as well, but I find that one can get very complicated, especially if we're not always specifying the font size.

<i class="timecode">[00:30:05]</i> **Ben:** Mmmm, okay!

<i class="timecode">[00:30:06]</i> **Jim:** So a lot of people tend to do that. And it requires quite a lot of maths, so if you're thinking like, "Right, I've got my font size set to 1.2 rems, then I've got my line height set to, I don't know, 2 ems, are we then having to do 1.2 times 16 times 2?" You know?

<i class="timecode">[00:30:18]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:20]</i> **Jim:** So I find by moving our font sizes and our line heights over to rems, it becomes just a lot easier to calculate. We've built an entire design system recently at the company I work for, and when we were trying to calculate it all using ems, it just became some really strange trailing decimal numbers!

<i class="timecode">[00:30:37]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:37]</i> **Jim:** But as soon as we took it back to rems, we got these relatively nice units.

<i class="timecode">[00:30:43]</i> **Ben:** Okay!

<i class="timecode">[00:30:44]</i> **Jim:** And of course, rems! Yeah, relative to the root, so as soon as people update that base font size, they update.

<i class="timecode">[00:30:53]</i> **Ben:** Alright.

<i class="timecode">[00:30:54]</i> **Jim:** We've talked a lot about rems. Now we should move on, then. 

<i class="timecode">[00:30:56]</i> **Ben:** I mean, no, you're good! Yeah, so we're not actually going to change any of these because in your experience, rems just tend to be the easiest unit to work with for font purposes.

<i class="timecode">[00:31:08]</i> **Jim:** Yeah, absolutely. And so, again, just like ems, if we're calculating the rem values here again, 1.2 rems, we can calculate that as 16 times 1.2.

<i class="timecode">[00:31:20]</i> **Ben:** Yep. 16 times 1.2. Pixels, right? 

<i class="timecode">[00:31:26]</i> **Jim:** Yeah, so that gives us 19.2. Oh, sorry, 16 pixels times 1.2.

<i class="timecode">[00:31:32]</i> **Ben:** Oh, yeah, that makes — yes.

<i class="timecode">[00:31:35]</i> **Jim:** Yeah. It's all good, it's all good. And that's how we calculate it. And the same with the 1.7 as well for the line height.

<i class="timecode">[00:31:42]</i> **Ben:** Yeah!

<i class="timecode">[00:31:42]</i> **Jim:** So just making it explicitly clear, really. And so that, with the line height, gives us 27.2. I'm not really too fussed about if it calculates a point value off the back of a rem, 'cause the browsers, they're mature enough to handle that now, aren't they?

<i class="timecode">[00:31:54]</i> **Ben:** Yes!

<i class="timecode">[00:31:57]</i> Alright. 

<i class="timecode">[00:31:59]</i> **Jim:** Awesome! So, I'm hoping that, anyway, we've covered what Crutch is asking about, you know, spacings and paddings and border radii.

<i class="timecode">[00:32:10]</i> **Ben:** Crutch, if you've got any other questions, please feel free to drop them in the chat and we'll be absolutely sure to get to those.

<i class="timecode">[00:32:15]</i> Nino says he defines everything in pixels unless he wants to express a relationship to font size. Usually, that means that all components that are component-ish, he defines in em. He rarely uses rem!

<i class="timecode">[00:32:28]</i> **Jim:** Okay.

<i class="timecode">[00:32:28]</i> **Ben:** Only when he wants to, like, reset back out of the inheritance. 

<i class="timecode">[00:32:32]</i> **Jim:** So, it's completely up to you how you want to do this. Ems are great because, you know, as someone using, say, that component, they can get a scale out of it by just setting something outside of it. I think one of the challenges you'd have there, and bear in mind, my day job is I own a component library used globally and I can't guarantee that whatever element that my component's within is going to be using a relative unit.

<i class="timecode">[00:33:02]</i> **Ben:** Mmm.

<i class="timecode">[00:33:03]</i> **Jim:** So in that world, a rem is great because it's going to compute against 16 pixels regardless, and I can assure the accessibility of that component.

<i class="timecode">[00:33:11]</i> **Ben:** Mhmm.

<i class="timecode">[00:33:11]</i> **Jim:** Where if I can't always guarantee that it's going to be within something with a relative unit, it didn't really fix it. I think there's a few frameworks out there — I'm not going to name any, so I'm not going to name-and-shame — that they have this nasty habit of resetting `<body>`, for example, to 10 pixels.

<i class="timecode">[00:33:29]</i> **Ben:** Mmmm!

<i class="timecode">[00:33:30]</i> **Jim:** Which, yeah, it makes it easier to compute, right? So you're writing your rem values further down, you're just doing a 10 pixel calculation. But that 10 pixel then immediately blocks the rem value or the set value by the user.

<i class="timecode">[00:33:48]</i> **Ben:** Mhmm. Gotcha.

<i class="timecode">[00:33:50]</i> **Jim:** While we're talking about this as well, I think one of the things that we've all experienced around font sizes is… Ben, I'm sure you've come across this. So when you're using your phone and you're trying to fill in a form online, you tap into an input field and it zooms. 

<i class="timecode">[00:34:05]</i> **Ben:** Yes! Yes. It's the worst. 

<i class="timecode">[00:34:07]</i> **Jim:** It is just awful! And I don't know if you've ever looked at what's causing that?

<i class="timecode">[00:34:13]</i> **Ben:** No, no!

<i class="timecode">[00:34:14]</i> **Jim:** It's incredibly simple.

<i class="timecode">[00:34:15]</i> **Ben:** Okay?

<i class="timecode">[00:34:15]</i> **Jim:** Actually, you know, I spend far too long looking at this stuff, don't I? So the thing that's actually causing that is the font size of that input being less than 16 pixels. Your phone's scaling the screen to make that 16 pixels.

<i class="timecode">[00:34:29]</i> **Ben:** Ohhhhh! Okay, okay! 

<i class="timecode">[00:34:32]</i> **Jim:** And it's not great, but it's part of the tag, which I think is one of the things we wanted to talk about today, wasn't it? The responsive viewport tag, which is quite an important one because none of this works without that tag! 

<i class="timecode">[00:34:44]</i> **Ben:** Yeah, absolutely! Okay!

<i class="timecode">[00:34:49]</i> **Jim:** We have got — obviously, we discussed earlier — we have got a little bit more to show on accessibility and sizing, but I think actually we should probably jump into that one. So, if we open up the index.html file here, towards the very, very top. There we go! On line 7 — sevens have come up a few times today — we've got this meta viewport tag, which instructs your device to say, "The width of the screen, make it the device width." Now, I've seen sites in the past as well actually put in pixel values, and I don't know if it's truly supported or still is, but that did force a few devices to be like, "Hey, I don't care about my screen size, but this is the size of the screen!" It was horrible! Yeah!

<i class="timecode">[00:35:26]</i> And we've got the initial scale of 1 as well. Now I don't — again, jump in and interrupt me if you think that I'm wrong here, because I'm very opinionated, as I'm sure a lot of people who know me in the chat will attest — but there's also the ability to set minimum and maximum scales in there. I detest that! I think if a user wants to zoom in on something, we should let them!

<i class="timecode">[00:35:49]</i> **Ben:** Mhmm.

<i class="timecode">[00:35:50]</i> **Jim:** So, again, I'm just going to do a quick google, 'cause I didn't have this to hand.

<i class="timecode">[00:35:55]</i> I'm just gonna see if MDN has the lovely docs which describe what can be custom to there. And yeah! So, we can see in there, if we scroll down about… actually all the way, nearly to the bottom, just above where it says "Common viewport sizes for mobile," we can see what I think is a particularly nasty…

<i class="timecode">[00:36:28]</i> **Ben:** Yeah, sorry, where…? I think I'm on the wrong page. Oh! Oh, it's this one! "Using the viewport meta tag." You know, I probably should've…

<i class="timecode">[00:36:36]</i> Okay, "Common viewport sizes." You got it.

<i class="timecode">[00:36:39]</i> **Jim:** If we look just above there, you'll see what I think is a particularly nasty viewport meta tag. And that one's saying, "Make the screen the device width. Set the initial scale to 0.86." I find that incredibly odd. Why would you want to shrink anything down by default? And then, what that's also doing is saying, "We've got a minimum, so never go smaller than this small that we've set it to," but then also setting a maximum scale of 5, so it's stopping it from going as big as users necessarily want!

<i class="timecode">[00:37:13]</i> **Ben:** Gross.

<i class="timecode">[00:37:14]</i> **Jim:** So MDN's saying there, " The result is horizontal scroll is suppressed in any orientation and the user can zoom in if they want." Do you know what? I'm not loving this. MDN, love the new UI, but I'm not loving the viewport here.

<i class="timecode">[00:37:30]</i> **Ben:** Mhmm.

<i class="timecode">[00:37:32]</i> **Jim:** I much prefer the one above, which is "Let the users scale."

<i class="timecode">[00:37:35]</i> **Ben:** Right.

<i class="timecode">[00:37:35]</i> **Jim:** "Let's start at a scale of 1. Let the users scale in and out." 

<i class="timecode">[00:37:40]</i> **Ben:** Yeah, this makes sense. This goes, you know…

<i class="timecode">[00:37:43]</i> **Jim:** Ooh, no, it doesn't!

<i class="timecode">[00:37:44]</i> **Ben:** Like, we're setting a sensible default of the, like, device width, right? Whatever that is. Like, that makes sense. And you're giving the user the choice to just control everything else. Like, it makes sense that MDN would need to be like, "Here's how you could break things if you needed to," but like… 

<i class="timecode">[00:38:02]</i> **Jim:** Do you know what? I think we might have actually selected the wrong one. Sorry, that is my bad. 'Cause that's also got a maximum scale. It was breaking at the wrong point.

<i class="timecode">[00:38:08]</i> **Ben:** Mm!

<i class="timecode">[00:38:08]</i> **Jim:** Actually, that one prevents zooming! We don't want that. 

<i class="timecode">[00:38:14]</i> **Ben:** Oh, this IS maximum scale! You're right, you're right, you're right! 

<i class="timecode">[00:38:16]</i> **Jim:** Yeah, oh god! Sorry, that's my fault. Sorry!

<i class="timecode">[00:38:18]</i> **Ben:** No, you're good!

<i class="timecode">[00:38:19]</i> **Jim:** No, yeah. No, let's go back to the one we had in our HTML file! That's the one we like! It's just, "Hey, launch it the size of device. Be responsive and scale if you need."

<i class="timecode">[00:38:28]</i> **Ben:** Mhmm.

<i class="timecode">[00:38:31]</i> **Jim:** Yep. Cool, okay.

<i class="timecode">[00:38:32]</i> So I think one of the things that people often misunderstand is the difference between font size and the difference between their screen zooming. Okay?

<i class="timecode">[00:38:45]</i> **Ben:** Yeah!

<i class="timecode">[00:38:45]</i> **Jim:** So, one of the things I'd like to show is a really common problem around modals. Now, how do you feel about modals? 

<i class="timecode">[00:38:55]</i> **Ben:** They're so difficult to get right, honestly, and half the time, it seems like unless you really, really need to interrupt someone's flow, like, modals are probably better suited just instead, like, incorporated directly into the flow of the page or maybe as their own page, unless you REALLY need to interrupt someone.

<i class="timecode">[00:39:17]</i> **Jim:** Yeah. I could not agree more. I hate them! And I see them every day. Every time you go to a website, it's "Hey, do you want to sign your cookies away?" and GDPR!

<i class="timecode">[00:39:28]</i> **Ben:** Every time. Have you seen — by the way, as a bit of a diversion here… god, what is the website? It's like, I think, "The Web As I Experience It" or something like it? "How I Experience Web Today." Here we go. It's… yeah. So it takes you through basically THE experience for, like, modern web experiences. Here we go. Doo-doo-doo-doo-doo! Yeah, but it just, you know, "Oh, you accept. You sign your cookies away. Oh, look at that. No, no, I'd rather not do that. Block this. Oh, no. I DO have an adblock!"

<i class="timecode">[00:40:12]</i> Yeah. Just… it's a great demonstration. But yes, sorry. 

<i class="timecode">[00:40:19]</i> **Jim:** No, I love that! The reason I love that is that it's so indicative of a — again, not gonna name the brand — but a major clothing brand globally, and they're the website I was on today. Amusingly, I was using it as an example of what not to do.

<i class="timecode">[00:40:34]</i> **Ben:** Mhmm.

<i class="timecode">[00:40:35]</i> **Jim:** But yeah, so if we want to jump to our demo.

<i class="timecode">[00:40:38]</i> **Ben:** Yes.

<i class="timecode">[00:40:39]</i> **Jim:** I think, go to it in Chrome. We've got that other file which is, effectively, it's this. I've thrown a dialog in here, and this is using the `<dialog>` HTML element. I just want to qualify a few things about the `<dialog>` HTML element. It promises all these wonderful, beautiful things, but it's not quite there in the browsers yet. And as soon as it is there in the browsers, we're in an amazing place. So it does lots of great things, like it manages your focus for you. It prevents escaping — like screenreaders from breaking out with a modal.

<i class="timecode">[00:41:12]</i> **Ben:** Mhmm.

<i class="timecode">[00:41:12]</i> **Jim:** It handles the difference between a modal and a dialog. A modal will have a backdrop behind it and a dialog won't. It's just not there yet, even with the polyfills, and I've been caught out by that. I've used it in this demo mainly because I just wanted something really quickly to throw together.

<i class="timecode">[00:41:28]</i> **Ben:** Absolutely.

<i class="timecode">[00:41:29]</i> **Jim:** I mean, we can see there one of the great features of the `<dialog>` tag, that it's automatically pulled focus onto that close button, which is the first focusable element inside the DOM.

<i class="timecode">[00:41:38]</i> **Ben:** Yep!

<i class="timecode">[00:41:39]</i> **Jim:** And you see how it works with focus traps. These are all things for, I guess, another stream when we talk about modals in depth and then say how much we hate them.

<i class="timecode">[00:41:48]</i> **Ben:** Yep.

<i class="timecode">[00:41:49]</i> **Jim:** Ooh, what's that one?

<i class="timecode">[00:41:53]</i> **Ben:** Oh, I'm using KeyCastr to show my keypresses. It's a recent addition to the setup. So as I type in here…

<i class="timecode">[00:42:04]</i> **Jim:** Ooh!

<i class="timecode">[00:42:04]</i> **Ben:** "Hello world." Yeah! Figured it might be good for some accessibility demonstrations. So chat, let me know what you think about KeyCastr demos!

<i class="timecode">[00:42:14]</i> **Jim:** I think I'm going to steal that and incorporate that into my own! I don't know, I don't know! I'll think about it. I might to have different scenes for that one. I feel like that could be quite intrusive when coding. 

<i class="timecode">[00:42:22]</i> **Ben:** Mm. Yeah, I've got… so I've got a Stream Deck, and so I've wired up KeyCastr to a shortcut on there. So I press it, it turns on KeyCastr, and then I press it and it turns it off.

<i class="timecode">[00:42:34]</i> **Jim:** Nice!

<i class="timecode">[00:42:34]</i> **Ben:** I figure that's mostly going to be helpful for, like, screenreader demos. But awesome!

<i class="timecode">[00:42:38]</i> **Jim:** No, that's cool!

<i class="timecode">[00:42:39]</i> **Ben:** Hey, we've got some love for the KeyCastr demo. Cool! Anyways!

<i class="timecode">[00:42:42]</i> So yeah, we've got a dialog here, but obviously, like, we're not here exclusively for dialogs. So why have you brought me this dialog, Jim?

<i class="timecode">[00:42:51]</i> **Jim:** Oh, 'cause I just thought I'd get you to sign your life away to a cookie policy.

<i class="timecode">[00:42:54]</i> **Ben:** You know, fair.

<i class="timecode">[00:42:55]</i> **Jim:** No, what I wanted to show was one of the other requirements that we have within the WCAG reflow specification, and that's the part around being able to access your content at 400% zoom.

<i class="timecode">[00:43:06]</i> **Ben:** Yeah!

<i class="timecode">[00:43:07]</i> **Jim:** Now, I can't… I'm going to apologize to the viewers. This is not a great modal, right? This one's intentionally broken, and we're going to spend a few minutes here out fixing it, but ultimately, it's not a great modal experience because even when we fixed it, it's not amazing. 

<i class="timecode">[00:43:24]</i> **Ben:** Yes.

<i class="timecode">[00:43:25]</i> **Jim:** Alright.

<i class="timecode">[00:43:25]</i> **Ben:** So I'm going to zoom into this…

<i class="timecode">[00:43:28]</i> **Jim:** 400%.

<i class="timecode">[00:43:28]</i> **Ben:** …400%. And oh, no! Like, I can't see everything, and I'm actually… like, I am trying to scroll here and it's not letting me.

<i class="timecode">[00:43:37]</i> **Jim:** I'll be honest. I did have to put something in to break the scrolling. The `<dialog>` tag actually has overflow set to auto as standard, which is beautiful. But still, the `<dialog>` tag hasn't even saved us in this horrible situation. So this is where we have to really intervene. And the third problem is we can't access our content. We cannot even tab to our content. And so I want to use this to introduce another of our units which is incredibly important when we're doing content of this size, which is the viewport height and the viewport width units.

<i class="timecode">[00:44:15]</i> **Ben:** Okay.

<i class="timecode">[00:44:15]</i> **Jim:** So if I could trouble you to jump into that. First, the style.css is where we're setting a lot of the units. And further down, we can see I've got my max width set to 1280. We should probably talk about that one as well, actually. The reason I've got… yeah, I missed that one earlier! So, max width set to 1280 pixels, again, with the new additions to the media queries, we should probably convert that one to a rem value, so if I could trouble you to swap that one over to 80rem. 

<i class="timecode">[00:44:43]</i> **Ben:** 80rem, you got it!

<i class="timecode">[00:44:45]</i> **Jim:** 80rem! It's exactly the same. But that one handles the max width as well, so actually I should have shown that one earlier. Apologies!

<i class="timecode">[00:44:54]</i> Right! Okay, so I've set in here that mobile has a maximum width of 800 pixels, which is probably what we want on our sort of experience. However, I want to change this to use the viewport width unit as well, because if you noticed in Chrome, that will have literally gone edge to edge of the screen and full bleed. So I don't always want that. Yeah, exactly, here. So there's a few different things we can do. One of the things we can do is set it to be 95 viewport width.

<i class="timecode">[00:45:21]</i> **Ben:** Okay!

<i class="timecode">[00:45:22]</i> **Jim:** So 95vw. That is literally 95% of the viewport. 

<i class="timecode">[00:45:28]</i> **Ben:** Let's go ahead and do that, 95vw.

<i class="timecode">[00:45:30]</i> **Jim:** Yeah, yeah!

<i class="timecode">[00:45:32]</i> **Ben:** Okay!

<i class="timecode">[00:45:32]</i> **Jim:** That's a great one. So if we have a look at that, we can see that's now, you know, pulled in slightly, although we can be a little bit more explicit. If we want to be a little bit more controlled than that, one of the other things we can do, or should be able to, is change it to be calc 100 viewport width minus…

<i class="timecode">[00:45:52]</i> Now, we can either use one of our custom properties or, just for the sake of making sure it absolutely works, 24 pixels. Oh, no, let's go 32. Yeah.

<i class="timecode">[00:46:04]</i> **Ben:** 32 pixels? Okay!

<i class="timecode">[00:46:06]</i> **Jim:** Which should give us a nice 16 pixel gutter, either side. 

<i class="timecode">[00:46:11]</i> **Ben:** Alright, so as I resize this, the gutter stays the exact same size.

<i class="timecode">[00:46:17]</i> **Jim:** Yeah. 

<i class="timecode">[00:46:18]</i> **Ben:** Okay, very cool.

<i class="timecode">[00:46:19]</i> **Jim:** Which, I think that's quite a nice experience there. And so that handles the width. Now, what I'm going to ask you to do is we're going to create the same experience for the max width for the height. So can I trouble you, please, to create a new custom property, --modal-max-height? And we're going to — you know what? Let's just use that same calc equation, but instead of it being viewport width, now, we're gonna use viewport height. 

<i class="timecode">[00:46:47]</i> Now, the reason that I'm talking about this is because regardless of your browser's zoom level, viewport height is always the viewport height.

<i class="timecode">[00:46:54]</i> **Ben:** Mm!

<i class="timecode">[00:46:55]</i> **Jim:** That doesn't change. So immediately, as we start applying that to our dialog, what we'll find is that the actual height, the… I think we still need to start using it possibly. Yeah, it should be… yeah, I think we do need to — no, it's in there. Sorry. I already prepared for that one.

<i class="timecode">[00:47:16]</i> So we can see immediately that the modals start into fit. There's just a bit of a problem now with the content. The content is overflowing. It's breaking out of its container and scrolling off the screen.

<i class="timecode">[00:47:28]</i> **Ben:** Yes.

<i class="timecode">[00:47:28]</i> **Jim:** So, and we don't want that either, right? That's not a great experience, and it's definitely breaking our WCAG rules because we are allowed to scroll in a single direction, but here we're scrolling in none. And part of the reason that's not working is I've also implemented a scroll lock, which is a common feature that we find we use with modals that prevents the screen from scrolling…

<i class="timecode">[00:47:50]</i> **Ben:** Mhmm.

<i class="timecode">[00:47:50]</i> **Jim:** …so that you don't actually scroll the modal off screen, which is, you know, a problem.

<i class="timecode">[00:47:54]</i> Okay! So, if we jump into our CSS then. The way that I've architected this dialog is that we have an outer `<dialog>` element, and that's the one that's now got the modal maximum height on it. It's got a utility area for the close button — yeah, excellent, there — which is always going to sit at the top. It's positioned absolute, so it always sits there, creating padding for it. And then we've got the content, which is actually the body of the modal itself. That's the meat on the bones, really. So we've got a head, body, and footer inside that region as well we could do various things with. And so what I'm thinking we should do is say, you know what, let's set a maximum height on the modal content.

<i class="timecode">[00:48:40]</i> **Ben:** Okay, so on here.

<i class="timecode">[00:48:43]</i> **Jim:** Yeah, yeah.

<i class="timecode">[00:48:44]</i> **Ben:** Okay.

<i class="timecode">[00:48:44]</i> **Jim:** If you go into the CSS, I think you should, somewhere around… sorry, we've got a dialog.css file. And then, yeah, somewhere around line 30, I believe it is? You should see ".dialog__content" already.

<i class="timecode">[00:48:57]</i> **Ben:** Yes, okay.

<i class="timecode">[00:48:57]</i> **Jim:** Where it's just got some basic "box-sizing: border-box," background color, and paddings, border radiuses set. Or maybe border radii.

<i class="timecode">[00:49:05]</i> I think, let's start with the max width. Now, I know we set the maximum width on the container to be 95% viewport width, but we also probably want to make sure that the content doesn't force it that wide.

<i class="timecode">[00:49:20]</i> **Ben:** Okay.

<i class="timecode">[00:49:20]</i> **Jim:** So that when… because if we were to pull this up on, say, a desktop-sized screen, we don't want to be 95% of, you know, a 2,000 pixel wide desktop. So let's put a simple 800 pixels here. We could have a custom property for it but, you know, it's only gonna be used once. And now we can put an "overflow: auto." So, for people who don't know, "overflow: auto" will allow the content to scroll when the content is larger than the available space.

<i class="timecode">[00:49:47]</i> That won't work just yet. We've got one last thing to do, and that's, let's set a maximum height on the dialog content, right? So we're just going to pop max height in there. And, now, this is a little bit of maths. Thankfully, I've sort of set some of this. So we're going to go "calc()." And then in there, I'm going to go "var." I'm going to use our --modal-max-height variable. So we want the maximum height to be the maximum height of the modal minus the space for the close button.

<i class="timecode">[00:50:18]</i> **Ben:** Mm!

<i class="timecode">[00:50:18]</i> **Jim:** Now, I've already done the max for the close button. If you want to scroll to the very top of this file, we'll see another custom property declared in the modal: --utils-offset.

<i class="timecode">[00:50:26]</i> **Ben:** Okay.

<i class="timecode">[00:50:27]</i> **Jim:** And we just want to use the utils offset. So we want to say the maximum height for the content is the size of the modal max height minus the utils offset. 

<i class="timecode">[00:50:40]</i> **Ben:** You got it! So like this. 

<i class="timecode">[00:50:42]</i> **Jim:** Exactly like that! So we've set, the modal's got the maximum height.

<i class="timecode">[00:50:46]</i> I don't draw a lot of this with my hands on the camera. Yeah, I do that a lot. I'm very handsy, with the waving. I thought I'd qualify that one.

<i class="timecode">[00:50:54]</i> Yeah, so we said the maximum height of the modal is what we've set, but then we want to make sure that that close button's always accessible at all times. Even if the content's, you know, scrolling, the close button's always accessible.

<i class="timecode">[00:51:06]</i> **Ben:** Absolutely.

<i class="timecode">[00:51:07]</i> **Jim:** Always. You've got to close modals, right? That's really important. And so now with that, we can see we've got this experience. 

<i class="timecode">[00:51:15]</i> **Ben:** Okay! Yeah, and as I, like, scroll… right now it's hard to see, 'cause you can't see me with my mouse but, like, I am trying to scroll out here. Nothing's going on. But in here we have full scroll capability here. We could reach the bottom. Everything's lovely.

<i class="timecode">[00:51:31]</i> **Jim:** The other important one, if you can scroll to the top. Could I trouble you just to hit Tab? So, we'll hit Tab once, and I'm hoping that jumps into the close button. Oh, there we go. It jumped over here. 

<i class="timecode">[00:51:39]</i> **Ben:** Oh, yeah, I had already clicked in here.

<i class="timecode">[00:51:41]</i> **Jim:** Ah, okay.

<i class="timecode">[00:51:42]</i> **Ben:** So Close, OK, Cancel.

<i class="timecode">[00:51:45]</i> **Jim:** If you scroll to the top of the modal? 

<i class="timecode">[00:51:48]</i> **Ben:** While it's focused down here? 

<i class="timecode">[00:51:49]</i> **Jim:** If we move focus back on to Close and we scroll to the top. What I'm trying to really illustrate…, yeah, there we go. Let's try this. Because we've used the "overflow: auto," when we move focus to the OK button, the browser is automatically going to scroll that region as well to the focusable content. And that's also really important as well, that keyboard users can access that, because we are going to have keyboard users that zoom to 400%.

<i class="timecode">[00:52:13]</i> **Ben:** Absolutely. Very cool! Did you have any other demos, anything else you wanted to show off or improve or talk about?

<i class="timecode">[00:52:21]</i> **Jim:** Uh, no, I think that's everything, really. Everything I've sort of prepared for. There's such a lot to talk about here.

<i class="timecode">[00:52:28]</i> **Ben:** Mhmm.

<i class="timecode">[00:52:29]</i> **Jim:** Mostly I think it's about understanding when to use different units. And so viewport height is so important because it doesn't impact page zoom. And it's understanding that you've got your branded elements such as paddings and border radii…

<i class="timecode">[00:52:39]</i> **Ben:** Mhmm.

<i class="timecode">[00:52:40]</i> **Jim:** Which you probably don't want to change with font size. 

<i class="timecode">[00:52:45]</i> **Ben:** Very cool. I think this has been such a helpful demonstration for me in delineating those, so thank you. I super appreciate that! Truthfully, I think we can probably start wrapping up unless there's any questions in the chat.

<i class="timecode">[00:53:00]</i> But in the meantime, I'm going to go ahead and start promoting all of your links! So y'all, go follow Jim on Twitter. Y'all go follow him… even better, go follow him on Twitch. He is GeometricJim on Twitch. Yeah, if you're just absolutely digging these practical tips for accessibility, just, in the real world, Jim's streams are fantastic for that. He explains things incredibly approachably and through incredibly useful demonstrations just like what y'all saw here today, so I could not recommend his streams any more. Like, you should absolutely… if Some Antics is your cup of tea, GeometricJim is your cup of tea. And so, yeah!

<i class="timecode">[00:53:51]</i> **Jim:** That's too kind.

<i class="timecode">[00:53:53]</i> **Ben:** Yeah, we've got a few questions actually. First of all, Travis wants to know, what shape do you prefer? Of all the geometry, what shape do you prefer? What is the best shape?

<i class="timecode">[00:54:02]</i> **Jim:** I think a dodecahedron!

<i class="timecode">[00:54:04]</i> **Ben:** Dodecahedron is GOOD! That's a good choice! 

<i class="timecode">[00:54:07]</i> **Jim:** It just sounds great as well! I love the sound of the word as well as the 20-sided shape.

<i class="timecode">[00:54:11]</i> **Ben:** It's very absolute. Like, "Behold… the dodecahedron!"

<i class="timecode">[00:54:17]</i> And gohaku does want to know what your stream schedule is, so when do you typically stream? 

<i class="timecode">[00:54:22]</i> **Jim:** It's a little bit chaotic. I'm trying to find a good time, because I'm a member of The Claw, who are an absolutely fantastic streaming group. Of course, Ben, you're part of the group. Aw, yeah, excellent. Let's show The Claw team. I'm trying to just find a slot that doesn't really clash with anybody too much, 'cause you know, we've got to be considerate of the others. I'm thinking Wednesday or Thursday evenings tend to work quite well. By evenings, evening UK time, which I think that's about 7pm UK time, GMT, which is that 1:00 your time, Ben? 

<i class="timecode">[00:54:59]</i> **Ben:** I think we're six hours offset, so yes, 1:00. Things that are going to get weird once daylight savings hits, but yeah, around what would be early afternoon for me.

<i class="timecode">[00:55:12]</i> **Jim:** Okay. So yeah, US time, around early afternoon. UK time, evenings. Hopefully not too late, though, 'cause we also gotta be considerate of our European friends who are one hour ahead of GMT.

<i class="timecode">[00:55:24]</i> So, I am hoping to try and get some streams out in the day as well. I'm starting my new role pretty soon, just over a week, and so hopefully I can get a bit of a bit of time to catch the early-doors people as well.

<i class="timecode">[00:55:36]</i> **Ben:** Alright! Cool! I'm gonna pose a question in the chat real quick. Who should we raid if there's anyone live? Actually, let's see if… I don't think anyone is live according to The Claw.

<i class="timecode">[00:55:49]</i> But yeah! So Jim, thank you so much for your time. Thank you so much for these excellent tips. You've been fantastic, I think we can all agree, so thank you, thank you again.

<i class="timecode">[00:56:01]</i> My pleasure.

<i class="timecode">[00:56:02]</i> Chat, if you're into accessibility and core web technologies, Some Antics is typically a once-weekly show, typically Tuesdays at 2pm Central Time. And next Tuesday, we are going to be having Dave Rupert on. Dave is going to be introducing us to Open UI, which is a working group that's been working to improve just basically the developer experience and accessibility around native HTML elements. So if you've been hearing anything about the new `<selectmenu>` element that's getting piloted in Chrome, that is the work of Open UI. We're going to be talking about what even is a spicy section. And plus, it's Dave Rupert, so you know it's going to be a great time. So if you're into streams like that, you should absolutely follow here, twitch.tv/SomeAnticsDev. Additionally, you should follow on Twitter! I put the link to that in the chat. That's also at @SomeAnticsDev.

<i class="timecode">[00:57:00]</i> This has been delightful. Thank you all for being here. Go follow Jim. Go show Jim your love, because he has earned it!

<i class="timecode">[00:57:09]</i> **Jim:** Ben, thank you. Thank you for having me. I just want to just take a second to say thank you. You're amazing.

<i class="timecode">[00:57:13]</i> **Ben:** Thank you kindly.

<i class="timecode">[00:57:14]</i> **Jim:** Your contents are amazing. And thank you for hosting me this evening.

<i class="timecode">[00:57:16]</i> **Ben:** Thank you! Yeah! So y'all, it's been a good one and I will see you around on Tuesday! Bye, y'all!