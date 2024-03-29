<i class="timecode">[00:00:03]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. Today, I am joined by Hidde de Vries. Hidde, hello! Welcome to the stream! 

<i class="timecode">[00:00:12]</i> **Hidde:** Hi, hello! Thanks so much for having me.

<i class="timecode">[00:00:15]</i> **Ben:** I'm super excited to have you on. Oh - we've already got someone subscribing. Thank you for the subscription, ElLevidente. But yeah, I'm super excited to have you on, because I've actually been reading some of your blogposts for a while. They are just some of my favorites in the accessibility space. So I'm super thrilled to be having you on. For folks who might not have seen you around, would you care to give yourself an introduction? 

<i class="timecode">[00:00:39]</i> **Hidde:** Yeah, sure. My name is Hidde. I am joining you today from Rotterdam, the Netherlands. I have always worked as a frontend developer, and in the last five years of my career, I've moved towards doing accessibility, which I've kind of been doing full-time for the last few years. I've most recently worked at the World Wide Web Consortium on accessibility. And yeah, I'm excited to show you a bit about auditing websites today. 

<i class="timecode">[00:01:09]</i> **Ben:** Absolutely. I sent out a tweet just a couple days ago, it feels like, that was like, "Hey, do you work on cool accessibility tooling and resources? I'd love to have you on the stream." You responded and within, like, a day or so, we had this booked, so I'm super, super excited.

<i class="timecode">[00:01:25]</i> Let's go ahead — I'm going to start sharing my screen. I'm going to, first of all, point out a few places where folks can go find you before we get started. So here's your Twitter. I am so jealous of your three-character username. That is excellent.

<i class="timecode">[00:01:42]</i> **Hidde:** <i class="brackets">[chuckles]</i> Yeah, it does attract a lot of crypto spam, though.

<i class="timecode">[00:01:46]</i> **Ben:** Ooohhhh, I believe it.

<i class="timecode">[00:01:47]</i> **Hidde:** Someone started a currency with these three characters. 

<i class="timecode">[00:01:51]</i> **Ben:** Oh boy, yeah. That is tough. And then here's your blog. You've got tons of fantastic stuff on here. Highly, highly recommend reading it!

<i class="timecode">[00:02:03]</i> Okay, so do you want to kind of walk us through what we're going to be doing today?

<i class="timecode">[00:02:10]</i> **Hidde:** Yeah, so… yeah, a lot of people talk about accessibility. Especially, like, in organizations they'll say like, you know, "Let's make our websites more accessible. Let's try and organize ourselves in a way that we can get our accessibility right." But often, then, people will get to this question like, "How do we do that? What does that mean? What does it mean to have an accessible website?" And, you know, many of you will be familiar with a standard, the WCAG standard, the Web Content Accessibility Guidelines that exist specifically kind of for this problem. Like, how do we even measure what an accessible website is?

<i class="timecode">[00:02:50]</i> And for me, that kind of goes into, like, different aspects, like there is this standard that you can follow and measure accessibility with. There's also a bunch of best practices, and then there's also user testing that you probably should be doing with people with disabilities. So for me, it's kind of those three things. Like, there's a standard, there is best practices, and there is user testing. So together, that's accessibility. But the standard part is kind of what we'll be focusing on today.

<i class="timecode">[00:03:24]</i> It's a standard with lots of different success criteria in it, and they are designed to be checked against. So for each of those, you can say either this one is met or this one is not met on this website, or this website does or does not meet this specific success criterion. That's what it's designed for, and that's kind of how that measuring works. So organizations will go and have an audit on their website. And basically what that means is someone will go through each of the checkpoints for a bunch of pages and then figure out if each checkpoints are met or not. And if it does, then you have, like, a perfect score, but quite often there are a number of issues that will be in your website and that these reports will kind of help you find. I do a lot of audits myself and I have never done an audit where it was, like, perfect at the first time. I'm sure if I audit my own website, I will find stuff. There is always stuff, and that's fine.

<i class="timecode">[00:04:30]</i> But today, I kind of want to take you into what auditing is and how that works. And we'll be using the official methodology that has been published kind of together with WCAG, or just after WCAG was published, and that is called "WCAG-EM." And the "EM" is "evaluation method."

<i class="timecode">[00:04:51]</i> So this is a long document, and we will not read it together today, I think. But it has a bunch of steps for performing a WCAG audit in a fair way and in a consistent way that can be reproduced. And yeah, we'll kind of be doing that today. 

<i class="timecode">[00:05:12]</i> **Ben:** Okay! And then I guess, before we start diving into these steps… when you perform an audit, who do you envision as, like, the end consumers of the audit? Like, who is this audit for? 

<i class="timecode">[00:05:26]</i> **Hidde:** That's a great question. So for me personally, it is the team that is going to fix the problems that I find.

<i class="timecode">[00:05:34]</i> **Ben:** Okay!

<i class="timecode">[00:05:35]</i> **Hidde:** It is the end user than I have in my head. But that's not the same for every auditor, and also not for every audit. So sometimes these are used by governments to prove to other governments that they are doing a good job. An example of that is in the Netherlands, like, the city will have to get a performance report and then send it to the national government so that they can show, you know, we comply with the regulations. Or in Europe, all the member states will also have to show like, our member state websites conform to these things. So these audit reports are kind of made to do a lot of proving, you know, "we're doing well, we're not doing well" types of things. So it's used for that.

<i class="timecode">[00:06:21]</i> But I personally, if I want to help an organization improve their website, I'll also just kind of use it as a QA session and just give them the information they need to fix the problems. That's not always included in accessibility audits, because technically, you only need to say "this criterion is met" or "it is not met" and then give an example. But usually, I go into more of, like, "Actually, if you change this attribute to that, then your problem is solved" so that, yeah, my end user of the report — a developer or designer — can just go ahead and kind of implement that and fix this, because for me, that is kind of what we're trying to do here, right? We want to make the web more accessible…

<i class="timecode">[00:07:02]</i> **Ben:** Yeah.

<i class="timecode">[00:07:02]</i> **Hidde:** …not just have a theoretical exercise going. 

<i class="timecode">[00:07:06]</i> **Ben:** Yeah, this isn't a tool for shaming people, right? Like, this is an actionable resource for people to, like, improve their site in, like, real ways, which I love. 

<i class="timecode">[00:07:16]</i> **Hidde:** Yeah. Yeah, totally. I want to help you get your website right and, yeah, not shame you. It is sometimes like when I meet teams, they sometimes are, like, scared of the auditor like, "What are you going to do? Are you going to approve this? If I change it, are you going to be happy?" And I don't think it should be that kind of relationship, you know. An auditor should help an organization to find the problems and also help them towards solutions where possible.

<i class="timecode">[00:07:45]</i> **Ben:** That makes a lot of sense. Okay!

