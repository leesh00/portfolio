<template>
  <div class="clearAllontainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clearTodo: 'removeAllItem'
    })
  }
 
}
</script>

<style scoped>
.clearAllontainer{
  width: 8.5rem;
  height: 50px;
  line-height:50px;
  background-color: #fff;
  border-radius: 5px;
  margin:0 auto;
}
.clearAllBtn{
  display: block;
  color:#e20303;
  cursor: pointer;
}
</style>