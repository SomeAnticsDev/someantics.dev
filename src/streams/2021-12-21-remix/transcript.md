<i class="timecode">[00:00:12]</i> **Ben:** Howdy, howdy, y'all. Welcome back to Some Antics. It is another Tuesday, another day talking about building great user experiences for the web. Today, I am joined by Chance Strickland. Chance, hello! Welcome back to the stream! 

<i class="timecode">[00:00:27]</i> **Chance:** Ben! Always great to be here. 

<i class="timecode">[00:00:30]</i> **Ben:** Always great to have you on!

<i class="timecode">[00:00:31]</i> **Chance:** Really looking forward to it.

<i class="timecode">[00:00:33]</i> **Ben:** Yeah, absolutely! And before we dive in, I want to thank Michael Chan for resubscribing, and I want to thank Jason for the raid! Thank you so much. That is awesome. Welcome, everyone. If you're unfamiliar, Some Antics is a weekly Twitch stream where I bring on guests from around the webdev industry and we talk about, you know, building great user experiences with the web, with a focus on accessibility and core web technologies. So if you're coming from Learn With Jason, the format should probably be fairly familiar, just with a focus on, like, that accessibility and core web tech. 

<i class="timecode">[00:01:09]</i> So, yeah! Before we dive into what we're doing today: in case folks haven't seen you around, Chance, would you like to just kind of introduce yourself a bit?

<i class="timecode">[00:01:21]</i> **Chance:** Sure, yeah! So my name is chancethedev on Twitter, or chancethedev anywhere. I guess my legal name is Chance Strickland, but nobody ever remembers that, so I like chancethedev. It's nice and snappy.

<i class="timecode">[00:01:33]</i> But I work for Remix. If you don't know about Remix, Remix is a React framework. We just open-sourced and released to the public a few months ago. And we're at version 1.1.1 right now — make a wish. So, we're really excited about Remix. Remix is also really focused on web foundations, web fundamentals, so I think it makes a great pairing for this podcast. And I'm really excited to dive into some of Remix's APIs and how we think we enable you to make better websites. So, really excited about this. 

<i class="timecode">[00:02:05]</i> **Ben:** Awesome! Let me go ahead and start sharing my screen! And if you aren't already following Chance on Twitter, you absolutely should — @chancethedev. And then we're going to be talking about Remix, and you can find out more about Remix at remix.run!

<i class="timecode">[00:02:26]</i> Excellent, yeah! Cool! So let's go ahead and, I guess, just kind of dive in. So, you sent me a repo ahead of time and I had to do some setup-type things. This repo will be available later, but my understanding is it's not QUITE ready to start, like, just dropping links places. 

<i class="timecode">[00:02:49]</i> **Chance:** Yeah, so just for everyone's reference — I've already apologized a million times to Ben — but my life is, I would describe, nothing short of chaos at the moment. I've got just, like, lots of externalities that are just… let's just say I have not made as much progress on this code as I'd like to. But that's okay. We're going to do it live, and we're going to still explore all the important things. But eventually — and by "eventually," I mean hopefully this week — we'll get everything cleaned up and published so that we have a solid foundation for sharing with everyone.

<i class="timecode">[00:03:27]</i> **Ben:** Alex, thank you for the sub! Super appreciate it.

<i class="timecode">[00:03:30]</i> Yeah, so I had to do a few setup things. These are environment variable things, because we're going to be doing some database stuff. But besides that, I have not really had the chance to do anything with this codebase. But just, I guess, this caveat of, we are working with some scaffolding that's already been built out, mainly so that things like database connections and styles — stuff, that's not really today's focus — just so that that stuff could be squared away ahead of time. So, yeah!

<i class="timecode">[00:04:01]</i> **Chance:** Yep. So, and to build on that, too… So what I wanted to do for this stream — I know a lot of streams, you'll build these small little things, which makes sense because you've got, what, an hour, hour and a half, to get through something, and it's like, you can't build a production app in an hour and a half. You're just not going to do that. So, like, what I've got here, what I'm hoping to have here is a really solid starter to what would ultimately be a production-ready app! And we're not going to build the whole thing in an hour, hour and a half. What we're going to do instead is we're going to take a project that's already set up and we're going to just walk through some of the code and explain what's happening and try and explain some of Remix fundamentals that way. And then, when we get to the end of that process, what we'll do is we'll add a couple of new features that will also help us understand some of Remix's core features. 

<i class="timecode">[00:04:47]</i> **Ben:** Alright, cool! So, where should we start? Should we be diving into the code, or should we pull up this project? Like, should we be talking about what Remix even IS in the first place?

<i class="timecode">[00:04:58]</i> **Chance:** Yeah, so Remix at its core is a server-side rendered React framework. If you are familiar with frameworks like Next.js, it's similar in a sense, but also not really. I would say it's more comparable to full-featured web frameworks. Like, if you're a Ruby dev, you might come from Rails. If you're a PHP dev like myself, you might come from Laravel. These full-featured server web frameworks, these full-stack web frameworks to really help you bootstrap a server-side rendered application really quickly and efficiently and provide a solid user experience. So that's, at its core, what Remix is trying to be and what I think we are.

<i class="timecode">[00:05:43]</i> And so, yeah, if we get started here… the first thing you'll do if you're working in any JavaScript project is go and install your dependencies, which I believe you've already done. But just pretend like we're starting from complete scratch and go ahead and run `npm install`.

<i class="timecode">[00:05:57]</i> **Ben:** Yep!

<i class="timecode">[00:05:59]</i> **Chance:** And we've got a couple dependencies that are going to help our dev process a little bit. We're going to run `npm run dev` as well, which is going to start up our web server using PM2. PM2, for those who don't know, is a process manager. It allows you to run multiple processes concurrently with some added configuration options. If you're used to running the `concurrently` npm package, it's sort of similar but a little bit more full-featured. So we're going to be running a few processes simultaneously.

<i class="timecode">[00:06:29]</i> Unlike some other tools that you might be used to in the React ecosystem, Remix sort of pulls back a little bit on some of the build tooling abstractions. So we don't bundle your styles automatically. We don't abstract any of that stuff. We expose that directly to the user so you can handle compiling all your styles with whatever tooling you want. You wanna use Sass? You can run Sass. You wanna use PostCSS? You can run PostCSS. You just wanna load some plain ol' CSS stylesheets? You can totally do that, too. What we're doing here is we're running a process that's going to compile a lot of our styles using PostCSS so that we don't have to worry so much about modern syntax and that kind of thing. But other than that, it's a pretty light process here.

<i class="timecode">[00:07:11]</i> And we're also going to run our server as well on a separate process. So we're running an Express server on one process, the Remix dev server in another, and our CSS processing on another. And that's what we're doing now. So if you want to open up localhost, port 3000, we will… In a browser, sorry.

<i class="timecode">[00:07:29]</i> **Ben:** Yep!

<i class="timecode">[00:07:29]</i> **Chance:** Yeah, we will see our application! 

<i class="timecode">[00:07:34]</i> **Ben:** Alright!

<i class="timecode">[00:07:35]</i> And thank you to everyone who's been following. jFeliWeb, Drumpy, thank you for following. Ben, thank you for the sub.

<i class="timecode">[00:07:42]</i> And I see a few people talking about our sweaters. I actually do want to highlight our sweater. I have to, like, kind of stand up for this. I am wearing a T-rex sweater. The T-rex is wearing the same sweater. If you look carefully, you can see that the T-rex's little claws are poking through the sleeves. So, just so you know, Christmas isn't just the brand today. We're still going all in on T-rex Christmas. So, just had to do that. 

<i class="timecode">[00:08:10]</i> **Chance:** Yeah, and I'm actually feeling a little left out because I scrambled to find this hat, but I have a sweater I really love, and it just can't find it. But it's a green Christmas sweater with the leg lamp from "A Christmas Story" on it, and it's, like, my favorite thing ever. And tragically, you'll just have to imagine it in your head and pretend that I look way cooler than I do. But right now, Ben has got me on the Christmas game. 

<i class="timecode">[00:08:32]</i> **Ben:** Bubbz, thank you for the sub. Yeah, so — and also T-rexmas, I think that is the official name for this event!

<i class="timecode">[00:08:39]</i> **Chance:** <i class="brackets">[chuckles]</i> I love that.

<i class="timecode">[00:08:40]</i> **Ben:** We are celebrating T-rexmas.

<i class="timecode">[00:08:43]</i> Yeah. Cool! So I've got this little sign-in form. I don't currently have an account.

<i class="timecode">[00:08:50]</i> **Chance:** Yeah! So before we talk about the sign-in form, let's just talk about what just happened, right? Like you went to localhost:3000, and then it sent you to this sign-in form. How did we do that? So what's actually happening? So if we go back into VS Code for a moment. Let's just walk around a bit.

<i class="timecode">[00:09:08]</i> **Ben:** Okay!

<i class="timecode">[00:09:08]</i> **Chance:** So the first thing that we want to note here is that Remix works by various conventions, and one of the conventions that we use is we have this `app/` directory. And if you open up the `app/` directory, just like its name suggests, this is sort of where all of your app code lives.

<i class="timecode">[00:09:25]</i> So right off the bat, when we run… when we open this URL in the browser, what's actually happening? So we have this entry server file and this entry client file. And as they might suggest, these are sort of the entry points for both our client and our server code. The server, as you might guess, is our server! It's just a plain old Express server, and it handles all the routing and it handles everything that a server would normally handle. And there is a, like, Remix wrapper for handling all of the requests to our server. And it's pretty straightforward, but the client code is where we hydrate our app. So if you're used to working in a React app, if you're rendering it on the server, you're going to render it once on the server with some ReactDOMServer methods, and then you're going to hydrate it in the client, which essentially just means ReactDOM is going to go through and map the server code to your client code and then start running all of the effects and doing all the things that we love for really fancy client-side transitions and everything, right? And so, think of those as our entry points.

<i class="timecode">[00:10:32]</i> Our root.tsx is sort of the root route <i class="brackets">[/ɹuːt ɹaʊt/] — or root route [/ɹuːt ɹuːt/]</i>, if you're from one of those weird countries that pronounces those two words the same — our root route is… it's our root! What it suggests, right? This is what we load when we first open up our website, and it's responsible for rendering everything. So let's explore that.

<i class="timecode">[00:10:54]</i> We've got this Document component, and we've got a few things that you might notice. First of all, it's just an HTML doc. That's all it is. There's no abstraction of that. It's just `<html>`, your `<head>`, your `<body>`, and that's it, right?

<i class="timecode">[00:11:07]</i> Now, we've got some… we've got a little bit of abstractions here, right? We've got this `<Meta />` component. We've got this `<Links />` component. These components are responsible for rendering the individual routes' `<Meta />` and `<Links />` functions, and we'll talk about all of those things later on as well, but those are ultimately going to generate the meta tags and the links tags for each of our individual routes.

<i class="timecode">[00:11:30]</i> Now, inside of our `<body>`, we've got our children. And we're using this as our layout, and we'll see where that is rendered in a few minutes. But we've got this script that is essentially just injecting some client-safe environment variables from our server. You might note that you can't call `process.env` in the client, which is a good thing, because we've got some sensitive information in there usually, like secrets and whatnot. So we do want some things on the client, perhaps, so we assign this `ENV` global variable, too, in the client. So, we've got this `<ScrollRestoration />` component that comes from Remix and handles scroll restoration between navigation. So if you are normally working in a client-side app, one of the headaches is that when you're dealing with client-side routing, a lot of times you lose your scroll position when you change routes.

<i class="timecode">[00:12:14]</i> **Ben:** Okay!

<i class="timecode">[00:12:14]</i> **Chance:** And that's what `<ScrollRestoration />` does for us.

<i class="timecode">[00:12:16]</i> We've also got this `<Scripts />` component. And what this does is this is what ultimately loads React in the client. And this is actually one of the cool things, one of the coolest things, I think, about Remix is that if you don't want to load any React on the client — let's say you just really love writing all of your apps in React, you really love JSX, you love the JavaScript experience, but you really don't need all that extra bundle size.

<i class="timecode">[00:12:39]</i> **Ben:** Yeah!

<i class="timecode">[00:12:40]</i> **Chance:** Like, maybe you're not actually using any state. Maybe there are no effects in your app, right?

<i class="timecode">[00:12:44]</i> **Ben:** Mhmm.

<i class="timecode">[00:12:44]</i> **Chance:** You don't need React at all on the client. We can remove all of React from the client by simply deleting the `<Scripts />` component, and we will never, ever have React in our bundle. And that's pretty cool, I think! We can drastically reduce the size of our bundles in the client if we don't use any of React's client-side features! Now, we're going to in this application, so we're going to keep that, but I just think that's a nifty little thing we can do. And since everything is running in the server anyway, the routing is still gonna work even if that `<Scripts />` hasn't fully loaded yet and we haven't actually hydrated the client yet.

<i class="timecode">[00:13:20]</i> So, now if we go down to our application, or our App component, we can see where we're calling a few things. We're calling this `useLoaderData`. What the heck is that thing?

<i class="timecode">[00:13:29]</i> **Ben:** Yeah!

<i class="timecode">[00:13:29]</i> **Chance:** `useLoaderData` is a hook that comes from Remix and it is what's responsible for getting data that is loaded on the server via the loader function, which we'll jump up to in a minute. Now it's getting this object back, and it has this `ENV` variable. We're getting that from our server, passing it to the client, and passing it into our `Document` which is going to assign that global variable, right?

<i class="timecode">[00:13:49]</i> And then we're rendering this `<Outlet />`, the child. `<Outlet />` is a component that… it comes from Remix, but it actually comes from React Router under the hood. It's a light abstraction on the React Router 6 `<Outlet />` component. And this is responsible for rendering the route that we're currently looking at. Right?

<i class="timecode">[00:14:05]</i> **Ben:** Mhmm!

<i class="timecode">[00:14:05]</i> **Chance:** So think of the `<Outlet>` is whatever route we're currently on, that's rendered by the `<Outlet />`. So this handles all of our routes.

<i class="timecode">[00:14:11]</i> **Ben:** Okay.

<i class="timecode">[00:14:11]</i> **Chance:** And then we get this `<CatchBoundary />` thing. The heck is a catch boundary? So if our server throws an error, and we catch that error and handle it specifically based on the status code here, we can return a different error message based on whichever status that we got. So if we return a response that has one of these status codes, we can render a specialty error page for that status code.

<i class="timecode">[00:14:36]</i> **Ben:** Okay!

<i class="timecode">[00:14:37]</i> **Chance:** We've also got this `<ErrorBoundary />` component. You can think of the `<ErrorBoundary />` component as ANY error that is thrown on the server that we just forgot to handle! Right? Any "uh-oh" page or, like, "What the heck happened? We don't know. We forgot to handle that." So all of that stuff, if you throw any error on the server and we haven't handled it anywhere in our code, it's going to end up in the error boundary.

<i class="timecode">[00:14:58]</i> **Ben:** So, just to make sure I'M understanding properly, everything that we're seeing in this root.tsx, this is the scaffolding for an entire application's interface. So, like, all of the pages ultimately sift through this logic. So we only have to write it once. We're not writing this for a bunch of different pages.

