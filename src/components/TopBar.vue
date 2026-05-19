<template>
  <div class="top-bar">
    <div class="top-bar-content">
      <div class="left-links">
        <a href="#" class="link-item">JD_SHOP</a>
        <span class="separator">|</span>
        <a href="#" class="link-item">你好，请登录</a>
        <a href="#" class="link-item link-highlight">免费注册</a>
      </div>
      <div class="right-links">
        <a href="#" class="link-item">我的订单</a>
        <a href="#" class="link-item">我的京东</a>
        <a href="#" class="link-item">企业采购</a>
        <a href="#" class="link-item">客户服务</a>
        <a href="#" class="link-item">网站导航</a>
        <a href="#" class="link-item">手机京东</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  background: #e3e4e5;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.top-bar-content {
  width: 1200px;
  margin: 0 auto;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}

.left-links, .right-links {
  display: flex;
  align-items: center;
}

.link-item {
  color: #999;
  text-decoration: none;
  margin: 0 8px;
}

.link-item:hover {
  color: #e1251b;
}

.link-highlight {
  color: #e1251b;
}

.separator {
  color: #ccc;
}
</style>
