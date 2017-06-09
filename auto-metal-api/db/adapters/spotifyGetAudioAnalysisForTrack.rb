require_relative 'required'
require_relative 'request'

def getAudioAnalysisEndpoint(id)
    URI("https://api.spotify.com/v1/audio-analysis/#{id}")
end

def getSpotifyAudioAnalysisForTrack(id)
    uri = getAudioAnalysisEndpoint(id)
    response = request(uri)
    puts "7. getSpotifyAudioAnalysis => Response Code: #{response.code}"
    response.body
end