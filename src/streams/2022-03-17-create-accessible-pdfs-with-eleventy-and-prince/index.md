---
title: Create Accessible PDFs with Eleventy and Prince, with Larry Hudson
thumbnailTitle: Create Accessible PDFs with Eleventy and Prince
timeOfDay: 4pm
hosts:
  - Ben Myers
  - Larry Hudson
tags:
  - Web Accessibility
  - Eleventy
upload: https://youtu.be/-8CnU_dDos8
sourceCode: https://github.com/SomeAnticsDev/accessible-pdfs-with-eleventy
---

You might be well-acquainted with creating accessible websites, but how about creating accessible documents such as <abbr>PDFs</abbr>? Join us as [Larry Hudson](https://twitter.com/larryhudsondev) shows us how we can tag <abbr>PDFs</abbr> for assistive technologies… and then how we can make creating accessible <abbr>PDFs</abbr> even easier with [Eleventy](https://11ty.dev) and [Prince](https://www.princexml.com/)!

---

## More From Larry

- [Follow Larry on Twitter](https://twitter.com/larryhudsondev)

## Mentioned Links

- [Get the tagged PDF flyer we used!](https://www.pdfa.org/resource/pdfua-flyer/)
- [Scott O'Hara on the `<section>` element](https://www.scottohara.me/blog/2021/07/16/section.html)
- [Prince XML](https://www.princexml.com/)
- [`eleventy-plugin-prince-pdf`](https://github.com/larryhudson/eleventy-plugin-prince-pdf)
- [W3Schools on the `<style>` tag's `media` attribute](https://www.w3schools.com/tags/att_style_media.asp)
- [Some Antics: Dive Into Bedrock Layout with Travis Waith-Mair](https://youtu.be/ZISlxQ6CX2A)
- [`11ty-prince-pdf-example` repo](https://github.com/larryhudson/11ty-prince-pdf-example)
- [Join the Lunch Dev Discord server](https://discord.gg/lunchdev)
- [Join the Frontend Horse Discord server](https://frontend.horse/chat)

## Transcript

<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Thursday. It is great to be here. Good to be back, and good to be joined by Larry Hudson! Larry, good morning! 

<i class="timecode">[00:00:12]</i> **Larry:** Good morning! We've got the crossover of Australian morning time and Texas afternoon. 

<i class="timecode">[00:00:19]</i> **Ben:** Yes, it worked out surprisingly well. Quite, quite happy with how that worked out. We were planning ahead of time and we basically had to invent the word "Thufriday" just to be able to talk about this weird intersection. But we made it, we got you on, and you're here! So howdy, howdy! 

<i class="timecode">[00:00:43]</i> **Larry:** Great to be here! 

<i class="timecode">[00:00:45]</i> **Ben:** Great to have you on. So, for folks who haven't seen you yet, would you like to introduce yourself?

<i class="timecode">[00:00:51]</i> **Larry:** Yeah, sure. So, I'm a web developer based in Melbourne, Australia. I work at the Information Access Group, which is a fairly small communications agency that specializes in accessible communications, so accessible documents, accessible websites, and a lot of making information easier to understand. So a lot of the work that I've been doing has involved accessible documents and sharing information online in an accessible way. 

<i class="timecode">[00:01:33]</i> **Ben:** Good deal! And I think that document accessibility is… like, this is something that has interested me for a bit because, like, I don't have any experience with it. I have purely just, you know, been working with web accessibility. And so one of the things I'm incredibly curious about is how is document accessibility… like, how does it compare to web accessibility? Is it similar? Is it dissimilar? 

<i class="timecode">[00:01:59]</i> **Larry:** I would say that a lot of web accessibility guidelines, say, in WCAG would apply to document accessibility as well. So, you could see document accessibility as maybe a bit of a subset of Web Content Accessibility Guidelines, and most of the principles that we apply to web accessibility would also apply to documents. I guess if you're working with documents, say PDFs or Word documents, it's a little bit simpler than web accessibility because you're working with sort of, like, a fixed page size. So there are certain limitations to what you can do with a document, which makes it a little bit simpler, but also makes it limited in terms of the user experience. So…

<i class="timecode">[00:03:04]</i> **Ben:** Mmm.

<i class="timecode">[00:03:05]</i> **Larry:** Yeah, there's that sort of overlap. Yeah, we'll talk about that a little bit later in terms of HTML and PDF, comparing those in terms of accessibility.

<i class="timecode">[00:03:18]</i> **Ben:** Yeah! 'Cause, like, with HTML, I think of, like, you've got things like `<button>` elements and, you know, `<details>`/`<summary>` — things you can do there to have some degree of interaction. But documents — PDF documents especially — don't really have that beyond hyperlinks, from what I understand.

<i class="timecode">[00:03:35]</i> **Larry:** Yeah.

<i class="timecode">[00:03:36]</i> **Ben:** So, less interaction accessibility and more content structure accessibility, right?

<i class="timecode">[00:03:42]</i> **Larry:** Yeah. Yeah, so it is possible to add interactive form fields to a PDF and incorporate them into the tags of the PDF so that you can have that sort of, you can fill out a PDF form and then save it, but then you've gotta go and email it to someone or something like that. So yeah, the limitations compared to something like HTML and JavaScript. Yeah.

<i class="timecode">[00:04:17]</i> **Ben:** Okay!

<i class="timecode">[00:04:17]</i> **Larry:** Yeah, the accessibility and the interactivity sort of feel like they're bolted onto PDF, because PDF wasn't originally created with those in mind. Yeah, the main priority with the PDF document format is taking a print document and having a consistent digital format of that print document. That's the main sort of priority with PDF, yeah. 

<i class="timecode">[00:04:51]</i> **Ben:** Yeah, thinking about it as, like, something that was kind of, I guess, backformed from print is interesting, 'cause you don't typically think about like… I mean, semantics don't really matter for print, right? Unless you're styling things, right? But like, you know, no one cares whether your labels are wired up to your inputs correctly when you're printing something. So PDF being backformed from printing and then having to kind of kludge in accessibility, like, that is interesting to think about and interesting to put what we're about to do today in context. 

<i class="timecode">[00:05:29]</i> **Larry:** Yeah, I think it's similar to, I guess, the experience that web developers might have where when you're first learning, you might think, "Oh, I can just make this heading text really big and bold, and my job is done." But doing that extra work so that the semantic information comes through to assistive technology… we can do all of that work in documents as well. 

<i class="timecode">[00:06:00]</i> **Ben:** Mm, okay!

<i class="timecode">[00:06:01]</i> **Larry:** Yeah.

<i class="timecode">[00:06:02]</i> **Ben:** Excellent! So, yeah! Should I go ahead and start sharing my screen? 

<i class="timecode">[00:06:07]</i> **Larry:** Yeah, I think so. 

<i class="timecode">[00:06:10]</i> **Ben:** Alright. So first of all, y'all, today we have Larry Hudson on. Go follow Larry on Twitter at @larryhudsondev. And yeah, then, I guess, where should I go from here? What should we do to get started? 

<i class="timecode">[00:06:28]</i> **Larry:** Yeah, so I thought to get started, it would be interesting to talk about a little bit of an introduction to how accessibility works when it comes to PDFs. 

So… in HTML, the content itself, the HTML elements, is what is represented to assistive technology. There's no sort of separation between the actual content and what gets represented to screenreaders. And that's what makes HTML a great sort of format when it comes to accessible information. PDF is slightly different, where you've got content on the page but there's a separate section of the PDF where the tag information is, and it's sort of like the tags are linked to the content on the page.

We could have a look at this document that I've sent through to you, this flyer.

<i class="timecode">[00:07:46]</i> **Ben:** Yes.

<i class="timecode">[00:07:47]</i> **Larry:** But this is an example of a tagged PDF. So we'll open up that PDF, and we'll open it up in Adobe Acrobat. 

<i class="timecode">[00:08:04]</i> **Ben:** Yes. That is gonna open up in Preview, hang on. Open with… Acrobat.

<i class="timecode">[00:08:10]</i> **Larry:** So we might see some first-time user experience in Acrobat. We'll see what comes up. 

<i class="timecode">[00:08:18]</i> **Ben:** Yeah. It sure is thinking about it. My computer is chugging today, and I don't quite know why! I restarted to…

There we are! Okay, cool! So we have Acrobat. We've got our PDF up.

<i class="timecode">[00:08:34]</i> **Larry:** Yeah! 

<i class="timecode">[00:08:36]</i> **Ben:** Okay!

<i class="timecode">[00:08:36]</i> **Larry:** Awesome! So, as you can see, this is a digital representation of a printed document. You can sort of tell by these columns that this is a brochure that is sort of primarily a print document. But if you see, on the left-hand side, how you've got that sort of sidebar with the icons?

<i class="timecode">[00:09:03]</i> **Ben:** Yeah!

<i class="timecode">[00:09:03]</i> **Larry:** If you right-click in that sidebar.

<i class="timecode">[00:09:10]</i> **Ben:** I see "Tags!"

<i class="timecode">[00:09:12]</i> **Larry:** Yeah, you can go to the tags panel.

<i class="timecode">[00:09:16]</i> **Ben:** Okay.

<i class="timecode">[00:09:18]</i> **Larry:** And if you open up those… the little arrows to expand the sort of tags tree, you'll end up sort of seeing a representation that is quite similar to HTML. So `<Sect>` is like a section, so it's sort of similar to a `<div>`. So you've got this representation of the actual content that's in the document, but as I said before, it's separate from the actual content on the page. So this tags panel could be totally empty while you've got all the content on the page. 

<i class="timecode">[00:10:07]</i> **Ben:** Mmmm!

<i class="timecode">[00:10:08]</i> **Larry:** And that means that screenreader users or assistive technology users don't have access to the information on the page. So there's that separation that makes a little bit more work for people making accessible documents.

<i class="timecode">[00:10:26]</i> **Ben:** Okay.

<i class="timecode">[00:10:27]</i> **Larry:** It's one more thing to check. So you've gotta make sure this representation of the content is correct and is in the right order, 'cause this is what is gonna be announced to screenreaders. 

<i class="timecode">[00:10:40]</i> **Ben:** Iiiiiinteresting. Okay, and it really does have to be, like, top to bottom in the correct order.

<i class="timecode">[00:10:46]</i> **Larry:** Yeah.

<i class="timecode">[00:10:47]</i> **Ben:** So, like, if I started moving things around, that would be like changing the DOM order, as far as the screenreader user is concerned.

<i class="timecode">[00:10:55]</i> **Larry:** Exactly. So you can drag things around in the tags panel and it won't affect the content on the page, but that means that the tags order can be totally wrong. Imagine if this document had ten pages. Some content on the first page could be at the end of the tags panel, and then a screenreader user would hear that content on the first page at the very end of the document.

<i class="timecode">[00:11:25]</i> **Ben:** Mmmm!

<i class="timecode">[00:11:25]</i> **Larry:** So…

<i class="timecode">[00:11:27]</i> **Ben:** Okay.

<i class="timecode">[00:11:27]</i> **Larry:** Yeah. It's quite… You can get pretty complicated in terms of this sort of manipulation of the tags, but you can…

If you right-click on one of the `<Figure>` tags there. And go "Properties." You can see the alternate text.

Oh, okay. I can see that it's been opened read-only. See that blue bar at the top? 

<i class="timecode">[00:12:06]</i> **Ben:** Oh! Yeah, let me enable editing it, if anything just so that we can actually see with a higher color contrast. And then let me reopen this. There we go! Okay, much better!

<i class="timecode">[00:12:21]</i> **Larry:** So, you can see the alt text is set on the `<Figure>` tag. So, it's sort of interesting that the alternate text is applied on the tag, which is sort of separate from the content on the page.

<i class="timecode">[00:12:40]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:12:42]</i> **Larry:** So I just sort of wanted to demonstrate this. The tags panel is where the information for screenreaders is, basically.

<i class="timecode">[00:12:50]</i> **Ben:** Okay!

<i class="timecode">[00:12:51]</i> **Larry:** Do you think it would be worth trying this out with VoiceOver? 

<i class="timecode">[00:12:56]</i> **Ben:** Yeah! So should I do anything special to open this up, like, so that I don't have the rest of the Acrobat interface? 

<i class="timecode">[00:13:06]</i> **Larry:** It might be good to just open it in Preview. It might be a bit simpler. 

<i class="timecode">[00:13:11]</i> **Ben:** Let's see. Alright! Give it a moment to think about it. Alright! And I'm gonna turn VoiceOver on. Let's see how this goes!

<i class="timecode">[00:13:22]</i> **Larry:** Mm.

<i class="timecode">[00:13:23]</i> **Ben:** Everything's chugging along right now., but it's coming up!

<i class="timecode">[00:13:27]</i> **Larry:** Mm-hmm.

<i class="timecode">[00:13:29]</i> **Ben:** I need, like, hold music or something like that, you know?

<i class="timecode">[00:13:33]</i> **Larry:** Exactly.

<i class="timecode">[00:13:34]</i> **VoiceOver:** VoiceOver on application.

<i class="timecode">[00:13:37]</i> **Ben:** Alright!

<i class="timecode">[00:13:37]</i> **VoiceOver:** FlyerPDFUA-en2015.pdf 

<i class="timecode">[00:13:40]</i> **Ben:** So, we've got VoiceOver open, and I would like to try to navigate to the image, right?

<i class="timecode">[00:13:46]</i> **Larry:** Yeah! Let's see what comes up first when we—

Insert Page, menu button. Insert Page. Insert Page. Collection, 1 item selected. Full screen, button. 

<i class="timecode">[00:13:57]</i> **Ben:** Let me try clicking into here.

<i class="timecode">[00:13:58]</i> **VoiceOver:** Document, group.

<i class="timecode">[00:13:59]</i> **Ben:** There we go. 

<i class="timecode">[00:14:00]</i> **VoiceOver:** Insert page. Document, group. Leaving doc— Inspector. Entering. Leaving. Leaving Highlights—

<i class="timecode">[00:14:06]</i> **Ben:** Hmmm…

<i class="timecode">[00:14:07]</i> **VoiceOver:** Search. Leaving. Leaving collection. Entering document group. Document, group. Page 1. Heading level 2, Creating PDF/UA. PDF/UA conformance places stringent demands on both the document authoring software and the author.

<i class="timecode">[00:14:19]</i> **Larry:** Ah!

<i class="timecode">[00:14:19]</i> **Ben:** So it did start at the beginning there. Interesting.

<i class="timecode">[00:14:24]</i> **Larry:** Yeah, but it started on the left-hand side. Yeah, that's interesting because when we looked at the tags before, the "PDF/UA" on the right-hand side, I think that was the heading level 1.

<i class="timecode">[00:14:42]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:14:43]</i> **Larry:** Maybe if you keep navigating down?

<i class="timecode">[00:14:46]</i> **Ben:** Yeah.

<i class="timecode">[00:14:46]</i> **Larry:** We'll see…

<i class="timecode">[00:14:54]</i> **VoiceOver:** Authors— logical reading order, include alternative text for images and avoid accessibility errors, such as convey information with color alone. "Smarthphone" with software that has Reader View available, image. Heading level 2, Using PDF/UA. PDF/UA performance…

<i class="timecode">[00:15:09]</i> **Larry:** …with the alt text there.

<i class="timecode">[00:15:12]</i> **Ben:** Yeah.

<i class="timecode">[00:15:12]</i> **VoiceOver:** Heading level— "Smarthphone" with—

<i class="timecode">[00:15:20]</i> **Larry:** With a typo in it! 

<i class="timecode">[00:15:21]</i> **Ben:** Yeah! Yep, "smarthphone." Interesting!

<i class="timecode">[00:15:26]</i> **Larry:** Yeah!

<i class="timecode">[00:15:29]</i> **Ben:** Okay? 

<i class="timecode">[00:15:29]</i> **Larry:** Hm. It actually… yeah. So we could have a look in the tags again just to make sure what sort of order is there. 

<i class="timecode">[00:15:41]</i> **Ben:** Absolutely. Let me turn off VoiceOver real quick and we'll give that a shot.

<i class="timecode">[00:15:45]</i> **VoiceOver:** VoiceOver off.

<i class="timecode">[00:15:47]</i> **Ben:** Okay. Document. Oh! Yeah. So I'm guessing `<Art>` is "article," right?

<i class="timecode">[00:15:56]</i> **Larry:** Yeah, that's right.

<i class="timecode">[00:15:58]</i> **Ben:** That's aaaaall of this stuff. And then this is the section that… heh! There IS a pink outline that I can juuust make out, but it's indicating this right-hand side here. Yeah! `<Figure>`, then a small little section down the side of this image here.

<i class="timecode">[00:16:20]</i> **Larry:** Yeah. So… interesting. 

<i class="timecode">[00:16:26]</i> **Ben:** Where are we? Oh, we're down here.

<i class="timecode">[00:16:29]</i> **Larry:** Yep.

<i class="timecode">[00:16:30]</i> **Ben:** This can't be all of the tags in the document though, right? 'Cause, like, we're gonna…

<i class="timecode">[00:16:37]</i> **Larry:** Further down, those sections. Ah, okay. 

<i class="timecode">[00:16:43]</i> **Ben:** Oh! Okay? Hang on. 

<i class="timecode">[00:16:46]</i> **Larry:** So yeah, you can nest sections the same way as HTML, so there could be quite a lot of content inside a section tag.

Hm. Yeah, it's interesting that it read out the content on the left-hand side of the page when it wasn't the first tag in our testing. There can be inconsistencies in the PDF reader programs and how they announce the content to screenreaders. So it might be that there are some inconsistencies between how Preview is announcing the content to VoiceOver—

<i class="timecode">[00:17:45]</i> **Ben:** Yeah!

<i class="timecode">[00:17:46]</i> **Larry:** —versus how maybe Acrobat would announce it.

<i class="timecode">[00:17:49]</i> **Ben:** Okay!

<i class="timecode">[00:17:49]</i> **Larry:** I feel like that's maybe one other downside of PDFs when it comes to accessibility. I feel like the ways that web browsers present the sort of accessibility tree to screenreaders is more reliable than PDF reader programs.

<i class="timecode">[00:18:13]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:18:15]</i> **Larry:** So that's maybe what we're running into here.

Yeah, we probably could try… I'm thinking we could try to read it out using Acrobat and see if there's a difference.

<i class="timecode">[00:18:32]</i> **Ben:** Okay! Yeah, is there…?

<i class="timecode">[00:18:34]</i> **Larry:** I know the interface is more complicated.

<i class="timecode">[00:18:37]</i> **Ben:** Yeah, is there a way to just pop directly to just viewing it? 

<i class="timecode">[00:18:43]</i> **Larry:** Um… 

<i class="timecode">[00:18:46]</i> **Ben:** There's a Read Out Loud feature, which is interesting. 

<i class="timecode">[00:18:50]</i> **Larry:** Oh, so, the Read Out Loud function… this is a sort of, like, a source of annoyance. So, in PDFs, there's the tags panel and then there's the content on the page, and the order of the content on the page is sort of like visual layers. So, there's an order of actual content on the page, and if something comes after something before, it's visually on top of that one that came before. And the Read Out Loud function here uses that order to announce, to read it out loud.

<i class="timecode">[00:19:48]</i> **Ben:** Mmm!

<i class="timecode">[00:19:48]</i> **Larry:** Whereas assistive technology uses the tags order. I've seen quite a few sort of forum threads of people saying, "Why don't they just read out the same thing? Why doesn't…?" Yeah, that's sort of like an annoying Acrobat thing. Adobe using a different way to read out the content in that way. 

There's maybe a chance that Preview is reading out that order.

<i class="timecode">[00:20:20]</i> **Ben:** Ohhh.

<i class="timecode">[00:20:21]</i> **Larry:** That's why the stuff on the left-hand side was being read out first.

In the sidebar of Acrobat, if you right-click again on the icons, there's another one called "Reading Order," or just "Order."

<i class="timecode">[00:20:41]</i> **Ben:** Okay.

<i class="timecode">[00:20:41]</i> **Larry:** And… so, if you scroll up to page one.

<i class="timecode">[00:20:53]</i> **Ben:** Let's see.

<i class="timecode">[00:20:54]</i> **Larry:** Yeah!

<i class="timecode">[00:20:54]</i> **Ben:** That looks like 1 right here. 1 is…

Oh, that's like a heading line. Okay, so 1 is the image. 2…

<i class="timecode">[00:21:06]</i> **Larry:** And then it goes…

<i class="timecode">[00:21:08]</i> **Ben:** Okay.

<i class="timecode">[00:21:11]</i> **Larry:** Yeah.

So it might be that Preview's reading out that order as well. 

<i class="timecode">[00:21:20]</i> **Ben:** Mmm! And when I clicked in, I might have clicked directly into 2, and…

<i class="timecode">[00:21:26]</i> **Larry:** Ah.

<i class="timecode">[00:21:27]</i> **Ben:** It might have… okay. Interesting, interesting.

<i class="timecode">[00:21:30]</i> **Larry:** Yeah. I guess it's just the fact that there are two ways of doing it, I guess maybe some PDF reader programs go the other way. But I'm pretty sure in the sort of PDF spec, the tags are what assistive technology is supposed to read out.

<i class="timecode">[00:21:49]</i> **Ben:** Gotcha!

<i class="timecode">[00:21:51]</i> **Larry:** Yeah!

Should we maybe keep talking about, I guess, HTML and PDF?

<i class="timecode">[00:21:59]</i> **Ben:** Yeah! Yeah, yeah, yeah.

<i class="timecode">[00:22:00]</i> **Larry:** Yeah. So… in my sort of work of trying to make sure documents are accessible and making sure information is shared in an accessible way, we're trying to head towards more information being shared on webpages. In our work at the Information Access Group, we work with clients who are trying to share information, usually in documents, so sharing an annual report or a factsheet or that sort of thing. And we're trying to encourage more of our clients to share information in a webpage, because if information is shared on a webpage, you get, you know, a responsive experience. So if someone's looking at something on a phone screen, the content will reflow to suit their device. The webpage will load faster than a PDF because a PDF file needs to be downloaded completely before it opens.

<i class="timecode">[00:23:16]</i> **Ben:** Mmm!

<i class="timecode">[00:23:17]</i> **Larry:** So if you're on a pretty poor connection — maybe you've got bad reception on your phone — it might take quite a while for, say, a 5-megabyte PDF file to download.

<i class="timecode">[00:23:33]</i> **Ben:** Yeah!

<i class="timecode">[00:23:33]</i> **Larry:** And yeah. If you're just trying to get some information, yeah, that might be long enough that you give up, basically.

<i class="timecode">[00:23:41]</i> **Ben:** I think about that at, like, restaurants! Like, you know, 'cause in these times, of course, it seems like every restaurant has the QR code that you scan to pull up their menu, but what they put… like, their menu is a PDF, right?

<i class="timecode">[00:23:57]</i> **Larry:** Mm-hmm.

<i class="timecode">[00:23:57]</i> **Ben:** And I don't know about you, but for whatever reason, it seems like I always seem to have poor reception in a restaurant. And so I'm here, like, trying to pull up a menu — a thing that I need, right, to be able to use this restaurant that I'm at — and like, I'll scan their QR code, and then it takes, like, two or three minutes for their menu to come up.

<i class="timecode">[00:24:19]</i> **Larry:** Yes!

<i class="timecode">[00:24:19]</i> **Ben:** And it just seems like that kind of, like, is a sucky experience all around, 'cause then they can't, like, update it as easily for when they've got, like, new items, new dishes, or anything like that. 

<i class="timecode">[00:24:31]</i> **Larry:** Yeah. I think that's a perfect example. So, that sort of shows that maybe they've gone and got a menu made by a graphic designer.

<i class="timecode">[00:24:40]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:24:41]</i> **Larry:** And they thought that, you know, "This is a physical menu. Yeah, the graphic designer also sent us a PDF, so we'll put that on our website." I would say, you know, most of the time, they're probably not thinking about it being an accessible PDF, because it is primarily a print sort of document.

<i class="timecode">[00:25:07]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:25:07]</i> **Larry:** So, yeah, that's a perfect example of, I guess what we would…

I guess what we are trying to show is a better way of taking that content, so whether it's menu items for a restaurant or something like that, and publishing a webpage, but also publishing a PDF so that you have that print version if you need it.

<i class="timecode">[00:25:36]</i> **Ben:** Mm.

<i class="timecode">[00:25:37]</i> **Larry:** So yeah, it might actually be interesting. You could probably make an example of a restaurant menu which is a webpage.

<i class="timecode">[00:25:48]</i> **Ben:** Yeah!

<i class="timecode">[00:25:48]</i> **Larry:** Yes. Yeah. Is it worth getting into that now?

<i class="timecode">[00:25:53]</i> **Ben:** Let's do it!

<i class="timecode">[00:25:54]</i> **Larry:** Maybe the practical side. 

<i class="timecode">[00:25:56]</i> **Ben:** Yeah, let me… I'm gonna just nuke everything. And we're just gonna make us a website, right? 

<i class="timecode">[00:26:04]</i> **Larry:** Yeah!

So, before we get into Eleventy, I could give you a little bit of a intro to Prince.

<i class="timecode">[00:26:15]</i> **Ben:** Okay!

<i class="timecode">[00:26:16]</i> **Larry:** So Prince is a software that… it's sort of provided as, like, a command line utility interface sort of thing to convert a HTML webpage to a PDF.

<i class="timecode">[00:26:36]</i> **Ben:** Okay.

<i class="timecode">[00:26:36]</i> **Larry:** And the nice thing about that is because HTML is such a good basis for semantics and that sort of thing, when it converts the HTML to PDF, the semantic information comes through in the tags. So that's the big difference between, in your web browser, going "File, Print to PDF" or something like that. You get an accessible PDF from your sort of webpage input.

It also lets you do quite a lot of customization. So, if you've got sort of a table of contents at the start of your webpage, you can add page numbers to those links.

<i class="timecode">[00:27:39]</i> **Ben:** Ohhhhh, ooh, ooh!

<i class="timecode">[00:27:41]</i> **Larry:** So then it can feel a bit more like a printed document. And things like a page number in the bottom corner. That sort of thing. So we can have a look at that as well.

<i class="timecode">[00:27:53]</i> **Ben:** Okay!

<i class="timecode">[00:27:55]</i> **Larry:** So… yeah, maybe we can get started making that Eleventy site.

<i class="timecode">[00:28:04]</i> **Ben:** Yep.

<i class="timecode">[00:28:07]</i> **Larry:** Yeah, maybe we should make a restaurant menu. 

<i class="timecode">[00:28:10]</i> **Ben:** Let's do it, yeah! I am just letting everything kinda come to…

Alright. And then git init. Make this. Let's see. And then .gitignore. Yep. And…

What is my computer doing? It is NOT thrilled today.

Alright, ignore those node_modules, then here we'll go in and we'll add ourselves an Eleventy config.

<i class="timecode">[00:28:56]</i> **Larry:** Hm. 

<i class="timecode">[00:28:58]</i> **Ben:** I'll make a folder. I'll call it src. Oooh, hello. 

Wow! Wow.

<i class="timecode">[00:29:06]</i> **Larry:** Whoa. 

<i class="timecode">[00:29:08]</i> **Ben:** I've never actually seen this before! What is going on on my computer today? 

<i class="timecode">[00:29:12]</i> **Larry:** Adobe has installed.

<i class="timecode">[00:29:20]</i> **Ben:** It might actually be Adobe, yeah! Wonder…

<i class="timecode">[00:29:24]</i> **Larry:** You could probably quit out of Creative Cloud, if that's slowing things down. 

<i class="timecode">[00:29:30]</i> **Ben:** Yeah, let me give that a shot.

Adobe Cloud… Quit… yeah. 

<i class="timecode">[00:29:41]</i> **Larry:** Yeah, it's a little bit frustrating that there aren't more options when it comes to PDF editing software that—

Mm-hmm.

—lets you manipulate the tags. I feel like Adobe are a little complacent with their position in the market, so they don't need to make the interface for editing the tags much better, because…

<i class="timecode">[00:30:09]</i> **Ben:** Yeahhhh.

<i class="timecode">[00:30:09]</i> **Larry:** …they're, you know, obviously the market leader.

<i class="timecode">[00:30:15]</i> **Ben:** Absolutely. Alright!

<i class="timecode">[00:30:17]</i> **Larry:** So… yeah. So, we can probably start with, like, making our HTML, so making the webpage. We could, yeah… maybe Markdown, or yeah, we could write HTML. 

<i class="timecode">[00:30:37]</i> **Ben:** I think, just for the sake of today, let's stick with some good old HTML.

<i class="timecode">[00:30:43]</i> **Larry:** Sure.

<i class="timecode">[00:30:44]</i> **Ben:** "Accessible PDFs." Get a little `<main>` tag. `<h1>`, "Accessible PDFs with Eleventy and Prince." 

Then yeah, so we were talking about maybe making this, like, a restaurant, right?

<i class="timecode">[00:31:05]</i> **Larry:** Yeah.

<i class="timecode">[00:31:07]</i> **Ben:** I'll just maybe instead call this "Menu." And let's see. Maybe I'll have a `<section>` in here, and the `<section>`…

What all should we have on our menu here? 

<i class="timecode">[00:31:20]</i> **Larry:** So we could have, yeah, maybe breakfast items? 

<i class="timecode">[00:31:24]</i> **Ben:** Yeah. Do… breakfast. Let's make… probably an unordered list, I'm guessing? Actually, you know what? We'll want prices, so… 

<i class="timecode">[00:31:41]</i> **Larry:** The `<dl>`! 

<i class="timecode">[00:31:43]</i> **Ben:** Had to, you know?

Oop, not `<dr>`. That's not a thing. `<dt>`. Here we go. 

Alright. And this will be, like, you know, pancakes. And we'll have pancakes be… I don't know. We'll make it, like, $4.99. And everything will just be $4.99. Let's do…

<i class="timecode">[00:32:07]</i> **Larry:** Sure.

<i class="timecode">[00:32:09]</i> **Ben:** …waffles.

<i class="timecode">[00:32:11]</i> **Larry:** Quite cheap for Australian prices.

<i class="timecode">[00:32:17]</i> **Ben:** Mmm!

<i class="timecode">[00:32:18]</i> **Larry:** I feel like our cafés, everything is, like, you know, $21 or more.

<i class="timecode">[00:32:25]</i> **Ben:** Mmmm… 

Let's see, what's another good breakfast item? Oatmeal. 

Alright. Cool. 

<i class="timecode">[00:32:38]</i> **Larry:** Awesome.

<i class="timecode">[00:32:40]</i> **Ben:** And I would probably go in and add in some IDs, like, if I'm making this, like, a proper website with all the accessibility goodness. And then aria-labelledby="breakfast".

<i class="timecode">[00:32:54]</i> **Larry:** Yeah.

<i class="timecode">[00:32:55]</i> **Ben:** And you would do similar for lunch and dinner. But okay! 

<i class="timecode">[00:33:01]</i> **Larry:** I remember reading that the `<section>` tag actually isn't any different to a `<div>` if you don't add on that label. Is that right? 

<i class="timecode">[00:33:11]</i> **Ben:** That's correct, yeah! It is not registered as a region landmark for assistive technologies until it has a quote-unquote "accessible name" — just, like, a label or a title — which you can get with aria-label, aria-labelledby, or the title attribute. But you have to have one of those three, otherwise it's not a meaningful landmark and it's more or less a `<div>`. Scott O'Hara had a wonderful article about that recently.

Get that into the chat… real quick and drop that in there.

In the meantime, what would be next for our little menu?

<i class="timecode">[00:33:54]</i> **Larry:** So… we could maybe put in something like our opening hours or something like that, just to make it feel a bit more like the menu. 

<i class="timecode">[00:34:06]</i> **Ben:** Yeah, totally! Alright. So some opening hours. Yeah.

`<h2>`, "Hours of Operation." And because why not, we're gonna make this another `<dl>`.

<i class="timecode">[00:34:29]</i> **Larry:** I think we've gotta check in Thufriday. 

<i class="timecode">[00:34:38]</i> **Ben:** You what? 

<i class="timecode">[00:34:41]</i> **Larry:** Check in Thufriday. 

<i class="timecode">[00:34:43]</i> **Ben:** Thufriday — yes! Yes, yes, yes, we do. Yeah, it's just gonna be closed every day except Thufriday. So this is Sunmonday, then…

<i class="timecode">[00:34:56]</i> **Larry:** You could get pretty complicated with timezones. 

<i class="timecode">[00:35:00]</i> **Ben:** Montuesday. Yeah! You know, it's important.

Tuewednesday. There we go. There we go…

We're gonna make this Thufriday. Weekend.

Howdy, howdy, lunchdev. Welcome to the party! We are doing some PDF goodness.

Alright, and then… this is also weekend. And we are only open Thufridays. Okay.

Cool, so we've got ourselves a nice little deal. And I'm realizing, this might have actually been a bit of a footgun because I don't know if PDFs have any semantics that correspond to the details list. So that might be interesting to see.

<i class="timecode">[00:36:05]</i> **Larry:** Well. Exactly. It will be interesting. So, what we can do… I could show you the quick way or the slow way.

<i class="timecode">[00:36:18]</i> **Ben:** Okay?

<i class="timecode">[00:36:20]</i> **Larry:** 'Cause I've created an Eleventy plugin that makes it a bit easier to sort of generate a PDF after the Eleventy build process happens.

<i class="timecode">[00:36:37]</i> **Ben:** Alright.

<i class="timecode">[00:36:38]</i> **Larry:** Maybe we can give the plugin a go, and then I could maybe talk through what it's doing.

<i class="timecode">[00:36:43]</i> **Ben:** Yeah!

<i class="timecode">[00:36:45]</i> **Larry:** So… the plugin is actually just on GitHub, so I might send you the link. 

<i class="timecode">[00:36:55]</i> **Ben:** Okay!

It's just on your GitHub, right? 

<i class="timecode">[00:37:07]</i> **Larry:** Yeah. So I've just sent that through in the Zoom chat. 

<i class="timecode">[00:37:13]</i> **Ben:** Yeah. I actually have closed that and I don't really wanna mess with my Zoom setup right now.

<i class="timecode">[00:37:20]</i> **Larry:** Yeah.

<i class="timecode">[00:37:21]</i> **Ben:** larryhudsondev… Is this your…?

<i class="timecode">[00:37:24]</i> **Larry:** Just larryhudson.

<i class="timecode">[00:37:26]</i> **Ben:** larryhudson, got it.

<i class="timecode">[00:37:27]</i> **Larry:** And then it's eleventy-plugin-prince-pdf. 

<i class="timecode">[00:37:41]</i> **Ben:** Okay. Alright, and let me stick that in the chat as well.

Here we are. 

Alright. So eleventy-plugin-prince-pdf, okay. 

<i class="timecode">[00:37:58]</i> **Larry:** So that's got installation instructions there. So, yeah, just passing in that GitHub URL works pretty well. 

<i class="timecode">[00:38:09]</i> **Ben:** Okie-doke!

And you know what? I actually… I used Yarn earlier, so let me use Yarn again.

<i class="timecode">[00:38:25]</i> **Larry:** Yep.

<i class="timecode">[00:38:31]</i> **Ben:** And… my computer will think about this!

<i class="timecode">[00:38:36]</i> **Larry:** Yeah.

<i class="timecode">[00:38:36]</i> **Ben:** So, this is using Eleventy in conjunction with Prince, and you mentioned earlier that Prince was the tool that converts your webpages — your semantic webpages, ideally — into tagged PDFs. 

<i class="timecode">[00:38:53]</i> **Larry:** Yeah.

<i class="timecode">[00:38:54]</i> **Ben:** Okay.

<i class="timecode">[00:38:55]</i> **Larry:** Yeah, so Prince is software that… it's a little expensive if you want to use it for commercial use, but there isn't really anything that I've found that is as reliable in generating accessible PDFs with those tags intact.

<i class="timecode">[00:39:20]</i> **Ben:** Okay.

<i class="timecode">[00:39:22]</i> **Larry:** There's an API service which uses Prince in the backend that's called DocRaptor. So while Prince, I think you have to pay something like $3,000 as a one-off fee—

<i class="timecode">[00:39:40]</i> **Ben:** Daaaang!

<i class="timecode">[00:39:40]</i> **Larry:** —that DocRaptor service, I think it's a monthly fee of $20 for a certain amount. Yes. So that might actually be more… yeah, more practical.

<i class="timecode">[00:39:59]</i> **Ben:** Gotcha, okay.

<i class="timecode">[00:40:00]</i> **Larry:** So yeah, we can start using that plugin.

<i class="timecode">[00:40:10]</i> **Ben:** Require, and then…

<i class="timecode">[00:40:15]</i> **Larry:** I think the way that Eleventy makes it possible to make these plugins is… I'm always really impressed with how Zach and the team have sort of thought out the sort of architecture of the Eleventy project.

<i class="timecode">[00:40:30]</i> **Ben:** Yes!

<i class="timecode">[00:40:31]</i> **Larry:** 'Cause I haven't really done any npm package development other than a couple of Eleventy plugins. And I just… yeah, it was such a nice experience—

<i class="timecode">[00:40:46]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:40:47]</i> **Larry:** —of being able to take functionality from your Eleventy config file and make it its own little package. I find it, yeah, really rewarding. 

<i class="timecode">[00:40:57]</i> **Ben:** Absolutely. Yeah, I just love that plugins really are just composable Eleventy configs. Like, that's incredible. The mental model there is so strong. 

<i class="timecode">[00:41:11]</i> **Larry:** Yeah, exactly!

So, when we add that plugin, we've gotta pass a sort of configuration object afterwards, and we need to tell the path of the webpage that we wanna convert to PDF.

<i class="timecode">[00:41:32]</i> **Ben:** Is that "path"…?

<i class="timecode">[00:41:33]</i> **Larry:** So, if you go back. Yeah, so "pathsToRender." That's an array.

<i class="timecode">[00:41:48]</i> **Ben:** Alright, and…

<i class="timecode">[00:41:50]</i> **Larry:** And each thing in that array is an object with "htmlPath" and an "outputPath."

<i class="timecode">[00:41:58]</i> **Ben:** So can I just do "/" for my index here? 

<i class="timecode">[00:42:05]</i> **Larry:** Yeah. Yeah, you can. 

<i class="timecode">[00:42:07]</i> **Ben:** "outputPath." I'm just gonna call this "menu.pdf." 

<i class="timecode">[00:42:13]</i> **Larry:** Yeah. Just check in the example. It might need a slash on the start. 

<i class="timecode">[00:42:21]</i> **Ben:** No, Opera, don't! Don't! It's too late!

Might need a slash on the… oh, okay. I see. 

<i class="timecode">[00:42:30]</i> **Larry:** Yeah. So, the way that Prince works, you give it a URL and in the sort of command line interface, it will go to that URL and generate a PDF.

<i class="timecode">[00:42:47]</i> **Ben:** Mmmmm.

<i class="timecode">[00:42:49]</i> **Larry:** So what this plugin is doing is sort of spinning up a temporary web server—

<i class="timecode">[00:42:57]</i> **Ben:** Okay.

<i class="timecode">[00:42:57]</i> **Larry:** —based off of your output folder ,and then going to that path that you provided there and generating a PDF there.

<i class="timecode">[00:43:06]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:43:08]</i> **Larry:** But I guess, the nice thing about Prince is that you can point it at any webpage. So… that means that it could pretty much fit into whatever sort of technical stack you use. It doesn't mean that you need to use Eleventy. I just found Eleventy was a nice, simple demo, I guess.

<i class="timecode">[00:43:33]</i> **Ben:** Okay. Very cool.

<i class="timecode">[00:43:34]</i> **Larry:** Yeah.

<i class="timecode">[00:43:35]</i> **Ben:** Alright.

<i class="timecode">[00:43:36]</i> **Larry:** So yeah, we can try running the build command. 

<i class="timecode">[00:43:40]</i> **Ben:** Yes, which I need to add to my package.json. I did not do that. But there we go. "build." This is gonna be "eleventy." And "dev." This is gonna be "eleventy --serve." How excited are you for the new…

How excited are you for the new Eleventy dev server? 

<i class="timecode">[00:44:12]</i> **Larry:** Yeah, I saw that! What are the main benefits of the new server? 

<i class="timecode">[00:44:17]</i> **Ben:** First of all, so the old server relied on — we'll have to take a look at that. The old server relied on Browsersync, which didn't work well for, like, if a page was not found, right? Like, it wouldn't hot-reload a 404. Also, it absolutely needed to have a `<body>` tag, which made it really difficult to, like, onboard new people into the body there.

<i class="timecode">[00:44:47]</i> **Larry:** Yeah.

<i class="timecode">[00:44:47]</i> **Ben:** I think this might actually be… me. Line 43, it says. 

<i class="timecode">[00:44:57]</i> **Larry:** Right.

<i class="timecode">[00:44:57]</i> **Ben:** Oh – is this…?

<i class="timecode">[00:45:01]</i> **Larry:** Oh, it might be line 43 of the plugin.

<i class="timecode">[00:45:06]</i> **Ben:** Okay.

<i class="timecode">[00:45:06]</i> **Larry:** Ohh. So it might be relying on your output folder, so maybe setting output in your configuration?

<i class="timecode">[00:45:23]</i> **Ben:** Okay. Output. I'm gonna send that to…

There we go. Okay. 

<i class="timecode">[00:45:31]</i> **Larry:** Yeah, let's try that again now.

<i class="timecode">[00:45:41]</i> **Ben:** There we go! Alright. We've got ourselves a very little PDF, which I should not be opening in VS Code.

Let me… pop this open in Finder, and then we'll take a look at the build here. Here we go. So it is coming up now.

What's up Travis? Good to see you! We've made ourselves a handy little PDF using Prince. I see it's got a little watermark, which is fun. But what's significant about this PDF, from what I understand, is that it's already been tagged with all the PDF-level semantics so that screenreader users, other assistive technology users can actually navigate this and get, like, semantics rather than just a bunch of text. 

<i class="timecode">[00:46:41]</i> **Larry:** Exactly! So maybe let's open that up in Acrobat and see what those tags look like.

<i class="timecode">[00:46:46]</i> **Ben:** Let's do it!

<i class="timecode">[00:46:49]</i> **Larry:** I'm interested to see what the `<dl>` tag comes out as. 

<i class="timecode">[00:46:54]</i> **Ben:** Yeah, it might not have worked.

<i class="timecode">[00:46:57]</i> **Larry:** Yeah.

<i class="timecode">[00:46:58]</i> **Ben:** Let's see. That's the little tags.

Ooh! Beachballin’!

<i class="timecode">[00:47:05]</i> **Larry:** So yeah, Prince will add a watermark for free use.

<i class="timecode">[00:47:16]</i> **Ben:** Mm.

<i class="timecode">[00:47:17]</i> **Larry:** So, I guess they allow you to use Prince for noncommercial use and to sort of test it out. So yeah, it's good for this sort of experimentation.

<i class="timecode">[00:47:32]</i> **Ben:** Yeah!

<i class="timecode">[00:47:33]</i> **Larry:** So what we are looking at here is the order panel, but maybe we can have a look at the tags panel.

<i class="timecode">[00:47:40]</i> **Ben:** Yes! Yes. Okay!

<i class="timecode">[00:47:44]</i> **Larry:** Right!

<i class="timecode">[00:47:45]</i> **Ben:** What is `<L>`?! I mean, that seems to be our `<dl>`. Oh — "list," right?

<i class="timecode">[00:47:49]</i> **Larry:** Yep.

<i class="timecode">[00:47:49]</i> **Ben:** `<L>` would be — it's treating it as probably a generic list. So list item, label, and list body? 

<i class="timecode">[00:47:59]</i> **Larry:** Yeah! So this is actually an interesting example. In PDFs, you don't have `<ul>` for unordered list, or `<ol>`. You have an `<L>` for a list tag, and then each list item has a label. If you did have a unordered list with bullets, I think the bullet symbol would come out as the label.

<i class="timecode">[00:48:28]</i> **Ben:** Ohh, interesting!

<i class="timecode">[00:48:30]</i> **Larry:** So in a way, this actually has presented the semantics in a pretty good way, I think.

<i class="timecode">[00:48:36]</i> **Ben:** Interesting!

<i class="timecode">[00:48:38]</i> **Larry:** Yeah. So, yeah. That's generating our PDF.

<i class="timecode">[00:48:46]</i> **Ben:** Okay. Also I'm noticing, like, `<h2>`s, so our heading level semantics get conveyed. Very neat. 

<i class="timecode">[00:48:54]</i> **Larry:** Yeah.

So, what we could do is add some sort of print-specific CSS.

<i class="timecode">[00:49:04]</i> **Ben:** Okay! Yeah!

<i class="timecode">[00:49:06]</i> **Larry:** So I'm just thinking probably having, like, columns?

<i class="timecode">[00:49:11]</i> **Ben:** Okay. Yeah.

<i class="timecode">[00:49:12]</i> **Larry:** But we could also… there are specific CSS rules that Prince relies on, sort of like specific CSS keywords that can affect the Prince output. So, we can add some CSS maybe in just a `<style>` tag or…

When you add a `<style>` tag, can you say a media query so that it's just the print media query?

<i class="timecode">[00:49:54]</i> **Ben:** Let's see if we can add… 

Hang on. Is that it? Will that do it? Hang on! Hang on!

"Style tag media attribute." Don't lead me astray, DuckDuckGo!

<i class="timecode">[00:50:19]</i> **Larry:** Hoping MDN has something. 

<i class="timecode">[00:50:22]</i> **Ben:** W3Schools is the first that's come up.

Hey, look at that! Okay! Interesting! Hey. Like, I knew you could, when you link a style— almost knocked over my drink! When you link a stylesheet in, you can say, like, media="print," so it's good to know that you can do that for `<style>` tags as well. That makes proving this out a little easier. Okay.

<i class="timecode">[00:50:43]</i> **Larry:** Yeah.

<i class="timecode">[00:50:43]</i> **Ben:** So we've got print-specific styles. 

<i class="timecode">[00:50:46]</i> **Larry:** Yeah. So I might send you a link. So, Prince's documentation… if you go to princexml.com?

<i class="timecode">[00:51:01]</i> **Ben:** Yes.

<i class="timecode">[00:51:02]</i> **Larry:** They've got some pretty good documentation on what's in CSS. This is called paged media. So they they've got some pretty good guidelines on how to sort of lay things out in the PDF. But most of the regular CSS that you might use will probably… it's pretty consistent how it comes through to the PDF.

<i class="timecode">[00:51:38]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:51:38]</i> **Larry:** So you could probably lay out columns similar to how you would do it in HTML.

Okay!

So you could use… I don't think CSS grid works just yet, but I know that flexbox does, in terms of layout. And then we can have a look at that paged media.

<i class="timecode">[00:52:08]</i> **Ben:** Yeah. "flex-direction: row," I guess? I actually don't do a whole lot of grid without grid.

Cool.

Yeah, I'll spin up the dev server, I suppose. Play around with this. 

<i class="timecode">[00:52:30]</i> **Larry:** Yeah. So that's the other nice thing about Eleventy. The PDF will regenerate each time you make a change to a source file.

<i class="timecode">[00:52:42]</i> **Ben:** Ooooh.

<i class="timecode">[00:52:43]</i> **Larry:** So, because I'm attaching to after Eleventy's build process, you get this sort of nice experience of making changes while developing and having it regenerate.

<i class="timecode">[00:53:00]</i> **Ben:** That's very cool. Eleventy's a great fit for that. Love that workflow.

<i class="timecode">[00:53:05]</i> **Larry:** Yeah.

<i class="timecode">[00:53:07]</i> **Ben:** It's thinking about those print styles.

Okay, it is nasty. But you know what I'm actually gonna do is, I'm gonna go in and add in some `<div>`s into my `<dl>`s here.

<i class="timecode">[00:53:27]</i> **Larry:** Would you want the sections to be columns?

<i class="timecode">[00:53:33]</i> **Ben:** Oh, so like, we have the menu on the left. I see, I see. Yeah! What do you think the best way to do that is? 

<i class="timecode">[00:53:45]</i> **Larry:** Hmm, we could do a container around the sections. 

<i class="timecode">[00:53:51]</i> **Ben:** Yeah. class="container".

Alright. Pull that out.

Travis is advocating for Bedrock Layout. He's absolutely right, of course.

Okay. Container, display: flex.

<i class="timecode">[00:54:21]</i> **Larry:** So… if you hyperlink to the PDF in the HTML, we could actually click on it and have it open in Chrome.

<i class="timecode">[00:54:31]</i> **Ben:** Ooooh, okay. Yeah! Yeah, yeah, yeah. 

<i class="timecode">[00:54:33]</i> **Larry:** Rather than having to look at the print preview, yeah.

<i class="timecode">[00:54:39]</i> **Ben:** Footer… href…

This is gonna be… we called it menu.pdf. I'll put "Download PDF." I'll be very explicit there.

<i class="timecode">[00:54:55]</i> **Larry:** Yeah!

<i class="timecode">[00:54:56]</i> **Ben:** This should do it. Let it kinda redownload there, but okay. 

<i class="timecode">[00:55:03]</i> **Larry:** So, and one more thing that we could do is maybe add a class to that download link so that it doesn't show up in the print version.

<i class="timecode">[00:55:12]</i> **Ben:** Okay! Is there…?

<i class="timecode">[00:55:14]</i> **Larry:** So…

<i class="timecode">[00:55:14]</i> **Ben:** Is there a specific class for that?

<i class="timecode">[00:55:16]</i> **Larry:** Yeah, maybe making a class.

<i class="timecode">[00:55:18]</i> **Ben:** Okay.

<i class="timecode">[00:55:19]</i> **Larry:** So maybe if we made, like, a utility class, which is, like, "print-hidden" or something. Yeah, something like that.

<i class="timecode">[00:55:27]</i> **Ben:** Okay!

<i class="timecode">[00:55:28]</i> **Larry:** Then all we'd need to do is just "display: none."

<i class="timecode">[00:55:36]</i> **Ben:** Cool. Alright. The PDF doesn't hot-reload though, right? 

<i class="timecode">[00:55:41]</i> **Larry:** Uh, no, so you'll need to… I think you can just hit refresh.

<i class="timecode">[00:55:46]</i> **Ben:** Okay.

It's not the world's prettiest thing, but okay. 

<i class="timecode">[00:55:58]</i> **Larry:** So we could maybe use the "space-between" with the "justify-content" property on the flex container.

<i class="timecode">[00:56:10]</i> **Ben:** "justify-content: space-between." Okay. 

Just give this an old refresh.

Nice, okay! Very exciting.

<i class="timecode">[00:56:32]</i> **Larry:** Yeah, so you can sort of see how Prince is using the CSS to lay out the page, which is pretty nice coming from… I guess the majority of my work is taking documents that are Microsoft Word or Adobe InDesign and making accessible PDFs, so it's quite refreshing to use CSS to actually lay out print documents. Yeah, I'm a big fan of it.

So, I guess one more thing, just to sort of demonstrate what Prince can do would be maybe adding, like, a page number at the bottom.

<i class="timecode">[00:57:14]</i> **Ben:** Yeah.

<i class="timecode">[00:57:16]</i> **Larry:** I guess we don't really need a page number here, but maybe we could just add some content to the footer, maybe just to… I don't know, maybe to…

I'm trying to think of content that you would want in the PDF that you wouldn't need on the webpage.

<i class="timecode">[00:57:41]</i> **Ben:** How about some lorem ipsum?

<i class="timecode">[00:57:45]</i> **Larry:** <i class="brackets">[chuckles]</i> Beautiful. Yeah!

<i class="timecode">[00:57:52]</i> **Ben:** Paragraph around this. 

Alright, so we want this to show up in the PDF, but we don't want it to show up on the website. 

<i class="timecode">[00:58:07]</i> **Larry:** Well, well, I'm thinking. You know, something like a page number in the bottom corner of a PDF…

<i class="timecode">[00:58:16]</i> **Ben:** Ohhh, okay, yeah.

<i class="timecode">[00:58:18]</i> **Larry:** …is something that… I guess it's not that relevant when you've got a one-page PDF.

<i class="timecode">[00:58:25]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:58:25]</i> **Larry:** And in a way, you wouldn't wanna hide content on one version, so maybe in this case we don't really need to add anything…

<i class="timecode">[00:58:37]</i> **Ben:** Yeah.

<i class="timecode">[00:58:38]</i> **Larry:** …that is PDF-specific. But that "paged media" page on the Prince documentation is a sort of a good intro to how you would use those CSS keywords to add page numbers at the bottom. You can also, if your document includes a bunch of, say, heading level two sections, you could set the current sort of section title and have that in the footer—

<i class="timecode">[00:59:16]</i> **Ben:** Oooh!

<i class="timecode">[00:59:17]</i> **Larry:** —just, if you were making something that was a bit more like a book, I guess. 

<i class="timecode">[00:59:21]</i> **Ben:** Okay, yeah! Yeah, already starting to think about this in terms of, like, ebooks. That would be very neat. 

<i class="timecode">[00:59:27]</i> **Larry:** Yeah. Yeah. So, I've made an example repo to sort of demonstrate this way of doing things.

<i class="timecode">[00:59:39]</i> **Ben:** Okay!

<i class="timecode">[00:59:40]</i> **Larry:** Which, in Eleventy, the content is in separate Markdown files, and then they're generating separate webpages. But then the PDF pulls in those separate content sections into the one PDF. So it might be worth linking to that. 

<i class="timecode">[01:00:03]</i> **Ben:** Yes. Do you have a link to that?

<i class="timecode">[01:00:06]</i> **Larry:** Yeah. So, that'll be in my GitHub. Might even be that same… yeah, 11ty-prince-pdf-example.

So, what that sort of taking advantage of is in Eleventy makes it possible to write your content in one place and then actually generate multiple output files.

<i class="timecode">[01:00:43]</i> **Ben:** Okay, yeah.

<i class="timecode">[01:00:44]</i> **Larry:** So, what that's doing is, you've got separate output pages for the separate sections of the content, but then there's another template which is just called "pdf-content."

<i class="timecode">[01:01:05]</i> **Ben:** Okay.

<i class="timecode">[01:01:05]</i> **Larry:** And that's the webpage that becomes the PDF.

<i class="timecode">[01:01:09]</i> **Ben:** Mmmm!

<i class="timecode">[01:01:10]</i> **Larry:** So, yeah, I can quickly show you how that works together.

<i class="timecode">[01:01:21]</i> **Ben:** Once we install the entirety of Node.

<i class="timecode">[01:01:26]</i> **Larry:** 10,000 dependencies. It's funny how… I dunno, we try to make simple things using the web, and then there's actually 10,000 individual little packages that are…

It's a little bit of a house of cards, but…

<i class="timecode">[01:01:48]</i> **Ben:** Yeah!

<i class="timecode">[01:01:48]</i> **Larry:** It means that we can, you know, think about the bigger picture stuff, I guess.

<i class="timecode">[01:01:52]</i> **Ben:** Mm-hmm. All right. 

<i class="timecode">[01:01:55]</i> **Larry:** Just try not to think about it. 

<i class="timecode">[01:01:59]</i> **Ben:** Well, and also, like, I'm okay adding, like, that complexity when it comes to the, like, backend. It's once we start, like, pushing that complexity to the frontend, like the client, that I start to get much more nervous. 

<i class="timecode">[01:02:13]</i> **Larry:** Yeah, exactly!

Eleventy makes it so easy to just, yeah, ship that plain sort of HTML. Ideally, you'd probably have a little bit more styling than what we've included, but…

<i class="timecode">[01:02:30]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:02:31]</i> **Larry:** Keeping it simple is always good.

So if you have a look in that src folder there. 

<i class="timecode">[01:02:42]</i> **Ben:** Yeah.

<i class="timecode">[01:02:43]</i> **Larry:** So, you'll see…

<i class="timecode">[01:02:50]</i> **Ben:** There we are.

<i class="timecode">[01:02:54]</i> **Larry:** Those Markdown files are the content.

<i class="timecode">[01:02:57]</i> **Ben:** Okay.

<i class="timecode">[01:02:58]</i> **Larry:** And then that pdf-content.njk file is sort of pulling in those separate content pages and rendering them in this one page. So if you've got that dev server running…

<i class="timecode">[01:03:24]</i> **Ben:** Yes.

<i class="timecode">[01:03:24]</i> **Larry:** …you could actually have a look at what that output looks like.

<i class="timecode">[01:03:30]</i> **Ben:** You got it! Alright, so I'll refresh this, 'cause we're on 8080 again. And then…

<i class="brackets">[faint meow from cat]</i>

…download PDF.

<i class="timecode">[01:03:41]</i> **Larry:** Yeah.

<i class="timecode">[01:03:41]</i> **Ben:** Hi, Tuna! Welcome! Welcome to the stream, buddy. My cat is here. 

Alright! Ooh, okay, okay! So…

<i class="timecode">[01:03:56]</i> **Larry:** Yeah.

<i class="timecode">[01:03:56]</i> **Ben:** You can see you've got a bit of the pagination going on.

<i class="timecode">[01:04:00]</i> **Larry:** Yeah.

<i class="timecode">[01:04:02]</i> **Ben:** Every individual piece of content, each of those Markdown files has made its way in here, which is great. 

<i class="timecode">[01:04:09]</i> **Larry:** Yeah. And it's setting the current section title to use in the bottom left corner.

So yeah. Prince has this sort of… I like how it sort of extends CSS in a way. It's not making you do things in a completely different way.

<i class="timecode">[01:04:31]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:04:32]</i> **Larry:** It's quite sort of friendly if you're comfortable with CSS.

