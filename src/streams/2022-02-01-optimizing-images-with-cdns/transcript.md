<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. Today I'm joined by Alistair Shepherd. Alistair, hello!

<i class="timecode">[00:00:05]</i> **Alistair:** Hello!

<i class="timecode">[00:00:07]</i> **Ben:** Welcome, welcome to Some Antics! I'm thrilled to have you on. We've, I think, bounced around a couple of the same Discord servers.

<i class="timecode">[00:00:16]</i> Steph, you're too kind. Thank you so much for gifting those subs just off the bat. Too kind!

<i class="timecode">[00:00:23]</i> Yeah, but Alistair, you and I have bounced around a few of the same servers. I believe we were both in Andy Bell's server for some time, and now we're both in Frontend Horse, which I'll put a link to in the chat. But I'm super thrilled to have you on. Would you like to introduce yourself for folks who might not have seen you around? 

<i class="timecode">[00:00:42]</i> **Alistair:** Yeah, sure. Um, hi, I'm Alistair. I'm a frontend dev in Edinburgh, Scotland. I work for a company called Series Eight. We do kind of all sorts of kind of marketing, e-commerce. Very frontend-heavy stuff.

<i class="timecode">[00:01:00]</i> I am really into kind of CSS, image performance, or just general frontend performance in general, accessibility. Kind of really took the front end and then went kind of "back of the front end" 'cause I don't have any creative skills to count!

<i class="timecode">[00:01:18]</i> **Ben:** Makes sense!

<i class="timecode">[00:01:21]</i> **Alistair:** Yeah! I don't really do too much in terms of projects online, but I blog a little bit and talk about image CDNs, which is why I'm here today. 

<i class="timecode">[00:01:35]</i> **Ben:** Alright, yeah. So… on the subject of, like, image CDNs, right? I think it is fascinating that for something seemingly simple as images, we have to have, like, a whole infrastructure around making them performant. So, can you kind of talk to us about, like, why do we need to optimize images and kind of what is that, like, landscape like?

<i class="timecode">[00:02:00]</i> **Alistair:** Ah, I mean, I think, truly, in the question of why… blame iPhones to a certain extent in that a lot of it is because mobile devices and every screen size and high-density displays. Because really, it's kind of… when we were building websites ten years ago and the image was 400 pixels wide and it was, generally speaking, always going to be 400 pixels wide, then that's fairly easy. But when there's responsive design, responsive development, we have kind of this one image that could be anything from, like, a hero image 1920 pixels wide down to 300 pixels wide and everything in between. And you see kind of depending on how people implement these systems, they've got 10, 20 images between their biggest and their smallest to close the gap just to reduce the size of images transferred, particularly to mobile devices.

<i class="timecode">[00:03:10]</i> **Ben:** Mmm. Yeah, it's like, you know, it's this challenge of, like, when you're at home, you could be using, like — not to say everyone has a great internet connection at home, that's absolutely not the case — but you're more likely to be, like, on a wired, like, Ethernet connection or something like that. Like, you're probably more likely to have a stronger connection at home than when you're out an about. But yeah, just introducing that complexity of, you could be out and about and using mobile data is, I think just… man, yeah. Just, the variety of devices and stuff, and the variety of image needs. Especially as, like, I think, like, cameras get better and stuff like that, too. Just, images themselves are getting bigger. 

<i class="timecode">[00:03:55]</i> **Alistair:** Absolutely, and I mean, especially working on… I work on lots of sites that are kind of we build the CMS, we build the system, and then hand it off to the client to populate with content, and they handle that. And they're shoving in a 10-megabyte image in there that they've uploaded from whatever camera or something.

<i class="timecode">[00:04:16]</i> **Ben:** Mhmm.

<i class="timecode">[00:04:16]</i> **Alistair:** And, I mean, even for your biggest image, you need infrastructure to shrink it to make it the right size. And I think it's also one of those things where the new technology improves, making it easier for people, and therefore expecting it to be easier, so it kind of self-perpetuates, so… you can't really expect someone who isn't super technical to upload the image in the right format, in the right size, already compressed and all of this. You kind of have to handle that beyond…

<i class="timecode">[00:04:50]</i> **Ben:** Mhmm.

<i class="timecode">[00:04:51]</i> **Alistair:** …beyond the initial image. 

<i class="timecode">[00:04:54]</i> **Ben:** There's been — and thank you — there there's been so much, like, subscribing, gift-subscribing action that I just have to thank people. So, Steph, thank you again for the gift subs to start. Chan, thank you for resubscribing. Travis, thank you for all those gift subs — or, thank you for giving the gift sub to SociableSteve, Mike, thank you for the sub. Man! Yeah, thank y'all! Oh, I think I saw… did I see Brent subscribing as well? Thank you all so much for subscribing. We're on, like, level two of a hype train. Let's see if we could get this at least to level three, y'all. I think we could do it.

<i class="timecode">[00:05:36]</i> Arran says, "As technology advances, it becomes easier to screw up." Yeah, 'cause, like, you don't know what's expected of you and this image looks really nice. Like, it's not like there is really, like, a red flag saying, "Hey, this could be a problem for some people," so, like, yeah, there's just not really a whole lot of surfacing there.

<i class="timecode">[00:05:56]</i> And then I've been hearing some things about new image file formats. Can you talk about those? 

<i class="timecode">[00:06:07]</i> **Alistair:** That's a kind of perfect use case for image CDNs, and fun we'll hopefully be getting into a bit. But yeah, turns out that, I mean, PNG and JPEG have been around for ages and still generally… you don't get too much better until recently. AVIF has been around since 2015, I think. That hit Chrome last year. It's in Firefox with a flag, I think? The flag is maybe just being or has been removed, but yeah. And AVIF is generally 30% smaller on the web than JPEG.

<i class="timecode">[00:06:54]</i> I've forgotten, WebP too! So yeah, like, there's lots, lots of new ones coming out and it's amazing. But I think that as much as WebP and AVIF decreased the file size compared to JPEG — and that's always great — JPEG XL, which is coming out in the next few years will be an absolute blow-things-out-of-the-water because it's… essentially, it's the JPEG replacement. It does everything and, at least for most use cases on the web, it's looking like it's gonna beat everything and be amazing! 

<i class="timecode">[00:07:35]</i> **Ben:** Interesting! I had not heard at all of JPEG XL, so interesting that, like, even still, like, we're getting support for AVIF and WebP and even then, people are like, "No, wait, we can make the, like, oldie-but-goldie formats, like, even better as well." That's awesome! 

<i class="timecode">[00:07:52]</i> **Alistair:** Exactly, yeah. It's interesting. I mean, there's the classic kind of computer science thing where you trade off storage and memory, storage and processing tasks, like, and that's kind of the thing in JPEG XL in that the codec has like… millions of different ways to kind of create images just with, so it has, like, kind of a "Oh, let's just create a gradient" command within it, so rather than encoding every pixel, you just go, "Oh, there's a gradient here."

<i class="timecode">[00:08:22]</i> **Ben:** Mmm!

<i class="timecode">[00:08:23]</i> **Alistair:** And then that's really short, and it's kind of baked into the codec rather than it being kind of pixel-per-pixel, which means you can save lots on it. But yeah, I mean the big thing with the new formats, though, is WebP. Only recently, Safari support. AVIF, no Safari support; only recently Firefox. And JPEG XL is nowhere to be seen in browsers quite yet.

<i class="timecode">[00:08:52]</i> **Ben:** Gotcha. Okay, so yeah, all sorts of, like, really, like, recent innovations in, like, image storage and processing to compensate for a variety of resolution and data needs, like, regarding the images that we have on our site, some of which are, like, small icons, and then some of which are, like, you know, big, hefty hero images. And content delivery networks are gonna, like, help us orchestrate all of this so that *I* don't have to at least, because already this is seeming like I would be getting in over my head if I were to do this myself.

<i class="timecode">[00:09:33]</i> **Alistair:** Oh, absolutely, yeah. It's… I mean, not that you couldn't, but it's… if you try to undertake all of this yourself, it can be an absolute nightmare. And especially, I mean, I imagine a lot of people here are Jamstackies — Jamstackians or whatever — then I think a big use case is you put Eleventy Image on a site and it does a great job of processing all of your images and stuff like that.

