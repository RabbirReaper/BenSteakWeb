<template>
  <section id="gallery" class="gallery-section py-5">
    <BContainer fluid class="px-0">
      <div class="section-header text-center mb-5" data-aos="fade-up">
        <h2 class="section-title luxury-heading">
          品牌<span class="golden-text">形象展示</span>
        </h2>
        <p class="section-subtitle">每一個角落都是精心設計的藝術品</p>
      </div>

      <!-- 主要圖片展示區 -->
      <div class="main-image-container" data-aos="zoom-in">
        <div class="image-wrapper">
          <img :src="mainImageUrl" :alt="mainImageAlt" class="main-image" @error="handleImageError" />
          <div class="image-overlay">
            <div class="overlay-content">
              <h3>尊爵牛排展示</h3>
              <p>極致奢華的完美呈現</p>
              <!-- <small class="image-note">您可以在程式碼中更改 mainImageUrl 來替換成您的圖片網址</small> -->
            </div>
          </div>
        </div>
        <div class="image-frame-decoration">
          <div class="corner-decoration top-left"></div>
          <div class="corner-decoration top-right"></div>
          <div class="corner-decoration bottom-left"></div>
          <div class="corner-decoration bottom-right"></div>
        </div>
      </div>

      <!-- 圖片資訊 -->
      <!-- <div class="image-info text-center mt-4" data-aos="fade-up" data-aos-delay="200">
        <p class="image-dimensions">圖片尺寸：5616 x 3744 像素</p>
        <BButton class="luxury-btn mt-3" @click="changeImage">
          <i class="bi bi-arrow-repeat me-2"></i>
          更換圖片
        </BButton>
      </div> -->

      <!-- 附加圖片畫廊 -->
      <BContainer class="mt-5">
        <BRow class="g-4">
          <BCol v-for="(image, index) in galleryImages" :key="index" md="4" data-aos="fade-up"
            :data-aos-delay="100 * (index + 1)">
            <div class="gallery-item">
              <img :src="image.url" :alt="image.alt" class="gallery-image" />
              <div class="gallery-overlay">
                <h4>{{ image.title }}</h4>
              </div>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </BContainer>

    <!-- 背景裝飾 -->
    <div class="section-background">
      <div class="bg-pattern"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'

// 主要圖片資訊 - 使用者可以在這裡修改成自己的圖片網址
const mainImageUrl = ref('https://pub-e2700a21e03b4e26a8bafd4546249408.r2.dev/web/%E7%89%9B%E6%8E%92%E5%AE%9E%E6%8B%8D%E5%9B%BE%20(276)_0.jpg')
const mainImageAlt = ref('尊爵牛排展示')

// 圖片錯誤處理 - 使用外部預設圖片
const handleImageError = (event) => {
  event.target.src = 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop'
}

// 更換圖片功能（示範用）
const changeImage = () => {
  // 這裡可以實現圖片上傳或URL更換的邏輯
  console.log('更換圖片功能')
}

// 畫廊圖片 - 使用外部圖片連結
const galleryImages = ref([
  {
    url: 'https://pub-e2700a21e03b4e26a8bafd4546249408.r2.dev/web/%E5%8E%9A%E5%88%87%20(1)_0.jpg',
    alt: '原塊厚切炭烤牛排',
    title: '原塊厚切炭烤牛排'
  },
  {
    url: 'https://pub-e2700a21e03b4e26a8bafd4546249408.r2.dev/web/%E5%A4%A7%E4%B8%88%E5%A4%AB%E7%89%9B%E6%8E%92_0.jpg',
    alt: '大丈夫牛排',
    title: '大丈夫牛排'
  },
  {
    url: 'https://pub-e2700a21e03b4e26a8bafd4546249408.r2.dev/web/%E7%89%9B%E6%8E%92%E5%AE%9E%E6%8B%8D%E5%9B%BE%20(119)_0.jpg',
    alt: '精緻細節',
    title: '精緻細節'
  }
])
</script>

<style scoped>
.gallery-section {
  background: linear-gradient(180deg, var(--luxury-black) 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.section-header {
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 3rem;
  color: var(--white);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  letter-spacing: 1px;
}

/* 主要圖片容器 */
.main-image-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto 3rem;
  padding: 2rem;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.main-image {
  width: 100%;
  height: auto;
  max-height: 800px;
  object-fit: contain;
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover .main-image {
  transform: scale(1.05);
}

/* 圖片覆蓋層 */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  display: flex;
  align-items: flex-end;
  padding: 3rem;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.overlay-content h3 {
  font-size: 2rem;
  color: var(--primary-gold);
  margin-bottom: 0.5rem;
}

.overlay-content p {
  font-size: 1.1rem;
  color: var(--white);
  margin: 0;
}

.overlay-content .image-note {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  font-style: italic;
}

/* 裝飾邊框 */
.image-frame-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.corner-decoration {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid var(--primary-gold);
}

.corner-decoration.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.corner-decoration.top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.corner-decoration.bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.corner-decoration.bottom-right {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

/* 圖片資訊 */
.image-info {
  position: relative;
  z-index: 2;
}

.image-dimensions {
  color: var(--primary-gold);
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

/* 附加畫廊 */
.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-10px);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(to top,
      rgba(0, 0, 0, 0.9) 0%,
      transparent 100%);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay h4 {
  color: var(--primary-gold);
  font-size: 1.2rem;
  margin: 0;
}

/* 背景裝飾 */
.section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.03;
  z-index: 1;
}

.bg-pattern {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 2px 2px,
      var(--primary-gold) 1px,
      transparent 1px);
  background-size: 40px 40px;
  animation: patternMove 30s linear infinite;
}

@keyframes patternMove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(40px, 40px);
  }
}

/* 響應式設計 */
@media (max-width: 991px) {
  .main-image-container {
    padding: 1rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .overlay-content h3 {
    font-size: 1.5rem;
  }

  .corner-decoration {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .gallery-item {
    height: 250px;
  }

  .overlay-content {
    padding: 1.5rem;
  }
}
</style>
