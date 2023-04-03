<script setup>
import { ref } from 'vue'
import{ useTodoStore }from '@/stores/todoStore.js'
import axios from 'axios'

const todoStore = useTodoStore();

const inputVal = ref('')
const addTodo = () => {
  const val = inputVal.value.trim()
  if(val !== ''){
    todoStore.pushTodo(val)
    inputVal.value = ''
  }
}

const deleteTodo = ($event) => {
  const pos = $event.target.dataset.position
  todoStore.spliceTodo(pos)
}

const test = async () => {
  const hello = await axios.post('/api/message',{
    text:'dammy',
    id: 1,
  })
  // alert(hello);
  console.log(hello);
  console.log(hello.data);
}

</script>

<template>
  <main>
    <h1>Kanban app</h1>
    <section class="todo section-container">
      <div class="header">
        <h2>TODO</h2>
      </div>
      {{ todoStore.todos }}
      <form @submit.prevent="test"><button>テスト</button></form>
      <div class="container">
        <ul class="list">
          <li class="list-item" v-for="(todo, i) in todoStore.todos" :key="todo.id"><span>{{ todo.task }}</span><button :data-position="i" @click="deleteTodo">×</button></li>
        </ul>
          <div class="add-input-container">
            <form @submit.prevent="addTodo">
              <input class="add-input" type="text" placeholder="task..." v-model="inputVal">
              <button>+</button>
            </form>
          </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
ul{
  list-style: none;
  padding: 0;
}
button{
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
  cursor: pointer;
  color: #555;
  font-size: 1.5em;
}
.section-container,.section-container *{
  box-sizing: border-box;
}
.section-container{
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid;
  min-height: calc(100vh - 1rem * 7);
  height: 100%;
}

.header{
  display: flex;
  justify-content: space-between;
  padding: .5em;
  border-bottom: 1px solid;
}
.container{
  width:100%;
  margin: 0 auto;
  height: 100%;
}
.list{
}
.list-item{
  display: flex;
  justify-content: space-between;
  padding: .5em .5em;
  word-break: break-all;
  /* box-shadow: 0px 5px 5px -5px #777; */
}

.add-input-container form{
  padding: .25em .5em;
  display: flex;
  justify-content: space-between;
  margin-bottom: .5em;
  
}
.add-input{
  display: inline-block;
  width: 20em;
  max-width: 100%;
  padding: .3em;
  overflow: hidden;
  /* width: 100%; */
  /* border: 1px solid #ccc; */
}

</style>