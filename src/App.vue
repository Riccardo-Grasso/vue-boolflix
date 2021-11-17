<template>
  <div id="app" class="container">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="search"
        placeholder="Cerca..."
        @keydown.enter="searchMovie(search)"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="searchMovie(search)"
      >
        Search
      </button>
    </div>

    <ul v-if="!search == ''">
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      apiKey: "4da53067624ff511e71f704a970e4a73",
      apiUrl: "https://api.themoviedb.org/3",
      movies: [],
      serieTv: [],
      search: "",
    };
  },
  methods: {
    searchMovie(search) {
      axios
        .get(this.apiUrl + "/search/movie", {
          params: {
            api_key: this.apiKey,
            query: search,
          },
        })
        .then((resp) => {
          this.movies = resp.data.results;
        });
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/app";
</style>