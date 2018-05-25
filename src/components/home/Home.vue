<template>
  <div class="jeu">
    <init v-if="!nickname" ></init>
    <div v-else>
      <div id="header-game">
        <div class="info-game">
          Player : {{ nickname }}<br>
          Votre score : {{ board.points }}<br>
        </div>
        <span @click="refreshBoard"  class="refresh-btn" id="refreshBtn">Rejouer</span>

      </div>
      <div v-if="board.over" class="game-over-form">
        Vous avez perdu en {{ duration }} .sec :'(<br>
        <button @click="sendScore">Envoyer votre score</button>
      </div>
      <div v-else id="board-game">
        <div v-for="boardLine in board.squares" class="board-line">
          <div v-for="boardTile in boardLine" :class="'board-tile bt'+boardTile">
            {{ boardTile == 0 ? '' : boardTile }}
          </div>
        </div>
      </div>
      <autoplay v-if="autoplay" :board="board"></autoplay>
    </div>
  </div>
</template>

<script>

import board from '@/utils/board.js'
import store from '@/utils/store.js'
import Init from '@/components/init/Init'
import Autoplay from '@/components/autoplay/Autoplay'

export default {
  name: 'Home',
  components: { Init, Autoplay },
  computed: {
    nickname() {
      return store.getters.getNickname
    },
    duration() {
      return store.getters.getDurationGame
    },
    autoplay() {
      return store.getters.getAutoplay
    }
  },
  methods: {
     direction: function (event) {
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

            // Si game over et qu'on à pas encore stocké la date de fin
            if(this.board.over && store.getters.getEndDate == null){
              // On met a jour notre store avec les dates start & end
              let dateGame = {
                start: store.getters.getStartDate,
                end: new Date()
              }
              store.commit('setDateGame', dateGame)
            }

            this.$forceUpdate()
            store.commit('setBoard', this.board)
          }
     },
     refreshBoard: function() {
       // Init un nouveau board
       this.board.init(4)
       // On met a jour notre store avec le new board
       store.commit('setBoard', this.board)
       // On reset la date au moment au on rejoue.
       let dateGame = {
          start: new Date(),
          end: null
        }
        // On met a jour le store
       store.commit('setDateGame', dateGame)
       // On force l'update de la page
       this.$forceUpdate()
     },
     sendScore: function () {
       this.$router.push({path: '/leaderboard'})
       this.$router.forward()
     },
     autoplayFunc: function() {
       console.log('ok')
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
      window.addEventListener('keyup', this.direction)
  }
}
</script>
