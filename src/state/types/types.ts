export enum SearchType {
    MOVIES = 'movies',
    SERIES = 'series'
}

export interface IState {
    searchQuery: string;
    searchType: SearchType;
    isTyping: boolean;
}