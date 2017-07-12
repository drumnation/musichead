# MusicHead

### A Spotify powered platform to connect, listen, and share your opinions about music.

![Watch the Demo](/demo.gif)

## Final Project for Flatiron School's 15 week immersive Software Engineering Bootcamp in NYC.

### Project Concept

There are a variety of places on the web where people share and talk about music, but I don't think any of them are properly designed for it and the world would benefit from having such a platform.  This prototype displays several ideas for creating a user profile for friends to stalk centered solely around other people's music listening habits and favorites. 

It also shows the basic page construction for searching and displaying Spotify data so that there is a foundation of content to be shared and discussed from the site.  Future goals include synchronized listening, user submission and voting of tracks to site queues, and the gamification of music listening and appreciation.

I originally named the project "MetalHead" and was planning on making this prototype cater to the specific niche of music I am super interested in.  As the time alloted to us had become short I decided based on feedback from a lot many of my peers to make the site cater to all music genres in it's branding, changing the site to "MusicHead."

### Top Project Challenges Solved

+ My original thought was to remake my original side project Oneironaught.com, which I had designed before Flatiron. Pieced together using IFTTT, Wordpress, Buffer, and a variety of hacked together plugins I created a site that completely ran itself, creating content, and posting on social media.  

+ To begin I exported the database of songs from Wordpress. The data was a bit sloppy and my friend Scott helped me with some Regex to clean up the track data for use with the Spotify api. I created a rails seed file that uses multiple Spotify end points to download everything necessary to build a page with Spotify data for the 7,383 track titles. 

I plan on using this data, and even though I spent a good chunk of time on it I ended up not using it in this prototype after pivoting the concept a bit.

+ Created a Ruby on Rails API and serializer to render data as json for the React client, authenticating and persisting user and music content data.

+ Configured OAUTH2 Spotify Authorization using a combination of OMNIAUTH, Fetch, and Axios to retrieve Spotify tokens and facilitate the process of obtaining a a refresh token and periodically updating the user's main token when it expires.

+ Developed asynchronous redux actions and reducers to retrieve data from multiple api end points that depend on data from each other in order to make their api requests with chains of promises and conditionals.
