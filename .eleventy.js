const {EleventyRenderPlugin} = require('@11ty/eleventy');
const sass = require('eleventy-plugin-sass');
const embedTwitch = require('eleventy-plugin-embed-twitch');
const embedYouTube = require('eleventy-plugin-youtube-embed');
const socialImages = require('@11tyrocks/eleventy-plugin-social-images');
const moment = require('moment');
const normalizeUrl = require('normalize-url');
const removeMarkdown = require('remove-markdown');
const {avatar} = require('./src/utils/cloudinary');
const {formatHosts, getAvatarsForThumbnails} = require('./src/utils/format-hosts');
const {structureHostForApi} = require('./src/utils/structure-host-for-api');

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(config: EleventyConfig) => EleventyReturnValue}
 */
module.exports = (config) => {
	// config.setQuietMode(true);

	// Collections
	config.addCollection('streams', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/streams/**/index.md');
	});

	config.addCollection('upcomingStreams', (collectionApi) => {
		return collectionApi
			.getFilteredByGlob('./src/streams/**/index.md')
			.filter(stream => stream.data.isUpcoming);
	});

	config.addCollection('pastStreams', (collectionApi) => {
		return collectionApi
			.getFilteredByGlob('./src/streams/**/index.md')
			.filter(stream => !stream.data.isUpcoming);
	});


	// Passthroughs
	config.addPassthroughCopy('./src/css/');
	config.addWatchTarget('./src/css/');
	config.addPassthroughCopy('./src/thumbnails/');

	// Plugins
	config.addPlugin(EleventyRenderPlugin);
	config.addPlugin(sass, {outputDir: '_site/css', remap: true});
	config.addPlugin(embedYouTube);
	config.addPlugin(embedTwitch, {parent: 'someantics.dev'})
	config.addPlugin(socialImages);

	// Filters & shortcodes
	config.addFilter('date', (date, format) => moment(date).utc().format(format));
	config.addFilter('normalizeUrl', url => normalizeUrl(url, {stripProtocol: true}));
	config.addFilter('isUpcoming', streamDate => moment().isBefore(streamDate));
	config.addFilter('removeSpecialCharacters', string => string.replace(/[^\w\s]/g, ''));
	config.addFilter('avatar', avatar);
	config.addFilter('formatHosts', formatHosts);
	config.addFilter('getAvatarsForThumbnails', getAvatarsForThumbnails);
	config.addFilter('structureHostForApi', structureHostForApi);
	config.addFilter('removeMarkdown', removeMarkdown);
	config.addFilter('removeNewlines', str => str.replace(/\n+/g, ' '));
	config.addFilter('removeDate', str => str.replace(/\d{4}-\d{2}-\d{2}-/, ''))

	// Configure frontmatter parsing
	config.setFrontMatterParsingOptions({excerpt: true, excerpt_alias: 'excerpt'});

	return {
		dir: {
			input: 'src'
		}
	};
};