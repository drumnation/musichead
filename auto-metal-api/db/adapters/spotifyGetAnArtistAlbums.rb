require_relative 'required'
require_relative 'request'

puts "Step 8: spotify get an artist"

def getSpotifyArtistAlbumsEndpoint(id)
    uri = URI.parse("https://api.spotify.com/v1/artists/#{id}/albums")
end

def getSpotifyArtistAlbums(id)
    uri = getSpotifyArtistAlbumsEndpoint(id)
    response = request(uri)
    puts "8.1 getSpotifyArtistAlbums Response Code: #{response.code}"
    JSON.parse(response.body)
end