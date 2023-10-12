<script>

export default{
  name: 'HelloWorld',
  props: {
    theme: {
      type: String,
      required: false,
      default: 'dark'
    }
  },
  methods: {
    closeHello(){
      this.$emit('close')
    }
  }
}
</script>

<template lang="pug">
div.backdrop(@click.self="closeHello")
  div.hello(:class="{red: theme === 'red'}")
    div.actions
      slot(name="links")
</template>

<style>
.backdrop{
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.hello{
  width: 500px;
  padding: 20px;
  margin: 100px auto;
  background: rgb(114, 186, 191);
  border-radius: 10px;
}
.hello .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.hello .actions a{
  color: #333;
  padding: 8px;
  border: 1px solid #ff0000;
  border: 4px;
  border-color: black;
  text-decoration: none;
  margin: 10px;
}
.hello .actions a:hover{
  background-color: cadetblue;
  border-radius: 10px;
}
</style>
