<template>
  <v-container fluid>
    <v-row>
      <!-- <v-img id="backgroundImage" src="https://picsum.photos/id/11/500/300"></v-img> -->
      <v-layout align-center justify-center wrap>
        <v-flex xs16 sm12 md8>
          <v-card class="elevation-12">
            <v-toolbar class="text-center" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-email"
                  name="email"
                  label="Email"
                  type="text"
                  v-model="userInfo.email"
                ></v-text-field>
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
                  v-model="userInfo.password1"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Retype password"
                  type="password"
                  v-model="userInfo.password2"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-subtitle><center><a id="loginAccountTXT" href="/login">Already signed up?</a></center></v-card-subtitle>

            <v-card-actions>
              <v-btn block color="error" type="submit" v-on:keyup.enter="registerUser()" v-on:click="registerUser()">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>
  </v-container>
</template>



<script>
export default {
  name: "Register",
  data() {
    return {
      userInfo: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
    };
  },
  methods: {
    async registerUser() {
        try {
          await this.$axios.post('dj-rest-auth/registration/', {username: this.userInfo["username"], email: this.userInfo["email"], password1: this.userInfo["password1"], password2: this.userInfo["password2"]})
          await this.$auth.loginWith('local', {data: {username: this.userInfo["username"], email: this.userInfo["email"], password: this.userInfo["password1"]}}).then((data) => {
            const response = data
            this.$auth.setUser({user: this.userInfo["username"]})
            this.$auth.setUserToken(response.data["key"])
            this.$auth.loggedIn = true
          })
          console.log(this.$auth)
        } catch (err) {
          console.log(err)
        }
    }
  },
};
</script>

<style>
#loginAccountTXT {
}
</style>