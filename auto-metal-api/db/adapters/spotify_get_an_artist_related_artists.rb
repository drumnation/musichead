require_relative 'required'
require_relative 'request'

def get_artist_related_artists(id)
    URI("https://api.spotify.com/v1/artists/#{id}/related-artists")
end

def get_spotify_artist_related_artists(id)
    uri = get_audio_analysis_endpoint(id)
    response = request(uri)
    puts "4. get_spotify_related_artists => Response Code: #{response.code}"
    response.body
end