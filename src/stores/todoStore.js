import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    {
      id:1,
      task: 'たすく1'
    },
    {
      id:10,
      task: 'たすく2'
    },
    {
      id:99,
      task: 'たすく3'
    },
  ])
  const updateIdNumber = computed(() => {
    if(todos.value.length === 0){
      return 1
    }
    if(todos.value.length === 1){
      return todos.value[0].id + 1
    }
    return todos.value.reduce((result,value)=>{
      return result > value.id ? result + 1 : value.id + 1
    })
  })
  function pushTodo(todoTitle) {
    return todos.value.push({
      id: updateIdNumber.value,
      task : todoTitle
    })
  }
  function spliceTodo(position) {
    return todos.value.splice(position,1)
  }

  return { todos, pushTodo, updateIdNumber, spliceTodo}
})
