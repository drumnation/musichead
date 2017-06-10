class Song < ActiveRecord::Base
    belongs_to :album
    belongs_to :record_label
    belongs_to :artist
    has_many :song_genres
    has_many :genres, through: :song_genres
    # has_many :genre_styles, through: :genres
end