<i class="timecode">[00:00:02]</i> **Ben:** Howdy, howdy, y'all! Welcome back to Some Antics. Happy Tuesday! How's everyone doing? Today, I am joined by Eric Bailey. Eric, hello! Welcome to the stream! 

<i class="timecode">[00:00:12]</i> **Eric:** Hey! How's it going? Thanks for having me, Ben. 

<i class="timecode">[00:00:15]</i> **Ben:** I'm so stoked to have you on. For folks who haven't gotten a chance to see you and your work yet, would you care to give yourself an introduction, kind of let folks know who you are?

<i class="timecode">[00:00:25]</i> **Eric:** Sure! I am loud on the internet, but by day I work at a company called Ad Hoc, and I work on design systems there which is basically a way to codify user interface components for designers and developers to help promote consistency and accessibility. When I am not at work, I like to write and read a lot about inclusive design and accessibility. I also help maintain The A11Y Project, which is a open source website to try to help people learn about digital accessibility! Uh… yeah! I live in the northern United States. My pronouns are he/him. And… just generally happy to be here! 

<i class="timecode">[00:01:13]</i> **Ben:** So thrilled to have you on. And I'm getting a link for The A11Y Project into the chat right now. This is a lovely resource. And by the way, I love the work that Tatiana did on the redesign. I know it's been out for a while, but they did such a good job.

<i class="timecode">[00:01:28]</i> **Eric:** Yeah, Tatiana's… we were very fortunate to have her do this work. And one of the goals for it was to kind of demonstrate that accessible design can be beautiful as well as, you know, exciting and dynamic, and in my opinion, she knocked it out of the park. 

<i class="timecode">[00:01:48]</i> **Ben:** Absolutely.

Alright! Yeah, so today the topic at hand is high contrast mode. I put out a tweet a couple of weeks ago because I… like, just, I guess, to lay the groundwork for my own story here, like, I've been doing web dev for a couple of years professionally and specifically accessibility work for a couple of years now. And just a couple weeks ago, I got my first, like, story that had to deal with, like, high contrast mode, and I realized I was at a complete loss for how to get started and it was, like, a huge gap in my knowledge. So I put a tweet out kind of as a result of this like, "Hey, does anyone know a thing or two about high contrast mode that would like to teach me?" And you reacted, like, within minutes.

<i class="brackets">[Eric chuckles]</i>

Which, kudos! So, let's talk about that. What IS high contrast mode? 

<i class="timecode">[00:02:46]</i> **Eric:** Yeah! Yeah, I totally do not have a watch word on Twitter for this. It just happened to be happenstance.

So, high contrast mode is a form of assistive technology the same way a screenreader is, the same way voice control software is, in that it affects all content on a device, including a browser and whatever content the browser currently happens to be showing. And it is a way for, you know, the trick is a little bit in the name, where it grants the ability to adjust the colors to have a higher contrast ratio so it is easier for the person using the device to perceive. It's also sort of a very personal form of assistive technology. I think all forms of assistive technology are personal, but this one allows somebody to use a high degree of customization of these color values to get what they want. In addition, it typically represents kind of the last kind of thing you can do for a lot of circumstances where your vision is impaired before you go blind. So it's a very vital piece of assistive technology, and it's a little bit of a hidden secret on the web platform in particular, so hopefully we can shed some light on it! 

<i class="timecode">[00:04:11]</i> **Ben:** Yeah! So, I'm thrilled to do that. So, you mentioned that it was, you know, people are picking, like, higher contrast colors. Is it always higher contrast colors? 

<i class="timecode">[00:04:22]</i> **Eric:** That's a really… I learned this recently myself. So the name is a bit of a trick because… you know, one of the cool things about putting something out there that is very customizable is people will make it work for whatever their needs are, and part of that is some people actually deliberately use low contrast themes. They create muted color tones. And this is really interesting because for them it's not bumping up the contrast until it's perceivable. It's being used to prevent things like tension headaches or migraines because the overall effect is a lot calmer. So that's really cool. I think it's a really kind of powerful feature and a kind of an unintended consequence of kind of when Microsoft first rolled out this feature, and then I think that's also a little bit of a segue into why it's now called "forced colors" and not "high contrast mode." 

<i class="timecode">[00:05:23]</i> **Ben:** Sure! Yeah, and from what little I know of this, it seems currently to be mainly a Windows-only thing for now, right? 

<i class="timecode">[00:05:36]</i> **Eric:** Yeah. It's a bit of a mess, to be honest. I think we might get to that a little bit. But the version that I'm talking about, which is completely covering the entire operating system as well as being able to customize colors, is currently Windows-only. And put a little pin in that because we'll come back to it, I think.

<i class="timecode">[00:06:01]</i> **Ben:** Good deal! Yeah, so in that case, then, how do we get started? Like… actually, let me start sharing my screen here. So anyone looking at my screen could see, like, I'm operating on a Mac right now. So I don't natively have, really, access to high contrast mode to be able to test and validate for myself, so in that case, how might I get started? 

<i class="timecode">[00:06:27]</i> **Eric:** Yeah! There's a few ways. So one way is… and I'll kind of take you up… I'll build you up to kind of my preferred approach. So first, you can go out and get a Windows device if you have the money. Not all of us have the money. So that's, you know… take it or leave it, it's something you can do.

You can also emulate Windows using… Microsoft puts out free virtual machines, and you can use a service like VirtualBox to test on your Mac. I don't like using that because it's very system-intensive and it tends to slow everything down. It also takes a lot of storage space to have a VM on your Mac, and Node modules are inescapable, so it's like, you're going to be competing if you do any kind of dev work.

