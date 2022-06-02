var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");
const APIKEY = '6c993b9193mshcc8f4b5fecb4f37p17ec7djsn26c33c7f853f';
req.query({
	"q": "the dark side of the moon"
});

req.headers({
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"x-rapidapi-key": APIKEY,
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
