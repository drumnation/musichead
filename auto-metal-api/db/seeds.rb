# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

queries_array = File.open('./db/junk_and_band_song_names.csv').map do | line |
    line_array = line.gsub('"', '').gsub("\r\n", "").split(',')
    { artist: line_array[0], song: line_array[1] }
end

queries_array.uniq!

queries_array.each { | queries_array | puts queries_array.artist + " " queries_array.song }