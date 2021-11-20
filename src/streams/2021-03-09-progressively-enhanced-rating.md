---
title: Can We Build a Progressively Enhanced Rating Widget?
timeOfDay: 12pm
sourceCode: https://codepen.io/bendmyers-the-typescripter/pen/qBqQqZO
upload: https://www.youtube.com/watch?v=g0MVX3nWlJs
hosts:
  - Ben Myers
  - Tuna
---

Progressive enhancement is an approach to web development where we use the most broadly supported tools to ensure a minimum viable experience for everyone, and then provide optional visual and interactive enhancements on top of that for supported experiences. Progressive enhancement places a strong emphasis on semantic markup and accessibility.

Join Ben as he tries to progressively enhance an HTML-and-CSS-only rating widget that provides interactivity, accessibility, hover states and more without a lick of JavaScript! Oh… and there's a live feed of Tuna the Cat while he naps. Can't forget about that Tuna cam.

## Transcript

Howdy, howdy, y'all! It is just me today. Well, not quite. We are joined by the Tuna cam. This is something that I might have teased just a little bit last time, and I'm proud to say that for now, at least, Tuna is willing to cooperate. He's been, you know, wanting to move around quite a bit. There was a bit of time where he sat just like just casually on the floor, in like one particular spot on the floor. But for now he is cooperating, he's on the bed, and you know, he's adorable. If he moves a whole bunch, then I'll probably have to turn off his camera, but for now, you know, he is with us.

Hello! Welcome! If you're out there, go ahead and you just give a wave in the *[00:01:00]* chat. Come say hello. 

In the meantime, you should know that Deque Systems' axe-con accessibility conference is this week. In fact, it's actually tomorrow and Thursday, and yeah, there's tons of great speakers. If you look at the lineup, it's phenomenal. There's a ton of people that I'm really, really excited about. You know, we've got Haben Girma, we've got Dave Rupert, just so many fantastic people who I follow, and many people who I don't and yet totally should. So it's going to be great. The talks all look fantastic. I'm super excited to be spending, you know, a few days just kind of watching these talks. So absolutely if you have not signed up already, I believe you still can. So I'm going to put that link in the chat, even though for now I think it's just Adrianne and Adrianne is *[00:02:00]* totally all signed up already. Yeah, so axe-con tomorrow, Thursday. It's going to be great. You should absolutely join. 

So, what are we going to be doing today? One of my personal projects is that I'm building a tea logger app for my fiancée. Just like any time she drinks a tea, she logs it along with,  you know, her feelings about that tea, what ingredients she tried it at, what temperature she steeped it at. And she has the option to give it a rating. Now, I made a decision pretty early on in the project that I would use a UI toolkit called Semantic UI, and truthfully, I kind of regret that. Semantic UI looks lovely, but as with, I *[00:03:00]* think, any component library, you're gonna run up against the library's opinions and all of the configurability that the library needs. You're gonna, like, run headfirst into those. And so the moment you need to do anything custom or do anything your way, you're going to hit this barrier and I've hit that barrier more than a few times. 

But specifically, one of the things that had me really, really thinking was that the Semantic UI component library includes a rating widget. So here we can see a few examples. These are the docs for the rating widget in question. I'll stick that in the chat. Yeah, so here you can see we've got a few examples. I mean, we've all likely totally seen controls like this before, right? Oh, you can select the rating. You can select, you know, "Oh, I think it's five stars. I think it's one star, three stars, et cetera." *[00:04:00]* Sometimes those rating widgets might even be clearable, that, like, you could click the current rating and it would clear the rating altogether to say, like, "not applicable." That's not always the case, but it's sometimes is. 

This rating widget got me thinking, though, because I was really curious what the markup of this would be to create the experience. So the experience is that, really and truly every star in here seems like a button, its own individual button.  In fact, if I inspect the markup here, we're we're going to see that, it's, you know, far from semantic here, right? We've got a list of stars. It's a `<div>`. Each of the stars in there is an `<i>` tag.  And they all have, you know, a whole bunch of ARIA. They've got this role *[00:05:00]* "radio," which is interesting. 

But absolutely nothing here is semantic, and this is partially by design. This is partially because of the constraints of the component library, where Semantic UI is trying to be a one-size-fits-all solution for everyone, you know? It's trying to be the component library to rule them all, and therefore its opinions shouldn't get in your way. I totally think it does end up getting in my way. But Semantic UI provides, like, if you're using the React component library for Semantic UI, there's an `as` prop that you can pass to override which component or HTML tag any given element will render as. So I could go in and I could say, like, "Oh, for this rating widget, I could say `as="button"`, and it would render an array of buttons. So to do this, Semantic UI, weirdly enough, just *[00:06:00]* absolutely shirks semantic markup. And that's because the "semantic" in "Semantic UI" is really about semantic classnames. It's about defining classnames that give the presentation that you're looking for. And those classnames should, in theory, map onto just about any HTML element or any react component that you've built yourself.

