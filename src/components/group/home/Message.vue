<template>
<li v-if="message.messageType == PERSONAL_MATCH && message.messageData.matchMsgType == 'REGISTER'">
    <div class="msg__type">
        <span class="msg__icon"><i class="msg-icon__type bg-lb">登</i>
                <i class="iconfont icon-gesai"></i></span>
    </div>
    <div class="msg__content">
        <h5>
            <span class="tip-firebrick">{{message.messageData.triggerName}}</span>刚登记比赛，正在等待
            <span class="tip-firebrick" v-if="message.messageData.targgerId == message.messageData.playerA1.id || message.messageData.triggerId == (message.messageData.playerA2 &&message.messageData.playerA2.id) ">
                {{message.messageData.playerB1.nick}}
            </span>
            <span v-if="message.messageData.playerB2">或<span class="tip-firebrick">{{message.messageData.playerB2.nick}}</span>确认：</span>
            <span class="tip-firebrick" v-else>{{message.messageData.playerA1.nick}}</span>
            <span v-if="message.messageData.playerA2">或<span class="tip-firebrick">{{message.messageData.playerA2.nick}}</span>确认：</span>

            <span class="tip-lightblue">{{message.messageData.playerA1.nick}}</span>
            <span v-if="message.messageData.playerA2">/<span class="tip-lightblue" >{{message.messageData.playerA2.nick}}</span></span>

            <span class="tip-orange">{{message.messageData.scoreA}}:{{message.messageData.scoreB}}</span>
            <span class="tip-lightblue">{{message.messageData.playerB1.nick}}</span>
            <span v-if="message.messageData.playerB2">/<span class="tip-lightblue">{{message.messageData.playerB2.nick}}</span></span>

        </h5>
    </div>
</li>
<li v-else-if="message.messageType == TEAM_MATCH && message.messageData.matchMsgType == 'REGISTER'">
    <div class="msg__type">
        <span class="msg__icon"><i class="msg-icon__type bg-lb">登</i>
            <i class="iconfont icon-bisai2"></i></span>
    </div>
</li>
<li v-else-if="message.messageType == TEAM_MATCH && message.messageData.status == 'CONFIRM' && message.messageData.matchMsgType == 'CONFIRM'">
    <div class="msg__type">
            <span class="msg__icon"><i class="msg-icon__type bg-lg">定</i>
                <i class="iconfont icon-bisai2"></i></span>
    </div>
    <div class="msg__content"><h5>

            <span v-if="message.messageData.creatorId == message.messageData.captainA.id">B方队长<span class="tip-firebrick">{{message.messageData.triggerName}}</span>已确认A方队长<span class="tip-firebrick">{{item.messageData.captainA.nick}}</span>登记的团赛，比赛<span class="tip-darkgreen">生效</span>：</span>

            <span v-else-if="message.messageData.creatorId == message.messageData.captainB.id">B方队长<span class="tip-firebrick">{{message.messageData.captainB.nick}}</span>已确认A方队长<span class="tip-firebrick">{{message.messageData.captainA.nick}}</span>登记的团赛，比赛<span class="tip-darkgreen">生效</span>：</span>

            <span v-else>{{message.messageData.triggerPart}}队长<span class="tip-firebrick">{{message.messageData.triggerName}}</span>已确认<span class="tip-firebrick">{{message.messageData.creatorName}}</span>登记的比赛</span>

            <span class="tip-lightblue">{{message.messageData.captainA.nick}}</span>(队) <span class="tip-orange">{{message.messageData.scoreA}}:{{message.messageData.scoreB}}</span> <span class="tip-lightblue">{{message.messageData.captainB.nick}}</span>(队)
            </h5>
        <p class="msg__creator"><a :href="'/group/videoTeam.html?matchId='+message.messageData.id" class="user-link txt-u">详情</a><span class="msg__creator-time">{{message.createTime}}</span></p></div>

</li>
</template>

<script>
	export default {
		name: 'message',
		data () {
			return {
                PERSONAL_MATCH: 'PERSONAL_MATCH',
                TEAM_MATCH: 'TEAM_MATCH'
            }
		},
        props: ['message']
	}
</script>

<style scoped>
    .msg__type {
        float: left;
        p {
            line-height: 1.8;
            font-size: .3rem;
            color: #999;
            text-align: center;
        }
        strong {
            font-weight: normal;
        }
    }
    .msg__icon {
        position: relative;
        display: block;
        width: 1.4rem;
        height: 1.4rem;
        background-color: #fff;
        line-height: 1.4rem;
        border: 1px solid #d1d1d1;
        text-align: center;
        border-radius: 4px;

        .iconfont {
            font-size: 1rem;
            color: #999;
        }

    }
    .msg-icon__type{
        position: absolute;
        right: -.1rem;
        top: -.1rem;
        width: .4rem;
        height: .4rem;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        line-height: .4rem;
        border-top-right-radius: 4px;
        font-style: normal;
    }
    .msg__creator {
        position: absolute;
        right: .1rem;
        bottom: .2rem;
        width: 64%;
        padding-left: .4rem;
        text-align: right;
        font-size: .36rem;
        color: #999;
    }
</style>
