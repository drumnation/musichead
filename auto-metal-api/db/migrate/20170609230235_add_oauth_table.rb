class AddOauthTable < ActiveRecord::Migration[5.0]
  def change
    create_table :oauth do |t|
      t.string :spotify_token
      t.timestamps
    end
  end
end