I disagree with that mentality. I think that the way this library, positions these controls, I think— Oh, he's getting up. He's str— Ah, he's just turning around. I'm going to be distracted by my own cat! 

I think that this approach, this semantic classname approach, actually encourages weaker practices because as far as users are concerned, like, they can just, you know, *[00:07:00]* plug and play the components. They don't have to care about the semantics of the components. The library handles all that itself. And I just, I wish that the library had some, like, stronger opinions in that regard. I wish it took a stronger stance. I understand why it doesn't, but yeah, I wish they would just implement the semantic markup from the get-go instead of having to try to, like, hijack in keyboard behavior and ARIA attributes, hijack that in dynamically on value-neutral components just because in theory, you should be able to pass, like, `as` equals anything.

So I wanted to see what it might look like if I were to start from an assumption of semantic markup. You know, not have to deal with that whole configurability that Semantic UI is trying to address. Just purely start with what I think the markup should *[00:08:00]* be. 

I wanted to see if I could do this in a progressively enhanced way. I think progressive enhancement is one of those terms that we don't talk about nearly so much in webdev these days. So, the idea of progressive enhancement, as I understand it, is you use the most minimal possible, weakest possible tools to create the minimum viable experience. So you get something working, you get the experience working with the least possible tools. And then you can enhance on top of that. So you're not providing… Like, everyone still gets a working experience, right? There's nothing broken. But then you can provide extra enhancements on top of that. 

So one example, for instance, actually from my day-to-day, our page has this centerpiece of a table. And some browsers… Hey, Shepherd! Welcome to the *[00:09:00]* party. Some browsers support a CSS style called `position: sticky`, which in the case of our table effectively means as you scroll down the page, the table headers can, like, kind of cling to the top of the page so they don't scroll out of view. You can always see what those headers are. But those are modern browsers that support that, right? Not every browser supports it. But other browsers that don't support it, like Internet Explorer, they just work as, like, a table as usual, right? It's not broken. It's still a fully functioning table. Internet Explorer users just don't get the extra niceness of the table headers clinging to the top.

So, you provide the minimum viable experience. In the case of our page, it's a table. And then you enhance on top of that in a way that experiences that support those enhancements get those enhancements, but you don't break *[00:10:00]* anyone else. It's a bit of a different mindshift and I don't think we think about that nearly so often in this day and age, because very often I think the progressive enhancement story kind of translates into, well, "We should avoid JavaScript because, you know, JavaScript is bloated, and you can get away with using semantic HTML." And that story I think often doesn't matter so much when you're already dealing in frameworks like React, right, like where the default position in frameworks like React is you're going to ship a bunch of JavaScript anyways so fiddling around with things like progressive enhancement can seem kind of pointless because you've already bitten the bullet. You've already committed to just shipping gobs of JavaScript to get the experience that you want. What's the point in, you know, fiddling with optimizing the experience here? 

*[00:11:00]* So part of what I wanted to do today was build a progressively enhanced rating widget from semantic markup. I wanted to see how long I could go — Hey, NastyDirector, welcome back — I wanted to see how far I could go with just HTML and CSS, see how long I could go without bringing in JavaScript. And then I wanted to seriously think about if any of this is worth it, right? I'm fully going in thinking that this might be kind of a fool's errand, and I want to see if that holds true. 

Hey! We've got Mike. Yes, so, Mike, welcome to the party. This is Tuna. Tuna is great, and he is going to be our mascot. He's going to be our rubber duck today. And he's going to be spending a lot of time cleaning himself. Yeah. So let's go ahead and get started. Yep. 

Alright, so I *[00:12:00]* wanted to, first of all, get the markup right. And I think that there are tons of ways we could go about this. Right? For instance, I mentioned here that this experience that we would get from Semantic UI… I believe Material UI, shoutout to Mike whose company really created the Material UI component library. So, I think a lot of rating widgets will do something like this, which is they'll have, like, you know, basically a rating is series of buttons. In this case we've got, like, five buttons. I could, like, tab through these and I could hit, well, not Space, but Enter. Nope, I guess it is… Hang on. Let's figure out what the command is here. Yeah, there we go. It's Enter. So I could, you know, tab through these and I could hit Enter to select the one I want. It's really a series of buttons. And I think that's one way you could have this experience.

