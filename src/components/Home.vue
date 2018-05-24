<template>
  <div class="jeu" @keyup.space="method()">
    <div id="header-game">
        Votre score :
    </div>
    <div id="board-game">
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
                board.move('left')
                console.log('gauche')
                break;
              case 38:
                board.move('up')
                console.log('haut')
                break;
              case 39:
                board.move('right')
                console.log('droite')
                break;
              case 40:
                board.move('down')
                console.log('bas')
                break;
              default:
                console.log('nop');
            }
          console.log(board)
          console.log(board.squares)


        }
  },
  created() {
      board.init(4)
       window.addEventListener('keyup', this.myMethod)      
  },
  data () {
    return {
      keypressed: '',
      boardGame: {}
    }
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
