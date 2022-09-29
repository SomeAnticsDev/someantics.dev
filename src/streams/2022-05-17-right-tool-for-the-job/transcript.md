<i class="timecode">[00:00:00]</i> **Ben:** Ooh! Oh, there was a bit of a lag there. Howdy, howdy y'all! Happy Tuesday! Uh… happy Some Antics day, I guess… we are back! Some Antics, for those who don't know, is a weekly show about web accessibility and great user experiences. And today I'm joined by Salma, better known as whitep4nth3r. Salma, hello, welcome to the stream!

<i class="timecode">[00:00:25]</i> **Salma:** Howdy, howdy everyone! Howdy… stream-goers! How you doing? I hope we all doing very well. It's Tuesday…. it's… the weather is good here. Actually, you didn't ask that, but I'm gonna tell you. And, uh… life is busy. 

<i class="timecode">[00:00:42]</i> **Ben:** I, for… I really need to spend more time outside 'cause I don't even really know. Like, I think the weather's good. Actually, Texas weather has been blazing hot as of late. I went to renaissance fair this weekend…

<i class="timecode">[00:00:55]</i> **Salma:** oH!

<i class="timecode">[00:00:56]</i> **Ben:** … and tons of fun, tons of fun. Blazing hot though. I… a few of my fellow party-goers had to leave early because excess heat being outside too long - no good. Don't recommend… ren' fair - recommend. Texas heat - don't recommend.

<i class="timecode">[00:01:14]</i> **Salma:** My colleague Brittney at Netlify actually went to… a similar kind of thing in Michigan… holland, Michigan. They have this like "Dutch fair" with tulips and cloths and Dutch clothes, but also blazing hot. Could not recommend the weather, but could recommend the event. Same thing. 

<i class="timecode">[00:01:34]</i> **Ben:** Mm-hmm. Um… yeah! So I'm super, super thrilled to have you on… for those who haven't had the chance to meet you, would you like to give yourself an introduction? 

<i class="timecode">[00:01:44]</i> **Salma:** Yes! My name's Salma, you may know me as whitep4nth3r. Here's me in the chat, right there. I also stream on Twitch. I've been streaming on Twitch for almost two years now, but in the day, in my day job, I'm a staff developer experience engineer at Netlify.

And if you don't know what that means and developer relations and developer advocacy. Basically my job is to be in between the… the middle point between the people who make the product and the people who use the product and to advocate for developers, being able to use the platform as easily and as seamlessly and as enjoyably as possible.

And I get to make cool stuff, get to make cool demos, get to do conferences, get to do all sorts of things like this. And in the past I was a teacher, I was a music teacher. And what I like about this job is that I get to combine my experience of teaching with my experience of tech and put them together and have a good time, basically. That's me.

<i class="timecode">[00:02:50]</i> **Ben:** That was good. Yeah, and we're here to talk about the Jamstack. Um… and so maybe the best place to start is kind of the big question to, to set the stage: What is the Jamstack?

<i class="timecode">[00:03:04]</i> **Salma:** Okay, this is… this could go on a long tangent, could go on a long, long road, but… the Jamstack has been around as a concept for seven years now. It kind of started emerging with Netlify in 2015. And here's the TL;DR: I'm gonna read out my blog post, right? 'Cause… so I can avoid saying anything nonsensical.

Jamstack is an architectural model centered on serving pre-generated, highly portable static assets, and we'll get to what that means in a minute, from web development platforms, usually via a content delivery network, which is also shortened to CDN. And we can talk about what a CDN is later, if you want.

And, um… so that's it. It's about serving static stuff from a content delivery network… cache that's… and that static stuff is cached in the content delivery network around that Jamstack concept… it can be elevated and enhanced by a wide variety of modern, adjacent development tooling, which I call Jamstack-adjacent technology.

And these are things like serverless functions, edge functions, content management systems, version control integration, API services, software-as-a-services, all the other good fun stuff that can help you, like, bring together different services to make your website or products. So at the core of Jamstack, is that Jamstack isn't about tools or frameworks or services or anything.

It's a way of working and… it's defined by how you build websites rather than the tools with which you choose to build them. And… the reason why it came about, which I think we'll get to this later, is to solve a few of the problems that existed in the webspace in the 2010s and early two thousands.

<i class="timecode">[00:05:00]</i> **Ben:** And… and by problems with web development, like, what do you mean? Like, what is Jamstack trying to address there? 

<i class="timecode">[00:05:06]</i> **Salma:** Okay. So… traditionally… in a traditional kind of web development model, requests for webpages are processed by a managed server. And what that does is… so a managed server receives a request for a webpage from a user, from a browser.

And then in real time, the HTML document is built and bundled up and then sent back to the user's browser. So there's that whole kind of journey of request build, serve, I call it. And then if your webpage is big and complex, if there's a lot of logic in the backend, if there's lots of different jobs that your server needs to do in order to build that HTML…

and if the page request was far away from the origin server, this meant the websites could be really slow… and, resulting in a bad experience for the end user. Because we know as more and more people use the web for everything… a fast experience is key to making sure your websites are… usable, people return to them, you make sales, you grow your business and people can get your information.

So there's the problem of requests being far away and requests taking too long because everything has to be built and bundled up in real time on the server. So Jamstack solved that problem in two ways. Firstly, because Jamstack centers on serving static assets, it means that in order for your static asset to be cached and served from the CDN, it needs to be pre-generated and bundled up at build time, not request time.

So this means, with Jamstack, a server doesn't need to build anything when there's a request sent to the browser. It's um… it's just served. When you get a request it's served from the CDN. And so already it's a bit faster because you are serving a static asset that's ready to serve. But secondly, this whole concept of a CDN… a CDN is a network of distributed servers around the world, in what we call like an edge network.

