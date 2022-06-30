{% raw %}
**Ben:** <i class="timecode">[00:00:00]</i> Howdy, howdy, y'all! Welcome back to Some Antics. I know it's a very unusual time, perhaps, for a Some Antics stream, but the other night, I saw this tweet by Zach Leatherman about a feature that's been coming to Eleventy for a while called Eleventy Serverless, and I just really wanted to get my hands on this and try it. And I figured it would be a good opportunity to just kind of go through that first look, if you will, live! Just kind of see what we can learn, see if there's anything I'm missing. I did — full disclaimer — I did play around with this just a little bit last night, just mainly to make sure I could get things running, but by and large, I haven't really explored a whole lot about this, so I'm super excited for this.

And I'm super excited to have y'all here as well! I see so far we've got Steph in the chat. We've got gloriousloaf. Thank you both for being here. If you're in the chat, go ahead and just put a wave or say hi. I'd love to see who all was able to make it out. Yeah. So… Eleventy Serverless. Actually, first of all, what is y'all's comfort level with Eleventy? I imagine the kinds of people who would hop onto a 5pm-on-Friday stream talking about Eleventy, I imagine that's probably going to be a pretty self-selecting group, so chances — Oh, hello! Alright, well, just a sec, y'all.

Hey, Zach, you there? Howdy!

**Zach:** <i class="timecode">[00:01:43]</i> Hello?

**Ben:** <i class="timecode">[00:01:44]</i> Hello! Just a sec. Alright, I'm gonna actually… I'm currently only showing my face. Let me fix that to include you as well!

Howdy! It's good to meet you.

**Zach:** <i class="timecode">[00:01:57]</i> Hey, how's it going?

**Ben:** <i class="timecode">[00:01:59]</i> It's going alright! I figured I would show… There's this guy named Zach, and he had this tweet that seemed pretty cool, so I figured I'd show it off.

<i class="brackets">[Zach chuckles]</i>

I guess since you're here, would you like to introduce yourself? 

**Zach:** <i class="timecode">[00:02:12]</i> Hey! I'm Zach. I'm the creator of Eleventy! 

**Ben:** <i class="timecode">[00:02:16]</i> Yeah. So I tweeted out earlier today that, like, oh, I want to play around with this on stream, get kind of a first look. And Zach, you stepped into the trap of replying, being like, "Wow, it's cool that you can get feedback!" I'm like, "…Would you like to hop on and join me for this?" So I'm super, super grateful that you've come on. This is, this is awesome. 

Yeah, so as I understand it, Eleventy Serverless is a way to keep you from having to build all of your pages in one go, like, in the build step, and instead let you build them really when you need them, so the first time someone hits the page, for instance. 

**Zach:** <i class="timecode">[00:03:01]</i> Yep, that's right. It's kind of like a… I don't know, the way I think about it is it's kind of a way to manually segment your builds. So you can sort of create this separation, if you will, like, from your upfront build step…

**Ben:** <i class="timecode">[00:03:18]</i> Okay.

**Zach:** <i class="timecode">[00:03:19]</i> …and delay some pages to be rendered later, either on every request or using on-demand builders, which is Netlify's new thing where it renders it one time and then caches that for repeat views. 

**Ben:** <i class="timecode">[00:03:34]</i> This docs. Yeah! So, this is actually something I'm kind of curious about, because it seems like if you *didn't* cache the builds, the Eleventy Serverless builds, it seems like you could have something fairly dynamic and real-time. Like, you could almost make a pretty dynamic feed if you wanted, where every time someone came to the page, it would show the latest stuff.

**Zach:** <i class="timecode">[00:03:58]</i> Yeah, correct. So the trade-off is… There's a couple of trade-offs when it comes to this. And you're kind of managing these three different modes, right? This on-demand builder, this on-request model where it renders it every time to make, like, a fully dynamic page, and then the third is, like, the classic build, upfront build mode.

**Ben:** <i class="timecode">[00:04:19]</i> Okay.

**Zach:** <i class="timecode">[00:04:20]</i> And the trade-off is when you're running Eleventy Serverless, it's going to be slower than your upfront build. Like, if you're doing all the work in your build upfront, the visitor experience will be much faster…

**Ben:** <i class="timecode">[00:04:35]</i> Mmm.

**Zach:** <i class="timecode">[00:04:36]</i> …because you're just serving static files at that point. When you get into the serverless model, it's actually running the render, it's running Eleventy on request, so it is going to be slower. So it takes more… It takes a little bit more care to do it this way because, I mean, Eleventy is only as fast as the slowest thing that you put into it, right?

**Ben:** <i class="timecode">[00:05:01]</i> Okay.

**Zach:** <i class="timecode">[00:05:01]</i> So you could get into a trap where you could create really slow pages with this model. And so you need to be really careful if you're doing it, especially if you're doing on every request, not to put too much into your build, otherwise your pages can get slow. And so that's sort of where the on-demand builders come in. Because if you're generating just once for every visitor, that sort of mitigates =that risk in a much nicer way, because even if you have a slow build for the first user, it will be fast for everyone, like, everyone else that visits.

**Ben:** <i class="timecode">[00:05:40]</i> Gotcha, so that would be a way to be like, "I know that there are a ton of pages I would, in theory, like, given infinite time, I could generate, but I don't need to build all of these from the start. But the moment, like, the first person needs it, we can go ahead and build it and then just hold onto that for however long our cache lives." And so you only build the stuff that people actually hit. 

**Zach:** <i class="timecode">[00:06:05]</i> Right, yep.

**Ben:** <i class="timecode">[00:06:06]</i> Okay.

**Zach:** <i class="timecode">[00:06:06]</i> And so we actually implemented this on 11ty.dev, too.

**Ben:** <i class="timecode">[00:06:10]</i> Yeah!

**Zach:** <i class="timecode">[00:06:11]</i> The author pages are using on-demand builders. And actually… well, I put up a proof of concept today, if you go to the Eleventy homepage, where I'm running the homepage using Eleventy Serverless in an on-request model, so, like, that higher-risk mode where things could get slow.

**Ben:** <i class="timecode">[00:06:31]</i> Okay.

**Zach:** <i class="timecode">[00:06:32]</i> So this is, every visit that comes to this page is running Eleventy on request… <i class="brackets">[chuckles]</i>

**Ben:** <i class="timecode">[00:06:38]</i> Wow!

**Zach:** <i class="timecode">[00:06:39]</i> …returning the content there. So yeah, you can see this is all server-generated HTML. So this date here comes back in the server-generated HTML. 

**Ben:** <i class="timecode">[00:06:49]</i> That is excellent. And I love, I guess, the promise of the seems to be, like, for the most part, you can keep doing your static site generated stuff, but it's like just for a handful of things that you don't necessarily need to build in the build step, you can just hold on to that later. So it's this hybrid model, like you said, of balancing everything.

Wow, we've got a pretty great chat going. I see we've got Joe, we've got Travis. Henri Helvetica is in. Excellent, excellent. Alex Trost. Lots of good peeps. Welcome, welcome! I'm so glad everyone was able to come on Friday evening. That's awesome. It's 5 PM for you as well, right?

**Zach:** <i class="timecode">[00:07:33]</i> Uh, yep. Yep.

**Ben:** <i class="timecode">[00:07:34]</i> Nice.

**Zach:** <i class="timecode">[00:07:34]</i> Yeah. My wife took over watching the kids for a little bit, so I could join this. 

**Ben:** <i class="timecode">[00:07:38]</i> Oh my god.

**Zach:** <i class="timecode">[00:07:39]</i> Props to her, too.

**Ben:** <i class="timecode">[00:07:41]</i> Oh, man, yeah. Kudos — kudos to Zach's wife. Excellent. 

Yeah, so I wanted to go through, you've got the serverless docs here, and I'll put that in the chat here as well. So a while back, Jason did, on his stream, a demo of Netlify's distributed persistent rendering model. And he built out a site that was, like, just a demonstration of, like, every color. So you could go to like see, like, the different CSS colors. And I was thinking it might be fun to follow the docs and to try to build something like this but instead, because I typically do, like, accessibility streaming, do a color contrast checker where in theory I could hit, for instance, like if I say, like, `ff0000` — there we go — and then, like, `0000ff`, right, then it would spit out the contrast ratio. So that's what I wanted to try to build using this. Because that's the kind of thing where it's like, we don't really need to serve a whole bunch of JS to the end user, but I also don't want to build all of these pages because one color is 26 by 26 by 26 combinations. Two colors is… god, that's — Sorry. I said 26. I meant 256. So two colors would be 256 to the power of six, if I'm mathing correctly.

**Zach:** <i class="timecode">[00:09:08]</i> Wow, yep, that's a lot of colors.

