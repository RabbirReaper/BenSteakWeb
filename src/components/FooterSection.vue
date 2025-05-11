<template>
  <footer class="luxury-footer">
    <div class="footer-content">
      <BContainer class="luxury-container">
        <BRow class="g-4">
          <!-- 品牌資訊 -->
          <BCol lg="4" md="6">
            <div class="footer-brand">
              <h3 class="footer-logo">尊爵品牌</h3>
              <p class="footer-description">
                致力於創造頂級奢華體驗，為每一位貴賓提供無與倫比的尊榮服務。
              </p>
              <div class="footer-social">
                <a href="https://www.facebook.com/p/%E7%8A%87%E3%81%AE%E9%87%8E%E5%B9%B3%E5%83%B9%E5%8E%9F%E5%A1%8A%E7%89%9B%E6%8E%92-100064260904714/?locale=zh_TW&_rdr"
                  class="social-link">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://lin.ee/7ekov0d" class="social-link">
                  <i class="bi bi-line"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </BCol>

          <!-- 快速連結 -->
          <BCol lg="2" md="6">
            <div class="footer-links">
              <h4>快速連結</h4>
              <ul>
                <li><a href="#home">首頁</a></li>
                <li><a href="#about">關於我們</a></li>
                <li><a href="#gallery">品牌形象</a></li>
                <li><a href="#info">營業資訊</a></li>
                <li><a href="#contact">聯絡我們</a></li>
              </ul>
            </div>
          </BCol>

          <!-- 服務項目 -->
          <BCol lg="3" md="6">
            <div class="footer-links">
              <h4>服務項目</h4>
              <ul>
                <li><a href="#">線上菜單</a></li>
                <li><a href="#">訂位服務</a></li>
                <li><a href="#">會員專區</a></li>
                <li><a href="#">優惠活動</a></li>
                <li><a href="#">包場服務</a></li>
              </ul>
            </div>
          </BCol>

          <!-- 聯絡資訊 -->
          <BCol lg="3" md="6">
            <div class="footer-contact">
              <h4>聯絡資訊</h4>
              <ul>
                <li>
                  <i class="bi bi-geo-alt me-2"></i>
                  807高雄市三民區瀋陽街140號
                </li>
                <li>
                  <i class="bi bi-telephone me-2"></i>
                  09-1661-9753
                </li>
                <li>
                  <i class="bi bi-envelope me-2"></i>

                </li>
                <li>
                  <i class="bi bi-clock me-2"></i>
                  11:30-13:30, 17:00-20:30
                </li>
              </ul>
            </div>
          </BCol>
        </BRow>

        <!-- 訂閱電子報 -->
        <BRow class="mt-5">
          <BCol>
            <div class="newsletter-section">
              <h4>查看鮮週報</h4>
              <p>獲取最新優惠及活動資訊</p>
              <a href="https://freshweekly.tw/?pn=vw&id=b65ms9y7guzc">https://freshweekly.tw/?pn=vw&id=b65ms9y7guzc
              </a>
              <!-- <BForm @submit.prevent="subscribeNewsletter" class="newsletter-form">
                <BInputGroup>
                  <BFormInput v-model="email" type="email" placeholder="請輸入您的電子郵件" class="newsletter-input" required />
                  <BButton type="submit" class="luxury-btn">
                    訂閱
                  </BButton>
                </BInputGroup>
              </BForm> -->
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>

    <!-- 版權資訊 -->
    <div class="footer-bottom">
      <BContainer class="luxury-container">
        <BRow class="align-items-center">
          <BCol md="6">
            <p class="copyright">
              © 2025 尊爵品牌 All Rights Reserved.
            </p>
          </BCol>
          <BCol md="6" class="text-md-end">
            <div class="footer-bottom-links">
              <a href="#">隱私政策</a>
              <span class="divider">|</span>
              <a href="#">服務條款</a>
              <span class="divider">|</span>
              <a href="#">網站地圖</a>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>

    <!-- 裝飾元素 -->
    <div class="footer-decoration">
      <div class="deco-element deco-1"></div>
      <div class="deco-element deco-2"></div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'


const email = ref('')

const subscribeNewsletter = () => {
  console.log('訂閱電子報:', email.value)
  alert('感謝您的訂閱！')
  email.value = ''
}
</script>

<style scoped>
.luxury-footer {
  background: #0a0a0a;
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.footer-content {
  padding: 5rem 0 3rem;
  position: relative;
  z-index: 2;
}

/* 品牌資訊 */
.footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-gold);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-gold);
  color: var(--luxury-black);
  transform: translateY(-3px);
}

/* 連結區塊 */
.footer-links h4,
.footer-contact h4 {
  font-size: 1.3rem;
  color: var(--primary-gold);
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-links h4::after,
.footer-contact h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--primary-gold);
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-links a:hover {
  color: var(--primary-gold);
  padding-left: 10px;
}

.footer-contact li {
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: flex-start;
}

.footer-contact i {
  color: var(--primary-gold);
  margin-top: 0.2rem;
}

/* 電子報訂閱 */
.newsletter-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
}

.newsletter-section h4 {
  font-size: 1.5rem;
  color: var(--primary-gold);
  margin-bottom: 0.5rem;
}

.newsletter-section p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.newsletter-form {
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--white);
  padding: 0.75rem 1rem;
}

.newsletter-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary-gold);
  box-shadow: none;
  color: var(--white);
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* 底部版權 */
.footer-bottom {
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem 0;
  position: relative;
  z-index: 2;
}

.copyright {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--primary-gold);
}

.divider {
  margin: 0 1rem;
  color: rgba(255, 255, 255, 0.3);
}

/* 裝飾元素 */
.footer-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.deco-element {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at center,
      var(--primary-gold) 0%,
      transparent 70%);
  opacity: 0.05;
}

.deco-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: pulse 8s ease-in-out infinite;
}

.deco-2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
  animation: pulse 10s ease-in-out infinite;
  animation-delay: -5s;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.05;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.1;
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .footer-content {
    padding: 3rem 0 2rem;
  }

  .footer-logo {
    font-size: 1.5rem;
  }

  .newsletter-section {
    padding: 1.5rem;
  }

  .footer-bottom {
    text-align: center;
  }

  .footer-bottom-links {
    margin-top: 1rem;
  }

  .copyright,
  .footer-bottom-links a {
    font-size: 0.85rem;
  }
}
</style>
