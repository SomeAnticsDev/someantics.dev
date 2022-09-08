<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Tuesday! Welcome to Some Antics. Today, I am joined by the one and only Adrianne Mallet. Adrianne, welcome back to the stream! 

<i class="timecode">[00:00:11]</i> **Adrianne:** Howdy, Ben! Howdy, Some Antics viewers! It is awesome to be back. 

<i class="timecode">[00:00:16]</i> **Ben:** It's awesome to have you back. So, you've been on actually a couple times, a few times as guest host, actually. But this connects to your very first appearance on Some Antics. You wanna kind of talk about that? 

<i class="timecode">[00:00:30]</i> **Adrianne:** I would love to. So, my name is Adrianne Mallett and I'm a frontend engineer. For pronouns, I like she/her/hers. And the first time I was on Some Antics, we talked about test-driven development.

I do have a passion for software testing. I believe that it's powerful and useful and helps us make beautiful, scalable code. And a really popular technique for software testing is test-driven development. So that's what our first episode was on. We wrote our tests first. We focused on TDD. And a question that came up in that stream was "If we're using TDD and if we have really high code coverage, are we bulletproof?" And the answer is no. And we unpacked that a little bit and we teased that there was something out there called mutation testing, and I actually was manifesting, even in that episode, that I could come back one day and that could be our topic.

<i class="timecode">[00:01:28]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:01:28]</i> **Adrianne:** So it's really cool to be here. 

<i class="timecode">[00:01:30]</i> **Ben:** Absolutely.

Also, I wanna call out everyone who's in the chat, and also Jason Lengstorf for raiding with a party of 144 viewers! Jason, you've brought a gross viewership! No, I love all of y'all, but 12 squared is a gross. So, howdy, howdy, boop crew. It's great to have y'all. 

Yeah, so I'm super, super excited to be chatting with Adrianne. And we had kind of talked about this notion of like, well is 100% code coverage, like, a bulletproof defense for our code, and you teased that no, no it wasn't. So let's get into today's topic, which is mutation testing. What is mutation testing, and what is it trying to solve? 

<i class="timecode">[00:02:13]</i> **Adrianne:** So, mutation testing is a way to assess the quality of your existing software tests. So if you have tests, this is a way to test your tests.

<i class="brackets">[Adrianne chuckles]</i>

So more specifically, it will evaluate your unit tests, and it'll tell you if you have any unit tests that are missing or that have bad logic. These tests are awesome.

Conceptually, these tools, like, do all work the same way. They… it's like they seed faults throughout your code. So those are created by something that is called operators or mutators, and those are a little bit different depending on which tool you're using. But what is awesome is these are things that you're not having to remember or simulate or check in your unit tests. These are able to run a bunch of tests very quickly within minutes, and it will show you where your gaps are.

<i class="timecode">[00:03:16]</i> **Ben:** Okay. So… why would I wanna test my tests though? Like, you know, I wrote the tests. Why do I need to test my tests? Do I need to test the testing of the tests? You know, like, where does it… where does it stop, and why do we care?

<i class="timecode">[00:03:30]</i> **Adrianne:** Awesome. So, the reason that we care is that it is very easy, way too easy, to accidentally write a garbage test. You can write a test that will always be true if your logic boils down to "true equals true." That's an example of a test that, like, would always pass, and there's other examples. But the thing is that might not get caught during code review with human eyes on it. And so you might have beautiful, green, 100% code coverage. You might have very SEEMINGLY solid test suites, and it can give you a false confidence because you may have abstracted the logic wrong in some of your tests, or you may have forgotten to account for, like, very specific, like, edge cases and rare cases. So this will help you catch that. 

<i class="timecode">[00:04:21]</i> **Ben:** Okay. Yeah, so I think about this in terms of, like, you know, one initiative I've seen on teams I've been on is this notion of, like, code coverage, right? Like, broadly speaking, every bit of logic in your code should have a test for it, is the general idea of code coverage, right? But code coverage itself isn't good enough because there's still possibly… you might not have written… yeah, you could have written very weak tests for that and still technically have gotten the coverage, that 100%, but your test isn't meaningful, I guess?

<i class="timecode">[00:05:04]</i> **Adrianne:** Mm-hmm. Exactly. And so that's part of my, like, introduction to this tool. I mentioned in that TDD episode that I was on a team that had the passion for software testing. We felt super confident. We were pair programming all the time and we had a 100% threshold for our unit tests. Well, when we found out about the mutation testing tool, we thought, "Let's run it! Like, I'm sure we'll have a really high score." It was not terrible, but it wasn't 100. And we… it was a good ego check.

<i class="brackets">[Adrianne laughs]</i>

We realized that there was some logic that we had not accounted for in our unit tests.

<i class="timecode">[00:05:43]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:05:44]</i> **Adrianne:** And a really big misconception is that mutation testing is, like, a new programming language or a new, like, type of tests that you have to learn how to write. And that's not true. If you have gaps in your tests or missing tests, you're just writing additional tests or fixing your existing tests in whatever unit tests, like, test framework and test runner you're already using. And so because of that and because the reports that these tools generate are so granular and specific, we were able to raise our mutation testing score pretty quickly.

<i class="timecode">[00:06:22]</i> **Ben:** Okay!

<i class="timecode">[00:06:23]</i> **Adrianne:** And then… yeah, then we really had, like, true confidence that our tests were testing what we thought they were.

<i class="brackets">[Adrianne chuckles]</i>

<i class="timecode">[00:06:30]</i> **Ben:** Gotcha! Okay.

<i class="timecode">[00:06:31]</i> **Adrianne:** Yeah!

<i class="timecode">[00:06:31]</i> **Ben:** Gotcha. Alright.

So then, if I wanted to start diving into this world, like, what are…? Like, I don't even know how to begin. Like, you know, what is it I should be doing? Or where do you wanna take this from here? 

<i class="timecode">[00:06:46]</i> **Adrianne:** Yeah. So, the first thing that you should do is kind of, like, ask yourself what your testing goals are. If you're working on a very small personal site, you might not even have unit tests, so it wouldn't be high value to add this tool unless you have the plan to go in and add unit tests. And that would be an example of something where maybe you're just practicing the skill. Maybe that's the point of those tests.

You might have a totally different user case though. You might be working at a large enterprise or, like, a large open source project where there's many hands in the codebase. These are really good use cases to use a tool like this because, like I said, it checks the quality of your incoming unit tests. It's a way to check your own work before you open a merge request, but it's also wonderful when you're reviewing code and deciding to accept it or not. This checks your teammate's work.

<i class="timecode">[00:07:45]</i> **Ben:** Gotcha.

<i class="timecode">[00:07:46]</i> **Adrianne:** Yeah. So, understanding your use case. That's the first thing. The next thing is you're going to want to make a tooling selection. So whatever programming language you're in, you can do a web search for that. You could do, like, "Java," you know, space, "mutation testing." And you will quickly see what some of the leading tools are. But you'll wanna use a tool that plays well with your language, yeah. So today, we're gonna be using Stryker. We're gonna be using StrykerJS, but you should know that Stryker also has support for TypeScript and C# and Scala.

<i class="timecode">[00:08:22]</i> **Ben:** Good deal. I'm just pulling up the Stryker homepage right now! Yeah! Oh, is it — oh, it's not "mutation," is it? It's "mutator."

<i class="timecode">[00:08:31]</i> **Adrianne:** "mutator," yeah!

