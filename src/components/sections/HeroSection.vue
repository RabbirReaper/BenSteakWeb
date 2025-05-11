<template>
  <section id="home" class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-video-wrapper">
      <!-- 如果要使用影片，可以從Pexels或其他免費影片網站獲取連結 -->
      <!-- <video
        autoplay
        muted
        loop
        playsinline
        class="hero-video"
      >
        <source src="https://example.com/luxury-video.mp4" type="video/mp4" />
      </video> -->
    </div>

    <BContainer class="hero-content">
      <BRow class="align-items-center min-vh-100">
        <BCol lg="8" class="mx-auto text-center">
          <div class="animate__animated animate__fadeInUp">
            <h1 class="hero-title mb-4">
              <span class="golden-text">犇の野牛排</span>
              <br />
              <span class="subtitle">極致奢華體驗</span>
            </h1>
            <p class="hero-description mb-5 animate__animated animate__fadeInUp animate__delay-1s">
              在這裡，每一刻都是獨特的藝術品<br />
              我們致力於創造無與倫比的尊貴體驗
            </p>
            <div class="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
              <BButton class="luxury-btn hero-btn me-3" size="lg">
                <span class="me-2">✨</span>
                探索更多
              </BButton>
              <BButton variant="outline-light" class="hero-btn-outline" size="lg">
                <span class="me-2">📞</span>
                立即訂購
              </BButton>
            </div>
          </div>

          <div class="scroll-indicator animate__animated animate__fadeInUp animate__delay-3s">
            <div class="scroll-mouse">
              <div class="scroll-wheel"></div>
            </div>
            <p class="scroll-text">向下滾動</p>
          </div>
        </BCol>
      </BRow>
    </BContainer>

    <div class="hero-decoration">
      <div class="decoration-line left"></div>
      <div class="decoration-line right"></div>
    </div>
  </section>
</template>

<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'

</script>


<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(26, 26, 26, 0.7) 0%,
      rgba(26, 26, 26, 0.5) 50%,
      rgba(26, 26, 26, 0.7) 100%);
  z-index: 1;
}

.hero-video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

/* 使用外部圖片作為背景 */
.hero-video-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 高級餐廳內部圖片 */
  background-image: url('https://pub-e2700a21e03b4e26a8bafd4546249408.r2.dev/web/%E5%8E%9A%E5%88%87%20(2)_0.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.golden-text {
  background: linear-gradient(45deg,
      var(--primary-gold) 0%,
      var(--secondary-gold) 50%,
      var(--primary-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: goldShine 3s ease-in-out infinite;
}

@keyframes goldShine {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.subtitle {
  font-size: 3rem;
  color: var(--white);
  letter-spacing: 3px;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  letter-spacing: 1px;
}

.hero-btn {
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hero-btn-outline {
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 50px;
  border: 2px solid var(--white);
  color: var(--white);
  background: transparent;
  transition: all 0.3s ease;
}

.hero-btn-outline:hover {
  background: var(--white);
  color: var(--luxury-black);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
}

/* 滾動指示器 */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroll-mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--primary-gold);
  border-radius: 25px;
  margin: 0 auto 10px;
  position: relative;
}

.scroll-wheel {
  width: 6px;
  height: 10px;
  background: var(--primary-gold);
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s infinite;
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

.scroll-text {
  color: var(--primary-gold);
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin: 0;
}

/* 裝飾線 */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}

.decoration-line {
  position: absolute;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom,
      transparent 0%,
      var(--primary-gold) 50%,
      transparent 100%);
  opacity: 0.3;
}

.decoration-line.left {
  left: 10%;
}

.decoration-line.right {
  right: 10%;
}

/* 響應式設計 */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.8rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-btn,
  .hero-btn-outline {
    padding: 12px 30px;
    font-size: 1rem;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .decoration-line.left {
    left: 5%;
  }

  .decoration-line.right {
    right: 5%;
  }
}
</style>
