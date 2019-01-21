<template>
    <div id="addProblem">
      <div class="center">
        <el-row>
          <h3>提问</h3>
        </el-row>
        <el-input v-model="problem.title" placeholder="请输入标题"></el-input>
        <div id="editor"></div>
        <el-row class="line">
          选择分类：<el-select v-model="problem.sortid" placeholder="请选择">
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
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
          </el-col>
        </el-row>
        <el-row  class="btn">
          <el-button type="primary" @click="addProblem">提交</el-button>
        </el-row>
      </div>
    </div>
</template>

<script>
import {getSortList, addProblem} from '../../util/http'
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
export default {
  name: 'addProblem',
  data () {
    return {
      problem: {
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
    addProblem () {
      if (this.problem.incognito === true) {
        this.problem.incognito = 1
      } else {
        this.problem.incognito = 0
      }
      this.problem.userid = this.$store.state.user.userid
      let params = this.problem
      console.log(params)
      addProblem(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$message({
            message: '发布成功',
            type: 'success'
          })
        } else {
          console.log('提问失败')
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
    this.getSortList()
    this.editor = new Editor('#editor')
    this.editor.customConfig.uploadImgServer = '/upload'
    this.editor.customConfig.onchange = (html) => {
      this.problem.content = html
    }
    this.editor.create()
  }
}
</script>

<style scoped>
  #addProblem{
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
