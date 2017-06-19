import Spotify from 'spotify-web-api-js'

// SEARCH

function searchForArtist(query) {
    const spotifyApi = new Spotify()
    spotifyApi.setAccessToken(localStorage["spotify_token"])
    return spotifyApi.searchArtists(query)
}

function searchForTrack(query) {
    return fetch(`https://api.spotify.com/v1/search?q=track:${query}&type=track&limit=1`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    }).then( response => response.json())
}

function searchForAlbum(query) {
    return fetch(`https://api.spotify.com/v1/search?q=album:${query}&type=album&limit=1`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    }).then( response => response.json())
}

// ARTIST

function getArtistTopTracks(artist) {
    const spotify = new Spotify()
    spotify.setAccessToken(localStorage["spotify_token"])
    return spotify.getArtistTopTracks(artist.id, "US")
}

function getArtistAlbums(artist) {
    const spotify = new Spotify()
    spotify.setAccessToken(localStorage["spotify_token"])
    return spotify.getArtistAlbums(artist.id, {limit: 20})
}

function getRelatedArtists(seedArtist) {
    return fetch(`https://api.spotify.com/v1/artists/${seedArtist}/related-artists`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    }).then( response => response.json())
}

// ALBUMS

function getAlbumTracks(albumId) {
    const spotify = new Spotify()
    spotify.setAccessToken(localStorage["spotify_token"])
    return spotify.getAlbumTracks(albumId)
}

function getNewAlbumReleases() {
    const spotify = new Spotify()
    spotify.setAccessToken(localStorage["spotify_token"])
    return spotify.getNewReleases()
}


// TRACKS

function getRelatedTracksBasedOnTrack(track_id) {
    return fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${track_id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage["spotify_token"]}`,
        },
        method: 'GET',
    }).then( response => response.json())
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

function postAddTracksToPlaylist(user_id, playlist_id, uris_to_add) {
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

function putReorderPlaylistTracks(user_id, playlist_id, uris_to_add) {
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

function deletePlaylistTracks(user_id, playlist_id, uris_to_add) {
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
    getRelatedTracksBasedOnTrack,
    getUserRecentlyPlayedTracks,
    getUserSavedTracks,
    getUserCurrentlyPlayingTrack,
    putStartStopUserPlayback,
    putSeekToPositionInCurrentlyPlayingTrack,
    postAddTracksToPlaylist,
    putReorderPlaylistTracks,
    deletePlaylistTracks
}


