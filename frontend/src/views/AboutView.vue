<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
.about
  HelloWorld(msg="About View")
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
