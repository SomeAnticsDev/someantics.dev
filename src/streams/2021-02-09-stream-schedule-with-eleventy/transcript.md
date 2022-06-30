Hello, hello! Howdy, howdy, y'all! Welcome back to Some Antics. Today I am joined by y'all, the lovely chat. How are you doing today? There's a bit of a delay, so I'm not going to wait super, super long for responses, but hello! Today I'm going to be introducing Eleventy. Eleventy is my favorite static site generator.

Michael says, in all caps, "GOOD HOW ARE YOU?" I'm doing really well. I'm looking forward to this. It is a little weird, just speaking into a microphone with no conversant on the other end. But I'm happy to have y'all here in the chat. Super excited about that. Yeah.

So today yeah, I'm going to be doing Eleventy. Eleventy is a static site generator. There are numerous static site generators out there. I'm not here to dunk on any of them. They all have their own various use cases and their needs and their *[00:01:00]* benefits. And they're all pretty good at what they do. I particularly love Eleventy because, as far as static site generators go, Eleventy feels—I don't know, "pure" isn't the word I'm looking for, but I kind of think about, like, a primary use case for a static site generator is that you have content and/or data, and you want to transform it into HTML. You don't want to do anything fancy. You don't want to make a web app out of it. You just have this content and data and you want to transform it into some HTML. And that's really what Eleventy's bread and butter is. That's what Eleventy excels at.

Howdy, Chan! How's it going?

Alright. So I am currently on the Eleventy homepage. This is 11ty.dev. I'll put that in the chat. There we *[00:02:00]* go. So, yeah, here's the homepage for Eleventy. When you get to the homepage, you can find the docs several ways. One is that this banner right here with the lovely , balloon-lifted possum , this banner is itself a link. Now, the way *I* prefer to get to the docs is by scrolling down a bit and clicking the super subtle documentation link. And that'll take me right there. It's really hard to miss, but  if you look closely, you will be able to find it. So this will give you the docs for Eleventy. And there's tons of great information here. We're going to refer back to this several times over the course of the stream. So this is a great site to get to know.

Additionally, I do want to shout out that the docs actually were not how I learned Eleventy. I learned Eleventy by taking a course from Andy Bell, his Learned Eleventy From Scratch course. It's really good, and I'm going to give it a *[00:03:00]* heavy, heavy recommendation. He has currently gotten the price down to a nice cost of $69. It's absolutely worth it if Eleventy is something you're interested in. I'm not going to cover nearly everything that's covered in that course. But if you're looking to get up and running with it, building a real site in Eleventy , you can do a lot worse than this course. This course is great. Massive kudos to Andy for putting this out there. This course right here was the course that changed my mind on my blog. It was the catalyst for me switching everything over, porting my blog over to an Eleventy site. So that is the absolute best recommendation I can give for something like this.

Yeah. So with that, let's get in and do some Eleventy I'm going to start as far back from the beginning as I can. And because we've only got an hour, we're *[00:04:00]* not going to be able to cover everything. As a result, I'm really hoping that we could turn today into what I'm calling a "chat-your-own-adventure," where if you guys get in the chat, if y'all get in the chat, and just kind of let me know what you're curious about, what questions you have, what direction you would like to take the course, what aspects of Eleventy I should cover, let me know, because that'll be really great feedback and we'll get to explore various exciting facets of Eleventy doing that.

I want to show you kind of my inspiration for the site that we'll be building. I have been announcing every stream a week at a time. And the thought on that is that if I'm announcing multiple different streams, multiple different guests, it can be hard to keep track of what's happening when, so I really kept it like it very much so has been a queue, *[00:05:00]* right? Where I'm only actively promoting one stream at a time, but that's not great. I would love to be able to say, if I've got a really exciting guest on, I would really love to be able to let you know as early as those details are confirmed. So I'd like to have a site that can serve as a hub for showing you what streams are upcoming, which guests we're going to be having in the future when that's been decided.

Additionally, when I upload the recordings, the VODs, to YouTube and provide captions and transcripts, I want a hub for that, too. I don't want these streams to disappear into the ether. I want to have a hub of resource that people can come back to, to catch up on old streams that they might be interested in/ and really, truly the inspiration for this is from the Learn With Jason site, which I'm going to pull up at lwj.dev.

If you go to this, it highlights what the *[00:06:00]* upcoming stream is, but also gives you ways to catch up on old streams. And you can go over to the Episodes tab here, you can see all of the old streams chronologically. And you can go to the Schedule tab and you can see all of the scheduled upcoming streams.

Right now, I don't really want to have all these things be separate pages. Right now, I'm looking to have a single homepage that combines the backlog with the upcoming events schedule. So that's what I'll be building. It's a real site that I genuinely want to have up in production by the end of this hour. I'm going to be hosting on Netlify using GitHub for deployments. So that is my goal. So hopefully it kind of makes sense what the objective is here.