<i class="timecode">[00:08:33]</i> **Ben:** I thought I could just wing it! I thought I could just freestyle it! But this is the tool we're using today, and it's got ports for a bunch of different languages, so…

<i class="timecode">[00:08:42]</i> **Adrianne:** Mm-hmm. So, I first ran into Stryker, like, 2019. The docs are really well written and the support is strong. The developers are responsive, like, on Twitter or if you use Gitter, and they're also very transparent about their roadmap. I've seen several versions, like, be released over the last few years. This is a tool that's very actively maintained. So if you're trying to choose a JavaScript mutation testing tool, this may be the one that's right for you, yeah.

<i class="timecode">[00:09:13]</i> **Ben:** Okay. Makes sense!

<i class="timecode">[00:09:16]</i> **Adrianne:** I think… yeah! On this page, have you scrolled down a little bit? So I mentioned some of the languages it supports right here. These are some good features as well. They have great documentation on their actual mutators, which we will get into today. And you can see it's test runner agnostic, so it probably plays well with what you're already using. And yeah, this landing page of the stryker-mutator.io, this has some more, like, selling points for the tool, so definitely worth checking out. 

<i class="timecode">[00:09:46]</i> **Ben:** Awesome. Yeah, absolutely worth checking through these docs, but today you are my documentation.

<i class="timecode">[00:09:54]</i> **Adrianne:** Okay.

<i class="brackets">[Adrianne laughs]</i>

<i class="timecode">[00:09:55]</i> **Ben:** Alright.

<i class="timecode">[00:09:56]</i> **Adrianne:** Yeah.

<i class="timecode">[00:09:58]</i> **Ben:** Yeah, and then you also sent me, ahead of time, some links for the chat. Yeah, like a poster view and an article view.

<i class="timecode">[00:10:07]</i> **Adrianne:** Yeah!

<i class="timecode">[00:10:07]</i> **Ben:** Remind me which of these links you want me to pull up? 

<i class="timecode">[00:10:10]</i> **Adrianne:** Let's look at the poster view together. Okay.

So I gave a tech talk last year on mutation testing and it was language-agnostic, so I mentioned some of the leading tools for popular languages. But this is, like, a great introduction to the concepts of what's going on. It talks about a little bit more about the history of the tool and some challenges that you might run into. So, I see the poster's loading, but it has a section about the developer experience that you can expect if you and your team pursue mutation testing. It's got tips for, like, if your runtime is slow, how can you speed that up. And I think that this is a good link if you're trying to explain this to someone else. Like, you could send this to your tech lead, right? Or your friend that you're building, like, some game with or whatever. So, yeah, this is a resource that I wrote.

<i class="brackets">[Adrianne laughs]</i>

I think that it will help you, especially if you're a beginner to this type of testing. 

<i class="timecode">[00:11:14]</i> **Ben:** Alright! Excellent. Okay, so… man, where to go from this. Do you wanna…

Are there things you wanna caveat about mutation testing before we get into this, or do you wanna start, like, getting into some code? What do you think would be best to…? 

<i class="timecode">[00:11:32]</i> **Adrianne:** Yeah, I think we're at a good point to… let's do a demo with the Stryker tool and then we'll have a lot of time at the end for questions. 

<i class="timecode">[00:11:41]</i> **Ben:** Gotcha. So, yeah, ahead of time — I've been having some lag issues, so ahead of time, we did clone a repo and install our dependencies, but I wanted to share the link with our friends in the chat real quick. There's a repo that the Stryker team provides that we'll be working with today, and so we have that! 

<i class="timecode">[00:12:03]</i> **Adrianne:** Yeah. So, the name of this Stryker example is — they have a fairly simple frontend project. It's called RoboBar, and <i class="brackets">[chuckles] the idea is, like, it's a fictitious bar where robots are serving you things to drink.

And it is a great thing to run mutation testing over. Fun fact, they weren't even trying to write bad [chuckles]</i> unit tests or tests with gaps. They actually earnestly were trying to be thorough and have their test suites, like, be complete. It's just so easy and natural as humans to be really biased when we're testing code that we wrote ourselves and to forget about edge cases and things like that.

So anyway, when you hit this example, there is a TL;DR at the top, a "Too Long; Didn't Read." If you don't want to pull down the codebase and run it along, it has hyperlinks for you, three key things. The first one is the UI to the RoboBar page, 'cause I think it helps you understand what the project is testing and some of the pieces of it.

The second thing is the coverage report. If you'd like to, you can open the coverage report in a new tab. It's that second red link. Yeah. So, this example is using, like, Jasmine for unit testing with Karma as a test runner. And on the screen, we've got a unit test coverage report, and the main thing to take away here is that it's beautiful. It is 100%—

<i class="timecode">[00:13:37]</i> **Ben:** Yeah.

<i class="timecode">[00:13:37]</i> **Adrianne:** —all across, yeah!

<i class="timecode">[00:13:38]</i> **Ben:** Yeah, like, there's nothing more for me to do here, Adrianne. Like we could go ahead and sign off for the day(!)

<i class="brackets">[Adrianne laughs]</i>

<i class="timecode">[00:13:43]</i> **Adrianne:** Yeah! And it's so tempting to draw that conclusion! Your tech lead would be happy. If you have a product owner…

You would have confidence if you were releasing to, like, production. But that is the value of running this tool over your codebase to check your work.

So if you flip back to the example page, that third link is a hyperlink to the mutation testing coverage report, and it's not gonna look like this one. 

<i class="timecode">[00:14:13]</i> **Ben:** Oh, no. Oh, no, I'm worried. Alright.

Okay, so all files… mutation score. Okay, so all of these seem to have been ranked. You were talking earlier, like, a score of 100, and it literally is that. So it looks like routes.js… that's where I wanna start, because the fact that this is empty is concerning to me. Does that mean there are no tests?

<i class="timecode">[00:14:44]</i> **Adrianne:** That can be what that means. If it is empty… yeah, that probably. And so that's an important thing to call out. If you have things that you're choosing intentionally to not test, you're able to tell it to ignore those and not include it when it's calculating the mutation score.

<i class="timecode">[00:15:02]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:15:03]</i> **Adrianne:** Yeah!

<i class="timecode">[00:15:03]</i> **Ben:** Okay.

<i class="timecode">[00:15:03]</i> **Adrianne:** And there could be a strategy there, like it could be something you have an external dependency on or something you don't own. There could be a reason that you or your team don't want to test something.

<i class="timecode">[00:15:15]</i> **Ben:** Gotcha, gotcha.

Yeah!

So it looks like, you know, our app.module.js, like, this is great, very thoroughly tested, right? Everything else is weak, right? Not well tested at all, it seems.

<i class="timecode">[00:15:27]</i> **Adrianne:** Well, it's subjective so, like, let's give them credit! It's not zero, right?

<i class="timecode">[00:15:32]</i> **Ben:** Okay!

<i class="timecode">[00:15:33]</i> **Adrianne:** Like, an attempt was made. Some tests exist.

<i class="timecode">[00:15:36]</i> **Ben:** So… okay. So actually this is a great question, then. Like, on a subjective mindset, you know, like, most teams that I've spoken to don't seem to know that mutation testing's a thing, right? And I can imagine if you pulled up a dashboard that said, "Hey, your tests, like, have a score of, like, 25%." Like, "your tests are a quarter good," right? That can be really daunting. Do you have kind of recommended thresholds? Or how are you gonna tackle? 

