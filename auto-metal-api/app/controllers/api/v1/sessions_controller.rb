class Api::V1::SessionsController < ApplicationController
    SECRET = "gjkasghjksafgjk"
    ALGORITHM = "HS256"
    
    def create
        user = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
            token = JWT.encode({user_id: user.id}, SECRET, ALGORITHM)
            render json: {token: token}
        end
    end

end