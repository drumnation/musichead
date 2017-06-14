class Api::V1::UsersController < ApplicationController

    def create
        @user = User.new(params)
        if @user.save
            render json: @user
        end
    end

    def update
    end

    def destroy
    end

end