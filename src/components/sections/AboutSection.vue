<template>
  <section id="about" class="about-section py-5">
    <BContainer class="luxury-container">
      <BRow class="align-items-center">
        <BCol lg="6" class="mb-4 mb-lg-0">
          <div class="about-content" data-aos="fade-right">
            <h2 class="section-title luxury-heading mb-4">
              關於<span class="golden-text">犇の野牛排</span>
            </h2>
            <p class="about-description mb-4">
              成立於2021年，我們致力於創造頂級奢華體驗。每一個細節都經過精心雕琢，
              從環境氛圍到服務品質，無不體現著我們對完美的追求。
            </p>
            <p class="about-description mb-4">
              我們相信，真正的奢華不僅是外在的華麗，更是內在的品質。
              數年來，我們始終堅持這個理念，為每一位貴賓提供無與倫比的尊榮體驗。
            </p>

            <div class="achievement-list mb-4">
              <div class="achievement-item">
                <div class="achievement-icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="achievement-text">
                  <h4>衛生保障</h4>
                  <p>長期與殺蟲公司合作</p>
                </div>
              </div>

              <div class="achievement-item">
                <div class="achievement-icon">
                  <i class="bi bi-star-fill"></i>
                </div>
                <div class="achievement-text">
                  <h4>頂級服務</h4>
                  <p>榮獲鮮週報報導</p>
                </div>
              </div>

              <div class="achievement-item">
                <div class="achievement-icon">
                  <i class="bi bi-gem"></i>
                </div>
                <div class="achievement-text">
                  <h4>精選材質</h4>
                  <p>嚴選世界頂級原料</p>
                </div>
              </div>
            </div>

            <!-- <BButton class="luxury-btn" size="lg">
              了解更多
              <i class="bi bi-arrow-right ms-2"></i>
            </BButton> -->
          </div>
        </BCol>

        <BCol lg="6">
          <div class="about-image-wrapper" data-aos="fade-left">
            <div class="image-frame">
              <img src="https://pub-e2700a21e03b4e26a8bafd4546249408.r2.dev/web/%E5%A4%A7_0.jpg" alt="尊爵品牌內部環境"
                class="about-image" />
              <div class="image-overlay"></div>
            </div>
            <div class="floating-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>4+</h3>
              <p>年專業經驗</p>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>

    <div class="section-decoration">
      <div class="decoration-pattern"></div>
    </div>
  </section>
</template>

<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'

</script>

<style scoped>
.about-section {
  background: var(--luxury-black);
  position: relative;
  overflow: hidden;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--white);
  position: relative;
  display: inline-block;
}

.golden-text {
  color: var(--primary-gold);
  margin-left: 0.5rem;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5px;
}

/* 成就列表 */
.achievement-list {
  margin-top: 2rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
}

.achievement-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(10px);
}

.achievement-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.achievement-icon i {
  font-size: 1.5rem;
  color: var(--luxury-black);
}

.achievement-text h4 {
  font-size: 1.2rem;
  color: var(--primary-gold);
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.achievement-text p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* 圖片區域 */
.about-image-wrapper {
  position: relative;
  padding: 2rem;
}

.image-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.5s ease;
}

.image-frame:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.about-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(212, 175, 55, 0.1) 0%,
      transparent 100%);
  pointer-events: none;
}

/* 浮動卡片 */
.floating-card {
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  background: var(--luxury-black);
  border: 2px solid var(--primary-gold);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.floating-card h3 {
  font-size: 2.5rem;
  color: var(--primary-gold);
  margin: 0;
  font-weight: 700;
}

.floating-card p {
  margin: 0;
  color: var(--white);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

/* 裝飾圖案 */
.section-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  pointer-events: none;
  opacity: 0.05;
}

.decoration-pattern {
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L90 25L90 75L50 95L10 75L10 25L50 5Z' fill='none' stroke='%23d4af37' stroke-width='0.5'/%3E%3C/svg%3E");
  background-size: 100px 100px;
  animation: patternFloat 20s ease-in-out infinite;
}

@keyframes patternFloat {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

/* 響應式設計 */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .image-frame {
    transform: none;
  }

  .floating-card {
    right: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .achievement-item {
    padding: 0.75rem;
  }

  .achievement-icon {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }

  .achievement-icon i {
    font-size: 1.25rem;
  }

  .about-image {
    height: 350px;
  }

  .floating-card {
    padding: 1rem;
    right: 1rem;
    bottom: 1rem;
  }

  .floating-card h3 {
    font-size: 2rem;
  }
}
</style>