But I'm going to start at the absolute beginning. And like I said, this stream has not been super heavily planned because even though I have a goal in mind for the site I want to bu ild, it's more important to me *[00:07:00]* that this gets to be a chat-your-own-adventure, where you can ask questions about Eleventy and kind of choose the direction for what we cover next. That way I'm covering stuff that's interesting to you.

 Cool. Well, let's go ahead and get started. I have right here, a brand new, absolutely clean repository. There is nothing in this. It's just a brand new repository. So here is where we're going to get started.

First of all, Eleventy transforms Markdown into HTML pages. I'm sure you could have it transform other files besides Markdown, but the Markdown transformation is what really seems super built into Eleventy. So I'm going to go ahead and create a Markdown file. We're going to call this, you know, we're doing a bit of a Hello World, right? So I'm going to call this hello-world.md. And then inside here, I'm just going to put it in some absolutely standard *[00:08:00]* Markdown.

And we'll link this to us. Add in a bit more syntax. There we go. Just an absolutely standard markdown file. Nothing profound with this. I would like to use Eleventy to transform this Markdown file into an HTML page. And so the way I'm going to do that, in my terminal, I'm going to come down to my terminal here—and let me know, by the way, if the font size is fine for y'all .

Hey, Prince! It's good to see you! How have things been going on your end? Delays are always really weird. I'm still getting used to the fact that the stream and chat are *[00:09:00]* not exactly real-time.

 But yeah, so I've got this Markdown file. I want to transform it into an HTML page using Eleventy. So first of all , we are going to eventually install Eleventy, but before we get to that point, I want to just show you, at its core, what Eleventy is doing for us.

So I'm going to use npx to execute Eleventy. So I'm going to do `npx @11ty/eleventy`. And yes, there are two different spellings for Eleventy. They're both canon, if you will. But yeah, it's wild. I love the sheer chaos of having two different spellings for the same name.

Prince says, "Everything is going well! I'm checking my Raspberry Pi because I might've broken it by accident." Nooo! I'm sorry to hear that, Prince. You're doing some really cool stuff with that and I'm excited to see more. 

Alright, I'm going to execute the Eleventy library. *[00:10:00]* It's going to think for a bit. It's always going to be a little slower right now because we're using npx rather than a local install. It's just going to go fetch Eleventy and it's going to process this markdown file. And it's going to generate an _site directory for us. And you can see that it's done that. We have an _site.

And inside there, if I pop that _site with our built site , if we pop open our build, you can see that we have a hello-world directory and that hello-world directory has an index.html. If I pop open that index.html, you can see that we have an HTML translation, if you will, of our Markdown. A thing I do want to call out here is that this is not really a full-bodied HTML page, right? This is a fragment at best. This just has the pure, like, just honestly, just the translation of our Markdown into HTML. *[00:11:00]* None of the surroundings, none of the trappings, I guess, you might expect . Yeah. So, something that we're going to want to fix.

 Additionally, do notice that the directory structure of our build, this _site, is following the conventions set out by our filenames. So, because I created hello-world.md, that got turned into hello-world /index html. And so, if we'd called hello-world something else , then we would have a different path here.

I think that's fairly straightforward and because it's hello-world/index.html, that index html, that's a conventional name for the—basically, browsers recognize it and recognize as, like, you can leave off the index.html and just cut it off at the trailing slash. So If we were hosting our site up anywhere—it will eventually be hosted at someantics.dev—if we were to host our site, we could go *[00:12:00]* to someantics.dev/hello-world, and that's how we would be able to get to this page. 

Yeah. So Chan's asking, "Is there anything you have to keep a local install of Eleventy for, or is it just the convenience of local config and speed? Consequently does running the npx version honor the local configs?" I believe yes, running the npx version should honor the local config, which we'll get to the config later.

And in my experience, the main reason you would want to locally install Eleventy is that would allow you to pin the version. So if Eleventy updates down the road, then that's fine, you're not going to risk breaking changes in your application because everyone who's cloned the repository has the current version mentioned or current acceptable versions mentioned in their package json, which we don't have a package.json yet because we haven't initialized this as an npm project yet. But yeah, that is, I think, the *[00:13:00]* main sell, is local installs let you pin the version down and therefore make the decision when you want to update Eleventy rather than consuming just whatever version's latest. Hopefully that helps, Chan. 

Alright. So yeah, we have this Hello World , and the next thing I want to demonstrate for y'all is that we can create our own directory structure here. So, I'm not going to use this as a blog, but let's say I did want to use this as a blog. I could create a folder called blog. That would be fairly descriptive.

