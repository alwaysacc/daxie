<template>
  <div id="app">
    <el-row >

    <el-col>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#FA7A1F"
          text-color="#000"
          active-text-color="#FF0000">
          <el-menu-item index="1">logo</el-menu-item>
          <el-menu-item index="2">首页</el-menu-item>
          <el-menu-item index="3">问答</el-menu-item>

          <el-row type="flex" align="middle" class="login">
            <el-col>
            <el-autocomplete class="scarh"
                             v-model="state4"
                             :fetch-suggestions="querySearchAsync"
                             placeholder="搜索"
                             @select="handleSelect"
            ></el-autocomplete>
            </el-col>
            <el-col  :span="2">
              <el-menu-item index="4" class="login"><img src="./image/notice.png"/></el-menu-item></el-col>
            <el-col  :span="2">
            <el-menu-item index="4" class="login">登录</el-menu-item></el-col>
            <el-col :span="2">
            <el-menu-item index="5" class="login">注册</el-menu-item>
            </el-col>
          </el-row>
        </el-menu>
    </el-col>
    </el-row>
    <div class="center">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <template slot="title">
              <span>Java</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">PHP</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">MySQL</span>
          </el-menu-item>
          <el-menu-item index="4">
          <span slot="title">前端</span>
        </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">前端</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    </div>
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
  font-size: 16px;
}
.el-menu-demo{
  padding-left: 20%;
}
.login{
  padding-right: 20%;
}
.login img{
  height:100%;
  width: 100%;
}
.center{
  padding-left: 20%;
  padding-right: 20%;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
