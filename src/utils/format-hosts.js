const {comparators} = require('generate-comparators');
const profiles = require('../_data/profiles.json');
const {avatar} = require('./cloudinary');

const byPoliteness = comparators(host => {
	switch (host) {
		case 'Ben Myers':
			return 1;
		case 'Tuna':
			return 2;
		default:
			return 0;
	}
});

/**
 * Formats hosts as a single string, ideal for thumbnails
 * @param {[String]} hostList array of stream hosts
 * @param {boolean} asHtml `true` if host names should be wrapped in `<b>` tags, `false` otherwise
 * @returns {string} list of all hosts, organized by politeness factor
 */
function formatHosts(hostList, asHtml) {
	let hosts = [...hostList].sort(byPoliteness.asc);

	if (asHtml) {
		hosts = hosts.map(host => `<b>${host}</b>`);
	}

	if (hosts.length === 1) {
		return hosts[0];
	} else if (hosts.length === 2) {
		return `${hosts[0]} and ${hosts[1]}`;
	} else {
		let finalHost = hosts.pop();
		let commaSeparatedHosts = hosts.join(', ');
		return `${commaSeparatedHosts}, and ${finalHost}`;
	}
}

function getAvatarsForThumbnails(hostList) {
	let hosts = [...hostList].sort(byPoliteness.asc);
	let featuredHosts = hosts.slice(0, 2);
	return JSON.stringify(featuredHosts.map(host => avatar(profiles[host].name)));
}

module.exports = {formatHosts, getAvatarsForThumbnails};