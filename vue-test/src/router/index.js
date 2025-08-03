import Vue from 'vue';
import VueRouter from 'vue-router'
import test1 from '../views/test1'
import test2 from '../views/test2'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'test1'
        },
        {
            path:'/test1',
            component:test1,
        },
        {
            path:'/test2',
            component:test2,
        },
    ]
})