<i class="timecode">[00:15:17]</i> **Chance:** Not quite, but almost. So…

<i class="timecode">[00:15:19]</i> **Ben:** Okay.

<i class="timecode">[00:15:20]</i> **Chance:** That is technically correct. You can get away with only having this and you would still have your app. Now, it's not gonna be super useful because you need routes in your application, right?

<i class="timecode">[00:15:28]</i> **Ben:** Sure.

<i class="timecode">[00:15:29]</i> **Chance:** But, so the conventions like the catch boundary and the error boundary? The way that these conventions work is that they're handled by the root, but if you DO export an error boundary or catch boundary in a specific route and you're on that route—

<i class="timecode">[00:15:41]</i> **Ben:** Oh!!

<i class="timecode">[00:15:42]</i> **Chance:** —it's going to basically bubble up until you hit the first boundary that you find.

<i class="timecode">[00:15:46]</i> **Ben:** Okay!

<i class="timecode">[00:15:46]</i> **Chance:** You can think of that as, like, the boundary for handling those errors. So if we have one at the route, we handle it there. But if we don't have one in a specific route, then it just bubbles up until it gets to the root, and it bubbles up through the route tree.

<i class="timecode">[00:15:58]</i> **Ben:** Interesting.

<i class="timecode">[00:15:58]</i> **Chance:** And we'll talk more about the route tree and nested routes and all that stuff here in a bit. But, yeah, essentially… the root is an example of what any route component technically could look like. We can have a loader. We can have `<Meta />`. We can have `<Links />`.

<i class="timecode">[00:16:12]</i> So if you start at the top of the file, we can talk a little bit about some other conventions here. Now, I mentioned the `<Links />`. We talked about rendering that `<Links />` component, that's rendering all of the `<link>` tags from our route. If we export a function called `links`, it returns an array of objects that is going to map to our `<link>` tags and the `<link>` tag attributes, right?

<i class="timecode">[00:16:35]</i> **Ben:** Okay.

<i class="timecode">[00:16:35]</i> **Chance:** So right now, we are loading the stylesheet. This is our global stylesheet and we are loading it in root because it's global, and we want it to load everywhere. Any links that we render in the root are going to render all throughout our application. We can also export links on individual routes and they are only loaded on those routes.

<i class="timecode">[00:16:53]</i> **Ben:** Mm!

<i class="timecode">[00:16:53]</i> **Chance:** Which is really great for styling because we don't have to worry as much about classname clashes that we may have in other styling mechanisms where you're loading potentially conflicting classnames, right? So one of the biggest reasons people reach for tools like CSS modules is to avoid these clashes, right? It's much less likely if you're loading stylesheet links in your individual routes, right? Because you know what you're rendering in that route. So you have a lot of control here based on exporting individual links depending on which route you you happen to be on. And those `<link>` tags will be added and removed to the DOM as you navigate.

<i class="timecode">[00:17:35]</i> **Ben:** Okay!

<i class="timecode">[00:17:36]</i> **Chance:** The loader that we see below this is — and for those who are not familiar with TypeScript, I just realized that we might have some folks who are seeing some of these types and getting a little confused — the loader function, this syntax, the `export let loader: LoaderFunction` thing, this is just giving us the types for the function that we're exporting. It's a definition for our loader type. And the loader function is an asynchronous function. It's only called on the server, and this is where we get that loader data from. When we call the useLoaderData hook in our route, we get it based on the return value from our loader. So we see in our loader function, we are returning this object with an `ENV` key that has our site URL from the server.

<i class="timecode">[00:18:20]</i> **Ben:** Okay!

<i class="timecode">[00:18:20]</i> **Chance:** Now we're returning that data from the loader, and we call `useLoaderData` in the route component. We have access to that data directly. That make sense?

<i class="timecode">[00:18:29]</i> **Ben:** I think so. Yeah, there's a lot of pieces that kind of fit together, but I'm starting to see how… yeah, how this is fitting together. So, this loader, this is how we get information from the server to the client logic. 

<i class="timecode">[00:18:43]</i> **Chance:** That's exactly right. So anytime you need to get something from the server over to the client, and you only want to handle it on the server, that's what the loader's for. And this is actually a really powerful function because what we normally do when we're building React applications, if we need to go fetch something from the server, is we've got this component render sitting around in our application on the client and it doesn't have any data yet! We render it before we ever have any data, right?

<i class="timecode">[00:19:09]</i> **Ben:** Mhmm.

<i class="timecode">[00:19:11]</i> **Chance:** Well, how do you get that data? Well, normally you might use some sort of data wrapper like, you know, use React Query, right? Or what's the Vercel one? SWR, I think it is.

<i class="timecode">[00:19:22]</i> **Ben:** I think so.

<i class="timecode">[00:19:23]</i> **Chance:** Yeah, there's a bunch of different libraries that people use to abstract the Fetch API. But essentially, we just rely on the web standard. We let you fetch data directly on your server, return it, and by the time it's rendered in the client, we've already got it on the server. You don't have to do any of that stuff, right? There's no loading spinners. There's no "set some state after `useEffect`" and, you know, waiting for stuff to load. It's just there, right? And if you have a fast server and you use caching, you can get that data really quick and have a really snappy app with fewer loader spinners, which is pretty cool. And we'll see some of that in action as we keep going forward.

<i class="timecode">[00:20:00]</i> **Ben:** Okay!

<i class="timecode">[00:20:00]</i> **Chance:** So yeah, now that I've explained away the root file, we can go back to our browser and see that we are sitting on a sign-in page. But we didn't go to the sign-in route, but the URL says we're on the sign-in route. We just went to the index. Let's go back to our code for a moment. Let's talk about how we got here!

<i class="timecode">[00:20:20]</i> **Ben:** Yeah!

<i class="timecode">[00:20:23]</i> **Chance:** So, if we look in our `routes/` directory inside of our `app/` directory — This is another convention in Remix. The `routes/` directory, as it suggests, is where all of our route files live. This is how Remix knows what to route to our URL from our URL. So from those requests, we end up rendering these specific components based on that `<Outlet />` we saw in the root, right? So our index route… So, let me back up. Whatever your default export from a route file is the component that you render when you see that route. Now, in our index route here, we aren't actually exporting a default component. We're not exporting a component at all. There's nothing here except this loader function.

<i class="timecode">[00:21:04]</i> **Ben:** It's purely the server-side logic. 

<i class="timecode">[00:21:07]</i> **Chance:** Yeah! So you can think of… Routes that don't have a component, you can think of as request handlers. They're essentially just request handlers. So your loader is what is returned to you when you make a `GET` request to this endpoint, to that URL. So if I request this URL in the browser, we're going to execute this loader logic on our server, and then the response that we get is what is handled by our browser.

<i class="timecode">[00:21:30]</i> So, we see in the loader, what we're doing is we're calling this `getUser` function. `getUser` is just an abstraction that is essentially getting some session data, right? When we sign up for a new account or we log in, we're going to establish the session on the server. And then we're going to check the server to see if we have an active session. If we do, we're going to redirect you to that user's dashboard. If we don't, we're going to redirect you to the sign-in page. And that's how we get to the sign-in page in the browser.

<i class="timecode">[00:21:56]</i> **Ben:** Okay!

<i class="timecode">[00:21:57]</i> **Chance:** So now, since we are redirecting to sign-in, as you might imagine, `sign-in` is adjacent to the `index.tsx` file. We've got the `sign-in` file. This is our sign-in route, and this is what we see in the browser!

<i class="timecode">[00:22:09]</i> **Ben:** Okay.

<i class="timecode">[00:22:10]</i> **Chance:** So we're importing a bunch of components and tools, but we're exporting a few things, too. We're exporting this `meta` function. So our `meta` function is similar to our `links` in that it returns… in this case, it returns an object and the object has a key–value pair. You can return a title. You can also return meta descriptions, you can return OG tags — anything that would ordinarily render a `<meta>` tag in HTML. It just follows the similar conventions. I'm pretty sure OG tags are the only type of `<meta>` tags that don't use the title. And I think it's `title`/`content`. I always forget. 

<i class="timecode">[00:22:46]</i> **Ben:** Yeah, I was actually just looking this up yesterday for some side projects I was working on. OG tags use the attribute `property`— 

<i class="timecode">[00:22:58]</i> **Chance:** Yeah, that's it. 

<i class="timecode">[00:22:59]</i> **Ben:** Whereas most other `<meta>` tags expect it to be like `<meta name>` for the name of the property. It's weirdly confusing.

<i class="timecode">[00:23:11]</i> **Chance:** When's the last time you actually wrote a real `<meta>` tag in HTML? I couldn't tell you. So, like, we can abstract that stuff.

<i class="timecode">[00:23:16]</i> **Ben:** I mean, I live in Eleventy, so… yesterday.

<i class="timecode">[00:23:19]</i> **Chance:** Okay. Fair enough. Well, for me, like, I don't know, before I was a React developer, I was a WordPress developer, so we just use, like, Yoast SEO and all that stuff.

<i class="timecode">[00:23:28]</i> **Ben:** Sure.

<i class="timecode">[00:23:29]</i> **Chance:** So I don't know. I don't touch `<meta>` tags anymore, so I'm a little rusty. But it's nice, 'cause Remix actually teaches you a lot of things you've forgot, you know?

<i class="timecode">[00:23:36]</i> **Ben:** Yeah!

<i class="timecode">[00:23:36]</i> **Chance:** Like, you can only hold so much information in your head as a developer, I think. At least I can. I just… I chuck stuff away in the deep recesses of my mind, and then it just goes away. So I've had to relearn a lot of web fundamentals just by building on and using Remix.

<i class="timecode">[00:23:53]</i> So anyway, so this route, we're exporting some meta. We're exporting some links. This link, we're just exporting a stylesheet for this specific route. We're exporting this action thing. The heck is an action? We'll come back to that in a minute.

<i class="timecode">[00:24:07]</i> **Ben:** Okay. Gonna hide you, then.

<i class="timecode">[00:24:08]</i> **Chance:** Just collapse that, yeah.

<i class="timecode">[00:24:09]</i> We got our loader. We know what our loader does. So, loader is going to check to see if we have a user. So if we hit this route, but we're already logged in — if you hit the sign-in, right, but you're already logged in, then there's no reason to log in again. So it's just going to — same thing as our index route — it's going to redirect you to your dashboard if you have a user.

<i class="timecode">[00:24:29]</i> **Ben:** Makes sense!

<i class="timecode">[00:24:30]</i> **Chance:** And then we've got… we're exporting our default `SignIn` component, and this is where our rendering actually happens, right? So we've got a few things going on. We've got this `actionData` thing which, as you might imagine, comes from that action function we looked at before. We'll come back to that.

<i class="timecode">[00:24:46]</i> **Ben:** Okay.

<i class="timecode">[00:24:47]</i> **Chance:** We're pulling some things off of our action data. We've got this `useSearchParams` hook. This is coming from React Router as well. Actually, we're importing it from Remix, but it's a React Router feature. Remix, if you don't know, is built on React Router. They handle all of this routing. So React Router version 6 is really the powerhouse behind a lot of Remix's core functionality.

<i class="timecode">[00:25:08]</i> And then we've got this form ref and we've got this hook that I wrote to help us do some focus management. I love that this is an accessibility-focused podcast because I've tried to build it… I tried to build a really accessible application here. There's still some things I need to work on and improve, but we've got some decent focus management going on on each route, which I'm really excited about. So this is going to help us — if we have an error in our form, it's going to refocus the first form field that has an error.

<i class="timecode">[00:25:37]</i> **Ben:** Okay.

<i class="timecode">[00:25:38]</i> **Chance:** Which is, I believe, what the ARIA folks recommend us, or the W3C recommends that we do. 

<i class="timecode">[00:25:44]</i> And then we're just rendering some components after that. We're rendering the sign-in form. Aaand that's kind of of it. So let's talk about our action again.

<i class="timecode">[00:25:54]</i> **Ben:** Yeah! Let me expand this.

<i class="timecode">[00:25:57]</i> **Chance:** So, what the heck is an action? So if a loader function is handling our `GET` request, our action handles any other type of request.

<i class="timecode">[00:26:06]</i> **Ben:** Okay.

<i class="timecode">[00:26:06]</i> **Chance:** So if you're doing any sort of mutation — any `POST`, `PUT`, `PATCH`, any other type of request — it's going to be calling your action.If you export that from that component.

<i class="timecode">[00:26:17]</i> **Ben:** Mmm!

<i class="timecode">[00:26:17]</i> **Chance:** If you don't export it, nothing happens. But essentially, we make a `POST` request and we're going to call this action function.

<i class="timecode">[00:26:25]</i> **Ben:** Okay!

<i class="timecode">[00:26:25]</i> **Chance:** So how do we make this `POST` request? How do we actually sign in? So when we sign in, we want to make a `POST` request. We are `POST`ing to our server, we're sending it some credentials, and we're saying, "Hey, server, deal with these credentials," right? We want to handle all that stuff on the server. We don't want no weird client-side stuff happening when handling sensitive information. So what we're going to do is, if you take a look at our component again — we are ultimately rendering… We're looking for a form.

<i class="timecode">[00:26:58]</i> **Ben:** Like this.

<i class="timecode">[00:26:58]</i> **Chance:** Yeah! That's capital "`Form`," though. What is that capital "`Form`?" That suggests we're dealing with a custom form component. Well, this is an import that we get from Remix as well. Remix exports its own form. It acts a lot like the native `<form>` in HTML. It handles your requests. It has the exact same API that you're used to if you know how to use HTML forms.

<i class="timecode">[00:27:20]</i> The difference is, is that we get to not only handle the form… So a traditional form, a plain HTML form, is going to send a request to the server and then do a full refresh of your page because you're changing routes when you post a form action. Or you're potentially changing routes. But it's always going to refresh the page, right? But when we're using React Router and we want to preserve some of the functionality of React Router and handle those client-side transitions — Maybe we've got some page transitions, right? Maybe we've got some transitions happening when data comes in. The Remix `Form` gives us that ability.

<i class="timecode">[00:27:55]</i> So we can still post to a form the same way we can using plain ol' HTML. But the beauty of this is that if the user's JavaScript hasn't completely loaded yet and they submit this form before the JavaScript has had a chance to run — say they're on a really slow connection —

<i class="timecode">[00:28:11]</i> **Ben:** Mhmm.

<i class="timecode">[00:28:12]</i> **Chance:** —they'll just fall back to a plain ol' HTML form and it still works, right? It's progressive enhancement, essentially.

<i class="timecode">[00:28:17]</i> **Ben:** You don't get the nice transitions.

<i class="timecode">[00:28:19]</i> **Chance:** Yeah!

<i class="timecode">[00:28:20]</i> **Ben:** You don't get the, like, "Oh, everything doesn't jump around" or whatever. Like, you don't get that but, like, it's still functional. It still works behind the scenes.

<i class="timecode">[00:28:28]</i> **Chance:** Yep.

<i class="timecode">[00:28:28]</i> **Ben:** Yeah.

