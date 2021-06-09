import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// import VueCompositionApi from '@vue/composition-api';

createApp(App).use(store).use(router)
.mount('#app')
