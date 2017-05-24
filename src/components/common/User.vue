<template>
    <div :class="['user', 'user-' + type]">
        <img :src="user.logo" alt="">
        <h2>{{user.nick}}</h2>
    </div>
</template>
<style type="text/scss" lang="scss">
    @import "../../common/scss/mixin";
    $userHegiht: .8rem;
    .user{
        width: 3rem;
        img{
            float: left;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
        h2{
            @include textOver(6em);
            height: $userHegiht;
            line-height: $userHegiht;
            margin-left: 1rem;
            text-align: left;
            font-size: .34rem;
        }
    }
    .user-middle{
        img{
            width: $userHegiht;
            height: $userHegiht;
        }
    }
</style>
<script>
    export default {
        data () {
            return {};
        },
        props: {
            user: Object,
            type: {
                type: String,
                default: 'middle'
            }
        }
    };
</script>
