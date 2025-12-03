import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './landing_page/Home/HomePage.jsx'
import PricingPage from './landing_page/pricings/PricingPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import Signup from "./landing_page/signup/Signup.jsx"
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './landing_page/NotFound.jsx'
import Login from "./landing_page/signup/Login.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   <Footer />
  </BrowserRouter>
)