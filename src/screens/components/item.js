import React from 'react'
import { processImage } from '../utils/index'
import { Link } from 'react-router-dom'
export default function Item(props) {
  return (
    <div class="product-item card text-center">
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
