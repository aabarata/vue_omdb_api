<template>
    <v-app>
        <Banner></Banner>
        <router-view :key="$route.fullPath"></router-view>
    </v-app>
</template>

<script lang="ts">
    import Vue from "vue";
    import Banner from "@/components/Banner.vue";

    export default Vue.extend({
      name: "app",
      components: {
        Banner
      }
    });
</script>