**Ben:** <i class="timecode">[00:09:10]</i> That's too many colors! And you know, it's not like this color contrast site is going to be the most trafficked page. Absolutely not worth spending all that time on my build. Can you imagine, like, the dev server mode of just having to rebuild 256 to the power of six pages? Actually, how much is that? That's exorbitant, isn't it? Too high! 2.8 times 10 to the 14th. Too many pages.

<i class="brackets">[Zach chuckles]</i>

Alright, that seems like that would be something that would be pretty feasible with serverless.

**Zach:** <i class="timecode">[00:09:43]</i> Yeah, I think so! 

**Ben:** <i class="timecode">[00:09:44]</i> Cool! So I did spin up… I wanted to start pretty fresh, so — there we go — so I did create just a `package.json` and a `.gitignore`. So this is in the canary builds, which I guess I could get to with… if I find y'all's GitHub. And tags… There we go. That was doable. And just, uh, install Eleventy here.

Do you… It doesn't matter whether it's a dev build or anything like that — sorry, dev dependency. That's fine. Alright! 

Joe's saying that he's throwing away his manually built color contrast repository that has been passed down through generations of his family. 

<i class="brackets">[Zach laughs]</i>

"This was my grandfather's color contrast!" Oh my god. 

**Zach:** <i class="timecode">[00:10:44]</i> All the pages were built manually by hand. 

**Ben:** <i class="timecode">[00:10:48]</i> Travis says, "This better be deployed as a tool for us later!" You bet!

Yeah, Zach, I'm sure you're familiar with, uh, *Netlify.* We could probably make this work on Netlify, if I had to guess!

**Zach:** <i class="timecode">[00:10:59]</i> I've heard of that, yeah!

**Ben:** <i class="timecode">[00:11:00]</i> You've heard of it!

**Zach:** <i class="timecode">[00:11:01]</i> I heard they have a nice homepage, too. 

**Ben:** <i class="timecode">[00:11:04]</i> Did you make the homepage?

**Zach:** <i class="timecode">[00:11:06]</i> Yeah, I work on the homepage with Hugues Tennier. Yeah. 

**Ben:** <i class="timecode">[00:11:10]</i> Gotcha.

"Colored by hand, too." Yes.

Alright, so we we've got… Why did I just…? I have VS Code up already. There we go. And I guess just speedrun me creating a config, because I'm just going to go ahead, module dot… Ooh! My computer is lagging. It Is not used to this.

No, I want function format. Okay. I'm just going to make a `src` here.

And in src, I suppose I can probably make… I think I'm just going to use an HTML template for this, I think would make sense. There we go. Alright, so there's that. That would be the bare— "contrast," to be a little clearer. There we go. So this would represent every page that would have a color contrast check there.

Yeah, so I guess if I go to the docs here, which is… There we go. So we're going to add the bundler plugin. So… this is something I'm curious about. Why is this a plugin? Why is this not something that would be, like, built into the, like, default config? 

**Zach:** <i class="timecode">[00:12:55]</i> Yeah, so there's a gray area here, because the plugin is bundled with Eleventy core.

**Ben:** <i class="timecode">[00:13:04]</i> Mhmm.

**Zach:** <i class="timecode">[00:13:05]</i> But it isn't available by default. So what this bundler plugin does is it actually creates a serverless, like, bundle for you. So it copies a lot of your template files and some of your, like, includes and basically all of the files that you need to build your site into this serverless bundle for deployment…

**Ben:** <i class="timecode">[00:13:25]</i> Okay.

**Zach:** <i class="timecode">[00:13:26]</i> …as sort of like a separate package, so it can run the build independently on request in a lambda, basically. So, I don't necessarily want this to be, like, something that people just reach for without thinking. I want it to be sort of something that you have to take a few steps to use…

**Ben:** <i class="timecode">[00:13:49]</i> Mmm.

**Zach:** <i class="timecode">[00:13:49]</i> …just because there are a few caveats, and we've discussed a few of them on the call just around performance of on-request builds. But there are some other, like, developer experience caveats that, that we might go into a little bit later, things that might get smoothed out as we go along but things that also might be unexpected for people. So I wouldn't necessarily, like, want people to build entire sites with this. It should be something that you reach for because you have a specific need for it.

**Ben:** <i class="timecode">[00:14:24]</i> Okay.

**Zach:** <i class="timecode">[00:14:25]</i> And I think the use case you proposed is definitely a good one. 

**Ben:** <i class="timecode">[00:14:29]</i> Sweet. We've actually got a question already in the chat from Stephanie Eckles. "Can Serverless pick up collections now?" She says it wasn't, for her way-too-early test, but yeah. 

**Zach:** <i class="timecode">[00:14:45]</i> Yeah, so that will require some documentation and discussion. So it's, I would say that that is a complicated answer. It does more than it used to, and it probably will more as time goes on.

**Ben:** <i class="timecode">[00:15:00]</i> Mhmm.

**Zach:** <i class="timecode">[00:15:01]</i> But it is sort of a wall between your build and your on-request serverless templates. So  there are ways to inject collections from your build into your serverless templates. And I do that on 11ty.dev because all the navigation is driven by a collection. 

**Ben:** <i class="timecode">[00:15:24]</i> Gotcha.

**Zach:** <i class="timecode">[00:15:24]</i> And there are ways to do it the other way, too, to consume serverless templates inside of your build as collections. But yes, that's a very complicated… That's the most complicated question. Maybe we shouldn't start out with that. 

**Ben:** <i class="timecode">[00:15:42]</i> Yeah, that's totally fair! I'm just trying to think of the ramifications of a thing that's built at build time consuming collections that involve serverless stuff. That seems… tricky. 

**Zach:** <i class="timecode">[00:15:55]</i> Yeah. Yeah, it is. And the docs will get a little bit better as time goes on around that stuff.

**Ben:** <i class="timecode">[00:16:03]</i> Yeah.

**Zach:** <i class="timecode">[00:16:03]</i> I don't think that I've even put examples into that yet.

**Ben:** <i class="timecode">[00:16:05]</i> Oh, look at that!

**Zach:** <i class="timecode">[00:16:06]</i> It's sort of hiding at the bottom. 

**Ben:** <i class="timecode">[00:16:07]</i> "Documentation in progress." Alright!

**Zach:** <i class="timecode">[00:16:10]</i> Yep.

**Ben:** <i class="timecode">[00:16:10]</i> Excellent. Well, cool! So then, I want this plugin. That plugin seems excellent, so I'm gonna take it. We're gonna use it. Where is my…? Here. I updated to Big Sur recently and, like, all the icons have changed, and I have far too many of them down there as is, so it's, like, hard to immediately find VS Code. 

**Zach:** <i class="timecode">[00:16:38]</i> Yeah, I haven't upgraded yet. 

**Ben:** <i class="timecode">[00:16:41]</i> So I'm excited now already, though, for Monterey — Monterey? Yeah, Monterey — 'cause it's going to have things like being able to select text directly out of images, which I think is going to be a huge win for accessibility.

**Zach:** <i class="timecode">[00:16:58]</i> Yeah, it'd be nice when I forget to… or, when I copy and paste an image into Twitter and then forget to copy the text for the source. I can just copy that right out of the image. That would be awesome.

**Ben:** <i class="timecode">[00:17:09]</i> Yeah! Especially for, like, code snippets.

Okay. So, `eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin)`, and then…

So I did sneak a peek at these docs the other day, and I do have to say, I genuinely appreciate that you named this "possum," because I think, like, even though you give this disclaimer, like, later that is like, "you should probably call this 'serverless,'" like, I feel like that would become the magic word that I don't know when I should call something "serverless" versus when I should call something this.

**Zach:** <i class="timecode">[00:17:48]</i> Yeah, I felt like that was too generic of a word to use as an example. 

**Ben:** <i class="timecode">[00:17:55]</i> If I can make that a little bit bigger. Okay.

So… I did open up an object? Yeah. Alright. So if this is the name of my serverless function, then I'm probably gonna end up calling my function "contrast" instead. Yeah. 

**Zach:** <i class="timecode">[00:18:12]</i> I think the, yeah, I mean the interesting thing here is that… So, yeah, I'm already anticipating feedback about this, but just… I feel like when it comes to the serverless bundler plugins, you're really only gonna need one for each mode.

**Ben:** <i class="timecode">[00:18:36]</i> Okay!

**Zach:** <i class="timecode">[00:18:37]</i> So you'll be able to drive all of your templates through either that on-request mode or the on-demand builder mode.

**Ben:** <i class="timecode">[00:18:43]</i> Ohh!

**Zach:** <i class="timecode">[00:18:44]</i> So really, at most you're only gonna need probably two.

**Ben:** <i class="timecode">[00:18:48]</i> Interesting!

**Zach:** <i class="timecode">[00:18:49]</i> So the name really shouldn't be specific to your use case, but rather the mode that you're running it through. 

