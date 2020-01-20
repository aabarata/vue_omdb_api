import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { IState, SearchType } from "./types/types";

// enable vue devtools 
Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.use(Vuex);

const state: IState = {
    searchQuery: 's',
    searchType: SearchType.MOVIES,
    isTyping: false
}

const mutations = {
    setSearchQuery(state: IState, query: string) {
        state.searchQuery = query;
    },
    setSearchType(state: IState, type: SearchType) {
        state.searchType = type;
    },
    setIsTyping(state: IState, isTyping: boolean) {
        state.isTyping = isTyping;
    }
}

const actions = {
    setSearchQuery: ({ commit }: ActionContext<IState, IState>, payload: string) => commit('setSearchQuery', payload),
    setSearchType: ({ commit }: ActionContext <IState, IState>, payload: SearchType) => commit('setSearchType', payload),
    setIsTyping: ({ commit }: ActionContext <IState, IState>, payload: boolean) => commit('setIsTyping', payload)
}

const getters = {
    searchQuery: (state: IState) => state.searchQuery,
    searchType: (state: IState) => state.searchType,
    isTyping: (state: IState) => state.isTyping,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})