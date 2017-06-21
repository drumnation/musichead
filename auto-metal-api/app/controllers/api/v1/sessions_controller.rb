class Api::V1::SessionsController < ApplicationController
    SECRET = "gjkasghjksafgjk"
    ALGORITHM = "HS256"
    
    def new
        user = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
            token = JWT.encode({user_id: user.id}, SECRET, ALGORITHM)
            render json: 
                {
                    token: token, 
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    birthdate: user.birthdate,
                    country_code: user.country_code,
                    follower_count: user.follower_count, 
                    spotify_uid: user.spotify_uid,
                    spotify_profile_url: user.spotify_profile_url,
                    spotify_token: user.spotify_token, 
                    spotify_refresh_token: user.spotify_refresh_token, 
                    spotify_token_expires_at: user.spotify_token_expires_at,
                    spotify_token_expires: user.spotify_token_expires
                }
        end
    end

end