You can also emulate the forced color mode media query using… Microsoft Edge just rolled out this ability, as well as the browser Polypane which I like to use for my web development work because it lets me look at the design in both a mobile and desktop context at the same time. The wrinkle with Edge and Polypane is that they only show forced color light mode or forced color dark mode, and they don't allow you to alter the system colors that map to a high contrast mode theme. And that's important because one of the things that I think is important to do is change your themes periodically just to not get comfortable with, you know, forced color mode, high contrast mode looking just one way. It could look potentially infinite different kinds of ways.

Which leads me to my preferred solution, which is Assistiv Labs which is a Windows emulation service that works in your browser. It is made, I believe, by a gentleman called Weston Thayer. And Assistiv Labs is purpose-built for assistive technology testing and it runs a VM in the browser, so it's sort of like watching Netflix in a browser tab, only instead of watching Netflix, you're using a Windows OS.

So here on the screen right now, we have the Windows… or, sorry, we have the dashboard for Assistiv Labs. And there's dropdown toggles for picking an assistive technology version, the version of that assistive technology, the browser, and the browser version. There's also some niceties for mapping Caps Lock to different assistive technology hotkeys.

And then it also has an AssistivTunnel feature, and this is a lot like ngrok if you've ever used it. If you haven't used it, it's a way to share basically an IP address. So you can make your edits on your Windows laptop. You can look at it on your Windows emulated OS and the changes you make there will kind of propagate. And I use that in my work a lot because while I do have a Windows device, a browser tab is way more convenient and I can't be bothered a lot of the time to reach across the table!

<i class="timecode">[00:09:46]</i> **Ben:** Absolutely.

Alright! And yeah, so if you pop open the assistive technology dropdown, I notice that there's a "Windows High Contrast" option. Probably the one to go with, right?

<i class="timecode">[00:10:03]</i> **Eric:** Yeah, let's do it!

<i class="timecode">[00:10:04]</i> **Ben:** Awesome. And then there's just 21H1. Looks like just Edge. And just 99. Okay, I don't really have a whole lot in the way of choices there, it turns out. 

<i class="timecode">[00:10:19]</i> **Eric:** Yeah. I mean, the good news is the high contrast mode toggle is relatively static. It hasn't done a lot of changing, so you don't really have to worry super too much about browser versions. Again, a little caveat there. But, you know, Edge is totally… the latest version of Edge is totally fine. Latest version of Windows is totally fine.

<i class="timecode">[00:10:42]</i> **Ben:** There's a window over here that's like… ah, there we go. Okay. Sorry. Streaming setups are wonky.

Okay, so… and then are we…? I guess we're not tunneling either?

<i class="timecode">[00:10:57]</i> **Eric:** Nah.

<i class="timecode">[00:10:57]</i> **Ben:** And we probably don't need to remap any keys or anything like that because we're not doing anything with, like, a screenreader today, I don't think. So…

<i class="timecode">[00:11:08]</i> **Eric:** Yeah.

<i class="timecode">[00:11:09]</i> **Ben:** Go ahead and just start testing?

<i class="timecode">[00:11:11]</i> **Eric:** Let's go for it.

<i class="timecode">[00:11:13]</i> **Ben:** adrianengine wants to know: "So it is like…"

I think Adrian's referring to Assistiv Labs here. "So it is like a BrowserStack for accessibility testing?" 

<i class="timecode">[00:11:23]</i> **Eric:** Yeah! Yeah, that's a really good way to put it. I have mixed thoughts about BrowserStack, so I will kind of leave it at that, but this is very purpose-built and dedicated, and as you can see, it boots up really quickly. 

<i class="timecode">[00:11:40]</i> **Ben:** Mmm, yeah. That was really fast. Do I need it to see text and images, or can I go ahead and block that? 

<i class="timecode">[00:11:51]</i> **Eric:** Yeah, you can block it. That's just, like, a shared clipboard between the Mac and the VM.

<i class="timecode">[00:11:56]</i> **Ben:** Ah. That's pretty cool.

Alright, and then we'll… Shift-Option-Backtick, it looks like. Alright. So. Alright, and then…

So this is emulating, in Windows, this is like I've gone into my, like, preferences here and… actually, it's not emulating, is it? It's like, this is actually a VM? 

<i class="timecode">[00:12:21]</i> **Eric:** This is the real deal.

That's a real fake copy with those.

<i class="timecode">[00:12:27]</i> **Ben:** Alright! And if I turn this on, everything updates. All my colors have updated. It seems to have gone with a dark theme, but there there's other themes built into Windows as well.

<i class="timecode">[00:12:39]</i> **Eric:** Yep. Yeah, it ships with four themes: High Contrast 1, 2, White, and Black.

<i class="timecode">[00:12:50]</i> **Ben:** Mm.

<i class="timecode">[00:12:50]</i> **Eric:** And this kind of gets into how, in a forced-color context, anything can be any color. So that kind of speaks to why I prefer to kind of change them up, just because of this very reason.

And if you can't see the screen, one thing I do want to point out is there are 1, 2, 3, 4, 5, 6 kind of chunks of content, and each one has a corresponding color. And those colors map to the operating system. For example, the selected text background color and foreground color… right now, we're on the high contrast preference tab in the settings on Windows OS, and it's using those colors. It's using yellow for the regular, static, inert text of, like, "Select a colored rectangle to customize," blah, blah, blah. So this is really deep support that ties into how the operating system is built, and I think that's pretty cool! 

<i class="timecode">[00:13:53]</i> **Ben:** Absolutely! Yeah, and EVERYTHING has changed as a result of this. Like, if I open up the Start menu… it might not open anything. We'll see. But, like, everything is following these colors that have been selected by the given theme. If I pick a different theme, we get different colors popping up. I think there's a way to, like, create your own theme. Or I guess you could just go in and change colors in here. 

