<script setup>
import LoginForm from '../components/LoginForm.vue'
import AuthSample from '../components/AuthSample.vue'
</script>

<template>
  <main>
    <div class="container">
      <div>
        <h1>Kanban APP</h1>
      </div>
      <LoginForm></LoginForm>
      <AuthSample></AuthSample>
    </div>
  </main>
</template>

<style scoped>
.container{
  width:300px;
  margin: 0 auto;
}
h1{
  text-align: center;
}
</style>