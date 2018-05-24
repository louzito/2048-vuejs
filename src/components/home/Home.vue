<template>
  <div class="jeu">
    <div id="header-game">
        Votre score : {{ board.points }}
        <span @click="refreshBoard"  class="refresh-btn">Rejouer</span>
    </div>
    <div id="board-game">
      <div v-for="boardLine in board.squares" class="board-line">
        <div v-for="boardTile in boardLine" :class="'board-tile bt'+boardTile">
          {{ boardTile == 0 ? '' : boardTile }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import board from '@/utils/board.js'
import store from '@/utils/store.js'

export default {
  name: 'Home',
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
          }
     },
     refreshBoard: function() {
       board.init(4)
       this.board= board
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