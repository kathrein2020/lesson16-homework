<template>
  <header>
    <h1>Поиск фильмов и топ-20</h1>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/movies">Найти фильм</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>

header {
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
