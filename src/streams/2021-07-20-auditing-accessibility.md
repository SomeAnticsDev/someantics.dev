---
title: Auditing Websites for Accessibility with Anna E. Cook
thumbnailTitle: Auditing Websites for Accessibility
timeOfDay: 12pm
upload: https://www.youtube.com/watch?v=CjX91QlgW-g
demo: https://docs.google.com/spreadsheets/d/1VsSMRVohY9gvNCaO3gr9KtWcAb1jOnDvgN9g4VGLYqU/
hosts:
  - Ben Myers
  - Anna E. Cook
---

Accessibility audits are a powerful tool for communicating actionable improvements developers and designers can make to their websites. Join us on Some Antics as [Anna E. Cook](https://twitter.com/annaecook) shows us how to get started with auditing a website for accessibility!

## More From Anna

- [Follow Anna on Twitter](https://twitter.com/annaecook)
- [Anna on accessibility overlays](https://uxdesign.cc/theres-no-such-thing-as-fully-automated-web-accessibility-260d6f4632a8)

## Mentioned Links

- [Our finished audit](https://docs.google.com/spreadsheets/d/1VsSMRVohY9gvNCaO3gr9KtWcAb1jOnDvgN9g4VGLYqU/)
- [Alexa's site which we audited](https://therealalexa.com)
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [Deque University on unique landmarks](https://dequeuniversity.com/rules/axe/4.3/landmark-unique)
- [Inclusively Hidden, by Scott O'Hara](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)
- [Success Criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [Success Criterion 2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

## Transcript

**Ben:** Howdy, howdy, y'all. Welcome back to "Some Antics." Happy Tuesday. I am excited to be here and I'm excited to be joined by the one, the only, Anna E. Cook. Anna, hello. How's it going?

**Anna:** Hi, it's going well. How are you today?

**Ben:** I'm doing well. Yeah, it's been a good day. I got to see my family dog today, which is always a good thing. My little cat is perched up asleep on the bed to my side. Things could be much, much worse.

**Anna:** Indeed. Mine are on the couch sitting in the sunbeam that comes from my window.

**Ben:** Oh, man.

**Anna:** They're being very productive today.

**Ben:** Working hard?

**Anna:** Yes.

**Ben:** Those tireless coworkers?

**Anna:** They're always on me. HR is watching me very closely,
but they're the best coworkers I could ever have. So, I'll take it.

**Ben:** Well, it's great to have you. I had seen you around Twitter several times, but I first became exposed to your work through your axe-con talk. You spoke at the accessibility conference axe-con back in March, I believe that was. That was about this subject about auditing accessibility on websites. I'm excited to have you on. Before we dive into it, I would love for you to introduce yourself.

**Anna:** Absolutely. As Ben mentioned, my name is Anna E. Cook, 'E' for branding. I'm a Senior Accessibility Designer for Northwestern Mutual. Up until this point in my career, I've been advocating and pushing for accessibility within product designer roles and UX designer roles. I finally landed the dream job. I get to be an accessibility designer. Part of that is auditing and reviewing work for accessibility, meeting accessibility it needs, which is important for us to do theses designers'/developers' way. Everybody should be involved in some way, shape, and form. For me, I want designers to feel they can do this, and that they should do this because we can shift our emphasis left and do a lot in design. That will be the subject for our stream today. Doing some auditing.

**Ben:** Absolutely. With auditing, I have two questions for you, and the answers to these questions are going to be intertwined. I'm going to ask them as one chunk. First of all, what is the goal of an accessibility audit? Second of all, do you have any personas or target audiences in mind when you prepare an audit?

**Anna:** Great questions. When it comes to an accessibility audit, it's going to depend on your audience. The goal is to capture issues that exist in designs, a live experience, anything in between that can be captured using automated testing as well as manual testing. We want to capture those, especially sooner than later, because we want to make sure that we're putting things out there that are accessible and usable. We want to help folks on our teams understand that these things are occurring. The amazing thing about accessibility audits is that -- Excuse me while I continue adjusting my chair - is that we can use them to map to trending needs and trending issues. We can say, for example, this color combination on our primary call-to-action doesn't have enough color contrast. We can map that to fundamental elements in our designs, our development, and our code, and fix them very holistically. That's the way we can show our teams what is occurring, ways we can fix it, and ways we can fix it as simply as possible foundationally.

To speak to the second question, what kind of personas do we keep in mind? Again, it'll depend on the audit. Some audits we're doing specific screen reader testing, and that will focus more on users who are blind or have low vision. Then others will do things like, " We're just testing within the designs and Figma themselves," that have some limitations in terms of our personas. When we're using the Web Content Accessibility Guidelines or WCAG, we tend to look at personas pretty holistically, but it can depend on the goals of your audit, the time that you have, and the tools you've got awesome.

**Ben:** Awesome. Who are you expecting to use this audit? Are you expecting that product owners will be using this, designers, developers?

**Anna:** Great question. The most common situation is that everybody will use the audit, at least in my experience, but how they use the audit is very different. For product owners, I tend to put together summaries and things like that. If you send them a spreadsheet with a bunch of audit items, I think you can watch their brains explode a little bit. With designers and developers you've got that whole audit itself so they can start doing specific fixes and looking at the exact code and snippets that are affected. I might have misunderstood what you meant by persona. I was thinking about…

**Ben:** I think that was excellent though.

**Anna:** OK, good. Well, it depends, again, on the audit itself, but I generally assume that everyone on a team is going to see that. I will always try to put together a presentation summarizing the results so folks don't implode.

**Ben:** What are some of the priority things you want to communicate in the audit?

**Anna:** Let's see. When I'm using these audits, what I'm trying to communicate is how…I mean touching on this a little bit, again, but I feel like when in the past people have presented audits, they'll present line items up to hundreds of items. My goal with these tends to be very…I'm biased as a designer. It tends to be very design- oriented where I will flag elements that are consistently occurring and say, "Hey, we could change just a little bit of our design in our code and that would fix it across the experience." That is the power of looking at these audits the way we should as designers and product owners and even developers. Additionally, giving them the tools to understand the specifics like how severe is the issue that we've encountered. If it's an A criteria, the minimum expected criteria in WCAG, then we're going to consider it more critical or serious. When it comes to AA or we'll probably, most likely, consider it critical or serious, at least or depending on the item. Then AAA we're going to still capture those and say, "Hey, those are some things we should be mindful of and consider when we're working on these." I feel like I may have rambled answering this question.

**Ben:** You're good.

**Anna:** Code snippets, specifics, URLs. Oh, I also would like, I use these as an opportunity to recommend ways to fix things. If I've captured something like this form label isn't being semantically tied to the form input itself, I can be like, " Hey, if we just tie these together and some code did that across on the fundamental form field element, we could fix all of this." That's all we have to do.

**Ben:** All right. I am excited to dive into this, but before we do, I want to… Can I get a question from the chat? We got Joe asking, when you audit sites to you stick entirely to WCAG or are you also drawing on your own experiences of best practices which may or may not be entirely reflected in WCAG?

**Anna:** That's a really good question. It depends on the maturity of the org in terms of their accessibility understanding where, for example, I'm coming off a big migraine from yesterday. I will capture things that I noticed that are likely to trigger migraines if the team… if I know the team and they know me well enough to have that conversation. If it's a team that's really early in their accessibility life or understanding, I'll try to stick with WCAG just so they can start to understand the primary and most fundamental elements early. Though, I would love it if sites were less likely to trigger migraines, because those are not fun. That's as an example.

**Ben:** Awesome. Thank you. I want to dive into this. Let's go ahead, and I'm going to, now, share my screen. All of you, this is Anna's Twitter. Go follow Anna on Twitter. You're not going to regret it, seriously. Absolutely, one of the best successfully follows you could have.

First of all, thank you to everyone who's shown up and everyone who's been following. Thank you, Michael Chan, for gifting that sub to Stephanie. Some Antics now has subscriptions. I'm working on getting all emotes working. In the meantime, have a cool tuna. If you subscribe, you'll get that cool tuna emote. Full disclosure, I am hoping to use subscription money to be able to fund closed captions down the road. Just know that if you do subscribe, it's going to a good cause.

You sent me, ahead of time, this template that you use. We're going to be working our way through… Actually, would you like to describe what we're going to be doing today?

**Anna:** Yeah. I will mention that this template is available to anybody who…I believe I shared it after axe-con. I can share again today, but just know that this template is available to everybody. What we will be doing today is we'll put together a little bit of our audits, or a couple of folks who have been brave enough to volunteer as tribute. We'll go through the process of talking through some of the things we should capture in that process and how we can capture them. What we're looking at right now is our background. In this case, when I'm putting together an audits sheet, I will put together usually a background page because you never know who's coming in here, and when. You want to make sure that they understand things like, " When did they review this?" Like, " How relevant?" If this audit's from 2007, which I hope they were doing audits in 2007. If the audit's from a long time ago, the results may be less relevant. The URLs that were reviewed, the review process, what levels of WCAG we're hoping to meet, or above and beyond. Not above and beyond, the things we'd love to include. That's what we're looking at right now. You never know who's coming in at any time. Having that for yourself or for your team, whoever you sharing it with, can be really helpful.

**Ben:** Yeah, that's great.

I'm looking at the background here. I'm sure we'll end up filling this out. You've also got this audit tab that has a lot of fun stuff. Website component item, WCAG guideline, the description, the recommendation, impact, URL. These are the high-value things that we're going to be communicating and formalizing as we audit. Like I mentioned, we had some delightful, some lovely volunteers who volunteered their personal sites for us to audit. We're going to be testing those out together. Was there one you'd like to start with, Anna?

**Anna:** I would like to start with Alexa's site. Alexa is a social media specialist. She does some great topics on accessibility in social media. Let's see.

**Ben:** All right. Let's see. Was it iamalexa.com? Was that what it was? I don't have the sheet up.

**Anna:** therealalexa.com.

**Ben:** therealalexa.com.

Michael, Adrianne, thank you so much for the subs. I appreciate it. Here it is. Here's Alexa's site. Alexa was the first person to reach out to us with her website, and I'm incredibly grateful. We're here at the site. Obviously, there's infinitely many ways you could test a site. What do you typically do to start?

**Anna:** Personally, I start with opening of my inspector and running an automated audit using the Axe plugin. Now I'm not— I feel like every time I talk about it, I sound like, "Buy the product," but they're really good. It always makes me feel a little less intimidated when I start an audit. I just start with using the Axe plugin and seeing some of the high-level things they capture by default. I'll usually use that first.

**Ben:** I'm going to put a link to Axe in the chat. If you've never used this, it's great. I think there's a Community Edition. Pretty sure there's…Look at that! I know this person.

**Anna:** I didn't realize I was actually on the site.

**Ben:** That's awesome.

**Anna:** That's fun.

**Ben:** Apparently, you're on the site.

That's really cool. Axe DevTools is such a fantastic tool for this. We've already got hype train going. I don't know these Twitch things. Axe DevTools is a fantastic tool for this job. It is built out by Deque Systems. Again, fantastic resource. You just give it a scan on my page?

**Anna:** In this case, since we're auditing a full experience, we can scan the full page. I'll mention real quick. Since we have the 'Look for Scan' part of my page that I use more for auditing design systems themselves, like specific components and stuff like that if I don't want to have to capture the nav every single time I'm auditing in a story about something, but since we're doing full experience, let's do ' Scan all of my page'.

**Ben:** All right. I also don't have an account to be able to scan only part of it, so OK. We've got a few issues. The first says, "ID attribute value must be unique. We need unique landmarks. All page content should be contained by landmarks."

**Anna:** Yeah. Especially with a page like this, we probably won't capture too many issues because it's mostly a photo. We've got our navigation and our footer. The landmarks thing is really interesting because didn't Alexa highlight to us that they're using GoDaddy to host and build this site? Is that correct?

**Ben:** I believe so, yes. It sounded like there were issues like GoDaddy limited the length of the alt text that Alexa was able to use for this big ol' cover. Let's talk into that landmarks one. Let's try to understand. Landmarks…

**Anna:** What's interesting… Excuse me. What's interesting is that it's flagging an issue which is one reason I'm going to hijack this for a sec.

**Ben:** Go ahead.

**Anna:** Automated testing is not perfect. It requires manual review. We can see that as evident right now because we've got two landmark issues that seem to be conflicting, or may be conflicting.

Anyway, go on, Ben. Apologies for the interruption.

**Ben:** No, you're good.

This first one says, "Ensure landmarks are unique." We've got this problem of, there is this nav here. It's suggesting that basically, this nav has not been titled so there's no aria-label or aria-labeledby. You can just straight up use the title attribute for that? Today I learned.

**Anna:** Yes, I think so.

**Ben:** That's the node. It's the link up here at the top seems to be what's getting flagged. That would suggest to me that there's probably a second nav on the page.

**Anna:** It's possible.

**Ben:** Is that the nav down here in the footer? That there's two navs. That could be part of it if there are two navs.

**Anna:** It's reading is a DIV block, I think.

**Ben:** Let's see. It's also tagging it as a best practice. I believe this is a…

**Anna:** Inner one?

**Ben:** Oh, it's a moderate issue.

**Anna:** One thing to point out here, if you scroll up, is we can select the More Info link at the top. Deque has resources on what the issue is in particular, and why they're assessing it as moderate. Landmarks are specifically quite helpful for screen reader users because they can help screen reader users navigate pages much more simply. Landmarks essentially break down your page's essential elements into different sections, programmatically. It's really helpful to have them, and to do them well, and to help each landmark be unique so that screen reader users can understand which section they're going to before they go there.

**Ben:** Absolutely.

**Anna:** I would actually think it's pretty likely though, that the reason that this is getting flagged is more of a GoDaddy issue and not an Alexa thing. I would expect because this is a common thing I encounter when I'm reviewing websites that are on content management systems. I'm on Squarespace, and if I remember correctly, they have the same issue on my website happening. It's largely because content management systems as a whole, aren't particularly well- versed in some of these things yet.

**Ben:** OK. Let's take a look at this other one that says, all page contents should be contained by landmarks. Again, this is flagged as a best practice. There is a div with the cookie banner. This is that agreement that you're accepting the site's cookies. I could see how this would totally float outside of any names or anything like that because that's its purpose, to be outside the context of the rest of the page.

**Anna:** Yes, I think so. I'm going to add that. How we mark the impact on this is going to depend a little bit, but I'm going to add that to our spreadsheet here real quick.

**Ben:** You're typing this up for us?

**Anna:** Mm-hmm.

**Ben:** Can you walk us through how you're describing this?

**Anna:** I'm going to be looking at this from the perspective of…I know Alexa is somebody who cares about accessibility quite a lot. Even though this is considered a moderate issue, according to Deque, I still think it's worth flagging or a best practice. I've basically pulled up on the first…In the website area, I've linked to Alexa's site and mentioned her name, since we're auditing websites today or hopefully we will.

I'm actually going to do something where… I want to adjust the page here. I'm going to go ahead and pull the URL up sooner in our spreadsheet, because I want people to know. I want Alexa to know in particular, which is one of the reasons… Segue real quick. You can edit the way this format is, for your purposes any time. It's not perfect, linear, or static. You can change these audits for your audience, but what I'm getting to is I want Alexa to know that there's a particular URL that I'm talking about as her home page. I will leap to the specific WCAG guidelines in most cases, so that folks can understand what I'm talking about and how it relates to our accessibility criteria. The difference in this case, is that, Deque has not flagged it as a WCAG item because it's considered best practice. For the time being, I'm going to mark that as best practice, but I might come back to this later and say, "Well, is it best practice? Maybe we should be thinking about it in terms of info and relationships, WCAG." Again, this is not me saying that my process is perfect or infallible.

Info and relationships, that's going to be 1.3.1 Level A. The criteria there is information, structure, and relationships conveyed through presentation, can be programmatically determined or are available in text. I've used this one as a reference for landmarks before. I'm going to use that here because it is best practice, but we should relate it to something, right?

**Ben:** Absolutely. Plus, when you relate it to a success criterion like this, it gives a handy link that you can look back to, and see why it's important. There's more resources given by pointing to a specific criterion, I feel.

**Anna:** I think so, too. I know it's not exactly clear-cut sometimes what thing is tied to what WCAG item you're looking at, but it's so helpful to have that background and resources there. I've added 1.3.1. I've also added a link to my favorite resource, the Quick Reference Guide, so that folks could jump immediately to that and learn more. Then I've copied and pasted the description in this case, but how do we recommend fixing this?

**Ben:** Are we specifically calling out the cookie widget or the nav that didn't seem to be labeled?

**Anna:** Let's call it the nav because
the cookie widget… Sorry. What's the exact thing that was happening there with the navigation?

**Ben:** With the nav, it was saying that, ensure landmarks are unique. Landmark should have… Actually, do you want me to copy paste this description in there for you?

**Anna:** Yeah, that would be great.

**Ben:** Let's do it. All right. Boom. Oh, this is for the 'Valuable' menu, so it maintains formatting. That's what Axe gave me.

**Anna:** Yes, that makes sense. I would say the recommendation here is going to be…I always try to be mindful of the limitations that people might be facing in recommendations. If this is something that comes from GoDaddy, then we have to be thinking about, "Can they fix it? Is it something that's been baked into what they're giving me to make my website, or is it something that I can fix?" I can't answer that question, but at a high level you would just say, ensure landmarks are unique. In this case for Alexa, I would say, validate if the issue is occurring because of GoDaddy. I know GoDaddy has some content management system of their own. There's a possibility that that would be on their side.

How do we assess impact is dependent on a few things, but because I know Alexa is somebody who's passionate about accessibility and most likely want something to be accessible, I'm going to flag it as moderate because of that. Though, Alexa can assess her priorities and adjust that consideration accordingly.

**Ben:** Gotcha. As I'm looking through this and thinking through all the information that we've provided about this specific issue that's come up is I'm wondering would you also want to document things like steps to reproduce, or how this issue was discovered in the first place?

**Anna:** Yes. That's a super important question. When you're generating an audit, and Axe will generate these audits into spreadsheet automatically for you on the premium version, it'll come with all of those details, usually by default. In this case, this is the bare minimum of what we can include, the audit I mean. In some cases, I'll include code snippets, I will include, if it's an automated or a manual test. Every automated test has manual review in my case. I'm not just copy/pasting it. I'll capture that. Then steps to produce, now I have done that in some audits and others I haven't. It just depends on who is going to. Short answer is yes, I would recommend including those things, especially if you think they're helpful. In this case, for Alexa, it's hard for me to say.

**Ben:** OK, sounds good. Then circling back to the fact that these issues were flagged not connected to success criteria, but rather to best practices, we've got a question in the chat from Carl who asked when an item is "best practice," do you consider it a fail in the audit or is this just a recommendation?

**Anna:** That's an interesting… Let me think here. Generally speaking, I don't say it's a fail if I have measured it as a best practice. However, I will still capture it so that they know that these ideals exist. I would say, my migraine example, my maybe, perhaps, the high saturation of bright colors in a single viewport issue, I would probably flag that as best practice. It's not explicitly outlined and WCAG, but I would still want people to know it's something that's happening. I wouldn't call it a fail, but I would call it a recommendation. Again, it depends on the person and the audience. If I know somebody really wants the most accessible possible experience, it's kind of tricky. There's a human factor that goes into this that I'm struggling to describe.

**Ben:** That's totally fair. It's to tailor your responses in the amount of information you include to the audience that you're trying to present this audit to and what you believe their commitment and understanding to accessibility is.

**Anna:** Exactly. If I'm worried that a team will, they'll look at something like that and go, "Well, you only were supposed to capture the WCAG items," and then I won't include it. That's not to say that I don't want the world to be as accessible as possible. I just want teams to take it in as they need it, if that makes sense.

**Ben:** Yeah, that totally makes sense. Should we document a few more issues that we saw?

**Anna:** Yes, let's go ahead. I'm actually wondering about some other pages on Alexa's site, would we be interested? I know we have a couple other issues on this page. We talked about landmarks.

**Ben:** I believe most of these are external links, but we can check out her about pages. We also have the cookie widget. There's a big, old hero image and some text on the side. I will run the audit, but I could see potential alt tag issues with these images that are here. All right. OK, good.

**Anna:** It looks like the links are clear. She's done a good job of, if we scroll down, it looks like… Because one of the common things we encounter with links is making sure their appearance in body content. "I want to give my shout out," she's made those bold and underlined so that they're not just relying on color. That's good. Actually, you mentioned something that I want to touch back on. The navigation items going to external websites, do those open a new tab by default?

**Ben:** Let's see. That's an internal link. That's external. I'm just going to click this a normal click. That is opening in a new tab.

**Anna:** Then we might actually capture that as something that we, let's see, is it letting users know that it's going to open in it? We're starting to move into a manual process right now.

**Ben:** Aria-labeledby nav equals five, nine, seven. Is that this element? I will open this up in the accessibility tree. Worse comes to worst we can always just take it to VoiceOver directly which we will probably do later. It looks like the link is a link about "X Newsletter." Why is newsletter a child of about? I'm very confused by this, GoDaddy. Let me just do VoiceOver itself and then we'll reconfirm this.

**Anna:** Yes, let's see what it does.

**Ben:** All right. There we go. Coming up.

**VoiceOver:** VoiceOver Control.

**Ben:** OK, VoiceOver is on. I'm going to go ahead and just tab to the accessible window.

**VoiceOver:** Chrome has new window.

**Ben:** Thank you.

**VoiceOver:** Entering new, Alexa, web content. Menu popped up. Visited link, about, list, six items. You are currently on…

**Ben:** That doesn't seem right.

**VoiceOver:** About. Menu pop up, collapsed button. You are currently on about. Link, about. Menu popped up. Visited link about.

**Anna:** Some Antic-ally speaking… Sorry, the pun is so good.

**Ben:** It is so good.

**Anna:** It looks like all the nav items
are being nested under about.

**Ben:** Yes, or maybe it seemed like
there was some aria-labeledby
going on. Hang on. Let me shut
down VoiceOver real quick.

**VoiceOver:** VoiceOver off.

**Ben:** It seemed like there was some
aria-labeledby going on which
was overwriting the name.
Here we go. Aria-labeledby equals nav
5.7.9.3. That's 7.9.3. This
is pointing to a different
element, which I'm willing to
bet you is… Where's the list
of…? This is it. Would this be it? No, it doesn't have a name.
I don't know, but it would be somewhere in this trunk, I think.

**Anna:** Interesting.

**Ben:** It's pointing to a different
element for its name, and so all of these are being announced as
About, even though they have other text contents. I highly
doubt, I could be wrong, but I highly doubt, actually, my
suspicion is that's probably something GoDaddy is doing.

**Anna:** I would agree, there's a good chance that this was not the
intended behavior here. I am trying to figure out how…Some
of these things I will mention, as a designer sometimes I have
limitations in terms of my understanding of what's
occurring. Having Ben here is super, super helpful.

**Ben:** Yeah, I know this.

**Anna:** There we go.

**Ben:** It's the UL, because this is a nav with an unordered list with
a bunch of list items. All of those links that are in there
inside each of those list items, they're using this aria-labelledby
pointing it to that unordered list, which itself has the name
about. As a result, all of these lists are being announced
as About, I think, or they're being announced as listless.

**Anna:** Fascinating.

**Ben:** Fascinating.

**Anna:** I'm going to document this because I'm quite certain that
Alexa will want to…By the way,
I can see that she is watching
us. Bless you, Alexa, for
volunteering. You're amazing.

**Ben:** Yes, you are delightful. We
are so excited.

**Anna:** Now in this case, I'm going to say that,
here's where my practice might
differ from others. This affects
every page on Alexa's
website. I'm not going to say
the URL. I'm just going to say
every page because it's navigational.

**Ben:** OK, because if you're working in
any CMS, Content Management
System, or if you're working on
any component-based framework,
the fix is in one place. It's
not on each page. It's fix it in
one place, validate that fixes
it everywhere.

**Anna:** Exactly. Now this one. Since we
found it manually, we don't get
to have a recommended WCAG item
associated with it by default.
However, how can we? I'm almost
to the point where I'm going to be…
I'm thinking maybe we should be…

**Ben:** I have a proposal which is could
we do Name, Role, Value?

**Anna:** That would make sense. I was
thinking the same thing. Let's do that.

**Ben:** All right. That's 4.1.2, and
I am going to copy this
link and add it to the chart.

**Anna:** I got that. Perfect.

**Ben:** That is not the link I meant to send.
Let me send them a better link.

**Anna:** I'm going to grab the link from
the Quick Reference Guide and
put it in the audit.

**Ben:** Good deal. I will
head back to our audit doc.

**Anna:** Now, this one, we don't have a
copy and paste description, but
what we can do is since we
tested it. Is that it?
What was it? What was the code?
Could you grab that code snippet?
The URL code snippet and put it in here?

**Ben:** Yes, I can. Here it's selects
the Page, Inspect. You want that
URL selector or the aria-labelledby?

**Anna:** Let's grab that whole sucker,
and I want to do an insert.
Is it row or column? I always get
mixed up. Insert column, and it
didn't do that. There we go.

**Ben:** Just drop it in here.

**Anna:** Yeah, enter that in the new
column because it's super
pertinent in this case. I'm also
going to do something real quick
so that it doesn't… I'm…
Who would have thought
I'd be formatting spreadsheets
professionally, but here we are!
We added that code snippet
because it's going to be
important for Alexa to reference,
whether it's a GoDaddy issue or
something that happened on her
side. She can at least have
that snippet and point it to
GoDaddy and say, "Hey, this is
happening. I had some folks on
Twitch stream and audit my
website, and it's reported.
Here it is, can you fix it?"
Hopefully, it'll make it easier
for her. Now, in this case, our
description is going to be
Navigational Items. Now, tell me
if you agree this makes sense, "
After About, all
announced About."

**Ben:** I think it was just all nav links
were announcing as "About" for some reason.

**Anna:** OK, that's better. "Navigational
items announced as About using this."
In this case, I'm going
to assume that what's happening
on VoiceOver would most likely
have been on NVDA or JAWS. I
know we haven't tested that, but
I'm pretty sure that's what
would happen using screenreader,
then I would say,
"Screenreader users…" Oops, not
sewers. "Users cannot determine
the purpose of a link before
selection." In that way,
sometimes it all emphasizes the
users that are being affected by
something like this, so they can
understand who is being
specifically affected. In this
case, we won't have time for it
today. I might even do a screen
capture of the VoiceOver issue
occurring and record it and link
to it somewhere. So that folks
can watch and hear what's being
presented to users instead of
just having that description -
thanking Ben for adding that.
Stakeholders, in particular,
have trouble kind of
understanding without seeing it
or hearing it, so if you can
record doing screen recording,
that helps a lot. I'm going to
say, tell me if you agree, Ben.
I'm going to flag this as critical.

**Ben:** Absolutely.

**Anna:** It affects the entire navigation.

**Ben:** The links as they are will take
you where they need to go, but
you have no idea what it is
they're for. There's total
information loss there.

**Anna:** Yeah, it affects how everybody
using a screen reader is going
to be able to navigate across
the experience. Which is
critical, we can agree for sure.
The original reason I had been —
and this is the cool thing about accessibility.
The original reason I was interested in that
is because if the links opened
in a new window, it would be
helpful to let users on screen
readers know, specifically or
all users. Really that, the link
would change the page that it
would go to a completely
different site, which we could
probably flag as well.

**Ben:** Go ahead.

**Anna:** And again, Alexa, thank you for
letting us do this. You are such a champ.

**Ben:** I'm going to find, I want to say
there's Link Purpose text only…
Whenever I'm teaching
people WCAG I'm always like,
"don't memorize the WCAG
guidelines." And then here I am
being like "I can remember the
names of specific frustrating
guidelines off the top of my head."
Here we go, "Link Purpose (Link Only)."
**Anna:** I think the reason I'm always
like you won't memorize WCAG,
but the more you use it, the
more you're like "Yeah! 'Links Only.'
It's associated with that sucker."
And it's "Link Purpose (Link Only)," you said, right?

**Ben:** Yes, "Link Only," so it's
Purpose Link Only, which is 2.4.9.

**Anna:** That's a AAA item too.

**Ben:** It is. It wouldn't necessarily be—
You know what? I might put
this down to 2.4.4, which is
"Link Purpose (In Context)"
because even in context,
you still have no idea what this
link is doing. That's a level A,
which would reinforce the
criticality of this. I think…

**Anna:** You're right. Sorry to interrupt
you there then.

**Ben:** No, you're good.

**Anna:** The fun, the extra fun -- this
shows how much of a nerd I am.
This could be both, right? I'm
adding this very slowly,
and I mixed up, the links flagged.
The spreadsheet part of this is the
hardest part of this. OK, let's
try this again. While I'm doing
this, what I'm trying to say is
that some issues might have
multiple WCAG items associated
with them. You can't link to
both. Sometimes I do, and
sometimes I will link to the
most relevant home page. Again,
this is going to be another one
of those situations where I say,
depends on your audience. For
some purposes, it's really
helpful to link to both. If an
issue is A and AA, you can be
like this is the breadth of the
issue, it speaks to the minimum
and it speaks to our our
expected level of criteria.
If it's A and AAA, then you can be
like its about the minimum, but
also doing this makes the
experience better. That's my
thinking there that I'm putting
together quite slowly. In this case,
we may not need a code snippet.
If there's no code
snippet added, I'll usually add
another page. Just because it
helps screen reader users know
if they're navigating a
spreadsheet to have N/A, that
that is empty.

**Ben:** The comments we've made about
needing to look up WCAG,
it's resonating with the chat.

**Anna:** Oh good. I'm having a brain fart,
what was I doing?

**Ben:** This was the links don't
indicate that they have an
external destination. That they
open in a new window, or a new tab.
That's what it was.

**Anna:** In this case, I usually will say
something like, in terms of
recommendation. These are
navigational items. People
generally don't want to have
like an open in new window icon
on navigational items. Obviously
that's up to Alexa. At the very
least, it should be
programmatically indicated. Though, ideally if something
opens in a new tab, it should be
both visually and
programmatically indicated. In
this case, my recommendation
would be programmatically, and
when I say programmatically, I
mean ensure that it basically in
code is specifying that this at
this action will occur. So the
screen reader users will be able
to know that that will occur, at
link opens in the tab. Also,
visually indicate opens in
a new tab. For example, new
window might… A combination
of these things can be really
helpful, and since it's an A, I
would call it-- What would you
call it Ben? In terms of impact.

**Ben:** I'm thinking, since it's A, but
it's also in the navigation and
so there may be more of an
expectation that it could be
external. Kind of wondering if
moderate might be a good thing.

**Anna:** Yeah, It's a tricky one, that's
for sure. So I think moderate is
a reasonable call out there.
I didn't add the code snippet, but
I think in this case it's not as necessary.
How are we doing on time, Ben?
I know I've hijacked a little bit
of the conversation.

**Ben:** No, you're good. It is 50 after,
so we've got about 10 minutes left,
but probably enough time to
maybe report one more issue or
do one more form of testing, or
if there's anything else you'd
like to talk about regarding
your audit process, I would
love to explore that as well.

**Anna:** I'm trying to decide in this
moment, what is the best thing I
can do with the amount of time
I have left, which is very
existential. Let's see, what
page were we on?

**Ben:** We were on the Meet Alexa page,
you clicked About and then 'Meet
Alexa.' There's also in media
and in writing and we can also
check those out. We haven't seen those yet.

**Anna:** Let's go ahead. I'm getting some
quick testing. Just to see what
might be the best thing to expect.

**Ben:** In the meantime, chat, if you've
got any questions for Anna,
please feel free to drop them in
the chat and we'll make sure to
get to as many of those as we can, as well.

**Anna:** Let's do a quick look,
and I don't know if we'll be able to
add this, but I want to look at
the accessibility on social
media area or page. And maybe send
a link to that, too, because I
really appreciate Alexa's focus on that.

**Ben:** Yeah, okay! And should we…?

**Anna:** Let's maybe do an Axe review real quick?

**Ben:** Yeah, absolutely!

**Anna:** While you're doing that,
we've got a question that's come in.
A couple of questions, actually.

**Ben:** Feel free.

**Anna:** "Is there a way to
programmatically let folks know
content opens in a new tab?
Is it just adding that to a title tag?"
I have seen folks use ARIA
for that purpose, and Ben,
feel free to disagree or add to this.
I've seen folks use ARIA.
I've seen people add non-visible text.
I don't think that's necessarily ideal.
But I know ARIA is one
thing that folks tend to lean on,
in that case.

**Ben:** ARIA is probably the cleanest
option you could have there. You
could go to your anchor tag and
you could add "aria-label=,"
then you would want to reproduce
the contents of the link.
For instance "Newsletter." Then you
might put parentheses, "(opens in
new tab)." That's one way you
could do it. It's the cleanest fix.
You were mentioning the
hidden text. You could put an
extra span inside your anchor tag
that says, "Opens in new tab."
Then you would want to hide that
in a way that's visually hidden,
but still made accessible to
screen readers and other
assistive technologies. To do
that, you need some special
styles. I typically, for those I
go to Scott O'Hara's "Inclusively
Hidden." I promote this
just about every stream, and at
some point, Scott's going to
have to pay me that premium.
There is a whole class in here
that is included even in many
CSS frameworks. I believe
Bootstrap has "sr-only."
Tailwind has a class for this as well.
Basically, the idea is, it's not
display: none, because that would
keep the content from being
exposed to assistive technology
in general, but rather it makes
the window through which you
could see the element impossibly
small, which as good as hides
the element. This is what you
could apply to a span that sits
inside of that anchor tag to hide it.
That span would say,
"Opens in new tab" or "opens in new window,"

**Anna:** I would say, and also
mikemai2awesome mentioned "The title
doesn't get announced in Mac
VoiceOver, beware of that.
Generally, aria-label should be
used instead." Which is a helpful callout.
We have one more question,
and I actually want to
answer this one. "What myths do
you want to bust about
accessibility auditing?"
Ben, do you have an answer for that
before I jump in?

**Ben:** I know where this is going.
We were chatting about this ahead of time.
Please, full steam ahead, Anna.

**Anna:** I think the whole thing about
accessibility auditing to keep
in mind is that the goal is to
find things and fix them.
You can fix foundational elements
more easily than you might
realize, but it's not on or off.
The power of accessibility
auditing is showing your
stakeholders how accessibility
and inaccessibility can
proliferate across an experience,
with something as minor as color
contrast, or as big as
navigational items being broken.
That accessibility is not a
light switch. It's not on or off.
You are not accessible or
unaccessible. There are
different parts and pieces that
come into play that show the
levels of accessibility that
your product, your website,
anything is needing a cross the
board. The myth I want to bust
is not about accessibility
auditing itself, but about how
website accessibility can
magically be turned on using
something like an overlay, for
example. This practice shows
that it's not as easy as that.
It shows that there's a lot more
to it.

**Ben:** Absolutely. I've had the
pleasure to introduce quite a
few people to accessibility
development and testing and the like.
Accessibility, I think,
can often feel like a big
nebulous cloud. That is
terrifying to try to figure out
like, "Where do I even start?"
It's hugely overwhelming. Doing
something like an audit like this
is nice because it
breaks things down into very
actionable steps. Every single
thing that we've written here,
in a corporate environment would be
a story you could fix, a story
that you can track progress on.
At the end of it, not only have
you completed a thing, you've
actually made a measurable
impact to the end user
experience. I think that speaks
to the value of an audit, not
just as a compliance artifact or
as a wrist-slapping tool, but
rather as a communication tool
for solving problems. I love that.

**Anna:** We're at time, Ben. I'll mention
that accessibility auditing when
it comes to manual work can take
some time, but as Ben touched on,
each of these turns into stories
and actions. We didn't get to,
gosh, we had like 10 different
sites of folks who volunteered,
and we didn't get to finish
Alexa's site. All of this alone,
fixing, specifically, that
navigation is going to do a lot
of good work for Alexa's site.

**Ben:** Anna, thank you so much.
I really appreciate having had you on.
I want to send people
towards your Twitter because,
again, if you're not following
Anna already, you should be.
I highly recommend you do it.
Absolutely phenomenal accessibility content.
Great design input. Cats are good.
I like having cats. Is there
anywhere else I should send
people to? I see Adrianne's
already put your accessibility
overlay on there. It is such a
fantastic read. Please, go read
that one as well.

**Anna:** Yeah, I have that pinned to my
Twitter right now because I
wrote that while a little angry
about what they were doing to
some folks in our community. If
you'd like to read it,
I certainly would appreciate it.
Some folks find it helpful.
Right now that's my biggest
thing that's been going on, but
some news will be coming out
sometime in the next year. I'm
working on a book. Keep your
ears open, and keep your eyes
out on all that.

**Ben:** All right. All of you, this has
been good. Thank you all for
showing up. At one point there
was at least 56 of you all.
I think that's good. The most I've
had on a stream. Anna, you bring
out all the best people.
All of you, if you stick around,
I'm going to try to find someone to raid.
Someone in the tech space.
If you've got any
recommendations, put those in
the chat. Additionally, join us
next week. If you've never used
the Eleventy static site
generator, we're going to be
playing around with that.
I think absolutely abusing one of
its experimental features.
We've got Ben Holmes doing that.
It'll be a fun time as well.
Y'all, this has been great. Thank you
all for being here, and thank
you, Anna, for joining Some Antics.

**Anna:** Thank you for having me.
It was such a fun time.

**Ben:** Bye, y'all!