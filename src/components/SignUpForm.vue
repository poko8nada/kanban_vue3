<script setup>
import { ref } from 'vue'
import { useUserAuthStore } from '@/stores/userAuthStore.js'
import {useRouter} from 'vue-router';
// import axios from 'axios'

const userAuthStore = useUserAuthStore();
const router = useRouter();

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  await userAuthStore.SignUp(email.value, password.value)
  .then(()=>{
    if(userAuthStore.isLoggedIn){
      console.log(userAuthStore.isLoggedIn);
      console.log(userAuthStore.uid);
      router.push('/dashboard')
    }
  })
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <ul>
        <li>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              placeholder="xxxxx@examplemail.com"
              required
            >
          </label>
        </li>
        <li>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              required
            >
          </label>
        </li>
        <li>
          <button>login</button>
        </li>
      </ul>
    </form>
    <div class="errors">
      <p>{{userAuthStore.errorMessage}}</p>
    </div>
  </div>
</template>

<style scoped>
ul{
  list-style: none;
  padding: 16px;
  margin: 0;
}
li:not(:first-child){
  margin-top: 24px;
}
label{
  display: flex;
  flex-direction: column;
}
button{
  display: block;
  width: 180px;
  padding: .5em;
  margin: 0 auto;
}

.errors{
  padding: 0;
  color: red;
  margin-top: .3em;
  padding: 0 16px;
}
</style>