**Ben:** <i class="timecode">[00:18:58]</i> Oh! Okay, so if I called this something like, maybe we call it "ondemand," just to differentiate it from the magic word "serverless." Interesting! 

**Zach:** <i class="timecode">[00:19:07]</i> Yeah, I'll write that down as something that I can improve on the docs. 

**Ben:** <i class="timecode">[00:19:11]</i> Yeah! Interesting. Okay, so, tons of options here. 

**Zach:** <i class="timecode">[00:19:23]</i> One you're going to need, I can already tell upfront, is that `inputDir`, since you don't want the default. I wish there was a better way for me to pick that up in the config, but yeah. 

**Ben:** <i class="timecode">[00:19:34]</i> You can't pick it up from this object because that's, I guess, after the plugin's been installed. Interesting! Okay.

**Zach:** <i class="timecode">[00:19:42]</i> Yep.

**Ben:** <i class="timecode">[00:19:43]</i> inputDir. And this is going to be src. Okay.

**Zach:** <i class="timecode">[00:19:50]</i> So, you're actually the first person I've seen try this out.

**Ben:** <i class="timecode">[00:20:01]</i> Oh, man!

**Zach:** <i class="timecode">[00:20:01]</i> I'm getting feedback.

**Ben:** <i class="timecode">[00:20:03]</i> Oh, okay!

**Zach:** <i class="timecode">[00:20:03]</i> I'm getting feedback from you right now. <i class="brackets">[laughs]</i>

**Ben:** <i class="timecode">[00:20:05]</i> Alright!

**Zach:** <i class="timecode">[00:20:06]</i> That's kind of my secret reason for joining, is that I wanted to watch someone try it out. 

**Ben:** <i class="timecode">[00:20:11]</i> Gotcha. Alright! Well, I will, I guess, attempt to run into as many stumbling blocks as I possibly can.

**Zach:** <i class="timecode">[00:20:20]</i> And then I can fix them upstream for everyone else. 

**Ben:** <i class="timecode">[00:20:23]</i> Alright!

Also, I don't think I'm going to need any of this other stuff. You didn't seem to think I would need any of this either. 

**Zach:** <i class="timecode">[00:20:34]</i> Nope, I don't think so.

**Ben:** <i class="timecode">[00:20:35]</i> I think you're already getting slightly dunked on in the chat for making me type out input directory like a caveman.

**Zach:** <i class="timecode">[00:20:45]</i> Sorry! <i class="brackets">[laughs]</i>

**Ben:** <i class="timecode">[00:20:46]</i> Zach! You know, I thought Eleventy was supposed to let me move fast. I mean, how am I going to move fast if I have to type out the input directory?

**Zach:** <i class="timecode">[00:20:57]</i> Yep. Yep, yep. Nope, no comment. 

**Ben:** <i class="timecode">[00:21:01]</i> <i class="brackets">[chuckles]</i> Okay, so the next thing I'm seeing… It immediately describes my generated serverless function. I don't think I have a generated serverless function. 

**Zach:** <i class="timecode">[00:21:12]</i> Yep. So when you run the build the first time—

 

 —That's better!

**Ben:** <i class="timecode">[00:21:21]</i> Would you like me to like — ah, god, not `_layouts`. `_includes`. Do you want me to, like, copy–paste these logs into anything for you?

**Zach:** <i class="timecode">[00:21:28]</i> No, I'm taking notes.

**Ben:** <i class="timecode">[00:21:29]</i> Okay, cool. Cool, cool. Cool.

Alright, so if I have my data and my includes, now I'm curious why that would be required in the first place. 'm wondering — Well, I guess… I guess that makes sense if you're… 

**Zach:** <i class="timecode">[00:21:42]</i> It shouldn't be. Yeah, so we recreate — we basically recreate your folder structure inside of this serverless bundle, basically. So, yeah, it shouldn't expect those to exist. 

Gotcha, cool.

**Ben:** <i class="timecode">[00:21:58]</i> A right, so I now have a `netlify` directory with a `functions` directory. `ondemand`, because that's what we called it in my `package.json` instead of "possum" or "serverless."

It's got a `src`. Okay, so it's following… Wait… why would it have a `src`? If I told it my input directory was `src`, shouldn't it be starting from…? 

**Zach:** <i class="timecode">[00:22:25]</i> No, no, no. So it's recreating basically your…

**Ben:** <i class="timecode">[00:22:27]</i> Oh, okay.

**Zach:** <i class="timecode">[00:22:28]</i> …template structure inside of that serverless bundle. 

**Ben:** <i class="timecode">[00:22:31]</i> Including with the `src`. Got it. Okay. I guess I had just assumed that if I had said that it was `src`, then they would stick it inside — or, I guess, it would just show me what was inside src.

But okay, so we've got an empty `_data`, empty `_includes`. And then I see a few things. We're requiring Eleventy. This one's empty. 

**Zach:** <i class="timecode">[00:22:56]</i> Yep. So this is a way to work around… There's actually a lot that goes into bundling a serverless function.

**Ben:** <i class="timecode">[00:23:05]</i> Okay.

**Zach:** <i class="timecode">[00:23:06]</i> And these files are a way to sort of declaratively say, "These are the dependencies that I'm using inside of my configuration file and inside of my global data," since Eleventy basically requires those dynamically.

**Ben:** <i class="timecode">[00:23:22]</i> Mmm.

**Zach:** <i class="timecode">[00:23:22]</i> They aren't exposed to the bundler. So we have, like… The bundler basically doesn't have insight into those because we require those with, like, variable arguments passed in.

**Ben:** <i class="timecode">[00:23:38]</i> Gotcha. 

**Zach:** <i class="timecode">[00:23:40]</i> So yeah, a lot of this stuff's going to be empty.

**Ben:** <i class="timecode">[00:23:43]</i> Okay. This is a copy of my `.eleventy.js` which is, in Eleventy 1.0, you're going to recommend people start calling this `eleventy.config.js` anyways? No? 

**Zach:** <i class="timecode">[00:23:55]</i> I mean, no, we'll have an option.

**Ben:** <i class="timecode">[00:23:57]</i> Okay.

**Zach:** <i class="timecode">[00:23:58]</i> I think we'll probably pick up, we'll look and pick up for that file by default, but that isn't included yet.

**Ben:** <i class="timecode">[00:24:05]</i> And then there's this thing, which seems to have quite a bit of other meat. This is what actually is responding to the incoming `GET` requests and returning the HTML. 

**Zach:** <i class="timecode">[00:24:18]</i> Yeah, so this is the only file inside of this serverless bundle that you need to worry about, and this is the only file that you're, like, managing. And the bottom of this is the really important part. So, by default, this is set up to do just an on-request model.

**Ben:** <i class="timecode">[00:24:34]</i> Okay.

**Zach:** <i class="timecode">[00:24:34]</i> Because the on-demand builders require an additional dependency. So if you want to swap to use on-demand builders, you need to uncomment these two lines and then install, `npm install` that dependency.

**Ben:** <i class="timecode">[00:24:47]</i> So for the use case that we're building, which is a color contrast checker, would you recommend we do that as on-demand builders? Is that…? 

**Zach:** <i class="timecode">[00:24:57]</i> Yeah, I would, because… I feel like that — and this is probably something that I'm going to change eventually, but it didn't feel right having a Netlify dependency as the default use case. So that's why you have to opt in to that. Although I would prefer, nine times out of ten, that people use the on-demand builders, just because the visitor experience is going to be better if you do. 

**Ben:** <i class="timecode">[00:25:26]</i> Because, yeah, the only time I can think of you would really need to do it, like, this way is if you absolutely need, like, the real time, like, fetching data or something like that, that needs…

**Zach:** <i class="timecode">[00:25:37]</i> Yeah, truly dynamic use cases. Yeah. 

**Ben:** <i class="timecode">[00:25:40]</i> Okay. We're gonna go ahead and install `@netlify/functions`. What did I…? Okay, I'm using npm. Got it. So, `npm install @netlify/functions`. Alright.

Cool! So I have that now. And yeah, this is telling me, yeah, here's how you would swap this out. if you wanted to let Netlify cache your built pages.

Okay. "Add to `.gitignore`." So we're going to ignore all of the generated stuff except for the index, because I'm guessing this stuff gets built for us as part of the, like, build step in Netlify or other similar services. 

**Zach:** <i class="timecode">[00:26:35]</i> Yep, correct.

**Ben:** <i class="timecode">[00:26:36]</i> Cool.

**Zach:** <i class="timecode">[00:26:37]</i> And the reason that I want to let people sort of manage this serverless function code is that you can… There'll be a whole ton of use cases that might fall out that I don't want to have to manage. So if people want to get creative with it,  want that opportunity to be available to them.

