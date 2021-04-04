/**
 * Generates a Cloudinary-optimized image for the specified profile
 * @param {string} profileName Name of person whose avatar we're fetching
 * @returns {string} Optimized Cloudinary URL for the given avatar
 */
function avatar(profileName) {
	let encodedProfileName = profileName.replace(/ /g, '%20');
	return `https://res.cloudinary.com/bendmyers/image/upload/c_thumb,g_face,q_auto,f_auto,w_400,h_400/v1617494798/Some%20Antics%20Avatars/${encodedProfileName}.jpg`;
}

module.exports = {
	avatar
};