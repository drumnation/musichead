# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'adapters/spotifyGetAnArtist'
require_relative 'adapters/spotifyGetAnAlbum'
require_relative 'adapters/spotifyGetAudioAnalysisForTrack'
require_relative 'adapters/spotifyGetRecommendationsBasedOnSeeds'
require_relative 'adapters/spotifyGetAnArtistRelatedArtists'
require_relative 'adapters/spotifyGetAnArtistTopTracks'
require_relative 'adapters/spotifyGetAnArtistAlbums'
require_relative 'adapters/spotifySearchForAnItem'

puts "Step 4: display all spotify data collected"

def display_seed_data(searchForTrack)
    trackId = searchForTrack["tracks"]["items"].first["id"]
    artistId = searchForTrack["tracks"]["items"].first["artists"].first["id"]
    puts "4.2: saved artistId: #{artistId}"
    albumId = searchForTrack["tracks"]["items"].first["album"]["id"]
    puts "4.3: saved albumId: #{albumId}"
    getAnArtist = getSpotifyArtist(artistId)
    puts "4.4: get spotify artist successful"
    getAnAlbum = getSpotifyAlbum(albumId)
    puts "4.5: get spotify album successful"
    puts <<~HEREDOC

    *** SPOTIFY SEED FILE ***

    *************************
    1.  ARTIST
    *************************
        
        Name: #{searchForTrack["tracks"]["items"].first["artists"].first["name"]}
        Popularity: #{getAnArtist["popularity"]}
        Spotify Open Artist: #{getAnArtist["external_urls"]["spotify"]}
        Spotify Followers: #{getAnArtist["followers"]["total"]}
        Big Image: #{getAnArtist["images"][0]["url"]}
        Medium Image: #{getAnArtist["images"][1]["url"]}
        Small Image: #{getAnArtist["images"][2]["url"]}
        Spotify Artist ID: #{searchForTrack["tracks"]["items"].first["artists"].first["id"]}
        Artists Related to Artist: #{p "Successfully Retrieved" if getSpotifyArtistRelatedArtists(artistId)}
        Artist Albums: #{p "Successfully Retrieved" if getSpotifyArtistAlbums(artistId)}
        Artist Top Tracks: #{p "Successfully Retrieved" if getSpotifyArtistTopTracks(artistId)}

    *************************
    2.  GENRE
    *************************

        name: #{getAnArtist["genres"]}

    *************************
    2.  ALBUM
    *************************

        Name: #{searchForTrack["tracks"]["items"].first["album"]["name"]}
        Popularity: #{getAnAlbum["popularity"]}
        Release Date: #{getAnAlbum["release_date"]}
        Big Image: #{searchForTrack["tracks"]["items"].first["album"]["images"][0]["url"]}
        Medium Image: #{searchForTrack["tracks"]["items"].first["album"]["images"][1]["url"]}
        Small Image: #{searchForTrack["tracks"]["items"].first["album"]["images"][2]["url"]}
        Number of Tracks: #{getAnAlbum["tracks"]["total"]}
        Spotify Album ID: #{searchForTrack["tracks"]["items"].first["album"]["id"]}
        Spotify Album Open: #{searchForTrack["tracks"]["items"].first["external_urls"]["spotify"]}

    *************************
    3.  SONG
    *************************

        Name: #{searchForTrack["tracks"]["items"].first["name"]}
        Popularity: #{searchForTrack["tracks"]["items"].first["popularity"]}
        Length: #{searchForTrack["tracks"]["items"].first["duration_ms"]}
        Track Number: #{searchForTrack["tracks"]["items"].first["track_number"]}
        Disc Number: #{searchForTrack["tracks"]["items"].first["disc_number"]}
        Spotify Preview: #{searchForTrack["tracks"]["items"].first["preview_url"]}
        Spotify Open: #{searchForTrack["tracks"]["items"].first["external_urls"]["spotify"]}
        Spotify Song ID: #{trackId}
        Spotify Audio Analysis: #{p "Successfully Retrieved" if getSpotifyAudioAnalysisForTrack(trackId)}
        Spotify Related Songs: #{p "Successfully Retrieved" if getRecommendationsBasedOnSeeds(trackId)}
    
    *************************
    4.  Record Label
    *************************

        name: #{getAnAlbum["label"]}

    HEREDOC

    song_attr = {
        name: searchForTrack["tracks"]["items"].first["name"],
        popularity: searchForTrack["tracks"]["items"].first["popularity"],
        length: searchForTrack["tracks"]["items"].first["duration_ms"],
        track_number: searchForTrack["tracks"]["items"].first["track_number"],
        disc_number: searchForTrack["tracks"]["items"].first["disc_number"],
        preview: searchForTrack["tracks"]["items"].first["preview_url"],
        open: searchForTrack["tracks"]["items"].first["external_urls"]["spotify"],
        audio_analysis: getSpotifyAudioAnalysisForTrack(trackId),
        related_songs: getRecommendationsBasedOnSeeds(trackId),
        spotify_song_id: trackId
    }

    temp_song = Song.new(song_attr)
    temp_label = RecordLabel.find_or_create_by(name: getAnAlbum["label"])
    
    genres = getAnArtist["genres"].map do | genre |
        Genre.find_or_create_by(name: genre)
    end
    
    artist_attr = {
        name: searchForTrack["tracks"]["items"].first["artists"].first["name"],
        popularity: getAnArtist["popularity"],
        open: getAnArtist["external_urls"]["spotify"],
        followers: getAnArtist["followers"]["total"],
        big_image: getAnArtist["images"][0]["url"],
        medium_image: getAnArtist["images"][1]["url"],
        small_image: getAnArtist["images"][2]["url"],
        related_artists: getSpotifyArtistRelatedArtists(artistId),
        spotify_albums: getSpotifyArtistAlbums(artistId),
        top_tracks: getSpotifyArtistTopTracks(artistId),
        spotify_artist_id: searchForTrack["tracks"]["items"].first["artists"].first["id"]
    }

    # artist = {
    #     name: 'Opeth',
    #     popularity: 60,
    #     open: 'https://open.spotify.com/artist/0ybFZ2Ab08V8hueghSXm6E',
    #     followers: 241197,
    #     big_image: 'https://i.scdn.co/image/b4db91b921c68fee49a81ac1a1edf2e1160eb51e',
    #     medium_image: 'https://i.scdn.co/image/1a716d3e371a6476e96d2f70f1a43c3e9edc5982',
    #     small_image: 'https://i.scdn.co/image/f952cce40f47e2571f7e0f918b56395612ed2843',
    #     spotify_artist_id: '0ybFZ2Ab08V8hueghSXm6E',
    #     related_artists: ['stuff', 'things'],
    #     spotify_albums: ['stuff', 'things'],
    #     top_tracks: ['stuff', 'things']
    # }
    temp_artist = Artist.create_with(artist_attr).find_or_initialize_by(name: artist_attr[:name])
    temp_artist.valid?
    puts temp_artist.errors.full_messages
    puts "got here!!!"

    album_attr = {
        name: searchForTrack["tracks"]["items"].first["album"]["name"],
        popularity: getAnAlbum["popularity"],
        release_date: getAnAlbum["release_date"],
        big_image: searchForTrack["tracks"]["items"].first["album"]["images"][0]["url"],
        medium_image: searchForTrack["tracks"]["items"].first["album"]["images"][1]["url"],
        small_image: searchForTrack["tracks"]["items"].first["album"]["images"][2]["url"],
        number_of_tracks: getAnAlbum["tracks"]["total"],
        open: searchForTrack["tracks"]["items"].first["external_urls"]["spotify"],
        spotify_album_id: searchForTrack["tracks"]["items"].first["album"]["id"]
    }
    puts "got right before there"
    temp_album = Album.create_with(album_attr).find_or_create_by(name: album_attr[:name], artist_id: temp_artist.id, record_label_id: temp_label.id)
    temp_song.album = temp_album
    temp_song.genres = genres
    temp_song.save
end

def display_and_seed_to_db
    puts "4.1 display_and_seed_to_db send search json to display form"
    # display_seed_data(searchForAllTracks)
    getSpotifyTrackQueriesFromCSV.each do | query |
        trackObject = searchForSpotifyTrack(query)
        display_seed_data(trackObject)
    end
end

display_and_seed_to_db