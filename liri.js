require("dotenv").config();

const moment = require("moment");
const fs = require("fs");
const axios = require("axios");
const Spotify = require('node-spotify-api');
const keys = require("./keys");

// var spotify = new Spotify({
//     id: '9bbc19f28d9e485384179b909802c826',
//     secret: 'b69857d64b134dbeaf51013150cec2c7'
// });

var spotify = new Spotify(keys.spotify)

var userInput = process.argv[2];
var userQuery = process.argv[3];



var divider = "\n------------------------------------------------------------\n\n";

userCommand(userInput, userQuery)

function userCommand(userInput, userQuery) {
    //console.log("User input value: " + userInput);
    //console.log("User query value: " + userQuery);
    switch (userInput) {

        case "concert-this":
            concertThis(userQuery);
            break;

        case "spotify-this-song":
            if (userQuery === undefined) {
                userQuery = "Ace of Base The Sign"
            };
            spotifyThisSong(userQuery);
            break;

        case "movie-this":
            if (userQuery === undefined) {
                userQuery = 'Mr. Nobody'
            };

            movieThis(userQuery);
            break;

        case "do-what-it-says":
            doThis();
            break;
        default:
            console.log("\n" + "Enter any of the following commands after 'node liri.js': " + "\n" +
                "concert-this 'artist/band name' " + "\n" +
                "spotify-this-song 'the name of a song to search for' " + "\n" +
                "movie-this 'title of a movie' " + "\n" +
                "do-what-it-says"
            );
    };
};



//-------------OMDB API--------------

function movieThis(userQuery) {
    var queryUrl = "http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&tomatoes=True&apikey=trilogy";

    axios.get(queryUrl).then(function (response) {
        var jsonData = response.data;
        var showData = [
            'Movie Title: ' + jsonData.Title,
            'Year: ' + jsonData.Year,
            'IMDB Rating: ' + jsonData.imdbRating,
            'Rotten Tomatoes Rating: ' + jsonData.Ratings[1].Value,
            'Country: ' + jsonData.Country,
            'Language: ' + jsonData.Language,
            'Movie Plot:' + jsonData.Plot,
            'Actors: ' + jsonData.Actors
        ].join("\n\n");

        fs.appendFile("log.txt", showData + divider, function (err) {
            if (err) throw err;
            console.log(showData);
        });
    });
};

//------Spotify API ------------

function spotifyThisSong(userQuery) {

    spotify
        .search({
            type: 'track',
            query: userQuery
        })
        .then(function (response) {
            var jsonData = response.tracks.items[0];
            var showData = [
                'Artist: ' + jsonData.artists[0].name,
                'Song Name: ' + jsonData.name,
                'Spotify Link: ' + jsonData.external_urls.spotify,
                'Album: ' + jsonData.album.name,
            ].join("\n\n");

            fs.appendFile("log.txt", showData + divider, function (err) {
                if (err) throw err;
                console.log(showData);
            });
        })
        .catch(function (err) {
            console.log(err);
        });
};

//--------- Bands in Town API --------------

function concertThis(userQuery) {

    var bITURL = "https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp";

    axios.get(bITURL).then(function (response) {
        var jsonData = response.data[0];

        var showData = [
            'Band Name: ' + userQuery,
            'Venue Name: ' + jsonData.venue.name,
            'Location: ' + jsonData.venue.city + ', ' + jsonData.venue.region + ', ' + jsonData.venue.country,
            'Event Date: ' + moment(jsonData.datetime).format("MM/DD/YYYY h:mm A")
        ].join("\n\n");

        fs.appendFile("log.txt", showData + divider, function (err) {
            if (err) throw err;
            console.log(showData);
        });
    });

};

//---------- Do This ---------------------

function doThis() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data.split(",");
        userInput = dataArr[0];
        userQuery = dataArr[1];
        // userCommand(userInput, userQuery);
        spotifyThisSong(userQuery);
    });
};