**Ben:** Howdy, howdy y'all. Happy Tuesday. I am joined today by Adrián Bolonio. Adrián, welcome to the show. 

**Adrián:** Thank you. Thank you very much Ben. Thank you for inviting me. 

**Ben:** I'm excited to have you on. I'm excited to be talking about GitHub Actions and CI/CD for accessibility testing. But before we do that, would you like to give yourself an introduction? 

**Adrián:** Sure. Yeah, so as Ben said, my name is Adrián. I am a accessibility software engineer working at the accessibility team at GitHub, trying to make the biggest platform for developers more accessible. And not only this one, but our aim or our objective is to make developer tools accessible for everyone. 

I like sharing accessibility topics normally in my Twitter account. And sometimes-- I don't write so many blog posts as I wanted, but I write blog posts in my website. So if you want to give it a read, go there. And I'm so happy to be here, Ben, with you. 

**Ben:** I'm thrilled to have you on. And actually, like, I found you because of one of those blog posts which covered exactly the topic that we're going to be doing. I put a link to Adrián on Twitter. Go follow him, go show him that Some Antics love. Yeah. So about a year ago, just over, it seems, you published a blog post that is about automating accessibility testing specifically using GitHub Actions. 

And so I wanted to talk to you a bit about kind of that process. And first of all, what do you think the value is of automated accessibility testing in general? 

**Adrián:** So, nice question. I think I consider the testing process as a larger process. So we need to consider manual tests same as automated tests, because we cannot forget that only something like 20, 30, 40, maximum 40% of the accessibility issues can be found via automated tests, so we need to put in the same level of manual test and automate tests. 

But why is it so important? This is, as any other thing, if you can automate things that you don't have to do, then you can save time while doing it, you're going to have a more structured way of doing it and you're going to gather information automatically about the code that we are writing, right? So is a super nice tool to prevent putting inaccessible code in production. I would say this is-- our main objective is not to put inaccessible code in production, how can we do it? By testing it before. And we have manual tests of course, but automated test is going to give us this benefit. 

**Ben:** Awesome. Yeah. And so you mentioned that only a certain percentage of accessibility issues can be caught with accessibility testing, or automated accessibility testing rather. Can you kind of talk to what kinds of issues can automated testing surface for us? 

**Adrián:** So it is-- we can always go to the theory, right? So we can throw some piece of code over an engine, Axe, whatever you want to call it. Lighthouse. And this is going to tell you, wait, I'm going to analyze your code and I'm going to tell you what elements of your code are not accessible. So for example, we can see which images don't have a alternate text. And we can do this. 

But what automated tests cannot do, and I'm going to leave artificial intelligence in a different level, is what is the quality of this alternate text? Is the content of the alt text meaningful enough? Because there's one thing that we've seen lately, for SEO purposes. Some companies are using alt text to put keywords, instead of the description of the image. 

So it's going to pass the test. The alt text, the alternative text is there. We are not going to have a failing test on that. But the quality is very important. And this is the point where we need a human to say, OK, this is meaningful enough-- the same with the content of ARIA labels. 

But an automated test is going to tell you that a button with an X, or a link which is a number, or a phone number is not meaningful enough, and you should put another label. You're not going to find this. So this is where we need to, again, put together manual tests and automated tests to count as a larger process. 

**Ben:** Absolutely. And so how does GitHub fit into this? 

**Adrián:** Well, if you have your code hosted in GitHub-- so you have the GitHub repository-- some time ago, not long ago, GitHub released GitHub Actions. So GitHub Actions are workflows. It's a list of tasks that you can execute on demand. 

And this on-demand, you decide when to do it. So you can do it in a commit. You can do it every time that you push. You can do it in a pull request. You can do it in several occasions. 

Today, we're going to see how to do it in pull requests, for example, which is the tool that we have to review code. And with these GitHub Actions, we can execute different tasks. And what we want to execute are CLI tools, Command Line Interface tools, like any accessibility engine, or any tool that you can run in your terminal. Now, we can do it on demand on the GitHub repository. 

It's basically having your CI/CD, your small CI/CD within your repository. You can do a bunch of things. Actually, you can do it as a CI/CD. You can use it to release to your environment, you can use it to run tests, or run checks, other checks, whatever you want to do it. 

In this case, we're going to use it for accessibility testing. This is the power of GitHub Actions. You can really run a lot of things. 

**Ben:** So we're going to be running our automated tests as part of the pull request process. So I guess, the thinking here is that I, or anyone else in my project, could open up a pull request and automatically, we're going to run these tests. And so I don't have to think about that. I don't have to remember to do it. It's just done for me. 

**Adrián:** Exactly. And the good thing is you mentioned your repository. So we are talking about open source, here. We're talking about a repository that is public. And someone else can create a pull request, because of course, this is the power of open source. The community can benefit from your project, but can contribute to your project. 

So you want, in your project-- because open source doesn't mean bad quality, you want a good open source project with a good quality. And you want to be sure that every pull request that someone does, they need to think in accessibility as well. 

