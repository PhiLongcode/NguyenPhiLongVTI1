import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import axiosConfig from './config';

const CartContext = createContext([]);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

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
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartContext.Provider>
  );
}