<i class="timecode">[00:14:27]</i> **Eric:** Yep. Yep.

<i class="timecode">[00:14:28]</i> **Ben:** Very cool.

<i class="timecode">[00:14:28]</i> **Eric:** So, yeah, for each one of these little swatch pallets, you can click on it and it'll bring up a color picker and you can tweak stuff until it looks nice for you. Again, both these colors can be anything and they don't necessarily have to be high contrast. So, you know, again, just something to keep in mind.

The other thing that, like, I kind of want to stress here is this might look like the ugliest thing you've ever seen, but that's okay. <i class="brackets">[chuckles]</i> You know, I'm a designer by trade, so I'm kind of used to people with very strong opinions about how stuff should look, but I do want to point out that this is usable for somebody and it may not be what you aesthetically consider to be good-looking, but it's functional, and that's the really important bit here. So, like, to be comfortable with that kind of change with your product is a pretty, like, brave — in my opinion — position to take, because it's all about letting go of control to let your end users have agency. And, you know, a lot of assistive technology is built on that kind of philosophy, but I think forced colors mode really exemplifies it. 

<i class="timecode">[00:15:49]</i> **Ben:** Alright! Absolutely.

So, I would like to see some sites with this, so I think I need to just go ahead and hit Apply. Ooh. I see. Do "Some Antics Theme," perhaps. And I guess it's already applied. And I see I've got, like, Edge here, so I could go to any website. Heck, let's… you know what? I'll put A11Y Project in.

<i class="timecode">[00:16:18]</i> **Eric:** Oh, yeah! Uh-oh!

<i class="timecode">[00:16:23]</i> **Ben:** Yeah.

<i class="timecode">[00:16:25]</i> **Eric:** There we go!

<i class="timecode">[00:16:25]</i> **Ben:** We can see how this… and I've actually got, you know, the two tabs up, so we can do some comparison here. But we can see how, like, there's clearly been some changes going on here. 

<i class="timecode">[00:16:37]</i> **Eric:** Mm-hmm.

<i class="timecode">[00:16:38]</i> **Ben:** You know, it's based on the same design, but a lot of the colors have been replaced. I think it looks like, you know, backgrounds have been changed and stuff like that. What kinds of things can change as a result of forced colors mode? 

<i class="timecode">[00:16:57]</i> **Eric:** Yeah, that's a really good question. So, the way it works under the hood when you have… like, when you're using, like, Windows software that isn't web content, you use kind of specific chunks of, like, OS user UI kind of code that says, like, "I'm a switch toggle," "I'm a button," you know, "I'm text that describes something." And the same way that that's built in to the operating system, it's also built into the browser. So, forced color mode, Windows High Contrast Mode maps to semantic HTML, which is very cool if you're in the accessibility space, because you're already kind of doing this. So, in the theme, you know, button foreground color and background color works for operating system buttons, so like the "OK" on a save confirm dialog. It also maps to the `<button>` element itself.

<i class="timecode">[00:18:02]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:18:03]</i> **Eric:** Headings will inherit text. Links will inherit, like anchor links.

<i class="timecode">[00:18:08]</i> **Ben:** Yeah!

<i class="timecode">[00:18:09]</i> **Eric:** Disabled… oh yeah, sorry. 

<i class="timecode">[00:18:11]</i> **Ben:** Yeah, like, just as a concrete example, like, hyperlinks are defined as yellow here, and when I go to — get my tabs and windows straight — when I go here, like, this hyperlink right here is yellow. Yep. 

<i class="timecode">[00:18:26]</i> **Eric:** There's also kind of an, in my opinion, unintended side effect of this, too, where we use different link colors on The A11Y Project — with a lot of restraint — but here, it makes the blanket rule that all links are now yellow provided they've been semantically coded, and that helps to kind of enforce visual consistency as well. And that's very helpful if you're in a very, like, highly low-vision kind of context, because you don't have to do extra guesswork to be like, "Is this or not? It doesn't have an underline, so I don't know." It's just like, "This is yellow. It's a link. End of discussion." 

<i class="timecode">[00:19:07]</i> **Ben:** Yeah. And I'll, just to have another site up — apologies for just suddenly putting you under the bus. That's not cool of me. But I'll put my own site under the wire as it were. So, for folks who haven't seen, what my site looks like when you don't have forced colors mode on or you haven't overridden it with custom user stylesheets, this is what my site looks like. There's a lot of, like, purple over here. I've got some card treatment. Stuff like that. And when I come back here, a lot of that stuff is gone! 

<i class="timecode">[00:19:48]</i> **Eric:** Yeah. So, I love your site design by the way.

<i class="timecode">[00:19:51]</i> **Ben:** Thank you!

<i class="timecode">[00:19:51]</i> **Eric:** It's just aesthetically, you know, chef's kiss.

But a thing I'd like to point out here. So, forced colors mode does not care about your aesthetic sensibilities, remember? So one thing it does that is very worth pointing out is it will throw out decorative backgrounds. So your site in non-forced-color mode has that lovely purple vector effect. I don't know the name for it. But here in forced colors mode, it is decided the ratio between text and the background is the important thing here, because that's the most legible, and consequently it throws it out.

<i class="timecode">[00:20:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:20:30]</i> **Eric:** And that's fine!

<i class="timecode">[00:20:31]</i> **Ben:** Oh yeah!

<i class="timecode">[00:20:32]</i> **Eric:** You're still communicating the branding of your site and your personality through your writing, through your font choices, through your overall layout. Like, in my opinion, that's the strength of, like, somebody who is good at their craft, which is you don't rely on one single kind of aesthetic hook to communicate what you're trying to get across.

