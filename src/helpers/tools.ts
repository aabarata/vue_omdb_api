export function orderMoviesByDate(moviesList: Array<any>, order: 'asc' | 'desc') {
    if (!moviesList || !Array.isArray(moviesList) || (moviesList && moviesList.length === 0)) {
        return [];
    }
    return moviesList.sort((a, b) => {
        return order === 'asc' ? +a.Year - (+b.Year) : +b.Year - (+a.Year);
    })
}