But part of what really got me thinking was, *[00:13:00]* you know, this is a sequence of five, or potentially more, buttons that all correspond to one value. And that felt weird, right? To like, have to tab multiple times to select one value. And so I was kinda thinking that this made a lot more sense to me as a radio group. So my thought was that one rating widget would be, like, one single focusable entity. You would focus on that, and then you could use the arrow keys to scroll through. And that's all behavior that we get for free, out of the box, with radios. So that's how I'm going to go ahead and implement this. 

And we'll see just how well I do with radios. It's been a while since I've written anything radios. Let's see, that's going to be value, let's say 1. Then *[00:14:00]* `<input>` is self-closing. Oh, and then what we're going to need, if you want to have a group of radios, you have to give them all the same name. I'm going to call that name "rating." Alright.

Adrianne, I wish I could take credit for the purple blanket. That's actually my fiancée's purple blanket. Well, I guess now it's Tuna's purple blanket, I guess is more accurate to say. But my fiancée is really into purple, and that means between this stream and my blog and her fascination with purple, we just ended up with a whole bunch of, like, purple stuff. Yeah! "Purple is the best color." Agreed. Well, you know, weirdly enough for the longest time, I did green more than anything. Anyways, I've got… *[00:15:00]* "Purple people eater." 

At this point, I've got a nice radio button and this is actually looking pretty fine. I think the default radio buttons look pretty good. 

I think another experience, perhaps even the more, like, semantically pure way to do this but one that I couldn't think of how to progressively enhance on top would be a range. Right? You think about, like, rating widgets are really asking you to pick a value between, like, 1 and 5 inclusively. So, input type="range". I think it's min="1", max="5". I think. There's probably ways to get it to display steps. I don't actually spend a whole lot of time with native form controls as I should. I should spend more. But, like, if you think about it, like, this right here, this is really, and truly the, like, minimum viable *[00:16:00]* rating widget. Right? You're selecting a value between 1 and 5. 

However, I like the clickability and hover states of radio buttons and I don't actually really know how to do that with range types. That's why we're not doing that. We're going to be playing around with radio buttons.

So the next thing is, even still, before we make it look fancy, I want to give all of these inputs, a label. That way, we enhance the kind of clickable region for each of the radio buttons and this way we can also help screenreader users understand what each value actually means.

So I'm going to do… this. I might have *[00:17:00]* to… And `for` equals… Guess I'm going to give… It seems like there's an awful lot of like boilerplate you need for radio buttons in general. But yeah, if I click over here where it says "1 star," like, it automatically selects the first one. Would help if I spelled "label" correctly. That might help. Let's go ahead and set this up for our others. There we go. `id="star2"`… 

What are all of y'all working on this Tuesday? What's new in y'all's world, while I *[00:18:00]* get this boilerplate going? Oh, okay. It's going to do that for me then, huh? Let's see… 

"Adding Google Analytics via Firebase to a React Native app. Loads of fun." You know, at some point I need to, like, actually like spend some time learning React Native. Mike, is that something you'd be interested in coming on and just kind of showing me the ropes? Shepherd's reheating bibimbap — I probably mispronounced that — "and frying a fresh egg to go on top. Exciting lunch break activities." Alright! Adrianne's working on a lot of Java. That's all API work, right? You're doing API work for that? Nasty… Ahh, refactoring some Sass! *[00:19:00]* What kinds of things are you refactoring? 'Cause I've been hearing some people talk about they're struggling with basically Sass's whole, like, nesting thing? Which I find really interesting, 'cause that's, like, one of the things that I really love about Sass, is that nesting. 

Okay. Cool. So yeah, at this point we now have some labels here. So a screenreader user could navigate to this form. They could pick any one of these. They would get an announcement as to, like, which one they've selected. This is great. 

The next thing is we probably want to make this look… Yeah, *[00:20:00]* sorry, so we've got a minimum viable product, right? This is working. Users could select one star, two star, three star, four star, five star, right? The next thing is we probably want this to look like a rating widget. So I'm gonna try, I think… I want to try something here, which is that I wanna make the inputs invisible. And then, so I want only the labels to be visible, but even then I'm not actually going to have the labels themselves be visible. I want to have each of them show, like, a star icon, and I think that star icon is going to go in the ::before.

 Let me, I guess, kind of show you what I mean here. So… Let me make sure I've got all of this syntax right. There we go. Oh, cool. So you can click on, yeah, you can click on the ::before for *[00:21:00]* a label and it will also trigger that radio button. Good to know. 

At this point, I'm now going to search for, like, a star character, to, like, copy and paste. I just want, like, the star symbol. Help me out, Wikipedia. There we go. Alright. Let's see. 

