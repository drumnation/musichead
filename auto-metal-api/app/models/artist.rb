class Artist < ActiveRecord::Base
    belongs_to :record_label
    has_many :albums
    has_many :genres, through: :songs
    has_many :songs
    # has_many :tours
    # has_many :band_members
    # has_many :concerts, through: :tours
end