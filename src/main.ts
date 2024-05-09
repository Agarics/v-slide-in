import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import slideIn from './v-slide-in'
const app = createApp(App)
app.use(slideIn)
app.mount('#app')
