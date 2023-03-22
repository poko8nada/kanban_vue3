<script setup>
</script>

<template>
  <main>
    <div class="container">
      <h1>Kanban app</h1>
      <section class="todo section-container">
        <div class="header">
          <h2>TODO</h2>
          <button>+</button>
        </div>
        <ul class="list">
          <li class="list-item"><p>タスク1</p><button>×</button></li>
          <li class="list-item"><p>タスク2</p><button>×</button></li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
.container{
  width:100%;
  margin: 0 auto;
}
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
  color: #333;
  font-size: 1.2em;
}
.section-container,.section-container *{
  box-sizing: border-box;
}
.section-container{
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid;
  height: calc(100vh - 1rem * 7);
}

.header{
  display: flex;
  justify-content: space-between;
  padding: .5em;
  border-bottom: 1px solid;
}
.list{
}
.list-item{
  display: flex;
  justify-content: space-between;
  padding: .5em;

}
</style>