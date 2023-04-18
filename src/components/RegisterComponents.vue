<script setup>
import {ref, onMounted } from '@vue/runtime-core'
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '@/firebase'

onMounted(() => {
  document.body.style.alignItems = 'flex-start';
});

const userCollection = collection(db, "user")
const nameInput = ref('')
const emailInput = ref('')
const genderInput = ref('')
const locationInput = ref('')
const ageInput = ref('')
const passwordInput = ref('')

const register = () => {
    createUserWithEmailAndPassword(getAuth(), emailInput.value, passwordInput.value)
      .then((_data) => {
          alert("Succefully signed in!")
          addDoc(userCollection, {
            name: nameInput.value,
            email: emailInput.value,
            gender: genderInput.value,
            location: locationInput.value,
            age: ageInput.value,
            password: passwordInput.value
          })
            nameInput.value=''
            emailInput.value=''
            genderInput.value=''
            locationInput.value=''
            ageInput.value=''
            passwordInput.value=''
            
          })
      .catch((error) =>{
        console.log(error.code)
        alert(error.message)
      }
    )
}
</script>

<template>
  <nav>
    <div id="logos">
      <img id="home" src="../assets/Home.png" alt="My Image" @click="this.$router.push({ name: 'login' })">
      <img id="logov2" src="../assets/DOLELogov2.png" alt="My Image">
    </div>
    <div id="ProfileID">
    <img id="Profile" src="../assets/Profile.png" alt="My Image">
    <div id="ProfileDetails">
      <span>Kyle Anthony Nierras</span>
      <span>kyleanthony47@gmail.com</span>
    </div>
  </div>
  </nav>
  
  <div id="app">
    <h2>Create User Account</h2>
    <form @submit.prevent="">
      <div id="UN">
        <input type="text" id="name" v-model="nameInput" required placeholder="Name">
      </div>
      <div>
        <input type="text" id="email" v-model="emailInput" required placeholder="Email">
      </div>
      <div>
        <input type="text" id="gender" v-model="genderInput" required placeholder="Gender">
      </div>
      <div>
        <input type="text" id="age" v-model="ageInput" required placeholder="Age">
      </div>
      <div>
        <input type="text" id="address" v-model="locationInput" required placeholder="Location">
      </div>
      <div>
        <input type="password" id="password" v-model="passwordInput" required placeholder="Password">
      </div>
      <button type="submit" id="submit" @click="register">SUBMIT</button>
    </form>
    
  </div>
</template>

<style scoped>
#logos{
  display: flex;
  align-items: center;
}

table{
  color: white;
  background-color: #000;
  border-collapse: collapse;
  border: none;
}

th{
  padding: 10px ;
  height: 50px;
  text-align: center;
}

tr{
  height: 50px;
}

td{
  padding: 10px;
}

nav{
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  align-items: center;
  height: 65px;
}

nav img:first-child{
  display: flex;
  margin-right: 21px;
  width: 35px;
  height: 30px;
}

nav img:nth-child(2){
  width: 200px;
  height: 43px;
}

#ProfileDetails{
  margin-left: 10px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  line-height: 15px;
  font-size: 12px;
}

#ProfileDetails span:first-child{
  font-weight: bolder;
}

#ProfileID{
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 10px;
  width: 500px;
  height: 50px;
  align-items: center;
}

#Profile{
  margin-right: 0;
  width: 50px;
  height: 50px;
}

#hori{
    color: #000;
}

#UN {
  display: flex;
  align-items: center;
}

#app {
  margin-top: 10px;
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  border: 0 px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h2{
  text-align: left;
  margin-bottom: 20px;
  color: black;
  font-weight:900;
  line-height: 35px;
}

h4, h2 {
  text-align: center;
  margin-bottom: 20px;
  color: black;
  margin-bottom: 15px;
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

input {
  height: 35px;
  margin-bottom: 10px;
  border-radius: 20px;
  width: 390px;
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
  }

#submit:hover {
  background-color: #2C5F94;
}


button {
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}


div.error {
  margin-top: 10px;
  text-align: center;
  color: red;
}

@media (max-width: 400px) {

#logos{
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  width: 100vw;
  height: 70px;
}

th{
  padding: 10px ;
  height: 50px;
  text-align: center;
  color:white;
}

tr{
  height: 50px;
}

td{
  padding: 10px;
}

table{
  color: #000;
}

nav{
    padding-left: 0px;
    padding-right: 0px;
    height: 150PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    box-shadow:none;
}

  nav img:first-child{
    display: flex;
    margin-right: 20px;
    width: 35px;
    height: 30px;
}

nav img:nth-child(2){
  width: 200px;
}

#ProfileDetails{
  margin-left: 10px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  line-height: 15px;
  font-size: 12px;
}

#ProfileDetails span:first-child{
  font-weight: bolder;
}

#ProfileID{
  width: 390px;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
}

#Profile{
  width: 50px;
  height: 50px;
}

#hori{
    color: #000;
}

#UN {
  display: flex;
  align-items: center;
}

#app {
  max-width: 500px;
  padding: 20px;
  border: 0 px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h2{
  text-align: left;
  margin-bottom: 20px;
  color: black;
  font-weight:900;
  line-height: 35px;
}

h4, h1 {
  text-align: left;
  margin-bottom: 20px;
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


#submit:hover {
  background-color: #2C5F94;
}

  
}

input{
  width: 350px;
}

</style>
