/**
 * Generates a Mastodon profile URL given their handle
 * @param {string} handle Mastodon handle, formatted as `@username/@instance.tld`
 * @return {string} URL pointing to the person's Mastodon profile page
 */
function getMastodonProfileUrl(handle = '') {
	const [, username, mastodonInstance] = handle.split('@');
	const instanceUrl = new URL('https://' + mastodonInstance);
	instanceUrl.pathname = `/@${username}`;
	return instanceUrl.toString();
}

module.exports = {getMastodonProfileUrl};