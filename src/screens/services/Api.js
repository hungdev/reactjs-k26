import axios from 'axios'
import { create } from 'apisauce'
// https://github.com/axios/axios#creating-an-instance
// Khởi tạo api
const api = create({
  baseURL: 'http://mobileshop.hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 60000
});

export function getProducts(params) {
  return api.get('/get-products', { params })
}

export function getDetail(productId) {
  console.log('ddddd', productId)
  return api.get(`/​product​/${productId}`)
}

export function getCategory() {
  return api.get('/get-categories')
}