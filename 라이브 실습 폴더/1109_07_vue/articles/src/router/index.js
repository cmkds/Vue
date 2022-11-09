import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import NotFound404 from '@/views/NotFound404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },

  //숫자가 맨앞이라서 /:id 밑에 있으면 id를 먼저 읽기 때문에 위로 올렸음.
  {
    path: '/404-not-found',
    name: 'NotFound404',
    component: NotFound404
  },


  {
//article/:id 로 사용하는거 차이?
// 똑같나? 질문.

    path: '/:id',
    name: 'detail',
    component: DetailView
  },
  //지금 구조상 마지막에 /:id라 여기서 걸려서 없으면 404가 뜨게 운좋게 걸린거고
  //이 밑의 코드 작성해줘야함.
  
  // {
  //   path: '*',
  //   redirect: {name:'NotFound404'}
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