Just at the top of that document, I've got a table of contents which includes page numbers. So, what Prince is doing there is — those hyperlinks are linking to an ID in the HTML, and Prince is getting the page number of the target and then using it in the rendered PDF.

So, if you go back into VS Code, you could have a look at the CSS file there. 

<i class="timecode">[01:05:24]</i> **Ben:** Yes. That is the…

Alright, yeah. So… peek at the… oop, that's extensions.

Welcome back, Tuna.

Okay. CSS. Print?

<i class="timecode">[01:05:46]</i> **Larry:** Yeah.

So I've got a couple of sort of utility classes there to make sure that the heading level twos have a page break before them.

<i class="timecode">[01:06:03]</i> **Ben:** Alright.

<i class="timecode">[01:06:04]</i> **Larry:** And yeah, it looks a little sort of funky, the syntax that they end up using. But what it's doing is it's setting sort of a variable which has the name "doctitle" there, and then you can use that elsewhere.

<i class="timecode">[01:06:28]</i> **Ben:** Okay?

<i class="timecode">[01:06:29]</i> **Larry:** It's setting the "doctitle" variable with the content—

<i class="timecode">[01:06:35]</i> **Ben:** Ohhhh!

<i class="timecode">[01:06:38]</i> **Larry:** —of the element with the ID "doctitle." 

