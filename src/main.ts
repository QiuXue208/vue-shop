import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/element/index.scss'
import 'element-plus/dist/index.css'

import '@/api/axios'

// 加载全局样式，全局变量不能加载进来
import '@/styles/index.scss'
import '@/styles/variables.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store, key)
app.use(router)

app.use(ElementPlus)
app.mount('#app')
