require_relative 'required'
require_relative 'request'

def get_spotify_artist_endpoint(id)
    URI("https://api.spotify.com/v1/artists/#{id}")
end

def get_spotify_artist(id)
    uri = get_spotify_artist_endpoint(id)
    response = request(uri)
    puts "2. get_spotify_artist => Response Code: #{response.code}"
    JSON.parse(response.body)
end