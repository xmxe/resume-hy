import { createApp } from 'vue';
import App from './App.vue';
// import router from '@/router';
import { createPinia } from 'pinia';
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import '@/common/stylus/index.styl';

const app = createApp(App);
// 弹窗选项配置
const options: PluginOptions = {
    // You can set your default options here
    transition: 'Vue-Toastification__slideBlurred',
    position: POSITION.TOP_RIGHT,
    timeout: 3500,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false
}

const pinia = createPinia();
app.use(pinia).use(Toast, options).mount('#app');
