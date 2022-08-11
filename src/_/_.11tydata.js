module.exports = (process.env.ELEVENTY_ENV === 'production') ?
	{ permalink: false, eleventyExcludeFromCollections: true } :
	{};