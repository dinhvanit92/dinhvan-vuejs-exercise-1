import axios from 'axios'

async function getTodo(dd, fff) {
  console.log('object',dd,fff)
  const result = await axios.get(
    'https://5fd988e77e05f000170d3a94.mockapi.io/todos'
  )
  return result.data
}

export default {
  getTodo
}
