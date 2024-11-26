<!-- списко с фильмами и описание сразу -->
<template>
  <div>
    <div v-for="movie in movies" :key="movie.id" class="movielist">
      <router-link :to="`/movies/${movie.id}`">
        <img :src="movie.image?.medium" :alt="movie.name" />
       <div class="movielist">{{ movie.name }} </div>
      <div class="movielist">Год выпуска: {{ new Date(movie.premiered).getFullYear() }}</div>
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
  /* padding: 1em; */
  margin-bottom: 5px;
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


