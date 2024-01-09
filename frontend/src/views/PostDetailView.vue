<template>
  <article class="card-container">
    <!-- <p id="user-name"><a :href="`/users/${user._id}`">{{ post.username }} </a></p> -->
    <h2 id="post-name">{{ post.name }}</h2>
    <p id="post-content">{{ post.content }}</p>
    <span id="created-date">{{ post.date }}</span>
    <hr class="card-line" />
  </article>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      post: {},
      isLoading: true,
      errMessage: "",
    };
  },
  async mounted() {
    try {
      await this.updatePost();
    } catch (error) {
      this.errMessage = error.message;
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    ...mapActions(["fetchPost"]),
    async updatePost() {
      this.post = await this.fetchPost(this.$route.params.postId);
    }
  },
  computed: {
    truncateDate() {
      return this.post.date.slice(0,5)
    },
    formatDate(){
      var d = this.post.date.getDate();
      return d
    },
  },
};
</script>

<style>
.card-container {
  margin-top: 20px;
}
</style>
