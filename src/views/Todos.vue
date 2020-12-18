<template>
  <event-add-todo />
  <!-- <event-show /> -->
  <Event-lists />
</template>

<script>
import EventAddTodo from '../components/EventAddTodo.vue'
import EventLists from '../components/EventLists.vue'
// import EventShow from '../components/EventShow.vue'
export default {
  components: { EventLists, EventAddTodo },
  name: 'Todos'
}
</script>

<style></style>
