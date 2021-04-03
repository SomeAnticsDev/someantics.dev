const embedYouTube = require('eleventy-plugin-youtube-embed');
const moment = require('moment');
const normalizeUrl = require('normalize-url');

module.exports = (eleventyConfig) => {
	// Collections
	eleventyConfig.addCollection('streams', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/streams/*.md');
	});

	// Passthroughs
	eleventyConfig.addPassthroughCopy('./src/css/');
	eleventyConfig.addWatchTarget('./src/css/');

	// Plugins
	eleventyConfig.addPlugin(embedYouTube);

	// Filters
	eleventyConfig.addFilter('date', (date, format) => moment(date).utc().format(format));
	eleventyConfig.addFilter('normalizeUrl', url => normalizeUrl(url, {stripProtocol: true}));
	eleventyConfig.addFilter('isUpcoming', streamDate => moment().isBefore(streamDate));
	eleventyConfig.addFilter('removeSpecialCharacters', string => string.replace(/[^\w\s]/g, ''));

	return {
		dir: {
			input: 'src'
		}
	};
};