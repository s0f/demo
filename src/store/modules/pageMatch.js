/**
 * Created by ssf on 2017/5/19.
 */

import GroupApi from '../../common/js/api/api-group';

const api = new GroupApi();

const index = {
    state: {
        matchList: []
    },
    mutations: {
        saveMatchList (state, payload) {
            state.matchList.concat(payload.list);
        }
    },
    actions: {
        getMatchs ({commit, state}, params) {
            return api.match(params)
                .then(res => {
                    return Promise.resolve(res.data);
                });
        }
    }
};

export default index;
