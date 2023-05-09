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
        <v-menu class="dropdown" open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-if="$auth.loggedIn" v-bind="attrs" v-on="on">USERNAME GOES HERE</v-btn>
            <v-btn text v-else v-bind="attrs" v-on="on" color="white">Info</v-btn>
          </template>

          <v-list class="pa-6">
            <v-list-item>
              <v-row v-if="$auth.loggedIn">
                <v-list-item href="/dashboard">Dashboard</v-list-item>
                <v-list-item href="/manual">Manual</v-list-item>
                <v-list-item href="https://discord.gg/7Jv879QhKM">Discord</v-list-item>
                <v-list-item href="/settings">Settings</v-list-item>
                <v-list-item @click="logout()">Log out</v-list-item>
              </v-row>
              <v-row v-else>
                <v-list-item href="/manual">Manual</v-list-item>
                <v-list-item href="/login">Login</v-list-item>
                <v-list-item href="/register">Sign Up</v-list-item>
                <v-list-item href="https://discord.gg/7Jv879QhKM">Discord</v-list-item>
              </v-row>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- <v-btn v-else text href="/login" color="success">Login</v-btn> -->
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
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
      } catch (err) {
        console.log(err);
      }
    },
  },
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