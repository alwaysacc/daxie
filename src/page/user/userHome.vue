<template>
    <div id="userHome">
      <y-header></y-header>
      <div class="center">
        <el-row class="center-top">
            <div class="center-top-div">
            <img src="@/image/img.jpg"><a>哈哈哈哈哈</a>
            </div>
          <div class="btn">
          <el-button type="primary" plain >编辑个人资料</el-button>
          </div>
        </el-row>
        <div class="center-bottom">
          <div class="center-bottom-left">
          <el-tabs type="border-card">
            <el-tab-pane label="文章">文章</el-tab-pane>
            <el-tab-pane label="提问">提问</el-tab-pane>
            <el-tab-pane label="回答">回答</el-tab-pane>
            <el-tab-pane label="评论">评论</el-tab-pane>
            <el-tab-pane label="关注">关注</el-tab-pane>
            <el-tab-pane label="关注">收藏</el-tab-pane>
          </el-tabs>
          </div>
          <div class="center-bottom-right">
            <el-row >
              <el-col :span="12" class="center-bottom-right-row">
                关注 2
              </el-col>
              <el-col :span="12" class="center-bottom-right-row">
                粉丝 2
              </el-col>
            </el-row>
          </div>
        </div>

      </div>
      <y-footer></y-footer>
    </div>
</template>

<script>
import YHeader from '@/components/head'
import YFooter from '@/components/footer'
export default {
    name: "userHome",
  components: {
    YHeader,
    YFooter
  }
}
</script>

<style scoped>
  #userHome{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 16px;
  }
  .center{
    text-align: left;
    margin:  0 20%;
    background-color: white;
    margin-top: 20px;
  }
  .center-top-div{
    float: left;
    height: 50px;
    line-height: 50px;
  }
  .center-top-div img{
    border: darkgrey solid 2px;
    width: 50px;
    height: 50px;
  }
   .btn{
    padding-top: 20px;
     padding-right: 30px;
     height: 50px;
    float: right;
  }
  .center-bottom{
    margin-top: 20px;
    width: 100%;
  }
  .center-bottom-left{
    float: left;
    width: 80%;
  }
  .center-bottom-right{
    float: right;
    width: 20%;
    background: white;

  }
  .center-bottom-right-row{
    height: 60px;
    line-height: 60px;
    padding-left: 30px;
  }
</style>
