<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <TopNav />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <el-descriptions
    title="页面信息"
    :column="4"
    :size="size"
    direction="vertical"
    :style="blockMargin"
  >
    <el-descriptions-item label="作者">吴志涵</el-descriptions-item>
    <el-descriptions-item label="eMail">wzh200537@iCloud.com</el-descriptions-item>
    <el-descriptions-item label="岗位" :span="2">Java全栈/.偏后端</el-descriptions-item>
    <el-descriptions-item label="求职状态">
      <el-tag size="small">未入职</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="期望求职地址">
      上海、杭州、苏州、南京、深圳、厦门
    </el-descriptions-item>
  </el-descriptions>
      </el-footer>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComponentSize } from 'element-plus'

import TopNav from './views/headerView.vue'

const size = ref<ComponentSize>('default')

const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style>
.el-descriptions {
  margin-top: 20px;
}
.common-layout {
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
}
</style>