<i class="timecode">[01:06:43]</i> **Ben:** Got it, okay!!

<i class="timecode">[01:06:45]</i> **Larry:** Yeah!

<i class="timecode">[01:06:45]</i> **Ben:** 'Cause we have right here, you have an `<h1>` with ID "doctitle." And then in here, you're saying take that `<h1>` with that ID and use its text contents as a Prince variable "doctitle" that we'll get to use. Okay. Okay!

<i class="timecode">[01:07:06]</i> **Larry:** Yeah.

<i class="timecode">[01:07:07]</i> **Ben:** Interesting. 

<i class="timecode">[01:07:09]</i> **Larry:** And here you scroll up a little, the TOC links where it says "target-counter."

<i class="timecode">[01:07:20]</i> **Ben:** Yeah.

<i class="timecode">[01:07:23]</i> **Larry:** It's sort of taking the href attribute of that hyperlink and getting the page number on that ID—

<i class="timecode">[01:07:37]</i> **Ben:** Mmmm.

<i class="timecode">[01:07:37]</i> **Larry:** —that it's connected to. So yeah, this can be a little confusing if you're not familiar with it. But, yeah, the Prince documentation has some really good examples for sort of getting started with this sort of extra level of customization.

<i class="timecode">[01:07:56]</i> **Ben:** Yeahhhh, okay! 

