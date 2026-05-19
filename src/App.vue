<template>
  <div class="common-layout">
      <TopBar />
      <router-view />
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComponentSize } from 'element-plus'
import TopBar from './components/TopBar.vue'

const size = ref<ComponentSize>('default')

const blockMargin = computed(() => {
  const marginMap: Record<string, string> = {
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
.common-layout {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
.el-descriptions {
  margin:20px auto;
  width: 1200px;
}
.common-layout {
  min-height: 100vh;
  width: 100%;
}
.el-footer {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>