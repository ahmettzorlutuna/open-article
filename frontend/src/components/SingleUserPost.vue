<template>
  <!-- <h1 id="user-name"><a :href="`/users/profile/${user._id}`">{{ user.username }}</a></h1> -->
  <article v-for="post in user.posts" class="user-post">
    <span id="created-date"
      ><span>{{ formatDate(post.date) }}</span></span
    >
    <h2 id="post-name">
      <router-link :to="`/posts/` + post._id">{{ post.name }}</router-link>
    </h2>
    <p id="post-content">
      <router-link :to="`/posts/` + post._id">{{
        truncateContent(post.content)
      }}</router-link>
    </p>
    <span>{{ readingMinute(post.content) }} min read</span>
  </article>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["user"]);

const truncateContent = computed(() => {
  return (content) => content.slice(0, 280) + " ...";
});

const readingMinute = computed(() => {
  return (content) => Math.round(content.split(" ").length / 240);
});

function formatDate(date) {
  if (!date) {
    return "";
  }

  const formattedDate = new Date(date);

  const options = { month: "long", day: "numeric" };
  return formattedDate.toLocaleDateString("en-US", options);
}
</script>
<style scoped>
.user-post {
  padding: 10px;
  margin: 5px 0 5px 0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(242, 242, 242);
}
a {
  text-decoration: none;
  color: black;
}
#post-name {
  margin-top: 20px;
}
#user-name {
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
#post-content {
  font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times,
    serif;
  margin-bottom: 2.6em;
}
#created-date{
  margin-top: -10px;
}
</style>