And they… those network nodes work together to serve the cached content to the user from the closest server location possible. So it's a lot faster, cached content that's pre-generated is being served closer to the user. So that's the first thing… that the problem of slow websites that were generated in real time are now faster because they're served from an edge network and they're pre-generated. No extra work needs to be done.

Another problem that Jamstack was solving is the… the pain of developing on a huge monolithic fullstack tech stack. So before Jamstack, most websites were built using that like an entire full stack framework. It comprises backend server code, frontend templates, databases, everything all in one.

And I'm sure you've… some of you out in the audience have worked like this before. I definitely have, and new product features can take weeks to build, test and release to production. Software upgrades can be risky and difficult to roll back. And also your development environments are really, really difficult to provision.

You need to make sure you've got a database, a mock database from kind of obfuscated data. You need to make sure that you've probably got a number of virtual machines running the whole thing because your computer can't handle it or things like that. I've been there, I've done it. Vagrant and VirtualBox, etc.

And so the way Jamstack solved this problem was that it shifted to a decoupled architecture, which meant that the backend API services, frontend templates, database, and all the other little bits and pieces that you use to make a fully functioning website are separated and streamlined, which meant that developers of different disciplines can develop in parallel, release their own code and go faster. I remember back in the day when I was working at a place that had one of these big monolithic tech stacks, it took six hours once to release two lines of CSS that fixed a bug. And no one wants that anymore. So this whole decoupled thing, Jamstack really, really mainly focuses on the frontend.

All of your pre-generated HTML documents and static assets, Jamstack is kind of centered on that frontend, serve a website, serve HTML documents to the browser. So the thing with Jamstack is that your sites may or may not speak to any number of API services at build time or on the client. But you know, during that build process, Jamstack sites can call out to those APIs to fetch that data to your CMSs or to wherever to fetch that data and already… and build your pages based on that data, cache it, store it, and send it out via a CDN.

And once a Jamstack site is built, it's cached as an immutable deployer. And what that means is that it's saved in that state. So every time you deploy, a whole new bundle of your whole website is created. Not separate different pages that you might change, but your whole website, which means that Jamstack… you can roll back and forward really quickly with no hassle compared to, if you wanted to roll back a big monolithic server, big monolithic application.

I remember, um… I had to… when I was releasing this big monohitic… monothitic… mO-NO-LITHIC application, I had to canary to different servers manually. I had to say: "Right, let's release to that server. Let's release to that server…". And it took hours, and it was scary and painful as a frontend developer.

So Jamstack just takes care of all of that for you with immutable deploys. And what's more, a breaking backend change will not affect your Jamstack site until the next time it's rebuilt. So Jamstack sites are less buggy, more stable, easier to release and roll back and deploy, and you have full ownership of the code.

I have gone on a huge tangent. 

<i class="timecode">[00:11:16]</i> **Ben:** No, you're great! I… that… that point about like the… like the API and the server, the fact that rolling back is hard. Like, I've definitely — like, that resonates. At my previous role, we had… I was on the frontend team and then we had, like, a sister team that was doing our API stuff.

And once or twice, the API contract had to change in a way that was gonna be a breaking change. And that meant that both the frontend team and the backend team had to just basically, like, hold hands and promise to jump at the right time. And god forbid, there were any bugs… 

<i class="timecode">[00:11:53]</i> **Salma:** I've been there, yes, I've been there. 

<i class="timecode">[00:11:56]</i> **Ben:** Yeah, such a… such a pain point. To have a site that's gonna stay up and be alive and be… you know, totally operational, even as the backend that powers its builds changes. That's huge, that's incredible.

<i class="timecode">[00:12:13]</i> **Salma:** And there's one more thing that the Jamstack did to solve even more problems. It's… I was just talking to you about how, um… when I was releasing this huge monolithic application, I had to canary to different servers and you know, the servers were on premise, and… there was a specific dedicated DevOps, IT operations team to manage those servers, to manage things like security upgrades, and DNS, and then scaling the availability of those servers when traffic increased…

<i class="timecode">[00:12:49]</i> **Ben:** mm-hmm.

<i class="timecode">[00:12:50]</i> **Salma:** I remember 'cause it was an eCommerce place, so whenever there was Black Friday or Christmas, they had to do all of these load tests to make sure that the systems and the servers were scaled correctly to accommodate the extra requests.

But with Jamstack, that's all taken care of for you. Your web development platform like Netlify automatically scales when it needs to. Yes, you'll have to pay a little bit more for it, but you don't even need to worry about anything. Plus, you get HTTPS certificates, SSL for free as well, automatically.

And you can even get a site online without buying a domain… with platforms like Netlify. So it made websites faster, developers faster and more happy, and scaling less complicated. And that is the absolute concept…. we've got a raid. WHOA, we've got a huge raid! We've got a HUGE raid! What?!

<i class="timecode">[00:13:43]</i> **Ben:** Welcome. Welcome Lana_Lux and friends… sorry, both of us being streamers here. Like I was like waiting for the moment when I could be like: "Ah, yes. Thank you for the… thank you so much for the raid, Lana, it's hugely appreciated. Welcome everyone!

<i class="timecode">[00:13:55]</i> **Salma:** Welcome!

<i class="timecode">[00:13:56]</i> **Ben:** Salma, do you mind if I give a quick Some Antics pitch before we hop back into Jamstack?

<i class="timecode">[00:13:59]</i> **Salma:** Go ahead! You… go ahead!

<i class="timecode">[00:14:01]</i> **Ben:** So, Some Antics is a weekly show here: twitch.tv/SomeAnticsDev, where every week I bring on guests from around web development and web design to teach me something about building great user experiences for the web, typically in a hands on way, and typically with a focus on accessibility and/or core web technologies.

Today, we have the one and only whitep4nth3r here to talk about the Jamstack. And we're so, so glad y'all are here. Thank you all for coming through. So… 

<i class="timecode">[00:14:30]</i> **Salma:** wow! Didn't expect it, let's go! Here I am talking about the Jamstack to all these people. Um… what were we talking about?

