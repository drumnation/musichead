require_relative 'required'
require_relative 'request'

def getRecommendationsBasedOnSeeds(id)
    URI("https://api.spotify.com/v1/recommendations/seed_tracks=#{id}")
end

def getSpotifyReccomendations(id)
    uri = getRecommendationsBasedOnSeeds(id)
    response = request(uri)
    puts "8. getSpotifyRecommendations Response Code: #{response.code}"
    response.body
end