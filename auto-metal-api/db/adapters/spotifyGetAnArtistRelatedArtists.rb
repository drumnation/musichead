require_relative 'required'
require_relative 'request'

puts "Step 7: spotify get related artists"

def getArtistRelatedArtists(id)
    uri = URI.parse("https://api.spotify.com/v1/artists/#{id}/related-artists")
end

def getSpotifyArtistRelatedArtists(id)
    uri = getAudioAnalysisEndpoint(id)
    response = request(uri)
    puts "7.1 getSpotifyAudioAnalysis Response Code: #{response.code}"
    # JSON.parse(response.body)
    response.body
end