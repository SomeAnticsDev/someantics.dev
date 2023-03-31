<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics! It's been some time, and because it's been some time, if you notice any technical issues, please let me know in the chat. It's always a weird thing of, like, coming back to streaming after some time, but it's great to have y'all.

Welcome to everyone who's made it. I see Arran, I see Brent, I see Homer, I see Evan. Thank y'all so much for being here. Welcome, welcome to the first Some Antics stream of 2023. I am thrilled, thrilled to be introducing Mike Mai to the stream. Mike, hello! Welcome, welcome!

<i class="timecode">[00:00:37]</i> **Mike:** Hello!

<i class="timecode">[00:00:39]</i> **Ben:** It is…

<i class="timecode">[00:00:39]</i> **Mike:** Hello, everybody.

<i class="timecode">[00:00:40]</i> **Ben:** …great to have you. I've been, like, following your tweets for a while, and I just… I have a feeling I am about to learn so, so much from you. So, for anyone who's watching who doesn't know who you are, would you like to introduce yourself? 

<i class="timecode">[00:00:57]</i> **Mike:** Of course! Yeah, so I am Mike Mai. I am a web designer. That's what I tell everyone. It's basically what I do. I come from a graphic design background. So I got my graphic design degree from Massachusetts College of Art and Design back in 2009. And since then, I've been doing web design kind of over the past more than 10+ years. I self-taught myself about HTML and CSS, so right now I'm also doing a lot of frontend development. So currently, I am a lead design technologist at Y Media Labs, so YML, and we are a creative agency that makes websites and apps.

And chat, let us know if you are hearing any kind of echoes. 

<i class="timecode">[00:01:54]</i> **Ben:** Yeah, we think there may be some weird echo stuff going on. We're hearing that folks say audio is good, so, hopefully, hopefully that means… hopefully that means we can proceed without issue.

<i class="timecode">[00:02:08]</i> **Mike:** Yeah.

<i class="timecode">[00:02:08]</i> **Ben:** But yeah. So, you've been doing design for a while, and it seems like from a lot of the stuff that you do, like, typography is very core to the stuff that you… you do. Do you wanna kind of talk about that a bit? 

<i class="timecode">[00:02:21]</i> **Mike:** Yeah, sure. Yeah, like I said, I come from a graphic design background, so typography is a huge part of what I do. I think typography is the most important aspect of graphic design, so I'm very, very passionate about typography. And setting type on the web isn't exactly easy, and that's why I love getting into the nitty-gritty details of creating great technology on the web.

<i class="timecode">[00:02:50]</i> **Ben:** So… why is typography important? Like, you know, I… I could go out and find some fonts that, like, look decent, right? Like, why… what makes typography so important in your mind? 

<i class="timecode">[00:03:03]</i> **Mike:** Yeah. So first things first — you can see this on my website as well — 99% of the web is text. I don't have any data to back that up. I'm just… I'm just guessing. There's a lot of text on the web, and if you don't make the text look good to the reader, then… then you're not getting your message through. When you have good typography, you're making things more legible, much easier to read, and you're getting your message across more effectively. 

<i class="timecode">[00:03:40]</i> **Ben:** Absolutely. And like… when typography goes wrong, like… it goes WRONG. Like, I have noticed—

<i class="timecode">[00:03:48]</i> **Mike:** Yes.

<i class="timecode">[00:03:49]</i> **Ben:** —on sites that I frequent often that when the typography is just slightly underwhelming, it can make the whole page just an absolute slog to get through, I've noticed. 

<i class="timecode">[00:04:00]</i> **Mike:** Yeah. It's… there's a lot of small details in typography that you can… you can do to enhance the legibility and readability of your text. Like, something as simple as leading, or what you call it, what you call line height in CSS. Like, if you have a really tight line height, that's gonna make your entire paragraph of text really hard to read. And then if you have, like, all-caps for certain aspects of your text and if your tracking or your letter spacing is really tight there, that will also make the text really hard to read, on top of, like, all-caps is already hard to read. 

<i class="timecode">[00:04:45]</i> **Ben:** Yeah. Absolutely. Yeah, so I'm excited to dive into this. I know you've prepared, like, a just absolutely fantastic run-through of things, so I don't wanna take too much time away from that. So, what do you say we go ahead and dive into this? 

<i class="timecode">[00:05:03]</i> **Mike:** Yeah, sure! 

<i class="timecode">[00:05:04]</i> **Ben:** Alright! So, you sent me, ahead of time, a CodePen. Um… yeah, actually, would you like to kind of just walk me through just generally what the plan is today? 

<i class="timecode">[00:05:16]</i> **Mike:** Okay, got it. Yeah, so the pen you're looking at right here is basically just a simple article. I pulled some content from Wikipedia and Fandom on the topic of Mighty Morphin Power Rangers, which I'm wearing today as well. So, we're just gonna style this article, which has a lot of elements in there like lists, headings, figure, and all kinds of stuff that you would normally… normally see in the article. So we're gonna style this whole page today with some modern CSS. And we'll… at the end, we're gonna make it much nicer to read than what you're seeing right here, which is the browser default. 

<i class="timecode">[00:06:03]</i> **Ben:** Yeah! And there's a bit of a surprise here at the end, too, because… this isn't English!

<i class="brackets">[Mike laughs]</i>

So… one of the, one of the things that really excited me about bringing you on is, you are one of the few people I've ever seen talk about, like, typography from an internationalization angle. And so that's part of what we'll be talking about too, right? Is, like, how to do this when it's not just English on the mind.

<i class="timecode">[00:06:31]</i> **Mike:** Yeah, exactly. Typography… like, the things that I learned in school is really specific to English typography. And what I find is a lot of those things don't apply in Chinese. I'm not sure about Japanese or Korean. I imagine it's very similar as well. So we'll go into a little bit of that, how to fine-tune your CSS for CJK characters.

<i class="timecode">[00:07:00]</i> **Ben:** Alright! Cool, so where should we get started? 

<i class="timecode">[00:07:05]</i> **Mike:** Let's get started with… let me explain a little bit about the HTML first.

<i class="timecode">[00:07:11]</i> **Ben:** Sounds great.

<i class="timecode">[00:07:11]</i> **Mike:** So, everything we're doing today, we are doing semantic HTML. There's… there's no `<div>` whatsoever. I don't wanna see any `<div>`s in today's… in today's work. Everything is semantic HTML. So you will see in the structure, there's `<header>`, there's `<main>`, there's `<footer>`. And then within each one, there's the headings, the paragraphs, the figure, the list, and all of those things. Everything is written in semantic HTML. 

<i class="timecode">[00:07:41]</i> **Ben:** Alright! I love to see it. I am, uh, a little notorious for, uh, having created a whole brand based on a pun about semantics.

<i class="timecode">[00:07:51]</i> **Mike:** Yep.

<i class="brackets">[Mike laughs]</i>

I thought that would be very appropriate for today's stream. 

<i class="timecode">[00:07:58]</i> **Ben:** Absolutely, and I think one of the things that we'll see, right? Is that, like, there's… semantic markup provides a whole lot in the way of, like, providing extra context around, like, inline text, right? There are so many inline, text-level semantics that cleanly map, or fairly cleanly map, to a lot of actual, like, typographical conventions, right?

<i class="timecode">[00:08:25]</i> **Mike:** Yes, yes.

<i class="timecode">[00:08:25]</i> **Ben:** And so I imagine that's going to really help today. 

<i class="timecode">[00:08:29]</i> **Mike:** Yep, yep, definitely. Uh, yeah. Let's get started in the CSS, then. 

<i class="timecode">[00:08:35]</i> **Ben:** Sounds good. Let me go ahead and adjust my windows real quick. And we won't be showing too much of the…

I don't think we'll be going back and forth to the HTML a whole lot, but feel free to call out if we need to be looking at any of that in particular. But yeah.

<i class="timecode">[00:08:50]</i> **Mike:** Okay.

<i class="timecode">[00:08:50]</i> **Ben:** So looking at the CSS, I see a whole lot of, like, cascade layers, which is super fun.

<i class="timecode">[00:08:56]</i> **Mike:** Yeah. So , for the purpose… for the purpose of today's stream, I kind of broke it down into a couple of layers so I can, like, write the CSS in order. Normally, I wouldn't do this. You're gonna see the repeating layers as you go through the CSS file, but normally I wouldn't organize like this. I just did it for the stream today so we can go line by line and uncomment the CSS here.

<i class="timecode">[00:09:25]</i> **Ben:** Okay.

<i class="timecode">[00:09:26]</i> **Mike:** And yeah. And you guys have already learned about CSS layers in previous streams, so I don't need to go too deep into that. I recommend you… all of you to go back into the history and look at the past streams about CSS layers.

<i class="timecode">[00:09:43]</i> **Ben:** I'm gonna share the link to that first. For you guys. Yes, we've done… Mayank actually came on and they showed off cascade layers. So if you're curious about what this tech is, that's a fantastic stream to go catch up on.

<i class="timecode">[00:10:01]</i> **Mike:** Yep.

<i class="timecode">[00:10:02]</i> **Ben:** Cool. 

<i class="timecode">[00:10:02]</i> **Mike:** Okay!

