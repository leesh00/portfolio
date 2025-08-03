import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path:'/',
          redirect: '/news',
        },
        {
          path:'/news',
          name: 'news',
          component: NewsView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('NewsView')
        },
        {
          path:'/ask',
          name: 'ask',
          component: AskView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('AskView')
        },
        {
          path:'/jobs',
          name: 'jobs',
          component: JobsView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('NJobsView')
        },
        {
            path:'/user/:id',
            component:UserView,
        },
        {
            path:'/item/:id',
            component:ItemView,
        },
    ]
})