Alright! This is already starting to come along. The next thing that I want to do is I want to hide the label text. I'm gonna do this with… You've maybe seen in some of your projects, there's a utility class that floats out there. Some libraries call it `.sr-only`, which is short for "screenreader-only." Others call it `.visually-hidden`. I like to pull this from Scott O'Hara's article "Inclusively Hidden," which I will definitely put the link to *[00:22:00]* in the chat. But basically, this is a utility class that will make something invisible to sighted users but still expose it to assistive technology. Because browsers, if you use, like, the traditional `display: none` or `visibility: hidden`, browsers treat that as a cue not to expose that information to assistive technology like screenreaders. So you basically have to, like, hack your way through. And kind of the most robust approach that accessibility fans or advocates will use is basically use `clip` to make this thing really, really small. 

So instead of using this `.visually-hidden` as a CSS class, I'm gonna go in, I'm gonna say that… Let's see, `input*[type="radio"]`. Just going to select these things directly. [00:23:00]* Let's see. Alright! Already coming along. It's harder to tell, but we are still selecting each of these inputs. Because that's what `<label>` does, right, is `<label>` provides extra, like, clickable area. 

Jacob, hello! Good to have you. 

Yeah, so because we're using `<label>` and we've associated those labels to the inputs using the `for` and the ID here, we're basically saying that this `<label>` is like part of the clickable area. 

I want to see now if I can get away with making the `<label>` disappear. Aahhh, no. Okay. So if I do this on the `<label>`, the `<label>` *[00:24:00]* disappears, but also, so does its ::before. I need a bit of a different approach here. I suppose I could go in and I could wrap this in a `<span>` and that would, like, cause this… I feel like there's gotta be another way, though. Can I do it through, like, `clip: none`?

Y'all, it make just be easier to go in and add a `.visually-hidden`. Okay. Let's try that. Cool. So what I'm going to do is I'm going to have in here, like, in each of our labels, I'm going to have a `<span class="visually-hidden">`. This is going to say "1 star." Let's see. Yeah, it looks like we've got that. *[00:25:00]* And I'll go in, I'll do this for all the others.

"2 stars"… if I were doing this to my editor, I could do this, like, all at once. VS Code has so many good tricks. 

By the way! I should probably stress that I do not feel like I'm, like, the strongest CSS person in the world by any stretch, so if at any point I'm doing something that just seems, like, fairly wrong or there's, like, a tighter, cleaner way to do it, let me know. I would be super curious. 

Cool. So, to clarify our markup that we've got here, we have a bunch of radio inputs and each of those radio inputs have an associated `<label>`. That `<label>` has two things *[00:26:00]* going on. First of all, its internal contents are visually hidden and they have, like, the human-readable name of this star.

Hey, Chan! Welcome to the party. 

Yeah. So there's visually hidden text. The label also has a ::before element that's not visually hidden, and that's what's going to give our starlike appearance that we've got going on here. Importantly, we haven't broken any of the markup, right? In fact, we still have all of those inputs going on, it's just that the inputs aren't, like visible. They've been more or less, like, replaced with the labels' ::before elements. I want to confirm that by having… Let's do… 

Ah, you've been here the whole time! 

Okay. So what I'm *[00:27:00]* going to do is I'm going to go back to our label ::before. I'm going to say that this is `color: yellow`. There's probably like… Is there a `gold`? I feel like there's a `gold`. That's probably… yeah. That's going to be more visible there. I'm going to bump this up. `font-size`, make this 24 pixels, mostly for the purposes of our demonstration. Cool. 

Then what I'm gonna say is… So, every star up to and including the selected star should be gold. Right? But the other stars should be gray. Like a light gray. Something like, you know, conveniently, `lightgray`. So I want other stars to look like this, and probably also just be, like, an empty outline, that kind of stuff. That way it's not relying on color alone. But every star up to the *[00:28:00]* selected one and including the selected one should be gold.

But the way CSS works is, unfortunately there's, we would call it, like, a look-behind. Right? So if you wanted to see everything *before* a point, that's really hard to do with CSS. In fact, I don't actually know that it's doable. So instead you have to approach everything as everything after a point. And so, whereas I would think of this as "Stars are gray until we make them gold," the way CSS is going to require us to do this is going to be "The stars are gold until we make this gray." Which is *interesting*, but I think we'll be able to make this work. 

So how do I know whether a star should be gold or gray? Well, it's up to whichever one is selected. And I can do this — I want to say it's *[00:29:00]* :selected. It's not liking that. Is it :checked? Hang on. "Radio button selected." It might be :checked. CSS… here we go. Ahh, it's :checked. Here we go.

