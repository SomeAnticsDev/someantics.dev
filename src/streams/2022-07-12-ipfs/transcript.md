<i class="timecode">[00:00:00]</i> **Ben:** Howdy, howdy, y'all! Happy Tuesday! Welcome to Some Antics, a stream about building great user experiences for the web with a focus on accessibility and core web technologies. I'm your host, Ben Myers. And today we are rejoined by the OG guest, Anthony Janthony Canthony Web Developer himself. Welcome back to the stream, Anthony.

<i class="timecode">[00:00:21]</i> **Anthony:** Alright. That's the first time I think I've heard you say "Anthony Janthony Canthony" out loud. Only seen you type it so far! 

<i class="timecode">[00:00:28]</i> **Ben:** I mean, what else could "AJC" stand for, honestly? 

<i class="timecode">[00:00:32]</i> **Anthony:** Nothing, absolutely nothing. It's the only thing. 

<i class="timecode">[00:00:35]</i> **Ben:** It's the only thing!

I call you the OG because you were the first ever Some Antics guest. You joined the stream and we talked a lot about, like, Redwood and accessibility and documentation and stuff like that. But you've been on a couple more times and every time, you've kind of pushed the envelope of what I would consider a Some Antics stream. Like, thanks to you, we've done streams on Vite and on Deno and stuff like that, things I wouldn't usually consider within the Some Antics purview.

<i class="timecode">[00:01:04]</i> **Anthony:** What's funny is, I remember when I was pitching those topics to you, I was like, "These things are probably going to be a big deal. Like, more so than they are right now." And I think, like, both Vite and Deno, that has, like, proven to be true.

<i class="timecode">[00:01:17]</i> **Ben:** Yes, absolutely! So, I've put a link to a couple of your past streams in the chat. I might have — oh, I did miss one, actually. Hang on. It was… accessible routing. There we go! So this is, I believe, number five for you. But yeah, so—

<i class="timecode">[00:01:35]</i> **Anthony:** Right.

<i class="timecode">[00:01:35]</i> **Ben:** Today, we are talking about something in which I will freely admit I'm very outside of my element here, which is the decentralized web, right? The distributed web. And specifically, InterPlanetary File System. So, I guess let's kind of talk about that. Like, what do those concepts mean to you and why should web developers find those interesting? 

<i class="timecode">[00:02:00]</i> **Anthony:** Yeah, I think first teasing apart the difference between what does it mean for something to be distributed versus decentralized is a good thing, because when I was first getting into this kind of stuff, I would, you know, read all these ideas and hear these words. And actually, I first got into this stuff before I really, like, knew how to code at all. Like, I've been very interested in kind of like, the quote–unquote "web3." Like, I actually wrote like a blogpost about web3 back in 2018, so. A lot of people don't really realize the term "web3" is not actually super new. It's been around for at least five years, if not longer.

But the idea is that we want to have systems that are kind of across multiple computers in multiple geographic regions. And that can be something that is distributed, because it's literally a bunch of computers talking to each other and they're distributed across the world. Now, for something to be decentralized, though, means that they're not all being connected to a single point of control. So you can have a distributed system that has kind of, like, a single central actor that is kind of keeping it all together and telling them all what to do and keeping the data stored somewhere and all that. Or you can have a system where there's a protocol that involves multiple computers talking to each other and there is no kind of central actor that's in control of the system. So that's to make something decentralized. 

<i class="timecode">[00:03:28]</i> **Ben:** So, an example of, like, the distributed system here, right, could be a content delivery network or CDN, right? Because those are, you know, they're global, right? They're distributed. You can get them from a bunch of different— like, you can get your resources, your assets from a bunch of different nodes on the CDN. However, the CDN is usually, I mean, owned and maintained and operated by a single corporation, right? And so, you know, they have the ultimate say as to what happens with your content, and they could just, like, remove it. So it's distributed, but we would not call it decentralized. 

<i class="timecode">[00:04:05]</i> **Anthony:** Exactly, yeah. And this is why you'll hear people constantly argue about this in the web3 space, about how decentralized is something, is it actually decentralized, and should you use a centralized service for web3, or does that kind of defeat the whole purpose. 'Cause I work for a company called QuickNode, and QuickNode is a blockchain infrastructure company. And for that, some people will be, like, "Well, why would you use a blockchain infrastructure company? The whole point is to have this, like, decentralized kind of system." And the answer to that is, like, well, do you know how to run a Linux server? Maybe, maybe not! And if you want to kind of interact with this technology, there's ways where you can leverage centralized services while still keeping the benefits of decentralization. Because most of these services, all they're really doing is they're just giving you access to this system in a way where if you wanted to move off of them and actually run your own server, you can do that, 'cause they're not doing anything necessarily proprietary. They're just making a really, really nice, simple onboarding experience into actually interacting with this stuff. 

<i class="timecode">[00:05:07]</i> **Ben:** Gotcha. Okay. And then I guess… so how does the InterPlanetary File System fit into all of this? 

<i class="timecode">[00:05:16]</i> **Anthony:** Yeah, and this is why I felt that this would be a good topic to pitch to you and, you know, we've talked about how I try to push you out of your bounds a little bit, because this isn't a cryptocurrency. It's not even a blockchain, really, what we're looking at here. It's something else entirely.

And I found that it actually can be kind of easy to describe to people depending on their experience. If you've ever used torrents in the past— what's your torrenting experience like, Ben? 

<i class="timecode">[00:05:43]</i> **Ben:** Limited, but nonzero. 

<i class="timecode">[00:05:46]</i> **Anthony:** Okay, cool. Yeah, great. So a torrent is a system where you have, say, a bunch of people have a movie on their computer that they wanna share with others, and the movie company does not want them to do that though. So if they were to put that movie on a centralized server somewhere, then the company that owns the rights to that movie can say, "Hey, I own this movie. You don't. You gotta shut this computer down." But if that movie is broken apart and distributed across ten different systems, they can't send cease-and-desist letters to all ten of those to have 'em all shut down, especially if one of those computers happens to be in Russia, say. So The Pirate Bay and torrents and things like that is an original peer-to-peer decentralized system that predates all of this stuff.

But what if we wanted to use that kind of tech for something… I don't wanna say, like, more useful, but something a little more practical, let's say. 

<i class="timecode">[00:06:40]</i> **Ben:** Something that doesn't necessarily skirt the bounds of the law.

<i class="timecode">[00:06:44]</i> **Anthony:** Yeah, exactly. And so there's a programmer, Juan Benet, who built IPFS, and there's now a company called Protocol Labs that's heavily based on Bell Labs that is kind of supporting the work behind this. And he wanted to create a distributed peer-to-peer system kind of like torrents, but instead of for movies for Git, so, like, a distributed version control system. And then that would allow people to have content now be also decentralized in a way where the content couldn't be taken down and the content could be easily accessible from multiple different places. So that's kind of the origin of, like, what is IPFS. 

<i class="timecode">[00:07:28]</i> **Ben:** Okay, so we're talking about, like… I guess the fusion here, right, is, like… GitHub meets… you know, BitTorrent, right? Like, you know, 'cause GitHub being a centralized place to store your Git repos, right? Like, that… it puts a pretty UI on it, but that's the real utility, is that, like, it's a centralized place to host your repos, right? But this is saying, like, no, we'll actually have, like, it spread out across all the different nodes on the network, all the computers that are participating. And yeah, so it's not like, you know, GitHub owns the code, right? GitHub is the sole arbiter of what happens to the code. 

<i class="timecode">[00:08:12]</i> **Anthony:** And this is kind of funny actually, 'cause GitHub is a centralized version of Git.

<i class="timecode">[00:08:18]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:08:18]</i> **Anthony:** But Git itself was already kind of like a decentralized, distributed kind of thing, because you would have multiple people with these Git repos on their computer, so if anyone ever was on their computer and they just like lost everything, there was probably five other people with that same Git history, and so they can get the repo again. Now, this is taking the idea to its logical extreme, which is not only do we distribute it across multiple computers, we distribute it across multiple computers that are actually connected to a computer network. That's the really big difference between, like— some people are like, "Well, Git was already decentralized." Well, I was like, "Well, yeah, it was decentralized across a bunch of computers that only individual people had access to. So what if you distributed it across a bunch of computers and then took those computers and hooked them up to DNS or hooked them up to some sort of protocol that would allow people to then view these through the internet?"

