<template>
  <UserList :users="users" :isLoading="isLoading" :errMessage="errMessage" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import UserList from "@/components/UserList.vue";

const store = useStore();

const users = computed(() => store.state.users);
const errMessage = computed(() => store.state.errMessage);
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  console.log('.')
})

</script>

<style></style>