"Everyone wants container queries. I want a look-behind selector." Yes. Both of these things would just make CSS even more powerful than it already is. 

Um, yeah. So this will get us whichever radio button is checked. And then I want to say any `<label>` that follows the checked one should be gray. And I want to say that's the tilde? Let's see. *[00:30:00]* "CSS tilde"… This looks convenient. That's really interesting. Um, "general sibling combinator." I think this is going to work. Let's see. So… Nope. I promise I have my tabs right. 

Alright. So :checked, we're going to get the `<label>`, and then we're going to get the ::before. So this should say we're going to get the ::before pseudo-element for any `<label>` that follows the checked input. I think this should work. Let's test it. Uhhhh… no! Interesting. Well, what have I… Oh, it is working. I just had to pick a different option. Yeah, so here we've got a totally *[00:31:00]* functioning rating widget without any JavaScript. And that was way easier than I thought it was going to be. Okay! So yeah, I am currently clicking here. Now I'm, you can't see it, but I'm using the arrow keys to go left and right. Interestingly enough, we can loop around. 

So radio buttons — Yeah! I do agree, Chan, this is a really elegant solution, I think. Actually more elegant than I was anticipating it would need. Maybe the next thing we need to do is see if we can get half stars working? That's the one I think that's gonna terrify me the most.

Yeah. I had a train of thought and I lost it. Okay. Do y'all have any questions about how this is working, what this *[00:32:00]* is doing, why I made the decisions that I made?

Half stars — Yeah, half stars seem really difficult to me. Right? Because I think, like, A, as far as I can tell, there's not actually a half star character, or there IS a half star Unicode character, but it's not, like, supported. It's not supported on my Mac, at least. So I feel like at that point, we'd have to start getting to SVGs and I just don't think we have time for SVGs during the stream. But I think, too, that would lead to… Tell you what. Let's see if maybe we can just kind of play with doing some half stars, perhaps. I'm going to have to, like, change the markup to do this. 

Yeah, so a few things to highlight here, right? Like, A, we're not relying on any JavaScript, which is nice. I don't, I never want to position JavaScript as the villain, right? But *[00:33:00] I do think that the pendulum of web development is swinging more and more towards static sites again thanks to tools like Eleventy, thanks to, you know, we've got static site generators like Gatsby, and even, you know, React is moving towards, like, Server Components, right? Like, so the idea is we want to be shipping less and less JavaScript because JavaScript is kind of a pain for bundle sizes. You can produce large bundle sizes. JavaScript gets parsed later in the browser's flow, which means that if you're doing everything with JavaScript, you're gonna introduce, like, multiple delays in the end user's user experience, and there are problems with that. So you can absolutely ship JavaScript, that's totally fine. But I think the pitch is here, for me at least, if you can get away with not, right? Like, if there's a way you could do something without JavaScript, [00:34:00]* or at least without client-side JavaScript, strongly consider it. 

The other thing is that JavaScript has a failure mode which can be devastating, which is that if your client-side JavaScript fails, the page can totally break. Right? Whereas in this case, if our CSS were to fail, for instance, you know, if our end user didn't receive any of the CSS, this right here is a totally viable experience. It's not pretty, but it's totally viable. It works. It gets the job done. 

An experience like this also works just out of the box with forms. Right? Whereas if we were going to do the, like, Semantic UI experience, because this is kind of making a control out of multiple controls, you have to, like, find some way to extract the form value and include that with, like, the form submission if you're doing this as part of a bigger form. *[00:35:00]* Native form elements used for their job, I think can provide a just cleaner experience. There's less we have to worry about as developers, I think in terms of getting all the interactions right. And finally, like, our experience is going to work even in experiences that just have no idea concept of CSS, right? No concept of styles. So, for instance, if we were to pull up the page for whatever reason on, like, a smartwatch or something like that, there could be a supported experience for that as well. So yeah, I thought this was going to be a whole lot more code, a whole lot more workarounds, but it ended up not being very much, especially because if you've got an application of scale, you likely have a class like this already.

Hover! Yes! Okay, that is definitely something I forgot and wanted to *[00:36:00]* get to, so thank you for calling that out, Chan. Yeah! How do we get the hover stuff working? For that matter, how do I get my demo displaying again? Who knows? Let's see. What if I update this? There we go. Alright. So one of the nice things, with this experience, as much as I kind of criticize it for being, you know, a series of buttons that you have to, like, tab through, one of the nice things about this is it's got a really lovely hover experience where as you hover over it, it shows all of the stars up to the point that you've got. 

I think for that matter, we can probably do something very similar to what we've got here. Right? But instead of "checked, it's going to be, it's going to be :hover. Let's see if we can do this. So, *[00:37:00]* everything up to… 

