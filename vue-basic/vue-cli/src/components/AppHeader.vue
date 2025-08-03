<template>
  <header>
      <h1>{{test}}</h1>
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['test'],
    methods: {
        sendEvent: function(){
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>