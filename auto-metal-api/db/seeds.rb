# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'adapters/spotifyGetAnArtist'
require_relative 'adapters/spotifySearchForAnItem'

puts "Step 3: display all spotify data collected"

def displaySeedData(searchForTrack)
    puts "3.2: displaySeedData ArtistID"
    artistId = searchForTrack["tracks"]["items"].first["artists"].first["id"]
    puts "3.3: saved artistId: #{artistId}"
    getAnArtist = getSpotifyArtist(artistId)
    puts "3.4: displaySeedData #{getAnArtist}"

    <<~HEREDOC

    *** SPOTIFY SEED FILE ***

    *************************
    1.  ARTIST
    *************************
        
        Name:  #{searchForTrack["tracks"]["items"].first["artists"].first["name"]}
        Hometown: TK
        Formation Date: TK
        Description:
        Spotify Artist ID: #{searchForTrack["tracks"]["items"].first["artists"].first["id"]}

    *************************
    2.  GENRES
    *************************

        Name: #{getAnArtist["genres"]}

    *************************
    3.  ALBUM
    *************************

        Name: #{searchForTrack["tracks"]["items"].first["name"]}
        Release Year:
        Release Country:
        Type:
        Cover Art:
        Album Length:
        Number of Tracks:

    *************************
    4.  SONG
    *************************

        Name:
        Length:
        Type:
        Lyrics: TK
        YouTube Music Video: TK
        Spotify Preview:
        Spotify Open:
        Spotify Web:
        Spotify Related Songs: TK
        Reddit Comments URL: TK
        Latest News: TK
        Tabs Sheet Music: TK

    HEREDOC
end

def displayAllSeedData
    puts "3.1: displayAllSeedData, QUERY: #{searchForAllTracks}"
    displaySeedData(searchForAllTracks)
    # searchForAllTracks.each do | query |
    #     displaySeedData(query)
    # end
end

puts displayAllSeedData