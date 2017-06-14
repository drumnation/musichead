Rails.application.routes.draw do

  # mount ActionCable.server => 'cable'

  # get '/spotify', to: 'o_auth#spotify'
  get '/auth/:provider/callback', to: 'omni#create'
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
