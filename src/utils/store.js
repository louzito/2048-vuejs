import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        board: null,
        nickname: null,
        dateGame: {
            start: null,
            end: null
        }
    },
    getters: {
        getBoard(state) {
          return state.board
        },
        getNickname(state) {
          return state.nickname
        },
        getStartDate(state){
            return state.dateGame.start
        },
        getEndDate(state){
            return state.dateGame.end
        },
        getDurationGame(state) {
            let dif = state.dateGame.end - state.dateGame.start 
            dif = dif/1000
            let result = Math.abs(dif)
            return result
        },
    },
    mutations: {
        setBoard(state, board) {
            state.board = board
        },
        setNickname(state, nickname) {
            state.nickname = nickname
        },
        setDateGame(state, date) {
            state.dateGame = date
        },
    }
})

export default store
