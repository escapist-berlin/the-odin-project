import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
// import Syntax from './Syntax.jsx'
// import List from './List.jsx'
// import { favFood as FavFood, favCloths as FavCloths } from './Favorites.jsx'
import './index.css'

const animals = ["Lion", "Cow", "Snake", "Lizard", "Cat", "Dog"];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    {/* <App /> */}
    {/* <Syntax />
    <FavFood />
    <FavCloths /> */}
    {/* <h1>Animals: </h1>
    <List animals={animals} /> */}
  </React.StrictMode>,
)
