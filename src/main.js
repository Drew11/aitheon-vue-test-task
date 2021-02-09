import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Post from './components/Post.vue';
import PostList from './components/PostList.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: PostList,
        alias:'/posts',
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



console.log(router)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
