<template>
  <tr v-if="Number.isInteger(score.score) && index < 5" :class="'number'+(index+1)">
    <td>{{ index + 1 }}</td>
    <td >{{ score.nickname }}</td>
    <td >{{ score.score }}</td>
    <td >{{ score.time }}   sec</td>
  </tr>
</template>

<script>
export default {
  name: 'Score',
  props: ['score','index']
}
</script>

<style>
.number1{
  color:goldenrod
}
</style>
