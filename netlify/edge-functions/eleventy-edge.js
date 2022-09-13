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
			const currentTheme = context.cookies.get('theme') || 'system';
			eleventyConfig.addGlobalData('theme', currentTheme);
			eleventyConfig.addFilter('isCurrentTheme', (theme) => {
				return theme === currentTheme;
			})
		});

		return await edge.handleResponse();
	} catch (e) {
		console.log('ERROR', { e });
		return context.next(e);
	}
};