<i class="timecode">[00:10:01]</i> **Ben:** Mhmm.

<i class="timecode">[00:10:02]</i> **Alistair:** But potentially, if you've got quite a few, it adds ten minutes to build something. So… it's kind of, there's a lot going on and there's a lot — Even if you're not building it yourself, even if you're just kind of rolling an off-the-shelf solution, it's not easy and it's not simple, and there are tradeoffs.

<i class="timecode">[00:10:24]</i> **Ben:** Absolutely.

<i class="timecode">[00:10:25]</i> Alright, I'm gonna go ahead and start sharing my screen. That is the wrong view. What is…? Here's the correct view! There we go! We did it! I know how to use my Stream Deck and hit the right keys.

<i class="timecode">[00:10:42]</i> Yeah! So y'all, go follow Alistair on Twitter. I also want to shout out, while we've got you here, your excellent website. This whole thing is lovely, and it's hard to tell based on, you know, the little time that you've got it up, but like, this is a live view of, like, this will change throughout the day based on your time of day. But you've got, like, a sunrise mode and a sunset mode. It's just an absolutely lovely site and, like, just everyone should go check it out. But yeah!

<i class="timecode">[00:11:14]</i> **Alistair:** Thank you.

<i class="timecode">[00:11:16]</i> **Ben:** So, we're gonna be doing some CDN stuff. How should we get started? Like, what are gonna be our first steps, or what are we trying to accomplish today? 

<i class="timecode">[00:11:26]</i> **Alistair:** So, earlier today — I made a tweet about it too — but we uploaded some images to a wee website that we can play around with of Tuna. I was thinking we kind of jump into a CodePen and we can just have a wee look at those images—

<i class="timecode">[00:11:46]</i> **Ben:** Okay!

<i class="timecode">[00:11:47]</i> **Alistair:** —the size of them in DevTools, and then how we can bring a image CDN into the equation.

<i class="timecode">[00:11:57]</i> **Ben:** Sounds good!

<i class="timecode">[00:11:59]</i> **Alistair:** So, if we just stick an `<img>` tag in, and we could load one of those Tuna images.

<i class="timecode">[00:12:09]</i> **Ben:** You know what? `<img>`s are self-closing, and I should know this.

<i class="timecode">[00:12:15]</i> Alright, cool.

<i class="timecode">[00:12:17]</i> **Alistair:** If we pop a "`src`" on there and it was "`imagecdn-sample.netlify.app/tuna.jpg`." "`tuna1`" it was, wasn't it?

<i class="timecode">[00:12:28]</i> **Ben:** Yeah. And I've got that link in our own chat over here.

<i class="timecode">[00:12:32]</i> **Alistair:** Cool, perfect.

<i class="timecode">[00:12:32]</i> **Ben:** And I will add… god, that's massive!

<i class="timecode">[00:12:36]</i> <i class="brackets">[Alistair chuckles]</i>

<i class="timecode">[00:12:37]</i> That is TRULY massive! Also, my cat is, in fact, a villain.

<i class="timecode">[00:12:44]</i> **Alistair:** We'll deal with resizing it later.

<i class="timecode">[00:12:48]</i> **Ben:** "Tuna, a tabby cat, glares into the camera from a pile of blankets." Gotta have that alt text. 

<i class="timecode">[00:12:59]</i> **Alistair:** Perfect, yes. I need to take lessons in alt text writing from you.

<i class="timecode">[00:13:05]</i> **Ben:** Mm!

<i class="timecode">[00:13:06]</i> **Alistair:** Okay, cool! So that's kind of our original image. Do you want to open up the Chrome DevTools? You're on Chrome, yeah. And we can have a look at the Network tab—

<i class="timecode">[00:13:16]</i> **Ben:** Yes!

<i class="timecode">[00:13:17]</i> **Alistair:** —and find that image. 

<i class="timecode">[00:13:19]</i> **Ben:** I will likely need to refresh.

<i class="timecode">[00:13:23]</i> **Alistair:** Yeah, it may be easiest to filter by image in the top there so we don't end up with all the JS and assets and such. 

<i class="timecode">[00:13:34]</i> **Ben:** Yeah. I think I need to… oh god, that shortcut doesn't work. Is it…? I'm always…

<i class="timecode">[00:13:44]</i> **Alistair:** The first one, yeah.

<i class="timecode">[00:13:45]</i> **Ben:** Here we go. Okay! Now, we should get…

<i class="timecode">[00:13:49]</i> **Alistair:** Cool.

<i class="timecode">[00:13:50]</i> **Ben:** So, okay. And here we go! 

<i class="timecode">[00:13:53]</i> **Alistair:** So there we go! And if you go to the Headers.

<i class="timecode">[00:13:57]</i> **Ben:** You got it!

<i class="timecode">[00:13:58]</i> **Alistair:** What we've got here is… `tuna1.jpg`. And if you look at the "`content-length`" down there in the Response Headers, we've got our 2.4 megabyte image.

<i class="timecode">[00:14:12]</i> **Ben:** Mm!

<i class="timecode">[00:14:13]</i> **Alistair:** So that's the, just, source kind of big ol' image that you sent. And it's probably… it's probably thousands of pixels wide, I would expect.

<i class="timecode">[00:14:24]</i> **Ben:** Probably.

<i class="timecode">[00:14:26]</i> **Alistair:** We could probably check in the Elements tab, but regardless, not a big deal. 

<i class="timecode">[00:14:31]</i> **Ben:** Mhmm.

<i class="timecode">[00:14:32]</i> **Alistair:** So that's, like, not the image we want to ship, right?

<i class="timecode">[00:14:35]</i> **Ben:** Right. It's huge and frankly, like… it's a great picture, but it's not worth… like, especially the resolution of it, like the actual, like, quality of it is just not worth sending, like, 2.4 megabytes.

<i class="timecode">[00:14:50]</i> **Alistair:** Absolutely. So, quickly jumping in now kind of explain what image CDNs are. I think it's probably a good time to do it.

<i class="timecode">[00:14:59]</i> **Ben:** Okay!

<i class="timecode">[00:15:00]</i> **Alistair:** Basically they are kind of between… You have your server and the client browser, and generally most requests are going broadly directly between the two via a few extra steps. And an image CDN kind of sits in the middle? So what you do is… what you can do is, instead of requesting images directly from the website, you can request them from the image CDN. And then depending on how you set it up — you maybe have your media stored with them or you can kind of forward that request on to your original web server.

<i class="timecode">[00:15:40]</i> **Ben:** Okay.

<i class="timecode">[00:15:40]</i> **Alistair:** So what we can do is kind of, by doing that, kind of have someone in the middle that can kind of reprocess our images.

<i class="timecode">[00:15:51]</i> **Ben:** Iiiinteresting!

<i class="timecode">[00:15:52]</i> **Alistair:** And we can instruct it on just what we want it to do just based on the URLs.

<i class="timecode">[00:15:58]</i> **Ben:** This is… this is really interesting, 'cause like, you know, usually when people talk about content delivery networks or CDNs, they're talking about, like, oh, the "edge," right? Like… the big benefit here is you're hitting a server — or the user is hitting a server that is, like, physically close to them, and that helps with like response times. And there's a cache, and that helps with the response times. I feel like people don't really talk about CDNs as what you're describing as kind of like a middleware, and I think that's really neat. 

<i class="timecode">[00:16:29]</i> **Alistair:** Yeah! I mean, you kind of get into it actually a little bit with kind of more traditional CDNs, with like Cloudflare Workers and Netlify has some sort of edge thing where you can kind of modify markup or assets or whatever as they go through the CDN location.

<i class="timecode">[00:16:51]</i> **Ben:** Okay.

<i class="timecode">[00:16:52]</i> **Alistair:** And really, this is… image CDNs are a bit kind of different in that basically… it requests your nearest CDN node, so it ends up probably being in the same country as you are, pretty close. If the image you're looking for has already been requested, then it'll just return it to you, because they've got it cached. If not, then it'll be sent to another kind of processing server that will create it and then cache it.

