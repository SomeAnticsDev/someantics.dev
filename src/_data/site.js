module.exports = () => {
	return process.env.NETLIFY ? 'https://someantics.dev' : 'http://localhost:8080';
}