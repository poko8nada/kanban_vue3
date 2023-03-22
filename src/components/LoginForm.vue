<script setup>
import sha256 from '@/assets/sha.js'
import {ref, computed} from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')

const validateEmail = computed(()=>{
  if(email.value.trim() === ''){
    return ''
  }

  const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
  if(!reg.test(email.value.trim())){
    return 'メールアドレスが正しくないようです'
  }
  return ''
})

const isError = ref(false)
const onSubmit = async () => {
  const sha = await sha256(password.value)
  try {
    const res = await axios.post("/api/login/", {
      email: email.value,
      password: sha
    })
    console.log(res.data);

    isError.value = false
  } catch (err) {
    console.log(err);
    isError.value = true
  }
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
          <div class="errors" >
            <p>{{ validateEmail }}</p>
          </div>
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
    <div class="errors" v-if="isError">
      <p>ログイン情報が不正です</p>
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
}
</style>