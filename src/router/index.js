import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Leaderboard from '@/components/leaderboard/Leaderboard'
import Init from '@/components/init/Init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    }
  ]
})
