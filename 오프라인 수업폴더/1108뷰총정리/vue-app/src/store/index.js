import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num : 30,
  },
  getters: {
    doubleNum(state){
      return state.num * 2
    },
    doubleNumMinus1(state){
      return state.num*2 -1
    },
    doubleNumMinus2(state,getters){
      return getters.doubleNum -2
    },
  },
  mutations: {
    // state 변경
    ADD_NUM(state){
      state.num += 1
    }
  },
  actions: {
    // 비동기 작업
    addNum(context){
      axios({
        url
      })
        .then((res) => {
          context.commit('ADD_NUM')
        })
        .catch((err) => console.log(err))
      
      context.commit('ADD_NUM')
    }
  },
  modules: {
  }
})