<i class="timecode">[00:28:28]</i> **Chance:** Yeah, yeah, exactly.

<i class="timecode">[00:28:30]</i> **Ben:** Progressive enhancement!

<i class="timecode">[00:28:31]</i> **Chance:** So this is a progressive — yeah, exactly! This is a progressively enhanced form, and we're going to send a post request when this form is submitted. And once we do, since we don't — if you're not familiar with the Form API in HTML, since we don't `POST` to a specific action, the default action is the route you're currently on, right?

<i class="timecode">[00:28:50]</i> **Ben:** Okay!

<i class="timecode">[00:28:50]</i> **Chance:** So we can POST to different routes. We could `POST` to another route somewhere else in our route hierarchy, or we can `POST` to this current route! And since we don't have a specific action, we default to the current route. So this form is going to be handled in our action function.

<i class="timecode">[00:29:04]</i> **Ben:** Okay. And so if it `POST`s to itself, does that then mean that — 'cause we've got the, like, the redirect where, like, if you do have a user, it'll take you to the dashboard — so it's basically hoping… Like, it `POST`s to itself, so it would reload itself, and then hoping that the redirect catches it? 

<i class="timecode">[00:29:29]</i> **Chance:** Well, again, the loader is executed by `GET` requests, right?

<i class="timecode">[00:29:33]</i> **Ben:** Mmm.

<i class="timecode">[00:29:33]</i> **Chance:** We're making a POST request. We've already checked with the user once we get the route. But right now, we're making the `POST`, so we're going to call our action function.

<i class="timecode">[00:29:42]</i> **Ben:** Okay!

<i class="timecode">[00:29:42]</i> **Chance:** So we're looking at a different function here. So if we take a look at the action, this is basically where we start handling all that data that just came from our form, right?

<i class="timecode">[00:29:50]</i> **Ben:** Gotcha.

<i class="timecode">[00:29:51]</i> **Chance:** So, first thing we do is we await the form data that comes from the request. This is just the standard — web standard `Request` object. And you can call `.formData()`. This is an asynchronous function. And once we have that, this is essentially an object full of all of the fields that were in our form that was submitted, right?

<i class="timecode">[00:30:10]</i> **Ben:** Mhmm.

<i class="timecode">[00:30:10]</i> **Chance:** So we go ahead and call `formData.get()` on the various fields that we have. We've got this email, this password, and a redirect location once we're logged in. And now we have the data. We've got all of our data that we need to work with.

<i class="timecode">[00:30:23]</i> Now what we're doing is we're just going to validate that data, right? You always want to validate your data on the server. You might want to validate it in the client, too. For most folks who are in the React space, you might be used to libraries like Formik, right, that, you know, build these really nice, fancy client-side forms, and folks use various libraries for validation on the client of those forms. And that's fine! There's nothing wrong with that. But you know, the client also has — the browser has really great built-in validation as well that we can rely on, or we can handle client-side validation. But that's not always enough, right? Because a really savvy user can get around that. So we want to validate that stuff on the server, too, and send the correct response if we have invalid data, right? So we're going to validate all of those fields. So most of this logic is just validating, checking that we've got the right type of content here. 

<i class="timecode">[00:31:11]</i> And then once we finally validate all that and we've got the data that we need, we're going to start handling the login process. So we're still validating right now, and keep going down.

<i class="timecode">[00:31:21]</i> **Ben:** There we go!

<i class="timecode">[00:31:22]</i> **Chance:** We're setting up some errors. We're returning those errors if we have any. We're returning this `json` function. What the heck is `json`? `json` is also something we get from Remix and it is going to wrap our return value and return some data, but also a response for that data. So again, HTTP status codes. This is a `401` response, which I believe is just, like, an invalid thing. I can't remember. I have to, like, always look at MDN for the response codes.

<i class="timecode">[00:31:49]</i> **Ben:** Yeah…

<i class="timecode">[00:31:50]</i> **Chance:** But anything in the 400s is always bad. So we're returning a bad response here with our errors so that we can take those errors in the server — or in the client, rather — and render them, right? So that's where that `useActionData` hook comes from.

<i class="timecode">[00:32:05]</i> But once we've validated everything and we know that we're logging in, we're going to call this `createUserSession` function that is going to redirect us to the dashboard once we've successfully logged in.

<i class="timecode">[00:32:14]</i> **Ben:** Okay.

<i class="timecode">[00:32:16]</i> **Chance:** Make sense? 

<i class="timecode">[00:32:16]</i> **Ben:** Yeah! There is a LOT going on, but yeah.

<i class="timecode">[00:32:19]</i> **Chance:** <i class="brackets">[laughs]</i> Yeah, I know!

<i class="timecode">[00:32:19]</i> **Ben:** Makes sense.

<i class="timecode">[00:32:21]</i> **Chance:** So, yeah, no, there is a lot going on. There's a lot to explain. I think once we start seeing this over and over in our routes, eventually it starts to click — I hope, you know — and once it does, I don't know, for me, like these conventions make building these kinds of apps so much more productive for me, so I'm really, really happy with it.

<i class="timecode">[00:32:42]</i> So, anyway! This is our sign-in page, right? That's everything that's happening if you sign into our application. It's quite a lot, and there's still a few abstractions that we've got here that we don't really have time to get into.

<i class="timecode">[00:32:53]</i> But everything in our action, just like everything in our loader, is only ever called on the server. Another really cool thing about Remix is that it automatically splits all that stuff out for you. So even though all of that code is in the same file, your action and your loader, all the code that is related to your action and loader are all split out of your ultimate client bundle. Our compiler does all that for you, so you don't have to worry about any of this action or loader code junking up your client bundle, which is really nice.

<i class="timecode">[00:33:23]</i> **Ben:** Good deal! Man!

<i class="timecode">[00:33:24]</i> **Chance:** That's a lot! I'm out of breath!

<i class="timecode">[00:33:26]</i> **Ben:** So much for just one page, but it really does show how the stuff is all fitting together, so thank you. 

<i class="timecode">[00:33:33]</i> **Chance:** Yeah, of course. And so with that said, let's go to another page! Do it again.

<i class="timecode">[00:33:37]</i> So we can't sign in yet because we don't even have a user account, do we?

<i class="timecode">[00:33:42]</i> **Ben:** Right, no, I haven't created one yet.

<i class="timecode">[00:33:44]</i> **Chance:** Why don't we do that? Yeah, register here. Let's click that. Now we're on the register route. Go ahead and fill that out.

<i class="timecode">[00:33:57]</i> **Ben:** And then put in a dummy password here, and then… Oh, look at that!

<i class="timecode">[00:34:03]</i> **Chance:** Oh man, what happened? "Password must contain at least 1 special character." Let's check out this route file next. Take a look our `register` file.

<i class="timecode">[00:34:10]</i> **Ben:** Okay!

<i class="timecode">[00:34:13]</i> **Chance:** So, in our `register` file, it's going to look very similar to our `sign-in` file. We've got a `meta` function that exports some meta about our page. We've got this `links` function. We got a loader that appears to be completely commented out for some reason. I don't know if that's… well, I'm not worried about that. Like I said, this is mostly… this app is in development, so I wouldn't worry about that little guy.

<i class="timecode">[00:34:36]</i> Let's take a look at our action. So just like our sign-in form, our action form is going to get all of our form data, it's going to validate that form data, and then it's going to return some data for, like, based on what happened, right? Or it's going to redirect us after we've successfully created a user.

<i class="timecode">[00:34:53]</i> And we note here that we've got this `fieldErrors` object. We've got this `validateEmail` function. That `validateEmail` function is going to have all the logic necessary to validate that that's a correct email before we start serving it, right? We got the `validatePassword` function, right? And this is what's catching your password problem, right? "Passwords must be at least 6 characters long," "Password must contain at least 1 special character." We could add any other validation or special rules that we want for our passwords.

<i class="timecode">[00:35:22]</i> But I just wanted to just show you how that validation is happening on the server, not on the client, because again, if you have a savvy user who can open up dev tools, you can get around client validation. So this is all happening on the server. We return that data to the client so that you can see that error with the `useActionData` hook. So if we have that action data, then we're going to get those objects in our route component! 

<i class="timecode">[00:35:49]</i> **Ben:** Okay, so… yeah, so we call `useActionData`. We get those field errors.

<i class="timecode">[00:35:57]</i> **Chance:** Mhmm. 

<i class="timecode">[00:35:58]</i> **Ben:** And let's see. Just don't do anything — this is a `useEffect`, so we don't do anything if there's no errors whatsoever. 

<i class="timecode">[00:36:08]</i> **Chance:** Yeah, this is actually what that abstracted focus management hook that I showed you in the last route was actually doing.

<i class="timecode">[00:36:16]</i> **Ben:** Got it.

<i class="timecode">[00:36:16]</i> **Chance:** So this is a `useEffect`, so this is happening on the client. And this is just because, again, we have to deal with client-side routing.

<i class="timecode">[00:36:23]</i> **Ben:** Mhmm.

<i class="timecode">[00:36:23]</i> **Chance:** And what we want to do when we reroute on the client, or when any of our form errors change, is we want to focus that first form field.

<i class="timecode">[00:36:31]</i> **Ben:** Gotcha.

<i class="timecode">[00:36:32]</i> **Chance:** So, you don't have to go through the nuts and bolts of this…

<i class="timecode">[00:36:35]</i> **Ben:** Yeah.

<i class="timecode">[00:36:35]</i> **Chance:** …but that's ultimately what it's doing, is checking to see if we have any form errors and then focusing the first field that it finds with an error.

<i class="timecode">[00:36:40]</i> **Ben:** Okay! Makes sense.

<i class="timecode">[00:36:42]</i> **Chance:** Yeah. But one thing you will notice — one thing that I notice about this route, there's not a single `useState`. There's no state in this route. But we DO have state in this route! Right? We've got error state! We've got the validations there, right? We've got some state, but it's all handled by our server and it's just returned to us as soon as we load that route. But we don't have to call `useState`. We don't have to do any fancy data fetching in the component itself. We don't have to juggle the effects or anything like that. We've just handled it on our server and it comes to us as soon as we get that data back.

<i class="timecode">[00:37:18]</i> **Ben:** So then in that case, have you found that there's, like, EVER a use case for using something like `useState` in a Remix application?

<i class="timecode">[00:37:29]</i> **Chance:** Oh, yeah!

<i class="timecode">[00:37:29]</i> **Ben:** Okay. 

<i class="timecode">[00:37:29]</i> **Chance:** Yeah, we'll see some later on. There is certainly a use case for `useState`. We're going to talk a little bit later on about optimistic UI, and with optimistic UI, anytime you've got an optimistic UI, you're going to — generally speaking — you're going to have some sort of state somewhere, just to hold, like, the temporary state in memory while we're waiting on that state to come back from the server, right? So there are situations where you certainly need some state in your route components. But I find, at least, when I'm building Remix routes, like using Remix for me in some of the apps that I've refactored has eliminated, like, 80% of my `useState`s and `useEffect`s.

<i class="timecode">[00:38:12]</i> **Ben:** Interesting!

<i class="timecode">[00:38:13]</i> **Chance:** And the stuff that you DO use it for is mostly progressive enhancement!

<i class="timecode">[00:38:17]</i> **Ben:** Okay!

<i class="timecode">[00:38:19]</i> **Chance:** Yep. So, that's what we're looking at here. That's what happens when you register your user. So let's go back and check out our browser. Let's fix that busted password. Try again.

<i class="timecode">[00:38:30]</i> **Ben:** There we go, okay.

<i class="timecode">[00:38:31]</i> **Chance:** And here we go! We have signed into our application.

<i class="timecode">[00:38:34]</i> Again, I have not spent a ton of time styling this thing so it's not, you know, it's pretty yet. But, you know, the layout works alright! So we've got this dashboard view, this greeting that says, "Hello, here's what you missed while you're away."

<i class="timecode">[00:38:48]</i> So, we're building a project management app. So let's take a look and see how some of this stuff works. We've got this — Right now, we don't have any projects. Let's create a new project.

<i class="timecode">[00:38:58]</i> **Ben:** Alright! "Some Antivs," apparently.

<i class="timecode">[00:39:03]</i> **Chance:** Yeah! So here's an example where I did use some state. We've got this members field that is only rendered if you actually update the project name. And that's just because the project name is required before you can start adding members to your project. But if you don't have JavaScript enabled for whatever reason or you haven't hydrated on the client, that field just doesn't show up. But you can add members later, right?

<i class="timecode">[00:39:26]</i> **Ben:** Yeah!

<i class="timecode">[00:39:26]</i> **Chance:** So, again, progressive enhancement. There is a little state there.

<i class="timecode">[00:39:30]</i> **Ben:** Okay.

<i class="timecode">[00:39:30]</i> **Chance:** But we don't need to add members, 'cause we actually don't have anybody to add 'cause we've only created one user! If we created more users, we could add some of those to our project, but we'll just go ahead and create this for now.

<i class="timecode">[00:39:40]</i> **Ben:** Alright.

<i class="timecode">[00:39:42]</i> **Chance:** And here's our project dashboard! There's your title. There's your description. There's a list of your users, which is currently only you. There's a little dropdown menu button on the right-hand side that we've got the ability to edit or delete the project. So we just got some basic CRUD functionality here! There you go. "Do it well!" So when you update, that is going to send a request to our server. Once the form is submitted, the UI in the background will only update after that request goes through.

<i class="timecode">[00:40:14]</i> **Ben:** It doesn't actually seem to be doing it! Uh… let me just check the console real quick.

<i class="timecode">[00:40:20]</i> **Chance:** Oh, okay, we got a bad route! Yeah.

<i class="timecode">[00:40:23]</i> **Ben:** Okay.

<i class="timecode">[00:40:23]</i> **Chance:** Unfortunately, I made some changes before the stream, so I'll go back and fix that, but good to know. I'm going to put a todo on my list because that, we are not going to fix today.

<i class="timecode">[00:40:34]</i> **Ben:** Okay!

<i class="timecode">[00:40:36]</i> **Chance:** "Fix project action." Alright, well. You know, I hoped that would've worked. That would've been cool, right?

<i class="timecode">[00:40:43]</i> **Ben:** Yeah!

<i class="timecode">[00:40:44]</i> **Chance:** So anyway, these things are live, right? We do it live.

<i class="timecode">[00:40:49]</i> **Ben:** Yep!

<i class="timecode">[00:40:49]</i> **Chance:** So now we need to create some todos for our project. It's not really much use without anything to do.

<i class="timecode">[00:40:55]</i> **Ben:** Alright.

<i class="timecode">[00:40:55]</i> **Chance:** Go ahead and do that.

<i class="timecode">[00:40:56]</i> **Ben:** So I create a new list.

<i class="timecode">[00:40:58]</i> **Chance:** Yeah, let's create a list.

<i class="timecode">[00:41:02]</i> You gave me some really good feedback earlier on the UI here, and I can make some improvements to the "Add todo" button here, because it's not immediately obvious that this is actually a button. So I need to fix that! This is… it's also on my list of my own todos. Let's go ahead and click that "Add new todo." 

