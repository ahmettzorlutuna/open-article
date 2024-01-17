<template>
  <div class="home">
    <p v-if="errMessage">{{ errMessage }}</p>
    <p v-else-if="isLoading">Please wait...</p>
    <div v-else>
      <ol>
        <div v-for="user in users" :key="user.name">
          <SinglePost :user="user" />
        </div>
      </ol>
    </div>
  </div>
</template>
<script>
import SinglePost from "./SinglePost.vue";
export default {
  props: ["users", "isLoading", "errMessage"],
  components: { SinglePost },
};
</script>

<style></style>
