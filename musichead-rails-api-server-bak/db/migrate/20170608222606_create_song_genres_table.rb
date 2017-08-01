class CreateSongGenresTable < ActiveRecord::Migration[5.0]
  def change
    create_table :song_genres do |t|
      t.integer :song_id, foreign_key: true 
      t.integer :genre_id, foreign_key: true
    end
  end
end