<i class="timecode">[00:09:08]</i> **Ben:** Gotcha. Okay! Cool. I'm sure I will have more questions as time goes on, but let me go ahead and start sharing my screen and let me actually go…

Where's my browser? There's my browser! Hello.

Alright! So y'all, today, we're talking with Anthony. Go follow Anthony on Twitter. Today we're talking IPFS! We've gone through— we went through ahead of time and installed IPFS, both for the command line and for, like, their GUI app that they've got. Anthony's put the links to those in the chat. And I'm also gonna send a link to, you've got a "first look at IPFS" article that was super helpful for, like— 

<i class="timecode">[00:09:55]</i> **Anthony:** Yeah, and I should mention, I think this was probably the longest time I've ever spent writing a blog article, was writing this one, because when I first started doing this, like, I had no idea what any of this stuff was or how any of this stuff works.

<i class="timecode">[00:10:07]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:10:07]</i> **Anthony:** And it was, like, really, really confusing to have to figure out. The docs are actually— they have good docs, and the whole system is, like, set up to be fairly ergonomicful in terms of, like, dev experience-type stuff. But just, like, the mental model of, like, what was even going on when I was doing it was, like, so, so weird. But it was… literally, it was the first time since I've gotten into web development where I felt like I was doing something genuinely new, like, genuinely like I was doing something I'd never done before, and it was, like, really, really mind-bending. And that took me, like, a long time to kind of put into a sequence that I felt like made sense and that, like, other people could kind of follow. And then it ended up being so, so long that I then, like, had a whole bunch of content for, like, a whole second article about it, so there'll be a kind of follow-up to this at some point where we get into the entire set of IPFS services that go along with this. 'Cause we're not gonna get into, like… we probably won't get into things like pinning services or, like, kind of hosting services for this, because we're just gonna show everything you can kind of do from your own computer. But yeah, like as you see, as you're kind of scrolling, we're eventually gonna get to, like, creating HTML files and stuff like that.

<i class="timecode">[00:11:13]</i> **Ben:** Yeah. So, one question I actually have before we get into this… I guess the question is, are there sites that you feel like you would not be able to deploy to IPFS? And similarly, are there sites that IPFS enables that you wouldn't be able to create without that architecture? Like, do our sites look any differently because they're on IPFS? 'Cause one thing I can imagine is, like, you know, probably managing your, like, environment secrets, your environment details, is something that's probably a bit of a different story, cuz you don't really wanna be sending your secrets out to a bunch of different computers. 

<i class="timecode">[00:12:02]</i> **Anthony:** Yeah, right, and there are ways to manage permissions and controls and API keys and all that kind of stuff, because even though it is a distributed network, you have a node that is a member of that network.

<i class="timecode">[00:12:17]</i> **Ben:** Okay.

<i class="timecode">[00:12:17]</i> **Anthony:** And you can choose to do with that node what you want. So that node can hide things from the rest of the network if you want, or that node can just expose things to the whole network if you want. So this isn't saying that everything needs to be public and that you're just, like, putting this all up to this giant network and you have, like, no control before you're putting onto that network. Like, that's not the case at all. But it's set up in a way where if you want to have things be available on all of the nodes so that, you know, it's like, kind of backed up and it's safe and all that, then you can do that.

In terms of the question of, like, what is this for, what is it not for… it is right now being aimed at being, literally as it says on the till— so I don't know if you said, IPFS stands for "InterPlanetary File System." So it's a filesystem. It's a place to put your files. That's really how you should think about it. And that can be music, movies, anything like that. For us, we're gonna be focusing on how do you put HTML files onto it, because once you have an HTML file onto it, then you can just think about it like it's a web server and you're exposing that to the internet. So anything that you can do in HTML, in CSS, and JavaScript, you'll be able to do in this.

I would say for today, right now, I would absolutely not put important, mission-critical applications that, like, customers will be using, because the network itself is still figuring out exactly how to be always reliable and up and stuff like that. So like, the network, it doesn't really go down, but what happens is you have these gateways that give you access to the network, and there's lots of different gateways that are being run by different companies. Like, even Cloudflare has a gateway. And there's various levels of quality and uptime that go along with all of these gateways. So, you know, this is something where I have always been interested in, like, kind of new, up-and-coming tech.

<i class="timecode">[00:14:13]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:14:14]</i> **Anthony:** And it's like, I'll play around with it. I'll show it to people. And like, as I've done this more and more, I've become, like, more and more conscious of, like, always, always saying, "This is, like, a newer thing. This is not something that you should, like, completely rely on like it's, like, super, super established tech." IPFS is five years beyond anything else I've ever talked about. So I'm talking about these things being, like, new and cutting-edge and not production-ready. This thing is the farthest from being production-ready of anything I've ever promoted, so, like, let me be very, very clear about that. This is cool, fun tech you should play around with and you should learn about, because it's gonna expand your mind and give you a taste of, like, what's to come, but this is not something you should really, really build a company on unless you feel comfortable becoming an expert on this.

<i class="timecode">[00:14:51]</i> **Ben:** Sure. Yeah.. Yeah, yeah, yeah. 'Cause, yeah, you'll be paying the cost of, you know, the APIs changing or the approaches, the protocols changing, and even just paying the cost of not yet having best practices. Right? Like, when you're the tip of the arrow, you're gonna — or "tip of the spear," I think is the saying, right? Like, you're gonna encounter all of the pain points, so you're not necessarily gonna overcome them the best possible way, 'cause no one knows how quite yet. 

<i class="timecode">[00:15:22]</i> **Anthony:** Yeah. But the one killer feature that I would say today, right now, if you're thinking about this and that is appropriate to use and what does make it different from anything else is the idea of permanence. 'Cause think about just the problem of link rot.

<i class="timecode">[00:15:37]</i> **Ben:** Yeah!

<i class="timecode">[00:15:37]</i> **Anthony:** Like, link rot is such a huge problem on the internet because people will put up these websites, and then maybe they'll change their URL or they'll, like, go to a different hosting service or even change their domain entirely, and then you have all these links that are out in the world that no longer work. But the content may still be there. It's just somewhere else. Or you may have something where there was some content that was really, really important that you wanted to save, but then someone changed it, and so the link is the same but the content's different! Like, all of that stuff makes it almost impossible to use the internet as a historical source, unless you're doing something like the Internet Archive where they're constantly taking snapshots and uploading them. So I would be very, very surprised if the Internet Archive does not at some point move to some kind of tech like this, 'cause I think it really makes a lot of sense in a lot of ways. 

<i class="timecode">[00:16:22]</i> **Ben:** But on the other token, that permanence seems like it could be something that's ripe for abuse because, you know, I could put, like, doxxing details out there, right?

<i class="timecode">[00:16:31]</i> **Anthony:** Mm-hmm.

<i class="timecode">[00:16:31]</i> **Ben:** And it's a lot harder to have that wiped, I guess.

<i class="timecode">[00:16:37]</i> **Anthony:** Yeah, and that's one of the biggest concerns with this tech for sure. And it's going to be, I think, up to the gateways to kind of manage that, because if something is on the network, if something's on IPFS but the internet gateway wants to block it, then they can do that, 'cause the gateways still have control over, like, the traffic that's going in and out and all that kind of stuff. So if you want to kind of like set this up in a way where it's a little more friendly to stuff like that, you're gonna wanna, like, kind of stick with things like Cloudflare and stuff like that, 'cause then you're still gonna be going through these more, like, centralized services. And this is a problem that… it's, like, the problem of freedom in, like, itself, you know? The problem of freedom means that, you know, people are free to do bad things sometimes, so that's a real concern and it's one that I need to kinda learn more about and how that's gonna be mitigated by systems like this.

