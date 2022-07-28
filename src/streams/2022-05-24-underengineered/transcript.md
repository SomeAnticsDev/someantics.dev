<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Tuesday. Welcome back to Some Antics. Today, I am joined by the one and only Adrian Roselli. Adrian, hello! Welcome to the stream! 

<i class="timecode">[00:00:12]</i> **Adrian:** Hi there! Thank you, and it's lovely to be in this stream. 

<i class="timecode">[00:00:16]</i> **Ben:** It's lovely to have you. I mentioned, like, on Twitter ahead of time that when I was starting my accessibility journey, like, finding your blogs was one of the things that was, like, really, really instrumental to my understanding of accessibility and even to this day, like, my approach to a lot of accessibility concerns, so I'm kind of geeking out, actually, a little having you on the stream. \so I'm super excited to have you on,. For folks who haven't seen you around the interwebs yet, would you like to introduce yourself? 

<i class="timecode">[00:00:48]</i> **Adrian:** Um, sure! You know, one of the things I've never been good at is an elevator pitch. So at a high level, hi, I'm Adrian Roselli. You might have— you might recognize me from way back in the late '90s, running evolt.org as one of the co-owners, groupers, whatever of it, or being grumpy on my own blog or being really loud and annoying on Twitter or doing assorted conferences, talks, books, magazine articles, and so on. And if you've never heard of me then, yay, good for you. That's pretty much it. Oh, oh, and I have been an independent contractor, or at least ran my own business, for pretty much 25 years of my career, including this time that I've been writing all of these posts as well, so a lot of the stuff I've written about has been informed by interactions with clients and projects.

<i class="timecode">[00:01:46]</i> **Ben:** Absolutely. And your work always seems to, like, really just focus in on the, like, underlying, like, HTML fundamentals, like getting a strong semantic foundation there, and then, like, careful, cautious use of ARIA is a big one as well.

<i class="timecode">[00:02:06]</i> **Adrian:** Yeah.

<i class="timecode">[00:02:07]</i> **Ben:** So… yeah, do you want to kind of describe, like, what kind of stuff do you like writing about? Like, what DO you tend to blog about? 

<i class="timecode">[00:02:14]</i> **Adrian:** Yeah, I tend to blog about things that have made me angry. I mean, that's the simplest way to put it. And it's not quite accurate. Sometimes I'll blog about some silly thing I discovered or some new idea that I want to try out. But a lot of my deeper dives are a function of me having had so many conversations and so many fights with clients and so on that I'm tired of repeating myself, and it's easier just to write it all up. Write up all those edge cases, all those corner cases, all those scenarios, and then put it out there. And one thing about the internet that I love is if you don't know something, you're not necessarily going to get good answers when you ask, but if you write about it, holy crap! Everybody's going to weigh in!

<i class="timecode">[00:03:06]</i> **Ben:** Yeah!

<i class="timecode">[00:03:06]</i> **Adrian:** So one of my favorite things about the blogging approach is I write something and it goes through sort of a de facto peer review. 

<i class="timecode">[00:03:15]</i> **Ben:** Yeah!

<i class="timecode">[00:03:16]</i> **Adrian:** People will come up and say "It doesn't work in here" or "I do it this way or "My client wouldn't allow it that way," and that makes for some really interesting conversations and forces me to sort of conceptualize other ways these things might work that I just glossed over when I was writing about it.

<i class="timecode">[00:03:34]</i> **Ben:** I feel like there was one of those adages of the internet that was… what is it? Like, the fastest way to get the correct answer on the internet is to post the wrong answer and wait to be corrected. 

<i class="timecode">[00:03:46]</i> **Adrian:** That's pretty much how I live my life, yeah. 

<i class="timecode">[00:03:49]</i> **Ben:** But that, like, leaning into that a bit for the blog, right, to be like, "Here's what I've found has worked in my case" allows folks to, like, come out of the woodworks, as it were, to be like, "Well, that might be a strong start, but you know, in this other context I've been in, I found that this was actually necessary or we had to do things slightly differently."

<i class="timecode">[00:04:12]</i> **Adrian:** Yeah. Yeah, and what I think is really critical about that in the context of accessibility is accessibility is not a technical thing. I mean, there's so much technical that goes on behind it — the HTML you choose, whether or not you apply ARIA, which version of JAWS you're running with which virtual version of internet Explorer. All of that is ultimately moot because accessibility is really about people. So all of these technical solutions, if you fall in love with them… well, you're making a huge mistake, because in six months — hell, in six weeks considering browser release cycles — everything that you thought was true could be different because a new bug gets introduced, a new feature is released.

<i class="timecode">[00:04:52]</i> **Ben:** Absolutely.

<i class="timecode">[00:04:53]</i> **Adrian:** So yeah, having that flexibility to know that it's going to change, I think is really crucial to doing this work.

<i class="timecode">[00:05:00]</i> **Ben:** Awesome. Well… for anyone who's looking, like, under and sees the title of the stream, I've got the word "Underengineered," and that's because I've kind of brought you on to talk a bit about my favorite series that you've done, which is your Under-Engineering series. Do you want to— can you kind of talk about, like, what that is?

<i class="timecode">[00:05:20]</i> **Adrian:** Yeah. At a high level, it is me trying to find the absolute simplest way to do something with the smallest amount of code — simplest, smallest HTML; minimum CSS; absolute minimum JavaScript, which is different than no JavaScript — and still make it both usable and accessible.

<i class="timecode">[00:05:44]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:05:44]</i> **Adrian:** And the advantage to that is I think it's a good way to demonstrate some of the free things that come with the platform and also show some of the gaps that exist when you don't use those free things, when you try to recreate them from scratch. And I still update these posts when I can. I still discover new and exciting things or stuff I failed to write about. I just updated one of these posts because the way to dismiss a native select menu on mobile is a particular gesture. It's basically the escape gesture. Like on Android with Talkback, it's swipe down and left, and on iOS with VoiceOver it's zed — Z. And if you do that, when a select menu is open, cool, it closes and you continue living your life on that page. But if you do it with a custom select, an ARIA listbox or whatever, it moves you back in the browser history.

<i class="timecode">[00:06:38]</i> **Ben:** Mmmm!

<i class="timecode">[00:06:39]</i> **Adrian:** And that's that kind of little, tiny nuance that is lost until you start really sitting down and comparing these things apples-to-apples and check those interactions. Again, the ARIA might be perfect, the CSS might be perfect, everything might be there, but there's still some core fundamental differences that you have to take into account and at least test. 

<i class="timecode">[00:07:01]</i> **Ben:** Absolutely. Yeah, in fact, let me, I guess, start showing off the different articles that you've written, 'cause there's a whole series here. So it started with your, like, "Custom Radio Buttons and Checkboxen," but there's… 

<i class="timecode">[00:07:17]</i> **Adrian:** That's five years ago! 

<i class="timecode">[00:07:19]</i> **Ben:** Yeah! Toggles… toggles the sequel… textboxes. Responsive tables. This one was a good one for— an important one for me, because in my previous role, I was working on a bank account transaction history page. So, like, you log into your account. You go to, like, your checking account or whatever. You see all the transactions that have ever landed there. And that page was one big data table, and it needed to work across all sizes. And we had a fairly overengineered, I think, approach to tables that would change the whole layout at, like, mobile sizes, stuff like that. So, like, you're meeting, like, real engineers' needs for, like, real, complex sites.

