require_relative 'required'
require_relative 'request'

puts "Step 8: spotify get artist top tracks"

def getTopTracks(id)
    URI("https://api.spotify.com/v1/artists/#{id}/top-tracks?country=US")
end

def getSpotifyArtistTopTracks(id)
    uri = getTopTracks(id)
    response = request(uri)
    puts "7.1 getTopTracks Response Code: #{response.code}"
    response.body
end