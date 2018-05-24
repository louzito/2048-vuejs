<template>
  <p v-if="Number.isInteger(score.score)" > {{ score.nickname }}: {{ score.score }} points, en {{ score.time }} </p>
</template>

<script>
export default {
  name: 'Score',
  props: ['score']
}
</script>

<style>

</style>
