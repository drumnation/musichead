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

def displaySeedData(searchForTrack)
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
        Hometown: TK
        Formation Date: TK
        Description:
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
    2.  GENRES
    *************************

        Name: #{getAnArtist["genres"]}

    *************************
    3.  ALBUM
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
    4.  SONG
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
        Lyrics: TK
        YouTube Music Video: TK
        Reddit Comments URL: TK
        Latest News: TK
        Tabs Sheet Music: TK
    
    *************************
    5.  Record Label
    *************************

        name: #{getAnAlbum["label"]}

    HEREDOC
end

def displayAllSeedData
    puts "4.1 displayAllSeedData send search json to display form"
    displaySeedData(searchForAllTracks)
    # searchForAllTracks.each do | query |
    #     displaySeedData(query)
    # end
end

displayAllSeedData