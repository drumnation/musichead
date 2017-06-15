class Api::V1::SessionsController < ApplicationController
    SECRET = "gjkasghjksafgjk"
    ALGORITHM = "HS256"
    
    def new
        user = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
            token = JWT.encode({user_id: user.id}, SECRET, ALGORITHM)
            render json: {token: token, id: user.id, image: user.image, spotify_token: user.spotify_token, spotify_refresh_token: user.spotify_refresh_token, spotify_uid: user.spotify_uid}
        end
    end

end