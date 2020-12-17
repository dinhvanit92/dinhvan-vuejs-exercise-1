<template>
  <div class="event">
      <ul class="event-list" v-for="todo in todos" :key="todo.id">
          <li>
              <div class="event-click">
                  <div class="check">
                      <input class="inb" type="checkbox">
                      <p>{{todo.create_time}}</p>
                  </div>
                  
                  <div class="modified">
                      <img src="../assets/edit.png" alt="" @click="todo.edit = !todo.edit" v-if="!todo.edit">
                      <img src="../assets/checked.png" alt="" @click="todo.edit = !todo.edit,puttodoRequest([todo.id, todo.task])" v-else>
                      <img src="../assets/delete.png" alt="" @click="deletetodoRequest(todo.id)" >
                  </div>
              </div>
              <p v-if="!todo.edit" @click="todo.edit = !todo.edit">{{todo.task}}</p>
              <input v-else class="form-control" type="textarea" v-model="todo.task" @keyup.enter="puttodoRequest([todo.id, todo.task])">
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState , mapActions} from 'vuex'
export default {
    name: 'EventLists',
    computed:{
        ...mapState(['todos'])
    },
    methods: {
        ...mapActions(['gettodoRequest','delTask','puttodoRequest','deletetodoRequest'])
    },
      mounted() {
    this.gettodoRequest()
  }
}
</script>

<style>

.event-list{
    width: 80%;
    margin: auto;
    border: 1px solid rgba(51, 51, 51, 0.131);
    padding: 10px;
    background-color: white;
    margin-top: 15px;
}
.event-list li{
    list-style: none;
}
.event-list p{
    padding: 10px 25px;
    font-size: 15px;
}
.modified img{
    width: 15px;
    padding: 5px;
}
.event-click {
    display: flex;
    justify-content:space-between;
    margin: 5px;
}
.check p{ 
    font-size: 12px;
    margin-top: -10px;
}
.inb{
    float: left;
}
.form-control{
    margin-left: 20px;
    width: 90%;
    min-height: 30px;
    padding-left: 3px;
    padding-top: 2px;
    font-size: 15px;
}
input:focus{
        outline: none;
    }
</style>