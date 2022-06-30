**Ben:** Howdy, howdy! It's Tuesday, which means it's Some Antics Day! Always exciting. Today with me, I've got Joe Lamyman. Joe! Good evening! So, yeah, I am super excited about what we're about to do here today. We're going to be working on personalization stuff, which is something I understand you have quite a bit of experience in. Would you kind of tell the chat a bit about yourself, Joe? 

**Joe:** Yeah, so I'm Joe. I'm a web designer in York in England, and I've just finished a MSc about research in interactive media at the University of York. And I spent just over a year investigating whether we can use personalization as a tool for improving website accessibility.

**Ben:** Good deal! Yeah, so I've just posted the link to follow Joe on Twitter, @JoeLamyman. Absolutely do that. I know you've been blogging more, blogging some of the personalization stuff you've been doing, <i class="timecode">[00:01:00]</i> and this is a good place to get that. Yeah! 

**Joe:** That's right, yeah.

**Ben:** So before we get started, what got you excited about accessibility and personalization? How did that start for you? 

**Joe:** Good question. Yeah, so I'd been reading a few articles about accessibility and sort of a few contrast of viewpoints on it. But I did sort of a year working for a company after I finished my undergraduate degree, and I've been doing a bit of accessibility testing with real users, and I was just looking for ways that we could make it a bit better. I knew that, like, the number of websites that are accessible is really, really poor, so that was, like, a motivator towards it. But then I also kind of like the theme of control, and I find that really interesting within interactive media, so I thought I'd sort of fuse the two together and make a degree sort of looking at that. So that's where it came from really. 

**Ben:** Okay. That's awesome! Alright, <i class="timecode">[00:02:00]</i> well, I know that you have kind of actually prepped up a bit of an introduction to this kind of personalization stuff. So, uh, let's go ahead and dive into that.

**Joe:** Cool!

**Ben:** Take it away, Joe! 

**Joe:** Thanks. So, yeah, it's called "Personalizing User Interfaces for Accessibility." And just to start off with, I thought I'd quickly define two of the key terms that I'll be using during this stream. So on this first slide, we're going to have two definitions on the screen, and the first is "website accessibility." So you can see here on the screen, it says that the way I've defined it is ensuring that websites can be used by as many people as possible, and that nobody's excluded. And the definition of accessibility should also recognize that it's not static. Like, it can change depending on where you are, like your health, the environment that you're in. I think that's important because when we talk about accessibility <i class="timecode">[00:03:00]</i> sometimes, some people can think of it only relating to, like, conformance to a certain level of the Web Content Accessibility Guidelines. So yeah, I like to think of it as sort of this dynamic thing that changes depending on where we are or how we're feeling or the environment we're in. I think that's important.

And then the second one, which is obviously important for a stream on personalization is the term "personalization." The way I've defined it, as you can see on screen, it's employed in relation to the action of an individual customizing an object — that can be either physically or digitally — in order to align with their individual needs and goals.

So, the way I'm defining it isn't as, like, some data-driven thing. It's specifically somebody who's tailoring something to meet their own needs. They're not doing it, like, for a political statement or, like, as part of a joke or a meme. It's all about making sure that whatever they're using meets their specific access needs.

**Ben:** So this is me going into my settings and then saying I want captions enabled, or I need larger text or better colors. 

**Joe:** Yeah, yeah, it's <i class="timecode">[00:04:00]</i> absolutely that. Yeah, it's not something doing it for you because of the way you're using your devices. It's you explicitly doing it for yourself.

**Ben:** Gotcha!

**Joe:** Yeah. Cool. So, the next slide is titled "WCAG Shortcomings." So we're going to be looking at some of the shortcomings of the Web Content Accessibility Guidelines. And if you're not familiar — I guess most of you will be — but, yeah, the guidelines provide criteria that developers must meet to help make websites, games, media accessible to as many people as possible. And the guidelines are created with specific disabilities in mind. Again, for example, if you're not familiar with the guidelines, there's specific criteria that relate to how you can make interactive media accessible for somebody who's navigating with a screen reader or a keyboard. 

And the guidelines aren't designed to meet the needs of individuals who have varying degrees of disabilities, or different combinations of disability. So as it <i class="timecode">[00:05:00]</i> says on screen at the minute, this is a quote taken from the introduction. "Although these guidelines cover a wide range of issues, they're not able to address the needs of people with all types, degrees, and combinations of disability."

So yeah, I'm not trying to like, you know, say that WCAG's over or that don't worry about WCAG, because it's still really important and fundamental. And my work is just sort of exploring that gap that they identified themselves, and just seeing if there's anything more we can do to just help make experiences a bit more accessible. So yeah.

**Ben:** Absolutely.

**Joe:** So, the area I was specifically looking at is e-commerce because I was aware of terrible statistics such as the one that's on screen at the minute. It says, "Out of 30 Australian e-commerce websites that were tested, only ASOS met the minimum success criteria for WCAG 2.0 Level A," which is the lowest <i class="timecode">[00:06:00]</i> level, and "These findings align with the WebAIM (2019) report, whre 98% of websites did not meet WCAG 2.1 AA criteria." So, yeah, only one of these e-commerce websites met the very fundamental level of accessibility conformance, which is, in its own, pretty bad, but even more so on the next slide.

