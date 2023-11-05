import React, { useEffect, useState } from 'react';
import ShoeCard from '../components/ShoeCard';
import axios from 'axios';
import axiosConfig from '../config';

const Home = () => {
  const [shoes, setShoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShoes, setFilteredShoes] = useState([]);

  useEffect(() => {
   axiosConfig.get('/products')
      .then((res) => {
        setShoes(res.data);
        setFilteredShoes(res.data);
      })
      .catch((error) => console.error('Error fetching shoes:', error));
  }, []);

  useEffect(() => {
    // Filter shoes based on searchTerm
    const filtered = shoes.filter(
      (shoe) =>
        shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shoe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShoes(filtered);
  }, [searchTerm, shoes]);
  

  return (
    <div className="container mt-4">
            <img className="img-fluid"
              src="img/slide-img1.jpg"
              alt="..."
              height="450px"
            />
             <div className="banner-body">
      <div className="container">
        <div className="row banner3">
          <div className="col-4">
            <div className="thumb">
              <img src="img/banner_1.jpg" alt="" />
              <img src="img/banner_2.jpg" alt="" />
            </div>
          </div>

          <div className="col-4">
            <div className="thumb">
              <img src="img/banner_3.jpg" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="thumb">
              <img src="img/banner_4.jpg" alt="" />
              <img src="img/banner_5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <h2 className="titlie">SẢN PHẨM MỚI</h2>
        {filteredShoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="col-md-4 mb-4">
            <ShoeCard shoe={shoe} />
          </div>
        ))}
        <div className="more">
      <a href="#sanPham">XEM TẤT CẢ</a>
    </div>
    <h2 className="titlie">SẢN PHẨM BÁN CHẠY NHẤT</h2>
        {filteredShoes.slice(4, 7).map((shoe) => (
          <div key={shoe.id} className="col-md-4 mb-4">
            <ShoeCard shoe={shoe} />
          </div>
        ))}
        <div className="more">
      <a href="#sanPham">XEM TẤT CẢ</a>
    </div>

    <div className="body_banner">
      <div className="row">
        <div className="col-3 imggg"><img src="img/m_bn_2_1.jpg" alt="" /></div>
        <div className="col-6"><img src="img/m_bn_2_2.jpg" alt="" /></div>
        <div className="col-3 imggg"><img src="img/m_bn_2_3.jpg" alt="" /></div>
      </div>
    </div>
    <h2 className="titlie">SẢN PHẨM GIẢM GIÁ</h2>
        {filteredShoes.slice(8, 11).map((shoe) => (
            <div key={shoe.id} className="col-md-4 mb-4">
              <ShoeCard shoe={shoe} />
            </div>
        ))}
        <div className="more">
      <a href="#sanPham">XEM TẤT CẢ</a>
    </div>
      </div>
     
    </div>
  );
};

export default Home;