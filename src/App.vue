<template>
<div id="app">
  <todos />
</div>
</template>
<script>
import Todos from './views/Todos.vue'
export default {
  name: 'App',
  components: { Todos }
  
  
}
</script>

<style>
*{margin: 0;padding: 0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
