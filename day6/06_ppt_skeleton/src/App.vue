<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ mge }}를 입력받음</h1>
    <h3>x2 : {{ doubleLength }}</h3>
    <input type="text" @keyup.enter="onSubmit(inputData)" v-model="inputData">
    <h3>{{ level }}</h3>
    <button @click="uplevel">levelup</button>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  created() {
    this.$store.dispatch('loadMessage')
    console.log(this.$store) 
  },
  computed: {
    // 3개는 같은 문법
    // 1.
    // message() {
    //   return this.$store.state.message
    // },

    // 2.
    // ...mapState(['message']),

    // 3.
    ...mapState(['age']),
    ...mapState({
      mge: state => state.message,
      level: state => state.myModule.level,
    }),

    // messageLength() {
    //     return this.$store.getters.messageLength
    // },
    // doubleLength() {
    //     return this.$store.getters.doubleLength
    // },

    ...mapGetters(['messageLength', 'doubleLength'])

  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    // changeMessage() {
    //   const newMessage = this.inputData
    //   this.$store.dispatch('changeMessage', newMessage)
    //   this.inputData = null
    // },

    // ...mapActions(['changeMessage'])

    ...mapActions({
      actionsChangeMessage: 'changeMessage',
      uplevel: 'incrementLevel'
    }),
    onSubmit() {
      const newMessage = this.inputData
      this.actionsChangeMessage(newMessage)
      this.inputData = null
    },
    // uplevel() {
    //   this.$store.dispatch('incrementLevel')
    // }
  },
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
