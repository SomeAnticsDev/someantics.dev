**Ben:** <i class="timecode">[00:00:00]</i> Howdy, howdy, y'all. Welcome back to Some Antics. Today I'm joined by Lucia. Lucia. hi. How's it going? 

**Lucia:** <i class="timecode">[00:00:07]</i> Hey Ben, how are you doing? Doing great!

**Ben:** <i class="timecode">[00:00:10]</i> I'm doing great. I'm looking forward to this one.

Yeah, so, first of all, as we're starting, I wanted to acknowledge that this Thursday is Global Accessibility Awareness Day, and so there's going to be tons of accessibility stuff just throughout the web. You can follow things that are going on using the #GAAD hashtag, and you'll keep up with all of the good accessibility events going on. There's also a conference going on right now called AccessU, which is by Knowbility, and I'm looking forward to hearing what some of those talks were. 

But yeah, today we have Lucia. Lucia, would you mind introducing yourself? 

**Lucia:** <i class="timecode">[00:00:52]</i> Yeah, I'm a software developer in sunny, sunny, Phoenix, Arizona. It's probably going to hit, like, a hundred and something today. And I have had an interest in accessibility since I've started, and I have found that these automation tools that we're gonna show to you today have been a super helpful starting point for learning about accessibility and for making your own websites accessible. 

**Ben:** <i class="timecode">[00:01:16]</i> Good deal! Yeah, so automation is I think such an interesting subject for a lot of people. I feel like there's a lot of developers whose instinct is, "I'm doing this thing. How can I automate? What can I automate?" So we're going to be getting into two specific tools today, but I wanted to, I guess, first have a conversation about what is automated accessibility testing for? And what are some concerns you might have with it, or some things you would look for in an automated testing tool?

**Lucia:** <i class="timecode">[00:01:56]</i> Right, right, yeah. That's a great, great place to start. I introduced it as kind of a starting point for a reason, right? Like it's really good to,… I've found them to be useful for catching some things that might be good starting points, but sometimes on a deeper level, you might need to take a closer look at how you're designing your components or what's in your HTML, right? I think as we go, as we continue coding today, then we'll see some more instances of what I'm talking about and it'll become clearer, right? 

**Ben:** <i class="timecode">[00:02:33]</i> Mhmm. Yeah, I think with, with automation, right, like we're trying to prevent ourselves from having to do a whole bunch of repetitive work, in part because accessibility, testers… Like, that can be a very time-consuming process, and you want to make sure that the people responsible for testing accessibility — including developers, who should be testing accessibility — you want to make sure that they're focusing on high-value problems. And while every problem can cause an impact, it can make the user experience worse for disabled users, certain problems are best solved by humans and certain problems are best solved by computers. And so that, I think that's for me, why I love automated accessibility testing, right, is it lets me focus on problems that are best solved by humans.

Yeah, so we today… Do you wanna kind of walk us through what we're going to be testing and what we're going to be doing? 

**Lucia:** <i class="timecode">[00:03:50]</i> Yeah, we're going to be looking at my portfolio website. It's completely static. It's all CSS and HTML. I think there's, like, five lines of JavaScript for the hamburger up there. And it's deployed on Netlify, but we'll be working on localhost. And we'll be running two automated accessibility testing tools on it. One's a browser plugin. It's called Lighthouse. You may have heard of it. And the next one is from, I believe it's from Deque Systems, and it's called Axe, and it goes in your developer tools. And yeah, we'll take a look at them, see what they have to say, and take a look at the differences between them. 

**Ben:** <i class="timecode">[00:04:27]</i> All right. Yeah, let's, let's go ahead and do that. So, you've mentioned these two tools. Is there one that you'd prefer to start with?

**Lucia:** <i class="timecode">[00:04:36]</i> Yeah, let's start with Lighthouse. I find in general that Lighthouse identifies fewer issues than Axe does, so it would be a good progression, I think, for our stream. 

**Ben:** <i class="timecode">[00:04:47]</i> All right. Yeah. So, if I wanted to run Lighthouse for the first time, how might I do that? 

**Lucia:** <i class="timecode">[00:04:53]</i> Okay, first you'd have to go install it. So you'd have to go google "Lighthouse Chrome plugin," something like that. 

**Ben:** <i class="timecode">[00:05:04]</i> Yeah.

Looks like it just says run it. "Download Chrome"… Looks like it's just there. No installation needed.

**Lucia:** <i class="timecode">[00:05:19]</i> Oh, nice! 

**Ben:** <i class="timecode">[00:05:21]</i> In the Audits tab. Okay. So let's go ahead and give that a try! 

**Lucia:** <i class="timecode">[00:05:28]</i> Yeah.

**Ben:** <i class="timecode">[00:05:29]</i> I'm gonna go just pop open my dev tools here. I'm going to go…

**Lucia:** <i class="timecode">[00:05:34]</i> There we go!

**Ben:** <i class="timecode">[00:05:35]</i> Well, let's it says "Lighthouse," and not "Audits," but I'm sure that's what it is.

**Lucia:** <i class="timecode">[00:05:39]</i> Yeah.

**Ben:** <i class="timecode">[00:05:39]</i> Okay. So when you run Lighthouse, it looks like it's going to generate a report for us. It's got several categories here. Should we build all of these categories or just a view? 

**Lucia:** <i class="timecode">[00:05:53]</i> All of these are helpful, but not all of them are, I find, helpful for accessibility, so let's just uncheck everything but Accessibility. 

**Ben:** <i class="timecode">[00:06:04]</i> Good deal! All right. And then should we run it mobile or desktop? 

**Lucia:** <i class="timecode">[00:06:10]</i> Let's do desktop for now since I believe that's what we're both on, and we could always do mobile as well if we've got time. 

**Ben:** <i class="timecode">[00:06:18]</i> Makes sense to me. All right, so Lighthouse is thinking about this, it's warming up. So it's going to be looking at our page and then we've got a report!

**Lucia:** <i class="timecode">[00:06:27]</i> Yeah! So let's dive into this report. It says, "These checks highlight opportunities to improve the accessibility of your web app. Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged." So this is something you'll see with I think every accessibility tool that I've used, is that they recognize that automation doesn't, you know, cover all of your bases, but it is a good, as I said, a good starting point.

**Ben:** <i class="timecode">[00:06:59]</i> So if automated accessibility tests don't cover all cases, what are some cases that it might cover, and what are some cases it might not cover? 

**Lucia:** <i class="timecode">[00:07:09]</i> Do you see, in the right, do you see the "Links do not have a discernible name" tab there? 

**Ben:** <i class="timecode">[00:07:16]</i> Yeah!

**Lucia:** <i class="timecode">[00:07:16]</i> Okay, click on that.

**Ben:** <i class="timecode">[00:07:21]</i> Okay. 

**Lucia:** <i class="timecode">[00:07:22]</i> So, it's identifying some of the failing elements on my page. Scroll down a little more in the failing elements part, 'cause I think — Oh, that's interesting.  Well, I had thought it identified my — if we scroll up a bit, there's a link up here, right there — which it doesn't seem to have addressed quite yet. But if you click on that one, it'll open up in a new tab without a warning, and that's not a best practice for accessibility. So while it's identified some of the issues with my links, started thinking better names, it hasn't identified this particular issue, so if you go through a page and you're manually test every link, you'll see, "Oh, I'm getting these… browser tabs are intruding on my tabbing experience," right? So that's something that I can manually check. Although this is interesting. It says, it looks like Lighthouse has identified some items to manually check. It says there's ten of them. I wonder if those are available to us. 

