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

<script>
    import OmdbService from '../../services/omdb'

    const omdbService = OmdbService('1003ce10');

    export default {
      props: ['id'],
      data () {
        return {
          item: ''
        }
      },
      mounted () {
        omdbService
            .fetchMovieDetails(this.id)
            .then((response) => {
                this.item = response;
            })
      }
    }
</script>

<style>

</style>