const sass = require('eleventy-plugin-sass');
const embedYouTube = require('eleventy-plugin-youtube-embed');
const socialImages = require('@11tyrocks/eleventy-plugin-social-images');
const moment = require('moment');
const normalizeUrl = require('normalize-url');
const removeMarkdown = require('remove-markdown');
const {avatar} = require('./src/utils/cloudinary');
const {formatHosts, getAvatarsForThumbnails} = require('./src/utils/format-hosts');
const {structureHostForApi} = require('./src/utils/structure-host-for-api');

module.exports = (eleventyConfig) => {
	// Collections
	eleventyConfig.addCollection('streams', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/streams/*.md');
	});

	eleventyConfig.addCollection('upcomingStreams', (collectionApi) => {
		return collectionApi
			.getFilteredByGlob('./src/streams/*.md')
			.filter(stream => stream.data.isUpcoming);
	});

	// Passthroughs
	eleventyConfig.addPassthroughCopy('./src/css/');
	eleventyConfig.addWatchTarget('./src/css/');
	eleventyConfig.addPassthroughCopy('./src/thumbnails/');

	// Plugins
	eleventyConfig.addPlugin(sass);
	eleventyConfig.addPlugin(embedYouTube);
	eleventyConfig.addPlugin(socialImages);

	// Filters & shortcodes
	eleventyConfig.addFilter('date', (date, format) => moment(date).utc().format(format));
	eleventyConfig.addFilter('normalizeUrl', url => normalizeUrl(url, {stripProtocol: true}));
	eleventyConfig.addFilter('isUpcoming', streamDate => moment().isBefore(streamDate));
	eleventyConfig.addFilter('removeSpecialCharacters', string => string.replace(/[^\w\s]/g, ''));
	eleventyConfig.addFilter('avatar', avatar);
	eleventyConfig.addFilter('formatHosts', formatHosts);
	eleventyConfig.addFilter('getAvatarsForThumbnails', getAvatarsForThumbnails);
	eleventyConfig.addFilter('structureHostForApi', structureHostForApi);
	eleventyConfig.addFilter('removeMarkdown', removeMarkdown);
	eleventyConfig.addFilter('removeNewlines', str => str.replace(/\n+/g, ' '));

	// Configure frontmatter parsing
	eleventyConfig.setFrontMatterParsingOptions({excerpt: true, excerpt_alias: 'excerpt'});

	return {
		dir: {
			input: 'src'
		}
	};
};