**Ben:** <i class="timecode">[00:08:36]</i> Yeah… Sorry, we had a bot in the chat. Unless you were curious in becoming famous. You could buy followers and viewers. I know the place now!

All right, so I'm sorry. You wanted me to check on the additional items to manually check? 

**Lucia:** <i class="timecode">[00:08:57]</i> Yeah. Okay, I like that they have a suggestion for manually checking, 'cause I've never really done this part before. Let's see. It says, "The page has a logical tab order," so that's something to check. "Tabbing through the page…" Yes, good, good things to look at. 

**Ben:** <i class="timecode">[00:09:20]</i> All right, so these are things that it's not even necessarily flagging. It's just like, "Hey, Lighthouse is unable to verify these things."

**Lucia:** <i class="timecode">[00:09:31]</i> Right.

**Ben:** <i class="timecode">[00:09:31]</i> "So here's a checklist for your own manual testing practices."

Exactly.

Okay. 

**Lucia:** <i class="timecode">[00:09:36]</i> Yeah, which, I just, I like that a lot. But we should probably address… Let's just address one of these first failing elements.

**Ben:** <i class="timecode">[00:09:46]</i> Okay. So, "Links do not have a discernible name." So it's saying, "Link text (and alternative text for images when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users." So it's saying these links don't have a discernible name, and if I dive to that link in the markup…

**Lucia:** <i class="timecode">[00:10:09]</i> Right.

**Ben:** <i class="timecode">[00:10:10]</i> …you can see that it has, like, an icon in there, but no text. So a user wouldn't necessarily… Like, if you couldn't see the icon, you wouldn't necessarily know where this was going. 

**Lucia:** <i class="timecode">[00:10:22]</i> So one solution I can think of right now is to, instead of using an icon, maybe just use just text for, you know, here's my GitHub, here's my LinkedIn, here's my Twitter.

**Ben:** <i class="timecode">[00:10:33]</i> Okay! Let's see if we can find those links.

So this is your source code that we've got here and, yeah, you've got, it's all in one page neatly organized. I love this. This is delightful.

Okay, so these are the links in question. So what are you proposing we do? 

**Lucia:** <i class="timecode">[00:10:59]</i> So I would like to remove the icon and put in… So do you think "GitHub" would explain that link well enough, or do you think we need more context?

**Ben:** <i class="timecode">[00:11:13]</i> I think that's a great question. I think "GitHub" would probably be sufficient, especially because people already know that they're on your portfolio site. Right? So if I go to someone's portfolio and I see a thing that just says "GitHub," like, seems pretty straightforward to me where it would go. 

**Lucia:** <i class="timecode">[00:11:29]</i> Okay! And then probably then correspondingly change the LinkedIn icon to just "LinkedIn," and then the Twitter one to "Twitter."

**Ben:** <i class="timecode">[00:11:38]</i> Yep. You got it! All right. So save this and then I'm actually… Right now, this is pointing to your hosted site, but  here it is on localhost with live changes. So if I scroll down, now it says GitHub, LinkedIn, Twitter.

**Lucia:** <i class="timecode">[00:11:58]</i> Nice.

**Ben:** <i class="timecode">[00:11:58]</i> And if I rerun Lighthouse… and generate this report, it's gonna think, and we should hopefully see no more — Oh, look at that! We went from a 96 to a 97! A whole percentage point! 

**Lucia:** <i class="timecode">[00:12:15]</i> Yeah!

**Ben:** <i class="timecode">[00:12:16]</i> If I go to… Let me see issues.

**Lucia:** <i class="timecode">[00:12:19]</i> It looks like there's one there.

**Ben:** <i class="timecode">[00:12:22]</i> Yeah, so it's color contrast, but we previously had, you know, one down here that's like, "Hey, there's no discernible text." That's gone!

**Lucia:** <i class="timecode">[00:12:28]</i> Right.

**Ben:** <i class="timecode">[00:12:28]</i> It's resolved.

**Lucia:** <i class="timecode">[00:12:30]</i> Right. Although what's convenient now is we can tab back over to the live site and see it, so that people can see the differences. 

**Ben:** <i class="timecode">[00:12:38]</i> Yeah, let's do that. So here it is on the hosted site without any changes and it's… Oh, it's a 94, so we went up 3 points. Yeah, so here it had listed two issues, which were color contrast ratio and links' discernable name, but that's now gone! And so we only have one more problem to resolve that it's surfacing for us. 

**Lucia:** <i class="timecode">[00:13:08]</i> Yes, according to… Yeah, something that just popped into mind, I'm just really curious about what their, like, algorithm is for, you know, accessibility and percentages.

**Ben:** <i class="timecode">[00:13:19]</i> Yeah!

**Lucia:** <i class="timecode">[00:13:19]</i> Like, what was it about those three links? You know, is the percentage of code a factor? What's the weight of each issue? That would just be fascinating to learn about, I think. 

**Ben:** <i class="timecode">[00:13:32]</i> Let's do some mad science. So I'm going to break the LinkedIn and Twitter links again. Let's do some mad science! Uh… can I rerun? I can save it as a JSON! Let's see. You know what? I'll refresh. 

**Lucia:** <i class="timecode">[00:13:52]</i> Did you refresh? Yeah. 

**Ben:** <i class="timecode">[00:13:54]</i> See if that works. Lighthouse, look at that. That is so weird. Why…? Oh, there we go. I had to close the devtools and reopen.

**Lucia:** <i class="timecode">[00:14:07]</i> Yeah.

**Ben:** <i class="timecode">[00:14:07]</i> Good to know! Got it!

**Lucia:** <i class="timecode">[00:14:12]</i> Ooh!

**Ben:** <i class="timecode">[00:14:12]</i> Okay, so it looks like it's by number of distinct issues, perhaps? 

**Lucia:** <i class="timecode">[00:14:19]</i> Yeah. That would probably be the easiest algorithm to write.

**Ben:** <i class="timecode">[00:14:23]</i> Yeah!

**Lucia:** <i class="timecode">[00:14:24]</i> Yeah. Probably introduce inaccuracy by giving things weight and seeing how many things. But then again, I don't know how much power… Well, it can see all the HTML. It should be able to do that.

**Ben:** <i class="timecode">[00:14:36]</i> Yeah. 

**Lucia:** <i class="timecode">[00:14:36]</i> Anyway.

**Ben:** <i class="timecode">[00:14:37]</i> All right. Let me put this back, 'cause we've fixed this now, right?

**Lucia:** <i class="timecode">[00:14:43]</i> Yeah.

**Ben:** <i class="timecode">[00:14:44]</i> And so… this is Twitter… Yeah, so the problem that we had that we just addressed, that Lighthouse was able to find for us, was that we had some links that had no discernible text inside, which meant that, like, if you're navigating with a screen reader, something that doesn't necessarily know how to interpret an icon of the GitHub logo, now the screen reader knows what to announce for this link. Or if you're using the page with speech control, you can now say "GitHub," as opposed to just not having anything you can target the link by. So, by telling us, like, "Hey, this link has no discernible text," we were able to go in and find exactly what it was we needed to fix and fix it. We've already bumped up the score quite a bit. That's really cool. 

**Lucia:** <i class="timecode">[00:15:41]</i> Yeah. The part of my brain that likes to check things off just, like, got that little dopamine hit by bumping up the score. <i class="brackets">[laughs]</i>

**Ben:** <i class="timecode">[00:15:47]</i> Gamified accessibility!

**Lucia:** <i class="timecode">[00:15:51]</i> Yeah.

**Ben:** <i class="timecode">[00:15:52]</i> Oh, man. It's what all the cool kids are doing these days, is gamifying everything.