Do you have any particular favorites of these, or any one that you'd like to, like, spend some time looking at? 

<i class="timecode">[00:08:13]</i> **Adrian:** I think probably my favorite is the "Under-Engineered Textboxen."

<i class="timecode">[00:08:19]</i> **Ben:** Okay!

<i class="timecode">[00:08:20]</i> **Adrian:** 'Cause that one — and it addresses textareas and text inputs — because that one is about as simple as it gets. Lots and lots of sites have text fields, and the CSS that you need in order to make it better is really three lines. And it could be so much more — I mean, it could be so much less — if browsers natively inherited this stuff.

<i class="timecode">[00:08:46]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:08:47]</i> **Adrian:** But I mean, for a textarea and input, having "font: inherit" means it pulls in the size, the family, the style, any variants, any weights, et cetera. Even the line height, which I think is pretty cool. You still have to add letter-spacing and word-spacing to inherit just in case, for some reason, those have been changed by you or the user. But right off the bat, your textareas and your text fields are easy to make adapt to your site design. And I keep seeing CSS resets that don't include some of these fundamental styles that really simplify how much work you'd have to do.

<i class="timecode">[00:09:31]</i> **Ben:** Absolutely. Yeah, there's just so little to this, but like, yeah, instantly, like, this one already feels like it fits the branding a lot better, the size…

All just easy to just drop into a reset.

<i class="timecode">[00:09:46]</i> **Adrian:** Yeah. And then I try to build on it. 

<i class="timecode">[00:09:49]</i> **Ben:** So what is this trying to do here? You've got a whole…

<i class="timecode">[00:09:55]</i> **Adrian:** Yeah, that's not the prettiest selector in the world, of course. But this one is, what, from 2019? In 2019, I still had clients using IE11. Some larger financial institutions were still standardized back then on Internet Explorer 11. I was like, "Okay, so if I want them to be comfortable with this and be able to drop it into their applications, my selector needs to support that without blowing up," and IE11 didn't support multiple attribute selectors within a :not selector.

<i class="timecode">[00:10:30]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:10:30]</i> **Adrian:** I hope that sentence made sense in context. Weird to say.

So, you know, I build this complex selector and then I start to do things like make the borders a little cleaner, give it a little bit of space inside. And then I continue to layer stuff on top of that for different states. You know, how does it work when it's an error? How does it work when it's read-only, which why are you using that? How does it work when you're in Windows High Contrast Mode? Basically try to — focused, that's a great one — try to not necessarily tell you this is how you should do yours.

<i class="timecode">[00:11:08]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:11:08]</i> **Adrian:** Like, don't take my styles. My styles are, you know, not pretty. But what they do is they show you the fundamental steps that YOU can take to layer on these features for these considerations while also, I think, delineating the different considerations and states that you have to work through. 

<i class="timecode">[00:11:28]</i> **Ben:** Yeah! And what I see here, like, you're using some of my favorite tricks here, which is, like, using ARIA states or just even the, like, native, like, HTML attributes in general as part of your selectors. Because I've definitely seen, like, the alternative to this is like, oh, whenever you set aria-invalid="true", you also add a class that's, like, "invalid" class or whatever. And you're kind of collapsing those into, like, one selector there. 

<i class="timecode">[00:11:56]</i> **Adrian:** Yeah, and that's partly because I always want to make sure that my programmatic state — in this case, it's coming from ARIA, but can come from other things — I want my programmatic state to drive the styles because there's less of a risk that they will ever fall out of sync that way.

<i class="timecode">[00:12:13]</i> **Ben:** Mm-hmm. Absolutely.

<i class="timecode">[00:12:16]</i> **Adrian:** I hope. 

<i class="timecode">[00:12:18]</i> **Ben:** Yeah! And so, what you've demonstrated here, right, with this post… like, even just something as, like, seemingly simple as a textbox, is you've taken, like… things that developers actually need to do, which is have a, like, reasonable-looking textbox, and you've shown them that they don't have to, like, boil the entire ocean to get, you know, something that's flexible. You've got, like, right-to-left stuff, like, baked in just kind of out of the box. Stuff like that. Like, I just— I love that. And then you build up to "Here's how you do more and more complex things." Like, "here's how you go beyond just the basics. 

<i class="timecode">[00:13:00]</i> **Adrian:** Yeah. You know, so it got me thinking. I think at the bottom of one of my toggles posts has almost a checklist. Let me… let me look on one of my screens. Yeah, "Under-Engineered Toggles," there should be a bullet list at the bottom. Before the August 2019 update. And the reason I'm calling your attention to that — yeah, "What this post covered." So, I think it took me, you know, two years to bother putting together this quick list of the things that I'm considering when I'm putting together a control. 'Cause I didn't break it down as a list. Like, in the 2017 posts, I didn't make this list. I covered all these things, but I didn't break it down as a list.

But here, I have things like making sure you're supporting disabled controls. For checkboxes, supporting mixed state. I talk about the different WCAG Success Criteria. Windows High Contrast Mode, which is now "contrast themes" in Windows 11, which is now… for which, on the standard track, is "prefers-forced-colors" or just "forced-colors." Brainfart there. But sort of leaning into that, so here's some styles and considerations there. Reduced motion… color scheme. I talk about roles to avoid. One of the things that I find a lot of developers tend to forget about, though, are things like right-to-left languages or basically any non-western/English language. And that's from my background doing localization work.

<i class="timecode">[00:14:39]</i> **Ben:** Mm-hmm!

<i class="timecode">[00:14:39]</i> **Adrian:** And also print styles.

<i class="timecode">[00:14:41]</i> **Ben:** Yes!

<i class="timecode">[00:14:42]</i> **Adrian:** Because I have watched people print forms. To fill them out.

<i class="timecode">[00:14:46]</i> **Ben:** Yeah!

<i class="timecode">[00:14:47]</i> **Adrian:** To take them to their parents to fill out, to then bring back to type into the computer. 

<i class="timecode">[00:14:51]</i> **Ben:** Mm-hmm. Yeah, absolutely. And… yeah, this is stuff that, like, developers miss these a whole lot, right? Or they'll get, like, you know, maybe five of these, but they won't have all of them, right? 

<i class="timecode">[00:15:09]</i> **Adrian:** Yeah, and I don't even have all of them there. And I think it's totally fair for developers to miss them because if they're not doing this day-to-day…

<i class="timecode">[00:15:18]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:15:19]</i> **Adrian:** …how are they necessarily going to remember to do it?

<i class="timecode">[00:15:22]</i> **Ben:** Yeah!

<i class="timecode">[00:15:22]</i> **Adrian:** You know, do they have a checklist that says, "Hey, as soon as you start to build a custom thing, here's the stack of stuff you need to consider, here's what you need to walk through"? And a lot of them, from my experience, don't. They are spinning up…

They're grabbing a basic Material pattern, and then they are addressing that or modifying it or tweaking it in some way.

<i class="timecode">[00:15:43]</i> **Ben:** Yeah.

<i class="timecode">[00:15:43]</i> **Adrian:** Which leads to a ton of potential problems that way. So having this kind of checklist, at least for me, is very helpful when I start to build because I'm not going to forget something.

<i class="timecode">[00:15:54]</i> **Ben:** Yes.

<i class="timecode">[00:15:54]</i> **Adrian:** It's really easy to forget even this list, which I consider to be relatively short.

