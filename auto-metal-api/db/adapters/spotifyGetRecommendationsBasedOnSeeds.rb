require_relative 'required'
require_relative 'request'

puts "Step 6: spotify get reccomendations based on song seed"

def getRecommendationsBasedOnSeeds(id)
    uri = URI.parse("https://api.spotify.com/v1/recommendations/seed_tracks=#{id}")
end

def getSpotifyReccomendations(id)
    uri = getRecommendationsBasedOnSeeds(id)
    response = request(uri)
    puts "6.1 getSpotifyRecommendations Response Code: #{response.code}"
    # JSON.parse(response.body)
    response.body
end