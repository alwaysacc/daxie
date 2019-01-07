<template>
<div>
  <el-row>
    <el-col class="center" :span="24"> <p>2018年总结以及2019年计划</p></el-col>
  </el-row>
  <el-row>
    <el-col class="center" :span="24">
      2018总结
      1.工作篇
      2018是一个多窜的年份，为期一年多的努力，顺利的进入心目中的大厂，但是大厂的活计并没有想象中的那么如意，在大厂里始终是个螺丝钉，冒尖的可能性似乎需要年限来堆，期间又始终充满着期盼和失望
      就我这一年学了一些基本的东西 非科班的我 将基础又重新拾掇了一遍花了我半年的时间，其他的时间将 前端，Java后台，C++的基础学了个大概能上手一些简单的东西（笑），并没有打算往全栈发展，还是想将整个脉络打通，真正核心的领域还是在Android移动端。

      2.生活篇
      这一年感觉到 “人活着真好”，生过一场病的人才懂得生命的可贵，在医院为期不间断的来回跑，现在我心里面对医院充满了排斥，人一胖什么病都跟着来了，这一年的瘦身计划楞是夭折在多次尝试后的反复折腾上，在学习上能坚持下来的唯独在减肥上屡尝屡败，我也是服了自己，希望今年能有所突破

      3.娱乐篇
      16年和17年的时候还专门跑到各处去玩，18年楞是没时间，醉了

      2019年计划
      1.工作篇
      Android篇：
      android打算往系统层深入，Android内核分析和Android深入理解系列，Android音视频方向是明年计划的重点，对于这方面的知识是学习的重点
      Java篇：
      Jdk源码系列完善下去，Java编程思想和Java并发，网络基础知识这些虽然看过了，但是还有很多需要完善

      投资篇
      投资理论
      床头的书籍该好好系统学习了
      该有理财 投资的概念

      2.生活篇
      健身：
      实在坚持不下去那就报健身班，身体是革命的本钱，需要好好努力
      原型:167的个 164的体重
      目标:167的个 130的体重 理想身材

      娱乐篇：
      起码要去2-3个景点
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><a href="#">点赞</a></el-col>
    <el-col :span="6"><a href="#">评论</a> </el-col>
    <el-col :span="6"><a href="#">分享</a> </el-col>
    <el-col :span="6"><a href="#">收藏</a> </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'notice'
}
</script>

<style scoped>

  .center {
    overflow: hidden;
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