I think for us, like, I just wanna show it to, like, web developers who are, like, interested in this kind of stuff, and I would say that if you're kind of worried about, like, having your content, like, doxxed and stuff like that, like, my general advice is that, like, be wary of what you put on the internet, you know, mm-hmm and if you're always careful about what you put on the internet, then you'll be less likely to be doxxed, but otherwise it's like you, you gotta find people you can trust that you share stuff with on the internet, and this is a huge societal-wide problem that we're all gonna have to kind of come to terms with that at a certain point, and unfortunately, I don't have a ton of great answers for!

<i class="timecode">[00:18:14]</i> **Ben:** Yeah. And I think the caveat I've got is that, like, even if you do, like, limit who you're trusting people with information, right? Like, you know, you can still… you could be the subject of a cyberattack, or you could be, like, the subject of a revenge porn attack or something like that. Like, someone who was unauthorized or someone you once upon a time trusted can, like, still put content out on the web that like, you… yeah, like, you should not be held responsible for that kind of stuff, I feel. And, like, anytime you talk about, like, permanence as, like, enshrining a thing on, like, a blockchain or, you know, a distributed network or something like that, right, like, these are things that you have to deal with as, like, even when people are being, like, their best, right, and not doing anything you could fault them for, like, there are still going to be malicious actors who, like, will take advantage of systems like that to abuse them and do terrible things, right? And I'm of the mindset that, like, an infrastructure and architecture like this absolutely needs ways to deal with that.

<i class="timecode">[00:19:28]</i> **Anthony:** Yeah, I would guess that we'll probably find ourselves in a situation where there will be kind of, like, more moderated networks on IPFS where there'll be nodes that will get together and will kind of collectively decide on, like, what's appropriate content and what's not, and then they'll kind of, like, police that. And then people who want to just do whatever they want will go on to, like, the more kind of wild west network. So if I had to, like, kinda put my prediction hat on, that would be where I predict where I think this is gonna go, but it's hard to say at this point.

<i class="timecode">[00:19:56]</i> **Ben:** What that does sound like to me is the solution is… centralization? 

<i class="timecode">[00:20:01]</i> **Anthony:** It wouldn't be centralization though, because it would require a group of people to collectively decide those moderation rules. That would be the difference.

<i class="timecode">[00:20:08]</i> **Ben:** Okay. 

<i class="timecode">[00:20:09]</i> **Anthony:** Yeah, which I think is actually— that could be a cool thing, I think, because you know, not everyone will agree with what needs to be moderated and what doesn't. 

<i class="timecode">[00:20:16]</i> **Ben:** Sure. Alright. I wanna get into like—

<i class="timecode">[00:20:18]</i> **Anthony:** These are type of cool, fun problems that come when we start talking web3. It's always like, you got these huge philosophical topics—

<i class="timecode">[00:20:23]</i> **Ben:** Oh, yeah. Yeah, yeah, yeah.

<i class="timecode">[00:20:23]</i> **Anthony:** —like very, very quickly. 

<i class="timecode">[00:20:25]</i> **Ben:** Absolutely. But I wanna actually look in and do some, you know, like, writing some code, getting some stuff deployed.

<i class="timecode">[00:20:31]</i> **Anthony:** Mm-hmm, yeah.

<i class="timecode">[00:20:31]</i> **Ben:** So how should we get started? 

<i class="timecode">[00:20:34]</i> **Anthony:** Yeah, so the first thing is, let's go to our command line and, since you already have the CLI, let's just do the "ipfs --version."

Cool. So we are on 0.13.1. So we're already past my blogpost, which was written on 0.12.0. And this is a repository that now is on your computer. 'Cause as I was saying, this is just Git. You have a Git repo.

And so, type "ipfs init." You may have already done this, but just if anyone's following along, this is the first step they need to do. So this is going to initialize their repository. And you also see there, you have a peer identity. So the peer identity is, when you actually connect to the network, then you're going to be able to kind of find someone else on the network through their peer identity.

<i class="timecode">[00:21:27]</i> **Ben:** Gotcha. So this, what just got logged here, this is not sensitive in any way, right? I don't need to—

<i class="timecode">[00:21:32]</i> **Anthony:** Correct.

<i class="timecode">[00:21:33]</i> **Ben:** —have blurred this out or anything like that.

<i class="timecode">[00:21:35]</i> **Anthony:** Mm-hmm.

<i class="timecode">[00:21:35]</i> **Ben:** Okay. It actually seems like my config file already exists. Interesting.

<i class="timecode">[00:21:40]</i> **Anthony:** Yep. Yeah, and then you also see how it says "Reinitializing would overwrite your keys." So this is why I say this IS a locked-down system. This IS something with keys that only you have access to now, right now, on your computer.

<i class="timecode">[00:21:53]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:21:53]</i> **Anthony:** So those keys are important. And like, they have set the system in a way where they're on your computer somewhere, and I'm sure you could find them if you wanted to. Like, I wouldn't even really know where to go to find them. So there's kind of more education that I think needs to happen around, like, what is actually public and private here and what is locked down and what's not. And for right now, we're just kind of gonna be doing, like, simple little HTML exercises, so it's not gonna be, like, a huge deal. But, like, there's larger questions like "How is this system actually secured?" that are worth going into, if that's something you find interesting. 

<i class="timecode">[00:22:28]</i> **Ben:** Gotcha. Alright. 

<i class="timecode">[00:22:31]</i> **Anthony:** Okay. So now, when you first initialized it — you can't see it here — it will usually give you the ability to kind of log the…

First, let me drop this in the chat. So when you initialize, the first thing they do is they say, "Hey, run this command here." And what's going on—

<i class="timecode">[00:22:56]</i> **Ben:** What?!?

<i class="timecode">[00:22:57]</i> **Anthony:** Right? And what's going on here is, there's a content hash. So, content hash is the first thing you really gotta understand about how does IPFS work because…

Well, first off, what's a hash, Ben? 

<i class="timecode">[00:23:15]</i> **Ben:** Right, yeah, so… whenever you—

I'm trying to think of the best way to explain it. Basically, it's a way to verify that some content is what you say it is by basically performing a lot of transformations on the content. And those transformations are lossy. You can't reverse-engineer them. But like, at the end of that process, you get a seemingly more or less random string that, like, if you had made even one tiny change to the content that you had hashed, you would've had a wildly different string at the end. So it becomes fairly straightforward to just compare some very small, lightweight strings and trust that it's, like, good enough. Now, multiple things can usually resolve to the same hash, but those things are usually so disparate, different enough that, like, you know, you wouldn't be, you know, like… you wouldn't expect, lik,e anyone to get those things confused, right? So if you end up with a hash and it's the same hash as what you told me to expect, then, like, I know that, roughly speaking, this stuff hasn't been tampered with or changed in any way.

I think you've got on mute. 

<i class="timecode">[00:24:36]</i> **Anthony:** Yeah, sorry, I was drinking some water. Yeah. Yeah, that was all correction and all good, and the important bit in there was when you do the hash, the thing that the hash spits out is, like, globally unique. Like, it will not ever be created again. And so this is what makes it useful for this permanence idea, is that once you create a hash from your content, like, that is something that will stay the same forever. And if you change the content, then you get a new hash.

And this is something that will be, like, once you get kind of further down the line of using this stuff, you'll be like, "Wait, how do I update my website then?" And so what you can do is you can have that hash point to another hash and then that hash can stay the same while you update the content. So that's something that we maybe… may get to, may not. We'll kinda see how far we get in this.

<i class="timecode">[00:25:28]</i> **Ben:** Yeah.

<i class="timecode">[00:25:28]</i> **Anthony:** But let's actually, real quick, 'cause I always forget at what point of the process this actually becomes important or not, so let's just open up another terminal and get this going for now. We're going to start the IPFS daemon.

<i class="timecode">[00:25:40]</i> **Ben:** Okay. I think that's already been started thanks to me opening up IPFS Desktop earlier. Okay, well it says it's initializing. Okay, cool.

<i class="timecode">[00:25:51]</i> **Anthony:** Let's see.

<i class="timecode">[00:25:53]</i> **Ben:** Are we expecting more? Oh, there it is. 

