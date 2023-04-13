<template>
  <v-container fluid>
    <v-row>
      <!-- <v-img id="backgroundImage" src="https://picsum.photos/id/11/500/300"></v-img> -->
      <v-layout align-center justify-center wrap>
        <v-flex xs16 sm12 md8>
          <v-card class="elevation-12">
            <v-toolbar class="text-center" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account-circle"
                  name="username"
                  label="username"
                  type="text"
                  v-model="userInfo.username"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="userInfo.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="success" v-on:click="loginUser(userInfo)">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: "nishipoo",
        password: "asdfj@!(jfK!@",
      },
    };
  },
  methods: {
    async loginUser(userInfo) {
        try {
          let response = await this.$auth.loginWith('local', {data: this.userInfo})
          if (response["status"] === 200) this.$auth.setUser("asdasd")
          console.log(response)
        } catch (err) {
          console.log(err)
        }
    }
  },
};
</script>

<style>
</style>