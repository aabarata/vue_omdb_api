<template>
    <v-container>
        <ul v-bind:key="item.imdbID" v-for="item in fullResponse">
            <li>{{ item.Title }}</li>
        </ul>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Dashboard',

    mounted () {
        axios
        .get('http://www.omdbapi.com/?s=star&page=1&type=null&apikey=1003ce10')
        .then(response => {
            this.fullResponse = response.data.Search
        })
        .catch(error => {
            console.log(error)
        })
    },

    data: () => ({
        fullResponse: [],
        loading: true
    }),
};
</script>
