import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        board: null,
    },
    getters: {
        getBoard(state) {
            return state.board
        }
    },
    mutations: {
        setBoard(state, board) {
            state.board = board
        }
    }
})

export default store