**Lucia:** <i class="timecode">[00:15:56]</i> Yeah.

**Ben:** <i class="timecode">[00:15:57]</i> All right! Okay, so we have one more — Let me refresh this, rerun Lighthouse — we've got one more issue that it's going to tell us to fix, which was the color contrast issue. So I'd like to dive into that.

Okay. So it tells us, "Low-contrast text is difficult or impossible for many users to read." it gives us a link to learn more, so I think that's actually what I want to follow. But I'm going to scroll down. So it's pointing out, we've got a few links here, it looks like. So the "author at Darling Magazine." It's got the "visit my GitHub account." There's "GitHub," "index from zero." So these are the four things. They're all links. It seems like you've got a link color that's not meeting color contrast requirements against both the light and dark foregrounds.

**Lucia:** <i class="timecode">[00:16:55]</i> Yeah, so that'll be interesting.

**Ben:** <i class="timecode">[00:16:58]</i> If I go here, it kind of walks us through its algorithm for contrast ratio and why. I love when tools provide links to more information like this, because it can really help you understand, like, the problem that you're trying to solve.

Okay, so it's going to tell us "To evaluate text's color contrast, Lighthouse uses Success Criterion 1.4.3 from Web Content Accessibility Guidelines, version 2.1." So it tells us specifically what requirements it's trying to meet. If I follow *this* link, it's going to give us a whole formula, I think. But I think I need to, like, dive into here. But there is, like, a whole formula. Yeah, "Notes on formula," right here. I think. It's somewhere. You can usually find it, but maybe not at the moment. But there is a whole, like, color contrast, like, formula that these tools use. Yeah.

**Lucia:** <i class="timecode">[00:18:09]</i> Yeah. The math behind color is super complicated. 

**Ben:** <i class="timecode">[00:18:15]</i> Yes! Yeah, absolutely. And also, yeah, the math behind color, like, it's intense. There's a lot behind it. It's not something that you or I should be having to calculate for every element of your page. 

**Lucia:** <i class="timecode">[00:18:29]</i> Yeah! You don't need to — Yeah, it should be something that we can use a tool for, right? As fun as the math is. Yeah, it would take me six years to get an accessible color contrast sometimes if I really, really dove into all the math behind color.

But, so how should we fix this? How can we get it? Because the reason why this is still up here is that I had tried to fix it before and I had just made, like, a wild guess and I was like, "I've got to make a whole lot darker!" And then, you know, I still had a problem here. So I would like to use a tool. Do you have any in mind? 

**Ben:** <i class="timecode">[00:19:10]</i> Not at the moment. If you've got a tool you like, let's go ahead and use that. 

**Lucia:** <i class="timecode">[00:19:15]</i> Yeah, I just googled before our session, and this one looked interesting, the one I have in our Zoom chat, if you want to pull that one up.

**Ben:** <i class="timecode">[00:19:24]</i> Yeah… All right, let me pull up this link you've sent me. Stick it in the chat here. Okay, so, "Show me the closest variants of…" — we provide a color — "…that contrast against the color."

Oh. Oh, interesting.

…That contrast against a color that we provide, enough to meet AA Guidelines. All right. So the color that we're starting with is… I'm guessing that's in your CSS file, which is here and it would be your link color. Oh, that's probably defined up near the top with `:root`. Is it `--clr-accent`? Is that your links? 

**Lucia:** <i class="timecode">[00:20:09]</i> Yes, so that's the links, and then `--clr-light` and `--clr-dark` looks like the ones that are defined behind them.

**Ben:** <i class="timecode">[00:20:19]</i> All right. So here's that. And then we want to go, let's start with a color that works against your light color.

**Lucia:** <i class="timecode">[00:20:25]</i> Yeah.

**Ben:** <i class="timecode">[00:20:28]</i> All right. So for small text, we can try… Actually, I wonder… Yeah, it is small text. 

**Lucia:** <i class="timecode">[00:20:40]</i> Yeah. I think small text, yeah, that would probably fit the criteria. 'Cause I can see if the large bold text one was small, I don't think I'd be able to see that very well. So let's try replacing that, see what happens. 

**Ben:** <i class="timecode">[00:20:54]</i> We totally can. I'm worried that this actually makes the color darker, which means it's going to be even harder to match against our dark color.

**Lucia:** <i class="timecode">[00:21:04]</i> That's right.

**Ben:** <i class="timecode">[00:21:05]</i> Earth, hello! You made it! Howdy, Earth. 

Yeah, all right, so we're trying out a new color here. Let's see. So this has changed up a whole lot here.

**Lucia:** <i class="timecode">[00:21:23]</i> Yep.

**Ben:** <i class="timecode">[00:21:23]</i> And now we can see that this black is even a little harder to see against the background. But I bet you this link is no longer going to fail.

**Lucia:** <i class="timecode">[00:21:35]</i> Yeah. So let's see what happens.

**Ben:** <i class="timecode">[00:21:37]</i> Do some mad science. We've got… Marc is recommending the Colour Contrast Analyser from The Paciello Group. Yes.

Ooh!

I have heard that one before. I think that's a full-blown application. I think they're TPGi, now, is what they're called. And it's the, like, British spelling. Or not, in this case. Okay. Yeah, this is, like, a whole application you can install that'll give you, like, an eyedropper that you can, like, pick a color.

So there are tons of great tools. Actually, there is one that *I* enjoy using, and maybe it'll actually help us out here, but it's called — Oh, I have to be so careful when I google this because, yeah. We're going to — There we go — the Contrast Triangle, which lets you actually do three-way, so this might actually help us out quite a bit…

**Lucia:** <i class="timecode">[00:22:34]</i> Wow.

**Ben:** <i class="timecode">[00:22:35]</i> …figuring this out.

Yeah, so let's go back to our page here. It is going to gripe at us about color contrast. We knew that this text was no longer going to work. Looks like the header here is no longer working. Yeah, all of our dark colors are there. So it might be… Let's see. To get the color working for, like, against the light background, you had to pick a darker color. However, if we wanted to get a color working against a dark background, we need a lighter color. I'm wondering if it might be helpful for us to have two variants of this accent color, like one… 

**Lucia:** <i class="timecode">[00:23:21]</i> Yeah, I think so, too!

**Ben:** <i class="timecode">[00:23:22]</i> Okay!

**Lucia:** <i class="timecode">[00:23:23]</i> I think that, yeah, we need maybe to change up the CSS a little bit and add, like, an accent-dark, maybe. 

**Ben:** <i class="timecode">[00:23:29]</i> Yeah, maybe what we call this is an accent-on-light, and then we can have an accent-on-dark. 

**Lucia:** <i class="timecode">[00:23:38]</i> Yes.

**Ben:** <i class="timecode">[00:23:40]</i> And so now let's, I guess, pick the accent-on-dark! So we're going to swing back here, back to this. This is a nifty tool. I do like this. Okay, `#ff7a3f` is the color that it's recommending for this one. So let's give it a try! We'll see how well that works.

**Lucia:** <i class="timecode">[00:24:04]</i> Yeah.

**Ben:** <i class="timecode">[00:24:04]</i> Now for everything we need to pick whether it's going to be an accent-on-light or an accent-on-dark.

**Lucia:** <i class="timecode">[00:24:10]</i> Right.

**Ben:** <i class="timecode">[00:24:12]</i> Let's find `--clr-accent`… Oh! Oh, no. 

**Lucia:** <i class="timecode">[00:24:17]</i> Focus! Oh, that's going to be different, 'cause that's going to be on both.

