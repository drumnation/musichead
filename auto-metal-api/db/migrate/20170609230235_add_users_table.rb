class AddUsersTable < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :spotify_token
      t.string :uid
      t.timestamps
    end
  end
end
