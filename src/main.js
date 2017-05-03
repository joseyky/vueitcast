import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import '../node_modules/mint-ui/lib/style.min.css';
import Mint from 'mint-ui';
import vueResource from 'vue-resource';
Vue.use(Mint);
Vue.use(vueResource);

Vue.use(vueRouter);

import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import '../statics/mui/css/mui.css';
import '../statics/css/site.css';
import moment from 'moment';
import newsinfo from './components/news/newsinfo.vue'

Vue.filter('datefmt', function (input,fmtstring) {
    return moment(input).format(fmtstring);
    //return '2011-22-2 10101';
})
var router = new vueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {path:'/home',component:home},
        {path:'/shopcar',component:shopcar},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsinfo/:id',component:newsinfo}
    ]
})
    new Vue({
    el: '#app',
        router,
    render: c=>c(App)
});