<template>
<div id="login">
<div class="center-div">
  <el-tabs v-model="activeName" type="card" stretch>
    <el-tab-pane label="账号登录" name="first">
      <el-form :model="user" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="user.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model.number="user.code"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio v-model="radio" label="1">记住密码</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
    </el-tab-pane>
    <el-tab-pane label="二维码登录" name="second">二维码</el-tab-pane>
  </el-tabs>

</div>
</div>
</template>

<script>
import {login} from '../util/http'
export default {
  name: 'login',
  data () {
    return {
      activeName: 'first',
      radio: '1',
      user: {
        username: '',
        password: '',
        code: ''
      },
      rules2: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
        ],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (user) {
      this.$refs[user].validate((valid) => {
        if (valid) {
          alert('submit!')
          let params = this.user
          login(params).then(res => {
            if (res.code === 200) {
              console.log(res)
              this.$message({
                type: 'success',
                message: `登录成功`
              })
              this.$store.commit('$setStat', false)
              this.$store.commit('$setUser', res.data)
              console.log(this.$store.state.user)
              console.log(this.$store.state.islogin)
              this.toHome()
            } else {
              this.$message({
                type: 'info',
                message: res.message
              })
            }
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toHome () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
#login{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  background-color: white;
  width: 100%;
}
  .center-div{
    margin: 0 auto;
    width: 500px;
    height: 500px;
    margin-top: 100px;
  }
  .input{
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;
  }
</style>
