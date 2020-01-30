import Vue from "vue";
import Vuex from "vuex";
import * as search from "./modules/search"

// enable vue devtools 
Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        search
    }
})