import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './state/store';

import './assets/less/global.less';

Vue.config.productionTip = false;
// enable vue devtools 
Vue.config.devtools = process.env.NODE_ENV === 'development';

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// enable vue devtools 
const newWindow: any = window;
newWindow.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;