var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");

req.query({
	"q": "the dark side of the moon"
});

req.headers({
	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	"x-rapidapi-key": "8ed411b6c6msh6da23a5719ea603p154f6fjsn10c332c3e72a",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
