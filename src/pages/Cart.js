import React from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';

const Cart = () => {
  const [cartItems, setCartItems] = useCart();

  const handleDelete = (itemId) => {
    axios.delete(`https://64be5ddf5ee688b6250c473c.mockapi.io/cart/${itemId}`)
      .then(() => {
        console.log('Deleted item from cart:', itemId);
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
      })
      .catch((error) => {
        console.error('Error deleting item from cart:', error);
      });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    axios.put(`https://64be5ddf5ee688b6250c473c.mockapi.io/cart/${itemId}`, { quantity: newQuantity })
      .then((response) => {
        console.log('Updated quantity:', response.data);
        const updatedCart = cartItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        setCartItems(updatedCart);
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  };

  const handleClearCart = () => {
    axios.delete('https://64be5ddf5ee688b6250c473c.mockapi.io/cart')
      .then(() => {
        console.log('Cleared cart');
        setCartItems([]);
      })
      .catch((error) => {
        console.error('Error clearing cart:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.reduce((uniqueItems, item) => {
            const existingItem = uniqueItems.find((uniqueItem) => uniqueItem.id === item.id);
            if (existingItem) {
              existingItem.quantity += item.quantity;
            } else {
              uniqueItems.push(item);
            }
            return uniqueItems;
          }, []).map((item) => (
            <div className="modal-body">
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">Tên sản phẩm</span>
                <span className="cart-price cart-header cart-column">Giá</span>
            </div>
            <div className="cart-items" key={item.id}>
                <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src={item.image} alt={item.name}  width="100" height="100"/>
                    <span className="cart-item-title">{item.name}</span>
                </div>
                <span className="cart-price cart-column">{`Price: $${item.price}`}</span>
                <div className="cart-quantity cart-column">
                    <div className="d-flex">
                      <button
                        className="btn btn-sm btn-primary mr-2"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <p className="mb-0">Số lượng: {item.quantity}</p>
                      <button
                        className="btn btn-sm btn-primary ml-2"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)} type="button">Xóa</button>
                </div>
            </div>
          </div>
        </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;