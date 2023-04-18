<script setup>
import {ref, onMounted } from '@vue/runtime-core'
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { db } from '@/firebase'

onMounted(() => {
  document.body.style.alignItems = 'flex-start';
});

const auth = getAuth();
const user = auth.currentUser;
const email = ref('')

if (user !== null) {
  const uid = user.email;
  email.value= uid
}

console.log(email.value)


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
    <h1>Hi, Kyle.</h1>
    <h2>Welcome!</h2>    
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
  width: 100vw;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  border: 0 px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

#app :nth-child(1){
  font-weight: bold;
}

#app :nth-child(2){
  color: #3D77BB;
  font-weight: bold;
}

h1, h2 {
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  color: black;
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
    align-items: center;
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
  width: 100vw;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  border: 0 px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
  padding-top: 30px;
  max-width: 500px;
  border: 0 px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 30px;
}

h1, h2 {
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
