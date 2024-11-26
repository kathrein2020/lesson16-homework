<!-- поисковая форма и логика -->
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