<i class="timecode">[00:16:03]</i> **Adrianne:** Ohhhh, yes. Okay, so that's the thing, is I don't want you or your team to feel demoralized if you use this tool and the coverage is really low. This example is 59%, about, but it could be much lower. The reason that you're not gonna be demoralized is because this is just your starting place. This can be your baseline. So you can configure whatever that is. So in this example, it'd be like 59%. That could be your threshold that you make the standard so that all incoming code, you don't let the score fall below that. And then what you can do… if you're, like, on an Agile team, you can write stories in your backlog. But if you're just working alone, this is a form of tech debt. You could actually plan to take chunks of your project and you can raise the coverage a few files or a few folders at a time.

And yeah, so that's a great callout! Like, it's not an all-or-nothing thing. Another thing to call out is it just depends on your use case. Your team may not need a 100% coverage. Your team MAY be happy with that 59%, because… this is, like, the bird's-eye view, but when we start clicking around and we open these files and we see what mutations it was doing…

Software testing is an art.

<i class="brackets">[Adrianne laughs]

There is some subjectiveness to it! And your team or you can decide, okay, these are mutators we care about and which ones are negligible. If it's testing things that don't matter for your business logic, then you can ignore it! You can say that that's fine, but you're still getting feedback on your codebase. It's finding it so you have the CHOICE to ignore it instead of it not being found, [laughs]</i> where you would never know about it, so you wouldn't even be able to choose to ignore. 

<i class="timecode">[00:18:08]</i> **Ben:** Gotcha. That makes sense, okay. So then the next question I have is gonna be around, like, all of these, like, number killed, survived, timeout, stuff like that, this mutation score. Maybe while we're here, let's just talk about, like… what is a mutation? What's actually happening? Like, how is this score being generated? 

<i class="timecode">[00:18:28]</i> **Adrianne:** Mmm. So you take an existing codebase that has some existing units tests, okay? And for each file of your source code, Stryker is running through with a set of rules. Those are your mutators or your operators, okay? And so if your team is very advanced, you can write your own, but most commonly, you wanna use what you get for free with that tool. So, I think the Stryker mutator… I've got a link to it. Okay. So, but then what it does is, like, line by line, if a condition is met, it will modify your code.

<i class="timecode">[00:19:10]</i> **Ben:** Oh, okay.

<i class="timecode">[00:19:11]</i> **Adrianne:** Yeah. Okay.

<i class="timecode">[00:19:12]</i> **Ben:** So… and that has the effect of just, like, basically introducing bugs, right, more or less?

<i class="timecode">[00:19:19]</i> **Adrianne:** Exactly, yeah.

<i class="timecode">[00:19:20]</i> **Ben:** Okay.

<i class="timecode">[00:19:20]</i> **Adrianne:** Bugs or faults. Or those are mutants, okay.

<i class="timecode">[00:19:24]</i> **Ben:** Gotcha.

<i class="timecode">[00:19:26]</i> **Adrianne:** So, one example could be, like, an arithmetic operator where you have some arithmetic signs, things like equals and plus signs and things like that. And what it does is it literally replaces those symbols in your code with the other available symbols, and what it's looking for is — it's created a mutant — is the mutant killed or does the mutant survive? And so what we mean by this language…

If your code has been mutated, you want a unit test to catch that. So if it catches it, they consider the mutant killed. But if the mutant survives, that means that your unit tests didn't fail when you modified the code.

<i class="timecode">[00:20:13]</i> **Ben:** Gotcha. So, in the example—

<i class="timecode">[00:20:15]</i> **Adrianne:** That's the bad outcome, yeah.

<i class="timecode">[00:20:15]</i> **Ben:** In the example of, like, you know, arithmetic, right? Like, I can imagine you've got a UI that, like, totals up some sum, right? And, you know, presumably you would have a test that says, hey, given value A and value B, I expect that the total should be A plus B.

<i class="timecode">[00:20:34]</i> **Adrianne:** Mm-hmm.

<i class="timecode">[00:20:35]</i> **Ben:** And so if Stryker goes in and changes the UI logic to actually be A minus B, a test should fail, right? Because you should have written a test—

<i class="timecode">[00:20:44]</i> **Adrianne:** Right.

<i class="timecode">[00:20:44]</i> **Ben:** —around that logic, and if your test didn't fail, it's perhaps not testing something critical there.

<i class="timecode">[00:20:50]</i> **Adrianne:** Yeah.

<i class="timecode">[00:20:50]</i> **Ben:** Right? And so it's saying, hey, your tests aren't failing in response to this, and so therefore—

<i class="timecode">[00:20:55]</i> **Adrianne:** Yeah!

<i class="timecode">[00:20:55]</i> **Ben:** —you probably need to add some tests around this logic? 

<i class="timecode">[00:20:59]</i> **Adrianne:** Exactly. So, on your screen, this is… again, this is the report that Stryker generates for you, and you can see a version of the report in your terminal, but this is the really pleasant, like, UI version where you open it in a browser, okay. And so do you see the second file called review-order-component.js?

<i class="timecode">[00:21:22]</i> **Ben:** Yeah!

<i class="timecode">[00:21:23]</i> **Adrianne:** Yeah, so that blue name of the file is a hyperlink! You can new-tab or just click on it.

The reason I chose this file is because this contains a really good example of a piece of the business logic where you would care. So remember, this example is robots are serving drinks and some of the drinks are alcoholic. We care about compliance, right? We care about the age of our user. So if your codebase is checking for age, that's an example of something that you really, really don't wanna get wrong.

<i class="brackets">[Adrianne laughs]</i>

<i class="timecode">[00:21:58]</i> **Ben:** Sure!

<i class="timecode">[00:21:59]</i> **Adrianne:** So it has an arithmetic operator in here. I think it's like…

<i class="timecode">[00:22:04]</i> **Ben:** It's this one?

<i class="timecode">[00:22:05]</i> **Adrianne:** It's on line… I think so. So, do you see at the end of the line, there's a red dot?

<i class="timecode">[00:22:12]</i> **Ben:** Yeah…

<i class="timecode">[00:22:12]</i> **Adrianne:** When we click on this, we get… it should open something at the bottom. Okay. Do you see that down there?

<i class="timecode">[00:22:19]</i> **Ben:** Yeah.

<i class="timecode">[00:22:19]</i> **Adrianne:** So that one is an ArrowFunction survived. I think if you go up a line, on line 8, there's two. It made two mutants on that line, okay. So one is ArrowFunction.

<i class="timecode">[00:22:32]</i> **Ben:** There's a…

<i class="timecode">[00:22:33]</i> **Adrianne:** Okay, yeah, yep, okay. So this is an example of, like, a place where you would really care.

<i class="brackets">[Adrianne laughs]</i>

<i class="timecode">[00:22:42]</i> **Ben:** Sure.

<i class="timecode">[00:22:43]</i> **Adrianne:** Yeah! And so when you get… when you're running this tool on your codebase and you have these reports, like, this is very specific. You know exactly what line the mutant was created and the documentation tells you what is going on. So now as a developer, you are being coached on what unit tests to either go back and write or to, like, append or modify.

<i class="timecode">[00:23:09]</i> **Ben:** Makes sense! 

<i class="timecode">[00:23:09]</i> **Adrianne:** Does that make sense? Yeah.

<i class="timecode">[00:23:11]</i> **Ben:** Gotcha. Iiiinteresting! Alright, wow. I had no idea it was gonna give this level of detail. Yeah.

