import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { camelCase, upperFirst } from 'lodash';
import vuetify from './plugins/vuetify';
import './assets/less/global.less';

Vue.config.productionTip = false;
// enable vue devtools 
Vue.config.devtools = process.env.NODE_ENV === 'development';

//Automatically register globally all the components started by Base in the folder components
const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
    )

    Vue.component(componentName, componentConfig.default || componentConfig)
});
//Finish global register

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// enable vue devtools 
const newWindow: any = window;
newWindow.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = App.constructor;