<template>
  <div>
      <!-- <div v-for="weather in weathers">{{ weather }}</div> -->

    <p>
      제공 서비스 : 오늘 날씨, 최고기온, 최저기온, 날씨아이콘, 국가, 도시코드
    </p>
    <p>아이콘 : </p>
    <p>오늘 날씨 : </p>
    <p>최고기온 : </p>
    <p>최저기온 : </p>
    <p>아이콘 : </p>
    <p>내일날씨 : </p>
    <p>국가&도시 : {{ city }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
      return {
        view: false,
        country: '',
        city: ''
      }
    },
    created() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=51797478bc9926b37e361d73996ea63f')
            .then(function(response) {
              
              console.log(response.data.name)
            })
            .catch()
    },
    methods: {
      searchWeather() {
        const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=51797478bc9926b37e361d73996ea63f'
        this.$http.get(`${BASE_URL}`)
        .then((result) => {
          this.country = result.data.sys.country
          this.city = result.data.name
          this.view = true
          console.log(result)
        })
      }
    }

}
</script>

<style>

</style>
