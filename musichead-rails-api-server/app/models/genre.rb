class Genre < ActiveRecord::Base
    has_many :song_genres
    has_many :songs, through: :song_genres
    has_many :albums, through: :songs
    has_many :record_labels, through: :albums
    has_many :artists, through: :albums
end