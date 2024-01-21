<template>
  <nav class="myNav">
    <ul>
      <div class="items-left">
        <li><router-link to="/">OpenArticle.com</router-link></li>
      </div>
      <li><router-link to="/popular">Popular</router-link></li>
      <li><router-link to="/users">Posts</router-link></li>      
      <li><a href="">Contact</a></li>
      <div class="items-right">
        <li><router-link to="/users/profile/659d9fab11ab288893ff7c9e">Profile test</router-link></li>
        <li><a href="">Profile</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">Sign up</a></li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.myNav {
  text-align: center;
  display: block;
  height: 60px;
  float: none;
  overflow: hidden;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(242, 242, 242);
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

.items-left li{
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
