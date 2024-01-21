<script>
import { mapActions } from "vuex";
import PostsList from "../components/PostsList.vue";

export default {
  name: "UsersView",
  data() {
    return {
      users: [],
      isLoading: true,
      errMessage: "",
    };
  },
  async mounted() {
    try {
      this.users = await this.fetchUsers();
    } catch (e) {
      this.errMessage = e.message;
    } finally {
      this.isLoading = false;
    }
  },
  components: {
    PostsList,
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
};
</script>

<template>
  <h1>OpenArticle.com</h1>
  <div class="posts">
    <PostsList :users="users" :isLoading="isLoading" :errMessage="errMessage" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.posts {
  max-width: 728px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
</style>
