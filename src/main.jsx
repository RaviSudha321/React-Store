import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/cart.jsx'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <CartContextProvider>
        <ScrollToTop />
          <App />
      </CartContextProvider>
    </BrowserRouter>,
)
