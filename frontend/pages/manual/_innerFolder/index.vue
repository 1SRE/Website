<template>
  <v-container>
    <!-- <h1 v-for="(value, key) in data" :key="(value, key)">{{ key }}</h1> -->
    <div v-for="(value, key) in data" :key="(value, key)">
      <h1>{{ value.title }}</h1>
      <v-row justify="center" align="center">
        <v-col align-self="stretch" cols="auto" sm="3" md="3">
          <v-card
            @click="route(value.title, value.content[0])"
            height="100%"
            min-width="100%"
            max-width="100%"
          >
            <v-card-title>{{ value.content[0].title }}</v-card-title>
            <v-card-text>
              <p>{{ shorten(value.content[0].text) }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          v-if="value.content.length >= 2"
          align-self="stretch"
          cols="auto"
          sm="3"
          md="3"
        >
          <v-card
            @click="route(value.title, value.content[1])"
            height="100%"
            min-width="100%"
            max-width="100%"
          >
            <v-card-title>{{ value.content[1].title }}</v-card-title>
            <v-card-text>
              <p>{{ shorten(value.content[1].text) }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-else>
          <v-skeleton-loader
            type="card"
            height="100%"
            min-width="100%"
            max-width="100%"
          ></v-skeleton-loader>
        </v-col>
        <v-col
          v-if="value.content.length >= 3"
          align-self="stretch"
          cols="auto"
          sm="3"
          md="3"
        >
          <v-card
            @click="route(value.title, value.content[2])"
            height="100%"
            min-width="100%"
            max-width="100%"
          >
            <v-card-title>{{ value.content[2].title }}</v-card-title>
            <v-card-text>
              <p>{{ shorten(value.content[2].text) }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-else>
          <v-skeleton-loader
            type="card"
            height="100%"
            min-width="100%"
            max-width="100%"
          ></v-skeleton-loader>
        </v-col>
        <v-col
          v-if="value.content.length >= 4"
          align-self="stretch"
          cols="auto"
          sm="3"
          md="3"
        >
          <v-card
            @click="route(value.title, value.content[3])"
            height="100%"
            min-width="100%"
            max-width="100%"
          >
            <v-card-title>{{ value.content[3].title }}</v-card-title>
            <v-card-text>
              <p>{{ shorten(value.content[3].text) }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-else>
          <v-skeleton-loader
            type="card"
            height="100%"
            min-width="100%"
            max-width="100%"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <center><p>
        <a :href="preText + value.title">click for more</a>
      </p></center>
      
    </div>
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
      preText: "/manual/",
    };
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
      if (value.text === undefined) return window.location.href = "/manual/" + key;
      else return window.location.href = "/manual/" + key + "/" + value.title;
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