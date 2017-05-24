<template>
    <div class="spinner-wrap" v-show="isLoading">
        <div class="spinner dropload-refresh">
            <div class="three-bounce">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .spinner-wrap{
        position: fixed;
        top: 46px;
        left: 0;
        bottom: 62px;
        right: 0;
        background: #ffffff;
        z-index: 1024;
    }
    .spinner {
        position: absolute;
        width: 100px;
        height: 60px;
        left: 50%;
        top: 50%;
        margin-top: -30px;
        margin-left: -50px;
    }

    .spinner .three-bounce {
        position: relative;
        text-align: center;
        top: 50%;
        bottom: 50%;
        margin-top: -9px
    }

    .spinner .three-bounce>div {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        top: 50%;
        margin-top: -9px;
        background: #aeadba;
        -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
        animation: bouncedelay 1.4s infinite ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both
    }

    .spinner .three-bounce .one {
        -webkit-animation-delay: -.32s;
        animation-delay: -.32s
    }

    .spinner .three-bounce .two {
        -webkit-animation-delay: -.16s;
        animation-delay: -.16s
    }

</style>
<script>
    export default {
        data () {
            return {
            };
        },
        props: ['isLoading']
    };
</script>
