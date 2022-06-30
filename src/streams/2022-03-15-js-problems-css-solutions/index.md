---
title: "JavaScript Problems: CSS Solutions, with Amit Sheen"
thumbnailTitle: "JavaScript Problems: CSS Solutions"
hosts:
  - Ben Myers
  - Amit Sheen
tags:
  - CSS
upload: https://youtu.be/__Thf_Wo-oA
---

JavaScript lets us do all sorts of incredible things, and the possibilities are endless. But with so many options, a component that seems so simple from the start can have all sorts of weird states and bizarre conditions, and we can sometimes find ourselves struggling with our own code and hacking our way to the desired result. Many of these problems have far simpler solutions: CSS.

Join us as [Amit Sheen](https://twitter.com/amit_sheen) shows us real-life everyday challenges that JavaScript developers encounter, and demonstrates practical tips for solving these problems with CSS instead.

---

## More From Amit

- [Follow Amit on Twitter](https://twitter.com/amit_sheen)
- [Amit's pens on CodePen](https://codepen.io/amit_sheen)
- [See other presentations Amit has given](https://www.amitsh.com/)
- [Amit's "Pushing CSS to the Limit" workshop](https://smashingconf.com/online-workshops/workshops/amit-sheen)

## Mentioned Links

- [Bramus's tweet](https://twitter.com/bramus/status/1469252269778649089)
- [Style Stage](https://stylestage.dev)
- [Some Antics: Let's Build a Style Stage Theme with Stephanie Eckles!](https://www.youtube.com/watch?v=w173MUXyBrc)
- [Amit's Newton's cradle pen](https://codepen.io/amit_sheen/pen/XWMXwvJ)
- [Amit's jumping checkboxes pen](https://codepen.io/amit_sheen/pen/YzQoMxR)

## Transcript

<i class="timecode">[00:00:02]</i> **Ben:** Howdy, howdy, y'all. Welcome back to Some Antics. Hopefully the daylight savings time over the weekend for Americans hasn't tripped y'all up too much with the timing. But happy Tuesday! It's great to be here, great to be live with you all again. And today I am joined by Amit! Amit, how's it going? 

<i class="timecode">[00:00:21]</i> **Amit:** I'm fine! How are you? Thank you for having me! 

<i class="timecode">[00:00:23]</i> **Ben:** I'm doing great. I'm super excited to have had the chance to meet you. We've been kind of chatting in the "greem" room — "greem" room, apparently — green room before the stream and you're just, I don't know, you're a lovely person to chat with.

<i class="timecode">[00:00:38]</i> **Amit:** Thank you!

<i class="timecode">[00:00:38]</i> **Ben:** And I'm super, super stoked to have you on. I wanted to call out—

<i class="timecode">[00:00:43]</i> **Amit:** It's great to be here as well.

<i class="timecode">[00:00:46]</i> **Ben:** My pleasure. My honor, really.

We've got a question from the chat as to whether this will be available later for viewing on demand. Yes. The stream will stay up on Twitch for two weeks. Also, we're going to be uploading the video to YouTube after it's all captioned and everything. I've just put a link to that in the chat as well. But thank you so much for the question there.

Chan's complimenting me on my shirt. I actually made, like, a private bet with myself, Amit, that Michael Chan — lunchdev — was actually going to personally compliment me on my shirt specifically. I wish I were joking. And that happened within the first minute of being live. So here for it. 

<i class="timecode">[00:01:25]</i> **Amit:** I missed it, sorry, but it is a great shirt. 

<i class="timecode">[00:01:28]</i> **Ben:** Thank you, thank you. And we're being raided by Jason Lengstorf. Wow, way to go! Howdy, howdy, Boop Crew. Loved the Remix talk! It's so good to have all of y'all here. If you're unfamiliar, Some Antics is a weekly stream where I bring on guests from around the web development and web design industries to teach something in a hands-on way about building great user experiences for the web, with a focus on accessibility and core web technologies. If you're here from Jason's stream, you're in the right place. This is… we're so excited to have you.

Today, we've got Amit on. Amit, would you like to introduce yourself for folks who haven't seen you around? 

<i class="timecode">[00:02:05]</i> **Amit:** Well, yeah. Hi everybody. If you don't know me, my name is Amit Sheen. I'm a web developer. I specialize in CSS, specifically in animation and perspective and 3D, and maybe you've seen my work in CodePen or in Twitter or in one of the CSS-relevant newsletters.

Today, I am going to talk about something a bit different. We're going to talk about JavaScript, because I am specializing in CSS but I do work — my day job is as a JavaScript developer, a React developer. And so this thing of being a JavaScript developer specializing in CSS, when you know both things, you can actually see the synergy of both and you can see a lot of solutions that you can use if you let each one of those languages just do what it does best.

That's me in general.

<i class="timecode">[00:03:11]</i> **Ben:** Absolutely! So on this subject of, like, you know, CSS and JavaScript, like, JavaScript is absurdly powerful and it feels like as time goes on, like, the frontend industry, the frontend space is doing more and more to try to bring, like, CSS into, like, JavaScript land, layout into JavaScript land. But here you are advocating, like, no, no CSS is the way to do this. Like, can you kind of talk about your approach, your philosophy as to, like, when you solve problems with one tool over another, and why is it important to still consider CSS for these tools? 

<i class="timecode">[00:03:48]</i> **Amit:** Well, that is a great question, actually. It's a nice feature to the things that I want to talk about later. But yeah, I do see a lot of people that try to say that, like, all this CSS in JS, this thing that, like, JavaScript developers don't need to specialize, to really know CSS, and that CSS developers don't really need to know JavaScript. I don't think so. I think if you need to know whatever you're doing and think you should know it the best you can. I do agree that there is a separation between what they call the "front of the frontend" and the "back of the frontend," and I do think the separation is good and it should be. But it actually doesn't contradict anything that I'm saying right now, because even if you are one person that does both the JavaScript and the CSS, you can still think of it as two different things and let the JavaScript handle the functionality and let the CSS handle the layout.

<i class="timecode">[00:05:00]</i> **Ben:** Good deal! So yeah, today we're going to be diving into that. I guess, should I go ahead and start sharing your screen and you can kind of talk us through what we're going to be doing today? 

<i class="timecode">[00:05:11]</i> **Amit:** Yeah, so I'm going to start, actually, by talking about… we're going to talk about, the general concept is "JavaScript problems, CSS solutions," so I just want to talk about where the general idea came from, the general idea for this topic. It actually came a few months ago when I've been in a local meetup, and there was a guy there talking about React.

Do I share my screen? Do people show my screen?

<i class="timecode">[00:05:40]</i> **Ben:** There you go, yes.

<i class="timecode">[00:05:40]</i> **Amit:** Yeah.

<i class="timecode">[00:05:41]</i> **Ben:** Your screen is now shared.

<i class="timecode">[00:05:42]</i> **Amit:** Yeah, so in his lecture, he built this very simple accordion component. We all know this accordion component. I've built even a simpler one than he built. You click on an item; it opens. You click on a different one; the second one opens. You click it again; it closes. 

And this is the way to build it with React. We're going to see that the example we're going to see today is with React because, as I said, I am a React developer, and the components we're going to see here are based on components that I've built in my real job. But the general idea — again, we're going to talk about CSS, so the general idea is it doesn't really matter if it's React, Vue, or plain JavaScript, or whatever it is.

But again, this is the component. We have just a selected tab, with tabClicked(), we have an Accordion component. It's just an accordion `<div>` with the children. And AccordionItem that has a button as a header and a paragraph as an item. And this is the markup.

So, at his lecture, at the meetup that I've been here, he asked a question. He said, "This is the behavior of the component. But if we only have one item, okay? We want this item to be always open." And the question was, "How do we know if we have only one item or more?" And it's a good question! Because this "children" comes as an array, as a data structure, we can actually check the value of the length of it. And the solution that he was aiming for is this solution, is actually using the Children API. But you see there's a lot of coding. You need to check the Children API, and if it comes in a different way, you need to check them in a different way.

But actually, before he even started, before he explained all of this, when he asked "How do we know if there's only one item or more?," I raised my hand and I said, "With CSS." And everybody started laughing. So I said, okay, I need to make people understand that they should actually stop laughing and CSS actually was the correct answer.

So I just want to show that the example that he showed here using the Children API, it will work if I delete two items right now and I have only one item. So this item will always be open. Okay? But let's get back to my example that doesn't use this "children." And all we need to do — instead of using this code, this useEffect code — all we need is just one line of CSS. Very performant, very readable, this CSS.

We'll go here to the CSS. Oh, by the way, I haven't shown you. The CSS has an "accordionItem" class with the item header inside, and the item content with the height of 0. And it has the "isOpen." So all we need to do is add right here instead, in front of the "isOpen," to add in a pseudo-class of :only-child. And then, this item will always be open. And if I have more than one item, the behavior would be as usual. And if I have more than either of them, the behavior will be as usual, and if I have one item, then it will always be open.

So this is just one simple example of how to save a lot of code that you would have written with JavaScript, with just one line of JavaScript. And again, just as I said before, let JavaScript handle the functionality. Let CSS handle the layout.

And do you have any questions so far? By the way, I'm not following the chat, if there are questions from the chat. 

<i class="timecode">[00:09:49]</i> **Ben:** There's just already some love for it. For instance, Kevin Powell says…

<i class="timecode">[00:09:53]</i> **Amit:** Hey, Kevin!

<i class="timecode">[00:09:53]</i> **Ben:** "Love how simple CSS can make things like that." 

ActiveB1t goes, "I absolutely agree, techniques should focus on their main purpose. When they do, they help each other be more effective."

It's great. It's excellent. 

<i class="timecode">[00:10:05]</i> **Amit:** Yeah, so I actually did this — when I talk about this concept, people think that it's quite weird giving the CSS, using the :only-child pseudo-class. But if this concept looks weird to you, think about buttons. Okay? Let's say I have a very simple button, and I want, when the mouse is over the button, I want to change the style. So, obviously I will use the JavaScript "onmouseenter" and "onmouseleave," right? No! This is how we used to do it, like, ten years ago, 15 years ago, but now we have the :hover pseudo-class, and everybody's going to use the :hover pseudo-class!

And there's a lot of pseudo-classes, by the way. And we all know the user action pseudo-classes — the :hover, :active — but there is the tree-structural pseudo-class of, like, the :nth-child and the :only-child. And we can actually use them to control the layout, and to let the CSS control the layout and to save a lot of code using JavaScript.

So, do you have any more questions? Or we can go to the next example. 

<i class="timecode">[00:11:17]</i> **Ben:** I don't have any questions. Just to call out, too, that, like, one of the things I love about CSS and HTML is that, like, it's fail-safe. So if something goes wrong, you know, your page isn't fundamentally broken. Whereas, you know, JavaScript, if you run into a null pointwe error while trying to do this kind of toggling, right? Your page can just absolutely break. So not only is it, like, fewer lines of code, it's more resilient code. 

<i class="timecode">[00:11:46]</i> **Amit:** Yeah, no doubt. This is actually another advantage of using CSS. And again, this is just a side effect of letting CSS do what CSS is supposed to do and letting JavaScript do what it's supposed to do.

<i class="timecode">[00:12:01]</i> **Ben:** Mhmm.

<i class="timecode">[00:12:01]</i> **Amit:** And it's just easier. And, you know, the easiest solution is normally the better one, or the more correct one. 

<i class="timecode">[00:12:09]</i> **Ben:** Absolutely.

<i class="timecode">[00:12:11]</i> **Amit:** So, let's see another example, and we're gonna use a different pseudo-element. This is a very simple `<dialog>` element. This is the dialog. We have… wait a minute. Yep. Yeah.

This is the dialog. We have the Dialog component, we with the `<h1>`, `<h2>`, and the `<footer>`. The footer has the buttons inside of it. But we're not going to talk about `<dialog>`. We're just going to talk about the footer itself. Let's see, we have here the outline, just to see the footer. Just going to talk about the…

Why doesn't it work?

Yeah, just go ahead and talk about the footer itself. So, the footer is, as I said, it's dynamic and it has two buttons inside of it, because the dialog gets its props. It gets this "approvedProps" and a "cancelProps." And if you get any prop, you can render a button with the prop, with the relevant props. And as I said, it's dynamic.

So if I'll comment out one button, so I will have only one button here. And if I'll comment the other button, so obviously I will have the other button. But the question is, what happens if I comment both of them out? So now, I won't see any buttons, but I will see the component itself. Okay. If we add the outline again, we will see the component itself.

<i class="timecode">[00:13:44]</i> **Ben:** Mhmm.

<i class="timecode">[00:13:45]</i> **Amit:** But we don't want to see the component. If the component is empty, we don't want to render it! So how do we do it? So, obviously, every JavaScript developer will tell you, "Okay, we're going to add a condition right here. And if one of them is rendered, then render it. If not, so no." Okay, but that's okay if you have two buttons. But what happens if you have three, or six, or an unknown number of buttons?

<i class="timecode">[00:14:11]</i> **Ben:** Mmm!

<i class="timecode">[00:14:11]</i> **Amit:** What if, instead of a footer, it's a menu, and it's like an array of elements that you need to run through? You don't really use it. How do you not render an element when it's empty? Easy! CSS!

We'll go back here to the CSS. And right here — this is the dialog, this is the footer. And the footer, let's just add an :empty! Sorry, :empty! And if it's empty, we can add a "display: none," for example! And right now, that's it! It's gone! And if we do have a component inside of it, if you do have a button inside of it, it's gonna render. And it doesn't matter if it originally has two, three, or 200 buttons. The second this dialog is empty — that the footer is empty — it won't render.

And I know it's not really best practice to render something to the page and then remove it from the page. It's correct. But sometimes, this…

By the way, this type of solution doesn't work 100% of the time, obviously. But when it does work, sometimes it's makes more sense to do it like that and not starting all these ifs and conditions and complicating your code.

<i class="timecode">[00:15:33]</i> **Ben:** Absolutely.

<i class="timecode">[00:15:33]</i> **Amit:** And by the way, it doesn't actually have to be "display: none." You can, instead of "display: none," just remove the border. Let's say "border: none." So now, you don't have a border. Or you can actually just say, "padding: 0," which will actually look kind of okay.

And again, the second I will bring one of the buttons back, all of the style is going back to the original style. And again, this is by simply using a pseudo-class.

One more example that I want to show is using a list. Okay? I'm running through the examples because I thought that people would have more questions.

<i class="timecode">[00:16:24]</i> **Ben:** Y'all, if you have any questions, please go ahead and put them in the chat.

<i class="timecode">[00:16:29]</i> **Amit:** Yeah! If not, I have more examples. It's okay.

"We mostly don't." Okay!

So this is just a List component. Originally, it was something else, but this is a user list. And normally in these types of components, we're going to get the list from a fetch, but here I've got the user data hardcoded. But I'm going to leave it like that. And all I'm doing is just, I'm mapping the users from the user data, and I'm mapping it to `<div>`s, and this is what it is.

And what our designer wants is that this list, one item is going to be aligned to the left, and then to the right, and then they want them to alternate.

And actually, the developer that did this mission wasn't me. It was a different guy. And he obviously used here, he put the user. He actually used the index. And he just added, right here, if the index modulo 2 equals to 0, then add "left." If not, add a class of "right." And he just added two more classes, obviously. And in the CSS, he added two more classes. And I said, "No. Why do you want to add those classes? You don't need to."

So instead, we can come over here. This is the CSS, obviously. This is the user. Right here in the user, instead of adding "left" and "right" classes, we can use the :nth-child. We all know the :nth-child. But not everybody knows we can actually add "odd." So if we're going to add "odd," we can add "align-self," I think, "flex-start." And then everything's going to be to the start. And just like we added "odd," we can actually add "even." And this is going to be "flex-end." So now we have the alternating design.

And why I think this is better than using classes, because this way you… for example, let's say I want this design to be just on desktop, and if you move to smaller screens, I want it to be again in the middle. All I need to do is just add a media here. Let's say that the media is… let's say "min-width: 600px." So I just need to move those inside the media! And now, in bigger screens, I had a design, and in smaller screens, they all move back to the middle. And the change in the layout doesn't reflect any change in the markup, and that's the way it's supposed to be. 

This is a great tweet by Bramus that I think that, if you don't know it, go follow him. He says, "Repeat after me: A change in layout should not require a change in markup." And it's absolutely true. And if you have a chance of leaving the markup as is and changing the layout using CSS, let CSS control the layout and don't use any markup changes if you want to change the layout.

<i class="timecode">[00:20:06]</i> **Ben:** Mhmm.

<i class="timecode">[00:20:08]</i> **Amit:** And one great example of that — and we actually talked about it a bit in the green room before — the best example maybe for it is Style Stage. I saw Steph in the chat. So obviously, if you don't know Style Stage, stop and go and check Style Stage. And it's a beautiful experiment, and all sites that you see here, they all look very, very, very different from one another. And here, this one's mine. And they all look very different. They all have the exact same HTML. The only thing that's different is only CSS. No JavaScript, nothing. Only CSS. So it's a beautiful thing to see how much power CSS actually has today when it comes to controlling layout. Not just controlling colors and font sizes. Actually controlling the layout itself, if you have good, structural HTML. 

<i class="timecode">[00:21:08]</i> **Ben:** Can we pop a few of those open just to take a look and really, like, hit that example home for people? 

<i class="timecode">[00:21:12]</i> **Amit:** Yeah! Yeah, absolutely. Let's take… There's one thing I do want to show. Let's take this one, this one, and this one. And check out just the navigation, okay? So here it's in the middle. Of course, take a look at the entire site. Everything looks very different. Those three sites actually have the exact same HTML. But even look at the navbar. Here it's over here, and here it's in the middle, and here it's in the top. And you can actually look at some examples, like I think this one—

<i class="timecode">[00:21:54]</i> **Ben:** Okay, I'm going to, real quickly, give a motion warning for this one. I think we're going to get some, like, Zoom choppiness, but like that one I know needs, like, a bit of a motion warning for anyone who's not great with, like, flashing animations.

<i class="timecode">[00:22:08]</i> **Amit:** Yeah, sorry. Yeah, you're right. So this actually has a lot of flashing. But you can see here that the navbar is even in the right, and it's fixed in the right. Or it's actually… I think it's not fixed. It's absolute. Not absolute. Sticky. Sticky.

Yeah, so there's a lot of great examples.

<i class="timecode">[00:22:30]</i> **Ben:** It's worth calling out, like, when you say the markup's the same, you don't just mean, like, oh, it's the same, like, elements and everything. Like, even down to the classes and the selectors, like, the markup is *identical.* The only difference, basically, is that it's pulling in a different stylesheet, right? 

<i class="timecode">[00:22:46]</i> **Amit:** Yeah, and this is the whole idea of Style Stage, is you get… this is your HTML file. You can't add JavaScript. You can't add anything. Just write CSS.

And I remember actually talking with Steph when it came out, and I actually asked her, "Isn't it, like, detached from real life?" I remember asking her that question. And she said, "Well, no, because you'd need to know it. You need to understand the power of CSS." And, well, yeah! This is the way to understand the power that that CSS has.

And again, as I said, as a JavaScript developer, I see a lot of those problems and I'm like, just learn how to use your CSS and let CSS control the layout, and you can actually save yourself a lot of problems in the future. 

<i class="timecode">[00:23:36]</i> **Ben:** So, I have a question for you, which is — and you can let me know if this isn't the right time for it — but when would you think of things in the inverse way? Like, when does it make more sense to handle some of these things with JavaScript? Like, what are kind of the boundaries of what you think is reasonable to do with CSS? 

<i class="timecode">[00:23:55]</i> **Amit:** Yeah, so that's actually a very good question, and I actually know of somebody that likes to push the limits of CSS, but there is no, like, very clear rule of thumb. But if you have two solutions in your head — one goes to CSS, one goes to JavaScript — the simplest solution is the one that you should choose. The one that has maybe less code, but the one that is more readable, the one that is more easy to maintain.

So again, sometimes using CSS is not the easiest to maintain, specifically if you're working with teams that maybe those teams involve some full-stack developers or people that don't really know all the specific things that you do with CSS.

I'm going to give you, actually, one example. One company I've talked to recently wanted to move… wanted to start using logical properties. And I said, "Well, of course, you should obviously use logical properties and not use just JavaScript to transfer everything." But the problem they said is that most of the people that handled their code doesn't understand the concept of a logical property. That that's what stopped them until now. They needed actually somebody to teach their developers what a logical property even means, and what the box model even means before they could actually start doing it. So, until they could do it, they worked with JavaScript.

So yeah, sometimes JavaScript is a better solution, obviously. But sometimes, no! Again, if it's something that is layout-related, try solving it with CSS. If it's not the easiest solution, go to JavaScript. 

<i class="timecode">[00:26:15]</i> **Ben:** I also think about this in terms of things like animations, because when you do your animations in CSS land, they're oftentimes easier for individuals to override. For instance, if they have, like… just, if they get dizzy with motion, right? It's easier to disable a CSS animation. Sometimes JavaScript animations, like, aren't always built with that kind of overridability in them. And so that's something that I guess I would consider, like, CSS first, if at all possible. 

<i class="timecode">[00:26:47]</i> **Amit:** I actually think that today, you can actually stop CSS animations pretty easily. But yeah, JavaScript animations, specifically if you use libraries like Lottie or something, they know how to stop when they have the reduced motion flag on.

<i class="timecode">[00:27:12]</i> **Ben:** Yeah. Alright!

<i class="timecode">[00:27:14]</i> **Amit:** Yep.

<i class="timecode">[00:27:14]</i> **Ben:** Did you have more examples you wanted to kind of show off?

<i class="timecode">[00:27:17]</i> **Amit:** Yeah, there is! There is, there is, there is. We talked about pseudo-classes, but what about pseudo-elements? Obviously! ::before and ::after! This is the most important thing, and seriously, I don't know how people don't use ::before and ::after more. I see it as the superpower of `<div>`, specifically when it comes to styling, because it makes every `<div>` you have like three boxes and you can add everything you have, everything you want. If you want, like, a weird border, use a pseudo-element!

So here, we're going to use this example of the user list, but we're going to use the pseudo-elements a bit weird. So actually here, instead of mapping the user data, let's map an empty array. So now, I don't have nothing! So this is, I'm simulating getting an empty result, okay? But I don't want to show nothing. I want to show a message that I have no results, right? So again, normally you're going to start using JavaScript and start checking the length, and if it's like this, render this, and if it's this, render that and so on.

Instead, let's, again, go back to CSS. Right here in the list itself, we're going to add something that we've seen before. We're going to add the :empty. But then we're going to add the ::after. And the ::after pseudo-element gets a nice little content property, and in the content we can say… let's say "No results." And yeah! So now, we can see it here and we can actually style it. We can say that the color is red, and we can say that the border is 1px solid, and let's set the background, and let's have the padding of "1em 3em" just so we can see it. I just want to show that you can actually style it any way you want.

And again, if we can come here and if we do have a result, we will see the results, and the second we don't have results… so, whoops. Yeah, the second we don't have results, it's automatically going to show us the "No results" sign.

And I know some of you actually thinking, and you are right, "I'm not going to use it because I'm not going to use content that is hardcoded inside my CSS." Obviously, you shouldn't do it, because this is really not good practice. But you can actually come here to the list itself, and you can add the text as a prop. So let's say "noRes" — "noRes" — and let's say "blah, blah, blah."

Okay. So now we can actually come to the CSS. And the props, obviously they are like attributes so we can use, inside the content, we can use the attributes of noRes! And now I have the text that is coming right here from the noRes. So, if you're using like a translation library or if you're using dynamic content, so yeah, you can transfer the content dynamically from the JavaScript to the CSS. And when you change it—

<i class="timecode">[00:31:11]</i> **Ben:** And that works because you're spreading that on the underlying `<li>` element, right? Like, if you scroll down to your List component?

<i class="timecode">[00:31:19]</i> **Amit:** Yeah, obviously!

<i class="timecode">[00:31:19]</i> **Ben:** Okay.

<i class="timecode">[00:31:19]</i> **Amit:** Here I am spreading it.

<i class="timecode">[00:31:22]</i> **Ben:** I was initially very surprised but, no, okay. It's because you're spreading the props on that underlying `<div>`. Got it, got it. 

<i class="timecode">[00:31:29]</i> **Amit:** Yeah, yeah. I actually forgot to mention it. Yeah, obviously it will work only if you spread the props. But yeah, so you can actually see it if you want to. Here in the list, you can actually see that this is the noRes. You can see the attribute right here.

<i class="timecode">[00:31:53]</i> **Ben:** Very cool.

<i class="timecode">[00:31:56]</i> **Amit:** And by the way, this is, here in the dialog, this method of adding the content, this is the way I use it to add the buttons. You can see the buttons. have a ::before, and ::before has the attribute of the content because here it comes in the content.

And while we're here, the last thing I actually want to show is… obviously in the original component, I also have an onClick action, and I have a Button component that maps the theme into classes. Here, I didn't have the Button component — I used a native `<button>` — so I actually triggered… I actually used the prop itself, the theme itself, to style the button. You can actually use a prop — again, because I'm spreading the props here, you can actually use a prop to select a specific element. 

<i class="timecode">[00:33:09]</i> **Ben:** Very neat.

We have a question in the chat from ActiveB1t who wants to know, "Do we know how well screenreaders handle text in CSS pseudo-element content?" Do you want to take this, or should I? 

<i class="timecode">[00:33:21]</i> **Amit:** I think you're much more suitable for this answer. 

<i class="timecode">[00:33:27]</i> **Ben:** Okay, so pseudo-elements actually are factored into what's called the "accessible name computation" for an element, the accessible name being the, like, identifier, the label, the title, name, whatever you want to call it for an element once you navigate to it with a screenreader. So pseudo-elements are supposed to be factored into that calculation. And I think — I think — that can be more reliable when you're using interactive elements like buttons, so, like, if you add a pseudo-element to a button, but I'm pretty sure it should factor into things like this as well. And I can actually put a blogpost that I've got in the chat — nice — where I actually talk about exactly that. But what you're going to want to look for, ActiveB1it, is specifically WCAG's, quote, "Accessible Name and Description Computation" formula or algorithm or something like that.

It should be factored in. Whether or not it's actually factored in I think kind of depends a lot on the individual browser and assistive technology, but I think at this point it's reasonably stable. It's not a technique I would necessarily rely on very often—

<i class="timecode">[00:34:48]</i> **Amit:** I agree.

<i class="timecode">[00:34:48]</i> **Ben:** —but it should work most of the time. 

<i class="timecode">[00:34:53]</i> **Amit:** Yeah, I agree. And this is, by the way, something that I do need to mention maybe a bit more. This type of solutions obviously doesn't work all the time. I'm not saying every time that you need to do something, do it with CSS. Again, you use your head. Find out what is the best way. I am saying this is one way that you should consider, and not cancel it out just because it's CSS.

Again, just like we talked earlier about the buttons. If you want to use the :hover pseudo-class, you won't use JavaScript onenter, onleave. You're going to use the pseudo-elements, so use the other pseudo-elements. And yeah, go to MDN and learn, because there's a lot of pseudo-elements. Every time I go into this page — it's in my favorites, and every time I go to this page, I find a new one, by the way. 

<i class="timecode">[00:35:59]</i> **Ben:** Yeah, I think I just saw, like, the :link and :any-link ones at the top. I don't think it quite clicked for me that the :link one only matched unvisited links. That's really cool. Yeah. :local-link — wow. Wow! Wait, wait! :local-link has been there the whole time?! How long has that been there?! Here I am, like, oh, I've been doing this stuff with, like, fancy attribute selectors with, like, operators, like, you know, like the caret equals for, like, starts with. Okay. Who knows? 

<i class="timecode">[00:36:41]</i> **Amit:** "No specification found." The support's not as good, I think. 

<i class="timecode">[00:36:48]</i> **Ben:** Yeah. Okay, alright.

<i class="timecode">[00:36:51]</i> **Amit:** We can check…

<i class="timecode">[00:36:52]</i> **Ben:** Ohhh, okay. "The link ones are not really supported," Steph says, Got it. Thank you, Steph!

<i class="timecode">[00:37:09]</i> **Amit:** Yeah. But there is a lot of different pseudo-classes, so go and check them out. And obviously, I do also different types of pseudo-elements, but ::before and ::after are the pseudo-elements that most of us use. But there is a few more. 

<i class="timecode">[00:37:31]</i> **Ben:** Very cool! Yeah. So, pseudo-classes, pseudo-elements… those tend to be kind of, it seems like, some really powerful tools in your toolkit. Using attributes for some of these things as well is huge. Yeah!

<i class="timecode">[00:37:50]</i> **Amit:** Yeah, I think that the main takeaway is that you actually, first of all, start considering CSS as a valid solution. But anyway, build a strong, semantic, structural markup because it will help you control your layout later on. And it's better for a lot of reasons, but one of it is it's going to help you control your layout. And use more ::before and ::after, because they do give you superpowers.

"Has Amit made sudoku with pseudo-elements?" Are you daring me, Alex? 

<i class="timecode">[00:38:35]</i> **Ben:** I think you've been dared! I think you gotta make it now.

Okay! Well, we actually have a bit of time. While we're here, do you want to show off some of the very cool things you've made to, like, push the limits of what CSS can do? 

<i class="timecode">[00:38:55]</i> **Amit:** Yeah! If you are talking about things I am doing, well, let's go to my CodePen. I think that's the best place to show.

So yeah, people that normally know me know me for things like this one. Yeah, this is pure CSS animations. And this is the types of things I do, and I like to, as I said, push CSS to the limit. Specifically, I actually started doing animations just as a way to test things, because instead of checking one value, you can actually test a lot of them. You can test a range of values. And when you start using animations, things start to look nice and you can start building from there. And I'm doing an animation a lot. I'm dealing with… I'm also working with canvas and with Three.js and things like that, but I'm known for the things I'm doing with CSS.

I actually have a workshop now, if you don't mind me promoting it. It's actually called "Pushing CSS to the Limit." It's a workshop I'm doing with Smashing Magazine. It's four days full of CSS animations, and movement and 3D and perspective and everything. Yeah, this is the link in the chat. Thank you. Yeah, so if you are interested in going into this world and creating — and by the way, in this workshop, I am focusing more in, like, real life. I'm trying to focus in on more real-life components like checkboxes and info cards and radio buttons and inputs and titles and headlines and textboxes and so on. But things that you can use interactions, micro-interactions with 3D. Things that you can actually use in day-to-day and not just weird, you know, card towers. Yeah!

"I'm over here…" — you DO know CSS! I just know different parts of CSS! I'm talking about Building… BuildingBedrockLayout. Yeah, I just don't know different parts of CSS. And you can learn it also. It's not very hard. It's not. 

Travis. Hi, Travis.

Yeah! That's it.

<i class="timecode">[00:41:35]</i> **Ben:** Okay!

<i class="timecode">[00:41:36]</i> **Amit:** If the guys from the chat haev more questions about the both the JavaScript, or 3D, anything, yeah, we do have more time. We finished earlier than I thought, because I actually planned one more example, but I didn't have enough time to prepare it in advance, sorry. 

<i class="timecode">[00:41:57]</i> **Ben:** Totally understand how that is. I've definitely been on kind of the receiving end, on the guesting end of streams, and it's like, "Aw, man, if I had, like, all the time in the world, I would have come up with, like, two or three more demos, and I would have done this and this and this, and it just doesn't happen."

Yeah. So, chat, again, if you've got any questions, now's a great time to ask them. Otherwise, we might start wrapping up early, but I figure there's gotta be at least a question or two.

Where do you…? I guess one—

Oh yeah! I guess Travis wants to know how are you doing accessibility for something like the ping pong table? Like, what considerations do you have in mind for that? 

<i class="timecode">[00:42:40]</i> **Amit:** Yeah, so that's a good question. I actually… so, when I'm doing animations like the ping pong table, I'm not thinking about accessibility, because first of all, there's nothing to be accessible. It can't be really accessible, and it's just a proof of concept. It's not really an item.

But here, for example, this is a checkbox I've made. Let's make it a bit bigger. It's a regular checkbox, but when you click it, it flips. Like, it jumps.

<i class="timecode">[00:43:22]</i> **Ben:** Love that.

<i class="timecode">[00:43:22]</i> **Amit:** And this is 100% accessible. So it has a tab, and it has keyboard navigations, and you can check it with screenreaders. It's absolutely accessible. I've checked it a couple of times.

So when you are working with animation, 3D animations, it's definitely not a reason to give up accessibility. But when I'm creating, you know, 3D animations like the ping pong table, I don't think about accessibility because it's just not relevant. It's not what I'm supposed to show. 

<i class="timecode">[00:43:57]</i> **Ben:** It's not what the demo's for. Totally. 

<i class="timecode">[00:43:59]</i> **Amit:** Yeah, it's really not what the demo is for. But again, when I am doing buttons and info cards and things like that, I'm trying to think about accessibility and I'm trying to think about keyboard navigation and screenreaders. And by the way, here specifically, I don't have reduced motion, I don't do reduced motion, but normally you should also use reduced motion. The media query for reduced motion.

And this is, by the way, the rule of thumb. When you are working with animations, three rules of thumb. One is "don't hide content," because sometimes, you have a lot of `<div>`s — like here, we have six `<div>`s — so don't hide content. The second rule is "don't forget keyboard navigation." And the third, as I said, "don't use animations, use prefers-reduced-motion." 

<i class="timecode">[00:44:57]</i> **Ben:** Absolutely. Travis was a great question. Thank you.

Yeah! This has been excellent. And you've got some kudos in the chat, like ActiveB1t says that the examples you provided were very clear.

<i class="timecode">[00:45:09]</i> **Amit:** Thank you. And by the way, if anybody wants to check out those examples or if you have questions about it, the best place to get me is on Twitter. And yeah, I like to talk about frontend so, yeah, just hit me up on Twitter and then talk about anything that's relevant or not relevant.

<i class="timecode">[00:45:35]</i> **Ben:** Absolutely. And I'm going to put a link to your website in here as well.

Yeah, so I think let's go ahead and I guess start wrapping up. Amit, thank you so much for your time. This has been fantastic.

<i class="timecode">[00:45:48]</i> **Amit:** Thank you!

<i class="timecode">[00:45:49]</i> **Ben:** These lovely, lovely demos. Like, I just, I really want to compliment you on your demos. You've done a great job curating those—

<i class="timecode">[00:45:57]</i> **Amit:** Thank you.

<i class="timecode">[00:45:58]</i> **Ben:** —for us, so I want to thank you for your time. I put a link to your Twitter and your website and your CodePen all in the chat. So y'all, if you're interested in any of this kind of stuff and how Amit is using CSS to just create delightful experiences and solve problems of design, please go check those resources out, go follow Amit, and I think you should absolutely take his workshop. I think if any of the stuff that you've seen today is appealing to you, you should go check out his Smashing workup, and I'm sure you're going to learn a lot there.

Also, if you're into accessibility and core web technology streams on the regular, follow Some Antics here on Twitch. We actually have a—

<i class="timecode">[00:46:46]</i> **Amit:** Follow Some Antics!

<i class="timecode">[00:46:48]</i> **Ben:** Thank you! Thank you, thank you.

We actually have a stream this Thursday at 4pm Central. The tweet just went live for that a couple minutes ago. But Larry Hudson is going to be coming on to talk about document accessibility, so how do you make PDFs accessible. That is something that I have zero experience in. But he's promised that it's going to feature some Eleventy, which is a subject that, as many folks here would know, is near and dear to my heart, so I'm super, super excited for that. Let me actually get a link to that in the chat as well. There is a calendar link there, so add that to your calendar.

Additionally, next Tuesday, I will be live at 1pm Central. I'm bringing Patrick Hulce on. Patrick is the creator of the Lighthouse CI tool. He used to work for Google. He built the Lighthouse CI tool. And he'll be talking about debugging web performance, so I hope to see y'all there as well.

<i class="timecode">[00:47:43]</i> **Amit:** I'm going to be there.

<i class="timecode">[00:47:45]</i> **Ben:** Awesome! Looking forward to it!

And chat, stick around. I'm going to find someone to raid. I'm sure there's someone else live. Amit, again, thank you so much for your time.

<i class="timecode">[00:47:55]</i> **Amit:** Thank you for having me.

<i class="timecode">[00:47:57]</i> **Ben:** See y'all on Thursday! Bye, y'all!