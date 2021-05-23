---
title: Building Accessible Tabs in React with Chance the Dev
thumbnailTitle: Accessible Tabs in React
upload: https://www.youtube.com/watch?v=nq2LA9wDt9s
sourceCode: https://github.com/SomeAnticsDev/accessible-tabs
hosts:
  - Ben Myers
  - Chance Strickland
---

There's a lot that goes into building accessible tabs, from 
keyboard navigation to ARIA to focus management. Join us on Some Antics as [Chance Strickland](https://twitter.com/chancethedev) walks us through building accessible tabs of our own in React!

## More From Chance

* [Follow Chance on Twitter](https://twitter.com/chancethedev)
* [Join Chance's workshop](https://reacttraining.com/public-workshops/2021-06-04-pacific)

## Mentioned Links

* [Reach UI](https://reach.tech)
* [ARIA Authoring Practices 1.2 documentation on tabs](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel)
* [Reach UI's `Tabs` documentation](https://reach.tech/tabs/)
* [React docs on forwarding refs](https://reactjs.org/docs/forwarding-refs.html)
* [`@reach/descendants`](https://github.com/reach/reach-ui/tree/develop/packages/descendants)

## Transcript

**Ben:** <i class="timecode">[00:00:00]</i> Howdy, howdy, y'all! It's Tuesday, which means it's Some Antics Day! Today I am joined by Chance Strickland. Chance, hello! 

**Chance:** <i class="timecode">[00:00:09]</i> Hey Ben, how are you? 

**Ben:** <i class="timecode">[00:00:10]</i> Doing alright! I am super excited for this one. I'm super excited for the patterns that we're going to be talking about, and I'm excited to have you on! I've definitely seen you around Twitter for a while now. Would you like to tell us a bit about yourself, who you are?

**Chance:** <i class="timecode">[00:00:28]</i> Sure, yeah. So, hi, I'm Chance. Chance Strickland for the full legal name there. On Twitter, I'm @chancethedev. I feel like that's the more memorable, catchy way to refer to me. So feel free to just call me that if you'd like. And that's how you find me on the internet.

Yeah, I am a React developer. I've been doing that kind of as my main gig for the last several years. Worked in a handful of different projects with different teams. And I'm currently focused on education now, and so I'm working a lot with React Training — Ryan Florence, Michael Jackson, and Brad Westfall, that team. We are available to teach your team how to get better at using React and following all of the latest and greatest in patterns and best practices in Reacting. And yeah, I just really love training folks on how to be better developers and build better UIs.

So, I do a lot of work as well in accessibility, so I'm really a big fan of your show here and your focus on accessibility. I work a lot on an open source library called Reach UI that is all about building really highly accessible, high quality React components with a big focus on that. So, the stuff we're gonna be working on today is inspired a lot by some of our tools in Reach UI, and we'll talk more about that later, I'm sure. But that's a general overview of who I am and the kind of stuff I work on. 

**Ben:** <i class="timecode">[00:02:02]</i> Awesome. So, Reach UI. What makes it different from other component libraries?

**Chance:** <i class="timecode">[00:02:11]</i> Well, there are, no doubt, a lot of component libraries out there, especially for React. So Reach UI, there's a lot of overlap with some libraries and it's very different in a lot of ways from others. We don't do anything as far as, we don't care about the look or feel of your app. We're not trying to build you a design system. We're trying to give you tools, low-level tools to build your design system on top of. So we don't have any opinions as far as what your application looks like, what these components look like. That's up to you.

So what Reach UI is, is a very low-level tool that you can build onto to add your brand, your look and feel, but its focus is on the functionality and the accessibility of those components. With accessibility, it's sort of a mixed bag because there's a lot of stuff that we can do for you by default. But as I'm sure you know, as a lot of folks probably know, the accessibility of your application is largely context-based, so some of the things we can't do, and we try to provide helpful developer  experience-type things to sort of guide folks in how to make things more accessible for things like labelling and that sort of thing. But we do everything that we can. For the things that we can't do, we try and help as best we can through documentation and through developer experience tweaks. But yeah, that's kind of what it is.

There's a lot of other component libraries, like, you know, the Material UIs of the world, that are very opinionated with lots of styles baked in and sort of styling mechanisms baked in. We don't do any of that. We have some, like, base-level CSS that we include if you want to use it, but then everything else is sort of up to you to adopt as you need and make it your own thing.

**Ben:** <i class="timecode">[00:03:56]</i> Very cool. Yeah, so of all the people who could possibly be talking to us about, like, what we're going to be doing today, which is building accessible tab components, like, you've definitely got a lot of experience in that regard, thanks to your work on Reach UI and beyond. 

**Chance:** <i class="timecode">[00:04:13]</i> Yeah, I've been working on all of these types of components for a long time. There's a lot of overlap with tabs and a lot of the other components that we use. And I'm really excited to break into it and talk about it because, you know, people reach for tools like Reach UI — and I don't want to convince you not to. As someone who works on Reach UI, I love that people use it. But I also think that sometimes, a lot of these things, we can overcomplicate them in our minds and it's nice to help people demystify what's actually going on and what's important about these tools. So, that's what I'm really stoked to talk about today and sort of break that down. I think we can do a really killer job here in the next hour or so. 

**Ben:** <i class="timecode">[00:04:52]</i> Yeah! Alright, so let's go ahead and get started. We do have  a bit of starter code here that I'm going to send you all the link to, but I've gone ahead and installed everything, set things up locally. You've already gone in and added stuff to a Create React App project. And if I start it, we will see what we've got to start with. 

**Chance:** <i class="timecode">[00:05:18]</i> I'm just going to go ahead and tell your viewers to watch out for my claps, because— 

**Ben:** <i class="timecode">[00:05:23]</i> Yes!

**Chance:** <i class="timecode">[00:05:23]</i> As we were discussing before, I know this is a live show and all that, but I've been having some issues with my audio. So like, if it just drops out, if I peak my audio it works, so occasionally I'll just clap, and that's what it's for. Or you can, if you're watching and you feel like you said something worth clapping for, maybe you can pretend I'm clapping for you. 

**Ben:** <i class="timecode">[00:05:42]</i> There we go! There we go. And go ahead  and put your clapping emojis in the chat for solidarity, I guess. We need the engagement.

**Chance:** <i class="timecode">[00:05:50]</i> That's right.

**Ben:** <i class="timecode">[00:05:50]</i> We'll take anything we can get.

Okay, yeah! So you built out this project ahead of time. Would you like to talk us through what we're going to be doing today? 

**Chance:** <i class="timecode">[00:06:01]</i> Yeah, so this is what we call a tabs component. It's a very familiar UI for a lot of us, I think. But essentially we've got this phony store that I baked up here where you can, I guess, maybe purchase jokes on the joke store. And if you're logged into the joke store and you want to see which jokes you've purchased, that's what we're looking at here. And we've got this tabs component to show our order history, and we're breaking  these orders down by different types of orders, categories, what have you. Like, you can see all orders, pending orders, or fulfilled orders, depending on which tab is highlighted.

So if you try and click or activate any of the tabs at the moment, they're not going to actually work. So, what we're going to do is A, make them functional; B, build an actual composable set of components that we can use anywhere in our application when we're using tabs; and C, we're going to make it accessible so that you can activate these tabs with your keyboard, screen reader users have context, and all of the things that are going to make this a really accessible component.

**Ben:** <i class="timecode">[00:07:11]</i> That's exciting. I'm so here for this. Okay, so we've got the project running. We've got the code installed. Where would you like us to start, Chance? 

**Chance:** <i class="timecode">[00:07:23]</i> Yeah, so I normally — We tried this whole Live Share thing, too, and it's another thing that I'm having issues. It's just not wanting to work for me. So I'm going to test my ability to just sort of walk you through everything as best I can.

So where we're going to start is if you go into the src directory, you're going to see all of our application files, all of our components and everything, and what we're going to be looking at — You're more than welcome to start at the `<App />` and go down. That's how I get a feel for the app. But what we're looking at is the `<Dashboard />` in particular. So at the `dashboard` path, we are rendering this `<Dashboard />` component. And in the `<Dashboard />` component, we have this `<Orders />` thing.

In the `<Orders />` right now, we have all of the markup that is responsible for rendering these tabs that we see. And if you go through, you'll notice that it's just a bunch of `<div>`s, basically, with containers, with classnames, with styles. And I think this is where a lot of people, when they're building components like this, kind of start and finish. You know, they'll probably add in the functionality — we want functional stuff — but as we're looking at this markup, something that is clear to folks who work on accessibility a lot is that we're missing a lot of context as to what these things actually are and what they do. And this is going to be a problem for our screen reader users, for keyboard users, and lots of other users for that matter. So what we need to do is we need to start working on these tabs to make them accessible, right?

So the way I like to start this exercise and start by building any accessible component is think about the pattern that I'm using and then check to see if WCAG already has a pattern established for us that we can lean on to know what we need to do to make this an accessible component. So the first thing that I'm going to do as a developer is open the WCAG documentation for the ARIA practices page, which I think you might have open already, but might not. I typically look at 1.2 just because ablisthings have tchanged a lot in the past few years, but I think for tabs, it's the same either way if you're looking at 1.1 or 1.2. But yeah, we can take a look. There *is* a tab panel pattern established.

And so, Ben, do you want to — I'm sure a lot of your users know — but you want to explain what we're looking at here?

**Ben:** <i class="timecode">[00:09:36]</i> Yeah, so this is… The World Wide Web Consortium is the organization that puts together all the web standards for HTML and for CSS and for a lot of the, like, accessibility interactions that a website might have. And so some of the specs that they put together are the ARIA specs for using ARIA attributes to curate an accessible experience for assistive technology users, such as people who use screen readers. But there's a lot that goes into ARIA. There's a lot of compatibility stuff and you have to use certain roles and attributes with other roles and attributes. And so you can't just have a page that's just like, "Here's all the roles and here's all the attributes." You have to actually provide some example patterns that you can follow that in theory — and I understand that compatibility isn't always perfect — but in theory, these patterns could get you at least close to good enough most of the time. 

**Chance:** <i class="timecode">[00:10:35]</i> Yeah, I like to think of it as kind of a shim for what's missing in HTML, right? Like, we have a lot of things baked into HTML that we can use to get a lot of functionality for free. A lot of us are always talking about "Use a `<button>` instead of a `<div>`. Use a `<button>` instead of an anchor tag when you want an action instead of a link," right? And the reason for that is because the `<button>` is actually a pretty powerful HTML element. It's got a lot of stuff baked in, right? It's got keyboard actions baked into it, so you don't have to wire those up yourself, which is great.

But HTML doesn't have that sort of low-level primitive element for every type of UI, and where those things are missing, we turn to ARIA as guidance for a lot of the more common UIs that we want to build in the web, which is great. It's a really great resource. And as you mentioned, it's not always perfect, but it's going to get us a long way if we follow it pretty closely and then test for our users, right? And so this is what we're going to be using as our guide.

So, if I'm reading the tabs spec, as we call it. We say "spec," but I don't like the word "spec" for this. It's, like, more of a guidance, right? You still need to test.

**Ben:** <i class="timecode">[00:11:45]</i> It's a recommendation!

**Chance:** <i class="timecode">[00:11:46]</i> Because you still—

<i class="brackets">[claps]</i> Yep, there we go.

You still want to make sure stuff actually works, which requires testing and all of the things that we know and love to do. But we're going to start here.

If we take a look at this, somewhere along the line, it's going to tell us that there's a couple of different ways we could approach activating tabs. There's this automatic activation, and then there's this idea of manual activation. And generally speaking for tabs, unless you're doing some sort of asynchronous data loading where it takes a long time for individual tab content to load and you need to lazy load it or whatever, generally speaking, automatic is the way to go for user experience.

So, what I'm going to do is, instead of using the spec itself, the guidance itself, I'm going to take a look at this example, the "Tabs with Automatic Activation" example, 'cause this is going to have all of the stuff outlined for us, and I just find these examples a lot easier to follow.

**Ben:** <i class="timecode">[00:12:44]</i> Okay.

**Chance:** <i class="timecode">[00:12:44]</i> So it actually gives you a working example of the tabs component. It gives you some example code you can use, but of course we're using React, so the mechanisms for dealing with state and those things are maybe a little different for us. But it's a really good start. So if we take a look, we've got some accessibility features, it talks about things like keyboard support, and then we have a table. This is the table I'm going to start with for this exercise that tells us each breakdown of every single part of our tabs component and the HTML attributes that we need for those components.

So, now that we've got this up, what I'm going to ask you to do is take a look at the Reach UI page you've got pulled up in another tab.

**Ben:** <i class="timecode">[00:13:29]</i> Yeah.

**Chance:** <i class="timecode">[00:13:29]</i> And let's talk a minute about APIs for components. So this is something that we teach a lot with React Training. Selfless—  shameless self-plug, I think is what I'm trying to say. I've got a workshop coming up on this exact topic in a few weeks, so we'll have a link to this I'm sure at some point in the stream, but I just want to mention if you're interested in this kind of stuff at all, this is something that I can teach you in much more depth later on. But what we're going to be talking about is API design for our tabs component. Like what is our—

Oh, there we go. Alright. So what is our interface going to look like for the components that consume our tabs? And what I'm going to base this on is this idea of compound components, where we actually have multiple parts as individual components that we can use. And this API is really nice for a lot of reasons.

There's a lot of folks who want to put all of their data at the top and feed everything down through config props, but React gives us these nice composition patterns through the usage of children that we can use to compose our elements in a variety of different ways, like if we wanted the tab list on top, we could put it on top. If we want it on bottom, we could put it on bottom by just simply moving these components around. And so I really like this way of composing my low-level components. And that's how we're going to do this exercise, is we're going to mirror this API. So this is what I ultimately want my tabs API to look like. Okay.

So if we go back into our code, again, we see we've got all this markup, and it's pretty, pretty close to what we're going to be using in tabs. So what I might do here is go into — if you scroll up to the top, you see I've got some import statements pulling in some stuff from this `./Tabs` file that I've already started for you, and we can go ahead and take a look at that file.

And so what you see here is just kind of a shell for it, 'cause I just wanted to save some time. Just a couple of things to go over here, anytime I'm creating these types of components, these really low-level components, I want to make them as close to, like, if they were a baked-in HTML component as possible, meaning that I want to be able to pass along any props I want, I want to be able to use refs for DOM refs, and that sort of thing. And it's really helpful to also stick to the whole "one DOM node per component" rule for that sort of reason. So if you're rendering one DOM node in a component, that belongs in one component. So it makes it a lot easier to deal with passing props around to these different parts. Does that make sense? 

**Ben:** <i class="timecode">[00:16:10]</i> Yeah, I believe so, yeah. I like that modularity there, but yes. 

**Chance:** <i class="timecode">[00:16:15]</i> Yeah, so we use the React forwardRef API, which if you're not familiar with this, that lets us take refs that's passed into that component and forward it to a very specific DOM node so that we can use DOM refs, if we need them for things like focus management, or measurement, or anything else you might need DOM refs for. We want to forward the ref from the parent component on down to the underlying DOM node that we render. React doesn't do that for you by default. So it's not passed as a regular prop. You have to forward that ref down so that it knows which node to attach to.

So that's what we're looking at here for the most part, and it's pretty much just a shell with a lot of the things that we're going to need already wired up. So we have all of the—

<i class="brackets">[claps]</i> Alright, this sound thing is fun.

We've got all the parts that we need sort of created here for us. So what we want to do now is we want to go back to our ARIA guidelines and start looking at the different attributes that we need for all of the parts. So I might go into, if you look at the tab list… So the tab list is… we've got a `TabList` component, so I want to go ahead and start by adding a role to my `TabList` component to match what the spec tells us, which is just `role` of `"tablist"`.

**Ben:** <i class="timecode">[00:17:38]</i> And there we go. Alright. `TabList` is up here. Okay, so I would go to… Seems like you're saying `role="tablist"`. Like that? 

**Chance:** <i class="timecode">[00:17:51]</i> That's the one, yep. Just like that. Yep, and then I would go and take a look. The next thing we need to do to our `TabList`, I believe, if you go back to the… we had this `aria-label`, right? Now, `aria-label`, we don't really know what that's going to be, right? 'Cause that's context-related. We need the context of the application for that. So we actually don't necessarily want to pre-assign an `aria-label` to our tabs. We just want to pass it along, right? We want to accept it from the parent component and just forward it along. So if we go back to the code, we're just making sure that we're forwarding all of our props down, and we are. We're spreading all of our props in there, which is great. 

**Ben:** <i class="timecode">[00:18:26]</i> Okay, so the idea is whoever is using the `TabList` component would provide, as one of the props, `aria-label`, and that would just get magically forwarded on. Okay. 

**Chance:** <i class="timecode">[00:18:36]</i> Exactly, we're just passing it along. So that's pretty much done, and I think we're good to move on from that particular component for now. Let me get— I'm trying to pull my reference up separately since my Live Share is not working out. 

**Ben:** <i class="timecode">[00:18:50]</i> Yeah. So, is there… 'Cause it seems like the `aria-label` is one of those, like, best practices to have for a tab list like this. Is there a way you would recommend building this API to encourage `TabList` consumers to provide `aria-label`?

**Chance:** <i class="timecode">[00:19:07]</i> Absolutely. Yeah. So there's a couple ways. First of all, if you're using TypeScript, you could just make it a required prop potentially. I would probably not do that for a couple of reasons. One, an accessible label can be inferred a number of different ways. So we have `aria-label` or we have `aria-labelledby`.

**Ben:** <i class="timecode">[00:19:24]</i> Ah.

**Chance:** <i class="timecode">[00:19:24]</i> Either of those are valid, right? So maybe a better approach to me for this particular case would be to create, like, a `useEffect` or something that checks these props on every render to make sure that we have one or the other. And then, like, I think in Reach what we do — don't quote me on this, I'd have to check — I think what we might do is we actually do a `querySelector` to make sure if you have `aria-labelledby` that it actually can find the right label, right?

**Ben:** <i class="timecode">[00:19:51]</i> Ohh.

**Chance:** <i class="timecode">[00:19:51]</i> So there's a couple of different ways you could approach that. But I would generally handle it by, A, checking the environment to make sure that we're only, like, tossing warnings and stuff out on dev, and then have just some sort of effect that checks to make sure that we've always got an accessible label there.

**Ben:** <i class="timecode">[00:20:10]</i> Interesting, okay. Very cool. 

**Chance:** <i class="timecode">[00:20:15]</i> Yeah, so I think for `TabList…` So the next thing that we need to do for `TabList` — We'll come back to this actually in a little. Let's just go ahead and walk through this table real quick. So the next thing we'll look at is our tab. Our `Tab` component's gonna have several potential things that we need to do to it. So we need this, first of all, the `role`, the `role` of `"tab"`, right? 

**Ben:** <i class="timecode">[00:20:36]</i> Yep. Alright! 

**Chance:** <i class="timecode">[00:20:38]</i> Yeah, so add a `role` of `"tab"`. And another thing we noticed is the tab actually is recommended that we use a button for this. So I might… Something that you'll notice here is that I use this `as` prop. So if you take a look at the props that I've already set up for all of the elements, and I'm doing this `as` thing? I like doing this too for a low-level components, and we do this for Reach UI as well, so that you can actually render whatever element you would like under the hood. And even though we have recommended elements — we have things that are better if you use these elements — there are going to be times and contexts in which that might not be appropriate. Maybe for the overall `Tabs` component, you actually want it to be a `<section>`. Maybe for individual tabs, maybe there actually are some nested interactive things going on and it needs to be a `<div>`. So there are times when you need to bail out of the default and do your own thing, which will require some additional work for accessibility in that case.

But for this example, we can keep it simple and just set that default value from `"div"` to `"button"`. And then when we actually returned and render that tab, it'll just render the element. So now, whatever the `Element` or the `as` prop is set to will be rendered by default. We have a `<button>`, so it's great. It's going to save us a lot of work here.

And let's go check that table again, see what's next.

Alright, so we have a couple of ARIA things: `aria-selected`, just `"true"` or `"false"`; and then `tabindex` of `"-1"`, but it would be `tabindex` of `"0"` for the selected, active tab, if we're working with the active tab; and then we've got some `aria-controls` things.

Alright, so let's go back to our code real quick and let's just knock these out one at a time. So we've got `aria-selected` is our first ARIA prop. Let's go ahead and add that. 

**Ben:** <i class="timecode">[00:22:29]</i> You got it! I'm going to, I think, also break stuff out into multiple lines at this point. 

**Chance:** <i class="timecode">[00:22:37]</i> Do you have Prettier installed?

**Ben:** <i class="timecode">[00:22:39]</i> Yeah.

**Chance:** <i class="timecode">[00:22:41]</i> I lean on Prettier so much. There we go. Beautiful.

**Ben:** <i class="timecode">[00:22:45]</i> Aha!

**Chance:** <i class="timecode">[00:22:46]</i> I can't work without Prettier anymore. I don't know about you, but it's the best. 

**Ben:** <i class="timecode">[00:22:51]</i> Oh, man. Yeah, I keep  forgetting that I have the option to just, like, format in one click. 

**Chance:** <i class="timecode">[00:22:57]</i> Aw, it's amazing.

**Ben:** <i class="timecode">[00:22:58]</i> Yeah.

**Chance:** <i class="timecode">[00:22:59]</i> So one thing that I might do here is I would go ahead and say — we'll come back to this, 'cause we haven't got this far yet — but just create a variable right above the return statement. Just call it `isActive` and set it to false for now. And then `aria-selected` can just be the value `isActive`. And so we'll wire all that up later, but now we at least have a reference to that 'cause we're gonna need it in a couple of places.

So, we've got `isActive` here. We also want to do `tabindex`. That's something that we saw in the table.

**Ben:** <i class="timecode">[00:23:34]</i> Yeah!

**Chance:** <i class="timecode">[00:23:34]</i> So do `tabIndex`. And then if `isActive` is `true`, then our `tabIndex` should be `0`. And if it's not `true`, it should be `-1`. And the reason for this is because the way that keyboard users are going to want to navigate tabs is with the arrow keys. We're going to have to wire all that up separately. But when you're tabbing through your tabs, the tab order that's suggested by the guidelines here is that your tab from outside the tabs component, when you get to the tabs component, is going to hit the active tab, and then you're going to tab to the tab itself so that you can immediately read that content, because that's kind of like the flow, right? You get the section header, which is the tab and the content. And if you want to change tabs, you actually navigate with the arrow keys. 

**Ben:** <i class="timecode">[00:24:19]</i> Yeah. So the way I've always thought of it is it's like you're focusing on the tab list as a group.

**Chance:** <i class="timecode">[00:24:25]</i> Yeah.

**Ben:** <i class="timecode">[00:24:26]</i> And, like, it announces the current tab, but because of that, you don't want, like, every button or every tab to be individually focusable, especially if there's a whole bunch of those tabs.

**Chance:** <i class="timecode">[00:24:39]</i> Exactly. 

**Ben:** <i class="timecode">[00:24:39]</i> So you're just disabling the focus if the tab is inactive. Okay. Very cool. 

**Chance:** <i class="timecode">[00:24:48]</i> Yeah, so, okay, so we've got a `tabIndex` wired up, and we've got, I think `aria-controls` was the other one that I saw. Let's go ahead and take a look at that. So `aria-controls`, it says it has this `IDREF` thing. What is that all about? So that refers to the tab panel element associated with the tab. Alright. So: got a couple of things we have to do now.

We have to have a stable identifier for our tab, so that our button can point to it, right? So we've got potentially multiple tabs. We don't know yet because we're just creating a generic wrapper component. We don't know how many tabs there will be. We don't know which tab we're rendering. We do know that we could also have multiple `Tabs` components on the same page, right? We could have the tabs group here, tabs group there. There could be 20 tabs groups, right? We also know that in HTML, an identifier has to be, you can only have one element of a single ID on a given page at a time, right? So we need all of our tabs to be somewhat uniquely identifiable.

So this is a little tricky. React doesn't give us a lot of guidance here and it's kind of left up to users to implement this on their own. So in Reach UI, we have a hook called useId that helps you generate server-safe unique identifiers. And I don't even know if we render them on the server, now that I'm thinking about it. I don't think we do. There are some other tools out there. Different folks have approached this problem in multiple ways, and eventually I know the React team is going to give us an official hook for this.

**Ben:** <i class="timecode">[00:26:22]</i> I've heard that!

**Chance:** <i class="timecode">[00:26:22]</i> But at the moment— Yeah, I think it's, like, `useOpaqueIdentifier`, I think is the experimental API.

**Ben:** <i class="timecode">[00:26:29]</i> Which is a wild name!

**Chance:** <i class="timecode">[00:26:30]</i> Yeah. Like I get why… Like, if you read the issue that explains it, it does sort of make sense, but it's not intuitive. And I don't know, it might not even stay that way. They may change it again, so who knows? But in the meantime we have to do this ourselves.

So, what I have — Can you hear me?

<i class="brackets">[claps]</i> There we go. Alright.

So what I have wired up is kind of a naïve implementation of a unique identifier generator, but it'll work for these purposes. Not gonna get into the nuts and bolts, but you can look at it if you'd like. But we've already imported it into `Tabs`.

So what we're going to do here is a couple things. First, we need a unique identifier for the root `Tabs` thing itself, right? Because again, we can have multiple `Tabs` components on the page at a time, and we want each one to have its own kind of instance ID. And so what I want, I don't want to rely on users to have to pass this and keep track of unique IDs on a page. That's kind of a pain.

So what I'm going to do, or ask you to do, is in `Tabs`, I want you to set a variable of `tabsId` inside the component. We'll say `tabsId` is equal to, and we'll call `useId`. And actually, backspace. Get rid of `useId` for a minute. We'll actually call, there's a helper function at the bottom called `makeId`, and we'll call that. I'll explain this in a second.

**Ben:** <i class="timecode">[00:27:54]</i> `makeId`. Okay.

**Chance:** <i class="timecode">[00:27:56]</i> Yeah, it's just gonna take a bunch of different parts and string them together.

**Ben:** <i class="timecode">[00:28:00]</i> Interesting.

**Chance:** <i class="timecode">[00:28:01]</i> It's just a, like, small helper function to expedite the process here. We'll call `makeId` and we'll say the first argument is the string of "tabs". And the second argument is just, we'll call `useId`. And so what this is going to do is it's going to create an identifier. It's going to be a "tabs" string, dash, some number that'll be incremented as we render new `Tabs` components. So we've stamped this tabs component with an ID. It's just a number, right? Make sense?

**Ben:** <i class="timecode">[00:28:31]</i> Yes!

**Chance:** <i class="timecode">[00:28:32]</i> So if we call `useId` elsewhere, it's just going to give us a number, but we might want to useId for other types of components, so we want to prepend that "tabs" string to say "This is our `Tabs` instance."

So we've got a `tabsId`. And what I want to do here is I want to pass this `tabsId` through Context.

**Ben:** <i class="timecode">[00:28:46]</i> Okay!

**Chance:** <i class="timecode">[00:28:46]</i> So I would create some Context here at the top, just call it `TabsContext`. And I think a lot of folks use Context to do things like global state, and it's great for global state management in React applications. But it's also really great for implicit state when dealing with these sort of compound components where you're always going to use a `TabList` or a `Tab` inside of a `Tabs` component. Like, it doesn't make sense outside of that context. So, in the tabs context, it makes sense that we reach for Context to pass around data implicitly.

**Ben:** <i class="timecode">[00:29:25]</i> I cannot believe I've never thought of using Context with composition like this! 

**Chance:** <i class="timecode">[00:29:30]</i> Aw, it's great, yeah.

**Ben:** <i class="timecode">[00:29:31]</i> Aw, that's so good.

**Chance:** <i class="timecode">[00:29:33]</i> Yeah. No, I love that. So let's go ahead and wrap our children inside of a Context Provider.

**Ben:** <i class="timecode">[00:29:39]</i> Would you want to wrap this whole thing in there, or just the children? Does it matter? 

**Chance:** <i class="timecode">[00:29:45]</i> Well, technically yes. It doesn't really practically. But when Context changes, it's going to rerender everything underneath it, and we don't necessarily need to rerender that outer component, so we can just pass it to the one right underneath it. But honestly this, in practice, it probably won't make a real difference here.

So we're just going to render our Provider here… and then pop children up in there. And then what we're going to do is we're going to pass a value, and we'll go ahead and just create an object there, and then pass tabsId. 

**Ben:** <i class="timecode">[00:30:19]</i> Alright!

**Chance:** <i class="timecode">[00:30:20]</i> Now we've got some Context wired up. Let's actually go in and use it to do what we were trying to do to begin with. So go back down to our `Tab`, and what I want to do is I want to get context from `useContext`. So this, 

**Ben:** <i class="timecode">[00:30:35]</i> `context`… There's probably a better name for this here.

**Chance:** <i class="timecode">[00:30:42]</i> Nah, it'll work. And so you could also just destructure it if you want, since we know we're going to get an object back.

**Ben:** <i class="timecode">[00:30:47]</i> Yeah.

**Chance:** <i class="timecode">[00:30:48]</i> But if you wanted to handle errors, if for whatever reason there was no Context, we could potentially throw an error there, a more helpful dev error there. But for this exercise, this should be fine. We'll just use it right.

But we've got our tabsId now. So now what we can do is, we need a pointer for `aria-controls` to a tab — or a tab panel, rather. So what I'm going to do is say set another variable. We'll call it `panelId`. And I'm going to call that `makeId` again, which will just be our helper. So it will ensure that we have a consistent format here. Pass your `tabsId`. And then pass a string of "panel". And then pass a variable called `index`, and for now, just set `index` to `0`. We'll come back to the `index` thing. Actually back up. Let me do something a little different here. Let's not worry about the `index`. Let's say `value`.

Our strategy here — So we need some way for our panel and our tab to point to one another. If you look at the API that we're building… so in Reach UI, we don't ask you to pass the value. And that's for convenience, and you really probably don't want to have to pass values all the time. But it's actually more complicated than you think to try and make these associations, since our tabs and our panels are in two separate containers. They don't live in the same container, so we don't have any way to group them naturally. The only way that we group them is by order, right?

**Ben:** <i class="timecode">[00:32:22]</i> Yeah!

**Chance:** <i class="timecode">[00:32:22]</i> So you could group them by checking the index in each associated list, which also is kind of a struggle to do. But what we're going to do to just simplify the process is make you pass a `value` prop to both your `Tab` and your `TabPanel`, and if those `value` props match up, then we'll associate those two. So go ahead and accept the `value` prop from that a props object. Does that make sense, the way I explained that? 

**Ben:** <i class="timecode">[00:32:52]</i> Yeah. Yes. So you're going to have, whoever's using these tab components, they're going to have to pass, for each `Tab`, they're going to have to pass a `value`, and for each `TabPanel`, they're going to have to pass a `value`, and a tab and its panel are linked if they share the same `value`. 

**Chance:** <i class="timecode">[00:33:09]</i> That's right. And we'll try and, like, talk about that a little more if we have time later, but there's some reasons for this decision, even though it's a probably less than stellar DevX for this particular component. It's going to be good enough for now, and it's not too bad, to be honest with you. I don't really mind it. And most of the time when you're rendering these things, you're going to be iterating through a list anyway, so it's probably not that much work.

But yeah, anyway, so we've got this `value` prop now. We're making a panel identifier here. Let's go ahead and say `aria-controls` is equal to that `panelId`. And so while you have all that code, I would basically copy that `panelId` from here, and go ahead and pop that in the panel so we don't forget to identify the panel. 

**Ben:** <i class="timecode">[00:33:57]</i> I dig it!

**Chance:** <i class="timecode">[00:33:59]</i> That's the panels group, so down one more. 

**Ben:** <i class="timecode">[00:34:01]</i> Yes, I guess that makes sense. 

**Chance:** <i class="timecode">[00:34:05]</i> And so we'll need to get that `tabsId`. We'll need to get the `tabsId` from Context there as well, and then also need to get a `value` prop in our panel.

Perfect. So now we, since our `makeId`'s consistent, pure, and all that stuff, we know that that ID is gonna match so we can just pass it along!

**Ben:** <i class="timecode">[00:34:29]</i> Cool! 

**Chance:** <i class="timecode">[00:34:32]</i> And dig this, we're going to need to do this again, because once we get down to the panel, we're going to see the panel needs to have an `aria-labelledby` association with the button, so it's a two-way association.

**Ben:** <i class="timecode">[00:34:43]</i> Oh!

**Chance:** <i class="timecode">[00:34:43]</i> So let's go ahead and create a `buttonId` right below `panelId`, and just change out the string of "panel" to "button".

**Ben:** <i class="timecode">[00:34:50]</i> You got it!

**Chance:** <i class="timecode">[00:34:52]</i> So now we've got IDs that are associated with the unique instance of the tabs based on the unique value that is required for panels and tabs themselves, and then whether or not it's a panel or a button. So it's pretty good chance these are going to be unique, so I feel good about this. So let's go ahead and pass `aria-labelledby` to our panel here. 

**Ben:** <i class="timecode">[00:35:14]</i> And so, if you've never seen `aria-labelledby`, every element needs, especially when they're interactive elements like buttons, needs to have what's called an accessible name. This is how it's identified within assistive technology. This is how it's exposed to assistive technology users. So, like, for buttons, that's typically the contents, the text contents, of that button. So if you want the name of one element to be populated by the contents of another element, like some visible label that you can see on screen, you can use `aria-labelledby`. So this is taking the ID of our button. It's going to find whatever the text contents of this element, whatever those text contents are, and that's going to become the name of this panel. So when the user navigates to the panel, they'll hear that this is, you know, Jokes or whatever other panels that we got.

**Chance:** <i class="timecode">[00:36:14]</i> Yeah, that's right. And this is really important for our panel because our panel is going to be basically like a region. So we have the… The users are going to be able to tab to that panel so that we can read the content from it, and it needs to point back to that button which serves as the label. So that's where the association works for panels specifically.

That's a good explanation, by the way, of the accessible label. I like that. We also could pass an explicit `aria-label`, which would override `aria-labelledby` if we wanted to, if we wanted to change that association for whatever reason. 

**Ben:** <i class="timecode">[00:36:43]</i> Okay, so for instance, maybe the panel's got a full name, right, a long name, but the tab itself is, like, a shortened version of the name. 

**Chance:** <i class="timecode">[00:36:51]</i> Yeah, exactly. So, in our case, actually I think I'm doing something for that, but I'm using a `VisuallyHidden` component instead, but you could, instead of the `VisuallyHidden` component trick, you could also just pass your own `aria-label`, which would override `aria-labelledby`. There's a whole algorithm for calculating the accessible name that we'll probably won't get into. But you know, if you have multiple clashes, the browser has a way to figure out what's the right one.

So yeah, I think this is good, but we need to also, let's copy that `buttonId` and actually assign it to our button as well. Let's not forget that.

**Ben:** <i class="timecode">[00:37:25]</i> Makes sense.

**Chance:** <i class="timecode">[00:37:29]</i> Alright. I think someone's mowing the lawn outside, so if it got noisy all of a sudden, I apologize.

So we've got our `buttonId` here on our button. Feel pretty good about that. And let's go back and take a look at that ARIA table again and see what's next. So we've got a tab panel. We did `aria-labelledby`. So we needed a `tabindex` of `"0"` on the active tab panel. 

**Ben:** <i class="timecode">[00:37:58]</i> Okay. So on the active tab panel. 

**Chance:** <i class="timecode">[00:38:01]</i> Yeah, so, yes, and we'll check to see if it's active, too. So let's go ahead and, same thing we did above, we'll say `isActive` and we'll just make it a `false` for now. And then yeah. So then our `tabIndex` is going to be `"0"` if `isActive` is true. Otherwise…

**Ben:** <i class="timecode">[00:38:30]</i> `"0"`…

**Chance:** <i class="timecode">[00:38:32]</i> `"-1"` I think is fine.

**Ben:** <i class="timecode">[00:38:34]</i> Yup.

**Chance:** <i class="timecode">[00:38:35]</i> Or even `undefined` is probably fine because it doesn't have any ability to tab by default. So, yep, okay. So let's go ahead and change that `<div>` actually to our `Element` thing. It'll render a `<div>` by default. Might be good to go ahead and do that for everything everywhere we didn't already do that. 

**Ben:** <i class="timecode">[00:38:54]</i> Yeah. For some reason the Format Document isn't, like, picking up the, like, multiple props. Whatever. 

**Chance:** <i class="timecode">[00:39:03]</i> Yeah, so I think it  depends on your overall line length setting in Prettier, so until it gets to a certain length, it doesn't want to do that. 

**Ben:** <i class="timecode">[00:39:09]</i> Let me find… Use `Element` here… `Element`'s being used there. Use `Element` there. Also `Element`. That's all of them. Cool! 

**Chance:** <i class="timecode">[00:39:35]</i> That feels pretty good!

**Ben:** <i class="timecode">[00:39:36]</i> Yeah!

**Chance:** <i class="timecode">[00:39:36]</i> Cool. So, back to our tab. We have one more thing on our TabPanel, is we want to use a `hidden` attribute to hide our tab panel if it's not active. So, it's going to have the opposite logic of tabIndex. So go ahead and add a `hidden` prop. And I would say "if not active" — exactly like that — go ahead and set to true. Otherwise just set it to `undefined`.

**Ben:** <i class="timecode">[00:40:01]</i> Oh, okay. Gotcha.

**Chance:** <i class="timecode">[00:40:05]</i> That way it just goes away altogether, because I think most override stylesheets just look to see if the `hidden` attribute is there at all, and if it is there at all, sometimes it'll hide, so we just want to exclude it.

**Ben:** <i class="timecode">[00:40:16]</i> Cool.

**Chance:** <i class="timecode">[00:40:17]</i> Okay, cool. So I feel pretty good about our tab panel. Let's go back to our spec. Our guidelines, if you will. And I think I feel pretty good about all that stuff. So let's go back up, and the next thing we need to do is we need to look at this keyboard support. 

**Ben:** <i class="timecode">[00:40:34]</i> Actually, before we do that, do you mind if we just verify in the live project that, like, all of our attributes are coming across and everything?

**Chance:** <i class="timecode">[00:40:42]</i> Yeah, absolutely. So we're not actually rendering anything right now, so this might actually be a good time to render some stuff.

**Ben:** <i class="timecode">[00:40:46]</i> Oh, yeah! Let's do that!

**Chance:** <i class="timecode">[00:40:47]</i> So, before we do, because this is going to break the way some stuff looks, let's talk about composition a little bit, because we've talked about it already in the context of our components themselves. But we also have to, if we're building these low-level library kind of things like these tabs that we might use in different contexts, we also might want to pass, if we're styling them for example — I'm just using Sass for styling here. So we might want to override some styles, pass our own custom styles, but we still need to bring in the styles that are baked in, right? Because the baked-in styles are also going to be somewhat important for accessibility.

So what I've done here is I've got these internal `className` variables in every component, just to match up with what I've put in our stylesheets. But we want to also accept classnames from external consumers of this component. So what I'm going to do is pass a `className` prop to each of my components. 

**Ben:** <i class="timecode">[00:41:39]</i> Okay. So… we've got a `className` here… 

**Chance:** <i class="timecode">[00:41:43]</i> You can do, go back to the top and we'll just do this once and copy-paste everywhere, 'cause it's going to be exactly the same for every component.

**Ben:** <i class="timecode">[00:41:50]</i> Cool.

**Chance:** <i class="timecode">[00:41:51]</i> So in your `Element`, where you're rendering your `Element`, just pass the `className`. And I'm importing this utility from a library called `clsx` that's just called, I've called it `composeClassNames`. And this is going to just take multiple classnames and compose them together so that what we ultimately render is going to be a composed version of our internal classname and whatever comes from our prop. Exactly like that. And we can copy this down all the way down. You may be familiar with this library or another library called `classnames` that does exactly the same thing. I think this was just slightly faster, and it has TypeScript built in, which is nice. So we'll just go ahead and make sure we implement that everywhere. So now we are composing our  internal classnames. This will at least make sure that our tabs still look the same when we start rendering them.

**Ben:** <i class="timecode">[00:42:40]</i> Cool. 

**Chance:** <i class="timecode">[00:42:41]</i> Cool. Alright, so now if we go back to our `Dashboard`, we can replace a lot of our markup with what we have created here. So at the top where we see `className` of `"Tabs"`, just wipe out all of that and render `<Tabs>`.

**Ben:** <i class="timecode">[00:42:56]</i> And… `</Tabs>`.

**Chance:** <i class="timecode">[00:42:59]</i> Yup, and do the same thing for `<TabList>`.

**Ben:** <i class="timecode">[00:43:06]</i> There's gotta be a way to just, like, replace this. At some point, I will learn…

**Chance:** <i class="timecode">[00:43:11]</i> I have a plugin for that, or an extension in VS Code. I don't know what it's called. But without it, I don't think it will work by default.

**Ben:** <i class="timecode">[00:43:18]</i> I will have to look. 

**Chance:** <i class="timecode">[00:43:19]</i> It is a shame.

**Ben:** <i class="timecode">[00:43:20]</i> Yeah. Alright, and these things… 

**Chance:** <i class="timecode">[00:43:22]</i> Each of those will be a `<Tab>`, yup. And you can wipe out all of the… We're still going to lose some rendering here, 'cause we haven't wired our `isActive` thing, but that's okay.

**Ben:** <i class="timecode">[00:43:38]</i> Alright, then this would be our `<TabPanels>`.

**Chance:** <i class="timecode">[00:43:41]</i> `<TabPanels>`.

**Ben:** <i class="timecode">[00:43:56]</i> While I'm doing this, how is the weather over there? It's been dreary here all day. 

**Chance:** <i class="timecode">[00:44:01]</i> Oh, I didn't think to ask. Where are you located?

**Ben:** <i class="timecode">[00:44:02]</i> I'm in the DFW area.

**Chance:** <i class="timecode">[00:44:04]</i> Oh, cool, okay. I'm in San Diego, so I feel guilty 'cause the weather's always kind of nice. At least it's all relative. People here complain about it when it's, like, even remotely gray outside, but I still love it. I've only lived here for, like, two years or so, but it's nice. I dunno, it's like 70° out, I'm assuming.

**Ben:** <i class="timecode">[00:44:23]</i> Alright!

**Chance:** <i class="timecode">[00:44:24]</i> I haven't checked. I barely look at the weather anymore. It's kind of tragic. 

**Ben:** <i class="timecode">[00:44:29]</i> Gotcha. Did you want me to nuke the classnames as well? Because these are the classnames… 

**Chance:** <i class="timecode">[00:44:32]</i> Yeah, we're already passing those down—

**Ben:** <i class="timecode">[00:44:33]</i> Cool.

**Chance:** <i class="timecode">[00:44:34]</i> —so we can knock those out.

**Ben:** <i class="timecode">[00:44:39]</i> We'll do a bunch of stuff here, and I think we can also nuke the `hidden`s right?

**Chance:** <i class="timecode">[00:44:42]</i> Yeah.

**Ben:** <i class="timecode">[00:44:42]</i> 'Cause that's all handled there.

**Chance:** <i class="timecode">[00:44:44]</i> Nuke the `hidden`s. Any of the… I think there's a `data-selected` on one of them we can get rid of.

**Ben:** <i class="timecode">[00:44:47]</i> Yeah, there was one up, yeah.

**Chance:** <i class="timecode">[00:44:51]</i> So yeah, I think we — once you have all, yeah, I think we're good.

**Ben:** <i class="timecode">[00:44:54]</i> Cool!

**Chance:** <i class="timecode">[00:44:54]</i> So, everything else is what's inside the tab panel, so we can keep that as is. And if you save that…

**Ben:** <i class="timecode">[00:45:02]</i> Yep.

**Chance:** <i class="timecode">[00:45:04]</i> …I suspect we'll not see some stuff because we need to wire up what's actually hidden or not. But it's fine, 'cause we can at least check our markup, right? 

**Ben:** <i class="timecode">[00:45:13]</i> Yeah! So we've got the `role "tab"`, we've got our ID, we've got the `aria-controls`, `aria-selected`, all of that fun stuff.

And then if I dive into… I think we… Wait, no, there is no `"tabpanels"` role. 

**Chance:** <i class="timecode">[00:45:30]</i> That's right. So some of these are just presentational wrappers. So our tab panels group is not actually… There's no corresponding thing for us in the spec, but we like it because it helps us with some styling just to have that container there. It's actually the same with our actual top-level wrapper, too, you'll notice. We don't have any sort of role there. 

**Ben:** <i class="timecode">[00:45:50]</i> Gotcha.

**Chance:** <i class="timecode">[00:45:50]</i> We get all of the information we need from the tab list and the individual tabs and individual panels. 

**Ben:** <i class="timecode">[00:45:54]</i> I did notice that we missed the `role="tabpanel"`. 

**Chance:** <i class="timecode">[00:46:00]</i> Oh, good call.

**Ben:** <i class="timecode">[00:46:09]</i> `role` is `"tabpanel"`. And that should get us all the way there. And I'll just refresh, just to make sure. 

`Tabs__panels`… `role` is `"tabpanel"`. Excellent. And if I go investigate the accessibility tree, we can see that, yeah, it's got all the stuff that we would expect it to expose to assistive technology. So it's going point to `#tabs-1-button` for its name. It's going to announce that it's a tab panel. Pretty cool! 

**Chance:** <i class="timecode">[00:46:43]</i> I love that you show that, too. I think a lot of folks miss out on some of the features we have in our devtools these days. It's very nice. 

**Ben:** <i class="timecode">[00:46:50]</i> Yeah! If you've never seen this before, this is the accessibility tree. So your browser does a lot of magic for you behind the scenes. And one of the things of magic it does is it creates effectively an alternate version of your DOM that's specifically in a format that assistive technologies such as screen readers can parse. And so the accessibility tree is… like, that's what that is. But Chrome, I know Firefox, and Safari I believe, also give, like, a dialog that you can actually, like, navigate the tree and see the representation of your page that screen readers actually receive as well, which is very cool. 

**Chance:** <i class="timecode">[00:47:30]</i> Yeah, that's great. And we noticed it's not rendered at all cause we've hidden stuff, right? So we need to fix that probably. 

**Ben:** <i class="timecode">[00:47:36]</i> Yeah!

**Chance:** <i class="timecode">[00:47:36]</i> So yeah, let's go ahead and do that too, so we can actually… So let's figure out this isActive thing. So, back up in the top, I'm going to do a couple of things. I'm going to pass something along to my Context at the top level that we created.

**Ben:** <i class="timecode">[00:47:52]</i> Okay.

**Chance:** <i class="timecode">[00:47:53]</i> I'm going to pass a function— Not to the default value of the Context, but into value itself.

**Ben:** <i class="timecode">[00:47:59]</i> Yes.

**Chance:** <i class="timecode">[00:47:59]</i> So in that object we're passing `tabsId`, go ahead and pass a method here, and call it `isActive`. And let's make it a property, 'cause I actually want to memoize this and send it to `useCallback`, because if we need to use this for whatever reason, I want to make sure— Anytime I'm using or passing functions via Context, I like to `useCallback` to memoize them, because oftentimes you need to use those references in, like, a useEffect somewhere, and you don't want that reference changing.

**Ben:** <i class="timecode">[00:48:28]</i> Yeah!

**Chance:** <i class="timecode">[00:48:28]</i> You don't want to over- or pre-optimize in React too much. But when I'm using Context, I like to try and memoize pretty early for these sort of things, 'cause I almost always need to.

So let me go ahead and wrap that function in `React.useCallback()`. And go ahead and start with an empty dependency array for that. Perfect. And now in the implementation here, I want this to accept a `value`, this callback to accept a `value`. So what we're gonna do is we're just going to have a method for each of our tabs and tab panels to check to see if it's active, right?

**Ben:** <i class="timecode">[00:49:05]</i> Okay!

**Chance:** <i class="timecode">[00:49:06]</i> And so go ahead and return `value === activeValue`. Now we're going to create this `activeValue` thing next. So what I want to do here is I want to create some state now in the top of my tree with `useState`. And we'll go ahead and the first value of `useState` will be our `activeValue`. And then we'll get a setter, `setActiveValue`. And we'll say the default value of this is going to come from a `defaultValue` prop. So let's say the default value can potentially be passed as prop. And then the default state will be `defaultValue`, and if none is set, we'll just default to `null`. Just nullify.

Alright, so now we have an `activeValue` potentially. We're going to initialize it potentially. And now let's also pass `setActiveValue` through Context as well. We can just pass that reference directly. And of course our linter is helping us out here. We need to add that dependency on `activeValue`. There you go.

Cool. So, feeling pretty good. We've got these things through Context. Now we can go in, where we're setting `isActive` to `false` in each of the tabs and tab panel, we can just get that `isActive` method from Context. And we can actually check based on the value that we get from the value prop.

You'll have to… There's a name clash. I didn't think about that. So maybe rename it to `checkIsActive` or something like that. Yeah, whatever you gotta do to… 

**Ben:** <i class="timecode">[00:50:42]</i> Yeah, let's see. 

**Chance:** <i class="timecode">[00:50:43]</i> You could just say `active`.

**Ben:** <i class="timecode">[00:50:45]</i> Yeah.

I understand parentheses! 

**Chance:** <i class="timecode">[00:50:51]</i> <i class="brackets">[laughs]</i> Yeah, there you go. Cool. So, yeah, now just chuck that passed value into `isActive()` now. 

**Ben:** <i class="timecode">[00:50:59]</i> Ah, yes. Yes, 'cause we are passing that. 

**Chance:** <i class="timecode">[00:51:03]</i> Yup, and then do the same in your panel. 

**Ben:** <i class="timecode">[00:51:06]</i> Copy-paste this into panel. 

I understand commas, too, I promise! 

**Chance:** <i class="timecode">[00:51:20]</i> Alright, there we go. Perfect, perfect, perfect. Cool, cool.

Now go back into your `Dashboard` and pass a `defaultValue` at the top level. And we'll need to actually pass values along the way, too. So this is something that you… Like I said, we could build this in a way where you didn't have to explicitly pass this, but it's a lot more involved than you might think. So let's go ahead and say, let's just say "all." We'll say "all," lowercase. And we'll say our first tab is going to have a value of "all." Second will be "pending." Third can be "fulfilled."

And then we can pass the same values to each panel, so now we have a link between our tab and our tab panel.

Alright, alright, alright! There we go.

**Ben:** <i class="timecode">[00:52:19]</i> Boom!

**Chance:** <i class="timecode">[00:52:19]</i> Alright, cool. Now, fingers crossed, let's go back and take a look at our application and see if we are actually rendering anything.

**Ben:** <i class="timecode">[00:52:28]</i> Yes.

**Chance:** <i class="timecode">[00:52:30]</i> Ooh, no, we're not. Oh, there we go! Oh, yeah, perfect! So it's still not operable, but currently we are rendering something. 

So let's do one more thing. Let's go back to our code, and in Tab, let's set up an `onClick` handler. So we want to change the tab on click, so go ahead and create this as a constant, and I'll explain why in a second, but just create `const handleClick`. Or `onClick`, doesn't matter. Well actually, call it `handleClick`. I'll tell you why in a second.

**Ben:** <i class="timecode">[00:53:02]</i> Yep.

**Chance:** <i class="timecode">[00:53:04]</i> And now just set up an event listener, or an event handler rather, just a function. And what we're going to do here is we're just going to say "On click, set active value to this value." And then go ahead and get `setActiveValue` from our Context.

So we're calling `setState` at the top. This is gonna set state at the bottom on click. We don't have to check existing state or anything like that, 'cause it's just a string value, and if React detects the string hasn't changed, it won't rerender anyway, so this is perfectly sufficient. So just now pass a prop.

And so… We talked about composition with our classnames. What if a user also wants to pass their own event—

**Ben:** <i class="timecode">[00:53:52]</i> Oh, okay!

**Chance:** <i class="timecode">[00:53:52]</i> They pass an `onClick` prop, and now their `onClick` is called but ours never gets called, right? How do we deal with that? So in `handleClick`, one thing we could potentially do is we could check the `onClick` prop. If it was passed, then go ahead and call it first. However, what I'm going to ask you to do instead is where you're calling `onClick`, go ahead and pass `handleClick` as the value to a function, and that function is called `composeEventHandlers`. 

**Ben:** <i class="timecode">[00:54:21]</i> Okay. `composeEventHandlers()`… 

**Chance:** <i class="timecode">[00:54:27]</i> Which we'll inspect out here in a second. Now pass — yup. Now before `handleClick`, I want you to pass a value of `onClick` that we'll get from props.

Now, take a look at `composeEventHandlers` real quick. Let's look at the implementation, see what's going on here. So with `composeEventHandlers`, what we're doing is we're taking two functions and what we're returning is a new function. So we're returning a new event handler. And in that event handler, we're going to go ahead and try to call the external, whatever's passed by the user. And if the user calls `event.preventDefault()` — we get that with all of our events, right? — the browser is going to set a value from that, and that property is called `defaultPrevented`. So we can check to see if the user is trying to prevent our default behavior.

**Ben:** <i class="timecode">[00:55:17]</i> Ahh.

**Chance:** <i class="timecode">[00:55:17]</i> And if they have, we never even bother calling our internal event handler, because they've tried to prevent that, right? So we can bake our custom functionality of our tabs into this whole idea of default behavior.

**Ben:** <i class="timecode">[00:55:29]</i> Mm!

**Chance:** <i class="timecode">[00:55:29]</i> Which makes sense, 'cause we're kind of creating our own fake DOM element, right?

**Ben:** <i class="timecode">[00:55:33]</i> Yeah!

**Chance:** <i class="timecode">[00:55:34]</i> So we can wrap all of our event handlers. And this is a really great way to compose event handlers, I think, to check and make sure to give users the opportunity to opt in or out of what we're doing internally, if they need to. So if they try to click a tab that, for whatever reason, is intended to be blocked and we want to show a dialog, right? Instead of activating that tab, we would show a dialog first to tell them something hopefully useful so they can go back and, you know, do something before they're able to actually activate that tab. So yeah, that's what we're doing here under the hood. So we're just composing these event handlers and unifying them into one.

**Ben:** <i class="timecode">[00:56:09]</i> Got it!

**Chance:** <i class="timecode">[00:56:10]</i> So you can go back into `Tabs` now. Now save that and let's go check and see if our clicks work. 

**Ben:** <i class="timecode">[00:56:16]</i> Yeah. I'm just gonna refresh, just in case, and then… Look at that! Oh, I love it. 

**Chance:** <i class="timecode">[00:56:24]</i> Yeahhh! So we have working tabs, at least for mouse users, right? Feels pretty good.

**Ben:** <i class="timecode">[00:56:32]</i> Yeah!

**Chance:** <i class="timecode">[00:56:32]</i> But, but, but… Well, here's the cool thing is if you tab to a tab, you can still activate it with your keyboard, right? You can still tab to it and — well, right now you can't, because we have a tabindex of "0" on inactive tabs, but we'll fix that in a sec. But if you were to somehow land focus on a button and use your space bar or your Enter key, then you'd be able to activate that, 'cause we're using a `<button>`, right? So, free browser  behaviors.

But we still need some work for keyboard users, because you can't actually hit these inactive tabs. And like I mentioned earlier, we wanted to do that with our arrow keys. So let's go back to our Tab component. We want to set up a… Well, actually, this will be easier. Let's set up a `handleFocus` event handler as well. And it can be identical to the `handleClick`, I believe. 'Cause on focus, we want to automatically activate these tabs.

**Ben:** <i class="timecode">[00:57:30]</i> Okay, so can I just do…?

**Chance:** <i class="timecode">[00:57:33]</i> You just copy, yep.

**Ben:** <i class="timecode">[00:57:34]</i> Yeah.

**Chance:** <i class="timecode">[00:57:36]</i> Copy of all of our implementation so far, and just say `onClick` is `onFocus`. First argument of that will be `onFocus`, and we'll get that from props.

**Ben:** <i class="timecode">[00:57:45]</i> Oh, I see. Yes.

**Chance:** <i class="timecode">[00:57:46]</i> Yep.

**Ben:** <i class="timecode">[00:57:51]</i> Alright!

**Chance:** <i class="timecode">[00:57:52]</i> And then our second argument to that will be `handleFocus`, and then we'll just copy of that `handleClick` and make it `handleFocus`. Or you could just say `handleClick`, it doesn't really matter. But we'll just do two separate things, 'cause, you know, maybe down the road we'll want to actually do something different there.

**Ben:** <i class="timecode">[00:58:12]</i> You got it!

**Chance:** <i class="timecode">[00:58:13]</i> Cool. So we've got — Yeah, that works for me. Go ahead and… I see that we're running up against the clock here. I don't want to, like, keep everyone too long, 'cause we still have a little bit of work to do for keyboard users. But let's go ahead and get focus set up first.

So right now, if you focus an inactive tab for whatever reason, you should set the active value. But right now we can't focus the inactive tab with our keyboard, right? So another thing we want to do is… I know on focus, I'm going to set the active tab, but if a tab becomes active because the user is navigating, presumably via keyboard, which we haven't wired up yet, we want to then assign focus to that tab, if we haven't already, which I know is just a lot of ifs and elses in that statement that are inferred, so we'll try and explain this a little bit. But let's go ahead and create an effect with `useEffect`.

**Ben:** <i class="timecode">[00:59:09]</i> Alright!

**Chance:** <i class="timecode">[00:59:18]</i> And right before this, before your effect, I want to go ahead and create a ref and call this ref `mounted`, because I don't want to do what we're about to do on the initial render, because what we're gonna do is focus management, and it's going to be really weird if the user refreshes their browser and doesn't do anything and focus just goes zap right onto a tab, right? We don't want that. So we're going to track to make sure that we don't do anything on the initial render, but check to say `if (!mounted.current)`.

**Ben:** <i class="timecode">[00:59:50]</i> Yeah, I always forget about that `.current`!

**Chance:** <i class="timecode">[00:59:53]</i> No worries. So if this is not set, let's go ahead and set it, `mounted.current = true`. And then early return. And we'll never touch it again. So this way, we know that the first time we run this effect when we initially render, we're not going to bother with it. Right, we're just skipping that render. 

**Ben:** <i class="timecode">[01:00:09]</i> This is the total opposite of autofocus! 

**Chance:** <i class="timecode">[01:00:13]</i> Yeah, kind of, yeah, absolutely. So now what we want to do is, in our dependency array, go ahead and add `isActive`. So if our `isActive` property changes and it's not the initial render, it means that the user's navigating somehow, right? And we wanna respond to that by focusing. So what I want to do here is I want to create another if statement. I don't want to double focus, so if it's already focused, because we've created this handleFocus thing that sets the active property. So say if `isActive` and…

**Ben:** <i class="timecode">[01:00:48]</i> Do we want `active`, not `isActive`? 'Cause we changed the… 

**Chance:** <i class="timecode">[01:00:52]</i> Oh, yeah, you're right, you're right. I forgot.

**Ben:** <i class="timecode">[01:00:54]</i> Yeah!

**Chance:** <i class="timecode">[01:00:54]</i> I forgot. Good call.

So active, and then say "and if `document.activeElement` is not equal to the ref that we're rendering," but hold on. We've got this forwarded ref situation. I talked about `forwardRef`, but we also need a ref internally. Because what if the user doesn't pass a ref, right?

**Ben:** <i class="timecode">[01:01:15]</i> Okay!

**Chance:** <i class="timecode">[01:01:15]</i> They might not pass a ref — they don't always need one — so how do we check this DOM node? Well, we're going to have to create an internal ref. So I'm going to go back up right above where you created `mounted` and create another variable that's also calling `useRef`, and call it `ownRef`. So we're going to create a ref for us to use internally.

**Ben:** <i class="timecode">[01:01:33]</i> Alright.

**Chance:** <i class="timecode">[01:01:34]</i> And now, when you're checking your `activeElement`, check to see if it's not equal to `ownRef.current`.

Now, inside this block, if we're not already focused on this particular DOM node, we want to focus it. So call `ownRef.current`. 

**Ben:** <i class="timecode">[01:01:53]</i> Like I said, always forget that `current`! 

**Chance:** <i class="timecode">[01:01:55]</i> That's okay, it happens. Yeah, so just focus on that. But we haven't actually set `ownRef` to anything. So now we have a problem. We have two refs. What on earth do we do with two refs? How do you have two refs?

**Ben:** <i class="timecode">[01:02:08]</i> Yeah.

**Chance:** <i class="timecode">[01:02:09]</i> If I say it enough, do you think people would just guess? I doubt it. So I'll try and explain it. So what do we do with two refs? Well, how do we deal with this in Reach UI, and how do a lot of libraries deal with this problem? Well, we've composed a lot of other things. Why can't we just compose our refs and try to assign all of these values to the same underlying value? So that's exactly what we're going to do.

Right under this effect, you can define a new variable and call it just `ref`. And call this hook that we've been imported at the top called `useComposedRefs`. Now you can check the implementation if you want, but inside of here, we're just going to pass multiple refs, and what we're going to return is a callback ref. So if you aren't familiar with callback refs, you can return a callback function, instead of a ref value, that can also be assigned to a DOM node. And we can do things as a result of assigning that value to this callback. So we can call back after that ref has been assigned.

And so what we're going to do is we're just going to compose all of these things into a singular callback, and then we're going to try and do this `assignRef` trick, where we try and assign each ref that we've passed. So if it's a forwarded ref, we can pass it the way you would pass a forwarded ref. If it's a ref object internally, we're going to create that. So all of these refs are gonna ultimately point to that same exact value.

**Ben:** <i class="timecode">[01:03:30]</i> Interesting!

**Chance:** <i class="timecode">[01:03:32]</i> So we're just composing these down into a singular callback function, very similar to how we did our event handler!

**Ben:** <i class="timecode">[01:03:40]</i> Alright!

**Chance:** <i class="timecode">[01:03:42]</i> Now we have this, but we actually need to pass our refs. So pass in `ownRef` and pass in `forwardedRef`. So now, we can assign our ref. Oh no, he had it.

**Ben:** <i class="timecode">[01:03:56]</i> Well, I was going to move it up.

**Chance:** <i class="timecode">[01:03:57]</i> Okay, that's fine.

**Ben:** <i class="timecode">[01:03:58]</i> Keep everything collected. 

Okay. So assign `ownRef` to… 

**Chance:** <i class="timecode">[01:04:04]</i> No. Yeah, go down into where we're rendering the Element and we want to assign the Element's ref to that `ref` variable.

**Ben:** <i class="timecode">[01:04:10]</i> Ah. okay.

**Chance:** <i class="timecode">[01:04:11]</i> Instead of forwardedRef.

**Ben:** <i class="timecode">[01:04:13]</i> Very cool. Alright.

**Chance:** <i class="timecode">[01:04:14]</i> So now we have, we're doing both, we're magically composing our refs, right? We're doubling up our efforts. The user can pass a ref and do their own imperative stuff. We can use a ref internally and do our own imperative stuff. Everyone's happy. Even though it is kind of a little wacky. That's how we got to do it until we have something built in to do it better for us.

Alright! So now, what we should be able to do is focus these things and, in response to that focus, set the active value. But of course, we still have some pretty gnarly work ahead of us to set up keyboard navigation. We're almost done, everyone, bear with us. 

So in our `Tab`, we also want a `handleKeyDown` event handler.

**Ben:** <i class="timecode">[01:04:57]</i> Alright.

**Chance:** <i class="timecode">[01:04:58]</i> And we need to respond to a keydown event. Go ahead and set that. We're gonna also compose this the same way we do all the others.

**Ben:** <i class="timecode">[01:05:08]</i> Okay!

**Chance:** <i class="timecode">[01:05:09]</i> So go ahead and take an `onKeyDown` prop from our parent, or from our component. 

**Ben:** <i class="timecode">[01:05:16]</i> I apologize for all of the ordering. I know you had it lovely and alphabetized. 

**Chance:** <i class="timecode">[01:05:21]</i> You missed a capital D in "Down."

**Ben:** <i class="timecode">[01:05:24]</i> Oh, okay. Got it.

**Chance:** <i class="timecode">[01:05:26]</i> There you go. Cool.

**Ben:** <i class="timecode">[01:05:27]</i> Yeah. I'll be consistent, I suppose. 

<i class="brackets">[snarkily]</i> I suppose, if I have to! 

**Chance:** <i class="timecode">[01:05:32]</i> <i class="brackets">[snarkily] I suppose!

[laughs]</i> Yeah, consistency's alright. It's overrated. 

**Ben:** <i class="timecode">[01:05:37]</i> Heh. Consistency is sometimes overrated, but not all the time. 

**Chance:** <i class="timecode">[01:05:44]</i> As in everything in life, it's just nuance. But I'm not a stickler for it.

**Ben:** <i class="timecode">[01:05:51]</i> There we go.

**Chance:** <i class="timecode">[01:05:52]</i> Alright, so we've got some functions. Cool, so let's go ahead and set up a quick switch here, and let's switch on a few things, 'cause we're gonna… I'm not gonna make you go back and reference the chart again, 'cause I know we're running low on time. So let's just knock this out. Let's go and look at…

So when focus is on a tab, we need to respond to keydown events depending on which direction we're trying to navigate. What we're trying to wire up here is navigation.

**Ben:** <i class="timecode">[01:06:16]</i> Mhmm.

**Chance:** <i class="timecode">[01:06:16]</i> 'Cause we can't tab to those inactive panels. We have to get to them by our other keyboard commands. So switch on event.key. And in response to this, we want to do some things. So go ahead and make a case for "ArrowDown," a case for "ArrowUp" — I'm sorry, not "ArrowDown." "ArrowLeft" or "ArrowRight," since these are horizontal tabs.

**Ben:** <i class="timecode">[01:06:35]</i> Camelcase…?

**Chance:** <i class="timecode">[01:06:37]</i> No, capital A.

**Ben:** <i class="timecode">[01:06:40]</i> I gotcha.

**Chance:** <i class="timecode">[01:06:41]</i> Yeah. And then go ahead and set up a case for "ArrowRight" now. There is an ARIA prop or attribute called `aria-orientation` that you could put on the `TabList` component. By default, it assumes that we're rendering horizontal tabs. But in the event that you want to do vertical tabs, you would use `aria-orientation` on the tab list, and then we would also change these to "ArrowUp" and "ArrowDown" to respond to that, so that when a screen reader user hears that announcement it tells them what the visual orientation of our tabs is so that they can adjust their keyboard expectations.

**Ben:** <i class="timecode">[01:07:16]</i> Oh, interesting!

**Chance:** <i class="timecode">[01:07:17]</i> So now your keyboard behavior would always align to the visual representation, and your screen reader users would know that, right? 

**Ben:** <i class="timecode">[01:07:23]</i> I always assumed it would be just more like a radio button implementation, where radios, you can use, like, left or up to go backwards, or you could use down or right to go forwards. It's a thing that they give you that, like, layout option there, the orientation. 

**Chance:** <i class="timecode">[01:07:41]</i> I'm strictly following WCAG on this, where they only tell you to worry about left and right in the guidance, and then they tell you to swap orientations if you have that prop. But I don't necessarily think it would be terrible to just go ahead and add up and down here if you wanted to. But we'll stick to the guidelines for now.

**Ben:** <i class="timecode">[01:08:02]</i> Alright!

**Chance:** <i class="timecode">[01:08:02]</i> Also add a case for "Home" and "End," because we want to be able to navigate quickly to the first or last panel as well.

**Ben:** <i class="timecode">[01:08:08]</i> Ooh, okay! Also, is the first letter capitalized?

**Chance:** <i class="timecode">[01:08:12]</i> Yep.

**Ben:** <i class="timecode">[01:08:13]</i> Cool.

**Chance:** <i class="timecode">[01:08:13]</i> Looks good. And then go ahead and for default, go ahead and just return.

Alright. Let's go back to our table real quick just to make sure I got all these. I think I did. I think that's all we need for tabs. 

There's Delete. Tab's gonna work no matter what, so we don't have to do. Deletes, we're not going to worry about cause we don't have any editable tabs. That's only if tabs are editable and…

**Ben:** <i class="timecode">[01:08:42]</i> Interesting.

**Chance:** <i class="timecode">[01:08:43]</i> …you can remove them. So we're not gonna build that. So we're good for now.

Alright, so let's go back to our code. And what I want to do is on the case of "ArrowLeft," I want to set active value. I don't know what I'm passing in yet, so just go ahead and return after that.

**Ben:** <i class="timecode">[01:09:03]</i> Oh, return after…

**Chance:** <i class="timecode">[01:09:05]</i> Yeah, just return. Don't pass anything yet. Return, and then copy that exact same thing down on each line, 'cause after each case, we are going to set our active value and then return.

But we need to figure out what to pass. So we need to get the index here. I'm not going to go into a long diatribe on finding indexes in child lists in React, because we'd be here all day. But take a look at this — I sent you a link to this documentation for one of our tools in Reach called the descendants hook.

**Ben:** <i class="timecode">[01:09:32]</i> Yeah!

**Chance:** <i class="timecode">[01:09:32]</i> If you go and take a look at that — and you can post the link for that for users — it explains the problem in great detail. Basically the problem is we need to figure out where our tab exists in context of its parent component. And since we're enabling a lot of composition patterns, these compound components, we can't simply have an array of things. We don't know until render time what this item is and where it lives in a list, right? So we've got this tool that we built in Reach to deal with this, and it handles lots and lots of messy edge cases. So I would take a link to this and share it for your viewers here to read this in their own time.

But for now we have a pretty quick and dirty implementation. It's going to skip a lot of the edge cases implemented down below. So, at the top level in Tabs, go ahead and pass another Context Provider. 

**Ben:** <i class="timecode">[01:10:24]</i> In Tabs, okay.

Mhmm.

We're going to have another Context Provider. 

**Chance:** <i class="timecode">[01:10:28]</i> Yep. Go ahead and pass it right after your `TabsContext` Provider. It doesn't really matter.

**Ben:** <i class="timecode">[01:10:37]</i> Alright.

**Chance:** <i class="timecode">[01:10:38]</i> And it's called `DescendantProvider`. We created it down below.

**Ben:** <i class="timecode">[01:10:42]</i> Okay, got it. Cool. 

**Chance:** <i class="timecode">[01:10:43]</i> No, no, just `DescendantProvider`.

**Ben:** <i class="timecode">[01:10:46]</i> `Descendant`… Oh.

**Chance:** <i class="timecode">[01:10:47]</i> Yeah, I've already created the Provider as a separate component, I believe. I think I did. I hope I did.

**Ben:** <i class="timecode">[01:10:53]</i> Let's find out!

**Chance:** <i class="timecode">[01:10:54]</i> Yeah. Is it defined? Yeah, it is! Perfect!

**Ben:** <i class="timecode">[01:10:56]</i> Looks like it is! Cool.

**Chance:** <i class="timecode">[01:10:57]</i> Yeah, I thought I did that for you. So what this is going to do is it's going to start basically keeping count of all of our children, but we have to register our tabs as we create them. So now go down into your Tab component.

**Ben:** <i class="timecode">[01:11:10]</i> Yes.

**Chance:** <i class="timecode">[01:11:11]</i> And we are going to register this tab as a descendant. That way, we have some way to keep track of it. So go ahead and call `useDescendants`.

**Ben:** <i class="timecode">[01:11:24]</i> Yeah.

**Chance:** <i class="timecode">[01:11:24]</i> Yeah, you do want to get a value from this.

**Ben:** <i class="timecode">[01:11:26]</i> Okay!

**Chance:** <i class="timecode">[01:11:26]</i> So go ahead and get a value, and it will be a destructured object. 

**Ben:** <i class="timecode">[01:11:29]</i> Is it "Descendants" plural?

**Chance:** <i class="timecode">[01:11:34]</i> Yep. We always have issues spelling "descendants" internally because the actual English word "descendants" is spelled differently from the punk band Descendents. And I used to be a big fan of the Descendents, the punk band, and so I've never got the spelling right in the actual English word.

So, what we're going to do here is we're going to, from this object, we're going to get a method called `getIndex`. We're gonna get another method called `register` and another method called `keys`. Oh, sorry, and then a method called `deregister` as well.

Alright, now go ahead and call `useEffect`, another `useEffect`. 

**Ben:** <i class="timecode">[01:12:16]</i> Alright.

**Chance:** <i class="timecode">[01:12:17]</i> And what we're gonna do is on render, when we render this tab, we will register it as a descendant, so we have an index in our `keys`. And so in the effect, go ahead and call `register()`. And then pass the value. And then return a cleanup function that is going to `deregister`, so if this thing leaves the tree for whatever reason. And you need to pass a new method, so return…

**Ben:** <i class="timecode">[01:12:47]</i> Oh, right, yes.

**Chance:** <i class="timecode">[01:12:48]</i> …a new function that calls `deregister()`. There you go. Perfect. So on cleanup, when we unmount this component, we get rid of all that. And go ahead and put the value as your dependency.

**Ben:** <i class="timecode">[01:12:59]</i> Is it value that…? Yeah.

**Chance:** <i class="timecode">[01:13:01]</i> Yeah, it's gonna still complain at you, but just leave it for now. We don't need to worry about the others. The others should be stable anyway. I think I stabilized them, but just didn't want to go down a debugging nightmare.

**Ben:** <i class="timecode">[01:13:13]</i> Sure.

**Chance:** <i class="timecode">[01:13:13]</i> Alright, so, cool. So we've registered this as a thing, and now we need to figure out our index. So we're going to do a little bit of math in our `handleKeyDown` thing. So I'm going to `handleKeyDown`, and go in and create a variable called `index`.

I don't think I've ever, like, talked someone through coding quite this much.

**Ben:** <i class="timecode">[01:13:32]</i> Ha! You're doing great!

**Chance:** <i class="timecode">[01:13:33]</i> It's more challenging than you would think. 

You're doing great!

**Ben:** <i class="timecode">[01:13:35]</i> So, like, the goal right now is we have, like, these values that are just, like, the strings, and we're trying to, like, map them back into their index so that we can decide basically go…

**Chance:** <i class="timecode">[01:13:45]</i> "What's next?"

**Ben:** <i class="timecode">[01:13:46]</i> `index - 1`, or `index + 1`. 

**Chance:** <i class="timecode">[01:13:47]</i> Yeah, exactly. Exactly. So where are we now in the context of our list? If I navigate to the right, what's next? If I navigate to the left, what's last? All this song and dance is ultimately to get us to that. And so, call `getIndex()` and pass the `value`. So we're going to get our index from our descendants list here.  

Calculate the last index with a new variable we're gonna call `lastIndex`. And go ahead and call `keys.length - 1`. It's just the last index in that array. And then a new variable  called `nextIndex`. And we're going to call this `clamp()` function. That's just a mathematical thing that clamps between two values. And go ahead and say `index + 1`. Our minimum value will be `0`, because that's the smallest index we can have. And our max value can be a `lastIndex`. There you go, perfect. And then do another for `previousIndex…` and then same thing, `clamp()`, but we're going to just do index - 1.

**Ben:** <i class="timecode">[01:14:50]</i> And `0`, `lastIndex`.

**Chance:** <i class="timecode">[01:14:52]</i> Yep, there you go.

Alright, so now we've got our indexes for each item in our array here. Let's go and on the "ArrowLeft" case, what we're going to do is set the value — Not `previousIndex`, but the value of our `keys` array.

**Ben:** <i class="timecode">[01:15:07]</i> Oh!

**Chance:** <i class="timecode">[01:15:07]</i> So we've got this `keys` thing coming from our `DescendantsContext` as well. So I'd say `keys`, and get the `previousIndex`. There you go.

**Ben:** <i class="timecode">[01:15:15]</i> Got it!

**Chance:** <i class="timecode">[01:15:15]</i> And then for "ArrowLeft," `nextIndex`. For "Home," just index 0. 

**Ben:** <i class="timecode">[01:15:22]</i> And then `keys[lastIndex]`.

**Chance:** <i class="timecode">[01:15:24]</i> There you go.

**Ben:** <i class="timecode">[01:15:25]</i> Cool!

**Chance:** <i class="timecode">[01:15:25]</i> That's the money right there. So now, if all this works, which I'm not even sure if I got to test this at this point, so hopefully, fingers crossed!

**Ben:** <i class="timecode">[01:15:33]</i> Oh, man.

**Chance:** <i class="timecode">[01:15:34]</i> Drum roll! If all this works, when you land focus on your active tab, and you arrow to the right or left, you should be able to navigate your tabs.

**Ben:** <i class="timecode">[01:15:44]</i> Yes!

**Chance:** <i class="timecode">[01:15:45]</i> Oh my <i class="brackets">[claps]</i> gosh! Money!

**Ben:** <i class="timecode">[01:15:46]</i> Woo!

**Chance:** <i class="timecode">[01:15:46]</i> I love it when it works in the first try! 

**Ben:** <i class="timecode">[01:15:48]</i> Oh man, that feels good.

**Chance:** <i class="timecode">[01:15:49]</i> Yeah!

**Ben:** <i class="timecode">[01:15:49]</i> That feels so good.

**Chance:** <i class="timecode">[01:15:50]</i> That's what I'm talking about. Look at that! Keyboard navigation! I love it!

**Ben:** <i class="timecode">[01:15:58]</i> Oh, that's so good. That's so good. I'm going to real quickly turn on VoiceOver so we can get us a bit of screen reader experience with this, too, just 'cause I think that would be a good thing to do before we—

**Chance:** <i class="timecode">[01:16:12]</i> Absolutely.

**Ben:** <i class="timecode">[01:16:12]</i> —before we start spinning down! 

**Chance:** <i class="timecode">[01:16:14]</i> Can we get some, like, explosions in the chat, or some sort of emojis that explain how good it feels when you save some code and it just works on that first try? 'Cause there's nothing better.

**Ben:** <i class="timecode">[01:16:26]</i> Yeah, emotes in the chat, please.

**Chance:** <i class="timecode">[01:16:28]</i> I want the chat to go bonkers with that—

**Ben:** <i class="timecode">[01:16:30]</i> Go haywire.

**Chance:** <i class="timecode">[01:16:31]</i> —for my own ego here.

**Ben:** <i class="timecode">[01:16:34]</i> Alright. 

**Chance:** <i class="timecode">[01:16:34]</i> That never happens. I just, I'm always having problems, so… 

**Ben:** <i class="timecode">[01:16:42]</i> Yeah!

VoiceOver always seems to take — Whenever I'm streaming, VoiceOver is like, "I'm going to wait, like, a minute before starting up."

**Chance:** <i class="timecode">[01:16:49]</i> We'll get there.

**Ben:** <i class="timecode">[01:16:50]</i> Whereas every other time, it's like all too quick to pop up . Come on, Voice— Ooh. Ooh. I froze! 

**Chance:** <i class="timecode">[01:16:59]</i> Come on, VoiceOver, do your thing. Nope! 

**Ben:** <i class="timecode">[01:17:03]</i> My whole machine has frozen. 

**Chance:** <i class="timecode">[01:17:05]</i> Oh, no!

**Ben:** <i class="timecode">[01:17:05]</i> Fantastic! I don't know if you can even still see me moving, but you can still hear me. I can hear you. 

**Chance:** <i class="timecode">[01:17:11]</i> Yeah, I can hear you and see you. 

**Ben:** <i class="timecode">[01:17:13]</i> Amazing! Amazing. I'm not even going to be able to — Ah, there we go. We're alright.

**VoiceOver:** <i class="timecode">[01:17:18]</i> VoiceOver off.

**Ben:** <i class="timecode">[01:17:20]</i> Oh, VoiceOver off just now.

**Chance:** <i class="timecode">[01:17:21]</i> You got it. VoiceOver. <i class="brackets">[mimes explosion]</i>

**Ben:** <i class="timecode">[01:17:23]</i> Alright. VoiceOver… Yes!

**VoiceOver:** <i class="timecode">[01:17:26]</i> VoiceOver on System Preferences.

**Ben:** <i class="timecode">[01:17:27]</i> There we go.

**Chance:** <i class="timecode">[01:17:28]</i> I think one thing we didn't do that you might want to do is pass an `aria-label` to your actual tab list.

**Ben:** <i class="timecode">[01:17:34]</i> Oh, okay!

**Chance:** <i class="timecode">[01:17:35]</i> Because, remember we talked about labeling. So I can't remember if we did that, so it might affect your VoiceOver experience here.

**Ben:** <i class="timecode">[01:17:41]</i> Yeah.

**VoiceOver:** <i class="timecode">[01:17:42]</i> Chrome, React app, Google Chrome. Some Antics, window (1). StoreDashboard — Fulfilled Orders, selected, tab, 3 of 3, main. Pending Orders, selected, tab, 2 of 3. All Orders. Link, Jokes list, 2 items. Chrome has new window.

**Chance:** <i class="timecode">[01:17:55]</i> So if you tab to the right, you know that you're at the last tab, right?

**Ben:** <i class="timecode">[01:17:58]</i> Yeah!

**VoiceOver:** <i class="timecode">[01:17:58]</i> All Orders. Pending Orders. Fulfilled Orders. Fulfilled Orders and one more item, tabpanel. You are currently on a tabpanel. To interact with items— 

**Ben:** <i class="timecode">[01:18:08]</i> Nice! Oh, that's such a good, good experience there, I think. 

**Chance:** <i class="timecode">[01:18:12]</i> Love it. So yeah, I feel really good about our tabs here. This is a much simpler version of what we have in Reach UI, so if you're really interested in how we sort of handle, like, a more broad set of use cases, Reach UI's a codebase that you can look through. And it's written very much like what we just wrote. Very similar in a lot of ways. So there's some abstractions here and there, but for the most part, it's very similar. So feel free to dive deep, to get some of that nuance down and try and figure this out.

And if you're interested in these general patterns, this is what I'm building a workshop around in a few weeks. So back to that workshop I mentioned earlier, if you really want to learn this stuff in depth, go deep on, like, the composition and all of the things that we've talked about it at a much deeper level for the whole day, I'll be doing this for a whole day, and I would love for you to join me. Buy tickets.

**Ben:** <i class="timecode">[01:19:02]</i> I will absolutely share the link, but first I have to—

**VoiceOver:** <i class="timecode">[01:19:04]</i> System Preferences, Accessibility, window, Accessibility features. 

**Ben:** <i class="timecode">[01:19:09]</i> I always feel like—

**VoiceOver:** <i class="timecode">[01:19:10]</i> VoiceOver, selected.

**Ben:** <i class="timecode">[01:19:11]</i> VoiceOver, off, please! There we go. Thank you. VoiceOver is, like, the worst pair for a stream, 'cause it's always like, "I want to like talk and then I don't want to turn off in a quiet way," so I'm going to have to interrupt someone.

But yes, please, please go sign up for Chance's workshop here. This is fantastic. If you want to learn how to do composition like this, Chance is your guy!

Yeah. So Chance, I'm going to go ahead and start wrapping up, but this has been fantastic. I loved one comment from Michael in the chat which is, "Can you guys cover every component in Reach UI now? A two-month series," and honestly, I wouldn't turn that down. 

**Chance:** <i class="timecode">[01:19:58]</i> Have a spinoff stream called the Reach UI Breakdown. 

**Ben:** <i class="timecode">[01:20:04]</i> There we go! I'd be so here for it.

Y'all, go follow Chance on Twitter. And while you're at it, while you're following people on Twitter, go follow me. Next week, we have Lucia Cerchie coming on. She's going to be showing us how to get started with — Ooh! We got some thunder here! We're going to be showing you how to get started with using automated accessibility testing, using tools like Axe and Lighthouse, and integrating those into your workflows. So it's going to be tons of fun. I'm super excited for that.

Y'all thank you for joining us this stream, and I will see you next week. Bye!

**Chance:** <i class="timecode">[01:20:38]</i> Ben, thank you so much. Thanks, everyone.

**Ben:** <i class="timecode">[01:20:40]</i> Thank you, Chance.