<i class="timecode">[00:25:55]</i> **Anthony:** There it all is. Yeah, so now this is us actually connecting to the network, and yeah. I'm not sure if IPFS Desktop does this automatically, but this is a good thing to do regardless.

And you see all these, you know, we have IPv4, IPv6, TCP, UDP. You see all that stuff, 'cause this is where we're actually, like, connecting to the internet now. And then our kind of IPFS node now is going to be able to take the content that we're creating, we're putting on our own node, and expose that to the overall network. So hopefully things will work and people can actually view these websites. We'll see if that actually happens or not. But let's go back to our other terminal now.

<i class="timecode">[00:26:33]</i> **Ben:** Alright!

<i class="timecode">[00:26:35]</i> **Anthony:** Yeah. And then could you just grab that thing I dropped in the chat and run that command? Cause usually it pops up the first time you init, so.

<i class="timecode">[00:26:44]</i> **Ben:** Yeah. And is that hash…? Okay, cool. 

<i class="timecode">[00:26:48]</i> **Anthony:** Yeah. And so that runs the "cat" command, which basically just, like, reads the file out to the terminal. And this is pretty cool. I like this little, like, Hello World experience here. They're saying, "You're seeing this. You are now interfacing with the IPFS and Merkle DAG," which is a distributed acyclic graph that is using Merkle trees. So that's all crypto stuff you don't gotta worry about too much.

But it's showing you that you have a couple different files here. And if you noticed, when we did that "cat" command, you have the long content hash, then you have the "readme" after. So what's happening here is directories have content hashes and files have content hashes. So if you use the directory content hash, then you can view other things inside that directory. So do that exact same command, but change to… let's do "security-notes." Let's see what this one says.

<i class="timecode">[00:27:49]</i> **Ben:** Okay?

<i class="timecode">[00:27:54]</i> **Anthony:** Yeah, there you go! So, "We try hard to ensure your system is safe and robust." So they're letting you know this is alpha software. They're letting you know that it's a networked program. You always gotta worry about things like that. And then they also say, "Hey, we have a security team here, so if you ever, like, need help, contact us," and then it's not necessarily proven secure yet, which basically just means there are always going to be security vulnerabilities that may exist depending on what kind of encryption you're using. But these are people who are, like, academic researchers, so if you wanna put your trust to, like, anybody as, like, the buck's gotta stop somewhere. And so, like, these are people who actually know how cryptography works, know how encryption works. So this is a relatively, I think, somewhat safe system at this point as, like, crazy new alpha software kind of goes, but just like, disclaimer — as we've been kinda giving disclaimers as you go through this whole thing — this is something new. This is something that you should not like really, really put super duper important, sensitive stuff on. 

<i class="timecode">[00:28:56]</i> **Ben:** Absolutely. It's definitely a "use at your own risk" disclaimer. 

<i class="timecode">[00:29:00]</i> **Anthony:** Mm-hmm, yeah. Cool, and then do that same thing again, but go to the about page. 

<i class="timecode">[00:29:05]</i> **Ben:** Got it.

Okay. Oh, look at that. Wow, it's got a whole thing. 

<i class="timecode">[00:29:13]</i> **Anthony:** Yeah, and this is a lot of stuff that… I talk about this in my blogpost. I think "IPFS is a web" is a really important one, which is that it can be used to view documents like the web and that they can then be accessed through HTTP.

So let's actually… let me try that real quick.

**So if We Take the Thing That I Posted in the Chat and You Go to Https:**//…

<i class="timecode">[00:29:45]</i> **Ben:** Where are we going?

<i class="timecode">[00:29:50]</i> **Anthony:** So — sorry, so I'm trying to do a couple things at once right now,

Okay, go back to the terminal you just had up real quick. And then scroll up a little bit to where it says "a web." Yeah, so take where it says "http://ipfs.io" and then "`<path>`," yeah. So grab that and then paste that in and then paste everything from "ipfs/" on from the Twitch command.

<i class="timecode">[00:30:23]</i> **Ben:** Okay!

<i class="timecode">[00:30:23]</i> **Anthony:** So basically it'll have forward slash, "ipfs," forward slash, the content hash.

<i class="timecode">[00:30:30]</i> **Ben:** Alright, so this, this whole thing. 

<i class="timecode">[00:30:33]</i> **Anthony:** Yeah. Let's see if that works.

<i class="timecode">[00:30:37]</i> **Ben:** Okay, yeah, it's the same file. 

<i class="timecode">[00:30:40]</i> **Anthony:** Great, so anyone else should be able to go view this as well. And this is where all the important stuff kind of starts coming together, 'cause this is where this becomes an actual website on the internet other people can look at.

So, how is this possible? This is possible because of ipfs.io. That is the gateway that I was referring to earlier. So that is one that IPFS, the Protocol Labs themselves — they are running that and they are managing that gateway. They are ensuring that that gateway stays up and stays reliable and available.

There's also other ones like Cloudflare. So Cloudflare has an IPFS gateway. Let me grab a link from that. So that's gonna be basically the same thing, but instead of ipfs.io, it's gonna start with cloudflare-ipfs.com, 

<i class="timecode">[00:31:31]</i> **Ben:** cloudflare-ipfs.com. And then it's still /ipfs/QmQ, et cetera?

<i class="timecode">[00:31:39]</i> **Anthony:** Yeah, exactly. Yeah, this is the point where things start to really click together for me, because I was like, oh, okay, so the content hash is something that always stays the same.

<i class="timecode">[00:31:48]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:31:49]</i> **Anthony:** And so you can reliably expect it to always stay the same. And then you have these gateways, which are different ways to access it, but the gateways are just giving you access to the content hashes. So the gateways can change and you have different gateways, but the content will always stay the same. And then the content can… once you figure out where the gateways are, then as the content's changing, you keep the same gateway, you change the content, then you see all the different stuff on there. And so like, "Oh, wow, this is actually really, really cool."

<i class="timecode">[00:32:11]</i> **Ben:** Mm-hmm. Absolutely, okay! Cool!

<i class="timecode">[00:32:15]</i> **Anthony:** Alright. So let's now start making our own stuff—

<i class="timecode">[00:32:21]</i> **Ben:** Yes.

<i class="timecode">[00:32:21]</i> **Anthony:** —now that we all see all that. What we should do next is create a directory with some stuff in it. 

<i class="timecode">[00:32:31]</i> **Ben:** Alright, I'm just gonna call this "some-antics-ipfs."

<i class="timecode">[00:32:34]</i> **Anthony:** Yeah.

<i class="timecode">[00:32:36]</i> **Ben:** Alright. We'll go in there. Alright. 

<i class="timecode">[00:32:43]</i> **Anthony:** Yeah, and you can just create an index.html file and then put your standard kind of HTML boilerplate. And you can say whatever you want in there. Just say hello, put some links, or anything like that. I'd be curious when you first start like a completely skeleton HTML page. Are there any specific things you do to ensure that it's accessible or do you just try and stick to the…? 

<i class="timecode">[00:33:09]</i> **Ben:** So…I use—

Why…? Sorry, a weird VS Code profile seems to have opened up for me. That's unusual.

<i class="timecode">[00:33:17]</i> **Anthony:** You want to check that out real quick? 

<i class="timecode">[00:33:21]</i> **Ben:** Uh… fine. Just, yeah, I'm missing my snippet that I've usually got for this. Does this have any of, like, my extensions or anything? You know, I just restarted my computer. I wonder if VS Code did an update or something like that. Interesting.

<i class="brackets">[rustling in background]</i>

Oh my god. My cat is trying to, like, barge in.

<i class="timecode">[00:33:43]</i> **Anthony:** Is there somewhere online where you got that snippet from? 

<i class="timecode">[00:33:46]</i> **Ben:** It was, the, like Emmet exclamation mark. You know what I'm gonna do? I think that the reason this is weird is I haven't actually opened up a directory. So let me try this once more. I'm gonna open up this current directory, then I think we'll be good. Yeah.

