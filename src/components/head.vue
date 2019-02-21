<template>
  <div id="heads">
    <el-row >
      <el-col>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#FA7A1F"
          text-color="#000"
          active-text-color="#FF0000">
          <el-menu-item index="1" >logo</el-menu-item>
          <el-menu-item index="2"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/problemHome">问答</router-link></el-menu-item>

          <el-row type="flex" align="middle" class="login">
            <el-col>
              <el-autocomplete class="scarh"
                               v-model="state"
                               placeholder="搜索" suffix-icon="el-icon-search"
              ></el-autocomplete>
            </el-col>
            <el-col  :span="2">
              <el-menu-item index="4" class="login"><img class="xiaoxi" src="../image/notice.png"/></el-menu-item></el-col>
            <el-col  :span="2" v-if="this.$store.state.islogin">
              <el-menu-item index="4" class="login"><router-link to="/login" >登录</router-link></el-menu-item></el-col>
            <el-col :span="2"  v-if="this.$store.state.islogin">
              <el-menu-item index="5" class="login"><router-link to="/register">注册</router-link></el-menu-item>
            </el-col>
            <el-col :span="4" v-if="!this.$store.state.islogin"> <router-link to="/userHome"><el-menu-item index="6" class="login"><img :src="this.$store.state.user.userimage" class="touxiang"/>{{this.$store.state.user.username }}</el-menu-item></router-link></el-col>
          </el-row>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'heads',
  data () {
    return {
      state: '',
      state4: ''
    }
  }
}
</script>

<style scoped>
  #heads{
    width: 100%;
    position:fixed;
    top:0px;
    z-index:9999
  }
  .el-menu-demo {
    padding-left: 20%;
    padding-right: 20%;
  }
  el-menu-item{
    font-size: 30px;

  }
  .login .xiaoxi{
    height:50%;
    width: 100%;
  }
  .touxiang{
    height:50%;
    width: 30%;
  }
</style>
