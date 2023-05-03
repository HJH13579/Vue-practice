<template>
  <div>
    <button @click="getDogImage">멍멍아 이리온</button><br><br>
    <img v-if="imgSrc" :src="imgSrc" alt="#"><br>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'DogComponent',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods:{
    getDogImage() {
      const dogImageSearchURL = 'https://dog.ceo/api/breeds/image/random'
      
      axios({
        method: 'get',
        url: dogImageSearchURL
      })
        .then((response) => {
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  // 특이한 trigger을 가진 특수한 기능을 가진 

  // 데이터 준비하는 시간
  created() {
    // app이 즉, instance가 만들어지는 과정에서 실행
    // 최초의 data 가져오는데서 사용
    // axios를 만들기 제일 좋은 공간
    this.getDogImage()
    console.log('Dog created!')
    // const button = document.querySelector('button')
    // button.innerText = '멍멍!'
  },
  // 데이터, 명령 합치는 것
  // 인지를 하고 html에 부착, 인지
  // 태그들에 접근이 가능
  mounted() {
    console.log('Dog mounted!')
    const button = document.querySelector('button')
    button.innerText = '멍멍!'
  },
  // app이 변경 되었을 때 실행이 된다
  updated() {
    console.log('새로운 멍멍이!')
    console.log('Dog updated!')
  }
}
</script>

<style>

</style>
