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
                  label="email"
                  type="text"
                  v-model="userInfo.email"
                ></v-text-field>
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
                  v-model="userInfo.password1"
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="userInfo.password2"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-subtitle><center><a id="loginAccountTXT" href="/login">Already signed up?</a></center></v-card-subtitle>

            <v-card-actions>
              <v-btn block color="error" v-on:click="registerUser(userInfo)">Register</v-btn>
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
        username: "nishipoo",
        email: "someEmail@gmail.com",
        password1: "asdfj@!(jfK!@",
        password2: "asdfj@!(jfK!@",
      },
    };
  },
  methods: {
    async registerUser(userInfo) {
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
#loginAccountTXT {
}
</style>