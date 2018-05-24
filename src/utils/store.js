import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //debug: true,
    state: {
        board: null,
        //message: 'Bonjour !'
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