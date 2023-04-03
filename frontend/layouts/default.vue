<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title>1SRE</v-toolbar-title>
      <v-spacer />
      <v-btn text color="success">Login</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <span>Most of the frontend code is templated 😅</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