<i class="timecode">[00:34:06]</i> **Anthony:** I didn't think VS Code would be where we would have issues. 

<i class="timecode">[00:34:13]</i> **Ben:** Yeah! Yeah, no. So far all the IPFS stuff is working great. It's VS Code that's the problem today. But yes, I use, like… there's a fairly standard, like, exclamation mark.

Here we go. Yeah, this is looking more like it. 

<i class="timecode">[00:34:30]</i> **Anthony:** Yeah, I saw it all the time, like, in, like, you know, Brad Traversy's videos, and when I was first learning, they would always do that. 

<i class="timecode">[00:34:38]</i> **Ben:** Yeah.

Call this "index.html." We will update later and not update on stream, it turns out. Updating things on a stream is a bad idea. 

Okay. This should hopefully do it. 

Okay. Well, I don't know… I don't know why that isn't going, but that's fine. Alright. But yeah, so you're gonna have your `<html>` tag. This, I think, needs a… we need doctype html up here. 

<i class="timecode">[00:35:16]</i> **Anthony:** So Nocturne is asking what are some of our favorite VS Code extensions. I try and keep mine pretty light for the most part. The biggest one for me that I think everyone should use and install automatically is Import Cost. What Import Cost does is it shows you the exact number of kilobytes of all of your dependencies whenever you're adding them to one of your projects. And if you're someone who does a lot of JavaScripty stuff, you'll quickly realize why everyone's been telling you not to worry about how much JavaScript you're putting into your projects!

<i class="timecode">[00:35:53]</i> **Ben:** Alright. Yeah, here we are. We got our snippet going. So yeah, the main things it's got, you need… your `<html>` element needs a "lang" attribute. We've got UTF-8 encoding. We've got the viewport, like, width set to the device width. This is so people can zoom in without things getting weird. And then I like to add a `<main>` tag. I'll say "Hello World." Then just for the sake of expediency, I'll just drop in some lorem ipsum there. Yeah! Okay, cool. So this is a boring page, but yeah.

Nocturne, I will have to look through my extensions. Let me just, like, pop this open. Mainly I have a whole lot of, like, themes and stuff like that. I have a BrowserSync one that lets me, like, run any webpage, like, as a web server, like, hosted via a local web server through the VS Code interface. That's stuff's good. Yeah. Quickly going through. Most of these are themes. I also just love anything that provides reusable snippets out of the box.

Okay! So we've got us some content. It's… you know, it's not pretty. Oh, you know what? I actually have… there we go. We're pulling in…

<i class="timecode">[00:37:25]</i> **Anthony:** Oh, you should give us a meta description as well. 

<i class="timecode">[00:37:30]</i> **Ben:** Oh, do we wanna use a meta description? We totally can. Yeah. 

<i class="timecode">[00:37:34]</i> **Anthony:** Yeah.

<i class="timecode">[00:37:34]</i> **Ben:** What is it, like, "meta?" Here we go. "This was deployed to IPFS on stream." "On a Some Antics stream." There we go.

Cool. So yeah, we've got that now. We could add a whole lot more, but for the sake of expediency, I think this is what we'll probably be good with for now. 

<i class="timecode">[00:38:06]</i> **Anthony:** Great! Okay. Now that we have our website, let's go back into our terminal.

<i class="timecode">[00:38:13]</i> **Ben:** Alright.

<i class="timecode">[00:38:13]</i> **Anthony:** In the one where you're actually in the projects. Go one level back out so you're no longer inside of it. And then now what we aregonna do, is we're going to do "ipfs add." And so this is the command that's going to actually put this onto your node. And before that you're gonna do a "-r" flag. 

<i class="timecode">[00:38:34]</i> **Ben:** Okay. Is this recursive, so it adds the whole directory structure? 

<i class="timecode">[00:38:40]</i> **Anthony:** Oh, you're so smart, Ben.

<i class="brackets">[both chuckle]

That's exactly what it is. Like, when I first saw it, I was like, "Why is it recursive? What does that mean?"

[Anthony laughs]</i>

<i class="timecode">[00:38:52]</i> **Ben:** So, yeah, if we had folders within folders within folders, like, all of those would get added rather than, like, the top level.

<i class="timecode">[00:38:59]</i> **Anthony:** Yeah. Yeah, so that should be it, so go ahead and run that command.

<i class="timecode">[00:39:03]</i> **Ben:** Okay.

<i class="timecode">[00:39:03]</i> **Anthony:** And if all went according to plan, we will now have two content hashes here, so—

<i class="timecode">[00:39:08]</i> **Ben:** Yes.

<i class="timecode">[00:39:08]</i> **Anthony:** —if you drop both of those into the chat. 

<i class="timecode">[00:39:13]</i> **Ben:** Yeah! I'm just going to… it's not gonna be pretty, but I will just highlight this whole thing. Alright!

<i class="timecode">[00:39:22]</i> **Anthony:** Let me start messing around with these a little bit. So, do the… let's see. What should we do first? Do the "cat" command that we were doing before. So just go up through your old…

<i class="timecode">[00:39:36]</i> **Ben:** Yes.

<i class="timecode">[00:39:37]</i> **Anthony:** Yeah, go up.

<i class="timecode">[00:39:38]</i> **Ben:** Here it is.

<i class="timecode">[00:39:39]</i> **Anthony:** Yeah, take that one and then, yeah, grab that whole thing with the index.html at the end.

<i class="timecode">[00:39:45]</i> **Ben:** Okay, so… this—

<i class="timecode">[00:39:47]</i> **Anthony:** Actually, so it'll be… so, it'll be the bottom one, actually, 'cause you wanna do the directory hash. Yeah. And then we'll try both of these and then people can see.

<i class="timecode">[00:39:57]</i> **Ben:** So I nuke this whole hash, right? Because this—

<i class="timecode">[00:40:00]</i> **Anthony:** Yep.

<i class="timecode">[00:40:00]</i> **Ben:** —this is not my project. There we go. And then it's gonna be index.html?

<i class="timecode">[00:40:06]</i> **Anthony:** Yep. That should just show you the content.

<i class="timecode">[00:40:09]</i> **Ben:** Do I need "some-antics-ipfs?" 

<i class="timecode">[00:40:11]</i> **Anthony:** No, I don't think so. 

<i class="timecode">[00:40:13]</i> **Ben:** Okay. Yeah, cool, here we are. So it's the contents of our HTML file!

<i class="timecode">[00:40:17]</i> **Anthony:** Yeah. And then now do that command again, but with just the content hash of index.html and without anything after the content hash.

<i class="timecode">[00:40:31]</i> **Ben:** That's this one up here?

<i class="timecode">[00:40:33]</i> **Anthony:** Yeah, mm-hmm.

<i class="timecode">[00:40:34]</i> **Ben:** Okay. 

Type this out, okay. Got it. And that's my HTML file again. 

<i class="timecode">[00:40:39]</i> **Anthony:** Yeah! And then now let's try doing that with the IPFS gateway and see what comes up. 

<i class="timecode">[00:40:45]</i> **Ben:** And by that you mean going back into our browser and…?

<i class="timecode">[00:40:49]</i> **Anthony:** Yeah.

<i class="timecode">[00:40:49]</i> **Ben:** Okay, so we take… this is the hash for just the HTML file. 

<i class="timecode">[00:40:58]</i> **Anthony:** And this is probably— this is the point where something is almost certain to go wrong, 'cause a lot of times I'll do this and then for some reason the content just doesn't show up.

<i class="timecode">[00:41:06]</i> **Ben:** Okay.

<i class="timecode">[00:41:06]</i> **Anthony:** And it might be because it takes a little while for it to propagate through the network. 

<i class="timecode">[00:41:09]</i> **Ben:** This is on the Cloudflare gateway, so if you'd like, I can go to, like, ipfs.io instead if you'd like.

<i class="timecode">[00:41:15]</i> **Anthony:** Let's start with that one and see what happens.

<i class="timecode">[00:41:20]</i> **Ben:** Okay, well, it's thinking. Do I need to do the directory one instead? Would that be better? 

