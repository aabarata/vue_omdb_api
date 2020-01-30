import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://www.omdbapi.com`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

const apiKey: string = '1003ce10';

export default {
    async getMovies(searchQuery: string) {
        try {
            const response = await apiClient.get('/?s=' + searchQuery + '&page=1&type=null&apikey=' + apiKey);
            return response.data.Search;
        } catch (error) {
            console.log(error)
        }
    },
    async getMovie(IMDBid: string | number) {
        try {
            const response = await apiClient.get('/?i=' + IMDBid + '&apikey=' + apiKey);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
};