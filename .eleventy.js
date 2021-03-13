module.exports = (eleventyConfig) => {
	eleventyConfig.addCollection('streams', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/streams/*.md');
	});

	eleventyConfig.addPassthroughCopy('./src/css/');

	return {
		dir: {
			input: 'src'
		}
	};
};