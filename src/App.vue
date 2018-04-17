<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="height:100%,background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['2']" router>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>广告管理</template>
        <el-menu-item index="/advertising">广告计划</el-menu-item>
        <el-menu-item index="/data">广告单元</el-menu-item>
        <el-menu-item index="/toolkit">广告创意</el-menu-item>
      </el-submenu>
        <el-menu-item index="/home">数据中心</el-menu-item>
        <el-menu-item index="/home">工具箱</el-menu-item>
    </el-menu>
  </el-aside>
  <el-container> 
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
}
</script>

<style scoped>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #eee;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: 85px;
  line-height: 85px;
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  height: 100%;
  background: #022050;
  color: #333;
}
</style>