So you can create a bunch of documentation. We know that we scan internet. We don't read internet. So we scan. 

So documentation is super good, but we need to read it. Some people would not read the documentation, but we need to. We need to understand this. 

So the best way that you have to control an incoming pull request is automating it. It's what you just said. You don't need to care about taking every single pull request. You have a GitHub Action that does it for you, every time that someone does a request. 

And then, you just go check the code. All checks are done-- that means that the automated part of the tests are good. I would check a couple of things in the code. And if both things are good, you can go to production. 

**Ben:** I love that. I had never considered the thought that the automated accessibility testing as a part of CI/CD It's not just a time saver, it's also, in a way, a communication tool. It's a communication tool specifically for exposing the requirements of a project, in this case, that our project needs to be accessible, for folks who very likely don't have all the same context that you and I do when we're setting up the project. That's very cool. 

**Adrián:** Exactly. Exactly. And these tests are going to give you some information. So it's not going to tell you, look, it's wrong. It's going to tell you, look, it's wrong because of this one, and you can fix it like this. 

I like the idea of the communication. We can include in the GitHub Actions-- I don't know if we're going to have time today, but this is something that we can think about for the future. Since GitHub Actions are workflows, we can execute any communication tool command here. So we can post the message in Slack, in Microsoft Teams, in Telegram, in WhatsApp, if we have a server for that. So we can send messages To say, hey, wait. This pull request that someone created for you has this error. Go check them. So we can use this, as well as communication within the project. 

**Ben:** Absolutely. I think this is great. This sounds very promising. I say we go ahead and dive into writing some of this ourselves. 

**Adrián:** Great. 

**Ben:** I'm going to start sharing my screen. 

Yeah, so first of all, I put a link to his Twitter in the chat earlier, but I'll do it again, because I'm a kind and benevolent stream host. Go follow Adrián on Twitter. 

And also, if you're looking to follow along with some of the ideas of this, here is the blog post we were referring to earlier that Adrián's published on this matter. And yeah. Let's go ahead and get started. 

So I've got my terminal. And I'm just going to create a new project. I think it's npm create. I might have gotten. 

**Adrián:** Create react-app. 

**Ben:** I think this is how. I always get this mixed up. Because I know Yarn has some shorthand for that. OK, got it. That's what it is. And I'm just going to publish. 

**Adrián:** You need to put a dot. Are you are you already in the folder that you want to create a-- 

**Ben:** I'm creating a new directory for this, because I've got a whole directory structure for-- oh, man. 

**Adrián:** Great. 

**Ben:** Wow. OK. I'll just do npx create-react-app@latest. 

**Adrián:** Or, maybe with Yarn. 

**Ben:** Oh, yeah. Then let's see, a11y-github-actions, if this does it. Yeah, it does it. 

**Adrián:** Right. Yeah. And afterwards, we want to create a repository for that. 

**Ben:** OK. 

**Adrián:** So we want to connect it with a repo where we can make the pull requests. 

**Ben:** I actually do have the GitHub CLI, so that'll make it even easier. 

**Adrián:** Great. OK. So while this is creating, let's have a mental structure of what we're going to do. 

**Ben:** OK. 

**Adrián:** We are creating a React app. Let's understand something. This is not only for React. We are creating a React app because this is what I'm more comfortable with. But you can create an Angular, a Vue, a Svelte, whatever you want, just vanilla, whatever you want to test. 

We need to understand that everything, everything, renders in CSS, HTML, and JavaScript. It doesn't matter the grammar you use. It doesn't matter the framework you use. It doesn't matter if you use PHP and Django, or you use Ruby on Rails, or if you use JavaScript with React. Everything is going to render in HTML, CSS, and JavaScript, because this is the only language that browsers understand. 

So once we understand this, we can test everything. There are different rules for tests different in different frameworks. But this is how we can test everything. 

So we are creating a React app. And what we're going to do is to put a couple of on-purpose mistakes-- let's say, a couple of images without alt, or maybe a div container with an onclick handler, something like that-- maybe a fake button, which is an anchor link with the role "button," something that we can find with those tests. And then, what we have to do is create the GitHub Actions with the proper tests. 

**Ben:** Right. And I think it's because I ran it via npx, but man, is it going slowly today. 

**Adrián:** OK. 

**Ben:** Yeah, What I'm actually going to do is I'm going to bail, because you sent me a link to a repository that has some of the stuff built in. So I think I might just clone that. 

**Adrián:** Yeah, pull it. 

**Ben:** Yeah, let's do that. And I think I'm just going to download it as a zip. And that way, we can set everything up as a new project, as well. 

**Adrián:** Yeah, great. 

**Ben:** Yeah. This'll make things a little easier. 

**Adrián:** This is 14 months old, so bear with the old versions of React and everything. But it should work. 

**Ben:** Yeah. Desktop, do that. Ope. Go and open that up in our editor. And last step, install the dependencies. There we go. 

**Adrián:** Exactly, yeah. 

**Ben:** And there is VS Code. Amazing just how much faster that is over-- 

