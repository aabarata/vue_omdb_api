<template>
    <div>
        <input type="text" :value="searchQuery" @input="setIsTyping(true)" v-on:keyup="setSearchQuery($event.target.value)"/>
        <select :value="searchType" v-on:change="setSearchType($event.target.value)">
            <option value="movies" >Movies</option>
            <option value="series" >Series</option>
        </select>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapGetters, mapActions } from 'vuex';

    export default Vue.extend({
        name: 'Search',
        computed: mapGetters('search', [
            'searchQuery',
            'searchType'
        ]),
        methods: mapActions('search', [
            'setSearchQuery',
            'setSearchType',
            'setIsTyping'
        ])
    });
</script>

<style lang="less" scoped>

</style>