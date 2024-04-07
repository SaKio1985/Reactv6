import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarritoPage from './pages/CarritoPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
      <Routes>
        <Route  path='/' element={<App />}/>
        <Route  path='/carrito' element={<CarritoPage />}/>
        <Route  path='/login' element={<LoginPage />}/> 
      </Routes>
    </CartProvider>
  </React.StrictMode>
  </BrowserRouter>,
)