<i class="timecode">[00:14:36]</i> **Ben:** We were, I mean, just in general, talking about the complexity of like running servers for all this kind of stuff and like, you know, having security policies and, and whatnot. And God forbid the server just go down in general, right?

Because that, that happens. Servers go down and now your frontend is broken because it's actively like calling out to an API that is down, you know? And so now… you know, maybe your frontend was expecting to get a request back, it didn't get back. And maybe if you haven't done your proper error handling, the whole page falls apart, right?

Like every domino in the chain just falls over. If, uh… you know, if you haven't properly handled the API foot guns. 

<i class="timecode">[00:15:20]</i> **Salma:** Exactly. And, so a lot of people think that Jamstack is a set of tools, a set of frontend frameworks, or a set of APIs and serverless functions. But I wanted to kind of… baseline reiterate that Jamstack is the way you work. Jamstack can use any tools or any services, as long as the core part of what you are building centers on… r.I.P servers, you will be missed… as long as the core part of what you're building centers on serving pre-generated static stuff from a CDN, then you're good to go.

And, you know, you can do things on the client, if you want afterwards with JavaScript, great! But if your site is mostly static, pre-rendered, then it's Jamstack. One note to, um… to come back to actually about the name Jamstack. Now, initially… I'll write it in the chat.

Initially Jamstack was written as capital "JAMstack," which was reflecting the fact that back in 2015, when this concept first came out, is that you were using JavaScript for J; J for JavaScript; APIs, and external services and markup together to build these sites on the Jamstack. But it's since been now kind of rebranded to just Jamstack, to actually show that it's not about the technologies you use.

<i class="timecode">[00:16:45]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:16:45]</i> **Salma:** Jamstack sites don't necessarily need to use jams… "Jamstack." 

Don't necessarily need to use JavaScript, or APIs! And it's just like, it can just be a static HTML page served and cached from a CDN. And so that's kind of why the shift happened, because Jamstack does not dictate your tooling.

There are a number of static site generators as well, which are kind very Jamstack-adjacent. They are kind of, you know… if you're using a tool or a framework to build static files, then it's very, very Jamstack. But there are a number of static site generators that use zero JavaScript, like Jekyll for example, I mean, you can write JavaScript on the client, but Jekyll's built in Ruby.

So it's not a prerequisite. "Mstack," "Markup stack." As long as it's no-managed-service stack, then we're fine. <i class="brackets">[laughs]</i>

<i class="timecode">[00:17:37]</i> **Ben:** But it does seem like in at least the past year or so there have been some aspects of kind of the Jamstack ecosystem that have moved back towards doing some things on a server, or specifically in a serverless way, right? 

<i class="timecode">[00:17:56]</i> **Salma:** This is what I refer to as Jamstack-adjacent technologies.

<i class="timecode">[00:18:00]</i> **Ben:** Okay.

<i class="timecode">[00:18:00]</i> **Salma:** Because <i class="brackets">[clears throat]</i> I think serverless functions and things like that get bundled in with Jamstack because they are services provided by web development platforms, right? So, you know, Netlify gives you serverless functions, you've got Cloudflare, you've got Vercel, etc. etc. etc.

And, because those platforms are so… closely related and fall in the same kind of web development category as static site generators and serving static files. I think erroneously, serverless functions have been called Jamstack, because they kind of come along with a lot of Jamstack sites, but… the core of that is that it's an architectural way of working.

And so using serverless functions is just a way to call a server when you need to. It's not part of that static site build, is it? So yes, your serverless functions might live in the same code repository, but when they are bundled up, at build time, they are not stored in the same way as static HTML sites.

They are not sent to the browser as cached assets, etc. So it's an adjacent technology, this kind of things. And you know, and now we've got a lot of things like edge functions being released as well, which are serverless functions at the edge. So again, serverless functions, but operating at the closest point to the user, which is kind of like the CDN concept crossed with the serverless functions.

So I got— there's a question from W1ngMatt.

<i class="timecode">[00:19:43]</i> **Ben:** Yes!

<i class="timecode">[00:19:43]</i> **Salma:** Would Eleventy be a good example of a JS-less, API-less, Jamstack situation? Absolutely. Now, but the reason why Eleventy embodies Jamstack so heavily is because it ships no JavaScript by default to the browser and just ships a folder of pre-generated built static, HTML files.

And that is why it's a perfect example. As Brittney says, hi Brittney! Because it's not about… <i class="brackets">[gasps]</i> JavaScript at all, right? It's about a tool to look at your templates to pause a bit of code, which you can write however you want in Eleventy using a variety of different templating languages. What Eleventy does is it builds it all and turns it into HTML files in a really intuitive, kind of just basic folder structure way. And it's static files, default Eleventy project. Just ship HTML files and that's, what's so Jamstacky about it.

<i class="timecode">[00:20:44]</i> **Ben:** Absolutely. And you've recently been… building and rebuilding some projects in Eleventy as of late, right?

<i class="timecode">[00:20:51]</i> **Salma:** Yes! So the biggest project I undertook, because of all this work I was doing around the Jamstack, and because of the kind of the investigations I was doing into it and trying to formulate actually what it was in, in my brain.

I recently migrated my own blog site whitep4nth3r.com from Next.js to Eleventy for this reason in that Next.js — no hate on Next.js, it's a great tool, right? But Next.js… "can" produce Jamstack sites, but it also gives you so much more of the adjacent stuff. And if you've ever inspected the source of a Jamstack… of a Next.js site, you'll notice how much JavaScript gets shipped to the browser.

So this is the Eleventy site now, right? But if I… can I actually send you a link to my Next.js site? One second…

<i class="timecode">[00:21:53]</i> **Ben:** yeah!

<i class="timecode">[00:21:53]</i> **Salma:** Which I've still got my… I've still got my own… p4nth3rblog.netlify.app. I've still got my old site on… and you'll notice that if you look at the network tab… you need a 3. You need a 3, not an E. There you go.

