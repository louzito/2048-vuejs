<template>
    <div>
        <div v-if="nickname" class="info-last game">
          <h2>Dernière partie</h2>
          Player: {{ nickname }}<br>
          <span v-if="score">Score : {{ score }} points</span><br>
          <span v-if="durationGame">en {{ durationGame }} sec</span><br>
        </div>
        <router-link to="/">Refaire une partie</router-link>
        <h1>Liste des scores</h1>

        <h2>Top 5</h2>
        <table class="table" id="leaderboard">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nickname</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <score v-for="(score, index) in scores" :score="score" :key="index" :index="index" ></score>
          </tbody>
        </table>
        
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
          let fiveTop = []
          let score2 = []

          this.scores.forEach((element, index) => {
            element.score = Number(element.score);

            if (!isNaN(element.score) && Math.max(...score2) < element.score){
              score2.push(element.score)
              fiveTop.push(element)
            }
            
          })

          this.scores = fiveTop.reverse()

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


#leaderboard {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#leaderboard td, #leaderboard th {
    border: 1px solid #ddd;
    padding: 8px;
}

#leaderboard tr:nth-child(even){background-color: #f2f2f2;}

#leaderboard tr:hover {background-color: #ddd;}

#leaderboard th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: black;
    color: white;
}
</style>