**Ben:** <i class="timecode">[00:24:21]</i> Yeah, okay, I'm starting to see problems with this approach perhaps.

**Lucia:** <i class="timecode">[00:24:25]</i> Yeah.

**Ben:** <i class="timecode">[00:24:27]</i> `.section__subtitle--intro` and `--about`… Is that…? That might actually also be…

Oh, Chan says, "It's exponential!" 

**Lucia:** <i class="timecode">[00:24:39]</i> Okay. Should we go back to the color triangle?

**Ben:** <i class="timecode">[00:24:42]</i> Yeah, let's try that.

**Lucia:** <i class="timecode">[00:24:43]</i> Color triangle contrast? Let's do that.

**Ben:** <i class="timecode">[00:24:45]</i> So yeah, this should hopefully help us pick a three-way color here. So, our link text… Link is what we would want. So this is the accent color here, is what we would want here. So I'm going to pick, this is going to be one of our background colors. And then this is going to be our white background color. Where is our…? Let's see.

**Lucia:** <i class="timecode">[00:25:25]</i> Oh, I didn't realize that it would—

**Ben:** <i class="timecode">[00:25:27]</i> Oh, yeah! Yeah, it updates all this stuff in real time. So then we pick the color that we started off with, this `#ff7338`, which is a lovely color, by the way! Love it.

**Lucia:** <i class="timecode">[00:25:41]</i> Orange is good.

**Ben:** <i class="timecode">[00:25:42]</i> Yeah, so it's going to tell us… Yeah, we actually need to meet a 4.5 here, and we have to meet a 4.5 here. Let's find ways to do this. I'm wondering… if we just make it… Oh, this might be hard.

**Lucia:** <i class="timecode">[00:26:07]</i> Yeah.

**Ben:** <i class="timecode">[00:26:09]</i> We're just gonna move this around a bit and see if we can get this to pick anything. Oof. I don't know that we're going to be able to min-max this. This is… Okay! So this is… 

**Lucia:** <i class="timecode">[00:26:21]</i> Yeah. You might need to move the value of the color, too. 

**Ben:** <i class="timecode">[00:26:28]</i> Oh, I see. Yeah. Oh, aha, here we go. HSL mode. This is going to be, I think, a little more intuitive for people.

Yeah, Chan's saying, "Love this contrast triangle tool. Super cool little utility." Yes, I use this all the time because, as it says here in the body text, your links should stand out from the surrounding text, but they also still need to stand out around their background, so that introduces this, like, three-way contrast problem that's a challenge sometimes.

'K, so let's find out if I can, you know, maybe pick… What if I pick, like, 30? 

**Lucia:** <i class="timecode">[00:27:16]</i> Yep, it's getting closer, it's the background:link. 

**Ben:** <i class="timecode">[00:27:22]</i> This may not be the most feasible solution to this.

**Lucia:** <i class="timecode">[00:27:27]</i> I wonder if I could just — and we may have to make a decision here about if we want to keep working with this or continue on and see what Axe has to say, right — but I wonder if I could just, if there's any resources that have, like, built-in accessible color schemes for you, and then I could just rework the entire site with those, you know?

**Ben:** <i class="timecode">[00:27:54]</i> Yeah! I do know friend of the show Stephanie Eckles has a project called `a11y-color-tokens`, which I believe is meant to address this problem. So let me stick this in the Twitch chat and then also stick it in the Zoom chat for ya. There we go.

**Lucia:** <i class="timecode">[00:28:17]</i> Thank you.

**Ben:** <i class="timecode">[00:28:18]</i> So this is one way that you might be able to pick some colors, which is a shame because I really do like the color scheme that you got here. I think these colors are lovely. I think we might just need to rework, or I think you might want to rework kind of where you're using your accents or maybe have, like, different variants of accents. Actually, if I go to my own site, I have, like, three core colors, but for each of those colors, I've got, like, four or five variants…

**Lucia:** <i class="timecode">[00:28:51]</i> Interesting.

**Ben:** <i class="timecode">[00:28:53]</i> …depending on kind of the color contrast needs. So there's different ways you could solve this, but with the time that we've got, maybe it's best to dive into Axe and treat this as kind of an unsolved-for-now problem.

**Lucia:** <i class="timecode">[00:29:06]</i> Right, yeah.

**Ben:** <i class="timecode">[00:29:07]</i> Travis is saying that we could grab an analogous color. Yeah, that's probably true. Just kind of pick a color that's, like, close enough in both cases.

Cool. Yeah, so let me… actually probably go back into the code, which is here. I think I'm going to undo all of our CSS changes for now, but those are some tools that we would probably want to dive into if we were going to pick, or some new approaches we would dive into if we wanted to pick some new colors.

Cool! So the next tool that we wanted to go over was Axe. Can you tell me a bit more about Axe and what it is? 

**Lucia:** <i class="timecode">[00:29:53]</i> Yeah! So it's very similar to Lighthouse, except I don't believe it analyzes your site for things like performance, right? It's all accessibility. You'll find it again in your devtools. And I think you just informed me that Lighthouse works with Axe for their accessibility reports. 

**Ben:** <i class="timecode">[00:30:15]</i> Yeah, I think Lighthouse… So Axe is like, there's a whole suite of products by Deque Systems, which is an accessibility resource, and so there's this, like… First of all, there's this, like, NPM package called `axe-core` which is like the… This is the engine that powers a lot of Axe tools. And I *believe* — I could be wrong here — but I believe Google's Lighthouse is powered in part by `axe-core`, at least for the accessibility tests.

But we are going to be using an interface around axe-core, which is axe DevTools. Um… yeah. So there's a link to that. It is kind of meant for enterprise stuff—

**Lucia:** <i class="timecode">[00:31:11]</i> Right.

**Ben:** <i class="timecode">[00:31:11]</i> —but I believe you could install a free version somewhere.

**Lucia:** <i class="timecode">[00:31:16]</i> Yeah, I think they recently switched it from a free version to a free trial. 

**Ben:** <i class="timecode">[00:31:25]</i> Marc says that when we ran our Lighthouse scans, it actually told us the Axe version it was using at the bottom.

**Lucia:** <i class="timecode">[00:31:32]</i> <i class="brackets">[chuckles]</i> Awesome!

**Ben:** <i class="timecode">[00:31:36]</i> Cool. Yeah, so that's where you would go to install Axe. I've already installed Axe, so let's go ahead and run us an Axe scan. So how would I go about doing this? 

**Lucia:** <i class="timecode">[00:31:50]</i> So you see your Lighthouse tab at the top?

**Ben:** <i class="timecode">[00:31:51]</i> Yep.

**Lucia:** <i class="timecode">[00:31:52]</i> Hit the arrow next to it.

**Ben:** <i class="timecode">[00:31:54]</i> You got it.

**Lucia:** <i class="timecode">[00:31:54]</i> And then you should have axe DevTools in the bottom.

**Ben:** <i class="timecode">[00:31:57]</i> Yeah. All right. And then do you like to scan all of your page? Or I guess we probably… 

**Lucia:** <i class="timecode">[00:32:04]</i> I like to scan all of my page, for reasons like what you just saw. But yeah, this is more issues than we saw with Lighthouse, right? This is 14 rather than—

**Ben:** <i class="timecode">[00:32:17]</i> Yeah!

**Lucia:** <i class="timecode">[00:32:17]</i> — I think Lighthouse identified a couple. So, we're seeing the color contrast and… Oh, it maybe just counts them differently.

**Ben:** <i class="timecode">[00:32:26]</i> Oh, could be!

