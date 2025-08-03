<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header{
    display: flex;
    padding: 8px;
    background-color: #42b883;
    color: #fff;
}
.header a{ 
    color:#fff;
    margin: 0 5px;
}
.header .router-link-active{
    font-weight: 600;
    color:#355;
}
</style>