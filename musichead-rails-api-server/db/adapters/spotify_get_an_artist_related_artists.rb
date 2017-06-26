require_relative 'required'
require_relative 'request'

def get_artist_related_artists(id)
    URI.parse("https://api.spotify.com/v1/artists/#{id}/related-artists")
end

def get_spotify_artist_related_artists(id)
    uri = get_artist_related_artists(id)
    response = request(uri)
    puts "4. get_spotify_related_artists => Response Code: #{response.code}"
    JSON.parse(response.body)
end