<i class="timecode">[00:41:21]</i> **Ben:** Real quick, we do have a question in the chat—

<i class="timecode">[00:41:23]</i> **Chance:** Yeah!

<i class="timecode">[00:41:23]</i> **Ben:** —that's from edmbn which is, "Do we have the code available on GitHub?" Not quite, because you're still doing some polishing. But when it is available, where would be the best place to find it?

<i class="timecode">[00:41:33]</i> **Chance:** Yeah, so it'll be in the Remix repo. I'm also going to have my own repo. Before we put it in the Remix repo, I'll go ahead and create my own just to get it up faster, because we're going to put it in the Remix examples directory eventually and then start building onto it. But I'll have that code ready for everyone this week, and, Ben, I'll give it to you, too, so we can share it to your audience.

<i class="timecode">[00:41:55]</i> **Ben:** Sounds good.

<i class="timecode">[00:41:56]</i> **Chance:** But it will all be open, yeah. For sure. 

<i class="timecode">[00:42:00]</i> **Ben:** So, yeah, thank you for your question. Unfortunately, the answer is just not quite yet, but that's just because this repo needs to be even better to share it. 

<i class="timecode">[00:42:12]</i> **Chance:** It'll be ready this week. Promise. Pinky promise.

<i class="timecode">[00:42:16]</i> **Ben:** Alright!

<i class="timecode">[00:42:17]</i> **Chance:** Let's create that list!

<i class="timecode">[00:42:19]</i> **Ben:** Let's do it!

<i class="timecode">[00:42:20]</i> **Chance:** Boom! So we got a todo list. If click on that, then we can actually see some action items for our list. It tells us what project we're in, and we've got a list of todos that we can click around on and check out, and once we've clicked on them, we can also delete them if we wanted to.

<i class="timecode">[00:42:38]</i> **Ben:** Okay!

<i class="timecode">[00:42:38]</i> **Chance:** Yeah, so that's our todo list now. So let's go and actually take a look at this todo list. So if we go back to our code editor — well, first of all, before you do that, check out the URL.

<i class="timecode">[00:42:48]</i> **Ben:** Okay.

<i class="timecode">[00:42:48]</i> **Chance:** We've got this URL, /dashboard/todo-lists slash big old blob of text. What the heck is that? We should probably make that a prettier URL, but it is what it is. That is our dynamic ID for this todo list, right?

<i class="timecode">[00:43:03]</i> **Ben:** Okay!

<i class="timecode">[00:43:03]</i> **Chance:** This is the unique identifier that tells us which todo list we're looking at. So let's go back and figure out how we get to that.

<i class="timecode">[00:43:11]</i> **Ben:** Alright.

<i class="timecode">[00:43:11]</i> **Chance:** So in our `routes/` directory, we've got the dashboard, right? We noticed we have a nested URL. The URL structure being nested mirrors our `routes/` directly, right? We've got these nested routes. So, think of the `routes/` directory hierarchy is mapping to our URL structure. So "dashboard" slash "todo-list" slash dynamic ID slash nothing, right? That dynamic ID is the noted in our `routes/` directory by this dollar sign.

<i class="timecode">[00:43:39]</i> **Ben:** Okay.

<i class="timecode">[00:43:39]</i> **Chance:** So because this directory called `$listId/` starts with a dollar sign, that's now a dynamic route segment. So anything that we… If we have a dynamic route segment and we don't actually see a specific route that matches that segment, it's going to be assumed to be dynamic. So that's where we're getting that list ID, right? And that's available in our route as a route parameter. Plus, if we take a look at the index route inside of `$listId/`, the index route is the index for that specific route. So when we don't have an additional route segment after that, we're assumed to be on our index, right? You don't need an index in a directory, but if you have multiple nested routes inside of `$listId/` like we do, we're going to have an index route. 

<i class="timecode">[00:44:25]</i> **Ben:** Does the route itself get the…? I saw it in the action.

<i class="timecode">[00:44:32]</i> **Chance:** Mhmm!

<i class="timecode">[00:44:32]</i> **Ben:** So action gets a `params` property.

<i class="timecode">[00:44:35]</i> **Chance:** As does our loader!

<i class="timecode">[00:44:37]</i> **Ben:** And `params` has `listId`. Does the route component itself get the list ID? 

<i class="timecode">[00:44:43]</i> **Chance:** It could, but we don't actually need it in the route component—

<i class="timecode">[00:44:46]</i> **Ben:** Okay.

<i class="timecode">[00:44:46]</i> **Chance:** —just because we don't see it. And I'll show you, because all we use that segment for is to fetch the todo list and the project.

<i class="timecode">[00:44:55]</i> **Ben:** Gotcha.

<i class="timecode">[00:44:55]</i> **Chance:** So if we remember, when we go to our URL, we call our loader function. So let's take a look at our loader function and see what's happening.

<i class="timecode">[00:45:03]</i> **Ben:** Get rid of a few of these distractions. There we go!

<i class="timecode">[00:45:07]</i> **Chance:** Yep, so inside of our loader function, we're getting that list ID from the params, that comes from our route params.

<i class="timecode">[00:45:12]</i> **Ben:** Okay.

<i class="timecode">[00:45:12]</i> **Chance:** And it's on the `listId` key because that's what we've called it in our route with that dollar sign, right? If you're a PHP old-school developer like myself, you recognize the dollar sign as a variable, right? So we call it a dollar sign in the route, and that becomes the key for our params. 

<i class="timecode">[00:45:28]</i> So we get that list ID. We require a user on this route. We want to authenticate, and if we're not authenticated — so this is how you would authenticate in a route, you would call a function that checks your user session on the server, and if you're not authenticated, you would want to redirect them somewhere else. This is just a light attraction over that. But we're requiring our user, and then we're going to start fetching our information about our list and our projects. And that's where this list ID comes in.

<i class="timecode">[00:45:56]</i> So we call this. We wait for all of these promises to resolve. This makes all of these requests concurrently, which is really nice. This reduces our network waterfall that you're going to see in a lot of websites where it sort of has, you have to call one function and then wait, and then call another function and then wait, and call another function.

<i class="timecode">[00:46:13]</i> **Ben:** Yeah!

<i class="timecode">[00:46:13]</i> **Chance:** We can call all of our async functions concurrently with `Promise.all`, and once all of those are resolved, we've got our data and we can move forward with our loader. 

<i class="timecode">[00:46:22]</i> **Ben:** Yes, 'cause, like, in a lot of those applications where you've got that kind of waterfall, it would be something like, "Oh, a user's trying to access this todo list. Well, first we have to fetch the user so that we know, like, what projects they have access to. And okay, we need to now fetch their projects. And now that we've got their projects, we need the fetch the todo list." And you've already got this, like, chain because you can't just hop directly to the todo list because you have to make sure, like, every step along the way is working. 

<i class="timecode">[00:46:50]</i> **Chance:** That's right. And there's no magic involved in that because we're just using the platform. We're just using native fetch and we're using Promises, right?

<i class="timecode">[00:46:57]</i> **Ben:** Mhmm.

<i class="timecode">[00:46:58]</i> **Chance:** So there's no Remix magic here other than the fact that Remix completely relies on the platform. It gives us a lot of power, right? We're relying on… in this case, we've got a Node server. Remix also supports non-Node targets like Cloudflare Workers, which is really cool. We're gonna support Deno very soon. So it's not just Node. But we're going to support pretty much any platform that is wanting to support native platform functionality like fetch. So, pretty cool, I think, that we get to do all this stuff basically for free because it's what the platform gives us!

<i class="timecode">[00:47:27]</i> **Ben:** Mhmm. Very cool.

<i class="timecode">[00:47:29]</i> **Chance:** So, yeah, once we fetch our todo list and our projects, we're going to make sure we actually got a todo list back from our database request. If we don't, we'll just redirect them. We could also handle an error there if we wanted to. This was just out of convenience for me. But we're going to check to see if we have a project associated with our todo list. If we don't have that project, again, we're just going to redirect them.

<i class="timecode">[00:47:51]</i> **Ben:** Mhmm.

<i class="timecode">[00:47:51]</i> **Chance:** You could handle that error differently if we wanted. But then once we have the project associated with that todo list, as well as the list itself, we're going to return it as data that we can access in our component!

<i class="timecode">[00:48:01]</i> **Ben:** Okay!

<i class="timecode">[00:48:03]</i> **Chance:** And that's where we get all of the information that we're going to render!

<i class="timecode">[00:48:05]</i> **Ben:** Makes sense!

<i class="timecode">[00:48:07]</i> **Chance:** So if we go down to our component again, we're going to see everything from that `useLoaderData` function. Right? 

<i class="timecode">[00:48:15]</i> **Ben:** Got it! So I can start to do stuff with todo lists like iterate over… 

<i class="timecode">[00:48:20]</i> **Chance:** Yeah!

<i class="timecode">[00:48:20]</i> **Ben:** Okay.

<i class="timecode">[00:48:21]</i> **Chance:** So you also see this `useFetchers` hook. What the heck is that? So let's talk about that.

<i class="timecode">[00:48:26]</i> **Ben:** Okay!

<i class="timecode">[00:48:26]</i> **Chance:** `useFetchers`. `useFetchers` is… so we talked a little bit about the `Form` component already, right? Remix exports a `Form` component to allow you to make a `POST` request just using a plain ol' form with some progressive enhancement, right?

<i class="timecode">[00:48:41]</i> **Ben:** Mhmm.

<i class="timecode">[00:48:41]</i> **Chance:** What happens with a form — this is just how the HTML `<form>` works by default — is it's going to `POST` to a specific URL, right?

<i class="timecode">[00:48:49]</i> **Ben:** Yeah.

<i class="timecode">[00:48:50]</i> **Chance:** And what it's going to do when you get that data back is it's going to return that URL. You're going to go to that URL, right? So if you're POSTing to any other route other than the route that you're on, you're gonna navigate to that route. You can think of a link, an anchor tag, as just a fancy form essentially, right? It's a form that posts to the route in your href, and it's posting a `GET` request. It's actually a GET request, not a POST request.

<i class="timecode">[00:49:13]</i> **Ben:** Okay!

<i class="timecode">[00:49:13]</i> **Chance:** But it's really just a fancy form that's a little simpler to write.

<i class="timecode">[00:49:16]</i> But what `useFetchers` is, is sometimes you want to make a request to a different URL, but not actually navigate to that URL. You just want that data back.

<i class="timecode">[00:49:28]</i> **Ben:** Gotcha.

<i class="timecode">[00:49:28]</i> **Chance:** That's where `useFetchers` or `useFetcher` comes in. And we've got `useFetcher` and `useFetchers`. They're two separate hooks. We'll talk about those more specifically in a moment. But `useFetchers` is going to… you can have multiple fetchers in the same route, and they might all be inflight. They may all be fetching some data at the same time. And you might want to handle independent fetchers, and you might want to handle them in a specific order. You might want to deal with race conditions. You might want to do a number of things with your various inflight requests, right?

<i class="timecode">[00:50:00]</i> **Ben:** Yeah.

<i class="timecode">[00:50:00]</i> **Chance:** Before they actually get back. You might want to show some pending UI. There's a bunch of stuff you might want to do. Again, what would we normally do to deal with data loading? We'd use state! We'd use an effect, right?

<i class="timecode">[00:50:13]</i> **Ben:** Yeah!

<i class="timecode">[00:50:14]</i> **Chance:** We don't have any state in this app, right? Even though we are doing stuff that technically feels stateful, all of that state is still coming from the server.

<i class="timecode">[00:50:22]</i> **Ben:** Okay.

<i class="timecode">[00:50:22]</i> **Chance:** So that fetcher is going to have some data attached to it. It's gonna tell you what's the type of that fetcher, right? The fetcher that we're dealing with in this particular moment — we'll show where that actually that magic actually happens in a minute — but the fetcher that we're dealing with now is dealing with a form submission that is going to update our todos, right? And we actually, because we have multiple fetchers, we could be dealing with different types of fetchers. We could be dealing with submissions that are submitting to our `/edit` endpoint, which is gonna update the details on our todo. We could have submissions posting to our `/new` endpoint, which is going to create a new todo item, right?

<i class="timecode">[00:51:02]</i> **Ben:** Okay.

<i class="timecode">[00:51:03]</i> **Chance:** We could be posting to our `/delete` endpoint. So we can tell exactly which fetcher we're dealing with based on the action that we posted to. Right?

<i class="timecode">[00:51:13]</i> **Ben:** Iiiinteresting.

<i class="timecode">[00:51:14]</i> **Chance:** Does that make sense?

<i class="timecode">[00:51:15]</i> **Ben:** Okay, okay.

<i class="timecode">[00:51:18]</i> **Chance:** So, we look at all of the fetchers that we've got inflight, and we can manipulate data based only on those fetchers. And what we can do is we can essentially derive state in our component from data from the server! So we don't actually need to set any state. We just create some objects that are created on render, and they render whatever data comes from our server.

<i class="timecode">[00:51:40]</i> **Ben:** Where… where are we doing that?

<i class="timecode">[00:51:41]</i> **Chance:** And It can happen synchronously.

<i class="timecode">[00:51:43]</i> So what we're doing here in this loop is we're effectively getting all of our todos that we want to render. And the reason we're doing this, instead of just getting `todoList.todos` and rendering whatever came from the server—

<i class="timecode">[00:51:55]</i> **Ben:** Mhmm.

<i class="timecode">[00:51:55]</i> **Chance:** —the reason we're doing it this way is we actually want to optimistically update this UI so that the interactions feel instantaneous. So we're not actually going to get that data back as soon as you click that button, if we're hitting a real server. Right now, it's all local, so it's going to be pretty fast anyway.

<i class="timecode">[00:52:12]</i> **Ben:** Mhmm.

<i class="timecode">[00:52:12]</i> **Chance:** If you're dealing with a real server, it might come back slow! You might have a slow connection and somebody might be waiting a few seconds before they get the data back, right? But you want your app to feel really nice and snappy, right? So we, we call this optimistic — We don't call this "optimistic UI." EVERYBODY calls it — this is just what it's called, right? Like, we didn't invent that term. But this is how you would deal with optimistic UI in Remix! You would derive the state from the data that you get based on the transition from—

<i class="timecode">[00:52:36]</i> **Ben:** Okay!

<i class="timecode">[00:52:37]</i> **Chance:** —that fetcher. So what state is that fetcher in right now? If the state is "submitting" — if we're busy — in that for loop, you can see that we're checking to see what state our fetcher is in, and if we're in a certain state and we know we're busy, we can go ahead and update the UI before that data ever comes back. And if the data doesn't come back or we get an error from the data, if there's a problem, we can handle that in our catch boundary. We can render a catch boundary here and handle that in the UI directly. 

<i class="timecode">[00:53:08]</i> **Ben:** So I'm trying to figure out where that actually happens, though. So I see… like, where are we displaying…? 

<i class="timecode">[00:53:18]</i> **Chance:** So scroll back up for a moment. We'll just walk through the loop real quick, 'cause the loop is actually doing a bunch of things. So we're looking at all of our fetchers, but we've got this… So, the one that I'm talking about primarily right now is this `allTodos` array.