**Adrián:** Yeah. 

**Ben:** I think Ahh, I'm not on the good network. That's why. Ugh. Rookie streamer mistake right there, being on the less good network. 

OK, so let's take a look at this and see what we've got code-wise. So we might need to clear some stuff out so we can basically recreate it. Oof. There we go. 

So we have an index. The index is going to-- thinking. 

**Adrián:** So the code lives in the App.tsx. So the index is going to render the App.tsx. And in the app, we have the component Image, which is a component in the folder Components. 

**Ben:** It is this one. Yep. OK, so this is just the pretty basic image here. It just renders an img tag using the src, role-- or really just the role and alt that you give it. So not a whole lot going on. 

**Adrián:** Yeah exactly-- it does a plain thing. Very simple component. We can even remove the role. And what's this, just a part of-- I can pass a wrong role and see. But as well, we can see that the alt text here is optional. So if you go back to the App.tsx, the Image component that is rendered in line 13, it's not passing any prop as an alt text. 

So this is a mistake because what is going to render at the very end is going to render an image without an alt text, right? So this is what we're going to have at the very end. As well, what we see here as well is in lines from 5 to 8, we are requiring the @axe-core/react library only if the environment is not production. What is this library going to do? 

This is not an automated library that we're going to use for GitHub, but let me explain a bit what this is going to do. This library is going to use the ReactDOM and it's going to execute the Axe engine from Deque in your application once you run it-- when you do "npm run dev" or "yarn dev" or "start" or whatever your script is. When you go to the browser to see this application running, in the console log, the console of the development tools in the browser, you're going to see the mistakes-- the accessibility vulnerabilities that you're having. They are going to be grouped if you have them multiple times. You're going to have several information about these. 

So it's going to show you the severity level. So if it's minor, if it's critical, if it's major-- sorry, minor, critical, or-- depending on the level of the issue. It's going to be showing which element of the DOM is causing the vulnerability. 

**Ben:** Makes sense. 

**Adrián:** As well, it's going to give you a direct link to Deque University, which is the documentation that Deque put together to teach a bit more on the issue, and what is the issue, and how to solve the issue. So you don't have to look for it-- you have a direct link. So this is what this @axe-core/react library is doing. There is one for Vue, and I believe for Angular, you need to use the @axe-core one. There's not one for Angular, but you can use the tested one, the root one. So you can use them for any other frameworks. 

**Ben:** Good deal. 

**Adrián:** So yeah, let's go and see-- if you want to create a repo and see if we can see the issues. 

**Ben:** Of course it still hasn't finished. Incredible. 

**Adrián:** Yeah. 

**Ben:** Oh, man, my internet sure is thinking about that today. All right. And let's see it go-- Create. So yeah, I'm using the GitHub CLI, which is incredible. I've got a nice little organization here for Some Antics, and I'm going to call this Actions <i class="brackets">[INAUDIBLE]</i>. 

All right, let's see. That all looks good. Yeah. "Create a basic React app," and we'll push it. 

**Adrián:** Great. 

**Ben:** And it lives here now. It will have this. And I think you've already set up some of the actions, so we may start seeing things kick off. 

**Adrián:** No, no, there's no there's no actions in the base one. So where we want to create them is in the pull request so we can see them running. Of course, later when you merge the first requested actions into the main branch, of course-- but just for the sake of seeing them, we would not see them now because there's no actions. 

The GitHub actions live in a folder called .github. So you will see-- so it's .github/workflows. So you obviously cannot see this here because we don't have them. But we have the repository created. Perfect. OK, that's great. But now we need to ensure that anyone who wants to create a branch to this repository-- we will need these actions. 

So what we want to create is a new branch for this repo in your local. So maybe call it-- whatever you want to call it, like "add-actions" or-- 

**Ben:** I'm going to nuke the install here. We're not going to do anything local, I don't think, not today. Git checkout, new branch, call it "add-actions." You got it. OK. 

**Adrián:** OK. So now locally we are in a new branch. OK, perfect. So maybe we want to start creating the actions. So what we need first is a folder called .github in the root of the project, yes. And inside this .github, we want another folder called Workflows. 

**Ben:** OK. And these are magic names that GitHub requires, right? 

**Adrián:** Exactly. So the same as you want to create issue templates or PR templates, those are going into the .github folder as well. So Workflows is the folder where GitHub is taking the actions. Great, now actions. The actions are YAML files. So what we want to create is a new YAML file, so let's call it axe.yml, so Axe YAML, perfect. 

And now every time-- so now we need to tell the action what to do. But this is the action. The action-- that's where the workflow, they set off tasks that we are going to create. It's going to be written in this file for Axe. If we want a new action, we can write as much actions as we want. 

But let's start first with this one, OK? So we need to start giving it the name-- so "name: axe." OK, so this is the public name that is going to be displayed. And then in a new line, we want to say on colon. And we want to execute this action, on. And then we need to say-- now here-- so in the next line-- and if you indent it with one tab, we want to say, every push or every pull request. 