<i class="timecode">[00:22:13]</i> **Ben:** That l33tspeak though.

<i class="timecode">[00:22:15]</i> **Salma:** .netlify.app… 

<i class="brackets">[laughs]</i> That l33tspeak, right.

So if you look at the Network tab on the homepage, you'll see over 30 JavaScript files delivered to the browser by Next.js. And as a developer, my aim with my refactorwas to ship as little JavaScript to the browser as possible to kind of really support that… philosophy of the Jamstack of shipping basically just HTML.

And… let's see you try to get to the network tab. There you go! If you do another refresh now, you'll see them.

<i class="timecode">[00:22:56]</i> **Ben:** Yeah.

<i class="timecode">[00:22:57]</i> **Salma:** There you go, right…

<i class="timecode">[00:22:58]</i> **Ben:** lots of stuff.

<i class="timecode">[00:22:59]</i> **Salma:** So all of that stuff, all of that stuff. And, and also because Next.js is a very clever framework, there's a lot of prefetching being done of other roots cuz of the whole single-page application thing and using NextLink.

And, um… also… it's just, it just does, it chunks up the pages and chunks up the JavaScript. And so you'll just hit with a load of JavaScript. 

<i class="timecode">[00:23:22]</i> **Ben:** Yeah. I'm noticing here that like we've got your projects page, your talks, page, your FAQs. These are pages we are not currently on and it's already fetched those.

<i class="timecode">[00:23:30]</i> **Salma:** Exactly, which is great for performance, but if your core philosophy is wanting to just ship plain HTML documents as quickly as possible without the overheads of all this JavaScript, then let's see how we can get back to basics with just HTML.

If you now look at the network tab of, um… my homepage of my current site, you'll see one JavaScript file… and one HTML file. And the JavaScript file, the only job the JavaScript file does on that page, is to localize the time on the next Twitch stream. 

<i class="brackets">[laughs]</i> it's all the JS Ben has downloaded.

<i class="timecode">[00:24:16]</i> **Ben:** Yeah. My computer is… my computer's on a bit of a struggle bus right now, as it turns out, but…

<i class="timecode">[00:24:24]</i> **Salma:** too many Panthers on it.

<i class="timecode">[00:24:26]</i> **Ben:** That's gotta be it too… too many panthers… we gotta stop with the panther, Salma. Just too many of them. Okay, this is not, actually this, this is my extension that I've got.

<i class="timecode">[00:24:39]</i> **Salma:** Yeah, I've got the same thing. So there's just time_elements.js… my CSS file an SVG and whitep4nth3r.com with the HTML document and a favicon and that's it, right.

And so, so I set about in this refactor from Next.js to Eleventy to ship as little JavaScript to the browser as possible. And… the benefits that came out of this for me, switching to me relying on a framework, look like Next.js that I'd become so accustomed to. The benefits in my brain and the implications that having control of what I shipped to the browser again, were many fold, right?

I, when I first embarked upon this project… I wanted to find the Eleventy way of doing things, because I was so used to the Next.js way of doing things. And actually, there isn't an Eleventy way of doing things. You can do whatever you want with Eleventy as long as it builds, which results in that collection of HTML files in the output folder.

And so what I found when I pivoted to Eleventy, was that: yes, I massively improved the website performance by some ridiculous data points. But I also got back control of what I was shipping to the user and to the browser, which meant that I had more trust in what I was shipping, which meant things were debugged easier, which meant the page weight was so much lighter.

Like for example, here's a bit of a data point for you. Um… the… network requests were reduced from 75 network requests, totalling four megabytes on the Next.js site on the homepage. And then the Eleventy site just makes nine network requests, totaling just 325 kilobytes. And those are purposeful kilobytes that I chose to send to the user.

It also greatly improved my Lighthouse performance scores, no matter what I did with my Next.js site, I couldn't get the performance up on some of the blog posts mainly because one of the… one of the issues that Google Lighthouse was highlighting to me was deep within the Next.js code.

And yeah, and I'm not expecting every single framework to be like at the cutting edge of all of what Google Lighthouse recommends. But also, unless I went and did a PR to Next.js and went deep into like the JavaScript closer to the metal, I couldn't fix that for myself, because I was using such a big framework.

And yes, Next.js is a wonderful tool for big team projects, for big, big products, right? But there's whitep4nth3r.com, it's just a blog site. It's just getting a bit of data from my CMS. Just displaying a bit of stuff about me. I didn't need it to be this like enterprise grade framework that gave me so many different options that Next.js gives you for, you know, incremental static regeneration, which kind of breaks the whole Jamstack static model, even though it's really brilliant and powerful.

You know, I didn't need server side props with Next. I didn't need to server side render anything. I just needed to just… throw out some HTML files on a server, on a CDN and be done with it, right?

<i class="timecode">[00:28:16]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:28:16]</i> **Salma:** And so this is the whole point of… of this stream is about picking the right tool for the job. I think some of us… it's great to experiment, right? And, as anyone who knows me, I will always encourage you to build stuff, to learn things. But, so I built, those are stuff with Next.js. And I learned that actually, it's not always good to reach for straight away, because you don't necessarily need it.

And so now what I… I mean, also I've always tried to install as few dependencies as possible to, you know, when, when I'm building something on stream and someone says: "Oh, you get a package off NPM for that". I prefer not to, because I don't want the burden of that package that needs to be maintained and updated and upgraded.

And so, the less you use, the more power you have to being total control of what you are choosing to ship to the browser…

<i class="timecode">[00:29:14]</i> **Ben:** mm-hmm.

<i class="timecode">[00:29:15]</i> **Salma:** … and I think, we'll get onto this later, but it makes it absolutely imperative to performance and accessibility as well. Not just end user accessibility, but developer accessibility as well.

