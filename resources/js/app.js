import './bootstrap';
import App from './views/App.vue'

import router from './router'
import { createApp } from 'vue'
import '../css/app.css'
import '@/assets/css/carousel.css'
// import '@/assets/css/cat.css'



// Create vue app
const app = createApp(App)
app.use(router);

// Mount vue app
app.mount('#app')