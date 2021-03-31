---
title: Building Accessible SVG Icons in React with Chantastic
upload: https://www.youtube.com/watch?v=t0vU8n1AQXU
sourceCode: https://github.com/SomeAnticsDev/accessible-svgs-in-react/blob/main/src/App.js
hosts:
  - Ben Myers
  - Chantastic
---

You know what they say… an icon is worth a thousand words. However, scaling icons up to reusable icon libraries can pose some interesting logistical challenges. Join us on <i>Some Antics</i> as [Chantastic](https://twitter.com/chantastic) walks us through his journey towards building accessible SVG icons in React.

Michael Chan, or Chantastic, is the host of [<i>React Podcast</i>](https://reactpodcast.com). He's working on [lunch.dev](https://lunch.dev) — a community for creative coders. He's also on the hunt for the perfect Reuben sandwich.

## More From Michael

- [Follow Michael on Twitter](https://twitter.com/chantastic)
- [Read Michael's blogposts](https://chan.dev)
- [Listen to the <i>React Podcast</i>](https://reactpodcast.com)
- [Join us on the Lunch.dev community Discord server](https://events.lunch.dev/discord)

## Mentioned Links

- [Copy the SVG](https://github.com/chantastic/accessible-svgs-in-react-demo/commit/6211d0f08e83e48451b378add6f10274e40544e6)
- [Using ARIA to enhance SVG accessibility, by Léonie Watson](https://www.tpgi.com/using-aria-enhance-svg-accessibility/)

## Transcript

**Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. It is great to be back. I was out last week because of the great Texas freeze. But it's good to be back with power, with warmth, with internet, with all the things and with you all, of course! Today I am joined by my friend Michael Chan. You might know him around the interwebs as Chantastic. Michael, go ahead and tell us about yourself. 

**Chan:** Hey, hey, hey! I'm resisting the urge to ask you how you're doing in Texas.  We can circle back. We're going to put a pin in that and we'll circle back to it. But, yeah, I'm Michael Chan. I go by Chantastic most of the places. 

And yeah, I am… You know, Ben hit me up and was like, you know, "If you ever want to be on the show, you should *[00:01:00]* come on." And I was like, "I don't really know anything about accessibility. You're the one who teaches me about accessibility all the time. I like, I know semantic markup and all that kind of stuff, but I'm just not an expert." And then I kind of remembered, and we talked about this a little bit, I remembered, like, "Oh my gosh. I spent like weeks trying to get our SVGs accessible in React, our icons accessible in React. And I learned a lot through that process. I guess this is something that I might know about." And you were like, "Yeah, let's do it." So here we are. I think I want to like preface all of this by saying like, I am by no means an expert on this, but I think I've, I've put in a lot of time, read a lot of articles that I think I can help people get to a better starting point. And then I'm like eager to see what people learn and kind of contribute back to this because I think there's a solid starting point, but there's *[00:02:00]* always ways that we can improve the things that we're working on. 

**Ben:** Absolutely. And to preface this as well, like, I have very little experience with accessible SVGs, so I'm super excited. I feel like I'm about to learn a lot from this. I think that's so much of what accessibility is, right, is it's not even that there is THE way, it's not always that there is the right thing to do, but just general concerns, and we're just always kind of like ambling towards like, ambling in the direction of progress. And so, yeah,  we are two dudes who don't necessarily know a whole lot about this and just have our own limited experience, but I'm excited to see this. I'm excited to see this journey here that we've got.

**Chan:** I like the word "ambling!" I don't know if I've, I don't know if I've ever noticed that word before. I kind of equate it to "rambling," but maybe with more intentionality. I don't know. That's interesting. 

*[00:03:00]* **Ben:** Yeah. So before we hop into this, I want to share a few places that you can find Chan throughout the web. First of all, we've got his Twitter at @chantastic. Let me dump the bird site link into the chat. 

I think kind of the thing that you're most known for, perhaps, is that you run the React Podcast, which is on a bit of a hiatus right now, but I'll still send the link Yeah. And kind of talk to us about some of the things you're doing, like, during the hiatus, what have you, what have you been working on?

**Chan:** Yeah, so the… Okay, I'm sorry. I just opened up Twitch because I wanted to see, you know, chat and then I forgot. I had to pause it real quick. Yeah, so the network that React Podcast is on, Spec, decided to close its doors at the end of 2020. *[00:04:00]* And, you know, it's funny. It takes a surprising amount of work to, like, produce a podcast. I kind of totaled it up and it takes about like 16 hours of human time to produce a single episode of React Podcast. And I think I was doing about eight of that, and then they were doing the other eight of that, or we were, you know, contracting it out or whatever. And when they decided to close, I couldn't bring that other eight into my life. Like, there was no place for it to fit. So I'm kind of just figuring out what the next phase of it's going to look like. It's definitely going to have to be, like, reduced to some degree. But I think it will be good. I think it'll be better. I'm not exactly sure what it looks like right now, but hopefully sometime in, like, April, May, we're going to start with new episodes.

And then in the interim, I wanted to kind of get a better sense of, you know, kind of where people were at, and so started the *[00:05:00]* lunch.dev community Discord. I wanted to get more coursework out there because I've just not done anything in a really long time. So kind of put some stuff back online. I'm trying to kind of round out some of the stuff that I've been working on because React Podcast has just really taken up my life for the last two and a half years. So yeah, just trying to figure that out, figure out my content game kind of outside of React Podcast. It's kind of a rambly answer, but you know, figuring out all that stuff.

**Ben:** Alright. And then I put a link to the lunch.dev. You're going to be releasing a course on modules there. And then one last thing is the Discord. Talk to us a bit about the Discord. 

**Chan:** Oh my gosh. So it's so funny. So this started with Joe Warren, who you know. He hit me up and he was like, "Hey, where's the React Podcast community?" And it's like, "I don't even… I *[00:06:00]* don't… There is not one. It's just people listening to this show and maybe they hang out places." and so we just kind of were like, "Well, why don't we, like, start a Discord, even it's just, like, you and me? We'll just, like, hang out and get to know each other a little bit. And we'll kind of listen to episodes together and just kind of have a good time with that."

 And you know, it's just been fun and it's been growing. You know, you showed up and really kind of took the reins and like kind of giving us a project. You might want to pull that up actually, like, the events.lunch.dev Eleventy page. We've been working on that together and doing streams and, like, everybody's learning and teaching. And it's been like an incredibly fun environment to just hang out with people, get to know people and then learn from, you know, the things that they've taken a lot of time to learn, which is, you know, effectively what we're doing today, which is great.

*[00:07:00]* **Ben:** Alright. Well, cool. So yeah, today we're going to be doing accessible SVG icons in React, building an accessible SVG icon system. I just realized that the closed captions have not been enabled this whole time. I'm gonna fix that real quick, but in the meantime, I have a quick question for you. What makes an icon accessible? It's a bit of a big one. What makes an icon accessible? 

**Chan:** You got to start with the big-guns, open-ended questions. So this is something that's really interesting because, and again, I want to preface, I am not an expert and definitely don't know all of the right terms, however, there are a lot of things that have to be considered when you're thinking about an icon versus an image. Right? So, you know, there's images and you can have, like, an SVG image. And those, typically, you want them to be able to… Like, *[00:08:00]* something that would make an IMAGE accessible is to kind of describe the image and sometimes in like great detail. So you might have a title for an image that says, like, what the image is kind of, like, in the abstract. Then you'd also have a description that really goes into detail on, like, describing the image. So, you know, maybe you have, "A west coast sunset over the ocean with oranges and purple sky and preface of sand." I don't know. Like, you'd want to go into great detail to actually describe the image.

Now what we're talking about today is, like, accessible ICONS. And it's, it's kind of a unique difference that I'd not really considered, but like, so often, you have an icon set and the icons are augmenting some text and a lot of times likethe value of the actual image, the thing that you would *[00:09:00]* describe, like star, for example, you'd have title "Star," and then you'd have description like a five-pointed geometric shape with, I don't know, however, you would describe a star. Like, illustration of what an astronomical figure might look like.

There's so many ways that you could go about it. But the thing is, is that like, that's actually not particularly useful in context. You know, a star usually represents, like, on a list of things, this is one of your favorited articles or favorited tweets. So there becomes this kind of, like, this nuance that you have to figure out as a designer, as a developer on a per-case basis of like, what is the usefulness? Like, what does this mean? And then is there already some text that communicates that to the point that, like, we don't even need to tell them that there's an icon on the page or communicate to the *[00:10:00]* screenreader that there's an icon on the page? So these are the things that kind of, like, make icons fairly nuanced, even among like images or SVG images that we'll be covering today and making kind of an API around that so it's fairly easy to opt into the best practices. 

But I think, and this part doesn't really answer your question, but I think it bears being a theme today, which is nothing that we will do today provides an out-of-the-box, one-size-fits-all accessibility treatment for all of your icons. We can only create some tooling that allows you to make the best decision for your users on a case-by-case basis. And we'll kind of, like, see a little bit about why that distinction is important. 

**Ben:** Absolutely. So, yeah, picking up *[00:11:00]* two takeaways from that so far. A, we're not going to be able to do a one-size-fits-all; and B, A is because of this distinction between the literal versus the functional. 

**Chan:** Hm. Yeah, I think that that's right. It's a good way to put it, actually. A literal description of your icons is not always helpful to users. 

**Ben:** Alright, So let's go ahead and get started. We're in Reactland, so I'm going to spin up a genericCreate React App project. I'm going to do that with npx create-react-app. 

**Chan:** Not a typo. Yeah. 

**Ben:** Let's see. Did it...? Oh, do I have to do the…? Interesting. *[00:12:00]* Please hold. I need, like, hold music or something, you know? 

**Chan:** You know, if you had a little soundboard, this would be a good play, hold music would be a good thing to have on there. 

**Ben:** There we go. 

I am going to Google… For some reason, npx create-react-app isn't working. I think it's because I'm not supplying a template, so… let's see… Well… Huh. 

Alright. Well, what I'm going to do, then, is just give it a name and we'll have a bit of a nested directory.

**Chan:** No worries. And so like right now we're sharing this directory, which is kind of the live sharing… 

Is it a version thing? Do you need to…? You should have the latest version with npx, right? 

**Ben:** That's what I would think. 

**Chan:** Do you have a global installation? I think maybe… *[00:13:00]* Did you run uninstall? 

**Ben:** Yeah, I did run this. We'll see. Fun stuff. "Up to date." Why would it say "up to date" if I'm uninstalling? Let's try Yarn as well.

Yarn could be… Oh, look at that! Yarn's doing some stuff. What if I just yarn create react-app in the current directory? Ha! Look at that. 

**Chan:** Oh, there's another way to do it? So many ways to do anything these days. 

**Ben:** Adrianne is excited for Some Antics to expand brand to sound effects and hold music. Might have to make that happen.

**Chan:** Yeah. You know, I'm super interested in how to actually accomplish this. I'd been curious as well, because in trying to think about, you know, as we discussed earlier, and while our Yarn happens, I'm trying to think about like how to make the React *[00:14:00]* Podcast take less time. I have been thinking about a soundboard and kind of running through it and whatnot, but, like, I don't want, like, a soundboard necessarily. Like, you know, a complicated thing. Like, I don't know, maybe an iPad thing. I'm open to suggestion. I think we both need some sound in our life. 

**Ben:** There we go. Oh, look at that! Fascinating. 

Yeah, I was so, so tempted to take the theme music for React Podcast and, as soon as you started talking, to start playing that just, like, deep, grungy bass. But I figured I did not have the rights to that, so I am not going to tempt the Twitch gods. 

Alright. So I'm running… This is just a basic Create React App project. If you've ever done anything with Create React App, you've seen this before. It's got the little rotating atom, it's got the link, and this atom *[00:15:00]* itself is an SVG. 

So we're going to kind of cheat here. I'm going to… Actually, do you want to explain why we're cheating with the SVG? 

**Chan:** Yeah, I'd be happy to explain that. So, what happens in Create React, and we can actually look at the code here, Create React App actually imports… So, there's a Webpack step, I think. I don't even know where we would find it, but in App.js. I think you could probably find the import statement at least. They're using, like, a Webpack, like, converter to get a link, basically get a URL string or a URL from this loaded logo.svg. So you do "import logo from './logo.svg," which is a standard SVG file. And then, I think you can *[00:16:00]* look on line 8. It's just putting source is the logo, which it's a URL string. 

So now, we are going to cheat a little bit in that we're just going to inline that SVG. And the only reason we're doing it is just because there's not, like… There's so many ways to load SVGs into your app, and what we're covering today is not necessarily the SVGs themselves, but the kind of wrapper that you're going to create to make them accessible, and so we're going to treat the SVGs effectively as an opaque source. So you're going to load them in however you want, but we're going to focus on SVG rappers. So we just want to bring it inline so we can see all of that happen inside of this one file. 

**Ben:** And to do that, you've already pulled out — Firefox maximized there — you've already pulled out the SVG so that we can inline it. I've put the link to this in the chat, but we will be able to just copy this *[00:17:00]* and replace our image here. 

**Chan:** Yeah, and I wanted to have a diff there so to, like, to be clear that there's not, like, magic happening here, except for the fact that we're moving this SVG into Reactland. 

**Ben:** We can nuke the import. I'm just going to save this so we can validate that everything is still working. Awesome. 

Cool. So what's what's next for us? Or, why is this SVG incomplete? 

**Chan:** Yeah. Okay. So this is really interesting. This SVG… And so, I actually added on line 12 a title, which is kind of representative of what we were getting from Adobe Illustrator, which is where all of our icons lived. Now I had felt, you know, in my ignorance, like, okay, well, Illustrator is providing the title for this icon and *[00:18:00]* so we're good, right? Like, accessibility: solved. Like, we got the title and, you know, and I don't know, this is just me, like, wanting to not have to solve this problem, effectively. Right? Because our icon names are named by, like, you know, ridiculous things like "encircled star outline." You know, some things are completely unhelpful when read aloud. But I have a dash in there to represent, like, this is what we were getting. 

Now, if you don't mind, take line 12 out. And this kind of represents what happened to kind of get me thinking about, well, we have to solve this problem now, is that Adobe, in an effort to, like, clean up their SVGs and kind of like make them smaller, took out title and description. So anytime you exported, like, now they didn't have those. And now we had a real *[00:19:00]* problem, which was, like, now we had to, like, solve this thing. So that's kind of, like, the point that got us into "Well, I guess we've got to figure this out for ourselves."

Now, before we dive into, like, this… So, this is kind of the state of the world that we're going to be working with, but before we dive into this, I was hoping that we can take a look at the dev tools, the accessibility dev tools in either Chrome or for both Chrome and Firefox. 

**Ben:** Which one you want to start with? I guess we've already got the page up in Chrome. 

**Chan:** I think Chrome, actually. I think going from Chrome to Firefox will be nice because the Firefox ones I tend to prefer. You can probably see why after seeing the Chrome ones. 

**Ben:** Alright So, where do you want to go in the dev tools? 

**Chan:** So, yeah, so, you would go into the Elements pane, and then it's in one of those subpanes, right next to Property. It's always *[00:20:00]* hidden. You have to hover over at the thing and then click Accessibility. And then it works with your Elements inspector. So you're going to have to drill down into header in your elements, actually target the SVG. So you can tap that. And now we can see that there are certain properties that it's reporting on, and this is how it's going to report information to the screenreaders. Now, how screenreaders handle that is kind of, like, up to the screenreader, but this is kind of a summary of what it will be reporting based on the properties that are available. So you can see, like title's one of them, aria-label, and aria-labelledby is one of them. Now, we're going to focus on title and aria-labelledby today. 

So that's so that's that. Now, Firefox, it's kind of the same thing but they have their own pane, which is kind of nice. And they do something that I think is super *[00:21:00]* helpful in debugging these experiences. 

**Ben:** Okay. So I'm gonna right-click and I see Inspect Element, but I also see Inspect Accessibility Properties. I'm guessing we're going to this one. 

**Chan:** Yeah, they're ready to go for you. 

**Ben:** Let's see, is there a way I can right-align? Eh. It'll be fine. Okay. So we have our landmark. This landmark has… I'm guessing it's the diagram? 

**Chan:** Yes. 

**Ben:** Alright. 

**Chan:** Something that's interesting about this right away that I like is that Firefox actually gives you these warnings. So it says, like, you know, it shows that there's no contents for this like image to be read, which is awesome, actually. And this is actually a little bit closer to the experience that you would get with some type of reporting system like Axe. You know, if you run it on your page, it'll actually kind of surface these areas, but these are just built into the dev tools.

And so that's one of the reasons I really like Firefox for this, is *[00:22:00]* that the reporting is a little bit better. And then also, they show you, in the properties on the bottom right, show you the description as well, which is another tag that we can fill out in these SVGs. 

So I don't know how deeply we want to go into this, but if we opened up VoiceOver right now, I don't think, with the image being a diagram, that we can actually, like, get to it. 

**Ben:** Let's try it. And of course, live demos of VoiceOver with a video call are always an adventure, but  let's see what we can do. I'll try and pull something off here. So I'm opening up VoiceOver. VoiceOver, if you're unfamiliar, is Mac's built-in screenreader, which can be used by people who are blind, low-vision, *[00:23:00]* dyslexic, et cetera, people who just need extra tooling to be able to really understand what's on your page. Perhaps because they can't see it or read it for whichever disabilities. So I'm going to turn on VoiceOver. That's Cmd+F5, is the way to do that. And it's going to think for a minute. It's going to be a little delayed, I think. 

Welcome, Michael. Good to have ya! 

**VoiceOver:** VoiceOver on System Preferences. Firefox, React App, window. React App, web contents. 

**Ben:** So yeah, because the diagram is static content, it's not focusable, it's not expected to be interactive in any way. The way I'm going to try to navigate to it, see if this works, is I would do Control, Option, and then the arrow keys. There's different ways you can navigate a page using a screenreader. It's really going to depend on the screenreader that you've got, but *[00:24:00]* Control, Option, and then the arrow keys is basically VoiceOver's way to get to, like, anything that you can get to, static or interactive. 

**VoiceOver:** React App, web content, React App. React App, web content.

**Ben:** Let's see, drill down…

**VoiceOver:** Out of React App, web content. 

**Ben:** Gonna cheat and click. 

**VoiceOver:** Edit src/App, selected. Image. You are currently on any image. 

**Chan:** Okay. So it looks like it did work here, but it… Interesting. So I was using it last night and maybe, shoot, maybe it was Safari or something. I was not able to actually, like, get to the image through navigation. And I guess you did technically cheat by, like, clicking on it. So maybe I didn't, I didn't do that, but I want to kind of go into the code and change the first property that we need to change in order to get this to show up, to be selectable as an image. 

**Ben:** Okay. I'll kill VoiceOver real quick. 

**VoiceOver:** VoiceOver off. 

*[00:25:00]* **Ben:** Back in the code. So what do we need to change to get this working? 

**Chan:** Yeah, so the first thing that we're going to do is that on the SVG element itself, we want to add an image… We want to add a… sorry, role "img." I think I typed this backwards in my notes. Yeah. I definitely did. img="role." That doesn't make any sense. So we're going to do this and now at least in my test, this made it navigable if being navigable is an important thing. Now, again, this is something that you're going to have to decide on a case-by-case basis, whether or not you want it to be navigable, but this is how you kind of transition it from one to another.

**Ben:** Absolutely. So what this is doing here, do you want to kind of explain what role is in general? 

**Chan:** You know, actually, I don't know if I'd be qualified to really say, *[00:26:00]* I know that there's, like, the… "diagram" is kind of like a default of, like, an SVG. And then there's "img," which makes it read a little bit more like an actual, like, a proper image. And then there's "presentation," which I think is kind of what you would use to make it be, like, as augmenting text that's also on the page. But I'd let you clarify that because I'm not an expert on that. 

**Ben:** Yeah. I just put a link to a blog post I have on ARIA in general. But role is the cue that the browsers use to decide what kind of control to expose an element as, so that could be "img" or "presentation" or "diagram," it can be "button," "link," depending on really what it is. Semantic elements all have their own implicit roles that they'll use by default. But in certain cases, if you're absolutely confident in what you're doing, you can override that role. So you can tell the browser, "Hey, I want you to expose this *[00:27:00]* as an entirely different kind of control to assistive technology."

So here we're saying "Yes, I know it's an SVG. I know SVGs are, by default, diagrams, but I want you to lie to assistive technology and tell it that it's actually an image." 

**Chan:** Yeah. Yep, yep. The lying of ARIA.

**Ben:** Alright. So this is now a role. Should we see anything meaningfully different about…? 

**Chan:** Yeah, so I think that we don't, I mean, I don't think we need to necessarily take an additional step to test it, but in my experience, now this gives us a control for whether or not this is navigable. So like,if it's really important that this be navigable, you can kind of, like, use this role to do that.

And again, this is kind of like a question like, you know, maybe you have an icon all by *[00:28:00]* itself. I think that in practice, a navigable icon is usually a button, in which case you would probably wrap it in a button and then have that be the navigable item. But again, you know, every app is a little bit different, but I think that's probably the best practice there.

So yeah, so let's kind of do, let's jump into some of the Reacty part of this, which, like, actually extract this wrapper, this SVG, into something that we can kind of use repeatedly, and kind of, you know, let's start building that up. So I would just copy and paste what we have from line 7 to, I think, 12, so just the kind of like head part of that. And then make a new component for that, and we can call this Icon. Whatever makes sense. 

*[00:29:00]* **Ben:** I'm going to go ahead and do this in the same file so that we can scroll back and forth. Alright, I'm gonna return us an SVG. 

**Chan:** Yup. And so we'll probably take children and then also the rest props. So we'll destructure from the props object children, and then, yeah, perfect. 

**Ben:** Alright! 

**Chan:** We'll pop children down there. And then as the very last prop, we'll spread out with JSX — what is it, rest adders? — the rest. Now, one of the values of having this at the end is that if you put, you know, role="presentation" on your component, like, at the call site, now that's going to override the role "img" here and we didn't have to really do, like, a song and dance to, like, make that happen. 

One thing that we'll want to take off is *[00:30:00]* the classname "App-logo," because that's a very specific thing for this specific icon.

**Ben:** Okay. 

**Chan:** And then we'll just put that kind of down at the place that we're using it, line 20. We'll leave it there. I guess we didn't need to copy and paste it. We'll leave it there. So let's change this to Icon.

**Ben:** Yep! So we got ourselves a lovely Icon component. Passing it the classname. Are we going to pass other props, or should I go ahead and, like, collapse this into one line? 

**Chan:** Yeah, actually, we are going to pass other props. So let's do the first step. So instead of jumping back into code kind of a bunch of times, let's just do first step of actually providing a title as props.

**Ben:** Okay.

**Chan:**  And so the reason that we're doing it on Icon is that, again, we're treating this SVG source as kind of like an opaque image, and so we want to, like, kind of be able to, like, write *[00:31:00]* this title as like a prop on our icon so that we can kind of tell it from the outside, like, you know, you're doing your SVG thing, presenting an image, but like we're going to actually control the title.

So on Icon, let's kind of write the code that we want, which is, you know, title "React Logo," this time with, like, proper spaces and capitalization, which is great, instead of just the "react-logo" that we got by default from Adobe Illustrator. And then let's build that up now. So let's jump back to our component.

**Ben:** Alright. 

**Chan:** And this is going to be a sibling of whatever the children are passed in. We're going to actually add a title element above children. 

**Ben:** Alright. So that's going to look like that. 

**Chan:** Yep. And then we'll destructure title off and then interpolate that value.

*[00:32:00]* And then one additional thing that I'll do is, is that basically, if there is no title given, we're not going to just have an empty title tag. So I would wrap this in a conditional and just say like title and, yeah. Perfect. 

**Ben:** That's a whole lot of title, Chan. 

**Chan:** I know, right? That's a lot of title. 

So why don't we, at this phase, check this out in the browser and see what we get?

**Ben:** Okay. Chrome or Firefox? 

**Chan:** I think Firefox is the closest one, so let's do that. We should see that error go away, which will be nice. Or satisfying, right? 

**Ben:** Yeah. Okay. So we got landmark. It says "graphic" now, instead of "diagram." That's pretty cool. It's got this name, "React Logo," that's using our lovely formatted version, and yeah, I can see all those properties over here to the right as well. *[00:33:00]* Name, "React Logo." It has changed the role to "graphic," which I find kind of interesting, but yeah. 

**Chan:** Oh, interesting! 

**Ben:** It's even got our class and everything. 

**Chan:** Okay, cool. Perfect. Now we don't see a description in there, so let's take a second and do the same thing on repeat but with description.

**Ben:**  Okay. 

**Chan:** So we'll add a description. Now this is, like, again, we kind of talked about the role of descriptions and, like, I don't necessarily think that you're going to want a description on most icons. However you might need it. So I guess, I mean, I don't know what a proper description, like, "A 2D illustration of an atom with three electrons." *[chuckles]* Does that properly describe this image? 

**Ben:** Perhaps! "...signifying *[00:34:00]* ReactJS."  There we go. If it's got three electrons, does that mean it's lithium? 

**Chan:** *[laughs] Might be, might be! [chuckles]* That explains a lot about how I feel when I'm programming React sometimes. 

**Ben:** Alright. So we're passing a description prop now, and if I had to take a guess as to what we're going to do, we're going to destructure our description, and then we're going to conditionally, if we're provided a description, do… Is it…? Well, it's auto-completing "desc." Do I use desc? 

**Chan:** Yep. That's right. 

**Ben:** That's exciting. 

**Chan:** Now the reason I'm adding this is mostly just because I want to be, like, very verbose, and it's going to play into how we do the aria-label and get both if we want them. And again, this is about options, so that, like, you can have the option if you need it. 

**Ben:** Yeah. It's very much so pit *[00:35:00]* of success type, right? Like, if we DIDN'T allow for this, then that we would be cutting off options for accessibility, for our developers down the road who are like presumably pulling in this Icon. 

**Chan:** Exactly. So let's save this and then let's take a look, let's make sure, validate in Firefox that we're getting the description now. 

**Ben:** Refresh this… Looks like it's getting our description. 

**Chan:** Okay, cool. Now let's jump into Chrome and I want to show you, because Chrome doesn't have doesn't honor the description, which creates a pretty big problem for us.

**Ben:**  Okay…? So, I'm going to inspect this. I've got the accessibility tree up. Got our image. Yeah. Okay. So there's no description here. Nothing going on. 

**Chan:** Yeah, it's JUST title. Which is kind of *[00:36:00]* frustrating. 

**Ben:** Yeah, that there's missing information that some browsers don't expose. Okay. 

**Chan:** Yes. Now I've done quite a bit of research on this trying to figure out how to bring these into parity. And I found an article, I think I might've… I have it in my notes. Let me see if I can paste a link to it real quick. But the article goes into pretty great detail of, like, how to — I just gotta pull my branch — how to make browsers work similarly, to honor both the description, to read similarly. Right? So we're going to do, again, a little bit more of that ARIA lying to tell the browsers kind of the same story for all of them.

**Ben:** Okay. 

**Chan:** Let me jump into, I just want to make sure that people get this article, 'cause I do find it interesting. It's very old. It's like 2013, but you can see even in these two *[00:37:00]* up-to-date, modern web browsers, there are discrepancies, so worth a read. 

**Ben:** Absolutely. 

**Chan:** Okay. I think I found it. So I'm going to post this into the Twitch chat. 

**Ben:** Good deal! 

**Chan:** Oh, sorry. 

**Ben:** I was just saying good deal. I'm going to pull this up, too, so that I see this. Alright! 

**Chan:** Yeah. So this goes into great detail about, like, how you would use aria-labelledby to now connect the title and description so that they get read properly and get read predictably across the browsers and operating systems. And so you can see in there, it's doing, like, the role "img," aria-labelledby="title desc," and then, in title and desc, because it's not *[00:38:00]* referring to the attributes, it's referring to IDs, you have the ID "title" and "desc." So we're going to do exactly as it says right here to kind of get that to work.

**Ben:** Awesome. And I see that this is by Léonie Watson, who's awesome. She puts forward some great work in the accessibility space, so… 

**Chan:** Yeah! 

**Ben:** Yeah, I can already tell that I'm going to be reading this article in my free time. Alright! So yeah. Walk me through how we're doing this.

**Chan:** Yeah, so the big thing is we're just going to take a couple of steps now. We're, let's see, in our React component. So let's say on line 8, we're going to add a attribute aria-labelledby, aria dash labelledby together. Perfect. And then, in that, we're going to give it a string that includes some IDs. 

*[00:39:00]* **Ben:** Okay. 

**Chan:** I'm going to lead just right off the gate that we're going to have to change some of this to account for them being IDs. But for right now, let's do something to, like, really indicate that these are IDs, not the elements, and do, like, "icon-title" and "icon-desc."

**Ben:** Okay. 

**Chan:** And then add those IDs to your title and description. 

**Ben:** I can spell, I promise I can spell. The curse of live development is A, your demo doesn't work; B, you can't spell. 

**Chan:** It's so hard to type! 

Okay, cool. So we have this now, and what we're effectively doing is we're communicating to screenreaders *[00:40:00]* that we want to disregard the default behavior of the title and description, and we want to use the aria-labelledby, and then it's giving it the text from those nodes. So again, some of that, like, lying, but, like, for the benefit of making it more consistent. And then let's check that out and see if we got it right.

**Ben:** Okie-doke! Save this. And… well, I guess I'll actually pull this up in Chrome because Chrome is problem browser of the day, isn't it? 

Oh, interesting! Okay! So I can already see that it's got, our SVG here, it's got this name, which is "React Logo 2D illustration of an atom with three electrons to specify ReactJS." Like, that is both our title and our description. 

**Chan:** Yes. Yep. So we've been able to have it read the full title and description. And then if you go in there, it *[00:41:00]* actually has some really interesting visual cues. Tap on image again. 

**Ben:** Ah, okay! 

**Chan:** Where it shows you the actual selectors that are being used. So we have like, title, you know ID icon-title, or whatever. It's showing you how it's composing this kind of statement together. 

**Ben:** Alright. 

**Chan:** Which is cool. So, now… the problem that we have now is that we haven't… These IDs are, like, IDs and you're only supposed to have one ID on the page. 

**Ben:** Mm! So if I, you know, if I were getting clever, right, and I were to duplicate this, we'd have an accessibility defect because we now have duplicate IDs. Right? Cause both of these icons are rendering the same thing. 

Why are they, like, slightly out of sync with each other? That's amazing! 

**Chan:** Yeah. And is *[00:42:00]* it just me or does the top one look thicker? 

**Ben:** It could be! I doubt it, but it could be. That's amazing!

**Chan:** It's like one of those visual  tricks, I guess. 

**Ben:** There we go. Yeah, I didn't realize I was bringing M.C. Escher onto the stream.

**Chan:** *[laughs]* 

Cool. So yeah, so now we have a problem where we have two things that are clobbering, like, the same ID. 

**Ben:** Yeah. It's got icon-title here and then down in this one, we've got icon-title again. 

**Chan:** Yeah. And this is an area where, like, I really wanted to, like, bury my head in the sand and be like, "Oh, well, you know, SVG is kind of like an isolated document and so, like, it shouldn't be a problem." But in our testing, it was in fact a problem. And I  don't have a lot of that information available right now, but, like we, you know, we'd ran some tests. I could probably find a pull request or whatnot, but… 

Michael Gee says it does look bolder to him as well. So *[00:43:00]* at least we're both out of our mind in the same way. 

So… yeah. So we had to solve this ID thing, and this is kind of where the UI library becomes really important, because we need a way to provide a unique ID. And that's going to happen, like, in React or Vue or Svelte, or, like, I've built a wrapper like this Rails. This has to happen dynamically if you don't want to, like, have to provide, like, come up with a unique ID for every icon on your page. So this is a really good use case for a UI library to abstract this for you and automatically increment the ID. 'Cause the ID itself doesn't matter. It just needs to be unique so that aria-labelledby can actually connect the dots. 

**Ben:** Okay. 

**Chan:** So let's jump back into our code. 

**Ben:** Yep. 

*[00:44:00]* **Chan:** And there's so many ways that you can get a unique ID and I'm really excited because eventually React, React has already merged this, but eventually React will have a hook, I think it's called, like, useOpaqueIdentifier. 

**Ben:** Really?! 

**Chan:** Yeah! 

**Ben:** Oh man, that's exciting! I had not heard of that. 

**Chan:** Yeah. I mean, it's a huge accessibility win. I think… Actually, let me get up the pull request for that. 

**Ben:** Yeah. Oh, man, that's cool. 

**Chan:** Yeah! It was merged but not exposed yet. And even the demo that they give is effectively for this exact case, which is the aria-labelledby.

**Ben:** That's awesome. Yeah. 'Cause, like, I know that there are, and this is probably how we're about to solve this is, like, there are unique identifier libraries that we can pull in, npm modules or something, but yeah, it's nice to have that primitive in React itself. 

**Chan:** Yes. Yeah, absolutely. It'll *[00:45:00]* be amazing to have a hook that does this for us, because it's one less thing that we'll have to kind of reach outside of React to do for an extremely common use case.

 Now, what I've done is I just pasted in, this is the Underscore kind of, like, isolated, unique ID creator. This is largely what you're going to get if you use Underscore, if you use Lodash and use just lodash dot—what is it—uniqueId. It's almost exactly this, except with, like, a string validator inserted in there. So this is a very common approach to generating unique IDs and it's, like, you know, four lines effectively. 

**Ben:** Yeah. And so it's just, you've got a globally scoped — I mean, relative to our project, it's basically global in this case — we've got a globally scoped variable and just every time we call this, we increment it. So every component is going to get its own ID from that. That's pretty cool. 

**Chan:** Yeah. Yeah. It's super neat. *[00:46:00]* And that prefix allows you to create a prefix if you wanted to, like, give it the icon name or something— 

**Ben:** Ahh. I like that. 

**Chan:** —which is really cool. So in our case we're, just above the return, so, like, on line 10, we're gonna want to do a couple of things, which is to create a unique ID… 

**Ben:** Okay. 

**Chan:** …Each time we render an icon. So we can assign that to, like, "uid" or something like that. 

**Ben:** Alright. And I'm just gonna call uniqueId with, you know, what, I'll pass it the title as our prefix. Well, no, 'cause title could have spaces and I don't think IDs should, yeah. 

**Chan:** Yeah. Yeah, yeah, yeah. We can just leave it, yeah, "icon"'s great. And so from there, we're going to — and we're going to prefix these anyway on our own — I think it makes sense to add two new variables. So we're going to do "let title," and then we'll do *[00:47:00]* a — what is that? — a string template literal. 

**Ben:** Okay. 

**Chan:** And here,  we can do "icon-title" and then interpolate our unique ID. 

**Ben:** Yeah. I was about to do that the other way around, I think. I see. 

**Chan:** Yeah, and either way works. I mean, again, we're just constructing some kind of unique ID. 

**Ben:** I'm reading between the lines and skipping to the next one so we've got that too.

**Chan:**  Excellent. Excellent. Looking great. And then we're just gonna replace any place that we're using those with these values. 

**Ben:** Alright. So this is titleId.

This is descript— I should, I need the, there we go. 

**Chan:** Yeah. Cool. 

**Ben:** Okay. And then here, we need to call both of *[00:48:00]* these. So titleId… descriptionId. 

**Chan:** Yup. 

**Ben:** Rad. 

**Chan:** Yeah. Now what we've done is, I mean, hopefully predictable at this point, but basically we've made this dynamic in such a way that it's going to auto-increment an ID for us and hook it up in such a way that we've now separated all of our icons. They're not sharing an ID anymore.

**Ben:** Mmhmm. 

**Chan:** Let's see. So yeah, we can test that if we want or we can keep moving forward. What do you think? 

**Ben:** Let's just make sure real quickly. Yeah, I'll look here. Okay. So up here, it seems like we've got some rerendering going on, but I can see that we've got everything here is icon-2 for our top one, and then down here, everything is icon-4. I don't know why… That's really interesting to me that, *[00:49:00]* like, it's skipping 1 and 3 there, but I'm sure there's a programmatic reason for it. 

**Chan:** Yeah, that is a little bit odd. I'm curious myself, but I mean, I guess for the sake of this example, as long as they're unique. You know, you could probably use a different library if you felt like maybe that was gonna solve the issue. 

**Ben:** Yeah. We're good. Okay. So what's next? What limitations do we still have? 

**Chan:** Yeah, let me… Consulting my notes right here… Feel like we've actually done most of it, which I'm kind of surprised by.

Oh, crap! Okay. I realized that these notes are insufficient. Okay, so we added that. Now, what I want to do is actually kind of go into testing these *[00:50:00]* things, like with and without provided titles and descriptions, kind of in various states, 'cause seeing how that works is going to be important. Now, I think that, given that our title and description are merged together, theoretically, a developer should be able to provide a title OR a description OR them together and have effectively the same output to the user. 

**Ben:** Okay. I'm also a little surprised that we did tie them together. Like, I would expect, I guess, and I haven't read Léonie's article, but I would expect that we would pull the description ID out to aria-describedby rather than labelledby.

**Chan:** Oh, interesting! Yeah. And I mean, again, this might be an area where, you know, kind of the age of the article… 

**Ben:** Oh! Yeah. 

**Chan:** …Advancements, kind of recent advancements that we could, like, take this even further. 

*[00:51:00]* **Ben:** Alright, yeah, let's go ahead and just test the combination. So, first of all, we've got with title and description. We've only got the one icon now, but Chrome or Firefox? 

**Chan:** I think either at this point, 'cause we've kind of circumvented the deficiency there. So whichever is your preference. 

**Ben:** Let's do Firefox. It's closer. And it does have some nice dev tools here. Let's expand those. We've got the graphic. So this says "React Logo 2D illustration signifying ReactJS." Where is my VoiceOver dialogue? Let's turn VoiceOver back on. 

**VoiceOver:** VoiceOver on System Preferences. Firefox, React— navigation React App, React App, React App. Web content. "t," selected. React Logo 2D illustration of an atom with three electrons signifying ReactJS, image. 2D illustration of Adam with three *[00:52:00]* electrons, signifying ReactJS. You are currently on any image.

**Ben:** Alright. So that seems to be working. We're getting the "React Logo." We're getting the description. We're getting both of those. That's pretty awesome. What's the next combination we should test? 

**VoiceOver:** Suite. 

**Chan:** So I think 

**VoiceOver:** VoiceOver off. 

**Chan:** Since we only have, like, eight minutes left, I want to jump through and make sure that we've done all of the things that we want to do. So let's take both of these off and let's just know that, effectively, this is going to result in the same warning that we were getting before because it's not titled or, like, described by anything. People can kind of validate that on their own or we can do it real quick. 

**Ben:** Yeah, I agree. 

**Chan:** Okay. And so, we want, like, the equivalent of like an empty image or… what is it? Empty alt tag. 

**Ben:** Okay. 

**Chan:** So that if you are in a position where, like, again, like, a common case for this is, like, *[00:53:00]* you know, you have the icon, but it's not actually providing anything if the text itself is read. And so what I've been using for this, since we're leaning heavily on ARIA, is just to put aria-hidden on this. Now, because we're doing the spread, we can very specifically — Oh, and just at the call site. 

**Ben:** Oh, I see. I see what you mean. Okay. So we would put aria-hidden="true"? 

**Chan:** Yep. And this is a way to communicate, like, we're intentionally not putting title and description on this. So a way to opt out of the, I guess, warning, I guess. So if you ran Axe over this page, like, you'd get a warning saying like, "Hey, you need a title and describe this stuff." But this allows us to say, like, "I actually don't want to describe this because the text itself does a good job of describing exactly what it is." 

**Ben:** Yeah, a common example is if you have like a "Print" button, for instance, and it's got the word "Print," but next to it, it's got a little, like, icon of a printer. That printer icon is adding *[00:54:00]* no extra value. In fact, it's adding clutter. You want the button to just simply say "Print." So your printer is decorative and this is how, with our component that we've got, our Icon component, this is how you would indicate a decorative icon that doesn't need to be announced. 

**Chan:** Yup, absolutely. So, yeah, so we can test that to make sure now, if we look at, I guess, let's look at Firefox because that was the one that was actually reporting the warning.

**Ben:** Alright. So I'll open up the accessibility properties again.

Alright. Yeah, so if I pop open the landmark, you can see that it no longer has a graphic, no longer has an image or diagram or anything like that. As far as the accessibility properties are concerned, our SVG no longer exists, which means that it's not going to risk cluttering up screenreaders, the screenreader *[00:55:00]* user's experience on the page.

**Chan:** Yeah. And again, it goes back to, like, the, I guess, the main goal of what we were talking about today is, icons are, like, a very nuanced art, you know, like you were saying with the "Print" button. Like, you don't want it to say, like, you know, "Print, a picture of an all-in-one printer with a tray and a yada yada, yada, Print." Like, that's just clutter. Really what people want is to just see "Print" and then tap that button and have it print. And so in the same way that we wouldn't just insert things that create a bunch of VISUAL clutter, we don't want stuff that creates a lot of audio clutter either, or spoken clutter. And so this component that we've made gives us the tools to kind of go *[00:56:00]* any direction that we need, but the decisions are really up to the designer and the developer to, like, on a case-by-case basis actually use these tools that we've been using today, open up, you know, the VoiceOver or JAWS or NVDA or whatever you're testing, and actually make sure that the spoken experience is as you want it and as clean as the visual experience. 

**Ben:** Absolutely. Okay, is there anything else we need to do to improve our icons? 

**Chan:** I think, you know, I think that's mostly it. I would definitely, like, kind of as a jumping off point, I'm very curious to see kind of your observation of if you use describedby. I'd love to kind of, I mean, I don't think we have time for it today, but I think it would definitely be an interesting experiment down the road to see if we can improve the readability of this even further. But yeah! 

**Ben:** I've actually got one more thing and this is… *[00:57:00]* Because we're putting it before the rest, it's totally overrideable if people want, but you should put a focusable="false" on most of your SVGs and this is because Internet Explorer, weirdly enough, makes SVGs tabbable, and, I mean, tabbing indicates interactivity and so that's just not an accurate descriptor of most SVGs, and even interactive sVGs are usually, like, wrapped in button tags. So usually you should put focusable "false" by default on your SVGs. 

**Chan:** Awesome. I'm going to have to have to steal that and put that on our wrapper.

**Ben:** Absolutely. Anything else for us this afternoon? We've got two minutes. 

**Chan:** Yeah, I think that's mostly it. I think if you want to kind of like peak all of the, I guess, like final code, I do have a branch that I can link. 

**Ben:** Yeah. Let me… 

**Chan:** Or if you want to push it up, you can do that as well.

*[00:58:00]* **Ben:** And then "gh repo create SomeAnticsDev/accessible-svgs-in-react." We're going to make that public. Yes. God, the GitHub CLI is so cool. 

**Chan:** It's so good! 

**Ben:** And now I'll go ahead and dump this link in the chat for anyone who wants to look at our source code. 

**Chan:** Yeah! 

**Ben:** There we go. It's live. 

**Chan:** Niiice! Oh, you know what, there is one little thing. This is just like a bit of like JavaScript and stuff. I'm just going to paste it in. You can decide whether or not you have open time to do it on your screen instead of the actual, like, editor. Give me a second. I'm going to paste it in as a *[00:59:00]* comment, and this can just be, like, for funsies, for anyone who's interested. 

**Ben:** Ahh. You've got some conditional stuff.

**Chan:** Yes. So yeah. So if anybody wants, they can kind of, like, take it a little bit step-by-step further. But yeah, so effectively, just, like, if there's a title, put the titleId; if there's a description, put the descriptionId; and then filter those out for booleans, like, if you ended up with an undefined in there, and then just join it by a string. So I think that's the only difference I have between my sample here and what we ended up on. 

**Ben:** Super cool. Thank you so much. This has been so helpful. I've definitely learned a lot and I'm going to be reading Léonie's article, too. That's awesome. Thank you so much for coming on.

Next week, y'all, you should join us. We've got Stephanie Eckles coming on. Stephanie does so much great stuff with CSS education, as well as with Eleventy, which as y'all know, is my baby. Love *[01:00:00]* Eleventy. And she's going to be showing off how to create a theme for Style Stage, which is a modern day successor for CSS Zen Garden. So we'll be taking a totally unstyled page. We'll be making it look pretty. We'll be learning all sorts of cool CSS tricks, I'm sure. So feel free to join us, same time next Tuesday, 12pm CST. I'm looking forward to that. Thank you all so much for coming.