<i class="timecode">[00:07:47]</i> So, I guess, should we just dive into doing an audit, or is there more background you wanted to provide before we do? Like, where would you like to take this next? 

<i class="timecode">[00:07:58]</i> **Hidde:** Yeah, one thing I can say is that, so there's this methodology that has five steps, and then to really help people do this, we at the W3C… the W3C has published a tool that is specifically to kind of take you through these steps so that you don't need to use the document per se. It does assume you're kind of familiar with the contents of it. But yeah, this tool really exists to kind of take you through so that you can, like, follow the steps and get a report that is kind of consistent. So yeah, that's called "WCAG-EM Report Tool." It is used by a lot of governments across the world, and with more accessibility regulations also starting to apply to businesses, not just governments, I imagined it might be used by more people than just governments in the future, too.

<i class="timecode">[00:08:57]</i> **Ben:** Okay. So this is… would you… you could probably… I'm trying to figure out the best way to phrase this question. Like, you could probably come up with your own system for reporting an audit, but this is kind of a standard that is published by the same people who publish the Web Content Accessibly Guidelines, and it sounds like it's a standard that governments are leveraging more and more as well. 

<i class="timecode">[00:09:23]</i> **Hidde:** Yeah. Yeah, and they do that because it helps them compare reports. So there are lots of, like, regulators in Europe that need to compare how well, like, some part of their government is doing, so this kind of tooling helps. One thing that this tool has in that regard is also a JSON export in a standardized format. So there is a JSON format that is specifically for accessibility conformance reporting. This tool will also give you that so that there is, like, a way to programmatically compare reports, too. 

<i class="timecode">[00:10:04]</i> **Ben:** Gotcha, yeah. Yeah. I like the idea of, like, standardizing even just the way that we audit things so that, like, two audits are comparable. And then having, like, a standardized output seems really nice, too. Okay!

<i class="timecode">[00:10:18]</i> **Hidde:** Yeah! And it's not like the auditor — Like I mentioned before, there's user testing and best practices, and all of that is also important. But yeah, having standardized reports with checkpoints like the ones in WCAG, yeah, that's, that's definitely part of, like, a large-scale accessibility operation like the European Union is trying to do with their regulations. And I'm sure in other parts of the world, stuff like that is happening.

<i class="timecode">[00:10:46]</i> So yeah, do you want to do a report today?

<i class="timecode">[00:10:50]</i> **Ben:** I'd love to, yeah!

<i class="timecode">[00:10:52]</i> **Hidde:** Cool.

<i class="timecode">[00:10:53]</i> **Ben:** So, we were talking ahead of time. We wanted to have a site that we could do a report on. It's always tricky, like, picking the right site to do, because we don't want to come off like we're shaming any particular tool. So what we're about to do is not shaming any particular tool, but rather just leveraging a site that is very widely used and using it as just kind of a demo for stuff. So we are going to be using Wikipedia as our scope, right? 

<i class="timecode">[00:11:26]</i> **Hidde:** Yeah. Just thought that would be, like, a nice and neutral thing to look at. Our goal today is not to blame anyone or kind of look at the actual issues too much, but more like how, if we were to get asked by Wikipedia to do a report, what would the steps be, what would that look like.

<i class="timecode">[00:11:47]</i> **Ben:** Alright. So I'm on the Wikipedia site. What do I do now? Like, how do I get started with an audit? 

<i class="timecode">[00:11:57]</i> **Hidde:** Yeah. So basically the first step in WCAG-EM is to define a scope. So there's a lot of pages on Wikipedia. Actually, that's a nice example. Lots of websites have this problem that they might have, like, thousands of pages. I don't know how many Wikipedia has. It says there, I think, it's like 6 million plus. That's a lot of pages! We're not going to be looking at all of those pages today. <i class="brackets">[chuckles]</i> That would be really hard. So what WCAG-EM does is to say if you look at a sample within this website, you can maybe find 10 to 20 different pages that are representative for this website and then look at those.

<i class="timecode">[00:12:45]</i> **Ben:** Okay.

<i class="timecode">[00:12:46]</i> **Hidde:** Before we do that, though, we need to kind of set up some metadata. So the tool has a stat for that. So basically you press the "Start new report" button, and then it takes you to the first page where you can fill in some information about this website. So that's "Wikipedia."

<i class="timecode">[00:13:07]</i> And then the scope of the website. It could be something like "All pages on wikipedia.org." That's a very broad scope. But it's basically what are you aiming to have a report about. Like, what does this report talk about? And usually it's the root, like, URL for some website. Sometimes it will be things like "except the German Wikipedia" or, you know, it has some exceptions there like if you link out to other pages and you want to make that explicit. 

<i class="timecode">[00:13:44]</i> Cool. So yeah, just the fictional thing that we're doing here.

<i class="timecode">[00:13:49]</i> And then in the next step, you can take your version of WCAG. So in 2008, we got WCAG 2.0. More recently, we got 2.1. 2.2 is coming. I usually just pick 2.1 as it's, like, the latest version.

<i class="timecode">[00:14:04]</i> **Ben:** Mhmm.

<i class="timecode">[00:14:05]</i> **Hidde:** And then WCAG is separated into different levels, so we can also choose what we want to do there, if we want to check just to Level A ones, or AA or AAA. I usually go for AA, just because that's what most organizations are looking for and also what the European laws prescribe. Sometimes I've heard people look at just the single-A issues to kind of, yeah, make it easier or something to do a report because there's less checkpoints and maybe it's a start or something for them. But yeah, let's pick AA today as our conformance target.

<i class="timecode">[00:14:47]</i> **Ben:** Okay!

<i class="timecode">[00:14:48]</i> **Hidde:** And then we'll need to set a baseline. And what that means in terms of WCAG-EM is that we want to say what are we going to claim is supported. So what we could do is say we only want to claim that this website is accessible on Firefox. That doesn't make a lot of sense, so we would probably want to say maybe the latest version of Firefox, Edge, Chrome, Safari. Like, have a couple of browsers there, and that will be our baseline. So we're basically claiming on these browsers and on these assistive technologies, we want to say that accessibility exists. 

<i class="timecode">[00:15:33]</i> **Ben:** Okay! Yeah, and I'll just say, like, I guess, "with JAWS and VoiceOver screen readers."

<i class="timecode">[00:15:43]</i> **Hidde:** Yeah.

<i class="timecode">[00:15:44]</i> **Ben:** We won't be diving into JAWS or Voice— we might do some VoiceOver, perhaps, but like, just…

<i class="timecode">[00:15:49]</i> **Hidde:** Yeah.

<i class="timecode">[00:15:49]</i> **Ben:** Just to have something to put in here today.

<i class="timecode">[00:15:52]</i> **Hidde:** Yeah. This is what the report claims. And sometimes the client will say, you know, "I want to have these versions," or maybe they have an internal system for what browser versions they're trying to support.

