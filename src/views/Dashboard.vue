<template>
    <div class="dashboard">
        <Search></Search>
        <List></List>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Search from '@/components/Search.vue';
    import List from '@/components/List.vue';

    export default Vue.extend({
        name: 'Dashboard',
        components: {
            Search, 
            List
        }
    });
</script>

<style lang="less" scoped>

</style>