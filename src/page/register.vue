<template>
  <div id="register">
  <y-header></y-header>
  <div class="center-div">
    <el-tabs v-model="activeName" @tab-click="handleClick"  type="card" stretch="true">
      <el-tab-pane label="注册账号" name="first">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input type="text" v-model="ruleForm2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="password" v-model="ruleForm2.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model.number="ruleForm2.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model.number="ruleForm2.code"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          </el-form-item>
        </el-form></el-tab-pane>
      <el-tab-pane label="快速登录" name="second">二维码</el-tab-pane>
    </el-tabs>
  </div>
    <y-footer></y-footer>
  </div>
</template>

<script>
import YHeader from '../components/head'
import YFooter from '../components/footer'
export default {
  name: 'register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
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
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'first',
      radio: '0',
      ruleForm2: {
        name: '',
        email: '',
        password: '',
        code: ''
      },
      rules2: {
        name: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        password: [
          { validator: checkAge, trigger: 'blur' }
        ],
        code: [
          { validator: checkCode, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    YHeader,
    YFooter
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
