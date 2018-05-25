<template >
  <div class="player-form">
    <input v-model="nickname" placeholder="Nom du joueur"/>
    <button @click="init" type="button">Jouer</button>
    <button @click="initAutoplay" type="button">Autoplay</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import store from '@/utils/store.js'

export default {
  name: "Init",
  methods: {
    init() {
      store.commit('setNickname', this.nickname)
      let dateGame = {
        end: null,
        start: new Date()
      }
      store.commit('setDateGame', dateGame)
    },
    initAutoplay() {
      store.commit('setNickname', '[AI] Lou')
      let dateGame = {
        end: null,
        start: new Date()
      }
      store.commit('setDateGame', dateGame)
      store.commit('setAutoplay', true)
    }
  },
  data() {
    return {
      error: '',
      nickname: ''
    }
  }
}
</script>

<style>
  .player-form {
    width: 400px;
    padding: 30px;
    background: #000;
    margin: 70px auto;
  }
  .player-form input {
    display: block;
    height: 40px;
    line-height: 40px;
    width: 250px;
    margin: 10px auto;
    padding: 0 0 0 10px;
    border: 0;
  }
  .player-form button {
    display: block;
    margin: 0 auto 10px auto;
    height: 40px;
    width: 150px;
    text-transform: uppercase;
    font-weight: bold;
    background: #528ABF;
    color: #FFF;
    border: 0;
    cursor: pointer;
  }
  .player-form button:hover {
    background: #60A2E0;
  }
</style>
