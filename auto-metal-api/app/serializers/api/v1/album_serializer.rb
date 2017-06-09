class Album < ActiveModel::Serializer
    attributes (
        :name,
        :popularity,
        :release_date,
        :big_image,
        :medium_image, 
        :small_image,
        :number_of_tracks,
        :open,
        :spotify_album_id,
        :record_label_id,
        :artist_id,
        :genre_id
    )
end