keys = Rails.application.secrets

Rails.application.config.middleware.use OmniAuth::Builder do
    provider :spotify, keys.spotify['client_id'], keys.spotify['client_secret'], scope: 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private streaming user-follow-modify user-follow-read user-library-read user-library-modify user-read-private user-read-birthdate user-read-email user-top-read'
end