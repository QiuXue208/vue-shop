import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store, { key } from './store'

import '@/api/axios'

// 加载全局样式，全局变量不能加载进来
import '@/styles/index.scss'
import '@/styles/variables.scss'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.mount('#app')
