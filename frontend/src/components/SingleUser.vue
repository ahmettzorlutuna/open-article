<template>
      <article v-for="post in user.posts" class="card-container">
        <p id="user-name"><a :href="`/users/${user._id}`">{{ user.username }} </a></p>
        <h2 id="post-name"><a :href="`/posts/${post._id}`">{{ post.name }}</a></h2>
        <p id="post-content">{{ truncateContent(post.content) }}</p>
        <span id="created-date">Created date <span >{{ post.createdDate}}</span></span>
        <hr class="card-line">
      </article>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps(['user'])


const truncateContent = computed(() => {
  return (content) => content.slice(0,280) + " ..."
})

</script>

<style>
.card-container{
  display: flex;
  flex-flow: column;
  justify-content: center;
  --cards-width: 728px;
  width: var(--cards-width);
  min-height: 244px;
  margin: 5px 20px 40px 20px;
  position: relative;
  font-family: 'Arial', sans-serif;
  margin: auto; /* Center Div */
}
.card-line{
  width: var(--cards-width);
  bottom: 0;
  border: 1px solid rgb(242, 242, 242);
  position: absolute;
}
.card-container a{
  text-decoration: none;
  color: black;
}
#user-name{
  flex-grow: 1;
  margin: 10px 0 0 0;
}
#post-name{
  flex-grow: 1;
  letter-spacing: 0;
}
#post-content{
  flex-grow: 2;
  font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
}
#created-date{
  flex-grow: 1;
}

</style>
