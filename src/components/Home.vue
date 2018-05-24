<template>
  <div class="jeu" @keyup.space="method()">
    <div id="header-game">
        Votre score :
    </div>
    <div id="board-game" @refresh="myMethod">
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

export default {
  name: 'Home',
  methods: {
     myMethod: function (event) {
          var expr = event.which;
          switch (expr) {
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
              default:
                console.log('nop');
            }
            console.log(this.boardGame)
            console.log(this.board.squares)


            this.boardGame = this.board.squares
            //this.$emit('refresh')

            //return this.boardGame

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
      window.addEventListener('keyup', this.myMethod)    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
