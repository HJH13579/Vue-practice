import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      // console.log(todoItem) : 삭제 버튼 누른 todo, 찾아서 state.todos에서 삭제
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1) // splice(i, n) : i부터 n개 삭제
    },
  },
  actions: {
    createTodo(context, todoTitle) {
      // console.log(context)
      const todoItem = { 
        title: todoTitle,
        isCompleted: false
      }
      context.commit('CREATE_TODO', todoItem)
    },
    deleteTodo(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
    },
  },
  modules: {
  }
})
