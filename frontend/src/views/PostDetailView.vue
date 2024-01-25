<template>
  <article class="card-container">
    <h2 id="post-name">{{ post.name }}</h2>
    <div class="profile-detail-header">
      <span>{{ calculateMinute(post.content) }} min read </span>
      <span id="created-date">{{ formatDate(post.date) }}</span>
    </div>
    <PostItems />
    <p id="post-content">{{ post.content }}</p>
    <button id="remove-button">Delete</button>
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
    calculateMinute(content) {
      if (!content) {
        return 0;
      }
      return Math.round(content.split(" ").length / 240);
    },
  },
  computed: {
    readingMinute() {
      return this.calculateMinute(this.post.content);
    },
  },
  components: {
    PostItems,
  },
};
</script>

<style scoped>
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
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(242, 242, 242);
}

#remove-button {
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 40px;
  margin: 0 0 3vw 0;
  width: 90px;
  height: 40px;
  background-color: rgb(26, 140, 22);
  border: none;
  /* perfect radius */
  border-top-left-radius: 99em;
  border-top-right-radius: 99em;
  border-bottom-right-radius: 99em;
  border-bottom-left-radius: 99em;
  /* perfect radius */
  color: white;
  cursor: pointer;
}

#remove-button:hover {
  background-color: rgb(22, 118, 18);
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
  margin: 0 10px 2vh;
  color: gray;
}
.profile-detail-header {
  display: flex;
}
</style>
