Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'tasks#index'
  resources :tasks, only: [:create, :update, :destroy], defaults: {format: 'js'}
end
