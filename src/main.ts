import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Axios from "axios";
//配置请求数据
import { axiosPlugin } from './plugins/axiosPlugin';

const app = createApp(App);
app.config.globalProperties.$axios=Axios;
app.use(ElementPlus).use(store).use(router).use(axiosPlugin).mount('#app')
