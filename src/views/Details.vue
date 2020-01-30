<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>welcome to single movie component</h2>
                <div>{{item}}</div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";
    import OmdbService from '@/services/OmdbService';

    export default Vue.extend({
      props: {
        id: {
          type: String,
          required: true
        }
      },
      data () {
        return {
          item: ''
        }
      },
      mounted () {
        OmdbService
            .getMovie(this.id)
            .then((response) => {
                this.item = response;
            })
      }
    });
</script>

<style lang="less" scoped>

</style>