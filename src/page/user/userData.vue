<template>
<div id="userData">
  <div class="center">
    <el-row class="row1">
      <el-col :span="4">头像:</el-col>
      <el-col :span="8">
        <a class="btn" >设置头像</a>
        <my-upload field="img"
                   @crop-success="cropSuccess"
                   @crop-upload-success="cropUploadSuccess"
                   @crop-upload-fail="cropUploadFail"
                   v-model="show"
                   :width="200"
                   :height="200"
                   url="http://localhost:8080/user/uploadImage"
                   :params="params"
                   img-format="png">
        </my-upload>
        <img :src="imgDataUrl" @click="toggleShow">
      </el-col>
    </el-row>
   <el-row class="row">
     <el-col :span="4">用户名:</el-col>
     <el-col :span="12"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
   </el-row>
    <el-row class="row">
      <el-col :span="4">性别:</el-col>
      <el-col :span="12"> <el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio></el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4">出生日期:</el-col>
      <el-col :span="12"><el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker></el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4">简介:</el-col>
      <el-col :span="12"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="4">邮箱:</el-col>
      <el-col :span="12"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
    </el-row>
    <el-row class="row" style="text-align: center;margin-top: 100px">
    <el-button type="primary">提交</el-button></el-row>

  </div>
</div>
</template>

<script>
import 'babel-polyfill' // es6 shim
import myUpload from 'vue-image-crop-upload'
export default {
  name: 'userData',
  data () {
    return {
      show: false,
      params: this.$store.state.user,
      imgDataUrl: this.$store.state.user.userimage
    }
  },
  components: {
    'my-upload': myUpload
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.imgDataUrl = imgDataUrl
      console.log(imgDataUrl)
      console.log(field)
      console.log(this.$store.state.user)
    },
    /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    cropUploadSuccess (res, field) {
      console.log('-------- upload success --------')
      console.log(res)
      if (res.code === 200) {
        this.$store.state.user.userimage = res.data
      }
      console.log(this.$store.state.user.userimage)
    },
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>

<style scoped>
  #userData{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: black;
    font-size: 16px;
    margin: 0 20%;
  }
  .row1{
    padding-left: 30px;
    width: 100%;
    line-height: 100px;
  }
  .center {
    width: 100%;
    background-color: white;
    margin-top: 20px;
  }
  .center .row{
    padding-left: 30px;
    width: 100%;
    padding-top: 10px;
  }
 img{
   width: 80px;
   height: 80px;
 }
</style>
