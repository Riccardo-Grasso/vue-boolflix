<template>
  <div class="col mt-5">
    <div class="product-card">
      <div class="info p-5">
        <div class="info-content mb-2">
          <strong class="text-big">Titolo: </strong
          >{{ data.title || data.name }}
        </div>

        <div class="info-content mb-2">
          <strong class="text-big">Titolo Originale: </strong
          >{{ data.original_title || data.original_name }}
        </div>

        <div class="info-content mb-2">
          <strong class="text-big">Lingua: </strong>
          <img
            :src="flags[data.original_language] || flags.default"
            alt="flag"
            class="flag-img ms-2"
          />
        </div>
        <div class="info-content">
          <strong class="text-big">Voto: </strong>
          <div class="stars-container ms-1">
            <i
              v-for="i in 5"
              :key="'vote_star_' + i"
              class="fa"
              :class="i <= voteRound ? 'fa-star' : 'fa-star-o'"
            ></i>
          </div>
        </div>
      </div>
      <div class="poster">
        <img :src="imgPath" alt="poster" class="poster-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      flags: {
        en: require("@/assets/en.png"),
        it: require("@/assets/it.png"),
        fr: require("@/assets/fr.png"),
        es: require("@/assets/es.png"),
        default: require("@/assets/earth.png"),
      },
    };
  },
  props: {
    data: Object,
  },
  computed: {
    imgPath() {
      const imgUrl = "https://image.tmdb.org/t/p/";
      const imgSize = "w342";
      const imgUrlCompleto = imgUrl + imgSize + this.data.poster_path;
      if (!this.data.poster_path) {
        return require("@/assets/logo.png");
      }
      return imgUrlCompleto;
    },

    voteRound() {
      const myVote = this.data.vote_average;
      const finalVote = Math.round(myVote / 2);
      return finalVote;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/productCard";
</style>

