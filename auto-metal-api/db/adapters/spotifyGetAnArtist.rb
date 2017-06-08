require_relative 'required'
require_relative 'token'

puts "Step 1: spotify get an artist"

def getSpotifyArtistEndpoint(id)
    uri = URI.parse("https://api.spotify.com/v1/artists/#{id}")
end

def getSpotifyArtist(id)
    uri = getSpotifyArtistEndpoint(id)
    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "application/json"
    request["Authorization"] = "Bearer #{TOKEN}"
    req_options = { use_ssl: uri.scheme == "https" }
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) {|http| http.request(request)}
    JSON.parse(response.body)
end

puts getSpotifyArtist('0ybFZ2Ab08V8hueghSXm6E')