import React from 'react'
import { processImage } from '../utils/index'
import { Link } from 'react-router-dom'
import { BsStar } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { addWishList } from '../../actions/cartAction';

export default function Item(props) {
  const dispatch = useDispatch()

  const onToggleWishList = () => {
    // dispatch({type: 'ADD_WISH_LIST', product: props.data})
    dispatch(addWishList(props.data))
  }

  return (
    <div class="product-item card text-center">
      <div style={{ position: 'absolute', top: 5, right: 10 }}
        onClick={onToggleWishList}>
        <BsStar />
      </div>
      <Link to={`/product/${props.data._id}`}>
        <img src={processImage(props.data.image)} alt='' />
      </Link>
      <h4>
        <Link to={`/product/${props.data._id}`}>{props.data.name}</Link>
      </h4>
      <p>Giá Bán: <span>{props.data.price}</span></p>
    </div>
  )
}