And inside here, I'm going to say my-post.md. Inside here, I'm going to go, "My Post. It's a post." And I'll re-execute Eleventy. And as I do this, I want you to kind of ponder, what do you expect the final result to look like? What will the final build look like? What would we see in *[00:14:00]* that _site directory?

We are done building so we can confirm our assumptions. We have , inside our _site build, we have a blog directory , and inside blog, we have a my-post directory, and inside my-post, we have index.html. So the build is following the directory structure that we set forth in our Eleventy project.

This is one of the things I really love about Eleventy is that… every framework is opinionated. Every static site generator is going to be opinionated. But Eleventy's opinions seem to be that its opinions shouldn't get in your way, as opposed to something like Next where the pages directory, it's just like, that's a magic directory and you just kind of have to deal with that convention. You have to put everything in this pages directory for it to get actually output to a page. Eleventy lets you set up your directory however you want. And as we *[00:15:00]* might get into later, it lets you configure those settings as much as you want to. It's highly configurable and I think that's super, super cool.

So, yeah, we have the trappings of an Eleventy site. I'm going to do a few more things for quality-of-life  improvements, just to get this actually up and running as a fully fledged application with the opinions that I share. So the first thing that I'm going to do, I'm actually going to nuke our _site directory. 'Cause our hello-world and other Markdown files, we're not going to hold onto those for very long.

I'm going to create me a .gitignore. I don't really want to include the site, that built site. So I'm going to exclude that and exclude node_modules. I'm going to exclude our lockfiles. I typically use Yarn, but I think for today, I'm going to use npm, just because that's more *[00:16:00]* universal. I think that's everything I need to… you know what? I'm just going to preempt everything and just immediately ignore the .DS_Store. Cool. We've got a .gItignore. And nuke everything else in here. No more Markdown files.

Hey, Maxim! It's good to see you. How have you been since Advent of Code? I haven't heard of a lot from you. 

I'm going to go ahead and initialize this as an npm project. Just give it ALL the defaults. There you go. Yeah, so here's what we've got.

We've got Adrianne. Hello, Adrianne. It's good to see you as well. Hopefully work's treating you alright.

Yeah. So I've now created this as a Node module, and at this point, I want to go ahead and install Eleventy proper. So I'm going to `npm install *[00:17:00]* @11ty/eleventy`, spelled out. It's gonna think for a moment. And in the meantime, I'll go ahead and create some scripts.

So I want to be able to run `npm run build` and execute Eleventy to transform my site, create a built version of my site, right? And what we just saw was if you just execute the Eleventy package directly, you get that built. So if I want to build an Eleventy site using `npm run build`, I can create a script called `build` and that script will just be set to `eleventy`. I'm also gonna add on another script, which is going to be `dev`. We're going to be able to run `npm run dev`. And this is going to be set to `eleventy --serve`.

So many, many repositories have their own… Why…? There we go. Oh, wait. No, I just, whoops. Let me just *[00:18:00]* reinstall Eleventy. There we go.

 Yeah, many web frameworks will have a dev server that lets you hot reload your experience, your site, as you're building it. Eleventy's hot reload is  powered by BrowserSync. So by adding this `npm run dev` command, we're telling it, "Hey, build the site, every time we change a file, rebuild the site, and then also serve that built site using BrowserSync. So it's pretty cool.

 Maxim says, "I've been on a break and recharging my batteries during January. Slowly getting back to creating content." I hear that. I hear that. Yeah. Well, it's great to see you. It's great to have you here.

 Cool. So we have now installed Eleventy, we can confirm that our scripts are working as expected. If, well, you know, it might make sense if I had a Markdown file again. And that Markdown file, I guess I'm just going to call it *[00:19:00]* stream-schedule-with-eleventy.md. Just put in some filler stuff here. It would help if I could use punctuation. It's happening right now.

Okay. So to test our scripts, we could do npm run build. It's gonna think for a minute. Look how much faster than it is now that we're not pulling from NPM with npx. We now have our stream-schedule-with-eleventy. That's working. We could also do npm run dev, and now this is going to serve up our site on port 8080.

So I'm going to go ahead and open that up. And it's going to tell us that we can't get the route. That's fine because we haven't created a homepage, but what we have created is *[00:20:00]* stream-schedule-with-eleventy. And look, it's right there. We've got a page. Congratulations. We're all done. We've made an Eleventy site. We're going to go raid. No, we still have a lot more we want to do. 

Another thing that I want to do as a quality of life improver is, I… as the site grows, we're going to have a whole bunch of Markdown files just, like, here in the root level of my repository, and that just feels gross to me. Like, the root level of a repo should be for the high-level configurations and not for the content.