<i class="timecode">[00:23:19]</i> **Adrianne:** Mm-hmm. Yeah!

<i class="timecode">[00:23:22]</i> **Ben:** Wow.

<i class="timecode">[00:23:23]</i> **Adrianne:** And in your terminal, like, it's not this level of detail, but it still tells you the file and the line.

<i class="timecode">[00:23:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:23:30]</i> **Adrianne:** So you can just use your IDE to navigate to the specific mutant. And there's that popular expression, "eat the elephant one bite at a time."

<i class="brackets">[Adrianne laughs]</i>

So with Stryker or with any mutation testing tool, kill your mutants one at a time. Start at the beginning and go one by one and you'll get through it. And you will learn a lot — a lot more about your codebase, what it's doing, but also, you'll be stronger at testing. So it's an amazing tool not just for code quality, but it will upskill you as a developer. 

<i class="timecode">[00:24:04]</i> **Ben:** Makes sense. Also, I love Mayank in the chat: "mutant elephants!"

<i class="brackets">[Adrianne laughs]</i>

Great. So, okay, so, yeah, you've generated a report like this, right? And you're gonna start tackling this one at a time. So maybe we even just kind of go in and write some tests to, like, fix this, kinda show off that workflow. What do you think?

<i class="timecode">[00:24:25]</i> **Adrianne:** I think we should.

<i class="timecode">[00:24:26]</i> **Ben:** Okay.

<i class="timecode">[00:24:27]</i> **Adrianne:** So, yeah, the name of this file was review-order-component. And I mentioned that this example is using, like, Jasmine as a testing tool. So we wanna find the matching test file—

<i class="timecode">[00:24:41]</i> **Ben:** Okay.

<i class="timecode">[00:24:42]</i> **Adrianne:** —for this, yeah. 

<i class="timecode">[00:24:43]</i> **Ben:** That'll be in here. test, unit, review-order-component, review-order-component.spec.js. And yeah, we're gonna look for one that matches up. I guess there wouldn't necessarily be one that matches up, right? It's saying that, like, the test survived.

<i class="timecode">[00:25:01]</i> **Adrianne:** Yeah!

<i class="timecode">[00:25:01]</i> **Ben:** So we would need to add a test for this arithmetic, right? 

<i class="timecode">[00:25:05]</i> **Adrianne:** Yeah. Often, you're missing a unit test completely, but always take a moment to check if you partially tested it.

<i class="timecode">[00:25:13]</i> **Ben:** Okay.

<i class="timecode">[00:25:13]</i> **Adrianne:** Does that make sense? Okay.

<i class="timecode">[00:25:15]</i> **Ben:** Oh, and we've actually got a comment from American2050, who says, "Line 30 is the code itself or the test. It should be 18 or greater, right? Not just greater than." Yeah, that is a comment about down… here. Right, so probably, if I had to guess…

Oh yeah, see, that's what it's done right here, right, is like… what the mutant did was check, like, "Hey, what if I did greater than or equal to?" And yet our tests did not catch that change. And here, actually, probably, like, this mutation is actually the right thing to do, right? Like, knowing what I know about legal drinking age laws, right? This should be greater than or equal to. Yeah. 

<i class="timecode">[00:26:04]</i> **Adrianne:** Mm-hmm. And that's another thing to call out. Sometimes your unit tests are good and the problem is actually in your source code itself. So like I keep mentioning, this is auditing the logic of your code. So sometimes the change is needed just on the test side, sometimes just the source side, and sometimes it's needed on both. Yep. 

<i class="timecode">[00:26:27]</i> **Ben:** Okay, gotcha. So, okay, here we go. So, we… I saw there was somewhere… here we go. "Should allow if the user is 24," "should not allow if the user is 12," but what it's not checking is if the user is 18, so… 

<i class="timecode">[00:26:48]</i> **Adrianne:** So, yeah, if you want to, we can duplicate this test. We can rename it and give it a good title for the logic we're about to check, and then we'll change the setup of the test where we exercise it in our actual assertion. Yeah. 

<i class="timecode">[00:27:04]</i> **Ben:** Yeah. Okay, so we're gonna say from here on out, if you're 18, yes, you can get alcohol. Good, that's how it works. At least in my corner of the globe. And then here, we're gonna find the line of code that was being complained about. We're just gonna fix that. So in this case, it caught an actual issue with our business logic that, you know, presumably our team reviewer, my developer teammate, did not catch when they committed this code, you know?

Alright. Cool. What other…?

So, how would you go about fixing, then, some of these up here? What would you… what would you do for these?

<i class="timecode">[00:27:52]</i> **Adrianne:** Well, so, we have options as a developer. We can try to fix multiple of them and then check our work, or we could keep a shorter feedback loop and we could, because we just added one test, we could run it now, actually—

<i class="timecode">[00:28:08]</i> **Ben:** Okay!

<i class="timecode">[00:28:08]</i> **Adrianne:** —and see if we moved the needle. Do you wanna do that just to get confidence that…? Yeah!

<i class="timecode">[00:28:14]</i> **Ben:** So, let me… we did test that this script would work ahead of time. So, you know, kind of peeling back the curtain a bit. But in the package.json, this project had a "stryker" script that we can run, so that's what we're gonna go ahead and do, "npm run stryker."

And this is gonna take a minute!

<i class="timecode">[00:28:40]</i> **Adrianne:** Right.

<i class="timecode">[00:28:40]</i> **Ben:** It does, as we found out ahead of time, take some time because it's gonna be running a lot of tests, right? And it's gonna be running a lot of different mutants, a lot of mutations, so… yeah. 

<i class="timecode">[00:28:52]</i> **Adrianne:** Yeah! So, this is cool, 'cause this is a teachable moment and we can use this time. And I actually see a question in the chat from BuildingBedrockLayout about Vitest <i class="brackets">[V-I-test]. Just checking, you don't mean pitest. You mean Vitest [V-I-test]</i>, correct? 

<i class="timecode">[00:29:10]</i> **Ben:** Uh, this is… so, this is a test runner called Vitest <i class="brackets">[vee-test]</i>, which is—

<i class="timecode">[00:29:13]</i> **Adrianne:** Okay.

<i class="timecode">[00:29:14]</i> **Ben:** —meant to be plugged into the Vite build tool. 

<i class="timecode">[00:29:18]</i> **Adrianne:** Okay, awesome. So, what I'm dropping in the chat is the roadmap for Stryker. I didn't see Vitest <i class="brackets">[V-I-test] on there, but yeah, that's where you can check.

[Adrianne chuckles]

And if it's something that there's a demand for, they definitely prioritize based on what the community wants most, okay. So even now, like, this is an example.

Okay, so I have a lot to say about what's happening right now with, like, it being a little bit slow. We're actually so privileged and lucky to be in the great year that we are now, because mutation testing has been around a very long time — since, like, the 1970s — and it was very unpopular because it was so computationally expensive. And as our technology has, like, caught up, it has become more realistic [laughs]</i> to use this more widely, okay.

<i class="timecode">[00:30:19]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:30:20]</i> **Adrianne:** But sometimes, it's still slow. And that's… there's many factors that go into it. It can be the size of your codebase, it can be specific to your machine or workstation, and there can be optimizations going on with the tool itself. Okay.