**Ben:** <i class="timecode">[00:26:58]</i> Gotcha.

Something's slowing my computer down. Interesting.

Yeah, so I've got this, and if I peek in… Yeah, so just the `index.js` is green. Cool!

I'm going to go ahead and, I guess, commit what I've got. Make sure there's nothing bad in there… Alright.

There we go. Cool, so it's committed. So I guess at this point, it's telling me I can go ahead and start creating my pages.

**Zach:** <i class="timecode">[00:27:37]</i> Yeah, absolutely.

**Ben:** <i class="timecode">[00:27:38]</i> Alright. Let's embiggen that a little, and we'll make it Liquid eventually, or Nunjucks or something, but I just want to get… 

**Zach:** <i class="timecode">[00:27:49]</i> I mean, Eleventy by default does preprocess HTML files as Liquid, so you get that for free. 

**Ben:** <i class="timecode">[00:27:56]</i> Sorry, I meant for editor syntax highlighting purposes.

**Zach:** <i class="timecode">[00:27:59]</i> Oh, okay! Yeah.

**Ben:** <i class="timecode">[00:28:01]</i> I had it on default as HTML Liquid, but I wanted to be able to use my HTML snippets. Yeah, okay. So…

**Zach:** <i class="timecode">[00:28:10]</i> Nice!

**Ben:** <i class="timecode">[00:28:11]</i> Yeah! Stick a little `<main>` in here. It's probably gonna have an `<h1>`. So I can imagine, if we're passing in hex codes through the URL, I can imagine that at some point the structure I would like to see if something like "`{{ color1 }} and`"… I think I won't make these `<h1>`s at this moment. I'll make them, like, paragraph tags. But "`{{ color1 }} and {{ color2 }} have ratio of {{ ratio }}.`" We could probably make this way prettier, give it more information, maybe even with time split it up into like all the different, like, WCAG requirements, 'cause there's, like, four of them that you have to keep in mind. But for now at least, just to prove out the Eleventy Serverless stuff, I think this is probably the minimal case.

So, alright, I'm going to, I guess, give me some metadata here, some frontmatter. And then… Okay, so instead of using the string permalink, you now have a permalink object. This won't be "possum." This'll be "ondemand." And we can give it some path. 

**Zach:** <i class="timecode">[00:29:31]</i> Yeah, I would skip down. There's a slug example closer to the bottom. 

**Ben:** <i class="timecode">[00:29:38]</i> Okay. That's this, and that's using the colon syntax that's familiar for, like, anyone who's ever used, like, Express. So that makes sense to me. So I could do something like "permalink: ondemand:" and I can pull this…

Okay, I guess URL opinion times, is this how you would do this? Or would you have like other, like, steps along the way? Like, would you do something like `/color1/`, and then the dynamic thing, then `/color2/`. Is that something you have an opinion on? 

**Zach:** <i class="timecode">[00:30:20]</i> I mean, I don't feel too strongly about it. I feel like the shorter URL makes more sense to me. But you do want to use the colon syntax here. 

**Ben:** <i class="timecode">[00:30:31]</i> Oh!

**Zach:** <i class="timecode">[00:30:31]</i> Not the— I mean—

**Ben:** <i class="timecode">[00:30:32]</i> Oh, yes. Yes.

**Zach:** <i class="timecode">[00:30:34]</i> You can use templating syntax in this, just like a normal permalink, if you want to dynamically generate your slug names. So that's still supported, but I don't think that's what you want here.

**Ben:** <i class="timecode">[00:30:52]</i> Oh my god. That, that is an almost horrifying idea. Dynamically generated slug names. Interesting. I'll have to think about how I can utterly break things with that.

Okay, but I think this should be good. Is there anything else over here that I need? 

**Zach:** <i class="timecode">[00:31:11]</i> No, that should be it, I think.

**Ben:** <i class="timecode">[00:31:18]</i> Okay. 

**Zach:** <i class="timecode">[00:31:20]</i> Well, wait. So… you have your slugs set up in your permalink.

**Ben:** <i class="timecode">[00:31:26]</i> Yes.

**Zach:** <i class="timecode">[00:31:28]</i> Eleventy doesn't populate the values of those into the top-level global data. 

**Ben:** <i class="timecode">[00:31:34]</i> Okay.

**Zach:** <i class="timecode">[00:31:34]</i> It actually gets populated into eleventy.serverless object. 

**Ben:** <i class="timecode">[00:31:39]</i> And it's calling this `id` because that's what the slug was. So does that mean I can do `{{ eleventy.serverless.path.color1 }}`…

**Zach:** <i class="timecode">[00:31:47]</i> Yep.

**Ben:** <i class="timecode">[00:31:48]</i> …anytime we need to in my templates?

**Zach:** <i class="timecode">[00:31:50]</i> Yeah.

**Ben:** <i class="timecode">[00:31:51]</i> Alright. 

**Zach:** <i class="timecode">[00:31:52]</i> In a serverless template. That object won't be available in your build template. 

**Ben:** <i class="timecode">[00:31:59]</i> `serverless.path.color1` or `.color2`. We'll figure out that ratio thing. This is probably… this might be a use case for computed data, I'm guessing? 

**Zach:** <i class="timecode">[00:32:13]</i> Yeah. Yep. And the reason we have path there is because you can actually get query parameter values inside of this as well.

**Ben:** <i class="timecode">[00:32:21]</i> Oh! Interesting. I don't know that this particular site would have a use case for query parameters, but it's good to know that you can get those. So would that be `.params` or something like that, instead of `.path`?

**Zach:** <i class="timecode">[00:32:34]</i> I think it's `.query`.

**Ben:** <i class="timecode">[00:32:36]</i> `.query`, okay. Is that in here? I'm just gonna do a quick…

Let's see. Okay, so I think… I can see how this translates to the `eleventy.serverless`, but if you hadn't just told me I could do `.query`, I don't think I would have been able to guess that. 

**Zach:** <i class="timecode">[00:33:03]</i> That's not in the docs. And there's kind of one… The main reason for that is query parameters are really only available right now in the on-request model, not in an on-demand builder. So, one limitation of Netlify's on-demand builders is that it ignores query parameters. So, just to maintain the uniqueness of URLs…

**Ben:** <i class="timecode">[00:33:26]</i> Okay.

**Zach:** <i class="timecode">[00:33:26]</i> …it doesn't use those to calculate query parameters. And additionally, the `@netlify/functions` npm package that you installed will actually strip those, so they aren't even available under this query string parameters. So yeah, it's really only available for that on-request mode that we talked about. 

**Ben:** <i class="timecode">[00:33:45]</i> Got it. Okay!

So with that — obviously, like, I'm not populating my `ratio` variable here — but with that, I think everything else… I should just be able to run this and immediately start hitting colors, right?

**Zach:** <i class="timecode">[00:34:02]</i> Yup, yup.

**Ben:** <i class="timecode">[00:34:04]</i> Alright!

**Zach:** <i class="timecode">[00:34:06]</i> Hopefully!

<i class="brackets">[Zach laughs]</i>

**Ben:** <i class="timecode">[00:34:07]</i> Fingers crossed!

**Zach:** <i class="timecode">[00:34:12]</i> Alright, yeah. So that's good. It wrote zero files. We didn't want to build any files. 

**Ben:** <i class="timecode">[00:34:16]</i> That's good. Yeah, 'cause we didn't have any non-serverless stuff. This is fine because that's the homepage. We aren't expecting anything there. Instead, we're expecting… I can put anything in here now. I'm not doing any sort of validation, so I'll say `/eleventy/possum/`.

Niiice! Okay. And this was just built for us right now. If I open up the terminal. Yeah! Serverless. Here's my "ondemand" function. `/eleventy/possum/`. Excellent! Okay! 

**Zach:** <i class="timecode">[00:34:45]</i> And that's, I don't know, that took a little bit of work to get going, because this is actually BrowserSync middleware that's running your serverless function for you.

**Ben:** <i class="timecode">[00:34:58]</i> Gotcha.

**Zach:** <i class="timecode">[00:34:59]</i> So, anyway, that's behind-the-scenes stuff.

**Ben:** <i class="timecode">[00:35:02]</i> Nice! I mean, that's really cool. I'd love to take a look at that at some point. Just kind of see how that's working. 

**Zach:** <i class="timecode">[00:35:08]</i> Yeah, the reason I implemented it that way is because I didn't want an additional dependency to be able to look at these things locally. You can use `netlify dev` to have a more, like, authentic serverless function experience if you want. But I did want it more like — I don't how to say — like, packaged in, so you don't have to install another dependency to do that. 

**Ben:** <i class="timecode">[00:35:31]</i> Plus, not everyone's gonna be using Netlify to host their Eleventy sites, right? So…

**Zach:** <i class="timecode">[00:35:37]</i> Right, exactly.

