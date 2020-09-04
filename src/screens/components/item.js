import React from 'react'
import { processImage } from '../utils/index'
export default function item(props) {
  return (
    <div class="product-item card text-center">
      <a href="#">
        <img src={processImage(props.data.image)} alt='' />
      </a>
      <h4><a href="#">{props.data.name}</a></h4>
      <p>Giá Bán: <span>{props.data.price}</span></p>
    </div>
  )
}
