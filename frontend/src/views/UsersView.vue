<script>
import { mapActions } from 'vuex';

export default {
  name: 'UsersView',
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  async mounted() {
    try {
      this.users = await this.fetchUsers()
    } catch (e) {
      this.errMessage = e.message
    }finally{
      this.isLoading = false
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
}
</script>

<template lang="pug">
.home
  p(v-if="errMessage") {{ errMessage }}
  p(v-else-if="isLoading") Please wait...
  div(v-else)
    p There are {{ users.length }} user in sitee. 
    ol
      li(
        v-for="user in users"
        :key="user.name")
        a(:href="`/users/${user._id}`") {{ user.username }} 
</template>