Within e-commerce, we have all these dark UX patterns. So on screen at the moment is a screenshot from, like, a room-booking user interface where there's lots of like a green on the screen, like green ticks next to random amenities like a toaster or bathtub, stuff like that. But we also have two sort of bright red, bold bits of text, and in those bright red bits of text, we're informed that only six rooms are left and another person's booked for similar dates in the last ten minutes. So yeah, it's quite contrasted against the bright green ticks and checkmarks. And <i class="timecode">[00:07:00]</i> these are sort of the dark UX patterns that I'm sure we've all encountered at some point or another, and yeah, they're commonplace within the e-commerce industry. I was reading a study that found, out of 11,000 e-commerce sites, 632 contained low-stock messages and 393 contained countdown timers. And these patterns really are like the antithesis of the Web Content Accessibility Guidelines, because they aim to, like, evoke an emotional reaction. They're preying on people's access needs in order to convert a potential purchase. So yeah, pretty terrible to be honest.

So yeah, the two of them, both inaccessible websites and then dark UX patterns, makes for a pretty bleak picture for e-commerce websites. And then in addition to that, on the next slide — sorry to be so negative at the minute — we've got increasing context of use. So this isn't some negative, but I guess we're sort of living through a period of time where <i class="timecode">[00:08:00]</i> we've got this increasingly expanding set of technology that we're using. So, the first point on screen at the minute says that web browsers are on smart devices, which is true. So, there's a meme going around on Twitter of somebody, like, watching Shrek on their fridge, and there's web browsers in Apple Watches and smartwatches, so yeah, they're everywhere. And it just means there's this constantly expanding context of use. And I woke up one morning to my brother who'd sent me a video of him viewing one of my websites on a Nintendo 3DS, handheld console, and I was like, "That is crazy. I could never have predicted a website being viewed on a device like that." So yeah.

And then the next point on the screen at the minute is how sort of these smart devices are facilitating interactions in new environments, so, you know, you could be viewing a website on your watch while walking down <i class="timecode">[00:09:00]</i> the street, or you could be viewing something on a different smart device while you're in a really bustling environment. And as developers working with typically higher-end machines in office environments, it raises the question, which is the last point stated on the screen, but how can we develop for these? How can we understand how to make experiences accessible throughout all these different contexts? Which is a really difficult question, because it's hard enough sometimes making a website, you know, work for different devices, let alone different contexts.

So onto the last slide, really. I think this is where personalization comes in, because when used correctly, as stated in the first point on the screen at the moment, it allows for individuals to customize a website to meet their own individual needs. And it comes at a time where thankfully we've got CSS custom properties and we can change styling and we can change designs really, really quickly without the need for getting complex <i class="timecode">[00:10:00]</i> libraries or tons of frameworks. You know, it's pretty  straightforward in comparison to how it's been in the past. So yeah, we can provide a user with a different design with just a few different custom properties.

I think personalization is really good as well, because it's similar to what you mentioned on this stream last week, Ben, when you were talking about curb cuts, because I think, like, personalization could help people who maybe don't identify as having a disability themselves, but yeah, they've realized that by making the, I don't know, the text bigger or by changing the layout of something, they can make it more accessible to themselves. So, yeah.

And then I guess the final point on this as well is I think personalization is really important because I think it should be done by the user themselves. So I've read a series of different papers where people have tried to build automatic solutions, and they don't tend to be successful for a couple of reasons. The first is that <i class="timecode">[00:11:00]</i> maybe they don't really tackle the user's needs. They don't really, like, create something that meets the user's needs, because they're trying to grab a load of data and, like, automatically create something. And the second reason is they're not sustainable long-term. So there's one piece I was reading where they would get users of a website to come in for, like, a load of physical, in-person tests to then go away again and use a website which was now, like, personalized to their needs. So, yeah, again, just not sustainable, really overly complex for something that's not really addressing the user's needs. 

Yeah, so it brings us nicely on to, the question, like, great, we know that we want to use personalization now, but how do we know what to personalize? And yeah, that's why I built the Bog Roll Business Builder, which I think a lot of people have seen on Twitter and may be familiar with. And essentially what it is is it's an interactive study to sort of help me understand this <i class="timecode">[00:12:00]</i> very question. It allows people to, step by step, create their own toilet roll shop design by selecting different options within the user interface. So yeah, we could take a quick look at it. 

**Ben:** Yeah! And, full disclosure, I took the survey a couple months ago when it was actually, like, open and when you were collecting, and it's super, super fascinating stuff. So I'm just going to go ahead and check all these boxes, but I've put the link in the chat. Please go through and do this yourself. I think you'll be amazed kind of what you learn. Can you walk us through this, Joe? 

**Joe:** Yeah, sure. So on the left of the screen, what we've got is sort of, like, the site that you're creating. So at the minute it's blank, because we haven't really selected anything. And then on the right of the screen, we've got a series of different options. So the minute it's asking us, like, "How big do you want your font to be?," and you can sort of choose T-shirt sizes like small, medium, large, or larger. And as Ben clicks on something, the font size on the left, in the browser display or the design <i class="timecode">[00:13:00]</i> display, is changing sizes depending on the option that's been clicked on. So then, once you're happy, you can select "Next question" and sort of step by step, you start to create your design.

And the really cool thing about this is that the design on the left that Ben's changing at the minute is semantic HTML, and so it's not like a picture or anything, it's not like a canvas that's inaccessible. If you're a screen reader user or a keyboard user, you can actually tab through the design on the left, check that it works for you, and you can, like, lay it out and test it and make sure that it actually makes sense. So these options on the right are semantically changing the content on the left, which I think is a really interesting approach to survey design, like actually letting somebody play around with something and check it works for them. So yeah.

And as you go through, I think there's nine different options in the end for stuff you have to choose. But it's all kind of, like, the fundamentals of a <i class="timecode">[00:14:00]</i> product page, so like additional information, where the image sits, kind of the element that you use to pick your sizes or quantity. So yeah, nine different options. And then at the end, it shows you what you've created, but it, like, compares it against the most frequently selected stuff as well. So you can see like what other people have built, too.

