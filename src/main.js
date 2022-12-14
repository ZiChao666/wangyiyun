import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.use(Vant);

