class Song < ActiveModel::Serializer
    attributes (
        :name,
        :popularity,
        :length,
        :track_number,
        :disc_number,
        :preview,
        :open,
        :related_songs,
        :audio_analysis,
        :spotify_song_id,
        :record_label_id,
        :artist_id,
        :album_id
    )
end