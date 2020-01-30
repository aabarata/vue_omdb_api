<template>
    <v-container v-if="moviesList.length > 0" grid-list-xl>
        <v-layout wrap>
            <v-flex xs6
                    md4
                    lg3
                    v-for="(item, index) in moviesList"
                    :key="index"
                    mb-2>
                <v-card>
                    <v-img :src="item.Poster"></v-img>
                    <v-card-title primary-title>
                        <div>
                            <h2>{{item.Title}}</h2>
                            <div>Year: {{item.Year}}</div>
                            <div>Type: {{item.Type}}</div>
                            <div>IMDB-id: {{item.imdbID}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions class="justify-center">
                        <v-btn text
                               color="green"
                               @click="selectItem(item.imdbID)">View</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container v-else>
        No movies found
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapGetters, mapActions } from 'vuex';
    import { debounce } from 'lodash';
    import NProgress from 'nprogress';
    import OmdbService from '@/services/OmdbService';
    import { orderMoviesByDate } from '@/helpers/tools';

    export default Vue.extend({
        name: 'List',
        data: () => ({
            moviesList: [] as Array<any>
        }),
        created() {
            /*this.$store.subscribe((mutation, state) => {
                console.log(mutation);
                console.log(state);
            });*/
        },
        mounted() {
            this.fetchMovieList();
        },
        computed: mapGetters('search', [
            'searchQuery',
            'searchType',
            'isTyping'
        ]),
        methods: {
            ...mapActions('search', [
                'setIsTyping'
            ]),
            selectItem(id: string) {
              this.$router.push({ name: 'Details', params: { id } })
            },
            async fetchMovieList() {
                NProgress.start();
                try {
                    const response = await OmdbService.getMovies(this.searchQuery)
                    this.moviesList = orderMoviesByDate(response.data.Search, 'desc');
                    NProgress.done();
                } catch (error) {
                    //Connection error, redirect to other page
                }
            }
        },
        watch: {
            searchQuery: debounce(function (this) {
                this.setIsTyping(false);
            }, 500),
            isTyping: function (value) {
              if (!value) {
                this.fetchMovieList();
              }
            }

        }
    });
</script>

<style lang="less" scoped>

</style>