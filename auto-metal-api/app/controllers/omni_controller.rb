require 'net/http'
require 'uri'

class OmniController < ApplicationController

    def get_spotify_refresh_token
        user = User.find(params[:id])
        keys = Rails.application.secrets
        response = HTTParty.post("https://accounts.spotify.com/api/token", :body =>{
            grant_type: 'refresh_token',
            refresh_token: user.spotify_refresh_token,
            client_secret: keys.spotify["client_secret"],
            client_id: keys.spotify["client_id"],
        })
        puts response.parsed_response["access_token"]
        user.update({spotify_token: response.parsed_response["access_token"]})
        if user.save
            render json: user
        end
        puts user
    end
    
    # def fb_login
    #     auth = request.env['omniauth.auth']
    #     @user = User.find_or_create_by(email: auth.info.email)
    #     @user.update({
    #         name: auth.info.name,
    #         email: auth.info.email,
    #         facebook_token: params.code,
    #     })
    #     @user.save
    #     session[:user_id] = @user.id
    #     redirect_to 'http://localhost:3001/' 
    # end

    def create
        auth = request.env['omniauth.auth']
        auth_extra = request.env['omniauth.auth'].extra['raw_info']
        @user = User.find_or_create_by(email: auth.info.email)
        @user.update({
            email: auth.info.email,
            birthdate: auth.info.birthdate,
            image: auth.info.image,
            country_code: auth.info.country_code,
            follower_count: auth.info.follower_count,
            spotify_uid: auth_extra.id,
            spotify_profile_url: auth_extra.external_urls.spotify,
            spotify_token: auth.credentials.token,
            spotify_refresh_token: auth.credentials.refresh_token,
            spotify_token_expires_at: auth.credentials.expires_at,
            spotify_token_expires: auth.credentials.expires,
        })
        @user.save
        redirect_to 'http://localhost:3001/'
    end

end