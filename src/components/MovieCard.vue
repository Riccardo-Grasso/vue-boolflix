<template>
  <div class="product-card">
    <div class="info">
      <strong>Titolo: </strong>{{ data.title }}<br />
      <strong>Titolo Originale: </strong>{{ data.original_title }} <br />
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
  name: "MovieCard",
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
      console.log(imgUrlCompleto);
      if (!this.data.poster_path) {
        return require("@/assets/logo.png");
      }
      return imgUrlCompleto;
    },

    voteRound() {
      const myVote = this.data.vote_average;
      let finalVote = Math.round(myVote / 2);

      switch (finalVote) {
        case 1:
          finalVote = "\u2B50";
          break;
        case 2:
          finalVote = "\u2B50" + "\u2B50";
          break;
        case 3:
          finalVote = "\u2B50" + "\u2B50" + "\u2B50";
          break;
        case 4:
          finalVote = "\u2B50" + "\u2B50" + "\u2B50" + "\u2B50";
          break;
        case 5:
          finalVote = "\u2B50" + "\u2B50" + "\u2B50" + "\u2B50" + "\u2B50";
          break;
        default:
          finalVote = "ND";
      }
      return finalVote;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/productCard";
</style>

