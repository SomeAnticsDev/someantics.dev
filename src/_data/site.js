module.exports = () => {
	return process.env.ELEVENTY_ENV === 'production' ?
		'https://someantics.dev' :
		'http://localhost:8080'
}