<template>
    <!-- <h1 id="user-name"><a :href="`/users/profile/${user._id}`">{{ user.username }}</a></h1> -->
    <article v-for="post in user.posts" class="user-post">
      <h2 id="post-name"><a :href="`/posts/${post._id}`">{{ post.name }}</a></h2>
      <p id="post-content"><a :href="`/posts/${post._id}`">{{ truncateContent(post.content) }}</a></p>
      <span id="created-date">Created date <span >{{ formatDate(post.date) }}</span></span>
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
.user-post{
border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(242, 242, 242);
}
a{
text-decoration: none;
color: black;
}
#user-name{
flex-grow: 1;
margin: 2.4vw 0 0 0;
font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
#post-name{
flex-grow: 1;
letter-spacing: 0;
}
#post-content{
font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
}
#created-date{
flex-grow: 1;
}

</style>