So yeah, it's just a really interesting product and really interesting survey. And yeah, it was really, really cool. When I started out to do it. I didn't think it was going to end up as good as it did but, yeah, I'm really, really chuffed to bits with it. 

**Ben:** So, as you gathered results from this—and I know you were kind of trying a whole bunch of different things to get information—what surprised you from this?

**Joe:** Good question. I think the best thing that came out of this was I found that I think it was roughly <i class="timecode">[00:15:00]</i> 91% of participants said that the designs that they created met their own needs, which was really, really cool because with the questions, I kind of, like, asked for that kind of information, I kind of asked them to personalize it, but I hadn't quite explicitly said, "Make this how you see fit." It's like, "What do you think works best?" And to hear that that many people found that it met their own needs was really, really cool, and to me, like, starts to highlight that people *are* able to personalize stuff, because I think that was a big question in existing academia. Like, are people able to personalize websites? So I think this kind of goes some ways saying that, yeah, people can personalize their own websites, which was, yeah, really, really interesting.

So yeah, on this screen, before it, like, showed you your website on the left, and then there was a contextual questionnaire on the right so I could understand information about people's disabilities or current, like, website browsing habits, that kind of thing. And then there's, like, a link which takes you through to a comparison, <i class="timecode">[00:16:00]</i> so you could see what other people have made as well. 

**Ben:** So this comparison is new! It's new since the survey finished, is what you're saying. 

**Joe:** The comparison itself is, like, always updating, so yeah, it'll be up to date and yeah, you can see the most frequently selected options. I don't know, it's nice. It lets people… I don't know, it's like giving something back, I guess?

**Ben:** Yeah!

**Joe:** But yeah, it's also really interesting to go through and be like, "How have people picked *that*?" So, yeah, it's cool. 

**Ben:** Yeah, and I'm also thinking like… I'm immediately thinking of how contextual even my choices were, because I selected, like, these radio buttons, but I think had this been Amazon and I were purchasing, like, a shirt, like I would want to see pictures of the shirt. Right?

**Joe:** Sure.

**Ben:** I feel like that's more concrete to me, like, as a need than <i class="timecode">[00:17:00]</i> just radio buttons with text names. Like, is red maroon? Is it, like, bright red? What does that mean? 

**Joe:** Yeah.

**Ben:** So, like, even just kind of with this context, like, I even have *more* questions now.

Yeah, on the subject of this whole survey, Michael Chan says, "I love the whimsy of doing this for toilet paper. Not intimidating." so it seems like you've got a good choice! How did you land on toilet paper? 

**Joe:** Yeah, so I think when I was starting this project roughly about… Well, I specifically started working on this website about a year ago, which would have been sort of just into the pandemic where we didn't really have any toilet paper in the UK, and it was all being sold out. So I was like, "Ah, this will capture people's attention." And it was also the kind of time when quite a few people were talking about, like, the whimsical web. So yeah, it was exactly for that reason. I thought, you know, it's something that will break up people's doomscrolling, <i class="timecode">[00:18:00]</i> so you'll come across this on Twitter instead of another terrible post. And it's a bit fun, so. 

**Ben:** Whereas, like, I think had you gone, like, the T-shirt route, people immediately would have, like, gone, "Well, I use Amazon and therefore — or I use Walmart or something like that, right — and therefore, I'm going to pick the choices that line up with this." Using toilet paper… I don't know about you, but I don't purchase toilet paper online, so using toilet paper kind of like… It makes it concrete, but also takes it kind of out of any contexts that people are already familiar with. That's a really strong fit, holy cow. 

**Joe:** Yeah. So yeah, it was really cool. It ended up being, like, a massive part of my master's, but I didn't really even think about that much to begin with, so yeah, it's really, really cool.

So there's a few cool comments as well. Like, somebody put that, based on the design they created, they normally needed glasses to read information on websites, but because they've been able to change the text size and that, they felt that they were able to <i class="timecode">[00:19:00]</i> read it without their glasses, which I thought was cool because it goes back to that, like, contextual use where, you know, you might have forgotten your glasses, so you might be in a situation where you can't wear glasses, so to be able to do that is really handy. So, yeah. 

**Ben:** I'm also looking at this and going, "Oh, the size I picked was identified as large and it's larger than the average. Maybe I need new glasses!" 

**Joe:** Oh! Yeah, maybe I should sort of rebundle it into a tool for doing sight tests and that.

**Ben:** Yeah!

**Joe:** So yeah, and then sort of I went through and analyzed all the results from this. So I looked at the options that people have picked, the frequency that the answers have been selected. And I found that for people that didn't identify as having a disability — because we grouped them into people who did identify as having a disability and people who didn't — for those that didn't, we found that there tended to be, like, a more frequently selected option, like a frontrunner that most people <i class="timecode">[00:20:00]</i> agreed on. So for, like, text size, I think most people agreed on either medium or large. But for the group of participants that had identified as having a disability, for seven out of the nine features in the design, there was no, like, most frequently selected option. There was, like, quite a fairly even spread across the answers. And yeah, I think that it's interesting because it kind of illustrates that, like, this is a group of people who have a wider range of different access needs. So, yeah, that's also gone some way to make me think that maybe personalization is a good fit for web accessibility. 

**Ben:** Awesome! So if I were looking to get started with personalization for accessibility, how might I get started? What might I need to keep in mind, perhaps? 

**Joe:** So, I guess just sort of knowing a bit of information about sort of different disabilities, different people's <i class="timecode">[00:21:00]</i> needs is a really good thing to think about. So, I should have put it in the resources on the slides, but I think it's the UK government, the Digital Services put out a few posters on, like, do's and don'ts when designing for accessibility, and it's sort of a really clear way of seeing what you should and shouldn't be doing when you're designing for different people. And it sort of says really, really clearly on the left, like, here's some things you should do and then here's some things you shouldn't do. Sorry, I didn't realize it was hidden away in this GitHub.

