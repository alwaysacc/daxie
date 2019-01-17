<template>
  <div id="register">
  <div class="center-div">
    <el-tabs  v-model="activeName" @tab-click="handleClick"  type="card" stretch>
      <el-tab-pane label="注册账号" name="first">
        <el-form  status-icon :rules="rules2" :model="ruleForm"  ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="password" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passWord">
            <el-input v-model="ruleForm.passWord" type="password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          </el-form-item>
        </el-form></el-tab-pane>
      <el-tab-pane label="快速登录" name="second">二维码</el-tab-pane>
    </el-tabs>
  </div>
  </div>
</template>

<script>
import { getUser } from '../util/api'
export default {
  name: 'register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('1'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'first',
      radio: '0',
      ruleForm: {
        userName: '',
        email: '',
        passWord: '',
        code: ''
      },
      forumUser: {
        userName: '',
        email: '',
        passWord: '',
        code: ''
      },
      rules2: {
        userName: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        passWord: [
          { validator: checkAge, trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(JSON.stringify(this.forumUser))

          //var params = new URLSearchParams();
          //params.append('id', '1');
          let params ={
            params :{
            id:1
          }
          }
          getUser(params).then(res => {
            console.log(res)
            if (res.success === true) {
            console.log(res)
            } else {
            }
          })
        }
      })
    },
    handleClick () {
      console.log(this.activeName)
    }
  }

}
</script>

<style scoped>
  #register{
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
