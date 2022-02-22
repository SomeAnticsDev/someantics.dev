---
title: Build a Component Library in SvelteKit with Brittney Postma
thumbnailTitle: Build a Component Library in SvelteKit
hosts:
  - Ben Myers
  - Brittney Postma
sourceCode: https://github.com/SomeAnticsDev/sveltekit-component-library
upload: https://youtu.be/eUslcJLGk9g
---

[Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/) are tools for building lightweight, compiled web applications. Join us as [Svelte Sirens](https://sveltesirens.dev) organizer [Brittney Postma](https://twitter.com/BrittneyPostma) shows us how to get started building web apps with SvelteKit!

---

## More From Brittney

- [Follow Brittney on Twitter](https://twitter.com/BrittneyPostma)
- [Svelte Sirens](https://sveltesirens.dev)
- [CodingCat.dev](https://codingcat.dev)
- [Purrfect.dev Podcast](https://purrfect.dev)

## Mentioned Links

- [SvelteKit](https://kit.svelte.dev)
- [Open Props](https://open-props.style/)
- [Svelte tutorial from the docs](https://svelte.dev/tutorial/basics)
- [Svelte <abbr>REPL</abbr>](https://svelte.dev/repl/hello-world)

## Transcript

<i class="timecode">[00:00:02]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. Today, I am joined by Brittney! Brittneyy, how's it going?

<i class="timecode">[00:00:08]</i> **Brittney:** It is going fantastic. How are you?

<i class="timecode">[00:00:10]</i> **Ben:** I'm doing so well. I'm super, super thrilled to have you on. I'm super thrilled to be talking about SvelteKit. We were actually just talking before stream, but a few people, some of whom are already in the chat, have been mentioning that, like, I need to dive into Svelte, and I just have not had the chance! So I'm super excited to, I guess, get a grand tour of that.

<i class="timecode">[00:00:31]</i> **Brittney:** Yeah! Thank you for having me on! I'm super excited to talk about it, too! 

<i class="timecode">[00:00:36]</i> **Ben:** Absolutely! But before we dive into Svelte and SvelteKit and component libraries and all that stuff, let's talk about you for a bit. For folks who haven't seen you around yet, who are you? What do you do?

<i class="timecode">[00:00:48]</i> **Brittney:** Yeah, sure. Hi, I'm Brittney Postma. I have a lot of jobs. I cohost the Purrfect.dev podcast. I create content on CodingCatDev. I also founded the Svelte Sirens, which is a Svelte society to help support the women and nonbinary people inside the Svelte community. We do talks and livestreams where we show how to do different things with Svelte on that. But the reason that I'm here today probably is because I'm a software engineer at Granger, and I am on the team where we are building out our internal component library and the design system behind the scenes for our teams at Granger. 

<i class="timecode">[00:01:27]</i> **Ben:** Gotcha. So how did you get into this world of, like, Svelte and component libraries? Like, what was that story? 

<i class="timecode">[00:01:35]</i> **Brittney:** Yeah, sure! So, I have a background in graphic design and I did that a while ago. I took a couple years in college. I never finished. I was basically broke mid-twenties, needed money. So I started working in restaurants, got out of design work completely and got into banking, did that for a minute, and then had kids — got married, had kids. So, while I had kids — they were, I think, three, two, and then a baby — while they were playing in the playroom, I'm like, "I need something to do." So I just started kind of looking up these fun things that I could learn and do, and I found freeCodeCamp. And once I found freeCodeCamp and I started doing the responsive web design tutorials in there, I was kind of hooked, because I'm like, this brought my graphic design background into where I could create things and make it interactive. And I was just obsessed with it from that point on.

<i class="timecode">[00:02:33]</i> And I think about a little less than a year into my journey, I listened to Syntax.fm and found Svelte through Scott Tolinsky and switched everything that I'd already learned in React to Sapper, and I never looked back. I just, it was full Svelte from then on out. 

<i class="timecode">[00:02:49]</i> **Ben:** Okay, so why that migration? Like, what's compelling to you about Svelte?

<i class="timecode">[00:02:55]</i> **Brittney:** Yeah, that's a great question. So, the developer experience for me is a huge draw. So going into React, I probably jumped into React too soon, to the point to where I didn't know what was React and what was JavaScript. I'm like, "Where is… What is this componentDidMount?" This was back in class days, where it was just very confusing for me to understand what was happening. When I switched to Svelte, it was more like having the HTML, CSS and JavaScript structure of just a vanilla site, with just kind of a little bit of sugar syntax that just made it click more for me. So I've took myself out. I feel like when I'm writing React, I'm writing more, like, JavaScript. You are writing JavaScript. So in Svelte, I felt like I was actually writing the syntax for the things that you're in scope of. 

<i class="timecode">[00:03:45]</i> **Ben:** Interesting! That actually corresponds a lot with how I feel about Eleventy…

<i class="timecode">[00:03:50]</i> **Brittney:** Oh, yeah!

<i class="timecode">[00:03:50]</i> **Ben:** …which is, I think, a different beast, right? Because Eleventy's not really made for, like, building heavily interactive things. But I like Eleventy because I feel a lot closer to the markup. And it seems like you've got a kind of similar experience with Svelte, just more interactive and dynamic and client-side real-time changes. 

<i class="timecode">[00:04:14]</i> **Brittney:** Yeah! I feel like it provides a lot of, for you out of the box, too, since it's a compiler. Like, you have all access to all of this stuff, but then if you don't use it, it just goes away, which is also nice.

<i class="timecode">[00:04:26]</i> **Ben:** Okay! Very cool! Yeah, so what are we going to be doing today? 

<i class="timecode">[00:04:31]</i> **Brittney:** Yeah! So today, we're going to be building out some components for a component library.

<i class="timecode">[00:04:38]</i> **Ben:** Oooh.

<i class="timecode">[00:04:40]</i> **Brittney:** Yeah! We're going to see if we can get some things working, see if we can check out how SvelteKit works, how Svelte works, do some animations. We'll see what we can get up and running. So do you want to go ahead and get over to kit.svelte.dev…

<i class="timecode">[00:04:54]</i> **Ben:** Yeah!

<i class="timecode">[00:04:54]</i> **Brittney:** …and we'll see how we can get this installed? 

<i class="timecode">[00:04:58]</i> **Ben:** Yes! Let me actually… Folks cannot see my screen right now. They've just seen our faces.

<i class="timecode">[00:05:03]</i> **Brittney:** Oh, yeah!

<i class="timecode">[00:05:03]</i> **Ben:** So there we go! Now folks can see our screen. I put a few links in the chat but, y'all, please go follow Brittney on Twitter.

<i class="timecode">[00:05:13]</i> Oh, actually, we've already got a great question to start off. This is from aathik who wants to know, "I would like to learn Svelte. Should I learn Svelte, or should I jump directly into SvelteKit?" 

<i class="timecode">[00:05:23]</i> **Brittney:** That is a great question. So, I'm gonna say the traditional "it depends," but SvelteKit is kind of becoming, once it's out of beta, I think it's going to be the path forward for everyone to learn Svelte regardless of what you want to do, because it provides all the different rendering options that you're going to get. If you're just learning Svelte and using Svelte, you're just gonna get client-side rendering. So you have to add something else to it, to get, like… before, it was Sapper where we would have server-side rendering or static generation. But SvelteKit provides all of that for you, and it's kind of a nice little boxed package. So I would suggest just learning SvelteKit, just using SvelteKit to learn Svelte. 

<i class="timecode">[00:06:06]</i> **Ben:** Good deal! And that's the journey I'm about to take! I, again, have not learned Svelte, so this is how I'm jumping in is through SvelteKit with you. So, thank you for answering that.

<i class="timecode">[00:06:17]</i> Yeah, so I'm over at kit.svelte.dev. Where should I go now?

<i class="timecode">[00:06:20]</i> **Brittney:** Awesome. So if we scroll down just a little bit, you'll actually see the script that we need there, "npm init svelte@next," and then the "my-app," where it's just gonna be whatever we want to call our application.

<i class="timecode">[00:06:31]</i> **Ben:** Alright.

<i class="timecode">[00:06:32]</i> **Brittney:** So if you want to get your terminal open and however we get set up here.

<i class="timecode">[00:06:37]</i> **Ben:** You got it! I'm just gonna bring these two things side by side. Okay. "npm init svelte@next," and let's call this "sveltekit-component-library." It's a bit of a long name, but it's a good one.

<i class="timecode">[00:06:55]</i> **Brittney:** Yeah!

<i class="timecode">[00:06:55]</i> **Ben:** Very descriptive. 

<i class="timecode">[00:06:56]</i> **Brittney:** Very descriptive, exactly. That's what we need.

<i class="timecode">[00:06:58]</i> So it should walk you through some of the steps of getting started. So it asks you if you want a demo app or if you want a skeleton project. We're gonna do the skeleton project, just so we have a baseline, nothing in it to cloud our…

<i class="timecode">[00:07:11]</i> Then, do not want to use TypeScript. 

<i class="timecode">[00:07:14]</i> **Ben:** Hey, Travis, thanks you for subscribing!

<i class="timecode">[00:07:16]</i> Okay, so no TypeScript today. Just an extra complication for now. 

<i class="timecode">[00:07:20]</i> **Brittney:** Exactly, yeah. Especially for me. You CAN use ESLint, and it's gonna ask you about Prettier, too. It's up to you, but I do use both of them. 

<i class="timecode">[00:07:29]</i> **Ben:** I think, let's just say for the purposes of learning, let's just remove things that could be obtrusive in this case.

<i class="timecode">[00:07:36]</i> **Brittney:** Yeah!

<i class="timecode">[00:07:36]</i> **Ben:** I think in a real world project, I would turn both of those on, but just for demo purposes, let's not deal with that. 

<i class="timecode">[00:07:43]</i> **Brittney:** Absolutely.

<i class="timecode">[00:07:45]</i> So it kind of gives you some next steps there, tells you how to change directory into it, npm install, and then how you could add Git, and then how you can open the server. 

<i class="timecode">[00:07:56]</i> **Ben:** Alright! And I will actually go ahead and copy that, 'cause that looks good. Aaaand now we wait for npm to do its thing. 

<i class="timecode">[00:08:05]</i> **Brittney:** Yeah! Yeah, while npm is doing that… so I wanted to say, a design system is a complete collection of resources. It's not just your component library, but a component library is a piece of that design system. So today, we're just gonna go through, like, building out a few components for a library that would be a part of a design system. A design system would also include things like your style guidelines and your physical designs and documentation. I don't know if we'll get to documentation today. We'll see.

<i class="timecode">[00:08:37]</i> **Ben:** Yeah. Yeah, 'cause you want the guidelines of, like, yes, this is the component you can pull in. But especially, you know, doing the, like, accessibility-type work that I end up doing, like, oftentimes the component is a very helpful part to make sure people have a strong foundation, but then you still have to hold the component correctly. Like, you can't hold it the wrong way. So there's gotta be, like, extra guidance there.

<i class="timecode">[00:09:03]</i> **Brittney:** Yeah, absolutely.

<i class="timecode">[00:09:05]</i> **Ben:** Pop open code as well. And let's go ahead and just run that "`npm run dev -open`" as well. 

<i class="timecode">[00:09:11]</i> **Brittney:** Awesome.

<i class="timecode">[00:09:14]</i> **Ben:** In my browser over on my other monitor!

<i class="timecode">[00:09:18]</i> **Brittney:** Yep, that is always what happens!

<i class="timecode">[00:09:21]</i> **Ben:** That's the streamer way. But it did say `localhost:3000`, so here we go. Cool! I'm gonna just kind of bring this off to the side and we can bring it back in at some point. So I noticed that we've got… this looks like just a simple `<h1>` and paragraph. 

<i class="timecode">[00:09:40]</i> **Brittney:** Exactly, yeah. Just, like, a basic starter. So if you want to pull up the code there, in the `src` folder and the `routes` folder is where you're going to see your `index.svelte` file, and that matches to that home route. That is what you're seeing there on your screen. So, let's start adding some stuff to this. I guess, if you want, we can just delete all of that out of there.

<i class="timecode">[00:10:03]</i> **Ben:** Okay.

<i class="timecode">[00:10:06]</i> **Brittney:** 'Cause we don't need any of that. And I thought, instead of us doing — I love CSS custom properties, so instead of us doing this crazy list of CSS variables and taking all this time, that we could use Open Props—

<i class="timecode">[00:10:20]</i> **Ben:** Ooh! Okay!

<i class="timecode">[00:10:21]</i> **Brittney:** —to pull in. So Adam Argyle has this Open Props library, and I did not mention it to you before, sorry. open-props.style, I think, is the thing. But we're gonna use that in our app to hopefully use the CSS custom properties. If you could actually grab that import right there, and we'll throw that in something in just a minute.

<i class="timecode">[00:10:45]</i> **Ben:** Okay!

<i class="timecode">[00:10:45]</i> **Brittney:** So back over in the code… on your index page, I mean, you could just save that index page with nothing on it for right now.

<i class="timecode">[00:10:54]</i> **Ben:** Okay!

<i class="timecode">[00:10:54]</i> **Brittney:** And then in the file explorer, we want to create a new file. So in the routes directory, create a new file: __layout.svelte.

<i class="timecode">[00:11:09]</i> **Ben:** Is this a magic name? Like, the fact that we've named it something means something here? 

<i class="timecode">[00:11:14]</i> **Brittney:** Exactly, yes. So this is a magic route in SvelteKit. This will wrap your entire application in a layout file. So it allows you to create a layout that could also be scoped. If you wanted to reset it and you're in a folder, you can do a layout reset file.

<i class="timecode">[00:11:32]</i> **Ben:** Ooooh!

<i class="timecode">[00:11:33]</i> **Brittney:** That will override that.

<i class="timecode">[00:11:35]</i> So here is another magic thing about Svelte that we need. We need a… If you're thinking about a layout file, you want to probably have, like, a `<header>` and a `<footer>` maybe, but for now, let's just do a `<main>` tag. So a `<main>` tag in there, and then what you need in SvelteKit to… put your children in their place is a `<slot>`.

<i class="timecode">[00:12:00]</i> **Ben:** Alright!

<i class="timecode">[00:12:00]</i> **Brittney:** I know, it's a horrible joke! 

<i class="timecode">[00:12:03]</i> **Ben:** Goodness. Okay. Or, is it self-closing? 

<i class="timecode">[00:12:06]</i> **Brittney:** It is self-closing if you would like, unless you needed to… yeah, there you go. So, the `<slot />` there, and then we can open up just a normal CSS `<style>` tag wherever you would like, on top or below. If we had… You have to do it outside of the markup. Yeah, there you go. 

<i class="timecode">[00:12:23]</i> **Ben:** There we go. Okay. Oh, yeah, because Svelte… from what little I know about Svelte, right, like, it separates these things by design, right? 

<i class="timecode">[00:12:32]</i> **Brittney:** Exactly!

<i class="timecode">[00:12:32]</i> **Ben:** Okay.

<i class="timecode">[00:12:32]</i> **Brittney:** And you can order those with Prettier so, like, usually my styles are on the bottom.

<i class="timecode">[00:12:38]</i> **Ben:** Okay!

<i class="timecode">[00:12:38]</i> **Brittney:** But you can set the order with Prettier however you want, but yours may auto-format it somehow.

<i class="timecode">[00:12:46]</i> So we have the `<main>` tag. We have the `<slot>`, which is basically just telling Svelte where to put the rest of the children, so any other route is going to be where that `<slot>` is. So right now, our routes are just sitting inside `<main>`.

<i class="timecode">[00:13:00]</i> Right here, we want to import the thing you just copied. Yes. So… okay. We have Open Props now imported into our styles, and then we could probably just go ahead and create some…

<i class="timecode">[00:13:21]</i> Let's get something on the screen so we can see. So in the index file, let's do an `<h1>`. And we'll say "Component Library."

<i class="timecode">[00:13:32]</i> **Ben:** Yeah.

<i class="timecode">[00:13:33]</i> **Brittney:** Yeah, or something.

<i class="timecode">[00:13:39]</i> **Ben:** Okay. Now, should I go back to the browser? Or are we adding more? 

<i class="timecode">[00:13:45]</i> **Brittney:** We can add some styles to it and see if that works. That's what I was gonna suggest doing. 

<i class="timecode">[00:13:52]</i> **Ben:** Sounds good. 

<i class="timecode">[00:13:53]</i> **Brittney:** I'm gonna get Open Props up over here so I can see what we need.

<i class="timecode">[00:13:59]</i> **Ben:** Yeah.

<i class="timecode">[00:14:00]</i> **Brittney:** So…

<i class="timecode">[00:14:06]</i> In that code block, if you want to, like, open a `<style>` tag again, we could, like, change the `<h1>` and I can show you another really cool thing about SvelteKit. So we can open another `<style>` block. 

<i class="timecode">[00:14:17]</i> **Ben:** Inside `index.svelte`?

<i class="timecode">[00:14:21]</i> **Brittney:** Yes, in that file, yep. And do an "`h1`." And then let's do `font-size`… and then you're gonna use `var(--font-size-fluid-3)` — fluid, F-L-U-I-D, dash 3. 

<i class="timecode">[00:14:50]</i> **Ben:** Okay! And this is coming from Open Props, so this is a set of—

<i class="timecode">[00:14:59]</i> **Brittney:** Oh, we're gonna hope that it's coming from Open Props! So, I wanted to see if it was gonna work, so we need to see the browser and see if that worked for us.

<i class="timecode">[00:15:07]</i> **Ben:** Let me save this and come back here. It looks like, that's pretty much—

<i class="timecode">[00:15:12]</i> **Brittney:** it looks like it is!

<i class="timecode">[00:15:13]</i> **Ben:** Yeah! If I inspect the styles — that's gonna pop up over here — we can see that we've got "`font-size: var(--font-size-fluid-3)`." 

<i class="timecode">[00:15:23]</i> **Brittney:** And you can actually see, right there on your `<h1>`, that the class has been hashed. So that's the other cool thing about SvelteKit, is each component has their own scoped classes. So we just used the "`h1`" selector—

<i class="timecode">[00:15:36]</i> **Ben:** Ohhh!

<i class="timecode">[00:15:36]</i> **Brittney:** —but that "`h1`" is not gonna bleed out of that component. It's gonna be only in that component that those styles are gonna be applied. 

<i class="timecode">[00:15:43]</i> **Ben:** Got it, so if I had had, like, an `<h1>` here — and you shouldn't have multiple `<h1>`s on a page. This is a sin, and I will type that out.

<i class="timecode">[00:15:49]</i> **Brittney:** Just a test.

<i class="timecode">[00:15:51]</i> **Ben:** This is a sin.

<i class="timecode">[00:15:52]</i> <i class="brackets">[Brittney laughs]</i>

<i class="timecode">[00:15:54]</i> Despite the fact that, like, I had put just "`h1`" in my styles, those styles applied very specifically to this `<h1>` and not to all `<h1>`s. So that's very cool.

<i class="timecode">[00:16:06]</i> **Brittney:** Yeah!

<i class="timecode">[00:16:10]</i> Okay, so now we have Open Props working. The other thing that we would probably want to do is to create some sort of global style. So you can do global styles in this `<style>` tag, but it's much easier to do it in a style… like, a CSS file.

<i class="timecode">[00:16:28]</i> **Ben:** Okay.

<i class="timecode">[00:16:28]</i> **Brittney:** Because if you do it in the `<style>` tag, you have to explicitly tell Svelte that you want it to go global because it does that scoped styling. So we could create a new "`styles`" folder somewhere in our file explorer there.

<i class="timecode">[00:16:42]</i> **Ben:** Okay! Where do you like to put this, typically? 

<i class="timecode">[00:16:45]</i> **Brittney:** So, the convention in Svelte is to have a "`lib`" folder. So "`src`," we need to create a new folder called "`lib`." 

<i class="timecode">[00:16:52]</i> **Ben:** Like, inside "`src`." 

<i class="timecode">[00:16:53]</i> **Brittney:** Inside "`src`," yep. L-I-B, "`lib`" folder. And then inside of that, we can just create a `styles.css` file.

<i class="timecode">[00:17:05]</i> Yes, Zach, that is actually exactly right. That "`:global()`," and then inside of those parentheses is where you would put whatever you wanted to style globally. But I kind of… That's how you would do it if you were doing it in the `<style>` tag.

<i class="timecode">[00:17:19]</i> **Ben:** Mmm.

<i class="timecode">[00:17:19]</i> **Brittney:** But in here we can style everything that we want to, and then import it in and it will just be global. So let's use the "`body`" tag. And do "`font-family`." And I think we'll use Noto Sans. 

<i class="timecode">[00:17:39]</i> **Ben:** Ooh, I wonder if I have Noto Sans.

<i class="timecode">[00:17:42]</i> **Brittney:** Open Props provides it.

<i class="timecode">[00:17:43]</i> **Ben:** Oohhh, okay!

<i class="timecode">[00:17:46]</i> **Brittney:** So I want to see, did it change over in the browser for you? 

<i class="timecode">[00:17:50]</i> **Ben:** Not yet. We haven't done anything with the stylesheet yet, I think. We haven't, like, imported it. 

<i class="timecode">[00:17:56]</i> **Brittney:** Oh, yeah, that's right. So, okay, in `layout.svelte`, let's import that and make sure that it's working.

<i class="timecode">[00:18:01]</i> **Ben:** Okay.

<i class="timecode">[00:18:01]</i> **Brittney:** So we need a `<script>` tag. 

<i class="timecode">[00:18:04]</i> **Ben:** Ahh, okay.

<i class="timecode">[00:18:06]</i> **Brittney:** I don't know if it would work like that. You could try to do that. Try that real quick and see if that works. I don't think you're gonna be able to use — you're gonna have to do some absolute-pathing, 'cause you can't use the alias. 

<i class="timecode">[00:18:18]</i> **Ben:** Let's not, then. So, okay., where in here do you typically put your `<script>` tag?

<i class="timecode">[00:18:22]</i> **Brittney:** I put mine at the top most of the time. Like, it's where the logic for the things usually lives.

<i class="timecode">[00:18:31]</i> And we'll import. And… so, SvelteKit provides, out of the box for you, some default aliases, and aliases are things where you can reference a path without having to go to it absolutely. So by default, it's a dollar sign. I usually change mine to `@`s, but we won't go through all the config for that today.

<i class="timecode">[00:18:54]</i> **Ben:** Sure.

<i class="timecode">[00:18:54]</i> **Brittney:** So the "`$lib`" and "`/styles.svelte`" — or "`styles.css`," sorry. 

<i class="timecode">[00:19:01]</i> **Ben:** Okay! And now… there we go!

<i class="timecode">[00:19:04]</i> **Brittney:** Is it working?

<i class="timecode">[00:19:05]</i> **Ben:** It's working!

<i class="timecode">[00:19:06]</i> **Brittney:** Yaaay! Okay, perfect. So, that's where we would put all of our global styles if we were gonna go through all that. I just wanted to see if we could get the fonts in there. So we have Noto Sans installed globally in our `styles.css` file, we have Open Props imported in a `<style>` tag, and then on our index file, we're just showing an `<h1>`.

<i class="timecode">[00:19:27]</i> Let's start building out some components. So if you were building out a component library, what are some things you might want to create?

<i class="timecode">[00:19:36]</i> **Ben:** Always buttons.

<i class="timecode">[00:19:38]</i> **Brittney:** Always buttons?

<i class="timecode">[00:19:38]</i> **Ben:** Always buttons. Everything is a fancy button. 

<i class="timecode">[00:19:43]</i> **Brittney:** Alright, so we will do a button first. I want to create something that will kind of go together—

<i class="timecode">[00:19:50]</i> **Ben:** Okay!

<i class="timecode">[00:19:50]</i> **Brittney:** —but we do have a button in here. So in that "lib" folder, let's create a "components" directory.

<i class="timecode">[00:19:57]</i> **Ben:** You got it!

<i class="timecode">[00:20:02]</i> **Brittney:** And then we'll create a new file and you can name it "`button.svelte`." You can do whatever convention you want with capitalization. Yup, perfect. And so in here, I want to start out, just do a normal button. 

<i class="timecode">[00:20:17]</i> **Ben:** I guess, yeah. 

<i class="timecode">[00:20:19]</i> **Brittney:** And this is what I love about Svelte, is that it's just HTML. And so inside of the `<button>`, we're gonna do a `<slot>` because that's where we want to put our children. And that's it, really…

<i class="timecode">[00:20:36]</i> **Ben:** Okay!

<i class="timecode">[00:20:37]</i> **Brittney:** I mean, that is a button component, but we probably want our button component to have some props, right?

<i class="timecode">[00:20:42]</i> **Ben:** Yeah!

<i class="timecode">[00:20:43]</i> **Brittney:** So, what is a button component if it can't do anything? So in a `<script>` tag, we will give it some properties that our button could have. 

<i class="timecode">[00:20:56]</i> **Ben:** Sounds good! So that would be… like, it would have, like, an `onclick`, right?

<i class="timecode">[00:21:00]</i> **Brittney:** So, yes, it would have an onclick. You don't have to do that in the `<script>` tag, though. I will show you that in just a minute.

<i class="timecode">[00:21:10]</i> **Ben:** Okay!

<i class="timecode">[00:21:10]</i> **Brittney:** So, some properties that we might want to give a button component are, like, a variant maybe.

<i class="timecode">[00:21:15]</i> **Ben:** Mmmm!

<i class="timecode">[00:21:15]</i> **Brittney:** So we could do a variant. We could give it a type. We could give it… what are some other things that we would put on a button?

<i class="timecode">[00:21:24]</i> **Ben:** "Disabled" is another one.

<i class="timecode">[00:21:26]</i> **Brittney:** Yeah, so we could do those props. So we would just declare these like you're in JavaScript, so "`let variant = 'default'`."

<i class="timecode">[00:21:39]</i> **Ben:** Okay?

<i class="timecode">[00:21:40]</i> **Brittney:** Okay. And then "`let disabled = false`."

<i class="timecode">[00:21:46]</i> Let's just go with those for right now. And then we need to export these. So this is the concept of props in Svelte. If they are just `let`-declared variables, they are internal to the component. But to access them from the outside world, you need to export them, which kind of follows that module syntax. So we need "`export`," and then you can open some curly braces. And you can also do this in front of the "`let`," but this is how I like to do it when you have multiple properties. 

<i class="timecode">[00:22:14]</i> Yep! So we have that. And then on our button, in the markup, we actually need to add these things. So the `onclick` is gonna go here but in Svelte, it's "`on:click`."

<i class="timecode">[00:22:28]</i> **Ben:** Okay.

<i class="timecode">[00:22:30]</i> **Brittney:** Okay, and then we do an open curly bracket for each of those properties.

<i class="timecode">[00:22:36]</i> **Ben:** Oh, I see. Like this, and then "`variant`"…

<i class="timecode">[00:22:41]</i> **Brittney:** Yep.

<i class="timecode">[00:22:41]</i> **Ben:** And then "`disabled`."

<i class="timecode">[00:22:43]</i> **Brittney:** Yes.

<i class="timecode">[00:22:44]</i> **Ben:** So… wait, so, is this just gonna say, like, `variant="default"`? Like, it's just gonna put, like, a "`variant`" attribute on here? Or do we need to do something fancier to, like, say it's a class or a data attribute or something? 

<i class="timecode">[00:22:58]</i> **Brittney:** We would need to specify if we wanted it to be a `class` attribute. What that's going to do is give it a property, a "`variant`" property, so we could specify — and if we're using this component, we would basically pass `variant` equal to "`primary`," or `variant` equal to…

<i class="timecode">[00:23:13]</i> **Ben:** Mm!

<i class="timecode">[00:23:13]</i> **Brittney:** So we would need to pass something else to it. But if we wanted it to be a class, we would say, like, `class` is equal to `variant`.

<i class="timecode">[00:23:23]</i> **Ben:** Got it. 'Cause yeah, I'm struggling to figure out, like, when this turns into markup, like, what happens to `variant` here? Like, "`disabled`" seems fairly intuitive to me, like the "`disabled`" attribute would be set to the value of "`disabled`" here. But this would be, like, `variant="default"`, is what that would do, right? 

<i class="timecode">[00:23:42]</i> **Brittney:** Yeah, and so you would need some styles that would go with that default button. So…

<i class="timecode">[00:23:50]</i> I didn't think about how to do this. We shouldn't have started with this component!

<i class="timecode">[00:23:53]</i> **Ben:** Oh, no! Oh, no!

<i class="timecode">[00:23:54]</i> **Brittney:** That's okay! So…

<i class="timecode">[00:24:00]</i> Yeah, I'm completely lost right now. 

<i class="timecode">[00:24:02]</i> **Ben:** Do we want to start with a different component? Would that be a better place to start, perhaps? 

<i class="timecode">[00:24:09]</i> **Brittney:** So I think if you do the class, you can… Trying to remember how that goes! Put, in front of variant, put class, colon. 

<i class="timecode">[00:24:21]</i> **Ben:** Like this?

<i class="timecode">[00:24:23]</i> **Brittney:** Yeah, and take the curly braces off. That's how we do it.

<i class="timecode">[00:24:28]</i> **Ben:** Okay.

<i class="timecode">[00:24:29]</i> **Brittney:** And then in a `<style>` tag at the bottom. I just… that put me on the spot, 'cause I was like, I was not prepared for that.

<i class="timecode">[00:24:39]</i> **Ben:** I'm sorry!

<i class="timecode">[00:24:40]</i> **Brittney:** I think this is right. So if you do "`.default`" now, like you're styling the "`default`" class…

<i class="timecode">[00:24:47]</i> **Ben:** Yeah.

<i class="timecode">[00:24:47]</i> **Brittney:** Oh, it's gonna yell at you, 'cause you don't have…

<i class="timecode">[00:24:54]</i> Oh, 'cause you don't have anything inside of it right now. So let's just do "`background-color`," and let's use… "`var(--teal-9)`."

<i class="timecode">[00:25:11]</i> Is it still yelling at…? "Unused CSS property." Okay, so instead of "`variant`," let's just call it "`default`."

<i class="timecode">[00:25:21]</i> **Ben:** Like… oh, I'm sorry, here? 

<i class="timecode">[00:25:24]</i> **Brittney:** "`default`" there, and then put equal to "`variant`." 

<i class="timecode">[00:25:31]</i> **Ben:** Equal…

<i class="timecode">[00:25:32]</i> **Brittney:** In curly braces.

<i class="timecode">[00:25:33]</i> **Ben:** Okay.

<i class="timecode">[00:25:37]</i> Well, that seems to have solved this error! Okay! 

<i class="timecode">[00:25:41]</i> **Brittney:** Okay. Let's go over to `index.svelte` and see if we can import our button and see if we can use it. 

<i class="timecode">[00:25:47]</i> **Ben:** Okay, so I first have to open up a `<script>` tag, I'm guessing, to import my…?

<i class="timecode">[00:25:52]</i> **Brittney:** Correct, yep!

<i class="timecode">[00:25:53]</i> **Ben:** Okay. 

<i class="timecode">[00:25:54]</i> **Brittney:** So "import button from," and we'll do "`$lib/components/button.svelte`." And you do have to put the "`.svelte`" on it.

<i class="timecode">[00:26:06]</i> **Ben:** Okay. And then here, let's do… It's probably capital-B "Button" in this case, and then…

<i class="timecode">[00:26:16]</i> **Brittney:** Yes, it is. And then you can put some text in there. Since we put that `<slot>` in there and it's gonna… Yep. 

<i class="timecode">[00:26:23]</i> **Ben:** Alright. Let's see…

<i class="timecode">[00:26:23]</i> **Brittney:** Let's see if that worked.

<i class="timecode">[00:26:25]</i> **Ben:** Heyyy! Okay, cool.

<i class="timecode">[00:26:27]</i> **Brittney:** We got it??

<i class="timecode">[00:26:28]</i> **Ben:** We got a teal button. 

<i class="timecode">[00:26:28]</i> **Brittney:** It's not a very pretty button—

<i class="timecode">[00:26:30]</i> **Ben:** Sure.

<i class="timecode">[00:26:30]</i> **Brittney:** —but it's a button. Okay, let's move on from button for a minute before I freak out!

<i class="timecode">[00:26:35]</i> **Ben:** No worries. Sorry for putting you on the spot like that. 

<i class="timecode">[00:26:38]</i> **Brittney:** Oh, absolutely not. A button should have been, like, the first thing that came to my mind, but I was creating this, like, thing in my head that I wanted to go through.

<i class="timecode">[00:26:45]</i> **Ben:** Oh, I'm sorry!

<i class="timecode">[00:26:46]</i> **Brittney:** Let's create a card component. It's something that I think—

<i class="timecode">[00:26:50]</i> **Ben:** Mmm!

<i class="timecode">[00:26:50]</i> **Brittney:** —like, had, like, pieces in it that people like to do.

<i class="timecode">[00:26:53]</i> So let's do card.svelte, yep. And then in here, we're going to group a couple of things.

<i class="timecode">[00:27:01]</i> **Ben:** Okay!

<i class="timecode">[00:27:01]</i> **Brittney:** We're going to group a… so we could just do a `<div>`, because it doesn't really have any semantic meaning. It doesn't need anything on it. And inside of this `<div>`, we're actually going to create two slots, but we're gonna learn something else here. So we're gonna create a slot with a name — a named slot.

<i class="timecode">[00:27:20]</i> **Ben:** Okay.

<i class="timecode">[00:27:21]</i> **Brittney:** So the first `<slot>` is gonna have `name="title"`. And the second `<slot>` is going to have `name="content"`.

<i class="timecode">[00:27:33]</i> **Ben:** Alright.

<i class="timecode">[00:27:34]</i> **Brittney:** This allows you to put separate children in their place. So now we're gonna have a space for title. And what this allows us to do is extract the markup. So we're not specifying if it's an `<h2>`, an `<h3>`, a paragraph, whatever it is, inside the child. The child doesn't need to know about it.

<i class="timecode">[00:27:52]</i> **Ben:** Mm.

<i class="timecode">[00:27:52]</i> **Brittney:** Or inside the component, the component doesn't need to know about it. But here we can take it out of context and we could put whatever markup we need—

<i class="timecode">[00:28:01]</i> **Ben:** Mmm.

<i class="timecode">[00:28:01]</i> **Brittney:** —around that `<slot>`.

<i class="timecode">[00:28:03]</i> **Ben:** Okay.

<i class="timecode">[00:28:04]</i> **Brittney:** So we have the `<slot>`, and then… that's it for the card component. That's all it really needs right now.

<i class="timecode">[00:28:14]</i> **Ben:** Sounds good.

<i class="timecode">[00:28:14]</i> **Brittney:** Next, I wanna create a checkbox component.

<i class="timecode">[00:28:21]</i> **Ben:** Nope, not "`.component`." "`.svelte`." There we go! 

<i class="timecode">[00:28:27]</i> **Brittney:** Alright, so in the checkbox component, we're going to wrap a `<label>` around it. I mean, that was fine. But you have a `<label>`, and then we're gonna do `<input type="checkbox" />`. And after the `<label>`, we'll just do the `<slot>`. Exactly. You got the hang of this.

<i class="timecode">[00:28:48]</i> **Ben:** Alright!

<i class="timecode">[00:28:49]</i> **Brittney:** So, we need some properties on the checkbox, though.

<i class="timecode">[00:28:53]</i> **Ben:** Yes.

<i class="timecode">[00:28:53]</i> **Brittney:** So we're gonna create that `<script>` tag.

<i class="timecode">[00:29:01]</i> And in the `<script>` tag, we want to have an ID, probably. 

<i class="timecode">[00:29:05]</i> **Ben:** Okay, so "`let id`." 

<i class="timecode">[00:29:08]</i> **Brittney:** So in Svelte, you can do `null`, if you want something to be optional. But we probably don't want ID to be optional, so I want there to be kind of some default there. So I would just probably use `"checkbox"` — a string of `"checkbox"` — as a default…

<i class="timecode">[00:29:23]</i> **Ben:** Okay.

<i class="timecode">[00:29:23]</i> **Brittney:** …so that there is an ID on it. And then we need a "`checked`" variable, which is a boolean, and we're just gonna set that to false by default.

<i class="timecode">[00:29:35]</i> **Ben:** Sounds good!

<i class="timecode">[00:29:36]</i> **Brittney:** And then we need to export those so that they're available outside. 

<i class="timecode">[00:29:41]</i> **Ben:** Sounds good! 

<i class="timecode">[00:29:43]</i> **Brittney:** Okay! And then we need to add those onto our input. So we need… yep, "`checked`," and we probably want an "`aria-checked={checked}`" also. 

<i class="timecode">[00:29:54]</i> **Ben:** I think if you're using the native checkbox, just using the "`checked`" attribute is sufficient.

<i class="timecode">[00:30:00]</i> **Brittney:** Will that work?

<i class="timecode">[00:30:01]</i> **Ben:** Yeah, yeah.

<i class="timecode">[00:30:01]</i> **Brittney:** So, we also need two other things. So we need an `onchange`, so space, "`on:change`." 

<i class="timecode">[00:30:09]</i> **Ben:** Ooh, hello. My emoji keyboard was kicking in there. Alright, let me shut down Rocket. 

<i class="timecode">[00:30:14]</i> **Brittney:** And we need one more piece of Svelte magic here. We need a "`bind:checked`."

<i class="timecode">[00:30:21]</i> **Ben:** Bind…

<i class="timecode">[00:30:21]</i> **Brittney:** And what this is gonna do is bind the value of "`checked`." And you don't need the equals quotes. Yep, just that. And so it's binding it to the value of "`checked`," which is a boolean which is gonna flip. And then we'll also bind it in another component in just a minute. So this is our checkbox component, 

<i class="timecode">[00:30:42]</i> **Ben:** It's giving me a little red thing that says, "Attributes need to be unique." Do I just need to nuke the "`{checked}`" here?

<i class="timecode">[00:30:49]</i> **Brittney:** Oh, yeah, "`{checked}`" doesn't need to be there, sorry.

<i class="timecode">[00:30:52]</i> **Ben:** Yeah.

<i class="timecode">[00:30:52]</i> **Brittney:** See, sometimes the linting is very nice. 

<i class="timecode">[00:30:55]</i> **Ben:** Yeah! Like, you mentioned the dev tooling and, like, I see it. Very cool.

<i class="timecode">[00:31:02]</i> So this says we've got an input with type `"checkbox"` that's going to use the ID from the script, which is possibly more or less a prop that could be passed down from the consumer.

<i class="timecode">[00:31:11]</i> **Brittney:** Exactly.

<i class="timecode">[00:31:12]</i> **Ben:** It's gonna have a change behavior, and it's got a value of… like, it's got an attribute of "`checked`," which is set to this "`checked`," but the bind means that anytime this attribute changes, it changes in our script as well?

<i class="timecode">[00:31:27]</i> **Brittney:** Yes, so it's gonna bind that value of "`checked`." So if it's false, it's gonna bind the value. And then wherever we use the component, we're going to bind the variable we want—

<i class="timecode">[00:31:38]</i> **Ben:** Got it.

<i class="timecode">[00:31:38]</i> **Brittney:** —to that `false`/`true` flip.

<i class="timecode">[00:31:41]</i> So we're gonna create something that we can use the card component and the checkbox component together, which is a todo list.

<i class="timecode">[00:31:48]</i> **Ben:** Okay!

<i class="timecode">[00:31:49]</i> **Brittney:** Like, obvious, like, first thing for… I mean, it's not really a component library thing. But let's create a `todos.svelte` component just so we can see how we use these components together. 

<i class="timecode">[00:32:01]</i> **Ben:** You got it! 

<i class="timecode">[00:32:04]</i> **Brittney:** Okay, so `todos.svelte`. We've got to import our card and our checkbox. 

<i class="timecode">[00:32:12]</i> **Ben:** "`import card from`" — look at that! "`components`…" 

<i class="timecode">[00:32:19]</i> **Brittney:** Or it's in the same…

<i class="timecode">[00:32:20]</i> **Ben:** Ohhhh!

<i class="timecode">[00:32:21]</i> **Brittney:** …file, so it might be easier for you to just do like that. Yeah, there you go. 

<i class="timecode">[00:32:26]</i> **Ben:** Okay. I like that a lot better, yep!

<i class="timecode">[00:32:34]</i> **Brittney:** Alright. So, for right now, we'll leave the `<script>` tag alone and go down to the markup. So we need to start using that card component. We created the card component with a `<slot>`. So we already have an `<h1>` on our page, so let's do it with an `<h2>`. So we need to open the card like a component.

<i class="timecode">[00:32:53]</i> **Ben:** Mm.

<i class="timecode">[00:32:54]</i> **Brittney:** Yep. And then an `<h2>`, and give the `<h2>` an attribute of "`name`" — or, I'm sorry, of `slot="title"`. 

<i class="timecode">[00:33:02]</i> **Ben:** Ah, okay!

<i class="timecode">[00:33:03]</i> **Brittney:** So we're telling it to use the slot "`title`." And then we can do a "Done" — or a "Todo" column. I'm sorry, I was looking at the…

<i class="timecode">[00:33:14]</i> So, "Todo." And then do a "content" block. 

<i class="timecode">[00:33:20]</i> **Ben:** Okay, so what does that look like again?

<i class="timecode">[00:33:23]</i> **Brittney:** What would we do for a list of todos? I mean, we're gonna need a `<ul>`. 

<i class="timecode">[00:33:28]</i> **Ben:** Mhmm.

<i class="timecode">[00:33:29]</i> **Brittney:** And then our `<ul>` is actually going to be the `slot="content"`. And then we're going to loop over some todos. 

<i class="timecode">[00:33:41]</i> **Ben:** Got it. Cool.

<i class="timecode">[00:33:44]</i> **Brittney:** Yeah. So do you want to create the todos first or do you want to do the block first? 

<i class="timecode">[00:33:50]</i> **Ben:** Let's… create the todos, I think. 

<i class="timecode">[00:33:56]</i> **Brittney:** Okay! Yeah, let's just create some initial todos. Up in that script block, let's go and just say "`let todos =`". And we're gonna do an array, and inside of the array, let's do some objects so we can give them some values.

<i class="timecode">[00:34:12]</i> **Ben:** Okay!

<i class="timecode">[00:34:13]</i> **Brittney:** So, like, an "`isDone`" or…

<i class="timecode">[00:34:19]</i> And we'll set them to `false`. And then some "`text`" or "`name`" or…

<i class="timecode">[00:34:23]</i> **Ben:** Yeahhh.

<i class="timecode">[00:34:24]</i> **Brittney:** You name it however you want. "Do the stream."

<i class="timecode">[00:34:31]</i> **Ben:** "Greet the chat." Got to do that blatant pandering! How's the chat doing? How's everyone feeling today?

<i class="timecode">[00:34:39]</i> And then… "Continue to do the stream." There we go.

<i class="timecode">[00:34:46]</i> **Brittney:** Okay, awesome. So we have some initial todos here. Awesome.

<i class="timecode">[00:34:50]</i> Tired today — oh, no!

<i class="timecode">[00:34:53]</i> Okay, so now we are going to go back down into our markup and where that `<ul>` is, inside of the `<ul>` we're going to do what's called an "each" block. And this is some templating sugar syntax that Svelte gives us.

<i class="timecode">[00:35:04]</i> **Ben:** Okay.

<i class="timecode">[00:35:04]</i> **Brittney:** So inside of curly brackets, we'll do pound or hashtag.

<i class="timecode">[00:35:10]</i> **Ben:** Ooh.

<i class="timecode">[00:35:10]</i> **Brittney:** Depends on what generation you're from.

<i class="timecode">[00:35:11]</i> **Ben:** Ooh!!!

<i class="timecode">[00:35:13]</i> **Brittney:** "`#each as`" — yeah! So, "`#each todos`." 

<i class="timecode">[00:35:17]</i> **Ben:** "`#each todos as todo`"? Like this?

<i class="timecode">[00:35:20]</i> **Brittney:** Exactly!

<i class="timecode">[00:35:21]</i> **Ben:** Okay. 

<i class="timecode">[00:35:22]</i> **Brittney:** That was pretty intuitive, right!

<i class="timecode">[00:35:24]</i> **Ben:** Okay! Alright!

<i class="timecode">[00:35:25]</i> **Brittney:** So, "`#each todos as todo`." And then we're going to, inside of here, use an `<li>` to get our list item.

<i class="timecode">[00:35:33]</i> **Ben:** And then…

<i class="timecode">[00:35:36]</i> **Brittney:** And we can just do "`todo.text`" in curly braces.

<i class="timecode">[00:35:46]</i> **Ben:** Alright.

<i class="timecode">[00:35:47]</i> **Brittney:** Is that showing up? 

<i class="timecode">[00:35:49]</i> **Ben:** Let's… Oh, I don't think we've actually used our…

<i class="timecode">[00:35:52]</i> **Brittney:** Oh, we haven't imported it. Okay, so in `index.svelte`, let's import the todos.

<i class="timecode">[00:36:03]</i> **Ben:** And then… we're just gonna do this. And then I don't think I need to do anything in here, so it can be, like, self-closing?

<i class="timecode">[00:36:13]</i> **Brittney:** It can be some closing, yes. 

<i class="timecode">[00:36:15]</i> **Ben:** Okay. Heyyyy! 

<i class="timecode">[00:36:17]</i> **Brittney:** Sweet. Okay, so we have each list item going through there. Okay, so let's go back over to todos and finish this out. So, we are going to create another column. So underneath the `<Card>`, do another `<Card>`. You can copy that whole block if you want. 

<i class="timecode">[00:36:37]</i> **Ben:** Alright. Oh, and this is for the done ones, right? 

<i class="timecode">[00:36:41]</i> **Brittney:** And we're gonna do a "Done" column, so do "Done" instead of "Todos" there, yep. And then what we need to do to get these correct is to filter that list.

<i class="timecode">[00:36:53]</i> **Ben:** Mmm!

<i class="timecode">[00:36:54]</i> **Brittney:** So in that first "`each`" block "`todos`," we're going to change that to "`todos.filter()`."

<i class="timecode">[00:37:03]</i> **Ben:** Okay, and that's up here? You said, like, this one up here? 

<i class="timecode">[00:37:07]</i> **Brittney:** In the top one, yeah. We're gonna filter both of them, but we're just going to do the opposite in the other one. So filter, todo, and then an arrow function.

<i class="timecode">[00:37:16]</i> **Ben:** Mmmm. And then it's going to be, like, "`!todo.isDone`."

<i class="timecode">[00:37:21]</i> **Brittney:** Yeah, exactly. "isDone."

<i class="timecode">[00:37:22]</i> **Ben:** And then here…

<i class="timecode">[00:37:24]</i> **Brittney:** Exactly!

<i class="timecode">[00:37:25]</i> **Ben:** This is basically just letting me use JavaScript in HTML. Love it!

<i class="timecode">[00:37:31]</i> **Brittney:** It is, exactly. And that's one of the nice little things about the Svelte syntax, that it lets you kind of just do these things.

<i class="timecode">[00:37:39]</i> Okay, so we have the filtered blocks and we have that. We need to actually use our checkbox now. So we imported the checkbox, correct? 

<i class="timecode">[00:37:48]</i> **Ben:** Yes, we have it up top. 

<i class="timecode">[00:37:50]</i> **Brittney:** Okay, so in that list item, we can actually wrap "`todo.text`" in the `<Checkbox>`.

<i class="timecode">[00:37:55]</i> **Ben:** Okay. I'm gonna break these down to new lines.

<i class="timecode">[00:37:58]</i> **Brittney:** Yeah, absolutely.

<i class="timecode">[00:38:00]</i> **Ben:** `<Checkbox>`… 

<i class="timecode">[00:38:03]</i> Bring you up. And then is there anything else we need to do to make this sufficient? 

<i class="timecode">[00:38:09]</i> **Brittney:** Yeah! So on `<Checkbox>`, we need to bind "`checked`" — so we're passing these properties again — to "`todo.isDone`." So "`bind:checked`" equal, and then curly braces, to "`todo.isDone`."

<i class="timecode">[00:38:31]</i> **Ben:** Okay.

<i class="timecode">[00:38:31]</i> **Brittney:** And then we'll give it an ID of `todo.id`.

<i class="timecode">[00:38:34]</i> **Ben:** We need to add that…

<i class="timecode">[00:38:37]</i> **Brittney:** We don't have an ID, so what we can do is you can do a comma after "`todo`" in the "`each`" block. 

<i class="timecode">[00:38:45]</i> **Ben:** A comma after… oh… oh! Okay. 

<i class="timecode">[00:38:48]</i> **Brittney:** Oh, not there, I'm sorry. That's that's inside the function.

<i class="timecode">[00:38:51]</i> **Ben:** Ohh.

<i class="timecode">[00:38:51]</i> **Brittney:** In the last "`todo`" there, where you're calling… yeah. And then an "`index`," and then you could use the index as the ID there.

<i class="timecode">[00:38:59]</i> **Ben:** Very cool! I feel like if this were a React tutorial, like, someone would be yelling at me, like, "Don't do this. Don't make the, like, index your key." 

<i class="timecode">[00:39:10]</i> **Brittney:** And I believe you can actually even call it "`id`." I think Svelte just automatically creates it as an index, even if it's not named an "`index`."

<i class="timecode">[00:39:19]</i> **Ben:** Oh, okay. So, wait, like I can just do… Sorry, so I could say…?

<i class="timecode">[00:39:25]</i> **Brittney:** Instead of "`index`" up top, like, you could say "`id`" and then just use it as an ID. 

<i class="timecode">[00:39:34]</i> **Ben:** Okay, like this? 

<i class="timecode">[00:39:37]</i> **Brittney:** You had in`dex there before.

<i class="timecode">[00:39:39]</i> **Ben:** Oh, I see.

<i class="timecode">[00:39:40]</i> **Brittney:** You still have to have "`id`" there — like, comma, `id`. 

<i class="timecode">[00:39:44]</i> **Ben:** Oh, okay! Here.

<i class="timecode">[00:39:45]</i> **Brittney:** Yeah.

<i class="timecode">[00:39:46]</i> **Ben:** So this is what you're saying, I think. 

<i class="timecode">[00:39:48]</i> **Brittney:** Yes, that is. I'm so sorry. Sometimes it's so hard. And you have to put that in curly braces though, because it's JavaScript. 

<i class="timecode">[00:39:55]</i> **Ben:** Ohhhhhh! Yeah, yeah, yeah. Okay! We're good! I think we got there. Yeah.

<i class="timecode">[00:39:59]</i> **Brittney:** I think we got there.

<i class="timecode">[00:40:00]</i> **Ben:** Talking through code syntax is a challenge. There's an added challenge, which is transcribing code syntax in closed captions. I have not figured that out yet. 

<i class="timecode">[00:40:13]</i> **Brittney:** Oh, I bet. That's difficult.

<i class="timecode">[00:40:14]</i> So, grab that entire `<Checkbox>` thing and copy it, and we'll kind of paste it down below and just change it for our other "`each`" block. It might be easier.

<i class="timecode">[00:40:24]</i> **Ben:** Yeah. And then here, gotta do "`id`." Cool. 

<i class="timecode">[00:40:29]</i> **Brittney:** Okay, and so we just need… Okay, these are all still called "`todo`." That's probably fine. I renamed all of these to "`done`." I don't know if that's more intuitive for you. 

<i class="timecode">[00:40:40]</i> **Ben:** Okay, so here and here and here, I think. 

<i class="timecode">[00:40:44]</i> **Brittney:** Yeah. Awesome. Okay, yeah. So "`done`." And then what else? What do we have on our screen?

<i class="timecode">[00:40:56]</i> **Ben:** Let's find out! So there's… currently nothing's done, but when I do this… Heyyyy! Okay! Very cool.

<i class="timecode">[00:41:04]</i> **Brittney:** So it is functioning. Awesome. Okay.

<i class="timecode">[00:41:11]</i> So let's see. I don't think we need to do anything else in the todo component for now, unless we wanted to style it or make it, like, prettier or anything. But what we can do now is talk about animations for a second.

<i class="timecode">[00:41:24]</i> **Ben:** Okay!

<i class="timecode">[00:41:24]</i> **Brittney:** Because this is one of the things that comes out of the box with SvelteKit that a lot of frameworks don't provide that I love. So in this todo component, we're going to import, at the top in the `<script>` tag, "`flip`" from "`svelte/animate`." So it's in curly braces. 

<i class="timecode">[00:41:41]</i> **Ben:** Okay, got it. Named import from…

<i class="timecode">[00:41:44]</i> **Brittney:** Yeah.

<i class="timecode">[00:41:46]</i> **Ben:** … then "`svelte`." 

<i class="timecode">[00:41:47]</i> **Brittney:** "`svelte`," forward slash, "`animate`." That is a forward slash, I think, yeah. 

<i class="timecode">[00:41:52]</i> **Ben:** Okay, yeah. It seems to have picked that up.

<i class="timecode">[00:41:54]</i> **Brittney:** There we go. Okay, so in… the `<li>` element is what we want to use this on. We're gonna say "`animate:flip`." And it's gonna give you some warnings, but we're gonna copy that and we're gonna paste it on the other `<li>`, and then we'll talk about the warning.

<i class="timecode">[00:42:11]</i> **Ben:** Alright!

<i class="timecode">[00:42:16]</i> Yeah. Oh. Yeah. Big ol' nasty error.

<i class="timecode">[00:42:22]</i> **Brittney:** Big ol' messy error.

<i class="timecode">[00:42:23]</i> **Ben:** "An element that uses the animate directive must be the immediate child of a keyed each block." 

<i class="timecode">[00:42:29]</i> **Brittney:** So that means that our "`each`" block actually needs to be keyed with a specific ID so that Svelte knows what you're wanting to flip.

<i class="timecode">[00:42:38]</i> **Ben:** Mmm.

<i class="timecode">[00:42:39]</i> **Brittney:** So instead of the ID that we just spent all that time trying to figure out how to do, we're going to erase the comma and the ID. And in parentheses…

<i class="timecode">[00:42:53]</i> **Ben:** Like this?

<i class="timecode">[00:42:55]</i> **Brittney:** Yes. We're going to put an "`id`." And I think we're going to have to add it to our todos.

<i class="timecode">[00:43:05]</i> **Ben:** Okay.

<i class="timecode">[00:43:05]</i> **Brittney:** So each todo's actually going to have to have an explicit ID for this to work, because Svelte needs to know and not just be an index. 

<i class="timecode">[00:43:15]</i> **Ben:** Gotcha. Okay. 

<i class="timecode">[00:43:17]</i> **Brittney:** So now we're gonna use "`todo.id`" there.

<i class="timecode">[00:43:21]</i> **Ben:** Alright.

<i class="timecode">[00:43:22]</i> **Brittney:** And you can copy that parentheses block and then do it down on the other one and say "`done`."

<i class="timecode">[00:43:28]</i> **Ben:** Mm. 

<i class="timecode">[00:43:29]</i> **Brittney:** "`.id`." There we go! And now…

<i class="timecode">[00:43:35]</i> **Ben:** It is not thrilled about the… 

<i class="timecode">[00:43:38]</i> **Brittney:** Because we're just using… so we're in an "`each`" block, so we need to say, "`todo.id`" because it's an object.

<i class="timecode">[00:43:47]</i> **Ben:** Got it.

<i class="timecode">[00:43:47]</i> **Brittney:** Before, we were actually explicitly calling it "`id`."

<i class="timecode">[00:43:51]</i> **Ben:** Mhmm.

<i class="timecode">[00:43:51]</i> **Brittney:** And we changed that, so now it's mad. "`id`" is equal. 

<i class="timecode">[00:43:57]</i> **Ben:** Equal! That would make sense. That is how HTML works.

<i class="timecode">[00:44:01]</i> **Brittney:** And then that one's just gonna be "`done.id`."

<i class="timecode">[00:44:06]</i> **Ben:** Yes.

<i class="timecode">[00:44:07]</i> **Brittney:** Maybe we shouldn't have renamed that.

<i class="timecode">[00:44:09]</i> **Ben:** You're good.

<i class="timecode">[00:44:10]</i> **Brittney:** I messed that up!

<i class="timecode">[00:44:11]</i> **Ben:** Okay.

<i class="timecode">[00:44:11]</i> **Brittney:** So now we should see, like, a little bit of an animation. 

<i class="timecode">[00:44:15]</i> **Ben:** Yeah! And it's…

<i class="timecode">[00:44:17]</i> **Brittney:** It may not be great on stream, but it's kind of animating there. But we're gonna give it another level of, like, awesome animation. So we're gonna import another thing into the todo file.

<i class="timecode">[00:44:31]</i> **Ben:** Okay!

<i class="timecode">[00:44:33]</i> **Brittney:** At the very top, we're going to import — open up some curly braces — "`crossfade`" — C-R-O-S-S-F-A-D-E — and "`fade`" from "`svelte/transition`."

<i class="timecode">[00:44:56]</i> **Ben:** Alright.

<i class="timecode">[00:44:57]</i> **Brittney:** And then we actually need to use this because this "`crossfade`" is a function, so we need to create a new function, below "`Checkbox`" there somewhere. A "`const`," and we're going to pull out, in array brackets, "`send`" and "`receive`." So we're essentially telling it what is going where. So you're giving it some points. And then we use "`crossfade`," and it's a function with an object.

<i class="timecode">[00:45:31]</i> **Ben:** Ooh.

<i class="timecode">[00:45:31]</i> **Brittney:** And then inside of that, we're gonna say "`fallback: fade`," and we're gonna use the "fade" transition from Svelte as a fallback if "`crossfade`" doesn't work. So down in our markup, in the `<li>`, next to "`animate:flip`."

<i class="timecode">[00:45:53]</i> **Ben:** Yep.

<i class="timecode">[00:45:54]</i> **Brittney:** We're gonna do a space and say "`in:receive`."

<i class="timecode">[00:46:02]</i> **Ben:** "`receive`" — Ah, yes, this makes sense, okay.

<i class="timecode">[00:46:02]</i> **Brittney:** "`receive`," and we're gonna say equal to, and you need two sets of curly braces because we're doing an object inside of the JavaScript.

<i class="timecode">[00:46:10]</i> **Ben:** Mm.

<i class="timecode">[00:46:10]</i> **Brittney:** And it's "key:." And that one's going to be "`todo.id`." So we're giving it the ID in the key. And then we need to do an "`out:send`."

<i class="timecode">[00:46:25]</i> **Ben:** Wait. Oh, like out here as an attribute. "`out:send`."

<i class="timecode">[00:46:29]</i> **Brittney:** Yep. And you need to do the same thing, so "`key: todo.id`." And then we'll copy that and we'll put that down on the other one. 

<i class="timecode">[00:46:41]</i> **Ben:** Makes sense.

<i class="timecode">[00:46:44]</i> There we go. This needs an equals. And now… come down here. I'm just gonna… paste this in. This needs to be "done" on both of these. 

<i class="timecode">[00:47:01]</i> **Brittney:** That's going to be "`done`." And let's see what that animation looks like. 

<i class="timecode">[00:47:07]</i> **Ben:** Alright.

<i class="timecode">[00:47:09]</i> Ooh! It actually, like, flies there!

<i class="timecode">[00:47:12]</i> **Brittney:** It does. It, like, actually tracks the movement a bit. 

<i class="timecode">[00:47:17]</i> **Ben:** That's awesome. So cool how easy that is to do. Like, animation's such a, like, pain point, I think of webdev. 

<i class="timecode">[00:47:24]</i> **Brittney:** In component frameworks, yeah! And Svelte just kind of gives it to you out of the box and makes it really easy. Like, the sugar syntax in Svelte is really what drew me to it.

<i class="timecode">[00:47:33]</i> **Ben:** Mm!

<i class="timecode">[00:47:34]</i> **Brittney:** Because I love writing in that near-traditional markup, but having those easy things that you don't have to create all this boilerplate code for… there's just, like, such few things that you really have to figure out.

<i class="timecode">[00:47:47]</i> **Ben:** Yeah! And this comes back to Svelte's origins which — correct me if I'm wrong — Rich Harris created for… like, basically, like, for the New York Times where he was creating, like, interactive articles and dynamic things.

<i class="timecode">[00:48:02]</i> **Brittney:** Exactly.

<i class="timecode">[00:48:04]</i> **Ben:** Like, animation is absolutely a part of, like, the journalistic storytelling process of that.

<i class="timecode">[00:48:12]</i> **Brittney:** It is, exactly.

<i class="timecode">[00:48:13]</i> **Ben:** So it's very cool to see, like, how his needs translated into primitives that are just baked into the language as easily as that. 

<i class="timecode">[00:48:22]</i> **Brittney:** Yeah! And I do want to try one more thing.

<i class="timecode">[00:48:24]</i> **Ben:** Yeah!

<i class="timecode">[00:48:24]</i> **Brittney:** So on that button, I wanna see if we can pass a "style" prop to it. We're gonna see if this works.

<i class="timecode">[00:48:31]</i> **Ben:** Okay.

<i class="timecode">[00:48:31]</i> **Brittney:** So, in index.svelte, actually, on the `<Button>` component, do a space and do dash dash. I don't think you even need to do the "`style`" tag. 

<i class="timecode">[00:48:44]</i> **Ben:** Ohh. 

<i class="timecode">[00:48:45]</i> **Brittney:** What did we call…? Is it background color? 

<i class="timecode">[00:48:51]</i> **Ben:** Yes.

<i class="timecode">[00:48:54]</i> **Brittney:** So…

<i class="timecode">[00:48:54]</i> **Ben:** Do we need…? 

<i class="timecode">[00:48:57]</i> **Brittney:** But wait, we're using… what are we using? We don't have a thing set up for that. So can we add a "`:root`" element there in the `<style>` tag and create a new variable? 

<i class="timecode">[00:49:08]</i> **Ben:** Yes, we sure can! 

<i class="timecode">[00:49:10]</i> **Brittney:** So "`:root`," and then we're gonna create a variable, dash-dash… yeah. Just

<i class="timecode">[00:49:15]</i> **Ben:** "`background-color`," yeah. 

<i class="timecode">[00:49:17]</i> **Brittney:** Yeah, and then use that there. 

<i class="timecode">[00:49:20]</i> **Ben:** Okay, and… yeah, probably… I'm just gonna use the teal as a default there, and then this is—

<i class="timecode">[00:49:26]</i> **Brittney:** Yeah! That's a great idea.

<i class="timecode">[00:49:28]</i> **Ben:** "`var(--background-color)`," okay. 

<i class="timecode">[00:49:31]</i> **Brittney:** Okay, now back in `index.svelte`, we can pass "`--background-color`" equal to… 

<i class="timecode">[00:49:40]</i> **Ben:** Equal to, and let me give it a…

<i class="timecode">[00:49:42]</i> **Brittney:** Different color.

<i class="timecode">[00:49:44]</i> **Ben:** There we go! I happen to have a keyboard shortcut for my purple. 

<i class="timecode">[00:49:51]</i> **Brittney:** That is awesome! I need to do that! And it worked!

<i class="timecode">[00:49:54]</i> **Ben:** It worked!

<i class="timecode">[00:49:54]</i> **Brittney:** We can actually do a "`color: white`" on there or something so it's accessible.

<i class="timecode">[00:49:58]</i> **Ben:** Yeah, accessibility? What's that? Yeah. "`color: white`." 

<i class="timecode">[00:50:06]</i> **Brittney:** We got Salma in the chat! 

<i class="timecode">[00:50:10]</i> **Ben:** Salma, hello! Welcome, welcome to the chat!

<i class="timecode">[00:50:12]</i> **Brittney:** We got some Sveltey goodness going on.

<i class="timecode">[00:50:16]</i> **Ben:** Yes! Yes, yes, yes.

<i class="timecode">[00:50:17]</i> **Brittney:** Svelte transitions.

<i class="timecode">[00:50:19]</i> **Ben:** Yeah! Yeah. We made boxes fly around, which is incredibly cool. Like, the fact is, if I were to do this in React, I would have had to install, like, three different libraries to make this work. 

<i class="timecode">[00:50:31]</i> **Brittney:** And you did zero libraries! 

<i class="timecode">[00:50:33]</i> **Ben:** Yeah!

<i class="timecode">[00:50:34]</i> **Brittney:** Zero!

<i class="timecode">[00:50:35]</i> **Ben:** Yeah! 'Cause this is all, like, baked into Svelte itself.

<i class="timecode">[00:50:38]</i> **Brittney:** Yeah!

<i class="timecode">[00:50:39]</i> **Ben:** Awesome.

<i class="timecode">[00:50:40]</i> Salma said, "I tried to use Svelte with TypeScript back in summer 2020, and didn't have a good time. I think things have improved since then." We opted to not use TypeScript for this stream because that just seemed like another obstacle to learning today!

<i class="timecode">[00:50:55]</i> **Brittney:** TypeScript is always an obstacle to learning for me in general, so you don't want to see me mess with TypeScript at all, but it is much more baked into the program now. Svelte is written in TypeScript and they have moved from being to where TypeScript was kind of second nature to it being integrated into the platform, so I think you would have more of a fun time with it in SvelteKit now. Hopefully. Fingers crossed. And if you don't, jump in the Svelte Discord because they will help you. 

<i class="timecode">[00:51:24]</i> **Ben:** Yeah. Yeah, and Lindsay seems to be vouching for better Svelte TypeScript support. So, yeah! Yeah, and, like, this is not at all a diss on TypeScript, I think. It's just that, like, I don't know, especially for, like, one hour of, like, learning about a thing, like, the last thing you want is to be finagling with, like, an extra layer of syntax. Again, if this were, like, a production project, like totally, totally on board with TypeScript. 

<i class="timecode">[00:51:54]</i> **Brittney:** Exactly.

<i class="timecode">[00:51:54]</i> **Ben:** Just not for streams.

<i class="timecode">[00:51:55]</i> **Brittney:** And I do get the value of TypeScript in the production setting and, like, it helps the consumers of your component library to see what they need to use on it. I love the value that it adds there. It's just, I am still learning. I'm not great with it!

<i class="timecode">[00:52:12]</i> **Ben:** Mhmm.

<i class="timecode">[00:52:13]</i> Yeah! So, we're getting near to the end. Was there anything else you wanted to show off? Anything you wanted to add to our little component library here? 

<i class="timecode">[00:52:24]</i> **Brittney:** No, I just wanted to see if the style props would work, and we were able to pass that in, which is kind of cool. We showed the class, where we did that "class:{default}" on the button. We showed that you can do, like, dynamic classes there.

<i class="timecode">[00:52:38]</i> **Ben:** Yeah!

<i class="timecode">[00:52:38]</i> **Brittney:** We showed animations. We showed how to pass props.

<i class="timecode">[00:52:43]</i> **Ben:** The fact that you can just straight up put the… let's see. I'll go back to the index. The fact that you can just straight up put the CSS, custom properties, like, on the element itself, that's just incredibly cool! Like, React makes working with custom properties a pain point, I think, and so it's neat to see that, you know, this makes using that API even easier than it is for vanilla HTML, which is a huge plus.

<i class="timecode">[00:53:21]</i> **Brittney:** And I think that's the power of Svelte, too, is that it makes vanilla — it feels like vanilla HTML, but then you have this power with it.

<i class="timecode">[00:53:29]</i> **Ben:** Mhmm.

<i class="timecode">[00:53:29]</i> **Brittney:** And it's, like, right at your fingertips. You don't have to go and figure a ton of boilerplate out, which I just, I love. 

<i class="timecode">[00:53:37]</i> **Ben:** Absolutely. Alright, so, you know, this has been a very brief introduction to the Svelte world. Where might someone go if they were looking to learn more? 

<i class="timecode">[00:53:48]</i> **Brittney:** Okay, so they have a fantastic tutorial on svelte.dev — which is probably one of the best on the web, in my opinion — that walks you through, step by step, this Svelte syntax. And they have a Svelte REPL. So that right on the top bar there, you've got the tutorial, and then you've got the REPL also. And the tutorial will walk you through, in the REPL, like, each syntax thing.

<i class="timecode">[00:54:12]</i> **Ben:** Mmmm!

<i class="timecode">[00:54:13]</i> **Brittney:** Which I think is just a great place for everyone to go and get started. I am working on an intro to Svelte course that will hopefully be coming out soon, but it's not out right now. But the REPL is a place that you can play around with code and see what works and what doesn't. Yeah!

<i class="timecode">[00:54:31]</i> **Ben:** Good deal! And so people who are interested in learning more about that course, I'm guessing they can follow you on Twitter for all of those updates.

<i class="timecode">[00:54:39]</i> **Brittney:** Absolutely!

<i class="timecode">[00:54:41]</i> **Ben:** And then there's one other place that I think we should shout out, like, learning for Svelte, which is Svelte Sirens. Can you talk about, like, what that is and stuff like that? 

<i class="timecode">[00:54:51]</i> **Brittney:** Absolutely. My marketing is terrible, apparently! So Svelte Sirens is a Svelte society for women, nonbinary people, and we say allies. So if you are friends welcoming to those types of people, you follow our code of conduct, you are welcome at all of our events. You're welcome in our Discord. We shared the Svelte Discord, so inside the Svelte Discord, underneath the community part, you will find Svelte Society. And under that, we have a Svelte Sirens chat where we hang out. And you can get there through… there's a link on svelte.dev. svelte.dev/chat will take you straight to the Discord.

<i class="timecode">[00:55:30]</i> **Ben:** Ah, okay. I will do that. svelt.dev/chat. Okay! 

<i class="timecode">[00:55:36]</i> **Brittney:** Yes. And hopefully that will work.

<i class="timecode">[00:55:38]</i> **Ben:** Yes.

<i class="timecode">[00:55:38]</i> **Brittney:** And so Svelte Sirens, we do a monthly talk where we have a guest speaker come on and they do a formal kind of meetup talk where it's prerecorded video content. Q&A after.

<i class="timecode">[00:55:50]</i> I have been doing livestreams every two weeks where I bring on a guest, similar to this stream, how we sit down and we integrate some new technology with SvelteKit.

<i class="timecode">[00:56:01]</i> **Ben:** Where can folks find those streams? 

<i class="timecode">[00:56:03]</i> **Brittney:** So those streams are both… actually the talks and the streams are available on the Svelte Society YouTube channel. So you could get there if you wanted to go to Events or Talks on our route, we show the talks are listed there, and that will take you to the YouTube channel if you click through to.

<i class="timecode">[00:56:24]</i> **Ben:** I probably won't because that might start blaring, perhaps.

<i class="timecode">[00:56:28]</i> **Brittney:** Oh, yeah!

<i class="timecode">[00:56:32]</i> **Ben:** Okay, it won't. But yeah, okay, gotcha. Cool. So, go check out those videos. Go check out Brittney's streams.

<i class="timecode">[00:56:39]</i> Brittney, it's been wonderful having you on. Thank you so much for being my introduction to Svelte. I really do appreciate that. 

<i class="timecode">[00:56:46]</i> **Brittney:** Awesome! Yeah! If anybody has questions, reach out. I mean, my DMs are open. I'm around on Discord all the time. So if you have questions about Svelte, I'd love to help you or point you in the right direction of someone that can help you. 

<i class="timecode">[00:56:59]</i> **Ben:** Alright! Yeah, so this has been Some Antics. We've had Brittney on. Stick around, chat. We're going to find someone to raid. Also, you know, if you're following people on Twitter, you might as well follow Some Antics on Twitter. After all, that's where all the best updates are. Recordings of the stream go there. Announcements of upcoming streams go there. Go follow and get those updates. And y'all, just have a fantastic rest of your Tuesday. Thank you so much for being here.

<i class="timecode">[00:57:25]</i> **Brittney:** Thanks, everyone!

<i class="timecode">[00:57:30]</i> **Ben:** Bye, y'all!