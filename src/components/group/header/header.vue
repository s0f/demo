<template>
    <header class="header" v-if="headerState && headerState.show">
        <a href="javascript:void(0)" class="header-left group-header" v-if="headerState.showGroup && group">
            <img :src="group.logo" alt="" class="nav-user__pic">
            <h2>{{group.name}}</h2><i class="iconfont icon-arrow-bottom nav-refresh" v-if="headerState.showToggleGroupBtn"></i></a>
        <div class="header-right logo" v-if="headerState.showUser && user">
            <img :src="user.logo" alt="" class="nav-user__pic">
            <h2>{{user.nick}}</h2>
            <strong :class="[isShowOutLogin ? 'show' : '', 'signout']">
                <i class="iconfont icon-tuichu weui-tabbar__icon"></i></strong>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @import '../../../common/scss/commont-var';
    @import '../../../common/scss/mixin';
    /*头部*/
    .header {
        height: $navbarHeight;
        background: #fff;
        box-shadow: 0 0 4px 1px rgba($color: #ddd, $alpha: 0.9);
        overflow: hidden;

        .logo,
        .header-left {
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
    .header-right {
        float: right;
        margin-right: 2%;
    }

    .header-center {
        padding-top: 8px;
        line-height: 28px;
        text-align: center;
        overflow: hidden;

    .nav-user__pic {
        margin-right: .4px;
        vertical-align: middle;
    }

    em {
        font-style: normal;
    }

    }
    h2 {
        float: left;
        font-size: .4rem;
        font-weight: normal;
        color: #666;
        overflow: hidden;
        @include textOver(12 em);
        }

    .group-header {

        img {
            border-radius: inherit;
        }

        .icon-arrow-bottom {
            margin-left: .2rem;
            vertical-align: middle;
        }

    }
    .nav-user {
        float: right;
        margin: 8px;
        height: 30px;
        line-height: 30px;
        font-size: .4rem;
        font-weight: normal;

        h2 {
        @include textOver(6 em);
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
                headerState: null
            };
        },
        created () {
            this.setHeaderState();
        },
        props: ['user', 'group', 'type'],
        methods: {
            toggleGroup: function (event) {
                console.log(event);
            },
            setHeaderState () {
                switch (this.type) {
                    case 1:
                        this.headerState = {
                            show: true,
                            showToggleGroupBtn: true,
                            showUser: true,
                            showGroup: true
                        };
                        break;
                }
            }

        },
        computed: {
            isShowOutLogin: function () {
                return this.$store.state.config.simulationMode;
            }
        }
    };

</script>
