import { IState, SearchType } from "@/store/types/types";
import { ActionContext } from "vuex";

//Force that search Mutations, Actions and Getters can only be accessed through the namespace (not globally)
export const namespaced = true;

export const state: IState = {
    searchQuery: 's',
    searchType: SearchType.MOVIES,
    isTyping: false
}

export const mutations = {
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

export const actions = {
    setSearchQuery: ({ commit }: ActionContext<IState, IState>, payload: string) => commit('setSearchQuery', payload),
    setSearchType: ({ commit }: ActionContext <IState, IState>, payload: SearchType) => commit('setSearchType', payload),
    setIsTyping: ({ commit }: ActionContext <IState, IState>, payload: boolean) => commit('setIsTyping', payload)
}

export const getters = {
    searchQuery: (state: IState) => state.searchQuery,
    searchType: (state: IState) => state.searchType,
    isTyping: (state: IState) => state.isTyping,
}
