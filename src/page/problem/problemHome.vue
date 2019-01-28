<template>
  <div id="problemHome">
    <div class="bodys">
      <div class="lefts">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="left-top">
        <el-tab-pane label="推荐" name="first">
          <div class="wenti"  v-for="(rprolist,index) in recommendProblemList">
            <el-row >
              <el-col :span="20" style=" height: 40px;">
              <router-link :to="{path:'/problemDetails', query:{problem:recommendProblemList[index]}}"><h4>{{rprolist.title}}</h4></router-link>
              </el-col>
            </el-row>
            <el-row class="font">
              <el-col :span="20">  <span >
                <div v-html="rprolist.content" style="text-align: left"></div>
              </span></el-col>
            </el-row>
            <el-row class="divbot">
              <el-col :span="10">shuo于 {{rprolist.createtime|getDate}} 提问 </el-col>
              <el-col :span="3">{{rprolist.followcount}}关注 </el-col>
              <el-col :span="3">{{rprolist.replycount}}回答 </el-col>
              <el-col :span="3"><el-button size="small">关注问题</el-button></el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关注" name="second">
          <div class="wenti">
            <el-row >
              <el-col :span="10">
                <h3>为什么语言里要提供“反射”功能？</h3>
              </el-col>
            </el-row>
            <el-row class="font">
              <el-col :span="10">  <p >为什么需要反射，这不是破坏了封装吗?</p></el-col>
            </el-row>
            <el-row class="divbot">
              <el-col :span="8">shuo于 2018-08-28 11:16 提问 </el-col>
              <el-col :span="3">167 次浏览 </el-col>
              <el-col :span="3">7 个回答 </el-col>
              <el-col :span="3">程序语言</el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最新" name="third">
          <div class="wenti">
            <el-row >
              <el-col :span="10">
                <h3>为什么语言里要提供“反射”功能？</h3>
              </el-col>
            </el-row>
            <el-row class="font">
              <el-col :span="10">  <p >为什么需要反射，这不是破坏了封装吗?</p></el-col>
            </el-row>
            <el-row class="divbot">
              <el-col :span="8">shuo于 2018-08-28 11:16 提问 </el-col>
              <el-col :span="3">167 次浏览 </el-col>
              <el-col :span="3">7 个回答 </el-col>
              <el-col :span="3">程序语言</el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
      </div>
      <div class="rights">
        <div class="right-top">
       <el-row>
         <el-col :span="24"> <router-link to="/addProblem"><el-button round size="medium" style="width: 80%;background-color:#FA7A1F;color: black"><i class="el-icon-edit-outline"></i>提问</el-button></router-link></el-col>
       </el-row>
          <el-row class="right-top-line">
            <el-col :span="24">我的回答 0</el-col>
          </el-row>
          <el-row class="right-top-line">
            <el-col :span="24">我的收藏 0</el-col>
          </el-row>
          <el-row class="right-top-line">
            <el-col :span="24">我的提问 0</el-col>
          </el-row>
          <el-row class="right-top-line">
            <el-col :span="24">我的邀请 0</el-col>
          </el-row>
        </div>

        <div class="right-bottom">
          <el-row >
            <div class="biaoti"><p>热门问题</p></div>
          </el-row>
          <div>
            <el-row>
              <el-col :span="24" class="right-bottom-col"><p  class="right-bottom-p">为什么语言里要提供“反射”功能？</p></el-col>
              <el-col :span="24" class="right-bottom-col"><p  class="right-bottom-p">为什么语言里要提供“反射”功能？</p></el-col>
              <el-col :span="24" class="right-bottom-col"><p  class="right-bottom-p">为什么语言里要提供“反射”功能？</p></el-col>
              <el-col :span="24" class="right-bottom-col"><p  class="right-bottom-p">那谁知道为什么语言里要提供“反射”功能？</p></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getRecommendProblem} from '../../util/http'
export default {
  name: 'problemHome',
  data () {
    return {
      activeName: 'first',
      recommendProblemList: {}
    }
  },
  methods: {
    // 获取推荐问题
    getRecommendProblem () {
      let params = {page: 0, size: 10}
      getRecommendProblem(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.recommendProblemList=res.data.list
        } else {
          console.log('获取失败')
        }
      })
    }
  },
  created () {
    this.getRecommendProblem()
  }
}
</script>

<style scoped>
  #problemHome{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 16px;
    overflow-y:auto;
    overflow-x:hidden;
  }
  a{

  }
  .bodys{
    padding:0 20%;
    margin-top: 20px;
    height: 100%;
  }
  .lefts{
    float: left;
    width: 80%;
  }
  .left-top{
    background-color: white;
  }
  .rights{
    float: left;
    width: 20%;
  }
  .wenti{
    background-color: white;
    border-bottom: darkgrey solid 1px;
    padding-left: -20px;
  }
  .wenti h4{
    color: black;
    float: left;
    padding-left: 20px;
    overflow: hidden;
  }
  .wenti .font span{
    font-size: 16px;
    padding-left: 20px;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .divbot{
    height: 60px;
    line-height:60px;
    margin-left: -25px;
    color: darkgrey;
  }
  .right-top{
    margin-left: 20px;
    padding-top: 20px;
    height: 180px;
    background-color: white;
    text-align: center;
  }
  .right-top-line{
    height: 30px;
    line-height: 30px;
    padding: 5px 0;
    width: 80%;
    margin-left: 10%;
    border-bottom: darkgrey solid 1px;
  }
  .right-bottom{
    margin-left: 20px;
    margin-top: 20px;
    height: auto;
    background-color: white;
    padding-bottom: 20px;
  }
  .right-bottom-p{
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分省略号显示*/
    border-bottom: #E7E7E7 solid 1px;
    font-size: 14px;
  }
  .right-bottom-col{
    height: 30px;
    line-height: 30px;
  }
  .biaoti{
    border-radius:30px;
    margin: auto;
    height: 35px;
    line-height: 35px;
    width: 80%;
    background-color: #FA7A1F ;
  }
</style>
