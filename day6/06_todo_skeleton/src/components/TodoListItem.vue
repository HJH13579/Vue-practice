<template>
  <div>
    <li>{{ todo.title }}</li>
    <button @click="deleteTodo">DELETE</button>
  </div>
  
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
    }
  }
}
</script>

<style>

</style>