**Ben:** <i class="timecode">[00:35:38]</i> Yeah. That totally makes sense. That's awesome.

So if I try to break things and go to `/eleventy/`, it's gonna complain at me. That's cool. `/possums/ondemand`, maybe? Okay, so it is very strictly if I've got two steps along this path. Very cool. 

**Zach:** <i class="timecode">[00:35:58]</i> Yeah, and you can set up some of those to be optional… although I don't know how bulletproof that is right now. But you can also add additional paths inside of your template. That supports an array of paths, too. So if you just wanted to use color1 and have that redirect to the same template, you can do that. 

**Ben:** <i class="timecode">[00:36:21]</i> Okay, so that I'm guessing if it's YAML, then that means I need an array, right? So would it be like…

**Zach:** <i class="timecode">[00:36:29]</i> Yeah.

**Ben:** <i class="timecode">[00:36:32]</i> Okay! So if I were to do that and come back here and then just say `/eleventy/`…

**Zach:** <i class="timecode">[00:36:38]</i> Why didn't that work?

**Ben:** <i class="timecode">[00:36:44]</i> What's it yelling about here? It's probably a YAML syntax issue. 

**Zach:** <i class="timecode">[00:36:51]</i> Oh, yeah, I would put quotes around that. 

**Ben:** <i class="timecode">[00:36:53]</i> Okay. Yeah, sounds good.

We'll see if that works.

Reloading browsers. It might yell at me. Interesting.

**Zach:** <i class="timecode">[00:37:17]</i> Mm. I can test this later.

**Ben:** <i class="timecode">[00:37:19]</i> Yeah.

**Zach:** <i class="timecode">[00:37:19]</i> I'll do that later.

**Ben:** <i class="timecode">[00:37:20]</i> Let's do that later.

**Zach:** <i class="timecode">[00:37:22]</i> You may have found another bug. 

**Ben:** <i class="timecode">[00:37:25]</i> Perhaps. It is this syntax, right? Like, you go ahead and start as though you're starting, like, an object, right? Like, you have your key, you have your colon. And then I have hyphens here. Everything's indented with two spaces, because YAML is a monster. 

**Zach:** <i class="timecode">[00:37:41]</i> I would have expected that to work. I usually use double quotes there, but… 

**Ben:** <i class="timecode">[00:37:46]</i> Oh, maybe. I don't know. I'll give that a try real  quick, but if that doesn't work out, that's fine. We'll just, you know, pivot back to building a color contrast checker.

**Zach:** <i class="timecode">[00:37:56]</i> The other thing I'm—

**Ben:** <i class="timecode">[00:37:58]</i> What's up?

**Zach:** <i class="timecode">[00:37:58]</i> I mean, the only other thought I had was that it might be a configuration reload problem. 

**Ben:** <i class="timecode">[00:38:04]</i> Oh, it could be. Yeah, I mean…

**Zach:** <i class="timecode">[00:38:09]</i> Although…

**Ben:** <i class="timecode">[00:38:10]</i> Like, it's specifically saying, like, YAML. I don't know.

Anyways, I think I'm going to go ahead and bring this back to being just our color1, color2 slugs. Just return to the excellent world of both Eleventy and possums.

Alright. Cool. So I guess the next thing is I want to get that ratio working. So I don't know…

Oh, yeah, that's what we were doing. Hmm.

**Zach:** <i class="timecode">[00:38:53]</i> Yeah. I mean, the other thing you can try that doesn't necessarily fix the bug that you may have just uncovered, but if you go to that `url-pattern` npm package that's linked up a little bit higher… 

**Ben:** <i class="timecode">[00:39:06]</i> `url-pattern`… Got it. 

**Zach:** <i class="timecode">[00:39:09]</i> There is some syntax in there for optional slugs, and I think it's, like, just parentheses around the slug.

**Ben:** <i class="timecode">[00:39:22]</i> I want to search for parentheses, but I know I can't because that's just going to match me every function call in here. "Optional segments."

**Zach:** <i class="timecode">[00:39:30]</i> There you go. Optional segments.

**Ben:** <i class="timecode">[00:39:31]</i> That's, like, a whole regex in there. Okay, got it. Interesting. Interesting… I think that's worth playing around with another time, perhaps, if you don't mind. 

**Zach:** <i class="timecode">[00:39:45]</i> Yeah, no problem. Yeah, I do have a hard stop in, like, 15 minutes. 

**Ben:** <i class="timecode">[00:39:49]</i> Okay, cool. I will make sure you have that hard stop.

So I would like to do, I guess, some computed data, and this is… I'm probably gonna, like, find a color contrast npm package and run some JavaScript, so I would think to do that, I would want to create a JavaScript data file for my contrast template

I don't actually tend to work in JavaScript data files a whole lot. I prefer to stick to, like, JSON where possible. So, alright. Let's find me…

**Zach:** <i class="timecode">[00:40:29]</i> I mean—

**Ben:** <i class="timecode">[00:40:30]</i> Oh, go ahead.

**Zach:** <i class="timecode">[00:40:32]</i> I feel like you… I don't know. My first thought was to use a… yeah, like this, a generic color contrast npm package, and then add it as, like, a filter.

**Ben:** <i class="timecode">[00:40:46]</i> Oh!

**Zach:** <i class="timecode">[00:40:47]</i> Then we can just call that filter. 

**Ben:** <i class="timecode">[00:40:49]</i> Oh, interesting. Okay. Got it. Well,  this looks like it could work for our purposes, especially if we're just saying hex codes, right? Future state, we can include named colors, because at some point I'm going to need to, you know, check `tomato` against everything. Okay. Let me install this helpful color contrast library.

Alright. I think I'm gonna have to, like, manually add this as… like, wrap around this, because I think I'm going to have to manually add the hashes. I don't think the browser is going to support those. Alright. Okay. 

**Zach:** <i class="timecode">[00:41:45]</i> And another thing that you can do is derive these values from — I mean your `color1` and your `color2` — you could derive those from computed data, too. If you wanted to simplify that inside your templates. So you could say, like, `eleventyComputed:`, and then `color1`, and then use pound and then that big, long slug thing. 

**Ben:** <i class="timecode">[00:42:06]</i> I like that. Alright, let's do it that way. Okay, so… `eleventyComputed`. I can do this in here. And then I can say `color1`, and this is pound, and then `eleventy.serverless` — spell it correctly — `path`, `color1`.

**Zach:** <i class="timecode">[00:42:32]</i> Yeah, put quotes around that, just to be safe. 

**Ben:** <i class="timecode">[00:42:35]</i> Yeah. You got it. Alright. And  then `color2` is the same way. And so now that I've got these as strings with a pound sign before the rest of the hex code, I can go ahead in here. I could say `const colorContrast = require('color-contrast')`, `eleventyConfig.addFilter('colorContrast', colorContrast)`. And so if I'm doing that… you can use filters in your `eleventyComputed`, right?

**Zach:** <i class="timecode">[00:43:19]</i> …Yes, you should be able to. 

**Ben:** <i class="timecode">[00:43:22]</i> Okay, well, let's put that to the test, because I want to just go ahead and say "ratio" in here.

**Zach:** <i class="timecode">[00:43:28]</i> Oh.

**Ben:** <i class="timecode">[00:43:30]</i> Maybe?

**Zach:** <i class="timecode">[00:43:33]</i> Yeah, let's try it, let's try it. I love it.

**Ben:** <i class="timecode">[00:43:38]</i> I have to remember the order for this. I'm not the best with Nunjucks and Liquid. I have to provide it a value first, I think, right? So I have to say, like, `color1`. And then I think it's pipe, and then `colorContrast`, which is the name of my filter. And then it's colon, I think?

**Zach:** <i class="timecode">[00:43:59]</i> Ooh.

**Ben:** <i class="timecode">[00:43:59]</i> To pass in remaining arguments? Or is it—?

**Zach:** <i class="timecode">[00:44:03]</i> Yeah, for Liquid, I do not remember. It's definitely parentheses for Nunjucks, but let me look. 

**Ben:** <i class="timecode">[00:44:10]</i> And Liquid is the default way of interpreting HTML templates, so, okay. I think it's colon. I want to say it's colon. 

**Zach:** <i class="timecode">[00:44:20]</i> Yep, you're right. It's colon.

**Ben:** <i class="timecode">[00:44:23]</i> I get to keep my Eleventy nerd card for just a little longer.

**Zach:** <i class="timecode">[00:44:27]</i> I don't have— 

**Ben:** <i class="timecode">[00:44:29]</i> What's up?

**Zach:** <i class="timecode">[00:44:30]</i> I don't have the Twitch chat open, but that's the link to the docs for that.

**Ben:** <i class="timecode">[00:44:34]</i> Yeah, let me stick that in the chat as well. There we go. Docs! But why read the docs when you have Zach here? Just get your friendly neighborhood Zach to—

