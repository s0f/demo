<template>
    <footer class="weui-tabbar">
        <router-link to="/group" class="weui-tabbar__item" exact>
            <i class="iconfont icon-shouyetianchong weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">{{tabbarList[0]}}</p>
        </router-link>

        <router-link :to="{name:'match'}" class="weui-tabbar__item">
            <i class="iconfont icon-bisai weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">{{tabbarList[1]}}</p>
        </router-link>

        <router-link :to="{name:'ranking'}" class="weui-tabbar__item" data-not>
            <i class="iconfont icon-paiming weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">{{tabbarList[2]}}</p>
        </router-link>

        <router-link :to="{name:'leaguer'}" class="weui-tabbar__item">
            <i class="iconfont icon-qunzu weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">{{tabbarList[3]}}</p>
        </router-link>

        <router-link :to="{name:'manage'}" class="weui-tabbar__item ">
            <i class="iconfont icon-guanli weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">{{tabbarList[4]}}</p>
        </router-link>
    </footer>
</template>
<style lang="scss">
</style>
<script>
    export default {
        data () {
            return {
            };
        },
        props: ['tabbarList']
    };
</script>
