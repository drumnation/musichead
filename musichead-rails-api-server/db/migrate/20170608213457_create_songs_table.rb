class CreateSongsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.integer :popularity
      t.integer :length
      t.integer :track_number
      t.integer :disc_number
      t.string :preview
      t.string :open
      t.json :audio_analysis
      t.json :related_songs
      t.string :spotify_song_id
      t.string :artist_id, foreign_key: true
      t.integer :album_id, foreign_key: true
      t.integer :record_label_id, foreign_key: true
      t.timestamps
    end
  end
end
