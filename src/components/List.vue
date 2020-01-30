<template>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular indeterminate
                                 :size="150"
                                 :width="8"
                                 color="green">
            </v-progress-circular>
        </div>
    </v-container>
    <v-container v-else-if="moviesList.length > 0" grid-list-xl>
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
    import OmdbService from '@/services/OmdbService';
    import { orderMoviesByDate } from '@/helpers/tools';

    export default Vue.extend({
        name: 'List',
        data: () => ({
            moviesList: [] as Array<any>,
            loading: true
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
            selectItem(id) {
              this.$router.push('/details/' + id)
            },
            fetchMovieList() {
                this.loading = true;
                OmdbService
                    .getMovies(this.searchQuery)
                    .then((response) => {
                        this.moviesList = orderMoviesByDate(response, 'desc');
                        this.loading = false
                    });
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
    .v-progress-circular {
        margin: 1rem
    }
</style>