**Ben:** Yeah! Okay. Let's see if this works. Oh, there we go! 

**Joe:** Yeah!

**Ben:** Look at that. Yeah.

**Joe:** So, yeah, so for users on the autistic spectrum, some of it's like, make sure you've got, like, a really clear layout, don't, like, put loads of stuff together and make really busy designs, which looks really fair. And this is really handy because you can start to understand some needs <i class="timecode">[00:22:00]</i> and you can start to get an idea as to how you should be personalizing stuff.

So, I've got a few sort of starter files. So if you want to have a go starting to personalize a website, there's a repository here on GitHub. I also don't think I put this on my resources slide but I can share the link and update the slides. So it's basically just a few HTML and CSS files. There's a little bit of JavaScript that does sort of the class adding and class removing. But I think it's a good base to start from. And I think on the site by default, if we have a quick look at that 

**Ben:** On the site?

**Joe:**  Just within a browser.

**Ben:**  Yes. `npm start`, get BrowserSync up and running. There we go. Oh, it's port 3000. Okay.

There we go. More bog rolls! Heck yes.

**Joe:** So, I've tried to theme it around the bog roll. I'm trying to stick to the theme, really.

**Ben:** No! <i class="timecode">[00:23:00]</i> No!

**Joe:** There we go. Beautiful.

**Ben:** How did I not get you on the stream earlier? That's is incredible. 

**Joe:** So on the left, I think one of the, like, most common personalizations that we have… So, on screen at the minute, we've got, like, a site that's got a few different things going on. It's laid out with a grid, so we've got a header and footer on the left of the screen, and on the right is, like, the main body of our website that we can scroll through. But the most common personalization I think we're all used to seeing now is, like, changing to a dark theme. So you should have a working light theme/dark theme switch on the site. And I think we've, yeah, like I said, we're all used to it now. But I think it's a really good thing to think about when moving forwards and looking at personalizations.

So I thought what we'd have a go at first is trying to make a personalization that changes the structure of the website itself. So at the minute, like I said, it's a grid going on, there's some flexboxes. But what if we <i class="timecode">[00:24:00]</i> just wanted, like, a single column, like, streamlined layout? So together, hopefully we'll be able to code that in.

So looking at the code, if you've ever looked at CUBE CSS by Andy Bell, it's sort of structured like that. So I've got a SCSS file that has all the sort of CUBE CSS bits of it. 

**Ben:** Get the link to this. This is a way to, like, structure your CSS by Andy Bell that focuses on kind of the best parts of the cascade.

**Joe:** That's it, yeah. Yeah, so my scss folder is structured like that, so we've got the composition, the utilities, the blocks, and I haven't got any exceptions in here at the minute. But the additional bit is the personalizations folder. So I guess it's like, CUBE P, or something like that. P CUBE. That doesn't sound too great, but we'll work <i class="timecode">[00:25:00]</i> on the name. We'll fix it! 

**Ben:** Also, not a problem that's well addressed by bog rolls! Well, or maybe totally a problem that's well addressed by bog rolls! Okay! 

**Joe:** So, yeah. Already in here I put in the _themes.scss, And this _themes.scss is sort of based on a post or a tutorial that Andy Bell did, and I've sort of heavily referenced that to get the theme stuff working.

So… I don't know, could we open them side by side? Because it might help us when we're making the layout structure. 

**Ben:** Like, open the browser and the editor side by side?

**Joe:** Ah, no, sorry. Could we open the _themes.scss file and the _layoutStructure.scss side by side? 

**Ben:** Open that… then open this in here… close the sidebar! <i class="timecode">[00:26:00]</i> There we go. How's that? 

**Joe:** Cool. Yeah, that's brilliant! Thank you. 

So the first thing we're going to do is, as we can see on the left here, we need to make some properties that we'll be able to grab, and we need to make sure that there's some defaults set. So on the left, we've got our `html` selector, so we're selecting the `<html>` attribute. And if the user prefers the dark color scheme, then we automatically set the color mode to "dark". Otherwise, we have another `html` selector, and we just set the color mode to "light" by default. So if the user doesn't have a preference and they haven't selected anything – maybe it's their first time visiting the site – we're just going to show them the light mode by default. So that's how it works.

And then sort of around line 19, we then declare all the light properties so they can actually reference something. So they're all there. And then line 28, we declare all the dark properties. So now they're all declared, that's brilliant, but they're not going to do anything. So on line <i class="timecode">[00:27:00]</i> 37, we're just using a bit of Sass so that when the `<html>` has a `.p-light` class attached to it, we set all the color properties to be their light variants. And then likewise, on line 48, when we have a dark class on the `<html>` element, we're setting all the color properties to be their dark variants. So yeah, you're essentially just switching which properties are being used based on the class that's applied to that `<html>` element. So it's pretty simple, I think.

Alright!

And then, we're going to try and do that to make sort of a straightforward layout structure on the right. So what we're going to do is start off by creating some defaults. So if we create a property called maybe, like, `--layout-structure-grid`?

**Ben:** Does this need… This does need… No, it's in `html`. Yes. `--layout-structure-grid`. <i class="timecode">[00:28:00]</i> Got it. 

**Joe:** Perfect! And for now, we won't set it to be anything for the time being. We'll jump back to that in just a second. And then we're going to do the same, we're going to make a `--layout-structure-flex`.

