<template>
  <div class="header">
    <div class="items">
      <div class="photo">
      </div>
      <span>{{ user.username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped>
.header {
  max-width: 368px;
  max-height: 368px;
  padding-right: clamp(24px, 24px + 100vw - 1080px, 40px);
  padding: 10px 0 20px 0;
}
.items {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 20px;
}
.photo {
  width: 88px;
  height: 88px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: black;
}
</style>