<i class="timecode">[00:10:03]</i> **Ben:** Alright!

<i class="timecode">[00:10:04]</i> **Mike:** Cool! So, the first thing that I do when setting type on the web, and that will be making the typography fluid. So this is the #1 line here. So if you go to, the first line here, under "Fluid type," you can uncomment that line right there with the font-size. And we'll talk about that.

<i class="timecode">[00:10:29]</i> **Ben:** Ooh. Not allowed— ohhh…

<i class="timecode">[00:10:31]</i> **Mike:** Alright, fork! 

<i class="timecode">[00:10:33]</i> **Ben:** Oh, no! Okay, I can't fork it, but that's fine.

<i class="timecode">[00:10:37]</i> **Mike:** Oh, it didn't work?

<i class="timecode">[00:10:40]</i> **Ben:** You what?

<i class="timecode">[00:10:43]</i> **Mike:** Did it work?

<i class="timecode">[00:10:45]</i> **Ben:** Let's find out. What is this…? So, this is applied on root, so this should have applied to everything.

<i class="timecode">[00:10:50]</i> **Mike:** Yep.

<i class="timecode">[00:10:51]</i> **Ben:** Yeah!

<i class="timecode">[00:10:51]</i> **Mike:** I think it's working.

<i class="timecode">[00:10:52]</i> **Ben:** Okay, it's very subtle, but as I change the…

Yeah, there it is.

<i class="timecode">[00:10:58]</i> **Mike:** There you go. Okay.

<i class="timecode">[00:11:02]</i> **Ben:** So… why fluid type? 

<i class="timecode">[00:11:04]</i> **Mike:** Yeah, so fluid typography is something that I think is very important for… for legibility, really. Uh, I think when the typography is not fluid, when you're looking at 16 pixel font size in, like, your mobile device, that might look fine. And then if you have a huge screen — monitor — for your desktop, and you're looking at the same 16 pixel font size, that's gonna look a little bit too small for you. You might have to, like, lean… lean toward your monitor to actually read the text better. So I believe that fluid typography would solve that problem by proportionally scaling up everything. So that's basically what it's doing here.

And there are ways to handle fluid typography. This way I'm handling here with the clamp, the CSS clamp method. You can also get it wrong and make things inaccessible, so it's very important to understand what's going on here. So here, I'm setting the font size on the… at the root level, so all the values are in percentage. So 100% equals 16 pixels, so that's the min I'm setting here. And then 150%, that's… that's 1.5 times 16.

<i class="timecode">[00:12:31]</i> **Ben:** That's 24, right?

<i class="timecode">[00:12:32]</i> **Mike:** 20… it's 20. Is it 20, or 24? 

<i class="timecode">[00:12:35]</i> **Ben:** Oh, it's 20. Wait, no — 1.5, it would be 24.

<i class="timecode">[00:12:38]</i> **Mike:** Oh, it's 24.

<i class="timecode">[00:12:39]</i> **Ben:** It's 16 plus 8.

<i class="timecode">[00:12:39]</i> **Mike:** Yeah, it's 24 pixels. So, so this clamp is controlling the base font size from 16 pixels to 24 pixels.

And then in between, that is the ideal value. So here is something that could go wrong. If you were to put just a viewport value in here, like what you see on MDN — they have example of, like, I think 5vw in the ideal value here in there — that could actually make things inaccessible, because at some point, your text won't be able to scale beyond, let's say 200% of the…

<i class="timecode">[00:13:21]</i> **Ben:** Right.

<i class="timecode">[00:13:22]</i> **Mike:** …of the base font size. So you don't want to just use a viewport value there. You wanna include… at least, like, if you're doing it in rem, you wanna use rem plus a viewport value. If you're doing it in em, you use an em value plus a viewport value. In this case, I am using percentage because I'm doing it on the root level. So I'm using 90% plus 0.5 viewport inline size.

So I… you will notice, throughout this whole CSS file, I'm using logical CSS properties and logical CSS values to counter… to account for the things that we're gonna talk about later on with the things setting in Chinese, Japanese, and Korean.

<i class="timecode">[00:14:13]</i> **Ben:** I'll go ahead and see if I can find an example of that, but…

<i class="timecode">[00:14:17]</i> **Mike:** Yeah, a lot of these things—

<i class="timecode">[00:14:21]</i> **Ben:** Yeah, yeah, here we go.

<i class="timecode">[00:14:22]</i> **Mike:** It's like getting used to… getting used to logical CSS. Rather than the old CSS of, like, width, height, and left, right, top, and bottom, getting used to that convention of inline versus block. Once you use those values, you don't have to, like, write specific CSS for, like, specific languages or specific writing modes. 

<i class="timecode">[00:14:50]</i> **Ben:** Yeah. We've actually already got a few questions in the chat. A few people wanna know—

<i class="timecode">[00:14:54]</i> **Mike:** Yeah.

<i class="timecode">[00:14:54]</i> **Ben:** Like, does this clamp… like, will this scale if the user has changed, like, their default font size in their browser? So, if they've—

<i class="timecode">[00:15:04]</i> **Mike:** Yes.

<i class="timecode">[00:15:04]</i> **Ben:** —set it to be, you know… maybe they want it default 30 pixels or something like that. Does this scale appropriately with that? 

<i class="timecode">[00:15:11]</i> **Mike:** Yep! So this will play with your browser's font size setting. So that's the important thing to remember about the root. When you are setting font size in the root, you always use percentage, and that will allow the browsers to adjust the font size. If you're setting this in pixels, it will always be in that pixel value then. Yeah, you have to do percentage in the route. 

<i class="timecode">[00:15:38]</i> **Ben:** Good deal. Okay! Cool. So yeah, now we've got something that's a little more comfortable, you know, on mobile versus on, like, very wide screens. It actually… like, it feels like it scales very appropriately for…

Okay!

<i class="timecode">[00:15:55]</i> **Mike:** Yeah, and this is as far as I would go for fluid typography. I see a lot of people doing, like, individual clamps for headings as well. I think that's overkill. I think just doing it at the root is… it's gonna be good 99% of the time. I'm sure there are, like, edge cases that you might do on, like, a beautiful landing page. You might do do some more clamping there. But 99% of the time designing user interfaces, this should be all set.

<i class="timecode">[00:16:27]</i> **Ben:** Gotcha. Very cool.

<i class="timecode">[00:16:29]</i> **Mike:** Okay.

<i class="timecode">[00:16:29]</i> **Ben:** Okay!

<i class="timecode">[00:16:30]</i> **Mike:** So yeah, the next thing that we're gonna handle is leading. If you uncomment the line-height there, that will increase the leading a little bit and make things a little easier to read. 

So, the browser default is… what you looking at here is Times New Roman. When you say "Times New Roman," people will just, like… I think a lot of people will just like, "Ugh, that, that font; that… that ugly font." But the thing is, like, I don't think it's that ugly. You can actually make it work. So a lot of the CSS we're doing here today, the first 80 or 70% of it, I'm not going to change the font family. I'm going to use Times New Roman to its best, to its… whatever it can do. Like, I don't wanna change that until I absolutely have to.

<i class="timecode">[00:17:26]</i> **Ben:** Yeah.

<i class="timecode">[00:17:26]</i> **Mike:** So, here…

<i class="timecode">[00:17:27]</i> **Ben:** Absolutely. I think…

<i class="timecode">[00:17:29]</i> **Mike:** Yeah.

<i class="timecode">[00:17:30]</i> **Ben:** I think that's, like, one thing I've noticed, right, is, like, typography always feels like, you know, it's so much better when you do minimal changes that…

Like, if you're doing a whole bunch of one-offs that seem right individually, they add up into something that feels inconsistent… like, inconsistent and messy, and incoherent in a way. So, I like this notion of, like, being very surgical with it, right? And not doing a whole bunch of one-off things. 

<i class="timecode">[00:18:00]</i> **Mike:** Yeah. And also, yeah, also, the point I wanna get across here is, by using system fonts, you are actually making things more accessible, making things more performant, because it's not taking any more data to load a system font. You are also doing… doing good to the environment by not sending that much data just on fonts.

Yeah, so— 

<i class="timecode">[00:18:28]</i> **Ben:** I'm also… I'm finding a link to this as well, but I previously had type designer Bruno Maag on the stream, and one of the things that, like, he talked about was that familiarity is a really big thing in typographic accessibility, right? Like, we could talk, like, day-in, day-out, about, oh, what fonts are the most accessible, but like, by and large, the two biggest factors it seems like, consistently, in whether type is readable are how familiar someone is with the font and then the line height, right? The leading. Especially when we talk about, like, dyslexic users, there's kind of this, like, notion of — like, people will talk about, like, dyslexic-friendly fonts like Dyslexie or OpenDyslexic, and some dyslexic people do find those fonts helpful. Many don't, right? No study has consistently shown, reproducably, that these fonts actually consistently help dyslexic users. And really, what benefits most dyslexic people most reliably most often is just using a font that they'll be familiar with and, you know, having a sensible line height. 

<i class="timecode">[00:19:45]</i> **Mike:** Yeah, exactly. Good typography will take care of a lot of things.

<i class="timecode">[00:19:52]</i> **Ben:** Absolutely.

