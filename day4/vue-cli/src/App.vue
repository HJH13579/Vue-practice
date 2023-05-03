<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyComponent />
    <HelloWorld 
    msg="데이터 넘겨~"
    :message="somevalue"
    @event-name="alertValue"
    @click.native="alertValue"
    @click.prevent="alertValue"
    @click.stop="alertValue"
    />
    <button @click="alertValue">클릭</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from '@/components/MyComponent'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent,
  },
  data() {
    return {
      somevalue : 'haha'
    } 
  },
  methods: {
    alertValue(obj) {
      alert(obj.data)
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
