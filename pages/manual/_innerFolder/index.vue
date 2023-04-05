<template>
  <v-container>
    <!-- <h1 v-for="(value, key) in data" :key="(value, key)">{{ key }}</h1> -->

    <h1>{{ folderName }}</h1>
    <v-row align="center">
      <!-- for loop cols -->
      <v-col v-for="(value, key) in folderObjects.content" :key="(value, key)" align-self="stretch" cols="auto" sm="3" md="3">
        <v-card @click="redirect(value.title)" height="100%" min-width="100%" max-width="100%">
          <v-card-title>{{ value.title }}</v-card-title>
          <v-card-text>
            <p>{{ shorten(value.text) }}</p>
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
      folderObjects: this.getContent(data),
    };
  },
  async asyncData({ params }) {
    const folderName = params.innerFolder
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
    getContent(data) {
      for (let i = 0; i < data.length; i++) {
        const object = data[i];
        if (object.hasOwnProperty("content")) {
          for (let j = 0; j < object["content"].length; j++) {
            const nestedObject = object["content"][j];
            this.getContent(nestedObject);
          }
        }
        if (object["title"] == this.$route.params.innerFolder) {
          return object;
        }
      }
    },
    redirect(key, value) {
      console.log(key)
      return (window.location.href = "/manual/" + this.$route.params.innerFolder + "/" + key);
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