<i class="timecode">[00:16:03]</i> **Ben:** Okay!

<i class="timecode">[00:16:03]</i> **Hidde:** I know the Dutch government, when they check these reports, they don't like if you say "latest version." They want to see version numbers. I personally like "latest version" because, yeah, it makes sense and I don't see there's a lot of differences in accessibility when it comes to WCAG between these versions because they're all, like, evergreen browsers at this point.

<i class="timecode">[00:16:24]</i> **Ben:** Mhmm.

<i class="timecode">[00:16:25]</i> **Hidde:** So I've not seen a lot of reports where it was super accessible in Chrome 81 and a lot less in Chrome 80. So, yeah, it depends on how detailed you want to get, but you can be detailed there. 

<i class="timecode">[00:16:38]</i> **Ben:** Yeah. Before we move on, I've actually got a question from the chat from Chan, who's asking about the conformance target. "For a small company or product, does it make sense to do this in passes? Like, maybe you start with an audit for A, and then AA, and then AAA?"

<i class="timecode">[00:16:55]</i> **Hidde:** Yeah, it CAN make sense. I've seen people do it, because you do less checkpoints. But I usually do AA, just because…

<i class="timecode">[00:17:06]</i> **Ben:** Mhmm.

<i class="timecode">[00:17:07]</i> **Hidde:** …once you're auditing, it's easy to find them all, and then you could always, like, later filter for the single-A issues and leave the AA ones for later. I see this partly as a backlog-filling exercise, like some of these things go to the backlog and it's fine if you don't address them straight away.

<i class="timecode">[00:17:27]</i> **Ben:** Okay.

<i class="timecode">[00:17:28]</i> **Hidde:** But it doesn't usually — yeah, I mean, it takes more time of course, to find more issues. So, yeah, if your budget is small, maybe it can be cheaper to get a single-A audit. 

<i class="timecode">[00:17:39]</i> **Ben:** That makes sense. Okay, so yeah, not like… Because, probably, developers are going to be working at this. Like, they're going to be expecting, like, their backlog to be loaded up with a bunch of stories. It doesn't make sense to say, like, "Oh, we're going to add half the stories now with this first audit, and then, once you're done with that, we'll add the next half." You know?

<i class="timecode">[00:17:57]</i> **Hidde:** Yeah.

<i class="timecode">[00:17:57]</i> **Ben:** It seems to make more sense just to put them all in—

<i class="timecode">[00:18:01]</i> **Hidde:** Yeah.

<i class="timecode">[00:18:02]</i> **Ben:** —and address them all as the team can prioritize.

<i class="timecode">[00:18:06]</i> **Hidde:** Yeah, definitely. And it can be, like, time-consuming to get someone in externally to do an audit. It's like when arranging five minutes or whatever. So yeah, it's usually the best bang for your buck to then have both for AA there. 

<i class="timecode">[00:18:20]</i> **Ben:** Makes sense! Okay, and then do you tend to put anything in the additional requirements?

<i class="timecode">[00:18:27]</i> **Hidde:** Yeah. That's basically for if the website owner has requested, like, "I would also like to put some extra information in here" or "I want you to focus on something specific" or "There's some use cases I want to be listed in this report." I usually leave it empty, but yeah, that's great. Yeah, you can put some information like that "focus on right side infobox." Yeah, that makes sense. And then anyone reading the report will know, alright, these were the requirements when we started out. 

<i class="timecode">[00:19:06]</i> **Ben:** For sure. And so this might be a great way to encode, like, if you've just added a new feature, right? Like, that's probably going to be the highest-priority stuff instead of retreading the features that have been in production for a while.

<i class="timecode">[00:19:17]</i> **Hidde:** Yeah.

<i class="timecode">[00:19:17]</i> **Ben:** It's still a general audit but, like, the audit's really focusing on the newest bits.

<i class="timecode">[00:19:24]</i> **Hidde:** Yeah, but then you'd also need to update the target at the top—

<i class="timecode">[00:19:30]</i> **Ben:** Ohh, I see!

<i class="timecode">[00:19:30]</i> **Hidde:** —because we've got all the Wikipedia. And that's where that kind of comes in. So in the scope of the websites, if you're saying all majors, then the report has to be about all pages. However daunting that is, because yeah, 6 million pages in Wikipedia. That's a lot, but we'll get to that because we'll be finding a sample. 

<i class="timecode">[00:19:51]</i> **Ben:** Okay! Yeah, in that case I will probably remove this and, like, yeah, we'll just say, like, generally, like, articles, I guess. All articles and the homepage. 

<i class="timecode">[00:20:02]</i> **Hidde:** Yeah.

<i class="timecode">[00:20:03]</i> **Ben:** Okay! Cool! What now?

<i class="timecode">[00:20:06]</i> **Hidde:** Awesome. Then we've got our first step and we've set up our evaluation. An on the right, you can see that we've now got a report for Wikipedia—

<i class="timecode">[00:20:16]</i> **Ben:** Okay!

<i class="timecode">[00:20:17]</i> **Hidde:** —with some parts of WCAG listed there.

<i class="timecode">[00:20:23]</i> So yeah, I think we could go to the next step, and that's about exploring the websites and figuring out what's on the website and listing some of that. And this step is in WCAG-EM. When I do audits, I don't tend to see a lot of differences, because this is often not about your latest framework. It's often about the core technologies that websites built with. And I don't see a lot of websites that don't use HTML, or CSS, or JavaScript for that matter, so usually I'll end up, like, checking all of them because these technologies exist in most of the pages.

<i class="timecode">[00:21:04]</i> If you have very specific things, like sometimes you might have a website that is built in XHTML, and that is important to that particular place, yeah, there might be some, some exceptions there. And usually when you're performing an audit, you will have heard that from the person kind of commissioning the audit.

<i class="timecode">[00:21:25]</i> Makes sense! Alright.

<i class="timecode">[00:21:30]</i> Cool.

<i class="timecode">[00:21:31]</i> **Ben:** And then optional exploration notes. This looks like it's for us more than for the final product. Okay. 

<i class="timecode">[00:21:42]</i> **Hidde:** Yeah. Yeah. If I work alone, I might leave this empty. It happens that these all just get, like, shared between different auditors, and then it could be helpful, like "Look out for that weird contact page, because it's got a form that doesn't make sense" or whatever. You can have some information evidence but it's, yeah, for just maybe some other auditors. 

<i class="timecode">[00:22:10]</i> **Ben:** Okay! Makes sense!

<i class="timecode">[00:22:13]</i> And then maybe in here I'll put, like, "Homepage" and then, like, "Article," I think are probably the two main pages — page types we'd be interested in for Wikipedia. 

