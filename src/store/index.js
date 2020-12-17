import { createStore } from 'vuex'
import api from '../services/todos.js'

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
        console.log('hello')
        const result = await api.getTodo('ddd',)
        commit('SET_TODOS', result)
      } catch (error) {
        console.log(error)
      }
    },
    delTask({ commit }, id) {
      commit('DELETE_TODO', id)
    },
  },
  mutations: {
    SET_TODOS(state, data) {
      state.todos = data
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
  },
  modules: {
  }
}
const store = createStore(storeData)
export default store
