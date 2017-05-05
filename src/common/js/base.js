/**
 * Created by ssf on 2017/1/20.
 */
import GroupApi from './api/api-group';
import store from '../../store';
import type from '../../store/types';

const api = new GroupApi();

export default {
    getCookie (name) {
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        const arr = document.cookie.match(reg);
        if (arr) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },
    // 检查是否登录
    checkAuth () {
        const token = this.getCookie('TOKEN');
        if (token === 'undefined') {
            window.location.href = 'http://localwx.piapiaclub.com:8080/login.do?returnURL=' + window.location.href;
        }
        return token;
    },
    checkGroup () {
        this.getGroupInfo()
            .then(res => {
                if (res == null) {
                    return this.getUserInfo();
                }
            })
            .then(res => {
                return this.getGroupInfo(res.data.defaultGroup.id);
            })
            .then(res => {
                store.commit(type.SAVE_GROUP, res.data);
            });
    },
    LStorage () {
        const args = arguments;
        if (args.length === 2) {
            if (args[1] === '') {
                window.localStorage.removeItem(args[0]);
            } else {
                window.localStorage.setItem(args[0], args[1]);
            }
        } else {
            return window.localStorage.getItem(args[0]);
        }
    },
    SStorage () {
        const args = arguments;
        if (args.length === 2) {
            if (args[1] === '') {
                window.sessionStorage.removeItem(args[0]);
            } else {
                window.sessionStorage.setItem(args[0], args[1]);
            }
        } else {
            return window.sessionStorage.getItem(args[0]);
        }
    },
    /**
     *
     * @param type  获取URL的便捷函数 getLocation('search') 返回键值对
     * @returns {String}
     */
    getLocation: function (type) {
        const o = type !== '' && global.location[type];

        const obj = {
            'search': (function () {
                const items = o.slice(1);
                const obj = {};
                items.split('&').forEach(function (val, idx) {
                    const temp = val.split('=');
                    obj[temp[0]] = temp[1];
                });
                return obj;
            })(),
            'pathname': o
        };
        return obj[type];
    },
    /**
     * 获取小组信息，没参数从本地获取，有参数根据参数获取目标小组信息返回Promise对象
     * @param groupId
     */

    getGroupInfo: function (groupId) {
        const groupInfo = JSON.parse(this.LStorage('groupInfo'));
        if (groupId || (groupId && !groupInfo)) {
            return api.group({
                id: groupId,
                method: 'get'
            });
        }
        return Promise.resolve(groupInfo);
    },
    getUserInfo: function () {
        const userInfo = JSON.parse(this.LStorage('userInfo'));
        if (!userInfo) {
            return api.member();
        }
        return Promise.resolve(userInfo);
    }
};
