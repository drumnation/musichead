class Api::V1::UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :image, :birthdate, :country_code, :follower_count, :password_digest, :spotify_uid, :spotify_profile_url, :spotify_token, :spotify_refresh_token, :spotify_token_expires_at, :spotify_token_expires
end