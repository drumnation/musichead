Rails.application.routes.draw do

  mount ActionCable.server => 'cable'

  get '/spotify', to: 'o_auth#spotify'

  namespace :api do
    namespace :v1 do
      resources :artists
      resources :albums
      resources :songs
      resources :record_labels
      resources :genres
      post '/sessions', to: 'sessions#create'
    end
  end  

end
