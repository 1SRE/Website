<template>
  <v-container>
    <!-- <h1 v-for="(value, key) in data" :key="(value, key)">{{ key }}</h1> -->
    <div v-for="(value, key) in data" :key="(value, key)">
      <h1>{{ key }}</h1>
      <v-row justify="center" align="center">
        <v-col align-self="stretch" cols="auto" sm="3" md="3">
          <v-card height="100%">
            <v-card-title>{{ cardTitle(value)[0] }}</v-card-title>
            <v-card-text>
              <p>
                {{ cardText(value)[0] }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col align-self="stretch" cols="auto" sm="3" md="3">
          <v-card height="100%">
            <v-card-title>{{ cardTitle(value)[1] }}</v-card-title>
            <v-card-text>
              <p>
                {{ cardText(value)[1] }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col align-self="stretch" cols="auto" sm="3" md="3">
          <v-card height="100%">
            <v-card-title>{{ cardTitle(value)[2] }}</v-card-title>
            <v-card-text>
              <p>
                {{ cardText(value)[2] }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col align-self="stretch" cols="auto" sm="3" md="3">
          <v-card height="100%">
            <v-card-title>{{ cardTitle(value)[3] }}</v-card-title>
            <v-card-text>
              <p>
                {{ cardText(value)[3] }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <p><a :href="preText+key">{{ key }}</a></p>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import data from "../../static/manual.json";
import marked from "marked";

export default {
  name: "ManualPage",
  data() {
    return {
      data: data,
      preText: "/manual/"
    };
  },
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