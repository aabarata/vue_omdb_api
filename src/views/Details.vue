<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>welcome to single movie component</h2>
                <div>{{movie}}</div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
      props: {
        movie: {
          type: Object,
          required: true
        }
      },
    });
</script>

<style lang="less" scoped>

</style>