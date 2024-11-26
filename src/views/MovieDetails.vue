<!-- детальное инфо после клика на фильм на главной странице -->
<template>   
  <div v-if="movie">
    <Header />
     <h2>{{ movie.name }}</h2>
    <img :src="movie.image?.original" />
    <p>Год выпуска: {{ new Date(movie.premiered).getFullYear() }}</p>
    <p>Рейтинг: {{ movie.rating?.average || "N/A" }}</p>
    <p>Жанр: {{ movie.genres.join(", ") }}</p>
    О чем всё это:<div v-html="movie.summary"></div>
  </div>
</template>

<script>
import axios from "axios";
import Header from '../components/Header.vue';

export default {
   components: { Header },
  name: "MovieDetailsPage",
  data() {
    return {
      movie: null,
    };
  },
   async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    this.movie = response.data;
  },
};
</script>


