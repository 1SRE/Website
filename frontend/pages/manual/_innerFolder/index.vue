<template>
  <v-container>
    <!-- <h1 v-for="(value, key) in data" :key="(value, key)">{{ key }}</h1> -->

    <h1>{{ folderName }}</h1>
    <v-row justify="left" align="center">
      <v-col align-self="stretch" cols="auto" sm="3" md="3">
        <v-card height="100%" min-width="100%" max-width="100%">
          <v-card-title>asdf</v-card-title>
          <v-card-text>
            <p>{{ shorten("alksdjfasdf") }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "../../../static/manual.json";
import marked from "marked";

export default {
  name: "ManualPage",
  data() {
    return {
      data: data,
    };
  },
  async asyncData({ params }) {
    const folderName = params.innerFolder;
    return { folderName };
  },
  methods: {
    shorten(txt) {
      // console.log(txt)
      if (txt === undefined) return "This is a folder";
      else
        return (
          marked
            .parse(txt)
            .replace(/<[^>]*>/g, "")
            .replace("&#39;", "'")
            .split(/\s+/)
            .slice(0, 50)
            .join(" ") + "..."
        );
    },
    route(key, value) {
      if (value.text === undefined)
        return (window.location.href = "/manual/" + key);
      else return (window.location.href = "/manual/" + key + "/" + value.title);
    },
  },
  mounted() {},
};
</script>

<style>
a:link {
  color: #00c180;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: #00c180;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: #00c180;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: #00c180;
  background-color: transparent;
  text-decoration: underline;
}
</style>