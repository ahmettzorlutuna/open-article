<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      Before lets get started i want to tell you something about our new web
      site. I hope you like it.
    </p>
    <input type="text" v-model="message">
    <button @click="handleClick">Click</button>
    <h1>{{ ahmet }}</h1>
    <button @click="handleClick2">Click</button>
  </div>
</template>

<script>
import { ref,reactive } from "vue";
export default {
  name: "home",
  setup() {
    const message = ref("Hello World");
    let ahmet = ref('ahmet')

    console.log(message)
    function handleClick() {
      message.value = "Oh noooooo!";
    }

    function handleClick2() {
      ahmet.value = "Ahmet yeni kişi";
    }

    return { message, handleClick, ahmet, handleClick2};
  },
};
</script>

<style></style>