**Zach:** <i class="timecode">[00:44:51]</i> I read the docs! <i class="brackets">[laughs]</i>

**Ben:** <i class="timecode">[00:44:53]</i> Alright. So, now that that's going, we've got an `eleventyComputed` ratio value. 

**Zach:** <i class="timecode">[00:45:00]</i> You still might want quotes around this. I'm just like YAML…

**Ben:** <i class="timecode">[00:45:05]</i> Okay! 

**Zach:** <i class="timecode">[00:45:07]</i> Quotes around everything.

**Ben:** <i class="timecode">[00:45:08]</i> Alright. Save this.

Travis says, "Zach will be available on demand," and I'm pretty sure that's what's going on. On-demand builders, Zach will build your site on demand! Pretty sure!

**Zach:** <i class="timecode">[00:45:21]</i> I will read the docs to you. 

**Ben:** <i class="timecode">[00:45:23]</i> <i class="brackets">[chuckles]</i> Maybe it would help if I used the proper script.

Ooh! "foreground.alpha is not a function." What have I done? Oh, let me put the logs back. "foreground.alpha is not a function."

**Zach:** <i class="timecode">[00:45:49]</i> Um… my first thought is because inside of your addFilter, you're just passing the entire function wholesale.

**Ben:** <i class="timecode">[00:46:00]</i> Okay.

**Zach:** <i class="timecode">[00:46:02]</i> If you go back to your Eleventy config, 

**Ben:** <i class="timecode">[00:46:04]</i> Yeah. 

**Zach:** <i class="timecode">[00:46:06]</i> Guessing that there might be some secret arguments here that we don't want. 

**Ben:** <i class="timecode">[00:46:10]</i> Ohh… yeah, we'll just hack away at that. What was…? There was someone who had a pretty good article recently about, like, not using generic functions as callbacks, but instead, like, always doing—

**Zach:** <i class="timecode">[00:46:25]</i> Jake Archibald!

**Ben:** <i class="timecode">[00:46:26]</i> Jake Archibald! That one was so good. Let me find it real quick and put that in the chat, just 'cause it's very rarely that I read an article that like really, seriously, like, makes, like, a good, compelling, like, mind-changing argument for me on these kinds of things. But, like, this one, I read it. It was like, I will never go back. This is excellent. Okay.

**Zach:** <i class="timecode">[00:46:49]</i> Yeah, it's really good.

**Ben:** <i class="timecode">[00:46:51]</i> Yes. Alright, so now that I've got that — npm run dev — we'll see if this is working. Ooh, what now? Oh, did I save this right? Yeah, let me swing back into this. It's not happy with this. I almost want to log the color1 and `color2`, and make sure that those are working right as well. Let's try `that`. Right, so I'm going to come in here, and… `{{ color1 | log }}`. `{{ color2 | log}}`.

Alright. See if we can find us our colors. Did I save this? Yes, I saved it. I should really swing back and forth less.

Oh, okay, here's a question. Why is it trying to render my template if I don't have any… like, if it's all on-demand, right? If I don't have any… Right, like, it shouldn't be hitting this at all right now, would be my thought, right? 'Cause we haven't actually tried to hit the page? 

**Zach:** <i class="timecode">[00:48:29]</i> …Yes and no. So, when you have serverless templates, we need to parse the frontmatter to know if it's a serverless template.

**Ben:** <i class="timecode">[00:48:41]</i> Makes sense.

**Zach:** <i class="timecode">[00:48:42]</i> And so you might be right in that we should not be… computing `eleventyComputed`, like, computed data in this, but we do need computed data to derive the permalink in some cases. 

**Ben:** <i class="timecode">[00:49:00]</i> Hmm. Interesting. 

**Zach:** <i class="timecode">[00:49:02]</i> I would try and comment out that ratio and see if it builds. 

**Ben:** <i class="timecode">[00:49:07]</i> That makes sense. 

**Zach:** <i class="timecode">[00:49:09]</i> I don't think you can do it that way though. 

**Ben:** <i class="timecode">[00:49:11]</i> Yeah, my editor was being helpful in the wrong way. Let's just try…

**Zach:** <i class="timecode">[00:49:15]</i> Yeah, mine does that all the time.

**Ben:** <i class="timecode">[00:49:17]</i> `npm run dev`. Okay, so it was happy with that. If I go back to our page here, it should log… #eleventy, #possum. Okay! So it is doing that just fine. And had these been colors, it would have passed that down. Had these been hex codes, it would've passed that down. I'm thinking we just maybe have a bad color contrast function, or one that's not quite working in a filter format.

**Zach:** <i class="timecode">[00:49:51]</i> I actually think that you may have encountered a computed data bug. 

**Ben:** <i class="timecode">[00:50:00]</i> Oh, yeah? 

**Zach:** <i class="timecode">[00:50:02]</i> Yeah. I mean, my assumption, whenever I see an error is that it's something that I did.

**Ben:** <i class="timecode">[00:50:07]</i> That's fair!

**Zach:** <i class="timecode">[00:50:08]</i> So I'm thinking all of the things that it could be inside of Eleventy specifically, and my guess is that when we try to determine the correct order in which to generate `eleventyComputed` values…

**Ben:** <i class="timecode">[00:50:27]</i> Okay.

**Zach:** <i class="timecode">[00:50:29]</i> …when they are strings, we have to do, we use this, like, two-pass method and the first path — or, the first pass, excuse me — tries to run those without values, or with empty values. 

**Ben:** <i class="timecode">[00:50:44]</i> Ohh. Wait, okay, so then what we could try is if I go in here and I say, instead of trying to handle my ratio as computed…

**Zach:** <i class="timecode">[00:50:55]</i> Yeah. I would expect this to work.

**Ben:** <i class="timecode">[00:50:58]</i> `colorContrast`, and pass it `color2`. All of that should work. 

**Zach:** <i class="timecode">[00:51:05]</i> The other thing I would expect to work is that if this was a function computed data instead of a string, it would probably work, too. 

**Ben:** <i class="timecode">[00:51:16]</i> Okay. So if we were to do…

**Zach:** <i class="timecode">[00:51:17]</i> String computed datas are a little bit riskier. Sorry.

**Ben:** <i class="timecode">[00:51:20]</i> If we were to do this inside the 11tydata.js file there. Ooh, hello. Wait, hang on, let me…

"foreground.alpha is not a function." What if I try anyways to hit an actual set of colors? Try the happy path.

Oh, okay! So that is working! I'm guessing it was working when it was in the computed data as well. It's just that… yeah. 

**Zach:** <i class="timecode">[00:51:56]</i> Well, I think we ran into the bug, the same bug, in two different ways, right? Once inside of the `eleventyComputed` data, where it tried to run that `colorContrast` on basically empty values. And then again, this time, when we tried to run it on those two, on "possum" and "eleventy" strings that weren't valid colors. 

**Ben:** <i class="timecode">[00:52:17]</i> Yeah. Okay. So probably it was getting undefined undef— or I guess it was getting, like, "#undefined," "#undefined." and it's like, "These aren't colors. That's not how colors work." Okay. It is, I guess, as an Eleventy consumer, still a little weird to me that it would be, like, trying to process some of those computed properties when, by the nature of being on-demand, it wouldn't have those values. So I guess I'm finding that a little surprising, and I'd be super, super curious to see if there's a workaround, because my assumption was definitely, like… either I had done something wrong or my filters were wrong in some way, where it's like, no, it's just trying to run things that it doesn't have access to yet because it's not going to have access to until it's run on demand.

**Zach:** <i class="timecode">[00:53:11]</i> Yeah, I mean, the weird part of this is that, as I mentioned earlier, you can use `eleventyComputed` to derive your permalink.

**Ben:** <i class="timecode">[00:53:21]</i> Mhmm.

**Zach:** <i class="timecode">[00:53:21]</i> So values inside of your `eleventyComputed` can be injected into your permalink value to generate those dynamic URLs or not, those values for you us. Now I could make… I bet I could fix this in a… or at least mitigate it, but in a better way.

**Ben:** <i class="timecode">[00:53:41]</i> Okay!

**Zach:** <i class="timecode">[00:53:41]</i> Yeah. In that if you don't have template syntax in your permalink, then it wouldn't try to do this. I bet I could work around that in a nicer way. 

**Ben:** <i class="timecode">[00:53:49]</i> If you end up doing that, would you mind reaching out to me and letting me know? Because I'd love to see what the fix was.

**Zach:** <i class="timecode">[00:53:56]</i> Yeah, yeah!

**Ben:** <i class="timecode">[00:53:56]</i> Cool.

**Zach:** <i class="timecode">[00:53:57]</i> I'll make it a note of it.

