import * as ActionTypes from './actionTypes'

export const addCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    product
  }
}
// export const removePerson = (person) => {
//   return {
//     type: REMOVE_PERSON,
//     person
//   }
// }