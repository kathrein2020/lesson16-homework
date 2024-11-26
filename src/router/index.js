import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import MovieDetails from '../views/MovieDetails.vue';
import FilteredMovies from "../views/FilteredMovies.vue"; // Страница фильтров

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home //страница главная
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies //страница поиска фильмов
    },
    {
      path: '/movies/:id',
      name: 'MoviesDetails',
      component: MovieDetails // страница о детальной инфо фильма
    },
    { path: "/filter", 
      component: FilteredMovies }, // страница с результатами фильтров
  ]
})

export default router