<i class="timecode">[00:22:23]</i> **Hidde:** Yeah. Yeah, so these are our own notes. And that's great! Like, we can look at those later on. They won't show up in the report, but they are, yeah, they are nice to have.

<i class="timecode">[00:22:37]</i> **Ben:** Okay!

<i class="timecode">[00:22:38]</i> **Hidde:** And I think that if there are no questions, we could probably move on to the third step, which is us trying to find out what our sample looks like. And this is one of our important steps, I think, because what we're trying to do here is making that jump from the 6 million pages that Wikipedia has to something that we potentially go and audit.

<i class="timecode">[00:23:05]</i> **Ben:** Yeah!

<i class="timecode">[00:23:05]</i> **Hidde:** So what I usually try and do is, like, figure out what sort of templates exist in a website and figure out, like, how many different pages exist. So we've got this homepage and we've got, like, individual article pages. 

<i class="timecode">[00:23:24]</i> **Ben:** Like, this page as well. Oh, geez. Sorry, Wikipedia. Another time, perhaps.

<i class="timecode">[00:23:32]</i> <i class="brackets">[Hidde chuckles]</i>

<i class="timecode">[00:23:33]</i> And then, yeah.

<i class="timecode">[00:23:33]</i> **Hidde:** It's good, though, like, there's a bunch of things that pop up and that, like, yeah, we can take notes of. 

<i class="timecode">[00:23:39]</i> **Ben:** And I think there's even an article about, like, web accessibility. That could be nice and meta to use. There's no, like, images here, though, so maybe I'll do one that would have a lot of images or something like that. 

<i class="timecode">[00:23:53]</i> **Hidde:** You can use the one for assistive technologies. I think that has some pictures.

<i class="timecode">[00:24:02]</i> **Ben:** Oh, you're right. Oh, you're right, that's good. Very meta. Love it.

<i class="timecode">[00:24:07]</i> **Hidde:** <i class="brackets">[chuckles]</i> Yeah.

<i class="timecode">[00:24:08]</i> Yeah, so what we want to find out is, like, we want to be sure that we cover the whole website without actually looking at every individual page.

<i class="timecode">[00:24:19]</i> **Ben:** Yeah.

<i class="timecode">[00:24:20]</i> **Hidde:** So, yeah, you want to select a bunch of pages, and I mentioned before, like, I usually have between 10 and 20 pages. It depends a bit on who is doing the audits. Like, I know some companies have, like, internal standards for that like they'll have a minimum of 20 or sometimes a client might even say, "I want to have at least so many pages checked." And it depends on a lot of factors, like how big is your website? How old is it? Is there a lot of complexity? Is there even differences between pages? Like, there might be here. Like we have "Assistive technology," which has a picture, but we had "Web accessibility" that didn't have a picture. So yeah, there are those kind of differences, too, between different pages.

<i class="timecode">[00:25:03]</i> **Ben:** Okay!

<i class="timecode">[00:25:04]</i> **Hidde:** So yeah, we're trying to have a good sample here. 

<i class="timecode">[00:25:07]</i> **Ben:** Yeah, and if we had, you know, someone from Wikimedia on the call, right, they might be able to tell us more about, like, what some of those templates are.

<i class="timecode">[00:25:16]</i> **Hidde:** Yeah.

<i class="timecode">[00:25:17]</i> **Ben:** Here… Sorry, I've just noticed that it says "or eAccessibility," and I've legitimately never heard that. Have you?

<i class="timecode">[00:25:25]</i> **Hidde:** I think that might be a… I was going to say, is there some character encoding thing?

<i class="timecode">[00:25:32]</i> **Ben:** No!

<i class="timecode">[00:25:33]</i> **Hidde:** But that's interesting. I don't think I've heard that either. Maybe folks in the chat have. 

<i class="timecode">[00:25:40]</i> **Ben:** Sorry, I'm rebranding, y'all. I don't do web accessibility. I'm eAccessibility. I'm, like, Web 1.0, you know? 

<i class="timecode">[00:25:49]</i> **Hidde:** Ahead of the curve.

<i class="timecode">[00:25:51]</i> **Ben:** You what?

<i class="timecode">[00:25:52]</i> **Hidde:** You're ahead of the curve.

<i class="timecode">[00:25:54]</i> **Ben:** Yeah. I feel like the "e-" prefix is very '90s, early 2000s.

<i class="timecode">[00:26:00]</i> **Hidde:** Yeah.

<i class="timecode">[00:26:01]</i> **Ben:** Rshig, welcome. Good to have you here.

<i class="timecode">[00:26:04]</i> Yeah! So, I think… Do we know of any other, like, types of — actually, you know what? I'm gonna pull up one last kind of article that I'm gonna say is probably meaningful, and that is the list of lists of lists.

<i class="timecode">[00:26:24]</i> **Hidde:** Yeah, great!

<i class="timecode">[00:26:25]</i> **Ben:** So Wikipedia has tons of, like, lists of lists and also… Yeah, it has tons of lists. It has tons of lists of lists. And this is its list of lists of lists. 

<i class="timecode">[00:26:38]</i> **Hidde:** Amazing. I didn't know about this page, but I will be bookmarking it. <i class="brackets">[chuckles]</i> That looks great! And it's a good example of, like, yeah, different types of content that we might encounter. What might be good, too, is look at that left-hand sidebar to see if there's anything going on there.

<i class="timecode">[00:26:58]</i> **Ben:** Yeah!

<i class="timecode">[00:26:59]</i> **Hidde:** Like any weird pages that we didn't expect. 

<i class="timecode">[00:27:03]</i> **Ben:** Let's see.

<i class="timecode">[00:27:07]</i> Okay, so we've got portals. Who knows? Maybe this could be something interesting as well. Looks like we've got some, like, form stuff going on here.

<i class="timecode">[00:27:21]</i> **Hidde:** Yeah.

<i class="timecode">[00:27:22]</i> **Ben:** For instance, it does not seem like this label is associated with the input! So yeah! Maybe we'll include this help page as well. 

<i class="timecode">[00:27:30]</i> **Hidde:** Yeah. This happens when I am in this phase, like, trying to figure out what pages exist, and, like, I'm going to click this label and see if it works!

<i class="timecode">[00:27:40]</i> **Ben:** Mhmm.

<i class="timecode">[00:27:41]</i> **Hidde:** Through my first day I take mental notes, or sometimes physical notes on paper. 

<i class="timecode">[00:27:46]</i> **Ben:** Alright, so I think we've got maybe a few different pages. Again, if we, you know, if we were actually doing this on behalf of Wikipedia, we would probably get a much larger set of templates to consider.

<i class="timecode">[00:28:01]</i> **Hidde:** Yeah! Yeah, totally, yeah.

<i class="timecode">[00:28:03]</i> **Ben:** But for today's purposes, I think this is probably representative enough?

