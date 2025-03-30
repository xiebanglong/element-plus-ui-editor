import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import App from './App.vue';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.mount('#app');
