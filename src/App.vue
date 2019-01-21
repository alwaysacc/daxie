<template>
  <div id="app">
    <y-header></y-header>
    <span class="blank" style="height:50px;"></span>
    <router-view ></router-view>
    <span class="blank" style="height:20px;"></span>
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
  },
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
    padding-bottom: 80px;
  }
  .blank{ clear:both; display:block; overflow:hidden;}
  a{
    cursor:pointer
  }

</style>
