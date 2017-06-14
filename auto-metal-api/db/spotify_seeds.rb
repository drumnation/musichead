require_relative 'adapters/spotify_get_an_artist'
require_relative 'adapters/spotify_get_an_album'
require_relative 'adapters/spotify_get_audio_analysis_for_track'
require_relative 'adapters/spotify_get_recommendations_based_on_seeds'
require_relative 'adapters/spotify_get_an_artist_related_artists'
require_relative 'adapters/spotify_get_an_artist_top_tracks'
require_relative 'adapters/spotify_get_an_artist_albums'
require_relative 'adapters/spotify_search_for_an_item'


def display_seed_data(search_for_track)
    track_id = search_for_track["tracks"]["items"].first["id"]
    artist_id = search_for_track["tracks"]["items"].first["artists"].first["id"]
    album_id = search_for_track["tracks"]["items"].first["album"]["id"]
    get_an_artist = get_spotify_artist(artist_id)
    get_an_album = get_spotify_album(album_id)

    puts <<~HEREDOC

    *** SPOTIFY SEED FILE ***

    *************************
    1.  ARTIST
    *************************
        
        Name: #{search_for_track["tracks"]["items"].first["artists"].first["name"]}
        Popularity: #{get_an_artist["popularity"]}
        Spotify Open Artist: #{get_an_artist["external_urls"]["spotify"]}
        Spotify Followers: #{get_an_artist["followers"]["total"]}
        Big Image: #{get_an_artist["images"][0]["url"]}
        Medium Image: #{get_an_artist["images"][1]["url"]}
        Small Image: #{get_an_artist["images"][2]["url"]}
        Spotify Artist ID: #{search_for_track["tracks"]["items"].first["artists"].first["id"]}
        Artists Related to Artist: #{get_spotify_artist_related_artists(artist_id) ? "Successfully Retrieved" : "Failed Retrieval"}
        Artist Albums: #{get_spotify_artist_albums(artist_id) ? "Successfully Retrieved" : "Failed Retrieval"}
        Artist Top Tracks: #{get_spotify_artist_top_tracks(artist_id) ? "Successfully Retrieved" : "Failed Retrieval"}

    *************************
    2.  GENRE
    *************************

        name: #{get_an_artist["genres"]}

    *************************
    2.  ALBUM
    *************************

        Name: #{search_for_track["tracks"]["items"].first["album"]["name"]}
        Popularity: #{get_an_album["popularity"]}
        Release Date: #{get_an_album["release_date"]}
        Big Image: #{search_for_track["tracks"]["items"].first["album"]["images"][0]["url"]}
        Medium Image: #{search_for_track["tracks"]["items"].first["album"]["images"][1]["url"]}
        Small Image: #{search_for_track["tracks"]["items"].first["album"]["images"][2]["url"]}
        Number of Tracks: #{get_an_album["tracks"]["total"]}
        Spotify Album ID: #{search_for_track["tracks"]["items"].first["album"]["id"]}
        Spotify Album Open: #{search_for_track["tracks"]["items"].first["external_urls"]["spotify"]}

    *************************
    3.  SONG
    *************************

        Name: #{search_for_track["tracks"]["items"].first["name"]}
        Popularity: #{search_for_track["tracks"]["items"].first["popularity"]}
        Length: #{search_for_track["tracks"]["items"].first["duration_ms"]}
        Track Number: #{search_for_track["tracks"]["items"].first["track_number"]}
        Disc Number: #{search_for_track["tracks"]["items"].first["disc_number"]}
        Spotify Preview: #{search_for_track["tracks"]["items"].first["preview_url"]}
        Spotify Open: #{search_for_track["tracks"]["items"].first["external_urls"]["spotify"]}
        Spotify Song ID: #{track_id}
        Spotify Audio Analysis: #{get_spotify_audio_analysis_for_track(track_id) ? "Successfully Retrieved" : "Failed Retrieval"}
        Spotify Related Songs: #{get_spotify_related_songs(track_id) ? "Successfully Retrieved" : "Failed Retrieval"}
    
    *************************
    4.  Record Label
    *************************

        name: #{get_an_album["label"]}

    HEREDOC

    song_attr = {
        name: search_for_track["tracks"]["items"].first["name"],
        popularity: search_for_track["tracks"]["items"].first["popularity"],
        length: search_for_track["tracks"]["items"].first["duration_ms"],
        track_number: search_for_track["tracks"]["items"].first["track_number"],
        disc_number: search_for_track["tracks"]["items"].first["disc_number"],
        preview: search_for_track["tracks"]["items"].first["preview_url"],
        open: search_for_track["tracks"]["items"].first["external_urls"]["spotify"],
        audio_analysis: get_spotify_audio_analysis_for_track(track_id),
        related_songs: get_spotify_related_songs(track_id),
        spotify_song_id: track_id
    }

    temp_song = Song.new(song_attr)
    temp_label = RecordLabel.find_or_create_by(name: get_an_album["label"])
    
    genres = get_an_artist["genres"].map do | genre |
        Genre.find_or_create_by(name: genre)
    end
    
    artist_attr = {
        name: search_for_track["tracks"]["items"].first["artists"].first["name"],
        popularity: get_an_artist["popularity"],
        open: get_an_artist["external_urls"]["spotify"],
        followers: get_an_artist["followers"]["total"],
        big_image: get_an_artist["images"][0]["url"],
        medium_image: get_an_artist["images"][1]["url"],
        small_image: get_an_artist["images"][2]["url"],
        related_artists: get_spotify_artist_related_artists(artist_id),
        spotify_albums: get_spotify_artist_albums(artist_id),
        top_tracks: get_spotify_artist_top_tracks(artist_id),
        spotify_artist_id: search_for_track["tracks"]["items"].first["artists"].first["id"]
    }

    temp_artist = Artist.create_with(artist_attr).find_or_create_by(name: artist_attr[:name])

    album_attr = {
        name: search_for_track["tracks"]["items"].first["album"]["name"],
        popularity: get_an_album["popularity"],
        release_date: get_an_album["release_date"],
        big_image: search_for_track["tracks"]["items"].first["album"]["images"][0]["url"],
        medium_image: search_for_track["tracks"]["items"].first["album"]["images"][1]["url"],
        small_image: search_for_track["tracks"]["items"].first["album"]["images"][2]["url"],
        number_of_tracks: get_an_album["tracks"]["total"],
        open: search_for_track["tracks"]["items"].first["external_urls"]["spotify"],
        spotify_album_id: search_for_track["tracks"]["items"].first["album"]["id"]
    }
    temp_album = Album.create_with(album_attr).find_or_create_by(name: album_attr[:name])
    # temp_song.album_id = temp_album.id
    temp_song.album = temp_album
    temp_song.artist = temp_artist
    temp_song.record_label = temp_label
    temp_song.genres = genres
    # begin
        temp_song.save
    # rescue
    #     puts "**** couldn't save #{temp_song.name} ****"
    # end
end

def display_and_seed_to_db
    get_spotify_track_queries_from_csv.each do | query |
        track_object = search_for_spotify_track(query)
        display_seed_data(track_object)
    end
end

display_and_seed_to_db