<i class="timecode">[00:20:54]</i> **Ben:** Awesome.

Yeah, and so in that case then… and maybe my my website is a bit of a poor choice, because I've gone in and, like, you know, changed things. Like I've I had to go in and add the borders to make the hit area a little clearer. But yeah in general, I guess…

Wow, I need to take a step back. Where would you like to take this? Now that we've kind of seen how high contrast mode can impact the site and change the appearance, where do you want to go from here? 

<i class="timecode">[00:21:30]</i> **Eric:** Yeah! You know, when we were planning this, you'd floated looking at Wikipedia potentially, and…

<i class="timecode">[00:21:36]</i> **Ben:** Okay!

<i class="timecode">[00:21:37]</i> **Eric:** I think maybe we can suss out maybe a bug with Wikipedia and then, you know, talk about kind of the options that we have. So… what I'm thinking is, like, support is complicated, so this might be an easier way to talk about it. 

<i class="timecode">[00:21:52]</i> **Ben:** Mm-hmm. Alright.

Already I notice that there is a big chonky border around this that I like.

<i class="brackets">[Eric chuckles]</i>

<i class="timecode">[00:22:02]</i> **Eric:** Yeah, that's interesting!

<i class="timecode">[00:22:04]</i> **Ben:** Very fun. And then if I pull up an article like the one on web accessibility here…

One thing I notice is that the Wikipedia logo doesn't actually show the word "Wikipedia" in this particular mode!

<i class="timecode">[00:22:22]</i> **Eric:** Yep, yep. And, you know… I think it is also if there's one takeaway you get from this session is, like, you know, I take a pretty forgiving approach here where, like, forced-color mode is very buried, very obscure. You usually have to be an accessibility wonk to even know it exists, much less how it works. So now that you kind of know it's a thing, like, you know, just take a look at kind of the stuff you work on and see if there's any, like, egregious gaps in support, because it's relatively straightforward to tweak this stuff. It's more just learning that it exists in the first place is kind of, in my opinion, like, the tricky bit.

<i class="timecode">[00:23:05]</i> **Ben:** Absolutely.

I want to see… I think the assistive technology article has, like, images and stuff like that. So, images can come through — that makes sense — but not always, right? 

<i class="timecode">[00:23:23]</i> **Eric:** Yup. If it's a background image, which sometimes people use, like, when they have a CMS and they don't know — sorry, a content management system — and they don't know the size of the image a user may import, so that'll get thrown away. You can disable forced color mode effects on stuff, so there is a specific kind of declaration you can have. And that's a circumstance where you might want to use that. So you say… basically, you tell the browser and the operating system, "Please ignore this and retain its treatment." Again, you want to use that for content where there's an intentional decision and you don't want to use it for aesthetics. So like, what is good? Showing a picture that communicates something, so like an avatar or an uploaded photo of something in a gallery. What is bad is "I really like the color pink, so I think that should be present in our branding."

<i class="timecode">[00:24:25]</i> **Ben:** Makes sense!

Alright! And then, so we do have the power within our own sites to be able to tweak and curate forced colors mode. Like, how would we go about doing that? Like, what does that actually look like in practice?

<i class="timecode">[00:24:43]</i> **Eric:** Sure! So, it's a visual thing, so you can use CSS! Surprise!

There are two media queries that can target both Windows High Contrast Mode and forced contrast mode. And I'm gonna paste a link in the chat for a Smashing Magazine article I wrote about this, because I think it'll be helpful to have a talking point about it. You think I would've bookmarked this ahead of time. Here we go!

Zoom chat.

<i class="timecode">[00:25:24]</i> **Ben:** There we go!

<i class="timecode">[00:25:29]</i> **Eric:** Yep!

<i class="timecode">[00:25:29]</i> **Ben:** Pop that in the Twitch chat. And then… pull it up here. 

<i class="timecode">[00:25:36]</i> **Eric:** What a good Twitch host. That would've never occurred to me!

<i class="timecode">[00:25:41]</i> **Ben:** It's a whole thing. What I've really enjoyed is guesting on other people's streams and then just, like, preempting the whole, like, having the host share the thing and I'm just like, "Oh, you know what? I'LL go ahead and drop it in the chat so that people have it." It's very fun.

So this is something that you wrote specifically about implementing high contrast, forced colors. 

<i class="timecode">[00:26:08]</i> **Eric:** Exactly. And this is through the hook of CSS custom properties. We can get to that in a bit. But if you scroll down a little bit, there is a section on support. And this is a kind of an important preamble before we get into this.

So if we go to write these media queries, there is Windows High Contrast Mode, which only Internet Explorer knows about. So it doesn't work in Chrome, it doesn't work in Firefox, it doesn't work in Safari. Broadly speaking, under the hood, they do have some concessions for it, but for the purposes of this conversation and, like, functionally usable, they don't support it. Edge right now is the only browser right now that fully supports forced color mode properties, by which I mean only on Windows where you can look at different colored themes. The cool part is that the forced color mode media query is cross-browser now, so we no longer have to use a vendor prefix for Windows High Contrast Mode. We now use forced colors mode. So this is to say that only IE and Edge will ever support Windows High Contrast Mode queries, but going forward, the new standard is forced contrast mode, and any browser that participates in web standards will honor it either soon or already does, which is really cool!

The other thing that I kind of like to mention here is IE11 might be dead by way of Microsoft discontinuing support, but the map is not the territory. And, you know, particularly through the lens of disability, people are highly reluctant to upgrade technology if they don't know the consequences of it. They may not have the money to be able to afford a new device. On top of that, like, some people are just locked out. Like, at your job, if you're using IE11, because somebody wrote an intranet app, you know, in 2004 and you've been using it ever since, and it's mission-critical, and no way in heck are we gonna update. Like, those circumstances happen and there's people at the end of it, and it's important to remember that.

