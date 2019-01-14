<template>
    <div id="addProblem">
      <div class="center">
        <el-row>
          <h3>提问</h3>
        </el-row>
        <el-input v-model="input" placeholder="请输入标题"></el-input>
        <div id="editor"></div>
        <el-row class="line">
          选择分类：<el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
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
          <el-button type="primary" @click="add">提交</el-button>
        </el-row>
      </div>
    </div>
</template>

<script>
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
export default {
  name: 'addProblem',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value2: ''
    }
  },
  methods: {
    add () {
      this.$message({
        message: '发布成功',
        type: 'success'
      })
    }
  },
  mounted () {
    this.editor = new Editor('#editor')
    this.editor.customConfig.uploadImgServer = '/upload'

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
