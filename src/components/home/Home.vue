<template>
  <div class="jeu">
    <init v-if="!nickname" ></init>
    <div v-else>
      <div id="header-game">
        <div class="info-game">
          Player : {{ nickname }}<br>
          Votre score : {{ board.points }}<br>
        </div>
        <span @click="refreshBoard"  class="refresh-btn">Rejouer</span>
      </div>
      <div v-if="board.over" class="game-over-form">
        Vous avez perdu :'(<br>
        <button @click="sendScore">Envoyer votre score</button>
      </div>
      <div v-else id="board-game">
        <div v-for="boardLine in board.squares" class="board-line">
          <div v-for="boardTile in boardLine" :class="'board-tile bt'+boardTile">
            {{ boardTile == 0 ? '' : boardTile }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import board from '@/utils/board.js'
import store from '@/utils/store.js'
import Init from '@/components/init/Init'

export default {
  name: 'Home',
  components: { Init },
  computed: {
    board() {
      return store.getters.getBoard
    },
    nickname() {
      return store.getters.getNickname
    }
  },
  methods: {
     myMethod: function (event) {
          let touchOk = [38,39,40,37]
          if(touchOk.includes(event.which)) {
            switch (event.which) {
              case 37:
                this.board.move('left')
                break;
              case 38:
                this.board.move('up')
                break;
              case 39:
                this.board.move('right')
                break;
              case 40:
                this.board.move('down')
                break;
            }
            this.$forceUpdate()
            store.commit('setBoard', this.board)
          }
     },
     refreshBoard: function() {
       this.board.init(4)
       this.$forceUpdate()
     },
     sendScore: function () {
       this.$router.push({path: '/leaderboard'})
       this.$router.forward()
     }
  },
  data () {
    return {
      board: {}
    }
  },
  created() {
      this.board = board
      this.board.init(4)
      store.commit('setBoard', this.board)
      window.addEventListener('keyup', this.myMethod)
  }
}
</script>
