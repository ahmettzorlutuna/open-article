<script>
import { mapActions } from "vuex";
import UserList from "../components/UserList.vue";

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
    UserList,
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  }
};
</script>

<template>
  <UserList :users="users" :isLoading="isLoading" :errMessage="errMessage" />
</template>
