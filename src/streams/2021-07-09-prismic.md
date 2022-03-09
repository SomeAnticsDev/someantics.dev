---
title: "Making a Page Builder with Next.js, Storybook, and Prismic, with Alex Trost"
thumbnailTitle: "Making a Page Builder with Next.js, Storybook, and Prismic"
timeOfDay: 12pm
sourceCode: https://github.com/SomeAnticsDev/more-antics
upload: https://youtu.be/cllxHtdd4-g
hosts:
  - Ben Myers
  - Alex Trost
tags:
  - Frameworks
---

[Prismic](https://prismic.io) is a headless, component-driven content management system built for the Jamstack. Join us on Some Antics as Prismic developer advocate Alex Trost shows us just how easy it is to bring flexible, component-based content from Prismic into a Next.js app using Prismic's Slice Machine.

Beware, however: horse puns abound.

## More From Alex

- [Follow Alex on Twitter!](https://twitter.com/trostcodes)
- [Follow Alex on Twitch](https://twitch.tv/TrostCodes) for Component Carousel and Frontend Horse streams!
- [Frontend Horse](https://frontend.horse)

## Mentioned Links

- [horse_js](https://twitter.com/horse_js)
- [Starship prompt](https://starship.rs/)
- [Unsplash](https://unsplash.com/)

## Transcript

**Ben:** <i class="timecode">[00:00:00]</i> Howdy, howdy, y'all! Welcome back to Some Antics, the accessibility stream whose name you have to say aloud. I have with me today Alex Trost of Frontend Horse notoriety. Alex, how's it going? 

**Alex:** <i class="timecode">[00:00:17]</i> It's going great, Ben. I'm really, really thrilled to be here. Yeah, when you asked me on, I was super thrilled and, uh, it's here! It's here. We are here. We're going to be talking Slice Machine, Prismic, shipping a page builder on Next.js. It's gonna be a lot of fun. I'm excited. Thanks for having me. 

**Ben:** <i class="timecode">[00:00:34]</i> Absolutely. So for folks in the chat who might not know who you are — and as I'm looking at the chat, there's lots of folks who would probably know who you are — but just in case, just for posterity, would you like to introduce yourself?

**Alex:** <i class="timecode">[00:00:46]</i> Yeah, sure. I'm a four-time heavyweight WWE champion.

**Ben:** <i class="timecode">[00:00:49]</i> Okay, seems legit.

**Alex:** <i class="timecode">[00:00:50]</i> But most people would probably know me from — or what I'm into now, I think, is what I should say — I am a Developer Experience engineer at Prismic. We are a headless, component-based CMS. And I've been kind of focusing on doing livestreams like this. And so, what I've been doing over on my channel is primarily focusing on a show called Component Carousel, where we have someone on every Wednesday, and they build just the coolest component around a theme that we have for the month. So this month is "Kaiju Demolition Services," and just on Wednesday, we had Bruno Simon, who is a Three.js expert, master, wizard, come on and build a Godzilla that rampages through a physics-based city and knocks these blocks around. It was super cool to make that with web stack, and it was fantastic. We have Zach Saucier from Rally agency coming on Wednesday, and he's super cool. And we just have people on, and it's a lot of fun. We learn how to make a component that you probably aren't able to make during your day job, but you get to learn fun web tech that you can hopefully bring back to your day job, right?

**Ben:** <i class="timecode">[00:02:08]</i> Yes.

**Alex:** <i class="timecode">[00:02:09]</i> So that's what I've been focusing on. But I also do a newsletter and write some articles about creative web development. I just try to — I like focusing on the more fantastical side of web dev where, like, you see  those CodePens where you're just like, "This would never be put on a site, but this is incredible. They've just did an entire portrait in CSS—"

**Ben:** <i class="timecode">[00:02:30]</i> Yes.

**Alex:** <i class="timecode">[00:02:31]</i> "—or they did something incredible." So, like, that's always been my thing I like to write about and shine a light on those things, so yeah. Lots of people in the chat! What's going on?

**Ben:** <i class="timecode">[00:02:40]</i> Yeah, lots of good folks! And, by the way, wanna shout out a few followers. Nick, thank you for following. We've also got, Marcelo followed. swagkiller007, who I believe is named Anthony? 

**Alex:** <i class="timecode">[00:02:52]</i> You nailed it! Well done, Ben!

**Ben:** <i class="timecode">[00:02:53]</i> Boom! So thank you all for following and thank you all for being here! Lots of great folks in the chat. It's good to see you all.

Yeah, let me go ahead and start showing some screens and yeah! So we've got Alex's Twitter up. Go follow Alex's Twitter. Lots of great stuff there. Also your — ooh. My computer has slowed down. There we go. That's been happening more and more as I stream. But, so this is the Frontend Horse site. Lots of great, fun stuff there. You're gonna get a kick out of this. And just absolutely gorgeous demos. You're doing a great job.

**Alex:** <i class="timecode">[00:03:34]</i> Thanks!

**Ben:** <i class="timecode">[00:03:34]</i> Yeah, I put the link to Frontend Horse, to Alex's Twitter, and to Alex's Twitch in the chat, so go follow him all the places. It's incredible.

Travis wants to know whether this is related to the horse_js Twitter account, and I think we can either confirm nor deny. 

**Alex:** <i class="timecode">[00:03:54]</i> <i class="brackets">[laughs]</i> That'd be, yeah, that might be a… what's it called? I was gonna say hidden personality, but that's not like Batman. Batman has a secret identity. Hidden personalities. Two synonyms that my brain went to. I don't know why.

**Ben:** <i class="timecode">[00:04:09]</i> Mhmm. I feel like if you had the Frontend Horse brand and also you were horse_js, like, that would be like Batman running a Twitter account called, like, "Opinionated Batperson" and going, "Totally not the same person." 

**Alex:** <i class="timecode">[00:04:26]</i> Yeah. I barely have enough energy to do the one. But yeah, I'm not familiar with the horse_js thing. I've got to check that out. 

**Ben:** <i class="timecode">[00:04:36]</i> Yeah. I think we gotta check this out. Ooh! There we go. "horse_js." What is running behind the scenes?? Yeah, here we go. So, horse_js, right? 

**Alex:** <i class="timecode">[00:04:46]</i> Oh, I'm mining crypto on your computer.

Oh, 

**Ben:** <i class="timecode">[00:04:49]</i> okay! 

**Alex:** <i class="timecode">[00:04:49]</i> Got it.

That's the script I sent you earlier. Is that cool?

Oh, that's so funny. Yeah, I think I had to have seen this at some point and kind of gone, "Ah, that's funny," but…

"no idea who any of these 'javascript twitter' personalities showing their—"

**Ben:** <i class="timecode">[00:05:03]</i> Yep.

**Alex:** <i class="timecode">[00:05:04]</i> This is good. I've got to check this out. I'm not that familiar. I'm not even following them, I don't think, but I don't know. Thank you for giving me the heads up, Waith.

**Ben:** <i class="timecode">[00:05:14]</i> Mhmm. There we go.

So speaking of that script you got me… dude, we gotta have a talk.

**Alex:** <i class="timecode">[00:05:22]</i> What's up?

**Ben:** <i class="timecode">[00:05:22]</i> We gotta have a talk. So first of all, you, you sent me… Let me, I guess, kick this up, 'cause I don't know, like, I kind of feel you might be stepping on my toes a bit. 

**Alex:** <i class="timecode">[00:05:34]</i> What? I don't know what you…

**Ben:** <i class="timecode">[00:05:39]</i> Well, let me just show you.

**Alex:** <i class="timecode">[00:05:40]</i> Alright!

**Ben:** <i class="timecode">[00:05:40]</i> Let me just show you.

**Alex:** <i class="timecode">[00:05:41]</i> Okay, okay.

**Ben:** <i class="timecode">[00:05:41]</i> You sent me this project. You were like, "Here's what we're working on today."

**Alex:** <i class="timecode">[00:05:44]</i> Mhmm.

**Ben:** <i class="timecode">[00:05:46]</i> Yeah, and I guess I just…

**Alex:** <i class="timecode">[00:05:48]</i> Should be there at localhost, yeah. 

**Ben:** <i class="timecode">[00:05:49]</i> Yeah, yeah, okay. Let me just open that up manually, because I think some other browser just decided to open up localhost instead.

<i class="brackets">[music]</i>

**Alex:** <i class="timecode">[00:05:59]</i> Oh!

**Ben:** <i class="timecode">[00:06:01]</i> Opera! Welcome, Opera! 

**Alex:** <i class="timecode">[00:06:04]</i> Opera! Wow, that's a…

**Ben:** <i class="timecode">[00:06:06]</i> What an entrance!

**Alex:** <i class="timecode">[00:06:07]</i> That's a name I haven't heard in quite a while. It's Opera Mini, though, right? That's my browser of choice. 

**Ben:** <i class="timecode">[00:06:13]</i> Why did it open *two* Operas? Oh my God, what an adventure. Okay, let me just do this manually, and then we can have a serious heart-to-heart here because, um… yeah.

**Alex:** <i class="timecode">[00:06:26]</i> Yeah.

**Ben:** <i class="timecode">[00:06:26]</i> What's this?

**Alex:** <i class="timecode">[00:06:27]</i> This is the site I put together, uh, More… More Antics. It's just, uh… I don't know. I just thought of it yesterday. I'm like, you know what? I'm a pretty zany kind of guy.

**Ben:** <i class="timecode">[00:06:37]</i> Okay.

**Alex:** <i class="timecode">[00:06:37]</i> I'm always up to — always getting into things. So I'm like, you know, I think I should talk about increasing that, getting some *more* antics, and I just kinda came up with this color scheme and logo and stuff, so, yeah.

**Ben:** <i class="timecode">[00:06:48]</i> Yeah, so purple and yellow and red and antics… 

**Alex:** <i class="timecode">[00:06:53]</i> Kind of like it. Yeah, so I just thought it was, you know, it's just, it's just me. It felt like me.

**Ben:** <i class="timecode">[00:06:59]</i> Yeah, it felt very you. Okay.

**Alex:** <i class="timecode">[00:07:00]</i> So I figured I would come on your stream to… might as well, since I'm here, do something for myself…

**Ben:** <i class="timecode">[00:07:06]</i> Right.

**Alex:** <i class="timecode">[00:07:06]</i> …and build out my personal site here, so yeah, if that's cool if I just continue to do that.

**Ben:** <i class="timecode">[00:07:13]</i> It's not, but okay. Let's do it. <i class="brackets">[laughs]</i>

Yeah, so this is More Antics — which by the way, like, I need to co-op this name. Uh, from your brand, of course. From your brand. 

**Alex:** <i class="timecode">[00:07:23]</i> Oh yeah, this is mine. This is clearly mine. This is the Wario to your Mario, is basically…

**Ben:** <i class="timecode">[00:07:30]</i> There we go!

**Alex:** <i class="timecode">[00:07:30]</i> …the idea here. I even took the logo and twisted it the way that, like, Wario might. So yeah, this is the evil version—

**Ben:** <i class="timecode">[00:07:37]</i> There we go.

**Alex:** <i class="timecode">[00:07:38]</i> —and not that evil, of Some Antics. It's not as good of a pun. 

**Ben:** <i class="timecode">[00:07:41]</i> More Antics is Some Antics after hours. 

**Alex:** <i class="timecode">[00:07:45]</i> Yeah. It's just more than a little bit, so yeah. 

**Ben:** <i class="timecode">[00:07:48]</i> Got it. So what are we going to be doing today, Alex? 

**Alex:** <i class="timecode">[00:07:54]</i> So, this site is built out, and if you, like, scroll through it or whatever, it's not like… The site itself is not like, "Wow, what a site!" These are kind of just, like, standard components that I put together. Asking for more antics. I'm proud of this one down here, so if you can just, uh… 

"I'm always ready to provide more antics than the competition. From the Pacific to the Atlantic, no one's got More Antics."

**Ben:** <i class="timecode">[00:08:19]</i> Hm.

**Alex:** <i class="timecode">[00:08:19]</i> I should've put that higher on the site…

**Ben:** <i class="timecode">[00:08:22]</i> Okay, okay.

**Alex:** <i class="timecode">[00:08:22]</i> …but I just thought that, you know, that was my wordsmithing for the day. But anyway.

Yeah, so each of these sections here — so like this contact form, this "More Antics is Everywhere," like this bit of content here, the featured posts section — those are all slices that are built out in Prismic. If you head over to the Prismic repository that you've got open—

**Ben:** <i class="timecode">[00:08:44]</i> Yes.

**Alex:** <i class="timecode">[00:08:44]</i> —in that third tab there… you pop into the homepage when it loads.

**Ben:** <i class="timecode">[00:08:52]</i> Yup. Alright, pop into Home. Cool. 

**Alex:** <i class="timecode">[00:08:58]</i> So you can see that each of those sections that we had there are a slice here. So right here is that hero section. And you can see, it says, like, "Switch variations." We can get into that in just a sec.

**Ben:** <i class="timecode">[00:09:09]</i> Okay.

**Alex:** <i class="timecode">[00:09:10]</i> But, like, we have the heading there. The body has an image. I failed to put alt text, shame on me. But yeah, so you are a contributor on this, so you can go ahead and bring in the accessibility expertise and set me straight.

**Ben:** <i class="timecode">[00:09:27]</i> "…in a fancy room," perhaps. 

**Alex:** <i class="timecode">[00:09:31]</i> I swear I typed out, like, almost that exact same thing. Yeah, and then the button text. So all this is coming from the CMS. Even those blog cards are just repeatable blogs there, so this is all — each one of those sections is a slice inside our inside our site here. And the cool thing is that we are able to reuse these slices, to move them around as we see fit, and kind of do whatever we want. So, like, if you hit the down arrow on the hero section there. 

**Ben:** <i class="timecode">[00:10:04]</i> Okay. Let's see there. Oh. 

**Alex:** <i class="timecode">[00:10:08]</i> There you go, cool. So it should be done, yep. And so if you hit "Save" up at the top right, what you just did is you just slid it under the previous one. And then if you hit publish, then a little thing will pop up and say, like, "Do you want to publish now? Do you want to publish in a release later?" We just wanna publish now, so go ahead.

And then you can go over to localhost:3000 and refresh that, and now our hero should be underneath the… I guess the featured posts one. Yeah, so if you scroll up there—

**Ben:** <i class="timecode">[00:10:38]</i> Oh!

**Alex:** <i class="timecode">[00:10:38]</i> —there's our hero. And so you're just able to use and reuse these slices and build out whatever kind of page you want. So anyone can come in here and kind of have that same sort of page builder experience where we have… Yeah, here, I'll show you. So back in Prismic, if you click the plus button at the top there. Right there. You can see here are the components or the slices that we have at our disposal. So we can add another hero section in here. We can add blog cards in there again. That content grid. Navigation  bar. That one I should've deleted. That one's vestigial, as they say. That one… when I was making the demo, but anyway. And the contact form. So we can now use these and put these on a multitude of sites.

So today I want to add a new slice with you to this site that I built out.

**Ben:** <i class="timecode">[00:11:37]</i> Okay.

**Alex:** <i class="timecode">[00:11:37]</i> And I'm thinking, like, a testimonial slice would be kind of cool.

**Ben:** <i class="timecode">[00:11:41]</i> Yeah.

**Alex:** <i class="timecode">[00:11:41]</i> 'Cause, like, these sorts of slices… like a hero section slice is pretty common. Like, you need one of those pretty much every site.

**Ben:** <i class="timecode">[00:11:50]</i> Mhmm.

**Alex:** <i class="timecode">[00:11:51]</i> And you might have a couple of different variations — one where, like, the image is on the right, one where the image is on the left, and one where the image is in the background, right?

**Ben:** <i class="timecode">[00:11:57]</i> Mhmm.

**Alex:** <i class="timecode">[00:11:57]</i> You can do all that as a variation on the hero section.

**Ben:** <i class="timecode">[00:12:00]</i> Yeah!

**Alex:** <i class="timecode">[00:12:00]</i> So it's a pretty versatile setup. 

**Ben:** <i class="timecode">[00:12:03]</i> I do definitely like the idea of doing testimonials for that, because I know More Antics is a very fledgling brand and it needs all the help it can get. It needs some serious credibility to do all of it. 

**Alex:** <i class="timecode">[00:12:14]</i> Yeah, yeah, but I know the chat's going to provide me with some really good quotes—

**Ben:** <i class="timecode">[00:12:17]</i> Yes.

**Alex:** <i class="timecode">[00:12:18]</i> —to put in there and so we can credit them. So, yeah. More Antics, I'm sure, any second now, the chat's going to be flooding us with a very strong testimony about how impressive, how brave More Antics is as a brand, and how it's changed their lives. So I'm just waiting on that, and I'm sure we'll have some good content by the end of this stream.

So we're going to be starting up Slice Machine, which is a local development environment tool that pretty much brings the creation of all those slices to our local environment. So if you head over to the terminal and start a new tab — we're going to have a few tabs in our terminal and a few tabs in Chrome, but you get used to the workflow pretty quick.

So if you go to the — yeah, just go to the folder that we're working in. 

**Ben:** <i class="timecode">[00:13:10]</i> Alright. Ooh. Can I…? There we go. Cool. 

**Alex:** <i class="timecode">[00:13:18]</i> So, chat, we're still waiting on a stronger endorsement than Waith's.

"Most active antics of the 2020's." That's solid so far.

**Ben:** <i class="timecode">[00:13:27]</i> Okay, okay!

**Alex:** <i class="timecode">[00:13:27]</i> We can tweak it stronger!

**Ben:** <i class="timecode">[00:13:29]</i> Alright!

**Alex:** <i class="timecode">[00:13:29]</i> Cool! So, are we…?

**Ben:** <i class="timecode">[00:13:31]</i> "I used to have no antics, but now I have more antics than I know what to do with." I think that one might be it. 

**Alex:** <i class="timecode">[00:13:37]</i> It's an arms race. It's an antics race at this point. We're going to absolutely… um, yeah, I'm sure the next person on this will do a "Most Antics," and it's just going to get out of hand. 

**Ben:** <i class="timecode">[00:13:49]</i> Well, yeah, and at some point, you know, the previous antics, they're going to look quite antic-quated.

**Alex:** <i class="timecode">[00:13:57]</i> Alright. We can wrap it up! I think that's all— 

**Ben:** <i class="timecode">[00:13:59]</i> Alright, anyways, thank you all for, thank you all for joining us today. This has been Prismic.

**Alex:** <i class="timecode">[00:14:03]</i> Thank you for having me.

**Ben:** <i class="timecode">[00:14:04]</i> I'll see you on Tuesday. We've got Chance Strickland coming on. Yeah. <i class="brackets">[laughs]</i>

**Alex:** <i class="timecode">[00:14:09]</i> You had that ending roll, like, lined up. That was impressive.

Alright, so here, let's do `yarn slicemachine`, is the command once you're inside more-antics. 

**Ben:** <i class="timecode">[00:14:19]</i> Okay, and that's "slicemachine," one word? 

**Alex:** <i class="timecode">[00:14:23]</i> Yes, exactly.

**Ben:** <i class="timecode">[00:14:24]</i> Okay.

**Alex:** <i class="timecode">[00:14:25]</i> And we can check out… You know what? Let's also check out our repository in VS Code, just to kind of give people—

**Ben:** <i class="timecode">[00:14:32]</i> Yesss.

**Alex:** <i class="timecode">[00:14:32]</i> —a bit of grounding here. Yeah, so I meant to also have us look around the project, so… 

**Ben:** <i class="timecode">[00:14:40]</i> Let's do that, yeah. 'Cause I wanna see how all the Prismic stuff is actually landing in our application 

**Alex:** <i class="timecode">[00:14:50]</i> it's magic, Ben. We can't tell you — no, just kidding.

Oh, you've got your bar on the right! Interesting! 

**Ben:** <i class="timecode">[00:14:55]</i> Yeah! 'Cause… so this is a thing I picked up from Jason Lengstorf, but it means that when I collapse the sidebar, my code doesn't jump.

**Alex:** <i class="timecode">[00:15:03]</i> That just makes sense!

**Ben:** <i class="timecode">[00:15:05]</i> From one streamer to another!

**Alex:** <i class="timecode">[00:15:07]</i> Wow! Alright! I appreciate that. That makes sense. It's still gonna take me a little bit of time to get used to, but that still makes sense that the jarring jump is… and that just makes sense. 

b1mind's in the chat. We've got some great people here.

**Ben:** <i class="timecode">[00:15:20]</i> Yeah!

**Alex:** <i class="timecode">[00:15:21]</i> Cool! So, uh… Let's see, where to start. So right now, if you open up `pages`. 

**Ben:** <i class="timecode">[00:15:29]</i> Yes. And this is a Next.js project—

**Alex:** <i class="timecode">[00:15:32]</i> Yes, exactly.

**Ben:** <i class="timecode">[00:15:33]</i> —so `pages` is, like, a magically named directory that actually constructs our routes, is my understanding. 

**Alex:** <i class="timecode">[00:15:38]</i> Right.

**Ben:** <i class="timecode">[00:15:39]</i> Cool.

**Alex:** <i class="timecode">[00:15:39]</i> Yeah, so `pages` is actually a specific thing. index.js, if you open that up.

**Ben:** <i class="timecode">[00:15:47]</i> Sure thing!

**Alex:** <i class="timecode">[00:15:47]</i> That is basically handling our homepage. So if you see it right there, apiParams says uid: 'home'. Line 20.

**Ben:** <i class="timecode">[00:15:58]</i> Oh, I see, yes.

**Alex:** <i class="timecode">[00:16:00]</i> Yeah, so that is querying for the page that we've given the UID of "home" back in Prismic. And so it's pulling that in statically, so this is all gonna build statically, and… Yeah, I don't know if I had a follow up, but it just gets exported as a static site. So it's gonna all be fetched at build time. 

**Ben:** <i class="timecode">[00:16:23]</i> Oh, I love that. I was getting worried because it's, like, well, if I'm hosting a page and that page has to fetch a whole bunch of stuff from Prismic, it seems like that would be a performance bottleneck, but no, it's all static.

**Alex:** <i class="timecode">[00:16:36]</i> Yeah, so, yeah.

**Ben:** <i class="timecode">[00:16:37]</i> Lovely, lovely.

**Alex:** <i class="timecode">[00:16:38]</i> Yeah, and then it passes what it gets back. It's basically going to get back anything on that page and a lot of it's going to be our slices. And so if you scroll up a little bit, you'll see that we get back props. I left a console log in because I am not a professional.… but also because I wanted you to know what's happening!

**Ben:** <i class="timecode">[00:16:59]</i> Yeah, gotta know those props!

**Alex:** <i class="timecode">[00:17:02]</i> Exactly. But that SliceZone component right there is basically what goes through the slices that it receives from Prismic—

**Ben:** <i class="timecode">[00:17:10]</i> Okay.

**Alex:** <i class="timecode">[00:17:10]</i> So it says "We have this slice called 'Hero' and we have this data," and then the resolver says, "Ah, okay. Well, 'Hero' goes to this component, and we're going to pass the data through to this component."

**Ben:** <i class="timecode">[00:17:23]</i> Okay.

**Alex:** <i class="timecode">[00:17:24]</i> And that's how we basically loop through and render each slice out with the data that it's supposed to get.

**Ben:** <i class="timecode">[00:17:30]</i> That's very cool.

**Alex:** <i class="timecode">[00:17:30]</i> So it all kind of happens *slightly* magically, but it's… SliceZone is just a well-tested, easy way to do a for-loop of looping through all of the slices that are coming in off of your request. 

So this page handles rendering out the homepage, and then the <i class="brackets">[uid]</i>.js right above it is pretty much the same thing. This is just going to take in anything that we go to. So, like, we have a /about page.

**Ben:** <i class="timecode">[00:18:02]</i> Mhmm.

**Alex:** <i class="timecode">[00:18:02]</i> So if you scroll down a little bit, you'll see that the params.uid at line 21, that's coming off of that request.

**Ben:** <i class="timecode">[00:18:13]</i> Okay.

**Alex:** <i class="timecode">[00:18:13]</i> And so we're grabbing that UID, and then we're going back to Prismic and saying, "Hey, do you have a file with that as the UID?" And since we do, it's going to bring the data for /about back and pretty much do the same thing after that.

**Ben:** <i class="timecode">[00:18:27]</i> Very neat.

**Alex:** <i class="timecode">[00:18:28]</i> But the index.js just handles the "/", because otherwise it would be, like, "/home", right? 

**Ben:** <i class="timecode">[00:18:34]</i> Yeah.

**Alex:** <i class="timecode">[00:18:34]</i> So you want to have the index.js there for that. And then, yeah, we can get into preview in a little bit. I guess not. That's going to happen within that `api` folder. But other than that, this is pretty much what's handling the fetching of it.

**Ben:** <i class="timecode">[00:18:49]</i> Okay.

**Alex:** <i class="timecode">[00:18:49]</i> If you open up the `slices` folder over on the right?

**Ben:** <i class="timecode">[00:18:52]</i> Yes. Okay.

**Alex:** <i class="timecode">[00:18:54]</i> And then that's where we are keeping those slices, so those main components that are, you know, like, those big horizontal sections like the contact form or the hero section — it's just React code and it is styled with Tailwind. Totally up to you, though. Like, there's nothing  about slices that makes it React-specific, Tailwind-specific, anything. We can use Slice Machine with Nuxt, also.

**Ben:** <i class="timecode">[00:19:19]</i> Mhmm.

**Alex:** <i class="timecode">[00:19:19]</i> It's a great view… it's a great collaboration tool, or… No, no, it works well with Nuxt, is what I'm saying. I don't got the words, Ben. I don't have the words in my brain. They're all, they're all mushing around in there. I don't know what's going on.

**Ben:** <i class="timecode">[00:19:34]</i> You have activate Lucie, I think is her name who says, "Someone said Nuxt?"

**Alex:** <i class="timecode">[00:19:40]</i> Lucie, yes!  

"Someone said Nuxt?" Yeah, if you say "Nuxt" three times, Lucie knocks on your door. It's like the Bloody Mary thing, seeing it in the mirror.

**Ben:** <i class="timecode">[00:19:49]</i> Okay.

**Alex:** <i class="timecode">[00:19:49]</i> But she just shows up and she will help you out with whatever you want. It's not scary at all. It's delightful. She's fantastic, so. 

**Ben:** <i class="timecode">[00:19:57]</i> So. I'm hard of hearing, and I had a very appropriate mishearing, which is that I thought you were implying that Lucie "Nuxt" on my door. And it's so good when your deafness leads to better puns than you ever could. 

**Alex:** <i class="timecode">[00:20:11]</i> ♫ Come and Nuxt on my door ♫

<i class="brackets">[Both laugh]</i>

I hope I didn't get your copyright-striked there with my incredible rendition of "Come & Knock on My Door."

**Ben:** <i class="timecode">[00:20:20]</i> Without a doubt, they're going to come, the RIAA is going to come and just take it down. No more antics.

**Alex:** <i class="timecode">[00:20:28]</i> No one even… I mean, you should still give subs. Everyone should subscribe. But it's not gonna go to you, Ben. It's going right to the Bezos of the RIAA.

**Ben:** <i class="timecode">[00:20:38]</i> I don't have subscriptions yet.

**Alex:** <i class="timecode">[00:20:40]</i> Ohh, geez!

**Ben:** <i class="timecode">[00:20:41]</i> I'm working on… That's actually one of the reasons I'm having this kind of extra, you know, stream, right, is cause I wanna like actually fit the, like, the window of, like, seven streams over a 30 day period—

**Alex:** <i class="timecode">[00:20:52]</i> That works!

**Ben:** <i class="timecode">[00:20:52]</i> —thanks to a little Friday stream with a good friend. 

**Alex:** <i class="timecode">[00:20:55]</i> Let's get you over the line. I love it.

**Ben:** <i class="timecode">[00:20:57]</i> Let's do it!

**Alex:** <i class="timecode">[00:20:58]</i> Cool. So, yeah, so this is just a slice. If you check out model.json there.

**Ben:** <i class="timecode">[00:21:05]</i> Yeah!

**Alex:** <i class="timecode">[00:21:06]</i> That's actually where our data is defined. And don't worry, you don't have to go in and edit this.

**Ben:** <i class="timecode">[00:21:12]</i> Okay.

**Alex:** <i class="timecode">[00:21:12]</i> This is what Slice Machine does, and I'll show you that in just a sec. But basically the beauty of it is that we have our data stored right next to our React code so that we can version control both together. If you're not using Slice Machine, the data model — and that's kind of, like, the old way of using Prismic, but this is, like, the new/canary way. Like, this is still something that we are working on and developing, and so this is not, like, fully, fully, fully production-ready yet, but we're right on the cusp.

**Ben:** <i class="timecode">[00:21:46]</i> Cool!

**Alex:** <i class="timecode">[00:21:46]</i> I'm showing you some cool new stuff. But the beauty of it is that, yes, you have this in version control, you can branch off and it's… yeah, all the benefits of having your data models stored in Git.

And so, if we want to go ahead and open up that terminal — I think we ran Slice Machine.

**Ben:** <i class="timecode">[00:22:10]</i> Yes.

**Alex:** <i class="timecode">[00:22:10]</i> So let's head back to the terminal and see if that…

**Ben:** <i class="timecode">[00:22:15]</i> Yes.

**Alex:** <i class="timecode">[00:22:15]</i> It launched! And let's do one more thing before opening Slice Machine. We can open it, but Slice Machine makes it super easy to integrate Storybook. If you're not familiar with Storybook, Storybook is a great way to build out UI components. It gives you, like, this isolated environment where you don't have to build it along with everything else and worry about, like, "Is the CSS bleeding in? Is that function, you know, crapping out and hitting that function?" And we also give you some prebuilt mocks that I'll show you in a sec. So Storybook's fantastic with Slice Machine. So if you open up a new terminal tab.

**Ben:** <i class="timecode">[00:22:55]</i> Cool.

**Alex:** <i class="timecode">[00:22:56]</i> So that's kind of the workflow. You kind of have three going. Yeah. 

**Ben:** <i class="timecode">[00:23:00]</i> I recently… so, earlier on stream, I created a little alias just to… so I can type `more`, and I'll—

**Alex:** <i class="timecode">[00:23:07]</i> Yeah, I saw that. That was awesome. Cool, so, um… `yarn storybook`.

**Ben:** <i class="timecode">[00:23:14]</i> `yarn storybook`. 

**Alex:** <i class="timecode">[00:23:18]</i> And then… This is the one that might take a few seconds. But in the meantime, we can go to Slice Machine UI, and that's at localhost, I think, 9999 or 9000. Something in the nines. 9999.

**Ben:** <i class="timecode">[00:23:32]</i> Okay. 

**Alex:** <i class="timecode">[00:23:32]</i> 9999.

**Ben:** <i class="timecode">[00:23:33]</i> I will just type that in manually so I don't open up three different browsers in one go. 

**Alex:** <i class="timecode">[00:23:37]</i> I wanted to see what Opera would do. 'Cause we haven't tested it in Opera all that well, so. That's why I'm here, is to give it the old Opera test.

**Ben:** <i class="timecode">[00:23:46]</i> You're trying to find the one Opera user.

**Alex:** <i class="timecode">[00:23:49]</i> Yes. Yeah, no, we got your address from a friend. You filled out a survey. You were the one person, so if you could tell us — I just have one question.

**Ben:** <i class="timecode">[00:23:59]</i> Yes.

**Alex:** <i class="timecode">[00:24:00]</i> Why??

**Ben:** <i class="timecode">[00:24:02]</i> So… Opera GX — first of all, I'm using specifically Opera GX in a day-to-day. It is meant, like it's advertised as, like, a gaming browser, which means it has integrations built in for, like, letting me control the performance of the browser—

**Alex:** <i class="timecode">[00:24:17]</i> Ohhhh, that's cool!

**Ben:** <i class="timecode">[00:24:18]</i> —or it has, like, default, like, built-in, like, Twitch integration. So I have, like, a pane that I can slide over to see who's online and stuff like that. So there's legitimate reasons! 

**Alex:** <i class="timecode">[00:24:30]</i> There you go! I haven't touched opera in a very long time and I've never heard of Opera GX. That's awesome.

So we just saw that Storybook kicked open.

**Ben:** <i class="timecode">[00:24:39]</i> Yes.

**Alex:** <i class="timecode">[00:24:39]</i> Can we check on the other tab? Is that…?

**Ben:** <i class="timecode">[00:24:42]</i> Yes. Oh, there we go.

**Alex:** <i class="timecode">[00:24:43]</i> There we are, cool.

**Ben:** <i class="timecode">[00:24:44]</i> Cool.

**Alex:** <i class="timecode">[00:24:44]</i> I think because we were kicking up both at the same time—

**Ben:** <i class="timecode">[00:24:47]</i> Mm.

**Alex:** <i class="timecode">[00:24:47]</i> —Slice Machine might've been looking for Storybook and it was kind of pending. So I think that's what happened. I'm not sure.

Cool. Just checking the chat real quick. Awesome.

And yes, so this is Slice Machine UI. This is our local environment for working with basically our data models, both for the entire page and also for slices, those specific horizontal components, right?

So I think we can start in Slices. So if you go over to the left.

**Ben:** <i class="timecode">[00:25:21]</i> Okay.

**Alex:** <i class="timecode">[00:25:21]</i> These are the slices that we have created. And as you can see, I don't have that navigation bar here, so it's just, I just need to delete it from the other thing. But these are the components that I've built out already. I want to make a new one with you. We're going to make that testimonial section. So if you go up. You nailed it. It's an intuitive UI. What can I say?

**Ben:** <i class="timecode">[00:25:42]</i> There we go!

**Alex:** <i class="timecode">[00:25:43]</i> So yeah, call it anything kind of, like, camelcase. So "TestimonialSection" is kind of the pattern that we're using.

**Ben:** <i class="timecode">[00:25:49]</i> Cool.

**Alex:** <i class="timecode">[00:25:50]</i> Perfect.

**Ben:** <i class="timecode">[00:25:50]</i> And then just "slices"?

**Alex:** <i class="timecode">[00:25:52]</i> Yep, yeah. So the nice thing about it is that you can reuse libraries across projects—

**Ben:** <i class="timecode">[00:25:59]</i> Ohhh!

**Alex:** <i class="timecode">[00:26:00]</i> —and so that's why it's asking you for your target library, so that you can bring it with you from project to project and not start from scratch every time.

**Ben:** <i class="timecode">[00:26:08]</i> Ah, okay!

**Alex:** <i class="timecode">[00:26:09]</i> So that's the nice thing, and eventually, you know, like, being able to be like, "Hey, Ben, I've got this awesome library of slices. Do you want to start with these?," and being able to share them and just kind of keep your own — the way that you might have, like, your own boilerplate of an Eleventy setup or something, right? Like, "Oh, I know this setup. This is what suits my purposes. I'm going to use this over and over and kind of start from there."

You can go ahead and hit Save. That's perfect.

**Ben:** <i class="timecode">[00:26:39]</i> Cool.

**Alex:** <i class="timecode">[00:26:40]</i> Sorry to keep you waiting…

**Ben:** <i class="timecode">[00:26:41]</i> No, you're good.

**Alex:** <i class="timecode">[00:26:41]</i> …through my monologue. 

**Ben:** <i class="timecode">[00:26:43]</i> No, you're good. So it seems like a great mixture between, like, a CMS and design system almost. Like, you almost have, like, a component library there. 

**Alex:** <i class="timecode">[00:26:54]</i> Yeah. Yeah, and that's, like, why we want that tight coupling with Storybook. So Storybook does a couple of things for us. It allows us to see mocks quickly and, like, give you that great developer experience.

**Ben:** <i class="timecode">[00:27:06]</i> Okay.

**Alex:** <i class="timecode">[00:27:07]</i> But it also gives you what you're seeing there in that window with, like, the transparent background. That's a snapshot that Storybook just took.

**Ben:** <i class="timecode">[00:27:14]</i> Oh! Okay.

**Alex:** <i class="timecode">[00:27:15]</i> And so, like, clearly there's not a whole lot there. If you go over to Storybook in the last tab, you should have a TestimonialSection.

**Ben:** <i class="timecode">[00:27:23]</i> Yep.

**Alex:** <i class="timecode">[00:27:23]</i> At the bottom. Yeah, so we just have some default — it does, like, not lorem ipsum, but some other ipsum, right?

**Ben:** <i class="timecode">[00:27:32]</i> Sure.

**Alex:** <i class="timecode">[00:27:32]</i> So you can see, like, "Reintermediate 24/7 action items." It's like business ipsum or something. 

**Ben:** <i class="timecode">[00:27:38]</i> I've definitely, definitely seen this, like, from my business partners, you know, in an email or something like that.

**Alex:** <i class="timecode">[00:27:44]</i> Yeah. Oh, that's like, yeah, verbatim a thing that they asked you to do. 

**Ben:** <i class="timecode">[00:27:47]</i> "We need to optimize our business intelligence to, like, accelerate the synergy of the top performers."

**Alex:** <i class="timecode">[00:27:54]</i> Synergy.

**Ben:** <i class="timecode">[00:27:54]</i> Synergy!

**Alex:** <i class="timecode">[00:27:54]</i> Yeah, no, synergy's important and we all need more of it. 100%, I think, is the daily recommended dose of synergy.

**Ben:** <i class="timecode">[00:28:01]</i> Yes.

**Alex:** <i class="timecode">[00:28:02]</i> I think that might have been vitamin C. I'm sorry. I'm confused. <i class="brackets">[laughs]</i>

Cool. So, yeah, so what we just did. When we hit Save, we created… Actually, you can hop back into VS Code—

**Ben:** <i class="timecode">[00:28:17]</i> Oh, yeah!

**Alex:** <i class="timecode">[00:28:17]</i> —and we can see what was actually generated.

**Ben:** <i class="timecode">[00:28:21]</i> Whoa!

**Alex:** <i class="timecode">[00:28:21]</i> Because it generated some code for us, just to kind of make it a bit quicker. So it generated… yeah. Yeah. Cool. So it created just kind of a basic React component.

**Ben:** <i class="timecode">[00:28:32]</i> Alright, alright.

**Alex:** <i class="timecode">[00:28:33]</i> It created the model.json based on the data that's just the boilerplate.

**Ben:** <i class="timecode">[00:28:39]</i> Sure.

**Alex:** <i class="timecode">[00:28:39]</i> And we're going to change that in a second. And then, we don't have to dig into it but, like, it's kind of tucked away up in a folder, but it also created a Storybook file for us. Yeah, yep, exactly there.

**Ben:** <i class="timecode">[00:28:52]</i> Okay.

**Alex:** <i class="timecode">[00:28:53]</i> Yeah, so in assets.

**Ben:** <i class="timecode">[00:28:55]</i> Ah.

**Alex:** <i class="timecode">[00:28:55]</i> And then slices, TestimonialSlice. Yep.

**Ben:** <i class="timecode">[00:28:58]</i> Nice!

**Alex:** <i class="timecode">[00:28:58]</i> And so it tucked it in the default-slice, 'cause we can have variation on this. And it created some mock data and a Storybook file all for us.

**Ben:** <i class="timecode">[00:29:09]</i> Cool!

**Alex:** <i class="timecode">[00:29:09]</i> And so it's just a nice way to kind of get up and going and not have to worry about the boilerplate, right? Like, it's trying to make this as smooth as possible, and honestly? Once you get this up and running, the momentum you can get with, like, cranking out slices, it's… I'm not just saying this because I work at Prismic. I really, truly enjoy the speed at which you just, like, make progress with building these out. So let's make some progress!

**Ben:** <i class="timecode">[00:29:36]</i> Yes!

**Alex:** <i class="timecode">[00:29:36]</i> Let's head over to… yep. Yeah, right here. So those are the title and description, things that come as the default. We can hit the three dots and delete them both.

**Ben:** <i class="timecode">[00:29:49]</i> Okay.

**Alex:** <i class="timecode">[00:29:51]</i> Just get rid of them. It's kind of like… I don't know if you've ever used Blender, but you always go in and you just wipe the scene.

**Ben:** <i class="timecode">[00:29:56]</i> Yes.

**Alex:** <i class="timecode">[00:29:56]</i> It's just like, there's a default cube and the first step in every tutorial: "Delete the cube."

**Ben:** <i class="timecode">[00:30:01]</i> "Thank you for this cube. I am done with it."

**Alex:** <i class="timecode">[00:30:03]</i> Exactly. It's just what you do.

And I sent you — and I can send them again — I sent you, like, an image of a wireframe. Maybe I should prepare that a *little* better than just DM-ing it to you, but I'm happy to…

**Ben:** <i class="timecode">[00:30:17]</i> Let me pull it up.

**Alex:** <i class="timecode">[00:30:20]</i> Copy… Can we copy a link? Uh, yeah. Do you want me to drop it on you? Do you have, like, a second screen?

**Ben:** <i class="timecode">[00:30:26]</i> Yeah, there we go.

**Alex:** <i class="timecode">[00:30:27]</i> Perfect. There we go.  

**Ben:** <i class="timecode">[00:30:31]</i> So we got the testimonial itself, like the quote. We've got, I see we've got the attribution. There's going to be an image. And then maybe also a brand, it seems like, too?

**Alex:** <i class="timecode">[00:30:43]</i> Yeah, we could do that. So I'm getting this from my friend Matt Pringle over at Digital Surgeons. His wireframe kit is great. It's called the Elliette kit. And so, I don't have a link ready, but I get a lot of my wireframes, like, for stuff like this from his awesome kit. I'll send it to you later and you can maybe put it in the description or something, I don't know.

But that's the thought. So, I can kind of tell you what things we need for that. Basically, so we're going to need an image, so you can go ahead and hit Add New Field. Yep.

**Ben:** <i class="timecode">[00:31:18]</i> Okay.

**Alex:** <i class="timecode">[00:31:19]</i> We're going to put this in the non-repeatable zone. Nothing here is going to be repeatable. That's kinda like if you wanna do a grid of logos, right?

**Ben:** <i class="timecode">[00:31:28]</i> Oh, okay!

**Alex:** <i class="timecode">[00:31:29]</i> You would put it in the repeatable zone, and you would choose Image, and then you could do, like, you know, uh, "People love our jelly," and, you know, have all these logos of companies that have bought your jelly.

**Ben:** <i class="timecode">[00:31:40]</i> Yes.

**Alex:** <i class="timecode">[00:31:41]</i> Like, the classic logo grid for the jelly entrepreneur.

**Ben:** <i class="timecode">[00:31:44]</i> Yes.

**Alex:** <i class="timecode">[00:31:45]</i> So if you go ahead and hit Image.

**Ben:** <i class="timecode">[00:31:47]</i> Makes sense.

**Alex:** <i class="timecode">[00:31:48]</i> And then just "image" works. 'Cause, like, we're not going to have a lot of different images, so that's fine, right? And so that just added that to our… like, we're building out our data model with this UI, right?

**Ben:** <i class="timecode">[00:32:02]</i> Mm.

**Alex:** <i class="timecode">[00:32:03]</i> And now — let me go back and see — we need the actual, like, the quote. So I think, yeah, if you could add a new field and we can just do a Key Text at the bottom. I kind of prefer those just with the way that the React component works. If you just go "quote," I think that's fine. 

**Ben:** <i class="timecode">[00:32:19]</i> What's the difference between the key text and the rich text?

**Alex:** <i class="timecode">[00:32:23]</i> The rich text? Yeah, so the rich text is… it gives you more freedom to do, like, bold and italics and things like that and also, like, you can decide how you want it to be, whether it's an `<h1>`, or it's only a paragraph, or it's an `<h2>`, `<h3>`. Just for the sake of, like, kind of locking it in, and also not having to worry about turning that object — because it comes back as JSON, you have to run it through the RichText component. For this, we'll just kind of take the easy way out and go with what's just going to come back as a string.

**Ben:** <i class="timecode">[00:32:58]</i> Cool.

**Alex:** <i class="timecode">[00:32:59]</i> Cool. And then, yeah, just the name, right? So another key text field for "name," I think would be fine.

**Ben:** <i class="timecode">[00:33:05]</i> Yep. "attributionName."

**Alex:** <i class="timecode">[00:33:09]</i> Perfect, that's even better. 

**Ben:** <i class="timecode">[00:33:10]</i> That's not how you spell "attribution." There we go. 

**Alex:** <i class="timecode">[00:33:12]</i> A-T-T-R-I-B-U-T-I-O-N. Yep, that looks good.

**Ben:** <i class="timecode">[00:33:15]</i> Cool. attributionName.

**Alex:** <i class="timecode">[00:33:17]</i> And then we can do… Do you want to do the logo? Or we can just hold off on that.

**Ben:** <i class="timecode">[00:33:22]</i> I think we can hold off on that probably.

**Alex:** <i class="timecode">[00:33:24]</i> Alright, cool. So, one thing that we're going to want to do — and like I said, this is still, like, the… so this is an alpha build, and so there's always going to be, like, small, rough UI things. We just have to go back into each of these by hitting the edit button and add a label.

**Ben:** <i class="timecode">[00:33:40]</i> Okay.

**Alex:** <i class="timecode">[00:33:40]</i> It's just a small thing that we have a fix coming for. Just "Image." Just, like, capital-I Image. But it's quite inconvenience now. 

**Ben:** <i class="timecode">[00:33:51]</i> What is that label I just set? Like, what is this doing for us? 

**Alex:** <i class="timecode">[00:33:56]</i> So, actually, great question. So if you hit Save here —

**Ben:** <i class="timecode">[00:34:01]</i> Yep.

**Alex:** <i class="timecode">[00:34:02]</i> —I can actually show you. And then if you hit "Save model to filesystem" at the top right. You can see. And it did take another snapshot, but we didn't change anything about the way that our React component looks, so that didn't really change all that much.

**Ben:** <i class="timecode">[00:34:18]</i> Cool.

**Alex:** <i class="timecode">[00:34:19]</i> But now we've got this TestimonialSection, and just to show you, to answer your question, let's go over to Custom Types.

**Ben:** <i class="timecode">[00:34:25]</i> Okay.

**Alex:** <i class="timecode">[00:34:26]</i> Up at the top right. And we're not gonna edit the blog, but we're going to edit the page. The blog post is just empty.

**Ben:** <i class="timecode">[00:34:32]</i> Ah.

**Alex:** <i class="timecode">[00:34:32]</i> It was just to kind of create a second type.

Now, this is the place where you can say, you know, "I want to give my editors a Page type that they can go and build anything with" or "I want to give them a Blog Post type where they can build with, like, a subset of all the components," right? 'Cause, like, in a blog post, you might not want to give the editor the ability to, in the middle of that blog post, put a hero section or a contact us or an FAQ, right? Like, you as the developer, we want to give you the control to say, "These are the components for this type." And so you could even create a Contact custom type, where the only thing that they can choose for that page is the contact form. You know? Certain pages call for those different components.

**Ben:** <i class="timecode">[00:35:26]</i> Yeah.

**Alex:** <i class="timecode">[00:35:26]</i> So what we're going to do is we're going to add that component that we just made to the available group here. So if you hit "Edit slices" right there.

**Ben:** <i class="timecode">[00:35:34]</i> Cool.

**Alex:** <i class="timecode">[00:35:35]</i> Perfect. You see that TestimonialSection is not checked. We can hit Save. Perfect. And then if you scroll to the top, you're going to save this to filesystem. And what that does is that that edits the JSON file for this custom type—

**Ben:** <i class="timecode">[00:35:51]</i> Okay.

**Alex:** <i class="timecode">[00:35:51]</i> —on our local machine. And now we need to push that file up to Prismic, and that's going to take a second. Ah, we need to log in.

**Ben:** <i class="timecode">[00:36:02]</i> Okay.

**Alex:** <i class="timecode">[00:36:03]</i> I saw this coming, but I forgot about it. So, yeah, you might want to switch screen or something.

Yeah. So it's, yeah, it's `prismic login` is just the command.

**Ben:** <i class="timecode">[00:36:14]</i> I got y'all confused with the database. Okay. Yeah, so let me pull this up. 

**Alex:** <i class="timecode">[00:36:21]</i> Oh, Prisma, got it.

**Ben:** <i class="timecode">[00:36:22]</i> Yeah. Yeah, let me pull this off so I can privately log in 'cause everything is done via password manager. In the meantime, how are things going?

**Alex:** <i class="timecode">[00:36:40]</i> I'm so scared, Ben. No, no, no. This is super fun!

But, so just to kind of explain, we just… we take security very seriously, so we make it so that that token expires after a day, just to make sure that you are logged in. We're working on making that so that maybe you can open a window and click the login button or do something that's just a little bit more seamless in the workflow there. But that's why you're logging in.

But yeah, so basically once we push to Prismic, we're going to go into the UI and just kind of see what we've got going on, and we will see where that label exactly is showing up, because you as the developer for your editors can just — you know, *you* have to give them the information so that they can make right decisions, right?

**Ben:** <i class="timecode">[00:37:38]</i> Mhmm.

**Alex:** <i class="timecode">[00:37:39]</i> Took ten seconds. That's fascinating. Thank you for the time. That's also a lot of time. 

**Ben:** <i class="timecode">[00:37:45]</i> Well, I mean, cause I was—

<i class="brackets">[crosstalk]</i> 

**Alex:** <i class="timecode">[00:37:49]</i> I thought it was just funny that it gave you that feedback. 

**Ben:** <i class="timecode">[00:37:53]</i> So that's not Prismic. That's my prompt. I'm using Starship.

**Alex:** <i class="timecode">[00:37:58]</i> Oh, okay! Got it. I was just surprised that, like, I don't remember itdoing that and it, like, giving you feedback. Okay, cool. 

**Ben:** <i class="timecode">[00:38:05]</i> "It took you ten seconds to log in. Congratulations. Beat your time!"

**Alex:** <i class="timecode">[00:38:08]</i> Yeah, and then we rank you. Yeah, you can earn badges if you want.

<i class="brackets">[Alex laughs]</i>

**Ben:** <i class="timecode">[00:38:13]</i> I'm going to beat my high score at logging in. 

**Alex:** <i class="timecode">[00:38:16]</i> Yeah, right?

**Ben:** <i class="timecode">[00:38:16]</i> Okay, so I've logged in.

**Alex:** <i class="timecode">[00:38:18]</i> Yeah. Yeah, so if you push that "Push to Prismic" button one more time.

**Ben:** <i class="timecode">[00:38:22]</i> Alright. You got it! Matt, thank you for putting that in the chat.

**Alex:** <i class="timecode">[00:38:26]</i> Interesting. I have not heard of that. Maybe I… I don't think I have.

Cool, so let's push it up, and it's just going to change the shape of our custom types up on Prismic. And once again, this is great because the way it used to be is that you have to do it all on Prismic and you don't get the same level of, like, version-controlling it with Git, right?

**Ben:** <i class="timecode">[00:38:50]</i> Yes.

**Alex:** <i class="timecode">[00:38:51]</i> Like, you're still able to go back with the way that you can do it in the browser on prismic.io. But with version control, I mean, I don't think I need to sell you or the audience on the benefits of Git, right?

**Ben:** <i class="timecode">[00:39:04]</i> Yeah.

**Alex:** <i class="timecode">[00:39:05]</i> But that's cool. Yeah, interesting, it's taken a little bit of time with that. I wouldn't click it twice. But I think it took a bit of time to spin up. I think it might be related to the processor thing that we were seeing earlier. I don't know.

**Ben:** <i class="timecode">[00:39:20]</i> Oh, there we go.

**Alex:** <i class="timecode">[00:39:21]</i> Okay, "Synced with Prismic. Model was correctly saved." Awesome. So if we go to Prismic…

**Ben:** <i class="timecode">[00:39:27]</i> Youuu got it.

**Alex:** <i class="timecode">[00:39:29]</i> And if we're on the homepage… Yes, so if you refresh, we should see our testimonial with… So yeah, so now if you hit the plus button when it loads up. 

**Ben:** <i class="timecode">[00:39:44]</i> There we go. So hit this little boi. 

**Alex:** <i class="timecode">[00:39:46]</i> Yeah.

**Ben:** <i class="timecode">[00:39:47]</i> And then I should—

**Alex:** <i class="timecode">[00:39:48]</i> Don't — chat, don't clip that out of context, alright?

**Ben:** <i class="timecode">[00:39:51]</i> Oh, god! Alex, no!

**Alex:** <i class="timecode">[00:39:55]</i> I'm telling them no to the chat! Chat, unh-uh! Don't do it.

Um, yeah, so TestimonialSection. You see, first off, that the snapshot, 'cause we haven't changed the React code, wasn't all that, whatever, right? And then we have two things labeled "Text" and "Text."

**Ben:** <i class="timecode">[00:40:11]</i> Oh, okay.

**Alex:** <i class="timecode">[00:40:11]</i> We didn't pass it a label, right?

**Ben:** <i class="timecode">[00:40:14]</i> Aahhh.

**Alex:** <i class="timecode">[00:40:14]</i> So, yeah, so what I was going to say for the image, we should probably grab someone's face. I can work on getting that off a lot of Unsplash. But if you want to go back into Slice Machine and fill out labels for that, I can get us some images of people.

**Ben:** <i class="timecode">[00:40:30]</i> Cool, sounds good.

**Alex:** <i class="timecode">[00:40:31]</i> Or of a person, just one person. We're not gonna do a ton of testimonials here, just a testimonial. And I'm wondering if chat gave us a really great testimonial yet. I'll have to check in a little bit. Person. Getting a person from Unsplash, trying not to get the same person that everyone gets.

Okay. What's a good way to drop this to you? Is Discord a good way? 

**Ben:** <i class="timecode">[00:41:07]</i> Uh, it could be. I mean, are you able to just, like, log into Prismic and add it yourself, or should I—? 

**Alex:** <i class="timecode">[00:41:13]</i> That's a great point! I have access to this, don't I?

**Ben:** <i class="timecode">[00:41:17]</i> Yep.

**Alex:** <i class="timecode">[00:41:17]</i> I'm an adult. Alright, so… Yeah, I can definitely do that. Let's go to home. I'm going to go in, and let me just check where you're at. Cool, so I can do that. Yeah, yeah, I'll do that while you're pushing that up. I'm going to add it. Gonna bring this back up. 

**Ben:** <i class="timecode">[00:41:36]</i> My poor machine right now. I don't want to try to upload images or anything like that. 

**Alex:** <i class="timecode">[00:41:40]</i> No, I totally hear ya.

**Ben:** <i class="timecode">[00:41:44]</i> Used to be, like, this thing was, like, perfect for this. And it's not an old computer. I've had it for not even a year now.

**Alex:** <i class="timecode">[00:41:50]</i> Okay!

**Ben:** <i class="timecode">[00:41:51]</i> But, yeah. I feel like it might've been when I updated to Big Sur and it's like, "No. No."

**Alex:** <i class="timecode">[00:41:56]</i> Is it an M1?

**Ben:** <i class="timecode">[00:41:58]</i> No, it's not.

**Alex:** <i class="timecode">[00:42:00]</i> Okay, just curious.

Alright, so the first thing was the quote. "Wow, this is great." Put that up there for now. And, I don't know, I'll just put Lorem Ipsum for the name, because I'm not creative.

Alright, cool. So I think Publish, Publish it now. Great. I am back. I've put an image in there. If you hit refresh here—

**Ben:** <i class="timecode">[00:42:21]</i> Okay.

**Alex:** <i class="timecode">[00:42:22]</i> —should just see an image, but we can wait on that bit. It's fine.

So let's keep going. We wanna… We created a slice, but we need to build it out with some quick CSS and JavaScript bits. So I've added it down— There you go.

**Ben:** <i class="timecode">[00:42:38]</i> Oh, okay.

**Alex:** <i class="timecode">[00:42:38]</i> So I put an image in, "Wow, this is great," Lorem Ipsum.

So let's go back to our Slice Machine instance, if we hit the Slice Machine bit. Cool. And right there, there's a white button that says "Show Code Widgets."

**Ben:** <i class="timecode">[00:42:52]</i> Interesting.

**Alex:** <i class="timecode">[00:42:53]</i> I love this because this gives us, like, these snippets where, like, I don't have to go in and console log out anything and then figure out like, "Alright, what is…?"

**Ben:** <i class="timecode">[00:43:03]</i> Yes.

**Alex:** <i class="timecode">[00:43:05]</i> "What's the thing for that," right?

**Ben:** <i class="timecode">[00:43:06]</i> Mhmm.

**Alex:** <i class="timecode">[00:43:07]</i> It's all right there. So if you hit Copy on the image. There you go. And we can go back to our code. We can load up that TestimonialSection. Yeah, the JavaScript. Yep, perfect. So you can pretty much gut everything inside the `<section>` tag.

**Ben:** <i class="timecode">[00:43:23]</i> Cool.

**Alex:** <i class="timecode">[00:43:25]</i> That `<section>` element.

**Ben:** <i class="timecode">[00:43:29]</i> Do I leave the…? Oh, I'll leave the `<style>` element.

**Alex:** <i class="timecode">[00:43:30]</i> No, we can gut it all, yeah.

**Ben:** <i class="timecode">[00:43:31]</i> Gut it all!

**Alex:** <i class="timecode">[00:43:33]</i> Yeah. We're not gonna use the `<style>` tag.

**Ben:** <i class="timecode">[00:43:35]</i> Cool.

**Alex:** <i class="timecode">[00:43:36]</i> 'Cause it's just not the way that we're going to style it.

So if you pop that image in there. Cool. Yeah, so Next will yell at you because Next really wants you to use the `<Image>` tag.

**Ben:** <i class="timecode">[00:43:50]</i> Ohh.

**Alex:** <i class="timecode">[00:43:50]</i> But for now, it should at least load. So if we press Save here…

**Ben:** <i class="timecode">[00:43:56]</i> And then go back to not Opera. God, Opera, why? I clicked Opera by muscle memory. 

**Alex:** <i class="timecode">[00:44:04]</i> That's amazing.

**Ben:** <i class="timecode">[00:44:07]</i> Yeah, the curse of the, like, return of Opera. Like, "How dare you close me, Ben??"

**Alex:** <i class="timecode">[00:44:13]</i> <i class="brackets">[chuckles]</i> If you go to Storybook at the end, 'cause it's not in our page yet, I don't think.

**Ben:** <i class="timecode">[00:44:19]</i> I see. Oh!

**Alex:** <i class="timecode">[00:44:21]</i> Yeah, so testimonials — So we've got an image, right?

**Ben:** <i class="timecode">[00:44:23]</i> Mhmm.

**Alex:** <i class="timecode">[00:44:24]</i> So that's coming in. And with Next Image and also in Slice Machine, we can specify the size of it, but just for time's sake, I'm just going to keep kind of trucking along. So if you want to go back to Slice Machine and grab the next snippet-o'-code.

**Ben:** <i class="timecode">[00:44:40]</i> Okay.

**Alex:** <i class="timecode">[00:44:40]</i> We can grab that quote. And what do you think we should put the quote in for an element?

**Ben:** <i class="timecode">[00:44:44]</i> Uh, `<blockquote>`.

**Alex:** <i class="timecode">[00:44:44]</i> I'm going to defer to you.

**Ben:** <i class="timecode">[00:44:45]</i> It's a `<blockquote>`.

**Alex:** <i class="timecode">[00:44:47]</i> Awesome. 

**Ben:** <i class="timecode">[00:44:48]</i> It's a `<blockquote>`, and then probably inside here, we can make the actual quote a… Oh, I see it's adding it to a `<span>`. Just going to remove that `<span>`.

**Alex:** <i class="timecode">[00:45:00]</i> Yeah, absolutely. I remove that all the time. It just tries to help. 

**Ben:** <i class="timecode">[00:45:06]</i> And then probably… I know the next one is just going to be… I think this is the syntax for this. So anyways, slice.primary.attributionName.

**Alex:** <i class="timecode">[00:45:19]</i> It's attributionName. Cool.

**Ben:** <i class="timecode">[00:45:21]</i> And I think there's, like, mixed feelings in the, like, web dev, like, in the, like, web specs world about, like, "Can you put a `<cite>` inside a `<blockquote>`?" I do. I do. 

**Alex:** <i class="timecode">[00:45:31]</i> Alright, it's settled. Web dev community, listen up.

**Ben:** <i class="timecode">[00:45:34]</i> Yeah!

**Alex:** <i class="timecode">[00:45:35]</i> We're putting them inside now. That's what it is. That's what we're doing. So, I'm on board.

Cool, so if you hit Save, you can go back to Storybook and just make sure that that's loading. It's not going to look good, but it's going to be there! There we go. So once again, we've just got the mock data in there. So it doesn't know that it's supposed to be a name or anything. It's just putting in strings, right?

**Ben:** <i class="timecode">[00:45:58]</i> Yep.

**Alex:** <i class="timecode">[00:45:59]</i> So from this, we can — we've got about 15 minutes. Just wanna make sure we're not going over. We can at least put this into, like, a two-column layout, right?

**Ben:** <i class="timecode">[00:46:12]</i> Okay! Let's do it.

**Alex:** <i class="timecode">[00:46:13]</i> So, if we go to our code.

**Ben:** <i class="timecode">[00:46:18]</i> Our code, okay.

**Alex:** <i class="timecode">[00:46:19]</i> Yeah. I've got Tailwind on this. So if you go to the `<section>` and add className to the `<section>`. We need a classname, and we can do "grid." Love me some grid. And what we can do is if you hit space, "grid-cols" — c-o-l-s — and then "-1." And then what we're going to do — So that's going to be the fallback for mobile, and then we're going to do space, "md" for medium and up, colon.

**Ben:** <i class="timecode">[00:46:54]</i> Colon.

**Alex:** <i class="timecode">[00:46:55]</i> I know I'm throwing a lot at you right now.

**Ben:** <i class="timecode">[00:46:56]</i> Of course.

**Alex:** <i class="timecode">[00:46:57]</i> We don't have time to walk through the intricacies of Tailwind, so I'm just going to kind of say characters at you. I apologize.

So, for medium browsers and up, we're going to go "grid-cols-2" — grid, c-o-l-s, hyphen, 2.

**Ben:** <i class="timecode">[00:47:11]</i> Alright.

**Alex:** <i class="timecode">[00:47:11]</i> Same thing, just two columns. So, if you hit — Oh, and… no, that should work well, because you've got the blockquote as one thing. Yeah, so hit Save, and let's check that out in Storybook.

**Ben:** <i class="timecode">[00:47:24]</i> Okay.

**Alex:** <i class="timecode">[00:47:24]</i> Here we go! So we're on our way, right? This is not great, but we've got a two-column layout that goes to one. 

**Ben:** <i class="timecode">[00:47:32]</i> Yep. We would presumably add a whole lot more, like, typography and margins and stuff like that, but… 

**Alex:** <i class="timecode">[00:47:38]</i> Yep, and we still can, but maybe… Let's double back to it if we get through some of the other stuff, 'cause I think we've got some other cool stuff that we can get to.

**Ben:** <i class="timecode">[00:47:50]</i> Yes.

**Alex:** <i class="timecode">[00:47:50]</i> Yeah, yeah, so let's do that. So, let's go to Slice Machine. So now that we've created this slice, right, so this slice exists. Oh! We already did add it to our page. So we created a slice, and then we said "I want this slice to be available to the page type." So—

**Ben:** <i class="timecode">[00:48:12]</i> Yes.

**Alex:** <i class="timecode">[00:48:13]</i> That should be good. Actually if, yeah, if you go to our localhost, we should have that. If we refresh, it should show up in all of its unstyled glory.

**Ben:** <i class="timecode">[00:48:24]</i> Mhmm. There we go!

**Alex:** <i class="timecode">[00:48:26]</i> And there it is. So it's a huge image because we didn't put any kind of bounds on it, right?

**Ben:** <i class="timecode">[00:48:31]</i> Yeah.

**Alex:** <i class="timecode">[00:48:31]</i> Like, I copied it from Unsplash. Famously big images. We pasted it in. It's large. And I think the only thing that's limiting it is the width of your screen. You see, it's taking up full, right? So, like, I think it can just keep going. So we could fix that in a few different ways. I don't know if that's as fun or important as kind of moving forward. But if you go to Slice Machine super quick…

**Ben:** <i class="timecode">[00:48:57]</i> Yep.

**Alex:** <i class="timecode">[00:48:58]</i> No pressure. I'm not trying to tell you you have to move super quick. But if you hit the Edit on the Image type—

**Ben:** <i class="timecode">[00:49:05]</i> Okay!

**Alex:** <i class="timecode">[00:49:07]</i> You see their responsive view. So there, we kind of give you control to set different sizes and then you can query them in, like, a srcset.

**Ben:** <i class="timecode">[00:49:17]</i> Oh, okay!

**Alex:** <i class="timecode">[00:49:18]</i> So we've got that built in with Prismic. One of my favorite parts about Prismic is that when you upload an image to Prismic, you're actually leaning on the imgix CDN, which if you're familiar with imgix or services like Cloudinary, same sort of thing where you can tack on query parameters and say, like, "I want it to crop to a face, and I want it to round it, and I want it to be a sepia tone, and I want it…," so, like, just from putting it into Prismic, you don't have to go and worry about, "Oh, I want to host my images in Cloudinary but manage them over here in my CMS." We handle both. That's imgix under the hood. So it's super, super handy, and yeah, and you get to avoid things like spending a lot of time with Gatsby compiling all your images down because you can instead do it with query params with the imgix CDN—

**Ben:** <i class="timecode">[00:50:18]</i> Nice!

**Alex:** <i class="timecode">[00:50:19]</i> —or with their service. So just something to be aware of. What we would do if we had more time, go through and set up different responsive views. And you can do some art direction there, too—

**Ben:** <i class="timecode">[00:50:29]</i> Okay!

**Alex:** <i class="timecode">[00:50:30]</i> —where on wide screens, I want it to be tall and thin, but on phones, I want it to be short, right?

**Ben:** <i class="timecode">[00:50:37]</i> Yes.

**Alex:** <i class="timecode">[00:50:37]</i> And wide. It's totally up to you. You can set it there.

**Ben:** <i class="timecode">[00:50:40]</i> Nice!

**Alex:** <i class="timecode">[00:50:41]</i> But we can come out of that. I just wanted to point that out and that there's a great solution there.

**Ben:** <i class="timecode">[00:50:46]</i> Very cool. Thank you!

**Alex:** <i class="timecode">[00:50:47]</i> Yeah. Yeah, yeah, yeah! That's what I'm here for, Ben! I appreciate you having me!

Um, cool. So real quick, let's actually pretend that, hey, if we put three of those testimonials in a row, it's gonna look kind of bad, 'cause it's just, like, image, image, image. Let's create a variation of this slice.

**Ben:** <i class="timecode">[00:51:06]</i> Yes.

**Alex:** <i class="timecode">[00:51:07]</i> So if you see it at the top there, it says "Default slice" in a dropdown, right? So you can click "Add new variation," and we can just call this, like, "Image on Right" or whatever you want to call it, but that's just kind of going to be the essence of it, right?

**Ben:** <i class="timecode">[00:51:23]</i> Okay.

**Alex:** <i class="timecode">[00:51:24]</i> "Image on Right." And it's going to create a variation ID for us, and that's kind of the flow that we're looking for with the labels. But duplicate from default slice. So, you see that, like, where you can make multiple variations and you can imagine, like, a content slice that has, you know, image in background, image on top, on left, top, bottom, top right. Like, we are giving you, the developer, the power to not have to make a million slices, but to make, you know, a few slices that have the combinations that your editors want.

**Ben:** <i class="timecode">[00:51:58]</i> Okay.

**Alex:** <i class="timecode">[00:51:58]</i> So, yeah, we're going to clone from the default slice, but it's going to take that data from there, the shape of the data from there.

**Ben:** <i class="timecode">[00:52:05]</i> So if I duplicate from default slice, and then later, down the road, I update default slice, do those changes propagate to the, like, descendant slices? 

**Alex:** <i class="timecode">[00:52:15]</i> I don't think so, no.

**Ben:** <i class="timecode">[00:52:16]</i> Okay.

**Alex:** <i class="timecode">[00:52:16]</i> No, that's going to… no, they will deviate.

**Ben:** <i class="timecode">[00:52:20]</i> Cool, so this is a hard, hard fork.

**Alex:** <i class="timecode">[00:52:24]</i> Yep, yeah, exactly.

**Ben:** <i class="timecode">[00:52:25]</i> Cool.

**Alex:** <i class="timecode">[00:52:26]</i> Cool. And this is the same that, like… we could, say, make a variant with a button and then we could add that here. But for this purpose, we're just going to change more of it in the code.

**Ben:** <i class="timecode">[00:52:40]</i> Okay.

**Alex:** <i class="timecode">[00:52:41]</i> Or, like we said, we could add the logo to this one, right? Like, "Thing with Logo." But you might just do that a different way. But anyway, "Save model to filesystem" at the top right.

**Ben:** <i class="timecode">[00:52:52]</i> Cool.

**Alex:** <i class="timecode">[00:52:52]</i> And that just updates that JSON file that we saw before.

**Ben:** <i class="timecode">[00:52:55]</i> Mhmm.

**Alex:** <i class="timecode">[00:52:56]</i> And…

**Ben:** <i class="timecode">[00:52:58]</i> It's thinking about it.

**Alex:** <i class="timecode">[00:53:00]</i> You can do it. You can do it! 

**Ben:** <i class="timecode">[00:53:02]</i> I need Jason Lengstorf's li'l "Come on little compooper" overlay.

**Alex:** <i class="timecode">[00:53:07]</i> Yeah! Yeah, and the—

Oh, and we saw Storybook took a picture of it right there. 

**Ben:** <i class="timecode">[00:53:13]</i> Yeah!

**Alex:** <i class="timecode">[00:53:14]</i> Right?

**Ben:** <i class="timecode">[00:53:14]</i> Nice!

**Alex:** <i class="timecode">[00:53:15]</i> So that's really helpful, so that editors can be like, "Ah, that's the one I want. I don't know what it's called, but I know that one," right? So if you head to the code…

**Ben:** <i class="timecode">[00:53:24]</i> Yep!

**Alex:** <i class="timecode">[00:53:24]</i> We can just kind of do however you would do it with React in the sense of… if you were passed a prop into your `<Button>` component or something that said, like, you know, this one's going to be dark or light or secondary, or this one comes with an icon, right? Like, however you would handle that, we can handle that here.

So in the `<blockquote>`… let's put a className on `<blockquote>`. We're just going to do it this way.

**Ben:** <i class="timecode">[00:53:57]</i> Okay!

**Alex:** <i class="timecode">[00:53:57]</i> I'm just going to add a CSS `order` property to it.

**Ben:** <i class="timecode">[00:54:00]</i> Aah, okay.

**Alex:** <i class="timecode">[00:54:02]</i> So if you do className, but instead of quotes, we're going to do brackets and we're going to do a template literal. And so we can — yeah, you can do the dollar sign brack— Oh, you know what? No, no, no, because we don't have anything else on there, we don't even need to go into all that. You can just do the brackets, yeah. So you can do slice, dot, and I think it's variation. Let me check my code. I have a variation on the hero, I think. Let me just check that real quick. Oh, I'm in the wrong repo. One second. Sorry about that. Some Antics, hero section, index. I think it's — Yeah, it's variation. So slice.variation is going to come back. So slice.variation, we're going to do a ternary. So it's going to be slice.variation equal to — or a triple equals, right?

**Ben:** <i class="timecode">[00:54:52]</i> Okay.

**Alex:** <i class="timecode">[00:54:54]</i> And I think we did "imageOnRight," camelcase. Was that the ID? Image…? 

**Ben:** <i class="timecode">[00:55:00]</i> I can type, I promise.

Yeah, alright! So this is clicking. And so then we would have an order here, if it is on right we would have an order, and then otherwise we might just have the empty string. 

**Alex:** <i class="timecode">[00:55:13]</i> Yeah, so, yeah, so we can do, like, an order 0. That's going to bring it to the front, right. Am I getting that right?

**Ben:** <i class="timecode">[00:55:19]</i> I think so.

**Alex:** <i class="timecode">[00:55:20]</i> If it's not, we can put, like, an order 2 on the image.

**Ben:** <i class="timecode">[00:55:24]</i> In Tailwind, is it order-0?

**Alex:** <i class="timecode">[00:55:25]</i> order-0, yeah, that should do it.

**Ben:** <i class="timecode">[00:55:27]</i> Okay.

**Alex:** <i class="timecode">[00:55:27]</i> Look at you, picking up Tailwind!

**Ben:** <i class="timecode">[00:55:29]</i> Look at that!

**Alex:** <i class="timecode">[00:55:29]</i> So quick! 

**Ben:** <i class="timecode">[00:55:31]</i> You can teach an old… you can lead an old Frontend Horse to the water, but you can't make an old Frontend Horse… learn to drink… or whatever it is.

**Alex:** <i class="timecode">[00:55:42]</i> I think that was perfect. I think that was.

**Ben:** <i class="timecode">[00:55:44]</i> I think I nailed it.

**Alex:** <i class="timecode">[00:55:46]</i> Yeah, that's *the* classic saying.

So yeah, if you hit Save there, we can test it because Storybook, when we created that variant, we got a new story. So if you check out Storybook over on the far right…

**Ben:** <i class="timecode">[00:55:59]</i> Yup.

**Alex:** <i class="timecode">[00:55:59]</i> We'll see TestimonialSection now has two — and I'm wrong, or something went wrong there. Let's instead add that code to the image, that it's order 2. I'm not sure if order 0 is a thing. Actually, can we check first, is "imageOnRight" actually what we called it?

**Ben:** <i class="timecode">[00:56:21]</i> I believe so.

**Alex:** <i class="timecode">[00:56:22]</i> That might be it. "imageOnRight." Yes, okay. Okay, cool. Just making sure, because I was going off memory for that.

Yeah, so let's just go back real quick. Put className… yeah, put that whole bit on the image and instead put that to order 2. It's just a quick way. I'm pretty sure that that should go in. Does that work in grid? Am I conflating that? Is that just a flex thing? 

**Ben:** <i class="timecode">[00:56:52]</i> It might be a flex thing. Grid… grid, it's like… grid… Here, let me. 

**Alex:** <i class="timecode">[00:56:57]</i> Yeah, yeah. I'm thinking… 

**Ben:** <i class="timecode">[00:57:00]</i> God, Opera's open again!

**Alex:** <i class="timecode">[00:57:02]</i> Cascading stylesheets… Flex or grid. It should work, right? No, no. It should be good. Oh, order-1 was what I was going for, but let's just keep with what we've got. 

**Ben:** <i class="timecode">[00:57:14]</i> Okay.

**Alex:** <i class="timecode">[00:57:15]</i> Yeah, 'cause the initial value is 0, so we should have went -1, but this is fine. So do order-1. There you go.

**Ben:** <i class="timecode">[00:57:22]</i> *1* on the image?

**Alex:** <i class="timecode">[00:57:23]</i> Or 2. Let's just be safe. Let's just overshoot it for the sake of the stream.

**Ben:** <i class="timecode">[00:57:27]</i> Yeah!

**Alex:** <i class="timecode">[00:57:28]</i> Kids, don't try this at home. 

**Ben:** <i class="timecode">[00:57:30]</i> We promise we are professionals. Ah, look at that! It did it for us. Okay. 

**Alex:** <i class="timecode">[00:57:34]</i> Cool, so if you go back to the default slice, you can see that we — in Storybook. It's fine — the original shouldn't be changed, right?

**Ben:** <i class="timecode">[00:57:42]</i> Riiight.

**Alex:** <i class="timecode">[00:57:43]</i> There we go! Cool. So just with that, we're essentially just passing that as a prop back to your slice and you're able to do whatever you want with it, right? So you can style to your heart's content, change it to a dark mode, light mode, whatever you want to do…

**Ben:** <i class="timecode">[00:57:57]</i> Yeah.

**Alex:** <i class="timecode">[00:57:57]</i> …with just that variation. And you can change the data and get a different set of data in.

Cool. So if we push all this up to Prismic, if you go back to Slice Machine, our little local builder, and make sure that that's pushed up, it's going to go ahead and take snapshots, not just of your first one, or not just of your default slice, but also of the Image on Right. So if we go back to prismic.io — I know we're doing a lot of jumping. It could be a little confusing, chat. Like, I totally  understand that we're hopping back and forth a lot.

**Ben:** <i class="timecode">[00:58:35]</i> Mhmm.

**Alex:** <i class="timecode">[00:58:35]</i> I promise that that does get a bit more… you find your footing after a little bit with this workflow and it's really nice.

Did you hit refresh?

**Ben:** <i class="timecode">[00:58:45]</i> I will hit refresh.

Cool. And as a developer, yeah, you're going to be hopping into prismic.io to confirm that everything looks right and it's usable but mainly, this Prismic interface is for the content editors, right?

**Alex:** <i class="timecode">[00:58:59]</i> Yeah. Yep, yep.

So if you head to the testimonial. Cool, and if you go to that "Switch variations…"

**Ben:** <i class="timecode">[00:59:07]</i> Aha!

**Alex:** <i class="timecode">[00:59:08]</i> …you should see, and yep. And so if you hit Save there, and then Publish on our localhost. Oh, oh, actually,  actually, ooh, did you hit Publish already?

**Ben:** <i class="timecode">[00:59:17]</i> Not yet!

**Alex:** <i class="timecode">[00:59:18]</i> Oh, so hit that eye on the right. That's preview mode, and hit "Local."

**Ben:** <i class="timecode">[00:59:25]</i> Ooooh.

**Alex:** <i class="timecode">[00:59:25]</i> That's gonna open up a preview mode—

**Ben:** <i class="timecode">[00:59:27]</i> Okay!

**Alex:** <i class="timecode">[00:59:27]</i> —in that local environment. And if everything goes to plan, crossing fingers — yes, it seems like it did.

**Ben:** <i class="timecode">[00:59:34]</i> Nice!

**Alex:** <i class="timecode">[00:59:35]</i> If you scroll down, the image is on the right. And so you see at the bottom, there's that "Exit Preview" button there. And so if you click that, it'll go back. It'll exit the preview if all goes according to plan. 

**Ben:** <i class="timecode">[00:59:47]</i> I adore that that borrowed the button styles. 

**Alex:** <i class="timecode">[00:59:50]</i> I hooked you up, Ben. I love your buttons, so I had to put that in there. And if you scroll back down, now that we've exited preview and we didn't publish that change, we're back to the… what the live site sees, right? 

**Ben:** <i class="timecode">[01:00:05]</i> This is production and not… yeah, okay. 

**Alex:** <i class="timecode">[01:00:07]</i> Essentially, right? Yeah, so by first checking it out… We are shipping that preview feature on the Jamstack and allowing your editors to kind of get that same thing that they're used to if they have WordPress or Wix or whatever. So you're shipping a page builder that gives them that same user experience on the editor side without having to buy into a monolithic… just into the monolith that would be Wix or Squarespace or something like that where you, as the developer, don't get to write those components in the framework that you know is best for the end user…

**Ben:** <i class="timecode">[01:00:46]</i> Yeah.

**Alex:** <i class="timecode">[01:00:46]</i> …or the framework that you are most comfortable with, or that you know will deliver the Lighthouse scores and the page speed that is good for the end user.

**Ben:** <i class="timecode">[01:00:58]</i> Yes.

**Alex:** <i class="timecode">[01:00:58]</i> So this is kind of that best of both worlds where editors love it, 'cause they can go in and create a new page. We're out of time. I don't wanna keep people for too long. But we could right now create a brand new page. Say, you know, we — I'm stuttering so hard, I'm sorry — we have an about page that we have already created. We could create a — I dunno, what's another page? — a "fun facts about me" page, right? And then we can go in, use that hero section, use this testimonial, use all these things and continue to build out, like having a set of LEGOs, I think someone said in the chat, and continue to build with that.

I see Ed — and Lucie is taking that question. Yeah, so "we're working on a way to ease the integration." So, but Ed, Slice Machine with Eleventy, not yet. But slices with Eleventy, yes.

**Ben:** <i class="timecode">[01:01:55]</i> Oooh.

**Alex:** <i class="timecode">[01:01:55]</i> So the concept of "you've built this component and your editors can drag-and-drop it and reuse it, remix it," that is for anything. I mean, if you think about it, it's just a request, right?

**Ben:** <i class="timecode">[01:02:08]</i> Yeah.

**Alex:** <i class="timecode">[01:02:09]</i> Like, you're just hitting an API. After that, whatever you want to do with it, you can do with it. So it's that same thing of, like, running it through a loop and rendering it out into Eleventy. I think Lucie actually even created a Eleventy-and-Prismic library, some helper functions that allow you not to use Slice Machine but to use Prismic and slices in Eleventy. So some of the cool things that we saw here, like Storybook and the snapshots, stuff like that, isn't yet available with Eleventy, but, you know, we're working on it and you can still get the benefit of shipping a page builder on the Jamstack with Eleventy and Prismic, so. 

**Ben:** <i class="timecode">[01:02:51]</i> Okay. And I know that the question was also in part about other tech as well, right? Not just Eleventy. But I'm wondering if the new Eleventy Serverless stuff it's going to make it a lot easier for y'all to integrate with Eleventy like that. Like, integrate Slice Machine in particular. 

**Alex:** <i class="timecode">[01:03:07]</i> Yeah, and I'm not sure. I saw you and Zach working with that.

**Ben:** <i class="timecode">[01:03:11]</i> Yeah.

**Alex:** <i class="timecode">[01:03:11]</i> That was awesome. I'm super excited about it though. I'm excited to get into Eleventy, and I know that Lucie is also.

**Ben:** <i class="timecode">[01:03:19]</i> Ayyy!

**Alex:** <i class="timecode">[01:03:21]</i> "11ty Serverless will allow previews to work." Yeah, exactly. That's gonna definitely help out with a lot of those features. So it's an exciting time!

And we didn't get a fully styled component, but I think we saw kind of the power that Slice Machine can bring us with local, version-controlled data models, being able to push up a snapshot, have Storybook integrated so seamlessly, creating stories for our variations, we have that preview mode. Like, I think we touched on a good amount within the hour, so. 

**Ben:** <i class="timecode">[01:03:51]</i> For sure, for sure. Well, thank you. I guess, what is one thing you're most excited about for Prismic in the future? 

**Alex:** <i class="timecode">[01:03:59]</i> Ooh, for Prismic in the future, besides all the stuff that we just touched on? That is tough to say.

Sure!

Yeah, honestly, ooh. That is a good question, Ben, just besides the fact that… I just gushed about all this stuff that I'm excited about. I'm excited for Slice Machine to come to frameworks like Gatsby. I love Gatsby, personally. A lot of my sites are in Gatsby. Also love Next, and Eleventy is something that really interests me. Like, I'm excited for this to… Oh, oh, we are — Lucie, correct me in the chat if I'm wrong — but, like, Slice Machine is coming to Svelte, if it's not already kind of available. 'Cause basically, it's a code generator under the hood, right? Like, it's creating those templates. It's creating those Storybook stories with a nice UI that makes it really easy to work with Storybook and push to Prismic. It just makes things a lot smoother. And so underneath, it's generating those components and facilitating that exchange between Storybook, Prismic, and your framework of choice. So, it coming to Gatsby, I'm super excited about. It kind of just permeating the way that the developer experience with Prismic improves. I'm excited about kind of the whole flow. I know that's a cop-out answer, but I'm sticking with it.

**Ben:** <i class="timecode">[01:05:26]</i> Hey, for sure! I dig it!

Well, Alex, thank you so much for hopping on. I'm going to put your Twitch in the chat again, because I'm also super enjoying everything you're doing. What is your next stream going to be? 

**Alex:** <i class="timecode">[01:05:41]</i> Next stream? If not today, if I have any energy, maybe in a couple of hours, But definitely Tuesday. Wednesday is the one that I'm excited about. Zach Saucier, good friend, great developer. He used to be the developer relations person of GreenSock, so he knows, like, GreenSock in and out. He's the person that I go to to ask, like, "Hey, this tricky thing in GreenSock, how do I do it?" And he will throw the demo to me that he made last year. He is a fantastic developer. He's coming on to do some, I think it's PixiJS. It's basically some image particle distortion stuff. I'm super excited for it.

**Ben:** <i class="timecode">[01:06:26]</i> Nice!

**Alex:** <i class="timecode">[01:06:26]</i> He's just awesome. And we've got great guests every Wednesday, this whole month. And every Wednesday, right?

**Ben:** <i class="timecode">[01:06:31]</i> Yeah!

**Alex:** <i class="timecode">[01:06:32]</i> Yeah. Check us out. Component Carousel on Wednesdays.

Thank you for everyone for coming out. It was a great chat. 

**Ben:** <i class="timecode">[01:06:41]</i> Thank you all for being here. This has been excellent. Thank you for coming out to More Antics, I suppose. I think a rebrand is in the works, perhaps. I will speak to my lawyers. But yeah, thank you all for coming out. I wasn't joking earlier when I said that Chance Strickland is coming on next Tuesday. If you're unfamiliar, he does a lot of great accessibility working for Reach UI.

**Alex:** <i class="timecode">[01:07:08]</i> Cool.

**Ben:** <i class="timecode">[01:07:08]</i> Which is a super fantastic accessible component library that's designed to be super composable. And we're going to be hopping into some of the latest and greatest in… I don't know if you saw the WWDC announcement about stuff coming in macOS Monterey and specifically Safari 15. We're going to take a look at a preview of that, assuming my poor little compooper can handle it! So it's going to be good. That's next Tuesday, 12 PM Central.

And yeah, with that, I think we can call this stream a success, Alex, thank you one more time for hopping on. This has been a ton of fun. 

**Alex:** <i class="timecode">[01:07:42]</i> Ben, I'm honored to be here. This was great. Thank you so much. 

**Ben:** <i class="timecode">[01:07:46]</i> Have a good one, y'all! Bye. 

**Alex:** <i class="timecode">[01:07:48]</i> Take care.