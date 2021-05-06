---
title: Making Accessible Design Systems with Ashlae Nelms
thumbnailTitle: Making Accessible Design Systems
upload: https://www.youtube.com/watch?v=c9tzyDTB5lk
sourceCode: https://github.com/SomeAnticsDev/style-dictionary-design-system
hosts:
  - Ben Myers
  - Ashlae Nelms
---

Design systems can help us ensure that our users have consistent, accessible, and delightful user experiences across our site. Join us on Some Antics as Ashlae introduces us to the world of design systems, and shows us how we can get started building design systems of our own!

[Ashlae Nelms](https://twitter.com/AshlaeAnnNelms) is a senior designer and developer at USAA.

## More From Ashlae

- [Follow Ashlae on Twitter](https://twitter.com/AshlaeAnnNelms)

## Mentioned Links

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)
- [Nielsen Norman Group's 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Material Design](https://material.io/design)
- [Designing Systematic Colors, by Jeeyoung Jung](https://uxplanet.org/designing-systematic-colors-b5d2605b15c)
- [`a11y-color-tokens` package on npm](https://www.npmjs.com/package/a11y-color-tokens)
- [A Basic Look at Typography in Web Design, by William Craig](https://www.webfx.com/blog/web-design/a-basic-look-at-typography-in-web-design/)
- [Lightning Design System](https://www.lightningdesignsystem.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Amazon Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [MUI Theme Generator](https://cimdalli.github.io/mui-theme-generator/)
- [Espanso](https://espanso.org/)

## Transcript

**Ben:** Howdy! It is Tuesday, and that means Some Antics. We are back. I'm really excited to be back. And today I am joined by none other than my good friend, Ashlae Nelms. Ashlae, hello! 

**Ashlae:** Hello! How is it? How are you doing? 

**Ben:** I'm doing well, you know. I've got the right level of caffeine and me. I think regular viewers will know, like, I kind of, like, waver. Like, it's usually, like, I'm like over-caffeinated—

Hi! Descript has just decided it's going to pop open! That's great. Love  application that just decide "I'm opening now." 

Yeah. So I'm super excited to have you on. You're one of my favorite developers to chat with. And I would love for you to just kind of introduce yourself for people at home who don't know who you are. 

**Ashlae:** Yeah, definitely. Hey, everybody. My name's Ashlae Nelms, like Ben said. Ben and I work together, and it is wonderful to work with him because we pair on a lot of accessibility measures at <i class="timecode">[00:01:00]</i> USAA, we end up teaching a whole lot of new hires. We are huge accessibility advocates. And I personally work on our design language system team, which means that I help create our digital brand for all of the company. So we say, "What are the colors that should be used? What is the typography? How should these things be used? What is the accessibility and the guidance behind all of it?" And honestly, when I first started looking for jobs, what I told every recruiter was "I want to be the middleman between design and dev because I want to code, but I also want to design and I want to, you know, have that user experience and I want— 

Awesome. 

**Ben:** If we are back, please put this in the chat. 

**Ashlae:** Oh, I'm seeing a nope. 

**Ben:** You're seeing no, not back? Oh.

Oh, hey, we're back. We live! Sorry. Never do that. Never just like hop network mid-stream. Terrible idea. But also, hopefully things can go a little faster now.

<i class="timecode">[00:02:00]</i> Yeah, so, before we needed to hop networks, you were kind of explaining that like, yeah, we do some accessibility education together at work. We also just kind of talk a lot about user experience. You're on the design team and you've actually got tons of experience with what we're doing today, which is building design systems. 

**Ashlae:** Yes! Building design systems, it's a lot more than just picking a couple colors and some types and some topography, right? At a deep level, it takes a lot of coordination and foundation work and research and accessibility understanding. It takes a lot of human–computer interaction research and user testing. And I don't think that that's reviewed a lot and as seen whenever you think, "Oh, a design language." It's just there, like a lot of these frameworks, we see them built out already.

So some of you may be familiar with some of these design systems. If you guys can throw some in the chat that maybe you've used before, or that <i class="timecode">[00:03:00]</i> you've heard of. We are going to go through a couple of design systems and talk about what makes good design systems. And then we're also going to= make some constants and some variables through design tokens later today so that those systems can be scalable for whatever they may grow into being. 

**Ben:** Awesome. Oh, go ahead, Ashlae. 

**Ashlae:** Oh, I'm sorry. I was gonna ask what are some design systems you've seen? 

**Ben:** Yeah, so I would say, like, Material UI is a big one. So I think actually maybe this is a great segue, because I feel like there are like… We talk about design systems and we talk about component libraries and sometimes the Venn diagram there, like there's an intersection there—

**Ashlae:** Yes.

**Ben:** —where it's like, if I bring up Material UI, I'm talking about a component library, but it's based on the Material Design design system. But for all intents and purposes, they feel very much so <i class="timecode">[00:04:00]</i> basically the same thing for me. Like, they're one and the same, more or less. 

**Ashlae:** Yeah, and they can be. Sometimes your design language is just how-tos on everything. There's no actual components built out. The whole goal is to build it yourself. But sometimes, like with Material, you actually end up getting a prebuilt component that can then be themed based on your own system. So Material knows that it's not going to be used just by one company, so they can't put just their colors in there because otherwise it can't be used more globally. So they've created a lot of great systems of the theme providers, which I actually haven't utilized a whole bunch, but they're really, really useful for if you are just trying to get something up off the ground real fast, you can use a lot of these design systems to do that for you.

**Ben:** Alright. So before we go further — I know we've got some demos and stuff that we want to get into — I was wondering if you could just tell me, like, in your own words, <i class="timecode">[00:05:00]</i> like, what is a design system? What does that mean to you? 

**Ashlae:** Yeah! Yeah, a design system, it's really a set of reusable atoms. See atomic design — I'll share a link with y'all on the chat in just a moment. And these reusable atoms can be used to create molecules and organisms that we know of as maybe components or semantic UI elements that we're really used to using all the time.

So atomic design is this theory by Brad Frost. He has a great book about it. And chapter two goes really, really in depth into how those all break down. An atom could be a color. It could be a piece of typography. It could be a border line, right? All of these little pieces that maybe build up into a button, which is more of a molecule. And then that button is used in a banner or a card, and that's considered an organism. And he even includes, like, the periodic table of elements in here, if you're a science nerd a little bit like me who wants to learn about all of these different things that build up <i class="timecode">[00:06:00]</i> into systems.

So this next picture is actually what we think of when we talk about the atomic design from a very high level. Break it down into those really little pieces, those building blocks, those LEGOs that then can build up into a whole system that is understandable and — What's the word I'm looking for? You're expecting it, and consumers and your users are expecting it, because you don't want them to come into something and go, "Well, that's not the way that I expected to use that. On this other page, I used it this way!" it needs to be consistent, and that's one of our ten design heuristics, which we can talk about further as well.

**Ben:** Alright. We have a question in the chat. This is from codelex. codelex is saying, "Is there a difference between style guide, UI components ,and design systems?"

**Ashlae:**  I think that there can be. You can have one-off UI components. Like, react-tabs is its own, you know, functional piece of UI components. You can have style guides where it's just telling you, "Here's the <i class="timecode">[00:07:00]</i> colors and the typography you should use and how to throw everything together." But then I think the best design systems are a combination of all of those. So not only does it give you the foundations, the usage, the accessibility guidance, it gives you some components like form inputs and cards and banners. It also gives you examples and demos and maybe even design assets that you can use in Sketch or Figma and some of these design tools that maybe you guys have either played with, hopefully, or maybe some of your design partners at work have used before. And then my favorite and the most pertinent: how good are their technical usage examples and documentation? Because if I can't read your documentation, I'm probably not going to dive down into your source code to figure out how to use your components, because there's other systems that are much better built and much easier to use and get set up.

**Ben:** Awesome. So I want to get started with design systems. How? Where… where do I even start? 

**Ashlae:** Where do you <i class="timecode">[00:08:00]</i> start? In that, I think we've had this conversation in the past where the hardest part about getting started with some of these topics is that a lot of people do them at such a high level, and that's because to be a subject matter expert in pieces of these is similar to being a subject matter expert in pieces of development, of the development life cycle. Maybe you're, you know, an API developer and you're really good at service design, but then they ask you to jump into frontend design, and you're like, "Oh goodness, I don't know what I'm doing."

And so really it's getting started with the basics, and those basics are the principles of user experience and perhaps design heuristics. So, I recommend the Nielsen Norman Group. And, Ben, I think I sent you a link for that, if you wouldn't mind sharing it with the group. What they are are… It's very similar to psychology. So if any of you have ever taken a psychology course, whenever you're learning something, it's kind of like this little light bulb of, "Oh, I realized I do this as a human, but I never put a vocabulary word to it, <i class="timecode">[00:09:00]</i> or I never put a definition around it." Object permanence for babies is if I hold a ball up in front of a baby and then put it behind my back, the baby's not going to realize that that object is still permanent in their viewpoint, and so to them, the ball is gone until they hit a certain age range, and that's called object permanence and I think that's fascinating. With user experience, it's very much the same way. It's putting these — sometimes they seem obvious — rules and resources around how we should learn about design or about user  experience.

And that's really the basis of a really good design system is understanding your user and then knowing what to apply to them. So, all of these, they can make a lot of sense, like "Is it easy to use? Is it flexible? Do I know if it's working? Is there error messaging? How does the design look? Is there enough white space?"

And I think the biggest one for design systems, and this one is number four which is "Consistency and standards. Users should not have to wonder whether different words, situations, <i class="timecode">[00:10:00]</i> or actions mean the same thing." You should follow industry convention, and, you know, don't pop a pop-up from a dropdown, a `<select>` dropdown, because that's not a normal what we call in the design world an "affordance," which is what people expect to happen. If you're trying to build something new and exciting, of course do that research and do that user testing and make sure that it's a good paradigm to follow, but always we should fall back on our best practices and our, like… I'm sure you guys have all heard a lot of talk about semantics and good coding practices, and that's really what we want to fall back onto when it comes to even the starting a design language.

**Ben:** Mmhmm. Yeah. I think of like, even… for me, one of the prime examples here is I am so careful to avoid using the color blue on websites because people point to… Like, when people see blue text, it is nothing but a link to them. Right? Blue text, underlined text. <i class="timecode">[00:11:00]</i> That right there is just kind of, it's the convention. And you can deviate from those conventions, you can do it, but the more you deviate from those, like, the more mental load the end user has to do. Like, they have to, like, figure out, "Oh, in this world, links look like this and underlined means something else." 

**Ashlae:** Exactly, exactly. A link being blue and underlined is a huge web affordance. That is exactly what we're expecting when we go to a page. Now, even on *your* webpage, Ben, I know you deviated from the blue, but you did it in such a way that it is very expected that this is an actionable item. Like, this is a link. If you hover over it, it has a hover interaction. It has an underline. It is bolded. Like, there are multiple ways to show that that is an actionable element on the page. And these are the things that you really have to think about from an interaction level detail to say, "Alright, well… I know I have a link and it's blue," or "I know I have a link and it's <i class="timecode">[00:12:00]</i> this color, but what happens on each consecutive interaction, when it's visited, when it's active?" When it's  active, that's of course when you're clicking down on it. When it's visited, you've already clicked that link and all of those pages show up there. So yeah, just cool, cool little ways to show, like, even something as simple as a link, it has these… People understand how they work and you don't really want to deviate from that too much. 

**Ben:** Yeah, absolutely, and when you ask people to take on that cognitive load of — like, even on my own site, right? Like, links just look different. They're not blue. They are underlined, but it's not the same kind of underline. Like, for me, I'm kind of expecting that readers will just kind of accept that yellow underlines means links. But because that's so unfamiliar, I've been very careful to not use yellow other places. Right? So that way it's like, I can convince you that yellow means links, but that means yellow always means links and nothing else.

<i class="timecode">[00:13:00]</i> **Ashlae:** Yes. Color needs to be very, very intentional when it is being used, whether that is being used as error treatments, warning treatments, just informational. Maybe you have an alert or a badge that's popping out and it says, "Hey, check out your account," or, "Hey, don't forget about this cool event coming up." You don't want that to be red, right? Red in a human center usually means error or fire or bad. Orange or a warning color can generally mean, "Hey, something might be going wrong." Green is universal — Green and blue, they can be used almost interchangeably now — can be seen as success or good job or completion. And so, once again, deviating from those colors can be bad. But it can also, in this case of your website, show a cool use of your branding and who you are while still being accessible and understandable to a user.

**Ben:** Alright. <i class="timecode">[00:14:00]</i> Doesn't look like we've got any questions yet, but if you've got any questions about any of this, please stick it in the chat. We would love to be able to get to those.

Where do you want to go from here, Ashlae?

**Ashlae:** Yeah! I want to talk about just what makes a good design system and then kind of help build some of those building blocks for anyone else who might be interested in building one.

**Ben:** Alright. Yeah, let's go ahead and do that. So where… When, like, when you're building out the design system at work, like, where do you start with that? What's easiest? What are the, like, low-hanging fruit  there? And what are some of the most important things to get right off the bat?

**Ashlae:** Yeah, great question. For that, it's your foundations. And so if you go to any design system… Let's just look at Material real fast, if you wouldn't  mind looking up Material UI and putting that on the screen. Those foundations, I already mentioned color and typography, but it's a little bit more than <i class="timecode">[00:15:00]</i> that, too. It's grid. It's how your webpage is laid out. It's your spacing. So, like, what is your vertical rhythm? What is the expected spacing between text and objects? Yeah, here. "Material measurements," "Responsive grid layout." It even goes into, like, pixel density and how your components should behave and your elevation layers. And this can seem like a lot if you're just getting started. Material is incredibly in-depth. They are one of the leading industry standards, and that's for a reason. They have so much documentation, so much usage information. And not everyone can start that way.

But to start: colors, typography. How does your webpage lay out, so what is your grid system? Usage, so when should you use those colors? Put actual detailed guidelines around how those should be used so they aren't used incorrectly.

And even when you do that, let me tell you, not everyone always follows that guidance. I've had people come in and I <i class="timecode">[00:16:00]</i> go, "So this green that you're using, it's not quite accessible on the background that you're using. And I noticed it's not our green, which would be accessible. Why aren't you using the color from the system?" And they go, "Well, I didn't like your green." Um, I said, "Well, it's not about 'like.' It's about fitting the system and following your design heuristics to make sure that our pages are accessible and uniform no matter who is building it or if it's coming from inside the company or outside through a third-party service. Like, they are put in place for those reasons."

So foundations 100% is the first place you should start and building up *why* your system is being used and the intent behind it. 

**Ben:** Alright. Yeah, so, I guess let's… You sent me some resources ahead of time, just like ways to kind of wrap your head around best practices for color and typography, so I guess we could go through those. 

<i class="timecode">[00:17:00]</i> **Ashlae:** Yeah, let's talk through those a little bit! I really like this article. It is beautiful, A, first off, and if any of you are interested in color theory, this is a really great place to get started because it is its own, like, subject of expertise on its own. You can… <i class="brackets">[chuckles]</i> You can get lost in colors. You can get lost in typography. And I'm going to specify this by saying I am in no means an expert on color or typography. This is just a nice little intro way to kind of show you how much thought goes into building these colors from the ground up in creating that system.

So you're going to go a little further down the page. I want to show what a color ramp looks like and why it was created that way. So here's a good place to stop. So this is looking at IBM's Carbon language and all of the different colors that they offer as part of their base color. And we see here, the brightness and the saturation are a little all over the <i class="timecode">[00:18:00]</i> place in terms of this grid. And this variability, while fine because you want those vibrant colors, you want those exciting colors, it can also lead to inconsistencies on different backgrounds and text colors that may be used with those colors. Because when we're talking accessibility, right, on large text we want 3:1 contrast ratio, I believe, and on small text for WCAG 2.1, it's 4.5:1, right? 4.5:1 for that contrast. And with most colors, you can actually create a mathematical spectrum to be able to determine which of those colors will always be accessible. And so if you scroll down past this, this is IBM's. And so you can even see with red and blue, it's not quite a curve. It's more like a straight line straight down their saturation. Which once again, fine if they want those colors, but there's going to be those inconsistencies.

<i class="timecode">[00:19:00]</i> So if we scroll down a little bit more, out of this image, past Material, 'cause Material you'll see has the same… Ah, here we go. So now we have I believe what's called a Bézier curve? Don't shoot the messenger if I got that wrong. And these colors are very specifically picked on a saturation and brightness level to allow for those colors on them to be perfectly contrasted. This usually takes a little bit of a specialized software or really, really in-depth knowledge of how these shades and tints are created based off of these base colors that you pick. What they did here is they said, "Alright, 5 is my base color. Now I need to pick a 9 and I need to pick a 1." And then you're able to pick all of the different ones in that curve.

Alright! So yeah, that's color. I'm not going to dive super deep into that because I would be remiss to pretend like I know so much <i class="timecode">[00:20:00]</i> like my design partners do when they have such, such great depth of knowledge, and I highly recommend picking a designer's brain on color and typography alone because you're going to learn so much. 

**Ben:** I did want to shout out — So Stephanie Eckles is in the chat and one tool that she's built is `a11y-color-tokens`. She put the link to that in the chat. And yeah, it's designed to actually help you, like, pick accessible colors, colors that work well together with contrast. So yeah, please go check this out. I actually… I'm so sorry, Stephanie, I need to play with this. This just looks so cool. I've had this on my radar for a while and I haven't played around with it. I really want to. But yes, this is a very cool tool and I'm going to be looking into this at some point as well. So that is yet another way to help you, like, just kind of picking with those colors.

**Ashlae:** That is awesome. That is awesome. I love this. I'm going to check this <i class="timecode">[00:21:00]</i> out too. Thanks so much for sharing. 

**Ben:** Alright. Okay, so color is one consideration and that I think  is kind of the consideration that hits people first, right? Because that's  perhaps the boldest aspect of a design system, is the colors, and it's what people think of when they go to brand.

You also mentioned typography. So how might we… What considerations do we need to take for good typography, and how can we learn more about that?

**Ashlae:** Good typography is the same level as good color. It can be so in-depth and so… Like, there can be so much to learn about it. But in general, you have different kinds of fonts, right? You have serif and sans serif. So if you scroll down a little on this page, Ben, I think the first example was just kind of showing what the differences with those. One of them has embellishments and one of them doesn't. When doing user research on these kinds of fonts, you're going to see that some of them, whether bold or unbolded, <i class="timecode">[00:22:00]</i> are a much easier readability than others. Ben mentioned a lot of cognitive load, and if you have that, if you are constantly trying to concentrate on text because maybe the font kerning, like the way the letters are shaped are spaced, or the line height is just a little off and it's hard to connect some of the lines, like one line to the next line in the same paragraph, you're going to lose that concentration and that understanding from your user, and they're going to either fall off or not follow through with what you want them to do on your page, which maybe is reading an article, buying a product, whatever it may be.

And I'm actually *atrocious* at typography. Like, I'm gonna throw that out there. You ask me to pick typography for a webpage and it's probably gonna look really bad. But what I can do is I can look at it and go, "Oh, I realized the line height's off here." It's really… I actually, I'm dyslexic myself, and so if something's wrong with some of the letters, it's really hard for me to read it. So it's really good to <i class="timecode">[00:23:00]</i> just ask people to look through your typography, look through what you have so far, put it on a page in a long-form context of "Here's a list, here's a headline, here's a paragraph, here's a link." Of your lists, you know, you have unordered and ordered and description lists. And make sure that each of them is understandable as what they are and that they can be read with short forms of content, long forms of content.

And then even on top of that, there's the spacing or the width of your text. So if a user is using a screen magnification software and your text spans an entire page, they're going to have to scroll all the way across your page however many thousands of pixels that is now that they've zoomed in to read that. And that's not super exciting, so a lot of times you'll want to keep your content shorter, maybe like 720 pixel max width to kind of help with that. And then of course you have, you know, your margins and your gutters which is gonna center align, so it might even end up being shorter anyway.

But <i class="timecode">[00:24:00]</i> typography, like I was just saying, has so many pieces. Not only are there hundreds of thousands of different kinds of type in typography, some of them are really easy to read, some of them aren't .And testing which ones are the best is the hardest part because cognitive disabilities are generally the hardest ones to test for, and of course, anytime you're testing with users with disabilities, you have to go through the normalized legal procedure of getting the right research documentation and consent forms and all those fun things. 

**Ben:** Whereas with color contrast, like, we do have industry standard color contrast formulas that work the vast majority of the time. Like, they're not perfect — no formula is going to be — but they work, and so you can sort of mathematically get close to acceptable. Whereas here, it's like, no, it's basically entirely subjective, it would seem.

It's funny that you mentioned that you can kind of <i class="timecode">[00:25:00]</i> tell when the typography's off, even if that's not your specialty, because you've done that for me! You gave me that feedback. And you had me pull up… So this is what my site… I mean, this is an old version of my site, an old draft, and the overall design is the same. But you looked at this and said, "Ben, your spacing's way off. You've got way too much spacing between your lines." And I fought that for the longest time. But you gave me some example line spacings, and here's what it looks like now. The paragraphs are much more cohesive. The lines aren't all spread apart. So yeah, you've concretely given me that feedback, and it's hard. 

**Ashlae:** Yeah, and sometimes it's… Well, I do a lot of critiques, right, of designs or looking at webpages and sometimes it's "What style do *I* like?" And you'll get that feedback from a lot of developers and designers in terms of code reviews or design reviews. <i class="timecode">[00:26:00]</i> But in the end, when you have that really good, like, usage documentation and that type scale, it becomes less upon what style do I like and what do the guidelines state should be what it needs to be and why. Once you have that why and that intent, it's way easier to come back to your business partners or your design partners and say, "According to our guidance that we wrote, the line height needs to be this high to help with legibility and user context," and then they go, "Oh, you know what? That makes a lot of sense," and then there's less of that battle playing out. 

**Ben:** Absolutely.

Yeah, so codelex has been asking a few questions. Most recently, "Do you consider spacing between letters, font size, sans serif or not?" And it sounds like, yes, you totally do. All of these are considerations. And it's fun because you have to balance, like, readability — that needs to be a high priority — you need to balance that with <i class="timecode">[00:27:00]</i> branding though, too. Whereas, you know, I could go in and I can say like, "Oh, my font is Garamond. I'm using a serif font. I'm using Garamond," and that would, I think, just totally conflict with the kind of bold, vibrant brand that I've been going for. No one looks at a serif and goes, "Ah, yes! This is playful and fun!" 

**Ashlae:** <i class="brackets">[laughs]</i> Yes! Sorry, that tickled me very greatly. You are correct. Serifs are, a lot of times they're used in more what at work we call "high-brand moments." So it's like when you really need to call something out, maybe you have some, like, incredibly amazing capitalized callouts, maybe you use a serif font because that looks really good when it's bolded. The font kerning on it looks really clean. You still may need some font spacing here and there, but it works.

The type you use really does help declare your brand. And I think on Ben's website especially, when I think of Ben's brand, <i class="timecode">[00:28:00]</i> I think of this beautiful sans serif font, I think of purple and orange and yellow, and just these really vibrant, great articles, and it's a beautiful system because it is Ben's brand. 

**Ben:** Yeah! So when I built this site out, I just tried to mess with things, right, just to see what I could make, and it was a lot of trial and error. I had never really done a design system before. And so I actually, I started with the logo in Inkscape, a vector editing software. I started with that and that kind of determined the colors. And from there, I kind of came up with, like, some limitations I mentioned earlier. Actually the biggest limitation was once I decided that yellow meant links, yellow could only mean links. And so I have three colors, three main brand colors. They're purple, red, and yellow. And if <i class="timecode">[00:29:00]</i> yellow means links and purple is the main background and red means warning… like, that introduced so many constraints where it's like, oh, okay. Now I guess I need a new purple. Like, it was very much so trial and error. And I feel like it worked out for my site, but I'm wondering, like, I'd love to get into how can we actually like make a design system in a kind of more axiomatic, structured way? How would we get started with that? 

**Ashlae:** Yeah, definitely. So getting started with those foundations from, if you're building the design yourself, having those options in a pallet, so you can visually see them. Here are my colors. For you, it would have been that purple and the orange and the yellow. And then you probably would have needed to create shades and tints of some of those colors. So like that secondary purple color in your banner is probably a tint of your darker purple. And you start listing all of those out and then you start defining where those are used. Once you do that, you can even assign them <i class="timecode">[00:30:00]</i> to what's called design tokens or variables, similar to the repo we just took a look at which already has some nice ones all built out for you. And you can start assigning names to them so that you can reuse them wherever they're needed.

The biggest thing I want to impart about design tokens to everyone is that every industry standard is different. Some design systems like Bootstrap use what I call component-specific design tokens, where they get as specific as "accordion border radius" is the name of the variable, right? They are being so, so specific that that token can only be used for that design or for that style. Then, you get somewhere like Lightning, Salesforce with Lightning, which is another big system where they have a mix. And Salesforce's Lightning, they've got some interesting, interesting stuff. You'll want to click on "What is Lightning Design System." Nope, that's <i class="timecode">[00:31:00]</i> the wrong one. It's all good. 

**Ben:** Go ahead and keep going and I'll find it. 

**Ashlae:** And in some of their design systems and some of their tokens, they use a mixture of component-specific tokens as well as ones that are really, really, really generic, and that those generic tokens can be used wherever they need to be. But the problem with generic tokens is that, let's say you need to scale your system, let's say it's changing and you're going to do a whole new brand, but you don't want to rewrite everything. Well, what you do is you change the value of your design token. Let's say you're changing from Ben's purple to a bright green now. He wouldn't want to change that token everywhere. He would only want to change it for the places where that purple is being used for that specific instance.

So sometimes you have too basic, which is "I'm going to use the actual color name as my variable." Well, what if we're <i class="timecode">[00:32:00]</i> no longer using your purple anymore, Ben? What happens with your build to your website if that variable no longer exists? It breaks, right? So there has to be a balance in how you name these and the naming conventions you set. And here's where I'm going to go back to those foundations again. It all matters from a systemic viewpoint of what you need those to do and the intent behind them.

So maybe you are like Bootstrap and you really, really, really need that consistency of those tokens. If you do the accordion example, the component for accordionm if you scroll all the way down to the bottom. Bootstrap is… <i class="brackets">[chuckles]</i> It is interesting. You'd want to go to "Examples" or, yeah, "Get started."

**Ben:** There we go, okay.

**Ashlae:** "Components" on the left-hand side. Click on "Accordion" and scroll all the way to the bottom of this page. They have Sass variables for anything and everything related to this accordion if you need to <i class="timecode">[00:33:00]</i> access that to maybe create your own things.

And that's another beauty of design tokens, is that they can actually be overridden if maybe there needs to be some more customizable solutions to your system that the base system isn't going to give you. Like I mentioned with Material earlier, Material, doesn't really… They know one company is not going to use their system. They need it to be so flexible that it can be reused by multiple systems with whatever colors they may have in their theme.

And yeah, so that is… Design tokens, I think, are a great way to get started and define what those are. And if you guys would like, we can do a little code-along demo for—

**Ben:** Let's do it!

**Ashlae:** —one of my favorite… There's multiple systems to do this with, and actually, I believe you said her name was Stephanie, I'd be interested to see what she used in her system to generate those tokens. But I really like Amazon Style Dictionary. It is an open source solution that allows you to export design tokens for multiple platforms. So if <i class="timecode">[00:34:00]</i> you're doing something locally, this is still a good tool. It can be very, very lightweight. But it can also be if you're making a system for desktop and for mobile, so iOS and Android, and for a content management system and for however many other platforms there may be out there. Each of those platforms requires a different kind of variable. If you're on iOS, you need Swift. If you're on Android, you need XML. If you are in web, you could use Sass, or maybe it's way more basic than that and you're doing a vanilla JavaScript version of something, so all you can use are CSS variables or JavaScript that you implement in your JavaScript code, and you need those variables passed through as JavaScript variables.

So, this tool is pretty nifty — I'm going to give it a little shoutout — because it can be configured to do whatever you like. My recommendation is follow their documentation. The <i class="timecode">[00:35:00]</i> more complex and differentiating you get with your naming conventions, the more custom transforms — what they call transforms, and transpiles — you'd have to do in order to get the output that you're looking for.

And design tokens… I see there was a question asked. "Is it possible that a design system is not maintainable or it's difficult to grow?" And the answer is yeah, it can be. And sometimes, and I think there was a question earlier like, "Is it better to just start a new version?" Sometimes the answer is yes, but if you set up a system like this with design tokens — and maybe even Ben can show you how he used kind of design tokens in his code or his website soon, too — because if you do that, it makes it so much easier to migrate and it's less of a "cut all your code out all at once and restart over" and "let's just make some minor updates and do some regression testing, and now our system should work as a whole." So here is Ben's CSS for <i class="timecode">[00:36:00]</i> his website, and he's defined some tokens here that he didn't realize were a token.

**Ben:** Yeah, so these are — I'm using, if you've never seen these before, these are CSS custom properties. They let you effectively define variables in CSS. What's really cool is, you can use CSS's scoping on this. So you can, like, you can pick a more specific selector and then redefine that variable and it's only redefined, like, in that selector.

So I could say, for instance, like, yes, this holds true for the whole document, except for inside a `<main>`, `--primary` is actually now `tomato`, which is  extremely fun. But yeah, so I'm using, this is Sass right here, which builds into CSS, and I've defined these variables, but actually I'm not using Sass's variables. These are just straight up CSS custom properties. 

But what I can do — you know what I'll <i class="timecode">[00:37:00]</i> do is, I'll build the site. So this is an Eleventy site that I've got. Big fan of Eleventy.  And I can pull up the… Yeah, so here's my page. It's running locally. And I'm just going to cause some chaos here. I'm going to say instead of purple, everything's just going to be tomato. It's going to be great. So I'll change my primary to tomato and we'll see what changes. I'm sure something's going to change. There we go. So we're not winning any color contrast awards. But yeah, I can go in and start just kind of hacking away at this. Maybe this is… I think coral is a color. Yeah, so suddenly, you know, I'm all about… Grape is out. We're on tangerine now. Tangerine is in.

So I can start to change these and other things throughout the project will also just kind of subtly <i class="timecode">[00:38:00]</i> change as I do so. But yeah, so this is a thing we can do. I wonder if I've got… Yeah, so we can see that previously these links here, these anchor links, used to be purple. They're now coral. So you can change a whole bunch of things in one go, which is awesome. 

**Ashlae:** Yeah. If you can set it in one place and forget it and then set it and change it in one place later when you need to unforget it, that's really the best thing. The last thing you want to do is go find a bunch of static hex codes throughout every code — Especially, like, think about this from an enterprise level. Think of how many codebases there could be with how many static hex values just floating around everywhere. We had a problem with one of our systems where someone was using an old hex value from a system that was, like, four or five years ago, and it ended up on our homepage, and it wasn't a color that we were using anywhere else on the site. Don't know <i class="timecode">[00:39:00]</i> how it got put there. I don't know how it got missed. But if they were using a variable, if they were using that system instead of a hardcoded hex value, it would never have happened in the first place.

So a system that is not maintainable and is difficult to grow… It's just going to show very easily for how, like, just take one color and try to change it and see how difficult it's going to be. And then replace that with a variable and see how much, way easier it's going to be to scale your system.

**Ben:** Absolutely. Alright. So you mentioned Amazon Style Guide. I'd love to spend a bit of time with that, so I will pull this back up and we will go ahead and I guess follow the quickstart. 

**Ashlae:** Yeah, you can follow the quickstart, or we can just go straight into their basic example that's on their GitHub. We're going to be doing some global installing of `style-dictionary` real fast, and what that's going to do is allow <i class="timecode">[00:40:00]</i> you to use the `style-dictionary` command to even initialize a brand new project. They do have some boilerplates already that are made where you don't have to do that though. So either we can follow this one, or `style-dictionary init` will just set up a base project for you. 

**Ben:**  I have to create a new… 

**Ashlae:** You do.

**Ben:** Yeah. Okay. Call this `design-system`, and then… Oh, I've got an alias that lets me make and hop into a repo in one command, or a folder. Okay, so `style-dictionary init`, you said? 

**Ashlae:** Yup.

**Ben:** `init basic`.

**Ashlae:** Ah, `basic`. Apologies. You could also do there, instead of `basic`, I believe `advanced` or  `complete`, and those are a couple of different systems there that you can do. So now, if you want to open up the files that that created, we can kind of talk about what it's doing. 

**Ben:** Yes, sounds good. <i class="timecode">[00:41:00]</i> So I see we've got a build directory, properties directory, a config, and a README. 

**Ashlae:** Yes. So what this is doing is it's taking some basic JSON out of your properties folder. If you want to open that up, we can kind of show what that looks like. And right now they have color and size. So these base colors are really important to define. Like we were saying, our foundations, you should already know what those are. Whatever you're going to name them, the actual token names, who cares? First off, what are your colors? And in this case, we have color-base-gray with a light, medium, and dark shade, a red color, and a green color. So if we wanted to make maybe Ben's website, we could copy-paste… We could change some of this stuff if we wanted to. We could do color-based-purple, light and dark. We could do color-base- red and color-base-yellow.

And what this is going to do is it's just going to straight up set our, just the hexes that we're going to use throughout the codebase. <i class="timecode">[00:42:00]</i> These should never see the light of day of consumers. These should not be used in actual code, because like I said earlier, if we get rid of purple-light, many places you gotta go change that in your code so your code will compile properly. So these, like I said, they're only for use within this system.

Alright, so now we have a purple-light and a purple-dark. If we go to color/font.json, we'll see how these base colors are being used from that file via a kind of nifty little, I want to say there probably is a regex on the backend to get all of this working through JSON, but it's pretty nifty. So they're saying they have three font colors and three tokens for fonts. This is color-font-base. That's what it does for your Sass variables, is it appends it with a hyphen. And that base color is going to be our red. For some reason, we'll have red base text. <i class="timecode">[00:43:00]</i> Our secondary font color is green, again for some reason. And tertiary is our light gray. If we were doing what Ben's website is doing, it really looks like he has two main colors, or one main color of text. And so he wouldn't necessarily need all of these, but he could have a color-font-base if he'd like that's defined via the system.

**Ben:** Got it. Okay. And then there's also size/font.json, and yeah, this is giving us scaling of our typography. 'Cause that's one of the things, right, is like, you need to have… When you're picking your font sizes, you don't necessarily want something that's just like bigger. Like you don't necessarily always want to go like, "Oh, this next size up is 4 pixels, and then the next size up from that is another 4 pixels bigger." You actually kind of want it to be a little more logarithmic, from what I understand. You should look up things like harmonic scale. I don't understand it. It's <i class="timecode">[00:44:00]</i> too mathy for me. But =people have figured this out, and it's great. 

**Ashlae:** It is, definitely. Type scales are very, very important. You don't want your headline 1s on one page to, you know, be 40 pixels, and on another page be 12 pixels. Not only is that just a usability thing, it's also just a consistency thing. I don't like to have to code multiple values for the same thing over and over and over. Make your own life easier — make variables! So that's the tag for this whole show today. 

In this case, Style Dictionary does a couple of really cool things on the backend. We can talk about that build file in a moment. But what it's doing is it's saying this is actually the rem value, because it will take rems and convert them into anything else that you may need. For Android, you have, I believe, `dp` and `sp`, `dp` being non-font sizes and `sp` being font <i class="timecode">[00:45:00]</i> sizes, which is important because font sizes should scale appropriately, which is why we use rems or ems in web but also we still use pixels for things like spacing because that doesn't necessarily need to scale appropriately. And then for Swift, we end up getting points, is what Swift uses, and so on and so forth. Maybe Android uses hex-8 values and Swift uses SwiftUI Colors.

And the fact that it can export into so many different platforms is really this project's strong suit. If you know you're going to need these for multiple things — Think Spotify. How many platforms is Spotify on? How many platforms is YouTube on? Like we have Fire TV. We have Apple Watches. We have all of these apps with all these different softwares and they don't need to code all of this again and again and again. You set it once— 

**Ben:** Yeah, you define it in one place and you specify multiple build targets. And that way, if you need to <i class="timecode">[00:46:00]</i> update, you're not, like, asking, "Hey, iOS team, please go update all these things. Android team, please go update all these things." It's just like, it does it for you.

**Ashlae:** Yes.

**Ben:** You get to focus on actually building out the brand. 

**Ashlae:** Yeah, exactly!

**Ben:** Cool!

**Ashlae:** So if we go check out the build file, we should actually see our output.

**Ben:** Alright.

**Ashlae:** Let's go into scss. I feel like most people know Sass over maybe iOS Swift and Android styling. But in here… So, Ben hasn't rerun the build command, so his new purple colors aren't showing up yet. But if he reran the build command, his purple colors would show up! 

**Ben:** `style` — not `guide` — `-dictionary build`? 

**Ashlae:** Yes, I do believe so. 

**Ben:** Boom. No, why…?  

**Ashlae:** Go to your README? I don't remember how to do it in this base build. 

**Ben:** Build…

**Ashlae:** The first time… Should look like that… <i class="timecode">[00:47:00]</i> config.json… Three platforms defined… Keep going. Sass, iOS. You might just need to do another in,… Oh, go forward and take a look. 

**Ben:** "After you make that change, save the file and rerun `style-dictionary build`." 

**Ashlae:** Yup. Did you save the file? 

**Ben:** You know, I thought I might've. In the meantime, we've got a question from codelex. With regards to size and fonts, are there keywords or naming conventions for these types of things? 

**Ashlae:** Yeah, so Amazon Style Dictionary uses a naming convention called CTI,Category/Type/Item, and so for that, it is – Ah, that's what you're missing. Yep, I see it. And so for Style Dictionary specifically, the way that it runs its custom transforms is that it's looking specifically for the category of <i class="timecode">[00:48:00]</i> color, time, asset, size, and a couple others probably. And then it will do certain things to those based on that category. So for color, if it's in web, it's going to make that a 6-hex value, right? For Android, it might do hex-8 because they require that extra opacity layer. I believe that's what that is when you add the two f's at the front for Android, that's what that's doing. Could be wrong there. For time, maybe it adds seconds or milliseconds, depending on your platform. For size, maybe it adds points or dp or sp or rems or pixels or ems based on what it is, right? 

And sometimes you have to write custom transforms for those things, which we won't get into today. But they do have really good documentation on how to write those, if any of you were interested in making something custom and you don't want to follow this naming experience here.

For example, I know Ben, we <i class="timecode">[00:49:00]</i> have — oh, look, the purple's showing up! — we have the Material UI Theme Generator, and their tokens are named incredibly differently from CTI transform. So in here, we have something like `primary1Color` —  if you look here on the right for the pallet — `primary2Color`, `primary3Color`, and those are in camelcase. And Material is used a lot in Android systems, and so Style Dictionary actually does lower camelcase for Android exports. I believe it does snakecase for iOS. Straight up out of the box. Like, there's nothing exciting you'd have to do there. So yeah, here's that hex-8 I was talking about with the two extra f's in front. Here's the sp and the dp for their font dimens. For iOS, they're using — I don't remember which one this is, 'cause we don't use this one, but it looks very iOS-y. And then here's the actual Swift output files as well for how they import these themes themselves. 

**Ben:** That's super cool. Okay, so I want to do… I want to <i class="timecode">[00:50:00]</i> try something here, which is, I think… So if I'm defining, like, parts of my page, like let's say I wanted to have, you know, some button stuff going, right? I think I could probably just make a new button.json and say… Looks like it needs "color." And then in here I could define "button," and then I can say that my button color… I could just… So I could define two buttons, right? And I guess the proof of… What I'm doing here is just proving out that, like, the names here aren't magic. I can pick whatever makes sense for my system. So if I've got, like, some buttons that are calls to action, then I can say that those are, let's see, the value of this is, I want to say it's my secondary color. <i class="timecode">[00:51:00]</i> I have keyboard shortcuts for a lot of stuff too, which isn't helping. But then I can have the other ones that are just, I'll say "default." We'll make this my ternary color. Nope, hang on. Oh, my secondary and tertiary are set to the same thing. That's absolutely wild. I'll say that this is now actually… There we go. We'll just have two different colors there. So I can just call this whatever I want, whatever makes sense. So I can say like, hey, I've got my color for the buttons and specifically for the default. And then I could rebuild this and check, you know, say, the variables. Okay!

**Ashlae:** Very nice!

**Ben:** We got, my calls to action are red. My default is yellow. But buttons, of course, are incredibly <i class="timecode">[00:52:00]</i> complex, right? So they've got tons of different things. So we could have in here, I think I can also say that we should have, like, a "disabled" property.

**Ashlae:** Nice!

**Ben:** Okay.

**Ashlae:** Yeah, let's take this the step further. So actually for your default, what you can do, like, a lot of people have primary or secondary colors, if you wanna take even more complexity out of it to make it a little more generic. So instead of "cta" or "default," maybe it's "primary" and "secondary."

**Ben:** Okay!

**Ashlae:** In the base color for that, you can actually make another layer called "state" on top of your CTI, or I call it "static," so what's what's happening when nothing that's actionable is happening to that item. And I make an object for "static." I make an object for "active." I make an object for "visited" if it's a link, not a button. I make an object for "hover." And then suddenly you have all these values that can be pulled to use specifically in those instances. And when you theme later — maybe you want to, you know, do a whole rebranding — you just go and change all of <i class="timecode">[00:53:00]</i> those! 

**Ben:** codelex is asking if I had my favorite colors saved in VS Code. I set up keyboard shortcuts for a lot of things. I'm using, it's something called Espanso. Minor, minor segue here, but it lets me just create a whole bunch of keyboard shortcuts. So I put all of my colors in there, so I could say, like, "Oh my primary color? Yeah, it's that." So that's what I'm doing. I probably shouldn't have done that for demo purposes, but yeah, that's what I'm doing to just magically spit out hex codes, is I've saved a whole bunch of shortcuts. Whoops! 

**Ashlae:** I love that. I love it.

So yeah, you're going to actually probably run into an error with what you have currently, because you have a value under your default. But we'll try it real fast! It might export properly!

**Ben:** It looks like it might've, yeah.

**Ashlae:** Let's try it!

**Ben:** So my <i class="timecode">[00:54:00]</i> button-cta— I don't see the "disabled" though, so. 

**Ashlae:** Yep, and it's because of the way that it's nested there. So every one of your keys needs to have a corresponding value. So for color-button-default, you probably want it to be color-button-default-base or -static, and then it will get its own key when it's generated. So just like you have disabled.value, you'll want, like, a static term. Yeah. And then you'll copy-paste that value into there.

**Ben:** Yeah, got it! Okay!

**Ashlae:** Mmhmm!

**Ben:** This is such a cool tool and I'm now super wishing I had had this when I was building out the site initially. This is awesome. Wow!

**Ashlae:**  It is pretty cool. So now, if you build again, you should have those interactivity, you know, states. You should have "static" and "disabled." 

**Ben:** Nice! 

**Ashlae:** Well, so then I would encourage the next steps would be add "hover" and "active," <i class="timecode">[00:55:00]</i> going through and… And you don't necessarily even have to make button- or component-specific colors. You could make a very generic "interactive" token. Like, there's so many ways to name these so that they can be reused responsibly throughout a site. And I feel like Material UI theming does a very good job of that in a very visual way. I mean, it's that site we were just looking at, too. If you wouldn't mind showing me that one.

**Ben:** Let's do it.

**Ashlae:** Cool. So on this page, I really… Anything that I can get a visual representation of how color applies and why, I love it, absolutely. Someone showed this to me this last year, while I've been building out a design system for my company, and I was like, "Man, I need this for all of my tokens." So here they have somehow condensed an entire system's worth of color into these 20 colors, I do believe. primary1, primary2, primary3, <i class="timecode">[00:56:00]</i> accent1-3, textColor, secondaryTextColor, an alternateTextColor, some borders, some… Specifically they've called out disabledColor, which I love that they have one disabled color used throughout their site. And then what they call pickerHeader, clockCircle, and shadowColor which are apparently unique systems.

And so if you go in here and you just change some colors around, you're actually going to see where those apply and why. I like to pick really, really vibrant, awkward colors that don't match things, like that. 

**Ben:** Graphic design is my passion! 

**Ashlae:** <i class="brackets">[laughs]</i> So the accent1Color, it's being applied to the secondary buttons, to a secondary floating action button, to some badges. That other color you turned to yellow is being used in checkboxes and radio buttons. It's being used mostly on an interactive scale, it appears. Ooh, that yellow is vibrant! 

**Ben:** Yeah…

**Ashlae:** There we go. So we're able to really see how <i class="timecode">[00:57:00]</i> a specific use of color can be applied systemically throughout a site without needing 20 or 40 variables.

**Ben:** Mmhmm.

**Ashlae:** Is this achievable for every system? No, I don't believe so. Some systems are inherently complex. If you look at something like Material UI, like the actual system itself, I mean, they have so, so, so many colors that can be overridden with their Material Theme Provider. So, yeah, like the color system here. So they actually have the shades and the tints that we needed previously on those color ramps, right? There are so many, but they are still using a lot of those tokens to theme everything throughout the system. So whether you're using those shades and tints to every single specification to make things really cool, or a lot of times these systems on the backend will automatically apply those shades and tints, which is a really cool, tricky, little feature that they <i class="timecode">[00:58:00]</i> apply so that you don't have to. You set those 20 base colors and it determines, based off of those colors, what everything else should be tinted and shaded as.

**Ben:** That's awesome.

**Ashlae:** So it's pretty cool, but if you don't get the color ramp correct, like we mentioned earlier when we looked at Material and IBM next to each other, they don't quite have that perfect ramp to get that nice color contrast available.

**Ben:** Gotcha. So, just kind of, I guess, 'cause I know we're a little a little over, a little later than we typically go, so I'd love to just kind of start wrapping  things up. But, so if I could paraphrase the kinds of things that we've seen today… Design systems, by starting at the, like, token level, they let you, like, name and just define the, like, the sheer fundamentals of your experience — those might be your font choices, your type scales, your colors, <i class="timecode">[00:59:00]</i> layout, et cetera, all of those things — let you define those basically just as, like, the building blocks. And you use those building blocks to expand and to create consistent systems that have been vetted because, like, you know, we vetted all these colors for mutual color contrast, et cetera. When you codify a design system, you can provide guidance for, like, "Hey, we know we have this hex code in our system, but you should really only use it for this. This color means this." and yeah, so we saw some of those different considerations like color and typography. And then we saw how using tools like Amazon's Style Dictionary let you really define those variables in one or multiple JSONs, like just centralized JSONs, and compile those <i class="timecode">[01:00:00]</i> into different build targets that you can use across all your apps. So you can define once and reuse anywhere for consistent meaning. And that really seems to be the heart of design systems. 

**Ashlae:** Yeah. Good design is consistent, it's reusable, it's user-friendly, and it's documented really, really well. If your design is not documented but your code is, doing it wrong. If your design is documented and your code isn't, still doing it wrong. Document everything. Don't expect people just to understand what it means right off the bat, even if you've been in the UX profession or the development profession for 20 some years. We're always learning. Humanity and psychology is always evolving, and there will always be really cool software techniques that need to be accounted for accessibility-wise or design-wise as time goes forward.

**Ben:** Alright. Ashlae, thank you so much for hopping on. I've had a blast and I'm going to be playing around with Style Dictionary going forward as well. <i class="timecode">[01:01:00]</i> I should have been using this so long ago. Y'all, please go follow Ashlae. Here is her Twitter.

And you know, while you're following people on Twitter, go follow me at @SomeAnticsDev. You'll see all the different things that we've got going on. Next week, Andy Bell is coming on. Andy is going to be showing us how to use web components. We're going to be making us some dang spicy web components, and I'm really, really excited for that and I hope y'all are as well.

Y'all, thank you so much for joining us this Tuesday and I'll see you next week. Bye!

**Ashlae:**  Thanks everybody!