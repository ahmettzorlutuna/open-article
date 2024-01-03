<template>
  <div v-for="post in user.posts" class="centered">
    <div class="cards">
      <article class="card-content">
        <h1><a :href="`/users/${user._id}`">{{ user.username }} </a></h1>
          <h2><a :href="`/users/article/${post._id}`">{{ post.name }}</a></h2>
          <p>{{ post.content }}</p>
          <span id="created-date">Created date <span >{{ post.createdDate}}</span></span>
      </article>
      <hr class="card-line">
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style scoped>
.centered{
  display: flex;
  justify-content: center;
}
.cards{
  --cards-width: 728px;
  font-family: 'Arial', sans-serif;
  height: 244px;
  width: var(--cards-width);
  position: relative;
}
.card-line{
  width: var(--cards-width);
  bottom: 0;
  border: 1px solid rgb(242, 242, 242);
  position: absolute;
}
.card-content a{
  text-decoration: none;
  color: black;
}

#created-date{
  background-color: rgba(218, 218, 218, 0.600);
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  margin: 0 5px 0 5px;
}
</style>
