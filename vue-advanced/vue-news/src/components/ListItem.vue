<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || 0}}
          </div>
        <div>
          <p class="news-title">
              <template v-if="item.domain">
                <a v-bind:href="item.url">
                    {{ item.title }}
                </a>
              </template>
              <template v-else>
                <router-link :to="`item/${item.id}`"> 
                    {{ item.title }}
                </router-link>
              </template>
            </p>
          <small>
            {{ item.time_ago }} by 
            <router-link 
            v-if="item.user"
            :to="`/user/${item.user}`">
                {{ item.user }}
            </router-link>
            <a 
            :href="item.url" 
            v-else
            target="_blank">
                {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    if(name === 'news'){
        this.$store.dispatch('FETCH_NEWS');
    }else if(name === 'ask'){
        this.$store.dispatch('FETCH_ASKS');
    }else if(name === 'jobs'){
        this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed: {
      listItems() {
        return this.$store.state.list;
      }
  }
}
</script>

<style scoped>
.news-list{
  margin:0;
  padding:0;
}
.post{
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  list-style: none;
  border-bottom: 1px solid #f2f2f2;
}
.points{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color:#42b883
}
</style>