<i class="timecode">[00:19:52]</i> **Mike:** Yeah, so here…

<i class="timecode">[00:19:53]</i> **Ben:** So how did you land on 1.35? Is that just something you've plucked from memory? Is that… you know, like, how did you know that one? 

<i class="timecode">[00:20:02]</i> **Mike:** Yeah, so this number should be different depending on what font you're using, because every font has a different x-height. So, x-height is the height of the character "x."

So that will depend on the x-height, so if you have a larger x-height in your font, then you want to increase the leading, the line height. So here, I am giving this a little more breathing room by increasing it to 1.35, as opposed to, I think the browser device is 1.25 or something. So you see a little bit of increase on the line height here. 

<i class="timecode">[00:20:40]</i> **Ben:** If I'd gone to, like, 1.5, like, this starts to feel like maybe—

<i class="timecode">[00:20:44]</i> **Mike:** Too much!

<i class="timecode">[00:20:44]</i> **Ben:** —this stretches the limit of what I'd be comfortable with, you know? But it's like—

<i class="timecode">[00:20:47]</i> **Mike:** Yeah.

<i class="timecode">[00:20:47]</i> **Ben:** It's stretching it, right? Everything feels closer. 

<i class="timecode">[00:20:51]</i> **Mike:** Yeah. A lot of people use 1.5 blindly for whatever font they're using. They think, "Oh, 1.5 is the golden standard." But that's not the case. You really need to look at the x-height of your font and then try to figure out that number there. 

<i class="timecode">[00:21:05]</i> **Ben:** And Arran in the chat actually calls out, like, this is why you should make sure that your fallback font has the same x-height, 'cause otherwise it's gonna, you know, seem weird with things like line height and whatnot.

<i class="timecode">[00:21:19]</i> **Mike:** Yep. Yep, not only about things looking weird, but you also get some kind of content shift, and that's one of the… one of the biggest things that you should not do in web design, is like making your content shift. 

<i class="timecode">[00:21:36]</i> **Ben:** Ooh. I'm also seeing a few people say that 1.5 is the WCAG recommendation, apparently.

<i class="timecode">[00:21:42]</i> **Mike:** Yeah, I think they have recommendations on that, but you really do need to look at the font you are using. Like, guidelines are just guidelines. What's really accessible is through testing with real users and getting the… what's best for your user, rather than just, like, checking a box in a guideline.

<i class="timecode">[00:22:03]</i> **Ben:** For sure.

<i class="timecode">[00:22:04]</i> **Mike:** Yeah.

<i class="timecode">[00:22:05]</i> **Ben:** For sure… alright!

<i class="timecode">[00:22:06]</i> **Mike:** So, yeah, let's move a little faster. I think we… we might be… yeah, we might be getting… we might be running out of time. So, for the next few things, I think we can just uncomment them and we can talk about that. They're very basic things that we can… we can just fly through.

<i class="timecode">[00:22:30]</i> **Ben:** So we made it auto dark mode.

<i class="timecode">[00:22:32]</i> **Mike:** Yeah.

<i class="timecode">[00:22:35]</i> **Ben:** And then what else do we wanna do? Do we wanna…? Yep, maybe we just go ahead and pull…? 

<i class="timecode">[00:22:41]</i> **Mike:** Yeah, just get 4, 5, 6 out of the way.

<i class="timecode">[00:22:46]</i> **Ben:** Okay!

<i class="timecode">[00:22:46]</i> **Mike:** The basic… the basic resets that I use. Now I can talk a little bit about those. 

<i class="timecode">[00:22:52]</i> **Ben:** Whoa… what is…? Oh, was that the smoothing? Hang on, I wanna see—

<i class="timecode">[00:22:56]</i> **Mike:** Yep!

<i class="timecode">[00:22:56]</i> **Ben:** I'm gonna prepare…

<i class="timecode">[00:22:59]</i> **Mike:** You won't… you actually won't see it that much in Times New Roman, but would… well, yeah, you do see a little bit of that. So yeah, the reset that I'm doing here is basically trying to let the font be how it was designed. If we don't… you don't use this feature, it will… as you can see, it's kind of doing a little bit of a fake bold. It's adding a little bit to the font that it was not intended in the design. So I'm trying to reset these things to make it stay true to how it was designed. And then you can see the rendering is very similar across different browsers and different devices. You're not gonna see the font looking bolder in another… in another browser. If you don't reset this, then that would happen. Like, it would depend on how the browser rendered that text, and then you might see differences between… across browsers. 

<i class="timecode">[00:24:04]</i> **Ben:** Gotcha, okay. Yeah, because I have to imagine, like, type designers: probably building their fonts, under some very ideal circumstances, right? And like, if you use it the way it's, like, meant to be used, right? You'll have well-designed stuff. And browsers are compensating for, you know, oh, they're trying to, like, smooth things over and stuff like that, and that can lead to a font being used out of its context. 

<i class="timecode">[00:24:31]</i> **Mike:** Yeah, and the kerning feature there is also, like, trying to stay true to how the font is designed. Designers, type designers, are building the kerning within each font. So I'm trying to use whatever the intended design is, so I'm setting the kerning feature there.

The other resets are pretty standard. We have the border-box and then the auto-dark mode. 

<i class="timecode">[00:24:57]</i> **Ben:** Good deal. Alright!

<i class="timecode">[00:25:00]</i> **Mike:** Cool. Okay, so the next thing that I will take care of in terms of typography… as you can see on the left in the preview here, everything is, because you have dark mode enabled, so this page will automatically go to dark mode. 

And now the next thing that I want to take care of is the focus outline. So anything that's focusable… I'm using :focus-visible here, so take care of keyboard focus rather than clicking on something with your mouse. So you will see this outline being changed to a color that I want to use as the brand color.

And here I'm using just the CSS "crimson" color. I love this color because it has above 3:1 color contrast ratio against either black or white, so I can use this color as the border color for a lot of things. 

<i class="timecode">[00:25:58]</i> **Ben:** Makes sense. Yeah, absolutely — less you have to change in each mode, which is good.

Again, like, a whole lot of, like, just great typography as being minimally invasive doing… or sorry, like, being just incredibly surgical with a lot of this, and not doing a whole bunch of one-off things. 

<i class="timecode">[00:26:15]</i> **Mike:** Yeah.

Yeah, so the next few things is around this crimson color. So I'm enabling the selection color to be crimson, so if you select text, you can also get that little crimson color there. 

<i class="timecode">[00:26:28]</i> **Ben:** Okay.

<i class="timecode">[00:26:30]</i> **Mike:** Yeah. And the next one is the links. Here, I am trying to get a little fancy with the links. So if you uncomment these things, you will see that I'm using a wavy underline, and I am giving that a crimson color as well.

<i class="timecode">[00:26:50]</i> **Ben:** Good deal. I… I like this move of having the, like… I mean, first of all, I'm very glad you're keeping the underlines, because that is… that is a whole debate within—

<i class="timecode">[00:26:59]</i> **Mike:** Yes.

<i class="timecode">[00:26:59]</i> **Ben:** —accessibility spaces, of course. But you're… you're still keeping things fairly legible by making the underline a distinct color. Actually, your brand color in this page.

<i class="timecode">[00:27:14]</i> **Mike:** Yeah.

<i class="timecode">[00:27:15]</i> **Ben:** You're keeping them distinct so it doesn't just, like, all muddle together, the text and the underline. 

<i class="timecode">[00:27:20]</i> **Mike:** Yep, exactly.

Yeah, next, and just a little detail on the hover style and the focus style. So on hover, I'm changing the underline to the current color. So as you can see, with this whole CSS file, I'm trying to stay away from changing any color at all other than defining crimson here for certain things. Everything else, because I'm using the auto-dark mode, I don't wanna change the text color, I don't wanna change the background color. I just want the browser to handle that with the dark mode colors. 

<i class="timecode">[00:27:58]</i> **Ben:** Absolutely. Yeah. If I had… and, I mean, I'm just gonna use this to simulate turning off dark mode.

<i class="timecode">[00:28:05]</i> **Mike:** Yeah.

<i class="timecode">[00:28:06]</i> **Ben:** Like, this still works, right? Like, it's still the same red underlines, but all the colors have changed. 

<i class="timecode">[00:28:13]</i> **Mike:** Exactly. Yeah, as you can see, after, like, how many lines of CSS of that is…? Like, around 50 lines of CSS. The page itself is already starting to look kind of good, I have to say. So I…

<i class="timecode">[00:28:29]</i> **Ben:** Yeah!

<i class="timecode">[00:28:29]</i> **Mike:** I think… I think, like… if…

I'll say this. If you think it looks good already, you can stop there. Like, there's no need for you to go any further if you think the typography is already looking good. But if you wanna do more, then of course you can… you can go on and define more CSS. But the thing to remember here is the less CSS, the better. That's how I operate. Like, if you can write less code, that's great. Like, just write less sent code.

<i class="timecode">[00:29:02]</i> **Ben:** Absolutely. I think… like, here's the thing. This… I already think this looks worlds better than it was, you know? Like, this is… this is an article I could envision myself reading at this point. 