<i class="timecode">[00:17:19]</i> **Ben:** Mhmm.

<i class="timecode">[00:17:19]</i> **Alistair:** So it ends up being kind of almost like a kind of on-demand builder. I think that's what Netlify calls their kind of serverless things. But it's kind of like… it's server-side run, but only once, and then it's cached forever pretty much.

<i class="timecode">[00:17:39]</i> **Ben:** Mhmm.

<i class="timecode">[00:17:41]</i> **Alistair:** Yeah, I guess, give a shout out to a friend's CDN, Arran. I'm always interested to see other ones.

<i class="timecode">[00:17:50]</i> But yeah, so there's actually kind of a lot you can do there, because also now you're piping your assets through auto— I mean, we're going to use Cloudinary in this demo, and Cloudinary are subjectively maybe the best company in the world for web images. I think they're probably top five, if not kind of the most experienced.

<i class="timecode">[00:18:17]</i> **Ben:** Okay!

<i class="timecode">[00:18:17]</i> **Alistair:** So you kind of get the bonuses of all of their expertise for free or for a very small amount.

<i class="timecode">[00:18:25]</i> **Ben:** Yeah!

<i class="timecode">[00:18:27]</i> **Alistair:** Cool. So shall we… So we can run this same image just through an image CDN—

<i class="timecode">[00:18:34]</i> **Ben:** Okay!

<i class="timecode">[00:18:34]</i> **Alistair:** —by sticking the domain, the address of the CDN, just in front of the URL. So that "`res.cloudinary`" address that I popped over to you, if we just stick that before the "`https`"… then suddenly now this URL is being served through Cloudinary if all has gone wrong— if all has gone right here.

<i class="timecode">[00:19:00]</i> **Ben:** Alright.

<i class="timecode">[00:19:00]</i> **Alistair:** So, nothing seems to have changed! 

<i class="timecode">[00:19:02]</i> **Ben:** But we've got a new "`tuna1`" entry here. Okay.

<i class="timecode">[00:19:05]</i> **Alistair:** Yep.

<i class="timecode">[00:19:05]</i> **Ben:** I'm gonna actually give this link to the chat as well. Go ahead.

<i class="timecode">[00:19:14]</i> **Alistair:** So now, by just adding some kind of URL there, you see "`server: Cloudinary`." 

<i class="timecode">[00:19:21]</i> **Ben:** Oh– yes. 

<i class="timecode">[00:19:23]</i> **Alistair:** It's the same content length. It's the same image. It's just transferring you to Cloudinary. And to be honest, already this is, if you've got a traditional server-side site, this is bouncing it and propagating it into CDNs all over the place, which is already a bit of a bonus.

<i class="timecode">[00:19:43]</i> **Ben:** Alright!

<i class="timecode">[00:19:45]</i> **Alistair:** But what this now gives is we can now kind of have superpowers with editing the site— editing this image just based on that URL. 

<i class="timecode">[00:19:56]</i> **Ben:** Mmm, alright!

<i class="timecode">[00:19:58]</i> **Alistair:** Sorry?

<i class="timecode">[00:20:01]</i> **Ben:** Oh, I was just saying "alright." 

<i class="timecode">[00:20:03]</i> **Alistair:** Cool. So I guess first we'll… kind of do some basic ones. We can't see that image currently, 'cause that's too big.

<i class="timecode">[00:20:13]</i> **Ben:** This is massive.

<i class="timecode">[00:20:14]</i> **Alistair:** We can deal with that first. 

<i class="timecode">[00:20:17]</i> **Ben:** Alright, and these are going to be…

<i class="timecode">[00:20:18]</i> **Alistair:** So, Cloudinary particularly…

<i class="timecode">[00:20:19]</i> **Ben:** …query parameters, right? 

<i class="timecode">[00:20:22]</i> **Alistair:** Cloudinary doesn't use query parameters.

<i class="timecode">[00:20:23]</i> **Ben:** Ohhhh!

<i class="timecode">[00:20:23]</i> **Alistair:** It kind of puts them in the middle.

<i class="timecode">[00:20:26]</i> **Ben:** Okay.

<i class="timecode">[00:20:26]</i> **Alistair:** So, well, I think it might support query parameters too, but the ones I've gotten noted down are, like, URL parameters. So just after the "`fetch/`," what we can do is, like, if we wanted to resize it, we could do a "`w_`" and then give it a pixel width. And then throw another slash after that. And just like that, the image is 300 pixels wide. 

<i class="timecode">[00:20:56]</i> **Ben:** And it is MUCH smaller! 

<i class="timecode">[00:20:59]</i> **Alistair:** 26 kilobytes. That's a lot better.

<i class="timecode">[00:21:03]</i> While we're looking at the image size, we can play a little bit with performance, because we've kind of talked about, like, the different sizes, the different formats, compression, and stuff like that, and that this is still, like, the kind of biggest size image just resized and that's that, and that's where we've left it. What we could do is add in another parameter there, separated by a comma, like "`f_webp`"! 

<i class="timecode">[00:21:41]</i> **Ben:** "`f_webp`," and this is going to set it to be the WebP format? 

<i class="timecode">[00:21:45]</i> **Alistair:** Exactly. Even though the URL is "`.jpg`" — it's provided a `.jpg` — if we scroll down slightly, in "`content-type`," it's now serving a WebP! And I can't remember what the size was before, but 27 kilobytes. 

<i class="timecode">[00:22:06]</i> **Ben:** I think it actually went up a bit in bytes. 

<i class="timecode">[00:22:10]</i> **Alistair:** It did! That makes certain amount of sense, too, because where, like, JPEG and WebP and… WebP, AVIF, and JPEG XL, the real power of them is that…

<i class="timecode">[00:22:22]</i> <i class="brackets">[Alistair chuckles]</i>

<i class="timecode">[00:22:23]</i> "When did we let filetypes become a lie?" Filetypes have never been real. So you just have to ask the PHP developer that, 'cause they'll serve absolutely anything under the sun under a `.php` filetype, no problems at all.

<i class="timecode">[00:22:42]</i> But yeah, so the real advantage to WebP, AVIF, JPEG XL is that they can compress better. Not that their full size is better, because, like, if you've got the full size of the image, you can't really make it smaller without losing some data. 

<i class="timecode">[00:23:06]</i> **Ben:** Mmmm!

<i class="timecode">[00:23:09]</i> **Alistair:** And that's just kind of lossy compression. Or, I guess you can do lossless compression, which you don't notice there's a difference, but it still does, like, kind of compress it to a little file that wasn't compressed before.

<i class="timecode">[00:23:24]</i> **Ben:** Mhmm.

<i class="timecode">[00:23:25]</i> **Alistair:** So what we could do is add a quality filter, too! So, another parameter we could do is the "`q`" parameter which Cloudinary has, and we could do `q`, say, `40`? 'Cause that's kind of percentage-based. And this would give us another one that is… I guess, almost 17 kilobytes! And I haven't really noticed a difference in the image there. There probably was one. 

<i class="timecode">[00:23:58]</i> **Ben:** Yeah, let me… yeah, let me try… And it's also possible that, like, it's just going to be hard to tell just by virtue of, like, watching over the stream or watching over Zoom but, like, even here with, like, the canonical screen in front of me, like, I'd be hard-pressed to, like, actually find a difference. 

<i class="timecode">[00:24:17]</i> **Alistair:** And then we can illustrate a difference by going for `q_1`.

<i class="timecode">[00:24:20]</i> **Ben:** Okay, let's do that.

<i class="timecode">[00:24:21]</i> **Alistair:** Just seeing how much we go.

<i class="timecode">[00:24:25]</i> **Ben:** Ahh.

<i class="timecode">[00:24:25]</i> **Alistair:** That's definitely compressed. 

<i class="timecode">[00:24:27]</i> **Ben:** Yes. Particularly there's a lot of, like, visual information that's getting lost around Tuna's nose.

