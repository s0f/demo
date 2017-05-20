/**
 * Created by ssf on 2017/5/8.
 */

import GroupApi from 'common/js/api/api-group';

const api = new GroupApi();

const index = {
    state: {
        message: []
    },
    actions: {
        getMessage ({commit, state}, params) {
            return api.groupMessage(params)
                .then(res => {
                    commit('SAVE_MESSAGE', res.data);
                    return Promise.resolve(res.data);
                });
        }
    },
    mutations: {
        SAVE_MESSAGE (state, res) {
            res.forEach(item => {
                item.messageData = JSON.parse(item.messageData);
                state.message.push(item);
            });
        }

    }
};

export default index;
