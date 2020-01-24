<template>
    <div>
        <input type="text" :value="searchQuery" @input="setIsTyping(true)" v-on:keyup="setSearchQuery($event.target.value)"/>
        <select :value="searchType" v-on:change="setSearchType($event.target.value)">
            <option value="movies" >Movies</option>
            <option value="series" >Series</option>
        </select>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Search',
        computed: mapGetters([
            'searchQuery',
            'searchType'
        ]),
        methods: mapActions([
            'setSearchQuery',
            'setSearchType',
            'setIsTyping'
        ])
    };
</script>

<style lang="less" scoped>

</style>