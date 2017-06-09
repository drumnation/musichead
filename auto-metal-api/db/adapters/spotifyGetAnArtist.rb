require_relative 'required'
require_relative 'request'

def getSpotifyArtistEndpoint(id)
    URI("https://api.spotify.com/v1/artists/#{id}")
end

def getSpotifyArtist(id)
    uri = getSpotifyArtistEndpoint(id)
    response = request(uri)
    puts "2. getSpotifyArtist => Response Code: #{response.code}"
    JSON.parse(response.body)
end