<i class="timecode">[00:24:34]</i> **Alistair:** Yeah.

<i class="timecode">[00:24:34]</i> **Ben:** Poor boy.

<i class="timecode">[00:24:35]</i> **Alistair:** And that's just, I mean, different formats compress different ways. This is how WebP does it. But yeah, so in this way, we can also control how much it compresses. So just let's have a wee look, see how big that version is, the `q_1`.

<i class="timecode">[00:24:51]</i> **Ben:** Yeahhhhh. This is… oh, got it!

<i class="timecode">[00:24:52]</i> **Alistair:** Nice! A nice 5 kilobytes. 

<i class="timecode">[00:24:55]</i> **Ben:** Not bad. Especially, what, this was originally like… what was it, like, 27…? Or, no, it was 2.7 megabytes.

<i class="timecode">[00:25:05]</i> **Alistair:** Yeah.

<i class="timecode">[00:25:05]</i> **Ben:** And we've gotten it down to a, like, not great but, like, passable 5 kilobytes. 

<i class="timecode">[00:25:12]</i> **Alistair:** Oh, I think for a 300 pixel by 500-ish pixel image, 5 kilobytes is pretty good.

<i class="timecode">[00:25:20]</i> **Ben:** Mhmm.

<i class="timecode">[00:25:20]</i> **Alistair:** But we could probably do better, because WebP isn't… Chrome, we're using Chrome, and Chrome supports AVIF.

<i class="timecode">[00:25:26]</i> **Ben:** Okay.

<i class="timecode">[00:25:27]</i> **Alistair:** So we could see how AVIF attempts that, too.

<i class="timecode">[00:25:29]</i> **Ben:** So, I presume I would go here and I would just say "avif."

<i class="timecode">[00:25:34]</i> **Alistair:** Absolutely!

<i class="timecode">[00:25:36]</i> **Ben:** And maybe just let's see — oh god! 

<i class="timecode">[00:25:38]</i> **Alistair:** Okay, we maybe need to bump up the quality then, too!

<i class="timecode">[00:25:41]</i> **Ben:** I'll remove the quality parameter there, so there's no… like, we're not specifying the compression level there for the quality there. We're talking 25 kilobytes. This looks… it's a workable image. I can't notice any deterioration of quality. 

<i class="timecode">[00:26:00]</i> **Alistair:** And what Cloudinary provides, too, is kind of a way to more intelligently adjust quality. So instead of doing `q_1`, for example, we could do `q_auto` and then it would… that kind of adds some, like, automatic kind of "we're not gonna compress the image too much" level. But we could add a colon and go for something like "`eco`." 

<i class="timecode">[00:26:30]</i> **Ben:** "eco," like this?

<i class="timecode">[00:26:31]</i> **Alistair:** Yeah. Yeah, exactly. So that's kind of trying to save as many bytes as possible without having a big impact on the visual quality.

<i class="timecode">[00:26:41]</i> **Ben:** Mmm.

<i class="timecode">[00:26:43]</i> **Alistair:** It hasn't had a huge impact because this is a very busy image. I think if we were using images that had, like, a lot more smooth transitions—

<i class="timecode">[00:26:52]</i> **Ben:** Yeah.

<i class="timecode">[00:26:52]</i> **Alistair:** —and stuff like that, then maybe it would have been less, but ARE still saving there. And we could go `q_low`. `q_auto:low`, sorry. 

<i class="timecode">[00:27:00]</i> **Ben:** Okay. Yeah. I'm thinking of, like, every time I've uploaded, like, a gradient to, like… you know, when you're uploading your Twitter cover image or whatever, like, if you upload a smooth gradient, like, it comes through, like, kind of in bands, right? Just 'cause it absolutely gets crunched up during the compression.

<i class="timecode">[00:27:21]</i> **Alistair:** And that depends on, like, the different image format too, because if you did that… compress that in AVIF or JPEG XL, it would actually compress really quite well. But that's just 'cause how different… JPEG does it by reducing… by, like, kinda coming up with little patterns, so you might find that linear gradients suddenly comes like railings…

<i class="timecode">[00:27:45]</i> **Ben:** Mmm.

<i class="timecode">[00:27:46]</i> **Alistair:** …and such. And PNG does it by reducing the number of colors, so you end up with bands.

<i class="timecode">[00:27:52]</i> **Ben:** Yeah.

<i class="timecode">[00:27:52]</i> **Alistair:** AVIF kind of has, like, a smooth filter?

<i class="timecode">[00:27:55]</i> **Ben:** Okay.

<i class="timecode">[00:27:56]</i> **Alistair:** Which can work really well for, like, a gradient or something like that, but if you had… as we saw earlier with this busy image on a low quality, it couldn't really handle that because there was a lot going on.

<i class="timecode">[00:28:09]</i> **Ben:** Mhmm.

<i class="timecode">[00:28:11]</i> **Alistair:** And JPEG XL would do it insanely well because it has that sort of thing built in.

<i class="timecode">[00:28:17]</i> **Ben:** Makes sense!

<i class="timecode">[00:28:18]</i> **Alistair:** I think one other thing to show off here in performance is what is for me, one of the killer features — besides controlling the width of an image via the URL — one the killer features of image CDNs is, if we change that `f_avif` to `f_auto`…

<i class="timecode">[00:28:37]</i> **Ben:** Ooh, Ooh.

<i class="timecode">[00:28:39]</i> **Alistair:** What this will do is this will realize that Chrome supports AVIF, and it will serve an AVIF! If someone loaded this image in Safari then — in the latest Safari — then it would serve WebP!

<i class="timecode">[00:28:58]</i> **Ben:** Okay!

<i class="timecode">[00:28:59]</i> **Alistair:** So this is kind of one of the big things that, I mean, you have a… more traditional server side or build step formatting images, and you've got all your different image sizes in several different formats. Oh, perfect.

<i class="timecode">[00:29:23]</i> **Ben:** Yeah, I'm just… I'm confirming!

<i class="timecode">[00:29:25]</i> <i class="brackets">[Alistair chuckles]</i>

<i class="timecode">[00:29:29]</i> Let's see.

<i class="timecode">[00:29:30]</i> **Alistair:** "Safari serves iPhotos!"

<i class="timecode">[00:29:33]</i> **Ben:** Headers… Oh, wow.

<i class="timecode">[00:29:36]</i> **Alistair:** Unfortunately, I'm not… I'm gonna struggle to… 

<i class="timecode">[00:29:40]</i> **Ben:** Sizes. Man, it…

<i class="timecode">[00:29:44]</i> **Alistair:** Try clicking on the top one there in the list. Headers. Oh, no. I'm afraid I'm not sure. 

<i class="timecode">[00:29:54]</i> **Ben:** Oh, that's totally fair. I totally believe you. Just wanted to, yeah, just wanted to see. But that that's really cool. So, like, it knows what the browser is and it knows what the browser supports so, like, it's gonna send over the best possible fit for that browser. 

<i class="timecode">[00:30:11]</i> **Alistair:** Yeah! And one of the great things, too, is it, doesn't just… I mean, AVIF is a newer format that is, most of the time, smaller than JPEG, but it isn't always. And the same with WebP, same with JPEG XL. There are some images that JPEG will perform better at because they all work slightly differently.

<i class="timecode">[00:30:32]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:33]</i> **Alistair:** And if you're able to kind of compare the sizes of formats on a per-image basis, which the only really way you can do that is via an image CDN or something like this—

<i class="timecode">[00:30:45]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:45]</i> **Alistair:** —You can go, "Oh, actually, it turns out , I've compressed these images. They're all roughly the same quality. They all look the same. The JPEG's smaller." Then it can serve the JPEG instead. 

<i class="timecode">[00:30:56]</i> **Ben:** That's really cool! So, like, that's not even just relying on heuristics of "I know that, like, this browser supports AVIF, so I'm just always gonna give it AVIF." Like, it's on a per-image basis, which is really smart! Wow!

<i class="timecode">[00:31:10]</i> **Alistair:** Yeah. Yeah, absolutely. And it's something that… I mean, you can DO different formats with just HTML using the `<picture>` element and `<source>` elements.

