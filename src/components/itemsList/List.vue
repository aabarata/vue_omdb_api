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

<script>
    import { mapGetters } from 'vuex'
    import OmdbService from '../../services/omdb'
    import { orderMoviesByDate } from '../../helpers/tools'

    const omdbService = OmdbService('1003ce10');

    export default {
        name: 'List',
        data: () => ({
            moviesList: [],
            loading: true
        }),
        created() {
            /*this.$store.subscribe((mutation, state) => {
                console.log(mutation);
                console.log(state);
            });*/
        },
        mounted() {
            omdbService
                .fetchMovieList(this.searchQuery)
                .then((response) => {
                    console.log()
                    this.moviesList = orderMoviesByDate(response, 'desc');
                    this.loading = false
                });
        },
        computed: mapGetters([
                'searchQuery',
                'searchType'
        ]),
        methods: {
            selectItem (id) {
              this.$router.push('/item/' + id)
            }
        },
        watch: {
            searchQuery(newQuery) {
                this.loading = true;
                omdbService
                    .fetchMovieList(newQuery)
                    .then((response) => {
                        this.moviesList = orderMoviesByDate(response, 'desc');
                        this.loading = false
                    });
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .v-progress-circular {
        margin: 1rem
    }
</style>