/**
 * Created by ssf on 2017/5/3.
 */
import type from './types';

const mutations = {
    [type.LOGIN] (state, data) {
        window.localStorage.token = data.token;
        state.token = data.token;
    },
    [type.LOGOUT] (state) {
        window.localStorage.removeItem('token');
        state.token = '';
    },
    [type.SAVE_GROUP] (state, data) {
        state.group = data;
    }
};

export default mutations;
