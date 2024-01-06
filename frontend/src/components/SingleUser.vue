<template>
      <article v-for="post in user.posts" class="card-container">
        <h1 id="user-name"><a :href="`/users/${user._id}`">{{ user.username }} </a></h1>
        <p id="post-name"><a :href="`/users/article/${post._id}`">{{ post.name }}</a></p>
        <p id="post-content">{{ post.content }}</p>
        <span id="created-date">Created date <span >{{ post.createdDate}}</span></span>
        <hr class="card-line">
      </article>
</template>

<script>
export default {
  props: ["user"],
  computed: {
    shortenPostContent(){
      return this.post.content.splice(0,10)
    }
  },
  mounted() {
    shortenPostContent()
  },
};
</script>

<style scoped>
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
}
#post-name{
  flex-grow: 1;
}
#post-content{
  flex-grow: 2;
}
#created-date{
  flex-grow: 1;
}

</style>
