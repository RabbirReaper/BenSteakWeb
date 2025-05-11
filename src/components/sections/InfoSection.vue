<template>
  <section id="info" class="info-section py-5">
    <BContainer class="luxury-container">
      <div class="section-header text-center mb-5" data-aos="fade-up">
        <h2 class="section-title luxury-heading">
          營業<span class="golden-text">資訊</span>
        </h2>
        <p class="section-subtitle">歡迎蒞臨體驗尊榮服務</p>
      </div>

      <BRow class="g-4">
        <!-- 營業時間卡片 -->
        <BCol lg="6" data-aos="fade-right">
          <div class="info-card hours-card">
            <div class="card-icon">
              <i class="bi bi-clock-fill"></i>
            </div>
            <h3 class="card-title">營業時間</h3>
            <div class="hours-list">
              <div class="hour-item">
                <span class="day">星期一至星期二</span>
                <div class="time-slots">
                  <span class="time-slot">11:30 - 13:30</span>
                  <span class="time-slot">17:00 - 20:30</span>
                </div>
              </div>
              <div class="hour-item">
                <span class="day">星期三</span>
                <div class="time-slots">
                  <span class="closed-text">公休</span>
                </div>
              </div>
              <div class="hour-item">
                <span class="day">星期四至星期日</span>
                <div class="time-slots">
                  <span class="time-slot">11:30 - 13:30</span>
                  <span class="time-slot">17:00 - 20:30</span>
                </div>
              </div>
            </div>
            <div class="special-note">
              <i class="bi bi-info-circle me-2"></i>
              特殊節日營業時間可能調整，敬請來電詢問
            </div>
          </div>
        </BCol>

        <!-- 聯絡資訊卡片 -->
        <BCol lg="6" data-aos="fade-left">
          <div class="info-card contact-card">
            <div class="card-icon">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <h3 class="card-title">聯絡資訊</h3>
            <div class="contact-list">
              <div class="contact-item">
                <i class="bi bi-geo-alt me-3"></i>
                <div class="contact-info">
                  <h4>地址</h4>
                  <p>807高雄市三民區瀋陽街140號</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="bi bi-telephone-fill me-3"></i>
                <div class="contact-info">
                  <h4>連絡電話</h4>
                  <p>09-1661-9753</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="bi bi-envelope-fill me-3"></i>
                <div class="contact-info">
                  <h4>Line</h4>
                  <p>https://lin.ee/7ekov0d</p>
                  <br />
                </div>
              </div>
            </div>
            <BButton class="luxury-btn w-100 mt-3">
              <i class="bi bi-map me-2"></i>
              查看地圖
            </BButton>
          </div>
        </BCol>
      </BRow>

      <!-- 快速連結區域 -->
      <BRow class="mt-5">
        <BCol data-aos="fade-up" data-aos-delay="200">
          <div class="quick-links">
            <h3 class="text-center mb-4">快速連結</h3>
            <div class="links-grid">
              <a href="#" class="link-card">
                <div class="link-icon">
                  <i class="bi bi-book"></i>
                </div>
                <h4>線上菜單</h4>
                <p>瀏覽完整菜單</p>
                <p>(尚未完成)</p>
              </a>
              <a href="#" class="link-card">
                <div class="link-icon">
                  <i class="bi bi-calendar-check"></i>
                </div>
                <h4>線上訂位</h4>
                <p>立即預約座位</p>
                <p>(目前不開放預約)</p>
              </a>
              <a href="#" class="link-card">
                <div class="link-icon">
                  <i class="bi bi-gift"></i>
                </div>
                <h4>優惠活動</h4>
                <p>最新優惠資訊</p>
                <p>(尚未完成)</p>
              </a>
              <a href="#" class="link-card">
                <div class="link-icon">
                  <i class="bi bi-people"></i>
                </div>
                <h4>會員專區</h4>
                <p>尊榮會員服務</p>
                <p>(尚未完成)</p>
              </a>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>

    <!-- 背景動畫 -->
    <div class="animated-bg">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
    </div>
  </section>
</template>

<script setup>
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'

</script>


<style scoped>
.info-section {
  background: linear-gradient(135deg, var(--luxury-black) 0%, #1a1a1a 100%);
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
  letter-spacing: 1px;
}

/* 資訊卡片 */
.info-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: var(--primary-gold);
  box-shadow: 0 15px 30px rgba(212, 175, 55, 0.1);
  transform: translateY(-5px);
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      transparent 0%,
      rgba(212, 175, 55, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover::before {
  opacity: 1;
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.card-icon i {
  font-size: 2rem;
  color: var(--luxury-black);
}

.card-title {
  font-size: 1.8rem;
  color: var(--primary-gold);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* 營業時間列表 */
.hours-list {
  margin-bottom: 1.5rem;
}

.hour-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hour-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: 500;
  color: var(--white);
  font-size: 1.1rem;
}

.time-slots {
  text-align: right;
}

.time-slot {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.time-slot:last-child {
  margin-bottom: 0;
}

.closed-text {
  color: #ff6b6b;
  font-weight: 500;
}

.special-note {
  background: rgba(212, 175, 55, 0.1);
  padding: 1rem;
  border-radius: 10px;
  color: var(--primary-gold);
  font-size: 0.9rem;
  text-align: center;
}

/* 聯絡資訊列表 */
.contact-list {
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item i {
  font-size: 1.5rem;
  color: var(--primary-gold);
  margin-top: 0.25rem;
}

.contact-info h4 {
  font-size: 1.1rem;
  color: var(--primary-gold);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.contact-info p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
}

/* 快速連結 */
.quick-links h3 {
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 2rem;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.link-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.link-card:hover {
  border-color: var(--primary-gold);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
}

.link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(212, 175, 55, 0.1) 50%,
      transparent 100%);
  transition: left 0.5s ease;
}

.link-card:hover::before {
  left: 100%;
}

.link-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
}

.link-card:hover .link-icon {
  background: var(--primary-gold);
}

.link-icon i {
  font-size: 1.5rem;
  color: var(--primary-gold);
  transition: all 0.3s ease;
}

.link-card:hover .link-icon i {
  color: var(--luxury-black);
}

.link-card h4 {
  font-size: 1.2rem;
  color: var(--white);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.link-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* 背景動畫 */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: var(--primary-gold);
  animation: float 15s infinite ease-in-out;
}

.element-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: -5s;
}

.element-3 {
  width: 80px;
  height: 80px;
  bottom: 10%;
  left: 30%;
  animation-delay: -10s;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-30px) rotate(180deg);
  }
}

/* 響應式設計 */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .info-card {
    padding: 2rem;
  }

  .hour-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .time-slots {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .links-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .link-card {
    padding: 1.5rem;
  }
}
</style>
