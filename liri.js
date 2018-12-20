require("dotenv").config();

const moment = require("moment");
const fs = require("fs");
const axios = require("axios");
const keys = require("./keys");

    var userInput = process.argv[2];
    var userQuery = process.argv.slice(3);
    var divider = "\n------------------------------------------------------------\n\n";
    
    userCommand(userInput, userQuery )

    function userCommand(userInput, userQuery){
        switch (userInput) {
            case "concert-this":
                concertThis();
                break;
            case "spotify-this":
                spotifyThisSong();
                break;
            case "movie-this":
                movieThis(userQuery);
                console.log(userQuery);
                
                break;
            case "do-this":
                doThis(userQuery);
                break;
            default:
                console.log("Invalid entry");
                break;      

        }
    }
   

    function movieThis(userQuery){
        var queryUrl = "http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&tomatoes=True&apikey=trilogy";
        //console.log(queryUrl);
    
        axios.get(queryUrl).then(function(response){
                var jsonData = response.data;
                var showData = [
                    'Movie Title: ' + jsonData.Title,
                    'Year: ' + jsonData.Year,
                    'IMDB Rating: ' + jsonData.imdbRating,
                    'Rotten Tomatoes Rating: ' + jsonData.tomatoRating,
                    'Country: ' + jsonData.Country,
                    'Language: ' + jsonData.Language,
                    'Movie Plot:' + jsonData.Plot,
                    'Actors: ' + jsonData.Actors
                ].join("\n\n"); 
                
                fs.appendFile("log.txt", showData + divider, function(err) {
                    if (err) throw err;
                    console.log(showData);  
                });
            });
    }

    function spotifyThisSong{
        
    }


   