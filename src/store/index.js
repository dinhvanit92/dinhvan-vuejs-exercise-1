import { createStore } from 'vuex'
import api from '../services/todos.js'
import callTime from '../libs/setdatetime'

const storeData = {
  state: {
    todos: []
  },
  // getters: {
  //   all: (state) => state.todos.filter((todo) => todo.id),
  //   completed: (state) => state.todos.filter((todo) => todo.completed == true),
  //   uncompleted: (state) =>
  //     state.todos.filter((todo) => todo.completed == false)
  // },
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
      const liveDate = callTime.datetime()
      const putdata = {
        id: data[0],
        create_time: liveDate,
        task: data[1],
        edit: false
      }
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
    async completeRequest({ commit }, data) {
      console.log('data[1]', data[1])
      const putdata = {
        completed: data[1]
      }
      try {
        const result = await api.putTodo(data[0], putdata)
        commit('PUT_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    },
    async addtaskRequest({ commit }, data) {
      const liveDate = callTime.datetime()
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
      commit('CHECK_ALL', data)
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
    }
  },
  modules: {}
}
const store = createStore(storeData)
export default store
