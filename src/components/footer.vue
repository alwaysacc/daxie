<template>
  <div id="footer">
    <el-row>
      <el-col class="footer">  伙伴协同  | 源市场 | 这是页脚链接</el-col>
    </el-row>
    <el-row>
      <el-col>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.</el-col>
    </el-row>
    <div></div>
  </div>
</template>

<script>
/* eslint-disable quotes */

export default {
  name: 'foot'
}
</script>
<style scoped>
#footer{
  margin-top: 10px;
  padding: 20px 0;
  background-color: #ebebeb;
  width: 100%;
  height:50px;position:fixed;bottom:0px;
}
  .footer{
    padding-top: 10px;
  }
</style>