<i class="timecode">[00:15:58]</i> **Ben:** Yeah, and like, my own personal experience, like, I'm staring the words "Windows High Contrast Mode" dead in the eyes because, you know, for the first few years of my career, I did nothing with high contrast mode. I wasn't even really, like, aware it existed, and I considered myself, you know, pretty solid when it came to accessibility stuff. And so I think maybe some, like, repeat viewers here will know that I've started to do a little more with, like, explicitly showing off high contrast mode and forced colors mode because that was a gap in my own knowledge. And so even just seeing it in a checklist like this makes me as a developer go, "Wait, what is that? Is this something I need to be handling? Is this something I need to look into?" Which I love. I don't think there are enough resources out there that call attention to things like forced colors mode. 

<i class="timecode">[00:16:48]</i> **Adrian:** I tend to agree. I also was a fan of CSS system colors way back in the '90s, because we were building applications, we were building web-based applications that were supposed to look like Win32 applications because our clients were nervous entering their truck— you know, shipping companies, for example, were nervous entering their truck information and driver information into a webpage, but if you made it look like a Windows 32 form from system colors, they'll just happily type away without a care in the world.

<i class="timecode">[00:17:22]</i> **Ben:** Interesting. 

<i class="timecode">[00:17:23]</i> **Adrian:** Just a little tangent.

<i class="timecode">[00:17:25]</i> **Ben:** That's so human though, right? Like, that's such a human, like, personal concern about, you know, web experiences, right? Because it's not like any of the logic changed, or the reliability of the form—

<i class="timecode">[00:17:39]</i> **Adrian:** Right.

<i class="timecode">[00:17:39]</i> **Ben:** —but, like, you used colors that they were already familiar with, and they trusted it more.

<i class="timecode">[00:17:46]</i> **Adrian:** Yes. We also found somebody in that organization who had the Windows 3 Hot Dog Stand theme.

<i class="timecode">[00:17:56]</i> **Ben:** My condolences!

<i class="timecode">[00:17:58]</i> **Adrian:** He was a weird guy. Anyway. I don't think he'd be watching this.

<i class="timecode">[00:18:04]</i> **Ben:** You what? Oh, yeah. 

Yeah, ActiveB1t in the chat has put it succinctly, saying, "I know this, I trust this." For sure, for sure. 

<i class="timecode">[00:18:16]</i> **Adrian:** Yeah. Familiarity, yep.

<i class="timecode">[00:18:19]</i> **Ben:** Alright. Are there more parts of these that you wanted to look at? Or, I guess, when you're looking at under engineering things, right, starting at those HTML fundamentals — like, how do you start? Where do you typically begin when you're trying to figure out, like, how do I build this the simplest way possible? 

<i class="timecode">[00:18:38]</i> **Adrian:** I start by looking for the HTML element that already does what I want, or at least is the closest fit. From there, then I build up to see how it behaves natively. And this is primarily with form controls. That's what I've done this around for the most part. You know, the scrolling table is a little bit different from that, but that's still influenced it. But what are the native things, how do they work, and is there another way to do it that might be better? And if not, then, you know, what's the case or what are the differences? In fact, if you pop over to the "Under-Engineered Multi-Selects."

<i class="timecode">[00:19:19]</i> **Ben:** Yes.

<i class="timecode">[00:19:20]</i> **Adrian:** Which should be my most recent one. That's one where the native `<select>` element supports multiple selection. I have never found anybody who finds it easy to use or understandable.

<i class="timecode">[00:19:36]</i> **Ben:** Yeah!

<i class="timecode">[00:19:37]</i> **Adrian:** So my first thing was, "I'm not going to use that, but there are already elements in HTML that do the job here." So I would look at a collection of checkboxes.

<i class="timecode">[00:19:47]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:19:47]</i> **Adrian:** And cool. That's pretty straightforward and —you've got it there — and it just goes and goes and goes. So what would somebody experience in, say, a native application or in a non-native application with that many checkboxes? Well, they'd probably have it in a scrolling area. So I layer that onto it, you know, get me that scroll.

And then once it scrolls, I discover that people don't really like the `<fieldset>`. I like the `<fieldset>`. I think it makes sense. I'm not too concerned about trying to style it away. I think it just works. But I know a lot of people don't like the way `<fieldset>` and `<legend>` look, and there's nothing wrong with that. That's a totally valid concern.

<i class="timecode">[00:20:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:20:29]</i> **Adrian:** And then I look at what is available to me in HTML or ARIA that I can use to replicate what a `<fieldset>` does, and in this case, as you have it on your screen there, it's a scrolling box. It's a `<div>` with a "group" role, and I make sure there's an aria-labelledby on it, and boom. Now I've essentially replicated what a `<fieldset>` does programmatically. And this is important because I don't want to exclude, in this very specific case, screenreader users. I still want them to understand it's a group, they're related, have a group name announced when they move into the controls or out of them, and have all of that appropriate context. But now I don't need to worry that dumping `<fieldset>` is going to remove that. I just make sure that I replicate it to the best of my ability. 

<i class="timecode">[00:21:19]</i> **Ben:** Absolutely! And then you add more after. It looks like it's mostly CSS stuff at this point, but okay.

<i class="timecode">[00:21:28]</i> **Adrian:** And then I do the progressively enhanced one which, lots of people still want it to be collapsed, so, okay, let's use a disclosure widget. And if we're going to have a disclosure widget, let's make it so that — I'm already using a script at that point, so let's also do a count of how many items are selected, because there's 26 in there and it's a pain to scroll through them all, and make itdismiss on Escape and, you know, stuff like that.

<i class="timecode">[00:21:56]</i> **Ben:** Mm-hmm. Yeah, and your code for this is still remarkably light. Like, it looks, to my eyes, a little cluttered, but it's… you know, it's all just stuff like, you know, type="checkbox". Like, a whole bunch of attributes that you need to have and a whole bunch of possible options. Then you look at, like, your CSS and this is overall fairly reasonable. A lot of this is getting things to look specifically the way you want, rather than, like, simply functional. Your script itself is… yeah. 

<i class="timecode">[00:22:31]</i> **Adrian:** Yeah, it's minimal, and I'm not even good at JavaScript. So I know it could be shorter. Like, that, I would not call that production-ready code by any stretch of the imagination, but it's more important for me to show those concepts—

<i class="timecode">[00:22:45]</i> **Ben:** Yes.

<i class="timecode">[00:22:45]</i> **Adrian:** Because my experience is people aren't writing their own script anymore. They're usually pulling it into an existing library and leaning on features that are already available in the library to do this work for them. 

<i class="timecode">[00:22:56]</i> **Ben:** Absolutely, absolutely. 

<i class="timecode">[00:22:59]</i> **Adrian:** If you pop back over to that CSS tab—

<i class="timecode">[00:23:01]</i> **Ben:** Yeah!

<i class="timecode">[00:23:01]</i> **Adrian:** —one thing I want to call out there, which is a sort of a broader message. So, I think if you scroll up, there was the gradient. So, one of the… yeah. So, one of the— that gradient idea, I have in there on all of my scrolling containers because it shows a shadow at the edges as an additional visual cue. And I talk about some other visual cues in this post like clipping the box, so that… cutting the box so that it clips some of the text so there's obviously more there. But those shadows are a really nice touch that I stole from Lea Verou, for example.

<i class="timecode">[00:23:43]</i> **Ben:** Okay.

