import http from './http'


// 商品列表
export const getUser = (params) => {
  return http.fetchPost('/forum/user/a', params)
}
