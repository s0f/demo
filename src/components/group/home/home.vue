<template>
    <section class="weui-tab__panel group__index">
        <div class="group">
            <div class="group__item-simple" v-if="group">
                <h3>
                    <img v-bind:src="group.logo" alt="" class="group__pic">
                    {{group.name}}
                    <!-- <span class="group__btn-disband">散</span> -->
                    <span v-if="group.isManager" class="user__code generateCode" :data-id="group.id"></span>
                </h3>
                <div class="group__item-in">
                    <span><i class="iconfont icon-yonghu"></i> {{group.owner.nick}}</span>&nbsp;&nbsp;
                    <span><i class="iconfont icon-shizhong"></i> {{group.createTime}}</span>
                </div>
                <div class="group__item-in">
                    <span><i class="iconfont icon-qunzu"></i><a v-bind:href="'/group/leaguer.html?groupId='+group.id"
                                                                class="user-link">{{group.memberCount}}人</a></span>
                    <span><i class="iconfont icon-bisai2"></i><a v-bind:href="'/group/match.html?groupId='+group.id"
                                                                 v-bind:class="[ group.matchCount ? 'user-link': 'tip-default']">{{group.matchCount}}</a>场</span>
                    <span><i class="iconfont icon-jiangpai"></i><a href=""
                                                                   v-bind:class="[ group.matchCount ? 'user-link' : 'tip-default']">{{group.rankCount}}</a>期</span>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    @import "../../../common/scss/mixin.scss";

    .group__index {
        padding: 0 2%;
        height: auto;
    }

    .group__item-simple {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        position: relative;
        width: 100%;
        margin: 4% auto;
        padding: 5px 0 10px 5px;
        box-sizing: border-box;
        box-shadow: 1px 1px 3px 1px #ddd;
        overflow: hidden;
        font-size: .4rem;
        color: #999;
        text-align: left;

    .group__pic {
        float: left;
        margin-right: 3%;
        width: .8rem;
        height: .8rem;
    }

    h3 {
        position: relative;
        width: 100%;
        margin-bottom: .1rem;
        font-size: .5rem;
        color: #666;
        font-weight: normal;
        line-height: 1.5;
    }

    .weui-flex {
        margin-right: auto;
    }

    .weui-flex__item {
        display: inline-block;
        height: 20px;
        line-height: 20px;

    &
    >
    i {
        margin-right: 3px;
        vertical-align: middle;
    }

    }
    .user__code {
        margin-top: .4rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAAAAACZuCawAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAP+Hj8y/AAAAxElEQVQ4y62SoRIDIQxE72ux6Nra/EPtaWwtGht7OhaNKDAwTYAeXOciInbehGzYLYDiBaETtkUk1KqIEC4gHr1EvkJB/ENp4ojXSnuBYFzMciQJKKfoZgp1UwJZkruQo+uOZsgNH4DAKzp38GQCRmRaS4h8CNNDpY64F7jTdXFuGs9O9y9CSB3yRmQIyTAY8+rinRLk2khJpIvUUY+zs3g3keLXHTiCJYSMsaUPrwt53djt7w+oiBlFCrOZ3PY45b5IfQCMVRhSVd/WnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMS0yNFQxNToyMjo0NCswODowMNMIW44AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTEtMjRUMTU6MjI6NDQrMDg6MDCiVeMyAAAAAElFTkSuQmCC);
        background-size: contain;
    }

    }
    .group__item-in {
        float: left;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 1rem;
        line-height: .6rem;

    span {
    @include textOver(8 em);
        font-size: .4rem;
        font-weight: normal;
    }

    }
</style>
<script>
    export default {
        data () {
            return {};
        },
        computed: {
            group () {
                return this.$store.state.group;
            }
        }
    };
</script>
