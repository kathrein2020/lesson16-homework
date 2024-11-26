<!-- поиковая страница фильма -->

<template>
  <div class="searchlist">
    <Header />
    <SearchForm @search="searchMovies" />
    <MovieList v-if="movies.length" :movies="movies" />
    <p v-else>пока нету.. фильмнiн соны</p>
  </div>
</template>

<script>
import axios from "axios";
import SearchForm from "../components/SearchForm.vue";
import MovieList from "../components/MovieList.vue";
import Header from '../components/Header.vue';

export default {
  name: "MoviesPage",
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    async searchMovies(query) {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      this.movies = response.data.map(item => item.show);
    },
  },
  components: {
    Header,
    SearchForm,
    MovieList,
    
  },
};
</script>

<style scoped>

.searchlist {
  display: flex;
  flex-direction: column;
height: 10%;

}

</style>

