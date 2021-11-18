<template>
  <div class="product-card">
    <div class="info">
      <strong>Titolo: </strong>{{ data.name }}<br />
      <strong>Titolo Originale: </strong>{{ data.originalName }} <br />
      <strong>Lingua: </strong>
      <img
        :src="flags[data.original_language] || flags.default"
        alt="flag"
        class="flag-img"
      /><br />
      <strong>Voto: </strong>{{ voteRound }}<br />
    </div>
    <div class="poster">
      <img :src="imgPath" alt="poster" class="poster-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCard",
  data() {
    return {
      flags: {
        en: require("@/assets/en.png"),
        it: require("@/assets/it.png"),
        fr: require("@/assets/fr.png"),
        es: require("@/assets/es.png"),
        default: require("@/assets/earth.png"),
      },
      /*     imgDefault: {
        default: require("@/assets/logo.png"),
      }, */
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