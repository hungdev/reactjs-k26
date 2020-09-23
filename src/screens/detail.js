import React, { useEffect, useState } from 'react'
import { getDetailProducts, getComments, postComments } from './services/Api'
import { useParams } from 'react-router-dom'
import { processImage } from './utils';
import moment from 'moment'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { addCart, addPreviewList } from '../actions/cartAction'
import Item from './components/item';
import Spinner from './components/spinner';
import Pagination from "react-js-pagination";

const initPagination = { limit: 5, skip: 0 }
export default function Detail() {
  const dispatch = useDispatch()
  const [detail, setDetail] = useState(null);
  const [formData, setFormData] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isPostOK, setIsPostOK] = useState(false)
  const [pagination, setPagination] = useState(initPagination)
  const [activePage, setActivePage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const { register, handleSubmit, errors } = useForm();

  const initValue = {
    name: '',
    email: '',
    content: ''
  }

  const isStock = detail?.is_stock ? 'Còn hàng' : 'Hết hàng'
  const params = useParams()

  const previewList = useSelector(state => state.cart.previewList);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const slice3 = previewList.slice(0, 3) // 0 vi tri bat dau, 3: vi tri ket thuc

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      console.log('params.productId', params.productId)
      const result = await getDetailProducts(params.productId);
      setDetail(result.data.data)
      // dispatch({type: 'ADD_PREVIEW', product: result.data.data})
      dispatch(addPreviewList(result.data.data))
      setIsPostOK(false)
      setIsLoading(false)
      // console.log('result', result)
      // setIsLoading(false)
    }

    fetchData();
  }, [dispatch, params.productId]);

  useEffect(() => {
    async function fetchData() {
      const result = await getComments(params.productId, pagination);
      console.log('result', result)
      setComments(result.data.data)
      setTotalPage(result.data.total)
    }

    fetchData();
  }, [params.productId, isPostOK, pagination]);


  const onInputChange = (ev) => {
    ev.persist()
    setFormData(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
  }

  const onSubmit = async (data) => {
    // console.log('zzzzzz', data)
    const result = await postComments({ ...data, productId: params.productId })
    if (result.data.result === 'ok') {
      setIsPostOK(true)
    }
    // console.log('result', result)
  }


  const onAddCart = () => {
    // dispatch({type: 'ADD_CART', product})
    dispatch(addCart({ ...detail, quantity: 1 }))
  }

  const handlePageChange = (pageNumber) => {
    console.log('pageNumber', pageNumber)
    setActivePage(pageNumber)
    setPagination(prev => ({ ...prev, skip: pageNumber * 5 }))
  }

  return (
    <>
      <Spinner loading={isLoading} />
      {!isLoading ? <div id="product">
        <div id="product-head" class="row">
          <div id="product-img" class="col-lg-6 col-md-6 col-sm-12">
            <img src={processImage(detail?.image)} alt='product' />
          </div>
          <div id="product-details" class="col-lg-6 col-md-6 col-sm-12">
            <h1>{detail?.name}</h1>
            <ul>
              <li><span>Bảo hành:</span> 12 Tháng</li>
              <li><span>Đi kèm:</span> {detail && detail.accessories}</li>
              <li><span>Tình trạng:</span> {detail && detail.status}</li>
              <li><span>Khuyến Mại:</span> {detail && detail.promotion}</li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">{Intl.NumberFormat('vn-VN').format(detail && detail.price)}đ</li>
              <li id="status">Trạng thái: {isStock}</li>
            </ul>
            <div id="add-cart">
              <a href="#" onClick={onAddCart}>
                Mua ngay
                </a>
            </div>
          </div>
        </div>
        <div id="product-body" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3>{detail && detail.name}</h3>
            <p>
              {detail && detail.details}
            </p>
          </div>
        </div>

        <div id="comment" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form
              // method="post"
              // onSubmit={(e) => { e.preventDefault() }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div class="form-group">
                <label>Tên:</label>
                <input
                  defaultValue={initValue.name}
                  name="name"
                  required
                  type="text"
                  class="form-control"
                  // value={formData.name}
                  // onChange={(e) => onInputChange(e)}
                  ref={register({
                    required: true, maxLength: 100
                  })}
                />
                {errors.name && <p className='error-message'>Your name is required</p>}
              </div>
              <div class="form-group">
                <label>Email:</label>
                <input
                  name="email"
                  defaultValue={initValue.name}
                  required
                  type="email"
                  class="form-control"
                  // value={formData.email}
                  // onChange={(e) => onInputChange(e)}
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })}
                />
                {errors.email && <p className='error-message'>Email is not valid</p>}
              </div>
              <div class="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="content"
                  defaultValue={initValue.content}
                  required rows="8"
                  class="form-control"
                  // value={formData.content}
                  // onChange={(e) => onInputChange(e)}
                  ref={register({
                    required: true, maxLength: 255
                  })}
                />
                {errors.content && <p className='error-message'>Content is required</p>}
              </div>
              <button
                type="submit"
                name="sbm"
                class="btn btn-primary"
              // onClick={onSubmit}
              >Gửi</button>
            </form>
          </div>
        </div>

        {/* <div>{slice3.map(e => <Item key={e._id} data={e} />)}</div> */}

        <div id="comments-list" class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            {comments && comments.map((e, i) => (
              <div class="comment-item" key={i}>
                <ul>
                  <li><b>{e && e.name}</b></li>
                  <li>{moment(e && e.updated_date).format('DD-MM-YYYY hh:mm:ss')}</li>
                  <li>
                    <p>{e && e.content}</p>
                  </li>
                </ul>
              </div>
            ))}

          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={5}
            totalItemsCount={totalPage}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div> : null}
    </>
  )
}