**Lucia:** <i class="timecode">[00:32:27]</i> Because six of them are the color contrast issue, so it does a little bit of a… whereas with Lighthouse, we saw with its percentage, it was counting every issue by topic rather than by instances, right? This is counting them by instance, so I like that. Then we've got some that I don't think Lighthouse did identify, like the "id attribute value must be unique," and I think we can look on that to see more.

**Ben:** <i class="timecode">[00:32:55]</i> "Links with the same name have a similar purpose," "Document should have one main," "All page content should be contained by landmarks." Yeah, so let's dive into… is there one you wanted to look into first? 

**Lucia:** <i class="timecode">[00:33:07]</i> Let's just do the ID attribute value one and see what they have to say.

**Ben:** <i class="timecode">[00:33:12]</i> All right. So, I think I can… Actually, I'm not finding a way to, like, expand this dialog down here, but it's giving us more information about this down below. Wish I could resize things better. But okay, so it's saying, "Hey, it's a minor issue." Actually, first of all, when you run a report, when you're looking at one of these issues, what do you look at first?

**Lucia:** <i class="timecode">[00:33:35]</i> I have, like, a top-down approach, so I just look at the first issue first. And since we have already dove — Dove? Dived ? — into the sufficient color contrast issue, I was thinking let's just take the ID attribute value. And then also, you know, it depends on how much time I've had parceled out, so since I'm seeing we have one instance here, I'm thinking it would be a good thing to dive into and maybe completely address it—

**Ben:** <i class="timecode">[00:34:04]</i> Okay!

**Lucia:** <i class="timecode">[00:34:04]</i> —by the end of our stream.

**Ben:** <i class="timecode">[00:34:07]</i> So it's telling us, "Hey, this is a minor impact. It was found automatically." It tells us, "Ensure every id attribute value is unique." And then it gives us this location, which is…

**Lucia:** <i class="timecode">[00:34:19]</i> I'm doubting everything. Oh. So I must have two `#home`s in there. 

**Ben:** <i class="timecode">[00:34:24]</i> Yeah. "To solve this issue you need to fix the following." You've got multiple elements, yeah. Okay, so it looks like it's saying your `.intro` section has the `#home` ID, but then also it looks like your `.intro-p` element has that same ID. 

**Lucia:** <i class="timecode">[00:34:44]</i> Right.

**Ben:** <i class="timecode">[00:34:44]</i> We can inspect both. So I can click Inspect. And actually, yeah, we see it right here!

**Lucia:** <i class="timecode">[00:34:49]</i> Yeah!

**Ben:** <i class="timecode">[00:34:49]</i> We've got `<section class="intro" id="home">`, and then `<div class="intro-p" id="home">`. So… how would you like to fix this, Lucia? 

**Lucia:** <i class="timecode">[00:35:03]</i> Let's… I think I could find a more descriptive ID. 

**Ben:** <i class="timecode">[00:35:08]</i> Okay!

**Lucia:** <i class="timecode">[00:35:09]</i> But we will probably need to go in, 'cause the ramification will be that the class no longer applies to them, right, the ID class, so we'll have to make sure in our CSS that anything that is identified by the class — or not the class, the ID — `#home` is changed so that the styles still apply.

**Ben:** <i class="timecode">[00:35:30]</i> Okie-doke! So we've got our `<section class="intro" id="home">`, and then your `class="intro-p" id="home"`. Do you want to change one or both of these IDs? 

**Lucia:** <i class="timecode">[00:35:41]</i> Let's change both of them, because "home" doesn't describe either of them. <i class="brackets">[laughs]</i>

**Ben:** <i class="timecode">[00:35:47]</i> Sure!

**Lucia:** <i class="timecode">[00:35:48]</i> So, I'm going to try to be super descriptive with this, because I don't want to just say ID is `"intro"` in case… It's been a while since I looked through my entire `style.css` file, so I might have another intro style that would then apply. So let's do maybe `"intro-section"` here. 

**Ben:** <i class="timecode">[00:36:12]</i> `"intro-section."` You got it! 

**Lucia:** <i class="timecode">[00:36:14]</i> Okay. And then down here, probably `"intro-p"` will probably work for that one. 

**Ben:** <i class="timecode">[00:36:25]</i> Okay!

**Lucia:** <i class="timecode">[00:36:25]</i> Okay.

**Ben:** <i class="timecode">[00:36:26]</i> Now you said we should dive into the styles here, so let's look for any use of… It actually doesn't look like you're using the `#home` ID.

**Lucia:** <i class="timecode">[00:36:34]</i> Okay!

**Ben:** <i class="timecode">[00:36:35]</i> So…

**Lucia:** <i class="timecode">[00:36:35]</i> Right, so we should be fine, I think. I think that's all we have to do there. 

**Ben:** <i class="timecode">[00:36:40]</i> Let's give it a shot! Give us a hard refresh just in case. Go to Axe. Scan all. There's one fewer issue, and if I look here—

**Lucia:** <i class="timecode">[00:36:55]</i> Nice!

**Ben:** <i class="timecode">[00:36:55]</i> —I don't see any of them that say duplicated IDs! 

**Lucia:** <i class="timecode">[00:36:59]</i> Nice. Yeah. So let's… so maybe there's a better way I could address picking the first issue to look at. Are there any, can we tell if there are any that are identified as serious? Okay, serious is 6. I think that's the color contrast.

**Ben:** <i class="timecode">[00:37:16]</i> Yeah.

**Lucia:** <i class="timecode">[00:37:16]</i> So how about the moderate ones? I guess that's all we have left. 

**Ben:** <i class="timecode">[00:37:20]</i> Okay. It tells us, "Document should have one main landmark," and that "All page contents should be contained by landmarks." I think that this is actually, probably we can fix both of these at the same time.

**Lucia:** <i class="timecode">[00:37:31]</i> Yeah, two birds.

**Ben:** <i class="timecode">[00:37:33]</i> So if I dive into this… Actually, let me dive into "All page content…"

Have a good one, Chan! Good seeing ya.

Yeah, so it tells us "All page content should be contained by landmarks." And then one of the things I love to do when I'm using tools like this is I love to click the Highlight button. So that way, it will, like, tell us what element it's telling us about. So first of all, it's saying this element right here, it's not inside a landmark.

**Lucia:** <i class="timecode">[00:38:02]</i> Okay.

**Ben:** <i class="timecode">[00:38:03]</i> And then if I go to the next one, this element right here, also not inside of a landmark. 

**Lucia:** <i class="timecode">[00:38:07]</i> Okay. That's taking shape in my head, the issue, a little better now, thanks to those highlights.

**Ben:** <i class="timecode">[00:38:13]</i> Yeah! So you can use the highlight tool to indicate specifically which element it is. And then if you need to look at the DOM node, you can always click Inspect. It'll take you into the Elements tab so you can look at this. And so here we can see our overall markup. And if I go back into our Axe report, we can see that we've got this other issue, which is "Document should have one main landmark." So it's like, well, we've got a landmark problem, then we've got a bunch of things that aren't in a landmark.

**Lucia:** <i class="timecode">[00:38:41]</i> Right.

**Ben:** <i class="timecode">[00:38:42]</i> And so this is going to tell us, like, "Ensure the document has a main landmark." Basically it's complaining the whole document doesn't have this. And it doesn't actually give us all that much more information, but we could click on More Info here. And this will give us much more information about—

**Lucia:** <i class="timecode">[00:39:04]</i> Yeah.

**Ben:** <i class="timecode">[00:39:04]</i> —what it is we're trying to address. It tells us that it's not really a Success Criterion, but it is a best practice. 

