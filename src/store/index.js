import { createStore } from 'vuex'
import api from '../services/todos.js'
import moment from 'moment'

const storeData = {
  state: {
    todos: []
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
      const liveDate = moment().format('DD/MM/YYYY H:mm:ss')
      const putdata = {
        id: data.id,
        create_time: liveDate,
        task: data.task,
        edit: false
      }
      try {
        const result = await api.putTodo(data.id, putdata)
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
    async completeRequest({ commit }, data) {
      const putdata = {
        completed: data.completed
      }
      try {
        const result = await api.putTodo(data.id, putdata)
        commit('PUT_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    },
    async addtaskRequest({ commit }, data) {
      const liveDate = moment().format('DD/MM/YYYY H:mm:ss')
      const addData = {
        task: data,
        create_time: liveDate,
        completed: false,
        edit: false
      }
      try {
        const result = await api.postTodo(addData)
        commit('POST_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    },

    checkAll({ commit }, data) {
      // const result = await api.putTodo(data)
      commit('CHECK_ALL', data)
    },
    delAllTask({ commit }, data) {
      commit('DEL_ALL_TASK', data)
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
    },
    CHECK_ALL(state, data) {
      if (data) {
        state.todos.map((todo) => {
          todo.completed = true
        })
      }
    },
    DEL_ALL_TASK(state) {
      state.todos = []
    }
  },
  modules: {}
}
const store = createStore(storeData)
export default store
