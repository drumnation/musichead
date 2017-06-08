class RecordLabel < ActiveRecord::Base
    has_many :artists
    has_many :albums
    has_many :genres
    has_many :songs
end