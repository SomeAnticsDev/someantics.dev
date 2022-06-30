const fs = require('fs');
const {google} = require('calendar-link');
const moment = require('moment');
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
 * Gets UTC timestamp for a stream
 * @param {string} date datestamp formatted like "Sat Aug 28 2021 00:00:00 GMT-0500 (Central Daylight Time)"
 * @param {string} time pretty time of day
 * @returns {string} UTC timestamp for stream
 */
function formatIsoDate(date, time) {
	if (!date || !time) return;

	const [weekday, month, day, year] = date.split(' ');
	const truncatedDate = [weekday, month, day, year].join(' ');

	
	const formattedTime = formatTimeOfDay(time);
	const isDaylightSavings = moment(date).isDST();
	const timezone = isDaylightSavings ? 'CDT' : 'CST';

	const gmtDate = new Date(`${truncatedDate} ${formattedTime} ${timezone}`);
	return gmtDate.toISOString();
}

/**
 * Determines whether a given stream is upcoming
 * @param {string} date datestamp formatted like "Sat Aug 28 2021 00:00:00 GMT-0500 (Central Daylight Time)"
 * @param {string} time pretty time of day
 * @returns {boolean} `true` if stream is in the future; `false` otherwise
 */
function isUpcoming(date, time) {
	// console.log({date, time})
	if (!date || !time) return;

	const utc = formatIsoDate(date, time);
	const now = moment();
	const stream = moment(utc);
	return now.isBefore(stream);
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
		dateIso: data => formatIsoDate(data.date, data.timeOfDay),
		hosts: data => (data.hosts || ['Ben Myers']),
		isUpcoming: data => isUpcoming(data.date, data.timeOfDay),
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