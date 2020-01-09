import axios from 'axios'

const OmdbService = (apiKey) => {

    const fetchMovieList = (searchQuery) => {
        return axios
            .get('http://www.omdbapi.com/?s=' + searchQuery + '&page=1&type=null&apikey=' + apiKey)
            .then(response => {
                return response.data.Search;
            })
            .catch(error => {
                console.log(error)
            })
    };

    const fetchMovieDetails = (IMDBid) => {
        return axios
            .get('http://www.omdbapi.com/?i=' + IMDBid + '&apikey=' + apiKey)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error)
            })
    }

    return { fetchMovieList, fetchMovieDetails };
};


export default OmdbService;