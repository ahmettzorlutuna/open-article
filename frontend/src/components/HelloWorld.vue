<script>

export default{
  name: 'HelloWorld',
  props: {
    theme: {
      type: String,
      required: false,
      default: 'dark'
    }
  }
}
</script>

<template lang="pug">
div.hello(:class="{red: theme === 'red'}")
  div.actions
    slot(name="links")
</template>

<style>
.hello .actions a{
  padding: 8px;
  border: 1px solid #eee;
  border: 4px;
  border-color: black;
  text-decoration: none;
  margin: 10px;
}
.hello .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.hello{
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;

}
</style>
