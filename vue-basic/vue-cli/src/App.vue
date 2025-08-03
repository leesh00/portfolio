<template>
  <div>
    <app-header 
    v-bind:test="str"
    v-on:renew = "renewStr"
    ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data: function() {
    return{
      str : 'Head'
    }
  },
  components : {
    'app-header' : AppHeader
  },
  methods: {
    renewStr : function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>