<i class="timecode">[00:53:34]</i> **Ben:** Okay.

<i class="timecode">[00:53:34]</i> **Chance:** So, right before the loop starts. We're creating an array of todo items. And this is initially just whatever we have from the server, right?

<i class="timecode">[00:53:43]</i> **Ben:** Mhmm.

<i class="timecode">[00:53:43]</i> **Chance:** Whatever we have from the server right now is our todos. And if our… So, scroll back down. So the second `if` statement is actually the one that I want to talk about.

<i class="timecode">[00:53:55]</i> **Ben:** The "new."

<i class="timecode">[00:53:55]</i> **Chance:** So if we have a submission — so with `fetcher.submission`… so first of all, if there is a submission at all. If there's not a submission currently happening, there would be no fetcher submission. So this only happens if there's a submission. So if there's a submission currently inflight and the action is posting to create a new todo, right? This "new" action is intended to create new todos.

<i class="timecode">[00:54:22]</i> **Ben:** Mmmm.

<i class="timecode">[00:54:22]</i> **Chance:** We're going to optimistically update our todos with this temporary derived state, right? This is just like in-memory state, right? This is only happening as we render the component. But once we get that data back, we're going to call `render` again on the whole route component. 

<i class="timecode">[00:54:38]</i> **Ben:** And that time, it's gonna get the list of all the ones from the server including the brand new todo that's been finalized in the database. Okay! 

<i class="timecode">[00:54:44]</i> **Chance:** Exactly.

<i class="timecode">[00:54:45]</i> **Ben:** Got it, got it.

<i class="timecode">[00:54:45]</i> **Chance:** And if our server throws an error, we can deal with that error in a catch boundary.

<i class="timecode">[00:54:49]</i> **Ben:** Got it.

<i class="timecode">[00:54:49]</i> **Chance:** But right now, we're optimistically updating our UI before we actually get new data back from the server.

<i class="timecode">[00:54:57]</i> **Ben:** Got it.

<i class="timecode">[00:54:57]</i> **Chance:** And we don't have to have any state for that.

<i class="timecode">[00:54:59]</i> **Ben:** And so here, we're using` allTodos` which is our todos we got from the server plus the todos that are currently inflight on their way to the server. Got it.

<i class="timecode">[00:55:09]</i> **Chance:** That's exactly right. And this all… I know this looks really weird, right? We're all like, "What are we creating this, like, mutable array for?" and like "This is not the React that I know. This is not the immutable React that I know and love," right?

<i class="timecode">[00:55:23]</i> **Ben:** Mhmm.

<i class="timecode">[00:55:23]</i> **Chance:** It takes a little bit of a paradigm shift. But the point is that we can update the UI and create an app that feels really, really snappy. And another really cool thing about the fetchers API is that all the race conditions that you might imagine happening as you're clicking todos really, really fast and you've got the server responding slowly… Remix handles all that for you. So you don't have to worry about user clicking so fast that your server can't handle the… We've got, like, a jillion tests to do with all kinds of weird race conditions. So, it's actually really cool. We don't have time to get into the nuts and bolts of all that stuff, but it's pretty cool how that stuff works under the hood. And it's all open source, so if you are really fascinated by that kind of thing, you know, go jump in. Take a look.

<i class="timecode">[00:56:08]</i> **Ben:** Alright!

<i class="timecode">[00:56:09]</i> **Chance:** But yeah, we've got multiple fetchers because we are dealing with `POST`s to our `/edit` endpoint to update a todo, our `/new` endpoint, and our `/delete` endpoint. We're not going to go through every single one of those, but that's what's happening in that loop. We're looking at all of our fetchers and deciding what to do based on what to render based on what that action currently inflight is giving us!

<i class="timecode">[00:56:31]</i> **Ben:** Okay! Got it. Very cool.

<i class="timecode">[00:56:36]</i> **Chance:** You got anymore…? 

<i class="timecode">[00:56:37]</i> **Ben:** Yeah, like there's a lot going on, but it's very cool to see how the stuff all fits together. Yeah, so I guess MY grand summary of what I've learned so far: Loaders, that's us getting data from the server. Actions are mutating the data the server has access to, so I would almost think of that as, like, in GraphQL land what "mutation" covers, right? 

<i class="timecode">[00:57:04]</i> **Chance:** Yep, exactly. 

<i class="timecode">[00:57:05]</i> **Ben:** Fetchers are for the stuff that's currently inflight that, like, hasn't quite been persisted in the database yet but we want to update the UI to make it look like it totally has so everything everything seems a lot faster regardless of network connection speeds. Okay. 

<i class="timecode">[00:57:23]</i> **Chance:** Yeah. Caveat — the only caveat in the fetcher thing is that they're… Think of fetchers if you're making a request to a different URL that you don't want to ultimately navigate to.

<i class="timecode">[00:57:33]</i> **Ben:** Oh, okay, got it.

<i class="timecode">[00:57:35]</i> **Chance:** If you do want to navigate to that URL, you can use our plain ol' `Form` component. You can also create a plain HTML form, and we also expose a hook called `useSubmit`. And those APIs are actually quite a bit simpler than the fetcher API, but the fetcher API is really handy if you want to POST to an endpoint that you don't want to navigate to and you just want to handle that data right there in the same route. And if you have multiple things going on at once, again, you can use all of those fetchers to get all of the data associated with that request. So, that's the one caveat. 'Cause I would generally recommend if you're just, you know, posting to a different URL and you plan to navigate to that URL later like we did with our sign-in form…

<i class="timecode">[00:58:17]</i> **Ben:** Mhmm.

<i class="timecode">[00:58:17]</i> **Chance:** I would use the Form API. But all of that, yeah, I would take a look at the Remix docs for both the Form API, the `useSubmit` API, and the `useFetcher` API and read through the nuances in those. 

<i class="timecode">[00:58:28]</i> **Ben:** Okay. Hm! Lots of stuff to get this up and running, but are there more things you wanted to show, or things you wanted to add to this?

<i class="timecode">[00:58:40]</i> **Chance:** Yeah, I think we can move on from this, because I actually want to get to what our project is today, right? Like, we've talked a lot, right? We've been on this thing for an hour now. We've done a lot of talking. Tried to explain everything as best I can in a one-hour situation. But we want to build some stuff, too.

<i class="timecode">[00:58:58]</i> **Ben:** Yes.

<i class="timecode">[00:58:58]</i> **Chance:** So one thing that I really want to do is I want to… So, if you hit the Back button real quick in the browser. Let's go back to… 

<i class="timecode">[00:59:07]</i> **Ben:** Chrome's doing this thing where it, like, pops down. It's weird. Okay, so I hit Back.

<i class="timecode">[00:59:11]</i> **Chance:** No worries. So what I really want to do is, instead of, when I click the todo list, instead of navigating to a separate page, I would love it if that todo list just appeared on the right-hand side of the same page, right?

<i class="timecode">[00:59:24]</i> **Ben:** Okay.

<i class="timecode">[00:59:24]</i> **Chance:** I don't actually want to change my view here. I want to use the same layout for this just to see my todo list. I want to see it right there on my project dashboard. So what I'm going to do here is instead of navigating to this todo route, I'm gonna create — or, I'm gonna have you create a new route!

<i class="timecode">[00:59:41]</i> **Ben:** Okay!

<i class="timecode">[00:59:42]</i> **Chance:** So let's go over to our code, and pop open your `app/` directory and pop open its `routes/` directory. And inside there, you're going to go in your `projects/` directory. And inside there, you're gonna open up the `$projectId`.

<i class="timecode">[00:59:57]</i> So what I want here is I want my URL to be `/dashboard/projects/$projectId/list`. So create… let me see here. What did I ultimately do here? I think I created a `list/`… Just create a directory inside of the `$projectId/` directory and just call it "`list/`." Just plain ol' L-I-S-T. And inside there, create a new file, and call it "`$listId`" — use camelcase — and `.tsx` or `.jsx`. Doesn't matter. We'll keep it TypeScript, and we'll do work with some TypeScript. So, now what I want you to do is I want you to go into the… back up a bit and go into your `todo-lists/$listId/` folder there, and I want you to open up that index file.

<i class="timecode">[01:00:57]</i> **Ben:** Okay.

<i class="timecode">[01:00:57]</i> **Chance:** Now I want you to just go ahead and copy all that code.

<i class="timecode">[01:01:01]</i> **Ben:** Got it, okay. 

<i class="timecode">[01:01:02]</i> **Chance:** Copy the whole route, and then paste it into that new file you just created. And then go ahead and press Save. And let's just start here.

<i class="timecode">[01:01:11]</i> **Ben:** Okay.

<i class="timecode">[01:01:12]</i> **Chance:** So now let's go back into our `$projectId` file, that dynamic `$projectId` route.

<i class="timecode">[01:01:21]</i> **Ben:** This one? Right here?

<i class="timecode">[01:01:24]</i> **Chance:** That's the one, yeah!

<i class="timecode">[01:01:26]</i> **Ben:** Okay.

<i class="timecode">[01:01:27]</i> **Chance:** And so what I want to do here is I want to do… So, what we have essentially done just now is we've created the nested route, right? And we talked earlier about, you know, when we looked at our root file, right? We had this root file that rendered that `<Outlet />`. Remember `<Outlet />`? 

<i class="timecode">[01:01:46]</i> **Ben:** Yeahhh. Wait, let me pop that back open and… you go ahead.

<i class="timecode">[01:01:51]</i> **Chance:** Yeah, so `<Outlet />`… you can have more than one outlet in your route hierarchy. And the way the outlet is going to work if you've got a second outlet nested inside is it's going to handle all of your routes that are nested inside of your current route. So we can create a nested route UI based on the routing structure, and we can render whatever is nested inside of our project ID through another outlet.

<i class="timecode">[01:02:19]</i> **Ben:** Okay.

<i class="timecode">[01:02:20]</i> **Chance:** And so that's exactly what we want to do. If you just jump back to the browser real quick, we've got this space — well, we don't have a space yet, but we want to create a space right next to our todo lists where we render our actual todo list, and that's going to be our new route.

<i class="timecode">[01:02:35]</i> **Ben:** Okay.

<i class="timecode">[01:02:36]</i> **Chance:** And it's just going to stay right there in the same UI. We're just going to pop it in a separate `<div>`, essentially.

<i class="timecode">[01:02:43]</i> **Ben:** Makes sense.

<i class="timecode">[01:02:43]</i> **Chance:** So in our $projectId, I'm looking for… what I want you to look for is we've got this `<Layout>` component. It's got this `main` prop that actually handles our… that's where all of the todo lists are rendered. This is kind of a big, chunky component. But you can collapse all that stuff. What I actually wanted to do — collapse the `<div>` right underneath "flexer."

<i class="timecode">[01:03:10]</i> **Ben:** Right underneath what? Okay.

<i class="timecode">[01:03:11]</i> **Chance:** Yeah, that guy. So right after that, I want you to just render an `<Outlet />` component. Yeah.

<i class="timecode">[01:03:23]</i> **Ben:** Has this been pulled in already?

<i class="timecode">[01:03:25]</i> **Chance:** No, we're going to need to import that, so add that import from Remix at the top of your file. 

<i class="timecode">[01:03:31]</i> Someone says that you work at Microsoft, so you're contractually obligated to use TypeScript.

<i class="timecode">[01:03:36]</i> **Ben:** You know, there's some truth to that.

<i class="timecode">[01:03:39]</i> Okay, cool, so, we've got an `<Outlet />` now.

<i class="timecode">[01:03:42]</i> **Chance:** Yeah, so this is going to render our outlet responsible for handling all of our nested routes. So the next thing I want you to do is, there is a link that is linking to our todo list. I think it's on line 243?

<i class="timecode">[01:04:01]</i> **Ben:** Which of course, you didn't have to look up, but you just kind of knew.

<i class="timecode">[01:04:05]</i> **Chance:** Yeah. I know all the code that is on every single line in every project that I worked on. It's one of my underlying skills.

<i class="timecode">[01:04:17]</i> **Ben:** Sorry, so what am I looking for?

<i class="timecode">[01:04:19]</i> **Chance:** So, right up there. So, it's actually 237 in yours. We've got some…

<i class="timecode">[01:04:23]</i> **Ben:** Okay.

<i class="timecode">[01:04:23]</i> **Chance:** I must've changed the code. Yeah, so… This `<Link>` component that we use also comes from Remix. And the way that `<Link>` is going to work, again, mirrors React router, because we're really powering all of our routing with React Router 6.

<i class="timecode">[01:04:39]</i> **Ben:** Mhmm.

<i class="timecode">[01:04:40]</i> **Chance:** This "`../`" convention… React Router uses nested routing, and we're also able to link relative to our current route. So these relative links… You can link relative to your current route just the same way you would imagine `cd`-ing into a different directory.

<i class="timecode">[01:04:56]</i> **Ben:** Mhmm.

<i class="timecode">[01:04:56]</i> **Chance:** The "`..`" syntax is just going to back you up to the next route level up. And so we're currently linking to `/todo-lists/$listId`. We actually want to link to `list/` without the dots at all and without the initial slash. So go ahead and remove the dot and the initial slash, and just say `list/`.

<i class="timecode">[01:05:15]</i> **Ben:** Oh, yeah, okay. `list/`. Okay.

<i class="timecode">[01:05:20]</i> **Chance:** Yeah, so now, where is this going to link? It's going to link relative to your current route, which is your project ID.

<i class="timecode">[01:05:25]</i> **Ben:** Okay.

<i class="timecode">[01:05:26]</i> **Chance:** The `/dashboard/project/$projectId/list/$listId`!

<i class="timecode">[01:05:32]</i> **Ben:** Putting that to the test now.

<i class="timecode">[01:05:34]</i> **Chance:** Yeah.

<i class="timecode">[01:05:34]</i> **Ben:** We'll see what changes, if anything. Oh, oh… Okay!

<i class="timecode">[01:05:41]</i> **Chance:** Why did it show up there? Because that's where our outlet is! 

<i class="timecode">[01:05:44]</i> **Ben:** Okay! And I'm looking at the URL there and yeah! Okay! So it just works!

<i class="timecode">[01:05:51]</i> **Chance:** Pretty cool, then.

<i class="timecode">[01:05:52]</i> **Ben:** That's awesome 

<i class="timecode">[01:05:52]</i> **Chance:** So that's all there is to it, right? Now, you can style that and do whatever you need to do to make it look pretty.

<i class="timecode">[01:05:58]</i> **Ben:** Sure.

<i class="timecode">[01:05:58]</i> **Chance:** Which I would probably recommend, 'cause right now it's a little… little cluttered, but we could clean that up a little bit.

<i class="timecode">[01:06:03]</i> Yeah, so now we've got a nested route. Yeah, go ahead and create some more todo lists. Click around and see them change. And they're only going to change in that part of the page.

<i class="timecode">[01:06:20]</i> **Ben:** Okay, so, alright. I open up Action Items, and it pops up over there. Very cool. And then I open up List 2, and it pops up over there. 

