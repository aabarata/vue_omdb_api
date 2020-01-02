import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
});