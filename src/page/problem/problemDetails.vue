<template>
  <div id="problemDetails">
    <div class="center">
      <div class="left">
        <div class="left-top">
          <el-row class="biaoti">
            <h3>{{problem.title}}</h3>
          </el-row>
          <el-row>
            <el-col><p v-html="problem.content"></p></el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-button>程序语言</el-button>
            </el-col>
          </el-row>
          <el-row class="font">
            <a >匿名用户于2019年1月13日11:30:13提问</a>
          </el-row>
          <el-row class="bott">
            <el-button type="primary">关注问题</el-button>
            <el-button type="primary" plain @click="editors"><i class="el-icon-edit-outline"></i> 写回答</el-button>
            <el-button plain><i class="el-icon-circle-plus-outline"></i>&nbsp;邀请问答</el-button>
            <a class="a">5评论</a>
            <a class="a">555浏览</a>
            <a class="a" href="#">{{problem.followcount}}关注</a>
            <a class="a">分享</a>
            <a class="a">举报</a>
          </el-row>
        </div>
        <div  v-show="editorShow"  class="edit">
        <div id="editor" style="text-align: left">
        </div>
          <el-row><el-button type="primary" style="float: right;" @click="addReply">提交回答</el-button></el-row>
        </div>
        <div class="left-center">
         <a>查看全部111个回答</a>
        </div>
        <div class="paixu">
          <el-row class="top">
            <a>111个回答</a>
            <a class="f-right">默认排序</a>
          </el-row>
        </div>
        <div>
          <div class="answer" v-for="(repl,index) in replyList">
            <el-row class="answer-top">
              <el-col :span="5" class="touxiang">
               <img src="@/image/img.jpg"/>
              </el-col>
              <el-col :span="19">
                <a>说</a><br/>
                <a style="font-size: 14px; color: darkgrey">知我者谓我心忧，不知我者谓我何求</a>
              </el-col>
            </el-row>
            <el-row class="content">
              <el-col :span="24">
              <div v-html="repl.content">
              </div>
              </el-col>
            </el-row>
            <el-row class="answer-bottom">
              <a>点赞</a>
              <a @click="pinglun(index,repl.replyid)"> {{repl.comments? '收起评论':'评论'}}</a>
              <a>分享</a>
              <a>收藏</a>
            </el-row>
            <div v-show="repl.comments" class="comment-div">
              <el-row class="comment">
                <el-col :span="2"><a>评论</a></el-col>
              </el-row>
              <div class="comment-border" v-for="(comment,index) in commentlist">
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
                <div style="clear:both"></div>

              </div>
              <div class="comment-input">
                <el-row>
                  <el-col :span="input">
                    <el-input  class="el_input1" v-model="comments.comment"  placeholder="请输入内容" @focus="fsbutton"></el-input>
                  </el-col>
                  <el-col :span="butt" style="padding-left: 20px">
                    <el-button type="primary" v-if="button"  @click="addComment(repl.replyid)" >提交</el-button>
                  </el-col>
                </el-row>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-new">
          <el-row>
            <div class="biaoti">
              <a>相关问题</a>
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
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
import {addReply, getReplyList, addComment, getCommentList} from '../../util/http'

export default {
  name: 'problemDetails',
  data () {
    return {
      button: false,
      input: 24,
      butt: 0,
      problem: {},
      editorShow: false,
      reply: {
        userid: '',
        problemid: '',
        contnet: '',
        incognito: ''
      },
      comments: {
        forid: '',
        userid: '',
        comment: ''
      },
      replyList: {},
      commentlist: {}
    }
  },
  methods: {
    pinglun (index, replyid) {
      let params = {
        forid: replyid
      }
      // 获取评论
      getCommentList(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.replyList[index].comments=!this.replyList[index].comments
          this.commentlist = res.data
        } else {

        }
      })
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
    // 显示回答问题输入框
    editors () {
      this.editorShow = !this.editorShow
    },
    // 添加回答
    addReply () {
      this.reply.userid = this.$store.state.user.userid
      this.reply.problemid = this.problem.problemid
      let params = this.reply
      addReply(params).then(res => {
        console.log(res)
        if (res.code === 200) {}
      })
    },
    getReplyList () {
      let params = {
        problemid: this.problem.problemid
      }
      getReplyList(params).then(res => {
        if (res.code === 200) {
          this.replyList = res.data
          let len = this.replyList.length
          for (let i = 0; i < len; i++) {
            this.$set(this.replyList[i], 'comments', false)
          }
        } else {
          console.log(res.message)
        }
      })
    },
    // 添加评论
    addComment (forid) {
      if (this.comments.comment === '') {
        this.$message({
          type: 'info',
          message: `评论内容不能为空`
        })
      } else {
        this.comments.forid = forid
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
      }
    }
  },
  created () {
    this.problem = this.$route.query.problem
    this.getReplyList()
  },
  mounted () {
    this.editor = new Editor('#editor')
    // this.editor.customConfig.uploadImgServer = '/upload'
    this.editor.customConfig.onchange = (html) => {
      this.reply.content = html
    }
    this.editor.create()
  }
}
</script>

<style scoped>
  #problemDetails {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 16px;
    overflow-y: auto;
    margin-bottom: 100px;
    padding:0 20%;
  }
  .edit{
   background-color: white;
    margin: 10px 0;
  }
  .edit button{
    margin-top: 5px;
  }
  .center {
    margin-top: 20px;
    height: auto;
    width: 100%;
  }

  .left {
    float: left;
    width: 75%;
    height: auto;
  }

  .left-top {
    background-color: white;
    text-align: left;
    margin-top: 10px;
    padding-left: 20px;
  }

  .left-top .biaoti {
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }

  .left-top p {
    font-size: 16px;
    padding-left: 3px;
    color: black;
  }
  .left-top .font{
    font-size: 14px;
    color: darkgrey;
    padding-top: 5px;
    padding-bottom: 10px;
  }
  .left-top .bott{
    padding-bottom: 10px;
  }
  .left-top .bott a{
    padding-left: 20px;
  }
  .left-center{
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    background-color: white;
  }
  .paixu{
    margin-top: 10px;
    background-color: white;
    text-align: left;
    margin-bottom: 10px;
  }
  .paixu a{
    padding-left: 10px;
    font-weight: bold;
  }
  .paixu .f-right{
    font-weight: normal;
    float: right;
    padding-right: 20px;
  }
  .paixu .top{
    height: 40px;
    line-height: 40px;
    padding-bottom: 20px;
  }
  .answer{
    background-color: white;
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;
    margin-bottom: 10px;
  }
  .answer .answer-top .touxiang{
    width: 30px;
    height: 50px;
    line-height: 50px;
  }
  .answer-bottom{
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: darkgrey solid 1px;
  }
  .answer-bottom a{
    padding-right: 20px;
    font-size: 16px;
    cursor:pointer
  }

  .comment-div{
    overflow: hidden;
    padding-top: 20px;
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

  .right{
    float: left;
    width: 20%;
    margin-top: 10px;
    height: auto;
    margin-left: 10px;
  }

  .right-bottom-col a{
    font-weight:bold;
  }
  .right-new{
    height: 300px;
    padding-top:10px;
    margin-top: 10px;
    background-color: white;
  }
  .right-new-col{
    height: 30px;
    line-height: 30px;
  }
  .right-new .biaoti{
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
