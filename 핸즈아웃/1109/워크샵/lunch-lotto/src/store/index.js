import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lunch:null,

  },
  getters: {
  },
  mutations: {
    PICK_LUNCH(state, lunchMenu){
      state.lunch = lunchMenu
    }
  },
  actions: {
    pickLunch(context, lunchMenu){
      context.commit('PICK_LUNCH', lunchMenu)

    }
  },
  modules: {
  }
})
