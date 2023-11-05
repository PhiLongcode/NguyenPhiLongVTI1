import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact/Contact';
import { CartProvider } from './CartContext';
import Introduce from './pages/Introduce/Introduce';
import Product from './pages/Product/Product';
import TinTuc from './pages/TinTuc/TinTuc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/lien-he" element={<Contact/>} />
          <Route path="/gioi-thieu" element={<Introduce/>} />
          <Route path="/san-pham" element={<Product/>} />
          <Route path="/tin-tuc" element={<TinTuc/>} />
        </Routes>
        <ToastContainer />
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;