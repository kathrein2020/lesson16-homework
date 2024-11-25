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

<!-- <template>
  <div>
    <Header />
    <SearchForm @search="searchMovies" />
    <MovieList :movies="movies" />
    <p v-if="movies.length === 0">Ничего не нашли.</p>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SearchForm from '../components/SearchForm.vue';
import MovieList from '../components/MovieList.vue';
import axios from 'axios';

export default {
  components: { Header, SearchForm, MovieList },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    searchMovies(query) {
      axios.get(`https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${query}`, {
        headers: {
          'x-rapidapi-key': 'bbb8fa1eb2msh1c6a3ac8f2b32c5p14cf28jsn423043d3cbab',
          'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com',
        }
      })
      .then(response => {
        this.movies = response.data.results;
      });
    }
  }
};
</script> -->