Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#home'

  # Pages routes
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  get '/menu', to: 'pages#menu'
  get '/order', to: 'pages#order'
  get '/delivery', to: 'pages#delivery'
  get '/business', to: 'pages#business'
  get '/faq', to: 'pages#faq'
  get '/terms', to: 'pages#terms'
  get '/blog', to: 'pages#blog'
  get '/jobs', to: 'pages#jobs'

  #
end
