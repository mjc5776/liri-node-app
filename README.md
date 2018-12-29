# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## Libraries, Packages and API's used
* axios
* moment.js
* spotify-api
* Bands in Town api
* OMDB api


## How the app works
Enter any of the following commands after node liri.js at the command line.
- #### concert-this 'artist/band name'  
  - **concert-this** searches for upcomming concerts for the artist/band specified. The bands in town api is used along with the axios api to return JSON data that includes the Name of the band or artist, venue name and location and date of the event.
  Moment.js is also used to format the event date in the **(MM/DD/YYYY h:mm A)** format.
  ![Alt text](/images/ConcertThis.jpg?raw=true "Screenshot of the concert-this functionality")
- #### spotify-this-song 'the name of a song to search for'
  - **spotify-this-song** searches for the song entered by the user leveraging the spotify api. JSON data that is returned includes:
      Artist, Song Name, Spofity Link, Album. If a song is not provided the spotify-this function will default to "The Sign" by Ace of Base
  ![Alt text](/images/SpotifyThis.jpg?raw=true "Screenshot of the spotify-this-song functionality")
  **No song provided. Data for The Sign by Ace of Base is returned.**
 
  ![Alt text](/images/SpofityThisNo.jpg?raw=true "Screenshot of the spotify-this-song without song provided")
- #### movie-this 'title of a movie'
  - **movie-this** searches for the movie title entered by the user. The OMDB api is used along with the axios api to return JSON data that includes the Movie Title, Year the movie was released, IMDB Rating, Rotton Tomatoes Rating, Country the movie was released in, Language, Movie Plot and Actors. If a movie is not provided data for the movie "Mr. Nobody" is returned.
  ![Alt text](/images/MovieThis.jpg?raw=true "Screenshot of the movie-this functionality")
  **No movie provided. Data for Mr. Nobody is returned**
  ![Alt text](/images/MovieThisNo.jpg?raw=true "Screenshot of the movie-this functionality")
- #### do-what-it-says
  - **do-what-it-says** uses the Node.js file system module to read the contents of random.txt. The text file random.txt contains the command **spotify-this-song** and the song title **"I Want it That Way"**. This data is retrieved using the FS module and passed to the **spotifyThisSong** function, returning the JSON data for this song.
   ![Alt text](/images/DoThis.jpg?raw=true "Screenshot of the do-this functionality")

