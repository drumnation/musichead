require_relative 'required'
require_relative 'token'

puts "Step 2: spotify search for an item"

def getSpotifyTrackQueriesFromCSV
    artistSongMigrationArray = File.open('./db/junk_and_band_song_names.csv').map do | line |
        line_array = line.gsub('"', '').gsub("\r\n", "").split(',')
        { artist: line_array[0], song: line_array[1] }
    end.uniq!
    artistSongMigrationArray.collect { | line | "#{line[:artist]} #{line[:song]}" }
end

def createSpotifyQueryUri(query)
    URI.parse(URI.encode("https://api.spotify.com/v1/search?q=#{query}&type=track"))
end

def searchForSpotifyTrack(query)
    uri = createSpotifyQueryUri(query)
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/json"
    request["Authorization"] = "Bearer #{TOKEN}"
    req_options = { use_ssl: uri.scheme == "https" }
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) {|http| http.request(request)}
    JSON.parse(response.body)
end

def searchForAllTracks
    getSpotifyTrackQueriesFromCSV.map do | query | 
        puts searchForSpotifyTrack(query)
    end
end