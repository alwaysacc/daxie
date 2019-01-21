<template>
  <div id="home">
    <div class="centers">
      <div class="left">
        <el-menu  class="el-menu-vertical-demo" background-color="#FA7A1F"
                  text-color="#000"
                  active-text-color="#FF0000" v-for="(sort,index) in sortlist" :key="sort.id">
          <el-menu-item  index="key" class="items"  >
              <span >{{sort.sortname}}</span>
          </el-menu-item>
        </el-menu>

      </div>

      <div class="center-div">
        <div class="tiezi"  v-for="(article,index) in articlelist">
          <el-row>
            <router-link to="/articleDetails">
            <el-col> <h3>{{article.title}}</h3></el-col></router-link>
          </el-row>
          <div class="zuozhe" v-if="!article.seeall">
            <el-row>
              <el-col><img src="../image/img.jpg"/> 说。</el-col>
            </el-row>
            <el-row class="liulan">
              <el-col>1111人浏览</el-col>
            </el-row>
          </div>
          <el-row>
            <el-col  :span="24">
              <span :class="{'con-art':article.seeall}">
                <div  v-html="article.content" style="text-align: left">
                </div>
              </span>
            </el-col>

            <div @click='seeAll(index)' style="float: right"><a style="color:#FA7A1F;  " >{{article.seeall? '查看全文':'收起'}}</a></div>
          </el-row>
          <el-row>
            <el-col :span="6"><a href="#">点赞</a></el-col>
            <el-col :span="6" ><a @click="pinglun(index,article.articleid)" style=" cursor:pointer"> {{article.comments? '收起评论':'55评论'}}</a> </el-col>
            <el-col :span="6"><a href="#">分享</a> </el-col>
            <el-col :span="6"><a href="#">收藏</a> </el-col>
          </el-row>
          <div v-if="article.comments" class="comment-div">
            <el-row class="comment">
            <el-col :span="2"><a>评论</a></el-col>
          </el-row>

            <div class="comment-border"   v-for="(clist,index) in commentlist">
            <div class="comment-div-left">
              <img src="@/image/img.jpg"/>
            </div>
            <div >
            <div class="comment-div-right">
              <el-row class="a">
                <el-col>
                  <a style="font-weight: bold">哈哈哈哈</a></el-col>
              </el-row>
              <el-row class="a">
                <el-col>
                  <a>{{clist.comment}}</a>
                </el-col>
              </el-row>
              <el-row class="a sjdiv">
                <a>{{clist.createtime | getDate}}</a>
                <a class="dianzan">回复</a>
                <a class="dianzan">点赞</a>
              </el-row>
            </div>

            </div>
              <div style="clear:both"></div>
            </div>
            <div class="comment-input">
              <el-row>
                <el-col :span="input" >
                  <el-input  class="el_input1" v-model="comments.comment"  @focus="fsbutton" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col  :span="butt">
                  <el-button type="primary" v-if="button" @click="addComment(article.articleid)">提交</el-button>
                </el-col>
              </el-row>
            </div>

          </div>

        </div>
      </div>

      <div class="right">
        <div class="right-top">
          <el-row>
            <el-col :span="8">
              <router-link to="/addArticle"><i class="el-icon-circle-plus-outline"/><br/><a>发帖 </a></router-link>
            </el-col>
            <el-col :span="8"><i class="el-icon-circle-plus-outline"/><br/><a>发帖</a> </el-col>
            <el-col :span="8"><i class="el-icon-circle-plus-outline"/><br/><a>发帖 </a></el-col>
          </el-row>
        </div>
        <div class="right-center">

          <div class="biaoti">
            <a>今日最热</a>
          </div>
          <el-row class="right-bot">
            <el-col class="hot">1、哈哈哈哈哈哈哈哈哈哈</el-col>
            <el-col class="hot">2、哈哈哈哈哈哈哈哈哈哈</el-col>
            <el-col class="hot">3、哈哈哈哈哈哈哈哈哈哈</el-col>
            <el-col class="hot">4、哈哈哈哈哈哈哈哈哈哈</el-col>
            <el-col class="seemore" :span="8">查看更多</el-col>
          </el-row>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
