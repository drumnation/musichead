# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require_relative 'adapters/spotifyGetAnArtist'
require_relative 'adapters/spotifySearchForAnItem'

def displaySeedData(query)
    puts <<~HEREDOC

    *** SPOTIFY SEED FILE ***

    *************************
    1.  ARTIST
    *************************
        
        Name:  #{query["tracks"]["items"].first["artists"].first["name"]}
        Hometown: TK
        Formation Date: TK
        Description: 

    *************************
    2.  GENRE
    *************************

        Name:

    *************************
    3.  ALBUM
    *************************

        Name: #{query["tracks"]["items"].first["name"]}
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
    searchForAllTracks.each do | query |
        displaySeedData(query)
    end
end

# displayAllSeedData