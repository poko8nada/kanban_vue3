import { ref } from 'vue'
import { defineStore } from 'pinia'
import { app, errorMessages } from '@/assets/firebaseUtils.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const useUserAuthStore = defineStore('userAuth', () => {
  const isLoggedIn = ref(false)
  const uid = ref('')
  const errorMessage = ref('')

  const auth = getAuth(app)

  async function SignUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)

        uid.value = user.uid
        isLoggedIn.value = true
        errorMessage.value = ''
      })
      .catch((error) => {
        const errorCode = error.code
        // const errorMessage = error.message;
        errorMessage.value = errorMessages(errorCode, 'signUp')
        isLoggedIn.value = false
      })
  }
  async function logIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)

        uid.value = user.uid
        isLoggedIn.value = true
        errorMessage.value = ''
      })
      .catch((error) => {
        const errorCode = error.code
        // const errorMessage = error.message;
        errorMessage.value = errorMessages(errorCode, 'logIn')
        uid.value = ''
        isLoggedIn.value = false
      })
  }

  async function signedOut(){
    await signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      const errorCode = error.code
      errorMessage.value = errorCode
    });
  }
  return { isLoggedIn, uid, errorMessage, SignUp, logIn,  signedOut }
})
