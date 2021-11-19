<template>
  <div id="app">
    <nav class="navbar">
      <img src="@/assets/logo.png" alt="logo" />
      <div class="input-group search-bar mb-3">
        <input
          type="text"
          class="form-control"
          v-model="search"
          placeholder="Cerca..."
          @keydown.enter="searchAll"
        />
        <button
          class="btn"
          type="button "
          id="button-addon2"
          @click="searchAll"
        >
          Search
        </button>
      </div>
    </nav>
    <main>
      <div class="container">
        <div class="movies py-5">
          <h1 class="title" v-if="this.movies.length !== 0">FILM</h1>
          <div v-if="!search == ''" class="row row-cols-3 g-3">
            <Card v-for="movie in movies" :key="movie.id" :data="movie"></Card>
          </div>
        </div>
        <div class="tvShows py-5">
          <h1 class="title" v-if="this.tvShows.length !== 0">SERIE TV</h1>
          <div v-if="!movies == []" class="row row-cols-3 g-3">
            <Card v-for="show in tvShows" :key="show.id" :data="show"></Card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: { Card },
  data() {
    return {
      apiKey: "4da53067624ff511e71f704a970e4a73",
      apiUrl: "https://api.themoviedb.org/3",
      movies: [],
      tvShows: [],
      search: "",
    };
  },
  methods: {
    searchMovie(media) {
      if (this.search === "") {
        this.movies = [];
        this.tvShows = [];
      } else
        axios
          .get(this.apiUrl + "/search/" + media, {
            params: {
              api_key: this.apiKey,
              query: this.search,
              language: "it",
            },
          })
          .then((resp) => {
            if (media == "movie") {
              this.movies = resp.data.results;
            } else {
              this.tvShows = resp.data.results;
            }
          });
    },
    searchAll() {
      this.searchMovie("movie");
      this.searchMovie("tv");
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/app";
</style>