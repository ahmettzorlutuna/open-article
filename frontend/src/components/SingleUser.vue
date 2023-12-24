<template>
  <div class="centered">
    <a :href="`/users/${user._id}`">{{ user.username }} </a>
    <p>Followers..:</p>
    <p>{{ user.followers.length }}</p>
    <p>Following..:</p>
    <p>{{ user.following.length }}</p>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
.centered{
  background-color:cornflowerblue;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
