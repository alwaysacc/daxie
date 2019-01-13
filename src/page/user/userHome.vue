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
            <el-tab-pane label="文章">
              <div class="wenzhang">
                他的文章 <a>
                <el-dropdown>
  <span class="el-dropdown-link">
    排序方式<i class="el-icon-sort"></i>
  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>按时间</el-dropdown-item>
                    <el-dropdown-item>按点赞</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </a>
              </div>
              <div class="tiezi">
                <el-row>
                  <router-link to="/articleDetails">
                    <el-col> <h3>如果烟抽了对身体好，那世界会变成怎么样？</h3></el-col></router-link>
                </el-row>
                <div class="zuozhe">
                  <el-row>
                    <el-col><img src="@/image/img.jpg"/> 说。</el-col>
                  </el-row>
                  <el-row class="liulan">
                    <el-col>1111人浏览</el-col>
                  </el-row>
                </div>
                <el-row>
                  <el-col  :span="24">
              <span :class="{'con-art':seeall}">
                <div  v-html="content">
                </div>
              </span>
                  </el-col>

                  <div @click='seeAll' style="float: right"><a style="color:#FA7A1F ">{{seeall?'查看全文':'收起'}}</a></div>
                </el-row>
                <el-row class="content-pl">
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
                      <el-col :span="butt">
                        <el-button type="primary" v-if="button">提交</el-button>
                      </el-col>
                    </el-row>
                  </div>

                </div>
              </div>
            </el-tab-pane>
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
  data(){
      return{
        input: 24,
        butt: 0,
        isButton: '0',
        isZuozhe: false,
        content : '<p>场景一：一个四五岁的小孩满院子跑，后面追着一位母亲，手里夹着根点着的香烟，“宝宝，再抽一口，听话，最后一口……”</p><p><br></p><p>场景二：别的孩子课间都在教室里吞云吐雾，家庭情况困难的小明由于抽不起烟，只能等他们抽完后，偷偷过去吸几口空气里残留的二手烟。放学后，善良的班主任刘老师把小明叫到办公室，从抽屉里摸出两根玉溪递给他，小明低着头，眼泪啪嗒啪嗒掉在地上。</p><p><br></p><p>场景三：火车站，即将去陌生城市上大学的小军跟父亲告别，老人布满老茧的手从兜里翻出一个油纸包，“这是你妈连夜给你卷的旱烟，带着路上抽。”</p>',
        seeall: true,
        show: false,
        pl: true,
        button: false
      }
  },
  methods:{
    seeAll () {
      this.seeall = !this.seeall
      this.isZuozhe=!this.isZuozhe
    },
    pinglun () {
      this.show = !this.show
      this.pl = !pl
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
    }
  },
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
  .tiezi{
    border: bisque solid 1px;
    padding: 10px;
    background-color: white;
    margin-bottom: 20px;
  }
  .tiezi   h3{
    float: left;
    overflow: hidden;
  }
  .zuozhe{
    float: left;
    overflow: hidden;
    padding-bottom: 10px;
  }
  .liulan{
    font-size: 14px;
    color: darkgrey;
    padding-left: 5px;
  }
  ::-webkit-scrollbar{
    width:0;
  }
  .content-pl a{
    padding-right: 20px;
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
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .wenzhang{
    height: 40px;
    line-height: 40px;
  }
  .wenzhang a{
    float: right;
  }
</style>
