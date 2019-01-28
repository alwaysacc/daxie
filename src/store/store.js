import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const key = 'user'
const key2 = 'islogin'
const store = new Vuex.Store({
  state () {
    return {
      islogin:true,
      user: null
    }
  },
  getters: {
    getStorage: function () {
      if (!key) {
        state.key = JSON.parse(localStorage.getItem(key))
      }
      return key
    }
  },
  mutations: {
    $setStat (state, value) {
      state.islogin = value
      localStorage.setItem(key2, JSON.stringify(value))
    },
    $setUser (state, value) {
      state.user = value
      localStorage.setItem(key, JSON.stringify(value))
    },
    $removeStorage (state) {
      state.user = null
      localStorage.removeItem(key)
    }
  }
})

export default store