So I want to be able to, I guess, kind of hide away my schedule, my Markdown files. I want to be able to hide them away. I also would love… Because I'm going to be hosting this up on GitHub in a way that anyone can contribute to. I would love to be able to like have Markdown files at the top level of the repo to serve as, like, a README or a contributors guide—Markdown files that I don't want to transform into HTML pages for my site.

So it's time to *[00:21:00]* start setting up some configuration for Eleventy. The way you do configurations in Eleventy is you create a .eleventy.js file in the root of your directory, in the root of your repository. And in here, you can export just directly an object, or in my case, I'm going to export a function because down the road, there are going to be more things that I want to do in here. And this function is going to return a configuration object. Object, not parentheses. And, truth be told, I always forget the syntax for this. So I'm going to go pull up the Eleventy docs, and I specifically want to set the input directory, is what I'm trying to do. 

So I'm on the configuration page. I'll do y'all a favor and send that to you. Yeah! So, in here… *[00:22:00]* My mission, if I choose to accept it, is to return a configuration object. This configuration object can accept a "dir" property, and that'll contain some directory configurations. So I'm going to say that I… So, I've got this dir. I'm going to change the input directory. I'm going to change where Eleventy by default is going to look for all the things, not just Markdown files, but layouts, as we'll see, and others. And I'm going to say "src." I think that's a fairly reasonable standard.

 I'm going to kill the dev server. I'm never entirely sure when I'm supposed to kill Eleventy's dev server. It just feels like anytime I make a change to .eleventy.js, it's a bit of a gamble, but I'm going to do that. I'm killing the dev server. I'm going to create a src directory. Inside src, I'm going to create an event, and I'm actually going to start populating this with real information, like things that are *[00:23:00]* actually coming up such as, for instance, next week we have Michael Chan whom you might know as Chantastic, or he's in the chat as lunchdev. We're going to have him on. He's going to be talking about building accessible SVG icons in React. So I'll put an accessible-svgs-with-chantastic. There we go. Talk and code at the same time. Great idea, Ben. I'm going to go ahead and… I might've done a bit of prep work to just have a whole bunch of Markdown already ready. But yeah, so I've got now a Markdown file that's inside the src directory.

I'm even going to go one level deeper. I'm going to create a "stream"… maybe I'll call it "schedule." I'm not sure. What do y'all think? Would you… if you were going to a hub, like if you were going to someantics.dev, and you wanted to look *[00:24:00]* for an individual stream, would you want it to be /streams/ whatever the slug is? Or would you want it to be /schedule/ whatever the slug is? Love to know y'all's opinions here. 

But, okay, so I've got /src/streams. Oh, and I'll pluralize that. There we go. And then I'll have this Markdown file. And now when I run the dev server, we build an _site, and we get our accessible-svgs-with-chantastic. We get that. That's working just fine. But Eleventy is no longer looking for Markdown files at the root of our repository, so it completely ignores our stream-schedule-with-eleventy. So that's pretty cool. We get to configure this as much as we want. We get to have totally safe, unbuilt Markdown files at the root of our repo in case we want READMEs and stuff like that. I think that's really cool. So, alright! 

"When I think about it from the perspective of past events I lean towards 'streams' over 'schedule.'" I dig it. I dig it. Let's do that. *[00:25:00]* So we're going to keep it "streams." I like that opinion. 

You can see it's immediately rebuilding everything. Eleventy is so snappy, y'all.

But we still have a few problems that I want to address. For one thing, again, looking at this, this is not a full HTML page. It's just a fragment of an HTML page. It's missing the html tag. It's missing the doctype. It's missing the head. It's missing the body tag. It's missing a whole lot. 

So, Eleventy is transforming our Markdown into these fragments, but we can tell it, like, "Hey, I want you to take this fragment that you're generating for this Markdown file. I want you to stick it inside  just a layout, right? Some HTML that I've defined." So we're going to create what Eleventy calls "layouts," which, to do this, we first go into src, because we've just told Eleventy that we're looking in src for ALL the things now, basically. 

We're going to go in src. We're going to create a folder and this folder has a bit of a magic name. That magic name *[00:26:00]* is "_includes." We can go back to the docs here. We can… "eleventy includes." I guess it's… yeah. So you can see that there are ways to override the name of the includes directory, but by default, it's going to be _includes. And I tend to prefer to stick to with defaults. I think that's easier to Google after the fact, so it's easier to onboard more people if I'm looking to get more contributors to this. 

So, this _includes directory. Effectively, Eleventy is going to use this as a way to establish globally accessible layouts, so layouts that any Markdown file across my entire site can leverage. And we'll see what this means. I'm going to, inside my _includes, I'm going to create stream.html, and this right here is going to be my layout. So my layout is called stream.html.

 And *[00:27:00]* I'm going to add in our, you know, pretty standard HTML boilerplate here. I don't want to do a whole lot of fancy stuff here. So you know, I'll give this a title of "Some Antics," and inside here, I'm going to have, you know, go all out, have a header. "Some Antics." I'm going to have a main. 