And so, you know, for my day job, we are doing some forced color mode work, and because of that, we take an IE-support-first approach mentality because we work on some government services that deal with healthcare! And, you know, survivor bias is really real. If somebody uses IE to get healthcare and they have High Contrast Mode activated, like, that's fine, that's great, and I'm happy to help serve them in that way, whereas they might not have Edge. Fortunately, Edge is backwards-compatible, so anything you write for High Contrast Mode is also Edge-compatible. But it is a technical consideration and I think it's an important one. 

<i class="timecode">[00:29:39]</i> **Ben:** Absolutely. Yeah! Alright! 

<i class="timecode">[00:29:47]</i> **Eric:** So all that being said, <i class="brackets">[chuckles]</i> if you do want to write a media query, I'm gonna paste two of them in the chat, and then we can kind of talk about the keywords.

<i class="timecode">[00:30:00]</i> **Ben:** Yeah!

<i class="timecode">[00:30:00]</i> **Eric:** Does that sound…?

<i class="timecode">[00:30:01]</i> **Ben:** I'll pull up… I actually did find a previous version of my site. I'll go ahead and just pull up the editor for that so we have a place to put this.

<i class="timecode">[00:30:09]</i> **Eric:** Great.

<i class="timecode">[00:30:26]</i> **Ben:** Also, something in my system is chugging. My computer's chugging today.

<i class="brackets">[Eric chuckles]</i>

Some streams, it decides to chug, and some streams, it's just totally fine. Who can tell what the factor is there? 

<i class="timecode">[00:30:43]</i> **Eric:** Yeah, the internet gods are grumbly today. 

<i class="timecode">[00:30:45]</i> **Ben:** Mm. Like, this is my glorious editor for today.

<i class="brackets">[Eric laughs]</i>

Not a good sign.

Yeah, so I guess, in that case, what I'm going to do is put the Zoom chat up on the screen so we can see the two media queries while that comes up. So there's two I see here. Actually, there's three. There's "@media screen and (-ms-high-contrast: active)," and then "@media screen and (forced-colors: active)." But this first one here, this is, you were saying, the vendor prefix for the legacy high contrast mode? 

<i class="timecode">[00:31:26]</i> **Eric:** Exactly. The "-ms" is Microsoft's vendor prefix, and that targets any high contrast mode theme. There are two other companion media queries that only target black and white themes, but those are kind of way too purpose-built and specific in my opinion, so I don't think they're worth considering.

<i class="timecode">[00:31:49]</i> **Ben:** Pop open a… global Sass file that I've got here. We'll just start… typing some of these things out!

<i class="timecode">[00:32:00]</i> **Eric:** Yeah! Love your editor theme, by the way. 

<i class="timecode">[00:32:03]</i> **Ben:** Thank you! This is… it's called Night Mind. It's by Brent Morton, who's sometimes in the chat. I went with it cause it's, like, a higher contrast theme. Doesn't look, like, too washed out on stream. So… it's a good one! I actually have a chat command that'll spit out the theme.

<i class="timecode">[00:32:28]</i> **Eric:** Oh, that's amazing!

<i class="brackets">[Eric laughs]</i>

<i class="timecode">[00:32:29]</i> **Ben:** Yeah, god, once you start getting, like, into streaming and you start, like, tweaking, like, chat commands and stuff like that, so good. Okay.

<i class="timecode">[00:32:36]</i> **Eric:** Yep.

<i class="timecode">[00:32:36]</i> **Ben:** So, yeah. And highcontrast. Div? Ooh. If I can spell "active." If I can ACTUALLY spell "active." What has happened here? Oh. Really? VS Code, are you okay?? What IS that? Why would it…? Okay.

<i class="timecode">[00:33:06]</i> **Eric:** Oh, yeah. Wow.

<i class="timecode">[00:33:07]</i> **Ben:** Gosh! I've not seen that before! Okay. Wow! Okay, there it goes. 

<i class="timecode">[00:33:19]</i> **Eric:** Yeah.

<i class="timecode">[00:33:19]</i> **Ben:** Wow!!!

<i class="timecode">[00:33:19]</i> **Eric:** The joys of live coding!

<i class="timecode">[00:33:21]</i> **Ben:** Yeah! No kidding! Okay. So then there was media screen and forced-colors: active.

<i class="timecode">[00:33:32]</i> **Eric:** "forced-colors," yep!

<i class="timecode">[00:33:36]</i> **Ben:** And finally, there was one that combined both of them.

<i class="timecode">[00:33:41]</i> **Eric:** Mm-hmm!

<i class="timecode">[00:33:42]</i> **Ben:** We'll get that. And this.

Alright, there we go. So these were the three media queries that you had given me.

Hey, Brent IS in the chat! Hey, Brent. Good to see you. 

<i class="timecode">[00:33:59]</i> **Eric:** Yeah, and just one little nitpick here – I apologize.

<i class="timecode">[00:34:02]</i> **Ben:** Yeah!

<i class="timecode">[00:34:02]</i> **Eric:** On line 41 with the "and," you'll want to use a comma instead of "and." 

<i class="timecode">[00:34:09]</i> **Ben:** Oh! Okay. So — ahh, okay. 

<i class="timecode">[00:34:15]</i> **Eric:** Yeah. And the reason for this is the previous selector you wrote would say you need both Microsoft Windows High Contrast Mode active as well as forced colors mode active, which…

<i class="timecode">[00:34:25]</i> **Ben:** Ohhh.