**Ben:** <i class="timecode">[00:53:58]</i> I'm gonna actually bring this  back to being computed properties, 'cause I think this'll work when I try to hit a page that I actually… that uses actual colors. So I'm going to try to bring this back, wrap this in quotes, and we'll just see if it really works. So I've got this, refresh, and then I want to try on just all new colors that I haven't tested with, just to make sure. So I'm going to try on black and white. Maybe with a trailing slash. Okay. So this is working. It's working as computed. It's just that that initial pass, when it's in the build step, is not quite working. I wonder— 

**Zach:** <i class="timecode">[00:54:47]</i> Oh, man! Okay. 

**Ben:** <i class="timecode">[00:54:48]</i> Yeah.

**Zach:** <i class="timecode">[00:54:48]</i> I see what you mean.

Uh, try and run it again. Start it over and see if that works. 

**Ben:** <i class="timecode">[00:54:56]</i> Okay. Yeah, it's not happy about foreground.alpha.

Okay.

Alright. I'm wondering if the fact that it's not happy with this, if this would keep me from, like, deploying on Netlify. 

**Zach:** <i class="timecode">[00:55:13]</i> Yes, this would fail. This error would fail your build. 

**Ben:** <i class="timecode">[00:55:16]</i> Got it. 

**Zach:** <i class="timecode">[00:55:20]</i> Yeah, so, I mean, you could just move that to be a function inside of your 11tydata file.

**Ben:** <i class="timecode">[00:55:27]</i> Yeah, let's do that.

**Zach:** <i class="timecode">[00:55:28]</i> And I would expect that to work.

**Ben:** <i class="timecode">[00:55:30]</i> Yeah. Okay, so… 

**Zach:** <i class="timecode">[00:55:34]</i> And one other thing I did want to mention before we move on too far is that when you're doing on-demand builders locally, they operate the same as on-request.

**Ben:** <i class="timecode">[00:55:46]</i> Okay.

**Zach:** <i class="timecode">[00:55:47]</i> But they're not going to cache locally for you.

**Ben:** <i class="timecode">[00:55:50]</i> Gotcha.

**Zach:** <i class="timecode">[00:55:52]</i> And that's just true of how the development experience of the `@netlify/functions` package works.

Makes sense.

**Ben:** <i class="timecode">[00:55:59]</i> Alright, so I would expect to do `return colorContrast(color1, color2)`. I can probably do some mitigation stuff in here, right? Like, if… let's say if `color1` is a string, and `color1.includes` the string "undefined," I could return null. Right?

**Zach:** <i class="timecode">[00:56:21]</i> I really feel like the easiest way to fix this is just going to be have some default — so go down to your filter and add some default colors.

**Ben:** <i class="timecode">[00:56:29]</i> Oh, okay. Yeah. So just say by default, we're going to have white and — no, that's black I just did. I promise I know colors. Okay, gotcha. 

**Zach:** <i class="timecode">[00:56:45]</i> And so computed data will run through this. You'll get these, like, these default colors, but it won't actually affect what's generated in your output.

**Ben:** <i class="timecode">[00:57:00]</i> Gotcha. Okay!

**Zach:** <i class="timecode">[00:57:02]</i> So yeah, that's confusing and annoying, but hopefully I can make it work better in the future. 

**Ben:** <i class="timecode">[00:57:08]</i> Yeah. 

**Zach:** <i class="timecode">[00:57:10]</i> Ohhh-kay, maybe not.

**Ben:** <i class="timecode">[00:57:13]</i> Let me make sure I saved. I saved. Interesting.

**Zach:** <i class="timecode">[00:57:19]</i> Can you go back to your template file?

**Ben:** <i class="timecode">[00:57:21]</i> Sure can!

And is it…? Yeah. Let me real quickly, what I'm going to do is I'm going to go ahead and just make this a full, explicit function here, and I'm gonna — just really curious here — console.log `a` and `b`. I'm going to stick a "possum" in there so it's easier to search.

Do a npm run build.

What?? 

**Zach:** <i class="timecode">[00:58:14]</i> Yep, so that's how the string data inside of computed, `eleventyComputed`, works.

**Ben:** <i class="timecode">[00:58:19]</i> Oh, that's incredible!

**Zach:** <i class="timecode">[00:58:20]</i> And this is… Yeah, so this is how we try and find the order to properly calculate these.

**Ben:** <i class="timecode">[00:58:26]</i> Mhmm.

**Zach:** <i class="timecode">[00:58:27]</i> So it's a dirty hack, but it works with every templating language. <i class="brackets">[laughs]</i>

**Ben:** <i class="timecode">[00:58:33]</i> That's so good! Oh, this makes me actually genuinely happy. But also… 

**Zach:** <i class="timecode">[00:58:40]</i> But also, it's breaking your `colorContrast` because it's passing these, like, bad strings in. 

**Ben:** <i class="timecode">[00:58:47]</i> Yeah. Huh! Interesting! 

**Zach:** <i class="timecode">[00:58:54]</i> Let's go back — Can you go back to your… Sorry, I know I'm, like, at time, but…

**Ben:** <i class="timecode">[00:58:58]</i> Yeah.

**Zach:** <i class="timecode">[00:58:59]</i> …I do kind of want to fix this real quick.

**Ben:** <i class="timecode">[00:59:00]</i> Mhmm!

**Zach:** <i class="timecode">[00:59:01]</i> Can you go back to your template file?

**Ben:** <i class="timecode">[00:59:03]</i> You got it.

**Zach:** <i class="timecode">[00:59:06]</i> And let's see. Let's… Oh, are you familiar with JavaScript frontmatter? 

**Ben:** <i class="timecode">[00:59:20]</i> Not extremely. I don't think I've, like,  played around with it.

**Zach:** <i class="timecode">[00:59:22]</i> Okay, yeah, just go to that triple dash at the top and put `js`. 

**Ben:** <i class="timecode">[00:59:27]</i> Okay. And everything in here has to be an object, right?

**Zach:** <i class="timecode">[00:59:31]</i> Yeah.

**Ben:** <i class="timecode">[00:59:35]</i> Like, I guess probably just recreate this. Can I… Do I have to use, like, string literals around the keys, or is it, like, JavaScript JSON?

**Zach:** <i class="timecode">[00:59:46]</i> Yeah, I don't think it requires JSON specifically, but I'm not 100% sure. 

**Ben:** <i class="timecode">[00:59:51]</i> Let's find out!

**Zach:** <i class="timecode">[00:59:52]</i> I think this is fine.

**Ben:** <i class="timecode">[00:59:54]</i> Alright, so there's this. Port this over. And then… `eleventyComputed`. Alright, and then…

**Zach:** <i class="timecode">[01:00:11]</i> You should be able to copy of those lines wholesale and then just put them…

**Ben:** <i class="timecode">[01:00:14]</i> Oh, yeah! This is basically JSON. Is the, Ooh. Add me some commas here and here. That should do it. And then, did you want to do the ratio in a different way? Like as opposed to—?

**Zach:** <i class="timecode">[01:00:32]</i> Yeah, so, yep. Let's create a function for that instead. Just kind of really curious if this will work. 

**Ben:** <i class="timecode">[01:00:42]</i> Okay. 

**Zach:** <i class="timecode">[01:00:43]</i> And so you'll want…

**Ben:** <i class="timecode">[01:00:47]</i> I'm gonna just nuke that.

**Zach:** <i class="timecode">[01:00:53]</i> Now I'm really curious if you can use filters inside of this. 

**Ben:** <i class="timecode">[01:01:00]</i> How would I get to it? Would it be globally available? Like, would I be able to do `colorContrast`? 

**Zach:** <i class="timecode">[01:01:07]</i> Well, it wouldn't be global. It might be on `this`, but I am not super confident about that all of a sudden.

**Ben:** <i class="timecode">[01:01:15]</i> Can we go to the docs? Let's find this out. 'Cause I think you've got… it would be in frontmatter somewhere. Where is…? "Frontmatter Data." Probably JS in here. Here's JSON frontmatter. There's JavaScript frontmatter. Okay. But it doesn't seem to suggest anything about using filters. 

**Zach:** <i class="timecode">[01:01:51]</i> Yeah, I'm not super confident that you can do that. But if you look in the docs, it would probably be in the computed data section. 

**Ben:** <i class="timecode">[01:02:01]</i> Okay, got it. Computed data,

**Zach:** <i class="timecode">[01:02:04]</i> I don't see filters mentioned on computed data docs at all. Just running into all kinds of interesting issues. 

**Ben:** <i class="timecode">[01:02:21]</i> Yeah!

**Zach:** <i class="timecode">[01:02:24]</i> The whole thing comes down where we're trying to put everything into competed data, and we don't necessarily need to do that. We're really, really trying to do that.

**Ben:** <i class="timecode">[01:02:36]</i> Yeah.