So let's say in both push and pull requests. So we're going to say push colon. And again, enter and indent it two times, so now again indent it after push. And then I'm going to say which branches. So we're going to say Branches because we can say, OK, we want only for one branch or whatever. So this is going to be an array of branches. So it's going to be an array. 

**Ben:** OK, so are you using the bracket notation or the bullet notation in YAML? 

**Adrián:** Yeah, like this-- square brackets. And we're going to say Main. You're going to say "main" because we only want this to happen in main. I think you don't need the quotes. So we want this to happen in main OK? So this is going to say that execute this GitHub Action every time that you push a branch to main, so every time that you push to the branch main, which is pretty much the same. 

But we don't want this only. We want this to happen as well in the pull request. So do exactly the same as push, but instead of "push," you put "pull_request." And the same branch as main. So every time that we create a pull request that the destination is main, this action is going to be executed. Perfect-- now we have a name, and we have when it's going to execute it. Now the next node is going to be "jobs" as a root. So in the left side. 

**Ben:** And then what did you say it was called? 

**Adrián:** Just "jobs." 

**Ben:** "Dot"? 

**Adrián:** No, no, no, like "jobs" in plural. 

**Ben:** Oh, "jobs," "jobs." I'm sorry. I apologize. I'm hard of hearing. 

**Adrián:** No, Jobs. 

**Adrián:** Got it, got it, got it. 

**Adrián:** No. OK, good. So now we have the name, we have when it's going to happen, and now we're going to say what jobs are going to be executed, right? So we want to give a name to the first job, which is Axe, so you can put Axe colon. 

**Ben:** Oh, Axe colon, you said? 

**Adrián:** Just Axe and colon, yeah, so just Axe. OK, perfect, and now we are going to say what things are going to run. OK, so the next indentation-- we need to specify the environment. So the environment we say runs-on. So it runs on, so runs-on ubuntu-latest. 

So we want this to run in an Ubuntu latest machine, in this, and GitHub is providing it. This is a virtual machine, so you need to care about this. And the next thing is going to be steps. So now we have, again, the name of the action, when it's going to happen, the jobs are going to be named Axe. Those jobs are going to run on Ubuntu latest machine. And now we're going to give the steps that this needs to run. 

OK, so now after steps, we need to use dashes-- not indentation. In the same level of steps, we need to use dashes like a list. So we said Uses. So these Uses are actions/checkout@v2, like version 2. 

**Ben:** Wait, checkout like this? 

**Adrián:** @, checkout@v2, like an email. 

**Ben:** Oh, checkout@v2, OK. 

**Adrián:** Yeah, exactly, or like @latest, like you did before. OK, so we are using the Actions. The thing is-- everything that I'm going to say now, it's just very predefined on-- we want to run a Node.js action. So this is going to be-- if you go to Action-- we can see later how to create an Action from GitHub in a more user interface view. 

Then the next one-- same level as Uses-- -name. 

**Ben:** Dash name-- like this? 

**Adrián:** Yeah, exactly. -name. And then we can say, Use with capital U, if you want. This is just really the name that is going to be displayed. So Use Node.js 12.x. So we're going to use a version of Node 12. 

I know there is a much newer version-- again, bear with me because this probably is a bit old. After Name, the next one is Uses. Now without the dash because we already said Name. You can give a name to the step, so just like-- exactly, Uses. Actions/setup-node@v1. 

**Ben:** You said simple node? 

**Adrián:** Setup node. 

**Ben:** Oh, setup node, OK. 

**Adrián:** Yeah, setup-node@v1. 

**Ben:** V1. 

**Adrián:** Yeah, exactly. And then the next one-- with. And now the next one indented-- node-version. So go next one, and then indented node version-- so node-version colon 12.x. 

**Ben:** Oh, I see. Node-- 

**Adrián:** Just one. 

**Ben:** Yeah, node-version and then 12.x. OK. 

**Adrián:** Yeah, exactly. So we are saying that this is an action. This is going to use Node 12. So we are saying that the action is in Node and with the version 12.x. So the name is purely, again, just to be displayed. And then-- now we have another dash. 

So go to dash and say "run." "run." We want to run "npm ci." So we want the common interface on NPM. The next one is "run: npm run build." 

**Ben:** "npm run build"-- oh, I'll put a colon there. 

**Adrián:** Yeah. And then after the build, you want to flag it with --if-present. 

**Ben:** If-present? 

**Adrián:** If-present. So we need to run it-- so we need to build it if we have this command. The next one is the one that is going to run the application. So the next one is going to run "npm start" or whatever script your application starts with, so it could be "dev." "npm run start &"-- so afterwards, ampersand. 

And the next one is very important because if we put "npm start," it's going to run. That's good. But since we want to run it in the localhost, but we don't know which port with localhost or whatever-- we want to specify "npx await-on" and then http://localhost:3000. in the 3000. 

