<script>
import { mapActions } from 'vuex';


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
    }
}
</script>

<template lang="pug">
.user
    p(v-if="isLoading") PleaseWait...
    div(v-else)
        .page-detail-baslik
            h1 Welcome User Detail Page
        .user-detail-baslik
            h1 {{ user.username }}'s article
        h2 Following: {{ user.following.length }}
        h2 Followers: {{ user.followers.length }}
        ul
            li(
                v-for="follower in user.followers"
                :key="follower.username")
                a(:href="`/users/${follower._id}`") {{ follower.username }}
        ul
            li(
                v-for="following in user.following"
                :key="following._id")
                a(:href="`/users/${following._id}`") {{ following.username }}
        .makale-baslik
            h1 Makaleler
        .articles
        ul    
        li(
            v-for="post in user.posts"
            :key="post.name")
            a(:href="`/users/article/${post._id}`") {{ post.name }}
            h1 {{ post.content }}
            .btn.btn-outline-success.remove(@click="removePost(post._id)") Remove
                
</template>

<style scoped>
.makale-baslik {
    font-size: 1.5rem;
    margin: 1.3rem 0 0 1.3rem;
}

.page-detail-baslik {
    font-size: 1.4rem;
    margin: 1.3rem 0 0 1.3rem;
}
</style>