<i class="timecode">[00:23:43]</i> **Adrian:** And then the left–right shadows for my scrolling table, I stole from Hui Jing Chen. And those are just two examples throughout these posts. One of the things I try to do whenever possible is reference where I got some of these ideas or code snippets or examples or inspirations or other people who've done similar things.

For my select menu, I think I mentioned… was it? Now my brain hurts. Was it Stephanie Eckles who wrote one at about the same time, only hers was published six months before mine? I give Scott credit for stealing some ideas — Scott O'Hara credit for stealing ideas for some of the toggles stuff. I steal a bunch of stuff from Sarah Higley.

<i class="timecode">[00:24:34]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:24:35]</i> **Adrian:** Sara Soueidan gets a shoutout because she has a variation on what I'm doing. The reason I'm saying all this is less for the name-dropping and more for this notion of… I mentioned early on about this as sort of a de facto peer review.

<i class="timecode">[00:24:50]</i> **Ben:** Yeah!

<i class="timecode">[00:24:50]</i> **Adrian:** I think it's really, really important that people who are doing accessibility in particular acknowledge where they got some of their materials — whether it's ideas, code, snippets, icons, wrong opinions, good opinions, so on — because we as an industry have been building on the backs of the people who came before us since this started. I've got 25 years experience doing digital accessibility now. It might be more — crap. And all of that stuff is built on learnings I've had from other people.

<i class="timecode">[00:25:27]</i> **Ben:** Yeah!

<i class="timecode">[00:25:27]</i> **Adrian:** People who've been around longer than I, and people who are brand new to this stuff.

<i class="timecode">[00:25:31]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:25:31]</i> **Adrian:** And it's important not only to give them credit, but also to recognize where that stuff came from, partly because, again, technologies change, patterns change, expectations change, and we need to be able to sort of spelunk our way back through the history of some of these assumptions and good ideas and bad ideas in order to continue to grow this stuff so it still works well for people because again, that's who we're ultimately serving. 

<i class="timecode">[00:25:58]</i> **Ben:** Absolutely, 'cause you run into the issue of, like, you know, things that might've been solid accessibility wisdom ten years ago are now superseded by, you know, more modern browser options—

<i class="timecode">[00:26:10]</i> **Adrian:** Yep!

<i class="timecode">[00:26:10]</i> **Ben:** —as well as just new research into how disabled people use the web and what it is they like. And so even if you're, you know, citing people, that doesn't necessarily mean you've got the latest, greatest, up-to-datest information. But then I've also noticed — especially, I seem to see this in kind of UI spaces, like visual design spaces — where folks will assert things loudly and with confidence that are based on their gut intuition about how things should be rather than bringing in things from user research.

<i class="timecode">[00:26:47]</i> **Adrian:** Yes.

<i class="timecode">[00:26:47]</i> **Ben:** Folks talking about, like, color contrast is one I see this, right, where folks are like, "Clearly… clearly this algorithm falls flat at this point" without having backed it up with user testing. 

<i class="timecode">[00:27:01]</i> **Adrian:** Yeah. You know, color contrast is interesting now that people are talking about the WCAG 3 version…

<i class="timecode">[00:27:07]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:27:08]</i> **Adrian:** …of color contrast versus WCAG 2.1, and a lot of people are forgetting that the color spaces we work in have changed dramatically since WCAG 2 was released.

<i class="timecode">[00:27:19]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:27:20]</i> **Adrian:** And it's interesting to see these fights spring up when in the end… listen, the color contrast is just a guideline. It is literally a baseline of how to not make something awful.

<i class="timecode">[00:27:30]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:27:30]</i> **Adrian:** If your users are working on a plane where they can't shut the shade and the sun is coming in, you need to have really, really good contrast, like really high contrast. Otherwise they're going to be stuck with the sun on their screen and not be able to get things done. So to your point, it's, it's about adapting to the context, not necessarily to the specification.

<i class="timecode">[00:27:52]</i> **Ben:** Absolutely. Yeah! That's awesome. I love that.

Were there more aspects of these that you wanted to show off or dive into?

<i class="timecode">[00:28:07]</i> **Adrian:** So, the under… underen… <i class="brackets">[sighs]</i>

<i class="timecode">[00:28:11]</i> **Ben:** Words are hard.

<i class="timecode">[00:28:11]</i> **Adrian:** Dependency questions.

<i class="timecode">[00:28:13]</i> **Ben:** Yes.

<i class="timecode">[00:28:14]</i> **Adrian:** The dependency questions one is the one where I've gotten the most offline feedback, as in there are no comments on this post. This is the only one of these that has no comments. But I've had a lot of people ping me on the side and ask me straight up, "Why isn't there… why isn't there a live region? Why aren't you doing focus management? Why aren't you doing all these other things?" And this example that I came up with is a function of building it based on testing with end users, with keyboard and screenreader users in particular. And this notion that just because something appears on the screen, you have to have a live region, you have to manage the focus, and you have to do all these other things is… fine when you're talking about more complex stuff. Those are the things you need to consider.

<i class="timecode">[00:29:08]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:29:08]</i> **Adrian:** But you don't necessarily need to do them. And starting from that position is, you're already putting yourself at a deficit. Or, more accurately, you're putting your users at a deficit because now just because I toggled a radio button, I'm going to hear five different things announced and my focus is going to be whisked over to some other part? No. Sometimes the simplest thing that you can do is to do nothing.

So this is an example where, and you were just showing it off there, if I'm choosing between animals — Dog, Cat, Bird, Griffon — and I worked my way down to Other, as soon as I choose Other, a textbox appears. That's it. It's real simple. And the nice thing about this, it's so underengineered, there's no JavaScript involved at all. 

<i class="timecode">[00:29:54]</i> **Ben:** There's not even a tab for it, yeah. 

<i class="timecode">[00:29:58]</i> **Adrian:** Yeah, no JavaScript. This is a bit of an edge case though, because it requires you to have a really simple HTML structure, because I'm leaning on the adjacent sibling combinator in order to unhide that thing that was hidden. Yeah. So essentially, when the radio button state is checked, that means that the following block of HTML is now visible. Otherwise, it's hidden. So I'm not even managing the "display" property other than "none" or whatever it is by default, so I don't have to worry about setting it to "display: block" or stressing because it's in a flex or a grid layout. Really it's just about "I'm not going to hide it anymore" and it will just adapt to whatever the layout style is for that thing.

But here again… I've chosen Other. If I tab forward in the screenreader, I'm going to hear "Your pet" and I'm going to know it's a textbox. If I'm a keyboard-only user, there it is. I'm not going to miss it. Same thing with pretty much any sighted user at that point. So this is a scenario where it might not be practical because of the HTML that you are dealt with. You might be working with somebody else's code, you have no way to change it, and I get that. But it's really an opportunity to look at what are some of the things that you can do that are simple and fundamental that don't require a ton of extra code and which just work, period. 

<i class="timecode">[00:31:35]</i> **Ben:** Yeah, and like, even if, for whatever reason, like, the CSS doesn't display, right? Maybe the user's got, like, some custom user stylesheets or something like that or, like, the CSS asset fails to load, right? The worst that happens is this field always appears.

<i class="timecode">[00:31:53]</i> **Adrian:** Yep!

<i class="timecode">[00:31:53]</i> **Ben:** And, you know, that's not the end of the world, right? Like, the fact that it hides when anything other than Other is selected is, like, a nicety.

<i class="timecode">[00:32:04]</i> **Adrian:** Yeah, exactly. It's a form of progressive enhancement, just by the way that you've coded it. 