Cool. Okay. And then we're going to do, like we've done on the left, the next thing we did was to declare sort of the light properties. So what we're going to do in our layout structure is we're going to sort of now create our CSS custom properties that are going to handle sort of the structure properties. It might sound a bit weird, but when we start doing it in a second, I think it will become a bit clearer. So what we're going to do here is going to create essentially the same custom property names, so `--layout-structure-grid`, but we're going to add onto the end of it `-structured`. I think that makes sense. And we're going to set it to be "grid", because when we're in structured view, we want it to do `display: grid`, <i class="timecode">[00:29:00]</i> and then essentially just the same for flexboxes.

**Ben:** Maybe I will just copy-paste, huh?

**Joe:** That would be good.

**Ben:** That'd be faster. Don't need to show off my Mavis Beacon training. It's, uh, "streamlined" is the other one? Or maybe flex? Oh, no, it's this. 

**Joe:** Yeah, we can do that one. But if we're doing `--layout-structure-grid-streamlined`, then for now, what we're going to do is set that one to be "block". So what this is doing, we've got our grid structure, so when we have a grid and the user wants the page to be structured properly, we're going to show it as a grid, but when the user wants it to be streamlined, we're going to switch that property to be block because this CSS custom property is going to be used for the display property within CSS. So <i class="timecode">[00:30:00]</i> yeah, when it's structured, it'll be grid, and then when it's streamlined, it'll just snap to a block and then everything will just be in a nice, streamlined column.

**Ben:** Super cool.

**Joe:** And then… Perfect. Yeah. And then we can… Should we do flexbox, or should we stick…? Let's just get the grid one working for the time being. So yeah, then below I guess it's line 13 at the minute, we're going to make it so that when the `<html>` element has a specific class attached… 

**Ben:** So you've been following this "p," and that "p" is for "personalization," I'm guessing? 

**Joe:** Yeah, I think that's what I decided on all those months. 

**Ben:** This `--layout-structure-grid` is going to be set to… 

**Joe:** it's going to be set to — yeah, that, exactly that.

**Ben:** Okay! I'm getting the hang of this!

**Joe:** Cool!

**Ben:** This is making sense to me! 

**Joe:** And <i class="timecode">[00:31:00]</i> then we'll create our other class, which will be for when it's streamlined.

**Ben:** So we're saying when our `<html>` has the `.p-structured` class, it's going to set the `--layout-structure-grid` variable to be this guy, which is "grid." And otherwise, when it has the `.p-streamlined` class, it's going to set it to this guy, which is "block."

**Joe:** Yes.

**Ben:** We can toggle between grid and block this way, based on which class is applied.

**Joe:** Exactly.

**Ben:** Very cool.

**Joe:** Exactly that, yeah. And then the only other thing that's left to do right now at the minute is on line 3, we just need to set our `--layout-structure-grid` to, like, a sensible default, so we can say to the variable, which is `--layout-structure-grid-structured`, because that'll be "grid." So by default, when the user hasn't visited the site or set a preference, they'll still get the <i class="timecode">[00:32:00]</i> structured grid.

So, yeah, that's perfect. That's all our SCSS stuff done. The only other thing we need to do now is, in our index.html of the site—I did a bit of work earlier—so within the `<footer>`… 

**Ben:** In the `<footer>`, which would be all the way down here. Okay. 

**Joe:** Yeah, perfect. So you can see there's a `<fieldset>` there, and there's a `<legend>` asking, "How would you prefer the layout?" so we've got an `<input>` and a `<label>`, and within the `<input>`, I think there's a data attribute. Yeah, there we go: `data-classtoadd`. So if you change whatever's in there at the minute, yeah, so if you just replace that with the classname that you made, which I think it was p-… 

**Ben:** And then this would be "p-streamlined" down here for that.

**Joe:** I think so. So, if we save this and give it a go, I don't think we've missed anything. I think we should be able <i class="timecode">[00:33:00]</i> to personalize the layout of our site.

**Ben:** My browser has decided to play a disappearing game. Let's see. That'll do it. Okay. So, "Styling options," and then "Layout," and then… So, where would I expect to see… I guess it's on the `<html>`. So where… If I set structured, nothing should change, because that was the default, but when I set streamlined… 

**Joe:** Oh, no, nothing changed!

**Ben:** Hmm…

**Joe:** So if we take another look at it… So what should have happened is inside my CSS, wherever I've been… Oh, I know what it is! Yeah, so if we jump to the critical.scss file.

**Ben:** Yeah, I'm guessing 'cause I'd picked a different classname than you had?

**Joe:**  No, you've done it exactly right. I just missed a step! So, the way it's working at the minute is… and <i class="timecode">[00:34:00]</i> I guess it's a really important thing I should have mentioned earlier, when it comes to personalization, I think it is really easy to personalize most properties. It just depends how easy it is for you to abstract, like, commonly used values out of the code. So instead of doing `display: grid` in my code, I've done `display:` and then set it to be the custom property, which I've called `--display-grid`. So, that's currently managing the grid stuff. All we need to do is just do, like, a find and replace wherever `--display-grid` is used and change it to that custom property that you created earlier.

**Ben:** `display: grid`…

**Joe:** Sorry, it'll be dash dash display dash grid.

And then I think the… I can't remember the custom property you made. Was it `--structure`? 

**Ben:** Was it `--layout-structure-grid`?

**Joe:** That's it! Yeah, that's the property. Yeah.

**Ben:** Okay. So we're going to use this and set it up here, 'cause <i class="timecode">[00:35:00]</i> it's already set, but we'll…

**Joe:** That's it.

**Ben:** Commit here… and probably do this on all the other…

**Joe:**  That's right.

**Ben:**  …Sass files.

**Joe:** I think that's the CSS that's compiled, so it should be fine there. There's just one other there. 

**Ben:** Alright! 

