// reducers/peopleReducer.js
import * as ActionTypes from '../actions/actionTypes';
const initialState = {
  // products: [{name: 'ip7', quantity: 0, id: 1223}]
  products: []
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_QUANTITY:
      const isExist = state.products.find(el => el._id === action.product._id)
      const data = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: action.product.quantity })
        }
        return e
      })
      return {
        products: isExist ? data : [...state.products, action.product],
      };
    case ActionTypes.ADD_CART:
      console.log('11')
      const isExistAddNew = state.products.find(el => el._id === action.product._id)
      console.log('isExistAddNew', isExistAddNew)
      const dataAddNew = state.products.map(e => {
        if (e._id === action.product._id) {
          console.log('222')
          return ({ ...e, quantity: Number(e.quantity) + 1 })
        }
        return e
      })
      console.log('dataAddNew', dataAddNew)
      return {
        products: isExistAddNew ? dataAddNew : [...state.products, action.product],
      };
    case ActionTypes.REMOVE_PRODUCT:
      return {
        products: state.products.filter(p => p._id !== action.product._id),
      };
    default:
      return state;
  }
}
