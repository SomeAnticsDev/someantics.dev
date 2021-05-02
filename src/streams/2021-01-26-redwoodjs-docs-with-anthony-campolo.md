---
title: Putting RedwoodJS Docs to the Test with Anthony Campolo
thumbnailTitle: Putting RedwoodJS Docs to the Test
upload: https://www.youtube.com/watch?v=ois3P63Yiwc
hosts:
  - Ben Myers
  - Anthony Campolo
---

Accessibility best practices should be baked into our education, documentation, and developer advocacy work. Join Ben and his guest [Anthony Campolo](https://twitter.com/ajcwebdev) for the inaugural stream of <i>Some Antics</i>, as we go through the [RedwoodJS tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood) and pick apart ways it could encourage accessibility from the get-go.

Anthony Campolo is a developer advocate at StepZen and a RedwoodJS Core Team member. In a past life, he was a music teacher. He's big on learning in public, and about sharing what he learns.

## More From Anthony

* [Follow Anthony on Twitter](https://twitter.com/ajcwebdev)
* [Read Anthony's posts on Dev.to](https://dev.to/ajcwebdev)
* [Check out the <i>FSJam Podcast</i>](https://fsjam.org)
* [See Anthony on <i>Learn with Jason</i>](https://www.learnwithjason.dev/let-s-learn-redwoodjs)

## Mentioned Links

* [RedwoodJS tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood)
* [Pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)
* [Redwood's `<Link>` component](https://github.com/redwoodjs/redwood/blob/main/packages/router/src/links.js)
* [Gatsby's client-side routing user testing](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)
* ["Making RedwoodJS Accessible" on the Redwood community forums](https://community.redwoodjs.com/t/making-redwoodjs-accessible/1680)

## Transcript

**Ben:** Alright, let's go ahead and do this.

Howdy, howdy, y'all. Welcome to the inaugural stream of Some Antics! My name is Ben Myers. I am a frontend developer with a passion for web accessibility. Some Antics is a weekly stream focused on web accessibility, semantic markup, progressive enhancement, and the like. I'm really, really excited for this experiment.

And with us for our first stream is my good friend Anthony. Anthony, hello!

**Anthony:** Hey Ben, how you doing? 

**Ben:** Doing alright! I'm a little overcaffeinated but, you know, we're making do!

**Anthony:** I'm appropriately caffeinated. I got the right levels going right now.

**Ben:** I need to know your secrets. What is the right amount of caffeine? 

**Anthony:** So, my secret is I don't drink coffee. I just take a caffeine pill in the morning. So I'll get the same amount every single [00:01:00] time, instead of just drinking nine more cups. 

**Ben:** If you go into your friendly neighborhood Walmart or whatever, and go into the drink mixes aisle, they have energy packets. They're the fruit-flavored drink mixes that you would like stir into your water, but they're caffeinated and this is, y'all, the best lifehack.

**Anthony:** I'm super happy to be here and to get to kick this off and get Some Antics going, because you've really helped me out a lot in terms of learning what accessibility is, how to think about making accessible websites.

And I talk a lot about how I feel like this is something that was very poorly taught to myself as a bootcamp student, and by that I mean it wasn't taught at all. Like, we were specifically told at one point that they were not going to teach us accessibility in the bootcamp, but that we should probably learn it on our own because we're going to be tested on it in like interview questions.

So to me, that just [00:02:00] seemed like an admission of failure on the school's part because we talk so much about how these things are important and how developers should know these things and then we don't enable them to actually do it, don't enable them with the knowledge or the tools or any of that. So that's why, when I heard Ben was interested in doing this, I was like, "Yes, sign me up. Let's do this."

**Ben:** Absolutely. And you work on, on something that's really cool, which is Redwood. Do you want to kind of give us the... Like, my impression of Redwood from what I've heard, if I could  summarize it in three words is it's React on Rails, right. But you're on that core team. And so I was wondering if you could kind of tell us a little more about what Redwood is before we kind of dive into this.

**Anthony:** Yeah, I think the "React on Rails" title gets you, like, 90% of the way there, but then you're going to be very wrong about that last 10%. So it is a what we call full-stack, serverless framework, which just means it's full-stack in the sense that [00:03:00] you have your frontend and your backend. So it's not just like a Create React App. You also have another folder with an API that has a GraphQL schema and a Prisma schema, which is like this ORM thing. You have all of this kind of backend stuff, which I don't think we're going to get super into. I think we're going to be working more so in the web side today, but that's kind of the main deal.

And then we say serverless because it gets deployed onto services like Netlify or Vercel, and then uses things like AWS Lambdas under the hood. So a lot of tech that goes into it and making it work that takes a long time to explain. But the really important thing you gotta know is that, the whole idea is that it gives you your entire project and that one person could create that project.

Now, what that means then is that one person is responsible for everything. They're responsible for the entire site, front to back, every single part of it. So you're no longer allowed you to skimp on accessibility. You can't push that off to another department and say like, "Oh, I'm not the one who needs [00:04:00] to worry about accessibility. Like the front end person needs to worry about accessibility or whatever, you know, whoever gets saddled with it in a company. You don't have that option. So I think it's really important that people building apps with Redwood, they know at least the basics of how to look through their app and figure out, you know, "Is this accessible or not?," so I think really important for full-stack engineers in particular to not skip this step.

And so, yeah,  that's kind of what I would like to do here. And then what I would really like to do is kind of look through the tutorial with you. Going back to what I was saying about the mental model of accessibility is I would really enjoy just getting to ask you questions about how you think about accessibility and what is the things that you look for when you look at a website and how do you test it and all those kinds of things.

And we've also talked about how tutorials don't necessarily set people up for accessible websites, and that, a lot of times, people will follow along with the tutorial and if it's a good [00:05:00] tutorial, they'll hopefully get to the end and they'll have something, you know, completed, but it may just be like a very, very bare minimum, minimum viable product. It may just be something that just barely functions. And ideally you could have a tutorial that gets someone to the end and not only do they have a functioning working project, but it also has things like accessibility in it. And that those things have been thought about ahead of time so that they can follow along with the tutorial, learn it, but then also have all of these best practices baked into it as well. 

**Ben:** Absolutely. There's kind of this metaphor that I love, which is the pit of success. Anthony, are you familiar with that metaphor? 

**Anthony:** Yeah, that's a big I think that might've come from Rails, actually. I know that's the thing that they talked a lot about in the Rails world. Yeah, the pit of success, the idea being that you want to give developers the best chance of succeeding by providing them with the best conventions and the best tools and the best framework, ideally, which is a combination of [00:06:00] tools that allows them to build in a way that feels natural and comfortable, but that doesn't result in all of these corners getting cut along the way.

**Ben:** For sure, for sure. Thank you. So, Chan's posted the link to the Coding Horror blogpost on the pit of success. And additionally, my good friend, Isabelle, she's mentioning tutorials with clickable divs, right? Like this is an experience I've had where, when I was first learning React, I went through a pretty well-known video course that, you know, took you through everything React. I had the opportunity to revisit it like a year later when I was helping some new developers learn React. And in that year, I got to kind of like look and see really, you know, how does that video course line up with how I'm actually doing React on a day-to-day basis?

And I found with my horror, like I found with [00:07:00] just absolute, absolute horror that the tutorial was recommending absolutely inaccessible practices. The one that comes to mind is like using clickable divs to pretend to be buttons. I really do think education has this really, really unique role where it can really set the tone for what new developers are going to prioritize. Right? You mentioned for instance, your bootcamp experience, where your bootcamp just straight up did not teach you. They kind of told you, like, "Hey, you should know this." But they didn't teach you a thing. And my guess is that quite a few of your fellow bootcampers probably walked away with the impression of "Okay, this might be a nice-to-know, but it isn't a need-to-know. This isn't a priority." Like, the impression that like accessibility is not the priority here. Would you say that that's kind of an [00:08:00] accurate assessment? 

**Anthony:** Yeah, I would say if it was a priority, then they would have taught it to us. Like from, from their point of view, if they saw it as a priority, then they would have taught to us. So by not teaching it to us, they were implicitly saying we don't see this as,as important as the rest of the curriculum. 

**Ben:** Absolutely. Alright, so I want to dive in, but first we actually kind of missed something I wanted to do, which was have you tell me more a bit about yourself and your history, especially as it pertains to education.

**Anthony:** Yeah, totally. And I've done a million podcasts interviews, so if people want to learn about me, there's a lot of resources to do it now. I am someone who came from a teaching background. So this is why, you know, education is very passionate for me and is one of the things I've really enjoyed about this community that we've been building in the React Discord. This is how you and I have gotten to know each other, the React Discord from Michael Chan, the excellent Michael Chan. He has been really, really putting together this fantastic community of people who want to learn together, who want to teach each other, and we've been doing lots of live events and [00:09:00] things like that.

And that's kind of what got us here. But I was a music teacher. So as you can see in this picture on screen with my giant violin, as I like to say. It is a upright bass or a string bass, or a double bass. It has many terms. It is not a cello. And I spent a year teaching high school band. So doing like the whole marching band thing and all that kind of stuff. You know, went to football games, led the band, and did all that.

And yeah, it was cool. And there's there's lot of things I appreciate about the whole marching band kind of culture, but it wasn't really for me. I kind of came up more throug like a rock band, like garage band, like metalhead  kind of scene. That was actually what got me into music. And I came to love, you know, classical music and jazz and all this stuff. I love all genres of music, but like I never really had a passion for, for wind ensemble. So it was hard for me to get up every day, teach that to a group of kids who were all playing instruments I didn't even know how to play, you know. And I then spent [00:10:00] four years running a performing arts summer camp, and it's called uCamps, and it may not exist anymore because this whole pandemic situation. So see about that. But it was a general performing arts summer camps. So you have acting, film, music, dance. I did the music portion as a workshop leader. We had a rock band workshop where we would basically get a group of like 20 or so kids, put them in four bands of about five kids or so. There'd be, like, guitars, bass player, drummer, a singer, keys. And we would just give them a cover song to learn, so it could be a Beatles song or it could be, you know, a more modern kind of song, like whatever the kids are into these days. And then we would spend a week teaching them the song. And at the end of the week, we put on a big rock concert, so everyone would get to play their songs and do a little mini set.

And yeah, so I did that for four years, but I was actually doing like admin [00:11:00] work. The camp, you know, was a couple of weeks during the summer, and then the rest of the year, you'd plan the camp and, you know, take payments and, you know, book the buses. So I wasn't really that into admin work.

I learned a lot about how to run a company and how to run events and how to do all sorts of stuff. So I learned a ton, but I wanted to get something a little more creative and something that just kind of jelled more of what I like to do on a day-to-day basis. And I found my way to coding. First through kind of machine learning, data science type stuff is what I was first trying to learn for about a year, and struggled with that, and eventually kind of pivoted to web dev and JavaScript. And then I went through the bootcamp. It was Lambda School, which is a remote bootcamp that has an income share agreement. And I learned a ton of React. It was a very, very React-heavy bootcamp. And after that, I started getting involved in RedwoodJS, which we already talked about a little bit about, and I started learning RedwoodJS around May, [00:12:00] and started really taking it seriously and writing about it in June. And then they invited me on to the contributors  team around September, I think, and then I was invited onto the core team in December.

So right now I'm on core. Core is 12 members. It was the 4-member founding team, and then the 12-member core team. So that is where I'm currently at today. 

**Ben:** That's super cool. Thank you so much for sharing. One of the things that I've really appreciated about you, Anthony, is that whenever you learn a thing, you immediately turn around and share that thing. So, y'all, please go follow Anthony on Twitter, @ajcwebdev. You're going to learn so much, you're going to learn alongside Anthony. It's great. The other thing I'm going to recommend is that y'all follow him on Dev.to, 'cause he's also pretty active at sharing—

**Anthony:** I'm working to make my Dev posts more accessible. Right now., some of them aren't great. I put like screenshots of code in some of them. I'm working to make all of this better. So just, like, fair warning about some of my [00:13:00] blogging. 

**Ben:** Excellent, excellent. And then, one last thing to share from you is, we're gonna share,  you're a podcast host. So, you run the FSJam Podcast. That's short for "Full-stack JAMstack," I understand. It's great. I listened to your recent episode with Swyx. It's phenomenal. I learned a lot from it. So, y'all, please go check out Anthony on all the things. He's great at learning things. He's great at sharing what he learns. It's incredible.

And finally, this is not going to be really a tutorial about RedwoodJS. This is not going to be an introduction to RedwoodJS. However, you've already done an introduction to RedwoodJS on Twitch, on the Learn with Jason show. So I am going to share that link as well. 

**Anthony:** Super fun. You actually were hanging out. You got a couple of posts in the chat there while we were doing this.

**Ben:** Also, whaaat, Learn with [00:14:00] Jason? Totally, totally not an inspiration for Some Antics here… Please go check it out. It's incredible. 
Yeah, let's go ahead and dive into the Redwood docs. Specifically, we're going through the tutorial today, right? 

**Anthony:** Yeah. So, first, let's just, real quick, talk about… Redwood has this idea called "tutorial-driven development."  The idea being that the tutorial is kind of like the centerpiece of the project in a lot of ways. And they put a lot of work into making sure that the tutorial is very well written. It's very clear, and it has a good sequence of steps to progressively reveal the framework to you. And as we were saying before, a tutorial that is really  well done, even if you go into it totally cold, you can get to the end of it and have like a full deployed project. And that's what I did. That's what almost everyone who goes through Redwood and kind of learns it does. They kind of go through the tutorial. Even people who don't like tutorials very much, I find still, even the Redwood tutorial, they'll [00:15:00] go through it just because  it just kind of sucks you in. And so once you start it, it's hard not to just like keep going. But that's why I think it's really important that we make sure we audit it for these types of accessibility things.

So, yeah. So if you just click "Start the Tutorial," I think that should get you just to the very first step. The first full page there is just gonna be text and it's just kind of giving you the "Hello, we're Redwood. You can go to our README on our GitHub if you want, or you can watch these videos." These videos are kind of deprecated. If you follow along Part 3, you'll hit a breaking change with the forms.

But we're going to be just going through the docs. We're going to go through the tutorial in the docs, which is constantly being iterated and updated. So that's kind of the canonical version you want to follow along. I originally followed the video tutorial back when it first came out, but if you do that, you'll hit a couple of roadblocks.

**Ben:** Video material, and I say this fully aware that I am actively creating video material right now, video material is hard, right? Because the [00:16:00] moment, like one thing is becomes out of date, you have to rerecord everything and, like, what do you rerecord? Do you just edit it to include a little pop-up that says, like, "Hey, this part is wrong. Do this instead"? I'm reminded of Kent C. Dodds. Kent C. Dodds launched his EpicReact.dev, site and then, just a few weeks later, the React 17 announcement came out and React 17 was like, "Hey, you no longer have to import React from 'react,'" and Kent's like, "Are you kidding me? I have a whole video archive that's just nothing but 'import React from 'react.''" 

**Anthony:** I've imported React from 'react' over 9,000 times in my life. 

**Ben:** Right! And it's just hard! There's that balance of, like, what do you update? And I find docs are a lot more flexible in that regard.

So, yeah, we're going to be going through the docs and we might not go through all the docs [00:17:00] because, like you've mentioned, there's definitely a full-stack element of this, and that means that there's going to be some backend tutorials as well, and those backend tutorials probably aren't going to be the most relevant or helpful for us when we're talking about recommending web accessibility best practices.

**Anthony:** If you go the left, where it says "Our First Page." That's going to be where we're going to start getting like actually HTML and what we want to start looking through. So just to skip over the installation, the file structure stuff. That's not going to be super relevant. 

**Ben:** Real quick, it looks like we do have another Redwood core team member, in the chat, saying, "We're thinking after version 1.0 is live, I'll rerecord these tutorial videos (part 1) and make new ones for part 2." And that's right, because this is a two-part tutorial.

**Anthony:** Yeah. That must be Rob then, it sounds like. Yeah. Yeah, that's definitely where there's a lot of stuff happening right now with the "2torial," as we call it.

**Ben:** Oh, [00:18:00] god…

**Anthony:** What was it? "Redwood's Revenge," I think. 

**Ben:** That's on par with the _Sharknado_ naming scheme. Are you familiar with the _Sharknado_ naming scheme? 

**Anthony:** I don't think I am, actually.

**Ben:** This is incredible. We need to take the segue, y'all, I'm sorry. This is so important to me. There are six _Sharknado_ movies. It's _Sharknado_, _Sharknado 2: The Second One_, _Sharknado 3: Oh, Hell No_, _Sharknado: The 4th Awakens_, _Sharknado 5: Global Swarming_, and then Sharknado 6, of course, has two different names, one of which is _The Last Sharknado_ and the other is _Sharknado 6: It's About Time_, which is  important because this was the Sharknado movie that introduces time travel. So it's incredible, y'all, and I'm glad to see Redwood picking up the spirit of the best sequel names for sure. 

**Anthony:** Yeah. I think Rob is a big fan of retro films. So I think he's inspired [00:19:00] by some of the naming schemes that were a bit more in vogue back in the '80's.

**Ben:** Absolutely. Alright. Cool. So we are on this "Our First Page" page, which is going to be our first page. Yeah, just kind of, I guess, walk me through, as you're looking at this, what are some of the things you're worried about? What are some of the things you're like, "We might not have gotten this one right"?

**Anthony:** Yeah, so, when you generate a page, it spits out that home page for you right there. Yep. So, if you keep going down a little bit, there'll be the actual code for that. Let's see. You actually have to go to the next page, I think, and then we'll see the code for that.

**Ben:** Alright.

**Anthony:** Actually. Okay. Yeah, this actually, now that I'm thinking about it, this actually might be better for us to run the commands and actually get the stuff. So it looks like it's not always going to show us exactly what HTML is being spat. It's been a while since I've actually [00:20:00] just, like, read through this thing. I'm starting to basically internalize the tutorial to the extent where I've done it live so many times that I forget kind of what the original one is, but yeah.

So yeah, let's just generate, so `yarn`, space, `create`, space, and then `redwood-app`, space, and then period, forward slash. And then just give it the name of your project.

And while that's going, let's just go back, look at the docs real quick 'cause that's gonna take a minute. And so let's just look right here. So this would be kind of the first thing I would want to know is, like, how does this HTML look? We've got an `h1`, we've got a `nav`, we've got a `main`, so I think it's not too bad, but it's like… how semantic is this HTML, I guess would be my first question.

**Ben:** So this is already loads, loads better than, a lot of the tutorials I've seen. 

**Anthony:** That's good to hear. Yeah. Cause I [00:21:00] was hoping that like, we wouldn't be terrible. I knew we wouldn't be perfect, but I know that this has, we've put a little bit of thought into this already, so that's, that's good to hear.

**Ben:** For sure. I'm going to maybe zoom into this because it's kind of what we're looking at here. Yeah, so I can see, for instance, that you've got a `header` element. Already loads better than the tutorials that are out there for a lot of webdev stuff. You've also got a `nav` element, which has an unordered list, which has a list item, which is pretty cool. `nav`s don't, if I'm understanding this correctly, `nav`s don't HAVE to have unordered lists, but unordered lists are a  pretty helpful way to structure the content inside a `nav`. So it works either way. 

**Anthony:** What would be another way that you would structure a `nav`? 

**Ben:** A `nav` with just a bunch of link children, a bunch of anchor tags inside of it could be another…

**Anthony:** So it'd just be the `nav`, just without the `ul` or the `li` at all. 

**Ben:** Yeah. I personally prefer to have a `ul` in there. I think that nested, like, list structure in there is [00:22:00] helpful.

**Anthony:** It'd be helpful for styling it also.

**Ben:** Yeah. My guess is that it's a list because later in the tutorial, there's probably going to be more routes added in there, would be my guess. Okay.

**Anthony:** Yeah. Right now it's, what we end up doing is we add a link to the—actually this might be a good question, because I think we're going to do is we end up adding a link on the `h1` back to the blog instead of having a "Home" in the `nav`, so that actually might be a problem.

**Ben:** Okay. Yeah. The other thing I'm noticing is that you're kind of kicking off with this `h1` here for "Redwood Blog," and my thought looking at that is I probably would not make this an `h1`, and the reason for that is that the `h1` usually serves as the page title rather than the site title. So, while here we've got some [00:23:00] generic like content, just some filler thing… 

**Anthony:** So it would make more sense for "Home" to be the `h1` here, is what you're saying.

**Ben:** Yes. Yeah. Like, an `h1` followed by a bunch of paragraph tags here. Yeah. And this is because the headings are, like the `h1` through `h6` tags, are used to create what is effectively a document outline. Like you can almost think about if you were writing an essay and you needed ahead of time, like your teacher's asking you to turn in that outline for your essay. That outline could be a bunch of nested bullet points, right? And those nested bullet points are effectively the document outline that we're talking about here.

And so usually, the title of your essay, in this case, is not necessarily "Redwood Blog," but the title of your essay is likely "Home." So, yeah, I would maybe make this like just a general [00:24:00] link inside the `nav`, or you wouldn't even necessarily have to be in the `nav`. But yeah, that is something I would do.

While we're kind of talking about this `nav` section, you don't have a whole lot in your `nav` and that's totally fine, especially kind of starting out.

**Anthony:** Yeah, the idea is that this is we're building out a blog here, so you would add a contact form at one point, so that ends being another link. So that's something, we kind of build up the links as we build up the project. 

**Ben:** Absolutely. And one of the consequences of emergent design is, as your site goes on and on, your `nav` is inherently going to accrue more and more links, right? This is just a fundamental problem. And so, if we can imagine someone who's a keyboard navigator like tabbing their way through the page. They tab through all of the links in the `nav`, then they reach like the main content down here, and that's the content that [00:25:00] they're actually interested in. Let's imagine that the user then clicks a link to go to a different route on the site. If their focus starts off at the beginning, then that means they have to go through the whole `nav` again. And when the `nav` is as small as this, that's probably fine. But when `nav`s get bigger, you would likely want to introduce what's called a skiplink. And the skiplink is, you would add an ID to your main tag here. So it'd be, like, `id="main-content"`, or something like that. And then you would just have an anchor tag up here. Like it would be the absolute first focusable element in the document. And it would say something like "Skip to content," and the link would be an, like an anchor down to the main. 

**Anthony:** So, I've never even heard of that. Like, that's the first I've even heard that term. Yeah. So that's great.

**Ben:** Let me show you, I've actually, [00:26:00] implemented a skiplink on my blog here. So, this is benmyers.dev, and I don't have all that much in my nav either, as you can see. It's basically I've got the logo up here. I've got an about, I've got Twitter. But if I hit tab, you can actually see that the first thing that shows up, this is a link that has been set to be visually hidden until it's focused.

So that's something that a lot of people will do when they're  building a skiplink. And if I were to hit Enter on this thing… It took me actually to the heading, which I probably should add a focus outline for. 

**Anthony:** Do an accessibility audit for your website next. 

**Ben:** We have a question from Chan in the chat about how do I prefer to mark up the site name. So typically, the site name is actually going to be a link. Sorry, let me take us back here to the tutorial. Typically, this is going to be a link, right? Because you want to be able to click it [00:27:00] and it takes you back home. And so that would be the important thing. But also in kind of the practical, real-world application of building a website, typically what you have in here is a logo, and that's going to be an image. So, having a link with an image tag inside of it, and that image tag has an alt of "Home" or something like that would be a fairly standard way to mark up the site name.

**Anthony:** You said a link with an image tag in the link, and then alt on that image.

**Ben:** Yeah, and that alt would be something like "Home." Yeah. Uh, cool. 

**Anthony:** So our project will be generated now, so we can just go back to "Our First Page" and just start kind of following along with the commands. Yeah. 

So let's get our project up. So `cd` into your directory. 32 seconds—man, you got a fast computer.

[00:28:00] **Ben:** Let's go ahead and pop this open. 

**Anthony:** Yeah, I'm actually going to be—I'm on a 2014 MacBook right now, but I'm about to be upgrading very soon, thankfully. Getting that M1!

**Ben:** Alright. Cool. Walk me through what you want me to go ahead and do next. 

**Anthony:** Just go ahead and kick off our dev server so we can see what we're doing. So `yarn rw dev`. So everything just starts with `yarn rw` or `yarn redwood`, so you don't have to install the CLI globally.

**Ben:** Alright.

**Anthony:** And that is going to pop you up on localhost:8910. I think it will open a browser window for you automatically. Sometimes it does; sometimes it doesn't. 

**Ben:** Yeah, it opened off-screen here. Let me go ahead and just copy-paste this in. There we go. Pretty rad! 

**Anthony:** So that's just the splash page, so this disappears once you start building your product, so let's not worry about that too much. So let's go back to the tutorial and let's just [00:29:00] follow along with the commands. So if you just copy that command there, that's going to generate your homepage.

**Ben:** Should I kill the dev server first, or just…?

**Anthony:** Keep the dev server on and then open a terminal. Yeah, just open another terminal. Exactly, yeah.

**Ben:** Alright.

**Anthony:** And then you go ahead and fire that up. And then if we look back at our project… Yeah, ideally, if you can get the… You only need to see a little bit of that, so you want to just have that all the way to the right and then with your code on the left, then we can see both at the same time.

**Ben:** Yeah, let's do that. 

**Anthony:** And you're not going to need really your… actually, you will need your terminal for a couple more commands, but if you want to pop open a terminal in your VS Code editor or just kind of figure out how you want your screen. 

**Ben:** We'll do it this way because living life on the edge. If this isn't [00:30:00] working for y'all, let me know when the chat. 

**Anthony:** Probably increase the font a little bit on both the browser and your editors as well.

**Ben:** Alright. That's totally fair. Oh, too much.

**Anthony:** That's gonna be a little too much. Yeah, that's probably okay. Yeah. And if we go to our `web` folder, we can see the actual code for this homepage. `src/pages/HomePage`. There you go!

Alright! So it starts you off with a h1 and p tag and then just like a link in there. So this is kind of setting you up for what is eventually going to be that layout that we were looking at. So what you kind of do is you start by generating a homepage and you start by generating an about page, and then it shows you how to link between the two of them. But then they're like, "Oh, just kidding! Actually, we can do this with the layout!" So we can kind of just skip straight to the… Let's first do this. Let's do the next commands to generate our about [00:31:00] page. So go all the way to the bottom.

**Ben:** All the way to the bottom, okay.

**Anthony:** And then hit Next. Yeah. So then this is our about page. So this will generate our next page. 

**Ben:** Look at that. 

**Anthony:** And then I think after that, the next one was the layout. 

**Ben:** Okay. Is that on this page? 

**Anthony:** So let's go, so before that, actually let's go back and let's just go through how it's written.
So first, it's going to have you take this whole thing, so copy that, and put that into your homepage. 

**Ben:** Alright. The site should update. Cool.

**Anthony:** And then if you click the "About," it'll take you to the about page, but we don't have a link back to our homepage, so then you have a little… in the next part of this… then go back to the tutorial and then go down. Keep going… [00:32:00] Yeah. And then paste that into your about page.

**Ben:** Starting to feel like I should have allotted a little more room for the browser stuff. Okay. About page. Boom. 

**Anthony:** And then now if we go back to our about page…
And then where were we, on the about page? So then you can click "Return home" to return home. Yep. There you go. Cool! And so then what they have you do is they have you abstract out those links into the layout. So that's why I'm not too concerned about how the code looks at right now, because once we get to the layout, that's where things, actually, is, like, important and it's going to kind of stick.
So go back to the tutorial.

**Ben:** Sure thing.

**Anthony:** Yep. And scroll all the way down and go to the next page. And then this will give us—keep going—and it will give you a command to generate the [00:33:00] layout. Yep. 

**Ben:** So many excellent commands. This is incredible. So, in case you haven't seen Redwood, first of all, I understand that this this `redwood` part here, you could use `rw` as a shortcut for that. And then this `g` is an abbreviation for `generate`. So it's this whole chain of like you're running Yarn and Yarn is running the `redwood generate` command to create a new layout, and that layout is called `blog`. 

**Anthony:** Yep. And before, instead of `layout`, it just said `pages`. So we have a lot of `yarn redwood generate` commands. And so, yeah, so that will generate the layout 

**Ben:** Are we close to the point where I can hide my terminal so we can have a little more room? 

**Anthony:** Yeah, at this point, yeah, that shouldd be good. I don't think we're gonna… The next step is gonna be all the Prisma database stuff. So yeah, this will get us pretty far.
Cool. Alright. So now, [00:34:00] yeah, let's go to the layout. So it'd be above pages. Yeah. 

**Ben:** And this is newly generated for us and it's just a fragment that returns the children. So this is a wrapper around an individual page, right? The page stuff effectively slots in right here. And so we could add a whole bunch of stuff, like I think that tutorial mentions the header. 

**Anthony:** Yeah. Yeah. So let's go backwards to the left and then scroll down a little bit in the tutorial. And so this is what we were looking at before. Yeah. So as you see, we have the header and then the main, and so what we do is, yeah, go ahead and put that in the blog layout.

Yeah. And so, and this is something we should talk about just real quickly is getting Redwood to really the [00:35:00] level of accessibility we need is going to require some things in the router that I don't quite understand yet, so if there's anyone here who knows a lot about how routers work and how accessibility works, we could use your help.

And it's one of those things where you and I have talked about this a little bit. Marcy Sutton has written about this in terms of, like, routing in Gatsby, and right now, if you go to kind of Redwood's PRs about this, it's like, "Here's some links to what Marcy has said about this and we need to figure this out." And so, yeah, that's kind of where we're at right now with that.

And the reason why I want to do this, 'cause I see this kind of like more at the meta level of, like, how do you build accessible websites with Redwood, but in terms like Redwood itself being accessible is also something that we're still working on and looking for contributions,  if anyone happens to have that sort of expertise.

**Ben:** Absolutely. Quick question. I know a lot of frameworks around React, a lot of, [00:36:00] like, React meta-frameworks will introduce their own Link component. Can you help me understand what Redwood's Link is doing, is it working similarly to like the React Router Link, the Gatsby Link, Next Link…?

**Anthony:** Let's go to Redwood docs and find out! There'll be a specific page for the Redwood router. So if you just google "RedwoodJS router," or it's in the docs page towards the bottom. 

**Ben:** There we go. This looks like it. "Redwood Router." Okay!

**Anthony:** Yup. Let me just figure it out. You just go down to the… Let's see… There we go! Yeah. So "Link and named route functions," I think is what you're gonna want.

Yeah. So this is one of the things… You know, this framework was built long before I came along, so there's a lot of stuff in terms of, like, how the router was created, how it's working, that I'm still learning, kind of picking up as we go. So [00:37:00] I don't know exactly what the `Link` component is doing. It's always just worked for me so I've never had to worry about what the `Link` component… As far as thinking about these frameworks and having all the magic is when the magic works, you never really have to figure out what the magic does. And then once the magic breaks is when you have to figure out what it's doing.

**Ben:** So, if I had to take a guess, it's probably working, and it may even under the hood be leveraging React Router's `Link` or something, but because this is a single-page… 

**Anthony:** It's not. I can say for sure that it was a new router built from scratch. It's not importing any other router. So I can say that for sure.

**Ben:** Super cool. So, yeah. Single-page  applications, if you use just a pure anchor tag without overriding any of their default behavior or anything like that, then you're going to get a hard page load, which is difficult in a single-page application because the thing that makes single-page apps super cool, and I guess the [00:38:00] optimization that they provide is the bundle's already there, so you shouldn't have to do a hard page load. You shouldn't  have to go fetch the new page. You've already got that there on the browser. So it's, I guess, to prevent the hard refresh, hard new page load. It looks like we've got some code in the chat for the `Link` component, which is super cool.

Cool. So, maybe I can deviate a little off-script and we can—oh, I believe you're on mute, my friend. 

**Anthony:** Sorry, I wasn't saying anything.

**Ben:** Ah, you're good. So if I were interested in creating a skiplink… let me, I guess, try to do what I can and then you can let me know if maybe I'm using `Link`s wrong here. But what I would first do— 

**Anthony:** First, actually, let's first get the blog layout into our page before we start doing any of that, just so we can also [00:39:00] see what we're doing there. So let's go back to the tutorial. So that's all good. And then it's going to, yeah, so right there, that's going to be your homepage.

And so what you do is… The layout is a component and you bring in the component and you wrap the content. So as you see here, we're taking that blog layout and we're just wrapping the little home, right. And you're not going to need to import `Link` and `Route` anymore because they are in our layout now. 

**Ben:** Dig it. There are a few things more satisfying than removing an import. On layout, I guess you've already got an h1, don't you? So I'll just do "Home," like the tutorial says. 

**Anthony:** Yep. And then scroll down just a little bit and there'll be the same thing for your about page.
Actually… [00:40:00] Sorry. So let's just skip that because it's going to have you change that. Keep going, keep going, keep going. Um, yep. A little bit more, a little more. That's what you want. Yeah.

**Ben:** Ahh... cool, cool, cool. I dig it!

**Anthony:** Yeah. So what they do is, they kind of walk you through why you're able to take the links out, because they're in the layout. So, like I said, the tutorial does a really good job walking you through it so you actually understand what's happening. So you can kind of skip a couple of steps if you know where you're already going.

**Ben:** That's fair!

**Anthony:** Okay! So that should be good. Let's go back and just look at the site now. We should be able to just navigate between… Make sure you've saved everything.

**Ben:** Yeah, I don't think we pulled in… There was a bit in the header I think that we were supposed to add. At the very top of this page, I think there was adding a link somewhere.

**Anthony:** Ah, yeah. Actually. I know what you're talking [00:41:00] about. Yeah. So, scroll down. A little more. Right there. Yeah, so that's the final blog layout. Yeah.
Yeah. So now, as I was saying, the h1, yeah, we made that the link. And so you were saying though, that that's actually a good thing, though. You want to have that one link at the top that takes you back to home, it sounds like. 

**Ben:** Yeah. And I would say that's a pretty common pattern, too, right? I wouldn't necessarily wrap it in an h1 because the name of this page is not likely to be "Redwood Blog." The name of the page is likely… 

**Anthony:** Cool. Yeah. So at this point, let's just start changing stuff. Let's take the code we have, and see what you, would do to it, and then we'll kind of see where the code lands lands at the end. 

**Ben:** For sure. Yeah, so I'm going to remove this h1 here. And [00:42:00] the auto format on save is pretty great. Yeah, so I would go ahead and add a skiplink to this, and the way that I would do that—it may actually correct the formatting here—but I would add an ID here. I'm just gonna call this "main." Oh yeah, it did format. Cool. And then… Link. Cool. Exciting. So I would put something descriptive in here like "Skip to content." And this would go to… can I put… my guess is I could put a… 

**Anthony:** Yeah, so the way this works is, if you look at the link below, how you have `routes.home()` inside  the brackets. So that's what's happening here. Every time we generate a page, it has a name. So it's like a named route and that's, we call it a "named route function." So that's why [00:43:00] it's `routes.home()` with the parentheses. It's a function that links you to your home. 

**Ben:** Alright. And can I just do a string like this?

**Anthony:** Let's find out!

**Ben:** Alright. Yeah, it does look like that's doing it. I'm not sure, maybe it's doing like a hard load. If I'm wrong there, let me know in the chat. I would super appreciate that.

Looks like we've got some comments. "With the way the router is currently built, the whole page has to reload because the layout is used inside the page. You can't persist the layout between pages because the hierarchy is reversed. We're working on fixing that. You'll be able to define the layout that should wrap your route so that if two routes use the same layout, the layout will persist and only the page content itself will swap out."

That's super cool! That strikes me as single-page applications working in much the way we would expect a single-page app to work.

**Anthony:** Would you kind of break that down a little bit? What you just read, you kinda read that fast. [00:44:00] I don't think all the listeners necessarily got all that. 

**Ben:** Yeah, absolutely.

So currently, we have two pages that are using the blog layout that we've created here. And currently, the way the Redwood Router is working is, it's not smart enough to really know that  both of these pages use the same layout. That's because the layouts are like treated as children of the pages. And that means that every time you navigate between pages, even if the layout that you're using is the same, it's having to render a whole new version of the layout. And that could, depending on your site, that could be inefficient, and it might or might not be what you want. So it sounds like future versions of the router, will hopefully be smart enough to know, [00:45:00] like, "Oh, you're reusing this layout and therefore we don't have to change anything about that. We can just rerender what changed."

**Anthony:** Yeah. Yeah, this is what I was saying, how there's there's stuff in the internals of the router that, like I said, are still being worked on and it's a little bit above my head right now, but yeah. 

**Ben:** Okay. That's super cool. And yeah, as I'm hearing, like, "Oh, the layout might not rerender," my first thought is, like, "Oh, god, the focus management on that is going to be rough."  Because when you're on a static site where every page is just l its own static HTML page, when you go from one page to another, that's a hard page load. Right? And so a screenreader, in that case, will usually announce something like the document title. 

Which actually is an interesting point!  We haven't done anything with document titles in here. Maybe that's something I should follow up on next. But yeah, so, the [00:46:00] screenreader announces the document title and that's usually how the screenreader user knows that they're now on a new page. But in a single-page application, you're not actually ever leaving the HTML page that you're on. Things are just kind of changing around you. And that means that you don't get the document title announcement, you don't get any of the new page stuff, and even your focus might not change if the component, the link that you clicked on doesn't rerender at all. So this is why routers for single-page applications are incredibly difficult, just because you have to figure out what are the sensible defaults for announcing to assistive technology users, or managing focus, announcing to them that their page has changed.

**Anthony:** Yeah, there's so much that goes into the router, and I felt like it's like such a black box to most people. 

**Ben:** Maybe I just need to get Marcy Sutton on somehow [00:47:00] and just be, like, "Please teach me everything about routers ever, please." 

**Anthony:** That would definitely be an episode I would want to watch 

**Ben:** She did some great work with that when she was working at Gatsby. Let me get a link to that.

In the meantime, do you know, does Redwood have anything for head management? Because I'm noticing, like, hey, as we navigate between pages, it doesn't look like my title up here doesn't seem to be changing at all. 

**Anthony:** That's a good question. I mean, I'm sure there is. Like, we don't have a head tag like Next has. I know we don't have that, but I'm sure there's a way to do it. Yeah, hopefully Rob is still in the chat. I'm sure he'd be able to answer that. Let me just check the docs real quick. 

**Ben:** Alright. And I'll check it over here as well. It feels like it would be part of the router!

Let's see, "Redwood head." I'm going to get so many trees. [00:48:00] Dinosaurs— dinosaurs— uh, "dinosaur head slab." Words are hard. Always, always down for more dinosaurs. Let's see. If I put "RedwoodJS head" in here.

Well, the first non-redwoodjs.com link here is ajcwebdev, which sounds familiar. 

**Anthony:** I quite monopolized SEO around Redwood. 

**Ben:** You are become The Redwood Instructor.

Yeah, so I guess as someone who's looking at this, like, "Hey, we've got different pages going on in a React single-page app," as someone who's looking at this from an accessibility perspective, I'm kind of curious, where would someone find the head management stuff? Because maybe, maybe that's something that's not super straightforward to get into with the [00:49:00] *beginner* tutorial, like first steps, but it is something that maybe shouldn't be left off the table.

**Anthony:** Yeah, totally. Yeah, no, I agree. And I feel like it should be somewhere in the docs. I just don't know where. But if not, that's something we'll definitely add, and that is like very, very important for sure. These are exactly the kind of notes that I was hoping to get from this, so that's great.

**Ben:** Absolutely. 

Cool. Anything else you can think of? Anywhere that… 'cause I know you've given a whole lot of these, like, Redwood introductions, where do people go next? Where do they, I guess, deviate from the tutorials to build their own thing? 

**Anthony:** That's a *great* question! It's really going to depend on kind of what people want to build with it. You know, we say this a lot, is that we're showing you this blog to help teach people Redwood, but, like, honestly, no one really uses Redwood to build a blog and if you do, you probably shouldn't. It's not really what it's made for.

So [00:50:00] I think most people are going to kind of go through the tutorial and figure out how it works, and then they're either going to kind of start from scratch again, or they're just going to kind of take the finished project and start changing stuff. So in terms of where we are right now in the tutorial, the next kind of stuff is going to be all the database stuff and that's stuff that  you're sayin, isn't really relative right now. So I would say what we should do is we should go look at the finished blog and see how that looks. 'Cause that's kinda what this ends you up at. So if you just search "Redwood example blog." Yeah. 

**Ben:** How about this one?

**Anthony:** That's the one.

**Ben:** Alright. Is this hosted anywhere? Uhh, yeah! Cool. 

**Anthony:** This is what Rob built out. He did the tutorial and then he also kinda like made a cool, like, he made it [00:51:00] look nice and did all that kind of stuff. So hopefully like color contrast and things like that are good, but that's kind of what we can look at moreso with this now.

**Ben:** Let's find out! 

**Anthony:** And then the repo is just all there, if you want us to start poking into the code. 

**Ben:** Alright. I'm just kind of surveying, getting a good sense of what's going on here, all the different things that that I'm seeing. This is really nicely done! It looks great. 

**Anthony:** Rob will be very happy to hear that. 

**Ben:** Ooh. You know what? So, the first thing I'm noticing is that I see a "Continue reading" link, and I'm going to actually put this to the test and pull up VoiceOver. 
**VoiceOver:** VoiceOver on Chrome. Hammer Review, Google Chrome. Link, steel. Link. Link. Continue reading, article. You are currently on a link. To click this link press— 

**Ben:** Okay. So when I navigate… 

**Anthony:** First off, what [00:52:00] tool is this? How do we get this? 

**Ben:** This is incredible. So this is VoiceOver. VoiceOver is a screenreader. Specifically, it's a screen reader that's built into Mac. I wanna say currently usage statistics for VoiceOver are, like, 10% of screenreader users  are using VoiceOver. The vast majority of screenreader users use JAWS, which is a paid screenreader for Windows. There's also quite a few who will use NVDA. 

**Anthony:** So, ideally, you'd want to also test with JAWS, is what you're saying. 

**Ben:** Yeah. All screen readers are implemented slightly differently, so definitely.

**Anthony:** Like everything in tech. Like how every version of SQL is slightly different SQL. 

**Ben:** So, when you're navigating with a screenreader, there are many modes that you can navigate with.
The one that as developers, we're going to be inclined to try first is tabbing, right? Because that's how, you know, as power users of technology…

**Anthony:** Tab through your page, yep.

**Ben:** Yeah, you tab through the page! But there's different ways you can navigate. [00:53:00] There's… I could do what's called the "virtual cursor," which would take me through all the elements in this page, static or interactive, et cetera.

And then finally, I could… different screenreaders provide different means of going through a page going between elements of the same type, so, for instance, going from link to link or from button to button or from form field to form field. And what you're going to see is, I'm going to, I'm using voiceover, I'm going to do Ctrl-Opt-U.

**VoiceOver:** Links menu.

**Ben:** And this opens the Rotor, which is VoiceOver's implementation of that feature. And what we're going to see here is, this is a list of all the links on the page. So I could go through this—I'm actually going to scroll because I don't really want VoiceOver talking over me. But you're going to see here that we have, well, we got "wood," "steel," "acrylic," "wood," "steel"… we've got some repeated links. The other thing that we've got is, we've got these repeated "Continue reading" [00:54:00] links, right? And you know, we see this pattern all the time, right? Maybe it's "Continue reading," maybe it's "Read more," maybe it's "Show more." But you'll have, wherever  you've goe this excerpt, you'll often have a link to read the full thing. And the issue with that is that it doesn't provide context as to what reading more would actually give you. So when you're in a kind of context-free mode like VoiceOver's Rotor here, you're not actually clear what more you'd be reading.

So, some people would remedy this by adding an `aria-label`. So the link will say "Continue reading," but it'll have an `aria-label` on top of it that'll say "Continue reading Thor's Hammer Woodworking Mallet." 

**Anthony:** So, quick question along those lines. Do you think it would be worth it for there to be `aria-label`s in the Redwood tutorial?

**Ben:** It depends. I wouldn't use it to duplicate what's already there. You know, if you've got a link that says "Home," you wouldn't add an `aria-label` on [00:55:00] top of that says "Home." 

**Anthony:** We'll get into ARIA for episode two, when I come back.

**Ben:** There we go. Yeah. ARIA's fun but there's so much you could possibly get wrong with it. I've got some blogposts about that. benmyers.dev. Go check them out.

**Anthony:** Yes, they're fantastic. I've learned a ton about ARIA from those blogposts. 

**Ben:** So that's a thing I noticed, is when you've got repeated elements like this it's usually helpful to include basically some assistive-technology-only versions, basically full descriptors there, that help the links make sense even when they're taken out of context. So that's a thing I noticed. 

Another thing I noticed—I'm gonna go ahead and kill VoiceOver here—is, you've got some images and if I'm looking at a tutorial with images, the first thing I'm going to think of is…

**Anthony:** Alts.

**Ben:** Yeah. So I'm going to go ahead and inspect this and we're going to see… there [00:56:00] is absolutely no alt text on this.

**Anthony:** Ooh, Rob! Dropped the ball!

**Ben:** Come on, Rob! 

Let me show you what the VoiceOver—

**Anthony:** They're all hammers! Would they all just say "Hammer"? [laughs]

**Ben:** Well, I mean, that's probably information that would be supplied from the API, right? Because the API is serving as your content management system. So if you want to build a content management system that powers an accessible frontend, then that means part of your content would probably also be the alt text. That should be a field in your API side.

**Anthony:** Okay.

**Ben:** So here's the VoiceOver experience when I navigate to an image without alt text. 

**Anthony:** By the way are we stopping at 11? 'Cause it would probably be good to start wrapping up. 

**Ben:** Yeah, we'll probably start wrapping up pretty shortly, because I have a hard stop on the hour, 

**Anthony:** I wanna make sure I can kind of give a summary of what I've learned and what my next steps are here.

What I kind of see is that the main things you've gone over is some sort of skip to content would be very useful to [00:57:00] have. The docs need to be more clear about how to alter any of the head tags. And we need to make sure to have alt text kind of baked in somewhere in like how the images are coming from the API or something like that. We need get alt text on that. 

**Ben:** That alt is definitely an interesting problem for Redwood, right? Because Redwood is about this whole fullstack thing, right? You could easily use Redwood for a content management system, because it's both backend and it's tied to the frontend, and that means that you have to deal with content management system problems, and therefore you have all of the accessibility concerns with that, too. 

**Anthony:** That's what we originally said at the beginning. Like, you know, we have a lot more problems to worry about when we build the whole thing ourselves. 

**Ben:** Absolutely. Yeah, so I know we didn't get through everything in the tutorial. Y'all, I would super, super appreciate it if you wanted to go through the Redwood tutorials [00:58:00] yourself and maybe look through, just kind of finish the whole thing, see if there's different accessibility, things that you notice. You can tweet at me at @SomeAnticsDev. You can also bug Anthony about that. I know Anthony. I'm going to voluntell him to receive all your complaints. 

**Anthony:** Let me make sure we get… I actually made a forum post for this specifically on Redwood for these types of discussions. So let me make sure you've got that as well. Yeah, 

**Ben:** Yeah, go ahead and stick that in the chat, if you wouldn't mind. That would be be awesome. 

**Anthony:** And David Thyresson actually even opened it up to a much wider meta level of, like, how is Redwood as an organization going to be accessible in terms of our own homepage and all that sort of stuff. So there's a lot of great discussion in there from like the super duper high levels to the very, very nitty-gritty tactical, so that's why I just called it "Making RedwoodJS accessible." It's kind of a hub where we can have these sort of discussions that I would really like to continue to work on, you know, [00:59:00] as we get closer to v1. 

**Ben:** Absolutely. Anthony. I super appreciate having you on. I would love to have you on for a part two, just 'cause I know that there's so much more we could go into.

Y'all, this has been great. Come join us same time next week. Next Tuesday at 12PM CST, we're going to have Todd Libby on. Todd Libby is a part of the World Wide Web Consortium. He's specifically working on the new versions of the W3C Accessibility Guidelines. 

**Anthony:** Dude, good pickup. That's super exciting. I'm really excited to watch that. 

**Ben:** Yeah, he's a super fun guy. Very, very funny. And we're going to be diving into the Web Content Accessibility Guidelines together, and also get kind of a first look  at the new WCAG 3.0 public draft that's coming out. Y'all, I'm super excited. Thank you so much for joining us today, and I'll catch y'all next week. [01:00:00] It's been real, y'all.

**Anthony:** Bye, everyone.