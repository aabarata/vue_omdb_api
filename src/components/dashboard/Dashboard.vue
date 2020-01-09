<template>
    <div class="dashboardWrapper">
        <Search></Search>
        <List query=""></List>
    </div>
</template>

<script>
    import Search from '../search/Search'
    import List from '../itemsList/List'

    export default {
        name: 'Dashboard',
        components: {
            Search,
            List
        }
    };
</script>