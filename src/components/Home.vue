<template>
  <div class="jeu">
    <div id="header-game">
        Votre score :
    </div>
    <div id="board-game">
    </div>
    <div>
      <button>Haut</button>
      <button>Bas</button>
      <button>Gauche</button>
      <button>Droite</button>
    </div>
  </div>
</template>

<script>

import board from '@/utils/board.js'

export default {
  name: 'Home',
  created() {
      board.init(4)

      console.log(board.squares)
      // la fonction move ne renvoie rien, elle re-calcule juste
      console.log(board.move('up'))
      console.log(board.move('down'))

      console.log(board.squares)        
  },
  data () {
    return {
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
