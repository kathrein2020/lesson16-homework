<template>
  <div>
    <Header />
<hr>
<hr>
    <div>
<!-- Кнопки для фильтрации -->
       <div>
         <!-- Кнопка для фильтрации фильмов с рейтингом больше 9 -->
        <button @click="filterByRating" class="button1">Фильмы с рейтингом > 8</button>
        <!-- Кнопка для фильтрации фильмов, снятых после 2000 года -->
        <button @click="filterByYear" class="button2">Фильмы после 2000 года</button>
      </div>
<hr>
<hr>
      
    </div>
    <MovieList :movies="filteredMovies" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MovieList from '../components/MovieList.vue';
import axios from 'axios';

export default {
  components: { Header, MovieList },
  data() {
    return {
      movies: [],
      filteredMovies: []
    };
  },
 


    methods: {
      // Фильтруем фильмы с рейтингом больше 9
       filterByRating() {
        this.$router.push({ path: "/filter", query: { rating: "8" } });
      },
      // Фильтруем фильмы, снятые после 2000 года
      filterByYear() {
        this.$router.push({ path: "/filter", query: { year: "2000" } });
      },
    },
  


  async mounted() {
    const response = await axios.get("https://api.tvmaze.com/shows");
    this.movies = response.data.slice(0, 20);
    this.filteredMovies = this.movies;
  },
  components: {
    MovieList, Header
  },
  
};
</script>


<style scoped>
  /* Стили главной страницы */
  h2 {
    margin: 20px 0;
  }
  .button1 {
    margin-left: 50px;
    margin-right: 5px;
    padding: 10px;
    background-color: #282c34;
    color:  #61dafb;
    border: none;
    cursor: pointer;
  }

  .button2 {
    
    margin-left: 130px;
    margin-right: 0px;
    padding: 10px;
    background-color: #282c34;
    color:  #61dafb;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>