Okay. So first of all, I think of this as I want to know two things. First of all, is the group as a whole being hovered. That's the first thing, right? Is the group as a whole being hovered? And then the second thing is, which star in the group is currently being hovered?

So I think if I'm wanting information about the group as a whole, I might need a container element here. So let's call this `class="rating-group"`. And this is going to close that. We can confirm that this group works if we do border… *[00:38:00]* See if this works. There we go. Yeah, so we've got this. Let's see, I'm going to set width. I think it's `max-width:` — What am I looking for? I think it's `width: max-content`. There we go. So now our `<div>` is only as big as the rating widgets inside.

Yeah. So now, gonna introduce some more styles, just to kind of play around. I'm going to do this a little aimlessly, perhaps, because I just want to see what the different experiences are here. So if you're hovering inside the rating group as a whole, maybe we want to set this… Let's make this really obvious. Let's set the labels… So these are all of our stars. We're going to set the label ::before to *[00:39:00]* be `tomato`. `tomato` is scientifically the best CSS color. And now if I hover in here, you can see that this updates, which is incredibly cool. I think that means that we can actually copy and paste this and do what we were doing before with the tilde.

But here, if you're hovering over a specific `<label>`, then any `<label>` after that might be — let's make this really obvious again — `aquamarine`. Our CSS rules are starting to get a little less than readable, but we still, at this point, have no JavaScript, 

Matt! Hello! 

*[00:40:00]* Oh my god. And that works. Okay! 

You know what? Make the experience even better here. `cursor: pointer`. That's not quite working. Oh, wait, no. It's, what is…? Let's see… What is it when it shows the little glove? I assumed it would be `pointer`. Let's look up "CSS cursor."

Who knows, y'all? I don't think it's the end of the world, but it'd be nice to know what that was, when it's got the little, like, glove that indicates, like, you know when you hover over a link, for instance, it turns into the glove *[00:41:00]* to be like, "Hey, yeah, this is interactive." 

"What about showing through the gold color of the previous selected?" So, can you help me understand what you mean by that, Chan? It sounds like you're saying, "Hey, even if I'm hovering, I still want to show that one of the stars is actively selected," right? Let's see.

"If we were Amazon,we could make the cursor turn into an error or a stop sign when hovering over stars 1 through 4 and only allow users to rate 5 stars." You know, we totally could. There is something to be said for user experiences meeting business needs, perhaps. Yeah. 

Let's see. Yeah, because I hear *[00:42:00]* what you were saying, Chan, on, like, when we've got, you know, an experience like this, like you can still see when something is gold, right? So if I hover on this, right, everything up to this point retains its kind of goldness. Well, no, it seems like the hover definitely supersedes the gold. Oh man. It's going to be a fun one. Yeah. 

"Might be nice if 1, 2, 3 and 4 are still gold while 1 is tomato." 

Y'all, the Tuna cam is the best decision. It's almost, like, therapeutic, like "Hello. Welcome to your Tuesday morning relaxation. Today we will be joined by Tuna the cat. Tuna the cat is really relaxed. He is sleepy. *[00:43:00]* You are also relaxed and sleepy. I am typing on the keyboard. This is ASMR, I believe. I don't regularly watch ASMR." 

Yeah, okay, so let's see. That is… something else. Okay. Let's see if we can get that, like, nice hover experience. 

"Hover supersedes gold. But right now, the implementation is all gray during hover (after the hover target)."

Yeah, maybe, you know, maybe a mechanical keyboard is what I need, Shep.

Yeah. So… let's see, hover up to, yeah, it's like… Can I just comment this out? Is that all I need? No, Okay.

*[00:44:00]* Red, the fastest color. You know, I have seen enough sports cars to know that for sure, red is 100% the fastest color. It's just, you know, it's science. Can't help it. 

Okay, so we need… I feel like we're going to need two rules to make this happen. One, we're going to keep the… So this is going to be every star label after the hovered one, we're going to, I think, resort to our gold. And then I think we have to do, once more with feeling… I think this is how we have to do this. I think that's going to get us to have it to where, if I'm reading my CSS correctly, I think what this is going to do is this *[00:45:00]* just going to say every star label that follows the checked star, which in turn follows the hovered element is going to get the light gray. I think that should work. Let's see. 

