---
title: "Lift Off with the Astro v1 Beta, with Ben Holmes"
thumbnailTitle: "Lift Off with the Astro v1 Beta"
hosts:
  - Ben Myers
  - Ben Holmes
timeOfDay: 1pm
tags:
  - Jamstack
upload: https://youtu.be/tKiZ_VTE0w4
demo: https://some-antics-astro-v1-beta.netlify.app/
sourceCode: https://github.com/SomeAnticsDev/astro-v1-beta
---

It's a busy week of announcements for the [Astro](https://astro.build/) static site generator, including the launch of their [v1.0 beta release](https://astro.build/blog/launch-week/)! Islands architecture advocate [Ben Holmes](https://twitter.com/bholmesdev) rejoins Some Antics to show off how v1.0 lets us launch sites quickly with new integrations, community-built templates, and more — as well as how we can use Astro to go *beyond* static site generation.

---

## More From Ben Holmes

- [Follow Ben on Twitter](https://twitter.com/bholmesdev)
- [Ben's blog](https://bholmes.dev)
- [Slinkity](https://slinkity.dev)
- [See Ben share Eleventy's custom extensions API on Some Antics](/eleventy-custom-extensions/)

## Transcript

**Ben Myers:** Howdy, howdy, y'all. Happy Friday. Happy Some Antics day, bonus Some Antics stream. And happy Ben Holmes' birthday. It is his birthday. How old are you turning, Ben? 

**Ben Holmes:** I am 23. 

**Ben Myers:** 23. Congratulations, the big two-three. To celebrate, I want to absolutely screw with the format that we have a bit of lag, and I want to encourage a bit of chat participation. So here's how we're going to do this. We're going to wish Ben a happy birthday by y'all sending the lyrics to the Happy Birthday song in the chat. However, the rule is you can only put one word at a time. At the end I will read out the final Happy Birthday song to Ben, so start. Welcome to the stream, Ben. This is actually your second time. Yeah, for anyone who doesn't know who you are, do you want to introduce yourself? 

**Ben Holmes:** Yes. So, hi. My name is Ben. I am a astronaut by night of course, and also a software developer by day. I've been around the community for a bit since our last stream. I feel like the whole world has changed since then. Working in the Eleventy community for a while, maintaining a project called Slinkity to bring islands architecture to your Eleventy sites. And since then, I have joined Astro, as you can tell by this helmet here. And I have been working to ramp up our 1.0 beta release on the Astro side. So that's my story up until this point. 

**Ben Myers:** All right. Yeah, so I'm super thrilled to have you on. Obviously, this has been a big week for Astro. Before we, I guess, dive into what all you've been announcing, do you want to talk to us about what Astro even is in the first place? 

**Ben Holmes:** Yes, what is it? Well, it's a lifestyle, first off. And second, it is a metaframework, as some would call it, for building first static sites and now server-rendered sites, if you want to use SSR. We're going to experiment with that a bit. But the main pitch of it is that you start with something that is basically HTML to start, in something called an Astro file. And from there you can write your HTML, you're not writing any JavaScript at all. You can import style assets, and Vite will bundle those up for you. 

If you want to use Sass, or Tailwind, PostCSS, et cetera. And then when you want to reach for client-side components and do some interactive stuff, you can just import the components at the top of the file how you would anywhere else. So you could import a React component, Vue, Svelte, and anything else that you install an integration for. And you can just insert those components onto the page, almost like MDX if you've used that tool before, but obviously way more flexible. 

You can put any component framework on the page. And you can connect your site together with sitemaps, with static generation if you want it and with server rendering and dynamic routes if you want to reach for those. So a big platform to start with the least amount of tools to build the most efficient thing. And then every hook you could want in order to add more functionality. 

**Ben Myers:** Good deal. And so, Astro has announced their 1.0 beta I believe 1.0 officially will be released in June. But what are some of the highlights from the 1.0 beta? Obviously, we'll get into those throughout the stream. But at a high level, what's the big deal with 1.0? 

**Ben Holmes:** Yeah, I mean, huge deal of course. We have a lot of features that have just been building up until this point. The main thing that I was excited about with the beta is just really putting a stake in the ground, like this is what Astro is. We're now very certain about the direction we want to head in. And the Monday post actually explains that a bit of Astro's philosophy leading up to now. And as part of the beta, I mean, the main thing is definitely server-side rendering, which is something that we just announced and finalized the documentation for a couple of weeks leading up to the announcement. 

And also integrations are a big deal, where if you just want to run a CLI command to say "add React to my project," it'll just automatically pull up a wizard and help you through the process. It'll do that for Tailwind and sitemaps and a number of other things that you can try out. So the main things are definitely like extensibility in where you can deploy with serverless and edge computing soon, Netlify serverless at launch, and extensibility with what tools you want to bring in and making it super fricking easy. But yeah, it's really a nice platform for building, like, content-based sites for sure, with e-commerce being, like, the next big use case that we're sort of after. 

**Ben Myers:** Absolutely. I am very excited to dive into this. And actually, just full confession, Astro is one of those things I've been really meaning to get to and just have not had the chance. So this is going to be, like, my first time actually trying Astro, so super stoked for that. Finally, before we, I guess, start diving into things, I'm sure you're on the edge of your seat as to how that birthday song went. I'm going to read it out for you. 

**Ben Holmes:** All right. 

**Ben Myers:** Happy, happy birthday. Slinkity, aww yeah, birthday to you. Happy. 

**Ben Holmes:** Nice. 

**Ben Myers:** Obviously, copyright infringement right there. 

**Ben Holmes:** Yeah, yeah. A little bit. Definitely helps. Yeah you don't have to blur that part out when you upload it. 

**Ben Myers:** There we go, there we go. 

**Ben Holmes:** Nice. 

**Ben Myers:** Yes. So let's go ahead and start diving into this. I'm going to share my screen. First of all, we've got Ben on. Ben can be found a variety of places but perhaps most importantly, on Twitter. You should go follow him. And from there, I guess, you can kind of take it! Where should we get started? 

**Ben Holmes:** Yeah, for sure. So first, I might take off this helmet just because I'm back on Earth. I at least wanted to showcase this beautiful astronaut helmet that I always had ready to go. But it's super easy to get started here. Can I see your screen on this share that we're on right now? 

**Ben Myers:** Yeah, it should be-- I'm sharing my screen on Zoom. 

**Ben Holmes:** Oh, wrong desktop. OK, cool. 

**Ben Myers:** Oh, I see, I see. 

**Ben Holmes:** Yup. Alright, nice. But yeah, it is as simple as pulling up a terminal and running "npm init astro," and we can kind of just go from there. 

**Ben Myers:** OK. Do it. And pop open in a new window. There we go. Let me do this. So you said "npx init astro," like this? 

**Ben Holmes:** "npm." 

**Ben Myers:** "npm." Right, yep. 

**Ben Holmes:** Yeah. This is something I learned. It's actually called create-astro, but npm has a built in thing where if it starts with "create," you can run "init" instead. 

**Ben Myers:** Just volume stuff. Getting a bit of feedback in the chat. There we go. Hopefully, that should be better. OK. "Directory not--" Oh, you know what? I should create a new directory and then try. 

**Ben Holmes:** Yeah 

**Ben Myers:** Cool. So I'm just going to call this "astro-v1-beta." Hop right in, and now, "npm init astro." Alright. Do you have a particular template you like? Actually, are the templates new? 

**Ben Holmes:** They've been around for a bit, they just kept expanding as you might imagine. We can start with the starter kit to at least have some components ready to go. 

**Ben Myers:** OK. 

**Ben Holmes:** Actually, no. Let's do minimal. Oh a little late there, but let's go in. 

**Ben Myers:** Alright, what are we doing? 

**Ben Holmes:** I'm like, should we showcase integration? What should we show off? There's so much. 

**Ben Myers:** I mean, it's your stream. What do you want to show? 

**Ben Holmes:** Yeah. Let's do minimal and just add stuff by hand. 

**Ben Myers:** OK! Minimal it is. 

**Both:** Alright. 

**Ben Holmes:** And you're free to use Yarn and pnpm, if that's your thing, to at least call out. 

**Ben Myers:** Steph! Thank you so much for the gifted subs. You are so kind. Anyone who wants, they can make use of those new emotes there. You are too kind, Steph. 

**Ben Holmes:** Oh, there's new emotes. 

**Ben Myers:** New what? 

**Ben Holmes:** New emotes. 

**Ben Myers:** I haven't added any in a while but I've got, like, the logo. There's a Tuna one, that's big. You can use the accessibility one, the A11Y. Got a few good ones in there. 

**Ben Holmes:** Nice. 

**Ben Myers:** It is sure thinking about it a whole lot with the-- 

**Ben Holmes:** Plain NPM. You never know. <i class="brackets">[LAUGHS]</i> 



We download all the JavaScript to your computer so you don't ship it to the client. 

**Ben Myers:** Well, it's a good philosophy. 

**Ben Holmes:** Great philosophy. 

**Ben Myers:** Alright. Oh, it's almost there. There we go. There we go. 

**Ben Holmes:** Just a few thousand warnings and we're here! Alright. 

**Ben Myers:** I'm sure, quote, "initial commit" has to be the most common git commit name on, like, GitHub. And what I'm actually going to do is to go ahead and create this as a GitHub repository as well, so we have a place to stick this. astro-v1-beta, boom. And oh, "All systems are go." That's good, Lindsay! 

**Ben Holmes:** Nice. 

**Ben Myers:** Arran, thank you so much. Yeah, I did. I did shear off so much hair. Got a bit of a wedding coming up and it turns out you can't have a messy mop for a wedding, that's not a good sign. So there we go. Cool. 

**Ben Holmes:** Nice. Congrats, by the way. 

**Ben Myers:** Thank you, thank you. Alright. Pop this open in our editor. It is coming up. And should I just go ahead and run "npm run dev"? 

**Ben Holmes:** Yeah, you can totally do that. 

**Ben Myers:** Right. So we've got a new project here. I guess I would look at the source. You mentioned Astro files. I see one of those in there. Looks like it's HTML with some frontmatter. 

**Ben Holmes:** Sure is. And yeah. Go ahead and install that guy. 

**Ben Myers:** You got it! 

**Ben Holmes:** We actually have an amazing person on the core team now, Erika. She's been doing the language tools for a while, and it's got a bunch of tooltips now and links to the documentation. And when you hover over things, like, it's super integrated. 

**Ben Myers:** That is exciting. Always love seeing good dev tooling like that. It's installing. It's going to think for a minute. Let's see, what else have we got? We've got public with a favicon. Few other things. 

**Ben Holmes:** There it is, it's alive. 

**Ben Myers:** All right, it's kind of it. 

**Ben Holmes:** Yeah, when it says minimal, it means it. 

**Ben Myers:** For sure 

**Ben Holmes:** Very minimal, yeah. Yeah, the only enforced directories are-- src is where all your code goes, as you might imagine. public is where any resources go that shouldn't be transformed in some way. For example, you can put SCSS in here because that gets processed by Vite and gets transformed. But if you want to put, like, plain CSS files or fonts or other static assets like robots.txt, that's definitely a good place to put them. 

And those will get copied to the main build without the public, like, nested directory. And the only other ones are you could put a components directory inside of src when you start creating components. And pages is where your routes will go! So index.astro becomes index.html, as you might imagine. But as you can see, it's plain HTML all the way until the end. 

And then when you want to start reaching for templating, for example, you're going to use a JSX-style syntax in order to do it, but without the JSX-isms. There's no "className," if you're worried about that. There's no "htmlFor." None of the crazy stuff. It's just, like, if you want to run a .map(), you can do a .map()! 

**Ben Myers:** Nice. 

**Ben Holmes:** Kind of the main thing. But yeah, we can pull up a dev server to at least see the heading, at least for now. 

**Ben Myers:** Yeah. I always have to be very careful about, like, just what browsers am I opening up on stream, otherwise this is going to open up a completely new process. 

**Ben Holmes:** Totally. 

**Ben Myers:** Gorgeous. That's art right there. 

**Ben Holmes:** Minimalist. Alright. So what can we do here? I mean, the thinking was that we could create a small sort of e-commerce experience that is space-themed as well. I did a little demo of this over on our Twitter recently, of a website that lets you pull up any NASA picture that you want to and deliver it to your door as a physical print. It was really the only excuse I had to use NASA images of course, but it's a really cool API. Definitely want to explore that one. 

**Ben Myers:** Alright, let's do it. 

**Ben Holmes:** But yeah. At least with our setup right now-- I mean, the first thing you can do to make it pretty is-- that public folder that I mentioned to you in, like, a separate repository, we can just drag it into here. 

**Ben Myers:** Alright. Get this real quick. Here we go. 

**Ben Holmes:** Nice. 

**Ben Myers:** Copy that and v1-beta pop that open. 

**Ben Holmes:** Nice. 

And you can just replace. 

**Ben Myers:** Yep! OK. And is just, you mentioned that ahead of time, that you had done some styles and fonts and stuff like that, like, nothing game-breaking here, just adding your good ol' static assets. 

**Ben Holmes:** Yep. Nothing crazy. Pattern I've normally seen is, like, if you got globals and you got fonts, they'll go in public and you can just put them into any site that you develop. So to use those assets, of course, you would use a link tag. So you can go ahead and just do that if you want to. 

**Ben Myers:** OK. So like, rel "stylesheet" and href. This is probably going to be globals and I think, it's just global.css that-- 

**Ben Holmes:** That'll do it, yeah. 

**Ben Myers:** No prefixes or anything like that at the beginning? 

**Ben Holmes:** You can put a leading slash. 

I don't think it'll break anything if you don't. 

**Ben Myers:** We've got a nice gradient, we've got some fonts going on. 

Gorgeous. 

**Ben Holmes:** Yeah. 

Oh, we actually need to load the fonts. It can look cool. 

<i class="brackets">[INTERPOSING VOICES]</i> 

**Ben Myers:** fonts.css. 

**Ben Holmes:** Yeah. fonts.css. Yeah, it's good to split out fonts if you use like-- I've seen preload for, like, media types and stuff like that. But yeah, once we load these on the page, we get our nice Astro retro font going. And yeah. We can also bump this to a layout if you want to and apply it to some pages that we're making it a bit. 

**Ben Myers:** I'm here for it. 

**Ben Holmes:** Alright. So this is not how you do it in Eleventy. The main thing to mention is that -- like, Eleventy is kind of this implicit flow where you, like, put things at the top of your frontmatter and it kind of cascades down. In Astro, everything is treated as a component, so layouts are also components, which means if you go in src, you can create a components directory and a Layout.astro. Capitalized, because it's a component, but I'm not sure if it's a hard requirement or anything. 

**Ben Myers:** Alright. 

**Ben Holmes:** And you can kind of just paste index.astro in here, at least to start. 

**Ben Myers:** With the frontmatter and everything, or no? 

**Ben Holmes:** Yeah, yeah. 

**Ben Myers:** OK. 

**Ben Holmes:** Components can have frontmatter, too. And yeah, the only thing to add is a slot element inside of the body. And that's going to be where content is inserted. 

**Ben Myers:** Alright. And probably replace the h1. 

**Ben Holmes:** Sure. 

**Ben Myers:** Is slot self-closing like this? 

**Ben Holmes:** Mmhm. 

**Ben Myers:** OK. 

**Ben Holmes:** That's it. And to use it, you can go back to index.astro, maybe, and import it at the top of the file using a JavaScript ESM import. 

**Ben Myers:** Layout from 

**Ben Holmes:** Yep. And It should give you a -- Nice. Language tools, right? 

**Ben Myers:** If it's all JSX style, then I can do this, and then whatever goes in here is my slot? 

**Ben Holmes:** Sure is. There it is! 

**Ben Myers:** OK? Oh, it's easy. Love that. 

**Ben Holmes:** There it is. And you can import this into any page, as you might imagine. And you can import it into Markdown as well. Not sure if we'll demo that, but a lot of people like using components inside their Markdown and we basically support that out of the box. So if you want to, like, import a Vue component in your Markdown, that's a thing! 

But here, let's just go ahead and stick with Astro files probably. And if you have ideas for interactive components, we can totally try those too. But from here 

**Ben Myers:** Not at the moment. 

**Ben Holmes:** Totally fair. So yeah, let's go ahead and make a dynamic route maybe to store all of our products that we're going to generate here. 

**Ben Myers:** OK. So that's going to be probably inside pages and then I know Next for dynamic uses the, like, square braces with-- this would be something like an identifier like a SKU or something like that. Is it the same kind of thing in Astro? 

**Ben Holmes:** Exactly the same. 

**Ben Myers:** OK! 

**Ben Holmes:** Yeah, we model a lot of things off of existing libraries such as Next.js. We've also modeled, like, props off of how Svelte does it. Taking the best ideas from everywhere. But yeah, from here we could probably import the layout again, in order to put it on the page. 

**Ben Myers:** You know, one of the best skills but also the least necessary skills to have as a tech streamer is the ability to type, fun fact. 

**Ben Holmes:** Yeah! <i class="brackets">[LAUGHS]</i> If you're live coding, I mean, it is tough. Sorry to start us at a bare minimum but we gotta-- we gotta try them. It's kind of fun to do this as, like, a usability test of like, if I tell you to do something, maybe you know how to do it? I don't know. If not, we'll improve. But yeah, now we have our layout for products and right now we're in static build mode, which means if we want to use products, we would need maybe a getStaticPaths in order to, like, list out, here are all the pages you need to generate, and I'm going to go ahead and pull in the SKU if I want to. 

**Ben Myers:** OK. 

**Ben Holmes:** But the second option is to do a server deployment so you don't need getStaticPaths, and suddenly everything's on a server. So we could try getStaticPaths first, to at least show it off. 

**Ben Myers:** Yeah, let's do that. 

**Ben Holmes:** And then try doing a server. 

**Ben Myers:** If you think we can, like, speedrun that real quick. 

**Ben Holmes:** Think so. 

**Ben Myers:** Alright. 

**Ben Holmes:** So yeah, in order to do it, from here you can export a function called getStaticPaths. 

**Ben Myers:** Does it take any arguments? 

**Ben Holmes:** It can. If you want to use this to, like, generate an RSS feed, for example, we pass down helper functions. But here, I don't think we're going to do that. Right now we can generate some static routes and then start pulling in API data in a moment. But yeah, from here you can return an array. And it's going to have some objects in it, as you might imagine. Where it's going to have params and props, where props are any, like, information associated with that product and params correspond to, like, what you put in the filename over there. So the only-- 

**Ben Myers:** So this would be something like SKU now is We're doing space, so this could be something like the Cat Eye Nebula or whatever. I guess, if it's a SKU, it'd be a number, right, most likely. But yeah, then you could have props, whatever needs to go in here. Doesn't look like we'll necessarily need anything, maybe? Or we might? But this is going to map to the URL, so if you go to, like, /cat-eye-nebula, it'll pull up this page with this layout and with these props. 

**Ben Holmes:** Exactly, yep. 

**Ben Myers:** OK. 

**Ben Holmes:** Yeah you can chuck, like, a name in there maybe, just to pull it in. As, like, name: "Cat Eye Nebula." 

**Ben Myers:** Yeah. Alright. So, I'll do that. And then I wanted to access that down here. How would I do that? You said JSX, so is props.name? 

**Ben Holmes:** Nearly. So in order for props to exist-- thank you, autocomplete -- you can create a variable inside of your frontmatter, and that variable will be accessible down here. So you could say "const" -- doo-doo-doo -- well, it's actually on the Astro object, so "const props = Astro.props." Capital A. Nice. 

**Ben Myers:** OK. 

**Ben Holmes:** There it is. 

**Ben Myers:** Also, man those dev tools, are very nice because I was going to go lowercase and it corrected me. 

**Ben Holmes:** No, it knew. It's the only global we have! And we're going to see a lot of fancy things on there for sure. But now you have your props. 

**Ben Myers:** Save this, and go here and say "cat-eye-nebula." And is it going to need a trailing slash? 

**Ben Holmes:** No. 

**Ben Myers:** Nice. Don't know 

**Ben Holmes:** There it is. 

**Ben Myers:** Oh, I actually do know why. NOW we need 

**Ben Holmes:** Yeah, good catch. Look at that 

**Ben Myers:** OK! Very cool. So this has been generated statically though, right? So, like, we have built, you know, an HTML page ahead of time that we knew we were going to need and this presumably would just be sitting out there on some server. 

**Ben Holmes:** Exactly. Yeah, you can actually run a production build from a terminal to, like, at least see what it looks like. It should look how you expect. 

**Ben Myers:** It's probably "npm run build," if I'm remembering correctly. 

**Ben Holmes:** That's the one. 

And we actually improved the build logs a lot, so they give you a lot of granular info as you go. And that's it. 

**Ben Myers:** And if I go back to my editor, I've got dist. Here's my index.html. And here's my Cat Eye Nebula. Rad! 

**Ben Holmes:** There it is. And if you want a sitemap, we can add the sitemap integration. 

**Ben Myers:** Yeah, let's do it! 

**Ben Holmes:** To generate one of those. 

**Ben Myers:** I'm going to yeah, I'll leave it like this, not with the dev server on because we'll want to see the sitemap and the build output. 

**Ben Holmes:** Right. 

**Ben Myers:** OK. So how do I add a sitemap? That's one of the integrations you mentioned, right? 

**Ben Holmes:** Yeah. So to do it, you can pop back over to the terminal actually. We don't have to write new code for this. You can just say "astro add" and "sitemap." 

**Ben Myers:** Like this? 

**Ben Holmes:** Yep. 

**Ben Myers:** Do I need to globally install something? 

**Ben Holmes:** You could do "npx astro add," if you want. And that will import and update your config automatically. Wow! 

**Ben Myers:** OK. I do love the, like, safety guards there of, like, here's exactly what we plan to install and what's going to change. I feel like that would give anyone a little more confidence that you're not just installing arbitrary things. 

**Ben Holmes:** Yeah, exactly. And you can opt out of either one If you want to, if you have a reason. Like, maybe we have the wrong package manager or something. Though I think it auto detects that, actually. But yeah, that's it. And now, if you run a build again, it'll just sitemap it! 

**Ben Myers:** Alright. Gonna think for a hot second. "The Sitemap integration requires either the site astro.config option" 

**Ben Holmes:** I just wrote that log! 

**Ben Myers:** You just did? OK. 

**Ben Holmes:** Yeah! So if we head back over to config-- the reason your sitemap is-- I mean, it's going to have to map to a production-ready URL. So you can provide a site inside of this config right here, linking to a website. It doesn't have to be a real one of course. 

**Ben Myers:** Yeah. I'll put it as someantics.dev, a website that is not quite ready but exists and is a safe domain. So now it should be good? 

**Ben Holmes:** That's it. We can convert it to a NASA storefront. 

**Ben Myers:** OK! There we go. It's complete. And sitemap.xml all created for me. I'm not going to bother to pretty format this but it's there. That's gorgeous. So good. Man, that's even easier than adding plugins to Eleventy! 

**Ben Holmes:** Yeah! I mean, integrations are basically our idea of plugins, because they have access to, like, everything in the build step. We have full docs on that, of course. But like, if you want to hook into "Before build, do this. After build, do this. When the config resolves, fetch the directory and do something else." There's a ton of stuff that it hooks into already and if it's a first-party integration, you have the little CLI helper to just put it in there automatically. 

But I'd love to expand that out to third-party as well so literally anyone could, like, submit a new integration and you could just "astro add" that integration into your project. But right now, we have, like, the official ones that you can use and you can also use it to add your component frameworks. So like if you want to add React, you can "astro add react" or something like that. 

**Ben Myers:** Very cool. Alright! So now that we have these pages being created, you know, statically, we were going to try to make these server-side. Is that still something we can do? 

**Ben Holmes:** Oh, yeah. For sure. So, as you might imagine, when you go server-side, you don't get need getStaticPaths anymore. You can just pluck off the SKU and do any craziness that you really want to. But in order to do that-- yeah, let's go ahead and turn this into a server first and then we can mess around with API calls. 

**Ben Myers:** OK. How do we get started with that? 

**Ben Holmes:** How do we server? Yes. So you will need to type two lines of code for this. I'm sorry, it's so much work. 

**Ben Myers:** So much. 

**Ben Holmes:** But if-- I know. So if you go to the Astro config-- 

**Ben Myers:** Yes. 

**Ben Holmes:** Well, actually we should probably install this first, but you can install it and then apply it here. But we're going to install @astrojs/node. 

**Ben Myers:** @astrojs, and then-- I'm sorry, I have you turned down. What was the last part? 

**Ben Holmes:** "node." 

**Ben Myers:** "node," OK. 

**Ben Holmes:** Yeah, this is the simplest SSR adapter that we have right now. It just turns it into a Node server, as you might expect. But we have one for Deno. We have one for Netlify serverless, which is really neat. I was actually talking with Prince about it a bit. He was helping me troubleshoot. So that should be updated soon as well. 

**Ben Myers:** Alright! 

**Ben Holmes:** But yeah. Now you have it. You can import it, as you might imagine. 

**Ben Myers:** Import. You'll need to let me know, is it a destructured import? 

**Ben Holmes:** It is not. It's just default. 

**Ben Myers:** OK, and what do you like to call it? Just, like, "nodeServer" or something like that? 

**Ben Holmes:** Sure. Yeah, you can call it whatever. 

**Ben Myers:** OK. 

**Ben Holmes:** And then it's going to be a separate thing called "adapter." 

**Ben Myers:** Adapter is going to be what type is adapter? Oh. do I just put nodeServer like that? 

**Ben Holmes:** Yep, and call it as a function. And that should be it. 

**Ben Myers:** Right, got it. Sorry, was replying to someone in the chat. There we go. OK, so, adapter. This returns, like, a server adapter. So is our Astro site, like, magically server-side rendered now, or? Like, what's changed as a result of adding this adapter? 

**Ben Holmes:** Yes. So the way we've set up adapters are all-or-nothing, basically. So when you slap on an adapter, your whole app's a server now. And you don't need to configure anything else. It just is a server. And you could choose any deployment target that you want. It's informed by how SvelteKit does things and how Remix does things. It was just, like, the nicest way to do it. But every adapter can have its own configuration options where, for example, if you wanted one of your pages to be static, the nodeServer adapter would have to have some behavior to say, "look for this flag for static" 

and then it'll make it a static asset, or something like that. At the moment, everything is just a server endpoint. There aren't any, like, static assets that are rendered out. But since most things are going to be done server-side, like, Google's going to be happy it's not client-side rendered. It is server-rendered. But yeah, it's definitely going to expand from here, but it's meant to be as hands-off as possible. 

**Ben Myers:** Makes sense! OK. So now, do I need to? I probably need to make some changes to, not my layout but to here. I need to make some changes in here? 

**Ben Holmes:** I mean, you'll probably just get a warning saying "You don't need getStaticPaths," but I think it'll still just keep working. But now a nice thing that you can do, I believe-- Yeah, go ahead and do that. And well, props isn't going to have anything anymore because props don't exist. But you can literally just, like, say props equals name, "Cat Eye Nebula" or something. 

**Ben Myers:** Oh. Is name a global now? 

**Ben Holmes:** No, I just meant the thing you had on lines 10 through 12, I guess, you could just copy in here for now. 

**Ben Myers:** Get props this part. 

**Ben Holmes:** Yeah. 

**Ben Myers:** Fix this up. Here we go. 

**Ben Holmes:** Beautiful, lovely. 

**Ben Myers:** Beautiful! I can program, I promise! 

**Ben Holmes:** "I did the code." 

**Ben Myers:** OK. 

**Ben Holmes:** "Oh, so you need code." 

**Ben Myers:** Got it. So now here I refresh. Everything still seems to be working fine, but the, I guess, big test here is if I could go here. What's another famous space thing? The Pillars of Creation? That's one of them, right? 

**Ben Holmes:** Sure! I've never heard of it. I'm going to look it up for sure. 

**Ben Myers:** OK! 

**Ben Holmes:** And the fun thing about this now is, like, in your URL you could say, like, "banana," and it would pull up this page and let you pull in that parameter and do whatever you want with banana. 

**Ben Myers:** OK. 

**Ben Holmes:** And right now we're just serving the same content for every dynamic URL that you could have, other than the homepage, because we have a separate index.astro set up. So it's kind of like a catch-all right now. 

**Ben Myers:** So how do I get the information from the URL, then, to be able to start using it? Because presumably, I would want to be serving different content on each of those pages. 

**Ben Holmes:** Exactly, yeah. So Astro.params is gonna give you the params. And that's kinda it. 

**Ben Myers:** Alright, so Astro.params, and then, I guess I would presumably do something with that, right? 

**Ben Holmes:** Yeah. We'll probably do, like, an API request in a second. 

**Ben Myers:** Yeah! Let's do that. Just to, I guess, prove that we have different stuff here, I could do params.sku. "banana." 

**Ben Holmes:** There's your banana. 

**Ben Myers:** Andromeda. Stuff like that. Okay. 

**Ben Holmes:** Andromeda. There it is. Yeah! 

**Ben Myers:** Yeah, so let's do some, like, actual API business then, I think. It's the kind of natural next step here. 

**Ben Holmes:** Yeah, let's get it. So, mentioned the NASA API to you before the stream. We can go ahead and use that guy. If you want to pull up, I think, it was just nasaapi.gov or something, to at least look at the endpoints available. 

**Ben Myers:** Yeah, it was api.nasa.gov. 

**Ben Holmes:** Sounds right. 

**Ben Myers:** And so ahead of time, Ben sent me this link and I generated my own access token. Really quick and easy to do so. Just plug in your name and your email and you're good to go. And here's all the APIs they've got. Do you have a particular favorite API you want to use for this? 

**Ben Holmes:** Yeah, I've just been using the photo of the day one because it's a little bit simpler to parse. They have an images API but you can put in a search query and search for literally anything but you end up getting a lot of false positives, where I search for galaxy and it gives me a picture of a galaxy conference. And I'm like, well, it's not really a galaxy. But it's all available. And this is a simple one that just lets you get some cool photos within a date range and they give you a little bit of information about that photo and other things. We'll probably be fetching from 2021 as a parameter because for some reason they started sending videos in 2022. 

**Ben Myers:** Interesting. 

**Ben Holmes:** It's called photo of the day, man! <i class="brackets">[LAUGHS]</i> I didn't want a video link! But it's a fun little API to try out here. 

**Ben Myers:** Oh , we have-- and I cannot access. Sorry I'm getting the bot in the chat. There we go. Man, been a while since I've had any of those! Alright. Anyways, yes. So we've got this URL and then I've got an API key that, as you and I have discussed, is not terribly necessary to protect but this is one that we've generated ahead of time just to make sure we don't run into rate limits. So do I just start, like, using node-fetch in here? Like, what am I going to do in here? 

**Ben Holmes:** Do what feels natural. 

**Ben Myers:** OK. 

**Ben Holmes:** --to you. 

**Ben Myers:** So probably-- you know what? I'm going to, in that case, install node-fetch. 

**Ben Holmes:** You're already doing too much. 

**Ben Myers:** You what? 

**Ben Holmes:** You don't need to do that. 

**Ben Myers:** Oh, is node-fetch already in there? 

**Ben Holmes:** Fetch is already in there. 

**Ben Myers:** Fetch? OK. Wait, as just a global? So, I could just say, what, "const image =" and, like, "fetch?" 

**Ben Holmes:** Yeah. 

**Ben Myers:** Oh, hello! 

**Ben Holmes:** There it is. 

**Ben Myers:** It would help if I hadn't accidentally copied that. OK. Here we go. 

**Ben Holmes:** Ah, yeah. 

**Ben Myers:** Here we go. Let me get into enable privacy mode real quick so that I can then open up Obsidian. 

**Ben Holmes:** Yeah, no problem. You can put it in a .env, basically. 

**Ben Myers:** I'm not worried about protecting the secrets. It's just, I'm about to open my notes app, and I just want to be sure nothing surprises me. OK, there we are. Turn off that mode. 

**Ben Holmes:** Yeah. You can actually put that in env. 

**Ben Myers:** Yeah, let's do that! 

**Ben Holmes:** See how real easy it is. 

**Ben Myers:** Again, these secrets for the NASA API are not terribly, like, mission-critical to protect but still a good practice to show off. So I can call that "NASA_API," stick that in there. And then in here, do I need to do, like, require('dotenv').config()? It's already taken care of? 

**Ben Holmes:** So this is a Vite thing, actually. This is not something that Astro had to build themselves. But at the end of this, you could say plus, or use template strings, whatever you prefer. And then in here, we can do a that, and it's "import.meta." 

**Ben Myers:** "import.meta" -- Ooh. 

**Ben Holmes:** ".env." 

Yeah! ".NASA_API." 



**Ben Myers:** Yeah. OK! Got that. 

**Ben Holmes:** Got that. 

**Ben Myers:** And then fetch here, does this? Will Astro automatically, like, resolve this? Like, by the time it gets in here? 

**Ben Holmes:** Oh, yeah. So everything in that frontmatter will be run either at build time or on server request. So yes. It used to just be, like, frontmatter, but now to me it's like, it's a server endpoint and then below it is the UI for that server endpoint. Like, you're basically writing an Express server with a ton of helpers at this point in time. <i class="brackets">[LAUGS]</i> It could also be, like, a Netlify helper or something like that. But yeah, now you can fetch, and you can put "await fetch()" if you want to, because we have top-level await! 

**Ben Myers:** Nice! OK, so I've got image, and then I don't actually know what the data shape of this is. 

**Ben Holmes:** Yeah, it's JSON. 

**Ben Myers:** Yeah. Does this not give me the response? 

**Ben Holmes:** Just click on that example query and it'll do it. Because a demo key is allowed. 

**Ben Myers:** Oh, OK. So and there's I need one of those, like, JSON formatters. Actually, I think I have one of those. 

**Ben Holmes:** They're nice. I don't know what I have. 

**Ben Myers:** Here it is, URL. OK. 

**Ben Holmes:** Yeah, that's the main one you need. 

**Ben Myers:** It's here. img, src equals, and it's going to be image.url, and then you I gotta. 

**Ben Holmes:** I mean, it's required. We should honestly have a warning for alt at this moment. The title, I think, is one of them. Yeah. 

**Ben Myers:** Yeah. It's not perfect, but for what we can get from the API, it'll have to suffice. 

**Ben Holmes:** It'll do. 

**Ben Myers:** So would it be "image.data."--? 

**Ben Holmes:** Because-- So no, actually. You just need to do a .then() on the end of that fetch to do the res, res.json(). And then you can use it. Yeah, you can do two awaits or yeah. This approach is always, like, a little cleaner. 

**Ben Myers:** Here we go. 

**Ben Holmes:** Nice. 

**Ben Myers:** I think we're good. 

**Ben Holmes:** That's it, yeah. 

**Ben Myers:** Back here. Got an image, so that's promising! 

**Ben Holmes:** Got an image. It's cool. 

**Ben Myers:** So if I inspect this Yeah. "Great Comet of 1996." OK. Very neat! 

**Ben Holmes:** Alright. So now that we have that, my thinking was the dynamic URL we have could be a date, and then we can pass the date to NASA. 

**Ben Myers:** Yeah. So it needs a-- I accidentally hit the wrong button on my-- 

**Voiceover:** VoiceOver off. 

**Ben Myers:** --on my Stream Deck. There we go. 

**Ben Holmes:** It's a good shortcut. 

**Ben Myers:** Yeah, because it needs, like, year-month-day format. And we're just going to do a single date, probably? 

**Ben Holmes:** Yeah! Yeah, probably. 

**Ben Myers:** In that case And date equals This is what is this? Is this Astro.params--? Oh, geez. 

**Ben Holmes:** Whoa. Yes, Astro.params. 

**Ben Myers:** And we've got "sku," but I'm going to probably actually rename this now to "date," because expressive code is important. 

**Ben Holmes:** I'm into it. 

**Ben Myers:** Alright, and I need to figure out a better way to format this is to show 

**Ben Holmes:** Strings are tough. Especially with a big font. Nice. 

**Ben Myers:** There we go. That's better, I suppose. Alright, so this will get whatever date is in the URL. We're not doing any sort of validation. I don't know if validation is really a common thing or a thing that Astro has a pattern for. But currently we're not doing any of that. 

**Ben Holmes:** Oh, we're going to try that. Oh, yeah. 

**Ben Myers:** Then I go to, let's say 2020-03-15, an absolutely cursed day for most people. We have alt text. We don't seem to have the image. 

**Ben Holmes:** Yeah. Inspect and see if it's a video because it just happens. <i class="brackets">[LAUGHS]</i> They have a type field and you can probably do like a-- we'll do some validation in a second but we could probably do validation on, like, if it's a video, just redirect to the homepage or something until we can handle it. 

**Ben Myers:** Yeah. OK, here we go. So then we look at like this and use the type. 

**Both:** Media type. 

**Ben Myers:** OK, yeah. We maybe would do some smarter val-- actually, do you want to do some smarter validation? Is that something you want to? 

**Ben Holmes:** Yeah! 

**Ben Myers:** OK. 

**Ben Holmes:** Yeah, I don't know how smart you want to get. But the main thing to show off is you can validate it in here and redirect when things go wrong. 

**Ben Myers:** OK. If image media type is not equal to image, then we redirect. How would we redirect here? 

**Ben Holmes:** Yes. So this is a super fun part. You can return a valid Response object and it is just allowed. We have a specific helper for redirects because the syntax is a little funky when you're writing it by hand. So in here, you could do, like, Astro.redirect(), and then the path that you want. 

**Ben Myers:** Like, in here? Astro-- 

**Ben Holmes:** Just delete "Response" and do Astro.redirect(). 

**Ben Myers:** OK. This. 

**Ben Holmes:** At least wanted to mention if you want to do something other than a redirect, you can return a new response if you want. 

**Ben Myers:** Wait, I feel like something's not quite-- 

**Ben Holmes:** I think it's language tool updates. Trust me that this works. <i class="brackets">[LAUGHS]</i> 

**Ben Myers:** OK. 

**Ben Holmes:** It's a very new feature. 

**Ben Myers:** And then in here, do I need to pass a new path? 

**Ben Holmes:** Yeah, you can do slash to just go to the homepage. 

**Ben Myers:** Yeah, OK. So if the response that we get is not for an image, then we are just going to go to the homepage. We know Oh, is that where all the? I've been hearing like, boop-boop-boop sounds, and I think it's coming from my terminal. I didn't know my terminal could do that. So refresh this. We would expect-- yeah, we're able to get here just fine but we know the 15th is broken because, of course, March 15, 2020 was broken for a lot of people. 

**Ben Holmes:** It was cursed. 

**Ben Myers:** It was cursed. 

**Ben Holmes:** We could just specifically search for that day, to be honest. Just be certain. 

**Ben Myers:** So there we go. Alright, cool. So we've got a little bit of validation. We could probably do, you know, some format validation as well. I don't know why it keeps-- here we go. "Astro." -- what was it? -- "params.date." You know what? I am going to pull out some good ol' regex magic here. So 

**Ben Holmes:** Alright, let's see this. 

**Ben Myers:** So this is-- this and, nope, that's not it. Did that wrong, there we go. I promise I can regex. 

**Ben Holmes:** This is impressive to me. 

**Ben Myers:** Once more with feeling. This should be-- 

**Ben Holmes:** I didn't know about the curlies to, because I would have said "dd" or something. Nice. 

**Ben Myers:** There we go. I think this works and then if not DATE FORMAT.test(Astro.params.date), and I'm just going to go ahead and do this, a little redirect. Alright, just give a good restart, just for good measure even though I don't actually think we need it. So we should expect that the March 16, 2020, this works. Well, it would help if I waited for everything to come up. But if I just said "2020," it redirects me. If I said "tomato," it redirects me. Look at that! I can do regex on here! 

**Ben Holmes:** Wowww! Look at that! Oh that's good. 

**Ben Myers:** Alright! Alright, alright, alright. I'm here for that. Yeah, Pukimaaa in the chat is suggesting an alternative here. Yeah, because we've got multiple checks here and there's just like different approaches for, like, should you combine all those or what? I'm doing an early return here because I know, like, if there's a-- 

**Ben Holmes:** I like that. 

**Ben Myers:** If there's a invalid date format, then I shouldn't even try passing it to the NASA API. That's why I've got it the way I've got it, but to each their own for sure. OK! So what next then? 

**Ben Holmes:** What next? So we have a page being generated, we have redirects back to the homepage if we want them. What now? We could create a form, if we want to, and start letting people put in info and maybe try to check out with them. 

**Ben Myers:** Alright! Yeah, sure. Let's do it. So do we want to just do that here in our layout or is there a good place or-- sorry, in our little area down here -- or do we want a new page or how do you want to do this? 

**Ben Holmes:** This is a good place. I mean, you can always make a component if you really want to, but yeah. 

**Ben Myers:** Alright, and then do I need to do anything like add an action or anything like that? 

**Ben Holmes:** Yeah! Let's go ahead and do an action. 

**Ben Myers:** Will they post? 

**Ben Holmes:** Action post, yeah. 

**Ben Myers:** Wait, I think, no it's method "post" and then action is-- 

**Ben Holmes:** Action is the URL. Yeah. 

**Ben Myers:** Do we have a URL we need to post to? 

**Ben Holmes:** We can post to a checkout URL once we make it. But foreshadowing, I mean, we're doing this all server-side, so we're not preventing default or doing anything wild. You can, for sure, if you want to, like, use a component and all of that fun stuff. But for now, let's just no-JavaScript it. Let's go for it. 

**Ben Myers:** Cool. Always down for that. Alright! And what kinds of information are we collecting in this form? 

**Ben Holmes:** I mean, I'd put down, like, quantity and size, where, like, quantity is a dropdown -- or size is a dropdown and quantity is a number. 

**Ben Myers:** Equals "quantity," and input, type="number," id="quantity." Give it a name as well for form submission purposes. There we go. Then you've got, like, a dropdown here and you give it its own label. And this is for size. id="size," name "size." Give it a few options. Presumably if you were actually selling, like, prints of this, you would have actual dimensions, but for demo purposes, here's how we're just going to do it. 

**Ben Holmes:** Yeah, it could be a T-shirt now! It's T-shirt design. But yeah, we're on a page. It's down there. Added some base styles just to make it chubby, but we can probably do, like, a CSS grid or something, put them side by side. Or whatever artistic direction you want to go. 

**Ben Myers:** Yeah. Alright. It's thinking about formatting-- there we go. OK, so form 

**Ben Holmes:** So actually, we might suggest writing some styles in the file itself. 

**Ben Myers:** In components. 

**Ben Holmes:** To show that off. Yeah! 

**Ben Myers:** Okay! So in here, I can go ahead and say style. 

**Ben Holmes:** I think outside of Layout. That might work, though. I actually don't know. 

**Ben Myers:** OK. 

**Ben Holmes:** Yeah, and every style you create is gonna be scoped to the page, similar to-- 

**Ben Myers:** OK, so I don't even have to write the, like, "scoped" keyword that you see in other-- 

**Ben Holmes:** No. 

**Ben Myers:** Nice. 

**Ben Holmes:** You could put "lang" for, like, lang="scss" If you wanted, but not required. I think you'll need to install SCSS. 

**Ben Myers:** Yeah, let's not for this. But OK, alright. So form, "display: grid." We're going to give this a big chunky margin as well just to fully separate it from everything around. Let's see. And then 

**Ben Holmes:** Things are happening. 

**Ben Myers:** Form that input. We'll just give this a margin-bottom. I could lobotomized-owl this but it gets weird since we've got, like, labels and stuff. So it'll just be 2ems, and besides that, everything's it's very gross. You know, maybe add label, font-family, then it's called "RT" -- something that starts with an A, right? Alias? Was that it? 

**Ben Holmes:** Yeah! I think there's a CSS variable for it. I just can't remember the name for it. 

**Ben Myers:** Oh, it would be in fonts, wouldn't it? Oh, no, because it's just the font face declaration. 

**Ben Holmes:** Yeah, in global there's a-- nice. 

**Ben Myers:** Oop. Too many hyphens. There we go. 

**Ben Holmes:** It does that to me every time. <i class="brackets">[LAUGHS]</i> It's like, it's too smart. 

**Ben Myers:** Yep. 

**Ben Holmes:** There it is! 

**Ben Myers:** Nice. I'm just going to keep prettying this up. Do a quick font-weight like this. I don't know if you've got 800 installed, but let's find out. And then font size-- 

**Ben Holmes:** It might be 700. 

**Ben Myers:** I think, let's just put extra large and see what happens. 

**Ben Holmes:** Big! That's good. 

**Ben Myers:** Alright. So now if I submit this-- actually, the other thing we need is you gotta have a submit button. So, I know that "submit" is the default type for button. However, React has so thoroughly trained me to put this on, like, every button anyways. 

**Ben Holmes:** It helps me know. Like, whenever I add another button, I'm not worried about it. 

**Ben Myers:** OK. Yeah. Well, it's not the prettiest thing but we're going to work with it. 5, and then large, and then submit. It takes me here because we don't currently have a checkout page, right? 

**Ben Holmes:** Yep. It probably went to the dynamic route, saw that "checkout," failed the regex, and then redirected here. 

**Ben Myers:** Nice. 

**Ben Holmes:** So we caught our own issue before it even happened. 

**Ben Myers:** OK. So, should we go ahead and just add, like, a checkout page? 

**Ben Holmes:** Sure, yeah. 

**Ben Myers:** Alright. "import Layout from"-- Ooh. Anytime I go, like, just a little too fast-- 

**Ben Holmes:** I think if you-- I don't know! Like, maybe you need to close the frontmatter block and then it'll start being smart. 

**Ben Myers:** Here we go. Components, there we go. 

**Ben Holmes:** There it is. 

**Ben Myers:** I went a little too quickly. Alright, here we're gonna go ahead and start using my layout. Do I not have my emoji keyboard right now? I don't. Here we go. Anyways, try this once more. We go to-- oh, right, that was one of the days that didn't work. OK. I'll go here, I'll say five, I'll say medium this time, submit, goes here. 

Alright! 

Got a nice little flow. Is there a way for me to-- obviously, we don't really have full APIs backing things but where would I insert the API calls, the database changes, the actual ordering? Where would I submit that in this flow? 

**Ben Holmes:** Yeah. So again, like, the frontmatter is literally an endpoint at the end of the day. So inside of that frontmatter, you can access the request that's coming in, because this is going to be a POST request, as we've set it up. And that POST request is going to have some data on the body that we can go ahead and parse. So in here, you can say "const request = Astro.request." 

**Ben Myers:** OK. 

**Ben Holmes:** Assuming it's up to date, good. I wasn't sure if that change got in. OK. So now you have the request and it is just going to be a request object of a type POST, and then a body that you can parse through. So the fun thing is that it's form data and because we're using Node Request objects, there's not a helpful parser for form data. Like, the same way you do .json() and .text(), there isn't a .formData() on the Request object we're using. 

But it's in the MDN docs, so we're like I'm going to maybe push an issue to get form data in there because it's nice. But in order to parse it, one thing that I found is there's a built-in called "querystring," is the package. You can import at the top of the file as, like, "import querystring from 'querystring.'" I think there's another way to parse form data that involves, like, the URL object but I'm totally blanking on how it works, so let's go ahead and just use this. 

But this is not an external package. This is a Node thing. So I think the way you do it is just saying, "const data = querystring()," and then just pass in the request itself. And we can console log and see what it looks like. 

**Ben Myers:** Yeah. My editor's being overeager. This is going to console log into my terminal. 

**Ben Holmes:** Yes, and I MAY have gotten something wrong there. I'm going to double check my source code on that. I know there's a way to do it. 

**Ben Myers:** Start from here and see if it's yeah, it's not thrilled with that. 

**Ben Holmes:** Yeah. Let me see. 

**Ben Myers:** Hey, ninopepper. Thank you so much for the sub. Super appreciate it. Yeah, it's not thrilled with this. And I think it's actually "querystring.parse(request)." 

**Ben Holmes:** Maybe so. We can try that. 

**Ben Myers:** Let's try it. 

**Ben Holmes:** And it'll be in your terminal console. 

**Ben Myers:** Yeah. 

**Ben Holmes:** Really?! Did you put names on each of the fields? 

**Ben Myers:** Should have, yeah. Also, I'm noticing-- 

**Ben Holmes:** Yeah, that is interesting. So I think if you do request.text. 

**Ben Myers:** I think I need to get properties. This .body. I think that's what it is. 

**Ben Holmes:** That could also be it. Hm, yeah. 

**Ben Myers:** Doesn't seem to like that. 

**Ben Holmes:** .toString(), because I know that's a stream. 

**Ben Myers:** OK. We're going to hope. We're going to hope. Scroll down here. Oh, that's also weird. OK. Let me double-check on something. 

**Ben Holmes:** Probably. I mean, we're just stabbing in the dark with that. I know there's if we don't want to use querystring or something wild, I think URLSearchParams has something for this. I'm reading MDN right now to recall. Yeah, I think this works, actually. If you go ahead and, say, instead of using-- let me go back here. Instead of using querystring, try using "new URLSearchParams()." 

**Ben Myers:** OK. URLSearchParams like this? 

**Ben Holmes:** Yes. Thank you. 

**Ben Myers:** Then request? Pass it request? 

**Ben Holmes:** I think you pass request.text() function, and that will parse the body to text. Yeah. With open-close parentheses and an await, looks like. 

**Ben Myers:** Getting there. No more red squigglies. 

**Ben Holmes:** Alright. 

**Ben Myers:** And do "console.log(data)." 

**Ben Holmes:** Yeah. And this will be a map. So you'll do like a-- oh, well, let's see what the console says. 

**Ben Myers:** Nicky actually suggests for a POST, that's going to be in the body. 

**Ben Holmes:** I don't think so-- 

**Ben Myers:** Seem to be getting it-- 

**Ben Holmes:** --because text converts the body, and the body object itself is, like, unparsed. We'll try it though. 

**Ben Myers:** We'll try it. So this-- 

**Ben Holmes:** If that's the destination. 

**Ben Myers:** The beauty of a livestream, honestly. The beauty of a live demo. Go here. I'll say it's 76, medium. Ahh, look at that! 

**Ben Holmes:** Oh, looky there! 

**Ben Myers:** Ah, we got there. OK. And presumably, then we would be using this data to, like, actually make database mutations and stuff like that. 

**Ben Holmes:** We can do all sorts of things, yeah. In order to access them, I think it's data.get('quantity') and stuff like that. So if you wanted to put it on the page. 

**Ben Myers:** Yeah, let's do that. So console.log(data), we'll keep that in there. And I'll use the output element, which is B.HOLMES: Oooh! B.MYERS: Yeah. B.HOLMES: Clean. For those who are unfamiliar, the output element is an element that represents the result of a calculation, typically, a form submission. So data.get('quantity'). And I think back up and do this again. There we go. OK. Nice! 

**Ben Holmes:** There it is. Alright. 

**Ben Myers:** Yeah, Nicky, thank you so much for your help in the chat. Nicky says that, usually, querystring is for a GET. 

**Ben Holmes:** Maybe so. Yeah. That was just a stack overflow of-- I need to read form data somehow. But at the end, form data is just a URL param like any other. So if you just use the web-native search params, you can parse form data very easily. So at that point, maybe form data is not even necessary. It's a helper, but yeah. 

**Ben Myers:** We have a question from our friend Lindsay who asks, "Looking at how Astro is doing things here, you can basically get the same setup that Remix provides with having GET and POST be at the same route, right?" 

**Ben Holmes:** Yes, you can do anything with these endpoints. And I've definitely had an identity crisis looking at this as Remix and Astro felt like very different projects to me. And once you unlock servers, oh, my God, they're almost the same. At least in what you are capable of. The one big piece is, of course, Astro is a multi-page app where every route is its own page and you refresh to visit other routes on your site. And Remix is built around React Router and has all sorts of data-fetching madness. 

Not to say single-page apps aren't in the future. People have been working on framework-agnostic integrations where you could have a single-page app across everything. But I'll leave it up in the air as that's definitely a community-driven thing that we're still exploring and seeing what's possible because, of course, Remix is built around React. So everything is built into that flow. 

And Astro is, of course, open to literally anything, including no JavaScript at all, as we have here. So if you have a single-page app story, you got to support everything, which is definitely a tougher one. But when you can crack that, oh, boy, that's going to be crazy. 

**Ben Myers:** OK. So is there more you wanted to show off with the Astro 1.0 beta? 

**Ben Holmes:** Yeah. How much time do we have left, by the way? 

**Ben Myers:** We're actually over, but I think we're doing really well, and I'm good to keep going if you are. 

**Ben Holmes:** Are you sure? 

**Ben Myers:** Oh, yeah. 

**Ben Holmes:** OK. I mean, the only thing we haven't tried is components. We haven't imported a dynamic component. I don't know what we'd do with it because our whole e-commerce site didn't need JavaScript, technically. But we could add one, see it in action. I don't know. Yeah, let's do it. 

**Ben Myers:** Components. Do we want to add a carousel or something like that? 

**Ben Holmes:** If it comes to mind. I've got some source code that I can send to you if you want for a carousel.svelte. 

**Ben Myers:** Oh, OK. So I can just do carousel.svelte in here? 

**Ben Holmes:** Yes. 

**Ben Myers:** Alright! 

**Ben Holmes:** And we have that. And as you might imagine, you can't import this Svelte component yet. But if you go to your terminal and do "astro add svelte," then you can. 

**Ben Myers:** Let's do it. 

**Ben Holmes:** With npx, of course. Already knew. Nice. 

**Ben Myers:** And then after this, after we handle adding components, I think one more thing that might be good to round out this whole thing is deploying an Astro site. 

**Ben Holmes:** That is true. We can probably use the Netlify adapter instead of Node and then see what happens. It should be as simple as install, deploy. 

**Ben Myers:** Alright. Yeah. So we've got Svelte. And then do you have the component you want? 

**Ben Holmes:** Yeah. I'm just DM-ing on Discord. 

**Ben Myers:** I don't have Discord open. Can you send that to me over Zoom? 

**Ben Holmes:** Sure. 

**Ben Myers:** Yeah. Trying to minimize how many windows I've got open-- 

**Ben Holmes:** Makes sense. 

**Ben Myers:** --because I have had some lag issues on previous streams. 

**Ben Holmes:** I can only imagine, yeah. Oh, won't let me paste it. Is it too big? Maybe it's too big. 

**Ben Myers:** Do you have it as a URL I could get to? 

**Ben Holmes:** Let me put it on a gist, sure. 

**Ben Myers:** Alright. And then meanwhile, I'm going to go out on a limb and assume, just so that we've got it, that the Astro integration for Netlify is just "astro add netlify." That would be my guess. 

**Ben Holmes:** Yes. You'll need to install it. I don't think we have the "astro add" fanciness for adapters. 

**Ben Myers:** Oh, do we not have that set up? 

**Ben Holmes:** Let's find out. 

**Ben Myers:** Let's find out! 

**Ben Holmes:** I don't think we set it up for adapters yet. Oh, my god! Alright! Do it! Boom. Well it shouldn't have added it there. I'll send that bug report for sure. But yeah, we'll put Netlify in the adapter section and not the integration section. 

**Ben Myers:** Got it. OK. So here's your gist that you've got. I'll go ahead and just copy this in here. 

**Ben Holmes:** Yes. Now it does require photos. And I think photos have-- oh, yeah, I set it up with URL, title, and date. We don't have all of those. So you could probably get away with stubbing some of those out in there. I'm just looking at that "a" tag, yeah. You can turn the "a" into a div and remove the href. 

**Ben Myers:** Yeah. That's what I think I'll do. As-- 

**Ben Holmes:** Yeah, this is a-- 

**Ben Myers:** I don't know the syntax. 

**Ben Holmes:** Don't worry. 

**Ben Myers:** I probably do because Brittney-- 

**Ben Holmes:** This is a hack to get carousels working in the smallest amount of code. And I kind of regret it now because it's not super readable. There's a slightly more readable way to do this. But yeah, if you put back the code that was there, I just want to make totally sure I don't get this wrong. Actually, no. I think the main thing is that photo is the object. So yeah, if you just make an image. 

**Ben Myers:** Let's remove the anchor tag there, I guess. We'll just have that. And let's see. It's got a URL. Yeah, alt is going to be broken. I'm just going to have a broken carousel. It's not going to be very good. 

**Ben Holmes:** I love it. 

**Ben Myers:** "Yikes." And then "Yay Astro." OK. Now, it doesn't even have image URLs, but we've got a carousel that could work. 

**Ben Holmes:** Yeah. If you wrap that in a div with banner-cta as the class, I have some pre-built styles in here just to make it look nice. I'm just mentioning because there's some absolute positioning, and it's probably going to explode without the container, so, you know. 

**Ben Myers:** Alright, alright. 

**Ben Holmes:** And yeah. 

**Ben Myers:** Now I need to actually use this. So let me just get on this utterly abused date page. 

**Ben Holmes:** Might be a homepage thing, but yeah, let's put it here. 

**Ben Myers:** And is it as easy as "import from" and then that .svelte file? 

**Ben Holmes:** Yeah, and watch that. 

**Ben Myers:** Carousel. See if that fundamentally breaks anything, huh? Not happy. 

**Ben Holmes:** Oh, it needs photos as a prop. So you can remove the export if you want. 

**Ben Myers:** OK. I see. So remove this, right? And then-- 

**Ben Holmes:** Yeah, you could pass it from up top too. Let's do that. 

**Ben Myers:** We got this. Now I'm going to go here, and I'll say photos equals-- already had that there. OK. 

**Ben Holmes:** Nice. 

**Ben Myers:** Finally, this thing is "photos={photos}"? 

**Ben Holmes:** Yep. You can also just do curly photos if you want it the same as the name, but yeah. Well, it should be happy. Did we accidentally delete photos from the props? Oh, interesting. OK. Oh, I think it expects a different type or something. I'm not sure. Yeah, we can go somewhere valid. Oh, we need to restart the server. 

**Ben Myers:** Yep. Yeah, the VS Code extension does not support the shorthand syntax. Got it. OK. Let this come back up again. 

**Ben Holmes:** Oh, that's good to know, actually. OK. 

**Ben Myers:** And, oh, adapter. Oh, yeah. We did too many things at once. 

**Ben Holmes:** Yep. It auto-applied it. 

**Ben Myers:** We flew too close to the sun. 

**Ben Holmes:** Yeah, just delete that. And then we can put it on at the end. 

**Ben Myers:** Start this with a clean run there. Nicky goes, "Love that shorthand syntax. I wish JSX in React supported that, or does it?" I don't think it does. 

**Ben Holmes:** Doesn't. Yeah, we started just inspired by JSX but slowly, like, just removed some things we didn't like. Or it's like, you can do the JSX syntax and it all works, but you can also do the non-JSX. 

**Ben Myers:** Photos is not defined-- 

**Ben Holmes:** OK. So photos is not defined. 

**Ben Myers:** --at carousel. 

**Ben Holmes:** That's interesting. Oh, I think we deleted the export. Yeah. So just export let photos equals empty array. 

**Ben Myers:** Photos equals-- OK. Got it. Interesting. 

**Ben Holmes:** Yeah, that's just the default value. 

**Ben Myers:** Oh, OK. Got it. 

**Ben Holmes:** Yeah, it's funny. 

**Ben Myers:** Already I think components are maybe some of the weirdest intricacies I've had with this so far, but that's fine. Oh, I think it's getting a different-- because it's got some logic in there that's how many more to show. OK. 

**Ben Holmes:** So, actually, this is working as intended. But you need to opt in to shipping JavaScript with this component. So by default, we just server-render components, and then you choose if you want JavaScript alongside it. 

**Ben Myers:** Mmm, got it. 

**Ben Holmes:** Yeah. So if you go back to where we use the component, you can put a little directive in here that's called client colon-- there you go. 

**Ben Myers:** Which one, client:idle? 

**Ben Holmes:** Yeah. I mean, the difference is, I think it links to the documentation if you want to learn more. But idle just means-- there. Yeah, that. 

**Ben Myers:** I'm just going to shout out-- there we go. Just huge shoutout there to Princesseuh in the chat who is apparently the person who's been working on these excellent dev tools. Just a great job, seriously. 

**Ben Holmes:** I assume that's Erika, yeah. They're so good. What's nice about owning a templating language is you can just own all of the docs and everything. Whereas in Remix, you've got to import a bunch of stuff, in Astro, it's like, we can just put in the dev tools so you just see it as you're typing. But yeah, now it's-- 

**Ben Myers:** This is straight-up going at it. 

**Ben Holmes:** Yeah, it's a quick interval. So you can tweet that. 

**Ben Myers:** Yeah, let's do that real quick. 

**Ben Holmes:** I made it fast in the demo to show "and you can do hot module reloading" and then changed it. 

**Ben Myers:** Got it. OK. 

**Ben Holmes:** Less showmanship here. 

**Ben Myers:** This right here. So I'll just say every three seconds. Yeah. 

**Ben Holmes:** Nice. 

**Ben Myers:** Cool. Alright! That's components. Obviously, we would have had a better demo, I think, had I cared to go grab some images. But we've got some components. We've added some JavaScript to our page. It's executing Svelte logic. And this means that Svelte itself is being-- or I guess Svelte doesn't really get shipped. It compiles JavaScript. But all of this, it's run through the Svelte compiler. 

**Ben Holmes:** Yep, exactly. 

**Ben Myers:** Cool, cool. Yeah. So I think maybe next we deploy a site. 

**Ben Holmes:** Let's deploy. I actually haven't deployed on stream yet. It's got to be seamless. I mean-- 

**Ben Myers:** Alright. So I know I'm going to need the adapter here. Can adapter be an array? Can I do this? 

**Ben Holmes:** No. That would be interesting to build to multiple targets. But you can just replace Node with Netlify, and if you want to run it locally, you can use the Netlify CLI and say "netlify dev," and it'll route everything correctly. But we'll just do a production build and see where we get. I don't know if you have the Netlify CLI. 

**Ben Myers:** I should have the Netlify CLI. At one point, I updated this Mac, and things got weird with those kinds of installs, so we'll see if I even do. Usually, it would reply a little faster than that. Let's see. Netlify version. Why is it hanging? 

**Ben Holmes:** I don't know. 

**Ben Myers:** OK. Oh, there we go. So I do have it. Interesting. 

**Ben Holmes:** Well, in that case, you can do a build and then run "netlify deploy." 

**Ben Myers:** OK. So "netlify build" like that? 

**Ben Holmes:** That might work too. I was thinking "astro build," but that might work. Because I know Netlify is really magic about auto-detecting this is Astro, auto-detecting your deployment directory, et cetera. 

**Ben Myers:** Oh, I need to actually initialize this. Should I initialize it and then do all of these things? You know what? I'll listen to what you're saying here. So npm run build. I'll do-- 

**Ben Holmes:** Also change your site so you don't accidentally publish to someantics.dev. 

**Ben Myers:** That's fair. 

**Ben Holmes:** It won't use it-- change it for safety. I think we just use it for sitemaps if those are generated. 

**Ben Myers:** There we go. Yeah. I think likely should be fine, honestly. 

**Ben Holmes:** Alright. 

**Ben Myers:** OK. Now "netlify init." Create a new site. Create and configure a new site. Put it on my team. We're going to call this some-antics-astro-v1-beta. Being very explicit about that. 

**Ben Holmes:** Very specific. 

**Ben Myers:** That is my build command. 

**Ben Holmes:** That's it. 

**Ben Myers:** Dist. Netlify/functions. There we go. Oh, yeah, I've got multiple organizations going on here, first of all. Yeah, hang on. I got this. 

**Ben Holmes:** That's it. 

**Ben Myers:** We're in privacy mode now. Excellent. I love having a Stream Deck. It's nice. 

**Ben Holmes:** That is nice. It's a physical one? 

**Ben Myers:** Yeah. 

**Ben Holmes:** Nice. 

**Ben Myers:** Oh. And I actually do need this to be up in my other browser, don't I? Because I'm not logged in to Netlify on this browser profile. And for what it's worth, I do recognize that this privacy mode that I've set up isn't the most secure thing in the world. Blurs can be reverse-engineered, but it's a way to just make things a little more obnoxious. 

Just thinking about getting those sites. Oh, Nicky, so that's not a built-in thing. I've set up a scene in OBS that has everything blurred and the text that says privacy mode is active. Then I just have a toggle scene button on my Stream Deck. Here we are. And now there we go. Everyone can see. So site settings. 

Going to go to-- I want deploys. Deploy settings. Link a repository. I need to fix my organization so that the Some Antics organization has all the same permissions. Oh, hello, we are not authorizing Netlify access to my Microsoft repositories. 

**Ben Holmes:** Yeah, just grab that. Prod database deploys, sure! Link it. When it comes to Netlify, I probably allowed so many things I don't even realize. I just trust them. I don't know. 

**Ben Myers:** Alright, there we are! We got there. 

**Ben Holmes:** Beautiful. 

**Ben Myers:** Deploy. Alright. It would be much easier had you not done what I'd done, which is stick things in an additional organization. That is on me, not on Astro. 

**Ben Holmes:** That's tough. 

**Ben Myers:** Alright. And it's thinking about all these things. 

**Ben Holmes:** It's building. 

**Ben Myers:** It's building. Yeah. In the meantime, I can, I think, go ahead and give out the URL for the-- I mean, it's right there. So it's just going to be-- 

**Ben Holmes:** No! What happened? 

**Ben Myers:** Testing the app for anyone who wants to take a look at this. No, that's not it. Oh, wait. No, yeah, they are. That is it. Site deploy failed. 

**Ben Holmes:** Yeah, I know. Let's find out. 

**Ben Myers:** Oh. OK? "Deploy directory 'dist' does not exist." Well, that's unfortunate. 

**Ben Holmes:** I have never seen that. 

**Ben Myers:** It failed the build because it couldn't find Astro, I think. Though it didn't build-- 

**Ben Holmes:** Well, we've got Astro. That's the only dependency, I think. Well, actually, no, we have our integration as well, but yeah. 

**Ben Myers:** I'm going to try doing-- 

**Ben Holmes:** What? 

**Ben Myers:** They have a netlify.toml yet. I thought that was something that got created whenever you did the init, but I could be very wrong. Let's get this-- 

**Ben Holmes:** Yeah, let me-- 

**Ben Myers:** Give this a shot. 

**Ben Holmes:** I don't know. Because that doesn't seem right. 

**Ben Myers:** OK. By the way, I know Nicky's in the chat. Congratulations on the Netlify gig. We love Netlify here. But right now something funky. See if this works. Nothing. OK. 

**Ben Holmes:** Yeah, because we-- let's see it. 

**Ben Myers:** Yeah. I mean, it's going for it. 

**Ben Holmes:** OK. We failed just after this. 

**Ben Myers:** What's on the chat? How are y'all doing? Any questions for Ben? Anything you want to know? Oh, look at that. So this time, we don't have the functions thing. 

**Ben Holmes:** Well, that's just odd. "Deploy directory 'dist' does not exist." Yes, it does. 

**Ben Myers:** Interesting. Maybe a typo on the folder name, Andi suggests? 

**Ben Holmes:** I don't think it does. Head back to our build-- or head back to our code editor. Because I don't think dist is the build output. I think Netlify is the build output. Do you see that folder right there, netlify? That is the build with functions inside of it. OK. So you can put inside of this toml-- I'm looking up the syntax to be sure. Yeah, (build) publish equals netlify. 

**Ben Myers:** Equals netlify like this? 

**Ben Holmes:** Yeah, but now I'm worried functions needs to be a different directory too. Maybe you can do publish equals just slash, base directory. And then it'll find Netlify functions inside of that. 

**Ben Myers:** OK. So like this. 

**Ben Holmes:** I think so. Let's try that. I'm very curious about the external node modules. I haven't seen that before. 

**Ben Myers:** Trying it. Do we have a bit of a sound delay? That happens sometimes on the stream. Sorry about that. Welcome, SaltSea, though. It's good to have you here. We actually do have a question from the chat that maybe you can answer, which is, at what level of dynamicness does it stop making sense to use Astro? 

**Ben Holmes:** Well, that is the question of the ages. SSR is new as of a couple of weeks ago. So we want to build things with it until it feels bad pretty much. But I would say we've definitely drawn a line at dashboards, interactive apps like Slack and Facebook, anything on those far ends of the spectrum that are very client-driven don't really make a lot of sense for Astro. 

And there's also the fact that it's a multi-page app instead of a single-page app, which means the page refreshes every time. You need to fetch things from the server in order to populate the page. So if you want to have state that is shared between routes, there are solutions, and we're making it easier. But right now it's like if you have dynamic state management like that as well, Astro doesn't make as much sense. 

So yeah, I can definitely speak for far ends of the spectrum. But things like e-commerce, I feel like Astro will grow with you pretty well. There aren't a lot of use cases I can think of that are, like, Astro definitely does not fit that. But beyond that, yeah, it gets a little tough. 

**Ben Myers:** Makes sense. Alright. In case you missed it, I went into the actual UI for Netlify, and I changed the directory. It might be that this doesn't pan out, in which case I just let it-- oh, hello, hello. That's progress. 

**Ben Holmes:** That is something. That is something. 

**Ben Myers:** Heyyy! Look at that. OK. Open published deploy. Show me my site. 

**Ben Holmes:** Take me there. 

**Ben Myers:** Must use import to load ES module. 

**Ben Holmes:** Holy crap, what? So go to any route and see what happens. I am definitely going to be investigating this. 

**Ben Myers:** Think this is going to work? 

**Ben Holmes:** So things are going-- I'm wondering if it's our Node version, because it's saying ES modules are not supported. Yeah, it's probably our Node version. 

**Ben Myers:** OK. Got it. 

**Ben Holmes:** That's my guess because we deploy to ESM modules. And it might be upset with that if you're below-- I think Netlify uses Node 14 by default, and 16 would help. So I think that would solve the issue. 

**Ben Myers:** I think I can go in here. I can say environment. I don't think I have-- yeah, no environment variables yet. Pretty sure I can go in, and I can just say "NODE_VERSION." Can I supply just a? I'll just show you what I'm typing there. Can I just supply just a major, or do I need-- 

**Ben Holmes:** Yes, I've done that before. 

**Ben Myers:** OK. We'll do that then. And then try once more. 

**Ben Holmes:** Try one more, yeah. I'm also wondering if that was our Astro issue where it did an ESM import of Astro, and then it exploded. Could have been. 

**Ben Myers:** Could be. Menides says, yeah, they added that to their TOML, which works even better. 

**Ben Holmes:** It does, yeah. 

**Ben Myers:** Right now I'm just going to, I think, stick to using the Netlify interface just for speed. But yes, totally. Right. Reversing this. They have been deployed. Refresh. 

**Ben Holmes:** I don't think it picked up the Node version. Well, you can check the build logs and see what-- I think it tells you. 

**Ben Myers:** Yeah. See those logs were-- well, it would be in deploys, wouldn't it? 

**Ben Holmes:** Yeah, it should be under there. 

**Ben Myers:** Yeah, that's deploy. Brandon, welcome. Welcome, welcome. 

**Ben Holmes:** Welcome. 

**Ben Myers:** Where are the logs in Netlify? You have seen these things. 

**Ben Holmes:** Beyond the deploy logs, I don't know. 

**Ben Myers:** OK. I'll give it one more refresh just-- OK. "Must use import to load ES module" in this case. 

**Ben Holmes:** Yeah, it's kind of like a reverse. I'm wondering if now that we-- I think there's going to be a lot to debug here. It might be as simple as we needed the Node version and we didn't need the exclude on the Astro dependency, because that is so weird to me. That has not been an issue in the past. 

**Ben Myers:** Let's try that real quick. 

**Ben Holmes:** It can be a last try. Just delete the functions clause inside of that netlify.toml. See what happens, because you need Astro to build it. Real confused by that. But yeah, I don't know. 

**Ben Myers:** Nicky wants to know if we're using require() anywhere. I don't think we're using require anywhere in this project unless it's-- 

**Ben Holmes:** You can search for it, yeah. 

**Ben Myers:** --in the Svelte. Netlify functions, there's require('util'). 

**Ben Holmes:** Well, it does do that. Interesting that it does. But I think it implements require(), however the build works. Well, no, maybe not. That could be an issue, actually. I don't know. If so, it would be a recent bug. 

**Ben Myers:** adrianengine wants me to run a local build. And Nicky suggested this earlier. I should have done this far earlier. 

**Ben Holmes:** Yeah, I saw it. It was there. So we can at least preview the build with "netlify dev" if we want to. 

**Ben Myers:** OK. So that seems to work just fine locally. This says public. 

**Ben Holmes:** Yeah, I think it works fine everywhere. Yeah, try running "netlify dev" locally. 

**Ben Myers:** Hey. Oh, OK. It was removing the external-- OK. Cool. 

**Ben Holmes:** It was! Alright. Excellent. Yeah, I guess it was all just Node version at the end of the day. Then we go here. 

**Ben Myers:** And then this seems to have blanked out. Yes, there's nothing here. 

**Ben Holmes:** What on Earth? 

**Ben Myers:** Yeah. So there may still need to be further integration for this server-side. Except everything's generated server-side now, right? 

**Ben Holmes:** Yeah! Yeah, everything is server-side. So I don't know. 

**Ben Myers:** How do I get to my logs? Oh, it's functions, isn't it? 

**Ben Holmes:** Yes. 

**Ben Myers:** Entry. Here we go. Here's the logs. 

**Ben Holmes:** Aaaand there's not much there. Yeah, I've had bad luck with function logs. They really don't say much. Sorry. 

**Ben Myers:** We're good. I think the-- 

**Ben Holmes:** But yeah, wacky. 

**Ben Myers:** What? 

**Ben Holmes:** It's funny that the homepage shows up. Because I was wondering if it was going to be like, you go to .netlify/functions and something was misconfigured in the URL. Try going to /checkout. 

**Ben Myers:** That worked. 

**Ben Holmes:** Funny. 

**Ben Myers:** It's just the dates. 

**Ben Holmes:** It's the dynamic routes. Interesting. 

**Ben Myers:** Good to know! 

**Ben Holmes:** Try going to a bad route. Does the redirect work? 

**Ben Myers:** Oh, yeah. Yeah, no, it's-- 

**Ben Holmes:** It doesn't! OK! It's the dynamic routes. 

**Ben Myers:** Interesting. 

**Ben Holmes:** Interesting. 

**Ben Myers:** Do you think that it's something within Astro itself that Astro needs to debug, or is this more like maybe something in our project? 

**Ben Holmes:** I'm thinking so at the moment, because we've definitely done this correctly. There's not really anything else to do. So I'll take a look at it. Team will take a look at it for sure. Rest assured, this should work, people watching at home, obviously. Just make sure Node version is set. And we'll debug the dynamic route issue. But yeah. 

**Ben Myers:** Alright! I'm going to just try one last thing, which is-- 

**Ben Holmes:** <i class="brackets">[LAUGHS]</i> You can! I'd be shocked if that was it. 

**Ben Myers:** Just who knows? Alright. In the meantime, I think that's probably the big YOLO deploy, the last one for today probably, because we are well-- 

**Ben Holmes:** Oh! Did you see that, by the way? It said "URLSearchParam," so it was trying. That is so funny. 

**Ben Myers:** Really? Oh. 

**Ben Holmes:** Yeah, it did! I don't know why. 

**Ben Myers:** How down did it get then? 

**Ben Holmes:** Oh, no, that's checkout. That's checkout. 

**Ben Myers:** Oh, right, right, right. OK. Forgot about that. Hey. Fred's got some suggestions in the chat. Also, welcome, Fred. Good to have you here. 

**Ben Holmes:** Hello. 

**Ben Myers:** Yeah, there's a redirect file that gets built. There could be something wrong there. Yeah. So I think, though, we are-- 

**Ben Holmes:** I know we're a half hour over, so. 

**Ben Myers:** Yeah. We are 40 minutes over. First of all, this has been delightful. Ben, thank you so much for hopping on and showing this, just taking time out of your day to show off Astro and the stuff that y'all have been working on. Is there anything more you want to say or shout out or point people to before we sign off for the day? 

**Ben Holmes:** Yeah, for sure. Well, first off, our community Discord is always open and very welcoming to new contributors and such. You can find it at astro.build/chat. And that will take you to a link to join. And there, we have weekly RFC calls where people can hop on and give their opinions about RFCs that we're bringing to the Astro proper project. If you don't know, RFC stands for "request for comments," so you can comment on new features that we're trying to implement. 

And from here, we are refining 1.0 beta to get to 1.0. So, of course, this is all open source. Go check out the repo and actually, like, you know, look through the contributing guide and see how you can contribute. I know it's been updated recently, so it's very beginner-friendly. 

And on Twitter, we've been announcing all of the new features and such, including demo videos recorded by myself, and some amazing blog posts and other content written by the team. So check out the Twitter for future updates on when 1.0 is stable. But yeah, I think that's everything I wanted to share. 

Oh, also, if you go to /hack, there is a hackathon now that I can least call out. It's happening for the next month. Encouraging everyone to try the Astro features and build new integrations, themes, and SSR websites like this one in order to take everything for a spin and show off to the community what you've come up with! 

**Ben Myers:** Alright! Cool. And while you're following folks on Twitter, I put the link to the Astro Twitter account in the chat. But while y'all are following folks, go follow Ben. And then also, you can follow Some Antics, and you'll get all the news for all the upcoming streams. 

Next Tuesday, at 2pm Central Time, I'm bringing on Adrián Bolonio. Adrián is an accessibility engineer for GitHub, and he's going to be demonstrating how we can build automated accessibility testing into our continuous integration/continuous deployment tooling so that every time you push up a commit, we automatically scan our sites for accessibility. So if that's something you're interested in, go follow the Twitter account. Go follow this account right here. And that's where you'll stay up to date with streams like that and more. 

Stick around, chat. We are going to find someone to raid, continue the stream love. Thank you all so, so much for being here. Ben, thank you as well. Astro team whom I've seen in the chat, thank you all for being here and providing your support as well. And also just an additional shoutout to Nicky who's now at Netlify and was providing a lot of suggestions as well. So thank you all so much for being here. We will see you next week. Bye, y'all. 

**Ben Holmes:** Bye, y'all. Thanks for having me. 

**Ben Myers:** Anytime. 

<i class="brackets">[MUSIC PLAYING]</i>