<i class="timecode">[01:07:59]</i> **Larry:** Yeah. I think the thing that I'm trying to move towards is being able to write content in one place—

<i class="timecode">[01:08:11]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:08:12]</i> **Larry:** —and make a website and a PDF from the same content, and making the most of the user experience sort of benefits of making a website.

<i class="timecode">[01:08:25]</i> **Ben:** Yes!

<i class="timecode">[01:08:26]</i> **Larry:** So this example website uses a media query to check if you prefer a dark color scheme. And it uses just little things like if you're on a mobile screen, the navigation will stay fixed to the top of the screen. So little things like that—

<i class="timecode">[01:08:52]</i> **Ben:** Yeah!

<i class="timecode">[01:08:53]</i> **Larry:** —make a webpage a better experience, so we wanna, like, make the most of that while still offering a print version. That's the sort of direction I'd like to head in.

<i class="timecode">[01:09:06]</i> **Ben:** You mentioned, like, the developer experience of building websites, and, like, it occurs to me that kind of a big thing these days is, like, deploy previews, for instance, is a great Netlify feature, right? For anyone who's unaware, like, you have your project hooked up to, like, Netlify and anytime you push up a branch and open a pull request, Netlify spins up a version of the site, like, specific to that branch or to that commit. So if your PDFs are tied… like, generated from the webpages — like, generated from that content — now every deploy preview generates a PDF specific to the web contents, and so yeah, now just, like, your PDF changes in sync with your website's Git source control. That is incredibly cool. Man!