And I'm really grateful. This sounds really weird and maybe a little bit too cheesy, but I'm really grateful for finding Eleventy, getting me closer to web standards, just going back to basics, being really humble and honest about all we really need to ship is HTML, with a bit of CSS and then maybe some JavaScript if necessary… prince in da haus, and learning all about the platform.

<i class="timecode">[00:29:53]</i> **Ben:** Prince! Yes, Prince is in the house! Good to see you, Prince, always love having you here… yeah, and like… 

<i class="timecode">[00:30:00]</i> **Salma:** and sorry, I just wanna, I just wanna comment on what W1ngMatt said. The freedom Eleventy provides, made it super confusing for me at first. Me too! I was like, what's the Eleventy way of doing it? How do I do this in Eleventy?

And it's just like: "Salma, do whatever you want". And the freedom and the control…

<i class="timecode">[00:30:16]</i> **Ben:** mm-hmm.

<i class="timecode">[00:30:17]</i> **Salma:** … is actually really… it helps you… people say this about Eleventy, but it's true. It helps you become a better developer, but not because it's a framework that's the next big thing. It's because at the core of Eleventy is just web standards, shipping HTML, staying honest, staying humble and staying cool.

<i class="timecode">[00:30:39]</i> **Ben:** So, I'm… big fan of Eleventy over here. But you know, Eleventy isn't, you know, the entirety of what the Jamstack is. Like when you're building a site, how do you know kind of what tools are going to fit for that site? You know, Eleventy is not a fit for every site out there. So how, how do you handle that evaluation?

<i class="timecode">[00:31:02]</i> **Salma:** Great question! Now, the thing with the Jamstack is that you don't have to make all of your decisions straight away. And I know Stephanie Eckles says this… all the time, and so I'm kind of paraphrasing Steph. You can start as small as you need to on the Jamstack. If you… want to just start your proof of concept or your new blog site with a single HTML page on the Jamstack, you can push it up to Netlify or wherever, and it will be there.

If you then want to add… something around that. If you wanna add Eleventy or you wanna add another framework, you can just run "npm install", and then it's all good, right? If you want to add some serverless functions to call out to some APIs, or you wanna add some stuff, some JavaScript on the client, you can do that. If you wanna host a database somewhere, you can do that and hook it all in.

You can start. The smallest point possible and expand as you go. So for example, with, with a monolithic tech stack of yesteryear, you couldn't start all over again. If you'd made the wrong framework choice, it would be a huge, huge, huge undertaking to rewrite everything from scratch. But because Jamstack is decoupled, you could start with maybe a selection of three tools, this CMS, or that database, or that authentication service.

And if one of those isn't working for you, just switch one out for the other. You don't have to switch out everything. And so… again, the answer is always: it depends. How do you know which tools to use? You try, and if it doesn't work, you try another one. And the good thing is that it's easy to switch it out and try another one over and over again because of the decoupled architecture.

<i class="timecode">[00:32:55]</i> **Ben:** And I think that really ties to what you were talking about with like the developer ergonomics and developer accessibility. Like, we've all been in like the situations where like you have to use a very specific conglomeration of tooling, because for whatever reason, that's just the stack. And if those tools are quite nice to each other, you know, like, yeah, it's… it's a painful experience. It's miserable, right? And so to be able to just like, kind of swap things out and make some matches, hugely, hugely enabling. 

<i class="timecode">[00:33:28]</i> **Salma:** Absolutely, absolutely! And you know, it… you've probably, all of you in this chat have been there where you have gone to a new job, or you have inherited something where the tech stack was so intertwined with each other.

And even if, as a good developer, you wanna make progress. You wanna push forward, you wanna pitch something new that's a bit more modern and innovative, there's just no time or budget to switch. So you have to live with these old, old rickety things that you can't move from. And developers, you know, developers don't like that. You know, the developers I've worked with, they wanna try new things, they wanna move forward, they wanna break free.

And especially like you said before, backend the frontend, developers don't necessarily want to hold hands with each other all the time, because they want to be able to move faster and move independently without breaking things so much. So the… this kind of, it's a decoupled… the way of working the decoupled architecture, I have had such better times with than the older way of working.

<i class="timecode">[00:34:31]</i> **Ben:** Mm-hmm. You touched on briefly, and I'd love to just like, kind of revisit… you touched on briefly the intersection between performance and accessibility, and a lot… like, oftentimes on your streams and in podcasts appearances you've been on, you've mentioned that, in your mind, performance is accessibility. Would you talk about what that means for you? 

<i class="timecode">[00:34:56]</i> **Salma:** So… performance is accessibility because if… think about this. If you've got a… an old phone, or an old device that has a slow internet connection, you have a slow internet connection, you've got an old phone. And your ja… your JavaScript bloated or server-side-rendered, or slow website, uh, needs to be served to that small old device on a slow internet connection.

Chances are that, that content's not gonna get to that device in any kind of timely manner, therefore that person will not be able to access that content. And I talk about this in a talk that I wrote last year and did a couple of times, which was called "How to prevent the collapse of society by building an accessible web".

And the premise around this is that we are living in a zombie apocalypse. All monitors and screens are broken, and the internet is slow 3G. But everyone needs to be able to get content to their ears, or wherever in order to learn how to fight the zombies and save their lives. They need to get life-saving information over a slow internet on a screen that you can't really see.

And so yes, there's the whole kind of assistive technology undertones to that. But also, I've tried to put people in the shoes of everyone needs accessibility. Everyone needs to get that content in order to save each other's lives and survive the zombie apocalypse.

So if you can't get content quickly, you are doing your user a disservice, because somebody might need to get life saving information at any one time, right? And if your website, if your… if your website that tells you how to save someone's life, when you notice someone on the street in a particular way, right?

If your website takes 10 seconds to load, that's 10 seconds that you could be saving that person's life on the street, and that's accessibility, that's access to content, it's access to knowledge and access to potentially… it's… it's a dire, dark use-case, but it's access to saving lives. Really, if you think about it like that.

