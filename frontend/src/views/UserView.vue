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

<template>
<div class="user">
    <p v-if="isLoading">PleaseWait......</p>
    <div v-else>
        <div class="page-detail-baslik">
            <h1>Welcome User Detail Page</h1>
        </div>
        <div class="user-detail-baslik">
            <h1>{{ user.username }}'s articleee</h1>
        </div>
        <h2>Following: {{ user.following.length }}</h2>
        <h2>Followers: {{ user.followers.length }}</h2>
        <ul>
            <li v-for="follower in user.followers" :key="follower.username"><a :href="`/users/${follower._id}`">{{ follower.username }}</a></li>
        </ul>
        <ul>
            <li v-for="following in user.following" :key="following._id"><a :href="`/users/${following._id}`">{{ following.username }}</a></li>
        </ul>
        <div class="makale-baslik">
            <h1>Makaleler</h1>
        </div>
        <div class="articles"></div>
        <ul> </ul>
        <h1 v-for="post in user.posts" :key="post.name">{{ post.name }}
            <p>{{ post.content }}</p>
            <button class="btn btn-outline-success remove" @click="removePost(post._id)">Remove</button>
        </h1>
    </div>
</div>
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