<i class="timecode">[00:29:17]</i> **Mike:** Yeah, exactly. And to an average person out there and you present this to them, and can they really tell this is Times New Roman or any kind of font? They don't really care. I don't think they would care, as long as it looks good and it is legible to them. 

<i class="timecode">[00:29:37]</i> **Ben:** Absolutely.

Alright, so next up, I see we've got a few CSS custom properties here. You wanna kind of talk through what we're doing here? 

<i class="timecode">[00:29:49]</i> **Mike:** Yeah, so next I'm setting up some design tokens that I generally use in each web project. Like I said, I come from a graphic design background, so a lot of these things kind of relate to graphic design. I have the gutter variable here, which takes care of the spacing horizontally. Horizontally? Yes, horizontally. So in between columns, that's the—

<i class="timecode">[00:30:14]</i> **Ben:** Oh, okay.

<i class="timecode">[00:30:14]</i> **Mike:** —the spacing. So I am doing this using the character value. So it's something I'm experimenting with. This is okay to do in the article design. It's not really good to do in interface design. You might get some weird results using character values here. So that's the horizontal spacing.

We also have the stack spacing. That's the vertical spacing. The vertical, so in between headings and text, lists and text, that's the stack spacing there. And I'm using the x-height for that. The reason I'm doing that—

<i class="timecode">[00:30:57]</i> **Ben:** That's the height of the "x" letter, right?

<i class="timecode">[00:30:59]</i> **Mike:** Yeah.

<i class="timecode">[00:30:59]</i> **Ben:** The lowercase "x"? 

<i class="timecode">[00:31:00]</i> **Mike:** Yeah, exactly. Yeah, the reason I'm doing that, like I said before, every font has a different x-height. I want to make a connection to that, so if in any case I change the font for the page, it will adapt to that x-height. 

<i class="timecode">[00:31:17]</i> **Ben:** That makes sense!

And so, you've used "gutter" and "stack," which are pretty, like, design, typography-heavy terminologies, but…

<i class="timecode">[00:31:28]</i> **Mike:** Yeah.

<i class="timecode">[00:31:29]</i> **Ben:** …it seems like this maps, in my mind, as someone who would not consider themself a designer, right? This would… this would map to inline spacing and block spacing. 

<i class="timecode">[00:31:42]</i> **Mike:** Yeah, exactly. 

<i class="timecode">[00:31:44]</i> **Ben:** Okay. Cool. And both of these are also fluid, so they will adjust as you…

<i class="timecode">[00:31:49]</i> **Mike:** Yep.

<i class="timecode">[00:31:49]</i> **Ben:** …resize the browser. 

<i class="timecode">[00:31:51]</i> **Mike:** Yep. I'm using clamp here just to get that… if you have less vertical space or less horizontal space, you can get that content to a little bit more compact.

<i class="timecode">[00:32:04]</i> **Ben:** Yeah. And it also… it does… it does seem to me like a pretty key thing here is, this is a pretty minimal delta between 2½ characters and 3 characters.

<i class="timecode">[00:32:16]</i> **Mike:** Yeah.

<i class="timecode">[00:32:16]</i> **Ben:** Now, the font is resizing, so it's a little bigger than this would make it seem. But, you know, that, like… this is a subtle thing. You are not adding in—

<i class="timecode">[00:32:25]</i> **Mike:** Yes.

<i class="timecode">[00:32:25]</i> **Ben:** —gobs and gobs of extra space. 

<i class="timecode">[00:32:28]</i> **Mike:** Yeah, exactly. 

<i class="timecode">[00:32:30]</i> **Ben:** Gotcha. Okay! And then… let's talk about line length.

<i class="timecode">[00:32:33]</i> **Mike:** And next… yeah.

<i class="timecode">[00:32:34]</i> **Ben:** You've got 70 characters. 

<i class="timecode">[00:32:36]</i> **Mike:** Usually, the comfortable line length is between 55 to 75, so I experiment with numbers in between those two. So for Times New Roman, I think 70 is pretty good. And we'll see it later on once we define that, the max width of the article will adapt to that 70-character width.

And then the next one, the list… the ordered list style. So here, I am defining it just in case I need to do CJK characters later, which I will change that "decimal" to something else that adapts more to CJK. So we'll see that later. 

<i class="timecode">[00:33:23]</i> **Ben:** Okay! Cool.

<i class="timecode">[00:33:25]</i> **Mike:** Alright.

<i class="timecode">[00:33:25]</i> **Ben:** So now looks like we're good.

<i class="timecode">[00:33:27]</i> **Mike:** Yeah. 

<i class="timecode">[00:33:27]</i> **Ben:** Oh, I'm sorry, go for it.

<i class="timecode">[00:33:29]</i> **Mike:** Yeah, so those are just variables we created. They're not in effect yet until we use them, so let's go through and uncomment more things and let's see what happens. 

<i class="timecode">[00:33:41]</i> **Ben:** So I just kind of see what happens. Okay, you are FULLY resetting ALL the margins and paddings. 

<i class="timecode">[00:33:46]</i> **Mike:** Yep.

<i class="brackets">[Mike laughs]

There we go, yeah. Now you are really resetting everything. The reason I told you earlier, "if you think it looks good, just stop there."

But now, you're kind of at a point of no return, because [chuckles]</i> you are resetting everything. Now you really need to massage everything on your own.

So here the next one, this is the line length. The old way of doing this is setting the max inline size, and then the margin: auto on either side, which will center the article within the page. So as you can see, now the page is about… the article is about 70 characters wide, and it's centered on the page. 

<i class="timecode">[00:34:32]</i> **Ben:** What's nice about this, too, is as I, like, resize this, I'm not getting a, like, change — like, words aren't jumping from line to line, too.

<i class="timecode">[00:34:42]</i> **Mike:** Yep.

<i class="timecode">[00:34:43]</i> **Ben:** I have to… I have to go pretty small before that starts to happen.

<i class="timecode">[00:34:47]</i> **Mike:** Yep, once you reach that max inline size, it will stay there because it's counting the characters. It is not counting rem. It's not counting pixels, which might change… which shift your text around. But with characters, you are not changing that around. Everything is scaling. With the fluid typography, everything is scaling up proportionally.

<i class="timecode">[00:35:09]</i> **Ben:** Absolutely. Yeah, this is good. Liking this. I mean, there's still definitely some things to tweak. We need to, like, restore some spacing, but…

<i class="timecode">[00:35:17]</i> **Mike:** Yeah.

<i class="timecode">[00:35:18]</i> **Ben:** Yeah, so you're applying that to, just, the full body. You're saying the full body here is going to be the line length.

<i class="timecode">[00:35:25]</i> **Mike:** Yeah.

<i class="timecode">[00:35:25]</i> **Ben:** I could see a case where, you know, if you needed a heading where, like, the background of the heading's — uh, sorry, header. That's the word I'm looking for. Like, a header that stretches across the page. You maybe wouldn't necessarily apply this to the body per se.

<i class="timecode">[00:35:39]</i> **Mike:** Exactly.

<i class="timecode">[00:35:40]</i> **Ben:** You could apply it to, like, an article wrapper around the content. 

<i class="timecode">[00:35:43]</i> **Mike:** Yeah. So, that's the next thing. That's… so, this is the old way of doing it.

<i class="timecode">[00:35:47]</i> **Ben:** Oh, look at that.

<i class="timecode">[00:35:48]</i> **Mike:** The next thing is the new way of doing it, which involves a little bit of math. So let's comment out the old way and see how this new way works.

<i class="timecode">[00:36:00]</i> **Ben:** Okay!

<i class="timecode">[00:36:00]</i> **Mike:** So, it works exactly the same. You're not gonna see any difference until we do something else. But basically, I'm only using padding-inline to handle the max width of the content. The math I'm doing here is… so, I'm setting it on the `<header>`, `<main>`, and `<footer>`. So I'm setting the padding-inline to be… to be 100 viewport inline size minus whatever the available space allows. It's either the line length or 80% of the viewport inline size. And then divided that by 2. That is exactly the math you need to get the padding on either side of the article. It's exactly what—

<i class="timecode">[00:36:53]</i> **Ben:** Oh, yeah.

<i class="timecode">[00:36:53]</i> **Mike:** —same as what the old way was doing, which was using margin. But this way, imagine you're setting this value to a CSS variable. Now you can actually use it as padding. You can use it as margin. You can use it for whatever… whatever you wanna do!

<i class="timecode">[00:37:13]</i> **Ben:** Okay!

<i class="timecode">[00:37:14]</i> **Mike:** Like, it opens a lot more doors for you to manage your layout.

<i class="timecode">[00:37:20]</i> **Ben:** Because, yeah, I think of, like, oh, every time I've just, like, set this as a margin or a padding without thinking much about it, right? I invariably run into the problem of, like, oh, well, I want a full-bleed treatment now. You know, one that like spans the—

<i class="brackets">[thump]</i>

Ooh, gosh. Sorry to hit the microphone. Hopefully that wasn't the bad sound.

But something that spans the entire width of the page. But I've already set, you know, some margins on the parent or something like that, that make that—

<i class="timecode">[00:37:45]</i> **Mike:** Yeah.

<i class="timecode">[00:37:45]</i> **Ben:** —just so much harder than it needs to be. 