And so that's why performance is accessibility because the faster your sites are, the more performant your sites are, the easier your sites are to use and load by your device. The more accessible your content is, and you know, if we're talking about capitalism, the more sales you'll make, the faster you'll grow etc.

<i class="timecode">[00:37:44]</i> **Ben:** Absolutely. So, in that vein, like, what are… jamstack sites… or I guess what can Jamstack tooling and the ecosystem… like what can we do to better enable that going forward? 

<i class="timecode">[00:38:00]</i> **Salma:** This is a tricky question, because there are a myriad frameworks out there, and we've already touched on Next.js, which is a great framework that gives you a lot, right? A lot for free and open source… but because frameworks are gen… are often so intertwined with the services that come along with them. Sometimes it's not really in, I haven't seen, I don't wanna sound political in this, but it looks like, and a lot of the time, these frameworks… in the framework's remit is not accessibility-first and performance-first. I mean, there's a lot that say they're performance-first, right? I haven't made enough investigations to kind of rank them or anything, but we know as… like, I don't wanna call out Next.js here, but… and I know there's a reason for this, but for example… when you do Create Next App, there is no HTML "lang" attribute on the `<html>` tag, which you need for accessibility, right? So it's within the developer's own space to create that custom document JS file that goes in the repo in the pages folder to bootstrap that `<html>` tag with the "lang" attribute on. So… the bottom line that I wanna get across here is that I don't think frameworks can solve that problem of performance to accessibility, accessibility to performance.

And it's a big shame because if they could…

<i class="timecode">[00:39:42]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:39:43]</i> **Salma:** …then wouldn't that make the web a better place for everybody else? Unfortunately, during my web travels and everything that I've done… I think it falls on developers to really evangelize for that if for one of a better word and advocate for that and educate themselves on how best that fits in their context.

And, um… it's a shame. But it's a bit like how I'm sure developers are out there, right? You've been in development teams and you are building a website for a client and you say, oh, but we need to do XYZ in order to make this accessible for ABC. And then a product manager or leadership says: "Sorry, not in budget. We can't do that, we just need to ship, ship, ship".

And so you see, like, developers feel like the underdogs in that situation, because I know so many developers I've worked with them who are committed to creating these 100% accessible experiences as far as they can, but there's no budget, there's no time. And I feel like that's kind of mirrored in the frontend framework space as well. I wonder if there could one day be an accessibility-first framework.

However, if we're talking about performance as accessibility, then frameworks that aim to ship no JavaScript by default — which is gonna make your site better — and just HTML, then that is immediately prioritizing performance and accessibility. 

So, I think… that's how you can best select the right tool for the job and for the most accessible experience you wanna create, you can create. It's about just thinking about the Jamstack core philosophy at the bottom line. Static stuff. Not necessarily JavaScript, not necessarily any APIs. Static stuff, CDN, and automatically you are leveling up your performance, which could be accessibility at the same time. 

<i class="timecode">[00:41:52]</i> **Ben:** Absolutely. And I think as you were describing, you know, even things like Next.js, not by default, including the "lang" attribute, it seems to me like, at least what I'm hearing is that… it would be nice if these frameworks could provide more sensible defaults. Like, one of my favorite metaphors is the one of the pit of success…. and just like, make it really easy to do the right thing even by accident….

<i class="timecode">[00:42:19]</i> **Salma:** <i class="brackets">[whispering]</i> Yes!

<i class="timecode">[00:42:20]</i> **Ben:** …. but it also doesn't seem like you're necessarily bought into the notion that a framework can always guarantee the pit of success.

<i class="timecode">[00:42:28]</i> **Salma:** No, and it's, you know, a framework is… it's not a human being. Like, this is another thing. A framework is not a human being. JavaScript is not a human being. HTML is not a human being. And as human beings, as developers, human beings, we are building for human beings and not machines and therefore we need empathy and we need reason and we need to make decisions and think critically.

Frameworks and automated tools cannot do that. Not even AI can really do that, right? And I think, so that's probably like by design! If…

<i class="brackets">[Salma laughs]</i>

"JavaScript has feelings, too." If…

I mean, I don't wanna get political again, but you know, there are companies who have tried to solve the accessibility problem by providing overlays as a service, accessibility overlays as a service. Absolute nightmare! Extra JavaScript, probable nonsense. Again, you are… you are shifting that problem to another dependency. Absolutely mind-blowing. And so accessibility is a human issue and I don't think you can solve it with machines. Yes, you can write code to… be paused by other machines for humans to understand more. But at the end of the day, accessibility is more than just screen readers, isn't it?

It's absolutely more than screen readers. It's more than color contrast. It's more than performance. It's a combination of everything that I think only humans can solve. And… if frameworks did claim to solve all of those accessibility problems, people would get lazy. Developers would get lazy and, you know, there are… there are a variety of different conditions and disabilities and, and stuff that are changing all the time.

**And Your Customer Base Is Changing All the Time. and So to Automate That and Be Lazy and Think:** "It's taken care of, I've done it, it's accessible, boss, done it". It's… it takes the human element away and we have to stay human with accessibility, because we are making things accessible for humans. 

<i class="timecode">[00:44:43]</i> **Ben:** I love that so much. That… I was enraptured the whole time, that was incredible! Yeah, so… we're getting close-ish to the end. We've got… amazing how time flies by, really, honestly. But one of the things I wanted to ask too is: what is something that you're really excited about over the next year or so in the Jamstack? Like what's, what's got you fired up and excited.

<i class="timecode">[00:45:13]</i> **Salma:** It really is just seeing what people can create with as little as possible, because I think we went through a bit of a honeymoon period with frameworks, like in… I mean, frameworks like Next.js I was gonna say, but like, sometimes you forget in this little industry's sphere that we've got that Next.js is still like relatively new.