**Lucia:** <i class="timecode">[00:39:12]</i> Okay! That's probably, I wonder if that had anything to do with their classification as a moderate issue. 

**Ben:** <i class="timecode">[00:39:20]</i> Yeah. So… how do you want to address this?

**Lucia:** <i class="timecode">[00:39:26]</i> "Role…" So I just wonder how — I would have to look into the HTML again — `<header>`, `<nav>`, `<main>`, and `<footer>`. So do we need a `<main>` tag, or is it that I'm not defining a `role`, is my question. Or both?

**Ben:** <i class="timecode">[00:39:43]</i> So these days, you don't usually need to put, like, `<main role="main">`. This tends to be superfluous, and people recommend against it. But, yeah, we could put a `<main>` tag around, you know, the main contents of the page, and that would be more or less most of the page. Right?

**Lucia:** <i class="timecode">[00:40:01]</i> Yeah.

**Ben:** <i class="timecode">[00:40:02]</i> Maybe not the header, maybe. But I mean, if I go back to your page here… Yeah, I mean, this is… The nav, perhaps, maybe could be outside but, like, the rest of this is just straight up this is what people would consider the page.

**Lucia:** <i class="timecode">[00:40:21]</i> Yeah.

**Ben:** <i class="timecode">[00:40:22]</i> It's not, like, sidebars and stuff like that.

**Lucia:** <i class="timecode">[00:40:24]</i> Yeah.

**Ben:** <i class="timecode">[00:40:24]</i> The footer can probably stay outside as well.

Yeah, so let's figure out, let's go back into the code and figure out the best place to put this `<main>`. If I go here, the thing it did not complain about, right — like, it started with, like, this `<section>`, right?

**Lucia:** <i class="timecode">[00:40:48]</i> That `<section>`, yeah.

**Ben:** <i class="timecode">[00:40:51]</i> It was not worried about the `<header>` at all. So we will, I think, go ahead and start here, and then…

**Lucia:** <i class="timecode">[00:41:02]</i> Yeah.

**Ben:** <i class="timecode">[00:41:03]</i> Put just about everything in there except for, if you've got a `<footer>`, we won't put it there. And I think that will do it.

**Lucia:** <i class="timecode">[00:41:13]</i> There we go.

**Ben:** <i class="timecode">[00:41:13]</i> Let's find out. Move it in. There we go. Cool. 

**Lucia:** <i class="timecode">[00:41:21]</i> See what happens.

**Ben:** <i class="timecode">[00:41:26]</i> Yeah, so… first of all, if I go into our markup here, we can see that we now have a `<main>`, right?

**Lucia:** <i class="timecode">[00:41:33]</i> Mhmm.

**Ben:** <i class="timecode">[00:41:33]</i> And it's got all of our `<section>`s in there, which is exciting. And now if I go into the axe DevTools. Scan.

**Lucia:** <i class="timecode">[00:41:42]</i> Oooh!

**Ben:** <i class="timecode">[00:41:42]</i> Look at that!

**Lucia:** <i class="timecode">[00:41:44]</i> Yeah!

**Ben:** <i class="timecode">[00:41:45]</i> It tells us we have eight issues. Six of them are serious and the other two… Oh, they're just needs-review, that's what they are. Interesting. We'll talk about those needs-review as well.

**Lucia:** <i class="timecode">[00:41:54]</i> Yeah.

**Ben:** <i class="timecode">[00:41:54]</i> But yeah, notice that both of the landmark-related issues are gone—

**Lucia:** <i class="timecode">[00:42:02]</i> Yeah!

**Ben:** <i class="timecode">[00:42:02]</i> —because everything is now in a landmark element.

Yeah. "One issue I have faced" — This is from Kamal — "One issue I have faced is that all tools identify different," in parentheses, "(non-overlapping) issues. How do we resolve this problem?" Yeah, so different tools are surfacing different defects. So what do you do in that scenario? 

**Lucia:** <i class="timecode">[00:42:29]</i> Yeah, I think… first of all, if there are different tools surfacing different defects, I use both of them. But also, if they're not overlapping, I don't consider it too much of an issue. It's like, oh, both tools are showing me different ways to improve my website, right? So that's not terrible. Maybe, like, if one of them is missing something really obvious, you could write or tweet at the tool and say, "Hey, I was noticing that it missed this in my webpage," or just talk to a developer at their company, right?

But if they're overlapping, say… I am trying to come up with, like, what actually happened, but one time I ran Axe and one time I ran Lighthouse — this is interesting 'cause we know that the same company is kind of behind the functionality, right? — but when I tried to fix an issue in Lighthouse, Axe would bring up an issue, and then when I tried to fix that issue, it would pop back up in Lighthouse, right? So in that case, it's time to maybe do some user tests, like manual testing, and see if that can inform your choice. Or, you know, seek out an expert's advice on the matter.

**Ben:** <i class="timecode">[00:43:55]</i> Yeah, absolutely. It is worth  noting that different tools will be looking for different sets of requirements. Usually there'll be a setting for, like, what degree of web content accessibility conformance are you trying to meet, and stuff like that. Like, are you trying to meet Level A, AA, AAA? And then there's, some like Axe here are including best practices. You'll also note that, like, different automated tools will have different selling points. So Axe, for instance, is very proud of this idea of, like, no false positives. Especially when you're running, like, `axe-core` against your project, like, in the command line, it will, if it finds something that it thinks it *might* be an issue, like, it will try to be very explicit about it, as opposed to in all cases saying this is a problem, because sometimes it's, like, well, mmm, not necessarily.

Like, actually again, if I go to my site… So, *technically,* this header here is, like, the styles are applied by a gradient, and you can imagine that if you have text on top of gradients, that might be very difficult for computers to efficiently calculate the color contrast for. So these tools usually kind of bail out and go, "Well, you got some text on a gradient. It might be an issue. It might not." In this case, it's pretty clearly not an issue. But it'll be like, "You should know, we can't guarantee this is good, we can't guarantee this is a problem, but one way or another, you should at least know about this."

So that's kind of some of the differences between some of the tools that we use. Yeah. All right. 

**Lucia:** <i class="timecode">[00:45:57]</i> Cool! So the needs-review… I think if we turn the best practices off… or, no, that'll still be there, but… Let me see what it says. 

**Ben:** <i class="timecode">[00:46:10]</i> Let me see if I can pop this out. That might make things easier to look at.

**Lucia:** <i class="timecode">[00:46:15]</i> Oh, yeah.

**Ben:** <i class="timecode">[00:46:16]</i> Okay. So it's telling us, "This issue needs your review. When an issue is flagged for review, it means we're not 100% sure it's actually a problem. Use the information we've provided to decide if it's a problem."

**Lucia:** <i class="timecode">[00:46:26]</i> Interesting.

**Ben:** <i class="timecode">[00:46:28]</i> So it's gonna tell us that we have some links with similar names here, so the… Oh, okay! 

**Lucia:** <i class="timecode">[00:46:41]</i> There's, I don't think there's even an alt text on that one. 

**Ben:** <i class="timecode">[00:46:45]</i> So we have a link. This is for a Mars app that you built. It has an image inside, and that image has a "website mock-up" alt text. And so that means that the link is being announced as "website mock-up," but…

**Lucia:** <i class="timecode">[00:46:58]</i> Gotcha.

**Ben:** <i class="timecode">[00:46:59]</i> …if you have two mock-ups, which I'm pretty sure you might, then that means that they're both doing the same thing. Let's see, Inspect. "website mock-up." And then if I go into the other one… "website mock-up." 

