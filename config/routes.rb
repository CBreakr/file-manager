Rails.application.routes.draw do
  root to: 'home#index'

  scope :api do
    resources :recipes, only: [:index, :update]
  end
end
