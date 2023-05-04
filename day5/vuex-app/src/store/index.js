import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    cats: [],
  },
  getters: {
  },
  mutations: {
    CHANGE_CATS(state, catsList) {
      state.cats = catsList 

      // console.log(catsList)
      // console.log('mutate!')
    }
  },
  actions: {
    fetchCats(context) {
      const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
      axios.get(url)
      .then(res => {
        // console.log(res.data)
        // res.data에서 url에만 뽑아서 commit에다 넘기고 싶다.

        // [추가과제2]
        // {id, url} 이렇게 가져올 수도 있다.

        const catsList = res.data.map(el => el.url)
        // console.log(catsList)

        // state를 변경하고 싶어.
        context.commit('CHANGE_CATS', catsList)
      })
    }
  },
  modules: {
  }
})