<i class="timecode">[00:28:09]</i> **Hidde:** Yeah. Yeah. And so, yeah, in reality, you would really want to be sure "have I covered all of the different types of pages." This makes sense. Yeah, we will go for this at this point. So we have two steps in Step 3 in our application—

<i class="timecode">[00:28:27]</i> **Ben:** Okay!

<i class="timecode">[00:28:28]</i> **Hidde:** —and in the methodology. So the steps that we see here are in that specification as well. This is just a nicer way, an interactive way, to deal with them. So there's the… yeah, there's the different stats there and they have explanations of, like, what exactly you are looking for.

<i class="timecode">[00:28:47]</i> **Ben:** Okay.

<i class="timecode">[00:28:47]</i> **Hidde:** And I think there are links as well between the tool and the different steps that exist.

<i class="timecode">[00:28:56]</i> **Ben:** Good, okay. So… yeah… 

<i class="timecode">[00:29:00]</i> **Hidde:** So basically, we have the two headings there. One is "Structured Sample" and the other is "Randomly Selected." And you want to have 10% extra pages that are randomly selected, so if you have, like, 15 or let's say 16 in your starter sample, then you want to have 1.6 randomly selected, or 2. So yeah, you want to have some randomly selected pages, too. 

<i class="timecode">[00:29:28]</i> But that's fine. We can just press "Add web page" and then start to add the ones that we've just kind of found. 

<i class="timecode">[00:29:33]</i> **Ben:** Are we picking the structured ones? Is that what we're doing? 

<i class="timecode">[00:29:37]</i> **Hidde:** Yeah, yeah. 

<i class="timecode">[00:29:37]</i> **Ben:** Yeah, so we'll say this is "Homepage." And this'll be here: the core, like, apex wikipedia.org. Ope — losing my tabs here! Okay. And then there's, like the, like, specifically the English homepage, which should be the same thing only "en" would be there — .org. We'll say we've got an article without images. And this will be… oh, actually, it is a different link here. And then article WITH images.

<i class="timecode">[00:30:39]</i> Sorry, I've received a super secret note from Hidde in our chat. Good to know. Thank you. Basically just don't refresh the auditing tool, otherwise we'll lose our progress!

<i class="timecode">[00:31:08]</i> **Hidde:** Yeah, this is great. And these short names, we will be using later, so, yeah, it's great to give them some descriptions.

<i class="timecode">[00:31:14]</i> **Ben:** Okay!

<i class="timecode">[00:31:15]</i> **Hidde:** Awesome.

<i class="timecode">[00:31:19]</i> **Ben:** Almost done.

<i class="timecode">[00:31:30]</i> Alright! Cool.

<i class="timecode">[00:31:39]</i> What next then, now that we've got all these in?

<i class="timecode">[00:31:44]</i> **Hidde:** Yeah, so now you have a bunch of pages that we can check for. You'll see that underneath there is this other section called "Randomly Selected Sample."

<i class="timecode">[00:31:52]</i> **Ben:** Okay.

<i class="timecode">[00:31:53]</i> **Hidde:** So now it's telling you actually you'll need one randomly selected page. I don't know if Wikipedia has a random button, but yeah, officially we need to find, like, that. Yeah, and this is a literal random page.

<i class="timecode">[00:32:08]</i> **Ben:** Okay! Works out well.

<i class="timecode">[00:32:10]</i> **Hidde:** I don't always know for sure what to= with this stat. Like, yeah, I'll find, like, the random thing. You can use a tool for it, too.

<i class="timecode">[00:32:20]</i> **Ben:** Okay.

<i class="timecode">[00:32:21]</i> **Hidde:** Or, like, blindfolded picking.

<i class="timecode">[00:32:23]</i> Cool, so we've got a sample. We've got a randomly selected sample, which is 10% of the regular, like, how many you have in your regular. 10% of that.

<i class="timecode">[00:32:33]</i> And so now we have a sample, and the next step is kind of the meat of our audit. This is where we are going to be doing the actual auditing.

<i class="timecode">[00:32:43]</i> **Ben:** Okay.

<i class="timecode">[00:32:43]</i> **Hidde:** So that's, yeah. Take us to the next step. 

<i class="timecode">[00:32:46]</i> **Ben:** Alright!

<i class="timecode">[00:32:51]</i> Okay! I see some WCAG success criteria here.

<i class="timecode">[00:32:56]</i> **Hidde:** Yeah! So yeah, for those who have worked with WCAG before, this will come in familiar. So you will see each of the different success criteria listed here.

<i class="timecode">[00:33:06]</i> Some other things that you see here… at the top, you can import data from automated tests. And the goal there is to have things like if you have run Axe on your website, you could potentially import that data. At the moment, I don't know of any tools that provide this data in exactly the way that it is needed here. I was still a bit unsure at the launch of this tool. But that's very much a, yeah, a feature that is gonna come in really handy in the future. So you could have something that populates this page somewhat automatically.

<i class="timecode">[00:33:47]</i> On the left, you'll see there's a bunch of WCAG versions there so you can say, "I only want to audit for the stuff that's added in WCAG 2.1" or something like that. But yeah, usually, I'll just keep that to 2.1 because I want to audit everything.

<i class="timecode">[00:34:02]</i> **Ben:** Makes sense!

<i class="timecode">[00:34:04]</i> **Hidde:** Sorry?

<i class="timecode">[00:34:05]</i> **Ben:** Oh, I was just saying, makes sense.

<i class="timecode">[00:34:08]</i> **Hidde:** Yeah. 

<i class="timecode">[00:34:10]</i> **Ben:** Okay.

<i class="timecode">[00:34:11]</i> **Hidde:** And then the conformance level. Yeah, that's the same. Like, you can uncheck and check that. And then underneath that you can actually say these are the pages I want to add specific results about.

<i class="timecode">[00:34:21]</i> **Ben:** Ohhhh!

<i class="timecode">[00:34:22]</i> **Hidde:** And not everyone uses that, but you can. Yeah, so when you check "Homepage," it will show up underneath, and then you can have results specifically for Homepage.

<i class="timecode">[00:34:34]</i> According to WCAG, you don't have to do that. So for, like, 1.1.1, you can say "this whole website fails 1.1.1" if you find one image that doesn't perform. You could say it's failed and that's it. But if you want to be more helpful, you could actually add results for specific pages and say, you know, this happens on the homepage or, like, even add a description for that.

<i class="timecode">[00:34:59]</i> **Ben:** That makes a lot of sense, yeah. I feel like that would be a lot more actionable and… I understand the guidance of, like, "if you fail even once on the website, the website, like, violates this," right?

<i class="timecode">[00:35:12]</i> **Hidde:** Yeah.

