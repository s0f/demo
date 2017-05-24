/**
 * Created by ssf on 2017/1/20.
 */
import axios from '../../../http';
/*
function getCookie (name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
*/

/*
function checkAuth () {
    const token = getCookie('TOKEN');
    if (token === null) {
        window.location.href = 'http://localwx.piapiaclub.com:8080/login.do?returnURL=' + window.location.href;
    }
    return token;
}
*/

class API {

    group (params) {
        switch (params.method) {
            case 'get':
                return axios.get(`/groups/${params.id}`);
            case 'post':
                return axios.post(`/groups/${params.id}`);
        }
    }

    groupMessage (params) {
        return axios.get(`/groups/${params.id}/messages`, {
            params: {
                start: params.start,
                limit: params.limit
            }
        });
    }

    member (params) {
        const memberUrl = '/member';
        if (!params) {
            params = {};
        }
        return axios.get(params.api || memberUrl);
    }

    match (params) {
        return axios.get(`/groups/${params.id}/matchs`, {
            params: {
                start: params.start,
                limit: params.limit
            }
        });
    }

    config () {
        return axios.get('/config');
    }

}

export default API;