<i class="timecode">[00:37:47]</i> **Mike:** Yeah. Yeah, once that becomes a CSS variable, there's a lot of things you can play with. 

<i class="timecode">[00:37:54]</i> **Ben:** Absolutely. Okay! 

Gonna go ahead and uncomment the block padding.

<i class="timecode">[00:37:59]</i> **Mike:** Yeah.

<i class="timecode">[00:38:00]</i> **Ben:** And so this is… this is an example of, we're using logical properties here. So for anyone who's unfamiliar, "inline" refers to basically the spacing between words and characters. So in English, that translates to left and right. And then "block" is, like, the spacing between lines of text, so that would be top and bottom.

<i class="timecode">[00:38:21]</i> **Mike:** Yep, exactly.

<i class="timecode">[00:38:21]</i> **Ben:** For here, we're setting, for English at least — and that's a bit of foreshadowing, I suppose — the left and right padding to be relative to the line length, then the top and bottom — for English — to be… 5% of the viewport? 

<i class="timecode">[00:38:40]</i> **Mike:** Yeah, so this is 5vmax, which is looking for both the viewport height and viewport width, whichever is the biggest.

<i class="timecode">[00:38:49]</i> **Ben:** Oh, okay!

<i class="timecode">[00:38:50]</i> **Mike:** So 5% of either the height or the width. I love using the vmax value because it kind… I really think the spacing is more… it takes care of, like, a lot of spacing issues in your design. So you can, like, squeeze your content a little bit. It'll reference the most… like, whether you are looking at portrait or landscape, it's referencing the longest side to set the spacing.

<i class="timecode">[00:39:23]</i> **Ben:** Yeah.

<i class="timecode">[00:39:23]</i> **Mike:** Which will allow the content to breathe more. You have… you have more spacing for your content to breathe and make it more…

<i class="timecode">[00:39:33]</i> **Ben:** That is… that is so nifty. And just to show off, because we've got headers, mains, and footers going on, I'm just gonna add, like, a 1px solid… I tend to use "tomato" for the outline.

But yeah, so we've got, like, this top chunk here is our heading that we've applied these paddings. We got a main that we're applying. We got… I'm guessing this is a footer and… yeah.

<i class="timecode">[00:40:00]</i> **Mike:** Yep, yep.

<i class="timecode">[00:40:01]</i> **Ben:** Got more chunks, but…

<i class="timecode">[00:40:02]</i> **Mike:** Yep, exactly.

<i class="timecode">[00:40:04]</i> **Ben:** Yeah, so just so you can see kind of where these paddings are getting applied.

<i class="timecode">[00:40:08]</i> **Mike:** Yep, and you can actually see I'm setting the border next! 

<i class="timecode">[00:40:13]</i> **Ben:** Oh — yeah, yeah, yeah! Let's do it! 

<i class="timecode">[00:40:14]</i> **Mike:** Yeah.

<i class="timecode">[00:40:14]</i> **Ben:** Okay.

<i class="timecode">[00:40:15]</i> **Mike:** Yep. So next, I am doing a little fancy border here, which is a border gradient. So now you will see a gradient border across… in between the sections here. 

<i class="timecode">[00:40:31]</i> **Ben:** That's cool. That looks… that looks awesome.

And so this is linear-gradient and unfortunately… like, I see you're doing the "to right," and unfortunately that's… linear gradients aren't logical props yet. But here, it doesn't matter 'cause it's all symmetrical anyways. 

<i class="timecode">[00:40:48]</i> **Mike:** Yeah, that's one thing… that is one property that you would have to change if you're changing your vertical… changing your writing direction. So yeah, just watch out for any kind of CSS that's not logical. Then you do have some work to do when you change your writing direction.

<i class="timecode">[00:41:09]</i> **Ben:** Alright.

<i class="timecode">[00:41:09]</i> **Mike:** Okay.

<i class="timecode">[00:41:10]</i> **Ben:** So it seems like next, we're diving into bits that are, like, sub-bits…

<i class="timecode">[00:41:14]</i> **Mike:** Yeah.

<i class="timecode">[00:41:14]</i> **Ben:** …of the prose, right? Like lists and figures and…

<i class="timecode">[00:41:18]</i> **Mike:** Yeah. 

<i class="timecode">[00:41:19]</i> **Ben:** Yeah.

<i class="timecode">[00:41:20]</i> **Mike:** Yeah, so here, I am just trying to set… trying to set some standard spacing in between block elements. So if you uncomment these, you will see the standard stack spacing in between each paragraph, each piece of heading, lists, and all those things.

And here, I… the second one, I am resetting that margin for things that are nested inside the ordered lists or unordered lists. 

<i class="timecode">[00:41:53]</i> **Ben:** Oh! Yeah, okay. Because we've got this list here on the left

<i class="timecode">[00:41:57]</i> **Mike:** Yeah.

<i class="timecode">[00:41:58]</i> **Ben:** I didn't actually realize it at first. This is a sublist—

<i class="timecode">[00:42:01]</i> **Mike:** Yeah, that's nested.

<i class="timecode">[00:42:02]</i> **Ben:** —of "Adaptation Process."

<i class="timecode">[00:42:04]</i> **Mike:** Yeah.

<i class="timecode">[00:42:04]</i> **Ben:** We want those things to be grouped because they are the same thing. They're just… this is a sublist of that. Okay. 

<i class="timecode">[00:42:11]</i> **Mike:** Yeah.

Yeah, so once you reset all your spacing, there's a lot of nuances you need to get through. That's why I said you reset everything now, there's no… that's the point of no return. You have to fine-tune everything now.

<i class="timecode">[00:42:25]</i> **Ben:** Yeah.

<i class="timecode">[00:42:26]</i> **Mike:** So, yeah. Next, basically I'm setting the indent here for this item. You're not gonna see this until later, when the variable has some kind of value for…

<i class="timecode">[00:42:41]</i> **Ben:** Okay.

<i class="timecode">[00:42:41]</i> **Mike:** …for Chinese characters, because the hanging punctuation thing in typography, that's really just for English. That's not for Chinese or any kind of East Asian characters, so we don't wanna do that in those languages. So I'm setting up a variable here in case I need to undo the hanging punctuation on bullets, on quotes, and all those things. So later, we'll come back to this.

And then next, pretty similar, I'm setting… using the same variable. But here, for English, I am indenting that nested list. So as you can see under "Adaptation Process," now that nested list has some kind of indent to push the second level in a little bit.

<i class="timecode">[00:43:31]</i> **Ben:** Yeah, and you're reusing your gutter here, so—

<i class="timecode">[00:43:35]</i> **Mike:** Yeah.

<i class="timecode">[00:43:35]</i> **Ben:** —everything feels very harmonized with the rest of the page. This isn't a bespoke, custom value. It's the same… same logic you're applying elsewhere.

<i class="timecode">[00:43:45]</i> **Mike:** Yep, exactly.

<i class="timecode">[00:43:47]</i> **Ben:** Nice.

<i class="timecode">[00:43:47]</i> **Mike:** And then next, we're doing a little bit of traditional typography here. I'm gonna set a paragraph indent, rather than paragraph spacing, throughout this whole article, so that's what this is doing. I am opening each paragraph with an indent rather than spacing. So you can see, in between paragraph, you're not gonna see any spacing. 

So, the thing about how to indicate a paragraph is that these two ways, either paragraph indent or paragraph spacing, you never use both of them. You only choose one of them. It's like wearing belts and suspenders. If you're wearing a belt, you don't need suspenders. They both function the same way. They do the same thing. You don't need both. So today, I'm doing some traditional typography here, so I'm setting a paragraph indent. 

<i class="timecode">[00:44:42]</i> **Ben:** Okay! And is there… like, do you just generally prefer the indent approach over the spacing approach, or is it kind of a "depends on a case-by-case basis" thing?

<i class="timecode">[00:44:53]</i> **Mike:** Uh, I think I prefer the indent more than the spacing, but in reality, <i class="brackets">[chuckles]</i> 99% of the sites that I design is probably gonna benefit from paragraph spacing, because indents are much harder to do than paragraph spacing. As you can see here, I have to, like…

There are certain rules you have to follow. If a paragraph is following a heading, you don't wanna indent there, so that's what the next thing is doing. So any heading that's followed by a paragraph, I wanna remove the indent.

<i class="timecode">[00:45:31]</i> **Ben:** Okay.

<i class="timecode">[00:45:33]</i> **Mike:** And then the next thing that I love doing, I don't think a lot of people are doing, is kind of fine- tuning the spacing between a heading and paragraph. If you set the same spacing between paragraphs and use that same spacing on heading and paragraph, that's gonna generate too much spacing between a heading and a paragraph, and your content, your information hierarchy, is getting thrown off by that. So, so this is basically what I'm doing here, is adjusting that spacing a little bit between… between heading and paragraph.

And you can see that the first one is about going from a paragraph to a heading. I'm giving it more room there to start another section. If you're using another heading, you're starting another section. So I'm giving you more room to breathe there, trying to group the content together a little better.

And then the next one is basically taking care of a heading followed by a paragraph. So now you can see, I'm pulling the heading in a little bit when it's touching a paragraph of text. So you can see there's a lot of spacing from a paragraph to a heading and then less spacing from a heading to a paragraph. 

