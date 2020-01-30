import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import OmdbService from '@/services/OmdbService';
import Dashboard from '@/views/Dashboard.vue';
import Details from '@/views/Details.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

export enum RESOURCE {
    PAGE = 'page',
    MOVIE = 'movie'
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: { name: '404', params: { resource: RESOURCE.PAGE} }
        },
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: Details,
            props: true,
            async beforeEnter(routeTo, routeFrom, next) {
                try {
                    const response = await OmdbService.getMovie(routeTo.params.id);
                    if(response.data.Error) {
                        next({ name: '404', params: { resource: RESOURCE.MOVIE}});
                    }
                    routeTo.params.movie = response.data;
                    next();
                } catch(error) {
                    //Connection error, redirect to other page
                }
            }
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
            props: true,
            beforeEnter(routeTo, routeFrom, next) {
                if(!routeTo.params.resource) {
                    routeTo.params.resource = RESOURCE.PAGE;
                }
                next();
            }
        }
    ]
});

router.beforeEach((routeTo, routeFrom, next) => {
    NProgress.start();
    next();
})

router.afterEach(() => {
    NProgress.done();
});

export default router;
