import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import axiosConfig from './config';
import { Bars } from 'react-loading-icons';

const CartContext = createContext([]);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axiosConfig.get('/carts')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
      });
  }, []);

  useEffect(() => {
    axiosConfig.put('/carts', cartItems)
      .catch((error) => {
        console.error('Error updating cart:', error);
      });
  }, [cartItems]);

  return (
    <CartContext.Provider value={[cartItems, setCartItems, loading, setLoading]}>
      {children}
      {loading && <div className="d-flex justify-content-center align-items-center" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(1,1,1, 0.6)", zIndex: 9999 }}>
        <Bars />
      </div>}
    </CartContext.Provider>
  );
}