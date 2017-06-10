class CreateArtistsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :popularity
      t.string :open
      t.integer :followers
      t.string :big_image
      t.string :medium_image
      t.string :small_image
      t.json :related_artists
      t.json :spotify_albums
      t.json :top_tracks
      t.string :spotify_artist_id
      t.integer :record_label_id, foreign_key: true
      t.timestamps
    end
  end
end
