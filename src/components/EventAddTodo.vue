<template>
  <div class="add-todo">
    <input
      class="addnow"
      type="text"
      placeholder="Type here for add a new todo"
      v-model="taskname"
      @keyup.enter="addtaskRequest(taskname), (taskname = '')"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'EventAddTodo',
  data() {
    return {
      taskname: ''
    }
  },
  methods: {
    ...mapActions(['addtaskRequest'])
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.add-todo {
  width: 80%;
  margin: auto;
}
.addnow {
  width: 100%;
  margin: 20px 0px;
  min-height: 50px;
  padding-left: 10px;
  border: 1px solid rgba(51, 51, 51, 0.131);
  border-radius: 5px;
}
input {
  border: 1px solid rgba(51, 51, 51, 0.131);
}
input:focus {
  outline: rgb(255, 1, 5);
}
</style>
