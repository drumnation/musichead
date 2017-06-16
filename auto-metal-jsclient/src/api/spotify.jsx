import Spotify from 'spotify-web-api-js'

// SEARCH

function initializeSpotify() {
    const spotify = new Spotify()
    spotify.setAccessToken(localStorage["spotify_token"])
    return spotify
}

function searchForArtist(query) {
    const spotifyApi = intitializeSpotify()
    return spotifyApi.searchArtists(query)
    .then( artists => artists.json() )
}

function searchForTrack(query) {
    const spotifyApi = intitializeSpotify()
    return spotifyApi.searchTracks('Love')
    .then( track => track.json())
}

function searchForAlbum(query) {
    const spotifyApi = intitializeSpotify()
}

// ARTIST

function getArtistTopTracks(artist) {
    const spotifyApi = intitializeSpotify()
    return spotifyApi.getArtistTopTracks(artist.id, "US")
    .then(topTracks => topTracks.json())
}

function getArtistAlbums(artist) {
    const spotifyApi = intitializeSpotify()
    return spotifyApi.getArtistAlbums(artist.id, {limit: 10, offset: 20}, function(err, data) {
        if (err) console.error(err)
        else console.log('Artist albums', data)
    })
    .then(artistAlbums => artistAlbums.json())
}

function getRelatedArtists(seedArtist) {
    const spotifyApi = intitializeSpotify()
    return
}

// ALBUMS

function getAlbumTracks(album) {
    const spotifyApi = intitializeSpotify()
    return spotifyApi.getAlbum(album.id)
    .then( data => data.tracks.map( track => track.id ))
    .then( trackIds => spotifyApi.getTracks(trackIds) )
    .then( tracksInfo => console.log(tracksInfo) )
    .catch( error => console.error(error) )
}


// TRACKS

function getRelatedTracks(seedTrack) {
    const spotifyApi = intitializeSpotify()
    return
}

// ME

function getRecentlyPlayedTracks() {
    return fetch("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    }).then( response => response.json())
}

function getUserSavedTracks() {
    return fetch("https://api.spotify.com/v1/me/tracks", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    }).then( response => response.json())
}

function getUserFollowedArtists() {
    return fetch("https://api.spotify.com/v1/me/following?type=artist", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    })
    .then( response => response.json())
}

export { 
    searchForArtist, 
    searchForTrack, 
    searchForAlbum, 
    getArtistTopTracks,
    getArtistAlbums,
    getRelatedArtists,
    getAlbumTracks,
    getRelatedTracks,
    getRecentlyPlayedTracks,
    getUserSavedTracks
}


