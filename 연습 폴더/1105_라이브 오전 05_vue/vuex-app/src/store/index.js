import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      message: '메세지는 store의 state에 담겨있다.',
      a: 'a'
  },
  getters: {
    messageLength(state){
      return state.message.length
    },

    // messageLength 를 이용해서 새로운 값을 계싼
    doubleLength(state, getters) {
      return getters.messageLength * 2
    },
  
    
  },
  mutations: {
    CHANGE_MSG(state, message){
      console.log(state)
      console.log(message)

      state.message = message
    },
  },
  actions: {

    //
    changeMsgStore(context, message) {
      console.log(context)
      // console.log(message)

      context.commit('CHANGE_MSG', message)

    },

  },
  modules: {
  }
})