So it's the same that you would see in the browser, right? So localhost:3000, OK? So now we have our application running in the 3000, then we want to include a new one with a name. I mean, again, the name is optional. It's just like again to see maybe a bit off-- and we can say "Run Axe" just to see that this is running Axe, OK. 

And now without the dash in the same level of names so which is Run colon, and you have to say pipe. And then in the next line, npm install because again, we want to run Axe engine, right? So we want to install it first, so npm install -g because it's globally in the machine that GitHub is giving us, OK. @axe-core/cli. 

**Ben:** CLI, OK. Yes. 

**Adrián:** Yeah, not React this time because React-- we already discussed. React is the one that is going to execute it inside React, but we want the command line interface here. And the next one is the final one which is "axe http//localhost:3000." OK, so now we have running. But after this 3000, we need something very important that I made a mistake the very first time that I make this, which is this action is going to run all the tests, but it's not going to give a success or a failing. 

**Ben:** Ohhh, OK. 

**Adrián:** Because Axe has a flag. So after "localhost:3000" at the end, you need to do "--exit." 

**Ben:** You said execute? 

**Adrián:** Exit. 

**Ben:** Oh, exit. Got it. 

**Adrián:** So if it fails, then exit. So this means if the test fails, then please provoke or cause an error here so I can see a red x, OK? Good. This is the GitHub Action completed for Axe. 

**Ben:** Nice. Shall we go ahead and commit this, push it up, open up a new pull request? 

**Adrián:** Yeah, we can create this one, and then afterwards, we can create a new one, and a new one, and a new one, but let's give it a try first. 

**Ben:** Yeah, just to see one working. Push, origin, add actions for the first time you're pushing. Oh. 

**Adrián:** Just get that push. Just get the push. It's going to give you the command, and you can-- 

**Ben:** Oh. Yeah, I've actually already configured it to automatically do that. OK, cool. Open up a pull request. 

**Adrián:** Perfect. We can open a pull request. 

**Ben:** "Add accessibility testing workflows to CI/CD," and create. 

**Adrián:** Yeah, and now what we should see is this test running now. So I might be a bit delayed because I see your screen with a bit of delay, but there it is. We see this GitHub Action running. So you see Axe in a pull request. So we can click in details and see these running. 

**Ben:** All right, and it's gives even our names and everything? That's awesome. 

**Adrián:** Exactly, that's what I mean. So you can see that the names are respected. If you don't put a name like in run npm ci, then you don't have a name, of course. But you can see in whenever run axe is going to run, it should give us an error. It should, I said. 

**Ben:** Yeah, so it told us that it failed-- I mean, and because it said it failed, like it gives you the option to like rerun. But in this case, it actually is supposed to fail, so -- 

**Adrián:** Yeah, but it's running-- OK, what is the mistake? "npx install command await-on-- command not found await-on. Is it the await-on? 

**Ben:** Oh, is it "wait-on"? 

**Adrián:** No, this is wait. 

**Ben:** Oh, it's just wait? 

**Adrián:** It's not await but-- 

**Ben:** Oh, it's just wait, OK. Like "wait-on," like that. 

**Adrián:** Yeah, exactly. Yeah, exactly, "wait-on." 

**Ben:** OK, got it. And let's try this once more. 

**Adrián:** But this is a good use case. 

**Ben:** Yeah. 

**Adrián:** Every time that is a failing thing, it doesn't matter if it's an accessibility thing, you can do GitHub Actions for whatever you want. But if you're looking for something and it makes a mistake, well, that's good. You see it in the pull request. 

**Ben:** Yeah, yeah. And like, instantly. I didn't have to remember to run the script, remember to run the tests or whatever, it just-- it ran and it was going to let me know like in this view if something failed, if something broke. 

**Adrián:** Exactly. And since we said that this GitHub Action needs to run in every pull request, that means that every time that you update a pull request, it's going to run again. 

**Ben:** Yes. Yeah, it's rerunning the Axe workflow right now. 

**Adrián:** Exactly, so if you click in details and we can see this running. 

**Ben:** Hang on. 

**Adrián:** But this isn't-- 

**Ben:** Weird that says await-on again. 

**Adrián:** No, but this is the other one. This is the Axe. Really? 

**Ben:** Yeah. 

**Adrián:** Did you push it? Yeah, I mean-- 

**Ben:** Yeah, it might just-- the GitHub interface might have taken a while to update or something. Yeah, because it's queuing the check so it's not quite ready for it. OK, cool. All right. In the meantime, did you want to go ahead and add in some other workflows? 

**Adrián:** Yeah, Yeah. 

**Ben:** And I imagine this is going to be a whole lot of like copy and paste. Like now that we've got the scaffold for one, we can probably make use of a very similar structure for the other. 

**Adrián:** Exactly. So if you want to clone this file for example, and create one, say, pa11y. So let's try with pa11y, OK? pally. I don't know-- but good question. Ben, do you say "alley" or do you say "a-eleven-y?" 

**Ben:** I find myself saying "alley," and so in this case, I would call it "pall-ee." But like, I flip-flop, you know. It never feels totally consistent. And every accessibility practitioner pronounces the numeronym differently. 

