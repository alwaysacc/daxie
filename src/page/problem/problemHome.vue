<template>
  <div id="problemHome">
    <y-header></y-header>
    <div class="bodys">
      <div class="lefts">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" value="first">
        <el-tab-pane label="推荐" name="first">
          <div>
            <el-row >
              <el-col :span="10">
              <p >为什么语言里要提供“反射”功能？</p></el-col>
            </el-row>
            <el-row :span="20"><p >为什么需要反射，这不是破坏了封装吗?</p></el-row>
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
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
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
</style>
