<template>
  <h1>Login Page</h1>
  <form @submit.prevent="submitForm()">
    <h2>Login to app</h2>
    <label for="username">Username:</label>
    <input type="text" required v-model="username" />
    <label for="password">Password:</label>
    <input type="text" required v-model="password" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
const authService = require("../services/AuthService")

const username = ref("");
const password = ref("");

const submitForm = async () => {
  try {
    const reqObject = {
      username: username.value,
      password: password.value,
    };

    const response = await axios.post("http://localhost:3000/user/login", reqObject);

    authService.setLocalStorage(response);

    console.log(response);
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
};
</script>

<style>

</style>