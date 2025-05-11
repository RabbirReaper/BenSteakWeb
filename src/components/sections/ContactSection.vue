<template>
  <section id="contact" class="contact-section py-5">
    <BContainer class="luxury-container">
      <div class="section-header text-center mb-5" data-aos="fade-up">
        <h2 class="section-title luxury-heading">
          聯絡<span class="golden-text">我們</span>
        </h2>
        <p class="section-subtitle">期待為您提供尊榮服務</p>
      </div>

      <BRow class="g-4">
        <!-- 聯絡表單 -->
        <BCol lg="7" data-aos="fade-right">
          <div class="contact-form-wrapper">
            <h3 class="form-title mb-4">傳送訊息</h3>
            <BForm @submit.prevent="handleSubmit">
              <BRow>
                <BCol md="6" class="mb-3">
                  <BFormGroup>
                    <BFormInput v-model="form.name" placeholder="您的姓名" class="luxury-input" required />
                  </BFormGroup>
                </BCol>
                <BCol md="6" class="mb-3">
                  <BFormGroup>
                    <BFormInput v-model="form.phone" placeholder="連絡電話" class="luxury-input" required />
                  </BFormGroup>
                </BCol>
              </BRow>

              <BFormGroup class="mb-3">
                <BFormInput v-model="form.email" type="email" placeholder="電子郵件" class="luxury-input" required />
              </BFormGroup>

              <BFormGroup class="mb-3">
                <BFormSelect v-model="form.subject" :options="subjectOptions" class="luxury-input" required>
                  <template #first>
                    <BFormSelectOption value="" disabled>
                      請選擇主題
                    </BFormSelectOption>
                  </template>
                </BFormSelect>
              </BFormGroup>

              <BFormGroup class="mb-4">
                <BFormTextarea v-model="form.message" placeholder="您的訊息" rows="5" class="luxury-input" required />
              </BFormGroup>

              <BButton type="submit" class="luxury-btn submit-btn" size="lg">
                <span v-if="!isSubmitting">
                  <i class="bi bi-send me-2"></i>
                  傳送訊息
                </span>
                <BSpinner v-else small />
              </BButton>
            </BForm>
          </div>
        </BCol>

        <!-- 聯絡資訊 -->
        <BCol lg="5" data-aos="fade-left">
          <div class="contact-info-wrapper">
            <h3 class="info-title mb-4">聯絡資訊</h3>

            <div class="info-item">
              <div class="info-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="info-content">
                <h4>地址</h4>
                <p>台北市信義區信義路五段7號</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div class="info-content">
                <h4>電話</h4>
                <p>02-8101-8888</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="info-content">
                <h4>電子郵件</h4>
                <p>info@luxury-brand.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <i class="bi bi-clock-fill"></i>
              </div>
              <div class="info-content">
                <h4>營業時間</h4>
                <p>每日 11:30-13:30, 17:00-20:30</p>
                <p class="text-warning">星期三公休</p>
              </div>
            </div>

            <!-- 社群媒體連結 -->
            <div class="social-links mt-4">
              <h4 class="mb-3">關注我們</h4>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="bi bi-line"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>

      <!-- 地圖區域 -->
      <BRow class="mt-5">
        <BCol data-aos="fade-up">
          <div class="map-wrapper">
            <div class="map-placeholder">
              <i class="bi bi-geo-alt-fill"></i>
              <p>互動式地圖</p>
              <BButton class="luxury-btn">
                在 Google 地圖中開啟
              </BButton>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>

    <!-- 背景裝飾 -->
    <div class="section-decoration">
      <div class="deco-line deco-line-1"></div>
      <div class="deco-line deco-line-2"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next'

const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const subjectOptions = [
  { value: 'reservation', text: '預約服務' },
  { value: 'inquiry', text: '一般諮詢' },
  { value: 'feedback', text: '意見回饋' },
  { value: 'cooperation', text: '商業合作' },
  { value: 'other', text: '其他' }
]

const handleSubmit = async () => {
  isSubmitting.value = true

  // 模擬表單提交
  setTimeout(() => {
    console.log('表單資料:', form.value)
    alert('訊息已成功發送！我們會盡快回覆您。')

    // 重置表單
    form.value = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    }

    isSubmitting.value = false
  }, 2000)
}
</script>

<style scoped>
.contact-section {
  background: var(--luxury-black);
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

/* 表單包裝器 */
.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
}

.form-title,
.info-title {
  font-size: 1.8rem;
  color: var(--primary-gold);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

/* 自定義輸入框樣式 */
.luxury-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--white);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.luxury-input:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary-gold);
  box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.25);
  color: var(--white);
}

.luxury-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

/* 聯絡資訊包裝器 */
.contact-info-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  height: 100%;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.info-icon i {
  font-size: 1.5rem;
  color: var(--primary-gold);
}

.info-content h4 {
  font-size: 1.1rem;
  color: var(--primary-gold);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.info-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* 社群媒體連結 */
.social-links h4 {
  color: var(--white);
  font-size: 1.2rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-gold);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--primary-gold);
  color: var(--luxury-black);
  transform: translateY(-3px);
}

.social-icon i {
  font-size: 1.2rem;
}

/* 地圖區域 */
.map-wrapper {
  margin-top: 2rem;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.map-placeholder {
  height: 400px;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.map-placeholder i {
  font-size: 3rem;
  color: var(--primary-gold);
}

.map-placeholder p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  margin: 0;
}

/* 裝飾線 */
.section-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.deco-line {
  position: absolute;
  background: linear-gradient(90deg,
      transparent 0%,
      var(--primary-gold) 50%,
      transparent 100%);
  opacity: 0.1;
}

.deco-line-1 {
  top: 20%;
  left: -50%;
  width: 200%;
  height: 1px;
  transform: rotate(-15deg);
}

.deco-line-2 {
  bottom: 30%;
  right: -50%;
  width: 200%;
  height: 1px;
  transform: rotate(15deg);
}

/* 響應式設計 */
@media (max-width: 991px) {
  .section-title {
    font-size: 2.5rem;
  }

  .contact-form-wrapper,
  .contact-info-wrapper {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .form-title,
  .info-title {
    font-size: 1.5rem;
  }

  .info-item {
    margin-bottom: 1.5rem;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .map-placeholder {
    height: 300px;
  }
}
</style>
