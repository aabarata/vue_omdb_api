import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './../views/dashboard/Dashboard.vue';

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
            component: () => import('./../views/details/Details.vue')
        }
    ]
});