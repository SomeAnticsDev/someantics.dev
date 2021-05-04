module.exports = () => {
	return process.env.ELEVENTY_ENV === 'production' ?
		// 'https://someantics.dev' :
		'https://someantics.netlify.app/css/fonts.css' :
		'http://localhost:8080'
}