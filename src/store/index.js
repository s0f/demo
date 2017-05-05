/**
 * Created by ssf on 2017/5/3.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
Vue.use(Vuex);

const state = {
    token: '',
    group: null
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
    }
});
