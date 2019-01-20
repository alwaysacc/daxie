<template>
  <div id="articleDetails">
    <div class="center">
      <div class="left">
        <el-row>
          <el-col><h3>如果烟抽了对身体好，那世界会变成怎么样？</h3></el-col>
        </el-row>
        <el-row>
          <el-col :span="6">2019年1月12日17:18:11</el-col>
          <el-col :span="6">阅读数：6666</el-col>
          <el-col :span="3">收藏</el-col>
        </el-row>
        <div class="ariicle" v-html="wenzhang">
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
        <div class="comment-div">
          <el-row class="comment">
            <el-col :span="2"><a>评论</a></el-col>
          </el-row>
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
        <div class="comment-div">
          <el-row class="comment">
            <el-col :span="2"><a>评论</a></el-col>
          </el-row>
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
        <div class="comment-div">
          <el-row class="comment">
            <el-col :span="2"><a>评论</a></el-col>
          </el-row>
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
        <div class="comment-div">
          <el-row class="comment">
            <el-col :span="2"><a>评论</a></el-col>
          </el-row>
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
      </div>
      <div class="right">
        <div class="right-top">
        <el-row >
          <el-col :span="4"><img src="@/image/img.jpg"/></el-col>
          <el-col :span="8"><a>哈哈哈哈哈</a></el-col>
          <a class="btn2">
          <el-button type="primary"  size="mini" round>关注</el-button></a>
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
export default {
  name: 'articleDetails',
  data () {
    return {
      wenzhang: '<p>场景一：一个四五岁的小孩满院子跑，后面追着一位母亲，手里夹着根点着的香烟，“宝宝，再抽一口，听话，最后一口……”</p><p><br/></p><p>场景二：别的孩子课间都在教室里吞云吐雾，家庭情况困难的小明由于抽不起烟，只能等他们抽完后，偷偷过去吸几口空气里残留的二手烟。放学后，善良的班主任刘老师把小明叫到办公室，从抽屉里摸出两根玉溪递给他，小明低着头，眼泪啪嗒啪嗒掉在地上。</p><p><br></p><p>场景三：火车站，即将去陌生城市上大学的小军跟父亲告别，老人布满老茧的手从兜里翻出一个油纸包，“这是你妈连夜给你卷的旱烟，带着路上抽。”</p>',
      btn: false
    }
  },
  methods: {
    fsbutton () {
      this.btn = true
    },
    leave () {
      this.btn = false
    }
  },
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
  .center{
    padding:0 20%;
    margin-top: 20px;
    height: 100%;
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
