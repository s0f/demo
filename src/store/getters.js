/**
 * Created by ssf on 2017/5/4.
 */
import baseUtil from '../common/js/base';

export default {
    isAuth (state) {
        var token = '';
        if (state.token) {
            return state.token;
        } else {
            token = baseUtil.getCookie('TOKEN');
            return token;
        }
    }
};
