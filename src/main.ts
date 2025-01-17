import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobal } from './global'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(registerGlobal)
app.use(createPinia())
app.use(router)

app.mount('#app')