**Lucia:** <i class="timecode">[00:47:17]</i> There we go. Okay. So I think a way we can fix that is probably… First of all, I mean, I'd love your input on creating alt text because I actually find it, even though people say it's a simple thing, like, you know, "Just slapping an alt on every image," I find it very difficult to describe my images properly.

**Ben:** <i class="timecode">[00:47:43]</i> Yeah!

**Lucia:** <i class="timecode">[00:47:44]</i> And then second, I think I should probably just slap, like, a "Mars" in front of the Mars website mock-up, and then a "NASA" in front of the NASA website mock-up, and that'll differentiate at least between them. But in the first place, I'm still not sure that that is… because it says it's a mock-up, but that doesn't describe what's in the image, right, so. 

**Ben:** <i class="timecode">[00:48:02]</i> Yeah. I think this is one of those things that's, like, very contextual, and so I'm going to share a resource I love, which is WebAIM's resource here. So, when you're describing an image because you want to describe its contents, kind of the heuristic I follow is "How would you describe this if you were describing it to your friend over the phone," right? Like, oh, I've got an image in front of me, Lucia, and I'm telling you about this image, but I can't just, like, hold it up to the camera. How would I describe it to you? 

**Lucia:** <i class="timecode">[00:48:34]</i> Right.

**Ben:** <i class="timecode">[00:48:34]</i> That tends to be the heuristic I would use, 'cause that helps me focus on, like, what's actually important, what am I trying to convey with this image. And  this post makes that point when it says context is everything. The same image in different websites might mean different things. It gives this example of, like, the presidential portrait of George Washington and says, hey, if you're in a bio of George Washington, it might be sufficient to say "Presidential portrait of George Washington." However, if this is an art blog, then the fact that it's George Washington matters a lot less than talking about things like brush strokes and stuff like that, so you might go into detail about the painting style and stuff like that.

And… Ooh, I'm going to have to check out this link from Marc.

And so, this context is incredibly important, and the reason I bring this up is because the image that you've got here is what we would call a functional image. So you know how, when you have, like, a logo in your navbar and that logo is wrapped in a link, you just know that that logo is going to take you to the homepage?

**Lucia:** <i class="timecode">[00:49:47]</i> Yeah.

**Ben:** <i class="timecode">[00:49:47]</i> Right? So you wouldn't necessarily describe the contents of the logo. You might instead make the alt the site name, because it's functional. It serves a purpose, which is taking you to the homepage of the site. So when you navigate to that link, you don't want "Image of a gray silhouette of a head with some gears in it, and the text 'WebAIM.'" The alt text should probably just say "WebAIM," because then you want it to announce "link, WebAIM." 

**Lucia:** <i class="timecode">[00:50:14]</i> Yeah. So that seems like a similar scenario to what I have going on my website right now.

**Ben:** <i class="timecode">[00:50:19]</i> Yeah, I think so! So with that in mind, let's write some functional alt text here. So, this is for Mars Photo Album, right?

**Lucia:** <i class="timecode">[00:50:32]</i> Yeah.

**Ben:** <i class="timecode">[00:50:32]</i> So that might even be straight up the text. 

**Lucia:** <i class="timecode">[00:50:35]</i> Yeah, exactly. Same thing for the SpaceApps project, right? 

**Ben:** <i class="timecode">[00:50:41]</i> All right. You got it!

That is the wrong direction. I'm so bad at remembering which way I need to swipe.

**Lucia:** <i class="timecode">[00:50:51]</i> Yeah.

**Ben:** <i class="timecode">[00:50:53]</i> Yeah, so now if I dive into our markup here, we'll see that we've got alt="Mars Photo Album" and alt="NASA SpaceApps 2020."

Oh, Travis is saying, "A problem I used to do was say 'Photo of…'," yada, yada, yada. Yeah, for sure, because, like, when you're a screen reader user and you navigate to an image, whichever screen reader you use is going to preface that with "image" and then the alt text.

**Lucia:** <i class="timecode">[00:51:20]</i> So, then you have "image, Photo of…," and that's just…

**Ben:** <i class="timecode">[00:51:23]</i> Yeah, it's redundant and it's clutter. Yeah.

Okay, let's try running Axe again. DevTools. Scan it all!

"Links with the same name have a similar purpose."

**Lucia:** <i class="timecode">[00:51:41]</i> See if it's identifying the same ones.

**Ben:** <i class="timecode">[00:51:43]</i> So this time it seems to say "GitHub" is your problem, and this is in your project. So you've got two…

**Lucia:** <i class="timecode">[00:51:52]</i> Ooh, 

**Ben:** <i class="timecode">[00:51:52]</i> yeah.

Yeah. Two… 

**Lucia:** <i class="timecode">[00:51:55]</i> That's the link to the GitHub, in the repo of my projects. 

**Ben:** <i class="timecode">[00:52:02]</i> Yeah! But then it's gonna say that the other one is… Where is the other one? Oh! Oh, okay!

**Lucia:** <i class="timecode">[00:52:14]</i> Yeah!

**Ben:** <i class="timecode">[00:52:14]</i> So we just actually changed this to say "GitHub." 

**Lucia:** <i class="timecode">[00:52:18]</i> Yeah. I think we can change the one in the paragraph.

**Ben:** <i class="timecode">[00:52:23]</i> Yeah!

**Lucia:** <i class="timecode">[00:52:23]</i> It's probably just "view my GitHub repo," maybe instead of… 

**Ben:** <i class="timecode">[00:52:28]</i> Yeahhh, let's do that. I like that. Let me close out of this.

Ohh! Okay, yeah, Marc was saying that the `#home` ID was being used in the navigation, not in the CSS. That makes sense.

I will not open Discord at this moment. I will open up…

Yeah, so here, "view it on," we could say "view my GitHub repo." So now your social link still says "GitHub," but this link right here says "GitHub repo." You might've looked at that, I think, and said, "You know what? It's fine. I don't necessarily feel like I need to change this." I feel like that's one of those, like, more subjective decisions for me.

**Lucia:** <i class="timecode">[00:53:14]</i> Right.

**Ben:** <i class="timecode">[00:53:16]</i> Once again, can't swipe. There we go.

Okay. So this now says "GitHub repo." If I run axe DevTools, so far, the only thing that's left is that color contrast, which we've already acknowledged and will fix on our own time.

**Lucia:** <i class="timecode">[00:53:35]</i> Yeah. Aw!

**Ben:** <i class="timecode">[00:53:38]</i> Yeah.

**Lucia:** <i class="timecode">[00:53:38]</i> Awesome!

**Ben:** <i class="timecode">[00:53:39]</i> So, we're getting close to time, so I'd like to spend a bit of time talking about maybe some of the caveats of using automated accessibility tests like this.

Yeah, so this is great, right? We were able to use this to solve problems we were actively facing on our site. We took kind of this iterative approach of just tackling a problem at a time, trying to understand what that problem was. So… I don't need manual testing anymore, right? 

**Lucia:** <i class="timecode">[00:54:14]</i> Um! Well, even the tools tell us to use it. So I think we're actually, we're looking at an instance right now where we see that this link, there's an issue with it, with the color contrast, right, which we've been looking at.

**Ben:** <i class="timecode">[00:54:25]</i> Mhmm.

**Lucia:** <i class="timecode">[00:54:27]</i> But we have a `target="_blank"` as well, which is not the reason why Axe brought this up. So I will… I think I have a post on…

**Ben:** <i class="timecode">[00:54:41]</i> Let's find it! 

