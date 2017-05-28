<template>
    <div id="app">
        <router-view></router-view>
        <Loading :isLoading="isLoading"></Loading>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Loading from 'components/common/Loading';
    export default {
        name: 'app',
        computed: mapState({
            isLoading: state => state.pageLoading.isLoading
        }),
        components: {
            Loading
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>