<i class="timecode">[00:32:11]</i> **Ben:** Mm-hmm. Love that. Love that so much. This trick is very good.

<i class="timecode">[00:32:17]</i> **Adrian:** It's — you know what? Unfortunately, it gets utilized too much by people who want to use checkboxes to control the appearance of things like navigation.

<i class="timecode">[00:32:26]</i> **Ben:** Okay.

<i class="timecode">[00:32:27]</i> **Adrian:** And I don't think you should ever use a checkbox outside the context of a form. That's the wrong use for it.

<i class="timecode">[00:32:32]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:32:32]</i> **Adrian:** But here, in the context of gathering information from the user, I think it's an appropriate fit. 

<i class="timecode">[00:32:38]</i> **Ben:** Totally makes sense to me! Yeah.

Yeah, oh, here's where you're calling out the specific styles for that. One thing… one thing—

Ah, Stephanie Eckles is in the chat. She says, "Hear, hear."

So, one thing I've always loved about these articles, is that you always call out like the individual pieces, the concepts that build up, like, the building blocks for your approach, right? So that, you know, if I'm looking at this and if, for whatever reason, I'm not yet familiar with the sibling combinator, now I know kind of what it's doing and why you opted for that as opposed to an alternative, which is such a hugely important part of communication.

<i class="timecode">[00:33:27]</i> **Adrian:** Part of that is to — I want to clarify for the audience, though — part of that is to ensure that I am getting it right.

<i class="timecode">[00:33:37]</i> **Ben:** Mm!

<i class="timecode">[00:33:38]</i> **Adrian:** Part of the reason I write this much detail is because I may have run through this code and discovered this thing for myself. By writing it, I'm offloading my memory. I don't necessarily need to remember the nuance. I just need to remember where it is on my site, which is just a quick search away. So it's offloaded memory. And it also ensures that I understand what it is I'm writing about. There's been more than one post I'm writing, and I'm halfway through it and I look up something in the spec and I go, "Oh. Well, this post is taking a hard left because this assumption I made is wrong. I'm still going to write the post and I'm still going to note this thing, but now I've learned something in the scope of writing this." And that's part of the reason why…

I'm pointing to a screen like I'm pointing to the audience. This is weird.

It's part of the reason why I'm always linking to these specifications as well, because I want people to either look it up on their own and interpret it as they see fit or to challenge me if my read of the thing is wrong as well.

<i class="timecode">[00:34:37]</i> **Ben:** So… what are some times you've been challenged and learned and adapted the material and stuff like that? How has feedback changed these posts?

<i class="timecode">[00:34:49]</i> **Adrian:** So, the textbox one is reasonably a good one. Somebody had commented, "Why are you using this absurd :not selector in your post?" And I'm like, "Oh, I have a note in here around IE, but I don't remember what it was." So I had to go back. Because I took such crappy notes, I had to go back and track down what it was that made me choose that selector. And that's how I rediscovered that IE didn't like multiple selectors in the :not. It was one of the comments toward the bottom.

<i class="timecode">[00:35:26]</i> **Ben:** Okay. Yeah.

<i class="timecode">[00:35:28]</i> **Adrian:** But I've had a few people who've pointed out things in my posts that I could do differently. And what I like about that is it demonstrates a gap that I need to get better at. I've had people point out, "Hey, your selector is too specific. You know, I don't want a 5-0-1 selector. I want this selector, so I'm doing this." I'm like, "Cool! If it works for your audience, then absolutely do it." The stuff I'm writing here isn't necessarily the truth. What it is is it's a walkthrough of how to achieve a thing based on my understanding, how it affects users, and all these other things that I've outlined in the post. 

<i class="timecode">[00:36:08]</i> **Ben:** Absolutely. Okay!

<i class="timecode">[00:36:13]</i> **Adrian:** Yeah, there I am even saying "Make sure you have a good selector."

<i class="timecode">[00:36:17]</i> **Ben:** Yeahhh! Yeah, yeah, yeah. Yep, yeah, yeah.

You know, I'm trying to figure out what to ask next, and maybe this is a good time to call out to the chat: chat, while we've got Adrian here, if you've got any questions for him, please feel free to let us know and we will happily get to them.

You've got a comment from ActiveB1t that says that the checkbox-not-checked trick was going…

<i class="timecode">[00:36:52]</i> **Adrian:** It could save a line of JavaScript.

<i class="timecode">[00:36:54]</i> **Ben:** Yep. So good. 

<i class="timecode">[00:36:56]</i> **Adrian:** All it takes is one line! If I can save just one line today! Wait, no, I thought that was saving children. I can't keep track. 

<i class="timecode">[00:37:03]</i> **Ben:** If you save one line, it's equivalent to saving one life. You've heard it here first. Adrian Roselli said it. You can attribute it to him.

<i class="timecode">[00:37:12]</i> **Adrian:** We'll go with that.

<i class="timecode">[00:37:13]</i> **Ben:** Lines of JavaScript are equivalent to actual children.

<i class="timecode">[00:37:18]</i> **Adrian:** <i class="brackets">[Adrian laughs]</i>

Oh, I'm going to stop there because there are a lot of weird value judgment jokes I want to make, but yeah.

<i class="timecode">[00:37:25]</i> **Ben:** Mmm.

<i class="timecode">[00:37:27]</i> **Adrian:** You know what? Do you… which one… I have—

I added a video to the… oh, the multi-select.

<i class="timecode">[00:37:36]</i> **Ben:** Yes.

<i class="timecode">[00:37:38]</i> **Adrian:** Toward the bottom of that post, I think. Is that right? Did the video show? Yes. So I have a video there showing the… oh, yeah, you've pulled it up. I was busy looking at my other monitor.

So this shows the, progressive enhancement that I was talking about before with that last version of the pattern that works as a disclosure widget. And first I show how it operates with no JavaScript, and I intentionally did the no-JavaScript version first, just so you could see, "Oh, yeah, that works fine."

<i class="timecode">[00:38:08]</i> **Ben:** Mmm.

<i class="timecode">[00:38:08]</i> **Adrian:** And then layering on the JavaScript. After the script loads, then it does things like collapse the box, implement the counter, dismiss on Escape, and whatever other features that I want as well. And to me, that's a big part of this concept of underengineering is building that fundamentals so it just works.

<i class="timecode">[00:38:27]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:38:28]</i> **Adrian:** And as you layer things in, you're layering on enhancements, which is really the whole concept behind progressive enhancement. 

<i class="timecode">[00:38:35]</i> **Ben:** Absolutely. So… I guess what would you… I've genuinely had this question asked of me before. Like, in my previous role, I was, you know, doing a whole bunch of React, right? What would you say to someone who maybe doesn't quite appreciate the importance of progressive enhancement? Like, how would you make that pitch for them? 

<i class="timecode">[00:39:01]</i> **Adrian:** Yeah, so the thing is, that's something that you have to approach on an almost individual basis. You'd have to understand what their objection is. And those objections vary wildly. Sometimes, people don't understand that a lot of users are on crappy systems or on underpowered systems or on text systems. Sometimes, they forget that there are users who don't use things the way they do. Sometimes, they are afraid that they might have to do more work outside of their preferred technology stack, like "Hey, I can do this with Material Design, but the moment that you tell me I have to move the label, that blows everything up because now I have to change all my code and maintain it."

