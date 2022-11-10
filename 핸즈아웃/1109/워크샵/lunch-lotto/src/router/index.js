import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLotto from '@/views/TheLotto'
import TheLunch from '@/views/TheLunch'


Vue.use(VueRouter)

const routes = [
  {
    path: '/lunch',
    name: 'lunch',
    component: TheLunch

  },
  {
    path: '/lotto/:num',
    name: 'lotto',
    component: TheLotto

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