So, in 2019, my team was running into a CI/CD problem where Stryker was really slow in our pipeline. So that's continuous integration and continuous delivery. And at the time, Stryker didn't solve this for us. So, we have like a workaround. We actually wrote, like, a little Bash script that we put in our YAML, like, for our CI/CD pipeline that said, "Pay attention to what files are being modified and just run Stryker on the changed files." And that saved us a lot of time, and that was what we used for a long time.

But I'm excited to tell y'all, like our stream, Stryker just came out with version 6.2.0, which has an amazing feature that solves that for us. It speeds it up. It's actually called… iteration — or, sorry, incremental mode. And that, fun fact, was the most upvoted issue that Stryker ever had. So, I'm dropping the link. Yeah.

And we don't have that turned on because our demo is doing, like, 5-point-something-something. We're not on the latest available version. But this is, like… this is one huge way that you can speed up the runtime for a mutation testing tool. Okay. 

<i class="timecode">[00:32:07]</i> **Ben:** Now, that's probably gonna be, from what I know of, like, other tools that have their own incremental build stuff, like… that's for, like, local running, right? Like, as you're, like, running your project and making changes real time, like, it'll rerun the test. I don't think, based on what I know—

<i class="timecode">[00:32:24]</i> **Adrianne:** It can be—

<i class="timecode">[00:32:24]</i> **Ben:** CI/CD, I don't… I think it probably would need a, like, cold start from the beginning, right? 

<i class="timecode">[00:32:31]</i> **Adrianne:** So, it can be for both. It can be for local and for CI. And so, the thing that I linked on Stryker's blog, this does handle it in the CI case.

<i class="timecode">[00:32:43]</i> **Ben:** Okay.

<i class="timecode">[00:32:43]</i> **Adrianne:** So that's, like, a huge victory for all Stryker users.

<i class="brackets">[Adrianne laughs]</i>

Yeah.

<i class="timecode">[00:32:47]</i> **Ben:** Gotcha. And… good timing! So let's see if we can find our issue here. So, we need…

And we won't, right? Like, 'cause we just fixed this. Okay, so this… this looks like we're…

Oh, no, that's success-component. I really hope it hasn't, like, fallen off the window. That would be… 

Where are we looking, if we're looking for this? Should be… oh, review-order-component. Okay.

<i class="timecode">[00:33:19]</i> **Adrianne:** Yeah.

<i class="timecode">[00:33:19]</i> **Ben:** And here we go. So, the issue we knew was line 30, but here, you know, line 26 had an issue, line 37 had an issue. Nothing comes up for line 30. So we have fixed that one specific issue that Stryker flagged for us.

<i class="timecode">[00:33:35]</i> **Adrianne:** And I think that we did. Another way to check it is keeping track of what the overall number was.

<i class="timecode">[00:33:43]</i> **Ben:** Okay.

<i class="timecode">[00:33:43]</i> **Adrianne:** So, do you actually remember how many we had that survived on the file originally? 

<i class="timecode">[00:33:49]</i> **Ben:** It looked like 9 survived on the file originally, based on this HTML report.

<i class="timecode">[00:33:53]</i> **Adrianne:** Yeah.

<i class="timecode">[00:33:54]</i> **Ben:** So then if I go down…

<i class="timecode">[00:33:55]</i> **Adrianne:** Okay, and our… we are hoping to see 8. So we wanna see if we get 8. 

<i class="timecode">[00:34:00]</i> **Ben:** Okay. And we're looking. It says 9 survived. 

<i class="timecode">[00:34:05]</i> **Adrianne:** Okay! So then I don't think our work is done yet. So, did we…? Like, so now we debug it.

<i class="brackets">[Adrianne laughs]</i>

<i class="timecode">[00:34:16]</i> **Ben:** Yeah!

<i class="timecode">[00:34:16]</i> **Adrianne:** So, we expected to see one mutant killed because we added a test, but we still have 9. Is that…? Oh, okay, so you kind of moved your cursor. Did we see something about line 30? 

<i class="timecode">[00:34:32]</i> **Ben:** I didn't think so. Here we go. Oh! Oh, it says… hang on. It says 16, and then here are our tests that ran, and we did have "should allow if user is 18." Wonder if the… okay.

Oh!!! Okay, I see. So, the method we changed was being called elsewhere in the file, and so I think we killed one mutant, but it introduced a new mutant elsewhere, where it's like, "Hey, this logic isn't necessarily tested."

<i class="timecode">[00:35:07]</i> **Adrianne:** Mmmm!

<i class="timecode">[00:35:09]</i> **Ben:** Interesting. 

<i class="timecode">[00:35:10]</i> **Adrianne:** Well, thank you, Stryker, keeping us honest! And that happens all this time in development. Like, you find something and you solve it and you feel really confident, but it's nice to have this guardrail. 'Cause honestly, Ben, if we weren't using this tool right now, I don't think I would've caught that. I think I would've just been like, "Oh yeah, we handled it." Yeah.

<i class="timecode">[00:35:29]</i> **Ben:** Mm-hmm. Yeah, absolutely. Alright, yeah! Brutal.

<i class="timecode">[00:35:34]</i> **Adrianne:** So, yeah! So, now that that mutant is surviving, let's try to target that specific one, yeah. 

<i class="timecode">[00:35:41]</i> **Ben:** Okay. Ooh, god, my editor is suddenly not happy with me.

<i class="brackets">[Adrianne chuckles]</i>

Okay, so… the issue now was with this line, line 16. So if not this.ageCheck or if this.isAllowedToBuyAlcohol() with this age. So I wanna see kind of what tests we've already got there, but this is testing the submit() method. Okay. Which… here we go. Okay.

Oh!! Wait a second! This was in the submit() method. We never…

Interesting. That's where we added our test. Interesting.

<i class="timecode">[00:36:38]</i> **Adrianne:** Well… so, let's, like… let's think aloud. So, at this time, did we make any change to the source code, or did we… have we just changed our tests so far? 

<i class="timecode">[00:36:46]</i> **Ben:** We did change the source code. Yeah, because I set this to be greater than or equal to. 

<i class="timecode">[00:36:55]</i> **Adrianne:** Okay. And when we do that… and maybe we do this in a second, you want to make sure that your unit tests are still passing, as well as, like—

<i class="timecode">[00:37:09]</i> **Ben:** Yeah.

<i class="timecode">[00:37:10]</i> **Adrianne:** —your mutation, yeah. 

<i class="timecode">[00:37:11]</i> **Ben:** Okay, so let's try that. I forgot to check the package.json, but it's gonna be "npm run test," right?

<i class="timecode">[00:37:18]</i> **Adrianne:** It is, yes.

<i class="timecode">[00:37:20]</i> **Ben:** Cool.

Um… here we go. Yes. Let's see if we broke a test!

Also, I wanna shout out some more people who are in the chat right now. Nikola, hello, welcome back. Anthony's here as well. Welcome back to the stream.

Yeah, I find this incredibly interesting. Like, just… so, my journey learning, like, kind of test-driven development and that kind of stuff was, you know, when I was starting out, I heard that, like, unit testing was important and stuff like that. But I learned React by way of a video course, and that video course TECHNICALLY had a segment about unit testing, but the unit test did not usually get very much… like, did not get further than "expect component to exist." And so it wasn't a, like, particularly quality test. And so I was never quite sure… like, I never felt like I'd built a rigorous process around generating unit tests. And this actually feels like, you know, it gives you that feedback, that cycle there.

<i class="timecode">[00:38:36]</i> **Adrianne:** Mm-hmm.