So it's really a question of understanding the objection before I try to work my way through it, and I think that's important because some of those objections are valid, and I don't want to say that progressive enhancement is absolutely the only way to do things. Somebody might raise a valid objection in which case, you say, "You know what? You're right! In this context, for your audience, for your use case, for what you know, don't worry about it. And running at it just by saying "No, progressive enhancement is always right" is already starting from a false assumption, and I want to make sure I understand what the scenario is and then if or how it might apply in that scenario. 

<i class="timecode">[00:40:31]</i> **Ben:** Absolutely.

We have a question in the chat from adrianengine, who wants to know, "Do you add your ARIA attributes from the start on the HTML? Or do you add them when JavaScript is activated with JavaScript?"

<i class="timecode">[00:40:44]</i> **Adrian:** So that depends on what it is the thing is doing. In the case of this underengineered multi-select that we're just looking at, I still need the "group" role on it because it's still a box that has a scrolling thing on it, so I still need the ARIA there. The aria-expanded, though, on that `<button>`, I don't add until the JavaScript fires, because I don't want a user who's come in where the JavaScript is blown up—

Excuse me. I don't want that user to think that activating that button is going to do anything. So for the static things, yeah, the ARIA will go in there. That scrolling container is static. For the dynamic things, the ARIA gets layered on after the script fires and only to reflect that that thing is now functional 

<i class="timecode">[00:41:35]</i> **Ben:** That is a great question, Adrian. Sorry, adrianengine in the chat. So many Adrians these days! 

<i class="timecode">[00:41:44]</i> **Adrian:** I'm just thrilled there's another Adrian out there because, I gotta tell ya, we're all a pile of jerks and we need nice ones out there to make us look good. 

<i class="timecode">[00:41:53]</i> **Ben:** Well, it's a good thing that adrianengine, our beloved viewer, is not a jerk. He can represent the Adrians well in the Council of Adrians.

<i class="timecode">[00:42:06]</i> **Adrian:** I really want to know what an Adrian engine powers.

<i class="timecode">[00:42:11]</i> **Ben:** Ooh.

<i class="timecode">[00:42:11]</i> **Adrian:** Is it the engine in the Adrian? Does it make more Adrians? 

<i class="timecode">[00:42:16]</i> **Ben:** Yeah, adrianengine, if you can tell us what the backstory is behind your username. I would love to love to hear that. Yeah. 

<i class="timecode">[00:42:24]</i> **Adrian:** It's powered by rage if it's just me.

<i class="timecode">[00:42:28]</i> **Ben:** Absolutely.

<i class="timecode">[00:42:29]</i> **Adrian:** Sorry to put him on the spot like that.

<i class="timecode">[00:42:34]</i> **Ben:** I mean, I did it too, so we'll see! Yeah, if you wanted to share the backstory behind your username, I'd be super curious. Yeah, and if anyone else in the chat has any questions about kind of this approach, please, please feel free to let us know!

Oh, okay!

<i class="timecode">[00:42:56]</i> **Adrian:** Ah, there's a question. What do I think of `<details>`? That is indeed a great question. I think `<details>` is a brilliant native content disclosure widget. I think it does a good job of letting you adjust content dynamically in the page when it needs to be hidden. I will sometimes use it to hold an animated GIF, because it's a very quick way to hide that animation—

<i class="timecode">[00:43:23]</i> **Ben:** Mmmm!

<i class="timecode">[00:43:23]</i> **Adrian:** —without having to strap on a pile of script. So it can be really powerful in that way. But once you start to make `<details>` and `<summary>` do more, like act like a menu navigation, act like a dialog box, I think you're starting to get outside of what its intended purpose is. And then there's still the fact that `<details>`/`<summary>` announces differently in screenreaders than a disclosure widget, which is basically a button with aria-expanded, and you have to keep in mind for your audience what that disparity in announcement might mean to them, particularly based on their experience on other sites and if you're mixing those controls in the same context within your own site. So…

<i class="timecode">[00:44:17]</i> **Ben:** Mmm.

<i class="timecode">[00:44:17]</i> **Adrian:** …I think it's a really powerful element, but I think there's some… not high risk, but some risk associated with it. And to your question about, "Is it possible to make it announce differently?," yeah, I think you can…

No, wait. That we can rely on? No, because the `<summary>` element still has the implicit "button" role and it is still being announced differently, and I'd have to test it, but I suspect throwing a role "button" on it isn't going to change things. 

<i class="timecode">[00:44:48]</i> **Ben:** Gotcha. And adrianengine wants to know if you have any thoughts on whether the `<dialog>` element is safe to use and what your thoughts are on the element. 

<i class="timecode">[00:44:57]</i> **Adrian:** I think the `<dialog>` element is safer to use than it ever has been, provided you have good inert support in the browser. But to caveat that statement, you really need to know that your audience is using the most modern versions of browsers. And I say this because I know that that's not always the case. I work with clients who don't let their employees update their Chrome releases every time a new one comes out. They stage them. They have to wait six months. They have to go through some sort of internal review, whatever. So just because Chrome or Firefox or Edge might be on a six-week deployment cycle, I have clients where their users are running at least ten versions behind at a time. And I've got mobile users who are still visiting my site in the Chrome version 40s. And I'm just using Chrome as an example because it is currently the most popular browser. So, yeah, `<dialog>` is better than it has been, but I wouldn't be rolling it out en masse yet without knowing a lot more about your audience. And yes, there's a polyfill for inert, which is what I use in the places where I've used the dialog — not the `<dialog>` element, but for using inert in general where I am using where the fake dialog. Scott O'Hara in particular has written a ton of good stuff about the `<dialog>` element, so I would encourage you to look up what he's written. And here's a great bit from Eric Bailey about "evergreen" not meaning immediately available, because as I was saying, it doesn't mean people have the most recent ones at any given time. 

<i class="timecode">[00:46:46]</i> **Ben:** Absolutely. Yeah, and I think we're starting to see this, too, as, like, WebKit ships with, you know, I think it was :has, was the one recently. Like, yeah, just because, you know, the latest versions of browsers have the cool, whizzbang semantics and CSS and whatnot, like, doesn't necessarily mean it's quite ready. And then even then, like, they can still ship with bugs, especially when it comes to accessibility. Like, we're no stranger to, like… I think part of the reason `<dialog>`, you know, has been so fraught over the past few years was because it initially shipped with a whole bunch of, like, accessibility defects and whatnot. Like, it wasn't accessible out of the box.

<i class="timecode">[00:47:33]</i> **Adrian:** Yeah.

<i class="timecode">[00:47:34]</i> **Ben:** So, even if it's out there and has been out there for a while, it doesn't always mean that those things are, like, ready for prime time. 

<i class="timecode">[00:47:41]</i> **Adrian:** Right, and you can even go to WHATWG and see a huge discussion between two people who manage the WHATWG spec and at least 20… I think it's about 20 accessibility experts and disabled users who are telling them that the way that the spec says to manage focus is wrong, but they're still anchored on the Windows 95 style of surfing the web, which makes it… it makes it kind of difficult when they're trying to create platform parity and a web paradigm. It creates some friction. The users might say they want it, but we'll be darned if we're going to give up what we experienced in Windows 95. 

<i class="timecode">[00:48:24]</i> **Ben:** It's Windows 95 or bust. You know, user experiences peaked in Windows 95. That's why there's not been any new 

Windows 

since 

then. 

