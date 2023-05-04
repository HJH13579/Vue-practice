<template>
  <div id="app">
    <!-- <img 
      v-for="(catUrl, index) in cats" 
      :key="index"
      :url="catUrl" 
    > -->

    <CatImg
      v-for="(catUrl, index) in cats" 
      :key="index"
      :catUrl="catUrl" 
    />

    {{ cats }}
    <button @click="fetchCats">고양이 10마리 호출</button>
  </div>
</template>

<script>
import CatImg from './components/CatImg.vue'

// const axios = require('axios');

export default {
  name: 'App',
  components: {
    CatImg
  },
  methods: {
    fetchCats() {
      // state를 변경하고 싶은 것
      // cats라고 하는 state를 axios 요청을 통해서 채우고 싶음
      this.$store.dispatch('fetchCats')

      // const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
      // axios.get(url)
      // .then(res => console.log(res))

      // [추가과제1]
      // 가져오는 사진 장수를 조절 가능
      // this.$store.dispatch('fetchCats', inputNum)

      // const a = 10
      // const b = 10
      // const c = 10
      // const payload = {
      //   a,
      //   b,
      //   c,
      // }

      // this.$store.dispatch('fetchCats', payload)

    }
  },
  computed: {
    cats() {
      return this.$store.state.cats
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