<i class="timecode">[00:38:36]</i> **Ben:** Okay, so our test did pass. But, like, it gives you, like, a methodical approach to figure out where your tests need to go. 

<i class="timecode">[00:38:48]</i> **Adrianne:** Definitely. This will guide you if you're working alone as a developer. Like, it audits your logic and it guards you from getting the wrong abstraction and it gives you a very clear idea of, like, what to tackle next.

<i class="brackets">[Adrianne chuckles]</i>

<i class="timecode">[00:39:03]</i> **Ben:** Mm.

<i class="timecode">[00:39:04]</i> **Adrianne:** So that's beautiful if you're developing alone. It's also beautiful if you're trying to work with anybody else, whether it's just one more teammate or a whole team. It's very useful during, like, now! Like, we're pair programming. This helps us look at this in the same direction. 

<i class="timecode">[00:39:24]</i> **Ben:** Absolutely.

Um… yeah… okay. I still don't know, though, why… this would fail, then. Like… 

<i class="timecode">[00:39:37]</i> **Adrianne:** So…

<i class="timecode">[00:39:38]</i> **Ben:** Oh–

<i class="timecode">[00:39:39]</i> **Adrianne:** When… oh, go ahead.

<i class="timecode">[00:39:40]</i> **Ben:** No, go ahead, go ahead.

<i class="timecode">[00:39:42]</i> **Adrianne:** I was gonna say, we had nine mutants and we changed our tests and we thought that we'd have eight, but we still had nine. Did we check not just what line that's happening on, but what operator it is?

<i class="timecode">[00:39:57]</i> **Ben:** Oh!

<i class="timecode">[00:39:57]</i> **Adrianne:** Because it might not be an arithmetic operator anymore.

<i class="timecode">[00:40:01]</i> **Ben:** Okay, yeah, let's check it. So… you know, it should be somewhere up here. I'm increasingly worried that we're gonna have our history fall off of the buffer, but okay. So, alright, "<i class="brackets">[Survived]</i> BooleanLiteral." Oh!

<i class="timecode">[00:40:21]</i> **Adrianne:** Ohh!

<i class="timecode">[00:40:21]</i> **Ben:** Oh, so it's not checking the age at this point. It's checking… oh, oh, okay. Got it. There's an exclamation mark.

<i class="timecode">[00:40:30]</i> **Adrianne:** Yeah!

<i class="timecode">[00:40:30]</i> **Ben:** Oh, wow. Got it. So it removed our little exclamation mark "not" check. Oh, that's brutal. That is brutal! Okay. 

<i class="timecode">[00:40:40]</i> **Adrianne:** And yeah, so "BooleanLiteral" in Stryker means that if something is making an assertion about something will happen when something is true, then the mutant it creates is what happens if it's false or the other way around.

<i class="timecode">[00:40:54]</i> **Ben:** Okay.

<i class="timecode">[00:40:55]</i> **Adrianne:** So, dropping the docs for that in the chat, okay. 

<i class="timecode">[00:40:59]</i> **Ben:** Gotcha. "Tests ran: PlaceOrderComponent submit should allow if ageCheck is disabled." Like, we had a test for this. So is that test bad? It just not a…? Okay? Let's see.

ageCheck is false… 

<i class="timecode">[00:41:26]</i> **Adrianne:** So… so, I think that what it's doing is it's checking if the ageCheck is true and…

Oh, did you just change that?

<i class="timecode">[00:41:35]</i> **Ben:** No.

<i class="timecode">[00:41:35]</i> **Adrianne:** Oh, no, you scrolled up. You scrolled up, okay. You're on line 44, okay. But it looks like we have that case handled on line 50.

<i class="timecode">[00:41:50]</i> **Ben:** Yeah, so if it's supposed to check for the age, then it has all of our checks for, like, you know, if you're of legal drinking age, if you're above legal drinking age, or if you're under legal drinking age, and each of these has the age check.

Wait. Yeah, okay, hang on. Oh, but it is just checking that a path has been called. What is the location path? What is that? That is… 

<i class="timecode">[00:42:28]</i> **Adrianne:** That is a good question to ask. So I'm not sure what that is in this file, <i class="brackets">[chuckles]</i> so we should hunt that down. 

<i class="timecode">[00:42:36]</i> **Ben:** Okay. I'm not terribly familiar with, like, Jasmine and Karma, so this is not… like, this kind of thing is not a kind of test I've seen.

<i class="timecode">[00:42:44]</i> **Adrianne:** I think that is very valid. I'm almost wondering if we just… if we need to add, like, an additional assertion.

<i class="timecode">[00:42:54]</i> **Ben:** Okay.

<i class="timecode">[00:42:55]</i> **Adrianne:** Because, like, look. So, if we compare these two tests. 

<i class="timecode">[00:43:01]</i> **Ben:** Yeah, I gotcha. Go back to those tests, okay.

<i class="timecode">[00:43:09]</i> **Adrianne:** Okay, so it looks like one is like the ageCheck if it's true. One is the ageCheck if it is true and they have different ages. And what they're both asserting is just that thing is called. And when we, when we say that out loud, is that actually what we expect to happen? 

<i class="timecode">[00:43:32]</i> **Ben:** Yeah, no, I would expect something to actually, like, pass or, at very least, like, these two assertions should be different in some way, right? Like, one thing should happen if ageCheck is enabled…

Oh, actually, no, this is what we want, right? 

<i class="timecode">[00:43:46]</i> **Adrianne:** Yeah, so… yeah. 18-year-olds and 24-year-olds would both have passing age checks. They both would be true. So if you scroll down to line 63, like, here's the test case for somebody who's a minor, okay. So, okay, and that one does have a different assertion. That is expecting, like, the error message should be displayed. Okay. So… I'm feeling like these tests are correct and we gotta look at the mutant again and figure out what's going on. Oh, also I'm gonna read this stream chat. Somebody might have said something.

<i class="timecode">[00:44:26]</i> **Ben:** Oh!! Okay, got it. So…

<i class="timecode">[00:44:29]</i> **Adrianne:** Hm.

<i class="timecode">[00:44:31]</i> **Ben:** Yeah. Yeah, it… okay. So, it's checking… what our business logic, what our UI logic says is if we're not worried about the age at all, or — and that would imply that we are worried about the age — if this age is legal drinking age, then go ahead and execute some logic. The mutant decided if we are worried about the age at all…

Yeah, or drinking age. But I just don't know how to fix that in the test. 

<i class="timecode">[00:45:24]</i> **Adrianne:** So… it might be a change we make in the source code. So maybe instead of the syntax for OR — like the pipe-pipe or bar-bar <i class="brackets">[chuckles]</i> — we can do the two ampersands. We can do AND. But like, let's speak out loud.

<i class="timecode">[00:45:42]</i> **Ben:** That doesn't…

<i class="timecode">[00:45:42]</i> **Adrianne:** Is that…?

<i class="timecode">[00:45:43]</i> **Ben:** …sound right to me?

<i class="timecode">[00:45:46]</i> **Adrianne:** 'Cause what it… 

Well, let's look at the source code. 

<i class="timecode">[00:45:49]</i> **Ben:** Yeah, we are. So, here it is. Okay, well, I guess we could break this out, right? So we could say, you know, "const…"

Oh, let's see. Always… always gotta figure out the…

Okay, if — here we go. We'll say "const checkForAge =…"