**Adrián:** I started calling it "P-A-eleven-Y" and "A-eleven-Y," so I think I continue with this one. OK, so we have everything we needed until literally line 19 right, because everything is-- OK, Yeah, we need to change the name of course, and then the line 8 as well because the jobs is in the line number 8 is axe as well. 

**Ben:** Oh yes, so it is. Yes. 

**Adrián:** OK, good. So now instead of "npm install @axe-core/cli," we just need to say "npm install pa11y," just pa11y. So this is the name of the library. 

**Ben:** OK, and we're globally installing pa11y, right? 

**Adrián:** Yes, exactly. Because we are working in a machine that we don't know. This is not our machine, so we need to install it globally. And same as the Axe, we just need to say "pa11y." The good thing with pa11y, in difference with Axe, is that we don't need the exit command because pa11y already exits if it's a failing, OK? 

**Ben:** OK. 

**Adrián:** And that's it, everything works the same. It's says we just have a pa11y <i class="brackets">[pall-ee]</i> or P-A-eleven-Y engine running. But before you push, let's go to the-- Yeah, you're pushing it. It's OK. It's going to run again, don't worry. But you will see now two GitHub Actions running. OK, and we see them because they are recognized. That's good. And if you want to click in details in one. You choose the one that you want. 

**Ben:** All right. 

**Adrián:** OK, so we are running the GitHub Action. github.com, SomeAnticsDev. Accessibility. I'm trying to go to this repository but I can't get SomeAnticsDev. 

**Ben:** Oh yeah, let me give you the link. Here we go. It's in the Zoom chat. 

**Adrián:** Yeah, good. I just want to follow along as well what are you doing. 

**Ben:** Sounds good. It is running pa11y right now. 

**Adrián:** Great. OK, so it's running. Bum-bum-bum. 

**Ben:** And it failed, Yeah. Oops, it was there, but it said like, hey, your image element is missing an alt attribute, et cetera, et cetera. 

**Adrián:** OK, so we have the use case correct, right? So the image which is rendered in line 25 over there, so you see img, src, static, media, blah, blah, blah, width 600 pixels but there's no ad. So let's analyze first this in comparison with axe. 

What do we have? In line 22, we have the error in a bit of human readable, like, okay, "The Img element is missing an alt attribute," and then a bit of explanation. "Use the alt attribute to specify a short text alternative." The next line, we have what principle of the WCAG 2 AA it is violating, so the H37. We can see this here. Then we have the DOM structure, and we have this specific element of "img." This is what we have from the pa11y example, right? 

If you go back to the pull request, then we can see that the Axe action has failed as well. You would see it immediately. 

**Ben:** I need to-- I'm just going to refresh. GitHub's cache got weird, I think. There we go. Yeah, so if I look at the Axe failure-- 

**Adrián:** Yeah, exactly. You will have a similar info but a bit different because it's a different engine. So what we have here is a violation of image, then you have a bit of information. This is the link that I was telling before. You see there is a link from Deque University so you can see-- you can follow this link, and then see what is the issue and how to solve the issue. So you can read more about this issue. So Deque put a lot of information about this. 

OK, then Axe is finding more issues. So for example, there's no landmark of "main" inside the HTML. As well, there is no h1 in the HTML, and there's no landmark. Not only there's no main, but there's no regions or anything. So we have here more-- four accessibility issues detected. 

**Ben:** Yeah. 

**Adrián:** So again, Axe is a bit more strict looking for issues than pa11y. So what I recommend-- I remember I gave a talk in axe-con about testing, and one person asked me if it is better to choose just one or more. The more tools you use, the biggest amount of information you're going to have, so you're going to gather more information. 

So if you only have pa11y, then you will skip those issues that are true. You don't have an h1, you don't have a main landmark, you don't have any region landmarks. So I think it's very beneficial to use the different tools, right? 

**Ben:** Absolutely. 

**Adrián:** Good. So do you want to go to the final one, which is not a testing library but a reporting library? So maybe we can do one more GitHub Action? 

**Ben:** Yeah! 

**Adrián:** Good. So just clone the file the same. We need exactly the same. 

**Ben:** OK, Yeah, I'll just-- Yup, and what do we want to call this one? 

**Adrián:** OK, we want to call it Lighthouse. 

**Ben:** God, that copied the wrong thing. Oh man, Oh no. Don't copy the node_modules. 

**Adrián:** Like, two gigas of node_modules. 

**Ben:** Yeah. Oof, that would be the death of me. OK. lighthouse.yml, all right. And we're going to do our clever renamed jobs here. 

**Adrián:** Yeah, just change it. We will adapt the last one if you want. It's the lighthouse, perfect. OK, now we want to install globally, and I'm going to say @lh -- Lighthouse -- lhci, so Lighthouse command interface, slash, cli@0.7.x. Again, compared with the version, probably the newer version works good. And instead of pa11y localhost -- we don't need this -- and we just need to do "lhci autorun." 

**Ben:** "lhci," and then what? 