**Zach:** <i class="timecode">[01:02:37]</i> Maybe we should have given up on that for the ratio a long time ago, because… Yeah, maybe we should just move to use the ratio inside of the template body instead.

**Ben:** <i class="timecode">[01:02:51]</i> Yeah. Then in that case I'm gonna…

**Zach:** <i class="timecode">[01:02:52]</i> And you can leave all that stuff as is.

**Ben:** <i class="timecode">[01:02:54]</i> I'm gonna un-JS-ify this, I think, then.

**Zach:** <i class="timecode">[01:02:57]</i> Okay.

**Ben:** <i class="timecode">[01:02:57]</i> Keep it how I had it. I think that's it. And then… nuke this. I think it may still give us — oop, nested braces — it may still give us issues on the build. Let's find out. I'm gonna run — clear that, and then run a build. Yeah. Oh! That's… Probably didn't clean up my frontmatter just right. I think I did! 

**Zach:** <i class="timecode">[01:03:42]</i> Oh, you have `js` in your…

**Ben:** <i class="timecode">[01:03:44]</i> Oh. Yes. Thank you.

Alright, now we build. Oh, okay! It's running. It's building successfully. Got it. So it was the problem there was that we were trying to do in computed and… Interesting. 

**Zach:** <i class="timecode">[01:04:00]</i> Yeah, that was sort of a… I don't know. I would say that filters in computed data are probably not technically supported right now after seeing that 

**Ben:** <i class="timecode">[01:04:15]</i> "Calculate ratios on demand." Push that up. And then I guess — and I know you've got to hop out, so if you need to, feel free — but I think the next step is probably I'm just going to try to get this up on Netlify real quick. 

**Zach:** <i class="timecode">[01:04:35]</i> Oh, yeah, let's just try and deploy it and see what happens. 

**Ben:** <i class="timecode">[01:04:37]</i> Yeah. `netlify init`. Ooh, okay. New site. I'm gonna call this `eleventy-serverless-color-contrast`. That's probably not taken yet. Here's hoping I haven't given away any secrets. I don't think the site ID is a secret.

**Zach:** <i class="timecode">[01:05:02]</i> Nope, that's fine.

**Ben:** <i class="timecode">[01:05:04]</i> Oh, it's complaining because I'm on an organization's repo and not… my project. Let me, I guess, just do this in Netlify. Alright, point this to a different repo. Build and deploy. Link site to Git. GitHub. Some Antics. Then it should find… There we go.

**Zach:** <i class="timecode">[01:05:41]</i> I love that name. "Some Antics"! 

**Ben:** <i class="timecode">[01:05:44]</i> Thank you! I am… I consider myself a pun-driven developer. 

<i class="brackets">[Zach chuckles]</i>

So I came up with the name. I'm like, "Shoot, this is a really good name. I have to do something with this." And that's the impetus that got me into streaming.

<i class="brackets">[Zach chuckles]</i>

So, it's funny. I was on Jason's show the other day, there was just a moment in the chat where, like, someone realized, like, " Oh, it's like semantic markup!," and just instantly the chat started going, like, "Ohhhh!" It's, like, the moment that clicks. Yeah.

Okay, so it should be deploying that now. Let's see. Oh! It failed. Is it failing for a predictable reason? Oh! My `src/_data` and `_includes` are empty. Let me just stick a… I think there's, like, an official, like, convention for empty files, but I'm just going to do a "plshavestuff," "pls." I don't know if doing anything like this will—

**Zach:** <i class="timecode">[01:07:00]</i> It's, like, `.gitkeep`. 

**Ben:** <i class="timecode">[01:07:02]</i> Oh, is that what it's called? It is `.gitkeep`, isn't it? Yeah. Alright. Alright, let's see. I don't know if there needs to be anything else in there, but let's try this now. Why is my…? Oh, Netlify is doing stuff with the .gitignore, that's right. 

Here's hoping. Fingers crossed. We can build an Eleventy site.

**Zach:** <i class="timecode">[01:08:00]</i> You are truly the canary in the coal mine right now. 

**Ben:** <i class="timecode">[01:08:06]</i> Well, I mean, it's a fun place to be. Again, I'm seriously, so, so grateful that you've hopped on for this… 

**Zach:** <i class="timecode">[01:08:16]</i> Yeah, it's been fun.

**Ben:** <i class="timecode">[01:08:17]</i> …especially on short notice. Yeah, likewise!

It looks like we're live. Let's preview. This is gonna give me the hash URL, yeah. But I can just go there. So that's fine. This is still going to break. Also fine. But if I now do a whole bunch of f's, and for this one, I'll do some 3's, and then add a trailing slash, we've got a ratio! It works! Nice!

**Zach:** <i class="timecode">[01:08:53]</i> Woo!

**Ben:** <i class="timecode">[01:08:54]</i> And because it's all cached, we can see the times, right? So I think I can go into the Network tab and see how long these things take. So I'm going to choose white. Yeah, that's six of them. So… why is it not…? Oh, hang on. There we go. Got it. So that took… Where does it say how long it takes? Would be somewhere in here, right? I feel like…?

**Zach:** <i class="timecode">[01:09:30]</i> I think if you… There's, like, a Timing tab. 

**Ben:** <i class="timecode">[01:09:35]</i> Awesome. Timing, yes. It took 617 milliseconds. But if I refresh this, Netlify should have this cached, so it's not going to take 617 milliseconds, right? It's gonna take… 

**Zach:** <i class="timecode">[01:09:50]</i> Yeah, and 600 milliseconds seems like a lot to me also. 

**Ben:** <i class="timecode">[01:09:55]</i> Yeah. But this is 123 milliseconds. So it's cached. It's way, way faster. Yeah, and there is the graph up here too. So, and every time I load this going forward, it should… Yeah, it's on the order of, like, 120 to 150, which is much faster. So, that's awesome. I'm going to stick this link in the chat for folks. But I think that's probably it.

And I know  you've got little time. I guess just real quickly, how wild do you expect people are going to get with Eleventy Serverless? Like, what are some things that you envision that this is going to open up for people? 

**Zach:** <i class="timecode">[01:10:35]</i> I mean, there is just like a ton of things that basically, like… I don't even know. It's going to be a little bit scary, I think—

**Ben:** <i class="timecode">[01:10:44]</i> Okay.

**Zach:** <i class="timecode">[01:10:45]</i> —depending on how often people use this on-request model.

**Ben:** <i class="timecode">[01:10:50]</i> Okay.

**Zach:** <i class="timecode">[01:10:51]</i> I'm a little nervous about it, to be honest, because if everyone really dives in deep into this, into using on-request instead of these on-demand builders, it could result in slower sites, which is not what I want to happen. So the more people sort of dip their toes into these, like, dynamic use cases, it really creates some more risk for your site. And that's kind of what the original, like, argument for Jamstack was, right? Doing as much as you can in the upfront build reduces your work, improves your visitor experience because things are faster. So, I mean, it is gonna open up some more use cases, especially around, like, content personalization, and CMS previews is another one I've used it for.

**Ben:** <i class="timecode">[01:11:43]</i> Okay.

**Zach:** <i class="timecode">[01:11:44]</i> And that's, I would say CMS previews, I've used the on-request mode for that. And that's just a little bit safer because it's not, like, a public-facing thing. It's like, you're in an admin panel and you're looking at your site, your, like, drafts in your CMS. You want to see live previews of those. So it's not like it's the homepage of 11ty.dev, for example, that's running, on-request mode as it is right now and has been all day.

Yeah, it's just, it's riskier to run a site in that mode. So, I would say just, I would recommend to people just use on-demand builders when you can. And even that… So, I'm just going to keep going on this. So I would say just prefer the default mode, which is the static site generator. Use the build time for as long as you can. When you run into problems, switch to on-demand builders and sort of opt into that mode when you need to solve those problems. And if you need these, like, more dynamic use cases, especially for things like CMS previews, then you can look at the on-request mode, too. But I would say, yeah, just keep the default as is. Don't use the plugin unless you need it. 

**Ben:** <i class="timecode">[01:13:02]</i> Alright. Well, thank you so much for coming on Zack. And chat, thank y'all for hopping on as well, especially with so little notice. Speaking of notice, y'all should know that next Tuesday, 12pm Central, I've got Alex Anderson coming on. We're going to be adding, like, screenreader support and keyboard navigability to 3D games built with web tech. So I'm pretty excited for that one. That is a space I know nothing about, is like, how do you make that kind of stuff work for, like, 3D games and such. So I'm excited to learn more, and I hope you all will join me as well. But with that, I think I'm going to go ahead and sign off, so thank you all. And thank you, Zach, so much.

**Zach:** <i class="timecode">[01:13:45]</i> Thanks for having me, Ben.
{% endraw %}