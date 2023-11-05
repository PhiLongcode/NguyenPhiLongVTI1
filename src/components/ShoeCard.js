import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
  const [, setCartItems] = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    if (!addedToCart) {
      axios.post('https://64be5ddf5ee688b6250c473c.mockapi.io/cart', { ...shoe, quantity: 1 })
        .then((response) => {
          console.log('Added to cart:', response.data);
          setCartItems((prevCartItems) => [...prevCartItems, response.data]);
        })
        .catch((error) => {
          console.error('Error adding to cart:', error);
        });
      setAddedToCart(true);
    }
  };
  return (
    <div className="product">

<div className="row row-cols-1 g-4">
        <div className="col">
          <div className="card h-100 text-center">
            <img
              src={shoe.image} alt="{shoe.name}"
              className="card-img img-fluid"
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/product/${shoe.id}`}>{shoe.name}</Link>
                <p className="card-text">{`Giá: $${shoe.price}`}</p>
              </h5>
              <p className="card-textt"></p>
              <div className="d-grid col-10 mx-auto">
              {!addedToCart && (
          <button className="btn btn-secondary mr-2" onClick={addToCart}>
            Add to Cart
          </button>
        )}
              </div>
            </div>
          </div>
        </div>
        </div>
    {/* <div class="row row-cols-1 g-4">
    <div class="col">
      <div class="card h-100">
        <img src={shoe.image} alt="{shoe.name}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{shoe.name}</h5>
          <p class="card-text">{shoe.description}</p>
          <p class="card-text">{`Giá: $${shoe.price}`}</p>
        </div>
        {!addedToCart && (
          <button className="btn btn-secondary mr-2" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  </div> */}
  </div>
  );
};

export default ShoeCard;