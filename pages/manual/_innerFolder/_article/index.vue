<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col cols="12">
        <v-sheet tile class="pa-5 font-weight-black text-h5">
          {{ article }}
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-16 text-h8" id="articleText">If this text doesn't disappear, you visited a malformed URL...</v-sheet>
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
import showdown from "showdown";

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
    return { folder, article };
  },
  methods: {
    injectCardText(jsonObject) {
      jsonObject.forEach((object) => {
        if (object.hasOwnProperty("content")) {
          object["content"].forEach((nestedObject) => {
            this.injectCardText(object["content"]);
          });
        }
        if (
          object["title"] == this.article ||
          object["title"] == this.article + "?" ||
          object["title"] == this.article + "!"
        ) {
          if (object["type"] == "article") {
            var converter = new showdown.Converter({tables: true});
            return (document.getElementById("articleText").innerHTML =
              converter.makeHtml(object["text"]));
          }
        }
      });
      return undefined;
    },
  },
  mounted() {
    this.injectCardText(this.data);
  },
  beforeMount() {},
  computed: {},
};
</script>

<style>
#articleText {
  overflow: hidden;
}
</style>