<template>
  <section class="home">
    <h1>안녕하세요, 홍길동입니다.</h1>
    <p>Vue.js로 사용자 중심의 인터페이스를 만드는 프론트엔드 개발자입니다.</p>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;

  p {
    font-size: 1.2rem;
  }
}
</style>
