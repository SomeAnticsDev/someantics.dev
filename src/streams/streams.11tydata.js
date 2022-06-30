const fs = require('fs');
const {google} = require('calendar-link');
const {DateTime, Interval} = require('luxon');
const removeMarkdown = require('remove-markdown');
const youtube = require('youtube-info-streams');

/**
 * @param {string} prettyTimeOfDay time of day formatted like "12pm"
 * @returns time of day formatted like 12:00 PM or 12:30:00 PM
 */
function formatTimeOfDay(prettyTimeOfDay) {
	return prettyTimeOfDay
		.replace('am', ':00 AM')
		.replace('pm', ':00 PM');
}

/**
 * 
 * @param {{
 * 	page: {
 * 		fileSlug: string
 * 	},
 * 	timeOfDay: string
 * }} data data cascade for given stream's page
 * @returns {string} ISO datetime string for stream time
 */
function dateIso(data) {
	const [year, month, day] = data.page.fileSlug.split('-');
	const [hour, minutes, amOrPm] = formatTimeOfDay(data.timeOfDay).split(/[\s:]/);
	const isPm = amOrPm === 'PM';
	const hourNum = Number(hour);
	const hour24 = (isPm && hourNum !== 12) ?
		hourNum + 12 :
		hourNum;
	const date = DateTime.local(
		Number(year),
		Number(month),
		Number(day),
		hour24,
		Number(minutes),
		0, // seconds
		0, // milliseconds
		{zone: 'America/Chicago'}
	);

	return date.toISO();
}

/**
 * Determines whether the stream is coming up
 * @param {{ dateIso: string }} data data cascade for provided stream
 * @returns {boolean} true if stream is yet to come
 */
function isUpcoming(data) {
	const now = DateTime.now();
	const nowAsInterval = Interval.fromDateTimes(now, now);
	const streamTime = DateTime.fromISO(data.dateIso);
	return nowAsInterval.isBefore(streamTime);
}

/**
 * 
 * @param {{
 * 	page: {
 * 		inputPath: string
 * 	}
 * }} data 
 */
function transcriptPath(data) {
	if (!data.page.inputPath.includes('/index.md')) {
		return false;
	}

	const transcriptFilePath = data.page.inputPath.replace('/index.md', '/transcript.md');
	return fs.existsSync(transcriptFilePath) ?
		transcriptFilePath :
		false;
}

/**
 * 
 * @param {string} youtubeUrl fully qualified URL for YouTube upload
 * @returns {boolean} whether the video upload is public or not
 */
async function getUploadIsPublic(youtubeUrl = '') {
	if (!process.env.NETLIFY) {
		return !!youtubeUrl;
	} else if (!youtubeUrl) {
		return false;
	} else if (youtubeUrl.includes('twitch.tv')) {
		return true;
	}

	const urlFragments = youtubeUrl.split('/');
	const videoId = urlFragments[urlFragments.length - 1]
		.replace('watch?v=', '');

	try {
		const {videoDetails} = await youtube.info(videoId);
		const {isPrivate, isUnlisted} = videoDetails;
		const isPublic = !isPrivate && !isUnlisted;
		return isPublic;
	} catch (err) {
		console.log('Unavailable:', videoId);
		return false;
	}
}

module.exports = {
	layout: 'stream.html',
	permalink: (data) => {
		if (data.page.inputPath.includes('/transcript.md')) {
			return false;
		}

		return data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, '') + '/index.html';
	},
	timeOfDay: '2pm',
	addNbsp: true,
	eleventyComputed: {
		cleansedExcerpt: data => (data.excerpt ? removeMarkdown(data.excerpt.trim()) : ''),
		date: '{{ page.date }}',
		dateIso,
		hosts: data => (data.hosts || ['Ben Myers']),
		isUpcoming,
		googleCalendarLink: data => google({
			title: `Some Antics: ${data.title}`,
			start: data.dateIso,
			duration: [1, 'hour'],
			location: 'https://twitch.tv/SomeAnticsDev',
			description: data.excerpt ?
				`${removeMarkdown(data.excerpt.trim())}\n\nhttps://twitch.tv/SomeAnticsDev` :
				'https://twitch.tv/SomeAnticsDev'
		}),
		uploadIsPublic: data => getUploadIsPublic(data.upload),
		transcriptPath
	}
};