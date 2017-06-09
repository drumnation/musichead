require_relative 'required'
require_relative 'request'

def get_recommendations_based_on_seeds(id)
    URI("https://api.spotify.com/v1/recommendations/seed_tracks=#{id}")
end

def get_spotify_reccomendations(id)
    uri = get_recommendations_based_on_seeds(id)
    response = request(uri)
    puts "8. get_spotify_recommendations Response Code: #{response.code}"
    response.body
end