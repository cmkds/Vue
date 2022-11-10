import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import IndexView from '@/views/IndexView'
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
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/404-not-found',
    name: 'NotFound404',
    component: NotFound404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
