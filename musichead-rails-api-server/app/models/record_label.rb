class RecordLabel < ActiveRecord::Base
    has_many :albums
    has_many :songs, through: :albums
    has_many :artists, through: :albums
    has_many :genres, through: :songs
end