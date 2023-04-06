<template>
  <v-container class="bg-surface-variant">
    <v-row>
      <v-col cols="auto" sm="12">
        <center>
          <h1>
            Your one-stop-shop to learn anything and everything about Linux,
            networking, and other system concepts for free*
          </h1>
        </center>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="video-container" cols="auto" sm="12">
        <iframe
          src="https://www.youtube.com/embed/Vd8oTsKknq4"
          title="Prelaunch Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 10%; /* 16:9 */
  display: block;
  margin: auto;
  height: "100%";
}
.video-container iframe {
  position: relative;
  width: 100%;
  height: 80vh;
}
</style>