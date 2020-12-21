<template>
  <div class="event-show">
    <ul>
      <li @click="listcheck = 1">All</li>
      <li @click="listcheck = 2">Uncompleted</li>
      <li @click="listcheck = 3">Completed</li>
    </ul>
  </div>
  <div class="event">
    <ul
      class="event-list"
      v-for="todo in newtodos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
    >
      <li>
        <div class="event-click">
          <div class="check">
            <input
              class="inb"
              type="checkbox"
              :checked="todo.completed"
              @click="todo.completed = !todo.completed"
              @change="
                completeRequest({ id: todo.id, completed: todo.completed })
              "
            />
            <p>{{ todo.create_time }}</p>
          </div>

          <div class="modified">
            <img
              src="../assets/edit.png"
              alt=""
              @click="todo.edit = !todo.edit"
              v-if="!todo.edit"
            />
            <img
              src="../assets/checked.png"
              alt=""
              @click="
                ;(todo.edit = !todo.edit),
                  puttodoRequest({ id: todo.id, task: todo.task })
              "
              v-else
            />
            <img
              src="../assets/delete.png"
              alt=""
              @click="deletetodoRequest(todo.id)"
            />
          </div>
        </div>
        <p v-if="!todo.edit" @click="todo.edit = !todo.edit">{{ todo.task }}</p>
        <input
          v-else
          class="form-control"
          type="textarea"
          v-model="todo.task"
          @keyup.enter="puttodoRequest({ id: todo.id, task: todo.task })"
          @change="puttodoRequest({ id: todo.id, task: todo.task })"
        />
      </li>
    </ul>
  </div>
  <div class="checkmark">
    <div class="addcheck">
      <input
        type="checkbox"
        id="checkall"
        @click="checkAll((check = true))"
        :disabled="check"
      /><label for="checkall" class="texclass">Mark all as completed</label>
      <button class="btnDel" v-if="check && newtodos.length" @click="delAllTask()">
        DELETE COMPLETED ({{ newtodos.length }})
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EventLists',
  data() {
    return {
      listcheck: 1,
      check: false
    }
  },
  computed: {
    newtodos() {
      let newdata
      if (this.listcheck == 1) {
        newdata = this.$store.state.todos
      } else if (this.listcheck == 2) {
        newdata = this.$store.state.todos.filter(
          (todo) => todo.completed == false
        )
      } else {
        newdata = this.$store.state.todos.filter(
          (todo) => todo.completed == true
        )
      }
      return newdata
    }
  },
  methods: {
    ...mapActions([
      'gettodoRequest',
      'delTask',
      'puttodoRequest',
      'deletetodoRequest',
      'completeRequest',
      'checkAll',
      'delAllTask'
    ])
  },
  mounted() {
    this.gettodoRequest()
  }
}
</script>

<style>
.event-list {
  width: 80%;
  margin: auto;
  border: 1px solid rgba(51, 51, 51, 0.131);
  padding: 10px;
  background-color: white;
  margin-top: 15px;
}
/* .completed {
  background-color: rgba(146, 226, 126, 0.234);
} */
.event-list li {
  list-style: none;
}
.event-list p {
  padding: 10px 25px;
  font-size: 15px;
}
.modified img {
  width: 15px;
  padding: 5px;
}
.event-click {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
.check p {
  font-size: 12px;
  margin-top: -10px;
}
.inb {
  float: left;
}
.form-control {
  margin-left: 20px;
  width: 90%;
  min-height: 30px;
  padding-left: 3px;
  padding-top: 2px;
  font-size: 15px;
}
input:focus {
  border: 1px solid rgb(7, 175, 253);
}
input:hover {
  border: 1px solid rgb(7, 175, 253);
}

.event-show {
  position: relative;
  width: 80%;
  height: 30px;
  margin: auto;
}
.event-show ul {
  display: flex;
  list-style: none;
  position: absolute;
  top: 0px;
  right: 0px;
}
.event-show ul li {
  cursor: pointer;
  padding: 5px 10px;
  border-right: 1px solid rgba(119, 116, 116, 0.234);
}
.checkmark {
  width: 80%;
  margin: auto;
  position: relative;
}
.addcheck {
  position: absolute;
  top: 0px;
  right: 0px;
  margin-top: 30px;
  padding-bottom: 30px;
}
.texclass {
  margin: 0px 10px;
}
.btnDel {
  background-color: #4482ff;
  width: 200px;
  /* height: 20px; */
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
}
</style>
