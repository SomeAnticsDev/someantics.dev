---
title: Secrets of Accessible Routing with the RedwoodJS Core Team
thumbnailTitle: Accessible Routing in RedwoodJS
timeOfDay: 12pm
sourceCode: https://github.com/SomeAnticsDev/redwood-route-annoucer-demo
upload: https://www.youtube.com/watch?v=LSuDHfAsBCE
hosts:
  - Ben Myers
  - Dom Saadi
  - Anthony Campolo
tags:
  - Web Accessibility
  - React
  - Frameworks
---

Accessibile routing is a bit of a gotcha in single-page applications. You generally need to use a combination of live region screenreader announcements and focus management to simulate the same feedback users would receive from a hard page load. There's so much opportunity for our tooling to help us get things right.

Join Ben and guests [Dom Saadi](https://twitter.com/desaadi307) and [Anthony Campolo](https://twitter.com/ajcwebdev) from the [RedwoodJS](https://redwoodjs.com) Core Team as they demonstrate how accessible routing works in Redwood, and the trial and error it took to get there.

## Mentioned Links

- [RedwoodJS](https://redwoodjs.com)
- [Accessibility conversations on RedwoodJS forums](https://community.redwoodjs.com/t/making-redwoodjs-accessible/1680)
- ["Inclusively Hidden" by Scott O'Hara](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)
- [Tailwind docs on screenreader support](https://tailwindcss.com/docs/screen-readers)
- [David Luhr's RedwoodJS issue](https://github.com/redwoodjs/redwood/issues/540)
- [Marcy Sutton's user testing for accessible routing](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)
- [Madalyn Parker's client-side routing blogpost](https://www.gatsbyjs.com/blog/2020-02-10-accessible-client-side-routing-improvements/)
- [Madalyn Parker's client-side routing pull request](https://github.com/gatsbyjs/gatsby/pull/26376)
- [Kyle Boss's pull request on Next.js](https://github.com/vercel/next.js/pull/20428)
- [Dom's RedwoodJS pull request for accessible routing](https://github.com/redwoodjs/redwood/pull/1849)

## Transcript

**Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. I'm Ben Myers. Today I'm joined by Dom and Anthony. Hello, friends! 

**Dom:** Hey. Happy to be here. 

**Ben:** Happy to have y'all! Dom and Anthony are both from the RedwoodJS Core Team. Redwood, if you're unfamiliar, is a tech stack, it's a meta-framework for building full-stack applications in React. It's got a lot of really cool stuff going on. And Dom and Anthony are part of the team that makes that happen. I'm going to give you all a chance to kind of introduce yourselves for the audience. Dom, would you go ahead and start for us? 

**Dom:** Yeah, thank you. As Ben said, I'm on the RedwoodJS Core Team. I mostly do documentation and some code fixes here and there, my latest thing being what we're going to talk about today, which I'm excited for. And I also do some freelance work for Everfund, which is one of the first RedwoodJS startups, trying to make donating money easier for charities [00:01:00] because they shouldn't have to be doing web development. They should just do the work that they want, you know, the good stuff they want to see in the world. So thank you. 

**Ben:** Absolutely. And Anthony! Welcome back to the stream, Anthony! 

**Anthony:** Hello everyone. My name is Anthony. I am also on the Redwood team. I'm the core developer advocate and I work for a company called StepZen as well. I was, as Ben said, on previously. I was actually on the very first Some Antics episode. My claim to fame. Was super happy to have got that title. And I'm back here mostly to just help facilitate really this getting Dom on here. I saw the work he was doing with the router, and I really wanted to kind of give a platform where he could talk about the work he's doing. So I think it's really important and cool work. And people who are curious about my background, you can go check out that other episode. So yeah. 

**Ben:** Alright, well, thank you all so much. And while I'm sharing links, go follow [00:02:00] Some Antics, on Twitter. I'm working on putting together, like, a website for the stream that'll have the schedule, but in the meantime, the best way to find out what streams are upcoming and when they're happening is through the Twitter. So please go follow. 

If you're in the chat, we would love to know who y'all are! Feel free to give us a wave, come say hello. I see Matt, he's in the chat. Welcome, Matt. Good to have you. Absolutely. 

So we are going to be working on a Redwood project. In the interest of time, we did scaffold this project out ahead of time. I'm going to put the link to that repo in the chat. But this is, if you were to follow the Redwood documentation and create, like, spin up, scaffold a Redwood application, you would get something a lot like this. The main exception is that Dom has very graciously gone in and added a few [00:03:00] blog posts just so we can have some pages to work with. Dom, would you kind of show us around this codebase a bit? 

**Dom:** Yeah, absolutely. So if you have done Redwood Tutorial 2: Redwood's Revenge, then you'll find this repo to be right at home. There's just a few pages. So, if we're looking at the file system, does that show up for me tabbing around the pages here? So the `HomePage` right here just has the `BlogPostsCell`, so we'll see, like, all of our blog posts as, like, a preview. And then we can, like, click around to see the actual blog posts. So it's just going to be a very simple, like, Redwood Tutorial 101.  

**Anthony:** Yeah, let's hone in on the `BlogPostsCell` real quick. I think that's the one thing that people who aren't familiar with kind of Redwood-isms, this is basically how we're doing [00:04:00] the data fetching. So if you go to that kind of component, it's just a GraphQL query here for our posts, and we're grabbing the ID, title, slug, body, createdAt. And then we have these different states that our data could be in, whether it's like empty or loading or failure. And then we're getting our `Success` there, which is just spitting out the blog post. And then once you go to the `BlogPost` component also, then people can see that. Yeah. So we're pulling in the `BlogPost` component, which there's a decent amount going on here, but if you've ever seen Tailwind, that's the styling, and then we've got our router here, which is linking to the different blog posts. And the router is really kind of what we're here to talk about. I think kind of say that context of what is the problem with routing, how does that relate to accessibility, and how does that relate to single-page apps, I think that could be a good kind of context to set before we start diving too much into the project. 

[00:05:00] **Ben:** Absolutely. So I'm gonna real quickly just kind of spin up this project. If you're following along at home, go check the README. There's just some very thorough steps for how to get set up. So I'm going to start by installing all of the dependencies. "Node is incompatible with this module." I have got an old version of that! That's fun. Let me… 

**Anthony:** You got nvm? 

**Ben:** Yeah. Let me try… `npm install`. 

**Anthony:** You're not gonna be able to `npm install` it. You're going to need Yarn. 

**Ben:** Okay. Then let me bring over my terminal. 'Cause I do have nvm. `nvm use 14`. 

**Dom:** Nice. 

**Ben:** Okay. That should do it. Yeah. And then `yarn`. 

**Anthony:** Killer. 

**Ben:** Alright. 

**Anthony:** Yeah. Just for anyone who didn't understand what just [00:06:00] happened there. We just have to make sure we're in the right version of Node, 'cause we're using Yarn and Yarn workspaces 'cause we're in a monorepo setup, if anyone has ever gone down the monorepo train before. It's actually something that npm just added recently. npm did add workspaces. And it's just so you have your frontend and your backend both be kind of separate projects contained within the one larger project. So that part is kind of a more specific CLI-type tooling.

**Ben:** Alright. After this, we have to do — I'm going to do this back in the VS Code terminal, assuming this works. `yarn rw prisma migrate dev`. Why…? Okay. I think the issue here is actually just VS Code's terminal. So let me… I'll scooch back and forth, I guess. 

**Anthony:** Yeah, [00:07:00] we won't need a ton more commands, so yeah. 

**Ben:** And I think the last one is `prisma db seed`. `yarn rw prisma db seed`.

**Dom:** Yeah, these commands will just get us the blog posts ready to go so we can tap around them on that blog post page. 

**Anthony:** Maybe `rw dev`. `yarn redwood dev`. 

**Ben:** Got it. Thank you, thank you. I super appreciate that. 

**Anthony:** We'll have you, you'll be a Redwood developer before you know it. You'll internalize very, very quickly. It doesn't take long.

**Dom:** Yeah, you'll do it everywhere and be surprised. Why isn't it working? I'm, like, "No Redwood?" 

**Anthony:** *[chuckles]* Then it's just gonna kick open our project on `localhost:8910`. And so it's just kind of a simple blog, as Dom was saying. It kind of takes you where you [00:08:00] would in the tutorial, and we looked at this when I was on. This is kind of, like, the canonical Redwood tutorial blog, which is how most people get introduced to it. So it's what we usually do for demonstrations or if we want to explain something with the framework, or we want to demo something, or like, you know, test something, it's usually the Redwood blog.

**Ben:** Yep. Alright. Dom, do you want to kind of walk us through the problem that we're going to be solving today? 

**Dom:** Yeah, absolutely. So, everything *looks* like it might be fine and working. Like, if we go click on, like, "About" or "Welcome to the blog!," like, it loads and we get to read that whole blog post. And obviously we can see that things are changing, that we've navigated to a new page, but if we actually turn on a screenreader, we won't have any indication that we've navigated anywhere new. Like, we'll basically just hear silence, which is, like, actually super jarring [00:09:00] given the fact that, like, we've done something, like, pretty crazy on the website, which is, like, changed the content, like, in a very strong way. And for us to not give any indication that that happened, we're basically like picking people up and dropping them off somewhere and just letting them fend for themself, which is, like, not okay. 

**Ben:** Absolutely. 

**Dom:** And it's like… 

**Ben:** I'm going to give a quick demo of that, just so that we can see that in action. So, VoiceOver is a little slow to turn on sometimes, but I'm turning on VoiceOver. The command for that is Command-F5 if you're on a Mac. VoiceOver is macOS's built-in screenreader. And there we go. 

**VoiceOver:** VoiceOver on System Preferences, Accessibility, window. Leaving redwood-route-announcer-demo. Google — visited, link, About, list 2 items. 

**Ben:** So I'm focused on the "About" link. I'm going to click "About," [00:10:00] and… Maybe it's Enter. There we go. So I click Enter and the page changes, but there was absolutely no feedback. The screenreader didn't do anything about it, right? So the user, like, thinks they clicked the link — they totally did — but they're just kind of, like, waiting for that input, right? "Did things change? Do I need to click it again? What do I need to do?" That's a problem, right? Like, that's not an anticipated experience. 

**Dom:** Yeah. We're leaving them, like, they would have to tab around, they'd have to read the whole page out loud, basically, just to know if something changed. Like, that's just so much overhead and, like, we should be doing something about this because you know, regular, not-single-page apps, this behavior is handled. So while we think we might be moving forward with SPAs, like, we've actually left something behind that we'd get natively. And so in a sense, we're moving backwards if we don't handle this kind of behavior. 

**Anthony:** Yeah, I think it's important just to drill in a little bit [00:11:00] on why this is happening. If you haven't really gotten super deep into like what a single-page application is, it's just a bundle of JavaScript that is handling your whole project. So when we're switching pages, we're actually executing JavaScript that is telling the browser to go to these different pages, unlike in the past, where every link would send a request to the server and serve up a new page every time. So, as you were saying in the past, because we had the server serving up a new page every time, that would give the information the screenreader needs to know that it's navigated. But because we're in this whole single-page, JavaScript world, we can't just assume that is the behavior because it's all happening in this kind of JavaScript black box, and we need to figure out how to tell the screenreaders that we have navigated.

**Ben:** Very well explained. I do want to give a demo. Dom called out that, like, hey, in [00:12:00] static pages, good ol' HTML pages, the experience works as anticipated. I'm going to, let me turn off VoiceOver real quick. 

**VoiceOver:** VoiceOver off. 

**Ben:** I'm going to go to what I believe should be a static site, and that would be the WebAIM site here. And if I turn VoiceOver back on and click one of the links in here, we'll get some feedback. So you'll be able to see, like, this is the native experience that browsers give us 

**VoiceOver:** VoiceOver on System Preferences, Accessibility. Chrome. Visited, link, image, WebAIM. Visited, link, Services, list 5 items. 
WebAIM: Collaborating with WebAIM, web content. 

**Ben:** So as we navigated to this page, it announced "WebAIM: Collaborating with WebAIM,", right? So we clicked the link, we opened up a new page, and immediately we got feedback about it. We were told the name of this new page. This is the experience that we get out of the box for free when we're using [00:13:00] browser links. Because single-page applications don't really do a hard page load, because it instead substitutes the contents of the HTML page, the screenreader has no such input and it can't announce that to users. 

So that's what we're going to address today. We're going to talk about how Redwood and many other tools, many other, like, frameworks around React are enabling us to solve this problem. So let's go ahead and get started. 

So if I were a developer — Let me turn off VoiceOver. 

**VoiceOver:** VoiceOver off.

**Ben:** If I were a Redwood developer and I wanted to address this, I wanted it to where, when I click "About," like, it announces something for the user, like what would I have to do for that? 

**Dom:** Yeah. It's a tough problem. And as a developer, like, one of the things Redwood wants to take care of is all this stuff so that you can focus on your app logic. And this definitely feels like, "Oh [00:14:00] man, like, I have to do this myself?" And so yeah, what would you do? And I would start by generating a component. So, um, I would run one of our generators here — `yarn redwood generate component`, and let's call it `RouteAnnouncer`, because that's the behavior we want is, on page change, it should go ahead and announce the new location. 

**Ben:** I think we're going to have to do this off in my own other terminal, but let me just copy-paste. 

**Dom:** Oh, yeah, no worries. 

**Ben:** Okay. So I'm going to… `yarn redwood generate component routeAnnouncer`. Okay. 

**Dom:** Yeah. That's going to give us a new component called `RouteAnnouncer` in `components/`, so I'll go ahead and navigate there.  Should be… Oh, awesome. Thank you. Okay, so I'm going to do some comments down here so we can think about this. 

Basically, when the URL changes, we want to say something, at the very least. And so, the URL in [00:15:00] a React app is usually called, like, a "location." And the first question is, like, how do we get access to that, access to location? And luckily there's a hook we can import from the Redwood Router package, `@redwoodjs/router`, and it's called, aptly, `useLocation`. So we can go ahead and use this here and get it like that.

So that's great. We have the location now. So that's going to have a property called the pathname, and this is going to be where we are. So it'd be, like, "/about" or "/contact". And this seems like something we want to sync up. And the question is, like, how do we sync data with, like, some kind of effect? And hopefully, like, that word kind of gave it away, which is we need to use the `useEffect` hook, because we want to have something happen when location changes. [00:16:00] So, I know that this location has a property called `pathname`. So I know when that changes, I want to do something here. 

And now I want to, like, announce, right? So, but like, what does that mean, too? Well, we know we're going to have some kind of state, so we can go ahead and use state, too. We'll just call this `announcement` and `setAnnouncement`. And we know in here, we want to set `announcement` somehow with some kind of data. And let's say, like, what do we want to announce? 

And we could say, we want to announce the `location.pathname`, but that's not always, like, super readable. Like, that could sometimes be blog post #13, right? And that's not going to give the user a good indication of, like, blog posts if we're using the ID. Like, I mean that tells them they're somewhere new, but, like, what does 13 [00:17:00] mean? 

It might be better if we look for something like the `<h1>` on the page, and we can do that with the `querySelector`, which we should have access to. And then we'll get this HTML node, ideally, and this should have a property called `textContent`, which is, like, the inside or like, whatever that wraps. So maybe I'll go ahead and do that here like this. `setAnnouncement()`. And then obviously we're assuming that an `<h1>` is going to be on the page, so if it's not there, we're going to have to handle this. So this is already some overhead to think about. 

And now the question is, okay, well, I've found that announcement, the thing that I think would give the user some information, and how do I actually announce it, right? And this is where we need to do some, like, if you didn't know what a live region was, this is where it's gonna come in handy. An ARIA live region [00:18:00] is what the screenreader will look for to, like, announce something, to say something. And we can give it a value of "assertive", which means, "Hey, like, you should say this as soon as you can." Like, it'll interrupt the screenreader. Like, if it's saying, "Hey, you're on a link," and, like, this gets changed, it'll go ahead and, like, stop announcing whatever it was saying and announce this. So this is the property we want because it's, like, super important that the user knows that they've been somewhere new. 

And there's one more property we have to add called `aria-atomic`. When you set that to "true", or we can actually just put it here, which means, "Announce — even if a part of this has changed — announce the whole thing." So that would be useful if we had more to this string, like if we interpolated and said… Oh, I have to do it inside. That's [00:19:00] alright. Like, `Navigated to ${announcement}`. And then it would announce the whole string and not just `announcement` again if we have `aria-atomic` here. If we didn't, it would just say, like, the new announcement. But for now, we'll just leave it at `announcement`. And this might already be enough to get us something. And now the question is, where do we want to put this? 

**Anthony:** Can we actually pause here, real quick, to recap kind of what we've done here to make sure that everyone understands what's going on here? So let's just first define what the useLocation hook is doing, because I think we gotta make sure people understand that that's coming from the Redwood Router, but it's not really doing anything fancy right now. We're just really reaching into the browser's API and using location like you would naturally, right? 

**Dom:** Totally. Yeah, there's no magic at all, like Anthony said. It's, like, you could use, like, a native browser API too. 

**Anthony:** Yeah, so the location is [00:20:00] basically where you are on the page. So when you're clicking around and your location is changing and that's your route in your address bar, correct? 

**Dom:** Yeah. It's the page  you're on. So it won't tell you, like, where focus is, per se, but it will tell you that you're on home or, like, an about page or contact page. Yeah. 

**Anthony:** Yeah. Yeah, so all you're doing is you're just writing out a really hacky way of telling your program what the location is. And you've kind of written this into the application. And we're trying to find a way to actually bake this into the framework so that every Redwood developer doesn't have to do all this hackiness themselves. 

**Dom:** Yeah. Like, there's actually a lot of hackiness I haven't even taken care of yet, which is like, what if there's no `<h1>` on the page? Like, what do we announce then? Do we announce the title? Do I announce the location? 

**Anthony:** And I would be curious, actually. So, Ben, looking at this, is this a solution that you would have thought of, or that you would have seen [00:21:00] implemented in projects that you've worked on that have single-page routing issues, or would you see this problem and would your brain goes somewhere else? Like, how would you approach this and think about this? 

**Ben:** I think there are many different ways you could approach this. And part of the problem is that while there has been research done on this, user testing done on this, and we will absolutely get to that user testing later, like, there's been very little of it, and so a lot of people have just kind of thrown stuff at the wall to see what sticks. Like, for instance, one thing that I would do probably to solve a whole lot of this problem is I would, instead of using a live region, I might automatically focus on the `<h1>`, for instance. And that's doable, but I think whether or not that works kind of depends on your user testing and the needs of your application. So there are many different ways you could approach this and this is one very solid, generally applicable solution, even though this [00:22:00] does seem a bit kind of overwhelming, this kind of high-level, like, "Oh, we're observing the location so that whenever the location changes, we can search for the `<h1>` so that we can use the contents of that `<h1>` to populate a live region so that we can tell the user, 'Hey, you're on a new page. This is that new page.'" This is a very strong solution to this. 

Yeah, so Dom, I believe you were gonna actually plug this `RouteAnnouncer` component in somewhere. 

**Dom:** Yeah, exactly. So we might think, yeah, like, okay, we've done the work, but we're not actually rendering it, so where's the best place to do this? And it's tough because we have to render it everywhere. It has to be everywhere, right? It has to be, like, on the page they navigate to. And in Redwood right now, the best place is probably a layout. So we'll go to the BlogLayout because this will wrap every page on this application. So we'll [00:23:00] import the `RouteAnnouncer` from the component directory. If I can spell properly. There we go. And then I'm going to render it. Let's just render it up here and see what happens. Just like that. And yeah, that should be enough to see something happening at least, and we might realize that we forgot a thing or two once we actually see it on the page here. 

**Ben:** Yep. I'm spinning up `yarn rw dev` and… Oh, it opened up yet another new window. 

**Dom:** Isn't that lovely? You can turn that off, actually. It's, like, one of the first things I do. 

**Ben:** Interesting. You might have to teach me how to do that at some point.

**Dom:** Yeah. It's just a TOML var.

**Anthony:** Sweet Redwood hacks for the people. 

**Dom:** Oh, so there's already a problem, yeah, Ben, you just [00:24:00] highlighted it, is we're kind of repeating ourselves here, right? So one thing we forgot to do was hide it, actually. So we don't really need this to be visible., and I can jump back to the code editor real quick and just add a quick style to the `RouteAnnouncer` to hide it. And since we're using Tailwind, which is amazing, we're going to just add the `.sr-only` utility style, which I actually didn't know they had this till very recently, but it's awesome that they do because you can quickly—

**Anthony:**  What does "SR" stand for? 

**Dom:** Yeah, so "SR" stands for "screenreader." And so we want this to be like, we don't want to hide it — This is tough because, right, in CSS you can, like, hide a lot of things. You can like not render it at all. There was a lot of different ways to do that. And Tailwind provides, like, "I don't want it to be on the page, like, visible, but I still want to be there so that the screenreader can say it." So this utility class will come in [00:25:00] handy a lot. 

**Ben:** If you want to see the contents of that class, I'm willing to bet that Tailwind is implementing something along the lines of this logic right here. Basically the approach is we're not making it invisible, per se, we're just making it really, really small. So this is very likely the Tailwind implementation. I've put the link to this blog post in the chat for you all, but it's such a great utility.

Yeah, so, I think, if you don't mind, I'd like to actually kind of see without the classname and then we can apply the classname and just confirm that everything still works. 

**Dom:** Oh yeah, absolutely.

**Ben:** I think without the classname, that's like a powerful just kind of visualization of what's happening here. So, here we are. Gonna refresh this just in case, you know. Gonna turn VoiceOver on. 

**VoiceOver:** VoiceOver on System Preferences, Accessibility. Leaving Accessibility features. Chrome. [00:26:00] Leaving Redwood— Visited, link, About, list 2 items. About the Redwood Blog. You are currently on a group. 

**Ben:** Okay. So as I clicked the link, our live region up here changed to "About the Redwood Blog," which is the content of the `<h1>` down here, and the screenreader immediately announced it. So that's incredibly cool. Already, like, we've got feedback that, hey, you actually navigated somewhere. I'm sure this works for the other pages, too. 

**VoiceOver:** Redwood Blog. What is the meaning of life? You are currently— 

**Ben:** So that's pretty cool! That's really exciting. And then, you were showing off the `.sr-only` class.

**VoiceOver:** VoiceOver off. 

**Ben:** Let's do that real quick. So, `className="sr-only`. So we're back here. We can't see the live region, but it should still work for us. 

**VoiceOver:** VoiceOver on System Preferences, Accessib— Chrome. About the Redwood Blog. You are currently— Redwood Blog. You are [00:27:00] currently on— A little more about me. 

**Ben:** Yup, so all seems to be working. 
**VoiceOver:** VoiceOver off. 

**Ben:** Is there anything more you would add to this, Dom?

**Dom:** So if you want it to be really, like, if you were going to go live with this, it's definitely not enough. Like, every page should have an `<h1>`. That's, like, a given if you're going to go live. But sometimes it's not always great to announce the `<h1>`, like sometimes for whatever reason, you know — like, you should really keep the audible experience close to the visual experience of your document, you want those to be in sync as much as you can, but sometimes your `<h1>`, like, isn't descriptive enough on its own. So you're going to have to handle the case. Like, this logic in here is going to get a lot more if/else statements. And what's even worse, right, is that this `RouteAnnouncer` — like, what if you have a new layout on a new page? There's just like a lot more overhead that you're going to have to think about. And yeah, this is, like, awesome that this [00:28:00] works, but you as a user all of a sudden has to code for all of these edge cases. And you really can't leave it out, right. 'Cause if you miss a single page, you're going to have that behavior, like, the jarring behavior of, like, "Where am I? Did it work? Did it load? Is it still loading?" It's, like, really hard to tell. 

**Ben:** Yeah! I think that's a really great point, and it also relies on me as, you know, the person implementing a site with Redwood, it relies on me having enough accessibility knowledge to do that, like, testing to realize, "Oh, hey, I need to be announcing the, like, page title," and then also knowing how to do the solution. And it relies on so much knowledge on my end for something that really should be just kind of given out of the box. Yeah. 

[00:29:00] **Dom:** Absolutely. And I didn't even mention prerendering, because, like, we're using a web API here, `document`. And if you're going to prerender, the prerendering is gonna throw an error like, "Um, there's no document here!," so you're going to have to code for that, too. It's just, like, a lot that you're all of a sudden going to have to do. 

**Ben:** So in that case, then, what can Redwood do for us? If we're looking to really leverage Redwood's capabilities here, what would we need to do?

**Dom:** Yeah. So this really does seem like something that could be handled at the framework level, because isn't this, like every Redwood app, like everyone's going to have to implement the `RouteAnnouncer`, and like, the logic isn't going to change from app to app. It's going to be, like, basically the same. Like, we need to announce something descriptive. So like, yeah, wouldn't it be nice if this was handled at the framework, [00:30:00] at the router level? And the good news is like, yes, you're right, and in v28, which is coming out at the end of the week, that's going to be the case. But if you love to live on the bleeding edge, then you can actually just upgrade now and your pages will be announced. There's, like, nothing you have to do, actually. 

**Ben:** Okay! So what do I need to do to make this work? 

**Dom:** Yeah. So you have to run `yarn rw upgrade`, and then you have to put a tag, so `-t`, and `canary`, like the bird, which  all of the latest and greatest Redwood is in the canary.
And then we just have to hope that node_modules just downloads, which it always does, but… 

**Anthony:** Nothing ever goes wrong with Node. Never. 

**Dom:** Never.

**Ben:**  And so after this Friday, or after this week, whenever the canary goes live, [00:31:00] that would probably be a different command, right? It wouldn't be `-t canary`? 

**Dom:** Oh yeah. It would just be `yarn rw upgrade`, with no arguments. Yeah. 

**Anthony:** Yeah. And then if you were to generate a new Redwood application once 28 is out, then you will just get this automatically. And this is what we talk about with being an opinionated framework or being a framework that values convention over configuration. This is what we're talking about. These are the opinions, these are the conventions that you get from using a framework like Redwood, because we have this team of people who are thinking about these higher-level issues and trying to solve them at the framework level for the Redwood developers out there who may or may not, as you say, have this kind of experience. 

You'll see there it said esbuild? That's exciting.

**Ben:** It's going to think about this one for a while. [00:32:00] Chat, if you've got any questions, let us know. Let us know kind of what you're thinking here. 

**Anthony:** Yeah, I'd be curious if anyone in the chat has had to deal with any of these sorts of issues. I would assume, you know, there's other developers who've worked on single-page applications out there. This is something that, going back to when I was first on the show with Ben, how I was saying I was never taught any of this. This was never in any of my bootcamp curriculum. It was not really prioritized. So this is the type of thing that I've kind of had to figure out on my own, and actually being involved in Redwood is what led to me being able to kind of start to think about some of these issues, because we've been talking about the issues with the router for, I think it was back in, like, May I think is when someone opened the first issue about it. So it's been an issue that has been known for the framework, and it has been something that we've wanted to figure out. And so I was always hearing like, okay, the router is not accessible. It was like, what does that [00:33:00] mean? What do you mean the router's not accessible? And so that's kind of what we're trying to draw out here with this, you know, explanation of like, why isn't the router accessible? What does it take to have an accessible router? 

**Ben:** Absolutely. Alright, so, by the way, Rob compliments you on your shirt, Dom. 

**Dom:** *[laughs]* Aw, thank you, Rob. 

**Ben:** We might have to show off the Redwood store at the end of the stream, 'cause Redwood's got some swag! 

Alright. So we have now installed the canary version of Redwood, the stuff that should be going live later this week. What do I need to do now? 

**Dom:** Yeah. So I commented out the `RouteAnnouncer`, just so that, you know, that's totally gone. There's nothing in the layout that should be rendering this. And then all we actually have to do is start the dev server, go click on a link, and just be happy, I guess. [00:34:00] Like, that bit is… 

**Anthony:** Pray? 

**Dom:** Yeah. Pray. Pray for — I'll pray. You guys can be happy when it works, right? 

**Ben:** Fascinating! Now it opened up in a new tab. At some point, I'm going to figure out the nondeterministic approach to opening up new windows and tabs that Redwood is using here. 

**Dom:** Yeah, we can. It's a quick TOML var. Just set it to false and then it won't happen, I promise. 

**Ben:** Alright. So we got the page up. Let me turn VoiceOver on.

**VoiceOver:** VoiceOver on System Preferences. Leaving scroll. Open VoiceOver Training, button. Chrome. Leaving Red— Visited, link, Contact. Contact. Leaving redwood-route-announce— About the Redwood Blog. Chrome has new window. Redwood Blog. What is the meaning of life? Chrome has new window. You are currently on a—

**Ben:** Alright. There we go. Yeah. [00:35:00] So even though we commented out our `RouteAnnouncer`, all of this stuff is already working for us. We're able to announce every route. So what this means then, if I'm understanding correctly, the way to get this working for Redwood apps going forward is just to upgrade. That's the migration path. It's just upgrade Redwood. You don't even need to know what all the updates do. You just have to update. 

**Dom:** Exactly. No codemods. You don't have to change anything about your pages or your layout or your routes. It's just going to happen. 

**Ben:** That's incredible. 

**Anthony:** Whereas with prerender, you had to add the word "prerender" to it. So even you've taken the step of adding a single word down to zero words. 

**Dom:** Zero words, yeah. I had to one-up Danny, you know. I just couldn't let him be that awesome. 

**Ben:** That's awesome, though. Like, what an experience to be able to just update and get accessibility [00:36:00] lifts for free, without needing to know or worry about that.
Welcome, Chan. Good to have ya. 

**VoiceOver:** VoiceOver off. 

**Dom:** Yeah, it was really important to, like, Tom and everyone at Redwood that this be, like, a priority for version 1. Like, we're thinking about, you know, hitting v1 in the next few months, and, like, accessibility is, like, a v1 concern. It's not something, like, that we deal with after we've gotten to v2, because this is, yeah, just needed to be dealt with. Especially at the outset, because it's like so much harder to make these changes to the router after, like, v1, and the router is something that affects every Redwood app. So, it's definitely a nerve-wracking experience to work on it, but it's super important. Like, the changes you make there can have a lot of impact, as we're seeing. So, yeah. 

**Ben:** Alright! So what more can these updates do for us? 

**Dom:** Yeah. So as I mentioned [00:37:00] before, there might be a case where your `<h1>` isn't good enough or, like, just isn't descriptive enough. So let's go to, like, Contact, for example, the Contact page. And it just says "Contact," and that's like, I mean, nothing wrong with it, but say we wanted to say something a little more friendly or welcoming to the screenreader. 

So we can import a component from the RedwoodJS Router called `RouteAnnouncement`. So, just "announcement" instead of "announcer." And then we can just render it, say, like, right down here. `<RouteAnnouncement>`. And then, say we want to say, instead of "Contact," "Get in touch with us." And we don't want this to be on the screen, so we can pass the `visuallyHidden` prop as `true`. And now, instead of announcing this `<h1>`, the [00:38:00] screenreader will announce whatever's inside of this `RouteAnnouncement` React component here. And that's just a feature we added, just because we want to give you an escape hatch, right? We never want to, you know, there's always going to be a case where you have to do something different for some reason. And this `RouteAnnouncement` component is the way that you can still, like, benefit from what Redwood gives you and then for the edge case, you can handle it with this. 

So now if we go navigate to the contact page, we should hear this announcement instead. 

**VoiceOver:** VoiceOver on System Preferences, Accessibility. Chrome. Leaving, web— visited, link, Contact. Get in touch with us. You are currently— 

**Ben:** That's super cool!

**Dom:** Yeah. So, the good thing about that, too, is say you put an announcement in the layout and then on the page, too, like, so there's one in the layout and then the page, the Redwood Router will look for the most specific one, so that you can always override it [00:39:00] if you need to on, like, a more specific page.

**Ben:** That's awesome. That seems really well thought out. Just kind of broadly speaking, what is the chain of precedence? Because you've mentioned the `<h1>`, you've mentioned, like, multiple levels of `RouteAnnouncement`. What's that kind of chain there? 

**Dom:** Yeah. So we'll get into where I got the chain from when we get into the research a little later, but the chain is the `RouteAnnouncement` is first — so if there is a `RouteAnnouncement`, that gets announced — and then the `<h1>`. And then if there's no `<h1>`, it'll be the document title, which is, like, in the `<head>` of the HTML. And then if there's no document title, then it'll be the location, the actual URL. So something will always be announced. It's never just not going to say anything. But yeah, we want to be as specific as we can be, and so that's why we have that order. 

**Ben:** That's awesome. That's really cool! And I love providing the escape [00:40:00] hatch because nine times out of ten, your `<h1>` should be totally fine. Right? But in the case that you need it, yeah, you absolutely shouldn't be, like, fighting with your own tooling. The tooling should give you a way to be like, "No, no, I do know better in this case. And I need you to do this instead." 

**Dom:** Yeah. It's like, otherwise you'd basically have to make that `RouteAnnouncer` component again, and that's not what we want the experience to be like for developers. Yeah. We want, like, accessibility to be easy to write and like, yeah. 

**Ben:** That's super cool. Alright, I would love to kind of talk through your experience building this out and kind of what you learned and the journey that you went on because, you know, I highly doubt all of us will be contributing to the Redwood code at any time — though you totally can — or even building, like, a router itself, right? But I want to talk through your journey of, like, [00:41:00] how did you identify that this was something that needed to be addressed and then how did you identify solutions? 

**Dom:** Yeah, it was quite a journey. So, Tom, like, wanted— 

**VoiceOver:** VoiceOver off. 

**Dom:** — his own router for Redwood. And because he had, like opinions, especially about like all your routes being in one file, which I'm like super grateful for, but he obviously knew all the challenges that came with building your own router, which is stuff like this, like, cause there's, you know, React and routers have a long history at this point. And so we'd be playing a lot of catch up. And accessibility was something that was on his mind and he wanted to get done for v1. 

And the first person who like sounded the alarm was David Luhr, who posted an issue way back in May, like a year ago, this issue here. So there's actually more like, we'll get into what we're going to do next, especially with focus, but like he was telling us exactly what was wrong and to reproduce, it was [00:42:00] literally just, like, "Start any Redwood app, turn on the screenreader, and like, there you go." So he pointed me in the right direction. He, I think, works at Tailwind Labs now. So I think back then, I just thought it was like, "Oh, it's cool that, like, oh, people are noticing this stuff," but he's actually, like, an accessibility expert. So he, you know, he knew what he was talking about, or like, it wasn't just a "I guess I'll post an issue" or anything.

And like he said at the bottom, like, he said this is a critical bug. Like he's not even going to use Redwood because of this. Like, so that's like, I think people shouldn't underestimate, like, the severity of these things, you know? Because it really does exclude, and not only excludes, like, people from navigating to your website, but it excludes, like, developers from using your framework, you know?

But he pointed me to Gatsby as, like, the state of the art or, like, the best practices, and specifically to Marcy Sutton and Madalyn Parker. Their work at [00:43:00] Gatsby is like — I owe them, like everything really in this PR. They shared their research and their implementation with, like, everyone in the tech community and, like, did like an amazing thing for open source just by putting it out there, you know, so that like everyone else… Like, even Next.js just pulled in a `RouteAnnouncer` based on this. So like the work that these two did, like, with the research and the PR is like just hear, hear. 

And Marcy's blog post is, like, really thorough. It's almost like a scientific paper. So I highly recommend, like, reading this since she goes over, like, all the methods she did and has like two takeaways at the bottom. One of the takeaways we've implemented, which is that like the page should be announced. 

And then the other takeaway is that a small interactive element should be [00:44:00] focused, and she recommended that that element be a skip link. So, skip links are just as important as, like, announcing the route. Especially if you're talking about like making a production website, that's like, you have to provide. And I guess a skip link is something that lets you skip the navigation, usually at the top of the page, because it gets like really tedious if you're going to constantly have to tab through the navigation. That's something we'll be adding to Redwood, like, before v1, for sure. Just like after we do a few more router changes because managing focus in React is hard, to say it succinctly. 

**Ben:** I think in the chat we have my coworker Isabelle, and she and I can commiserate on focus is hard. React is not well suited to solving problems with focus. That's my hot take right there. 

**Dom:** That's exactly [00:45:00] right. But yeah, it was these — Sorry, there's one more person I should give thanks to, which is Kyle Boss who did the Next.js PR. I followed his implementation a little more closely because the router had more similarities, I think.  And I actually have to follow his implementation even closer because he uses a React portal. And at first I didn't understand, like, why, because I was like, "If I don't have to use a portal, I'm not going to, 'cause I've never even — you know, I've heard about them, but that sounds really hard." But I realized it's for, like, decoupling, I think, the `RouteAnnouncer` a little bit. That's more of, like, a concern for the framework is, like, how do we test things? And we don't want to have things too coupled, and a portal will let us, like, kind of test the router on its own and the `RouteAnnouncer` on its own. 

But really, like, I owe it all to, like, these four people who, like, really paved the way for not only, like, just, you [00:46:00] know, making the whole web more accessible, but just doing it in such a concrete way.

**Ben:** Absolutely. And sharing what they learned with people. Like, Gatsby could have totally held on to this secret knowledge of "We have figured out accessible routing," right? 

**Dom:** Yeah. 

**Ben:** And they didn't. Like, they shared it so that anyone who builds anything for single-page applications can learn with it and add on to it and do testing of their own. And I think that's really cool. 

**Anthony:** Do you think if you were coming at this problem totally from first principle now that you've kind of seen a bunch of different solutions, do you think there's any way that kind of future implementations would be able to improve on what we've got now? Or do you think that this could be kind of considered a solved problem? What do you think about that? 

**Dom:** I think there's a lot more to do in terms of, like, linting rules and things like that for making sure that your announcements are actually good, right? Because we are… Like, this is announcing [00:47:00] something. Is that something good? Like, descriptive? So we can add a lot more like tooling for sure.

The implementation, I think is, maybe it could handle… Like, one thing Redwood could do better is, like, when we get — and this is, you know, we're just such a young framework — like, when we start getting more, like, static prerendering, I think that'll help a lot for, like, accessibility just in general, because, like, static webpages are way better than, you know — especially if you have cells and data's loading and things, you, like, never want to put your `<h1>` in, like, something that might not load. That's, like, not good. 

**Anthony:** And is your eslint PR that you have open, is that related to the linting that you're talking about? 

**Dom:** That's just, like, linting for more general accessibility concerns, like not having an alt attribute on an `<img>` tag, because right now that would go unnoticed. And that will add those rules.

But I think in [00:48:00] Madalyn Parker's PR, the a11y-helpers, she goes over a lot of, like, next steps, and one of those is, like, adding that a `RouteAnnouncement` component should do more error checking, basically. Like the length of its children would be a good thing to check. Like you could think how a good commit messages is linted for, like, "Hey, like, you passed 10 words. Like, you should really rewrite that." We could do the exact same thing here, and even like fail CI, right, like if you really wanted to if those things don't pass. 

**Anthony:** Matt will be happy to hear that. He always makes sure don't forget to do error handling. 

**Dom:** Yeah. I think focus is probably the next thing on the horizon in terms of, like, the next great challenge for us and, like, the skip link, especially. But we're happy to get this in, for sure, to give people, like, just the things they get for free, like, when they build [00:49:00] on Redwood. 

**Ben:** Absolutely. To clarify the focus horizon for people who might not be familiar with focus management across routing. So, because you're not doing a hard page load, if there's any components that React decides, like, shouldn't unmount or shouldn't update or whatever, then, like, those stay on the page. That means if you're focused on any of them, your focus will remain there, too. For instance, if I go back to our page here, when I click "About," this navbar stays, so my focus I believe should, in most single-page applications at least, remain on the About link. In this case, it looks like it didn't. So it looks like y'all are doing something right there already. Oh, no, there we go. 

**Dom:** Actually, we're, uh, rerendering the layout, which is really bad, so we're actually doing something right by doing something wrong. 

**Ben:** Incredible. On many [00:50:00] single-page applications, if I had clicked About, because the navbar usually wouldn't rerender, the focus would stay there, right? So it's, like, you go to a new page and your focus just kind of sticks where it is. Like, no one expects that. So that's an interesting problem to solve. It's interesting to solve that from a framework level, because you have to find not really a one-size-fits-all approach, but a one-size-fits-most approach. That's really hard to do, depending on the variety of applications out there.

**Dom:** Yeah. It's a much greater challenge than the, the announcement. Like, no one's going to argue with, like, you know, something should definitely be announced, but I can see where like, focus, we might get more pushback on certain, like, "Hey, what about this implementation?" And then it'll be tough to find something, yeah, that works like you said, but like definitely something that the framework should help you with. It shouldn't be up [00:51:00] to you. Like, we should help you out. 

**Ben:** Awesome! Well, cool! Do you have anything else you want to add to the demo or anything you wanted to talk about, Dom and Anthony?

**Dom:** We'll have documentation for all this, too. And also just like where you can learn about accessibility, too, because it's, like, a much broader topic than what we've done here. Like, if you're making any React modal or anything like that, we want you to have, like, what you need, so we'll provide like more resources just to learn about it, right, like libraries to use like Reach UI or React Aria. Those are two really good ones. Just know that this is just the beginning, I guess, then. 

**Anthony:** Yeah, we're lucky that Dom is also one of our most prolific doc writers as well. So we're in the process of getting some, a lot of the stuff that we're talking about today, there will be, you know, some really [00:52:00] well fleshed out documentation explaining all of this.

And we had a preview link that I dropped in the React Podcast Discord #accessibility channel that is just kind of, like, what you're working on, but if anyone wants to go check that out and kind of give some notes or help, if anyone finds this stuff interesting. Obviously, you know, Dom is heading this up, but we're always open to contributors. Redwood is, of course, an open source project. We love getting people involved. So if this is exciting to anyone, if anyone else wants to be on the forefront of accessibility research in frameworks, then we would love to have you involved and to get your thoughts and get your opinions on all of this. 

**Ben:** Awesome! Well, thank you. And also, where can we get some good Redwood swag? 

**Dom:** I'm glad you asked, because there's a new shop in town. Just go to shop.redwoodjs.com and you too can look cool on [00:53:00] stream. 

**Ben:** I definitely ordered myself the black-on-black shirt.  That's coming in very soon,  but yeah, some good stuff. Go get yourself some Redwood swag. Y'all have a very classy logo, I think. 

Dom, Anthony, thank you both so much for hopping on. I'm absolutely thrilled that we got to show this off and show the good work that Redwood is putting forward to make Redwood applications more accessible out of the box, and talk a bit about that tooling, how tooling can really give us the lift that we need for free, oftentimes without us even realizing it, right? Like when the magic command is, "Oh, just update your Redwood version," like, that barrier to entry is so low and I think that's very cool. So thank you both for hopping on a chat.

Go ahead and put it on your calendars. We're going to be back this time next week, [00:54:00] 12pm Central Time. Next week, we're bringing on Chris Burns. Chris is going to be showing us the GOV.UK Design System. I've heard great things about this. You can imagine as a government, right, like, building accessibility into your design system is such an important part of the process, because otherwise you legitimately exclude people from being able to participate in civil processes, right? Like, that's a non-trivial thing. So we'll be exploring the GOV.UK Design System together. Again, you can go follow Some Antics on Twitter at @SomeAnticsDev. I'll put that link in the chat as well. 

Go follow Dom. I'll put that in chat as well. And Anthony's alright. You can go follow him if you want. You don't have to. 

**Anthony:** Let's gooooo. 

**Ben:** But you can totally do that. And stick [00:55:00] around for a bit, too, because I am going to find someone to raid! That's something I'm trying to get better at. So, thank you all so much and we will catch you next week. Bye!