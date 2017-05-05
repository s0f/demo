/**
 * Created by ssf on 2017/1/20.
 */

// import baseUtil from '../base';
// import GroupApi from '../api/api-group';

// const api = new GroupApi();

export default {
/*
    // 检查是否进入群
    checkGroup ($vue) {
        // const groupId = PPA.LStorage('groupId');
        const pathname = $vue.$route.name; // .query.hasOwnProperty('groupId') ? 'groupId' : false;
        const excludeCheck = ['/resultConfirm/', '/resultConfirmLeader/']; // 不需要检查群的页面
        const needHash = ['group'];

        if (excludeCheck.indexOf(pathname) !== -1) {
            console.warn('本页面不需要验证群');
            return true;
        }

        if (needHash.indexOf(pathname) !== -1) {
            const groupId = $vue.$route.query.hasOwnProperty('groupId') ? $vue.$route.query.groupId : 'undefined';
            if (groupId !== 'undefined') {
                baseUtil.LStorage('groupId', groupId);
                baseUtil.getGroupInfo(groupId)
                    .then(function (res) {
                        baseUtil.LStorage('groupInfo', JSON.stringify(res));
                    });
            } else {
                api.member({}).then(function (res) {
                    const memberInfo = res.data;
                    baseUtil.getGroupInfo(memberInfo.defaultGroup.id)
                        .then(function (groupRes) {
                            baseUtil.LStorage('groupInfo', JSON.stringify(groupRes.data));
                        });
                }).catch(function (res) {
                    console.log(res);
                });
            }
        } else {
            // console.warn('没有默认小组');
        }
    }*/
};