<i class="timecode">[00:46:59]</i> **Ben:** Yeah, it's a subtle thing, but it just pulls it in a little.

<i class="timecode">[00:47:02]</i> **Mike:** Yeah.

<i class="timecode">[00:47:02]</i> **Ben:** Makes it… makes it very clear that the paragraph is, like, part of this section. Yeah. Okay!

<i class="timecode">[00:47:07]</i> **Mike:** Yeah, exactly. And then next, this can be set up here or set up, like, way before, in the beginning, as well. I'm just setting up a type scale. So here, I mentioned something in something that I released recently called the Typography Manual. So, if you're not familiar with typography and you don't know how to set a type scale, you can just google traditional point sizes, and it will give you — Wikipedia will give you a list of point sizes to work with. And all you have to do is convert that to rem values like I'm doing here and just, like, use that scale that's being used in a lot of print materials. And yeah, just try that, try that out. There are different values for you to try. I'm picking six of them to plug it in here. 

<i class="timecode">[00:48:05]</i> **Ben:** Can you help me understand the reasoning behind doing 3.999 instead of 4? 

<i class="timecode">[00:48:12]</i> **Mike:** Yeah, so that is just a conversion between a point size to a rem value. So I'm just keeping whatever, like, down to the three digits. Like, trying to get more precise. You don't really need to do this. You can do 4rem. You can do 3rem. You don't really need to get into the decimal like I am doing here. I'm just trying to be more… staying true those point sizes. 

<i class="timecode">[00:48:38]</i> **Ben:** Gotcha. Okay! Cool. And so now we're just gonna use those, so…

<i class="timecode">[00:48:42]</i> **Mike:** Yep.

<i class="timecode">[00:48:43]</i> **Ben:** All of the different headings have their various…

<i class="timecode">[00:48:46]</i> **Mike:** Exactly.

<i class="timecode">[00:48:46]</i> **Ben:** …font sizes. Actually, here's:. Here's a question I've got. I'm just gonna go ahead and go through this and uncomment all of these, but…

So, for the purposes of today, we are applying font sizes directly to headings — like, the heading selectors themselves. I know of quite a few people who generally avoid, like, targeting headings directly because they're worried that, like, you know, content authors are going to use, like… like abuse that to have headings that are out of order and stuff like that because they just want to, like, show some big text.

<i class="timecode">[00:49:26]</i> **Mike:** Yeah.

<i class="timecode">[00:49:26]</i> **Ben:** Do you typically find yourself styling the tags directly, or do you prefer, typically, like, in a real world environment, to go through some, like, middleman API like classes for headings? 

<i class="timecode">[00:49:38]</i> **Mike:** Yep, I definitely use classes. If this was, like, a client project, I wouldn't… I would never style the text directly. I only do this for personal projects where I am just going classless. You can see, in a lot of my side projects, I just don't write any classes. I try to use semantic elements as much as possible and not use any classes. So just like in today's demo, I'm not using any classes here. So, for today's demo, that's fine, but in… in real projects, try not to do this. 

<i class="timecode">[00:50:20]</i> **Ben:** Yeah. Yeah, so now…

I'm trying to find a good example of…

Yeah, like, the "Choosing a Sentai." You know, like this is clearly, clearly smaller than the "Adaptation Process." Like, the hierarchy is now clearly visually conveyed again, which is excellent. 

<i class="timecode">[00:50:40]</i> **Mike:** Yeah. And then the next thing I would do is fine-tune the leading of those headings. As you can see, when the headings were wrapping into a second line, you were seeing a lot of spacing because the whole document was set in 1.35. But now, if I fine-tune it, then your multiline headings are gonna read better without so much spacing in between. 

<i class="timecode">[00:51:07]</i> **Ben:** Absolutely. Okay! Yeah, that's a huge improvement, okay. 

<i class="timecode">[00:51:12]</i> **Mike:** Yeah, so those are the refinements I would do to headings. A lot of people don't do that, and it is one of… one of my biggest pet peeves is, like, "Can you please refine… refine your headings?"

Yeah, so those are the things that you can do to headings.

<i class="timecode">[00:51:32]</i> **Ben:** Alright! Now, looks like we're gonna do some stuff with the page title here. 

<i class="timecode">[00:51:37]</i> **Mike:** Yeah!

<i class="timecode">[00:51:37]</i> **Ben:** Uppercase, add a slight crimson shadow to it. 

<i class="timecode">[00:51:42]</i> **Mike:** Yeah. This is just a little bit opinionated thing that I'm adding here just for this demo. I just wanna showcase, for the page heading, I want it to… a little bit different than all the headings of the document. Normally, I wouldn't set all-caps for that much text. I'm just doing it for this demo just to stand out a little bit. 

<i class="timecode">[00:52:09]</i> **Ben:** Yeah. And… I think… I feel like you and I have to be so careful when we're talking about capitalization, right? Because, like, it's one of those things where I don't wanna say never do all-caps, but it's one of those where it's like, oh, you gotta be very careful about how and when you do it.

<i class="timecode">[00:52:27]</i> **Mike:** Yep.

<i class="timecode">[00:52:27]</i> **Ben:** Now, something for the page title when it's, you know, a short phrase is probably fine. A few CTAs… maybe? But it does make it less readable for people who are visually impaired because now, like, everything is… like, the words are just blocks, right? 

<i class="timecode">[00:52:47]</i> **Mike:** Yep.

<i class="timecode">[00:52:47]</i> **Ben:** They don't have distinct shapes anymore. And also, even when you're using CSS for, like, all-caps, screenreaders and other assistive technologies will still receive the text in all-caps, and this can lead to sometimes the screenreader announcing your all-caps words as, like, initialisms, where it'll spell out every letter, which is also not an ideal experience. So this is the kind of thing where it's like, use very, very carefully, perhaps, and don't abuse it. 

<i class="timecode">[00:53:17]</i> **Mike:** Yep, exactly. This is just for today's demo — remember that. 

<i class="timecode">[00:53:23]</i> **Ben:** Absolutely.

<i class="timecode">[00:53:25]</i> **Mike:** Yeah, so I think we can uncomment the next few things and we can quickly go over those. So here, I am basically setting up the lead text. What that means is that first paragraph following the page title, that's the lead text. So I'm increasing the font size there a little bit so you can see a clear opening to the article.

And I'm gonna add a little bit of drop caps to that paragraph. So that's the next thing that you can uncomment, and you're gonna see a drop cap in that first paragraph. Yeah, as you can see, I'm using a lot of conditional CSS here. I normally don't do this. I try to use classes in a real project.

<i class="timecode">[00:54:12]</i> **Ben:** Yeah, I noticed very specifically that, you know, this is English only, right? You are…

<i class="timecode">[00:54:19]</i> **Mike:** Yeah.

<i class="timecode">[00:54:19]</i> **Ben:** …asserting that if this isn't… like, if this is Chinese, for instance, right? Like, you would not drop cap. I assume that drop caps just aren't really a convention in Chinese.

<i class="timecode">[00:54:31]</i> **Mike:** Yeah. Normally, we don't really use drop caps. You could use it. That's not to say… that's not to say never use it. But generally, you don't… like, Chinese people don't expect drop caps.

<i class="timecode">[00:54:44]</i> **Ben:** Mm.

<i class="timecode">[00:54:46]</i> **Mike:** Yep, so you have a drop cap here. Next, just a little fine-tuning on the superscripts. As you can see on… you see the 1, 2, 3 on the left here with the superscripts? It's very subtle. It is kind of throwing off the leading of that particular sentence. That sentence there, it has more spacing than the other sentences. So I'm resetting the line height of those superscripts there to make sure it doesn't mess up the leading, the line height, of the whole paragraph. And there you go — fixed!

<i class="timecode">[00:55:24]</i> **Ben:** Okay.

<i class="timecode">[00:55:26]</i> **Mike:** And here, now we are getting into a different font! Like I said, if you like what you see with Times New Roman, you really don't need to do anything more. But if you wanna change to a sans-serif font, the next best thing to use is the system UI font, which will call for San Francisco on Macs, and then I forgot what it is on Windows and Androids.

<i class="timecode">[00:55:52]</i> **Ben:** Segoe, right?

<i class="timecode">[00:55:53]</i> **Mike:** Yeah.

<i class="timecode">[00:55:53]</i> **Ben:** I think it's Segoe.

<i class="timecode">[00:55:55]</i> **Mike:** Yeah, yeah, yeah, yeah. I think it's that. They all look pretty good. So that's the next best thing to use if you wanna switch to a sans-serif font. And as you can see here, because San Francisco is a variable font, now I can actually play with the font weight of San Francisco. And one thing, one very subtle thing that I do when I'm using San Francisco is, I try to use 300 rather than the default 400. It does look a little better in dark mode, and… and it still looks fine in light mode. So I try to use 300 when I'm using San Francisco. 

<i class="timecode">[00:56:39]</i> **Ben:** I'm gonna try to see what this looks like in light mode, just 'cause it's been a while since we've done it, but I would say that still looks fine. It might be a little on the thinner end, but…

<i class="timecode">[00:56:48]</i> **Mike:** Yeah.

<i class="timecode">[00:56:49]</i> **Ben:** …for me personally, it's fine. 