<i class="timecode">[00:35:12]</i> **Ben:** But, like, especially when you've got something like Wikipedia, which is so large and so community-contributed, like, I don't know, I feel like that would be a hard pill to swallow to be like, "Yeah, well, I found one article where an image doesn't have alt text. Therefore the whole website is, you know, like, noncompliant." 

<i class="timecode">[00:35:33]</i> **Hidde:** Yeah. Yeah, the difficult thing with WCAG, I guess, like, this is the characteristic of, like, how these WCAG audits work. So yeah, if you do find one problem, the whole thing fails that thing. And with that, like, if at least one of the criteria have the status of failed, then the whole website has failed. I always try to make sure the wording is not like that. Like, yes, the official outcome is called "failed," but yeah, I'll be nice to you because, yeah, if you have only one problem on your whole site, that's great. Then you're probably doing better than my blog. I'll have problems there. We all have accessibility problems. It's an ongoing thing. But yeah, for the purposes of this, yeah, if there's one fail, yeah, you can be more helpful by sort of, yeah, having results for different pages and explaining kind of the nuance of what's happening.

<i class="timecode">[00:36:31]</i> **Ben:** Let's see, real quick, if there actually is… I think we said earlier, when we looked at this, that this was actually, like, a background image, right? 

<i class="timecode">[00:36:40]</i> **Hidde:** Yeah, the logo in the article page was a background image. Maybe this one is, too. 

<i class="timecode">[00:36:45]</i> **Ben:** Yeah. I'm actually having trouble finding the image itself. It might be in one of these, but I think… yeah. Well, no, hang on.

<i class="timecode">[00:37:01]</i> **Hidde:** It's somewhat hidden away there.

<i class="timecode">[00:37:04]</i> **Ben:** Yeah! It's difficult to find, like, the actual image. But given I can't, like, click or drag it anywhere, I think it is, like, just a background image. I think.

<i class="timecode">[00:37:15]</i> **Hidde:** Yeah.

<i class="timecode">[00:37:15]</i> **Ben:** So let's say for the sake of this audit that we have determined it is a background image and therefore it's not been described. We would probably put that in right here, right? 

<i class="timecode">[00:37:27]</i> **Hidde:** Yeah. Yeah, it would be typing that there pretty much, yeah.

<i class="timecode">[00:37:31]</i> **Ben:** "Wikipedia logo." How would you word it? Like, just "does not have a text alternative"? 

<i class="timecode">[00:37:44]</i> **Hidde:** Yeah! That's - I think that's great. What I do sometimes do is have them separated between problem and then solution.

<i class="timecode">[00:37:54]</i> **Ben:** Okay!

<i class="timecode">[00:37:54]</i> **Hidde:** So, like, I might have headings. And something that isn't visible here, but it is true, you can put in Markdown, too.

<i class="timecode">[00:38:01]</i> **Ben:** Ooooh.

<i class="timecode">[00:38:01]</i> **Hidde:** So you could have, like, a Markdown heading there, and that will show up in the report later on as HTML. 

<i class="timecode">[00:38:10]</i> **Ben:** Gotcha! Very cool, okay.

<i class="timecode">[00:38:25]</i> Okay. And I mean, presumably Wikipedia has looked at that and gone, "Hey, we've got valid reasons why we don't feel like we need to expose this" but, like, in this case, for the purposes of today, we're saying that this is an issue that would need to be reported.

<i class="timecode">[00:38:40]</i> **Hidde:** Yeah. And then that shows up in the report later on. Oh, and one thing we also need to do is, on the left there, it says "Outcome," and for Outcome, we'll need to select "Failed," which is harsh wording, but that's what it's called in the standard and, yeah, what we'll have to call it. 

<i class="timecode">[00:39:00]</i> **Ben:** Good deal! Anything else more you want to show off in this page, in the Audit Sample page?

<i class="timecode">[00:39:09]</i> **Hidde:** I think this looks great. So yeah, this is basically what we have here.

<i class="timecode">[00:39:15]</i> One thing you can also find for each of the success criteria is the links to "Understanding" documents and the "How to Meet" documents, so they can kind of help you. And that is kind of going to a version of WCAG called the quick reference. And so these are all links that then bring you back to the standard and help you find out, you know, what is 1.1.1 about, how am I supposed to even audit for this? It will this like information like these. If you do it in this way, then is sufficient to meet WCAG. If it is done in this way, it's a failure. So these are listed in "Understanding" documents, I think somewhat more to the bottom of this. Yeah, there's lists of sufficient techniques and failures as well.

<i class="timecode">[00:40:09]</i> **Ben:** Okay!

<i class="timecode">[00:40:11]</i> **Hidde:** So yeah, I think these can kind of help you figure out how to assess the issue. One thing to note about these documents, the "Understanding" documents, is that they are not part of the standard, so they are not advisory. They don't have — they are not compulsory. They don't have any status like the WCAG specification does. So WCAG is the normative standards, and all of this information here is advisory or non-normative as they call it, which means it's not required. It's just suggestions for how to interpret WCAG. It's not WCAG itself. And so that's a bit of a caveat with those documents. But they can still be quite helpful if you're auditing and just want to know, like, if someone is doing this, is that okay for this particular part. 

<i class="timecode">[00:41:03]</i> **Ben:** Makes sense! Okay. Cool! So yeah, tons of ways to figure out more as to, like, you know, does this actually pass or fail—

<i class="timecode">[00:41:13]</i> **Hidde:** Yeah.

<i class="timecode">[00:41:13]</i> **Ben:** —the requirement as it's set forth. Okay!

<i class="timecode">[00:41:17]</i> **Hidde:** Definitely, yeah. And then you can also view it in the report that is generated. So there's with each of these criterions — criteria — there is a link called "View in report," and that will take you to the report and show that particular result.

<i class="timecode">[00:41:33]</i> **Ben:** Okay, is it safe to just click this, or should I open this in a new tab, or…?

<i class="timecode">[00:41:39]</i> **Hidde:** It should be safe to just click it, yeah.

<i class="timecode">[00:41:42]</i> **Ben:** Cool. Oh, okay, got it!

<i class="timecode">[00:41:43]</i> **Hidde:** And that takes you to what that looks like in the report. So yeah, you can see your previously entered Markdown. It shows up in a massive table. 

<i class="timecode">[00:41:53]</i> **Ben:** Nice! Okay! Very cool. Good to know. And it looks like I could go back through and just edit if I realize, like, I missed something.

<i class="timecode">[00:42:04]</i> **Hidde:** Yeah.

<i class="timecode">[00:42:05]</i> **Ben:** Okay. Cool.

<i class="timecode">[00:42:06]</i> **Hidde:** Yeah, and this is something I do a lot. Like, I go back and forth between these tools, so between the report and the reporter, so to say. So, yeah, that's nice.

<i class="timecode">[00:42:18]</i> I think one thing that we haven't done is checked entire sample results.