Some of these frameworks are still very… you know, Remix is very new. SolidJS is very new, all of these things, right? So we forget that not, like, a billion people are using it. But I think in our little Twitter industry sphere, or whatever, um… there's a lot of people who reached for things like Next.js for everything like I did last year.

And that was kind of like as an… as a need for my job at the time. But also because I was excited just to explore it and try new things and see what else it was capable of… in a podcast that I did, the podcast that you referred to in JS Party. The analogy I came up with was… with these JavaScript frameworks, it was like everyone was at this frat party and they were getting wasted, wasted on JavaScript.

Let's build absolutely everything with JavaScript. Let's, let's <i class="brackets">[laughs]</i> let's build HTML with JavaScript. Let's do CSS with JavaScript. Let's do anything we can and want with JavaScript. There we go, look, Sam says we're junk on JavaScript. And it's time we learn how to leverage the powerful web primitive to enhance our web experiences.

So what I'm really excited about is actually seeing how people sober up a little bit, to stand back from the JavaScript a little, and let's go back to web standards and as close to like native web as possible. And, um… who was I talking about this the other day? Oh, I completely forgot what I was gonna say, but it was really important.

Yes, let's sober up and… let's see what people can do without it and… and see how powerful HTML can be, because actually HTML, like, is pretty flipping powerful. Like for example, like I released a blog post a, a few weeks ago about creating an HTML-only accordion using the HTML details tag. There are so many HTML tags that I have not yet explored and the power, the native power in them is amazing.

If you've… you might have seen on Twitter that Google are now… that kind of… now start to talk about the Page Transition API. Where's all these powerful things without JavaScript that you can do with CSS as well? And so, I know it's not really about… about Jamstack, but it is about the philosophy of Jamstack that I'm excited about. Back to basics, static assets, CDN, no nonsense that you don't, you know, if you don't need this… these serverless functions. If you don't need this, that, and the other, then, then get rid of it.

Let's go back to basics. Let's take off the makeup. Let's, just see ourselves what we are and be human about it and embrace the web. That's what I was gonna talk about. I didn't wanna like, um, Shout about Netlify too much in this little Jamstack stream.

But, this is one of the things that Netlify is focusing on with using Deno for edge functions, so rather than Node. So Dino is a runtime, web runtime built on… open standards, right? It's open source

<i class="timecode">[00:49:05]</i> **Ben:** Mm-hmm. 

<i class="timecode">[00:49:05]</i> **Salma:** And it's all about, like, native Web APIs and stuff, rather than all these proprietary extra things. And I think the framework, the JavaScript space is so saturated, and it's great because people are jumping on the train of doing all these other things. Astro is one we haven't mentioned as well, and there's Svelte, and there's Nuxt and Vue and Next and React to this, I mean, it's great to have so many options.

But at the same time, at the end of the day, we're all just building things that are gonna be displayed in a browser, and the browser can only do so much. But you can also do so much to ensure that that experience for the people who experience it, are having the best possible experience possible. <i class="brackets">[laughs]</i> And you could be innovative with that.

<i class="timecode">[00:49:56]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:49:57]</i> **Salma:** You don't need to use all this fancy stuff. And so I'm looking forward to… like, the positioning of the Jamstack being this architectural model where it's static-first, build-first, make it fast, make it simple… and have fun with it at the same time.

<i class="timecode">[00:50:13]</i> **Ben:** Absolutely! That really gets to the end of any of the questions I had.

So I wanted to open this up for the chat. If y'all have any questions for Salma, I would love to see them. I'm sure Salma would be thrilled to answer.

<i class="timecode">[00:50:27]</i> **Salma:** Let's go!

<i class="timecode">[00:50:29]</i> **Ben:** If you get… we got a comment in here about… astro's approach, um… as well…

<i class="timecode">[00:50:35]</i> **Salma:** bholmesdev is here to tell us all about it!

<i class="timecode">[00:50:39]</i> **Ben:** Mm-hmm. 

<i class="timecode">[00:50:40]</i> **Salma:** Yeah, that's also true of Astro as well. No JS by default, so I think there's a lot of… that's the kind of, there's two levels of bandwagon, right? There's the "ship no JS by default, let's make it simple, back to the web," and also "How much can we give you in one framework?" But the problem is like, if you want your framework to be adopted… then you need to provide a wide variety…

that's the kind of mindset. You need to provide a wide variety of functionality for more and more people to be able to use it. And so… that's the thing. It's a hard…, it's a hard balancing act. Do you give the people what they want or do you sta… do you stand firm and say: no, let's just prioritize the web, you know, web standards and helping you build stuff in a better way, you know, 

<i class="timecode">[00:51:39]</i> **Ben:** Absolutely… not seeing any more questions at the moment. Um… yeah, uh… 

<i class="timecode">[00:51:53]</i> **Salma:** ben, I wanna ask you a question! I wanna ask you a question!

Yeah, let's do that, let's do that! Yeah!

So, tell me about your experience on the Jamstack. You say you like the Jamstack, but like what's your journey, what's your experience? How have you found it and where do you wanna go from here?

<i class="timecode">[00:52:06]</i> **Ben:** Hey, that's a fantastic question. And actually for me, so it, it's interesting to me that you've kind of brought up Next.js, is that the thing that you were working with almost, uh… you know, like, that was what you needed to do for your work, right? And for me, my… journey actually came… it was also from the React ecosystem. My last role was a React-exclusive role. But in my free time, I was building things with Gatsby. I had a little portfolio site that was, you know, it was actually, that was… I had a portfolio and a blog site for whatever reason, I wasn't merging the two, but I had the portfolio that was just shipping, just straight up React.

And then I had a blog site that was using Gatsby, and I found myself like… with, with especially the, the Gatsby site, like struggling against the toolchain, it felt like every few months when I needed to like come back to it and publish a new article, I personally was struggling a lot with… you know, all the dependencies seemed broken all of a sudden, right?