<i class="timecode">[01:10:02]</i> **Larry:** Yeah!

<i class="timecode">[01:10:03]</i> **Ben:** Like, if we're doing a restaurant menu, right? You push up a change to the menu, and the PDF updates at the same time. That's so cool! 

<i class="timecode">[01:10:13]</i> **Larry:** Yeah. Exactly. So you sort of get those things for free in a way, when you are fitting tools into the static site generation and the deploy previews that Netlify give you. So if you're going in this way anyway, you get those experience sort of goodies for free, which is pretty cool. 

<i class="timecode">[01:10:40]</i> **Ben:** Absolutely! Wow! Okay.

<i class="timecode">[01:10:41]</i> **Larry:** Yeah.

<i class="timecode">[01:10:42]</i> **Ben:** Very neat. 

<i class="timecode">[01:10:43]</i> **Larry:** I'm one other thing that I'm sort of excited about is Eleventy has made it possible to run Eleventy programmatically, so running Eleventy as a part of a bigger… maybe a Node project, maybe a web interface that is backed by some other CMS or something like that, where you can publish Eleventy sites, programmatically and incorporate the PDF output into that, so building a bit of like a, sort of a document website publisher sort of thing.

<i class="timecode">[01:11:30]</i> **Ben:** Mm-hmm.

