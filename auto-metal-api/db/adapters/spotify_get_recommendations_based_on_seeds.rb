require_relative 'required'
require_relative 'request'

def get_recommendations_based_on_seeds(id)
    URI.parse("https://api.spotify.com/v1/recommendations/?seed_tracks=#{id}")
end

def get_spotify_related_songs(id)
    uri = get_recommendations_based_on_seeds(id)
    response = request(uri)
    puts "8. get_related_songs => Response Code: #{response.code}"
    JSON.parse(response.body)
end