require_relative 'required'
require_relative 'request'

def get_spotify_album_endpoint(id)
    URI("https://api.spotify.com/v1/albums/#{id}")
end

def get_spotify_album(id)
    uri = get_spotify_album_endpoint(id)
    response = request(uri)
    puts "3. get_spotify_album => Response Code: #{response.code}"
    JSON.parse(response.body)
end