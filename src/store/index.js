import { createStore } from 'vuex'
import api from '../services/todos.js'
import datetime from '../libs/setdatetime'

const storeData = {
  state: {
    todos: [
      // {id: 1, create_time: '13:10 PM - 15/08/2020', task: 'công việc 1', completed: true, edit: false},
      // {id: 2, create_time: '13:11 PM - 15/08/2020', task: 'công việc 2', completed: true, edit: false}
    ]
  },
  actions: {
    async gettodoRequest({ commit }) {
      try {
        const result = await api.getTodo()
        commit('SET_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    },
    async puttodoRequest({ commit }, data) {
      const putdata = {
        id: data[0],
        create_time: datetime,
        task: data[1],
        edit: false
      }
      // commit ('PUT_TODO', data)
      try {
        const result = await api.putTodo(data[0], putdata)
        commit('PUT_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    },
    async deletetodoRequest({ commit }, id) {
      try {
        const result = await api.deleteTodo(id)
        commit('DELETE_TODO', result)
      } catch (error) {
        console.log(error)
      }
    },
    async addtaskRequest({ commit }, data) {
      const addData = {
        task: data,
        create_time: datetime,
        completed: false,
        edit: false
      }
      try {
        const result = await api.postTodo(addData)
        commit('POST_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    SET_TODOS(state, data) {
      state.todos = data
    },
    POST_TODOS(state, data) {
      state.todos.push(data)
    },
    PUT_TODOS(state, data) {
      state.todos.map((todo) => {
        if (todo.id === data.id) {
          todo.task = data.task
          todo.completed = data.completed
          todo.edit = data.edit
          todo.create_time = data.create_time
        }
      })
    },
    DELETE_TODO(state, data) {
      state.todos = state.todos.filter((todo) => todo.id !== data.id)
    }
  },
  modules: {}
}
const store = createStore(storeData)
export default store
