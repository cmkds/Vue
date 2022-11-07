import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'message in store',
  },
  getters: {
    messageLength(state){
      return state.message.length

    },

  },
  mutations: {

    //mutations의 첫번째 인자는 state이다.
    // state를 조작하는 친구기 때문에.

    // 함수명에 전부 대문자를 쓰는 이유은
    // actions랑 구분하기 위해서이다.
    // vuex에 권장되는 methods 네임이다.
    CHANGE_MESSAGE(state, newMessage){
      // console.log(state)
      // console.log(newMessage)
      state.message= newMessage  
      //여기가 mutations가 하는 딱한가지.
      //state를 조작

    }
  },
  actions: {
    // 여기는 메서드를 정의하는 곳이다.


    //여기서 context는 store의 전반적인 속성을 가지고 있다.
    changeMessage(context, newMessage) {
      // console.log(context)
      // console.log(newMessage)
      ///// console.log(a) 두개 이상의 인자는 안보내지는듯??? 오류뜬다

      // context.commit('mutation 메서드 이름 들어감', 추가데이터 들어감)
      context.commit('CHANGE_MESSAGE', newMessage)

    }

  },
  modules: {
  }
})
