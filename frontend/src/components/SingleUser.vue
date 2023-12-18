<template>
  <div class="user">
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
p,a{
    display: inline;
    margin: 0 11px 11px 0;
}
</style>
