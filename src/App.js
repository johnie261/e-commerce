import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components'
import { useAuth0 } from '@auth0/auth0-react';
import {
  Home,
  About,
  Products,
  Cart,
  Checkout,
  SingleProduct,
  Error,
  AuthWrapper
} from './pages'

function App() {
  const {user} = useAuth0()
  return (
    <AuthWrapper>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="min" element={<Checkout />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route exact path="checkout" element={user ? <Checkout/> : <Navigate to="/"  />}/>
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
/*

// option for privateRoute

<Route path="check" element={
  <PrivateRoute>
    <Route path="check" element={<Checkout />} />  
  </PrivateRoute>} />

*/