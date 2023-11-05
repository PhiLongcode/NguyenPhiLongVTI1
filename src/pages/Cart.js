import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../CartContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'


import { Button } from "primereact/button";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Cart = () => {
    const [cartItems, setCartItems] = useCart();
    const [content, setContent] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (cartItems.length > 0) {
            let container = cartItems.reduce((uniqueItems, item) => {
                const existingItem = uniqueItems.find(
                    (uniqueItem) => uniqueItem.id === item.id
                );
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    uniqueItems.push(item);
                }
                return uniqueItems;
            }, []);
          
            setContent(container);
            setSelectedProducts([])
        }
    }, [cartItems]);

  useEffect(()=> {
    console.log('check selected product',selectedProducts);
    if(selectedProducts.length>0) {
      console.log("check length");
      let totalPrice =0;
      for(let i=0; i<selectedProducts.length; i++) {
      console.log("check data",selectedProducts[i].price);

        totalPrice += parseFloat(selectedProducts[i].price)*parseFloat(selectedProducts[i].quantity);
      }
      setTotal(totalPrice);
    }
  },[selectedProducts,cartItems])

    const handleDelete = (itemId) => {
        axios
            .delete(
                `https://64be5ddf5ee688b6250c473c.mockapi.io/cart/${itemId}`
            )
            .then(() => {
                console.log("Deleted item from cart:", itemId);
                const updatedCart = cartItems.filter(
                    (item) => item.id !== itemId
                );
                setCartItems(updatedCart);
            })
            .catch((error) => {
                console.error("Error deleting item from cart:", error);
            });
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        axios
            .put(`https://64be5ddf5ee688b6250c473c.mockapi.io/cart/${itemId}`, {
                quantity: newQuantity,
            })
            .then((response) => {
                console.log("Updated quantity:", response.data);
                const updatedCart = cartItems.map((item) => {
                    if (item.id === itemId) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                setCartItems(updatedCart);
            })
            .catch((error) => {
                console.error("Error updating quantity:", error);
            });
    };

    const handleClearCart = () => {
        axios
            .delete("https://64be5ddf5ee688b6250c473c.mockapi.io/cart")
            .then(() => {
                console.log("Cleared cart");
                setCartItems([]);
            })
            .catch((error) => {
                console.error("Error clearing cart:", error);
            });
    };
    const imageBody = (data) => {
        return (
            <img
                src={data.image}
                width="100"
                className="cart-item-image"
                height="100"
            />
        );
    };

    const priceBody = (data) => {
        return <div className="cart-price "> ${data.price}</div>;
    };
    const quantityBody = (data) => {
        return (
            <div className="d-flex">
                <button
                    className="btn btn-sm btn-primary mr-2"
                    onClick={() =>
                        handleQuantityChange(data.id, data.quantity - 1)
                    }
                    disabled={data.quantity === 1}
                >
                    -
                </button>
                <p className="mb-0">Số lượng: {data.quantity}</p>
                <button
                    className="btn btn-sm btn-primary ml-2"
                    onClick={() =>
                        handleQuantityChange(data.id, data.quantity + 1)
                    }
                >
                    +
                </button>
            </div>
        );
    };
    const deleteBody = (data) => {
        return (
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(data.id)}
                type="button"
            >
                Xóa
            </button>
        );
    };
    
    const checkOut =() => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      if(selectedProducts.length>0) {

        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, check out!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Awesome',
              'Your products has been checked out.',
              'success'
            )
            selectedProducts.map(item=> {
               let arr = cartItems.filter(item2=> item2.id!==item.id);
               setCartItems(arr);
            })
            setSelectedProducts([]);
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your products is safe :)',
              'error'
            )
          }
        })
      }
      else {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nothing to check out!',
        
        })
      }
    }
    console.log("Check  content", content);
    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <DataTable scrollable scrollHeight="600px" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}  stripedRows value={content}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column
                            body={imageBody}
                            field="image"
                            header="Ảnh"
                        ></Column>

                        <Column
                            className="cart-item-title"
                            field="name"
                            header="Name"
                        ></Column>

                        <Column body={priceBody} field="" header="Giá"></Column>
                        <Column
                            field="quantity"
                            header="Quantity"
                            body={quantityBody}
                        ></Column>

                        <Column
                            field="quantity"
                            header="Hành động"
                            body={deleteBody}
                        ></Column>

                    </DataTable>
                    <div className="card d-flex justify-content-center align-items-center" style={{height:"150px" }}>
                        {selectedProducts.length>0? (
                           <div>Tổng thanh toán  ({selectedProducts.length} sản phẩm) <span className="text-danger fs-4">{total} $</span> </div>
                        ): ''}
                        <div className="btn btn-danger m-3" style={{width:'500px' }} onClick={checkOut}>
                          Thanh toán
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
