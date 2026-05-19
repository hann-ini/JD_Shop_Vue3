<template>
  <div class="jd-home">
    <div class="header">
      <div class="header-content">
        <div class="logo">
          <img src="/static/image/logo.jpg" alt="京东" />
        </div>
        <div class="search-box">
          <el-input
            v-model="searchKeyword"
            class="search-input"
            placeholder="搜索商品"
            size="large"
          >
            <template #append>
              <el-button type="primary" class="search-btn">搜索</el-button>
            </template>
          </el-input>
          <div class="hot-words">
            <a href="#" class="word" v-for="word in hotWords" :key="word">{{ word }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-main">
      <div class="nav-content">
        <div class="category-menu">
          <div class="category-title">全部商品分类</div>
          <div class="category-list">
            <div class="category-item" v-for="cat in categories" :key="cat.name">
              <span class="cat-name">{{ cat.name }}</span>
            </div>
          </div>
        </div>
        <div class="banner-area">
          <div class="carousel">
            <div class="carousel-item active">
              <img :src="banners[currentBanner]" alt="banner" />
            </div>
            <div class="carousel-btn carousel-prev" @click="prevBanner">
              <span>&lt;</span>
            </div>
            <div class="carousel-btn carousel-next" @click="nextBanner">
              <span>&gt;</span>
            </div>
            <div class="carousel-dots">
              <span 
                v-for="(_item, index) in banners" 
                :key="index"
                :class="{ active: currentBanner === index }"
                @click="currentBanner = index"
              ></span>
            </div>
          </div>
        </div>
        <div class="right-area">
          <div 
            class="right-img-item" 
            v-for="(img, index) in rightImages" 
            :key="index"
          >
            <img :src="img" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="goods-section">
      <div class="section-title">
        <h3>京东热卖</h3>
        <p>又好又便宜</p>
      </div>
      <div class="goods-list">
        <div class="goods-item" v-for="goods in goodsList" :key="goods.id">
          <div class="goods-img">
            <img :src="goods.image" alt="" />
          </div>
          <div class="goods-name">{{ goods.name }}</div>
          <div class="goods-tags">
            <el-tag size="small" type="danger" v-if="goods.tags.hot">热卖</el-tag>
            <el-tag size="small" v-if="goods.tags.new">新品</el-tag>
          </div>
          <div class="goods-price">
            <span class="price-symbol">¥</span>
            <span class="price-num">{{ goods.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const searchKeyword = ref('')
const currentBanner = ref(0)

const hotWords = [
  '抽油烟机', '连衣裙', '吹风机', '电话手表', '投影仪',
  '养生壶', '洗碗机', '豆浆机', '跑步机', '电蚊拍'
]

const categories = [
  { name: '冰洗 / 空调 / 电视 / 厨卫大电' },
  { name: '电脑 / 办公 / 文具用品' },
  { name: '手机 / 运营商 / 数码' },
  { name: '生活电器 / 厨房小电 / 个护健康' },
  { name: '食品 / 酒类 / 生鲜 / 特产' },
  { name: '美妆 / 个护清洁 / 宠物' },
  { name: '家装 / 建材 / 家具' },
  { name: '男装 / 女装 / 童装 / 内衣' },
  { name: '京东买药 / 计生情趣' }
]

const banners = [
  '/static/ad_images/1.png',
  '/static/ad_images/2.png',
  '/static/ad_images/3.png'
]

const rightImages = [
  '/static/ad_images/images_pc_pc_theme_hardware_tools_new.png',
  '/static/ad_images/images_pc_pc_theme_daily_necessities_new.png',
  '/static/ad_images/images_pc_pc_theme_beauty_new.png',
  '/static/ad_images/images_pc_pc_theme_state_subsidies_new.png'
]

const goodsList = ref([
  {
    id: 1,
    name: 'FILA 斐乐猫爪5官方男鞋舒适休闲鞋秋季时尚复古运动老爹鞋',
    price: '780.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: true, new: false }
  },
  {
    id: 2,
    name: '弗兰卡（Franke）水龙头 意大利原装进口单柄顶把手冷热水槽龙头',
    price: '1490.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: true, new: true }
  },
  {
    id: 3,
    name: 'THOM WILLS【明星同款】内增高皮鞋男通勤百搭商务正装牛津鞋',
    price: '1280.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: false, new: true }
  },
  {
    id: 4,
    name: '弗兰卡（Franke）水龙头 厨房抽拉式冷热洗菜盆360度旋转出水嘴',
    price: '1200.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: true, new: false }
  },
  {
    id: 5,
    name: '九牧王2026夏季新款 商务正装宽松直筒冰凉西裤男 省心防皱垂感',
    price: '599.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: true, new: true }
  },
  {
    id: 6,
    name: '全友家居 天然乳胶床垫1.2x2米单人护脊厚款偏硬独立袋装弹簧',
    price: '1198.75',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: true, new: false }
  },
  {
    id: 7,
    name: 'TUONO轻奢桑蚕丝手打红色男领带西装婚礼礼盒送老公男友骐骥红',
    price: '151.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: false, new: true }
  },
  {
    id: 8,
    name: '紫叶 梦雨 茶桌阳台电陶炉小茶桌多功能茶几藤编网红围炉煮茶桌',
    price: '3189.00',
    image: '/static/goods_images/sample.jpg',
    tags: { hot: true, new: true }
  }
])

const prevBanner = () => {
  currentBanner.value = (currentBanner.value - 1 + banners.length) % banners.length
}
const nextBanner = () => {
  currentBanner.value = (currentBanner.value + 1) % banners.length
}

let timer: any = null
onMounted(() => {
  timer = setInterval(() => {
    nextBanner()
  }, 5000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.jd-home {
  width: 100%;
  background: #ff00000a;
  padding-bottom: 50px;
}

.header-content {
  width: 1400px;
  margin: 0 auto;
  height: 140px;
  display: flex;
  align-items: center;
  gap: 50px;
}

.logo img {
  width: 190px;
  height: 120px;
  object-fit: contain;
  position: relative;
  left: 35px;
  top: 10px;
}

.search-box {
  flex: 1;
  position: relative;
  left: 340px;
  /* align-items: center; */
}

.search-input {
  width: 500px;
  border-radius: 1px solid #e1251b;
}

.search-btn {
  background: #e1251b;
  border-color: #e1251b;
}

.hot-words {
  margin-top: 8px;
  display: flex;
  gap: 12px;
}

.hot-words .word {
  font-size: 12px;
  color: #999;
  text-decoration: none;
}

.hot-words .word:hover {
  color: #e1251b;
}

.nav-main {
  background: #fff;
  border-radius: 16px;
  margin: 16px auto;
  width: 1400px;
}

.nav-content {
  width: 1400px;
  padding: 16px;
  display: flex;
  gap: 10px;
}

.category-menu {
  width: 240px;
  background: #f7f7f7;
  border-radius: 16px;
  height: 380px;
  display: flex;
  flex-direction: column;
}

.category-title {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

.category-list {
  border-top: none;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.category-item {
  height: 34px;
  line-height: 34px;
  padding: 0 15px;
  font-size: 14px;
  color: #636363;
  cursor: pointer;
}

.category-item:hover {
  background: #fff;
  margin-left: 10px;
  border-radius: 16px 0px 0px 16px;
  color: #e1251b;
}
.banner-area {
  height: 380px;
  width: 880px;
}

.banner-area img{
  height: 100%;
  border-radius: 16px;
}
.carousel {
  overflow: hidden;
  border-radius: 16px;
  height: 380px;
  position: relative;
}

.carousel-item img {
  z-index: 1;
  width: 100%;
  height: 380px;
  object-fit: cover;
  margin-bottom: -5px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
}

.carousel:hover .carousel-btn {
  opacity: 1;
  visibility: visible;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.5);
}

.carousel-btn span {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.carousel-prev {
  left: 0;
  border-radius: 0 8px 8px 0;
}

.carousel-next {
  right: 0;
  border-radius: 8px 0 0 8px;
}

.carousel-dots {
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel-dots span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
}

.carousel-dots span.active {
  background: #fff;
}

.right-area {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 230px;
}

.right-img-item {
  width: 100%;
  height: 84px;
  border-radius: 12px;
  overflow: hidden;
}

.right-img-item img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

.goods-section {
  width: 1400px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 16px;
}

.section-title {
  margin-bottom: 20px;
  border-bottom: 2px solid #e1251b;
  padding-bottom: 10px;
}

.section-title h3 {
  font-size: 20px;
  color: #e1251b;
  margin: 0;
}

.section-title p {
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.goods-item {
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.goods-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.goods-img {
  text-align: center;
  margin-bottom: 10px;
}

.goods-img img {
  width: 180px;
  height: 180px;
  object-fit: cover;
}

.goods-name {
  font-size: 14px;
  color: #333;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  margin-bottom: 8px;
}

.goods-tags {
  margin-bottom: 8px;
}

.goods-price {
  color: #e1251b;
  font-size: 16px;
  font-weight: bold;
}

.goods-price .price-symbol {
  font-size: 12px;
}
</style>