<i class="timecode">[00:31:19]</i> **Ben:** Mhmm.

<i class="timecode">[00:31:19]</i> **Alistair:** And you can say, "Yeah, these are my WebP images." But that will always load the WebP images before it would load any of the others. So there isn't really a way around — I mean, without JavaScript, there isn't a way to do this just on the web platform. You need some sort of kinda intermediary step per image.

<i class="timecode">[00:31:41]</i> **Ben:** Ohhh, yeah!

<i class="timecode">[00:31:43]</i> **Alistair:** So if you scroll to Request Headers in the Headers pane of the DevTools there, you'll see the "`accept`" header there. So this is something that all modern browsers have — I think even IE11 has it — where it lists all of the image formats that's supported.

<i class="timecode">[00:32:03]</i> **Ben:** Ohhh, okay!

<i class="timecode">[00:32:04]</i> **Alistair:** So I mean, Chrome adds JPEG XL at some point. It adds it to the "`accept`" header. If Cloudinary supports JPEG XL, then suddenly now all Chrome requests will use JPEG XL!

<i class="timecode">[00:32:19]</i> **Ben:** Very neat. Very neat! Okay! 

<i class="timecode">[00:32:24]</i> **Alistair:** So that's the real kind of… between being able to adjust the quality, the size, and the format of the images kind of on the fly based on the URLs, you get a lot of control and a lot of things you can do with performance on sites. I mean, even like our quality 1 example there was… didn't look great in JPEG, but if you imagine that someone's…

<i class="timecode">[00:32:58]</i> I haven't really seen this implemented yet. I need to… I want to find a project to do it myself.

<i class="timecode">[00:33:04]</i> **Ben:** Okay!

<i class="timecode">[00:33:04]</i> **Alistair:** But you can… There's a media query that is "`prefers-reduced-data`."

<i class="timecode">[00:33:08]</i> **Ben:** Mmmm!

<i class="timecode">[00:33:09]</i> **Alistair:** So if people on a kinda… I think it's just on Android Chrome at the moment. You can enable data saver mode, and that lets the browser know, via that media query, that you want to save data. You could instead decide to serve a not particularly good but really small image to kinda reduce data caps. 

<i class="timecode">[00:33:31]</i> **Ben:** Yeah! 'Cause it's much more… like, it's more important that the user has, like, *a* version of the image that like, maybe it doesn't look great but it loads fairly quickly, and perhaps most importantly, does not, you know, risk charging them an arm and a leg for their data plan. Right? Because as webdevs, we need to be stewards of that, right? Like, yeah, like, just serve them a version of that image that's… fine? Maybe not great? As opposed to having them wait forever for an image that may never come, and even if it does, like, it's just gonna charge them a whole bunch. Super cool, yeah. 

<i class="timecode">[00:34:13]</i> **Alistair:** Yeah, definitely. And I mean, it's something that I think probably currently you can only really implement it using another `<source>` element within a `<picture>` element and then querying for that. But there is kind of proposals and there's kind of a beta implementation within Chrome to send this kind of information with outgoing requests. So an image CDN will have that information when the request is done and they can go, oh, with no dev… with no input required from developments, the image CDN can decide to serve a reduced quality image for people that—

<i class="timecode">[00:34:59]</i> **Ben:** Ohhh, okay!

<i class="timecode">[00:34:59]</i> **Alistair:** —have that header enabled. So potentially, soon, it's going to be something that developers aren't really gonna have to worry about if they're using an image CDN, which is kind of the best fix, really, because, as much as it's great for developers to be stewards of this sort of thing, if they don't have to be and it's all handled for you, then that's ideal! 

<i class="timecode">[00:35:22]</i> **Ben:** Absolutely! Yeah! Because, yeah, otherwise you're gonna run up against prioritization issues where, you know, business just doesn't see fit to prioritize folks on, like, slower, less powerful bandwidth. You're gonna run up against developers who aren't knowledgeable about this thing, or the developers who are just, like, apathetic about it, right? Like… yeah, okay. Taking an unwillingness or inability on the developers' part to solve the image problem — like, taking that, like… out of the picture is, I think, hugely, hugely powerful. Awesome! 

<i class="timecode">[00:36:03]</i> **Alistair:** Cool.

<i class="timecode">[00:36:04]</i> And yeah, Arran says that that's behind flags. I think it's behind the flags for third-party CDNs, but depending on how you set things up, you can… I think it's called user hints. User agent hints. Something along those lines. But it's enabled for first-party CDNs. So some CDNs, you can already do this and already handle all this automatically.

<i class="timecode">[00:36:33]</i> Anyway. So that's kind of the performance stuff I wanted to chat about, really. With this, you can put together a "`srcset`" attribute, You can convert format. You can do quality analysis based on the different formats. You can change the quality levels. So you can do all sorts of stuff here.

<i class="timecode">[00:36:53]</i> **Ben:** Okay. This is where I need to, like, fess up that, like, I have a gap of my knowledge. I've never actually done a `srcset`. Can we take a detour and you can teach me how to do a `srcset`?

<i class="timecode">[00:37:05]</i> **Alistair:** Yeah!

<i class="timecode">[00:37:05]</i> **Ben:** Would that be okay? 

<i class="timecode">[00:37:07]</i> **Alistair:** Oh, absolutely! Yeah, no problems!

<i class="timecode">[00:37:09]</i> **Ben:** Let's do it!

<i class="timecode">[00:37:10]</i> **Alistair:** So, let's say this image here is going to always be displayed at 300 pixels. Let's just say that.

<i class="timecode">[00:37:18]</i> **Ben:** Sure.

<i class="timecode">[00:37:18]</i> **Alistair:** That's going to make it slightly easier. So, what we can do is use the "`srcset`" attribute. So we add that to our image alongside the "`src`."

<i class="timecode">[00:37:26]</i> **Ben:** Okay!

<i class="timecode">[00:37:27]</i> **Alistair:** The "`src`" kind of acts as a fallback. So for older browsers, that's an option. But if, you know, if there's newer browsers that support "`srcset`," then we can load this. And basically what it is is it's the URL and then a space. So if we want to copy that URL we've already got. And this can be the 300px wide one. So then we'll do a space, and then do "`300w.`"

<i class="timecode">[00:37:59]</i> **Ben:** Okay. And that specifies that it's 300 pixels wide. Okay. 

<i class="timecode">[00:38:03]</i> **Alistair:** Yeah. This is telling the browser, "Yep, this image is 300 pixels wide." Add a comma. And then we can just, like, copy and paste that entire thing and change that to 600, for example. And add "`600w`" and that will… so now, if a device that had a 2× pixel ratio, for example, came and loaded this…

<i class="timecode">[00:38:32]</i> Oh, one thing we'll need to do actually is set the "width" attribute—

<i class="timecode">[00:38:36]</i> **Ben:** Mm!

<i class="timecode">[00:38:37]</i> **Alistair:** —on the `<img>` tag to "300."

<i class="timecode">[00:38:40]</i> **Ben:** Okay, yes.

<i class="timecode">[00:38:40]</i> **Alistair:** Because currently, it doesn't have the idea of how… large it's displayed. So now it'll display at 300 pixels and I assume you've got a… Are you using a high density display or a…? 

<i class="timecode">[00:38:55]</i> **Ben:** I zoomed in a couple of times. 

<i class="timecode">[00:38:59]</i> **Alistair:** Yeah, so if you're zoomed in, if you're using a high density display, if you're loading it on an iPhone for example — which I think most phones actually now are 2+ times device pixel ratio — it would load the 600-pixel image instead of the 300. 

<i class="timecode">[00:39:18]</i> **Ben:** Mmm! Okay! So it's making sure that it's not loading a version… like, it's not loading any in here that would be, like, obviously a poor fit for the, like, resolution of the device. You know, if the device is 300 pixels wide and isn't, like, high-density, then it's not going to pick, you know, the 600 or the 1200, right?

<i class="timecode">[00:39:39]</i> **Alistair:** Yeah.