<i class="timecode">[01:11:31]</i> **Larry:** It becomes a lot more possible when, yeah, when Eleventy is this flexible. Yeah, it opens up those possibilities, which is really cool. 

<i class="timecode">[01:11:43]</i> **Ben:** Absolutely.

<i class="timecode">[01:11:44]</i> **Larry:** Cool.

<i class="timecode">[01:11:45]</i> **Ben:** Excellent! Is there more you wanted to show off, Larry? 

<i class="timecode">[01:11:49]</i> **Larry:** I think that's pretty much it for this demo, yeah!

<i class="timecode">[01:11:52]</i> **Ben:** Okay. Well, excellent. Thank you so much for showing this off. This is incredibly cool. And instantly, I'm like, "I need to start, like, making PDFs of my blogposts," because obviously people need PDFs of blogposts.

<i class="timecode">[01:12:05]</i> **Larry:** Cool.

<i class="timecode">[01:12:07]</i> **Ben:** Yeah, just, when the tools make things this easy, like, why not, you know?

<i class="timecode">[01:12:14]</i> **Larry:** Yeah.

<i class="timecode">[01:12:14]</i> **Ben:** Just incredibly cool, so thank you so much.

Yeah, I'm gonna go ahead and recommend people follow you on Twitter, @larryhudsondev.

