<template>
  <event-add-todo />
  <Event-lists />
</template>

<script>
import EventAddTodo from '../components/EventAddTodo.vue'
import EventLists from '../components/EventLists.vue'
export default {
  components: { EventLists, EventAddTodo },
  name: 'Todos'
}
</script>

<style></style>
