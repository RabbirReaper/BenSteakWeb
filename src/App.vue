<template>
  <div id="app">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

:root {
  --primary-gold: #d4af37;
  --secondary-gold: #f8e08e;
  --dark-gold: #b08d28;
  --luxury-black: #1a1a1a;
  --luxury-gray: #4a4a4a;
  --light-gray: #f5f5f5;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: var(--luxury-black);
  color: var(--white);
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Playfair Display', serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 捲軸樣式 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--luxury-black);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-gold);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--dark-gold);
}

/* 動畫效果 */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  animation: shimmer 3s infinite linear;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%);
  background-size: 1000px 100%;
}

/* 金色光暈效果 */
.golden-glow {
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
  transition: box-shadow 0.3s ease;
}

.golden-glow:hover {
  box-shadow: 0 0 50px rgba(212, 175, 55, 0.5);
}

/* 內容容器 */
.luxury-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 按鈕樣式 */
.luxury-btn {
  background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
  border: none;
  color: var(--luxury-black);
  padding: 12px 30px;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.luxury-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}

.luxury-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.luxury-btn:hover::before {
  left: 100%;
}

/* 標題裝飾線 */
.luxury-heading::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-gold), var(--secondary-gold));
  margin: 20px auto;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .luxury-container {
    padding: 0 15px;
  }
}
</style>
