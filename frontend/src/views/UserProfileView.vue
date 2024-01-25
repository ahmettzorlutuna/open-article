<script>
import { mapActions } from "vuex";
import SingleUserPost from "../components/SingleUserPost.vue";
import UserProfileLeft from "@/components/UserProfileLeft.vue";
import UserProfileRight from "@/components/UserProfileRight.vue";

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
    UserProfileLeft,
    UserProfileRight
  },
};
</script>

<template>
  <div class="user">
    <div class="user-profile">
      <main class="profile-left">
        <h1>
          <!-- {{ user.username }} -->
          <UserProfileLeft :user="user" />
        </h1>
        <SingleUserPost :user="user" />
      </main>
      <div class="profile-right">
        <UserProfileRight :user="user" />
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

@media (min-width: 552px) and (max-width: 727.98px){
  .profile-right{
    display: none;
  }
}

@media (min-width: 728px) and (max-width: 903.98px){
  .profile-right{
    display: none;
  }
}

@media (min-width: 904px) and (max-width: 1079.98px){
  .profile-right{
    display: none;
  }
}




</style>
