// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './routers';
import store from './store';
import type from './store/types';
import baseUtil from './common/js/base';
import 'common/scss/group.scss';
import globalComponents from './components/globalComponents';

Vue.config.debug = true;
console.log(globalComponents);
// 最先检查是否登录, 再检查是否有默认群（之前进入某个群）

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    linkActiveClass: 'weui-bar__item_on'
});

router.beforeEach((to, from, next) => {
    if (to.name === 'ranking') {
        window.alert('功能正在开发中！');
        next(false);
    } else {
        const token = baseUtil.checkAuth();
        store.commit(type.LOGIN, {
            token
        });
        if (to.meta.requireAuth) {
            if (token) {
                next();
            } else {
                window.location.href = 'http://localwx.piapiaclub.com:8080/login.do?returnURL=' + window.location.href;
            }
        } else {
            next();
        }
    }
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: {
        App
    },
    router
});