<i class="timecode">[00:39:39]</i> **Ben:** Because there's no realistic scenario in which, like, they're even gonna see that. 

<i class="timecode">[00:39:45]</i> **Alistair:** So, there's… there's kind of two ways to use the "`srcset`" attribute. I forget about the other way because I barely use it, but ninopepper — Thomas, I think — has just put in the chat that they use the "`x`" descriptor, which basically is, instead of describing the width of the image, you say, "This is my one-times width of the image."

<i class="timecode">[00:40:08]</i> **Ben:** Ohhhh!

<i class="timecode">[00:40:08]</i> **Alistair:** So instead of the "300w," you do "1x." And then instead of 600, you do "2x." So you're saying, "This is my one-times resolution image. This is my two-times resolution image." And that's kind of the easy way to get going. But for really big file kind of size improvements, this is, especially working on… The type of websites I work on are, like, very responsive, so we have, like, a hero image that scales all the way down to mobile. So in these cases, the "`x`" descriptor doesn't really give me an ability to say, "Okay, the screen is 600 pixels wide, or 700 pixels, or 800 pixels wide, and the image kind of scales with that." So for that, we'd use the "`w`" descriptor which we had you do previously, the "`300w`" and "`600w`." And we'd also use the "`sizes`" attribute.

<i class="timecode">[00:41:12]</i> **Ben:** Okay.

<i class="timecode">[00:41:12]</i> **Alistair:** Which is basically a way of saying, "Hey, this image is gonna be displayed at this width for this screen size." So, in this case, if our image is always going to be displayed at 300 pixels wide, then we'll just put in 300 pixels. And this says, okay, now a browser can, like, load this up, see "That image width is 300 pixels. I'm gonna… I want to load this at two-times resolution. What sizes have you got available? 600 — I'll take that."

<i class="timecode">[00:41:51]</i> **Ben:** Okay.

<i class="timecode">[00:41:52]</i> **Alistair:** So it becomes more like a hint, which is quite a nice way of doing it. 

<i class="timecode">[00:41:56]</i> And additionally, this gives you a lot more flexibility, because you can, say, you can do media queries within the "`sizes`" attribute. So you can say, "`min-width: 768px`," for example. Exactly like that. And then after the bracket, say 600 pixels.

<i class="timecode">[00:42:19]</i> **Ben:** Uh…

<i class="timecode">[00:42:20]</i> **Alistair:** Without the curly brackets. And then a comma, and then you can list more. So you could do kind of "`min-width: 1024`" or something like that. Oh, and in this case, we'd need them the other way around, because the first one applies.

<i class="timecode">[00:42:37]</i> **Ben:** Ah, I see.

<i class="timecode">[00:42:38]</i> **Alistair:** But you get the idea.

<i class="timecode">[00:42:42]</i> And it's also… it's not just this because, I mean, we can have some of the superpowers of CSS here, too. So if we wanted to, we could use `calc()`. We could use `max()`, `min()`, `clamp()`.

<i class="timecode">[00:42:57]</i> **Ben:** Ooooh.

<i class="timecode">[00:42:58]</i> **Alistair:** All of these. I quite commonly do, like… let's say I've got kind of a container that's maybe… say, 1200 pixels wide. So if the viewport is wider than that, then the content stays that width. But then below that, it's maybe the width of the screen minus `2rem` padding on the side. What I can do is I can do calc `100vw` — viewport width — minus `4rem`. So you can do crazy stuff with this and particularly get kind of deep into… when you're building websites with, like, a framework or whatever, and it's kind of… "It's three columns at this size and two columns at this size and four columns at this size." You can be like, instead of having to go get the images exactly this size, this number of pixels, you can go, yeah, it's 25% of the viewport minus `3rem`, or plus a couple rem, or whatever.

<i class="timecode">[00:44:06]</i> **Ben:** Maaan!

<i class="timecode">[00:44:08]</i> **Alistair:** So with those, with `srcset`, if you provide… I tend to do five or six different sizes between. I tend to do my smallest size, which is, like, 300 pixels-ish, and then maybe the biggest that this image is displayed at — whether that's kind of several hundred, a thousand, 1500 pixels — and then do five or six intermediary ones. Then that combined with the "`sizes`" attribute, the browser can pick which one is most useful to it.

<i class="timecode">[00:44:39]</i> **Ben:** Man!! Okay, that is very cool! Alistair, the web is cool. The web is cool. 

<i class="timecode">[00:44:46]</i> **Alistair:** The web is cool. And I mean, bringing this back to image CDNs.

<i class="timecode">[00:44:50]</i> **Ben:** Yes.

<i class="timecode">[00:44:50]</i> **Alistair:** This is where this really feels good, because we don't have to generate these in advance.

<i class="timecode">[00:44:56]</i> **Ben:** Yeah!

<i class="timecode">[00:44:56]</i> **Alistair:** You can just stick it… just change the URL in that "src" attribute. And particularly… you know what? I'm gonna grab it… find it quickly, because I know several people, including yourself, use Eleventy quite a bit.

<i class="timecode">[00:45:13]</i> **Ben:** Yes!

<i class="timecode">[00:45:14]</i> **Alistair:** You can, like, make a shortcode that abstracts making the markup and stuff like that, too. I have a gist somewhere of that. React component… There we go. I'll just stick it in the chat quickly. 

<i class="timecode">[00:45:32]</i> "I've never heard of it." "Eleventy? What's Eleventy?" 

<i class="timecode">[00:45:40]</i> **Ben:** No Eleventy here! 

<i class="timecode">[00:45:42]</i> **Alistair:** So I kind of just have, like, a basic kind of shortcode that… Okay. I don't know where I can show it without moving it elsewhere.

<i class="timecode">[00:45:59]</i> **Ben:** Hang on, yeah.

<i class="timecode">[00:46:00]</i> **Alistair:** But I just have, like, a basic shortcode that formats a few parameters into the full HTML markup. So this uses the Cloudimage image CDN, so it's kind of specifically for that, but it would be super easy to make it for Cloudinary, too. And the amounts of code here, compared to having to build a image processing system, handles pretty much everything I need with relatively… with how many? 50 lines of code.

<i class="timecode">[00:46:38]</i> **Ben:** It's not bad! That is not bad.

<i class="timecode">[00:46:41]</i> **Alistair:** So it's kind of combining srcset, sizes…

<i class="timecode">[00:46:46]</i> **Ben:** Mhmm.

<i class="timecode">[00:46:46]</i> **Alistair:** …image CDNs. You could do different formats, different qualities. They all come together to make it super easy to manipulate, to work with images. 

<i class="timecode">[00:46:59]</i> **Ben:** Very cool! Okay! So is there more you wanted to show off?

<i class="timecode">[00:47:05]</i> **Alistair:** Yeah!

<i class="timecode">[00:47:05]</i> **Ben:** Anything else you think we should look at? 

<i class="timecode">[00:47:07]</i> **Alistair:** Yeah, I thought I'll… we can briefly show off some kind of… for building designs and art direction and stuff like that—

<i class="timecode">[00:47:16]</i> **Ben:** Yeah!

<i class="timecode">[00:47:16]</i> **Alistair:** —rather than just resizing an image widthwise. But you might want to crop an image, too.

<i class="timecode">[00:47:22]</i> **Ben:** Mhmm!

<i class="timecode">[00:47:22]</i> **Alistair:** So for example, what we could do with Cloudinary here is we could set, like… add a height parameter. We'll probably want to remove the "`srcset`" attribute for this, 'cause otherwise we'll have to update that, all of those, at the same time.

<i class="timecode">[00:47:35]</i> **Ben:** That doesn't work… it turns out. Hang on, let me… I do kind of want to hold onto this so that, like, people can look back on it, but I'm just gonna stick it in a comment here at the bottom.

<i class="timecode">[00:47:46]</i> **Alistair:** Sure.

<i class="timecode">[00:47:47]</i> **Ben:** Goodness, what is going on there?

<i class="timecode">[00:47:48]</i> Okay, anyways. Yeah, so we've got just our "src."

<i class="timecode">[00:47:53]</i> **Alistair:** Cool.

