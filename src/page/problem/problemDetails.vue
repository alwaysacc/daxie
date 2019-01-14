<template>
  <div id="problemDetails">
    <div class="center">
      <div class="left">
        <div class="left-top">
          <el-row class="biaoti">
            <h2>为什么语言里要提供“反射”功能？</h2>
          </el-row>
          <el-row>
            <el-col><p>为什么需要反射，这不是破坏了封装吗?</p></el-col>
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
            <el-button type="primary" plain><i class="el-icon-edit-outline"></i> 写回答</el-button>
            <el-button plain><i class="el-icon-circle-plus-outline"></i>&nbsp;邀请问答</el-button>
            <a class="a">评论5</a>
            <a class="a">浏览555</a>
            <a class="a">关注111</a>
            <a class="a">分享</a>
            <a class="a">举报</a>
          </el-row>
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
          <div class="answer">
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
              <div v-html="answer">
              </div>
              </el-col>
            </el-row>
            <div style="clear:both"></div>
            <el-row class="answer-bottom">
              <a>点赞</a>
              <a @click="pinglun">评论</a>
              <a>分享</a>
              <a>收藏</a>
            </el-row>
            <div v-if="show" class="comment-div">
              <el-row class="comment">
                <el-col :span="2"><a>评论</a></el-col>
              </el-row>

              <div class="comment-border">
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
                        <a>牛逼牛逼牛逼牛逼</a>
                      </el-col>
                    </el-row>
                    <el-row class="a sjdiv">
                      <a>2019年1月12日18:08:50</a>
                      <a class="dianzan">回复</a>
                      <a class="dianzan">点赞</a>
                    </el-row>
                  </div>

                </div>
                <div style="clear:both"></div>

              </div>
              <div class="comment-border">
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
                        <a>牛逼牛逼牛逼牛逼</a>
                      </el-col>
                    </el-row>
                    <el-row class="a sjdiv">
                      <a>2019年1月12日18:08:50</a>
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
                    <el-input  class="el_input1"  placeholder="请输入内容" @focus="fsbutton" @blur="leave"></el-input>
                  </el-col>
                  <el-col :span="butt" style="padding-left: 20px">
                    <el-button type="primary" v-if="button">提交</el-button>
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
export default {
  name: 'problemDetails',
  data () {
    return {
      answer: '<p>就举个例子好了：你要做一个属性编辑器，可以通过UI编辑一个对象的某些成员的值，而且你想支持很多类型的对象。如果没有反射，你要么只能hard code, 要么让这些对象人肉实现反射接口: virtual void SetParameter(String parameterName, String parameterValue); 这是一件多么烦人的事情。</p><p>再比如说自动序列化。给一个对象，把他保存成文件。没有反射你只能为每个对象手工写load和store函数。有了反射之后你可以一口气写一个Serialize&lt;T&gt;(T obj)然后遍历每个成员，看看有没有被标记为[序列化], 然后递归地去序列化该成员即可，多么方便。</p>一个有反射的语言通过同一份代码就可以解决所有上述问题。<span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>就举个例子好了：你要做一个属性编辑器，可以通过UI编辑一个对象的某些成员的值，而且你想支持很多类型的对象。如果没有反射，你要么只能hard code, 要么让这些对象人肉实现反射接口: virtual void SetParameter(String parameterName, String parameterValue); 这是一件多么烦人的事情。</p><p>再比如说自动序列化。给一个对象，把他保存成文件。没有反射你只能为每个对象手工写load和store函数。有了反射之后你可以一口气写一个Serialize&lt;T&gt;(T obj)然后遍历每个成员，看看有没有被标记为[序列化], 然后递归地去序列化该成员即可，多么方便。</p>一个有反射的语言通过同一份代码就可以解决所有上述问题。</span>',
      show: true,
      button: false,
      input: 24,
      butt: 0
    }
  },
  methods: {
    pinglun () {
      this.show = !this.show
      this.pl = !pl
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
    }
  },
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
  }

  .center {
    padding: 0 20%;
  }

  .left {
    float: left;
    width: 75%;
    height: auto;
  }

  .left-top {
    background-color: white;
    text-align: left;
    margin-top: 20px;
    padding-left: 20px;
  }

  .left-top .biaoti {
    height: 40px;
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
    border-bottom: 1px darkgrey solid;
    padding-bottom: 20px;
  }
  .answer{
    background-color: white;
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;
  }
  .answer .answer-top .touxiang{
    width: 30px;
    height: 50px;
    line-height: 50px;
  }
  .answer-bottom{
    padding-top: 20px;
    margin-top: 20px;
    border-top: darkgrey solid 1px;
  }
  .answer-bottom a{
    padding-right: 20px;
    font-size: 20px;
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
