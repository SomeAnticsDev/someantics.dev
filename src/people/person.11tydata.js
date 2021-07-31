module.exports = {
	pagination: {
		data: 'profiles',
		size: 1,
		resolve: 'values',
		alias: 'person'
	},
	permalink: '/people/{{ person.name | slug}}/index.html',
	layout: 'page.html',
	eleventyComputed: {
		title: data => data.person.name
	}
};