**Joe:** So yeah, now we've actually given it the custom properties to use.

**Ben:** Hey!

**Joe:** Hey, presto. We get, like, a single-column layout. So, because we sort of abstracted all those properties into a single custom property, we just change it one place and then, yeah.

**Ben:** Okay, but… 

**Joe:** It's pretty…

**Ben:** I'm clicking "Structured" and it's not taking me back.

**Joe:** Oh!

**Ben:** Also, I think I saw this when I went to dark mode. Light mode's, not taking me back either. But I think, like, the general idea makes sense. Oh, look at that! Wild! 

**Joe:** Now that's probably to do with <i class="timecode">[00:36:00]</i> my JavaScript, because I'll put my hands up that I am not the best JavaScript developer in the world. CSS is more my remit. So it's like, it *was* working!

**Ben:** Sure!

**Joe:** On the fritz at the minute.

**Ben:** "Works on my machine!"

**Joe:** Yeah, there you go. So yeah, could definitely do with getting improved. But yeah, that's sort of the sort of fundamentals of it. It should sort of just snap back between two because of those properties. I'm not sure what's happening in there. 

**Ben:** Let's see. Let's check the errors, see if you've got anything in there. Alright. Good on you! Love these console logs. This is great. 

**Joe:** So, it doesn't look like there's anything too wrong. Let me think.

I'm not entirely sure. Yeah, 'cause we <i class="timecode">[00:37:00]</i> changed everything so that it should be using `--layout-structure-grid`. And then should we jump back to the `_layoutStructure.scss` file and just check that again? 

**Ben:** `_layoutStructure.scss`… Yep. 

**Joe:** So yeah, it should be using `-streamlined`, and then it should be using `-streamlined`. Huh, that's strange. Yeah, I'm not sure what's causing that. 

**Ben:** `data-classtoadd`… 

**Joe:** "p-structured." Yeah, that all looks right to me,

**Ben:** Global… Joe, I found your JavaScript.

**Joe:** Oh, no. What have you unleashed upon everybody?

**Ben:** Alright. So it's looking specifically for "light" and "dark," and not <i class="timecode">[00:38:00]</i> "p-light" and "p-dark." 

**Joe:** Yeah, and that might be because of the way it was saved. In the browser, was it even changing the class on the `<html>` element? I guess it wouldn't have been. 

**Ben:** Let's find out. So right now, if I refresh, does that change anything? 

**Joe:** No, I guess it's… Yeah, it's doing the local storage part right.

So it stored it as "p-p-structured." That's the problem. I'm seeing the class on the HTML element. I don't know why it's done that and it's never done that before, but there you go. 

**Ben:** Maybe I won't just search for "p-." Let's see. Ahh, look at that. So you're appending it here, so what I need to do is go back here and… 

**Joe:** Ah, of course, yeah! 

**Ben:** There we go.

**Joe:** There we go.

**Ben:** I think that should get us there. <i class="timecode">[00:39:00]</i> So it changed to the dark theme. Change… well, we'll see if that works later, perhaps. "Structured layout?" 

**Joe:** No, still not happy. 

**Ben:** We are getting "p-structured," though. 

**Joe:** Hm.

**Ben:** Hm!

**Joe:** Yeah, I'm not sure. I'll have to take another look at that and dive into my horrible JavaScript again. But yeah, I guess sort of the intent is there,  and using that, you should sort of have a quick way to switch between the two. But there's sort of another side to it. So that's sort of meant to be the global personalization side, but then I was thinking of individual personalizations as well. So we should be able to still work through this. So if we go to maybe one of the bundle pages… 

**Ben:** One of the bundle pages. Okay. 

**Joe:** And if you scroll down and hover over the product overview <i class="timecode">[00:40:00]</i> stuff… 

**Ben:** Okay. 

**Joe:** Yeah, you get, like, the little "Change the styling" thing that pops up. So, like, if you focused, you'd be able to hit that still, so it is reachable by keyboards. And you should be able to — well, once we've coded it up, if my JavaScript still holds — we'll be able to change the font size and line height of this specific element, which I think is really cool as well because, like, there might be aspects on a site where, you know, they're more relevant to you and you just want to be able to see them or change the way that the font is currently laid out. Sometimes when reading articles, I go into the CSS myself and change it. So I was thinking like, is there a way that we could make it so you can target specific elements? Like you might want to get rid of adverts and something. Yeah, just bump up the size of the additional information.

So, yeah, these are what I've been calling my individual personalizations, and the way they work is just by using utility classes. So if you click <i class="timecode">[00:41:00]</i> on "Font size," it'll show you, like, a similar thing to what we had before, where it'll ask you what text size you want to select. And then, yeah, you would be able to just go in and, yeah, cycle through them.

So that's working, and I didn't think that would work at this stage, so that's interesting as well! I thought we'd code this up together! But yeah, the way this is working is, again, it's pretty similar, I think. On each of those radio attributes, you've just got like a data property or `data-classtoadd`. It's just a data attribute, and I'm using some JavaScript just to apply that to this specific element. I've stored the selector in local storage. So it targets it and then applies it to it. So we've set it to "Extra large" here, but you can imagine that on a website, like, the product page might just be a template that you just filled with data again and again. So because this is stored in local storage with a selector — fingers crossed — you should be able to go to any other bundle page and your personalization <i class="timecode">[00:42:00]</i> should have held. Like, the product overview should be large. 

**Ben:** Oh, look at that! Okay! That's super cool. 

**Joe:** So then you've got your personalizations that stick with you as you sort of progress through the site and do whatever on the site. So I think that's nice. And then one of the things I was looking at. That's another thing, the code won't work based on what has happened so far, but yeah, you can very quickly, like, clear those personalizations. I think that is important as well. And it's not… Ah, let's see if it works. 

