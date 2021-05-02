#!/usr/bin/env node

/*** CODE HAS BEEN CANNIBALIZED FROM https://github.com/5t3ph/eleventy-plugin-social-images ***/

const chromium = require('chrome-aws-lambda');
const fs = require('fs');
const path = require('path');

const outputDir = '_site';
const templateSrc = fs.realpathSync('src/_includes/thumbnail.html');
const dataPath = fs.realpathSync('pages.json');

(async () => {
	console.log('Starting social images...');

	const browser = await chromium.puppeteer.launch({
		args: chromium.args,
		executablePath: await chromium.executablePath,
		headless: chromium.headless,
	});

	const page = await browser.newPage();

	// Load html from template
	let html = fs
		.readFileSync(path.resolve(__dirname, templateSrc))
		.toString();

	// Get generated data json
	let data = path.resolve(__dirname, dataPath);
	if (!fs.existsSync(data)) {
		console.log('Invalid dataFile location or file name provided');
		process.exit(1);
	}
	console.log(fs.readFileSync(data, 'utf-8'));
	const pages = require(data);

	// Render html, wait for 0 network connections to ensure webfonts downloaded
	await page.setContent(html, {
		waitUntil: ['networkidle0'],
	});

	// Wait until the document is fully rendered
	await page.evaluateHandle("document.fonts.ready");

	// Set the viewport to your preferred image size
	await page.setViewport({
		width: 1280,
		height: 720,
		deviceScaleFactor: 1,
	});

	// Go over all the posts
	for (const post of pages) {
		// Update the H1 element with the post title
		await page.evaluate((post) => {
			const title = document.querySelector("h1");
			title.innerHTML = post.title;

			const footer = document.querySelector('footer');
			footer.innerHTML = `${post.streamDate} at ${post.timeOfDay} Central`;

			if (post.hosts) {
				const hostP = document.getElementById('hosts');
				hostP.innerHTML = `with ${post.hosts}`;

				let primaryAvatar = document.getElementById('avatar-1');
				primaryAvatar.src = post.featuredHosts[0];

				let secondaryAvatar = document.getElementById('avatar-2');
				secondaryAvatar.src = post.featuredHosts[1] || '';
			}
		}, post);

		const imagePath = `${fs.realpathSync(outputDir)}/${post.imgName}/thumbnail.png`
		console.log(`Image: ${imagePath}`);

		await page.evaluate(() => window.scrollBy(0, window.innerHeight));

		// Save screenshot
		await page.screenshot({
			path: imagePath,
			type: 'png',
			clip: { x: 0, y: 0, width: 1280, height: 720 },
		});
	}

	// close all pages, fix perm issues on windows 10 (https://github.com/puppeteer/puppeteer/issues/298)
	let browserPages = await browser.pages();
	await Promise.all(browserPages.map(page => page.close()));

	await browser.close();
	console.log('Social images complete!');
})();