"Do you know if the ::before or ::after content gets picked by a screenreader?" Yes, absolutely, and I think using a star character for this is kind of a mistake, because that can and will get announced. When browsers expose elements to assistive technology, one of the things that they look for when they come up with a name for a thing is — 'cause the name is, like, the key indicator for how something gets announced — one of the things that they look up is the pseudo-elements, the ::before and ::after. I've actually written an article about this, and 100% I'm going to pimp that. It is… *[00:46:00]* should be this one. Yeah. Nasty, feel free to give this a read. Let me know what you think. Specifically, there's a bit in here that talks about, here we go, CSS-generated content like the ::before and ::after.

"The one link Ben does not have ready is their blog." Yeah. You know, like, I always KNOW, like these topics could come up, but then I don't want to be like, "Oh, I *happen* to have this at the ready," like, you know, a vanity thing, right? Like, you gotta maintain some veneer of improv, you know. Just casually "This might help." 

Anyways, let's see if this actually works. 

Y'all! Okay, that's super cool. Okay. So to clarify, what's happening here is we're saying every… *[00:47:00]* So, when you're hovering over this group… There's, like, three different rules going on. When you're hovering over this group, it sets all stars to be red. But then it's saying, "Okay, any star that's after the one that's being hovered is actually going to be set to gold." and so that's what we see here, right? Like, I'm hovering over star 2. Any one of them that's after that one is going to be set to gold. But then it says, "Just kidding. Any star that is after the checked one is actually going to be gray." And that gives us this neat little effect of, like, we can have this kind of, like, nice, interactive experience here. And it's quite literally golden. 

Excellent! That's really cool! Man! How far you can get with just a bit of, like, CSS and HTML. *[00:48:00]* And again, I want to stress, this is going to work for people who are navigating with a keyboard, for people who use screenreaders. It's going to work natively as part of your forms. It requires absolutely no JavaScript. It's just really cool what you can do with a good selector. 

Yeah, let's pretty this up just a little bit. Let's remove that border. I wish I could get the pointer working. I feel like I've gotten this part wrong here. I would love to have it to where it shows the little glove, but I can't. Yeah. 

The nice thing, too is it's one focusable entity, so you don't have to tab a whole bunch. If you have a bunch of stars, you don't have to tab through all of those stars, which is super nice for a keyboard user. 

I think the next thing I want to do is figuring out how to get this to clear, *[00:49:00]* make it so that ratings are optional. And here, I think we are actually going to need a bit of JavaScript here because radio buttons natively don't support clearing. And so I think we're actually gonna cheat at this a bit. I'm going to introduce another star here. It's going to complain because I'm duplicating names here. So I'm going to say "star0,". And this is also "star0." The value here is going to be "0." Let's see. Does this work? Yeah, so it seems like we've got an extra star, but in reality, I don't actually want to show this as a star. I want this to be a, like, null value here. So, gonna cheat, just a little bit. Gonna put this visually hidden stuff right here.

*[00:50:00]* Well, let's see. Yeah. So now we have another radio. This radio option indicates, like, "Hey, there's no stars, no rating." So, I just selected 3. If I use the arrow keys, I can actually go back to where there's nothing selected. Whereas previously, if I comment this out real quick, previously, the experience for if I were to go left, it would like to circle around and be like, "Actually, surprise! Five stars." So here, we've been able to emulate, like, oh, you can actually, using keyboard navigation, you can actually clear this out, which is interesting, I think. 

However, many users aren't going to be using keyboards, right? It would seem weird to *[00:51:00]* provide that functionality for keyboard users, whereas many people are going to be hitting this with — 

Tuna's such a great co-star. Thank you so much for being a great sport. 

Yeah, so it feels weird to have an experience that's available for keyboard users and at the same time not available for mouse users. It's a little backwards, you know? So let's figure something out. Again, like I mentioned, radio buttons out of the box don't natively support clearing, so that's why we had to introduce this, like, faux option. I think at this point I can introduce — gasp — some JavaScript. So my thought is, if you click on the currently selected star, then you should be able to clear it. So… 

*[00:52:00]* Shepherd, it's more likely than you might think. 

Let's see. What is the best way to go about this? `let stars = document.querySelectorAll()`. And I'm going to have this be every `<label>` that's inside of our rating group.

Alright. Actually, no, this should probably be the inputs. And then `stars.forEach()`. So we're going to iterate over our list of stars. For any given star — I'm just trying things out! We'll see if this works. I want to do *[00:53:00]* `star.addEventListener()`. And then… So the point of this is that the value doesn't change, it doesn't change, you've opted for a star that doesn't change. What event would that be? 

"Tuna has star power." I agree. I agree. Thank you, Adrianne. 

I actually don't know… `on`… Let's see. Radio, is it `onchecked`? Oh, it's going to try to… Well, let's see. `onchange`, perhaps. Let's see if this works. `console.log('change')`. *[00:54:00]* Also give it the event. We'll see! Who knows? 

