/**
 * Created by ssf on 2017/5/8.
 */

import GroupApi from '../../common/js/api/api-group';

const api = new GroupApi();

const index = {
    state: {
        message: []
    },
    actions: {
        getMessage ({commit, state}, params) {
            return api.groupMessage(params)
                .then(res => {
                    return Promise.resolve(res.data);
                });
        }
    }
};

export default index;
