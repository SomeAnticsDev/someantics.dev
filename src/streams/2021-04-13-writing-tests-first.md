---
title: Writing Tests First with Adrianne Mallett
thumbnailTitle: Writing Tests First
timeOfDay: 12pm
upload: https://www.youtube.com/watch?v=XP8vY9BhkOg
sourceCode: https://github.com/SomeAnticsDev/tdd-fizzbuzz
hosts:
  - Ben Myers
  - Adrianne Mallett
---

There are few things more frustrating than bugs… particularly when they sneak in and break something which was already working or something that's already been fixed before. The test-driven development philosophy and process can help us prevent those bugs.

[Adrianne Mallett](https://twitter.com/mennairda) is a full-stack software engineer, accessibility advocate, Taylor Swift enthusiast, and a strong proponent for test-driven development.

## More From Adrianne

- [Follow Adrianne on Twitter](https://twitter.com/mennairda)

## Mentioned Links

- [Software testing on Wikipedia](http://en.wikipedia.org/wiki/Software_testing)
- [Testing trophy](https://kentcdodds.com/blog/write-tests)
- [Extreme programming on Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming)
- [Test-driven development on Wikipedia](https://en.wikipedia.org/wiki/Test-driven_development)
- [Introduction to Test Driven Development (TDD)](http://agiledata.org/essays/tdd.html)
- [Sandi Metz on legacy code](https://www.youtube.com/watch?v=8bZh5LMaSmE)
- [`coverage` npm package](https://www.youtube.com/watch?v=8bZh5LMaSmE)
- [Four-Phase Test on Thoughtbot](https://thoughtbot.com/blog/four-phase-test)
- [Four-Phase Test on xUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html)
- [Stryker](https://stryker-mutator.io)
- [Agile Alliance on Test-Driven Development Guided by ZOMBIES](https://www.agilealliance.org/resources/sessions/test-driven-development-guided-by-zombies/)
- [James Genning on TDD Guided by ZOMBIES](http://blog.wingman-sw.com/tdd-guided-by-zombies)

## Transcript

**Ben:** Howdy, howdy, y'all. Welcome back to Some Antics! Today I am joined by the absolutely delightful Adrianne Mallet! Adrianne, how's it going? 

**Adrianne:** Howdy! It's going great, and I'm really excited to be here. 

**Ben:** I'm really excited to have you. You are just an absolute delight to chat with, and I know you've got just some absolutely lovely thoughts about programming, about software development, in particular around the space of test-driven development, which I know we'll get to. But first I'd love for you to have the chance to introduce yourself for people who might not know who you are. 

**Adrianne:** Yeah! Well, hey, everyone. I am Adrianne, and this is my first time on Twitch. Feel like a movie star. I'm a software engineer, and my team used to get a blend of frontend and backend work, so I have really <i class="timecode">[00:01:00]</i> enjoyed the front end work, but I've been a Java developer for really, like, the last couple of years. And, what's interesting is that when I started working professionally out of college, I did not live in the land of TDD, or test-driven development. And then in about 2019, my dev team went to some training on it, and we were skeptical but we tried it out, and I won't say we loved it on the first day, but I think within a week, we really fell in love.

And I'm hoping to just kind of share some of what I've learned, take some spicy questions. I love the healthy challenge. So if you came here today and you already have, you know, some opinion about TDD — you might  not like it! — I am so open to hearing why that is. It'd be cool to have a dialogue. And maybe your frustration is one <i class="timecode">[00:02:00]</i> that I know, maybe I worked through it, or maybe it's a residual frustration. And we can say about, you know, the challenges of TDD, but in my personal opinion, the benefits of TDD, they really do outweigh the drawbacks. So I'm excited to, you know, talk about it, the theory, but we're going to demo today. It'll be so fun. We're going to pair program with Ben. 

**Ben:** Alright. Well, it's great to have you. And chat, it's great to have you all as well. I want to call out some of the people I'm seeing. I see Joe, I see Matt, I see Chan, codelex, Pritam. Welcome, welcome. It's great to have y'all. Great to have you here.

Yeah, so you're a huge proponent of TDD, as we've all seen, and I would love to just kind of start with the question of, what does test-driven development mean to you, Adrianne?

**Adrianne:** I really associate it with quality. Not just in, like, <i class="timecode">[00:03:00]</i> the more obvious way, which is high test coverage is often trusted and we say, like, "Oh, if code has that, it must be quality." I mean, maybe. Maybe not. It's *so* possible to write a garbage test just to get the coverage, so that's not always true. But, like, the quality that I think about is, like, when it scales. And so the magic of TDD and, like, why I fell in love during that week was I realized how TDD is helpful when you need to collaborate with others. And that could be at work on your dev team, but I mean maybe if it's open source or a project you're building with a friend, there's something really helpful about TDD to kind of go along with your code and, you know, make those commits and check-ins, like, trustworthy. Mmhmm. Because, like, I can <i class="timecode">[00:04:00]</i> tell you, I can say, "Hey Ben, I wrote this. It does what I say. Trust me." Or I can show you test suites, and that's really helpful to, you know, back me up. 

**Ben:** Alright! So if I were interested in, you know, writing good tests and getting started with test-driven development, where might I start?

**Adrianne:** So yeah! So, hopefully for today, maybe you do have some prior knowledge of software testing. If not, I'll drop the Wikipedia page to it in our chat, and that would be, like, a whole thing to go and learn about. But so if you're familiar with software testing, as far as test-driven development, that is kind of interesting. So, test-driven development, I did not invent it. I am posturing myself like I <i class="timecode">[00:05:00]</i> know a lot about it, but like, I really know the tip of the iceberg compared to how much is out there. Like, it's something that's really been vetted and studied and they've done the cost–benefit analysis of it. And it comes originally from extreme programming. So I'm also going to be dropping in the chat the Wikipedia page for test-driven development, because if you're into, like, computer science history, it is an interesting read. It's been around since the 90's. 

And it's important to know that there are different flavors of it, like so many other things in programming. So, you know, calling that out! Like, if you had an experience trying TDD in the past that left a bad taste in your mouth, it could have been the way that you were implementing it. And so just have awareness that there's different styles of it. Mmhmm. 

**Ben:** Okay! Awesome. We <i class="timecode">[00:06:00]</i> already have a question. This is from Pritam. Pritam's asking, "When you start with test-driven development, it feels like it's holding you back and taking some time to get used to. How do you overcome that?" 

**Adrianne:** That is so fair. Yeah, you're actually going to see in the code today that, like, the process, it can feel cumbersome. It can feel unnecessary. It can feel like a $10 solution to a 10¢ problem. And at first, it kind of is. And we're going to write something simple today, so it's going to seem like overkill. But once you get into a rhythm, you *do* get so much faster at it. And the value of TDD isn't always obvious, you know, that first day. It might be the next day when either *you* go back and revisit it. It's so lovely to see the documentation , of your thought process in those forms of tests. You can see where you left off. It's also <i class="timecode">[00:07:00]</i> really lovely if you're sharing a codebase, because your tests, they're, like, they're living, right? Like, they are the specifications of the business logic where you were going with it.

And so why am I talking about that? Because that saves you time. So it might seem like it's taking you longer at the time of writing, but you're going to save time later when you're context-switching. Maybe you write code, go to a meeting, come back. TDD helps to have those test suites. Or maybe that example of it's the next day, or after a long weekend or vacation.

Also it saves you time in another really key area, and that is debugging. Mmhmm. The tests give you such a short feedback loop that, like, you know, yes, you can look at logging and you can do console logs, but the tests are really helpful <i class="timecode">[00:08:00]</i> to speed up your debugging. Mmhmm.

**Ben:** Alright! Chan is asking, "In testing UI code, what level or levels do you like to test at? For instance, end-to-end, visual regression, unit, et cetera." 

**Adrianne:** Okay, thank you for asking this. So, there's a whole world of testing. And so you, either as part of a dev team or as an individual, you're going to need a holistic approach to testing. If you think that just TDD and just unit testing is enough, it might be, but it's probably not. And so you're right, you'll want to get the right testing in the right areas and the right amount in the right areas. So, like, with end-to-end, I really love end-to-end to make assertions about a user's experience, and I like <i class="timecode">[00:09:00]</i> end-to-end testing for those integration pieces where your code has, it's either passing off to something else or you have a dependency you're bringing in. 

So the TDD cycle that we're doing today, Chan, is going to be unit testing, but it is possible to do an end-to-end cycle of TDD. And yeah, just to explain what that would look like, it would be, like, end-to-end is the overarching, but then you've got lots of rapid unit testing TDD cycles within it, and then another end-to-end. And if that does not make sense, I will have to pontificate later. Yeah. Oh, and then with visual regression, I think that kind of ties into it. Yeah.

Also the testing trophy, if you haven't googled that before. I know, like, that's very respected in our <i class="timecode">[00:10:00]</i> React community if you're a frontend programmer.

Was there another question you wanted to call out, Ben?

**Ben:** Yeah, and I also know that, like, we have some code demos that we want to get to, so we may also circle back to some questions. This is the trophy, right? 

**Adrianne:** Yeah, I like that plan.

**Ben:** Yeah, here's Kent C. Dodds on the trophy as well. 

**Adrianne:** Thank you.

**Ben:** So, yeah! And then… I guess one more question, before we dive into the code, and then I'll circle back to other questions that we got throughout. Codelex is asking, "Can you please give us some recommendations for time estimation between code plus TDD and testing?" So about how long does it take, or maybe in general, if I can generalize that question, how much of your time is spent with the tests versus with the code that actually gets delivered? 

**Adrianne:** That's, like, kind of hard. It's gonna… I would almost <i class="timecode">[00:11:00]</i> say… It just depends too much. It just, it varies wildly. <i class="brackets">[laughs]</i> Yeah, because you could get stuck debugging on one side versus the other, in your source code or in your test, but because you're rapidly switching back and forth, I feel like the balance really works its way out, and maybe you'll kind of see it in the demo. And I know that this chat will, you know, persist, so I'll come try to find you and I can give you, like, a longer answer later.

**Ben:** Alright! Let's hop into the code and if you've got questions, feel free to leave them in there and we will definitely circle back. I know that there's already questions in there that we're not getting to quite yet, but we will definitely circle back to those. And Adrianne is also, in real time, dropping a whole bunch of resources.

Alright, so you gave me a repo. You gave me some starter code here. Let <i class="timecode">[00:12:00]</i> me go ahead and refresh this so you can  see this. And actually, chat, we're immediately going to enlist y'all's help, because we're struggling to even get this running for some reason.

So we have just installed. We have a package.json that looks like this. We're saying it's a type: "module". We have an `npm run test` script that'll run Jest. Then we have, here's our .test file which is importing a `tunaben` dependency from the tunaben.js, and that looks like this. And yet… Maybe what I need to do is just kind of pull some of this stuff off to the sides. Yeah, whenever I run `npm run test`, we're getting… Oh, you know what? I bet you, if I rename this .mjs? That might do it. <i class="timecode">[00:13:00]</i> Let's try this. 

**Adrianne:** Fingers crossed! I hope so. <i class="brackets">[laughs]</i> 

**Ben:** Do it, do it, do it! Oh no! "Cannot use import statement outside of module." If anyone has any clue how to help with this, this would be amazing. Both Adrianne and I have had very busy mornings, so we haven't necessarily been able to get this code up and running.

Well, you know what? I think I have a pivot, which is that we don't have to import this from another file. In fact, let me delete this, and instead, what we'll do is we'll have one big file. 

Pritam's saying, "Try module.exports." That could also work. I think this is probably going to be fastest, and that way also we just have one file. 

So… I can spell "function," I promise.

Chan, we do have type: "module" in the package.json. 

**Adrianne:** Thank you for the suggestion. 

**Ben:** Yes, thank you so much, both of y'all. I think this is <i class="timecode">[00:14:00]</i> probably how we'll do it, is we'll define our `tunaben` function up here and then we can use it down here. That way we don't have to play around tools. 

**Adrianne:** Yeah. So, do you mind opening this file up twice and we can have it still open side by side to kind of see the tests split-screen with the source code? 

**Ben:** I love that. Yes. Let's see. Yes, that works. 

**Adrianne:** So, that is my first, like, huge tip is, if you're doing this, it can be frustrating and disorienting <i class="brackets">[laughs]</i> to bounce around all your files, so I really love to have the source code next to the test code, the matching one. Yeah. Okay. 

**Ben:** I'll collapse the — Ooh. Exciting. Always an adventure with the VS Code. Okay. So it's one file, but— 

**Adrianne:** Okay. We need to state the problem! They don't know what we're trying to do today. 

**Ben:** That's true. Would you be my product owner, please?

**Adrianne:** Okay. So the challenge is <i class="timecode">[00:15:00]</i> today, we're going to TunaBen. What is TunaBen? TunaBen is like FizzBuzz, but way better because you get Tuna! And also Ben. <i class="brackets">[laughs]</i>

So, yeah, so if you're familiar with this popular exercise, we're going to print numbers, like 1 through 100, but special rules, okay? So if the number is a multiple of 3, we want to print "tuna." And if it's a multiple of 5, we're going to print "ben," return "ben." And then, if it is a multiple of both 3 and 5, "tunaben"! Yeah. 

**Ben:** Alright! We've got some love for this. Matt's saying, "High energy testing!" and Joe says "Love it!" Yes, absolutely. Alright, so where do you want to get started?

<i class="timecode">[00:16:00]</i> **Adrianne:** Yeah! So the cycle in TDD that you will hear, mmhmm, is "Red–Green–Refactor." So "Red" means we write a failing test. We get some red in our terminal. And then "Green" means get it passing. So you would do the simplest possible code to get it passing. Like, even if it's comical, like just write really bad, not elegant code, because the third step is "Refactor," and Refactor is your chance to, like, stop being so tactical, be a bit more strategic. I like to refactor after I have about like three things, usually like three tests kind of testing the same thing, and you'll see that in a minute. Okay, so Red–Green–Refactor.

So first is Red, so we need a feeling test! And Ben is showing on his screen… like, this is, like, a template that I <i class="timecode">[00:17:00]</i> sent over. Okay. *I* love this. You can test however makes sense for you. I like to do the acronym SEAT, like "take a seat." S is for Setup, E is for Exercise, A is for Assertion, and T is for Teardown.

So, to quickly go over that, sometimes your setup is simple, sometimes it's not. Sometimes you have, like, mocking, dependency injection… It can be kinda messy. Exercise is where you might call your method or test whatever the unit test is over. And then Assertion, that's the line of code where you're actually  trying to pass. And teardown. Teardown is not always required. It usually would be, like, in mocking, for example.

**Ben:** Okay.

**Adrianne:** Okay. Yeah, so let's set up the test. Okay, so this test is written. So, we named it on line 6. <i class="timecode">[00:18:00]</i> A tip is, in your *tests* — not in your code but in your tests — clarity is so, so, so much more valuable than brevity. And what I mean by that is give it a very specific name, and it's okay if it's long, but state, like, high level, in plain language, what you expect to happen. So we're expecting to get "tuna" if we give it the number 3. Yep! And so for the setup, we just have an `expected` is, we're expecting "tuna," and our `actual` is calling our source code on 3. Okay, so we're ready to run it. Let's see if it's red. Oh, you did! One failed.

**Ben:** Yeah!

**Adrianne:** Okay. Now, where did it fail? Did it fail at the assertion or in the build?

**Ben:** So, it's failing at the assertion. 

**Adrianne:** Okay. And that's your goal! And so sometimes it'll fail, the cursor will be higher in the <i class="timecode">[00:19:00]</i> file. That just means you haven't really made even the file yet. But Ben kind of did that housekeeping, yeah. So this is great. We want it to fail at the assertion.

So Ben, you need to write the simplest thing to make this test pass. 

**Ben:** Okay! So the test here says "should return 'tuna' if given 3," so here's what I'm thinking ,is I'm gonna get a number, and then… I am a massive nerd for JSDoc. So, I'll do "FizzBuzzable number." That'll help me keep track of some of the types. I'm gonna give me a little more room.

So, I'm going to say — let's see, it should return "tuna" if given 3, so if num equals 3, return "tuna." So this is the simplest possible assertion I can think of. <i class="timecode">[00:20:00]</i> And I'll run this test and I'm getting some passes! 

**Adrianne:** So, I want to point out that you could have done something even simpler. You don't really need line 6. You could just return "tuna."

**Ben:** Oh!

**Adrianne:** Yeah!

**Ben:** Okay!

**Adrianne:** I won't make you delete it, but, um, but I'm so glad you did that because that's the natural tendency in TDD, which is you're not really racing ahead, you're just thinking ahead because you're a great programmer. So a lot of us, when we see these problems, we abstract the logic in our heads so fast that the simplest thing we think of is not truly the simplest. Like, you took a really small step, but you gotta take the very, very smallest step. 

**Ben:** Okay!

**Adrianne:** Yeah. And yeah, depending on if you're pair programming or if you're working by yourself, you can be a purist about that if you want. Yeah, <i class="timecode">[00:21:00]</i> okay.

So anyway, I like this. We can leave it. And so, to repeat the cycle — red, green, red, green — it's not time to refactor yet, 'cause we don't have multiples of these. So, we need to write the next failing test. So in IntelliJ, um, you can just, like, copy the block of code and you can actually Cmd-D and it will duplicate it, or however you like to copy and paste. But we're just gonna change the test. And the stumbling block here is when you copy and paste your test, always rename it because you do not want multiple tests with the same name. Also, if you change the logic of your tests, but not the name, your test is now a lie. <i class="brackets">[laughs]</i> So yeah, so we need to name this test. 

**Ben:** Okay, so I'm copying this test that we've got down here, and I should—

**Adrianne:** Yeah.

**Ben:** —put it down here. 

**Adrianne:** Um, yeah. But actually on the bottom is, like, a simpler format. I'm really cool with either. <i class="timecode">[00:22:00]</i> Do you want to do my SEAT formatting, or do you want to do, like, the shorter? 

**Ben:** Let's play around with SEAT, 'cause I've never actually seen it structured like that and I like that.

**Adrianne:** Okay.

**Ben:** So I'm going to go ahead and nuke this one.

**Adrianne:** Love it. Okay.

**Ben:** Okay! So, "should return 'tuna' if given 3," however, this is a duplicated test, so we're writing a new test. What is this new test? 

**Adrianne:** Well, let's continue to drive up the logic of all the times that we would want to get "tuna." So, pair programming partner, tell me any other time that we would expect to get "tuna." So any other multiple of 3. It could be any! 

**Ben:** It would be 6, or I could expect on 27, 51.

**Adrianne:** Yeah.

**Ben:** So many. I'm not writing a test for every one of those, am I? 

**Adrianne:** You're going to write about three, yep.

**Ben:** Okay.

**Adrianne:** Yep, and it's going seem tedious and overkill, but just bear with me. Like, you'll love it, and yeah. 

**Ben:** It'll seem tedious, but I'll actually be <i class="timecode">[00:23:00]</i> TDD-ious <i class="brackets">[sputters off]</i> Oh, god. Execution! TDD-ious. That's hard.

**Adrianne:** TDD-ious. Oh my gosh.

Yeah, so you can make it say 6 and then… Yeah, so, yep. And now make the logic match. Yep. And run it. And it'll probably be, like, a freebie, meaning it won't be failing, because you already wrote line 7 on the left. But remember, if we had done the simplest implementation and you had it always returning… Actually, wait, it *did* fail! Okay. Okay. We're good. So yeah. So now we need to, like, write some logic. Yeah, okay. 

**Ben:** Yeah, 'cause I was checking if num is exactly 3, not divisible. 

**Adrianne:** Okay, that totally makes sense. Okay, so let's write simple code. Try not to be <i class="timecode">[00:24:00]</i> elegant. We want to get "tuna" if this is true, if we get 6.

**Ben:** Okay, so you're trying to be… We're starting inelegant here, so I could just say "if num equals 6." 

**Adrianne:** Yep, and that counts! So now we move on. And I hope you, like, we're getting faster and, like, if you get into a rhythm, you can really, really go fast with this. Yeah. So now, third test. You can duplicate the test and you can rename it, but we want to do like another case for multiples of three. So, you said 27 earlier. Let's just do that one. Let's say that it should return "tuna" if given 27. 

**Ben:** Hello, we got bots! Hang on. We got bots! 

**Adrianne:** Whaaat.

**Ben:** We did it! We did it!

**Adrianne:** You mean they're trying to see Tuna? 

<i class="timecode">[00:25:00]</i> **Ben:** You know, always. "Warning, warning, spammer here." Yeah, we got two bots in one go! Y'all, we've hit it! Yes, bots very excited to see Tuna.

**Adrianne:**  Did we show them the Tuna? 

**Ben:** As in the !tuna command? We've got a few Tunas in the chat coming! Yeah, okay. I'm sorry. So we have…

…Oh.

**Adrianne:** I hope that we've appeased them. 

**Ben:** You know what, we're done here, Adrianne.

<i class="brackets">[both laugh]</i>

**Adrianne:** Yeah, I came prepared, 'cause I knew that your Twitch fans love the Tuna, so I thought they would want to see it. Maybe I'll just put it… Yeah, okay. Well, that was distracting! Good thing we can context switch back to our code and we can see from where we left off in the test. 

**Ben:** That was a world-class segue. Incredible. 

**Adrianne:** <i class="brackets">[laughs]</i> But <i class="timecode">[00:26:00]</i> seriously! Like, it's beautiful. It's so true.

So we just read the test that was, like, failing. Oh, they're all passing. So then, we were trying to write the third one. And we said 27, remember? 

**Ben:** Yup! So let me do that. And then… 

**Adrianne:** And it's 12:27. Make a wish.

**Ben:** I wish that this test would pass. You know, I'm very, very worried about the state of this test.

Pritam is complimenting you on your nice save.

**Adrianne:** <i class="brackets">[laughs]</i>

**Ben:** Alright, yeah! So already—

**Adrianne:** You can refactor now. I know you've been, like, itching to, yeah. 

**Ben:** I've been ready, you know? Okay, so the way I would write this is I would use the modulo operator. So I would say "if the remainder of num divided by 3 is 0." <i class="timecode">[00:27:00]</i> That's how I would do this. Is that expressive enough for you? Is that how you would write that? 

**Adrianne:** I like it, I like it.

**Ben:** Okay!

**Adrianne:** So, what was the next rule? We have "tuna." Now we need "ben."

**Ben:** Yeah!

**Adrianne:** So do you remember when we want "ben" to return? 

**Ben:** Yeah, it's when the number's divisible by 5, right?

**Adrianne:** Yep. So again, you can copy your test <i class="brackets">[laughs]</i> and we'll rename it, and yeah.

**Ben:** Alright.

**Adrianne:** And so we can do 5 for the first one, because 5 is a multiple of 5.

**Ben:** Makes sense!

**Adrianne:** Yeah. And yep, instead of "tuna," it's "ben." Yep. Great job. 

**Ben:** Alright. So now obviously this is… nope, sorry, we want num equals 5. 

**Adrianne:** Yep. And that can be a hard habit <i class="timecode">[00:28:00]</i> to break. So, you know, it gets a little bit of a mindset shift. 

**Ben:** Yeah, absolutely! I'm here, like, you know, it almost feels like… there's definitely that, like, that barrier there, but like, it feels like almost, like, a waste of time, you know? And I know it's not, but like, it's like I know the solution. I should hop right in. 

**Adrianne:** Maybe. On a day like this with a problem like this, that would seem appropriate. Remember though, you might have a more complex thing that you're coding and this project might throw a lot. You know, you might start introducing a lot of functionality, you might have more UI going on, and you might be sharing the codebase. So, I don't blame you if you're not impressed yet. It's day one, you know. I think it can take a little bit to see the value, yeah.

But, okay, cool, we have four tests passing. So with the <i class="timecode">[00:29:00]</i> cycle, remember before how we did like two more cases for 3? You can do one at a time, or if you are feeling risky, you could write two tests at once and see if we can jump from four passing tests to six.

**Ben:** Let's do it!

**Adrianne:** Yeah, so this is an advanced move, y'all! It's probably… It's sort of risky to, you know, be doing it when you're new to TDD, but I want you to see that there is potential to speed up the process.

**Ben:** Okay!

**Adrianne:** And yeah. Okay, so… Yeah, okay, cool.

**Ben:** Right, and then the last one was 95. I guess I should have demonstrated those tests failing first, but… 

**Adrianne:** Yeah. Okay, I'm so glad you caught that! The reason that it's Red–Green–Refactor and not just "red, red, <i class="timecode">[00:30:00]</i> red, red,  red, red rad, red them all" is because if you have failing tests, it is tricky to debug. Like, it's not isolated. You won't know exactly where to go. You'll have *multiple* failing tests. But when you just have one test failing at a time, it's, to use a metaphor, it's like that smoke test for your car. Like, you see where that smoke is. 

**Ben:** Mm, okay! Got it!

**Adrianne:** And so, but that's cool, you caught it, and yeah. And one more thing: I never trust a test that I haven't seen fail before because it is possible to write, you know, a test that is always true. Yeah. Especially if you're in a hurry. There's lots of reasons why, but yeah. So that's why we do try to do red then green then refactor. Okay. 

**Ben:** Yeah, I feel like this is pushing up against my base impulses in a way that I'm finding very <i class="timecode">[00:31:00]</i> interesting. And, you know, I'm going to, after we get off this call, I'm going to have, like, a nice long think for the rest of the day. Um, yeah. 

So Chan says, "The value that I've found in starting from the simplest case is that I actually cover the simplest case. It's easy to bias towards the, quote, 'dynamic' case and miss the obvious cases." 

Matt says, "I feel called out. I only write tests that pass "

**Adrianne:** <i class="brackets">[laughs]</i> That's funny. And, yeah, to just complement, like, that idea of, like, the simplest things, I'm going to drop a link now. This is Sandi Metz's "refactoring a gilded rose" exercise. It's a more complex example than what you're seeing today. Maybe check that out later if, like, you're feeling intrigued.

**Ben:** Okay.

**Adrianne:** But so, Ben, you've got six passing tests and you have three for the case of 5. You're allowed to refactor.

**Ben:** Ooh!

**Adrianne:** So did you already refactor, or not yet?

**Ben:** Not yet.

**Adrianne:** Okay, so now you <i class="timecode">[00:32:00]</i> can refactor it. And today, Ben is driving and I'm only navigating, but if we were really pair programming, you can gamify this by ping-ponging off of each other, and what I mean by that is I could write a test, and then I could be like, "Okay, Ben! Your turn. Get it passing." And then, it becomes fun because by doing the least amount of work, the simplest thing to get it passing, it kinda is like that fun banter back and forth of, like, you build up your test suite, like, really quickly writing all these tests, and it can be fun for pair programming. 

Okay, so we refactored. Do you remember the third piece of the acceptance criteria? 

**Ben:** Yes, so if it's visible by both 3 and 5, we say "tunaben." 

**Adrianne:** TunaBen! Okay. So let's write a failing test. <i class="timecode">[00:33:00]</i> So red. Yeah. 

**Ben:** So I would say if… Wait, nope, that's not `if`. It's `it`. It should… Get the quotes… "should return 'tunaben' if given 15." Start the test closure, and then… I'll go through the steps. I won't have the comments, but `const expected = 'tunaben'`. 

**Adrianne:** TunaBen!

**Ben:** `const actual = tunaben(15)`. Then `expect(actual).toBe()`…

**Adrianne:** `expected`!

**Ben:** Yep. And we already know that this is going to fail. My prediction is it's going to get "tuna."

Joe says, "I really like the <i class="timecode">[00:34:00]</i> self-documentation part of writing these tests." 

**Adrianne:** That's awesome. I like it, too. <i class="brackets">[chuckles]</i>

Okay, so what we are doing now, Ben, is like, we're being forced to refactor because we introduced a new functionality that competed with the existing functionality. And this is a small example, but if you've ever played in a more mature codebase — doesn't even have to be legacy, just something that's, you know, more than one file — you have likely caused a defect before because you forgot about the existing logic. Or you didn't forget about it totally, you just, like, you thought you remembered it correctly, so you appended some new logic and then, yeah, there could be, like, these weird edge cases, right? There could be unexpected behavior.

**Ben:** Absolutely.

**Adrianne:** Yeah. So now, we refactor more <i class="timecode">[00:35:00]</i> because the point is all the tests that you wrote already should still be passing. So we should have, like, seven. The goal is seven passing tests right now.

**Ben:** Alright. 

You should know that my door was closed and Tuna has barged in specifically, so he can enjoy his blanket.

**Adrianne:** Tunaaa! Woo!

**Ben:** He heard his name enough times.

Okay. So we can refactor. We're pair programming, so how would *you* go about this? Because I have my own thoughts, but if we're paring, I'd love to know kind of how you would, what your next steps would be for this. 

**Adrianne:** I'm reading. Hold on. 

**Ben:** Let me give you a little more breathing room, perhaps.

**Adrianne:** Oh, well, you know, I really actually wouldn't do anything very complicated at this time. I would be like, I'd be a lazy developer and I'd be like, "Ben, you're my pair. It's on you, Ben."

**Ben:** Okay!

**Adrianne:** So what I <i class="timecode">[00:36:00]</i> would write would be the simplest thing. 

**Ben:** Alright! So the simplest thing—

**Adrianne:** If is 15, it'd be "tunaben"!

**Ben:** If it's 15, return "tunaben." Okay. 

**Adrianne:** Yep. And then I'd, you know, ping-pong. It's Ben's turn. Not my problem, until it comes back to me. Yeah. 

**Ben:** Alan, welcome! "The Edge Cases is now the name of my new band, by the way," is what he says. 

**Adrianne:** I love that. 

**Ben:** Incredible.

**Adrianne:** So we've got seven. Okay, write another feeling test. So what is a multiple of 5 and 3?

**Ben:**  I'm going to do 45. And it's gonna be all red. Very, very red. Alright, so… 

**Adrianne:** I would probably say "if the number is 15 or 45." Seriously, yeah. I <i class="timecode">[00:37:00]</i> liked how you had it. Like, yeah. 

**Ben:** Alright.

**Adrianne:** It's a painful small step, like it feels uncomfortable, but what we're doing right now, Ben is we're auditing our logic. We're really making sure that the way we think it works is how it works.

**Ben:** Okay!

**Adrianne:** Like, you could do this without coffee early on a Monday morning. 

**Ben:** I really like that you've picked such a simple example because, like, my instinct keeps like going up. I'm like, I just wanna, like, write the thing. Like, I know how to do FizzBuzz. I know how to do TunaBen, right? Like, let me just do that, then I can write the tests after. Like, got killer tests for that. And so this demo is really, like, forcing me to, like, slow down and, like, I really like that. So, okay, but— 

**Adrianne:** It feels like we're on the same page and, like, the verbal conversation that we're having is very good and explicit. <i class="timecode">[00:38:00]</i> So if we were pair programming on more complicated logic. It would sound similar. Or maybe I would say, "Hey, write this," and you would give me immediate feedback of "Wait, I understand that like this," and because we're writing the tests now and not backfilling them later, we're, like, in a code review. Like, seriously, this whole thing becomes a code review and we're going to catch, like, those mistakes and check each other's work like now and not later. It just, it can make code review shorter later, for whoever had that question earlier about saving time. Yeah.

But just write one more failing test. So test #9 is another multiple of 5 and 3. 

**Ben:** Alright. Another multiple of 5 and 3. 60.

**Adrianne:**  Yeah. Okay, awesome. Okay, so now we're at three. Now we can refactor it. So on line 7, you could do num, and then divide it, and then <i class="timecode">[00:39:00]</i> 15. Yeah, so you're, like, copying line 11.

**Ben:** Yeah. 

**Adrianne:** There we go. Okay.

**Ben:** This is how you're proposing it. Um, yeah. Cause the other way we could do is `if (num % 3 === 0 &&  num % 5 === 0)`, but because 3 and 5 are prime, we know that 3 times 5 will be a factor of any number that's a multiple of both 3 and 5. 

**Adrianne:** Okay, so we're doing amazing on time. Do you mind running the, like, `npm run coverage`? Like, do you think we're at 100%? 

**Ben:** Wait, `npm run coverage`? Do we… Is that just a…? 

**Adrianne:** Or however you get your coverage for Jest, yeah. Yeah, I think that's right. No… 

**Ben:** That's a script that we have to add…

**Adrianne:** Oh, okay.

**Ben:** Let's find out!

**Adrianne:** I think there's a way in IntelliJ to test your, like, <i class="timecode">[00:40:00]</i> test coverage. 

**Ben:** Is it a `coverage` package that we would get? Does this look familiar? 

**Adrianne:** Yes, it looks familiar. We can try it, and if it doesn't work, we can go over it. 

**Ben:** Oh, Pritam's got us covered! Yeah, I think we can do `npm run test --coverage`. 

**Adrianne:** Okay.

**Ben:** Because Pritam's saying `jest --coverage`.

**Adrianne:** Okay.

**Ben:** No, okay, that's not in here, but what we can do is add a new script here.

**Adrianne:** Can I talk while you're typing? 

**Ben:** Go ahead! 

**Adrianne:** Okay. Yeah, so the theory here is you may or may not have a coding standard to have x% coverage. And this doesn't look quite right, 'cause we're not getting any numbers. <i class="timecode">[00:41:00]</i> Hmm… It must not have the right path, 'cause in this table, we should see the names of the files.

**Ben:** Okay. That's interesting. I've never actually seen the Jest coverage command. That's…

**Adrianne:** Yeah!

**Ben:** Let's find out! We probably need the pass it the filename, is my guess. "You need a JS file." Pritam, are you saying that we need to pass a…? Oh, "You need a JS file for which a .test.js file is there." 

**Adrianne:** Ohhh!

**Ben:** Okay.

**Adrianne:** Great catch. Okay, yeah, because we wrote it in one file that, okay, got it.

**Ben:** Got it.

**Adrianne:** You would want your source code and your tests' code <i class="timecode">[00:42:00]</i> separate. Okay, but the theory still works here. You may not personally care about test coverage if you work by yourself, or if you work in a small team that you really, really trust. But the more hands that are in the codebase, like, the nicer it is to know that the code that you're trying to do a pull request on, you know, it really has been vetted, and because we wrote the tests at the same time as the source code, we didn't accidentally write untestable code.

**Ben:** Okay.

**Adrianne:** And what I mean by that is if you are combining too many things, you're ignoring SOLID principles, you can write some, like, gnarly methods that are, like, doing a ton of stuff that are, like, super hard to go back and test. Has that ever happened to you?

**Ben:** Oh, for sure, for sure!

**Adrianne:** Yeah. And so, I mean, this kind of saves you the time and frustration that way. Everything is so simple <i class="timecode">[00:43:00]</i> and isolated, yeah, that having that daunting high test coverage of like 95 or even 100, it is now, it's attainable and it's realistic. Yeah. 

**Ben:** That's also interesting, 'cause, like, I know part of collecting metrics is being able to, like, tell the story of your team. Right? And sometimes, just for like political, optics reasons, you want to be able to tell a really nice story. Right? So being able to, like, surface your coverage, like, can be awfully convenient for that kind of stuff. You can show like, hey, we've been growing over time, our coverage has been getting better, and that can also tell a compelling story. So it's an interesting way in which writing tests like this can put your team in a better position, even if it doesn't change anything about the code per se. 

**Adrianne:** Yeah. Yeah, your needs, though, for testing, <i class="timecode">[00:44:00]</i> it can really just depend. Like, if this is your project you do for fun, you're not going to have an outage! <i class="brackets">[chuckles]</i> And if it's your personal website, you may not be afraid of an outage because, oh no, someone can't read your blog. But like for, you know, critical systems or even just things where you start to have customers and you're worried about things like availability.

Yeah, so, I don't want to mislead you. High unit test coverage doesn't mean you're, like, bulletproof for outages, not at all, but it can kind of eliminate an area of suspicion. And what I mean by that is, like, if you ever have a defect, like a small defect or even a big outage, like, being able to debug and look at your tests help you, like, know what has been looked into, and you can focus on, you know, something maybe like in an integration test or something that, like, the other things <i class="timecode">[00:45:00]</i> that, like, you know weren't looked into as much. Does that make sense? 

**Ben:** Yeah, absolutely. Okay, so you mentioned that having high test coverage doesn't necessarily mean your code is bulletproof. Can you give some examples of why that might be the case and what you might do about that? 

**Adrianne:** Okay, totally. So, like in today, when we were doing the multiples of, like, 5 and 3, I said that 60 was a multiple of 5 and 3, and you agreed. But guess what? We might've actually abstracted the business logic wrong. And so even though the test is passing, you can still have a kink in your logic. And hopefully that would be caught by code review. But as you write more tests later, there is a, like, higher chance that you would meet it. And remember, like, when Chan said, "Okay, <i class="timecode">[00:46:00]</i> do we other forms of testing?" So holistically, you would likely complement your unit testing with other things such as manual testing and, like, the end-to-end. And so, you know, a lot of your applications will have, like, a frontend, so as a user, like, QA may catch that, or maybe you're your own QA. These are, like, some guardrails.

There's another thing that is out of scope for today, but I'd love to come back and talk about: mutation testing. And yeah, if anyone wants to search for mutation testing, it is, like, a whole 'nother level of quality. 

**Ben:** Well, can you give, like, a one- or two-sentence, like, elevator pitch for mutation testing?

**Adrianne:** Okay. Mutation testing will catch, like, very strange and unique edge cases <i class="timecode">[00:47:00]</i> that you probably won't <i class="brackets">[laughs]</i> because it's running, like, some… it's mutating your code. And so do you feel like most of your audience is frontend?

**Ben:** Yeah, I would say that's probably pretty fair!

**Adrianne:** Okay. So there's, like, a lot of tools, but the leading tool for JavaScript mutation testing is Stryker, S-T-R-Y-K-E-R. And it has fantastic documentation. Honestly, if you read the documentation, I might not need to come back, 'cause it explains it so well. But, yeah, that's something that can, like, fortify your confidence in your tests. Mmhmm. 

**Ben:** So the way I've heard it explained, right, it's 'cause you, like, you could in theory write your tests in such a way that you get, like, 100% code coverage, right? Like, you write one test that pulls in every function, every class, every file from your codebase, but then at <i class="timecode">[00:48:00]</i> the end of that test, you could expect true to be true. And you, in theory, as far as automated tools can detect, you technically tested 100% code coverage, but your test is not meaningful in any way. Right?

**Adrianne:** Yep.

**Ben:** So, the way I've heard it is mutation testing ensures that the other tests that you've written are quality tests by introducing deliberate bugs into your code. It changes up your code in some way to force your unit tests to fail. And then it surfaces, hey, how many of your tests actually failed. If very few of your tests failed, you're probably not testing anything of value.

**Adrianne:** Absolutely.

**Ben:** But that's the way I've heard it pitched. 

**Adrianne:** Yeah, I have heard it pitched that way as well. Yeah, and so, like, on that note, like, today was pretty simple. We just wrote a few tests. It <i class="timecode">[00:49:00]</i> really scales well. Yeah, having more suites, yeah. And so, like, in the outage example that I gave, it is pretty rare to have an outage caused by a JavaScript, like, defect, but it does still happen and, you know, I've read postmortems where they say at the end, you know, "What are our action items?" or "What could we put in place so that this doesn't reoccur?" They say, "Did we test enough? Like, were there enough all types of tests, including unit testing?" So, when you, like, take advantage of this unit testing — and it's not adding more time, like we're doing it at the same time — you just kind of remove that from the equation so you can focus on, like, the other areas where things might be bad. 

**Ben:** Okay. I've got another question for you, which is that in this <i class="timecode">[00:50:00]</i> process, where do edge cases best fit in? Because we, for instance, did not test, like, the number 0. We didn't test values that aren't numbers, right? Like, there are ede cases that we haven't tested. 

**Adrianne:** Okay, so., I wasn't sure if we'd have time for this, but we do. I like to use an acronym. It is "N" and then "ZOMBIES," and that stands for… It's, like, a mnemonic device. So, we don't really have a lot of time to get into it, but like N is for null, and then Z is for zero, the O is for one, and so you drive out these edge cases. And so let me drop some literature about that into the chat. And so, NZOMBIES is not a tool or framework. It's, like, just a schema for, like, as a human, how you would, like, logic to <i class="timecode">[00:51:00]</i> discover those edge cases. I'm dropping it. Okay, and I think that's… Okay, so there's actually two links. I'll put a space.

But yeah, so by doing that, you're going to have a lot more than seven tests, and that is okay.  It's okay if a file this short has a good, like, 20 tests. You probably won't see performance issues or, like, it's taking too long to run. If you do, that is a really well-documented thing. Like, there's strategies to speed up your unit test runtime.

But, like, ideally you would do TDD all throughout your development cycle and you would use, like, this type of schema to catch those edge cases of like, what if we give it. null, like we don't give it a number, or what if we give it a number that's outside, like, a boundary, <i class="timecode">[00:52:00]</i> and things like that. So yeah, just to summarize, in addition to the TDD cycle of Red–Green–Refactor, NZOMBIES is, like, a helpful strategy. And then I like mutation testing to check my work, but if that doesn't fit your project needs, a lot of times human code review can catch those. Yeah.

**Ben:** Alright! Awesome! I know we've got a few minutes, so I want to make sure that we're getting to some questions from the chat. So if you've got any, go ahead and put them in there. I'm going to scroll through and see if there's anything I missed.

I do know that there was one from Makar, who's asking, "Are unit tests for object-oriented programming codebases harder than functional programming?" I don't know, do you have experience in that regard, Adrianne?

**Adrianne:** So, I primarily have object-oriented programming experience. I don't actually know, but that'd be a cool thing for me to research and get back <i class="timecode">[00:53:00]</i> to y'all on. If I had to guess, they would be equally difficult.

**Ben:** Okay.

**Adrianne:** But that is just a guess. Yeah. 

**Ben:** Let's see… Scrolling through… 

Codelex asked a while back, and so maybe you feel like we've already gotten to this, but how do you recommend to plan out your test cases by function, feature, module, and so on? 

**Adrianne:** Repeat it one more time. By… what was it, function? 

**Ben:** I scrolled down. By function, feature, module, and so on. So, I'm wondering if the question at hand is, like, how do you break up, like, a testable chunk of the code, and how do you test those chunks? What scale are you kind of thinking at?

**Adrianne:** Yeah. So, <i class="timecode">[00:54:00]</i> if you go back to the code, like, we had a `describe` statement up at the top that says `describe('tunaben')`. You can have different `describe` blocks, and that is one way to organize your test file. So this was just testing the TunaBen functionality. So you can have multiple, and they're all in this test file, but they are different test blocks. Does that make sense? That's, like, one way.

Another way is… Today, we did it all in one file, but traditionally you'll see one JavaScript file and one correlating test file, and that's for unit. But so, like, your other types of testing, like your end-to-end or integration, those are typically another file. So, like, if you use Cypress, for example, for your end-to-end testing, you would have a folder of Cypress <i class="timecode">[00:55:00]</i> tests. Yeah. And you would run those within your TDD cycle. Does that make sense? 

**Ben:** Yeah, absolutely. We got a question from Dan. "Do you have any advice on convincing a really small team that's already feeling overcommitted to adopt TDD practices?"

**Adrianne:** So… Ben, can you drop my Twitter?

**Ben:** Yes I can!

**Adrianne:** Yeah, and so I don't know if you're on Twitter. I hope you are and I hope we can have a longer conversation there for more to see. I think that's, like, a really common thing. And I was fortunate because my whole team was buying into it at the same time. But if you're trying to build a business case for it, it can feel hard, and I have empathy for that.

So to oversimplify it, do you want to go fast <i class="timecode">[00:56:00]</i> or do you want to go far? So, this is something that seems like it slows you down, but, like, it really pays off later. It saves you time in the code review, it saves you time if there is a defect or an outage, and it saves you time as more and more hands are in the projects and as you scale and, like, make the project bigger and bigger. Yeah, and so I don't know if you mean peer developers or if you mean buy-in from, like, a scrum master, right, or like a manager. So if you can talk to me on Twitter, I'd like to talk about that side of it, too. Like, how do we make the business case for this process? There are cost–benefit analysises. And yeah, like, they've really studied this. This has been around since the 90's, and people have solved your problems. So we'll find that and we'll get that to you. 

**Ben:** Dan did clarify that he meant both, like, the scrum master side, the business side, and the dev side. <i class="timecode">[00:57:00]</i> Yeah. 

**Adrianne:** Yep. And you'll probably need to fit your business case to the audience, right? Devs care about different things sometimes. Okay. 

**Ben:** Yep. Tom says, "Measure how much time you spend on testing your app after a small code change," is probably one way.

**Adrianne:** That's a good one.

**Ben:** Yeah, and I think it's all tradeoffs, right, 'cause, like, it's not like you're going to be skipping out on the testing anyways, right? Like, what you don't do with your unit testing, you're going to end up doing in your manual testing. Right?

**Adrianne:** Yes!

**Ben:** Like, stuff like that, right? So it's, like, shifting the cost of, do your devs want to be doing the repetitive, brute, like manual test work every time they make a change? Or do they want to just let the, like, intelligent, speedy bot handle that? And I'm going to pick the bot every time.

Yeah! Adrianne, thank you so much for coming on. I hope you had fun. And chat, I hope y'all had a blast as well. <i class="timecode">[00:58:00]</i> You should join us — Oh, god, that's the stream manager. You should join us next week at 12pm Central Time. My friend Ashlae Nelms, who I consider my user experience partner in crime, is coming on. She's going to talk to us about design tokens, and specifically how we can use design tokens to scale up accessibility. If you want to get notifications about upcoming streams, go follow us on Twitter at @SomeAnticsDev.