And back in Anthony's stream, we talked a bit about skip links, which are ways to just completely skip over the navigation. They're the first focusable element in a page. And yeah, they just let you skip over navs, which is particularly helpful if you're navigating the page with a keyboard. So I'll go ahead and add in a skip link here. I'm going to say "Skip to content." This is going to go directly to #main-content. And gonna put some stuff in here. Look at that. *[00:28:00]* Stuff. 

Alright. So we have built out, you know, a basic HTML boilerplate. We could expect that, you know, we might want to stick some content in here somewhere. But now that we've got our layout, I want to apply this layout to our streams. So we have our stream Markdown file here. And this has the contents, but we can also specify some like metadata for this Markdown file. Some metadata that will get applied, will be made available as effectively variables. And this metadata is called frontmatter. 

To specify some frontmatter, we fence it off with these, like, triple hyphens and then inside here, we can use YAML-like syntax.

So, this is just kind of one of the, like, magic keywords that you just have to know for Eleventy. If you want to say, "Hey, this Markdown file, it's going to use this layout," then you have to use *[00:29:00]* "layout:" and then the name of your layout. I'm going to say "stream.html." 

And here we see the benefit of sticking our layout inside _includes, because when Eleventy runs into a name like this, it's going to go, "Oh, stream.html. Like, that's the name of a layout. I'm going to go check inside the includes directory and see if a stream.html exists." So by sticking stream.html inside _includes, we have made our layout globally available. 

So, I'm going to go ahead and save this. And at this point, I want to return to our page. Specifically on accessible-svgs-with-chantastic. So I'm going to go back here. I'm going to say… Ope. Maybe it would help if I added a slash. "accessible-svgs-with-chantastic." "Cannot GET." *[00:30:00]* Oh, it's because it's actually streams. There we go. That makes sense. 

So look at that. We've got, you know, we have our h1 that says "Stuff." We've got our skip link. We've got our header. Absolutely ugly looking site, but it is technically a site. There's just one problem with it. You might've noticed that it doesn't have any of our content anymore. We're not actually showing our content to the user. And that's because like, how would it know? 

Chan says "Ship it!" I agree.

 When we look at this layout that we're using, this page that Eleventy is supposed to slot our content into, there's no real way for Eleventy to know where our content should go. So we want to tell it— Good to see ya! We want to tell it where to put the content, and to do this, we're going to use Liquid's  interpolation—injection?—templating syntax, which is going to be these double curly braces. And inside here, we can put a Liquid expression, or *[00:31:00]* we could put a variable. Eleventy aggregates a whole bunch of variables for us that are made available when we need it inside of our Markdown templates, as well as inside of our layout here. And one of those variables, and again, this is just a bit of Eleventy magic that you just kind of have to know, is that we can say "content." And Eleventy's going to look at this and it's going to go, "Okay. Do we have a variable anywhere for content? Yeah, we totally do, it's going to be the contents of our Markdown file."

Allegedly. Allegedly…

Huh! Content… Is it content? I would think it would be content. My mind's blown. What about "contents?" Maybe that's it. Maybe that…

Rip. Web development was a *[00:32:00]* mistake and must be burned down.

"Eleventy content." Layouts. Let's look at the docs here. Content.

What if… you know what, I bet you I need to kill the dev server. I bet you that's it. Let's kill the dev server. Restart it. 

"Does Eleventy assume Liquid templates for the HTML extension?" It should… It might not! We will see. Oh! Oh, wait. Okay. 

This is embarrassing. This is very embarrassing. I was modifying the _site directory. I want to be modifying my layout. Look at that! Easy thing to trip you up. 

So I'm going to stick content here, inside the layout, not inside your _site, because you shouldn't be modifying the site *[00:33:00]* after it's been built. You should rebuild. That makes sense.

Yeah! Here we go! So everything's working now. We now have all of our contents just kind of injected here into our page. So it took our Markdown, it converted it into an HTML fragment, and then it slotted that fragment into our layout because we told it to with the "content" Liquid expression. So, yeah! 

We also have this for our other… well, actually, no, we don't. We don't have this for stream-schedule. There's nothing inside stream-schedule-with-eleventy, there's nothing in here to tell it that, "Hey, this should be using the same layout." So if I were to go to the stream-schedule-with-eleventy… can I copy relative path? 

If I were to go here… Kill all the duplicate stuff. And, you know, it would also help if I didn't have the md extension. You can see that it is not in any way using our *[00:34:00]* layout. 

