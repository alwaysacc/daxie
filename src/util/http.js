import http from '../util/axios'
// 注册
export const registerUser = (params) => {
  return http.fetchPost('/forumuser/register', params)
}
//发送验证码到邮箱，并获取
export const getCode = (params) => {
  return http.fetchPost('/forumuser/getCode', params)
}
//登录
export const login = (params) => {
  return http.fetchPost('/forumuser/login', params)
}
//发帖
export const addArticle = (params) => {
  return http.fetchPost('/article/add', params)
}
//home查询文章
export const getHomeList = (params) => {
  return http.fetchPost('/article/list', params)
}
//查询分类
export const getSortList = (params) => {
  return http.fetchPost('/sort/list', params)
}
//添加文章评论
export const addComment = (params) => {
  return http.fetchPost('/comments/add', params)
}
//查看文章评论
export const getCommentList = (params) => {
  return http.fetchPost('/comments/getCommentList', params)
}
