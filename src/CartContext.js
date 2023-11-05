import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext([]);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://64be5ddf5ee688b6250c473c.mockapi.io/cart')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart:', error);
      });
  }, []);

  useEffect(() => {
    axios.put('https://64be5ddf5ee688b6250c473c.mockapi.io/cart', cartItems)
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