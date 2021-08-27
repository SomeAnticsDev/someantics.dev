const { byPoliteness } = require("./utils/format-hosts");

module.exports = function() {
	return {
		eleventyComputed: {
			horizon: data => data.collections.upcomingStreams.slice(1, 5),
			nextStream: data => data.collections.upcomingStreams[0]
		}
	};
}