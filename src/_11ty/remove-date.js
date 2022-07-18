/**
 * Removes a leading YYYY-MM-DD date from the start of a string
 * @param {string} slug file slug which may start with YYYY-MM-DD
 * @returns {string} slug without date
 */
module.exports = function removeDate(slug) {
	return slug.replace(/\d{4}-\d{2}-\d{2}-/, '');
}