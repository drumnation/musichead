require_relative 'required'
require_relative 'request'

puts "Step 3: spotify get an album"

def getSpotifyAlbumEndpoint(id)
    uri = URI.parse("https://api.spotify.com/v1/albums/#{id}")
end

def getSpotifyAlbum(id)
    uri = getSpotifyAlbumEndpoint(id)
    response = request(uri)
    puts "1.1 getSpotifyAlbum Response Code: #{response.code}"
    JSON.parse(response.body)
end