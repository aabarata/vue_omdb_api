export function orderMoviesByDate(moviesList, order) {
    if (!moviesList || !Array.isArray(moviesList) || (moviesList && moviesList.lenght === 0)) {
        return [];
    }
    return moviesList.sort((a, b) => {
        return order === 'asc' ? +a.Year - (+b.Year) : +b.Year - (+a.Year);
    })
}