<template>
      <article v-for="post in user.posts" class="card-container">
        <div class="created-date">
          <p id="user-name"><a :href="`/users/profile/${user._id}`">From {{ user.username }} </a></p>
          <p>·</p>
          <p id="post-date">{{ formatDate(post.date) }}</p>
        </div>
        <h1 id="post-name"><a :href="`/posts/${post._id}`">{{ post.name }}</a></h1>
        <p id="post-content"><a :href="`/posts/${post._id}`">{{ truncateContent(post.content) }}</a></p>
      </article>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps(['user'])

const truncateContent = computed(() => {
  return (content) => content.slice(0,280) + " ..."
})


function formatDate(date){
  if(!date){
        return "";
      }

      const formattedDate = new Date(date);

      const options = { year: "numeric", month: "long", day: "numeric" };
      return formattedDate.toLocaleDateString("en-US", options);
}



</script>

<style scoped>
.card-container{
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(242, 242, 242);
}
.card-container a{
  text-decoration: none;
  color: black;
}
#user-name{
  margin-right: 5px;
}
#post-date{
  margin-left: 5px;
}
#post-name{
  font-size: 25px;
}
#post-content{
  font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 20px;
}
.created-date{
  color: gray;
  display: flex;
}

</style>
