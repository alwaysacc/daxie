<!--suppress ALL -->
<template>
  <div id="register">
  <div class="center-div">
    <el-tabs  v-model="activeName"  type="card" stretch>
      <el-tab-pane label="注册账号" name="first">
        <el-form  status-icon :rules="rules" :model="forumUser"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="forumUser.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" >
            <el-input v-model="forumUser.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="forumUser.email" autocomplete="off" class="demo-form-inline"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" v-if="ifcode">
            <el-input type="text" v-model="code" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">获取验证码</el-button>
            <el-button type="primary" @click="tijiao" :disabled="dis">注册</el-button>
          </el-form-item>
        </el-form></el-tab-pane>
      <el-tab-pane label="快速登录" name="second">二维码</el-tab-pane>
    </el-tabs>
  </div>
  </div>
</template>

<script>
import {getuser} from '../util/http'
export default {
  name: 'register',
  data () {
    return {
      activeName: 'first',
      radio: '0',
      btn:true,
      ifcode:false,
      rcode:'1',
      code:'',
      dis:true,
      forumUser: {
        username: '',
        email: '',
        password: '',
        code:''
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        ],
        email: [{
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur']
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
        }],
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(JSON.stringify(this.forumUser))
          let params =this.forumUser
          getuser(params).then(res => {
            this.ifcode=true
            this.open()
            console.log(res)
            this.rcode=res.data()
            this.dis=false
          })
        }
      })
    },
    tijiao(){
      if (this.code==this.rcode){
        this.toLogin();
      } else{
        this.$message.error(`验证码不正确，请重新输入`);
        this.code=''
      }
    },
    open() {
      this.$alert('验证码已发送至邮箱，请前往获取！', '提醒', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'success',
            message: `请前往邮箱获取验证码`
          });
        }
      });
    },
    toLogin () {
      this.$router.push({
        path: '/login'
      })
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
