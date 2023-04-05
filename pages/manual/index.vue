<template>
  <v-container>
    <!-- <h1 v-for="(value, key) in data" :key="(value, key)">{{ key }}</h1> -->
    <div v-for="value in data" :key="value">
      <template v-if="value.content.length >= 1">
      <h1><a :href="preText + value.title">{{ value.title.split(". ")[1] }}</a></h1>
      <v-row >
        <template v-for="(obj, num) in value.content">
          <template v-if="num <= 3">
            <v-col align-self="stretch" cols="auto" sm="3" md="3">
              <v-card
                @click="route(value.title, obj.title)"
                height="100%"
                min-width="100%"
                max-width="100%"
              >
                <v-card-title>{{ obj.title }}</v-card-title>
                <v-card-text>
                  <p>{{ shorten(obj.text) }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </template>
       </template>
      </v-row>
      </template>
      
      
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
      return window.location.href = "/manual/" + key + "/" + value;
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