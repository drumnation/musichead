class Album < ActiveRecord::Base
    belongs_to :record_label
    belongs_to :artist
    has_many :songs
    has_many :genres, through: :songs
end