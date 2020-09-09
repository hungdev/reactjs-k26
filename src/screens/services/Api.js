import axios from 'axios'
// https://github.com/axios/axios#creating-an-instance
// Khởi tạo api
const api = axios.create({
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

export const getDetailProducts = (productId) => api.get(`/product/${productId}`);

// export const getDetail = (productId) => api.get(`/​product​/${productId}`)

export function getCategory() {
  return api.get('/get-categories')
}