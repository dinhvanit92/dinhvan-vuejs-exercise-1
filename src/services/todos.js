import axios from 'axios'
//GET TODOS LIST
async function getTodo() {
  const result = await axios.get(
    'https://5fd988e77e05f000170d3a94.mockapi.io/todos'
  )
  return result.data
}
async function putTodo(id,data) {
  const result = await axios.put(
    'https://5fd988e77e05f000170d3a94.mockapi.io/todos/'+id
  , data)
  // return getTodo()
  return result.data
}
async function deleteTodo(id) {
  const result = await axios.delete(
    'https://5fd988e77e05f000170d3a94.mockapi.io/todos/'+id
  )
  // return getTodo()
  return result.data
}

export default {
  getTodo, putTodo,deleteTodo
}
