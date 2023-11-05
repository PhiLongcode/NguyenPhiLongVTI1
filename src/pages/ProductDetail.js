import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [shoe, setShoe] = useState(null);
  const shoeId = match.params.id;

  useEffect(() => {
    fetch(`https://64be5ddf5ee688b6250c473c.mockapi.io/products/${shoeId}`)
      .then((response) => response.json())
      .then((data) => setShoe(data))
      .catch((error) => console.error('Error fetching shoe details:', error));
  }, [shoeId]);

  if (!shoe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
    <div className="row">
      <div class="col-5">
      
        <img src={shoe.image} alt={shoe.name} className="imgggg"/>
      </div>
      <div className="col-7">
        <div className="name">
          <h4>{shoe.name}</h4>
        </div>
        <div className="product_span">
          <span
            ><b>4.5</b> <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"> </i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i> <i className="bi bi-star-half"> </i></span>
          <span> <b>100</b> Đánh giá</span>
          <span> <b></b> Số lượng</span>
        </div>
        <div className="money">
          <p><span>$</span> {shoe.price}</p>
        </div>
        <div className="ship">
          <p>
            Vận chuyển
            <span className> Miễn phí vận chuyển</span>
          </p>
          <p className="p">
             Vận chuyển tới
            <span>43 ngách 100/193 Phú Diễn, quận Bắc Từ Liêm, Hà Nội </span>
          </p>
          <p className="p2">
            Phí vận chuyển
            <span> ₫0</span>
          </p>
          
          </div>
          <div className="detail_button">
          <div
            className="d-grid gap-2 d-md-block"
            // style="text-align: center; margin-top: 20px"
          >
            <button
              className="btn "
              type="button"
            >
              <i className="bi bi-cart2"></i>
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
    <div className="detail_body">
        <div className="CT_product">
          <h2>CHI TIẾT SẢN PHẨM</h2>
          <div class="mb-1 row">
            <label for="staticEmail" className="col-sm-1 col-form-label"
              >Tình trạng</label>
            <div className="col-sm-10">
              <div className="col-sm-6">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Đã Sử Dụng"
                />
              </div>
            </div>
          </div>
          <div className="mb-1 row">
            <label for="staticEmail" className="col-sm-1 col-form-label"
              >Xuất xứ</label>
            <div className="col-sm-10">
              <div className="col-sm-2">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Việt Nam"
                />
              </div>
            </div>
          </div>
          <div className="mb-1 row">
            <label for="staticEmail" className="col-sm-1 col-form-label"
              >Chất liệu</label>
            <div className="col-sm-10">
              <div className="col-sm-2">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Khác"/>
              </div>
            </div>
          </div>
          <div className="mb-1 row">
            <label for="staticEmail" className="col-sm-1 col-form-label">Dịp</label>
            <div className="col-sm-10">
              <div className="col-sm-2">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Thể thao"
                />
              </div>
            </div>
          </div>
          <div className="mb-1 row">
            <label for="staticEmail" className="col-sm-1 col-form-label"
              >Cổ giày</label>
            <div className="col-sm-10">
              <div className="col-sm-2">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Cổ thấp"/>
              </div>
            </div>
          </div>
          <div className="mb-1 row">
            <label for="staticEmail" className="col-sm-1 col-form-label"
              >Kho hàng</label>
            <div className="col-sm-10">
              <div className="col-sm-2">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="10000"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 row">
            <label for="staticEmail" className="col-sm-1 col-form-label"
              >Gửi từ</label>
            <div className="col-sm-10">
              <div className="col-sm-2">
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Hà Nội"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="MT_product">
          <h2>MÔ TẢ SẢN PHẨM</h2>
          <p>
            Đôi giày màu trắng là một phụ kiện "phải có" trong tủ đồ của các bạn
            trẻ. Bởi tính ứng dụng cao trong thời trang, giày trắng thường giúp
            chúng ta dễ phối đồ hơn và có thể mang phù hợp với bất cứ dịp nào
            (đi học, đi chơi, ...). 365.giay.store đảm bảo mang lại cho các bạn
            một đôi giày trắng vừa xinh vừa hời. Ngại gì không tậu ngay một đôi
            nào!!
          </p>
          <p>
            - THÔNG TIN SẢN PHẨM:
            <span>+ Chất liệu giày: da sần, da trơn nhẵn.</span>
            <span>+ Màu: trắng</span>
            <span
              >+ Size: từ 36 đến 43 (các bạn tham khảo thêm bảng size để chọn
              được một đôi giày ưng ý nhất nhé)</span>
            <span>+ Chiều cao: đế cao 2,5 cm</span>
            <span>+ Trọng lượng Giày : 800g</span>
          </p>
          <p>
            - Gợi ý các dịp phù hợp để sử dụng:
            <span
              >+ Mọi hoạt động hàng ngày (đi chơi, đi học, thể dục thể thao,...)
            </span>
            <span>+ Phối với các trang phục năng động hoặc đồ âu đều dễ dàng và tôn
              dáng</span>
          </p>
          <p>
            - CHẾ ĐỘ BẢO HÀNH VÀ ĐỔI TRẢ <span> Chế độ đổi trả:</span><span
              >+ Nếu giày lỗi bên shop sẽ hỗ trợ đổi, trả miễn phí 100%</span><span>+ Trường hợp mua giày về mà size quá rộng hoặc quá chật, liên hệ
              lại shop trong vòng 7 ngày (kể từ ngày nhận sản phẩm) để nhận đổi
              trả</span>
          </p>
          <p>
            Cảm ơn các bạn đã quan tâm đến sản phẩm của shop. Đừng quên đánh giá
            5 sao khi nhận được hàng nhé!!
            <span
              >* Mọi chi tiết và thắc mắc xin liên hệ lại shop để được giải đáp
              tận tình.</span>
          </p>
        </div>
       
        </div>
    </div>
  );
};

export default ProductDetail;