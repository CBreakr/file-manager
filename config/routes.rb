Rails.application.routes.draw do
  root to: 'home#index'

  scope 'api' do
    resources :recipes, except: [:update] do
      member do
        post :update
      end
      resources :ingredients, only: [:index, :update, :delete]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
