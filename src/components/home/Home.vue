<template>
  <div class="jeu">
    <div id="header-game">
        Votre score :

    </div>
    <div id="board-game">
      <div v-for="boardLine in boardGame" class="board-line">
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
          this.boardGame = this.board.squares
          var html = ''
            this.boardGame.forEach(boardLine => {
              html += '<div class="board-line">'
              boardLine.forEach(boardTile => {
                html += '<div class="board-tile bt'+boardTile+'">'
                      + ((boardTile == 0) ? '' : boardTile)
                      + '</div>'
              })
              html += '</div>'
            });
            document.getElementById('board-game').innerHTML = html
            store.commit('setBoard', this.boardGame)
          }
     }
  },
  data () {
    return {
      boardGame: [],
      board: {}
    }
  },
  created() {
      this.board = board
      this.board.init(4)
      console.log('test this board')
      console.log(this.board)
      this.boardGame = this.board.squares
      console.log('test this boardGame')
      console.log(this.boardGame)
      console.log('fin test this boardGame')
      store.commit('setBoard', this.boardGame)
      window.addEventListener('keyup', this.myMethod)    
  }
}
</script>