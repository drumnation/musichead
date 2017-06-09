class Artist < ActiveModel::Serializer
    attributes (
        :name,
        :popularity,
        :open,
        :followers,
        :big_image,
        :medium_image,
        :small_image,
        :related_artists,
        :albums,
        :top_tracks,
        :spotify_artist_id,
        :record_label_id
    )
end