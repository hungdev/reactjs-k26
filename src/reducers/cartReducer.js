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
      // kiểm tra xem sản phẩm đó đã có trong list cart chưa
      const isExistAddNew = state.products.find(el => el._id === action.product._id)
      // nếu có rồi thì tăng số quantity (số lượng) lên, dùng map để lặp qua các sản phầm,
      // nếu sản phẩm đó trùng với sản phẩm gửi lên thì tăng quantity
      const dataAddNew = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: Number(e.quantity) + 1 })
        }
        return e
      })
      // trả về store, nếu có sản phẩm trong list cart thì trả về cái đã đc tăng quantity
      // còn không thì thêm mới
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
