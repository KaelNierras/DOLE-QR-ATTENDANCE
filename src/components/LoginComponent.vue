<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {ref , onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

onMounted(() => {
    document.body.style.placeItems = 'center';
});

const router = useRoute() 
const errorMessage = ref()
const emailInput = ref('')
const passwordInput = ref('')

const signin = () => {
  signInWithEmailAndPassword(getAuth(), emailInput.value, passwordInput.value)
    .then((_data) => {
        console.log("Succefully signed in!")
        console.log(getAuth().currentUser)
        router.push({ path: '/ADash' });
    })
    .catch((error) =>{
      console.log(error.code)
      switch (error.code){
        case "auth/invalid-email":
          errorMessage.value = "Invalid email"
          break
        case "auth/user-not-found":
          errorMessage.value = "No account with that email was found"
          break
        case "auth/wrong-password":
          errorMessage.value = "Incorrect password"
          break
        default:
          errorMessage.value = ""
          break
      }
    }
    )
}
</script>

<template>
  <div id="app">
    <h1>DOLE <br> Attendance System</h1>
    <img id="LOGO" src="../assets/DOLE.png" alt="My Image">
    <h4>LOGIN TO YOUR ACCOUNT</h4>
    <form @submit.prevent="signin">
      <div id="UN">
        <input type="text" id="username" v-model="emailInput" required placeholder="Email/ Username">
      </div>
      <div>
        <input type="password" id="password" v-model="passwordInput" required placeholder="Password">
      </div>
      <div id="hori">
        <span @click="this.$router.push({ name: 'Register' })">Create Account</span>
      </div>
      <button type="submit" id="submit">LOG IN</button>
    </form>
    
    <div id="error" v-if="errorMessage" style="color:red">
      <img id="errorimg" src="../assets/error.png" alt="My Image">
      {{ errorMessage }}</div>
  </div>
</template>

<style scoped>

#errorimg {
  width: 20px;
  margin-right: 10px;
}

span:hover{
  color: #3D77BB;
  cursor: default;
  text-decoration: underline ;
}

#hori{
    color: #000;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }

#hori span{
    width: 20px;
}

#LOGO{
  height: 200px;
  width: 200px;
}

#UN {
  display: flex;
  align-items: center;
}

#app {
  max-width: 500px;
  padding-top: 20px;
  padding-bottom: 30px;
  border: 0 px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  place-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
}

h1{
  width: 350px;
  text-align: center;
  color: black;
  font-weight:900;
  line-height: 35px;
}

h4, h1 {
  text-align: center;
  color: black;
  margin-bottom: 5px;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin-right: 10px;
}

#username, #password {
  height: 35px;
  margin-bottom: 10px;
  border-radius: 20px;
  width: 300px;
  padding: 15px;
  background-color: #F1F1F1;
  border: 0px;
}

#submit{
  font-weight: bolder;
  background-color: #3D77BB;
  width: 110px;
  height: 30px;
  border-radius: 20px;
  margin-top: 10px;
  padding: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
}

#submit:hover {
  background-color: #2C5F94;
}

#error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 350px;
  margin-top: 10px;
  text-align: center;
  color: red;
  background-color: rgba(255, 0, 0, 0.062) ;
}

@media (max-width: 844px) {
  #username,
  #password {
    border-radius: 20px;
    width: 300px;
    padding: 15px;
    background-color: #F1F1F1;
    border: 0px;
  }

  h4 {
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  #hori{
    color: #000;
    margin-bottom: 10px;
  }


  #submit{
    font-weight: bolder;
    background-color: #3D77BB;
    width: 110px;
    height: 30px;
    border-radius: 20px;
  }


}
</style>