<i class="timecode">[00:48:31]</i> **Adrian:** Best operating system ever. If you don't believe me, go look at the ARIA Practices Guide because you can live in Windows 95 for as long as you want. Did I say that out loud? Hey, we have another question! Somebody is asking, would I consider explicitly supporting Internet Explorer on sites targeting the quote, "general," end quote, public. Short answer to that is… that's a very broad question, but no. I have mostly moved away from supporting or stressing about Internet Explorer. First of all, if you're building something for the general public, you should already know what your audience makeup looks like.

<i class="timecode">[00:49:09]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:49:10]</i> **Adrian:** And you need to make a decision about how many IE users are coming to your site and if that matters, but also why they might be on that platform. So you need to make this decision based on your audience, is what it boils down to, bearing in mind that you might be doing something that blocks those users which artificially deflates their numbers in whatever tracking tool that you're using.

On top of that, Microsoft is finally sunsetting it next month, but that doesn't mean that everybody's old computers are going away.

<i class="timecode">[00:49:41]</i> **Ben:** Yeah. And it's worth calling out too. I think, that there are, you know, multiple "general publics." Like, there's no one public that we can really talk about. 'Cause, like, you know, you and I, we have, like, web developer blogs. It is very unlikely that most of our viewers are going to be on Internet Explorer, because most of our viewers are likely to be web developers who are probably more prone to be on newer browsers.

<i class="timecode">[00:50:10]</i> **Adrian:** Yeah.

<i class="timecode">[00:50:10]</i> **Ben:** But like, yeah, Amazon or Walmart, right? Like, those are sites that perhaps do target a more general population, but even then I think they still have to make that choice. At my previous role, we served military members. We built our products for military members. What that meant was that we were actively considering military bases, where the browser you can use was much more locked down, and as a result, like, we had artificially inflated IE numbers for, for awhile. 

<i class="timecode">[00:50:49]</i> **Adrian:** Yeah! So they were the ones keeping the numbers up in the global stats.

<i class="timecode">[00:50:54]</i> **Ben:** Yes!

<i class="timecode">[00:50:54]</i> **Adrian:** I know that the local blind association only within the last couple of years finally got rid of some of their older computers, but they might still have one or two machines sitting in the back still running IE, partly because they also use them as legacy systems. But they were available to their constituents to use.

<i class="timecode">[00:51:15]</i> **Ben:** Mm!

<i class="timecode">[00:51:16]</i> **Adrian:** So there are plenty of people who don't have a computer who are reliant on whatever their local support organization is able to provide for them.

So again, general public, if we're talking about a U.S.-based desktop environment, probably. But once you get outside of that, it gets a lot muddier.

<i class="timecode">[00:51:38]</i> **Ben:** Gotcha. 

Alright. Chat, any more, any more questions for Adrian while we've got him? We've got a few more minutes. We can probably take one or two more questions.

<i class="timecode">[00:51:50]</i> **Adrian:** I'm going to ask you a question, Ben.

<i class="timecode">[00:51:53]</i> **Ben:** Yeah!

<i class="timecode">[00:51:53]</i> **Adrian:** Are you familiar… or, I'm gonna rephrase this. Do you use caret browsing ever in your browser? 

<i class="timecode">[00:52:01]</i> **Ben:** I'm sorry, "caret browsing?" Is that what you said? 

<i class="timecode">[00:52:03]</i> **Adrian:** Yeah, yep. 

<i class="timecode">[00:52:05]</i> **Ben:** I'm not sure what you mean by that!

<i class="timecode">[00:52:07]</i> **Adrian:** Okay! That's good! So, humor me for a second. In the underengineered tables post.

<i class="timecode">[00:52:15]</i> **Ben:** Yes.

<i class="timecode">[00:52:16]</i> **Adrian:** It has that whole thing about making an area scroll for the responsive tables. And the whole reason that we do that — Heh, "browsing for carrots. Almost, but not quite. The whole reason that I do that is because… the whole reason all that code is there is because a keyboard user needs to be able to make a scrolling region on the page scroll.

<i class="timecode">[00:52:40]</i> **Ben:** Mmmm!

<i class="timecode">[00:52:42]</i> **Adrian:** The thing is, in order to make it happen, you have to give it a tabindex. Once it has a tabindex, it needs to have an appropriate role and accessible name, and now you've stacked up this verbose interface for a screenreader user.

<i class="timecode">[00:52:57]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:52:58]</i> **Adrian:** Like, you have to add this ARIA on top of it in order to not break the experience for a screenreader user, but the outcome for that screenreader user is that it's very verbose. If they're a blind screenreader user, they don't care that your region scrolls! It doesn't matter to them.

The way around that, though, is when users rely on caret browsing. In my experience, and I asked this on a Twitter poll yesterday and it's feeding into a blogpost I'm partway through writing. What I'm trying to do is understand who uses caret browsing and could we, in some circumstances, rely on users navigating with their keyboard — which is what caret browsing is.

<i class="timecode">[00:53:40]</i> **Ben:** Okay.

<i class="timecode">[00:53:40]</i> **Adrian:** It's just moving your cursor through the page like in a Word document. Could we rely on users navigating with the keyboard to get rid of all this extra screenreader verbosity? And that's what I'm exploring in my next blogpost—

<i class="timecode">[00:53:52]</i> **Ben:** Mmm.

<i class="timecode">[00:53:52]</i> **Adrian:** —which is me taking this very broad statement I make in this post about scrolling regions and introducing some nuance.

<i class="timecode">[00:54:00]</i> **Ben:** Okay, gotcha.

<i class="timecode">[00:54:02]</i> **Adrian:** Which will be fun.

<i class="timecode">[00:54:05]</i> **Ben:** Yeah! 

We do have a question in the chat from adrianengine.

<i class="timecode">[00:54:08]</i> **Adrian:** Yeah.

<i class="timecode">[00:54:08]</i> **Ben:** It looks like actually probably two questions. "Any thoughts on the Accessibility Object Model, or on how to make canvas 2D or 3D experiences accessible?"

<i class="timecode">[00:54:18]</i> **Adrian:** I have a lot of thoughts on the Accessibility Object Model, but I'm cautious about them, 'cause a lot of them are sort of knee-jerk. My biggest concern is… really what it boils down to, there are a ton of things about the Accessibility Object Model — AOM — which I think are useful and valuable and can simplify development and improve the experience for users. But my biggest concern with it is that it will give developers a way to probe the assistive technology that users are using, and I consider that a huge privacy issue. I consider that a breach. And if anybody can detect what assistive technology I'm using, that means they can shunt me to a different experience, and I am not a fan of that. Now, I'm not staying abreast of AOM — certainly not as much as I should be — but I know that people who have been participating in it are aware of those concerns because they have those concerns as well.

<i class="timecode">[00:55:17]</i> **Ben:** Léonie Watson, I think, is a prominent example of that. 

<i class="timecode">[00:55:21]</i> **Adrian:** Léonie, basically… here's the thing. I will follow Léonie wherever, and if Léonie says "This is good and I'm comfortable with it," I'm going to trust her almost implicitly because she has been fighting this, and she does have these genuine concerns. But she definitely sees the value in it, and I would defer to Léonie in particular about her take on this.

And then separately, canvas 2D or 3D experiences. That's a lot trickier, partly because each experience will be different and I'm wary about throwing an "application" role on everything. And there is where the AOM becomes probably most useful anyway to dynamically assess, evaluate, and update the content. And I don't know that I can give you a good answer without going into more detail and starting to get into some of that nuance.

