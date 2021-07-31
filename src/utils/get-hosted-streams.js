/**
 * 
 * @param {object[]} streams list of all streams, past and future
 * @param {string} host unique name of host
 */
function getHostedStreams(streams = [], host = '') {
	return streams.filter(stream => stream.data.hosts?.includes(host));
}

module.exports = {getHostedStreams};