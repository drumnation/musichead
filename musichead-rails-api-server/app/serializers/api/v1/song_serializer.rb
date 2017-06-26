class Api::V1::SongSerializer < ActiveModel::Serializer
    attributes :id, :name, :popularity, :length, :track_number, :disc_number, :preview, :open, :spotify_song_id, :record_label_id, :artist_id, :album_id
    # :audio_analysis, :related_songs
end