I'm so used to just being able to like, you know, casually do stuff like this with React. And I think, if anything, that might be one of the bigger takeaways is it's, like, good to just, like, practice doing this kind of stuff without frameworks, even if you've got like a framework-driven project, you know?

Let's see. So if I click on this, I'm getting a 'change'. If I click on it again, do I…? I don't get a 'change'. Okay. I suppose I can use clicks though, because specifically the point of it is to track clicks, right? 'Cause keyboard, you're not going to be, like, reselecting a thing. So that might be it. I think I have to go, not the input, but rather the label. So now `stars` is no longer a set of inputs, but rather a set of labels. And this is going to be 'click', *[00:55:00]* 'click'. Let's see if that works.

Alright. So we're clicking this multiple times. So the next thing is I want to check, if the clicked label corresponds to the selected input, then we want to do our clearing. So, I think… `let correspondingInput =`… — So our star, which is a `<label>`, has a `for` attribute. `getAttribute('for')`. There has to be, like, a more JavaScripty way. Like, this DOM manipulation has to be a thing. 

Adrianne! Good to have you. You should join us next week, *[00:56:00]* Adrianne. We've got Randy on. I'm super excited for that. 

Alright, so `correspondingInput`. Well, input ID, 'cause this  gets us the ID of the input, then the actual `correspondingInput` could be `document.getElementById(correspondingInputId)`. Wild. And then, if correspondingInput.checked, then I'm going to just `console.log('giraffe')`. We'll see if this works. Maybe I shouldn't just like casually refresh my pen. That would be, you know, maybe a bad thing. 

Nasty, good seeing you. Alright! Yeah! *[00:57:00]* We're going to be wrapping up in a few minutes anyways. 

So let's try this. So I've selected 2, nothing changed. Selected 5, nothing changed. I mean, the value is changing. But if I click it again, yeah! You can see we're getting some 'giraffe' logs. So we're able to identify when someone re-clicks the same rating, which is super cool. 

So the next thing I want to do is I want to set their value to be 0. So… Let's see. I think I'm going to do `let nullStar = document.querySelector()`. I'm going to flex my attribute selectors here: `*[value="0"]`. I *think*… `nullStar.checked = [00:58:00]* true`. This may be a very bad thing. This may not work. We'll see. Okay, so I can select 4. And if I select it again — okay. Yeah, that's not going to do it. Who knows? Um,

I can do… `for="star0"`. So this'll get the `<label>`. So `nullStar` is actually now our `<label>`. And then, I wonder if I can do `click()`. Who knows? Sometimes you just try things with DOM manipulation, right? Just to see if it'll work? I don't know! 

At any rate, whether this worked, whether it didn't work, the important thing is, like, the ability to clear the rating widget could be seen as an enhancement, right? And this logic here, this is far smaller than if *[00:59:00]* we were going to try to, like, invent *all* of the, like, rating widget logic ourselves. Instead, we get to lean on the native browser behavior, which is, I think, incredibly cool. Right? It ensures that we're compatible with, non-browser agents. It ensures that we're compatible with assistive technology such as screenreaders. It's less that we have to write. And keep in mind, we didn't have to employ any focus logic or anything like that. It was just there for us, like out of the box, and I think that's extremely cool. That's something that I'm a big fan of. So I'm glad this worked! I think it ended up being way less code than I thought I would be, and I think I genuinely see myself using this in some sort of static site experience, which I think is extremely cool. 

Y'all, thank you for joining me on this kind of experiment. I just wanted to see if this could happen. This has been something that's been on my mind for a while. I wanted to see, like, how feasible it would be to create an experience like this, and I'm *[01:00:00]* very pleased it was! 

I'm going to put a link to this in the chat, if I can find the link, but y'all, it's been… I actually don't know how to share this. Oh, here it is. Share. Copy link. There we go. So feel free to like play around with this. Let me know if you do anything with this. I would be incredibly curious to see what y'all do. 

Thank you for joining me this week. Next week, we've got Randy Brown. Randy Brown is, I would consider him like a mentor  figure to me. He's going to be talking to us about the world of building mocks for tests, which is something that I don't feel like I have a whole lot of knowledge about. I think he's pitching this as "Specs, Mocks, and Tests." So if testing and test-driven development is something that excites you, you should absolutely come join us. It's gonna be great.

And yeah, one more pitch for axe-con, which is tomorrow *[01:01:00]* and Thursday. Go sign up. And if you want to follow me to keep up to date with what all of the different streams are going to be, go to twitter.com/SomeAnticsDev. I just put that link in the chat. Thank you again for swinging by, and I'll see you next Tuesday. Bye!