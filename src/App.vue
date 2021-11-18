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
          <h1 class="title" v-if="empty === false">FILM</h1>
          <div v-if="!search == ''" class="row row-cols-3 g-3">
            <MovieCard
              v-for="movie in movies"
              :key="movie.id"
              class="col"
              :data="movie"
            ></MovieCard>
          </div>
        </div>
        <div class="tvShows py-5">
          <h1 class="title" v-if="empty === false">SERIE TV</h1>
          <div v-if="!movies == []" class="row row-cols-3 g-3">
            <ShowCard
              v-for="show in tvShows"
              :key="show.id"
              class="col"
              :data="show"
            ></ShowCard>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "./components/MovieCard.vue";
import ShowCard from "./components/ShowCard.vue";

export default {
  name: "App",
  components: { MovieCard, ShowCard },
  data() {
    return {
      apiKey: "4da53067624ff511e71f704a970e4a73",
      apiUrl: "https://api.themoviedb.org/3",
      movies: [],
      tvShows: [],
      search: "",
      empty: true,
    };
  },
  methods: {
    searchMovie(media) {
      axios
        .get(this.apiUrl + "/search/" + media, {
          params: {
            api_key: this.apiKey,
            query: this.search,
          },
        })
        .then((resp) => {
          this.empty = false;
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
    /* countryFlag(flagToSearch) {
      console.log(flagToSearch);
      if (!this.flags[flagToSearch]) {
        return require("@/assets/earth.png");
      }
      return require("@/assets/" + this.flags[flagToSearch]);
    }, */
  },
};
</script>
<style lang="scss">
@import "@/styles/app";
</style>