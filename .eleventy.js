const embedYouTube = require('eleventy-plugin-youtube-embed');

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

	return {
		dir: {
			input: 'src'
		}
	};
};