**Ben:** Where is that at? 

**Joe:** So, it should be inside there.

**Ben:** Okay! Alright!

**Joe:** So that bit works!

And yeah, in the website I created for my thesis, which is separate to this, I had, like, a button where you could stop those dialogs from appearing, because you can imagine if you were constantly going through this site, it would get a bit frustrating if they kept popping up. So yeah. And I was changing quite a few things as well, so there's, like, line height, <i class="timecode">[00:43:00]</i> word spacing, maybe the width of the element. If the width is getting too big, you could set it to, like, a specific amount of characters using, like, the `ch` measurements, I guess, so that was quite handy, too. 

So it's a whole host of things you could explore, but I think those GOV.UK posters are a good starting point to think, like, "Oh, what's a feature of my design I could personalize?" And then yeah, using sort of global stuff and then more specific individual personalizations, you can actually make these changes. I think it's a cool way to do it.

So I didn't actually get to test this method with too many people. I tested it with a single screenreader user, so their experience definitely isn't, like, going to be the same for everybody. But yeah, they said that the individual personalization menus were easy to hit. They were in, like, an appropriate space and they worked quite well for them. But again, just one person, so could be terrible for others. 

<i class="timecode">[00:44:00]</i> But yeah, I think it's a really interesting way to think about it. And, you know, you could imagine making these changes quite quickly and having a site that looks quite different from how designers or developers thought it was going to look in the first place.

**Ben:** Yeah, absolutely. So it sounds like a lot of the customizations that you're making have to do with typography and with colors and layout, so very, very visual stuff. Did those kinds of attributes ended up being, like, really compelling personalizable attributes? And did you find anything else that people might not have thought of in that regard that might be personalized?

**Joe:** I guess all the visual stuff is kind of what you'd expect. So yeah, it was mainly to do with typography. Some of it is for spacing. Maybe there was some layout stuff like we've explored and that we're now stuck with.

But one of the things I tried as well was introducing, like, expanded alt text, and <i class="timecode">[00:45:00]</i> also providing, like, hidden page descriptions for screenreader users. So instead of like… I don't know if everybody's familiar, but screenreader users will have shortcuts that can quickly explore the headings on the page, and that's how they'll understand information about the page. So I thought maybe we could have, like, a hidden page summary at the top to understand if that was useful. And the screenreader user I spoke to said that these features we're really interesting, and the expanded alt text was, really good for them. But, like, the page summary stuff that was hidden at the top of the page, they said maybe they wouldn't use it because the heading shortcut is a lot quicker and they know what to expect with it. You know, like, not all sites are going to have a hidden page summary, so that wasn't too useful. But interestingly, they said that if they were at the stage where they were just picking up a screenreader and they weren't used to all the commands… 

**Ben:** Oh!

**Joe:** …these kind of features would be really useful for helping people sort of understand what's on the page if they don't know all those keybindings and shortcuts. <i class="timecode">[00:46:00]</i> So I thought that was really, really interesting. 

**Ben:** Yeah, absolutely. Are there more things you wanted to try out, Joe? 

**Joe:** Let's have a look. We've done some… I guess we can quickly look at how the utility classes are structured. And there's nothing really too special about these, but in my utilities folder, um, I think there is… Ah, fontSizes, perfect. So, yeah, these are, again, just using CSS custom properties, and I've got some utility classes for setting, like, size 800, size 700. Then again I've got, like, the T-shirt sizing sort of thing, where we've got text size small, medium, large, and extra large, and these are literally just what's been applied to that additional information. I've made it !important. Normally, I feel a bit naughty when I use the !important bit, but I feel like utility class is fine, so.

**Ben:** Mmhmm. Well, and especially because these represent user preferences. Like, <i class="timecode">[00:47:00]</i> those user preferences *should* win out over anything the designer was trying to do. 

**Joe:** Absolutely. Yeah, exactly. So in this case, it feels right to do it, although it doesn't look good to have, like, five !importants on the screen, but I feel like it all works.

So yeah, and this is literally just all that's being applied to that additional information. So yeah, again, nothing, nothing too complex. It's just sort of, like, existing CSS stuff that we already have in order to make these personalizations with my JavaScript that doesn't work. 

**Ben:** Sure! But I think the general idea is there of, like, when you're writing your layouts and your designs in CSS, you're using custom properties and those custom properties are changed based on what class is applied to the `<html>` or to the specific element. <i class="timecode">[00:48:00]</i> And the user has controls where they can choose, "Hey, I want this font size," or "I want this layout." And those controls have a bit of JavaScript to toggle the class on that element. So it toggles the class, which reassigns the custom properties, which changes the layout. Which is super cool. 

**Joe:** Yeah. Yeah. So, yeah, I think it's really interesting and I was kind of trying to think about it within the context of, like, design systems as well, because if you abstracted everything out early enough, t'd be quite  straightforward to add in personalization. I guess you might have a bit more testing. There might be sort of a big todo with, like, reassuring your marketing teams that this is actually really important. But yeah, I think that would be really interesting just to see users' preferences, like, propagate through a massive design system and it should be really, really cool. So, yeah, it's interesting. There's lots to think about off the back of this, but I think <i class="timecode">[00:49:00]</i> it's a good start. 

**Ben:** Alright. Let's see if I can fix the theme switcher. Could this… Oh, here's your local storage stuff! 

**Joe:** Yeah, the theme switcher is pretty much Andy Bell's stuff. So all of my stuff is within global-styling-changes and individual-styinge-changes.

**Ben:** By the way, have you seen — I believe it's Max Böck — his theme switcher on his site? This is glorious. I think it's mxb.dev. So, yes, friends, dropping this in the chat. It is worth a check. But he takes this to the extreme here. You can click this and then you can pick, like, oh, you know…

