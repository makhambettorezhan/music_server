var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");
const APIKEY = '6c993b9193mshcc8f4b5fecb4f37p17ec7djsn26c33c7f853f';
const search = (title, callback) => {
	req.query({
		"q": title
	});

	req.headers({
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": APIKEY,
		"useQueryString": true
	});


	req.end(function (res) {
		callback(res.body);
	});

};

module.exports = search;


