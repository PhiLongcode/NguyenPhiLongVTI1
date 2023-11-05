import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h5>GIỚI THIỆU</h5>
            <ul>
              <li>
                Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng
                chữ, mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu
                ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn
                mạnh.
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h5>ĐỊA CHỈ</h5>
            <ul>
              <li>
                <i className="bi bi-geo-alt"></i> 43 ngách 100/193 Phú Diễn, quận
                Bắc Từ Liêm, Hà Nội
              </li>
              <li><i className="bi bi-telephone"></i> 076 922 0162</li>
              <li><i className="bi bi-envelope-open"></i> dao7773@gmail.com</li>
              <li><i className="bi bi-skype"></i> dao7773</li>
            </ul>
          </div>
          <div className="col-3">
            <h5>HỖ TRỢ</h5>
            <ul>
              <li>Hướng dẫn mua hàng</li>
              <li>Hướng dẫn thanh toán</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách đổi trả</li>
              <li>Tư vấn khách hàng</li>
            </ul>
          </div>
          <div className="col-3">
            <h5>KẾT NỐI</h5>
            <ul>
              <li style={{ fontSize: '20px' }}>
                <i className="bii bi-facebook"> </i>
                <i className="bii bi-twitter"></i>
                <i className="bii bi-youtube"></i>
                <i className="bii bi-instagram"></i>
                <i className="bii bi-tiktok"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;