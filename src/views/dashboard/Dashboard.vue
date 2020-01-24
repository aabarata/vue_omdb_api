<template>
    <div class="dashboard">
        <Search></Search>
        <List></List>
    </div>
</template>

<script>
    import Search from './../../components/search/Search'
    import List from './../../components/itemsList/List'

    export default {
        name: 'Dashboard',
        components: {
            Search,
            List
        }
    };
</script>

<style lang="less" scoped>

</style>