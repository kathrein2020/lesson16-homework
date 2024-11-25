<template>
  <div>
    <div v-for="movie in movies" :key="movie.id" class="movielist">
      <router-link :to="`/movies/${movie.id}`">
        <img :src="movie.image?.medium" :alt="movie.name" />
       <div class="movielist"><h3 >{{ movie.name }}</h3> </div>
      <p class="movielist">Год выпуска: {{ new Date(movie.premiered).getFullYear() }}</p>
      <div class="ratefont"> Рейтинг: {{ movie.rating.average }} </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: ["movies"],
};
</script>

<style scoped>

.movielist {
  background: #282c34;
  color: #61dafb;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ratefont {
color: hsla(160, 100%, 37%, 1);;
}
nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #61dafb;
}
</style>

<!-- <template>
  <div class="movie-list">
    <MovieItem v-for="movie in movies" :key="movie.imdb_id" :movie="movie" />
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  props: ['movies'],
  components: { MovieItem }
};
</script> -->