/* eslint-disable no-undef */
import {getSortList, getHomeList, addComment, getCommentList} from '../util/http'
export default{
  name: 'home',
  data () {
    return {
      input: 24,
      butt: 0,
      isButton: '0',
      button: false,
      articlelist: {},
      sortlist: {},
      comments: {
        forid: '',
        userid: '',
        comment: ''
      },
      commentlist: {}
    }
  },

  methods: {
    seeAll (index) {
      this.$set(this.articlelist[index], 'seeall', !this.articlelist[index].seeall)
    },
    pinglun (index, articleid) {
      console.log(articleid)
      let params = {
        forid: articleid
      }
      getCommentList(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$set(this.articlelist[index], 'comments', !this.articlelist[index].comments)
          this.commentlist = res.data
        } else {

        }
      })
    },
    blur_input () {
      this.isButton = '0'
    },
    fsbutton () {
      this.button = true
      this.input = 20
      this.butt = 4
    },
    leave () {
      this.button = false
      this.input = 24
      this.butt = 0
    },
    // 获取文章列表
    getHomeList () {
      let params = {page: 0, size: 10}
      getHomeList(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.articlelist = res.data.list
          let len = this.articlelist.length
          for (let i = 0; i < len; i++) {
            this.$set(this.articlelist[i], 'seeall', true)
            this.$set(this.articlelist[i], 'comments', false)
          }
        } else {

        }
      })
    },
    // 获取分类列表
    getSortList () {
      let param = {page: 0, size: 10}
      getSortList(param).then(res => {
        if (res.code === 200) {
          this.sortlist = res.data.list
        }
      })
    },
    addComment (articleid) {
      this.comments.forid = articleid
      this.comments.userid = this.$store.state.user.userid
      let params = this.comments

      addComment(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: `评论成功`
          })
        } else {
          this.$message({
            type: 'info',
            message: `评论失败`
          })
        }
      })
      console.log(this.comment)
    }

  },
  created () {
    var date = '20190121101630'
    var n = date.substring(0, 4)
    var y = date.substring(4, 6)
    var r = date.substring(6, 8)
    var s = date.substring(8, 10)
    var f = date.substring(10, 12)
    var m = date.substring(12, 14)
    var result = n + '年' + y + '月' + r + '日' + ' ' + s + ':' + f + ':' + m
    console.log(result)
    this.getHomeList()
    this.getSortList()
  },
  mounted () {

  },
  filters: {
    formatDate: function (value) {
      var date = value
      var n = date.substring(0, 4)
      var y = date.substring(4, 6)
      var r = date.substring(6, 8)
      var s = date.substring(8, 10)
      var f = date.substring(10, 12)
      var m = date.substring(12, 14)
      var result = n + '年' + y + '月' + r + '日' + ' ' + s + ':' + f + ':' + m
      return result
    }
  }
}
</script>

<style scoped>
  #home{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-bottom:150px;
    width: 100%;
    color: black;
    font-size: 16px;
  }

  .centers{
    padding:0 20%;
    margin-top: 20px;
    height: 100%;
    width: 100%;
  }
  .left{
    left: 20%;
    width: 8%;
    background-color: white;
    padding: 0 5px;
    height: auto;
    position:fixed;
  }
  .center-div{
    width:38%;
    float: left;
    padding-left: 8%;
    margin-left: 10px;
  }
  .right{
    margin-left: 10px;
    width: 12%;
    position:fixed;
    right: 20%;
  }
  .right-top{
    height: 60px;
    background-color: white;
    padding-top: 20px;
  }
  .el-icon-circle-plus-outline{
    margin-bottom: 6px;
  }
  .right-center{
    padding-top: 10px;
    margin-top: 5px;
    height: 100%;
    text-align: center;
    line-height:30px;
    background-color: white;
  }
  .biaoti{
    border-radius:30px;
    margin: auto;
    height: 35px;
    line-height: 35px;
    width: 80%;
    background-color: #FA7A1F ;
  }
  .right-bot .hot{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-bottom: #E7E7E7 solid 1px;
  }

  .el-menu-vertical-demo .items{
    border-bottom: 5px beige inset;
  }
  .seemore{
    float: right;
    color: #FA7A1F;
  }
  .tiezi{
    border: bisque solid 1px;
    padding: 10px;
    background-color: white;
    margin-bottom: 20px;
    width: 100%;
  }
  .tiezi   h3{
    float: left;
    overflow: hidden;
  }
  .zuozhe{
    float: left;
    overflow: hidden;
    padding-bottom: 30px;
  }
  .liulan{
    font-size: 14px;
    color: darkgrey;
    padding-left: 5px;
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
  .comment-border{
    padding-bottom: 5px;
    border-bottom: darkgrey solid 1px;
  }
  .comment-input{
    padding-top: 30px;
  }
  .con-art {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