**Adrián:** "autorun." 

**Ben:** Like thiiis? 

**Adrián:** "autorun." Yeah, "autorun." So it's like the runs-- Yeah, yeah, exactly. Without the localhost, you don't need the localhost. 

**Ben:** OK. 

**Adrián:** And one-- let me check that. actions, setup, with npm. OK, good. So at line 16, npm run build. Wait, wait, what? "npm ci," "npm build." OK so instead of-- so we don't need line 16 and we don't need-- actually, we don't need line 16 and 17. We're going to create a new one. 

**Ben:** OK, like-- oops, that was too much. OK, so we're removing all of this? 

**Adrián:** Yes, and then after the Node version 12, so we create a new one, which is "run," so like, with a dash at the beginning. So let's go to the-- Yes, and then "run." And in the next line, "npm install" and next line, "npm run build." Both "npm install" and "npm run build," can you indent it once? 

**Ben:** Yes. OK. 

**Adrián:** Yes, exactly. So we don't need to do "npm start" because again, we are not starting the application, we are not having a localhost. This is enough for Lighthouse. OK, let me check again. Blah, blah, blah. "npm run build." I believe this is enough, so let's push this one and see what's happening. 

**Ben:** You got it. All right. 

**Adrián:** Good. So now, you go to the pull request and the GitHub Actions are running again. And if we wait a bit, we're going to see something-- we're going to see something curious. 

**Ben:** OK, very excited. 

**Adrián:** So we are going to see how the Axe and pa11y are going to fail, but Lighthouse is going to pass. It's going to be a green tick. So if you go back to your pull request and see the result just directly from the pull request, we can see how the other ones are going to fail. 

**Ben:** Yeah. 

**Adrián:** Let's see. 

**Ben:** I believe in it. In the meantime, I wanted to extend an option for the chat to reach out. If you've got any questions for Adrián, feel free to put them in the chat. Let us know, and we'll make sure to get to some of those. 

OK, Axe and pa11y, they both failed. Lighthouse is still running, but we should expect, soon enough, a green checkmark. 

**Adrián:** Yes, exactly. Well, I hope it is, but let's see if everything is running smooth. 

**Ben:** And then also, like, there are ways to do this-- I think you mentioned at one point that there's a way to do this through the GitHub user interface is to add some of these things? 

**Adrián:** Yes, so do you want to do it in the meantime? 

**Ben:** I think this should probably wrap up soon. I'll just click Details. But that might be a good next step to see. It seems like Lighthouse might have failed. 

**Adrián:** Yes. Oh, interesting. OK. OK, interesting. 

**Ben:** There's our alt failure. 

**Adrián:** Yeah, I see but the failures are not because of accessibility as far as I see. OK, there's one. OK, it might change. It might have changed because the-- I have to say that Lighthouse now is called web.dev. So it's like, they changed the Web Vitals, which is good actually. What I wanted to show you is, like, Lighthouse is not a testing library. It's a reporting library. So the reports normally goes and you have to analyze a report by yourself. 

Now it's a good surprise for me because now they give scores and they give a failure or success, which is very good. So if you see in line 65 of these console, you will see the-- 

**Ben:** Line 65 you said? 

**Adrián:** Maybe 65 for me, but if you go up to the beginning of the Run Lighthouse, Yeah, there it is, line 41 for you. You can see "image-alt failure." 

**Ben:** Yes, OK. 

**Adrián:** So of course, there is a bunch of other things that are failing in for example, content width, which is not technically an accessibility issue. It's just a matter of, hey, you don't have a responsiveness or maskable icon so you don't have an icon that is-- that you don't have a manifest. A lot of things that are failing. 

So again, one extra tick that your application is healthy, not only accessibility or talking about accessibility healthy, but responsiveness, performance, a lot of other things -- service workers for a progressive web app -- a lot of things that you can check with that Lighthouse that you can include in the GitHub Action, and you can prevent code that is not healthy in many other aspects to go to production. 

So we can check a lot of things with GitHub Actions, not only accessibility, but part of the accessibility checks. So yeah, I think we managed to create all the GitHub Actions that we wanted to create. 

**Ben:** OK, Yeah. And I could see how just being able to-- like, if this were some incredibly awesome open source project, right, just seeing the fact that these checks have failed is a good signal to me of like, hey, I shouldn't do anything with this. I don't want to YOLO push this into the project. It looks deliberately very angry at me. Like, this is usually a big green button, but now it's gray. Like, the GitHub interface very much so does not want me to merge this in because it's failed. 

Yeah, I'd love to take a look at if there's a way we can do this through the user interface too. How might we go about that? 

**Adrián:** Yes, I'm going to-- Yeah, I want to give you a link over the chat because this is something interesting as well. So this case is not really a GitHub Action, it's an application that you can attach to repos from GitHub. And Deque has an Axe linter that you can include in your repository. So it's going to analyze as well your pull request as, let's say, as a reviewer for you, right? So you can install it for free in your account or your other account if you want. I think it's the Some Antics maybe. 

