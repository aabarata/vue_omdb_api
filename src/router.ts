import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Details from '@/views/Details.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/details/:id',
            name: 'Details',
            props: true,
            component: Details
        }
    ]
});