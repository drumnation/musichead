require_relative 'required'
require_relative 'request'

def getSpotifyArtistAlbumsEndpoint(id)
    URI("https://api.spotify.com/v1/artists/#{id}/albums")
end

def getSpotifyArtistAlbums(id)
    uri = getSpotifyArtistAlbumsEndpoint(id)
    response = request(uri)
    puts "5. getSpotifyArtistAlbums => Response Code: #{response.code}"
    JSON.parse(response.body)
end