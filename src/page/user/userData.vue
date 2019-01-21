<template>
<div id="userData">
  <div class="center">
    <el-row class="row">
      <el-col :span="4">头像:</el-col>
      <el-col :span="8">
        <a class="btn">设置头像</a>
        <my-upload field="img"
                   @crop-success="cropSuccess"
                   @crop-upload-success="cropUploadSuccess"
                   @crop-upload-fail="cropUploadFail"
                   v-model="show"
                   :width="100"
                   :height="100"
                   url="/upload"
                   :params="params"
                   :headers="headers"
                   img-format="png"></my-upload>
        <img  src="@/image/1.jpg"  @click="toggleShow">
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
      show: true,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '' // the datebase64 url of created image
    }
  },
  components: {
    myUpload
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
    },
    /**
       * upload success
       *
       * [param] jsonData   服务器返回数据，已进行json转码
       * [param] field
       */
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
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
  .center {
    width: 100%;
    background-color: white;
    margin-top: 20px;
    height:600px;
  }
  .center .row{
    padding-left: 30px;
    height: 50px;
    width: 100%;
    line-height: 50px;
    padding-top: 10px;
  }

</style>
