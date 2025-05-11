import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Bootstrap 和 Bootstrap Vue Next
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createBootstrap } from 'bootstrap-vue-next'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// 其他樣式和函式庫
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

// 初始化 AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap()) // 使用 createBootstrap() 函數

app.mount('#app')
