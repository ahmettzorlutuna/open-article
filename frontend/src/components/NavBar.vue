<template>
  <nav class="myNav">
    <ul>
      <div class="items-left">
        <h1>OpenArticle.com</h1>
      </div>
      <li><a href="">Popular</a></li>
      <li><a href="">Users</a></li>      
      <li><a href="">Contact</a></li>
      <div class="items-right">
        <li><a href="">Profile</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">Sign up</a></li>
      </div>
    </ul>
  </nav>
  <hr>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.myNav {
  display: block;
  height: 60px;
  float: none;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.myNav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.myNav li {
  display: inline;
  margin: 0 0 0 10px
}

.items-right{
  float: right;
  padding: 0 10px 0 0;
}

.items-left{
  float: left;
}

.items-left h1{
  line-height: 60px;
  padding: 0 0 0 10px;
}

.myNav li a {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: black;
  line-height: 60px;
}
</style>
