<template >
</template>

<script>
import store from '@/utils/store.js'

export default {
  name: "Autoplay",
  props: ['board'],
  created () {
    var board = this.board
    var arrayDir = [37,38,39,40]
    var time = 1
    function  movef () {
      time += 1
      setTimeout(function() {
        var eventKey = new Event('keyup')
        eventKey.which = arrayDir[Math.floor(Math.random()* 4)]
        window.dispatchEvent(eventKey)
        if (!board.over) {
          movef()
        } else {
          setTimeout(function () {
            var clickE = new Event('click')
            var sendScoreBtn =  document.getElementById('send-score-btn')
            sendScoreBtn.dispatchEvent(clickE)
          }, 1000)
        }
      }, time)
    }
    movef()
  },
  data() {
    return {
    }
  }
}
</script>