<i class="timecode">[00:41:27]</i> **Anthony:** Trying both of 'em right now and seeing what happens. Let's actually, let's hold off on this for a second. Let's pin it, and then that might help out.

<i class="timecode">[00:41:34]</i> **Ben:** Okay!

<i class="timecode">[00:41:35]</i> **Anthony:** So, pinning is an important part. So when you talk about IPFS being permanent and, like, "when you put something on there, it's on there forever," there's a massive, massive asterisk next to that claim, which is that if you don't "pin" the content, then your content regularly gets garbage-collected off of the network. And this… it does make sense, 'cause if you think about it, like, if every time everyone put anything on the network, it stays there forever, the network's gonna just explode in size in, like, no time. So it's set up in a way where you can put something on your node and then it'll be on the network, but it's not really there permanently yet. To actually make it permanent, you have to pin it. And the pinning part is… there's stuff that can get kind of complicated about it. There's actually entire services now based around handling how you pin your IPFS content.

<i class="timecode">[00:42:23]</i> **Ben:** Okay.

<i class="timecode">[00:42:23]</i> **Anthony:** But for now, let's go… let's grab the hash — grab the first hash that your terminal spit out for you. 

<i class="timecode">[00:42:35]</i> **Ben:** That's this one, the…

<i class="timecode">[00:42:39]</i> **Anthony:** Yeah.

<i class="timecode">[00:42:40]</i> **Ben:** Okay. So I've got that. 

<i class="timecode">[00:42:44]</i> **Anthony:** And then do "ipfs pin add" and then that.

<i class="timecode">[00:42:50]</i> **Ben:** Okay, "ipfs pin add" and then our hash, like that. 

<i class="timecode">[00:42:55]</i> **Anthony:** Yeah, just like that.

<i class="timecode">[00:42:58]</i> **Ben:** Okay?

<i class="timecode">[00:42:59]</i> **Anthony:** Great. And now do "ipfs pin ls."

<i class="timecode">[00:43:02]</i> **Ben:** Is that "-ls?"

<i class="timecode">[00:43:05]</i> **Anthony:** No, just "ls."

<i class="timecode">[00:43:08]</i> **Ben:** Okay?

<i class="timecode">[00:43:09]</i> **Anthony:** Okay, cool. So that's the stuff that we have pinned right now. So if you see the very last one, it has you pinned recursively.

So let's go into… yeah, now let's go into our IPFS Desktop application.

<i class="timecode">[00:43:25]</i> **Ben:** You got it! We've installed that ahead of time.

Oh, that's just the installer, okay. Let me just use the spotlight search.

It's thinking! Is it secretly behind here? Is this your card? 

<i class="timecode">[00:43:55]</i> **Anthony:** Yeah… alright, cool. So this is up. So you see we're connected and you can kinda see bandwidth and metrics and stuff like that. And go to "Files" on the left.

<i class="timecode">[00:44:14]</i> **Ben:** So fun fact, clicking "Files" doesn't necessarily take you to "Files" immediately. 

<i class="timecode">[00:44:18]</i> **Anthony:** Yeah, it might be it's just lagging 'cause of the stream.

Alright, so: this right now, we don't see anything. So click "Import" on the top right.

<i class="timecode">[00:44:29]</i> **Ben:** Okay.

<i class="timecode">[00:44:30]</i> **Anthony:** And go… let's do it from IPFS. And then do the path for your… the content. So it'll be just forward slash, "ipfs," forward slash, that. 

<i class="timecode">[00:44:45]</i> **Ben:** Okay. "ipfs." Okay, like this.

<i class="timecode">[00:44:48]</i> **Anthony:** Yep, and then just like that, yeah. 

<i class="timecode">[00:44:51]</i> **Ben:** Do we name it or nah?

<i class="timecode">[00:44:52]</i> **Anthony:** Um… sure, yeah!

<i class="timecode">[00:45:03]</i> **Ben:** Okay?

<i class="timecode">[00:45:03]</i> **Anthony:** Cool, and then click it. And you see how it has a pinned status next to it, so that shows that it's been pinned. 

<i class="timecode">[00:45:09]</i> **Ben:** Yeah, so if I go back here… okay, it is pinned. Alright! 

<i class="timecode">[00:45:12]</i> **Anthony:** Yep. And then go to "More." And then let's go share a link. Let's see what happens with that. 

<i class="timecode">[00:45:22]</i> **Ben:** Copy that.

<i class="timecode">[00:45:22]</i> **Anthony:** Copy that.

<i class="timecode">[00:45:23]</i> **Ben:** Put it in the Twitch chat as well, for folks at home. Then let's go open this. Ooh, hello.

Alright. Yeah, so opening this up. Nice! Okay, yeah, we do have our file—

<i class="timecode">[00:45:41]</i> **Anthony:** Woo! We're there!

<i class="timecode">[00:45:41]</i> **Ben:** Yeah!

<i class="timecode">[00:45:42]</i> **Anthony:** About an hour!

<i class="timecode">[00:45:42]</i> **Ben:** We deployed! We deployed. We can go ahead and end the stream here, you know? 

<i class="timecode">[00:45:47]</i> **Anthony:** Hey, this is what… I was hoping we would actually get to this point.

<i class="timecode">[00:45:49]</i> **Ben:** Oh, nice. Okay.

<i class="timecode">[00:45:50]</i> **Anthony:** Yeah,so this is kind of where I was hoping we would get to, so that is awesome. Alright.

<i class="timecode">[00:45:55]</i> **Ben:** And to confirm, like, you know, if you open up that link on your end, like, you're seeing this as well.

<i class="timecode">[00:46:01]</i> **Anthony:** Hopefully.

<i class="timecode">[00:46:02]</i> **Ben:** Like, we are officially deployed and pinned. Our site is gonna live here more or less forever, right? 

<i class="timecode">[00:46:08]</i> **Anthony:** That's the idea!

<i class="timecode">[00:46:11]</i> **Ben:** Okay!

<i class="timecode">[00:46:11]</i> **Anthony:** Trying to see if it can actually come up on my computer. This is… where stuff always gets a little wonky, and why I would usually recommend if you actually wanna put a website up on IPFS, you should take a look at something like Fleek. Actually, we got 15 minutes. I wonder if we can get this up on Fleek.

<i class="timecode">[00:46:31]</i> **Ben:** That what you wanna do? 

<i class="timecode">[00:46:32]</i> **Anthony:** Let's do it, yeah. Create a Fleek account really fast. It should be fleek dot… hold on. 

<i class="timecode">[00:46:39]</i> **Ben:** "Fleek?" Am I hearing that right? 

<i class="timecode">[00:46:41]</i> **Anthony:** "Fleek." Yeah, fleet.co. That's the one.

<i class="timecode">[00:46:44]</i> **Ben:** Okay.

<i class="timecode">[00:46:49]</i> **Anthony:** So what this is… Fleek is — because, you know, why wouldn't we have this? It's a Jamstack hosting provider for IPFS!

<i class="timecode">[00:46:57]</i> **Ben:** Alright.

<i class="timecode">[00:46:59]</i> **Anthony:** And by the way, I was able to get to the site and—

<i class="timecode">[00:47:01]</i> **Ben:** Okay.

<i class="timecode">[00:47:02]</i> **Anthony:** —like, I am seeing it on my computer.

<i class="timecode">[00:47:03]</i> **Ben:** Should I go with Git provider? Or email? I don't have Ethereum. 

<i class="timecode">[00:47:08]</i> **Anthony:** Um… do Git provider, yeah.

<i class="timecode">[00:47:11]</i> **Ben:** Cool, it allows GitHub. Awesome. 

<i class="timecode">[00:47:15]</i> **Anthony:** Yeah, and also, you should get your index.html up on your Some Antics GitHub or whichever GitHub you're gonna connect here. 

<i class="timecode">[00:47:24]</i> **Ben:** Yes, let's go ahead and do that real quick.

Oh, wow. There we go. Okay.

Yeah, "git init," "git commit," add everything, add a message. "index.html." Oh, really? Okay. "git add." There we go. There we go! We'll create GitHub repo, SomeAnticsDev… IPFS. Public… yes. Push it up. And if anyone wants to see our incredibly thorough repo, it's there. Okay, cool.

