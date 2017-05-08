/**
 * Created by ssf on 2017/5/8.
 */
import Vue from 'vue';

Vue.component('loading', {
    props: ['isShow'],
    template: '<div class="spinner" v-if="isShow"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div>'
});

export default {};
