<template>
  <div id="app">
    <el-row >

    <el-col>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#FA7A1F"
          text-color="#000"
          active-text-color="#FF0000">
          <el-menu-item index="1">logo</el-menu-item>
          <el-menu-item index="2">首页</el-menu-item>
          <el-menu-item index="3">问答</el-menu-item>

          <el-row type="flex" align="middle" class="login">
            <el-col>
            <el-autocomplete class="scarh"
                             v-model="state4"
                             :fetch-suggestions="querySearchAsync"
                             placeholder="搜索"
                             @select="handleSelect"
            ></el-autocomplete>
            </el-col>
            <el-col  :span="2">
              <el-menu-item index="4" class="login"><img src="./image/notice.png"/></el-menu-item></el-col>
            <el-col  :span="2">
            <el-menu-item index="4" class="login">登录</el-menu-item></el-col>
            <el-col :span="2">
            <el-menu-item index="5" class="login">注册</el-menu-item>
            </el-col>
          </el-row>
        </el-menu>
    </el-col>
    </el-row>
    <div class="centers">

<div class="left">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <template slot="title">
              <span>Java</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">PHP</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">MySQL</span>
          </el-menu-item>
          <el-menu-item index="4">
          <span slot="title">前端</span>
        </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">前端</span>
          </el-menu-item>
        </el-menu>
</div>

<div class="center-div">
  <h3>2018年总结以及2019年计划</h3>
  <el-row>
    <el-col  :span="24">
      <span :class="{'con-art':seeall}">{{content}}</span>
    </el-col>
    <span @click='seeAll'>{{seeall?'查看全文':'收起'}}</span>
    <el-row>
      <el-col :span="5"><a href="#">点赞</a></el-col>
      <el-col :span="5" ><a v-if="pl" @click="pinglun">55评论</a> <a v-if="!pl" @click="pinglun">收起评论</a></el-col>
      <el-col :span="5"><a href="#">分享</a> </el-col>
      <el-col :span="5"><a href="#">收藏</a> </el-col>
    </el-row>
  </el-row>
<!--
  <div v-if="show">
    <el-row>
      <el-col :span="4">55条评论</el-col>
      <el-col :span="4" style="float: right">切换排序</el-col>

    </el-row>
    <div>
      <el-row>
        <el-col :span="4"><imag></imag>昵称</el-col>
        <el-col :span="4" style="float: right">时间</el-col>
      </el-row>
      <el-row>
        <el-col :span="4" style="float:left">评论内容<br/>点赞</el-col>
      </el-row>
    </div>
  </div>
  -->
</div>

<div class="right">
  <el-row>
    <el-col :span="8"><i class="el-icon-circle-plus-outline"/><br/>发帖 </el-col>
    <el-col :span="8"><i class="el-icon-circle-plus-outline"/><br/>发帖 </el-col>
    <el-col :span="8"><i class="el-icon-circle-plus-outline"/><br/>发帖 </el-col>
  </el-row>
</div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      content: '      2018总结\n' +
        '      1.工作篇\n' +
        '      2018是一个多窜的年份，为期一年多的努力，顺利的进入心目中的大厂，但是大厂的活计并没有想象中的那么如意，在大厂里始终是个螺丝钉，冒尖的可能性似乎需要年限来堆，期间又始终充满着期盼和失望\n' +
        '      就我这一年学了一些基本的东西 非科班的我 将基础又重新拾掇了一遍花了我半年的时间，其他的时间将 前端，Java后台，C++的基础学了个大概能上手一些简单的东西（笑），并没有打算往全栈发展，还是想将整个脉络打通，真正核心的领域还是在Android移动端。\n' +
        '\n' +
        '      2.生活篇\n' +
        '      这一年感觉到 “人活着真好”，生过一场病的人才懂得生命的可贵，在医院为期不间断的来回跑，现在我心里面对医院充满了排斥，人一胖什么病都跟着来了，这一年的瘦身计划楞是夭折在多次尝试后的反复折腾上，在学习上能坚持下来的唯独在减肥上屡尝屡败，我也是服了自己，希望今年能有所突破\n' +
        '\n' +
        '      3.娱乐篇\n' +
        '      16年和17年的时候还专门跑到各处去玩，18年楞是没时间，醉了\n' +
        '\n' +
        '      2019年计划\n' +
        '      1.工作篇\n' +
        '      Android篇：\n' +
        '      android打算往系统层深入，Android内核分析和Android深入理解系列，Android音视频方向是明年计划的重点，对于这方面的知识是学习的重点\n' +
        '      Java篇：\n' +
        '      Jdk源码系列完善下去，Java编程思想和Java并发，网络基础知识这些虽然看过了，但是还有很多需要完善\n' +
        '\n' +
        '      投资篇\n' +
        '      投资理论\n' +
        '      床头的书籍该好好系统学习了\n' +
        '      该有理财 投资的概念\n' +
        '\n' +
        '      2.生活篇\n' +
        '      健身：\n' +
        '      实在坚持不下去那就报健身班，身体是革命的本钱，需要好好努力\n' +
        '      原型:167的个 164的体重\n' +
        '      目标:167的个 130的体重 理想身材\n' +
        '\n' +
        '      娱乐篇：\n' +
        '      起码要去2-3个景点',
      seeall: true,
      show: false,
      pl: true,

    }
  },
  methods: {
    seeAll() {
      this.seeall = !this.seeall
    },
    pinglun() {
      this.show = !this.show
      this.pl = !pl
    }
  }

}

</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  width: 100%;
  height: 100%;
  background-color: #F6F6F6;
  position: fixed;
}
.el-menu-demo{
  padding-left: 20%;
}
.login{
  padding-right: 20%;
}
.login img{
  height:100%;
  width: 100%;
}

.con-art {
  height: 80px;
  overflow: hidden;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.centers{
  padding-left: 20%;
  padding-right: 20%;
  height: 100%;
  margin-top: 10px;
}
.left{
  width: 10%;float: left;
  height: 100%;
  background-color: white;
  padding: 0 5px;
}
.center-div{
  width:70%;height: auto;float: left;
  background-color: white;
  margin-left: 10px;
  padding: 0 10px;
}
  .right{

    width:10%;float:right;
    margin-top: 20px;
  }
</style>
