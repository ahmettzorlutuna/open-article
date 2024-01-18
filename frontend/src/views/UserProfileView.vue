<script>
import { mapActions } from "vuex";
import SingleUserPost from "../components/SingleUserPost.vue";

export default {
  name: "UserView",
  data() {
    return {
      isLoading: true,
      user: {},
    };
  },
  async mounted() {
    await this.updateUser();
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["fetchUser", "deletePost"]),
    async updateUser() {
      this.user = await this.fetchUser(this.$route.params.userId);
    },
    async removePost(postId) {
      await this.deletePost(postId);
      this.updateUser();
    },
  },
  components: {
    SingleUserPost,
  },
};
</script>

<template>
  <div class="user">
    <div class="user-profile">
      <main class="profile-left">
          <SingleUserPost :user="user" />
      </main>
      <div class="profile-right">
        <h3>Ulaaaaa nasiiiii</h3>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1080px) {
  .user {
    max-width: 1336px;
    margin: auto;
    display: block;
  }
  .user-profile {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .profile-left {
    min-width: 728px;
    max-width: 728px;
    flex-grow: 1;
    flex-basis: 1;
    flex-shrink: auto;
    display: block;
  }
  .profile-right {
    min-width: 368px;
    max-width: 368px;
    display: block;
    padding-left: clamp(24px, 24px + 100vw - 1080px, 40px);
    min-height: 100vh;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: rgb(242, 242, 242);
    box-sizing: border-box;
  }
}
</style>
