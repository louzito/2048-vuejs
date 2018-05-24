<template>
    <div>
        <input v-model="score.nickname" placeholder="Enter your nickname">
        <!-- {{ score.score }} -->
        <p>Score : 100 points</p>
        <button @click="sendScore">Send</button>
        <score v-for="score in scores" :score="score" ></score>
    </div>
</template>

<script>
import http from '@/utils/http.js'
import Score from '@/components/leaderboard/Score'

export default {
    name: 'Leaderboard',
    components: { Score },
    methods: {
      sendScore() {
        this.score.time = new Date().toISOString()
        http
          // .post(this.score.nickname + '/' + this.score.score + '/' + time)
          .get(this.score.nickname + '/100/' + this.score.time)
          .then(response => {})
          .catch(error => console.log(error))
      }
    },
    created() {
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
        score: { nickname: '', score: '', time: '' },
        scores: { nickname: '', score: '', time: '' }
      }
    }
}

</script>

<style>
</style>
