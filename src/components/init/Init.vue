<template >
  <div>
    <input v-model="nickname" placeholder="Enter your nickname"/>
    <button @click="init" type="button">Enter</button>
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
</style>
