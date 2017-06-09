Rails.application.routes.draw do

  mount ActionCable.server => 'cable'
  
  namespace :api do
    namespace :v1 do
      resources :artists
      resources :albums
      resources :songs
      resources :record_labels
      resources :genres
    end
  end  

end
