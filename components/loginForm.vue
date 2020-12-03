<template>
  <div class="d-flex justify-content-center flex-column">
    <div class="form-group">
      <label for="usernameInput">username</label>
      <input v-model="usernameInput" type="text" class="form-control" id="usernameInput" placeholder="">
    </div>
    <div class="form-group">
      <label for="usernameInput">password</label>
      <input v-model="passwordInput" type="password" class="form-control" id="passwordInput">
    </div>
    <button type="button" class="btn btn-dark" @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    usernameInput: '',
    passwordInput: '',
  }),
  methods: {
    async login() {
      var self = this
      await this.$axios.$post('/api/auth/signin', {
        "username": this.usernameInput,
        "password": this.passwordInput
      })
          .then(function (response) {
            localStorage.setItem('jwt', response.accessToken)
            localStorage.setItem('username', response.username)
            self.$nuxt.$router.replace({path: '/'})
          })
          .catch(function (error) {
            console.log(error);
            self.error = "login or password incorrect."
          });
    }
  }
}
</script>

<style scoped>

</style>
