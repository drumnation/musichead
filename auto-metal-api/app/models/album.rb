class Album < ActiveRecord::Base
    belongs_to :record_label, optional: true
    belongs_to :artist, optional: true
    has_many :songs
    has_many :genres, through: :songs
end