So I could go into the frontmatter and I could say, "Hey, for every stream Markdown file, I need to add in the layout into the frontmatter," but that's going to lead to a lot of code duplication and that's no fun. It means it's incredibly easy to forget. It's incredibly easy to miss. And really and truly, I think all of my streams should by default use the same layout. So I have this problem of, I want to apply the same frontmatter property to all of the Markdown files inside streams here, no matter how many there are. I want to apply it all.

And to do this, I can use an Eleventy feature called "directory data files." So I've come back to the docs. And I'm looking for it. Yeah. Here we go. "Directory data files." I'll put this link in the chat as well for y'all to follow along. Directory data files are a way for you to specify  the values of the frontmatter or of the various *[00:35:00]* data that Eleventy aggregates for an entire folder at once.

So here's how we do this. I can create a new file inside streams, my streams directory here. I'm going to call it streams.json. I could also, if I wanted, call this streams.11tydata.json. Notice the 1-1-T-Y. But, eh. I'm going to keep it short. "streams.json." And notice that the name "streams" directly correlates with the name of the directory that we're in. That is a requirement for directory data files, is Eleventy knows that a JSON file is a directory data file if it shares the same name as its directory. And inside here, I'm going to have an object. It's going to have a "layout" property. That "layout" property is going to be "stream.html." 

Eleventy's rebuilding. And now, if I go back to the stream-schedule-with-eleventy, we now *[00:36:00]* have our lovely layout. So we're able to do lots of powerful stuff. At some point, you know, you can imagine that I would style this, I would add more content, but yeah, we do have a site up and running now. I would be curious to know kind of what y'all are thinking at this point, what questions you have. And yeah, just kind of letting me know what you're thinking. 

In the meantime, the next problem I want to solve is I don't currently have a homepage. I would like for the homepage to serve really as a very traditionalindex.html. 'Cause back in the days of yore with web development, index.html was really a link to all of the other, more interesting pages in the directory.

So I'm going to do that. I want a page that can serve as a list of links to all the different streams that we've got. So to do that, I am going to create… I'm going to *[00:37:00]* put this inside src. I'm going to create index.md. And this name matters because Eleventy is going to take index.md at the root level of what it cares about, which is src. It's going to take the index.md and it's going to turn it into index.html. And that makes it basically, like, that is the root route for—

Hey, Alan! Good to see you. I really enjoyed watching you learn Gatsby last night. That was a lot of fun. Thanks for letting me hang out. 

Yeah, so because index.md is going to get turned into index.html, and browsers recognize index.html as, like, saying, "This is like the root," whatever we put insideindex.md is going to be what you would get if you were to go directly to someantics.dev, whenever I set up that domain.

So I'm going to go ahead and create this, and I'm going to say, you know, "Some Antics." Really what I'm thinking about is, *[00:38:00]* I probably don't want to do this a whole lot during Markdown, right? I typically think of Markdown is very static content, but the idea is this is actually going to be fairly dynamic when we build. I want it to generate a list of all the links to all the different streams. And you could do that in Markdown. That would be totally fine. It's totally doable. But I don't know for me personally, I just feel like that's more of a layout thing. So I'm going to create a home layout. I'll call this "home.html." I'm going to give it… let's see… there we go.

Alright. I'm going to now say that this is, you know, "Welcome to Some Antics. Anything is possible at Someanticcom." Absolutely dated web development *[00:39:00]* references. Please let me know,  put something in the chat, put a tomato in the chat, if this is something that's familiar to you, what I'm referencing here.

 Cool. So now I kind of have this problem of, I want to get a different links for every Markdown file. I'd rather not hardcode that. That seems really, really annoying. So I need some way to get… 

I'm sorry, Alan. I'm sorry.  Good to have you here. Trying to go for like a Zombocom thing, Zombocom. How's that for, like, internet lore? 

Yeah, so I don't want to like hardcode—'cause I *could* hardcode a bunch of links, but that would not be fun. So instead, what I want to do is I want to have Eleventy provide all this information for me. And the way we can do this is through what Eleventy calls "collections." 

So Eleventy, you can think about, it's processing all of our Markdown files, right? And it's processing them in some ways. And so it has to do *[00:40:00]* a whole lot of organizing and a whole lot of data structures around the concept of processing Markdown files. And the way it does this internally is through collections. Collections are arrays of objects that represent all of our Markdown templates. 

So to see this in action… I'm going to give you all the links to the docs here, just so that you can learn more about collections. To see this in action, I want to first create a collection. I'm going to go into my .eleventy and I'm going to accept an argument here. "eleventyConfig." You can call this whenever you want. The docs call it "eleventyConfig." I'm going  to call it"eleventyConfig." 

