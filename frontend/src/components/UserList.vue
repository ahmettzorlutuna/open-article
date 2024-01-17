<template>
  <div class="home">
    <p v-if="errMessage">{{ errMessage }}</p>
    <p v-else-if="isLoading">Please wait...</p>
    <div v-else>
      <ol>
        <div v-for="user in users" :key="user.name">
          <SingleUser :user="user" />
        </div>
      </ol>
    </div>
  </div>
</template>
<script>
import SingleUser from "./SinglePost.vue";
export default {
  props: ["users", "isLoading", "errMessage"],
  components: { SingleUser },
};
</script>

<style></style>
