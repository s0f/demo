<template>
    <transition name="fade">
        <div class="modal" v-if="isShow">
            <transition name="fade">
                <div class="weui-mask" @click="close" v-if="isShow"></div>
            </transition>
            <div class="weui-dialog weui-skin_android">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{title}}</strong></div>
                <div class="weui-dialog__bd">
                    <slot></slot>
                </div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<style type="text/scss" lang="scss">

    .modal{
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
</style>
<script>
    export default {
        data () {
            return {
                isShow: false
            };
        },
        props: {
            title: {
                type: String,
                default: false
            },
            confirm: {}
        },
        methods: {
            open () {
                this.isShow = true;
            },
            close () {
                this.isShow = false;
            }
        }
    };
</script>
