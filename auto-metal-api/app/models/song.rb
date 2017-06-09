class Song < ActiveRecord::Base
    belongs_to :album
    has_many :song_genres
    has_many :genres, through: :song_genres
    # has_many :genre_styles, through: :genres
end