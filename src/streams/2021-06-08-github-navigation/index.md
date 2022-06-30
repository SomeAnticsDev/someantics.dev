---
title: "Let's Clone GitHub's Navigation Widget with Chantastic"
thumbnailTitle: "Let's Clone GitHub's Navigation Widget"
timeOfDay: 12pm
upload: https://www.youtube.com/watch?v=vCHFkKRU1Ro
sourceCode: https://github.com/SomeAnticsDev/main-nav
hosts:
  - Ben Myers
  - Chantastic
tags:
  - Web Accessibility
---

Join us on Some Antics, as Michael "Chantastic" Chan walks us through creating GitHub's navigation tabs treatment! We'll dive into the accessibility and UX that goes into making navigation flexible and usable!

## More From Michael

- [Follow Michael on Twitter](https://twitter.com/chantastic)
- [Read Michael's blogposts](https://chan.dev)
- [Listen to React Podcast](https://reactpodcast.com)
- [Join us on the Lunch.dev community Discord server](https://events.lunch.dev/discord)

## Mentioned Links

- [`aria-current`](https://www.aditus.io/aria/aria-current/)
- [Building Accessible SVG Icons in React with Chantastic](/accessible-svgs-react/)
- [Visually hidden utility styles](https://allyjs.io/tutorials/hiding-elements.html#2017-edition-of-visuallyhidden)
- [`aria-label`, `aria-labelledby`, and `aria-describedby`: What's the Difference?](https://benmyers.dev/blog/aria-labels-and-descriptions/)

## Transcript

**Ben:** <i class="timecode">[00:00:00]</i> Howdy, howdy, y'all! Welcome back to Some Antics. It's great to be back. Yeah! Today I've got with me the ever illustrious Michael Chan. Michael, how's it going?

**Michael:** <i class="timecode">[00:00:12]</i> <i class="brackets">[chuckles]</i> It's going good. Going good. How are you?

**Ben:** <i class="timecode">[00:00:15]</i> I'm doing well! Doing well. I got back from a lake trip this weekend. Much needed. Tons of fun. But now I'm back and I'm ready to do some accessibility stuff with you today. And before we dive into it, would you introduce yourself for anyone who might not know who you are?

**Michael:** <i class="timecode">[00:00:32]</i> Yes! Yeah, yeah, yeah. So, I am Michael Chan. I go by Chantastic about the internet. Chantastic most places I care to be. Except for here on Twitch, unfortunately. Someone's squatting on chantastic, so that's kind of like a bummer.

**Ben:** <i class="timecode">[00:00:48]</i> Mm.

**Michael:** <i class="timecode">[00:00:49]</i> However, I think that it might have just been me when I made, like, a Justin.tv account, like…

**Ben:** <i class="timecode">[00:00:55]</i> Ohhhh…

**Michael:** <i class="timecode">[00:00:56]</i> …or Justin Live or whatever. Justin TV. Whatever it was back in the day. And like, I just don't have access to whatever email address it was.

**Ben:** <i class="timecode">[00:01:03]</i> You're your own squatter!

**Michael:** <i class="timecode">[00:01:04]</i> You know, Ben, I gotta tell you something. I have such a bad domain acquisition problem, that, like, this is how you know it's bad: when you have, like, that idea and you're like, "I'm going to go buy that domain…"

**Ben:** <i class="timecode">[00:01:17]</i> Mhmm.

**Michael:** <i class="timecode">[00:01:18]</i> And you go to register and you're like, "Oh, it's taken. Bummer." And you look at the WHOIS data and it's you.

**Ben:** <i class="timecode">[00:01:24]</i> <i class="brackets">[laughs]</i> Has this happened multiple times?

**Michael:** <i class="timecode">[00:01:27]</i> It has happened more than once.

**Ben:** <i class="timecode">[00:01:28]</i> That's amazing! And also horrific.

**Michael:** <i class="timecode">[00:01:32]</i> At least I'm consistent though, right? Like, that's the… <i class="brackets">[chuckles]</i>

**Ben:** <i class="timecode">[00:01:35]</i> Yeah. Let's see, I'm sitting on just a few domains. But I'm trying to like, actually, like, when I create the domain, like, immediately funnel it into a site. Like, I did that with a11y.surf. I got that domain and I'm like, "Okay, now I'm going to make the project for this."

**Michael:** <i class="timecode">[00:01:52]</i> That's a strong domain. Strong domain.

**Ben:** <i class="timecode">[00:01:57]</i> Nobody tell Stephanie, but I have claimed 11ty.party, and at some point, I'm going to use that for something. But not yet, and maybe not ever. But I have it and it's good.

**Michael:** <i class="timecode">[00:02:12]</i> You know, you have the option now.

**Ben:** <i class="timecode">[00:02:14]</i> Yes.

**Michael:** <i class="timecode">[00:02:14]</i> You can do whatever you want with it.

**Ben:** <i class="timecode">[00:02:16]</i> Yes. Stephanie may have 11ty.rocks, and Eleventy may have 11ty.dev, but I, I have 11ty.party.

**Michael:** <i class="timecode">[00:02:23]</i> You know, I think it's the most joyous of all of the options, I think.

**Ben:** <i class="timecode">[00:02:27]</i> Of course!

**Michael:** <i class="timecode">[00:02:28]</i> You know, when it lands, it's going to land hard.

**Ben:** <i class="timecode">[00:02:31]</i> Oh, there we go!

Yeah, so it's great to have you back. We had you on previously as we were building out accessible icons in React. 

**Michael:** <i class="timecode">[00:02:41]</i> That was fun.

**Ben:** <i class="timecode">[00:02:43]</i> Yeah, it was great! What are we doing today?

**Michael:** <i class="timecode">[00:02:47]</i> Okay, so today we're working on a project that you actually helped me out with and I learned a ton from, and this was something that I needed to do at work no less. And so I got pretty far and I was pretty happy with it. And then I messaged my good friend Ben Myers, who runs this awesome stream talking about accessibility and semantics and stuff. And he was like, "Yo, that's pretty good. But there's some things that we need to talk about." And we talked about those things and I learned a lot, and so, yeah. And there was also a lot of, like, Google learning that happened kind of before that, in that earlier phase. So I thought, "You know what? I'm going to hit Ben up and we're going to build some of this on stream and we're going to have a good time and more people can benefit from the things that I learned, the things that I learned from you." And yeah!

So the piece of UI that we're covering today is actually, as we're looking at the repo, you know, for this project, what we're going to clone. And we're probably not going to clone all of the pieces of this, because it actually, there's a lot of code there to make all of the snippets work. But the UI that we're going to replicate is that piece right below the project name, where we have all of those kind of, like, tablike things.

And so I called this "main nav" but, I don't know, there's, like, a bunch of names that we could use for it. The thing I like about "main nav" — I don't know, I'm kind of, like, a nut for naming, and the thing that I really liked about "main nav" or "main navigation" or something like that is that this is the navigation that is inside of your main content. And this is really important because, you know, there's still the GitHub navigation, right? That's the navigation for the site, but like, this is the navigation for this particular resource, this, you know, GitHub repo.

And so, yeah, so that's the thing that we're going to cover, so the navigation for this resource. I think, you know, for someone who's, you know, watching either now or later there's… These are often, like, the resources of your app, right? So for GitHub, you know, a repo is, like, a resource of the app. For your app, you might have a very complex "Person" object, and so you want to kind of divide that object up by some, you know, certain ways that you might edit it or, you know, dashboard data that you might see for them. But as we have bigger objects — Airbnb has one of these. Like, pretty much every site that you go to, like, you'll notice there's some kind of, like, subnavigation. And so anyway, oftentimes it follows, like, these really big objects in your product. And, so yeah. 

So we're going to do the GitHub repo one because, you know, we knew that we'd be seeing it as we even just describe the project. So, there it is!

**Ben:** <i class="timecode">[00:05:47]</i> Yeah. And so we're talking about specifically this tab treatment for navigation throughout the different repository settings. And I believe we're going to dive into some of the link user experience. There's icons. And then also, I think we're diving  into today — this repo doesn't have it, but if I go to the Lunch.dev calendar, that one should have it, which would be that sometimes you get… There's, like, the numbers in here, right? There's, like, 10 pull requests, 17 issues, stuff like that.

**Michael:** <i class="timecode">[00:06:28]</i> Yeah.

**Ben:** <i class="timecode">[00:06:28]</i> So all of these things go into kind of this navigation experience, and we're going to be, I guess, diving into all of these.

**Michael:** <i class="timecode">[00:06:35]</i> Yeah! Yeah, and so if you want to follow along or, you know, you aren't going to be able to stay the whole time or we don't actually get as far as we want to, if you go to SomeAnticsDev/main-nav on GitHub, that project is ready to go. It's what we'll be working from today. And it has the full treatment for the GitHub repo navigation. So if you pull that down, it has everything that makes that look cool, including the… I think it even has the Octicon icons set up in it.

**Ben:** <i class="timecode">[00:07:08]</i> Yes.

**Michael:** <i class="timecode">[00:07:08]</i> So if we don't get all the way to the end, which it's very possible that we won't if we talk about everything in depth, you can download that and see it all in action.

**Ben:** <i class="timecode">[00:07:18]</i> Okay, so this is the finished product, is what you're saying?

**Michael:** <i class="timecode">[00:07:21]</i> Correct.

**Ben:** <i class="timecode">[00:07:21]</i> Okay, cool.

Alright! I'm super excited to get started, so what should I do to start?

**Michael:** <i class="timecode">[00:07:30]</i> Yeah, so I think… Do you already have this — You already had this cloned, right? 

**Ben:** <i class="timecode">[00:07:33]</i> Yes.

**Michael:** <i class="timecode">[00:07:34]</i> Okay, cool. So what if we do this: Let's go into the editor where you have that cloned, and why don't we just start from the markup? We can kind of go in there, see what's already in there, and then we can comment it out and talk about it piece by piece.

**Ben:** <i class="timecode">[00:07:49]</i> Sounds good!

**Michael:** <i class="timecode">[00:07:50]</i> Okay, so we talked about what is it. So in the README, I have kind of a list of things that we'll cover. I can keep track of that. We've kind of covered the "who is it" part. And then, yeah.

So, we need to talk a little bit about why it shouldn't be skipped. Now, this was one of my first questions and I think the first thing that I reached out to you on, is like, okay, I'm looking at all these navigations. Some of them handle them differently. Like, should this be included in the things that are skipped? You know, 'cause there's a — what is it? — "Skip to main" link?

**Ben:** <i class="timecode">[00:08:22]</i> Oh. Yeah, a lot of sites will have skip links. Right? Which will let you, if you're a keyboard navigator, you can, like, click a button or a link and it'll take you further into the page, like hopping over the kinds of, like, super common links that you would find on every page. Which you can imagine, if you're a keyboard navigator, like, that is clutter—

**Michael:** <i class="timecode">[00:08:48]</i> Yep.

**Ben:** <i class="timecode">[00:08:48]</i> —that you have to, like, navigate over, like, every time on every page. Sometimes you just genuinely don't want to have to encounter that all the time. You want to get directly to what it is you care about. So websites will make links called skip links that'll take you just over the navigation into the main stuff. And your question here is, like, does *this* navigation count as the main stuff? 

**Michael:** <i class="timecode">[00:09:15]</i> Right, yeah. So as I was going through, like, looking at various examples — and I've always admired the work that GitHub has put into accessibility on their site. There's a lot of really good considerations and, you know, to the point that I've kind of modeled this after what they're doing.

And I hit you up earlier on in the process and I said, "Hey, I don't understand. Like, why are they not skipping this chunk of navigation with everything else?" And I think the reason, the answer that we came up with is that this is actually content, right? Like, this is how you navigate content. And so it's different, you know, for this project versus, like, another project, as opposed to, like, main navigation, like, you know — You're not signed in right now but, like, you have, like, Why GitHub, Team, Enterprise, Explore, Marketplace, Pricing. Those are the things that are, like, not part of the experience of you navigating this repository. And those are things that you might want to skip if you're kind of, like, going from page to page, and to get to the navigation for this particular repo and be able to go right to Actions or Discussions and whatnot. You wouldn't want to skip those because you know, now you have to tab through the whole top header, which is the irrelevant stuff, and then, you know, tab through the stuff that you care about to get to the right repo page.

**Ben:** <i class="timecode">[00:10:39]</i> Right. Yeah, and if you think about, like, the common, day-to-day experience of using a repo, right? Like, when I go to a repository, I'm very rarely, like, diving directly into the files. Like, sometimes I do, but more often than not, I'm probably diving into the issues or the pull requests, right? Like, you want to be able to get to this because this isn't cruft. It's actively part of the user experience.

**Michael:** <i class="timecode">[00:11:05]</i> Yeah! Yeah, absolutely. So that's kind of the first question that we need to answer is, like, does this navigation gets skipped? And in the examples that we pulled up, no. Because, you know, maybe that would change if you had a, you know, for, like, various different circumstances, but in general, this is, you know, kind of your main navigation for this resource, and so it should be attached to the content and inside of your kind of main element container.

So that's the first thing. And so if we go back to the code, we can just start with our main container. So if you want to… I guess we can copy, like… Let's see. `<body>`. I don't even have a `<main>` here. Look at that.

**Ben:** <i class="timecode">[00:11:48]</i> Yeah, let's… Should we make a new file? Would that be helpful?

**Michael:** <i class="timecode">[00:11:52]</i> Sure! Yeah, yeah, yeah! We can do that.

**Ben:** <i class="timecode">[00:11:54]</i> Yeah, let's do that. So, I'm going to call this `nav.html`, and I'm going to spin up — We've got our boilerplate here.

**Michael:** <i class="timecode">[00:12:03]</i> Perfect.

**Ben:** <i class="timecode">[00:12:04]</i> And then you want a `<main>` tag. Okay!

**Michael:** <i class="timecode">[00:12:07]</i> Yep, perfect.

Now the next thing is that we're going to use a `<nav>`. And now, I'm not, actually… I'm not an expert on this. This is something that you know better than me. But when we create a `<nav>`, this actually creates a landmark. And, you know, for a lot of us who don't daily use, you know, assistive technologies, we don't really know what landmarks are. And so there's this kind of feeling of, like, "Oh, yeah. Like, everything should be tabbable." But folks who do use assistive technologies are really powerful, like, you know, power users of that technology, and there's a lot of really cool shortcuts that you can do to navigate a page by these regions. And `<nav>` is one of those, like, kind of landmarks that are navigable. Now, Ben, did I get that right? Is there anything else that you think should be added to that? 

**Ben:** <i class="timecode">[00:13:01]</i> Yeah, I think your explanation's pretty solid. I want to show — because I think sometimes we talk about these things in the abstract, and I'd love to actually show that in play.

**Michael:** <i class="timecode">[00:13:12]</i> Yeah!

**Ben:** <i class="timecode">[00:13:12]</i> So I'm going to go ahead and open up VoiceOver, which is always a gamble on stream.

<i class="brackets">[Michael laughs]</i>

**Ben:** <i class="timecode">[00:13:20]</i> Ask me how I know. 

Here we go. Let me… There we go. So I'm going to turn on VoiceOver over on the side here, and it's going to think for a minute.

**VoiceOver:** <i class="timecode">[00:13:34]</i> VoiceOver on System Preferences.

**Ben:** <i class="timecode">[00:13:36]</i> Okay. So I've got VoiceOver active here, and what I'm going to do — Different screen readers have different ways to do this. So if you're using JAWS, you're going to have, like, a whole bunch of keybindings. But I prefer the way VoiceOver does it, which is it provides a user interface for this called the Rotor. So, in JAWS <i class="brackets">[sic]</i>, you can open up the Rotor by doing Control-Option-U. 

**VoiceOver:** <i class="timecode">[00:13:56]</i> Window Spots menu.

**Ben:** <i class="timecode">[00:13:57]</i> And then I can use the left and right arrow keys to find different kinds of elements that I might expect on the page. So…

**VoiceOver:** <i class="timecode">[00:14:07]</i> Accessibility features, table. Windows Spots— Accessibility features. Chrome, GitHub, SomeAnticsDev/main— Window Spots menu.

**Ben:** <i class="timecode">[00:14:15]</i> There we go!

**VoiceOver:** <i class="timecode">[00:14:16]</i> Links menu. You are—

**Ben:** <i class="timecode">[00:14:18]</i> So yeah, it just didn't know that it was focused on, um, the browser right now.

**VoiceOver:** <i class="timecode">[00:14:22]</i> Headings menu.

**Ben:** <i class="timecode">[00:14:23]</i> Here we can see, like, for instance, our headings get turned into an outline that, like, you can navigate the page based on heading level, which would be like, for those of us who are sighted, it would be like skimming a page by its headings. Then there's…

**VoiceOver:** <i class="timecode">[00:14:37]</i> Form Controls menu. No items. Tables menu. Landmarks menu.

**Ben:** <i class="timecode">[00:14:41]</i> So you can see that we've got a few landmarks in here. There's a banner. This corresponds to the main header of the page.

**VoiceOver:** <i class="timecode">[00:14:47]</i> Banner.

**Ben:** <i class="timecode">[00:14:48]</i> There's a *global* navigation.

**VoiceOver:** <i class="timecode">[00:14:51]</i> Global navigation.

**Ben:** <i class="timecode">[00:14:52]</i> There's, you can see…

**VoiceOver:** <i class="timecode">[00:14:53]</i> Site search.

**Ben:** <i class="timecode">[00:14:54]</i> There's site search, there's this main, and then there's this repository navigation here.

**VoiceOver:** <i class="timecode">[00:14:59]</i> Main. Repository navigation.

**Ben:** <i class="timecode">[00:15:01]</i> But the reason the screen reader knows that these, like, navigation elements even exist is because we're using the `<nav>` tags. And so through our markup, or rather through GitHub's markup, GitHub is surfacing that this is a region that users might care about, and here's why is because it's navigation. So that's the experience here that we would see.

**Michael:** <i class="timecode">[00:15:29]</i> Yeah, that's—

**VoiceOver:** <i class="timecode">[00:15:31]</i> GitHub, SomeAnticsDev/main-nav. A clone of GitHub's proj— VoiceOver off.

**Ben:** <i class="timecode">[00:15:35]</i> Sorry, we had VoiceOver yammering. Can you start again? I'm so sorry.

**Michael:** <i class="timecode">[00:15:39]</i> That's a great illustration. I've never actually used that feature in VoiceOver. What's the keystroke for it again? 

**Ben:** <i class="timecode">[00:15:45]</i> That was Control-Option-U.

**Michael:** <i class="timecode">[00:15:49]</i> Control-Option-U.

**Ben:** <i class="timecode">[00:15:50]</i> Yes.

**Michael:** <i class="timecode">[00:15:50]</i> Okay, cool, cool. I'm definitely gonna start adding that to my repertoire of VoiceOver.

**Ben:** <i class="timecode">[00:15:54]</i> Yes!

Anthony in the chat is noting something I've said before, which is that disabled users by necessity become power users of their assistive technology. Right, so… Right, what I just showed you here isn't an edge case. It's not "Oh, this is on the bare extremes of what some people use with their assistive tech." This is how people use assistive tech.

**Michael:** <i class="timecode">[00:16:19]</i> Yep. Yep, yep. It's the same, like, as me just like looking at it and being like, you know, "These are the navigation sections," right? Like, you would open up the Rotor, you would see the navigation sections, and then jump to one of those navigation sections, and, you know, navigate by it. Yeah, absolutely.

So there is something that's really cool that you showed off, is that that isn't just some empty name. It's actually named "Repository navigation."

**Ben:** <i class="timecode">[00:16:46]</i> Yes!

**Michael:** <i class="timecode">[00:16:47]</i> So let's take our `<nav>` and actually add that feature into it so it says "Repository navigation." Now, the way that I had done this is to use an `aria-label` for that `<nav>`. And so on the `<nav>`, we just add `aria-label`, and we can put in whatever we want there. In this case, we can just call it "Repository navigation" like they did.

**Ben:** <i class="timecode">[00:17:12]</i> Okay!

**Michael:** <i class="timecode">[00:17:13]</i> And, you know, I'm glad that you demonstrated the… What is it? I never remember what they're called! They're not regions, they're, uh…

**Ben:** <i class="timecode">[00:17:28]</i> Landmarks!

**Michael:** <i class="timecode">[00:17:28]</i> Landmarks! That's right. Glad you demonstrated the landmarks because now we can see, like, why that's important and then also how to label it so that we can give it a discrete name, you know, when someone's navigating, to be able to be like, "Okay, this is the repository navigation versus global navigation."

**Ben:** <i class="timecode">[00:17:45]</i> Yes! And here's where things get even more fun is, I think by default, assistive technologies actually include the word "navigation" for us.

**Michael:** <i class="timecode">[00:17:56]</i> Yes!

**Ben:** <i class="timecode">[00:17:57]</i> So I'm probably… I think we can probably just call this "Repository."

**Michael:** <i class="timecode">[00:18:01]</i> Yes, absolutely! Yeah, so in the example, we have "Repository" in there and it — you know, this varies, right, but my experiences kind of mirrors what you said in that it will append "navigation" to that when I did that.

**Ben:** <i class="timecode">[00:18:16]</i> It's like in an image's alt text. You don't need to include "Image of" because the user is already told it's an image. You don't need to add that clutter. Yeah.

**Michael:** <i class="timecode">[00:18:27]</i> Absolutely.

So I think the next thing that we'll do is… I think the next thing we're going to do is we're gonna talk about links, because a `<nav>` can have just links inside of it. There doesn't have to be any additional markup except for just, you know, a bunch of links that, you know, people can, you know, navigate around with, whether it be on different pages or on the same page using a fragment.

So, okay, so we've got our link. You've got your link markup in there. And let's throw a couple of them in there. Let's do… I'm going to call out some links and then you can just add them based on, you know, GitHub. So we'll do a Code link.

**Ben:** <i class="timecode">[00:19:07]</i> I'm also… We probably aren't actually going to make them go anywhere for now, so I'm probably just going to give this a pound just for the sake of demo.

**Michael:** <i class="timecode">[00:19:15]</i> Yep, that's totally fine.

**Ben:** <i class="timecode">[00:19:16]</i> Okay.

**Michael:** <i class="timecode">[00:19:17]</i> And then we'll do Issues next. Pull Requests. And we can add Discussions, just one more just for fun.

**Ben:** <i class="timecode">[00:19:31]</i> Okie-doke!

**Michael:** <i class="timecode">[00:19:34]</i> Okay, awesome.

So now we have four links and once you have like more than, you know, one link, you want to know which one you're on. So this was actually one of my favorite things that I've found, because there's plenty of ways that you could do this, right? Like, and there's plenty of ways that I have done this in the past, right? Like, you know, you just make some kind of class that's like, you know, class" is-current-page" or something like that. But we can actually do quite a bit better than that because there are some ARIA attributes that we can actually tie into that actually add some semantics to say, like, this is actually the current page. And so the one that we use for that is `aria-current`.

**Ben:** <i class="timecode">[00:20:19]</i> Then I can see it's… VS Code has helpfully given me a few options here.

**Michael:** <i class="timecode">[00:20:23]</i> Oh, yeahhh!

**Ben:** <i class="timecode">[00:20:24]</i> So `date`, `location`, `page`, `step`, `time`, `true`.

**Michael:** <i class="timecode">[00:20:29]</i> So, this, I have to say, this is probably one of my favorite things that I learned this year. I'm going to post in a link to an article that I found extremely helpful. It's really nicely laid out and written, and it shows you kind of examples of, like, how you might use each of these options that VS Code is presenting to us. 

Now I had started — My first draft of this was just `aria-current "true"`, because I didn't see that there were other options that we could do. But there are. There's tons of options. There's a `"step"` that you can use, like, for a stepper. There's `"location"` to show, like, you know, I think it's like your location in the world. "date," if it's a kind of like a date-related currency.

**Ben:** <i class="timecode">[00:21:18]</i> Oooh.

**Michael:** <i class="timecode">[00:21:18]</i> It's like super, super nifty. Now, the one that we'll be using is `"page"`.

**Ben:** <i class="timecode">[00:21:29]</i> Okie-doke!

**Michael:** <i class="timecode">[00:21:32]</i> Okay, cool. So we have "page." Now, I think that at this point, I want to jump into the stylesheet just a little bit. Do you want to make a new stylesheet, or how do you wanna handle this?

**Ben:** <i class="timecode">[00:21:43]</i> It depends on how much styles. But before we dive into the styles real quick, can we just see without styles, see what the screen readers—?

**Michael:** <i class="timecode">[00:21:50]</i> Yeah! Yeah, yeah, yeah, let's go.

**Ben:** <i class="timecode">[00:21:51]</i> Yeah. So what I'm going to do is I'm going to spin up… I've got an extension called BrowserSync that runs a webpage in a dev server. And I specifically want nav.html. So this is what we've got. Obviously it's not the prettiest thing in the world, but it's got all of our markup, and… Where's…? Let me turn on VoiceOver and we'll see kind of what the experience is.

**Michael:** <i class="timecode">[00:22:20]</i> Yeah, how it reads.

**VoiceOver:** <i class="timecode">[00:22:22]</i> VoiceOver on System Preferences. Chrome. Document. Google Chrome. Document, web content. Current page, link, Code, Repository, navigation. Chrome has new window.

**Ben:** <i class="timecode">[00:22:31]</i> Okay, so there were a few things going on there. Basically, cause we did two things at once. We tabbed to a link, but we specifically tabbed to a link  inside of our `<nav>`. So it told us that we were in Repository navigation. That was kind of tacked in at the end there. But it also said  "link, Code" and it said "current page." I can reproduce that if I tab forward and then tab back real quick.

**VoiceOver:** <i class="timecode">[00:22:54]</i> Link. Current page, link, Code. You are currently on a link.

**Ben:** <i class="timecode">[00:22:58]</i> So we didn't need to add any, like, hidden text or anything to say "current page." We added the `aria-current "page"` to the link and it did that for us automatically. A nice thing about doing it that way is it'll also get localized. If the user's using, like, their screen reader in a different language, they'll be told it in their native language as opposed to any hints that we can provide. So that's pretty nice.

**Michael:** <i class="timecode">[00:23:24]</i> That's awesome.  I didn't realize that. That's a, great little touch. 'Cause you could recreate this with, you know, `aria-label`s of your own, but it doesn't get kind of local.

**Ben:** <i class="timecode">[00:23:35]</i> Yeah. I'm going to open up the Rotor now.

**VoiceOver:** <i class="timecode">[00:23:37]</i> Landmarks menu.

**Ben:** <i class="timecode">[00:23:38]</i> So we can see that we have two landmarks. We used a `<main>` tag, so it's telling us that there's a main. And it's telling us "Repository navigation." So if this were a bigger page with a lot more going on, I could, you know, thumb through this and I could skip directly to the repository navigation.

**VoiceOver:** <i class="timecode">[00:23:52]</i> Main. Repository navigation.

**Ben:** <i class="timecode">[00:23:56]</i> Let me kill VoiceOver and we can keep going.

**VoiceOver:** <i class="timecode">[00:23:58]</i> VoiceOver off.

**Michael:** <i class="timecode">[00:24:00]</i> Okay, so we're kind of at a fork in the road. So there's… I don't know, I have a way that I kind of like doing things and I think you kind of like doing it the same way is, is that I kind of feel like maybe we should just continue chasing the right markup and then style it later. How do you feel?

**Ben:** <i class="timecode">[00:24:17]</i> I love it. Let's do it!

**Michael:** <i class="timecode">[00:24:18]</i> Okay, let's do it. Okay, so what we have next then is it might be nice, maybe not in all cases, but in this case, I want to be able to know how many links are in the navigation. So we see that our navigation works exactly as it needs to with just the `<nav>` and the anchors. But if we want to, like, have a number of links, we're going to have to add some additional markup. And so Ben, you probably know which direction I'm going with this, so I'll hand it off to you. What's the best way to do that?

**Ben:** <i class="timecode">[00:24:51]</i> Yeah, sure. So, like Chan has mentioned, we have a bunch of anchor tags in the `<nav>`. This is totally acceptable. There's, like, nothing wrong with this whatsoever. But= another pattern that's frequently used inside of `<nav>` — and if you've ever written a `<nav>`, you've probably seen something like this — is you can stick inside the `<nav>` an unordered list, and then all of your links can go as list items. So I'm going to do that real quick. There's probably a faster way to do this, but at this point, I'm just gonna… 

**Michael:** <i class="timecode">[00:25:25]</i> Not that I know of.

**Ben:** <i class="timecode">[00:25:26]</i> Yeah.

**Michael:** <i class="timecode">[00:25:30]</i> I'm sure if you were a Emmet power user, you could just do it in one line super fast.

**Ben:** <i class="timecode">[00:25:35]</i> Right? Yeah, there's probably, like, a sequence of five arcane keys I need to do that in Vim or something like that.

But yeah, so I've just created an unordered list, and every anchor tag sits inside of its own list item.

**Michael:** <i class="timecode">[00:25:53]</i> jasperfurniss knows what's up.

**Ben:** <i class="timecode">[00:25:54]</i> Yeah.

**Michael:** <i class="timecode">[00:25:54]</i> Emmet power user in chat right now. 

**Ben:** <i class="timecode">[00:25:57]</i> There we go.

Yeah, so now you can see we've got, inside our `<nav>`, we've got the very familiar bullet points of list items. I'm just gonna embiggen this a bit.

Dan's recommending the Konami Code. I'm sure that'll help. Did you know, by the way — I think it's the Konami Code — if you do the Konami Code inside of Discord, it opens up a disco mode, which is delightful. Thank you to Brandon Dail who introduced that little tidbit in our server.

**Michael:** <i class="timecode">[00:26:31]</i> Oh, I feel like—

**VoiceOver:** <i class="timecode">[00:26:32]</i> VoiceOver on System Preferences.

**Michael:** <i class="timecode">[00:26:33]</i> —site, you gotta do that first.

**Ben:** <i class="timecode">[00:26:36]</i> Yep. Yeah, so I'm going to go ahead and just kind of dive back into VoiceOver and give this another shot.

**VoiceOver:** <i class="timecode">[00:26:43]</i> Chrome, Document, web content. Document, web content. D.

**Ben:** <i class="timecode">[00:26:49]</i> Ope.

**Michael:** <i class="timecode">[00:26:50]</i> D!!!!

**Ben:** <i class="timecode">[00:26:50]</i> There we go! D.

**VoiceOver:** <i class="timecode">[00:26:51]</i> Document. Document.

**Ben:** <i class="timecode">[00:26:53]</i> Okay.

**VoiceOver:** <i class="timecode">[00:26:53]</i> Current page, link, Code, list 4 items. Chrome has new window.

**Ben:** <i class="timecode">[00:26:57]</i> Yeah, so it told us, like, "Hey, you're in this list. There's four items." And as I tab through this, not only are we going to get the link information, we're going to be told how far into the list of links we are.

**VoiceOver:** <i class="timecode">[00:27:07]</i> Link, Issues. You are currently on a link. To click this link, press Control-Option-Space. Bullet, 3. Link.

**Ben:** <i class="timecode">[00:27:14]</i> Oh, there we go.

**VoiceOver:** <i class="timecode">[00:27:14]</i> Bullet. You are current— Link, Pull Requests. Bullet, 4 of— Link.

**Ben:** <i class="timecode">[00:27:19]</i> What's up?

**Michael:** <i class="timecode">[00:27:20]</i> We still got the bullets in there, which is kind of like, you know, we'll figure out the styling later.

**Ben:** <i class="timecode">[00:27:23]</i> Yeah!

**Michael:** <i class="timecode">[00:27:23]</i> But yeah, that's always kind of like irritating, 'cause it'll stop on each of those as well with the tabbing.

**Ben:** <i class="timecode">[00:27:28]</i> Yeah, so we added the `<ul>` treatment and it told us how many items were in this navigation, which is excellent. Lets me know my progress in this. Because maybe if the `<nav>` only has, like, two things in it, right, it's not the end of the world if I have to tab through those. If it's, like, ten things, ehhhh. Not great.

**Michael:** <i class="timecode">[00:27:50]</i> Yeah, yeah. And then sometimes, you know, I mean it kind of can provide some useful context, right? Like, you know, knowing where it is in the thing, you know, whether it's at the front of the list or the back of the list or the middle of the list, like knowing all that kind of stuff can be helpful in, in kind of wayfinding.

**Ben:** <i class="timecode">[00:28:05]</i> Yes. Alright, gonna kill VoiceOver again.

**Michael:** <i class="timecode">[00:28:08]</i> Yeah, kill VoiceOver.

**VoiceOver:** <i class="timecode">[00:28:09]</i> VoiceOver off.

**Michael:** <i class="timecode">[00:28:11]</i> I'm going to do another thing, or we're going to do another thing that you had taught me, which is to now link the unordered list with the navigation. And this provides, like, another little nicety where, by tying together the list with the ID, we can effectively name the list. So when it's reading the list, it'll use the `aria-label` name for the… I forgot it again! I forgot it again!

**Ben:** <i class="timecode">[00:28:43]</i> For the landmark!

**Michael:** <i class="timecode">[00:28:44]</i> Landmark! I keep wanting to call it "region." <i class="brackets">[chuckles]</i> Okay, so to do this, what we'll do is we'll add an ID to our `<nav>` element.

**Ben:** <i class="timecode">[00:28:57]</i> Alright.

**Michael:** <i class="timecode">[00:28:58]</i> And this can be anything. We can call it, I mean, I think in the demo I have it as "repositoryNav" or "repository-nav." You could do repository camelcase "Nav." However you want to do it.

**Ben:** <i class="timecode">[00:29:11]</i> Yeah.

**Michael:** <i class="timecode">[00:29:11]</i> And then in the `<ul>`, we'll use another ARIA attribute, which is `aria-labelledby`.

**Ben:** <i class="timecode">[00:29:17]</i> Alright.

**Michael:** <i class="timecode">[00:29:21]</i> And use that same string, so they're tied together with strings.

**Ben:** <i class="timecode">[00:29:26]</i> So our `<nav>` is named "Repository," thanks to the `aria-label`.

**Michael:** <i class="timecode">[00:29:31]</i> Yep.

**Ben:** <i class="timecode">[00:29:31]</i> And the unordered list is pointing to the `<nav>` for its name. So it's saying, "Whatever the `<nav>`'s name is, this too will be my name."

**Michael:** <i class="timecode">[00:29:40]</i> Yup.

**Ben:** <i class="timecode">[00:29:41]</i> Interesting!

**Michael:** <i class="timecode">[00:29:43]</i> Yup. You taught me that. You taught me that.

**Ben:** <i class="timecode">[00:29:46]</i> Mhmm.

**Michael:** <i class="timecode">[00:29:47]</i> I hope that I learned it right and I'm not teaching it incorrectly now.

**Ben:** <i class="timecode">[00:29:50]</i> We'll see! Doing something like this is a little surprising to me, like, pointing to another thing's, like, `aria-label`. I don't know that that's what I necessarily taught, but that's fine!

**Michael:** <i class="timecode">[00:30:01]</i> <i class="brackets">[chuckles]</i> Maybe I learned it wrong! You know, there's some… I've definitely learned a thing or two wrong in my life.

**Ben:** <i class="timecode">[00:30:10]</i> It's possible.

So the way I'm going to validate this — This is an alternate way that you can validate some of the accessibility stuff that you've got going on — is by peeking at the accessibility tree. I'm in my Elements tab. This should hopefully be very familiar. I'm going to go ahead and select the `<ul>` here, and then I'm going to go into, there's this little, like, chevron over here this. And there's just one more tab that's just hidden away, and it's called Accessibility. This opens up the accessibility tree, which is the browser's, like, alternate version of the DOM exposed specifically to assistive technologies. So this is a way you can kind of validate, like, what names are different elements getting, and where is it getting it from.

So our list here has the name "Repository," which it's getting from the navigation. So I'm presuming everything worked fine because we can see that it's working out that way in the accessibility tree.

**Michael:** <i class="timecode">[00:31:04]</i> Yep.

**Ben:** <i class="timecode">[00:31:04]</i> So this is a way — it won't replace screen reader testing, but I think it's a fast way to get a lot of information. Same as, like, when you're looking at, like, the CSS styles and you want to see, like, what are all the files that are giving me these rules and stuff like that. I find that this is a very similar validation experience.

**Michael:** <i class="timecode">[00:31:22]</i> Yeah, I think that's a great point. Like, when you… Especially for things like this, where you just want to validate that it got hooked up properly, like there's not, like, a typo in there and you don't wanna have to go through that whole process again, seeing it right here is so nice, because it's like, "Okay, cool. It's hooked up." And then you can kind of like, kind of queue up all of those big things that you want to test, you know, all at once, knowing that in fact this little piece is, you know, effectively done as far as the browser's concerned.

**Ben:** <i class="timecode">[00:31:47]</i> Yeah! Alright, cool.

**Michael:** <i class="timecode">[00:31:50]</i> Cool. Okay, so what we have so far — I'm just going to recap real quick. We have our, you know, our `<nav>` that has an `aria-label` "Repository." It's getting the "navigation" part for free, so when you kind of search by landmark, it's going to say "Repository navigation." It's hooked up to our unordered list via `aria-labelledby`. We have that unordered list with the list items to provide a count. So it'll say, like, you know, "link, 3 of 4" or "current page, 3 of 4," you know, and then read, you know, "Pull Requests." And then we have all of our links. And then we have `aria-current`, which is actually providing that, you know, this is the current page.

Okay, cool. So I think that we got pretty much everything that we wanted to talk about with links.

**Ben:** <i class="timecode">[00:32:39]</i> Mhmm.

**Michael:** <i class="timecode">[00:32:40]</i> Then let's see also… unordered lists. Now I think at this point we kind of have everything we need and we can probably jump into styling.

**Ben:** <i class="timecode">[00:32:50]</i> Okay!

**Michael:** <i class="timecode">[00:32:50]</i> Do you feel comfortable going that option now?

**Ben:** <i class="timecode">[00:32:52]</i> Let's do it!

**Michael:** <i class="timecode">[00:32:52]</i> Okay, cool. Cool, so let's open up a new stylesheet.

**Ben:** <i class="timecode">[00:32:58]</i> Gonna call this `nav-styles.css`…

**Michael:** <i class="timecode">[00:33:02]</i> Perfect.

**Ben:** <i class="timecode">[00:33:03]</i> …so as not to compete with our styles.css. And I'm just going to go ahead and bring that in. Then that's going to be… Look at that! Boom.

**Michael:** <i class="timecode">[00:33:14]</i> Beautiful. You're so you're so adept at this…

**Ben:** <i class="timecode">[00:33:17]</i> Emmet shortcuts, my friend. Emmet shortcuts.

**Michael:** <i class="timecode">[00:33:23]</i> It's funny, I mean, all of these skills I used to be so versed in and then, like, the more time I spent in frameworks, the more, it was just like, I don't even… I could not write a `<link>` tag to save my life right now.

**Ben:** <i class="timecode">[00:33:35]</i> Nobody tell Ryan Florence.

**Michael:** <i class="timecode">[00:33:37]</i> Is it `rel` with a `ref`? Or no, it's an `href`, right?

**Ben:** <i class="timecode">[00:33:43]</i> It's `href` to get the file, `rel` to tell the browser what kind of thing this resource is.

**Michael:** <i class="timecode">[00:33:49]</i> Yeah. I only remembered because I literally just saw you finish it, so. <i class="brackets">[laughts]</i>

**Ben:** <i class="timecode">[00:33:55]</i> Alright, let's make some styles!

**Michael:** <i class="timecode">[00:33:57]</i> Let's make some styles. Okay, so for the first thing is, we noticed like right away that we have a little bit of an irritation with our dots, right? It's going to stop on each of those dots.

**Ben:** <i class="timecode">[00:34:08]</i> Mhmm.

**Michael:** <i class="timecode">[00:34:09]</i> I want to get those out of the way. We can style these however you like. We can do them with classnames. We can do them — I mean, my preferred, and the way I think that it is in the project, is with attribute selectors. So we could go that route—

**Ben:** <i class="timecode">[00:34:23]</i> Okay!

**Michael:** <i class="timecode">[00:34:23]</i> —or just do classes, if you think that that would land.

**Ben:** <i class="timecode">[00:34:27]</i> However you'd rather do it.

**Michael:** <i class="timecode">[00:34:29]</i> Alright, let's use attribute selectors, 'cause attribute selectors slap hard.

**Ben:** <i class="timecode">[00:34:33]</i> They do.

**Michael:** <i class="timecode">[00:34:35]</i> Okay, so attribute selectors are sweet. Let's open up, let's see, open up some braces. That's how we write an attribute selector. And let's hide all of this under the data attribute, or `data-` prefix, I guess. And we'll call this… Let me see… Gotta open up my stylesheet to see kind of, like, what I was thinking for this. I think we might go a little bit verbose on this—

**Ben:** <i class="timecode">[00:35:06]</i> Okay!

**Michael:** <i class="timecode">[00:35:07]</i> —and call it main nav…  so `main-nav--list`. That's kind of like a BEM-ish convention, so, like, list is going to be a child of, like, you know, the main nav, 'cause it has two dashes in it.

**Ben:** <i class="timecode">[00:35:25]</i> Okay.

**Michael:** <i class="timecode">[00:35:25]</i> And then, yeah. So open up those curly braces.

**Ben:** <i class="timecode">[00:35:29]</i> You know what I'm going to do? I'm actually going to open these things up side by side so we can see both the styles and the markup.

**Michael:** <i class="timecode">[00:35:37]</i> Okay, cool, cool, cool. Perfect, perfect.

**Ben:** <i class="timecode">[00:35:39]</i> What are we applying this to? Does this go on the `<ul>`?

**Michael:** <i class="timecode">[00:35:42]</i> That's gonna, yeah, that's going to be on the navigation element.

**Ben:** <i class="timecode">[00:35:46]</i> Got it.

**Michael:** <i class="timecode">[00:35:47]</i> Or, I'm sorry. No, no, you're right, the `<ul>`. You're a step ahead of me. As usual.

**Ben:** <i class="timecode">[00:35:53]</i> Well, it said "list" and so I assumed list. There we go. Okay, cool.

**Michael:** <i class="timecode">[00:36:00]</i> Okay, cool. So we have `main-nav--list` as our selector, and we're going to do kind of a pretty conventional unset of the list. We're going to do `margin: 0`, `padding: 0`. You might have like a better way to do this. This is pretty, like, common. And then `list-style-type` is `none`. That's going to get rid of the bullets.

**Ben:** <i class="timecode">[00:36:27]</i> Fun little tidbit I explored on Stephanie's stream yesterday: In Safari, doing this will cause VoiceOver to forget that your list is a list. This is intended behavior. Don't worry about it.

**Michael:** <i class="timecode">[00:36:39]</i> <i class="brackets">[laughs]</i> Well, this is actually great in our case where it's not really a list. We just want the numbers.

**Ben:** <i class="timecode">[00:36:45]</i> Mhmm.

**Michael:** <i class="timecode">[00:36:47]</i> Okay, and then we're going to display: flex this.

**Ben:** <i class="timecode">[00:36:49]</i> Alright!

**Michael:** <i class="timecode">[00:36:50]</i> And then, one of the  greatest, most spiteful CSS properties of all: `white-space: nowrap`, all one word.

**Ben:** <i class="timecode">[00:37:02]</i> Alright!

**Michael:** <i class="timecode">[00:37:04]</i> <i class="brackets">[chuckles]</i> Okay, cool! So, let's save that and jump back to our thing, our browser, and then…

**Ben:** <i class="timecode">[00:37:14]</i> Lovely!

**Michael:** <i class="timecode">[00:37:15]</i> Yeah, they're all side by side. That's exactly what we want from those.

**Ben:** <i class="timecode">[00:37:19]</i> Alright!

**Michael:** <i class="timecode">[00:37:22]</i> Now, there's a bunch of things that we can, like… I'm not sure… Okay, I want to stick to the main stuff right now, because there's a lot of things that we can do. And this is where, like, the example code gets a little bit kind of convoluted quickly because of, like, all the icons and stuff that we did. So I want to make sure that we cover our bases first for this main navigation stuff.

**Ben:** <i class="timecode">[00:37:43]</i> Okay.

**Michael:** <i class="timecode">[00:37:44]</i> So let's add another one for link. We'll do `data-main-nav--link`.

**Ben:** <i class="timecode">[00:37:52]</i> And is this going on each of our anchor tags?

**Michael:** <i class="timecode">[00:37:56]</i> Correct. Or on each of our… yes, anchor tags.

**Ben:** <i class="timecode">[00:38:01]</i> Alright. Here, I *can* actually use some VS Code shortcuts here. There we go. That did absolutely nothing! Alright, anyways, yeah. So what styles are we going to apply to our links? 

**Michael:** <i class="timecode">[00:38:22]</i> Okay, so for the link let's just do a little bit of padding for now. I think that's probably most of it, 'cause right now they're all jammed together, unfortunately.

**Ben:** <i class="timecode">[00:38:30]</i> Mhmm.

**Michael:** <i class="timecode">[00:38:31]</i> So we'll add a little bit of `padding-left` and `right`. And we can actually — You know, why don't we explore, there's the logical selectors now.

**Ben:** <i class="timecode">[00:38:40]</i> Okay!

**Michael:** <i class="timecode">[00:38:40]</i> So I think that this is inline, so it's `padding-inline`.

**Ben:** <i class="timecode">[00:38:44]</i> I haven't actually played with these.

**Michael:** <i class="timecode">[00:38:47]</i> Yeah, and so then I think you'd give it a start and end, so that'll be — or I guess we can just do 1? `1rem` or something like that? That's probably fine.

**Ben:** <i class="timecode">[00:38:55]</i> We'll see if that works. Niiice!

**Michael:** <i class="timecode">[00:38:59]</i> Yeah! How cool is that? Yeah, so block is the other one. That does top and bottom, and so you'd start there, which is really cool. So I love these logical ones because, you know, when you're like reordering stuff or, like, if you're working in like an app that supports left-to-right, you know, like top, bottom, left, and right is kind of like, "Uh… WTF?" You know? So these follow more of that, like, flex gap model, where you have, you know, block and inline, and you're going to have a start and an end. And so those are all going to be relational to the direction of the content, which is super cool.

**Ben:** <i class="timecode">[00:39:34]</i> Absolutely.

**Michael:** <i class="timecode">[00:39:36]</i> Yeah, which is, I freaking love it.

So now, what we're going to do is we want to turn the text decoration off on this so that we can focus our… we can give additional visual priority to the current page.

**Ben:** <i class="timecode">[00:39:53]</i> Okay!

**Michael:** <i class="timecode">[00:39:53]</i> So let's do that with a `text-decoration: none`.

**Ben:** <i class="timecode">[00:40:00]</i> Alright, and that should remove our underlines. Excellent.

**Michael:** <i class="timecode">[00:40:04]</i> Yep.

**Ben:** <i class="timecode">[00:40:05]</i> Sorry about the swiping back and forth, y'all. Let me know if that's too much and I can figure out a different way to do that.

**Michael:** <i class="timecode">[00:40:11]</i> Yeah, so from here, we got kind of a fun one. We're gonna use another data attribute selector, and this is going to target — what was it? —  `aria-current "page"`.

Okay, cool. Yeah, perfect. That's exactly right. So you'd put the attribute in there and you put equals and you put, you know, whatever value it is that you want to target. 

**Ben:** <i class="timecode">[00:40:40]</i> Mhmm. 

**Michael:** <i class="timecode">[00:40:41]</i> This could be, you know, we could just do just the attribute and that would look for, you know, truthiness, so any one of the values that you've put in there is going to get the selection, but we really just want this to be for "page," when we're on the current page.

Now we're going to be responsible for actually putting this attribute on there, whether that being like, you know, JavaScript, you know, with a JavaScript router or server-side. So we'll still have to control this with code, which we won't cover today. But the selector is going to be looking for specifically that "page."

**Ben:** <i class="timecode">[00:41:16]</i> Mhmm.

**Michael:** <i class="timecode">[00:41:16]</i> So I'm going to throw some styles at you. We're going to do, let's see… Let's just change the… Let's add a border, right? So we'll do a border-bottom: 2px solid. And then the GitHub color is rgb(249, 130, 108).

**Ben:** <i class="timecode">[00:41:42]</i> Alright! Nice, healthy orange.

**Michael:** <i class="timecode">[00:41:47]</i> <i class="brackets">[chuckles]</i> Yeah. And we'll do a font-weight: bold.

**Ben:** <i class="timecode">[00:41:50]</i> Ooh, okay! Love it.

**Michael:** <i class="timecode">[00:41:55]</i> Cool, cool, cool, cool. Awesome.

**Ben:** <i class="timecode">[00:41:56]</i> You know what I'm going to do? Because I don't really fancy having to, like, slide back and forth every time. 

**Michael:** <i class="timecode">[00:42:03]</i> Put them side-by-side?

**Ben:** <i class="timecode">[00:42:05]</i> I'm actually… I'm gonna pull… Yeah, so here's what we've got so far. I'm gonna pull this off screen and then not truly maximize this. And that way, whenever things change, I can just drag this in. That way, less sliding back and forth.

**Michael:** <i class="timecode">[00:42:23]</i> Awesome. Awesome, awesome, awesome.

Okay, cool. So we're actually looking pretty good so far. So we've been able to kind of, like, do the main styles, which is to, you know, just kind of like put it all on a row, you know, size the things as we want, and then also, like, based on the `aria-current "page"` attribute, kind of give it the styles we want for kind of the focused selection.

Let me go back to our README and see what else we want to do. Now, there's a bunch of additional things that we could do. We're running, like, kind of low on time, so I would leave it up to you. Let's see, we've covered most of it. We could add in SVG or we could do the… The bubble might be easier, 'cause we don't have to load in the actual SVGs. So…

**Ben:** <i class="timecode">[00:43:14]</i> Okay, let's shoot for the bubbles.

**Michael:** <i class="timecode">[00:43:17]</i> Okay.

**Ben:** <i class="timecode">[00:43:17]</i> 'Cause I think, yeah, I think the way we're handling that accessibly is going to be interesting to talk about.

**Michael:** <i class="timecode">[00:43:25]</i> Yeah. Okay, cool, cool, cool. Let's do that. I agree. That was kind of a fun one. Icon stuff, we've covered in the past.

**Ben:** <i class="timecode">[00:43:33]</i> Yeah. For context here, we're talking about these little bubbles that say, like, for instance, "17" next to Issues, and stuff like that.

**Michael:** <i class="timecode">[00:43:41]</i> Yeah.

**Ben:** <i class="timecode">[00:43:41]</i> We have talked about accessible icons before. Let me actually get the video for that. God, what did I call this? accessible-svgs-react? Is that the slug? Did I get it? No, it's not.

**Michael:** <i class="timecode">[00:43:58]</i> Oooh! I can't remember.

**Ben:** <i class="timecode">[00:44:01]</i> It's this one. accessible-svgs-react.

**Michael:** <i class="timecode">[00:44:06]</i> Ahh.

**Ben:** <i class="timecode">[00:44:06]</i> Almost there. So go watch that one. This site's still very much so a work in progress, but if you want to learn more about icon accessibility, that's a good one to do. 

**Michael:** <i class="timecode">[00:44:15]</i> That one was super fun. We covered a lot of ground in that one as well, and it was very Reacty-focused.

**Ben:** <i class="timecode">[00:44:22]</i> Mhmm.

**Michael:** <i class="timecode">[00:44:23]</i> Yeah, so the next part of it… So this brings up an interesting question. Like, a question that I have in naming things as a designer–developer, right?

**Ben:** <i class="timecode">[00:44:32]</i> Okay!

**Michael:** <i class="timecode">[00:44:32]</i> Because we saw the… You know, when we name things too visually, we kind of lock into a certain, like, way of thinking or an implementation. We saw this with the logical padding selectors, right? So `padding-inline` is better than, like, you know, `right`, `left`, `top`, and `bottom`, because those might get inverted based on the way the content is being presented. And so, you know, even just now I talked about this as, like, a bubble, right? Because we see it from the perspective of, like, a bubble. But if you're using assistive technologies, like, what is this thing?

**Ben:** <i class="timecode">[00:45:06]</i> Mmm.

**Michael:** <i class="timecode">[00:45:07]</i> And so this is an area where I feel like naming can be really helpful in terms of leading your team to thinking more with accessibility in mind. Because if we just call this a "bubble," then we just, we only ever really think about the visual representation. Now, I didn't know what to call it, honestly. Like, this is a hard thing for me to call it. And so I kind of like went with, like, a meme name, <i class="brackets">[chuckles]</i> which is, I've been calling these "augmenters," mostly because I have this, like, cell in my brain that anytime I don't know how to, like, name something that, like, extends something else, I think about hooks and how one of the original names for hooks was "augmenters" and how everybody hated it.

**Ben:** <i class="timecode">[00:45:56]</i> Yeah.

**Michael:** <i class="timecode">[00:45:56]</i> But Sebastian says they'll still be augmenters in his mind for forever. So, anyway, so I went with "augmenters." I would love — If you can think of a better name, I would love to know, and I'm sure that, you know, the people on my team who have to use this would love to know as well. 

**Ben:** <i class="timecode">[00:46:14]</i> It's interesting, 'cause the thing that comes to mind for me is "badge." But "badge" also is an overloaded term cause that, like, also refers to, like, notification bubbles and stuff like that that aren't exactly the same thing. And "badge" is also still very much so a visual descriptor of this. Yeah, it's hard. That's hard.

**Michael:** <i class="timecode">[00:46:33]</i> It's almost like a hint. I kind of—

**Ben:** <i class="timecode">[00:46:35]</i> Ehhh… I don't know. I feel like "hint" feels a little too tooltippy for me.

**Michael:** <i class="timecode">[00:46:41]</i> Sure, sure. Sure. I also, I played around with "wormhole." <i class="brackets">[chuckles]</i> Because it was like—

**Ben:** <i class="timecode">[00:46:48]</i> What?!

**Michael:** <i class="timecode">[00:46:50]</i> But, like, because it's like a lens into like the content that's, like, behind it, right?

**Ben:** <i class="timecode">[00:46:57]</i> Hm.

**Michael:** <i class="timecode">[00:46:57]</i> Like, so you've got a list of things and it's showing you that there's, like, 17 items in there that are, like, new. Like, you're seeing the "17" to kind of indicate that there's… It's stupid. It's stupid.

**Ben:** <i class="timecode">[00:47:11]</i> Amazing. Okay, so we're going to call these "augmenters," but yeah, generally we're describing the little badges or bubbles or whatever that go on each of those tabs.

**Michael:** <i class="timecode">[00:47:22]</i> Yes, exactly. So why don't we add one to maybe Issues or Pull Requests?

**Ben:** <i class="timecode">[00:47:27]</i> Yeah!

**Michael:** <i class="timecode">[00:47:28]</i> Issues, Pull Requests, or Discussions is probably going to be the most obvious place where you would have those.

**Ben:** <i class="timecode">[00:47:33]</i> Let's do Issues.

**Michael:** <i class="timecode">[00:47:36]</i> <i class="brackets">[chuckles]</i> "Wormhole sparks joy." 

<i>[both laugh]</i>

**Ben:** <i class="timecode">[00:47:40]</i> Thank you, Joe. Thank you so much.

**Michael:** <i class="timecode">[00:47:46]</i> "Wormhole" it is. Maybe I'll just call it "WH" and then people can just wonder, you know. Acronymizing things is great.

Okay, so we're gonna… <i class="brackets">[chuckles]</i> Back to work!

**Ben:** <i class="timecode">[00:47:54]</i> Yes.

**Michael:** <i class="timecode">[00:47:55]</i> We're gonna add a `<span>` below this. And usually, any time I add a `<span>` around one piece of content inside of another element, I usually like to add it around all of them.

**Ben:** <i class="timecode">[00:48:07]</i> Okay.

**Michael:** <i class="timecode">[00:48:07]</i> I don't know. That's just a… I dunno, maybe that's just a nervous tic of mine, but I tend to like to do that, just so that I don't accidentally try to style just the plain text from the parent selector. I'm always forced to kind of, like, add a… I'm always *incentivized* to add a selector directly to the node that I want to style directly. So yeah.

So from there… So we have our, what is it? We have our Pull Eequests, but then also… So let's put a number in here like 2, I guess. And then we can add a selector. I don't know, do you wanna get playful with it and call it `main-nav--wormhole`?

**Ben:** <i class="timecode">[00:48:52]</i> Oh god, yes. You know I do.

**Michael:** <i class="timecode">[00:48:55]</i> <i class="brackets">[chuckles]</i> Perfect! And then we'll add some styles for that in CSS.

Now, I'm not sure… Maybe I should… Let's see, I can probably copy this to you in Zoom chat. This might not even look good because we don't have the rest of it styled, but I'll just kind of paste — or, I guess you can copy and paste it from the other file.

**Ben:** <i class="timecode">[00:49:25]</i> Yeah, let me do that. Let me find that other file real quick and just nab that. It's probably going to be, like, "augmenter" in here.

**Michael:** <i class="timecode">[00:49:34]</i> "Augmenter," yeah, yeah, yeah. 

**Ben:** <i class="timecode">[00:49:36]</i> Here. Okay. Lots of stuff.

**Michael:** <i class="timecode">[00:49:39]</i> Yeah, so it's lots of stuff in there. And it might be kind of funky because we, you know, might need to add "block" to the link or something like that.

**Ben:** <i class="timecode">[00:49:48]</i> Okay!

**Michael:** <i class="timecode">[00:49:50]</i> Or `display: flex`, I think maybe is what I had.

**Ben:** <i class="timecode">[00:49:54]</i> Alright.

**Michael:** <i class="timecode">[00:49:54]</i> Yeah. So that should probably get us close enough. Oh, we might have to add a line height, now that I'm thinking about it.

**Ben:** <i class="timecode">[00:50:02]</i> Oh, and I have to — There we go. Line height… Which line height are we adding?

**Michael:** <i class="timecode">[00:50:08]</i> Oh, sorry, for the link.

**Ben:** <i class="timecode">[00:50:11]</i> Okay. Where is your…?

**Michael:** <i class="timecode">[00:50:15]</i> And we can do `line-height: 3` — It looks like I have two. There's two `line-height` values in there on accident. We want `line-height: 3`. Or you can just copy the whole thing.

**Ben:** <i class="timecode">[00:50:26]</i> Alright, so `line-height: 3`. Got it. So we've added a whole bunch of styles, but mostly what we're adding here is we've got our little wormhole here. 

**Michael:** <i class="timecode">[00:50:33]</i> Yeah. That's really to make sure that the height is right so that — Oh, never mind. It didn't work anyway. You know, that's fine though, because for our purposes today, that part of it doesn't really matter a whole lot. And people have the benefit of being able to kind of—

**Ben:** <i class="timecode">[00:50:46]</i> Yeah.

**Michael:** <i class="timecode">[00:50:46]</i> —see the full example, you know, and tailor it to their needs.

Okay, so that's fine. So what we want to talk about is the accessibility part of this. And this part is actually kind of fun. It's a little bit odd, but we'll kind of, you know, work it out together.

**Ben:** <i class="timecode">[00:51:03]</i> Yeah! Can I give this a shot with VoiceOver?

**Michael:** <i class="timecode">[00:51:07]</i> Yeah, yeah.

**Ben:** <i class="timecode">[00:51:08]</i> Let's do that.

**VoiceOver:** <i class="timecode">[00:51:10]</i> VoiceOver on System Preferences, Accessibility. Chrome, Document. Leaving Document. Document. localhost— Document.

**Ben:** <i class="timecode">[00:51:16]</i> What? Amazing.

**VoiceOver:** <i class="timecode">[00:51:17]</i> You are currently— Leaving toolbar item palette. Current page, link, Code. List, Repository, 4 items. Visited, link, Issues 2. Chrome has new— Visited, link, Pull Requests. You are currently— Visited, link, Discussions.

**Ben:** <i class="timecode">[00:51:30]</i> Okay.

**VoiceOver:** <i class="timecode">[00:51:30]</i> You are currently on a link.

**Ben:** <i class="timecode">[00:51:31]</i> So it did say "Issues 2," which I don't think is the worst thing in the world, right? But I think I can also, if I navigate back here, like, I can navigate to each piece of the Issues. Like, every `<span>` inside the Issues link, like, individually.

**Michael:** <i class="timecode">[00:51:47]</i> Okay.

**Ben:** <i class="timecode">[00:51:47]</i> Let me see if we can do that.

**VoiceOver:** <i class="timecode">[00:51:49]</i> Visited— visited, link, Issues 2. You are currently on a link— In visited, link, Issues 2, 2 items, 2. 2.

**Ben:** <i class="timecode">[00:51:59]</i> Okay, I don't know then.

**VoiceOver:** <i class="timecode">[00:51:59]</i> 2, 2, 2. Out of visited— current— visited— in visited, link, 2 items, 2.

**Ben:** <i class="timecode">[00:52:06]</i> Maybe not. I'm not the world's most familiar person with VoiceOver arrows, but — let me kill VoiceOver real quick — but yeah, so the…

**VoiceOver:** <i class="timecode">[00:52:15]</i> VoiceOver off.

**Ben:** <i class="timecode">[00:52:16]</i> There we go. So yeah, we did get "Issue 2," which is not the end of the world in terms of naming. But it sounds like there's some things you want to do to spruce that up a bit better. 

**Michael:** <i class="timecode">[00:52:26]</i> Yeah, and so it's not — I mean, again, like you said, this isn't the end of the world. I think "Issues 2" is probably fine, and you know. So you don't have to go, like, all wild on this. However, there was kind of a fun little thing that we played around with, which I kind of liked, which was this little, like, interplay, I guess, between this element and then also an additionally visually hidden element. So we left this in play, no matter what, and then we added another element afterwards, and we just used kind of like an off-the-shelf visually hidden styling.

**Ben:** <i class="timecode">[00:53:04]</i> Okay.

**Michael:** <i class="timecode">[00:53:05]</i> And we can put — I have right now "`data-visually-hidden`," if you wanted to copy and paste that from the kind of source code.

**Ben:** <i class="timecode">[00:53:13]</i> Let's do that. So, for those who are unfamiliar with this, if you want to visually hide things from sighted users but at the same time… So, sorry, if you want to visually hide things for sighted users but leave it exposed for assistive technology users, you can't resort to things like `display: none` or `visibility: hidden` or any of the other tricks you would expect because the browser uses those CSS rules as cues to hide stuff from the assistive technology too. 'Cause it's like, "Oh, well, clearly the intent here is that *no one* should be able to get this." So you have to resort to… There are various tricks, various hacks, like you'll find a lot of people use one with, like, `clip-path` and `clip` here and `overflow: hidden`. Basically the idea is you make the container that the text is in really, really small and also remove any of the overflow, so that way it's not, like, *technically* invisible. It's just the window to see this thing is impossibly small.

**Michael:** <i class="timecode">[00:54:21]</i> Yeah.

**Ben:** <i class="timecode">[00:54:21]</i> And that's kind  of the workaround here. So that's what we're doing here.

**Michael:** <i class="timecode">[00:54:25]</i> Yeah, and I just pasted a link in chat to where I pulled this from. This is not something that I wrote. There are plenty of articles on the internet that talk about a, you know, visually hidden, you know, selector. And so, yeah. And so it goes into a little bit of depth of, like, why you would care about this and the technique that's being used.

So yeah, so for here, what we do is we just kind of write what we want to be read as. So in this case, you know, in the, you know, source material for Issues, you know, we have the number 2 already in there. And then I just add "open issues" to this right here.

**Ben:** <i class="timecode">[00:55:06]</i> Okay.

**Michael:** <i class="timecode">[00:55:08]</i> And then that should theoretically, you know, read, "link, 2 of 3, Issues 2 open issues."

**Ben:** <i class="timecode">[00:55:16]</i> Alright, let's give it a shot. Let's put this to the test.

**VoiceOver:** <i class="timecode">[00:55:20]</i> VoiceOver on System Preferences, Access— Chrome, Document, Google— Visited, link, Issues 2 open issues. You are currently on a link. To—

**Ben:** <i class="timecode">[00:55:28]</i> Nice. Let me kill VoiceOver.

**VoiceOver:** <i class="timecode">[00:55:29]</i> VoiceOver off.

**Michael:** <i class="timecode">[00:55:31]</i> Yeah, so, now that I'm thinking about that, it's possible that we could even go with, like, some kind of, like, ARIA description or whatnot, and take that further—

**Ben:** <i class="timecode">[00:55:39]</i> Yeah.

**Michael:** <i class="timecode">[00:55:39]</i> —and get that, like, nice little pause that, you know, ARIA description, you know, really gives you. But the thing that we, you know, that we really wanted to incorporate here is the ability to, I guess, like, augment these numbers with a little bit of kind of, like, a visual communication about, like, okay, like, "Is it two open issues?" Like, what types of issues is this indicating we have on this page? So, yeah. So, that's kind of the big win for doing that.

**Ben:** <i class="timecode">[00:56:10]</i> Yeah!

**Michael:** <i class="timecode">[00:56:10]</i> And this is the markup that kind of makes that possible to be able to style the thing but then also kind of append some text as well.

**Ben:** <i class="timecode">[00:56:19]</i> So, if you're looking for a way to… Let me actually move the styles here, since I don't think we're going to be doing much more styling today.

**Michael:** <i class="timecode">[00:56:27]</i> Yeah!

**Ben:** <i class="timecode">[00:56:27]</i> But if you're looking for a way to, like, augment this even further, what you could do is… Actually, maybe how I would do this as I would have down here, outside the anchor tag, I might have just straight up the text "2 open issues." I would give this an ID of, like, "open-issues." And also what I'm going to do is I'm going to apply the `hidden` attribute. So this does… This is effectively identical to using `display: none`. It hides it visually and also removes it from assistive technologies.

**Michael:** <i class="timecode">[00:57:01]</i> Cool.

**Ben:** <i class="timecode">[00:57:02]</i> And then what I would do next is I would go, in here, I would say, okay, I'm going to actually going to make this aria hidden, so that way assistive technology users don't get our "2" at all. So currently the only experience that assistive technology users have is they get to our link and they hear "Issues."

**Michael:** <i class="timecode">[00:57:23]</i> Mhmm.

**Ben:** <i class="timecode">[00:57:23]</i> That's it. That's the name of the link. It's "Issues." But I can come in here and I can say `aria-describedby`. This is in my anchor tag here.

**Michael:** <i class="timecode">[00:57:33]</i> Yeah.

**Ben:** <i class="timecode">[00:57:33]</i> I'm going to give it the ID of my little screen reader text down here, which is "2 open issues." So you can't actually navigate to this node with the assistive technology, but it then provides a full description to assistive technology users, and in the form of a description, which basically it's treated as, like, optional information that you won't get in all browsing modes. But if you linger on this link for a bit, you'll be told, like, "2 open issues." And we'll see that right now!

**VoiceOver:** <i class="timecode">[00:58:10]</i> VoiceOver on System Preferences, Accessibility. Chrome, Document. Visited, link, Issues. Chrome has new window. 2 open issues.

**Ben:** <i class="timecode">[00:58:17]</i> There we go.

**VoiceOver:** <i class="timecode">[00:58:18]</i> You are currently on a link. To click this link, press Control-Option-Space.

**Ben:** <i class="timecode">[00:58:22]</i> This has the added advantage of, if I open up the Rotor…

**VoiceOver:** <i class="timecode">[00:58:26]</i> Landmarks menu. Articles. Window spots. Links menu.

**Ben:** <i class="timecode">[00:58:29]</i> The name of our link is "Issues." We haven't introduced any clutter. Right? This *is* the Issues like, which is how sighted users would describe this link to other people.

Another thing I like about this is, these link names, like, the name of the link, that's how you would target the link if you were using speech control. Right? And so if you're using speech control, you want to be able to predict what the name of the link is going to be. So I, as a user, what to be able to say, like, "click on link Issues," right? I don't want to have to guess that there's, like, this hidden text in there that says "2 open issues." So this makes, I think, the link a little more predictable. There's just, you have to do more kind of workarounds to make that happen.

**Michael:** <i class="timecode">[00:59:16]</i> Yeah! Yeah, well, hey, thanks for taking us there, because I was not going to, and I didn't really know how to hook it all up, but boy, did I learn!

**Ben:** <i class="timecode">[00:59:25]</i> Yeah!

**VoiceOver:** <i class="timecode">[00:59:25]</i> VoiceOver off.

**Ben:** <i class="timecode">[00:59:26]</i> Let me put in a blogpost in the chat that I wrote that kind of describes that workaround. There we go. Have fun with that one, y'all!

**Michael:** <i class="timecode">[00:59:38]</i> Yes.

**Ben:** <i class="timecode">[00:59:39]</i> Yeah!

**Michael:** <i class="timecode">[00:59:40]</i> Cool! Well, I feel like, you know, we didn't get to all the styling, but the styling is there if you want to use it, and likely, that's the thing that's going to change, you know, for a particular product, right? However, I feel like, you know, we covered a lot of ground and, you know, in particular, were really mindful of the Rotor, which I think is something that is easy to forget but super important on such a critical, like, navigation element like this. How do you feel about where we got, Ben?

**Ben:** <i class="timecode">[01:00:11]</i> Oh, I feel like we did a great job. I love kind of the foray into the semantic markup that we have. And we didn't get very far into the styles, that's fair. But yeah, I feel like we got to kind of see actually how you would actually test and validate this too, which is really nice. It means we're not really attempting accessibility into the void, right? We're actually seeing the impact that this has.

**Michael:** <i class="timecode">[01:00:35]</i> Yeah. Yeah, yeah. Yeah, and honestly, I kind of feel alright that we didn't get to all the styles because that's going to be the thing that, you know, someone's going to have a design that's going to be different depending on your app.

So, that's really fun. And I'm going to have to circle back and actually, you know, implement this cool describedby, because that solves that really nice thing where you get the, like, "Issues," pause, and then, you know, have the name read. And then also the landmark issues, so.

**Ben:** <i class="timecode">[01:01:01]</i> Yes. I'm super excited for— One thing, one little tidbit is, like, we have to do this kind of workaround where we have to, like, create a node here and then we have to immediately, like, prevent anyone from ever seeing this, and then we have to do the, like, `aria-describedby`. This workaround is admittedly clunky, right? Like, no one wants to be, like, introducing extra nodes. What I'm really excited for is there is an active effort to do `aria-description`. This has been in, I believe, ARIA 1.3, which is not out yet but it's, like, the current draft. So hopefully soon we'll be able to use `aria-description` to just be able to say, like, well, the description is going to be "2 open issues."

Worth keeping an eye on, but also worth noting that even when this does go live, like, it's still going to take some time for browsers to update and for assistive technology to support it. So, won't be immediately available, but it will mean that we won't have to do this kind of weird, clunky workaround.

**Michael:** <i class="timecode">[01:02:00]</i> Yeah, and I mean, worth noting, too, that this is, you know, this is one of the benefits that we get for using a component library. Right? And we forget sometimes that this is, like, the beauty of encapsulation, is that we can make a really nice, clean component API for this that just bakes all of this stuff in, and all you have to do is just use the right components and you have accessibility baked into it. And like, I think that if there's one value that we can instill from this is like, you know, when you're thinking about making your components, like, figure out a way that you can do it in a way that you get all the accessibility stuff for free so you don't have to do all this hooking up. Like, all the hooking up is just, like, done for you.

**Ben:** <i class="timecode">[01:02:42]</i> Yes.

**Michael:** <i class="timecode">[01:02:42]</i> And then it's like, "Oh, cool. Like, all this worked and it has all these really nice little, you know, things, and we didn't have to put all of these hidden nodes by hand in there." So, yeah, so as you're doing your, you know, React or Vue or, you know, whatever the next hotness is, you know, consider this as, like, a really big part of that work.

**Ben:** <i class="timecode">[01:03:02]</i> Yes! Absolutely.

Well, Chan, thank you so much for hopping on. This has been fantastic. Y'all, next week Martin Bavio's coming on. We're going to be doing some Figma stuff. I've never actually used Figma, so I'm really excited to see how to build a UI out, design a UI using Figma. So this has  been great.

Y'all, I'm going to put her channel in the chat, but I know Stephanie was planning on streaming right after this. She may have already started out. I'll try to do a raid, but y'all should absolutely go check her stream out. She's been doing some really exciting stuff this week, stuff with, like, Eleventy and stuff like that. So go there after I sign off and I'm going to try to raid her, but I don't know if she's live yet.

So y'all, thank you so much for joining, and I will see you next week. Bye!

**Michael:** <i class="timecode">[01:03:55]</i> Bye!