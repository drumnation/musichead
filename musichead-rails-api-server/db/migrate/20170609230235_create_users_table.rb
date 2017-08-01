class CreateUsersTable < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :image
      t.date :birthdate
      t.string :country_code
      t.integer :follower_count
      t.string :password_digest
      t.integer :spotify_uid
      t.string :spotify_profile_url
      t.string :spotify_token
      t.string :spotify_refresh_token      
      t.integer :spotify_token_expires_at
      t.boolean :spotify_token_expires
      t.string :facebook_token
      t.timestamps
    end
  end
end