<i class="timecode">[00:47:54]</i> **Ben:** Okay, cool.

<i class="timecode">[00:47:55]</i> **Alistair:** So we can add a height parameter, so "`h`." Let's go 150 or something like that. And it will handle that resizing, too. Probably not the result that we're looking for, to be honest! 

<i class="timecode">[00:48:08]</i> **Ben:** No, no! My poor boy! What have you done to my son?

<i class="timecode">[00:48:12]</i> **Alistair:** Oh, I'm so sorry!

<i class="timecode">[00:48:12]</i> **Ben:** Alistair, I'll never forgive you for this!

<i class="timecode">[00:48:15]</i> **Alistair:** Okay, right, okay. So, you could add the "c_fill" parameter. And this will…

<i class="timecode">[00:48:26]</i> Okay, we've cut off the ears, so that's better.

<i class="timecode">[00:48:29]</i> **Ben:** Yes, yes.

<i class="timecode">[00:48:30]</i> **Alistair:** So this, for example, is like "`background-fit: cover`." "`background-fill`?" "`object-fit: cover`." Whichever one, yeah. Yeah. So, we can do that too, and instead of doing "`h_150`," for example, we could do, like, "`ar_16:9`"… 

<i class="timecode">[00:48:53]</i> **Ben:** That sounds like an aspect ratio.

<i class="timecode">[00:48:55]</i> **Alistair:** …and get a 16-by-9 image and kind of enforce an aspect ratio.

<i class="timecode">[00:49:00]</i> **Ben:** Okay!

<i class="timecode">[00:49:01]</i> **Alistair:** And now if we change the width, then the height would update equivalently. We'll probably need to remove the "`width`" attribute, too. 

<i class="timecode">[00:49:13]</i> **Ben:** You got it!

<i class="timecode">[00:49:19]</i> There we go!

<i class="timecode">[00:49:19]</i> **Alistair:** So now it's slightly wider and it's kept the same aspect ratio. So this is super useful for kind of if you've got design from a designer and they've said, "Oh yeah, this image is, like, always square" or "This image is always a kind of video shape" or whatever, then that gives that means you don't have to really worry about that with CSS. You're not sending extra pixels. If you're only going to be displaying a square, you don't need the bits on the edges.

<i class="timecode">[00:49:52]</i> And Cloudinary also, you kind of get the advantage of being able to reposition the crop and stuff like that a bit more intelligently than you could do with CSS, for example. I don't think it'll work very well for this example, 'cause their thing is you could do "`g_faces`" and it would, like, focus in on faces. I don't know whether they account for cat faces. 

<i class="timecode">[00:50:20]</i> **Ben:** I think I've actually seen it bef— Oh, interesting. Maybe not.

<i class="timecode">[00:50:23]</i> **Alistair:** Well, I mean, that is part of… I tried this earlier with one of the other pictures and it was not… it focused on the feet or on the wall behind.

<i class="timecode">[00:50:34]</i> **Ben:** I will show an example of this, which is I've been building out a backlog site and, you know, I get a whole bunch of, like, avatars of, like, just all the different people that, like, guest. And I am using, like the… I believe "`g`" is gravity?

<i class="timecode">[00:50:53]</i> **Alistair:** Yeah.

<i class="timecode">[00:50:53]</i> **Ben:** But, like, use that to kind of, like, hone in on their face, 'cause otherwise you get some people who send in, like, their pictures but, like, their face is, like, off here to the left or whatever. You kind of want the crop to follow their face so that pictures look roughly aligned. 

<i class="timecode">[00:51:08]</i> **Alistair:** Yeah, so you get that kind of automatic thing.

<i class="timecode">[00:51:11]</i> Thomas has just said that "image CDN solutions break when it comes to building — like, do I have to upload them all before?" This is kind of why I wanted to show off instead of… So, Ben, you, for example, upload those images to Cloudinary and then reference them in your site, rather than… What we're doing here is we are requesting the "`https://imagecdn-sample.netlify.app/tuna.jpg`" image.

<i class="timecode">[00:51:40]</i> **Ben:** Yeah.

<i class="timecode">[00:51:40]</i> **Alistair:** This isn't… we never uploaded this to Cloudinary. We're using their fetch API to basically proxy images. So wherever you have your images already — so if you have them in a CMS, if you have them just in your Netlify build or whatever, you can use like Amazon S3 — you can basically get them wherever they are. And this is… I don't really show off the kind of Media Library and stuff like that methods, because this is what I think the easiest for everyone to get involved in.

<i class="timecode">[00:52:17]</i> **Ben:** Yeah!

<i class="timecode">[00:52:19]</i> **Alistair:** Because really, you probably have your images publicly accessible anywhere somewhere, so you can just proxy them.

<i class="timecode">[00:52:29]</i> "Will it upload it to them? Or will it literally just like imagick it?" So, depends on the image CDN. Cloudinary, we discovered a bit ago that it kind of like… it makes a copy of the source image and then it does it stuff with. Others will kind of, like, I mean, it'll make a copy of it, but it'll be kind of hidden away on their servers. But Cloudinary, like, shows you that in the admin panel, 

<i class="timecode">[00:53:00]</i> **Ben:** Yeah, here, we're… I'm logged in on, like, this burner account you've created for this, and I can go to, like, the Media Library and we can see that here's the "tuna1" that we've been playing with. Hopefully I'm not leaking any secrets. I don't think so, but… 

<i class="timecode">[00:53:16]</i> **Alistair:** It's not a problem. I don't plan on using this after, so it's not an issue. 

<i class="timecode">[00:53:26]</i> But yeah… it depends how you want to. Some people prefer to kind of upload their images to Cloudinary, whether it's via a plugin or their own integration or manually. I personally prefer to just proxy images 'cause it means that I just throw my images into my Eleventy build and I just say,"Point Cloudinary to where my server is," and it will just handle that itself without any uploading needed. 

<i class="timecode">[00:53:59]</i> **Ben:** Yeah. Just fewer steps, lets you stay, like, in the context of your website, and also you can go through it and, like, any time just, like, tweak the arguments and stuff like that, like yeah.

<i class="timecode">[00:54:12]</i> **Alistair:** While we have a little bit time, I wanted to show off some kind of, a bit more fun effects, too.

<i class="timecode">[00:54:17]</i> **Ben:** Yes!

<i class="timecode">[00:54:17]</i> **Alistair:** Because image CDNs… like, as much as their main thing is performance and this sort of thing, we can also play around with it a bit more. So, why don't we try one of the other images?

<i class="timecode">[00:54:30]</i> **Ben:** Yes!

<i class="timecode">[00:54:31]</i> **Alistair:** 'Cause we uploaded eight. We may as well use another one. 

<i class="timecode">[00:54:36]</i> **Ben:** Let's look at like… just pull these up just so that everyone can see. There's a very good one.

<i class="timecode">[00:54:42]</i> **Alistair:** Aww, that's very nice.

<i class="timecode">[00:54:44]</i> **Ben:** Tell you what, uh, oh God, I should've pulled in — Stephanie, who's in the chat, recently built PollMyChat.dev, and I should have done this as… like, I should've, like, prepared this as a scene, 'cause this is lovely.

<i class="timecode">[00:54:58]</i> **Alistair:** "Which Tuna?"

<i class="timecode">[00:55:01]</i> **Ben:** Yeah, which Tuna should we do? I'm going to go through the Tunas, and I do need y'all to, like, call out a number, and the most popular number by eyeballing it will be the one. Here's him getting some lovely scritches. He turns into such a happy triangle when he's getting scritches.

<i class="timecode">[00:55:16]</i> <i class="brackets">[Alistair chuckles]</i>

<i class="timecode">[00:55:17]</i> Tuna has two shapes. There is happy triangle and angry round. 

<i class="timecode">[00:55:22]</i> <i class="brackets">[Alistair laughs]</i>

<i class="timecode">[00:55:24]</i> **Alistair:** "Angry round!"

<i class="timecode">[00:55:27]</i> **Ben:** Let's see. What have we got here? He's actually, in this one… I'm gonna turn off the aspect ratio. 

