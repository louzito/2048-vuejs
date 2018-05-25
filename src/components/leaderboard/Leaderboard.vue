<template>
    <div>
        <div v-if="nickname" class="info-last game">
          <h2>Dernière partie</h2>
          Player: {{ nickname }}<br>
          <span v-if="score">Score : {{ score }} points</span><br>
          <span v-if="durationGame">en {{ durationGame }} sec</span><br>
        </div>
        <router-link to="/">Refaire une partie</router-link>
        <h2>Liste des scores</h2>
        <score v-for="score in scores" :score="score" ></score>
    </div>
</template>

<script>
import http from '@/utils/http.js'
import Score from '@/components/leaderboard/Score'
import store from '@/utils/store.js'

export default {
    name: 'Leaderboard',
    components: { Score },
    created() {
      let boardPrevGame = store.getters.getBoard
      this.nickname = store.getters.getNickname
      this.score = (boardPrevGame) ? boardPrevGame.points : null
      this.durationGame = store.getters.getDurationGame
      if (boardPrevGame && boardPrevGame.over) {
        
        http
          .get(store.getters.getNickname + '/' + this.score + '/' + this.durationGame)
          .then(response => {})
          .catch(error => console.log(error))
      }
      http
        .get('json')
        .then(response => {
          this.scores = response.data
          this.scores.forEach((element, index) => {
            element.score = Number(element.score);
          })
        })
        .catch(error => this.error = JSON.parse(error.request.response)['error'])
    },
    data() {
      return {
        nickname: null,
        score: null,
        durationGame: null,
        scores: { nickname: '', score: '', time: '' }
      }
    }
}
</script>

<style>
</style>
