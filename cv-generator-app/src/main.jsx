import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faNewspaper,
  faSliders,
  faGraduationCap,
  faChevronUp,
  faAddressCard,
  faBriefcase,
  faTrash,
  faAt,
  faPhone,
  faLocationDot,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faNewspaper,
  faSliders,
  faGraduationCap,
  faChevronUp,
  faAddressCard,
  faBriefcase,
  faTrash,
  faAt,
  faPhone,
  faLocationDot,
  faPenToSquare,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
