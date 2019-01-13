<template>
  <div id="home">
  <y-header></y-header>
    <div class="centers">

      <div class="left">

        <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1" class="items">
            <template slot="title">
              <span>Java</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2" class="items">
            <span slot="title" >PHP</span>
          </el-menu-item>
          <el-menu-item index="3" class="items">
            <span slot="title">MySQL</span>
          </el-menu-item>
          <el-menu-item index="4" class="items">
            <span slot="title">前端</span>
          </el-menu-item>
          <el-menu-item index="5" >
            <span slot="title">前端</span>
          </el-menu-item>
        </el-menu>

      </div>

      <div class="center-div">
        <div class="tiezi">
          <el-row>
            <router-link to="/articleDetails">
            <el-col> <h3>如果烟抽了对身体好，那世界会变成怎么样？</h3></el-col></router-link>
          </el-row>
          <div class="zuozhe" v-if="isZuozhe">
            <el-row>
              <el-col><img src="../image/img.jpg"/> 说。</el-col>
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
          <el-row>
            <el-col :span="6"><a href="#">点赞</a></el-col>
            <el-col :span="6" ><a v-if="pl" @click="pinglun">55评论</a> <a v-if="!pl" @click="pinglun">收起评论</a></el-col>
            <el-col :span="6"><a href="#">分享</a> </el-col>
            <el-col :span="6"><a href="#">收藏</a> </el-col>
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
        <div class="tiezi">
          <el-row>
            <router-link to="/articleDetails">
              <el-col> <h3>如果烟抽了对身体好，那世界会变成怎么样？</h3></el-col></router-link>
          </el-row>
          <div class="zuozhe" v-if="isZuozhe">
            <el-row>
              <el-col><img src="../image/img.jpg"/> 说。</el-col>
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
          <el-row>
            <el-col :span="6"><a href="#">点赞</a></el-col>
            <el-col :span="6" ><a v-if="pl" @click="pinglun">55评论</a> <a v-if="!pl" @click="pinglun">收起评论</a></el-col>
            <el-col :span="6"><a href="#">分享</a> </el-col>
            <el-col :span="6"><a href="#">收藏</a> </el-col>
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
<y-footer></y-footer>
    <totop></totop>
  </div>

</template>

<script>
/* eslint-disable no-undef */

import YHeader from '../components/head'
import YFooter from '../components/footer'
import Totop from '../components/toTop'
export default{
  name: 'home',
  data () {
    return {
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

  methods: {
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
    YFooter,
    Totop
  }
}
</script>

<style scoped>
  #home{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
  }
  .center-div {
    display: flex;
    flex-wrap: wrap;
    width: 98%;
  }
  .con-art {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .centers{
    padding-left: 20%;
    padding-right: 20%;
    margin-top: 10px;
    overflow:hidden;
  }
  .left{
    width: 13%;
    float: left;
    background-color: white;
    padding: 0 5px;
  }
  .center-div{
    width:62%;
    float: left;
    height: auto;
    margin-left: 10px;
    padding: 0 10px;
    overflow:hidden;
  }
  .right{
    float: left;
    margin-left: 10px;
    width: 20%;
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

  .items{
    background-color: #FA7A1F;
    margin-bottom: 5px;
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
  ::-webkit-scrollbar{
    width:0;
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
</style>
