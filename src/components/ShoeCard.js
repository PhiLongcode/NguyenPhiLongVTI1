import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosConfig from '../config';

const ShoeCard = ({ shoe }) => {
  const [cartItems, setCartItems, loading, setLoading] = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = async () => {
    if (!addedToCart) {
      setLoading(true)
      console.log("shoe:::", shoe)
      console.log("cartItems:::", cartItems)
      const exitItem = cartItems.find(item => item.id === shoe.id)
      console.log(exitItem)

      if (!exitItem) {
        const response = await axiosConfig.post('/carts', { ...shoe, quantity: 1 })
        setCartItems((prevCartItems) => [...prevCartItems, response.data]);
      } else {
        const response = await axiosConfig.put(`/carts/${exitItem.id}`, { ...exitItem, quantity: exitItem.quantity + 1 });
        setCartItems((prevCartItems) => [...prevCartItems, response.data]);
      }
      toast.success('add to cart success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false)

    }
  };
return (
  <div className="product">

    <div className="row row-cols-1 g-4">
      <div className="col">
        <div className="card h-100 text-center">
          <img
            src={shoe.image} alt="{shoe.name}"
            className="card-img img-fluid "
            style={{ minHeight: "450px", maxHeight: "450px", objectFit: "cover" }}
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