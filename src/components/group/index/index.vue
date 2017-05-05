<template>
    <div class="weui-tab">
        <v-header :info="isIndexPage ? userInfo : groupInfo"></v-header>
        <transition  name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <v-footer :tabbarList="tabbarList"></v-footer>
    </div>
</template>
<style>
</style>
<script>
    import Header from 'components/group/header/header';
    import Footer from 'components/group/footer/footer';
//    import groupUtil from 'common/js/group/index';
    import baseUtil from '../../../common/js/base';

    export default {
        name: 'app',
        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        data () {
            return {
                tabbarList: ['首页', '比赛', '排名', '成员', '管理'],
                groupInfo: {},
                userInfo: {},
                isIndexPage: false
            };
        },
        beforeCreate () {
            baseUtil.checkGroup();
        },
        created () {
//            this.groupInfo = baseUtil.getGroupInfo();
        }
    };

</script>
