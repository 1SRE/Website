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
                  label="Username"
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
            <v-card-subtitle><center><a id="createAccountTXT" href="/register">Don't have an account?</a></center></v-card-subtitle>
            <v-card-actions>
              <v-btn block color="success" v-on:keyup.enter="loginUser()" v-on:click="loginUser()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>

<style scoped>
#createAccountTXT {
  color: #ed5555;
}
</style>

<script>
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
        try {
          await this.$auth.loginWith('local', {data: {username: this.userInfo["username"], password: this.userInfo["password"]}}).then((data) => {
            const response = data
            this.$auth.setUser({user: this.userInfo["username"]})
            this.$auth.setUserToken(response.data["key"])
            this.$auth.loggedIn = true
          })
        } catch (err) {
          console.log(err)
        }
    }
  },
};
</script>

<style>
</style>