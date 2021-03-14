const embedYouTube = require('eleventy-plugin-youtube-embed');
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
	eleventyConfig.addPlugin(embedYouTube, {lite: true});

	// Filters
	eleventyConfig.addFilter('normalizeUrl', url => normalizeUrl(url, {stripProtocol: true}));
	eleventyConfig.addFilter('removeSpecialCharacters', string => string.replace(/[^\w\s]/g, ''))

	return {
		dir: {
			input: 'src'
		}
	};
};