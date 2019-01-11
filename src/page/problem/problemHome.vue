<template>
  <div id="problemHome">
    <y-header></y-header>
    <div class="bodys">
      <div class="lefts">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" value="first">
        <el-tab-pane label="推荐" name="first">
          <div class="wenti">
            <el-row >
              <el-col :span="10">
              <h3>为什么语言里要提供“反射”功能？</h3>
              </el-col>
            </el-row>
            <el-row >
              <el-col :span="10">  <p >为什么需要反射，这不是破坏了封装吗?</p></el-col>
            </el-row>
            <el>
              <el-col :span="4">浏览：5555</el-col>
              <el-col  :span="4">回答：4444</el-col>
              <el-col :span="6">关注问题</el-col>
            </el>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关注" name="second">关注</el-tab-pane>
        <el-tab-pane label="最新" name="third">最新</el-tab-pane>
      </el-tabs>
      </div>
      <div class="rights">
       <el-row>
         <el-col></el-col>
       </el-row>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '@/components/head'
import YFooter from '@/components/footer'
export default {
  name: 'problemHome',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    YHeader,
    YFooter
  }
}
</script>

<style scoped>
  #problemHome{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
    background-color: white;
  }
  .bodys{
    padding:0 20%;
    margin-top: 20px;
    height: 100%;
  }
  .lefts{
    float: left;
    width: 80%;
  }
  .rights{
    float: left;
    width: 20%;
  }
  .wenti{
    height: 200px;
    background-color: white;
    border-bottom: darkgrey solid 1px;
  }
</style>
