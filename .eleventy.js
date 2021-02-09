module.exports = (eleventyConfig) => {
	eleventyConfig.addCollection('streams', (collectionApi) => {
		return collectionApi.getFilteredByGlob('./src/streams/*.md');
	})

	return {
		dir: {
			input: 'src'
		}
	};
};