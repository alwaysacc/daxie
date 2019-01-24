import http from '../util/axios'
// 注册
export const registerUser = (params) => {
  return http.fetchPost('/user/register', params)
}
// 发送验证码到邮箱，并获取
export const getCode = (params) => {
  return http.fetchPost('/user/getCode', params)
}
// 登录
export const login = (params) => {
  return http.fetchPost('/user/login', params)
}
// 发帖
export const addArticle = (params) => {
  return http.fetchPost('/article/add', params)
}
// home查询文章
export const getHomeList = (params) => {
  return http.fetchPost('/article/list', params)
}
// 文章点赞
export const addlike = (params) => {
  return http.fetchPost('/article/update', params)
}
// 查询分类
export const getSortList = (params) => {
  return http.fetchPost('/sort/list', params)
}
// 添加文章评论
export const addComment = (params) => {
  return http.fetchPost('/comments/add', params)
}
// 查看文章评论
export const getCommentList = (params) => {
  return http.fetchPost('/comments/getCommentList', params)
}
// 提问
export const addProblem = (params) => {
  return http.fetchPost('/problem/add', params)
}
// 获取推荐问题
export const getRecommendProblem = (params) => {
  return http.fetchPost('/problem/list', params)
}
// 问题详情页，获取回答
export const getReplyList = (params) => {
  return http.fetchPost('/reply/getReply', params)
}
// 回答问题
export const addReply = (params) => {
  return http.fetchPost('/reply/add', params)
}
// 查看是否关注
export const getFollew = (params) => {
  return http.fetchPost('/relation/getFollew', params)
}
// 关注
export const follew = (params) => {
  return http.fetchPost('/relation/add', params)
}
// 取消关注
export const cancelFollew = (params) => {
  return http.fetchPost('/relation/update', params)
}
