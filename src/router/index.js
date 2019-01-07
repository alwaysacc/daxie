import Vue from 'vue'
import Router from 'vue-router'
import notice from '@/components/notice'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'notice',
      component: notice
    }
  ]
})
