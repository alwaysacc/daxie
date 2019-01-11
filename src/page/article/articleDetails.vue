<template>
  <div id="articleDetails">
    <y-header></y-header>

    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '@/components/head'
import YFooter from '@/components/footer'
export default {
  name: 'articleDetails',
  components: {
    YHeader,
    YFooter
  }
}
</script>

<style scoped>
  #articleDetails{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
    width: 100%;
    background-color: #F6F6F6;
  }

</style>
