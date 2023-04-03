<template>
  <v-container>
    <!-- <h1 v-for="(value, key) in data" :key="(value, key)">{{ key }}</h1> -->
    <h1>article page</h1>
  </v-container>
</template>

<script>
import data from "../../../../static/manual.json";
import marked from "marked";

export default {
  name: "ArticlePage",
  data() {
    return {
      data: data,
    };
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
    cardTitle(innerData) {
      var titles = [];
      for (var index = 0; index < Object.keys(innerData).length; index++) {
        titles.push(Object.keys(innerData)[index].split(".md")[0]);
      }
      return titles;
    },
    cardText(innerData) {
        console.log(innerData)
        var text = []
        for (var index = 0; index < Object.values(innerData).length; index++) {
            if (typeof Object.values(innerData)[index] === 'object') text.push("Click to visit the contents of the folder")
            else text.push(marked.parse(Object.values(innerData)[index]).replace(/<[^>]*>/g, '').replace("&#39;", "'").split(/\s+/).slice(0, 50).join(" ")+"...")
            // console.log(marked.parse(Object.values(innerData)[index]))
        }
      return text;
    },
  },
  mounted() {},
};
</script>
