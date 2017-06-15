Rails.application.routes.draw do

  # mount ActionCable.server => 'cable'

  # get '/spotify', to: 'o_auth#spotify'
  get '/auth/facebook/callback', to: 'omni#fb_login'
  get '/auth/spotify/callback', to: 'omni#create'
  post '/auth/spotify/refresh', to: 'omni#get_spotify_refresh_token'
  namespace :api do
    namespace :v1 do
      resources :artists
      resources :albums
      resources :songs
      resources :record_labels
      resources :genres
      resources :users
      post '/sessions', to: 'sessions#new'
    end
  end  

end
