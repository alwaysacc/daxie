<template>
  <div id="head">
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
          <el-menu-item index="1" >logo</el-menu-item>
          <el-menu-item index="2"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/problemHome">问答</router-link></el-menu-item>

          <el-row type="flex" align="middle" class="login">
            <el-col>
              <el-autocomplete class="scarh"
                               v-model="state4"
                               :fetch-suggestions="querySearchAsync"
                               placeholder="搜索" suffix-icon="el-icon-search"
                               @select="handleSelect"
              ></el-autocomplete>
            </el-col>
            <el-col  :span="2">
              <el-menu-item index="4" class="login"><img src="../image/notice.png"/></el-menu-item></el-col>
            <el-col  :span="2">
              <el-menu-item index="4" class="login"><router-link to="/login">登录</router-link></el-menu-item></el-col>
            <el-col :span="2">
              <el-menu-item index="5" class="login"><router-link to="/register">注册</router-link></el-menu-item>
            </el-col>
          </el-row>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'head'
}
</script>

<style scoped>
  .el-menu-demo {
    padding-left: 20%;
    padding-right: 20%;
  }
  el-menu-item{
    font-size: 30px;

  }
  .login{

  }
  .login img{
    height:50%;
    width: 100%;
  }
</style>