<i class="timecode">[01:06:31]</i> **Chance:** Yeah, we've also because of our scroll restoration… we would probably want to make some changes to the scroll behavior in an nested route situation like this, just for a little bit better user experience here, but we don't really have time to deal with scroll stuff today.

<i class="timecode">[01:06:46]</i> **Ben:** Sure.

<i class="timecode">[01:06:47]</i> **Chance:** So we can revisit that in a future episode, perhaps. But yeah, we've got a pretty good nested UI here though.

<i class="timecode">[01:06:55]</i> **Ben:** Alright!

<i class="timecode">[01:06:56]</i> **Chance:** Pretty happy with it.

<i class="timecode">[01:06:56]</i> So, one more thing I'd like to do is, we've got this list over here on the right — we can check todos, either complete it or we can delete them — but I do notice that we can't actually create new todos on our lists, which is not really useful, so…

<i class="timecode">[01:07:11]</i> **Ben:** Okay!

<i class="timecode">[01:07:12]</i> **Chance:** Let's do that next. Let's go into the new component that you created, the new route component inside of `/projects/$projectId/list/`. Probably don't want that nested a URL, but eh! So what we want to do here is we want to create a UI for creating a new todo.

<i class="timecode">[01:07:39]</i> **Ben:** Okay.

<i class="timecode">[01:07:39]</i> **Chance:** So, below your route component… Really anywhere, doesn't really matter, but somewhere in the root of the file, we want to create a new component.

<i class="timecode">[01:07:48]</i> **Ben:** Okay.

<i class="timecode">[01:07:48]</i> **Chance:** And I want it to function…

<i class="timecode">[01:07:50]</i> **Ben:** I'll just stick it at the very bottom.

<i class="timecode">[01:07:51]</i> **Chance:** Yeah, totally fine. Call it `NewTodoForm`.

<i class="timecode">[01:07:56]</i> **Ben:** Okay!

<i class="timecode">[01:07:57]</i> **Chance:** And it's going to take some props, so let's go ahead and give it some props. You can destructure it or not. Completely up to you. And let's give it a `listId` prop. Since we're using TypeScript, it's going to yell at us for not typing this prop. So, no, actually, so… your syntax is a little off here. Let's go… so, since you're destructuring the object, you're actually going to put the type definition after the closing bracket, and this is going to be — so create a new object. There you go. Now say `listId: string`, but lowercase S.

<i class="timecode">[01:08:31]</i> **Ben:** Lowercase!

<i class="timecode">[01:08:32]</i> **Chance:** Yeah, 'cause `String` capital is going to be the constructor for a string object, which you don't want.

<i class="timecode">[01:08:41]</i> So yeah, so this is our `NewTodoForm`. And so go ahead and before we return — so what we're going to return here is we're going to return a form that we get from a fetcher. So we're going to explore how the fetcher… We never actually got to what the fetcher was actually submitting. So we're going to do that now.

<i class="timecode">[01:09:00]</i> Let's go ahead and get a fetcher by calling, we'll say, a new variable called `todoFetcher`. And we will call `useFetcher`, which we're going to import from Remix, which I think is already imported in this component.

<i class="timecode">[01:09:16]</i> **Ben:** Looks like it.

<i class="timecode">[01:09:18]</i> **Chance:** And we are going to create some state here, and the reason I want to create some state is because we've got a form field that we want to clear after we put some data in that, and we do want to hold that in state because it's just easier to clear that form field in state. You could clear it by updating your key after submission, but that also clears focus and we don't want to do that. So I'm just going to use state.

<i class="timecode">[01:09:39]</i> **Ben:** Okay.

<i class="timecode">[01:09:39]</i> **Chance:** We do need state sometimes. So called this `value` and `setValue`. And initialize with an empty string.

<i class="timecode">[01:09:48]</i> **Ben:** You got it! Oh, I guess—

<i class="timecode">[01:09:50]</i> **Chance:** No, yeah, yeah, initial state. There you go. 

<i class="timecode">[01:09:53]</i> **Ben:** Look at me, promising I know React! 

<i class="timecode">[01:09:56]</i> **Chance:** That's okay. We'll get there. And let's go ahead. Let's create a new variable and call it `submissionAction`. And get it from… This is going to come from your `todoFetcher.submission`. And if you have — remember, I said earlier — if you have a submission at all… So, submission's an object. If you have one, it means you're inflight. This fetcher, there's some fetcher inflight, or this fetcher's inflight. So if this submission is defined, it'll be inflight. But we actually want to get one more property on it, so you can use optional chaining syntax if you want, and call `.action`. 'Cause we really only care about the action itself.

<i class="timecode">[01:10:39]</i> **Ben:** Okay.

<i class="timecode">[01:10:39]</i> **Chance:** So now let's create a… Let's leave this. Let's come back to this, actually. So go ahead and return what we're going to render. And we're going to render… so, open a new JSX tag and call `todoFetcher`. There's actually a component attached to `todoFetcher` called `Form`. And that's what we're going to render.

<i class="timecode">[01:11:01]</i> **Ben:** Okay…? Interesting.

<i class="timecode">[01:11:04]</i> **Chance:** And again, this is just like an HTML form, except the only difference is we're not going to navigate to this route after we submit the form.

<i class="timecode">[01:11:11]</i> **Ben:** Okay.

<i class="timecode">[01:11:12]</i> **Chance:** One thing that you could do if you wanted to is, in the endpoint that we're going to post to, we could actually render a UI there and create some more progressive enhancement for our users, because if JavaScript isn't enabled or if they, again, have a slow connection, then they would just render a plain form and they WOULD navigate to that URL. So we don't want them to, necessarily, but we can have a fallback in that case by just rendering a component at that URL, right?

<i class="timecode">[01:11:39]</i> **Ben:** Okay.

<i class="timecode">[01:11:39]</i> **Chance:** 'Cause then it would just be a plain ol' HTML form. But in our case, we don't want to want them to navigate so we're going to add a progressively enhanced feature via the fetcher to handle that for them.

<i class="timecode">[01:11:48]</i> **Ben:** Interesting.

<i class="timecode">[01:11:49]</i> **Chance:** So we're going to have some props in our form, too.

<i class="timecode">[01:11:51]</i> **Ben:** Okay.

<i class="timecode">[01:11:52]</i> **Chance:** So let's define some props. Yeah.

<i class="timecode">[01:11:54]</i> **Ben:** Cool.

<i class="timecode">[01:11:57]</i> **Chance:** So in our props for our form, we're going to have an action, because we're posting to a different URL. That action is going to… it's actually going to be a string and it's going to start with "`dashboard`" — "`/dashboard`." You actually have to have the root slash here because we don't… I don't want to do relative URLs. We're in the nested structure here, so we're just going to do an absolute. So "`dashboard/todos/new`." Why don't you open up that route file real quick, so we can see what that's actually going to do?

<i class="timecode">[01:12:26]</i> **Ben:** Yeah!

<i class="timecode">[01:12:26]</i> **Chance:** Because this request is going to go directly to that route.

<i class="timecode">[01:12:30]</i> **Ben:** "`dashboard`"… Okay.

<i class="timecode">[01:12:33]</i> **Chance:** "`/todos/new`."

<i class="timecode">[01:12:35]</i> **Ben:** Okay.

<i class="timecode">[01:12:36]</i> **Chance:** So it's really easy to know exactly what we're posting to.

<i class="timecode">[01:12:39]</i> **Ben:** Yeah.

<i class="timecode">[01:12:40]</i> **Chance:** So, what we're posting to is going to call our action, so we're interested in the action this route exports. So again, this is a lot like our sign-in form…

<i class="timecode">[01:12:50]</i> **Ben:** Okay.

<i class="timecode">[01:12:50]</i> **Chance:** …where we get the data from the form. We handle it in the action. We validate it, make sure it's all good data. And then if we ensure that we have good data, we respond with the actual todo itself. If we don't have good data, we respond with whatever error we want to allow the route to handle. So you can think of this as like an API route. We call them "resource routes" in Remix. This route is only responsible for giving us a resource. We post to it. It gives us a resource. There's no UI associated with it.

<i class="timecode">[01:13:21]</i> **Ben:** Oh!

<i class="timecode">[01:13:22]</i> **Chance:** There's no component. It's only handling requests. So this is an API route, and you can return any data you want from an API route or a resource route. You can literally — as long as it's serializable and you can send it across the wire, you can return it.

<i class="timecode">[01:13:36]</i> **Ben:** Okay.

<i class="timecode">[01:13:36]</i> **Chance:** So you can return static CSS this way. You could return files this way. There's all kinds of things you can use resource routes for. In this case, we're using it to post to our server to create a new todo.

<i class="timecode">[01:13:49]</i> So we can go back to our $listId component and finish wiring that up. We want to… Go ahead and give it a classname. I've just got some basic styles I want to add here.

<i class="timecode">[01:14:02]</i> **Ben:** Sure.

<i class="timecode">[01:14:02]</i> **Chance:** We've just got some utilities. Go say "flex," and then another one for "flex-col." I stole these from Tailwind. And then another one that says "gap-4." We're just gonna put some things in here in a little flex column stack.

<i class="timecode">[01:14:23]</i> **Ben:** Make them look nice.

<i class="timecode">[01:14:24]</i> **Chance:** And then we want to say `method="post"`, because if we don't, the default method is a "get." We're not handling `GET` requests. We're handling `POST` requests! There you go! I think it's the only lowercase actually, in this case, yeah.

<i class="timecode">[01:14:38]</i> **Ben:** Okay.

<i class="timecode">[01:14:39]</i> **Chance:** And that's just easier to be consistent when we're dealing with them in the actions.

<i class="timecode">[01:14:45]</i> We also — so, inside of our form, let's go ahead and render a hidden input,so `<input type="hidden" />`. This is just going to hold our list ID. So go ahead and say, `name` is equal to `"listId"` — camelcase — and then the value is going to be our list ID that we passed via props.

<i class="timecode">[01:15:09]</i> **Ben:** Okay!

<i class="timecode">[01:15:11]</i> **Chance:** And then we're going to… I've got some minor abstractions that I'm going to use. Go ahead and render below this… I'm going to call it `FieldProvider`. And you're going to import this from our `ui/` directory. This is just a… Look at that. TypeScript knows what to import.

<i class="timecode">[01:15:27]</i> **Ben:** Yep.

<i class="timecode">[01:15:28]</i> **Chance:** I think it's VS Code doing that magic. But anyway, in our `FieldProvider`, give it a name, and it's just going to be the string "`name`." This is going to be the name of our todo.

<i class="timecode">[01:15:36]</i> Okay.

<i class="timecode">[01:15:37]</i> Give it an ID, and call it `newTodo`. This is just so that the label knows what it's associated with for accessibility. We're gonna make this a required field, so let's say `required`.

<i class="timecode">[01:15:52]</i> And then also we're going to disable this field while our fetcher is inflight. So go ahead and say, `disabled` is equal to, and say `todoFetcher.state !== "idle"`. So we're going to just disable this field if, for whatever reason, our state is anything but idle. So the way that the fetchers… The fetchers all have their own state. Again, we get all that from the server. It starts idle, then you're going to go into a different state as the request is happening, but then once it's returned, it's going to be idle again.

<i class="timecode">[01:16:30]</i> **Ben:** Okay.

<i class="timecode">[01:16:30]</i> **Chance:** So if it's idle, we can edit the field. We can only edit the field if it's idle.

<i class="timecode">[01:16:36]</i> And then inside of this, we're going to render a label, but call it uppercase `<Label>`, which we'll also import from our `ui/` directory. And this is just going to associate the label with our field. And call it "New todo."

<i class="timecode">[01:16:50]</i> **Ben:** Like… oh, just in here?

<i class="timecode">[01:16:52]</i> **Chance:** Yeah, it's just a… no, I'm sorry, just a string that says — It's just a static label for our field, yeah.

<i class="timecode">[01:17:02]</i> And then below that we can render a `Field` component. It's just called `Field`. And also we're going to import that from `ui/` as well. And this is going to have a `value` prop, and this is going to hold our value state

<i class="timecode">[01:17:19]</i> **Ben:** And `value…` yep. That's our state up here. Okay, okay. 

<i class="timecode">[01:17:23]</i> **Chance:** Yep. And then I think you accidentally imported `value` from somewhere. And VS Code does this to me all the time, but I'm not sure.

<i class="timecode">[01:17:32]</i> **Ben:** Just did a few Command-Z's there, so hopefully it's undone now. Okay, okay. 

<i class="timecode">[01:17:36]</i> **Chance:** Cool. Give an `onChange` prop too, so we can set the value. And this part's not explicitly necessary,but, like I said, I want to clear the field after we deal with the data. So the `onChange` prop's is going to have an `event` parameter.

<i class="timecode">[01:17:51]</i> **Ben:** Oh, okay.

<i class="timecode">[01:17:54]</i> **Chance:** And then we're going to set the value to `event.target.value`.

<i class="timecode">[01:17:59]</i> **Ben:** Oh, yeah, okay. Got it.

<i class="timecode">[01:18:06]</i> **Chance:** Chat's getting quiet. Either everybody's completely lost or I'm boring the absolute crap out of everybody. I hope it's not that one.

<i class="timecode">[01:18:14]</i> **Ben:** Let me liven things up in the chat.

<i class="timecode">[01:18:17]</i> **Chance:** Hey, chat! Y'all alive? Come on, chat!

<i class="timecode">[01:18:18]</i> **Ben:** Y'all good? Y'all good?

<i class="timecode">[01:18:19]</i> **Chance:** "Zoned in."

<i class="timecode">[01:18:20]</i> **Ben:** "Zoned in!"

<i class="timecode">[01:18:21]</i> **Chance:** I forgot, option three is just completely zoned in and, like, mindblown.

<i class="timecode">[01:18:25]</i> **Ben:** Alright!

<i class="timecode">[01:18:26]</i> **Chance:** There we go. Just making sure we got some life out there. Thanks, y'all.

<i class="timecode">[01:18:28]</i> **Ben:** We've got some light hypnosis going on! 

<i class="timecode">[01:18:30]</i> **Chance:** I'm very self-conscious. I need validation. I'm like a form field!

<i class="timecode">[01:18:33]</i> **Ben:** Well, looks like there's some of that, yeah! It's somewhere in here. It's, like, in your utils. `validate`, right there. 

<i class="timecode">[01:18:39]</i> **Chance:** That's right. Yeah, cool. So we got our `onChange`. I think we're good on the field. So right below the `FieldProvider`—

<i class="timecode">[01:18:47]</i> **Ben:** Oh.

<i class="timecode">[01:18:47]</i> **Chance:** After the `FieldProvider`, sorry.

<i class="timecode">[01:18:49]</i> **Ben:** Got it. Is this…? Can `<Field>` be self-closing?

<i class="timecode">[01:18:53]</i> **Chance:** Yeah, that's fine.

<i class="timecode">[01:18:55]</i> **Ben:** Cool.

<i class="timecode">[01:18:56]</i> **Chance:** There's no children. It's just an input. This is just the fancy UI wrapper that also provides all of the field data to both the field and the label. It's just easier, I think, than matching up IDs and all that stuff, and it's for ARIA purposes.

