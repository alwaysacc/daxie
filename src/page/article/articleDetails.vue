<template>
  <div id="articleDetails">
    <div class="center">
      <div class="left">
        <el-row>
          <el-col><h3>{{article.title}}</h3></el-col>
        </el-row>
        <el-row class="dateline">
          <a>{{article.createtime | getDate}}</a>
          <a>  阅读数：6666</a>
          <a>   收藏</a>
        </el-row>
        <div class="ariicle" v-html="article.content">
        </div>
        <div class="left-bottom">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="想说些什么"
            v-model="textarea3" @blur="leave" @focus="fsbutton">
          </el-input>
          <el-row v-if="btn">
          <el-button class="btn" type="primary" @onclick="fsbutton">提交</el-button>
          </el-row>
        </div>
        <div class="comment-div">
          <el-row class="comment">
            <el-col :span="2"><a>评论</a></el-col>
          </el-row>
          <div v-for="comment in commentlist">
          <div class="comment-div-left">
            <img src="@/image/img.jpg"/>
          </div>
          <div class="comment-div-right">
            <el-row class="a">
              <el-col>
              <a style="font-weight: bold">哈哈哈哈</a></el-col>
            </el-row>
            <el-row class="a">
              <el-col>
              <a>{{comment.comment}}</a>
              </el-col>
            </el-row>
            <el-row class="a sjdiv">
              <a>{{comment.createtime | getDate}}</a>
              <a class="dianzan">回复</a>
              <a class="dianzan">点赞</a>
            </el-row>
          </div>
          </div>

        </div>
      </div>
      <div class="right">
        <div class="right-top">
        <el-row >
          <el-col :span="4"><img src="@/image/img.jpg"/></el-col>
          <el-col :span="8"><a>哈哈哈哈哈</a></el-col>
          <a class="btn2">
          <el-button type="primary"  size="mini" :class="{'guanzhu': !isFollew}" round @click="follew">{{ isFollew ? '关注' : '已关注'}}</el-button></a>
        </el-row>
        </div>
        <div class="right-bottom">
          <el-row >
            <el-col :span="12" class="right-bottom-line right-bottom-col"><a>5</a><br/>文章</el-col>
            <el-col :span="12" class="right-bottom-col"><a>5</a><br/>提问</el-col>
            <el-col :span="12" class="right-bottom-line right-bottom-col"><a>5</a><br/>回答</el-col>
            <el-col :span="12" class="right-bottom-col"><a>5</a><br/>粉丝</el-col>
          </el-row>
        </div>
        <div class="right-new">
          <el-row>
          <div class="biaoti">
            <a>最新文章</a>
          </div>
          </el-row>
          <el-row>
            <el-col :span="24" class="right-new-col"><p  class="right-bottom-p">为什么语言里要提供“反射”功能？</p></el-col>
            <el-col :span="24" class="right-new-col"><p  class="right-bottom-p">为什么语言里要提供“反射”功能？</p></el-col>
            <el-col :span="24" class="right-new-col"><p  class="right-bottom-p">为什么语言里要提供“反射”功能？</p></el-col>
            <el-col :span="24" class="right-new-col"><p  class="right-bottom-p">那谁知道为什么语言里要提供“反射”功能？</p></el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCommentList, follew, getFollew, cancelFollew} from '../../util/http'
export default {
  name: 'articleDetails',
  data () {
    return {
      btn: false,
      article: {},
      commentlist: {},
      isFollew: true,
      relation: {
        userid: '',
        operating: '',
        foruserid: ''
      },
      guanzhu: {}
    }
  },
  methods: {
    fsbutton () {
      this.btn = true
    },
    leave () {
      this.btn = false
    },
    getCommentList () {
      let params = {
        forid: this.article.articleid
      }
      // 获取评论
      getCommentList(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.commentlist = res.data
        } else {

        }
      })
    },
    // 关注和取消关注
    follew () {
      this.relation.userid = this.$store.state.user.userid
      this.relation.foruserid = this.$route.query.article.userid
      if (this.isFollew === false) {
        this.relation.operating = 0
        let params = this.relation
        // 取消关注
        follew(params).then(res => {
          console.log(res)
        })
      } else {
        this.relation.operating = 1
        // 关注
        let params = this.relation
        cancelFollew(params).then(res => {
          console.log(res)
        })
      }
      this.isFollew = !this.isFollew
    },
    getFollew () {
      let params = {
        userid: this.$store.state.user.userid,
        foruserid: this.$route.query.article.userid
      }
      getFollew(params).then(res => {
        console.log(res)
        if (res.data[0].operating === 1) {
          this.guanzhu = res.data[0]
          this.isFollew = false
        } else {
          this.isFollew = true
        }
      })
    }
  },
  created () {
    this.article = this.$route.query.article
    this.getCommentList()
    this.getFollew()
  }
}
</script>

<style scoped>
  #articleDetails{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 16px;
    width: 100%;
    background-color: #F6F6F6;
  }
  .guanzhu{
    background-color: darkgrey;
  }
  .center{
    padding:0 20%;
    margin-top: 20px;
    height: 100%;
  }
  .dateline{
    text-align: left;
  }
  .dateline a{
   margin-right: 30px;
  }
  .left{
    float: left;
    width: 70%;
    background-color: white;
    padding: 10px;
    height: auto;
  }
  .left h3{
    float: left;
  }
  .ariicle{
    text-align: left;
    border-top: darkgrey solid 1px;
    margin-top: 10px;
  }
  .left-bottom .btn{
    float: right;
    margin-top: 10px;
  }
  .comment-div{
    height: auto;
    overflow: hidden;
    padding-top: 50px;
  }
  .comment{
    padding-bottom: 20px;
  }
  .comment a{
    font-weight: bold;
  }
  .comment-div-left{
    float: left;
    height: 50px;
    width: 5%;
    line-height: 50px;
  }
  .comment-div-right{
    float: left;
    width: 95%
  }

  .comment-div-right .a{
    float: left;
    text-align: left;
    margin-top: 10px;
    width: 100%;
  }
  .dianzan{
    float: right;
    margin-right: 20px;
  }
  .sjdiv a{
    font-size: 13px;
    color: darkgrey;
  }
  .right{
    float: right;
    width: 26%;

  }
  .right-top{
    height: 60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-bottom: darkgrey solid 1px;
    background-color: white;
  }
  .right-top .btn2{
    float: right;
    padding-right: 20px;
  }
  .right-bottom{
    padding-top: 20px;
    background-color: white;
  }
  .right-bottom-col{
    height: 50px;
    margin-top: 10px;
  }
  .right-bottom-line{
    border-right: darkgrey solid 1px;
  }
  .right-bottom-col a{
    font-weight:bold;
  }
  .right-new{
    padding-top:10px;
    margin-top: 10px;
    background-color: white;
    height: 300px;
  }
  .right-new-col{
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
  .right-bottom-p{
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分省略号显示*/
    border-bottom: #E7E7E7 solid 1px;
    font-size: 14px;
  }
</style>
