import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { favFood as FavFood, favCloths as FavCloths } from './Favorites.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <FavFood />
    <FavCloths />
  </React.StrictMode>,
)
