require 'net/http'
require 'uri'

class OmniController < ApplicationController

    def get_spotify_refresh_token
        @user = User.find(params["user_id"])
        uri = URI.parse("https://accounts.spotify.com/api/token")
        byebug
        request = Net::HTTP::Post.new(uri)
        request["Authorization"] = `Basic ${@user.spotify_token}`
        request.set_form_data(
            "grant_type" => "refresh_token",
            "refresh_token" => `${@user.spotify_refresh_token}`,
        )
        req_options = { use_ssl: uri.scheme == "https" }
        response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
        http.request(request)
        puts response.body
    end

    def fb_login
        auth = request.env['omniauth.auth']
        @user = User.find_or_create_by(email: auth.info.email)
        @user.update({
            name: auth.info.name,
            email: auth.info.email,
            facebook_token: params.code,
        })
        @user.save
        session[:user_id] = @user.id
        redirect_to 'http://localhost:3001/' 
    end

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