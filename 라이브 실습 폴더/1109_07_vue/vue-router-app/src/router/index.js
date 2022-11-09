import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'

Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    //여기 있는 name을 
    //라우터 링크의 :to=" {name:'home'}
    //이렇게 사용할 수 있다.
    component: HomeView
  },
  {


    path: '/about',
    name: 'about',

    // 첫 로딩에 렌더링 하지 않고 해당 라우터가 동작할 때 컴포넌트를 렌더링 한다.
    //이방식을 사용하면 처음에 로딩할때 로딩하지 않고 about에 접근할때 로딩한다.
    // 이 컴포넌트는 처음에 값을 넣지 않고 라우터가 동작할때 동작하겠다.
    // lazy-loading 방식. 나중에 로딩하겠다.
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView,
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView,


    //라우터 가드는 라우터에다 건다.
    beforeEnter(to, from, next) {
      if(isLoggedIn === true) {
        console.log('이미 로그인 되어있음')
        next({ name: 'home'})
      } else{
        next()
      }

    }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404,
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },




  {
    //작성한 경로 외에 모든 경로를 *로 표시한다.
    path:'*',
    redirect: '/404',
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//전역가드는 다른 url로 이동할 때 호출된다.
// router.beforeEach((to, from, next)=>{
//   // console.log('to',to)
//   // console.log('from',from)
//   // console.log('next',next)
//   // next() //이렇게 next()를 호출해야 화면이 전환됨


//   //로그인 여부 확인 하는 변수
//   const isLoggedIn = false

//   //로그인이 필요한 페이지를 배열로 정리
//   const authPages = ['hello','home','about']


//   //@@@@@@@@반대로 하는 방법
//   // 로그인 하지 않아도 되는 페이지 정리.
//   // const allowAllpages = ['login']


//   // const isAuthRequired = !authPages.includes(to.name)

//   //@@@@@@@@@@@@@

  

//   //url이 이름이 authPages에 포함되는지 확인
//   const isAuthRequired = authPages.includes(to.name) 

//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동!')
//     next({ name: 'login' })
//   } else {
//     console.log('to로 이동!')
//     next()
//   }
// })

export default router
