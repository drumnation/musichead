class Artist < ActiveRecord::Base
    has_many :albums
    has_many :record_labels, through: :albums
    has_many :songs, through: :albums
    has_many :genres, through: :songs
    # has_many :tours
    # has_many :band_members
    # has_many :concerts, through: :tours
end