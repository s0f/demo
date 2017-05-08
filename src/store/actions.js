/**
 * Created by ssf on 2017/5/3.
 */

import GroupApi from '../common/js/api/api-group';

const api = new GroupApi();

const actions = {
    getUser ({commit}) {
        return api.member().then(res => {
            commit('SAVE_USER', res.data);
            return Promise.resolve(res);
        });
    },
    getConfig ({commit}) {
        api.config().then(res => {
            commit('SAVE_CONFIG', res.data);
        });
    }
};

export default actions;
