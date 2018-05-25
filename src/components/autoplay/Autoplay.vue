<template >
</template>

<script>
import store from '@/utils/store.js'

export default {
  name: "Autoplay",
  props: ['board'],
  created () {
    setTimeout(function () {
        this.board.move('down')
        this.board.move('left')
        if (this.board.hasMoved) {
            this.board.move('right')
        }
        if (this.board.hasMoved) {
            this.board.move('up')
        }
    },2000);
  },
  data() {
    return {
    }
  }
}
</script>
