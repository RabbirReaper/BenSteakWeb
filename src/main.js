import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
})

app.use(createPinia())
app.use(router)
app.use(createBootstrap())

app.mount('#app')
