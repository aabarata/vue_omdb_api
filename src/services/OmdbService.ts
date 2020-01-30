import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://www.omdbapi.com`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

const apiKey: string = '1003ce10';

export default {
    async getMovies(searchQuery: string) {
        return await apiClient.get('/?s=' + searchQuery + '&page=1&type=null&apikey=' + apiKey);
    },
    async getMovie(IMDBid: string) {
        return await apiClient.get('/?i=' + IMDBid + '&apikey=' + apiKey);
    }
};