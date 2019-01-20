// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
// 定义全局变量

// 引用
var E = require('wangeditor') // 使用 npm 安装

// 创建编辑器
var editor = new E('#editor')
editor.create()
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