<i class="timecode">[00:34:25]</i> **Eric:** …I don't think technically can happen. But this is saying either one of these is active.

<i class="timecode">[00:34:31]</i> **Ben:** Gotcha. Okay.

Okay, so… yeah! Alright! And then what goes into these queries? Like, do I just write CSS as normal, or…? 

<i class="timecode">[00:34:44]</i> **Eric:** Yeah, sort of! So, all the CSS properties that are available to us in non-forced colors mode are available to us in forced colors mode. We can honestly… we could realistically probably just use "forced-colors: active" — that query — just to kind of keep things streamlined, and remember Edge has backwards-compatible support. 

<i class="timecode">[00:35:11]</i> **Ben:** Makes sense! Alright, so I'm in my media query. 

<i class="timecode">[00:35:15]</i> **Eric:** And so, let's change the color of something. So maybe our `<h2>`s? 

<i class="timecode">[00:35:22]</i> **Ben:** Yeah.

Alright. And then I would do "color." And would I just specify whatever color I want in here?

<i class="timecode">[00:35:34]</i> **Eric:** So, yes and no, and this is where the real magic happens. So you can type "color: red" and, you know, CSS will honor that, and forced colors mode will honor that. That's a perfectly valid declaration. The problem is, what if that color red, you can't see it?

<i class="timecode">[00:35:53]</i> **Ben:** Mm.

<i class="timecode">[00:35:54]</i> **Eric:** So, what you can do instead with forced color mode is actually tie in to that operating system mapping stuff that we just showed you. So instead of red, there are keywords. So if you go back to the Smashing Magazine article, I can show you the breakdown of how these all map. 

<i class="timecode">[00:36:16]</i> **Ben:** Okay! 

<i class="timecode">[00:36:17]</i> **Eric:** So, and these correspond exactly to that theme picker that we were demoing earlier. So regular, inert, static text is "CanvasText," which is capitalized for C and T in "Canvas" and "Text," one word. Hyperlinks is "LinkText," disabled text is "GrayText," the foreground of selected text is "HighlightText," the background is "Highlight," buttons is "ButtonText," button background is "ButtonFace," and backgrounds are "Canvas." And so these keywords will hook into the themes that you specify. So if we're using yellow for text you know, we write that keyword instead of the color yellow and it ensures that it's adaptable, so if we ever change yellow to green for whatever reason, our CSS will update to match and our browser will update to match, which is very powerful. 

<i class="timecode">[00:37:15]</i> **Ben:** Okay! So if I had decided — and I feel like this would be breaking conventions here — but if I decided that I wanted my headings to look like whatever the disabled color was, I could say "GrayText" in here. Again, breaking convention here. This seems not particularly semantic, as it were. But I could say "GrayText" and it would pick whatever my disabled text color was, which back here I actually made pink. So in here. My disabled text. So my `<h2>`s would show up as pink in this particular theme.

<i class="timecode">[00:37:57]</i> **Eric:** Precisely, yep.

<i class="timecode">[00:37:58]</i> **Ben:** Very cool. Okay!

<i class="timecode">[00:38:02]</i> **Eric:** So, yeah! That's, like, you know, that's a very simplified example, but to your kind of point you just said now, like, forced colors mode is all about predictability. So what you really want to do is find places where your content doesn't work and make little nudges and tweaks there. Like, a really common example of this is, like, say you have a card component that doesn't have a border on it, but the whole thing is clickable. You know, again, like, forced colors mode does not care about your sense of aesthetics, so it'll throw out, like, a drop shadow that you're using to help convey its boundary. And one of the things you can do is add a border when forced color mode is active, and that will take effect and so now that you, you know, you can understand the boundaries of the card better when the forced color mode is active and understand that it's, like, one concrete little thing and that you can click on it.

And that's important to kind of mention because, you know, again, like, disability is a spectrum, it's not a binary. So, you know, if you're using this, you might also be using screen magnification software. You might not have the larger context of the card if you've incredibly zoomed in on something. So it's just, you know, it's helpful to make these little tweaks to help communicate the purpose of the components that you're using.

<i class="timecode">[00:39:41]</i> **Ben:** Yeah! I actually… so, I have done this on my personal site, where I've got… you mentioned specifically the borders around cards. So if we were to look at that, like, markup there. Like, here, I'll pull this up. First of all, we can see the outlines. We can can see the outlines around here.

I think that my computer speed is not helped by, you know, porting to a virtual machine. But I've got this list item with a class "card." And I think I have… if I do this. Is it… hover where I show the…? Oh, no, I think—

<i class="timecode">[00:40:42]</i> **Eric:** I see, yes. Okay, so you're actually being very clever with this, too. The "transparent" keyword. So, in a normal mode — I hate that term. In a non-forced-color mode, "transparent" means you can see through it. And then forced color is all about making things obvious. So you have a 3 pixel transparent solid border in normal mode. And one of the things that high contrast mode and forced color mode do is turn borders into visible borders. So now that this is active, it's saying, "Ah, 3 pixels solid transparent? Transparent ain't transparent no more!" We're going to map that to whatever has been set for, I believe, our button color. Or wait, no, sorry, our inert text color.

And that's great because you're kind of designing defensively, because what that statement says is, you know, when forced color mode is not active, there's an invisible outline, and that preempts somebody potentially having forced color mode active. So if it does, show that border, and that saves you the headache of having to write a media query to kind of fix it in post, which is, you know, net less code sent down the wire and net less code to maintain.

<i class="timecode">[00:42:08]</i> **Ben:** Okay. But if I had wanted to do this with media queries, I could be saying that this was like… I could do my "card" class and then "border: 3px solid CanvasText." Assuming I didn't have, like, the transparent outline. This is another way I could have gone about it. 

