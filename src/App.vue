<template>
  <div id="app">
    <y-header></y-header>
    <router-view ></router-view>
    <y-footer></y-footer>
    <totop></totop>
  </div>
</template>

<script>
import YHeader from '@/components/head'
import YFooter from '@/components/footer'

import Totop from '@/components/toTop'
export default {
  name: 'App',
  components: {
    YHeader,
    YFooter,
    Totop
  }
}

</script>

<style scoped>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 16px;
    width: 100%;
    height:auto;
    margin-bottom: 100px;
  }

</style>
