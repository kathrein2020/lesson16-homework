<template>
  <form @submit.prevent="onSubmit">
    <input v-model="query" placeholder="поиск фильмов" />
    <button type="submit">Кинопоиск</button>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search", this.query);
    },
  },
};
</script>



<!-- <template>
  <div>
    <input v-model="query" placeholder="Введите название фильма" />
    <button @click="onSearch">Найти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.query);
    }
  }
};
</script> -->
