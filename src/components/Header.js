import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the useCart hook
import { useHistory } from 'react-router-dom';
const Header = () => {
  const [cartItems] = useCart(); // Use the useCart hook to get cartItems
  const history = useHistory();

  const handleCartClick = () => {
    history.push('/cart'); // Navigate to the cart page
  };
  return (
    <div className="header">
      <div className="header_logo">
        <div className="container">
           <div className="logo">
                 <a href="/"
                  ><img src="/img/Layer 2.png" alt="" width="90%" height="90%"
                /></a>
           </div>
         </div>
     </div>

      <div className="header_buttom">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/"
                        >TRANG CHỦ</a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/gioi-thieu"
                        >GIỚI THIỆU</a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/san-pham"
                        >SẢN PHẨM</a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/tin-tuc"
                        >TIN TỨC</a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/lien-he"
                        >LIÊN HỆ</a>
                    </li>
                    <li className="nav-item">
                    <a href="/cart" className="nav-link active" onClick={handleCartClick}>
                      GIỎ HÀNG: {cartItems.length > 0 && <span className="badge badge-primary">{cartItems.length}</span>}
                    </a>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
  );
};

export default Header;