<i class="timecode">[00:55:35]</i> **Alistair:** Yeah, so get rid of the aspect ratio.

<i class="timecode">[00:55:37]</i> **Ben:** Yeah, because this one, he actually kind of looks like your boss is just, like, glaring at you or whatever like "Aren't you supposed to be working right now?" So Tuna 5 is very choice.

<i class="timecode">[00:55:48]</i> Let's see. Tuna 6. 

<i class="timecode">[00:55:57]</i> **Alistair:** "I'm gonna need you to come in Saturday."

<i class="timecode">[00:55:59]</i> <i class="brackets">[Alistair laughs]</i> 

<i class="timecode">[00:56:01]</i> **Ben:** I think it's too — oh, here's here's a spooked Tuna. And then finally, we've got a Tuna 8, I believe.

<i class="timecode">[00:56:08]</i> **Alistair:** Oh, that's definitely after you've just broken production. 

<i class="timecode">[00:56:13]</i> **Ben:** And this, this is the Tuna, having realized that you've broken production, has now left the company and is now updating his LinkedIn profile picture.

<i class="timecode">[00:56:24]</i> **Alistair:** That new headshot. 

<i class="timecode">[00:56:25]</i> **Ben:** Alright, I think…

<i class="timecode">[00:56:28]</i> **Alistair:** 'Kay.

<i class="timecode">[00:56:29]</i> **Ben:** Yeah, I took this… Just, he was standing on my nightstand. I just, like, pulled out my phone, and the lighting and the posture and everything was just, like, perfect. Like, this was not a professional photo. 

<i class="timecode">[00:56:41]</i> **Alistair:** Do you know what? While we're here, this is actually a really good image to show off one of those things I was wanting to show.

<i class="timecode">[00:56:50]</i> **Ben:** Okay!

<i class="timecode">[00:56:50]</i> **Alistair:** Cloudinary has a lot of kind of extra effects. So one parameter we can add is "`e_bgremoval`."

<i class="timecode">[00:56:57]</i> **Ben:** Okay????

<i class="timecode">[00:56:59]</i> **Alistair:** I just want to see if it works.

<i class="timecode">[00:57:01]</i> **Ben:** Oh, underscore.

<i class="timecode">[00:57:03]</i> **Alistair:** "`e_`," yeah. 

<i class="timecode">[00:57:05]</i> **Ben:** Oh man, I'm so… 

<i class="timecode">[00:57:09]</i> **Alistair:** See how it copes. It might take a bit longer.

<i class="timecode">[00:57:14]</i> **Ben:** Oh, okay.

<i class="timecode">[00:57:14]</i> **Alistair:** Okay, not for this.

<i class="timecode">[00:57:15]</i> **Ben:** Yeah.

<i class="timecode">[00:57:17]</i> **Alistair:** We use this quite a bit with e-commerce sites because, like, companies will take a decent photo of a product, and then we can just strip the background off to make it transparent instead.

<i class="timecode">[00:57:28]</i> **Ben:** Yeah. Didn't quite work this time, but I'm sure, like, if there were more colors going on.

<i class="timecode">[00:57:33]</i> **Alistair:** It was a bit ambitious, to be honest.

<i class="timecode">[00:57:36]</i> **Ben:** Sure, sure.

<i class="timecode">[00:57:37]</i> **Alistair:** They're not magic. Okay, cool.

<i class="timecode">[00:57:42]</i> Cool. We can pick another one and maybe have a bit of a… What can I…? Let's go for this one. 

<i class="timecode">[00:57:51]</i> **Ben:** I'm sorry, what are we doing? 

<i class="timecode">[00:57:54]</i> **Alistair:** Maybe try another image and we can…

<i class="timecode">[00:57:58]</i> **Ben:** Okay. Yeah.

<i class="timecode">[00:57:58]</i> **Alistair:** I just want to show off one of the less… well, I haven't yet thought of a use case for it, but one parameter that Cloudinary has, and quite a few has, is colorize. So we can use "`e_colorize`." And this will by default, I think make the image a bit gray. We'll see. Okay.

<i class="timecode">[00:58:22]</i> **Ben:** A bit gray?

<i class="timecode">[00:58:23]</i> **Alistair:** Very gray.

<i class="timecode">[00:58:24]</i> **Ben:** "A bit gray!"

<i class="timecode">[00:58:25]</i> **Alistair:** Oh yeah. Sorry, if we add a colon and give it, like, 50, as like 50%, it will colorize it 50% gray, but we can choose the color. So we now could do a another parameter like "`co_rgb,`" and then you can give basically a hex code, "`rgb:`" and then a hex code without the hex, basically.

<i class="timecode">[00:58:54]</i> **Ben:** Okay.

<i class="timecode">[00:58:54]</i> **Alistair:** So you could do, like, "`ff00ff`" and get… 

<i class="timecode">[00:58:59]</i> **Ben:** Yeah.

<i class="timecode">[00:58:59]</i> **Alistair:** …a color.

<i class="timecode">[00:59:00]</i> **Ben:** You know what? Hang on. I've got a brand color. You know me, gotta push that brand. 

<i class="timecode">[00:59:06]</i> **Alistair:** So we'll pop that in there.

<i class="timecode">[00:59:09]</i> **Ben:** Yeah.

<i class="timecode">[00:59:09]</i> **Alistair:** I haven't prepared this advance and I'm hoping I remember the format. 

<i class="timecode">[00:59:13]</i> **Ben:** Ooh, okay!

<i class="timecode">[00:59:15]</i> **Alistair:** Perfect! So this is kind of like… I mean, it's just a bit of an example, something you can do, but it kind of is an example if you… There's loads of grayscale stuff. You can put images in sepia. You can change the brightness, gamma, contrast. All of this just based on parameters in the URL, which is pretty, pretty cool!

<i class="timecode">[00:59:40]</i> **Ben:** Yeah!

<i class="timecode">[00:59:42]</i> **Alistair:** I mean, I guess you could like… what was it? It was really big in the designs I was doing, like, five years ago, that kind of duotone. Every website had duotone images.

<i class="timecode">[00:59:55]</i> **Ben:** Yeah, it's like… yeah, and inevitably the hot colors to do were, like, turquoise and, like, sea green or something like that.

<i class="timecode">[01:00:03]</i> **Alistair:** Yeah, absolutely.

<i class="timecode">[01:00:05]</i> So you could, like, bump up the contrast, put a filter on, and then you don't even need to get the designers involved to make the images. You can just process them automatically.

<i class="timecode">[01:00:16]</i> Oh, yeah, orange and blue. That was a common pair.

<i class="timecode">[01:00:20]</i> **Ben:** Oooh, yeah.

<i class="timecode">[01:00:21]</i> **Alistair:** If I'd thought of this ahead of time, I would have come up as a URL you could pop in there, but…

<i class="timecode">[01:00:25]</i> **Ben:** Mhmm. Fascinating! Oh, man. There's just so much you can do with this.

<i class="timecode">[01:00:32]</i> Well, cool! We are about time, so is there anything else you want to show or is this, you think, a good place to wrap up? 

<i class="timecode">[01:00:42]</i> **Alistair:** I feel like that's a pretty good place to wrap up. We've kind of gone through the performance, art direction stuff, and had a bit of fun with the pink, too.

<i class="timecode">[01:00:51]</i> **Ben:** Yeah! Alright. Well, cool.

<i class="timecode">[01:00:55]</i> Y'all, thank you so much for being here. Please go follow Alistair on Twitter. Go give him the Some Antics love, because he's been wonderful, I think we could all agree. Also, go check out Alistair's blog. One, because it's got good content. Two, because it's maybe the most lovely blog out there, and you should definitely go take a look at that.

<i class="timecode">[01:01:16]</i> This has been great. Y'all should follow if you want more content like this about accessibility and/or core of web technology. You should go follow Some Antics on Twitter to keep apprised of what all the upcoming streams are. And yeah! Stick around, chat. I am going to find a streamer to raid. Thank you all for being here. Have a good'un! Bye!

<i class="timecode">[01:01:50]</i> **Alistair:** Thank you.