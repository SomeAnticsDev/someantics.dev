---
title: Diving Into the Web Content Accessibility Guidelines with Todd Libby
upload: https://www.youtube.com/watch?v=aChBL4fsr2E
hosts:
  - Ben Myers
  - Todd Libby
---

The W3C's [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) are the industry standard requirements for making digital content — websites, mobile apps, documents, and more — accessible to disabled users. Understanding how to read the Web Content Accessibility Guidelines can help a developer make better, more accessible sites.

Join Ben and guest [Todd Libby](https://twitter.com/toddlibby) as we go through applying WCAG 2.1's Success Criteria to our own projects, and talk about the [first public draft of WCAG 3.0](https://www.w3.org/TR/wcag-3.0/). Todd is a W3C member, WCAG contributor, accessibility advocate, and notorious lobster roll connoisseur.

## More From Todd

* [Follow Todd on Twitter](https://twitter.com/toddlibby)
* [Read Todd's articles](https://toddl.dev)
* [Front End Nerdery podcast](https://anchor.fm/frontendnerdery)
* [Front End Nerdery on YouTube](https://www.youtube.com/channel/UCng3HUrp-Dzu92iA_Zbhh3Q)
* [Shirts!](https://cottonbureau.com/people/todd-libby)

## Mentioned Links

* [What’s New in WCAG 2.1: Label in Name on CSS-Tricks](https://css-tricks.com/whats-new-in-wcag-2-1-label-in-name/)
* [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
* [First public draft of WCAG 3.0](https://www.w3.org/TR/wcag-3.0/)
* [Descript](https://descript.com)
* [Contrasting Accessibility with Color Contrast](https://toddl.dev/posts/contrasting-accessibility-with-color-contrast/)
* [Follow Bruce Lawson on Twitter](https://twitter.com/brucel)
* [WAVE by WebAIM](https://wave.webaim.org/)

## Transcript

**Todd:** Alright. Sounds good. 

**Ben:** Howdy, howdy, y'all. Welcome back to Some Antics. I guess, Some Antics—I should probably emphasize that a bit better. I'm Ben Myers and I'm joined today by my friend Todd Libby, Todd, hello! 

**Todd:** Hi, how are you?

**Ben:** Doing pretty alright! I'm looking forward to round two of Some Antics.

I'm super excited to have you on because you, I think in many ways, you encompass just a whole bunch of the things that I absolutely love about front end. You are a self-declared front end nerd. That's a non-trivial amout of your branding. And you are part of the W3C you  contribute to the Accessibility Guidelines. Why don't you tell me about yourself? Just cause this is all super cool stuff, and I feel like I don't even really know the full breadth of what you do. 

*[00:01:00]* **Todd:** Well, I am long in the tooth, I will say, as far as my experience goes. It's been over 20 years that I've been doing web development, web design on the internet.

I've been programming since I was nine. So that was a very long time ago. What, 40? Yeah, 41 years now programming. I learned BASIC on a Commodore 64, fell in love with programming, been doing it ever since. Lately in my professional time, it's been a good emphasis on frontend, but I've done backend, plenty of backend stuff as well.

With the focus on accessibility. And I love *[00:02:00]* to joke around. If anybody follows me on Twitter, they know that. And I have an affinity for lobster rolls. That's also apparent on my Twitter timelin., But yeah, it's great to be here. Thanks for having me on. I appreciate it. Love talking accessibility. So, yeah, that's a little bit about me. Just, you know, trying to make the world, the web a better place one line of code at a time, I guess. 

**Ben:** We have Chan in the chat further emphasizing, in all caps, lobster rolls with many z's. So it looks like there is some mutual affection for lobster rolls in the chat.

Absolutely incredible. Chan's actually asking you "What is the best lobster roll ever?"

**Todd:** Best lobster roll ever. *[00:03:00]* I would have to say that two-foot-long lobster roll I had very recently. It was two feet long—I think I advertised it as three, but it was actually two, so I kind of lied—and it had five one-and-a-quarter pounds of lobster meat in it, so that comes out to six and a quarter pounds of lobster meat. And that was at the Taste of Maine restaurant in Woolwich, Maine. 

**Ben:** That is absolutely incredible. And I also want to extend a very, very heartfelt apology to my friend Shepherd, who is in the chat, very, very disappointed, that we are bringing up food during the lunch hour. So shepherd,  I'm sorry.

We've got Alan in the chat as well. Alan is saying that we're going to need a bigger boat. Yes.

**Todd:** Oh, absolutely. Absolutely.

**Ben:** And we have, *[00:04:00]* AnubisTheJackle says the best lobster roll ever is the next one.

**Todd:** Usually—I've only met two lobster rolls I didn't like, and the key to a good lobster roll is if you're close to the coast and you're at a restaurant or a lobster shack and if the lobster roll is usually over 20 bucks, you're in for a treat. 

**Ben:** Alright! Shepherd's back in the chat asking who in the chat wants to drop their jobs and start a lobster roll of restaurant with them?

Yeah, I think we're, we're starting something. This, this is happening. There is a lobster roll restaurant happening beneath our noses. I will say that the earliest memory I can have of having lobster was, and I'm sure I had it like earlier, like my parents let me try it, but my *[00:05:00]* earliest memory that I have was, we took a general New England trip and we stopped in Kittery, Maine. There is a lobster place called Warren's there where—you know, I'm sure this is pretty standard for Maine, of like, Oh, you can look outside the window. Like you've got lobster shop on the coast. Uh, you can look outside the window and see the people bringing in your meal from fresh from the seas.

But yeah, no, I had lobster there. Super, super buttery. Just incredibly good. Y'all, I apologize once again for lobstering up your lunch hour with imaginary lobster that we cannot taste.

Cool. So, one thing that I did want to talk to you  about was, you're in the World Wide Web Consortium. Do you want to kind of talk about what that experience is like, what you do with the W3C? 

*[00:06:00]* **Todd:** It has been a very enlightening trip into how the W3C works. I am in the Silver Community Group. And also I'm in a few subgroups as well. One being a Visual Contrast of Text Subgroup. Another is the Functional Needs Subgroup.

And, you know, we meet at different times during the week and we discuss, you know, whatever is on the agenda for that meeting. Like for the Silver Community Group, the working draft was jus released and so we had a big celebration in our *[00:07:00]* meeting for that day. And, you know, the people are great.

It's very welcoming, very kind community. You have your debates as you will in every community, but for the most part, I've had a blast working on and helping out as much I've been able to with the WCAG guidelines. And another subgroup I'm in is the Errors Subgroup and that I've been doing some work in as well.

So, it's been real fun. I would suggest anybody that's interested in the Web Content Accessibility Guidelines to, come on in and join in. All you have to do—you can *[00:08:00]* be an individual, you don't have to be a company. You can come in, sit in on a meeting and see what goes on. And it's a really fun journey, and it's been real fun for me. 

**Ben:** I was actually going to ask, right. Cause like I I've been in the industry for a small handful of years. Like, I could count the number of years I've been in the industry on my hands, which is saying something because I have slightly fewer digits than most. And I was going to ask like, how does just a day-to-day web developer get involved with the W3C, with the Web Content Accessibility Guidelines. How does someone get involved if you haven't previously been involved in any specs work? 

**Todd:** That, you would go to, and *[00:09:00]* I'm looking it up right now so I can get the membership.

So, there are ways… what I'm looking at right now is basically how a company would sign up. But if you go, I will copy and paste this right into the chat here. 

**Ben:** Awesome.

**Todd:** So there, that's for companies. Individuals like myself, I attended, I sat in on a meeting. Oh, boy, I can't, I'm trying to think off the top of my head. I can't remember how we did that. No, I went in and I sat in on a meeting and just from *[00:10:00]* there kept going to meetings and they added me to the W3C.

You don't have to pay anything as an individual. And there's somewhere on there… oh, you do have to sign up! I would have to get that later so we're not stuck on anything, but yeah. You sign up on the site and from there you go in and you're, you know, made a member from there and I'll get that link to you later.

**Ben:** Cool. It's interesting to hear that it's more approachable than I would've thought.  Right? You have an organization that's responsible for putting together all the standards and specs that make up *[00:11:00]* the web, make the web work. And I guess I'm personally surprised to hear that, yeah, basically it's just a "Come on in. Happy to have you." kind of deal. That's really cool to hear.

**Todd:** Yeah, it's very easy. It's not, you know, it's nothing involved and you don't go through some rigorous test or anything. It's just, you know, they welcome people to come in and they also welcome people to, if you don't want to join, they welcome input on, for instance, the WCAG guidelines and standards. So, you know, very open. Very, very open. Great bunch of people as well.

**Ben:** Well, cool. Let me go ahead and show off a couple more links for you personally. Just kind of show off all the things you do. Go follow Todd on Twitter. It's absolutely worth your while. @toddlibby. I put the link in *[00:12:00]* the chat a while ago.

Todd, you also do some writing. This is your site at toddl.dev. You've got some really cool stuff in here. I believe—I'm not seeing it here, but I believe you recently wrote an article about color contrast. That was also good. I believe it was... Did you do color contrast? What was it?

**Todd:** I did. It's, let's see. Yes, right there. 

**Ben:** Here it is.

**Todd:** And I also gave a talk at BarCamp Philly in November on it. 

**Ben:** Ooh, okay. Is that talk anywhere? 

**Todd:** Yes, it is. That is… Let me pull that up.

**Ben:** Would it be on the Front End Nerdery YouTube channel by any chance? 

**Todd:** It would be, yes! 

**Ben:** Oh, well, conveniently I have that up as well. Look at that! I've got tons of links! 

Speaking of Front End Nerdery, this is a podcast. This is also the name of the podcast that you do. So far, you've got a two-parter up with Jeffrey Zeldman. I really, *[00:13:00]* really enjoyed this. You were talking about just generally web standards and the role that web standards have played in the webdev community  over time. I thought it was super interesting. I heavily recommend giving this a listen if that's the kind of thing that excites you. 

**Todd:** Oh, well, thank you. Yeah, I just did episode two—well, three, it'll be numbered three—but my second guest was on and that's going to be uploaded just as soon as I get transcripts and captioning done, because I put the video version over on the YouTube channel. 

**Ben:** I gotta say, there's absolutely no way I'm putting up content without captions, but also it takes so much time. 

**Todd:** Yeah, it does. Yeah, it does. But, you know, I have found that Descript helps, and that's. *[00:14:00]* descript.com I believe. 

**Ben:** Yeah, here it is… Set that in the chat, put that my show notes for later. There you go. And this is a general tool for editing audio, video, podcasts, stuff like that. Writing transcripts. Does lots of very cool stuff. And I've been toying around with this as well, on your recommendation  as well as Cat's.

**Todd:** Yeah. It's, it's great. You get, what, 14 hours of free captioning, and then after that, you have to pay for it, but it's very reasonably priced. So, yeah. 

**Ben:** For sure. Alright! So let's get into the meat of what we want to talk about today. You mentioned a couple times the Web Content Accessibility Guidelines. Let's say, I'm *[00:15:00]* a fairly new web developer. Let's say I've never heard of the Web Content Accessibility Guidelines, or WCAG. Would you give a quick pitch for WCAG and what it is, what it does? 

**Todd:** Sure. The WCAG, or Web Content Accessibility Guidelines, are a wide variety of recommendations, that are made for web content to be more accessible to people with disabilities.

Adhering to those guidelines ensures that websites and applications are accessible to people with a wide variety of disabilities, such as low vision, motor skill, or cognitive disabilities, speech disabilities, sensory disorders, and so forth. They address a number of different mediums of static content on the web. And each *[00:16:00]* guideline provides information on accessibility practices that address documented needs of users with disabilities. And the guidelines are supported by outcomes, and an outcome is…  they are results from practices that reduce or eliminate barriers that people with disabilities experience on the web.

**Ben:** Awesome. Thank you so much. So what we're looking at here is the current W3C Recommendation version of the WCAG, which is version 2.1. As I understand it, 2.2 is almost here. Probably sometime this year it will become the recommendation, right? 

**Todd:** Yes.

**Ben:** And then you've been working on 3.0, which is… I shared the link to that earlier, but I'll share that again. *[00:17:00]* And this just entered its first public draft. 

**Todd:** Yes, it did. It did. It probably won't be available to use until 2023, I believe it is. 

Okay. 

**Ben:** Wow. That is quite a ways out. Okay. So we've got this big document. I've sent out the link. We've got this big document and if I just look down the sidebar, right, there's a ton of links here. This is something that I personally would probably find pretty overwhelming. So how would you recommend, if you're now aware that there are guidelines out there, how do you use this document? How do you get this to help you, or actually produce concretely more accessible sites? Where do you start?

**Todd:** Well, I would start with *[00:18:00] reading through what you have there. I would probably go with the background. I would basically start from the introduction, to be honest with you. It is some involved reading and you have to have patience. Now granted the language for 2.x can be difficult to read if you're not a very technical person. So say, and I don't want to point fingers at any individual group of people or anything, but if you're a designer say, and you don't have that technical background, reading this might be a little daunting. So a lot of patience, and just start from the top and work your [00:19:00]* way down.

I would read a section every day. That's how I did it when I started.I read a section today, I took notes. I asked questions, and if anybody's got any questions for me, feel free to hit me up on Twitter. I'd be more than happy to answer them there. And a little note that 3 will be easier to read than 2.x is.

**Ben:** Interesting.

**Todd:** But yeah, what we see here on the screen is, you know, I look at it and I say, you know, that's a lot of information. And if you don't want to read the boring stuff, which I would suggest people do read that introduction all the way down to where it says *[00:20:00]* "Perceivable," if you want to skip that and you want to go right to Text Alternatives, just start reading that, but you'll be skipping over some content you probably want to read. But if you go from there, what we're looking at here for Non-text Content, for instance, you know, read through that, and then there's that little box to the right there that says "Understanding Non-text Content" and "How to Meet Non-text Content." You want to read those as well. That gives you an understanding, but like what we see here.

My dive into that, I didn't have CodePen at the time, so I would suggest people take… 'cause you have towards the bottom, there is some examples of failures as well as some examples of, *[00:21:00]* there, you see these examples there. Take, for instance, a linked thumbnail image, for instance, which is number nine. Take that,  throw it in a CodePen, you know, throw it in a pen and work on it, make it accessible. Do a check on it. You can use your browser dev tools. There's lots of tools out there, which I guess we can go over whenever and, yeah, just go from there. Work your way down the list.

Having a good understanding of each guideline will help. Don't overwhelm yourself. You know, if you got to do one at a time, do one at a time. You know, do one a day. And it will give people a good understanding of what we *[00:22:00]* need to do to be inclusive and accessible, and produce that kind of content for people with disabilities.

**Ben:** Awesome. So kind of taking a look at the anatomy of what we've seen here. We have kind of this like hierarchy here of the guidelines, because we're here in the section called Perceivable. Then we're looking at guidelines. Like, right now I've got Guideline 1.2, Time-based Media, pulled up. It gives us a very high level idea, basically, which is like, "Oh, you should have an alternative for time-based media.." Like that's very high level.

Then we're talking about, we've got, I see a whole bunch of success criteria, which seem to be much more specific requirements. Each success criterion has links to learn more about  how you would actually implement that. So that's what we were just looking *[00:23:00]* at. This is a link to learn more about an individual criterion.

And then I want to call out, because we have a question about this in the chat, there's a "Level A" here and I've seen on a couple of others, there's like "Level AA," and then there's also AAA. Do you want to kind of talk through those three levels real quick?  What that means in general, those levels? 

**Todd:** So the levels… and I don't want to phrase this wrong, so I'm going to pull up the site and go directly from the site. So just a sec.

So , *[00:24:00] you have certain criterions, what they call success criteria. You have A, AA, AAA. A being a subset of AA. AAA is kind of like, you know, the cherry on top of the ice cream. There are certain amount of criteria you have to meet to reach Level A, and so on and so forth. So, you have a certain number to reach A, and then you have a certain amount more to reach AA, and then a certain amount more to reach AAA. So, for example, say [00:25:00]* Level A, you're not allowed to identify something by color alone, like "Press the green button to proceed."

AA, you'll want to ensure that the text meets the color contrast requirements, which currently is a scoring system of ratios. So that ratio is 4.5:1, which is optimal. Level A, I believe is 3:1.

You want to meet these these levels. So there's some that are minimal and some that are for *[00:26:00]* AA that are like middle of… trying to put this… like, standard, I wanted to say, and then AAA is a very strict meaning of the requirements. So for AAA, it's currently, 10:1, I believe. That's the ratio.

**Ben:** Oh, wow. That's huge. Okay. 

**Todd:** So 10:1 is actually where we should be. 10:1 is an optimal—and I don't want to dive too deep into it for time's sake—but fonts have different widths, sizes, *[00:27:00]* faces. And there are a lot more people that are better suited to describe that than I am.

But color contrast is not… and I'm trying to remember how it was phrased to me. It basically, I'm paraphrasing here, but color contrast is how our brains perceive what we're looking at. And the scoring system will be changing with WCAG 3. So there's a little sneak peek into what's going on with 3.

**Ben:** We have Alan in the chat. Alan's asking if it's possible to be too contrasty, like, for instance, would black text on pure white, be a problem. *[00:28:00]* I don't think so. 

**Todd:** Not currently. I guess there, again, it depends on the font. If you have a very skinny font and it's of a size that is not large enough, and I believe 18 pixels is the minimum, you can have… Here's a good example. This actually was the impetus behind my color contrast research and my article and my talk. I was filling out a form and *[00:29:00]* I don't know if I put the image in that article or not, but there's a good example right there.

The black text in a text field on a dark blue background with a blue background that is very hard for even for me to read. So you can imagine with somebody with cataracts trying to read that, it's nearly impossible, and I think there might be… see if you scroll down that page a little more. Or maybe not. I didn't maybe put that in there, but it was a yellow background with white text in a text field and that was just impossible to read.

There it is right there. Yeah. 

**Ben:** Wild. This is a thing that you just, like, found *[00:30:00]* out in the wilderness? 

**Todd:** Yeah, it was actually on a website that I had signed up for a newsletter for. And that's what I was presented after I signed up. Don't ever do that.

You could see the black text on there. There's some contrast there. 

Black on white, usually not, to answer the question. Usually black on white text is okay if the font is big enough. And if the font is of a width in a weight that is good enough to pass as far as contrast goes, 

**Ben:** The chat is actively complaining that their eyes hurt, so I'm going to scroll away from that now. Alright. Yeah. *[00:31:00]* So we've talked a bit about the guidelines and what the purpose is of them. We did talk a bit about Level A, AA, AAA, and Chan in the chat actually made a comparison to, like, it's almost like the three stars you could get in a mobile app like Angry Birds, of like, "Oh, you have to get the first star to be able to get the second star. You have to get the second star to get the third star," right? There's these levels of scoring basically. And my understanding is a lot of companies, basically the industry standard is, striving for Level AA by default. 

**Todd:** Yes. Minimal is A, acceptable is AA and optimal is AAA. 

**Ben:** That's a great way to think of it. I like that a lot. Minimal is A, acceptable is AA, and optimal is AAA. Wow. Okay. That's a great way to *[00:32:00]* phrase that.

Okay. So let's dive into using this as a day-to-day developer. Specifically you've written a CSS Tricks article about one particular requirement, which is "Label in Name," so we're going to use that as an example today. So this is Success Criterion 2.5.3. So I'm gonna go find that. In the meantime, do you want to kind of tell us what this criteria is? 

**Todd:** Sure. So when we are creating forms, we want to make sure that our labels are read by not only screenreading software, such as VoiceOver for Mac, JAWS or NVDA for Windows, or even Orca for Linux, that *[00:33:00]* it's also clear and concise for people that use voice recognition, for instance. Dragon Naturally, and software like that. So when navigating around, they can find the label, and it will be announced to them or they can say—and I think it's somewhere in there where it's...—"Send," and they'll be right on the Send button for instance.

You want to remember that we're not all good-vision, good-hearing. There are lots of assistive technologies out there that people use, that *[00:34:00]* people need, and we have to make sure that we're being, as I said earlier, inclusive to those people, not to leave them feeling left out.

So this kind of dives into the words, which as it says in here, the words which a label has visually on the component that are also included in the words that are associated with the component programmatically. You want to have a button that says submit. And you can use a button… Let me look at one of the examples that I had. So for instance, in the CodePen on that page,  I have an example "Find in this site" on the button, *[00:35:00]* and the label is the same.

So you want to be able to say… the screenreader or however, the person is navigating the site—say, for instance, it's a keyboard—they're using the screen reader and the keyboard and they get to that button and the button announces "Find in this site," so they can go, "Oh, this is how I search for something in the site." So they're gonna press the input and they get to wherever they need to go, which is the gist of it. 

**Ben:** Gonna go ahead and just create a sample file with this example that you've given so we can play around with this. This should probably be in a form, because semantics are important. Alright. *[00:36:00]* And get the alignment just right. Then I'm going to spin up BrowserSync and BrowserSync will let me… okay, it's going to take me all the way over there. Just going to copy this, put it in here. Okay. So we have here, do you want to kind of talk us through what this example is that you've given us?

**Todd:** Okay. So you have your form. That form has a hidden label because let's say for argument's sake, you know, you don't need to see the same text twice, and you don't have room in that form to have the text above that button show. In this case, you don't want that text to show. So that label is going to be hidden with CSS.

*[00:37:00]* Then, on the submit, you have that value, "Find in this site." What's going to happen is that hidden label will be read by the screenreader, which will announce to the user that button is "Find in the site." So they can find whatever they need on that site.

**Ben:** Alright. And is this currently, like, is this one of the examples that would violate 2.5.3 Label in Name? Or is this… no, this actually seems like it would pass that, right? 

**Todd:** That is, yeah. Those CodePens do pass. 

**Ben:** Gotcha. So, would you be willing to throw together a quick example here in our HTML of something that might fail this, and we can kind of explore why it's failing? I can pull up VoiceOver. 

*[00:38:00]* **Todd:** Yeah, absolutely. So we have… yeah, let me rearrange my VS Code here for a second. So we have… label here. A very simple, I guess, method  of fouling this up would be just doing this, because the label does not match the value of the button. You want to make sure your labels—and you know, this is in a div, but you can also have, you know, it can be in a label…

*[00:39:00]* **Ben:** I'll let you do that. I'll back up.

**Todd:** Alright.

**Ben:** Pair programming! Here we go.

**Todd:** There we go. Yeah. I mean, you can do that. We'll go back here. This is not going to pass. What will happen is this label will be read "Search" by the screen— or, it SHOULD be read, you should hear "Search," when the button says "Find in this site."

**Ben:** Gotcha. So if I'm, for instance, a user who uses a voice control, like you mentioned Dragon NaturallySpeaking, and I'm looking at this, right? Like I'm expecting probably this button to be called "Search," right? Because that's what I see this label as. *[00:40:00]* And so I'm going to say, like, "button Search," or I'll say "click Search." I'm not actually familiar with Dragon all that much. I've never tested with it. I could say "Search," and it's not going to find this button because this button is announced as something else.

**Todd:** Correct.

**Ben:** Okay. So another example that I know you've given in the post, let's say I've got like a, a button here, right? And inside this button, I give this the text "Send." Then I apply, you know, I'm very accessibly-minded here, right, and so I'm going to provide a whole bunch of like extra context. So I'm going to say this is "Submit form." Like, I'm going "over and beyond" to provide screenreader support. So I'm going to say this is "Submit form."

And so now we have a button that visually says "Send," *[00:41:00]* But if I pull out VoiceOver—we'll see how well VoiceOver works with everything else I've got pulled up right now. But if I pull up VoiceOver, which is a screenreader built into Mac that allegedly should open up. Am I not…? You know what, I'll force it to, we're going to make this happen. 

**Todd:** Command-F5.

**Ben:** Oh, there it is!

**VoiceOver:** Voiceover on Chrome.  Now in Stream Man—

**Ben:** Okay. So , I've got VoiceOver up. This is a screenreader as might be used by someone who is low-vision or blind or perhaps dyslexic. It will read the contents of the page aloud as you navigate through it. So if I navigate to this button using VoiceOver, we're going to hear… 

**VoiceOver:** Now in Document, Google Chrome,  Some Antics. Leaving document, Google Chrome. Some Antics. Entering document, web content. Submit form, button. *[00:42:00]* You are currently on a button. 

**Ben:** So at the end there, y'all might've caught that it said "Submit form, button." It doesn't actually say "Send," right? So this right here is I, as I understand it, the problem that the success criteria is identifying, right? We're showing one thing visually and yet behind the scenes, the button is being called something else that a user might not predict. 

**Todd:** Yes, that's exactly it. Yep. So you can use… now, also regarding ARIA, there are places where you want to use ARIA, but as somebody had said to me, and this somebody being Bruce Lawson, who I highly recommend you follow, not only for his accessibility stuff, but also—

**VoiceOver:** VoiceOver off.

**Todd:** —his jokes on Twitter, @BruceL, the *[00:43:00]* first rule of ARIA Fight Club is not to use ARIA. 

**Ben:** Incredible.

**Todd:** So there are cases, like I said, where you want to use ARIA, but for the most part, if you don't need to use it, don't use it. 

**Ben:** For sure. So we've created a situation here where we have a control that someone might want to use, and it says one thing, but behind the scenes, that's really named another thing, and we've seen how that might cause confusion, right? Because if I'm using voice control  software like Dragon, I would have to just know that I'm supposed to say "click Submit form." I'm just supposed to know that. And so I guess the question I want to ask now is, how can we use the Web Content Accessibility Guidelines *[00:44:00]* to learn more about this issue and then remediate it?

**Todd:** So, so in this case, there is a few things which you can do. Proper labeling is basically the key that we want to do here. You can change that aria-label to say "Send." You could change the text on the button to—what did we have?—"Submit form." So we could do either those two points. Matching them is key.

That's the first thing you want to do. You don't necessarily have to use that aria-label, with the button. And I believe that it can be read that way and that should be fine. So if you want to give that a spin again and see what we got.

**Ben:** VoiceOver *[00:45:00]* being a little laggy again. Let's open up… there we go.

**VoiceOver:** Voiceover on System preferences, Accessibility, window. Accessibility features, table. Leaving document, Google Chrome. Some Antics. Entering document, web content, Submit form, button. You are currently on a button inside of welcome. 

**Ben:** Yeah. So it did say "Submit form, button." And if I were to open up… if you've  never used VoiceOver before, one of the cool features it has is the Rotor, which'll help you just quickly iterate through all the different elements of a given type on the page.

So I'm going to go ahead and open up the Rotor—

**VoiceOver:** Form Controls, menu. 

**Ben:** So you can see that it has a button called "Submit form." So it's, it's getting all that, just by virtue of having the name. So, okay. Todd let's, let's say I've done a bad, right, and I've made our inaccessible version. I was trying to be helpful. I had that *[00:46:00]* aria-label="Submit form." My button said "Send," right? II've done a bad thing. And let's say I submit this to accessibility auditors and they come back and they say, "This is a problem. You just violated success criteria in 2.5.3." What do I do from here? How would I solve this problem? Like, just by looking through WCAG.

**Todd:** Well, you can look up 2.5.3, you could read that article that I wrote, or take it upon yourself to read through the guidelines and say, "Okay, this is what I have to do." Like when we were on the guidelines and it had "Understanding" whatever *[00:47:00]* criterion we were on. Yeah.

So yeah, going to "Understanding" and going to that other link as well. You could do that. HTML right out of the box is accessible. Granted, there are a few things that have issues like everything else. But for the most part, HTML is accessible right out of the box. Is it perfect? No, but you know, nothing's perfect.

What you want to do is you want to fix the problems right away. So, as I alluded to earlier, there are ways to also check your  accessibility issues with dev tools and… you're in Chrome, right? So Chrome has the Chrome *[00:48:00]* Dev Tools that you can look up. There's an Accessibility tab that you can use.

**Ben:** So I'm here in the Elements tab and I come down to this bottom pane here that usually, like, you would look at it to see your computed styles and stuff, but hidden away in this carat, there's an Accessibility tab. So if I were to inspect our button here, we would be able to see all the different accessibility goodies for this button.

Okay, cool! So if I had wanted to debug this and figure out what's being exposed to assistive technology, I could inspect the Accessibility pane here, is what you're saying? 

**Todd:** Yeah,, you could look at the accessibility tree. *[00:49:00]* You can look at the pane there that you have open. A couple of extensions that I use are the Axe extension from Deque. That is a very useful tool, very handy tool. So if you do, yep.

**Ben:** There we go. Awesome. So I could scan all my page. It's going to give me three issues out of the box. Oh yeah, it's complaining that I don't have a main, I don't have a heading. Yeah. Okay. It's complaining about the basically HTML scaffolding. That's… enjoyable. Yeah, so Axe is great. In fact, every time I look at Axe… 'cause it provides more information and I could click this link here that said "More info"… and it usually, I've found, will point you towards WCAG *[00:50:00]* criteria, somewhere in here, I think, usually, which is extremely cool.

So there's, I think, multiple discovery paths to learn more about like, "Hey, there's an issue here. Where would I go to find more?" Well, you could check Axe and therefore the Deque references. You can check WCAG itself. Tons of blog posts out there. You mentioned your own. I imagine for just about any success criterion out there, there's a good blogpost from, from you or from Adrian Roselli  or Steve Faulkner or Sarah Higley. Just like so many great, great resources out there that'll tackle basically any criterion you need. 

**Todd:** Lots of it, yeah. And those are the people you want to follow on Twitter as well, because they always have, you know, they're always tweeting something out accessibility-related.

You know, Deque *[00:51:00]* has this Axe plugin. There's a WAVE plugin. That's very handy as well. That is the one I usually run first.

**Ben:** Interesting. This it?

**Todd:** That's it! Yeah. Well, so like for instance, if you put, I mean, it may be a bad example, but if you, in that area there for the webpage address, if you put in my site, for instance…

**Ben:** Nope. Uh, toddl.dev. There we go. 

Oh, look at that! Oh, I've never actually seen this before.

**Todd:** I have an alert. I don't know what that alert is, but… 

**Ben:** View Detail… Long alternative test. 

**Todd:** Oh, okay! Interesting. Okay. *[00:52:00]* So if you click on that icon underneath where it says "long alternative text" on the right, it's going to take you, it should take you to, like, where the issue is, right? Yeah. That should take you to the issue, which is for…

**Ben:** Oh, it looks like it's here. 

**Todd:** That's a little too much. I have to fix that. But yeah, I think a hundred characters is the optimal amount for alt texts. And you always want to have alt texts, even if it's empty alt text for images.

And of course there's different kinds of… Decorative text doesn't get alt text. It gets an empty alt text. So it's alt equals, you know, double quotes and that's it.

**Ben:** Alright. Cool. *[00:53:00]* Well we're running close to the end of time and I still had a couple of questions I wanted to ask you about, and that's  specifically around WCAG 3. So, first of all, why do the Web Content Accessibility Guidelines need a v3? Like, having a new major version, right, like that's a pretty big deal. Why does WCAG need a v3? 

**Todd:** It needs a v3 to address some things that have not been addressed. It needs a v3 to make it easier for people to learn and understand the guidelines. There are more disability needs out there, so it will allow for those different types of disabilities to be supported by new *[00:54:00]* guidelines. It provides flexibility for the new guidelines to keep up with new technologies. The guidelines will reflect, you know, real-world accessibility issues, catering to low-impact issues, for instance, or bugs, or something to that nature.

There are some changes, like I said earlier, about scoring. It's moving from A, AA, AAA to Bronze, Silver, and Gold. And right now the focus is on Bronze. Silver and Gold is quite a ways off. *[00:55:00]* Success criteria will just be…  we're moving away from success criteria to outcomes. 

**Ben:** Interesting.

**Todd:** Success criteria are true or false statements about the content of a webpage. An outcome is a statement about the need of certain users for specific types of content. That's what an outcome is. And outcomes will be rated from zero, which is very poor to four, which is excellent. So that's going to be, it's going to be like a four star rating, kind of like Uber or Lyft, for instance.

Each outcome defines what is considered a critical error, *[00:56:00]* and that'll be explained more. That's something that I'm reading into more as well. Right now, as it stands, 2.2 is "backwards compatible," and I use that in quotes, with 2.1, and that is backwards  compatible with 2. Once 3 comes, these major changes, it's going to be, like every software development, it's a new version.

It's exciting. I think it's very exciting that we have a new scoring system. There are some things that are coming down the pipe that are very exciting to me. That being the scoring change in color contrast, I think it's a lot better. I don't know *[00:57:00]* if that answered your question or not.

**Ben:** I think that's really interesting. And Chan in  the chat says that it seems like the distinction between criteria and an outcome, to him, feels like the difference between a unit test versus an end-to-end test. Okay!

**Todd:** Yep. I would agree with that, yeah. 

**Ben:** This is something—so I actually have not actually had the chance to take a look at the WCAG 3 draft, so this was something I didn't know. I had heard  about the Bronze, Silver, Gold change, and I think that's great. I think that's going to be so much more approachable and easy to talk about with like, you know, it's easy for me to go to my product owner and go, "If we do this, we're going to meet Bronze. We could do this and meet Silver." Like, that's infinitely more compelling than "A, AA. AAA." 

**Todd:** Right. Yeah. And buy-in is key. And I, when I do my advocating, *[00:58:00]* especially with stakeholders, management, team leaders, it's always, you get those people to buy into it and to buy into accessibility. And from there, your work on, you know, the team that's handling this part and the team that's handling that part, developers or designers and such, it makes things so much better and it makes development so much faster and easier for everybody. And another key with stakeholders and managers is you don't want to lose out on revenue, so you want to make things accessible.

**Ben:** Alright. Well, we are close to time. Thank you so much for hopping on, Todd. Todd, is there anything more you want to say, anything you want to *[00:59:00]* tell our fine viewers before we go? 

**Todd:** Yeah, make things accessible. It helps everybody. Start from kickoff to handoff and, you know, accessibility doesn't stop at handoff. Accessibility is always ongoing, so it goes beyond handoff. And yeah, any questions, feel free to hit me up on Twitter, @toddlibby. Be more than happy to answer any questions. You can follow me there. I have a lot of stuff that I'm doing that's coming up soon this year, as a matter of fact. So, follow me and stay tuned.

**Ben:** Alright! Thank you so much for coming on, Todd. And thank you to all of you who joined the stream. I'll catch y'all next week. Next week, it's just going to be me. I'm going to be doing an introduction to *[01:00:00]* Eleventy, which is by far and away my favorite static site generator. If you've never done anything with static site generators or Eleventy in particular, feel free to come by. I'm going to make it as approachable as possible, because Eleventy is super rad. So I will catch y'all 12:00 PM CST next Tuesday. Have a good one, y'all! 

**Todd:** Thank you everybody. Thanks Ben.

**Ben:** Bye.