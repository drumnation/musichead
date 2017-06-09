require_relative 'required'
require_relative 'request'

def getArtistRelatedArtists(id)
    URI("https://api.spotify.com/v1/artists/#{id}/related-artists")
end

def getSpotifyArtistRelatedArtists(id)
    uri = getAudioAnalysisEndpoint(id)
    response = request(uri)
    puts "4. getSpotifyRelatedArtists => Response Code: #{response.code}"
    # JSON.parse(response.body)
    response.body
end