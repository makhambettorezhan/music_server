var unirest = require("unirest");

const APIKEY = '6c993b9193mshcc8f4b5fecb4f37p17ec7djsn26c33c7f853f';

const album = (id, callback) => {
	var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/album/" + id);

	req.headers({
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": APIKEY,
		"useQueryString": true
	});


	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		callback(res.body);
	});

};

module.exports = album;