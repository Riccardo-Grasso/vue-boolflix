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
            <div v-for="movie in movies" :key="movie.id" class="py-3 col">
              <div class="product-card">
                <strong>Titolo:</strong> {{ movie.title }} <br />
                <strong>Titolo Originale:</strong> {{ movie.original_title }}
                <br />
                <strong>Lingua:</strong>
                <img
                  :src="countryFlag(movie.original_language)"
                  alt="flag"
                /><br />
                <strong>Voto:</strong> {{ movie.vote_average }}<br />
              </div>
            </div>
          </div>
        </div>
        <div class="tvShows py-5">
          <h1 class="title" v-if="empty === false">SERIE TV</h1>
          <div v-if="!movies == []" class="row row-cols-3 g-3">
            <div v-for="show in tvShows" :key="show.id" class="py-3 col">
              <div class="product-card">
                <strong>Titolo:</strong> {{ show.name }} <br />
                <strong>Titolo Originale:</strong> {{ show.original_name }}
                <br />
                <strong>Lingua:</strong>
                <img
                  :src="countryFlag(show.original_language)"
                  alt="flag"
                /><br />
                <strong>Voto:</strong> {{ show.vote_average }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
      tvShows: [],
      search: "",
      empty: true,
      flags: {
        en: "en.png",
        it: "it.png",
        fr: "fr.png",
        es: "es.png",
      },
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
    countryFlag(flagToSearch) {
      console.log(flagToSearch);
      if (!this.flags[flagToSearch]) {
        return require("@/assets/earth.png");
      }
      return require("@/assets/" + this.flags[flagToSearch]);
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/app";
</style>