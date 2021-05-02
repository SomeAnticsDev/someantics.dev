const {comparators} = require('generate-comparators');
const profiles = require('../_data/profiles.json');
const { avatar } = require('./cloudinary');

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
 * 
 * @param {[String]} hostList
 * @param {boolean} asHtml
 * @returns {string}
 */
function formatHosts(hostList) {
	let hosts = [...hostList].sort(byPoliteness.asc);

	hosts = hosts.map(host => `<b>${host}</b>`);

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