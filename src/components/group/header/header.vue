<template>
    <header class="header">
        <a href="/group/index.html" class="logo">
            <img :src="info.logo" alt="" class="nav-user__pic">
            <h2><span>{{info.nick ? info.nick : info.name}}</span></h2>
        </a>
        <div class="nav-user">
            <i class="iconfont icon-tuichu weui-tabbar__icon" v-if="isShowOutLogin" v-on:click="toggleGroup"></i>
            <i class="iconfont icon-qiehuan weui-tabbar__icon" v-if="isShowToggleGroupBtn" v-on:click="toggleGroup"></i>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @import '../../../common/scss/commont-var';
    @import '../../../common/scss/mixin';
    /*头部*/
    .header {
        height: $navbarHeight;
        box-shadow: 0 0 4px 1px rgba($color: #ddd, $alpha: 0.9);
        overflow: hidden;
        .logo {
            float: left;
            margin: 8px;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            background-size: contain;
            vertical-align: middle;
            img {
                float: left;
                margin-right: .1rem;
            }

        }
        h2 {
            float: left;
            max-width: 12em;
            font-size: .4rem;
            font-weight: normal;
            color: #666;
            overflow: hidden;
        }
        .nav-user {
            float: right;
            margin: 8px;
            height: 30px;
            line-height: 30px;
            font-size: .4rem;
            font-weight: normal;

            h2 {
                @include textOver(6em);
            }
        }
        .nav-user__pic {
            position: relative;
            display: inline-block;
            margin-right: .2rem;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #ddd;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .nav-user__pic + span {
            margin: 0 6px;
            font-size: 16px;
            color: $activeColor;
        }
        .group-header img {
            border-radius: inherit;
        }

        .signout {
            display: none;
            float: left;
            margin-left: .1rem;
            line-height: $navbarHeight;
            height: $navbarHeight;
        }
        .nav-tools {
            float: right;
            margin-left: auto;
            margin-right: 2%;
            line-height: $navbarHeight;
        }
        .nav-refresh {
            color: #666;
            i {
                font-size: .54rem;
            }
        }
        .logo + .nav-user {
            position: absolute;
            right: 0;
            top: 0;
        }
        .icon-qiehuan {
            color: #666;
            text-decoration: none;
        }
    }

</style>
<script>
export default {
    data () {
        return {
            isShowOutLogin: false,
            isShowToggleGroupBtn: true
        };
    },
    created () {
    },
    props: ['info'],
    methods: {
        toggleGroup: function (event) {
            console.log(event);
        }
    }
};

</script>
