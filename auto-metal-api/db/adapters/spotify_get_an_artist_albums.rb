require_relative 'required'
require_relative 'request'

def get_spotify_artist_albums_endpoint(id)
    URI("https://api.spotify.com/v1/artists/#{id}/albums")
end

def get_spotify_artist_albums(id)
    uri = get_spotify_artist_albums_endpoint(id)
    response = request(uri)
    puts "5. get_spotify_artist_albums => Response Code: #{response.code}"
    JSON.parse(response.body)
end