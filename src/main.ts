import { createApp } from 'vue';
import { createPinia } from 'pinia';
import createRouter from '@/routes';
import { createWebHistory } from 'vue-router';
import { disableCache } from '@iconify/vue';
import App from './App.vue';
import '@/assets/sass/app.scss';

disableCache('all');

const store = createPinia();
const router = createRouter(createWebHistory());

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