**Joe:** Oh, wow.

**Ben:** …I'm a dark mode fan. You know, I've got like… He's got all these other themes here that are all named after MarioKart courses. Lobsters, if you need more <i class="timecode">[00:50:00]</i> lobsters. Suddenly it's Hacker News. Yeah, just lots of really fun stuff, so you can apply this to *extremes* in some way. 

**Joe:** Oh, that's really cool, yeah! So yeah, essentially that's all personalization is, but yeah, just building on that a little bit. But yeah, this is, aw, incredible. I see you get the little lobster cursor as well. 

**Ben:** Yes, and the font changes to Lobster.

**Joe:** Lobster! Wow.

**Ben:** Yeah, so, and this is, I believe, it's just kind of taking what you've done here of, like, toggling the classes to toggle the custom properties.

**Joe:** Yeah.

**Ben:** It's taking it to a bit of an extreme in some way and I love it!

**Joe:** Yeah, it's brilliant!

**Ben:** And I believe this is an Eleventy site, Joe, so represent. 

**Joe:** This is — personalization and Eleventy — this is definitely my kind of <i class="timecode">[00:51:00]</i> site. 

**Ben:** Yeah, so let's see. Yeah, so here's where you're adding the class to the `<html>` element. Are you… Do you remove the class? Yes. 

**Joe:** There's some splitting and some string editing at some point. I can't really remember off the top of my head exactly where it is. Because for some… I think if I've added the class from local storage, I think I was doing it differently at one point, and then I tried to, like, combine the two and that's probably where it got a bit messy.

**Ben:** Yeah.

**Joe:** Because yeah, a lot of this code was written in, like, a panicked state worrying about deadlines.

**Ben:** Oh, no! Oh, I'm so sorry, Joe!

**Joe:** It's okay! So yeah, I kind of, like, just buried all of that knowledge of this code and now it's re-emerged. 

**Ben:** Might have to play around with this, see what <i class="timecode">[00:52:00]</i> we can make. 

Okay, so what avenues do you think personalization should explore going forward? Whether that's you or whether that's just people, web accessibility advocates who are interested in exploring personalization. Where can personalization go from here?

**Joe:** Oh, I'd love to see like… I think there's a few things I'd love to see. I'd love to see, like, design systems or maybe CSS frameworks starting to include personalization by default. So I think there's a library — I can't quite remember the name of it, I think it's something like Fullmoon — which is a CSS framework similar to, like, Bootstrap. I think that's got like a light and dark mode switcher built in by default. Halfmoon, maybe? Fullmoon, Halfmoon UI? 

**Ben:** Well, we'll find out! Ooh!

**Joe:** Yeah!

**Ben:** Does this look familiar? Oh, we got there! 

**Joe:** Yeah, Halfmoon UI. I <i class="timecode">[00:53:00]</i> think by default, yeah, they have a light/dark mode switcher. And it'd be cool to see more of that built in by default, like, to allow people to change font sizes. And I appreciate some of this is done within browser settings, but I don't think a lot of people know this kind of stuff exists or, like, system settings, so I think making it easier to discover  and changs is really useful.

**Ben:** Yes. Tatiana Mac had an article very recently about `prefers-reduced-motion`, which is the kind of browser, operating system-level setting that basically the user can express their preference for whether they want to see animations or whether they prefer not to, which can be incredibly important, for instance, for people with vestibular disorders or people with epilepsy. And in this article, they kind of make the point that, you know, *technical* users know that those features <i class="timecode">[00:54:00]</i> exist, but by and large, most browser users don't. Right? Most people navigating the web don't. And so this was a really interesting, like, case of, like, "Hey, what if we kind of turned the narrative on its head and instead made no animation the default and let users specifically turn it on?" And that, I think, is also kind of part of the personalization story here, of making sure you have sensible, accessible out-of-the-box defaults and then allowing the fancy stuff for people who are willing and able to toggle that setting.

**Joe:** Yeah. Yeah, it's exactly that. Yeah, this is brilliant. I haven't seen this article, so I'll be reading that after this. But yeah, it's exactly that, yeah. 

**Ben:** Alright! Joe, this has been so great. Super, super glad to have you on. I've had a great time, and also, just kind of thank you <i class="timecode">[00:55:00]</i> for all the bog roll stuff. I was worried my stream was getting too professional. 

**Joe:** Oh, thank you so much! Yeah, I've really  enjoyed it. It's been fantastic to come and talk about it, so yeah, thanks so much for having me. 

**Ben:** Anytime! Y'all, go follow Joe. I'll put his Twitter in the chat again. And also while you're at it, go follow Some Antics. We have some great stuff in store this month. Next week, Adrianne is going to be talking to us about test-driven development. She's a huge proponent for test-driven development, and I have a lot to learn in that regard. So she's going to be talking through her process of how she builds tests, and what that means for her position on her team, collaborating with other team members, collaborating via testing, which is super exciting. The week after, we have my user experience partner in crime Ashlae Nelms on. She's going to be talking about design tokens. So if you're <i class="timecode">[00:56:00]</i> interested in kind of the design library space, design system space, come join that. And then the week after — I believe it's the 27th — we have Andy Bell, whom we've referenced a couple of times. We're going to be building web components together. That's going to be really exciting. And if you want to keep up with all the stuff that we're doing here, definitely, definitely go follow the stream on Twitter. 

Yeah, we're getting some thanks in the chat. Thank y'all all for being here. It's been killer. Stick around. We are going to raid, so let me find someone real quick. Yeah, there we go! Have a good one, y'all! See you next Tuesday.

**Joe:** Cheers!