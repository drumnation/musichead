class CreateAlbumsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.integer :popularity
      t.datetime :release_date
      t.string :big_image
      t.string :medium_image
      t.string :small_image
      t.integer :number_of_tracks
      t.string :open
      t.string :spotify_album_id
      t.integer :record_label_id, foreign_key: true
      t.integer :artist_id, foreign_key: true
      t.integer :genre_id, foreign_key: true
      t.timestamps
    end
  end
end
