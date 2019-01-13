import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import login from '../page/login'
import register from '../page/register'
import articleDetails from '../page/article/articleDetails'
import addArticle from '../page/article/addArticle'
import problemHome from '../page/problem/problemHome'
import problemDetails from '../page/problem/problemDetails'
import addProblem from '../page/problem/addProblem'
import userHome from '../page/user/userHome'
Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    //文章详情
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: articleDetails
    },
    //添加文章
    {
      path: '/addArticle',
      name: 'addArticle',
      component: addArticle
    },
    //问答首页
    {
      path: '/problemHome',
      name: 'problemHome',
      component: problemHome
    },
    //问题详情页
    {
      path: '/problemDetails',
      name: 'problemDetails',
      component: problemDetails
    },
    //提问
    {
      path: '/addProblem',
      name: 'addProblem',
      component: addProblem
    },
    //登录
    {
      path: '/login',
      name: 'login',
      component: login
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: register
    }
    ,
    //个人主页
    {
      path: '/userHome',
      name: 'userHome',
      component: userHome
    }
  ]
})
