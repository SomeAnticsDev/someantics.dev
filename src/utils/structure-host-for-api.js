const {avatar} = require('./cloudinary');

/**
 * Restructures profile object for public API
 * @param {{
 * 		name: string,
 * 		pronouns: string,
 * 		customAvatarUrl?: string,
 * 		twitch?: string,
 * 		twitter?: string,
 * 		website?: string
 * }} host object representing a single stream host
 * @returns {{
 * 		name: string,
 * 		pronouns: string,
 * 		avatar: string,
 * 		twitch?: string,
 * 		twitter?: string,
 * 		website?: string
 * }}
 */
function structureHostForApi({customAvatarUrl, ...host}) {
	const hostAvatar = customAvatarUrl || avatar(host.name);
	return {...host, avatar: hostAvatar};
}

module.exports = {
	structureHostForApi
};