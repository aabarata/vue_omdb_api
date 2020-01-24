import axios from 'axios'

const OmdbService = () => {

    const apiKey: string = '1003ce10';

    const fetchMovieList = async (searchQuery: string) => {
        try {
            const response = await axios.get('http://www.omdbapi.com/?s=' + searchQuery + '&page=1&type=null&apikey=' + apiKey);
            return response.data.Search;
        } catch (error) {
            console.log(error)
        }
    };

    const fetchMovieDetails = async (IMDBid: string | number) => {
        try {
            const response = await axios.get('http://www.omdbapi.com/?i=' + IMDBid + '&apikey=' + apiKey);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    return { fetchMovieList, fetchMovieDetails };
};


export default OmdbService;