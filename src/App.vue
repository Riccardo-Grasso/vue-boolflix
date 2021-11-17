<template>
  <div id="app">
    <nav class="navbar">
      <div class="input-group search-bar mb-3">
        <input
          type="text"
          class="form-control"
          v-model="search"
          placeholder="Cerca..."
          @keydown.enter="searchAll"
        />
        <button
          class="btn btn-warning"
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
        <div class="movies">
          <h2>FILM</h2>
          <ul v-if="!search == ''">
            <li v-for="movie in movies" :key="movie.id" class="py-3">
              Titolo: {{ movie.title }} <br />
              Titolo Originale: {{ movie.original_title }} <br />
              Lingua: {{ movie.original_language }}<br />
              Voto: {{ movie.vote_average }}
            </li>
          </ul>
        </div>
        <div class="tvShows">
          <h2>SERIE TV</h2>
          <ul v-if="!search == ''">
            <li v-for="show in tvShows" :key="show.id" class="py-3">
              Titolo: {{ show.name }} <br />
            </li>
          </ul>
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