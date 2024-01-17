<script>
import { mapActions } from 'vuex';
import SinglePost from "../components/SinglePost.vue";

export default {
    name: 'UserView',
    data() {
        return {
            isLoading: true,
            user: {}
        }
    },
    async mounted() {
        await this.updateUser()
        this.isLoading = false
    },
    methods: {
        ...mapActions(['fetchUser', 'deletePost']),
        async updateUser () {
            this.user = await this.fetchUser(this.$route.params.userId)
        },
        async removePost(postId){
            await this.deletePost(postId)
            this.updateUser()
        }
    },
    components: {
        SinglePost
    }
}
</script>

<template>
<div class="user">
    <p v-if="isLoading">PleaseWait......</p>
    <div v-else>
        <div>
            <SinglePost :user="user" />
        </div>
    </div>
</div>
</template>

<style >
</style> 