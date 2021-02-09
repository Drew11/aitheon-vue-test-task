import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Post from './components/Post.vue';
import PostList from './components/PostList.vue';

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        redirect: to => {
            const { path } = to;
            console.log(to)
            if (path=== '/') {
                return  {path: 'posts'}
            }
        }
    },
    {
        name: 'posts',
        path: '/posts',
        component: PostList ,
    },
    {
        name: 'post',
        path: '/posts/:id',
        component: Post,
        props: true,
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});


Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
