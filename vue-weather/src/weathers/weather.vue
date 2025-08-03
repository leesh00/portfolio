<template>
  <div>
      <div v-for="weather in weathers">{{ weather }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            weathers: []
        }
    },
    created() {
        axios.get('51797478bc9926b37e361d73996ea63f')
            .then(function(response) {
                console.log(response)
            })
            .catch()
    }

}
</script>

<style>

</style>