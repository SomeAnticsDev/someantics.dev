/**
 * Generates a Cloudinary-optimized image for the specified profile
 * @param {string} profileName Name of person whose avatar we're fetching
 * @param {Object<string, Profile>} [profiles] all profiles
 * @returns {string} Optimized Cloudinary URL for the given avatar
 */
function avatar(profileName, profiles = {}) {
	if (profiles[profileName] && profiles[profileName].customAvatarUrl) {
		return profiles[profileName].customAvatarUrl;
	}

	let encodedProfileName = profileName.replace(/ /g, '%20');
	return `https://res.cloudinary.com/bendmyers/image/upload/w_1000,c_fill,ar_1:1,g_auto,f_auto,q_auto/v1617494798/Some%20Antics%20Avatars/${encodedProfileName}`;
}

module.exports = {
	avatar
};

/**
 * @type {Object} Profile
 * @property {string} [customAvatarUrl] manually provided Cloudinary link
 */