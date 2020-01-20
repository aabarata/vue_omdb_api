import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './../components/dashboard/Dashboard.vue';
import Item from './../components/item/Item.vue';

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
            path: '/item/:id',
            name: 'Item',
            props: true,
            component: Item
        }
    ]
});