**Ben:** Yeah, I see. OK, got it. Install it for free? 

**Adrián:** Yes, install it for free. And well of course, it's free. 

**Ben:** OK, interesting. There we go. It's-- I don't know. I guess organizations are weird, but OK. Yeah. 

**Adrián:** Yeah, but the problem with this one is this is going to run in your repositories and not in the Some Antics one, maybe. I'm not 100% sure. Can you click in only select repositories instead of all repositories? 

**Ben:** Oh, yeah. 

**Adrián:** And let's see if you have it there. I don't know. 

**Ben:** Probably not. 

**Adrián:** No, no, probably not. OK, but if you're doing this one from a personal account, you can install this Axe linter. Maybe you want to go to the pull request that I have open in my repository. I think you have it in the third tab. 

**Ben:** Yes, OK. 

**Adrián:** If you go to the pull request that I created, which is exactly the same as the pull request that you created, this is to add GitHub Actions. This is a test repository that I have. And I have this linter installed. Every time that you make a pull request, apart from running the GitHub Actions, you will have these kind of comments from the Axe linter reviewer. 

In this case, I included a div with a role that is not correct. So this reviewer is going to tell you, hey, there's a potential accessibility issue here. I'm not going to tell you that you need to change it, but you need to check it. So it is a bot that is going to scan your code. Of course, this bot-- it doesn't go through the rendered code. It's a linter of course, so a linter only takes the code that you write, not the code that is going to be rendered. But it's another tech where you can put on your Some Antics organization. 

**Ben:** Absolutely. And I think I've seen linters like this, for instance, with, like, inclusive language checks that'll look at your code and go like, "Hey, maybe this isn't, like, the friendliest wording. Maybe consider using alternate wording." Like, it's not going to halt your pull request. It's not going to throw an error that you need to resolve. This just going to make a comment on there of like, hey, this is a thing you might consider looking into. 

**Adrián:** Yeah, exactly. 

**Ben:** All right. Well, cool! Is there anything else you wanted to show off or talk about during this time? 

**Adrián:** No, I think maybe if you want to go to your repository again and click in Actions, you can as well-- so if you-- I think it's like the fifth tab maybe. 

**Ben:** Oh, yeah. OK. 

**Adrián:** And if you click on the tab Actions, in the repository one. 

**Ben:** Like up here. 

**Adrián:** Yeah, exactly. So you will have here for every action, so we have Axe, Lighthouse, and pa11y because we name it like this, you have a history of what has been done and can always take a look on and take this. And there is a small button called new workflow in the lifestyle, so you click in there. This is the user interface that I was talking about first. Like, this is how to create an action. 

So you can start here for Node.js. Actually, there's like the sixth one, and if you click and configure, you will see that the action is very similar of what we wrote manually, OK? 

**Ben:** Yeah, it has some extra stuff, strategy, and stuff like that. 

**Adrián:** Yeah, exactly. Extra versions, and maybe there's a new grammar but very similar, right? 

**Ben:** Absolutely. 

**Adrián:** This is of course-- and then you can see in the line 31 that this is run in npm test. So this is an action that is then is going to run your unit tests. So if you have a unit test using for example Yes axe, which is a axe library for Yes, it's going to run the test and it's going to fail. So your unit test has failed. You cannot put this code in production. 

**Ben:** OK. 

**Adrián:** So this is how you will create GitHub Actions from GitHub directly. And there is a lot, if you go back to one page, there's not only note that you can literally-- there's a market there. So you can create your own ones and put it there for the people to use. But there is a lot. You see deployments and security continuous integration. There is a lot. So you can really do a lot of things with the GitHub Actions in your repository. 

**Ben:** That is very cool. That's very cool. Awesome. So much to do there. 

**Adrián:** Great. 

**Ben:** All right. I think, probably that puts a tidy little bow on this, huh? 

**Adrián:** Yeah. 

**Ben:** Awesome. Adrián, thank you so much for joining the stream today. I'm so glad we were able to have you on. Y'all, go follow Adrián on Twitter. And stick around, chat. We are going to find someone to raid. 

Also, while you're following people on Twitter, go follow @SomeAnticsDev on Twitter. That way, you can keep apprised of all the cool streams. 

**Adrián:** Absolutely. 

**Ben:** Yes. I'm really excited for next week. I won't actually be the host for that. Instead, Stephanie Eckles is going to be guest hosting. She's bringing on Sarah Higley. Together, the two of them are going to be diving into quote, "weird ARIA." So diving into how to make complex interactions make sense in the world of ARIA attributes for HTML. 

So I'm incredibly excited to have Sarah on, and to have Steph guest host. I'm super looking forward to that. So follow the stream here, follow the stream on Twitter as well to keep apprised of all those news. And yeah, I guess I will be seeing you all around. Thank you so much for being here, everyone. Bye y'all. 

**Adrián:** Thank you, Ben, for your invitation. 

**Ben:** Absolutely. Have a good one y'all. 

<i class="brackets">[MUSIC PLAYING]</i>