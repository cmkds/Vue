import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HellowView from '@/views/HellowView'
import LoginView from '@/views/LoginView'


Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/hello/:userName',
    name:'hello',
    component: HellowView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,

    beforeEnter(to,from,next){
      if (isLoggedIn ===true) {
        console.log('이미 로그인함')
        next({name:'home'})
      } else{
        next()
      }
    }

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})
// router.beforeEach((to,from,next)=> {
//   // console.log('to',to)
//   // console.log('from',from)
//   // console.log('next',next)
//   // next()

//   const isLoggedIn = true

//   const authPages = ['hello']

//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동!')
//     next({name:'login'})
//   }else{
//     console.log('to로 이동!')
//     next()
//   }

// })

export default router
