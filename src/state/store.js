import Vue from "vue";
import Vuex from "vuex";

// enable vue devtools 
Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.use(Vuex);

const state = {
    searchQuery: 's',
    searchType: 'movies',
    isTyping: false
}

const mutations = {
    setSearchQuery(state, query) {
        state.searchQuery = query;
    },
    setSearchType(state, type) {
        state.searchType = type;
    },
    setIsTyping(state, isTyping) {
        state.isTyping = isTyping;
    }
}

const actions = {
    setSearchQuery: ({ commit }, payload) => commit('setSearchQuery', payload),
    setSearchType: ({ commit }, payload) => commit('setSearchType', payload),
    setIsTyping: ({ commit }, payload) => commit('setIsTyping', payload)
}

const getters = {
    searchQuery: state => state.searchQuery,
    searchType: state => state.searchType,
    isTyping: state => state.isTyping,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})