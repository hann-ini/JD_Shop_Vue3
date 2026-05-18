<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        src="/static/image/logo.jpg"
        class="logo"
        alt="Element Plus Logo"
      />
    </el-menu-item>
    <el-menu-item index="1">登入</el-menu-item>
    <el-sub-menu index="2">
      <template #title>我的京东</template>
        <el-menu-item index="2-1">待处理订单</el-menu-item>
        <el-menu-item index="2-2">我的关注</el-menu-item>
        <el-menu-item index="2-3">返修退换货</el-menu-item>
        <el-menu-item index="2-4">我的评价</el-menu-item>
        <el-menu-item index="2-5">我的问答</el-menu-item>
        <el-menu-item index="2-6">我的资产</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>企业采购</template>
      <el-menu-item index="3-1">采购管理</el-menu-item>
      <el-menu-item index="3-2">供应商管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>客户服务</template>
      <el-menu-item index="4-1">帮助中心</el-menu-item>
      <el-menu-item index="4-2">在线客服</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>网站导航</template>
      <el-menu-item index="5-1">网站地图</el-menu-item>
      <el-menu-item index="5-2">RSS订阅</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="6">手机京东</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.logo {
  height: 60px;
}
</style>