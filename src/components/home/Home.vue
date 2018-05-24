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
  //computed: {
  //      board() {
  //          return store.getters.getBoard
  //      }
  //  },
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
                break;
            }
          this.boardGame = board.squares
          console.log(expr)
            console.log(this.boardGame)
            console.log(this.board.squares)
            
            
            //document.getElementById('board-game').innerHTML = ''
          console.log()
            this.boardGame = this.board.squares

            store.commit('setBoard', this.boardGame)
            //this.$router.push({path: '/'})
                    // on avance dans la stack vers l'autre page
              //      this.$router.forward()
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
      store.commit('setBoard', this.boardGame)
      window.addEventListener('keyup', this.myMethod)    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jeu {text-align: center;}
#board-game {display: inline-block;padding: 30px;margin: 20px auto;background:#000000}
#board-game .board-line {font-size: 0;display:inline-block;vertical-align: top;}
#board-game .board-tile {display: block;width: 100px;height: 100px;line-height: 100px;font-size: 50px;color: #000;font-weight: bold;background: #FFF;border: 1px solid lightgrey;border-radius: 5px;text-align: center;margin: 2px;}
#board-game .board-tile.bt2 {background: #E1E6FA;}
#board-game .board-tile.bt4 {background: #C4D7ED;}
#board-game .board-tile.bt8 {background: #ABC8E2;}
#board-game .board-tile.bt16 {background: #96B0C7;}
#board-game .board-tile.bt32 {background: #60A2E0;}
#board-game .board-tile.bt64 {background: #528ABF;}
#board-game .board-tile.bt128 {background: #4D83B5;}
#board-game .board-tile.bt256 {background: #375D81;color: #FFF;}
#board-game .board-tile.bt512 {background: #2A4863;color: #FFF;}
#board-game .board-tile.bt1024 {background: #183152;color: #FFF;}
#board-game .board-tile.bt2048 {background: #0F1E33;color: #FFF;}
#board-game .board-tile.bt4096 {background: #08111C;color: #FFF;}
</style>
