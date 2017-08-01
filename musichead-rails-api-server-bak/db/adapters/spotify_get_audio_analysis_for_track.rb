require_relative 'required'
require_relative 'request'

def get_audio_analysis_endpoint(id)
    URI.parse("https://api.spotify.com/v1/audio-analysis/#{id}")
end

def get_spotify_audio_analysis_for_track(id)
    uri = get_audio_analysis_endpoint(id)
    response = request(uri)
    puts "7. get_spotify_audio_analysis => Response Code: #{response.code}"
    JSON.parse(response.body)
end