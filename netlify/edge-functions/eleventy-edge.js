import { EleventyEdge } from 'eleventy:edge';
import precompiledAppData from './_generated/eleventy-edge-app-data.js';

/**
 * @
 */
export default async (request, context) => {
	try {
		let edge = new EleventyEdge('edge', {
			request,
			context,
			precompiled: precompiledAppData,

			// default is [], add more keys to opt-in e.g. ['appearance', 'username']
			cookies: ['theme'],
		});

		edge.config((eleventyConfig) => {
			// Add some custom Edge-specific configuration
			// e.g. Fancier json output
			// eleventyConfig.addFilter('json', obj => JSON.stringify(obj, null, 2));
			eleventyConfig.addGlobalData('theme', context.cookies.get('theme') || 'system');
			eleventyConfig.addFilter('isCurrentTheme', (theme) => {
				return theme === context.cookies.get('theme');
			})
		});

		return await edge.handleResponse();
	} catch (e) {
		console.log('ERROR', { e });
		return context.next(e);
	}
};