My pipelines weren't passing. That was a struggle I had… and it felt like every time I was adding on to my site, I was, you know, fighting with my own… my own personal hell that I had built for myself. It's like, seemed like, right? And not to diss Gatsby, right? I think that… you know, it definitely has a use-case.

It just wasn't for me and my blog. I just, I really struggled with it. I didn't quite agree with its opinions. But, you know, it seemed like React needed to be the system. I was… I needed to be writing in. It was about then that I discovered Eleventy via Andy Bell's "Learn Eleventy From Scratch" course.

And I think that really set me on, um… it was very freeing for me because… it was, like… a lot of the things that I had been struggling with, the opinions I had clashed with Gatsby on. It was, it was freeing to see that there was a system I could use that didn't need those. One of those opinions that Gatsby has, for instance, is… you will… it, your website needs a single-page application router.

I know Marcy Sutton did a lot of fantastic work in making the Gatsby router as accessible as possible, but I still don't think that single-page application routing is… as accessible as just inter-page, like downloading a new document routing. So that wasn't an opinion I really agreed with. And it was just nice to be able to get like back to those fundamentals as well.

And since then I've been kind of on the Eleventy journey, just trying all the new features, stuff like that. Just seeing kind of what I can do. Not that it's gonna meet every use case, but…

<i class="timecode">[00:54:54]</i> **Salma:** exactly! And that's the thing to be mindful of as well, is that I think we can sometimes get into a bit of a pattern like I did last year. "Oh, I need to start a new project, so I'll use Next.js, 'cause I know how to use it," or "I'll use this 'cause I know how to use it." "Oh, I've done this before, so I'll copy and paste my boilerplate and do it again." And while it's actually a little bit more difficult to get started with a new tool, you need to weigh up your options, because not one tool can be the right thing for everything, which is the whole point of this it's that use the right tool for the job. Do some research, ask around, asking the community, try something. And if it's not working out for you, then change it again.

whitep4nth3r.com is actually in its third iteration. I started first with Svelte and Sapper. Then I moved to Next.js and Contentful, and then I moved to Eleventy and Contentful. And so it might change again, if I feel like it. I mean, I really don't wanna do another… another migration again, but… maybe there will be a case for it as the project and my blog develops, right? And that's the thing with the Jamstack. You can pick and choose and switch in and switch out whenever you need 

<i class="timecode">[00:56:09]</i> **Ben:** Mm-hmm, absolutely! Alright, I'm gonna move on to this one question. Uh… chat?

<i class="timecode">[00:56:15]</i> **Salma:** I'll vamp. Let's do a little dance!

<i class="timecode">[00:56:20]</i> **Ben:** Yeah, absolutely! In the meantime, would you like to talk about where people can find you and what you… what you're doing?

<i class="timecode">[00:56:28]</i> **Salma:** Okay. Yeah, so if you joined in the raid after I introduced myself, my name is Salma and I am a staff developer experience engineer at Netlify. If you wanna know what Netlify is, you can go to netlify.com. If you wanna find out everything about me, you can go to whitep4nth3r.com. And I stream on Twitch. You can find me on Twitch if you just click on my profile or you can… there you go! There's a little shoutout. I am all over the Internet, I write blog posts, I stream, I do podcasts, I create videos. I've also been experimenting with creating silly TikTok. So if TikTok is your bag, go and find me on TikTok, and I am hanging out on a stream near you, building stuff, learning things, and loving what I do.

And I always love getting more people in my Discord as well, 'cause we've got some great, like… um… <i class="brackets">[singing]</i> Discord, don't you do… got some tech help channels. We've got a great group of people in there who are so welcoming, so warm…

<i class="timecode">[00:57:40]</i> **Ben:** mm-hmm.

<i class="timecode">[00:57:40]</i> **Salma:** … so inclusive. And if you ever wanna talk about tech or come and post some memes, then welcome in, come on in. That is me!

<i class="timecode">[00:57:50]</i> **Ben:** I'm going to heartily endorse both the streams and the Discord… I earnestly wish I could make more of your streams, but unfortunately time zones just means…

<i class="timecode">[00:58:00]</i> **Salma:** time zones!

<i class="timecode">[00:58:00]</i> **Ben:** Like, you're starting at like four in the morning for me. And, you know, I'm waking up at like eight and you're wrapping up it just doesn't quite line up all the time, but… 

<i class="timecode">[00:58:10]</i> **Salma:** and you're streaming at bedtime for me, and I'm all shiny and sweaty. <i class="brackets">[laughs]</i> 

<i class="timecode">[00:58:15]</i> **Ben:** I'm so sorry. Thank you so much, by the way, for coming on! I really do appreciate it. And y'all please do join the Claw Discord. It is a wonderful place, I've enjoyed every conversation I've had there.

Um… and absolutely just please go follow Salma all the places. Salma, thank you so much for joining the stream and talking about Jamstack today!

<i class="timecode">[00:58:36]</i> **Salma:** Thank you so much!

<i class="timecode">[00:58:38]</i> **Ben:** I hope you had a great time chat. I hope y'all had a great time. We're actually… so, stick around by the way, we are gonna find someone to raid. But, next week I've got Adrian Roselli coming on. Adrian… first of all, is maybe one of the people whose writings I've been most influenced by accessibility-wise.

He has a series called "Underengineered", where he builds common interface components, like complex interface components, the simplest HTML-first-most approach. And so he's gonna be hopping on, we're gonna be doing some of that. So that's next Tuesday… so follow the channel if you want more of this kind of stuff. And yeah, it's been great having y'all!

<i class="timecode">[00:59:20]</i> **Salma:** Thank you, Ben! I've had a great time. You've all been so lovely. It's great that we got a raid. And I loved talking about Jamstack with you. It was… the time flew, so thanks so much for being such a wonderful host!

<i class="timecode">[00:59:30]</i> **Ben:** Thank you so much. Y'all, have a good one! Bye!