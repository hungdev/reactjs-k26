import React, { useState, useEffect } from "react";
import Item from './components/item'
import { useSelector, useDispatch } from 'react-redux';

function Product() {
  const products = useSelector(state => state.cart.wishlist);
  return (
    <>
      <div class="products">
        <div class="product-list card-deck">
          {products.map(e => <Item key={e._id} data={e} />)}
        </div>
      </div>
    </>
  );
}

export default Product