# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## Libraries and packages used
* axios
* moment.js
* spotify-api
* Bands in Town

## How the app works
Enter any of the following commands after node liri.js at the command line.
- #### concert-this 'artist/band name'  
  - **concert-this** searches for upcomming concerts for the artist/band specified. The bands in town api is used along with the axios api to return JSON data that includes the Name of the band or artist, venue name and location and date of the event.
- #### spotify-this-song 'the name of a song to search for'
  - **spotify-this-song** searches for the song entered by the user leveraging the spotify api. JSON data that is returned includes:
      Artist, Song Name, Spofity Link, Album
- #### movie-this 'title of a movie' 
  - **movie-this** searches for the movie title entered by the user. The OMDB api is used along with the axios api to return JSON data that includes the Movie Title, Year the movie was released, IMDB Rating, Rotton Tomatoes Rating, Country the movie was released in, Language, Movie Plot and Actors.
* do-what-it-says