<i class="timecode">[00:56:51]</i> **Mike:** Yeah, so if you think that's the case, you can, like, leave it at 400, but using the prefers-color-scheme: dark, set it to 300. Because looking at against white text… yeah, looking at white text against black backgroundd is a lot different than looking at black text against a white background. So you can, yeah, refine that with the media query to just do this in dark mode.

<i class="timecode">[00:57:22]</i> **Ben:** Do I need the "screen" part? I'm never sure. "prefers…" 

<i class="timecode">[00:57:27]</i> **Mike:** I don't write that, yeah. 

<i class="timecode">[00:57:31]</i> **Ben:** Okay. Is this it? I am basically gambling on…

<i class="timecode">[00:57:36]</i> **Mike:** I think you got it right. "prefers…"

<i class="timecode">[00:57:42]</i> **Ben:** Let's see.

<i class="timecode">[00:57:48]</i> **Mike:** I think so. I think that worked, yeah. 

<i class="timecode">[00:57:54]</i> **Ben:** I think we got it. Okay, cool. Yeah, because, like, the… when you're in… like, when you're in light mode, right? You do kind of need thicker text, 'cause otherwise…

<i class="timecode">[00:58:07]</i> **Mike:** Yeah.

<i class="timecode">[00:58:07]</i> **Ben:** I feel like no matter what, the light is going to… stand out with a little more acuity than the dark colors, you know?

<i class="timecode">[00:58:18]</i> **Mike:** Yeah.

<i class="timecode">[00:58:18]</i> **Ben:** And so when you have, like, light mode, the white background swallows up the text. When you have dark mode, the light text just kind of burns out of it, right? So it does make sense—

<i class="timecode">[00:58:30]</i> **Mike:** Yeah.

<i class="timecode">[00:58:30]</i> **Ben:** —to tweak the font weight depending on the… 

<i class="timecode">[00:58:35]</i> **Mike:** Yep. So that's… that's that. And now, I'm going through all the headings and trying to use 900. I love bold sans-serif headings. That's what I'm doing here, setting all the headings to 900 font weight. So as you can see, the headings are carrying a lot more weight now.

<i class="timecode">[00:58:58]</i> **Ben:** Absolutely.

<i class="timecode">[00:58:59]</i> **Mike:** And then this is a cool thing about… yeah! Cool thing about San Francisco, it actually comes with condensed and expanded. So in this case, I'm using condensed. You can also set that to expanded to get a more wider letters. But I love the condensed variant of the San Francisco, yeah. The reason I asked you to use Safari today is because this only works in Safari.

<i class="timecode">[00:59:30]</i> **Ben:** Ahh.

<i class="timecode">[00:59:31]</i> **Mike:** It doesn't work in anything else, so don't try to do this in a production website. But you can start to mess around with it. San Francisco is a really, really good font. 

<i class="timecode">[00:59:43]</i> **Ben:** Yeah. We have a question from the chat, actually, about the system fonts. Evan wants to know, "What happens when you hit a system font that's not variable and you srt a weight it doesn't have?" And he's asking because he uses Linux.

<i class="timecode">[00:59:59]</i> **Mike:** Yep. So when a number font weight value doesn't exist, it will try to get to the nearest weight that is defined by, like, bold, bolder. I think whatever's defined in CSS with the actual word. So if you're setting 300, it will just default back to 400 because nothing goes lower than 400 in the… in the old way of setting a weight. If you are writing 600, that will just default to 700 because there's… between 400 and 700, there's nothing in between. You can only do 500 and 600 with variable fonts, but with a regular font, there's nothing in between. It'll just go to the next available one, the closest available one.

Yeah. 

<i class="timecode">[01:00:54]</i> **Ben:** I gotta say, like, I know we're using system fonts here, and we haven't pulled in anything custom, but, like, already this page feels distinct and branded in a way.

<i class="timecode">[01:01:04]</i> **Mike:** Yeah.

<i class="timecode">[01:01:05]</i> **Ben:** You know? Like, this feels… nice! Like, I wanna call that out! Like, we're using system colors here. We haven't used any bespoke hex codes or anything like that. We haven't pulled in any bespoke fonts. We're just using what the browser already has available to it. This looks really good! 

<i class="timecode">[01:01:22]</i> **Mike:** Yeah, exactly. Yeah, good typography, you don't need to use custom fonts for good typography. If you have good typography, you have good typography.

And the next thing, we'll go back to the opening paragraph. Again, don't do this in a production site where you're doing so much capital letters, but I'm trying to showcase what San Francisco can do. And this is another thing it can do, the font-variant: small-caps. It comes with small caps. So in addition to condensed and expanded type, it comes with small caps as well. As you can see, this is not all-caps. All the… you can see in the sentences, they are written in caps, but the first letter is still bigger than the rest of the letters. So, this is called small caps.

<i class="timecode">[01:02:17]</i> **Ben:** Yeah! Yeah, this probably… like, like honestly I'm finding this, like, difficult to read at this point.

<i class="timecode">[01:02:24]</i> **Mike:** Yeah.

<i class="timecode">[01:02:24]</i> **Ben:** I think this is probably a bit too lengthy of copy to use small…

<i class="timecode">[01:02:30]</i> **Mike:** Yep.

<i class="timecode">[01:02:30]</i> **Ben:** …small caps, but very cool to…

<i class="timecode">[01:02:33]</i> **Mike:** Yep.

<i class="timecode">[01:02:33]</i> **Ben:** It looks great. 

<i class="timecode">[01:02:35]</i> **Mike:** Yeah, one… one thing that I would fine-tune, if you really insist on using small caps for, like, opening paragraphs, you can actually do the ::first-line CSS. I forgot what the… what the CSS property is. But you can do ::first-line. So just setting that first line in that first paragraph to use… to use small caps. Yeah. You can do a little research on your own and see…

Oh, did that work? No, it didn't work. I forgot what it was. I know it exists. 

<i class="timecode">[01:03:08]</i> **Ben:** Yeah, I'd have to look it up. It's been a while since I've done anything like that.

<i class="timecode">[01:03:12]</i> **Mike:** Yeah. And as you can see, like I said, when you're setting… using all-caps or small caps, you gotta increase the tracking, which is the letter spacing, the spacing between each letter. So I'm… here, I'm trying to add a little bit of spacing, a 0.1-character spacing. Just to make it a little easier to read with all-caps.

<i class="timecode">[01:03:35]</i> **Ben:** It's amazing just how much of a difference that makes.

<i class="timecode">[01:03:38]</i> **Mike:** Yeah!

<i class="timecode">[01:03:39]</i> **Ben:** Like, the two feel SO different. 

<i class="timecode">[01:03:41]</i> **Mike:** Yep.

<i class="timecode">[01:03:43]</i> **Ben:** Okay!

<i class="timecode">[01:03:45]</i> **Mike:** Yeah, exactly! That's typography for you. It's, like, tiny little details!

And next, because we changed the font, I am also gonna… like I said, each font has a different x-height. You have to update your line height because you just changed your font.

So for San Francisco, I find 1.45 much easier to work with, much easier to read. Just giving it a little bit more room to breathe. 

<i class="timecode">[01:04:15]</i> **Ben:** Alright — cool! So I see something that I'm very excited about next.

<i class="timecode">[01:04:21]</i> **Mike:** Yeah, so next, we're getting into the Chinese characters! So now you can actually, in the HTML, just comment out all of the English part of the article.

<i class="timecode">[01:04:36]</i> **Ben:** That's… a bit too far.

<i class="timecode">[01:04:39]</i> **Mike:** There we go. Yep, comment that out. And we are only gonna look at Chinese now. Now, like I said, Chinese has a different kind of typography setting. We don't wanna do all-caps. We don't… I mean, there's no all-caps in Chinese. There's also no… usually no drop caps. So we're gonna take care of a lot of little refinements here.

So the first thing I'm gonna set up is the type scale, because Chinese is kind of like monospace. You can see, each character is, like, a perfect square. If you use the same type scale, it's gonna… it's gonna look a little bit too big. So what I'm doing here is redefining that type scale.

Yeah, let's uncomment everything. I think this won't work in the preview because you have to actually inspect the preview and change the… change the language to Chinese to see it working. Yeah, let's uncomment everything and we'll see the difference when we change in the preview panel. 

<i class="timecode">[01:05:43]</i> **Ben:** You mean, like, uncomment all the CSS, right?

<i class="timecode">[01:05:48]</i> **Mike:** Yeah, yeah, yeah, uncomment all the CSS. 

<i class="timecode">[01:05:51]</i> **Ben:** Yeah. Okay, so here's…

Oh, wait, that is… that's not CSS, . 

<i class="timecode">[01:06:03]</i> **Mike:** Yeah, just the CSS part.

<i class="timecode">[01:06:06]</i> **Ben:** Okay, cool. That's everything, right?

<i class="timecode">[01:06:10]</i> **Mike:** Okay. So now, let's inspect the preview panel. And we're gonna change, on the HTML level, the "lang" attribute to Chinese. So you're gonna look into that `<iframe>`, and the `<html>` element of that `<iframe>`. Right there in the middle of, yeah. So change that to "zh-HANS." 