<i class="timecode">[01:19:09]</i> So yeah, right below `</FieldProvider>`, go ahead and render a `<div>`. And inside the `<div>`, just going to render an uppercase `<Button>` component. This is a custom `<Button>` component that we're also going to get from our `ui/`. Yep, there you go! That's the one! Go ahead and give it a… don't worry about the classname. Just say "Create Todo."

<i class="timecode">[01:19:35]</i> Real quick: `<button>` has a `type` attribute, right?

<i class="timecode">[01:19:38]</i> **Ben:** Yeah!

<i class="timecode">[01:19:38]</i> **Chance:** HTML `<button>` has a `type` attribute? What's its default value, without looking? 

<i class="timecode">[01:19:42]</i> **Ben:** The default is just `"button"`, but then…

<i class="timecode">[01:19:45]</i> **Chance:** No!

<i class="timecode">[01:19:46]</i> **Ben:** No?

<i class="timecode">[01:19:46]</i> **Chance:** No!

<i class="timecode">[01:19:46]</i> **Ben:** Is it `"submit"`?? 

<i class="timecode">[01:19:47]</i> **Chance:** I thought that, too! I thought that, too!

<i class="timecode">[01:19:49]</i> **Ben:** Is it `"submit"`? 

<i class="timecode">[01:19:50]</i> **Chance:** Yes, it's `"submit"`! 

<i class="timecode">[01:19:51]</i> **Ben:** Really!

<i class="timecode">[01:19:52]</i> **Chance:** I thought that, too. Remember when I say Remix has to reteach you HTML. I completely forgot that.

<i class="timecode">[01:19:57]</i> **Ben:** Huh!

<i class="timecode">[01:19:58]</i> **Chance:** I knew it at one point. I forgot it. But yeah, so the default type of a button is actually `"submit"`, so we don't actually have to say this is a submit button, but we want it to be a submit button.

<i class="timecode">[01:20:07]</i> **Ben:** Interesting!

<i class="timecode">[01:20:08]</i> **Chance:** Yeah, so you can say — Why is it…? Oh, it's just slow to catch up. But yeah, no. So this will totally goof you up in Rem— well, it'll goof you up in HTML period but, like, especially, like, in React… you know, how do we normally submit a form if we're writing client-side React code? We always prevent default behavior anyway and do our own client-side submission logic, right?

<i class="timecode">[01:20:28]</i> **Ben:** Gotcha!

<i class="timecode">[01:20:28]</i> **Chance:** So we don't have to worry about silly things like this. We just say "onClick, yada, yada, yada, yada, whatever."

<i class="timecode">[01:20:33]</i> **Ben:** Okay!

<i class="timecode">[01:20:33]</i> **Chance:** But when we're dealing with plain ol' HTML forms, we have to remember these types of things. So, if you have more than one button anywhere inside of a form, make sure you say `type="button"`, because its default value is `"submit"`. So, if it's doing anything other than submitting or resetting the form, it needs to have a `type` attribute.

<i class="timecode">[01:20:49]</i> **Ben:** And here, we are looking to submit. Like, that's what we want. 

<i class="timecode">[01:20:52]</i> **Chance:** That's right. I just wanted to call that out because, like I said, I totally forgot this at one point and had to relearn it. And I say, I think so many people either forget or just think that the default `type` is `"button"`. 

<i class="timecode">[01:21:04]</i> **Ben:** Yeah! Interesting! And we've got Michael Chan on the chat who says, "That's why you have to add the attribute. Because it can accidentally submit forms in older browsers." Wild — today I learned!

<i class="timecode">[01:21:13]</i> **Chance:** Yep, yep! There you go!

<i class="timecode">[01:21:15]</i> So, I think we're good here. So, this is our component. Like, we've written this `NewTodoForm` component. Let's go ahead and render it in a couple of places.

<i class="timecode">[01:21:23]</i> **Ben:** Okay.

<i class="timecode">[01:21:24]</i> **Chance:** Go up to line… I think… I want to say it's going to be, like, 223 or something. There you go. So right after that separator, that `<hr />`.

<i class="timecode">[01:21:31]</i> **Ben:** Okay, right here.

<i class="timecode">[01:21:33]</i> **Chance:** So right after that, go ahead and render our `<NewTodoForm />`.

<i class="timecode">[01:21:37]</i> **Ben:** And this needs the list ID.

<i class="timecode">[01:21:39]</i> **Chance:** Yeah, and it's going to just be… you're gonna get that from your `todoList` object, so `todoList.id`.

<i class="timecode">[01:21:45]</i> **Ben:** `todoList.id`. Okay.

<i class="timecode">[01:21:47]</i> **Chance:** And just go ahead and copy that guy, the whole… the component you just rendered. And we're going to render it in that fallback clause if you don't have any todos as well. So right under where it says "No todos for this list yet." Yeah, there you go.

<i class="timecode">[01:22:02]</i> **Ben:** Okay!

<i class="timecode">[01:22:02]</i> **Chance:** Now let's save that guy, and then check out our UI. 

<i class="timecode">[01:22:08]</i> **Ben:** And it's already there!

<i class="timecode">[01:22:09]</i> Marco says, "That's why every Button abstraction I built used to have type="button" as a default. Now with Remix, I think it kind of doesn't make sense anymore." Yeah, it is… I dunno, it's weird because, Marco, like, you ARE overriding browser defaults there, but also you're overriding them to a new default that I think is what most people expect. Eh - still trying to figure out how I feel about that!

<i class="timecode">[01:22:34]</i> **Chance:** I used to do the same thing! Yeah, I used to do the same thing. I don't anymore mostly just as I'm just so used to being the default that I wanna… I think it's more for, like, my own memory. Like, I just… it helps me remember that that's the default, because if you goof it up, you'd be like, "Oh, yeah, that's wrong." So, there's also the type `"reset"` too which is using forms to clear all the data.

<i class="timecode">[01:22:55]</i> So, let's go ahead and create a new todo to test this guy out. So you'd make something else to do.

<i class="timecode">[01:23:05]</i> **Ben:** Ooooh!

<i class="timecode">[01:23:05]</i> **Chance:** Boom, there it goes! Pops right up on our incomplete todos.

<i class="timecode">[01:23:08]</i> **Ben:** Ooooh.

<i class="timecode">[01:23:10]</i> **Chance:** How did that work?

<i class="timecode">[01:23:13]</i> **Ben:** Hang on.

<i class="timecode">[01:23:15]</i> **Chance:** Let's add a little bit more functionality. Let's go back to our `NewTodoForm` component.

<i class="timecode">[01:23:19]</i> **Ben:** Okay?

<i class="timecode">[01:23:19]</i> **Chance:** Because I mentioned clearing the field value after we submit.

<i class="timecode">[01:23:22]</i> **Ben:** Yeah!

<i class="timecode">[01:23:24]</i> **Chance:** So create — right under your `submissionAction` variable that we didn't end up using, let's go ahead and write a `useEffect`, a `React.useEffect`.

<i class="timecode">[01:23:33]</i> **Ben:** It would help if I could spell "React" correctly, turns out!

<i class="timecode">[01:23:39]</i> **Chance:** I don't spell anything right. I just rely on TypeScript to fix it for me usually. Nine out of ten times, it does, so.

<i class="timecode">[01:23:48]</i> So inside of our effect, we're going to call a function — or this is a function, obviously. So, we're going to check if our `submissionAction`… so check if `submissionAction.` — so `submissionAction` is going to be a string if it exists, so `.startsWith()`.

<i class="timecode">[01:24:05]</i> **Ben:** Okay.

<i class="timecode">[01:24:05]</i> **Chance:** We're going to check that it starts with a certain substring. And since TypeScript's very smart, it knows that this might be undefined, so it does the optional chaining for us, which is very, very nice.

<i class="timecode">[01:24:15]</i> **Ben:** Niiiice.

<i class="timecode">[01:24:15]</i> **Chance:** And I'm going to convince you to switch to TypeScript on this, either today or later.

<i class="timecode">[01:24:20]</i> **Ben:** I am sold on the value proposition of TypeScript. I just have not been… like, I've not, like, played with it enough. I haven't actually really started doing it. My new role though — it's funny, like, folks mentioned, like, oh, I'm contractually obligated to use TypeScript now.

<i class="timecode">[01:24:34]</i> **Chance:** Yeah.

<i class="timecode">[01:24:34]</i> **Ben:** Like, of course we use TypeScript at Microsoft. But, like, I'm sold on the value proposition just haven't actually really gotten to using it day in, day out.

<i class="timecode">[01:24:47]</i> **Chance:** Cool, so now we've—

<i class="timecode">[01:24:49]</i> **Ben:** Martin is calling out, "That todo app is starting to look like Basecamp."

<i class="timecode">[01:24:52]</i> **Chance:** Shh. We don't… we don't say these things out loud.

<i class="timecode">[01:24:56]</i> **Ben:** We don't say these things out loud!

<i class="timecode">[01:24:57]</i> **Chance:** I'm just kidding. Total coincidence. Absolutely complete coincidence that we called it PM Camp

<i class="timecode">[01:25:03]</i> **Ben:** Of course!

<i class="timecode">[01:25:04]</i> **Chance:** Yeah. So, I never said I was that creative, okay? Let's get that out of the way right now.

<i class="timecode">[01:25:10]</i> So, yeah, we've got our stuff. Oh, yeah. So what are we doing? We want to clear this field. So check that our action starts with… 'cause we remember, we might have… yeah, let's just go ahead and check this. We probably don't even actually need to check this, but I'm going to check it anyway 'cause I might want to create another action later. So check that it starts with `"/dashboards"` — the same action that we used in our form. We can even say equal to, if we wanted to.

<i class="timecode">[01:25:37]</i> **Ben:** Yeah, in our form, so…

<i class="timecode">[01:25:39]</i> **Chance:** I usually say `startsWith` just because sometimes we'll have params at the end or something.

<i class="timecode">[01:25:43]</i> **Ben:** Ohhh, okay.

<i class="timecode">[01:25:44]</i> **Chance:** But yeah, I'll just copy that action and pop that in there.

<i class="timecode">[01:25:47]</i> **Ben:** I know we've got a few people in the chat who are, like, regularly using Remix. I would be incredibly curious, like, how y'all are going about this, because it also feels like you could use, like, a regex match and stuff like that. I'd be curious to know what y'all's preferences are here and if the Remix community has landed on conventions here. 

<i class="timecode">[01:26:08]</i> **Chance:** Not really. This is how I write it.

<i class="timecode">[01:26:11]</i> **Ben:** Okay.

<i class="timecode">[01:26:12]</i> **Chance:** This is mostly just JavaScript.

<i class="timecode">[01:26:13]</i> **Ben:** Yeah.

<i class="timecode">[01:26:13]</i> **Chance:** Like Remix isn't really forcing your hand on most of this stuff. So we might provide higher level APIs for some of these in the future. I think the goal for this first version was to get as close to all the platform as we could.

<i class="timecode">[01:26:29]</i> **Ben:** Yeah!

<i class="timecode">[01:26:29]</i> **Chance:** Like, we didn't want to abstract things too early. We didn't want to give you tools that you couldn't actually dig into and use for whatever UI you wanted to render. So we may explore higher level attractions than what we have today. In fact, I would bet money on it. Like, I think by v2, v3, you're going to start seeing some, some more conventions pop up—

<i class="timecode">[01:26:47]</i> **Ben:** Okay!

<i class="timecode">[01:26:48]</i> **Chance:** —to handle some of these things with a little less typing, but for now, they're pretty low level and that's by design.

<i class="timecode">[01:26:53]</i> So, and someone else also said this, too: "I thought the goal of Remix was not to use `useEffect` and `useState`?" That is not necessarily the goal of Remix. The goal of Remix is not to get rid of React. We love React, right? Like, these hooks are core, fundamental pieces of React. I think of `useState` and `useEffect` in a Remix app as tools to provide progressive enhancement. Which is exactly what we're doing now, right? Right now, all we're this effect for… So, we're going to check to make sure if we're currently submitting, we want to clear the value in that form field, because if it's submitting, we're optimistically updating the UI while it submits, so let's go ahead and clear the value! Because if we clear the value, it's as if we've already created the todo. That todo is already inflight and it's handled up above in our other component in that useFetchers hook, right?

<i class="timecode">[01:27:43]</i> **Ben:** Yeah.

<i class="timecode">[01:27:43]</i> **Chance:** 'Cause It's going to be one of those fetchers that this thing catches. So it's going to pop up there immediately, it's going to clear the field immediately, and it's going to look like it just happens, right?

<i class="timecode">[01:27:53]</i> **Ben:** Yeah!

<i class="timecode">[01:27:53]</i> **Chance:** So this is a progressive enhancement right here. 

<i class="timecode">[01:27:55]</i> **Ben:** It is not required — like, for a usable experience, it's not required to clear this out. However, it is a nice-to-have, right? So if the JavaScript hasn't loaded yet, you know, or if, you know, some network hiccup comes up and the JavaScript doesn't load, right? You still have a functional minimum viable experience. But, you know, if it DOES load, it's nice to do a few things like this for user experience purposes.

<i class="timecode">[01:28:23]</i> **Chance:** Oh, totally.

<i class="timecode">[01:28:23]</i> **Ben:** And that's kind of the goal of progressive enhancement here. 

<i class="timecode">[01:28:26]</i> **Chance:** Yeah, we're not out to get rid of state or `useState` or `useEffect` or any of the built-in hooks. We're out there… We can help you get rid of a lot of them, because a lot of the things that you used to need state for and used to use effects for, you don't need to anymore.

<i class="timecode">[01:28:36]</i> **Ben:** Mhmm.

<i class="timecode">[01:28:37]</i> **Chance:** But that's not our goal. And we, you know, we really love React, and we love its core APIs, and we want to use them to create great experiences,so.

<i class="timecode">[01:28:44]</i> So, we also want a dependency in this dependency array, too. Go ahead and pop `submissionAction` in there, too.

<i class="timecode">[01:28:51]</i> **Ben:** You got it!

<i class="timecode">[01:28:52]</i> **Chance:** So, anytime our submission actually changes, we recheck and see if it's inflight. If it is, clear that value.

<i class="timecode">[01:29:00]</i> **Ben:** Okay!

<i class="timecode">[01:29:00]</i> **Chance:** And I think you can give it a save! Let's try it out!

<i class="timecode">[01:29:06]</i> And if you fill out the… if you just add and press enter, now guess what? You should be able to keep on typing.

<i class="timecode">[01:29:15]</i> **Ben:** Nice!

<i class="timecode">[01:29:15]</i> **Chance:** It does lose focus, doesn't it? Yeah, we'll fix that. I'm going to make my own todo in PM Camp to fix focus management on this page.

<i class="timecode">[01:29:27]</i> **Ben:** Alright!

<i class="timecode">[01:29:30]</i> **Chance:** I think we have a default focus manager higher up in the tree that moves focused to the top—

<i class="timecode">[01:29:38]</i> **Ben:** Okay.

