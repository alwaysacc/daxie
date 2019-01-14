<template>
<div id="userData">
  <div class="center">
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
export default {
  name: 'userData'
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
    line-height: 50px;
    padding-top: 10px;
  }

</style>
