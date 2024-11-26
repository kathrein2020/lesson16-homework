<template>
    <div>
      <Header />
      <!-- Заголовок страницы -->
      <h2>Результаты фильтрации</h2>
      <!-- Список фильмов -->
      <div v-if="movies.length" class="movielist">
        <ul>
          <!-- Выводим каждый фильм из массива -->
          <li v-for="movie in movies" :key="movie.id">
            <img :src="movie.image?.medium"  />
            <h3>{{ movie.name }} </h3>
            <div class="ratefont"> Рейтинг:  {{ movie.rating.average || "N/A" }}</div>
            <br>
            <div>Год: {{ new Date(movie.premiered).getFullYear() }}</div>
          </li>
        </ul>
      </div>
      <!-- Если фильмы не найдены -->
      <p v-else>Фильмы не найдены.</p>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import axios from "axios";
  
  export default {
    components: { Header},
    name: "FilteredMovies", // Имя компонента
    data() {
      return {
        movies: [], // Массив фильмов
      };
    },
    async created() {
      // Определяем параметры фильтрации из URL
      const ratingFilter = this.$route.query.rating;
      const yearFilter = this.$route.query.year;
  
      // Получаем данные с API
      const response = await axios.get("https://api.tvmaze.com/shows");
  
      // Применяем фильтры
      if (ratingFilter) {
        this.movies = response.data.filter((movie) => movie.rating.average > 8);
      } else if (yearFilter) {
        this.movies = response.data.filter((movie) => {
          const year = new Date(movie.premiered).getFullYear();
          return year > 2000;
        });
      }
    },
  };
  </script>
  
  <style scoped>
  /* Стили страницы фильтров */

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

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
  img {
    width: 100px;
    margin-right: 20px;
  }


  </style>
  