<i class="timecode">[01:29:39]</i> **Chance:** —to one of the other elements. Usually when you route change in a client-navigated app like this, you want to move focus to somewhere higher in the tree…

<i class="timecode">[01:29:50]</i> **Ben:** Yeahhh.

<i class="timecode">[01:29:51]</i> **Chance:** …to something interactive at the top of the tree, right? In this case, we don't want to do that. So I'm going to…

<i class="timecode">[01:29:56]</i> **Ben:** "focus management, Marcy Sutton…"

<i class="timecode">[01:30:00]</i> **Chance:** Yeah, so this technique actually came from Marcy Sutton. I'm glad you're searching for this because we don't build this into Remix like Gatsby does. And the reason for that is there are certain cases like this one that we're seeing now where we need to override this behavior—

<i class="timecode">[01:30:16]</i> **Ben:** Yeah.

<i class="timecode">[01:30:16]</i> **Chance:** —and we don't have good APIs for that just yet. So we're working on APIs, some abstractions internally to improve this experience as best we can.

<i class="timecode">[01:30:24]</i> **Ben:** Mhmm.

<i class="timecode">[01:30:24]</i> **Chance:** For now, we sort of leave it up to the developer to make these decisions. So, we don't want to abstract things that are really hard to get out of.

<i class="timecode">[01:30:31]</i> **Ben:** Yeah!

<i class="timecode">[01:30:31]</i> **Chance:** And that's the ultimate goal. But we do want to provide easier APIs for focus management overall, but there are certain cases where you really do need to take more granular control of this experience, and this is definitely one of those, so.

<i class="timecode">[01:30:42]</i> **Ben:** I've definitely had experiences with messy focus management in React applications, and it's one of those things of, like…

<i class="timecode">[01:30:50]</i> **Chance:** It's hard!

<i class="timecode">[01:30:50]</i> **Ben:** It's so hard to come up with the right abstraction for because you could have a best practice, but the best practice is going to work eight times out of ten, right?

<i class="timecode">[01:30:58]</i> **Chance:** Totally.

<i class="timecode">[01:30:58]</i> **Ben:** Not even nine times out of ten, right?

<i class="timecode">[01:31:00]</i> **Chance:** Yeah.

<i class="timecode">[01:31:00]</i> **Ben:** And you need the escape hatch, and the escape hatch has to be just as intuitive because otherwise, like, you're just going to lead to a bad keyboard experience if your focus management starts fighting with itself.

<i class="timecode">[01:31:12]</i> **Chance:** Yeah, for sure. And that article by Marcy is great, and that team did a lot of really great research. Because we really hadn't explored the multiple — like, the client-side routing community, like, we had Reach Router, which is something that one of my bosses Ryan helped build, right? But Reach Router was really sort of an experiment because we didn't really have best practices for routing in React and focus management. Like, we were figuring that out as well.

<i class="timecode">[01:31:41]</i> **Ben:** Mhmm.

<i class="timecode">[01:31:42]</i> **Chance:** And the experiences that worked really great for server-rendered or server-routed applications are not always the same for client-routing applications.

<i class="timecode">[01:31:50]</i> **Ben:** Yeah.

<i class="timecode">[01:31:50]</i> **Chance:** So there's still a lot to be explored in this area. The core web platform — like, the Chrome team I know is working on the App History API, and they're working on other APIs that might make this even easier in the future!

<i class="timecode">[01:32:01]</i> **Ben:** Mhmm.

<i class="timecode">[01:32:01]</i> **Chance:** There's been a lot of work done here, but there's still more to be done, there's still more exploration, and it's still sort of up to the developer at the end of the day to know how to handle those route changes and how to move focus once the routes change. And sometimes, you might not want to do anything when you change! So yeah, at the end of the day, test your application with screenreaders and make sure it makes sense.

<i class="timecode">[01:32:23]</i> **Ben:** Yeah. Okay!

<i class="timecode">[01:32:27]</i> **Chance:** But I think we're good! Like, I feel pretty good about this, aside from the sort of clunky CSS. We can make it prettier, but we can do that another time.

<i class="timecode">[01:32:34]</i> **Ben:** For sure.

<i class="timecode">[01:32:35]</i> **Chance:** I feel good about what we built today. 

<i class="timecode">[01:32:36]</i> **Ben:** Absolutely! So I think this is a great time to open the floor for questions from the chat. If there's anything you wanted to see more of or anything that you're not quite clear on, please feel free to drop your questions in the chat. But we'll be, I think, wrapping up fairly soon, so if you've got questions, get them in now! And yeah!

<i class="timecode">[01:32:59]</i> **Chance:** Ben, did you have any questions for me?

<i class="timecode">[01:33:01]</i> **Ben:** I… don't think so at the moment. Like, I feel like I would want to… Oh, actually! So, you know, at some point I would probably want to start, like, a Remix project from the ground up, right? Lik,e there was a lot here that was already built out, a lot of abstractions that were already provided — things that we didn't look into today. Like, we've seen a lot of the poor concepts of Remix, but this wouldn't necessarily be a great, like, starting point for someone who's not really seen Remix before, right? Like, so, for someone who might be looking to just fire up a new Remix project and kind of get started, like, from the ground up, like, what are some resources we've got on that front? 

<i class="timecode">[01:33:44]</i> **Chance:** Yeah, so all that information is in our docs. I'll tell you right now, if you pop open your terminal, we can start one up in about 30 seconds.

<i class="timecode">[01:33:51]</i> **Ben:** Okay. Let's try it.

<i class="timecode">[01:33:53]</i> **Chance:** Back out into your parent directory here somewhere. And then, run `npx create-remix@latest`. At symbol, latest. Yeah, there you go. And then run this guy.

<i class="timecode">[01:34:07]</i> **Ben:** Will this ask me for a name of a directory, or…?

<i class="timecode">[01:34:09]</i> **Chance:** It's going to ask you some questions, yeah. So go ahead and run that guy. It's going to ask you… First you need to install the package, obviously 

<i class="timecode">[01:34:19]</i> I said 30 seconds. I didn't account for the fact that you need to install it first.

<i class="timecode">[01:34:22]</i> **Ben:** Alright.

<i class="timecode">[01:34:23]</i> **Chance:** So now, it's going to ask you where do you want to create your app. And it's going to default to `my-remix-app`, but you can call it whatever you want.

<i class="timecode">[01:34:32]</i> Alright.

<i class="timecode">[01:34:33]</i> And the next question is going to ask, like, "Where do you want to deploy this thing?" And this is a question that I think will trip some folks up early on, because they're not… maybe you want to create an app and you're not entirely sure. You can just use our Remix app server if you're not sure, and it creates a plain old Express server for you in your directory.

<i class="timecode">[01:34:49]</i> And then it's going to ask if you want to work with TypeScript or JavaScript and if you want to run install on all your dependencies.

<i class="timecode">[01:34:55]</i> **Ben:** Okay!

<i class="timecode">[01:34:56]</i> **Chance:** And once this is done installing, you'll just `cd` into your Remix app, run `npm run dev`, and you're ready to go. 

<i class="timecode">[01:35:01]</i> **Ben:** Cool. And I probably should not have actually told that to run `npm install`, because I'm not really gonna look at that.

<i class="timecode">[01:35:07]</i> Can we quickly real, like real quickly dive into maybe deployment?

<i class="timecode">[01:35:12]</i> **Chance:** Uh, sure! S, we don't have our own hosting platform just yet. And I say "just yet." We may never have. We're not a hosting company. So, Remix's goal is to allow you to deploy pretty much anywhere. And we're going to have — as you saw in those initial questions, we're gonna have multiple deployment targets.

<i class="timecode">[01:35:32]</i> **Ben:** Okay.

<i class="timecode">[01:35:32]</i> **Chance:** So where are you actually deploy is totally dependent on your deployment targets. So it's actually — I think it's a good idea to sort of think about where you want to deploy and what that deployment looks like before you create a new app. If you're just playing around with it and you want to explore, totally start with the Remix app server, and you can even deploy that to any Node server you want. But we're not gonna — So we've got a README file in the root of this new directory that you just created that's going to walk through both the development and the deployment for this application.

<i class="timecode">[01:35:59]</i> **Ben:** Okay.

<i class="timecode">[01:36:00]</i> **Chance:** For the plain Remix server, it's just a Node server. So if you wanted to… you'd have to write your own script if you wanted some deploy-from-GitHub situation. But we also deploy to Vercel. We have an adapter to deploy to Vercel. We have an adapter to deploy to Netlify. So if you're familiar and comfortable with those platforms, you can deploy there, and the README file will walk you through your GitHub synchronization and deployment techniques for those targets.

<i class="timecode">[01:36:27]</i> **Ben:** Okay.

<i class="timecode">[01:36:28]</i> **Chance:** But it is going to look a little different depending on where you deploy.

<i class="timecode">[01:36:31]</i> **Ben:** Did we go with a Remix app server for PM Camp? 

<i class="timecode">[01:36:37]</i> **Chance:** I believe so, yeah. Yeah, I believe so.

<i class="timecode">[01:36:40]</i> **Ben:** Okay, cool.

<i class="timecode">[01:36:41]</i> **Chance:** Because I'm ultimately just running a local server.

<i class="timecode">[01:36:44]</i> **Ben:** Got it. Okay, cool.

<i class="timecode">[01:36:46]</i> I think… It doesn't seem like there's been any questions from the chat, so I think, let's go ahead and start wrapping this up! What do you think, Chance? 

<i class="timecode">[01:36:55]</i> **Chance:** I feel good! Yeah, like I said, this code is going to be up here pretty soon, and I'm gonna share the link so everyone who watched will have access to dig in even further! But in the meantime, check out my Twitter. Check out — oh, can we plug my course?

<i class="timecode">[01:37:07]</i> **Ben:** Let's do it!

<i class="timecode">[01:37:08]</i> **Chance:** 'Cause I just released a course. If you are watching this video and you're like, "What the heck is this TypeScript thing?" — first of all, TypeScript's awesome, in my humble opinion, but it's also kind of confusing and it can be a little verbose. I have a course that I just released on Egghead for refactoring a React app from JavaScript to TypeScript. Did I share that with you in the…? Hold on. I think I did, but I'm going to have to share it. I'll just share it directly in the chat—

<i class="timecode">[01:37:32]</i> **Ben:** Yeah!

<i class="timecode">[01:37:33]</i> **Chance:** —since I can do that, too. I forgot I can do that. Give me just a minute. I gotta get that link.

<i class="timecode">[01:37:41]</i> **Ben:** In the meantime, I'm going to embiggen us, and we had a question earlier, just someone who wanted to see my excellent sweater again. So here it is in in big, as I arrange myself in the camera there. Maybe I'll get, like, extra close. So yeah, big ol' T-rex sweater. T-rex is wearing the same sweater. You gotta. Okay. 

<i class="timecode">[01:38:08]</i> **Chance:** Recursive! I love your sweater, I really do. I think of myself with my Santa hat as the young Santa from "Santa Claus is Coming to Town"—

<i class="timecode">[01:38:18]</i> **Ben:** Okay.

<i class="timecode">[01:38:18]</i> **Chance:** —that claymation Santa movie, 'cause he's got a big red beard! And mine's a little smaller now.

<i class="timecode">[01:38:22]</i> **Ben:** Mhmm.

<i class="timecode">[01:38:22]</i> **Chance:** But he's a red-bearded Santa in his youth. So, think of me as young Santa, even though I'm not that young. Getting kinda old. But anyway. I plugged my course.

<i class="timecode">[01:38:32]</i> **Ben:** Yes!

<i class="timecode">[01:38:33]</i> **Chance:** If you want to learn TypeScript in React, go to check out my course. It'll teach you how to refactor a JavaScript React app to TypeScript. If you want to follow me on Twitter, I tweet a bunch of nonsense. Sometimes I talk about tech. Sometimes I don't!

<i class="timecode">[01:38:45]</i> I don't know. That's all I got. Check out the Remix docs. I think Remix is great. If you have any questions, I'm around on Discord, Twitter, anywhere.

<i class="timecode">[01:38:54]</i> **Ben:** Remix has a Discord, right?

<i class="timecode">[01:38:56]</i> **Chance:** We do! Yeah. If you go to remix.run, there are links to the Remix Discord, if you want an invite there. It's all on the public. I think it's under Resources or something. I don't remember. It's somewhere. 

<i class="timecode">[01:39:10]</i> **Ben:** It's probably on the docs and not the homepage. 

<i class="timecode">[01:39:14]</i> **Chance:** We should probably fix that. 

<i class="timecode">[01:39:16]</i> **Ben:** Yeah, okay. Let's see if we can find… There we go.

<i class="timecode">[01:39:20]</i> **Chance:** It's under Community. There you go. Boom. Yeah, I'm going to make a todo. I'm gonna add that to the actual navigation.

<i class="timecode">[01:39:26]</i> **Ben:** So, Marcos is asking if we would talk about Reach UI. We actually sort of have already together! That was when we did the tab component, right?

<i class="timecode">[01:39:37]</i> **Chance:** Yeah, we did that in another stream.

<i class="timecode">[01:39:38]</i> **Ben:** Yeah.

<i class="timecode">[01:39:38]</i> **Chance:** So if you've got a link to that video, that would be a really good one to dive in to Reach UI.

<i class="timecode">[01:39:42]</i> For those that don't know Reach UI is a UI library. Ryan Florence initially created it. I started working on it and started maintaining it a couple of years ago. I don't maintain it as much anymore just because time. Like, I'm a busy fella.

<i class="timecode">[01:39:58]</i> **Ben:** Mhmm.

<i class="timecode">[01:39:59]</i> **Chance:** But it's a pretty good community that has been using it for a long time and most of the components are fairly stable at this point, so definitely if you're interested in that sort of thing, check out Reach UI! Yeah, and if you have any issues with it, like I said, I'm around.

<i class="timecode">[01:40:12]</i> **Ben:** Ah, the "future of." I imagine you might tweet about that, perhaps, so follow — I'm not going to ask fo future-of stuff right now on stream, but reach out to Chance. Yeah.

<i class="timecode">[01:40:28]</i> Cool! Let's go ahead and call this done! So y'all, while typically we stream every Tuesday, I'm not going to be streaming next week because holiday reasons. So I will see you in the new year for January 4. I actually just had to reschedule my January 4 stream, so I'm going to figure out something good to do. But if you enjoy things like accessibility and core web technologies, if you enjoy seeing guests such as Chance here, y'all should hit follow! You should also go to twitter.com/SomeAnticsDev where I'll be tweeting all the updates for all the upcoming streams. 

<i class="timecode">[01:41:08]</i> But yeah, with that, I will see you in the new year. Thank you all so much for being here and joining me on this journey with Chance! 

<i class="timecode">[01:41:16]</i> **Chance:** Ben, it's been great! Come hang out with us in Discord. Chat with me and all my really coworkers, and we'll see you on the internet.

<i class="timecode">[01:41:23]</i> **Ben:** Awesome.

<i class="timecode">[01:41:24]</i> **Chance:** Thanks, Ben!

<i class="timecode">[01:41:24]</i> **Ben:** See you around. Bye, y'all!