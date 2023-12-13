<template>
  <div class="home">
    <input type="text" v-model="search">
    <p v-for="name in filteredNames" :key="name"> {{ name }}</p>
    <button @click="stopWatch">Durdur</button>
  </div>
</template>

<script>
import { ref,reactive, computed, watch, watchEffect } from "vue";
export default {
  name: "home",
  setup() {
    const search = ref('')
    const names = ref(['Ahmet','mehmet','cart','curt','laa','nettinn','söleee'])

    const stopWatch = watch(search, (search, prevSearch) => {
      console.log("Ahmet")
    })

    // const stopWatchEffect = watchEffect(() => {
    //   console.log('Hello World',search.value)
    // })


    const filteredNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })
    return { names, search, filteredNames, stopWatch };
  },
};
</script>

<style></style>