<i class="timecode">[00:42:24]</i> **Ben:** Okay!

<i class="timecode">[00:42:26]</i> **Hidde:** This is kind of technically a WCAG type of thing, so we also will need to set the entire sample to be failed rather than not checked. 

<i class="timecode">[00:42:36]</i> **Ben:** Oh, I see. And do that here, is what you mean. 

<i class="timecode">[00:42:40]</i> **Hidde:** Yeah. So you can, if you press the Edit button, it will go back, and then, yeah, you can check it there.

<i class="timecode">[00:42:46]</i> **Ben:** Okay.

<i class="timecode">[00:42:48]</i> **Hidde:** And then it's officially counted as something that has failed. And you'll see those numbers also update. So it says zero things have passed and one of them has failed at the top. And then there's 49 to go within our current kind of conformance target, so any AA WCAG 2.1 criteria to check and do.

<i class="timecode">[00:43:12]</i> **Ben:** Makes sense! Okay! And so obviously, like, we're not going through and, like, updating all of these today, but yeah.

<i class="timecode">[00:43:21]</i> So say, you know, I go through. I say, like, this one's passed. Like, they're all… like, the rest of them are all passed. Then what? 

<i class="timecode">[00:43:30]</i> **Hidde:** Yeah, then… so ultimately, you probably want to set a status for each of them. And then in your report you will have information, like, that you kind of present to a client and say, "Yeah, these are… you know, you've missed two out of 50, and this is how to solve it." So you can present them with a report. And you'll notice, like, in the sidebar, it also updates, like, what your status is.

<i class="timecode">[00:43:56]</i> **Ben:** Oh!

<i class="timecode">[00:43:56]</i> **Hidde:** So that tool's really helpful. Also, if you have, like, imported something from somewhere else, you can see in that box kind of how far they've gotten with their outcomes.

<i class="timecode">[00:44:07]</i> So what we can do now is maybe go to the next page and—

<i class="timecode">[00:44:10]</i> **Ben:** Yeah!

<i class="timecode">[00:44:11]</i> **Hidde:** —fill out the last kind of details about this report. 

<i class="timecode">[00:44:15]</i> **Ben:** Okay! And… "Report Findings." Okay.

<i class="timecode">[00:44:19]</i> **Hidde:** Yeah, yeah. So this is kind of another page with some meta-information like, you know, what we want to call this report. You'll see that show up. By default, I think it just says "Report." And you can write something like "Accessibility of Wikipedia.org."

<i class="timecode">[00:44:43]</i> **Ben:** Okay. Then "Evaluation commissioner." Is that whose…? Who is the commissioner?

<i class="timecode">[00:44:50]</i> **Hidde:** It's our Twitch community! <i class="brackets">[chuckles]</i> Or something. Yeah.

<i class="timecode">[00:44:56]</i> **Ben:** Alright!

<i class="timecode">[00:44:56]</i> **Hidde:** So, kind of the person who pays for the audit or, yeah, wanted this audit to be done.

<i class="timecode">[00:45:03]</i> **Ben:** Oh, got it!

<i class="timecode">[00:45:04]</i> **Hidde:** And then "Evaluator" is yourself.

<i class="timecode">[00:45:07]</i> **Ben:** That's me!

<i class="timecode">[00:45:08]</i> **Hidde:** Yeah. Cool. Well, the day is today. That has happened. And then people will usually write, like, an executive summary like "Oh, this was really bad" or, you know, "You've done amazing - good job." Yeah, I see that it depends a lot, like, on the organization, how much information they put there.

<i class="timecode">[00:45:31]</i> And I think this is another field that, it might show up in a report, but yeah, we can probably leave it empty.

<i class="timecode">[00:45:39]</i> **Ben:** Okay!

<i class="timecode">[00:45:40]</i> **Hidde:** And with that, we have created a report, and yeah, we can view that in "View report." And so that's the page we've seen earlier. It has all of our meta-information, and then for each of the different criteria, it's got the information and kind of, yeah, whatever we've written about them. And these can get really long in some cases, and sometimes they get really short, too, so it really depends on who the auditor is. I have heard in the Dutch government, they sometimes get reports that have gone through none of the criteria, so they just say everything is passed or, like, even not checked. And there are reports where people write observations for every single thing and then they're really long. So, yeah, there's a lot of variety there. 

<i class="timecode">[00:46:31]</i> **Ben:** Okay! And then I noticed up top, we had some link to where I could, like, download the report. So this right here, this is the file that I would send to whoever, like, commissioned it. Ooh, love those description list elements there. 

<i class="timecode">[00:46:46]</i> **Hidde:** Yeah, it's super plain HTML so that you can kind of do whatever you want to do with it—

<i class="timecode">[00:46:52]</i> **Ben:** Okay!

<i class="timecode">[00:46:53]</i> **Hidde:** And, like, add stylesheets. We find a lot of auditing companies just process this in their own systems, either by writing CSS for this file, or there is the JSON export that people use to, like, do their whole own thing, even ordering, like, and all of that. 

<i class="timecode">[00:47:12]</i> **Ben:** Yeah. So is it opening Firefox for that? Oh, it's opening Firefox for that. 

<i class="timecode">[00:47:18]</i> **Hidde:** Ah, I love the JSON viewer in Firefox. 

<i class="timecode">[00:47:22]</i> **Ben:** Here we are. Ooh, is it…? 

<i class="timecode">[00:47:26]</i> **Hidde:** It's a bit hairy, like there's a lot of JSON there, so it needs to parse it, yeah.

<i class="timecode">[00:47:32]</i> So what this is, is a format I mentioned earlier. It's JSON linked data. So there is a bit of, like, meta-information along with the actual data-data. So it explains what everything is and it has, like, a schema type of thing there, and it will have your actual data. And the great thing about this format is that you can import and export it in various places—

<i class="timecode">[00:48:01]</i> Okay!

<i class="timecode">[00:48:01]</i> —that support this format. So this is actually another standard for, yeah, the EARL accessibility standard. I will put a link in the chat, actually.

<i class="timecode">[00:48:14]</i> **Ben:** Yeah, that'd be great!

<i class="timecode">[00:48:17]</i> Yeah, and so I can start to see myself using this, like maybe even having, in this world of DevOps and automated pipelines, like, you know, having something that, like, parses through this and surfaces it in some way as well. Yeah, I could see some use cases there. Yeah. 

<i class="timecode">[00:48:38]</i> **Hidde:** Yeah! And there's actually some talk in Europe about, like, exchanging these. So there is… some government organizations are asking for these files rather than HTML files, and that has to do with that, what I mentioned earlier. Like, people like to compare these reports if they are monitoring lots of reports, like in a country or even like in an area like the European Union and trying to compare these things.

