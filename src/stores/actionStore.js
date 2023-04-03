import { defineStore } from 'pinia'

export const useActionStore = defineStore('action', () => {
  function addTodo(todos,todoTitle) {
    todos.push()
  }

  return { addTodo }
})
