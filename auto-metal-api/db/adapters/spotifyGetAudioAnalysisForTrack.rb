require_relative 'required'
require_relative 'request'

puts "Step 5: spotify get audio analysis for track"

def getAudioAnalysisEndpoint(id)
    uri = URI.parse("https://api.spotify.com/v1/audio-analysis/#{id}")
end

def getSpotifyAudioAnalysisForTrack(id)
    uri = getAudioAnalysisEndpoint(id)
    response = request(uri)
    puts "5.1 getSpotifyAudioAnalysis Response Code: #{response.code}"
    # JSON.parse(response.body)
    response.body
end