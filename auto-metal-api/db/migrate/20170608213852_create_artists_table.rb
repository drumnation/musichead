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
      t.json :albums
      t.json :top_tracks
      t.string :spotify_artist_id
      t.timestamps
    end
  end
end
