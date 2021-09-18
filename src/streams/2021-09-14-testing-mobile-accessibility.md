---
title: Testing Mobile Accessibility with Crystal Preston-Watson
thumbnailTitle: Testing Mobile Accessibility
hosts:
  - Ben Myers
  - Crystal Preston-Watson
upload: https://youtu.be/GA5VBmHvaSg
---

We might be solid on testing our sites' accessibility in our desktop browsers — but how often do we test for mobile accessibility? Join us on Some Antics as [Crystal Preston-Watson](https://twitter.com/ScopicEngineer) introduces us to mobile accessibility testing!
---
## More From Crystal

- [Follow Crystal on Twitter!](https://twitter.com/ScopicEngineer)
- [Watch talks Crystal has given!](https://crystalprestonwatson.com/talks.html)
- [The Attack on Titan meme](https://www.youtube.com/watch?v=7VB5vc9SVf8)
- [The Tekken meme](https://twitter.com/ScopicEngineer/status/1431729558915538945)
- [Accessibility Savvy: Getting Started with Android Studio for Mobile Accessibility Testing](https://www.youtube.com/watch?v=e7V6e0Ry3QM)
- [It's Always Sunny in Mobile Accessibility](https://www.youtube.com/watch?v=JN5a8-CHyoc)
- [Inclusive Design 24](https://inclusivedesign24.org/2021/schedule/)
- [See Crystal at Denver Startup Week](https://www.denverstartupweek.org/schedule/7359-how-to-pitch-accessibility)

## Transcript

<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! It's Tuesday, which means it's time for another Some Antics. Today, I am joined by the one and only Crystal Preston-Watson. Crystal, how's it going?

<i class="timecode">[00:00:09]</i> **Crystal:** Hey, Ben. It's going good! Thank you for having me on here.

<i class="timecode">[00:00:14]</i> **Ben:** I'm super excited to have you on. We've actually just been chatting about our cats. Pre-show, we were chatting about, both of us have cats who are prone to barging into closed office doors at any moment. So you might see Tuna. You might see some of Crystal's cats. But we can only hope, right?

<i class="timecode">[00:00:35]</i> **Crystal:** Yes.

<i class="timecode">[00:00:35]</i> **Ben:** So, Crystal, welcome to the show! For folks who don't know who you are, would you care to give yourself an introduction? 

<i class="timecode">[00:00:41]</i> **Crystal:** Yes! So I'm Crystal Preston-Watson and I am a quality and accessibility engineer. Currently I work at Salesforce.org, where I do that accessibility and quality engineering for supporting accessibility for Nonprofit Cloud, Education Cloud, and Philanthropy Cloud there! Yeah, so that's my main job. And some people know me from social media as someone who likes to meme. <i class="brackets">[laughs]</i> So it's a duality of work. And I do a lot of talks about accessibility, and some videos when I feel like it. 

<i class="timecode">[00:01:28]</i> **Ben:** So what is the best accessibility meme you've shared recently on the socials? 

<i class="timecode">[00:01:35]</i> **Crystal:** I think a lot of people would say it was the Attack on Titan, and I really love that one. But I would also say it was the Tekken one that I did.

<i class="timecode">[00:01:49]</i> **Ben:** Okay.

<i class="timecode">[00:01:50]</i> **Crystal:** That didn't get enough love, I feel, because, you know, maybe it was just, you know, doomed, you know. It was, like, it was one of the end scenes for Tekken, and I used it to talk about teams who—

<i class="timecode">[00:02:05]</i> **Ben:** Mhmm.

<i class="timecode">[00:02:06]</i> **Crystal:** —do accessibility sprints, but then they ship out <i class="brackets">[laughs]</i> things that are not actually that accessible! So I loved it. But yeah, Attack on Titan and, you know, the Tekken. Those are my two favorite ones so far. 

<i class="timecode">[00:02:21]</i> **Ben:** Good deal! So today we're going to be doing testing mobile accessibility. What is your background with that? 

<i class="timecode">[00:02:28]</i> **Crystal:** Yeah! So, I started with accessibility about… yeah, 2015, 2016, first getting into as a QA getting a random ticket. But then when I decided, I was like, "Accessibility is something I really want to do," I actually ended up joining a company — as some people may know, Aetna — as a QA. And there, I wasn't really actually supposed to be doing accessibility outright, but then that kind of ended up being my main role. And so I pretty much focused on native applications — iOS, Android, you know, applications — and testing them for accessibility.

<i class="timecode">[00:03:22]</i> **Ben:** Alright! So my background has been, you know, largely with desktop web accessibility, so one of the things I'm really curious about is, is mobile accessibility all that different from desktop web accessibility? 

<i class="timecode">[00:03:34]</i> **Crystal:** It's not. So you do, you know, especially — I always… Is it WCAG…? It's WCAG. So you still need to make sure, you know, especially, that, you know, things do meet WCAG guidelines,you know, especially when it comes to color contrast, and, you know, making sure you have programmable labels and things. So there's a lot that are shared between desktop accessibility and mobile accessibility.

<i class="timecode">[00:04:05]</i> **Ben:** Okay.

<i class="timecode">[00:04:06]</i> **Crystal:** But when it comes to mobile accessibility, I mean, especially when you get into native applications, you are dealing with things like, you know, one thing that you can't do with the desktop — well, I guess you can — is your orientation of the screen, changing that.

<i class="timecode">[00:04:25]</i> **Ben:** Mmm!

<i class="timecode">[00:04:27]</i> **Crystal:** Making sure — Like, one thing is that, you know, adding peripherals onto a desktop computer is usually not a huge issue. Like, you know, if that peripheral says work with macOS, work with Windows, or whatever, you know, you're usually good to go to kind of plug and play. That can be an issue especially with mobile accessibility, because a lot of people don't really think about that. They're like, "Well, you have the device and that's it." And there are a lot of people, you know, with disabilities that having an external peripheral is necessary, like a braille keyboard—

<i class="timecode">[00:05:16]</i> **Ben:** Mhmm.

<i class="timecode">[00:05:17]</i> **Crystal:** — you know, even just a external keyboard anyway. Like, my husband, you know, when he uses his iPad, he more than likely will attach a keyboard to it because that is the, you know, the way.

<i class="timecode">[00:05:34]</i> **Ben:** Mmm!

<i class="timecode">[00:05:34]</i> **Crystal:** And so that also kind of shows it's not just stuff for, you know, people with disabilities, but just a preference of, you know, of users in general. So thinking of things about that, so there's a lot that, you know, overlaps, but there's also special considerations.

And then just, you know, the fact that you, like with anything, you have, you know, operating systems. You have Android, you have iOS. You have the kind of, you know, quirks and things that go, you know, in tune. Which is again, same for desktop because you have macOS, you have, you know, like, Windows, and there's quirks and things like that as well.

<i class="timecode">[00:06:09]</i> **Ben:** Mhmm. What are some of those quirks and differences between Android and iOS? Like, I assume you can't just, like, test one operating system and call it a day. 

<i class="timecode">[00:06:18]</i> **Crystal:** No, you definitely can't. And so usually, if you're just testing mobile web — and when I say "mobile web," that's the, you know, kind of in-browser, like, you know, you have Safari or Chrome and you pull up a site on there. You know, a lot of that's going to be the same, you know, no matter if it's iOS or Android. But then there are problems with the actual native applications because, one, you're developing in different languages. You know, iOS is going to be Swift. Android is… what is it? I always forget! It's Java or… is it Kotlin?

<i class="timecode">[00:06:58]</i> **Ben:** I think it's Kotlin, right?

<i class="timecode">[00:07:00]</i> **Crystal:** Yeah, Kotlin. I always forget!

And so, just in that — and for some reason I'm, like, forgetting, like, you know. There are differences and I'm, you know — Sometimes I've felt like hamburger menus between iOS and Android are sometimes handled differently. I've come up where I've been testing, you know, two native applications. In iOS, the hamburger menu, you know, the three lines—

<i class="timecode">[00:07:32]</i> **Ben:** Mhmm.

<i class="timecode">[00:07:33]</i> **Crystal:** You know, it states that, you know, it's a menu that you could go into it. And in Android, it's just, you know, it's like "JavaScript control!" <i class="brackets">[laughs]</i> And having to figure out "Okay, why is it doing that?," you know, and things like that. So there's some differences. It really, you know — not getting too in the weeds that, yeah, there are some. And also I think some of those differences come about that people seem more comfortable with iOS application development—

<i class="timecode">[00:08:08]</i> **Ben:** Okay.

<i class="timecode">[00:08:09]</i> **Crystal:** —versus Android. And especially in, you know — don't get too comfortable with that. Especially when it comes to accessibility, there seems to be more focus on iOS—

<i class="timecode">[00:08:20]</i> **Ben:** Mmm!

<i class="timecode">[00:08:21]</i> **Crystal:** —than Android, which does cause issues, especially when you're looking for the accessibility of applications. That's why there seems to be like… iOS applications seems to be way far, you know, beyond, like advanced when it comes to accessibility than Android applications. And there's a lot into there, which I don't want to go too deep into that.

<i class="timecode">[00:08:46]</i> **Ben:** Sure!

<i class="timecode">[00:08:47]</i> **Crystal:** Yeah, we'll be here all day and I don't wanna… <i class="brackets">[chuckles]</i> That's not what we're here for. 

<i class="timecode">[00:08:53]</i> **Ben:** Mhmm. Speaking of what we're here for, I think that now's a good time to start diving into this!

<i class="timecode">[00:08:57]</i> **Crystal:** Yes!

<i class="timecode">[00:08:57]</i> **Ben:** So I am now sharing your screen. We are looking at this "Welcome to Xcode" dialog. 

<i class="timecode">[00:09:04]</i> **Crystal:** Yeah! So, we're doing this. I could've, you know, hooked up my own iPhone, but that's my work phone, so I was definitely not going to do that! So… <i class="brackets">[laughs]</i> So here, we are going to look at and, you know, we're going to test the Amazon mobile website using the simulator through Xcode. You know, I have a video coming out on how— that gets more into this detail later this week. But I just wanted to kind of show people now how to go into this. So, yeah. And this is great for… I mean, a lot of people don't have, you know, a company, especially at startups, you don't have the money to get all these different devices, like actual devices.

<i class="timecode">[00:10:04]</i> **Ben:** Mhmm.

<i class="timecode">[00:10:05]</i> **Crystal:** So, to open up the simulator, you go to "Xcode," then you go up to "Open Developer Tools." And then just go to "Simulator." And that is going to just pop up the simulator I have. Can you see it? 

<i class="timecode">[00:10:25]</i> **Ben:** Yes.

<i class="timecode">[00:10:26]</i> **Crystal:** Okay, and does it tell you — 'cause I'm like, "This little bar is in my way for Zoom!" 

<i class="timecode">[00:10:32]</i> **Ben:** Oh, no! Yeah, it does say it's an iPhone 12 Pro Max.

<i class="timecode">[00:10:38]</i> **Crystal:** Okay, good! <i class="brackets">[laughs]</i>

<i class="timecode">[00:10:39]</i> **Ben:** We see that loud and clear, yep!

<i class="timecode">[00:10:41]</i> **Crystal:** Yes. And I just want to say, you can change which device you're using. So if you go into… See if I can remember. <i class="brackets">[laughs] I'm like, "What am I doing?"

So, if you wanted to add a different, you know, like, older, like, say an older iOS version, you actually would go back to Xcode, and then you would go into "Preferences," and then "Components." And that will allow you to add some older, like, iOS versions. Just beware, these things can take up, like — I don't know. I always tell people "Do not download every single one unless you have a lot of space." [laughs] I have seen that before and it does not turn out good.

[both chuckle]</i>

So I just wanted to point that out.

So, yeah, so we're simulating an iPhone 12 Pro Max, iOS 14.5. And so, like I said, we're going to go into Amazon, which I already have. 

<i class="timecode">[00:12:00]</i> **Ben:** Nice!

<i class="timecode">[00:12:01]</i> **Crystal:** And so now, we're actually going to open up the… Accessibility Inspector! So let me… get this out of the way. And then here we will…

Okay. Cool, okay! <i class="brackets">[laughs]</i>

So, this is something I tend to use, and it's very valuable when it comes to, you know, testing applications for accessibility on iOS. Now this is really for testing native applications, but when you're using the simulator, you actually can't download through the App Store, like, apps. Like, we have to have the application that you're, you know — through, like, usually like through TestFlight — you know, downloaded onto your computer and then onto the simulator. But I have used this before just where I'm testing a mobile website as well, but there's going to be some things that you won't get to use, and I'll go through that a little bit as I kind of go through this, as we go through the app, or the page, together.

So, yeah! So let's start. There is, with the accessibility simulator, you have the inspection tool where you can kind of go through everything, you know, kind of like, you know, as if you want. Like, you can, you know, kind of zero in on particular elements that you want to look at. So right here, I'm on the Amazon logo. And it will tell you some basic things. Again, since this is not a native application, there's going to be just some things, you know, there's going to be some things that—

<i class="timecode">[00:14:13]</i> **Ben:** Mhmm.

<i class="timecode">[00:14:13]</i> **Crystal:** —one, that won't pop up, and that's usually kind of down here. Oh, actually, we did get some stuff with this! I was surprised. So, sometimes if you're using the inspector on a mobile web application that's, like, not yours, you won't get some of this information that you would get with a native application. But you do! And this is, you know, again, a lot of this is for the, you know… It's, you know, focused towards developers—

<i class="timecode">[00:14:46]</i> **Ben:** Okay.

<i class="timecode">[00:14:46]</i> **Crystal:** —as they're kind of the… But I tend to like to use it, just to kind of, you know, see, like, what's going on with, you know… The more information — that's kind of how I test — the more information, the better.

And I think I've been a little ahead of myself, 'cause I just jumped in when it comes to… <i class="brackets">[chuckles]</i> I'm like, "Here you go!" And that's one of the things, 'cause I'm kind of, you know, I'm in my zone.

<i class="timecode">[00:15:11]</i> **Ben:** Mhmm.

<i class="timecode">[00:15:12]</i> **Crystal:** But when it comes to testing mobile, for mobile accessibility, then, you know, I'll kind of go through how I start before just… 

<i class="timecode">[00:15:25]</i> **Ben:** Mhmm.

<i class="timecode">[00:15:25]</i> **Crystal:** …and then we'll jump back into it. And mainly, you know, I do like to, you know… I really do think it's important and I really stress having actual devices. This, you know, having a simulator or emulator is fine, but there are just some things that you can't replicate, and that is the user experience.

<i class="timecode">[00:15:50]</i> **Ben:** Mhmm.

<i class="timecode">[00:15:50]</i> **Crystal:** And that is using gestures and, you know, things like that, and also actually adding peripherals onto the device and seeing how that works. You know, I've found issues where, you know, there is — Like, one of the things you have to be mindful with is target size. You know, like the size of buttons and things like that. And whereas it may seem like — and for the most part, you can have some automated tools that will tell you and give you, you know, some, you know, warnings about maybe the target size is too small. We can see that there's an audit tool for the Accessibility Inspector that will kind of do that. But sometimes, you can't, and that's one of the things why you can't trust automated, just completely depend on it, because sometimes, it's not about the size. It's actually about the location.

<i class="timecode">[00:16:42]</i> **Ben:** Mm!

<i class="timecode">[00:16:43]</i> **Crystal:** And I've had that happen where I am, you know — where the gesture is, you know — trying the gesture, and it's the placement, and so things are getting in the way. I call it, you know, baby-fingering it. Baby-fingering, because I, like, I have, you know, where I'm trying to, like, move things around the screen and, you know, it's not working.

<i class="timecode">[00:17:08]</i> **Ben:** Mhmm.

<i class="timecode">[00:17:08]</i> **Crystal:** So, you know, I definitely stress, you know, real devices when we can. Also, you know, especially when it comes to using the screenreaders — so, you know, VoiceOver for iOS, Talkback for Android — that also makes a difference. But with the Accessibility Inspector, you actually can, you know, have it speak what—

<i class="timecode">[00:17:38]</i> **Ben:** Oooh!

<i class="timecode">[00:17:38]</i> **Crystal:** —have it announce what VoiceOver does. I don't know if you'll be able to actually hear it. But let me — I think it will come up on the screen.

<i class="timecode">[00:17:48]</i> **Ben:** Let's try it!

<i class="timecode">[00:17:49]</i> **Crystal:** So, yeah, I don't…

So it is announcing, but I think it's only announcing to me.

<i class="timecode">[00:17:58]</i> **Ben:** Okay.

<i class="timecode">[00:17:58]</i> **Crystal:** But what it says is "Open Menu, button."

<i class="timecode">[00:18:01]</i> **Ben:** Mm!

<i class="timecode">[00:18:02]</i> **Crystal:** And that's — so, 'cause sometimes, that doesn't match up, where you have it where, you know, VoiceOver or the screenreader will announce something else. And so, yeah. So, you know, that's a thing that definitely, you know, comes up a lot with, you know, with screenreaders, that, you know, you have to make sure that it's announcing what you want it to announce.

So… yeah, so let's go — I know I'm going to kind of teaching to the tool, but I just wanted to make sure that, you know, since this is up on the screen, that, you know, everyone knows that, you know, what is this for and what it's doing.

<i class="timecode">[00:18:44]</i> **Ben:** Yeah!

<i class="timecode">[00:18:44]</i> **Crystal:** Okay.

So mainly when I come into first an application — and certainly, you know, I use Amazon all the time — but I tend to kind of play around with it, like, you know, if I'm doing some kind of exploratory testing, if I don't have any sort of, you know, kind of, you know, like, list or kind of, you know, actual user case or some kind of test that I need to run, definitely. And that's because I feel that by having that freedom, just as someone who uses, you know, accessibility settings and tools, that's kind of, you know… I'll surf, you know, like I'm surfing the internet. So, I sound so old. But that's kind of like what — I'll go to a new site, and I'm just kind of, you know, playing around with it, and I discover a lot of accessibility issues. It's usually way more frustrating because, you know, personally, I'm just going to a site expecting it to work and it doesn't.

<i class="timecode">[00:19:48]</i> **Ben:** Mhmm.

<i class="timecode">[00:19:49]</i> **Crystal:** So this, you know, I would just kind of come in and then just start to navigate. 

<i class="timecode">[00:19:58]</i> **Ben:** So, you're doing the things that you as a user would just straight up expect to be able to do.

<i class="timecode">[00:20:03]</i> **Crystal:** Yes, exactly. Yeah, because that's kind of, you know, I mean, that's what this is for. I know there,… especially when it comes to testing, when it comes to, you know, you know, auditing and whatever, you know, you have specific objectives a lot of times. But overall, the one thing that you really do need is that it is about your customers and your users, and you really do — And I know I'm only one person. I have kind of, you know, biases, and, you know, particularly, my impairments are different from other people. But I'm still, you know, at the end of the day, a user or customer. So, you know, that's kind of going off my experience and then going from there about "Okay, well, I had this particular issue, but what about someone else who, you know, had, you know, like, maybe this?," and kind of going from there.

So, yeah! So actually, I think if you want to give me some, like, things you want to see, 'cause I think I'm, you know, I feel like I'm being a little bit chaotic. Am I?

<i class="timecode">[00:21:10]</i> **Ben:** Yeah, so, I mean, this is just generally how you're approaching it, right, is like, as you know, a user who wants to do user-y things, right? Like, I think there's, like, two different paths you can take with quality assurance. There's like, "I am what I would expect is just a normal user doing normal user things. Like, I want to go buy a product." And then there's, like, the other path that's like, "I'm going to do all of the weirdest stuff I can do, right? Find the absolute edge cases and figure out, like, what the edges of the experience are." I think both approaches are necessary for QA, but especially if you haven't been given that kind of direction of, like, "Here's a particular flow," going at this, as you as a user would is, I think, very valuable.

So let's say maybe the flow — We're talking about Amazon here. Maybe we want to, like, buy a product or something like that. Like, that is what you use Amazon for. So maybe that's a flow that you could walk us through how you would test? 

<i class="timecode">[00:22:07]</i> **Crystal:** Yeah! So for me, like… Now, since I don't have, like, you know… One of the things that I usually do is turn on the screenreader, but since we're not doing an actual device and since we wouldn't have been able to hear the audio announcements, what I would do is really start looking to, like, color contrast, hit targets…

So one thing that we can do is say, "Okay, let's say we want to buy a Fire Stick." And so this is, you know, the page for the Fire Stick. With this, and you know, one of the things I do with the Accessibility is run an audit on the… Again, it's going to kind of pick out some of kind of the, I think, easier finds—

<i class="timecode">[00:23:00]</i> **Ben:** Okay.

<i class="timecode">[00:23:01]</i> **Crystal:** —for me, and that's a good way for me to kind of go from there. So right now I just have it going.

<i class="timecode">[00:23:08]</i> **Ben:** Ooh.

<i class="timecode">[00:23:09]</i> **Crystal:** Yeah, so these are all the, you know, kind of things that the Accessibility Inspector says "This is something that may want to come to your attention." So if I collapse the first item…

So it's saying with this particular content, "Contrast failed for the element. The text contrast ratio is 1.06. This is based…"

And so again, that's a good, you know, a good pickup, a good, you know, something that, you know… Because it's one of those things of, I know that my computer, I have… because I actually have high contrast on—

<i class="timecode">[00:23:50]</i> **Ben:** Mmm!

<i class="timecode">[00:23:50]</i> **Crystal:** —on my computer right now, so, actually, I can see it. And that's one of those things I also have to account for, is that when I'm doing some of this testing, especially if I'm doing a simulator, that I have my own accessibility settings on—

<i class="timecode">[00:24:08]</i> **Ben:** Oh, yeah.

<i class="timecode">[00:24:09]</i> **Crystal:** —and that could potentially impact. So this is one of those things of, like, you know, well, I didn't realize that, but that's also because I have, you know, high contrast on, so it's helped me to see some of these elements a little bit better.

<i class="timecode">[00:24:23]</i> **Ben:** Mhmm.

<i class="timecode">[00:24:24]</i> **Crystal:** And then, you know, from here, like, it will, you know—

<i class="timecode">[00:24:28]</i> **Ben:** Ohh!

<i class="timecode">[00:24:28]</i> **Crystal:** —go and start picking through things. You know, this one's kind of, you know… and some of these things are obvious, you know, especially as you get, you know, more kind of… as you pick up more kind of, you know, experience with, like, this type of testing of like, yeah, you can kind of tell off the bat. For me, I know with my visual impairments, a lot of times it's very easy to pick up if something is, you know, fails color contrast, because I can't see it or I could barely see it.

<i class="timecode">[00:25:00]</i> **Ben:** Mhmm.

<i class="timecode">[00:25:01]</i> **Crystal:** But yeah, so with this — and I kind of, you know, on my own phone, I know a lot of this stuff anyway.

So yeah, more… kind of more issues with color contrast again.

<i class="timecode">[00:25:17]</i> **Ben:** Sure.

<i class="timecode">[00:25:18]</i> **Crystal:** And the thing is, is that you can't completely rely on this. This is something that you definitely want to go and check because some of, you know, some of these tools are, they're great but they are not to take the place of actual, you know, manual testing and kind of going in, you know. So for me, with this, I would go in and dig into, like, the code to make sure that, you know, that it's actually correct, because sometimes I've had it where it's actually not correct, so I want to make sure that, you know, what, you know, the inspector is telling me is actually true. 

<i class="timecode">[00:25:54]</i> **Ben:** Yeah! 'Cause, like, a 1.01:1 ratio, like, that's… like, no one would do that intentionally, right? Like, yeah, there there's bad color contrast out there, but this looks like someone was intentionally trying to hide a thing, or maybe the auto tool, like, flagged it incorrectly or something like that. Like, they meant to hide it.

<i class="timecode">[00:26:16]</i> **Crystal:** Yeah.

<i class="timecode">[00:26:17]</i> **Ben:** Yeah. 

<i class="timecode">[00:26:18]</i> **Crystal:** And so some of this is also that it's — and this is what I'm thinking on the contrast — it doesn't scroll. 

<i class="timecode">[00:26:27]</i> **Ben:** Oh, interesting!

<i class="timecode">[00:26:29]</i> **Crystal:** Yeah, so that's one of the things, again, one of those little quirks of using this for mobile web instead of a native application, that, you know, you're not going to get the full effect of this. So it wasn't scrolling this. Let me… So, again, it's still, you know, it's a great tool, but there are some parts, like, when you use it for off-label use.

<i class="timecode">[00:26:53]</i> **Ben:** Yeah!

<i class="timecode">[00:26:55]</i> **Crystal:** Let's get into some other stuff. Okay.

So, "Element has no description." And so it does show you right here, like, the screenshot or capture of what it's talking about. This, again, this is why it's also… you know, automated tools, you have to use, you know, in conjunction. Because I don't think this would need it, this particular, you know… This is something, I'm trying to figure out where that is actually on the screen. It may not be, you know, so I'm like this might not actually need it. 

<i class="timecode">[00:27:41]</i> **Ben:** Is that just the whole page??

<i class="timecode">[00:27:44]</i> **Crystal:** Yeah, it is!

<i class="timecode">[00:27:46]</i> **Ben:** Wait, wait, wait! "This SimulatorKit.SimDisplayRenderableView is missing useful accessibility information." This is just saying that the simulator's not accessible!

<i class="timecode">[00:27:58]</i> **Crystal:** Yes, it is. 

<i class="timecode">[00:27:59]</i> **Ben:** Come on, Apple!

<i class="brackets">[Crystal laughs]</i>

Okay.

<i class="timecode">[00:28:12]</i> **Crystal:** So, let's go back. So, I just wanted to show that. That's a good, you know — and something that I instruct a lot of people on with kind of automated testing tools, is that a good workflow to have is to use those tools—

<i class="timecode">[00:28:31]</i> **Ben:** Mhmm.

<i class="timecode">[00:28:33]</i> **Crystal:** —like, to run those tools and get, like, you know, a good list of what, you know, some of the issues they are advising that you change, and then from there, use that as a jumping off point, especially for those who are new to accessibility and accessibility testing. So they can kind of, you know—

<i class="timecode">[00:28:51]</i> **Ben:** Mhmm.

<i class="timecode">[00:28:51]</i> **Crystal:** —use it to, like, allow them to kind of find those initial, kind of, you know, big, you know, kind of, like, pretty glaring issues, and then from there, let that take you on two different paths of, like, one, verify, is that actually correct?

<i class="timecode">[00:29:07]</i> **Ben:** Mhmm.

<i class="timecode">[00:29:09]</i> **Crystal:** Or is it, you know, or is it actually not an issue? If it is, then from there, you know, going in. A lot of times, you know, different tools, not this one, they'll actually tell you other things to look for.

<i class="timecode">[00:29:24]</i> **Ben:** Yeah!

<i class="timecode">[00:29:25]</i> **Crystal:** Like Lighthouse on Chrome, in Chrome DevTools. Also Axe, if you're running that extension, you know, the browser extension, will give you advice on like, "Well, we found these, but you should also check for other, different things." 

<i class="timecode">[00:29:43]</i> **Ben:** That, now that I'm thinking about that, like, that really, your approach of, like, "let the automatic tool surface a whole bunch of things and then investigate and figure out, like, are these false positives and stuff like that" mirrors my own accessibility learning experience where, like, I would run, Axe DevTools against my app at work and something would come up. And then my next question would be "Okay, why is this an issue?" Like, not just how do I resolve this, but like, why was this even flagged in the first place. And that was how I learned a lot of what I now know about accessibility, was by following that kind of… that tree of questions there that all started by running the automated audit.

<i class="timecode">[00:30:27]</i> **Crystal:** Yes. Yeah, and that's for me, too. Like, it was one of those things of like, you know, using checklists. And I know sometimes checklists get, you know, kind of, you know, a bad rap when it comes to "Let me just test to the, you know, checklist and not go beyond that." But for me, when I was really — when I was first learning, especially with native applications, I would use those checklists and then kind of explore, because I had to.

<i class="timecode">[00:30:55]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:56]</i> **Crystal:** Because at the time I started, you know, it was WCAG 2.0, and you had to kind of take the guidelines and the success criteria that were geared towards desktop web and then try to map into mobile.

<i class="timecode">[00:31:15]</i> **Ben:** Mm!

<i class="timecode">[00:31:15]</i> **Crystal:** So I was doing a lot — I was doing a lot of that. So I was taking these checklists that were NOT for mobile and native applications, and then having to like, "Okay, well, if that's what it would be for a desktop application, what would that be like on a native application or a mobile website?"

And that's one of the things — I guess I should start off, I know we're not doing a lot of like, you know, kind of auditing, like hands-on auditing, but a lot of this is, like, very important even before. A lot of it is just, you know, getting information. Like, if you're new to mobile accessibility and mobile accessibility auditing and testing, one of the things that you really do — I think the first thing you really do is really kind of understand how, you know, understanding how mobile applications work and especially, you know, kind of getting the feel of, like, well, you know, like, what does iOS app development look like. I'm not saying you need to go learn these things, but just kind of understand, like, what does iOS application look like, what does Android application development looks like.

They both have really good especially documentation about accessibility, like, for developers, so like, "This is how you do accessibility when developing a native app!" So that's one of the things I always really tell people to do, is read that documentation, because yes, it's, you know, geared towards the developers, but it's really, really valuable for testing because it does give you, like, okay… what does the, you know, OS provide for you in terms of accessibility, and thinking about some of the things that could potentially go wrong or kind of, you know, kind of bug out with that, and that, you know, especially for some of your harder issues that are beyond just like, you know, color contrast or hit sizes or things like that.

Also getting more familiar with, you know… Like, when I started out, yeah, it was WCAG 2.0 and kind of mapping that. But 2.1 actually did add some new success criteria when it comes to… that are geared towards mobile applications. I actually did a talk about that. It's called "It's Always Sunny in Mobile Accessibility." I love It's Always Sunny in Philadelphia. And so I kind of go through the success criteria in 2.1 that are geared towards mobile accessibility, and that's things like if you wanna read off of a list of WCAG. 

<i class="timecode">[00:34:10]</i> **Ben:** I am getting a link. 

<i class="timecode">[00:34:14]</i> **Crystal:** Rather than try to memorize WCAG.

So yeah, like, orientation. That's something very… Because sometimes you get applications that will try to lock you into one orientation. So it's like, "Okay, you know, you're going to be in, you know, profile. Like, you know, this app will only allow you to be profile versus landscape." And that's one of the things that if you are locking in, or you're restricting a user to use one particular orientation, unless it's something like a video game where that is important to the actual, then that's a… you're going to fail that criteria.

<i class="timecode">[00:35:01]</i> **Ben:** Can you help me understand why? Like, why would that be an issue?

<i class="timecode">[00:35:05]</i> **Crystal:** It comes… Sometimes it is, just because of, you know, someone who has, it could be like motor skills and mobility, that could be, you know, like, a definite issue. I know for me that I sometimes have to, like, even for, like, visual impairment, I will have to rotate it to landscape, sometimes to, actually, to allow, like, you know, like, the flow of it, you know, of the screen. It helps me read better.

<i class="timecode">[00:35:46]</i> **Ben:** Okay!

<i class="timecode">[00:35:46]</i> **Crystal:** And then also it's easier for me to zoom in on things if I have it in landscape versus portrait. So really it's, you know… and it's also, it's like, why do you even need to restrict it if it's not necessary for the app, like for the use of the application? With games, it makes, you know… it does… it's logical because, you know, depending on the game, you know, that orientation, like, there's not very many games that you can play in, like, portrait mode.

<i class="timecode">[00:36:20]</i> **Ben:** Mhmm.

<i class="timecode">[00:36:21]</i> **Crystal:** Like, it has to be like, you know, it has to be in landscape mode, so it does make logical sense that you would have that locked into landscape mode. But unless there's some really, you know, good reason, you shouldn't because that could potentially limit the user and really prevent them and block them from using your app.

<i class="timecode">[00:36:44]</i> **Ben:** Mhmm. The use case I had heard was, for instance, like, some folks might mount their phone or tablet to, like, their wheelchair.

<i class="timecode">[00:36:52]</i> **Crystal:** Yes. Yes, exactly. Yeah. Yeah, and like, so if you're doing that — especially like, 'cause with certain peripherals, like I know on my Android phone, the input is going to be at the, you know, at the bottom, so if it's locked into portrait, then I can't actually, you know, add a, you know, like, something for my, you know, for if I'm going to add a peripheral to my phone because, you know, I can only have it set a certain way and I can't add anything. I physically can't add anything. So, yes, that's, that's that as well.

<i class="timecode">[00:37:31]</i> **Ben:** Gotcha!

<i class="timecode">[00:37:32]</i> **Crystal:** Yeah, and so tthere's things with, you know, orientation. I won't go through all of them. But, you know, motions — something also, motion actuation where, you know, like, actions are done by motion. I know.… there was a thing called… I'm forgetting, but there was some updates to Android or this my particular phone where you could bring up menus by shaking the phone.

<i class="timecode">[00:38:06]</i> **Ben:** Okay.

<i class="timecode">[00:38:07]</i> **Crystal:** And so if you're going to have things like that, where the actions are taking place by motions, you need to provide an alternative for people who can't, say, do that particular motion, something that works with wheelchairs and, you know, especially if you're, you know, you do have your phone mounted on your wheelchair and motion is going to set off some actions, that is—

<i class="timecode">[00:38:34]</i> **Ben:** Yeah!

<i class="timecode">[00:38:34]</i> **Crystal:** —that is going to particularly end up setting off some, you know, actions that you don't want, because you have the motion of the wheelchair—

<i class="timecode">[00:38:42]</i> **Ben:** Mhmm.

<i class="timecode">[00:38:43]</i> **Crystal:** —and the phone is also providing that as well. So that's one of the things when it comes to… Getting familiar with some of those kind of success criteria in WCAG that are geared towards, mobile accessibility is a huge, huge idea, I'd say, necessity when you're doing or when you're kind of introducing mobile accessibility testing or auditing. So, yeah, before you even, you know, kind of break out any sort of device or simulator/emulator, kind of, you know, reading up on that is very… it will be very helpful as you start to, you know, dig in and do some of this stuff, you know, yourself.

Yeah, so a lot of that information, there's a lot that goes into it before I even go in. It's, you know… there's some things. Like, one of the things I do… This is why I do prefer having a — you know, when I can, but a lot of times, sometimes that is just not, you know, possible — I like having a device because I do like doing the gestures. Like, the one thing is, here, I'm doing gestures via a mouse or, you know, a touchpad on a laptop. And that doesn't really… You know, I think with this one, it causes issues that that's not, you know, that's not how the user is going to be using this, so I'm kind of trying to mimic. Also it can cause some, you know, issues where, you know, if I try to get out of this, sometimes I struggle with, like, switching between apps! But, you know, so I know where we're talking about — you know, we're not doing a lot of, like, "This is an issue, this is an issue, and this is an issue."

<i class="timecode">[00:40:41]</i> **Ben:** Mhmm.

<i class="timecode">[00:40:41]</i> **Crystal:** I think one of the things that… You know, it's more that, you know, having that information. Like, the actual doing and finding the things is, you know, it's going to… You know, I trust people will be able to do that, but having that, you know, that knowledge and that information beforehand will save you a lot of trouble because this is a lot of… this is a lot of knowledge that was hard-won for me. So, yeah.

So with the rest of this, like, again, for me, like if, since I don't really… you know, going with like the color contrast, like text, you know, especially kind of target sizes… like that's, you know, that's kind of the quick win, what I would look for here without having, you know, VoiceOver, 'cause I can't demo with VoiceOver with here. And then I would go into VoiceOver and start kind of using it, especially, you know, kind of going through a flow of buying this. So I don't have anythingm so I'm going to put this in the cart. I don't have anything connected to this, so I can't buy anything. 

<i class="timecode">[00:42:00]</i> **Ben:** Mhmm.

<i class="timecode">[00:42:01]</i> **Crystal:** <i class="brackets">[laughs]</i> You know, like, and… with this, you know, it's like kind of using VoiceOver, kind of, you know, going, zooming in. So one of the things that you can do, this is also something, you can increase contrast, which actually may not work because this is not a native application. 

<i class="timecode">[00:42:24]</i> **Ben:** Mm!

<i class="timecode">[00:42:26]</i> **Crystal:** Because yeah, like if I invert colors, it inverts all of my colors. So it's supposed to stick, too. But this is also, you know… you can, you know, especially for testing, you can reduce motion. These are also some, you know, tools that you can use along with the Accessibility Inspector.

Yeah, so it's one of those things… I feel like I'm going, like, all over the place, but that's kind of one of the things, that I fully admit that my testing can be very kind of chaotic when I'm exploring, because it's just kind of like, well, that's how, like, I find a lot of stuff is, 'cause it's like, you know, it's one thing to use a application as, you know, the company or the developers see as fit, but… actual people don't do that. And then, you know, when it comes to — you know, I can't force my disabilities to behave in the same certain way. So I can wake up one day and, you know, I will definitely have some really bad vision days where, you know, it's, you know… and so, you know, it's one of those things of like, I can't… you know, there's something to be said, yes, having, you know, user stories and user flows and particular test scripts to do. And those are great and those are needed. But there's also something to be said to, one, exploratory testing. Also, getting actual, you know, users for user acceptance testing.

<i class="timecode">[00:44:10]</i> **Ben:** Mhmm.

<i class="timecode">[00:44:10]</i> **Crystal:** Paid — stress "paid" — paid testing, because to actually test your applications. Especially when it comes to native, you know, like, applications, because it is… though, you know, smartphones and, you know, mobile phones have been, you know, have been here for quite a while, I think when it comes to development, when it comes to testing, and especially when it comes to accessibility, these things are very new in the kind of the foreground for people. So really getting people in for, you know, testing native applications, testing mobile websites to really, you know, get the feel of like, well, people who are, you know, this is geared towards, who this is focused towards work with things. 

<i class="timecode">[00:45:01]</i> **Ben:** We got Rachele in the chat who is +1-ing testing with disabled users. Totally agree.

I think one of the things that's been striking me about this conversation, and perhaps… like, some of this is a limitation of just even the technology required to make a stream happen, but I don't think I had quite realized, despite the fact that I am a, like, physically disabled phone user, I hadn't quite realized how much of this was really grounded in physicality in a way that, like, desktop web development isn't so much. Like, things like considering gestures and, you know, is something like easy to reach, the hit size… like, yes, we do worry about target size on web apps, but I mean… we also kind of don't, right? It's there, it's a consideration, there's requirements, but it's less a big deal, I think, than, like, target sizes on mobile, just because with mobile, it's a lot easier to fat-finger something, right? 

<i class="timecode">[00:46:03]</i> **Crystal:** Yes, exactly.

<i class="timecode">[00:46:04]</i> **Ben:** Yeah.

<i class="timecode">[00:46:04]</i> **Crystal:** Yeah. Yeah, and I definitely have… and that's a, yeah, that's a, you know, issue where, yeah, like, sometimes the layout and design of things where, you know… And that's where you have to be mindful because I think there's a lot of things where you're like, "Oh, well, we're not going to worry about mobile web."

<i class="timecode">[00:46:25]</i> **Ben:** Mhmm.

<i class="timecode">[00:46:26]</i> **Crystal:** And it's like, well, you know, and so we'll have our desktop, you know, site, and then we're like, "Well, we're not going to worry about mobile web." But the thing is, is that more and more people, their main computer is their phone.

<i class="timecode">[00:46:44]</i> **Ben:** Mhmm.

<i class="timecode">[00:46:44]</i> **Crystal:** And it's a smartphone. And so you have to worry about mobile web because for a lot of people, they don't actually have, you know, reliable internet, like, for their, you know, like for their desktop computer, and the way they actually have reliable internet is their phone. And so if you don't, say, have an app and your people are needing your services or, you know, wanting to buy something, they're going onto their phone. And if your, like, layout is just not really, you know, optimized for mobile, you're, you know… it's just bad usability anyway, but for someone who has disabilities, it can really be a blocker, and if this is something that they really do need… say, if Amazon… if this was way more, you know, just like… And, you know, for the most part, you know… I was showcasing Amazon. That's because people are familiar with Amazon.

<i class="timecode">[00:47:41]</i> **Ben:** Mhmm.

<i class="timecode">[00:47:43]</i> **Crystal:** But if this was a lot more where it was kind of like, "Well, we don't really, you know… That's not our focus. You know. We'll have an app soon so they can go there," it could be a pretty… it could be a dire situation. 

<i class="timecode">[00:47:57]</i> **Ben:** I work in banking, right? And it's like, yeah, if you don't have access to banking, like, that is a critical issue. 

<i class="timecode">[00:48:05]</i> **Crystal:** Yes. Yeah, and there's… and I know I've gone to, um, like before my bank really had a good mobile, like, a good native application, going to their mobile site, trying to log in, you know, with a screenreader, and I was like, "Oh, I'm going to have go… in person… to a teller!" I'm like, "How do I do that? "You know? And, you know, and it was one of those things of like, you know… and they came out very, you know, soon after with a native application, but that doesn't help people from, you know, where it's like… "I don't have reliable internet for my desktop. You don't have a native, you know, application that, you know, solves some of these issues, you know. I'm going onto your mobile website, but your mobile website is just your desktop site on a mobile screen and it is all over the place."

<i class="timecode">[00:49:15]</i> **Ben:** Mhmm.

<i class="brackets">[Crystal laughs]</i>

Joe is talking about kind of, like, the commentshat we, you especially, were making about, like, you know, most folks that are on their mobile devices, like, that's their primary way of accessing the web. Joe says, "I think this is spot on and really important, as I feel like devs can be really guilty of forgetting about just how many mobile users there are because they're sat in front of a desktop or a laptop all day."

<i class="timecode">[00:49:38]</i> **Crystal:** Yeah. Yeah, it's one of those things that can be very… it's very easy. And it's also because mobile usage for people — for everyone — but also for disabled people really has grown SO exponentially over the last very short years! And so it's one of those things of, you know, going from, you know, just like, say… beginning of like, I don't know, like 2005, where, yeah, was, there were was, you know, mobile, like there were phones, but they weren't really smart. And then after the iPhone, you know, they're just kind of just there. And then you start getting Android and you know, all these different, you know, and it just really the amount of people — and people realized that it's cheaper to get, you know, a lot of times it's cheaper to get data on your phone for a lot of people than, you know, actually getting internet service in their home.

<i class="timecode">[00:50:42]</i> **Ben:** Mmm!

<i class="timecode">[00:50:42]</i> **Crystal:** There's also people in rural areas and also, you know, who live in inner cities where there actually aren't, you know… there's not, you know, actually the infrastructure, or, you know, the cost of actually getting lines run into particular residential areas is really high. <i class="brackets">[laughs]</i>

<i class="timecode">[00:51:02]</i> **Ben:** Yeah.

<i class="timecode">[00:51:03]</i> **Crystal:** I feel I've taken over it, where you were like, "We're going to do some auditing today!"

<i class="timecode">[00:51:08]</i> **Ben:** No, this is great! I think that's hugely important, and so I've been really enjoying this. Were there other things you wanted to show, other parts of your process that you think folks should see?

<i class="timecode">[00:51:21]</i> **Crystal:** For me, no. I think my main thing with this is that, one, if you're someone who wants to do mobile accessibility testing, you, one, should test on, you know, different apps. You should also test on not the latest kind of, you know, the latest version. You should also test on older versions, older devices, because not everyone is going to have the iPhone 12 Pro Max. I don't even know. I mean, I'm mostly an Android user, so I was like… <i class="brackets">[laughs]</i> and so I'm like, "Oh, I wonder if that's the new one," 'cause I know they're actually doing an announcement today. 

<i class="timecode">[00:52:02]</i> **Ben:** I think, like, during this stream even. Like, I had the people reaching out like, "I want to make your stream, but also Apple." I'm like, "Totally understandable."

<i class="timecode">[00:52:11]</i> **Crystal:** Yes! But you know, it's important to… and so I know it's really hard to get your hands on devices. I was definitely that person when I was doing mobile accessibility asking people, like, "What device is that? Can I borrow it?"

<i class="brackets">[both chuckle]

"Can I borrow your phone to test to test something on?" Or asking people to like, you know… But it's important because not everyone, you know, has the newest and greatest thing.

So using a simulator like this is really good. It's not a replacement for the real thing, but, you know, but it definitely can help you get, you know, to get in there and, you know, find some issues. You know, especially if you only have, you know, if you only have one actual device, that has to be it. And then with this, you do find some of those bigger issues that the simulators can find.

Definitely utilize accessibility, like, automation tools, but don't rely on them for everything because, you know, as we talked about, like, you know, the physicality of mobile devices is very important and, you know, these automated tools can only do so much versus actually, you know, like, yeah, propping, you know, like, attaching, you know, a mobile device to, you know, a wheelchair. That's something that actually, you know, you should go to a user and, you know, and ask them to, you know, to do that and see what their experiences are. Again, pay. [laughs]</i> But, you know, nothing's going to — you know, an automated tool can't replicate that.

<i class="timecode">[00:54:12]</i> **Ben:** Mhmm.

<i class="timecode">[00:54:12]</i> **Crystal:** And it can't find those unique issues that could come from around that.

And also just, you know, learn — just kind of, you know, use the documentation that is for accessibility that's geared towards developers. And, you know, go into WCAG and familiarize yourself with the new kind of — new since August of 2018 — but the updated mobile accessibility success criteria.

<i class="timecode">[00:54:48]</i> **Ben:** Alright! Yeah, I think that that is a fantastic place to leave this. Crystal, thank you so much for coming on. I'd love to, I guess, kind of shout out things that are going on. What kinds of things would you like to promote? 

<i class="timecode">[00:55:06]</i> **Crystal:** So, I have a series on kind of getting started with mobile accessibility testing. Right now out is the — my series is called "Accessibility Savvy." Right now that's out, I put out a video on getting started with Android Studio and how to emulate Android devices. Coming up Thursday, which is in two days — I forgot which day it was! — I will put up this second part, which is exploring this with iOS in this Accessibility Inspector.

I will also be talking next week at, you know, Inclusive Design 24, and talking me about "Everyone Needs WAP (Web Accessibility, Please)." <i class="brackets">[laughs]</i> Making sure to get that "web accessibility, please" on there. That is what "WAP" stands for, and I don't know about any other.

<i class="timecode">[00:56:04]</i> **Ben:** No, of course not!

<i class="timecode">[00:56:08]</i> **Crystal:** <i class="brackets">[laughs]</i> Yes, it's the only one!

And that's going to be focused on how to, you know, really, as it says, like, web accessibility for everyone, so really how to communicate and talk to people outside of tech, outside, you know, about accessibility, about disability.

Yeah, so those are good. And then next month, I am doing a talk for Denver Startup Week, which is called "How To Pitch Accessibility," which is geared for people in startup companies, how to really go about getting their companies to focus on accessibility, because that's an issue for a lot of people I've talked to in startups. How to, you know… a lot of things about startups are about, you know, runway, being lean, and all that, but accessibility is still important. So trying to help people, employees in that situation on how to kind of pitch it and make sure that it's there from the very start. 

<i class="timecode">[00:57:11]</i> **Ben:** Alright! Well, awesome! I've put some links in the chat. Crystal, this has been fantastic. Thank you so much for coming on. I've really enjoyed chatting with you. This was a delight.

And chat, I'm super, super excited to have had you along this ride as well. You should join us the next few weeks. Same time, same place, 12pm Central, right here. Next week, we're going to have Alexa Heinrich come on to demonstrate social media accessibility, which I think is going to have a lot of overlap with kind of the web accessibility stuff that I usually do. And the week after that, we've got Rachele DiTullio, who's been in the chat today. We're going to be doing form accessibility. So it's all good stuff. Let me put a link to the Some Antics Twitter in the chat as well, so that you can go follow that and keep up to date with all the latest streams.

But yeah! Stick around, we'll find someone to raid. And yeah, thanks for coming, y'all! Bye!