<i class="timecode">[00:49:07]</i> So it's not used a lot just yet, but it could be used by lots of different tools that kind of integrate with each other. And I know some of these, like, automated testing tools are looking at, you know, can we maybe export in this format so that it gets more exchangeable, basically.

<i class="timecode">[00:49:25]</i> **Ben:** Okay! Makes a lot of sense!

<i class="timecode">[00:49:29]</i> Alright, so we have built a report. We've gotten it in kind of the exported formats that we can now hand around and give to people and demonstrate like, "Hey, good job, we did it." Is there anything else more that we want to see with this report while we're on it?

<i class="timecode">[00:49:48]</i> **Hidde:** I think that's about it. Yeah, we can press the Edit buttons and see if we want to edit anything there like the executive summary or anything. Yeah, that can happen, like, right in-place and you can write a bit more, and yeah, that's pretty much it. And then you can export it to HTML or JSON and, yeah, go ahead with it.

<i class="timecode">[00:50:11]</i> **Ben:** Makes sense! And then, Hidde, you've… so you demonstrated the official WCAG-EM Report Tool, but you've actually built kind of a complementary tool. Is that right? 

<i class="timecode">[00:50:25]</i> **Hidde:** Yeah, I did! If there's anyone here who likes Eleventy, they can also use this alternative tool that I built, which is like a starter pack for Eleventy that allows you to create performance reports a little bit like this. It assumes the same metadata, so you'll need to put in things like an evaluation commissioner and all those sorts of things, because they are from that WCAG-EM standard, so you'll find like the same kind of "oh, you need a target" and that sort of thing.

<i class="timecode">[00:50:57]</i> But I've kind of swapped things around. So where the official tool is standard-first, this is kind of issue-first. So you're putting in issues and then the standard is kind of metadata to those issues. So if you have an issue like this one that we're looking at — "Main menu doesn't work with keyboards" — the WCAG criterion 2.1.1 is metadata to that issue rather than in the official tool where the keyboard problem in the main menu is kind of metadata of 2.1.1.

<i class="timecode">[00:51:31]</i> **Ben:** Yeah!

<i class="timecode">[00:51:31]</i> **Hidde:** Swapping it around, making it more readable maybe.

<i class="timecode">[00:51:33]</i> **Ben:** Yeah, the main tool, the WCAG-EM, like, official tool is going to tell you, "Hey, you broke Success Criterion 2.1.1, and here's how you did that." And then this tool is like, "Here's an actual usability experience. Oh, by the way, this breaks 2.1.1." 

<i class="timecode">[00:51:50]</i> **Hidde:** Yeah. Yeah, that's, yeah. And I find it works well with clients who want to fix their problems, so who are very much focused on that. There are others who are more focused on conformance, so they are looking at, like, "Am I legally doing the actual minimum?," and this is more for like, you know, "What are my issues?."

<i class="timecode">[00:52:13]</i> I was looking at can I, like, build an export from this to, like, Jira or other places and it just takes this data, because there's, there's JSON… or it's Markdown files with some — what's that — frontmatter that has the metadata. 

<i class="timecode">[00:52:30]</i> **Ben:** Gotcha! Very cool. So if Eleventy is your speed, or if you want to surface this information in a way that's more focused around the issues, absolutely take a look at this Eleventy tool, which I've linked in the chat. That's awesome!

<i class="timecode">[00:52:49]</i> Is there anything more you you'd like to make sure we get in before we wrap up? 

<i class="timecode">[00:52:55]</i> **Hidde:** Um, no. If there's any questions — so, for people watching this, I can imagine it's a lot of information. Yeah, open for any of that. Yeah, I think we've covered sort of how to create a report officially. This is also official, but it swaps things around, so yeah, it's another way to try. 

<i class="timecode">[00:53:18]</i> **Ben:** Good deal! Yeah, if you've got any questions, feel free to drop them in the chat.

<i class="timecode">[00:53:21]</i> In the meantime, I'm going to go ahead and start promoting a few links. We've had Hidde on. You can follow Hidde at @hdv on Twitter. You should also be reading Hidde's blog. It is fantastic. You could also get to it with hidde.blog, which I love as a domain. That's brilliant. And yeah! Do you have anything else you wanted to promote, Hidde? 

<i class="timecode">[00:53:46]</i> **Hidde:** Oh yeah, one thing. I'm speaking at this accessibility conference tomorrow which is called Tech A11y Summit. It is free to attend, and I think at least some of it should be US-friendly, too. And yeah, it's got lots of people talking about accessibility tooling and things to improve accessibility. So yeah, join us if you want to want to know more about that. 

<i class="timecode">[00:54:16]</i> **Ben:** Alright! Yeah, we actually do have a question, which is you would go through all the criteria manually, right?

<i class="timecode">[00:54:23]</i> **Hidde:** Yes. I do also run automated tests and then I fail the problems was that those tests had manually. I mentioned before that there is this import thing that exists, but the way that currently works is that it isn't as helpful as a manual thing would be. Just realize, like, if you find the same issue in many different places, it might show up as a lot of different entries, whereas manually you might think "Alright, the logo is broken on every page, and I'm just going to file that once because it's easier to explain that way." So that's something I find useful, to kind of use the automated tests with them, aggregate them — I aggregate them in my head — and then put them into the system that way. 

<i class="timecode">[00:55:12]</i> **Ben:** Makes a lot of sense to me!

<i class="timecode">[00:55:16]</i> Alright! Yeah, so with that, Hidde, thank you so much for being on!

<i class="timecode">[00:55:21]</i> Chat. I wanna tell you about a few things that are coming up over the next week. So, first of all, this Friday — I know Nightbot has been dropping the promotion for this every once in a while — but our good friends over at Frontend Horse are doing a four-hour-long charity livestream. We're getting some excellent, excellent people together to just, you know, talk about web dev and donate to Team Seas, which is cleaning up the oceans. You should absolutely be there. Alex, if you're still around, please drop the link to your channel there, as well as anything else you wanted to share with that.

<i class="timecode">[00:55:57]</i> Additionally next Tuesday, 2pm Central, so same time as this stream, we're going to be having Chance Strickland on. We're going to be going through Remix! So if you haven't had a chance to play around with Remix quite yet, we're gonna be building a project management tool, so that's going to be a ton of fun. And if you want to keep apprised of all of the great things going on with Some Antics, you should go follow Some Antics on Twitter at @SomeAnticsDev.

<i class="timecode">[00:56:30]</i> So, yeah! Y'all, I'm gonna figure out someone to raid. Hidde, thank you again so much for being here. This has been a fantastic time, and I'm so happy to have had a chance to get you on! Bye, y'all! 

<i class="timecode">[00:56:43]</i> **Hidde:** Thanks so much for having me.

<i class="timecode">[00:56:46]</i> **Ben:** Absolutely.