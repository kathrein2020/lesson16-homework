
<!-- delete -->

<template>

  <router-link :to="`/movies/${movie.imdb_id}`">
    <div class="movie-item">
      <h3>{{ movie.title }}</h3>
      <p v-if="movie.rating">Рейтинг: {{ movie.rating }}</p>
    </div>
  </router-link>

</template>

<script>
export default {
  props: ['movie']
};
</script>

<style scoped>

.movie-item {
  background: #282c34;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #61dafb;
}
</style>