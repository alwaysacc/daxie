<template>
  <div id="addArticle">
    <div class="center">
      <el-row>
        <h3>发帖</h3>
      </el-row>
      <el-input v-model="article.title" placeholder="请输入标题"></el-input>
      <div id="editor"></div>
      <el-row class="line">
        选择分类：<el-select v-model="article.sortid" placeholder="请选择">
        <el-option
          v-for="item in sort"
          :key="item.sortid"
          :label="item.sortname"
          :value="item.sortid">
        </el-option>
      </el-select>
      </el-row>
      <el-row  class="line">
        <el-col>
          是否匿名：<el-switch
          v-model="article.incognito"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        </el-col>
      </el-row>
      <el-row  class="btn">
        <el-button type="primary" @click="addArticle">提交</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
import {addArticle, getSortList} from '../../util/http'
export default {
  name: 'addArticle',
  data () {
    return {
      article: {
        title: '',
        content: '',
        incognito: '',
        sortid: '',
        userid: ''
      },
      sort: {},
      value: '',
      value2: ''
    }
  },
  methods: {
    addArticle () {
      if (this.article.incognito === true) {
        this.article.incognito = 1
      } else {
        this.article.incognito = 0
      }
      this.article.userid = this.$store.state.user.userid
      let params = this.article
      console.log(params)
      addArticle(params).then(res => {
        if (res.code === 200) {
          this.$message({
            message: '发布成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: res.message,
            type: 'info'
          })
        }
      })
    },
    getSortList () {
      let params
      getSortList(params).then(res => {
        if (res.code === 200) {
          this.sort = res.data.list
        } else {
          console.log('获取分类失败')
        }
      })
    }
  },
  mounted () {
    this.editor = new Editor('#editor')
    // this.editor.customConfig.uploadImgServer = '/upload'
    this.editor.customConfig.onchange = (html) => {
      this.article.content = html
    }
    this.editor.create()
    this.getSortList()
  }
}
</script>

<style scoped>
  #addArticle{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    font-size: 16px;
  }
  .center{
    margin-top: 20px;
    margin: 20px 20% 0 20%;
    background-color: white;
    text-align: left;
    padding: 0 20px;
  }
  #editor{
    padding-top: 10px;
  }
  .line{
    padding-top: 20px;
  }
  .btn{
    text-align: center;
    padding-top: 30px;
  }
</style>
