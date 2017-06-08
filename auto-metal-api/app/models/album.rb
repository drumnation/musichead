class Album < ActiveRecord::Base
    belongs_to :record_label
    belongs_to :artist
    belongs_to :genre
    has_many :songs
    has_many :song_genres, through: :songs
end