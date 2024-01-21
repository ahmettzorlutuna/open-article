<template>
  <h1>Welcom to Home Page !</h1>
  <!-- <PostsList :users="users" :isLoading="isLoading" :errMessage="errMessage" /> -->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import PostsList from "@/components/PostsList.vue";

const store = useStore();

const users = computed(() => store.state.users);
const errMessage = computed(() => store.state.errMessage);
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  store.dispatch('fetchUsers')
})
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
