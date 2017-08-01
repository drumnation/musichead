require_relative 'required'
require_relative 'request'

def get_top_tracks_endpoint(id)
    URI("https://api.spotify.com/v1/artists/#{id}/top-tracks?country=US")
end

def get_spotify_artist_top_tracks(id)
    uri = get_top_tracks_endpoint(id)
    response = request(uri)
    puts "6. get_top_tracks => Response Code: #{response.code}"
    JSON.parse(response.body)
end