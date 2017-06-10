class OAuthController < ApplicationController

    def spotify
        code = params[:code]
        res = HTTParty.post('https://accounts.spotify.com/api/token', {
            body: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: "http://localhost:3000/spotify",
                client_id: '51955dd165764f22b8db23dcff335d15',
                client_secret: '028bb1479d9b4c89ab8145976fff1cdc'
            }
        })
        token = OAuth.create(spotify_token: res.parsed_response["access_token"])
        token.valid?
        puts token.errors.full_messages
        puts token
    end

end