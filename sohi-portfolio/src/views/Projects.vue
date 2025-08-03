<template>
  <section>
    <h1>Projects</h1>
    <div class="project-grid">
      <div class="project-card" v-for="n in 3" :key="n">
        <h2>인보이스 관리 시스템 {{ n }}</h2>
        <p>Vue 3 + Composition API 기반 프로젝트</p>
        <button>View Project</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
</style>