**Lucia:** <i class="timecode">[00:54:45]</i> Yeah, it's called _3 Ways to Make `target="_blank"` Accessible._ 'Cause basically, you never want to surprise somebody with a link that just pops them up into a new tab. I have it in your Zoom chat there, too, and I can pop it into the… Yeah. And I actually have, after I wrote this, someone commented point out a security issue with `target="_blank`", so I've moved away from using that in general. But basically those three ways all make it easier to see when a `target="_blank"` — which, just so you know, that opens up the link in a new tab, right — when that's coming at you, because the user might not expect it, and it could cause cause problems 'cause all of a sudden you're on a new page and what you were navigating through is no longer there.

So if we scroll down, let's see how I fixed this.

So there's a little bit of a more complex solution where you can add CSS classes and make a warning message screen reader-only. Another way is just to make it obvious just in your copy and just say, like, right before it, like, "You can view this link that will…," or in some way warn the reader. Like instead of "I'm in a new tab," but "Darling Magazine (opens in new window)." 

**Ben:** <i class="timecode">[00:56:23]</i> Something like that, right?

**Lucia:** <i class="timecode">[00:56:24]</i> Yeah. Yeah, except I think I would want that before the link, just so that the reader would read it out before. Otherwise you might click on it before you even… 

**Ben:** <i class="timecode">[00:56:34]</i> So the reason that I put it inside the link is that if I'm a screen reader user and I'm tabbing through the page and I land on this link through tabbing, like, I want something like this to be, like, part of the name so that it is included in the announcement. 

**Lucia:** <i class="timecode">[00:56:50]</i> Oh, yeah, that makes a lot more sense. 

**Ben:** <i class="timecode">[00:56:52]</i> Also, screen reader users have modes where they can skip from element to element of a certain type, including links, and that means that links like this can appear out of context. Right? So you can't necessarily guarantee that someone has hit the static text around this link.

**Lucia:** <i class="timecode">[00:57:07]</i> Yeah.

**Ben:** <i class="timecode">[00:57:07]</i> That's why I was kind of sticking in the anchor tag.

**Lucia:** <i class="timecode">[00:57:10]</i> I mean, that'll inform my whole link naming process in the future as well. You know, because now, if they're just tabbing through links, this, like, says "at Darling Magazine (opens in new window)," so.

**Ben:** <i class="timecode">[00:57:21]</i> Yeah.

**Lucia:** <i class="timecode">[00:57:21]</i> And what does that link to? 

**Ben:** <i class="timecode">[00:57:23]</i> Thank you, Marc. Marc's on top of this! Holy cow.

**Lucia:** <i class="timecode">[00:57:28]</i> Wow.

**Ben:** <i class="timecode">[00:57:29]</i> Yeah, and you mentioned in your article that, like, there are, like, screen reader utility classes that you can use, that you could do something like class equals, you called it `.screen-reader-only`. But it'll visually hide the element without removing it from screen reader access. So like, that way, you only know really that it's going external, like, you only get that, like, announcement if you're actively using a screen reader. So there are definitely options that you can do.

Yeah, on this problem of what can automated tools help us with, for me, like… I think devs get very automation-happy. It's like, "Oh, we can solve all the things with automation." And yeah, accessibility, there are quite a few things like color contrast that are pretty well solved with automation, right?

**Lucia:** <i class="timecode">[00:58:26]</i> Right.

**Ben:** <i class="timecode">[00:58:26]</i> Like, you can have a computer run this formula on a whole bunch of elements really quickly, much faster than any accessibility tester could, right?

**Lucia:** <i class="timecode">[00:58:33]</i> Right.

**Ben:** <i class="timecode">[00:58:33]</i> That's something that's well solved with automation. But something like alt text is something that it's easy for a computer to decide whether an image *has* alt text, but it's really difficult for the computer to decide whether that alt text is meaningful or helpful.

**Lucia:** <i class="timecode">[00:58:53]</i> Yeah. I think if that we see an analogous issue in automated testing as well.

**Ben:** <i class="timecode">[00:58:58]</i> Oh, yeah?

**Lucia:** <i class="timecode">[00:58:59]</i> Not just automated accessibility testing, but like testing. Sometimes, you know, we have these engines that… What was it that I used to…? Say, you use, like, a smoke test and react. Like, that's not the only thing you want your React component to do, is show up, right? So some people run all their smoke tests and be like, "Okay, cool! We're done with testing." But you want to be able to test what they do. Just like the computer can test that an alt script is there, but it can't test what it tells that person using the screen reader. 

**Ben:** <i class="timecode">[00:59:31]</i> Absolutely. So yeah, I'm also interested to follow— I know, like, Deque Systems has been doing a lot more work with, like, automated tools that will surface potential flows in your applications and identify, like, "Hey, this is something you might be curious about." Like, they're building a tool called intelligent guided testing — which I'd love to have Glenda Sims on, she's done some fantastic presentations about this subject — but, like, designed to make it easier to find potential issues without saying yay or nay on whether it is an issue, just because a lot of accessibility is really about the user experience, right? And that's going to be kind of inherently subjective. You're not always going to 100% of the time be able to say, like, a correct answer, especially with a computer that has no idea about the context of your site. 

**Lucia:** <i class="timecode">[01:00:28]</i> Right. And it's like it is, I think, with a lot of the ways we use machines, is that it's important to stay curious in order to use them well.

**Ben:** <i class="timecode">[01:00:35]</i> I love that! I love that. I love tools like Lighthouse and Axe, where they, like, they surface these issues, but then every time, they always point you to a link on web.dev or on Deque where they tell you, like, "Hey, here's why this is an issue. Here's ways you might address this." Because I've definitely seen, like, "Oh, our accessibility auditors have come back with a defect and we, like, we need to fix this now, but we don't necessarily know what it is we're trying to solve or why." It's just, like, we've been told like, "Oh, hey, this column needs this `scope` attribute." It's like, well, okay…? It's easy to mess up or create an incomplete experience that way. But these tools give you the resources needed to be curious and to find out what problems you're solving and that, I love them for. 

**Lucia:** <i class="timecode">[01:01:35]</i> Yeah, exactly. Yeah. 

**Ben:** <i class="timecode">[01:01:38]</i> All right! Is there anything more you'd like to say about automated accessibility testing before we wrap up? 

**Lucia:** <i class="timecode">[01:01:48]</i> That's it. I'd like to, if you haven't tried them yet, I'd like to encourage you to use them. They're a great starting point and they're a lot of fun. 

**Ben:** <i class="timecode">[01:01:57]</i> All right. Well, thank you so much for coming on, Lucia! It has been great having you. This has been a great time, and I hope you've enjoyed it.

Y'all, join us next week. We're going to be actually doing some open source. I've had an open source accessibility education  project in mind, and it's something I'd like to get y'all's involvement on, so you should absolutely come join us next week, Tuesday, 12pm.

**Lucia:** <i class="timecode">[01:02:22]</i> Oh, that's exciting.

**Ben:** <i class="timecode">[01:02:23]</i> Yeah! Go follow Lucia. And also while you're at it, go follow Some Antics on Twitter. This is how you find out about all the streams. We upload videos of the streams, complete with captions, and If you want to keep up with all the streams that are uploaded, the Twitter is the best place to do that!

So, y'all, thank you so much for joining. Dave and Travis, thank you so much for joining. It's been great having you all. Thanks so much the following. Marc, thank you for being in the chat with all those helpful resources.

**Lucia:** <i class="timecode">[01:03:02]</i> Yes!

**Ben:** <i class="timecode">[01:03:03]</i> Y'all, have a great Global Accessibility Awareness Day, and I'll see you soon. Bye, y'all!

**Lucia:** <i class="timecode">[01:03:10]</i> Bye!