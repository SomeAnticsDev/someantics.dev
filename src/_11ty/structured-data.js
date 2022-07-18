const { DateTime, Duration } = require('luxon');
const { avatar } = require('../utils/cloudinary');
const removeDate = require('./remove-date');

const ben = {
	'@type': 'Person',
	name: 'Ben Myers',
	url: 'https://benmyers.dev/',
	jobTitle: 'Web Developer and Accessibility Advocate',
	image: 'https://res.cloudinary.com/bendmyers/image/upload/v1617491695/ben.jpg',
	sameAs: [
		'https://benmyers.dev/',
		'https://twitter.com/BenDMyers',
		'https://www.youtube.com/bendmyers',
		'https://www.twitch.tv/SomeAnticsDev',
		'https://www.linkedin.com/in/BenDMyers',
		'https://github.com/BenDMyers/',
		'https://www.polywork.com/bendmyers'
	]
};

function formatHostAsPerformer(hostName, profiles) {
	if (hostName === 'Ben Myers') {
		return ben;
	}

	const hostProfile = profiles[hostName] || {};

	const hostJsonLd = {
		'@type': 'Person',
		name: hostProfile.name || hostName,
		image: hostProfile.customAvatarUrl || avatar(hostProfile.name || hostName)
	};

	const otherSites = [];
	if (hostProfile.website) {
		otherSites.push(hostProfile.website);
	}
	if (hostProfile.twitter) {
		otherSites.push(`https://twitter.com/${hostProfile.twitter}`);
	}
	if (hostProfile.twitch) {
		otherSites.push(`https://twitch.tv/${hostProfile.twitch}`);
	}
	if (hostProfile.instagram) {
		otherSites.push(`https://www.instagram.com/${hostProfile.instagram}`);
	}
	if (otherSites.length) {
		hostJsonLd.sameAs = otherSites;
	}

	return hostJsonLd;
}

function structuredData(data) {
	const thumbnail = `${data.site}/thumbnails/${removeDate(data.page.fileSlug)}.png`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BroadcastEvent',
		broadcastOfEvent: {
			'@type': 'Event',
			name: data.title,
			description: data.cleansedExcerpt,
			image: {
				'@type': 'ImageObject',
				url: thumbnail
			},
			eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
			eventStatus: 'https://schema.org/EventScheduled',
			startDate: data.dateIso,
			endDate: DateTime
				.fromISO(data.dateIso)
				.plus(Duration.fromISO(data.duration || 'PT1H'))
				.toISO(),
			duration: data.duration || 'PT1H',
			audience: 'Web developers',
			location: {
				'@type': 'VirtualLocation',
				url: 'https://www.twitch.tv/SomeAnticsDev'
			},
			organizer: ben,
			performers: data.hosts ?
				data.hosts.map(hostName => formatHostAsPerformer(hostName, data.profiles)) :
				undefined,
		},
		description: data.cleansedExcerpt,
		location: {
			'@type': 'VirtualLocation',
			url: 'https://www.twitch.tv/SomeAnticsDev'
		},
		organizer: ben,
		performers: data.hosts ?
			data.hosts.map(hostName => formatHostAsPerformer(hostName, data.profiles)) :
			undefined,
		inLanguage: 'en-US',
		isAvailableForFree: true,
		isLiveBroadcast: true,
		subtitleLanguage: 'en-US',
		videoFormat: 'HD'
	};

	if (data.upload) {
		jsonLd.video = {
			'@type': 'VideoObject',
			url: data.upload,
			name: `${data.title} | Some Antics`,
			description: data.cleansedExcerpt,
			thumbnail,
			thumbnailUrl: thumbnail,
			duration: data.duration || 'PT1H',
			requiresSubscription: false
		};
	};

	return JSON.stringify(jsonLd);
}

module.exports = { structuredData };