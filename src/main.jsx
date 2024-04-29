import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/home.jsx'
import { BrowserRouter, Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <App /> */}
      {/* <Home /> */}

      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)

