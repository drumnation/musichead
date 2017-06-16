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

function getUserRecentlyPlayedTracks() {
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

// ME -> PLAYBACK

function getUserCurrentlyPlayingTrack() {
    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    })
    .then( response => response.json())
}

function putStartStopUserPlayback(context_uri) {
    return fetch("https://api.spotify.com/v1/me/player/play", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'PUT',
        body: `${{context_uri: context_uri }}`
    })
    .then( response => response.json())
}

function putSeekToPositionInCurrentlyPlayingTrack(position_ms) {
    return fetch(`https://api.spotify.com/v1/me/player/seek?position_ms=${position_ms}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'PUT',
    })
    .then( response => response.json())
}

// PLAYLISTS

function postAddTracksToPlaylist(user_id, uris_to_add) {
    return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'POST',
    })
    .then( response => response.json())
    // request body or query string: uris, position *optional
}

function putReorderPlaylistTracks(user_id, uris_to_add) {
    return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'POST',
    })
    .then( response => response.json())
    // request body or query string: uris, position *optional
}

function deletePlaylistTracks(user_id, uris_to_add) {
    return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'DELETE',
    })
    .then( response => response.json())
    // request body or query string: uris, position *optional
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
    getUserRecentlyPlayedTracks,
    getUserSavedTracks,
    getUserCurrentlyPlayingTrack,
    putStartStopUserPlayback,
    putSeekToPositionInCurrentlyPlayingTrack,
    postAddTracksToPlaylist,
    putReorderPlaylistTracks,
    deletePlaylistTracks
}


