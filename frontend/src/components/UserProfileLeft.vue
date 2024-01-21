<template>
  <div class="header">
    <div class="profile-name">
      <h3 id="user-name">
        {{ user.username }}
      </h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 448 512"
      >
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
        />
      </svg>
    </div>
    <nav class="header-navbar">
      <div class="items">
        <span>
          <div class="div-span">
            <p>
              <span>Home</span>
            </p>
          </div>
        </span>
        <span>
          <div class="div-span">
            <p>
              <span>Lists</span>
            </p>
          </div>
        </span>
        <span>
          <div class="div-span">
            <p>
              <span>About</span>
            </p>
          </div>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped>
#user-name {
  font-weight: 500;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.header-navbar{
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(242, 242, 242);
}
.header{
  height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0 50px 0;
}
.profile-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p{
  font-size: 14px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 12px;
  box-sizing: inherit;
  color: rgb(139, 139, 139);
}
.div-span{
  margin-right: 30px;
  padding-bottom: 10px;
  min-width: max-content;
}

.items {
  display: flex;
  align-items: center;
}

</style>
