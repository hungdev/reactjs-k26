// reducers/peopleReducer.js
import * as ActionTypes from '../actions/actionTypes';
const initialState = {
  // products: [{name: 'ip7', quantity: 0, id: 1223}]
  products: []
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      const isExist = state.products.find(el => el._id === action.product._id)
      const data = state.products.map(e => {
        if (e._id === action.product._id) {
          return ({ ...e, quantity: action.product.quantity })
        }
        return e
      })
      return {
        products: isExist ? data : [...data, action.product],
      };
    // case REMOVE_PERSON:
    //   return {
    //     people: state.people.filter(p => p.name !== action.person.name),
    //   };
    default:
      return state;
  }
}
