import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import login from '../page/login'
import register from '../page/register'
import articleDetails from '../page/article/articleDetails'
import problemHome from '../page/problem/problemHome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/articleDetails',
      name: 'articleDetails',
      component: articleDetails
    },
    {
      path: '/problemHome',
      name: 'problemHome',
      component: problemHome
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
