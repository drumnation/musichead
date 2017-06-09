Rails.application.routes.draw do

  mount ActionCable.server => 'cable'
  
  namespace :api do
    namespace :v1 do

    end
  end  

end