<i class="timecode">[00:42:26]</i> **Eric:** Yep, precisely!

<i class="timecode">[00:42:27]</i> **Ben:** Okay.

<i class="timecode">[00:42:27]</i> **Eric:** And then if you really wanted to, like, hammer home that the whole card was clickable, you could even use your hyperlink color instead. And that borrows on that visual affordance that says, like, "All links have this color. This color is a destination. If I mash it, I will go to a place." 

<i class="timecode">[00:42:46]</i> **Ben:** Gotcha! Makes a lot of sense.

Cool. So, is that really the meat, then, of, like, working with forced colors mode, is kind of going in and finding places where it's like, we could map something to one of those, like, semantic forced-color names, just applying it there, or is there more to do with forced colors mode? 

<i class="timecode">[00:43:11]</i> **Eric:** Yeah, yeah! That's the bulk of it, and, like, also, that's kind of the point. And a good way to also think about this is, like, you know, one of the things you can do with CSS is write specificity hacks to overcome stuff you can't control. So like, you have a website. The website has an iframe. The iframe has content that comes from a third-party vendor. You know, you can't really talk to that vendor, but you can use nasty CSS hacks to fix stuff if it's broken on your site that you show their code. The same way… realistically, you don't always have control over the markup that your site generates. And that's one of the reasons I am super into design systems because I do get to help inform those choices. But there are going to be circumstances where you're gonna have a button thgat's written with a `<div>`, and there's nothing you can do about it. And that stinks, and I don't like it. It's inaccessible. But you CAN write high contrast mode keywords to get around that.

And the reason I say a `<div>`, because it happens all the time. But also, another really important thing to know about forced color mode and high contrast mode is, if you take that `<div>` and you put some ARIA on it to make it clickable, and the tabindex and, like, all that good stuff, wire it up exactly the way it's supposed to… forced colors mode and Windows High Contrast Mode still don't understand ARIA. They only understand semantic HTML.

<i class="timecode">[00:44:53]</i> **Ben:** Mmmm!

<i class="timecode">[00:44:53]</i> **Eric:** So, you know, you're gonna have to write this media query to kind of get around that. Otherwise it may not look interactive, which means people might not know to click it. 

<i class="timecode">[00:45:05]</i> **Ben:** Yeah, that's a really great callout. So by leveraging semantics, not only are we getting the, like, functionality out of the box that browsers have supplied, but like… we're indicating in alternate viewing modes like high contrast mode, forced colors mode, that, like, it should leverage those same semantics in there for those semantic colors. Interesting to think about this in terms of, like, semantic colors, too. This is a fun mental model. I think. 

<i class="timecode">[00:45:37]</i> **Eric:** Yeah, and I think it's kind of the direction the web's generally headed to, which makes me really happy because, like, you know, most people are familiar with light and dark mode themes, and that's all about, like, saying with certainty, like, this is a button on a light background that, like, when this mode is active, it's this, and when this mode is active, it's that. And like, I think we're getting a lot more purposeful about this kind of stuff, so I feel this is kind of a logical extension of that kind of thinking.

The other other thing for developing and designing with this is, you know, you want to make tiny little surgical tweaks. You don't want to completely overhaul stuff. 

<i class="timecode">[00:46:18]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:46:19]</i> **Eric:** If your designer is like, "Oh, we have to create a forced color mode experience," you probably want to tell them to "tone it down, buddy," because this predictability, this very intentional, like, boosting of contrast and legibility is the point. So what you want to look for instead is areas where either your content doesn't hold up. If we go back to Wikipedia, I can actually point out another thing that I noticed. 

<i class="timecode">[00:46:49]</i> **Ben:** Yes. Any particular article?

<i class="timecode">[00:46:51]</i> **Eric:** Just, whichever article we have. Or any article.

<i class="timecode">[00:46:59]</i> **Ben:** Yeah. I'll go back to the assistive technology one. Here we go. 

<i class="timecode">[00:47:04]</i> **Eric:** Beautiful. So, the tops… the top and left and right borders on the Read tab, for example, are currently not visible.

<i class="timecode">[00:47:15]</i> **Ben:** Mm.

<i class="timecode">[00:47:15]</i> **Eric:** And that's important because that'll help communicate that they're tabs and that this one's currently active. Like, what we have here is kind of okay, but we could, you know, honor the design across different modes. So that's, like, an example of the little tweaks I'm talking about. 

The other thing is, like, if you have subtle designs, for example, like, a modal that uses a drop shadow instead of a border, you might not know that that's a modal in a low-vision context, so when forced color mode is active, giving it a big, chonky border to help communicate foreground and background. I think I have an example of that in the Smashing Magazine article. 

<i class="timecode">[00:47:58]</i> **Ben:** Yes. Yeah, yeah, I'm just going to Google it within here. Smashing Magazine, and I'm just going to put "high contrast," and we'll see, we'll see how it good Smashing's search engine optimization is. I'm sure it's pretty good.

<i class="timecode">[00:48:15]</i> **Eric:** One would hope.

<i class="timecode">[00:48:16]</i> **Ben:** Is that it? I think that's it. March 2022, yeah.

<i class="timecode">[00:48:20]</i> **Eric:** That's our boy.

<i class="timecode">[00:48:22]</i> **Ben:** It's our boy! And okay, so there's a modal somewhere in here. 

<i class="timecode">[00:48:30]</i> **Eric:** I believe it's down towards the bottom. Like, in a CodePen.

<i class="timecode">[00:48:34]</i> **Ben:** Love the Hot Dog Stand theme. 

<i class="timecode">[00:48:36]</i> **Eric:** Thank you! <i class="brackets">[laughs]</i> I'm so glad you got it. 

