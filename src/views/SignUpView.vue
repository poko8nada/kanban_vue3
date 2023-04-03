<script setup>
import SignupForm from '../components/SignUpForm.vue'
</script>

<template>
  <main>
    <div class="container">
      <div>
        <h1>Kanban APP signup</h1>
      </div>
      <SignupForm></SignupForm>
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