Yeah, so now… oh, okay. Ope, did it get me all signed in? I don't think I ever… okay, yeah. I don't think I ever actually finished clicking "Okay," so… wild. 

<i class="timecode">[00:48:36]</i> **Anthony:** Click on "Add new site." 

<i class="timecode">[00:48:37]</i> **Ben:** Add new site. Connect with GitHub, okay. It's gonna make me actually do this. Alright. And I want this in… 

<i class="timecode">[00:48:48]</i> **Anthony:** Yeah, this will probably let you give access to just the individual repo, which is always good, so "Only select repositories." 

<i class="timecode">[00:48:55]</i> **Ben:** Yeah, we're we're just going to select…

<i class="timecode">[00:49:00]</i> **Anthony:** Minimum permissions always!

<i class="timecode">[00:49:01]</i> **Ben:** Yep.

That. Alright. Oh, boy. Let me real quickly go into privacy mode. 

<i class="timecode">[00:49:14]</i> **Anthony:** And then if people have questions in the chat, now would be a good time to start dropping those.

<i class="timecode">[00:49:20]</i> **Ben:** Yes.

<i class="timecode">[00:49:20]</i> **Anthony:** Hey, it works on mobile. Nice. 

<i class="timecode">[00:49:23]</i> **Ben:** Yep. I have to open up another browser so I can get my LastPass instance up. I think… yeah, we are in privacy mode. Awesome. 

Okay, so in the meantime, what is Fleek? Like, you said this is a Jamstack provider for IPFS? 

<i class="timecode">[00:49:42]</i> **Anthony:** Yeah, so as I was saying, there's gonna be a lot of higher-level concerns when it comes to using this, which is, like, making sure that it's actually pinned and then making sure that when you try and update your website, that you don't have to also update the content hash every single time.

So, there's ways to do this with IPNS, the InterPlanetary Name System, which is like a DNS for this. 'Cause you think about, like, we're essentially, like, trying to rebuild the entire internet with this thing, so you can't use, necessarily, DNS.

<i class="timecode">[00:50:13]</i> **Ben:** Mmmm.

<i class="timecode">[00:50:13]</i> **Anthony:** What you can do though, is you can create your own name on IPFS, and then that will point to a content hash. And then you have a DNS record, a DNS text record, that points to your IPNS name, which points to the content hash. So there's ways to do it so a regular old HTTPS request can find that content hash, but there's a lot of steps in that chain. There's a lot of knowledge about DNS and the architecture of the internet. And this is what I was saying, like, this thing just, like, blew my mind when I was using it, 'cause actually I had to think about DNS for the first time ever.

<i class="timecode">[00:50:46]</i> **Ben:** Yeah.

<i class="timecode">[00:50:46]</i> **Anthony:** And I had to figure out that DNS can actually just point arbitrarily to anything you want, and so you can just point it to, like, this other thing and then it'll just kind of go down the chain. And that is what is going to be stuff that you don't really wanna have to do yourself and would be nice to just offload to a service. And also, you know, we want a service that's also gonna let us sync it to a Git repo, and every time you make a change, you "git push" the change, 'cause that's what we expect now. Anything less will be beneath us.

<i class="timecode">[00:51:13]</i> **Ben:** Gotcha.

<i class="timecode">[00:51:16]</i> **Anthony:** 'Cause Netlify has spoiled us all. Netlify and Vercel—

<i class="timecode">[00:51:19]</i> **Ben:** It really has.

<i class="timecode">[00:51:19]</i> **Anthony:** —raised the standard of what we expect a system to do for us! 

<i class="timecode">[00:51:24]</i> **Ben:** Okay. Let me get the actual correct password in there and then let me guess, it's gonna need to auth with GitHub Mobile. Oh no, it isn't! Okay, cool. We're good! In that case, let me turn off privacy mode. Let me confirm our friends at home can now see what we're seeing, which is a big "Authorized" button.

<i class="timecode">[00:51:49]</i> **Anthony:** Yeah.

<i class="timecode">[00:51:51]</i> **Ben:** Alright. Cool. With that, finally… we'll choose that one. And then should I go ahead and choose IPFS?

<i class="timecode">[00:52:02]</i> **Anthony:** Yeah.

<i class="timecode">[00:52:04]</i> **Ben:** Cool. I'll zoom in just a bit.

Alright, and then… so I could choose what branch to deploy off of, but I currently only have the "main" branch.

<i class="timecode">[00:52:15]</i> **Anthony:** Yep.

<i class="timecode">[00:52:15]</i> **Ben:** And then anything else? 

<i class="timecode">[00:52:18]</i> **Anthony:** It's this is hot, new framework, HTML. 

<i class="timecode">[00:52:21]</i> **Ben:** It's so underground. No one's working with it yet. 

<i class="timecode">[00:52:25]</i> **Anthony:** Yeah. I think you can just hit "Deploy site." I think that's all you gotta do.

<i class="timecode">[00:52:28]</i> **Ben:** Cool.

<i class="timecode">[00:52:29]</i> **Anthony:** Hopefully it should know what to do.

<i class="timecode">[00:52:33]</i> **Ben:** Alright! This is really just the Netlify of IPFS.

<i class="timecode">[00:52:37]</i> **Anthony:** It really is, right? And this is why I'm trying to, like, talk to people at Netlify and be like, "Hey, you know… you could build this. People would think it's cool, and you'd be the leader in this system immediately."

<i class="timecode">[00:52:49]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:52:51]</i> **Anthony:** Yeah, so it's… right now, a lot of the older Jamstack providers are not doing anything with IPFS. It's kind of these, like, new upstarts who are creating kind of, like, imitations of them for IPFS. Cloudflare is really the first kind of like big pre-web3 internet company that has gone, like, all in on IPFS. They've done a lot of stuff with it. So I'm gonna be curious to see when more of these, like, Jamstack providers start to get into this.

<i class="timecode">[00:53:19]</i> **Ben:** Okay.

<i class="timecode">[00:53:20]</i> **Anthony:** And it should be…

<i class="timecode">[00:53:22]</i> **Ben:** Looks like we are… deployed! Okay.

So I could preview the deploy. This is gonna give me a link. Stuff like that. So this is handling all of the, like, deploying something out, updating pins, right? So that if people are trying to access resources, they can see, like…

<i class="timecode">[00:53:42]</i> **Anthony:** Let's go back to your dashboard real quick.

<i class="timecode">[00:53:44]</i> **Ben:** Yes.

<i class="timecode">[00:53:46]</i> **Anthony:** And let's just take a look at… go to "Overview." 

<i class="timecode">[00:53:51]</i> **Ben:** "Overview," okay.

<i class="timecode">[00:53:52]</i> **Anthony:** Mm-hmm.

<i class="timecode">[00:53:53]</i> **Ben:** Oh, and it does look like I've got a link up here. Okay. 

<i class="timecode">[00:53:56]</i> **Anthony:** So if you see here, where we have a name, owner, repo, and then the current IPFS hash. And then don't worry about the Filecoin stuff or anything like that, let's go to settings.

<i class="timecode">[00:54:11]</i> **Ben:** Okay.

<i class="timecode">[00:54:15]</i> **Anthony:** And then there should be a way to name your domain. 

<i class="timecode">[00:54:20]</i> **Ben:** Oh, okay, so instead of it being this "round-paper-7017," I could call it "some-antics"— ope. Man, this REALLY is Netlify for the IPFS.

<i class="brackets">[Anthony chuckles]</i>

Okay. So now we've got that, so everything is… so it looks like my site is some-antics-ipfs.on.fleek.co. Yeah, there it is. So let's go ahead and put that — oh, you've already put it in the chat. Thank you.

Okay! So, alright, let's say, you know, I've been working on this, right? And this site, you know, it's very feature-complete, but nonetheless, I would like to add more features, you know. I have more content I wanna add. Right? What is the process now for, I guess, kind of updating my contents? Or, you know, kind of going, like, native IPFS, like, how do I broadcast, like, I've got a new version of the site for people to use?

