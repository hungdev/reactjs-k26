import React, { useEffect, useState } from 'react'
import { getDetailProducts, getDetail } from './services/Api'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()

  useEffect(() => {
    async function fetchData() {
      console.log('params.productId', params.productId)
      const result = await getDetail(params.productId);
      setDetail(result.data.data)
      // setIsLoading(true)
      // console.log('result', result)
      // setIsLoading(false)
    }

    fetchData();
  }, [params.productId]);

  return (
    <div id="product">
      hello
      {/* <div id="product-head" class="row">
        <div id="product-img" class="col-lg-6 col-md-6 col-sm-12">
          <img src={getImageUrl(product)} alt='product' />
        </div>
        <div id="product-details" class="col-lg-6 col-md-6 col-sm-12">
          <h1>{product && product.name}</h1>
          <ul>
            <li><span>Bảo hành:</span> 12 Tháng</li>
            <li><span>Đi kèm:</span> {product && product.accessories}</li>
            <li><span>Tình trạng:</span> {product && product.status}</li>
            <li><span>Khuyến Mại:</span> {product && product.accessories}</li>
            <li id="price">Giá Bán (chưa bao gồm VAT)</li>
            <li id="price-number">{Intl.NumberFormat('vn-VN').format(product && product.price)}đ</li>
            <li id="status">{isStock}</li>
          </ul>
          <div id="add-cart">
            <a href="#" onClick={() => { }}>
              Mua ngay
                </a>
          </div>
        </div>
      </div>
      <div id="product-body" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3>{product && product.name}</h3>
          <p>
            {product && product.details}
          </p>
        </div>
      </div>

      <div id="comment" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3>Bình luận sản phẩm</h3>
          <form method="post" onSubmit={(e) => { e.preventDefault() }}>
            <div class="form-group">
              <label>Tên:</label>
              <input
                name="name"
                required type="text"
                class="form-control"
                value={formData.name}
                onChange={(e) => this.onInputChange(e, 'name')}
              />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input
                name="email"
                required type="email"
                class="form-control"
                value={formData.email}
                onChange={(e) => this.onInputChange(e, 'email')}
              />
            </div>
            <div class="form-group">
              <label>Nội dung:</label>
              <textarea
                name="content"
                required rows="8"
                class="form-control"
                value={formData.content}
                onChange={(e) => this.onInputChange(e, 'content')}
              />
            </div>
            <button
              type="submit"
              name="sbm"
              class="btn btn-primary"
              onClick={() => this.onSubmit()}
            >Gửi</button>
          </form>
        </div>
      </div>

      <div id="comments-list" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12"> */}
      {/* {commentData && commentData.map((e, i) => (
            <div class="comment-item" key={i}>
              <ul>
                <li><b>{e && e.name}</b></li>
                <li>{moment(e && e.updated_date).format('DD-MM-YYYY hh:mm:ss')}</li>
                <li>
                  <p>{e && e.content}</p>
                </li>
              </ul>
            </div>
          ))} */}
      {/* 
        </div>
      </div> */}
    </div>
  )
}
