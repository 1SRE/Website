<template>
  <v-app dark>
    <v-img
      class="mx-2"
      src="../static/logo.png"
      max-height="40"
      max-width="40"
      contain
    ></v-img>
    <v-app-bar fixed dense app>
      <nuxt-link to="/">
        <v-toolbar-title>1SRE</v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text color="red" href="https://discord.gg/7Jv879QhKM">Discord</v-btn>
        <v-btn text to="manual">Manual</v-btn>
        <v-btn text color="success">Login</v-btn>
      </v-toolbar-items>
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