<i class="timecode">[00:55:26]</i> **Anthony:** I'm fairly certain at this point, if you make a change and you push it to that Git repo, everything else will be handled for you.

<i class="timecode">[00:55:32]</i> **Ben:** Well, so on the Fleek end, right? But not on the— 

<i class="timecode">[00:55:34]</i> **Anthony:** On the Fleek end, exactly. Which is, that's why this service is so valuable for you.

<i class="timecode">[00:55:38]</i> **Ben:** Got it, okay. 

Yeah. So, like, yeah, I'll go ahead and, you know, add in another paragraph tag with another lorem ipsum. Boom.

Yeah… boom…

Right, so Fleek is already gonna take care of this. Cool. Yeah. What kind of stuff is it abstracting way from me for, like, IPFS stuff? 

<i class="timecode">[00:56:11]</i> **Anthony:** Yeah, so the IPNS… the naming system in particular — I'll drop a link to that in the chat as well. And this is what allows you to not have to constantly update the content hash every time you wanna change something.

<i class="timecode">[00:56:29]</i> **Ben:** Okay.

<i class="timecode">[00:56:30]</i> **Anthony:** And then it's also kind of guaranteeing that there's a gateway that's going to be fast and that… I'm assuming they're also then, like, caching their content and… or caching it and making it so it's, like, on a CDN, because when I first did this exercise, like, I was trying out different gateways and, like, different ways of viewing the content. And I ended up at the end with a website with, like, five links to it, you know, through different gateways and then one through Fleek. And there was something called eth.link, which is… if you go to the website, nothing will come up, 'cause I'm not sure if this thing even works anymore. It's a Cloudflare service that'll let you connect to ENS, 'cause there's also the Ethereum Naming System, which lets you have a domain that is, like, an NFT, and then that domain can point to an IPFS content hash, and you can point a DNS record to that domain.

<i class="timecode">[00:57:22]</i> **Ben:** Mm-hmm.

<i class="timecode">[00:57:22]</i> **Anthony:** But there was all these, like, links that I would have to it and, like, some of them would load slowly. Some of them would not load at all, ever. And then Fleek would load fast every single time, and would work every single time.

So, the thing with, like, the centralized-versus-decentralized thing, if you try and go 100% decentralization purist, you're gonna have stuff just not work very well, and that's because it's gonna take 5, 10, maybe 20 years before the system becomes, like, really super duper reliable in that sense. So if you wanna play around this stuff and you wanna actually start building websites with it, use something like Fleek. The content is still on IPFS. If you ever want move off Fleek, you can do that. But like, it's gonna do so much for you and it's gonna make your life so much easier that you're gonna be able to start interacting with this technology much quicker. You'll be able to start shipping stuff much faster. And I think that the more web3 people can kind of, like, embrace this, like, hybrid centralized/decentralized model, the quicker we're gonna actually start convincing people that this stuff is useful and usable. 

<i class="timecode">[00:58:22]</i> **Ben:** Gotcha. Okay. And you had quickly mentioned, like, NFTs. And I don't wanna make this an NFT stream. Like, we've discussed this ahead of time. But just so I can understand the technology, 'cause I had heard that for instance, like, NFTs were effectively, like, just a link to, like… basically a hyperlink to something in a database, right. It's this hash, right? Like, it's just pointing to the hash in IPFS?

<i class="timecode">[00:58:47]</i> **Anthony:** So, the NFT itself is. That is an identifier that is globally unique, and then that identifier is on the blockchain. So that, as you say, can point to a database, can point to just an S3 bucket. But you can also have it point to an IPFS content hash, and so that's where you can feel a little more safe that your NFT is not gonna just disappear, 'cause it can't just be taken off of a database. And so this is why it's really important, if you ARE gonna get into NFTs, you need to understand where does this NFT actually live. Does it actually live on a decentralized system or is it just on someone's computer somewhere? 'Cause that could be really dangerous if you wanna pay a bunch of money for something that could just disappear and never be there again.

<i class="timecode">[00:59:29]</i> **Ben:** Yeah.

<i class="timecode">[00:59:30]</i> **Anthony:** So that's why having an NFT that is actually on IPFS is… when people are thinking about how NFTs work, it only really works the way people think it does if it's on a system like this and not just pointing to a database somewhere. 

<i class="timecode">[00:59:43]</i> **Ben:** We have good friend of both of us, Michael Chan, in the chat putting it very succinctly, which is "Yeet my data into space!"

<i class="brackets">[Anthony chuckles]</i>

And with that, so, we are unfortunately coming up on out of time, so I wanna kind of wrap this up with, what do you think web developers, especially those of us like myself who would consider, like, ourselves, like, you know, squarely Web 2 — you know, I'm not interested in, like, cryptocurrency, NFTs. That's just not my purview. What do you think we should keep our eyes on going forward? Like, how is this developing? What should people be keeping their eyes on in terms of this kind of work?

<i class="timecode">[01:00:30]</i> **Anthony:** Yeah, I would say, keep an eye on who are the Web 2 companies — and also, like, I don't really like the term "Web 2." I had to use it as, like, a shorthand. Lik,e I prefer not to create this, like, us-versus-them or the-future-and-the-past kind of narrative. Like, I don't really like that at all. So I would say, look at non-web3 companies that are doing this and see kind of how much buy-in we're getting from them. 'Cause as companies like Cloudflare, as companies like maybe Netlify or Vercel start to get into this, that's where it's gonna be easier to kind of bridge this gap for people who don't wanna have to go through this whole process of learning an entirely new mental model and system. So, if you're someone who is just very practical, you're like, "I just wanna build stuff and I want it to work," then I would say you don't really have to worry about IPFS for a while. If you're someone who, though, you are interested in new tech and you like learning new things, you like kind of having yourself stretched, then this thing right now, it's at a point now where it's, like, stable enough and built high enough and has enough conventions built into it that you can start reliably learning these things and internalizing these mental models, and those are gonna stay the same. The idea of the content hash, the idea of the gateways, the idea of how this whole thing kind of fits together? That's not gonna change. So if you are someone who wants to build expertise in something that's gonna be long-lasting and valuable into the future, I think that being an IPFS expert is something that's going to massively pay off down the line. Now, the question of when that is, I can't tell you. I can't predict the future. All I can say is that there is a direction that the internet is going, and this is going to be a big part of it. I feel pretty dang confident that that is the case. Now, that doesn't mean the old internet's gonna go away and the new internet's gonna entirely be IPFS. There's gonna be some sort of combination of the two and the two will interact with each other, and a certain point, to users, there will be no difference. They will not have to worry about these gateways at all. So a certain point people will just write links into their address bar and it'll take them to places and sometimes it'll take them into IPFS and sometimes it won't, and the users will have no idea. But to me, that is the future, I think, where we're headed towards.

<i class="timecode">[01:02:27]</i> **Ben:** Alright. Well, Anthony, thank you so much for your time. I always learn some really cool stuff from you every time you're on, so I really appreciate your time.

<i class="timecode">[01:02:37]</i> **Anthony:** Thank you.

<i class="timecode">[01:02:37]</i> **Ben:** Y'all, go follow Anthony on the Twitters. Yeah, let's… shout out…

Alex Trost, that means a lot. We super appreciate having you, and all of y'all in the chat. Thank you so much for being here. 

Chat, stick around. We are going to find someone to raid. But also, if you're not already following Some Antics, you should! We've got some exciting streams coming up. What I'm particularly excited about is this Friday with Lindsay Wardell. Back in January, Lindsay came on to teach me the basic Elm syntax, but we weren't able to get very far into making, like, real things. So Lindsay's coming back on this Friday at 2pm Central. We're gonna be building Elm apps. So, absolutely follow Some Antics if you want more streams like this and that. Follow us on Twitter.

Alex, thank you so much for gifting that sub! That is too kind. 

Yeah, follow us on Twitter. That way you can keep apprised of all the good streams. And yeah! We will see you all around! Bye, y'all!

<i class="timecode">[01:04:02]</i> **Anthony:** Bye.