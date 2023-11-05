import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact/Contact';
import { CartProvider } from './CartContext';
import Introduce from './pages/Introduce/Introduce';
import Product  from './pages/Product/Product';
import TinTuc from './pages/TinTuc/TinTuc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/lien-he" component={Contact} />
            <Route exact path="/gioi-thieu" component={Introduce} />
            <Route exact path="/san-pham" component={Product} />
            <Route exact path="/tin-tuc" component={TinTuc} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;