<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col cols="12">
        <v-sheet tile class="pa-5 font-weight-black text-h5">
          {{ article }}
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-16 text-h8"> </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-3">
          <i>DISCLAIMER</i>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "../../../../static/manual.json";

export default {
  name: "ArticlePage",
  data() {
    return {
      data: data,

    };
  },
  async asyncData({ params }) {
    const folder = params.innerFolder;
    const article = params.article;
    console.log(article)
    return { folder, article };
  },
  //   async asyncData({ params, redirect }) {
  //     const mountains = await fetch(
  //       'https://api.nuxtjs.dev/mountains'
  //     ).then((res) => res.json())

  //     const filteredMountain = mountains.find(
  //       (el) =>
  //         el.continent.toLowerCase() === params.continent &&
  //         el.slug === params.mountain
  //     )
  //     if (filteredMountain) {
  //       return {
  //         continent: filteredMountain.continent,
  //         mountain: filteredMountain.title
  //       }
  //     } else {
  //       redirect('/')
  //     }
  //   },
  methods: {
    injectCardText() {},
  },
  mounted() {

  },
  beforeMount() {
  },
  
};
</script>
