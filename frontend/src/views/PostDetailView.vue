<template>
  <article class="card-container">
    <h2 id="post-name">{{ post.name }}</h2>
    <PostItems />
    <p id="post-content">{{ post.content }}</p>
    <span id="created-date">{{ formatDate(post.date) }}</span>
    <button id="remove-button">Delete</button>
    <hr class="card-line" />
  </article>
</template>

<script>
import { mapActions } from "vuex";
import PostItems from "../components/PostItems.vue";

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
    },
    formatDate(date) {
      if (!date) {
        return "";
      }

      const formattedDate = new Date(date);

      const options = { year: "numeric", month: "long", day: "numeric" };
      return formattedDate.toLocaleDateString("en-US", options);
    },
  },
  computed: {
    truncateDate() {
      return this.post ? this.formatDate(this.post.date) : "";
    },
  },
  components: {
    PostItems,
  },
};
</script>

<style>
.card-container:not(#remove-button) {
  display: flex;
  flex-flow: column;
  justify-content: center;
  --cards-width: 728px;
  width: var(--cards-width);
  min-height: 244px;
  margin: 5px 20px 40px 20px;
  position: relative;
  font-family: "Arial", sans-serif;
  margin: auto; /* Center Div */
}

#remove-button {
  display: flex;
  justify-content: center;
  width: 90px;
  margin: 0 0 2vw 0;
}

#post-name {
  margin: 1.19em 0 2.4vw 0;
  letter-spacing: -0.011em;
  line-height: 52px;
  font-size: 42px;
}

#post-content {
  margin: 0.94em 0 6vw 0;
  font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times,
    serif;
  letter-spacing: -0.003em;
  font-size: 20px;
}

#created-date {
  margin: 0 0 2vh;
  color: gray;
}
</style>
