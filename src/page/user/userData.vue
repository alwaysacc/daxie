<template>
<div id="userData">
  <div class="center">
    <el-row class="row1">
      <el-col :span="4">头像:</el-col>
      <el-col :span="8">
        <el-upload
          class="avatar-uploader"
          action="upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      imgUrl: '' // the datebase64 url of created image
    }
  },
  components: {
    myUpload
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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

  }
  .center {
    width: 100%;
    background-color: white;
    margin-top: 20px;
    height:600px;
  }
  .center .row{
    padding-left: 30px;
    width: 100%;
    padding-top: 10px;
  }
  el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
