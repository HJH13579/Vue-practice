<template>
  <div class="border">
    <h1>This is Component</h1>
    <MyChild /> 
    <MyChild /> 
    <MyChild /> 
    <MyChild /> 
  </div>
  <!-- <div></div> : error, 루트는 하나여야 한다. -->
</template>

<script>
import MyChild from '@/components/MyChild.vue'

export default {
  name: 'MyComponent',
  components : {
    MyChild,
  }
}
</script>

<style>
.border {
  border: solid;
}
</style>