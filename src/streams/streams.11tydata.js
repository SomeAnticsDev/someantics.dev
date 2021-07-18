const moment = require('moment');

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
	if (!date) return;
	
	const truncatedDate = date.substring(0, date.indexOf(' 00:00:00'));
	const formattedTime = formatTimeOfDay(time);

	return new Date(`${truncatedDate} ${formattedTime} CDT`).toISOString();
}

/**
 * Determines whether a given stream is upcoming
 * @param {string} date datestamp formatted like "Sat Aug 28 2021 00:00:00 GMT-0500 (Central Daylight Time)"
 * @param {string} time pretty time of day
 * @returns {boolean} `true` if stream is in the future; `false` otherwise
 */
function isUpcoming(date, time) {
	if (!date || !time) return;

	const utc = formatIsoDate(date, time);
	const now = moment();
	const stream = moment(utc);
	return now.isBefore(stream);
}

module.exports = {
	layout: 'stream.html',
	permalink: '/{{ page.fileSlug }}/',
	timeOfDay: '12pm',
	addNbsp: true,
	eleventyComputed: {
		date: '{{ page.date }}',
		dateIso: data => formatIsoDate(data.date, data.timeOfDay),
		isUpcoming: data => isUpcoming(data.date, data.timeOfDay)
	}
};