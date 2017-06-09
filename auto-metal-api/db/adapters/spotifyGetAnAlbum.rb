require_relative 'required'
require_relative 'request'

def getSpotifyAlbumEndpoint(id)
    URI("https://api.spotify.com/v1/albums/#{id}")
end

def getSpotifyAlbum(id)
    uri = getSpotifyAlbumEndpoint(id)
    response = request(uri)
    puts "3. getSpotifyAlbum => Response Code: #{response.code}"
    JSON.parse(response.body)
end