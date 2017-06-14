class OmniController < ApplicationController

    def create
        auth = request.env['omniauth.auth']
        auth_extra = request.env['omniauth.auth'].extra['raw_info']
        # spotify_auth = {
        #     email: auth.info.email,
        #     image: auth.info.image,
        #     country_code: auth.info.country_code,
        #     follower_count: auth.info.follower_count,
        #     spotify_profile_url: auth.info.urls["spotify"],
        #     spotify_token: auth.credentials.token,
        #     spotify_refresh_token: auth.credentials.refresh_token,
        #     spotify_token_expires_at: auth.credentials.expires_at,
        #     spotify_token_expires: auth.credentials.expires,
        # }
        
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
        
        session[:user_id] = @user.id
        redirect_to 'http://localhost:3001/'
    end
end