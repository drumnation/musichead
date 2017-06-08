require_relative 'required'
require_relative 'request'

puts "Step 1: spotify get an artist"

def getSpotifyArtistEndpoint(id)
    uri = URI.parse("https://api.spotify.com/v1/artists/#{id}")
end

def getSpotifyArtist(id)
    uri = getSpotifyArtistEndpoint(id)
    response = request(uri)
    puts "1.1 getSpotifyArtist Response Code: #{response.code}"
    JSON.parse(response.body)
end

# puts getSpotifyArtist('0ybFZ2Ab08V8hueghSXm6E')['genres']