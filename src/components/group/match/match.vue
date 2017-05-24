<template>
    <div class="page-match">
        <div class="operate">
            <div class="operate-left">
                <a href="#" class="weui-btn weui-btn_mini weui-btn_plain-primary start-battle-btn"
                   data-cache="start-battle-btn"><i class="iconfont icon-duoren"></i>发起团赛</a>
                <a href="/group/prepareAddPersonalMatch.html" class="weui-btn weui-btn_mini weui-btn_plain-default"><i
                    class="iconfont icon-dengji"></i>补登比赛</a>
            </div>
        </div>
        <table class="table match-list">
            <thead>
                <th></th>
                <th>A方</th>
                <th>比分</th>
                <th>B方</th>
                <th><i class="iconfont icon-shipin"></i></th>
            </thead>
            <tbody>
            <tr v-for="(item, index) in matchList">
                <td>{{index+1}}</td>
                <td>
                    <User :user="item.playerA1" type="middle"></User>
                </td>
                <td>
                    <span>{{item.scoreA}}</span>:<span>{{item.scoreB}}</span>
                </td>
                <td>
                    <User :user="item.playerB1" type="middle"></User>
                </td>
            </tr>
            </tbody>
        </table>
        <MugenScroll :handler="fetchData" :should-handle="!loading"></MugenScroll>
    </div>
</template>
<style type="text/scss" lang="scss">
    .match-list{
        background-color: #fff;
        margin-top: .2rem;
    }
    .operate {
        margin-top: .2rem;
        background-color: #ffffff;
        padding: .2rem 0 .2rem .2rem;
        .operate-left {
            text-align: left;
        }
        .weui-btn {
            vertical-align: middle;
        }
        .weui-btn_plain-default {
            margin-top: 0;
            margin-left: .2rem;
        }
        .iconfont {
            font-size: .4rem;
            margin-right: .1rem;
        }
    }
</style>
<script>
    import MugenScroll from 'vue-mugen-scroll';
    import User from 'components/common/User';
    import GroupApi from 'common/js/api/api-group';
    const api = new GroupApi();

    export default {
        data () {
            return {
                start: 0,
                limit: 5,
                loading: false,
                matchList: []
            };
        },
        methods: {
            fetchData: function () {
                const self = this;
                this.loading = true;
                setTimeout(function () {
                    api.match({
                        id: self.$store.state.group.id,
                        start: (self.start++) * self.limit,
                        limit: self.limit
                    }).then(res => {
                            console.log(res.data);
                            self.matchList = [...self.matchList, ...res.data];
                        });
                }, 200);
            }
        },
        components: {
            MugenScroll,
            User
        }
    };
</script>
