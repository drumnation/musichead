require_relative 'required'
require_relative 'request'

def get_spotify_track_queries_from_csv
    artist_song_migration_array = File.open('./db/junk_and_band_song_names.csv').map do | line |
        lines = line.gsub('"', '').gsub("\r\n", "").split(',') 
        { artist: lines[0], song: lines[1] }
    end.uniq!
    artist_song_migration_array.collect { | line | "#{line[:artist]} #{line[:song]}" }
end

def create_spotify_query_uri(query)
    URI(URI.escape("https://api.spotify.com/v1/search?q=#{query}&type=track"))
end

def search_for_spotify_track(query)
    uri = create_spotify_query_uri(query)
    response = request(uri)
    puts "1. search_for_spotify_track => Response Code: #{response.code}"
    JSON.parse(response.body)
end