<i class="timecode">[01:12:31]</i> **Larry:** That's it!

<i class="timecode">[01:12:32]</i> **Ben:** Go give Larry that Some Antics love.

Yeah, Michael Chan in the chat is saying that this is, like, a killer fit for an ebook, and absolutely. Very cool.

Are there other things that you're working on, things you wanna promote while you're on? 

<i class="timecode">[01:12:53]</i> **Larry:** I don't have too much to promote. I'd like to say, like, thank you for being so welcoming. And Chan as well, in the Lunch Discord. Everyone's been so welcoming. I'd recommend, if there are viewers here that haven't tried getting involved in the Discord communities, so Lunch.dev and also the Frontend Horse communities, they're just really lovely, wholesome places to hang out and, like, talk about web stuff. And even, yeah, I've just been so impressed with the sort of community-building stuff that's going on. 

<i class="timecode">[01:13:34]</i> **Ben:** Awesome. Well, thank you so much for being here, Larry. And thank y'all for being here as well. We had a nice homely little chat going on. And stick around. We are gonna find someone to raid.

Also, next Tuesday at 1pm Central, so an hour before our normal time, we're gonna have Patrick Hulce on. Patrick is the creator of Lighthouse CI, and he is going to be talking to us about debugging web performance. So super excited for that one.

And yeah! Thank y'all for being here. Have a great rest of your Thufriday! Bye, y'all!

<i class="timecode">[01:14:25]</i> **Larry:** Awesome.