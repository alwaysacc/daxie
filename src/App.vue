<template>
  <div id="app">

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#FA7A1F"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item index="1">logo</el-menu-item>
      <el-submenu index="2">
        <template slot="title">首页</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-row type="flex" align="middle">
      <el-menu-item index="3">问答</el-menu-item>
      <el-autocomplete class="scarh"
                       v-model="state4"
                       :fetch-suggestions="querySearchAsync"
                       placeholder="请输入内容"
                       @select="handleSelect"
      ></el-autocomplete>
      </el-row>



      <el-menu-item index="4" class="login">登录</el-menu-item>

        <el-menu-item index="5" class="login">注册</el-menu-item>



    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-demo{
  padding-left: 10%;
}
.scarh{

}
  .login {
    width:30%;
    float: right;
    padding-right: 10%;
  }
.login li{
  display: inline;
}
</style>