I'm going to say "eleventyConfig." — I think it's addCollection. I always have to go back and check on this. "add"… Yeah. So I've got this eleventyConfig argument. I'm going to call the addCollection method. I give the collection a name and then I tell it, *[00:41:00]* "Hey, here's how, of all the Markdown files that you know about, Eleventy, here's how you pare this down to specifically the Markdown files that I want to describe in this collection." 

So, here's that in practice. I'm going to create a collection called "streams" and streams is going to take, I'm going to create a function here. And for me, I know that — I'm going to try not to go back and forth so often — but I know that all the streams I care about exist in the streams  directory. So, Eleventy exposesd as a way for me to get access to specifically the Markdown templates that are available, given a filepath, given a glob. So I'm going to use that. I'm going to give it a glob that says, "Hey, I want you to look specifically in the streams directory. I want you to see if you can find any Markdown files in there. Take those Markdown files and create a collection from that." That collection is then *[00:42:00]* going to be globally available. It's a little, there's a lot of steps here. It's a bit of a chain. So let's, I guess, just work through this. Once again, I always have to check on the docs, but I know that this is called getFilteredByGlob. And that's just a thing I've picked up from Andy Bell's Eleventy course, as well as from the docs here. So eleventy addCollection, return collectionApi.getFilteredByGlob(), and then you can pass it a glob. So let's do that. Return collectionApi.getFilteredByGlob(). I'm going to say, I just do… well, it's already in src.. We told it to look at the src because down here. So I'm going to say "streams/*.md."

This should work! Fingers crossed! Every developer's mood, right? This should work. *[00:43:00]* Let's see if this works. If I'm ever curious if something's working or what information I have available at a given moment, the thing that I will typically end up doing is I will go to my layouts and I will… 

First of all, I'll put "collections"… Sorry. Yeah, actually it is "collections," isn't it? I have to do collections dot… Yeah. Okay. So my collection, this streams collection is made available for me globally inside the collections.streams variable. So we can access that if we want to get all of our information about the streams collection. 

I'm going to see what happens if I do this. If this doesn't work, I have something else I want to try. Refresh this. Yeah. It's not liking that. 

 So another thing I can do is I can take whatever is available here…

*[bag rustles]* 

…this *[00:44:00]* collections.streams… Hi, Tuna..  Sorry, y'aly, my cat is intentionally traipsing through some bags. There's going to be a bit of…  Hey, Tuna, buddy! Now's not the time. Thank you, friend. 

Alright. I can take whatever's inside collections.streams and I can  pass it to a built-in log function. And the fact that nothing's logged is telling me that I probably need to restart the dev server. When in doubt, just restart the dev server. Doesn't seem to be logging anything if I refresh. Yeah. So probably something wrong with my glob, then. What if I do "src/streams/*.md", and then we'll see if this works.

Yeah. Gotta love some pipes. What if…? Let's see if *[00:45:00]* this works maybe. Who  knows? Always an adventure doing live coding, right? Oh boy! I bet you this'll do it. This is magic. This will make it happen. Well, perhaps not. What have I… I bet you it's a plural problem. I bet you I'm doing "collection" instead of "collections." See if that's it. Okay. That's interesting!

I swear I've done this many times before. And I am going to cheat by pulling up my own code for my own site. Let's see how it's done over there. *[00:46:00]* When in doubt, right? 

Collections, collections, addCollection, give it a name, do this. Oh, I'm doing some weird sorting stuff. Don't worry about that. I'm just going to steal this, I think it's the "./" that's the problem. That is the problem. So we're going to do that. 

Let's kill this… This'll do it. I'm confident.

Perhaps.

Man. Well, we might just have to leave this as like a teaser for part two, which I'll be doing in two weeks. Look at that. The suspense is building. 

Man, *[00:47:00]* I'm so curious! Like, src, streams, and then all Markdown files inside there. What if I go back to home instead of logging it? Maybe that's my problem. Maybe I don't have a log. 

Restart. Refresh.

Web development was a mistake. It must be stopped.

Fascinating!

Do y'all have any other questions about Eleventy? While I think about what this could possibly be. Oh, you know what? Bet you, what if I try...? If you've got any questions, definitely put it in the chat and I will go ahead *[00:48:00]* and try to answer them.

"Does Eleventy do MDX?" Not out of the box. That's not one of the templating languages that's supported out of the box. However, Mike Riethmuller, I believe, has been doing some great work with apparently some proof of concept for MDX. Eleventy's goal is building very lightweight websites and that means that you can serve JavaScript over the wire but that's not really what Eleventy's for, so it doesn't exactly make it easy. Eleventy does support what are called "partials." I sometimes call them "fragments." But basically, we could stick more stuff in our _includes. Like, if I decided that I wanted a reusable header, I could go in and I could say header.html, and inside here, this is going to be a pretty rudimentary header, but I'm going *[00:49:00]* to do it anyways. So I can have a header. Just says "Some Antics," exclamation point. I can go back into my home layout and I can do percent include header.html. This should maybe work. It would help if I maybe didn't do this part quite yet. Let's do "stream | log", and hopefully if it fails, it'll fail silently.

 Just not building anything at all any more, y'all.

