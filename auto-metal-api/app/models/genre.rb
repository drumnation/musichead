class Genre < ActiveRecord::Base
    has_many :record_labels
    has_many :artists, through: :songs
    has_many :albums
    has_many :songs_genres
    has_many :songs, through: :song_genres
end