<i class="timecode">[00:56:15]</i> **Ben:** Gotcha. And another question asks, "Can you share your thoughts about visual screenreader users, and in particular, with regard to hidden skip-to-content links?" Also, hello, Jeremy.

Yeah, like, I guess, like, sighted screenreader users and, yeah, stuff like that. 

<i class="timecode">[00:56:35]</i> **Adrian:** I am a fan of skip links and I am a fan of having them become visible when they take focus. And for a sighted screenreader user, my experience testing with them and working with them is that as long as it looks like the rest of the site and isn't broken in some way, it's not a concern for them. So the way I do it on my site, for example, it's not visible until you put focus on it and then it will jump you down to the content of the page. I think it works fine. I expect in time we will find new and exciting ways to do this that might be better. 

There we go, "Skip to content." You know, maybe I shouldn't keep it anchored in the left corner for wider windows, because that does fall outside of the… if you're using a screen magnifier, that would fall outside of the magnifier window. So that question already is prompting me to say, hey, I haven't looked at it on a big screen. Maybe I should adjust that.

<i class="timecode">[00:57:38]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:57:38]</i> **Adrian:** So for a little bit of extra nuance to that answer, yeah! I think they're valuable. They're more valuable, though, when they appear where you're looking. 

<i class="timecode">[00:57:44]</i> **Ben:** When they appear when you're looking? Like as… oh, I see, okay. 

<i class="timecode">[00:57:52]</i> **Adrian:** Yeah, a lot of sighted screenreader users will use a magnifier. Not all of them, not people who rely on screenreaders for…

<i class="timecode">[00:57:59]</i> **Ben:** Yeah.

<i class="timecode">[00:58:00]</i> **Adrian:** …you know, dyslexia, et cetera, but you certainly don't want it to appear too far off the screen. 

<i class="timecode">[00:58:04]</i> **Ben:** Yeah. What I've got on mine is, it's like smack dab in the, like, center of the top. For whatever reason, my internet's being slow. But yeah, it appears right here, so I think that would be difficult to miss perhaps? 

<i class="timecode">[00:58:20]</i> **Adrian:** Yeah, it's pretty difficult to miss. I'm thinking about it in the context of a screen magnifier, which isn't quite what they asked, but that's where my head went once I saw how far off it was from my…

<i class="timecode">[00:58:31]</i> **Ben:** Yeah. 

Alright. And then another question from Mayank who wants to know, "Other than the ARIA Practices Guide and bespoke blogposts, is there a good, reliable resource for developing accessible components? Even ARIA Practices Guide is questionable a lot of times."

<i class="timecode">[00:58:48]</i> **Adrian:** Yeah… I often will end up with the UK Digital Services, Government Digital Services, or whatever it's called — UK.GOV. They have a sharp team over there. I have met a bunch of them, I've worked with some of them, and they have written up some good explanations for why they have done things the way that they did them. And they have a mandate that's different than a business, which is namely, you know, be available to everyone.

<i class="timecode">[00:59:19]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:59:20]</i> **Adrian:** So they have some good patterns, and because they explain them, you can make a decision on whether or not it's a good fit for you. So I think it's a good resource. Heydon Pickering has his Inclusive Components, which is definitely a good start. I don't agree with all of them and that's not a problem. Just like if he reads my stuff, he shouldn't agree with all of them because each of these patterns needs to remember the context of the user and what they're trying to do.

<i class="timecode">[00:59:49]</i> **Ben:** Absolutely.

<i class="timecode">[00:59:50]</i> **Adrian:** I always look at stuff Sarah Higley writes. I look at Scott O'Hara's incredibly deep pile of patterns and examples. It's incredibly rich, and every time I think I'm coming up with some new idea, he's already built one, which is infuriating because it's done already.

<i class="timecode">[01:00:09]</i> **Ben:** I gotta say—

<i class="timecode">[01:00:09]</i> **Adrian:** But he's definitely a good resource.

<i class="timecode">[01:00:11]</i> **Ben:** I gotta say, part of that is, I know that… so I actually get to see him quite a bit because he runs office hours — accessibility office hours — at Microsoft, and I like to drop in and see what he's talking about. And yeah, teams will come in with like, "Hey, there was this, you know, finding on our page. How do we resolve this?" And he ends up getting a breadth of just different experiences as a result. Super cool to listen to his thought process. He's someone I want to get on the stream at some point as well.

<i class="timecode">[01:00:45]</i> **Adrian:** You should ask him to do it during his office hours and then — oh my god, he's gonna kill me if you tell him this is my idea — but then he can't say no, because you're just streaming his office hours!

<i class="timecode">[01:00:57]</i> **Ben:** There we go! There we go. Yeah. I mean, it's basically just part of work at that point.

Adrian, this has been delightful. Thank you so much for your time. So, you mentioned that you're, you're working on a post about keyboard navigation and caret mode. Are there other things that you're working on that you'd like to take some time to promote, or things that you just in general want to shout out, or places you want people to follow you?

<i class="timecode">[01:01:23]</i> **Adrian:** Well, I'm on Twitter and I have my blog. I don't bother with LinkedIn. The other social media platforms don't really interest me. So Twitter is the best way to find me. My blog is open for comments, so, you know, leave comments, ask questions, correct me when I'm wrong.

But for the most part, the only thing I really want to shout out is pay attention to users. Just because a user doesn't have the right terminology or might not understand how to fix the thing… the more that we're listening to the users, the better. And then subsequently, listen to the developers who've gotten beat up by the users because they probably have some really good experiences. I just want to make sure that as an industry, we don't get anchored on the notion that there are a few voices worth listening to. If all you listen to is me, that's terrible. It's a terrible disservice to everyone. There are a ton of people out there doing this work every day, a lot of people who don't have a voice — and when I say "don't have a voice," they don't have a platform. They're not appearing on your program, Ben. They're not doing talks or other things — who are closer to this on probably a day-to-day basis and dealing with much more fundamental issues. So don't get hung up on what one person says. There's a lot more experience out there and credit them whenever and wherever you can, because we need more people to be doing this work and to feel rewarded for doing it as well.

<i class="timecode">[01:02:52]</i> **Ben:** Absolutely. Adrian, thank you so much. Hey, chat, stick around. We are going to find someone to read, some other streamer. But also, while you're following folks on Twitter, go follow Some Antics on Twitter. That way you can keep abreast of all the streams when I… remember to schedule the announcement tweets. Sorry about that, Adrian. I was way later than I usually am on promoting.

<i class="timecode">[01:03:18]</i> **Adrian:** I panicked and thought it was next week. 

<i class="timecode">[01:03:20]</i> **Ben:** Oh, no, I'm sorry. Speaking of next week, though, we're bringing on m4dz. m4dz works for Backlight.dev, which works in design systems. We're going to be talking about building design systems with web components, so leveraging the web platform to its potential. So if you want to keep apprised of all of those streams, go follow Some Antics on Twitter. Follow Some Antics here on Twitch. And thank you all for being here. This has been a great time. And thank you again so much, Adrian. 

<i class="timecode">[01:03:51]</i> **Adrian:** Sure! Happy to be here. Thanks for inviting me. Thanks for asking questions, and I think this is what I'm supposed to stop talking. 

<i class="timecode">[01:03:57]</i> **Ben:** Yeah, something like that! Bye, y'all. See you next Tuesday.

<i class="timecode">[01:04:01]</i> **Adrian:** Cheers!