Oh wait, no. Here, "const ignoreAge." There we go. Is… and we can go very explicit here. this.ageCheck is explicitly — ooh — is explicitly false. Or const checkCanBuyAlcohol, which would be if this.ageCheck — and we're gonna get very, very explicit here again — is true and this.isAllowedToBuyAlcohol(). I just don't know why this is better, you know? But here we could say, then, ignoreAge OR…

This should be, actually, canBuyAlcohol. Yeah, like, this feels… this is equivalent. I don't know that I've made anything better here.

<i class="timecode">[00:47:23]</i> **Adrianne:** Hmm.

<i class="timecode">[00:47:24]</i> **Ben:** If ignoreAge or canBuyAlcohol…

The only thing that is different here is that this condition now explicitly checks for ageCheck.

…Right? 

<i class="timecode">[00:47:41]</i> **Adrianne:** So… yeah. So I'm wondering now if we'll get a different result when we rerun Stryker. 

<i class="timecode">[00:47:50]</i> **Ben:** Sure.

<i class="timecode">[00:47:50]</i> **Adrianne:** Yeah.

<i class="timecode">[00:47:51]</i> **Ben:** Let's try it, okay. This is gonna take us a bit.

<i class="timecode">[00:47:56]</i> **Adrianne:** Yeah! And so, one of two things will happen. We're either about to kill that mutant or it'll still exist.

<i class="brackets">[Adrianne chuckles]</i>

If it has been killed and that's what the Stryker tool was guiding us to do, what that is an example of is many, many tools in software development are opinionated. They kind of push you towards, like, a certain behavior or a certain type of coding. It would be like if you ran, like, some static testing tools or, like, a linter over your code and it…

<i class="timecode">[00:48:29]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:48:29]</i> **Adrianne:** …it now says, "No, no, that's not subjective. Your code must have this syntax or be this way." And so then your team can decide if you agree or not! Your team could go in and turn off a specific operator that y'all don't agree with, or you could even add operators to enforce coding standards that your team has. 

<i class="timecode">[00:48:51]</i> **Ben:** Okay.

<i class="timecode">[00:48:52]</i> **Adrianne:** But yeah! It's something to be aware of. You can trust the tool and use it and take it at face value, but the real strength and usefulness of the tool is getting to know it a little bit and getting to know, like, what's under the hood—

<i class="timecode">[00:49:06]</i> **Ben:** Yeah!

<i class="timecode">[00:49:07]</i> **Adrianne:** —and is it serving you and your trusting strategy? Yeah. 

<i class="timecode">[00:49:10]</i> **Ben:** Gotcha. And we do have some feedback, though. Like, the new code is easier to read, and I do hear you on that. Definitely, definitely does.

<i class="timecode">[00:49:16]</i> **Adrianne:** Yeah!

<i class="timecode">[00:49:17]</i> **Ben:** Okay! So, obviously, we're gonna let that… we're gonna let Stryker finish what it's doing.

<i class="timecode">[00:49:23]</i> **Adrianne:** Okay.

<i class="timecode">[00:49:23]</i> **Ben:** But in the meantime… so, when it comes to linter tools, there's very often a way to, like, ignore the next line or something like that. Is there a way where I can basically tell Stryker, like, "Hey, just don't worry about this line. I know it's messy. Like, I know best or whatever and, like, just don't create any mutants here"? 

<i class="timecode">[00:49:43]</i> **Adrianne:** I usually see Stryker configured to either ignore a specific file or a specific directory or folder.

<i class="timecode">[00:49:51]</i> **Ben:** Okay.

<i class="timecode">[00:49:52]</i> **Adrianne:** If you're just trying to ignore a specific line, I haven't played with the latest — and I mentioned, like, 6.2, like, just came out, so this might have changed — but to my knowledge, you don't have a way to just ignore a certain line.

<i class="timecode">[00:50:06]</i> **Ben:** Okay.

<i class="timecode">[00:50:07]</i> **Adrianne:** But what my team would do when we had that a few years ago is we would say, like, it's okay to have X percentage for, like, that certain folder. So, we would know, like, okay, that one's not going to be at 100 because there's a mutant there that we've assessed and we're cool with it. 

<i class="timecode">[00:50:25]</i> **Ben:** Yeah, makes sense! And a lot of this comes down to, like, that team communication, right? Because yeah, again, you're not gonna magically have 100% perfect result here, you know? So, let's talk then about kind of those team processes, right? Because there's a lot of different ways that, like, at the human level, you can start to incorporate this into the workflow. Like, we start by like incorporating this into our CI, right? Like, that just becomes part of our scripts. But as a team, like, this only matters if you and I, as developers on a team together, hold ourselves to this, right?

<i class="timecode">[00:51:06]</i> **Adrianne:** Mm-hmm. Yep. 

<i class="timecode">[00:51:07]</i> **Ben:** What are some ways, at a team level, you've seen this incorporated into a process? 

<i class="timecode">[00:51:15]</i> **Adrianne:** So, that's the thing. If you're working as a team, your team will need buy-in. If your team already has trust <i class="brackets">[chuckles]</i> and, like, enjoys software testing, it'll probably be easier to get buy-in. 

<i class="timecode">[00:51:27]</i> **Ben:** Yeah.

<i class="timecode">[00:51:28]</i> **Adrianne:** If your team is really apprehensive about software testing in general… either they don't like it, or maybe, maybe they have a strong opinion. Maybe they're into, like, Kent C. Dodds's, like, Testing Trophy, where it's like, "Whoa, whoa, whoa. Less unit tests. Like, chill on that and, like, let's focus on end-to-end and, like, integration tests." You'll notice that this doesn't assess the quality of those, of end-to-end or integration tests. So this is a good tool if your team does use and does believe in unit testing. So that's one thing to call out, yeah. 

<i class="timecode">[00:52:06]</i> **Ben:** And it seems like you could do things, like you could say, hey, we're just gonna set this up, right?

<i class="timecode">[00:52:11]</i> **Adrianne:** Yeah!

<i class="timecode">[00:52:11]</i> **Ben:** And you know, the first time we run this, like, we've got 49% coverage in a file, right? And then we as a team commit, like, thou shalt never have a lower score, right? The score can only, like, stay the same or go up, seems like a process that the team could build in, right? 

<i class="timecode">[00:52:29]</i> **Adrianne:** Yes, okay! And yeah, I hope that y'all will take away today that this is a very low-commitment thing to just try out. Like, your team can run this tool over your codebase and then decide if you wanna go further with it. And even if you do, you could do it on a trial basis. Tactically, it's very easy to remove this tool, turn it off, or even just, like, drop your threshold so that, you know, you're not chasing 100. You can drop it to be low. I wrote about this on my mutation testing poster. We linked it earlier. I'm gonna drop it again. It's in the section called "The Developer Experience of Mutation Testing."

<i class="timecode">[00:53:11]</i> **Ben:** Okay.

<i class="timecode">[00:53:12]</i> **Adrianne:** Also, while you were talking, I kind of… I'm not sure because I haven't run into this too many times, but there is this thing in mutation testing. It's called an equivalent mutant and there is a slim chance that that is what we're fighting right now. I honestly need time to read through it, but I'm gonna drop the link for it. This is on the Stryker docs.

<i class="timecode">[00:53:32]</i> **Ben:** Okay.

<i class="timecode">[00:53:35]</i> **Adrianne:** If this is an equivalent mutant, then that might be why we're struggling to kill it.

