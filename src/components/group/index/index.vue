<template>
    <div class="weui-tab">
        <v-header :user="userInfo" :group="groupInfo" :type="pageType"></v-header>
        <transition  name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <v-footer :tabbarList="tabbarList"></v-footer>
    </div>
</template>
<style>
</style>
<script>
    import {mapState} from 'vuex';
    import Header from 'components/group/header/header';
    import Footer from 'components/group/footer/footer';
    import baseUtil from '../../../common/js/base';

    export default {
        name: 'app',
        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        data () {
            return {
                tabbarList: ['首页', '比赛', '排名', '成员', '管理']
            };
        },
        beforeCreate () {
            baseUtil.checkGroup();
            this.$store.dispatch('getUser');
            this.$store.dispatch('getConfig');
        },
        created () {
        },
        computed: mapState({
            groupInfo: state => state.group,
            userInfo: state => state.user,
            pageType: function () {
                return this.$route.meta.pageType;
            }
        })
    };

</script>