<i class="timecode">[00:48:40]</i> **Ben:** It's atrocious, and it it's cursed.

<i class="timecode">[00:48:44]</i> **Eric:** Yep.

<i class="timecode">[00:48:44]</i> **Ben:** But I have much love for it anyways. 

<i class="timecode">[00:48:48]</i> **Eric:** I couldn't resist throwing in Hot Dog Stand into a very serious publication.

Yeah, so here's a great example. 

<i class="timecode">[00:49:04]</i> **Ben:** Once the… there we go. It's scrolling back up again. Aha! Aha, okay. Big chonky border. 

<i class="timecode">[00:49:10]</i> **Eric:** Yeah, big chonky border. We now know that there's a thing floating on top of another thing, which is a great example.

Another kind of thing I like to do is, like, if you have things that are bumped inwards to represent hierarchical nesting — so like, you know, like, tabs, side tabs, and stuff like that — bump them just a tiny bit more. Sometimes a thicker underline. If you use ghost buttons, which have a very thin border, fill it and flip it instead to make it look more apparent as a button, especially if, you know, considering there might be somebody who's zoomed in real close or is using a physical magnifying glass. Like, just really reinforced the material honesty of what you're looking at. Like, make a button look like a button. Make a link look like a link. Make a modal very obvious that it's floating over content. That kind of stuff. 

<i class="timecode">[00:50:07]</i> **Ben:** Absolutely. Awesome! Cool. Chat, do y'all have any questions for Eric? Anything y'all want to know?

In the meantime, a question I have is, have you found any, like, gray areas with tweaks where it's, like, "Well, we COULD tweak, but we're uncertain of if that would be, like, the right thing"? Like, I'm trying to figure out, like, where those boundaries might be. 

<i class="timecode">[00:50:34]</i> **Eric:** Yeah. So a really interesting one we were contending with is… U.S. government websites have a little banner with a flag on it, and the flag is an SVG. And the flag helps indicate that, like, this is a official U.S. government website. And so we had a very interesting conversation where it was like… should the flag update, or shouldn't it? Like, is it an image, or is it more important that it's, like, you can see the flag in a potential low-vision scenario? We're still debating that one, so I don't have a good answer for you. But like, that's kind of an example of something we've grappled with of a gray area.

The other thing is sometimes when you have really exotic designs, there may not be a good analog for what something maps back to, so you kind of have to play philosopher and be like, "This ridiculous interaction that somebody cobbled together. Is that more like a button or a link? Like, it's not disabled, but it's not interactable right now, but it's also like nothing I really ever encountered before, so, like, what does that map to? Like, what is it? What's at its core? What is it really trying to communicate?"

<i class="timecode">[00:51:53]</i> **Ben:** Makes sense!

Yeah! So far there's no questions from the chat, though Joe — NastyDirector — says, "I didn't think about how it would differ between semantics and ARIA, so that's good to know." So, yeah. I think a big takeaway here, I guess, is, is honestly just the importance of, like, regularly testing your stuff with, like, real assistive technologies, because you have a sense for how your experience is supposed to behave and what stuff is important, and I think just sometimes going to your site with forced colors mode active just clearly indicates, like, "Oh, this thing has just become unusable."

<i class="timecode">[00:52:41]</i> **Eric:** Yeah. Yeah, I mean, for the ARIA thing, I was… candidly. I was, like, shocked that it didn't support it. I kind of… exactly, to your point, I had that assumption that like, well, you know, you just told it using code that it should be a button, so therefore it's a button. And then, you know, one day I was looking at it for some client work and then it was like, "Oh! Oh, oh, oh, okay. Is it just this one piece of ARIA? No, no, it's all of ARIA. Okay, okay, okay." Like, another vote in favor of semantic HTML, I guess! 

<i class="timecode">[00:53:13]</i> **Ben:** Always, always. Yeah, actually even looking at, like, Smashing here, like, I know that this is supposed to be a little, like, pop-up that, like, follows you down the page. Like, even that, I'm looking at that and going, like, "That could probably stand to have an outline as well."

<i class="timecode">[00:53:30]</i> **Eric:** Yeah! Yeah. And like, I mean, you know, sorry, Smashing Magazine folks, if you're watching, but, like, maybe let's try bumping the screen to, like, 400% and see what happens to it. 

<i class="timecode">[00:53:42]</i> **Ben:** Yeah, let's do it. Um…

We can go further! There we go. Um… 

<i class="timecode">[00:53:54]</i> **Eric:** Yeah. 

<i class="timecode">[00:53:55]</i> **Ben:** Oh, that's lovely. Also I would probably recommend making both of these links, like, quote, "LinkText" color, so that, like, it's clear that they are hyperlinks. That or "Button." Like, I don't… At a certain point, I imagine it would be kind of fine to pick one or the other.

<i class="timecode">[00:54:14]</i> **Eric:** Yeah, yeah.

<i class="timecode">[00:54:14]</i> **Ben:** But like, just to indicate that it's clickable in the first place in forced colors mode.

<i class="timecode">[00:54:19]</i> **Eric:** Yeah. But like, and I agree. <i class="brackets">[chuckes]</i> And also, like, the real MVP here would be, like, a little border to help disambiguate the difference between the cookie modal and the content behind it.

<i class="timecode">[00:54:31]</i> **Ben:** Yeah.

<i class="timecode">[00:54:31]</i> **Eric:** And like, people might be rolling their eyes and being like, you know, "400%? Ah, who does that?" Like, a lot of people do! Like, this is the web for, you know, for a non-trivial amount of people. And more importantly, like, I shouldn't have to quantify it with numbers. Like, if this is what somebody needs to pay their taxes—