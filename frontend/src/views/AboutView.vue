<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'AboutView',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Welcome To About View',
      showHelloWorld: false
    }
  },
  methods: {
  },
  computed: {}
}
</script>

<template lang="pug">
.about
  HelloWorld(
    theme="red"
    )
    slot
    template(#links)
      h1 Register to site
      a(href="#") Sign in
      a(href="#") Sign up
  

</template>

<style>







</style>
