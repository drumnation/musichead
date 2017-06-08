require_relative 'required'
require_relative 'request'

puts "Step 2: spotify search for an item"

def getSpotifyTrackQueriesFromCSV
    artistSongMigrationArray = File.open('./db/junk_and_band_song_names.csv').map do | line |
        lines = line.gsub('"', '').gsub("\r\n", "").split(',')
        { artist: lines[0], song: lines[1] }
    end.uniq!
    artistSongMigrationArray.collect { | line | "#{line[:artist]} #{line[:song]}" }
end

def createSpotifyQueryUri(query)
    URI.parse(URI.encode("https://api.spotify.com/v1/search?q=#{query}&type=track"))
end

def searchForSpotifyTrack(query)
    uri = createSpotifyQueryUri(query)
    response = request(uri)
    puts "2.2 searchForSpotifyTrack Response Code: #{response.code}"
    JSON.parse(response.body)
end

def searchForAllTracks
    puts "2.1 searchForAllTracks, QUERY: #{getSpotifyTrackQueriesFromCSV.first}"
    searchForSpotifyTrack(getSpotifyTrackQueriesFromCSV.first)
    # getSpotifyTrackQueriesFromCSV.map do | query |
    #     puts query
    #     searchForSpotifyTrack(query)
    # end
end