<i class="brackets">[Adrianne laughs]</i>

Yeah. 

<i class="timecode">[00:53:42]</i> **Ben:** Okay, interesting.

<i class="timecode">[00:53:45]</i> **Adrianne:** Yeah.

<i class="timecode">[00:53:47]</i> **Ben:** Yeah, it's… I don't know. 'Cause it's stuff like here, where, like, what it's done here… and it's substituted our stuff for a conditional expression now, but it's saying like, "Hey, I took this.ageCheck equals true" and I've replaced it with true. Yeah. And it's like, at that point it's like, what do you even… what do you even do here, you know? You don't…

I don't really see a way to, like, improve the logic around that. I guess you could… I guess the, the assertion here is we need to do some better checks around when this.ageCheck is false. But okay.

<i class="timecode">[00:54:26]</i> **Adrianne:** Yeah!

<i class="timecode">[00:54:28]</i> **Ben:** I really like a question from Anthony, which is, "How do you make tests spark joy for developers who just can't get enthusiastic about them?" 

<i class="timecode">[00:54:37]</i> **Adrianne:** Mm-hmm. I think that humans and developers are driven by different things, so it helps if you understand what does spark joy, if they're mastery-driven, you can say, "Hey, this tool will coach you. Like, this is good for your self-efficacy. You're gonna get stronger at writing code and testing." If they're purpose-driven, you can argue this is production confidence. This is preventing defects and maybe even outages. Like, that's what's in it for you. And like, maybe they're driven by something else.

<i class="brackets">[Adrianne laughs]</i>

So you can build your business case around it, yeah. We all have different paths towards unit… or, sorry, software testing, yeah. 

<i class="timecode">[00:55:22]</i> **Ben:** Awesome.

And then Jim — good friend of the stream, Jim. I'm gonna actually shout him out. He wants to know what it's like working on a greenfield project with Stryker. So if you've got, you know, a brand new project that your team has just started and you do Stryker from the beginning, you know, like, how is that different? What does that feel like for you, and have you actually been in that position? 

<i class="timecode">[00:55:48]</i> **Adrianne:** I have been lucky to be in that position. So, thank you for the question, Jim. What that does is it allows you to have confidence along the way, and this is especially powerful if your team is combining this with other, like, strategies for software testing. So for example, test-driven development is a really great pair to have the mutation testing with it. Also, like, your testing should be, like, layered, right? It is useful to have, like, a holistic approach. But like, that can be very overwhelming if you are backfilling on a mature project, so what is awesome is, if your project is greenfield, you get to design at the beginning, you get to design, like, what that testing strategy is. What do you care about? Like, how many people are gonna use this thing? How many people are gonna, like, be coding this thing? And then you can decide what that sweet spot is so you're not undertesting but you're not overtesting.

<i class="timecode">[00:56:52]</i> **Ben:** Gotcha.

<i class="timecode">[00:56:52]</i> **Adrianne:** Yeah. But like, for example, if you have zero unit tests and you run it, you will be in a good place to start, and then as you keep your unit tests at a hundred — like, each file that's created, you add unit tests — you can also keep, in parallel, your mutation testing at the same percent. 

<i class="timecode">[00:57:15]</i> **Ben:** Gotcha! Yeah, Jim says this is a new team he's inheriting. Previously, it's just been end-to-end, so he's thinking to sell this in alongside unit testing. So that's… I think that's awesome. Yeah, it's like the earlier you do this, the earlier you build in the processes for surfacing, you know, how good are the tests that we're writing, the, like, faster turnaround you can get. 'Cause I've definitely… a team I was on at my last role, like, we were writing unit tests. We had some, like, end-to-end tests and stuff like that. But a lot of times, we would end up with, like, you know, wedges of the codebase that were old as time, you know, and just hadn't had a whole lot of, like, testing around it, right? Like, it's incredibly difficult to, like, get the momentum to, like, even start those tests. But like, yeah, building that in and surfacing even, like… what are the possible entry points for bugs, I think, is hugely, hugely powerful.

Cool. So what we've seen today is that mutation testing introduces possible code and logic changes into your application to see how many of your tests fail and see how many of them succeed, and then surfaces opportunities to either improve your tests or add new tests. Yeah! That's really cool!

Do you have any kind of parting thoughts on this before we sign off, Adrianne? 

<i class="timecode">[00:58:47]</i> **Adrianne:** I just wanna thank you <i class="brackets">[laughs]</i> for your time today. It was really great to get in front of y'all again and talk about this. I challenge y'all to give it a try. You don't have to add it to your pipeline. You can run this, like, locally and you can find out in an hour, maybe two hours if it's a large codebase. You can get a feel if this is something that's gonna work well with what you already have or not. So it's low risk. Give it a try.

And if you are a JavaScript developer or some of the other flavors we mentioned, I highly, highly recommend Stryker. The docs are great, and I think you'll have a great developer experience, yeah. 

<i class="timecode">[00:59:31]</i> **Ben:** Alright! Well, thank you so much. I'm gonna real quickly… we're gonna shout out a few things, but y'all, thank you for being here. If this is your first time with Some Antics, give us a follow. That way you can keep apprised of all the streams coming up. I've just sent a link to someantics.dev, which has a schedule on the homepage that you can look and see what all the streams coming up are.

I'm really, really excited about a lot of streams that we've got coming up. This Friday, Chance Strickland is joining us on the stream again. We're gonna be talking about accessibility as powered by the backend with tools like, you know, just general backend development, but also progressive enhancement. Next Tuesday, Maxi Ferreira is coming on. Maxi has been playing around with the new experimental page transitions API for getting seamless page transitions when you navigate across pages. So we're gonna be playing around with that. He's built a lovely demo and I'm so, so excited to learn. We've got Todd Libby coming on. We've got GrahamTheDev coming on. Just so many wonderful people coming on. So just so much, so much to love about the schedule coming up.

And you should also follow Some Antics on Twitter. I've just put a link to that in the chat. That way you can keep apprised of all the streams coming up as well.

And while you're following people on Twitter, go follow Adrianne. Let me put her Twitter in the chat again. Yeah, there we go.

Stick around, chat. We are going to find someone to raid. But in the meantime, thank you so much for being here, Adrianne. Again, thank you so much for your time. This has been super, super cool, and I hope you've enjoyed it as well.

<i class="timecode">[01:01:05]</i> **Adrianne:** Can we do one more thing before we hang up?

<i class="timecode">[01:01:10]</i> **Ben:** One more what?

<i class="timecode">[01:01:11]</i> **Adrianne:** Can we get some…

One more thing before we hang up? Can we get some Tunas in the chat?

<i class="timecode">[01:01:16]</i> **Ben:** Oh, we gotta have some Tunas in the chat, yes.

<i class="timecode">[01:01:18]</i> **Adrianne:** Tuna!

<i class="timecode">[01:01:19]</i> **Ben:** Yep. 

<i class="timecode">[01:01:21]</i> **Adrianne:** That's what today was missing. We always need more Tuna.

<i class="timecode">[01:01:24]</i> **Ben:** No, Tuna's over napping in another room.

<i class="brackets">[Adrianne laughs]</i>

<i class="timecode">[01:01:27]</i> **Adrianne:** Okay.

<i class="timecode">[01:01:29]</i> **Ben:** There we go. Y'all, thank you so much for being here. Stick around. We are gonna raid someone. But yeah, I will see y'all on Friday, I hope! Bye, y'all!