Alan says "I don't really understand MDX yet, so it's all good." You know, that's fair. MDX definitely has some magic. 

Something probably seems to be failing though. Maybe change the  text of thehomepagee directly.  That's a good… Oh! Y'all. *[00:50:00]* I figured it out! I figured it out. I figured it out. We weren't consuming our layout.

That'll do it. That's like asking why the function that you wrote isn't doing anything when you didn't even import it. Look at that. I'm sure everything magically works now. Let me refresh. Look at that. Things are happening. We've got our partial. We probably have… Look at that, we have logs! That's it!

I did not lead you astray. We do have logs. 

Alan's done that a million times. Yeah, I feel that. That is a real mood, friend. 

Yeah, so we have TONS of information here! And I want to stress, like, here's what we're doing. We have this globally available collections.streams array. And we're iterating over it and we're sticking everything, we're doing just basically just iterating over it, saying each element is called "stream." And then here, we're just going to pass the stream to the log function. 

However, I want to do *[00:51:00] more. Right? I actually, instead of logging, I want to actually show some information. So let's do that real quick. We're running up on time and I do have, as ever, a 1:00 meeting, so I don't want to take too, too long on this, but I want to demonstrate some cool things you can do with this. So I'm going to, for each stream in our streams directory here, I want to take the stream's name and link. I want to use those. So for a given stream, we have a lot of information and I want to call your attention to ah, well, yeah, there's a lot. I'm just going to do some magic, but you can look and see everything that's in here. Let's first just put an anchor tag and in here, I'm going to say href equals stream URL. We're just gonna let that be a bit of magic. And for now I'm going to put stream in here because we don't have any more information than [00:52:00]* that really, that we can use. So I'm going to put stream.url in here. I'm going to refresh, and you can see that because we have two streams in our stream directory, we now have two stream bullet points here. 

I'd like to get more information about this, and we can use frontmatter to supply more information about our streams. This is really helpful if you just need some reusable information in general. So every stream is going to have a name, right? It's going to have a title. And so I'd like to be able to kind of abstract that out into my data layer. So I'm going to go into my frontmatter here. I'm going to create a title. You could call this whatever you want. I'm going to call it "title," which seems familiar to me. I'm going to nuke this from here and we'll see why in a moment. "Building Accessible SVG Icons in React with Chantastic." similarly, I'm going to come down here. This one doesn't have any frontmatter yet, but I'm going to do this. I have to wrap this in quotes because it's got an apostrophe. 

So we've got *[00:53:00]* this. We now have title inside of our frontmatter. And what that means is when I come back to home, when I'm iterating and getting each stream, I can now inject here stream.title.

We just created that title property. It now exists on this stream object. And… Lies! 

Oh, Nope. It's not stream.title. It's stream.data.title. We would know this if I had spent more time investigating the logs. There we go. Look at that! So we now have links. They'll take us directly to our stream, right?

And now that we've abstracted away our title, we can actually reuse this for different things. So I could go back into my stream layout and I could say I know that every stream will have a title and I know that that semantically needs to be an h1. So I could come in here, I could create an h1 tag. And inside here, *[00:54:00]* we're not iterating over any collections, we just simply have our title frontmatter made available to us as a global object. Eleventy combines a whole bunch of data for us at any given moment using a process called the "data cascade." It's really cool if you want to take a look at the docs, or maybe we'll explore that in two weeks' time. But for now I can just use this title variable. I can also reuse it up here too. So I can say title, pipe, Some Antics. And now we have an h1 up here. And if I were to go back to our homepage, go back to the other stream, you would see that here, too. We would see our h1. Super useful, for instance, if you wanted to add classes, like, Tailwind classes, maybe, to your h1, or if you wanted to put some stuff in between your h1 and your content. Super cool abstraction that you can do here. And also lets us have title, like, the document title, which is incredibly cool. 

*[00:55:00]* Yeah, I need to sign off, but join us next week. Next week, we're going to have Chantastic on. He's going to walk us through his journey of discovering how to make accessible SVG icons in React. Really excited for that. The following week, we're going to be picking this back up. I'm going to be using this site as just kind of like a recurring thing to build. So if you're curious about Eleventy and want to learn more, feel free to join us in two weeks' time. The week after that, we have Stephanie Eckles on, and we are going to be designing a layout, a design, a theme for Style Stage. So it's going to be an exciting few weeks. I'm looking forward to it. I will catch you all next week and thank you all for joining. Have a good one, y'all.