import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: 0
  },
  mutations: {
    changeValue(state, value){
      state.value += value;
    },
    emptyState(){
      this.replaceState({
        value: 0
      });
    }
  }
})