<i class="timecode">[01:06:40]</i> **Ben:** Uh, does the "HANS" need to be caps? 

<i class="timecode">[01:06:44]</i> **Mike:** No, this should be… yeah, either way should be fine. Okay. Now let's… let's just make the dev panel a little smaller. Oh, yeah, that works.

So what you notice is actually the text getting smaller, because the whole type scale has changed. And then the drop cap is gone. If you look at the list, I'm actually changing "decimal" to "cjk-ideographic," so that is actually using the Chinese numbers. So 1, 2, 3, 4, 5 is using the Chinese numbers, rather than the Arabic numbers. So that's a little bit there.

As you can see, the list indent, there's no hanging punctuation with Chinese text. So you see the list is actually just a regular list that is… the bullet is aligning with the text. This looks odd for Chinese because the bullet is also text. It's not a number anymore. It's text, so you don't… you don't need to hang.

<i class="timecode">[01:08:00]</i> **Ben:** Makes sense.

<i class="timecode">[01:08:02]</i> **Mike:** Yeah, and then… if we go down a little more, what else am I doing? Ah, okay. Here, I'm just redefining the font size to smaller, so instead of 100%, I'm doing 90%. Just to make the… like I said, the Chinese characters are all perfect squares. You want… you want to reduce the font size there to make it a little more legible. Otherwise, it just looks like the whole page is screaming at you.

<i class="timecode">[01:08:31]</i> **Ben:** Yeah, so if I hadn't done this… yeah. 

<i class="timecode">[01:08:35]</i> **Mike:** Yep, much bigger. 

<i class="timecode">[01:08:37]</i> **Ben:** See, I would've thought it would've been the other way around of, like, oh, you would need to make it bigger just because the, like, characters are all so dense. 

<i class="timecode">[01:08:46]</i> **Mike:** Yeah, if you look at any kind of Chinese website, they have a very, very condensed design. Like, they just jam all kinds of, like… jam the content together so much because everything's monospace. And people get used to that. Like, they read newspapers and they're fine with, like, very compact spacing, and you don't need to set very large text for Chinese.

And because the text is… because the characters are bigger, I'm also increasing the line height there to 1.6. So that way, we give it… again, think of reading Chinese as in reading all-caps. You need to give it more room to breathe. So "line-height: 1.6" here will take care of that. 

<i class="timecode">[01:09:35]</i> **Ben:** Yeah, and if I hadn't had that… yeah. that is just a wall. 

<i class="timecode">[01:09:40]</i> **Mike:** Tight, very tight.

<i class="brackets">[Mike laughs]</i>

<i class="timecode">[01:09:45]</i> **Ben:** Okay.

<i class="timecode">[01:09:45]</i> **Mike:** Yeah, the next thing—

<i class="timecode">[01:09:46]</i> **Ben:** I'm also noticing the text has—

<i class="timecode">[01:09:48]</i> **Mike:** Yeah.

<i class="timecode">[01:09:49]</i> **Ben:** —the text seems to have some characters in here like the double angle brackets, right? This is—

<i class="timecode">[01:09:54]</i> **Mike:** Yep!

<i class="timecode">[01:09:55]</i> **Ben:** —just by virtue of having used semantic markup, right? 

<i class="timecode">[01:09:59]</i> **Mike:** Exactly — I'm using the `<q>` element here, which is… which stands for "quote." So if you don't wanna type quotes, you just use the `<q>` element. That will change your quotes based on language.

<i class="timecode">[01:10:14]</i> **Ben:** Nice.

<i class="timecode">[01:10:16]</i> **Mike:** Yeah. And then the next thing you can see, I'm also changing the gutter. Why am I doing that? Like, so you can see the paragraph indent for each… for Chinese is generally set to two characters, and that's roughly about 2em. I can't use the character unit here because character stands for the width of the number 0, and that does not equal the actual character of Chinese. So I have to change to ems here. So 2em is about… like I said, Chinese character is perfect square…

<i class="timecode">[01:10:52]</i> **Ben:** Oh, yeah!

<i class="timecode">[01:10:53]</i> **Mike:** So you use 2em here. It means two characters. 

<i class="timecode">[01:10:57]</i> **Ben:** Yeah, because the… like, the em unit is the width of the lowercase "m," and it's explicitly defined that way because the lowercase "m" is going to consistently be, like, the full width. Okay, that makes sense.

<i class="timecode">[01:11:11]</i> **Mike:** Yeah.

<i class="timecode">[01:11:11]</i> **Ben:** That's a really cool conversion there, a really good flip there. Whereas English has variable-length characters — you could have…

<i class="timecode">[01:11:20]</i> **Mike:** Yep.

<i class="timecode">[01:11:21]</i> **Ben:** …you know, things that are as wide as "m" or as narrow as a lowercase "l" or "i" or something like that.

<i class="timecode">[01:11:28]</i> **Mike:** Yeah.

<i class="timecode">[01:11:29]</i> **Ben:** Yeah. Chinese, everything seems to be a square, so yeah, you would—

<i class="timecode">[01:11:33]</i> **Mike:** Yep, exactly.

<i class="timecode">[01:11:33]</i> **Ben:** —want everything to be consistently around the square width. Okay, very cool!

<i class="timecode">[01:11:37]</i> **Mike:** Yeah!

<i class="timecode">[01:11:37]</i> **Ben:** Very cool.

<i class="brackets">[Mike chuckles]</i>

<i class="timecode">[01:11:40]</i> **Mike:** Yeah, and the last thing that I did was basically making that image fluid so we don't end up with a image that's breaking the layout of your page. So I'm setting the max inline size to 100%, so when you squeeze the browser width, it's gonna adapt to 100% of the container there.

Yeah, there you go.

<i class="timecode">[01:12:15]</i> **Ben:** Very cool!

<i class="timecode">[01:12:17]</i> **Mike:** Yeah, so that's it! That's it for today's demo. Like, we went through and… and remember, we did not use any custom fonts today. All we did was system fonts and system colors except for that crimson color. Like, you get so much out of whatever you can get that's already on your system. So yeah, just think about all the possibilities with system fonts and system colors before you go into custom fonts, which cause more data to load. It's worse for the environment if you use custom fonts. So yeah, take that into consideration in your next project. 

<i class="timecode">[01:12:55]</i> **Ben:** And, like, you know, even just the notion of, like, you know, the system fonts are going to be far, far more likely than whatever font it is you've downloaded from the internet to have expanded characters, right? So if your site needs to adjust into supporting Chinese or Arabic or Hebrew or something like that, right?

<i class="timecode">[01:13:14]</i> **Mike:** Yeah.

<i class="timecode">[01:13:14]</i> **Ben:** Like, your system fonts are more likely to have those character sets handled gracefully. Characters that fit the aesthetic out of the box.

<i class="timecode">[01:13:29]</i> **Mike:** Yeah. That's it!

<i class="timecode">[01:13:31]</i> **Ben:** Alright! So Mike, where should people go if they're interested in learning more about some of these typographic techniques?

<i class="timecode">[01:13:42]</i> **Mike:** Yeah, there's… let me see. Other than my website — so, you can come to my website for a few things. The Typography Manual that I mentioned. The MCSS that I recently released, which makes use of pretty much what you're seeing today, so setting typography using Georgia system font — another system font — and Verdana, which is designed by the famous typographer Matthew Carter. That's why I named this "MCSS." So, yeah, so you can check this out if you have any kind of, like, minimal website you wanna make. You can just use this… use this little framework, hook it up to your static site generator, write your blog, or whatever. Like, this thing will be easy to use and all the typography would be… would be all set here. You don't have to worry about setting up your type scale. You don't have to worry about fine-tuning your typography. It's all set in here with the fonts Georgia and Verdana. 

<i class="timecode">[01:14:51]</i> **Ben:** Great. And Mike, where can people find you if they wanna learn more from you? I've shared the link to your blog. Anywhere else you'd like me to send people? 

<i class="timecode">[01:15:03]</i> **Mike:** You can find me on Twitter and Mastodon. Those are really the two areas, two platforms that I post regularly, so yeah. Probably more Mastodon. Twitter is not… <i class="brackets">[chuckles]</i> it's not great. So Mastodon, just find me. My handle is the same across all the… all the social media platforms. It's "mikemai," the number 2, and then "awesome." It's a silly name I stick to since high school, I think high school or college. Like, it's a silly name. I didn't… I didn't wanna change it. Just, that's the name everywhere. 

<i class="timecode">[01:15:41]</i> **Ben:** Nice. Alright. Well, it's been wonderful having you on. It's been wonderful learning from you. And so yeah, thank you so much for your time. And chat, thank you so much for being here as well. Thank you for bearing with me as I disappeared into the ether for half a… not half a year, but a few months. It's good to be back in the chair. I should be on next week, but I'm still figuring out what I'm gonna do. I may do sort of an AMA and casual chat type thing. But yeah, Some Antics is back in some variety for some time. So, yeah! Thank y'all for being here and I hope you have a—

<i class="timecode">[01:16:24]</i> **Mike:** Thank you!

<i class="timecode">[01:16:25]</i> **Ben:** —great rest of your day. Bye, y'all!

<i class="timecode">[01:16:27]</i> **Mike:** Yeah! Thank you. Bye!