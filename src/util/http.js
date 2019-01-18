import http from '../util/axios'
// 商品列表
export const getuser = (params) => {
  return http.fetchPost('/forum/user/register', params)
}
